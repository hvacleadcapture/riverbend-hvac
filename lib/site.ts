// Single source of truth for business info — change once, updates everywhere.
export const site = {
  name: 'Riverbend HVAC',
  tagline: "Chattanooga's Trusted HVAC Experts",
  shortPitch:
    "Family-owned heating, cooling & water heater pros serving the greater Chattanooga area, North Georgia & North Alabama.",
  phone: '(423) 309-7339',
  phoneRaw: '+14233097339',
  email: 'colby@riverbendhvac.com',
  address: {
    city: 'Chattanooga',
    state: 'TN',
    region: 'Tri-State',
  },
  hours: '24/7 — including nights, weekends & holidays',
  yearsInBusiness: 8,
  customers: 500,
  google: {
    rating: 5.0,
    reviews: 27,
    placeUrl: 'https://www.google.com/search?q=Riverbend+HVAC+Chattanooga',
  },
  social: {
    facebook: '',
    instagram: '',
  },
  cdn: 'https://www.riverbendhvac.com',
} as const;

export const services = [
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    short: 'AC repair, replacement & new installs',
    blurb:
      'Premium Carrier installations, fast repairs, and tune-ups that keep you cool through every Tennessee summer.',
    bullets: ['Carrier-certified installs', 'Same-day diagnostics', 'Energy-efficient systems'],
    icon: 'snowflake',
    image: '/Photo_Asset_PNGS/after_ac.png',
  },
  {
    slug: 'heating',
    title: 'Heating & Furnaces',
    short: 'Furnace, heat pump & boiler service',
    blurb:
      'Complete furnace and heat pump installation, repair, and maintenance to keep your home cozy all winter.',
    bullets: ['Gas & electric furnaces', 'Heat pump specialists', 'All major brands serviced'],
    icon: 'flame',
    image: '/Photo_Asset_PNGS/stone_carrier_2.png',
  },
  {
    slug: 'water-heaters',
    title: 'Water Heaters',
    short: 'Tank & tankless installation',
    blurb:
      'Hot water when you need it. We install and service gas, electric, and tankless water heaters with full warranty support.',
    bullets: ['Gas & electric units', 'Tankless specialists', 'Same-week installs'],
    icon: 'droplet',
    image: '/Photo_Asset_PNGS/after_carrier.png',
  },
  {
    slug: 'ductwork',
    title: 'Ductwork',
    short: 'Sealing, repair & cleaning',
    blurb:
      'Professional duct installation, repair, sealing, and cleaning for healthier indoor air and lower energy bills.',
    bullets: ['Duct sealing', 'Indoor air quality', 'Energy savings'],
    icon: 'wind',
    image: '/Photo_Asset_PNGS/before_carrier.png',
  },
  {
    slug: 'emergency',
    title: '24/7 Emergency Service',
    short: 'Day or night, weekends & holidays',
    blurb:
      "Lost heat at midnight? AC out on a 95° afternoon? We answer the phone 24/7 with no overtime fees on weekends.",
    bullets: ['No after-hours fees', 'Live human, not a bot', 'Same-day arrival'],
    icon: 'bell',
    image: '/Photo_Asset_PNGS/stone_carrier_1.png',
  },
  {
    slug: 'maintenance',
    title: 'Maintenance Plans',
    short: 'Annual tune-ups, priority service',
    blurb:
      'Affordable annual plans that include twice-yearly tune-ups, priority dispatch, and a discount on any repairs.',
    bullets: ['2 visits per year', 'Priority booking', '15% off all repairs'],
    icon: 'shield',
    image: '/Photo_Asset_PNGS/after_accompressor.png',
  },
] as const;

export const serviceAreas = {
  Tennessee: [
    'Chattanooga',
    'East Ridge',
    'Red Bank',
    'Hixson',
    'Ooltewah',
    'Soddy-Daisy',
    'Cleveland',
    'Signal Mountain',
  ],
  Georgia: ['Ringgold', 'Fort Oglethorpe', 'Dalton', 'Chickamauga', 'La Fayette'],
  Alabama: ['Fort Payne', 'Scottsboro', 'Stevenson', 'Bridgeport'],
} as const;

export const portfolio = [
  {
    title: 'Carrier System Install',
    location: 'Chattanooga, TN',
    before: '/Photo_Asset_PNGS/before_carrier.png',
    after: '/Photo_Asset_PNGS/after_carrier.png',
    description:
      'Full Carrier replacement on a 2,400 sq ft home — improved efficiency by an estimated 22%.',
  },
  {
    title: 'AC Unit Replacement',
    location: 'Hixson, TN',
    before: '/Photo_Asset_PNGS/before_ac.png',
    after: '/Photo_Asset_PNGS/after_ac.png',
    description: 'Old failing condenser swapped for a high-efficiency two-stage Carrier unit.',
  },
  {
    title: 'Compressor Upgrade',
    location: 'Ringgold, GA',
    before: '/Photo_Asset_PNGS/before_accompressor.png',
    after: '/Photo_Asset_PNGS/after_accompressor.png',
    description: 'Replaced corroded compressor with new variable-speed unit and a 10-year warranty.',
  },
] as const;

export const reviews = [
  {
    name: 'Bre R.',
    location: 'Chattanooga, TN',
    rating: 5,
    text: "Colby and his team showed up the same day, diagnosed the problem in 15 minutes, and had us cool again that afternoon. Fair price, no upsell. We will only call Riverbend.",
  },
  {
    name: 'Mike S.',
    location: 'Hixson, TN',
    rating: 5,
    text: 'Replaced our entire system with a new Carrier unit. Crew was clean, on-time, and the price beat two other quotes. House has never felt this comfortable.',
  },
  {
    name: 'Jenna T.',
    location: 'Ooltewah, TN',
    rating: 5,
    text: "Furnace died at 11pm in February. They answered the phone, were at our house in under an hour, and had heat back on before midnight. Lifesavers.",
  },
  {
    name: 'David K.',
    location: 'Ringgold, GA',
    rating: 5,
    text: "Finally a contractor that actually shows up when they say. Honest pricing, great communication, and the install looks like a piece of art.",
  },
] as const;

export const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'We proudly serve the tri-state area: Chattanooga, Hixson, Ooltewah, Cleveland and surrounding TN cities, plus Ringgold, Fort Oglethorpe and Dalton in North Georgia, and Fort Payne, Scottsboro, Stevenson, and Bridgeport in North Alabama.',
  },
  {
    q: 'Do you offer 24/7 emergency service?',
    a: 'Yes. HVAC emergencies don\'t wait for business hours. Our 24/7 emergency team is available nights, weekends, and holidays at no extra fee.',
  },
  {
    q: 'What brands do you install?',
    a: 'We specialize in Carrier heating and cooling equipment — one of the most trusted names in HVAC with over 100 years of innovation. We also service all major brands.',
  },
  {
    q: 'How often should I service my HVAC system?',
    a: 'We recommend twice a year — once before cooling season (spring) and once before heating season (fall). Regular maintenance extends system life and reduces energy bills.',
  },
  {
    q: 'Do you provide free estimates?',
    a: 'Absolutely. We provide free, no-obligation estimates for all installations and major repairs. Call (423) 309-7339 or fill out the form and we\'ll be in touch within 1 hour.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes — fully licensed and insured with 8+ years of experience. Every technician is background-checked and factory-trained.',
  },
] as const;
