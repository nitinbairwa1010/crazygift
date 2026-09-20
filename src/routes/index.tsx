import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight, Building2, Check, ChevronDown, Factory, Gift, GraduationCap,
  Handshake, HeartHandshake, Hospital, Hotel, Instagram, Menu, MessageCircle,
  PackageCheck, Palette, Phone, School, ShieldCheck, Sparkles, Store, Truck,
  Upload, Users, WalletCards, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BrandMark } from "@/components/BrandMark";
import { audiences, giftPackages } from "@/data/gifts";
import { openWhatsApp, whatsappUrl } from "@/lib/whatsapp";
import heroImage from "@/assets/crazygift-hero.jpg";
import collectionImage from "@/assets/hamper-collection.jpg";
import brandedImage from "@/assets/branded-boxes.jpg";
import openBoxImage from "@/assets/open-box-detail.jpg";

const metaDescription = "CrazyGift provides premium customized Diwali gift hampers for companies, factories, coaching institutes, schools, employees, workers and clients in Kota. Bulk orders, custom branding and WhatsApp ordering.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CrazyGift | Premium Diwali & Corporate Gifts in Kota" },
      { name: "description", content: metaDescription },
      { name: "keywords", content: "Diwali gifts Kota, Corporate Diwali gifts Kota, Diwali gift hampers Kota, Corporate gifting Kota, Employee Diwali gifts, Bulk Diwali gifts Kota, Customized Diwali hampers, Corporate gifting Rajasthan" },
      { property: "og:title", content: "CrazyGift | Premium Diwali & Corporate Gifts in Kota" },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "CrazyGift", description: metaDescription, telephone: "+917414821377", email: "crazygift1010@gmail.com", address: { "@type": "PostalAddress", addressLocality: "Kota", addressRegion: "Rajasthan", addressCountry: "IN" }, areaServed: "Kota, Rajasthan", priceRange: "₹₹" }) }],
  }),
  component: CrazyGiftPage,
});

const navItems = [
  ["Home", "home"], ["Gift Hampers", "hampers"], ["Custom Branding", "branding"],
  ["Who We Serve", "serve"], ["How It Works", "process"], ["Bulk Orders", "bulk"],
  ["About", "why"], ["Contact", "contact"],
];

const iconMap = { Building2, Factory, Store, GraduationCap, School, Hospital, Hotel, Handshake };

function SectionTitle({ eyebrow, title, copy, dark = false }: { eyebrow: string; title: string; copy?: string; dark?: boolean }) {
  return <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
    <h2 className={`text-4xl font-semibold leading-tight md:text-5xl ${dark ? "text-secondary-foreground" : "text-foreground"}`}>{title}</h2>
    {copy && <p className={`mt-4 text-sm leading-7 md:text-base ${dark ? "text-secondary-foreground/65" : "text-muted-foreground"}`}>{copy}</p>}
  </div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/20 bg-ink/95 text-secondary-foreground backdrop-blur-xl">
    <div className="section-shell flex h-[72px] items-center justify-between">
      <BrandMark />
      <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-[11px] font-semibold uppercase text-secondary-foreground/70 transition-colors hover:text-primary">{label}</a>)}
      </nav>
      <div className="hidden items-center gap-2 md:flex">
        <Button asChild variant="goldOutline" size="sm"><a href="tel:+917414821377"><Phone />Call now</a></Button>
        <Button asChild variant="whatsapp" size="sm"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a></Button>
      </div>
      <Button type="button" variant="ghost" size="icon" className="text-secondary-foreground md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav aria-label="Mobile navigation" className="border-t border-primary/20 bg-ink px-4 pb-5 md:hidden">
      {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-primary/10 py-3 text-sm text-secondary-foreground/80">{label}</a>)}
    </nav>}
  </header>;
}

