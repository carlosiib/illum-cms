import Link from 'next/link'
import { Heading, Box, Center } from '@chakra-ui/layout'

export default function FreeTrial({ title, subTitle, hrefLabel, hrefLink }) {
  return (
    <Box as="section" maxW="7xl" mx="auto" className="b-2" my={12} className="free-trial-container">
      <Heading as="h4" mb={6}>{title}</Heading>
      <p mb={6}>{subTitle}</p>
      <Link href={hrefLink}>
        <a target="_blank" rel="noreferrer" className="anchor-link" >{hrefLabel}</a>
      </Link>
    </Box>
  )
}


