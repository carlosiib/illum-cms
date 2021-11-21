import { Box, Heading, Flex } from "@chakra-ui/layout"

export default function HowDoesItWork({ title, mainImage, howDoesItWorkContents }) {


  if (!howDoesItWorkContents) return null


  return (
    <Box maxW="7xl" mx="auto" py={12} className="hdw-container">
      <Heading as="h5" mb={14} textAlign={'center'}>{title}</Heading>
      <Box className="hdw-content">
        <Box position={'sticky'} top={'25%'} zIndex={'10'}>
          <img
            src={mainImage.url}
            loading="lazy"
            alt="Illumidesk task dashboard"
            width="540"
            height="429" />
          <img
            src={howDoesItWorkContents[0].secondaryImage.url}
            loading="lazy"
            alt="Grader console dashboard"
            className="secondary-img"
          />
        </Box>

        <Box>
          {
            howDoesItWorkContents &&
            howDoesItWorkContents.map((content, idx) =>
            (
              <div key={content.title}>
                {
                  idx === 0 ?
                    (
                      <Box color={'red'} className="first-content hwd-description">
                        <Heading as="h6">{content.title}</Heading>
                        <p>{content.subtitle}</p>
                      </Box>
                    ) :
                    idx % 2 !== 0 ?
                      (
                        <Box className="left-description hwd-description">
                          <Heading color={'orange'} as="h6">{content.title}</Heading>
                          <p>{content.subtitle}</p>
                        </Box>
                      ) :
                      (
                        <Flex justifyContent={'flex-end'}>
                          <Box className="right-description hwd-description">
                            <Heading color={'yellow'} as="h6">{content.title}</Heading>
                            <p>{content.subtitle}</p>
                          </Box>
                        </Flex >

                      )
                }

              </div>
            ))
          }
        </Box>
      </Box>

    </Box>
  )
}


