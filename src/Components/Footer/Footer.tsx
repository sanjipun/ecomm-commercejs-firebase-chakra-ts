import { Flex, Grid, GridItem, useMediaQuery, Text, Center, HStack, Input, InputGroup, InputRightElement, VStack, } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as Logo } from "Assets/Logo/Logo.svg"
import { ReactComponent as FB } from "Assets/Icons/FB.svg"
import { ReactComponent as Twitter } from "Assets/Icons/Twitter.svg"
import { ReactComponent as Insta } from "Assets/Icons/Insta.svg"


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
    const [isMobile] = useMediaQuery("(max-width:540px)");
    const [isTablet] = useMediaQuery("(max-width:768px)");
    return (
        <Grid backgroundColor="#F5F5F5" minH={200} gap={10} mt="100px" templateRows="repeat(1,1fr)" templateColumns="repeat(5,1fr)" padding={isTablet ? "20px" : "0px 50px"}>
            <GridItem colSpan={isMobile ? 5 : 1}>
                <Center h="100%">
                    <Logo />
                </Center>
            </GridItem>
            <GridItem colSpan={isMobile ? 5 : isTablet ? 2 : 1}>
                <Flex h="100%" direction="column" align={isMobile ? "center" : ""} justify="center">
                    <Text>About Us</Text>
                    <Text>Contact</Text>
                    <Text>Terms and Conditions</Text>
                </Flex>
            </GridItem>
            <GridItem colSpan={isMobile ? 5 : isTablet ? 2 : 1}>
                <Flex h="100%" direction="column" align={isMobile ? "center" : ""} justify="center">
                    <HStack>
                        <Insta />
                        <Text>Instagram</Text>
                    </HStack>
                    <HStack ><FB />
                        <Text pl="7px">Facenook</Text>
                    </HStack>
                    <HStack><Twitter />
                        <Text>Twitter</Text>
                    </HStack>
                </Flex>
            </GridItem>
            <GridItem colSpan={isMobile ? 5 : isTablet ? 3 : 1}>
                <VStack h="100%" align={isMobile ? "center" : ""} justify="center">
                    <Text>Subscribe to our newsletter</Text>
                    <InputGroup size="sm">
                        <Input
                            pr="4.5rem"
                            focusBorderColor="#ED165F"
                            placeholder="Email"
                            maxWidth="100%"
                        />
                        <InputRightElement onClick={() => console.log("clicked")} w="4.5rem" cursor="pointer" children={<Center textAlign="center" h="100%" w="100%" color="#fff" backgroundColor="#ED165F">OK</Center>} />
                    </InputGroup>
                </VStack>
            </GridItem >
            <GridItem colSpan={isMobile ? 5 : isTablet ? 2 : 1}>
                <Flex h="100%" direction="column" align={isMobile ? "center" : ""} justify="center">
                    <HStack>
                        <Text>Nakhipot - 14, Lalitpur, Nepal</Text>
                    </HStack>
                    <HStack >
                        <Text >+977 987654321</Text>
                    </HStack>
                    <HStack>
                        <Text>iamsanjaypun@gmail.com</Text>
                    </HStack>
                </Flex>
            </GridItem>
        </Grid >
    );
};

export default Footer;