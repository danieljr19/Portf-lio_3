import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Portfólio Fotográfico",
    category: "Website + Galeria interativa",
    imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Portfolio de Fotografia Profissional"
  },
  {
    title: "E-commerce Premium",
    category: "Loja online completa",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Página de vendas para produto digital"
  },
  {
    title: "Agência Criativa",
    category: "Site institucional",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Website corporativo para agência"
  },
  {
    title: "Curso Digital",
    category: "Página de vendas",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Landing page para curso online"
  },
  {
    title: "Restaurante Gourmet",
    category: "Website + Reservas online",
    imageUrl: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Website para restaurante"
  },
  {
    title: "SaaS Dashboard",
    category: "Aplicação web",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Aplicação web para empresa de tecnologia"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
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

const Portfolio = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="portfolio" 
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-montserrat font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Nosso <span className="text-gradient">Portfólio</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Confira alguns dos nossos projetos mais recentes e impactantes
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="relative overflow-hidden rounded-xl group"
            >
              <img 
                src={project.imageUrl} 
                alt={project.alt} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/85 flex flex-col justify-center items-center opacity-0 transition-opacity duration-400 group-hover:opacity-100 p-6">
                <h3 className="text-2xl font-montserrat font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.category}</p>
                <a href="#" className="text-accent font-medium hover:text-white transition-colors inline-flex items-center">
                  Ver Projeto <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-border hover:border-primary text-white px-8 py-6 rounded-full font-medium"
            asChild
          >
            <a href="#contato">Ver Todos os Projetos</a>
          </Button>
        </div>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;
