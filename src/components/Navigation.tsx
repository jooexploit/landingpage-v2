
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Animate on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#productivity", label: "Tools" },
    { href: "#timeline", label: "Timeline" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`flex items-center space-x-3 transform transition-all duration-500 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <div className="relative group">
                <img 
                  src="landingpage-v2/icon.png" 
                  alt="T.S Helper Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 hover:scale-110 hover:rotate-12 drop-shadow-lg hover:drop-shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:to-primary transition-all duration-300">
                T.S Helper
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Social Media Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-accent rounded-lg transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`w-9 h-9 p-0 hover:scale-110 transition-all duration-300 transform ${
                  isVisible ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                {isDark ? (
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                ) : (
                  <Moon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                )}
              </Button>
              
              <Button 
                variant="ghost" 
                className={`hidden sm:inline-flex hover:scale-105 transition-all duration-300 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                Log In
              </Button>
              
              <Button 
                className={`bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className={`lg:hidden w-9 h-9 p-0 hover:scale-110 transition-all duration-300 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`flex flex-col items-center justify-center h-full space-y-8 transform transition-all duration-500 ${
          isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 transform ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Social Media Links */}
          <div className="flex items-center space-x-6 pt-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-125 hover:bg-accent rounded-lg transform ${
                    isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 50}ms` }}
                  aria-label={social.label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Mobile Action Buttons */}
          <div className={`flex flex-col items-center space-y-4 pt-8 transform transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <Button 
              variant="ghost" 
              size="lg"
              className="w-40 hover:scale-105 transition-all duration-300"
            >
              Log In
            </Button>
            <Button 
              size="lg"
              className="w-40 bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
