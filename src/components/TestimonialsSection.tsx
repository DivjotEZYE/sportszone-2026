import { Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Stephen Day",
    text: "An experienced team who get the job done. Highly recommended.",
    location: "Sydney",
    project: "Tennis court resurface",
  },
  {
    name: "Gerard M",
    text: "Very happy with the result! From the first call to the whole build process — impressive professionalism throughout.",
    location: "Melbourne",
    project: "New backyard court",
  },
  {
    name: "Pam Todd",
    text: "Our tennis court repair was done very efficiently. Our players are impressed with the new sections.",
    location: "NSW",
    project: "Club court repair",
  },
  {
    name: "Christopher McArthur",
    text: "Full rebuild of tennis court. Professional team. High quality result.",
    location: "Brisbane",
    project: "Full court rebuild",
  },
];

const TestimonialsSection = () => {
  const [hero, ...rest] = testimonials;

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-muted/30 relative overflow-hidden">
      {/* Subtle background mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 text-[20rem] md:text-[28rem] font-heading font-bold text-foreground/[0.025] leading-none select-none"
      >
        "
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header — editorial split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary/40" />
              <p className="text-[11px] font-medium text-primary uppercase tracking-[0.25em]">
                03 — Testimonials
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-[-0.02em] leading-[0.95]">
              Words from <span className="italic font-light text-primary">clients</span>.
            </h2>
          </div>

          <div className="md:col-span-5 md:pb-2">
            <div className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-heading font-bold text-foreground leading-none tracking-tight">
                    4.9
                  </span>
                  <span className="text-muted-foreground text-sm">/ 5</span>
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-sm">
                <p className="text-foreground font-medium leading-tight">21 reviews</p>
                <p className="text-muted-foreground text-xs mt-1">on Google</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* Featured testimonial */}
          <figure className="lg:col-span-7 lg:row-span-2 relative rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col justify-between min-h-[420px] overflow-hidden">
            <div
              aria-hidden
              className="absolute top-6 right-8 text-[10rem] md:text-[14rem] font-heading font-bold text-primary-foreground/[0.08] leading-none select-none"
            >
              "
            </div>

            <div className="relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-light leading-[1.25] tracking-tight">
                "{hero.text}"
              </blockquote>
            </div>

            <figcaption className="relative mt-10 flex items-center justify-between gap-4 pt-6 border-t border-primary-foreground/15">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-base">{hero.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-base leading-tight">{hero.name}</p>
                  <p className="text-primary-foreground/60 text-xs mt-1">
                    {hero.project} · {hero.location}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-primary-foreground/50">/ 01</span>
            </figcaption>
          </figure>

          {/* Smaller testimonial cards */}
          {rest.map((t, i) => (
            <figure
              key={t.name}
              className="lg:col-span-5 group relative rounded-2xl bg-card border border-border p-6 md:p-7 hover:border-primary/30 transition-colors duration-300 flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">/ 0{i + 2}</span>
                </div>
                <blockquote className="text-foreground/90 text-base leading-relaxed font-heading font-light">
                  "{t.text}"
                </blockquote>
              </div>

              <figcaption className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium text-sm leading-tight">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {t.project} · {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-14 md:mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Trusted by clubs, councils and homeowners across Australia.
          </p>
          <a
            href="https://www.google.com/search?q=Sportszone+Group+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground group"
          >
            <span className="border-b border-foreground/30 group-hover:border-foreground pb-0.5 transition-colors">
              Read all Google reviews
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
