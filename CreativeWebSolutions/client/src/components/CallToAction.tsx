import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#D64FF4] blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-gradient-to-br from-muted to-card rounded-2xl p-8 sm:p-12 border border-border shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6">
              Pronto para <span className="text-gradient">transformar</span> sua presença digital?
            </h2>
            <p className="text-xl text-foreground mb-8">
              Vamos criar juntos um projeto que destaque seu negócio e conecte você com mais clientes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 rounded-full font-medium"
                asChild
              >
                <a href="#contato">Iniciar Projeto</a>
              </Button>
              <Button
                variant="outline"
                className="border border-border hover:border-primary text-white px-8 py-6 rounded-full font-medium"
                asChild
              >
                <a href="#portfolio">Ver Mais Trabalhos</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
