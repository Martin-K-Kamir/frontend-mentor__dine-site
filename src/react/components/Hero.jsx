import {Link} from "react-router-dom";
import Button from "./Button.jsx";
import Image from "./Image.jsx";
import Logo from "./Logo.jsx";
import React from "react";

export default function Hero(props) {
    return (
        <header className=" [ hero ] [ stacked ] [ fg-neutral-1 ] " data-extrinsic-sizing="true">
            <Image name={props.image.name ? props.image.name : "hero-bg"}
                   dir={props.image.dir}
                   fetchPriority={"high"}
                   resolutionW={[[1440, 2880], [768, 1536], [375, 750]]}
            />
        <div className=" [ hero__wrapper ] [ wrapper flow ] [ space-6 items-justify-center//below-lg direction-row//above-lg ] ">
                <div className=" [ hero__content ] [ flow ] [ items-justify-center//below-lg align-center//below-lg ] " data-aos="show-in"
                     data-aos-duration="800">
                    <Link to="/" aria-label="homepage"><Logo/></Link>
                    <div className=" [ stack ] [ text-center//below-lg items-align-center//below-lg items-align-start//above-lg ] "
                         data-inherit-space="true"
                         data-aos="show-in"
                         data-aos-duration="800"
                         data-aos-delay="100"
                    >
                        <h1 className="title-4">{props.title}</h1>
                        <p className="measure-4" data-inherit-space="false">{props.desc}</p>
                        {props.button && <Button to={props.button.to} content={props.button.content} type="ghost"/>}
                    </div>
                </div>
                {props.children && <div className="items-justify-center//below-lg self-justify-stretch//below-lg self-align-start//below-lg self-align-center//above-lg">
                    {props.children && <span className="pattern-lines" style={{"--_bottom" : "0%", "--_x" : "-50%", "--_y" : "50%", "--_layer" : "-1"}} aria-hidden="true"></span>}
                    {props.children}
                </div>}
            </div>
        </header>
    );
}