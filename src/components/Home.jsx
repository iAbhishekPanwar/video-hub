import { Box } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Heading } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const Home = () => {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'}>
          Watch the Future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'blackAlpha.600'} color={'white'}>
          Future is AI
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
