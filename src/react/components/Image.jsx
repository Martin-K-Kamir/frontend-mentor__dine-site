export default function Image(props) {
    const imageSizes = props.imageSizes ? [...props.imageSizes] : ["desktop", "tablet", "mobile"]
    const mediaSizes = props.mediaSizes ? [...props.mediaSizes] : ["64em", "30em"];
    const resolutionX = props.resolutionX ? [...props.resolutionX] : ["1x", "2x"];
    const resolutionW = props.resolutionW ? [...props.resolutionW] : "";
    const formats = props.formats ? [...props.formats] : ["webp", "jpg"];

    function getPath() {
        if (props.dir) {
            return `assets/images/${props.dir}/${props.name}`;
        } else {
            return `assets/images/${props.name}`;
        }
    }

    function getSrcSet(imageSize, x) {
        return resolutionX.map((resolution, i) => {
            return formats.map(format => {
                return `${getPath()}-${imageSize}${resolution !== "1x" ? `@${resolution}` : ""}.${format} ${resolutionW ? resolutionW[x][i] + "w" : resolution}`;
            })
        })
    }

    function getMedia(i) {
        if (props.mediaSizes === "none") return "false";
        if (mediaSizes[i]) return `(width > ${mediaSizes[i]})`;
    }

    function handleLoad() {
        if (!props.onLoad) return;
        props.onLoad();
    }

    return (
        <picture onLoad={handleLoad} className={props.className}>
            {imageSizes.map((imageSize, index) => (
                <source
                    key={`key${index}`}
                    media={getMedia(index)}
                    srcSet={getSrcSet(imageSize, index)}
                />
            ))}

            <img loading={props.lazy ? "lazy" : "eager"}
                 fetchpriority={props.fetchPriority ? props.fetchPriority : 'auto'}
                 width={props.width}
                 height={props.height}
                 aria-hidden={!props.alt}
                 alt={props.alt ? props.alt : ""}
                 src={`${getPath()}-${imageSizes[0]}.jpg`}
            />
        </picture>
    );
}