import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const footerLinks = {
  services: [
    { name: "Criação de Sites", href: "#servicos" },
    { name: "Portfólios Profissionais", href: "#servicos" },
    { name: "Páginas de Vendas", href: "#servicos" },
    { name: "E-commerce", href: "#servicos" },
    { name: "Aplicações Web", href: "#servicos" },
  ],
  quickLinks: [
    { name: "Início", href: "#inicio" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ],
  social: [
    { icon: <Facebook className="h-4 w-4" />, href: "#" },
    { icon: <Instagram className="h-4 w-4" />, href: "#" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#" },
    { icon: <Twitter className="h-4 w-4" />, href: "#" },
  ]
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      await apiRequest("POST", "/api/newsletter", { email });
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Erro ao realizar inscrição",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground mb-6">
              Transformamos ideias em experiências digitais impactantes, com foco em resultados.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Inscreva-se para receber dicas e novidades do mundo digital
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <Input 
                type="email" 
                placeholder="Seu email" 
                className="flex-1 bg-card border-border focus:border-primary rounded-r-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-gradient-primary hover:opacity-90 rounded-l-none"
                disabled={isSubscribing}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Majestix Digital. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
