import {
  Rat,
  Bug,
  BedDouble,
  ShieldAlert,
  SprayCan,
  Footprints,
  Hammer,
  Waypoints,
  Network,
  Zap,
  Bird,
  Leaf,
  Moon,
  Squirrel,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Fortify Pest Control Inc.",
  shortName: "Fortify Pest Control",
  phone: "431-481-7786",
  phoneHref: "tel:+14314817786",
  whatsappHref:
    "https://wa.me/14314817786?text=Hi%20Fortify%20Pest%20Control%2C%20I%27d%20like%20to%20get%20a%20quote.",
  email: "info@fortifypest.ca",
  emailHref: "mailto:info@fortifypest.ca",
  region: "Manitoba",
  address: {
    street: "3015 Pembina Hwy",
    city: "Winnipeg",
    province: "MB",
    postalCode: "R3T 6H9",
    country: "CA",
    full: "3015 Pembina Hwy, Winnipeg, MB R3T 6H9",
  },
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=3015%20Pembina%20Hwy%2C%20Winnipeg%2C%20MB%20R3T%206H9",
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
  image: string;
  features: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "bed-bug-control",
    title: "Bed Bug Control",
    short: "Discreet, thorough treatments at every life stage.",
    description:
      "Bed bugs spread fast and are notoriously hard to kill. Our technicians perform a detailed inspection of mattresses, furniture, and baseboards, then apply targeted treatments that eliminate bed bugs at every stage of their life cycle.",
    image: "/services/bed-bug-control.png",
    features: [
      "Full property inspection & infestation mapping",
      "Treatment of eggs, nymphs & adult bed bugs",
      "Follow-up visits to confirm complete elimination",
    ],
    icon: BedDouble,
  },
  {
    slug: "cockroach-control",
    title: "Cockroach Control",
    short: "Fast, targeted elimination — even in hidden harbourages.",
    description:
      "Cockroaches contaminate food and multiply quickly in warm, hidden spaces. We combine gel baits, targeted applications, and sanitation guidance to wipe out infestations in kitchens, basements, and hard-to-reach harbourage areas.",
    image: "/services/cockroach-control.jpg",
    features: [
      "Gel bait & residual barrier treatments",
      "Kitchen, bathroom & basement coverage",
      "Prevention advice to stop reinfestation",
    ],
    icon: Bug,
  },
  {
    slug: "rodent-control",
    title: "Rodent Control",
    short: "Inspection, removal & exclusion for mice and rats.",
    description:
      "Mice and rats gnaw wiring, contaminate food, and spread disease. We locate every entry point, remove the rodents, and seal your home or business so they can't come back.",
    image: "/services/rodent-control.jpg",
    features: [
      "Full inspection & entry point identification",
      "Safe, tamper-resistant bait stations & traps",
      "Exclusion sealing & prevention plan",
    ],
    icon: Rat,
  },
  {
    slug: "argentine-ant-control",
    title: "Argentine Ant Control",
    short: "Colony-level treatment for fast-spreading Argentine ants.",
    description:
      "Argentine ants form massive interconnected colonies that can quickly overwhelm a property. We use non-repellent treatments and baiting programs that reach the queens — not just the ants you see on the trail.",
    image: "/services/argentine-ant-control.jpg",
    features: [
      "Colony & trail mapping",
      "Bait programs that reach the queens",
      "Exterior perimeter defence",
    ],
    icon: Footprints,
  },
  {
    slug: "carpenter-ant-control",
    title: "Carpenter Ant Control",
    short: "Protect your structure from wood-destroying ants.",
    description:
      "Carpenter ants tunnel through structural wood to build their nests, causing serious damage over time. We track down parent and satellite nests, eliminate them, and help you correct the moisture conditions that attracted them.",
    image: "/services/carpenter-ant-control.jpg",
    features: [
      "Parent & satellite nest location",
      "Targeted dust & residual treatments",
      "Moisture & wood-damage guidance",
    ],
    icon: Hammer,
  },
  {
    slug: "acrobat-ant-control",
    title: "Acrobat Ant Control",
    short: "Targeted removal of ants nesting in walls & wood.",
    description:
      "Acrobat ants nest in moisture-damaged wood and wall voids, often following wires and pipes indoors. We eliminate active nests and treat the trails and entry points they use to get inside.",
    image: "/services/acrobat-ant-control.jpg",
    features: [
      "Nest & trail identification",
      "Wall-void & entry point treatment",
      "Prevention of repeat activity",
    ],
    icon: Waypoints,
  },
  {
    slug: "spider-control",
    title: "Spider Control",
    short: "Interior & exterior treatments that keep spiders out.",
    description:
      "Spider webs around windows, decks, and eaves make a property feel unkempt — and some species bite. Our interior and exterior treatments reduce spider activity and knock down the insect populations they feed on.",
    image: "/services/spider-control.jpg",
    features: [
      "Web removal & harbourage treatment",
      "Exterior perimeter barrier",
      "Reduced insect prey population",
    ],
    icon: Network,
  },
  {
    slug: "wasp-control",
    title: "Wasp Control",
    short: "Safe nest removal to protect family & staff.",
    description:
      "Wasps nesting near doorways, decks, and playgrounds put your family, customers, and employees at risk of painful stings. We safely remove active nests and treat the area to discourage rebuilding.",
    image: "/services/wasp-control.jpg",
    features: [
      "Safe removal of active nests",
      "Treatment of high-risk nesting spots",
      "Seasonal prevention options",
    ],
    icon: Zap,
  },
  {
    slug: "hornet-control",
    title: "Hornet Control",
    short: "Professional removal of aggressive hornet nests.",
    description:
      "Hornets defend their nests aggressively and can sting repeatedly. Our technicians use professional equipment to remove hornet nests safely — from ground level to rooflines and trees.",
    image: "/services/hornet-control.jpg",
    features: [
      "Protective, professional-grade removal",
      "Roofline, tree & wall-void nests",
      "Area treatment to prevent return",
    ],
    icon: ShieldAlert,
  },
  {
    slug: "pigeon-control",
    title: "Pigeon Control",
    short: "Humane deterrents that keep pigeons off your building.",
    description:
      "Pigeon droppings damage roofs, clog gutters, and create health hazards. We install humane deterrents — netting, spikes, and exclusion — that keep pigeons off ledges, signs, and rooftops for good.",
    image: "/services/pigeon-control.jpg",
    features: [
      "Humane netting, spikes & deterrents",
      "Roost cleanup & sanitation",
      "Long-term exclusion solutions",
    ],
    icon: Bird,
  },
  {
    slug: "maple-bug-control",
    title: "Maple Bug Control",
    short: "Stop maple bugs swarming your walls each fall.",
    description:
      "Maple bugs (boxelder bugs) swarm sun-warmed walls in fall and slip inside to overwinter. We treat exterior gathering points and seal entryways so they stay outside where they belong.",
    image: "/services/maple-bug-control.jpg",
    features: [
      "Exterior swarm treatments",
      "Entry point sealing",
      "Fall prevention programs",
    ],
    icon: Leaf,
  },
  {
    slug: "bat-control",
    title: "Bat Control",
    short: "Humane bat exclusion that keeps them out for good.",
    description:
      "Bats in an attic leave behind droppings and health risks — but they're protected and must be handled humanely. We install one-way exclusion doors so bats leave safely and can't return, then seal every gap they used.",
    image: "/services/bat-control.png",
    features: [
      "Humane one-way exclusion doors",
      "Full entry point sealing",
      "Attic inspection & cleanup guidance",
    ],
    icon: Moon,
  },
  {
    slug: "squirrel-control",
    title: "Squirrel Control",
    short: "Humane squirrel removal & entry-point repair.",
    description:
      "Squirrels chew through soffits, vents, and wiring to nest in attics. We humanely remove them, repair the damage, and seal entry points so your attic stays wildlife-free.",
    image: "/services/squirrel-control.jpg",
    features: [
      "Humane removal & one-way doors",
      "Entry point repair & sealing",
      "Attic damage assessment",
    ],
    icon: Squirrel,
  },
];

