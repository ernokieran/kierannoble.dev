export interface SlideshowImage {
  url: string;
  ratio: number;
}

export interface Slideshow {
  images: SlideshowImage[];
  downloadUrl?: string;
}
