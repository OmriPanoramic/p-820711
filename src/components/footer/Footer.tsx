import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center px-[70px] py-[110px] max-md:px-5"
    >
      <div className="w-full max-w-[1440px] bg-[#222222] rounded-[32px] flex flex-col items-center py-[120px] px-8 text-center">
        <h2 className="text-white text-[56px] font-medium leading-[1.2] mb-4">
          Get Smarter today.
        </h2>
        <h3 className="text-white text-[56px] font-medium leading-[1.2] mb-12">
          Manage energy with Panoramic
        </h3>
        <button className="bg-[#FF6B2C] text-white px-6 py-3 rounded-lg font-medium">
          Request demo
        </button>
      </div>
    </motion.div>
  );
}; 