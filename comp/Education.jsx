import React from 'react';
import { Box, Stack, Text, Image, Wrap, Flex, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Education({ i }) {
  if (!i) {
    return <p>Education not found</p>;
  }
  const router = useRouter()

  return (
    <Box>
        <Box id='navbar'>
            <Text 
            ml={{base: '1rem', sm:'5rem'}}
            w='fit-content'
            id='clickable'
            _hover={{ml: '2.5rem'}}
            transition='ease-in-out .2s'
            onClick={() => router.push('/')} 
            fontSize={{base: 'lg', md: '3xl'}}
            >&lt; {i.title}</Text>
        </Box>

        
    </Box>
  );
}
