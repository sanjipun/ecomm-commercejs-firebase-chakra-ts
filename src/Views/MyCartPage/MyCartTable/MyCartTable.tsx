import { Divider, Text, Stat, Grid, GridItem, HStack, StatLabel, Table, Tbody, Td, Tfoot, Th, Thead, Tr, Center, Image, VStack, Select, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import MiniSkirt from "Assets/Dress/Mini Skirt.png";
import { ReactComponent as FavIcon } from "Assets/Icons/Fav2.svg";

interface MyCartTableProps { }

const MyCartTable: React.FC<MyCartTableProps> = () => {
    const [isTablet] = useMediaQuery("(max-width:768px)");
    return (
        <Grid mt="50px" templateColumns="repeat(6,1fr)">
            <GridItem colSpan={6}>
                {!isTablet &&
                    <Table size="sm">
                        <Thead>
                            <Tr>
                                <Th>Item Description</Th>
                                <Th>Quantity</Th>
                                <Th>Unit Price</Th>
                                <Th>Sub Total</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <HStack>
                                        <Center><Image w={100} h={100} objectFit="cover" src={MiniSkirt} /></Center>
                                        <Stat>
                                            <VStack alignItems="flex-start">
                                                <StatLabel fontWeight={900} fontSize={20}>Mini Skirt</StatLabel>
                                                <Text>Size : xl</Text>
                                                <HStack spacing={5} justifyContent="space-between" alignItems="center">
                                                    <HStack color="#ED165F"><FavIcon style={{ color: "#ED165F" }} /><Text>Move to Favourite</Text></HStack>
                                                    <HStack color="#ED165F" justifyContent="center" alignItems="center"><Text>X Remove</Text></HStack>
                                                </HStack>
                                            </VStack>
                                        </Stat>
                                    </HStack>
                                </Td>
                                <Td>
                                    <Select w={120}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                    </Select>
                                </Td>
                                <Td>5000</Td>
                                <Td>5000</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>Total Unique Items: 5</Th>
                                <Th>Total Quantity: 5</Th>
                                <Th>Total Unit Price: NRP. 5000</Th>
                                <Th>Total Amount: NRP. 5000</Th>
                            </Tr>
                        </Tfoot>
                    </Table>}
                {isTablet && <>
                    <Stat p={5} border="1px solid rgba(0,0,0,0.2)">
                        <HStack>
                            <Image w={100} h={100} objectFit="cover" src={MiniSkirt} />
                            <VStack alignItems="flex-start" spacing={1}>
                                <StatLabel fontWeight={900} fontSize={20}>Mini Skirt</StatLabel>
                                <Text fontSize="13px">Size : xl</Text>
                                <Text w="100%" fontSize="13px" borderRadius={0}>
                                    <Select size="sm">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Select>
                                </Text>
                                <Text fontSize="13px">Unit: NRP. 5000 </Text>
                                <Text fontSize="13px">Sub Total: NRP. 5000</Text>
                            </VStack>
                        </HStack>
                        <Divider h={3} />
                        <HStack mt={2} spacing={5} justifyContent="space-between" alignItems="center">
                            <HStack color="#ED165F"><FavIcon style={{ color: "#ED165F" }} /><Text>Favourite</Text></HStack>
                            <HStack color="#ED165F" justifyContent="center" alignItems="center"><Text>X Remove</Text></HStack>
                        </HStack>
                    </Stat>
                    <VStack mt="50px" alignItems="flex-start">
                        <Text>Total Unique Items: 5</Text>
                        <Text>Total Quantity: 5</Text>
                        <Text>Total Unit Price: NRP. 5000</Text>
                        <Text>Total Amount: NRP. 5000</Text>
                    </VStack></>
                }
            </GridItem>
        </Grid >
    );
};

export default MyCartTable;