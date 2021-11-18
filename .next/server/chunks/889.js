"use strict";
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 2442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const linkDefaultStyles = {
    width: 'full',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: [
        8,
        null,
        10
    ],
    py: [
        3,
        null,
        4
    ],
    fontSize: [
        'base',
        null,
        'lg'
    ],
    fontWeight: 'medium',
    borderRadius: 'md'
};
function Button({ href , label , theme  }) {
    if (!href || !label) return null;
    if (href.includes('http')) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            borderRadius: "md",
            boxShadow: "md",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                isExternal: true,
                href: href,
                ...linkDefaultStyles,
                variant: theme,
                children: label
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        borderRadius: "md",
        boxShadow: "md",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: href,
            passHref: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                ...linkDefaultStyles,
                variant: theme,
                children: label
            })
        })
    }));
};


/***/ }),

/***/ 4430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AvatarIcon": () => (/* reexport */ Avatar),
  "BoltIcon": () => (/* reexport */ LightningBolt),
  "CheckIcon": () => (/* reexport */ Check),
  "ChevronDownIcon": () => (/* reexport */ ChevronDown),
  "DefaultIcon": () => (/* reexport */ LightningBolt),
  "GithubIcon": () => (/* reexport */ GitHub),
  "GlobeIcon": () => (/* reexport */ GlobeAlt),
  "LinkedInIcon": () => (/* reexport */ LinkedIn),
  "MailIcon": () => (/* reexport */ Mail),
  "MenuIcon": () => (/* reexport */ Menu),
  "ScaleIcon": () => (/* reexport */ Scale),
  "SlackIcon": () => (/* reexport */ Slack),
  "SlashIcon": () => (/* reexport */ Slash),
  "TwitterIcon": () => (/* reexport */ Twitter),
  "XIcon": () => (/* reexport */ X)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/icons/avatar.js

