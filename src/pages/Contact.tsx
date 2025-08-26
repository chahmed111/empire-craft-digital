import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Phone, Mail, MapPin, Clock, MessageCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby1DgujE5WCq5kU7inIx8Y-EyKPORh7OzVs57sffjoIXJTSI8v3-4yv1WL8Xl6XFD_A/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: data.service,
          message: data.message,
          date: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch for your free consultation and quote today
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="card-elegant">
                <h2 className="text-3xl font-bold mb-8">Get Your Free Quote</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your full name"
                                {...field}
                              />
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
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="Your phone number"
                                {...field}
                              />
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
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Required *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Windows">Windows</SelectItem>
                              <SelectItem value="Doors">Doors</SelectItem>
                              <SelectItem value="Both Windows & Doors">Both Windows & Doors</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={6}
                              placeholder="Tell us about your project requirements..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message & Get Quote"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="card-elegant">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:+447435854263" className="text-primary hover:underline">
                          +44 743 585 4263
                        </a>
                        <p className="text-sm text-muted-foreground">Available 7 days a week</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:thewindowdoorguyz@gmail.com" className="text-primary hover:underline">
                          thewindowdoorguyz@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MessageCircle className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                        <a href="https://wa.me/447435854263" className="text-primary hover:underline">
                          Chat with us instantly
                        </a>
                        <p className="text-sm text-muted-foreground">Quick responses guaranteed</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="card-elegant">
                  <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="card-elegant">
                  <h3 className="text-2xl font-bold mb-6">Service Areas</h3>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve customers across the Greater Manchester area and surrounding regions:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>• Manchester</div>
                    <div>• Birmingham</div>
                    <div>• Leeds</div>
                    <div>• Liverpool</div>
                    <div>• Sheffield</div>
                    <div>• Newcastle</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;