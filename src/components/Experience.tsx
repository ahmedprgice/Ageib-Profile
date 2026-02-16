import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'work',
      role: 'Web & Business Project Associate',
      company: 'Urban Sea Enviro · Remote (Part-Time)',
      period: 'June 2025 – Present',
      description: 'Owned end-to-end web and business initiatives, combining technical execution with market-driven strategy to strengthen digital presence and customer engagement.',
      achievements: [
        'Led full website lifecycle: requirements, UI/UX design, development, testing, and deployment',
        'Conducted market & competitor analysis across cleaning services and cold-pressed juice industries',
        'Delivered actionable recommendations on pricing models, branding, and digital positioning',
        'Improved customer engagement through data-driven web and content strategies'
      ]
    },
    {
      type: 'Work',
      role: 'Corporate Insight Analyst Intern',
      company: 'iWISERS Sdn Bhd · Petaling Jaya, Malaysia',
      period: 'Jul 2025 – Oct 2025',
      description: 'Supported corporate and regional insight projects through data analysis, research, and structured reporting for internal teams and clients.',
      achievements: [
        'Analyzed and coded large volumes of social media and user activity data',
        'Generated actionable insights for client, industry, and regional analysis',
        'Produced structured presentation reports for stakeholders and clients',
        'Conducted market, client, and competitor research to support strategic initiatives'
      ]
    },
    {
      type: 'work',
      role: 'Website Development Intern',
      company: 'INTERTEK · Remote',
      period: 'Nov 2024 – May 2025',
      description:
        'Completed a structured remote internship focused on full-stack web development, contributing to real projects while learning modern development workflows and deployment practices.',
      achievements: [
        'Built responsive web pages using HTML5, CSS3 and JavaScript',
        'Applied backend development concepts using Django, Python and PHP',
        'Ensured cross-browser compatibility and mobile-responsive design',
        'Used Git and GitHub for version control and team collaboration',
        'Participated in project workflow, testing and website deployment processes',
        'Collaborated remotely with developers and followed industry coding standards'
      ]
    },

    {
      type: 'education',
      role: 'Skills Development Team Member',
      company: 'Society, Multimedia University · Cyberjaya, MalaysiaT',
      period: 'Nov 2024 – Nov 2025',
      description: 'Contributed to technical skill development initiatives by organizing workshops, leading hands-on sessions, and supporting peer learning within the university.',
      achievements: [
        'Organized and led Git & GitHub technical project workshops',
        'Facilitated a Blockchain & Smart Contracts workshop for students',
        'Collaborated with team members to deliver hands-on technical learning sessions',
        'Strengthened students’ practical skills through peer-led technical initiatives'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-4xl md:text-5xl font-mono">
            <span className="text-primary">04.</span> Experience
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background ring-4 ring-primary/20" />

                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="inline-block">
                    <div className="flex items-center gap-2 mb-2">
                      {exp.type === 'work' ? (
                        <Briefcase className="h-5 w-5 text-primary" />
                      ) : (
                        <GraduationCap className="h-5 w-5 text-accent" />
                      )}
                      <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all">
                    <h3 className="text-2xl mb-1">{exp.role}</h3>
                    <p className="text-primary mb-4">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}