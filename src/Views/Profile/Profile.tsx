import { Grid, GridItem, VStack, Text, Divider } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps { }

const Profile: React.FC<ProfileProps> = () => {
    return (
        <Grid gap={5} m="100px 50px 0" templateColumns="repeat(4,1fr)">
            <GridItem p={5} border="1px solid rgba(0,0,0,0.2)" colSpan={1}>
                <VStack alignItems="flex-start">
                    <Text> User Dashboard</Text>
                    <Divider />
                    <Text fontSize={15}>Account Informaton</Text>
                    <Text fontSize={15}>Address Book</Text>
                    <Text fontSize={15}>My Orders</Text>
                    <Text fontSize={15}>My Favourites</Text>
                </VStack>
            </GridItem>
            <GridItem colSpan={3} p={5} border="1px solid rgba(0,0,0,0.2)">
                <VStack alignItems="flex-start">
                    <Text>Name: Sanji Pun</Text>
                    <Text>Email: SanjiPun@gmail.com</Text>
                    <Text>Phone Number: +977 9843807911</Text>
                    <Text>Address: Nakhipot - 14, Lalitpur</Text>
                    <Text>Gender: Male</Text>
                    <Text>Date of Birth: 2055-04-06</Text>
                </VStack>
            </GridItem>
        </Grid>
    );
};

export default Profile;