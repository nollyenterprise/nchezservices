export type ServiceId = 
  | 'power'
  | 'oilgas'
  | 'renewable'
  | 'infrastructure'
  | 'commissioning'
  | 'operations'
  | 'equipment'
  | 'haulage'
  | 'procurement'
  | 'fabrication'
  | 'general';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  specs: string[];
  icon: string;
  image?: string;
  heroHeadline?: string;
  heroSubtext?: string;
  overviewHeadline?: string;
  overviewParagraphs?: string[];
  overviewImage?: string;
  coreCapabilities?: Array<{ title: string; description: string }>;
  keyDeliverables?: string[];
  relatedServiceIds?: ServiceId[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  standards: string[];
  number?: string;
  heroHeadline?: string;
  heroSubtext?: string;
  overviewHeadline?: string;
  overviewParagraphs?: string[];
  overviewImage?: string;
  specifications?: Array<{ label: string; value: string }>;
  applications?: string[];
  relatedProductIds?: string[];
}

export interface ClientItem {
  name: string;
  shortName: string;
  sector: string;
  location: string;
  partnershipType: string;
}

export interface PartnerItem {
  name: string;
  focus: string;
  description: string;
  status: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  company: string;
  serviceInterest: ServiceId;
  message: string;
}
