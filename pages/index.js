import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '@/sec/Header'
import About from '@/sec/About'
import Projects from '@/sec/Projects'
import Edu from '@/sec/Edu'
import Contact from '@/sec/Contact'

export default function Home() {
  return (
    <Stack gap='5rem' p={{base: '1rem', sm: '5rem'}}>
      <Head>
        <title>Naufal Abiyyu</title>
        <link rel="icon" href="/logo.png" imageSizes='100%' />
      </Head>
      <Header/>
      <About/>
      <Projects/>
      <Edu/>
      <Contact/>
    </Stack>
  )
}
