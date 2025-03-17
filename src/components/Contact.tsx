
import React, { useState } from 'react';
import { SendIcon, LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="section-container">
        <div className="container-inner text-center space-y-4 mb-16">
          <span className="px-4 py-1 text-xs font-medium bg-primary/10 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border p-8 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 py-3 bg-primary text-primary-foreground rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    Send Message
                    <SendIcon size={16} className="animate-pulse-slow" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out through the form or via the contact details below.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                  <a
                    href="mailto:example@domain.com"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    example@domain.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                  <p className="text-lg">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <h3 className="text-xl font-medium mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
