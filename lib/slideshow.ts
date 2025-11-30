import sizeOf from 'image-size';
import { readFileSync } from 'fs';
import { join } from 'path';
import type { Slideshow, SlideshowImage } from '@/types/slideshow';

export async function getImageDimensions(path: string): Promise<number> {
  try {
    const imagePath = join(process.cwd(), 'public', path);
    const buffer = readFileSync(imagePath);
    const dimensions = sizeOf(buffer);

    return (dimensions.width || 1) / (dimensions.height || 1);
  } catch (error) {
    console.warn(`Could not get dimensions for ${path}:`, error);
    return 1.5;
  }
}

export async function getSlideshowImages(
  paths: string[],
  downloadUrl?: string
): Promise<Slideshow> {
  const images: SlideshowImage[] = await Promise.all(
    paths.map(async (url) => {
      const ratio = await getImageDimensions(url);
      return { url, ratio };
    })
  );

  return { images, downloadUrl };
}

export function calculateImageDimensions(
  width?: number,
  height?: number,
  ratio: number = 1.5
): { width: number; height: number } {
  if (width && height) {
    return { width, height };
  }

  if (width) {
    return {
      width,
      height: Math.round(width / ratio),
    };
  }

  if (height) {
    return {
      width: Math.round(height * ratio),
      height,
    };
  }

  return {
    width: 800,
    height: Math.round(800 / ratio),
  };
}
