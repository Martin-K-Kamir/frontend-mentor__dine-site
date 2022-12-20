import Hero from "../components/Hero.jsx";
import FeatureEvents from "../components/FeatureEvents.jsx";
import Image from "../components/Image";
import Button from "../components/Button.jsx";

export default function HomePage() {
    return (
        <main>
            <Hero title="Exquisite dining since 1989"
                  desc="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
                  button={{to: "/reservation", content: "Book a table"}}
                  image={{dir: "homepage"}}
            />
            <section className="space-fluid-6" data-section-overlaps="true" data-reduce-overlaps="true">
                <span className="pattern-curve" style={{"--_top" : "16%", "--_radius-2": "var(--_radius)", "--_length" : "55%"}} aria-hidden="true"></span>
                <div className="wrapper">
                    <div className="[ zpattern ] [ text-center//below-lg ]" data-zpattern-first="media">
                        <div>
                            <div className="[ stack ] [ items-align-center//below-lg ]">
                                <h2 className="[ title-3 ] [ title-border ]">Enjoyable place for all the family</h2>
                                <p className="measure-4">Our relaxed surroundings make dining with us a great experience for everyone. We can even
                                    arrange a tour of the
                                    farm before your meal.
                                </p>
                            </div>
                            <Image name="enjoyable-place" alt="A view of a nice valley where the river flows and sheep can be observed"
                                   lazy={true}
                                   utils="shadow-3"
                                   resolutionW={[[540, 1080], [573, 1146], [327, 654]]}
                            />
                        </div>
                        <div>
                            <span className="pattern-lines" style={{"--_top" : "50%", "--_right" : "0", "--_x" : "50%", "--_y" : "-50%"}} aria-hidden="true"></span>
                            <div className="[ stack ] [ items-align-center//below-lg ]">
                                <h2 className="[ title-3 ] [ title-border ]">The most locally sourced food</h2>
                                <p className="measure-4">All our ingredients come directly from our farm or local fishery. So you can be sure that
                                    you’re eating the
                                    freshest, most sustainable food.
                                </p>
                            </div>
                            <Image name="locally-sourced" alt="Chef finishing plating of Fish with White Asparagus"
                                   lazy={true}
                                   utils="shadow-3"
                                   resolutionW={[[540, 1080], [573, 1146], [327, 654]]}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-fluid-6 bg-neutral-2 fg-neutral-1">
                <span className="pattern-curve" style={{"--_top" : "0%", "--_right" : "0", "--_y" : "-100%", "--_radius-1": "var(--_radius)", "--_length" : '65%'}} aria-hidden="true"></span>
                <div className="wrapper">
                    <div className="[ even-columns flow ] [ space-fluid-3 direction-column//below-lg ]">
                        <div className="[ stack ] [ items-align-center//below-lg text-center//below-lg ]">
                            <h2 className="[ title-3 ] [ title-border ]">A few highlights from our menu</h2>
                            <p className="measure-4">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                                Our menu is revamped
                                every season.</p>
                        </div>
                        <div className="[ stack ] [ space-3 stack-border ]" >
                            <div className="card-meal">
                                <div className="[ card-meal__container ] [ flow ] [ space-fluid-1 ]">
                                    <Image name="salmon" mediaSizes={"none"} imageSizes={["mobile"]} lazy={true}
                                           resolutionW={[[327, 654]]}
                                           alt="Salmon with fresh salad on plate"
                                    />
                                    <div className="[ card-meal__content ] [ stack ]">
                                        <h3 className="[ title-2 ] [ line-pointer ]">Seared Salmon Fillet</h3>
                                        <p className="fs-2">Our locally sourced salmon served with a refreshing buckwheat summer salad</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-meal">
                                <div className="[ card-meal__container ] [ flow ] [ space-fluid-1 ]">
                                    <Image name="beef" mediaSizes={"none"} imageSizes={["mobile"]} lazy={true}
                                           resolutionW={[[327, 654]]}
                                           alt="Filet Mignon on plate"
                                    />
                                    <div className="[ card-meal__content ] [ stack ]">
                                        <h3 className="[ title-2 ] [ line-pointer ]">Rosemary Filet Mignon</h3>
                                        <p className="fs-2">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-meal">
                                <div className="[ card-meal__container ] [ flow ] [ space-fluid-1 ]">
                                    <Image name="chocolate" mediaSizes={"none"} imageSizes={["mobile"]} lazy={true}
                                           resolutionW={[[327, 654]]}
                                           alt="Chocolate Mousse sprinkled with pomegranate seeds"
                                    />
                                    <div className="[ card-meal__content ] [ stack ]">
                                        <h3 className="[ title-2 ] [ line-pointer ]">Summer Fruit Chocolate Mousse</h3>
                                        <p className="fs-2">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="space-fluid-6">
                <span className="pattern-curve" style={{"--_top" : "0%", "--_radius-2": "var(--_radius)", "--_length" : '40%'}} aria-hidden="true"></span>
                <div className="wrapper">
                    <FeatureEvents data={[
                        {
                            name: "Family Gathering",
                            desc: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for your family.",
                            image: {
                                name: "family-gathering",
                                alt: "Family sitting at table",
                                lazy: true,
                                resolutionW: [[540, 1080], [573, 1146], [326, 652]]
                            }
                        },
                        {
                            name: "Special Events",
                            desc: "Whether it’s a  romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
                            image: {
                                name: "special-events",
                                alt: "Family sitting at table",
                                lazy: true,
                                resolutionW: [[540, 1080], [573, 1146], [326, 652]]
                            }
                        },
                        {
                            name: "Social Events",
                            desc: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
                            image: {
                                name: "social-events",
                                alt: "Family sitting at table",
                                lazy: true,
                                resolutionW: [[540, 1080], [573, 1146], [326, 652]]
                            }

                        },
                    ]}
                    />
                </div>
            </section>
            <section className="[ stacked ] [ bg-neutral-2 fg-neutral-1 ]" data-extrinsic-sizing="true">
                <Image name="ready-bg" lazy={true} resolutionW={[[1440, 2880], [768, 1536], [375, 750]]}/>
                <div
                    className="[ wrapper flow ] [ space-3 text-center//below-lg items-justify-center//below-lg items-align-center//above-lg direction-row//above-lg justify-between//above-lg ]">
                    <h2 className="[ title-3 ] [ measure-7 ]">Ready to make a reservation?</h2>
                    <Button to="/reservation" content="book a table" type="ghost"/>
                </div>
            </section>
        </main>
    );
}