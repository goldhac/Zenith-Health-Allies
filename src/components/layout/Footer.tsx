import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const footerLinks = {
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
  ],
  services: [
    { name: 'Nursing Services', path: '/nursing' },
    { name: 'Training Classes', path: '/training' },
    { name: 'Healthcare Staffing', path: '/staffing' },
    { name: 'Resources', path: '/resources' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="Zenith Health Allies"
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <div>
                <span className="font-serif text-lg md:text-xl text-background">Zenith Health Allies</span>
                <p className="text-xs text-background/60">Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Dedicated to crafting a heritage of health excellence. Through compassionate care,
              specialized training, and strategic staffing solutions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6 text-background">Site Navigation</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6 text-background">Our Services</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-base md:text-lg mb-4 md:mb-6 text-background">Contact Information</h4>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a href="tel:240-278-1871" className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm">(240) 278-1871</span>
                </a>
              </li>
              <li>
                <a href="tel:240-610-1390" className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm">(240) 610-1390</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@moheritagecares.com" className="flex items-start gap-3 text-background/70 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm break-all">hello@moheritagecares.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-sm">10005 Columbia Rd, suite L-261 Maryland, 21046</span>
                </div>
              </li>
            </ul>
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-background/5 rounded-xl">
              <p className="text-xs md:text-sm text-background/60">Service Areas</p>
              <p className="text-accent font-medium text-sm md:text-base">All Areas in MD</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-background/60">
            <p className="text-center md:text-left">© Copyright 2024 - 2025 Zenith Health Allies</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Notice</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
