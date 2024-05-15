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
  button: string;
}

// cards with image (toepassingen)
interface CardProps {
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
}

// cards grid (oplossingen)

interface CardData {
  src: string;
  alt: string;
  category: string;
  link: string; 
}

interface GridCardsProps {
  cards: CardData[];
}

// hero collage (oplossingen)
interface HeroCollageProps {
  images: string[];
}
