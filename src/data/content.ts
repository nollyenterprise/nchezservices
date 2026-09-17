import { ServiceItem, ProductItem, ClientItem, PartnerItem } from '../types';

export const COMPANY_INFO = {
  name: 'Nchez Services Limited',
  tagline: 'Reliable Equipment. Seamless Logistics. Engineered Value.',
  shortTagline: 'Powering Operations. Delivering Value.',
  location: 'Port Harcourt, Rivers State, Nigeria',
  address: '83B Elikpokwuodu Road Rukpokwu Port harcourt Rivers State',
  phone: '+234 703 692 4642',
  phoneRaw: '+2347036924642',
  email: 'info@nchezservices.com',
  founded: '2016',
};

export const SERVICE_CATEGORIES = [
  { id: 'equipment', label: 'Provision of Equipments and Materials' },
  { id: 'haulage', label: 'Haulage and Logistics Support' },
  { id: 'procurement', label: 'Strategic Procurement' },
  { id: 'fabrication', label: 'Mechanical Construction' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'equipment',
    number: '01',
    title: 'Provision of Equipments and Materials',
    shortDescription:
      'Valves, Pumps, Compressors, Flanges and critical Spare Parts engineered for critical industrial and energy operations.',
    fullDescription:
      'Nchez Services Limited delivers certified heavy industrial equipment and critical materials sourced directly from approved global OEMs. We provide comprehensive supply, testing, and technical documentation for upstream oil & gas facilities, flow stations, and heavy manufacturing plants.',
    heroHeadline: 'Certified Equipment & Materials for Mission-Critical Operations',
    heroSubtext:
      'End-to-end industrial equipment supply, material verification, and manufacturer-backed technical support that keep critical facilities running at peak performance, maximising uptime, efficiency, and asset life.',
    overviewHeadline: 'Delivering certified equipment that powers continuous production',
    overviewParagraphs: [
      'We provide comprehensive equipment supply and technical procurement services that extend well beyond standard delivery, from OEM factory auditing and material test verification through pre-commissioning testing, technical documentation, and rapid-response spares support.',
      'Our goal is simple: eliminate operational downtime, guarantee full ASME/API standard compliance, and deliver traceable, high-integrity equipment engineered for the most demanding onshore and offshore operating environments.',
    ],
    overviewImage: '/images/pexels-vik-nesh-waran-32881851-7024831.jpg',
    coreCapabilities: [
      {
        title: 'API-Certified Valves',
        description:
          'Ball, Gate, Globe, Check, Choke, Butterfly and Control valves rated ANSI 150 to 2500 for extreme pressure and corrosive services.',
      },
      {
        title: 'Industrial Pumps & Skids',
        description:
          'Heavy-duty centrifugal, multistage, and positive displacement pumps designed for continuous hydrocarbon and chemical transfer.',
      },
      {
        title: 'Compressors & Rotating Gear',
        description:
          'Industrial gas compressors, reciprocating units, and rotary screw packages engineered for flow stations and gas lift plants.',
      },
      {
        title: 'Flanges, Gaskets & Spares',
        description:
          'Forged, blind, and weld-neck flanges in carbon and duplex steel with full NACE MR0175 and ASME B16.5 compliance.',
      },
      {
        title: 'OEM Factory Sourcing',
        description:
          'Direct manufacturer partnerships ensuring genuine OEM parts, comprehensive warranty coverage, and factory test records.',
      },
      {
        title: 'Hydrotesting & Inspection',
        description:
          'Rigorous in-house and third-party hydrostatic pressure testing, PMI verification, and non-destructive quality assurance.',
      },
    ],
    keyDeliverables: [
      '100% Mill Test Reports (MTR) and 3.1 material traceability certificates',
      'Factory Acceptance Test (FAT) dossiers and hydrostatic test charts',
      'OEM warranty certificates and manufacturer compliance documentation',
      'Positive Material Identification (PMI) and non-destructive testing reports',
      'Hazardous area compliance sheets, explosion-proof tags, and manuals',
      'On-site technical handover records, spare parts lists, and commissioning support',
    ],
    relatedServiceIds: ['haulage', 'procurement', 'fabrication'],
    deliverables: [
      'Valves (Ball, Gate, Globe, Check, Choke, Butterfly & Control)',
      'Pumps (Heavy-duty Centrifugal, Multistage & Chemical Injection)',
      'Compressors (Industrial Gas, Reciprocating & Screw Compressors)',
      'Flanges and other Spare Parts (Forged, Blind, Weld Neck & Gaskets)',
    ],
    specs: [
      'API Spec 6D / 6A / 17D / 610 Compliance',
      'ASME B16.5 & B16.47 Flange Standards',
      '100% Mill Test Report (MTR) & NACE MR0175 Traceability',
    ],
    icon: 'ShieldCheck',
    image: '/images/service-equipment.jpg',
  },
  {
    id: 'haulage',
    number: '02',
    title: 'Haulage and Logistics Support',
    shortDescription:
      'Heavy-duty transport, multi-axle lowbed logistics, marine barging, and expedited project cargo movement.',
    fullDescription:
      'Our dedicated heavy transport fleet and marine logistics operations provide reliable, secure haulage for oversized equipment, tubulars, skid packages, and time-critical project cargo across the Niger Delta and regional corridors.',
    heroHeadline: 'Heavy Haulage & Integrated Logistics Support Across Nigeria',
    heroSubtext:
      'End-to-end heavy equipment transport, multi-axle lowbed logistics, marine barging, and dedicated project cargo movement engineered to keep capital projects and field operations moving without delay.',
    overviewHeadline: 'Engineered heavy transport moving critical energy infrastructure',
    overviewParagraphs: [
      'We provide complete industrial haulage and marine logistics support tailored to the demanding terrain of Nigeria and the Niger Delta corridor, safely moving over-dimensional cargo, modular process skids, heavy drilling tubulars, and time-critical spares on schedule.',
      'With modern lowbeds, hydraulic multi-axle trailers, self-loading cranes, and inland marine barge assets, our logistics division ensures end-to-end route clearance, security coordination, GPS monitoring, and full Goods-In-Transit insurance on every single voyage.',
    ],
    overviewImage: '/images/Haulage & Logistics Support.jpg',
    coreCapabilities: [
      {
        title: 'Multi-Axle Heavy Haulage',
        description:
          'Specialized multi-axle hydraulic lowbeds, extendable trailers, and flatbeds for hauling over-dimensional industrial cargo up to 150+ tons.',
      },
      {
        title: 'Marine Barging Logistics',
        description:
          'Shallow-draft flat-top deck barges and tugboat support navigating coastal waterways, swamp locations, and offshore terminals.',
      },
      {
        title: 'Hot-Shot Emergency Transport',
        description:
          'Dedicated 24/7 rapid-dispatch transport units for urgent shutdown spares, subsea tools, and critical pipeline repair materials.',
      },
      {
        title: 'Heavy-Lift Rigging & Cranes',
        description:
          'Certified mobile cranes, spreader beams, and certified rigging teams for safe loading, transport, and site positioning.',
      },
      {
        title: 'Route Clearance & Security',
        description:
          'Pre-trip route surveys, bridge load assessments, obstacle clearances, community liaisons, and armed escort coordination.',
      },
      {
        title: 'Real-Time GPS Fleet Telemetry',
        description:
          'Satellite GPS vehicle tracking, active speed governors, geo-fencing, and real-time transit status dashboards for clients.',
      },
    ],
    keyDeliverables: [
      'Comprehensive Journey Management Plans (JMP) and route risk assessments',
      'Goods-In-Transit (GIT) full-value insurance coverage certificates',
      'Heavy-lift engineering rigging plans and crane load-chart calculations',
      'Real-time GPS tracking feeds and milestone checkpoint timestamps',
      'Security escort clearances, community liaison approvals, and permits',
      'Signed Proof of Delivery (POD) and safe offloading verification dossiers',
    ],
    relatedServiceIds: ['equipment', 'procurement', 'fabrication'],
    deliverables: [
      'Heavy-duty multi-axle lowbeds, self-loaders & flatbed trailers',
      'Marine barge & river transport across coastal operations',
      'Route clearance, security escort management & heavy-lift rigging',
      'Expedited hot-shot transport for emergency shutdown spares',
    ],
    specs: [
      'Goods-In-Transit (GIT) Comprehensive Insurance',
      'Real-Time GPS Telemetry & Fleet Route Monitoring',
      'Rig-Pass & Shell/Chevron HSE Compliant Operators',
    ],
    icon: 'Truck',
    image: '/images/service-haulage.jpg',
  },
  {
    id: 'procurement',
    number: '03',
    title: 'Strategic Procurement',
    shortDescription:
      'Cost-effective and efficient solutions that ensure our clients experience significant cost savings.',
    fullDescription:
      'Cost-effective and efficient solutions that ensure our clients experience significant cost savings. We leverage direct OEM manufacturing alliances, bulk purchasing agreements, and streamlined international logistics to eliminate intermediary markups, shorten lead times, and optimize total cost of ownership.',
    heroHeadline: 'Strategic Sourcing & Cost-Optimized Supply Chain Solutions',
    heroSubtext:
      'Cost-effective and efficient solutions that ensure our clients experience significant savings by connecting industrial operators directly to tier-1 global manufacturers with transparent pricing and guaranteed lead times.',
    overviewHeadline: 'Optimizing supply chains to deliver measurable cost reduction',
    overviewParagraphs: [
      'We combine global sourcing power with local operational knowledge to eliminate intermediary markups, reduce procurement cycle times, and safeguard material authenticity across complex industrial projects.',
      'From vendor pre-qualification, factory auditing, and direct price negotiation to import documentation, customs clearance, and warehouse consolidation, we act as an extension of your procurement team with single-source accountability.',
    ],
    overviewImage: '/images/Strategic Procurement.jpg',
    coreCapabilities: [
      {
        title: 'Direct OEM Sourcing',
        description:
          'Direct purchasing relationships with approved global manufacturers in North America, Europe, and Asia, eliminating costly middlemen.',
      },
      {
        title: 'Cost Optimization & Rebates',
        description:
          'Volume bundling, framework agreements, and strategic negotiation delivering verified 15% to 25% savings on project CAPEX/OPEX.',
      },
      {
        title: 'Factory Quality Audits (FAT)',
        description:
          'Pre-shipment source inspections, QA/QC audits, and third-party witness testing before goods leave the manufacturer floor.',
      },
      {
        title: 'Customs & Port Logistics',
        description:
          'Fast-track Form M, PAAR processing, customs clearance, duty management, and bonded warehouse handling in Nigerian ports.',
      },
      {
        title: 'Vendor Pre-Qualification',
        description:
          'Rigorous compliance screening for financial solvency, ISO certifications, HSE track records, and anti-corruption compliance.',
      },
      {
        title: 'Inventory & Lead-Time Schedulers',
        description:
          'Buffer stock management, automated reorder triggers, and just-in-time delivery scheduling for critical maintenance consumables.',
      },
    ],
    keyDeliverables: [
      'Total Cost of Ownership (TCO) variance reports showing direct cost savings',
      'OEM Certificate of Conformity (CoC) and authorized distribution letters',
      'Full shipping manifests, Bill of Lading, Form M, and PAAR customs clearance files',
      'Factory Acceptance Testing (FAT) witness inspection reports and photo logs',
      'Audited vendor quality dossiers and ISO 9001 compliance documentation',
      'Guaranteed delivery timeline schedules and real-time freight tracking links',
    ],
    relatedServiceIds: ['equipment', 'haulage', 'fabrication'],
    deliverables: [
      'Direct OEM factory procurement with transparent pricing',
      'Vendor pre-qualification, audit & source inspection (FAT)',
      'Supply chain optimization reducing lead time and carrying cost',
      'Customs clearance, port handling & door-to-facility delivery',
    ],
    specs: [
      'Direct OEM Authorized Distribution Channels',
      'ISO 9001:2015 Audited Quality Control Protocols',
      'Documented 15% to 25% Average Material Cost Reduction',
    ],
    icon: 'TrendingDown',
    image: '/images/Strategic Procurement.jpg',
  },
  {
    id: 'fabrication',
    number: '04',
    title: 'Mechanical Construction',
    shortDescription:
      'Fabrication services, structural steel, high-pressure piping spools, and on-site mechanical erection.',
    fullDescription:
      'Comprehensive fabrication services, structural steel framing, high-pressure piping spools, ASME code welding, skid assembly, and plant installation tailored to demanding industrial requirements in Port Harcourt and offshore sites.',
    heroHeadline: 'Precision Mechanical Construction & ASME-Certified Fabrication',
    heroSubtext:
      'Turnkey structural fabrication, high-pressure piping spools, skid integration, and on-site mechanical installation engineered to stringent ASME and AWS quality codes for onshore and offshore facilities.',
    overviewHeadline: 'Turnkey fabrication engineered for high-pressure industrial environments',
    overviewParagraphs: [
      'Our mechanical construction division operates advanced fabrication facilities and field installation crews equipped to deliver high-integrity structural steel, complex piping spools, and skid-mounted process systems built to withstand extreme operating conditions.',
      'Every weld, flange alignment, and structural connection is executed under strict ISO 9001 and ISO 45001 safety controls, backed by certified welding inspectors, comprehensive non-destructive examination (NDE), and detailed Manufacturer Data Books.',
    ],
    overviewImage: '/images/Mechanical Construction.jpg',
    coreCapabilities: [
      {
        title: 'Structural Steel Framing',
        description:
          'Fabrication of heavy pipe racks, skid bases, platforms, walkways, and industrial building frames in compliance with AWS D1.1.',
      },
      {
        title: 'High-Pressure Piping Spools',
        description:
          'Carbon steel, stainless steel, and duplex alloy pipe spool fabrication welded and hydrotested in accordance with ASME B31.3.',
      },
      {
        title: 'Process Skid Packaging',
        description:
          'Integrated modular skids combining mechanical vessels, instrumentation piping, electrical trays, and structural lifting frames.',
      },
      {
        title: 'ASME & AWS Certified Welding',
        description:
          'Qualified welding procedures (WPS/PQR) for SMAW, GTAW, and FCAW processes executed by 6G-certified welding specialists.',
      },
      {
        title: '100% Non-Destructive Testing',
        description:
          'Comprehensive Radiographic Testing (RT), Ultrasonic Testing (UT), Magnetic Particle (MPI), and Dye Penetrant (DPI) inspection.',
      },
      {
        title: 'On-Site Erection & Tie-Ins',
        description:
          'Field mechanical installation, precision laser shaft alignment, flange bolt tensioning, and plant hot/cold tie-in integration.',
      },
    ],
    keyDeliverables: [
      'Manufacturer Data Book (MDB) with full material test and welding trace logs',
      'Approved Welding Procedure Specifications (WPS) and Procedure Qualification Records (PQR)',
      '100% Non-Destructive Examination (NDE/NDT) test reports and radiography films',
      'Hydrostatic and pneumatic pressure test certificates with calibrated gauge charts',
      'As-built structural shop drawings and certified isometric piping diagrams',
      'Final mechanical completion certificates, punchlist clearances, and handover signs',
    ],
    relatedServiceIds: ['equipment', 'haulage', 'procurement'],
    deliverables: [
      'Fabrication services & heavy structural steel framing',
      'High-pressure piping spool fabrication, hydrotesting & welding',
      'ASME Section VIII process skid integration & vessel packaging',
      'On-site mechanical erection, equipment alignment & tie-in works',
    ],
    specs: [
      'ASME Section IX & AWS D1.1 Certified Welders',
      'Non-Destructive Examination (100% NDT, UT, MPI & Radiography)',
      'ISO 9001:2015 Quality & ISO 45001 Safety Management',
    ],
    icon: 'Wrench',
    image: '/images/service-fabrication.jpg',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'valves',
    number: '01',
    name: 'Industrial Valves & Flow Control Systems',
    category: 'Valves & Actuators',
    image: '/image/valve.jpg',
    description:
      'High-performance valves engineered for critical pressure containment, onshore and offshore energy operations, and harsh flow environments. Sourced directly from certified manufacturers for maximum reliability.',
    highlights: [
      'Ball, Gate, Globe, Check & Choke Valves',
      'Forged & Cast Steel Construction (ANSI 150-2500)',
      'Subsea & Surface Actuated Control Valves',
      'API 6D, API 6A & NACE MR0175 Compliant',
    ],
    standards: ['API 6D', 'API 600', 'ASME B16.34', 'ISO 10423', 'NACE MR0175'],
    heroHeadline: 'API-Certified Valves & Flow Control Equipment',
    heroSubtext:
      'High-performance ball, gate, check, and choke valves engineered for severe service pressure containment across upstream, midstream, and downstream industrial facilities.',
    overviewHeadline: 'Severe service pressure containment built to international quality codes',
    overviewParagraphs: [
      'We supply an extensive portfolio of API 6D and API 6A certified valves manufactured from high-grade forged carbon steel, stainless steel, and duplex alloys. Designed to operate flawlessly under high-pressure, high-temperature (HPHT) and sour service (NACE MR0175) conditions.',
      'Every valve undergoes rigorous hydrostatic testing, seat leakage verification, and non-destructive material examination prior to dispatch. Backed by 100% Mill Test Reports (MTR) and manufacturer warranty coverage.',
    ],
    overviewImage: '/image/valve.jpg',
    specifications: [
      { label: 'Pressure Ratings', value: 'ANSI Class 150 to 2500 / API 2000 to 15,000 PSI' },
      { label: 'Nominal Sizes', value: '1/2" to 48" Full Bore & Reduced Bore' },
      { label: 'Body Materials', value: 'ASTM A105, A216 WCB, A350 LF2, F316/316L, Duplex 2205' },
      { label: 'Operating Temp', value: '-46°C to +450°C (-50°F to +842°F)' },
      { label: 'End Connections', value: 'Flanged (RF, RTJ), Butt-Weld, Socket-Weld, Threaded' },
      { label: 'Actuation Types', value: 'Manual Lever/Gear, Pneumatic, Hydraulic, Electric Motorized' },
    ],
    applications: [
      'Wellhead and manifold pressure isolation',
      'Oil and gas cross-country pipeline stations',
      'Refinery process units and chemical plants',
      'FPSO topside production module flow lines',
    ],
    relatedProductIds: ['pumps', 'flanges'],
  },
  {
    id: 'pumps',
    number: '02',
    name: 'Heavy-Duty Industrial Pumps & Skids',
    category: 'Pumps & Fluid Handling',
    image: '/image/pumps.jpg',
    description:
      'Heavy-duty industrial pumps and drive assemblies designed for continuous fluid transfer, chemical injection, produced water treatment, and demanding industrial processing.',
    highlights: [
      'Heavy-duty Centrifugal & Multistage Pumps',
      'High-pressure Chemical Injection Systems',
      'Explosion-proof Motor & Diesel Drive Skids',
      'Slurry, Submersible & Water Transfer Units',
    ],
    standards: ['API 610', 'ISO 5199', 'ANSI/HI', 'ATEX Certified', 'NEMA MG1'],
    heroHeadline: 'High-Integrity Pumps & Chemical Injection Skids',
    heroSubtext:
      'Engineered fluid handling solutions, API 610 process pumps, and skid-mounted chemical injection packages designed for continuous 24/7 duty in harsh operating environments.',
    overviewHeadline: 'Reliable fluid transfer solutions engineered for maximum uptime',
    overviewParagraphs: [
      'Nchez Services Limited supplies heavy-duty centrifugal, positive displacement, and chemical injection pump assemblies engineered to API 610 and ISO 5199 standards for fluid transfer, produced water handling, and crude boosting.',
      'Available as standalone bare-shaft units or fully integrated skids complete with explosion-proof electric motors, diesel drives, mechanical seals, and automated control panels ready for immediate field installation.',
    ],
    overviewImage: '/image/pumps.jpg',
    specifications: [
      { label: 'Flow Rates', value: 'Up to 5,000 m³/hr (22,000 GPM)' },
      { label: 'Discharge Head', value: 'Up to 1,200 meters (3,900 ft)' },
      { label: 'Drive Options', value: 'ATEX Explosion-Proof Motors, CAT/Perkins Diesel Drives' },
      { label: 'Wetted Metallurgy', value: 'Super Duplex, 316SS, Hastelloy, Cast Steel, Bronze' },
      { label: 'Seal Configurations', value: 'API 682 Single & Dual Cartridge Mechanical Seals' },
      { label: 'Skid Integration', value: 'Structural steel base, pulse dampers, relief valves, instrumentation' },
    ],
    applications: [
      'Crude oil shipping and booster stations',
      'High-pressure chemical injection (methanol, glycol, corrosion inhibitors)',
      'Produced water re-injection and effluent treatment',
      'Offshore platform firewater and utility water supply',
    ],
    relatedProductIds: ['valves', 'flanges'],
  },
  {
    id: 'flanges',
    number: '03',
    name: 'Precision Flanges, Piping & Fasteners',
    category: 'Flanges & Piping Spares',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    description:
      'Precision forged piping connections, high-integrity seal gaskets, heavy fasteners, and essential mechanical spare parts ready for prompt deployment to site.',
    highlights: [
      'Weld Neck, Blind, Slip-On & RTJ Flanges',
      'Spiral Wound Gaskets & Heavy Hex Fasteners',
      'Pipe Spools, Elbows, Reducers & O-rings',
      'Full Mill Test Traceability (MTR) Provided',
    ],
    standards: ['ASME B16.5', 'ASME B16.47', 'ASTM A105', 'MSS-SP-44', 'ASTM A193 B7'],
    heroHeadline: 'ASME-Grade Flanges, Piping Spools & Hardware',
    heroSubtext:
      'Precision-forged flanges, high-tensile stud bolts, metallic gaskets, and pipe fittings delivering zero-leakage joint integrity across high-pressure piping systems.',
    overviewHeadline: 'Complete piping connection components with 100% material traceability',
    overviewParagraphs: [
      'We maintain an extensive inventory of ASME B16.5 and B16.47 forged steel flanges, heavy hex stud bolts (ASTM A193 B7/2H), and spiral-wound gaskets engineered for leak-free performance in high-vibration and extreme-pressure piping systems.',
      'Every shipment includes full 3.1 Mill Test Certificates, Positive Material Identification (PMI) verification, and anti-corrosion protective coatings to ensure immediate readiness for site assembly.',
    ],
    overviewImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    specifications: [
      { label: 'Flange Types', value: 'Weld Neck, Blind, Slip-On, Socket Weld, Threaded, RTJ, Orifice' },
      { label: 'Pressure Classes', value: '150#, 300#, 600#, 900#, 1500#, 2500# / API 3000-10000' },
      { label: 'Dimensions', value: '1/2" to 60" Nominal Pipe Size (NPS)' },
      { label: 'Fasteners', value: 'Stud Bolts ASTM A193 B7/B7M/L7, Heavy Hex Nuts A194 2H/7' },
      { label: 'Gaskets', value: 'Spiral Wound SS316L/Graphite, Ring Type Joint (RTJ) Soft Iron/316' },
      { label: 'Traceability', value: '100% Heat Number Stamping & EN 10204 3.1 MTR Dossier' },
    ],
    applications: [
      'High-pressure gas compression & processing lines',
      'Offshore riser and subsea manifold tie-ins',
      'Plant shutdown maintenance and emergency flange turnarounds',
      'Hydrocarbon metering skids and storage tanks',
    ],
    relatedProductIds: ['valves', 'pumps'],
  },
];

