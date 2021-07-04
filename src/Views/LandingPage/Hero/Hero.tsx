import { Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { ReactComponent as HeroLogo } from "Assets/Logo/HeroLogo.svg"
import { ReactComponent as CustomDownArrow } from "Assets/Icons/CustomDownArrow.svg"
import HeroLady from "Assets/Logo/HeroLady.png"
import React, { useState } from 'react';

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
    const [rotate, setRotate] = useState<boolean>(false)
    return (
        <SimpleGrid position="relative" h={1096} templateColumns="repeat(1,1fr)" backgroundColor="#ED165F">
            <HeroLogo style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <Image src={HeroLady} position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)"></Image>
            <VStack position="absolute" bottom={0} flexDir="column" align="center" left="50%" transform="translate(-50%,-50%)">
                <Text fontSize={30} color="#fff">Explore Our Collection</Text>
                <CustomDownArrow style={{ cursor: "pointer", transition: "transform 0.5s ease", transform: rotate ? "rotate(360deg)" : "" }} onMouseEnter={() => setRotate(true)} onMouseLeave={() => setRotate(false)} />
            </VStack>
        </SimpleGrid>
    );
};

export default Hero;