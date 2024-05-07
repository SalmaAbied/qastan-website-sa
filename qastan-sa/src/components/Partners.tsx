import React from 'react';

const Slider: React.FC = () => {
  const animationSpeed = '40s';

  return (
    <div className="bg-white shadow-xl h-100 mx-auto relative overflow-hidden w-96">
      <div className="before-and-after absolute inset-0 flex">
        <div className="before-gradient"></div>
        <div className="after-gradient"></div>
      </div>
      <div className="slide-track animation" style={{ animationDuration: animationSpeed }}>
        {[...Array(14)].map((_, index) => (
          <div key={index} className="slide h-100 w-250">
            <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/${(index % 7) + 1}.png`} alt="" className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
