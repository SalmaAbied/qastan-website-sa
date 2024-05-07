import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

const ReactLottie = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch('https://lottie.host/c5380bc2-cfb3-4fb2-a31a-ea0aec9bdc20/xseUBpUbNU.json');
        const json = await response.json();
        setAnimationData(json);
      } catch (error) {
        console.error('Er is een fout opgetreden bij het ophalen van de Lottie JSON-gegevens:', error);
      }
    };

    fetchAnimationData();
  }, []);

  if (!animationData) {
    return <div>Loading...</div>; 
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie 
        options={defaultOptions}
        height={400} 
        width={400} 
      />
    </div>
  );
};

export default ReactLottie;
