import ContactForm from '../../components/ContactForm';
import PageHero from '../../components/PageHero';
import Link from 'next/link';

export const metadata = {
  title: 'AlzaWare | Contact'
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact AlzaWare"
        lead="Discuss deployment, pilot setup, or collaboration opportunities."
      />

      <section className="section container">
        <div className="contact-layout">
          <ContactForm mode="contact" />

          <aside className="project-info" data-reveal>
            <h3>Project Information</h3>
            <div className="info-item">
              <span>Project</span>
              <strong>AlzaWare Smart Glass Platform</strong>
            </div>
            <div className="info-item">
              <span>Category</span>
              <strong>AI + Real-time Monitoring</strong>
            </div>
            <div className="info-item">
              <span>Origin</span>
              <strong>Graduation Project at Faculty of Engineering, Suez Canal University</strong>
            </div>
            <h3 className="links-title">Additional Links</h3>
            <div className="quick-links">
              <Link href="/">Home</Link>
              <Link href="/features">Features</Link>
              <Link href="/architecture">Architecture</Link>
              <Link href="/team">Team</Link>
              <Link href="/book-demo">Book Demo</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}