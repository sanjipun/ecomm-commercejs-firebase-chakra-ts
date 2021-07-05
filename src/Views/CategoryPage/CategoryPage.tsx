import { Button, Text, Grid, GridItem, Divider, VStack, HStack, Badge, Checkbox, Input } from '@chakra-ui/react';
import ProductCard from 'Components/ProductCard/ProductCard';
import React from 'react';

interface CategoryProps { }

const sizes = ["xxs", "xs",
    "sm", "md", "lg", "xl", "xxl",
]
const categories = [
    {
        name: "All",
        linkTo: "/products/all"
    },
    {
        name: "Accessories",
        linkTo: "/products/accessories"
    },
    {
        name: "Bags",
        linkTo: "/products/bags"
    },
    {
        name: "Dress",
        linkTo: "/products/dress"
    },
    {
        name: "Clothes",
        linkTo: "/products/clothes"
    },
]
const CategoryPage: React.FC<CategoryProps> = () => {
    return (
        <Grid m="100px 50px 0px" templateColumns="repeat(4,1fr)">
            <GridItem colSpan={4} mb={5}>
                <Text textTransform="uppercase" fontSize={30}>Clothes</Text>
            </GridItem>
            <GridItem maxW="315px" colSpan={1}>
                <VStack alignItems="flex-start" mt={5} >
                    <Text textTransform="uppercase">Category</Text>
                    <Divider h={3} />
                    {categories.map((c: { name: string, linkTo: string }) => {
                        return (
                            <Text fontSize={15}>{c.name}</Text>
                        )
                    })}
                </VStack>
                <VStack alignItems="flex-start" mt={5}>
                    <Text textTransform="uppercase">Size</Text>
                    <Divider h={3} />
                    <HStack justifyContent="flex-start" flexWrap="wrap">
                        {sizes.map((s: string) => {
                            return (<Badge m={1} p={2}>{(s)}</Badge>)
                        })}
                    </HStack>
                </VStack>
                <VStack alignItems="flex-start" mt={5}>
                    <Text textTransform="uppercase">Price</Text>
                    <Divider h={3} />
                    <Checkbox value={1000}>NRP. 0 - NRP. 1000</Checkbox>
                    <Checkbox value={1500}>NRP. 1000 - NRP. 1500</Checkbox>
                    <Checkbox value={2000}>NRP. 15000 - NRP. 2000</Checkbox>
                    <Checkbox value={2500}>NRP. 2000 - NRP. 2500</Checkbox>
                    <Checkbox value={3000}>Above NRP. 2500 </Checkbox>
                    <HStack>
                        <Input w={100} /><Text>to</Text><Input w={100} /><Button variant="primary" padding="0px 15px" letterSpacing={0}>Apply</Button>
                    </HStack>
                </VStack>
            </GridItem>
            <GridItem colSpan={3}>
                <Grid templateColumns={3} gap={5} d="flex" justifyContent="space-around" flexWrap="wrap">
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
                    <GridItem colSpan={1}>
                        <ProductCard />
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    );
};

export default CategoryPage;