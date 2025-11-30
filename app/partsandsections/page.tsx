import { DefaultTemplate } from '@/components/templates/DefaultTemplate';
import { Section } from '@/components/layout/Section';
import { Row } from '@/components/layout/Row';
import { Column } from '@/components/layout/Column';
import { Media } from '@/components/media/Media';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { getSlideshowImages } from '@/lib/slideshow';

export default async function PartsAndSectionsPage() {
  const introductionSlideshow = await getSlideshowImages(
    Array.from({ length: 3 }, (_, i) =>
      `/img/Projects/PartsAndSections/Introduction/Initial_${i + 1}.webp`
    )
  );

  const polaroidSlideshow = await getSlideshowImages(
    Array.from({ length: 8 }, (_, i) =>
      `/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_${i + 1}.webp`
    )
  );

  const furtherDevelopmentSlideshow = await getSlideshowImages([
    '/img/Projects/PartsAndSections/PolFaceMash.webp',
  ]);

  const finalOutcomesSlideshow = await getSlideshowImages(
    Array.from({ length: 3 }, (_, i) =>
      `/img/Projects/PartsAndSections/FinalOutcomes/OFinal_${i + 1}.webp`
    )
  );

  const bookSlideshow = await getSlideshowImages(
    Array.from({ length: 103 }, (_, i) =>
      `/img/Projects/PartsAndSections/Book/Parts and Sections Final_${String(i).padStart(3, '0')}.webp`
    )
  );

  return (
    <DefaultTemplate project="partsAndSections">
      <Section
        logoUrl="/img/Projects/PartsAndSections/logo.svg"
        subtitle="A-Level Photography Component Two & Exam - Marked at Grade A"
        type="primary"
        alignment="centered"
      >
        <p>
          &apos;Photographing part of an object, view or person can be a way of creating abstract imagery or observing the subject more closely. Sonya Noskowiak often recorded very carefully selected portions of her subjects to direct attention to their detail and textural qualities. Judith Turner&apos;s photographs of columns and leaves are often severely cropped to emphasize the repeated shapes and forms seen in close-up sections of her subjects. At times Patrick Caulfield&apos;s paintings show just part of an interior, leaving the viewer to imagine what is left outside the frame. Produce your own response, making reference to appropriate work by others.&apos; (96 Marks)
        </p>
      </Section>

      <Section title="Project Introduction" type="secondary">
        <p>
          Within this project I explored the theme through the use of colour, use of framing and the use of space. During the first shoot of this project, I explored how much I could take away from a photo, but still have the viewer draw a connection to the model – to do this, experimented with black and white photography, as well as using a macro lens to get closer to the model than the viewer would normally experience. Moving further into this, I experimented with how the image is displayed to the viewer, using a 1:1 ratio crop, which is pretty unnatural in the world of photography.
        </p>
        <Media slideshow={introductionSlideshow} full>
          <Row equal>
            <OptimizedImage
              path="/img/Projects/PartsAndSections/Introduction/Initial_1.webp"
              alt="A detailed black and white close-up photograph showcases a human eye, slightly angled to the right. The intricate patterns of the iris are clearly visible, surrounding a dark pupil with a bright reflection. Delicate eyelashes extend from the lower eyelid, and the upper lid casts a subtle shadow. A defined eyebrow arches above the eye. The surrounding skin reveals texture and several small freckles, and a portion of a nose with a ring piercing is visible in the lower right corner."
              width={500}
            />
            <OptimizedImage
              path="/img/Projects/PartsAndSections/Introduction/Initial_2.webp"
              alt="A detailed black and white close-up photograph focuses on the lower portion of a human face. The subject's full lips are centrally positioned, showing their texture and subtle contours. Above the lips, the base of a nose is visible, featuring a ring piercing in the left nostril. The surrounding skin exhibits a slightly uneven texture and a few small blemishes. The overall lighting highlights the subtle variations in tone and surface detail."
              width={500}
            />
            <OptimizedImage
              path="/img/Projects/PartsAndSections/Introduction/Initial_3.webp"
              alt="A detailed black and white close-up photograph showcases a human ear in profile. The intricate curves and folds of the outer ear, including the helix and lobule, are clearly defined. Two small, round earrings are visible, one in the lobe and another higher up on the helix. Wisps of dark hair frame the ear, and the texture of the skin on the side of the face is also visible, showing subtle variations in tone and a few small blemishes."
              width={500}
            />
          </Row>
        </Media>
      </Section>

      <Section type="tertiary" alignment="centered" title="Polaroid Development">
        <p>
          From this crop – I decided to move back into the world of &apos;natural&apos; photography, and was inspired by the cropping of polaroid photos, and so I decided to take a look into how I could mix the world of digital and analogue photography, whilst still giving the viewer an experience that they would never usually be able to see – black and white polaroids.
        </p>
        <Media slideshow={polaroidSlideshow} full>
          <Column>
            <Row equal>
              <OptimizedImage
                path="/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_1.webp"
                alt="A close-up, black and white photograph captures the intricate details of a human eye. The iris, a mesmerizing mix of light and dark tones, surrounds a dark pupil, reflecting subtle highlights. Delicate eyelashes frame the lower eyelid, while the upper lid is partially visible, casting a soft shadow. Above the eye, a well-defined eyebrow adds structure to the face. The surrounding skin shows fine texture and subtle shading, emphasizing the eye as the focal point."
                width={400}
              />
              <OptimizedImage
                path="/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_2.webp"
                alt="A close-up, black and white photograph captures the intricate details of a human eye. The iris, a mesmerizing mix of light and dark tones, surrounds a dark pupil, reflecting subtle highlights. Delicate eyelashes frame the lower eyelid, while the upper lid is partially visible, casting a soft shadow. Above the eye, a well-defined eyebrow adds structure to the face. The surrounding skin shows fine texture and subtle shading, emphasizing the eye as the focal point."
                width={400}
              />
              <OptimizedImage
                path="/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_3.webp"
                alt="A close-up, black and white photograph captures the intricate details of a human eye. The iris, a mesmerizing mix of light and dark tones, surrounds a dark pupil, reflecting subtle highlights. Delicate eyelashes frame the lower eyelid, while the upper lid is partially visible, casting a soft shadow. Above the eye, a well-defined eyebrow adds structure to the face. The surrounding skin shows fine texture and subtle shading, emphasizing the eye as the focal point."
                width={400}
              />
              <OptimizedImage
                path="/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_4.webp"
                alt="A close-up, black and white photograph captures the intricate details of a human eye. The iris, a mesmerizing mix of light and dark tones, surrounds a dark pupil, reflecting subtle highlights. Delicate eyelashes frame the lower eyelid, while the upper lid is partially visible, casting a soft shadow. Above the eye, a well-defined eyebrow adds structure to the face. The surrounding skin shows fine texture and subtle shading, emphasizing the eye as the focal point."
                width={400}
              />
            </Row>
            <Row equal>
              <OptimizedImage
                path="/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_5.webp"
                alt="A close-up, black and white photograph captures the intricate details of a human eye. The iris, a mesmerizing mix of light and dark tones, surrounds a dark pupil, reflecting subtle highlights. Delicate eyelashes frame the lower eyelid, while the upper lid is partially visible, casting a soft shadow. Above the eye, a well-defined eyebrow adds structure to the face. The surrounding skin shows fine texture and subtle shading, emphasizing the eye as the focal point."
                width={400}
              />
              <OptimizedImage
                path="/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_6.webp"
                alt="A close-up, black and white photograph captures the intricate details of a human eye. The iris, a mesmerizing mix of light and dark tones, surrounds a dark pupil, reflecting subtle highlights. Delicate eyelashes frame the lower eyelid, while the upper lid is partially visible, casting a soft shadow. Above the eye, a well-defined eyebrow adds structure to the face. The surrounding skin shows fine texture and subtle shading, emphasizing the eye as the focal point."
                width={400}
              />
              <OptimizedImage
                path="/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_7.webp"
                alt="A close-up, black and white photograph captures the intricate details of a human eye. The iris, a mesmerizing mix of light and dark tones, surrounds a dark pupil, reflecting subtle highlights. Delicate eyelashes frame the lower eyelid, while the upper lid is partially visible, casting a soft shadow. Above the eye, a well-defined eyebrow adds structure to the face. The surrounding skin shows fine texture and subtle shading, emphasizing the eye as the focal point."
                width={400}
              />
              <OptimizedImage
                path="/img/Projects/PartsAndSections/PolaroidDevelopment/Pol_8.webp"
                alt="A close-up, black and white photograph captures the intricate details of a human eye. The iris, a mesmerizing mix of light and dark tones, surrounds a dark pupil, reflecting subtle highlights. Delicate eyelashes frame the lower eyelid, while the upper lid is partially visible, casting a soft shadow. Above the eye, a well-defined eyebrow adds structure to the face. The surrounding skin shows fine texture and subtle shading, emphasizing the eye as the focal point."
                width={400}
              />
            </Row>
          </Column>
        </Media>
      </Section>

      <Section title="Further Development" type="secondary" alignment="right">
        <p>
          During the course of this project, I began to explore more on how to make the viewer uncomfortable with what they are seeing – again moving closer to the model so that the viewer couldn&apos;t easily distinguish many features of the person they were seeing, leaving them more in the dark about the photograph and its meaning and intent. This then gave me the idea of mixing different people&apos;s features into one &apos;mashup&apos; person.
        </p>
        <Media slideshow={furtherDevelopmentSlideshow}>
          <OptimizedImage
            path="/img/Projects/PartsAndSections/PolFaceMash.webp"
            alt="A collection of six instant photographs is arranged on a gray background, each capturing a different close-up detail of a person's face. In the top left, a detailed view of an ear is shown. To its right, another photograph displays a closed eye and eyebrow. The central image features an open eye looking slightly upward, along with a portion of the nose and a nose ring. To the right of the central image, another ear is visible. Below the central image, a photograph focuses on the tip of the nose with a ring and a hint of the upper lip. Finally, in the bottom center, a photograph captures a mouth with a mustache and some stubble. The arrangement creates a fragmented portrait, inviting the viewer to piece together the individual."
            height={400}
          />
        </Media>
      </Section>

      <Section title="Final Development" type="tertiary">
        <p>
          At first, I did this digitally, however, I felt that this technique would work better in a read 3D space, so I created some &apos;polaroids&apos; and used a model and held these photographs in front of the model&apos;s face, replacing their features with the facial features of someone else, which created a very unnatural and almost concerning look for the viewer. In fact, it looked a little too unnatural, so I decided that it would be best for me to take things out of the studio and into nature – again giving a contrast between natural and unnatural.
        </p>
        <p>
          Within these outcomes, I used colour to create more contrast between the deep and rich natural background and the very unnatural polaroids, which I tried to remove colour from, but leaving enough so that it wasn&apos;t black and white.
        </p>
      </Section>

      <Section title="Final Outcomes" type="secondary" alignment="right">
        <Media slideshow={finalOutcomesSlideshow} full>
          <Row equal>
            <OptimizedImage
              path="/img/Projects/PartsAndSections/FinalOutcomes/OFinal_1.webp"
              alt="A person holds up two small Polaroid photographs in front of their face, aligning them with their own features. One photo shows their mouth and chin, held over their actual mouth and chin. The other photo shows their eye, positioned over their right eye."
              width={400}
            />
            <OptimizedImage
              path="/img/Projects/PartsAndSections/FinalOutcomes/OFinal_2.webp"
              alt="A person holds up two small Polaroid photographs in front of their face, aligning them with their own features. One photo shows their mouth and chin, held over their actual mouth and chin. The other photo shows their eye, positioned over their right eye."
              width={400}
            />
            <OptimizedImage
              path="/img/Projects/PartsAndSections/FinalOutcomes/OFinal_3.webp"
              alt="A person holds up two small Polaroid photographs in front of their face, aligning them with their own features. One photo shows their mouth and chin, held over their actual mouth and chin. The other photo shows their eye, positioned over their left eye."
              width={400}
            />
          </Row>
        </Media>
      </Section>

      <Section title="Project Book" type="primary" alignment="centered">
        <Media slideshow={bookSlideshow}>
          <OptimizedImage
            path="/img/Projects/PartsAndSections/Book/Parts and Sections Final_000.webp"
            alt="Documentation workbook for the project, containing a collection of experimental work, photoshoots, and development processes showcasing the creative journey."
            height={400}
          />
        </Media>
      </Section>
    </DefaultTemplate>
  );
}
