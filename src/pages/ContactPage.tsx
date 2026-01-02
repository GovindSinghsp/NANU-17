import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, Building2, MessageSquare } from 'lucide-react';
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to create something extraordinary? Let's discuss your vision and bring it to life together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e1b382]/20 p-3 rounded-lg">
                    <MapPin className="text-[#e1b382] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d545e] mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      F-56, G.Floor, K.No-890,<br />
                      Village Fatehpur Beri,<br />
                      New Delhi 110074<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#e1b382]/20 p-3 rounded-lg">
                    <Phone className="text-[#e1b382] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d545e] mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      +91 95993 18090<br />
                      +91 95993 18090
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#e1b382]/20 p-3 rounded-lg">
                    <Mail className="text-[#e1b382] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d545e] mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      pawan@primxp.com<br />
                      creatives@primxp.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#e1b382]/20 p-3 rounded-lg">
                    <Clock className="text-[#e1b382] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d545e] mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#e1b382]/10 to-[#c89666]/10 rounded-xl border border-[#e1b382]/20">
                <h3 className="font-semibold text-[#2d545e] mb-2">24/7 Event Support</h3>
                <p className="text-gray-600 text-sm mb-3">
                  For ongoing events and emergencies, our team is available around the clock.
                </p>
                <p className="text-[#e1b382] font-semibold">+91 95993 18090</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-8 text-[#2d545e]">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User size={16} className="inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all"
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building2 size={16} className="inline mr-2" />
                        Company Name
                      </label>
                      <input
                        {...register('company')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare size={16} className="inline mr-2" />
                      Subject
                    </label>
                    <select
                      {...register('subject')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="corporate-event">Corporate Event</option>
                      <option value="product-launch">Product Launch</option>
                      <option value="team-meeting">Team Meeting</option>
                      <option value="retail-branding">Retail Branding</option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare size={16} className="inline mr-2" />
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e1b382] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your event requirements, budget, timeline, and any specific needs..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#e1b382] to-[#c89666] text-white py-4 px-6 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="rounded-2xl overflow-hidden shadow-2xl"
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
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-[#e1b382] mr-2" />
                  <h3 className="font-bold text-[#2d545e]">PrimXP Office</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  F-56, G.Floor, K.No-890<br />
                  Village Fatehpur Beri<br />
                  New Delhi 110074
                </p>
                <a
                  href="https://maps.google.com/?q=Andheri+East+Mumbai+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#e1b382] hover:bg-[#c89666] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
