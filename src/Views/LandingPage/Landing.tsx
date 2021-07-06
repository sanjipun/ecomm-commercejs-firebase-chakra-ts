import React, { useRef } from 'react';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import ShopYourStyle from './ShopYourStyle/ShopYourStyle';

interface LandingProps { }

const Landing: React.FC<LandingProps> = () => {
    const myRef = useRef<any>(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return (
        <>
            <Hero onClick={executeScroll} />
            <ShopYourStyle onRef={myRef} />
            <Products />
        </>
    );
};

export default Landing;