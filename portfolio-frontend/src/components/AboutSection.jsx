import { motion } from "framer-motion";
import { Code2, Globe, TrendingUp } from "lucide-react";
import reactLogo from "@/assets/React.png";
import nodeLogo from "@/assets/Node.js.png";
import expressLogo from "@/assets/Express.png";
import postgresLogo from "@/assets/PostgresSQL.png";
import tailwindLogo from "@/assets/Tailwind CSS.png";
import JavaScriptLogo from "@/assets/JavaScript.png";
import MySQLLogo from "@/assets/MySQL.png";

const cards = [
  {
    icon: Code2,
    title: "Full-stack Development",
    desc: "I build both the face of the website that users see and the brain behind the scenes that handles data.",
  },
  {
    icon: Globe,
    title: "API integration",
    desc: "Connecting your platform to third-party services and live databases to ensure seamless, real-time data flow.",
   },
  {
    icon: TrendingUp,
    title: "Landing Page and Responsive design",
    desc: "I create high-impact, single-page websites designed to turn visitors into customers, ensuring a seamless and fully responsive experience across all devices.",
  },
];

 const techStack = [
  { name: "React", src: reactLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "Express", src: expressLogo },
  { name: "PostgreSQL", src: postgresLogo },
  { name: "Tailwind", src: tailwindLogo },
  { name: "JavaScript", src: JavaScriptLogo },
  { name: "MySQL", src: MySQLLogo },
];

// section-padding
const AboutSection = () => (
  <section id="about" className="pt-[5rem] relative overflow-hidden"> 
    {/* Background Glows */}
    <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-glow-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />
    <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-glow-secondary/5 blur-[100px] animate-pulse-glow pointer-events-none" />
        <div className="relative z-10 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          What I <span className="">Do</span>
        </h2>
        <p className=" md:max-w-2xl md:mx-auto leading-relaxed">
          I'm a fullstack developer who thrives on building impactful digital products.
          With expertise spanning frontend, backend, and database technologies,
          I craft solutions that solve real problems.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-3 md:gap-6 ">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card-hover p-6 text-center text-card-foreground shadow-2xl"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center bg-primary-foreground/10">
              <c.icon className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3">{c.title}</h3>
            <p className="text-sm text-card-foreground font-semibold leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
       
      <div className="mt-20">
        <h3 className="font-heading text-2xl text-center font-bold mb-10 text-foreground">Tech Stack</h3>
        
        <div className="overflow-hidden py-4">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            style={{ width: "fit-content" }}
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center min-w-[120px] glass-card p-4 rounded-xl text-card-foreground">
                <img src={tech.src} alt={tech.name} className="h-10 w-10 object-contain mb-3" />
                <span className="text-[10px] text-card-foreground font-bold uppercase tracking-widest">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
  
    </div>
  </section>
);

export default AboutSection;

