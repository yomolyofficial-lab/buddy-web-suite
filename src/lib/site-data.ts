export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  category: string;
  badge?: string;
};

export const tools: Tool[] = [
  { slug: "chatgpt-plus", name: "ChatGPT Plus", tagline: "GPT-4 class reasoning & faster responses", price: "PKR 2,499", category: "AI", badge: "-30%" },
  { slug: "canva-pro", name: "Canva Pro", tagline: "Pro templates, brand kit & magic resize", price: "PKR 1,299", category: "Design", badge: "-55%" },
  { slug: "midjourney", name: "Midjourney", tagline: "Studio-grade AI image generation", price: "PKR 3,999", category: "AI" },
  { slug: "adobe-cc", name: "Adobe Creative Cloud", tagline: "All 20+ Adobe apps in one plan", price: "PKR 6,500", category: "Design", badge: "-40%" },
  { slug: "office-365", name: "Microsoft Office 365", tagline: "Word, Excel, PowerPoint + 1TB OneDrive", price: "PKR 4,999", category: "Productivity" },
  { slug: "nord-vpn", name: "NordVPN", tagline: "Fast, secure VPN with global servers", price: "PKR 900", category: "Privacy" },
  { slug: "grammarly", name: "Grammarly Premium", tagline: "Advanced grammar, tone & clarity AI", price: "PKR 1,499", category: "Writing", badge: "-70%" },
  { slug: "notion", name: "Notion AI", tagline: "Docs, wikis & AI workspace in one", price: "PKR 1,899", category: "Productivity" },
  { slug: "cursor", name: "Cursor Pro", tagline: "AI pair-programmer in your editor", price: "PKR 4,200", category: "Dev" },
  { slug: "envato", name: "Envato Elements", tagline: "Unlimited assets, fonts & templates", price: "PKR 2,300", category: "Design", badge: "-60%" },
  { slug: "coursera", name: "Coursera Plus", tagline: "Unlimited courses & certificates", price: "PKR 3,200", category: "Learning" },
  { slug: "quillbot", name: "QuillBot Premium", tagline: "Paraphrasing & grammar tools", price: "PKR 900", category: "Writing" },
];

export const services = [
  { slug: "affiliate-program", title: "Affiliate Program", desc: "Earn recurring commissions on every referral." },
  { slug: "physical-products", title: "Physical Products", desc: "Smart gadgets shipped to your doorstep." },
  { slug: "courses-hub", title: "Courses Hub", desc: "Premium courses across business, design & code." },
  { slug: "tools", title: "All AI Tools", desc: "100+ premium AI tools at the best price." },
  { slug: "smm-panel", title: "SMM Panel", desc: "Real followers, views & engagement at scale." },
  { slug: "services", title: "Growth Services", desc: "Done-for-you marketing, SEO & branding." },
  { slug: "reviews", title: "Customer Reviews", desc: "Real stories from 12,000+ happy users." },
  { slug: "giveaways", title: "Giveaways", desc: "Free premium assets every single week." },
];

export const stats = [
  { value: "12K+", label: "Happy Users" },
  { value: "500+", label: "Premium Tools" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Real Support" },
];

export const nav = [
  { label: "Tools", to: "/tools" as const },
  { label: "Services", to: "/services" as const },
  { label: "Courses Hub", to: "/courses-hub" as const },
  { label: "SMM Panel", to: "/smm-panel" as const },
  { label: "Giveaways", to: "/giveaways" as const },
  { label: "Affiliate", to: "/affiliate-program" as const },
  { label: "Reviews", to: "/reviews" as const },
];