function Hero() {
  return <section id="home" className="luxury-grid relative overflow-hidden bg-ink pt-[72px] text-secondary-foreground">
    <div className="section-shell grid min-h-[calc(100vh-72px)] items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
      <div className="reveal relative z-10">
        <p className="mb-5 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary"><Sparkles className="size-3" /> Premium Diwali Gifting | Kota</p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-[0.96] sm:text-6xl lg:text-7xl">Diwali Gifts,<br/><span className="text-primary">Made Special</span><br/>for Your Team.</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-secondary-foreground/70">From 50 to 2,000+ gifts, we create customized Diwali hampers with premium packaging, your logo, company name and personalized message.</p>
        <p className="mt-4 font-display text-2xl font-semibold text-primary">Your Brand. Your Gift. Your Way.</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="whatsapp" size="lg"><a href={whatsappUrl("Hello CrazyGift, I am interested in customized Diwali gifts. Please share your designs and quotation.")} target="_blank" rel="noreferrer"><MessageCircle />Order on WhatsApp</a></Button>
          <Button asChild variant="goldOutline" size="lg"><a href="tel:+917414821377"><Phone />Call for Bulk Order</a></Button>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-primary/20 pt-6 sm:grid-cols-4">
          {["Minimum 50", "Custom Branding", "Bulk Orders", "Kota Delivery"].map(item => <span key={item} className="flex items-center gap-2 text-xs text-secondary-foreground/70"><Check className="size-3 text-primary" />{item}</span>)}
        </div>
      </div>
      <div className="product-float relative mx-auto w-full max-w-[640px]">
        <div className="absolute -inset-3 border border-primary/20" />
        <img src={heroImage} alt="Luxury black and gold CrazyGift Diwali hamper with dry fruits, chocolates and diya" width={1408} height={1200} fetchPriority="high" className="relative aspect-[7/6] w-full object-cover shadow-2xl" />
        <div className="absolute -bottom-5 left-4 bg-background px-5 py-4 text-foreground shadow-luxury sm:left-[-18px]"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Starting from</p><p className="font-display text-3xl font-bold">₹259 <span className="font-sans text-xs font-medium text-muted-foreground">onwards</span></p></div>
      </div>
    </div>
  </section>;
}

function WhoWeServe() {
  return <section id="serve" className="py-20 md:py-28"><div className="section-shell">
    <SectionTitle eyebrow="Designed for organizations" title="Gifts For Every Team. Every Occasion." copy="From employees to clients, create a memorable Diwali experience under your organization's name." />
    <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {audiences.map(([title, copy, icon]) => { const Icon = iconMap[icon]; return <article key={title} className="group bg-card p-6 transition-colors hover:bg-secondary hover:text-secondary-foreground md:p-7"><Icon className="mb-8 size-7 text-primary transition-transform group-hover:-translate-y-1"/><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground group-hover:text-secondary-foreground/60">{copy}</p></article>; })}
    </div>
  </div></section>;
}

function GiftCollection() {
  return <section id="hampers" className="bg-ivory-deep py-20 md:py-28"><div className="section-shell">
    <SectionTitle eyebrow="Curated collections" title="Our Diwali Gift Collection" copy="Choose a package or create a completely customized hamper." />
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {giftPackages.map((gift, index) => <article key={gift.name} className={`group relative overflow-hidden border bg-card ${gift.featured ? "border-primary" : "border-border"}`}>
        {gift.featured && <span className="absolute right-0 top-0 z-10 bg-primary px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-primary-foreground">Most selected</span>}
        <div className="overflow-hidden"><img src={collectionImage} alt={`${gift.name} premium Diwali gift hamper presentation`} loading="lazy" width={1408} height={1104} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: `${[18,45,70,90][index]}% center` }} /></div>
        <div className="p-6"><div className="flex items-end justify-between border-b border-border pb-4"><h3 className="text-3xl font-semibold">{gift.name}</h3><p className="text-right"><span className="font-display text-3xl font-bold text-primary">{gift.price}</span><span className="block text-[10px] text-muted-foreground">onwards · min. 50</span></p></div>
          <p className="mt-4 text-sm text-muted-foreground">{gift.description}</p>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em]">Inside the box</p>
          <ul className="mt-3 space-y-2">{gift.items.map(item => <li key={item} className="flex gap-2 text-xs text-muted-foreground"><Check className="mt-0.5 size-3 shrink-0 text-primary" />{item}</li>)}</ul>
          <p className="mt-5 text-xs font-semibold">Customization: <span className="font-normal text-muted-foreground">{gift.customization.join(" · ")}</span></p>
          <Button asChild variant="luxury" className="mt-6 w-full"><a target="_blank" rel="noreferrer" href={whatsappUrl(`Hello CrazyGift,\nI am interested in the ${gift.name} Diwali Gift Hamper.\n\nQuantity:\nCompany/Institute:\nDelivery Location:\n\nPlease share available designs and quotation.`)}><MessageCircle />Order {gift.name.titleCase ? gift.name : gift.name.charAt(0) + gift.name.slice(1).toLowerCase()}</a></Button>
        </div>
      </article>)}
    </div>
    <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-muted-foreground">Starting prices shown above. Final pricing depends on quantity, selected products, customization and packaging requirements.</p>
  </div></section>;
}

