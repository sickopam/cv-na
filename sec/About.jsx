import React, { useState } from 'react'
import { Flex, Stack, Text, List, SimpleGrid, useDisclosure, Wrap, Image } from '@chakra-ui/react'

import data from '../data/exp.json'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Img from '@/comp/imgMod';

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function About() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [selectImg, setSelectImg] = useState(null)
    const showImg = (imgSrc) => {
        setSelectImg(imgSrc)
        onOpen()
    }
    console.log(selectImg)

  return (
    <Stack spacing='3rem'>
        <Stack spacing='.8rem'>
            <Text fontSize={{base: 'sm', sm: 'md'}}>About</Text>
            <Text id='bout' className='shadowtext'>A computer science & artificial intelligence student, focusing on web development and computer security & network. Based in Birmingham, originated in Indonesia.</Text>
        </Stack>

        <Stack spacing='1.2rem' id='bout'>
            <Text>Work Experience</Text>
            {data.work.map((e, i) => (
                <List key={i}>
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
                                {e.stack.map(i => (
                                    <Text fontSize='xs'>{i}</Text>
                                ))}
                            </Flex>

                            {e.ss && (
                                <Wrap overflowX='scroll'>
                                    <Flex width='55%' gap='.5rem'>
                                        {e.ss.map(i => (
                                            <Image 
                                                id='clickable' 
                                                onClick={() => showImg(i)} 
                                                rounded='lg' 
                                                src={i}
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
