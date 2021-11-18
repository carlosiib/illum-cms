"use strict";
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BlogPostCard": () => (/* reexport */ BlogPostCard),
  "FAQCard": () => (/* reexport */ FAQCard),
  "FeatureCheck": () => (/* reexport */ FeatureCheck),
  "FeatureIcon": () => (/* reexport */ FeatureIcon),
  "PersonCard": () => (/* reexport */ PersonCard),
  "PricingPlanCard": () => (/* reexport */ PricingPlanCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "lodash.startcase"
var external_lodash_startcase_ = __webpack_require__(5970);
var external_lodash_startcase_default = /*#__PURE__*/__webpack_require__.n(external_lodash_startcase_);
;// CONCATENATED MODULE: ./components/blocks/columns/blog-post-card.js





function BlogPostCard({ authors , category , coverImage , excerpt , formattedPublished , published , slug , title  }) {
    const [primaryAuthor, ...secondaryAuthors] = authors;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        flexDir: "column",
        borderRadius: "lg",
        boxShadow: "lg",
        overflow: "hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                flexShrink: "0",
                children: coverImage && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    className: "blog-post-card-image",
                    src: coverImage.url,
                    alt: coverImage.title,
                    title: coverImage.title,
                    width: coverImage.width,
                    height: coverImage.height,
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                display: "flex",
                flex: "1 1 0",
                bg: "white",
                p: 6,
                flexDirection: "column",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        flex: "1 1 0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "sm",
                                fontWeight: "medium",
                                color: "indigo.600",
                                children: external_lodash_startcase_default()(category.toLowerCase())
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/blog/${slug}`,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                                    display: "block",
                                    mt: 2,
                                    _hover: {
                                        textDecor: 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            fontSize: "xl",
                                            fontWeight: "semibold",
                                            color: "gray.900",
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            mt: 3,
                                            fontSize: "md",
                                            color: "gray.500",
                                            children: excerpt
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        alignItems: "center",
                        mt: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                                direction: "row",
                                display: "flex",
                                spacing: -2,
                                pos: "relative",
                                zIndex: "0",
                                overflow: "hidden",
                                children: authors.map((author)=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        display: "inline-block",
                                        w: 9,
                                        h: 9,
                                        pos: "relative",
                                        borderRadius: "full",
                                        border: "2px solid white",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            className: "avatar",
                                            src: author.photo.url,
                                            alt: author.name,
                                            title: author.name,
                                            layout: "fill"
                                        })
                                    }, author.id));
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                ml: 3,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        fontSize: "sm",
                                        fontWeight: "medium",
                                        color: "gray.900",
                                        children: [
                                            (primaryAuthor === null || primaryAuthor === void 0 ? void 0 : primaryAuthor.name) ?? 'No author',
                                            secondaryAuthors && secondaryAuthors.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                as: "span",
                                                ml: 1,
                                                children: [
                                                    "+ ",
                                                    Number(secondaryAuthors.length),
                                                    " other"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                                        display: "flex",
                                        direction: "row",
                                        spacing: 1,
                                        fontSize: "sm",
                                        color: "gray.500",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                            dateTime: published,
                                            children: formattedPublished
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

// EXTERNAL MODULE: external "next-mdx-remote"
var external_next_mdx_remote_ = __webpack_require__(276);
;// CONCATENATED MODULE: ./components/blocks/columns/faq-card.js



function FAQCard({ content , title  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "dt",
                fontSize: "lg",
                lineHeight: "6",
                fontWeight: "medium",
                color: "gray.900",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "dd",
                mt: 2,
                className: "prose",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, {
                    ...content.mdx
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/icons/index.js + 14 modules
var icons = __webpack_require__(4430);
;// CONCATENATED MODULE: ./components/blocks/columns/feature-check.js




function FeatureCheck({ content , title  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: icons.CheckIcon,
                flexShrink: "0",
                w: 6,
                h: 6,
                color: "green.500",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                ml: 3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "dt",
                        fontSize: "lg",
                        lineHeight: "6",
                        fontWeight: "medium",
                        color: "gray.900",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "dd",
                        mt: 2,
                        className: "prose",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, {
                            ...content.mdx
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "lodash.camelcase"
var external_lodash_camelcase_ = __webpack_require__(4232);
var external_lodash_camelcase_default = /*#__PURE__*/__webpack_require__.n(external_lodash_camelcase_);
;// CONCATENATED MODULE: ./components/blocks/columns/feature-icon.js






function FeatureIcon({ content , icon , title  }) {
    const IconComponent = icons[`${external_lodash_startcase_default()(external_lodash_camelcase_default()(icon))}Icon`] || icons.DefaultIcon;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                alignItems: "center",
                justifyContent: "center",
                h: 12,
                w: 12,
                borderRadius: "md",
                bg: "indigo.500",
                color: "white",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    as: IconComponent,
                    w: 6,
                    h: 6,
                    "aria-hidden": "true"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                mt: 5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "dt",
                        fontSize: "lg",
                        lineHeight: "6",
                        fontWeight: "medium",
                        color: "gray.900",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "dd",
                        mt: 2,
                        className: "prose",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, {
                            ...content.mdx
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/blocks/columns/person-card.js




function PersonCard({ name , photo , role  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
            display: "flex",
            alignItems: "center",
            spacing: {
                base: 4,
                lg: 6
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    bg: "gray.100",
                    w: {
                        base: 16,
                        lg: 20
                    },
                    h: {
                        base: 16,
                        lg: 20
                    },
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "full",
                    children: photo ? /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        className: "avatar",
                        src: photo.url,
                        alt: name,
                        title: name,
                        layout: "fill"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: icons.AvatarIcon,
                        h: "full",
                        w: "full",
                        color: "gray.300"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    fontWeight: "medium",
                    fontSize: "lg",
                    lineHeight: "6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: name
                        }),
                        role && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            color: "indigo.600",
                            mt: 1,
                            children: role
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/blocks/columns/pricing-plan-card.js



function PricingPlanCard({ annualPrice , billingPeriod , description , included , monthlyPrice , name  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        border: "1px solid",
        borderColor: "gray.200",
        borderRadius: "lg",
        boxShadow: "sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                p: 6,
                borderBottom: "1px solid",
                borderColor: "gray.200",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h2",
                        fontSize: "lg",
                        lineHeight: "6",
                        fontWeight: "medium",
                        color: "gray.900",
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        mt: 4,
                        fontSize: "sm",
                        lineHeight: "5",
                        color: "gray.500",
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        mt: 8,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                as: "span",
                                fontWeight: "extrabold",
                                fontSize: "4xl",
                                lineHeight: "shorter",
                                color: "gray.900",
                                children: new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0
                                }).format(billingPeriod === 'monthly' ? monthlyPrice : annualPrice)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                as: "span",
                                fontSize: "md",
                                fontWeight: "medium",
                                color: "gray.500",
                                children: billingPeriod === 'monthly' ? '/mo' : '/yr'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Link, {
                        href: "#",
                        mt: 8,
                        display: "block",
                        w: "full",
                        bg: "indigo.600",
                        border: "1px solid transparent",
                        borderRadius: "md",
                        py: 2,
                        fontSize: "sm",
                        fontWeight: "semibold",
                        color: "white",
                        textAlign: "center",
                        _hover: {
                            bg: 'indigo.700'
                        },
                        children: [
                            "Buy ",
                            name
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                pt: 6,
                pb: 8,
                px: 6,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h3",
                        fontSize: "xs",
                        fontWeight: "medium",
                        color: "gray.900",
                        letterSpacing: "wide",
                        textTransform: "uppercase",
                        children: "What's included"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                        as: "ul",
                        mt: 6,
                        spacing: 4,
                        children: included.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                as: "li",
                                display: "flex",
                                spacing: 3,
                                direction: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        as: icons.CheckIcon,
                                        flexShrink: "0",
                                        w: 5,
                                        h: 5,
                                        color: "green.500",
                                        "aria-hidden": "true"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        as: "span",
                                        fontSize: "sm",
                                        color: "gray.500",
                                        children: feature
                                    })
                                ]
                            }, index)
                        )
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/blocks/columns/index.js








/***/ }),

/***/ 5932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ parsePageData)
});

// EXTERNAL MODULE: external "next-mdx-remote/serialize"
var serialize_ = __webpack_require__(7112);
// EXTERNAL MODULE: external "he"
var external_he_ = __webpack_require__(1604);
var external_he_default = /*#__PURE__*/__webpack_require__.n(external_he_);
;// CONCATENATED MODULE: ./utils/_parseColumnsMdx.js


const parseColumnsMdx = async (columns)=>await Promise.all(columns.map(async ({ content , ...column })=>({
            ...content && {
                content: {
                    markdown: content,
                    mdx: await (0,serialize_.serialize)(external_he_default().decode(content))
                }
            },
            ...column
        })
    ))
;


;// CONCATENATED MODULE: ./utils/_parseBlocksMdx.js



const parseBlocksMdx = async (blocks)=>await Promise.all(blocks.map(async ({ columns , content , gridSubtitle , ...block })=>({
            ...gridSubtitle && {
                gridSubtitle: {
                    markdown: gridSubtitle,
                    mdx: await (0,serialize_.serialize)(external_he_default().decode(gridSubtitle))
                }
            },
            ...content && {
                content: {
                    markdown: content,
                    mdx: await (0,serialize_.serialize)(external_he_default().decode(content))
                }
            },
            ...block,
            ...columns && columns.length && {
                columns: await parseColumnsMdx(columns)
            }
        })
    ))
;


;// CONCATENATED MODULE: ./utils/_parsePageData.js



const parsePageData = async ({ blocks , subtitle , ...page })=>({
        ...blocks && {
            blocks: await parseBlocksMdx(blocks)
        },
        ...subtitle && {
            subtitle: {
                markdown: subtitle,
                mdx: await (0,serialize_.serialize)(external_he_default().decode(subtitle))
            }
        },
        ...page
    })
;



/***/ })

};
;