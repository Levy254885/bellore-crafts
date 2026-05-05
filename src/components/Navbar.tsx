import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, User, Search, Heart, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  {
    to: "/shop",
    label: "Shop",
    mega: [
      { heading: "Jewelry", items: ["Necklaces", "Earrings", "Bracelets", "Rings"] },
      { heading: "Lifestyle", items: ["Accessories", "Home Décor", "Headwraps", "Bags"] },
      { heading: "Collections", items: ["New Arrivals", "Best Sellers", "Sale", "Gift Sets"] },
    ],
  },
  { to: "/shop", label: "Sale", highlight: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="flex flex-col">
          <span className="font-heading text-xl font-bold tracking-wide text-foreground md:text-2xl">
            BELLORE
          </span>
          <span className="text-[10px] font-body tracking-[0.25em] text-muted-foreground uppercase -mt-1">
            Deals
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.mega && setMegaOpen(true)}
              onMouseLeave={() => link.mega && setMegaOpen(false)}
            >
              <Link
                to={link.to}
                className={`font-body text-sm tracking-wide transition-colors duration-200 hover:text-primary flex items-center gap-1 ${
                  location.pathname === link.to ? "text-primary font-semibold" : "text-foreground"
                } ${link.highlight ? "!text-destructive font-semibold" : ""}`}
              >
                {link.label}
                {link.mega && <ChevronDown size={12} />}
              </Link>
              {link.mega && megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                  <div className="bg-card border border-border shadow-2xl rounded-sm p-6 grid grid-cols-3 gap-8 w-[520px] animate-fade-in">
                    {link.mega.map(col => (
                      <div key={col.heading}>
                        <p className="font-body text-[10px] uppercase tracking-widest text-gold mb-3">{col.heading}</p>
                        <ul className="space-y-2">
                          {col.items.map(it => (
                            <li key={it}>
                              <Link to="/shop" className="font-body text-sm text-foreground hover:text-primary transition-colors">
                                {it}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-foreground hover:text-primary transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <Link to="/dashboard" className="hidden sm:block text-foreground hover:text-primary transition-colors" aria-label="Wishlist">
            <Heart size={20} />
          </Link>
          <Link to="/login" className="text-foreground hover:text-primary transition-colors" aria-label="Account">
            <User size={20} />
          </Link>
          <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors" aria-label="Cart">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-body font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {searchOpen && (
        <div className="border-t border-border bg-background animate-fade-in">
          <div className="container mx-auto px-4 py-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                autoFocus
                placeholder="Search jewelry, accessories, home décor..."
                className="w-full pl-9 pr-4 py-2.5 border border-border rounded-sm font-body text-sm bg-background focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(link => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-base block py-2 transition-colors ${
                    link.highlight ? "text-destructive font-semibold" :
                    location.pathname === link.to ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
