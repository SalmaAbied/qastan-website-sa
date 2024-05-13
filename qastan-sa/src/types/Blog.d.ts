// hero
interface Slide {
  image: string;
  title: string;
}

interface ImageProps {
  src: string;
  title: string;
  selected: boolean;
  onClick: () => void;
}

interface HeroProps {
  slides: Slide[];
}

// cards with image
interface FeatureData {
  imageUrl: string;
  title: string;
  description: string;
}

// cards with image (toepassingen)
interface CardProps {
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
}
