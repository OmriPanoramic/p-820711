import React from 'react';

interface HeaderTextProps {
  title: string;
  description: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ title, description }) => (
  <div>
    <h1 className="text-h2 text-[#222] font-sans">
      {title}
    </h1>
    <p className="text-lg text-[#6D6D6D] mt-4 max-w-2xl">
      {description}
    </p>
  </div>
);

export default HeaderText; 