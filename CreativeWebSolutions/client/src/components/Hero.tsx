import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="inicio" 
      className="pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-12 xs:pb-16 sm:pb-20 relative overflow-hidden crown-bg"
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-8 xs:mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-3 xs:mb-4 md:mb-6 leading-tight">
              Transformamos ideias em <span className="text-gradient">experiências digitais</span> impactantes
            </h1>
            <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-5 xs:mb-6 md:mb-8">
              Especialistas na criação de sites, portfólios e páginas de vendas de alta conversão. 
              Nossos designs modernos e funcionais se destacam no mercado digital.
            </p>
            <div className="flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-4">
              <Button
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-white px-5 xs:px-6 py-4 xs:py-5 md:px-8 md:py-6 rounded-full font-medium text-sm sm:text-base"
                asChild
              >
                <a href="#portfolio">Ver Portfólio</a>
              </Button>
              <Button
                variant="outline"
                className="border-border hover:border-primary text-white px-5 xs:px-6 py-4 xs:py-5 md:px-8 md:py-6 rounded-full font-medium text-sm sm:text-base"
                asChild
              >
                <a href="#servicos">Nossos Serviços</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full sm:w-10/12 md:w-5/6 lg:w-1/2 mx-auto lg:mx-0 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-card rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 relative overflow-hidden shadow-xl border border-border"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex space-x-1.5 xs:space-x-2">
                  <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="w-1/2 h-4 xs:h-5 bg-muted rounded"></div>
              </div>
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <motion.div 
                  className="h-20 xs:h-24 sm:h-32 md:h-36 lg:h-40 bg-gradient-primary rounded-lg flex items-center justify-center"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white opacity-70">Majestix Digital</div>
                </motion.div>
                <div className="flex space-x-1.5 xs:space-x-2 sm:space-x-4">
                  <motion.div 
                    className="w-1/3 h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 bg-gradient-secondary rounded-lg"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div 
                    className="w-1/3 h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 bg-primary rounded-lg"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
                  ></motion.div>
                  <motion.div 
                    className="w-1/3 h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 bg-secondary rounded-lg"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <div className="flex space-x-1.5 xs:space-x-2 sm:space-x-4">
                  <div className="w-2/3 h-5 xs:h-6 sm:h-8 bg-muted rounded"></div>
                  <div className="w-1/3 h-5 xs:h-6 sm:h-8 bg-accent rounded-lg"></div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-8 -right-8 w-32 xs:w-40 h-32 xs:h-40 rounded-full bg-gradient-primary opacity-20 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-32 xs:w-40 h-32 xs:h-40 rounded-full bg-gradient-secondary opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
        
        <div className="mt-16 xs:mt-20 sm:mt-24 pt-8 xs:pt-10 border-t border-border">
          <h3 className="text-center text-base xs:text-lg font-medium text-muted-foreground mb-6 xs:mb-8">Nossos Clientes e Parceiros</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-center">
                <motion.div 
                  className="h-8 xs:h-10 w-28 xs:w-32 sm:w-36 bg-muted rounded opacity-50"
                  whileHover={{ opacity: 0.8, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
