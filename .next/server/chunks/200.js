"use strict";
exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Wrapper)
});

// NAMESPACE OBJECT: ./components/blocks/index.js
var blocks_namespaceObject = {};
__webpack_require__.r(blocks_namespaceObject);
__webpack_require__.d(blocks_namespaceObject, {
  "Breakpoint": () => (Breakpoint),
  "Grid": () => (Grid),
  "LogoCloud": () => (LogoCloud),
  "PricingPlanSection": () => (PricingPlanSection),
  "StatSection": () => (StatSection),
  "Testimonial": () => (Testimonial)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/button.js
var components_button = __webpack_require__(2442);
;// CONCATENATED MODULE: ./components/blocks/breakpoint.js



function Breakpoint({ buttons , subtitle , title  }) {
    if (!(buttons || buttons.length)) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        bg: "white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            maxW: "7xl",
            mx: "auto",
            py: [
                12,
                null,
                16,
                20
            ],
            px: [
                4,
                6,
                null,
                8
            ],
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Heading, {
                    as: "h2",
                    fontSize: [
                        '3xl',
                        '4xl'
                    ],
                    fontWeight: "extrabold",
                    letterSpacing: "tight",
                    color: "gray.900",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            as: "span",
                            display: "block",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            as: "span",
                            display: "block",
                            color: "indigo.600",
                            children: subtitle
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                    display: "flex",
                    direction: "row",
                    mt: 8,
                    spacing: 3,
                    children: buttons.map((button)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            display: "inline-flex",
                            borderRadius: "md",
                            boxShadow: "md",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                                ...button
                            })
                        }, button.id)
                    )
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "next-mdx-remote"
var external_next_mdx_remote_ = __webpack_require__(276);
// EXTERNAL MODULE: ./components/blocks/columns/index.js + 6 modules
var blocks_columns = __webpack_require__(257);
// EXTERNAL MODULE: ./components/svgs/index.js + 3 modules
var svgs = __webpack_require__(4422);
;// CONCATENATED MODULE: ./components/blocks/grid.js





function Grid({ children , columnComponent , columns , gridHeadline , gridSubtitle , gridTag , gridTitle , layout ='STACKED' , theme ='WHITE' , width =1  }) {
    if (!columns || !columns.length) return null;
    const stackLayout = layout === 'STACK';
    const splitLayout = layout === 'SPLIT';
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        overflow: "hidden",
        bg: theme === 'LIGHT' ? 'gray.50' : 'white',
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            pos: "relative",
            maxW: "7xl",
            mx: "auto",
            py: 12,
            px: [
                4,
                6,
                null,
                8
            ],
            children: [
                splitLayout && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    as: svgs/* DotsSVG */.Rj,
                    color: "gray.200",
                    position: "absolute",
                    display: {
                        base: 'none',
                        lg: 'block'
                    },
                    top: "100%",
                    right: "100%",
                    left: "auto",
                    transform: "translate(66.66%, -75%)"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    position: "relative",
                    display: {
                        lg: splitLayout && 'grid'
                    },
                    gridColumnGap: {
                        lg: splitLayout && 8
                    },
                    gridTemplateColumns: {
                        lg: splitLayout && 'repeat(3, 1fr)'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            textAlign: {
                                lg: stackLayout && 'center'
                            },
                            gridColumn: {
                                lg: splitLayout && 'span 1 / span 1'
                            },
                            children: [
                                gridHeadline && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    as: "h2",
                                    fontSize: "md",
                                    fontWeight: "semibold",
                                    color: "indigo.600",
                                    textTransform: "uppercase",
                                    letterSpacing: "wide",
                                    children: gridHeadline
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    mt: 2,
                                    fontSize: [
                                        '3xl',
                                        '4xl'
                                    ],
                                    fontWeight: "extrabold",
                                    letterSpacing: "tight",
                                    lineHeight: "9",
                                    color: "gray.900",
                                    children: gridTitle
                                }),
                                gridSubtitle && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    mt: 4,
                                    maxW: "2xl",
                                    fontSize: "xl",
                                    color: "gray.500",
                                    mx: {
                                        lg: 'auto'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, {
                                        ...gridSubtitle.mdx
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                            as: gridTag || 'dl',
                            mt: {
                                base: 10,
                                lg: splitLayout && 0
                            },
                            spacing: [
                                10,
                                0
                            ],
                            display: {
                                sm: 'grid'
                            },
                            gridColumnGap: {
                                sm: 8
                            },
                            gridRowGap: {
                                sm: 10
                            },
                            gridColumn: {
                                lg: 'span 2 / span 2'
                            },
                            gridTemplateColumns: {
                                base: 'repeat(1, 1fr)',
                                lg: `repeat(${width}, 1fr)`
                            },
                            children: children ? children() : columns.map((column)=>{
                                const Component = blocks_columns[columnComponent] || blocks_columns[column.__typename];
                                if (!Component) return null;
                                return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...column
                                }, column.id));
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/blocks/logo-cloud.js



function LogoCloud({ companies , logoCloudTitle  }) {
    if (!(logoCloudTitle || companies || companies.length)) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        bg: "indigo.700",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            maxW: "7xl",
            mx: "auto",
            py: [
                16,
                20
            ],
            px: [
                4,
                6,
                null,
                8
            ],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    as: "h2",
                    fontSize: "3xl",
                    fontWeight: "extrabold",
                    color: "white",
                    children: logoCloudTitle
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    display: "flow-root",
                    mt: {
                        base: 8,
                        lg: 10
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        mt: -4,
                        ml: {
                            base: -8,
                            lg: -4
                        },
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        children: companies.map((company)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                mt: 4,
                                ml: {
                                    base: 8,
                                    lg: 4
                                },
                                flexGrow: {
                                    base: 1,
                                    lg: 0
                                },
                                flexShrink: "0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    pos: "relative",
                                    w: 44,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: company.logo.url,
                                        height: company.logo.height,
                                        width: company.logo.width,
                                        layout: "responsive",
                                        alt: company.logo.title
                                    })
                                })
                            }, company.id)
                        )
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/blocks/pricing-plan-section.js





