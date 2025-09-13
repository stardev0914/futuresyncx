(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    75557: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(70868);
        },
      ]);
    },
    70868: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return J;
          },
        });
      var r = t(85893),
        s = t(67294),
        n = t(9008),
        o = t.n(n),
        i = t(36465),
        l = t.n(i),
        c = t(41664),
        d = t.n(c),
        f = t(2777),
        m = t(73799),
        x = t(83454);
      let p = "FUTURESYNCX",
        b = "0x0000000000000000000000000000000000000000",
        u = "https://etherscan.io/address/";
      x.env.NEXT_PUBLIC_DOMAIN_URL;
      let g = (e) => {
          let { isDarkMode: a, toggleDarkMode: t } = e,
            [n, o] = (0, s.useState)(!1),
            [i, c] = (0, s.useState)(0),
            [x, g] = (0, s.useState)(!1),
            [k, y] = (0, s.useState)(null),
            [j, w] = (0, s.useState)(!1),
            [v, N] = (0, s.useState)(!1),
            z = (0, s.useRef)(null),
            C = (0, s.useRef)(null),
            E = (0, s.useRef)(null),
            M = () => {
              o(!n);
            };
          (0, s.useEffect)(() => {
            let e = (e) => {
              C.current && !C.current.contains(e.target) && y(null);
            };
            return (
              document.addEventListener("mousedown", e),
              () => document.removeEventListener("mousedown", e)
            );
          }, []);
          let L = (e) => {
              clearTimeout(z.current), y(e);
            },
            S = () => {
              z.current = setTimeout(() => {
                y(null);
              }, 300);
            };
          (0, s.useEffect)(() => {
            let e = () => {
              let e = window.pageYOffset;
              c(e),
                e > 50 && !x
                  ? (N(!0),
                    g(!0),
                    E.current && clearTimeout(E.current),
                    (E.current = setTimeout(() => {
                      N(!1);
                    }, 500)))
                  : e <= 50 &&
                    x &&
                    (N(!0),
                    E.current && clearTimeout(E.current),
                    (E.current = setTimeout(() => {
                      g(!1), N(!1);
                    }, 300))),
                w(e > 50);
            };
            return (
              e(),
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e),
                  E.current && clearTimeout(E.current);
              }
            );
          }, [x]);
          let D = {
            ecosystem: {
              title: "Ecosystem",
              columns: [
                {
                  title: "Core Technology",
                  links: [
                    {
                      icon: (0, r.jsx)(f.orK, { className: "text-[#EA489B]" }),
                      label: "Staking",
                      href: "/dashboard/?ref=staking",
                    },
                    {
                      icon: (0, r.jsx)(f.yG, { className: "text-indigo-500" }),
                      label: "Dashboard",
                      href: "/dashboard",
                    },
                    {
                      icon: (0, r.jsx)(f.fzv, { className: "text-[#EA489B]" }),
                      label: "Account",
                      href: "/dashboard/?ref=user-dashboard",
                    },
                  ],
                },
                {
                  title: "Applications",
                  links: [
                    {
                      icon: (0, r.jsx)(f.LbG, { className: "text-[#EA489B]" }),
                      label: "Transfer",
                      href: "/dashboard/?ref=token-transfer",
                    },
                    {
                      icon: (0, r.jsx)(f.oQC, { className: "text-indigo-500" }),
                      label: "Buy Token",
                      href: "/dashboard/?ref=token-sale",
                    },
                    {
                      icon: (0, r.jsx)(f.dyY, { className: "text-[#EA489B]" }),
                      label: "Transaction",
                      href: "/dashboard/?ref=transaction",
                    },
                  ],
                },
                {
                  title: "Community",
                  links: [
                    {
                      icon: (0, r.jsx)(f.NOg, { className: "text-[#EA489B]" }),
                      label: "Documentation",
                      href: "/dashboard/?ref=token-documentation",
                    },
                    {
                      icon: (0, r.jsx)(f.bGz, { className: "text-indigo-500" }),
                      label: "Governance",
                      href: "https://company-32.gitbook.io/future-sync-x/documentation/whitepaper/decentralized-governance",
                    },
                    {
                      icon: (0, r.jsx)(f.tUt, { className: "text-[#EA489B]" }),
                      label: "Support",
                      href: "/dashboard/?ref=contact-us",
                    },
                  ],
                },
              ],
              featuredBox: {
                title: "Join Our Community",
                description:
                  "Be part of the FutureSyncX revolution and help shape the future of AI-driven blockchain.",
                linkText: "Join Telegram",
                linkUrl: "https://t.me/futuresyncx",
                bgClass: a ? "bg-indigo-500/10" : "bg-indigo-100/60",
              },
            },
            resources: {
              title: "Resources",
              columns: [
                {
                  title: "Learn",
                  links: [
                    {
                      icon: (0, r.jsx)(f.NOg, { className: "text-[#EA489B]" }),
                      label: "Whitepaper",
                      href: "https://futuresyncx.gitbook.io/",
                    },
                    {
                      icon: (0, r.jsx)(f.MIl, { className: "text-indigo-500" }),
                      label: "Roadmap",
                      href: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/roadmap",
                    },
                    {
                      icon: (0, r.jsx)(f.yK7, { className: "text-[#EA489B]" }),
                      label: "Documentation",
                      href: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/tokenomics",
                    },
                  ],
                },
                {
                  title: "Contract",
                  links: [
                    {
                      icon: (0, r.jsx)(f.dyY, { className: "text-[#EA489B]" }),
                      label: "ICO Contract",
                      href: "".concat(u).concat(b),
                    },
                    {
                      icon: (0, r.jsx)(f.bGz, { className: "text-indigo-500" }),
                      label: "FSX Contract",
                      href: "".concat("https://etherscan.io/token/").concat(b),
                    },
                    {
                      icon: (0, r.jsx)(f.Par, { className: "text-[#EA489B]" }),
                      label: "Address",
                      href: "".concat(u).concat(b),
                    },
                  ],
                },
              ],
              featuredBox: {
                title: "Presale Now Live",
                description:
                  "Access merchant resources and start growing your business on the FutureSyncx Ecosystem.",
                linkText: "Participate",
                linkUrl: "/dashboard/?ref=token-sale",
                bgClass: a ? "bg-indigo-500/10" : "bg-indigo-100/60",
              },
            },
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("header", {
                ref: C,
                className:
                  "jsx-511b3787dc4ea438 " +
                  "w-full transition-all duration-500 ease-out "
                    .concat(
                      x
                        ? "fixed top-0 left-0 z-50 w-full shadow-lg border-b"
                        : "fixed top-0 left-0 z-50 w-full border-b",
                      " "
                    )
                    .concat(
                      a
                        ? "bg-[#0E0B12] backdrop-blur-md border-gray-800/50"
                        : "bg-white backdrop-blur-md border-gray-200/50",
                      " "
                    )
                    .concat(x && v ? "animate-headerSlideDown" : ""),
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "jsx-511b3787dc4ea438 container mx-auto px-4 py-4 flex justify-between items-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "jsx-511b3787dc4ea438 flex items-center",
                        children: (0, r.jsxs)(d(), {
                          href: "/",
                          className: "flex items-center group",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-511b3787dc4ea438 relative w-10 h-10 mr-3 overflow-hidden",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-511b3787dc4ea438 absolute inset-0 ",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-511b3787dc4ea438 absolute inset-1 flex items-center justify-center",
                                  children: (0, r.jsx)("img", {
                                    src: "/futuresyncx-circle-black.png",
                                    alt: "Logo",
                                    className:
                                      "jsx-511b3787dc4ea438 w-6 h-6 object-contain",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("span", {
                              className:
                                "jsx-511b3787dc4ea438 " +
                                "text-xl font-bold transition-colors duration-300 ".concat(
                                  a ? "text-white" : "text-gray-900",
                                  " group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#EA489B] group-hover:to-indigo-500"
                                ),
                              children: p,
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)("nav", {
                        className:
                          "jsx-511b3787dc4ea438 hidden lg:flex lg:flex items-center space-x-6",
                        children: [
                          (0, r.jsx)("div", {
                            onMouseEnter: () => L("ecosystem"),
                            onMouseLeave: S,
                            className: "jsx-511b3787dc4ea438 relative group",
                            children: (0, r.jsxs)("button", {
                              onClick: () =>
                                y("ecosystem" === k ? null : "ecosystem"),
                              className:
                                "jsx-511b3787dc4ea438 " +
                                "flex items-center space-x-1 py-2 px-1 transition-colors "
                                  .concat(
                                    a
                                      ? "text-gray-300 hover:text-[#EA489B]"
                                      : "text-gray-700 hover:text-[#EA489B]",
                                    " "
                                  )
                                  .concat(
                                    "ecosystem" === k ? "text-[#EA489B]" : ""
                                  ),
                              children: [
                                (0, r.jsx)("span", {
                                  className: "jsx-511b3787dc4ea438",
                                  children: "Ecosystem",
                                }),
                                (0, r.jsx)(f.bTu, {
                                  className:
                                    "transition-transform duration-300 ".concat(
                                      "ecosystem" === k ? "rotate-180" : ""
                                    ),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            onMouseEnter: () => L("resources"),
                            onMouseLeave: S,
                            className: "jsx-511b3787dc4ea438 relative group",
                            children: (0, r.jsxs)("button", {
                              onClick: () =>
                                y("resources" === k ? null : "resources"),
                              className:
                                "jsx-511b3787dc4ea438 " +
                                "flex items-center space-x-1 py-2 px-1 transition-colors "
                                  .concat(
                                    a
                                      ? "text-gray-300 hover:text-[#EA489B]"
                                      : "text-gray-700 hover:text-[#EA489B]",
                                    " "
                                  )
                                  .concat(
                                    "resources" === k ? "text-[#EA489B]" : ""
                                  ),
                              children: [
                                (0, r.jsx)("span", {
                                  className: "jsx-511b3787dc4ea438",
                                  children: "Resources",
                                }),
                                (0, r.jsx)(f.bTu, {
                                  className:
                                    "transition-transform duration-300 ".concat(
                                      "resources" === k ? "rotate-180" : ""
                                    ),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(d(), {
                            target: "_blank",
                            href: "https://company-32.gitbook.io/future-sync-x/documentation/",
                            className: "py-2 px-1 transition-colors ".concat(
                              a
                                ? "text-gray-300 hover:text-[#EA489B]"
                                : "text-gray-700 hover:text-[#EA489B]"
                            ),
                            children: "Explorer",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "jsx-511b3787dc4ea438 hidden lg:flex items-center space-x-4",
                        children: [
                          (0, r.jsx)("button", {
                            onClick: t,
                            "aria-label": a
                              ? "Switch to light mode"
                              : "Switch to dark mode",
                            className:
                              "jsx-511b3787dc4ea438 " +
                              "p-2 rounded-full transition-all duration-300 ".concat(
                                "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                              ),
                            children: a
                              ? (0, r.jsx)(f.kXG, { size: 20 })
                              : (0, r.jsx)(f.wOW, { size: 20 }),
                          }),
                          (0, r.jsx)("a", {
                            href: "/dashboard",
                            className: "jsx-511b3787dc4ea438 group",
                            children: (0, r.jsx)("div", {
                              className:
                                "jsx-511b3787dc4ea438 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105",
                              children: (0, r.jsx)("span", {
                                className: "jsx-511b3787dc4ea438 text-white",
                                children: (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  fill: "currentColor",
                                  className: "jsx-511b3787dc4ea438 w-5 h-5",
                                  children: (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",
                                    clipRule: "evenodd",
                                    className: "jsx-511b3787dc4ea438",
                                  }),
                                }),
                              }),
                            }),
                          }),
                          (0, r.jsx)(m.Z, { active: !0 }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "jsx-511b3787dc4ea438 flex lg:hidden items-center space-x-4",
                        children: [
                          (0, r.jsx)("button", {
                            onClick: t,
                            "aria-label": a
                              ? "Switch to light mode"
                              : "Switch to dark mode",
                            className:
                              "jsx-511b3787dc4ea438 " +
                              "p-2 rounded-full ".concat(
                                "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
                                " transition-all"
                              ),
                            children: a
                              ? (0, r.jsx)(f.kXG, { size: 20 })
                              : (0, r.jsx)(f.wOW, { size: 20 }),
                          }),
                          (0, r.jsx)("button", {
                            onClick: M,
                            "aria-label": "Toggle menu",
                            className:
                              "jsx-511b3787dc4ea438 " +
                              "focus:outline-none ".concat(
                                a ? "text-[#EA489B]" : "text-indigo-500"
                              ),
                            children: n
                              ? (0, r.jsx)(f.q5L, { size: 24 })
                              : (0, r.jsx)(f.cur, { size: 24 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object.keys(D).map((e) => {
                    let t = D[e];
                    return (0, r.jsx)(
                      "div",
                      {
                        onMouseEnter: () => L(e),
                        onMouseLeave: S,
                        className:
                          "jsx-511b3787dc4ea438 " +
                          "absolute left-0 w-full z-40 transition-all duration-300 transform "
                            .concat(
                              k === e
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 -translate-y-2 pointer-events-none",
                              " "
                            )
                            .concat(
                              a
                                ? "bg-[#14101A]/95 backdrop-blur-md border-b border-gray-800/50"
                                : "bg-white/95 backdrop-blur-md border-b border-gray-200/50",
                              " shadow-xl"
                            ),
                        children: (0, r.jsx)("div", {
                          className:
                            "jsx-511b3787dc4ea438 container mx-auto py-8 px-4",
                          children: (0, r.jsxs)("div", {
                            className:
                              "jsx-511b3787dc4ea438 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                            children: [
                              t.columns.map((e, t) =>
                                (0, r.jsxs)(
                                  "div",
                                  {
                                    className: "jsx-511b3787dc4ea438 space-y-4",
                                    children: [
                                      (0, r.jsx)("h3", {
                                        className:
                                          "jsx-511b3787dc4ea438 " +
                                          "text-sm font-bold uppercase tracking-wider ".concat(
                                            a
                                              ? "text-gray-400"
                                              : "text-gray-500"
                                          ),
                                        children: e.title,
                                      }),
                                      (0, r.jsx)("ul", {
                                        className:
                                          "jsx-511b3787dc4ea438 space-y-2",
                                        children: e.links.map((e, t) =>
                                          (0, r.jsx)(
                                            "li",
                                            {
                                              className: "jsx-511b3787dc4ea438",
                                              children: (0, r.jsxs)(d(), {
                                                target: "_blank",
                                                href: e.href,
                                                className:
                                                  "flex items-center space-x-2 py-1 transition-colors duration-200 ".concat(
                                                    a
                                                      ? "text-gray-300 hover:text-[#EA489B]"
                                                      : "text-gray-700 hover:text-[#EA489B]"
                                                  ),
                                                onClick: () => y(null),
                                                children: [
                                                  (0, r.jsx)("span", {
                                                    className:
                                                      "jsx-511b3787dc4ea438 text-lg",
                                                    children: e.icon,
                                                  }),
                                                  (0, r.jsx)("span", {
                                                    className:
                                                      "jsx-511b3787dc4ea438",
                                                    children: e.label,
                                                  }),
                                                ],
                                              }),
                                            },
                                            t
                                          )
                                        ),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-511b3787dc4ea438 " +
                                  "rounded-xl p-6 ".concat(
                                    t.featuredBox.bgClass
                                  ),
                                children: [
                                  (0, r.jsx)("h3", {
                                    className:
                                      "jsx-511b3787dc4ea438 text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#EA489B] to-indigo-500",
                                    children: t.featuredBox.title,
                                  }),
                                  (0, r.jsx)("p", {
                                    className:
                                      "jsx-511b3787dc4ea438 " +
                                      "text-sm mb-4 ".concat(
                                        a ? "text-gray-300" : "text-gray-700"
                                      ),
                                    children: t.featuredBox.description,
                                  }),
                                  (0, r.jsxs)(d(), {
                                    href: t.featuredBox.linkUrl,
                                    target: "_blank",
                                    className:
                                      "inline-flex items-center space-x-1 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#EA489B] to-indigo-500",
                                    onClick: () => y(null),
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "jsx-511b3787dc4ea438",
                                        children: t.featuredBox.linkText,
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "jsx-511b3787dc4ea438",
                                        children: "→",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      },
                      e
                    );
                  }),
                  (0, r.jsx)("div", {
                    style: { height: "100vh", overflowY: "auto", top: "0" },
                    className:
                      "jsx-511b3787dc4ea438 " +
                      "lg:hidden fixed inset-y-0 left-0 z-[100] w-4/5 max-w-xs transform transition-transform duration-300 ease-in-out "
                        .concat(n ? "translate-x-0" : "-translate-x-full", " ")
                        .concat(
                          a
                            ? "bg-[#14101A] border-r border-gray-800/50"
                            : "bg-white border-r border-gray-200/50"
                        ),
                    children: (0, r.jsxs)("div", {
                      className: "jsx-511b3787dc4ea438 h-full overflow-y-auto",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "jsx-511b3787dc4ea438 " +
                            "p-5 border-b ".concat(
                              a ? "border-gray-800/50" : "border-gray-200/50",
                              " flex justify-between items-center"
                            ),
                          children: [
                            (0, r.jsxs)(d(), {
                              href: "/",
                              target: "_blank",
                              className: "flex items-center",
                              onClick: () => o(!1),
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "jsx-511b3787dc4ea438 relative w-10 h-10 mr-3 overflow-hidden",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-511b3787dc4ea438 absolute inset-0 ",
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-511b3787dc4ea438 absolute inset-1 flex items-center justify-center ",
                                      children: (0, r.jsx)("img", {
                                        src: "/futuresyncx-circle-black.png",
                                        alt: "Logo",
                                        className:
                                          "jsx-511b3787dc4ea438 w-6 h-6 object-contain",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "jsx-511b3787dc4ea438 " +
                                    "text-xl font-bold ".concat(
                                      a ? "text-white" : "text-gray-900"
                                    ),
                                  children: p,
                                }),
                              ],
                            }),
                            (0, r.jsx)("button", {
                              onClick: M,
                              "aria-label": "Close menu",
                              className:
                                "jsx-511b3787dc4ea438 " +
                                "focus:outline-none ".concat(
                                  a ? "text-[#EA489B]" : "text-indigo-500"
                                ),
                              children: (0, r.jsx)(f.q5L, { size: 24 }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "jsx-511b3787dc4ea438 p-5",
                          children: (0, r.jsxs)("nav", {
                            className: "jsx-511b3787dc4ea438 flex flex-col",
                            children: [
                              (0, r.jsx)(h, {
                                title: "Ecosystem",
                                isDarkMode: a,
                                items: [
                                  {
                                    icon: (0, r.jsx)(f.bAx, {
                                      className: "text-[#EA489B]",
                                    }),
                                    label: "Staking",
                                    href: "/dashboard/?ref=staking",
                                  },
                                  {
                                    icon: (0, r.jsx)(f.yG, {
                                      className: "text-[#EA489B]",
                                    }),
                                    label: "Dashboard",
                                    href: "/dashboard",
                                  },
                                  {
                                    icon: (0, r.jsx)(f.dyY, {
                                      className: "text-indigo-500",
                                    }),
                                    label: "Governance",
                                    href: "https://company-32.gitbook.io/future-sync-x/documentation/whitepaper/decentralized-governance",
                                  },
                                ],
                                toggleMenu: M,
                              }),
                              (0, r.jsx)(h, {
                                title: "Resources",
                                isDarkMode: a,
                                items: [
                                  {
                                    icon: (0, r.jsx)(f.NOg, {
                                      className: "text-[#EA489B]",
                                    }),
                                    label: "Whitepaper",
                                    href: "https://futuresyncx.gitbook.io/",
                                  },
                                  {
                                    icon: (0, r.jsx)(f.MIl, {
                                      className: "text-indigo-500",
                                    }),
                                    label: "Roadmap",
                                    href: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/roadmap",
                                  },
                                  {
                                    icon: (0, r.jsx)(f.yK7, {
                                      className: "text-[#EA489B]",
                                    }),
                                    label: "Documentation",
                                    href: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/tokenomics",
                                  },
                                  {
                                    icon: (0, r.jsx)(f.bGz, {
                                      className: "text-indigo-500",
                                    }),
                                    label: "FSX Token",
                                    href: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/tokenomics",
                                  },
                                ],
                                toggleMenu: M,
                              }),
                              (0, r.jsxs)(d(), {
                                href: "https://company-32.gitbook.io/future-sync-x/documentation/",
                                target: "_blank",
                                className:
                                  "flex items-center space-x-2 py-4 border-b ".concat(
                                    a
                                      ? "border-gray-800/50 text-gray-300 hover:text-[#EA489B]"
                                      : "border-gray-200/50 text-gray-700 hover:text-[#EA489B]",
                                    " transition-colors"
                                  ),
                                onClick: () => o(!1),
                                children: [
                                  (0, r.jsx)(f.dyY, { size: 18 }),
                                  (0, r.jsx)("span", {
                                    className: "jsx-511b3787dc4ea438",
                                    children: "Explorer",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)(d(), {
                                href: "/dashboard",
                                className:
                                  "flex items-center space-x-2 py-4 border-b ".concat(
                                    a
                                      ? "border-gray-800/50 text-gray-300 hover:text-[#EA489B]"
                                      : "border-gray-200/50 text-gray-700 hover:text-[#EA489B]",
                                    " transition-colors"
                                  ),
                                onClick: () => o(!1),
                                children: [
                                  (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    className: "jsx-511b3787dc4ea438 w-5 h-5",
                                    children: (0, r.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",
                                      clipRule: "evenodd",
                                      className: "jsx-511b3787dc4ea438",
                                    }),
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "jsx-511b3787dc4ea438",
                                    children: "Dashboard",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "jsx-511b3787dc4ea438 mt-6",
                                children: (0, r.jsx)(m.Z, { active: !1 }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  n &&
                    (0, r.jsx)("div", {
                      onClick: M,
                      style: { top: "0" },
                      className:
                        "jsx-511b3787dc4ea438 md:hidden fixed inset-0 z-90 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300",
                    }),
                ],
              }),
              (0, r.jsx)(l(), {
                id: "511b3787dc4ea438",
                children:
                  "@-webkit-keyframes marquee{0%{-webkit-transform:translatex(100%);transform:translatex(100%)}100%{-webkit-transform:translatex(-100%);transform:translatex(-100%)}}@-moz-keyframes marquee{0%{-moz-transform:translatex(100%);transform:translatex(100%)}100%{-moz-transform:translatex(-100%);transform:translatex(-100%)}}@-o-keyframes marquee{0%{-o-transform:translatex(100%);transform:translatex(100%)}100%{-o-transform:translatex(-100%);transform:translatex(-100%)}}@keyframes marquee{0%{-webkit-transform:translatex(100%);-moz-transform:translatex(100%);-o-transform:translatex(100%);transform:translatex(100%)}100%{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}}.animate-marquee.jsx-511b3787dc4ea438{-webkit-animation:marquee 20s linear infinite;-moz-animation:marquee 20s linear infinite;-o-animation:marquee 20s linear infinite;animation:marquee 20s linear infinite;display:inline-block}@-webkit-keyframes headerSlideDown{0%{-webkit-transform:translatey(-100%);transform:translatey(-100%);opacity:0}100%{-webkit-transform:translatey(0);transform:translatey(0);opacity:1}}@-moz-keyframes headerSlideDown{0%{-moz-transform:translatey(-100%);transform:translatey(-100%);opacity:0}100%{-moz-transform:translatey(0);transform:translatey(0);opacity:1}}@-o-keyframes headerSlideDown{0%{-o-transform:translatey(-100%);transform:translatey(-100%);opacity:0}100%{-o-transform:translatey(0);transform:translatey(0);opacity:1}}@keyframes headerSlideDown{0%{-webkit-transform:translatey(-100%);-moz-transform:translatey(-100%);-o-transform:translatey(-100%);transform:translatey(-100%);opacity:0}100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0);opacity:1}}.animate-headerSlideDown.jsx-511b3787dc4ea438{-webkit-animation:headerSlideDown.9s ease forwards;-moz-animation:headerSlideDown.9s ease forwards;-o-animation:headerSlideDown.9s ease forwards;animation:headerSlideDown.9s ease forwards}body{padding-top:72px}",
              }),
            ],
          });
        },
        h = (e) => {
          let { title: a, items: t, isDarkMode: n, toggleMenu: o } = e,
            [i, l] = (0, s.useState)(!1);
          return (0, r.jsxs)("div", {
            className: "border-b ".concat(
              n ? "border-gray-800/50" : "border-gray-200/50"
            ),
            children: [
              (0, r.jsx)("button", {
                className:
                  "flex items-center justify-between w-full py-4 ".concat(
                    n ? "text-gray-300" : "text-gray-700"
                  ),
                onClick: () => l(!i),
                type: "button",
                "aria-expanded": i,
                children: (0, r.jsxs)("span", {
                  className: "flex items-center space-x-2",
                  children: [
                    (0, r.jsx)(f.bTu, {
                      className: "transition-transform duration-300 ".concat(
                        i ? "rotate-180" : ""
                      ),
                    }),
                    (0, r.jsx)("span", { children: a }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "overflow-hidden transition-all duration-300 ".concat(
                    i ? "max-h-96" : "max-h-0"
                  ),
                children: (0, r.jsx)("div", {
                  className: "pl-6 pb-2 space-y-2",
                  children: t.map((e, a) =>
                    (0, r.jsxs)(
                      d(),
                      {
                        href: e.href,
                        className: "flex items-center space-x-2 py-3 ".concat(
                          n
                            ? "text-gray-400 hover:text-[#EA489B]"
                            : "text-gray-600 hover:text-[#EA489B]",
                          " transition-colors"
                        ),
                        onClick: () => {
                          o(), l(!1);
                        },
                        children: [
                          (0, r.jsx)("span", { children: e.icon }),
                          (0, r.jsx)("span", { children: e.label }),
                        ],
                      },
                      a
                    )
                  ),
                }),
              }),
            ],
          });
        };
      var k = t(39715),
        y = t(87771),
        j = t(83728),
        w = t(10612),
        v = t(35553),
        N = t(83454);
      let z = "0.0018";
      N.env.NEXT_PUBLIC_DOMAIN_URL;
      let C = (e) => {
          let { isDarkMode: a } = e,
            {
              account: t,
              isConnected: n,
              contractInfo: o,
              tokenBalances: i,
              buyWithETH: c,
              buyWithUSDT: d,
              buyWithUSDC: f,
              addtokenToMetaMask: m,
            } = (0, w.$6)(),
            [x, p] = (0, s.useState)("ETH"),
            [b, u] = (0, s.useState)("0"),
            [g, h] = (0, s.useState)("0"),
            [N, C] = (0, s.useState)(!1),
            [E, M] = (0, s.useState)(!0),
            [L, S] = (0, s.useState)(!1);
          (0, s.useRef)(!1);
          let D = () => {
              if (
                !(null == o ? void 0 : o.totalSold) ||
                !(null == o ? void 0 : o.fsxBalance)
              )
                return 0;
              let e =
                  Number(null == o ? void 0 : o.totalSold) +
                  Number(null == o ? void 0 : o.fsxBalance),
                a = parseFloat(o.totalSold) || 0,
                t = parseFloat(e) || 1;
              return parseFloat(Math.min((a / t) * 100, 100).toFixed(2));
            },
            B = (0, s.useMemo)(() => {
              let e, a, t;
              let r = null == o ? void 0 : o.ethPrice,
                s = null == o ? void 0 : o.usdtTokenRatio,
                n = null == o ? void 0 : o.usdcTokenRatio;
              try {
                (e = (null == o ? void 0 : o.ethPrice)
                  ? "object" == typeof o.ethPrice && o.ethPrice._isBigNumber
                    ? o.ethPrice
                    : v.fi(o.ethPrice.toString())
                  : v.fi(r)),
                  (a = (null == o ? void 0 : o.usdtTokenRatio)
                    ? parseFloat(o.usdtTokenRatio)
                    : s),
                  (t = (null == o ? void 0 : o.usdcTokenRatio)
                    ? parseFloat(o.usdcTokenRatio)
                    : n);
              } catch (o) {
                console.error("Error parsing prices:", o),
                  (e = v.fi(r)),
                  (a = s),
                  (t = n);
              }
              return { ethPrice: e, usdtRatio: a, usdcRatio: t };
            }, [o]);
          (0, s.useEffect)(() => {
            M(!0);
            let e = setTimeout(() => {
              M(!1);
            }, 3e3);
            return () => clearTimeout(e);
          }, []),
            (0, s.useEffect)(() => {
              if (!n || !i) {
                C(!1);
                return;
              }
              let e =
                20 > parseFloat((null == i ? void 0 : i.fsxBalance) || "0");
              if (e) {
                C(!1);
                return;
              }
              let a = parseFloat(b) || 0,
                t = !1;
              switch (x) {
                case "ETH":
                  let r = parseFloat(
                    (null == i ? void 0 : i.userEthBalance) || "0"
                  );
                  t = r >= a && a > 0;
                  break;
                case "USDT":
                  let s = parseFloat(
                    (null == i ? void 0 : i.userUSDTBalance) || "0"
                  );
                  t = s >= a && a > 0;
                  break;
                case "USDC":
                  let o = parseFloat(
                    (null == i ? void 0 : i.userUSDCBalance) || "0"
                  );
                  t = o >= a && a > 0;
                  break;
                default:
                  t = !1;
              }
              C(t);
            }, [n, b, x, i]);
          let A = (e, a) => {
              let t;
              if (isNaN(parseFloat(e)) || 0 >= parseFloat(e)) return "0";
              try {
                switch (a) {
                  case "ETH":
                    v.fi(e);
                    let r = v.dF(B.ethPrice);
                    t = parseFloat(e) / parseFloat(r);
                    break;
                  case "USDT":
                    t = parseFloat(e) * B.usdtRatio;
                    break;
                  case "USDC":
                    t = parseFloat(e) * B.usdcRatio;
                    break;
                  default:
                    t = 0;
                }
              } catch (e) {
                console.error("Error calculating token amount:", e), (t = 0);
              }
              return t.toFixed(2);
            },
            F = (e) => {
              u(e), h(A(e, x));
            },
            T = (e) => {
              p(e), h(A(b, e));
            },
            I = async () => {
              if (!n) {
                console.log("Please connect your wallet first");
                return;
              }
              if (0 >= parseFloat(b)) {
                console.log("Amount must be greater than 0");
                return;
              }
              if (!N) {
                20 > parseFloat((null == i ? void 0 : i.fsxBalance) || "0")
                  ? console.log(
                      "Insufficient token supply. Please try again later."
                    )
                  : console.log("Insufficient ".concat(x, " balance"));
                return;
              }
              try {
                let e;
                switch (
                  (console.log("Buying with ".concat(b, " ").concat(x)), x)
                ) {
                  case "ETH":
                    e = await c(b);
                    break;
                  case "USDT":
                    e = await d(b);
                    break;
                  case "USDC":
                    e = await f(b);
                    break;
                  default:
                    alert("Please select a token to purchase with");
                    return;
                }
                console.log(e),
                  console.log(
                    "Successfully purchased "
                      .concat(g, " ")
                      .concat("FSX", " tokens!")
                  ),
                  window.gtag &&
                    window.gtag("event", "conversion", {
                      send_to: "AW-16992297496/ae4yCMLWq7caEJjEx6Y_",
                      transaction_id: "",
                    }),
                  u("0"),
                  h("0");
              } catch (e) {
                console.error("Error buying with ".concat(x, ":"), e),
                  console.log("Transaction failed. Please try again.");
              }
            },
            R = a ? "text-white" : "text-gray-800",
            P = a ? "text-gray-400" : "text-gray-600",
            U = a
              ? "bg-gray-900/60 border-gray-800/50"
              : "bg-gray-100 border-gray-200/70",
            W = "from-purple-500 to-pink-500",
            _ = (e) => {
              let t =
                "flex-1 flex items-center justify-center rounded-lg py-2.5 transition-all duration-300";
              if (x === e) {
                let a;
                switch (e) {
                  case "ETH":
                    a = "bg-gradient-to-r from-blue-500 to-indigo-600";
                    break;
                  case "USDT":
                    a = "bg-gradient-to-r from-green-500 to-teal-600";
                    break;
                  case "USDC":
                    a = "bg-gradient-to-r from-blue-400 to-blue-600";
                    break;
                  default:
                    a = "";
                }
                return "".concat(t, " ").concat(a, " text-white shadow-lg");
              }
              return ""
                .concat(t, " ")
                .concat(
                  a
                    ? "bg-gray-800/40 hover:bg-gray-800/60 text-gray-300"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                );
            };
          return (0, r.jsxs)("div", {
            className:
              l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
              " relative w-full overflow-hidden",
            children: [
              (0, r.jsx)("div", {
                className:
                  l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                  " ai-vr-proper-positioning animate-float hidden md:block",
                children: (0, r.jsx)("img", {
                  src: "/hero-section.png",
                  alt: "AI and VR Technology",
                  className:
                    l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                    " ai-vr-image-fixed",
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                  " ai-vr-proper-positioning animate-float sm:hidden",
                children: (0, r.jsx)("img", {
                  src: "/vr.png",
                  alt: "AI and VR Technology",
                  className:
                    l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                    " ai-vr-image-fixed",
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                  " container mx-auto px-4 py-28 md:py-32 relative z-10",
                children: (0, r.jsxs)("div", {
                  className:
                    l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                    " flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                        " w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left",
                      children: [
                        (0, r.jsxs)("h1", {
                          className:
                            l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                            " " +
                            "text-4xl md:text-5xl lg:text-6xl font-bold ".concat(
                              a ? "text-white" : "text-gray-900",
                              " mb-4"
                            ),
                          children: [
                            "FUTURESYNCX",
                            " ",
                            (0, r.jsx)("span", {
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                              children: "FSX",
                            }),
                          ],
                        }),
                        (0, r.jsx)("p", {
                          className:
                            l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                            " " +
                            "".concat(
                              a ? "text-gray-400" : "text-gray-700",
                              " text-base md:text-lg max-w-md mb-8 leading-relaxed font-medium"
                            ),
                          children:
                            "Revolutionizing intelligence through decentralized innovation. Join the future of blockchain technology today.",
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                            " flex flex-wrap gap-4 mb-8",
                          children: [
                            
                            (0, r.jsxs)("div", {
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " " +
                                "px-4 py-2 rounded-full "
                                  .concat(
                                    a ? "bg-indigo-100/10" : "bg-indigo-100",
                                    " "
                                  )
                                  .concat(
                                    a ? "text-indigo-300" : "text-indigo-700",
                                    " text-sm font-medium flex items-center"
                                  ),
                              children: [
                                (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  className:
                                    l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                    " h-4 w-4 mr-1",
                                  children: (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                    clipRule: "evenodd",
                                    className: l().dynamic([
                                      ["8bd5a93f7e498ab8", [D()]],
                                    ]),
                                  }),
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                    " bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-pink-800 animate-gradient-x",
                                  children: "Exclusive Benefits",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                            " flex flex-wrap items-center gap-4 mb-8",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " " +
                                "px-4 py-2 rounded-full "
                                  .concat(
                                    a ? "bg-green-500/10" : "bg-green-100",
                                    " "
                                  )
                                  .concat(
                                    a ? "text-green-300" : "text-green-700",
                                    " text-sm font-medium flex items-center gap-2"
                                  ),
                              children: [
                                (0, r.jsx)("img", {
                                  src: "/coinmarketcap_logo.jpeg",
                                  alt: "CoinMarketCap",
                                  className:
                                    l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                    " w-6 h-6 rounded-full",
                                }),
                                (0, r.jsx)("a", {
                                  href: "#",
                                  className: l().dynamic([
                                    ["8bd5a93f7e498ab8", [D()]],
                                  ]),
                                  children: "CoinMarketCap",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " " +
                                "px-4 py-2 rounded-full "
                                  .concat(
                                    a ? "bg-yellow-500/10" : "bg-yellow-100",
                                    " "
                                  )
                                  .concat(
                                    a ? "text-yellow-300" : "text-yellow-700",
                                    " text-sm font-medium flex items-center gap-2"
                                  ),
                              children: [
                                (0, r.jsx)("img", {
                                  src: "/coingecko_logo.png",
                                  alt: "CoinGecko",
                                  className:
                                    l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                    " w-6 h-6",
                                }),
                                "CoinGecko",
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className:
                            l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                            " " +
                            "absolute bottom-0 left-0 w-64 h-64 ".concat(
                              a
                                ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                                : "bg-gradient-to-r from-purple-500/5 to-pink-500/5",
                              " rounded-full blur-3xl -z-10"
                            ),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                        " relative",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                            " absolute inset-0 pointer-events-none",
                          children: [
                            (0, r.jsx)("div", {
                              style: {
                                top: "-8px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                animation: "orbit 3s linear infinite",
                              },
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full shadow-lg",
                            }),
                            (0, r.jsx)("div", {
                              style: {
                                top: "50%",
                                right: "-6px",
                                transform: "translateY(-50%)",
                                animation: "orbit 3s linear infinite",
                                animationDelay: "0.75s",
                              },
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " absolute w-3 h-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full shadow-lg",
                            }),
                            (0, r.jsx)("div", {
                              style: {
                                bottom: "-6px",
                                left: "25%",
                                animation: "orbit 3s linear infinite",
                                animationDelay: "1.5s",
                              },
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " absolute w-3 h-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full shadow-lg",
                            }),
                            (0, r.jsx)("div", {
                              style: {
                                top: "25%",
                                left: "-8px",
                                animation: "orbit 3s linear infinite",
                                animationDelay: "2.25s",
                              },
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " absolute w-4 h-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full shadow-lg",
                            }),
                          ],
                        }),
                        E &&
                          (0, r.jsx)("div", {
                            className:
                              l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                              " absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl",
                            children: (0, r.jsx)("div", {
                              className:
                                l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                " flex flex-col items-center",
                              children: (0, r.jsx)("div", {
                                className:
                                  l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                                  " w-12 h-12 border-4 border-[#C82C8F] border-t-transparent rounded-full animate-spin mb-4",
                              }),
                            }),
                          }),
                        (0, r.jsx)("div", {
                          className:
                            l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                            " " +
                            ""
                              .concat(
                                a ? "bg-[#13101A]" : "bg-white/95",
                                " backdrop-blur-sm rounded-xl "
                              )
                              .concat(
                                a ? "border-gray-800/30" : "border-gray-100",
                                " border shadow-xl overflow-hidden transform transition duration-500 hover:shadow-2xl"
                              ),
                          children: (0, r.jsxs)("div", {
                            className:
                              l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                              "",
                            children: [
                                  (0,r.jsx)("iframe", {
                                    src: `https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon${a ? '&theme=dark' : '&theme=light'}`,
                                    style: { width: "400px", height: "890px", border: "none", outline: "none" },
                                    className: "".concat(l.className, " font-[900]"),
                                  })
                                ]
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                  " fixed bottom-6 right-6 z-50",
                children: (0, r.jsx)("button", {
                  onClick: () =>
                    window.scrollTo({ top: 0, behavior: "smooth" }),
                  "aria-label": "Scroll to top",
                  className:
                    l().dynamic([["8bd5a93f7e498ab8", [D()]]]) +
                    " w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-pink-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110",
                  children: (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className:
                      l().dynamic([["8bd5a93f7e498ab8", [D()]]]) + " h-5 w-5",
                    children: (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
                      clipRule: "evenodd",
                      className: l().dynamic([["8bd5a93f7e498ab8", [D()]]]),
                    }),
                  }),
                }),
              }),
              (0, r.jsx)(l(), {
                id: "8bd5a93f7e498ab8",
                dynamic: [D()],
                children:
                  "@-webkit-keyframes pulse-slow{0%,100%{opacity:.8;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.02);transform:scale(1.02)}}@-moz-keyframes pulse-slow{0%,100%{opacity:.8;-moz-transform:scale(1);transform:scale(1)}50%{opacity:1;-moz-transform:scale(1.02);transform:scale(1.02)}}@-o-keyframes pulse-slow{0%,100%{opacity:.8;-o-transform:scale(1);transform:scale(1)}50%{opacity:1;-o-transform:scale(1.02);transform:scale(1.02)}}@keyframes pulse-slow{0%,100%{opacity:.8;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.02);-moz-transform:scale(1.02);-o-transform:scale(1.02);transform:scale(1.02)}}.animate-pulse-slow.__jsx-style-dynamic-selector{-webkit-animation:pulse-slow 3s infinite;-moz-animation:pulse-slow 3s infinite;-o-animation:pulse-slow 3s infinite;animation:pulse-slow 3s infinite}.animated-progress.__jsx-style-dynamic-selector{-webkit-animation:progress 1.5s ease-out;-moz-animation:progress 1.5s ease-out;-o-animation:progress 1.5s ease-out;animation:progress 1.5s ease-out}@-webkit-keyframes progress{0%{width:0%}100%{width:"
                    .concat(
                      D(),
                      "%}}@-moz-keyframes progress{0%{width:0%}100%{width:"
                    )
                    .concat(
                      D(),
                      "%}}@-o-keyframes progress{0%{width:0%}100%{width:"
                    )
                    .concat(
                      D(),
                      "%}}@keyframes progress{0%{width:0%}100%{width:"
                    )
                    .concat(
                      D(),
                      "%}}.shimmer-effect.__jsx-style-dynamic-selector{-webkit-animation:shimmer 2s infinite linear;-moz-animation:shimmer 2s infinite linear;-o-animation:shimmer 2s infinite linear;animation:shimmer 2s infinite linear;background:-webkit-linear-gradient(left,rgba(255,255,255,0)0%,rgba(255,255,255,.2)50%,rgba(255,255,255,0)100%);background:-moz-linear-gradient(left,rgba(255,255,255,0)0%,rgba(255,255,255,.2)50%,rgba(255,255,255,0)100%);background:-o-linear-gradient(left,rgba(255,255,255,0)0%,rgba(255,255,255,.2)50%,rgba(255,255,255,0)100%);background:linear-gradient(to right,rgba(255,255,255,0)0%,rgba(255,255,255,.2)50%,rgba(255,255,255,0)100%);-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%}@-webkit-keyframes shimmer{0%{background-position:-200%0}100%{background-position:200%0}}@-moz-keyframes shimmer{0%{background-position:-200%0}100%{background-position:200%0}}@-o-keyframes shimmer{0%{background-position:-200%0}100%{background-position:200%0}}@keyframes shimmer{0%{background-position:-200%0}100%{background-position:200%0}}@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.__jsx-style-dynamic-selector{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}.ai-vr-proper-positioning.__jsx-style-dynamic-selector{position:absolute;top:50px;left:100px;width:550px;height:300px;z-index:5;pointer-events:none}.ai-vr-image-fixed.__jsx-style-dynamic-selector{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;opacity:.9}@-webkit-keyframes float{0%{-webkit-transform:translatey(0px);transform:translatey(0px)}50%{-webkit-transform:translatey(-15px);transform:translatey(-15px)}100%{-webkit-transform:translatey(0px);transform:translatey(0px)}}@-moz-keyframes float{0%{-moz-transform:translatey(0px);transform:translatey(0px)}50%{-moz-transform:translatey(-15px);transform:translatey(-15px)}100%{-moz-transform:translatey(0px);transform:translatey(0px)}}@-o-keyframes float{0%{-o-transform:translatey(0px);transform:translatey(0px)}50%{-o-transform:translatey(-15px);transform:translatey(-15px)}100%{-o-transform:translatey(0px);transform:translatey(0px)}}@keyframes float{0%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}50%{-webkit-transform:translatey(-15px);-moz-transform:translatey(-15px);-o-transform:translatey(-15px);transform:translatey(-15px)}100%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}}.animate-float.__jsx-style-dynamic-selector{-webkit-animation:float 6s ease-in-out infinite;-moz-animation:float 6s ease-in-out infinite;-o-animation:float 6s ease-in-out infinite;animation:float 6s ease-in-out infinite}@media(max-width:1200px){.ai-vr-proper-positioning.__jsx-style-dynamic-selector{width:450px;left:50px}}@media(max-width:992px){.ai-vr-proper-positioning.__jsx-style-dynamic-selector{width:350px;left:30px}}@media(max-width:768px){.ai-vr-proper-positioning.__jsx-style-dynamic-selector{width:300px;top:80px;left:20%;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%)}.animate-float.__jsx-style-dynamic-selector{-webkit-animation:floatMobile 6s ease-in-out infinite;-moz-animation:floatMobile 6s ease-in-out infinite;-o-animation:floatMobile 6s ease-in-out infinite;animation:floatMobile 6s ease-in-out infinite}@-webkit-keyframes floatMobile{0%{-webkit-transform:translatex(-50%)translatey(0px);transform:translatex(-50%)translatey(0px)}50%{-webkit-transform:translatex(-50%)translatey(-15px);transform:translatex(-50%)translatey(-15px)}100%{-webkit-transform:translatex(-50%)translatey(0px);transform:translatex(-50%)translatey(0px)}}@-moz-keyframes floatMobile{0%{-moz-transform:translatex(-50%)translatey(0px);transform:translatex(-50%)translatey(0px)}50%{-moz-transform:translatex(-50%)translatey(-15px);transform:translatex(-50%)translatey(-15px)}100%{-moz-transform:translatex(-50%)translatey(0px);transform:translatex(-50%)translatey(0px)}}@-o-keyframes floatMobile{0%{-o-transform:translatex(-50%)translatey(0px);transform:translatex(-50%)translatey(0px)}50%{-o-transform:translatex(-50%)translatey(-15px);transform:translatex(-50%)translatey(-15px)}100%{-o-transform:translatex(-50%)translatey(0px);transform:translatex(-50%)translatey(0px)}}@keyframes floatMobile{0%{-webkit-transform:translatex(-50%)translatey(0px);-moz-transform:translatex(-50%)translatey(0px);-o-transform:translatex(-50%)translatey(0px);transform:translatex(-50%)translatey(0px)}50%{-webkit-transform:translatex(-50%)translatey(-15px);-moz-transform:translatex(-50%)translatey(-15px);-o-transform:translatex(-50%)translatey(-15px);transform:translatex(-50%)translatey(-15px)}100%{-webkit-transform:translatex(-50%)translatey(0px);-moz-transform:translatex(-50%)translatey(0px);-o-transform:translatex(-50%)translatey(0px);transform:translatex(-50%)translatey(0px)}}}@media(max-width:480px){.ai-vr-proper-positioning.__jsx-style-dynamic-selector{width:250px;top:-70px;left:50%}}@-webkit-keyframes pulse-slow{0%,100%{opacity:.8;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.02);transform:scale(1.02)}}@-moz-keyframes pulse-slow{0%,100%{opacity:.8;-moz-transform:scale(1);transform:scale(1)}50%{opacity:1;-moz-transform:scale(1.02);transform:scale(1.02)}}@-o-keyframes pulse-slow{0%,100%{opacity:.8;-o-transform:scale(1);transform:scale(1)}50%{opacity:1;-o-transform:scale(1.02);transform:scale(1.02)}}@keyframes pulse-slow{0%,100%{opacity:.8;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.02);-moz-transform:scale(1.02);-o-transform:scale(1.02);transform:scale(1.02)}}.animate-pulse-slow.__jsx-style-dynamic-selector{-webkit-animation:pulse-slow 3s infinite;-moz-animation:pulse-slow 3s infinite;-o-animation:pulse-slow 3s infinite;animation:pulse-slow 3s infinite}@-webkit-keyframes orbit{0%{-webkit-transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg);transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg)}100%{-webkit-transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg);transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg)}}@-moz-keyframes orbit{0%{-moz-transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg);transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg)}100%{-moz-transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg);transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg)}}@-o-keyframes orbit{0%{-o-transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg);transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg)}100%{-o-transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg);transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg)}}@keyframes orbit{0%{-webkit-transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg);-moz-transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg);-o-transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg);transform:translatex(-50%)rotate(0deg)translatex(200px)rotate(0deg)}100%{-webkit-transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg);-moz-transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg);-o-transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg);transform:translatex(-50%)rotate(360deg)translatex(200px)rotate(-360deg)}}@-webkit-keyframes orbit{0%{-webkit-transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg);transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg)}100%{-webkit-transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg);transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg)}}@-moz-keyframes orbit{0%{-moz-transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg);transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg)}100%{-moz-transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg);transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg)}}@-o-keyframes orbit{0%{-o-transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg);transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg)}100%{-o-transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg);transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg)}}@keyframes orbit{0%{-webkit-transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg);-moz-transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg);-o-transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg);transform:translatey(-50%)rotate(0deg)translatey(150px)rotate(0deg)}100%{-webkit-transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg);-moz-transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg);-o-transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg);transform:translatey(-50%)rotate(360deg)translatey(150px)rotate(-360deg)}}@-webkit-keyframes orbit{0%{-webkit-transform:rotate(0deg)translatex(180px)rotate(0deg);transform:rotate(0deg)translatex(180px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatex(180px)rotate(-360deg);transform:rotate(360deg)translatex(180px)rotate(-360deg)}}@-moz-keyframes orbit{0%{-moz-transform:rotate(0deg)translatex(180px)rotate(0deg);transform:rotate(0deg)translatex(180px)rotate(0deg)}100%{-moz-transform:rotate(360deg)translatex(180px)rotate(-360deg);transform:rotate(360deg)translatex(180px)rotate(-360deg)}}@-o-keyframes orbit{0%{-o-transform:rotate(0deg)translatex(180px)rotate(0deg);transform:rotate(0deg)translatex(180px)rotate(0deg)}100%{-o-transform:rotate(360deg)translatex(180px)rotate(-360deg);transform:rotate(360deg)translatex(180px)rotate(-360deg)}}@keyframes orbit{0%{-webkit-transform:rotate(0deg)translatex(180px)rotate(0deg);-moz-transform:rotate(0deg)translatex(180px)rotate(0deg);-o-transform:rotate(0deg)translatex(180px)rotate(0deg);transform:rotate(0deg)translatex(180px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatex(180px)rotate(-360deg);-moz-transform:rotate(360deg)translatex(180px)rotate(-360deg);-o-transform:rotate(360deg)translatex(180px)rotate(-360deg);transform:rotate(360deg)translatex(180px)rotate(-360deg)}}@-webkit-keyframes orbit{0%{-webkit-transform:rotate(0deg)translatey(120px)rotate(0deg);transform:rotate(0deg)translatey(120px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatey(120px)rotate(-360deg);transform:rotate(360deg)translatey(120px)rotate(-360deg)}}@-moz-keyframes orbit{0%{-moz-transform:rotate(0deg)translatey(120px)rotate(0deg);transform:rotate(0deg)translatey(120px)rotate(0deg)}100%{-moz-transform:rotate(360deg)translatey(120px)rotate(-360deg);transform:rotate(360deg)translatey(120px)rotate(-360deg)}}@-o-keyframes orbit{0%{-o-transform:rotate(0deg)translatey(120px)rotate(0deg);transform:rotate(0deg)translatey(120px)rotate(0deg)}100%{-o-transform:rotate(360deg)translatey(120px)rotate(-360deg);transform:rotate(360deg)translatey(120px)rotate(-360deg)}}@keyframes orbit{0%{-webkit-transform:rotate(0deg)translatey(120px)rotate(0deg);-moz-transform:rotate(0deg)translatey(120px)rotate(0deg);-o-transform:rotate(0deg)translatey(120px)rotate(0deg);transform:rotate(0deg)translatey(120px)rotate(0deg)}100%{-webkit-transform:rotate(360deg)translatey(120px)rotate(-360deg);-moz-transform:rotate(360deg)translatey(120px)rotate(-360deg);-o-transform:rotate(360deg)translatey(120px)rotate(-360deg);transform:rotate(360deg)translatey(120px)rotate(-360deg)}}"
                    ),
              }),
            ],
          });
        },
        E = (e) => {
          let { isDarkMode: a } = e,
            t = (0, s.useRef)(null),
            n = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              (a) => {
                a.forEach((a) => {
                  a.isIntersecting &&
                    (a.target.classList.add("animate-fade-in-up"),
                    e.unobserve(a.target));
                });
              },
              { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
            );
            return (
              t.current && e.observe(t.current),
              n.current && e.observe(n.current),
              () => {
                t.current && e.unobserve(t.current),
                  n.current && e.unobserve(n.current);
              }
            );
          }, []);
          let o = a ? "text-white" : "text-gray-800",
            i = a ? "text-gray-300" : "text-gray-600",
            c =
              "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x";
          return (0, r.jsxs)("div", {
            className:
              "jsx-33459c3f114da " +
              "min-h-screen py-20 relative overflow-hidden ".concat(
                a
                  ? "bg-[#0E0B12]"
                  : "bg-gradient-to-b from-[#EBEBFA] via-[#f0f1ff] to-[#ebebfb]"
              ),
            children: [
              (0, r.jsxs)("div", {
                className: "jsx-33459c3f114da absolute inset-0 overflow-hidden",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-33459c3f114da absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-float-slow",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-33459c3f114da absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl animate-float-slower",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-33459c3f114da " +
                      "absolute inset-0 ".concat(
                        a ? "opacity-10" : "opacity-15",
                        " grid-pattern"
                      ),
                  }),
                  (0, r.jsx)("div", {
                    className: "jsx-33459c3f114da particle-network",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "jsx-33459c3f114da absolute top-0 left-0 right-0",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-33459c3f114da h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70",
                  }),
                  (0, r.jsxs)("svg", {
                    viewBox: "0 0 1440 100",
                    preserveAspectRatio: "none",
                    className: "jsx-33459c3f114da w-full h-24",
                    children: [
                      (0, r.jsx)("path", {
                        fill: "none",
                        stroke: "url(#purplePinkGradient)",
                        strokeWidth: "2",
                        strokeDasharray: "5,5",
                        d: "M0,50 C360,110 720,0 1440,50",
                        className: "jsx-33459c3f114da animate-pulse-slow",
                      }),
                      (0, r.jsx)("defs", {
                        className: "jsx-33459c3f114da",
                        children: (0, r.jsxs)("linearGradient", {
                          id: "purplePinkGradient",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "0%",
                          className: "jsx-33459c3f114da",
                          children: [
                            (0, r.jsx)("stop", {
                              offset: "0%",
                              stopColor: "rgba(168, 85, 247, 0.5)",
                              className: "jsx-33459c3f114da",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "50%",
                              stopColor: "rgba(219, 39, 119, 0.5)",
                              className: "jsx-33459c3f114da",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "100%",
                              stopColor: "rgba(168, 85, 247, 0.5)",
                              className: "jsx-33459c3f114da",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-33459c3f114da container mx-auto px-4 relative z-10",
                children: [
                  (0, r.jsxs)("div", {
                    className: "jsx-33459c3f114da text-center mb-16",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "jsx-33459c3f114da inline-block p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4",
                        children: (0, r.jsx)("p", {
                          className:
                            "jsx-33459c3f114da " +
                            "text-sm font-medium ".concat(c),
                          children: "Revolutionary Technology",
                        }),
                      }),
                      (0, r.jsxs)("h2", {
                        className:
                          "jsx-33459c3f114da " +
                          "text-4xl md:text-5xl font-bold mb-6 ".concat(o),
                        children: [
                          "Our ",
                          (0, r.jsx)("span", {
                            className: "jsx-33459c3f114da " + (c || ""),
                            children: "Ecosystem",
                          }),
                          " Features",
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-33459c3f114da w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    ref: t,
                    className:
                      "jsx-33459c3f114da flex flex-col md:flex-row items-center justify-between py-16 gap-12 opacity-0 transition-all duration-1000",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "jsx-33459c3f114da md:w-1/2 space-y-6",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "jsx-33459c3f114da inline-flex items-center space-x-2 mb-2",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-33459c3f114da w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center",
                                children: (0, r.jsx)("span", {
                                  className:
                                    "jsx-33459c3f114da text-white font-bold",
                                  children: "1",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-33459c3f114da h-px w-16 bg-gradient-to-r from-purple-500 to-pink-500",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("h2", {
                            className:
                              "jsx-33459c3f114da " +
                              "text-4xl md:text-5xl font-bold mb-6 ".concat(o),
                            children: [
                              "Future Sync X ",
                              (0, r.jsx)("span", {
                                className: "jsx-33459c3f114da " + (c || ""),
                                children: "Ecosystem",
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "jsx-33459c3f114da " +
                              "text-lg leading-relaxed ".concat(i),
                            children:
                              "Future Sync X pioneers a fully immersive digital commerce experience by integrating Virtual Reality, Artificial Intelligence, and blockchain technology. Our platform revolutionizes the way buyers and sellers interact in a dynamic virtual marketplace, offering secure transactions, real-time product verification, and AI-driven personalization.",
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "jsx-33459c3f114da flex flex-wrap gap-4 mt-8",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-33459c3f114da " +
                                  "px-5 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 \n                ".concat(
                                    a ? "text-purple-300" : "text-purple-700",
                                    " text-sm font-medium flex items-center group transition-all duration-300 hover:from-purple-500/20 hover:to-pink-500/20"
                                  ),
                                children: [
                                  (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className:
                                      "jsx-33459c3f114da h-5 w-5 mr-2 group-hover:animate-pulse",
                                    children: (0, r.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                      clipRule: "evenodd",
                                      className: "jsx-33459c3f114da",
                                    }),
                                  }),
                                  "Immersive VR Experience",
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-33459c3f114da " +
                                  "px-5 py-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 \n                ".concat(
                                    a ? "text-pink-300" : "text-pink-700",
                                    " text-sm font-medium flex items-center group transition-all duration-300 hover:from-pink-500/20 hover:to-purple-500/20"
                                  ),
                                children: [
                                  (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className:
                                      "jsx-33459c3f114da h-5 w-5 mr-2 group-hover:animate-pulse",
                                    children: (0, r.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                      clipRule: "evenodd",
                                      className: "jsx-33459c3f114da",
                                    }),
                                  }),
                                  "Secure Blockchain Transactions",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-33459c3f114da md:w-1/2 flex justify-center",
                        children: (0, r.jsxs)("div", {
                          className:
                            "jsx-33459c3f114da relative w-72 h-72 md:w-96 md:h-96 hologram-container",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "jsx-33459c3f114da absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-33459c3f114da absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-purple-500/60 to-pink-500/60 rounded-full blur-sm",
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-33459c3f114da absolute bottom-12 left-1/2 transform -translate-x-1/2 w-56 h-56 hologram-glow flex items-center justify-center",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "jsx-33459c3f114da absolute w-40 h-40 hexagon-3d border-2 border-purple-500/70 glass-effect flex items-center justify-center shadow-lg shadow-purple-500/30 rotating-element",
                                  children: [
                                    (0, r.jsx)("div", {
                                      style: {
                                        animationDuration: "30s",
                                        animationDirection: "reverse",
                                      },
                                      className:
                                        "jsx-33459c3f114da absolute w-32 h-32 hexagon-3d border border-pink-400/60 rotating-element",
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-33459c3f114da w-20 h-20 rounded-full glass-effect flex items-center justify-center border border-white/30 pulsing-shadow",
                                      children: (0, r.jsx)("div", {
                                        className:
                                          "jsx-33459c3f114da w-12 h-12 rounded-full energy-core-gradient flex items-center justify-center animate-pulse-glow",
                                        children: (0, r.jsx)("div", {
                                          className:
                                            "jsx-33459c3f114da w-6 h-6 rounded-full bg-white/80 animate-ping-slow",
                                        }),
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-33459c3f114da absolute w-full h-full",
                                      children: [void 0, void 0, void 0].map(
                                        (e, a) =>
                                          (0, r.jsx)(
                                            "div",
                                            {
                                              className:
                                                "jsx-33459c3f114da absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4",
                                              children: (0, r.jsx)("div", {
                                                style: {
                                                  animationDuration: "".concat(
                                                    10 + 5 * a,
                                                    "s"
                                                  ),
                                                  transform: "rotate(".concat(
                                                    120 * a,
                                                    "deg) translateX(60px)"
                                                  ),
                                                },
                                                className:
                                                  "jsx-33459c3f114da w-full h-full rounded-full border border-purple-500/50 flex items-center justify-center orbit-element",
                                                children: (0, r.jsx)("div", {
                                                  className:
                                                    "jsx-33459c3f114da w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 pulse-glow",
                                                }),
                                              }),
                                            },
                                            "orbit-".concat(a)
                                          )
                                      ),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "jsx-33459c3f114da scan-line",
                                }),
                                [...Array(20)].map((e, a) =>
                                  (0, r.jsx)(
                                    "div",
                                    {
                                      style: {
                                        left: "".concat(
                                          100 * Math.random(),
                                          "%"
                                        ),
                                        top: "".concat(
                                          100 * Math.random(),
                                          "%"
                                        ),
                                        opacity: 0.8 * Math.random() + 0.2,
                                        animation: "float-particle "
                                          .concat(
                                            3 + 5 * Math.random(),
                                            "s ease-in-out infinite "
                                          )
                                          .concat(2 * Math.random(), "s"),
                                        boxShadow:
                                          "0 0 8px 2px rgba(168, 85, 247, 0.5)",
                                      },
                                      className:
                                        "jsx-33459c3f114da absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500",
                                    },
                                    "particle-".concat(a)
                                  )
                                ),
                              ],
                            }),
                            [...Array(8)].map((e, a) =>
                              (0, r.jsx)(
                                "div",
                                {
                                  style: {
                                    transform:
                                      "translateX(-50%) rotate(".concat(
                                        45 * a,
                                        "deg)"
                                      ),
                                    background:
                                      "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.7), rgba(219, 39, 119, 0.7), transparent)",
                                    animation: "pulse-beam "
                                      .concat(
                                        2 + Math.random(),
                                        "s infinite alternate "
                                      )
                                      .concat(Math.random(), "s"),
                                  },
                                  className:
                                    "jsx-33459c3f114da absolute bottom-32 left-1/2 h-px w-32 beam-line",
                                },
                                "beam-".concat(a)
                              )
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    ref: n,
                    className:
                      "jsx-33459c3f114da flex flex-col md:flex-row-reverse items-center justify-between py-16 gap-12 mt-8 opacity-0 transition-all duration-1000",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "jsx-33459c3f114da md:w-1/2 space-y-6",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "jsx-33459c3f114da inline-flex items-center space-x-2 mb-2",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-33459c3f114da w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center",
                                children: (0, r.jsx)("span", {
                                  className:
                                    "jsx-33459c3f114da text-white font-bold",
                                  children: "2",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-33459c3f114da h-px w-16 bg-gradient-to-r from-pink-500 to-purple-500",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("h2", {
                            className:
                              "jsx-33459c3f114da " +
                              "text-4xl md:text-5xl font-bold mb-6 ".concat(o),
                            children: [
                              "AI Commerce ",
                              (0, r.jsx)("span", {
                                className: "jsx-33459c3f114da " + (c || ""),
                                children: "Engine (AICE)",
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "jsx-33459c3f114da " +
                              "text-lg leading-relaxed ".concat(i),
                            children:
                              "The AI Commerce Engine (AICE) is the driving force behind FutureSyncx, seamlessly integrating artificial intelligence into our immersive digital marketplace. Designed to optimize virtual storefront management, enhance personalized product recommendations, and streamline transactions, AICE continuously learns and evolves through ongoing collaboration with a global developer community.",
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "jsx-33459c3f114da flex flex-wrap gap-4 mt-8",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-33459c3f114da " +
                                  "px-5 py-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 \n                ".concat(
                                    a ? "text-pink-300" : "text-pink-700",
                                    " text-sm font-medium flex items-center group transition-all duration-300 hover:from-pink-500/20 hover:to-purple-500/20"
                                  ),
                                children: [
                                  (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className:
                                      "jsx-33459c3f114da h-5 w-5 mr-2 group-hover:animate-pulse",
                                    children: (0, r.jsx)("path", {
                                      d: "M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z",
                                      className: "jsx-33459c3f114da",
                                    }),
                                  }),
                                  "AI-Powered Recommendations",
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-33459c3f114da " +
                                  "px-5 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 \n                ".concat(
                                    a ? "text-purple-300" : "text-purple-700",
                                    " text-sm font-medium flex items-center group transition-all duration-300 hover:from-purple-500/20 hover:to-pink-500/20"
                                  ),
                                children: [
                                  (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    className:
                                      "jsx-33459c3f114da h-5 w-5 mr-2 group-hover:animate-pulse",
                                    children: (0, r.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
                                      clipRule: "evenodd",
                                      className: "jsx-33459c3f114da",
                                    }),
                                  }),
                                  "Real-time Analytics",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-33459c3f114da md:w-1/2 flex justify-center",
                        children: (0, r.jsxs)("div", {
                          className:
                            "jsx-33459c3f114da relative w-72 h-72 md:w-96 md:h-96 hologram-container",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "jsx-33459c3f114da absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-6 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 blur-md",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-33459c3f114da absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-pink-500/60 to-purple-500/60 rounded-full blur-sm",
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-33459c3f114da absolute bottom-12 left-1/2 transform -translate-x-1/2 w-56 h-56 hologram-glow flex items-center justify-center",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "jsx-33459c3f114da absolute w-48 h-48 neural-network glass-effect border-2 border-pink-500/70 flex items-center justify-center shadow-lg shadow-pink-500/30 rotating-slow",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-33459c3f114da absolute w-full h-full neural-connections pointer-events-none",
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-33459c3f114da w-24 h-24 rounded-full glass-effect flex items-center justify-center border border-white/30 ai-core-pulsing",
                                      children: (0, r.jsxs)("div", {
                                        className:
                                          "jsx-33459c3f114da w-16 h-16 relative brain-visualization",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "jsx-33459c3f114da absolute inset-0 brain-hemisphere left-hemisphere",
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "jsx-33459c3f114da absolute inset-0 brain-hemisphere right-hemisphere",
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "jsx-33459c3f114da absolute inset-0 neural-activity",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-33459c3f114da absolute w-full h-full pointer-events-none",
                                      children: [...Array(12)].map((e, a) => {
                                        let t = 30 * a,
                                          s = 20 + (a % 3) * 8;
                                        return (0, r.jsx)(
                                          "div",
                                          {
                                            style: {
                                              top: "calc(50% + ".concat(
                                                Math.sin((t * Math.PI) / 180) *
                                                  s,
                                                "%)"
                                              ),
                                              left: "calc(50% + ".concat(
                                                Math.cos((t * Math.PI) / 180) *
                                                  s,
                                                "%)"
                                              ),
                                              background:
                                                a % 3 == 0
                                                  ? "linear-gradient(to right, #a855f7, #ec4899)"
                                                  : a % 3 == 1
                                                  ? "linear-gradient(to right, #ec4899, #a855f7)"
                                                  : "linear-gradient(to right, #f472b6, #a855f7)",
                                              boxShadow:
                                                "0 0 10px 2px rgba(219, 39, 119, 0.6)",
                                              animation:
                                                "pulse-data-node 2s infinite alternate ".concat(
                                                  0.2 * a,
                                                  "s, rotate-node 20s linear infinite"
                                                ),
                                            },
                                            className:
                                              "jsx-33459c3f114da absolute w-3 h-3 rounded-full data-node",
                                          },
                                          "node-".concat(a)
                                        );
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-33459c3f114da absolute top-0 left-0 w-full h-full circuit-board pointer-events-none",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-33459c3f114da scan-line-vertical",
                                }),
                                [...Array(25)].map((e, a) =>
                                  (0, r.jsx)(
                                    "div",
                                    {
                                      style: {
                                        left: "".concat(
                                          100 * Math.random(),
                                          "%"
                                        ),
                                        top: "".concat(
                                          100 * Math.random(),
                                          "%"
                                        ),
                                        opacity: 0.8 * Math.random() + 0.2,
                                        background:
                                          Math.random() > 0.5
                                            ? "linear-gradient(to right, #a855f7, #ec4899)"
                                            : "linear-gradient(to right, #ec4899, #a855f7)",
                                        boxShadow:
                                          "0 0 5px 1px rgba(219, 39, 119, 0.5)",
                                        animation: "float-data "
                                          .concat(
                                            2 + 3 * Math.random(),
                                            "s ease-in-out infinite "
                                          )
                                          .concat(2 * Math.random(), "s"),
                                      },
                                      className:
                                        "jsx-33459c3f114da absolute w-1 h-1 rounded-full data-particle",
                                    },
                                    "data-particle-".concat(a)
                                  )
                                ),
                              ],
                            }),
                            [...Array(6)].map((e, a) =>
                              (0, r.jsx)(
                                "div",
                                {
                                  style: {
                                    transform:
                                      "translateX(-50%) rotate(".concat(
                                        60 * a,
                                        "deg)"
                                      ),
                                    background:
                                      "linear-gradient(90deg, transparent, rgba(219, 39, 119, 0.7), rgba(168, 85, 247, 0.7), transparent)",
                                    animation: "pulse-data-beam "
                                      .concat(
                                        1.5 + Math.random(),
                                        "s infinite alternate "
                                      )
                                      .concat(
                                        Math.random(),
                                        "s, data-flow 3s infinite linear"
                                      ),
                                  },
                                  className:
                                    "jsx-33459c3f114da absolute bottom-32 left-1/2 h-px w-40 data-beam",
                                },
                                "data-beam-".concat(a)
                              )
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(l(), {
                id: "33459c3f114da",
                children:
                  '@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-33459c3f114da{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}@-webkit-keyframes pulse-slow{0%,100%{opacity:.7}50%{opacity:1}}@-moz-keyframes pulse-slow{0%,100%{opacity:.7}50%{opacity:1}}@-o-keyframes pulse-slow{0%,100%{opacity:.7}50%{opacity:1}}@keyframes pulse-slow{0%,100%{opacity:.7}50%{opacity:1}}.animate-pulse-slow.jsx-33459c3f114da{-webkit-animation:pulse-slow 4s ease-in-out infinite;-moz-animation:pulse-slow 4s ease-in-out infinite;-o-animation:pulse-slow 4s ease-in-out infinite;animation:pulse-slow 4s ease-in-out infinite}@-webkit-keyframes float-slow{0%,100%{-webkit-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-20px);transform:translatey(-20px)}}@-moz-keyframes float-slow{0%,100%{-moz-transform:translatey(0);transform:translatey(0)}50%{-moz-transform:translatey(-20px);transform:translatey(-20px)}}@-o-keyframes float-slow{0%,100%{-o-transform:translatey(0);transform:translatey(0)}50%{-o-transform:translatey(-20px);transform:translatey(-20px)}}@keyframes float-slow{0%,100%{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}50%{-webkit-transform:translatey(-20px);-moz-transform:translatey(-20px);-o-transform:translatey(-20px);transform:translatey(-20px)}}.animate-float-slow.jsx-33459c3f114da{-webkit-animation:float-slow 15s ease-in-out infinite;-moz-animation:float-slow 15s ease-in-out infinite;-o-animation:float-slow 15s ease-in-out infinite;animation:float-slow 15s ease-in-out infinite}@-webkit-keyframes float-slower{0%,100%{-webkit-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0)}25%{-webkit-transform:translatey(-15px)translatex(15px);transform:translatey(-15px)translatex(15px)}50%{-webkit-transform:translatey(10px)translatex(-10px);transform:translatey(10px)translatex(-10px)}75%{-webkit-transform:translatey(-5px)translatex(5px);transform:translatey(-5px)translatex(5px)}}@-moz-keyframes float-slower{0%,100%{-moz-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0)}25%{-moz-transform:translatey(-15px)translatex(15px);transform:translatey(-15px)translatex(15px)}50%{-moz-transform:translatey(10px)translatex(-10px);transform:translatey(10px)translatex(-10px)}75%{-moz-transform:translatey(-5px)translatex(5px);transform:translatey(-5px)translatex(5px)}}@-o-keyframes float-slower{0%,100%{-o-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0)}25%{-o-transform:translatey(-15px)translatex(15px);transform:translatey(-15px)translatex(15px)}50%{-o-transform:translatey(10px)translatex(-10px);transform:translatey(10px)translatex(-10px)}75%{-o-transform:translatey(-5px)translatex(5px);transform:translatey(-5px)translatex(5px)}}@keyframes float-slower{0%,100%{-webkit-transform:translatey(0)translatex(0);-moz-transform:translatey(0)translatex(0);-o-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0)}25%{-webkit-transform:translatey(-15px)translatex(15px);-moz-transform:translatey(-15px)translatex(15px);-o-transform:translatey(-15px)translatex(15px);transform:translatey(-15px)translatex(15px)}50%{-webkit-transform:translatey(10px)translatex(-10px);-moz-transform:translatey(10px)translatex(-10px);-o-transform:translatey(10px)translatex(-10px);transform:translatey(10px)translatex(-10px)}75%{-webkit-transform:translatey(-5px)translatex(5px);-moz-transform:translatey(-5px)translatex(5px);-o-transform:translatey(-5px)translatex(5px);transform:translatey(-5px)translatex(5px)}}.animate-float-slower.jsx-33459c3f114da{-webkit-animation:float-slower 20s ease-in-out infinite;-moz-animation:float-slower 20s ease-in-out infinite;-o-animation:float-slower 20s ease-in-out infinite;animation:float-slower 20s ease-in-out infinite}@-webkit-keyframes ping-slow{0%{-webkit-transform:scale(.8);transform:scale(.8);opacity:1}80%,100%{-webkit-transform:scale(1.8);transform:scale(1.8);opacity:0}}@-moz-keyframes ping-slow{0%{-moz-transform:scale(.8);transform:scale(.8);opacity:1}80%,100%{-moz-transform:scale(1.8);transform:scale(1.8);opacity:0}}@-o-keyframes ping-slow{0%{-o-transform:scale(.8);transform:scale(.8);opacity:1}80%,100%{-o-transform:scale(1.8);transform:scale(1.8);opacity:0}}@keyframes ping-slow{0%{-webkit-transform:scale(.8);-moz-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8);opacity:1}80%,100%{-webkit-transform:scale(1.8);-moz-transform:scale(1.8);-o-transform:scale(1.8);transform:scale(1.8);opacity:0}}.animate-ping-slow.jsx-33459c3f114da{-webkit-animation:ping-slow 3s cubic-bezier(0,0,.2,1)infinite;-moz-animation:ping-slow 3s cubic-bezier(0,0,.2,1)infinite;-o-animation:ping-slow 3s cubic-bezier(0,0,.2,1)infinite;animation:ping-slow 3s cubic-bezier(0,0,.2,1)infinite}@-webkit-keyframes pulse-glow{0%,100%{opacity:.8;-webkit-box-shadow:0 0 15px 5px rgba(168,85,247,.7);box-shadow:0 0 15px 5px rgba(168,85,247,.7)}50%{opacity:1;-webkit-box-shadow:0 0 25px 10px rgba(219,39,119,.8);box-shadow:0 0 25px 10px rgba(219,39,119,.8)}}@-moz-keyframes pulse-glow{0%,100%{opacity:.8;-moz-box-shadow:0 0 15px 5px rgba(168,85,247,.7);box-shadow:0 0 15px 5px rgba(168,85,247,.7)}50%{opacity:1;-moz-box-shadow:0 0 25px 10px rgba(219,39,119,.8);box-shadow:0 0 25px 10px rgba(219,39,119,.8)}}@-o-keyframes pulse-glow{0%,100%{opacity:.8;box-shadow:0 0 15px 5px rgba(168,85,247,.7)}50%{opacity:1;box-shadow:0 0 25px 10px rgba(219,39,119,.8)}}@keyframes pulse-glow{0%,100%{opacity:.8;-webkit-box-shadow:0 0 15px 5px rgba(168,85,247,.7);-moz-box-shadow:0 0 15px 5px rgba(168,85,247,.7);box-shadow:0 0 15px 5px rgba(168,85,247,.7)}50%{opacity:1;-webkit-box-shadow:0 0 25px 10px rgba(219,39,119,.8);-moz-box-shadow:0 0 25px 10px rgba(219,39,119,.8);box-shadow:0 0 25px 10px rgba(219,39,119,.8)}}.animate-pulse-glow.jsx-33459c3f114da{-webkit-animation:pulse-glow 3s ease-in-out infinite;-moz-animation:pulse-glow 3s ease-in-out infinite;-o-animation:pulse-glow 3s ease-in-out infinite;animation:pulse-glow 3s ease-in-out infinite}@-webkit-keyframes float-particle{0%,100%{-webkit-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0)}50%{-webkit-transform:translatey(-10px)translatex(5px);transform:translatey(-10px)translatex(5px)}}@-moz-keyframes float-particle{0%,100%{-moz-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0)}50%{-moz-transform:translatey(-10px)translatex(5px);transform:translatey(-10px)translatex(5px)}}@-o-keyframes float-particle{0%,100%{-o-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0)}50%{-o-transform:translatey(-10px)translatex(5px);transform:translatey(-10px)translatex(5px)}}@keyframes float-particle{0%,100%{-webkit-transform:translatey(0)translatex(0);-moz-transform:translatey(0)translatex(0);-o-transform:translatey(0)translatex(0);transform:translatey(0)translatex(0)}50%{-webkit-transform:translatey(-10px)translatex(5px);-moz-transform:translatey(-10px)translatex(5px);-o-transform:translatey(-10px)translatex(5px);transform:translatey(-10px)translatex(5px)}}@-webkit-keyframes pulse-beam{0%,100%{opacity:.2;width:80%}50%{opacity:.8;width:100%}}@-moz-keyframes pulse-beam{0%,100%{opacity:.2;width:80%}50%{opacity:.8;width:100%}}@-o-keyframes pulse-beam{0%,100%{opacity:.2;width:80%}50%{opacity:.8;width:100%}}@keyframes pulse-beam{0%,100%{opacity:.2;width:80%}50%{opacity:.8;width:100%}}@-webkit-keyframes float-data{0%,100%{-webkit-transform:translatey(0)scale(1);transform:translatey(0)scale(1)}50%{-webkit-transform:translatey(-15px)scale(1.2);transform:translatey(-15px)scale(1.2)}}@-moz-keyframes float-data{0%,100%{-moz-transform:translatey(0)scale(1);transform:translatey(0)scale(1)}50%{-moz-transform:translatey(-15px)scale(1.2);transform:translatey(-15px)scale(1.2)}}@-o-keyframes float-data{0%,100%{-o-transform:translatey(0)scale(1);transform:translatey(0)scale(1)}50%{-o-transform:translatey(-15px)scale(1.2);transform:translatey(-15px)scale(1.2)}}@keyframes float-data{0%,100%{-webkit-transform:translatey(0)scale(1);-moz-transform:translatey(0)scale(1);-o-transform:translatey(0)scale(1);transform:translatey(0)scale(1)}50%{-webkit-transform:translatey(-15px)scale(1.2);-moz-transform:translatey(-15px)scale(1.2);-o-transform:translatey(-15px)scale(1.2);transform:translatey(-15px)scale(1.2)}}@-webkit-keyframes pulse-data-node{0%,100%{opacity:.7;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.3);transform:scale(1.3)}}@-moz-keyframes pulse-data-node{0%,100%{opacity:.7;-moz-transform:scale(1);transform:scale(1)}50%{opacity:1;-moz-transform:scale(1.3);transform:scale(1.3)}}@-o-keyframes pulse-data-node{0%,100%{opacity:.7;-o-transform:scale(1);transform:scale(1)}50%{opacity:1;-o-transform:scale(1.3);transform:scale(1.3)}}@keyframes pulse-data-node{0%,100%{opacity:.7;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.3);-moz-transform:scale(1.3);-o-transform:scale(1.3);transform:scale(1.3)}}@-webkit-keyframes rotate-node{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes rotate-node{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes rotate-node{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-node{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse-data-beam{0%,100%{opacity:.3}50%{opacity:.8}}@-moz-keyframes pulse-data-beam{0%,100%{opacity:.3}50%{opacity:.8}}@-o-keyframes pulse-data-beam{0%,100%{opacity:.3}50%{opacity:.8}}@keyframes pulse-data-beam{0%,100%{opacity:.3}50%{opacity:.8}}@-webkit-keyframes data-flow{0%{background-position:-100px 0}100%{background-position:100px 0}}@-moz-keyframes data-flow{0%{background-position:-100px 0}100%{background-position:100px 0}}@-o-keyframes data-flow{0%{background-position:-100px 0}100%{background-position:100px 0}}@keyframes data-flow{0%{background-position:-100px 0}100%{background-position:100px 0}}.animate-fade-in-up.jsx-33459c3f114da{-webkit-animation:fadeInUp 1s forwards;-moz-animation:fadeInUp 1s forwards;-o-animation:fadeInUp 1s forwards;animation:fadeInUp 1s forwards}@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translatey(30px);transform:translatey(30px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fadeInUp{from{opacity:0;-moz-transform:translatey(30px);transform:translatey(30px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fadeInUp{from{opacity:0;-o-transform:translatey(30px);transform:translatey(30px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translatey(30px);-moz-transform:translatey(30px);-o-transform:translatey(30px);transform:translatey(30px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.hologram-glow.jsx-33459c3f114da{position:relative;&.jsx-33459c3f114da:before{content:"";position:absolute;inset:-10px;background:-webkit-radial-gradient(circle,rgba(168,85,247,.2)0%,rgba(236,72,153,.1)50%,transparent 70%);background:-moz-radial-gradient(circle,rgba(168,85,247,.2)0%,rgba(236,72,153,.1)50%,transparent 70%);background:-o-radial-gradient(circle,rgba(168,85,247,.2)0%,rgba(236,72,153,.1)50%,transparent 70%);background:radial-gradient(circle,rgba(168,85,247,.2)0%,rgba(236,72,153,.1)50%,transparent 70%);z-index:-1;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:pulse-slow 4s ease-in-out infinite alternate;-moz-animation:pulse-slow 4s ease-in-out infinite alternate;-o-animation:pulse-slow 4s ease-in-out infinite alternate;animation:pulse-slow 4s ease-in-out infinite alternate}}.glass-effect.jsx-33459c3f114da{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);background:rgba(255,255,255,.05);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px}.scan-line.jsx-33459c3f114da{position:absolute;inset:0;background:-webkit-linear-gradient(top,transparent,rgba(168,85,247,.2),rgba(236,72,153,.2),transparent);background:-moz-linear-gradient(top,transparent,rgba(168,85,247,.2),rgba(236,72,153,.2),transparent);background:-o-linear-gradient(top,transparent,rgba(168,85,247,.2),rgba(236,72,153,.2),transparent);background:linear-gradient(to bottom,transparent,rgba(168,85,247,.2),rgba(236,72,153,.2),transparent);-webkit-background-size:100%200%;-moz-background-size:100%200%;-o-background-size:100%200%;background-size:100%200%;-webkit-animation:scan 3s ease-in-out infinite;-moz-animation:scan 3s ease-in-out infinite;-o-animation:scan 3s ease-in-out infinite;animation:scan 3s ease-in-out infinite;pointer-events:none;z-index:10}.scan-line-vertical.jsx-33459c3f114da{position:absolute;inset:0;background:-webkit-linear-gradient(left,transparent,rgba(168,85,247,.2),rgba(236,72,153,.2),transparent);background:-moz-linear-gradient(left,transparent,rgba(168,85,247,.2),rgba(236,72,153,.2),transparent);background:-o-linear-gradient(left,transparent,rgba(168,85,247,.2),rgba(236,72,153,.2),transparent);background:linear-gradient(to right,transparent,rgba(168,85,247,.2),rgba(236,72,153,.2),transparent);-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%;-webkit-animation:scan-horizontal 3s ease-in-out infinite;-moz-animation:scan-horizontal 3s ease-in-out infinite;-o-animation:scan-horizontal 3s ease-in-out infinite;animation:scan-horizontal 3s ease-in-out infinite;pointer-events:none;z-index:10}@-webkit-keyframes scan{0%,100%{background-position:0 -100%}50%{background-position:0 200%}}@-moz-keyframes scan{0%,100%{background-position:0 -100%}50%{background-position:0 200%}}@-o-keyframes scan{0%,100%{background-position:0 -100%}50%{background-position:0 200%}}@keyframes scan{0%,100%{background-position:0 -100%}50%{background-position:0 200%}}@-webkit-keyframes scan-horizontal{0%,100%{background-position:-100%0}50%{background-position:200%0}}@-moz-keyframes scan-horizontal{0%,100%{background-position:-100%0}50%{background-position:200%0}}@-o-keyframes scan-horizontal{0%,100%{background-position:-100%0}50%{background-position:200%0}}@keyframes scan-horizontal{0%,100%{background-position:-100%0}50%{background-position:200%0}}.energy-core-gradient.jsx-33459c3f114da{background:-webkit-radial-gradient(circle,rgba(255,255,255,.9)0%,rgba(168,85,247,.7)40%,rgba(236,72,153,.7)70%);background:-moz-radial-gradient(circle,rgba(255,255,255,.9)0%,rgba(168,85,247,.7)40%,rgba(236,72,153,.7)70%);background:-o-radial-gradient(circle,rgba(255,255,255,.9)0%,rgba(168,85,247,.7)40%,rgba(236,72,153,.7)70%);background:radial-gradient(circle,rgba(255,255,255,.9)0%,rgba(168,85,247,.7)40%,rgba(236,72,153,.7)70%);-webkit-box-shadow:0 0 20px 5px rgba(168,85,247,.6);-moz-box-shadow:0 0 20px 5px rgba(168,85,247,.6);box-shadow:0 0 20px 5px rgba(168,85,247,.6)}.beam-line.jsx-33459c3f114da{opacity:.7;-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%}.rotating-element.jsx-33459c3f114da{-webkit-animation:rotate 30s linear infinite;-moz-animation:rotate 30s linear infinite;-o-animation:rotate 30s linear infinite;animation:rotate 30s linear infinite}.rotating-slow.jsx-33459c3f114da{-webkit-animation:rotate 60s linear infinite;-moz-animation:rotate 60s linear infinite;-o-animation:rotate 60s linear infinite;animation:rotate 60s linear infinite}@-webkit-keyframes rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes rotate{from{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes rotate{from{-o-transform:rotate(0deg);transform:rotate(0deg)}to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.hexagon-3d.jsx-33459c3f114da{-webkit-clip-path:polygon(50%0%,93%25%,93%75%,50%100%,7%75%,7%25%);clip-path:polygon(50%0%,93%25%,93%75%,50%100%,7%75%,7%25%);position:relative;&.jsx-33459c3f114da:before{content:"";position:absolute;inset:4px;background:rgba(8,8,20,.2);-webkit-clip-path:polygon(50%0%,93%25%,93%75%,50%100%,7%75%,7%25%);clip-path:polygon(50%0%,93%25%,93%75%,50%100%,7%75%,7%25%);z-index:-1}}.pulsing-shadow.jsx-33459c3f114da{-webkit-animation:pulse-shadow 3s ease-in-out infinite;-moz-animation:pulse-shadow 3s ease-in-out infinite;-o-animation:pulse-shadow 3s ease-in-out infinite;animation:pulse-shadow 3s ease-in-out infinite}@-webkit-keyframes pulse-shadow{0%,100%{-webkit-box-shadow:0 0 15px 5px rgba(168,85,247,.4);box-shadow:0 0 15px 5px rgba(168,85,247,.4)}50%{-webkit-box-shadow:0 0 25px 10px rgba(236,72,153,.5);box-shadow:0 0 25px 10px rgba(236,72,153,.5)}}@-moz-keyframes pulse-shadow{0%,100%{-moz-box-shadow:0 0 15px 5px rgba(168,85,247,.4);box-shadow:0 0 15px 5px rgba(168,85,247,.4)}50%{-moz-box-shadow:0 0 25px 10px rgba(236,72,153,.5);box-shadow:0 0 25px 10px rgba(236,72,153,.5)}}@-o-keyframes pulse-shadow{0%,100%{box-shadow:0 0 15px 5px rgba(168,85,247,.4)}50%{box-shadow:0 0 25px 10px rgba(236,72,153,.5)}}@keyframes pulse-shadow{0%,100%{-webkit-box-shadow:0 0 15px 5px rgba(168,85,247,.4);-moz-box-shadow:0 0 15px 5px rgba(168,85,247,.4);box-shadow:0 0 15px 5px rgba(168,85,247,.4)}50%{-webkit-box-shadow:0 0 25px 10px rgba(236,72,153,.5);-moz-box-shadow:0 0 25px 10px rgba(236,72,153,.5);box-shadow:0 0 25px 10px rgba(236,72,153,.5)}}.orbit-element.jsx-33459c3f114da{-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center;-webkit-animation:orbit 10s linear infinite;-moz-animation:orbit 10s linear infinite;-o-animation:orbit 10s linear infinite;animation:orbit 10s linear infinite}@-webkit-keyframes orbit{from{-webkit-transform:rotate(0deg)translatex(60px)rotate(0deg);transform:rotate(0deg)translatex(60px)rotate(0deg)}to{-webkit-transform:rotate(360deg)translatex(60px)rotate(-360deg);transform:rotate(360deg)translatex(60px)rotate(-360deg)}}@-moz-keyframes orbit{from{-moz-transform:rotate(0deg)translatex(60px)rotate(0deg);transform:rotate(0deg)translatex(60px)rotate(0deg)}to{-moz-transform:rotate(360deg)translatex(60px)rotate(-360deg);transform:rotate(360deg)translatex(60px)rotate(-360deg)}}@-o-keyframes orbit{from{-o-transform:rotate(0deg)translatex(60px)rotate(0deg);transform:rotate(0deg)translatex(60px)rotate(0deg)}to{-o-transform:rotate(360deg)translatex(60px)rotate(-360deg);transform:rotate(360deg)translatex(60px)rotate(-360deg)}}@keyframes orbit{from{-webkit-transform:rotate(0deg)translatex(60px)rotate(0deg);-moz-transform:rotate(0deg)translatex(60px)rotate(0deg);-o-transform:rotate(0deg)translatex(60px)rotate(0deg);transform:rotate(0deg)translatex(60px)rotate(0deg)}to{-webkit-transform:rotate(360deg)translatex(60px)rotate(-360deg);-moz-transform:rotate(360deg)translatex(60px)rotate(-360deg);-o-transform:rotate(360deg)translatex(60px)rotate(-360deg);transform:rotate(360deg)translatex(60px)rotate(-360deg)}}.pulse-glow.jsx-33459c3f114da{-webkit-animation:pulse-glow 2s ease-in-out infinite;-moz-animation:pulse-glow 2s ease-in-out infinite;-o-animation:pulse-glow 2s ease-in-out infinite;animation:pulse-glow 2s ease-in-out infinite}.grid-pattern.jsx-33459c3f114da{background-image:-webkit-linear-gradient(rgba(168,85,247,.1)1px,transparent 1px),-webkit-linear-gradient(left,rgba(168,85,247,.1)1px,transparent 1px);background-image:-moz-linear-gradient(rgba(168,85,247,.1)1px,transparent 1px),-moz-linear-gradient(left,rgba(168,85,247,.1)1px,transparent 1px);background-image:-o-linear-gradient(rgba(168,85,247,.1)1px,transparent 1px),-o-linear-gradient(left,rgba(168,85,247,.1)1px,transparent 1px);background-image:linear-gradient(rgba(168,85,247,.1)1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.1)1px,transparent 1px);-webkit-background-size:30px 30px;-moz-background-size:30px 30px;-o-background-size:30px 30px;background-size:30px 30px}.neural-network.jsx-33459c3f114da{-webkit-clip-path:circle(50%at center);clip-path:circle(50%at center);position:relative}.neural-connections.jsx-33459c3f114da{background-image:-webkit-radial-gradient(circle,rgba(236,72,153,.3)1px,transparent 1px),-webkit-radial-gradient(circle,rgba(168,85,247,.3)1px,transparent 1px);background-image:-moz-radial-gradient(circle,rgba(236,72,153,.3)1px,transparent 1px),-moz-radial-gradient(circle,rgba(168,85,247,.3)1px,transparent 1px);background-image:-o-radial-gradient(circle,rgba(236,72,153,.3)1px,transparent 1px),-o-radial-gradient(circle,rgba(168,85,247,.3)1px,transparent 1px);background-image:radial-gradient(circle,rgba(236,72,153,.3)1px,transparent 1px),radial-gradient(circle,rgba(168,85,247,.3)1px,transparent 1px);-webkit-background-size:20px 20px;-moz-background-size:20px 20px;-o-background-size:20px 20px;background-size:20px 20px;background-position:0 0,10px 10px;-webkit-animation:pulse-network 4s ease-in-out infinite alternate;-moz-animation:pulse-network 4s ease-in-out infinite alternate;-o-animation:pulse-network 4s ease-in-out infinite alternate;animation:pulse-network 4s ease-in-out infinite alternate}@-webkit-keyframes pulse-network{0%,100%{opacity:.5;-webkit-background-size:20px 20px;background-size:20px 20px}50%{opacity:.8;-webkit-background-size:25px 25px;background-size:25px 25px}}@-moz-keyframes pulse-network{0%,100%{opacity:.5;-moz-background-size:20px 20px;background-size:20px 20px}50%{opacity:.8;-moz-background-size:25px 25px;background-size:25px 25px}}@-o-keyframes pulse-network{0%,100%{opacity:.5;-o-background-size:20px 20px;background-size:20px 20px}50%{opacity:.8;-o-background-size:25px 25px;background-size:25px 25px}}@keyframes pulse-network{0%,100%{opacity:.5;-webkit-background-size:20px 20px;-moz-background-size:20px 20px;-o-background-size:20px 20px;background-size:20px 20px}50%{opacity:.8;-webkit-background-size:25px 25px;-moz-background-size:25px 25px;-o-background-size:25px 25px;background-size:25px 25px}}.ai-core-pulsing.jsx-33459c3f114da{-webkit-animation:ai-core-pulse 4s ease-in-out infinite;-moz-animation:ai-core-pulse 4s ease-in-out infinite;-o-animation:ai-core-pulse 4s ease-in-out infinite;animation:ai-core-pulse 4s ease-in-out infinite}@-webkit-keyframes ai-core-pulse{0%,100%{-webkit-box-shadow:0 0 20px 8px rgba(236,72,153,.4);box-shadow:0 0 20px 8px rgba(236,72,153,.4)}50%{-webkit-box-shadow:0 0 30px 12px rgba(168,85,247,.5);box-shadow:0 0 30px 12px rgba(168,85,247,.5)}}@-moz-keyframes ai-core-pulse{0%,100%{-moz-box-shadow:0 0 20px 8px rgba(236,72,153,.4);box-shadow:0 0 20px 8px rgba(236,72,153,.4)}50%{-moz-box-shadow:0 0 30px 12px rgba(168,85,247,.5);box-shadow:0 0 30px 12px rgba(168,85,247,.5)}}@-o-keyframes ai-core-pulse{0%,100%{box-shadow:0 0 20px 8px rgba(236,72,153,.4)}50%{box-shadow:0 0 30px 12px rgba(168,85,247,.5)}}@keyframes ai-core-pulse{0%,100%{-webkit-box-shadow:0 0 20px 8px rgba(236,72,153,.4);-moz-box-shadow:0 0 20px 8px rgba(236,72,153,.4);box-shadow:0 0 20px 8px rgba(236,72,153,.4)}50%{-webkit-box-shadow:0 0 30px 12px rgba(168,85,247,.5);-moz-box-shadow:0 0 30px 12px rgba(168,85,247,.5);box-shadow:0 0 30px 12px rgba(168,85,247,.5)}}.brain-visualization.jsx-33459c3f114da{position:relative;overflow:hidden;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(20,20,40,.3)}.brain-hemisphere.jsx-33459c3f114da{-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;opacity:.7}.left-hemisphere.jsx-33459c3f114da{-webkit-clip-path:polygon(0 0,50%0,50%100%,0%100%);clip-path:polygon(0 0,50%0,50%100%,0%100%);background:-webkit-linear-gradient(315deg,rgba(168,85,247,.4),rgba(168,85,247,.2));background:-moz-linear-gradient(315deg,rgba(168,85,247,.4),rgba(168,85,247,.2));background:-o-linear-gradient(315deg,rgba(168,85,247,.4),rgba(168,85,247,.2));background:linear-gradient(135deg,rgba(168,85,247,.4),rgba(168,85,247,.2));-webkit-animation:pulse-left 3s ease-in-out infinite alternate;-moz-animation:pulse-left 3s ease-in-out infinite alternate;-o-animation:pulse-left 3s ease-in-out infinite alternate;animation:pulse-left 3s ease-in-out infinite alternate}.right-hemisphere.jsx-33459c3f114da{-webkit-clip-path:polygon(50%0,100%0,100%100%,50%100%);clip-path:polygon(50%0,100%0,100%100%,50%100%);background:-webkit-linear-gradient(225deg,rgba(236,72,153,.4),rgba(236,72,153,.2));background:-moz-linear-gradient(225deg,rgba(236,72,153,.4),rgba(236,72,153,.2));background:-o-linear-gradient(225deg,rgba(236,72,153,.4),rgba(236,72,153,.2));background:linear-gradient(225deg,rgba(236,72,153,.4),rgba(236,72,153,.2));animation:pulse-right 3s ease-in-out infinite alternate-reverse}@-webkit-keyframes pulse-left{0%,100%{opacity:.5}50%{opacity:.8}}@-moz-keyframes pulse-left{0%,100%{opacity:.5}50%{opacity:.8}}@-o-keyframes pulse-left{0%,100%{opacity:.5}50%{opacity:.8}}@keyframes pulse-left{0%,100%{opacity:.5}50%{opacity:.8}}@-webkit-keyframes pulse-right{0%,100%{opacity:.5}50%{opacity:.8}}@-moz-keyframes pulse-right{0%,100%{opacity:.5}50%{opacity:.8}}@-o-keyframes pulse-right{0%,100%{opacity:.5}50%{opacity:.8}}@keyframes pulse-right{0%,100%{opacity:.5}50%{opacity:.8}}.neural-activity.jsx-33459c3f114da{background-image:-webkit-radial-gradient(circle,rgba(255,255,255,.7)1px,transparent 1px);background-image:-moz-radial-gradient(circle,rgba(255,255,255,.7)1px,transparent 1px);background-image:-o-radial-gradient(circle,rgba(255,255,255,.7)1px,transparent 1px);background-image:radial-gradient(circle,rgba(255,255,255,.7)1px,transparent 1px);-webkit-background-size:8px 8px;-moz-background-size:8px 8px;-o-background-size:8px 8px;background-size:8px 8px;-webkit-animation:neural-pulse 2s ease-in-out infinite;-moz-animation:neural-pulse 2s ease-in-out infinite;-o-animation:neural-pulse 2s ease-in-out infinite;animation:neural-pulse 2s ease-in-out infinite}@-webkit-keyframes neural-pulse{0%,100%{opacity:.3}50%{opacity:.7}}@-moz-keyframes neural-pulse{0%,100%{opacity:.3}50%{opacity:.7}}@-o-keyframes neural-pulse{0%,100%{opacity:.3}50%{opacity:.7}}@keyframes neural-pulse{0%,100%{opacity:.3}50%{opacity:.7}}.circuit-board.jsx-33459c3f114da{background-image:-webkit-linear-gradient(left,transparent 90%,rgba(236,72,153,.3)90%,rgba(236,72,153,.3)100%),-webkit-linear-gradient(transparent 90%,rgba(168,85,247,.3)90%,rgba(168,85,247,.3)100%);background-image:-moz-linear-gradient(left,transparent 90%,rgba(236,72,153,.3)90%,rgba(236,72,153,.3)100%),-moz-linear-gradient(transparent 90%,rgba(168,85,247,.3)90%,rgba(168,85,247,.3)100%);background-image:-o-linear-gradient(left,transparent 90%,rgba(236,72,153,.3)90%,rgba(236,72,153,.3)100%),-o-linear-gradient(transparent 90%,rgba(168,85,247,.3)90%,rgba(168,85,247,.3)100%);background-image:linear-gradient(90deg,transparent 90%,rgba(236,72,153,.3)90%,rgba(236,72,153,.3)100%),linear-gradient(transparent 90%,rgba(168,85,247,.3)90%,rgba(168,85,247,.3)100%);-webkit-background-size:20px 20px;-moz-background-size:20px 20px;-o-background-size:20px 20px;background-size:20px 20px;opacity:.6}.data-particle.jsx-33459c3f114da{-webkit-filter:blur(1px);filter:blur(1px)}.data-beam.jsx-33459c3f114da{-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%}.particle-network.jsx-33459c3f114da{position:absolute;inset:0;overflow:hidden}@media(max-width:768px){.hologram-container.jsx-33459c3f114da{scale:.85}}',
              }),
            ],
          });
        },
        M = (e) => {
          let { isDarkMode: a } = e,
            [t, n] = (0, s.useState)(!1),
            [o, i] = (0, s.useState)(0),
            [c, d] = (0, s.useState)(0),
            [f, m] = (0, s.useState)(!1),
            x = (0, s.useRef)(null),
            p = (0, s.useRef)(null),
            b = (0, s.useRef)(0),
            u = (0, s.useRef)(0),
            g = [
              { name: "News BTC", logo: "/brands/newsbtc.png", width: 130 },
              {
                name: "Business Insider",
                logo: "/brands/businessinsider.png",
                width: 130,
              },
              {
                name: "Analytics Insight",
                logo: "/brands/analytics.png",
                width: 130,
              },
              {
                name: "The News Crypto",
                logo: "/brands/thenewscrypto.png",
                width: 130,
              },
              {
                name: "CoinTelegraph",
                logo: "/brands/cointelegraph.png",
                width: 130,
              },
              {
                name: "Bitcoin.com",
                logo: "/brands/bitcoin.com.png",
                width: 130,
              },
              {
                name: "Crypto Politan",
                logo: "/brands/cryptopolitan.png",
                width: 130,
              },
              {
                name: "Crypto Daily",
                logo: "/brands/cryptodaily.png",
                width: 130,
              },
              {
                name: "Crypto.com",
                logo: "/brands/crypto.com.png",
                width: 130,
              },
            ],
            h = a ? "bg-[#13101A]/70" : "bg-white/70",
            k = a ? "text-white" : "text-gray-800",
            y = [...g, ...g, ...g];
          (0, s.useEffect)(() => {
            let e = () => {
              if (x.current) {
                if (t || f) {
                  p.current &&
                    (cancelAnimationFrame(p.current), (p.current = null));
                  return;
                }
                x.current.scrollLeft >= x.current.scrollWidth / 3
                  ? (x.current.scrollLeft = 0)
                  : (x.current.scrollLeft += 0.8),
                  (p.current = requestAnimationFrame(e));
              }
            };
            return (
              (p.current = requestAnimationFrame(e)),
              () => {
                p.current && cancelAnimationFrame(p.current);
              }
            );
          }, [t, f]);
          let j = (e) => {
              n(!0),
                i(e.pageX - x.current.offsetLeft),
                d(x.current.scrollLeft),
                (u.current = Date.now()),
                (document.body.style.cursor = "grabbing");
            },
            w = (e) => {
              n(!0),
                i(e.touches[0].clientX - x.current.offsetLeft),
                d(x.current.scrollLeft),
                (u.current = Date.now());
            },
            v = (e) => {
              if (!t) return;
              e.preventDefault();
              let a = e.pageX - x.current.offsetLeft,
                r = (a - o) * 2;
              x.current.scrollLeft = c - r;
              let s = Date.now(),
                n = s - u.current;
              n > 0 && ((b.current = r / n), (u.current = s));
            },
            N = (e) => {
              if (!t) return;
              let a = e.touches[0].clientX - x.current.offsetLeft,
                r = (a - o) * 2;
              x.current.scrollLeft = c - r;
              let s = Date.now(),
                n = s - u.current;
              n > 0 && ((b.current = r / n), (u.current = s));
            },
            z = () => {
              n(!1),
                (document.body.style.cursor = "default"),
                Math.abs(b.current) > 0.5 && E();
            },
            C = () => {
              n(!1), Math.abs(b.current) > 0.5 && E();
            },
            E = () => {
              let e = 15 * b.current,
                a = Date.now(),
                r = () => {
                  let s = Date.now(),
                    n = s - a;
                  (a = s),
                    0.5 > Math.abs(e) ||
                      t ||
                      ((x.current.scrollLeft -= e * n),
                      (e *= 0.95),
                      requestAnimationFrame(r));
                };
              requestAnimationFrame(r);
            },
            M = () => {
              m(!1), t && (n(!1), (document.body.style.cursor = "default"));
            },
            L = () => {
              m(!0);
            };
          return (0, r.jsxs)("section", {
            className:
              "jsx-d008b8abdde794aa " +
              "relative w-full py-12 overflow-hidden ".concat(
                a
                  ? "bg-gradient-to-r from-[#0E0B12] via-[#0E0B12] to-[#0E0B12]"
                  : "bg-gradient-to-r from-[#EBEBFA] via-[#f0f1ff] to-[#EBEBFA]"
              ),
            children: [
              (0, r.jsx)("div", {
                className: "jsx-d008b8abdde794aa container mx-auto px-4 mb-8",
                children: (0, r.jsxs)("div", {
                  className: "jsx-d008b8abdde794aa text-center mb-8",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "jsx-d008b8abdde794aa inline-block p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4",
                      children: (0, r.jsx)("p", {
                        className:
                          "jsx-d008b8abdde794aa text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                        children: "Trusted Partners",
                      }),
                    }),
                    (0, r.jsxs)("h2", {
                      className:
                        "jsx-d008b8abdde794aa " +
                        "text-3xl md:text-4xl font-bold ".concat(k),
                      children: [
                        "Our",
                        " ",
                        (0, r.jsx)("span", {
                          className:
                            "jsx-d008b8abdde794aa bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                          children: "Strategic",
                        }),
                        " ",
                        "Partners",
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-d008b8abdde794aa absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-d008b8abdde794aa absolute -top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-d008b8abdde794aa absolute -bottom-32 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "jsx-d008b8abdde794aa relative",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-d008b8abdde794aa absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-[#0E0B12] to-transparent opacity-90 dark:opacity-80",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-d008b8abdde794aa absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-[#0E0B12] to-transparent opacity-90 dark:opacity-80",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-d008b8abdde794aa absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-d008b8abdde794aa absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent",
                  }),
                  (0, r.jsx)("div", {
                    ref: x,
                    style: {
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    },
                    onMouseDown: j,
                    onMouseMove: v,
                    onMouseUp: z,
                    onMouseEnter: L,
                    onMouseLeave: M,
                    onTouchStart: w,
                    onTouchMove: N,
                    onTouchEnd: C,
                    className:
                      "jsx-d008b8abdde794aa " +
                      "flex overflow-x-scroll scrollbar-hide py-6 ".concat(
                        t ? "cursor-grabbing" : "cursor-grab"
                      ),
                    children: (0, r.jsx)("div", {
                      className:
                        "jsx-d008b8abdde794aa flex whitespace-nowrap px-4",
                      children: y.map((e, a) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            style: { minWidth: "".concat(e.width + 50, "px") },
                            className:
                              "jsx-d008b8abdde794aa " +
                              "flex items-center mx-6 px-6 py-4 rounded-xl ".concat(
                                h,
                                " backdrop-blur-sm border border-gray-200/10 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                              ),
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-d008b8abdde794aa relative w-12 h-12 mr-4 flex items-center justify-center overflow-hidden",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-d008b8abdde794aa absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                  }),
                                  (0, r.jsx)("img", {
                                    src: e.logo,
                                    alt: e.name,
                                    className:
                                      "jsx-d008b8abdde794aa w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110 relative z-10",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "jsx-d008b8abdde794aa flex flex-col",
                                children: [
                                  (0, r.jsx)("span", {
                                    className:
                                      "jsx-d008b8abdde794aa " +
                                      "font-medium "
                                        .concat(
                                          k,
                                          " transition-colors duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:"
                                        )
                                        .concat("from-purple-500 to-pink-500"),
                                    children: e.name,
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-d008b8abdde794aa h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1 transition-all duration-300 group-hover:w-full",
                                  }),
                                ],
                              }),
                            ],
                          },
                          "brand-".concat(a)
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "jsx-d008b8abdde794aa mt-6 text-center",
                children: (0, r.jsxs)("div", {
                  className:
                    "jsx-d008b8abdde794aa " +
                    "inline-flex items-center px-4 py-2 rounded-full "
                      .concat(a ? "bg-gray-800/30" : "bg-gray-200/50", " ")
                      .concat(k, " text-sm"),
                  children: [
                    (0, r.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      className:
                        "jsx-d008b8abdde794aa h-4 w-4 mr-2 animate-bounce-x",
                      children: (0, r.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10 19l-7-7m0 0l7-7m-7 7h18",
                        className: "jsx-d008b8abdde794aa",
                      }),
                    }),
                    (0, r.jsx)("span", {
                      className: "jsx-d008b8abdde794aa",
                      children: "Drag to explore",
                    }),
                    (0, r.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      className:
                        "jsx-d008b8abdde794aa h-4 w-4 ml-2 animate-bounce-x-reverse",
                      children: (0, r.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M14 5l7 7m0 0l-7 7m7-7H3",
                        className: "jsx-d008b8abdde794aa",
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(l(), {
                id: "d008b8abdde794aa",
                children:
                  ".scrollbar-hide.jsx-d008b8abdde794aa::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-d008b8abdde794aa{scrollbar-width:none}.scrollbar-hide.jsx-d008b8abdde794aa{-ms-overflow-style:none}@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-d008b8abdde794aa{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}@-webkit-keyframes bounce-x{0%,100%{-webkit-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(-10px);transform:translatex(-10px)}}@-moz-keyframes bounce-x{0%,100%{-moz-transform:translatex(0);transform:translatex(0)}50%{-moz-transform:translatex(-10px);transform:translatex(-10px)}}@-o-keyframes bounce-x{0%,100%{-o-transform:translatex(0);transform:translatex(0)}50%{-o-transform:translatex(-10px);transform:translatex(-10px)}}@keyframes bounce-x{0%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(-10px);-moz-transform:translatex(-10px);-o-transform:translatex(-10px);transform:translatex(-10px)}}.animate-bounce-x.jsx-d008b8abdde794aa{-webkit-animation:bounce-x 1.5s ease-in-out infinite;-moz-animation:bounce-x 1.5s ease-in-out infinite;-o-animation:bounce-x 1.5s ease-in-out infinite;animation:bounce-x 1.5s ease-in-out infinite}@-webkit-keyframes bounce-x-reverse{0%,100%{-webkit-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(10px);transform:translatex(10px)}}@-moz-keyframes bounce-x-reverse{0%,100%{-moz-transform:translatex(0);transform:translatex(0)}50%{-moz-transform:translatex(10px);transform:translatex(10px)}}@-o-keyframes bounce-x-reverse{0%,100%{-o-transform:translatex(0);transform:translatex(0)}50%{-o-transform:translatex(10px);transform:translatex(10px)}}@keyframes bounce-x-reverse{0%,100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}50%{-webkit-transform:translatex(10px);-moz-transform:translatex(10px);-o-transform:translatex(10px);transform:translatex(10px)}}.animate-bounce-x-reverse.jsx-d008b8abdde794aa{-webkit-animation:bounce-x-reverse 1.5s ease-in-out infinite;-moz-animation:bounce-x-reverse 1.5s ease-in-out infinite;-o-animation:bounce-x-reverse 1.5s ease-in-out infinite;animation:bounce-x-reverse 1.5s ease-in-out infinite}",
              }),
            ],
          });
        },
        L = () =>
          (0, r.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "feature-icon",
            children: [
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: "aiGradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [
                    (0, r.jsx)("stop", { offset: "0%", stopColor: "#9333EA" }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#EC4899",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("rect", {
                x: "10",
                y: "10",
                width: "16",
                height: "16",
                rx: "2",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M10 4V8",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M18 4V8",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M26 4V8",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M10 18H4",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M32 18H28",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M10 18H26V26H10V18Z",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinejoin: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M10 26V32",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M18 28V32",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M26 28V32",
                stroke: "url(#aiGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
            ],
          }),
        S = () =>
          (0, r.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "feature-icon",
            children: [
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: "liveGradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [
                    (0, r.jsx)("stop", { offset: "0%", stopColor: "#9333EA" }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#EC4899",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("rect", {
                x: "6",
                y: "10",
                width: "24",
                height: "16",
                rx: "2",
                stroke: "url(#liveGradient)",
                strokeWidth: "2",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M14 22L22 18L14 14V22Z",
                stroke: "url(#liveGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M26 26L28 30",
                stroke: "url(#liveGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("circle", {
                cx: "28",
                cy: "28",
                r: "3",
                stroke: "url(#liveGradient)",
                strokeWidth: "2",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M27 28.5L28 29.5L30 27",
                stroke: "url(#liveGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke icon-checkmark",
              }),
            ],
          }),
        D = () =>
          (0, r.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "feature-icon",
            children: [
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: "vrGradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [
                    (0, r.jsx)("stop", { offset: "0%", stopColor: "#9333EA" }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#EC4899",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("rect", {
                x: "6",
                y: "12",
                width: "24",
                height: "12",
                rx: "4",
                stroke: "url(#vrGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M12 24V26C12 27.1046 12.8954 28 14 28H22C23.1046 28 24 27.1046 24 26V24",
                stroke: "url(#vrGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("circle", {
                cx: "14",
                cy: "18",
                r: "2",
                stroke: "url(#vrGradient)",
                strokeWidth: "2",
                className: "icon-stroke icon-eye",
              }),
              (0, r.jsx)("circle", {
                cx: "22",
                cy: "18",
                r: "2",
                stroke: "url(#vrGradient)",
                strokeWidth: "2",
                className: "icon-stroke icon-eye",
              }),
            ],
          }),
        B = () =>
          (0, r.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "feature-icon",
            children: [
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: "frameworkGradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [
                    (0, r.jsx)("stop", { offset: "0%", stopColor: "#9333EA" }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#EC4899",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("path", {
                d: "M8 6L18 10L28 6",
                stroke: "url(#frameworkGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M18 10V30",
                stroke: "url(#frameworkGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M8 6V22L18 30",
                stroke: "url(#frameworkGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke",
              }),
              (0, r.jsx)("path", {
                d: "M28 6V22L18 30",
                stroke: "url(#frameworkGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke",
              }),
            ],
          }),
        A = () =>
          (0, r.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "feature-icon",
            children: [
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: "govGradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [
                    (0, r.jsx)("stop", { offset: "0%", stopColor: "#9333EA" }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#EC4899",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("path", {
                d: "M18 4V8",
                stroke: "url(#govGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke icon-ray",
              }),
              (0, r.jsx)("path", {
                d: "M18 28V32",
                stroke: "url(#govGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke icon-ray",
              }),
              (0, r.jsx)("path", {
                d: "M8.34 8.34L11.17 11.17",
                stroke: "url(#govGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke icon-ray",
              }),
              (0, r.jsx)("path", {
                d: "M24.83 24.83L27.66 27.66",
                stroke: "url(#govGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke icon-ray",
              }),
              (0, r.jsx)("path", {
                d: "M4 18H8",
                stroke: "url(#govGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke icon-ray",
              }),
              (0, r.jsx)("path", {
                d: "M28 18H32",
                stroke: "url(#govGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke icon-ray",
              }),
              (0, r.jsx)("path", {
                d: "M8.34 27.66L11.17 24.83",
                stroke: "url(#govGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke icon-ray",
              }),
              (0, r.jsx)("path", {
                d: "M24.83 11.17L27.66 8.34",
                stroke: "url(#govGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                className: "icon-stroke icon-ray",
              }),
            ],
          }),
        F = () =>
          (0, r.jsxs)("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 36 36",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "feature-icon",
            children: [
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: "decGradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "100%",
                  children: [
                    (0, r.jsx)("stop", { offset: "0%", stopColor: "#9333EA" }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopColor: "#EC4899",
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("path", {
                d: "M4 18L10 12L16 18L10 24L4 18Z",
                stroke: "url(#decGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke icon-node-1",
              }),
              (0, r.jsx)("path", {
                d: "M16 18L22 12L28 18L22 24L16 18Z",
                stroke: "url(#decGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke icon-node-2",
              }),
              (0, r.jsx)("path", {
                d: "M28 18L32 14",
                stroke: "url(#decGradient)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "icon-stroke icon-link",
              }),
            ],
          }),
        T = (e) => {
          let { isDarkMode: a } = e,
            t = [
              {
                icon: (0, r.jsx)(D, {}),
                title: "Immersive VR Marketplace",
                description:
                  "Step into a fully interactive 3D marketplace where buyers and sellers experience commerce like never before.",
              },
              {
                icon: (0, r.jsx)(L, {}),
                title: "AI-Powered Commerce Engine",
                description:
                  "Leverage advanced AI to optimize product recommendations, manage virtual storefronts, and deliver a personalized shopping experience.",
              },
              {
                icon: (0, r.jsx)(B, {}),
                title: "Secure Escrow Transactions",
                description:
                  "Enjoy peace of mind with a robust escrow system that ensures funds are securely held until all transaction conditions are met.",
              },
              {
                icon: (0, r.jsx)(A, {}),
                title: "Governance Integration",
                description:
                  "Seamless fusion of decentralized governance and AI for smarter, community-driven decision-making.",
              },
              {
                icon: (0, r.jsx)(S, {}),
                title: "Live Product Verification",
                description:
                  "Request real-time live video demonstrations in VR to verify product authenticity, ensuring complete transparency and trust.",
              },
              {
                icon: (0, r.jsx)(F, {}),
                title: "Decentralized Governance",
                description:
                  "Empower FSX token holders to shape the platform's evolution through transparent, community-driven decision-making.",
              },
            ],
            n = (0, s.useRef)([]);
          n.current = t.map((e, a) => n.current[a] || s.createRef());
          let [o, i] = (0, s.useState)([]);
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              (a) => {
                a.forEach((a) => {
                  if (a.isIntersecting) {
                    let t = n.current.findIndex((e) => e.current === a.target);
                    -1 === t || o.includes(t) || i((e) => [...e, t]),
                      e.unobserve(a.target);
                  }
                });
              },
              { root: null, rootMargin: "0px", threshold: 0.15 }
            );
            return (
              n.current.forEach((a) => {
                a.current && e.observe(a.current);
              }),
              () => {
                n.current.forEach((a) => {
                  a.current && e.unobserve(a.current);
                });
              }
            );
          }, [o]);
          let c = a ? "bg-[#14101A]/90" : "bg-white/80",
            d = a ? "border-purple-900/30" : "border-purple-200/50",
            f = a
              ? "shadow-lg shadow-purple-500/5"
              : "shadow-xl shadow-purple-300/10",
            m = a ? "text-white" : "text-gray-800",
            x = a ? "text-gray-400" : "text-gray-600";
          return (0, r.jsxs)("section", {
            className:
              "jsx-4255e0aa7c023fe4 " +
              "relative w-full py-20 overflow-hidden ".concat(
                a
                  ? "bg-[#0E0B12]"
                  : "bg-gradient-to-b from-[#EBEBFA] via-[#f0f1ff] to-[#EBEBFA]"
              ),
            children: [
              (0, r.jsxs)("div", {
                className:
                  "jsx-4255e0aa7c023fe4 absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-4255e0aa7c023fe4 absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-4255e0aa7c023fe4 absolute bottom-40 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-4255e0aa7c023fe4 absolute inset-0 bg-grid-pattern opacity-10",
                  }),
                  (0, r.jsx)("div", {
                    className: "jsx-4255e0aa7c023fe4 particles-container",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-4255e0aa7c023fe4 container mx-auto px-4 relative z-10",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "jsx-4255e0aa7c023fe4 relative text-center mb-16",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "jsx-4255e0aa7c023fe4 inline-block p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4 transform hover:scale-105 transition-transform duration-300",
                        children: (0, r.jsx)("p", {
                          className:
                            "jsx-4255e0aa7c023fe4 text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                          children: "Future-Ready Features",
                        }),
                      }),
                      (0, r.jsxs)("h2", {
                        className:
                          "jsx-4255e0aa7c023fe4 text-2xl md:text-3xl lg:text-4xl font-bold mb-6",
                        children: [
                          (0, r.jsxs)("span", {
                            className:
                              "jsx-4255e0aa7c023fe4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 animate-gradient-x",
                            children: ["Revolutionizing Digital", " "],
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "jsx-4255e0aa7c023fe4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 animate-gradient-x",
                            children: "Commerce & AI",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-4255e0aa7c023fe4 mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "jsx-4255e0aa7c023fe4 " +
                          "text-lg max-w-2xl mx-auto ".concat(x),
                        children:
                          "Shaping Tomorrow with an AI-Powered Marketplace that combines cutting-edge technology with seamless user experiences",
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-4255e0aa7c023fe4 absolute -top-10 left-1/2 transform -translate-x-1/2 w-full",
                        children: (0, r.jsxs)("svg", {
                          width: "200",
                          height: "60",
                          viewBox: "0 0 200 60",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "jsx-4255e0aa7c023fe4 mx-auto opacity-20",
                          children: [
                            (0, r.jsx)("path", {
                              d: "M100 0L200 60H0L100 0Z",
                              fill: "url(#headerTriangle)",
                              className: "jsx-4255e0aa7c023fe4",
                            }),
                            (0, r.jsx)("defs", {
                              className: "jsx-4255e0aa7c023fe4",
                              children: (0, r.jsxs)("linearGradient", {
                                id: "headerTriangle",
                                x1: "100",
                                y1: "0",
                                x2: "100",
                                y2: "60",
                                gradientUnits: "userSpaceOnUse",
                                className: "jsx-4255e0aa7c023fe4",
                                children: [
                                  (0, r.jsx)("stop", {
                                    stopColor: "#9333EA",
                                    className: "jsx-4255e0aa7c023fe4",
                                  }),
                                  (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#EC4899",
                                    stopOpacity: "0",
                                    className: "jsx-4255e0aa7c023fe4",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-4255e0aa7c023fe4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: t.map((e, a) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          ref: n.current[a],
                          style: {
                            opacity: o.includes(a) ? 1 : 0,
                            transform: o.includes(a)
                              ? "translateY(0)"
                              : "translateY(20px)",
                          },
                          className:
                            "jsx-4255e0aa7c023fe4 " +
                            ""
                              .concat(c, " backdrop-blur-md border ")
                              .concat(d, " ")
                              .concat(
                                f,
                                " rounded-xl p-8 flex flex-col hover:scale-[1.02] hover:shadow-xl group feature-card transition-all duration-500"
                              ),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "jsx-4255e0aa7c023fe4 mb-6 relative",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-4255e0aa7c023fe4 absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500",
                                }),
                                (0, r.jsx)("div", {
                                  className: "jsx-4255e0aa7c023fe4 relative",
                                  children: e.icon,
                                }),
                              ],
                            }),
                            (0, r.jsx)("h3", {
                              className:
                                "jsx-4255e0aa7c023fe4 " +
                                "text-xl font-bold mb-4 transition-colors duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:"
                                  .concat("from-purple-500 to-pink-500", " ")
                                  .concat(m),
                              children: e.title,
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-4255e0aa7c023fe4 " + "".concat(x, " grow"),
                              children: e.description,
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-4255e0aa7c023fe4 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100",
                            }),
                          ],
                        },
                        a
                      )
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "jsx-4255e0aa7c023fe4 mt-16 text-center",
                    children: (0, r.jsx)("div", {
                      className:
                        "jsx-4255e0aa7c023fe4 inline-block p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 transform hover:scale-105 transition-transform duration-300",
                      children: (0, r.jsxs)("p", {
                        className:
                          "jsx-4255e0aa7c023fe4 " +
                          "".concat(m, " font-medium"),
                        children: [
                          "Join us in building the future of commerce with",
                          (0, r.jsx)("span", {
                            className:
                              "jsx-4255e0aa7c023fe4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 ml-1 animate-gradient-x font-bold",
                            children: "FutureSyncX",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(l(), {
                id: "4255e0aa7c023fe4",
                children:
                  '@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-4255e0aa7c023fe4{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fadeInUp{from{opacity:0;-moz-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fadeInUp{from{opacity:0;-o-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translatey(20px);-moz-transform:translatey(20px);-o-transform:translatey(20px);transform:translatey(20px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.animate-fade-in-up.jsx-4255e0aa7c023fe4{-webkit-animation:fadeInUp.6s ease-out forwards;-moz-animation:fadeInUp.6s ease-out forwards;-o-animation:fadeInUp.6s ease-out forwards;animation:fadeInUp.6s ease-out forwards}.bg-grid-pattern.jsx-4255e0aa7c023fe4{background-image:-webkit-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-webkit-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-moz-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-moz-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-o-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-o-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:linear-gradient(to right,rgba(147,51,234,.1)1px,transparent 1px),linear-gradient(to bottom,rgba(147,51,234,.1)1px,transparent 1px);-webkit-background-size:30px 30px;-moz-background-size:30px 30px;-o-background-size:30px 30px;background-size:30px 30px}.particles-container.jsx-4255e0aa7c023fe4{position:absolute;top:0;left:0;width:100%;height:100%}.particles-container.jsx-4255e0aa7c023fe4::before,.particles-container.jsx-4255e0aa7c023fe4::after{content:"";position:absolute;width:3px;height:3px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:rgba(236,72,153,.3);-webkit-box-shadow:0 0 10px 2px rgba(236,72,153,.2);-moz-box-shadow:0 0 10px 2px rgba(236,72,153,.2);box-shadow:0 0 10px 2px rgba(236,72,153,.2)}.particles-container.jsx-4255e0aa7c023fe4::before{top:20%;left:30%;-webkit-animation:floatParticle 20s infinite linear;-moz-animation:floatParticle 20s infinite linear;-o-animation:floatParticle 20s infinite linear;animation:floatParticle 20s infinite linear}.particles-container.jsx-4255e0aa7c023fe4::after{top:70%;left:60%;animation:floatParticle 15s infinite linear reverse}@-webkit-keyframes floatParticle{0%{-webkit-transform:translate(0,0);transform:translate(0,0)}25%{-webkit-transform:translate(100px,50px);transform:translate(100px,50px)}50%{-webkit-transform:translate(50px,100px);transform:translate(50px,100px)}75%{-webkit-transform:translate(-50px,50px);transform:translate(-50px,50px)}100%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@-moz-keyframes floatParticle{0%{-moz-transform:translate(0,0);transform:translate(0,0)}25%{-moz-transform:translate(100px,50px);transform:translate(100px,50px)}50%{-moz-transform:translate(50px,100px);transform:translate(50px,100px)}75%{-moz-transform:translate(-50px,50px);transform:translate(-50px,50px)}100%{-moz-transform:translate(0,0);transform:translate(0,0)}}@-o-keyframes floatParticle{0%{-o-transform:translate(0,0);transform:translate(0,0)}25%{-o-transform:translate(100px,50px);transform:translate(100px,50px)}50%{-o-transform:translate(50px,100px);transform:translate(50px,100px)}75%{-o-transform:translate(-50px,50px);transform:translate(-50px,50px)}100%{-o-transform:translate(0,0);transform:translate(0,0)}}@keyframes floatParticle{0%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}25%{-webkit-transform:translate(100px,50px);-moz-transform:translate(100px,50px);-o-transform:translate(100px,50px);transform:translate(100px,50px)}50%{-webkit-transform:translate(50px,100px);-moz-transform:translate(50px,100px);-o-transform:translate(50px,100px);transform:translate(50px,100px)}75%{-webkit-transform:translate(-50px,50px);-moz-transform:translate(-50px,50px);-o-transform:translate(-50px,50px);transform:translate(-50px,50px)}100%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}}.feature-icon{-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center;-webkit-transition:-webkit-transform.3s ease;-moz-transition:-moz-transform.3s ease;-o-transition:-o-transform.3s ease;transition:-webkit-transform.3s ease;transition:-moz-transform.3s ease;transition:-o-transform.3s ease;transition:transform.3s ease}.feature-card:hover .feature-icon{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.icon-stroke{stroke-dasharray:100;stroke-dashoffset:0;-webkit-transition:stroke-dashoffset.6s ease;-moz-transition:stroke-dashoffset.6s ease;-o-transition:stroke-dashoffset.6s ease;transition:stroke-dashoffset.6s ease}.feature-card:hover .icon-stroke{stroke-dashoffset:100;-webkit-animation:strokeAnimation 1.5s ease forwards;-moz-animation:strokeAnimation 1.5s ease forwards;-o-animation:strokeAnimation 1.5s ease forwards;animation:strokeAnimation 1.5s ease forwards}@-webkit-keyframes strokeAnimation{0%{stroke-dashoffset:100}100%{stroke-dashoffset:0}}@-moz-keyframes strokeAnimation{0%{stroke-dashoffset:100}100%{stroke-dashoffset:0}}@-o-keyframes strokeAnimation{0%{stroke-dashoffset:100}100%{stroke-dashoffset:0}}@keyframes strokeAnimation{0%{stroke-dashoffset:100}100%{stroke-dashoffset:0}}.icon-ray{opacity:.8;-webkit-animation:rayPulse 3s ease-in-out infinite;-moz-animation:rayPulse 3s ease-in-out infinite;-o-animation:rayPulse 3s ease-in-out infinite;animation:rayPulse 3s ease-in-out infinite}@-webkit-keyframes rayPulse{0%,100%{opacity:.8}50%{opacity:1}}@-moz-keyframes rayPulse{0%,100%{opacity:.8}50%{opacity:1}}@-o-keyframes rayPulse{0%,100%{opacity:.8}50%{opacity:1}}@keyframes rayPulse{0%,100%{opacity:.8}50%{opacity:1}}.icon-eye{-webkit-animation:blinkEye 4s ease-in-out infinite;-moz-animation:blinkEye 4s ease-in-out infinite;-o-animation:blinkEye 4s ease-in-out infinite;animation:blinkEye 4s ease-in-out infinite}@-webkit-keyframes blinkEye{0%,45%,55%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.8);transform:scale(.8)}}@-moz-keyframes blinkEye{0%,45%,55%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(.8);transform:scale(.8)}}@-o-keyframes blinkEye{0%,45%,55%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(.8);transform:scale(.8)}}@keyframes blinkEye{0%,45%,55%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.8);-moz-transform:scale(.8);-o-transform:scale(.8);transform:scale(.8)}}.icon-checkmark{stroke-dasharray:30;stroke-dashoffset:30;-webkit-animation:drawCheckmark 2s ease infinite;-moz-animation:drawCheckmark 2s ease infinite;-o-animation:drawCheckmark 2s ease infinite;animation:drawCheckmark 2s ease infinite}@-webkit-keyframes drawCheckmark{0%{stroke-dashoffset:30}50%,100%{stroke-dashoffset:0}}@-moz-keyframes drawCheckmark{0%{stroke-dashoffset:30}50%,100%{stroke-dashoffset:0}}@-o-keyframes drawCheckmark{0%{stroke-dashoffset:30}50%,100%{stroke-dashoffset:0}}@keyframes drawCheckmark{0%{stroke-dashoffset:30}50%,100%{stroke-dashoffset:0}}.icon-node-1{-webkit-animation:pulseNode 3s ease-in-out infinite;-moz-animation:pulseNode 3s ease-in-out infinite;-o-animation:pulseNode 3s ease-in-out infinite;animation:pulseNode 3s ease-in-out infinite}.icon-node-2{-webkit-animation:pulseNode 3s ease-in-out infinite.5s;-moz-animation:pulseNode 3s ease-in-out infinite.5s;-o-animation:pulseNode 3s ease-in-out infinite.5s;animation:pulseNode 3s ease-in-out infinite.5s}@-webkit-keyframes pulseNode{0%,100%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}}@-moz-keyframes pulseNode{0%,100%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.05);transform:scale(1.05)}}@-o-keyframes pulseNode{0%,100%{-o-transform:scale(1);transform:scale(1)}50%{-o-transform:scale(1.05);transform:scale(1.05)}}@keyframes pulseNode{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}}.icon-link{stroke-dasharray:10;-webkit-animation:flowLink 2s linear infinite;-moz-animation:flowLink 2s linear infinite;-o-animation:flowLink 2s linear infinite;animation:flowLink 2s linear infinite}@-webkit-keyframes flowLink{to{stroke-dashoffset:-20}}@-moz-keyframes flowLink{to{stroke-dashoffset:-20}}@-o-keyframes flowLink{to{stroke-dashoffset:-20}}@keyframes flowLink{to{stroke-dashoffset:-20}}',
              }),
            ],
          });
        },
        I = (e) => {
          let { isDarkMode: a } = e,
            [t, n] = (0, s.useState)(0),
            [o, i] = (0, s.useState)(null),
            [c, d] = (0, s.useState)([]),
            f = (0, s.useRef)(null),
            m = (0, s.useRef)(null),
            x = (0, s.useRef)(null),
            p = a ? "bg-[#1A1525]/90" : "bg-white/90",
            b = a ? "text-white" : "text-gray-800",
            u = a ? "text-purple-300" : "text-purple-600",
            g = a ? "text-gray-300" : "text-gray-600",
            h = a ? "border-purple-800/30" : "border-purple-200/50",
            k = a
              ? "bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600"
              : "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500",
            y = a ? "bg-[#1A1525]" : "bg-white",
            j = a
              ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30"
              : "bg-gradient-to-r from-purple-100/80 to-pink-100/80",
            w = a ? "text-purple-300" : "text-purple-600";
          console.log(t),
            (0, s.useEffect)(() => {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    e.isIntersecting &&
                      (e.target === f.current
                        ? d((e) => [
                            ...e.filter((e) => "header" !== e),
                            "header",
                          ])
                        : e.target === m.current
                        ? d((e) => [
                            ...e.filter((e) => "roadmap" !== e),
                            "roadmap",
                          ])
                        : e.target === x.current &&
                          d((e) => [
                            ...e.filter((e) => "button" !== e),
                            "button",
                          ]));
                  });
                },
                { root: null, rootMargin: "0px", threshold: 0.2 }
              );
              return (
                f.current && e.observe(f.current),
                m.current && e.observe(m.current),
                x.current && e.observe(x.current),
                () => {
                  e.disconnect();
                }
              );
            }, []);
          let v = [
            {
              title: "Phase 1: Q1 2026",
              subtitle: "Foundation & Expansion",
              description:
                "Setting the groundwork for our platform ecosystem and expanding our initial partnerships.",
              items: [
                "Strategic Partnerships with Key Industry Players",
                "Technical Framework & Interactive Prototypes",
                "Community Growth & Early Adopter Program",
              ],
              icon: (0, r.jsx)("svg", {
                className: "w-6 h-6 text-purple-500",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsx)("path", {
                  d: "M21 7L13 15L9 11L3 17M21 7H15M21 7V13",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              }),
            },
            {
              title: "Phase 2: Q2 2026",
              subtitle: "VR Marketplace Launch",
              description:
                "Introducing our virtual reality marketplace with essential tools for creators and buyers.",
              items: [
                "VR Marketplace Beta Release",
                "Advanced Seller & Buyer Tools Development",
                "Creator Onboarding Program",
              ],
              icon: (0, r.jsxs)("svg", {
                className: "w-6 h-6 text-purple-500",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, r.jsx)("path", {
                    d: "M3 10C3 8.34315 4.34315 7 6 7H18C19.6569 7 21 8.34315 21 10V14C21 15.6569 19.6569 17 18 17H16L14 13H10L8 17H6C4.34315 17 3 15.6569 3 14V10Z",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, r.jsx)("path", {
                    d: "M12 2V6M9 4L12 1L15 4",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
            },
            {
              title: "Phase 3: Q3 2026",
              subtitle: "FutureSyncx Digital Marketplace",
              description:
                "Full marketplace rollout with advanced features and community integration.",
              items: [
                "Complete Marketplace Public Launch",
                "Advanced Analytics & Sales Dashboard",
                "Community Integration & Social Features",
              ],
              icon: (0, r.jsxs)("svg", {
                className: "w-6 h-6 text-purple-500",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, r.jsx)("path", {
                    d: "M3 9L4 4H20L21 9M3 9H21M3 9L5 20H19L21 9",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  (0, r.jsx)("path", {
                    d: "M7 13H17M9 17H15",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
            },
            {
              title: "Phase 4: Q4 2026",
              subtitle: "AI-Powered 3D Model Creation",
              description:
                "Integrating artificial intelligence to revolutionize 3D asset creation and display.",
              items: [
                "AI-Assisted 3D Asset Generation Tools",
                "Seamless AR/VR Integration",
                "Innovation Grant Program Launch",
              ],
              icon: (0, r.jsx)("svg", {
                className: "w-6 h-6 text-purple-500",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsx)("path", {
                  d: "M12 3V5M12 19V21M5 12H3M21 12H19M16.24 7.76L17.66 6.34M6.34 17.66L7.76 16.24M16.24 16.24L17.66 17.66M6.34 6.34L7.76 7.76M9 12A3 3 0 0 1 15 12A3 3 0 0 1 9 12Z",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              }),
            },
            {
              title: "Phase 5: Q1 2027",
              subtitle: "Continuous Improvement & Decentralization",
              description:
                "Transitioning to decentralized governance and ongoing platform enhancements.",
              items: [
                "DAO-Based Governance Implementation",
                "Ongoing Platform Enhancements",
                "Expanded Ecosystem Integrations",
              ],
              icon: (0, r.jsxs)("svg", {
                className: "w-6 h-6 text-purple-500",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, r.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2",
                    stroke: "currentColor",
                    strokeWidth: "2",
                  }),
                  (0, r.jsx)("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2",
                    stroke: "currentColor",
                    strokeWidth: "2",
                  }),
                  (0, r.jsx)("circle", {
                    cx: "20",
                    cy: "4",
                    r: "2",
                    stroke: "currentColor",
                    strokeWidth: "2",
                  }),
                  (0, r.jsx)("circle", {
                    cx: "4",
                    cy: "20",
                    r: "2",
                    stroke: "currentColor",
                    strokeWidth: "2",
                  }),
                  (0, r.jsx)("circle", {
                    cx: "20",
                    cy: "20",
                    r: "2",
                    stroke: "currentColor",
                    strokeWidth: "2",
                  }),
                  (0, r.jsx)("path", {
                    d: "M12 12L4 4M12 12L20 4M12 12L4 20M12 12L20 20",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
            },
          ];
          return (0, r.jsxs)("section", {
            className:
              "jsx-f29c2246fb6f9bcd " +
              "relative w-full py-24 overflow-hidden ".concat(
                a
                  ? "bg-[#0E0B12]"
                  : "bg-gradient-to-b from-[#EBEBFA] via-[#f0f1ff] to-[#EBEBFA]"
              ),
            children: [
              (0, r.jsxs)("div", {
                className:
                  "jsx-f29c2246fb6f9bcd absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-f29c2246fb6f9bcd absolute top-10 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-f29c2246fb6f9bcd absolute bottom-40 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-f29c2246fb6f9bcd absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-f29c2246fb6f9bcd absolute inset-0 bg-grid-pattern opacity-5",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-f29c2246fb6f9bcd container mx-auto px-6 relative z-10 max-w-7xl",
                children: [
                  (0, r.jsxs)("div", {
                    ref: f,
                    style: {
                      opacity: c.includes("header") ? 1 : 0,
                      transform: c.includes("header")
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                    },
                    className: "jsx-f29c2246fb6f9bcd text-center mb-20",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "jsx-f29c2246fb6f9bcd inline-block p-2 px-5 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4 transform hover:scale-105 transition-transform duration-300",
                        children: (0, r.jsx)("p", {
                          className:
                            "jsx-f29c2246fb6f9bcd text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                          children: "Our Vision & Development Journey",
                        }),
                      }),
                      (0, r.jsxs)("h2", {
                        className:
                          "jsx-f29c2246fb6f9bcd text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight",
                        children: [
                          (0, r.jsxs)("span", {
                            className:
                              "jsx-f29c2246fb6f9bcd bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x",
                            children: ["FutureSyncx", " "],
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "jsx-f29c2246fb6f9bcd bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 animate-gradient-x",
                            children: "Roadmap",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-f29c2246fb6f9bcd mx-auto w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-10",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "jsx-f29c2246fb6f9bcd " +
                          "text-lg md:text-xl max-w-3xl mx-auto ".concat(g),
                        children:
                          "A strategic vision for building the next generation of immersive commerce experiences that will transform how people create, share, and trade digital assets",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    ref: m,
                    style: {
                      opacity: c.includes("roadmap") ? 1 : 0,
                      transform: c.includes("roadmap")
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 0.8s ease-out, transform 0.8s ease-out",
                      transitionDelay: "0.2s",
                    },
                    className: "jsx-f29c2246fb6f9bcd mx-auto",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "jsx-f29c2246fb6f9bcd hidden lg:block relative",
                        children: (0, r.jsxs)("div", {
                          className:
                            "jsx-f29c2246fb6f9bcd " +
                            "mx-auto max-w-6xl rounded-2xl "
                              .concat(p, " backdrop-blur-md border ")
                              .concat(h, " shadow-xl overflow-hidden p-10"),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "jsx-f29c2246fb6f9bcd relative mb-20",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-f29c2246fb6f9bcd absolute top-1/2 left-0 right-0 h-2 rounded-full bg-gray-200/50",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-f29c2246fb6f9bcd absolute top-1/2 left-0 right-0 h-2 rounded-full overflow-hidden",
                                  children: (0, r.jsx)("div", {
                                    style: { width: "100%" },
                                    className:
                                      "jsx-f29c2246fb6f9bcd " +
                                      "h-full ".concat(k, " rounded-full"),
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-f29c2246fb6f9bcd relative flex justify-between",
                                  children: v.map((e, a) =>
                                    (0, r.jsxs)(
                                      "div",
                                      {
                                        onMouseEnter: () => {
                                          null === o && n(a);
                                        },
                                        onMouseLeave: () => {
                                          null === o && n(null);
                                        },
                                        onClick: () => {
                                          o === a
                                            ? (i(null), n(null))
                                            : (i(a), n(a));
                                        },
                                        className:
                                          "jsx-f29c2246fb6f9bcd relative flex flex-col items-center",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "jsx-f29c2246fb6f9bcd " +
                                              "w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300 cursor-pointer "
                                                .concat(
                                                  t === a
                                                    ? "scale-110 shadow-purple-500/30"
                                                    : "shadow-purple-500/20",
                                                  " "
                                                )
                                                .concat(k),
                                            children: (0, r.jsx)("span", {
                                              className:
                                                "jsx-f29c2246fb6f9bcd text-white font-bold text-xl",
                                              children: a + 1,
                                            }),
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "jsx-f29c2246fb6f9bcd " +
                                              "absolute -top-16 text-center transition-all duration-300 ".concat(
                                                t === a
                                                  ? "opacity-100"
                                                  : "opacity-80"
                                              ),
                                            children: (0, r.jsx)("p", {
                                              className:
                                                "jsx-f29c2246fb6f9bcd " +
                                                "font-semibold text-lg ".concat(
                                                  b,
                                                  " whitespace-nowrap"
                                                ),
                                              children: e.title,
                                            }),
                                          }),
                                        ],
                                      },
                                      a
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-f29c2246fb6f9bcd p-8 border-t border-purple-200/30",
                              children:
                                null !== t && t >= 0 && t < v.length
                                  ? (0, r.jsxs)("div", {
                                      className:
                                        "jsx-f29c2246fb6f9bcd grid grid-cols-3 gap-8",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className:
                                            "jsx-f29c2246fb6f9bcd col-span-1",
                                          children: [
                                            (0, r.jsxs)("div", {
                                              className:
                                                "jsx-f29c2246fb6f9bcd " +
                                                "p-5 rounded-xl ".concat(
                                                  j,
                                                  " mb-4 flex items-center gap-4"
                                                ),
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "jsx-f29c2246fb6f9bcd " +
                                                    "w-12 h-12 rounded-full flex items-center justify-center ".concat(
                                                      k
                                                    ),
                                                  children: (0, r.jsx)("span", {
                                                    className:
                                                      "jsx-f29c2246fb6f9bcd text-white font-bold text-xl",
                                                    children: t + 1,
                                                  }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "jsx-f29c2246fb6f9bcd",
                                                  children: [
                                                    (0, r.jsx)("h3", {
                                                      className:
                                                        "jsx-f29c2246fb6f9bcd " +
                                                        "text-xl font-bold ".concat(
                                                          b
                                                        ),
                                                      children: v[t].subtitle,
                                                    }),
                                                    (0, r.jsx)("p", {
                                                      className:
                                                        "jsx-f29c2246fb6f9bcd " +
                                                        "text-sm font-medium ".concat(
                                                          u
                                                        ),
                                                      children: v[t].title,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, r.jsx)("p", {
                                              className:
                                                "jsx-f29c2246fb6f9bcd " +
                                                "text-base ".concat(
                                                  g,
                                                  " mb-4 leading-relaxed"
                                                ),
                                              children: v[t].description,
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "jsx-f29c2246fb6f9bcd col-span-2",
                                          children: [
                                            (0, r.jsx)("h4", {
                                              className:
                                                "jsx-f29c2246fb6f9bcd " +
                                                "text-lg font-semibold ".concat(
                                                  b,
                                                  " mb-5"
                                                ),
                                              children: "Key Deliverables",
                                            }),
                                            (0, r.jsx)("ul", {
                                              className:
                                                "jsx-f29c2246fb6f9bcd grid grid-cols-1 gap-5",
                                              children: v[t].items.map((e, a) =>
                                                (0, r.jsxs)(
                                                  "li",
                                                  {
                                                    className:
                                                      "jsx-f29c2246fb6f9bcd " +
                                                      "p-4 rounded-lg "
                                                        .concat(y, " border ")
                                                        .concat(
                                                          h,
                                                          " shadow-sm flex items-start"
                                                        ),
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "jsx-f29c2246fb6f9bcd " +
                                                          "mr-4 p-2 rounded-lg ".concat(
                                                            j
                                                          ),
                                                        children: v[t].icon,
                                                      }),
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "jsx-f29c2246fb6f9bcd " +
                                                          "text-base ".concat(
                                                            g
                                                          ),
                                                        children: e,
                                                      }),
                                                    ],
                                                  },
                                                  a
                                                )
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : (0, r.jsxs)("div", {
                                      className:
                                        "jsx-f29c2246fb6f9bcd text-center py-6",
                                      children: [
                                        (0, r.jsx)("p", {
                                          className:
                                            "jsx-f29c2246fb6f9bcd " +
                                            "text-lg ".concat(b, " mb-3"),
                                          children:
                                            "Click on a phase number to see details",
                                        }),
                                        (0, r.jsx)("p", {
                                          className:
                                            "jsx-f29c2246fb6f9bcd " +
                                            "text-base ".concat(g),
                                          children:
                                            "Our roadmap outlines the journey of FutureSyncx from foundation to full decentralization.",
                                        }),
                                      ],
                                    }),
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-f29c2246fb6f9bcd hidden md:block lg:hidden",
                        children: (0, r.jsx)("div", {
                          className:
                            "jsx-f29c2246fb6f9bcd grid grid-cols-3 gap-6",
                          children: v.map((e, a) =>
                            (0, r.jsxs)(
                              "div",
                              {
                                className:
                                  "jsx-f29c2246fb6f9bcd " +
                                  ""
                                    .concat(p, " rounded-xl border ")
                                    .concat(
                                      h,
                                      " backdrop-blur-sm shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    ),
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-f29c2246fb6f9bcd " +
                                      "".concat(k, " h-2 w-full"),
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "jsx-f29c2246fb6f9bcd p-5",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "jsx-f29c2246fb6f9bcd flex justify-between items-start mb-4",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "jsx-f29c2246fb6f9bcd " +
                                              "rounded-lg p-2 ".concat(j),
                                            children: e.icon,
                                          }),
                                          (0, r.jsx)("span", {
                                            className:
                                              "jsx-f29c2246fb6f9bcd " +
                                              "font-bold text-lg ".concat(w),
                                            children: a + 1,
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("h3", {
                                        className:
                                          "jsx-f29c2246fb6f9bcd " +
                                          "text-lg font-bold ".concat(
                                            b,
                                            " mb-1"
                                          ),
                                        children: e.subtitle,
                                      }),
                                      (0, r.jsx)("p", {
                                        className:
                                          "jsx-f29c2246fb6f9bcd " +
                                          "text-xs ".concat(
                                            w,
                                            " font-medium mb-3"
                                          ),
                                        children: e.title,
                                      }),
                                      (0, r.jsx)("ul", {
                                        className:
                                          "jsx-f29c2246fb6f9bcd space-y-2",
                                        children: e.items.map((e, a) =>
                                          (0, r.jsxs)(
                                            "li",
                                            {
                                              className:
                                                "jsx-f29c2246fb6f9bcd flex items-start",
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "jsx-f29c2246fb6f9bcd mr-2 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "jsx-f29c2246fb6f9bcd " +
                                                    "text-xs ".concat(g),
                                                  children: e,
                                                }),
                                              ],
                                            },
                                            a
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              a
                            )
                          ),
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "jsx-f29c2246fb6f9bcd md:hidden",
                        children: (0, r.jsxs)("div", {
                          className:
                            "jsx-f29c2246fb6f9bcd relative flex flex-col space-y-6",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "jsx-f29c2246fb6f9bcd absolute top-0 left-4 bottom-0 w-1 rounded-full bg-gray-200/50",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-f29c2246fb6f9bcd absolute top-0 left-4 bottom-0 w-1 rounded-full overflow-hidden",
                              children: (0, r.jsx)("div", {
                                className:
                                  "jsx-f29c2246fb6f9bcd " +
                                  "h-full ".concat(k, " rounded-full"),
                              }),
                            }),
                            v.map((e, a) =>
                              (0, r.jsxs)(
                                "div",
                                {
                                  onClick: () => n(t === a ? null : a),
                                  className:
                                    "jsx-f29c2246fb6f9bcd " +
                                    "flex items-start relative transition-all duration-300 ".concat(
                                      t === a ? "transform scale-[1.02]" : ""
                                    ),
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "jsx-f29c2246fb6f9bcd " +
                                        "w-8 h-8 rounded-full ".concat(
                                          k,
                                          " flex items-center justify-center z-10 flex-shrink-0 shadow-lg shadow-purple-500/20"
                                        ),
                                      children: (0, r.jsx)("span", {
                                        className:
                                          "jsx-f29c2246fb6f9bcd text-white font-bold text-sm",
                                        children: a + 1,
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "jsx-f29c2246fb6f9bcd " +
                                        "ml-4 "
                                          .concat(p, " rounded-xl border ")
                                          .concat(
                                            t === a
                                              ? "border-purple-300/30"
                                              : h,
                                            " backdrop-blur-sm shadow-md overflow-hidden flex-grow transition-all duration-300"
                                          ),
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className:
                                            "jsx-f29c2246fb6f9bcd " +
                                            "".concat(j, " p-3"),
                                          children: [
                                            (0, r.jsx)("h3", {
                                              className:
                                                "jsx-f29c2246fb6f9bcd " +
                                                "text-base font-bold ".concat(
                                                  b,
                                                  " mb-1"
                                                ),
                                              children: e.subtitle,
                                            }),
                                            (0, r.jsx)("p", {
                                              className:
                                                "jsx-f29c2246fb6f9bcd " +
                                                "text-xs font-medium ".concat(
                                                  u
                                                ),
                                              children: e.title,
                                            }),
                                          ],
                                        }),
                                        t === a &&
                                          (0, r.jsxs)("div", {
                                            className:
                                              "jsx-f29c2246fb6f9bcd p-4 border-t border-purple-200/30",
                                            children: [
                                              (0, r.jsx)("p", {
                                                className:
                                                  "jsx-f29c2246fb6f9bcd " +
                                                  "text-sm ".concat(g, " mb-3"),
                                                children: e.description,
                                              }),
                                              (0, r.jsx)("ul", {
                                                className:
                                                  "jsx-f29c2246fb6f9bcd space-y-2",
                                                children: e.items.map((e, a) =>
                                                  (0, r.jsxs)(
                                                    "li",
                                                    {
                                                      className:
                                                        "jsx-f29c2246fb6f9bcd flex items-start",
                                                      children: [
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "jsx-f29c2246fb6f9bcd mr-2 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0",
                                                        }),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "jsx-f29c2246fb6f9bcd " +
                                                            "text-xs ".concat(
                                                              g
                                                            ),
                                                          children: e,
                                                        }),
                                                      ],
                                                    },
                                                    a
                                                  )
                                                ),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                a
                              )
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    ref: x,
                    style: {
                      opacity: c.includes("button") ? 1 : 0,
                      transform: c.includes("button")
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                      transitionDelay: "0.4s",
                    },
                    className: "jsx-f29c2246fb6f9bcd flex justify-center mt-20",
                    children: (0, r.jsxs)("a", {
                      href: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/roadmap",
                      className:
                        "jsx-f29c2246fb6f9bcd inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hover:from-purple-600 hover:via-fuchsia-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 font-medium",
                      children: [
                        (0, r.jsx)("svg", {
                          width: "20",
                          height: "20",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "jsx-f29c2246fb6f9bcd mr-2 text-white",
                          children: (0, r.jsx)("path", {
                            d: "M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "jsx-f29c2246fb6f9bcd",
                          }),
                        }),
                        "View Detailed Roadmap",
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(l(), {
                id: "f29c2246fb6f9bcd",
                children:
                  "@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-f29c2246fb6f9bcd{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 15s ease infinite;-moz-animation:gradient-x 15s ease infinite;-o-animation:gradient-x 15s ease infinite;animation:gradient-x 15s ease infinite}.bg-grid-pattern.jsx-f29c2246fb6f9bcd{background-image:-webkit-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-webkit-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-moz-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-moz-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-o-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-o-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:linear-gradient(to right,rgba(147,51,234,.1)1px,transparent 1px),linear-gradient(to bottom,rgba(147,51,234,.1)1px,transparent 1px);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px}",
              }),
            ],
          });
        };
      var R = t(25675),
        P = t.n(R);
      let U = "0x0000000000000000000000000000000000000000",
        W = (e) => {
          let { isDarkMode: a } = e,
            [t, n] = (0, s.useState)(!1),
            [o, i] = (0, s.useState)([]),
            c = (0, s.useRef)(null),
            d = (0, s.useRef)(null),
            f = (0, s.useRef)(null),
            m = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting &&
                    (e.target === c.current
                      ? i((e) => [...e.filter((e) => "header" !== e), "header"])
                      : e.target === d.current
                      ? i((e) => [...e.filter((e) => "chart" !== e), "chart"])
                      : e.target === f.current
                      ? i((e) => [
                          ...e.filter((e) => "address" !== e),
                          "address",
                        ])
                      : e.target === m.current &&
                        i((e) => [
                          ...e.filter((e) => "button" !== e),
                          "button",
                        ]));
                });
              },
              { root: null, rootMargin: "0px", threshold: 0.2 }
            );
            return (
              c.current && e.observe(c.current),
              d.current && e.observe(d.current),
              f.current && e.observe(f.current),
              m.current && e.observe(m.current),
              () => {
                e.disconnect();
              }
            );
          }, []);
          let x = (0, s.useCallback)(
              (e) =>
                e
                  ? ""
                      .concat(e.substring(0, 12), "...")
                      .concat(e.substring(e.length - 12))
                  : "",
              []
            ),
            p = () => {
              navigator.clipboard.writeText(U),
                n(!0),
                setTimeout(() => n(!1), 2e3);
            },
            b = a ? "text-white" : "text-gray-800",
            u = a ? "bg-[#14101A]/80" : "bg-white/80",
            g = a ? "border-purple-900/20" : "border-purple-200/50";
          return (0, r.jsxs)("section", {
            id: "TokenInfo",
            className:
              "jsx-14afaf5584003ffb " +
              "relative w-full py-20 overflow-hidden ".concat(
                a
                  ? "bg-[#0F0B13]"
                  : "bg-gradient-to-b from-[#EBEBFA] via-[#f0f1ff] to-[#ebebfb]"
              ),
            children: [
              (0, r.jsxs)("div", {
                className:
                  "jsx-14afaf5584003ffb absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-14afaf5584003ffb absolute top-20 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-14afaf5584003ffb absolute bottom-40 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-14afaf5584003ffb absolute inset-0 bg-grid-pattern opacity-10",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-14afaf5584003ffb container mx-auto px-4 max-w-6xl relative z-10",
                children: [
                  (0, r.jsxs)("div", {
                    ref: c,
                    style: {
                      opacity: o.includes("header") ? 1 : 0,
                      transform: o.includes("header")
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                    },
                    className: "jsx-14afaf5584003ffb text-center mb-16",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "jsx-14afaf5584003ffb inline-block p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4 transform hover:scale-105 transition-transform duration-300",
                        children: (0, r.jsx)("p", {
                          className:
                            "jsx-14afaf5584003ffb text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                          children: "Token Info",
                        }),
                      }),
                      (0, r.jsxs)("h2", {
                        className:
                          "jsx-14afaf5584003ffb text-2xl md:text-3xl lg:text-4xl font-bold mb-6",
                        children: [
                          (0, r.jsxs)("span", {
                            className:
                              "jsx-14afaf5584003ffb bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x",
                            children: ["FutureSyncx", " "],
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "jsx-14afaf5584003ffb bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 animate-gradient-x",
                            children: "Tokenomics",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-14afaf5584003ffb mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "jsx-14afaf5584003ffb " +
                          "text-lg max-w-2xl mx-auto ".concat(
                            a ? "text-gray-300" : "text-gray-600"
                          ),
                        children:
                          "Strategic token allocation designed to support sustainable growth and community participation",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    ref: d,
                    style: {
                      opacity: o.includes("chart") ? 1 : 0,
                      transform: o.includes("chart")
                        ? "scale(1)"
                        : "scale(0.95)",
                      transition:
                        "opacity 0.8s ease-out, transform 0.8s ease-out",
                      transitionDelay: "0.2s",
                    },
                    className:
                      "jsx-14afaf5584003ffb " +
                      "relative max-w-3xl mx-auto mb-16 rounded-2xl "
                        .concat(u, " backdrop-blur-md border ")
                        .concat(g, " p-6 shadow-xl"),
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "jsx-14afaf5584003ffb absolute -top-4 left-0 right-0 flex flex-col md:flex-row md:justify-between px-4",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "jsx-14afaf5584003ffb mx-auto md:mx-0 md:ml-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium shadow-lg shadow-purple-500/20 z-20 mb-2 md:mb-0",
                            children: "Total Supply: 1,000,000,000 FSX",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "jsx-14afaf5584003ffb mx-auto md:mx-0 md:mr-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg shadow-purple-500/20 z-20",
                            children: "Ecosystem Growth",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "jsx-14afaf5584003ffb relative aspect-square max-w-2xl mx-auto pt-4 lg:mt-0 mt-10",
                        children: [
                          (0, r.jsx)("div", {
                            className: "jsx-14afaf5584003ffb chart-glow-effect",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "jsx-14afaf5584003ffb relative w-full h-full",
                            children: (0, r.jsx)(P(), {
                              src: a ? "/tokenomics.png" : "/tokenomicsl.png",
                              alt: "FutureSyncx Tokenomics Chart showing distribution of tokens",
                              fill: !0,
                              sizes:
                                "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                              priority: !0,
                              style: { objectFit: "contain" },
                              className: "tokenomics-image",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-14afaf5584003ffb grid grid-cols-2 md:grid-cols-4 gap-4 mt-6",
                        children: [
                          {
                            name: "Public Sale",
                            percentage: "35%",
                            color: "from-purple-500 to-indigo-600",
                          },
                          {
                            name: "Staking",
                            percentage: "25%",
                            color: "from-indigo-500 to-blue-600",
                          },
                          {
                            name: "Liquidity",
                            percentage: "15%",
                            color: "from-fuchsia-500 to-pink-600",
                          },
                          {
                            name: "Marketing",
                            percentage: "10%",
                            color: "from-pink-500 to-purple-600",
                          },
                          {
                            name: "Treasury",
                            percentage: "10%",
                            color: "from-pink-500 to-purple-600",
                          },
                          {
                            name: "Team",
                            percentage: "5%",
                            color: "from-pink-500 to-purple-600",
                          },
                        ].map((e, a) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className:
                                "jsx-14afaf5584003ffb flex flex-col items-center",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-14afaf5584003ffb " +
                                    "w-full h-2 rounded-full bg-gradient-to-r ".concat(
                                      e.color,
                                      " mb-2"
                                    ),
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-14afaf5584003ffb " +
                                    "text-sm font-medium ".concat(b),
                                  children: e.name,
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-14afaf5584003ffb text-xs text-purple-500 font-semibold",
                                  children: e.percentage,
                                }),
                              ],
                            },
                            a
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    ref: f,
                    style: {
                      opacity: o.includes("address") ? 1 : 0,
                      transform: o.includes("address")
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                      transitionDelay: "0.4s",
                    },
                    className: "jsx-14afaf5584003ffb flex justify-center mb-10",
                    children: (0, r.jsxs)("div", {
                      className:
                        "jsx-14afaf5584003ffb " +
                        "flex items-center space-x-3 px-6 py-3 rounded-full "
                          .concat(
                            a ? "bg-[#1A1525]/90" : "bg-white/90",
                            " backdrop-blur-sm border "
                          )
                          .concat(
                            g,
                            " shadow-lg group hover:shadow-xl transition-all duration-300"
                          ),
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "jsx-14afaf5584003ffb " +
                            "text-sm md:text-base font-mono ".concat(
                              a ? "text-blue-300" : "text-blue-600"
                            ),
                          children: x(U),
                        }),
                        (0, r.jsxs)("button", {
                          onClick: p,
                          "aria-label": t
                            ? "Copied token address"
                            : "Copy token address to clipboard",
                          className:
                            "jsx-14afaf5584003ffb text-purple-500 hover:text-purple-400 transition-colors duration-300 relative",
                          children: [
                            t
                              ? (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                  className:
                                    "jsx-14afaf5584003ffb h-5 w-5 text-green-500 animate-pulse",
                                  children: (0, r.jsx)("path", {
                                    fillRule: "evenodd",
                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                    clipRule: "evenodd",
                                    className: "jsx-14afaf5584003ffb",
                                  }),
                                })
                              : (0, r.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor",
                                  "aria-hidden": "true",
                                  className:
                                    "jsx-14afaf5584003ffb h-5 w-5 group-hover:scale-110 transition-transform duration-300",
                                  children: [
                                    (0, r.jsx)("path", {
                                      d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
                                      className: "jsx-14afaf5584003ffb",
                                    }),
                                    (0, r.jsx)("path", {
                                      d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z",
                                      className: "jsx-14afaf5584003ffb",
                                    }),
                                  ],
                                }),
                            t &&
                              (0, r.jsx)("span", {
                                className:
                                  "jsx-14afaf5584003ffb absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded fade-out",
                                children: "Copied!",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("div", {
                    ref: m,
                    style: {
                      opacity: o.includes("button") ? 1 : 0,
                      transform: o.includes("button")
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                      transitionDelay: "0.6s",
                    },
                    className: "jsx-14afaf5584003ffb flex justify-center",
                    children: (0, r.jsxs)("a", {
                      href: "".concat("https://etherscan.io/token/").concat(U),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label":
                        "View token contract details on blockchain explorer",
                      className:
                        "jsx-14afaf5584003ffb inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105",
                      children: [
                        (0, r.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          "aria-hidden": "true",
                          className: "jsx-14afaf5584003ffb h-5 w-5 mr-2",
                          children: [
                            (0, r.jsx)("path", {
                              d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z",
                              className: "jsx-14afaf5584003ffb",
                            }),
                            (0, r.jsx)("path", {
                              d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z",
                              className: "jsx-14afaf5584003ffb",
                            }),
                          ],
                        }),
                        "View Contract",
                      ],
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-14afaf5584003ffb mt-16 grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: [
                      {
                        title: "Governance",
                        description:
                          "FSX token holders can participate in decision-making through voting on key platform developments",
                        icon: (0, r.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          "aria-hidden": "true",
                          className: "jsx-14afaf5584003ffb h-8 w-8",
                          children: (0, r.jsx)("path", {
                            d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z",
                            className: "jsx-14afaf5584003ffb",
                          }),
                        }),
                      },
                      {
                        title: "Staking Rewards",
                        description:
                          "Earn passive income by staking your FSX tokens and support network security",
                        icon: (0, r.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          "aria-hidden": "true",
                          className: "jsx-14afaf5584003ffb h-8 w-8",
                          children: [
                            (0, r.jsx)("path", {
                              d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z",
                              className: "jsx-14afaf5584003ffb",
                            }),
                            (0, r.jsx)("path", {
                              fillRule: "evenodd",
                              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
                              clipRule: "evenodd",
                              className: "jsx-14afaf5584003ffb",
                            }),
                          ],
                        }),
                      },
                      {
                        title: "Platform Discounts",
                        description:
                          "FSX holders receive exclusive discounts on marketplace fees and premium features",
                        icon: (0, r.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 20 20",
                          fill: "currentColor",
                          "aria-hidden": "true",
                          className: "jsx-14afaf5584003ffb h-8 w-8",
                          children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z",
                            clipRule: "evenodd",
                            className: "jsx-14afaf5584003ffb",
                          }),
                        }),
                      },
                    ].map((e, t) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          style: {
                            opacity: o.includes("chart") ? 1 : 0,
                            transform: o.includes("chart")
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition:
                              "opacity 0.8s ease-out, transform 0.8s ease-out",
                            transitionDelay: "".concat(0.8 + 0.2 * t, "s"),
                          },
                          className:
                            "jsx-14afaf5584003ffb " +
                            ""
                              .concat(u, " backdrop-blur-sm border ")
                              .concat(
                                g,
                                " rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
                              ),
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "jsx-14afaf5584003ffb w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4",
                              children: (0, r.jsx)("div", {
                                className:
                                  "jsx-14afaf5584003ffb " +
                                  "text-gradient ".concat(
                                    a ? "text-purple-400" : "text-purple-600"
                                  ),
                                children: e.icon,
                              }),
                            }),
                            (0, r.jsx)("h3", {
                              className:
                                "jsx-14afaf5584003ffb " +
                                "text-xl font-bold mb-2 ".concat(b),
                              children: e.title,
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-14afaf5584003ffb " +
                                "".concat(
                                  a ? "text-gray-400" : "text-gray-600"
                                ),
                              children: e.description,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
              (0, r.jsx)(l(), {
                id: "14afaf5584003ffb",
                children:
                  "@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-14afaf5584003ffb{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}.bg-grid-pattern.jsx-14afaf5584003ffb{background-image:-webkit-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-webkit-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-moz-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-moz-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-o-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-o-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:linear-gradient(to right,rgba(147,51,234,.1)1px,transparent 1px),linear-gradient(to bottom,rgba(147,51,234,.1)1px,transparent 1px);-webkit-background-size:30px 30px;-moz-background-size:30px 30px;-o-background-size:30px 30px;background-size:30px 30px}.text-gradient.jsx-14afaf5584003ffb{background:-webkit-linear-gradient(left,#9333ea 0%,#ec4899 100%);background:-moz-linear-gradient(left,#9333ea 0%,#ec4899 100%);background:-o-linear-gradient(left,#9333ea 0%,#ec4899 100%);background:linear-gradient(90deg,#9333ea 0%,#ec4899 100%);-webkit-background-clip:text;background-clip:text;color:transparent}.chart-glow-effect.jsx-14afaf5584003ffb{position:absolute;inset:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-radial-gradient(circle,rgba(147,51,234,.2)0%,rgba(236,72,153,.2)50%,transparent 70%);background:-moz-radial-gradient(circle,rgba(147,51,234,.2)0%,rgba(236,72,153,.2)50%,transparent 70%);background:-o-radial-gradient(circle,rgba(147,51,234,.2)0%,rgba(236,72,153,.2)50%,transparent 70%);background:radial-gradient(circle,rgba(147,51,234,.2)0%,rgba(236,72,153,.2)50%,transparent 70%);opacity:.6;z-index:-1;-webkit-animation:pulse-slow 4s ease-in-out infinite alternate;-moz-animation:pulse-slow 4s ease-in-out infinite alternate;-o-animation:pulse-slow 4s ease-in-out infinite alternate;animation:pulse-slow 4s ease-in-out infinite alternate}@-webkit-keyframes pulse-slow{0%,100%{opacity:.4;-webkit-transform:scale(.95);transform:scale(.95)}50%{opacity:.7;-webkit-transform:scale(1.05);transform:scale(1.05)}}@-moz-keyframes pulse-slow{0%,100%{opacity:.4;-moz-transform:scale(.95);transform:scale(.95)}50%{opacity:.7;-moz-transform:scale(1.05);transform:scale(1.05)}}@-o-keyframes pulse-slow{0%,100%{opacity:.4;-o-transform:scale(.95);transform:scale(.95)}50%{opacity:.7;-o-transform:scale(1.05);transform:scale(1.05)}}@keyframes pulse-slow{0%,100%{opacity:.4;-webkit-transform:scale(.95);-moz-transform:scale(.95);-o-transform:scale(.95);transform:scale(.95)}50%{opacity:.7;-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}}.tokenomics-image.jsx-14afaf5584003ffb{-webkit-transition:-webkit-transform.5s ease;-moz-transition:-moz-transform.5s ease;-o-transition:-o-transform.5s ease;transition:-webkit-transform.5s ease;transition:-moz-transform.5s ease;transition:-o-transform.5s ease;transition:transform.5s ease}.tokenomics-image.jsx-14afaf5584003ffb:hover{-webkit-transform:scale(1.02);-moz-transform:scale(1.02);-ms-transform:scale(1.02);-o-transform:scale(1.02);transform:scale(1.02)}.fade-out.jsx-14afaf5584003ffb{-webkit-animation:fadeOut 2s forwards;-moz-animation:fadeOut 2s forwards;-o-animation:fadeOut 2s forwards;animation:fadeOut 2s forwards}@-webkit-keyframes fadeOut{0%{opacity:1}80%{opacity:1}100%{opacity:0}}@-moz-keyframes fadeOut{0%{opacity:1}80%{opacity:1}100%{opacity:0}}@-o-keyframes fadeOut{0%{opacity:1}80%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}80%{opacity:1}100%{opacity:0}}",
              }),
            ],
          });
        },
        _ = (e) => {
          let { isDarkMode: a } = e,
            [t, n] = (0, s.useState)(0),
            [o, i] = (0, s.useState)([]),
            c = (0, s.useRef)(null),
            d = (0, s.useRef)([]),
            f = [
              {
                question: "What is FutureSyncx and what is its core mission?",
                answer:
                  "FutureSyncx is an innovative digital commerce ecosystem that merges immersive Virtual Reality, advanced Artificial Intelligence, and secure blockchain technology to redefine online shopping. Our mission is to revolutionize the way buyers and sellers interact by offering a dynamic, secure, and personalized marketplace that bridges the gap between physical and digital experiences.",
              },
              {
                question:
                  "What makes FutureSyncx's immersive marketplace unique?",
                answer:
                  "Our immersive marketplace provides a 3D virtual shopping experience where users can explore digital storefronts, verify products in real time through live demonstrations, and engage with sellers directly. With secure escrow transactions and AI-driven personalization, FutureSyncx offers a level of interactivity and trust that sets it apart from traditional e-commerce platforms.",
              },
              {
                question: "How does the AI-Powered Commerce Engine work?",
                answer:
                  "At the heart of FutureSyncx is our AI-Powered Commerce Engine, which utilizes advanced algorithms to optimize product recommendations, manage virtual storefronts, and streamline transactions. By analyzing user behavior and market data in real time, the engine continuously learns and adapts, ensuring a highly efficient and tailored shopping experience for every user.",
              },
              {
                question: "What are the details of the FutureSyncx?",
                answer:
                  "The FutureSyncx offers early supporters the opportunity to purchase FSX tokens at a discounted rate before the public launch. Contributions can be made through various payment methods, and tokens acquired during the presale will be distributed according to a structured vesting schedule. This ensures a balanced allocation and encourages long-term commitment to the project's success.",
              },
              {
                question:
                  "How does FutureSyncx ensure transparency in its ecosystem?",
                answer:
                  "Transparency is a cornerstone of FutureSyncx. Our platform operates with full on-chain transparency, where every transaction and token burn is publicly recorded and auditable. With an open-source development approach, regular progress updates, and a robust secure escrow system, we ensure that all operations are verifiable and trustworthy for our community.",
              },
              {
                question:
                  "What role does decentralized governance play in FutureSyncx?",
                answer:
                  "Decentralized governance is integral to the FutureSyncx ecosystem. FSX token holders are empowered to propose and vote on critical decisions—from fee adjustments to new feature integrations. This participatory model ensures that the platform evolves in alignment with community interests, fostering a fair, inclusive, and resilient digital marketplace.",
              },
            ];
          (d.current = f.map((e, a) => d.current[a] || s.createRef())),
            (0, s.useEffect)(() => {
              let e = new IntersectionObserver(
                (a) => {
                  a.forEach((a) => {
                    if (a.isIntersecting) {
                      if (a.target === c.current) i((e) => [...e, "header"]);
                      else {
                        let e = d.current.findIndex(
                          (e) => e.current === a.target
                        );
                        -1 !== e && i((a) => [...a, "faq-".concat(e)]);
                      }
                      e.unobserve(a.target);
                    }
                  });
                },
                { root: null, rootMargin: "0px", threshold: 0.2 }
              );
              return (
                c.current && e.observe(c.current),
                d.current.forEach((a) => {
                  a.current && e.observe(a.current);
                }),
                () => {
                  c.current && e.unobserve(c.current),
                    d.current.forEach((a) => {
                      a.current && e.unobserve(a.current);
                    });
                }
              );
            }, []);
          let m = (e) => {
              n(t === e ? -1 : e);
            },
            x = a ? "bg-[#14101A]/90" : "bg-white/80",
            p = a ? "bg-[#1A1525]/50" : "bg-purple-50/50",
            b = a
              ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30"
              : "bg-gradient-to-r from-purple-100 to-pink-100",
            u = a ? "bg-[#14101A]/80" : "bg-white/90",
            g = a ? "border-purple-900/20" : "border-purple-200/50",
            h = a ? "text-white" : "text-gray-800",
            k = a ? "text-gray-300" : "text-gray-600";
          return (0, r.jsxs)("section", {
            id: "FAQ",
            className:
              "jsx-fb2b6bbefd544416 " +
              "relative w-full py-20 overflow-hidden ".concat(
                a
                  ? "bg-[#0F0B13]"
                  : "bg-gradient-to-b from-[#EBEBFA] via-[#f0f1ff] to-[#EBEBFA]"
              ),
            children: [
              (0, r.jsxs)("div", {
                className:
                  "jsx-fb2b6bbefd544416 absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-fb2b6bbefd544416 absolute top-20 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-fb2b6bbefd544416 absolute bottom-40 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-fb2b6bbefd544416 absolute inset-0 bg-grid-pattern opacity-10",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-fb2b6bbefd544416 container mx-auto px-4 max-w-4xl relative z-10",
                children: [
                  (0, r.jsxs)("div", {
                    ref: c,
                    style: {
                      opacity: o.includes("header") ? 1 : 0,
                      transform: o.includes("header")
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                    },
                    className: "jsx-fb2b6bbefd544416 text-center mb-16",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "jsx-fb2b6bbefd544416 inline-block p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4 transform hover:scale-105 transition-transform duration-300",
                        children: (0, r.jsx)("p", {
                          className:
                            "jsx-fb2b6bbefd544416 text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                          children: "FAQ",
                        }),
                      }),
                      (0, r.jsxs)("h2", {
                        className:
                          "jsx-fb2b6bbefd544416 text-3xl md:text-4xl lg:text-5xl font-bold mb-6",
                        children: [
                          (0, r.jsxs)("span", {
                            className:
                              "jsx-fb2b6bbefd544416 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x",
                            children: ["Frequently Asked", " "],
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "jsx-fb2b6bbefd544416 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 animate-gradient-x",
                            children: "Questions",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "jsx-fb2b6bbefd544416 mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "jsx-fb2b6bbefd544416 " +
                          "text-lg max-w-2xl mx-auto ".concat(k),
                        children:
                          "Everything you need to know about the FutureSyncx ecosystem and platform",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "jsx-fb2b6bbefd544416 space-y-6",
                    children: f.map((e, s) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          ref: d.current[s],
                          style: {
                            opacity: o.includes("faq-".concat(s)) ? 1 : 0,
                            transform: o.includes("faq-".concat(s))
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition:
                              "opacity 0.6s ease-out, transform 0.6s ease-out",
                            transitionDelay: "".concat(0.1 * s, "s"),
                          },
                          className:
                            "jsx-fb2b6bbefd544416 " +
                            "rounded-xl overflow-hidden transition-all duration-500 "
                              .concat(x, " backdrop-blur-md border ")
                              .concat(g, " shadow-lg hover:shadow-xl"),
                          children: [
                            (0, r.jsxs)("button", {
                              onClick: () => m(s),
                              "aria-expanded": t === s,
                              "aria-controls": "faq-answer-".concat(s),
                              className:
                                "jsx-fb2b6bbefd544416 " +
                                "w-full p-5 text-left flex justify-between items-center transition-all duration-300 ".concat(
                                  t === s ? b : p
                                ),
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "jsx-fb2b6bbefd544416 " +
                                    "text-lg font-medium ".concat(
                                      h,
                                      " flex-1 pr-4"
                                    ),
                                  children: e.question,
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-fb2b6bbefd544416 " +
                                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ".concat(
                                      t === s
                                        ? "bg-gradient-to-r from-purple-500 to-pink-500 rotate-180"
                                        : "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                                    ),
                                  children: (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    className:
                                      "jsx-fb2b6bbefd544416 " +
                                      "h-5 w-5 transition-transform duration-300 ".concat(
                                        t === s
                                          ? "text-white"
                                          : a
                                          ? "text-purple-400"
                                          : "text-purple-600"
                                      ),
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M19 9l-7 7-7-7",
                                      className: "jsx-fb2b6bbefd544416",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              id: "faq-answer-".concat(s),
                              className:
                                "jsx-fb2b6bbefd544416 " +
                                "overflow-hidden transition-all duration-500 "
                                  .concat(u, " ")
                                  .concat(
                                    t === s
                                      ? "max-h-96 opacity-100"
                                      : "max-h-0 opacity-0"
                                  ),
                              children: (0, r.jsxs)("div", {
                                className:
                                  "jsx-fb2b6bbefd544416 " +
                                  "p-6 "
                                    .concat(k, " leading-relaxed border-t ")
                                    .concat(g),
                                children: [
                                  e.answer,
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-fb2b6bbefd544416 mt-4 pt-4 border-t border-dashed border-purple-200/30 flex justify-end",
                                    children: (0, r.jsxs)("button", {
                                      className:
                                        "jsx-fb2b6bbefd544416 text-sm text-purple-500 hover:text-pink-500 transition-colors duration-300 flex items-center",
                                      children: [
                                        "Learn more",
                                        (0, r.jsx)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          className:
                                            "jsx-fb2b6bbefd544416 h-4 w-4 ml-1",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                            className: "jsx-fb2b6bbefd544416",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        s
                      )
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "jsx-fb2b6bbefd544416 mt-16 text-center",
                    children: (0, r.jsxs)("div", {
                      style: {
                        opacity: o.includes("faq-".concat(f.length - 1))
                          ? 1
                          : 0,
                        transform: o.includes("faq-".concat(f.length - 1))
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition:
                          "opacity 0.8s ease-out, transform 0.8s ease-out",
                        transitionDelay: "0.8s",
                      },
                      className:
                        "jsx-fb2b6bbefd544416 " +
                        "p-8 rounded-xl "
                          .concat(x, " backdrop-blur-md border ")
                          .concat(g, " shadow-xl"),
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "jsx-fb2b6bbefd544416 " +
                            "text-xl font-bold ".concat(h, " mb-4"),
                          children: "Still have questions?",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "jsx-fb2b6bbefd544416 " + "".concat(k, " mb-6"),
                          children:
                            "If you can't find the answer you're looking for, please reach out to our team",
                        }),
                        (0, r.jsx)("button", {
                          className:
                            "jsx-fb2b6bbefd544416 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105",
                          children: (0, r.jsx)("a", {
                            href: "/dashboard/?ref=contact-us",
                            className: "jsx-fb2b6bbefd544416",
                            children: "Contact Support",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(l(), {
                id: "fb2b6bbefd544416",
                children:
                  "@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-fb2b6bbefd544416{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}.bg-grid-pattern.jsx-fb2b6bbefd544416{background-image:-webkit-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-webkit-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-moz-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-moz-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-o-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-o-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:linear-gradient(to right,rgba(147,51,234,.1)1px,transparent 1px),linear-gradient(to bottom,rgba(147,51,234,.1)1px,transparent 1px);-webkit-background-size:30px 30px;-moz-background-size:30px 30px;-o-background-size:30px 30px;background-size:30px 30px}",
              }),
            ],
          });
        },
        G = (e) => {
          let { isDarkMode: a } = e,
            [t, n] = (0, s.useState)({
              logo: !1,
              heading: !1,
              description: !1,
              buttons: !1,
            }),
            o = (0, s.useRef)(null),
            i = (0, s.useRef)(null),
            c = (0, s.useRef)(null),
            d = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              (a) => {
                a.forEach((a) => {
                  a.isIntersecting &&
                    (a.target === o.current
                      ? n((e) => ({ ...e, logo: !0 }))
                      : a.target === i.current
                      ? n((e) => ({ ...e, heading: !0 }))
                      : a.target === c.current
                      ? n((e) => ({ ...e, description: !0 }))
                      : a.target === d.current &&
                        n((e) => ({ ...e, buttons: !0 })),
                    e.unobserve(a.target));
                });
              },
              { root: null, rootMargin: "0px", threshold: 0.2 }
            );
            return (
              o.current && e.observe(o.current),
              i.current && e.observe(i.current),
              c.current && e.observe(c.current),
              d.current && e.observe(d.current),
              () => {
                o.current && e.unobserve(o.current),
                  i.current && e.unobserve(i.current),
                  c.current && e.unobserve(c.current),
                  d.current && e.unobserve(d.current);
              }
            );
          }, []);
          let f = a ? "text-gray-300" : "text-gray-600";
          return (0, r.jsxs)("section", {
            className:
              "jsx-8d1cd69eb4cbc79e " +
              "relative w-full py-20 md:py-28 overflow-hidden ".concat(
                a
                  ? "bg-[#0E0B12]"
                  : "bg-gradient-to-b from-[#EBEBFA] via-[#f0f1ff] to-[#EBEBFA]"
              ),
            children: [
              (0, r.jsxs)("div", {
                className:
                  "jsx-8d1cd69eb4cbc79e absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-8d1cd69eb4cbc79e absolute top-20 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-8d1cd69eb4cbc79e absolute bottom-40 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-3xl",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-8d1cd69eb4cbc79e absolute inset-0 bg-grid-pattern opacity-10",
                  }),
                  (0, r.jsx)("div", {
                    className: "jsx-8d1cd69eb4cbc79e particles-container",
                    children: [...Array(6)].map((e, a) =>
                      (0, r.jsx)(
                        "div",
                        {
                          style: {
                            left: "".concat(10 + 80 * Math.random(), "%"),
                            top: "".concat(10 + 80 * Math.random(), "%"),
                            animationDelay: "".concat(5 * Math.random(), "s"),
                            animationDuration: "".concat(
                              15 + 15 * Math.random(),
                              "s"
                            ),
                          },
                          className: "jsx-8d1cd69eb4cbc79e particle",
                        },
                        a
                      )
                    ),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "jsx-8d1cd69eb4cbc79e container mx-auto px-4 relative z-10",
                children: (0, r.jsxs)("div", {
                  className:
                    "jsx-8d1cd69eb4cbc79e flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16",
                  children: [
                    (0, r.jsx)("div", {
                      ref: o,
                      style: {
                        opacity: t.logo ? 1 : 0,
                        transform: t.logo
                          ? "translateY(0) rotate(0)"
                          : "translateY(30px) rotate(-5deg)",
                        transition:
                          "opacity 0.8s ease-out, transform 0.8s ease-out",
                      },
                      className:
                        "jsx-8d1cd69eb4cbc79e w-full md:w-1/3 flex justify-center mb-8 md:mb-0",
                      children: (0, r.jsxs)("div", {
                        className:
                          "jsx-8d1cd69eb4cbc79e relative w-72 h-72 md:w-80 md:h-80",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "jsx-8d1cd69eb4cbc79e absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "jsx-8d1cd69eb4cbc79e absolute inset-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-75",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "jsx-8d1cd69eb4cbc79e " +
                              "absolute inset-[6px] rounded-full ".concat(
                                a ? "bg-[#14101A]" : "bg-white",
                                " shadow-inner"
                              ),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "jsx-8d1cd69eb4cbc79e absolute inset-0 rounded-full orbital-container",
                            children: (0, r.jsxs)("svg", {
                              viewBox: "0 0 100 100",
                              className: "jsx-8d1cd69eb4cbc79e w-full h-full",
                              children: [
                                (0, r.jsx)("g", {
                                  className:
                                    "jsx-8d1cd69eb4cbc79e orbital-ring-1",
                                  children: (0, r.jsx)("ellipse", {
                                    cx: "50",
                                    cy: "50",
                                    rx: "42",
                                    ry: "22",
                                    fill: "none",
                                    stroke: "url(#orbital-gradient-1)",
                                    strokeWidth: "0.6",
                                    strokeDasharray: "3,2",
                                    className: "jsx-8d1cd69eb4cbc79e",
                                  }),
                                }),
                                (0, r.jsx)("g", {
                                  className:
                                    "jsx-8d1cd69eb4cbc79e orbital-ring-2",
                                  children: (0, r.jsx)("ellipse", {
                                    cx: "50",
                                    cy: "50",
                                    rx: "40",
                                    ry: "24",
                                    fill: "none",
                                    stroke: "url(#orbital-gradient-2)",
                                    strokeWidth: "0.6",
                                    strokeDasharray: "3,2",
                                    transform: "rotate(60 50 50)",
                                    className: "jsx-8d1cd69eb4cbc79e",
                                  }),
                                }),
                                (0, r.jsx)("g", {
                                  className:
                                    "jsx-8d1cd69eb4cbc79e orbital-ring-3",
                                  children: (0, r.jsx)("ellipse", {
                                    cx: "50",
                                    cy: "50",
                                    rx: "38",
                                    ry: "26",
                                    fill: "none",
                                    stroke: "url(#orbital-gradient-3)",
                                    strokeWidth: "0.6",
                                    strokeDasharray: "3,2",
                                    transform: "rotate(120 50 50)",
                                    className: "jsx-8d1cd69eb4cbc79e",
                                  }),
                                }),
                                (0, r.jsx)("circle", {
                                  cx: "50",
                                  cy: "24",
                                  r: "2.5",
                                  fill: "url(#planet-gradient-1)",
                                  className:
                                    "jsx-8d1cd69eb4cbc79e orbital-node-1",
                                  children: (0, r.jsx)("animate", {
                                    attributeName: "opacity",
                                    values: "0.7;1;0.7",
                                    dur: "3s",
                                    repeatCount: "indefinite",
                                    className: "jsx-8d1cd69eb4cbc79e",
                                  }),
                                }),
                                (0, r.jsx)("circle", {
                                  cx: "78",
                                  cy: "60",
                                  r: "3",
                                  fill: "url(#planet-gradient-2)",
                                  className:
                                    "jsx-8d1cd69eb4cbc79e orbital-node-2",
                                  children: (0, r.jsx)("animate", {
                                    attributeName: "opacity",
                                    values: "0.6;1;0.6",
                                    dur: "4s",
                                    repeatCount: "indefinite",
                                    className: "jsx-8d1cd69eb4cbc79e",
                                  }),
                                }),
                                (0, r.jsx)("circle", {
                                  cx: "30",
                                  cy: "74",
                                  r: "2",
                                  fill: "url(#planet-gradient-3)",
                                  className:
                                    "jsx-8d1cd69eb4cbc79e orbital-node-3",
                                  children: (0, r.jsx)("animate", {
                                    attributeName: "opacity",
                                    values: "0.8;1;0.8",
                                    dur: "5s",
                                    repeatCount: "indefinite",
                                    className: "jsx-8d1cd69eb4cbc79e",
                                  }),
                                }),
                                (0, r.jsxs)("g", {
                                  className:
                                    "jsx-8d1cd69eb4cbc79e central-icon",
                                  children: [
                                    (0, r.jsx)("rect", {
                                      x: "35",
                                      y: "40",
                                      width: "30",
                                      height: "18",
                                      rx: "4",
                                      fill: "none",
                                      stroke: "url(#icon-gradient)",
                                      strokeWidth: "1.5",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                    }),
                                    (0, r.jsx)("circle", {
                                      cx: "43",
                                      cy: "49",
                                      r: "3",
                                      fill: "none",
                                      stroke: "url(#icon-gradient)",
                                      strokeWidth: "1.5",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                    }),
                                    (0, r.jsx)("circle", {
                                      cx: "57",
                                      cy: "49",
                                      r: "3",
                                      fill: "none",
                                      stroke: "url(#icon-gradient)",
                                      strokeWidth: "1.5",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                    }),
                                    (0, r.jsx)("path", {
                                      d: "M35 48 C25 48, 25 60, 35 60",
                                      fill: "none",
                                      stroke: "url(#icon-gradient)",
                                      strokeWidth: "1.2",
                                      opacity: "0.8",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                    }),
                                    (0, r.jsx)("path", {
                                      d: "M65 48 C75 48, 75 60, 65 60",
                                      fill: "none",
                                      stroke: "url(#icon-gradient)",
                                      strokeWidth: "1.2",
                                      opacity: "0.8",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                    }),
                                    (0, r.jsx)("path", {
                                      d: "M50 35 L50 40 M50 58 L50 63 M35 49 L30 45 M65 49 L70 45",
                                      stroke: "url(#connection-gradient)",
                                      strokeWidth: "1",
                                      strokeDasharray: "2,1",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("defs", {
                                  className: "jsx-8d1cd69eb4cbc79e",
                                  children: [
                                    (0, r.jsxs)("linearGradient", {
                                      id: "orbital-gradient-1",
                                      x1: "0%",
                                      y1: "0%",
                                      x2: "100%",
                                      y2: "100%",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: [
                                        (0, r.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#8B5CF6",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                        (0, r.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#EC4899",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("linearGradient", {
                                      id: "orbital-gradient-2",
                                      x1: "0%",
                                      y1: "0%",
                                      x2: "100%",
                                      y2: "100%",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: [
                                        (0, r.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#EC4899",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                        (0, r.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#8B5CF6",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("linearGradient", {
                                      id: "orbital-gradient-3",
                                      x1: "0%",
                                      y1: "0%",
                                      x2: "100%",
                                      y2: "100%",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: [
                                        (0, r.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#C026D3",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                        (0, r.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#8B5CF6",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("radialGradient", {
                                      id: "planet-gradient-1",
                                      cx: "50%",
                                      cy: "50%",
                                      r: "50%",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: [
                                        (0, r.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#EC4899",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                        (0, r.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#8B5CF6",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("radialGradient", {
                                      id: "planet-gradient-2",
                                      cx: "50%",
                                      cy: "50%",
                                      r: "50%",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: [
                                        (0, r.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#8B5CF6",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                        (0, r.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#EC4899",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("radialGradient", {
                                      id: "planet-gradient-3",
                                      cx: "50%",
                                      cy: "50%",
                                      r: "50%",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: [
                                        (0, r.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#C026D3",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                        (0, r.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#8B5CF6",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("linearGradient", {
                                      id: "icon-gradient",
                                      x1: "0%",
                                      y1: "0%",
                                      x2: "100%",
                                      y2: "100%",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: [
                                        (0, r.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#8B5CF6",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                        (0, r.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#EC4899",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("linearGradient", {
                                      id: "connection-gradient",
                                      x1: "0%",
                                      y1: "0%",
                                      x2: "100%",
                                      y2: "100%",
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: [
                                        (0, r.jsx)("stop", {
                                          offset: "0%",
                                          stopColor: "#EC4899",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                        (0, r.jsx)("stop", {
                                          offset: "100%",
                                          stopColor: "#8B5CF6",
                                          className: "jsx-8d1cd69eb4cbc79e",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "jsx-8d1cd69eb4cbc79e absolute inset-0 energy-waves",
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "jsx-8d1cd69eb4cbc79e w-full md:w-2/3 text-center md:text-left",
                      children: [
                        (0, r.jsxs)("div", {
                          ref: i,
                          style: {
                            opacity: t.heading ? 1 : 0,
                            transform: t.heading
                              ? "translateX(0)"
                              : "translateX(-30px)",
                            transition:
                              "opacity 0.8s ease-out, transform 0.8s ease-out",
                            transitionDelay: "0.2s",
                          },
                          className: "jsx-8d1cd69eb4cbc79e",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "jsx-8d1cd69eb4cbc79e inline-block md:inline-flex items-center space-x-2 mb-4",
                              children: (0, r.jsx)("div", {
                                className:
                                  "jsx-8d1cd69eb4cbc79e px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-2 md:mb-0",
                                children: (0, r.jsx)("p", {
                                  className:
                                    "jsx-8d1cd69eb4cbc79e text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                                  children: "Step into the Future",
                                }),
                              }),
                            }),
                            (0, r.jsxs)("h2", {
                              className:
                                "jsx-8d1cd69eb4cbc79e text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight",
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "jsx-8d1cd69eb4cbc79e bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x",
                                  children: "Embrace the Future, Join",
                                }),
                                (0, r.jsx)("br", {
                                  className: "jsx-8d1cd69eb4cbc79e",
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "jsx-8d1cd69eb4cbc79e bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 animate-gradient-x",
                                  children: "FutureSyncX Marketplace",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          ref: c,
                          style: {
                            opacity: t.description ? 1 : 0,
                            transform: t.description
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition:
                              "opacity 0.8s ease-out, transform 0.8s ease-out",
                            transitionDelay: "0.4s",
                          },
                          className: "jsx-8d1cd69eb4cbc79e",
                          children: (0, r.jsx)("p", {
                            className:
                              "jsx-8d1cd69eb4cbc79e " +
                              "".concat(
                                f,
                                " text-base md:text-lg mb-8 max-w-2xl leading-relaxed"
                              ),
                            children:
                              "Be at the forefront of a revolutionary digital commerce experience with FutureSyncX. Secure exclusive access to discounted FSX tokens and groundbreaking features such as our immersive VR marketplace, AI-powered commerce engine, and robust secure escrow transactions. Join a vibrant community that is redefining digital commerce and shaping a smarter, more interactive future.",
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          ref: d,
                          style: {
                            opacity: t.buttons ? 1 : 0,
                            transform: t.buttons
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition:
                              "opacity 0.8s ease-out, transform 0.8s ease-out",
                            transitionDelay: "0.6s",
                          },
                          className:
                            "jsx-8d1cd69eb4cbc79e flex flex-wrap justify-center md:justify-start gap-4",
                          children: [
                            
                            (0, r.jsxs)("button", {
                              className:
                                "jsx-8d1cd69eb4cbc79e " +
                                "border-2 border-purple-500 ".concat(
                                  a
                                    ? "text-purple-400 hover:bg-purple-600/10"
                                    : "text-purple-700 hover:bg-purple-100",
                                  " px-8 py-4 rounded-full transition-all duration-300 font-medium transform hover:scale-105 hover:border-pink-500 flex items-center group"
                                ),
                              children: [
                                (0, r.jsx)("span", {
                                  className:
                                    "jsx-8d1cd69eb4cbc79e bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300",
                                  children: (0, r.jsx)("a", {
                                    href: "https://company-32.gitbook.io/future-sync-x/documentation/",
                                    className: "jsx-8d1cd69eb4cbc79e",
                                    children: "Learn More",
                                  }),
                                }),
                                (0, r.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  className:
                                    "jsx-8d1cd69eb4cbc79e h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                    className: "jsx-8d1cd69eb4cbc79e",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          style: {
                            opacity: t.buttons ? 1 : 0,
                            transform: t.buttons
                              ? "translateY(0)"
                              : "translateY(20px)",
                            transition:
                              "opacity 0.8s ease-out, transform 0.8s ease-out",
                            transitionDelay: "0.8s",
                          },
                          className:
                            "jsx-8d1cd69eb4cbc79e grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10",
                          children: [
                            { label: "VR Marketplace", icon: "\uD83E\uDD7D" },
                            { label: "AI-Powered", icon: "\uD83E\uDDE0" },
                            { label: "Secure Escrow", icon: "\uD83D\uDD12" },
                          ].map((e, a) =>
                            (0, r.jsxs)(
                              "div",
                              {
                                className:
                                  "jsx-8d1cd69eb4cbc79e " +
                                  "flex items-center space-x-2 ".concat(
                                    f,
                                    " text-sm"
                                  ),
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-8d1cd69eb4cbc79e w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center",
                                    children: (0, r.jsx)("span", {
                                      className: "jsx-8d1cd69eb4cbc79e",
                                      children: e.icon,
                                    }),
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "jsx-8d1cd69eb4cbc79e",
                                    children: e.label,
                                  }),
                                ],
                              },
                              a
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(l(), {
                id: "8d1cd69eb4cbc79e",
                children:
                  "@-webkit-keyframes pulse-slow{0%,100%{opacity:.8;-webkit-transform:scale(1);transform:scale(1);-webkit-filter:blur(1px);filter:blur(1px)}50%{opacity:1;-webkit-transform:scale(1.02);transform:scale(1.02);-webkit-filter:blur(0px);filter:blur(0px)}}@-moz-keyframes pulse-slow{0%,100%{opacity:.8;-moz-transform:scale(1);transform:scale(1);filter:blur(1px)}50%{opacity:1;-moz-transform:scale(1.02);transform:scale(1.02);filter:blur(0px)}}@-o-keyframes pulse-slow{0%,100%{opacity:.8;-o-transform:scale(1);transform:scale(1);filter:blur(1px)}50%{opacity:1;-o-transform:scale(1.02);transform:scale(1.02);filter:blur(0px)}}@keyframes pulse-slow{0%,100%{opacity:.8;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);-webkit-filter:blur(1px);filter:blur(1px)}50%{opacity:1;-webkit-transform:scale(1.02);-moz-transform:scale(1.02);-o-transform:scale(1.02);transform:scale(1.02);-webkit-filter:blur(0px);filter:blur(0px)}}.animate-pulse-slow.jsx-8d1cd69eb4cbc79e{-webkit-animation:pulse-slow 4s infinite;-moz-animation:pulse-slow 4s infinite;-o-animation:pulse-slow 4s infinite;animation:pulse-slow 4s infinite}@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-8d1cd69eb4cbc79e{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}.orbital-ring-1.jsx-8d1cd69eb4cbc79e{-webkit-animation:rotate-ring 20s linear infinite;-moz-animation:rotate-ring 20s linear infinite;-o-animation:rotate-ring 20s linear infinite;animation:rotate-ring 20s linear infinite;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}.orbital-ring-2.jsx-8d1cd69eb4cbc79e{animation:rotate-ring 30s linear infinite reverse;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}.orbital-ring-3.jsx-8d1cd69eb4cbc79e{-webkit-animation:rotate-ring 25s linear infinite;-moz-animation:rotate-ring 25s linear infinite;-o-animation:rotate-ring 25s linear infinite;animation:rotate-ring 25s linear infinite;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}@-webkit-keyframes rotate-ring{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes rotate-ring{from{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes rotate-ring{from{-o-transform:rotate(0deg);transform:rotate(0deg)}to{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate-ring{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.central-icon.jsx-8d1cd69eb4cbc79e{-webkit-animation:pulse-icon 4s ease-in-out infinite;-moz-animation:pulse-icon 4s ease-in-out infinite;-o-animation:pulse-icon 4s ease-in-out infinite;animation:pulse-icon 4s ease-in-out infinite;-webkit-transform-origin:center;-moz-transform-origin:center;-ms-transform-origin:center;-o-transform-origin:center;transform-origin:center}@-webkit-keyframes pulse-icon{0%,100%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(1.05);transform:scale(1.05);opacity:1}}@-moz-keyframes pulse-icon{0%,100%{-moz-transform:scale(1);transform:scale(1);opacity:.9}50%{-moz-transform:scale(1.05);transform:scale(1.05);opacity:1}}@-o-keyframes pulse-icon{0%,100%{-o-transform:scale(1);transform:scale(1);opacity:.9}50%{-o-transform:scale(1.05);transform:scale(1.05);opacity:1}}@keyframes pulse-icon{0%,100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05);opacity:1}}.bg-grid-pattern.jsx-8d1cd69eb4cbc79e{background-image:-webkit-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-webkit-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-moz-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-moz-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-o-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-o-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:linear-gradient(to right,rgba(147,51,234,.1)1px,transparent 1px),linear-gradient(to bottom,rgba(147,51,234,.1)1px,transparent 1px);-webkit-background-size:30px 30px;-moz-background-size:30px 30px;-o-background-size:30px 30px;background-size:30px 30px}.energy-waves.jsx-8d1cd69eb4cbc79e{background:-webkit-radial-gradient(circle,transparent 35%,rgba(147,51,234,.1)36%,rgba(236,72,153,.1)40%,transparent 41%,transparent 45%,rgba(147,51,234,.1)46%,rgba(236,72,153,.1)50%,transparent 51%);background:-moz-radial-gradient(circle,transparent 35%,rgba(147,51,234,.1)36%,rgba(236,72,153,.1)40%,transparent 41%,transparent 45%,rgba(147,51,234,.1)46%,rgba(236,72,153,.1)50%,transparent 51%);background:-o-radial-gradient(circle,transparent 35%,rgba(147,51,234,.1)36%,rgba(236,72,153,.1)40%,transparent 41%,transparent 45%,rgba(147,51,234,.1)46%,rgba(236,72,153,.1)50%,transparent 51%);background:radial-gradient(circle,transparent 35%,rgba(147,51,234,.1)36%,rgba(236,72,153,.1)40%,transparent 41%,transparent 45%,rgba(147,51,234,.1)46%,rgba(236,72,153,.1)50%,transparent 51%);-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;opacity:.7;-webkit-animation:pulse-waves 8s ease-in-out infinite;-moz-animation:pulse-waves 8s ease-in-out infinite;-o-animation:pulse-waves 8s ease-in-out infinite;animation:pulse-waves 8s ease-in-out infinite}@-webkit-keyframes pulse-waves{0%,100%{background-position:center;-webkit-background-size:100%100%;background-size:100%100%;opacity:.5}50%{background-position:center;-webkit-background-size:120%120%;background-size:120%120%;opacity:.7}}@-moz-keyframes pulse-waves{0%,100%{background-position:center;-moz-background-size:100%100%;background-size:100%100%;opacity:.5}50%{background-position:center;-moz-background-size:120%120%;background-size:120%120%;opacity:.7}}@-o-keyframes pulse-waves{0%,100%{background-position:center;-o-background-size:100%100%;background-size:100%100%;opacity:.5}50%{background-position:center;-o-background-size:120%120%;background-size:120%120%;opacity:.7}}@keyframes pulse-waves{0%,100%{background-position:center;-webkit-background-size:100%100%;-moz-background-size:100%100%;-o-background-size:100%100%;background-size:100%100%;opacity:.5}50%{background-position:center;-webkit-background-size:120%120%;-moz-background-size:120%120%;-o-background-size:120%120%;background-size:120%120%;opacity:.7}}.particles-container.jsx-8d1cd69eb4cbc79e{position:absolute;inset:0;overflow:hidden}.particle.jsx-8d1cd69eb4cbc79e{position:absolute;width:6px;height:6px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-linear-gradient(left,rgba(147,51,234,.6),rgba(236,72,153,.6));background:-moz-linear-gradient(left,rgba(147,51,234,.6),rgba(236,72,153,.6));background:-o-linear-gradient(left,rgba(147,51,234,.6),rgba(236,72,153,.6));background:linear-gradient(to right,rgba(147,51,234,.6),rgba(236,72,153,.6));-webkit-filter:blur(2px);filter:blur(2px);-webkit-animation:float-particle 20s ease-in-out infinite;-moz-animation:float-particle 20s ease-in-out infinite;-o-animation:float-particle 20s ease-in-out infinite;animation:float-particle 20s ease-in-out infinite}@-webkit-keyframes float-particle{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0);opacity:.3}25%{-webkit-transform:translate(50px,-30px);transform:translate(50px,-30px);opacity:.6}50%{-webkit-transform:translate(100px,50px);transform:translate(100px,50px);opacity:.3}75%{-webkit-transform:translate(10px,80px);transform:translate(10px,80px);opacity:.6}}@-moz-keyframes float-particle{0%,100%{-moz-transform:translate(0,0);transform:translate(0,0);opacity:.3}25%{-moz-transform:translate(50px,-30px);transform:translate(50px,-30px);opacity:.6}50%{-moz-transform:translate(100px,50px);transform:translate(100px,50px);opacity:.3}75%{-moz-transform:translate(10px,80px);transform:translate(10px,80px);opacity:.6}}@-o-keyframes float-particle{0%,100%{-o-transform:translate(0,0);transform:translate(0,0);opacity:.3}25%{-o-transform:translate(50px,-30px);transform:translate(50px,-30px);opacity:.6}50%{-o-transform:translate(100px,50px);transform:translate(100px,50px);opacity:.3}75%{-o-transform:translate(10px,80px);transform:translate(10px,80px);opacity:.6}}@keyframes float-particle{0%,100%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0);opacity:.3}25%{-webkit-transform:translate(50px,-30px);-moz-transform:translate(50px,-30px);-o-transform:translate(50px,-30px);transform:translate(50px,-30px);opacity:.6}50%{-webkit-transform:translate(100px,50px);-moz-transform:translate(100px,50px);-o-transform:translate(100px,50px);transform:translate(100px,50px);opacity:.3}75%{-webkit-transform:translate(10px,80px);-moz-transform:translate(10px,80px);-o-transform:translate(10px,80px);transform:translate(10px,80px);opacity:.6}}",
              }),
            ],
          });
        };
      var H = t(52091),
        V = t(37094);
      let X = (e) => {
        let { isDarkMode: a } = e,
          [t, n] = (0, s.useState)(!1),
          [o, i] = (0, s.useState)(0),
          [c, d] = (0, s.useState)(0),
          [m, x] = (0, s.useState)(!1),
          [p, b] = (0, s.useState)(null),
          [u, g] = (0, s.useState)(!1),
          [h, k] = (0, s.useState)(null),
          [y, j] = (0, s.useState)(!1),
          [w, v] = (0, s.useState)(!0),
          N = (0, s.useRef)(null),
          z = (0, s.useRef)(null),
          C = (0, s.useRef)(null),
          E = [
            {
              id: 1,
              thumbnailUrl: "/thumbnail/1.jpg",
              videoUrl: "https://www.youtube.com/embed/Eai77W7Oz88",
              description:
                "THE NEXT BIG CRYPTO PROJECT? \uD83D\uDD25 FUTURESYNCX \uD83D\uDD25 1000X POTENTIAL!",
              hasPlayButton: !0,
              hasPlayButton: !0,
            },
            {
              id: 3,
              thumbnailUrl: "/thumbnail/3.jpg",
              videoUrl: "https://www.youtube.com/embed/672eHYY3UmI",
              title: "Virtual Marketplaces ",
              description:
                "THE NEXT BIG THING? \uD83C\uDF10 Virtual Marketplaces and AI Commerce Explained!",
              hasPlayButton: !0,
            },
            {
              id: 4,
              thumbnailUrl: "/thumbnail/4.jpg",
              videoUrl: "https://www.youtube.com/embed/UpIJWxKLRjg",
              title: "Revolutionizing Blockchain",
              description:
                "\uD83D\uDD25 FUTURESYNCX Revolutionizing Blockchain NOW! \uD83D\uDCC8\uD83D\uDE80",
              hasPlayButton: !0,
            },
            {
              id: 5,
              thumbnailUrl: "/thumbnail/5.jpg",
              videoUrl: "https://www.youtube.com/embed/pvBffsbJSp8",
              title: "\uD83D\uDD25 FUTURESYNCX ($FSX) \uD83D\uDD25",
              description:
                "\uD83D\uDD25 AI, BLOCKCHAIN & VR \uD83D\uDD25 FUTURESYNCX ($FSX) \uD83D\uDD25 The FUTURE of Digital Commerce is HERE \uD83D\uDD25 Don't Miss!",
              hasPlayButton: !0,
            },
          ],
          M = [...E, ...E];
        (0, s.useEffect)(() => {
          let e = new IntersectionObserver(
            (a) => {
              let [t] = a;
              t.isIntersecting && (g(!0), e.unobserve(t.target));
            },
            { threshold: 0.1 }
          );
          return (
            z.current && e.observe(z.current),
            () => {
              z.current && e.unobserve(z.current);
            }
          );
        }, []);
        let L = () => {
          if (!N.current) return;
          let { scrollLeft: e, scrollWidth: a, clientWidth: t } = N.current;
          j(e > 0), v(e < a - t - 10);
        };
        (0, s.useEffect)(() => {
          let e = N.current;
          return (
            e && (e.addEventListener("scroll", L), L()),
            () => {
              e && e.removeEventListener("scroll", L);
            }
          );
        }, []);
        let S = (e) => {
            n(!0), i(e.pageX - N.current.offsetLeft), d(N.current.scrollLeft);
          },
          D = (e) => {
            n(!0),
              i(e.touches[0].clientX - N.current.offsetLeft),
              d(N.current.scrollLeft);
          },
          B = (e) => {
            if (!t) return;
            e.preventDefault();
            let a = e.pageX - N.current.offsetLeft;
            N.current.scrollLeft = c - (a - o) * 2;
          },
          A = (e) => {
            if (!t) return;
            let a = e.touches[0].clientX - N.current.offsetLeft;
            N.current.scrollLeft = c - (a - o) * 2;
          },
          F = () => {
            n(!1);
          },
          T = (e, a) => {
            a.preventDefault(), t || (b(e), x(!0));
          },
          I = () => {
            x(!1),
              b(null),
              C.current && (C.current.pause(), (C.current.currentTime = 0));
          },
          R = (e) => {
            if (N.current) {
              let { clientWidth: a } = N.current;
              N.current.scrollBy({
                left: "left" === e ? -a / 2 : a / 2,
                behavior: "smooth",
              });
            }
          },
          P = a ? "bg-gray-800/80" : "bg-white/80",
          U = a ? "text-gray-300" : "text-gray-700",
          W = a ? "hover:bg-purple-800/80" : "hover:bg-purple-100/80";
        return (0, r.jsxs)("section", {
          className:
            "jsx-4f990047c1d0b611 " +
            "relative w-full py-12 ".concat(
              a
                ? "bg-[#0E0B12]"
                : "bg-gradient-to-b from-[#EBEBFA] via-[#f0f1ff] to-[#EBEBFA]",
              " overflow-hidden"
            ),
          children: [
            (0, r.jsxs)("div", {
              className:
                "jsx-4f990047c1d0b611 absolute inset-0 overflow-hidden pointer-events-none",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "jsx-4f990047c1d0b611 absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl",
                }),
                (0, r.jsx)("div", {
                  className:
                    "jsx-4f990047c1d0b611 absolute bottom-40 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/5 to-purple-500/5 blur-3xl",
                }),
                (0, r.jsx)("div", {
                  className:
                    "jsx-4f990047c1d0b611 absolute inset-0 bg-grid-pattern opacity-10",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "jsx-4f990047c1d0b611 container mx-auto px-4 mb-10",
              children: (0, r.jsxs)("div", {
                style: {
                  opacity: u ? 1 : 0,
                  transform: u ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                },
                className: "jsx-4f990047c1d0b611 text-center mb-10",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-4f990047c1d0b611 inline-block p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 mb-4",
                    children: (0, r.jsx)("p", {
                      className:
                        "jsx-4f990047c1d0b611 text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient-x",
                      children: "Explore Our Vision",
                    }),
                  }),
                  (0, r.jsxs)("h2", {
                    className:
                      "jsx-4f990047c1d0b611 text-3xl md:text-4xl font-bold mb-6",
                    children: [
                      (0, r.jsxs)("span", {
                        className:
                          "jsx-4f990047c1d0b611 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x",
                        children: ["Discover FutureSyncX", " "],
                      }),
                      (0, r.jsx)("span", {
                        className:
                          "jsx-4f990047c1d0b611 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-pink-500 animate-gradient-x",
                        children: "in Action",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-4f990047c1d0b611 mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6",
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("div", {
              ref: z,
              style: {
                opacity: u ? 1 : 0,
                transform: u ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                transitionDelay: "0.2s",
              },
              className:
                "jsx-4f990047c1d0b611 relative mx-auto max-w-[90%] px-12",
            }),
           
            m &&
              p &&
              (0, r.jsx)("div", {
                className:
                  "jsx-4f990047c1d0b611 fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animation-fade-in",
                children: (0, r.jsxs)("div", {
                  onClick: (e) => e.stopPropagation(),
                  className:
                    "jsx-4f990047c1d0b611 relative max-w-5xl w-full bg-black rounded-xl overflow-hidden shadow-2xl animation-scale-in",
                  children: [
                    (0, r.jsx)("button", {
                      onClick: I,
                      "aria-label": "Close modal",
                      className:
                        "jsx-4f990047c1d0b611 absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-300 flex items-center justify-center",
                      children: (0, r.jsx)(V.QAE, { size: 24 }),
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "jsx-4f990047c1d0b611 relative pb-[56.25%] h-0 bg-black",
                      children: (0, r.jsx)("iframe", {
                        src: p.videoUrl,
                        title: p.title || "Video",
                        frameBorder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                        className:
                          "jsx-4f990047c1d0b611 absolute top-0 left-0 w-full h-full",
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "jsx-4f990047c1d0b611 p-4 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm",
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "jsx-4f990047c1d0b611 text-white text-xl font-bold mb-1",
                          children: p.title,
                        }),
                        (0, r.jsx)("p", {
                          className: "jsx-4f990047c1d0b611 text-gray-300",
                          children: p.description,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            (0, r.jsx)(l(), {
              id: "4f990047c1d0b611",
              children:
                ".hide-scrollbar.jsx-4f990047c1d0b611::-webkit-scrollbar{display:none}.hide-scrollbar.jsx-4f990047c1d0b611{-ms-overflow-style:none;scrollbar-width:none}.video-card-border.jsx-4f990047c1d0b611{-webkit-background-size:300%300%;-moz-background-size:300%300%;-o-background-size:300%300%;background-size:300%300%;-webkit-animation:border-gradient 4s ease infinite;-moz-animation:border-gradient 4s ease infinite;-o-animation:border-gradient 4s ease infinite;animation:border-gradient 4s ease infinite}@-webkit-keyframes border-gradient{0%,100%{background-position:0%0%}50%{background-position:100%100%}}@-moz-keyframes border-gradient{0%,100%{background-position:0%0%}50%{background-position:100%100%}}@-o-keyframes border-gradient{0%,100%{background-position:0%0%}50%{background-position:100%100%}}@keyframes border-gradient{0%,100%{background-position:0%0%}50%{background-position:100%100%}}@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-4f990047c1d0b611{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}.bg-grid-pattern.jsx-4f990047c1d0b611{background-image:-webkit-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-webkit-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-moz-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-moz-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-o-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-o-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:linear-gradient(to right,rgba(147,51,234,.1)1px,transparent 1px),linear-gradient(to bottom,rgba(147,51,234,.1)1px,transparent 1px);-webkit-background-size:30px 30px;-moz-background-size:30px 30px;-o-background-size:30px 30px;background-size:30px 30px}.animation-fade-in.jsx-4f990047c1d0b611{-webkit-animation:fadeIn.3s ease-out;-moz-animation:fadeIn.3s ease-out;-o-animation:fadeIn.3s ease-out;animation:fadeIn.3s ease-out}.animation-scale-in.jsx-4f990047c1d0b611{-webkit-animation:scaleIn.3s ease-out;-moz-animation:scaleIn.3s ease-out;-o-animation:scaleIn.3s ease-out;animation:scaleIn.3s ease-out}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes scaleIn{from{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes scaleIn{from{-moz-transform:scale(.95);transform:scale(.95)}to{-moz-transform:scale(1);transform:scale(1)}}@-o-keyframes scaleIn{from{-o-transform:scale(.95);transform:scale(.95)}to{-o-transform:scale(1);transform:scale(1)}}@keyframes scaleIn{from{-webkit-transform:scale(.95);-moz-transform:scale(.95);-o-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}",
            }),
          ],
        });
      };
      var Y = t(33556),
        O = t(86204);
      let q = (e) => {
          let { isDarkMode: a } = e,
            [t, n] = (0, s.useState)(!1),
            o = (0, s.useRef)(null),
            [i, c] = (0, Y.cI)("mkgjqpzq");
          (0, s.useEffect)(() => {
            let e = new IntersectionObserver(
              (a) => {
                let [t] = a;
                t.isIntersecting && (n(!0), e.unobserve(t.target));
              },
              { threshold: 0.2 }
            );
            return (
              o.current && e.observe(o.current),
              () => {
                o.current && e.unobserve(o.current);
              }
            );
          }, []);
          let d = a ? "text-white" : "text-gray-800",
            f = a ? "text-gray-300" : "text-gray-600",
            m = a
              ? "text-gray-400 hover:text-purple-300"
              : "text-gray-600 hover:text-purple-600",
            x = a
              ? "bg-gray-800 hover:bg-purple-800"
              : "bg-gray-100 hover:bg-purple-100",
            p = new Date().getFullYear(),
            b = [
              {
                icon: (0, r.jsx)(O.LCd, {}),
                link: "https://x.com/FutureSyncX",
              },
              { icon: (0, r.jsx)(H.AGi, {}), link: "https://t.me/futuresyncx" },
            ],
            u = [
              {
                name: "Blog",
                link: "https://company-32.gitbook.io/future-sync-x/documentation/blog",
                icon: (0, r.jsx)(O.l_A, {}),
              },
              {
                name: "Discord",
                link: "https://discord.gg/futuresyncx",
                icon: (0, r.jsx)(O.j2d, {}),
              },
              {
                name: "Telegram",
                link: "https://t.me/futuresyncx",
                icon: (0, r.jsx)(H.AGi, {}),
              },
            ],
            g = [
              {
                name: "FAQ",
                link: "https://company-32.gitbook.io/future-sync-x/documentation/faq",
                icon: (0, r.jsx)(O.l_A, {}),
              },
              {
                name: "Contact",
                link: "mailto:support@futuresyncx.com",
                icon: (0, r.jsx)(O.l_A, {}),
              },
              {
                name: "Support",
                link: "https://company-32.gitbook.io/future-sync-x/documentation/support/support",
                icon: (0, r.jsx)(O.l_A, {}),
              },
            ];
          return (0, r.jsxs)("footer", {
            ref: o,
            className:
              "jsx-5accf15175d408b0 " +
              "w-full ".concat(
                a
                  ? "bg-[#0E0B12]"
                  : "bg-gradient-to-b from-[#EBEBFA] via-[#f0f1ff] to-[#EBEBFA]",
                " relative py-16"
              ),
            children: [
              (0, r.jsx)("div", {
                className:
                  "jsx-5accf15175d408b0 absolute top-0 left-0 right-0 h-1",
                children: (0, r.jsx)("div", {
                  className: "jsx-5accf15175d408b0 w-full h-full",
                  children: (0, r.jsxs)("svg", {
                    viewBox: "0 0 1000 4",
                    preserveAspectRatio: "none",
                    className: "jsx-5accf15175d408b0 w-full h-full",
                    children: [
                      (0, r.jsx)("path", {
                        d: "M0,2 C250,0 350,4 500,4 C650,4 750,0 1000,2",
                        stroke: "url(#footer-gradient)",
                        strokeWidth: "1",
                        fill: "none",
                        className: "jsx-5accf15175d408b0 animated-path",
                      }),
                      (0, r.jsx)("defs", {
                        className: "jsx-5accf15175d408b0",
                        children: (0, r.jsxs)("linearGradient", {
                          id: "footer-gradient",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "0%",
                          className: "jsx-5accf15175d408b0",
                          children: [
                            (0, r.jsx)("stop", {
                              offset: "0%",
                              stopColor: a ? "#0F0F1B" : "#f9fafb",
                              className: "jsx-5accf15175d408b0",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "25%",
                              stopColor: "#8B5CF6",
                              className: "jsx-5accf15175d408b0",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "50%",
                              stopColor: "#EC4899",
                              className: "jsx-5accf15175d408b0",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "75%",
                              stopColor: "#8B5CF6",
                              className: "jsx-5accf15175d408b0",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "100%",
                              stopColor: a ? "#0F0F1B" : "#f9fafb",
                              className: "jsx-5accf15175d408b0",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsxs)("div", {
                className:
                  "jsx-5accf15175d408b0 absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "jsx-5accf15175d408b0 absolute inset-0 bg-grid-pattern opacity-10",
                  }),
                  (0, r.jsx)("div", {
                    className: "jsx-5accf15175d408b0 particles-container",
                    children: [void 0, void 0, void 0, void 0, void 0].map(
                      (e, a) =>
                        (0, r.jsx)(
                          "div",
                          {
                            style: {
                              left: "".concat(10 + 80 * Math.random(), "%"),
                              top: "".concat(10 + 80 * Math.random(), "%"),
                              animationDelay: "".concat(5 * Math.random(), "s"),
                              animationDuration: "".concat(
                                15 + 15 * Math.random(),
                                "s"
                              ),
                            },
                            className: "jsx-5accf15175d408b0 particle",
                          },
                          a
                        )
                    ),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                style: {
                  opacity: t ? 1 : 0,
                  transform: t ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                },
                className: "jsx-5accf15175d408b0 container mx-auto px-4",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "jsx-5accf15175d408b0 grid grid-cols-1 md:grid-cols-5 gap-8 mb-12",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "jsx-5accf15175d408b0 md:col-span-1 flex flex-col items-start justify-between",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "jsx-5accf15175d408b0 flex items-center mb-4",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-5accf15175d408b0 " +
                                  "".concat(
                                    d,
                                    " text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-x drop-shadow-lg"
                                  ),
                                children: "FUTURESYNCX",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "jsx-5accf15175d408b0 relative w-10 h-10 ml-2 transform hover:rotate-12 transition-transform duration-300",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-5accf15175d408b0 absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "jsx-5accf15175d408b0 " +
                                      "absolute inset-1 rounded-full ".concat(
                                        a ? "bg-[#14101A]" : "bg-white",
                                        " flex items-center justify-center"
                                      ),
                                    children: (0, r.jsx)("img", {
                                      src: "/futuresyncx-circle-black.png",
                                      alt: "FutureSyncX Logo",
                                      className: "jsx-5accf15175d408b0 w-7 h-7",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className:
                              "jsx-5accf15175d408b0 " +
                              "".concat(f, " text-xs md:text-sm max-w-xs mb-4"),
                            children:
                              "Empowering a new era by revolutionizing immersive digital commerce with AI-driven innovation and secure blockchain integration.",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "jsx-5accf15175d408b0 flex space-x-3 mt-2",
                            children: b.map((e, a) =>
                              (0, r.jsxs)(
                                "a",
                                {
                                  href: e.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "jsx-5accf15175d408b0 " +
                                    "w-9 h-9 ".concat(
                                      x,
                                      " rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg relative"
                                    ),
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "jsx-5accf15175d408b0 sr-only",
                                      children: e.link
                                        .replace("https://", "")
                                        .replace("www.", "")
                                        .split(".")[0],
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "jsx-5accf15175d408b0 absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 text-white text-xs rounded px-2 py-1 pointer-events-none transition-all duration-200 z-10 whitespace-nowrap",
                                      children: e.link.includes("twitter")
                                        ? "Twitter"
                                        : e.link.includes("telegram")
                                        ? "Telegram"
                                        : "Social",
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "jsx-5accf15175d408b0 text-lg group-hover:text-pink-400 transition-colors duration-300",
                                      children: e.icon,
                                    }),
                                  ],
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "jsx-5accf15175d408b0",
                        children: [
                          (0, r.jsxs)("h3", {
                            className:
                              "jsx-5accf15175d408b0 " +
                              "".concat(
                                d,
                                " font-semibold text-lg mb-4 flex items-center gap-2"
                              ),
                            children: [
                              (0, r.jsx)(O.ef0, {
                                className: "text-purple-500",
                              }),
                              " Projeto",
                            ],
                          }),
                          (0, r.jsx)("ul", {
                            className: "jsx-5accf15175d408b0 space-y-2",
                            children: [
                              {
                                name: "Whitepaper",
                                link: "https://futuresyncx.gitbook.io/",
                              },
                              {
                                name: "Tokenomics",
                                link: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/tokenomics",
                              },
                              {
                                name: "Roadmap",
                                link: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/roadmap",
                              },
                              {
                                name: "FSX Token",
                                link: "https://company-32.gitbook.io/future-sync-x/documentation/distribution/fsx-token",
                              },
                            ].map((e, a) =>
                              (0, r.jsx)(
                                "li",
                                {
                                  className: "jsx-5accf15175d408b0",
                                  children: (0, r.jsxs)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "jsx-5accf15175d408b0 " +
                                      "".concat(
                                        m,
                                        " transition-colors duration-300 text-sm flex items-center gap-2 hover:translate-x-1 transform transition-transform duration-300"
                                      ),
                                    children: [
                                      (0, r.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        className:
                                          "jsx-5accf15175d408b0 h-4 w-4 opacity-70",
                                        children: (0, r.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M9 5l7 7-7 7",
                                          className: "jsx-5accf15175d408b0",
                                        }),
                                      }),
                                      e.name,
                                    ],
                                  }),
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "jsx-5accf15175d408b0",
                        children: [
                          (0, r.jsxs)("h3", {
                            className:
                              "jsx-5accf15175d408b0 " +
                              "".concat(
                                d,
                                " font-semibold text-lg mb-4 flex items-center gap-2"
                              ),
                            children: [
                              (0, r.jsx)(O.vxf, {
                                className: "text-purple-500",
                              }),
                              " Empresa",
                            ],
                          }),
                          (0, r.jsx)("ul", {
                            className: "jsx-5accf15175d408b0 space-y-2",
                            children: [
                              {
                                name: "Mission",
                                link: "https://company-32.gitbook.io/future-sync-x/documentation/whitepaper/mission",
                              },
                              {
                                name: "Proposition",
                                link: "https://company-32.gitbook.io/future-sync-x/documentation/whitepaper/value-proposition",
                              },
                              {
                                name: "Platform",
                                link: "https://company-32.gitbook.io/future-sync-x/documentation/whitepaper/platform-overview-and-features",
                              },
                              {
                                name: "Our Team",
                                link: "https://company-32.gitbook.io/future-sync-x/documentation/whitepaper/team-and-partnerships",
                              },
                              {
                                name: "Support",
                                link: "https://company-32.gitbook.io/future-sync-x/documentation/support/support",
                              },
                            ].map((e, a) =>
                              (0, r.jsx)(
                                "li",
                                {
                                  className: "jsx-5accf15175d408b0",
                                  children: (0, r.jsxs)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "jsx-5accf15175d408b0 " +
                                      "".concat(
                                        m,
                                        " transition-colors duration-300 text-sm flex items-center gap-2 hover:translate-x-1 transform transition-transform duration-300"
                                      ),
                                    children: [
                                      (0, r.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        className:
                                          "jsx-5accf15175d408b0 h-4 w-4 opacity-70",
                                        children: (0, r.jsx)("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M9 5l7 7-7 7",
                                          className: "jsx-5accf15175d408b0",
                                        }),
                                      }),
                                      e.name,
                                    ],
                                  }),
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "jsx-5accf15175d408b0",
                        children: [
                          (0, r.jsxs)("h3", {
                            className:
                              "jsx-5accf15175d408b0 " +
                              "".concat(
                                d,
                                " font-semibold text-lg mb-4 flex items-center gap-2"
                              ),
                            children: [
                              (0, r.jsx)(O.j2d, {
                                className: "text-purple-500",
                              }),
                              " Comunidade",
                            ],
                          }),
                          (0, r.jsx)("ul", {
                            className: "jsx-5accf15175d408b0 space-y-2",
                            children: u.map((e, a) =>
                              (0, r.jsx)(
                                "li",
                                {
                                  className: "jsx-5accf15175d408b0",
                                  children: (0, r.jsxs)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "jsx-5accf15175d408b0 " +
                                      "".concat(
                                        m,
                                        " transition-colors duration-300 text-sm flex items-center gap-2 hover:translate-x-1 transform transition-transform duration-300"
                                      ),
                                    children: [e.icon, e.name],
                                  }),
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "jsx-5accf15175d408b0",
                        children: [
                          (0, r.jsxs)("h3", {
                            className:
                              "jsx-5accf15175d408b0 " +
                              "".concat(
                                d,
                                " font-semibold text-lg mb-4 flex items-center gap-2"
                              ),
                            children: [
                              (0, r.jsx)(O.Ov7, {
                                className: "text-purple-500",
                              }),
                              " Ajuda",
                            ],
                          }),
                          (0, r.jsx)("ul", {
                            className: "jsx-5accf15175d408b0 space-y-2",
                            children: g.map((e, a) =>
                              (0, r.jsx)(
                                "li",
                                {
                                  className: "jsx-5accf15175d408b0",
                                  children: (0, r.jsxs)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "jsx-5accf15175d408b0 " +
                                      "".concat(
                                        m,
                                        " transition-colors duration-300 text-sm flex items-center gap-2 hover:translate-x-1 transform transition-transform duration-300"
                                      ),
                                    children: [e.icon, e.name],
                                  }),
                                },
                                a
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "jsx-5accf15175d408b0 " +
                      "border-t ".concat(
                        a ? "border-gray-800" : "border-gray-200",
                        " mb-8"
                      ),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "jsx-5accf15175d408b0 flex flex-col md:flex-row justify-between items-center w-full gap-6",
                    children: [
                      (0, r.jsxs)("form", {
                        onSubmit: c,
                        className:
                          "jsx-5accf15175d408b0 mb-6 md:mb-0 w-full md:w-auto",
                        children: [
                          (0, r.jsx)("h4", {
                            className:
                              "jsx-5accf15175d408b0 " +
                              "".concat(d, " font-medium text-sm mb-3"),
                            children: "Receba novidades no seu e-mail",
                          }),
                          (0, r.jsxs)("div", {
                            className: "jsx-5accf15175d408b0 flex",
                            children: [
                              (0, r.jsx)("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                placeholder: "your@email.com",
                                className:
                                  "jsx-5accf15175d408b0 " +
                                  "px-4 py-2 rounded-l-md ".concat(
                                    a
                                      ? "bg-gray-800 text-white border-gray-700"
                                      : "bg-white text-gray-900 border-gray-200",
                                    " border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                  ),
                              }),
                              (0, r.jsx)(Y.p8, {
                                prefix: "Email",
                                field: "email",
                                errors: i.errors,
                              }),
                              (0, r.jsxs)("button", {
                                className:
                                  "jsx-5accf15175d408b0 px-4 py-2 rounded-r-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 flex items-center gap-2",
                                children: [
                                  i.succeeded
                                    ? (0, r.jsx)(O.l_A, {
                                        className: "animate-bounce",
                                      })
                                    : null,
                                  i.succeeded ? "Enviado!" : "Assinar",
                                ],
                              }),
                            ],
                          }),
                          i.succeeded &&
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-5accf15175d408b0 mb-4 p-3 rounded-lg flex items-start gap-2 text-green-600 bg-green-50 mt-2",
                              children: [
                                (0, r.jsx)(O.l_A, {
                                  className: "mt-1 flex-shrink-0",
                                }),
                                (0, r.jsx)("span", {
                                  className: "jsx-5accf15175d408b0",
                                  children:
                                    "Seu e-mail foi cadastrado com sucesso!",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "jsx-5accf15175d408b0 text-center md:text-right w-full md:w-auto",
                        children: [
                          (0, r.jsxs)("p", {
                            className:
                              "jsx-5accf15175d408b0 " +
                              "".concat(f, " text-sm mb-2"),
                            children: [
                              "\xa9 ",
                              p,
                              " FutureSyncX. Todos os direitos reservados.",
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "jsx-5accf15175d408b0 flex space-x-4 justify-center md:justify-end",
                            children: [
                              (0, r.jsx)("a", {
                                href: "https://company-32.gitbook.io/future-sync-x/documentation/legal/privacy-policy",
                                target: "_blank",
                                className:
                                  "jsx-5accf15175d408b0 " +
                                  "".concat(
                                    m,
                                    " text-xs transition-colors duration-300 hover:underline"
                                  ),
                                children: "Pol\xedtica de Privacidade",
                              }),
                              (0, r.jsx)("a", {
                                href: "https://company-32.gitbook.io/future-sync-x/documentation/legal/terms-of-service",
                                target: "_blank",
                                className:
                                  "jsx-5accf15175d408b0 " +
                                  "".concat(
                                    m,
                                    " text-xs transition-colors duration-300 hover:underline"
                                  ),
                                children: "Termos de Servi\xe7o",
                              }),
                              (0, r.jsx)("a", {
                                href: "https://company-32.gitbook.io/future-sync-x/documentation/legal/cookie-policy",
                                target: "_blank",
                                className:
                                  "jsx-5accf15175d408b0 " +
                                  "".concat(
                                    m,
                                    " text-xs transition-colors duration-300 hover:underline"
                                  ),
                                children: "Cookies",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(l(), {
                id: "5accf15175d408b0",
                children:
                  "@-webkit-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-moz-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@-o-keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}@keyframes gradient-x{0%,100%{background-position:0%50%}50%{background-position:100%50%}}.animate-gradient-x.jsx-5accf15175d408b0{-webkit-background-size:200%200%;-moz-background-size:200%200%;-o-background-size:200%200%;background-size:200%200%;-webkit-animation:gradient-x 3s ease infinite;-moz-animation:gradient-x 3s ease infinite;-o-animation:gradient-x 3s ease infinite;animation:gradient-x 3s ease infinite}@-webkit-keyframes pulse-slow{0%,100%{opacity:.8;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}}@-moz-keyframes pulse-slow{0%,100%{opacity:.8;-moz-transform:scale(1);transform:scale(1)}50%{opacity:1;-moz-transform:scale(1.1);transform:scale(1.1)}}@-o-keyframes pulse-slow{0%,100%{opacity:.8;-o-transform:scale(1);transform:scale(1)}50%{opacity:1;-o-transform:scale(1.1);transform:scale(1.1)}}@keyframes pulse-slow{0%,100%{opacity:.8;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}}.animate-pulse-slow.jsx-5accf15175d408b0{-webkit-animation:pulse-slow 3s infinite;-moz-animation:pulse-slow 3s infinite;-o-animation:pulse-slow 3s infinite;animation:pulse-slow 3s infinite}.animated-path.jsx-5accf15175d408b0{stroke-dasharray:1000;stroke-dashoffset:1000;-webkit-animation:dash 3s ease-in-out forwards;-moz-animation:dash 3s ease-in-out forwards;-o-animation:dash 3s ease-in-out forwards;animation:dash 3s ease-in-out forwards}@-webkit-keyframes dash{to{stroke-dashoffset:0}}@-moz-keyframes dash{to{stroke-dashoffset:0}}@-o-keyframes dash{to{stroke-dashoffset:0}}@keyframes dash{to{stroke-dashoffset:0}}.bg-grid-pattern.jsx-5accf15175d408b0{background-image:-webkit-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-webkit-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-moz-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-moz-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:-o-linear-gradient(left,rgba(147,51,234,.1)1px,transparent 1px),-o-linear-gradient(top,rgba(147,51,234,.1)1px,transparent 1px);background-image:linear-gradient(to right,rgba(147,51,234,.1)1px,transparent 1px),linear-gradient(to bottom,rgba(147,51,234,.1)1px,transparent 1px);-webkit-background-size:30px 30px;-moz-background-size:30px 30px;-o-background-size:30px 30px;background-size:30px 30px}.particles-container.jsx-5accf15175d408b0{position:absolute;inset:0;overflow:hidden}.particle.jsx-5accf15175d408b0{position:absolute;width:6px;height:6px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-linear-gradient(left,rgba(147,51,234,.5),rgba(236,72,153,.5));background:-moz-linear-gradient(left,rgba(147,51,234,.5),rgba(236,72,153,.5));background:-o-linear-gradient(left,rgba(147,51,234,.5),rgba(236,72,153,.5));background:linear-gradient(to right,rgba(147,51,234,.5),rgba(236,72,153,.5));-webkit-filter:blur(2px);filter:blur(2px);-webkit-animation:float-particle 20s ease-in-out infinite;-moz-animation:float-particle 20s ease-in-out infinite;-o-animation:float-particle 20s ease-in-out infinite;animation:float-particle 20s ease-in-out infinite}@-webkit-keyframes float-particle{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0);opacity:.3}25%{-webkit-transform:translate(40px,-20px);transform:translate(40px,-20px);opacity:.6}50%{-webkit-transform:translate(80px,40px);transform:translate(80px,40px);opacity:.3}75%{-webkit-transform:translate(20px,60px);transform:translate(20px,60px);opacity:.6}}@-moz-keyframes float-particle{0%,100%{-moz-transform:translate(0,0);transform:translate(0,0);opacity:.3}25%{-moz-transform:translate(40px,-20px);transform:translate(40px,-20px);opacity:.6}50%{-moz-transform:translate(80px,40px);transform:translate(80px,40px);opacity:.3}75%{-moz-transform:translate(20px,60px);transform:translate(20px,60px);opacity:.6}}@-o-keyframes float-particle{0%,100%{-o-transform:translate(0,0);transform:translate(0,0);opacity:.3}25%{-o-transform:translate(40px,-20px);transform:translate(40px,-20px);opacity:.6}50%{-o-transform:translate(80px,40px);transform:translate(80px,40px);opacity:.3}75%{-o-transform:translate(20px,60px);transform:translate(20px,60px);opacity:.6}}@keyframes float-particle{0%,100%{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0);opacity:.3}25%{-webkit-transform:translate(40px,-20px);-moz-transform:translate(40px,-20px);-o-transform:translate(40px,-20px);transform:translate(40px,-20px);opacity:.6}50%{-webkit-transform:translate(80px,40px);-moz-transform:translate(80px,40px);-o-transform:translate(80px,40px);transform:translate(80px,40px);opacity:.3}75%{-webkit-transform:translate(20px,60px);-moz-transform:translate(20px,60px);-o-transform:translate(20px,60px);transform:translate(20px,60px);opacity:.6}}",
              }),
            ],
          });
        },
        Q = (e) => {
          let { isDarkMode: a = !0 } = e,
            t = (0, s.useRef)(null),
            n = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              let e = t.current;
              if (!e) return;
              let r = e.getContext("2d"),
                s = [],
                o = [],
                i = [],
                l = {},
                c = {},
                d = {},
                f = {},
                m = null,
                x = () => {
                  let a = e.getBoundingClientRect();
                  return (
                    (e.width = a.width * window.devicePixelRatio),
                    (e.height = a.height * window.devicePixelRatio),
                    a
                  );
                },
                p = (e) => {
                  let { width: a, height: t } = e;
                  (s = []),
                    (c = { x: 0.5 * a, y: 0.45 * t, w: 0.75 * a, h: 0.7 * t }),
                    (d = { x: 0.5 * a, y: 0.95 * t, w: 0, h: 0 });
                  let r = t;
                  for (let e = 0; e < 100; e++) {
                    let a = e / 100,
                      t = N({ p: a }),
                      n = t.y + t.h;
                    n <= r && (l = { disc: { ...t }, i: e }),
                      (r = n),
                      s.push(t);
                  }
                  l.disc &&
                    ((l.path = new Path2D()),
                    l.path.ellipse(
                      l.disc.x,
                      l.disc.y,
                      l.disc.w,
                      l.disc.h,
                      0,
                      0,
                      2 * Math.PI
                    ),
                    l.path.rect(
                      l.disc.x - l.disc.w,
                      0,
                      2 * l.disc.w,
                      l.disc.y
                    ));
                },
                b = (e) => {
                  let { width: t, height: r } = e;
                  o = [];
                  let n = (2 * Math.PI) / 100;
                  for (let e = 0; e < 100; e++) o.push([]);
                  s.forEach((e) => {
                    for (let a = 0; a < 100; a++) {
                      let t = a * n,
                        r = {
                          x: e.x + Math.cos(t) * e.w,
                          y: e.y + Math.sin(t) * e.h,
                        };
                      o[a].push(r);
                    }
                  }),
                    (m = new OffscreenCanvas(t, r));
                  let i = m.getContext("2d");
                  o.forEach((e, t) => {
                    i.save();
                    let r = !1;
                    e.forEach((t, s) => {
                      if (0 === s) return;
                      let n = e[s - 1];
                      !r &&
                      (i.isPointInPath(l.path, t.x, t.y) ||
                        i.isPointInStroke(l.path, t.x, t.y))
                        ? (r = !0)
                        : r && i.clip(l.path),
                        i.beginPath(),
                        i.moveTo(n.x, n.y),
                        i.lineTo(t.x, t.y),
                        (i.strokeStyle = a ? "#444" : "#888"),
                        (i.lineWidth = 2),
                        i.stroke(),
                        i.closePath();
                    }),
                      i.restore();
                  });
                },
                u = (e) => {
                  let { width: a, height: t } = e;
                  if (((i = []), l.disc)) {
                    ((f = {
                      sw: 0.5 * l.disc.w,
                      ew: 2 * l.disc.w,
                      h: 0.85 * t,
                    }).sx = (a - f.sw) / 2),
                      (f.ex = (a - f.ew) / 2);
                    for (let e = 0; e < 100; e++) {
                      let e = g(!0);
                      i.push(e);
                    }
                  }
                },
                g = function () {
                  let e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    t = f.sx + f.sw * Math.random(),
                    r = f.ex + f.ew * Math.random(),
                    s = e ? f.h * Math.random() : f.h,
                    n = a ? Math.random() : 0.3 + 0.4 * Math.random(),
                    o = a ? 255 : 0,
                    i = a
                      ? "rgba(255, 255, 255, ".concat(n, ")")
                      : "rgba("
                          .concat(o, ", ")
                          .concat(o, ", ")
                          .concat(o, ", ")
                          .concat(n, ")");
                  return {
                    x: t,
                    sx: t,
                    dx: r - t,
                    y: s,
                    vy: 0.5 + Math.random(),
                    p: 0,
                    r: 0.5 + 4 * Math.random(),
                    c: i,
                  };
                },
                h = function (e, a, t) {
                  let r =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3],
                    s = t;
                  return (
                    "inExpo" === r &&
                      (s = 0 === t ? 0 : Math.pow(2, 10 * t - 10)),
                    e + (a - e) * s
                  );
                },
                k = () => {
                  (r.strokeStyle = a ? "#444" : "#888"),
                    (r.lineWidth = 2),
                    c &&
                      c.x &&
                      (r.beginPath(),
                      r.ellipse(c.x, c.y, c.w, c.h, 0, 0, 2 * Math.PI),
                      r.stroke(),
                      r.closePath()),
                    s.forEach((e, a) => {
                      a % 5 == 0 &&
                        (l.path &&
                          e.w < l.disc.w - 5 &&
                          (r.save(), r.clip(l.path)),
                        r.beginPath(),
                        r.ellipse(e.x, e.y, e.w, e.h, 0, 0, 2 * Math.PI),
                        r.stroke(),
                        r.closePath(),
                        l.path && e.w < l.disc.w - 5 && r.restore());
                    });
                },
                y = () => {
                  m && r.drawImage(m, 0, 0);
                },
                j = () => {
                  l.path &&
                    (r.save(),
                    r.clip(l.path),
                    i.forEach((e) => {
                      (r.fillStyle = e.c),
                        r.beginPath(),
                        r.rect(e.x, e.y, e.r, e.r),
                        r.closePath(),
                        r.fill();
                    }),
                    r.restore());
                },
                w = () => {
                  s.forEach((e) => {
                    (e.p = (e.p + 0.001) % 1), N(e);
                  });
                },
                v = () => {
                  i.forEach((e) => {
                    (e.p = 1 - e.y / f.h),
                      (e.x = e.sx + e.dx * e.p),
                      (e.y -= e.vy),
                      e.y < 0 && (e.y = g(!1).y);
                  });
                },
                N = (e) => (
                  c &&
                    d &&
                    ((e.x = h(c.x, d.x, e.p)),
                    (e.y = h(c.y, d.y, e.p, "inExpo")),
                    (e.w = h(c.w, d.w, e.p)),
                    (e.h = h(c.h, d.h, e.p))),
                  e
                ),
                z = () => {
                  e.getBoundingClientRect(),
                    r.clearRect(0, 0, e.width, e.height),
                    r.save(),
                    r.scale(window.devicePixelRatio, window.devicePixelRatio),
                    w(),
                    v(),
                    k(),
                    y(),
                    j(),
                    r.restore(),
                    (n.current = requestAnimationFrame(z));
                },
                C = x();
              p(C), b(C), u(C), z();
              let E = () => {
                let e = x();
                p(e), b(e), u(e);
              };
              return (
                window.addEventListener("resize", E),
                () => {
                  window.removeEventListener("resize", E),
                    n.current && cancelAnimationFrame(n.current);
                }
              );
            }, [a]),
            (0, r.jsxs)("div", {
              className:
                l().dynamic([
                  [
                    "5853bbc166bf888f",
                    [
                      a ? "black" : "white",
                      a ? "#a900ff" : "#6366f1",
                      a ? "#00f8f1" : "#06b6d4",
                      a ? "#ffbd1e20" : "#0891b220",
                      a ? "#fe848f" : "#ec4899",
                      a ? "#fe848f20" : "#ec489920",
                      a ? "#00f8f1" : "#06b6d4",
                      a ? "#00f8f160" : "#06b6d460",
                      a ? "#ffbd1e" : "#f59e0b",
                      a ? "0.75" : "0.6",
                      a ? "white" : "black",
                      a ? "white" : "black",
                      a ? "0.5" : "0.3",
                    ],
                  ],
                ]) + " black-hole-container",
              children: [
                (0, r.jsx)("canvas", {
                  ref: t,
                  className:
                    l().dynamic([
                      [
                        "5853bbc166bf888f",
                        [
                          a ? "black" : "white",
                          a ? "#a900ff" : "#6366f1",
                          a ? "#00f8f1" : "#06b6d4",
                          a ? "#ffbd1e20" : "#0891b220",
                          a ? "#fe848f" : "#ec4899",
                          a ? "#fe848f20" : "#ec489920",
                          a ? "#00f8f1" : "#06b6d4",
                          a ? "#00f8f160" : "#06b6d460",
                          a ? "#ffbd1e" : "#f59e0b",
                          a ? "0.75" : "0.6",
                          a ? "white" : "black",
                          a ? "white" : "black",
                          a ? "0.5" : "0.3",
                        ],
                      ],
                    ]) + " js-canvas",
                }),
                (0, r.jsx)("div", {
                  className:
                    l().dynamic([
                      [
                        "5853bbc166bf888f",
                        [
                          a ? "black" : "white",
                          a ? "#a900ff" : "#6366f1",
                          a ? "#00f8f1" : "#06b6d4",
                          a ? "#ffbd1e20" : "#0891b220",
                          a ? "#fe848f" : "#ec4899",
                          a ? "#fe848f20" : "#ec489920",
                          a ? "#00f8f1" : "#06b6d4",
                          a ? "#00f8f160" : "#06b6d460",
                          a ? "#ffbd1e" : "#f59e0b",
                          a ? "0.75" : "0.6",
                          a ? "white" : "black",
                          a ? "white" : "black",
                          a ? "0.5" : "0.3",
                        ],
                      ],
                    ]) + " aura",
                }),
                (0, r.jsx)("div", {
                  className:
                    l().dynamic([
                      [
                        "5853bbc166bf888f",
                        [
                          a ? "black" : "white",
                          a ? "#a900ff" : "#6366f1",
                          a ? "#00f8f1" : "#06b6d4",
                          a ? "#ffbd1e20" : "#0891b220",
                          a ? "#fe848f" : "#ec4899",
                          a ? "#fe848f20" : "#ec489920",
                          a ? "#00f8f1" : "#06b6d4",
                          a ? "#00f8f160" : "#06b6d460",
                          a ? "#ffbd1e" : "#f59e0b",
                          a ? "0.75" : "0.6",
                          a ? "white" : "black",
                          a ? "white" : "black",
                          a ? "0.5" : "0.3",
                        ],
                      ],
                    ]) + " overlay",
                }),
                (0, r.jsx)(l(), {
                  id: "5853bbc166bf888f",
                  dynamic: [
                    a ? "black" : "white",
                    a ? "#a900ff" : "#6366f1",
                    a ? "#00f8f1" : "#06b6d4",
                    a ? "#ffbd1e20" : "#0891b220",
                    a ? "#fe848f" : "#ec4899",
                    a ? "#fe848f20" : "#ec489920",
                    a ? "#00f8f1" : "#06b6d4",
                    a ? "#00f8f160" : "#06b6d460",
                    a ? "#ffbd1e" : "#f59e0b",
                    a ? "0.75" : "0.6",
                    a ? "white" : "black",
                    a ? "white" : "black",
                    a ? "0.5" : "0.3",
                  ],
                  children:
                    ".black-hole-container.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;margin:0;padding:0;width:100%;height:100%;overflow:hidden;z-index:0}.black-hole-container.__jsx-style-dynamic-selector:before{position:absolute;top:50%;left:50%;z-index:2;display:block;width:150%;height:140%;background:-webkit-radial-gradient(50%55%,ellipse,transparent 10%,"
                      .concat(
                        a ? "black" : "white",
                        " 50%);background:-moz-radial-gradient(50%55%,ellipse,transparent 10%,"
                      )
                      .concat(
                        a ? "black" : "white",
                        " 50%);background:-o-radial-gradient(50%55%,ellipse,transparent 10%,"
                      )
                      .concat(
                        a ? "black" : "white",
                        " 50%);background:radial-gradient(ellipse at 50%55%,transparent 10%,"
                      )
                      .concat(
                        a ? "black" : "white",
                        ' 50%);-webkit-transform:translate3d(-50%,-50%,0);-moz-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);content:""}.black-hole-container.__jsx-style-dynamic-selector:after{position:absolute;top:50%;left:50%;z-index:5;display:block;width:100%;height:100%;background:-webkit-radial-gradient(50%75%,ellipse,'
                      )
                      .concat(
                        a ? "#a900ff" : "#6366f1",
                        " 20%,transparent 75%);background:-moz-radial-gradient(50%75%,ellipse,"
                      )
                      .concat(
                        a ? "#a900ff" : "#6366f1",
                        " 20%,transparent 75%);background:-o-radial-gradient(50%75%,ellipse,"
                      )
                      .concat(
                        a ? "#a900ff" : "#6366f1",
                        " 20%,transparent 75%);background:radial-gradient(ellipse at 50%75%,"
                      )
                      .concat(
                        a ? "#a900ff" : "#6366f1",
                        ' 20%,transparent 75%);mix-blend-mode:overlay;-webkit-transform:translate3d(-50%,-50%,0);-moz-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);content:""}@-webkit-keyframes aura-glow{0%{background-position:0 100%}100%{background-position:0 300%}}@-moz-keyframes aura-glow{0%{background-position:0 100%}100%{background-position:0 300%}}@-o-keyframes aura-glow{0%{background-position:0 100%}100%{background-position:0 300%}}@keyframes aura-glow{0%{background-position:0 100%}100%{background-position:0 300%}}.aura.__jsx-style-dynamic-selector{position:absolute;top:-71.5%;left:50%;z-index:3;width:30%;height:140%;background:-webkit-linear-gradient(70deg,'
                      )
                      .concat(a ? "#00f8f1" : "#06b6d4", ",")
                      .concat(a ? "#ffbd1e20" : "#0891b220", " 16.5%,")
                      .concat(a ? "#fe848f" : "#ec4899", " 33%,")
                      .concat(a ? "#fe848f20" : "#ec489920", " 49.5%,")
                      .concat(a ? "#00f8f1" : "#06b6d4", " 66%,")
                      .concat(a ? "#00f8f160" : "#06b6d460", " 85.5%,")
                      .concat(
                        a ? "#ffbd1e" : "#f59e0b",
                        " 100%)0 100%/100%200%;background:-moz-linear-gradient(70deg,"
                      )
                      .concat(a ? "#00f8f1" : "#06b6d4", ",")
                      .concat(a ? "#ffbd1e20" : "#0891b220", " 16.5%,")
                      .concat(a ? "#fe848f" : "#ec4899", " 33%,")
                      .concat(a ? "#fe848f20" : "#ec489920", " 49.5%,")
                      .concat(a ? "#00f8f1" : "#06b6d4", " 66%,")
                      .concat(a ? "#00f8f160" : "#06b6d460", " 85.5%,")
                      .concat(
                        a ? "#ffbd1e" : "#f59e0b",
                        " 100%)0 100%/100%200%;background:-o-linear-gradient(70deg,"
                      )
                      .concat(a ? "#00f8f1" : "#06b6d4", ",")
                      .concat(a ? "#ffbd1e20" : "#0891b220", " 16.5%,")
                      .concat(a ? "#fe848f" : "#ec4899", " 33%,")
                      .concat(a ? "#fe848f20" : "#ec489920", " 49.5%,")
                      .concat(a ? "#00f8f1" : "#06b6d4", " 66%,")
                      .concat(a ? "#00f8f160" : "#06b6d460", " 85.5%,")
                      .concat(
                        a ? "#ffbd1e" : "#f59e0b",
                        " 100%)0 100%/100%200%;background:linear-gradient(20deg,"
                      )
                      .concat(a ? "#00f8f1" : "#06b6d4", ",")
                      .concat(a ? "#ffbd1e20" : "#0891b220", " 16.5%,")
                      .concat(a ? "#fe848f" : "#ec4899", " 33%,")
                      .concat(a ? "#fe848f20" : "#ec489920", " 49.5%,")
                      .concat(a ? "#00f8f1" : "#06b6d4", " 66%,")
                      .concat(a ? "#00f8f160" : "#06b6d460", " 85.5%,")
                      .concat(
                        a ? "#ffbd1e" : "#f59e0b",
                        " 100%)0 100%/100%200%;-webkit-border-radius:0 0 100%100%;-moz-border-radius:0 0 100%100%;border-radius:0 0 100%100%;-webkit-filter:blur(50px);filter:blur(50px);mix-blend-mode:plus-lighter;opacity:"
                      )
                      .concat(
                        a ? "0.75" : "0.6",
                        ";-webkit-transform:translate3d(-50%,0,0);-moz-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);-webkit-animation:aura-glow 5s infinite linear;-moz-animation:aura-glow 5s infinite linear;-o-animation:aura-glow 5s infinite linear;animation:aura-glow 5s infinite linear}.overlay.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;z-index:10;width:100%;height:100%;background:-webkit-repeating-linear-gradient(transparent,transparent 1px,"
                      )
                      .concat(a ? "white" : "black", " 1px,")
                      .concat(
                        a ? "white" : "black",
                        " 2px);background:-moz-repeating-linear-gradient(transparent,transparent 1px,"
                      )
                      .concat(a ? "white" : "black", " 1px,")
                      .concat(
                        a ? "white" : "black",
                        " 2px);background:-o-repeating-linear-gradient(transparent,transparent 1px,"
                      )
                      .concat(a ? "white" : "black", " 1px,")
                      .concat(
                        a ? "white" : "black",
                        " 2px);background:repeating-linear-gradient(transparent,transparent 1px,"
                      )
                      .concat(a ? "white" : "black", " 1px,")
                      .concat(
                        a ? "white" : "black",
                        " 2px);mix-blend-mode:overlay;opacity:"
                      )
                      .concat(
                        a ? "0.5" : "0.3",
                        "}canvas.__jsx-style-dynamic-selector{display:block;width:100%;height:100%}"
                      ),
                }),
              ],
            })
          );
        };
      function J() {
        let [e, a] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          try {
            let e = localStorage.getItem("darkMode");
            try {
              window.matchMedia("(prefers-color-scheme: dark)").matches;
            } catch (e) {}
            let t = "false" !== e;
            a(t),
              t
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark");
          } catch (e) {
            console.error("Error initializing theme:", e),
              a(!0),
              document.documentElement.classList.add("dark");
          }
        }, []);
        let t = () => {
            let t = !e;
            a(t), n(t);
            try {
              localStorage.setItem("darkMode", t.toString());
            } catch (e) {
              console.error("Error saving theme preference:", e);
            }
          },
          n = (e) => {
            "undefined" != typeof document &&
              (e
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark"));
          };
        return (0, r.jsxs)("div", {
          className: "min-h-screen ".concat(
            e ? "bg-black text-white" : "bg-white text-gray-800"
          ),
          children: [
            (0, r.jsxs)(o(), {
              children: [
                (0, r.jsx)("title", {
                  children:
                    "FUTURESYNCX – Bridging VR, AI & E-Commerce with Decentralized Innovation",
                }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content:
                    "FUTURESYNCX revolutionizes digital commerce by merging VR, AI, and Blockchain, enabling a decentralized experience for global shopping, auctions, and innovation — with our Presale now live for early supporters.",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  href: "/futuresyncx-circle-black.png",
                }),
                (0, r.jsx)("script", {
                  strategy: "afterInteractive",
                  src: "https://www.googletagmanager.com/gtag/js?id=AW-16992297496",
                }),
                (0, r.jsx)("script", {
                  id: "gtag-init",
                  strategy: "afterInteractive",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'AW-16992297496');\n            ",
                  },
                }),
              ],
            }),
            (0, r.jsx)(g, { isDarkMode: e, toggleDarkMode: t }),
            (0, r.jsxs)("main", {
              children: [
                (0, r.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, r.jsx)(Q, { isDarkMode: e }),
                    (0, r.jsx)(C, { isDarkMode: e }),
                  ],
                }),
                (0, r.jsx)(X, { isDarkMode: e }),
                (0, r.jsx)(E, { isDarkMode: e }),
                (0, r.jsx)(M, { isDarkMode: e }),
                (0, r.jsx)(T, { isDarkMode: e }),
                (0, r.jsx)(I, { isDarkMode: e }),
                (0, r.jsx)(W, { isDarkMode: e }),
                (0, r.jsx)(_, { isDarkMode: e }),
                (0, r.jsx)(G, { isDarkMode: e }),
                (0, r.jsx)(q, { isDarkMode: e }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        5970, 8151, 8391, 4838, 9317, 4738, 3365, 4817, 509, 4396, 594, 5957,
        2777, 3728, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 75557));
      }
    ),
      (_N_E = e.O());
  },
]);
