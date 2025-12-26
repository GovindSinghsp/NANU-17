import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Users, MapPin, Phone, Mail } from 'lucide-react';
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

  return (
    <main className="pt-24">
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d545e]">
                Our Story
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2025, PrimXP began with a simple vision: to create unforgettable experiences 
                that leave lasting impressions. What started as a small team of passionate event professionals 
                has grown into a leading event management company trusted by brands across the industry.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey has been marked by continuous innovation, unwavering commitment to excellence, 
                and a deep understanding of what makes events truly memorable. From intimate corporate 
                gatherings to large-scale product launches, we bring the same level of dedication and 
                creativity to every project.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#e1b382]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-[#e1b382] w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#2d545e] mb-2">Excellence</h3>
                  <p className="text-gray-600 text-sm">Committed to delivering exceptional quality in every detail</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#e1b382]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-[#e1b382] w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#2d545e] mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">Constantly pushing boundaries with creative solutions</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#e1b382]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-[#e1b382] w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#2d545e] mb-2">Passion</h3>
                  <p className="text-gray-600 text-sm">Driven by genuine love for creating memorable experiences</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg"
                alt="Our team at work"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#e1b382] p-6 rounded-xl text-white">
                <h4 className="font-bold text-2xl mb-2">7+ Years</h4>
                <p className="text-sm">of Excellence in Event Management</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* In-House Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg animate-pulse">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-6" />
                  <div className="w-3/4 h-6 bg-gray-200 rounded mb-4" />
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded" />
                    <div className="w-5/6 h-4 bg-gray-200 rounded" />
                  </div>
                </div>
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
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="bg-[#e1b382]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#e1b382]/20 transition-colors">
                    <img
                      src={`https://images.pexels.com/photos/${
                        service.title.toLowerCase().includes('stage') ? '1190298' :
                        service.title.toLowerCase().includes('light') ? '2747449' :
                        service.title.toLowerCase().includes('sound') ? '1708936' :
                        service.title.toLowerCase().includes('print') ? '2608517' :
                        service.title.toLowerCase().includes('gift') ? '1395967' :
                        '2833037'
                      }/pexels-photo-${
                        service.title.toLowerCase().includes('stage') ? '1190298' :
                        service.title.toLowerCase().includes('light') ? '2747449' :
                        service.title.toLowerCase().includes('sound') ? '1708936' :
                        service.title.toLowerCase().includes('print') ? '2608517' :
                        service.title.toLowerCase().includes('gift') ? '1395967' :
                        '2833037'
                      }.jpeg`}
                      alt={service.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#2d545e] group-hover:text-[#e1b382] transition-colors">
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
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-[#e1b382] rounded-full mr-3 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div key={i} className="text-center animate-pulse">
                  <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6" />
                  <div className="w-32 h-6 bg-gray-200 rounded mx-auto mb-2" />
                  <div className="w-24 h-4 bg-gray-200 rounded mx-auto mb-4" />
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded" />
                    <div className="w-5/6 h-4 bg-gray-200 rounded mx-auto" />
                  </div>
                </div>
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
                    <img
                      src={member.image_url || 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                    />
                    <div className="absolute inset-0 bg-[#e1b382]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#2d545e] group-hover:text-[#e1b382] transition-colors">
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
                        <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-[#e1b382] transition-colors">
                          <Mail size={20} />
                        </a>
                      )}
                      {member.linkedin_url && (
                        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e1b382] transition-colors">
                          {/* LinkedIn icon placeholder */}
                          <div className="w-5 h-5 bg-current rounded" />
                        </a>
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
      <section className="py-20 bg-gradient-to-br from-[#2d545e] to-[#12343b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and passion for excellence
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="bg-[#e1b382]/20 p-4 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-[#e1b382]" />
                </div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-white/80 text-center">
                  F-56, G.Floor, K.No-890,<br />
                  Village Fatehpur Beri,<br />
                  ND-74. India 
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-[#e1b382]/20 p-4 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-[#e1b382]" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-white/80">+91 98765 43210</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-[#e1b382]/20 p-4 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-[#e1b382]" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-white/80">pawan@primxp.com</p> 
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#e1b382] hover:bg-[#c89666] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;