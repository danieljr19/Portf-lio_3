import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Globe, Briefcase, TrendingUp } from "lucide-react";

const serviceItems = [
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: "Criação de Sites",
    description: "Desenvolvemos sites profissionais, responsivos e otimizados para buscadores. Interfaces modernas que convertem visitantes em clientes.",
    features: ["Design responsivo", "Otimização SEO", "Integração de APIs"],
    gradient: "bg-gradient-primary"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-white" />,
    title: "Portfólios Profissionais",
    description: "Destaque seu trabalho com um portfólio impressionante. Ideal para profissionais criativos, fotógrafos, designers e empresas.",
    features: ["Galerias interativas", "Filtros de categorias", "Personalização completa"],
    gradient: "bg-gradient-primary"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Páginas de Vendas",
    description: "Landing pages de alta conversão que transformam visitantes em clientes. Focadas em resultados e otimizadas para vendas.",
    features: ["Copy persuasiva", "CTAs estratégicos", "Funis de conversão"],
    gradient: "bg-gradient-secondary"
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

const Services = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="servicos" 
      className="py-20 bg-muted relative code-bg"
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
            Nossos <span className="text-gradient">Serviços</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluções digitais completas para levar seu negócio ao próximo nível
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceItems.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-card border border-border h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 group overflow-visible">
                <CardHeader className="pb-3 sm:pb-4">
                  <motion.div 
                    className="mb-5 transition-all duration-300 transform group-hover:scale-110"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${service.gradient} flex items-center justify-center shadow-md`}>
                      {service.icon}
                    </div>
                  </motion.div>
                  <CardTitle className="text-xl sm:text-2xl font-montserrat font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start sm:items-center">
                        <Check className="h-4 w-4 text-accent mr-2 mt-0.5 sm:mt-0 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contato" 
                    className="inline-block text-accent font-medium hover:text-primary transition-colors group-hover:underline"
                  >
                    Saiba mais →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-full font-medium"
            asChild
          >
            <a href="#contato">Solicitar Orçamento</a>
          </Button>
        </div>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;
