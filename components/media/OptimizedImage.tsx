import Image from 'next/image';
import { getImageDimensions } from '@/lib/slideshow';

interface OptimizedImageProps {
  path: string;
  alt: string;
  width?: number;
  height?: number;
  ratio?: number;
  priority?: boolean;
  className?: string;
}

export async function OptimizedImage({
  path,
  alt,
  width,
  height,
  ratio,
  priority = false,
  className,
}: OptimizedImageProps) {
  const actualRatio = ratio ?? await getImageDimensions(path);

  let finalWidth: number;
  let finalHeight: number;

  if (width && height) {
    finalWidth = width;
    finalHeight = height;
  } else if (width) {
    finalWidth = width;
    finalHeight = Math.round(width / actualRatio);
  } else if (height) {
    finalWidth = Math.round(height * actualRatio);
    finalHeight = height;
  } else {
    finalWidth = 800;
    finalHeight = Math.round(800 / actualRatio);
  }

  return (
    <Image
      src={path}
      alt={alt}
      width={finalWidth * 2}
      height={finalHeight * 2}
      className={className || 'image'}
      loading={priority ? undefined : 'lazy'}
      quality={100}
      style={{
        '--w': finalWidth,
        '--h': finalHeight,
      } as React.CSSProperties}
    />
  );
}
