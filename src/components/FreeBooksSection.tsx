import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Download } from "lucide-react";

const books = [
  {
    title: "The Disciplined Trader",
    desc: "Learn why discipline is the #1 skill in trading and how to build it.",
    file: "/books/the-disciplined-trader.pdf",
  },
  {
    title: "21 Candlestick Patterns",
    desc: "A visual guide to the most important candlestick patterns every trader should know.",
    file: "/books/21-candlestick-patterns.pdf",
  },
  {
    title: "Market Wizards",
    desc: "Interviews with the world's top traders — learn from the best.",
    file: "/books/market-wizards.pdf",
  },
  {
    title: "After-Hours Trader",
    desc: "Discover strategies for trading outside regular market hours.",
    file: "/books/after-hours-trader.pdf",
  },
  {
    title: "Day Trading for Dummies",
    desc: "A beginner-friendly guide to getting started with day trading.",
    file: "/books/day-trading-for-dummies.pdf",
  },
  {
    title: "How to Day Trade for a Living",
    desc: "Andrew Aziz's practical guide to making a living from day trading.",
    file: "/books/how-to-day-trade-for-a-living.pdf",
  },
  {
    title: "New Trader, Rich Trader",
    desc: "Simple lessons that separate successful traders from the rest.",
    file: "/books/new-trader-rich-trader.pdf",
  },
  {
    title: "Super Trader",
    desc: "How to make consistent profits in both good and bad markets.",
    file: "/books/super-trader.pdf",
  },
  {
    title: "The Mental Game of Trading",
    desc: "Master your emotions and think clearly under pressure.",
    file: "/books/mental-game-of-trading.pdf",
  },
  {
    title: "Ultimate Guide to Trend Following",
    desc: "Learn to ride market trends and know when to enter and exit.",
    file: "/books/ultimate-guide-trend-following.pdf",
  },
];

const FreeBooksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="free-books" ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Free Resources</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">
            Free Trading <span className="text-gradient-gold">E-Books</span>
          </h3>
          <p className="text-muted-foreground text-lg mt-4">
            Download these books for free — start learning right now, no strings attached.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 + 0.2, duration: 0.5 }}
              className="bg-gradient-card border border-border rounded-xl p-5 flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <BookOpen className="w-9 h-9 text-primary mb-3" />
              <h4 className="font-display font-semibold text-foreground mb-2 text-sm leading-snug">{book.title}</h4>
              <p className="text-muted-foreground text-xs mb-5 flex-1 leading-relaxed">{book.desc}</p>
              <a
                href={book.file}
                download
                className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <Download size={14} />
                Download Free
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeBooksSection;
