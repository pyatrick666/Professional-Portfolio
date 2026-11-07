'use client';

import { FormEvent } from 'react';
import { VscArrowRight, VscMail } from 'react-icons/vsc';
import styles from '@/styles/OpportunityForm.module.css';

const RECIPIENT = 'pyatrick666@gmail.com';

export default function OpportunityForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const name = String(values.get('name') || '').trim();
    const email = String(values.get('email') || '').trim();
    const phone = String(values.get('phone') || '').trim();
    const organization = String(values.get('organization') || '').trim();
    const opportunity = String(values.get('opportunity') || '').trim();
    const details = String(values.get('details') || '').trim();

    const subject = `Portfolio enquiry: ${opportunity} — ${name}`;
    const body = [
      'Hello Pratik,',
      '',
      'I would like to get in touch regarding an opportunity.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone / WhatsApp: ${phone}`,
      `Company / Team: ${organization || 'Not provided'}`,
      `Opportunity: ${opportunity}`,
      '',
      'Message:',
      details,
      '',
      'Sent from the contact form on your portfolio.',
    ].join('\n');

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RECIPIENT)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(gmailUrl);
  };

  return (
    <section className={styles.section} aria-labelledby="opportunity-title">
      <div className={styles.heading}>
        <span className={styles.eyebrow}>Work together</span>
        <h2 id="opportunity-title">Have an opportunity?</h2>
        <p>
          Hiring, offering an internship, building a team, or planning a project?
          Send a short introduction and I’ll get back to you.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Your name <b>*</b></span>
            <input name="name" type="text" autoComplete="name" placeholder="Recruiter or contact name" maxLength={80} required />
          </label>
          <label className={styles.field}>
            <span>Email address <b>*</b></span>
            <input name="email" type="email" autoComplete="email" placeholder="you@company.com" maxLength={120} required />
          </label>
          <label className={styles.field}>
            <span>Phone / WhatsApp number <b>*</b></span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="+977 98XXXXXXXX" maxLength={30} required />
          </label>
          <label className={styles.field}>
            <span>Company / team <small>Optional</small></span>
            <input name="organization" type="text" autoComplete="organization" placeholder="Company or project team" maxLength={100} />
          </label>
        </div>

        <label className={styles.field}>
          <span>What is this about? <b>*</b></span>
          <select name="opportunity" defaultValue="" required>
            <option value="" disabled>Select an opportunity</option>
            <option value="Full-time / entry-level role">Full-time / entry-level role</option>
            <option value="Internship">Internship</option>
            <option value="Freelance / paid project">Freelance / paid project</option>
            <option value="Team project / collaboration">Team project / collaboration</option>
            <option value="Other professional opportunity">Other professional opportunity</option>
          </select>
        </label>

        <label className={styles.field}>
          <span>Short message <b>*</b></span>
          <textarea name="details" rows={5} maxLength={1200} placeholder="Tell me a little about the role, project, skills needed, or how we could work together..." required />
        </label>

        <button className={styles.submit} type="submit">
          <VscMail size={18} />
          <span>Continue with Gmail</span>
          <VscArrowRight size={18} />
        </button>
        <p className={styles.note}>This opens a pre-filled Gmail draft addressed to {RECIPIENT}. Your message is not sent until you press Send in Gmail.</p>
      </form>
    </section>
  );
}
