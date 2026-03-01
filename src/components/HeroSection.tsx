import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Trading mentor background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-foreground">YOUR ULTIMATE</span>
            <br />
            <span className="text-foreground">GUIDE TO</span>
            <br />
            <span className="text-gradient-gold">TRADING PSYCHOLOGY</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            From psychology to execution — unlock the mindset of profitable traders.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 bg-cream text-background px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all shadow-luxury"
          >
            <Play size={18} className="fill-current" />
            WHO AM I?
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">600+</p>
            <p className="text-sm text-muted-foreground mt-1">Happy Learners</p>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-2">
              <p className="text-3xl md:text-4xl font-display font-bold text-primary">4.8+</p>
              <span className="text-sm text-muted-foreground">(50+ Ratings)</span>
            </div>
            <div className="flex gap-1 mt-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
