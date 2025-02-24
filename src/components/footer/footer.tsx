import { motion } from "motion/react";
import footerImage from "../../assets/footer-image.png";
import FooterContent from "./FooterContent";
import FooterLinks from "./FooterLinks";

export const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container flex flex-col items-center max-md:px-5"
      id="footer"
    >
      <div className="relative mb-20 flex w-full flex-col items-center overflow-hidden rounded-[32px] px-8 py-[120px] text-center">
        <motion.div
          className="absolute inset-0 grayscale"
          initial={{ backgroundPosition: "50% 0%" }}
          whileInView={{ backgroundPosition: "50% 20%" }}
          exit={{ backgroundPosition: "50% 0%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${footerImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#222",
            backgroundBlendMode: "luminosity",
          }}
        />
        <FooterContent />
      </div>

      {/* Divider */}
      <div className="container h-[1px] bg-[#E5E5E5]" />

      <FooterLinks />
    </motion.div>
  );
};
