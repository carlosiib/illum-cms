import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Notebooks as a service for LMS systems" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <title>ILLUMIDESK</title>
      </Head>

      <div >
        <div>
          <h1>404</h1>
          <h2>Not found</h2>
          <p>The page you requested doesn<span>&apos;</span>t exist.</p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
