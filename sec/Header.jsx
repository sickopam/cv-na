import React from 'react'
import Image from 'next/image'
import { useDisclosure, Stack, Flex, Box, Text, Button} from '@chakra-ui/react'

import Me from '../public/assets/me2.png'
import Cv from '@/comp/CvMod.js'

export default function Header() {

  const {isOpen, onOpen, onClose} = useDisclosure()

  const openModal = () => {
    onOpen()
  }

  return (
    <Flex gap='1.5rem' align='center' flexDir={{base: 'column', sm: 'row'}}>
      <Box w={120}>
        <Image id='profilepic' src={Me}/>
      </Box>
      <Stack align={{base: 'center', sm: 'initial'}} textAlign={{base: 'center', sm: 'left'}}>
        <Text fontSize='larger'>Naufal Abiyyu</Text>
        <Text className='shadowtext'>Computer Science & Artificial Intelligence Student</Text>
        <Button 
          onClick={() => openModal()} 
          rounded='3xl'
          bg='#3b3b3b'
          _hover={{bg: '#525252'}}
          color='#a5a5a5'
          fontSize='xs'
        >Paper CV</Button>
      </Stack>
      <Cv isOpen={isOpen} onClose={onClose}/>
    </Flex>
  )
}
