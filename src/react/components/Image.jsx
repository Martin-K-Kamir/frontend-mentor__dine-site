// d 1080 540 t 1146 573 m 654 327
export default function Image(props) {
    const imageSizes = props.imageSizes ? [...props.imageSizes] : ["desktop", "tablet", "mobile"]
    const mediaSizes = props.mediaSizes ? [...props.mediaSizes] : ["64em", "30em"];
    const descriptorX = props.descriptorX ? [...props.descriptorX] : ["1x", "2x"];
    const descriptorW = props.descriptorW ? [...props.descriptorW] : "";
    const formats = props.formats ? [...props.formats] : ["webp", "jpg"];

    function getPath() {
        if (props.dir) {
            return `assets/images/${props.dir}/${props.name}`;
        } else {
            return `assets/images/${props.name}`;
        }
    }

    function getSrcSet(deviceSize, x) {
        return descriptorX.map((descriptor, i) => {
            return formats.map(format => {
                return `${getPath()}-${deviceSize}${descriptor !== "1x" ? `@${descriptor}` : ""}.${format} ${descriptorW ? descriptorW[x][i] + "w" : descriptor}`;
            })
        })
    }


    return (
        <picture className={props.className}>
            {imageSizes.map((deviceSize, index) => (
                <source
                    key={`key${index}`}
                    media={mediaSizes[index] ? `(width > ${mediaSizes[index]})` : ""}
                    srcSet={getSrcSet(deviceSize, index)}
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