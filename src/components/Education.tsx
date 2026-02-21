import { GraduationCap, Award, CheckCircle2, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Education() {
  const { language } = useLanguage();

  const education =
    language === "en"
      ? [
        {
          degree: "Bachelor of Computer Science",
          specialization: "Data Science",
          institution: "Multimedia University Malaysia (MMU)",
          period: "2023 - 2026",
          gpa: "3.3/4.0",
          description:
            "Focus on Deep Learning, Natural Language Processing, and Reinforcement Learning",
          logo: "/images/mmu.png",
          highlights: [],
        },
      ]
      : [
        {
          degree: "بكالوريوس علوم الحاسوب",
          specialization: "علم البيانات",
          institution: "جامعة الوسائط المتعددة - ماليزيا (MMU)",
          period: "٢٠٢٣ - ٢٠٢٦",
          gpa: "٣.٣ / ٤.٠",
          description:
            "التركيز على التعلم العميق ومعالجة اللغة الطبيعية والتعلم المعزز",
          logo: "/images/mmu.png",
          highlights: [],
        },
      ];

  const certifications =
    language === "en"
      ? [
     {
          name: "Career Essentials in Data Analysis",
          issuer: "Microsoft & LinkedIn Learning",
          date: "Oct 2025",
          link: "https://www.linkedin.com/learning/certificates/f2d31a6e92372bf35697264848f5622f1b8713bbc3c0ad479e425e8c81d6330e",
          logo: "/images/microsoft.png",
          
        },
        {
          name: "Learning Data Analytics: 1 Foundations",
          issuer: "LinkedIn Learning",
          date: "2025",
          link: "https://www.linkedin.com/learning/certificates/40efc6d72569bceaab0ba08500d00627c1e384aeac5274aea95814a4bf433310?trk=share_certificate",
          logo: "/images/linkedin.png",
        },
        {
          name: "Introduction to Career Skills in Data Analytics",
          issuer: "LinkedIn Learning",
          date: "Oct 2025",
          link: "https://www.linkedin.com/learning/certificates/9ee3bae17bf43ebf6d974dc53a163a1c461e9b5778bdf16ab662e43a7ea92ccc?trk=share_certificate",
          logo: "/images/linkedin.png",
        },
      ]
      : [
         {
          name: "أساسيات تحليل البيانات المهنية",
          issuer: "مايكروسوفت و لينكدإن للتعلم",
          date: "أكتوبر ٢٠٢٥",
          link: "https://www.linkedin.com/learning/certificates/f2d31a6e92372bf35697264848f5622f1b8713bbc3c0ad479e425e8c81d6330e",
          logo: "/images/microsoft.png",
        },
        {
          name: "تعلم تحليل البيانات: الأساسيات",
          issuer: "لينكدإن للتعلم",
          date: "٢٠٢٥",
          link: "https://www.linkedin.com/learning/certificates/40efc6d72569bceaab0ba08500d00627c1e384aeac5274aea95814a4bf433310?trk=share_certificate",
          logo: "/images/linkedin.png",
        },
        {
          name: "مقدمة في مهارات المسار المهني في تحليل البيانات",
          issuer: "لينكدإن للتعلم",
          date: "أكتوبر ٢٠٢٥",
          link: "https://www.linkedin.com/learning/certificates/9ee3bae17bf43ebf6d974dc53a163a1c461e9b5778bdf16ab662e43a7ea92ccc?trk=share_certificate",
          logo: "/images/linkedin.png",
        },
      ];

  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-mono tracking-wide leading-tight">
              <span className="text-primary">
                {language === "en" ? "05." : "٠٥."}
              </span>{" "}
              <span className="text-foreground">
                {language === "en"
                  ? "Education & Certifications"
                  : "التعليم والشهادات"}
              </span>
            </h2>

            <div className="mt-4 mb-6 h-px w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
        </motion.div>

        {/* EDUCATION */}
        <div className="mb-16">
          <h3 className="text-2xl mb-6 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-accent" />
            {language === "en" ? "Education" : "التعليم"}
          </h3>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h4 className="text-2xl mb-2">{edu.degree}</h4>
              <p className="text-lg text-primary">{edu.institution}</p>
              <p className="text-sm text-accent font-mono">
                {edu.specialization}
              </p>

              <div className="flex gap-6 mt-3 text-sm">
                <span className="text-muted-foreground font-mono">
                  {edu.period}
                </span>
                <span className="text-accent font-medium">{edu.gpa}</span>
              </div>

              <p className="mt-4 text-muted-foreground">
                {edu.description}
              </p>

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
            {language === "en"
              ? "Professional Certifications"
              : "الشهادات المهنية"}
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -6 }}
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

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <div className="text-xs text-muted-foreground font-mono">
                    {cert.date}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-accent hover:text-primary transition-colors"
                    >
                      {language === "en"
                        ? "View Certificate"
                        : "عرض الشهادة"}
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
