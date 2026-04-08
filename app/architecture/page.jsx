import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'AlzaWare | Architecture'
};

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="System Architecture"
        title="Layered Safety Architecture"
        lead="The system combines a Flutter mobile app, Flask backend services, and AWS cloud infrastructure to keep the wearable experience lightweight while the heavy work happens remotely."
      />

      <section className="section container">
        <div className="tech-badges" data-reveal>
          <div className="tech-badge flutter">
            <img src="/assets/flutter-logo.svg" alt="Flutter" />
            <strong>Flutter</strong>
          </div>
          <div className="tech-badge flask">
            <img src="/assets/flask-logo.svg" alt="Flask" />
            <strong>Flask</strong>
          </div>
          <div className="tech-badge aws">
            <img src="/assets/aws-logo.svg" alt="AWS" />
            <strong>AWS</strong>
          </div>
        </div>
        <h2 data-reveal>Architecture Layers</h2>
        <div className="cards three-col">
          <article className="card" data-reveal>
            <h3>Flutter Mobile Layer</h3>
            <p>The companion app is built with Flutter to deliver cross-platform role-based flows for Patient, Caregiver, and Doctor users.</p>
          </article>
          <article className="card" data-reveal>
            <h3>Flask Backend Services</h3>
            <p>Core APIs are implemented with Flask for authentication, profile management, AI endpoint routing, and secure token-based access.</p>
          </article>
          <article className="card" data-reveal>
            <h3>AWS Cloud Layer</h3>
            <p>AWS powers compute, storage, and database services using EC2, S3, and RDS to handle heavy processing reliably at scale.</p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 data-reveal>Layered Safety Architecture</h2>
          <div className="cards three-col">
            <article className="card" data-reveal>
              <h3>Layer 1: Edge Perception</h3>
              <p>Raspberry Pi + camera capture real-time visual context and send only the required data stream for processing.</p>
            </article>
            <article className="card" data-reveal>
              <h3>Layer 2: AI Inference</h3>
              <p>Face recognition and medicine/object detection execute in controlled modes to maintain low latency and stable response.</p>
            </article>
            <article className="card" data-reveal>
              <h3>Layer 3: Safety Intelligence</h3>
              <p>Role-based chatbot and clinical support logic enrich raw detections into safe, understandable guidance.</p>
            </article>
            <article className="card" data-reveal>
              <h3>Layer 4: Secure Backend</h3>
              <p>Flask APIs with JWT validation, rate limiting, and standardized error handling enforce reliable operations.</p>
            </article>
            <article className="card" data-reveal>
              <h3>Layer 5: Cloud Reliability</h3>
              <p>AWS EC2, S3, and RDS ensure model availability, scalable processing, and persistent medical data integrity.</p>
            </article>
            <article className="card" data-reveal>
              <h3>Layer 6: Continuous Learning</h3>
              <p>Retraining pipelines ingest new faces from mobile uploads and hot-update active models without downtime.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 data-reveal>Flow Visualization</h2>
        <div className="architecture-flow card" data-reveal>
          <div className="flow-node">Edge Capture</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">AI Inference</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">Safety Logic</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">Flask API</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">AWS Cloud</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">OLED Output</div>
        </div>
        <div className="split">
          <article className="card" data-reveal>
            <h3>Computer Vision Processing</h3>
            <p>Real-time image processing from AR glasses: face recognition via SVM, object detection via YOLOv8, with immediate OLED output.</p>
          </article>
          <article className="card" data-reveal>
            <h3>Voice Chat & Diagnosis</h3>
            <p>Multimodal RAG system with Gemini: patient questions, STT/TTS, database context, and ResNet50 MRI analysis for doctors.</p>
          </article>
        </div>
        <div className="split second-row">
          <article className="card" data-reveal>
            <h3>Machine Learning Retraining</h3>
            <p>Caregiver uploads images to S3, the training server refreshes the SVM model, and the main API hot reloads the latest version.</p>
          </article>
          <article className="card" data-reveal>
            <h3>Identity & Access Management</h3>
            <p>JWT-based stateless auth with token blacklist, password signature validation, and role-based access control.</p>
          </article>
        </div>
      </section>
    </>
  );
}