export const CLIENTS: ClientItem[] = [
  {
    name: 'Newcross Exploration and Production Limited',
    shortName: 'Newcross E&P',
    sector: 'Exploration & Production',
    location: 'Lagos & Niger Delta',
    partnershipType: 'Equipment Supply & Logistics',
  },
  {
    name: 'Renaissance Energy Africa Limited',
    shortName: 'Renaissance Energy',
    sector: 'Integrated Energy Operations',
    location: 'Nigeria & West Africa',
    partnershipType: 'Strategic Procurement',
  },
  {
    name: 'Green Energy International Limited',
    shortName: 'Green Energy Int.',
    sector: 'Upstream Oil & Gas Operator',
    location: 'Rivers State, Nigeria',
    partnershipType: 'Field Materials & Haulage',
  },
  {
    name: "Carmel's Group",
    shortName: "Carmel's Group",
    sector: 'Energy Infrastructure & Construction',
    location: 'Port Harcourt, Nigeria',
    partnershipType: 'Mechanical Fabrication Support',
  },
  {
    name: 'Premiovin Solutions Nigeria Limited',
    shortName: 'Premiovin Solutions',
    sector: 'Energy Engineering Services',
    location: 'Nigeria',
    partnershipType: 'Technical Sourcing & Spare Parts',
  },
];

