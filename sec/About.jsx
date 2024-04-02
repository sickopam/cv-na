import React from 'react'
import { Stack, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter } from '@chakra-ui/react'

export default function About() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    
  return (
    <Stack spacing='3rem' w='fit-content'>
        <Stack spacing='.8rem'>
            <Text fontSize={{base: 'sm', sm: 'md'}}>About</Text>
            <Text id='bout' className='shadowtext'>A computer science & artificial intelligence student, focusing on web development and computer security & network. Based in Birmingham, originated in Indonesia.</Text>
            <Text onClick={onOpen} width='fit-content' id='hyperlink' fontSize='xs'>Show full &gt;</Text>
        </Stack>

        <Modal rounded='lg' isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay/>
            <ModalContent bg='#262626' maxW='40rem'>
                <ModalHeader>About Me</ModalHeader>
                <ModalBody>
                    <Text style={{textAlign: 'justify'}}>I am an experienced Software Engineer with well developed skills and eagerness to learn a bunch of new things that will contribute to the overall growth and development of myself. Additionally, I show keen interest in the realm of Cyber Security because I stand for the safety of applications and softwares in general. I believe, with my abilities as a software engineer and an avid learner of cyber security, I would be able to greatly contribute in future projects and work correspondingly with any team that I am placed with.</Text>
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>

    </Stack>
  )
}
