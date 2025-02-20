import React from "react";

const FooterContent: React.FC = () => (
  <div className="relative z-10">
    <h2 className="mb-12 text-[56px] font-medium leading-[1.2] text-white">
      Get started today.
      <br />
      Manage energy with Panoramic
    </h2>
    <div className="flex justify-center gap-4">
      <button className="flex h-[48px] items-center justify-center gap-[12px] rounded-[4px] border border-white/60 px-[16px] text-white transition-colors hover:bg-white/30">
        Book a demo
      </button>
      <button className="flex h-[48px] items-center justify-center gap-[12px] rounded-[4px] bg-[#FF7110] px-[20px] text-white transition-colors hover:bg-[#ff5b15]">
        Upgrade now
      </button>
    </div>
  </div>
);

export default FooterContent;
