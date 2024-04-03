import React from 'react'
import data from '.././data/contacts.json'
import { Stack, Flex, List, SimpleGrid, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from "@chakra-ui/icons";

const iconMap = {
  "ExternalLinkIcon": ExternalLinkIcon,
};

export default function Contact() {
  return (
    <Stack spacing='1.2rem' id='bout'>
        <Text fontSize={{base: 'sm', sm: 'md'}}>Contacts</Text>
        {data.contact.map((e, i) => (
            <List key={i}>
                <SimpleGrid columns={{base: 1, sm: 2}}>
                    <Text fontSize='sm' className='shadowtext'>{e.platform}</Text>
                    <Stack>
                        <Flex flexDir='column'>
                            <Flex gap='.4rem'>
                                <a id={e.id} href={e.link} target='_blank'>
                                    <Text fontSize='sm'>{e.name}</Text>
                                </a>
                                {e.link && (
                                    <Stack justify='center'>
                                        {React.createElement(iconMap[e.ic])}
                                    </Stack>
                                )}
                            </Flex>
                        </Flex>
                    </Stack>
                </SimpleGrid>
            </List>
        ))}
    </Stack>
  )
}
