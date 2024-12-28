import { motion } from "framer-motion";
import { Clock, Target, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const St33Section = () => {
  const features = [
    {
      icon: Clock,
      title: "8 Hours Daily",
      description: "Dedicated learning time for maximum growth",
    },
    {
      icon: Target,
      title: "5 Months",
      description: "Structured path to your dream career",
    },
    {
      icon: TrendingUp,
      title: "1000K Potential",
      description: "Average earning potential after completion",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
            Fast-Track Your Career
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Invest in your future today. With just 8 hours per day for 5 months, unlock a career potential of 1000K+
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-6 rounded-xl">
              <Rocket className="mr-2 h-5 w-5" /> Invest Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};