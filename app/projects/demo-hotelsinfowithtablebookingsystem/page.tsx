import type { Metadata } from 'next';
import Link from 'next/link';
import { VscArrowLeft, VscLinkExternal, VscCheck, VscCode, VscCalendar, VscDatabase } from 'react-icons/vsc';
import { assetPath } from '@/lib/assets';
import styles from '@/styles/ChessMateCaseStudy.module.css';

const DEMO_URL = 'https://patrickdev.lovable.app/#top';

export const metadata: Metadata = {
  title: 'Hotel Information & Table Booking System Case Study',
  description: 'A detailed case study of a Nepali hotel and restaurant website with live hotel information, Google reviews and photos, menu management, table booking requests and an owner dashboard.',
  // The implementation repository is private. Keep this case study directly shareable
  // without adding it to search results or the public sitemap.
  robots: { index: false, follow: true },
};

const technologies = [
  'TypeScript',
  'React 19',
  'TanStack Start',
  'TanStack Router',
  'Vite',
  'Tailwind CSS 4',
  'Supabase',
  'PostgreSQL',
  'TanStack Query',
  'Radix UI',
  'date-fns',
  'Vitest',
  'Drizzle migration files',
];

export default function HotelBookingCaseStudy() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <Link href="/projects" className={styles.back}><VscArrowLeft size={16} /> All projects</Link>
        <p className={styles.eyebrow}>PROJECT CASE STUDY · FULL-STACK WEB APPLICATION</p>
        <h1 className={styles.title}>Hotel Information &amp; Table Booking System</h1>
        <p className={styles.lede}>
          A hospitality website concept for Hotel Paradise Inn in Tribeni, Nepal. It brings the
          guest-facing hotel story, photo gallery, menu, Google reviews, visit information and
          table-request journey into one responsive experience, with a separate owner area for
          managing reservations and key site content.
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            View live project <VscLinkExternal size={15} />
          </a>
          <span className={styles.secondary}>Private implementation repository · source code not published</span>
        </div>

        <figure className={styles.projectArtwork}>
          <img src={assetPath('/logos/hotel.svg')} alt="Hotel Paradise Inn project artwork" />
          <figcaption>Project identity artwork · open the live demo to explore the current interface</figcaption>
        </figure>

        <section className={styles.panel}>
          <h2>Project at a glance</h2>
          <dl className={styles.facts}>
            <div><dt>Project</dt><dd>Hotel Paradise Inn website and table-booking experience</dd></div>
            <div><dt>Location represented</dt><dd>Triveni Road, Tribeni, Nepal</dd></div>
            <div><dt>Application type</dt><dd>Responsive, full-stack hospitality web application</dd></div>
            <div><dt>Frontend</dt><dd>React 19, TypeScript and TanStack Start</dd></div>
            <div><dt>Routing and data loading</dt><dd>TanStack Router and TanStack Query</dd></div>
            <div><dt>Database</dt><dd>Supabase-managed PostgreSQL, using UUID records, JSONB settings, constraints, triggers and Row Level Security</dd></div>
            <div><dt>Authentication</dt><dd>Supabase Auth with email/password sign-in and an admin/user role model</dd></div>
            <div><dt>Database change history</dt><dd>Three checked-in SQL migrations under Drizzle migrations</dd></div>
            <div><dt>Styling and UI</dt><dd>Tailwind CSS 4, Radix UI components and custom styling</dd></div>
            <div><dt>Public demonstration</dt><dd><a href={DEMO_URL} target="_blank" rel="noopener noreferrer">patrickdev.lovable.app</a></dd></div>
            <div><dt>Source availability</dt><dd>Private repository; source code intentionally not linked</dd></div>
            <div><dt>Project status</dt><dd>Live demonstration available; operational readiness items remain to be verified</dd></div>
          </dl>
        </section>

        <section className={styles.section}>
          <h2><VscCode size={19} /> The brief and the problem</h2>
          <p>
            Guests often need to search across separate channels to understand a hotel or restaurant:
            what the place offers, what is on the menu, where it is, when it is open, what other
            visitors say, and how to reserve a table. This project brings those discovery steps
            together in one place and gives the venue a central interface for handling incoming
            table requests and updating important public information.
          </p>
          <p style={{ marginTop: 14 }}>
            The experience is shaped around two audiences: guests who need a simple, trustworthy
            way to plan a visit, and the owner who needs a manageable way to review reservations
            and keep the website information current.
          </p>
        </section>

        <section className={styles.section}>
          <h2><VscCheck size={19} /> Guest-facing experience</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Hospitality-led landing page</h3>
              <p>
                A full-screen photographic hero introduces Hotel Paradise Inn, its restaurant and
                stay offering, location context and primary actions to book a table or explore
                guest reviews.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Hotel story and highlights</h3>
              <p>
                A story section presents the venue description and supporting highlights such as
                Google rating, review count, menu-item count and the number of operating days
                returned by the site's settings.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Photo gallery</h3>
              <p>
                Google Place photos can populate a responsive gallery. Guests can open images in
                a full-screen lightbox, move between images with the keyboard and close the view
                with Escape.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Editable menu presentation</h3>
              <p>
                Menu items are grouped by category and show a dish name, short description and
                displayed price. The page builds its category navigation from the menu data.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Google review integration</h3>
              <p>
                The reviews area presents the Google rating, available review excerpts and
                reviewer attribution, and links visitors to Google to write a review rather than
                collecting a separate on-site review.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Visit information</h3>
              <p>
                The visit section presents the venue address, configured opening hours, directions
                and a tap-to-call phone action. An embedded Google map is shown when its browser
                key is configured.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2><VscCalendar size={19} /> Table reservation journey</h2>
          <p>
            The booking interface is designed as a request flow rather than an instant,
            automatically confirmed reservation. It collects the information the venue needs to
            contact the guest and confirm the table.
          </p>
          <ol className={styles.learningList}>
            <li><strong>Choose a date.</strong> A calendar disables dates in the past and days marked as closed in the configured weekly hours.</li>
            <li><strong>Choose a time.</strong> Available-looking time choices are generated in 30-minute increments from the configured opening time, stopping one hour before closing.</li>
            <li><strong>Set the party size.</strong> The guest can select between 1 and 20 guests in the current form.</li>
            <li><strong>Enter contact details.</strong> The form requires the guest's name and telephone number.</li>
            <li><strong>Add a note if needed.</strong> An optional short note lets the guest share additional context with the venue.</li>
            <li><strong>Submit a request.</strong> The application writes a pending booking record to the bookings table and displays a request acknowledgement when the database accepts it.</li>
            <li><strong>Confirm with the guest.</strong> The interface tells the guest that the venue will call to confirm; a successful submission is not itself a confirmed table.</li>
          </ol>
          <p style={{ marginTop: 14 }}>
            The time choices are calculated from opening hours. They are not a live inventory
            engine: the current client-side slot generator does not remove times that already have
            another booking. The owner must review requests and confirm availability before
            treating a reservation as final.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Owner dashboard and content management</h2>
          <p>
            A separate <strong>/owner</strong> route provides a sign-in screen and a dashboard
            designed for the venue operator. The current dashboard is organized into three
            working areas rather than exposing a large, complicated administration interface.
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Bookings</h3>
              <p>
                View upcoming requests or switch to all bookings, search by guest name or phone,
                inspect the date, time, party size and note, then mark a request confirmed or
                cancelled, or delete it.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Menu and prices</h3>
              <p>
                Add a menu entry, edit its category, name, description, price and display order,
                save changes, or remove an item. Public menu content is read from the same data.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Opening hours and venue information</h3>
              <p>
                Edit each day's opening and closing times, mark a day closed, update the contact
                phone number and edit the venue story displayed on the public page.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Owner account</h3>
              <p>
                The account area supports updating the owner's username and email, and changing
                the password. Email changes require confirmation through the account email flow.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 14 }}>
            The dashboard includes controls for these workflows, but owner-account provisioning
            and a complete signed-in owner acceptance test are still outstanding. The case study
            does not represent those steps as verified production operations.
          </p>
        </section>

        <section className={styles.section}>
          <h2><VscDatabase size={19} /> Data model and application architecture</h2>
          <p>
            The application uses TanStack Start for the full-stack React application structure.
            TanStack Router defines the public home route and owner route. TanStack Query loads
            site settings and Google Place data, while server functions keep the site-data and
            Google Places requests on the server side.
          </p>
          <div className={styles.architecture}>
            <span>Guest browser</span><b>→</b>
            <span>React UI · TanStack Router</span><b>→</b>
            <span>Server functions</span><b>→</b>
            <span>Supabase · Google Places connector</span>
          </div>
          <p>
            The main data records are separated by responsibility:
          </p>
          <ul className={styles.learningList}>
            <li><strong>site_settings:</strong> the venue phone number, story text and weekly opening-hours configuration.</li>
            <li><strong>menu_items:</strong> menu category, dish name, description, price and sort order.</li>
            <li><strong>bookings:</strong> guest name, phone, booking date, requested time, guest count, note, status and creation timestamp.</li>
            <li><strong>user_roles:</strong> owner/admin role assignments used to authorize dashboard operations.</li>
            <li><strong>profiles:</strong> the signed-in account's editable username and profile timestamp.</li>
            <li><strong>guest_reviews:</strong> a separate local review table with reviewer name, 1–5 rating, review body and timestamp. The current public reviews presentation is driven by Google Places; this local table is present in the database schema but is not the primary displayed review source.</li>
          </ul>
          <p style={{ marginTop: 14 }}>
            PostgreSQL migrations define the tables, constraints, role helper and access policies.
            Row Level Security allows public visitors to read the public site settings and menu
            and submit a pending booking request, while owner-only policies protect booking
            records and management actions. The owner role is checked through the authenticated
            user's role record; a public username alias is not a substitute for password
            authentication.
          </p>
        </section>


        <section className={styles.section}>
          <h2>Database technology and schema — PostgreSQL via Supabase</h2>
          <p>
            The persistence layer is <strong>PostgreSQL</strong>, provided as part of <strong>Supabase</strong>.
            Supabase is used for the hosted database, authentication and the generated, typed
            JavaScript client. The application does not use MySQL or SQL Server for this project.
            The checked-in database change history is stored as SQL migration files in
            <strong> drizzle/migrations</strong>; Drizzle Kit is included as migration tooling.
            The application accesses the data through Supabase's PostgREST client rather than
            using Drizzle ORM as its day-to-day query layer.
          </p>
          <p style={{ marginTop: 14 }}>
            The schema uses PostgreSQL-native features where they are useful: UUID primary keys,
            foreign keys to Supabase Auth users, <strong>JSONB</strong> for weekly opening hours,
            <strong> timestamptz</strong> for audit timestamps, a PostgreSQL role enum, check
            constraints, database triggers and Row Level Security (RLS).
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>bookings</h3>
              <p>
                UUID id; guest name (1–80 characters); phone (5–30 characters); booking_date
                (PostgreSQL date); booking_time (HH:MM text); guests (database constraint 1–30);
                optional note (maximum 300 characters); status (pending, confirmed or cancelled);
                and created_at (timestamptz). New rows default to pending.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>menu_items</h3>
              <p>
                UUID id; category; dish name; description; displayed price stored as text;
                integer sort order; and created_at. Public pages read these records, while
                administrators can add, edit, reorder and delete them.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>site_settings</h3>
              <p>
                A single settings row (id is constrained to 1) stores the contact phone, venue
                story, weekly hours as JSONB and updated_at. This keeps public information
                editable without changing the application code.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>user_roles</h3>
              <p>
                UUID id, user_id linked to auth.users with cascade deletion, and an app_role
                enum containing admin and user. A uniqueness rule prevents the same user from
                receiving the same role twice.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>profiles</h3>
              <p>
                The profile id is also a foreign key to auth.users. It stores the username and
                updated_at timestamp. A database trigger creates a profile row when an Auth
                account is created, and users can read or update only their own profile.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>guest_reviews</h3>
              <p>
                UUID id, reviewer name (1–60 characters), integer rating (1–5), review body
                (1–500 characters) and created_at. This table exists in the SQL schema; the
                current visible review section instead uses Google Places review data.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 14 }}>
            <strong>Database-side booking validation:</strong> a trigger rejects newly inserted
            bookings whose date is earlier than the current date in the Asia/Kathmandu time zone.
            Check constraints also validate the booking time format, guest count, name, phone,
            note length and allowed status values. These checks protect the database even if a
            client bypasses the form's normal validation.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Authentication, authorization and data protection</h2>
          <p>
            Sign-in is handled by Supabase Auth using username-to-login-email mapping in the
            owner form and Supabase email/password authentication underneath. The dashboard
            checks the signed-in user's role through the PostgreSQL <strong>has_role</strong>
            function before rendering owner controls. The role model is an enum with admin and
            user values, and role records are associated with the authenticated Supabase user ID.
          </p>
          <ul className={styles.learningList}>
            <li><strong>Public reads:</strong> anonymous and authenticated visitors can read the public site settings, menu items and guest-review rows.</li>
            <li><strong>Public booking requests:</strong> anonymous and authenticated visitors may insert a booking only when its initial status is pending. Public clients are not granted booking read, update or delete permissions.</li>
            <li><strong>Owner booking access:</strong> authenticated administrators can read bookings, update their status and delete records. These operations are additionally guarded by RLS policies.</li>
            <li><strong>Owner content access:</strong> menu changes and site-settings updates require the admin role; public visitors receive read-only access to these records.</li>
            <li><strong>Profile isolation:</strong> profile read, insert and update policies compare the row id with auth.uid(), keeping each account's profile scoped to itself.</li>
            <li><strong>Server credentials:</strong> a separate server-only Supabase admin client reads the service-role key from the server environment. Its code comments explicitly warn that this key bypasses RLS and must never be exposed to browser code.</li>
          </ul>
          <p style={{ marginTop: 14 }}>
            The SQL also creates helper and account triggers: a role-check function, an initial
            owner-assignment trigger and a profile-creation trigger. Initial owner provisioning
            must therefore be handled carefully: verify the intended owner account and role
            assignment before opening the dashboard to real business use. Secrets and service-role
            keys are environment configuration, not values that belong in the public portfolio.
          </p>
          <p style={{ marginTop: 14 }}>
            The guest_reviews table currently grants public insert access with field-length and
            rating constraints, and allows the administrator to delete entries. If a public
            customer-review submission UI is enabled later, it should also receive moderation,
            abuse prevention and rate limiting before being used in production.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Database migrations and data lifecycle</h2>
          <ol className={styles.learningList}>
            <li><strong>Initial migration:</strong> creates guest_reviews, the app_role enum, user_roles, the has_role function and the initial owner-assignment trigger.</li>
            <li><strong>Owner dashboard and booking migration:</strong> creates site_settings, menu_items and bookings; adds public-read and owner-management policies; inserts editable starter venue settings and menu rows; and adds the booking-date validation trigger.</li>
            <li><strong>Owner profiles migration:</strong> creates profiles, adds per-user RLS policies, installs the profile-creation trigger and backfills profiles for existing Auth users.</li>
          </ol>
          <p style={{ marginTop: 14 }}>
            These migration files document the intended schema and setup sequence in the source
            project. Their presence in Git does not, by itself, prove that every migration has
            been applied to the currently connected hosted database. A production handover should
            compare the live Supabase schema with the migration history and verify backups before
            making changes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Application data flow and server boundaries</h2>
          <ul className={styles.learningList}>
            <li><strong>Public site data:</strong> a TanStack Start server function reads the single site_settings row and ordered menu_items from Supabase, then returns a typed data object to the React page.</li>
            <li><strong>Google data:</strong> a separate server function calls the Google Places integration. Connector credentials remain server-side; the returned place information is cached for up to one hour.</li>
            <li><strong>Booking creation:</strong> the browser submits a booking row through the Supabase client. The database supplies the UUID, pending status and creation timestamp, then applies RLS and database constraints.</li>
            <li><strong>Owner operations:</strong> the authenticated dashboard reads and changes bookings, menu items and site settings through Supabase. RLS is the database-level authorization boundary, not just a hidden frontend tab.</li>
            <li><strong>Typed data contract:</strong> the generated Supabase TypeScript Database type describes the public tables, insert/update shapes, role enum and has_role function to reduce mismatched field usage in the application.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Google Places and external data</h2>
          <p>
            The site requests the venue's Google Place details, including formatted address,
            rating, review count, Google Maps link, available review excerpts and photo references.
            The server caches the returned place data for up to one hour to reduce repeated
            external requests. The gallery requests up to six available photos.
          </p>
          <p style={{ marginTop: 14 }}>
            If the required Google connector credentials are not configured or the external
            request fails, the server returns a limited fallback identity and an availability
            error rather than inventing review or photo data. Google review availability is
            constrained by the data Google makes available to the configured integration; access
            to a larger review set requires the appropriate Google Business Profile connection.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Visual design and interaction details</h2>
          <ul className={styles.learningList}>
            <li>A Nepali-inspired visual identity, including a custom flag mark, prayer-flag bunting and mandala-style section dividers.</li>
            <li>A hospitality-focused palette with deep secondary surfaces, warm gold accents and high-contrast calls to action.</li>
            <li>Cormorant Garamond display typography paired with Karla for readable interface text.</li>
            <li>Responsive layouts for the hero, story, gallery, menu, reviews, booking form and visit information.</li>
            <li>Subtle entrance reveals, animated counters, image zoom and a desktop-only card tilt effect.</li>
            <li>Keyboard support for the photo lightbox, visible focus styles in form controls and semantic labels for booking inputs.</li>
            <li>Clear booking submission, loading and error feedback, plus an explicit message that the venue will call to confirm.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Technology stack</h2>
          <p>
            The implementation combines a typed React application, server-side data functions,
            managed authentication and a PostgreSQL data store. The interface uses utility-first
            styling and accessible component primitives; date-fns handles date formatting and
            the booking time calculations are kept in a small, testable helper.
          </p>
          <div className={styles.tags}>{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        </section>

        <section className={styles.section}>
          <h2>Engineering decisions and trade-offs</h2>
          <ul className={styles.learningList}>
            <li><strong>Request before confirmation:</strong> guests can send a booking request without being shown a false promise that a table is already reserved.</li>
            <li><strong>Owner-managed content:</strong> opening hours, menu information and the venue story are stored as editable site data instead of being hard-coded into the public page.</li>
            <li><strong>Role-based access:</strong> owner operations are protected with Supabase authentication, an admin role and database-level policies.</li>
            <li><strong>External review attribution:</strong> guests are directed to Google for review submission, keeping public reviews tied to the external source.</li>
            <li><strong>Graceful external-data fallback:</strong> the page can still return a limited venue identity when Google data is unavailable, rather than fabricating ratings or reviews.</li>
            <li><strong>Operational caution:</strong> the interface separates submitted requests from confirmed bookings and leaves the final confirmation to the venue.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Current limitations and production-readiness checklist</h2>
          <p>
            The public demonstration is available, but a live preview should not be confused with
            a fully verified production handover. The following items remain important before
            relying on the system for day-to-day restaurant operations:
          </p>
          <ul className={styles.learningList}>
            <li>Have the venue owner confirm the real opening hours, menu names, descriptions, prices and story text. Initial database entries are editable starter content, not a substitute for owner approval.</li>
            <li>Complete owner account creation and verify sign-in, role assignment, account updates and all dashboard actions using the authorized owner account.</li>
            <li>Test booking submission, owner review, confirmation, cancellation and deletion against the intended production database. The form currently offers 1–20 guests, while the database constraint accepts 1–30; keep these limits aligned if the UI is changed.</li>
            <li>Verify the first-owner assignment process and ensure the intended owner is the only account with the admin role before public operation.</li>
            <li>Add moderation and abuse protection before exposing the guest_reviews insert policy through a public review form.</li>
            <li>Add a true availability check if the business needs to prevent two requests from being accepted for the same table or time. The current time list is generated from opening hours only.</li>
            <li>Confirm Google Places and Maps credentials, photo attribution, review availability and fallback behavior in the deployed environment.</li>
            <li>Verify database migrations, backups, access policies, environment variables, monitoring and deployment recovery before a production handover.</li>
            <li>Use owner-approved real operating information and imagery; do not treat seeded values or sample content as confirmed business facts.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>What this project demonstrates</h2>
          <ul className={styles.learningList}>
            <li>Planning a multi-section, responsive website around a real hospitality use case.</li>
            <li>Building a typed React application with route-level data loading and server functions.</li>
            <li>Designing a guest booking journey with date selection, time-slot generation, validation and submission feedback.</li>
            <li>Connecting a web interface to Supabase authentication, PostgreSQL records and row-level access policies.</li>
            <li>Creating owner-facing workflows for booking review and public content management.</li>
            <li>Integrating third-party place information while handling unavailable external data carefully.</li>
            <li>Documenting the boundary between implemented interface behavior and work that still requires real-world verification.</li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>
            Explore the current public demonstration to see the guest-facing experience. The
            private implementation repository is intentionally not linked from this case study.
          </p>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <VscLinkExternal size={15} /> Open Hotel Paradise Inn live demo
          </a>
          <Link href="/projects"><VscArrowLeft size={15} /> Back to all projects</Link>
        </footer>
      </article>
    </main>
  );
}
