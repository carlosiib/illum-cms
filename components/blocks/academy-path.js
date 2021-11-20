import { useState, useEffect } from "react"
import { Box, Flex } from "@chakra-ui/layout"

export default function academyPath({ academyPath }) {
  const [currentPath, setCurrentPath] = useState("ckw75rqgwbuy70d27ftwx93xk")
  const [path, setPath] = useState(null)
  //console.log(academyPath)
  //instructors  "ckw75rqgwbuy70d27ftwx93xk"
  //Learners  "ckw75zik8bw6d0d276zmprc5g"
  //Content Managers  "ckw763vywbx5u0d27aw38j84u"

  //crear en shcmema prop FOR = instructors,contentmanagers, leanres
  //filter
  function filterByPath() {
  }

  useEffect(() => {
    const filter = academyPath.filter(path => path.id === currentPath)
    console.log(filter)
    setPath(filter)
  }, [currentPath])


  if (!academyPath) return null

  return (
    <Box bg="gray.50" >

      <Box as="section" maxW="7xl" mx="auto" className="b-2">
        <Flex justify={"space-between"}>
          <button onClick={() => setCurrentPath("ckw75rqgwbuy70d27ftwx93xk")}>instructors</button>
          <button onClick={() => setCurrentPath("ckw75zik8bw6d0d276zmprc5g")}>Learners</button>
          <button onClick={() => setCurrentPath("ckw763vywbx5u0d27aw38j84u")}>Content Manager</button>
        </Flex>
        {path && path.length &&
          (
            path.map((p) => (
              <div key={p.id}>
                <p>{p.title}</p>
              </div>
            ))
          )
        }
      </Box>
    </Box>
  )
}


