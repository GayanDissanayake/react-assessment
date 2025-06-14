export interface Image {
  id: number;
  src: string;
  alt: string;
}

export interface CarouselProps {
  images: Image[];
}
