import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';

const TermsOfServicePage: React.FC = () => {
  useEffect(() => {
    updatePageSEO({
      title: 'Terms of Service - PrimXP | Service Terms & Conditions',
      description: 'Read our terms of service to understand the conditions for using PrimXP event management services and website.',
      keywords: 'terms of service, terms and conditions, service agreement, legal terms',
      url: 'https://www.primxp.com/terms-of-service'
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
              <FileText className="w-10 h-10 text-[#e1b382]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services or website.
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
                  <CheckCircle className="w-6 h-6 text-[#e1b382] mr-3" />
                  <h2 className="text-3xl font-bold text-[#2d545e] mb-0">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>By accessing and using PrimXP's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                  <p>These terms apply to all visitors, users, and others who access or use our services.</p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Scale className="w-6 h-6 text-[#e1b382] mr-3" />
                  <h2 className="text-3xl font-bold text-[#2d545e] mb-0">Service Description</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>PrimXP provides professional event management services including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Corporate event planning and execution</li>
                    <li>Team meetings and workshop facilitation</li>
                    <li>Product launch events</li>
                    <li>Retail branding and activation</li>
                    <li>Event production services</li>
                    <li>Related consulting and advisory services</li>
                  </ul>
                  <p>All services are subject to availability and our professional standards.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Client Responsibilities</h2>
                <div className="space-y-4 text-gray-700">
                  <p>As our client, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information about your event requirements</li>
                    <li>Make timely payments according to agreed terms</li>
                    <li>Obtain necessary permits and approvals for your event</li>
                    <li>Comply with venue rules and regulations</li>
                    <li>Provide reasonable access to venues and facilities</li>
                    <li>Communicate changes or concerns promptly</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Payment Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Payment terms are as follows:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>A deposit is required to secure services and dates</li>
                    <li>Payment schedules will be outlined in individual service agreements</li>
                    <li>Final payment is due before event commencement unless otherwise agreed</li>
                    <li>Late payments may incur additional charges</li>
                    <li>All prices are subject to applicable taxes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Cancellation Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Cancellation terms vary by service type and timing:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cancellations more than 30 days before the event: 50% refund of deposit</li>
                    <li>Cancellations 15-30 days before: 25% refund of deposit</li>
                    <li>Cancellations less than 15 days before: No refund</li>
                    <li>Force majeure events will be handled on a case-by-case basis</li>
                  </ul>
                  <p>Specific cancellation terms will be detailed in individual service agreements.</p>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-[#e1b382] mr-3" />
                  <h2 className="text-3xl font-bold text-[#2d545e] mb-0">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>PrimXP's liability is limited as follows:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our total liability shall not exceed the total amount paid for services</li>
                    <li>We are not liable for indirect, consequential, or punitive damages</li>
                    <li>We are not responsible for acts of third-party vendors beyond our control</li>
                    <li>Force majeure events (natural disasters, government actions, etc.) are excluded</li>
                    <li>Client assumes responsibility for guest safety and behavior</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Intellectual Property</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Regarding intellectual property:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>PrimXP retains rights to our methodologies, processes, and materials</li>
                    <li>Client retains rights to their proprietary information and branding</li>
                    <li>We may use event photos/videos for marketing with client consent</li>
                    <li>All custom designs become client property upon full payment</li>
                    <li>Third-party content usage must comply with licensing requirements</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Confidentiality</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We maintain strict confidentiality regarding:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Client business information and strategies</li>
                    <li>Event details and guest information</li>
                    <li>Financial information and budgets</li>
                    <li>Any information marked as confidential</li>
                  </ul>
                  <p>This confidentiality obligation survives termination of our agreement.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Website Usage</h2>
                <div className="space-y-4 text-gray-700">
                  <p>When using our website, you agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use the site for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the site's operation or security</li>
                    <li>Submit false or misleading information</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Dispute Resolution</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Any disputes will be resolved through:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Good faith negotiation as the first step</li>
                    <li>Mediation if negotiation fails</li>
                    <li>Arbitration under Indian Arbitration laws</li>
                    <li>Jurisdiction in New Delhi courts for legal proceedings</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Changes to Terms</h2>
                <div className="space-y-4 text-gray-700">
                  <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any changes.</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#2d545e] mb-6">Contact Information</h2>
                <div className="space-y-4 text-gray-700">
                  <p>For questions about these terms, please contact us:</p>
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

export default TermsOfServicePage;