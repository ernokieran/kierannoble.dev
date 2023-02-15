function useGenerateSlideshowContent(images, thumbnails = null) {
    function formatUrl(url) {
        let pathURL = new URL(url, import.meta.url);
        let path = pathURL.pathname;

        if (path.includes("base64")) {
            path = `data:${path}`;
        }
        return path;
    }

    if (typeof (images) === "string") {
        return [{
            path: images,
            thumbnail: thumbnails,
        }]
    }

    if (thumbnails != null) {
        thumbnails = Object.values(thumbnails);
    }

    let items = [];

    Object.values(images).forEach((value, index) => {
        let data = {
            path: formatUrl(value.default),
            thumbnail: thumbnails ? formatUrl(thumbnails[index].default) : null,
        }
        items.push(data);
    });

    return items;
}

export default useGenerateSlideshowContent;