import React from 'react'
import { useRouter } from 'next/router';
import data from '.././data/projects.json'
import { Stack, Flex, List, SimpleGrid, Text, Image, Wrap } from '@chakra-ui/react'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function Projects() {
    const router = useRouter()
  return (
    <Stack spacing='1.2rem' id='bout'>
        <Text fontSize={{base: 'sm', sm: 'md'}}>Projects</Text>
        {data.prj.map((e, i) => (
            <List key={i}
            id='clickable'
            onClick={() => router.push(`/project-details/${e.idx}`)}
            bg='#3b3b3b' 
            rounded='lg' 
            p={3} 
            _hover={{bg: '#525252'}} transition='ease-in-out .2s'>
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
                        {e.desc.map((i, idx) => (                            
                            <Text key={idx} fontSize='xs' className='shadowtext'>{i}</Text>
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
                                            key={i} 
                                            rounded='lg' 
                                            src={pic}
                                        />
                                    ))}
                                </Flex>
                            </Wrap>
                        )}
                    </Stack>
                </SimpleGrid>
            </List>
        ))}
    </Stack>
  )
}
