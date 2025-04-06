import { forwardRef } from "react";
import { motion } from "framer-motion";

const statsItems = [
  { value: "120+", label: "Projetos entregues", color: "text-accent" },
  { value: "98%", label: "Clientes satisfeitos", color: "text-[#D64FF4]" },
  { value: "5+", label: "Anos de experiência", color: "text-secondary" },
  { value: "15", label: "Especialistas no time", color: "text-primary" }
];

const processSteps = [
  { 
    number: "1",
    title: "Descoberta",
    description: "Entendemos seus objetivos, público-alvo e necessidades específicas para alinhar a estratégia digital."
  },
  { 
    number: "2",
    title: "Planejamento",
    description: "Desenvolvemos wireframes e protótipos para visualizar a estrutura e o fluxo do projeto."
  },
  { 
    number: "3",
    title: "Design & Desenvolvimento",
    description: "Criamos o design visual e implementamos o código, garantindo qualidade e performance."
  },
  { 
    number: "4",
    title: "Lançamento & Suporte",
    description: "Finalizamos o projeto com testes rigorosos e oferecemos suporte contínuo após o lançamento."
  }
];

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="sobre" 
      className="py-20 bg-gradient-to-b from-muted to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-montserrat font-bold mb-6">
              Sobre a <span className="text-gradient">Majestix Digital</span>
            </h2>
            <p className="text-xl text-foreground mb-6">
              Somos uma agência digital especializada em transformar visões em realidade através de soluções digitais inovadoras e de alta performance.
            </p>
            <p className="text-muted-foreground mb-6">
              Desde nossa fundação, temos ajudado empresas e profissionais a estabelecerem uma presença online impactante. Nossa equipe combina expertise técnica e visão criativa para entregar projetos que não apenas impressionam visualmente, mas também geram resultados tangíveis.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {statsItems.map((stat, index) => (
                <div key={index}>
                  <div className={`text-3xl font-montserrat font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Equipe da Majestix Digital" 
                className="rounded-xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-primary rounded-lg -z-0"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-secondary rounded-lg -z-0"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-montserrat font-semibold text-center mb-12">Nosso Processo de Trabalho</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`absolute -top-5 -left-5 w-10 h-10 rounded-full ${index < 2 ? 'bg-gradient-primary' : 'bg-gradient-secondary'} flex items-center justify-center text-white font-bold`}>
                  {step.number}
                </div>
                <h4 className="text-xl font-montserrat font-semibold mb-4 mt-2">{step.title}</h4>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
