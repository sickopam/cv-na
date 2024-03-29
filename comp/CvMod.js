import { 
  Modal, 
  ModalContent, 
  ModalBody,
  ModalOverlay, 
  ModalCloseButton} from '@chakra-ui/react'
import React from 'react'
import Iframe from 'react-iframe'

export default function Cv({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay/>
      <ModalContent maxW='56rem'>
        <ModalCloseButton/>
        <ModalBody bg='#262626' rounded='md' p={1}>
          <Iframe 
          rounded='xs'
          src='/assets/cv.pdf'
          width='100%' 
          height='600px'>
          </Iframe>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
