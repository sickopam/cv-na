import React from 'react'
import { Stack, SimpleGrid, Flex, List, Text } from '@chakra-ui/react'
import data from '.././data/edu.json'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function Edu() {
  return (
    <Stack spacing='3rem'>
        <Stack spacing='1.2rem' id='bout'>
            <Text fontSize={{base: 'sm', sm: 'md'}}>Education</Text>
            {data.edu.map((e, i) => (
                <List key={i}>
                    <SimpleGrid columns={{base: 1, sm: 2}}>
                        <Text fontSize='smaller' className='shadowtext'>{e.start} – {e.end}</Text>
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
                                <Text fontSize='smaller'>{e.school} – Grade: {e.gpa}</Text>
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
