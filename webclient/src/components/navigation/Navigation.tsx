import { Link as ReactRouterLink } from 'react-router-dom';
import {
    Button,
    Link as ChakraLink,
    Flex,
    LinkProps,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
} from '@chakra-ui/react';
import { BsCart4 } from 'react-icons/bs';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';

import { FaHeart } from 'react-icons/fa';
import { IoPersonCircleOutline } from 'react-icons/io5';
import CartIcon from '../icons/SunIcon';

const styles = {
    navBar: {
        display: 'flex',
    },
    navLink: {
        fontSize: '2rem',
    },
};

const Navigation = () => {
    return (
        <header>
            <Flex>
                <ChakraLink as={ReactRouterLink} to='/'>
                    Home
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to='products'>
                    Products
                </ChakraLink>
                <ChakraLink as={ReactRouterLink} to='cart'>
                    <BsCart4 />
                </ChakraLink>
                <Spacer />
                <Menu>
                    <MenuButton>
                        Profile
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </header>
    );
};

export default Navigation;
