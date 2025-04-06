import { forwardRef } from "react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Plano Starter",
    description: "Ideal para profissionais e pequenos negócios",
    price: "R$1.990",
    period: "/ única vez",
    features: [
      { name: "Site de até 5 páginas", included: true },
      { name: "Design responsivo", included: true },
      { name: "Otimização SEO básica", included: true },
      { name: "1 formulário de contato", included: true },
      { name: "Entrega em 15 dias", included: true },
      { name: "Integrações avançadas", included: false },
      { name: "Área administrativa", included: false },
    ],
    popular: false
  },
  {
    name: "Plano Profissional",
    description: "Perfeito para empresas em crescimento",
    price: "R$3.990",
    period: "/ única vez",
    features: [
      { name: "Site de até 10 páginas", included: true },
      { name: "Design premium responsivo", included: true },
      { name: "Otimização SEO completa", included: true },
      { name: "Área administrativa básica", included: true },
      { name: "Integração com redes sociais", included: true },
      { name: "Entrega em 21 dias", included: true },
      { name: "Estratégia de marketing", included: false },
    ],
    popular: true
  },
  {
    name: "Plano Enterprise",
    description: "Solução completa para grandes empresas",
    price: "R$8.990",
    period: "/ única vez",
    features: [
      { name: "Site com páginas ilimitadas", included: true },
      { name: "Design exclusivo responsivo", included: true },
      { name: "SEO avançado + consultoria", included: true },
      { name: "Área administrativa completa", included: true },
      { name: "Integrações personalizadas", included: true },
      { name: "Estratégia de marketing digital", included: true },
      { name: "Entrega em 30 dias", included: true },
    ],
    popular: false
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

const Pricing = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="precos" 
      className="py-20 bg-muted"
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
            Nossos <span className="text-gradient">Planos</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluções para cada necessidade e orçamento
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`${plan.popular ? 'md:scale-105 md:shadow-xl' : ''}`}
            >
              <Card className={`bg-card border ${plan.popular ? 'border-2 border-secondary' : 'border-border hover:border-primary'} transition-all duration-300 h-full overflow-hidden relative`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 w-full py-2 bg-gradient-primary text-center text-white font-medium">
                    Mais Popular
                  </div>
                )}
                <CardHeader className={`${plan.popular ? 'pt-12' : 'pt-6'}`}>
                  <CardTitle className="text-2xl font-montserrat font-semibold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-end mt-4">
                    <span className="text-4xl font-montserrat font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-accent mr-3" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground mr-3" />
                        )}
                        <span className={feature.included ? '' : 'text-muted-foreground'}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-primary hover:opacity-90'
                        : 'border border-border hover:border-primary bg-transparent'
                    } text-white px-6 py-6 rounded-full font-medium transition`}
                    asChild
                  >
                    <a href="#contato">Escolher Plano</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-card rounded-xl p-8 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-montserrat font-semibold mb-2">Precisa de uma solução personalizada?</h3>
              <p className="text-muted-foreground">
                Entre em contato para discutirmos um projeto sob medida para as necessidades específicas do seu negócio.
              </p>
            </div>
            <Button
              className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 rounded-full font-medium whitespace-nowrap"
              asChild
            >
              <a href="#contato">Falar com Especialista</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Pricing.displayName = "Pricing";

export default Pricing;