function CustomBranding() {
  const options = ["Company Logo", "Company Name", "Custom Box Design", "Custom Colors", "Personalized Greeting Card", "Ribbon Branding", "Thank You Message", "Personalized Names", "Custom Packaging"];
  return <section id="branding" className="overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-28"><div className="section-shell">
    <SectionTitle dark eyebrow="Our signature service" title="Your Brand. Your Gift. Your Way." copy="Make every gift look like it came directly from your organization." />
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative"><img src={brandedImage} alt="Custom branded corporate gift boxes for factories, institutes and showrooms" loading="lazy" width={1408} height={1104} className="aspect-[7/6] w-full object-cover"/><div className="absolute bottom-4 left-4 right-4 border border-primary/30 bg-ink/90 p-4 backdrop-blur"><div className="flex items-center justify-between gap-3"><div><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary">CrazyGift customization</p><p className="mt-1 font-display text-xl">“Diwali Greetings from Your Company Family”</p></div><Palette className="size-7 shrink-0 text-primary" /></div></div></div>
      <div><p className="text-base leading-8 text-secondary-foreground/70">Whether you are a Company, Factory, Showroom, Coaching Institute, School, College, Hospital or Business, CrazyGift can create customized Diwali packaging in your organization’s name.</p>
        <div className="my-7 border-y border-primary/20 py-6"><p className="text-xs uppercase tracking-[0.18em] text-secondary-foreground/50">From generic packaging</p><ArrowRight className="my-3 size-5 rotate-90 text-primary"/><p className="font-display text-3xl text-primary">To a gift that is unmistakably yours.</p></div>
        <div className="grid grid-cols-2 gap-3">{options.map(option => <span key={option} className="flex items-center gap-2 text-xs text-secondary-foreground/70"><Check className="size-3 text-primary"/>{option}</span>)}</div>
        <Button asChild variant="luxury" size="lg" className="mt-8"><a href={whatsappUrl("Hello CrazyGift, I want to create a custom branded Diwali gift for my organization. Please share options and quotation.")} target="_blank" rel="noreferrer">Create My Branded Gift <ArrowRight /></a></Button>
      </div>
    </div>
  </div></section>;
}

const selectClass = "h-12 w-full border border-input bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";

