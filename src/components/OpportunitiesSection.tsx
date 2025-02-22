import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OpportunitiesSection = () => {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Internships",
      description: "Get real-world experience with leading companies",
    },
    {
      icon: GraduationCap,
      title: "Mentorship",
      description: "Learn from industry experts and seasoned professionals",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with opportunities worldwide",
    },
    {
      icon: Zap,
      title: "Skill Development",
      description: "Access cutting-edge learning resources",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-teal-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            Unlock Your Potential
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Discover endless opportunities to grow your career and skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-md bg-white/5 border-white/10 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <opportunity.icon className="w-10 h-10 mx-auto mb-4 text-green-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">{opportunity.title}</h3>
                  <p className="text-gray-400 text-sm">{opportunity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white font-semibold px-8 py-3 rounded-lg transform transition-all hover:scale-105"
            onClick={() => window.open('#apply', '_blank')}
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
