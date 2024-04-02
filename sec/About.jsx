import React, { useState } from 'react'
import { Flex, Stack, Text, List, SimpleGrid, useDisclosure, Wrap, Image, Modal } from '@chakra-ui/react'

import data from '../data/exp.json'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Img from '@/comp/imgMod';

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function About() {

    const {isOpen, onOpen, onClose} = useDisclosure()
 
    
  return (
    <Stack spacing='3rem' w='fit-content'>
        <Stack spacing='.8rem'>
            <Text fontSize={{base: 'sm', sm: 'md'}}>About</Text>
            <Text id='bout' className='shadowtext'>A computer science & artificial intelligence student, focusing on web development and computer security & network. Based in Birmingham, originated in Indonesia.</Text>
            <Text onClick={onOpen} width='fit-content' id='hyperlink' fontSize='xs'>Show full &gt;</Text>
        </Stack>

        <Modal isOpen={isOpen} onClose={onClose}>
            <Text>ofdngodfngdiofngdoni</Text>
        </Modal>

    </Stack>
  )
}
