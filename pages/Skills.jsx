import React from 'react'
import { Box, Stack, Text, Flex, Wrap, Tooltip } from '@chakra-ui/react'
import data from '.././data/tools.json'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins({subsets: ["latin"], weight: "300"})

export default function Skills() {

    return (
        <Stack id='bout'>
            <Text>Tools</Text>
            <Box rounded='lg' p={2} bg='#3b3b3b'>
                <Wrap overflowX='scroll'>
                    <Flex width='55%' gap={3}>
                        {data.tools.map((e, idx) => (
                            <Link key={idx} href={e.link} target='_blank'>
                                <Tooltip 
                                className={poppins.className} 
                                label={e.label} 
                                bg='#6f6f6f' color='#f5f5f5'>
                                    <Box id='icon' rounded='md'>
                                        <i  className={e.tool}/>
                                    </Box>
                                </Tooltip>
                            </Link>
                        ))}
                    </Flex>
                </Wrap>
            </Box>

        </Stack>
  )
}