function Avatar({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/check.js

function Check({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
            clipRule: "evenodd"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/chevron-down.js

function ChevronDown({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
            clipRule: "evenodd"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/lightning-bolt.js

function LightningBolt({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M13 10V3L4 14h7v7l9-11h-7z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/github.js

function GitHub({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            clipRule: "evenodd"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/globe-alt.js

function GlobeAlt({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/linked-in.js

function LinkedIn({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/mail.js

function Mail({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/menu.js

function Menu({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h16"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/scale.js

function Scale({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/slack.js

function Slack({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m5.042 15.165a2.528 2.528 0 0 1 -2.52 2.523 2.528 2.528 0 0 1 -2.522-2.523 2.527 2.527 0 0 1 2.522-2.52h2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313a2.528 2.528 0 0 1 -2.521 2.522 2.528 2.528 0 0 1 -2.521-2.522zm2.521-10.123a2.528 2.528 0 0 1 -2.521-2.52 2.528 2.528 0 0 1 2.521-2.522 2.528 2.528 0 0 1 2.521 2.522v2.52zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1 -2.521 2.521h-6.312a2.528 2.528 0 0 1 -2.522-2.521 2.528 2.528 0 0 1 2.522-2.521zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1 -2.522 2.521h-2.522zm-1.268 0a2.528 2.528 0 0 1 -2.523 2.521 2.527 2.527 0 0 1 -2.52-2.521v-6.312a2.527 2.527 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.523 2.522zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522 2.528 2.528 0 0 1 -2.523 2.522 2.527 2.527 0 0 1 -2.52-2.522v-2.522zm0-1.268a2.527 2.527 0 0 1 -2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313a2.527 2.527 0 0 1 2.522 2.52 2.528 2.528 0 0 1 -2.522 2.523z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/slash.js

function Slash({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M11 0h3L9 20H6l5-20z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/twitter.js

function Twitter({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/x.js

function X({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M6 18L18 6M6 6l12 12"
        })
    }));
};

;// CONCATENATED MODULE: ./components/icons/index.js

















/***/ }),

/***/ 4889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Iv": () => (/* reexport */ SiteLayout),
  "A4": () => (/* reexport */ getLayout),
  "xg": () => (/* reexport */ page_getLayout),
  "$q": () => (/* reexport */ site_getLayout)
});

// UNUSED EXPORTS: ContentLayout, PageLayout

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(4466);
// EXTERNAL MODULE: ./components/svgs/index.js + 3 modules
var svgs = __webpack_require__(4422);
// EXTERNAL MODULE: ./components/icons/index.js + 14 modules
var icons = __webpack_require__(4430);
;// CONCATENATED MODULE: ./components/navigation.js








const defaultStyle = {
    transition: `all 150ms cubic-bezier(0.4, 0, 1, 1)`
};
const transitionStyles = {
    entering: {
        transform: 'scale(0.95)',
        opacity: 0,
        visibility: 'hidden'
    },
    entered: {
        transform: 'scale(1)',
        opacity: 1,
        visibility: 'visible'
    },
    exiting: {
        transform: 'scale(1)',
        opacity: 1,
        visibility: 'visible'
    },
    exited: {
        transform: 'scale(0.95)',
        opacity: 0,
        visibility: 'hidden'
    }
};
function Navigation({ pages  }) {
    const container = (0,external_react_.useRef)(null);
    const router = (0,router_.useRouter)();
    const { 0: mobileNavOpen , 1: setMobileNavOpen  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleOutsideClick = (event)=>{
            var ref;
            if (!(container === null || container === void 0 ? void 0 : (ref = container.current) === null || ref === void 0 ? void 0 : ref.contains(event.target))) {
                if (!mobileNavOpen) return;
                setMobileNavOpen(false);
            }
        };
        window.addEventListener('click', handleOutsideClick);
        return ()=>window.removeEventListener('click', handleOutsideClick)
        ;
    }, [
        mobileNavOpen,
        container
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleEscape = (event)=>{
            if (!mobileNavOpen) return;
            if (event.key === 'Escape') {
                setMobileNavOpen(false);
            }
        };
        document.addEventListener('keyup', handleEscape);
        return ()=>document.removeEventListener('keyup', handleEscape)
        ;
    }, [
        mobileNavOpen
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = ()=>setMobileNavOpen(false)
        ;
        router.events.on('routeChangeStart', handleRouteChange);
        return ()=>router.events.off('routeChangeStart', handleRouteChange)
        ;
    }, [
        router.events
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        ref: container,
        pos: "relative",
        bg: "white",
        boxShadow: "base",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_.Transition, {
                in: mobileNavOpen,
                timeout: 150,
                children: (state)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        borderRadius: "lg",
                        boxShadow: "lg",
                        bg: "white",
                        m: 2,
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        pos: "absolute",
                        top: "0",
                        right: "0",
                        left: "0",
                        zIndex: "docked",
                        transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
                        transformOrigin: "top right",
                        style: {
                            ...defaultStyle,
                            ...transitionStyles[state]
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            pt: 5,
                            pb: 6,
                            px: 5,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                                                            children: "GraphCMS"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                            as: svgs/* MarkSVG */.BG,
                                                            h: 8,
                                                            w: "auto",
                                                            color: "indigo.600"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            mr: -2,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                                                type: "button",
                                                bg: "white",
                                                borderRadius: "md",
                                                p: 2,
                                                display: "inline-flex",
                                                color: "gray.400",
                                                _hover: {
                                                    color: 'gray.500',
                                                    bg: 'gray.100'
                                                },
                                                onClick: ()=>setMobileNavOpen(false)
                                                ,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                                                        children: "Close menu"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                        as: icons.XIcon,
                                                        w: 6,
                                                        h: 6,
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    mt: 6,
                                    children: pages && pages.length && /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                                        as: "nav",
                                        gridRowGap: 8,
                                        children: pages.map((page)=>{
                                            const isActive = router.asPath.startsWith(`/${page.slug}`);
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `/${page.slug}`,
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                                    m: -3,
                                                    p: 3,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    borderRadius: "md",
                                                    color: isActive ? 'indigo.600' : 'inherit',
                                                    _hover: {
                                                        bg: 'gray.50'
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                        as: "span",
                                                        ml: 3,
                                                        fontSize: "md",
                                                        fontWeight: "medium",
                                                        color: "gray.900",
                                                        children: page.navigationLabel || page.slug.charAt(0).toUpperCase() + page.slug.slice(1)
                                                    })
                                                })
                                            }, page.id));
                                        })
                                    })
                                })
                            ]
                        })
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                maxW: "7xl",
                mx: "auto",
                px: [
                    4,
                    6
                ],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    display: "flex",
                    justifyContent: [
                        'space-between',
                        null,
                        'flex-start'
                    ],
                    alignItems: "center",
                    py: 6,
                    direction: "row",
                    spacing: {
                        md: 10
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                            w: {
                                lg: 0
                            },
                            flex: {
                                lg: '1 1 0'
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                                            children: "GraphCMS"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: svgs/* LogoSVG */.fP,
                                            h: 10,
                                            color: "indigo.600",
                                            w: "auto"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            mr: -2,
                            my: -2,
                            display: {
                                md: 'none'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Button, {
                                type: "button",
                                bg: "white",
                                borderRadius: "md",
                                p: 2,
                                display: "inline-flex",
                                color: "gray.400",
                                _hover: {
                                    color: 'gray.500',
                                    bg: 'gray.100'
                                },
                                onClick: ()=>setMobileNavOpen(true)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                                        children: "Open menu"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        as: icons.MenuIcon,
                                        w: 6,
                                        h: 6,
                                        "aria-hidden": "true"
                                    })
                                ]
                            })
                        }),
                        pages && pages.length && /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                            as: "nav",
                            display: [
                                'none',
                                null,
                                'flex'
                            ],
                            direction: "row",
                            spacing: 10,
                            children: pages.map((page)=>{
                                const isActive = router.asPath.startsWith(`/${page.slug}`);
                                return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/${page.slug}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                        fontSize: "md",
                                        fontWeight: "medium",
                                        color: isActive ? 'indigo.600' : 'gray.500',
                                        _hover: {
                                            color: 'gray.900'
                                        },
                                        children: page.navigationLabel || page.slug.charAt(0).toUpperCase() + page.slug.slice(1)
                                    })
                                }, page.id));
                            })
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/layout/content.js



function ContentLayout({ children , page  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                ...(page === null || page === void 0 ? void 0 : page.navigation) && {
                    ...page.navigation
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            })
        ]
    }));
};
const getLayout = (page)=>{
    return site_getLayout(/*#__PURE__*/ jsx_runtime_.jsx(ContentLayout, {
        ...page.props,
        children: page
    }));
};

