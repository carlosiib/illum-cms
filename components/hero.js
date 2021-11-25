import { Box, Heading, Stack, Center, Grid } from '@chakra-ui/react'
import Button from '@/components/button'
import Navigation from '@/components/navigation'
import useMobile from 'hooks/useMediaQuery'

export default function Hero({ buttons, image, navigation, page }) {
  const isMobile = useMobile("(max-width: 769px)")

  return (
    <Box >
      <Navigation {...navigation} />
      <Box as="main" className="hero-container b-3" maxW="7xl" mx="auto" mt={6} padding={'0 1rem'}>
        <Center>
          <Box px={[6, 12]} pr={{ xl: 16 }}>
            <Heading
              as="h1"
              fontSize={['4xl', '5xl', '6xl', '5xl', '6xl']}
              letterSpacing="tight"
              lineHeight="1"
              fontWeight="extrabold"
            >
              {page.title}
            </Heading>
            {page.subtitle && (
              <Box
                className="prose"
                mt={[3, null, 5]}
                w="full"
                maxW={['md', null, '3xl']}
                mx="auto"
              >
                <Heading as="h2" dangerouslySetInnerHTML={{ __html: page.subtitle.markdown }}></Heading>
              </Box>
            )}
            {buttons && (
              <Stack
                mt={10}
                direction={['column', 'row']}
                display={{ sm: 'flex' }}
                justifyContent={{ sm: 'center', lg: 'flex-start' }}
                spacing={[3, 0]}
              >
                {buttons.map((button) => (
                  <Box
                    key={button.id}
                    sx={{
                      ':nth-of-type(even)': {
                        mx: [0, 3]
                      }
                    }}
                  >
                    <Button {...button} />
                  </Box>
                ))}
              </Stack>
            )}
          </Box>
        </Center>
        <Grid w={'100%'} placeItems={'center'}>
          <Box>
            <img
              src={image.url}
              alt="Start learning with Illumidesk"
              width={isMobile ? "200" : "540"}
              height={isMobile ? "200" : "520"}
            />
          </Box>
        </Grid>
      </Box>
    </Box >
  )
}
