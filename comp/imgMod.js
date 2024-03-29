import { 
    Modal, 
    ModalContent, 
    ModalBody,
    ModalOverlay,
    Image } from '@chakra-ui/react'
  import React from 'react'
  
  export default function Img({ isOpen, onClose, selectImg }) {
    return (
      <Modal rounded='lg' isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay/>
        <ModalContent maxW='56rem'>
            <ModalBody bg='#262626' rounded='md' p={1}>
              <Image rounded='xs' w='100%' src={selectImg}/>
            </ModalBody>
        </ModalContent>
      </Modal>
    )
  }
  