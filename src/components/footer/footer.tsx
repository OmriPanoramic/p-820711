import { motion } from "framer-motion";
import footerImage from "../../img/footer.jpg";
import FooterContent from './FooterContent';
import FooterLinks from './FooterLinks';

export const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full flex flex-col items-center px-[70px] py-[110px] max-md:px-5"
        >
            <div 
                className="w-full max-w-[1440px] rounded-[32px] flex flex-col items-center py-[120px] px-8 text-center relative overflow-hidden mb-20"
            >
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${footerImage})`,
                        backgroundPosition: "50% 75%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        filter: "grayscale(100%)",
                    }}
                />
                <div className="absolute inset-0 bg-black" style={{ mixBlendMode: "luminosity", opacity: 0.8 }} />
                <FooterContent />
            </div>

            {/* Divider */}
            <div className="w-full max-w-[1440px] h-[1px] bg-[#E5E5E5]" />

            <FooterLinks />
        </motion.div>
    );
};
