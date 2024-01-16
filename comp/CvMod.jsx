import { 
  Modal, 
  ModalContent, 
  ModalBody,
  ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import Iframe from 'react-iframe'

export default function Cv({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay/>
      <ModalContent maxW='56rem'>
          <ModalBody bg='#262626' rounded='md'>
            <Iframe 
            src='/assets/resume.pdf'
            width='100%' 
            height='600px'>
            </Iframe>
          </ModalBody>
      </ModalContent>
    </Modal>
  )
}
