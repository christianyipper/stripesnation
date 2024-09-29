import HomeBG from "./assets/img/sn-jersey.jpg"
import HomeParallaxBg from "./assets/img/sn-parallax-bg.jpg"
import HomeParallax from "./assets/img/sn-parallax-official.png"

const Home = () => {
    return (
        <div className='home'>
            <section className="img-wrap">
                <img className="parallax-front" src={ HomeParallax } alt="" />
                <div className="img-bg">
                    <div className="img-overlay"/>
                    <img className="parallax-back" src={ HomeParallaxBg } alt="" />
                </div>
            </section>
            <article>
                <h1>Explore<span> </span>New Perspectives</h1>
                <p>Dive into the world of on-ice officiating as we share a whole new perspective of the game.</p>
            </article>
        </div>
    )
}

export default Home;