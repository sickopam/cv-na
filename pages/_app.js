import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "",
      }
    })
  }
});


const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />    
      <ChakraProvider theme={theme}>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  )
}
