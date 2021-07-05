import React from 'react';
import ProductDesc from './productDesc/ProductDesc';
import ProductTop from './ProductTop/ProductTop';
import RelatedProducts from './RelatedProducts/RelatedProducts';

interface ProductPageProps { }

const ProductPage: React.FC<ProductPageProps> = () => {
    return (
        <>
            <ProductTop />
            <ProductDesc />
            <RelatedProducts />
        </>
    );
};

export default ProductPage;