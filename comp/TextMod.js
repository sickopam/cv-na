import { 
    Text,
    Modal, 
    ModalContent, 
    ModalBody,
    ModalOverlay,
    ModalHeader,
    ModalFooter,
    ModalCloseButton} from '@chakra-ui/react'
  import React from 'react'
  import { Poppins } from 'next/font/google'
  
  const poppins = Poppins({subsets: ["latin"], weight: "300"})

  export default function TextMod({isOpen, onClose, header, body, footer}) {
    return (
      <Modal rounded='lg' isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay/>
        <ModalContent bg='#262626' maxW='40rem' className={poppins.className}>
            <ModalCloseButton/>
            <ModalHeader>{header}</ModalHeader>
            <ModalBody>
                <Text className='shadowtext' textAlign='justify'>{body}</Text>
            </ModalBody>
            <ModalFooter>
                <Text className='shadowtext' textAlign='left'>{footer}</Text>
            </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }
  