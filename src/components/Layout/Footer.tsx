import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d545e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Prime</span>
              <span className="text-[#e1b382]">Events</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating unforgettable experiences through premium event management and brand experiences that leave lasting impressions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61585759401168"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#e1b382] transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://x.com/EventsPrim64662"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#e1b382] transition-colors"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://www.instagram.com/prim_xp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#e1b382] transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/prime-events-8520113a3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#e1b382] transition-colors"
              >
                <LinkedIn size={20} />
              </a>

            </div>
          </div>
    
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e1b382]">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Services
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Gallery
              </Link>
              <Link to="/projects" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                All Projects
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e1b382]">Our Services</h3>
            <nav className="space-y-2">
              <Link to="/services/corporate-events" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Corporate Events
              </Link>
              <Link to="/services/team-meetings" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Team Meetings
              </Link>
              <Link to="/services/product-launches" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Product Launches
              </Link>
              <Link to="/services/retail-branding" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Retail Branding
              </Link>
              <Link to="/services/event-production" className="block text-gray-300 hover:text-[#e1b382] transition-colors">
                Event Production
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#e1b382]">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#e1b382] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  F-56, G.Floor, K.No-890,<br />
                  Village Fatehpur Beri,<br />
                  New Delhi 110074<br />
                  India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#e1b382]" />
                <span className="text-gray-300">+91 95993 18090</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#e1b382]" />
                <span className="text-gray-300">Pawan@primxp.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} PrimeEvents. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-[#e1b382] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;