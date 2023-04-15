import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Button,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Button variant={'ghost'} colorScheme="purple">
                <Link to={'/'}>Home</Link>
              </Button>

              <Button variant={'ghost'} colorScheme="purple">
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button variant={'ghost'} colorScheme="purple">
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button variant={'ghost'} colorScheme="purple">
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
