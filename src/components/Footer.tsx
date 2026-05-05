import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-bold gold-gradient-text mb-3">BELLORE</h3>
            <p className="font-body text-sm text-cream/70 leading-relaxed">
              Authentic African jewelry & handmade products, crafted with love and heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {[{ to: "/shop", label: "Shop" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact" }].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="font-body text-sm text-cream/70 hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-gold">Customer Service</h4>
            <ul className="space-y-2">
              {["Shipping & Returns", "FAQ", "Size Guide"].map(label => (
                <li key={label}>
                  <span className="font-body text-sm text-cream/70 cursor-pointer hover:text-gold transition-colors">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-gold">Stay Connected</h4>
            <p className="font-body text-sm text-cream/70 mb-3">Get exclusive offers & new arrivals.</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-cream/10 border border-cream/20 text-cream font-body text-sm rounded-l-sm focus:outline-none focus:border-gold placeholder:text-cream/40"
              />
              <button type="submit" className="btn-gold rounded-l-none rounded-r-sm text-sm px-4 py-2">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-6 text-center">
          <p className="font-body text-xs text-cream/50">
            © {new Date().getFullYear()} Bellore Deals. All rights reserved. Handcrafted with ❤️ from Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
