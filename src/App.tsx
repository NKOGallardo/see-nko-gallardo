
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Palette,
  Sparkles,
  Layers,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Instagram,
  ExternalLink,
  Rocket,
  Target,
  LifeBuoy,
  Quote,
} from "lucide-react";

function ScrollReveal({
  children,
  direction = "left",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-${direction} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}


export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          <span className="text-foreground">NKO</span>
          <span className="text-gradient">CODING</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-gradient-accent text-primary-foreground text-sm font-semibold px-5 py-2 shadow-[var(--shadow-elevated)] hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24"
      style={{ backgroundImage: "var(--gradient-hero-glow)" }}
    >
      <div className="max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-muted-foreground mb-8">
          <Sparkles className="h-3.5 w-3.5" />
          NKO CODING — Premium Web Development
        </div>
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]">
          Build Websites That<br />
          <em className="not-italic text-gradient italic font-semibold">Stand Out</em>
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          I design and develop modern, fast, and responsive websites for brands that want real results.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-full bg-gradient-accent text-primary-foreground font-semibold px-7 py-3.5 shadow-[var(--shadow-elevated)] hover:opacity-90 transition inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#projects"
            className="rounded-full border border-border bg-surface/60 text-foreground font-semibold px-7 py-3.5 hover:bg-surface transition"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { icon: Code2, title: "Web Development", desc: "Fast, responsive, and pixel-perfect websites from landing pages to complex web applications — built to convert.", bullets: ["Responsive design", "Performance optimized", "Cross-browser compatible"] },
  { icon: Gauge, title: "SEO & Performance", desc: "We build search-engine-ready websites with technical SEO baked into every line of code from the start.", bullets: ["On-page SEO", "Core Web Vitals", "Google Analytics"] },
  { icon: Palette, title: "UI/UX Design", desc: "Thoughtful, user-centred design that guides visitors naturally toward action and builds lasting brand trust.", bullets: ["Wireframes & prototypes", "Brand alignment", "Interaction design"] },
  { icon: Sparkles, title: "Custom Branding", desc: "From logo identity to full brand systems — we create cohesive visual identities that leave lasting impressions.", bullets: ["Logo design", "Color & typography", "Brand guidelines"] },
  { icon: Layers, title: "Web Apps", desc: "Full-featured web applications with backend integrations, databases, authentication, and real-time functionality.", bullets: ["Custom dashboards", "API integrations", "CMS solutions"] },
  { icon: ShieldCheck, title: "Maintenance", desc: "Ongoing support, updates, security patches, and performance monitoring to keep your site fast and secure.", bullets: ["Monthly updates", "Security monitoring", "Priority support"] },
];

function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="left">
          <SectionEyebrow>What We Do</SectionEyebrow>
          <SectionTitle>
            Services Built for <em className="not-italic text-gradient italic">Growth</em>
          </SectionTitle>
          <SectionLead>Every service is carefully executed to ensure your digital presence performs as hard as you do.</SectionLead>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-surface p-8 hover:bg-surface-elevated transition"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-primary-foreground mb-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-accent-blue" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


