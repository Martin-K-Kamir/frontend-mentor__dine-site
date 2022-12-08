import Button from "./Button.jsx";
import Image from "./Image.jsx";
import React from "react";

export default function FeatureEvents(props) {
    return (
        <div className="[ feature-events ] [ stack ]">
            {props.data.map((event, index) => {
                return (
                    <div className="[ feature-events__item ] [ flow ]" key={`key${index}`}>
                        <Image name={event.image.name} alt={event.image.alt}/>
                        <div className="[ feature-events__content ] [ stack ] [ text-center//below-lg items-align-center//below-lg items-align-start//above-lg ]">
                            <h2 className="title-3">{event.name}</h2>
                            <p className="measure-4">{event.desc}</p>
                            <Button to="/reservation" content="book a table"/>
                        </div>
                        <nav className="feature-events__nav" aria-label="feature events navigation">
                            <ul className="[ flow ] [ direction-column//below-md direction-row//below-lg items-justify-center//below-lg ]" role="list">
                                {props.data.map((event, index) => {
                                    return (
                                        <li className="title-1" key={`key${index}`}><Button type="text" content={event.name}/></li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                )
            })}
        </div>
    );
}