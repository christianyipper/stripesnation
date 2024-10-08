const Button = ({ text, variant, link, target }) => {
    return (
        <a className={`button ${ variant }`} href={ link } target={ target }>
            <p>{ text }</p>
            <div className="btn-bgr-wrap">
                <div className="btn-bg"/>
            </div>
            <div className="btn-bgl-wrap">
                <div className="btn-bg"/>
            </div>
            <div className="link-active link-gallery"/>
        </a>
    )
}

export default Button;