/* ---------------- Pricing ---------------- */
const plans = [
  {
    name: "Basic",
    price: "R500 – R1,000",
    tag: null,
    desc: "Perfect for startups & personal brands needing a clean, professional online presence.",
    features: ["Up to 2 pages", "Responsive design", "Basic SEO", "Contact form", "Social media links", "Custom branding", "Advanced animations"],
  },
  {
    name: "Standard",
    price: "R1,500 – R3,000",
    tag: "Most Popular",
    desc: "For growing businesses ready to invest in a powerful, branded digital experience.",
    features: ["6–10 pages", "Custom branding", "Enhanced SEO", "Google Analytics", "Interactive elements", "Contact form", "Advanced animations"],
  },
  {
    name: "Premium",
    price: "R5,000 – R10,000+",
    tag: null,
    desc: "For brands that demand world-class digital experiences with zero compromise.",
    features: ["10+ pages", "Advanced UI/UX animations", "Full SEO & performance", "Multiple forms", "Premium design", "Custom branding", "Priority support"],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 bg-surface/40">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="right">
          <SectionEyebrow>Transparent Pricing</SectionEyebrow>
          <SectionTitle>
            Plans for Every <em className="not-italic text-gradient italic">Ambition</em>
          </SectionTitle>
          <SectionLead>No hidden fees. No surprises. Just exceptional work at honest prices.</SectionLead>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {plans.map((p) => {
              const featured = p.tag === "Most Popular";
              return (
                <div
                  key={p.name}
                  className={`relative rounded-2xl border p-8 flex flex-col ${
                    featured
                      ? "border-accent-blue/50 bg-surface-elevated shadow-[var(--shadow-elevated)] md:-translate-y-4"
                      : "border-border bg-surface"
                  }`}
                >
                  {p.tag && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-accent text-primary-foreground text-xs font-semibold px-4 py-1">
                      {p.tag}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-muted-foreground">{p.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">from</span>
                    <span className="text-3xl font-display font-bold text-gradient">{p.price}</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent-blue" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 rounded-full text-center font-semibold py-3 transition ${
                      featured
                        ? "bg-gradient-accent text-primary-foreground hover:opacity-90"
                        : "border border-border bg-surface hover:bg-surface-elevated text-foreground"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


/* ---------------- Projects ---------------- */
const projects = [
  {
    name: "Portfolio",
    title: "A Personal Brand",
    desc: "A developer who has 97% social presence. He showcases his work and skill.",
    href: "https://nkogallardo.link/",
  },
  {
    name: "Study Focus",
    title: "Study buddy",
    desc: "A study-focused web application that helps students track their progress, manage tasks, and visualize their learning journey with interactive charts.",
    href: "https://study-buddy-weld-zeta.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="left">
          <SectionEyebrow>Our Work</SectionEyebrow>
          <SectionTitle>
            Projects We're <em className="not-italic text-gradient italic">Proud Of</em>
          </SectionTitle>
          <SectionLead>A selection of websites and applications we've crafted for forward-thinking clients.</SectionLead>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-surface p-8 hover:bg-surface-elevated transition block"
              >
                <div className="aspect-[16/9] rounded-xl bg-gradient-accent/20 border border-border mb-6 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{ backgroundImage: "var(--gradient-hero-glow)" }}
                  />
                  <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-muted-foreground">
                    {p.name}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


/* ---------------- About ---------------- */
function About() {
  const chips = ["Speed-first", "Goal-driven", "Secure by default", "Accessible"];
  const highlights = [
    { icon: Rocket, title: "Fast Delivery", desc: "Most projects delivered within 2–4 weeks from brief to launch." },
    { icon: Target, title: "Strategy-Led", desc: "We start with your goals — every design decision serves a purpose." },
    { icon: LifeBuoy, title: "Post-Launch Support", desc: "We don't disappear after handoff. Ongoing maintenance available." },
  ];
  return (
    <section id="about" className="py-28 px-6 bg-surface/40">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
        <ScrollReveal direction="right">
          <SectionEyebrow>Who We Are</SectionEyebrow>
          <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl leading-tight">
            Craftsmanship Meets <em className="not-italic text-gradient italic">Technology</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            NKO CODING is a boutique web development studio focused on creating digital experiences that matter. We combine clean engineering with sharp design thinking to build websites that don't just look good — they perform.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We work closely with each client to understand their goals, audience, and competitive landscape before writing a single line of code. The result: websites that feel tailor-made, because they are.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground/80">
                {c}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-accent text-primary-foreground font-semibold px-6 py-3 hover:opacity-90 transition"
          >
            Let's Talk <ArrowRight className="h-4 w-4" />
          </a>
        </ScrollReveal>
        <div className="grid gap-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-border bg-surface p-6 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-gradient-accent flex items-center justify-center text-primary-foreground shrink-0">
                <h.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{h.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Testimonials ---------------- */
const testimonials = [
  { quote: "NKO CODING transformed our online presence completely. The new website made people visit more often on my socials.", name: "Hloniphile S.", role: "Influencer" },
  { quote: "The photography portfolio website they built for me is absolutely stunning. It's helped me land more clients.", name: "City Soul", role: "Photographer" },
  { quote: "Working with NKO CODING was seamless. Clear communication, on-time delivery, and top-class work.", name: "Learners.", role: "NKO Client" },
];

function Testimonials() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Kind Words</SectionEyebrow>
        <SectionTitle>
          What Clients <em className="not-italic text-gradient italic">Say</em>
        </SectionTitle>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-border bg-surface p-8">
              <Quote className="h-6 w-6 text-accent-blue mb-4" />
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 text-sm">
                <div className="font-semibold">— {t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-surface/40">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow>Get In Touch</SectionEyebrow>
        <SectionTitle>
          Ready to Build <em className="not-italic text-gradient italic">Something Great?</em>
        </SectionTitle>
        <SectionLead>Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.</SectionLead>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <ContactRow icon={Mail} label="nkogallardo@gmail.com" href="mailto:nkogallardo@gmail.com" />
            <ContactRow icon={Phone} label="+27 73 056 5426 (WhatsApp)" href="https://wa.me/27730565426" />
            <ContactRow icon={MapPin} label="Johannesburg, South Africa" />
            <ContactRow icon={Instagram} label="@nko_coding" href="https://www.instagram.com/nko_coding/" />
          </div>

          <form
            action="https://formspree.io/f/xkgqzzky"
            method="POST"
            className="rounded-2xl border border-border bg-surface p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First Name" name="firstName" required />
              <Field label="Last Name" name="lastName" required />
            </div>
            <Field label="Email Address" name="email" type="email" required />
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Interested Plan</label>
              <select
                name="plan"
                className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>Select a plan...</option>
                <option>Basic (R500 – R1,000)</option>
                <option>Standard (R1,500 – R3,000)</option>
                <option>Premium (R5,000 – R10,000+)</option>
                <option>Custom Project</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Tell Us About Your Project</label>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Goals, timeline, references..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-accent text-primary-foreground font-semibold py-3.5 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm text-muted-foreground mb-1.5 block">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-lg bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:bg-surface-elevated transition">
      <div className="w-11 h-11 rounded-xl bg-gradient-accent flex items-center justify-center text-primary-foreground shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-foreground/90">{label}</span>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 text-center text-sm text-muted-foreground">
      <div className="font-display font-bold text-lg">
        <span className="text-foreground">NKO</span>
        <span className="text-gradient">CODING</span>
      </div>
      <p className="mt-3">© {new Date().getFullYear()} NKO CODING. Crafted in Johannesburg.</p>
      <p className="mt-2">
        Created by{" "}
        <a href="https://nkogallardo.link" target="_blank" rel="noreferrer" className="text-accent-blue hover:underline">
          NKOgallardo.link
        </a>
      </p>
    </footer>
  );
}

/* ---------------- Section helpers ---------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-xs uppercase tracking-[0.2em] text-accent-blue font-semibold">{children}</div>;
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-4 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">{children}</h2>;
}
function SectionLead({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-muted-foreground max-w-2xl text-lg">{children}</p>;
}
