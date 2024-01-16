import React from 'react'
import { Flex, Stack, Text, List, SimpleGrid } from '@chakra-ui/react'

import data from '../data/exp.json'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function About() {

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
                    <SimpleGrid columns={2}>
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
                                <Text fontSize='xs'>{e.comp}</Text>
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
