import { useEffect } from "react"
import { Box, Heading, Flex } from "@chakra-ui/layout"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

export default function HowDoesItWork({ title, mainImage, howDoesItWorkContents }) {

  // Intersection observer Hook for animations
  const { ref: refContainer, inView: inViewContainer } = useInView()
  const { ref: refImg, inView: inViewImg } = useInView()
  const imageAnimation = useAnimation()

  const MotionBox = motion(Box)

  useEffect(() => {
    console.log("inview SKEW CONTAINER")

    //x: (options.step * 1) % 2 == 0 ? "100%" : "0%",

    imageAnimation.start({
      x: "55%",
      opacity: 1,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
        type: "spring",
        bounceDamping: .25
      }
    })

  }, [inViewContainer])


  if (!howDoesItWorkContents) return null


  return (
    <Box maxW="7xl" mx="auto" py={12} className="hdw-container">
      <Heading as="h5" mb={14} textAlign={'center'}>{title}</Heading>

      <Box className="hdw-content">
        <MotionBox animate={imageAnimation} position={'sticky'} top={'25%'} zIndex={'10'}>
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
        </MotionBox>

        <Box ref={refContainer}>
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


