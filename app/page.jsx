import Link from 'next/link';

export const metadata = {
  title: 'AlzaWare | Smart Glasses for Alzheimer Support'
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-home">
        <div className="container hero-inner">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Suez Canal University | 2025 - 2026</p>
            <h1 className="home-title">
              <span className="ai-sparkle" aria-hidden="true">
                <span className="sparkle sparkle-main"></span>
                <span className="sparkle sparkle-small"></span>
              </span>
              <span>AlzaWare</span>
            </h1>
            <p className="lead">
              Smart glasses for Alzheimer support. AlzaWare is an end-to-end assistive ecosystem combining Flutter
              mobile interfaces, cloud intelligence, and multimodal AI to provide memory support, medicine
              recognition, and role-based medical assistance.
            </p>
          </div>

          <div className="importance-kpis" aria-label="Alzheimer impact indicators" data-reveal>
            <article className="kpi-card" data-reveal>
              <span>People Living With Dementia Worldwide</span>
              <strong>55M+</strong>
            </article>
            <article className="kpi-card" data-reveal>
              <span>Alzheimer's Share of Dementia Cases</span>
              <strong>60-70%</strong>
            </article>
            <article className="kpi-card" data-reveal>
              <span>New Dementia Cases Each Year</span>
              <strong>~10M</strong>
            </article>
            <article className="kpi-card" data-reveal>
              <span>Projected Cases by 2050</span>
              <strong>139M</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 data-reveal>Problem</h2>
        <p data-reveal>
          Alzheimer’s patients and elderly users often struggle with remembering people, identifying medicine,
          and reacting quickly to daily situations. Traditional reminders are not always enough in real-time,
          especially in dynamic environments outside home.
        </p>
        <div className="flow-grid" data-reveal>
          <div className="flow-item" data-reveal>1. Memory loss in daily interactions</div>
          <div className="flow-item" data-reveal>2. Difficulty identifying medications</div>
          <div className="flow-item" data-reveal>3. Limited situational awareness</div>
          <div className="flow-item" data-reveal>4. Need for instant assistance</div>
          <div className="flow-item" data-reveal>5. Need for safer independent living</div>
        </div>
        <div className="cta-row" data-reveal>
          <Link href="/book-demo" className="demo-cta">
            Book Demo
          </Link>
          <Link href="/architecture" className="text-link">
            View Architecture
          </Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 data-reveal>Solution</h2>
          <div className="cards">
            <article className="card" data-reveal>
              <h3>Main Controller</h3>
              <p>
                <strong>Raspberry Pi Zero 2 W</strong> with quad-core CPU, built-in Wi-Fi, and CSI support for compact
                edge processing.
              </p>
            </article>
            <article className="card" data-reveal>
              <h3>Camera Module</h3>
              <p>
                <strong>ZeroCam NOIR</strong> selected for minimal size, direct CSI compatibility, and low-light
                performance.
              </p>
            </article>
            <article className="card" data-reveal>
              <h3>Display Module</h3>
              <p>
                <strong>1.51-inch Transparent OLED (128x64)</strong> using SPI/I2C for AR-style real-world overlay
                output.
              </p>
            </article>
            <article className="card" data-reveal>
              <h3>Storage</h3>
              <p>
                <strong>64GB microSD</strong> for OS, codebase, logs, and temporary image buffering.
              </p>
            </article>
            <article className="card" data-reveal>
              <h3>Power System</h3>
              <p>
                <strong>Type-C 5V/2A Power Bank Module</strong> replacing TP4056 + MT3608 with cleaner all-in-one
                charging/boosting.
              </p>
            </article>
            <article className="card" data-reveal>
              <h3>Integration Result</h3>
              <p>End-to-end testing validated camera streaming, cloud inference, and live output rendering on transparent OLED.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 data-reveal>Impact</h2>
        <div className="timeline">
          <article data-reveal>
            <span>Daily Confidence</span>
            <p>Users gain confidence through real-time identification of faces, objects, and medications in everyday life.</p>
          </article>
          <article data-reveal>
            <span>Caregiver Support</span>
            <p>Caregivers and doctors receive a practical tool for safer follow-up, better communication, and faster decisions.</p>
          </article>
          <article data-reveal>
            <span>Scalable Innovation</span>
            <p>The architecture enables continuous AI updates and cloud scaling for future healthcare and smart safety scenarios.</p>
          </article>
        </div>
      </section>
    </>
  );
}