import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkedinIcon, GithubIcon } from "lucide-react";

const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Scientist",
    company: "Tech Innovations Inc.",
    image: "/placeholder.svg",
    expertise: "Machine Learning, Neural Networks",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Prof. James Wilson",
    role: "Software Architect",
    company: "Global Systems",
    image: "/placeholder.svg",
    expertise: "Cloud Computing, System Design",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Data Science Lead",
    company: "DataTech Solutions",
    image: "/placeholder.svg",
    expertise: "Big Data Analytics, Python",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Michael Chang",
    role: "UX Design Director",
    company: "Creative Labs",
    image: "/placeholder.svg",
    expertise: "UI/UX Design, Product Design",
    linkedin: "#",
    github: "#",
  },
];

export const MentorsSection = () => {
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
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
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
                    <Avatar className="w-24 h-24 mb-4 ring-2 ring-purple-500/20">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400">
                        {mentor.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-white mb-1">{mentor.name}</h3>
                    <p className="text-purple-400 mb-1">{mentor.role}</p>
                    <p className="text-gray-400 text-sm mb-3">{mentor.company}</p>
                    <p className="text-gray-300 text-sm mb-4">{mentor.expertise}</p>
                    <div className="flex gap-4">
                      <a href={mentor.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                      <a href={mentor.github} className="text-gray-400 hover:text-purple-400 transition-colors">
                        <GithubIcon className="w-5 h-5" />
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