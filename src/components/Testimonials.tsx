import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    image: "/placeholder.svg",
    content: "Student Tribe helped me connect with amazing study partners. My grades improved significantly!",
  },
  {
    name: "Michael Chen",
    role: "Art Major",
    image: "/placeholder.svg",
    content: "The creative community here is incredible. I've learned so much from other artists.",
  },
  {
    name: "Emily Brown",
    role: "Literature Student",
    image: "/placeholder.svg",
    content: "Found my book club here! The discussions are always engaging and insightful.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-purple-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Student Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hear from students who found their community on Student Tribe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-md bg-white/5 border-white/10 hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-12 w-12 ring-2 ring-purple-500/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium text-white text-lg">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};