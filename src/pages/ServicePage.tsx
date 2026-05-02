import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import QuoteCTA from "@/components/QuoteCTA";
import { Phone } from "lucide-react";
import { serviceSEO } from "@/data/serviceContent";

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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end pb-10">
        <div className="absolute inset-0">
          <img src={service.hero} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container mx-auto px-4">
          <Link to="/#services" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors mb-2 inline-block">
            ← All Services
          </Link>
          <h1 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-foreground text-lg leading-relaxed mb-8">{service.intro}</p>

            {service.details.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>
            ))}

            <div className="mt-10 bg-muted/50 rounded-lg p-6 border border-border">
              <h2 className="font-heading font-semibold text-foreground mb-3 text-lg">What's included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.includes.map((item) => (
                  <li key={item} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {seo && (
              <div className="mt-16 space-y-12">
                <p className="text-foreground text-base md:text-lg leading-relaxed">
                  {seo.longIntro}
                </p>

                {seo.sections.map((sec) => (
                  <section key={sec.heading}>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight leading-[1.15] mb-4">
                      {sec.heading}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {sec.body}
                    </p>
                  </section>
                ))}

                <section>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight leading-[1.15] mb-6">
                    Frequently asked questions
                  </h2>
                  <div className="space-y-6">
                    {seo.faqs.map((f) => (
                      <div key={f.question} className="border-l-2 border-primary pl-5">
                        <h3 className="font-heading font-semibold text-foreground mb-2">
                          {f.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {f.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Free Quote
              </a>
              <a
                href="tel:1300302398"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-muted transition-colors"
              >
                <Phone className="w-4 h-4" />
                1300 302 398
              </a>
            </div>
          </div>
        </div>
      </article>

      <QuoteCTA title={`Get a quote for your ${service.title.toLowerCase()}`} context={service.title} />
      <ContactFooter />
    </div>
  );
};

export default ServicePage;
