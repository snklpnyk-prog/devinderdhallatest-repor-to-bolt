import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-heading font-bold text-xl">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">Bhameshwari</span>
                <span className="text-[10px] tracking-widest uppercase text-white/60 font-medium">
                  Counselling Centre
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Dedicated to enhancing mental well-being and empowering families through professional,
              ethical, and compassionate psychological services.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {['Home', 'About Us', 'Services', 'Our Team', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-primary transition-colors cursor-pointer">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Individual Counselling</li>
              <li>Couple Therapy</li>
              <li>Child Psychology</li>
              <li>Career Guidance</li>
              <li>Stress Management</li>
              <li>Addiction Recovery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Yamuna Vihar 102, Near THDC Colony, Dehrakhas, Patel Nagar, Dehradun</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918923301425" className="hover:text-white transition-colors">
                  +91 89233 01425
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:helpdesk.drdhalla@gmail.com" className="hover:text-white transition-colors">
                  helpdesk.drdhalla@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Bhameshwari Counselling Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
