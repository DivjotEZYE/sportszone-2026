import tennisImg from "@/assets/service-tennis.jpg";
import hardcourtImg from "@/assets/service-hardcourt.jpg";
import educationImg from "@/assets/service-education.jpg";
import bowlingImg from "@/assets/service-bowling.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import majorImg from "@/assets/service-major.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Tennis Courts", description: "Construction, resurfacing and design for private and club courts across Greater Sydney and beyond.", image: tennisImg },
  { title: "Hard Courts", description: "Rebound Ace acrylic surfacing systems customised for performance, playability and appearance.", image: hardcourtImg },
  { title: "Education", description: "Safe, low-maintenance synthetic surfaces for schools and universities.", image: educationImg },
  { title: "Bowling Greens", description: "Dry Max Pro and Masters Pro — the first and only choice for synthetic bowling greens.", image: bowlingImg },
  { title: "Residential Turf", description: "Premium synthetic turf supply and installation for homes and gardens.", image: residentialImg },
  { title: "Major Projects", description: "From Olympic venues to community sports complexes — we deliver at every scale.", image: majorImg },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            From backyard courts to Olympic-grade facilities — we build sports surfaces that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 bg-card border border-border opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-heading font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
