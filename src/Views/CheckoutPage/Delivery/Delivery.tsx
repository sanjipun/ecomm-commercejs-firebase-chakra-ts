import { CheckCircleIcon } from '@chakra-ui/icons';
import { Center, ListItem, OrderedList, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface DeliveryProps { }

const Delivery: React.FC<DeliveryProps> = () => {
    return (
        <>
            <VStack alignItems="flex-start" p={5} border="1px solid rgba(0,0,0,0.2)">
                <Text><Center><CheckCircleIcon mr={3} color="#ED165F" /> Delivery Method</Center></Text>
                <RadioGroup colorScheme="pink">
                    <VStack alignItems="flex-start">
                        <Radio value="Pick Up">Pick Up from Delivery Hub</Radio>
                        <Radio value="Deliver to Door">Deliver to Door</Radio>
                    </VStack>
                </RadioGroup>
            </VStack>
            <VStack alignItems="flex-start" p={5} border="1px solid rgba(0,0,0,0.2)">
                <Text mt="50px"><Center><CheckCircleIcon mr={3} color="#ED165F" /> Payment Method</Center></Text>
                <RadioGroup colorScheme="pink">
                    <VStack mt="50px" alignItems="flex-start">
                        <Radio value="patWithCard">Pay With Card</Radio>
                        <Text color="gray">(Get 5% off total price and moneyback guarantee)</Text>
                        <Text fontSize="13px">You will be redirected to Paystack payment gateway</Text>
                        <Radio value="PayOnDelivery">Pay on Delivery</Radio>
                        <OrderedList p={5}>
                            <ListItem fontSize="14px">Kindly note that we will only accept POS payment option on delivery.</ListItem>
                            <ListItem fontSize="14px">You have to make payment before opening package.</ListItem>
                            <ListItem fontSize="14px">Once the seal is broken, item can only be returned if damaged or defective.</ListItem>
                        </OrderedList>
                    </VStack>
                </RadioGroup>
            </VStack>
        </>
    );
};

export default Delivery;