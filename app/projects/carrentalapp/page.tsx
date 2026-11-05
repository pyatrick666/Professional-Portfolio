import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscGithub, VscLinkExternal, VscCode, VscDatabase, VscCheck, VscWarning } from 'react-icons/vsc';
import styles from '@/styles/ChessMateCaseStudy.module.css';

export const metadata: Metadata = {
  title: 'CarRentalApp Case Study',
  description: 'A C# Windows Forms car-rental application with booking records, search, and SQL Server LocalDB.',
};

const technologies = ['C#', '.NET Windows Forms', 'SQL Server LocalDB', 'ADO.NET', 'Parameterized SQL'];

export default function CarRentalAppCaseStudy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <Link href="/projects" className={styles.back}><VscArrowLeft size={16} /> All projects</Link>
        <p className={styles.eyebrow}>PROJECT CASE STUDY · DESKTOP DEVELOPMENT</p>
        <h1 className={styles.title}>CarRentalApp</h1>
        <p className={styles.lede}>
          A C# Windows Forms application for a car-rental workflow, with customer and booking
          forms, rental-record browsing, search, and local SQL Server data storage.
        </p>

        <div className={styles.actions}>
          <a href="https://github.com/pyatrick666/CarRentalApp" target="_blank" rel="noopener noreferrer" className={styles.primary}>
            <VscGithub size={17} /> Source code <VscLinkExternal size={13} />
          </a>
        </div>

        <section className={styles.panel}>
          <h2>At a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Type</dt><dd>Windows desktop application</dd></div>
            <div><dt>Framework</dt><dd>C# · Windows Forms</dd></div>
            <div><dt>Data access</dt><dd>Microsoft.Data.SqlClient</dd></div>
            <div><dt>Database</dt><dd>SQL Server LocalDB</dd></div>
            <div><dt>Core workflow</dt><dd>Login, booking, and rental records</dd></div>
            <div><dt>Repository</dt><dd><a href="https://github.com/pyatrick666/CarRentalApp" target="_blank" rel="noopener noreferrer">View source files</a></dd></div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2><VscCode size={19} /> The problem</h2>
          <p>
            A small rental operation needs a way to capture booking details and retrieve existing
            records. This project explores a desktop workflow that collects customer, vehicle,
            rental-duration, and optional-cover information, then stores it for later review.
          </p>
        </section>

        <section className={styles.section}>
          <h2><VscCheck size={19} /> Implemented workflow</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}><h3>Welcome and login screens</h3><p>Windows Forms screens provide the application's entry and sign-in flow.</p></div>
            <div className={styles.feature}><h3>Booking form</h3><p>Collects customer details, licence confirmation, rental duration, car type, fuel type, and optional cover selections.</p></div>
            <div className={styles.feature}><h3>Booking persistence</h3><p>Uses a repository class to insert booking records into the local SQL Server database.</p></div>
            <div className={styles.feature}><h3>Rental records and search</h3><p>Loads saved bookings into a DataGridView and supports searching by booking ID and customer name.</p></div>
          </div>
        </section>

        <section className={styles.section}>
          <h2><VscDatabase size={19} /> Data flow</h2>
          <p>
            The booking form validates required fields and calculates a displayed estimate. The
            BookingRepos class uses Microsoft.Data.SqlClient to insert records and retrieve or search
            rows from dbo.bookinginfo. The checked-in App.config points to SQL Server LocalDB, not
            MySQL.
          </p>
          <div className={styles.architecture} aria-label="CarRentalApp data flow">
            <span>Windows Forms · C#</span><b>→</b><span>BookingRepos</span><b>→</b><span>SQL Server LocalDB</span>
          </div>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        <section className={styles.section}>
          <h2><VscWarning size={19} /> Current limitation and next step</h2>
          <p>
            The current login implementation contains hard-coded demo credentials. That is suitable
            only for a learning prototype, not a real rental business. A production-ready version
            should replace it with securely stored, hashed credentials and role-based access.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Booking workflow details</h2>
          <p>
            The user moves from the welcome/login screen to the booking form, enters customer and
            licence details, selects a vehicle and rental duration, and chooses optional cover.
            The application presents an estimate and saves the booking through the repository layer.
            The records view then loads stored rows into a grid and supports lookup by booking ID
            or customer name.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Data and validation approach</h2>
          <p>
            Database operations are grouped in BookingRepos instead of being scattered across
            form event handlers. Parameterized SQL is used for inserts and search filters, reducing
            the risk of treating user-entered text as SQL. The form also checks required inputs
            before attempting to save.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Known gaps</h2>
          <p>
            This is a desktop learning project using LocalDB on the machine where it is configured.
            It does not yet establish production-grade authentication, shared multi-user hosting,
            or a complete vehicle-availability and payment workflow. The demo credentials should
            not be reused in a deployed business system.
          </p>
        </section>
        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Building a multi-window Windows Forms application in C#.</li>
            <li>Validating user input and calculating booking estimates.</li>
            <li>Separating database operations into a repository class.</li>
            <li>Using parameterized SQL commands for booking inserts and searches.</li>
            <li>Displaying and filtering stored records in a DataGridView.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>Inspect the desktop application source.</p>
          <a href="https://github.com/pyatrick666/CarRentalApp" target="_blank" rel="noopener noreferrer">Explore CarRentalApp on GitHub <VscLinkExternal size={14} /></a>
          <Link href="/contact">Contact me about my work →</Link>
        </footer>
      </article>
    </main>
  );
}
