import { Center, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from 'Components/ProductCard/ProductCard';
import React from 'react';

interface ProductsProps {
    data?: any
}

const Products: React.FC<ProductsProps> = ({ data }) => {
    return (
        <Grid mt={30} gap={10} templateColumns="repeat(4,1fr)" padding="0 20px" >
            {data?.map((product: any) => {
                return (
                    <GridItem key={product.id} colSpan={1}><Center><ProductCard data={product} /></Center></GridItem>
                )
            })}
        </Grid>
    );
};

export default Products;