function GiftBuilder() {
  const [form, setForm] = useState({ type: "Company", quantity: "50+", budget: "₹259", branding: "Logo + Company Name", location: "Kota, Rajasthan", requirement: "" });
  const change = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));
  const submit = (e: FormEvent) => { e.preventDefault(); openWhatsApp(`Hello CrazyGift,\n\nI want customized Diwali gifts.\n\nOrganization Type: ${form.type}\nQuantity: ${form.quantity}\nBudget Per Gift: ${form.budget}\nBranding: ${form.branding}\nDelivery Location: ${form.location}\nAdditional Requirement: ${form.requirement || "Not specified"}\n\nPlease share suitable designs and quotation.`); };
  return <section className="py-20 md:py-28"><div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
    <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Build your hamper</p><h2 className="mt-3 text-4xl font-semibold md:text-5xl">Create Your Custom Diwali Gift</h2><p className="mt-5 leading-7 text-muted-foreground">Chahe 50 gifts chahiye ya 2,000 — hum aapke budget, quantity aur branding ke according gifts prepare karte hain.</p><div className="mt-8 overflow-hidden"><img src={openBoxImage} alt="Top view of a customized premium Diwali hamper" loading="lazy" width={1408} height={1104} className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"/></div></div>
    <form onSubmit={submit} className="grid gap-5 border border-border bg-card p-5 shadow-luxury sm:grid-cols-2 md:p-8">
      <Field label="1. I am ordering for"><select className={selectClass} value={form.type} onChange={e => change("type", e.target.value)}>{["Company","Factory","Showroom","Coaching Institute","School","College","Hospital","Hotel","Business","Other"].map(x => <option key={x}>{x}</option>)}</select></Field>
      <Field label="2. Number of Gifts"><select className={selectClass} value={form.quantity} onChange={e => change("quantity", e.target.value)}>{["50+","100+","250+","500+","1000+","2000+"].map(x => <option key={x}>{x}</option>)}</select></Field>
      <Field label="3. Budget Per Gift"><select className={selectClass} value={form.budget} onChange={e => change("budget", e.target.value)}>{["₹259","₹499","₹799","₹999","₹1499+","Custom Budget"].map(x => <option key={x}>{x}</option>)}</select></Field>
      <Field label="4. Branding Required?"><select className={selectClass} value={form.branding} onChange={e => change("branding", e.target.value)}><option>Logo + Company Name</option><option>Full Custom Packaging</option><option>No Branding</option></select></Field>
      <Field label="5. Upload Logo (shared later)"><label className="flex h-12 cursor-pointer items-center justify-center gap-2 border border-dashed border-primary/60 bg-primary/5 text-xs font-semibold text-primary"><Upload className="size-4"/>Choose logo<input type="file" accept="image/*,.pdf" className="sr-only" aria-label="Upload your organization logo"/></label></Field>
      <Field label="6. Delivery Location"><Input required className="h-12 bg-card" value={form.location} onChange={e => change("location", e.target.value)} /></Field>
      <div className="sm:col-span-2"><Field label="7. Additional Requirement"><Textarea className="min-h-28 bg-card" placeholder="Items, packaging, colors or message..." value={form.requirement} onChange={e => change("requirement", e.target.value)} /></Field></div>
      <Button type="submit" variant="whatsapp" size="lg" className="sm:col-span-2"><MessageCircle />Get My Custom Quotation</Button>
      <p className="text-center text-[10px] text-muted-foreground sm:col-span-2">Your details open directly in WhatsApp. We do not store this information.</p>
    </form>
  </div></section>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]">{label}</span>{children}</label>; }

function BulkAndProcess() {
  return <><section id="bulk" className="bg-primary py-16"><div className="section-shell grid items-center gap-8 lg:grid-cols-[1fr_auto]">
    <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/60">Bulk order specialist</p><h2 className="mt-2 text-4xl font-semibold text-primary-foreground md:text-5xl">Planning Gifts for Your Entire Team?</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/75">Whether you need 50, 100, 500, 1,000 or 2,000+ hampers, we handle bulk gifting with customized branding and packaging.</p><div className="mt-6 flex flex-wrap gap-2">{["50+","100+","250+","500+","1000+","2000+"].map(x => <span key={x} className="border border-primary-foreground/30 px-4 py-2 text-sm font-bold text-primary-foreground">{x}</span>)}</div></div>
    <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Button asChild variant="secondary" size="lg"><a href={whatsappUrl("Hello CrazyGift, I need a bulk Diwali gift quotation. Please share suitable options.")} target="_blank" rel="noreferrer"><MessageCircle/>Get Bulk Quote</a></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground"><a href="tel:+917414821377"><Phone/>Call for Bulk Order</a></Button></div>
  </div></section>
  <section id="process" className="bg-secondary py-20 text-secondary-foreground md:py-28"><div className="section-shell"><SectionTitle dark eyebrow="Simple & transparent" title="How It Works" copy="Four easy steps. Personal support throughout."/><div className="grid gap-px bg-primary/20 md:grid-cols-4">{[["01","Tell Us Your Requirement"],["02","Choose Your Gift & Budget"],["03","We Customize Your Packaging"],["04","We Prepare & Deliver"]].map(([n,t]) => <div key={n} className="bg-secondary p-7"><span className="font-display text-5xl text-primary">{n}</span><h3 className="mt-8 text-2xl font-semibold">{t}</h3></div>)}</div></div></section></>;
}

