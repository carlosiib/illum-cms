import { Box, Heading, Stack, Center } from '@chakra-ui/react'

import Button from '@/components/button'
import Navigation from '@/components/navigation'

export default function Hero({ buttons, image, navigation, page }) {
  return (
    <Box >
      <Navigation {...navigation} />
      <Box as="main" className="b-2 hero-container" maxW="7xl" mx="auto" mt={4}>
        <Center>
          <Box px={[6, 12]} pr={{ xl: 16 }}>
            <Heading
              as="h1"
              fontSize={['4xl', '5xl', '6xl', '5xl', '6xl']}
              letterSpacing="tight"
              lineHeight="1"
              fontWeight="extrabold"
              color="gray.900"
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
        <img
          src={image.url}
          alt={image.title}
          title={image.title}
          layout="fill"
          loading="lazy"
        />
      </Box>
    </Box >
  )
}
