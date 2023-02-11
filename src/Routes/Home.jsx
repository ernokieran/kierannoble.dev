import { useEffect, useContext } from 'react';
import { ProjectTile } from '../Components';
import { Intro } from '../Components/Layout';
import { ProjectContext } from '../Context';

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
                    <ProjectTile route="/project/harmony" name="harmony" className="layout__column--double" />
                    <ProjectTile name="pinewood" />
                </section>
                <section className="layout__row layout__row--equal">
                    <ProjectTile name="experimentalImagery" />
                    <ProjectTile name="partsAndSections" />
                </section>
            </main>
        </div>
    );
}

export default Home