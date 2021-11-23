import { useState, useEffect } from "react"
import { Box, Heading, Flex, Text } from "@chakra-ui/layout"
import { useMediaQuery } from "@chakra-ui/react"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

export default function HowDoesItWork({ title, mainImage, howDoesItWorkContents }) {

  const [isMobile] = useMediaQuery("(max-width: 769px)")

  const config = {
    change: false,
    step: {}
  }

  const [animateStep, setAnimateStep] = useState(config)
  const imageAnimation = useAnimation()


  useEffect(() => {
    const { change, step } = animateStep

    if (change) {
      imageAnimation.start({
        x: (step * 1) % 2 == 0 ? "100%" : "0%",
        opacity: 1,
        transition: {
          ease: [0.17, 0.67, 0.83, 0.67],
          type: "spring",
          bounceDamping: .25
        }
      })

      const changedPathImg = document.querySelector(".secondary-img")
      if (step == "1") {
        changedPathImg.src = `${howDoesItWorkContents[0].secondaryImage.url}`
      }
      if (step == "2") {
        changedPathImg.src = `${howDoesItWorkContents[1].secondaryImage.url}`
      }
      if (step == "3") {
        changedPathImg.src = `${howDoesItWorkContents[2].secondaryImage.url}`
      }
      if (step == "4") {
        changedPathImg.src = `${howDoesItWorkContents[3].secondaryImage.url}`
      }
    }


  }, [animateStep, imageAnimation])


  function handleAnimation(step) {
    setAnimateStep({ change: true, step })
  }


  if (!howDoesItWorkContents) return null

  return (
    <Box maxW="7xl" mx="auto" py={12} className="hdw-container">
      <Heading as="h5" mb={'4.2rem'} textAlign={'center'} fontSize={'6xl'}>{title}</Heading>
      {isMobile ?
        (
          <Box>
            <MobileSkew content={howDoesItWorkContents} />
          </Box>
        )
        :
        (
          <Box className="hdw-content">
            <motion.div animate={imageAnimation} className="skew-container">
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
            </motion.div>

            {
              howDoesItWorkContents &&
              (
                <Box>
                  <SkewContent
                    step={"1"}
                    content={howDoesItWorkContents[0]}
                    downAnimation={(direction) => handleAnimation(direction)}
                  />
                  <SkewContent
                    step={"2"}
                    content={howDoesItWorkContents[1]}
                    downAnimation={(direction) => handleAnimation(direction)}
                  />
                  <SkewContent
                    step={"3"}
                    content={howDoesItWorkContents[2]}
                    downAnimation={(direction) => handleAnimation(direction)}
                  />
                  <SkewContent
                    step={"4"}
                    content={howDoesItWorkContents[3]}
                    downAnimation={(direction) => handleAnimation(direction)}
                  />
                </Box>
              )
            }
          </Box>
        )
      }

    </Box>
  )
}

function MobileSkew({ content }) {
  return (
    <Box className="mobile-container">
      {content.map((c, idx) =>
      (
        <Box mb={'8'} key={c.title}>
          <Text fontSize={'1.1rem'} color={'var(--secondary-color)'} mb={'4'} >Step. {idx + 1}</Text>
          <Text fontSize={'1.2rem'} fontWeight={'700'} mb={'4'}>{c.title}</Text>
          <Text fontSize={'1.1rem'} mb={'4'}>{c.subtitle}</Text>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <img className="secondary-img" src={c.secondaryImage.url} width="290" height="218" alt={c.title} loading="lazy" />
          </Flex>
        </Box>
      )
      )}
    </Box>
  )
}

function SkewContent({ content, step, downAnimation }) {
  // Intersection observer Hook for animations
  const { ref, inView } = useInView({ threshold: 0.8 })

  useEffect(() => {
    if (inView) {
      downAnimation(step)
    }
  }, [inView, step])

  return (
    <>

      {step === "1" && (
        <Box ref={ref} className="first-content hwd-description">
          <Heading as="h6" mb={'6'} >{content.title}</Heading>
          <Text lineHeight={'1.6'}>{content.subtitle}</Text>
        </Box>
      )}

      {step === "2" && (
        <Box ref={ref} className="left-description hwd-description">
          <Heading as="h6" mb={'6'}>{content.title}</Heading>
          <Text lineHeight={'1.6'}>{content.subtitle}</Text>
        </Box>
      )}

      {step === "3" && (
        <Flex ref={ref} justifyContent={'flex-end'}>
          <Box className="right-description hwd-description">
            <Heading as="h6" mb={'6'}>{content.title}</Heading>
            <Text lineHeight={'1.6'}>{content.subtitle}</Text>
          </Box>
        </Flex>
      )}

      {step === "4" && (
        <Box ref={ref} className="left-description hwd-description">
          <Heading as="h6" mb={'6'}>{content.title}</Heading>
          <Text lineHeight={'1.6'}>{content.subtitle}</Text>
        </Box>
      )}

    </>
  )
}

