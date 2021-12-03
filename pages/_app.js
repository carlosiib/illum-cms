import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import { Drift, SiteLayout } from '@/layout'

import Head from 'next/head'
import { defaultSEO } from '../next-seo.config'
import { theme } from '../styles/theme'
import '../styles/css/global.css'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>
      <DefaultSeo {...defaultSEO} />
      {getLayout(<Component {...pageProps} />)}
      <Drift />
    </ChakraProvider>
  )
}
