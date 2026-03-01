import { Phone, MessageCircle, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img src={logo} alt="Retail Riches" className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to <span className="text-gradient-gold">Transform</span> Your Trading?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get in touch with us for personalized assistance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/917011168018"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="tel:+917011168018"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="https://instagram.com/retailriches"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:border-primary/30 transition-colors"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Venkata Balaji Annam — Retail Riches. All rights reserved.</p>
            <a href="mailto:contact@retailriches.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} />
              contact@retailriches.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
