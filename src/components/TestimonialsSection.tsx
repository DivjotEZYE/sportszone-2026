import { Star } from "lucide-react";

const testimonials = [
  { name: "Stephen Day", text: "An experienced team who get the job done. Highly recommended." },
  { name: "Gerard M", text: "Very happy with the result! From the first call to the whole build process — impressive professionalism." },
  { name: "Pam Todd", text: "Our tennis court repair was done very efficiently. Our players are impressed with the new sections." },
  { name: "Christopher McArthur", text: "Full rebuild of tennis court. Professional team. High quality result." },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">4.9 from 21 Google reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-lg p-6 border border-border"
            >
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="text-sm font-medium text-muted-foreground">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
