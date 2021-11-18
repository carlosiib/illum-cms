"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 8143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2405);
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(257);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4889);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5308);
/* harmony import */ var _utils_parsePageData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5932);
/* harmony import */ var _utils_parsePostData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(146);








function BlogPage({ posts  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
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
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                gridGap: 14,
                gridTemplateColumns: {
                    base: 'repeat(1, 1fr)',
                    lg: 'repeat(3, 1fr)'
                },
                children: posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_columns__WEBPACK_IMPORTED_MODULE_3__.BlogPostCard, {
                        ...post
                    }, post.id)
                )
            })
        })
    }));
};
async function getStaticProps({ locale , preview =false  }) {
    const client = (0,_lib_client__WEBPACK_IMPORTED_MODULE_5__/* .graphcmsClient */ .q)(preview);
    const { page , posts  } = await client.request(_lib_queries__WEBPACK_IMPORTED_MODULE_2__/* .blogPageQuery */ .Ac, {
        locale
    });
    const parsedPageData = await (0,_utils_parsePageData__WEBPACK_IMPORTED_MODULE_6__/* .parsePageData */ .y)(page);
    const parsedPostData = await Promise.all(posts.map((post)=>(0,_utils_parsePostData__WEBPACK_IMPORTED_MODULE_7__/* .parsePostData */ .h)(post)
    ));
    return {
        props: {
            page: parsedPageData,
            posts: parsedPostData,
            preview
        },
        revalidate: 60
    };
}
BlogPage.getLayout = _layout__WEBPACK_IMPORTED_MODULE_4__/* .getPageLayout */ .xg;


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

/***/ 4232:
/***/ ((module) => {

module.exports = require("lodash.camelcase");

/***/ }),

/***/ 5970:
/***/ ((module) => {

module.exports = require("lodash.startcase");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,889,744,184], () => (__webpack_exec__(8143)));
module.exports = __webpack_exports__;

})();