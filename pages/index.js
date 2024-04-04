import { Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '@/pages/Header'
import Skills from './Skills'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Edu from '@/pages/Edu'
import Contact from '@/pages/Contact'
import Experience from '@/pages/Experience'

export default function Home() {
  return (
    <Stack gap='5rem' p={{base: '1rem', sm: '5rem'}}>
      <Head>
        <title>Naufal Abiyyu</title>
        <link rel="icon" href="/logo.png" imageSizes='100%' />
      </Head>
      <Header/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Edu/>
      <Contact/>
    </Stack>
  )
}
