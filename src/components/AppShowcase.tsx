import { motion } from "framer-motion";
import { Smartphone, Laptop, Shield, Wifi } from "lucide-react";

export const AppShowcase = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Access everything on the go",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Your data is always protected",
    },
    {
      icon: Wifi,
      title: "Always Connected",
      description: "Stay in touch with your tribe",
    },
    {
      icon: Laptop,
      title: "Cross Platform",
      description: "Use on any device",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-violet-500/5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
              Your Learning Companion
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Experience seamless learning with our state-of-the-art platform designed for the modern student
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <feature.icon className="w-6 h-6 mb-4 text-indigo-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[300px]">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 blur-3xl opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="App Interface"
                className="relative rounded-3xl shadow-2xl border border-white/10"
                loading="lazy"
                width="300"
                height="600"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
