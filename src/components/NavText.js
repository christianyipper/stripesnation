
const NavText = ({ text, link, active, textclass }) => {
    return (
        <a className={`nav-text ${ textclass }`} href={ link }>
            <p>{ text }</p>
            <div className="link-bgr-wrap">
                <div className="link-bg"/>
            </div>
            <div className="link-bgl-wrap">
                <div className="link-bg"/>
            </div>
            <div className={`link-active ${ active }`}/>
        </a>
    )
}

export default NavText;