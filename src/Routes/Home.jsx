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
                    <div className="harmony layout__column--double">
                        <ProjectTile route="/project/harmony" />
                    </div>
                    <div className="pinewood">
                        <ProjectTile />
                    </div>
                </section>
                <section className="layout__row layout__row--equal">
                    <div className="experimentalImagery">
                        <ProjectTile />
                    </div>
                    <div className="partsAndSections">
                        <ProjectTile />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home