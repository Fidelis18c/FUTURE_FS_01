import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Responsive, performant UIs with React  and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Scalable APIs and server-side logic with Node.js, Express, and cloud services.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Efficient data modeling with PostgreSQL, MongoDB, Redis, and Prisma ORM.",
  },
 
];



const ServicesSection = () => (
  <section id="services" className="section-padding relative overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-glow-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />
    <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-glow-secondary/5 blur-[100px] animate-pulse-glow pointer-events-none" />
        <div className="relative z-10 ml-4 mr-4 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className=" text-3xl md:text-4xl font-bold mb-4">
          Services & <span className="">Skills</span>
        </h2>
        <p className=" max-w-xl mx-auto">
          End-to-end development expertise to bring your vision to life.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-16 ">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-8 text-center text-card-foreground shadow-xl"
          >
            <div className="w-12 h-12 mx-auto mb-6 rounded-lg flex items-center justify-center bg-primary-foreground/10">
              <s.icon className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-3">{s.title}</h3>
            <p className="text-sm text-card-foreground font-semibold leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      
    </div>
  </section>
);

export default ServicesSection;

