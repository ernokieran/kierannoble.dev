import { useContext, useEffect } from 'react';
import { ProjectContext } from '../Context';
import { useGenerateSlideshowContent } from '../Hooks';
import { Section, SectionSubtitle, SectionTitle, SectionImage, SectionLogo, Row, Column } from '../Components/Layout';
import { Slideshow, SlideshowThumbnailButton } from '../Components';
import harmonyLogo from "../assets/projects/harmony/logo.svg"
import processImage from "../assets/projects/harmony/process.webp"
import finalProduct from "../assets/projects/harmony/slideshows/final-product-1.webp"
import initialDesigns from "../assets/projects/harmony/slideshows/initial-designs.webp"
import uiUxPrototype from "../assets/projects/harmony/slideshows/prototype-ui.webp"

function Harmony() {
    const { setProject } = useContext(ProjectContext);

    useEffect(() => {
        setProject('harmony');
    }, []);

    let initialDesignsItems = useGenerateSlideshowContent(initialDesigns);
    let uiUxPrototypeItems = useGenerateSlideshowContent(uiUxPrototype);
    let finalProductItems = useGenerateSlideshowContent(import.meta.globEager('@/projects/harmony/slideshows/final-product-*.webp'), import.meta.globEager('@/projects/harmony/slideshows/thumbnails/final-product-*.webp'));

    return (
        <main className="layout">
            <Section type="primary" align="centered">
                <SectionTitle>
                    <SectionLogo src={harmonyLogo} />
                </SectionTitle>
                <SectionSubtitle>
                    An E-Commerce platform for the modern music industry
                </SectionSubtitle>
                <h3>
                    This project is the outcome of <a href="https://www.iweb.co.uk">iWeb</a>'s client briefing during an assessment within the second year of my Computer Science degree.
                </h3>
            </Section>
            <Section type="secondary">
                <SectionTitle>
                    Process
                </SectionTitle>
                <SectionSubtitle>
                    At the start of this task, the team and myself decided on how to approach the different stages in the lifecycle of a project and its development - along with the client and our project supervisor, we agreed so that we would follow the steps outlined below:
                </SectionSubtitle>
                <SectionImage src={processImage} noShadow="true" />
                <p>Surrounding each of these stages we maintained communication both within our team, as well as with our project supervisor and the client.</p>
                <p>We implemented an iterative approach to the process which allowed us to all to air our opinions and move forwards with the project whilst allowing for ideas and designs to change freely and quickly.</p>
            </Section>
            <Section align="centered">
                <Column>
                    <SectionTitle>
                        Initial Designs
                    </SectionTitle>
                    <Slideshow images={initialDesignsItems}>
                        <SlideshowThumbnailButton>
                            <img className="image" src={initialDesigns} loading="lazy" decoding="async" />
                        </SlideshowThumbnailButton>
                    </Slideshow>
                    <SectionSubtitle>
                        These wireframe designs were received very well by the client and were praised for them looking and feeling like something that could be implemented into a real and professional looking product that the client would actually make.
                    </SectionSubtitle>
                    <p>
                        Ultimately, we collectively decided that we would take a hybrid between the two wireframe designs and create a product that implemented the 'best' parts from each design into the UI/UX prototype.
                    </p>
                </Column>
            </Section>
            <Section type="tertiary" align="right">
                <Row equal="true">
                    <Slideshow images={uiUxPrototypeItems}>
                        <SlideshowThumbnailButton>
                            <img className="image" src={uiUxPrototype} loading="lazy" decoding="async" />
                        </SlideshowThumbnailButton>
                    </Slideshow>
                    <Column small="true">
                        <SectionTitle>
                            UI/UX Prototype
                        </SectionTitle>
                        <SectionSubtitle>
                            After the meeting with the client, we implemented the initial version of our UI/UX Prototype.
                        </SectionSubtitle>
                        <p>We tried to play to the strenghs of the team, and as Sam was the member with the most experience in UI Design, he was tasked with implementing the prototype of the core layout for the web app as well as designing some cards for displaying information such as:</p>
                        <ul className="layout layout__column layout--small">
                            <li>Album listings</li>
                            <li>Event listings</li>
                            <li>Merch listings</li>
                        </ul>
                    </Column>
                </Row>
            </Section>
            <Section type="secondary">
                <Column size="small">
                    <SectionTitle>
                        Feature Development
                    </SectionTitle>
                    <SectionSubtitle>
                        Once we had designs that were approved by both the client and the project
                        supervisor, we started
                        to take these designs which up until now were static pages and start to build a data framework
                        around it. For this, I took the lead as I have the most experience in backend development.
                    </SectionSubtitle>
                    <p>I started by taking the design and breaking the elements into distinct components, such as buttons, navigation items, footers (etc) and converting them, so they are reusable and extensible throughout the application. Once this had been completed I could move onto creating a data structure for the application.</p>
                    <p>As this web application is primary used for creating a cart and ordering music from the store, the data for the music had to be organised carefully to allow for a few key pieces of functionality: each release can have different release types (CD, Vinyl, Digital), each of which can have many groupings within them, such as a CD release may have multiple discs. Similarly, within each of these discs (if they exist), there can be many tracks, which may be different to a track on another release type. This problem is compounded by the functionality that links merch to album listings and their tracks.</p>
                    <p>Throughout this process we kept in contact with the client to ensure that they were happy with the progress being made and so that we could receive relevant feedback and make changes with the 8 weeks that we had to complete this project from conception to final delivery.</p>
                </Column>
            </Section>
            <Section type="primary" align="centered">
                <Column size="small">
                    <SectionTitle>
                        Final Product
                    </SectionTitle>
                    <a href="https://harmony.aylo.net">
                        <SectionSubtitle>
                            View Here
                        </SectionSubtitle>
                    </a>

                    <Slideshow images={finalProductItems}>
                        <SlideshowThumbnailButton>
                            <img className="image" src={finalProduct} loading="lazy" decoding="async" />
                        </SlideshowThumbnailButton>
                    </Slideshow>
                    <p>Ultimately, this project received a grade of 96% (1st), which is accredible in no small part to the great team that we had - our attitudes to succeed and the love and passion that we all had for the project was noted by the client who congratulated us on creating a project that functions the way that it does so quickly and professionally.</p>
                    <p>The team for this project were:</p>
                    <ul>
                        <li>Sam Palmer - <a href="https://github.com/samp">@samp</a></li>
                        <li>Nash Willok - <a href="https://github.com/NashWillock">@NashWillock</a></li>
                        <li>Ryan Jelf - <a href="https://github.com/RyanJelf">@RyanJelf</a></li>
                    </ul>
                </Column>
            </Section>
        </main>
    );
}

export default Harmony