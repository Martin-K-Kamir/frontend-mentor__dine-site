import Button from "./Button.jsx";
import Image from "./Image.jsx";
import React, {useEffect, useRef, useState} from "react";

export default function FeatureEvents(props) {
    const [height, setHeight] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        window.removeEventListener("resize", handleResize);
        window.addEventListener("resize", handleResize);
    },);

    function getHeight() {
        if (loaded) {
            return {
                minBlockSize: `${height / 16 }rem`
            }
        }
    }

    function handleClick(index) {
        setActive(index);
    }

    function handleLoad() {
        setTimeout(() => {
            setHeight(ref.current.clientHeight);
            setLoaded(true);
        }, 50)
    }

    function handleResize() {
        setHeight(ref.current.clientHeight);
    }

    return (
        <div className="feature-events" style={{...getHeight()}}>
            <div className="[ feature-events__container ] [ stack ] [ pattern-lines ]" data-pattern-lines-layer="infront" ref={ref}>
                {props.data.map((event, index) => {
                    if (index === active) {
                        return (
                            <div className="[ feature-events__item ] [ flow ]" key={`key${index}`} id={`event-${index + 1}`} role="tabpanel"
                                 tabIndex="0" aria-labelledby={`tab-${index + 1}`}>
                                <div
                                    className="[ flow ] [ space-4 direction-column//below-md direction-row//below-lg items-justify-center//below-lg align-start//above-lg ]"
                                    role="tablist"
                                    aria-label="Tabs for special events"
                                >
                                    {props.data.map((event, index) => {
                                        return (
                                            <span className="[ title-1 ] [ fs-fluid-1 text-uppercase line-pointer ]" data-line-pointer-hidden={!(active === index)} key={`key${index}`}>
                                                <Button attributes={{
                                                    "id": `tab-${index + 1}`,
                                                    "aria-controls": `event-${index + 1}`,
                                                    "aria-selected": active === index,
                                                    "role": "tab"
                                                }}
                                                        onClick={() => handleClick(index)}
                                                        type="text"
                                                        content={event.name}
                                                />
                                            </span>
                                        )
                                    })}
                                </div>
                                <div
                                    className="[ feature-events__content ] [ stack ] [ text-center//below-lg items-align-center//below-lg items-align-start//above-lg ]">
                                    <h2 className="title-3">{event.name}</h2>
                                    <p className="measure-4">{event.desc}</p>
                                    <Button to="/reservation" utils="space-fluid-1" content="book a table"/>
                                </div>
                                <Image onLoad={() => handleLoad()}
                                       name={event.image.name}
                                       alt={event.image.alt}
                                       lazy={event.image.lazy}
                                       utils="shadow-3"
                                       resolutionW={event.image.resolutionW}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
}