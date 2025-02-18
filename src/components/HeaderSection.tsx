import React from 'react';

const HeaderSection: React.FC = () => {
  return (
    <div
      className="flex items-center self-stretch"
      style={{ padding: '250px 627px 351px 80px' }}
    >
      <div>
        <h1 className="text-h2 text-[#222] font-sans">
          The next step in your energy management journey
        </h1>
        <p className="text-lg text-[#6D6D6D] mt-4 max-w-2xl">
          Smarter tools, deeper insights, greater savings — discover how upgrading to Panoramic Optimize can transform your future of energy management.
        </p>
        <div className="flex items-center gap-[32px] mt-8">
          <button className="flex h-[48px] px-[20px] justify-center items-center gap-[12px] rounded-[4px] bg-[#FF7110] text-white font-medium">
            Upgrade to Optimize
          </button>
          <a href="#" className="text-[#1195D6] text-lg font-medium">
            Why we transformed &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;