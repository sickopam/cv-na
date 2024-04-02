import { 
    Text,
    Modal, 
    ModalContent, 
    ModalBody,
    ModalOverlay,
    ModalHeader,
    ModalFooter} from '@chakra-ui/react'
  import React from 'react'
  import { Poppins } from 'next/font/google'
  
  const poppins = Poppins({subsets: ["latin"], weight: "300"})

  export default function TextMod({isOpen, onClose, header, body}) {
    return (
      <Modal rounded='lg' isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay/>
        <ModalContent bg='#262626' maxW='40rem' className={poppins.className}>
            <ModalHeader>{header}</ModalHeader>
            <ModalBody>
                <Text className='shadowtext' textAlign='justify'>{body}</Text>
            </ModalBody>
            <ModalFooter/>
        </ModalContent>
      </Modal>
    )
  }
  