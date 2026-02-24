import heroImg from "@/assets/hero-tennis.jpg";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "25+", label: "Years Experience" },
  { icon: Award, value: "2000+", label: "Projects Completed" },
  { icon: Shield, value: "100%", label: "Quality Guaranteed" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium synthetic tennis court at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Australia's Trusted Sports Construction Company
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Creating Safe, Fun Sports Areas
            <span className="block text-secondary">For Everyone</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Specialising in tennis court construction, synthetic sports fields and playgrounds. Based in Sydney, servicing all of Australia since 2000.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:opacity-90 transition-all gold-glow"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-5 py-4 border border-primary-foreground/10"
            >
              <stat.icon className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <div className="text-2xl font-heading font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
