import { CheckCircle } from "lucide-react";
import founderImg from "@/assets/founder-craig.jpg";

const highlights = [
  "Sydney 2000 Olympics — triathlon track & hockey pitch",
  "International work in Japan, Macau & Mauritius",
  "Cricket pitches, school playgrounds & club courts",
  "Full design, construction & resurfacing",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">About</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight leading-[1.05] mb-6">
              25 years of building Australia's sports surfaces
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              We've been building sports surfaces across Australia for over 25 years. From backyard tennis courts to Olympic venues, we handle every stage — design, earthworks, drainage, surfacing and line marking.
            </p>
            <ul className="space-y-2 mb-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>

          <div className="space-y-6">
            {/* Founder photo */}
            <div className="flex items-center gap-5">
              <img
                src={founderImg}
                alt="Craig — Founder of Sportszone Group"
                className="w-28 h-36 object-cover rounded-lg"
              />
              <div>
                <div className="font-heading font-bold text-foreground text-lg">Craig</div>
                <div className="text-muted-foreground text-sm">Founder & Director</div>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  Over 25 years building sports surfaces — from backyard courts to Olympic venues.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <div className="text-4xl font-heading font-bold">25+</div>
                <div className="text-primary-foreground/70 text-sm mt-1">Years in Business</div>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="text-4xl font-heading font-bold text-foreground">2,000+</div>
                <div className="text-muted-foreground text-sm mt-1">Projects Completed</div>
              </div>
              <div className="bg-secondary rounded-xl p-6">
                <div className="text-4xl font-heading font-bold text-secondary-foreground">4.9★</div>
                <div className="text-secondary-foreground/70 text-sm mt-1">Google Rating</div>
              </div>
              <div className="bg-accent rounded-xl p-6 border border-border">
                <div className="text-4xl font-heading font-bold text-accent-foreground">AUS</div>
                <div className="text-muted-foreground text-sm mt-1">Nationwide Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
