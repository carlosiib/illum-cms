import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heading, Box, Text } from '@chakra-ui/layout'

export default function FreeTrial({
  freeTrialTitle,
  freeTrialSubtitle,
  freeTrialHrefLabel,
  freeTrialHrefLink }) {

  return (
    <Box maxW="7xl" mx="auto" py={12} className="free-trial-container" textAlign={'center'}>
      <Heading as="h4" mb={6}>{freeTrialTitle}</Heading>
      <Text mb={8}>{freeTrialSubtitle}</Text>
      <Link href={freeTrialHrefLink}>
        <motion.a
          href={freeTrialHrefLink}
          target="_blank"
          rel="noreferrer"
          className="anchor-link"
          whileHover={{
            scale: 1.04,
            transition: {
              type: "spring",
              stiffness: 1000,
            }
          }}>
          {freeTrialHrefLabel}
        </motion.a>
      </Link>
    </Box>
  )
}


