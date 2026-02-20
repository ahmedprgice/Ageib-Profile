import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

export function Experience() {
  const { language } = useLanguage();

  const experiences =
    language === "en"
      ? [
          {
            type: "work",
            role: "Web & Business Project Associate",
            company: "Urban Sea Enviro · Remote (Part-Time)",
            period: "June 2025 – Present",
            description:
              "Owned end-to-end web and business initiatives, combining technical execution with market-driven strategy to strengthen digital presence and customer engagement.",
            achievements: [
              "Led full website lifecycle: requirements, UI/UX design, development, testing, and deployment",
              "Conducted market & competitor analysis across cleaning services and cold-pressed juice industries",
              "Delivered actionable recommendations on pricing models, branding, and digital positioning",
              "Improved customer engagement through data-driven web and content strategies",
            ],
          },
          {
            type: "work",
            role: "Corporate Insight Analyst Intern",
            company: "iWISERS Sdn Bhd · Petaling Jaya, Malaysia",
            period: "Jul 2025 – Oct 2025",
            description:
              "Supported corporate and regional insight projects through data analysis, research, and structured reporting for internal teams and clients.",
            achievements: [
              "Analyzed and coded large volumes of social media and user activity data",
              "Generated actionable insights for client, industry, and regional analysis",
              "Produced structured presentation reports for stakeholders and clients",
              "Conducted market, client, and competitor research to support strategic initiatives",
            ],
          },
          {
            type: "work",
            role: "Website Development Intern",
            company: "INTERTEK · Remote",
            period: "Nov 2024 – May 2025",
            description:
              "Completed a structured remote internship focused on full-stack web development.",
            achievements: [
              "Built responsive web pages using HTML5, CSS3 and JavaScript",
              "Applied backend development concepts using Django, Python and PHP",
              "Ensured cross-browser compatibility and mobile-responsive design",
              "Used Git and GitHub for version control and team collaboration",
              "Participated in project workflow, testing and website deployment processes",
              "Collaborated remotely with developers and followed industry coding standards",
            ],
          },
          {
            type: "education",
            role: "Skills Development Team Member",
            company: "Society, Multimedia University · Cyberjaya, Malaysia",
            period: "Nov 2024 – Nov 2025",
            description:
              "Contributed to technical skill development initiatives by organizing workshops.",
            achievements: [
              "Organized and led Git & GitHub technical project workshops",
              "Facilitated a Blockchain & Smart Contracts workshop",
              "Collaborated with team members to deliver hands-on sessions",
              "Strengthened students’ practical skills",
            ],
          },
        ]
      : [
          {
            type: "work",
            role: "مسؤول مشاريع ويب وأعمال",
            company: "Urban Sea Enviro · عن بُعد (دوام جزئي)",
            period: "يونيو ٢٠٢٥ – حتى الآن",
            description:
              "إدارة مبادرات الويب والأعمال بشكل متكامل.",
            achievements: [
              "قيادة دورة حياة الموقع بالكامل من المتطلبات إلى النشر",
              "تحليل السوق والمنافسين",
              "تقديم توصيات عملية",
              "تحسين تفاعل العملاء",
            ],
          },
          {
            type: "work",
            role: "متدرب محلل رؤى مؤسسية",
            company: "iWISERS · بيتالينغ جايا، ماليزيا",
            period: "يوليو ٢٠٢٥ – أكتوبر ٢٠٢٥",
            description:
              "دعم مشاريع التحليل المؤسسي والإقليمي.",
            achievements: [
              "تحليل بيانات وسائل التواصل",
              "توليد رؤى عملية",
              "إعداد تقارير",
              "أبحاث سوقية",
            ],
          },
          {
            type: "work",
            role: "متدرب تطوير مواقع",
            company: "INTERTEK · عن بُعد",
            period: "نوفمبر ٢٠٢٤ – مايو ٢٠٢٥",
            description:
              "إكمال تدريب يركز على تطوير الويب المتكامل.",
            achievements: [
              "بناء صفحات ويب متجاوبة",
              "تطبيق مفاهيم الخلفية",
              "ضمان التوافق",
              "استخدام Git",
            ],
          },
          {
            type: "education",
            role: "عضو فريق تطوير المهارات",
            company: "جامعة الوسائط المتعددة · ماليزيا",
            period: "نوفمبر ٢٠٢٤ – نوفمبر ٢٠٢٥",
            description:
              "تنظيم ورش عمل وجلسات تدريبية.",
            achievements: [
              "تنظيم ورش Git",
              "تقديم ورشة بلوكشين",
              "جلسات تعليمية عملية",
            ],
          },
        ];

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
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
                {language === "en" ? "04." : "٠٤."}
              </span>{" "}
              <span className="text-foreground">
                {language === "en" ? "Experience" : "الخبرات"}
              </span>
            </h2>
            <div className="mt-4 mb-6 h-px w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background ring-4 ring-primary/20" />

                <div className="flex-1 ml-20 md:ml-0">
                  <div className="flex items-center gap-2 mb-2">
                    {exp.type === "work" ? (
                      <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-accent" />
                    )}
                    <span className="font-mono text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all">
                    <h3 className="text-2xl mb-1">{exp.role}</h3>
                    <p className="text-primary mb-4">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-foreground/80 flex items-start gap-2"
                        >
                          <span className="text-accent mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
