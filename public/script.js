const appRoot = document.getElementById('app');
const assetVersion = document.body?.dataset?.assetVersion || String(Date.now());

function withAssetVersion(url) {
  return `${url}?v=${encodeURIComponent(assetVersion)}`;
}

const teamMembers = [
  {
    name: 'Mohamed Ashraf Nashat',
    specialty: 'Backend',
    github: 'https://github.com/MohamedAshrf6623',
    linkedin: 'https://www.linkedin.com/in/mohamed-ashraf-9b770727a/'
  },
  { name: 'Aya Wael Mohamed', specialty: 'AI', github: '#', linkedin: '#' },
  { name: 'Sarah Abdo Awad', specialty: 'AI', github: '#', linkedin: '#' },
  { name: 'Nada Amr Farouk', specialty: 'Flutter', github: '#', linkedin: '#' },
  { name: 'Mena Abdel Meguid Mostafa', specialty: 'Flutter', github: '#', linkedin: '#' },
  { name: 'Yehia Hamdy Sayed Ahmed Mohamed', specialty: 'Hardware', github: '#', linkedin: '#' },
  { name: 'Mohamed Fattouh Abdel Hamid', specialty: 'Cloud', github: '#', linkedin: '#' },
  { name: 'Toqa Mohamed Farouk', specialty: 'Backend', github: '#', linkedin: '#' },
  { name: 'Mariam Ali Ali', specialty: 'AI', github: '#', linkedin: '#' },
  { name: 'Somaya Khaled Mohamed', specialty: 'AI', github: '#', linkedin: '#' },
  { name: 'Yomna Mahmoud El Sayed Abdel Khalek', specialty: 'Database', github: '#', linkedin: '#' },
  { name: 'Abdelrahman Mohamed Wasfy', specialty: 'Flutter', github: '#', linkedin: '#' }
];

const demoPackages = [
  {
    title: 'Academic Demo',
    duration: '15 min',
    description: 'A short walkthrough for students and supervisors focusing on the main value of the project.'
  },
  {
    title: 'Clinical Demo',
    duration: '30 min',
    description: 'A more detailed session for doctors and caregivers covering medical use cases and workflows.'
  },
  {
    title: 'Full Technical Demo',
    duration: '45 min',
    description: 'A complete technical presentation with architecture, AI models, cloud stack, and live flows.'
  }
];

const routes = {
  '/': renderHome,
  '/features': renderFeatures,
  '/architecture': renderArchitecture,
  '/team': renderTeam,
  '/contact': renderContact,
  '/book-demo': renderBookDemo
};

