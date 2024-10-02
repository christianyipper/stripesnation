import HomeParallaxBg from "./assets/img/sn-parallax-bg.jpg"
import HomeParallaxGif from "./assets/img/jersey-animate-1440.gif"
import HomeParallax from "./assets/img/sn-parallax-official.png"
import Button from "./components/Button"

const Home = () => {
    return (
        <div className='home'>
            <section className="img-wrap">
                <div className="parallax-front">
                    <img className="parallax-gif" src={ HomeParallaxGif } alt="" />
                    {/* <video className="parallax-mov" loop autoPlay muted>
                        <source src={ HomeParallaxMov } type="video/mov"/>
                    </video> */}
                    <img className="parallax-static" src={ HomeParallax } alt="" />
                </div>
                <div className="img-bg">
                    <div className="img-overlay"/>
                    <img className="parallax-back" src={ HomeParallaxBg } alt="" />
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