import { motion } from "framer-motion";

const partners = [
  { letter: "G", name: "Google", color: "#4285F4" },
  { letter: "M", name: "Meta", color: "#0866FF" },
  { letter: "A", name: "Amazon", color: "#FF9900" },
  { letter: "S", name: "Samsung", color: "#1428A0" },
  { letter: "N", name: "Netflix", color: "#E50914" },
  { letter: "A", name: "Adobe", color: "#FF0000" },
  { letter: "S", name: "Spotify", color: "#1DB954" },
  { letter: "A", name: "Airbnb", color: "#FF5A5F" }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Partners = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-montserrat font-bold mb-4">
            Nossos <span className="text-gradient">Clientes e Parceiros</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empresas que confiam em nossos serviços para suas soluções digitais
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-2 sm:px-4 md:px-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 flex items-center justify-center bg-gradient-to-br from-card to-card/50 rounded-xl shadow-xl border border-primary/30 mb-3 sm:mb-4 hover:border-primary/50 transition-all duration-300"
                style={{ boxShadow: `0 0 15px rgba(${parseInt(partner.color.slice(1, 3), 16)}, ${parseInt(partner.color.slice(3, 5), 16)}, ${parseInt(partner.color.slice(5, 7), 16)}, 0.2)` }}
              >
                <span 
                  className="text-2xl xs:text-3xl md:text-4xl font-bold partner-icon-glow"
                  style={{ color: partner.color }}
                >
                  {partner.letter}
                </span>
              </div>
              <span className="text-sm md:text-base font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            Junte-se a estas empresas de sucesso que escolheram a Majestix Digital para criar presença digital impactante e resultados concretos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
