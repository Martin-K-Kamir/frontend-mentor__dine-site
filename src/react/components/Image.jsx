// d 1080 540 t 1146 573 m 654 327
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


    return (
        <picture className={props.className}>
            {imageSizes.map((imageSize, index) => (
                <source
                    key={`key${index}`}
                    media={mediaSizes[index] ? `(width > ${mediaSizes[index]})` : ""}
                    srcSet={getSrcSet(imageSize, index)}
                />
            ))}

            <img loading={props.lazy ? "lazy" : "eager"}
                 fetchpriority={props.fetchPriority ? props.fetchPriority : 'auto'}
                 width={props.width}
                 height={props.height}
                 aria-hidden={props.alt ? false : true}
                 alt={props.alt ? props.alt : ""}
                 src={`${getPath()}-${imageSizes[0]}.jpg`}
            />
        </picture>
    );
}