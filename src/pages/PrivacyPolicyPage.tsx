import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Privacy Policy - PrimXP | Data Protection & Privacy',
      description: 'Learn how PrimXP protects your personal information and data. Our comprehensive privacy policy outlines our commitment to your privacy.',
      keywords: 'privacy policy, data protection, personal information, GDPR compliance',
      url: 'https://www.primxp.com/privacy-policy'
    });
  }, []);

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
              <Shield className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-600 mb-0">
                <strong>Last updated:</strong> December 22, 2024
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center mb-6">
                  <Eye className="w-6 h-6 text-[#e1b382] mr-3" />
                  <h2 className="text-3xl font-bold text-[#2d545e] mb-0">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fill out contact forms or request quotes</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Attend our events or use our services</li>
                    <li>Communicate with us via phone, email, or other channels</li>
                  </ul>
                  <p>This information may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Company information and job title</li>
                    <li>Event requirements and preferences</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <UserCheck className="w-6 h-6 text-[#e1b382] mr-3" />
                  <h2 className="text-3xl font-bold text-[#2d545e] mb-0">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our event management services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and marketing communications</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Plan and execute events according to your specifications</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Lock className="w-6 h-6 text-[#e1b382] mr-3" />
                  <h2 className="text-3xl font-bold text-[#2d545e] mb-0">Information Sharing</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist in operating our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                  <p>All third-party service providers are contractually obligated to keep your information confidential.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Data Security</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure hosting and data storage solutions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Your Rights</h2>
                <div className="space-y-4 text-gray-700">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Rectify inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict processing of your information</li>
                    <li>Withdraw consent at any time</li>
                    <li>Data portability where applicable</li>
                  </ul>
                  <p>To exercise these rights, please contact us at <a href="mailto:pawan@primxp.com" className="text-[#e1b382] hover:text-[#c89666]">pawan@primxp.com</a>.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies and similar tracking technologies to enhance your experience on our website. These help us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve our website functionality</li>
                    <li>Provide personalized content and advertisements</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Data Retention</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Factors affecting retention periods include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The nature of our relationship with you</li>
                    <li>Legal and regulatory requirements</li>
                    <li>The need to resolve disputes or enforce agreements</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Changes to This Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Contact Us</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p><strong>PrimXP</strong></p>
                    <p>F-56, G.Floor, K.No-890<br />
                    Village Fatehpur Beri<br />
                    New Delhi 110074, India</p>
                    <p>Email: <a href="mailto:pawan@primxp.com" className="text-[#e1b382] hover:text-[#c89666]">pawan@primxp.com</a></p>
                    <p>Phone: <a href="tel:+919599318090" className="text-[#e1b382] hover:text-[#c89666]">+91 95993 18090</a></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;