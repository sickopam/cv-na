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
                <SimpleGrid columns={{base: 1, sm: 2}} spacing={{base: '1rem', sm: '0rem'}}>
                    <Stack spacing='1rem'>
                            <Text fontSize='smaller' className='shadowtext'>{e.date}</Text>
                            <Stack>
                                <Text fontSize='sm'>Stack</Text>
                                <Flex w='fit-content' gap={3}>
                                    {e.stack.map((s, i) => (
                                        <Text className='shadowtext' key={i} fontSize='xs'>{s}</Text>
                                    ))}
                                </Flex>
                            </Stack>
                    </Stack>                    
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
                        {e.ss && (
                            <Wrap overflowX='scroll'>
                                <Flex width='55%' gap='.5rem'>
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
