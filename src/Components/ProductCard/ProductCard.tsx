import { StarIcon } from '@chakra-ui/icons';
import { Box, Center, HStack, Image, Text } from '@chakra-ui/react';
import BBDG from "Assets/Dress/Blue Button Down Gown.png"
import React from 'react';

interface ProductCardProps { }

const ProductCard: React.FC<ProductCardProps> = () => {
    const rating = 4.5
    const reviews = 134
    const discount = true
    return (
        <Box cursor="pointer" _hover={{
            boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)"
        }} d="flex" flexDirection="column" justifyContent="space-between" overflow="hidden" w={219} h={400} >
            <Image src={BBDG} w="auto" h="330px" />
            <Box h="100%" textAlign="center" backgroundColor="#fff">
                <Text fontSize={14} >Blue Button Down Gown</Text>
                <Text fontSize={12} >{discount ? <><del>NPR. 200</del> NRP. 1500</> : "NRP. 2000"}</Text>
                <Center>
                    <HStack>
                        <StarIcon color={"#ED165F"} />
                        <Text fontSize={12}> {rating} / 5</Text>
                        <Text fontSize={12}> {reviews} Reviews</Text>
                    </HStack>
                </Center>
            </Box>
        </Box >
    );
};

export default ProductCard;