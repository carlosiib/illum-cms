import {
  VisuallyHidden,
  Link as ChakraLink,
  Text,
  Stack,
  Box,
  Flex
} from '@chakra-ui/react'
import Link from 'next/link'

import { GithubIcon, SlackIcon, TwitterIcon } from '@/icons'

function GridColumnHeading({ children }) {
  return (
    <Text
      fontSize="1.4rem"
      fontWeight="700"
      letterSpacing="1.2px"
      textTransform="uppercase"
      color="var(--white-color)"
    >
      {children}
    </Text>
  )
}

function GridColumn({ links, title }) {
  return (
    <Box className="footer-grid-col">
      <GridColumnHeading>{title}</GridColumnHeading>
      <Stack as="ul" mt={2} spacing={3}>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={`/${link.slug}`} passHref>
              <ChakraLink
                color="var(--white-color)"
              >
                {link.navigationLabel ||
                  link.slug.charAt(0).toUpperCase() + link.slug.slice(1)}
              </ChakraLink>
            </Link>
          </li>
        ))}
      </Stack>
    </Box>
  )
}

function SocialMediaLink({ href, title, icon }) {
  return (
    <ChakraLink
      href={href}
      isExternal
      color="var(--white-color)"
      mr={6}
      mb={8}
      aria-label={title}
    >
      <VisuallyHidden>{title}</VisuallyHidden>
      <Box as={icon} w={6} h={6} />
    </ChakraLink>
  )
}

export default function Footer({ resourcesLinks, legalLinks }) {
  return (
    <Box as="footer" aria-labelledby="footerHeading" backgroundColor="var(--secondary-color)">
      <VisuallyHidden id="footerHeading">
        Footer
      </VisuallyHidden>

      <Box maxW="7xl" mx="auto" py={{ base: 12, lg: 16 }} px={[4, 6, null, 8]}>
        <Flex justifyContent={'space-between'}>
          <Box>
            <Box mb={12}>
              <Link href="/">
                <a>
                  <VisuallyHidden>Illumidesk</VisuallyHidden>
                  <img
                    src="/logos/secondary.svg"
                    alt="Illumidesk LLC"
                    width="160"
                    height="40"
                    loading="lazy"
                  />
                </a>
              </Link>
            </Box>
            <Flex>
              <SocialMediaLink
                title="Slack"
                icon={SlackIcon}
                href="https://illumidesk-community.slack.com/"
              />
              <SocialMediaLink
                title="GitHub"
                icon={GithubIcon}
                href="https://github.com/illumidesk"
              />
              <SocialMediaLink
                title="Twitter"
                icon={TwitterIcon}
                href="https://twitter.com/"
              />
            </Flex>

            <Text
              mt={[8, null, 0]}
              fontSize="1.2rem"
              color={'var(--white-color)'}
              fontWeight={'700'}
              letterSpacing={'1.3px'}
              order={{ md: 1 }}
            >
              &copy; Illumidesk LLC
            </Text>
          </Box>

          <Flex>
            <GridColumn
              links={resourcesLinks.length && resourcesLinks}
              title="RESOURCES"
            />
            <GridColumn
              links={legalLinks.length && legalLinks}
              title="LEGAL"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
