import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import Image from "./Image.jsx";
import Logo from "./Logo.jsx";

export default function Hero(props) {
    return (
        <header className="[ hero ] [ stacked ] [ bg-neutral-2 fg-neutral-1 ]" data-extrinsic-sizing="true">
            <Image name={props.image.name ? props.image.name : "hero-bg"}
                   dir={props.image.dir}
                   fetchPriority={"high"}
                   resolutionW={[[1440, 2880], [768, 1536], [375, 750]]}
            />
            <div className=" [ hero__container ] [ wrapper ] [ self-align-end//below-lg items-justify-center//below-lg align-center//below-lg ]">
                <div><Link to="/" aria-label="homepage"><Logo/></Link></div>
                <div className="[ hero__content ] [ stack ] [ text-center//below-lg items-align-center//below-lg items-align-start//above-lg ]">
                    <h1 className="title-4">{props.title}</h1>
                    <p className="measure-4">{props.desc}</p>
                    {props.button && <Button to={props.button.to} content={props.button.content} type="ghost"/>}
                </div>
            </div>
        </header>
    );
}