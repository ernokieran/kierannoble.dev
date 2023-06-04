import { useEffect, useContext } from 'react';
import { ProjectTile } from '~/Components';
import { Intro, Section, SectionTitle, SectionSubtitle } from '~/Components/Layout';
import { ProjectContext } from '~/Context';

function Home() {
    const { setProject } = useContext(ProjectContext);

    useEffect(() => {
        setProject('home');
    }, []);

    return (
        <div>
            <Intro />
            <main className="layout">
                <section className="layout__row">
                    <ProjectTile route="/project/photi" name="photi" className="layout__column--double" />
                    <ProjectTile route="/project/harmony" name="harmony" />
                </section>
                <section className="layout__row layout__row--equal">
                    <ProjectTile route="/project/experimental-imagery" name="experimentalImagery" />
                    <ProjectTile route="/project/parts-and-sections" name="partsAndSections" />
                    <ProjectTile route="/project/pinewood" name="pinewood" />
                </section>
                {/* <Section type="primary" align="centered">
                    <SectionTitle>
                        Contact Me
                    </SectionTitle>
                </Section> */}
            </main>
        </div>
    );
}

export default Home