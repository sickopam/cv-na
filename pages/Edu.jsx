import React from 'react'
import { Stack, SimpleGrid, Flex, List, Text } from '@chakra-ui/react'
import data from '.././data/edu.json'
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router';

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function Edu() {
    const router = useRouter()
  return (
    <Stack spacing='3rem'>
        <Stack spacing='1.2rem' id='bout'>
            <Text fontSize={{base: 'sm', sm: 'md'}}>Education</Text>
            {data.edu.map((e, i) => (
                <List key={i}
                // id='clickable'
                // onClick={() => router.push(`/edu-details/${e.idx}`)}
                // bg='#3b3b3b' 
                rounded='lg' 
                p={3} 
                // _hover={{bg: '#525252'}} transition='ease-in-out .2s'
                >
                    <SimpleGrid spacing='.4rem' columns={{base: 1, sm: 2}}>
                        <Stack 
                        spacing='.4rem'
                        fontSize='smaller' >
                            <Text className='shadowtext'>{e.start} – {e.end}</Text>
                            <Text>Grade: {e.gpa}</Text>
                        </Stack>
                        <Stack>
                            <Flex flexDir='column'>
                                <Flex gap='.4rem'>
                                    <a id='hyperlink' href={e.link} target='_blank'>
                                        <Text fontSize={{base: 'sm', sm: 'md'}}>{e.major}</Text>
                                    </a>
                                    <Stack justify='center'>
                                        {React.createElement(iconMap[e.ic])}
                                    </Stack>
                                </Flex>
                                <Text fontSize='smaller'>{e.school}</Text>
                            </Flex>
                            <Text fontSize='smaller' className='shadowtext'>{e.loc}</Text>                            
                        </Stack>
                    </SimpleGrid>
                </List>
            ))}
        </Stack>
    </Stack>
  )
}