function PricingButton({ isActive , children , ...rest }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        type: "button",
        pos: "relative",
        border: "1px solid",
        borderRadius: "md",
        py: 2,
        w: [
            '50%',
            'auto'
        ],
        fontSize: "sm",
        fontWeight: "medium",
        color: "gray.700",
        whiteSpace: "nowrap",
        px: {
            sm: 8
        },
        bg: isActive && 'white',
        shadow: isActive && 'sm',
        borderColor: isActive ? 'gray.200' : 'transparent',
        ...rest,
        children: children
    }));
}
function PricingPlanSection({ page , ...grid }) {
    const { 0: billingPeriod , 1: setBillingPeriod  } = (0,external_react_.useState)('annual');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                px: [
                    4,
                    6,
                    null,
                    8
                ],
                display: {
                    sm: 'flex'
                },
                flexDirection: {
                    sm: 'column'
                },
                alignItems: {
                    sm: 'center'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: "row",
                    spacing: 2,
                    display: "flex",
                    position: "relative",
                    mt: [
                        6,
                        8
                    ],
                    bg: "gray.100",
                    borderRadius: "lg",
                    p: "2px",
                    alignSelf: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(PricingButton, {
                            isActive: billingPeriod === 'monthly',
                            onClick: ()=>setBillingPeriod('monthly')
                            ,
                            children: "Monthly billing"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PricingButton, {
                            isActive: billingPeriod === 'annual',
                            onClick: ()=>setBillingPeriod('annual')
                            ,
                            children: "Annual billing"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Grid, {
                ...grid,
                children: ()=>grid.columns.map((column)=>/*#__PURE__*/ jsx_runtime_.jsx(blocks_columns.PricingPlanCard, {
                            ...column,
                            billingPeriod
                        }, column.id)
                    )
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/blocks/stat-section.js



function StatSection({ columns , gridSubtitle , gridTitle , ...props }) {
    if (!(columns || columns.length)) return null;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        bg: "gray.50",
        pt: [
            12,
            16
        ],
        children: [
            (gridTitle || gridSubtitle) && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                maxW: "7xl",
                mx: "auto",
                px: [
                    4,
                    6,
                    null,
                    8
                ],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    maxW: "4xl",
                    mx: "auto",
                    textAlign: "center",
                    children: [
                        gridTitle && /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            as: "h2",
                            fontSize: [
                                '3xl',
                                '4xl'
                            ],
                            fontWeight: "extrabold",
                            color: "gray.900",
                            children: gridTitle
                        }),
                        gridSubtitle && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            mt: [
                                3,
                                4
                            ],
                            mx: "auto",
                            className: "prose prose-xl",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, {
                                ...gridSubtitle.mdx
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                mt: 10,
                pb: [
                    12,
                    16
                ],
                bg: "white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    pos: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            pos: "absolute",
                            inset: "0",
                            h: "50%",
                            bg: "gray.50"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            pos: "relative",
                            maxW: "7xl",
                            mx: "auto",
                            px: [
                                4,
                                6,
                                null,
                                8
                            ],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                maxW: "4xl",
                                mx: "auto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    as: "dl",
                                    borderRadius: "lg",
                                    bg: "white",
                                    boxShadow: "lg",
                                    display: {
                                        sm: 'grid'
                                    },
                                    gridTemplateColumns: {
                                        sm: 'repeat(3, 1fr)'
                                    },
                                    children: columns.map((column, index)=>{
                                        const firstColumn = index === 0;
                                        const lastColumn = index === columns.length - 1;
                                        const hasColumn = firstColumn || lastColumn;
                                        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                            flexDirection: "column",
                                            borderColor: "gray.100",
                                            p: 6,
                                            textAlign: "center",
                                            borderBottomWidth: [
                                                '1px',
                                                !hasColumn ? '1px' : '0px'
                                            ],
                                            borderRightWidth: {
                                                sm: firstColumn || !hasColumn ? '1px' : 0
                                            },
                                            borderTopWidth: lastColumn || !hasColumn && '1px',
                                            borderLeftWidth: {
                                                sm: lastColumn || !hasColumn ? '1px' : 0
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    as: "dt",
                                                    order: "2",
                                                    mt: 2,
                                                    fontSize: "lg",
                                                    lineHeight: "6",
                                                    fontWeight: "medium",
                                                    color: "gray.500",
                                                    children: column.label
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    as: "dd",
                                                    order: "1",
                                                    fontSize: "5xl",
                                                    fontWeight: "extrabold",
                                                    color: "indigo.600",
                                                    children: column.value
                                                })
                                            ]
                                        }, column.id));
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/icons/index.js + 14 modules
var icons = __webpack_require__(4430);
;// CONCATENATED MODULE: ./components/blocks/testimonial.js






function Testimonial({ content , person  }) {
    if (!person) return null;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "section",
        py: [
            12,
            null,
            20,
            24
        ],
        bg: "gray.50",
        overflow: "hidden",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            pos: "relative",
            maxW: "7xl",
            mx: "auto",
            px: [
                4,
                6,
                null,
                8
            ],
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    as: svgs/* DotsSVG */.Rj,
                    pos: "absolute",
                    top: "100%",
                    right: "100%",
                    color: "gray.200",
                    transform: {
                        base: 'translate(33.33%, -25%)',
                        lg: 'translate(50%, -25%)',
                        xl: 'translate(50%, -50%)'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    pos: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            h: 8,
                            pos: "relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: person.company.logo.url,
                                alt: person.company.logo.title,
                                layout: "fill"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            as: "blockquote",
                            mt: 10,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    maxW: "3xl",
                                    mx: "auto",
                                    textAlign: "center",
                                    fontSize: "2xl",
                                    lineHeight: "9",
                                    fontWeight: "medium",
                                    color: "gray.900",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_mdx_remote_.MDXRemote, {
                                        ...content.mdx
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    as: "footer",
                                    mt: 8,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                        display: {
                                            md: 'flex'
                                        },
                                        alignItems: {
                                            md: 'center'
                                        },
                                        justifyContent: {
                                            md: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                flexShrink: {
                                                    md: 0
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    mx: "auto",
                                                    h: 10,
                                                    w: 10,
                                                    position: "relative",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        className: "avatar",
                                                        alt: `${person.name} photo`,
                                                        src: person.photo.url,
                                                        layout: "fill"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                                mt: [
                                                    3,
                                                    null,
                                                    0
                                                ],
                                                ml: {
                                                    md: 4
                                                },
                                                textAlign: "center",
                                                display: {
                                                    md: 'flex'
                                                },
                                                alignItems: {
                                                    md: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                        fontWeight: "medium",
                                                        color: "gray.900",
                                                        children: person.name
                                                    }),
                                                    person.role && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                                as: icons.SlashIcon,
                                                                display: [
                                                                    'none',
                                                                    null,
                                                                    'block'
                                                                ],
                                                                mx: 1,
                                                                h: 5,
                                                                w: 5,
                                                                color: "indigo.600"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                                                fontWeight: "medium",
                                                                color: "gray.500",
                                                                children: [
                                                                    person.role,
                                                                    ", ",
                                                                    person.company.name
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/blocks/index.js







;// CONCATENATED MODULE: ./components/wrapper.js


function Wrapper({ banner , blocks , hero , navigation , ...page }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: blocks.map((block)=>{
            const Component = blocks_namespaceObject[block.component] || blocks_namespaceObject[block.__typename];
            if (!Component) return null;
            return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                page: page,
                ...block
            }, block.id));
        })
    }));
};


/***/ })

};
;