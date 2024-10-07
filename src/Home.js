import HomeParallaxBg from "./assets/img/home-img/parallax-back.jpg";
import HomeParallaxGif from "./assets/img/home-img/parallax-animate.gif";
import HomeParallax from "./assets/img/home-img/parallax-front.png";
import Button from "./components/Button";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div id="home" className="home">
            <Helmet>
                <title>Stripes Nation | Referee & Sports Photography</title>
                <meta property="og:title" content="Stripes Nation | Referee & Sports Photography"/>

                <meta name="description" content="Stripes Nation is a non-profit referee & sports photography brand devoted to showcasing the passion and dedication of hockey officials."/>
                <meta name="og:description" content="Stripes Nation is a non-profit referee & sports photography brand devoted to showcasing the passion and dedication of hockey officials."/>

                <meta name="keywords" content="referee photography, sports photography, hockey referees, hockey linespeople, on-ice officials, hockey officiating, hockey community, officiating community, referee brand, photography for amateur hockey referees and linespeople, inclusive photography platform, hockey referees media, Christian Yip, hockey officials, visual storytelling for on-ice officials, ice hockey, sports media, minor hockey referees and linespeople, minor hockey officials, amateur hockey referees and linespeople, amateur hockey officials, explore new perspectives"/>

                <meta property="og:url" content="https://stripesnation.com"/>
            </Helmet>
            <section className="img-wrap">
                <div className="parallax-front">
                    <img className="parallax-gif" src={ HomeParallaxGif } alt="Animated image of a referee jersey waving in the wind" />
                    <img className="parallax-static" src={ HomeParallax } alt="Image of a referee bearing the Stripes Nation logo on the ice during the game" />
                </div>
                <div className="parallax-back">
                    {/* <div className="img-overlay"/> */}
                    <img className="img-back" src={ HomeParallaxBg } alt="Image of a hockey game in the background" />
                </div>
                <div className="mobile-img-overlay"/>
            </section>
            <article>
                <h1>Explore<span> </span>New Perspectives</h1>
                <p>Dive into the world of on-ice officiating as we share a whole new perspective of the game.</p>
                <div>
                    <Button
                        text="Learn More"
                        variant="primary"
                        link="/about"
                    />
                    <Button
                        text="Photo Gallery"
                        variant="secondary"
                        link="/gallery"
                    />
                </div>
            </article>
        </div>
    )
}

export default Home;