import React from "react";

const FooterLinks: React.FC = () => (
  <div className="w-full flex justify-between items-end py-[48px]">
    <div className="flex flex-col gap-2">
      <span className="text-[#FF6B2C] text-lg font-medium">
        Panoramic Power
      </span>
      <span className="text-[#6D6D6D] text-sm">
        Copyright © 2025 Panoramic Power
      </span>
    </div>
    <div className="flex items-center gap-8">
      <a
        href="#"
        className="text-[#6D6D6D] text-sm hover:text-[#171717] transition-colors"
      >
        Terms & Conditions
      </a>
      <a
        href="#"
        className="text-[#6D6D6D] text-sm hover:text-[#171717] transition-colors"
      >
        Privacy Policy
      </a>
      <a
        href="https://powerradar.energy"
        className="text-[#6D6D6D] text-sm hover:text-[#171717] transition-colors"
      >
        Login to your account
      </a>
    </div>
  </div>
);

export default FooterLinks;
