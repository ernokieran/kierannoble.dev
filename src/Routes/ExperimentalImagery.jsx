import { useContext, useEffect } from 'react';
import { ProjectContext } from '../Context';
import { Section, SectionSubtitle, SectionTitle, SectionImage, Row, Column, SectionLogo } from '../Components/Layout';
import { Slideshow, SlideshowThumbnailButton } from '../Components';
import experimentalImageryLogo from "../assets/projects/experimentalimagery/logo.svg"
import furtherDevelopment from "../assets/projects/experimentalimagery/Colours.webp"
import glitch1 from "../assets/projects/experimentalimagery/Glitch Development One.mp4"
import glitch2 from "../assets/projects/experimentalimagery/Glitch Development Two.mp4"
import final from "../assets/projects/experimentalimagery/Photography Experimental Imagery Final Outcome.mp4"
import book from "../assets/projects/experimentalimagery/Slideshows/Experimental Imagery Final_0.webp"

function ExperimentalImagery() {
    const { setProject } = useContext(ProjectContext);
    useEffect(() => {
        setProject('experimentalImagery');
    }, []);

    let bookItems = [];
    // TO DO: This has an issue where some files are loading in an incorrect order
    Object.values(import.meta.globEager('@/projects/experimentalimagery/slideshows/Experimental Imagery Final*.webp')).forEach(
        ({ default: path }) => {
            const pathUrl = new URL(path, import.meta.url);
            let data = {
                path: pathUrl.pathname,
            }
            bookItems.push(data);
        }
    );

    let initialItems = [];
    Object.values(import.meta.globEager('@/projects/experimentalimagery/slideshows/Hands_*.webp')).forEach(
        ({ default: path }) => {
            const pathUrl = new URL(path, import.meta.url);
            let data = {
                path: pathUrl.pathname,
            }
            initialItems.push(data);
        }
    );


    let finalItems = [];
    Object.values(import.meta.globEager('@/projects/experimentalimagery/slideshows/Final_*.webp')).forEach(
        ({ default: path }) => {
            const pathUrl = new URL(path, import.meta.url);
            let data = {
                path: pathUrl.pathname,
            }
            finalItems.push(data);
        }
    );

    let furtherDevelopmentItems = [
        {
            path: furtherDevelopment,
        }
    ];

    return (
        <main className="layout">
            <Section type="primary" align="centered">
                <SectionTitle>
                    <SectionLogo src={experimentalImageryLogo} />
                </SectionTitle>
                <SectionSubtitle>
                    A-Level Photography Component One - Marked at Grade A
                </SectionSubtitle>
            </Section>
            <Section type="secondary">
                <SectionTitle>
                    Project Introduction
                </SectionTitle>
                <p>In Component One of my Photography A-Level, I was given the topic of “Experimental Imagery”, which I interpreted as a way to try and bend the ‘rules’ of photography and create something that isn’t usually seen within the world of photography.</p>
                <p>Within this, I tried to investigate techniques new and old that aren’t seen much because they are often seen as “too experimental” or out of the contemporary world, within these themes I explored ways to portray the world and people in a way that may make the viewer think twice about what they are seeing as well as how it should make them feel.</p>
            </Section>
            <Section align="right">
                <SectionTitle>
                    Initial Development
                </SectionTitle>
                <p>The project initially started with looking at how colour can affect a viewer’s experience of a photograph. Focusing first on how the lack of colour and artificial depth looks, before moving more into selective use of colour as well as creating artificial colour in a photo.</p>
                <p>During this process I began to look at how the shape of colour matters – using bokeh and colour together to control a viewer’s perception of a location. At this time, I also began to look into how video can be used to further increase a viewer’s connection to a location.</p>
                <p>After this I began to look into how I could ‘destroy’ a photo just enough to warp a viewer’s perception of an image, but not so much that it is no longer recognisable. One technique that I really liked, but ended up not making it into the final investigation was creating something that felt unnatural, but used human hands, the results of this can be seen below:</p>
            </Section>
            <Section type="tertiary" align="centered">
                <SectionTitle>
                    Initial Outcomes
                </SectionTitle>
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
            <Section type="secondary">
                <SectionTitle>
                    Further Development
                </SectionTitle>
                <p>As well as this, another favourite image of mine from this project is where I split the colours and blurred a model’s face to give a sense of broken and unrecognisable to the viewer – where they couldn’t see the facial features of the person but could see the rest in a ‘broken world’. The result of this can be seen below:</p>
                <Slideshow images={furtherDevelopmentItems}>
                    <SlideshowThumbnailButton>
                        <img src={furtherDevelopment} className="image" loading="lazy" decoding="async" />
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="primary" align="centered">
                <SectionTitle>
                    Glitch Development
                </SectionTitle>
                <p>Moving towards the end of the project, I began to once again look at how the world of photography, which is generally a snapshot of time in a single image, could move more towards the world of video and more so the motion of the world within the photographs.</p>
                <p>This method of motion in a single still photo was inspired by Mura Masa ‘s music video ‘What If I Go?’, which used a digital form of a style of 3D photography, popularised by the Nimslo 3D film camera from the 1980s, where I used the same moment in time but with multiple shots from slightly differing angles, to give a ‘frozen in time’ sense to the viewer, were they can see more than they should be able to. I then used these frames to create a looping gif, such as the ones below:</p>
                <div className="section__video">
                    <Row equal="true">
                        <video src={glitch1} className="video" controls />
                        <video src={glitch2} className="video" controls />
                    </Row>
                </div>
            </Section>
            <Section type="tertiary" align="right">
                <SectionTitle>
                    Final Development
                </SectionTitle>
                <p>From this, I developed a look that was similar to Super8 film, and incorporated it into a ‘music video’ style outcome, which used the techniques developed throughout the project to give a futuristic and old-fashioned contract to the viewer, within a confusing yet motion-filled outcome that bends the rules of photography and what is expected both from the artist and the viewer</p>
            </Section>
            <Section align="centered">
                <SectionTitle>
                    Final Outcomes
                </SectionTitle>
                <Slideshow images={finalItems}>
                    <SlideshowThumbnailButton>
                        <Column size="small" noGap="true">
                            <Row equal="true">
                                {finalItems.slice(0, 4).map((item, index) => (
                                    <img src={item?.path ?? ""} key={index} className="image" loading="lazy" decoding="async" />
                                ))}
                            </Row>
                            <Row equal="true">
                                {finalItems.slice(4, 8).map((item, index) => (
                                    <img src={item?.path ?? ""} key={index} className="image" loading="lazy" decoding="async" />
                                ))}
                            </Row>
                        </Column>
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="secondary" align="centered">
                <SectionTitle>
                    Final Video
                </SectionTitle>
                <div className="section__video">
                    <video src={final} className="video" controls />
                </div>
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

export default ExperimentalImagery