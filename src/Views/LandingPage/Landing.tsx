import React from 'react';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import ShopYourStyle from './ShopYourStyle/ShopYourStyle';

interface LandingProps { }

const Landing: React.FC<LandingProps> = () => {
    return (
        <>
            <Hero />
            <ShopYourStyle />
            <Products />
        </>
    );
};

export default Landing;