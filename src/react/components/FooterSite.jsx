import {Link} from "react-router-dom";
import Logo from "./Logo.jsx";
import Icon from "./Icon.jsx";

export default function FooterSite() {
    return (
        <footer className="[ footer-site ] [ bg-neutral-2 fg-neutral-1 ]">
            <div className="[ wrapper flow ] [ space-6 text-center//below-md ]" data-flow-childs='divs'>
                <div className="items-justify-center//below-md direction-row//above-md">
                    <Link to="/" aria-label="homepage"><Logo/></Link>
                    <div className="fs-1 text-uppercase letter-spacing-5 direction-row//above-lg">
                        <div data-inherit-space="false">
                            <p aria-label="restaurant address">Marthwaite, Sedbergh</p>
                            <p>Cumbria</p>
                            <a aria-label="phone number" href="tel:+00 44 123 4567">+00 44 123 4567</a>
                        </div>
                        <div data-inherit-space="false">
                            <p>open times</p>
                            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
                            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
                        </div>
                    </div>
                </div>
                <div className="items-justify-center//below-md items-align-center//below-md direction-row//above-md justify-between//above-md" data-inherit-space="false">
                    <p className="fs-1">Challenge by <a href="https://www.frontendmentor.io/home">Frontend&nbsp;Mentor</a>.
                        Coded&nbsp;by&nbsp;Martin&nbsp;Kamír.</p>
                    <ul className="cluster" role="list">
                        <li>
                            <a rel="noreferrer" target="_blank" href="https://martinkamir.com/" aria-label="author's website">
                                <Icon name="mkk"/>
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" target="_blank" href="https://github.com/Martin-K-Kamir" aria-label="github">
                                <Icon name="github"/>
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/martin-kam%C3%ADr-2967aa222/" aria-label="linkedin">
                                <Icon name="linkedin"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}