import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';
import type { ProjectName } from '@/types/project';

interface ProjectCardProps {
  url: string;
  project: ProjectName;
  chipText: string;
  descriptionText: string;
  logoImageUrl: string;
  featured?: boolean;
}

export function ProjectCard({
  url,
  project,
  chipText,
  descriptionText,
  logoImageUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      href={url}
      prefetch={true}
      className={clsx(
        'project',
        featured && 'project--featured'
      )}
      data-project={project}
    >
      <article>
        <h1 className="project__title">
          <Image
            className="project__title-image"
            src={logoImageUrl}
            alt={descriptionText}
            width={300}
            height={50}
            loading="lazy"
            decoding="async"
            unoptimized
          />
          <p className="project__title-description">{descriptionText}</p>
        </h1>
        <span className="project__chip">{chipText}</span>
        <div className="project__navigation">
          <p className="project__navigation-tooltip">View Project</p>
          <div className="project__navigation-button">
            <i className="fa fa-arrow-right"></i>
          </div>
        </div>
      </article>
    </Link>
  );
}
