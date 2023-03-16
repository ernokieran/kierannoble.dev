function LoadAssets() {
    let assets = import.meta.globEager('@/**/*.*'),
        images = [];

    Object.keys(assets).forEach((key) => {
        let image = assets[key].default;
        images.push(formatUrl(image));
    });

    function formatUrl(url) {
        let pathURL = new URL(url, import.meta.url);
        let path = pathURL.pathname;

        if (path.includes("base64")) {
            path = `data:${path}`;
        }
        return path;
    }

    return (
        <div>
            {
                images.map((image, index) => (
                    <img src={image} key={index} alt="" height="1px" width="1px" style={{ height: '1px', width: '1px' }} decoding="async" />
                ))
            }
        </div>
    );
}

export default LoadAssets;