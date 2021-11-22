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
        <Flex justifyContent={'flex-end'} mr={'calc(100% / 4)'}>
          <button className="anchor-link path-main-btn">{title}</button>
        </Flex>
        <Box>
          SVGS
        </Box>
        <Flex justify={"space-around"} direction={'row-reverse'}>
          {academyPath && academyPath.length &&
            (
              academyPath.map(path =>
              (<button
                key={path.id}
                className="path-btn"
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


