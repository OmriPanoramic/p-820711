import { motion } from "framer-motion";
import footerImage from "../../img/footer.jpg";

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
                <div className="relative z-10"> {/* Content above the overlay */}
                    <h2 className="text-white text-[56px] font-medium leading-[1.2] mb-12">
                        Ready to Unlock the Full<br />Optimize Experience?
                    </h2>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Book a demo
                        </button>
                        <button className="bg-[#FF6B2C] hover:bg-[#ff5b15] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Upgrade now
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full max-w-[1440px] h-[1px] bg-[#E5E5E5] my-[32px]" />

            {/* Footer links section */}
            <div className="w-full max-w-[1440px] flex flex-col gap-2">
                <span className="text-[#FF6B2C] text-lg font-medium">Panoramic Power</span>
                <div className="flex justify-between items-center">
                    <span className="text-[#6D6D6D] text-sm">Copyright © 2025 Panoramic Power</span>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-[#6D6D6D] text-sm hover:text-[#171717] transition-colors">
                            Terms & Conditions
                        </a>
                        <a href="#" className="text-[#6D6D6D] text-sm hover:text-[#171717] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#6D6D6D] text-sm hover:text-[#171717] transition-colors">
                            Manage Cookies
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
