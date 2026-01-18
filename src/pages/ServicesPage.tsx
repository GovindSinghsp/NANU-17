import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Building2, Users, Rocket, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { Service } from '../lib/supabase';
import { updatePageSEO } from '../utils/seo';
import QuickContactModal from '../components/Modals/QuickContactModal';

const iconMap = {
  Building2,
  Users,
  Rocket,
  ShoppingBag,
};

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [isQuickContactOpen, setIsQuickContactOpen] = useState(false);
  const { data: services, loading } = useSupabaseData<Service>('services', {
    orderBy: 'display_order',
    ascending: true
  });

  useEffect(() => {
    updatePageSEO({
      title: 'Our Services - PrimXP | Corporate Events, Product Launches & More',
      description: 'Comprehensive event management services including corporate events, team meetings, product launches, and retail branding. Professional execution for memorable experiences.',
      keywords: 'corporate events, team meetings, product launch, retail branding, event management services, workshop facilitation',
      url: 'https://www.primxp.com/services'
    });
  }, []);

  // Floating elements animation
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <main className="pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-[#e1b382]/5 to-[#2d545e]/5 blur-xl"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d545e] via-[#1a3d47] to-[#12343b] text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #e1b382 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, #e1b382 0%, transparent 50%), 
                               radial-gradient(circle at 40% 80%, #e1b382 0%, transparent 50%)`,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-[#e1b382]/20 to-[#c89666]/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-[#e1b382]/30"
            >
              <Sparkles className="w-12 h-12 text-[#e1b382]" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#e1b382] to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From intimate corporate gatherings to large-scale product launches, 
              we deliver exceptional events that leave lasting impressions
            </motion.p>

            {/* Floating stars */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-[#e1b382]/30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Star size={16 + i * 2} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#e1b382]/10 to-[#2d545e]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2d545e]/10 to-[#e1b382]/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  className="animate-pulse"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl mb-6" />
                  <div className="space-y-3">
                    <div className="w-3/4 h-6 bg-gray-200 rounded-full" />
                    <div className="w-full h-4 bg-gray-200 rounded-full" />
                    <div className="w-5/6 h-4 bg-gray-200 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const IconComponent = service.icon ? iconMap[service.icon as keyof typeof iconMap] : Building2;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative overflow-hidden border border-gray-100">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#e1b382]/5 to-[#2d545e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#e1b382] via-[#2d545e] to-[#e1b382] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                           style={{ padding: '2px' }}>
                        <div className="w-full h-full bg-white rounded-3xl" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <motion.div 
                            className="bg-gradient-to-br from-[#e1b382]/20 to-[#c89666]/20 p-4 rounded-2xl mr-4 group-hover:from-[#e1b382]/30 group-hover:to-[#c89666]/30 transition-all duration-500 border border-[#e1b382]/20"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconComponent className="w-8 h-8 text-[#e1b382]" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#2d545e] group-hover:text-[#e1b382] transition-colors duration-500">
                              {service.title}
                            </h3>
                            {service.category && (
                              <motion.span 
                                className="inline-block bg-gradient-to-r from-[#e1b382]/10 to-[#c89666]/10 text-[#e1b382] px-3 py-1 rounded-full text-sm font-medium mt-2 capitalize border border-[#e1b382]/20"
                                whileHover={{ scale: 1.05 }}
                              >
                                {service.category}
                              </motion.span>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-lg">
                          {service.description}
                        </p>

                        {service.features && service.features.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-[#2d545e] mb-3 text-lg">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <motion.li 
                                  key={idx} 
                                  className="flex items-center text-gray-600"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                                >
                                  <CheckCircle className="w-5 h-5 text-[#e1b382] mr-3 flex-shrink-0" />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <motion.button 
                            onClick={() => navigate('/gallery')}
                            className="text-[#e1b382] hover:text-[#c89666] font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>Learn More</span>
                            <ArrowRight size={18} />
                          </motion.button>
                          <motion.button 
                            onClick={() => setIsQuickContactOpen(true)}
                            className="bg-gradient-to-r from-[#2d545e] to-[#1a3d47] hover:from-[#1a3d47] hover:to-[#12343b] text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Get Quote
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-[#e1b382]/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 h-40 bg-[#2d545e]/5 rounded-full blur-2xl"
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d545e]">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final execution, we ensure every detail is perfectly orchestrated
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We understand your vision, requirements, and objectives to create a tailored solution.',
                icon: '🎯'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed planning and timeline creation with regular checkpoints and approvals.',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Professional implementation with on-site coordination and real-time management.',
                icon: '⚡'
              },
              {
                step: '04',
                title: 'Follow-up',
                description: 'Post-event analysis and feedback collection to ensure continuous improvement.',
                icon: '📈'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-[#e1b382]/30">
                  <motion.div 
                    className="bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {process.step}
                  </motion.div>
                  
                  <div className="text-4xl mb-4">{process.icon}</div>
                  
                  <h3 className="text-xl font-bold mb-4 text-[#2d545e] group-hover:text-[#e1b382] transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {index < 3 && (
                  <motion.div 
                    className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-[#e1b382] to-[#c89666] z-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e1b382] via-[#d4a574] to-[#c89666] text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Create Something Extraordinary?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's discuss your event requirements and create an unforgettable experience together
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                onClick={() => setIsQuickContactOpen(true)}
                className="bg-white text-[#e1b382] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
              <motion.button 
                onClick={() => navigate('/gallery')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Modal */}
      <QuickContactModal 
        isOpen={isQuickContactOpen} 
        onClose={() => setIsQuickContactOpen(false)} 
      />
    </main>
  );
};

export default ServicesPage;