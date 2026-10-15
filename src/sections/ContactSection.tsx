import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Send, AlertCircle, CheckCircle2, Mail, ExternalLink, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const projectTypes = [
  'Brand Partnership',
  'Hardware Review',
  'Speaking & Keynote',
  'Creative Campaign'
];

export const ContactSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState('Brand Partnership');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'generating' | 'ready'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('generating');

    // Create a structured mailto link honestly without pretending a non-existent backend received it
    setTimeout(() => {
      setStatus('ready');
      const subject = encodeURIComponent(`[Inquiry // ${selectedType}] from ${formData.name || 'Collaborator'}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInquiry Type: ${selectedType}\n\nProject Brief:\n${formData.message}\n\n-- Sent via SHAZZAM Creator Experience Concept`
      );
      // Trigger default mail client
      window.location.href = `mailto:inquiries@callmeshazzam.com?subject=${subject}&body=${body}`;
    }, 400);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#101010] border-t border-[#303030] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          index="06"
          eyebrow="ENGAGEMENT // INQUIRIES"
          title="HAVE SOMETHING INTERESTING?"
          description="Technology, creative ideas and collaborations worth talking about."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Guidelines */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 bg-[#171717] border border-[#303030] space-y-6">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7FF4F]">
                COLLABORATION PRINCIPLES
              </div>

              <div className="space-y-4 text-sm text-[#A5A5A0] leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D7FF4F] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#F4F1E9]">Editorial Independence:</strong> Products sent for review are tested without editorial pre-approval or scripted talking points.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D7FF4F] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#F4F1E9]">Audience Value:</strong> Partnerships must bring genuine interest or technological novelty to the viewer.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D7FF4F] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#F4F1E9]">Fast Turnaround:</strong> High quality studio cinematography and testing protocols.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#303030]">
                <div className="text-xs font-mono text-[#A5A5A0] mb-2">OFFICIAL SOCIAL CHANNELS</div>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#D7FF4F] hover:underline flex items-center gap-1.5"
                >
                  <span>Direct message on Instagram (@callmeshazzam)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Transparent Demo Notice */}
            <div className="p-4 bg-[#141414] border border-[#303030] flex items-start gap-3 text-xs text-[#A5A5A0] font-mono leading-relaxed">
              <AlertCircle className="w-4 h-4 text-[#D7FF4F] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#F4F1E9] font-bold">TRANSPARENCY NOTICE:</span> Submitting this form composes a pre-formatted message and opens your operating system's mail client. No mock server claims.
              </div>
            </div>
          </div>

          {/* Right Column: Honest Collaboration Form */}
          <div className="lg:col-span-7 bg-[#171717] border border-[#303030] p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A5A5A0] mb-3">
                  1. PROJECT SCOPE // TYPE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`p-3 text-xs font-mono tracking-wider uppercase text-left border transition-all cursor-pointer ${
                        selectedType === type
                          ? 'bg-[#101010] text-[#D7FF4F] border-[#D7FF4F]'
                          : 'bg-[#141414] text-[#A5A5A0] border-[#303030] hover:border-[#A5A5A0]'
                      }`}
                    >
                      <span className="block text-[10px] text-[#A5A5A0]">// OPTION</span>
                      <span className="font-semibold">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#A5A5A0] mb-2">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Jensen"
                    className="w-full px-4 py-3 bg-[#101010] border border-[#303030] text-[#F4F1E9] placeholder-[#555] text-sm focus:border-[#D7FF4F] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#A5A5A0] mb-2">
                    Work Email *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 bg-[#101010] border border-[#303030] text-[#F4F1E9] placeholder-[#555] text-sm focus:border-[#D7FF4F] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-company" className="block text-xs font-mono uppercase tracking-wider text-[#A5A5A0] mb-2">
                  Brand or Organization
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Brand / Agency / Media Company"
                  className="w-full px-4 py-3 bg-[#101010] border border-[#303030] text-[#F4F1E9] placeholder-[#555] text-sm focus:border-[#D7FF4F] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#A5A5A0] mb-2">
                  Project Brief & Timeline *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the hardware, target deliverables, timeline, or key objectives..."
                  className="w-full px-4 py-3 bg-[#101010] border border-[#303030] text-[#F4F1E9] placeholder-[#555] text-sm focus:border-[#D7FF4F] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon="arrow-right"
                  className="w-full sm:w-auto"
                >
                  {status === 'generating' ? 'PREPARING DISPATCH...' : 'OPEN IN EMAIL CLIENT'}
                </Button>

                <span className="text-[11px] font-mono text-[#A5A5A0]">
                  * Required fields
                </span>
              </div>

              {status === 'ready' && (
                <div className="p-3 bg-[#101010] border border-[#D7FF4F] text-xs font-mono text-[#D7FF4F] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Draft generated in mail client. Check your outgoing mailbox!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
