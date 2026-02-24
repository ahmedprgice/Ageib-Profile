import { Code2, Database, Wrench, Sparkles, Users, Brain, Lightbulb, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

interface SoftSkill {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Skills() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"technical" | "soft">("technical");

  /* =========================
     TECHNICAL SKILLS
  ========================== */
  const technicalSkills: SkillCategory[] =
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

  /* =========================
     SOFT SKILLS
  ========================== */
  const softSkills: SoftSkill[] =
    language === "en"
      ? [
          {
            title: "Communication",
            description: "Explaining complex ideas clearly",
            icon: <Users className="w-6 h-6" />,
          },
          {
            title: "Teamwork",
            description: "Collaborating effectively",
            icon: <Users className="w-6 h-6" />,
          },
          {
            title: "Problem Solving",
            description: "Breaking down complex challenges",
            icon: <Brain className="w-6 h-6" />,
          },
          {
            title: "Critical Thinking",
            description: "Logical and analytical reasoning",
            icon: <Brain className="w-6 h-6" />,
          },
          {
            title: "Creativity",
            description: "Innovative solution building",
            icon: <Lightbulb className="w-6 h-6" />,
          },
          {
            title: "Time Management",
            description: "Prioritizing efficiently",
            icon: <Clock className="w-6 h-6" />,
          },
        ]
      : [
          {
            title: "التواصل",
            description: "شرح الأفكار بوضوح",
            icon: <Users className="w-6 h-6" />,
          },
          {
            title: "العمل الجماعي",
            description: "التعاون بفعالية",
            icon: <Users className="w-6 h-6" />,
          },
          {
            title: "حل المشكلات",
            description: "تحليل التحديات المعقدة",
            icon: <Brain className="w-6 h-6" />,
          },
          {
            title: "التفكير النقدي",
            description: "تحليل منطقي وموضوعي",
            icon: <Brain className="w-6 h-6" />,
          },
          {
            title: "الإبداع",
            description: "تطوير حلول مبتكرة",
            icon: <Lightbulb className="w-6 h-6" />,
          },
          {
            title: "إدارة الوقت",
            description: "تنظيم المهام بكفاءة",
            icon: <Clock className="w-6 h-6" />,
          },
        ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono">
            <span className="text-primary">
              {language === "en" ? "02." : "٠٢."}
            </span>{" "}
            {language === "en" ? "Skills" : "المهارات"}
          </h2>

          {/* Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="relative flex bg-card border border-border rounded-full p-1 w-[320px]">
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-1 bottom-1 w-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                style={{
                  left: activeTab === "technical" ? "4px" : "50%",
                }}
              />

              <button
                onClick={() => setActiveTab("technical")}
                className="relative w-1/2 py-2 text-sm font-medium z-10"
              >
                {language === "en" ? "Technical" : "تقنية"}
              </button>

              <button
                onClick={() => setActiveTab("soft")}
                className="relative w-1/2 py-2 text-sm font-medium z-10"
              >
                {language === "en" ? "Soft" : "شخصية"}
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT SWITCH */}
        <AnimatePresence mode="wait">

          {/* TECHNICAL */}
          {activeTab === "technical" && (
            <motion.div
              key="technical"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {technicalSkills.map((category, index) => (
                <div key={index} className="p-8 bg-card border border-border rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-mono">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary/30 rounded-full">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* SOFT */}
          {activeTab === "soft" && (
            <motion.div
              key="soft"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-8 bg-card border border-border rounded-xl text-center hover:border-accent transition"
                >
                  <div className="mb-4 flex justify-center text-accent">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
