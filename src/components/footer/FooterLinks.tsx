import React from "react";

const FooterLinks: React.FC = () => (
  <>
    <div className="flex w-full flex-col items-center justify-between gap-8 pt-8 lg:flex-row lg:items-end lg:pt-[48px]">
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
    <div className="mt-6 w-full text-center text-[10px] text-[#6D6D6D] pb-4">
      <p>
        The information provided on this page is for promotional and
        informational purposes only. While we strive to ensure accuracy, we do
        not guarantee the completeness, reliability, or suitability of the
        content for any specific purpose. Any testimonials or results shared are
        individual experiences and may not reflect typical outcomes. Your use of
        this website and reliance on any information is at your own risk. We
        encourage you to review our{" "}
        <a
          href="https://support.powerradar.energy/kb/guide/en/privacy-notice-IyF6Tl9NVp/Steps/2356295"
          className="text-primary hover:underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://support.powerradar.energy/kb/guide/en/powerradar-terms-and-conditions-for-data-services-V5LSLeWNWh/Steps/2356143"
          className="text-primary hover:underline"
        >
          Terms of Service
        </a>{" "}
        for more details.
      </p>
    </div>
  </>
);

export default FooterLinks;
