import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Clock, DollarSign, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const internships = [
  {
    company: "Tech Innovators",
    position: "Software Development Intern",
    duration: "3 months",
    stipend: "$2000/month",
    requirements: "Computer Science students, Knowledge of React",
    applicationDeadline: "March 30, 2024",
  },
  {
    company: "Data Analytics Pro",
    position: "Data Science Intern",
    duration: "6 months",
    stipend: "$2500/month",
    requirements: "Statistics/Math background, Python skills",
    applicationDeadline: "April 15, 2024",
  },
  {
    company: "Creative Design Co",
    position: "UI/UX Design Intern",
    duration: "4 months",
    stipend: "$1800/month",
    requirements: "Design portfolio, Figma proficiency",
    applicationDeadline: "April 1, 2024",
  },
];

export const InternshipsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-orange-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400">
            Featured Internships
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kickstart your career with these exciting internship opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-md bg-white/5 border-white/10 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-purple-400" />
                    {internship.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl text-purple-400">{internship.position}</h3>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-purple-400" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <DollarSign className="w-4 h-4 mr-2 text-purple-400" />
                      <span>{internship.stipend}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <GraduationCap className="w-4 h-4 mr-2 text-purple-400" />
                      <span>{internship.requirements}</span>
                    </div>
                    <p className="text-orange-400">Deadline: {internship.applicationDeadline}</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600">
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