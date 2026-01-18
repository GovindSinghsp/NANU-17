import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Map, Home, Info, Briefcase, Camera, Phone, FileText, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { updatePageSEO } from '../utils/seo';

const SitemapPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Sitemap - PrimXP | Website Navigation Map',
      description: 'Navigate through all pages of PrimXP website. Find all our services, information, and resources easily.',
      keywords: 'sitemap, website navigation, site map, page directory',
      url: 'https://www.primxp.com/sitemap'
    });
  }, []);

  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to PrimXP - Premium event management services' },
        { name: 'About Us', path: '/about', description: 'Learn about our company, team, and capabilities' },
        { name: 'Services', path: '/services', description: 'Overview of all our event management services' },
        { name: 'Gallery', path: '/gallery', description: 'Portfolio of our successful events and projects' },
        { name: 'All Projects', path: '/projects', description: 'Complete list of all our projects' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us for your event needs' }
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      pages: [
        { name: 'Corporate Events', path: '/services/corporate-events', description: 'Professional corporate event management' },
        { name: 'Team Meetings', path: '/services/team-meetings', description: 'Team building and workshop facilitation' },
        { name: 'Product Launches', path: '/services/product-launches', description: 'Impactful product launch events' },
        { name: 'Retail Branding', path: '/services/retail-branding', description: 'Brand activation and retail experiences' },
        { name: 'Event Production', path: '/services/event-production', description: 'Complete event production services' }
      ]
    },
    {
      title: 'Legal & Information',
      icon: FileText,
      pages: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'How we protect your personal information' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions for using our services' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete website navigation map' }
      ]
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d545e] to-[#12343b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-[#e1b382]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Map className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Navigate through all pages of our website and find exactly what you're looking for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {siteStructure.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center mb-8">
                  <div className="bg-[#e1b382]/20 p-3 rounded-lg mr-4">
                    <section.icon className="w-6 h-6 text-[#e1b382]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#2d545e]">{section.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <motion.div
                      key={page.path}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: pageIndex * 0.05 }}
                    >
                      <Link
                        to={page.path}
                        className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                      >
                        <h3 className="text-xl font-bold text-[#2d545e] mb-3 group-hover:text-[#e1b382] transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {page.description}
                        </p>
                        <div className="mt-4 text-[#e1b382] font-medium text-sm">
                          {page.path}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 bg-gradient-to-r from-[#2d545e] to-[#12343b] rounded-2xl text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Quick Actions</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#e1b382] hover:bg-[#c89666] text-white px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Contact Us</span>
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Briefcase size={20} />
                <span>View Services</span>
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Camera size={20} />
                <span>View Portfolio</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SitemapPage;