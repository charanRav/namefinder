import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Name Finder | Get in Touch</title>
        <meta name="description" content="Have questions about Name Finder? Contact our team for support, feedback, or partnership inquiries. We're here to help you find the perfect business name." />
        <meta name="keywords" content="contact name finder, support, feedback, business name help, naming assistance" />
        <link rel="canonical" href="https://namefinder-nu.vercel.app/contact" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-card rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  For general inquiries and support
                </p>
                <a href="mailto:contact@namefinder.com" className="text-primary hover:underline">
                  contact@namefinder.com
                </a>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond within 24 hours during business days
                </p>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Feedback</h3>
                <p className="text-muted-foreground text-sm">
                  Your suggestions help us improve Name Finder for everyone
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="mt-12 bg-accent/20 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">How long does it take to get a response?</h3>
                  <p className="text-muted-foreground text-sm">
                    We aim to respond to all inquiries within 24 hours during business days (Monday-Friday).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is Name Finder really free?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! Name Finder is completely free to use. We generate revenue through affiliate partnerships with domain registrars.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I suggest new features?</h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We love hearing from our users. Send us your ideas using the contact form above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
