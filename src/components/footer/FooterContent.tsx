import React from 'react';

const FooterContent: React.FC = () => (
  <div className="relative z-10">
    <h2 className="text-white text-[56px] font-medium leading-[1.2] mb-12">
      Ready to Unlock the Full<br />Optimize Experience?
    </h2>
    <div className="flex justify-center gap-4">
      <button className="flex h-[48px] px-[16px] justify-center items-center gap-[12px] rounded-[4px] border border-white/60 text-white hover:bg-white/30 transition-colors">
        Book a demo
      </button>
      <button className="flex h-[48px] px-[20px] justify-center items-center gap-[12px] rounded-[4px] bg-[#FF7110] text-white hover:bg-[#ff5b15] transition-colors">
        Upgrade now
      </button>
    </div>
  </div>
);

export default FooterContent; 