import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    title: "Tech Career Fair 2024",
    date: "March 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Event",
    description: "Connect with top tech companies and explore career opportunities.",
  },
  {
    title: "Web Development Workshop",
    date: "March 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Online",
    description: "Learn modern web development techniques from industry experts.",
  },
];

export const EventsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-ocean-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 text-white">
            Most happening Events
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join our exciting events and expand your knowledge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="backdrop-blur-md bg-white/5 border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold text-white mb-4">{event.title}</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-ocean-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-ocean-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-ocean-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
