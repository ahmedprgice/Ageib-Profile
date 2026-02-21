import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useLanguage } from "../context/LanguageContext";

import emailjs from "@emailjs/browser";

export function Contact() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.success(
      language === "en"
        ? "Message sent successfully!"
        : "تم إرسال الرسالة بنجاح!"
    );

    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    toast.error(
      language === "en"
        ? "Something went wrong. Try again."
        : "حدث خطأ، حاول مرة أخرى."
    );
  }
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success(
      language === "en"
        ? "Message sent! I'll get back to you soon."
        : "تم إرسال الرسالة بنجاح! سأقوم بالرد عليك قريباً."
    );

    setFormData({ name: "", email: "", message: "" });
  };


  const socialLinks =
    language === "en"
      ? [
          {
            name: "Email",
            icon: Mail,
            url: "mailto:ahmedageibemail01@gmail.com",
            handle: "ahmedageibemail01@gmail.com",
          },
          {
            name: "GitHub",
            icon: Github,
            url: "https://github.com/ahmedprgice",
            handle: "@ahmedprgice",
          },
          {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/ahmed-ageib/",
            handle: "/in/Ahmed Ageib",
          },
        ]
      : [
          {
            name: "البريد الإلكتروني",
            icon: Mail,
            url: "mailto:ahmedageibemail01@gmail.com",
            handle: "ahmedageibemail01@gmail.com",
          },
          {
            name: "جيت هاب",
            icon: Github,
            url: "https://github.com/ahmedprgice",
            handle: "@ahmedprgice",
          },
          {
            name: "لينكدإن",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/ahmed-ageib/",
            handle: "/in/Ahmed Ageib",
          },
        ];

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-mono tracking-wide leading-tight">
              <span className="text-primary">
                {language === "en" ? "06." : "٠٦."}
              </span>{" "}
              <span className="text-foreground">
                {language === "en" ? "Get In Touch" : "تواصل معي"}
              </span>
            </h2>

            <div className="mt-4 mb-6 h-px w-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
        </div>

        {/* Intro Text */}
        <div className="text-center mb-12">
          <p className="text-xl text-foreground/80 mb-4">
            {language === "en"
              ? "I'm currently open to new opportunities and interesting projects."
              : "أنا منفتح حالياً لفرص جديدة ومشاريع مميزة."}
          </p>

          <p className="text-lg text-muted-foreground">
            {language === "en"
              ? "Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!"
              : "سواء كان لديك سؤال، ترغب في التعاون، أو فقط تريد إلقاء التحية، لا تتردد في التواصل!"}
          </p>
        </div>

        {/* Social Links */}
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
                  <p className="font-mono text-sm text-muted-foreground">
                    {social.name}
                  </p>
                  <p className="text-xs text-foreground/60 mt-1">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-background border border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl mb-6 text-center">
            {language === "en" ? "Send a Message" : "إرسال رسالة"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm text-muted-foreground">
                {language === "en" ? "Name" : "الاسم"}
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={
                  language === "en" ? "Your name" : "اكتب اسمك"
                }
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-muted-foreground">
                {language === "en" ? "Email" : "البريد الإلكتروني"}
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={
                  language === "en"
                    ? "your.email@example.com"
                    : "example@email.com"
                }
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm text-muted-foreground">
                {language === "en" ? "Message" : "الرسالة"}
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={
                  language === "en"
                    ? "Your message..."
                    : "اكتب رسالتك هنا..."
                }
                rows={6}
                required
              />
            </div>

            {/* Button */}
            <Button type="submit" size="lg" className="w-full group">
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              {language === "en" ? "Send Message" : "إرسال الرسالة"}
            </Button>

          </form>
        </div>
      </div>
    </section>
  );
}
