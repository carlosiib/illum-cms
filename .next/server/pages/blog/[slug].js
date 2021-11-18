"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPost),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(276);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2405);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4889);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5308);
/* harmony import */ var _utils_parsePostData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(146);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7187);











function BlogPost({ nextPost , post , previousPost  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                ...post.seo
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                as: "article",
                pos: "relative",
                maxW: {
                    base: 'xl',
                    lg: '7xl'
                },
                mx: "auto",
                px: [
                    4,
                    6,
                    null,
                    8
                ],
                py: [
                    8,
                    12,
                    null,
                    20
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        as: "header",
                        pt: 6,
                        pb: {
                            lg: 10
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            spacing: 1,
                            textAlign: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    as: "dl",
                                    spacing: 10,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
                                                as: "dt",
                                                children: "Published on"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                as: "dd",
                                                fontSize: "md",
                                                lineHeight: "6",
                                                fontWeight: "medium",
                                                color: "gray.500",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                    as: "time",
                                                    dateTime: post.published,
                                                    children: post.formattedPublished
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                        as: "h1",
                                        fontWeight: "extrabold",
                                        color: "gray.900",
                                        lineHeight: "none",
                                        letterSpacing: "tight",
                                        fontSize: [
                                            '4xl',
                                            '5xl',
                                            '6xl',
                                            '5xl',
                                            '6xl'
                                        ],
                                        children: post.title
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        display: {
                            lg: 'grid'
                        },
                        pb: {
                            base: 16,
                            lg: 20
                        },
                        gridTemplateColumns: {
                            lg: 'repeat(4, 1fr)'
                        },
                        gridTemplateRows: "auto 1fr",
                        gridColumnGap: 6,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                as: "dl",
                                pt: {
                                    base: 6,
                                    lg: '44px'
                                },
                                pb: 10,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
                                        as: "dt",
                                        children: "Author"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        as: "dd",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
                                            display: {
                                                base: 'flex',
                                                lg: 'block'
                                            },
                                            justifyContent: "center",
                                            children: post.authors.map((author)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    spacing: 2,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                            w: 10,
                                                            h: 10,
                                                            pos: "relative",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                                className: "avatar",
                                                                src: author.photo.url,
                                                                alt: author.name,
                                                                title: author.name,
                                                                layout: "fill"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                            as: "dl",
                                                            flex: "1 1 0",
                                                            fontSize: "sm",
                                                            fontWeight: "medium",
                                                            lineHeight: "5",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
                                                                    as: "dt",
                                                                    children: "Name"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                                    as: "dd",
                                                                    color: "gray.900",
                                                                    children: author.name
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, author.id)
                                            )
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                pb: {
                                    lg: 0
                                },
                                gridColumn: "span 3 / span 3",
                                gridRow: "span 2 / span 2",
                                children: [
                                    post.coverImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        mx: "auto",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            className: "cover-image",
                                            src: post.coverImage.url,
                                            alt: post.coverImage.title,
                                            title: post.coverImage.title,
                                            height: post.coverImage.height,
                                            width: post.coverImage.width,
                                            objectFit: "cover"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        maxW: "none",
                                        pt: 10,
                                        pb: 8,
                                        color: "gray.500",
                                        className: "prose",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_5__.MDXRemote, {
                                            ...post.content.mdx
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                as: "footer",
                                fontSize: "sm",
                                fontWeight: "medium",
                                lineHeight: "5",
                                gridColumnStart: {
                                    lg: '1'
                                },
                                gridRowStart: {
                                    lg: '2'
                                },
                                children: [
                                    (nextPost || previousPost) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                        py: 8,
                                        borderWidth: "1px 0",
                                        borderStyle: "solid",
                                        borderColor: "gray.200",
                                        spacing: 8,
                                        children: [
                                            nextPost && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                                        as: "h2",
                                                        fontSize: "xs",
                                                        fontWeight: "medium",
                                                        letterSpacing: "wide",
                                                        textTransform: "uppercase",
                                                        lineHeight: "4",
                                                        color: "gray.500",
                                                        children: "Next Post"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                        color: "indigo.500",
                                                        _hover: {
                                                            color: 'indigo.600'
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                            href: `/blog/${nextPost.slug}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: nextPost.title
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            previousPost && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                                        as: "h2",
                                                        fontSize: "xs",
                                                        fontWeight: "medium",
                                                        letterSpacing: "wide",
                                                        textTransform: "uppercase",
                                                        lineHeight: "4",
                                                        color: "gray.500",
                                                        children: "Previous Post"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                        color: "indigo.500",
                                                        _hover: {
                                                            color: 'indigo.600'
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                            href: `/blog/${previousPost.slug}`,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                children: previousPost.title
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        pt: 8,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/blog",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                color: "indigo.500",
                                                _hover: {
                                                    color: 'indigo.600'
                                                },
                                                children: "← Back to the blog"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps({ locale , params , preview =false  }) {
    const client = (0,_lib_client__WEBPACK_IMPORTED_MODULE_8__/* .graphcmsClient */ .q)(preview);
    const { allPosts , page , post  } = await client.request(_lib_queries__WEBPACK_IMPORTED_MODULE_6__/* .blogPostQuery */ .zK, {
        locale,
        slug: params.slug
    });
    if (!post) {
        return {
            notFound: true
        };
    }
    const postIndex = allPosts.findIndex(({ id  })=>id === post.id
    );
    const nextPost = allPosts[postIndex + 1] || null;
    const previousPost = allPosts[postIndex - 1] || null;
    const parsedPostData = await (0,_utils_parsePostData__WEBPACK_IMPORTED_MODULE_9__/* .parsePostData */ .h)(post);
    return {
        props: {
            nextPost,
            page,
            post: parsedPostData,
            previousPost,
            preview
        },
        revalidate: 60
    };
}
async function getStaticPaths({ locales  }) {
    let paths = [];
    const client = (0,_lib_client__WEBPACK_IMPORTED_MODULE_8__/* .graphcmsClient */ .q)();
    const { posts  } = await client.request(graphql_request__WEBPACK_IMPORTED_MODULE_4__.gql`
    {
      posts: blogPosts {
        slug
      }
    }
  `);
    for (const locale of locales){
        paths = [
            ...paths,
            ...posts.map((post)=>({
                    params: {
                        slug: post.slug
                    },
                    locale
                })
            )
        ];
    }
    return {
        paths,
        fallback: 'blocking'
    };
}
BlogPost.getLayout = _layout__WEBPACK_IMPORTED_MODULE_7__/* .getContentLayout */ .A4;


/***/ }),

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ parsePostData)
/* harmony export */ });
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1604);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_1__);


const parsePostData = async ({ content , published , ...post })=>({
        ...content && {
            content: {
                markdown: content,
                mdx: await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(he__WEBPACK_IMPORTED_MODULE_1___default().decode(content))
            }
        },
        ...published && {
            formattedPublished: new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }).format(new Date(published))
        },
        ...post
    })
;



/***/ }),

/***/ 1271:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 1604:
/***/ ((module) => {

module.exports = require("he");

/***/ }),

/***/ 276:
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ 7112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,889,744], () => (__webpack_exec__(7602)));
module.exports = __webpack_exports__;

})();