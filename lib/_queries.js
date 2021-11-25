import { gql } from 'graphql-request'

const blogPageQuery = gql`
  fragment BlogPostFields on BlogPost {
    id
    category
    content
    coverImage {
      id
      height
      url
      width
    }
    excerpt
    published
    slug
    title
  }

  query BlogPageQuery($locale: Locale!) {
    page(locales: [$locale, en], where: { slug: "blog" }) {
      id
      footer {
        id
        resourcesLinks {
          id
          navigationLabel
          slug
        }
        legalLinks {
          id
          navigationLabel
          slug
        }
        slug
        title
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          navigationLabel
          slug
        }
      }
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      subtitle
      title
    }
    posts: blogPosts(orderBy: published_DESC) {
      ...BlogPostFields
    }
  }
`

const blogPostQuery = gql`
  query BlogPostQuery($locale: Locale!, $slug: String!) {
    allPosts: blogPosts(locales: [$locale, en], orderBy: published_ASC) {
      id
      slug
      title
    }
    page(where: { slug: "blog" }) {
      footer {
        id
        resourcesLinks {
          id
          navigationLabel
          slug
        }
        legalLinks {
          id
          navigationLabel
          slug
        }
        slug
        title
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          navigationLabel
          slug
        }
      }
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
    }
    post: blogPost(where: { slug: $slug }) {
      id
      category
      content
      contentBlog{
        html
      }
      coverImage {
        id
        height
        url
        width
      }
      excerpt
      published
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      slug
      title
    }
  }
`

const pageQuery = gql`
  query PageQuery($locale: Locale!, $slug: String!) {
    page(locales: [$locale, en], where: { slug: $slug }) {
      blocks {
        __typename
        ... on Grid {
          id
          columns {
            __typename
            ... on BlogPost {
              id
              category
              content
              coverImage {
                id
                height
                url
                width
              }
              excerpt
              published
              slug
              title
            }
            ... on Faq {
              id
              title
              contentFaq{
                html
              }
            }
            ... on Feature {
              id
              contentFeature{
                html
              }
              icon
              image {
                id
                height
                url
                width
              }
              slug
              title
            }

            ... on PricingPlan {
              id
              price
              description
              included
              name
              planOption
              planLabel
              planLink
            }
          }
          columnComponent
          component
          gridHeadline: headline
          layout
          slug
          gridSubtitle: subtitle
          gridTag: tag
          theme
          gridTitle: title
          width
        }
        ... on AcademyPath {
          id
          title
          academyPath{
            reference
            id
            title
            mainImage{
              url
            }
            firstImage{
              url
            }
            firstSubtitle
            firstDescription
            firstHrefLabel
            firstHrefLink
            secondImage{
              url
            }
            secondSubtitle
            secondDescription
          }
        }
        ... on FreeTrial {
          id
          freeTrialTitle
          freeTrialSubtitle
          freeTrialHrefLabel
          freeTrialHrefLink
        }
        ... on HowDoesItWork{
          id
          title
          mainImage{
            url
          }
          howDoesItWorkContents{
            title
            subtitle
            secondaryImage{
              url
            }
          }
        }
        ... on Customer{
          id
          heading
          customerContents{
            imageTitle
            image{
              url
            }
          }
        }
        ... on Testimonial{
          id
          testimonialContents{
            quote
            author
            designation
          }
        }
      }

      footer {
        id
        resourcesLinks {
          id
          navigationLabel
          slug
        }
        legalLinks {
          id
          navigationLabel
          slug
        }
        slug
        title
      }
      hero {
        id
        buttons {
          id
          href
          label
          theme
        }
        image {
          id
          height
          url
          width
        }
        slug
      }
      id
      marketing {
        __typename
        ... on Newsletter {
          id
          ctaLabel
          subtitle
          title
          image{
            url
          }
        }
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          navigationLabel
          slug
        }
        buttons{
          id
          label
          href
          theme
        }
      }
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      subtitle
      title
    }
  }
`

export { blogPageQuery, blogPostQuery, pageQuery }
