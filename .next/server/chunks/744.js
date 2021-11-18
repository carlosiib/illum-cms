"use strict";
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 5308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ graphcmsClient)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const graphcmsClient = (preview = false)=>new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(process.env.GRAPHCMS_URL, {
        headers: {
            ...process.env.GRAPHCMS_TOKEN && {
                Authorization: `Bearer ${preview ? process.env.GRAPHCMS_PREVIEW_TOKEN : process.env.GRAPHCMS_TOKEN}`
            }
        }
    })
;



/***/ }),

/***/ 2405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ac": () => (/* binding */ blogPageQuery),
/* harmony export */   "zK": () => (/* binding */ blogPostQuery),
/* harmony export */   "JR": () => (/* binding */ pageQuery)
/* harmony export */ });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);

const blogPageQuery = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  fragment BlogPostFields on BlogPost {
    id
    authors {
      id
      name
      photo {
        id
        url
      }
      role
    }
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
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
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
`;
const blogPostQuery = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query BlogPostQuery($locale: Locale!, $slug: String!) {
    allPosts: blogPosts(locales: [$locale, en], orderBy: published_ASC) {
      id
      slug
      title
    }
    page(where: { slug: "blog" }) {
      footer {
        id
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
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
      authors {
        id
        name
        photo {
          id
          url
        }
        role
      }
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
`;
const pageQuery = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`
  query PageQuery($locale: Locale!, $slug: String!) {
    page(locales: [$locale, en], where: { slug: $slug }) {
      blocks {
        __typename
        ... on Breakpoint {
          id
          buttons {
            id
            href
            label
            theme
          }
          subtitle
          title
        }
        ... on Grid {
          id
          columns {
            __typename
            ... on BlogPost {
              id
              authors {
                id
                name
                photo {
                  id
                  url
                }
                role
              }
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
              content
              title
            }
            ... on Feature {
              id
              content
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
            ... on Person {
              id
              name
              photo {
                id
                height
                url
                width
              }
              role
            }
            ... on PricingPlan {
              id
              annualPrice
              description
              included
              monthlyPrice
              name
            }
            ... on Stat {
              id
              label
              value
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
        ... on LogoCloud {
          id
          companies {
            id
            logo {
              id
              height
              url
              width
            }
            name
          }
          logoCloudTitle: title
        }
        ... on Testimonial {
          id
          content
          person {
            id
            name
            company {
              id
              logo {
                id
                height
                url
                width
              }
              name
            }
            photo {
              id
              height
              url
              width
            }
            role
          }
        }
      }
      footer {
        id
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
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
        ... on Banner {
          id
          content
          href
          slug
          theme
        }
        ... on Newsletter {
          id
          ctaLabel
          subtitle
          title
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
`;



/***/ })

};
;