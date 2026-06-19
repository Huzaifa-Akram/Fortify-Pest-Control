import {
  Home,
  Building2,
  Rat,
  Bug,
  BedDouble,
  ShieldAlert,
  SprayCan,
  ShieldCheck,
  ClipboardCheck,
  Footprints,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Fortify Pest Control Inc.",
  shortName: "Fortify Pest Control",
  phone: "431-481-7786",
  phoneHref: "tel:+14314817786",
  email: "info@fortifypest.ca",
  emailHref: "mailto:info@fortifypest.ca",
  region: "Manitoba",
  slogan:
    "Building a Fort Around Your Home and Business, One Pest-Free Property at a Time.",
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Emergency calls only" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "residential-pest-control",
    title: "Residential Pest Control",
    short: "Safe, effective protection for your home and family.",
    description:
      "Protect your home from unwanted pests with safe and effective treatment solutions tailored to your property and the season.",
    icon: Home,
  },
  {
    slug: "commercial-pest-control",
    title: "Commercial Pest Control",
    short: "Customized programs that keep businesses compliant.",
    description:
      "Customized pest management programs to keep businesses pest-free and compliant with health and safety standards.",
    icon: Building2,
  },
  {
    slug: "rodent-control",
    title: "Rodent Control",
    short: "Inspection, treatment, exclusion & prevention.",
    description:
      "Comprehensive inspection, treatment, exclusion, and prevention for mice and rats — sealing entry points so they stay out.",
    icon: Rat,
  },
  {
    slug: "ant-control",
    title: "Ant Control",
    short: "Eliminate colonies and stop them returning.",
    description:
      "Targeted treatments to eliminate ant infestations at the source and prevent future activity around your property.",
    icon: Footprints,
  },
  {
    slug: "cockroach-control",
    title: "Cockroach Control",
    short: "Fast, thorough roach elimination.",
    description:
      "Professional treatment plans designed to eliminate cockroaches quickly and effectively, including hard-to-reach harbourage areas.",
    icon: Bug,
  },
  {
    slug: "bed-bug-treatment",
    title: "Bed Bug Treatment",
    short: "Thorough inspection and full elimination.",
    description:
      "Thorough inspection and treatment solutions to eliminate bed bugs from your property at every stage of their life cycle.",
    icon: BedDouble,
  },
  {
    slug: "wasp-hornet-nest-removal",
    title: "Wasp & Hornet Nest Removal",
    short: "Safe removal to protect everyone on site.",
    description:
      "Safe removal of wasp and hornet nests to protect your family, customers, and employees from painful stings.",
    icon: ShieldAlert,
  },
  {
    slug: "spider-control",
    title: "Spider Control",
    short: "Reduce activity and prevent infestations.",
    description:
      "Reduce spider activity and prevent infestations around your property with targeted interior and exterior treatments.",
    icon: Bug,
  },
  {
    slug: "preventative-pest-management",
    title: "Preventative Pest Management",
    short: "Stop pests before they start.",
    description:
      "Regular maintenance programs designed to stop pest problems before they start, keeping your property protected year-round.",
    icon: ShieldCheck,
  },
  {
    slug: "property-inspections",
    title: "Property Inspections",
    short: "Identify activity, entry points & risk.",
    description:
      "Detailed inspections to identify pest activity, entry points, and risk factors — with a clear plan to address them.",
    icon: ClipboardCheck,
  },
];

export const treatmentIcon = SprayCan;

export const serviceAreas = [
  "Winnipeg",
  "Brandon",
  "Winkler",
  "Morden",
  "Selkirk",
  "Steinbach",
];

export const whyChooseUs = [
  "Over 8 years of industry experience",
  "Professionally trained & certified technicians",
  "Eco-friendly pest control solutions",
  "Residential & commercial services",
  "Fast, reliable, and professional service",
  "100% satisfaction guarantee",
  "Locally owned & operated in Manitoba",
  "Dedicated to protecting your property",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/contact" },
];
