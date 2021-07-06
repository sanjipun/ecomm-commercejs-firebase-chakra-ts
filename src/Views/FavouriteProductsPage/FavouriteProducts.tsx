import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

interface FavouriteProductsProps { }

const FavouriteProducts: React.FC<FavouriteProductsProps> = () => {
    return (
        <Grid m="100px 50px 0" templateColumns="repeat(4,1fr)">
            <GridItem colSpan={1}>Fav</GridItem>
        </Grid>
    );
};

export default FavouriteProducts;