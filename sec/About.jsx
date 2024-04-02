import React from 'react'
import { Stack, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter } from '@chakra-ui/react'
import TextMod from '@/comp/TextMod'

export default function About() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    
  return (
    <Stack spacing='3rem' w='fit-content'>
        <Stack spacing='.8rem'>
            <Text fontSize={{base: 'sm', sm: 'md'}}>About</Text>
            <Text id='bout' className='shadowtext'>A computer science & artificial intelligence student, focusing on web development and computer security & network. Based in Birmingham, originated in Indonesia.</Text>
            <Text onClick={onOpen} width='fit-content' id='hyperlink' fontSize='xs'>Show full &gt;</Text>
        </Stack>

        <TextMod
            isOpen={isOpen} 
            onClose={onClose} 
            header='About Me'
            body='Competent & avid learner with experience as a software developer, dedicated to any project set on the table. Cheerful, friendly, and eager to socialize with companions in order to grasp any new knowledge available. Possess high analytical and judgemental skills, suitable for problem solving for quicker and efficient work development. Highly interested in Web/Mobile App Development, as well as Cyber Security, both crucial elements for the creation and safety of softwares.'
        />

    </Stack>
  )
}
