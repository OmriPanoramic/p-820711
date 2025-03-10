import React, { useState } from "react";
import { DemoModal } from "../DemoModal";
import { UpgradeModal } from "../UpgradeModal";

const FooterContent: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDemoModalOpen(true);
  };

  const handleUpgradeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsUpgradeModalOpen(true);
  };
  return (
    <>
      <div className="relative z-10">
        <h2 className="mb-12 text-[35px] font-medium leading-[1.2] text-white lg:text-h1 max-w-[750px]">
        Begin your new energy journey today
        </h2>
        <p className="text-white text-sm pb-4">Get in touch with your support provider to:</p>
        <div className="flex justify-center gap-4 flex-col md:flex-row">
          <button data-fs-track="footer-demo-button" onClick={handleDemoClick} className="flex h-[48px] items-center justify-center gap-[12px] rounded-[4px] border border-white/60 px-[16px] text-white transition-colors hover:bg-white/30">
            Book a demo
          </button>
          <button data-fs-track="footer-upgrade-button" onClick={handleUpgradeClick} className="flex h-[48px] items-center justify-center gap-[12px] rounded-[4px] bg-[#FF7110] px-[20px] text-white transition-colors hover:bg-[#ff5b15]">
            Upgrade now
          </button>
        </div>
      </div>
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </>
  );
};

export default FooterContent;
