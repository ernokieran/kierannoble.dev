import { createContext } from "react";

const ProjectContext = createContext({
    project: 'home',
    setProject: (project) => { }
});

export default ProjectContext;