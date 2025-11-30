import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import { Section } from '@/components/layout/Section';
import { Row } from '@/components/layout/Row';
import { Column } from '@/components/layout/Column';
import { Media } from '@/components/media/Media';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { getSlideshowImages } from '@/lib/slideshow';

export default async function ExperimentalImageryPage() {
  const initialOutcomesSlideshow = await getSlideshowImages(
    Array.from({ length: 3 }, (_, i) =>
      `/img/Projects/ExperimentalImagery/InitialOutcomes/Hands_${i + 1}.webp`
    )
  );

  const furtherDevelopmentSlideshow = await getSlideshowImages([
    '/img/Projects/ExperimentalImagery/Colours.webp',
  ]);

  const finalOutcomesSlideshow = await getSlideshowImages(
    Array.from({ length: 8 }, (_, i) =>
      `/img/Projects/ExperimentalImagery/FinalOutcomes/Final_${i + 1}.webp`
    )
  );

  const bookSlideshow = await getSlideshowImages(
    Array.from({ length: 209 }, (_, i) =>
      `/img/Projects/ExperimentalImagery/Book/Experimental Imagery Final_${String(i).padStart(3, '0')}.webp`
    )
  );

  return (
    <DefaultTemplate project="experimentalImagery">
      <Section
        logoUrl="/img/Projects/ExperimentalImagery/logo.svg"
        subtitle="A-Level Photography Component One - Marked at Grade A"
        type="primary"
        alignment="centered"
      >
      </Section>

      <Section title="Project Introduction" type="secondary">
        <p>
          In Component One of my Photography A-Level, I was given the topic of &quot;Experimental Imagery&quot;, which I interpreted as a way to try and bend the &apos;rules&apos; of photography and create something that isn&apos;t usually seen within the world of photography.
        </p>
        <p>
          Within this, I tried to investigate techniques new and old that aren&apos;t seen much because they are often seen as &quot;too experimental&quot; or out of the contemporary world, within these themes I explored ways to portray the world and people in a way that may make the viewer think twice about what they are seeing as well as how it should make them feel.
        </p>
      </Section>

      <Section title="Initial Development" alignment="right">
        <p>
          The project initially started with looking at how colour can affect a viewer&apos;s experience of a photograph. Focusing first on how the lack of colour and artificial depth looks, before moving more into selective use of colour as well as creating artificial colour in a photo.
        </p>
        <p>
          During this process I began to look at how the shape of colour matters – using bokeh and colour together to control a viewer&apos;s perception of a location. At this time, I also began to look into how video can be used to further increase a viewer&apos;s connection to a location.
        </p>
        <p>
          After this I began to look into how I could &apos;destroy&apos; a photo just enough to warp a viewer&apos;s perception of an image, but not so much that it is no longer recognisable. One technique that I really liked, but ended up not making it into the final investigation was creating something that felt unnatural, but used human hands, the results of this can be seen below:
        </p>
      </Section>

      <Section title="Initial Outcomes" type="tertiary" alignment="centered">
        <Media slideshow={initialOutcomesSlideshow} full>
          <Row equal>
            <OptimizedImage
              path="/img/Projects/ExperimentalImagery/InitialOutcomes/Hands_1.webp"
              alt="A hand making an OK gesture with a digital glitch effect. The background is a pale green, and geometric shapes and dashed lines intersect the hand. The image has a red and cyan color overlay, giving it a 3D glitch aesthetic."
              width={500}
            />
            <OptimizedImage
              path="/img/Projects/ExperimentalImagery/InitialOutcomes/Hands_2.webp"
              alt="A digitally glitched hand with fingers spread, shown against a light blue background. The hand appears fragmented and overlaid with magenta and green hues. Dotted triangular shapes and floating colorful arrowheads add a surreal, cyberpunk feel."
              width={500}
            />
            <OptimizedImage
              path="/img/Projects/ExperimentalImagery/InitialOutcomes/Hands_3.webp"
              alt="A glitched hand with fingers extended, viewed from above. The image features a grey background with a yellow and blue color overlay. A wristband reading Slam Dunk Festival is visible. Dashed geometric shapes intersect the hand, enhancing the distorted digital art style."
              width={500}
            />
          </Row>
        </Media>
      </Section>

      <Section type="secondary" title="Further Development">
        <p>
          As well as this, another favourite image of mine from this project is where I split the colours and blurred a model&apos;s face to give a sense of broken and unrecognisable to the viewer – where they couldn&apos;t see the facial features of the person but could see the rest in a &apos;broken world&apos;. The result of this can be seen below:
        </p>
        <Media slideshow={furtherDevelopmentSlideshow}>
          <OptimizedImage
            path="/img/Projects/ExperimentalImagery/Colours.webp"
            alt="Portrait of a young woman with long hair wearing a denim jacket and a light t-shirt, standing against a purple-blue gradient background; the image features a glitch blur effect over the eyes, color distortion outlining the model's edges, and an overall slightly blurred, dreamlike focus."
            height={400}
          />
        </Media>
      </Section>

      <Section title="Glitch Development" type="primary" alignment="centered">
        <p>
          Moving towards the end of the project, I began to once again look at how the world of photography, which is generally a snapshot of time in a single image, could move more towards the world of video and more so the motion of the world within the photographs.
        </p>
        <p>
          This method of motion in a single still photo was inspired by Mura Masa &apos;s music video &apos;What If I Go?&apos;, which used a digital form of a style of 3D photography, popularised by the Nimslo 3D film camera from the 1980s, where I used the same moment in time but with multiple shots from slightly differing angles, to give a &apos;frozen in time&apos; sense to the viewer, were they can see more than they should be able to. I then used these frames to create a looping gif, such as the ones below:
        </p>
        <Row equal>
          <iframe
            src="https://www.youtube.com/embed/auwmewK0ggg"
            className="video"
            title="YouTube video player"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/47dHuFWVQFE"
            className="video"
            title="YouTube video player"
            allowFullScreen
          />
        </Row>
      </Section>

      <Section title="Final Development" type="tertiary" alignment="right">
        <p>
          From this, I developed a look that was similar to Super8 film, and incorporated it into a &apos;music video&apos; style outcome, which used the techniques developed throughout the project to give a futuristic and old-fashioned contract to the viewer, within a confusing yet motion-filled outcome that bends the rules of photography and what is expected both from the artist and the viewer
        </p>
      </Section>

      <Section title="Final Outcomes" alignment="centered">
        <Media slideshow={finalOutcomesSlideshow} full>
          <Column>
            <Row equal>
              <OptimizedImage
                path="/img/Projects/ExperimentalImagery/FinalOutcomes/Final_1.webp"
                alt="Vintage, film-like photography style with muted colors, soft focus, heavy grain, and black rounded borders, evoking a nostalgic, documentary feel."
                width={500}
              />
              <OptimizedImage
                path="/img/Projects/ExperimentalImagery/FinalOutcomes/Final_2.webp"
                alt="Vintage, film-like photography style with muted colors, soft focus, heavy grain, and black rounded borders, evoking a nostalgic, documentary feel."
                width={500}
              />
              <OptimizedImage
                path="/img/Projects/ExperimentalImagery/FinalOutcomes/Final_3.webp"
                alt="Vintage, film-like photography style with muted colors, soft focus, heavy grain, and black rounded borders, evoking a nostalgic, documentary feel."
                width={500}
              />
              <OptimizedImage
                path="/img/Projects/ExperimentalImagery/FinalOutcomes/Final_4.webp"
                alt="Vintage, film-like photography style with muted colors, soft focus, heavy grain, and black rounded borders, evoking a nostalgic, documentary feel."
                width={500}
              />
            </Row>
            <Row equal>
              <OptimizedImage
                path="/img/Projects/ExperimentalImagery/FinalOutcomes/Final_5.webp"
                alt="Vintage, film-like photography style with muted colors, soft focus, heavy grain, and black rounded borders, evoking a nostalgic, documentary feel."
                width={500}
              />
              <OptimizedImage
                path="/img/Projects/ExperimentalImagery/FinalOutcomes/Final_6.webp"
                alt="Vintage, film-like photography style with muted colors, soft focus, heavy grain, and black rounded borders, evoking a nostalgic, documentary feel."
                width={500}
              />
              <OptimizedImage
                path="/img/Projects/ExperimentalImagery/FinalOutcomes/Final_7.webp"
                alt="Vintage, film-like photography style with muted colors, soft focus, heavy grain, and black rounded borders, evoking a nostalgic, documentary feel."
                width={500}
              />
              <OptimizedImage
                path="/img/Projects/ExperimentalImagery/FinalOutcomes/Final_8.webp"
                alt="Vintage, film-like photography style with muted colors, soft focus, heavy grain, and black rounded borders, evoking a nostalgic, documentary feel."
                width={500}
              />
            </Row>
          </Column>
        </Media>
      </Section>

      <Section title="Final Video" type="secondary" alignment="centered">
        <Media>
          <iframe
            src="https://www.youtube.com/embed/Q9vkUjmVsRc"
            className="video"
            title="YouTube video player"
            allowFullScreen
          />
        </Media>
      </Section>

      <Section type="primary" title="Project Book" alignment="centered">
        <Media slideshow={bookSlideshow}>
          <OptimizedImage
            path="/img/Projects/ExperimentalImagery/Book/Experimental Imagery Final_000.webp"
            alt="Documentation workbook for the project, containing a collection of experimental work, photoshoots, and development processes showcasing the creative journey."
            height={400}
          />
        </Media>
      </Section>
    </DefaultTemplate>
  );
}
