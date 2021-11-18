"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 2424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "graphql-request"
const external_graphql_request_namespaceObject = require("graphql-request");
;// CONCATENATED MODULE: ./lib/_client.js

const graphcmsClient = (preview = false)=>new external_graphql_request_namespaceObject.GraphQLClient(process.env.GRAPHCMS_URL, {
        headers: {
            ...process.env.GRAPHCMS_TOKEN && {
                Authorization: `Bearer ${preview ? process.env.GRAPHCMS_PREVIEW_TOKEN : process.env.GRAPHCMS_TOKEN}`
            }
        }
    })
;


;// CONCATENATED MODULE: ./lib/_queries.js

const blogPageQuery = external_graphql_request_namespaceObject.gql`
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
const blogPostQuery = external_graphql_request_namespaceObject.gql`
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
const pageQuery = external_graphql_request_namespaceObject.gql`
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


;// CONCATENATED MODULE: ./pages/api/preview.js


async function handler(req, res) {
    if (req.query.secret !== process.env.GRAPHCMS_PREVIEW_SECRET || !req.query.slug) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
    const client = graphcmsClient(true);
    const [rootSlug, nestedSlug] = req.query.slug.split('/');
    const data = await client.request(nestedSlug ? blogPostQuery : pageQuery, {
        slug: nestedSlug ? blogPostQuery : rootSlug,
        ...rootSlug && {
            locale: 'en'
        }
    });
    if (!data) {
        return res.status(401).json({
            message: 'Slug not found - cannot enter preview mode'
        });
    }
    res.setPreviewData({
    });
    res.writeHead(307, {
        Location: nestedSlug ? `/${req.query.slug}` : rootSlug === 'home' ? '/' : `/${rootSlug}`
    });
    res.end();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2424));
module.exports = __webpack_exports__;

})();