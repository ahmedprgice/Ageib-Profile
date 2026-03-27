import { ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export function Recommendations() {
  const { language } = useLanguage();

  const recommendations =
    language === "en"
      ? [
          {
            text: "Ahmed demonstrated a consistent level of diligence, analytical thinking, and professional maturity. He was able to manage large datasets effectively and consistently delivered accurate, well-structured work.",
            name: "Mohammad Hussain",
            role: "Corporate Accounts Manager",
            company: "iWISERS Sdn Bhd",
            link: "/images/Recommendation_Letter_Ahmed_Mohammed_Ageib.pdf",
          },
        ]
      : [
          {
            text: "أظهر أحمد مستوى عالٍ من الاجتهاد والتفكير التحليلي والنضج المهني، وتمكن من التعامل مع مجموعات بيانات كبيرة وتقديم أعمال دقيقة ومنظمة باستمرار.",
            name: "Mohammad Hussain",
            role: "مدير الحسابات المؤسسية",
            company: "iWISERS Sdn Bhd",
            link: "/Recommendation_Letter_Ahmed_Mohammed_Ageib.pdf",
          },
        ];

  return (
    <section id="recommendations" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE (same as Projects) */}
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
                {language === "en" ? "06." : "٠٦."}
              </span>{" "}
              <span className="text-foreground">
                {language === "en" ? "Recommendations" : "التوصيات"}
              </span>
            </h2>

            <div className="mt-4 mb-6 h-px w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
<div class="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "What colleagues and supervisors say about working together."
              : "ما يقوله الزملاء والمشرفون عن العمل معي."}
          </p>
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                “{rec.text}”
              </p>

              {/* Divider */}
              <div className="border-t border-border mb-4" />

              {/* Person */}
              <div>
                <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {rec.name}
                </h4>

                <p className="text-sm text-primary">
                  {rec.role}
                </p>

                <p className="text-xs text-muted-foreground">
                  {rec.company}
                </p>
              </div>

              {/* Button */}
              <div className="pt-6">
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href={rec.link} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {language === "en"
                      ? "View Full Letter"
                      : "عرض الخطاب"}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}