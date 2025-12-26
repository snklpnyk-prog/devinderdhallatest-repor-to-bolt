import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "./AppointmentDialog";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-tight text-secondary">
              Bhameshwari
            </span>
            <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium">
              Counselling Centre
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-secondary font-bold" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+918923301425"
            className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 89233 01425
          </a>
          <AppointmentDialog>
            <Button className="rounded-full px-6 shadow-lg shadow-primary/20 bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-all">
              Book Appointment
            </Button>
          </AppointmentDialog>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl lg:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium py-2 border-b border-gray-100 ${
                location === link.href ? "text-primary" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-4">
            <a
              href="tel:+918923301425"
              className="flex items-center gap-2 text-secondary font-medium"
            >
              <Phone className="w-4 h-4" /> +91 89233 01425
            </a>
            <AppointmentDialog>
              <Button className="w-full rounded-full bg-secondary">
                Book Appointment
              </Button>
            </AppointmentDialog>
          </div>
        </div>
      )}
    </header>
  );
}
