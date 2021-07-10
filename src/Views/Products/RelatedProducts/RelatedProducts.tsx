import { Grid, Text, GridItem, Center } from '@chakra-ui/react';
import ProductCard from 'Components/ProductCard/ProductCard';
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

interface RelatedProductsProps { }

const RelatedProducts: React.FC<RelatedProductsProps> = () => {
    const ProductDetail = useSelector((state: RootStateOrAny) => state.ProductTop.Product);

    if (!ProductDetail) {
        return (
            <Text m="50px 50px 0px">No Related Products Found.</Text>
        )
    }
    return (
        <Grid m="50px 50px 0px" templateColumns="repeat(4,1fr)" >
            <GridItem colSpan={4}>
                <Text textAlign="center" fontWeight={900} fontSize={35}>Related Products</Text>
            </GridItem>
            {ProductDetail?.related_products?.map((product: any) => {
                return (
                    <GridItem key={product.id} mt={10} colSpan={1}><Center><ProductCard data={product} /></Center></GridItem>
                )
            })}
        </Grid>
    );
};

export default RelatedProducts;