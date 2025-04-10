
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-midnight">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In <span className="text-cyan">Touch</span></h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to learn more about our services? We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-midnight to-[#15154f]/80 p-8 rounded-xl border border-cyan/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a <span className="text-cyan">Message</span></h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-white">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-midnight/50 border-cyan/30 focus:border-cyan"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-white">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="bg-midnight/50 border-cyan/30 focus:border-cyan"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="bg-midnight/50 border-cyan/30 focus:border-cyan"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-white">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="bg-midnight/50 border-cyan/30 focus:border-cyan resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cyan hover:bg-cyan/80 text-midnight font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-midnight border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-midnight to-[#15154f]/80 p-8 rounded-xl border border-gold/20 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact <span className="text-gold">Information</span></h2>
                
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<Mail />} 
                    title="Email Us" 
                    content={<a href="mailto:info@fusionframes.com" className="text-cyan hover:underline">info@fusionframes.com</a>}
                  />
                  <ContactInfo 
                    icon={<Phone />} 
                    title="Call Us" 
                    content={<a href="tel:+1234567890" className="text-cyan hover:underline">(123) 456-7890</a>}
                  />
                  <ContactInfo 
                    icon={<MapPin />} 
                    title="Visit Us" 
                    content={<address className="not-italic text-gray-300">1234 Creative Avenue, <br />Suite 567, <br />Los Angeles, CA 90001</address>}
                  />
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-midnight to-[#15154f]/80 p-8 rounded-xl border border-cyan/20 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-white">Business <span className="text-cyan">Hours</span></h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday:</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
              
              {/* FAQ */}
              <div className="bg-gradient-to-br from-midnight to-[#15154f]/80 p-8 rounded-xl border border-cyan/20 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Check className="text-cyan" />
                  <span className="text-white font-medium">Fast Response Time</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Check className="text-cyan" />
                  <span className="text-white font-medium">Free Project Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-cyan" />
                  <span className="text-white font-medium">Custom Quote For Each Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 text-gold">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
      <div className="text-gray-300">{content}</div>
    </div>
  </div>
);

export default ContactPage;
