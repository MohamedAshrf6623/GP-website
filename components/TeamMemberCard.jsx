function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M8 .2a8 8 0 0 0-2.53 15.6c.4.07.55-.17.55-.38v-1.36c-2.25.49-2.72-.95-2.72-.95-.37-.92-.9-1.16-.9-1.16-.74-.5.06-.49.06-.49.82.06 1.25.84 1.25.84.73 1.24 1.91.88 2.38.67.07-.52.29-.88.52-1.09-1.8-.2-3.69-.9-3.69-4a3.1 3.1 0 0 1 .83-2.15 2.9 2.9 0 0 1 .08-2.12s.67-.22 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.3.75.33 1.5.08 2.12a3.1 3.1 0 0 1 .83 2.15c0 3.11-1.9 3.8-3.71 4 .3.25.56.74.56 1.5v2.23c0 .21.14.46.56.38A8 8 0 0 0 8 .2Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M1.2 5.5h3V15h-3V5.5Zm1.5-4.8a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM6 5.5h2.9v1.3h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.7 2 3.7 4.7V15h-3v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V15H6V5.5Z"
      />
    </svg>
  );
}

export default function TeamMemberCard({ member, initials }) {
  return (
    <article className="member" data-reveal>
      <div className="member-head">
        <div className="member-avatar">{initials}</div>
        <div className="member-meta">
          <h3>{member.name}</h3>
          <p className="member-specialty">{member.specialty}</p>
        </div>
      </div>
      <div className="member-links">
        <a href={member.github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
          <span>GitHub</span>
        </a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      </div>
    </article>
  );
}