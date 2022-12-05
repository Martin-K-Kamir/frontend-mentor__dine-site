import Hero from "../components/Hero.jsx";
import {Link} from "react-router-dom";
import FeatureEvents from "../components/FeatureEvents.jsx";
import Image from "../components/Image";
import Button from "../components/Button.jsx";

export default function HomePage() {
    return (
        <main>
            <Hero title="Exquisite dining since 1989"
                  desc="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
                  button={{to: "/reservation", content: "Book a table"}}
                  image={{name: "hero-bg", dir: "homepage"}}
            />
            <section>
                <div className="wrapper">
                    <div className="zpattern">
                        <div>
                            <Image name="enjoyable-place" alt="A view of a nice valley where the river flows and sheep can be observed" descriptorW={[[540, 1080], [573, 1146], [327, 654]]}/>
                            <div className="stack">
                                <h2 className="title-3">Enjoyable place for all the family</h2>
                                <p className="measure-4">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the
                                    farm before your meal.</p>
                            </div>
                        </div>
                        <div>
                            <Image name="locally-sourced" alt="Chef finishing plating of Fish with White Asparagus" descriptorW={[[540, 1080], [573, 1146], [327, 654]]}/>
                            <div className="stack">
                                <h2 className="title-3">The most locally sourced food</h2>
                                <p className="measure-4">All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the
                                    freshest, most sustainable food.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="[ bg-neutral-2 fg-neutral-1 ]">
                <div className="wrapper">
                    <div className="switcher">
                        <div>
                            <h2 className="title-3">A few highlights from our menu</h2>
                            <p className="measure-4">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped
                                every season.</p>
                        </div>
                        <div>
                            <div className="switcher">
                                <Image name="salmon" mediaSizes={["30em"]} imageSizes={["desktop", "mobile"]} alt="Salmon with fresh salad on plate"/>
                                <div>
                                    <h3 className="title-2">Seared Salmon Fillet</h3>
                                    <p className="fs-2">Our locally sourced salmon served with a refreshing buckwheat summer salad</p>
                                </div>
                            </div>
                            <div className="switcher">
                                <Image name="beef" mediaSizes={["30em"]} imageSizes={["desktop", "mobile"]} alt="Filet Mignon on plate"/>
                                <div>
                                    <h3 className="title-2">Rosemary Filet Mignon</h3>
                                    <p className="fs-2">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                                </div>
                            </div>
                            <div className="switcher">
                                <Image name="chocolate" mediaSizes={["30em"]} imageSizes={["desktop", "mobile"]}
                                       alt="Chocolate Mousse sprinkled with pomegranate seeds"/>
                                <div>
                                    <h3 className="title-2">Summer Fruit Chocolate Mousse</h3>
                                    <p className="fs-2">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <FeatureEvents data={[
                        {
                            name: "Family Gathering",
                            desc: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
                            image: {name: "family-gathering", alt: "Family sitting at table"}
                        },
                        {
                            name: "Special Events",
                            desc: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
                            image: {name: "special-events", alt: "Family sitting at table"}
                        },
                        {
                            name: "Social Events",
                            desc: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
                            image: {name: "social-events", alt: "Family sitting at table"}

                        },
                    ]}
                    />
                </div>
            </section>
            <section className="[ bg-neutral-2 fg-neutral-1 ]">
                <div className="stacked">
                    <Image name="ready-bg"/>
                    <div className="wrapper">
                        <div className="switcher">
                            <div>
                                <h2 className="[ title-3 ] [ measure-7 ]">Ready to make a reservation?</h2>
                            </div>
                            <div>
                                <Button to="/reservation" content="book a table" type="ghost"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}