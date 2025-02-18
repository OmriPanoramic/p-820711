import React from 'react';

const HeaderButtons: React.FC = () => (
  <div className="flex items-center gap-[32px] mt-8">
    <button className="flex h-[48px] px-[20px] justify-center items-center gap-[12px] rounded-[4px] bg-[#FF7110] text-white font-medium">
      Upgrade to Optimize
    </button>
    <a href="#" className="text-[#1195D6] text-lg font-medium">
      Why we transformed &rarr;
    </a>
  </div>
);

export default HeaderButtons; 