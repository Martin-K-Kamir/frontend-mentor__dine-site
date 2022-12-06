import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import Image from "./Image.jsx";
import Logo from "./Logo.jsx";

export default function Hero(props) {
    return (
        <header className="[ hero ] [ stacked ] [ bg-neutral-2 fg-neutral-1 ]" data-extrinsic-sizing="true">
            <Image name={props.image.name} dir={props.image.dir}/>
            <div className=" [ hero__container ] [ wrapper ] [ direction-column ]">
                <Link to="/" aria-label="homepage"><Logo/></Link>
                <div className="[ hero__content ] [ stack ]">
                    <h1 className="title-4">{props.title}</h1>
                    <p className="measure-4">{props.desc}</p>
                    {props.button && <Button to={props.button.to} content={props.button.content} type="ghost"/>}
                </div>
            </div>
        </header>
    );
}