function WhyAndGallery() {
  const why = [[ShieldCheck,"Premium Quality","Carefully selected gifting products"],[Palette,"Custom Branding","Your logo, name and personalized message"],[PackageCheck,"Bulk Order Specialist","Built for organizations and large teams"],[WalletCards,"Flexible Budgets","Gift solutions for different budgets"],[Truck,"Kota Delivery","Delivery across Kota"],[HeartHandshake,"Personal Support","Direct WhatsApp & phone assistance"]] as const;
  return <><section id="why" className="py-20 md:py-28"><div className="section-shell"><SectionTitle eyebrow="The CrazyGift difference" title="Why Choose CrazyGift?"/><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{why.map(([Icon,title,copy]) => <div key={title} className="border-t border-primary pt-5"><Icon className="size-7 text-primary"/><h3 className="mt-6 text-2xl font-semibold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{copy}</p></div>)}</div></div></section>
  <section className="bg-ivory-deep py-20 md:py-28"><div className="section-shell"><SectionTitle eyebrow="Product details" title="Made to Impress, From Every Angle" copy="Explore the presentation, premium contents and branding possibilities."/><div className="grid gap-4 md:grid-cols-12"><figure className="group overflow-hidden md:col-span-7"><img src={openBoxImage} alt="Open-box view showing dry fruits, chocolates, diya and premium packaging" loading="lazy" width={1408} height={1104} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></figure><div className="grid gap-4 sm:grid-cols-2 md:col-span-5 md:grid-cols-1"><figure className="group overflow-hidden"><img src={collectionImage} alt="Front and top views of the CrazyGift hamper collection" loading="lazy" width={1408} height={1104} className="aspect-[16/9] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></figure><figure className="group overflow-hidden"><img src={brandedImage} alt="Branding views for company, factory and institute gift boxes" loading="lazy" width={1408} height={1104} className="aspect-[16/9] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></figure></div></div></div></section></>;
}

function FromYourCompany() {
  return <section className="overflow-hidden bg-secondary text-secondary-foreground"><div className="section-shell grid min-h-[620px] items-center gap-10 py-20 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">A lasting impression</p><h2 className="mt-3 text-5xl font-semibold leading-none md:text-6xl">Give Gifts That Feel Truly Yours.</h2><p className="mt-6 max-w-xl leading-8 text-secondary-foreground/65">Imagine your employee receiving a beautifully packed Diwali gift with your company’s name, logo and message on it.</p><p className="mt-7 font-display text-3xl text-primary">Not just a gift.<br/>A gift from your organization.</p><Button asChild variant="luxury" size="lg" className="mt-8"><a href={whatsappUrl("Hello CrazyGift, I want a Diwali gift customized with my company logo and message.")} target="_blank" rel="noreferrer">Customize My Gift <ArrowRight/></a></Button></div><div className="relative"><img src={brandedImage} alt="Customized gift box carrying an organization's own logo and Diwali message" loading="lazy" width={1408} height={1104} className="aspect-[7/6] w-full object-cover opacity-75"/><div className="absolute inset-10 grid place-items-center border border-primary/60 bg-ink/75 p-8 text-center backdrop-blur-sm"><div><Gift className="mx-auto size-9 text-primary"/><p className="mt-5 text-xs uppercase tracking-[0.2em] text-primary">Your company logo</p><p className="mt-4 font-display text-4xl">Happy Diwali</p><p className="mt-3 text-sm text-secondary-foreground/60">With Best Wishes,<br/>Your Company</p></div></div></div></div></section>;
}

const faqs = [
  ["What is the minimum order?", "Our standard minimum order starts from 50 gifts."],
  ["Can you add our company logo?", "Yes. We offer company logo and branding customization."],
  ["Can we customize the gift contents?", "Yes, depending on quantity, budget and availability."],
  ["Do you deliver across Kota?", "Yes, we currently provide delivery across Kota."],
  ["Can we order 500+ gifts?", "Yes. Contact us for bulk quotation."],
  ["Can we get a custom box design?", "Yes, customized packaging can be discussed based on quantity."],
  ["How do I place an order?", "Send your requirement on WhatsApp or call our team."],
];

function ContactAndFaq() {
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const data = new FormData(e.currentTarget); openWhatsApp(`Hello CrazyGift,\n\nI want to enquire about Diwali gifts.\n\nFull Name: ${data.get("name")}\nCompany/Institute: ${data.get("company")}\nMobile: ${data.get("mobile")}\nEmail: ${data.get("email") || "Not provided"}\nOrganization Type: ${data.get("type")}\nNumber of Gifts: ${data.get("quantity")}\nBudget Per Gift: ${data.get("budget")}\nPreferred Package: ${data.get("package")}\nBranding Required: ${data.get("branding")}\nDelivery Location: ${data.get("location")}\nMessage: ${data.get("message") || "Not specified"}`); };
  return <><section className="py-20 md:py-28"><div className="section-shell"><SectionTitle eyebrow="Illustrative examples" title="Sample Customer Feedback" copy="These are demo examples only and should be replaced with actual customer feedback."/><div className="grid gap-5 md:grid-cols-3">{["The branded box presentation matched our company identity beautifully.","The bulk-order process felt clear, personal and easy to coordinate.","A polished gifting option for our faculty and support team."].map((x,i) => <blockquote key={x} className="border border-border bg-card p-7"><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">Sample feedback {i+1}</p><p className="mt-5 font-display text-2xl leading-snug">“{x}”</p><footer className="mt-6 text-xs text-muted-foreground">Demo testimonial — not a verified customer review</footer></blockquote>)}</div></div></section>
  <section id="contact" className="bg-ivory-deep py-20 md:py-28"><div className="section-shell grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Tell us your requirement</p><h2 className="mt-3 text-4xl font-semibold md:text-5xl">Let’s Plan Your Bulk Order</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Share the essentials and your complete requirement will open in WhatsApp for a personal quotation.</p><div className="mt-8 space-y-4"><a href="tel:+917414821377" className="flex items-center gap-4 border-b border-border pb-4"><Phone className="text-primary"/><span><b className="block text-sm">+91 7414821377</b><small className="text-muted-foreground">Primary call & WhatsApp</small></span></a><a href="tel:+916350288159" className="flex items-center gap-4 border-b border-border pb-4"><Phone className="text-primary"/><span><b className="block text-sm">+91 6350288159</b><small className="text-muted-foreground">Secondary phone</small></span></a><p className="flex items-center gap-4"><Truck className="text-primary"/><span className="text-sm">Delivery across Kota · Minimum 50 gifts</span></p><p className="flex items-center gap-4"><WalletCards className="text-primary"/><span className="text-sm">Payment options available</span></p></div></div>
    <form onSubmit={submit} className="grid gap-4 border border-border bg-card p-5 shadow-luxury sm:grid-cols-2 md:p-8">
      <Input required name="name" placeholder="Full Name *" className="h-12"/><Input required name="company" placeholder="Company / Institute Name *" className="h-12"/><Input required name="mobile" type="tel" inputMode="tel" pattern="[0-9 +()-]{10,18}" placeholder="Mobile Number *" className="h-12"/><Input name="email" type="email" placeholder="Email" className="h-12"/>
      <select required name="type" className={selectClass}><option value="">Organization Type *</option>{["Company","Factory","Showroom","Coaching Institute","School / College","Hospital","Hotel / Restaurant","Business","Other"].map(x=><option key={x}>{x}</option>)}</select><select required name="quantity" className={selectClass}><option value="">Number of Gifts *</option>{["50+","100+","250+","500+","1000+","2000+"].map(x=><option key={x}>{x}</option>)}</select>
      <Input required name="budget" placeholder="Budget Per Gift *" className="h-12"/><select required name="package" className={selectClass}><option value="">Preferred Package *</option>{["Mini","Super","Pro","Luxury","Custom"].map(x=><option key={x}>{x}</option>)}</select><select required name="branding" className={selectClass}><option value="">Branding Required? *</option><option>Logo + Company Name</option><option>Full Custom Packaging</option><option>No Branding</option></select><Input required name="location" defaultValue="Kota, Rajasthan" placeholder="Delivery Location *" className="h-12"/><Textarea name="message" placeholder="Message or special requirement" className="min-h-24 sm:col-span-2"/><Button type="submit" variant="whatsapp" size="lg" className="sm:col-span-2"><MessageCircle/>Send Requirement on WhatsApp</Button><p className="text-center text-[10px] text-muted-foreground sm:col-span-2">No information is saved on this website.</p>
    </form></div></section>
  <section id="faq" className="py-20 md:py-28"><div className="section-shell max-w-3xl"><SectionTitle eyebrow="Need to know" title="Frequently Asked Questions"/><Accordion type="single" collapsible>{faqs.map(([q,a],i) => <AccordionItem key={q} value={`faq-${i}`}><AccordionTrigger className="py-5 text-left text-base no-underline hover:no-underline">{q}</AccordionTrigger><AccordionContent className="pb-5 leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section></>;
}

function Footer() {
  return <><section className="bg-primary py-16 text-center"><div className="section-shell"><h2 className="text-5xl font-semibold text-primary-foreground md:text-6xl">Make This Diwali Memorable.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-primary-foreground/70">Tell us your quantity, budget and branding requirement. We’ll help create the right gift for your team.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="secondary" size="lg"><a href={whatsappUrl("Hello CrazyGift, I want to plan customized Diwali gifts for my team.")} target="_blank" rel="noreferrer"><MessageCircle/>Order on WhatsApp</a></Button><Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground"><a href="tel:+917414821377"><Phone/>Call Now</a></Button></div></div></section>
  <footer className="bg-ink pb-24 pt-16 text-secondary-foreground md:pb-8"><div className="section-shell grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><BrandMark/><p className="mt-5 text-sm leading-7 text-secondary-foreground/55">Premium customized Diwali gifting for companies, institutes, employees, workers, clients and business partners.</p></div><div><h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">Quick Links</h3><div className="mt-5 grid grid-cols-2 gap-3">{navItems.slice(0,7).map(([x,id])=><a key={id} href={`#${id}`} className="text-xs text-secondary-foreground/60 hover:text-primary">{x}</a>)}<a href="#faq" className="text-xs text-secondary-foreground/60 hover:text-primary">FAQ</a></div></div><div><h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">Contact</h3><div className="mt-5 space-y-3 text-xs text-secondary-foreground/60"><a className="block hover:text-primary" href="tel:+917414821377">+91 7414821377</a><a className="block hover:text-primary" href="tel:+916350288159">+91 6350288159</a><a className="block hover:text-primary" href="mailto:crazygift1010@gmail.com">crazygift1010@gmail.com</a><p>Kota, Rajasthan, India</p></div></div><div><h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-primary">Connect</h3><a href="https://instagram.com/crazygift45" target="_blank" rel="noreferrer" className="mt-5 flex items-center gap-2 text-sm text-secondary-foreground/60 hover:text-primary"><Instagram className="size-4"/>@crazygift45</a><p className="mt-5 text-xs text-secondary-foreground/40">Minimum order: 50 gifts<br/>Delivery: All Kota<br/>Online payment available</p></div></div><div className="section-shell mt-12 border-t border-primary/15 pt-6 text-center text-[10px] text-secondary-foreground/35">© 2026 CrazyGift. All Rights Reserved.</div></footer></>;
}

function FloatingContacts() {
  return <><a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp" className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-luxury transition-transform hover:scale-105 md:flex"><MessageCircle className="size-6"/></a><div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-primary/20 bg-ink p-2 md:hidden"><a href="tel:+917414821377" className="flex min-h-12 items-center justify-center gap-2 text-xs font-bold uppercase text-secondary-foreground"><Phone className="size-4 text-primary"/>Call Now</a><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 bg-whatsapp text-xs font-bold uppercase text-whatsapp-foreground"><MessageCircle className="size-4"/>WhatsApp</a></div></>;
}

function CrazyGiftPage() {
  return <><Navbar/><main><Hero/><WhoWeServe/><GiftCollection/><CustomBranding/><GiftBuilder/><BulkAndProcess/><WhyAndGallery/><FromYourCompany/><ContactAndFaq/></main><Footer/><FloatingContacts/></>;
}