import { Center, Grid, GridItem } from '@chakra-ui/react';
import ProductCard from 'Components/ProductCard/ProductCard';
import React from 'react';

interface ProductsProps { }

const Products: React.FC<ProductsProps> = () => {
    return (
        <Grid mt={30} gap={10} templateColumns="repeat(4,1fr)" padding="0 20px" >
            <GridItem colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem colSpan={1}><Center><ProductCard /></Center></GridItem>
            <GridItem colSpan={1}><Center><ProductCard /></Center></GridItem>
        </Grid>
    );
};

export default Products;