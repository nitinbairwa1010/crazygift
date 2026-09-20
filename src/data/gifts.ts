export type GiftPackage = {
  name: string;
  price: string;
  description: string;
  items: string[];
  customization: string[];
  featured?: boolean;
};

export const giftPackages: GiftPackage[] = [
  {
    name: "MINI",
    price: "₹259",
    description: "A thoughtful festive gesture for large teams.",
    items: ["Dry Fruits", "Chocolates", "Diya", "Greeting Card", "Premium Basic Packaging"],
    customization: ["Company Name", "Logo", "Greeting Card"],
  },
  {
    name: "SUPER",
    price: "₹499",
    description: "A polished hamper with an elevated festive touch.",
    items: ["Dry Fruits", "Chocolates", "Diya", "Greeting Card", "Decorative Item", "Premium Packaging"],
    customization: ["Logo", "Company Name", "Greeting Message"],
  },
  {
    name: "PRO",
    price: "₹799",
    description: "Premium selections for valued teams and clients.",
    items: ["Premium Dry Fruits", "Premium Chocolates", "Diya", "Decorative Item", "Greeting Card", "Company Branding", "Premium Packaging"],
    customization: ["Logo", "Company Name", "Greeting Message"],
    featured: true,
  },
  {
    name: "LUXURY",
    price: "₹999",
    description: "A statement gift for your most important relationships.",
    items: ["Premium Dry Fruits", "Premium Chocolates", "Diya", "Premium Decorative Items", "Greeting Card", "Custom Company Branding", "Luxury Packaging"],
    customization: ["Full Branding", "Custom Colors", "Personalized Message"],
  },
];

export const audiences = [
  ["Companies", "Corporate employees & office teams", "Building2"],
  ["Factories", "Workers, staff & supervisors", "Factory"],
  ["Showrooms", "Teams, customers & business partners", "Store"],
  ["Coaching Institutes", "Teachers, faculty & support staff", "GraduationCap"],
  ["Schools & Colleges", "Teachers, employees & staff", "School"],
  ["Hospitals", "Doctors, nurses & support staff", "Hospital"],
  ["Hotels & Restaurants", "Teams and business partners", "Hotel"],
  ["Clients & Dealers", "Professional relationship gifting", "Handshake"],
] as const;