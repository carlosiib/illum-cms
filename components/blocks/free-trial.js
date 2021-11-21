import Link from 'next/link'
import { Heading, Box } from '@chakra-ui/layout'

export default function FreeTrial({
  freeTrialTitle,
  freeTrialSubtitle,
  freeTrialHrefLabel,
  freeTrialHrefLink }) {

  // Rename prop otherwise duplicated prop name error -> CMS schema names  

  return (
    <Box maxW="7xl" mx="auto" py={12} className="free-trial-container">
      <Heading as="h4" mb={6}>{freeTrialTitle}</Heading>
      <p>{freeTrialSubtitle}</p>
      <Link href={freeTrialHrefLink}>
        <a target="_blank" rel="noreferrer" className="anchor-link" >{freeTrialHrefLabel}</a>
      </Link>
    </Box>
  )
}