// EXTERNAL MODULE: external "next-mdx-remote"
var external_next_mdx_remote_ = __webpack_require__(276);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/button.js
var components_button = __webpack_require__(2442);
;// CONCATENATED MODULE: ./components/hero.js






function Hero({ buttons , image , navigation , page  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        position: "relative",
        bg: "gray.50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                ...navigation
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                as: "main",
                position: {
                    lg: 'relative'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        mx: "auto",
                        maxW: "7xl",
                        w: "full",
                        py: {
                            lg: 48
                        },
                        pt: 16,
                        pb: 20,
                        textAlign: {
                            base: 'center',
                            lg: 'left'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            px: [
                                4,
                                8
                            ],
                            pr: {
                                xl: 16
                            },
                            width: {
                                lg: '50%'
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    as: "h1",
                                    fontSize: [
                                        '4xl',
                                        '5xl',
                                        '6xl',
                                        '5xl',
                                        '6xl'
                                    ],
                                    letterSpacing: "tight",
                                    lineHeight: "1",
                                    fontWeight: "extrabold",
                                    color: "gray.900",
                                    children: page.title
                                }),
                                page.subtitle && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    className: "prose prose-lg sm:prose-xl",
                                    mt: [
                                        3,
                                        null,
                                        5
                                    ],
                                    w: "full",
                                    maxW: [
                                        'md',
                                        null,
                                        '3xl'
                                    ],
                                    mx: "auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, {
                                        ...page.subtitle.mdx
                                    })
                                }),
                                buttons && /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                                    mt: 10,
                                    direction: [
                                        'column',
                                        'row'
                                    ],
                                    display: {
                                        sm: 'flex'
                                    },
                                    justifyContent: {
                                        sm: 'center',
                                        lg: 'flex-start'
                                    },
                                    spacing: [
                                        3,
                                        0
                                    ],
                                    children: buttons.map((button)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            sx: {
                                                ':nth-of-type(even)': {
                                                    mx: [
                                                        0,
                                                        3
                                                    ]
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                                                ...button
                                            })
                                        }, button.id)
                                    )
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        pos: {
                            base: 'relative',
                            lg: 'absolute'
                        },
                        w: {
                            base: 'full',
                            lg: '50%'
                        },
                        h: [
                            64,
                            72,
                            96,
                            'full'
                        ],
                        top: {
                            lg: 0
                        },
                        bottom: {
                            lg: 0
                        },
                        right: {
                            lg: 0
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            className: "hero-image",
                            src: image.url,
                            alt: image.title,
                            title: image.title,
                            layout: "fill",
                            priority: true,
                            objectFit: "cover"
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/marketing/banner.js



const themeColor = {
    WARNING: 'orange.600'
};
function Banner({ content , href , theme ='WARNING'  }) {
    if (!content || !href) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        bg: themeColor[theme] || 'indigo.600',
        color: themeColor[theme] || 'indigo.600',
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            maxW: 1280,
            mx: "auto",
            py: 3,
            px: [
                3,
                6,
                null,
                8
            ],
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        flex: "1 1 0",
                        alignItems: "center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontWeight: "medium",
                            color: "white",
                            children: content
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        w: [
                            'full',
                            'auto'
                        ],
                        order: [
                            3,
                            2
                        ],
                        mt: [
                            2,
                            0
                        ],
                        flexShrink: "0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            borderRadius: "md",
                            boxShadow: "sm",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                                href: href,
                                label: "Learn more",
                                size: "SMALL",
                                theme: "WHITE"
                            })
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/marketing/newsletter-signup.js


