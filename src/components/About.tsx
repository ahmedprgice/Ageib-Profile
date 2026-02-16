import { Brain, Code, Database, Rocket } from 'lucide-react';

export function About() {
  const strengths = [
    {
      icon: Brain,
      title: 'LLMs & NLP',
      description: 'Fine-tuning and deploying large language models for production use cases'
    },
    {
      icon: Code,
      title: 'ML Pipelines',
      description: 'End-to-end machine learning systems from data to deployment'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Scalable data infrastructure and processing pipelines'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'MLOps best practices for reliable model serving at scale'
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-4xl md:text-5xl font-mono">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm an AI Engineer specializing in building intelligent systems that solve real-world problems. 
              With a strong foundation in machine learning, deep learning, and software engineering, I bridge 
              the gap between research and production.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              My expertise spans the entire ML lifecycle—from data engineering and model development to 
              deployment and monitoring. I'm passionate about leveraging cutting-edge AI technologies, 
              particularly LLMs and neural networks, to create impactful solutions.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not training models, you'll find me contributing to open-source projects, writing 
              technical articles, or exploring the latest research papers in AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strengths.map((strength, index) => (
              <div 
                key={index}
                className="p-6 bg-card border border-primary/10 rounded-lg hover:border-primary/30 transition-all group"
              >
                <strength.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg mb-2">{strength.title}</h3>
                <p className="text-sm text-muted-foreground">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
