import React from 'react'
import data from '.././data/contacts.json'
import { Stack, Flex, List, SimpleGrid, Text, Box } from '@chakra-ui/react'


export default function ProjectDetails() {
  return (
    <Stack spacing='1.2rem' id='bout' p={{base: '1rem', sm: '5rem'}}>
        <Text fontSize={{base: 'sm', sm: '2xl'}}>KESAN</Text>
        <Text>About</Text>
        <Text>some text</Text>
        <Text>some imgs</Text>

        <SimpleGrid columns={{base: 1, sm: 2}}>
          <Stack>
            <Box>
              <Text>role</Text>
              <Text>roles..</Text>
            </Box>
            <Box>
              <Text>date</Text>
              <Text>dates..</Text>
            </Box>
            <Box>
              <Text>team</Text>
              <Text>members..</Text>
            </Box>
            <Box>
              <Text>overview</Text>
              <Text>ovr..</Text>
            </Box>
            <Box>
              <Text>publication link</Text>
              <Text>link..</Text>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Text>Challenges</Text>
              <Text>challgs</Text>
            </Box>
            <Box>
              <Text>Stack</Text>
              <Text>stacks...</Text>
            </Box>
          </Stack>
        </SimpleGrid>
    </Stack>
  )
}
