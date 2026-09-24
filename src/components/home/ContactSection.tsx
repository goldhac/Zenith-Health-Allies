import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { ScrollAnimate } from '@/hooks/useScrollAnimation';

export function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <ScrollAnimate animation="slide-left">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Reach Out to Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-5">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Got questions? We have answers. Send us a message for dedicated and
                caring health services support tailored just for you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Main Phone', value: '(240) 278-1871', href: 'tel:240-278-1871' },
                  { icon: Phone, label: 'Secondary Phone', value: '(240) 610-1390', href: 'tel:240-610-1390' },
                  { icon: Mail, label: 'Email', value: 'hello@moheritagecares.com', href: 'mailto:hello@moheritagecares.com' },
                  { icon: MapPin, label: 'Office', value: '10005 Columbia Rd, suite L-261 Maryland, 21046', href: null },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors truncate block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>

          {/* Contact Form */}
          <ScrollAnimate animation="slide-right" delay={150}>
            <div className="bg-card rounded-2xl shadow-medium p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(240) 000-0000"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="How can we help you?"
                    rows={4}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  By submitting this form you agree to our Privacy Policy
                </p>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
