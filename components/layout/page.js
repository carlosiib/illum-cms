import { Box, Container, Heading } from '@chakra-ui/react'

import { getSiteLayout, Iubenda } from '@/layout'
import Hero from '@/components/hero'
import * as Marketing from '@/marketing'
import Navigation from '@/components/navigation'
import SEO from '@/components/seo'

export default function PageLayout({ children, page }) {
  //console.log("internal page", page)

  const pageNewsletter = page?.marketing?.find(
    (block) => block.__typename === 'Newsletter'
  )

  return (
    <>
      {page?.seo && <SEO {...page.seo} />}

      {page?.hero ? (
        <>
          <Hero {...page.hero} navigation={page.navigation} page={page} />
        </>
      ) : (
        <>
          <Navigation {...page?.navigation} />
          <Box mx="auto" pt={24} px={[4, 6, null, 8]} >
            <Box
              display={[null, 'flex']}
              flexDir={[null, 'column']}
              alignItems={[null, 'center']}
              textAlign={[null, 'center']}
            >
              <Heading
                as="h1"
                fontSize="5xl"
                lineHeight="none"
                fontWeight="extrabold"
              >
                {page?.title}
              </Heading>
              {page?.subtitle && (
                <Container
                  mt={5}
                  p={0}
                  centerContent
                  lineHeight="tall"
                  fontSize="xl"
                >
                  <div dangerouslySetInnerHTML={{ __html: page.subtitle.markdown }}></div>
                </Container>
              )}
              <Iubenda />
            </Box>
          </Box>
        </>
      )}

      {page?.pageContent && (
        <Box py={12}>
          <Box
            maxW="7xl"
            mx="auto"
            padding={'0 1rem'}
            lineHeight="tall"
            fontSize={{ sm: '1rem', md: '1.1rem', lg: '1.2rem' }}>
            <div dangerouslySetInnerHTML={{ __html: page.pageContent.html }}></div>
          </Box>
        </Box>
      )}

      <div>
        {children}
        {pageNewsletter && <Marketing.NewsletterSignup {...pageNewsletter} />}
      </div>
    </>
  )
}

export const getLayout = (page) => {
  return getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)
}
