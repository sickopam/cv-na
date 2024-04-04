import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useDisclosure, Stack, Flex, Box, Text, Button, IconButton } from '@chakra-ui/react'

import Me from '.././public/assets/opam.jpg'
import Cv from '@/comp/CvMod.js'
import { ChevronUpIcon } from '@chakra-ui/icons'

export default function Header() {

  const {isOpen, onOpen, onClose} = useDisclosure()
  const [opacity, setOpacity] = useState(0);

  const openModal = () => {
    onOpen()
  }
  const scrollToBottom = () => {
    window.scrollTo({
      left: 0,
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const showBtn = window.scrollY > 1000;
      setOpacity(showBtn ? 1 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <Flex gap='1.5rem' align='center' flexDir={{base: 'column', sm: 'row'}}>
      <Box w={120}>
        <Image id='profilepic' src={Me}/>
      </Box>
      <Stack align={{base: 'center', sm: 'initial'}} textAlign={{base: 'center', sm: 'left'}}>
        <Text fontSize='larger'>Naufal Abiyyu</Text>
        <Text className='shadowtext'>Computer Science & Artificial Intelligence Student</Text>
        <Flex gap='1rem'>
          <Button 
            onClick={() => openModal()} 
            rounded='3xl'
            bg='#3b3b3b'
            _hover={{bg: '#525252'}}
            color='#a5a5a5'
            fontSize='xs'
          >Paper CV</Button>
          <Button
            onClick={() => scrollToBottom()}
            rounded='3xl'
            bg='#3b3b3b'
            _hover={{bg: '#525252'}}
            color='#a5a5a5'
            fontSize='xs'>Contact Me</Button>
        </Flex>
      </Stack>

      <IconButton
        icon={<ChevronUpIcon w={6} h={6} />}
        aria-label='Scroll to top'
        onClick={scrollToTop}
        position='fixed'
        bottom='5%'
        right='5%'
        zIndex='10'
        bg='#a5a5a5'
        color='#525252'
        _hover={{ bg: '#525252', color: '#a5a5a5' }}
        rounded='full'
        opacity={opacity}
        visibility={opacity ? 'visible' : 'hidden'}
        transition='.2s all ease-in-out'
        style={{ willChange: 'opacity, visibility' }}
      />
      
      <Cv isOpen={isOpen} onClose={onClose}/>
    </Flex>
  )
}
