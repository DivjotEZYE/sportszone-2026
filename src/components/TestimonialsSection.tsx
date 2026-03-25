import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Stephen Day", text: "An experienced team who get the job done. Highly recommended.", location: "Sydney" },
  { name: "Gerard M", text: "Very happy with the result! From the first call to the whole build process — impressive professionalism.", location: "Melbourne" },
  { name: "Pam Todd", text: "Our tennis court repair was done very efficiently. Our players are impressed with the new sections.", location: "NSW" },
  { name: "Christopher McArthur", text: "Full rebuild of tennis court. Professional team. High quality result.", location: "Brisbane" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Testimonials</p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <div className="border-l border-border pl-3">
              <span className="text-foreground font-bold text-lg leading-none">4.9</span>
              <span className="text-muted-foreground text-sm ml-1">/ 5</span>
              <p className="text-muted-foreground text-xs">from 21 Google reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 border border-border card-shadow hover:card-shadow-hover transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-5 right-5" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
