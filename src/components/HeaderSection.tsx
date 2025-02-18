import React from 'react';
import HeaderText from './HeaderText';
import HeaderButtons from './HeaderButtons';

const HeaderSection: React.FC = () => {
  const fetchUserData = async (userId: string) => {
  };

  return (
    <div
      className="flex items-center self-stretch"
      style={{ padding: '250px 627px 351px 80px' }}
    >
      <div>
        <HeaderText
          title="The next step in your energy management journey"
          description="Smarter tools, deeper insights, greater savings — discover how upgrading to Panoramic Optimize can transform your future of energy management."
        />
        <HeaderButtons />
      </div>
    </div>
  );
};

export default HeaderSection;