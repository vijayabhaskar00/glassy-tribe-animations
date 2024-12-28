import { motion } from "framer-motion";
import { Briefcase, Building, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const internships = [
  {
    title: "Software Development Intern",
    company: "Tech Solutions Inc.",
    duration: "3 months",
    stipend: "$2000/month",
    description: "Join our engineering team and work on real-world projects.",
  },
  {
    title: "UX Design Intern",
    company: "Creative Labs",
    duration: "6 months",
    stipend: "$1800/month",
    description: "Design user experiences for cutting-edge products.",
  },
];

export const InternshipsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 to-orange-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-orange-400">
            Featured Internships
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kickstart your career with exciting internship opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="backdrop-blur-md bg-white/5 border-white/10 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Briefcase className="w-10 h-10 text-accent-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-white mb-2">{internship.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Building className="w-4 h-4 mr-2 text-accent-400" />
                      <span>{internship.company}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-accent-400" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <DollarSign className="w-4 h-4 mr-2 text-accent-400" />
                      <span>{internship.stipend}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">{internship.description}</p>
                  <Button className="w-full bg-gradient-to-r from-accent-500 to-orange-500 hover:from-accent-600 hover:to-orange-600">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};