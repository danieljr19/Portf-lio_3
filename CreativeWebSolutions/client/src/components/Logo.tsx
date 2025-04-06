import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ size = "md" }) => {
  const sizes = {
    sm: { 
      container: "h-8", 
      monitor: "w-10 h-8", 
      crown: "w-8 h-4 -top-4",
      code: "text-xs"
    },
    md: { 
      container: "h-12", 
      monitor: "w-14 h-11", 
      crown: "w-10 h-5 -top-5",
      code: "text-sm"
    },
    lg: { 
      container: "h-14", 
      monitor: "w-16 h-13", 
      crown: "w-12 h-6 -top-6",
      code: "text-base"
    },
  };

  return (
    <div className="flex items-center">
      <div className={`${sizes[size].container} mr-3 relative`}>
        {/* Coroa */}
        <motion.div 
          className={`absolute ${sizes[size].crown} left-1/2 transform -translate-x-1/2 z-10`}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20C0 20 5 8 10 8C15 8 20 18 20 18C20 18 25 8 30 8C35 8 40 20 40 20V24H0V20Z" fill="url(#crown-gradient)" />
            <circle cx="10" cy="5" r="5" fill="url(#crown-gradient)" />
            <circle cx="20" cy="5" r="5" fill="url(#crown-gradient2)" />
            <circle cx="30" cy="5" r="5" fill="url(#crown-gradient)" />
            <defs>
              <linearGradient id="crown-gradient" x1="0" y1="0" x2="40" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#3B82F6" />
                <stop offset="1" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="crown-gradient2" x1="0" y1="0" x2="40" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Monitor */}
        <motion.div 
          className={`${sizes[size].monitor} bg-gradient-primary rounded-md flex flex-col items-center relative shadow-lg mt-2`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* Moldura do monitor */}
          <div className="absolute inset-0 rounded-md bg-gradient-primary"></div>
          
          {/* Tela do monitor */}
          <div className="absolute inset-1 bg-black/90 rounded-sm flex items-center justify-center">
            <span className={`text-blue-400 ${sizes[size].code} font-bold`}>&lt;<span className="text-purple-400">/</span>&gt;</span>
          </div>
          
          {/* Base do monitor */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gradient-primary rounded-sm"></div>
        </motion.div>
      </div>
      <h1 className={`${size === 'lg' ? 'text-2xl' : 'text-xl'} font-montserrat font-bold`}>
        <span className="text-gradient">Majestix Digital</span>
      </h1>
    </div>
  );
};

export default Logo;
