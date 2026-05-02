import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type Values = z.infer<typeof schema>;

interface QuoteCTAProps {
  title?: string;
  subtitle?: string;
  context?: string;
}

const QuoteCTA = ({
  title = "Get a free quote",
  subtitle = "Tell us about your project — we'll get back to you within 1 business day.",
  context,
}: QuoteCTAProps) => {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: context ? `Enquiry: ${context}\n\n` : "" },
  });

  const onSubmit = (data: Values) => {
    console.log("Quote request:", { name: data.name, email: data.email, context });
    toast({ title: "Request sent!", description: "Thanks — we'll be in touch shortly." });
    form.reset({ name: "", email: "", phone: "", message: context ? `Enquiry: ${context}\n\n` : "" });
  };

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-medium text-secondary uppercase tracking-[0.2em] mb-3">Free Quote</p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground tracking-tight leading-[1.05] mb-3">
              {title}
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base">{subtitle}</p>
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-primary-foreground/15">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary-foreground/80">Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" {...field} />
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
                        <FormLabel className="text-primary-foreground/80">Phone *</FormLabel>
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/80">Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@email.com" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary-foreground/80">Project details *</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder="Tell us about your project..." className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold gold-glow">
                  <Send className="w-4 h-4 mr-2" />
                  Request Quote
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCTA;
