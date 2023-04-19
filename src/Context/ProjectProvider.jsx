import { useState } from 'react';
import { ProjectContext } from '~/Context';

function ProjectContextProvider(props) {
    const [project, setProject] = useState('home');

    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;
