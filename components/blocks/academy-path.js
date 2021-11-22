import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Heading, Box, Flex, Center } from '@chakra-ui/layout'

export default function AcademyPath({ title, academyPath }) {
  console.log(academyPath)
  const [currentPath, setCurrentPath] = useState("Instructors")
  const [path, setPath] = useState(null)

  useEffect(() => {
    const filter = academyPath.filter(path => path.reference === currentPath)
    console.log(filter)
    setPath(filter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath])


  if (!academyPath) return null


  return (
    <Box my={12}>
      <Box as="section" maxW="7xl" mx="auto" className="b-2">
        <Flex justifyContent={'flex-end'} mr={'22%'}>
          <button className="anchor-link path-main-btn">{title}</button>
        </Flex>

        <div className="b-3 svg-container">
          <div className="svg-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1250"
              height="100"
              viewBox="0 0 800 97"
              fill="none"
            >
              <path
                d="M581 0V39.2718C581 42.0332 578.761 44.2718 576 44.2718H548.416H5.99999C3.23857 44.2718 1 46.5104 1 49.2718V97"
                stroke={currentPath === "Content Managers" ? "#52b56b" : "#3f85ca"}
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className="svg-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1245"
              height="100"
              viewBox="0 0 5 100"
              fill="none"
            >
              <path
                d="M225 0V63.1592C225 65.9206 222.761 68.1592 220 68.1592H5.99999C3.23857 68.1592 1 70.3978 1 73.1592V100"
                stroke={currentPath === "Learners" ? "#52b56b" : "#3f85ca"}
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className="svg-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1230"
              height="113"
              viewBox="-380 10 300 99"
              fill="none"
            >
              <path
                d="M1 0V62.1608C1 64.9222 3.23858 67.1608 6 67.1608H106C108.761 67.1608 111 69.3994 111 72.1608V99"
                stroke={currentPath === "Instructors" ? "#52b56b" : "#3f85ca"}
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
        <Flex justify={"space-around"} direction={'row-reverse'}>
          {academyPath && academyPath.length &&
            (
              academyPath.map(path =>
              (<button
                key={path.id}
                className={currentPath === `${path.reference}` ? "path-btn" : "path-btn path-sec-btn"}
                onClick={() => setCurrentPath(`${path.reference}`)}>
                For {path.reference}
              </button>))
            )
          }
        </Flex>
        {path && path.length &&
          (
            path.map(p => (
              <Box key={p.id}>
                <Box className="path-container">
                  <Flex justify={'space-between'}>
                    <Box w={'70%'}>
                      <Heading as="h3" mb={6}>{p.title}</Heading>
                      <Flex>
                        <Box mr={12} w={'40%'}>
                          <img src={p.firstImage.url} alt={p.title} width="98" height="100" loading="lazy" />
                          <p>{p.firstSubtitle}</p>
                          <p>{p.firstDescription}</p>
                          <Link href={p.firstHrefLink}>
                            <a target="_blank"
                              rel="noreferrer">
                              {p.firstHrefLabel}
                            </a>
                          </Link>
                        </Box>
                        <Box w={'40%'}>
                          <img src={p.secondImage.url} alt={p.title} width="98" height="100" loading="lazy" />
                          <p>{p.secondSubtitle}</p>
                          <p>{p.secondDescription}</p>
                        </Box>
                      </Flex>
                    </Box>
                    <Box w={'30%'}>
                      <Center>
                        <img
                          src={p.mainImage.url}
                          alt={p.for}
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
    </Box>
  )
}


