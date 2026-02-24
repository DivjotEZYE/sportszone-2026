import { CheckCircle } from "lucide-react";

const highlights = [
  "Sydney 2000 Olympics — triathlon track & hockey pitch",
  "International projects in Japan, Macau & Mauritius",
  "Cricket pitches, school playgrounds & club courts",
  "Full design, construction & resurfacing services",
  "25+ years of industry-leading expertise",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3 mb-6">
              Built on Experience.{" "}
              <span className="text-gradient">Driven by Quality.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sportszone Group delivers the highest quality sports grounds and excels at projects on all scales — from a backyard tennis court to elite Olympic-level venues. We listen to our clients and design spaces guaranteed to serve families, schools, clubs and communities for years.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              Work With Us
            </a>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                  <div className="text-5xl font-heading font-bold">25+</div>
                  <div className="text-primary-foreground/70 mt-1">Years in Business</div>
                </div>
                <div className="bg-card rounded-2xl p-8 border border-border card-shadow">
                  <div className="text-5xl font-heading font-bold text-foreground">4.9</div>
                  <div className="text-muted-foreground mt-1">Google Rating ★</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary rounded-2xl p-8">
                  <div className="text-5xl font-heading font-bold text-secondary-foreground">2K+</div>
                  <div className="text-secondary-foreground/70 mt-1">Projects Completed</div>
                </div>
                <div className="bg-accent rounded-2xl p-8 border border-border">
                  <div className="text-5xl font-heading font-bold text-accent-foreground">100%</div>
                  <div className="text-muted-foreground mt-1">Quality Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
