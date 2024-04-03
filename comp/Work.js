import React from 'react';
import { Box, Stack, Text, Image, Wrap, Flex, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Work({ i }) {

  if (!i) {
    return <p>Work item not found</p>;
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

      <Stack 
      spacing='2rem'
      px={{base: '1rem', sm: '5rem'}} 
      py={{base: '1.5rem', sm: '2rem'}}>
        <Stack spacing='.8rem'>
          <Text fontSize={{base: 'sm', md: 'xl'}}>About</Text>
          <Text maxW={{base:'100%', sm:'70%'}} textAlign='justify' className='shadowtext'>{i.about}</Text>
        </Stack>

        <Wrap overflowX='scroll'>
          <Flex width={{base:'100%', md:'50%'}} gap='.5rem'>
              {i.ss.map((pic, idx) => (
                  <Image 
                      key={idx}
                      rounded='lg'
                      src={pic}
                  />
              ))}
          </Flex>
        </Wrap>

        <SimpleGrid spacingY='2rem' columns={{base: 1, sm: 2}}>
          <Stack spacing='1rem'>
            <Box>
              <Text>Role</Text>
              <Text className='shadowtext'>{i.role}</Text>
            </Box>

            <Box>
              <Text>Date</Text>
              <Text className='shadowtext'>{i.start} – {i.end}</Text>
            </Box>

            <Box>
              <Text>Team</Text>
              {i.members.map((team, idx) => (
                <Text key={idx} className='shadowtext'>{team}</Text>
              ))}
            </Box>

            <Box>
              <Text>Overview</Text>
              {i.overview.map((ovr, idx) => (
                <Text key={idx} className='shadowtext'>{ovr}</Text>
              ))}
            </Box>

            {i.link && (
              <Box>
                <Text>Publication Link</Text>
                <a href={i.link} target='_blank'>
                    <Text className='shadowtext' id='hyperlink' fontSize={{base: 'sm', sm: 'md'}}>{i.title}</Text>
                </a>
              </Box>
            )}
          </Stack>

          <Stack spacing='1rem'>
            <Box>
              <Text>Challenges</Text>
              <Text textAlign='justify' className='shadowtext'>{i.clg}</Text>
            </Box>

            <Box>
              <Text>Stack</Text>
              <SimpleGrid columns='3' w={{base:'100%', md:'60%'}}>
                {i.stack.map((stk, idx) => (
                <Text key={idx} className='shadowtext'>{stk}</Text>
                ))}          
              </SimpleGrid>
            </Box>

          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
