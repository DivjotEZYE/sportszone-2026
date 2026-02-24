import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/sportszone-logo-white.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20, "Phone number too long").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactFooter = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", { name: data.name, email: data.email });
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  };

  return (
    <>
      <section id="contact" className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
                Get in touch for a free consultation and quote. We'd love to hear about your next project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <a href="tel:1300302398" className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-5 hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/10">
                  <Phone className="w-7 h-7 text-secondary flex-shrink-0" />
                  <div>
                    <div className="text-primary-foreground font-heading font-semibold">Call Us</div>
                    <div className="text-primary-foreground/70 text-sm">1300 302 398</div>
                  </div>
                </a>
                <a href="tel:0414558941" className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-5 hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/10">
                  <Phone className="w-7 h-7 text-secondary flex-shrink-0" />
                  <div>
                    <div className="text-primary-foreground font-heading font-semibold">Mobile</div>
                    <div className="text-primary-foreground/70 text-sm">0414 558 941</div>
                  </div>
                </a>
                <a href="mailto:info@sportszonegroup.com.au" className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-5 hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/10">
                  <Mail className="w-7 h-7 text-secondary flex-shrink-0" />
                  <div>
                    <div className="text-primary-foreground font-heading font-semibold">Email</div>
                    <div className="text-primary-foreground/70 text-sm">info@sportszonegroup.com.au</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl p-5 border border-primary-foreground/10">
                  <MapPin className="w-7 h-7 text-secondary flex-shrink-0" />
                  <div>
                    <div className="text-primary-foreground font-heading font-semibold">Location</div>
                    <div className="text-primary-foreground/70 text-sm">Sydney NSW, Australia</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary-foreground/10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/80">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground/80">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@email.com" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary-foreground/80">Phone (optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="0400 000 000" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary-foreground/80">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us about your project..." rows={4} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold gold-glow">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Sportszone Group" className="h-10 w-auto" />
              <span className="font-heading font-bold text-background">Sportszone Group</span>
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
