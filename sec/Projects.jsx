import React, { useState } from 'react'
import data from '../data/projects.json'
import { Stack, Flex, useDisclosure, List, SimpleGrid, Text, Image, Wrap } from '@chakra-ui/react'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Img from '@/comp/imgMod';

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function Projects() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [selectImg, setSelectImg] = useState(null)
    const showImg = (imgSrc) => {
        setSelectImg(imgSrc)
        onOpen()
    }
    
  return (
    <Stack spacing='1.2rem' id='bout'>
        <Text fontSize={{base: 'sm', sm: 'md'}}>Projects</Text>
        {data.prj.map((e, i) => (
            <List key={i}>
                <SimpleGrid columns={{base: 1, sm: 2}}>
                    <Text fontSize='smaller' className='shadowtext'>{e.date}</Text>
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
                        </Flex>
                        {e.desc.map(i => (                            
                            <Text fontSize='xs' className='shadowtext'>{i}</Text>
                        ))}
                        <Flex gap='.5rem'>
                            {e.stack.map((s, i) => (
                                <Text key={i} fontSize='xs'>{s}</Text>
                            ))}
                        </Flex>
                        {e.ss && (
                            <Wrap overflowX='scroll'>
                                <Flex width='40%' gap='.5rem'>
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
  )
}
