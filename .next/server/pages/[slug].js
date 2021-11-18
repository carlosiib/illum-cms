"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 3364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4889);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5308);
/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2405);
/* harmony import */ var _utils_parsePageData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5932);
/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(200);







function Page({ page  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wrapper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        ...page
    }));
};
async function getStaticProps({ locale , params , preview =false  }) {
    const client = (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__/* .graphcmsClient */ .q)(preview);
    const { page  } = await client.request(_lib_queries__WEBPACK_IMPORTED_MODULE_4__/* .pageQuery */ .JR, {
        locale,
        slug: params.slug
    });
    if (!page) {
        return {
            notFound: true
        };
    }
    const parsedPageData = await (0,_utils_parsePageData__WEBPACK_IMPORTED_MODULE_5__/* .parsePageData */ .y)(page);
    return {
        props: {
            page: parsedPageData,
            preview
        },
        revalidate: 60
    };
}
async function getStaticPaths({ locales  }) {
    let paths = [];
    const client = (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__/* .graphcmsClient */ .q)();
    const { pages  } = await client.request(graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
    {
      pages(where: { slug_not_in: ["home", "blog"] }) {
        slug
      }
    }
  `);
    for (const locale of locales){
        paths = [
            ...paths,
            ...pages.map((page)=>({
                    params: {
                        slug: page.slug
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
Page.getLayout = _layout__WEBPACK_IMPORTED_MODULE_2__/* .getPageLayout */ .xg;


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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,889,744,184,200], () => (__webpack_exec__(3364)));
module.exports = __webpack_exports__;

})();