import { GraduationCap, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      specialization: 'Data Science',
      institution: 'Multimedia University Malaysia (MMU)',
      period: '2023 - 2026',
      gpa: '3.3/4.0',
      description:
        'Focus on Deep Learning, Natural Language Processing, and Reinforcement Learning',
      highlights: []
    }
  ];

  const certifications = [
    {
      name: 'Career Essentials in Data Analysis',
      issuer: 'Microsoft & LinkedIn Learning',
      date: '2025',
      link: 'https://www.linkedin.com/learning/certificates/f2d31a6e92372bf35697264848f5622f1b8713bbc3c0ad479e425e8c81d6330e'
    },
    {
      name: 'Kubernetes Application Developer (CKAD)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      credentialId: 'CKAD-2022-GHI',
      link: 'https://www.credly.com/badges/your-link-here'
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-4xl md:text-5xl font-mono">
            <span className="text-primary">05.</span> Education & Certifications
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* EDUCATION */}
        <div className="mb-16">
          <h3 className="text-2xl mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            Education
          </h3>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h4 className="text-2xl mb-2">{edu.degree}</h4>
              <p className="text-lg text-primary">{edu.institution}</p>
              <p className="text-sm text-accent font-mono">{edu.specialization}</p>

              <div className="flex gap-6 mt-3 text-sm">
                <span className="text-muted-foreground font-mono">{edu.period}</span>
                <span className="text-accent font-medium">{edu.gpa}</span>
              </div>

              <p className="mt-4 text-muted-foreground">{edu.description}</p>

              <div className="mt-4 space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h3 className="text-2xl mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-accent" />
            Professional Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Award className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-primary">{cert.issuer}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <div className="text-xs text-muted-foreground font-mono">
                    {cert.date}
                    {cert.credentialId && (
                      <div className="opacity-60">{cert.credentialId}</div>
                    )}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
