import React from "react";

const FooterLinks: React.FC = () => (
  <div className="flex w-full items-end justify-between py-[48px]">
    <div className="flex flex-col gap-2">
      <span className="text-lg font-medium text-[#FF6B2C]">
        Panoramic Power
      </span>
      <span className="text-sm text-[#6D6D6D]">
        Copyright © 2025 Panoramic Power
      </span>
    </div>
    <div className="flex items-center gap-8">
      <a
        href="#"
        className="text-sm text-[#6D6D6D] transition-colors hover:text-[#171717]"
      >
        Terms & Conditions
      </a>
      <a
        href="#"
        className="text-sm text-[#6D6D6D] transition-colors hover:text-[#171717]"
      >
        Privacy Policy
      </a>
      <a
        href="https://powerradar.energy"
        className="text-sm text-[#6D6D6D] transition-colors hover:text-[#171717]"
      >
        Login to your account
      </a>
    </div>
  </div>
);

export default FooterLinks;
