import React, { useState } from 'react'
import { Flex, Stack, Text, List, Box, SimpleGrid, useDisclosure, Wrap, Image } from '@chakra-ui/react'

import data from '../data/exp.json'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Img from '@/comp/imgMod';

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function Experience() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [selectImg, setSelectImg] = useState(null)
    const showImg = (imgSrc) => {
        setSelectImg(imgSrc)
        onOpen()
    }
    
  return (
    <Stack spacing='3rem' w='fit-content'>
        <Stack spacing='1.2rem' id='bout'>
            <Text>Work Experience</Text>
            {data.work.map((e, i) => (
                <List key={i}
                bg='#3b3b3b' 
                rounded='lg' 
                p={3} 
                _hover={{bg: '#525252'}} transition='ease-in-out .2s'>
                    <SimpleGrid columns={{base: 1, sm: 2}}>
                        <Text fontSize='smaller' className='shadowtext'>{e.start} – {e.end}</Text>
                        <Stack>
                            <Flex flexDir='column'>
                                <Flex gap='.4rem'>
                                    <a id={e.id} href={e.link} target='_blank'>
                                        <Text fontSize={{base: 'sm', sm: 'md'}}>{e.title}</Text>
                                    </a>
                                    {e.link && (
                                        <Stack justify='center'>
                                            {React.createElement(iconMap[e.ic])}
                                        </Stack>
                                    )}
                                </Flex>
                                <Text fontSize='smaller'>{e.comp}</Text>
                            </Flex>

                            <Text fontSize='smaller' className='shadowtext'>{e.loc}</Text>
                            <Text fontSize='xs' className='shadowtext'>{e.desc}</Text>
                            <Flex gap='.5rem'>
                                {e.stack.map((s, i) => (
                                    <Text key={i} fontSize='xs'>{s}</Text>
                                ))}
                            </Flex>

                            {e.ss && (
                                <Wrap overflowX='scroll'>
                                    <Flex width='55%' gap='.5rem'>
                                        {e.ss.map((pic, i) => (
                                            <Image 
                                                id='clickable' 
                                                key={i}
                                                onClick={() => showImg(pic)} 
                                                rounded='lg' 
                                                src={pic}
                                            />
                                        ))}
                                    </Flex>
                                </Wrap>
                            )}
                            <Img isOpen={isOpen} onClose={onClose} selectImg={selectImg}/>
                        </Stack>
                    </SimpleGrid>
                </List>
            ))}
        </Stack>
    </Stack>
  )
}
