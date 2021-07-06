import { Image, SimpleGrid, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import { ReactComponent as HeroLogo } from "Assets/Logo/HeroLogo.svg"
import { ReactComponent as CustomDownArrow } from "Assets/Icons/CustomDownArrow.svg"
import HeroLady from "Assets/Logo/HeroLady.png"
import React, { useState } from 'react';

interface HeroProps {
    onClick?: () => void
}

const Hero: React.FC<HeroProps> = ({ onClick = () => { } }) => {
    const [isMobile] = useMediaQuery("(max-width:540px)");
    const [isTablet] = useMediaQuery("(max-width:768px)");
    const [rotate, setRotate] = useState<boolean>(false);
    return (
        <SimpleGrid position="relative" h={isMobile ? 800 : 1096} templateColumns="repeat(1,1fr)" backgroundColor="#ED165F">
            <HeroLogo style={{ maxWidth: isMobile ? "350px" : isTablet ? "700px" : "100%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <Image src={HeroLady} position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)"></Image>
            <VStack position="absolute" bottom={isMobile ? -30 : 0} flexDir="column" align="center" left="50%" transform="translate(-50%,-50%)">
                <Text fontSize={30} color="#fff" textAlign="center">Explore Our Collection</Text>
                <CustomDownArrow onClick={onClick} style={{ cursor: "pointer", transition: "transform 0.5s ease", transform: rotate ? "rotate(360deg)" : "" }} onMouseEnter={() => setRotate(true)} onMouseLeave={() => setRotate(false)} />
            </VStack>
        </SimpleGrid>
    );
};

export default Hero;