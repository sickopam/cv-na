import React from 'react'
import { Box, List, Stack, Text, Flex, Wrap } from '@chakra-ui/react'
import data from '.././data/tools.json'

export default function Skills() {

    
    return (
        <Stack id='bout'>
            <Text>Tools</Text>
            <Box rounded='lg' p={2} bg='#3b3b3b'>
                <Wrap overflowX='scroll'>
                    <Flex width='55%' gap={3}>
                        {data.tools.map((e, idx) => (
                            <Box id='icon' rounded='md'>
                                <i key={idx} className={e.tool}/>
                            </Box>
                        ))}
                    </Flex>
                </Wrap>
            </Box>

        </Stack>
  )
}
