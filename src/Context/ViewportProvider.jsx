import { useEffect, useState } from "react";
import { ViewportContext } from "@/Context";

function ViewportContextProvider(props) {
    const [viewportHeight, setViewportHeight] = useState('100vh');
    const [viewportWidth, setViewportWidth] = useState('100vw');

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
    }, [])

    function handleResize() {
        setViewportHeight(`${window.innerHeight}px`);
        setViewportWidth(`${window.innerWidth}px`);
    }


    return (
        <ViewportContext.Provider value={{ viewportHeight, viewportWidth }}>
            {props.children}
        </ViewportContext.Provider>
    )
}

export default ViewportContextProvider;