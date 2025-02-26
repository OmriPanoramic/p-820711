import React from "react";

const FooterLinks: React.FC = () => (
  <div className="flex w-full items-center gap-8 lg:items-end justify-between lg:py-[48px] py-8 flex-col lg:flex-row">
    <div className="flex flex-col gap-2 text-center lg:text-left">
      <span className="text-lg font-medium text-primary">
        Panoramic Power
      </span>
      <span className="text-sm text-[#6D6D6D]">
        Copyright © 2025 Panoramic Power
      </span>
    </div>
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      <a
        href="https://support.powerradar.energy/kb/guide/en/powerradar-terms-and-conditions-for-data-services-V5LSLeWNWh/Steps/2356143"
        className="text-sm text-[#6D6D6D] transition-colors hover:text-[#171717]"
      >
        Terms & Conditions
      </a>
      <a
        href="https://support.powerradar.energy/kb/guide/en/privacy-notice-IyF6Tl9NVp/Steps/2356295"
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
