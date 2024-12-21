import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Tech Career Fair 2024",
    date: "March 15, 2024",
    location: "Virtual Event",
    time: "2:00 PM - 6:00 PM",
    description: "Connect with top tech companies and explore internship opportunities.",
  },
  {
    title: "Design Workshop",
    date: "March 20, 2024",
    location: "Student Center",
    time: "3:00 PM - 5:00 PM",
    description: "Learn UI/UX design principles from industry experts.",
  },
  {
    title: "Coding Bootcamp",
    date: "March 25, 2024",
    location: "Innovation Lab",
    time: "10:00 AM - 4:00 PM",
    description: "Intensive coding workshop for beginners and intermediates.",
  },
];

export const EventsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-purple-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
            Upcoming Events
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join our exciting events and expand your knowledge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-md bg-white/5 border-white/10 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-2xl mb-4">{event.title}</CardTitle>
                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-orange-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-pink-400" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};