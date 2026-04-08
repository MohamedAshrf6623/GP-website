import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'AlzaWare | Features'
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Operational Safety"
        title="Operational Safety Features"
        lead="AlzaWare combines real-time vision, role-based medical assistance, and cloud-backed intelligence to reduce risk, improve awareness, and support safer daily operation for Alzheimer patients."
      />

      <section className="section container">
        <div className="split">
          <article className="card" data-reveal>
            <h3>Identity Safety Layer</h3>
            <p>
              Face recognition runs through <strong>MTCNN + FaceNet + SVM (RBF)</strong> to identify trusted people and reduce confusion in real-time interactions.
            </p>
            <ul>
              <li>Training Accuracy: 99.12%</li>
              <li>Validation Accuracy: 98.61%</li>
              <li>Testing Accuracy: 97.22%</li>
              <li>Low-confidence faces are filtered to avoid unsafe decisions</li>
            </ul>
          </article>
          <article className="card" data-reveal>
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

        <div className="split second-row">
          <article className="card" data-reveal>
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
          <article className="card" data-reveal>
            <h3>Continuous Learning & Reliability</h3>
            <p>
              The system retrains safely when new faces are added: preprocessing, augmentation, embedding merge,
              then model refresh without service downtime.
            </p>
            <ul>
              <li>15 mobile images trigger retraining workflow</li>
              <li>8 augmented samples generated per uploaded image</li>
              <li>&gt;85% accuracy for newly added users</li>
              <li>Hot model reload from AWS S3 to active inference service</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 data-reveal>Safety Operation Flow</h2>
          <div className="flow-grid">
            <div className="flow-item" data-reveal>1. Capture scene with camera</div>
            <div className="flow-item" data-reveal>2. Route to face/object mode</div>
            <div className="flow-item" data-reveal>3. Run AI inference pipeline</div>
            <div className="flow-item" data-reveal>4. Validate confidence & context</div>
            <div className="flow-item" data-reveal>5. Display safe guidance on OLED</div>
          </div>
        </div>
      </section>
    </>
  );
}