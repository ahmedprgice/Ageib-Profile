import { Code2, Database, Wrench, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export function Skills() {
  const { language } = useLanguage();
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories: SkillCategory[] =
    language === "en"
      ? [
          {
            category: "Programming",
            icon: <Code2 className="w-6 h-6" />,
            color: "from-cyan-500 to-blue-500",
            skills: [
              { name: "Python", level: 90 },
              { name: "PHP", level: 70 },
              { name: "JavaScript", level: 90 },
              { name: "TypeScript", level: 80 },
              { name: "SQL", level: 80 },
              { name: "HTML/CSS", level: 90 },
              { name: "C++", level: 75 },
            ],
          },
          {
            category: "Data & Analytics",
            icon: <Database className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500",
            skills: [
              { name: "Pandas & NumPy", level: 82 },
              { name: "Data Cleaning", level: 85 },
              { name: "Exploratory Data Analysis", level: 80 },
              { name: "Data Visualization", level: 80 },
              { name: "Excel & Google Sheets", level: 88 },
              { name: "Tableau / Dashboards", level: 75 },
            ],
          },
          {
            category: "Tools & Web Development",
            icon: <Wrench className="w-6 h-6" />,
            color: "from-emerald-500 to-teal-500",
            skills: [
              { name: "React", level: 80 },
              { name: "Django", level: 90 },
              { name: "Git & GitHub", level: 85 },
              { name: "REST APIs", level: 75 },
              { name: "Node.js", level: 75 },
            ],
          },
        ]
      : [
          {
            category: "البرمجة",
            icon: <Code2 className="w-6 h-6" />,
            color: "from-cyan-500 to-blue-500",
            skills: [
              { name: "Python", level: 90 },
              { name: "PHP", level: 70 },
              { name: "JavaScript", level: 90 },
              { name: "TypeScript", level: 80 },
              { name: "SQL", level: 80 },
              { name: "HTML/CSS", level: 90 },
              { name: "C++", level: 75 },
            ],
          },
          {
            category: "تحليل البيانات",
            icon: <Database className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500",
            skills: [
              { name: "Pandas & NumPy", level: 82 },
              { name: "تنظيف البيانات", level: 85 },
              { name: "التحليل الاستكشافي", level: 80 },
              { name: "تصور البيانات", level: 80 },
              { name: "Excel & Sheets", level: 88 },
              { name: "لوحات البيانات", level: 75 },
            ],
          },
          {
            category: "أدوات وتطوير الويب",
            icon: <Wrench className="w-6 h-6" />,
            color: "from-emerald-500 to-teal-500",
            skills: [
              { name: "React", level: 80 },
              { name: "Django", level: 90 },
              { name: "Git & GitHub", level: 85 },
              { name: "REST APIs", level: 75 },
              { name: "Node.js", level: 75 },
            ],
          },
        ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-background to-card/30"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-mono tracking-wide leading-tight">
              <span className="text-primary">
                {language === "en" ? "02." : "٠٢."}
              </span>{" "}
              <span className="text-foreground">
                {language === "en"
                  ? "Technical Skills"
                  : "المهارات التقنية"}
              </span>
            </h2>

            <div className="mt-4 mb-6 h-px w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="group relative"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300`}
              />

              <div className="relative p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 h-full">

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-mono">
                      {category.category}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {category.skills.length}{" "}
                      {language === "en"
                        ? "technologies"
                        : "تقنيات"}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground/90">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-accent">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Average */}
                <div className="mt-6 pt-6 border-t border-border/50 flex justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-accent" />
                    {language === "en"
                      ? "Avg Proficiency"
                      : "متوسط الإتقان"}
                  </span>
                  <span className="font-mono">
                    {Math.round(
                      category.skills.reduce(
                        (a, s) => a + s.level,
                        0
                      ) / category.skills.length
                    )}
                    %
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
