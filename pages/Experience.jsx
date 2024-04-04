import React from 'react'
import { useRouter } from 'next/router';
import { Flex, Stack, Text, List, SimpleGrid, Wrap, Image } from '@chakra-ui/react'
import data from '.././data/exp.json'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function Experience() {
    const router = useRouter()
  return (
    <Stack spacing='3rem' w='fit-content'>
        <Stack spacing='1.2rem' id='bout'>
            <Text>Work Experience</Text>
            {data.work.map((e, i) => (
                <List key={i}
                id='clickable'
                onClick={() => router.push(`/work-details/${e.idx}`)}
                bg='#3b3b3b' 
                rounded='lg' 
                p={3} 
                _hover={{bg: '#525252'}} transition='ease-in-out .2s'>
                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={{base: '1rem', lg: '0rem'}}>
                        <Stack spacing='1rem'>
                            <Text fontSize='smaller' className='shadowtext'>{e.start} – {e.end}</Text>
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
                                <Text fontSize='smaller'>{e.comp}</Text>
                            </Flex>

                            <Text fontSize='smaller' className='shadowtext'>{e.loc}</Text>
                            <Text fontSize='xs' className='shadowtext'>{e.desc}</Text>

                            {e.ss && (
                                <Wrap overflowX='scroll'>
                                    <Flex width='55%' gap='.5rem'>
                                        {e.ss.map((pic, i) => (
                                            <Image 
                                                id='clickable' 
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
    </Stack>
  )
}
