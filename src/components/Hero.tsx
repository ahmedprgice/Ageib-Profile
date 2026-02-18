import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00e5ff 1px, transparent 1px),
              linear-gradient(to bottom, #00e5ff 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
          }}
        />
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">

        {/* Availability badge */}
        <div className="inline-block mb-4 px-4 py-1.5 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full">
          <span className="text-primary font-mono">Open to new opportunities</span>
        </div>

        {/* NAME */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          Ahmed Ageib
        </h1>

        {/* MAIN ROLE */}
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          Software Engineer • Data Analyst
        </p>

        {/* TAGLINE */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto">
          Building modern web applications and transforming data into
          meaningful insights that drive real business value.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 group"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            onClick={scrollToContact}
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
          >
            Contact Me
          </Button>

          {/* 👉 Replace with your CV link */}
          <Button
            size="lg"
            variant="ghost"
            className="hover:bg-accent/10"
            asChild
          >
            <a href="images/Ahmed_Ageib_CV.pdf" download target="_blank">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>

      </div>
    </section>
  );
}
