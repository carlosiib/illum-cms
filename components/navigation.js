import { useRef, useState, useEffect } from 'react'
import {
  Box,
  Flex,
  VisuallyHidden,
  Grid,
  Button,
  Text,
  Link as ChakraLink,
  Stack
} from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Transition } from 'react-transition-group'

import { MenuIcon, XIcon } from '@/icons'

const defaultStyle = {
  transition: `all 150ms cubic-bezier(0.4, 0, 1, 1)`
}

const transitionStyles = {
  entering: { transform: 'scale(0.95)', opacity: 0, visibility: 'hidden' },
  entered: { transform: 'scale(1)', opacity: 1, visibility: 'visible' },
  exiting: { transform: 'scale(1)', opacity: 1, visibility: 'visible' },
  exited: { transform: 'scale(0.95)', opacity: 0, visibility: 'hidden' }
}

export default function Navigation({ pages, buttons }) {
  const container = useRef(null)
  const router = useRouter()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container?.current?.contains(event.target)) {
        if (!mobileNavOpen) return

        setMobileNavOpen(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return () => window.removeEventListener('click', handleOutsideClick)
  }, [mobileNavOpen, container])

  useEffect(() => {
    const handleEscape = (event) => {
      if (!mobileNavOpen) return

      if (event.key === 'Escape') {
        setMobileNavOpen(false)
      }
    }

    document.addEventListener('keyup', handleEscape)

    return () => document.removeEventListener('keyup', handleEscape)
  }, [mobileNavOpen])

  useEffect(() => {
    const handleRouteChange = () => setMobileNavOpen(false)

    router.events.on('routeChangeStart', handleRouteChange)

    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [router.events])


  function handleFeatureScroll(e) {
    e.preventDefault()
    const featuresEl = document.getElementById("illumidesk-features")
    let offset = 50;
    if (!featuresEl) return

    window.scrollTo({
      behavior: "smooth",
      top:
        featuresEl.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top - offset
    });
  }

  //Excluded Links
  const filterNavLinks = pages.filter(p =>
    p.navigationLabel !== "Cookie" &&
    p.navigationLabel !== "Docs" &&
    p.navigationLabel !== "Privacy" &&
    p.navigationLabel !== "Terms" &&
    p.navigationLabel !== "Security" &&
    p.navigationLabel !== "Community")

  // Mobile Navbar
  return (
    <Box ref={container} pos="relative">
      <Transition in={mobileNavOpen} timeout={150}>
        {(state) => (
          <Box
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            m={2}
            border="1px solid rgba(0, 0, 0, 0.05)"
            pos="absolute"
            top="0"
            right="0"
            left="0"
            zIndex="docked"
            transition="all 150ms cubic-bezier(0.4, 0, 0.2, 1)"
            transformOrigin="top right"
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <Box pt={5} pb={6} px={5}>
              <Flex alignItems="center" justifyContent="space-between">
                <div>
                  <Link href="/">
                    <a>
                      <VisuallyHidden>Illumidesk</VisuallyHidden>
                      <img
                        src="/logos/primary.svg"
                        alt="Illumidesk LLC"
                        width="140"
                        height="40"
                        loading="lazy"
                      />
                    </a>
                  </Link>
                </div>
                <Box mr={-2}>
                  <Button
                    type="button"
                    bg="white"
                    borderRadius="md"
                    p={2}
                    display="inline-flex"
                    color="gray.400"
                    _hover={{
                      color: 'gray.500',
                      bg: 'gray.100'
                    }}
                    onClick={() => setMobileNavOpen(false)}
                  >
                    <VisuallyHidden>Close menu</VisuallyHidden>
                    <Box as={XIcon} w={6} h={6} aria-hidden="true" />
                  </Button>
                </Box>
              </Flex>
              <Box mt={6}>
                {pages && pages.length && (
                  <Grid as="nav" gridRowGap={8}>

                    <Link href="/" passHref>
                      <ChakraLink
                        pl={3}
                        _focus={{ boxShadow: 'unset', textDecor: 'none', }}
                        onClick={handleFeatureScroll}
                      >
                        Features
                      </ChakraLink>
                    </Link>

                    {filterNavLinks.map((page) => {
                      const isActive = router.asPath.startsWith(`/${page.slug}`)

                      return (
                        <Link key={page.id} href={`/${page.slug}`} passHref>
                          <ChakraLink
                            m={-3}
                            p={3}
                            display="flex"
                            alignItems="center"
                            borderRadius="md"
                            color={isActive ? 'var(--primary-color)' : 'var(--black-color)'}
                            _focus={{ boxShadow: 'unset' }}
                          >
                            <Text
                              as="span"
                              ml={3}
                              fontSize="md"
                              fontWeight="medium"
                            >
                              {page.navigationLabel ||
                                page.slug.charAt(0).toUpperCase() +
                                page.slug.slice(1)}
                            </Text>
                          </ChakraLink>
                        </Link>
                      )
                    })}
                  </Grid>
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Transition>

      {/* DESKTOP NAVBAR */}
      <Box maxW="7xl" mx="auto" px={[4, 6]}>
        <Stack
          display="flex"
          justifyContent={['space-between', null, 'flex-start']}
          alignItems="center"
          py={6}
          direction="row"
          spacing={{ md: 10 }}
        >
          <Flex w={{ lg: 0 }} flex={{ lg: '1 1 0' }}>
            <Link href="/">
              <a>
                <VisuallyHidden>Illumidesk LLC</VisuallyHidden>
                <img
                  src="/logos/primary.svg"
                  alt="Illumidesk LLC"
                  width="198"
                  height="80"
                />
              </a>
            </Link>
          </Flex>
          <Box mr={-2} my={-2} display={{ md: 'none' }}>
            <Button
              type="button"
              bg="white"
              borderRadius="md"
              p={2}
              display="inline-flex"
              color="gray.400"
              _hover={{
                color: 'gray.500',
                bg: 'gray.100'
              }}
              onClick={() => setMobileNavOpen(true)}
            >
              <VisuallyHidden>Open menu</VisuallyHidden>
              <Box as={MenuIcon} w={6} h={6} aria-hidden="true" />
            </Button>
          </Box>

          {pages && pages.length && (
            <Stack
              as="nav"
              display={['none', null, 'flex']}
              direction="row"
              spacing={10}
              paddingTop={8}
            >
              <Link href="/" passHref>
                <ChakraLink
                  fontSize="1rem"
                  fontWeight="700"
                  letterSpacing="1.1px"
                  _hover={{
                    textDecor: 'none',
                    color: "var(--primary-color)"
                  }}
                  _focus={{ boxShadow: 'unset' }}
                  onClick={handleFeatureScroll}
                >
                  Features
                </ChakraLink>
              </Link>

              {filterNavLinks.map((page) => {
                const isActive = router.asPath.startsWith(`/${page.slug}`)

                return (
                  <Link key={page.id} href={`/${page.slug}`} passHref>
                    <ChakraLink
                      fontSize="1rem"
                      fontWeight="700"
                      letterSpacing="1.1px"
                      color={isActive ? 'var(--primary-color)' : 'var(--black-color)'}
                      _hover={{
                        textDecor: 'none',
                        color: "var(--primary-color)"
                      }}
                      _focus={{ boxShadow: 'unset' }}
                    >
                      {page.navigationLabel ||
                        page.slug.charAt(0).toUpperCase() + page.slug.slice(1)}
                    </ChakraLink>
                  </Link>
                )
              })}
            </Stack>
          )}

          {buttons && buttons.length && (
            <Stack
              display={['none', null, 'flex']}
              direction="row"
              spacing={10}
              paddingTop={8}
              fontSize="1rem"
              fontWeight="700"
              letterSpacing="1.1px"
            >
              {buttons.map((button) => {
                return (
                  <Link key={button.id} href={`${button.href}`} passHref>
                    <motion.a
                      className="anchor-link"
                      whileHover={{
                        scale: 1.04,
                        transition: {
                          type: "spring",
                          stiffness: 1000,
                        }
                      }}>
                      {button.label}
                    </motion.a>
                  </Link>
                )
              })}
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  )
}
