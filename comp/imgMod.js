import { 
    Modal, 
    ModalContent, 
    ModalBody,
    ModalOverlay,
    Image } from '@chakra-ui/react'
  import React from 'react'
  
  export default function Img({ isOpen, onClose, selectImg }) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay/>
        <ModalContent maxW='56rem'>
            <ModalBody bg='#262626' rounded='md'>
              <Image src={selectImg}/>
            </ModalBody>
        </ModalContent>
      </Modal>
    )
  }
  