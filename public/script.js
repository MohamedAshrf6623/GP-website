const appRoot = document.getElementById('app');

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
          <div class="brand">AlzaWare</div>
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
    ${hero(
      'Suez Canal University | 2025 - 2026',
      'Smart Glasses for Alzheimer Support',
      'AlzaWare is an end-to-end assistive ecosystem combining Flutter mobile interfaces, cloud intelligence, and multimodal AI to provide memory support, medicine recognition, and role-based medical assistance.'
    )}

    <section class="section container">
      <h2>System Overview</h2>
      <p>
        The operational flow starts with image capture on the glasses, followed by cloud processing,
        and ends with real-time visual feedback on a transparent OLED display. This design enables lightweight wearables
        while offloading heavy AI workloads to scalable cloud infrastructure.
      </p>
      <div class="flow-grid">
        <div class="flow-item">1. Camera captures image</div>
        <div class="flow-item">2. Frame sent to cloud</div>
        <div class="flow-item">3. AI processes image</div>
        <div class="flow-item">4. Result returns to controller</div>
        <div class="flow-item">5. Output shown on OLED lens</div>
      </div>
      <div class="cta-row">
        <a href="/book-demo" data-spa-link class="demo-cta">Book Demo</a>
        <a href="/architecture" data-spa-link class="text-link">View Architecture</a>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <h2>Hardware Architecture</h2>
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
      <h2>Mobile Application Progress</h2>
      <div class="timeline">
        <article>
          <span>Phase 1</span>
          <p>Home UI, emergency screens, events/calendar modules, medication tracking, upload screens, and server integration.</p>
        </article>
        <article>
          <span>Phase 2</span>
          <p>Sign-in, profile screens, full database integration, retrain model button, and role-based core flows.</p>
        </article>
        <article>
          <span>Phase 3</span>
          <p>Sign-up experience and complete AI chatbot integration for real-time interactive support.</p>
        </article>
      </div>
    </section>
  `, '/');
}

function renderFeatures() {
  document.title = 'Features | AI Modules';
  return shell(`
    ${hero(
      'AI Modules',
      'AI Modules & Features',
      'The project combines face recognition, object detection, medical chatbot reasoning, and retraining pipelines to keep the system adaptive and responsive.'
    )}

    <section class="section container">
      <div class="split">
        <article class="card">
          <h3>Face Recognition</h3>
          <p>Pipeline: <strong>MTCNN</strong> face detection, <strong>FaceNet</strong> embedding extraction (128-D), and <strong>SVM (RBF)</strong> classification.</p>
          <ul>
            <li>Training Accuracy: 99.12%</li>
            <li>Validation Accuracy: 98.61%</li>
            <li>Testing Accuracy: 97.22%</li>
          </ul>
        </article>
        <article class="card">
          <h3>Retraining Engine</h3>
          <p>
            New images uploaded from mobile are enhanced, augmented, embedded, and merged into existing feature banks.
            The SVM model is then retrained and deployed dynamically.
          </p>
          <ul>
            <li>15-image mobile upload pipeline</li>
            <li>8 augmented variants per source image</li>
            <li>>85% accuracy for newly added users</li>
          </ul>
        </article>
      </div>

      <div class="split second-row">
        <article class="card">
          <h3>Medical Chatbot & MRI Support</h3>
          <p>
            Gemini powers role-based dialogue for Patient, Caregiver, and Doctor modes.
            Doctor mode integrates MRI-stage assistance using <strong>ResNet50</strong> with 80% accuracy as a clinical support tool.
          </p>
        </article>
        <article class="card">
          <h3>Medicine & Object Detection</h3>
          <p>
            <strong>YOLOv8n</strong> was fine-tuned on a 12-class medicine dataset and paired with a COCO object model
            for daily environment awareness.
          </p>
          <ul>
            <li>Precision: 0.9849</li>
            <li>Recall: 0.9702</li>
            <li>mAP@50: 0.995</li>
          </ul>
        </article>
      </div>
    </section>
  `, '/features');
}

function renderArchitecture() {
  document.title = 'Architecture | Cloud Infrastructure';
  return shell(`
    ${hero(
      'System Architecture',
      'Cloud Infrastructure & Backend',
      'The system combines a Flutter mobile app, Flask backend services, and AWS cloud infrastructure to keep the wearable experience lightweight while the heavy work happens remotely.'
    )}

    <section class="section container">
      <h2>Applied Technology Stack</h2>
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
        <h2>AWS Stack Overview</h2>
        <div class="cards three-col">
          <article class="card">
            <h3>AWS Stack</h3>
            <p>EC2 microservices, S3 model storage, and RDS (MS SQL) for structured healthcare records.</p>
          </article>
          <article class="card">
            <h3>Workflow Orchestration</h3>
            <p>Dedicated paths for vision inference, multimodal voice chat (RAG + Gemini), retraining, and IAM.</p>
          </article>
          <article class="card">
            <h3>Security Model</h3>
            <p>JWT stateless auth, role-based access control, blacklist revocation, password signature checks, and rate limiting.</p>
          </article>
          <article class="card">
            <h3>Backend Design</h3>
            <p>Layered architecture with routes, controllers, ORM models, AI services, and centralized utilities.</p>
          </article>
          <article class="card">
            <h3>Error Handling</h3>
            <p>Standardized JSON responses, custom exceptions, and transaction rollbacks for data consistency.</p>
          </article>
          <article class="card">
            <h3>Deployment Readiness</h3>
            <p>Environment-based configuration, protected secrets, WSGI deployment behind reverse proxy, and scalable services.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section container">
      <h2>Core Workflows</h2>
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
  document.title = 'Team | AlzaWare';
  const membersHtml = teamMembers.map((member) => `
    <article class="member">
      <h3>${escapeHtml(member.name)}</h3>
      <p class="member-specialty">${escapeHtml(member.specialty)}</p>
      <div class="member-links">
        <a href="${member.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
            <strong>Faculty of Computers and Informatics</strong>
          </div>
        </div>
      </div>
    </section>
  `, '/team');
}

function renderContact() {
  document.title = 'Contact | AlzaWare';
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
            <strong>AI + IoT + Real-time Monitoring</strong>
          </div>
          <div class="info-item">
            <span>Origin</span>
            <strong>Graduation Project at Faculty of Computers and Informatics, Suez Canal University</strong>
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
  document.title = 'Book Demo | AlzaWare';
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

function renderApp() {
  const activeRoute = getCurrentRoute();
  const render = routes[activeRoute] || routes['/'];
  appRoot.innerHTML = render();
  document.body.dataset.route = activeRoute;
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
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
window.addEventListener('popstate', renderApp);

renderApp();
