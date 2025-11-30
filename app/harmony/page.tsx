import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import { Section } from '@/components/layout/Section';
import { Row } from '@/components/layout/Row';
import { Column } from '@/components/layout/Column';
import { Media } from '@/components/media/Media';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { getSlideshowImages } from '@/lib/slideshow';

export default async function HarmonyPage() {
  const initialDesignsSlideshow = await getSlideshowImages([
    '/img/Projects/Harmony/initial-designs.webp',
  ]);

  const uiuxSlideshow = await getSlideshowImages([
    '/img/Projects/Harmony/prototype-ui.webp',
  ]);

  return (
    <DefaultTemplate project="harmony">
      <Section
        type="primary"
        logoUrl="/img/Projects/Harmony/logo.svg"
        subtitle="Modern eCommerce for the next generation of music sales"
        alignment="centered"
      >
        <p>
          This project is the outcome of{' '}
          <a href="https://www.iweb.co.uk/" target="_blank" rel="noopener noreferrer">
            iWeb&apos;s
          </a>{' '}
          client briefing during an assessment within the second year of my Computer Science degree.
        </p>
      </Section>

      <Section title="Process" type="secondary">
        <p>
          At the start of this task, the team and myself decided on how to approach the different stages in the lifecycle of a project and its development - along with the client and our project supervisor, we agreed so that we would follow the steps outlined below:
        </p>
        <ol>
          <li>Initial Wireframe Designs</li>
          <li>Design Prototype Mock-Up</li>
          <li>Backend / Feature Development</li>
        </ol>
        <p>
          Surrounding each of these stages we maintained communication both within our team, as well as with our project supervisor and the client.
        </p>
        <p>
          We implemented an iterative approach to the process which allowed us to all to air our opinions and move forwards with the project whilst allowing for ideas and designs to change freely and quickly.
        </p>
      </Section>

      <Section title="Initial Designs" alignment="centered">
        <p>
          These wireframe designs were received very well by the client and were praised for them looking and feeling like something that could be implemented into a real and professional looking product that the client would actually make.
        </p>
        <p>
          Ultimately, we collectively decided that we would take a hybrid between the two wireframe designs and create a product that implemented the &apos;best&apos; parts from each design into the UI/UX prototype.
        </p>
        <Media slideshow={initialDesignsSlideshow}>
          <OptimizedImage
            path="/img/Projects/Harmony/initial-designs.webp"
            alt="A comparison of red and blue low-fidelity wireframes for a music website or app is shown for desktop and mobile. The red wireframes are basic layouts for the home page (popular playlists, new releases, events, newsletter), a product page (album details), and a music home (album grid). The blue wireframes offer more detail for the same pages, suggesting elements like carousels, track listings, filtering, and search functionality across both desktop and mobile interfaces."
            height={400}
          />
        </Media>
      </Section>

      <Section title="UI/UX Prototype" type="tertiary" alignment="right">
        <Row equal>
          <Media slideshow={uiuxSlideshow}>
            <OptimizedImage
              path="/img/Projects/Harmony/prototype-ui.webp"
              alt="Webpage capture of the Harmony online music store. The main content area shows a grid of album listings with cover art, artist names (e.g., Lorde, Jamie xx, Taylor Swift), album titles (e.g., Melodrama, In Colour, 1989, Emotion), available formats (Digital, CD, Vinyl), prices in British Pounds (£), and a 'Buy' button. Filter options for 'Vinyl', 'Tap', and 'Rock' are visible at the top left, along with a search bar. The website header includes links for 'Music', 'Events', 'Merch', 'Cart', and 'Log in'."
              width={500}
            />
          </Media>
          <Column small>
            <p>
              After the meeting with the client, we implemented the initial version of our UI/UX Prototype.
            </p>
            <p>
              We tried to play to the strengths of the team, and as Sam was the member with the most experience in UI Design, he was tasked with implementing the prototype of the core layout for the web app as well as designing some cards for displaying information such as:
            </p>
            <ul>
              <li>Album listings</li>
              <li>Event listings</li>
              <li>Merch listings</li>
            </ul>
            <div style={{ flexGrow: 1 }} />
          </Column>
        </Row>
      </Section>

      <Section
        title="Feature Development"
        subtitle="Once we had designs that were approved by both the client and the project supervisor, we started to take these designs which up until now were static pages and start to build a data framework around it. For this, I took the lead as I have the most experience in backend development."
        type="secondary"
      >
        <p>
          I started by taking the design and breaking the elements into distinct components, such as buttons, navigation items, footers (etc) and converting them, so they are reusable and extensible throughout the application. Once this had been completed I could move onto creating a data structure for the application.
        </p>
        <p>
          As this web application is primary used for creating a cart and ordering music from the store, the data for the music had to be organised carefully to allow for a few key pieces of functionality: each release can have different release types (CD, Vinyl, Digital), each of which can have many groupings within them, such as a CD release may have multiple discs. Similarly, within each of these discs (if they exist), there can be many tracks, which may be different to a track on another release type. This problem is compounded by the functionality that links merch to album listings and their tracks.
        </p>
        <p>
          Throughout this process we kept in contact with the client to ensure that they were happy with the progress being made and so that we could receive relevant feedback and make changes with the 8 weeks that we had to complete this project from conception to final delivery.
        </p>
      </Section>

      <Section title="Final Product" alignment="centered" type="primary">
        <p>
          Ultimately, this project received a grade of 96% (1st), which is accredited in no small part to the great team that we had - our attitudes to succeed and the love and passion that we all had for the project was noted by the client who congratulated us on creating a project that functions the way that it does so quickly and professionally.
        </p>
        <p>The team for this project was:</p>
        <ul>
          <li>
            Sam Palmer - <a href="https://github.com/samp" target="_blank" rel="noopener noreferrer">@samp</a>
          </li>
          <li>
            Nashiekha Willock - <a href="https://github.com/NashiekhaWillock" target="_blank" rel="noopener noreferrer">@NashiekhaWillock</a>
          </li>
          <li>
            Ryan Jelf - <a href="https://github.com/RyanJelf" target="_blank" rel="noopener noreferrer">@RyanJelf</a>
          </li>
        </ul>
      </Section>
    </DefaultTemplate>
  );
}
