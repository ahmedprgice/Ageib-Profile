import { Brain, Code, Database, Rocket } from 'lucide-react';

export function About() {
  const strengths = [
    {
      icon: Brain,
      title: 'Data Analysis & Visualization',
      description: 'Turning raw data into insights using Python, SQL and dashboards'
    },
    {
      icon: Code,
      title: 'Software & Web Development',
      description: 'Building modern websites and full project architectures'
    },
    {
      icon: Database,
      title: 'Data Engineering Basics',
      description: 'Working with data pipelines, APIs and automation tools'
    },
    {
      icon: Rocket,
      title: 'UX Strategy & Product Thinking',
      description: 'Designing user-focused solutions from idea to launch'
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
              I'm a Computer Science student passionate about building practical digital solutions that solve real-world problems.



            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              I combine skills in data analysis, web development, and software engineering to turn ideas into working products. My projects range from business websites and mobile app concepts to data-driven dashboards and automation tools.

              I enjoy working across the full project lifecycle from research and UX planning to development, deployment, and continuous improvement.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently, I’m focused on growing as a Data Analyst and Software Engineer while building impactful projects that combine technology, design, and business needs.

              When I'm not coding, you'll find me learning new technologies, improving my design skills, and exploring ways to create better user experiences.
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
