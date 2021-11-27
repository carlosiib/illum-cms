import { Box, Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import startCase from 'lodash.startcase'

export default function BlogPostCard({
  category,
  coverImage,
  excerpt,
  slug,
  title
}) {

  return (
    <Flex flexDir="column" borderRadius="lg" boxShadow="md" overflow="hidden" mb={'2rem'}>
      <Box flexShrink="0">
        {coverImage && (
          <Image
            className="blog-post-card-image"
            src={coverImage.url}
            alt={coverImage.title}
            title={coverImage.title}
            width={coverImage.width}
            height="400"
            layout="intrinsic"
          />
        )}
      </Box>
      <Flex
        display="flex"
        flex="1 1 0"
        bg="white"
        p={6}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box flex="1 1 0">
          <Text fontSize="sm" fontWeight="medium" color={'var(--primary-color)'}>
            {startCase(category.toLowerCase())}
          </Text>
          <NextLink href={`/blog/${slug}`}>
            <Link
              display="block"
              mt={2}
              _hover={{
                textDecor: 'none'
              }}
            >
              <Text fontWeight="semibold" fontSize={'1.4rem'} mb={'4'}>
                {title}
              </Text>
              <Text mt={3} fontSize="md" mb={3}>
                {excerpt}
              </Text>
            </Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href={`/blog/${slug}`}>
            <a className="path-content-anchor">
              Read More
              <i className="blog-arrow">&#8594;</i>
            </a>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  )
}
