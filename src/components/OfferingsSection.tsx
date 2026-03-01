import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Crown, Check, ExternalLink, Flame, MessageCircle, Clock } from "lucide-react";

const offerings = [
  {
    icon: GraduationCap,
    title: "One-on-One Online Mentorship",
    desc: "Complete trading training — from basics to advanced strategies. Perfect for beginners and intermediates who want real skills.",
    features: ["Learn chart reading & price action from scratch", "Risk management made simple", "Lifetime access to our trading community"],
    price: "₹29,999",
    duration: "1-hour session, every alternate day for 2 months",
    note: "6 months continued mentorship",
    highlight: false,
    comingSoon: false,
  },
  {
    icon: MessageCircle,
    title: "One-Time Consultation",
    desc: "Not sure if trading is for you? Book a quick call. I'll help you decide — plus give some life direction and guidance.",
    features: ["Honest assessment — is trading right for you?", "Clear roadmap for your trading journey", "Life guidance & clarity session"],
    price: "₹4,999",
    duration: "45 minutes",
    note: "Fee adjusted if you join mentorship",
    highlight: false,
    comingSoon: false,
  },
  {
    icon: Crown,
    title: "Elite Mastery Program",
    desc: "The ultimate trading experience — premium, high-priority coaching with lifetime guidance. For serious traders only.",
    features: ["One-on-one online or in-person sessions", "Live trading together in real markets", "Top-priority support & lifetime access"],
    price: "",
    duration: "Comprehensive Program",
    note: "Coming Soon — Based on People's Interest",
    highlight: true,
    comingSoon: true,
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
            Choose Your <span className="text-gradient-gold">Learning Path</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple plans. Real results. Pick what works for you.
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
                  ? "border-primary/50 glow-gold"
                  : "border-border hover:border-primary/20"
              } transition-all duration-300`}
            >
              {o.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Flame size={12} /> COMING SOON
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
                {o.price && (
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-display font-bold text-primary">{o.price}</span>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mb-1">{o.duration} {o.price && "(Inclusive of GST)"}</p>
                {o.note && (
                  <p className={`text-xs font-medium ${o.comingSoon ? "text-primary flex items-center gap-1" : "text-primary/80"}`}>
                    {o.comingSoon && <Clock size={12} />}
                    {o.note}
                  </p>
                )}

                {o.comingSoon ? (
                  <button
                    disabled
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-secondary text-muted-foreground px-6 py-3 rounded-lg text-sm font-semibold cursor-not-allowed opacity-60"
                  >
                    Coming Soon
                  </button>
                ) : (
                  <a
                    href="https://wa.me/916309323739?text=hi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book Your Session <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
