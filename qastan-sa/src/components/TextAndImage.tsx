import React from 'react';

interface FeatureData {
  imageUrl: string;
  title: string;
  description: string;
}

const featuresData: FeatureData[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1715153871357-38602a145547?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Digital X-Rays",
    description: "Dr Albazzaz, Dr Javed and Dr Safi bring the most up to date dental technology to their West Chicago practice. They use digital x-rays which require less radiation and provide improved diagnostic quality to every patient appointment. The doctors are happy to share their findings with you by showing you your dental x-rays on a large computer screen."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1715153871357-38602a145547?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dental Cleanings",
    description: "Our dentists treat patients with healthy gums and patients who inflammation and other periodontal diseases. Our staff agree with the American Dental Association guidelines for dental cleanings. We want all patients to visit the dentist for their dental cleanings at least twice a year."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1715153871357-38602a145547?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fluoride Treatments",
    description: "The staff at North Ave Dental Associates believe that everyone should have routine professional fluoride treatments."
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1715153871357-38602a145547?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Oral Hygiene Instruction",
    description: "Home care is an important part of maintaining healthy teeth and gums. Our staff are happy to review proper brushing & flossing techniques as well as other dental home care solutions that will prevent dental disease."
  }
];

const Cards: React.FC = () => {
  return (
    <div id="features" className="p-8 md:p-20">
      <div className="features-inner">
        {featuresData.map((feature, index) => (
          <div key={index} className={`features-group bg-orange-500 mb-8 md:mb-20 flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse bg-blue-500'}`}>
            <div className="features-image md:w-1/2">
              <img src={feature.imageUrl} alt={feature.title} className="w-full block transform scale-105 transition duration-300 ease-in-out" />
            </div>
            <div className="features-text md:w-1/2  p-10">
              <h1 className="text-black text-2xl font-bold mb-4">{feature.title}</h1>
              <p className="text-gray-700 text-lg leading-7">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
