'use client';

import { useState } from 'react';

function Field({ label, id, type = 'text', placeholder, required = false, name }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} required={required} />
    </>
  );
}

function TextAreaField({ label, id, placeholder, rows = 5, required = false, name }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={name} rows={rows} placeholder={placeholder} required={required} />
    </>
  );
}

export default function ContactForm({ mode = 'contact' }) {
  const isDemo = mode === 'demo';
  const [feedback, setFeedback] = useState({ type: '', title: '', message: '' });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setSending(true);
    setFeedback({ type: 'info', title: 'Sending...', message: 'Please wait while we process your request.' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send request');
      }

      setFeedback({
        type: 'success',
        title: 'Success',
        message: data.message || 'Your request was sent successfully.'
      });

      form.reset();
    } catch (error) {
      setFeedback({
        type: 'error',
        title: 'Unable to send',
        message: error.message || 'Something went wrong.'
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contact-form" data-form={mode} onSubmit={handleSubmit}>
      <input type="hidden" name="type" value={mode} />

      {isDemo ? (
        <>
          <Field
            label="Full Name"
            id="demo-full-name"
            name="fullName"
            placeholder="Enter your full name"
            required
          />

          <Field label="Email" id="demo-email" name="email" type="email" placeholder="Enter your email" required />

          <Field
            label="Organization"
            id="demo-organization"
            name="organization"
            placeholder="University / Hospital / Company"
          />

          <Field
            label="Role"
            id="demo-role"
            name="role"
            placeholder="Doctor / Caregiver / Researcher / Student"
          />

          <div className="split form-split">
            <div>
              <label htmlFor="demo-date">Preferred Date</label>
              <input id="demo-date" name="preferredDate" type="date" />
            </div>
            <div>
              <label htmlFor="demo-time">Preferred Time</label>
              <input id="demo-time" name="preferredTime" type="time" />
            </div>
          </div>

          <Field
            label="Meeting Type"
            id="demo-meeting"
            name="meetingType"
            placeholder="Online / On-site"
          />

          <Field
            label="Focus Area"
            id="demo-focus"
            name="focusArea"
            placeholder="AI / Backend / Cloud / Flutter / Full system"
          />

          <TextAreaField
            label="Notes"
            id="demo-notes"
            name="notes"
            placeholder="Anything you want us to know"
          />
        </>
      ) : (
        <>
          <Field label="Name" id="contact-name" name="name" placeholder="Enter your name" required />

          <Field label="Email" id="contact-email" name="email" type="email" placeholder="Enter your email" required />

          <TextAreaField
            label="Message"
            id="contact-message"
            name="message"
            placeholder="Write your message"
            required
          />
        </>
      )}

      <button type="submit" disabled={sending}>
        {isDemo ? 'Confirm Booking' : 'Send Message'}
      </button>

      <div className="form-status" aria-live="polite">
        {feedback.type ? (
          <div className={feedback.type === 'success' ? 'success-panel' : feedback.type === 'error' ? 'error-panel' : 'status-message'}>
            <strong>{feedback.title}</strong>
            <p>{feedback.message}</p>
          </div>
        ) : null}
      </div>
    </form>
  );
}