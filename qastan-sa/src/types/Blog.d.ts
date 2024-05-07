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