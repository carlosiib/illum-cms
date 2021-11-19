import { Flex, Box } from '@chakra-ui/react'
import { CheckIcon } from '@/icons'

export default function FeatureCheck({ title, contentFeature }) {
  //console.log(contentFeature)
  return (
    <Flex>
      <Box
        as={CheckIcon}
        flexShrink="0"
        w={6}
        h={6}
        color="green.500"
        aria-hidden="true"
      />
      <Box ml={3}>
        <Box
          as="dt"
          fontSize="lg"
          lineHeight="6"
          fontWeight="medium"
          color="gray.900"
        >
          {title}
        </Box>
        <Box as="dd" mt={2} className="prose">
          <div dangerouslySetInnerHTML={{ __html: contentFeature.html }}></div>
        </Box>
      </Box>
    </Flex>
  )
}
