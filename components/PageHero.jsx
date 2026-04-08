export default function PageHero({ eyebrow, title, lead, children, className = '' }) {
  return (
    <section className={`hero ${className}`.trim()}>
      <div className="container">
        {eyebrow ? <p className="eyebrow" data-reveal>{eyebrow}</p> : null}
        <h1 data-reveal>{title}</h1>
        <p className="lead" data-reveal>{lead}</p>
        {children}
      </div>
    </section>
  );
}