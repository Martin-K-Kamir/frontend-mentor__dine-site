import Button from "./Button.jsx";
import Image from "./Image.jsx";
import React, {useEffect, useRef, useState} from "react";

export default function FeatureEvents(props) {
    const [height, setHeight] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState(0);
    const ref = useRef(null);

    function getHeight() {
        if (loaded) {
            return {
                minBlockSize: `${height}px`
            }
        }
    }


    function handleClick(index) {
        setActive(index);
    }

    function handleLoad() {
        setHeight(ref.current.offsetHeight);
        setLoaded(true);
    }
    return (
        <div className="[ feature-events ] [ stack ]" ref={ref} style={{...getHeight()}}>
            {props.data.map((event, index) => {
                if (index === active) {
                    return (
                        <div className="[ feature-events__item ] [ flow ]" key={`key${index}`}>
                            <Image onLoad={() => handleLoad()} name={event.image.name} alt={event.image.alt} lazy={event.image.lazy} resolutionW={event.image.resolutionW}/>
                            <div
                                className="[ feature-events__content ] [ stack ] [ text-center//below-lg items-align-center//below-lg items-align-start//above-lg ]">
                                <h2 className="title-3">{event.name}</h2>
                                <p className="measure-4">{event.desc}</p>
                                <Button to="/reservation" content="book a table"/>
                            </div>
                            <nav className="feature-events__nav" aria-label="feature events navigation">
                                <ul className="[ flow ] [ direction-column//below-md direction-row//below-lg items-justify-center//below-lg ]"
                                    role="list">
                                    {props.data.map((event, index) => {
                                        return (
                                            <li className="title-1" key={`key${index}`}>
                                                <Button onClick={() => handleClick(index)} type="text" content={event.name}/>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                    )
                }
            })}
        </div>
    );
}