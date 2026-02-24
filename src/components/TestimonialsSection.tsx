import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Stephen Day", date: "January 2026", text: "An experienced team who get the job done. Highly recommended." },
  { name: "Gerard M", date: "April 2025", text: "Very happy with the result! Sportszone were a pleasure to deal with. From the first call to the whole build process — impressive professionalism and a great result." },
  { name: "Pam Todd", date: "March 2025", text: "Our tennis court repair was done very efficiently. Our players are very impressed with the new sections. It may even help them play better!" },
  { name: "Christopher McArthur", date: "January 2025", text: "Full rebuild of tennis court. Experienced, professional team. High quality result." },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-3">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-muted-foreground font-medium">4.9 out of 5 — 21 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-8 border border-border card-shadow opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
