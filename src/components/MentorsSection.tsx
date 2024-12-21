import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";

const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Scientist",
    image: "/placeholder.svg",
    expertise: "Machine Learning, Neural Networks",
    linkedin: "#",
    email: "sarah.chen@example.com",
  },
  {
    name: "Prof. James Wilson",
    role: "Software Architecture",
    image: "/placeholder.svg",
    expertise: "System Design, Cloud Computing",
    linkedin: "#",
    email: "james.wilson@example.com",
  },
  {
    name: "Dr. Maya Patel",
    role: "UX Research Lead",
    image: "/placeholder.svg",
    expertise: "User Research, Design Thinking",
    linkedin: "#",
    email: "maya.patel@example.com",
  },
  {
    name: "Prof. Alex Kim",
    role: "Data Science Expert",
    image: "/placeholder.svg",
    expertise: "Big Data, Analytics",
    linkedin: "#",
    email: "alex.kim@example.com",
  },
];

export const MentorsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Meet Our Mentors
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Learn from industry experts who are passionate about helping students succeed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-md bg-white/5 border-white/10 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4 ring-2 ring-purple-500/20">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 text-xl">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-white mb-1">{mentor.name}</h3>
                    <p className="text-purple-400 font-medium mb-2">{mentor.role}</p>
                    <p className="text-gray-400 mb-4">{mentor.expertise}</p>
                    <div className="flex gap-4">
                      <a href={mentor.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${mentor.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};