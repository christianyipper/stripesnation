import Wallpaper from "../assets/img/yipper-wallpaper.jpg";
import WallpaperHalf from "../assets/img/yipper-wallpaper-half.jpg";
import Button from "../components/Button";

const Contact = () => {
    return (
        <div className='contact'>
            <section className="img-wrap">
                    <div className="img-overlay"/>
                    <img className="img-front" src={ Wallpaper } alt=""/>
                    <img className="img-back" src={ WallpaperHalf } alt=""/>
            </section>
            <section className="content">
                <article>
                    <h1>Christian Yip</h1>
                    <div>
                        <p>Photographer</p>
                        <hr/>
                        <p>Front-End Developer</p>
                        <hr/>
                        <p>Graphics Designer</p>
                    </div>
                </article>
                <div>
                    <article>
                        <Button
                            text="www.yipper.ca"
                            variant="tertiary"
                            link="https://www.yipper.ca"
                            target="_blank"
                        />
                        <p className="description">Dev Portfolio</p>
                    </article>
                    <article>
                        <Button
                            text="christian@yipper.ca"
                            variant="tertiary"
                            link="christian@yipper.ca"
                            target="_blank"
                        />
                        <p className="description">Business Email</p>
                    </article>
                    <article>
                        <Button
                            text="in/christianyipper"
                            variant="tertiary"
                            link="https://www.linkedin.com/in/christianyipper/"
                            target="_blank"
                        />
                        <p className="description">Personal LinkedIn</p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Contact;