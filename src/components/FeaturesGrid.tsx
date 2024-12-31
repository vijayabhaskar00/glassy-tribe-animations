import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, Rocket, Brain, Target } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Smart Learning",
    description: "Personalized learning paths tailored to your goals and pace",
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Connect with peers and form effective study groups",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Track your progress and earn rewards as you learn",
  },
  {
    icon: Brain,
    title: "Expert Mentorship",
    description: "Learn from industry professionals and academics",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set and achieve your academic and career goals",
  },
  {
    icon: Rocket,
    title: "Career Launch",
    description: "Get the skills you need to launch your dream career",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive tools and features designed for modern students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="group h-full backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                    <feature.icon className="w-7 h-7 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};