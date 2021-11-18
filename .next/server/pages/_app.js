"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./components/layout/index.js + 9 modules
var layout = __webpack_require__(4889);
// EXTERNAL MODULE: ./next-seo.config.js
var next_seo_config = __webpack_require__(5056);
;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./styles/theme.js


const breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em'
});
const theme = (0,react_.extendTheme)({
    breakpoints,
    lineHeights: {
        tall: 1.8
    },
    colors: {
        orange: {
            600: '#EA580C'
        },
        gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6b7280',
            700: '#374151',
            800: '#1F2937',
            900: '#111827'
        },
        indigo: {
            50: '#EEF2FF',
            100: '#E0E7FF',
            200: '#C7D2FE',
            300: '#A5B4FC',
            400: '#818CF8',
            500: '#6366F1',
            600: '#4F46E5',
            700: '#4338CA',
            800: '#3730A3',
            900: '#312E81'
        },
        green: {
            500: '#10B981'
        }
    },
    components: {
        Container: {
            baseStyle: {
                maxW: '65ch'
            }
        },
        Link: {
            variants: {
                INDIGO: {
                    bg: 'indigo.600',
                    color: 'white',
                    _hover: {
                        textDecoration: 'none',
                        backgroundColor: 'indigo.700'
                    }
                },
                WHITE: {
                    bg: 'white',
                    color: 'indigo.600',
                    _hover: {
                        textDecoration: 'none',
                        backgroundColor: 'gray.50'
                    }
                }
            }
        }
    },
    styles: {
        global: {
            'html, body': {
                color: 'gray.500'
            },
            'ul, ol': {
                listStyle: 'none'
            }
        }
    }
});

;// CONCATENATED MODULE: ./pages/_app.js







function App({ Component , pageProps  }) {
    const getLayout = Component.getLayout || ((page)=>/*#__PURE__*/ jsx_runtime_.jsx(layout/* SiteLayout */.Iv, {
            children: page
        })
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                ...next_seo_config/* defaultSEO */.x
            }),
            getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }))
        ]
    }));
};


/***/ }),

/***/ 1271:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 276:
/***/ ((module) => {

module.exports = require("next-mdx-remote");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,889], () => (__webpack_exec__(148)));
module.exports = __webpack_exports__;

})();