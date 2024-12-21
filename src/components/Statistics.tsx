import { motion } from "framer-motion";
import { Users, BookOpen, Trophy, Rocket } from "lucide-react";

const stats = [
  {
    label: "Active Students",
    value: "50,000+",
    icon: Users,
  },
  {
    label: "Study Groups",
    value: "1,000+",
    icon: BookOpen,
  },
  {
    label: "Success Stories",
    value: "25,000+",
    icon: Trophy,
  },
  {
    label: "Learning Hours",
    value: "1M+",
    icon: Rocket,
  },
];

export const Statistics = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-4xl font-bold font-heading mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                {stat.value}
              </motion.h3>
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};