/* Curated picks for the home-page preview — one card per pest family */
const featuredSlugs = [
  "bed-bug-control",
  "cockroach-control",
  "rodent-control",
  "carpenter-ant-control",
  "spider-control",
  "wasp-control",
];

export const featuredServices = featuredSlugs.map(
  (slug) => services.find((s) => s.slug === slug)!,
);

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
  "Over a decade of industry experience",
  "Professionally trained & certified technicians",
  "Eco-friendly pest control solutions",
  "Residential & commercial services",
  "Fast, reliable, and professional service",
  "100% satisfaction guarantee",
  "Locally owned & operated in Manitoba",
  "Dedicated to protecting your property",
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Are your pest control treatments safe for children and pets?",
    a: "Yes. We use eco-friendly, professionally approved products and apply them precisely where pests hide — not across open living spaces. Your technician will explain any short re-entry or airing-out times so your family and pets stay comfortable and safe.",
  },
  {
    q: "Do you offer free inspections and quotes?",
    a: "Absolutely. Every job starts with a free, no-obligation inspection so we can confirm exactly what you're dealing with and give you a clear, upfront quote before any work begins.",
  },
  {
    q: "How quickly can you come out?",
    a: "For Winnipeg and most surrounding Manitoba communities we can usually schedule an inspection within a day or two, and we keep room in the calendar for urgent problems like wasps or rodents. Give us a call and we'll find you the soonest available slot.",
  },
  {
    q: "What happens if the pests come back?",
    a: "Every service is backed by our 100% satisfaction guarantee. If pests return within the treatment window, so do we — at no extra charge — until the problem is fully resolved.",
  },
  {
    q: "Do you handle both homes and businesses?",
    a: "We do. We provide discreet residential service as well as tailored commercial programs for restaurants, offices, rental properties, and more, with flexible scheduling that keeps disruption to a minimum.",
  },
  {
    q: "Which areas do you serve?",
    a: "We're locally owned and operated, serving Winnipeg, Brandon, Winkler, Morden, Selkirk, Steinbach, and the surrounding communities throughout Manitoba.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/contact" },
];
