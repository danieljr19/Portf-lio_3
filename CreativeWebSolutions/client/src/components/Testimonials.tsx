import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A Majestix Digital transformou completamente a presença online da nossa empresa. O site que eles criaram não só é visualmente impressionante, mas também resultou em um aumento de 40% nas nossas conversões.",
    author: "Carlos Rodrigues",
    position: "CEO, TechSolutions",
    initials: "CR"
  },
  {
    quote: "O portfólio que a equipe da Majestix criou para mim superou todas as minhas expectativas. Profissionalismo do início ao fim, e agora tenho uma plataforma que realmente destaca meu trabalho.",
    author: "Ana Silva",
    position: "Fotógrafa",
    initials: "AS"
  },
  {
    quote: "Nossa página de vendas precisava de uma renovação urgente. A Majestix não só entregou um design excepcional, mas também implementou estratégias que aumentaram nossas vendas em 65% nos primeiros dois meses.",
    author: "Marcos Oliveira",
    position: "Diretor de Marketing, EcoStore",
    initials: "MO"
  },
  {
    quote: "Trabalhamos com a Majestix Digital na criação do nosso e-commerce e o resultado foi incrível. Plataforma intuitiva, design moderno e conversões acima do esperado!",
    author: "Júlia Mendes",
    position: "Proprietária, Moda Sustentável",
    initials: "JM"
  },
  {
    quote: "Excelente experiência! A equipe entendeu perfeitamente o conceito da minha marca e criou um site que reflete exatamente os valores que eu queria transmitir.",
    author: "Pedro Alves",
    position: "Empresário, Café Orgânico",
    initials: "PA"
  },
  {
    quote: "A atenção aos detalhes e o cuidado com a experiência do usuário foram impressionantes. Agora temos um site rápido, bonito e funcional, tudo o que precisávamos!",
    author: "Fernanda Costa",
    position: "Gerente de Projetos, ConsultTech",
    initials: "FC"
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

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-montserrat font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A satisfação dos nossos clientes é o nosso maior orgulho
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card border border-border h-full">
                <CardContent className="pt-8">
                  <div className="flex items-center mb-6">
                    <div className="text-accent text-4xl">
                      <Quote />
                    </div>
                  </div>
                  <p className="text-foreground italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-montserrat font-semibold">{testimonial.author}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
