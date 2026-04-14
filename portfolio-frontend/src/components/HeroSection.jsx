import { motion } from "framer-motion";
import heroImg from "@/assets/hero-visual.jpg";
import heroImage from "@/assets/Hero2.jpeg";
import HEROIMAGE  from "@/assets/Hero3.jpeg";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="relative mt-10 md:mt-0 min-h-screen flex items-center overflow-hidden">
      {/* Glow orbs - use subtle blue and primary glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-glow-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-glow-secondary/5 blur-[100px] animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 grid grid-rows-2 px-5 md:flex md:flex-col-2 md:gap-[5rem] items-center md:px-[5rem] md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold mb-4 text-foreground">
            Hello <span className="animate-bounce">👋</span>, I'm Fidelis Joseph
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
            Fullstack{" "}
            <span className="text-primary">Web Developer</span>
          </h1>
          <p className="text-lg max-w-lg mb-8 text-foreground">
            I build real-world, scalable web applications with modern technologies.
            From elegant frontends to robust backends — turning ideas into production-ready software.
          </p>
          <div className="flex flex-cols md:flex-wrap gap-4">
            <Button onClick={() => scrollTo("#portfolio")} className="shadow-lg" size="sm" >
              View My Work
            </Button>
            <Button onClick={() => scrollTo("#contact")} variant="outline" className="border-primary/20 hover:bg-primary/5" size="sm">
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl" />
            <img
              src={HEROIMAGE}
              alt="Futuristic tech visual"
              className="relative w-[420px] h-[420px] md:w-[420px] md:h-[420px] object-cover rounded-2xl border border-border/30 brightness-95 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;

