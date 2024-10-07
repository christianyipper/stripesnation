import { useRef, useState, useLayoutEffect } from 'react';

const DropdownBrand = ({ 
    heading, 
    img1, img2, img3, img4, img5,
    alt1, alt2, alt3, alt4, alt5 
}) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const dropdownClick = () => {
        setIsActive(!isActive);
    };

    useLayoutEffect(() => {
        if (dropdownRef.current) {
            const element = dropdownRef.current;
            element.style.setProperty('--max-height', `${element.scrollHeight}px`);
        }
    }, [dropdownRef]);

    return (
        <section className={ isActive ? "" : "drop" } onClick={ dropdownClick } ref={dropdownRef}>
                <h2>{ heading }</h2>
                <img src={ img1 } alt={ alt1 } />
                <img src={ img2 } alt={ alt2 } />
                <img src={ img3 } alt={ alt3 } />
                <img src={ img4 } alt={ alt4 } />
                <img src={ img5 } alt={ alt5 } />
        </section>
    )
}

export default DropdownBrand;