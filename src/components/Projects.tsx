import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      name: 'MindfulMe – AI Emotional Support App',
      description:
        'A calming AI-powered emotional support mobile app designed for teens and young adults. Includes AI personalities, journaling, mood tracking, relaxing games, and private notes in a safe and minimal environment.',
      tech: ['Mobile UI/UX', 'AI Chat', 'Mental Health UX', 'Design System'],
      outcome: 'Complete mobile app UX flow designed end-to-end',
      image: '/images/projcet1.png',
      github: 'https://github.com/ahmedprgice/Emotional-Support-project',
      demo: 'https://emotional-support-project.vercel.app/'
    },
    {
      name: 'Urban Sea Enviro – Multi-Division Business Website',
      description:
        'Designed the full UX strategy and architecture for a multi-division corporate website covering cleaning services, e-commerce, franchise onboarding and online booking. Includes sitemap, integrations and launch roadmap.',
      tech: [
        'UX Strategy',
        'WordPress',
        'WooCommerce',
        'SEO',
        'Payment Gateway',
        'Booking System'
      ],
      outcome: 'Complete website strategy & development roadmap (8-week plan)',
      image: '/images/USELOGOBG.webp',
      isLogo: true,
      github: null,
           demo: 'https://urbanseaenviro.org/'
    },
  
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-4xl md:text-5xl font-mono">
            <span className="text-primary">03.</span> Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              {/* IMAGE AREA */}
              <div
                className={`relative h-48 flex items-center justify-center overflow-hidden ${
                  project.isLogo
                    ? 'bg-gradient-to-br from-primary/20 via-background to-accent/20'
                    : 'bg-gradient-to-br from-primary/10 to-accent/10'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={`transition-all duration-300 ${
                    project.isLogo
                      ? 'max-h-32 w-auto object-contain group-hover:scale-105'
                      : 'w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                {/* Client badge */}
                {project.isLogo && (
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    Client Project
                  </Badge>
                )}

                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="font-mono text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* IMPACT */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm">
                    <span className="text-accent font-mono">Impact:</span>{' '}
                    <span className="text-foreground/90">{project.outcome}</span>
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
