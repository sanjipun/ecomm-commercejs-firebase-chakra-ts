import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface NotFoundProps { }

const NotFound: React.FC<NotFoundProps> = () => {
    return (
        <Flex direction="column" h="80vh" m="0px 50px" justify="center" align="center">
            <Text fontSize="50px" color="#ED165F">404</Text>
            <Text fontSize="40px" color="#ED165F">NOT FOUND</Text>
        </Flex>
    );
};

export default NotFound;