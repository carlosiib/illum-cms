import { Box, Container, Heading, Text } from '@chakra-ui/react'

import { getSiteLayout, Iubenda } from '@/layout'
import Hero from '@/components/hero'
import * as Marketing from '@/marketing'
import Navigation from '@/components/navigation'
import SEO from '@/components/seo'

export default function PageLayout({ children, page }) {
  console.log("internal page", page)

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
          <Box mx="auto" pt={24} px={[4, 6, null, 8]} className="b-2">
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
