import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Selecione um serviço" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: <Mail className="text-white" />,
    title: "Email",
    details: "contato@majestixdigital.com"
  },
  {
    icon: <Phone className="text-white" />,
    title: "Telefone",
    details: "+55 (11) 97024-1496"
  },
  {
    icon: <MapPin className="text-white" />,
    title: "Endereço",
    details: "Av. Paulista, 1000, São Paulo - SP"
  }
];

const faqItems = [
  {
    question: "Qual o prazo médio para entrega de um projeto?",
    answer: "O prazo varia de acordo com a complexidade do projeto e o plano escolhido, podendo ser de 15 a 30 dias para a maioria dos projetos."
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim, oferecemos 30 dias de suporte gratuito após a entrega do projeto. Após esse período, temos planos de manutenção mensais."
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer: "Trabalhamos com 50% de entrada para iniciar o projeto e 50% na entrega final. Aceitamos diversas formas de pagamento."
  }
];

const Contact = forwardRef<HTMLElement>((props, ref) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "Criação de site",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato o mais breve possível.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section 
      ref={ref}
      id="contato" 
      className="py-16 xs:py-20 bg-muted code-bg"
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 xs:mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl xs:text-4xl font-montserrat font-bold mb-3 xs:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Entre em <span className="text-gradient">Contato</span>
          </motion.h2>
          <motion.p 
            className="text-lg xs:text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Estamos prontos para transformar sua visão em realidade
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            className="w-full sm:w-11/12 md:w-10/12 mx-auto lg:mx-0 lg:w-1/2 lg:pr-8 xl:pr-12 mb-8 xs:mb-10 sm:mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Nome completo</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Seu nome" 
                          className="bg-card border-border focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="seu@email.com" 
                          className="bg-card border-border focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Telefone (opcional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(00) 00000-0000" 
                          className="bg-card border-border focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Serviço de interesse</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-card border-border focus:border-primary">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Criação de site">Criação de site</SelectItem>
                          <SelectItem value="Portfólio profissional">Portfólio profissional</SelectItem>
                          <SelectItem value="Página de vendas">Página de vendas</SelectItem>
                          <SelectItem value="Projeto personalizado">Projeto personalizado</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Conte-nos sobre seu projeto..." 
                          className="bg-card border-border focus:border-primary min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-gradient-primary hover:opacity-90 text-white w-full py-4 xs:py-5 sm:py-6 rounded-full font-medium text-sm sm:text-base shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="w-full sm:w-11/12 md:w-10/12 mx-auto lg:mx-0 lg:w-1/2 lg:pl-8 xl:pl-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-xl p-5 xs:p-6 sm:p-8 border border-border mb-6 xs:mb-8 shadow-sm">
              <h3 className="text-xl xs:text-2xl font-montserrat font-semibold mb-4 xs:mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-9 h-9 xs:w-10 xs:h-10 rounded-full ${index === 1 ? 'bg-gradient-secondary' : 'bg-gradient-primary'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      {item.icon}
                    </div>
                    <div className="ml-3 xs:ml-4">
                      <h4 className="text-base xs:text-lg font-medium">{item.title}</h4>
                      <p className="text-sm xs:text-base text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-5 xs:p-6 sm:p-8 border border-border shadow-sm">
              <h3 className="text-xl xs:text-2xl font-montserrat font-semibold mb-4 xs:mb-6">FAQ</h3>
              <div className="space-y-4 xs:space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <h4 className="text-base xs:text-lg font-medium mb-1 xs:mb-2">{item.question}</h4>
                    <p className="text-sm xs:text-base text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
