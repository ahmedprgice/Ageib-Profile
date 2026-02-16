import { Heart, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm">Built with React + Tailwind</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Designed & Developed by Ageib </span>
        
            <span className="text-sm"></span>
          </div>

          <div className="font-mono text-sm text-muted-foreground">
            © 2026 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
