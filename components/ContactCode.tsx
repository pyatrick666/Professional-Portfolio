import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'pyatrick666.github.io/Professional-Portfolio',
    href: 'https://pyatrick666.github.io/Professional-Portfolio',
  },
  {
    social: 'email',
    link: 'pyatrick666@gmail.com',
    href: 'mailto:pyatrick666@gmail.com',
  },
  {
    social: 'github',
    link: 'pyatrick666',
    href: 'https://github.com/pyatrick666',
  },
  {
    social: 'linkedin',
    link: 'pratik-poudel-b3264a263',
    href: 'https://www.linkedin.com/in/pratik-poudel-b3264a263/',
  },
  {
    social: 'instagram',
    link: 'em_ev0l',
    href: 'https://www.instagram.com/em_ev0l/',
  },
  {
    social: 'facebook',
    link: 'em_ev0l',
    href: 'https://t.me/em_ev0l',
  },
  {
    social: 'youtube',
    link: '@emevol666',
    href: 'https://www.youtube.com/@emevol666',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
