export const teamMembers = [
  {
    name: 'Mohamed Ashraf',
    specialty: 'Backend',
    github: 'https://github.com/MohamedAshrf6623',
    linkedin: 'https://www.linkedin.com/in/mohamed-ashraf-9b770727a/'
  },
  { name: 'Aya Wael', specialty: 'AI', github: '#', linkedin: '#' },
  { name: 'Sarah Abdo', specialty: 'AI', github: '#', linkedin: '#' },
  { name: 'Nada Amr', specialty: 'Flutter', github: '#', linkedin: '#' },
  { name: 'Mena Abdel', specialty: 'Flutter', github: '#', linkedin: '#' },
  { name: 'Yehia Hamdy', specialty: 'Hardware', github: '#', linkedin: '#' },
  { name: 'Mohamed Fattouh', specialty: 'Cloud', github: '#', linkedin: '#' },
  { name: 'Toqa Mohamed', specialty: 'Backend', github: '#', linkedin: '#' },
  { name: 'Mariam Ali', specialty: 'AI', github: '#', linkedin: '#' },
  { name: 'Somaya Khaled', specialty: 'AI', github: '#', linkedin: '#' },
  { name: 'Yomna Mahmoud', specialty: 'Database', github: '#', linkedin: '#' },
  { name: 'Abdelrahman Mohamed', specialty: 'Flutter', github: '#', linkedin: '#' }
];

export const demoPackages = [
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

export function getInitials(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) {
    return 'NA';
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}