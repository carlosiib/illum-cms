import Link from 'next/link'
import { Heading, Box } from '@chakra-ui/layout'

export default function FreeTrial({
  title: FTTitle,
  subTitle: FTSubtitle,
  hrefLabel: FTLabel,
  hrefLink: FTLink }) {

  // Rename prop otherwise duplicated prop name error -> CMS schema names  

  return (
    <Box as="section" maxW="7xl" mx="auto" className="b-2" my={12} className="free-trial-container">
      <Heading as="h4" mb={6}>{FTTitle}</Heading>
      <p>{FTSubtitle}</p>
      <Link href={FTLink}>
        <a target="_blank" rel="noreferrer" className="anchor-link" >{FTLabel}</a>
      </Link>
    </Box>
  )
}


