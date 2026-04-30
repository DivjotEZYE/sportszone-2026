import { useState, useEffect, useCallback } from "react";
import { Phone } from "lucide-react";
import heroDrone from "@/assets/hero-drone.jpg";
import heroTennis from "@/assets/gallery-tennis-real1.jpg";
import heroBowling from "@/assets/gallery-bowling-real1.jpg";
import heroHardcourt from "@/assets/gallery-hardcourt-real1.jpg";
import heroResurfacing from "@/assets/gallery-resurfacing-real1.jpg";

const images = [heroDrone, heroTennis, heroBowling, heroHardcourt, heroResurfacing];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const advance = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 600);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-end pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[current]}
          alt="Sports surface project by Sportszone Group"
          className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true); }, 400); }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-secondary" : "w-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 pt-24">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm font-medium text-secondary uppercase tracking-[0.2em] mb-5">
            Sydney · Est. 2000
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.02] tracking-tight mb-6">
            Tennis Courts, Sports Surfaces & Synthetic Turf
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/75 mb-10 max-w-lg leading-relaxed">
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
