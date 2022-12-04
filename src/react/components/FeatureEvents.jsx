import Button from "./Button.jsx";
import Image from "./Image.jsx";

export default function FeatureEvents(props) {
    return (
        <div className="feature-events">
            {props.data.map((event, index) => {
                return (
                    <div className="feature-events__container" key={`key${index}`}>
                        <Image name={event.image.name} alt={event.image.alt}/>
                        <div className="feature-events__content">
                            <h2 className="title-3">{event.name}</h2>
                            <p>{event.desc}</p>
                            <Button to="/reservation" content="book a table"/>
                        </div>
                        <ul className="feature-events__list" role="list">
                            {props.data.map((event, index) => {
                                return (
                                    <li className="title-1" key={`key${index}`}>{event.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}