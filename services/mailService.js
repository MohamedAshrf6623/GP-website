const nodemailer = require('nodemailer');
const ErrorHandler = require('../utils/errorHandler');

const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;
const emailFrom = process.env.EMAIL_FROM || smtpUser;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: smtpUser,
    pass: smtpPassword
  }
});

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const sendFormEmail = async (payload = {}) => {
  if (!smtpUser || !smtpPassword || !emailFrom) {
    throw new ErrorHandler('SMTP configuration is missing', 500);
  }

  const type = payload.type === 'demo' ? 'demo' : 'contact';
  const subjectLabel = type === 'demo' ? 'Demo Booking' : 'Contact Message';
  const subjectName = payload.fullName || payload.name || 'Unknown sender';
  const replyTo = payload.email || smtpUser;

  const details = Object.entries(payload)
    .filter(([key, value]) => !['type', 'name', 'fullName', 'email'].includes(key) && value !== undefined && value !== null && String(value).trim() !== '')
    .map(([key, value]) => [key, String(value)]);

  const rows = [
    ['Type', subjectLabel],
    ['Name', payload.fullName || payload.name || 'N/A'],
    ['Email', payload.email || 'N/A'],
    ...details
  ]
    .map(([key, value]) => `<tr><td style="padding:8px 12px;border:1px solid #dbe4da;"><strong>${escapeHtml(key)}</strong></td><td style="padding:8px 12px;border:1px solid #dbe4da;">${escapeHtml(value)}</td></tr>`)
    .join('');

  const messageText = type === 'demo'
    ? [
        'New demo booking submitted from the AlzaWare website.',
        `Name: ${payload.fullName || payload.name || 'N/A'}`,
        `Email: ${payload.email || 'N/A'}`,
        ...details.map(([key, value]) => `${key}: ${value}`)
      ].join('\n')
    : [
        'New contact message submitted from the AlzaWare website.',
        `Name: ${payload.fullName || payload.name || 'N/A'}`,
        `Email: ${payload.email || 'N/A'}`,
        `Message: ${payload.message || 'N/A'}`,
        ...details.map(([key, value]) => `${key}: ${value}`)
      ].join('\n');

  const mailOptions = {
    from: emailFrom,
    to: smtpUser,
    replyTo,
    subject: `AlzaWare ${subjectLabel} from ${subjectName}`,
    text: messageText,
    html: `
      <div style="font-family:Arial,sans-serif;color:#112218;line-height:1.5;">
        <h2 style="margin:0 0 16px;">AlzaWare ${escapeHtml(subjectLabel)}</h2>
        <table style="border-collapse:collapse;width:100%;max-width:760px;">${rows}</table>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendFormEmail
};
