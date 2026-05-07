import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import QuoteCTA from "@/components/QuoteCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, CheckCircle2, MapPin, Clock, Award, ArrowRight, ChevronRight } from "lucide-react";
import { serviceSEO } from "@/data/serviceContent";
import { services as allServices } from "@/components/ServicesSection";

import tennisImg from "@/assets/service-tennis.jpg";
import hardcourtImg from "@/assets/service-hardcourt.jpg";
import educationImg from "@/assets/service-education.jpg";
import bowlingImg from "@/assets/service-bowling.jpg";
import majorImg from "@/assets/service-major.jpg";

const serviceData: Record<string, {
  title: string;
  hero: string;
  intro: string;
  details: string[];
  includes: string[];
}> = {
  "tennis-courts": {
    title: "Tennis Court Construction & Resurfacing",
    hero: tennisImg,
    intro: "We build and resurface tennis courts for homes, clubs and councils across Australia. Whether you need a brand new court or your existing surface needs work, we handle every stage from earthworks through to line marking.",
    details: [
      "We use Rebound Ace and other proven acrylic systems that suit Australian conditions — UV stable, non-slip, and built to last.",
      "Every job starts with a site inspection. We look at drainage, orientation, access, and soil conditions before quoting. No surprises.",
      "We also do repairs and patching for courts that don't need a full resurface yet.",
    ],
    includes: ["Site assessment & design", "Earthworks & base preparation", "Drainage installation", "Acrylic or synthetic surfacing", "Fencing & lighting", "Line marking"],
  },
  "hard-courts": {
    title: "Hard Court & Multi-Sport Surfaces",
    hero: hardcourtImg,
    intro: "From netball to basketball to futsal — we build acrylic hard courts that handle heavy use. Our Rebound Ace systems are designed for Australian conditions and come in a range of colours.",
    details: [
      "Multi-sport line marking means one court can serve multiple sports. Popular with schools and councils.",
      "We design court layouts to fit your available space. No site is too tricky.",
      "Surfaces are low-maintenance and fast-drying after rain.",
    ],
    includes: ["Multi-sport design & layout", "Rebound Ace acrylic surfacing", "Custom colour schemes", "Line marking for multiple sports", "Fencing & surrounds", "Drainage systems"],
  },
  "education": {
    title: "Schools & Education Facilities",
    hero: educationImg,
    intro: "We've built playgrounds, multi-sport courts and synthetic turf fields for schools across NSW. Safety, durability and low maintenance are our focus for education projects.",
    details: [
      "We work around school terms to minimise disruption. Most playground and court jobs can be done during holidays.",
      "Our surfaces meet Australian safety standards for fall height and impact absorption.",
      "Synthetic turf areas reduce ongoing maintenance costs compared to natural grass.",
    ],
    includes: ["Playground surfaces (rubber & synthetic)", "Multi-sport courts", "Synthetic turf fields", "Cricket practice nets", "Long jump runways", "Basketball & netball courts"],
  },
  "bowling-greens": {
    title: "Synthetic Bowling Greens",
    hero: bowlingImg,
    intro: "We install Dry Max Pro and Masters Pro synthetic bowling greens — the leading systems used by clubs across Australia. No watering, no mowing, consistent play all year round.",
    details: [
      "Synthetic greens play consistently in all weather and require minimal upkeep compared to natural turf.",
      "We handle the full conversion from natural to synthetic, including base regrading and drainage.",
      "Our greens are approved by Bowls Australia and used by clubs at every level.",
    ],
    includes: ["Dry Max Pro / Masters Pro systems", "Base preparation & regrading", "Drainage upgrades", "Ditch & bank installation", "Lighting", "Surrounds & pathways"],
  },
  "major-projects": {
    title: "Major & Commercial Projects",
    hero: majorImg,
    intro: "We've delivered large-scale sports facilities for councils, developers and organisations across Australia and internationally — including work for the Sydney 2000 Olympics.",
    details: [
      "We project-manage from concept to completion. Our team handles design, approvals, construction and handover.",
      "Past projects include Olympic venues, regional sports complexes, and multi-facility council developments.",
      "We work with architects, engineers and consultants to deliver projects on time and on budget.",
    ],
    includes: ["Project management", "Design & engineering coordination", "Multi-court complexes", "Athletics tracks", "Sports field construction", "Lighting & infrastructure"],
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;
  const seo = slug ? serviceSEO[slug] : null;
  const relatedServices = allServices.filter((s) => s.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!service || !seo) return;
    document.title = seo.metaTitle;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", seo.metaDescription);
    setMeta("keywords", seo.keywords.join(", "));
    setMeta("og:title", seo.metaTitle, "property");
    setMeta("og:description", seo.metaDescription, "property");
    setMeta("og:type", "article", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.metaTitle);
    setMeta("twitter:description", seo.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/services/${slug}`;

    const ldId = "service-jsonld";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: seo.metaDescription,
        provider: {
          "@type": "LocalBusiness",
          name: "Sportszone Group",
          telephone: "+61-1300-302-398",
          areaServed: "AU",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: seo.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin + "/" },
          { "@type": "ListItem", position: 2, name: "Services", item: window.location.origin + "/#services" },
          { "@type": "ListItem", position: 3, name: service.title, item: window.location.href },
        ],
      },
    ]);
    document.head.appendChild(ld);
  }, [slug, service, seo]);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Service not found</h1>
          <Link to="/" className="text-primary font-medium hover:underline">Back to home</Link>
        </div>
      </div>
    );
  }

  // Build a quick-jump TOC from the seo sections
  const toc = seo?.sections.map((s) => ({
    id: s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    label: s.heading,
  })) ?? [];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end pb-12">
        <div className="absolute inset-0">
          <img src={service.hero} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <ChevronRight className="w-3 h-3" />
              <li><Link to="/#services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
              <ChevronRight className="w-3 h-3" />
              <li className="text-primary-foreground/90 line-clamp-1">{service.title}</li>
            </ol>
          </nav>
          <p className="text-xs font-medium text-secondary uppercase tracking-[0.2em] mb-3">
            Sportszone Group · 25+ years
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground tracking-tight leading-[1.05] max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-4 text-primary-foreground/80 text-base md:text-lg max-w-2xl">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: MapPin, label: "Servicing", value: "Sydney + AU-wide" },
            { icon: Clock, label: "Typical timeline", value: "4–10 weeks" },
            { icon: Award, label: "Accreditation", value: "SAPIA member" },
            { icon: Phone, label: "Talk to us", value: "1300 302 398" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.label}</p>
                <p className="text-sm font-semibold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body: 2-column with sticky aside */}
      <article className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
            {/* Main column */}
            <div className="max-w-3xl">
              <div className="space-y-5">
                {service.details.map((para, i) => (
                  <p key={i} className="text-foreground/85 leading-relaxed text-base md:text-lg">{para}</p>
                ))}
              </div>

              {/* Pull quote */}
              {seo && (
                <blockquote className="my-12 border-l-4 border-secondary pl-6 py-2">
                  <p className="text-xl md:text-2xl font-heading font-medium text-foreground leading-snug italic">
                    "{seo.longIntro.split(". ")[0]}."
                  </p>
                </blockquote>
              )}

              {/* What's included */}
              <div className="mt-4 rounded-xl p-7 bg-accent/40 border border-border">
                <h2 className="font-heading font-bold text-foreground mb-5 text-xl tracking-tight">
                  What's included
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.includes.map((item) => (
                    <li key={item} className="text-sm text-foreground flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Long-form SEO sections */}
              {seo && (
                <div className="mt-16 space-y-14">
                  {seo.sections.map((sec) => {
                    const id = sec.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                    return (
                      <section key={sec.heading} id={id} className="scroll-mt-24">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight leading-[1.15] mb-4">
                          {sec.heading}
                        </h2>
                        <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
                          {sec.body}
                        </p>
                      </section>
                    );
                  })}

                  {/* FAQ Accordion */}
                  <section id="faqs" className="scroll-mt-24">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight leading-[1.15] mb-6">
                      Frequently asked questions
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {seo.faqs.map((f, i) => (
                        <AccordionItem key={f.question} value={`faq-${i}`} className="border-border">
                          <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline text-base md:text-lg">
                            {f.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-foreground/75 leading-relaxed text-base">
                            {f.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
              {/* TOC */}
              {toc.length > 0 && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                    On this page
                  </p>
                  <ul className="space-y-2.5">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-start gap-2">
                          <span className="text-primary/60 mt-0.5">›</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#faqs" className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-start gap-2">
                        <span className="text-primary/60 mt-0.5">›</span>
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              {/* Quick CTA card */}
              <div className="rounded-xl bg-primary p-6 text-primary-foreground">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary mb-2">
                  Ready to start?
                </p>
                <h3 className="font-heading font-bold text-xl leading-tight mb-2">
                  Get a free site assessment
                </h3>
                <p className="text-sm text-primary-foreground/75 mb-4">
                  No-obligation quote within 1 business day.
                </p>
                <div className="space-y-2">
                  <a
                    href="#quote"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block w-full text-center bg-secondary text-secondary-foreground px-4 py-2.5 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Request quote
                  </a>
                  <a
                    href="tel:1300302398"
                    className="block w-full text-center border border-primary-foreground/30 text-primary-foreground px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-primary-foreground/10 transition-colors"
                  >
                    1300 302 398
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related services */}
      <section className="bg-muted/40 border-t border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-2">Explore more</p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
                Other services
              </h2>
            </div>
            <Link to="/#services" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm line-clamp-2">{s.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div id="quote">
        <QuoteCTA title={`Get a quote for your ${service.title.toLowerCase()}`} context={service.title} />
      </div>
      <ContactFooter />
    </div>
  );
};

export default ServicePage;
