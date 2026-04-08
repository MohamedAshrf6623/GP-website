import PageHero from '../../components/PageHero';
import TeamMemberCard from '../../components/TeamMemberCard';
import { getInitials, teamMembers } from '../../lib/site-data';

export const metadata = {
  title: 'AlzaWare | Team'
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Team"
        title="Project Team"
        lead="12 talented developers from Suez Canal University contributing to this innovative healthcare AI project."
      />

      <section className="section container">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} initials={getInitials(member.name)} />
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 data-reveal>Project Supervision</h2>
          <div className="meta-grid">
            <div className="meta-card" data-reveal>
              <span>Faculty Advisor</span>
              <strong>Dr. Iman Mostafa</strong>
            </div>
            <div className="meta-card" data-reveal>
              <span>University</span>
              <strong>Suez Canal University</strong>
            </div>
            <div className="meta-card" data-reveal>
              <span>Department</span>
              <strong>Computer and Control</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}