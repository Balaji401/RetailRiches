import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "I'm a complete beginner. Can I still join?",
    a: "Absolutely! Most of my students start from zero. I explain everything step by step — no prior experience needed.",
  },
  {
    q: "What will I actually learn?",
    a: "You'll learn how to read charts, understand price action, manage your risk, and build the mindset needed to trade consistently. We cover Forex and Crypto with focus on Gold and Bitcoin.",
  },
  {
    q: "How does the mentorship work?",
    a: "It's 100% one-on-one with me (Balaji Annam) over Google Meet. We meet every alternate day for 1 hour, over 2 months. After that, you get 6 months of continued support plus lifetime community access.",
  },
  {
    q: "What's the One-Time Consultation about?",
    a: "It's a 45-minute call where I help you figure out if trading is right for you. We also talk about your goals and life direction. If you decide to join mentorship later, the consultation fee gets adjusted.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. Full refund if you cancel at least 48 hours before your first session. 50% refund for cancellations within 48 hours.",
  },
  {
    q: "What support do I get after the program?",
    a: "You get lifetime access to our trading community, monthly group calls, and regular market updates. You're never alone after the program.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Got <span className="text-gradient-gold">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Here are answers to what most people ask before joining.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-gradient-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-foreground font-display font-medium text-left hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
