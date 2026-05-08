import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import tennisImg from "@/assets/service-tennis.jpg";
import hardcourtImg from "@/assets/service-hardcourt.jpg";
import educationImg from "@/assets/service-education.jpg";
import bowlingImg from "@/assets/service-bowling.jpg";
import majorImg from "@/assets/service-major.jpg";

const services = [
  {
    slug: "tennis-courts",
    title: "Tennis Courts",
    description: "New builds, resurfacing and repairs for private and club courts.",
    image: tennisImg,
    tag: "Most popular",
    detail: "Acrylic, synthetic grass & cushioned systems — built to ITF standards.",
  },
  {
    slug: "hard-courts",
    title: "Hard Courts",
    description: "Rebound Ace acrylic systems for netball, basketball and multi-sport.",
    image: hardcourtImg,
    tag: "Multi-sport",
    detail: "Rebound Ace cushioned acrylic for netball, basketball & futsal.",
  },
  {
    slug: "education",
    title: "Schools & Education",
    description: "Synthetic surfaces and playgrounds for schools and universities.",
    image: educationImg,
    tag: "Education",
    detail: "Safe, durable synthetic play areas built to last 10+ years.",
  },
  {
    slug: "bowling-greens",
    title: "Bowling Greens",
    description: "Dry Max Pro and Masters Pro synthetic bowling green installations.",
    image: bowlingImg,
    tag: "Specialist",
    detail: "Tournament-grade Dry Max Pro & Masters Pro greens.",
  },
  {
    slug: "major-projects",
    title: "Major Projects",
    description: "Large-scale sports complexes, council projects and commercial builds.",
    image: majorImg,
    tag: "Commercial",
    detail: "Full design-and-construct for councils, clubs & developers.",
  },
];

export { services };

const ServicesSection = () => {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        {/* Header — editorial split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-24">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary/40" />
              <p className="text-[11px] font-medium text-primary uppercase tracking-[0.25em]">
                01 — Services
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-[-0.02em] leading-[0.95]">
              What we <span className="italic font-light text-primary">do</span>.
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-3">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
              From backyard courts to Olympic venues — five specialties, one team. Designed, built and finished in-house across Australia.
            </p>
          </div>
        </div>

        {/* Featured + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* Featured card */}
          <Link
            to={`/services/${featured.slug}`}
            className="group lg:col-span-7 lg:row-span-2 relative block rounded-2xl overflow-hidden bg-card aspect-[4/5] lg:aspect-auto lg:min-h-[640px]"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />

            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-background/80 px-3 py-1.5 rounded-full bg-background/10 backdrop-blur-md border border-background/20">
                {featured.tag}
              </span>
            </div>

            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 backdrop-blur-md border border-background/20 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5 text-background" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="text-background/60 text-xs font-mono mb-3">/ 01</div>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-background tracking-tight leading-[1.05] mb-3">
                {featured.title}
              </h3>
              <p className="text-background/80 text-base md:text-lg max-w-md leading-relaxed">
                {featured.detail}
              </p>
            </div>
          </Link>

          {/* Secondary cards */}
          {rest.map((service, i) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group lg:col-span-5 relative block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="flex items-stretch h-full min-h-[180px]">
                {/* Image */}
                <div className="relative w-2/5 flex-shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="text-[10px] font-mono text-muted-foreground">
                        / 0{i + 2}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-card-foreground tracking-tight leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {service.detail}
                    </p>
                  </div>
                  <span className="mt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-primary/70 group-hover:text-primary transition-colors">
                    {service.tag}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Not sure which surface fits your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground group"
          >
            <span className="border-b border-foreground/30 group-hover:border-foreground pb-0.5 transition-colors">
              Talk to our team
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
