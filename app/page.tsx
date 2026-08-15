import { IntroductionTemplate } from '@/components/templates/IntroductionTemplate';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Row } from '@/components/layout/Row';

export default function Home() {
  return (
    <IntroductionTemplate>
      <Row>
        <ProjectCard
          featured
          chipText="Self-Hosted"
          descriptionText="A self-hosted dashboard for solar, battery, and grid energy - built solo, top to bottom"
          logoImageUrl="/img/Projects/Metrd/logo.svg"
          project="metrd"
          url="/metrd"
        />
        <ProjectCard
          chipText="Dissertation"
          descriptionText="AI-powered photo-sharing app with smart image tagging"
          logoImageUrl="/img/Projects/Photi/logo.svg"
          project="photi"
          url="/photi"
        />
      </Row>
      <Row>
        <ProjectCard
          chipText="Senior Developer"
          descriptionText="Full stack development and DevOps on the platform behind 2,000+ car dealerships"
          logoImageUrl="/img/Projects/Pinewood/logo.svg"
          project="pinewood"
          url="/pinewood"
        />
        <ProjectCard
          chipText="Backend"
          descriptionText="Modern eCommerce for the next generation of music sales"
          logoImageUrl="/img/Projects/Harmony/logo.svg"
          project="harmony"
          url="/harmony"
        />
      </Row>
    </IntroductionTemplate>
  );
}
