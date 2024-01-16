import React from 'react'
import data from '../data/projects.json'
import { Stack, Flex, List, SimpleGrid, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function Projects() {
  return (
    <Stack spacing='1.2rem' id='bout'>
        <Text>Projects</Text>
        {data.prj.map((e, i) => (
            <List key={i}>
                <SimpleGrid columns={2}>
                    <Text fontSize='smaller' className='shadowtext'>{e.date}</Text>
                    <Stack>
                        <Flex flexDir='column'>
                            <Flex gap='.4rem'>
                                <a id='hyperlink' href={e.link} target='_blank'>
                                    <Text fontSize='md'>{e.title}</Text>
                                </a>
                                {e.link && (
                                    <Stack justify='center'>
                                        {React.createElement(iconMap[e.ic])}
                                    </Stack>
                                )}
                            </Flex>
                        </Flex>

                        {e.desc.map(e => (
                            <Text fontSize='xs' className='shadowtext'>{e}</Text>
                        ))}
                    </Stack>
                </SimpleGrid>
            </List>
        ))}
    </Stack>
  )
}
