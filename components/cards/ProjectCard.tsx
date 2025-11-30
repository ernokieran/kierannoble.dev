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
          <img
            className="project__title-image"
            src={logoImageUrl}
            alt={descriptionText}
            height="50"
            width="300"
            loading="lazy"
            decoding="async"
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
