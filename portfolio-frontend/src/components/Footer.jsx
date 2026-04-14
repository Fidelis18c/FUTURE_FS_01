const Footer = () => (
  <footer className="border-t border-border/10 py-2 px-4 bg-card text-card-foreground">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-heading font-bold text-2xl tracking-tighter">FJ<span className="text-primary-foreground">.</span></p>
      <p className="text-sm font-medium text-card-foreground/60">
        © {new Date().getFullYear()} Fidelis Joseph. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

