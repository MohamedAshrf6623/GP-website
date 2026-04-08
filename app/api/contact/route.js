import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildRows(payload, type) {
  const subjectLabel = type === 'demo' ? 'Demo Booking' : 'Contact Message';
  const details = Object.entries(payload)
    .filter(([key, value]) => !['type', 'name', 'fullName', 'email'].includes(key) && value !== undefined && value !== null && String(value).trim() !== '')
    .map(([key, value]) => [key, String(value)]);

  return [
    ['Type', subjectLabel],
    ['Name', payload.fullName || payload.name || 'N/A'],
    ['Email', payload.email || 'N/A'],
    ...details
  ]
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #dbe4da;"><strong>${escapeHtml(key)}</strong></td><td style="padding:8px 12px;border:1px solid #dbe4da;">${escapeHtml(value)}</td></tr>`
    )
    .join('');
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const type = payload?.type === 'demo' ? 'demo' : 'contact';
    const name = payload?.fullName || payload?.name;
    const email = payload?.email;
    const message = payload?.message || payload?.notes;

    if (!name || !email) {
      return NextResponse.json({ success: false, message: 'Name and email are required' }, { status: 400 });
    }

    if (type === 'contact' && !message) {
      return NextResponse.json({ success: false, message: 'Message is required' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const emailFrom = process.env.EMAIL_FROM || smtpUser;

    if (!smtpUser || !smtpPassword || !emailFrom) {
      return NextResponse.json({ success: false, message: 'SMTP configuration is missing' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPassword
      }
    });

    const subjectLabel = type === 'demo' ? 'Demo Booking' : 'Contact Message';
    const subjectName = payload.fullName || payload.name || 'Unknown sender';
    const replyTo = payload.email || smtpUser;
    const details = Object.entries(payload)
      .filter(([key, value]) => !['type', 'name', 'fullName', 'email'].includes(key) && value !== undefined && value !== null && String(value).trim() !== '')
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    await transporter.sendMail({
      from: emailFrom,
      to: smtpUser,
      replyTo,
      subject: `AlzaWare ${subjectLabel} from ${subjectName}`,
      text:
        type === 'demo'
          ? `New demo booking submitted from the AlzaWare website.\nName: ${payload.fullName || payload.name || 'N/A'}\nEmail: ${payload.email || 'N/A'}${details ? `\n${details}` : ''}`
          : `New contact message submitted from the AlzaWare website.\nName: ${payload.fullName || payload.name || 'N/A'}\nEmail: ${payload.email || 'N/A'}\nMessage: ${payload.message || 'N/A'}${details ? `\n${details}` : ''}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#112218;line-height:1.5;">
          <h2 style="margin:0 0 16px;">AlzaWare ${escapeHtml(subjectLabel)}</h2>
          <table style="border-collapse:collapse;width:100%;max-width:760px;">${buildRows(payload, type)}</table>
        </div>
      `
    });

    return NextResponse.json(
      {
        success: true,
        message:
          type === 'demo'
            ? 'Your demo request was sent successfully.'
            : 'Your message was sent successfully.'
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Failed to send request'
      },
      { status: 500 }
    );
  }
}