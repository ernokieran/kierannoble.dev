import { useContext, useEffect } from 'react';
import { ProjectContext } from '@/Context';
import { useGenerateSlideshowContent } from '@/Hooks';
import { Section, SectionSubtitle, SectionTitle, Column, SectionLogo } from '@/Components/Layout';
import { Slideshow, SlideshowThumbnailButton } from '@/Components';
import pinewoodLogo from "@/assets/projects/pinewood/logo.svg"
import dashboard from "@/assets/projects/pinewood/slideshows/dashboard-1.webp"

function Pinewood() {
    const { setProject } = useContext(ProjectContext);

    useEffect(() => {
        setProject('pinewood');
    }, []);

    let dashboardItems = useGenerateSlideshowContent(import.meta.glob('@/assets/projects/pinewood/slideshows/dashboard-*.webp', { eager: true }), import.meta.glob('@/assets/projects/pinewood/slideshows/thumbnails/dashboard-*.webp', { eager: true }));

    return (
        <main className="layout">
            <Section type="primary" align="centered">
                <SectionTitle>
                    <SectionLogo src={pinewoodLogo} />
                </SectionTitle>
                <SectionSubtitle>
                    Software Development Placement @ <a href="https://www.pinewood.co.uk">Pinewood Technologies</a>
                </SectionSubtitle>
            </Section>
            <Section type="secondary">
                <SectionTitle>
                    My Role
                </SectionTitle>
                <p>My Job title at Pinewood Technologies is “Software Development Placement”, which means that I am treated mostly like a normal developer, with a few key differences; such as that I have a dedicated mentor that I have access to any time I need help with anything. As well as this, during my placement year, I have a three-week sprint in the User Experience team to build my skills in that area, a presentation on a technical topic relevant to my position in the business, and a three-week sprint with a group of other placements and graduates to build a solution to a business problem from conception to completion – all of which are designed to further develop my skills outside of my normal business role.</p>
                <p>In the day to day of my job, I work on any work items assigned to me – or pick one up whenever the next priority work item is available – I speak to the relevant people involved with the item/ticket to ensure that it is progressing effectively and meeting what is expected of it. I work on code pull requests – reviewing other people in the team’s changes to make sure that they are appropriate, what we expected to change as well as making sure that they follow our coding conventions. Although it is not expected of me in my role, I sometimes work on estimating and grooming work items to get the ready for development. During any of this process, if I have questions about anything I will have a chat to my mentor – or bring it up during our daily morning stand-ups.</p>
                <p>Arguably, the main responsibility in my day-to-day role is to ask questions and be inquisitive – this is an opportunity for me to learn and grow and Pinewood take it very seriously, by also providing us with opportunities to do things outside of our normal roles, such as the previously mentioned UX, project-based and presentation experiences.</p>
            </Section>
            <Section type="tertiary" align="centered">
                <SectionTitle>
                    Technology Skills
                </SectionTitle>
                <p>During my placement I learnt considerable skills in many web technologies that are extensible outside of the organisation, most of these technologies were something that I had heard of before but my not have necessarily used it in any great detail; being part of the team at Pinewood allowed me to become more exposed to these technologies as well as build my skillset within these technologies at my own pace.</p>
                <Column size="small">
                    <ul>
                        <li>.Net Core (C#)</li>
                        <li>Knockout.js</li>
                        <li>SQL</li>
                        <li>SCSS</li>
                    </ul>
                </Column>
            </Section>
            <Section>
                <SectionTitle>
                    Personal Development
                </SectionTitle>
                <p>One of the most valuable exerpeinces of the placement year was the ability to expand on my personal skills. This was done through a few key experiences within the buisness, such as the presentation I did on a technical topic of my choice;</p>
                <p>I chose to deliver my presentation on the topic on client side viewmodelling, and the technology of Laravel Livewire, as I belived that most people in the audience wouldn't know much about it and would allow me to impart some knowledge on a couple of topics that are relevant to the day to day work I did. Overall, the presentation was well received and it really helped me gain confidence in standing up and talking to people as well as feeling better at my presentation skills.</p>
                <p>Another key experience that I throughly enjoyed was the 3 week sprint in the UX team where I had the ability to design and implement a prototype for a dashboard application from scratch; being mentored by the UX team from concept inception all the way to delivering a proptype for the dashboard. Overall this project was very enjoyable as I am a very design and detailed focused person, and I am very proud of the outcome that I delivered for this experience.</p>
                <p>You can see the outcomes for this project below:</p>
            </Section>
            <Section type="secondary" align="centered">
                <SectionTitle>
                    UX Project Outcomes
                </SectionTitle>
                <Slideshow images={dashboardItems}>
                    <SlideshowThumbnailButton>
                        <img src={dashboard} className="image" loading="lazy" decoding="async" />
                    </SlideshowThumbnailButton>
                </Slideshow>
            </Section>
            <Section type="primary">
                <SectionTitle>
                    Overall Review
                </SectionTitle>
                <p>Overall, I believe that the culture at Pinewood being so supportive has been a massive factor in my personal development – I have gained more personal skills at this company than any other institution that I have worked at before and I believe that this was because I was set clear and achievable goals at consistent intervals which gave me targets I can meet. I also believe that a large contributing factor to this is the personal relationships I have made with people both in and outside of my direct team, and feeling that I can rely on them not only for support with my direct work, but with anything surrounding my job and know that they will try to help me in any way that they can; and I hope that they also feel the same back. I feel that I should also give myself credit for persevering and trying to improve myself with every opportunity given to me and to try and find work outside of my normal role to try and get a feel and some skills for what some other people in the business do.</p>
            </Section>
        </main>
    );
}

export default Pinewood