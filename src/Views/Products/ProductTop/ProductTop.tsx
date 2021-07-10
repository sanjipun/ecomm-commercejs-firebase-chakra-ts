import { StarIcon } from '@chakra-ui/icons';
import { Button, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Grid, GridItem, Image, VStack, HStack, Divider, Box, Select, Flex, useMediaQuery, useToast } from '@chakra-ui/react';
import { ReactComponent as FavIcon } from "Assets/Icons/Fav copy.svg"
import { ReactComponent as CartIcon } from "Assets/Icons/Cart copy.svg"
import { CirclePicker } from 'react-color';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { AddToCart, AddToFav, GetProductRequest } from './ProductTopAction';
import { useParams } from 'react-router';

interface ProductTopProps { }

const ProductTop: React.FC<ProductTopProps> = () => {
    const [isTablet] = useMediaQuery("(max-width:768px)");
    const [itemCount, setItemCount] = useState<number>(1);
    const toast = useToast();
    const { slug } = useParams<{ slug: string }>();
    const dispatch = useDispatch();

    const handleChangeComplete = (color: any, event: any) => {
        console.log(color.hex);
    };
    const handleAddToCart = () => {
        const data = {
            productImage: ProductDetail?.media?.source,
            productName: ProductDetail?.name,
            numberOfItems: itemCount,
            totalItems: ProductDetail?.inventory?.available,
            size: "md",
            category: ProductDetail?.categories?.map((cat: any) => cat.name),
            color: "red",
            price: ProductDetail?.price?.raw,
        };
        dispatch(AddToCart(data))
        toast({
            title: "Successfully Added To Cart.",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
    };
    const handleAddToFav = () => {
        const data = {
            productName: "Mini Skirt",
            size: "md",
            category: "dress",
            color: "red"
        };
        dispatch(AddToFav(data));
        toast({
            title: "Successfully Added To Favourites.",
            status: "success",
            duration: 3000,
            isClosable: true,
        })
    };
    const ProductDetail = useSelector((state: RootStateOrAny) => state.ProductTop.Product);
    console.log(ProductDetail);
    useEffect(() => {
        dispatch(GetProductRequest(slug));
    }, [dispatch, slug]);
    return (
        <Grid m="100px 50px" templateColumns="repeat(2,1fr)">
            <GridItem overflow="hidden" colSpan={2}>
                <Breadcrumb backgroundColor="#f5f5f5" padding={3}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </GridItem>
            <GridItem overflow="hidden" colSpan={isTablet ? 2 : 1} mt={10}>
                <Center><Image src={ProductDetail?.media?.source} /></Center>
            </GridItem>
            <GridItem overflow="hidden" colSpan={isTablet ? 2 : 1} mt={10}>
                <VStack alignItems="flex-start">
                    <Text fontWeight={500} fontSize={24}>
                        {ProductDetail?.name}
                    </Text>
                    <HStack>
                        <StarIcon color={"#ED165F"} />
                        <Text fontSize={12}> 4/ 5</Text>
                        <Text fontSize={12}> 101 Reviews</Text>
                    </HStack>
                    <Divider h={3} />
                    <HStack pt={3}>
                        <Text color="#ED165F" fontWeight={900}>NRP. {ProductDetail?.price?.raw}</Text>
                        <Text ><del>NRP. 1500</del></Text>
                        <Text color="RED">20% off</Text>
                    </HStack>
                    <HStack w={360}>
                        <Box w={130}>Availability:</Box>
                        <Box w={130}>In Stock ({ProductDetail?.inventory?.available})</Box>
                    </HStack>
                    <HStack w={360}>
                        <Box w={130}>Category:</Box>
                        <Box w={130}>{ProductDetail?.categories?.map((cat: any) => {
                            return (
                                <Text key={cat.id}>{cat.name}</Text>
                            )
                        })}</Box>
                    </HStack>
                    <Text>Free Shipping</Text>
                    <Divider h={3} />
                    <HStack w={360} pt={3} flexWrap="wrap">
                        <Box w={130}>Category:</Box>
                        <Box w={130}><CirclePicker circleSize={isTablet ? 15 : 25} onChangeComplete={handleChangeComplete} colors={['#D33115', '#E27300', '#FCC400', "#000"]} /></Box>
                    </HStack>
                    <HStack w={360} >
                        <Box w={130}>Size:</Box>
                        <Box w={130}>
                            <Select borderRadius={0}>
                                <option>sm</option>
                                <option>md</option>
                                <option>lg</option>
                                <option>xl</option>
                            </Select>
                        </Box>
                    </HStack>
                    <Flex w="80%" justify="space-between" flexWrap="wrap">
                        <HStack mt={5} h={50} w={150} border="1px solid #ED165F">
                            <Box onClick={() => {
                                if (itemCount === 1) {
                                    setItemCount(1)
                                } else {
                                    setItemCount(itemCount - 1)
                                }
                            }} cursor="pointer" w={50} h="100%" backgroundColor="#ED165F" color="#fff">
                                <Center h="100%">-</Center>
                            </Box>
                            <Box w={35} h="100%">
                                <Center h="100%">{itemCount}</Center>
                            </Box>
                            <Box onClick={() => {
                                if (itemCount >= ProductDetail?.inventory?.available) {
                                    setItemCount(itemCount)
                                } else {
                                    setItemCount(itemCount + 1)
                                }
                            }} cursor="pointer" w={50} h="100%" backgroundColor="#ED165F" color="#fff">
                                <Center h="100%">+</Center>
                            </Box>
                        </HStack>
                        <HStack mt={5}>
                            <Button onClick={handleAddToCart} variant="primary"><CartIcon style={{ marginRight: 10 }} /> Add To Cart</Button>
                            <Button onClick={handleAddToFav} variant="primary"><FavIcon /></Button>
                        </HStack>
                    </Flex>
                </VStack>
            </GridItem>
        </Grid >
    );
};

export default ProductTop;