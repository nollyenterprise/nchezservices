import React from 'react';
import { X, Lock, Scale } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#32135C]/20 max-h-[88vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#32135C] text-white p-6 sm:p-7 flex items-center justify-between border-b-4 border-[#E10600]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              {isPrivacy ? (
                <Lock className="w-6 h-6 text-[#E10600]" />
              ) : (
                <Scale className="w-6 h-6 text-[#E10600]" />
              )}
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E10600]">
                LEGAL COMPLIANCE &amp; GOVERNANCE
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions of Commercial Engagement'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#18181B] leading-relaxed">
          {isPrivacy ? (
            <>
              <div className="p-4 rounded-xl bg-[#F3E6EC]/50 border border-[#32135C]/15 text-xs text-[#32135C]">
                <strong>Effective Date:</strong> January 1, 2026 | <strong>Jurisdiction:</strong> Nigeria Data Protection Act (NDPA 2023) &amp; International Industrial Compliance Standards.
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1">
                  1. Overview &amp; Data Controllership
                </h4>
                <p>
                  Nchez Services Limited (&ldquo;Nchez&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered in the Federal Republic of Nigeria and operating from {COMPANY_INFO.address}, is committed to safeguarding the proprietary, commercial, and personal information entrusted to us by clients, engineering partners, OEMs, and website visitors.
                </p>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  2. Categories of Information Collected
                </h4>
                <p>
                  We collect and process only information necessary to deliver our commercial and technical scopes:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><strong>Commercial Inquiry Data:</strong> Contact representative name, corporate email address, corporate telephone number, and company name submitted during request-for-quote (RFQ) submissions.</li>
                  <li><strong>Technical &amp; Engineering Specifications:</strong> Equipment tags, bills of quantities (BOQs), well-site locations, pipe dimensions, metallurgical requirements, and fabrication drawings.</li>
                  <li><strong>Logistics Data:</strong> Delivery vessel manifests, offloading port coordinates, and customs clearance paperwork.</li>
                  <li><strong>Technical Logs:</strong> Server access timestamps, IP addresses, browser types, and session telemetry used strictly for cybersecurity and site stability.</li>
                </ul>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  3. Non-Disclosure &amp; Protection of Engineering Data
                </h4>
                <p>
                  All engineering drawings, well coordinates, pipeline schematics, and commercial pricing models provided to Nchez Services Limited are classified as Confidential Commercial Information. We maintain strict role-based access control, encrypted internal repositories, and never monetize, sell, or disclose proprietary project data to competitors or unauthorized third parties.
                </p>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  4. Third-Party Disclosures
                </h4>
                <p>
                  We only disclose necessary technical data to authorized equipment manufacturers (such as OEM channel distributors), accredited testing laboratories (for Material Test Reports), and regulatory bodies (NUPRC, NCDMB, NIMASA, NPA) strictly where required for compliance and logistics clearance.
                </p>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  5. Data Retention &amp; Rights
                </h4>
                <p>
                  Corporate contact and transaction records are retained for the statutory period required under Nigerian commercial law and tax statutes. Clients may request verification, correction, or deletion of corporate representative contact information by contacting our data compliance officer at{' '}
                  <span className="font-bold text-[#E10600]">{COMPANY_INFO.email}</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 rounded-xl bg-[#F3E6EC]/50 border border-[#32135C]/15 text-xs text-[#32135C]">
                <strong>Standard Commercial Terms of Service</strong> | Governing All Equipment Sales, Heavy Logistics, Procurement, and Fabrication Works by Nchez Services Limited.
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1">
                  1. Binding Agreement &amp; Scope of Supply
                </h4>
                <p>
                  These Terms and Conditions govern all commercial quotations, purchase orders (POs), service level agreements (SLAs), and project executions entered into with Nchez Services Limited. Any conflicting terms contained in a buyer&rsquo;s purchase order shall only apply if expressly accepted in writing by an authorized director of Nchez Services Limited.
                </p>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  2. Quotation Validity &amp; Price Adjustments
                </h4>
                <p>
                  All written quotations issued by Nchez Services Limited are valid for thirty (30) calendar days from date of issuance, unless otherwise stated. Given global supply chain fluctuations, raw material surcharges, import tariff adjustments, and foreign exchange movements, Nchez reserves the right to adjust commercial quotes prior to formal PO acceptance.
                </p>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  3. Quality Assurance &amp; Material Test Reports (MTR)
                </h4>
                <p>
                  All industrial valves, pumps, flowlines, heavy structural steel, and mechanical parts supplied by Nchez are verified genuine, sourced directly from certified original equipment manufacturers and authorized global distributors. Mill Test Certificates and EN 10204 3.1 / 3.2 inspection documentation are provided with deliveries.
                </p>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  4. Logistics, Delivery &amp; Risk of Loss
                </h4>
                <p>
                  Delivery terms shall be determined according to Incoterms® 2020 (e.g., EXW, FOB, CIF, or DDP) as designated in the definitive commercial invoice. Risk of loss passes to the client in accordance with the agreed Incoterm. Nchez Services Limited exercises maximum standard of care and maintains comprehensive marine cargo and transit insurance for heavy haulage operations.
                </p>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  5. Health, Safety &amp; Environmental (HSE) Compliance
                </h4>
                <p>
                  All personnel, subcontractors, and field operators deployed by Nchez comply with rigorous HSE policies, Nigerian Upstream Petroleum Regulatory Commission (NUPRC) safety guidelines, and relevant site-specific induction requirements.
                </p>

                <h4 className="font-display font-semibold text-[#32135C] text-base border-b border-gray-200 pb-1 pt-2">
                  6. Governing Law &amp; Dispute Resolution
                </h4>
                <p>
                  These Terms and any commercial agreements between the parties shall be governed by and construed in accordance with the Laws of the Federal Republic of Nigeria. Any disputes shall first be subjected to good-faith commercial negotiation, failing which they shall be settled by arbitration in Lagos or Port Harcourt under the Arbitration and Mediation Act 2023.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#F3E6EC]/25 border-t border-[#32135C]/15 flex items-center justify-between">
          <div className="text-xs text-[#796094]">
            Nchez Services Limited • Rukpokwu, Port Harcourt, Nigeria
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#32135C] hover:bg-[#18181B] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