function normalizePath(pathname) {
  const cleaned = pathname.replace(/\/+$/, '');
  return cleaned || '/';
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function initialsFromName(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return 'NA';
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function githubIcon() {
  return `
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M8 .2a8 8 0 0 0-2.53 15.6c.4.07.55-.17.55-.38v-1.36c-2.25.49-2.72-.95-2.72-.95-.37-.92-.9-1.16-.9-1.16-.74-.5.06-.49.06-.49.82.06 1.25.84 1.25.84.73 1.24 1.91.88 2.38.67.07-.52.29-.88.52-1.09-1.8-.2-3.69-.9-3.69-4a3.1 3.1 0 0 1 .83-2.15 2.9 2.9 0 0 1 .08-2.12s.67-.22 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.3.75.33 1.5.08 2.12a3.1 3.1 0 0 1 .83 2.15c0 3.11-1.9 3.8-3.71 4 .3.25.56.74.56 1.5v2.23c0 .21.14.46.56.38A8 8 0 0 0 8 .2Z"/>
    </svg>
  `;
}

function linkedinIcon() {
  return `
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M1.2 5.5h3V15h-3V5.5Zm1.5-4.8a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM6 5.5h2.9v1.3h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.7 2 3.7 4.7V15h-3v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V15H6V5.5Z"/>
    </svg>
  `;
}

function getCurrentRoute() {
  const path = normalizePath(window.location.pathname);
  return routes[path] ? path : '/';
}

function navLink(label, path, isPrimary = false, activePath = '/') {
  const activeClass = normalizePath(path) === activePath ? 'active' : '';
  const buttonClass = isPrimary ? 'demo-link' : '';
  return `<a href="${path}" data-spa-link class="${buttonClass} ${activeClass}" aria-current="${activeClass ? 'page' : 'false'}">${label}</a>`;
}

function shell(content, activePath) {
  return `
    <header class="header-nav">
      <nav class="nav container">
        <a href="/" data-spa-link class="brand-link" aria-label="AlzaWare Home">
          <div class="brand">
            <img src="${withAssetVersion('/assets/alzaware-logo.png')}" alt="AlzaWare logo" class="brand-logo" />
          </div>
        </a>
        <div class="nav-links">
          ${navLink('Home', '/', false, activePath)}
          ${navLink('Features', '/features', false, activePath)}
          ${navLink('Architecture', '/architecture', false, activePath)}
          ${navLink('Team', '/team', false, activePath)}
          ${navLink('Contact', '/contact', false, activePath)}
          ${navLink('Book Demo', '/book-demo', true, activePath)}
        </div>
      </nav>
    </header>
    <main class="main-content">
      ${content}
    </main>
    <footer class="footer">
      <div class="container footer-wrap">
        <p>AlzaWare Graduation Project Documentation Website</p>
        <p>Website Developed by Mohamed Ashraf</p>
      </div>
    </footer>
  `;
}

function hero(eyebrow, title, lead) {
  return `
    <section class="hero">
      <div class="container">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="lead">${lead}</p>
      </div>
    </section>
  `;
}

function renderHome() {
  document.title = 'AlzaWare | Smart Glasses for Alzheimer Support';
  return shell(`
    <section class="hero hero-home">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Suez Canal University | 2025 - 2026</p>
          <h1 class="home-title">
            <span class="ai-sparkle" aria-hidden="true">
              <span class="sparkle sparkle-main"></span>
              <span class="sparkle sparkle-small"></span>
            </span>
            <span>AlzaWare</span>
          </h1>
          <p class="lead">Smart glasses for Alzheimer support. AlzaWare is an end-to-end assistive ecosystem combining Flutter mobile interfaces, cloud intelligence, and multimodal AI to provide memory support, medicine recognition, and role-based medical assistance.</p>
        </div>
        <div class="importance-kpis" aria-label="Alzheimer impact indicators">
          <article class="kpi-card">
            <span>People Living With Dementia Worldwide</span>
            <strong>55M+</strong>
          </article>
          <article class="kpi-card">
            <span>Alzheimer's Share of Dementia Cases</span>
            <strong>60-70%</strong>
          </article>
          <article class="kpi-card">
            <span>New Dementia Cases Each Year</span>
            <strong>~10M</strong>
          </article>
          <article class="kpi-card">
            <span>Projected Cases by 2050</span>
            <strong>139M</strong>
          </article>
        </div>
      </div>
    </section>

    <section class="section container">
      <h2>Problem</h2>
      <p>
        Alzheimer’s patients and elderly users often struggle with remembering people, identifying medicine,
        and reacting quickly to daily situations. Traditional reminders are not always enough in real-time,
        especially in dynamic environments outside home.
      </p>
      <div class="flow-grid">
        <div class="flow-item">1. Memory loss in daily interactions</div>
        <div class="flow-item">2. Difficulty identifying medications</div>
        <div class="flow-item">3. Limited situational awareness</div>
        <div class="flow-item">4. Need for instant assistance</div>
        <div class="flow-item">5. Need for safer independent living</div>
      </div>
      <div class="cta-row">
        <a href="/book-demo" data-spa-link class="demo-cta">Book Demo</a>
        <a href="/architecture" data-spa-link class="text-link">View Architecture</a>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>Solution</h2>
        <div class="cards">
          <article class="card">
            <h3>Main Controller</h3>
            <p><strong>Raspberry Pi Zero 2 W</strong> with quad-core CPU, built-in Wi-Fi, and CSI support for compact edge processing.</p>
          </article>
          <article class="card">
            <h3>Camera Module</h3>
            <p><strong>ZeroCam NOIR</strong> selected for minimal size, direct CSI compatibility, and low-light performance.</p>
          </article>
          <article class="card">
            <h3>Display Module</h3>
            <p><strong>1.51-inch Transparent OLED (128x64)</strong> using SPI/I2C for AR-style real-world overlay output.</p>
          </article>
          <article class="card">
            <h3>Storage</h3>
            <p><strong>64GB microSD</strong> for OS, codebase, logs, and temporary image buffering.</p>
          </article>
          <article class="card">
            <h3>Power System</h3>
            <p><strong>Type-C 5V/2A Power Bank Module</strong> replacing TP4056 + MT3608 with cleaner all-in-one charging/boosting.</p>
          </article>
          <article class="card">
            <h3>Integration Result</h3>
            <p>End-to-end testing validated camera streaming, cloud inference, and live output rendering on transparent OLED.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section container">
      <h2>Impact</h2>
      <div class="timeline">
        <article>
          <span>Daily Confidence</span>
          <p>Users gain confidence through real-time identification of faces, objects, and medications in everyday life.</p>
        </article>
        <article>
          <span>Caregiver Support</span>
          <p>Caregivers and doctors receive a practical tool for safer follow-up, better communication, and faster decisions.</p>
        </article>
        <article>
          <span>Scalable Innovation</span>
          <p>The architecture enables continuous AI updates and cloud scaling for future healthcare and smart safety scenarios.</p>
        </article>
      </div>
    </section>
  `, '/');
}

function renderFeatures() {
  document.title = 'AlzaWare | Features';
  return shell(`
    ${hero(
      'Operational Safety',
      'Operational Safety Features',
      'AlzaWare combines real-time vision, role-based medical assistance, and cloud-backed intelligence to reduce risk, improve awareness, and support safer daily operation for Alzheimer patients.'
    )}

    <section class="section container">
      <div class="split">
        <article class="card">
          <h3>Identity Safety Layer</h3>
          <p>Face recognition runs through <strong>MTCNN + FaceNet + SVM (RBF)</strong> to identify trusted people and reduce confusion in real-time interactions.</p>
          <ul>
            <li>Training Accuracy: 99.12%</li>
            <li>Validation Accuracy: 98.61%</li>
            <li>Testing Accuracy: 97.22%</li>
            <li>Low-confidence faces are filtered to avoid unsafe decisions</li>
          </ul>
        </article>
        <article class="card">
          <h3>Medicine Safety Detection</h3>
          <p>
            A fine-tuned <strong>YOLOv8n</strong> model detects 12 medicine classes and daily objects, helping users avoid medication mistakes and improve situational awareness.
          </p>
          <ul>
            <li>Precision: 0.9849</li>
            <li>Recall: 0.9702</li>
            <li>mAP@50: 0.995</li>
            <li>Works in real-time on Raspberry Pi hardware</li>
          </ul>
        </article>
      </div>

      <div class="split second-row">
        <article class="card">
          <h3>Clinical Support Chatbot</h3>
          <p>
            <strong>Gemini</strong> powers role-based guidance for Patient, Caregiver, and Doctor modes.
            Doctor mode integrates MRI-stage analysis with <strong>ResNet50</strong> (80% accuracy) as a decision-support tool.
          </p>
          <ul>
            <li>Multimodal inputs: voice, text, and image</li>
            <li>RAG context from medical database + memory store</li>
            <li>Supports safer and faster medical communication</li>
          </ul>
        </article>
        <article class="card">
          <h3>Continuous Learning & Reliability</h3>
          <p>
            The system retrains safely when new faces are added: preprocessing, augmentation, embedding merge,
            then model refresh without service downtime.
          </p>
          <ul>
            <li>15 mobile images trigger retraining workflow</li>
            <li>8 augmented samples generated per uploaded image</li>
            <li>>85% accuracy for newly added users</li>
            <li>Hot model reload from AWS S3 to active inference service</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>Safety Operation Flow</h2>
        <div class="flow-grid">
          <div class="flow-item">1. Capture scene with camera</div>
          <div class="flow-item">2. Route to face/object mode</div>
          <div class="flow-item">3. Run AI inference pipeline</div>
          <div class="flow-item">4. Validate confidence & context</div>
          <div class="flow-item">5. Display safe guidance on OLED</div>
        </div>
      </div>
    </section>
  `, '/features');
}

function renderArchitecture() {
  document.title = 'AlzaWare | Architecture';
  return shell(`
    ${hero(
      'System Architecture',
      'Layered Safety Architecture',
      'The system combines a Flutter mobile app, Flask backend services, and AWS cloud infrastructure to keep the wearable experience lightweight while the heavy work happens remotely.'
    )}

    <section class="section container">
      <div class="tech-badges">
        <div class="tech-badge flutter"><img src="/assets/flutter-logo.svg" alt="Flutter" /><strong>Flutter</strong></div>
        <div class="tech-badge flask"><img src="/assets/flask-logo.svg" alt="Flask" /><strong>Flask</strong></div>
        <div class="tech-badge aws"><img src="/assets/aws-logo.svg" alt="AWS" /><strong>AWS</strong></div>
      </div>
      <h2>Architecture Layers</h2>
      <div class="cards three-col">
        <article class="card">
          <h3>Flutter Mobile Layer</h3>
          <p>The companion app is built with Flutter to deliver cross-platform role-based flows for Patient, Caregiver, and Doctor users.</p>
        </article>
        <article class="card">
          <h3>Flask Backend Services</h3>
          <p>Core APIs are implemented with Flask for authentication, profile management, AI endpoint routing, and secure token-based access.</p>
        </article>
        <article class="card">
          <h3>AWS Cloud Layer</h3>
          <p>AWS powers compute, storage, and database services using EC2, S3, and RDS to handle heavy processing reliably at scale.</p>
        </article>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>Layered Safety Architecture</h2>
        <div class="cards three-col">
          <article class="card">
            <h3>Layer 1: Edge Perception</h3>
            <p>Raspberry Pi + camera capture real-time visual context and send only the required data stream for processing.</p>
          </article>
          <article class="card">
            <h3>Layer 2: AI Inference</h3>
            <p>Face recognition and medicine/object detection execute in controlled modes to maintain low latency and stable response.</p>
          </article>
          <article class="card">
            <h3>Layer 3: Safety Intelligence</h3>
            <p>Role-based chatbot and clinical support logic enrich raw detections into safe, understandable guidance.</p>
          </article>
          <article class="card">
            <h3>Layer 4: Secure Backend</h3>
            <p>Flask APIs with JWT validation, rate limiting, and standardized error handling enforce reliable operations.</p>
          </article>
          <article class="card">
            <h3>Layer 5: Cloud Reliability</h3>
            <p>AWS EC2, S3, and RDS ensure model availability, scalable processing, and persistent medical data integrity.</p>
          </article>
          <article class="card">
            <h3>Layer 6: Continuous Learning</h3>
            <p>Retraining pipelines ingest new faces from mobile uploads and hot-update active models without downtime.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section container">
      <h2>Flow Visualization</h2>
      <div class="architecture-flow card">
        <div class="flow-node">Edge Capture</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">AI Inference</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Safety Logic</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">Flask API</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">AWS Cloud</div>
        <div class="flow-arrow">→</div>
        <div class="flow-node">OLED Output</div>
      </div>
      <div class="split">
        <article class="card">
          <h3>Computer Vision Processing</h3>
          <p>Real-time image processing from AR glasses: face recognition via SVM, object detection via YOLOv8, with immediate OLED output.</p>
        </article>
        <article class="card">
          <h3>Voice Chat & Diagnosis</h3>
          <p>Multimodal RAG system with Gemini: patient questions, STT/TTS, database context, and ResNet50 MRI analysis for doctors.</p>
        </article>
      </div>
      <div class="split second-row">
        <article class="card">
          <h3>Machine Learning Retraining</h3>
          <p>Caregiver uploads images to S3, the training server refreshes the SVM model, and the main API hot reloads the latest version.</p>
        </article>
        <article class="card">
          <h3>Identity & Access Management</h3>
          <p>JWT-based stateless auth with token blacklist, password signature validation, and role-based access control.</p>
        </article>
      </div>
    </section>
  `, '/architecture');
}

function renderTeam() {
  document.title = 'AlzaWare | Team';
  const membersHtml = teamMembers.map((member) => `
    <article class="member">
      <div class="member-head">
        <div class="member-avatar">${escapeHtml(initialsFromName(member.name))}</div>
        <div class="member-meta">
          <h3>${escapeHtml(member.name)}</h3>
          <p class="member-specialty">${escapeHtml(member.specialty)}</p>
        </div>
      </div>
      <div class="member-links">
        <a href="${member.github}" target="_blank" rel="noopener noreferrer">${githubIcon()}<span>GitHub</span></a>
        <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer">${linkedinIcon()}<span>LinkedIn</span></a>
      </div>
    </article>
  `).join('');

  return shell(`
    ${hero(
      'Project Team',
      'Project Team',
      '12 talented developers from Suez Canal University contributing to this innovative healthcare AI project.'
    )}

    <section class="section container">
      <div class="team-grid">
        ${membersHtml}
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>Project Supervision</h2>
        <div class="meta-grid">
          <div class="meta-card">
            <span>Faculty Advisor</span>
            <strong>Dr. Iman Mostafa</strong>
          </div>
          <div class="meta-card">
            <span>University</span>
            <strong>Suez Canal University</strong>
          </div>
          <div class="meta-card">
            <span>Department</span>
            <strong>Computer and Control</strong>
          </div>
        </div>
      </div>
    </section>
  `, '/team');
}

function renderContact() {
  document.title = 'AlzaWare | Contact';
  return shell(`
    ${hero(
      'Contact',
      'Contact AlzaWare',
      'Discuss deployment, pilot setup, or collaboration opportunities.'
    )}

    <section class="section container">
      <div class="contact-layout">
        <form class="contact-form" data-form="contact">
          <input type="hidden" name="type" value="contact" />
          <label for="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" placeholder="Enter your name" required />

          <label for="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" placeholder="Enter your email" required />

          <label for="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="5" placeholder="Write your message" required></textarea>

          <button type="submit">Send Message</button>
          <div class="form-status" data-form-status aria-live="polite"></div>
        </form>

        <aside class="project-info">
          <h3>Project Information</h3>
          <div class="info-item">
            <span>Project</span>
            <strong>AlzaWare Smart Glass Platform</strong>
          </div>
          <div class="info-item">
            <span>Category</span>
            <strong>AI + Real-time Monitoring</strong>
          </div>
          <div class="info-item">
            <span>Origin</span>
            <strong>Graduation Project at Faculty of Engineering, Suez Canal University</strong>
          </div>
          <h3 class="links-title">Additional Links</h3>
          <div class="quick-links">
            <a href="/" data-spa-link>Home</a>
            <a href="/features" data-spa-link>Features</a>
            <a href="/architecture" data-spa-link>Architecture</a>
            <a href="/team" data-spa-link>Team</a>
            <a href="/book-demo" data-spa-link>Book Demo</a>
          </div>
        </aside>
      </div>
    </section>
  `, '/contact');
}

function renderBookDemo() {
  document.title = 'AlzaWare | Book Demo';
  const packagesHtml = demoPackages.map((item) => `
    <article class="card booking-package">
      <h3>${escapeHtml(item.title)}</h3>
      <p class="member-specialty">${escapeHtml(item.duration)}</p>
      <p>${escapeHtml(item.description)}</p>
    </article>
  `).join('');

  return shell(`
    ${hero(
      'Book Demo',
      'Book an AlzaWare Demo',
      'Schedule a live walkthrough for the project, from AI modules to the cloud architecture and Flutter experience.'
    )}

    <section class="section container">
      <h2>Demo Packages</h2>
      <div class="cards three-col">
        ${packagesHtml}
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="contact-layout">
          <form class="contact-form" data-form="demo">
            <input type="hidden" name="type" value="demo" />
            <label for="demo-full-name">Full Name</label>
            <input id="demo-full-name" name="fullName" type="text" placeholder="Enter your full name" required />

            <label for="demo-email">Email</label>
            <input id="demo-email" name="email" type="email" placeholder="Enter your email" required />

            <label for="demo-organization">Organization</label>
            <input id="demo-organization" name="organization" type="text" placeholder="University / Hospital / Company" />

            <label for="demo-role">Role</label>
            <input id="demo-role" name="role" type="text" placeholder="Doctor / Caregiver / Researcher / Student" />

            <div class="split form-split">
              <div>
                <label for="demo-date">Preferred Date</label>
                <input id="demo-date" name="preferredDate" type="date" />
              </div>
              <div>
                <label for="demo-time">Preferred Time</label>
                <input id="demo-time" name="preferredTime" type="time" />
              </div>
            </div>

            <label for="demo-meeting">Meeting Type</label>
            <input id="demo-meeting" name="meetingType" type="text" placeholder="Online / On-site" />

            <label for="demo-focus">Focus Area</label>
            <input id="demo-focus" name="focusArea" type="text" placeholder="AI / Backend / Cloud / Flutter / Full system" />

            <label for="demo-notes">Notes</label>
            <textarea id="demo-notes" name="notes" rows="5" placeholder="Anything you want us to know"></textarea>

            <button type="submit">Confirm Booking</button>
            <div class="form-status" data-form-status aria-live="polite"></div>
          </form>

          <aside class="project-info">
            <h3>Why Book a Demo?</h3>
            <div class="info-item">
              <span>Live Walkthrough</span>
              <strong>See the full system in action with real AI and cloud workflows.</strong>
            </div>
            <div class="info-item">
              <span>Project Highlights</span>
              <strong>Face recognition, medicine detection, chatbot support, and Flutter UI.</strong>
            </div>
            <div class="info-item">
              <span>Project Team</span>
              <strong>12 members with focused specialties across AI, Flutter, Backend, Hardware, Cloud, and Database.</strong>
            </div>
            <h3 class="links-title">Quick Links</h3>
            <div class="quick-links">
              <a href="/" data-spa-link>Home</a>
              <a href="/features" data-spa-link>Features</a>
              <a href="/architecture" data-spa-link>Architecture</a>
              <a href="/team" data-spa-link>Team</a>
              <a href="/contact" data-spa-link>Contact</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `, '/book-demo');
}

function renderApp(useTransition = false) {
  const activeRoute = getCurrentRoute();
  const render = routes[activeRoute] || routes['/'];

  const paintRoute = () => {
    appRoot.innerHTML = render();
    document.body.dataset.route = activeRoute;
    window.scrollTo({ top: 0, behavior: 'auto' });
    setupScrollReveal();
  };

  if (!useTransition) {
    paintRoute();
    return;
  }

  appRoot.classList.add('page-leave');
  requestAnimationFrame(() => {
    paintRoute();
    appRoot.classList.remove('page-leave');
    appRoot.classList.add('page-enter');
    requestAnimationFrame(() => {
      appRoot.classList.remove('page-enter');
    });
  });
}

function setupScrollReveal() {
  const targets = appRoot.querySelectorAll(
    '.hero-copy, .importance-kpis, .section h2, .section p, .card, .flow-item, .timeline article, .member, .contact-form, .project-info, .meta-card'
  );

  if (!targets.length) {
    return;
  }

  targets.forEach((el) => {
    el.classList.add('reveal-item');
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -6% 0px'
    }
  );

  targets.forEach((el) => {
    observer.observe(el);
  });
}

function handleNavigation(event) {
  const link = event.target.closest('a[data-spa-link]');
  if (!link) {
    return;
  }

  if (link.origin !== window.location.origin) {
    return;
  }

  event.preventDefault();
  const nextPath = normalizePath(link.pathname);

  if (nextPath !== getCurrentRoute()) {
    window.history.pushState({}, '', nextPath);
    renderApp(true);
  }
}

async function handleFormSubmit(event) {
  const form = event.target.closest('form[data-form]');
  if (!form) {
    return;
  }

  event.preventDefault();
  const status = form.querySelector('[data-form-status]');
  const payload = Object.fromEntries(new FormData(form).entries());

  if (status) {
    status.innerHTML = '<p class="status-message">Sending...</p>';
  }

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

    if (status) {
      status.innerHTML = `
        <div class="success-panel">
          <strong>Success</strong>
          <p>${escapeHtml(data.message)}</p>
        </div>
      `;
    }

    form.reset();
  } catch (error) {
    if (status) {
      status.innerHTML = `
        <div class="error-panel">
          <strong>Unable to send</strong>
          <p>${escapeHtml(error.message)}</p>
        </div>
      `;
    }
  }
}

document.addEventListener('click', handleNavigation);
document.addEventListener('submit', handleFormSubmit);
window.addEventListener('popstate', () => renderApp(true));

renderApp();
