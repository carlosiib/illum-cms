import React, { useState, useEffect } from 'react'

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
    <div>
      IUDEBNDA FETCH
    </div>
  )
}


