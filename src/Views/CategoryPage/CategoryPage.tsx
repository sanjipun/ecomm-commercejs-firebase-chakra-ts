import { UpDownIcon } from '@chakra-ui/icons';
import { Button, Text, Grid, GridItem, Divider, VStack, HStack, Badge, Checkbox, Input, useMediaQuery, Select, Flex, CheckboxGroup, useDisclosure, Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, DrawerOverlay } from '@chakra-ui/react';
import ProductCard from 'Components/ProductCard/ProductCard';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

interface CategoryProps { }

const sizes = ["xxs", "xs",
    "sm", "md", "lg", "xl", "xxl",
]
const categories = [
    {
        name: "All",
        linkTo: "/category/all"
    },
    {
        name: "Accessories",
        linkTo: "/category/accessories"
    },
    {
        name: "Bags",
        linkTo: "/category/bags"
    },
    {
        name: "Dress",
        linkTo: "/category/dress"
    },
    {
        name: "Clothes",
        linkTo: "/category/clothes"
    },
]
const CategoryPage: React.FC<CategoryProps> = () => {
    const history = useHistory()
    const [size, setSize] = useState<string>("")
    const [price, setPrice] = useState<[]>([])
    const [startPrice, setStartPrice] = useState<string>("")
    const [endPrice, setEndPrice] = useState<string>("")
    const [sortParam, setSortParam] = useState<string>("Most Popular")
    const [isTablet] = useMediaQuery("(max-width:768px)");

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>()

    console.log(price, size, startPrice, endPrice)


    const DrawerItems = () => {
        return (
            <>
                <VStack alignItems="flex-start" mt={5} >
                    <Text textTransform="uppercase">Category</Text>
                    <Divider h={3} />
                    {categories.map((c: { name: string, linkTo: string }) => {
                        return (
                            <Text onClick={() => history.push(c.linkTo)} key={c.name} cursor="pointer" _hover={{ color: "#ED165F" }} fontSize={15}>{c.name}</Text>
                        )
                    })}
                </VStack>
                <VStack alignItems="flex-start" mt={5}>
                    <Text textTransform="uppercase">Size</Text>
                    <Divider h={3} />
                    <HStack justifyContent="flex-start" flexWrap="wrap">
                        {sizes.map((s: string) => {
                            return (<Badge key={s} onClick={() => setSize(s)} m={1} p={2}>{(s)}</Badge>)
                        })}
                    </HStack>
                </VStack>
                <VStack alignItems="flex-start" mt={5}>
                    <Text textTransform="uppercase">Price</Text>
                    <Divider h={3} />
                    <CheckboxGroup onChange={(e: any) => setPrice(e)} colorScheme="green">
                        <VStack alignItems="flex-start">
                            <Checkbox value="0-1000">NRP. 0 - NRP. 1000</Checkbox>
                            <Checkbox value="1000-1500">NRP. 1000 - NRP. 1500</Checkbox>
                            <Checkbox value="1500-2000">NRP. 1500 - NRP. 2000</Checkbox>
                            <Checkbox value="2000-2500" >NRP. 2000 - NRP. 2500</Checkbox>
                            <Checkbox value="above 2500">Above NRP. 2500 </Checkbox>
                        </VStack>
                    </CheckboxGroup>
                    <HStack>
                        <Input onChange={(e: any) => setStartPrice(e.target.value)} borderRadius={0} type="number" w={100} /><Text>to</Text><Input onChange={(e: any) => setEndPrice(e.target.value)} borderRadius={0} type="number" w={100} /><Button variant="primary" padding="0px 15px" letterSpacing={0}>Apply</Button>
                    </HStack>
                </VStack></>
        )
    }
    return (<>
        <Text m="100px 50px 0px" textTransform="uppercase" fontSize={30}>Clothes</Text>
        <Grid m="50px" d={isTablet ? "flex" : undefined} templateColumns="repeat(4,1fr)">
            {/*<GridItem colSpan={4} mb={5}>
            </GridItem>*/}
            {!isTablet && <GridItem maxW="315px" colSpan={1}>
                <DrawerItems />
            </GridItem>}
            <GridItem colSpan={3} mt={5}>
                <Flex justify={isTablet ? "space-between" : "flex-end"}>
                    {isTablet && <Button ref={btnRef} onClick={onOpen} variant="text"><UpDownIcon /></Button>}
                    <Drawer
                        size="full"
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Filter Options</DrawerHeader>
                            <DrawerBody>
                                <DrawerItems />
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    <Select borderRadius={0} fontSize="15px" w={220} onChange={(e: any) => setSortParam(e.target.value)} size="md" placeholder={`Sort By: ${sortParam}`}>
                        <option value="Most Popular">Most Popular</option>
                        <option value="Price Low to High">Price Low to High</option>
                        <option value="Price High to Low">Price High to Low</option>
                        <option value="Verified Brand">Verified Brand</option>
                    </Select>
                </Flex>
                <Divider mt={1} />
                <Grid mt={5} w="100%" templateColumns={3} gap={5} d="flex" justifyContent={isTablet ? "center" : "space-around"} flexWrap="wrap">
                    <GridItem colSpan={isTablet ? 3 : 1} >
                        <ProductCard />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <ProductCard />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <ProductCard />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <ProductCard />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <ProductCard />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <ProductCard />
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </>
    );
};

export default CategoryPage;