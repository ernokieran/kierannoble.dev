import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import { Section } from '@/components/layout/Section';
import { Row } from '@/components/layout/Row';
import { Column } from '@/components/layout/Column';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { Media } from '@/components/media/Media';
import { getSlideshowImages } from '@/lib/slideshow';

export default async function PhotiPage() {
  const designsSlideshow = await getSlideshowImages(
    Array.from({ length: 10 }, (_, i) =>
      `/img/Projects/Photi/Designs/Designs-${String(i + 1).padStart(2, '0')}.webp`
    )
  );

  const reportSlideshow = await getSlideshowImages(
    Array.from({ length: 148 }, (_, i) =>
      `/img/Projects/Photi/Report/FYP-R-C-${String(i + 1).padStart(3, '0')}.webp`
    )
  );

  return (
    <DefaultTemplate project="photi">
      <Section
        logoUrl="/img/Projects/Photi/logo.svg"
        subtitle="AI Driven photo sharing social media image sharing platform"
        type="primary"
        alignment="centered"
      >
        <h3>This project was created as part of my Final Year Project within the third year of my Computer Science degree. The title for this project was &apos;Increasing Artificial Intelligence Image Recognition Usage Within a Photo Sharing Application.&apos;</h3>
      </Section>

      <Section
        type="secondary"
        title="Problem Domain"
        subtitle="To be able to deliver a project, a clear set of requirements needed to be defined. The requirements for this project were created by looking at what was currently available on the market and what was missing, as well as the major problems that users stated with the existing solutions."
      >
        <p>The main requirements were:</p>
        <ol>
          <li>Give users a personalised feed of images based on their likes</li>
          <li>Allow users to upload images to the platform and have their images automatically tagged</li>
          <li>Allow users to search for images based on tags</li>
          <li>Allow users to search for and follow other users</li>
          <li>Allow users to like and comment on images</li>
          <li>Allow users to view and update all information regarding their account, including application settings and content preferences</li>
          <li>Be performant and scalable, allowing for a large number of users to use the application at the same time</li>
        </ol>
      </Section>

      <Section
        alignment="right"
        title="Initial Designs"
        subtitle="Creating a unique yet familiar look and feel for the application was important to the success of the project. It was necessary to create a design that was easy to use and navigate, but also looked modern and clean."
      >
        <p>To deliver this, a custom design system was created. This design system was created using Figma and was used to create the initial designs for the application. The initial designs were then used to create a prototype of the application, without working data, but enough to give an insight into how the application would look and feel, especially useful for asking for user feedback before moving onto the technical development of the application as a whole.</p>
        <Media slideshow={designsSlideshow}>
          <OptimizedImage
            path="/img/Projects/Photi/Designs/Designs-01.webp"
            alt="Log In interface for Photi social media image sharing platform mockup, showing email and password fields and a 'Log In' button."
            height={400}
          />
        </Media>
      </Section>

      <Section
        type="tertiary"
        alignment="centered"
        title="Technology Stack"
        subtitle="To be able to deliver the project, a wide variety of different technologies were used. These technologies were used to deliver the project in a way that was performant, scalable and easy to maintain."
      >
        <p>The main technologies used to deliver this full stack application were:</p>
        <Row equal>
          <Column>
            <h4 className="section__subtitle">Backend</h4>
            <ul>
              <li>Laravel</li>
              <li>MySQL</li>
              <li>Intervention</li>
            </ul>
          </Column>
          <Column>
            <h4 className="section__subtitle">Frontend</h4>
            <ul>
              <li>Livewire</li>
              <li>Vite</li>
              <li>SCSS</li>
            </ul>
          </Column>
          <Column>
            <h4 className="section__subtitle">Other Technologies</h4>
            <ul>
              <li>Azure Computer Vision</li>
              <li>Azure Blob Storage</li>
              <li>Cloudflare CDN</li>
            </ul>
          </Column>
        </Row>
      </Section>

      <Section
        type="secondary"
        alignment="left"
        title="Project Documentation"
        subtitle="Throughout the project, a variety of different documents were created to help with the documentation and development of the project."
      >
        <p>The documents were used to give an insight into each decision made throughout the project, with the reasoning given for each. This documentation aims to provide an explanation into why each technology and product was chosen, as well as how they were used to deliver the project.</p>
        <p>These documents and the main report document are available to read below.</p>
        <Media slideshow={reportSlideshow}>
          <OptimizedImage
            path="/img/Projects/Photi/Report/FYP-R-C-001.webp"
            alt="Dissertation Report Cover Page"
            height={400}
          />
        </Media>
      </Section>

      <Section
        type="primary"
        alignment="centered"
        title="Final Product"
        subtitle="The outcome of this project was a fully functional web application that allows users to upload images and have them automatically tagged with relevant tags. The application also allows users to search for images based on tags and other users."
      >
        <p>You can take a look at and use the prototype application below or by visiting <a href="https://photi.studio" target="_blank" rel="noopener noreferrer">photi.studio</a>.</p>
        <p>The source code for this project is available at <a href="https://github.com/ernokieran/photi.studio" target="_blank" rel="noopener noreferrer">github.com/ernokieran/photi.studio</a>.</p>
      </Section>
    </DefaultTemplate>
  );
}
