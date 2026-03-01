import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Brain, User, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  { icon: Target, title: "Clarity & Simplicity", desc: "Trading doesn't have to be complicated. Every concept is explained in the simplest way possible." },
  { icon: Heart, title: "Honesty & Trust", desc: "No false promises, no shortcuts — just real mentorship with complete honesty." },
  { icon: Brain, title: "Discipline Over Emotion", desc: "Markets reward discipline, not emotions. We build habits that keep consistency in." },
  { icon: User, title: "Trader First Approach", desc: "Every session is one-on-one, ensuring personalized guidance for independence." },
  { icon: TrendingUp, title: "Growth Mindset", desc: "Learning never stops. We continuously refine methods and adapt to markets." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={logo} alt="Retail Riches" className="w-14 h-14 rounded-full" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">
            Welcome to <span className="text-gradient-gold">Retail Riches</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm Venkata Balaji Annam, and I've been actively trading the markets with deep expertise. 
            Over the years, I've mentored hundreds of clients worldwide, helping them simplify their trading journey 
            with the right roadmap. I specialize in Forex and Crypto markets, with a strong focus on 
            Gold (XAU/USD) and Bitcoin (BTC/USD).
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            At Retail Riches, our mission is simple: to make you an independent and confident trader. 
            We guide you to develop the skills, mindset, and confidence required to trade successfully on your own.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
              className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300 group"
            >
              <v.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
