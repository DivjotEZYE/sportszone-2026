import { Link } from "react-router-dom";
import tennisImg from "@/assets/service-tennis.jpg";
import hardcourtImg from "@/assets/service-hardcourt.jpg";
import educationImg from "@/assets/service-education.jpg";
import bowlingImg from "@/assets/service-bowling.jpg";
import residentialImg from "@/assets/service-residential.jpg";
import majorImg from "@/assets/service-major.jpg";

const services = [
  { slug: "tennis-courts", title: "Tennis Courts", description: "New builds, resurfacing and repairs for private and club courts.", image: tennisImg },
  { slug: "hard-courts", title: "Hard Courts", description: "Rebound Ace acrylic systems for netball, basketball and multi-sport.", image: hardcourtImg },
  { slug: "education", title: "Schools & Education", description: "Synthetic surfaces and playgrounds for schools and universities.", image: educationImg },
  { slug: "bowling-greens", title: "Bowling Greens", description: "Dry Max Pro and Masters Pro synthetic bowling green installations.", image: bowlingImg },
  { slug: "residential-turf", title: "Residential Turf", description: "Synthetic turf for backyards, gardens and pet areas.", image: residentialImg },
  { slug: "major-projects", title: "Major Projects", description: "Large-scale sports complexes, council projects and commercial builds.", image: majorImg },
];

export { services };

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">Services</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight leading-[1.05]">
            What we do
          </h2>
          <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed">
            We build and resurface sports courts and synthetic turf areas across Australia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group block rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-heading font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {service.description}
                </p>
                <span className="inline-block mt-3 text-sm font-medium text-primary">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