export const PARTNERS: PartnerItem[] = [
  {
    name: 'MANTRAC',
    focus: 'Heavy Equipment & Power Solutions',
    description:
      'Official authorized dealer for Caterpillar equipment, power generation engines, and heavy earthmoving machinery in Nigeria.',
    status: 'Authorized Alliance',
  },
];

export const ABOUT_CHECKLIST = [
  {
    title: 'Certified Quality & Environmental Systems',
    desc: 'Fully audited under ISO 9001:2015 and ISO 14001:2015 frameworks with zero tolerance for safety compromises.',
  },
  {
    title: 'Cost-Effective, Efficient Procurement Solutions',
    desc: 'Direct OEM purchasing channels and consolidated logistics that measurably shrink capital expenditure.',
  },
  {
    title: 'Reliable Haulage & Logistics Network',
    desc: 'Modern fleet, escort coordination, and real-time transit intelligence across riverine and inland corridors.',
  },
  {
    title: 'In-House Mechanical Fabrication Capability',
    desc: 'Dedicated Port Harcourt workshops offering precision structural welding, pipe spools, and hydrotesting.',
  },
];

export const STATS = [
  { value: '100%', label: 'HSE Compliance Commitment' },
  { value: 'ISO 9001 & 14001', label: 'Certified Management Systems' },
  { value: 'Port Harcourt', label: 'Strategic Operations Hub' },
  { value: '24/7', label: 'Rapid Response & Logistics' },
];
