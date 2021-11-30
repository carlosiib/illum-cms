import { Box, Text } from '@chakra-ui/react'

export default function FAQCard({ title, contentFaq, questionHandler, currentQuestion, idx }) {

  return (
    <div >
      <Box
        lineHeight="6"
        fontWeight="700"
        fontSize={'1.2rem'}
        letterSpacing={'1px'}
        color={currentQuestion === idx && 'var(--primary-color)'}
        cursor='pointer'
        onClick={() => questionHandler(idx)}
      >
        <Text>{title}</Text>
      </Box>

      {
        currentQuestion === idx &&
        (<Box
          mt={4}
          ml={4}
          letterSpacing={'1px'}
          fontSize={'1rem'}>
          <div dangerouslySetInnerHTML={{ __html: contentFaq.html }}></div>
        </Box>)
      }
    </div >
  )
}
