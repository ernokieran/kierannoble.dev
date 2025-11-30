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
