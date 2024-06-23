import { useContext, useEffect } from 'react';
import { ProjectContext } from '~/Context';
import { useGenerateSlideshowContent } from '~/Hooks';
import { Section, SectionSubtitle, SectionTitle, SectionLogo, Row, Column } from '~/Components/Layout';
import { Slideshow, SlideshowThumbnailButton, WebFrame } from '~/Components';
import photiLogo from "@/projects/photi/logo.svg";
import initialDesigns from "@/projects/photi/slideshows/Designs-03.webp";
import projectDocumentation from "@/projects/photi/slideshows/FYP-R-C-001.webp";
import projectReport from "@/projects/photi/FYP-Report-Combined-20230510.pdf";

function Photi() {
    const { setProject } = useContext(ProjectContext);

    useEffect(() => {
        setProject('photi');
    }, []);

    // Update to actually use thumbnails  
    let initialDesignsItems = useGenerateSlideshowContent(import.meta.globEager('@/projects/photi/slideshows/Designs-*.webp'), import.meta.globEager('@/projects/photi/slideshows/thumbnails/Designs-*.webp'));
    let projectDocumentationItems = useGenerateSlideshowContent(import.meta.globEager('@/projects/photi/slideshows/FYP-R-C-*.webp'), import.meta.globEager('@/projects/photi/slideshows/thumbnails/FYP-R-C-*.webp'));

    return (
        <main className="layout">
            <Section type="primary" align="centered">
                <SectionTitle>
                    <SectionLogo src={photiLogo} />
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
                    To be able to deliver a project, a clear set of requirements needed to be defined. The requirements for this project were created by looking at what was currently available on the market and what was missing, as well as the major problems that users stated with the existing solutions.
                </SectionSubtitle>
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
            <Section align="centered">
                <SectionTitle>
                    Initial Designs
                </SectionTitle>
                <SectionSubtitle>
                    Creating a unique yet familar look and feel for the application was important to the success of the project. It was necessary to create a design that was easy to use and navigate, but also looked modern and clean.
                </SectionSubtitle>
                <p>
                    To deliver this, a custom design system was created. This design system was created using Figma and was used to create the initial designs for the application. The initial designs were then used to create a prototype of the application, without working data, but enough to give an insight into how the application would look and feel, espeically useful for asking for user feedback before moving onto the technical development of the application as a whole.
                </p>
                <Slideshow images={initialDesignsItems}>
                    <SlideshowThumbnailButton>
                        <img className="image" src={initialDesigns} loading="lazy" decoding="async" />
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="tertiary" align="centered">
                <SectionTitle>
                    Tech Stack
                </SectionTitle>
                <SectionSubtitle>
                    To be able to deliver the project, a wide variety of different technologies were used. These technologies were used to deliver the project in a way that was performant, scalable and easy to maintain.
                </SectionSubtitle>
                <p>
                    The main technologies used to deliver this full stack application were:
                </p>
                <Row equal="true">
                    <Column size="small">
                        <SectionSubtitle>
                            Backend
                        </SectionSubtitle>
                        <ul>
                            <li>Laravel</li>
                            <li>MySQL</li>
                            <li>Intervention</li>
                        </ul>
                    </Column>
                    <Column size="small">
                        <SectionSubtitle>
                            Frontend
                        </SectionSubtitle>
                        <ul>
                            <li>Livewire</li>
                            <li>Vite</li>
                            <li>SCSS</li>
                        </ul>
                    </Column>
                    <Column size="small">
                        <SectionSubtitle>
                            Other Technologies
                        </SectionSubtitle>
                        <ul>
                            <li>Azure Computer Vision</li>
                            <li>Azure Blob Storage</li>
                            <li>Cloudflare CDN</li>
                        </ul>
                    </Column>
                </Row>
            </Section>
            <Section type="secondary" align="right">
                <SectionTitle>
                    Project Documentation
                </SectionTitle>
                <SectionSubtitle>
                    Throughout the project, a variety of different documents were created to help with the documentation and development of the project.
                </SectionSubtitle>
                <p>
                    The documents were used to give an insight into each decision made throughout the project, with the reasoning given for each. This doucumentation aims to provide an explanation into why each technology and product was chosen, as well as how they were used to deliver the project.
                </p>
                <p>These documents and the main report document are available to read below.</p>
                <Slideshow images={projectDocumentationItems} download={projectReport}>
                    <SlideshowThumbnailButton>
                        <img className="image" src={projectDocumentation} loading="lazy" decoding="async" />
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="primary" align="centered">
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
                {/* <WebFrame src="https://photi.studio/" /> */}
            </Section>
        </main>
    );
}

export default Photi