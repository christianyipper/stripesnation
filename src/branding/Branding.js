import React, { useState } from 'react';
import { Helmet } from "react-helmet";

import Draft from "../assets/img/branding-img/Draft.png"
import Logo from "../assets/img/branding-img/Logo.png"
import Wordmark from "../assets/img/branding-img/Wordmark.png"
import Colour from "../assets/img/branding-img/Colours.png"
import Typography from "../assets/img/branding-img/Typography.png"
import Values from "../assets/img/branding-img/Values.png"
import Voice from "../assets/img/branding-img/Voice.png"
import Initiative from "../assets/img/branding-img/Initiative.png"

import DropdownBrand from "../components/DropdownBrand"

const Branding = () => {
    const [isActive, setIsActive] = useState(false);

    const dropdownClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div id="branding" className="branding">
            <Helmet>
                <title>Branding | Stripes Nation | Referee & Sports Photography</title>
                <meta property="og:title" content="Branding | Stripes Nation | Referee & Sports Photography"/>

                <meta name="description" content="Our mission is to provide a platform devoted to showcasing the passion and dedication of on-ice officials, fostering a positive and inclusive community within the hockey world."/>
                <meta name="og:description" content="Our mission is to provide a platform devoted to showcasing the passion and dedication of on-ice officials, fostering a positive and inclusive community within the hockey world."/>

                <meta name="keywords" content="referee photography, sports photography, hockey referees, hockey linespeople, on-ice officials, hockey officiating, hockey community, officiating community, referee brand, photography for amateur hockey referees and linespeople, inclusive photography platform, hockey referees media, Christian Yip, hockey officials, visual storytelling for on-ice officials, ice hockey, sports media, minor hockey referees and linespeople, minor hockey officials, amateur hockey referees and linespeople, amateur hockey officials, brand book, brand guide, branding, hockey referee brand, graphics design branding, marketing brand elements"/>

                <meta property="og:url" content="https://stripesnation.com/branding"/>
            </Helmet>
            <article>
                <h1>Brand Guide</h1>
                <p>Here is a look into the Stripes Nation brand created by Christian Yip. Click on the buttons below to learn more. A full brand book will be available soon.</p>
            </article>
            <DropdownBrand
                heading="Logo Design"
                img1={ Draft }
                img2={ Logo }
                img3={ Wordmark }
            />
            <DropdownBrand
                heading="Style Tile"
                img1={ Colour }
                img2={ Typography }
            />
            <DropdownBrand
                heading="Brand Identity"
                img1={ Values }
                img2={ Initiative }
                img3={ Voice }
            />
        </div>
    )
}

export default Branding;