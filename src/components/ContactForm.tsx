import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-purple-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Get in Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-white">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-white">Subject</label>
              <Input
                id="subject"
                placeholder="How can we help?"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-white">Message</label>
              <Textarea
                id="message"
                placeholder="Your message..."
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 min-h-[150px]"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
            >
              Send Message <Send className="ml-2 h-5 w-5" />
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};