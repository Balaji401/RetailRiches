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
    q: "What does your mentorship program include?",
    a: "Our mentorship is 100% one-on-one with Saksham Gajree. Sessions are done live through Google Meet (online) or offline in person. Every session is focused only on you, with live teaching and real market discussions.",
  },
  {
    q: "How long is the mentorship program?",
    a: "Our core mentorship program is designed to be completed in 2 months of intensive training. After that, you receive 6 months of dedicated post-mentorship assistance plus lifetime access to our trading community.",
  },
  {
    q: "What trading strategies do you teach?",
    a: "We focus on pure Price Action trading with Fibonacci plans as the core strategy. Alongside this, we also cover swing trading, day trading, and positional trading in Forex and Crypto with a priority on Gold & Bitcoin.",
  },
  {
    q: "Can beginners join your program?",
    a: "Yes! Whether you're a beginner, intermediate, or experienced, you can join. Most clients already know the basics but struggle with consistency and psychological issues. That's where I step in.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "We offer a full refund if you cancel at least 48 hours before your first scheduled session. For cancellations within 48 hours, a 50% refund applies.",
  },
  {
    q: "What support do you provide after the program?",
    a: "Post-program support includes lifetime access to our trading community, monthly group calls, market update newsletters, and priority access to new strategies and tools.",
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
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to common questions about our trading mentorship program
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