function NewsletterSignup({ ctaLabel , subtitle , title  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        bg: "white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            maxW: "7xl",
            mx: "auto",
            py: {
                base: 12,
                lg: 16
            },
            px: [
                4,
                6,
                null,
                8
            ],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    as: "h2",
                    fontSize: [
                        '3xl',
                        '4xl'
                    ],
                    lineHeight: "shorter",
                    fontWeight: "extrabold",
                    display: [
                        'inline',
                        'block'
                    ],
                    letterSpacing: "tight",
                    color: "gray.900",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontSize: [
                        '3xl',
                        '4xl'
                    ],
                    lineHeight: "shorter",
                    fontWeight: "extrabold",
                    display: [
                        'inline',
                        'block'
                    ],
                    letterSpacing: "tight",
                    color: "indigo.600",
                    children: subtitle
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    as: "form",
                    mt: 8,
                    display: {
                        sm: 'flex'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                            as: react_.FormLabel,
                            htmlFor: "emailAddress",
                            children: "Email address"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            id: "emailAddress",
                            name: "email",
                            type: "email",
                            autoComplete: "email",
                            required: true,
                            placeholder: "Enter your email",
                            width: "full",
                            height: "full",
                            maxW: {
                                sm: 'xs'
                            },
                            px: 5,
                            py: 3,
                            borderColor: "gray.300",
                            _placeholder: {
                                color: 'gray.500'
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            mt: [
                                3,
                                0
                            ],
                            ml: {
                                sm: 3
                            },
                            flexShrink: {
                                sm: 0
                            },
                            borderRadius: "md",
                            boxShadow: "md",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                type: "submit",
                                width: "full",
                                height: "full",
                                px: 5,
                                py: 3,
                                bg: "indigo.600",
                                color: "white",
                                _hover: {
                                    bg: 'indigo.700'
                                },
                                children: ctaLabel || 'Submit'
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/marketing/index.js



// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(7187);
;// CONCATENATED MODULE: ./components/layout/page.js








function PageLayout({ children , page  }) {
    var ref, ref1;
    const pageBanner = page === null || page === void 0 ? void 0 : (ref = page.marketing) === null || ref === void 0 ? void 0 : ref.find((block)=>block.__typename === 'Banner'
    );
    const pageNewsletter = page === null || page === void 0 ? void 0 : (ref1 = page.marketing) === null || ref1 === void 0 ? void 0 : ref1.find((block)=>block.__typename === 'Newsletter'
    );
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            (page === null || page === void 0 ? void 0 : page.seo) && /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                ...page.seo
            }),
            pageBanner && /*#__PURE__*/ jsx_runtime_.jsx(Banner, {
                ...pageBanner
            }),
            (page === null || page === void 0 ? void 0 : page.hero) ? /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
                ...page.hero,
                navigation: page.navigation,
                page: page
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                        ...page === null || page === void 0 ? void 0 : page.navigation
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        mx: "auto",
                        pt: 24,
                        px: [
                            4,
                            6,
                            null,
                            8
                        ],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            display: [
                                null,
                                'flex'
                            ],
                            flexDir: [
                                null,
                                'column'
                            ],
                            alignItems: [
                                null,
                                'center'
                            ],
                            textAlign: [
                                null,
                                'center'
                            ],
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    as: "h1",
                                    fontSize: "5xl",
                                    lineHeight: "none",
                                    fontWeight: "extrabold",
                                    color: "gray.900",
                                    children: page === null || page === void 0 ? void 0 : page.title
                                }),
                                (page === null || page === void 0 ? void 0 : page.subtitle) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                                    mt: 5,
                                    p: 0,
                                    centerContent: true,
                                    color: "gray.500",
                                    lineHeight: "tall",
                                    fontSize: "xl",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, {
                                        ...page.subtitle.mdx
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    children,
                    pageNewsletter && /*#__PURE__*/ jsx_runtime_.jsx(NewsletterSignup, {
                        ...pageNewsletter
                    })
                ]
            })
        ]
    }));
};
const page_getLayout = (page)=>{
    return site_getLayout(/*#__PURE__*/ jsx_runtime_.jsx(PageLayout, {
        ...page.props,
        children: page
    }));
};

// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__(1271);
// EXTERNAL MODULE: ./lib/_locales.js
var _locales = __webpack_require__(4074);
;// CONCATENATED MODULE: ./components/footer.js






function GridColumnHeading({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
        as: "h3",
        fontSize: "sm",
        fontWeight: "semibold",
        color: "gray.400",
        letterSpacing: "wider",
        textTransform: "uppercase",
        children: children
    }));
}
function GridColumn({ links , title  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GridColumnHeading, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                as: "ul",
                mt: 4,
                spacing: 4,
                children: links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/${link.slug}`,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                color: "gray.300",
                                _hover: {
                                    color: 'white'
                                },
                                children: link.navigationLabel || link.slug.charAt(0).toUpperCase() + link.slug.slice(1)
                            })
                        })
                    }, link.id)
                )
            })
        ]
    }));
}
function SocialMediaLink({ href , title , icon  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
        href: href,
        isExternal: true,
        color: "gray.400",
        _hover: {
            color: 'gray.300'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: icon,
                w: 6,
                h: 6
            })
        ]
    }));
}
function Footer({ primaryLinks , secondaryLinks  }) {
    const router = (0,router_.useRouter)();
    const activeLocale = _locales.locales.find((locale)=>locale.value === router.locale
    );
    const setLocale = (event)=>{
        router.push(router.asPath, router.asPath, {
            locale: event.target.value
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "footer",
        bg: "gray.800",
        "aria-labelledby": "footerHeading",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                as: "h2",
                id: "footerHeading",
                children: "Footer"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                maxW: "7xl",
                mx: "auto",
                py: {
                    base: 12,
                    lg: 16
                },
                px: [
                    4,
                    6,
                    null,
                    8
                ],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        pb: 8,
                        display: {
                            xl: 'grid'
                        },
                        gridTemplateColumns: {
                            xl: 'repeat(5, 1fr)'
                        },
                        gridGap: {
                            xl: 8
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gridGap: 8,
                                gridColumn: {
                                    xl: 'span 4 / span 4'
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridColumn, {
                                        links: primaryLinks.length && primaryLinks,
                                        title: "Primary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridColumn, {
                                        links: secondaryLinks.length && secondaryLinks,
                                        title: "Secondary"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                mt: {
                                    base: 12,
                                    xl: 0
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(GridColumnHeading, {
                                        children: "Language"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        as: "form",
                                        mt: 4,
                                        maxW: {
                                            sm: 'xs'
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                            as: "fieldset",
                                            w: "full",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                                                    as: react_.FormLabel,
                                                    htmlFor: "language",
                                                    children: "Language"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    position: "relative",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Select, {
                                                        id: "language",
                                                        name: "language",
                                                        color: "white",
                                                        bg: "gray.700",
                                                        borderColor: "transparent",
                                                        fontSize: {
                                                            sm: 'sm'
                                                        },
                                                        value: activeLocale.value,
                                                        onChange: setLocale,
                                                        children: _locales.locales.map((locale)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                                as: "option",
                                                                bg: "#374151!important",
                                                                color: "white",
                                                                value: locale.value,
                                                                children: locale.label
                                                            }, locale.value)
                                                        )
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        mt: 7,
                        pt: 8,
                        borderTopWidth: "1px",
                        borderColor: "gray.700",
                        display: {
                            md: 'flex'
                        },
                        alignItems: {
                            md: 'center'
                        },
                        justifyContent: {
                            md: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                direction: "row",
                                display: "flex",
                                spacing: 6,
                                order: {
                                    md: 2
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaLink, {
                                        title: "LinkedIn",
                                        icon: icons.LinkedInIcon,
                                        href: "https://linkedin.com/company/graphcms"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaLink, {
                                        title: "Slack",
                                        icon: icons.SlackIcon,
                                        href: "https://slack.graphcms.com"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaLink, {
                                        title: "Twitter",
                                        icon: icons.TwitterIcon,
                                        href: "https://twitter.com/GraphCMS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaLink, {
                                        title: "GitHub",
                                        icon: icons.GithubIcon,
                                        href: "https://github.com/GraphCMS/reference-nextjs-marketing"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                mt: [
                                    8,
                                    null,
                                    0
                                ],
                                fontSize: "md",
                                color: "gray.400",
                                order: {
                                    md: 1
                                },
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " GraphCMS GmbH All rights reserved."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/layout/site.js




function PreviewBanner({ enabled =false  }) {
    if (!enabled) return null;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_.Box, {
        textAlign: "center",
        p: "2",
        backgroundColor: "black",
        textColor: "white",
        children: [
            "Preview Mode Enabled (Content served from DRAFT) —\xa0",
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/api/exit-preview",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "Exit Preview Mode"
                })
            })
        ]
    }));
}
function SiteLayout({ children , page , preview =false  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_.Flex, {
        flexDir: "column",
        minH: "100vh",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PreviewBanner, {
                enabled: preview
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
                flexGrow: "1",
                children: children
            }),
            (page === null || page === void 0 ? void 0 : page.footer) && /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                ...page.footer
            })
        ]
    }));
};
const site_getLayout = (page)=>/*#__PURE__*/ jsx_runtime_.jsx(SiteLayout, {
        ...page.props,
        children: page
    })
;

;// CONCATENATED MODULE: ./components/layout/index.js





/***/ }),

/***/ 7187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5056);




function SEO({ id , image , keywords , noIndex: noindex = false , ...props }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const SEO1 = {
        ...keywords && {
            keywords: keywords.toString()
        },
        noindex,
        openGraph: {
            ...image && {
                images: [
                    {
                        alt: props.title,
                        ...image
                    }
                ]
            },
            url: _next_seo_config__WEBPACK_IMPORTED_MODULE_3__/* .defaultUrl */ .b + router.asPath,
            ...props
        },
        ...props
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
        ...SEO1
    }));
};


/***/ }),

/***/ 4422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Rj": () => (/* reexport */ Dots),
  "fP": () => (/* reexport */ Logo),
  "BG": () => (/* reexport */ Mark)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/svgs/dots.js

function Dots({ ...props }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 404 404",
        width: "404",
        height: "404",
        fill: "none",
        role: "img",
        "aria-labelledby": "svg-dots",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                id: "svg-dots",
                children: "Dots"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                    id: "ad119f34-7694-4c31-947f-5c9d249b21f3",
                    x: "0",
                    y: "0",
                    width: "20",
                    height: "20",
                    patternUnits: "userSpaceOnUse",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "0",
                        y: "0",
                        width: "4",
                        height: "4",
                        fill: "currentColor"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                width: "404",
                height: "404",
                fill: "url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/svgs/logo.js

function Logo({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 4400 1000",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M470.25 133.331L353.842 200.002L237.434 266.663L121.017 333.333V466.665V533.335V599.996V666.667V733.337L237.434 666.667L353.842 599.996V533.335V466.665L237.434 533.335V400.004L353.842 333.333L470.25 266.663V333.333V400.004V466.665V533.335V599.996V666.667L353.842 733.337L237.434 799.998L121.017 866.669L4.60938 933.33L121.017 1000L237.434 933.33L353.842 866.669L470.25 799.998L586.667 733.337V599.996V466.665V333.333V282.195V200.002V66.6705L470.25 0V133.331Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M1179.39 278.806H1280V679.546C1280 744.651 1259.64 794.324 1218.92 828.563C1176.97 863.241 1124.89 881.399 1071.64 879.916C1032.36 880.795 993.449 871.849 958.076 853.808C926.084 837.091 899.78 810.321 882.781 777.178L970.264 723.912C990.48 763.362 1025.34 783.089 1074.83 783.093C1107.28 783.093 1132.83 774.092 1151.46 756.092C1170.08 738.074 1179.39 712.475 1179.39 679.294V633.719C1149.06 676.373 1106.49 697.7 1051.68 697.7C998.254 698.972 946.845 676.158 910.32 634.969C872.722 594.126 852.21 539.064 853.381 482.117C852.39 425.286 873.047 370.414 910.718 329.812C947.075 288.577 998.333 265.629 1051.68 266.703C1106.49 266.703 1149.06 288.04 1179.39 330.716L1179.39 278.806ZM987.426 565.083C1033.07 608.326 1102.23 608.326 1147.87 565.083C1168.94 543.329 1180.38 513.221 1179.39 482.117C1180.28 451.281 1168.83 421.476 1147.87 399.992C1102.23 356.75 1033.07 356.75 987.426 399.992C966.455 421.473 955.012 451.28 955.897 482.117C954.905 513.221 966.347 543.332 987.426 565.083Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1450.59 344.409C1459.15 319.857 1476.19 299.181 1498.63 286.114C1521.35 273.056 1547.15 266.345 1573.33 266.679V383.107C1543.51 378.903 1513.18 385.847 1488.14 402.613C1463.11 419.38 1450.59 447.227 1450.59 486.155V680H1346.67V275.088H1450.59V344.409Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M1924 278.273H2026.67V681.728H1924V634.286C1893.12 673.651 1849.72 693.332 1793.8 693.328C1741.52 693.731 1691.64 671.2 1657.07 631.567C1619.12 590.564 1598.65 536.126 1600.07 480C1598.66 423.875 1619.13 369.438 1657.07 328.433C1691.65 288.804 1741.52 266.274 1793.8 266.672C1849.72 266.672 1893.12 286.353 1924 325.714L1924 278.273ZM1733.89 562.123C1754.69 583.449 1783.36 595.031 1812.97 594.076C1842.69 594.977 1871.46 583.412 1892.45 562.123C1913.69 540.299 1925.11 510.595 1924 480C1925.1 449.408 1913.69 419.708 1892.45 397.887C1871.46 376.595 1842.69 365.027 1812.97 365.924C1783.35 364.973 1754.69 376.558 1733.89 397.887C1712.87 419.823 1701.61 449.481 1702.73 480C1701.61 510.522 1712.86 540.184 1733.89 562.123Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M2325.4 266.676C2377.93 266.148 2428.1 289.089 2462.93 329.56C2500.87 371.31 2521.35 426.738 2519.93 483.883C2521.35 541.03 2500.88 596.459 2462.93 638.207C2428.11 678.682 2377.93 701.623 2325.4 701.091C2269.49 701.091 2226.35 681.1 2196 641.119V853.333H2093.33V278.488H2196V326.791C2226.35 286.721 2269.48 266.683 2325.4 266.676ZM2227.15 567.5C2247.96 589.214 2276.62 601.006 2306.23 600.034C2335.96 600.951 2364.72 589.176 2385.71 567.5C2406.96 545.279 2418.37 515.035 2417.27 483.883C2418.37 452.735 2406.96 422.494 2385.71 400.277C2364.72 378.598 2335.96 366.819 2306.23 367.733C2276.62 366.764 2247.95 378.56 2227.15 400.277C2206.13 422.612 2194.88 452.81 2196 483.883C2194.88 514.96 2206.13 545.162 2227.15 567.5V567.5Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2816.93 262.04C2859.07 260.762 2899.78 277.521 2929.06 308.197C2958.57 338.962 2973.33 381.475 2973.33 435.735V693.333L2866.74 693.333V448.983C2866.74 421.002 2859.27 399.592 2844.33 384.754C2828.21 369.454 2806.64 361.422 2784.56 362.496C2759.8 361.343 2735.69 370.794 2718.17 388.531C2701.56 405.881 2693.26 431.909 2693.27 466.615V693.333H2586.67V106.667H2693.27V320.639C2719.27 281.576 2760.5 262.043 2816.93 262.04Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3250.03 693.277C3190.56 694.595 3133.11 672.576 3090.95 632.313C3048.8 592.049 3025.59 537.028 3026.71 479.973C3027.28 403.455 3070.23 333.004 3139.47 295.015C3208.71 257.025 3293.79 257.231 3362.83 295.556C3394.98 313.539 3420.48 340.709 3435.75 373.269L3389.96 398.52C3378.61 374.045 3359.46 353.656 3335.26 340.286C3309.45 325.727 3279.97 318.257 3250.03 318.693C3205.39 317.793 3162.37 334.766 3131.3 365.537C3099.52 395.715 3082.05 437.085 3082.97 479.973C3082.05 522.864 3099.52 564.238 3131.3 594.419C3167.52 630.337 3219.33 647.681 3270.98 641.178C3322.63 634.674 3368.02 605.093 3393.35 561.425L3440 587.489C3422.63 619.887 3395.82 646.745 3362.83 664.795C3328.59 683.86 3289.62 693.701 3250.03 693.277Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3914.21 266.789C3955.62 265.099 3995.8 280.949 4024.68 310.373C4052.67 339.422 4066.66 378.697 4066.67 428.2V680H4012.62V428.139C4012.62 393.168 4003.54 366.127 3985.38 347.016C3966.65 327.679 3940.43 317.242 3913.4 318.36C3882.53 317.228 3852.69 329.457 3831.66 351.861C3810.78 374.202 3800.35 409.045 3800.36 456.393V680H3746.31V428.139C3746.31 392.624 3737.77 365.449 3720.69 346.613C3702.89 327.463 3677.42 317.116 3651.16 318.36C3619.96 317.814 3589.92 330.088 3568.2 352.264C3545.43 374.866 3534.04 409.576 3534.04 456.393V680H3480V276.459H3534.04V335.312C3559.71 291.623 3607.45 265.331 3658.48 266.789C3717.14 266.789 3758.43 291.245 3782.34 340.157C3811.64 291.245 3855.6 266.789 3914.21 266.789Z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4150.54 382.048C4150.29 399.87 4160.17 416.436 4176.38 425.391C4195.77 437.012 4216.88 445.812 4239.01 451.499C4263.51 458.191 4288.02 464.876 4312.54 471.554C4336.39 477.865 4357.9 490.412 4374.62 507.768C4392.05 526.639 4401.11 551.197 4399.89 576.283C4400.63 609.463 4384.5 640.947 4356.56 660.848C4327.73 682.512 4290.49 693.314 4244.85 693.255C4208.05 694.284 4171.71 685.206 4140.19 667.109C4112.92 651.413 4091.79 627.685 4080 599.529L4127.93 572.707C4135.71 593.685 4150.95 611.418 4171.03 622.835C4193.34 635.472 4218.96 641.855 4244.92 641.246C4269.32 642.087 4293.5 636.639 4314.91 625.481C4333.37 615.519 4344.3 596.478 4343.13 576.329C4343.45 558.418 4333.74 541.696 4317.62 532.417C4298.41 520.629 4277.4 511.749 4255.32 506.096C4230.81 499.404 4206.3 492.716 4181.79 486.03C4157.95 479.734 4136.37 467.375 4119.37 450.283C4101.8 431.944 4092.6 407.728 4093.78 382.947C4093.42 350.672 4108.78 320.052 4135.4 300.015C4164.96 277.197 4202.24 265.382 4240.28 266.778C4272.37 266.147 4304.02 273.922 4331.77 289.251C4357.19 303.361 4377.46 324.524 4389.86 349.901L4342.54 375.901C4326.09 337.891 4291.98 318.853 4240.22 318.786C4217.92 318.186 4195.94 323.884 4177.05 335.159C4159.97 345.103 4149.84 363.018 4150.54 382.048Z"
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/svgs/mark.js

function Mark({ ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 1000",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M678.974 133.331L562.566 200.002L446.158 266.663L329.741 333.333V466.665V533.335V599.996V666.667V733.337L446.158 666.667L562.566 599.996V533.335V466.665L446.158 533.335V400.004L562.566 333.333L678.974 266.663V333.333V400.004V466.665V533.335V599.996V666.667L562.566 733.337L446.158 799.998L329.741 866.669L213.333 933.33L329.741 1000L446.158 933.33L562.566 866.669L678.974 799.998L795.391 733.337V599.996V466.665V333.333V282.195V200.002V66.6705L678.974 0V133.331Z"
        })
    }));
};

;// CONCATENATED MODULE: ./components/svgs/index.js





/***/ }),

/***/ 4074:
/***/ ((module) => {


const locales = [
    {
        value: 'en',
        label: 'English',
        default: true
    },
    {
        value: 'de',
        label: 'German'
    }
];
module.exports = {
    locales
};


/***/ }),

/***/ 5056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ seo),
/* harmony export */   "b": () => (/* binding */ url)
/* harmony export */ });
const description = `Learn how to build modern marketing websites, with localization and SEO, using GraphCMS, NextJS, Chakra UI, and Vercel.`;
const title = `Build Modern Marketing Websites with a Headless CMS`;
const url = `https://marketing-websites.withheadlesscms.com`;
const seo = {
    title,
    titleTemplate: '%s | GraphCMS',
    description,
    openGraph: {
        description,
        title,
        type: 'website',
        url
    },
    twitter: {
        handle: '@GraphCMS',
        site: '@GraphCMS'
    }
};



/***/ })

};
;