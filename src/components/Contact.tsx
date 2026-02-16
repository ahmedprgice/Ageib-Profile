import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ahmedageibemail01@gmail.com',
      handle: 'ahmedageibemail01@gmail.com'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ahmedprgice',
      handle: '@ahmedprgice'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ahmed-ageib/',
      handle: '/in/Ahmed Ageib'
    },

  ];

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-4xl md:text-5xl font-mono">
            <span className="text-primary">06.</span> Get In Touch
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-foreground/80 mb-4">
            I'm currently open to new opportunities and interesting projects.
          </p>
          <p className="text-lg text-muted-foreground">
            Whether you have a question, want to collaborate, or just want to say hi,
            feel free to reach out!
          </p>
        </div>

        {/* Social links */}
        {/* Social links */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
              >
                <social.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-center">
                  <p className="font-mono text-sm text-muted-foreground">{social.name}</p>
                  <p className="text-xs text-foreground/60 mt-1">{social.handle}</p>
                </div>

              </a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-background border border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl mb-6 text-center">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm text-muted-foreground">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-muted-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm text-muted-foreground">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                rows={6}
                required
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
