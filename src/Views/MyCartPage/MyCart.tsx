import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import MyCartTable from './MyCartTable/MyCartTable';

interface MyCartProps {

}

const MyCart: React.FC<MyCartProps> = () => {
    return (
        <Grid m="100px 50px 0" templateColumns="repeat(1,1fr)">
            <GridItem colSpan={1}>
                <Text fontSize={20} fontWeight={900}>
                    Shopping Cart (2 Items)
                </Text>
            </GridItem>
            <GridItem>
                <MyCartTable />
            </GridItem>
        </Grid>
    );
};

export default MyCart;