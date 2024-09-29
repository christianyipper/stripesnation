
const NavText = ({ text, link }) => {
    return (
        <a className="nav-text" href={ link }>
            <p>{ text }</p>
            <div className="link-bgr-wrap">
                <div className="link-bg"/>
            </div>
            <div className="link-bgl-wrap">
                <div className="link-bg"/>
            </div>
            <div className="link-active link-gallery"/>
        </a>
    )
}

export default NavText;