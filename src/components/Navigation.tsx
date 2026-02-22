import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../context/LanguageContext";

export function Navigation() {
  const { language, toggleLanguage } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems =
    language === "en"
      ? [
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Projects", href: "#projects" },
          { name: "Experience", href: "#experience" },
          { name: "Publications", href: "#publications" },
          { name: "Contact", href: "#contact" },
        ]
      : [
          { name: "نبذة", href: "#about" },
          { name: "المهارات", href: "#skills" },
          { name: "المشاريع", href: "#projects" },
          { name: "الخبرات", href: "#experience" },
          { name: "الأبحاث", href: "#publications" },
          { name: "تواصل", href: "#contact" },
        ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-mono group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-primary group-hover:text-accent transition-colors">
              {"<"}
            </span>
            <span className="group-hover:text-primary transition-colors">
              AGEIB
            </span>
            <span className="text-primary group-hover:text-accent transition-colors">
              {"/>"}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-primary">
                  {language === "en"
                    ? `0${index + 1}.`
                    : `٠${index + 1}.`}
                </span>{" "}
                <span className="group-hover:underline underline-offset-4">
                  {item.name}
                </span>
              </a>
            ))}

            {/* 🌍 Language Toggle (Desktop) */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-primary/30"
            >
              {language === "en" ? "AR" : "EN"}
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">

            {/* 🌍 Language Toggle (Mobile - OUTSIDE hamburger) */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-primary/30"
            >
              {language === "en" ? "AR" : "EN"}
            </Button>

            {/* Hamburger */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary">
                    {language === "en"
                      ? `0${index + 1}.`
                      : `٠${index + 1}.`}
                  </span>{" "}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
