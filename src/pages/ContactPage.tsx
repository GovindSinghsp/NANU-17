import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, Building2, MessageSquare, Sparkles, Star, Zap } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { supabase, ContactSubmission } from '../lib/supabase';
import { updatePageSEO } from '../utils/seo';

const ContactPage: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactSubmission>();

  useEffect(() => {
    updatePageSEO({
      title: 'Contact Us - PrimXP | Get In Touch for Your Next Event',
      description: 'Contact PrimXP for your event management needs. Located in Mumbai, we serve clients across India with corporate events, product launches, and brand experiences.',
      keywords: 'contact primxp, event management contact, mumbai events, corporate event planning contact',
      url: 'https://www.primxp.com/contact'
    });
  }, []);

  const onSubmit = async (data: ContactSubmission) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);

      if (error) {
        throw error;
      }

      alert('Thank you for your message! We will get back to you within 24 hours.');
      reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error sending your message. Please try again or call us directly.');
    }
  };

  // Floating elements animation
  const floatingElements = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 70 + 25,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 12,
  }));

  return (
    <main className="pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-[#e1b382]/4 to-[#2d545e]/4 blur-2xl"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, 120, 0],
              y: [0, -120, 0],
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
        <div className="absolute inset-0 opacity-15">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 40%, #e1b382 0%, transparent 50%), 
                radial-gradient(circle at 70% 60%, #e1b382 0%, transparent 50%),
                linear-gradient(135deg, transparent 30%, #e1b382 50%, transparent 70%)
              `,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              rotate: [0, 360],
            }}
            transition={{
              duration: 40,
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
              <Mail className="w-12 h-12 text-[#e1b382]" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#e1b382] to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to create something extraordinary? Let's discuss your vision and bring it to life together.
            </motion.p>

            {/* Floating icons */}
            {[Phone, Mail, MapPin, Clock, Sparkles, Star].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute text-[#e1b382]/20"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + (i % 2) * 30}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.2, 0.7, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              >
                <Icon size={18 + i * 2} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#e1b382]/6 to-[#2d545e]/6 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#2d545e]/6 to-[#e1b382]/6 rounded-full blur-3xl"
            animate={{
              scale: [1.4, 1, 1.4],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-bold mb-8 text-[#2d545e]">Get in Touch</h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: 'Our Office',
                    content: 'F-56, G.Floor, K.No-890,\nVillage Fatehpur Beri,\nNew Delhi 110074\nIndia'
                  },
                  {
                    icon: Phone,
                    title: 'Call Us',
                    content: '+91 95993 18090\n+91 95993 18090'
                  },
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: 'pawan@primxp.com\ncreatives@primxp.com'
                  },
                  {
                    icon: Clock,
                    title: 'Business Hours',
                    content: 'Monday - Friday: 9:00 AM - 7:00 PM\nSaturday: 10:00 AM - 5:00 PM\nSunday: Closed'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-[#e1b382]/20 to-[#c89666]/20 p-3 rounded-xl group-hover:from-[#e1b382]/30 group-hover:to-[#c89666]/30 transition-all duration-300 border border-[#e1b382]/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <contact.icon className="text-[#e1b382] w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-[#2d545e] mb-2 group-hover:text-[#e1b382] transition-colors">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {contact.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-r from-[#e1b382]/10 to-[#c89666]/10 rounded-2xl border border-[#e1b382]/20 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#e1b382]/5 to-[#c89666]/5" />
                <div className="relative z-10">
                  <h3 className="font-semibold text-[#2d545e] mb-2 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-[#e1b382]" />
                    24/7 Event Support
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    For ongoing events and emergencies, our team is available around the clock.
                  </p>
                  <p className="text-[#e1b382] font-semibold">+91 95993 18090</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e1b382]/2 to-[#2d545e]/2 opacity-50" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8 text-[#2d545e]">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User size={16} className="inline mr-2" />
                          Full Name *
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all duration-300 hover:border-[#e1b382]/50"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail size={16} className="inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email address'
                            }
                          })}
                          type="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all duration-300 hover:border-[#e1b382]/50"
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone size={16} className="inline mr-2" />
                          Phone Number
                        </label>
                        <input
                          {...register('phone', {
                            pattern: {
                              value: /^[+]?[1-9][\d\s\-()]{7,15}$/,
                              message: 'Please enter a valid phone number'
                            }
                          })}
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all duration-300 hover:border-[#e1b382]/50"
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Building2 size={16} className="inline mr-2" />
                          Company Name
                        </label>
                        <input
                          {...register('company')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all duration-300 hover:border-[#e1b382]/50"
                          placeholder="Enter your company name"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare size={16} className="inline mr-2" />
                        Subject
                      </label>
                      <select
                        {...register('subject')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all duration-300 hover:border-[#e1b382]/50"
                      >
                        <option value="">Select a subject</option>
                        <option value="corporate-event">Corporate Event</option>
                        <option value="product-launch">Product Launch</option>
                        <option value="team-meeting">Team Meeting</option>
                        <option value="retail-branding">Retail Branding</option>
                        <option value="consultation">General Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare size={16} className="inline mr-2" />
                        Message *
                      </label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all duration-300 resize-none hover:border-[#e1b382]/50"
                        placeholder="Tell us about your event requirements, budget, timeline, and any specific needs..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white py-4 px-6 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      ) : (
                        <>
                          <Send size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-[#e1b382]/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-[#2d545e]/5 rounded-full blur-2xl"
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2d545e]">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Mumbai's business district, we're easily accessible and ready to meet with you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Google Maps Embed */}
            <div className="w-full h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8658087757!2d72.8526315!3d19.1197592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29d7f0b0c5c8e!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PrimXP Office Location - Fathepur Beri, New Delhi"
                className="w-full h-full"
              />
              
              {/* Overlay with company info */}
              <motion.div 
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-[#e1b382] mr-2" />
                  <h3 className="font-bold text-[#2d545e]">PrimXP Office</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  F-56, G.Floor, K.No-890<br />
                  Village Fatehpur Beri<br />
                  New Delhi 110074
                </p>
                <motion.a
                  href="https://maps.google.com/?q=Andheri+East+Mumbai+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#e1b382] to-[#c89666] hover:from-[#c89666] hover:to-[#b8855a] text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;