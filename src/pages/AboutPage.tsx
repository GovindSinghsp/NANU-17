import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Users, MapPin, Phone, Mail, Sparkles, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { TeamMember, InHouseService } from '../lib/supabase';
import { updatePageSEO } from '../utils/seo';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const { data: teamMembers, loading: teamLoading } = useSupabaseData<TeamMember>('team_members', {
    filter: { is_active: true },
    orderBy: 'display_order',
    ascending: true
  });

  const { data: inHouseServices, loading: servicesLoading } = useSupabaseData<InHouseService>('in_house_services', {
    filter: { is_active: true },
    orderBy: 'display_order',
    ascending: true
  });

  useEffect(() => {
    updatePageSEO({
      title: 'About Us - PrimXP | Our Story, Team & Capabilities',
      description: 'Learn about PrimXP\'s journey, meet our expert team, and discover our in-house capabilities including stage design, lighting, sound, printing, and corporate gifting.',
      keywords: 'about primxp, event management team, company story, in-house services, stage design, lighting, sound systems',
      url: 'https://www.primxp.com/about'
    });
  }, []);

  // Floating elements animation
  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 30,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
  }));

  return (
    <main className="pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-[#e1b382]/3 to-[#2d545e]/3 blur-2xl"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, 150, 0],
              y: [0, -150, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
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
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #e1b382 0%, transparent 50%), 
                radial-gradient(circle at 75% 75%, #e1b382 0%, transparent 50%),
                linear-gradient(45deg, transparent 40%, #e1b382 50%, transparent 60%)
              `,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
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
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
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
              About Us
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our journey, meet our passionate team, and explore the capabilities that make us leaders in event management
            </motion.p>

            {/* Floating icons */}
            {[Award, Target, Heart, Users, Zap, Star].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute text-[#e1b382]/20"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${25 + (i % 2) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.7,
                }}
              >
                <Icon size={20 + i * 3} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#e1b382]/8 to-[#2d545e]/8 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-[#2d545e]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Story
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Founded in 2025, PrimXP began with a simple vision: to create unforgettable experiences 
                that leave lasting impressions. What started as a small team of passionate event professionals 
                has grown into a leading event management company trusted by brands across the industry.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our journey has been marked by continuous innovation, unwavering commitment to excellence, 
                and a deep understanding of what makes events truly memorable. From intimate corporate 
                gatherings to large-scale product launches, we bring the same level of dedication and 
                creativity to every project.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: Award, title: 'Excellence', desc: 'Committed to delivering exceptional quality in every detail' },
                  { icon: Target, title: 'Innovation', desc: 'Constantly pushing boundaries with creative solutions' },
                  { icon: Heart, title: 'Passion', desc: 'Driven by genuine love for creating memorable experiences' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-[#e1b382]/10 to-[#c89666]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-[#e1b382]/20 group-hover:to-[#c89666]/20 transition-all duration-300 border border-[#e1b382]/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="text-[#e1b382] w-8 h-8" />
                    </motion.div>
                    <h3 className="font-bold text-[#2d545e] mb-2 group-hover:text-[#e1b382] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <motion.img
                  src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                  alt="Our team at work"
                  className="rounded-3xl shadow-2xl w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#e1b382] to-[#c89666] p-6 rounded-2xl text-white shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-2xl mb-2">7+ Years</h4>
                  <p className="text-sm">of Excellence in Event Management</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* In-House Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-[#e1b382]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 bg-[#2d545e]/5 rounded-full blur-3xl"
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 15,
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
              In-House Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive in-house services ensure complete control over quality and seamless execution
            </p>
          </motion.div>

          {servicesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i} 
                  className="bg-white p-8 rounded-3xl shadow-lg animate-pulse"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-6" />
                  <div className="w-3/4 h-6 bg-gray-200 rounded-full mb-4" />
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded-full" />
                    <div className="w-5/6 h-4 bg-gray-200 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inHouseServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-[#e1b382]/30 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#e1b382]/5 to-[#2d545e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="bg-gradient-to-br from-[#e1b382]/10 to-[#c89666]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#e1b382]/20 group-hover:to-[#c89666]/20 transition-all duration-500 border border-[#e1b382]/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="text-2xl">
                        {service.title.toLowerCase().includes('stage') ? '🎭' :
                         service.title.toLowerCase().includes('light') ? '💡' :
                         service.title.toLowerCase().includes('sound') ? '🎵' :
                         service.title.toLowerCase().includes('print') ? '🖨️' :
                         service.title.toLowerCase().includes('gift') ? '🎁' : '⚙️'}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-[#2d545e] group-hover:text-[#e1b382] transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    {service.capabilities && service.capabilities.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-[#2d545e] mb-3">Capabilities:</h4>
                        <ul className="space-y-2">
                          {service.capabilities.map((capability, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-center text-sm text-gray-600"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-[#e1b382] rounded-full mr-3 flex-shrink-0" />
                              {capability}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d545e]">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind every successful event
            </p>
          </motion.div>

          {teamLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i} 
                  className="text-center animate-pulse"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6" />
                  <div className="w-32 h-6 bg-gray-200 rounded-full mx-auto mb-2" />
                  <div className="w-24 h-4 bg-gray-200 rounded-full mx-auto mb-4" />
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded-full" />
                    <div className="w-5/6 h-4 bg-gray-200 rounded-full mx-auto" />
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-6 inline-block">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.image_url || 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'}
                        alt={member.name}
                        className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#e1b382]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#2d545e] group-hover:text-[#e1b382] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#e1b382] font-medium mb-4">
                    {member.position}
                  </p>
                  {member.bio && (
                    <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                      {member.bio}
                    </p>
                  )}
                  
                  {(member.email || member.linkedin_url) && (
                    <div className="flex justify-center space-x-4 mt-6">
                      {member.email && (
                        <motion.a 
                          href={`mailto:${member.email}`} 
                          className="text-gray-400 hover:text-[#e1b382] transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <Mail size={20} />
                        </motion.a>
                      )}
                      {member.linkedin_url && (
                        <motion.a 
                          href={member.linkedin_url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-400 hover:text-[#e1b382] transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <div className="w-5 h-5 bg-current rounded" />
                        </motion.a>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d545e] to-[#12343b] text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/80 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's discuss how we can bring your vision to life with our expertise and passion for excellence
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: MapPin, title: 'Visit Us', content: 'F-56, G.Floor, K.No-890,\nVillage Fatehpur Beri,\nND-74. India' },
                { icon: Phone, title: 'Call Us', content: '+91 98765 43210' },
                { icon: Mail, title: 'Email Us', content: 'pawan@primxp.com' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div 
                    className="bg-[#e1b382]/20 p-4 rounded-2xl mb-4 group-hover:bg-[#e1b382]/30 transition-all duration-300 border border-[#e1b382]/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <contact.icon className="w-8 h-8 text-[#e1b382]" />
                  </motion.div>
                  <h3 className="font-bold mb-2 group-hover:text-[#e1b382] transition-colors">{contact.title}</h3>
                  <p className="text-white/80 text-center whitespace-pre-line">
                    {contact.content}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-[#e1b382] to-[#c89666] hover:from-[#c89666] hover:to-[#b8855a] text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;