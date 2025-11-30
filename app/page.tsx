import { IntroductionTemplate } from '@/components/templates/IntroductionTemplate';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Row } from '@/components/layout/Row';

export default function Home() {
  return (
    <IntroductionTemplate>
      <Row>
        <ProjectCard
          featured
          chipText="Dissertation"
          descriptionText="AI-powered photo-sharing app with smart image tagging"
          logoImageUrl="/img/Projects/Photi/logo.svg"
          project="photi"
          url="/photi"
        />
        <ProjectCard
          chipText="Backend"
          descriptionText="Modern eCommerce for the next generation of music sales"
          logoImageUrl="/img/Projects/Harmony/logo.svg"
          project="harmony"
          url="/harmony"
        />
      </Row>
      <Row>
        <ProjectCard
          chipText="Photography"
          descriptionText="An exploration of distortion, glitching, and the deconstruction of images"
          logoImageUrl="/img/Projects/ExperimentalImagery/logo.svg"
          project="experimentalImagery"
          url="/experimentalimagery"
        />
        <ProjectCard
          chipText="Photography"
          descriptionText="A visual study of form, structure, and industrial repetition"
          logoImageUrl="/img/Projects/PartsAndSections/logo.svg"
          project="partsAndSections"
          url="/partsandsections"
        />
      </Row>
    </IntroductionTemplate>
  );
}
