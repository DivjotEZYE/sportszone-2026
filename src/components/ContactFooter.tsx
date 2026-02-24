import { Phone, Mail, MapPin } from "lucide-react";

const ContactFooter = () => {
  return (
    <>
      <section id="contact" className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
              Get in touch for a free consultation and quote. We'd love to hear about your next project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="tel:1300302398" className="flex flex-col items-center gap-3 bg-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/10">
                <Phone className="w-8 h-8 text-secondary" />
                <div>
                  <div className="text-primary-foreground font-heading font-semibold">Call Us</div>
                  <div className="text-primary-foreground/70 text-sm">1300 302 398</div>
                </div>
              </a>
              <a href="tel:0414558941" className="flex flex-col items-center gap-3 bg-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/10">
                <Phone className="w-8 h-8 text-secondary" />
                <div>
                  <div className="text-primary-foreground font-heading font-semibold">Mobile</div>
                  <div className="text-primary-foreground/70 text-sm">0414 558 941</div>
                </div>
              </a>
              <a href="mailto:info@sportszonegroup.com.au" className="flex flex-col items-center gap-3 bg-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/10">
                <Mail className="w-8 h-8 text-secondary" />
                <div>
                  <div className="text-primary-foreground font-heading font-semibold">Email</div>
                  <div className="text-primary-foreground/70 text-sm">Get in Touch</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">SZ</span>
              </div>
              <div>
                <span className="font-heading font-bold text-background">Sportszone Group</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-background/60 text-sm">
              <MapPin className="w-4 h-4" />
              Sydney NSW, Australia
            </div>
            <p className="text-background/40 text-sm">
              © {new Date().getFullYear()} Sportszone Group Pty Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
