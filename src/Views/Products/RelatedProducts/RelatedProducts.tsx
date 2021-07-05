import { Grid, Text, GridItem, Center } from '@chakra-ui/react';
import ProductCard from 'Components/ProductCard/ProductCard';
import React from 'react';

interface RelatedProductsProps { }

const RelatedProducts: React.FC<RelatedProductsProps> = () => {
    return (
        <Grid m="50px 50px 0px" templateColumns="repeat(4,1fr)" >
            <GridItem colSpan={4}>
                <Text textAlign="center" fontWeight={900} fontSize={35}>Related Products</Text>
            </GridItem>
            <GridItem mt={10} colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem mt={10} colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem mt={10} colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem mt={10} colSpan={1}><Center><ProductCard /></Center></GridItem>
        </Grid>
    );
};

export default RelatedProducts;