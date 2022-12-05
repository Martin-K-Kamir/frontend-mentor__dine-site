import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import Image from "./Image.jsx";
import Logo from "./Logo.jsx";

export default function Hero(props) {
    return (
        <header className="hero">
            <div className="[ stacked ] [ bg-neutral-2 fg-neutral-1 ]">
                <Image name={props.image.name} dir={props.image.dir}/>
                <div className="wrapper">
                    <Link to="/" aria-label="homepage"><Logo/></Link>
                    <div className="stack">
                        <h1 className="title-4">{props.title}</h1>
                        <p className="measure-4">{props.desc}</p>
                        {props.button && <Button to={props.button.to} content={props.button.content} type="ghost"/>}
                    </div>
                </div>
            </div>
        </header>
    );
}