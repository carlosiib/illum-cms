import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/layout'

export default function Iubenda() {

  useEffect(() => {

    async function getData() {
      const req = await fetch('/api/iubenda')
      const res = await req.json()
      console.log("iubenda res", res)
    }
    getData()
  }, [])

  return (
    <Box type='hidden'>

    </Box>
  )
}


