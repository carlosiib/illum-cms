import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heading, Box, Flex, Center, Text } from '@chakra-ui/layout'
import useMediaQuery from 'hooks/useMediaQuery'

export default function AcademyPath({ title, academyPath }) {
  const isMediumDisplay = useMediaQuery("(max-width: 1075px)")

  if (!academyPath) return null

  return (
    <Box my={12} padding={'0 1rem'}>
      <Box maxW="7xl" mx="auto" >
        <Flex justifyContent={'flex-end'} mr={'19%'} className="main-btn-container">
          <motion.button
            className="anchor-link path-main-btn"
            whileHover={{
              scale: 1.04,
              transition: {
                type: "spring",
                stiffness: 1000,
              }
            }}>
            {title}
          </motion.button>
        </Flex>

        {isMediumDisplay ?
          (
            <div>
              <MobilePath academyPath={academyPath} />
            </div>
          )
          :
          (
            <div>
              <DesktopPath academyPath={academyPath} />
            </div>
          )
        }
      </Box>
    </Box>
  )
}

function MobilePath({ academyPath }) {
  return (
    <div>
      {academyPath && academyPath.length &&
        (
          academyPath.map(path =>
          (
            <div key={path.reference} className="m-path-item">
              <Text
                backgroundColor={'var(--secondary-color)'}
                width={'100%'}
                padding={'.8rem 1.6rem'}
                fontWeight={'700'}
                color={'var(--white-color)'}
                letterSpacing={'1.4px'}
                textTransform={'uppercase'}
                borderTopRightRadius={'8'}
                borderTopLeftRadius={'8'}
              >
                FOR {path.reference}
              </Text>
              <Box
                backgroundColor={'var(--third-color)'}
                padding={'1.6rem 1.2rem'}
                borderBottomRightRadius={'8'}
                borderBottomLeftRadius={'8'}>
                <Heading as='h3' mb={'4'}>{path.title}</Heading>
                <Box className="m-path-content">
                  <Box mr={4}>
                    <img
                      src={path.firstImage.url}
                      alt={path.title}
                      width="90"
                      height="90"
                      loading="lazy" />
                    <Text mb={4}
                      fontWeight={'bold'}
                      fontSize={'1.1rem'}>
                      {path.firstSubtitle}
                    </Text>
                    <Text mb={4}>{path.firstDescription}</Text>
                    <Link href={path.firstHrefLink}>
                      <a target="_blank"
                        rel="noreferrer"
                        className="path-content-anchor">
                        {path.firstHrefLabel}
                      </a>
                    </Link>
                  </Box>
                  <Box>
                    <img
                      src={path.secondImage.url}
                      alt={path.title}
                      width="90"
                      height="90"
                      loading="lazy" />
                    <Text mb={4}
                      fontWeight={'bold'}
                      fontSize={'1.1rem'}>
                      {path.secondSubtitle}
                    </Text>
                    <Text mb={4}>{path.secondDescription}</Text>
                  </Box>

                </Box>
              </Box>
            </div>
          ))
        )
      }
    </div>
  )
}

function DesktopPath({ academyPath }) {
  const [currentPath, setCurrentPath] = useState("Instructors")
  const [path, setPath] = useState(null)

  // Intersection observer Hook for animations
  const { ref, inView } = useInView()
  const animation = useAnimation()

  useEffect(() => {
    const filter = academyPath.filter(path => path.reference === currentPath)
    setPath(filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath])

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut"
        }
      })
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        pathLength: 0,
      })
    }

  }, [inView, animation])

  return (
    <div>
      <div className="svg-container" ref={ref} >
        <motion.div className="svg-item">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1300"
            height="100"
            viewBox="0 0 800 97"
            fill="none"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M581 0V39.2718C581 42.0332 578.761 44.2718 576 44.2718H548.416H5.99999C3.23857 44.2718 1 46.5104 1 49.2718V97"
              stroke={currentPath === "Content Managers" ? "#52b56b" : "#3f85ca"}
              strokeWidth="3"
              animate={animation}
            />
          </motion.svg>
        </motion.div>

        <Box className="svg-item">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1280"
            height="100"
            viewBox="0 0 5 100"
            fill="none"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M225 0V63.1592C225 65.9206 222.761 68.1592 220 68.1592H5.99999C3.23857 68.1592 1 70.3978 1 73.1592V100"
              stroke={currentPath === "Learners" ? "#52b56b" : "#3f85ca"}
              strokeWidth="3"
              animate={animation}
            />
          </motion.svg>
        </Box>

        <Box className="svg-item">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1250"
            height="113"
            viewBox="-380 10 300 99"
            fill="none"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M1 0V62.1608C1 64.9222 3.23858 67.1608 6 67.1608H106C108.761 67.1608 111 69.3994 111 72.1608V99"
              stroke={currentPath === "Instructors" ? "#52b56b" : "#3f85ca"}
              strokeWidth="3"
              animate={animation}
            />
          </motion.svg>
        </Box>
      </div>

      <Flex justify={"space-between"} direction={'row-reverse'} padding={'0 .8rem'}>
        {academyPath && academyPath.length &&
          (
            academyPath.map(path =>
            (<button
              key={path.id}
              className={currentPath === `${path.reference}` ? "path-btn" : "path-btn path-sec-btn"}
              onClick={() => setCurrentPath(`${path.reference}`)}>
              FOR {path.reference}
            </button>))
          )
        }
      </Flex>

      <Box>
        {path && path.length &&
          (
            path.map(p => (
              <Box key={p.id} >
                <Box className="path-container">
                  <Flex justify={'space-between'}>
                    <Box w={'70%'}>
                      <Heading as="h3" mb={6}>{p.title}</Heading>
                      <Flex>
                        <Box mr={12} w={'40%'}>
                          <img src={p.firstImage.url} alt={p.title} width="98" height="100" loading="lazy" />
                          <Text fontSize={'lg'} mb={4} fontWeight={'bold'}>{p.firstSubtitle}</Text>
                          <Text mb={4}>{p.firstDescription}</Text>
                          <Link href={p.firstHrefLink}>
                            <a target="_blank"
                              rel="noreferrer"
                              className="path-content-anchor">
                              {p.firstHrefLabel}
                            </a>
                          </Link>
                        </Box>
                        <Box w={'40%'}>
                          <img src={p.secondImage.url} alt={p.title} width="98" height="100" loading="lazy" />
                          <Text fontSize={'lg'} mb={4} fontWeight={'bold'}>{p.secondSubtitle}</Text>
                          <Text >{p.secondDescription}</Text>
                        </Box>
                      </Flex>
                    </Box>
                    <Box w={'30%'}>
                      <Center>
                        <img
                          src={p.mainImage.url}
                          alt={p.title}
                          loading="lazy"
                          width="280"
                          height="420"
                        />
                      </Center>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ))
          )
        }
      </Box>
    </div>
  )
}


