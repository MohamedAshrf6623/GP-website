import ContactForm from '../../components/ContactForm';
import PageHero from '../../components/PageHero';
import Link from 'next/link';
import { demoPackages } from '../../lib/site-data';

export const metadata = {
  title: 'AlzaWare | Book Demo'
};

export default function BookDemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Demo"
        title="Book an AlzaWare Demo"
        lead="Schedule a live walkthrough for the project, from AI modules to the cloud architecture and Flutter experience."
      />

      <section className="section container">
        <h2 data-reveal>Demo Packages</h2>
        <div className="cards three-col">
          {demoPackages.map((item) => (
            <article className="card booking-package" key={item.title} data-reveal>
              <h3>{item.title}</h3>
              <p className="member-specialty">{item.duration}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="contact-layout">
            <ContactForm mode="demo" />

            <aside className="project-info" data-reveal>
              <h3>Why Book a Demo?</h3>
              <div className="info-item">
                <span>Live Walkthrough</span>
                <strong>See the full system in action with real AI and cloud workflows.</strong>
              </div>
              <div className="info-item">
                <span>Project Highlights</span>
                <strong>Face recognition, medicine detection, chatbot support, and Flutter UI.</strong>
              </div>
              <div className="info-item">
                <span>Project Team</span>
                <strong>12 members with focused specialties across AI, Flutter, Backend, Hardware, Cloud, and Database.</strong>
              </div>
              <h3 className="links-title">Quick Links</h3>
              <div className="quick-links">
                <Link href="/">Home</Link>
                <Link href="/features">Features</Link>
                <Link href="/architecture">Architecture</Link>
                <Link href="/team">Team</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}