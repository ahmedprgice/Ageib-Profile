import { Brain, Code, Database, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { language } = useLanguage();

  const strengths =
    language === "en"
      ? [
          {
            icon: Brain,
            title: "Data Analysis & Visualization",
            description:
              "Turning raw data into insights using Python, SQL and dashboards",
          },
          {
            icon: Code,
            title: "Software & Web Development",
            description:
              "Building modern websites and full project architectures",
          },
          {
            icon: Database,
            title: "Data Engineering Basics",
            description:
              "Working with data pipelines, APIs and automation tools",
          },
          {
            icon: Rocket,
            title: "UX Strategy & Product Thinking",
            description:
              "Designing user-focused solutions from idea to launch",
          },
        ]
      : [
          {
            icon: Brain,
            title: "تحليل البيانات والتصور",
            description:
              "تحويل البيانات الخام إلى رؤى باستخدام بايثون و SQL ولوحات التحكم",
          },
          {
            icon: Code,
            title: "تطوير البرمجيات والمواقع",
            description:
              "بناء مواقع حديثة وهندسة مشاريع متكاملة",
          },
          {
            icon: Database,
            title: "أساسيات هندسة البيانات",
            description:
              "العمل على خطوط البيانات وواجهات API وأدوات الأتمتة",
          },
          {
            icon: Rocket,
            title: "استراتيجية تجربة المستخدم",
            description:
              "تصميم حلول تركز على المستخدم من الفكرة إلى الإطلاق",
          },
        ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
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
                {language === "en" ? "01." : "١."}
              </span>{" "}
              <span className="text-foreground">
                {language === "en" ? "About Me" : "نبذة عني"}
              </span>
            </h2>

            <div className="mt-4 mb-6 h-px w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {language === "en" ? (
              <>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a Computer Science student passionate about building
                  practical digital solutions that solve real-world problems.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  I combine skills in data analysis, web development, and
                  software engineering to turn ideas into working products.
                  My projects range from business websites and mobile app
                  concepts to data-driven dashboards and automation tools.
                  I enjoy working across the full project lifecycle from
                  research and UX planning to development, deployment, and
                  continuous improvement.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  Currently, I’m focused on growing as a Data Analyst and
                  Software Engineer while building impactful projects that
                  combine technology, design, and business needs.
                  When I'm not coding, you'll find me learning new
                  technologies, improving my design skills, and exploring
                  ways to create better user experiences.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  أنا طالب علوم حاسوب شغوف ببناء حلول رقمية عملية تحل مشاكل واقعية.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  أدمج مهارات تحليل البيانات وتطوير الويب وهندسة البرمجيات
                  لتحويل الأفكار إلى منتجات عملية. تتنوع مشاريعي بين مواقع
                  أعمال وتطبيقات ولوحات بيانات وأدوات أتمتة.
                  أستمتع بالعمل عبر دورة حياة المشروع كاملة من البحث
                  والتخطيط لتجربة المستخدم إلى التطوير والنشر والتحسين المستمر.
                </p>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  أركز حالياً على التطور كمحلل بيانات ومهندس برمجيات من خلال
                  بناء مشاريع تجمع بين التقنية والتصميم واحتياجات الأعمال.
                  خارج أوقات البرمجة، أحرص على تعلم تقنيات جديدة وتحسين مهاراتي
                  التصميمية وبناء تجارب مستخدم أفضل.
                </p>
              </>
            )}
          </motion.div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/30 transition-all group"
              >
                <strength.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg mb-2 font-medium">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
