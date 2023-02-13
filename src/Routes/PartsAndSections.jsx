import { useContext, useEffect } from 'react';
import { ProjectContext } from '../Context';
import { Section, SectionSubtitle, SectionTitle, SectionImage, Row, Column, SectionLogo } from '../Components/Layout';
import { Slideshow, SlideshowThumbnailButton } from '../Components';
import partsAndSectionsLogo from "../assets/projects/partsandsections/logo.svg"
import development from "../assets/projects/partsandsections/Slideshows/PolFaceMash.webp"
import book from "../assets/projects/partsandsections/Slideshows/Parts and Sections Final_0.webp"

function PartsAndSections() {
    const { setProject } = useContext(ProjectContext);

    useEffect(() => {
        setProject('partsAndSections');
    }, []);

    let bookItems = [];
    // TO DO: This has an issue where some files are loading in an incorrect order
    Object.values(import.meta.globEager('@/projects/partsandsections/slideshows/Parts and Sections Final*.webp')).forEach(
        ({ default: path }) => {
            const pathUrl = new URL(path, import.meta.url);
            let data = {
                path: pathUrl.pathname,
            }
            bookItems.push(data);
        }
    );

    let initialItems = [];
    Object.values(import.meta.globEager('@/projects/partsandsections/slideshows/Initial*.webp')).forEach(
        ({ default: path }) => {
            const pathUrl = new URL(path, import.meta.url);
            let data = {
                path: pathUrl.pathname,
            }
            initialItems.push(data);
        }
    );

    let finalItems = [];
    Object.values(import.meta.globEager('@/projects/partsandsections/slideshows/OFinal*.webp')).forEach(
        ({ default: path }) => {
            const pathUrl = new URL(path, import.meta.url);
            let data = {
                path: pathUrl.pathname,
            }
            finalItems.push(data);
        }
    );

    let polItems = [];
    Object.values(import.meta.globEager('@/projects/partsandsections/slideshows/Pol_*.webp')).forEach(
        ({ default: path }) => {
            const pathUrl = new URL(path, import.meta.url);
            let data = {
                path: pathUrl.pathname,
            }
            polItems.push(data);
        }
    );

    let developmentItems = [
        {
            path: development,
        }
    ];

    return (
        <main className="layout">
            <Section type="primary" align="centered">
                <SectionTitle>
                    <SectionLogo src={partsAndSectionsLogo} />
                </SectionTitle>
                <SectionSubtitle>
                    A-Level Photography Component Two & Exam - Marked at Grade A
                </SectionSubtitle>
                <h3>
                    ‘Photographing part of an object, view or person can be a way of creating abstract imagery or observing the subject more closely. Sonya Noskowiak often recorded very carefully selected portions of her subjects to direct attention to their detail and textural qualities. Judith Turner’s photographs of columns and leaves are often severely cropped to emphasize the repeated shapes and forms seen in close-up sections of her subjects. At times Patrick Caulfield’s paintings show just part of an interior, leaving the viewer to imagine what is left outside the frame. Produce your own response, making reference to appropriate work by others.’ <strong>(96 Marks)</strong>
                </h3>
            </Section>
            <Section type="secondary">
                <SectionTitle>
                    Project Introduction
                </SectionTitle>
                <p>Within this project I explored the theme through the use of colour, use of framing and the use of space. During the first shoot of this project, I explored how much I could take away from a photo, but still have the viewer draw a connection to the model – to do this, experimented with black and white photography, as well as using a macro lens to get closer to the model than the viewer would normally experience. Moving further into this, I experimented with how the image is displayed to the viewer, using a 1:1 ratio crop, which is pretty unnatural in the world of photography.</p>
                <Slideshow images={initialItems}>
                    <SlideshowThumbnailButton>
                        <Row equal="true">
                            {initialItems.map((item, index) => (
                                <img src={item?.path ?? ""} key={index} className="image" loading="lazy" decoding="async" />
                            ))}
                        </Row>
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="tertiary" align="centered">
                <SectionTitle>
                    Polaroid Development
                </SectionTitle>
                <p>From this crop – I decided to move back into the world of ‘natural’ photography, and was inspired by the cropping of polaroid photos, and so I decided to take a look into how I could mix the world of digital and analogue photography, whilst still giving the viewer an experience that they would never usually be able to see – black and white polaroids.</p>
                <Slideshow images={polItems}>
                    <SlideshowThumbnailButton>
                        <Column size="small" noGap="true">
                            <Row equal="true">
                                {polItems.slice(0, 4).map((item, index) => (
                                    <img src={item?.path ?? ""} key={index} className="image no-shadow" loading="lazy" decoding="async" />
                                ))}
                            </Row>
                            <Row equal="true">
                                {polItems.slice(4, 8).map((item, index) => (
                                    <img src={item?.path ?? ""} key={index} className="image no-shadow" loading="lazy" decoding="async" />
                                ))}
                            </Row>
                        </Column>
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="secondary" align="right">
                <SectionTitle>
                    Further Development
                </SectionTitle>
                <p>During the course of this project, I began to explore more on how to make the viewer uncomfortable with what they are seeing – again moving closer to the model so that the viewer couldn’t easily distinguish many features of the person they were seeing, leaving them more in the dark about the photograph and its meaning and intent. This then gave me the idea of mixing different people’s features into one ‘mashup’ person.</p>
                <Slideshow images={developmentItems}>
                    <SlideshowThumbnailButton>
                        <img src={development} className="image no-shadow" loading="lazy" decoding="async" />
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="tertiary">
                <SectionTitle>
                    Final Development
                </SectionTitle>
                <p>At first, I did this digitally, however, I felt that this technique would work better in a read 3D space, so I created some ‘polaroids’ and used a model and held these photographs in front of the model’s face, replacing their features with the facial features of someone else, which created a very unnatural and almost concerning look for the viewer. In fact, it looked a little too unnatural, so I decided that it would be best for me to take things out of the studio and into nature – again giving a contrast between natural and unnatural.</p>
                <p>Within these outcomes, I used colour to create more contrast between the deep and rich natural background and the very unnatural polaroids, which I tried to remove colour from, but leaving enough so that it wasn’t black and white.</p>
            </Section>
            <Section type="secondary" align="right">
                <SectionTitle>
                    Final Outcomes
                </SectionTitle>
                <Slideshow images={finalItems}>
                    <SlideshowThumbnailButton>
                        <Row equal="true">
                            {finalItems.map((item, index) => (
                                <img src={item?.path ?? ""} key={index} className="image" loading="lazy" decoding="async" />
                            ))}
                        </Row>
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="primary" align="centered">
                <SectionTitle>
                    Project Book
                </SectionTitle>
                <Slideshow images={bookItems}>
                    <SlideshowThumbnailButton>
                        <img className="image" src={book} loading="lazy" decoding="async" />
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
        </main>
    );
}

export default PartsAndSections