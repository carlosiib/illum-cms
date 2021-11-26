import { Box, Flex } from '@chakra-ui/react'

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
          <Flex justifyContent="space-between">
            <Box
              className="b-3"
              w={'65%'}
            >
              {posts.map((post) => (
                <BlogPostCard key={post.id} {...post} />
              ))}
            </Box>
            <Box className="b-1" w={'25%'}>Col2</Box>
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
    revalidate: 60
  }
}

BlogPage.getLayout = getPageLayout
