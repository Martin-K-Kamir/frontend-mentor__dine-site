import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import Image from "./Image.jsx";
import Logo from "./Logo.jsx";

export default function Hero(props) {
    return (
        <header className="[ hero ] [ stacked ] [ fg-neutral-1 ]" data-extrinsic-sizing="true">
            <Image name={props.image.name ? props.image.name : "hero-bg"}
                   dir={props.image.dir}
                   fetchPriority={"high"}
                   resolutionW={[[1440, 2880], [768, 1536], [375, 750]]}
            />
            <div className="[ wrapper flow ] [ items-justify-center//below-lg direction-row//above-lg ]">
                <div className=" [ hero__container ] [ flow ] [ space-6 items-justify-center//below-lg align-center//below-lg ]">
                    <Link to="/" aria-label="homepage"><Logo/></Link>
                    <div className="[ hero__content ] [ stack ] [ space-6 text-center//below-lg items-align-center//below-lg items-align-start//above-lg ]">
                        <h1 className="title-4">{props.title}</h1>
                        <p className="measure-4 space-1">{props.desc}</p>
                        {props.button && <Button to={props.button.to} content={props.button.content} type="ghost"/>}
                    </div>
                </div>
                {props.children && <div className="self-align-start//below-lg self-align-center//above-lg">
                    {props.children}
                </div>}
            </div>
        </header>
    );
}