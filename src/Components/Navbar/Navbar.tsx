import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Input, InputGroup, InputRightElement, Text, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react';
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "Assets/Logo/Logo.svg"
import React, { useEffect } from 'react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { ReactComponent as UserIcon } from "Assets/Icons/User.svg"
import { ReactComponent as CartIcon } from "Assets/Icons/Cart.svg"
import { ReactComponent as FavIcon } from "Assets/Icons/Fav.svg"
import Badge from '@uiw/react-badge';
import { commerce } from 'CommerceJs/CommerceJs';

interface NavbarProps {
}

interface nmTypes {
    name: string,
    linkTo: string
}
const NavigationMenu = [
    {
        name: "Home",
        linkTo: "/",
    },
    {
        name: "Clothes",
        linkTo: "/clothes",
    },
    {
        name: "Shoes",
        linkTo: "/shoes",
    },
    {
        name: "Accessories",
        linkTo: "/accessories",
    },
]
const Navbar: React.FC<NavbarProps> = () => {
    const history = useHistory();
    const [isMobile] = useMediaQuery("(max-width:540px)");
    const [isTablet] = useMediaQuery("(max-width:768px)");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>()

    const Products = async () => {
        try {
            const response = await commerce.products.list();
            console.log(response.data);
            console.table(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        Products()
    }, [])

    const LeftNav = () => {
        return (
            <> {!isTablet && <HStack spacing={9}>
                {NavigationMenu.map((nm: nmTypes) => {
                    return (
                        <Text key={nm.name} onClick={() => history.push(`/${nm.linkTo}`)}>{nm.name}</Text>
                    )
                })}
            </HStack>}
                {isTablet && <VStack spacing={5}>
                    {NavigationMenu.map((nm: nmTypes) => {
                        return (
                            <Text key={nm.name} onClick={() => history.push(`/${nm.linkTo}`)}>{nm.name}</Text>
                        )
                    })}
                </VStack>}
            </>
        )
    }
    const RightNav = () => {
        return (
            <>
                {!isMobile && <HStack margin="0px 20px" spacing={9}>
                    <InputGroup size="sm">
                        <Input
                            pr="4.5rem"
                            placeholder="Search Product"
                            maxWidth={200}
                        />
                        <InputRightElement width="4.5rem">
                            <SearchIcon />
                        </InputRightElement>
                    </InputGroup>
                    <UserIcon style={{ width: 30, height: 30 }} />
                    <Badge count={5}>
                        <CartIcon style={{ width: 20, height: 20 }} />
                    </Badge>
                    <FavIcon style={{ width: 30, height: 30 }} />
                </HStack>}
                {isMobile && <VStack margin="0px 20px" spacing={9}>
                    <InputGroup size="sm">
                        <Input
                            pr="4.5rem"
                            placeholder="Search Product"
                            maxWidth={200}
                        />
                        <InputRightElement width="4.5rem">
                            <SearchIcon />
                        </InputRightElement>
                    </InputGroup>
                    <UserIcon style={{ width: 30, height: 30 }} />
                    <Badge count={5}>
                        <CartIcon style={{ width: 20, height: 20 }} />
                    </Badge>
                    <FavIcon style={{ width: 30, height: 30 }} />
                </VStack>}
            </>
        )
    }
    return (
        <Box backgroundColor="#fff" position="fixed" zIndex={1} h={70} top={0} w="100%" d="flex" justifyContent="space-between" alignItems="center" padding={isTablet ? "15px 20px" : "15px 50px"}>
            {!isTablet && <LeftNav />}
            <Logo style={{ width: "auto", height: 60 }} />
            {!isMobile &&
                <RightNav />}
            {isTablet && <Button padding="0px 50px" variant="primary" ref={btnRef} colorScheme="teal" onClick={onOpen}>
                <HamburgerIcon />
            </Button>}
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Navigation Menu</DrawerHeader>
                    <DrawerBody >
                        <VStack>
                            {isMobile && <RightNav />}
                            <Divider />
                            <LeftNav />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;