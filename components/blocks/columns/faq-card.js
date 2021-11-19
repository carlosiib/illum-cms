import { Box } from '@chakra-ui/react'

export default function FAQCard({ title, contentFaq }) {
  return (
    <div>
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
        <div dangerouslySetInnerHTML={{ __html: contentFaq.html }}></div>
      </Box>
    </div>
  )
}
