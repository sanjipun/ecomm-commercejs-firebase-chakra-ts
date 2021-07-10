import { StarIcon } from '@chakra-ui/icons';
import { Box, Center, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';

interface ProductCardProps {
    data?: any
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const history = useHistory()
    return (
        <Box onClick={() => {
            history.push(`/product/${data?.id}`);
            window.scrollTo(0, 0)
        }}
            borderRadius={4}
            border="0.5px solid rgba(0,0,0,0.2)"
            cursor="pointer"
            _hover={{
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)"
            }}
            d="flex"
            flexDirection="column"
            justifyContent="space-between"
            overflow="hidden" w={219} h={400}
        >
            <Image src={data?.media.source} w="auto" h="330px" />
            <Box borderTop="0.5px solid rgba(0,0,0,0.2)" h="100%" textAlign="center" backgroundColor="#fff">
                <Text fontSize={14} >{data?.name}</Text>
                <Text fontSize={12} >{data?.discount ? <><del>NPR. 200</del> {data?.price.raw}</> : "NRP. 2000"}</Text>
                <Center>
                    <HStack>
                        <StarIcon color={"#ED165F"} />
                        <Text fontSize={12}> 4.5 / 5</Text>
                        <Text fontSize={12}> 100 Reviews</Text>
                    </HStack>
                </Center>
            </Box>
        </Box >
    );
};

export default ProductCard;