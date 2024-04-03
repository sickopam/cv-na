import React from 'react'
import { Stack, Text, useDisclosure } from '@chakra-ui/react'
import TextMod from '@/comp/TextMod'

export default function About() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    
  return (
    <Stack w='fit-content'>
        <Stack spacing='.8rem'>
            <Text fontSize={{base: 'sm', sm: 'md'}}>About</Text>
            <Text id='bout' className='shadowtext'>A Double Degree Computer Science & Artificial student of University of Birmingham & Gadjah Mada University focused on Software Engineering and Cyber Security who is set to graduate in Summer of 2025. Based in Birmingham, originated in Indonesia.</Text>
            <Text 
            id='hyperlink'
            onClick={onOpen} 
            width='fit-content' 
            fontSize='sm'>Show full &gt;</Text>
        </Stack>

        <TextMod
            isOpen={isOpen} 
            onClose={onClose} 
            header='About Me'
            body='Competent & avid learner with experience as a software developer in 3 different organizations and several personal projects. Cheerful, friendly, and eager to socialize with companions in order to grasp any new knowledge available. Possess high analytical and judgemental skills through various experiences such as working on a campus research group and an organization project; these capabilities which will be suitable for problem solving, resulting in quicker and efficient work development. Highly interested in Web/Mobile App Development, as well as Cyber Security, both crucial elements for the creation and safety of softwares.'
        />

    </Stack>
  )
}
