import { useState, useEffect } from "react"
import { Box, Heading, Flex } from "@chakra-ui/layout"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

export default function HowDoesItWork({ title, mainImage, howDoesItWorkContents }) {

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
        x: (step * 1) % 2 == 0 ? "50%" : "0%",
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
      <Heading as="h5" mb={14} textAlign={'center'}>{title}</Heading>

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
            <div >
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
            </div>
          )
        }
      </Box>
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
        <Box ref={ref} color={'red'} className="first-content hwd-description">
          <Heading as="h6">{content.title}</Heading>
          <p>{content.subtitle}</p>
        </Box>
      )}

      {step === "2" && (
        <Box ref={ref} color={'orange'} className="left-description hwd-description">
          <Heading as="h6">{content.title}</Heading>
          <p>{content.subtitle}</p>
        </Box>
      )}

      {step === "3" && (
        <Flex ref={ref} justifyContent={'flex-end'}>
          <Box color={'yellow'} className="right-description hwd-description">
            <Heading as="h6">{content.title}</Heading>
            <p>{content.subtitle}</p>
          </Box>
        </Flex>
      )}

      {step === "4" && (
        <Box ref={ref} color={'orange'} className="left-description hwd-description">
          <Heading as="h6">{content.title}</Heading>
          <p>{content.subtitle}</p>
        </Box>
      )}

    </>
  )
}
