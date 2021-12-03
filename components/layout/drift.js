
import { Box, Grid } from "@chakra-ui/react"

// FACADE IMPLEMENTATION: https://web.dev/third-party-facades/
export default function Drift() {
  return (
    <Box
      id="drift-widget"
      position="fixed"
      bottom={{ xsm: '11px', md: '11px', lg: '30px' }}
      right={{ xsm: '11px', md: '11px', lg: '30px' }}
      width={{ xsm: '50px', md: '50px', lg: '60px' }}
      height={{ xsm: '50px', md: '50px', lg: '60px' }}
      borderRadius={'var(--b-radius)'}
      backgroundColor={'#4f7d00'}
      cursor='pointer'
      zIndex='20'
      boxShadow={'0 0 8px 4px rgb(0 0 0 / 16%);'}
    >
      <Grid placeItems='center' h={'100%'}>
        <Box position='relative'>
          <Box w='26px' h='18px' backgroundColor={'var(--white-color)'} borderRadius={'6px'}></Box>
          <Box
            w='25px'
            h='18px'
            position='absolute'
            top='5px'
            borderTop=' 8px solid transparent'
            borderBottom=' 8px solid transparent'
            borderLeft='8px solid var(--white-color); '
          >
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}


