import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Happy Learner",
    text: "The mentorship experience has been amazing so far. From the very beginning, the importance of discipline was emphasized — teaching me not to rush the process but to trust the journey.",
  },
  {
    name: "Aspiring Trader",
    text: "One of the best decisions of my life. The best quality is the patience — listening to everything without rush and explaining everything in very detail and easy way. Highly recommended!",
  },
  {
    name: "Dedicated Student",
    text: "Perfection. Clear-cut instructions. The guidance is precise, no fluff — just pure, actionable wisdom. Trusting the process has transformed my trading approach entirely.",
  },
  {
    name: "Consistent Trader",
    text: "The 1-1 trading mentorship was truly transformative. The focus on trading psychology — something most traders overlook — was practical and insightful. Highly recommend!",
  },
  {
    name: "Growing Investor",
    text: "My trading journey started rocky, but this mentorship completely changed my perspective and approach to the markets. The psychology-first approach makes all the difference.",
  },
  {
    name: "Prop Firm Trader",
    text: "This has been the best mentorship program I've ever been a part of. It played a huge role in shaping and improving my trading psychology. This helped me get payouts from prop firms!",
  },
  {
    name: "Active Trader",
    text: "Learned so many things about trading and investing. The focused approach on price action helped me build a strong foundation. Not only trading, but also guidance in understanding various aspects of life.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const next = () => setCurrent((c) => (c + 1) % totalPages);
  const prev = () => setCurrent((c) => (c - 1 + totalPages) % totalPages);

  const visible = testimonials.slice(current * itemsPerPage, current * itemsPerPage + itemsPerPage);

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">
            What Our <span className="text-gradient-gold">Traders Are Saying</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {visible.map((t, i) => (
            <motion.div
              key={t.name + current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-gradient-card border border-border rounded-xl p-6 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
