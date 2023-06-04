import { useContext, useEffect } from 'react';
import { ProjectContext } from '~/Context';
import { useGenerateSlideshowContent } from '~/Hooks';
import { Section, SectionSubtitle, SectionTitle, SectionImage, SectionLogo, Row, Column } from '~/Components/Layout';
import { Slideshow, SlideshowThumbnailButton, WebFrame } from '~/Components';
import initialDesigns from "@/projects/photi/slideshows/Designs-03.webp";
import projectDocumentation from "@/projects/photi/slideshows/FYP-R-C-001.webp";

function Photi() {
    const { setProject } = useContext(ProjectContext);

    useEffect(() => {
        setProject('photi');
    }, []);

    // Update to actually use thumbnails  
    let initialDesignsItems = useGenerateSlideshowContent(import.meta.globEager('@/projects/photi/slideshows/Designs-*.webp'));
    let projectDocumentationItems = useGenerateSlideshowContent(import.meta.globEager('@/projects/photi/slideshows/FYP-R-C-*.webp'));

    return (
        <main className="layout">
            <Section type="primary" align="centered">
                <SectionTitle>
                    {/* <SectionLogo src={harmonyLogo} /> */}
                    photi.studio
                </SectionTitle>
                <SectionSubtitle>
                    AI Driven photo sharing social media image sharing platform
                </SectionSubtitle>
                <h3>
                    This project was created as part of my Final Year Project within the third year of my Computer Science degree. The title for this project was 'Increasing Artificial Intelligence Image Recognition Usage Within a Photo Sharing Application.'
                </h3>
            </Section>
            <Section type="secondary">
                <SectionTitle>
                    Problem Domain
                </SectionTitle>
                <SectionSubtitle>
                    To be able to deliver a project, a clear set of requirements needed to be defined. The requirements for this project were created by looking at what was currently available on the market and what was missing. The main requirements were:
                </SectionSubtitle>
            </Section>
            <Section align="centered">
                <SectionTitle>
                    Initial Designs
                </SectionTitle>
                <SectionSubtitle>
                    Creating a unique yet familar look and feel for the application was important to me. I wanted to create a design that was easy to use and navigate, but also looked modern and clean.
                </SectionSubtitle>
                <Slideshow images={initialDesignsItems}>
                    <SlideshowThumbnailButton>
                        <img className="image" src={initialDesigns} loading="lazy" decoding="async" />
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="tertiary" align="right">
                <SectionTitle>
                    Tech Stack
                </SectionTitle>
                <SectionSubtitle>
                    To be able to deliver the project, I used a variety of different technologies. The main technologies used were:
                </SectionSubtitle>
            </Section>
            <Section type="secondary" align="centered">
                <SectionTitle>
                    Project Documentation
                </SectionTitle>
                <SectionSubtitle>
                    Throughout the project, I created a variety of different documents to help with the development of the project. These documents and the main report document are available to read below.
                </SectionSubtitle>
                <Slideshow images={projectDocumentationItems}>
                    <SlideshowThumbnailButton>
                        <img className="image" src={projectDocumentation} loading="lazy" decoding="async" />
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="primary">
                <SectionTitle>
                    Final Product
                </SectionTitle>
                <SectionSubtitle>
                    The outcome of this project was a fully functional web application that allows users to upload images and have them automatically tagged with relevant tags. The application also allows users to search for images based on tags and other users.
                </SectionSubtitle>
                <p>You can take a look at and use the prototype application below or by visiting <a href="https://photi.studio/">photi.studio</a>.</p>
                <p>
                    The source code for this project is available at <a href="https://github.com/AyloKieran/photi.studio">github.com/AyloKieran/photi.studio</a>.
                </p>
                <WebFrame src="https://photi.studio/" />
            </Section>
        </main>
    );
}

export default Photi