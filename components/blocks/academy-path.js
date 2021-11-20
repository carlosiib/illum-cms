import { useState, useEffect } from 'react'
import { Heading, Box, Flex } from '@chakra-ui/layout'

export default function AcademyPath({ academyPath }) {
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
        <Flex justify={"space-around"}>
          <button
            className="path-btn"
            onClick={() => setCurrentPath("Content Managers")}>
            Content Managers
          </button>
          <button
            className="path-btn"
            onClick={() => setCurrentPath("Learners")}>
            Learners
          </button>
          <button
            className="path-btn"
            onClick={() => setCurrentPath("Instructors")}>
            Instructors
          </button>
        </Flex>
        {path && path.length &&
          (
            path.map(p => (
              <div key={p.id} className="path-container
              ">
                <Heading as="h3">{p.title}</Heading>
              </div>
            ))
          )
        }
      </Box>
    </Box>
  )
}


