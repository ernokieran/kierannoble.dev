import { createContext } from 'react';

const ViewportContext = createContext({
    viewportHeight: '100vh',
    setViewportHeight: (viewportHeight) => { },
    viewportWidth: '100vw',
    setViewportWidth: (viewportWidth) => { },
});

export default ViewportContext;