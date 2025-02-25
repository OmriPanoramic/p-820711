import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import enhancedExperience from "../assets/Computer-Imac-Smiley-Face--Streamline-Cyber-Duotone.svg";
import teamCollaboration from "../assets/Business-Chat-4--Streamline-Cyber-Duotone.svg";
import performanceSecurity from "../assets/Shield-3--Streamline-Cyber-Duotone.svg";
import cyber from "../assets/cyber.svg";
import target from "../assets/target.svg";
import smart from "../assets/smart.svg";
import support from "../assets/support.svg";
import business from "../assets/Business.svg";

import { useState } from "react";

const FeatureItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col border-b border-border/50 py-8 last:border-0"
    >
      <div 
        className="flex items-center gap-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={icon} alt={title} className="h-12 w-12" />
        <h3 className="text-xl text-muted-foreground flex-1">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-4 pl-[4.5rem] text-muted-foreground">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Section2 = () => {
  const features = [
    {
      icon: enhancedExperience,
      title: "Enhanced user experience",
      description: "A fresh, intuitive design with faster navigation, a sleek new look, and AI-powered quick search delivering better results in seconds.",
    },
    {
      icon: cyber,
      title: "End-to-end personalization",
      description: "Fully customizable dashboards, widgets, device grouping, and naming. Tailor benchmarks, thresholds, and visualizations to match your unique needs effortlessly.",
    },
    {
      icon: performanceSecurity,
      title: "Improved performance and security",
      description: "Built on a robust cloud infrastructure for 80% faster load times, 50% fewer network errors, and top-tier data security—ensuring stability, scalability, and privacy.",
    },
    {
      icon: target,
      title: "Continuous innovation and visionary roadmap",
      description: "Regularly benefit from feature updates, cutting-edge improvements, AI-powered features, and a forward-looking roadmap, designed to keep you ahead of the curve.",
    },
    {
      icon: smart,
      title: "Smarter energy intelligence",
      description: "Deeper insights into energy patterns, custom benchmarks, and enhanced proactive maintenance with AI-powered tools, tailored to your KPIs and workflows.",
    },
    {
      icon: support,
      title: "Superior support",
      description: "Experience top-tier assistance with faster response times, expert guidance, and a dedicated team to ensure your success with Optimize.",
    },
    {
      icon: business,
      title: "Empowered team performance",
      description: "Engage more stakeholders—across production, operations, sustainability, and beyond. Collaborate with every team member through powerful tools for teamwork, task delegation, and complete incident lifecycle management.",
    },
  ];

  return (
    <div className="w-full mb-10 lg:mb-32">
      <div className="flex flex-col items-start gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-h2">
            What's new in
            <br />
            <span className="text-primary">Panoramic Optimize</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
