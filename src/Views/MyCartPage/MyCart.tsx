import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import MyCartTable from './MyCartTable/MyCartTable';

interface MyCartProps { }

const MyCart: React.FC<MyCartProps> = () => {
    const CartItems = useSelector((state: RootStateOrAny) => state.ProductTop)
    return (
        <Grid m="100px 50px 0" templateColumns="repeat(1,1fr)">
            <GridItem colSpan={1}>
                <Text fontSize={20} fontWeight={900}>
                    Shopping Cart ({CartItems?.NoOfItemsInCart} Items)
                </Text>
            </GridItem>
            <GridItem>
                <MyCartTable data={CartItems?.CartItems} />
            </GridItem>
        </Grid>
    );
};

export default MyCart;