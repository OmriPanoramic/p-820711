import { motion } from "motion/react";
import enhancedExperience from "../assets/Computer-Imac-Smiley-Face--Streamline-Cyber-Duotone.svg";
import customizedInsights from "../assets/Alarm-Snooze--Streamline-Cyber-Duotone.svg";
import sustainability from "../assets/Globe-1--Streamline-Cyber-Duotone.svg";
import teamCollaboration from "../assets/Business-Chat-4--Streamline-Cyber-Duotone.svg";
import performanceSecurity from "../assets/Shield-3--Streamline-Cyber-Duotone.svg";

const FeatureItem = ({ icon, title }: { icon: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-6 py-8 border-b border-border/50 last:border-0"
  >
    <img src={icon} alt={title} className="w-12 h-12" />
    <h3 className="text-xl text-muted-foreground">{title}</h3>
  </motion.div>
);

export const Section2 = () => {
  const features = [
    {
      icon: enhancedExperience,
      title: "Enhanced & easy user experience",
    },
    {
      icon: customizedInsights,
      title: "Customized insights, alerts & notifications",
    },
    {
      icon: sustainability,
      title: "Sustainability widgets & reports",
    },
    {
      icon: teamCollaboration,
      title: "Enhanced team collaboration",
    },
    {
      icon: performanceSecurity,
      title: "Improved performance & security",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">What's new in</h2>
          <h1 className="text-4xl font-bold text-[#FF6B2C] mb-8">
            Panoramic Optimize
          </h1>
        </motion.div>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
