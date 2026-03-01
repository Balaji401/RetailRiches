import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Brain, User, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.png";

const values = [
  { icon: Target, title: "Simple & Clear", desc: "No confusing jargon. Every concept is broken down so anyone can understand it — even if you're brand new." },
  { icon: Heart, title: "100% Honest", desc: "No fake promises of overnight riches. Just real guidance from real experience." },
  { icon: Brain, title: "Mindset First", desc: "Trading is 80% psychology. We help you build the discipline and patience to stay consistent." },
  { icon: User, title: "Personal Attention", desc: "Every session is one-on-one. Your questions matter, and you get answers tailored to you." },
  { icon: TrendingUp, title: "Always Improving", desc: "Markets change. We keep learning and adapting — and teach you to do the same." },
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
            Hi, I'm <span className="text-gradient-gold">Balaji Annam</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I've been trading for years and have helped 600+ people start their trading journey the right way. 
            I focus on Forex and Crypto — especially <strong className="text-foreground">Gold (XAU/USD)</strong> and <strong className="text-foreground">Bitcoin (BTC/USD)</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            My goal is simple: <strong className="text-foreground">make you an independent trader</strong>. 
            I won't give you signals to follow blindly — I'll teach you how to read the market yourself, manage risk, and trade with confidence.
          </p>
        </motion.div>

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
