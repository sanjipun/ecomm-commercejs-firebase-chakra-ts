import React, { useEffect, useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Hero from './Hero/Hero';
import { GetLandingProductsRequest } from './LandingAction';
import Products from './Products/Products';
import ShopYourStyle from './ShopYourStyle/ShopYourStyle';

interface LandingProps { }

const Landing: React.FC<LandingProps> = () => {
    const myRef = useRef<any>(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const LandingProducts = useSelector((state: RootStateOrAny) => state.Landing.LandingProducts.data);

    const dispatch = useDispatch();
    useEffect(() => {
        if (LandingProducts === undefined) {
            dispatch(GetLandingProductsRequest());
        }
    }, [LandingProducts, dispatch])
    return (
        <>
            <Hero onClick={executeScroll} />
            <ShopYourStyle onRef={myRef} />
            <Products data={LandingProducts} />
        </>
    );
};

export default Landing;