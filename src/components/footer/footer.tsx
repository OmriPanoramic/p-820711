import { motion } from "framer-motion";
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
    >
      <div className="w-full rounded-[32px] flex flex-col items-center py-[120px] px-8 text-center relative overflow-hidden mb-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${footerImage})`,
            backgroundPosition: "50% 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            //filter: "grayscale(100%)",
          }}
        />
        <div
          className="absolute inset-0 bg-black"
          //style={{ mixBlendMode: "luminosity", opacity: 1 }}
        />
        <FooterContent />
      </div>

      {/* Divider */}
      <div className="container h-[1px] bg-[#E5E5E5]" />

      <FooterLinks />
    </motion.div>
  );
};
