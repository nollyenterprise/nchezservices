import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/content';
import { 
  Lock, 
  Scale, 
  ShieldCheck, 
  ArrowLeft, 
  Mail, 
  Printer
} from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onNavigateHome: () => void;
  onContactTeam: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  initialTab = 'privacy',
  onNavigateHome,
  onContactTeam,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="legal-page" className="min-h-screen bg-[#FAFAFA] text-[#18181B] pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-gray-200 py-4 mb-8 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#32135C] hover:text-[#E10600] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Document</span>
            </button>
            <button
              type="button"
              onClick={onContactTeam}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Legal Contact</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Section */}
        <div className="max-w-4xl mb-10">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E10600]/10 text-[#E10600] text-xs font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>COMMERCIAL GOVERNANCE & LEGAL COMPLIANCE</span>
          </motion.div>
          
          <motion.h1 
            className="font-display text-3xl sm:text-5xl font-bold text-[#32135C] tracking-tight leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Legal & Regulatory Policies
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            Nchez Services Limited operates in full accordance with the Laws of the Federal Republic of Nigeria, Nigerian Data Protection Act (NDPA 2023), and international industrial procurement standards.
          </motion.p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex items-center gap-2 sm:gap-4 mb-10 border-b border-gray-200 pb-4 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-display text-sm sm:text-base font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'bg-[#32135C] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Lock className={`w-4 h-4 ${activeTab === 'privacy' ? 'text-[#E10600]' : 'text-gray-500'}`} />
            <span>Privacy Policy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-display text-sm sm:text-base font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'terms'
                ? 'bg-[#32135C] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Scale className={`w-4 h-4 ${activeTab === 'terms' ? 'text-[#E10600]' : 'text-gray-500'}`} />
            <span>Terms &amp; Conditions</span>
          </button>
        </div>

        {/* Policy Content Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-10 lg:p-12 mb-12">
          
          {activeTab === 'privacy' ? (
            <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
              {/* Effective Badge */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200 text-xs sm:text-sm text-[#32135C]">
                <strong>Entity:</strong> Nchez Services Limited | <strong>Effective Date:</strong> January 1, 2026 | <strong>Jurisdiction:</strong> Nigeria Data Protection Act (NDPA 2023) &amp; International Industrial Compliance Standards.
              </div>

              {/* Section 1 */}
              <div className="space-y-3">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  1. Corporate Statement &amp; Scope
                </h2>
                <p>
                  Nchez Services Limited (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered in the Federal Republic of Nigeria and operating from {COMPANY_INFO.address}, is committed to protecting the privacy, commercial confidentiality, and integrity of personal and proprietary data shared by our corporate clients, partners, equipment OEMs, and website visitors.
                </p>
                <p>
                  This Privacy Policy applies to all technical inquiries, request-for-quotations (RFQs), supply contracts, logistics operations, and digital interactions executed with Nchez Services Limited.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  2. Information We Collect
                </h2>
                <p>
                  To process quotations, manage equipment procurement, execute haulage, and perform mechanical fabrication, we collect relevant business and technical information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Commercial Contact Details:</strong> Full name, corporate email address, corporate telephone number, job title, and company name submitted during project inquiries or RFQ forms.</li>
                  <li><strong>Technical Specifications &amp; Material Data:</strong> Bills of Quantities (BOQs), piping isometric schematics, valve tag numbers, material grade requirements (e.g., NACE MR0175, ASME B16.5), and site location coordinates.</li>
                  <li><strong>Logistics &amp; Transport Records:</strong> Freight manifests, bill of lading documentation, port clearance details, and goods-in-transit milestone data.</li>
                  <li><strong>Automated Website Telemetry:</strong> Standard non-identifying server log data, browser type, device identifiers, and page visit metrics collected strictly for cybersecurity and site optimization.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  3. Use of Technical &amp; Commercial Data
                </h2>
                <p>
                  We process submitted data exclusively for legitimate commercial, engineering, and legal purposes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200">
                    <div className="font-bold text-[#32135C] mb-1">RFQ &amp; Technical Quotations</div>
                    <div className="text-xs text-gray-600">Generating accurate pricing, OEM availability checks, and material dossiers.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200">
                    <div className="font-bold text-[#32135C] mb-1">Logistics &amp; Delivery Support</div>
                    <div className="text-xs text-gray-600">Coordinating multi-axle haulage, marine barging, customs clearances, and site handover.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200">
                    <div className="font-bold text-[#32135C] mb-1">Compliance &amp; Material Traceability</div>
                    <div className="text-xs text-gray-600">Issuing 3.1 Mill Test Reports (MTRs) and maintaining quality control logs.</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200">
                    <div className="font-bold text-[#32135C] mb-1">Contract Execution</div>
                    <div className="text-xs text-gray-600">Managing purchase orders, invoicing, warranties, and emergency field support.</div>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  4. Proprietary Data Protection &amp; Non-Disclosure
                </h2>
                <p>
                  All engineering drawings, wellhead schematics, chemical injection specs, and commercial pricing schedules submitted to Nchez Services Limited are treated as strictly confidential business data. We enforce internal role-based access restrictions and encrypted storage controls. We do not sell, license, or trade client or project data to third parties.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  5. Third-Party Sharing &amp; Regulatory Disclosures
                </h2>
                <p>
                  Information may be shared with trusted third parties strictly on a need-to-know basis to fulfill contractual obligations:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600">
                  <li>Original Equipment Manufacturers (OEMs) for factory order placement and warranty registration.</li>
                  <li>Accredited metallurgical testing laboratories for independent Material Test Report (MTR) verification.</li>
                  <li>Government regulatory bodies (NUPRC, NCDMB, NIMASA, NPA) where mandated by law for customs clearance and statutory compliance.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  6. Contact Data Compliance Officer
                </h2>
                <p>
                  For questions regarding this Privacy Policy or to request correction/update of corporate contact information, please contact our data compliance desk:
                </p>
                <div className="p-5 rounded-xl bg-[#32135C] text-white space-y-2 mt-2">
                  <div className="font-bold text-[#E10600] uppercase text-xs tracking-wider">DATA PROTECTION & LEGAL DESK</div>
                  <div className="font-semibold text-lg">Nchez Services Limited</div>
                  <div className="text-sm text-gray-200">{COMPANY_INFO.address}</div>
                  <div className="text-sm text-gray-200">Official Email: <a href="mailto:info@nchezservices.com" className="text-[#E10600] underline font-bold">info@nchezservices.com</a></div>
                  <div className="text-sm text-gray-200">Phone: {COMPANY_INFO.phone}</div>
                </div>
              </div>

            </div>
          ) : (
            <div className="space-y-8 text-sm sm:text-base text-gray-700 leading-relaxed">
              {/* Effective Badge */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-200 text-xs sm:text-sm text-[#32135C]">
                <strong>Standard Commercial Terms of Engagement</strong> | Governing All Equipment Sales, Heavy Haulage, Strategic Procurement, and Mechanical Fabrication by Nchez Services Limited.
              </div>

              {/* Section 1 */}
              <div className="space-y-3">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  1. Binding Commercial Agreement
                </h2>
                <p>
                  These Terms and Conditions govern all commercial quotations, proposals, purchase orders (POs), service agreements, and physical deliveries executed by Nchez Services Limited (&ldquo;Company&rdquo;). Acceptance of a quotation, issuance of a purchase order, or authorization of work constitutes full acceptance of these Terms.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  2. Quotations &amp; Pricing Structure
                </h2>
                <p>
                  All written commercial quotations issued by Nchez Services Limited remain valid for thirty (30) calendar days from the date of issue unless otherwise specified in writing. Prices are quoted exclusive of applicable statutory taxes (such as VAT and withholding tax) unless explicitly indicated. Nchez Services Limited reserves the right to revise quotes prior to formal PO acceptance in the event of major raw material market shifts or foreign exchange variations.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  3. Quality Control, Standards &amp; Warranties
                </h2>
                <p>
                  All equipment, materials, valves, pumps, flanges, and fabricated spools supplied by Nchez Services Limited are guaranteed to meet or exceed agreed international standards (e.g., API 6D, API 610, ASME B16.5, AWS D1.1, NACE MR0175).
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
                  <li>Deliveries are accompanied by EN 10204 3.1 Mill Test Reports (MTR) and OEM quality certificates.</li>
                  <li>OEM warranties pass directly to the buyer as provided by the original manufacturer.</li>
                  <li>Rejection of non-conforming materials must be submitted in writing within fourteen (14) calendar days of site receipt alongside third-party inspection evidence.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  4. Haulage Logistics &amp; Incoterms® 2020
                </h2>
                <p>
                  Delivery terms shall be defined according to Incoterms® 2020 (e.g., EXW, FOB, CIF, or DDP Port Harcourt/Onne) as detailed in the contract invoice.
                </p>
                <p>
                  For heavy transport and haulage services, Nchez Services Limited maintains Goods-In-Transit (GIT) insurance coverage, pre-approved Journey Management Plans (JMP), and trained operators. Risk of loss transfers upon handover at the designated delivery point.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  5. Payment Terms &amp; Commercial Default
                </h2>
                <p>
                  Unless custom credit terms are established in a formal master service agreement (MSA), invoices issued by Nchez Services Limited are payable within thirty (30) days of invoice date. Title to supplied materials remains with Nchez Services Limited until full payment of the invoice price is received.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  6. Health, Safety &amp; Environmental (HSE) Compliance
                </h2>
                <p>
                  Nchez Services Limited enforces a zero-tolerance policy regarding health, safety, and environmental violations. All personnel, haulage drivers, riggers, and welders adhere to strict ISO 9001 and ISO 45001 safety guidelines, site-specific inductions, and Nigerian Upstream Petroleum Regulatory Commission (NUPRC) safety mandates.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-3 pt-2">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#32135C] border-b border-gray-100 pb-2">
                  7. Governing Law &amp; Arbitration
                </h2>
                <p>
                  These Terms and any commercial transactions resulting therefrom shall be governed by and interpreted in accordance with the Laws of the Federal Republic of Nigeria. Any dispute arising out of or in connection with these terms shall be resolved through amicable negotiation. If unresolved within thirty (30) days, the dispute shall be referred to arbitration in Port Harcourt or Lagos, Nigeria, in accordance with the Arbitration and Mediation Act 2023.
                </p>
              </div>

              {/* Contact Box */}
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-gray-200 flex items-center justify-between flex-wrap gap-4 mt-4">
                <div>
                  <div className="font-bold text-[#32135C]">Questions about our Legal Terms?</div>
                  <div className="text-xs text-gray-600">Contact our commercial contracts team at info@nchezservices.com</div>
                </div>
                <a
                  href="mailto:info@nchezservices.com"
                  className="px-5 py-2.5 bg-[#E10600] hover:bg-[#BF0500] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Contact Legal Desk
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
