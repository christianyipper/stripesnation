import { useRef, useState, useEffect, useLayoutEffect } from 'react';

const DropdownBrand = ({ 
    heading, section, text,
    img1, img2, img3, img4, img5,
    alt1, alt2, alt3, alt4, alt5,
    display2, display3, display4, display5
}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [isReady, setIsReady] = useState(false);

    // === SET MAX HEIGHT ON DROPDOWN ===
    // useLayoutEffect(() => {
    //     if ( dropdownRef.current ) {
    //         const element = dropdownRef.current;
    //         element.style.setProperty('--max-height', `${element.scrollHeight}px`);
    //     }
    // }, [dropdownRef]);

    // === SET MAX HEIGHT ON DROPDOWN WITH TIMER ===
    useEffect(() => {
        const element = dropdownRef.current;

        if ( element ) {
        // Recalculate height with a slight delay to ensure all content is fully rendered
        const timer = setTimeout(() => {
            element.style.setProperty('--max-height', `${element.scrollHeight}px`);
            setIsReady( true ); // Trigger recalculation after content is loaded
        }, 50);

        return () => clearTimeout( timer ); // Cleanup timer if component unmounts
        }
    }, [dropdownRef, isReady]); // Ensure this runs after content is ready

    const dropdownClick = () => {
        setIsActive(!isActive);
    };

    return (
        <section className={`${ section } ${ isActive ? "" : "drop" }`} onClick={ dropdownClick } ref={dropdownRef}>
                <h2>{ heading }</h2>
                <p>{ text }</p>
                <img src={ img1 } alt={ alt1 } />
                <img className={ display2 } src={ img2 } alt={ alt2 } />
                <img className={ display3 } src={ img3 } alt={ alt3 } />
                <img className={ display4 } src={ img4 } alt={ alt4 } />
                <img className={ display5 } src={ img5 } alt={ alt5 } />
        </section>
    )
}

export default DropdownBrand;