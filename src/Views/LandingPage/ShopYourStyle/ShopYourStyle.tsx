import { Grid, GridItem, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

interface ShopYourStyleProps {
    onRef?: any
}

const ShopYourStyle: React.FC<ShopYourStyleProps> = ({ onRef }) => {
    const [isTablet] = useMediaQuery("(max-width:768px)");
    return (
        <>
            <Grid ref={onRef} mt={50} templateRows="repeat(1fr,1fr)" templateColumns="repeat(1,1fr)" >
                <GridItem colSpan={1}>
                    <Text fontSize={30} color="#ED165F" textAlign="center">Shop Your Style</Text>
                    <Text mt={30} fontSize={18} padding={isTablet ? "0px 20px" : '0px 100px'} textAlign={isTablet ? "justify" : "center"} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing
                        viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies.
                        Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.
                    </Text>
                </GridItem>
            </Grid>
        </>
    );
};

export default ShopYourStyle;