import { FileText, Github, Star } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function Publications() {
  const papers = [
    {
      title: 'Efficient Fine-Tuning of Large Language Models with Low-Rank Adaptation',
      venue: 'NeurIPS 2023',
      authors: 'You, A., Collaborator, B., Researcher, C.',
      description: 'Novel approach to parameter-efficient fine-tuning reducing memory requirements by 70%.',
      citations: 127,
      link: 'https://arxiv.org'
    },
    {
      title: 'Real-Time Anomaly Detection in Streaming Data Using Autoencoders',
      venue: 'ICML 2022',
      authors: 'You, A., Partner, D.',
      description: 'Architecture for detecting anomalies in high-velocity data streams with sub-100ms latency.',
      citations: 89,
      link: 'https://arxiv.org'
    },
    {
      title: 'Neural Architecture Search for Edge Deployment',
      venue: 'CVPR 2021',
      authors: 'You, A., Advisor, E., Student, F.',
      description: 'Automated method for finding optimal neural architectures for resource-constrained devices.',
      citations: 203,
      link: 'https://arxiv.org'
    }
  ];

  const openSource = [
    {
      name: 'ml-pipeline-toolkit',
      description: 'Production-ready ML pipeline framework with automatic versioning and monitoring',
      stars: 2400,
      language: 'Python',
      link: 'https://github.com'
    },
    {
      name: 'efficient-transformers',
      description: 'Optimized transformer implementations for faster training and inference',
      stars: 1800,
      language: 'PyTorch',
      link: 'https://github.com'
    },
    {
      name: 'llm-deployment-guide',
      description: 'Comprehensive guide and tools for deploying LLMs in production',
      stars: 3200,
      language: 'Python',
      link: 'https://github.com'
    }
  ];

  return (
    <section id="publications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 class="text-2xl md:text-5xl font-mono tracking-wide leading-tight">
            <span className="text-primary">05.</span> Publications & Open Source
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Research Papers */}
        <div className="mb-16">
          <h3 className="text-2xl mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-accent" />
            Research Papers
          </h3>
          
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-xl group-hover:text-primary transition-colors">
                    {paper.title}
                  </h4>
                  <Badge variant="outline" className="border-accent/30 text-accent shrink-0">
                    {paper.citations} citations
                  </Badge>
                </div>
                
                <p className="text-sm text-primary mb-2 font-mono">{paper.venue}</p>
                <p className="text-sm text-muted-foreground mb-3">{paper.authors}</p>
                <p className="text-foreground/80 mb-4">{paper.description}</p>
                
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    Read Paper
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source Projects */}
        <div>
          <h3 className="text-2xl mb-6 flex items-center gap-2">
            <Github className="h-6 w-6 text-accent" />
            Open Source Contributions
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {openSource.map((project, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Github className="h-8 w-8 text-accent" />
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>{project.stars.toLocaleString()}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-mono mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <Badge variant="secondary" className="text-xs font-mono">
                  {project.language}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub stats */}
        <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-mono text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Repositories</p>
            </div>
            <div>
              <div className="text-4xl font-mono text-accent mb-2">7.5K</div>
              <p className="text-muted-foreground">GitHub Stars</p>
            </div>
            <div>
              <div className="text-4xl font-mono text-primary mb-2">1.2K</div>
              <p className="text-muted-foreground">Contributions</p>
            </div>
            <div>
              <div className="text-4xl font-mono text-accent mb-2">100+</div>
              <p className="text-muted-foreground">PRs Merged</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
