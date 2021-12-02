import {
  Box,
  Heading,
  VisuallyHidden,
  Link,
  Text,
  Stack
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { gql } from 'graphql-request'

import { blogPostQuery } from '@/lib/_queries'
import { getContentLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { parsePostData } from '@/utils/_parsePostData'
import SEO from '@/components/seo'

export default function BlogPost({ nextPost, post, previousPost }) {

  return (
    <>
      <SEO {...post.seo} />
      <Box
        as="article"
        pos="relative"
        maxW={{ base: 'xl', lg: '7xl' }}
        mx="auto"
        px={[4, 6, null, 8]}
        py={[8, 12, null, 20]}
      >

        <Box
          display={{ lg: 'grid' }}
          pb={{ base: 16, lg: 20 }}
          gridTemplateColumns={{ lg: 'repeat(4, 1fr)' }}
          gridTemplateRows="auto 1fr"
          gridColumnGap={6}
        >
          <Box
            pb={{ lg: 0 }}
            gridColumn="span 3 / span 3"
            gridRow="span 2 / span 2"
          >
            {post.coverImage && (
              <Box mx="auto">
                <Image
                  className="cover-image"
                  src={post.coverImage.url}
                  alt={post.coverImage.title}
                  title={post.coverImage.title}
                  height={post.coverImage.height}
                  width={post.coverImage.width}
                  objectFit="cover"
                />
              </Box>
            )}

            <Box as="header" pt={6} pb={{ lg: 10 }}>
              <Stack spacing={1}>
                <div>
                  <Heading
                    as="h1"
                    fontWeight="extrabold"
                    lineHeight="none"
                    letterSpacing="tight"
                    fontSize={['4xl', '5xl', '5xl', '5xl', '5xl']}
                  >
                    {post.title}
                  </Heading>
                </div>
                <Stack as="dl" pt={4}>
                  <div>
                    <VisuallyHidden as="dt">Published on</VisuallyHidden>
                    <Box
                      as="dd"
                      fontSize="md"
                      lineHeight="6"
                      fontWeight="medium"
                      color="gray.500"
                    >
                      <Box as="time" dateTime={post.published}>
                        {post.formattedPublished}
                      </Box>
                    </Box>
                  </div>
                </Stack>
              </Stack>
            </Box>

            <Box maxW="none" pb={8} mt={2}>
              <Text className="blog-item-excerpt">{post.excerpt}</Text>
            </Box>

            <Box
              maxW="none"
              pb={8}
              fontSize={'xl'}
              className="blog-item-content">
              <div dangerouslySetInnerHTML={{ __html: post.contentBlog.html }}></div>
            </Box>
          </Box>

          <Box
            as="footer"
            fontSize="sm"
            fontWeight="medium"
            lineHeight="5"
            paddingLeft={2}
          >
            {(nextPost || previousPost) && (
              <Stack
                py={8}
                borderWidth="1px 0"
                borderStyle="solid"
                borderColor="gray.200"
                spacing={8}
              >
                {nextPost && (
                  <div>
                    <Heading
                      as="h2"
                      fontSize="md"
                      fontWeight="medium"
                      letterSpacing="wide"
                      textTransform="uppercase"
                      lineHeight="4"
                      mb={2}
                    >
                      Next Post
                    </Heading>
                    <Box
                      color={'var(--primary-color)'}
                      fontSize={'md'}
                    >
                      <NextLink href={`/blog/${nextPost.slug}`}>
                        <a className="path-content-anchor">{nextPost.title}</a>
                      </NextLink>
                    </Box>
                  </div>
                )}
                {previousPost && (
                  <div>
                    <Heading
                      as="h2"
                      fontSize="md"
                      fontWeight="medium"
                      letterSpacing="wide"
                      textTransform="uppercase"
                      lineHeight="4"
                      mb={2}
                    >
                      Previous Post
                    </Heading>
                    <Box
                      color={'var(--primary-color)'}
                      fontSize={'md'}
                    >
                      <NextLink href={`/blog/${previousPost.slug}`}>
                        <a className="path-content-anchor" >{previousPost.title}</a>
                      </NextLink>
                    </Box>
                  </div>
                )}
              </Stack>
            )}
            <Box pt={8} color={'var(--secondary-color)'}>
              <NextLink href="/blog">
                <Link
                  className="path-content-anchor"
                  fontSize={'md'}
                  _hover={{
                    textDecor: 'none',
                  }}
                >
                  &larr; Back to the blog
                </Link>
              </NextLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export async function getStaticProps({ locale, params, preview = false }) {
  const client = graphcmsClient(preview)

  const { allPosts, page, post } = await client.request(blogPostQuery, {
    locale,
    slug: params.slug
  })

  if (!post) {
    return {
      notFound: true
    }
  }

  const postIndex = allPosts.findIndex(({ id }) => id === post.id)

  const nextPost = allPosts[postIndex + 1] || null
  const previousPost = allPosts[postIndex - 1] || null

  const parsedPostData = await parsePostData(post)


  return {
    props: {
      nextPost,
      page,
      post: parsedPostData,
      previousPost,
      preview
    },
    revalidate: 60
  }
}

export async function getStaticPaths({ locales }) {
  let paths = []

  const client = graphcmsClient()

  const { posts } = await client.request(gql`
    {
      posts: blogPosts {
        slug
      }
    }
  `)

  for (const locale of locales) {
    paths = [
      ...paths,
      ...posts.map((post) => ({ params: { slug: post.slug }, locale }))
    ]
  }

  return {
    paths,
    fallback: 'blocking'
  }
}

BlogPost.getLayout = getContentLayout
