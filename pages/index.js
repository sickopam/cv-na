import { Stack } from '@chakra-ui/react'
import Header from '@/sec/Header'
import About from '@/sec/About'
import Projects from '@/sec/Projects'

export default function Home() {
  return (
    <Stack gap='5rem' p={{base: '1rem', sm: '5rem'}}>
      <Header/>
      <About/>
      <Projects/>
    </Stack>
  )
}
