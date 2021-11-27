import { Box, Flex, Text } from '@chakra-ui/react'

import { blogPageQuery } from '@/lib/_queries'
import { BlogPostCard } from '@/columns'
import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { parsePageData } from '@/utils/_parsePageData'
import { parsePostData } from '@/utils/_parsePostData'

export default function BlogPage({ posts }) {
  console.log(posts)
  return (
    <main>
      <Box py={12}>
        <Box maxW="7xl" mx="auto" className="b-2" padding={'0 1rem'} >
          <Flex justifyContent="space-between" className="blog-container">
            <Box
              w={'65%'}
              className="blog-posts-items"
            >
              {posts.map((post) => (
                <BlogPostCard key={post.id} {...post} />
              ))}
            </Box>
            <Box w={'25%'} className="b-1 blog-sidebar">
              <Box mb={3} fontSize={'2xl'} letterSpacing={'1.1px'}>
                <Text as="h3" mb={3}>Search</Text>
                <input type="text" placeholder="Type your keywords" />
              </Box>
              <Box mb={3} fontSize={'2xl'} letterSpacing={'1.1px'}>
                <Text as="h3">Popular Post</Text>
              </Box>
              <Box mb={3} fontSize={'2xl'} letterSpacing={'1.1px'}>
                <Text as="h3">Categories</Text>
              </Box>
              <Box mb={3} fontSize={'2xl'} letterSpacing={'1.1px'}>
                <Text as="h3">Tags</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </main>
  )
}

export async function getStaticProps({ locale, preview = false }) {
  const client = graphcmsClient(preview)

  const { page, posts } = await client.request(blogPageQuery, {
    locale
  })

  const parsedPageData = await parsePageData(page)
  const parsedPostData = await Promise.all(
    posts.map((post) => parsePostData(post))
  )

  return {
    props: {
      page: parsedPageData,
      posts: parsedPostData,
      preview
    },
    revalidate: 30
  }
}

BlogPage.getLayout = getPageLayout
