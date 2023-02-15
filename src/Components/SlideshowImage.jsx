import { useState, useEffect } from "react";

function SlideshowImage(props) {
    const [loaded, setLoaded] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (props.src != image) {
            setImage(props.src);
            setLoaded(false);
        }
    }, [props.src]);

    function imageLoaded() {
        setLoaded(true);
    }

    return (
        <div className="slideshow__image-holder">
            {loaded ? <img src={props.src} /> : (
                <div className="loader">
                    <img src={props.src} onLoad={imageLoaded} style={{ display: "none" }} /></div>
            )}
        </div>
    );
}

export default SlideshowImage;