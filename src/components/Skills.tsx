import { Badge } from './ui/badge';
import { Code2, Brain, Wrench, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface Skill {
  name: string;
  level: number; // 1-100
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      category: 'Programming',
      icon: <Code2 className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TypeScript', level: 88 },
        { name: 'SQL', level: 85 },
        { name: 'C++', level: 78 },
        { name: 'Rust', level: 72 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      category: 'ML & AI',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Deep Learning', level: 92 },
        { name: 'NLP', level: 90 },
        { name: 'LLMs', level: 88 },
        { name: 'Computer Vision', level: 85 },
        { name: 'Reinforcement Learning', level: 80 },
        { name: 'Transfer Learning', level: 87 }
      ]
    },
    {
      category: 'Frameworks & Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'PyTorch', level: 93 },
        { name: 'TensorFlow', level: 88 },
        { name: 'LangChain', level: 85 },
        { name: 'Hugging Face', level: 90 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 82 },
        { name: 'AWS', level: 88 },
        { name: 'Git & CI/CD', level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-4xl md:text-5xl font-mono">
            <span className="text-primary">02.</span> Technical Expertise
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
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
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300`} />
              
              <div className="relative p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-mono text-foreground">
                      {category.category}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground/90">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-accent">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.1 + skillIndex * 0.05 + 0.2,
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill count indicator */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-accent" />
                      Proficiency Level
                    </span>
                    <span className="font-mono">
                      Avg: {Math.round(category.skills.reduce((acc, s) => acc + s.level, 0) / category.skills.length)}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}