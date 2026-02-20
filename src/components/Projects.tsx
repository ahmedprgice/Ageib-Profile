import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

export function Projects() {
  const { language } = useLanguage();

  const projects =
    language === "en"
      ? [
          {
            name: "MindfulMe – AI Emotional Support Web App",
            description:
              "Built a full-stack AI-powered emotional support platform designed for teens and young adults. Features multiple AI personalities, journaling system, mood tracking, interactive mini-games, and secure private notes within a calming, minimal UI.",
            tech: [
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "Groq API",
              "Vercel Deployment",
            ],
            outcome:
              "Production-ready full-stack AI application with real-time chat integration and scalable component architecture.",
            image: "/images/projcet1.png",
            github:
              "https://github.com/ahmedprgice/Emotional-Support-project",
            demo: "https://emotional-support-project.vercel.app/",
          },
          {
            name: "Urban Sea Enviro – Multi-Division Business Website",
            description:
              "Designed the full UX strategy and architecture for a multi-division corporate website covering cleaning services, e-commerce, franchise onboarding and online booking.",
            tech: [
              "PHP",
              "Responsive Design",
              "UX Strategy",
              "Booking System",
            ],
            outcome:
              "Complete website strategy & development roadmap (8-week plan)",
            image: "/images/USELOGOBG.webp",
            isLogo: true,
            demo: "https://urbanseaenviro.org/",
          },
          {
            name: "Ageib Portfolio – Developer Personal Website",
            description:
              "Developed a modern, fully responsive developer portfolio using React and TypeScript with scalable architecture and CI/CD deployment.",
            tech: [
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "Responsive Design",
              "Vercel Deployment",
            ],
            outcome:
              "Production-ready portfolio with clean UI system and scalable structure.",
            image: "/images/project3.png",
            github:
              "https://github.com/ahmedprgice/Ageib-Profile",
            demo: "https://ageib-profile.vercel.app/",
          },
        ]
      : [
          {
            name: "MindfulMe – منصة دعم عاطفي بالذكاء الاصطناعي",
            description:
              "تطوير منصة متكاملة تعتمد على الذكاء الاصطناعي للدعم العاطفي للمراهقين والشباب، تتضمن شخصيات ذكاء اصطناعي متعددة ونظام يوميات وتتبع المزاج.",
            tech: [
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
            ],
            outcome:
              "تطبيق متكامل جاهز للإنتاج مع بنية قابلة للتوسع.",
            image: "/images/projcet1.png",
            github:
              "https://github.com/ahmedprgice/Emotional-Support-project",
            demo: "https://emotional-support-project.vercel.app/",
          },
          {
            name: "Urban Sea Enviro – موقع أعمال متعدد الأقسام",
            description:
              "تصميم استراتيجية تجربة المستخدم وهيكلة موقع شركة متعددة الخدمات تشمل الحجز والتجارة الإلكترونية.",
            tech: [
              "PHP",
              "تصميم متجاوب",
              "استراتيجية UX",
              "نظام حجز",
            ],
            outcome:
              "خطة تطوير متكاملة لمدة ٨ أسابيع.",
            image: "/images/USELOGOBG.webp",
            isLogo: true,
            demo: "https://urbanseaenviro.org/",
          },
          {
            name: "Ageib Portfolio – الموقع الشخصي",
            description:
              "تطوير موقع شخصي احترافي باستخدام React و TypeScript مع بنية قابلة للتوسع ونشر عبر Vercel.",
            tech: [
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
            ],
            outcome:
              "موقع شخصي احترافي جاهز للإنتاج.",
            image: "/images/project3.png",
            github:
              "https://github.com/ahmedprgice/Ageib-Profile",
            demo: "https://ageib-profile.vercel.app/",
          },
        ];

  return (
    <section id="projects" className="py-24 px-6">
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
                {language === "en" ? "03." : "٠٣."}
              </span>{" "}
              <span className="text-foreground">
                {language === "en" ? "Projects" : "المشاريع"}
              </span>
            </h2>
            <div className="mt-4 mb-6 h-px w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              {/* IMAGE */}
              <div
                className={`relative h-48 flex items-center justify-center overflow-hidden ${
                  project.isLogo
                    ? "bg-gradient-to-br from-primary/20 via-background to-accent/20"
                    : "bg-gradient-to-br from-primary/10 to-accent/10"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={`transition-all duration-300 ${
                    project.isLogo
                      ? "max-h-32 w-auto object-contain group-hover:scale-105"
                      : "w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">

                {project.isLogo && (
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    {language === "en" ? "Client Project" : "مشروع عميل"}
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
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
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
                    <span className="text-accent font-mono">
                      {language === "en" ? "Impact:" : "الأثر:"}
                    </span>{" "}
                    <span className="text-foreground/90">
                      {project.outcome}
                    </span>
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
                        {language === "en" ? "Code" : "الكود"}
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
                        {language === "en" ? "Demo" : "عرض"}
                      </a>
                    </Button>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
