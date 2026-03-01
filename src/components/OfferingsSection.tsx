import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, MessageCircle, Building, Crown, Check, ExternalLink, Flame } from "lucide-react";

const offerings = [
  {
    icon: GraduationCap,
    title: "One-on-One Online Mentorship",
    desc: "Comprehensive mentorship covering forex, crypto, and derivatives trading.",
    features: ["Complete technical analysis training", "Risk management & trading psychology", "Lifetime community access & support"],
    price: "₹29,999",
    duration: "1-hour session, every alternate day for 2 months",
    note: "6 months continued mentorship",
    highlight: false,
  },
  {
    icon: Brain,
    title: "Life & Performance Consultation",
    desc: "A private session to help you regain clarity, discipline, and direction in life.",
    features: ["Personal life & performance guidance", "Mental clarity & discipline coaching", "Practical solutions for life challenges"],
    price: "₹2,499",
    duration: "45 minutes",
    note: "Not related to trading",
    highlight: false,
  },
  {
    icon: MessageCircle,
    title: "Psychology Consultation (Single)",
    desc: "Expert guidance in a focused 1:1 session to kickstart your trading journey.",
    features: ["In-depth trading plan review", "Personalized solutions for challenges", "Live Q&A with Venkata Balaji"],
    price: "₹4,999",
    duration: "60 minutes",
    note: "Fee deducted if you join mentorship",
    highlight: false,
  },
  {
    icon: Building,
    title: "One-on-One Offline Mentorship",
    desc: "Premium in-person mentorship experience at our trading institute.",
    features: ["In-Person mentorship at institute", "Hands-on trading setup guidance", "Real-time market analysis together"],
    price: "₹44,999",
    duration: "3 sessions/week, 1hr each, for 2 months",
    note: "Lifetime community access",
    highlight: false,
  },
  {
    icon: Crown,
    title: "Elite Mastery Program",
    desc: "The Ultimate Trading Experience — elite-level, high-priority coaching with lifetime guidance.",
    features: ["One-on-one online/in-person sessions", "Live trading & market execution", "Top-priority support"],
    price: "₹1,24,999",
    duration: "Comprehensive Program",
    note: "Next Available: April 2026",
    highlight: true,
  },
];

const OfferingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offerings" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Trading <span className="text-gradient-gold">Mentorship Programs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose Your Path to Trading Excellence with Venkata Balaji Annam
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className={`relative bg-gradient-card border rounded-xl p-6 flex flex-col ${
                o.highlight
                  ? "border-primary/50 glow-gold lg:col-span-1"
                  : "border-border hover:border-primary/20"
              } transition-all duration-300`}
            >
              {o.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Flame size={12} /> RECOMMENDED
                </div>
              )}

              <div className="flex items-center gap-3 mb-4 mt-2">
                <o.icon className="w-8 h-8 text-primary" />
                <h3 className="font-display font-semibold text-lg text-foreground">{o.title}</h3>
              </div>

              <p className="text-muted-foreground text-sm mb-5">{o.desc}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {o.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-display font-bold text-primary">{o.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{o.duration} (Inclusive of GST)</p>
                {o.note && <p className="text-xs text-primary/80 font-medium">{o.note}</p>}

                <a
                  href="https://wa.me/917011168018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Book Your Session <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
