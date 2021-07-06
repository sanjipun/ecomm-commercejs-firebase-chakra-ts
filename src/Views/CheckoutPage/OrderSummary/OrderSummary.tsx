import { Box, Button, Divider, HStack, Image, Select, Stat, StatLabel, Text, VStack } from '@chakra-ui/react';
import MiniSkirt from "Assets/Dress/Mini Skirt.png";
import React from 'react';

interface OrderSummaryProps { }

const OrderSummary: React.FC<OrderSummaryProps> = () => {
    return (<Box p={5} border="1px solid rgba(0,0,0,0.2)">
        <Stat p={5} border="1px solid rgba(0,0,0,0.2)">
            <HStack>
                <Image w={100} h={100} objectFit="cover" src={MiniSkirt} />
                <VStack alignItems="flex-start" spacing={1}>
                    <StatLabel fontWeight={900} fontSize={20}>Mini Skirt</StatLabel>
                    <Text fontSize="13px">Size : xl</Text>
                    <HStack w="100%" fontSize="13px" borderRadius={0}>
                        <Text>Qty:</Text>
                        <Select size="sm">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Select>
                    </HStack>
                    <Text fontSize="13px">Unit: NRP. 5000 </Text>
                </VStack>
            </HStack>
        </Stat>
        <VStack mt="50px" alignItems="flex-start">
            <Text>Cart Sub Total: NRP. 10000</Text>
            <Text>Card Discount: NRP. 2000</Text>
            <Text>Delivery Fee: NRP. 200</Text>
            <Divider h={4} />
            <Text h={50}>Total : NRP. 8200</Text>
            <Button variant="primary" marginTop="50px" w="100%">Place Order</Button>
        </VStack>
    </Box>
    );
};

export default OrderSummary;