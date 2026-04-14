import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

const PortfolioSection = () => (
  <section id="portfolio" className="pt-[5rem] md:section-padding relative overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-1/4 -right-10 w-96 h-96 rounded-full bg-glow-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />
    <div className="absolute bottom-1/3 -left-10 w-80 h-80 rounded-full bg-glow-secondary/5 blur-[100px] animate-pulse-glow pointer-events-none" />
    
    <div className="relative z-10 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
           <span className="">Portfolio</span>
        </h2>
        <p className=" max-w-xl mx-auto">
          A selection of projects showcasing my skills across the full stack.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 md:px-20">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover group overflow-hidden rounded-2xl border border-border/50 text-card-foreground"
          >
            <a 
              href={p.link !== "#" ? p.link : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-52 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden group/img cursor-pointer block`}
            >
              {p.isResume ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-heading font-black tracking-[0.2em] text-white/90 drop-shadow-lg scale-100 group-hover/img:scale-110 transition-transform duration-500">
                    RESUME
                  </span>
                </div>
              ) : (
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110 opacity-80 group-hover/img:opacity-100" 
                />
              )}
              <div className="absolute inset-0 bg-glow-primary/5 group-hover:bg-glow-primary/10 transition-colors" />
              <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/0 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40">
                <ExternalLink className="text-white" size={32} />
              </div>
            </a>
            <div className="p-4">
              <h3 className="font-heading font-semibold text-xl mb-2">{p.title}</h3>
              <p className="text-sm text-card-foreground font-semibold leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
