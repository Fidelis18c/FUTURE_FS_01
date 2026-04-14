import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "· Fidelis Joseph ·", href: "#home" }, 
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-border/30 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-around px-4">
        {/* FJ Mobile Logo - Only visible when scrolled and on mobile */}
        <div className={`md:hidden font-heading font-bold text-2xl tracking-tighter text-white transition-all duration-500 ${
          scrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          FJ<span className="text-primary-foreground">.</span>
        </div>
        <div className="hidden md:flex items-center mr-3 gap-6 glass-card px-8 py-3 rounded-full border border-primary/20 shadow-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.href);
              }}
              className="text-sm font-semibold text-card-foreground/70 hover:text-card-foreground transition-all duration-300 hover:scale-105"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button 
          className="md:hidden text-foreground ml-auto bg-card p-2 rounded-lg" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} className="text-card-foreground" /> : <Menu size={24} className="text-card-foreground" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card mt-2 mx-4 p-6 rounded-2xl flex flex-col gap-5 border border-primary/20 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.href);
              }}
              className="text-base font-medium text-card-foreground/80 hover:text-card-foreground transition-colors text-left"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

