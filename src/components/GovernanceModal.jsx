import React, { useState } from 'react';

const governanceContent = {
  ethics: {
    title: 'Code of Business Ethics & Conduct',
    subtitle: 'Integrity as the Foundation of Defense',
    intro: 'Absolut Defense Systems is committed to conducting business with the highest standards of ethics and integrity. As stewards of public trust in the defense sector, we recognize that our ethical conduct directly impacts national security and the communities we serve.',
    sections: [
      {
        title: 'Fair Competition',
        content: 'We compete solely on the basis of quality, service, and price. We never engage in anti-competitive practices, bid-rigging, or market manipulation. Our success is built on innovation and excellence, not on undermining our competitors.',
        icon: '⚖️'
      },
      {
        title: 'Conflict of Interest',
        content: 'All employees must disclose any personal, financial, or professional relationships that could influence business decisions. We maintain strict separation between personal interests and our duty to the company and its stakeholders.',
        icon: '🔍'
      },
      {
        title: 'Anti-Corruption & Bribery',
        content: 'We maintain zero tolerance for corruption, bribery, and improper payments of any kind. This applies to all interactions with government officials, partners, and suppliers worldwide, regardless of local customs or practices.',
        icon: '🛡️'
      },
      {
        title: 'Gifts & Entertainment',
        content: 'We maintain strict limitations on providing or receiving anything of value from government officials, competitors, or business partners. All gifts and entertainment must be modest, transparent, and in compliance with applicable laws.',
        icon: '🎁'
      },
      {
        title: 'Whistleblower Protection',
        content: 'We encourage employees to "speak up" without fear of retaliation when they suspect unethical behavior. Our confidential reporting channels ensure that concerns are addressed promptly and those who report in good faith are protected.',
        icon: '📢'
      },
      {
        title: 'Information Security',
        content: 'We protect classified and proprietary information with the same vigilance we apply to physical security. Unauthorized disclosure of sensitive information is not only unethical but may constitute a violation of national security laws.',
        icon: '🔒'
      }
    ]
  },
  privacy: {
    title: 'Privacy Policy',
    subtitle: 'Protecting Your Data with Defense-Grade Security',
    intro: 'At Absolut Defense Systems, we apply the same rigorous standards to protecting personal data that we apply to protecting national security interests. This policy describes how we collect, use, and safeguard your information.',
    sections: [
      {
        title: 'Information We Collect',
        content: 'We collect information you provide directly (name, email, employment history for job applications), information collected automatically (device identifiers, usage data), and information from third parties (background check providers for security clearances).',
        icon: '📋'
      },
      {
        title: 'How We Use Your Information',
        content: 'Your information is used to: process job applications and security clearances, respond to inquiries, improve our services, comply with legal obligations, and communicate about our products and services where you have opted in.',
        icon: '⚙️'
      },
      {
        title: 'Data Retention',
        content: 'We retain personal data only as long as necessary for the purposes described or as required by law. For job applicants, records are retained for 3 years unless hired. Security clearance data is retained per government requirements.',
        icon: '🗄️'
      },
      {
        title: 'Data Security',
        content: 'We implement industry-leading security measures including encryption at rest and in transit, multi-factor authentication, regular security audits, and compliance with NIST cybersecurity frameworks.',
        icon: '🔐'
      },
      {
        title: 'Your Rights',
        content: 'You have the right to access, correct, or delete your personal data, subject to legal obligations. You may opt out of marketing communications at any time. To exercise these rights, contact privacy@absolutdefense.com.',
        icon: '✋'
      },
      {
        title: 'International Transfers',
        content: 'Data may be transferred to and processed in countries where we operate. We ensure appropriate safeguards are in place, including Standard Contractual Clauses for EU data transfers.',
        icon: '🌐'
      }
    ]
  },
  supplychain: {
    title: 'Supply Chain Transparency',
    subtitle: 'Illuminating Our Defense Industrial Base',
    intro: 'As a defense industrial base contractor, Absolut is committed to Supply Chain Illumination—providing full visibility into the entities, materials, and components that comprise our products. This transparency is critical for mitigating risks related to national security, human rights, and quality assurance.',
    sections: [
      {
        title: 'Human Rights Compliance',
        content: 'We are committed to ensuring that no forced labor, human trafficking, or child labor occurs within our supply chain. We comply with the UK Modern Slavery Act, California Transparency in Supply Chains Act, and Uyghur Forced Labor Prevention Act.',
        icon: '👥'
      },
      {
        title: 'Risk-Based Auditing',
        content: 'We conduct regular assessments and audits of key suppliers to ensure adherence to our Supplier Code of Conduct. High-risk suppliers are subject to enhanced due diligence, including on-site inspections and third-party audits.',
        icon: '📊'
      },
      {
        title: 'National Security Investigations',
        content: 'We cooperate fully with government reviews of supply chains for critical technologies. We screen all suppliers against OFAC sanctions lists, Entity Lists, and other government-maintained databases of prohibited parties.',
        icon: '🏛️'
      },
      {
        title: 'Software Bill of Materials (SBOM)',
        content: 'We implement Digital Bills of Materials to ensure the security and provenance of all software components used in Nexus OS and other systems. SBOMs are maintained per NTIA guidelines and shared with government customers upon request.',
        icon: '📝'
      },
      {
        title: 'Conflict Minerals',
        content: 'We are committed to responsible sourcing of tin, tantalum, tungsten, and gold (3TG). We require suppliers to trace these minerals to smelters certified by the Responsible Minerals Initiative.',
        icon: '⛏️'
      },
      {
        title: 'Environmental Sustainability',
        content: 'We work with suppliers who share our commitment to environmental responsibility. We prioritize partners who demonstrate sustainable practices and work toward reducing the carbon footprint of our supply chain.',
        icon: '🌿'
      }
    ]
  }
};

export default function GovernanceModal({ type, isOpen, onClose }) {
  if (!isOpen || !type) return null;
  
  const content = governanceContent[type];
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="p-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            Corporate Governance
          </div>
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">{content.title}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">{content.subtitle}</p>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">{content.intro}</p>
          
          <div className="space-y-6">
            {content.sections.map((section, i) => (
              <div key={i} className="border-l-2 border-cyan-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{section.icon}</span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{section.title}</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              <div>Last Updated: January 2026</div>
              <div>For questions, contact: governance@absolutdefense.com</div>
            </div>
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-mono text-sm uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
