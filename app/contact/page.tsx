import { Metadata } from 'next';

import ContactCode from '@/components/ContactCode';
import OpportunityForm from '@/components/OpportunityForm';

import styles from '@/styles/ContactPage.module.css';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Feel free to reach out to me through any of the social platforms below.
        I&apos;m always open to new opportunities, team projects and professional connections.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
      <OpportunityForm />
    </div>
  );
};

export default ContactPage;
