import heroImg from "@/assets/hero-tennis.jpg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-end pb-16 md:pb-24">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Tennis court construction by Sportszone Group"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative container mx-auto px-4 pt-24">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-[1.15] mb-5">
            Tennis Courts, Sports Surfaces & Synthetic Turf
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-md">
            Sydney-based builders of tennis courts, bowling greens, playgrounds and synthetic turf. Servicing Australia since 2000.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => document.querySelector<HTMLInputElement>('#contact input[name="name"]')?.focus(), 600);
              }}
            >
              Get a Free Quote
            </a>
            <a
              href="tel:1300302398"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-heading font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              1300 302 398
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
