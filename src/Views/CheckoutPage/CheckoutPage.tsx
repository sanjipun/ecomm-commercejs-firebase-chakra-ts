import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Delivery from './Delivery/Delivery';
import Shipping from './Shipping/Shipping';

interface CheckoutPageProps { }

const CheckoutPage: React.FC<CheckoutPageProps> = () => {
    return (
        <Grid gap={5} m="100px 50px 0px" templateColumns="repeat(3,1fr)">
            <GridItem colSpan={1} p={5} border="1px solid rgba(0,0,0,0.2)">
                <Shipping />
            </GridItem>
            <GridItem colSpan={1} >
                <Delivery />
            </GridItem>
            <GridItem colSpan={1} p={5} border="1px solid rgba(0,0,0,0.2)">
                Hello World
            </GridItem>
        </Grid>
    );
};

export default CheckoutPage;