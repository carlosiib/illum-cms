import React, { useState } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'

import * as Columns from '@/columns'

export default function Grid({
  children,
  columnComponent,
  columns,
  gridSubtitle,
  gridTag,
  gridTitle,
  layout = 'STACKED',
  width = 1
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  if (!columns || !columns.length) return null

  const stackLayout = layout === 'STACK'
  const splitLayout = layout === 'SPLIT'
  //show your best features
  // frequently ask questions

  function clickHandler(id) {
    setCurrentQuestion(id)
  }

  return (
    <Box overflow="hidden" >
      <Box pos="relative" maxW="7xl" mx="auto" py={12} px={[4, 6, null, 8]}>
        <Box
          position="relative"
          display={{ lg: splitLayout && 'grid' }}
          gridColumnGap={{ lg: splitLayout && 8 }}
          gridTemplateColumns={{ lg: splitLayout && 'repeat(3, 1fr)' }}
        >
          <Box
            textAlign={{ lg: stackLayout && 'center' }}
            gridColumn={{ lg: splitLayout && 'span 1 / span 1' }}
          >
            <Text
              mt={2}
              mb={6}
              as="h4"
              fontSize={{ xsm: '1.6rem', md: '2.4rem', lg: '2.8rem' }}
              fontWeight="900"
            >
              {gridTitle}
            </Text>

            {gridSubtitle && (
              <Box
                mt={4}
                mx={{ lg: 'auto' }}
                fontSize={{ xsm: '1.2rem' }}
              >
                <div dangerouslySetInnerHTML={{ __html: gridSubtitle.markdown }}></div>
              </Box>
            )}
          </Box>
          <Stack
            as={gridTag || 'dl'}
            mt={{ base: 10, lg: splitLayout && 0 }}
            spacing={[10, 6]}
            display={{ sm: 'grid' }}
            gridColumnGap={{ sm: 8 }}
            gridRowGap={{ sm: 4 }}
            gridColumn={{ lg: 'span 2 / span 2' }}
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              lg: `repeat(${width}, 1fr)`
            }}
          >
            {children
              ? children()
              : columnComponent === 'FAQCard' && columns.map((column, idx) => {
                const Component =
                  Columns[columnComponent] || Columns[column.__typename]

                if (!Component) return null

                return (
                  <Component
                    key={column.id}
                    idx={idx}
                    questionHandler={(id) => clickHandler(id)}
                    currentQuestion={currentQuestion}
                    {...column} />)
              })}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
