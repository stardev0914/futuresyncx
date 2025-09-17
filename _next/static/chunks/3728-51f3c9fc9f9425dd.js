"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3728],
  {
    73799: function (e, s, t) {
      var a = t(85893),
        c = t(33777),
        n = t(7696);
      let l = (e) => {
        let { active: s, childStyle: t } = e;
        return (0, a.jsx)(c.NL.Custom, {
          children: (e) => {
            var c;
            let {
              account: l,
              chain: r,
              openAccountModal: i,
              openChainModal: o,
              openConnectModal: d,
              mounted: x,
            } = e;
            return (0, a.jsx)("div", {
              ...(!x && {
                "aria-hidden": !0,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              }),
              children:
                x && l && r
                  ? r.unsupported
                    ? (0, a.jsx)("button", {
                        onClick: o,
                        className:
                          "bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg",
                        children: "Wrong network",
                      })
                    : (0, a.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [
                          s &&
                            (0, a.jsx)("button", {
                              onClick: o,
                              className:
                                "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2",
                              children:
                                r.hasIcon &&
                                (0, a.jsx)("div", {
                                  className: "w-5 h-5",
                                  children:
                                    r.iconUrl &&
                                    (0, a.jsx)("img", {
                                      alt:
                                        null !== (c = r.name) && void 0 !== c
                                          ? c
                                          : "Chain icon",
                                      src: r.iconUrl,
                                      className: "w-5 h-5",
                                    }),
                                }),
                            }),
                          (0, a.jsxs)("button", {
                            onClick: i,
                            className:
                              "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2",
                            children: [
                              s &&
                                (0, a.jsx)("svg", {
                                  class:
                                    "w-6 h-6 text-gray-800 dark:text-white",
                                  "aria-hidden": "true",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  children: (0, a.jsx)("path", {
                                    stroke: "currentColor",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z",
                                  }),
                                }),
                              l.displayName,
                            ],
                          }),
                        ],
                      })
                  : (0, a.jsxs)("button", {
                      onClick: d,
                      className:
                        "flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-md transition-colors ".concat(
                          t
                        ),
                      children: [
                        " ",
                        s && (0, a.jsx)(n.cOC, { className: "mr-2", size: 20 }),
                        "CONNECT WALLET",
                      ],
                    }),
            });
          },
        });
      };
      s.Z = l;
    },
    83728: function (e, s, t) {
      t.d(s, {
        Nw: function () {
          return L;
        },
        nv: function () {
          return K;
        },
        BY: function () {
          return C;
        },
        Ub: function () {
          return ed;
        },
        PP: function () {
          return S.Z;
        },
        A: function () {
          return X;
        },
        ip: function () {
          return P;
        },
        DJ: function () {
          return r;
        },
        YE: function () {
          return y;
        },
        T4: function () {
          return ej;
        },
        fB: function () {
          return w;
        },
        nL: function () {
          return eh;
        },
        m5: function () {
          return Y;
        },
        Wc: function () {
          return V;
        },
        EI: function () {
          return er;
        },
        YW: function () {
          return I;
        },
        IK: function () {
          return G;
        },
        be: function () {
          return T;
        },
        bK: function () {
          return et;
        },
      });
      var a = t(85893),
        c = t(67294),
        n = t(52091);
      let l = (e) => {
        let { isDarkMode: s, setIsSidebarOpen: t, isSidebarOpen: c } = e;
        return (0, a.jsxs)("div", {
          className:
            "lg:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center ".concat(
              s ? "bg-[#12101A]" : "bg-white",
              " p-4 shadow-md"
            ),
          children: [
            (0, a.jsxs)("a", {
              href: "/",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, a.jsx)("img", {
                      style: { width: "3rem" },
                      src: "/futuresyncx-circle-black.png",
                      alt: "",
                      srcSet: "",
                    }),
                    (0, a.jsx)("span", {
                      className: "text-xl font-bold ".concat(
                        s ? "text-white" : "text-gray-900"
                      ),
                      children: "FUTURESYNCX",
                    }),
                  ],
                }),
                " ",
              ],
            }),
            (0, a.jsx)("button", {
              onClick: () => t(!c),
              className: s ? "text-white" : "text-gray-900",
              children: c
                ? (0, a.jsx)(n.aHS, { size: 24 })
                : (0, a.jsx)(n.Fm7, { size: 24 }),
            }),
          ],
        });
      };
      var r = l,
        i = t(41664),
        o = t.n(i),
        d = t(48486),
        x = t(59598),
        m = t(11163),
        h = t(30080),
        p = t(19151),
        u = t(35282),
        g = t(78633),
        j = t(61121),
        b = t(10612),
        f = t(34257);
      let N = (e) => {
        let {
            isSidebarOpen: s,
            isDarkMode: t,
            setIsDarkMode: l,
            setIsSidebarOpen: r,
            setIsComponent: i,
          } = e,
          N = (0, m.useRouter)(),
          {
            provider: y,
            signer: v,
            contract: w,
            account: S,
            chainId: k,
            isConnected: T,
            isConnecting: B,
            contractInfo: C,
            tokenBalances: F,
            error: A,
            connectWallet: D,
            disconnectWallet: U,
            switchNetwork: E,
            buyWithETH: P,
            buyWithUSDT: M,
            buyWithUSDC: H,
            updateTokenPrice: X,
            updateUSDT: O,
            updateUSDC: Y,
            setSaleToken: R,
            setBlockStatus: I,
            withdrawTokens: W,
            getUserTransactions: L,
            getAllTransactions: $,
            formatAddress: q,
            formatTokenAmount: _,
            refreshContractData: V,
            isOwner: Z,
          } = (0, b.$6)(),
          { disconnect: K } = (0, d.q)(),
          { connect: z, connectors: J } = (0, x.$)(),
          { showInfo: G } = (0, f.p)(),
          [Q, ee] = c.useState("Dashboard"),
          [es, et] = (0, c.useState)(!1),
          ea = [
            { name: "Dashboard", icon: h.bUq, onClick: () => i("Dashboard") },
            {
              name: "User Dashboard",
              icon: n.Xws,
              onClick: () => i("User Dashboard"),
              refKey: "user-dashboard",
            },
            {
              name: "Token Documentation",
              icon: j.MDG,
              onClick: () => i("token-documentation"),
              refKey: "token-documentation",
            },
            {
              name: "Token Sale",
              icon: n.RcD,
              onClick: () => i("Token Sale"),
              refKey: "token-sale",
            },
            {
              name: "Staking",
              icon: g.dY3,
              onClick: () => i("Staking"),
              refKey: "staking",
            },
            {
              name: "Transaction",
              icon: n.EXY,
              onClick: () => i("Transaction"),
              refKey: "transaction",
            },
            {
              name: "Token Transfer",
              icon: j.HZ8,
              onClick: () => i("Token Transfer"),
              refKey: "token-transfer",
            },
            {
              name: "Contact Us",
              icon: h.SB0,
              onClick: () => i("Contact Us"),
              refKey: "contact-us",
            },
          ],
          ec = [
            { name: "Admin", icon: h.ZJo, onClick: () => i("Admin Overview") },
            {
              name: "Admin Functions",
              icon: p.Xw7,
              onClick: () => i("Admin Functions"),
            },
            {
              name: "Withdraw Tokens",
              icon: u.IVz,
              onClick: () => i("Withdraw Tokens"),
            },
          ],
          en = (0, c.useCallback)(async () => {
            if (!w || !S)
              return console.log("Contract or address not available yet"), !1;
            try {
              let e = await w.owner(),
                s = e.toLowerCase() === S.toLowerCase();
              return s;
            } catch (e) {
              return console.error("Error checking owner:", e), !1;
            }
          }, [w, S]);
        (0, c.useEffect)(() => {
          let e = async () => {
            try {
              if (w && S) {
                let e = await en();
                et(e);
              }
            } catch (e) {
              console.error("Error in owner check effect:", e);
            }
          };
          e();
        }, [w, S, en]),
          (0, c.useEffect)(() => {
            let { ref: e } = N.query;
            if (e) {
              let s = ea.find((s) => s.refKey === e);
              s && (ee(s.name), s.onClick && s.onClick());
            }
          }, [N.query, i]);
        let el = async () => {
          try {
            K(), G("Wallet disconnected successfully");
          } catch (e) {
            console.error("Error disconnecting wallet:", e);
          }
        };
        return (0, a.jsxs)("aside", {
          className:
            "\n      fixed lg:static left-0 top-0 h-screen w-64 z-40\n      transform transition-transform duration-300 ease-in-out\n      "
              .concat(
                s ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
                "\n      flex flex-col\n      "
              )
              .concat(
                t ? "bg-[#12101A]" : "bg-[#F3F4F6] shadow-lg",
                "\n      overflow-hidden\n    "
              ),
          children: [
            (0, a.jsxs)("div", {
              className: "flex-shrink-0 p-4 border-b  ".concat(
                t ? "border-gray-800" : "bg-[#F3F4F6] shadow-sm",
                " "
              ),
              children: [
                " ",
                (0, a.jsxs)("a", {
                  href: "/",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)("img", {
                          style: { width: "3rem" },
                          src: "/futuresyncx-circle-black.png",
                          alt: "",
                          srcSet: "",
                        }),
                        (0, a.jsx)("span", {
                          className: "text-xl font-bold ".concat(
                            t ? "text-white" : "text-gray-900"
                          ),
                          children: "FUTURESYNCX",
                        }),
                      ],
                    }),
                    " ",
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex-1 overflow-y-auto custom-scrollbar p-4",
              children: [
                (0, a.jsxs)("nav", {
                  className: "space-y-1 mb-6",
                  children: [
                    (0, a.jsx)("h5", {
                      className:
                        "text-xs uppercase text-gray-500 font-medium mb-2 pl-4",
                      children: "Main Navigation",
                    }),
                    ea.map((e) =>
                      (0, a.jsxs)(
                        o(),
                        {
                          href: "#",
                          className:
                            "flex items-center gap-3 px-4 py-2.5 rounded-lg ".concat(
                              Q === e.name
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                : "".concat(
                                    t ? "text-gray-400" : "text-gray-600",
                                    " \n                   hover:bg-[#8F5AF1] hover:bg-opacity-20 hover:text-purple-600"
                                  )
                            ),
                          onClick: (s) => {
                            s.preventDefault(),
                              window.innerWidth < 1024 && r(!1),
                              ee(e.name),
                              e.onClick && e.onClick();
                          },
                          children: [
                            (0, a.jsx)(e.icon, { className: "w-5 h-5" }),
                            (0, a.jsx)("span", { children: e.name }),
                          ],
                        },
                        e.name
                      )
                    ),
                  ],
                }),
                es &&
                  (0, a.jsxs)("nav", {
                    className: "space-y-1",
                    children: [
                      (0, a.jsx)("h5", {
                        className:
                          "text-xs uppercase text-gray-500 font-medium mb-2 pl-4",
                        children: "Admin",
                      }),
                      ec.map((e) =>
                        (0, a.jsxs)(
                          o(),
                          {
                            href: "#",
                            className:
                              "flex items-center gap-3 px-4 py-2.5 rounded-lg ".concat(
                                Q === e.name
                                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                  : "".concat(
                                      t ? "text-gray-400" : "text-gray-600",
                                      " \n            hover:bg-[#8F5AF1] hover:bg-opacity-20 hover:text-purple-600"
                                    )
                              ),
                            onClick: (s) => {
                              s.preventDefault(),
                                window.innerWidth < 1024 && r(!1),
                                ee(e.name),
                                e.onClick && e.onClick();
                            },
                            children: [
                              (0, a.jsx)(e.icon, { className: "w-5 h-5" }),
                              (0, a.jsx)("span", { children: e.name }),
                            ],
                          },
                          e.name
                        )
                      ),
                    ],
                  }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex-shrink-0 p-4 border-t ".concat(
                t ? "border-gray-800" : "bg-[#F3F4F6] shadow-sm",
                " "
              ),
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3 mb-3",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "w-12 h-12 bg-[#7F39E8] rounded-full flex items-center justify-center",
                      children: (0, a.jsx)(n.m3W, {
                        className: "w-10 h-10 text-[#D4287F]",
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("div", {
                          className: t ? "text-gray-400" : "text-gray-600",
                          children: q(S),
                        }),
                        (0, a.jsxs)("div", {
                          className: "text-gray-500",
                          children: [
                            null == F ? void 0 : F.userFsxBlanace,
                            " ",
                            "FSX",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                S &&
                  (0, a.jsx)("button", {
                    className:
                      "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg mb-2 text-sm  uppercase font-medium",
                    children: q(S),
                  }),
                S &&
                  (0, a.jsx)("button", {
                    onClick: el,
                    className:
                      "w-full border py-3 rounded-lg text-sm uppercase font-medium mb-4\n              ".concat(
                        t
                          ? "border-gray-700 text-gray-400 hover:border-gray-600"
                          : "border-gray-300 text-gray-600 hover:border-gray-400"
                      ),
                    children: "DISCONNECT",
                  }),
                (0, a.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, a.jsx)("button", {
                      onClick: () => l(!0),
                      className: "p-3 rounded transition-colors flex-1 ".concat(
                        t
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                          : "text-gray-400 hover:bg-gray-100"
                      ),
                      children: (0, a.jsx)(n.TLr, {
                        className: "w-5 h-5 mx-auto",
                      }),
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => l(!1),
                      className: "p-3 rounded transition-colors flex-1 ".concat(
                        t
                          ? "text-gray-400 hover:bg-gray-800"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                      ),
                      children: (0, a.jsx)(n.Mei, {
                        className: "w-5 h-5 mx-auto",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var y = N;
      let v = (e) => {
        let { successMessage: s, transactionHash: t } = e;
        return (0, a.jsxs)("div", {
          className:
            "mb-6 p-4 rounded-xl bg-green-900/20 text-green-400 flex items-start gap-3",
          children: [
            (0, a.jsx)(n.l_A, { className: "mt-1" }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("p", { children: s }),
                t &&
                  (0, a.jsx)("a", {
                    href: "https://etherscan.io/tx/".concat(t),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-purple-400 hover:text-purple-300 mt-2 inline-block",
                    children: "View on Etherscan",
                  }),
              ],
            }),
          ],
        });
      };
      var w = v,
        S = t(73799);
      let k = (e) => {
        let { isDarkMode: s } = e,
          t = {
            mainBg: s
              ? "bg-gradient-to-b from-[#13101A] to-[#13101A]"
              : "bg-gradient-to-b from-gray-100 to-white",
            cardBg: s ? "bg-gray-800 bg-opacity-50" : "bg-white",
            cardBorder: s
              ? "border-purple-500 border-opacity-30 hover:border-opacity-70"
              : "border-purple-400 border-opacity-30 hover:border-opacity-70",
            outerCircleBg: s ? "bg-purple-800 bg-opacity-30" : "bg-purple-100",
            innerCircleBg: "bg-[#E8489B]",
            title: s ? "text-white opacity-80" : "text-gray-900",
            cardTitle: s ? "text-white" : "text-gray-900",
            cardText: s ? "text-gray-400" : "text-gray-600",
            shadowEffect: s ? "" : "shadow-lg",
          };
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen flex flex-col items-center justify-center ".concat(
              t.mainBg
            ),
          children: [
            (0, a.jsx)("div", {
              className: "w-full flex justify-center mb-20",
              children: (0, a.jsx)("h1", {
                className: "text-3xl font-bold ".concat(t.title),
                children: "Wallet Connection",
              }),
            }),
            (0, a.jsx)("div", {
              className:
                "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl px-4",
              children: [
                {
                  name: "MetaMask",
                  description: "Connect using browser wallet",
                },
                {
                  name: "WalletConnect",
                  description: "Scan with mobile wallet",
                },
                {
                  name: "Coinbase Wallet",
                  description: "Connect with Coinbase",
                },
              ].map((e, s) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: ""
                      .concat(t.cardBg, " p-6 rounded-xl border ")
                      .concat(t.cardBorder, " transition-all cursor-pointer ")
                      .concat(t.shadowEffect),
                    children: [
                      (0, a.jsx)("div", {
                        className: "h-16 w-16 rounded-full ".concat(
                          t.outerCircleBg,
                          " flex items-center justify-center mb-4"
                        ),
                        children: (0, a.jsx)("div", {
                          className: "h-10 w-10 rounded-full ".concat(
                            t.innerCircleBg,
                            " flex items-center justify-center"
                          ),
                          children: (0, a.jsx)(n.OZg, {
                            className: "text-white text-lg",
                          }),
                        }),
                      }),
                      (0, a.jsx)("h3", {
                        className: "".concat(t.cardTitle, " text-lg mb-1"),
                        children: e.name,
                      }),
                      (0, a.jsx)("p", {
                        className: "".concat(t.cardText, " text-sm"),
                        children: e.description,
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
            (0, a.jsx)(S.Z, { isDarkMode: s }),
            (0, a.jsx)("div", {
              className: "mt-20 w-full max-w-4xl px-4",
              children: (0, a.jsxs)("div", {
                className: "flex items-center mb-4",
                children: [
                  (0, a.jsx)("div", {
                    className: "h-10 w-10 rounded-full ".concat(
                      t.outerCircleBg,
                      " flex items-center justify-center mr-4"
                    ),
                    children: (0, a.jsx)("div", {
                      className: "h-6 w-6 rounded-full ".concat(
                        t.innerCircleBg,
                        " flex items-center justify-center"
                      ),
                      children: (0, a.jsx)(n.OZg, {
                        className: "text-white text-xs",
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "".concat(t.cardTitle, " text-md"),
                        children: "Recent Activity",
                      }),
                      (0, a.jsx)("p", {
                        className: "".concat(t.cardText, " text-xs"),
                        children: "Connect to view your recent transactions",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var T = k;
      let B = (e) => {
        let { isLoading: s, isDarkMode: t } = e;
        return s
          ? (0, a.jsxs)("div", {
              className: "fixed inset-0 flex items-center justify-center z-50",
              children: [
                (0, a.jsx)("div", {
                  className: "absolute inset-0 ".concat(
                    t
                      ? "bg-gray-900/70 backdrop-blur-md"
                      : "bg-white/70 backdrop-blur-md"
                  ),
                }),
                (0, a.jsx)("div", {
                  className: "relative z-10",
                  children: (0, a.jsx)("div", {
                    className: "flex flex-col items-center",
                    children: (0, a.jsxs)("div", {
                      className: "h-12 w-12 relative",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 border-purple-500",
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          : null;
      };
      var C = B,
        F = t(36465),
        A = t.n(F),
        D = t(25675),
        U = t.n(D);
      let E = (e) => {
        let { isDarkMode: s } = e;
        return (0, a.jsx)("div", {
          className: "relative w-screen overflow-hidden mb-8",
          style: { marginLeft: "calc(-50vw + 50%)" },
          children: (0, a.jsxs)("div", {
            style: { position: "relative", paddingBottom: "15%" },
            className: "jsx-4042a09cae37381 w-screen",
            children: [
              (0, a.jsx)(A(), {
                id: "4042a09cae37381",
                children:
                  "div.jsx-4042a09cae37381{width:100vw!important}@media(max-width:1023px){div.jsx-4042a09cae37381{padding-bottom:0!important;height:240px!important}}@media(max-width:640px){div.jsx-4042a09cae37381{padding-bottom:0!important;height:180px!important}}",
              }),
              (0, a.jsx)(U(), {
                src: s ? "/dashboard.png" : "/dashboard-light.png",
                alt: "Wave Background",
                fill: !0,
                priority: !0,
                sizes: "100vw",
                className: "object-cover",
                style: { objectPosition: "center bottom", objectFit: "cover" },
              }),
            ],
          }),
        });
      };
      var P = E;
      let M = "0.0018",
        H = (e) => {
          let { isDarkMode: s, setIsComponen: t } = e,
            l = {
              bg: s ? "bg-[#0D0B12]" : "bg-gray-100",
              header: s ? "bg-[#12101A]" : "bg-white",
              card: s ? "bg-[#12101A]" : "bg-white",
              text: s ? "text-white" : "text-gray-900",
              textSecondary: s ? "text-gray-400" : "text-gray-500",
              border: s ? "border-gray-800" : "border-gray-200",
              divide: s ? "divide-gray-800" : "divide-gray-200",
              shadow: s ? "" : "shadow-lg",
            },
            {
              account: r,
              tokenBalances: i,
              getAllTransactions: o,
              reCall: d,
              formatAddress: x,
              contractInfo: m,
            } = (0, b.$6)(),
            [h, p] = (0, c.useState)(!1),
            [u, g] = (0, c.useState)([]);
          (0, c.useEffect)(() => {
            let e = async () => {
              if (r) {
                let e = await o();
                g(e.reverse());
              }
            };
            e();
          }, [r, d]);
          let f = () => {
              navigator.clipboard
                .writeText(r)
                .then(() => {
                  p(!0), setTimeout(() => p(!1), 2e3);
                })
                .catch((e) => {
                  console.error("Failed to copy address:", e);
                });
            },
            N = (e) => {
              if (!e) return "";
              let s = new Date(e),
                t = s.getFullYear(),
                a = String(s.getMonth() + 1).padStart(2, "0"),
                c = String(s.getDate()).padStart(2, "0"),
                n = String(s.getHours()).padStart(2, "0"),
                l = String(s.getMinutes()).padStart(2, "0"),
                r = String(s.getSeconds()).padStart(2, "0");
              return ""
                .concat(t, "-")
                .concat(a, "-")
                .concat(c, " ")
                .concat(n, ":")
                .concat(l, ":")
                .concat(r);
            },
            y = (e) =>
              e ? "".concat(e.slice(0, 6), "...").concat(e.slice(-4)) : "",
            v = (e) => (e ? parseFloat(e).toFixed(2) : "0");
          return (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [
              (0, a.jsx)("div", {
                className: ""
                  .concat(l.header, " py-4 px-4 sm:px-6 mb-6 border-b ")
                  .concat(l.border),
                children: (0, a.jsx)("div", {
                  className: "max-w-7xl mx-auto",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                    children: [
                      (0, a.jsx)("h1", {
                        className: "text-xl sm:text-2xl font-bold ".concat(
                          l.text
                        ),
                        children: "Dashboard",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center ".concat(
                          s ? "bg-[#1A1825]" : "bg-gray-100",
                          " rounded-lg px-3 py-2 gap-3"
                        ),
                        children: [
                          (0, a.jsx)(n.OZg, { className: "text-purple-500" }),
                          (0, a.jsx)("span", {
                            className: l.text,
                            children: x(r),
                          }),
                          (0, a.jsx)("button", {
                            onClick: f,
                            className: ""
                              .concat(l.textSecondary, " hover:")
                              .concat(l.text, " transition-colors"),
                            title: "Copy to clipboard",
                            children: h
                              ? (0, a.jsx)(n.l_A, {
                                  className: "text-green-500",
                                })
                              : (0, a.jsx)(n.esY, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8",
                children: [
                  (0, a.jsxs)("div", {
                    className: "rounded-xl p-6 "
                      .concat(l.card, " ")
                      .concat(l.shadow),
                    children: [
                      (0, a.jsx)("div", {
                        className: "mb-4",
                        children: (0, a.jsx)("div", {
                          className:
                            "w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200",
                          children: (0, a.jsx)(n.NMh, {
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                      }),
                      (0, a.jsxs)("h2", {
                        className: "text-2xl font-bold mb-2 ".concat(l.text),
                        children: [
                          null == i ? void 0 : i.fsxBalance,
                          " ",
                          "FSX",
                        ],
                      }),
                      (0, a.jsxs)("p", {
                        className: "text-sm mb-4 ".concat(l.textSecondary),
                        children: [
                          "Estimated USD valuation: $",
                          (null == i ? void 0 : i.fsxBalance) && M
                            ? (Number(i.fsxBalance) * Number(M)).toFixed(2)
                            : "0.00",
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: l.textSecondary,
                        children: "Token Available For Sale",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "rounded-xl p-6 "
                      .concat(l.card, " ")
                      .concat(l.shadow),
                    children: [
                      (0, a.jsx)("div", {
                        className: "mb-4",
                        children: (0, a.jsx)("div", {
                          className:
                            "w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200",
                          children: (0, a.jsx)(n.vAr, {
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                      }),
                      (0, a.jsxs)("h2", {
                        className: "text-2xl font-bold mb-2 ".concat(l.text),
                        children: [
                          ((e) => {
                            if (!e) return "0";
                            let s = Number(e);
                            return s >= 1e9
                              ? (s / 1e9).toFixed(2) + " B"
                              : s >= 1e6
                              ? (s / 1e6).toFixed(2) + " M"
                              : s >= 1e3
                              ? (s / 1e3).toFixed(2) + " K"
                              : s.toFixed(2);
                          })(null == i ? void 0 : i.fsxSupply),
                          " ",
                          "FSX",
                        ],
                      }),
                      (0, a.jsxs)("p", {
                        className: "text-sm mb-4 ".concat(l.textSecondary),
                        children: [
                          "Estimated USD valuation: $",
                          (null == i ? void 0 : i.fsxSupply) && M
                            ? (
                                Number(null == i ? void 0 : i.fsxSupply) *
                                Number(M)
                              ).toFixed(2)
                            : "0.00",
                        ],
                      }),
                      (0, a.jsxs)("p", {
                        className: l.textSecondary,
                        children: ["Total ", "FSX", " Token Supply"],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "rounded-xl p-6 "
                      .concat(l.card, " ")
                      .concat(l.shadow),
                    children: [
                      (0, a.jsx)("div", {
                        className: "mb-4",
                        children: (0, a.jsx)("div", {
                          className:
                            "w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200",
                          children: (0, a.jsx)(n.RcD, {
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "flex justify-between",
                        children: (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("h2", {
                              className: "text-2xl font-bold mb-2 ".concat(
                                l.text
                              ),
                              children: "FSX",
                            }),
                            (0, a.jsxs)("p", {
                              className: "text-sm mb-4 ".concat(
                                l.textSecondary
                              ),
                              children: ["Current Price: $", M],
                            }),
                            (0, a.jsxs)("p", {
                              className: l.textSecondary,
                              children: [
                                "Total Raised $",
                                parseFloat(
                                  (null == m ? void 0 : m.totalSold) || 0
                                ) *
                                  parseFloat(M || 0) >
                                0
                                  ? (
                                      parseFloat(
                                        (null == m ? void 0 : m.totalSold) || 0
                                      ) * parseFloat(M || 0)
                                    ).toFixed(2)
                                  : "0",
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                  (0, a.jsx)("div", {
                    onClick: () => t("Token Sale"),
                    className: "rounded-xl p-4 md:p-6 "
                      .concat(l.card, " ")
                      .concat(l.shadow),
                    children: (0, a.jsxs)("div", {
                      className: "flex flex-col sm:flex-row items-center gap-4",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center shrink-0",
                          children: (0, a.jsx)(n.Xfy, {
                            className: "w-8 h-8 md:w-10 md:h-10 text-white",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "text-center sm:text-left",
                          children: [
                            (0, a.jsxs)("h3", {
                              className:
                                "text-xl md:text-2xl font-bold ".concat(l.text),
                              children: ["Buy ", "FSX"],
                            }),
                            (0, a.jsxs)("p", {
                              className: l.textSecondary,
                              children: ["Only 1 token for $ ", M],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    onClick: () => t("Token Transfer"),
                    className: "rounded-xl p-4 md:p-6 "
                      .concat(l.card, " ")
                      .concat(l.shadow),
                    children: (0, a.jsxs)("div", {
                      className: "flex flex-col sm:flex-row items-center gap-4",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center shrink-0",
                          children: (0, a.jsx)(j.HZ8, {
                            className: "w-8 h-8 md:w-10 md:h-10 text-white",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "text-center sm:text-left",
                          children: [
                            (0, a.jsx)("h3", {
                              className:
                                "text-xl md:text-2xl font-bold ".concat(l.text),
                              children: "Transfer Token",
                            }),
                            (0, a.jsxs)("p", {
                              className: l.textSecondary,
                              children: ["FUTURESYNCX", " ", "FSX"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "space-y-8 mt-8",
                children: (0, a.jsxs)("div", {
                  className: "rounded-xl overflow-hidden "
                    .concat(l.card, " ")
                    .concat(l.shadow),
                  children: [
                    (0, a.jsx)("div", {
                      className: "p-4 sm:p-6 pb-4",
                      children: (0, a.jsx)("div", {
                        className:
                          "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-purple-500",
                              children: (0, a.jsx)(n.ceS, {
                                className: "w-6 h-6 sm:w-8 sm:h-8",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-xl sm:text-2xl font-semibold ".concat(
                                      l.text
                                    ),
                                  children: "Purchase History",
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    l.textSecondary + " text-xs sm:text-sm",
                                  children: [
                                    "(Showing ",
                                    u.length,
                                    " of ",
                                    u.length,
                                    " ",
                                    "records)",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "block sm:hidden",
                      children:
                        u.length > 0
                          ? u
                              .map((e, t) =>
                                (0, a.jsxs)(
                                  "div",
                                  {
                                    className: "p-4 border-b ".concat(l.border),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex justify-between items-start mb-2",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "text-purple-400 break-all",
                                            children: y(e.user),
                                          }),
                                          (0, a.jsx)("span", {
                                            className:
                                              "px-2 py-1 rounded-full text-xs ".concat(
                                                s
                                                  ? "bg-green-900 text-green-400"
                                                  : "bg-green-100 text-green-600"
                                              ),
                                            children: "Completed",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex justify-between items-center mt-2",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className: l.text + " font-medium",
                                            children: [
                                              v(e.amountOut),
                                              " ",
                                              "FSX",
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className:
                                              l.textSecondary + " text-sm",
                                            children: N(e.timestamp),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                )
                              )
                              .slice(0, 20)
                          : (0, a.jsx)("div", {
                              className: "text-center py-8 ".concat(
                                l.textSecondary
                              ),
                              children: "No transactions found",
                            }),
                    }),
                    (0, a.jsx)("div", {
                      className: "hidden sm:block overflow-x-auto w-full",
                      children: (0, a.jsxs)("table", {
                        className: "w-full min-w-[768px]",
                        children: [
                          (0, a.jsx)("thead", {
                            children: (0, a.jsxs)("tr", {
                              className: "border-b ".concat(l.border),
                              children: [
                                (0, a.jsx)("th", {
                                  className: "text-left p-6 pl-6 ".concat(
                                    l.textSecondary,
                                    " font-normal text-sm whitespace-nowrap"
                                  ),
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)(n.OZg, {
                                        className: "w-4 h-4",
                                      }),
                                      "WALLET",
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("th", {
                                  className: "text-left p-6 ".concat(
                                    l.textSecondary,
                                    " font-normal text-sm whitespace-nowrap"
                                  ),
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)(n.RcD, {
                                        className: "w-4 h-4",
                                      }),
                                      "PAYMENT",
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("th", {
                                  className: "text-left p-6 ".concat(
                                    l.textSecondary,
                                    " font-normal text-sm whitespace-nowrap"
                                  ),
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)(n.RcD, {
                                        className: "w-4 h-4",
                                      }),
                                      "BOUGHT AMOUNT",
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("th", {
                                  className: "text-left p-6 ".concat(
                                    l.textSecondary,
                                    " font-normal text-sm whitespace-nowrap"
                                  ),
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)(n.qyc, {
                                        className: "w-4 h-4",
                                      }),
                                      "TIME & DATE",
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("th", {
                                  className: "text-left p-6 ".concat(
                                    l.textSecondary,
                                    " font-normal text-sm whitespace-nowrap"
                                  ),
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)(n.FJM, {
                                        className: "w-4 h-4",
                                      }),
                                      "STATUS",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("tbody", {
                            children:
                              u.length > 0
                                ? u
                                    .map((e, t) =>
                                      (0, a.jsxs)(
                                        "tr",
                                        {
                                          className: "border-b ".concat(
                                            l.border
                                          ),
                                          children: [
                                            (0, a.jsx)("td", {
                                              className:
                                                "p-6 pl-6 text-purple-400",
                                              children: y(e.user),
                                            }),
                                            (0, a.jsxs)("td", {
                                              className: "p-6 ".concat(l.text),
                                              children: [
                                                null == e ? void 0 : e.amountIn,
                                                " ",
                                                e.tokenIn,
                                              ],
                                            }),
                                            (0, a.jsxs)("td", {
                                              className: "p-6 ".concat(l.text),
                                              children: [
                                                v(e.amountOut),
                                                " ",
                                                "FSX",
                                              ],
                                            }),
                                            (0, a.jsx)("td", {
                                              className: "p-6 ".concat(
                                                l.textSecondary
                                              ),
                                              children: N(e.timestamp),
                                            }),
                                            (0, a.jsx)("td", {
                                              className: "p-6",
                                              children: (0, a.jsx)("span", {
                                                className:
                                                  "px-3 py-1 rounded-full text-sm ".concat(
                                                    s
                                                      ? "bg-green-900 text-green-400"
                                                      : "bg-green-100 text-green-600"
                                                  ),
                                                children: "Completed",
                                              }),
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    )
                                    .slice(0, 20)
                                : (0, a.jsx)("tr", {
                                    children: (0, a.jsx)("td", {
                                      colSpan: "4",
                                      className: "text-center py-12 ".concat(
                                        l.textSecondary
                                      ),
                                      children: "No transactions found",
                                    }),
                                  }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      var X = H;
      let O = (e) => {
        let { onClose: s, isDarkMode: t } = e,
          [l, r] = (0, c.useState)("overview"),
          i = {
            bg: t ? "bg-[#0D0B12]" : "bg-gray-100",
            cardBg: t ? "bg-[#1A1825]" : "bg-white",
            text: t ? "text-white" : "text-gray-900",
            textSecondary: t ? "text-gray-400" : "text-gray-600",
            border: t ? "border-gray-800" : "border-gray-200",
            activeTab: t ? "text-purple-400" : "text-purple-600",
            activeTabBorder: t ? "bg-purple-400" : "bg-purple-600",
            hoverText: t ? "hover:text-gray-300" : "hover:text-gray-700",
          },
          o = {
            overview: (0, a.jsxs)("div", {
              className: "space-y-8",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-2xl font-bold ".concat(i.text, " mb-4"),
                      children: "About the Project",
                    }),
                    (0, a.jsx)("p", {
                      className: i.textSecondary + " leading-relaxed",
                      children:
                        "FutureSyncx is a revolutionary digital commerce ecosystem that seamlessly fuses immersive Virtual Reality, advanced AI, and secure blockchain technology into one dynamic platform. Our mission is to redefine how buyers and sellers interact in a decentralized marketplace by offering an unparalleled user experience, complete transparency, and robust scalability. Join us as we build the future of digital commerce—where innovation meets practicality.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-2xl font-bold ".concat(i.text, " mb-4"),
                      children: "Token Key Features",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "space-y-2 ".concat(i.textSecondary),
                      children: [
                        (0, a.jsx)("li", {
                          children:
                            "• Deflationary tokenomics with regular burns",
                        }),
                        (0, a.jsx)("li", {
                          children: "• Robust staking rewards system",
                        }),
                        (0, a.jsx)("li", {
                          children: "• Transparent on-chain transactions",
                        }),
                        (0, a.jsx)("li", {
                          children:
                            "• Decentralized governance for community control",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "".concat(i.cardBg, " rounded-xl p-6"),
                      children: [
                        (0, a.jsx)("h3", {
                          className: "".concat(i.textSecondary, " mb-2"),
                          children: "Token Name",
                        }),
                        (0, a.jsx)("p", {
                          className: i.text,
                          children: "Future Sync X",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "".concat(i.cardBg, " rounded-xl p-6"),
                      children: [
                        (0, a.jsx)("h3", {
                          className: "".concat(i.textSecondary, " mb-2"),
                          children: "Token Symbol",
                        }),
                        (0, a.jsx)("p", { className: i.text, children: "FSX" }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "".concat(i.cardBg, " rounded-xl p-6"),
                      children: [
                        (0, a.jsx)("h3", {
                          className: "".concat(i.textSecondary, " mb-2"),
                          children: "Total Supply",
                        }),
                        (0, a.jsx)("p", {
                          className: i.text,
                          children: "1.000.000.000 FSX",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "".concat(i.cardBg, " rounded-xl p-6"),
                      children: [
                        (0, a.jsx)("h3", {
                          className: "".concat(i.textSecondary, " mb-2"),
                          children: "Initial Price",
                        }),
                        (0, a.jsx)("p", {
                          className: i.text,
                          children: "$0.0018 USD",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            tokenomics: (0, a.jsx)("div", {
              className: "space-y-8",
              children: (0, a.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-2xl font-bold ".concat(
                          i.text,
                          " mb-6"
                        ),
                        children: "Token Distribution",
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: i.textSecondary,
                                children: "Presale Allocation",
                              }),
                              (0, a.jsx)("span", {
                                className: i.text,
                                children: "35%",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: i.textSecondary,
                                children: "Staking",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-green-400",
                                children: "25%",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: i.textSecondary,
                                children: "Liquidity",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-purple-400",
                                children: "15%",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: i.textSecondary,
                                children: "Marketing & Partnerships",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-yellow-400",
                                children: "10%",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: i.textSecondary,
                                children: "Treasury",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-red-400",
                                children: "10%",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: i.textSecondary,
                                children: "Team",
                              }),
                              (0, a.jsx)("span", {
                                className: "text-orange-400",
                                children: "5%",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-2xl font-bold ".concat(
                          i.text,
                          " mb-6"
                        ),
                        children: "Token Metrics",
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "".concat(i.cardBg, " rounded-xl p-4"),
                            children: [
                              (0, a.jsx)("h3", {
                                className: "".concat(i.textSecondary, " mb-1"),
                                children: "Soft Cap",
                              }),
                              (0, a.jsx)("p", {
                                className: i.text,
                                children: "$5.000.000",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "".concat(i.cardBg, " rounded-xl p-4"),
                            children: [
                              (0, a.jsx)("h3", {
                                className: "".concat(i.textSecondary, " mb-1"),
                                children: "Hard Cap",
                              }),
                              (0, a.jsx)("p", {
                                className: i.text,
                                children: "$20.000.000",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            roadmap: (0, a.jsxs)("div", {
              className: "space-y-12",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h3", {
                      className: "text-xl text-purple-400 mb-4",
                      children: "Phase 1: Q1 2026",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "space-y-2 ".concat(i.textSecondary),
                      children: [
                        (0, a.jsx)("li", {
                          children: "• Strategic Partnerships",
                        }),
                        (0, a.jsx)("li", {
                          children: "• Technical Framework & Prototypes",
                        }),
                        (0, a.jsx)("li", {
                          children: "• Community Growth Initiatives",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h3", {
                      className: "text-xl text-purple-400 mb-4",
                      children: "Phase 2: Q2 2026",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "space-y-2 ".concat(i.textSecondary),
                      children: [
                        (0, a.jsx)("li", { children: "• VR Marketplace Beta" }),
                        (0, a.jsx)("li", {
                          children: "• Seller & Buyer Tools",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h3", {
                      className: "text-xl text-purple-400 mb-4",
                      children: "Phase 3: Q3 2026",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "space-y-2 ".concat(i.textSecondary),
                      children: [
                        (0, a.jsx)("li", {
                          children: "• Full Marketplace Rollout",
                        }),
                        (0, a.jsx)("li", {
                          children: "• Advanced Seller Tools & Analytics",
                        }),
                        (0, a.jsx)("li", {
                          children: "• Community & Social Features",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h3", {
                      className: "text-xl text-purple-400 mb-4",
                      children: "Phase 4: Q4 2026",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "space-y-2 ".concat(i.textSecondary),
                      children: [
                        (0, a.jsx)("li", {
                          children: "• Automated 3D Asset Generation",
                        }),
                        (0, a.jsx)("li", { children: "• AR/VR Integration" }),
                        (0, a.jsx)("li", {
                          children: "• Collaborations & Innovation Grants",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h3", {
                      className: "text-xl text-purple-400 mb-4",
                      children: "Phase 5: Q1 2027",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "space-y-2 ".concat(i.textSecondary),
                      children: [
                        (0, a.jsx)("li", {
                          children: "• DAO-Based Governance",
                        }),
                        (0, a.jsx)("li", {
                          children: "• Ongoing Enhancements & Integrations",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            howToBuy: (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                children: [
                  (0, a.jsxs)("div", {
                    className: "".concat(i.cardBg, " rounded-xl p-6"),
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-4 mb-4",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white",
                            children: "1",
                          }),
                          (0, a.jsx)("h3", {
                            className: "".concat(i.text, " text-lg"),
                            children: "Create a Wallet",
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: i.textSecondary,
                        children:
                          "Download and install MetaMask, Trust Wallet or any other compatible Web3 wallet. Create a new wallet or import your existing one.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "".concat(i.cardBg, " rounded-xl p-6"),
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-4 mb-4",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white",
                            children: "2",
                          }),
                          (0, a.jsx)("h3", {
                            className: "".concat(i.text, " text-lg"),
                            children: "Get ETH",
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: i.textSecondary,
                        children:
                          "Purchase ETH, USDT or USDC from an exchange and transfer it to your wallet address.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "".concat(i.cardBg, " rounded-xl p-6"),
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-4 mb-4",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white",
                            children: "3",
                          }),
                          (0, a.jsx)("h3", {
                            className: "".concat(i.text, " text-lg"),
                            children: "Connect Wallet",
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: i.textSecondary,
                        children:
                          'Visit our presale website and connect your wallet by clicking the "Connect Wallet" button.',
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "".concat(i.cardBg, " rounded-xl p-6"),
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-4 mb-4",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white",
                            children: "4",
                          }),
                          (0, a.jsx)("h3", {
                            className: "".concat(i.text, " text-lg"),
                            children: "Purchase Tokens",
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: i.textSecondary,
                        children:
                          "Enter the amount of ETH, USDT ou USDC you want to invest and confirm the transaction in your wallet.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            security: (0, a.jsxs)("div", {
              className: "space-y-8",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-2xl font-bold ".concat(i.text, " mb-6"),
                      children: "Security Measures",
                    }),
                    (0, a.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "".concat(i.cardBg, " rounded-xl p-6"),
                          children: [
                            (0, a.jsx)("h3", {
                              className: "".concat(i.text, " text-lg mb-2"),
                              children: "Smart Contract Audit",
                            }),
                            (0, a.jsx)("p", {
                              className: i.textSecondary,
                              children:
                                "Our smart contracts have been thoroughly audited by leading blockchain security firms to ensure maximum safety.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "".concat(i.cardBg, " rounded-xl p-6"),
                          children: [
                            (0, a.jsx)("h3", {
                              className: "".concat(i.text, " text-lg mb-2"),
                              children: "Locked Liquidity",
                            }),
                            (0, a.jsx)("p", {
                              className: i.textSecondary,
                              children:
                                "Liquidity will be locked for 2 years to ensure long-term stability and prevent rug pulls.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "".concat(i.cardBg, " rounded-xl p-6"),
                          children: [
                            (0, a.jsx)("h3", {
                              className: "".concat(i.text, " text-lg mb-2"),
                              children: "KYC Verification",
                            }),
                            (0, a.jsx)("p", {
                              className: i.textSecondary,
                              children:
                                "Team has completed KYC verification with a reputable third-party provider.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "".concat(i.cardBg, " rounded-xl p-6"),
                          children: [
                            (0, a.jsx)("h3", {
                              className: "".concat(i.text, " text-lg mb-2"),
                              children: "Anti-Whale Measures",
                            }),
                            (0, a.jsx)("p", {
                              className: i.textSecondary,
                              children:
                                "Maximum transaction and wallet holding limits to prevent market manipulation.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-2xl font-bold ".concat(i.text, " mb-6"),
                      children: "Additional Security Features",
                    }),
                    (0, a.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-4",
                          children: [
                            (0, a.jsx)(n.bri, {
                              className: "text-purple-400 w-6 h-6",
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "".concat(i.text, " text-lg"),
                                  children: "Multi-Signature Wallet",
                                }),
                                (0, a.jsx)("p", {
                                  className: i.textSecondary,
                                  children:
                                    "All team wallets and major protocol functions require multi-sig authorization.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-4",
                          children: [
                            (0, a.jsx)(n.kUi, {
                              className: "text-purple-400 w-6 h-6",
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "".concat(i.text, " text-lg"),
                                  children: "Vesting Schedule",
                                }),
                                (0, a.jsx)("p", {
                                  className: i.textSecondary,
                                  children:
                                    "Team tokens are locked with a transparent vesting schedule.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-4",
                          children: [
                            (0, a.jsx)(n.bri, {
                              className: "text-purple-400 w-6 h-6",
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "".concat(i.text, " text-lg"),
                                  children: "Emergency Pause",
                                }),
                                (0, a.jsx)("p", {
                                  className: i.textSecondary,
                                  children:
                                    "Smart contract includes emergency pause functionality for additional security.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: "min-h-screen ".concat(i.bg, " ").concat(i.text, " "),
            children: (0, a.jsxs)("div", {
              className: "",
              children: [
                (0, a.jsx)("div", { className: "text-center mb-8" }),
                (0, a.jsx)("div", {
                  className: "flex border-b ".concat(
                    i.border,
                    " mb-8 overflow-x-auto"
                  ),
                  children: [
                    { id: "overview", label: "Overview" },
                    { id: "tokenomics", label: "Tokenomics" },
                    { id: "roadmap", label: "Roadmap" },
                    { id: "howToBuy", label: "How to Buy" },
                    { id: "security", label: "Security" },
                  ].map((e) =>
                    (0, a.jsxs)(
                      "button",
                      {
                        onClick: () => r(e.id),
                        className:
                          "pb-4 px-3 whitespace-nowrap relative ".concat(
                            l === e.id
                              ? i.activeTab
                              : i.textSecondary + " " + i.hoverText,
                            " text-sm md:text-base"
                          ),
                        children: [
                          e.label,
                          l === e.id &&
                            (0, a.jsx)("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 h-0.5 ".concat(
                                  i.activeTabBorder
                                ),
                            }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
                (0, a.jsx)("div", { className: "py-6", children: o[l] }),
              ],
            }),
          }),
        });
      };
      var Y = O;
      let R = (e) => {
        let { isDarkMode: s } = e,
          {
            provider: t,
            signer: l,
            contract: r,
            account: i,
            chainId: o,
            isConnected: d,
            isConnecting: x,
            contractInfo: m,
            tokenBalances: h,
            error: p,
            buyWithETH: u,
            buyWithUSDT: g,
            buyWithUSDC: j,
            updateTokenPrice: f,
            updateUSDT: N,
            updateUSDC: y,
            setSaleToken: v,
            setBlockStatus: w,
            withdrawTokens: S,
            getUserTransactions: k,
            getAllTransactions: T,
            formatAddress: B,
            formatTokenAmount: C,
            refreshContractData: F,
            isOwner: A,
          } = (0, b.$6)(),
          [D, U] = (0, c.useState)([]),
          [E, P] = (0, c.useState)(!1);
        (0, c.useEffect)(() => {
          let e = async () => {
            if (i) {
              let e = await T();
              U(e.reverse());
            }
          };
          e();
        }, [i]);
        let M = () => {
            navigator.clipboard
              .writeText(i)
              .then(() => {
                P(!0), setTimeout(() => P(!1), 2e3);
              })
              .catch((e) => {
                console.error("Failed to copy address:", e);
              });
          },
          H = (e) => {
            if (!e) return "";
            let s = new Date(e),
              t = s.getFullYear(),
              a = String(s.getMonth() + 1).padStart(2, "0"),
              c = String(s.getDate()).padStart(2, "0"),
              n = String(s.getHours()).padStart(2, "0"),
              l = String(s.getMinutes()).padStart(2, "0"),
              r = String(s.getSeconds()).padStart(2, "0");
            return ""
              .concat(t, "-")
              .concat(a, "-")
              .concat(c, " ")
              .concat(n, ":")
              .concat(l, ":")
              .concat(r);
          },
          X = (e) =>
            e ? "".concat(e.slice(0, 6), "...").concat(e.slice(-4)) : "",
          O = (e) => (e ? parseFloat(e).toFixed(2) : "0"),
          Y = {
            bg: s ? "bg-[#0D0B12]" : "bg-gray-100",
            header: s ? "bg-[#12101A]" : "bg-white",
            card: s ? "bg-[#12101A]" : "bg-white",
            text: s ? "text-white" : "text-gray-900",
            textSecondary: s ? "text-gray-400" : "text-gray-500",
            border: s ? "border-gray-800" : "border-gray-200",
            divide: s ? "divide-gray-800" : "divide-gray-200",
            shadow: s ? "" : "shadow-lg",
          };
        return (0, a.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [
            (0, a.jsx)("div", {
              className: ""
                .concat(Y.header, " py-4 px-4 sm:px-6 mb-6 border-b ")
                .concat(Y.border),
              children: (0, a.jsx)("div", {
                className: "max-w-7xl mx-auto",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                  children: [
                    (0, a.jsx)("h1", {
                      className: "text-xl sm:text-2xl font-bold ".concat(
                        Y.text
                      ),
                      children: "Transaction",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center ".concat(
                        s ? "bg-[#1A1825]" : "bg-gray-100",
                        " rounded-lg px-3 py-2 gap-3"
                      ),
                      children: [
                        (0, a.jsx)(n.OZg, { className: "text-purple-500" }),
                        (0, a.jsx)("span", {
                          className: Y.text,
                          children: B(i),
                        }),
                        (0, a.jsx)("button", {
                          onClick: M,
                          className: ""
                            .concat(Y.textSecondary, " hover:")
                            .concat(Y.text, " transition-colors"),
                          title: "Copy to clipboard",
                          children: E
                            ? (0, a.jsx)(n.l_A, { className: "text-green-500" })
                            : (0, a.jsx)(n.esY, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: "rounded-xl overflow-hidden "
                .concat(Y.card, " ")
                .concat(Y.shadow),
              children: [
                (0, a.jsx)("div", {
                  className: "p-4 sm:p-6 pb-4",
                  children: (0, a.jsx)("div", {
                    className:
                      "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2",
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-purple-500",
                          children: (0, a.jsx)(n.ceS, {
                            className: "w-6 h-6 sm:w-8 sm:h-8",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("h3", {
                              className:
                                "text-xl sm:text-2xl font-semibold ".concat(
                                  Y.text
                                ),
                              children: "Purchase History",
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                Y.textSecondary + " text-xs sm:text-sm",
                              children: [
                                "(Showing ",
                                D.length,
                                " of ",
                                D.length,
                                " ",
                                "records)",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "block sm:hidden",
                  children:
                    D.length > 0
                      ? D.map((e, t) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              className: "p-4 border-b ".concat(Y.border),
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex justify-between items-start mb-2",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "text-purple-400 break-all",
                                      children: X(e.user),
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "px-2 py-1 rounded-full text-xs ".concat(
                                          s
                                            ? "bg-green-900 text-green-400"
                                            : "bg-green-100 text-green-600"
                                        ),
                                      children: "Completed",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex justify-between items-center mt-2",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: Y.text + " font-medium",
                                      children: [O(e.amountOut), " ", "FSX"],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: Y.textSecondary + " text-sm",
                                      children: H(e.timestamp),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ).slice(0, 20)
                      : (0, a.jsx)("div", {
                          className: "text-center py-8 ".concat(
                            Y.textSecondary
                          ),
                          children: "No transactions found",
                        }),
                }),
                (0, a.jsx)("div", {
                  className: "hidden sm:block overflow-x-auto w-full",
                  children: (0, a.jsxs)("table", {
                    className: "w-full min-w-[768px]",
                    children: [
                      (0, a.jsx)("thead", {
                        children: (0, a.jsxs)("tr", {
                          className: "border-b ".concat(Y.border),
                          children: [
                            (0, a.jsx)("th", {
                              className: "text-left p-6 pl-6 ".concat(
                                Y.textSecondary,
                                " font-normal text-sm whitespace-nowrap"
                              ),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)(n.OZg, { className: "w-4 h-4" }),
                                  "WALLET",
                                ],
                              }),
                            }),
                            (0, a.jsx)("th", {
                              className: "text-left p-6 ".concat(
                                Y.textSecondary,
                                " font-normal text-sm whitespace-nowrap"
                              ),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)(n.RcD, { className: "w-4 h-4" }),
                                  "PAYMENT",
                                ],
                              }),
                            }),
                            (0, a.jsx)("th", {
                              className: "text-left p-6 ".concat(
                                Y.textSecondary,
                                " font-normal text-sm whitespace-nowrap"
                              ),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)(n.RcD, { className: "w-4 h-4" }),
                                  "BOUGHT AMOUNT",
                                ],
                              }),
                            }),
                            (0, a.jsx)("th", {
                              className: "text-left p-6 ".concat(
                                Y.textSecondary,
                                " font-normal text-sm whitespace-nowrap"
                              ),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)(n.qyc, { className: "w-4 h-4" }),
                                  "TIME & DATE",
                                ],
                              }),
                            }),
                            (0, a.jsx)("th", {
                              className: "text-left p-6 ".concat(
                                Y.textSecondary,
                                " font-normal text-sm whitespace-nowrap"
                              ),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)(n.FJM, { className: "w-4 h-4" }),
                                  "STATUS",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("tbody", {
                        children:
                          D.length > 0
                            ? D.map((e, t) =>
                                (0, a.jsxs)(
                                  "tr",
                                  {
                                    className: "border-b ".concat(Y.border),
                                    children: [
                                      (0, a.jsx)("td", {
                                        className: "p-6 pl-6 text-purple-400",
                                        children: X(e.user),
                                      }),
                                      (0, a.jsxs)("td", {
                                        className: "p-6 ".concat(Y.text),
                                        children: [
                                          null == e ? void 0 : e.amountIn,
                                          " ",
                                          e.tokenIn,
                                        ],
                                      }),
                                      (0, a.jsxs)("td", {
                                        className: "p-6 ".concat(Y.text),
                                        children: [O(e.amountOut), " ", "FSX"],
                                      }),
                                      (0, a.jsx)("td", {
                                        className: "p-6 ".concat(
                                          Y.textSecondary
                                        ),
                                        children: H(e.timestamp),
                                      }),
                                      (0, a.jsx)("td", {
                                        className: "p-6",
                                        children: (0, a.jsx)("span", {
                                          className:
                                            "px-3 py-1 rounded-full text-sm ".concat(
                                              s
                                                ? "bg-green-900 text-green-400"
                                                : "bg-green-100 text-green-600"
                                            ),
                                          children: "Completed",
                                        }),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ).slice(0, 20)
                            : (0, a.jsx)("tr", {
                                children: (0, a.jsx)("td", {
                                  colSpan: "4",
                                  className: "text-center py-12 ".concat(
                                    Y.textSecondary
                                  ),
                                  children: "No transactions found",
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var I = R;
      let W = (e) => {
        let { isDarkMode: s } = e,
          {
            provider: t,
            signer: l,
            contract: r,
            account: i,
            chainId: o,
            isConnected: d,
            isConnecting: x,
            contractInfo: m,
            tokenBalances: h,
            error: p,
            connectWallet: u,
            disconnectWallet: j,
            switchNetwork: f,
            buyWithETH: N,
            buyWithUSDT: y,
            buyWithUSDC: v,
            updateTokenPrice: S,
            updateUSDT: k,
            updateUSDC: T,
            setSaleToken: B,
            setBlockStatus: C,
            withdrawTokens: F,
            getUserTransactions: A,
            getAllTransactions: D,
            formatAddress: U,
            formatTokenAmount: E,
            refreshContractData: P,
            isOwner: M,
            updateBaseAPY: H,
            updateMinStakeAmount: X,
          } = (0, b.$6)(),
          O = {
            cardBg: s ? "bg-[#12101A]" : "bg-white",
            footerBg: s ? "bg-[#0D0B12]" : "bg-gray-50",
            inputBg: s ? "bg-[#1A1825]" : "bg-gray-100",
            warningBg: s ? "bg-[#1A1825]" : "bg-yellow-50",
            warningText: s ? "text-yellow-400" : "text-yellow-600",
            text: s ? "text-white" : "text-gray-900",
            textSecondary: s ? "text-gray-400" : "text-gray-600",
            border: s ? "border-gray-800" : "border-gray-200",
            tabHover: s
              ? "hover:bg-purple-900/10 hover:text-gray-300"
              : "hover:bg-purple-50 hover:text-gray-700",
            fieldTitle: s ? "text-purple-400" : "text-purple-600",
            checkboxBg: s ? "bg-[#1A1825]" : "bg-gray-100",
          },
          [Y, R] = (0, c.useState)("priceSettings"),
          [I, W] = (0, c.useState)(""),
          [L, $] = (0, c.useState)(""),
          [q, _] = (0, c.useState)(""),
          [V, Z] = (0, c.useState)(""),
          [K, z] = (0, c.useState)(""),
          [J, G] = (0, c.useState)(""),
          [Q, ee] = (0, c.useState)(""),
          [es, et] = (0, c.useState)(""),
          [ea, ec] = (0, c.useState)(!1),
          [en, el] = (0, c.useState)(""),
          [er, ei] = (0, c.useState)(""),
          [eo, ed] = (0, c.useState)(""),
          [ex, em] = (0, c.useState)(!1),
          [eh, ep] = (0, c.useState)(""),
          [eu, eg] = (0, c.useState)(""),
          ej = (e) => /^0x[0-9a-fA-F]{40}$/i.test(e),
          eb = async (e, s) => {
            e.preventDefault(), ei(""), el(""), ed("");
            try {
              if ("updateTokenPrice" === s) {
                em(!0);
                let e = await S(L);
                console.log(e),
                  ed(null == e ? void 0 : e.blockHash),
                  el(
                    "Successfully transferred "
                      .concat(L, " Token ETH Price set to ")
                      .concat(U(null == e ? void 0 : e.to))
                  ),
                  em(!1);
              } else if ("setSaleToken" === s) {
                em(!0);
                let e = await B(Q);
                console.log(e),
                  ed(null == e ? void 0 : e.blockHash),
                  el(
                    "Successfully  "
                      .concat(U(Q), " Sale Token Set to ")
                      .concat(U(null == e ? void 0 : e.to))
                  ),
                  em(!1);
              } else if ("updateUSDT" === s) {
                em(!0);
                let e = await k(q, V);
                console.log(e),
                  ed(null == e ? void 0 : e.blockHash),
                  el(
                    "Successfully USDT  "
                      .concat(U(q), " Token Set to ")
                      .concat(U(null == e ? void 0 : e.to))
                  ),
                  em(!1);
              } else if ("updateUSDC" === s) {
                em(!0);
                let e = await T(K, J);
                console.log(e),
                  ed(null == e ? void 0 : e.blockHash),
                  el(
                    "Successfully USDC  "
                      .concat(U(K), " Token Set to ")
                      .concat(U(null == e ? void 0 : e.to))
                  ),
                  em(!1);
              } else if ("setBlockStatus" === s) {
                em(!0);
                let e = es.trim();
                if (!ej(e)) {
                  el("Please enter a valid Ethereum address");
                  return;
                }
                let s = await C(e, ea);
                console.log(s),
                  ed(null == s ? void 0 : s.blockHash),
                  el(
                    "Successfully Blocked  "
                      .concat(U(K), " Address to ")
                      .concat(U(null == s ? void 0 : s.to))
                  ),
                  em(!1);
              } else if ("updateBaseAPY" === s) {
                em(!0);
                let e = await H(eh);
                console.log(e),
                  ed(null == e ? void 0 : e.transactionHash),
                  el(
                    "Successfully updated "
                      .concat(eh, "  ")
                      .concat(U(null == e ? void 0 : e.to))
                  ),
                  em(!1);
              } else if ("updateMinStakeAmount" === s) {
                em(!0);
                let e = await X(eu);
                console.log(e),
                  ed(null == e ? void 0 : e.transactionHash),
                  el(
                    "Successfully updated "
                      .concat(eu, "  ")
                      .concat(U(null == e ? void 0 : e.to))
                  ),
                  em(!1);
              }
            } catch (e) {
              console.log(e);
            }
          },
          ef = () => {
            W(""),
              $(""),
              _(""),
              Z(""),
              z(""),
              G(""),
              ei(""),
              el(""),
              ed(""),
              em(!1),
              ec(!1),
              ee(""),
              et(" ");
          },
          eN = [
            {
              id: "priceSettings",
              label: "Price Settings",
              icon: (0, a.jsx)(n.RcD, {}),
            },
            {
              id: "tokenConfig",
              label: "Token Config",
              icon: (0, a.jsx)(n.vAr, {}),
            },
            {
              id: "stablecoins",
              label: "Stablecoins",
              icon: (0, a.jsx)(n.qau, {}),
            },
            {
              id: "accessControl",
              label: "Access Control",
              icon: (0, a.jsx)(n.YS4, {}),
            },
            {
              id: "stakingControl",
              label: "Staking Control",
              icon: (0, a.jsx)(g.dY3, {}),
            },
          ];
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: ""
              .concat(O.cardBg, " ")
              .concat(O.text, " rounded-xl shadow-lg overflow-hidden"),
            children: [
              (0, a.jsx)("div", {
                className: "flex flex-wrap sm:flex-nowrap border-b ".concat(
                  O.border
                ),
                children: eN.map((e) =>
                  (0, a.jsxs)(
                    "button",
                    {
                      onClick: () => (R(e.id), ef()),
                      className:
                        "flex items-center gap-2 px-4 py-3 flex-grow sm:flex-grow-0 transition-colors ".concat(
                          Y === e.id
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                            : "".concat(O.textSecondary, " ").concat(O.tabHover)
                        ),
                      children: [
                        e.icon,
                        (0, a.jsx)("span", {
                          className: "hidden sm:inline",
                          children: e.label,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              (0, a.jsxs)("div", {
                className: "p-6",
                children: [
                  "priceSettings" === Y &&
                    (0, a.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-xl font-bold border-b ".concat(
                            O.border,
                            " pb-2"
                          ),
                          children: "Price Settings",
                        }),
                        er &&
                          (0, a.jsx)(w, { errorMessage: er, isDarkMode: s }),
                        en &&
                          (0, a.jsx)(w, {
                            successMessage: en,
                            transactionHash: eo,
                            isDarkMode: s,
                          }),
                        (0, a.jsxs)("form", {
                          onSubmit: (e) => eb(e, "updateTokenPrice"),
                          className: "space-y-4",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                O.fieldTitle
                              ),
                              children: "Update Token Price",
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, a.jsx)("label", {
                                  className: "block ".concat(O.textSecondary),
                                  children: "New Price (in ETH)",
                                }),
                                (0, a.jsx)("input", {
                                  type: "text",
                                  value: L,
                                  onChange: (e) => $(e.target.value),
                                  placeholder: "0.0",
                                  className: "w-full "
                                    .concat(O.inputBg, " rounded-lg p-3 ")
                                    .concat(
                                      O.text,
                                      " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    ),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, a.jsx)("button", {
                              type: "submit",
                              disabled: ex || !L,
                              className:
                                "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 transition-colors font-medium py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                              children: ex
                                ? "Processing..."
                                : "Update Token Price",
                            }),
                          ],
                        }),
                      ],
                    }),
                  "tokenConfig" === Y &&
                    (0, a.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-xl font-bold border-b ".concat(
                            O.border,
                            " pb-2"
                          ),
                          children: "Token Configuration",
                        }),
                        er &&
                          (0, a.jsx)(w, { errorMessage: er, isDarkMode: s }),
                        en &&
                          (0, a.jsx)(w, {
                            successMessage: en,
                            transactionHash: eo,
                            isDarkMode: s,
                          }),
                        (0, a.jsxs)("form", {
                          onSubmit: (e) => eb(e, "setSaleToken"),
                          className: "space-y-4",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                O.fieldTitle
                              ),
                              children: "Set Sale Token",
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, a.jsx)("label", {
                                  className: "block ".concat(O.textSecondary),
                                  children: "Token Address",
                                }),
                                (0, a.jsx)("input", {
                                  type: "text",
                                  value: Q,
                                  onChange: (e) => ee(e.target.value),
                                  placeholder: "0x...",
                                  className: "w-full "
                                    .concat(O.inputBg, " rounded-lg p-3 ")
                                    .concat(
                                      O.text,
                                      " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    ),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, a.jsx)("button", {
                              type: "submit",
                              disabled: ex || !Q,
                              className:
                                "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 transition-colors font-medium py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                              children: ex ? "Processing..." : "Set Sale Token",
                            }),
                          ],
                        }),
                      ],
                    }),
                  "stablecoins" === Y &&
                    (0, a.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-xl font-bold border-b ".concat(
                            O.border,
                            " pb-2"
                          ),
                          children: "Stablecoin Settings",
                        }),
                        er &&
                          (0, a.jsx)(w, { errorMessage: er, isDarkMode: s }),
                        en &&
                          (0, a.jsx)(w, {
                            successMessage: en,
                            transactionHash: eo,
                            isDarkMode: s,
                          }),
                        (0, a.jsxs)("form", {
                          onSubmit: (e) => eb(e, "updateUSDT"),
                          className: "space-y-4",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                O.fieldTitle
                              ),
                              children: "Update USDT",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, a.jsx)("label", {
                                      className: "block ".concat(
                                        O.textSecondary
                                      ),
                                      children: "USDT Address",
                                    }),
                                    (0, a.jsx)("input", {
                                      type: "text",
                                      value: q,
                                      onChange: (e) => _(e.target.value),
                                      placeholder: "0x...",
                                      className: "w-full "
                                        .concat(O.inputBg, " rounded-lg p-3 ")
                                        .concat(
                                          O.text,
                                          " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        ),
                                      required: !0,
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, a.jsx)("label", {
                                      className: "block ".concat(
                                        O.textSecondary
                                      ),
                                      children: "USDT Ratio",
                                    }),
                                    (0, a.jsx)("input", {
                                      type: "text",
                                      value: V,
                                      onChange: (e) => Z(e.target.value),
                                      placeholder: "0.0",
                                      className: "w-full "
                                        .concat(O.inputBg, " rounded-lg p-3 ")
                                        .concat(
                                          O.text,
                                          " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        ),
                                      required: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("button", {
                              type: "submit",
                              disabled: ex || !V || !q,
                              className:
                                "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 transition-colors font-medium py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                              children: ex ? "Processing..." : "Update USDT",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("form", {
                          onSubmit: (e) => eb(e, "updateUSDC"),
                          className: "space-y-4",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                O.fieldTitle
                              ),
                              children: "Update USDC",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, a.jsx)("label", {
                                      className: "block ".concat(
                                        O.textSecondary
                                      ),
                                      children: "USDC Address",
                                    }),
                                    (0, a.jsx)("input", {
                                      type: "text",
                                      value: K,
                                      onChange: (e) => z(e.target.value),
                                      placeholder: "0x...",
                                      className: "w-full "
                                        .concat(O.inputBg, " rounded-lg p-3 ")
                                        .concat(
                                          O.text,
                                          " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        ),
                                      required: !0,
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, a.jsx)("label", {
                                      className: "block ".concat(
                                        O.textSecondary
                                      ),
                                      children: "USDC Ratio",
                                    }),
                                    (0, a.jsx)("input", {
                                      type: "text",
                                      value: J,
                                      onChange: (e) => G(e.target.value),
                                      placeholder: "0.0",
                                      className: "w-full "
                                        .concat(O.inputBg, " rounded-lg p-3 ")
                                        .concat(
                                          O.text,
                                          " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        ),
                                      required: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("button", {
                              type: "submit",
                              disabled: ex || !J || !K,
                              className:
                                "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 transition-colors font-medium py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                              children: ex ? "Processing..." : "Update USDC",
                            }),
                          ],
                        }),
                      ],
                    }),
                  "accessControl" === Y &&
                    (0, a.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-xl font-bold border-b ".concat(
                            O.border,
                            " pb-2"
                          ),
                          children: "Access Control",
                        }),
                        er &&
                          (0, a.jsx)(w, { errorMessage: er, isDarkMode: s }),
                        en &&
                          (0, a.jsx)(w, {
                            successMessage: en,
                            transactionHash: eo,
                            isDarkMode: s,
                          }),
                        (0, a.jsxs)("form", {
                          onSubmit: (e) => eb(e, "setBlockStatus"),
                          className: "space-y-4",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                O.fieldTitle
                              ),
                              children: "Address Block Status",
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, a.jsx)("label", {
                                  className: "block ".concat(O.textSecondary),
                                  children: "User Address",
                                }),
                                (0, a.jsx)("input", {
                                  type: "text",
                                  value: es,
                                  onChange: (e) => et(e.target.value),
                                  placeholder: "0x...",
                                  className: "w-full "
                                    .concat(O.inputBg, " rounded-lg p-3 ")
                                    .concat(
                                      O.text,
                                      " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    ),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "space-y-2",
                              children: (0, a.jsxs)("label", {
                                className: "flex items-center ".concat(
                                  O.textSecondary
                                ),
                                children: [
                                  (0, a.jsx)("input", {
                                    type: "checkbox",
                                    checked: ea,
                                    onChange: (e) => ec(e.target.checked),
                                    className: "mr-2 h-5 w-5 rounded "
                                      .concat(
                                        O.checkboxBg,
                                        " text-purple-600 focus:ring-purple-600 "
                                      )
                                      .concat(
                                        s
                                          ? "focus:ring-offset-gray-900"
                                          : "focus:ring-offset-white"
                                      ),
                                  }),
                                  "Block this address",
                                ],
                              }),
                            }),
                            (0, a.jsx)("button", {
                              type: "submit",
                              disabled: ex || !es,
                              className:
                                "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 transition-colors font-medium py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                              children: ex
                                ? "Processing..."
                                : "Set Block Status",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "mt-8 p-4 ".concat(
                            O.warningBg,
                            " rounded-lg"
                          ),
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                O.warningText,
                                " mb-2"
                              ),
                              children: "Warning",
                            }),
                            (0, a.jsx)("p", {
                              className: O.textSecondary,
                              children:
                                "Blocking addresses will prevent users from participating in token sales. This action should be used cautiously for compliance or security reasons only.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  "stakingControl" === Y &&
                    (0, a.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-xl font-bold border-b ".concat(
                            O.border,
                            " pb-2"
                          ),
                          children: "Staking Control",
                        }),
                        er &&
                          (0, a.jsx)(w, { errorMessage: er, isDarkMode: s }),
                        en &&
                          (0, a.jsx)(w, {
                            successMessage: en,
                            transactionHash: eo,
                            isDarkMode: s,
                          }),
                        (0, a.jsxs)("form", {
                          onSubmit: (e) => eb(e, "updateBaseAPY"),
                          className: "space-y-4",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                O.fieldTitle
                              ),
                              children: "Update BaseAPY",
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, a.jsx)("label", {
                                  className: "block ".concat(O.textSecondary),
                                  children: "New BaseAPY (in %)",
                                }),
                                (0, a.jsx)("input", {
                                  type: "text",
                                  value: eh,
                                  onChange: (e) => ep(e.target.value),
                                  placeholder: "0.0",
                                  className: "w-full "
                                    .concat(O.inputBg, " rounded-lg p-3 ")
                                    .concat(
                                      O.text,
                                      " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    ),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, a.jsx)("button", {
                              type: "submit",
                              disabled: ex || !eh,
                              className:
                                "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 transition-colors font-medium py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                              children: ex
                                ? "Processing..."
                                : "Update Base APY",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("form", {
                          onSubmit: (e) => eb(e, "updateMinStakeAmount"),
                          className: "space-y-4",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                O.fieldTitle
                              ),
                              children: "Update Min Stake Amount",
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, a.jsx)("label", {
                                  className: "block ".concat(O.textSecondary),
                                  children: "Quantity",
                                }),
                                (0, a.jsx)("input", {
                                  type: "text",
                                  value: eu,
                                  onChange: (e) => eg(e.target.value),
                                  placeholder: "0.0",
                                  className: "w-full "
                                    .concat(O.inputBg, " rounded-lg p-3 ")
                                    .concat(
                                      O.text,
                                      " focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    ),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, a.jsx)("button", {
                              type: "submit",
                              disabled: ex || !eu,
                              className:
                                "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg py-3 transition-colors font-medium py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed",
                              children: ex
                                ? "Processing..."
                                : "Update Min Stake",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: ""
                  .concat(
                    O.footerBg,
                    " px-6 py-4 flex items-center justify-between border-t "
                  )
                  .concat(O.border),
                children: [
                  (0, a.jsxs)("div", {
                    className: "".concat(O.textSecondary, " text-sm"),
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "inline-block w-2 h-2 rounded-full bg-green-500 mr-2",
                      }),
                      "Connected as Admin",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "".concat(O.textSecondary, " text-sm"),
                    children: ["Last update: ", new Date().toLocaleString()],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var L = W,
        $ = t(39715);
      let q = "0.0018",
        _ = (e) => {
          let { isDarkMode: s } = e,
            {
              account: t,
              isConnected: l,
              isConnecting: r,
              contractInfo: i,
              tokenBalances: o,
              error: d,
              connectWallet: x,
              disconnectWallet: m,
              switchNetwork: h,
              buyWithETH: p,
              buyWithUSDT: u,
              buyWithUSDC: g,
              updateTokenPrice: j,
              updateUSDT: f,
              updateUSDC: N,
              setSaleToken: y,
              setBlockStatus: v,
              withdrawTokens: w,
              getUserTransactions: k,
              getAllTransactions: T,
              formatAddress: B,
              formatTokenAmount: C,
              refreshContractData: F,
              isOwner: A,
              reCall: D,
            } = (0, b.$6)(),
            [U, E] = (0, c.useState)([]),
            [P, M] = (0, c.useState)("buyWithETH"),
            [H, X] = (0, c.useState)(""),
            [O, Y] = (0, c.useState)(""),
            [R, I] = (0, c.useState)(""),
            [W, L] = (0, c.useState)("0"),
            [_, V] = (0, c.useState)(!1),
            [Z, K] = (0, c.useState)(!1),
            [z, J] = (0, c.useState)(0),
            G = {
              bg: s ? "bg-[#12101A]" : "bg-white",
              inputBg: s ? "bg-[#1A1825]" : "bg-gray-100",
              text: s ? "text-white" : "text-gray-900",
              textSecondary: s ? "text-gray-400" : "text-gray-600",
              textMuted: "text-gray-500",
              border: s ? "border-gray-800" : "border-gray-200",
              hover: s ? "hover:bg-gray-800" : "hover:bg-gray-100",
              progressBg: s ? "bg-gray-800" : "bg-gray-300",
              cardBg: s ? "bg-[#1A1825]" : "bg-gray-100",
            };
          (0, c.useEffect)(() => {
            if (i && "totalSupply" in i && "totalSold" in i) {
              console.log("Using contract info for calculation");
              let e = Number(i.totalSupply),
                s = Number(i.totalSold);
              if (e > 0) {
                let t = Math.min(100, (s / e) * 100);
                console.log("Percentage from contract:", t),
                  console.log(t),
                  J(t);
              }
            }
          }, [i]),
            (0, c.useEffect)(() => {
              let e = async () => {
                if (t)
                  try {
                    let e = await k(t);
                    E(e.reverse());
                  } catch (e) {
                    console.error("Error fetching user data:", e);
                  } finally {
                  }
              };
              e();
            }, [t, D]),
            (0, c.useEffect)(() => {
              if ("buyWithETH" === P && H) {
                let e = parseFloat(H) / parseFloat(i.ethPrice);
                L(e.toLocaleString());
              } else if ("buyWithUSDT" === P && O) {
                let e = parseFloat(O) * parseFloat(i.usdtTokenRatio);
                L(e.toLocaleString());
              } else if ("buyWithUSDC" === P && R) {
                let e = parseFloat(R) * parseFloat(i.usdcTokenRatio);
                L(e.toLocaleString());
              } else L("0");
            }, [P, H, O, R]);
          let Q = async (e) => {
              if ((e.preventDefault(), V(!0), "buyWithETH" === P)) {
                let e = await p(H);
                console.log(e);
              } else if ("buyWithUSDT" === P) {
                let e = await u(O);
                console.log(e);
              } else if ("buyWithUSDC" === P) {
                let e = await g(R);
                console.log(e);
              }
              "buyWithETH" === P && X(""),
                "buyWithUSDT" === P && Y(""),
                "buyWithUSDC" === P && I(""),
                V(!1),
                window.gtag &&
                  window.gtag("event", "conversion", {
                    send_to: "AW-16992297496/ae4yCMLWq7caEJjEx6Y_",
                    transaction_id: "",
                  });
            },
            ee = (e) => {
              if (!e) return "0";
              let s = Number(e);
              return s >= 1e9
                ? (s / 1e9).toFixed(2) + " B"
                : s >= 1e6
                ? (s / 1e6).toFixed(2) + " M"
                : s >= 1e3
                ? (s / 1e3).toFixed(2) + " K"
                : s.toFixed(2);
            },
            es = () => {
              if (
                !(null == i ? void 0 : i.totalSold) ||
                !(null == i ? void 0 : i.fsxBalance)
              )
                return 0;
              let e =
                  Number(null == i ? void 0 : i.totalSold) +
                  Number(null == i ? void 0 : i.fsxBalance),
                s = parseFloat(i.totalSold) || 0,
                t = parseFloat(e) || 1;
              return parseFloat(Math.min((s / t) * 100, 100).toFixed(2));
            };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              className: "",
              children: (0, a.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                  (0, a.jsx)("div", {
                    className: "lg:col-span-1",
                    children: (0, a.jsxs)("div", {
                      className: "".concat(
                        G.bg,
                        " rounded-xl overflow-hidden shadow-lg"
                      ),
                      children: [
                        (0, a.jsx)("div", {
                          className: "p-6 border-b ".concat(G.border),
                          children: (0, a.jsxs)("h2", {
                            className: "text-xl font-bold ".concat(
                              G.text,
                              " flex items-center"
                            ),
                            children: [
                              (0, a.jsx)(n.NMh, {
                                className: "mr-2 text-purple-500",
                              }),
                              "Token Stats",
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "p-6 space-y-4",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-medium text-purple-400 mb-3",
                                  children: "Token Information",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Name:",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: G.text,
                                          children: "FUTURESYNCX",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Symbol:",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: G.text,
                                          children: "FSX",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Total Supply:",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: G.text,
                                          children: ee(
                                            null == o ? void 0 : o.fsxSupply
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "ICO Sale Supply:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: G.text,
                                          children: [
                                            ee(
                                              Number(
                                                null == i
                                                  ? void 0
                                                  : i.fsxBalance
                                              ) +
                                                Number(
                                                  null == i
                                                    ? void 0
                                                    : i.totalSold
                                                )
                                            ),
                                            "\xa0 ",
                                            "FSX",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-medium text-purple-400 mb-3",
                                  children: "Sale Progress",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "mb-2",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex justify-between text-sm mb-1",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Stage 1",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: G.text,
                                          children: [es(), "%"],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "w-full ".concat(
                                        G.progressBg,
                                        " rounded-full h-4"
                                      ),
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "bg-gradient-to-r from-purple-600 to-blue-500 h-4 rounded-full",
                                        style: { width: "".concat(es(), "%") },
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Current Price:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: G.text,
                                          children: ["$", q],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Next Price:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: G.text,
                                          children: ["$", "0.0022"],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Total Raised:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: G.text,
                                          children: [
                                            "$",
                                            Number(
                                              null == i ? void 0 : i.totalSold
                                            ) * q,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Tokens Sold:",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: G.text,
                                          children: ee(
                                            null == i ? void 0 : i.totalSold
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: G.textSecondary,
                                          children: "Remaining Tokens:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: G.text,
                                          children: [
                                            Number(
                                              null == i ? void 0 : i.fsxBalance
                                            ) +
                                              Number(
                                                null == i ? void 0 : i.totalSold
                                              ) -
                                              Number(
                                                null == i ? void 0 : i.totalSold
                                              ),
                                            " ",
                                            "FSX",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)(eh, { isDarkMode: s, contractInfo: i }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "lg:col-span-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "".concat(
                          G.bg,
                          " rounded-xl overflow-hidden shadow-lg"
                        ),
                        children: [
                          (0, a.jsx)("div", {
                            className: "p-6 border-b ".concat(G.border),
                            children: (0, a.jsxs)("h2", {
                              className: "text-xl font-bold ".concat(
                                G.text,
                                " flex items-center"
                              ),
                              children: [
                                (0, a.jsx)(n.qau, {
                                  className: "mr-2 text-purple-500",
                                }),
                                "Purchase Tokens",
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex border-b ".concat(G.border),
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => M("buyWithETH"),
                                className:
                                  "flex-1 py-4 px-6 flex justify-center items-center gap-2 ".concat(
                                    "buyWithETH" === P
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                      : ""
                                          .concat(G.textSecondary, " ")
                                          .concat(G.hover)
                                  ),
                                children: [
                                  (0, a.jsx)("img", {
                                    src: "/ethereum.svg",
                                    alt: "ETH",
                                    class:
                                      "jsx-3656311742 mr-2 w-4 h-4 filter brightness-200",
                                  }),
                                  (0, a.jsx)("span", { children: "ETH" }),
                                ],
                              }),
                              (0, a.jsxs)("button", {
                                onClick: () => M("buyWithUSDT"),
                                className:
                                  "flex-1 py-4 px-6 flex justify-center items-center gap-2 ".concat(
                                    "buyWithUSDT" === P
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                      : ""
                                          .concat(G.textSecondary, " ")
                                          .concat(G.hover)
                                  ),
                                children: [
                                  (0, a.jsx)("img", {
                                    src: "/usdt.svg",
                                    alt: "USDT",
                                    class: "jsx-3656311742 mr-2 w-4 h-4 ",
                                  }),
                                  (0, a.jsx)("span", { children: "USDT" }),
                                ],
                              }),
                              (0, a.jsxs)("button", {
                                onClick: () => M("buyWithUSDC"),
                                className:
                                  "flex-1 py-4 px-6 flex justify-center items-center gap-2 ".concat(
                                    "buyWithUSDC" === P
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                      : ""
                                          .concat(G.textSecondary, " ")
                                          .concat(G.hover)
                                  ),
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "text-blue-500",
                                    children: (0, a.jsx)("img", {
                                      src: "/usdc.svg",
                                      style: { width: "1rem" },
                                    }),
                                  }),
                                  (0, a.jsx)("span", { children: "USDC" }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "p-6",
                            children: [
                              l
                                ? (0, a.jsxs)("form", {
                                    onSubmit: Q,
                                    className: "space-y-6",
                                    children: [
                                      "buyWithETH" === P &&
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsxs)("label", {
                                              className: "block ".concat(
                                                G.textSecondary,
                                                " mb-2"
                                              ),
                                              children: ["ETH", " Amount"],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "relative",
                                              children: [
                                                (0, a.jsx)("input", {
                                                  type: "number",
                                                  value: H,
                                                  onChange: (e) =>
                                                    X(e.target.value),
                                                  placeholder: "0.0",
                                                  step: "0.00001",
                                                  min: "0",
                                                  className: "w-full "
                                                    .concat(
                                                      G.inputBg,
                                                      " rounded-lg p-4 "
                                                    )
                                                    .concat(
                                                      G.text,
                                                      " focus:outline-none focus:ring-2 focus:ring-purple-600 pr-16"
                                                    ),
                                                  required: !0,
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                                  children: [
                                                    (0, a.jsx)(n.$$w, {
                                                      className:
                                                        "text-[#627EEA]",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        G.textSecondary,
                                                      children: "ETH",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              className: "text-sm ".concat(
                                                G.textMuted,
                                                " mt-2"
                                              ),
                                              children: [
                                                "1 ",
                                                "ETH",
                                                " =",
                                                " ",
                                                (
                                                  1 /
                                                  parseFloat(
                                                    Number(
                                                      null == i
                                                        ? void 0
                                                        : i.ethPrice
                                                    ) || 1
                                                  )
                                                ).toLocaleString(),
                                                " ",
                                                "FSX",
                                              ],
                                            }),
                                          ],
                                        }),
                                      "buyWithUSDT" === P &&
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("label", {
                                              className: "block ".concat(
                                                G.textSecondary,
                                                " mb-2"
                                              ),
                                              children: "USDT Amount",
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "relative",
                                              children: [
                                                (0, a.jsx)("input", {
                                                  type: "number",
                                                  value: O,
                                                  onChange: (e) =>
                                                    Y(e.target.value),
                                                  placeholder: "0.0",
                                                  step: "1",
                                                  min: "0",
                                                  className: "w-full "
                                                    .concat(
                                                      G.inputBg,
                                                      " rounded-lg p-4 "
                                                    )
                                                    .concat(
                                                      G.text,
                                                      " focus:outline-none focus:ring-2 focus:ring-purple-600 pr-16"
                                                    ),
                                                  required: !0,
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                                  children: [
                                                    (0, a.jsx)($.lP6, {
                                                      className:
                                                        "text-green-500",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        G.textSecondary,
                                                      children: "USDT",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              className: "text-sm ".concat(
                                                G.textMuted,
                                                " mt-2"
                                              ),
                                              children: [
                                                "1 USDT =",
                                                " ",
                                                parseFloat(
                                                  (null == i
                                                    ? void 0
                                                    : i.usdtTokenRatio) || 1
                                                ).toLocaleString(),
                                                " ",
                                                "FSX",
                                              ],
                                            }),
                                          ],
                                        }),
                                      "buyWithUSDC" === P &&
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("label", {
                                              className: "block ".concat(
                                                G.textSecondary,
                                                " mb-2"
                                              ),
                                              children: "USDC Amount",
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "relative",
                                              children: [
                                                (0, a.jsx)("input", {
                                                  type: "number",
                                                  value: R,
                                                  onChange: (e) =>
                                                    I(e.target.value),
                                                  placeholder: "0.0",
                                                  step: "1",
                                                  min: "0",
                                                  className: "w-full "
                                                    .concat(
                                                      G.inputBg,
                                                      " rounded-lg p-4 "
                                                    )
                                                    .concat(
                                                      G.text,
                                                      " focus:outline-none focus:ring-2 focus:ring-purple-600 pr-16"
                                                    ),
                                                  required: !0,
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "text-blue-500",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: "/usdc.svg",
                                                          style: {
                                                            width: "1rem",
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        G.textSecondary,
                                                      children: "USDC",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              className: "text-sm ".concat(
                                                G.textMuted,
                                                " mt-2"
                                              ),
                                              children: [
                                                "1 USDC =",
                                                " ",
                                                parseFloat(
                                                  (null == i
                                                    ? void 0
                                                    : i.usdtTokenRatio) || 1
                                                ).toLocaleString(),
                                                " ",
                                                "FSX",
                                              ],
                                            }),
                                          ],
                                        }),
                                      (0, a.jsx)("div", {
                                        className: "".concat(
                                          G.cardBg,
                                          " rounded-lg p-4"
                                        ),
                                        children: (0, a.jsxs)("div", {
                                          className: "flex justify-between",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: G.textSecondary,
                                              children: "You will receive:",
                                            }),
                                            (0, a.jsxs)("span", {
                                              className: "".concat(
                                                G.text,
                                                " font-medium"
                                              ),
                                              children: [W, " ", "FSX"],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("button", {
                                        type: "submit",
                                        disabled:
                                          _ ||
                                          20 >
                                            parseFloat(
                                              (null == o
                                                ? void 0
                                                : o.fsxBalance) || 0
                                            ),
                                        className: "w-full ".concat(
                                          20 >
                                            parseFloat(
                                              (null == o
                                                ? void 0
                                                : o.fsxBalance) || 0
                                            )
                                            ? s
                                              ? "bg-gray-700 cursor-not-allowed"
                                              : "bg-gray-300 cursor-not-allowed text-gray-500"
                                            : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
                                          " text-white font-medium py-4 rounded-lg transition-colors"
                                        ),
                                        children: _
                                          ? "Processing..."
                                          : 20 >
                                            parseFloat(
                                              (null == o
                                                ? void 0
                                                : o.fsxBalance) || 0
                                            )
                                          ? "Insufficient Token Supply"
                                          : "Buy with ".concat(
                                              "buyWithETH" === P
                                                ? "ETH"
                                                : "buyWithUSDT" === P
                                                ? "USDT"
                                                : "USDC"
                                            ),
                                      }),
                                    ],
                                  })
                                : (0, a.jsxs)("div", {
                                    className: "text-center py-8",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: "".concat(
                                          G.textSecondary,
                                          " mb-6"
                                        ),
                                        children:
                                          "Connect your wallet to purchase tokens",
                                      }),
                                      (0, a.jsx)("button", {
                                        onClick: x,
                                        disabled: _,
                                        className:
                                          "font-medium py-3 rounded-xl transition-colors",
                                        children: (0, a.jsx)(S.Z, {
                                          isDarkMode: s,
                                        }),
                                      }),
                                    ],
                                  }),
                              (0, a.jsxs)("div", {
                                className: "mt-8 p-4 ".concat(
                                  G.cardBg,
                                  " rounded-lg flex gap-3"
                                ),
                                children: [
                                  (0, a.jsx)(n.DAO, {
                                    className:
                                      "text-blue-400 flex-shrink-0 mt-1",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm ".concat(
                                      G.textSecondary
                                    ),
                                    children:
                                      "Token purchases are final and cannot be refunded. Make sure you have connected the correct wallet address. The tokens will be sent to your wallet after the transaction is confirmed.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-6 ".concat(
                          G.bg,
                          " rounded-xl overflow-hidden shadow-lg"
                        ),
                        children: [
                          (0, a.jsxs)("div", {
                            className: "p-6 border-b ".concat(
                              G.border,
                              " flex justify-between items-center"
                            ),
                            children: [
                              (0, a.jsxs)("h2", {
                                className: "text-xl font-bold ".concat(
                                  G.text,
                                  " flex items-center"
                                ),
                                children: [
                                  (0, a.jsx)(n.ceS, {
                                    className: "mr-2 text-purple-500",
                                  }),
                                  "Recent Transactions",
                                ],
                              }),
                              (0, a.jsx)("button", {
                                className:
                                  "text-purple-400 text-sm hover:text-purple-300",
                                children: "View All",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "p-4",
                            children: (0, a.jsx)("div", {
                              className: "overflow-x-auto",
                              children: (0, a.jsxs)("table", {
                                className: "w-full text-sm",
                                children: [
                                  (0, a.jsx)("thead", {
                                    children: (0, a.jsxs)("tr", {
                                      className: "border-b "
                                        .concat(G.border, " text-left ")
                                        .concat(G.textSecondary),
                                      children: [
                                        (0, a.jsx)("th", {
                                          className:
                                            "py-3 px-4 whitespace-nowrap",
                                          children: "Date",
                                        }),
                                        (0, a.jsx)("th", {
                                          className:
                                            "py-3 px-4 whitespace-nowrap",
                                          children: "Type",
                                        }),
                                        (0, a.jsx)("th", {
                                          className:
                                            "py-3 px-4 whitespace-nowrap",
                                          children: "Amount",
                                        }),
                                        (0, a.jsx)("th", {
                                          className:
                                            "py-3 px-4 whitespace-nowrap",
                                          children: "Status",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("tbody", {
                                    children:
                                      U &&
                                      U.slice(0, 3).map((e, t) =>
                                        (0, a.jsxs)(
                                          "tr",
                                          {
                                            className: "border-b "
                                              .concat(G.border, " ")
                                              .concat(
                                                s
                                                  ? "text-gray-300"
                                                  : "text-gray-700"
                                              ),
                                            children: [
                                              (0, a.jsx)("td", {
                                                className:
                                                  "py-3 px-4 whitespace-nowrap",
                                                children: "2024-02-25 10:30",
                                              }),
                                              (0, a.jsx)("td", {
                                                className:
                                                  "py-3 px-4 whitespace-nowrap",
                                                children: (0, a.jsx)("span", {
                                                  className:
                                                    "flex items-center",
                                                  children:
                                                    "ETH" === e.tokenIn
                                                      ? (0, a.jsxs)(
                                                          a.Fragment,
                                                          {
                                                            children: [
                                                              (0, a.jsx)(
                                                                n.$$w,
                                                                {
                                                                  className:
                                                                    "mr-2 text-[#627EEA]",
                                                                }
                                                              ),
                                                              e.tokenIn,
                                                              " Purchase",
                                                            ],
                                                          }
                                                        )
                                                      : "USDT" === e.tokenIn
                                                      ? (0, a.jsxs)(
                                                          a.Fragment,
                                                          {
                                                            children: [
                                                              (0, a.jsx)(
                                                                $.lP6,
                                                                {
                                                                  className:
                                                                    "mr-2 text-green-500",
                                                                }
                                                              ),
                                                              "USDT Purchase",
                                                            ],
                                                          }
                                                        )
                                                      : (0, a.jsxs)(
                                                          a.Fragment,
                                                          {
                                                            children: [
                                                              (0, a.jsx)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "mr-2 text-blue-500 font-bold",
                                                                  children: (0,
                                                                  a.jsx)(
                                                                    "img",
                                                                    {
                                                                      src: "/usdc.svg",
                                                                      style: {
                                                                        width:
                                                                          "1rem",
                                                                      },
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              "USDC Purchase",
                                                            ],
                                                          }
                                                        ),
                                                }),
                                              }),
                                              (0, a.jsxs)("td", {
                                                className:
                                                  "py-3 px-4 whitespace-nowrap",
                                                children: [
                                                  e.amountOut,
                                                  " ",
                                                  "FSX",
                                                ],
                                              }),
                                              (0, a.jsx)("td", {
                                                className:
                                                  "py-3 px-4 whitespace-nowrap",
                                                children: (0, a.jsx)("span", {
                                                  className:
                                                    "px-2 py-1 rounded-full text-xs ".concat(
                                                      s
                                                        ? "bg-green-900 text-green-400"
                                                        : "bg-green-100 text-green-600"
                                                    ),
                                                  children: "Completed",
                                                }),
                                              }),
                                            ],
                                          },
                                          t
                                        )
                                      ),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var V = _;
      let Z = (e) => {
        var s;
        let { isDarkMode: t } = e,
          {
            account: l,
            isConnected: r,
            isConnecting: i,
            contractInfo: o,
            tokenBalances: d,
            error: x,
            connectWallet: m,
            disconnectWallet: h,
            switchNetwork: p,
            buyWithETH: u,
            buyWithUSDT: g,
            buyWithUSDC: j,
            updateTokenPrice: f,
            updateUSDT: N,
            updateUSDC: y,
            setSaleToken: v,
            setBlockStatus: w,
            withdrawTokens: S,
            getUserTransactions: k,
            getAllTransactions: T,
            refreshContractData: B,
            isOwner: C,
          } = (0, b.$6)(),
          [F, A] = (0, c.useState)(!0),
          [D, U] = (0, c.useState)([]),
          [E, P] = (0, c.useState)("overview"),
          M = {
            cardBg: t ? "bg-[#12101A]" : "bg-white",
            innerBg: t ? "bg-[#1A1825]" : "bg-gray-100",
            footerBg: t ? "bg-[#0D0B12]" : "bg-gray-50",
            text: t ? "text-white" : "text-gray-900",
            textSecondary: t ? "text-gray-400" : "text-gray-600",
            border: t ? "border-gray-800" : "border-gray-200",
            hover: t ? "hover:bg-gray-800/30" : "hover:bg-gray-100",
            tableBorder: t ? "border-gray-800" : "border-gray-200",
            typeSuccess: t
              ? "bg-green-900/30 text-green-400"
              : "bg-green-100 text-green-600",
            typeInfo: t
              ? "bg-blue-900/30 text-blue-400"
              : "bg-blue-100 text-blue-600",
          };
        (0, c.useEffect)(() => {
          let e = async () => {
            if (l) {
              let e = await T();
              U(e.reverse()), A(!1);
            }
          };
          e();
        }, [l]);
        let H = (e) =>
            e && "0x0000000000000000000000000000000000000000" !== e
              ? ""
                  .concat(e.substring(0, 6), "...")
                  .concat(e.substring(e.length - 4))
              : "ETH",
          X = (e) =>
            e && "0x0000000000000000000000000000000000000000" !== e
              ? e === o.usdtAddress
                ? "USDT"
                : e === o.usdcAddress
                ? "USDC"
                : e === o.fsxAddress
                ? "".concat("FSX")
                : H(e)
              : "ETH",
          O = (e) =>
            e && "0x0000000000000000000000000000000000000000" !== e
              ? e === o.usdtAddress
                ? (0, a.jsx)($.lP6, { className: "text-green-500" })
                : e === o.usdcAddress
                ? (0, a.jsxs)("span", {
                    className: "text-blue-500",
                    children: [
                      " ",
                      (0, a.jsx)("img", {
                        src: "/usdc.svg",
                        style: { width: ".9rem" },
                      }),
                    ],
                  })
                : (0, a.jsxs)("span", {
                    className: "text-blue-500",
                    children: [
                      " ",
                      (0, a.jsx)("img", {
                        src: "/futuresyncx-circle-black.png",
                        style: { width: ".9rem" },
                      }),
                    ],
                  })
              : (0, a.jsx)(n.$$w, { className: "text-[#627EEA]" }),
          Y = (e) => {
            if (!e) return "0";
            let s = Number(e);
            return s >= 1e9
              ? (s / 1e9).toFixed(2) + " B"
              : s >= 1e6
              ? (s / 1e6).toFixed(2) + " M"
              : s >= 1e3
              ? (s / 1e3).toFixed(2) + " K"
              : s.toFixed(2);
          },
          R = [
            { id: "overview", icon: (0, a.jsx)(n.vAr, {}), label: "Overview" },
            {
              id: "prices",
              icon: (0, a.jsx)(n.RcD, {}),
              label: "Prices & Ratios",
            },
            {
              id: "balances",
              icon: (0, a.jsx)(n.OZg, {}),
              label: "Token Balances",
            },
            {
              id: "transactions",
              icon: (0, a.jsx)(n.ceS, {}),
              label: "Transactions",
            },
          ];
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "".concat(
              M.cardBg,
              " rounded-xl shadow-lg overflow-hidden"
            ),
            children: [
              (0, a.jsxs)("div", {
                className: "p-4 sm:p-6 border-b ".concat(
                  M.border,
                  " flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center"
                ),
                children: [
                  (0, a.jsx)("h1", {
                    className: "text-xl sm:text-2xl font-bold ".concat(M.text),
                  }),
                  (0, a.jsxs)("button", {
                    onClick: () => window.location.reload(),
                    className:
                      "flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base",
                    children: [
                      (0, a.jsx)(n.dnK, {}),
                      (0, a.jsx)("span", { children: "Refresh Data" }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "flex overflow-x-auto scrollbar-hide border-b ".concat(
                    M.border
                  ),
                children: R.map((e) =>
                  (0, a.jsxs)(
                    "button",
                    {
                      onClick: () => P(e.id),
                      className:
                        "flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap ".concat(
                          E === e.id
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                            : "".concat(M.textSecondary, " ").concat(M.hover)
                        ),
                      children: [
                        (0, a.jsx)("span", {
                          className: "block",
                          children: e.icon,
                        }),
                        (0, a.jsx)("span", {
                          className: "hidden sm:block",
                          children: e.label,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              F
                ? (0, a.jsx)("div", {
                    className: "p-8 flex justify-center",
                    children: (0, a.jsx)("div", {
                      className:
                        "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500",
                    }),
                  })
                : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                      className: "p-4 sm:p-6",
                      children: [
                        "overview" === E &&
                          (0, a.jsxs)("div", {
                            className: "space-y-4 sm:space-y-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      M.innerBg,
                                      " rounded-xl p-3 sm:p-4"
                                    ),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 ".concat(
                                            M.textSecondary,
                                            " mb-2"
                                          ),
                                        children: [
                                          (0, a.jsx)(n.vAr, {}),
                                          (0, a.jsx)("span", {
                                            children: "Sale Token",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "".concat(
                                          M.text,
                                          " text-xs sm:text-sm overflow-hidden overflow-ellipsis"
                                        ),
                                        children: o.fsxAddress,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      M.innerBg,
                                      " rounded-xl p-3 sm:p-4"
                                    ),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 ".concat(
                                            M.textSecondary,
                                            " mb-2"
                                          ),
                                        children: [
                                          (0, a.jsx)(n.qau, {}),
                                          (0, a.jsx)("span", {
                                            children: "Total Tokens Sold",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "".concat(
                                          M.text,
                                          " font-bold text-lg sm:text-xl"
                                        ),
                                        children: [Y(o.totalSold), " ", "FSX"],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      M.innerBg,
                                      " rounded-xl p-3 sm:p-4"
                                    ),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 ".concat(
                                            M.textSecondary,
                                            " mb-2"
                                          ),
                                        children: [
                                          (0, a.jsx)($.lP6, {
                                            className: "text-green-500",
                                          }),
                                          (0, a.jsx)("span", {
                                            children: "USDT Address",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "".concat(
                                          M.text,
                                          " text-xs sm:text-sm overflow-hidden overflow-ellipsis"
                                        ),
                                        children: o.usdtAddress,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      M.innerBg,
                                      " rounded-xl p-3 sm:p-4"
                                    ),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 ".concat(
                                            M.textSecondary,
                                            " mb-2"
                                          ),
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: "text-blue-500",
                                            children: (0, a.jsx)("img", {
                                              src: "/usdc.svg",
                                              style: { width: "1rem" },
                                            }),
                                          }),
                                          (0, a.jsx)("span", {
                                            children: "USDC Address",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "".concat(
                                          M.text,
                                          " text-xs sm:text-sm overflow-hidden overflow-ellipsis"
                                        ),
                                        children: o.usdcAddress,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "".concat(
                                  M.innerBg,
                                  " rounded-xl p-4 sm:p-6"
                                ),
                                children: [
                                  (0, a.jsx)("h2", {
                                    className:
                                      "text-lg sm:text-xl font-bold ".concat(
                                        M.text,
                                        " mb-3 sm:mb-4"
                                      ),
                                    children: "Contract Status",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        children: [
                                          (0, a.jsx)("h3", {
                                            className: "".concat(
                                              M.textSecondary,
                                              " mb-2"
                                            ),
                                            children: "Token Balance",
                                          }),
                                          (0, a.jsxs)("p", {
                                            className: "".concat(
                                              M.text,
                                              " font-bold text-lg sm:text-xl"
                                            ),
                                            children: [
                                              Y(
                                                null == d
                                                  ? void 0
                                                  : d.fsxBalance
                                              ),
                                              " ",
                                              "FSX",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        children: [
                                          (0, a.jsx)("h3", {
                                            className: "".concat(
                                              M.textSecondary,
                                              " mb-2"
                                            ),
                                            children: "Total Sales",
                                          }),
                                          (0, a.jsx)("p", {
                                            className: "".concat(
                                              M.text,
                                              " font-bold text-lg sm:text-xl"
                                            ),
                                            children: D.filter(
                                              (e) => "BUY" === e.transactionType
                                            ).length,
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        children: [
                                          (0, a.jsx)("h3", {
                                            className: "".concat(
                                              M.textSecondary,
                                              " mb-2"
                                            ),
                                            children: "Recent Activity",
                                          }),
                                          (0, a.jsx)("p", {
                                            className: "".concat(
                                              M.text,
                                              " font-bold text-lg sm:text-xl"
                                            ),
                                            children:
                                              D.length > 0
                                                ? ((s = D[0].timestamp),
                                                  new Date(s).toLocaleString())
                                                : "No recent activity",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        "prices" === E &&
                          (0, a.jsx)("div", {
                            className: "space-y-4 sm:space-y-6",
                            children: (0, a.jsxs)("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "".concat(
                                    M.innerBg,
                                    " rounded-xl p-4 sm:p-6"
                                  ),
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className:
                                        "text-lg sm:text-xl font-bold ".concat(
                                          M.text,
                                          " mb-3 sm:mb-4"
                                        ),
                                      children: "Token Prices",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "space-y-4",
                                      children: (0, a.jsxs)("div", {
                                        children: [
                                          (0, a.jsxs)("h3", {
                                            className: "".concat(
                                              M.textSecondary,
                                              " mb-2"
                                            ),
                                            children: [
                                              "Token Price (",
                                              "ETH",
                                              ")",
                                            ],
                                          }),
                                          (0, a.jsxs)("p", {
                                            className: "".concat(
                                              M.text,
                                              " font-bold text-lg sm:text-xl"
                                            ),
                                            children: [o.ethPrice, " ", "ETH"],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "".concat(
                                    M.innerBg,
                                    " rounded-xl p-4 sm:p-6"
                                  ),
                                  children: [
                                    (0, a.jsx)("h2", {
                                      className:
                                        "text-lg sm:text-xl font-bold ".concat(
                                          M.text,
                                          " mb-3 sm:mb-4"
                                        ),
                                      children: "Token Ratios",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "space-y-4",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("h3", {
                                              className: "".concat(
                                                M.textSecondary,
                                                " mb-2"
                                              ),
                                              children: "USDT to Token Ratio",
                                            }),
                                            (0, a.jsxs)("p", {
                                              className: "".concat(
                                                M.text,
                                                " font-bold text-lg sm:text-xl"
                                              ),
                                              children: [
                                                "1 USDT = ",
                                                o.usdtTokenRatio,
                                                " Tokens",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("h3", {
                                              className: "".concat(
                                                M.textSecondary,
                                                " mb-2"
                                              ),
                                              children: "USDC to Token Ratio",
                                            }),
                                            (0, a.jsxs)("p", {
                                              className: "".concat(
                                                M.text,
                                                " font-bold text-lg sm:text-xl"
                                              ),
                                              children: [
                                                "1 USDC = ",
                                                o.usdcTokenRatio,
                                                " Tokens",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        "balances" === E &&
                          (0, a.jsx)("div", {
                            className: "space-y-4 sm:space-y-6",
                            children: (0, a.jsxs)("div", {
                              className: "".concat(
                                M.innerBg,
                                " rounded-xl p-4 sm:p-6"
                              ),
                              children: [
                                (0, a.jsx)("h2", {
                                  className:
                                    "text-lg sm:text-xl font-bold ".concat(
                                      M.text,
                                      " mb-3 sm:mb-4"
                                    ),
                                  children: "Contract Token Balances",
                                }),
                                (0, a.jsx)("div", {
                                  className: "overflow-x-auto",
                                  children: (0, a.jsxs)("table", {
                                    className: "w-full text-left",
                                    children: [
                                      (0, a.jsx)("thead", {
                                        children: (0, a.jsxs)("tr", {
                                          className: "border-b ".concat(
                                            M.tableBorder
                                          ),
                                          children: [
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-sm"
                                                ),
                                              children: "Token",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-sm"
                                                ),
                                              children: "Balance",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-sm hidden sm:table-cell"
                                                ),
                                              children: "Address",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsxs)("tbody", {
                                        children: [
                                          (0, a.jsxs)("tr", {
                                            className: "border-b ".concat(
                                              M.tableBorder
                                            ),
                                            children: [
                                              (0, a.jsx)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.text,
                                                    " text-sm"
                                                  ),
                                                children: (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    (0, a.jsx)(n.vAr, {
                                                      className:
                                                        "text-purple-500",
                                                    }),
                                                    (0, a.jsxs)("span", {
                                                      children: [
                                                        "FUTURESYNCX",
                                                        " (",
                                                        "FSX",
                                                        ")",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, a.jsx)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.text,
                                                    " text-sm"
                                                  ),
                                                children: d.fsxBalance,
                                              }),
                                              (0, a.jsx)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.textSecondary,
                                                    " text-xs hidden sm:table-cell"
                                                  ),
                                                children: o.fsxAddress,
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("tr", {
                                            className: "border-b ".concat(
                                              M.tableBorder
                                            ),
                                            children: [
                                              (0, a.jsx)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.text,
                                                    " text-sm"
                                                  ),
                                                children: (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    (0, a.jsx)($.lP6, {
                                                      className:
                                                        "text-green-500",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      children: "USDT",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, a.jsx)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.text,
                                                    " text-sm"
                                                  ),
                                                children: d.usdtBalance,
                                              }),
                                              (0, a.jsx)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.textSecondary,
                                                    " text-xs hidden sm:table-cell"
                                                  ),
                                                children: o.usdtAddress,
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("tr", {
                                            className: "border-b ".concat(
                                              M.tableBorder
                                            ),
                                            children: [
                                              (0, a.jsx)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.text,
                                                    " text-sm"
                                                  ),
                                                children: (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "text-blue-500",
                                                      children: (0, a.jsx)(
                                                        "img",
                                                        {
                                                          src: "/usdc.svg",
                                                          style: {
                                                            width: "1rem",
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      children: "USDC",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, a.jsxs)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.text,
                                                    " text-sm"
                                                  ),
                                                children: [
                                                  Y(d.usdcBalance),
                                                  d.usdcBalance,
                                                ],
                                              }),
                                              (0, a.jsx)("td", {
                                                className:
                                                  "px-3 py-2 sm:px-4 sm:py-3 ".concat(
                                                    M.textSecondary,
                                                    " text-xs hidden sm:table-cell"
                                                  ),
                                                children: o.usdcAddress,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        "transactions" === E &&
                          (0, a.jsx)("div", {
                            className: "space-y-4 sm:space-y-6",
                            children: (0, a.jsxs)("div", {
                              className: "".concat(
                                M.innerBg,
                                " rounded-xl p-4 sm:p-6"
                              ),
                              children: [
                                (0, a.jsx)("h2", {
                                  className:
                                    "text-lg sm:text-xl font-bold ".concat(
                                      M.text,
                                      " mb-3 sm:mb-4"
                                    ),
                                  children: "All Transactions",
                                }),
                                (0, a.jsx)("div", {
                                  className: "overflow-x-auto",
                                  children: (0, a.jsxs)("table", {
                                    className: "w-full text-left",
                                    children: [
                                      (0, a.jsx)("thead", {
                                        children: (0, a.jsxs)("tr", {
                                          className: "border-b ".concat(
                                            M.tableBorder
                                          ),
                                          children: [
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-xs sm:text-sm"
                                                ),
                                              children: "Time",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-xs sm:text-sm hidden sm:table-cell"
                                                ),
                                              children: "User",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-xs sm:text-sm"
                                                ),
                                              children: "Type",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-xs sm:text-sm"
                                                ),
                                              children: "From",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-xs sm:text-sm"
                                                ),
                                              children: "To",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-xs sm:text-sm hidden md:table-cell"
                                                ),
                                              children: "Amount In",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                  M.textSecondary,
                                                  " text-xs sm:text-sm"
                                                ),
                                              children: "Amount Out",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)("tbody", {
                                        children: D.map((e, s) =>
                                          (0, a.jsxs)(
                                            "tr",
                                            {
                                              className: "border-b ".concat(
                                                M.tableBorder
                                              ),
                                              children: [
                                                (0, a.jsx)("td", {
                                                  className:
                                                    "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                      M.text,
                                                      " text-xs sm:text-sm whitespace-nowrap"
                                                    ),
                                                  children: new Date(
                                                    e.timestamp
                                                  ).toLocaleTimeString(),
                                                }),
                                                (0, a.jsx)("td", {
                                                  className:
                                                    "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                      M.text,
                                                      " text-xs sm:text-sm hidden sm:table-cell"
                                                    ),
                                                  children: H(e.user),
                                                }),
                                                (0, a.jsx)("td", {
                                                  className:
                                                    "px-2 py-2 sm:px-4 sm:py-3",
                                                  children: (0, a.jsx)("span", {
                                                    className:
                                                      "px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs ".concat(
                                                        "BUY" ===
                                                          e.transactionType
                                                          ? M.typeSuccess
                                                          : M.typeInfo
                                                      ),
                                                    children: e.transactionType,
                                                  }),
                                                }),
                                                (0, a.jsx)("td", {
                                                  className:
                                                    "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                      M.text,
                                                      " text-xs sm:text-sm"
                                                    ),
                                                  children: (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center gap-1 sm:gap-2",
                                                    children: [
                                                      O(e.tokenInAddress),
                                                      (0, a.jsx)("span", {
                                                        children: X(
                                                          e.tokenInAddress
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                (0, a.jsx)("td", {
                                                  className:
                                                    "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                      M.text,
                                                      " text-xs sm:text-sm"
                                                    ),
                                                  children: (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center gap-1 sm:gap-2",
                                                    children: [
                                                      O(e.tokenOutAddress),
                                                      (0, a.jsx)("span", {
                                                        children: X(
                                                          e.tokenOutAddress
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                (0, a.jsx)("td", {
                                                  className:
                                                    "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                      M.text,
                                                      " text-xs sm:text-sm hidden md:table-cell whitespace-nowrap"
                                                    ),
                                                  children:
                                                    "0x0000000000000000000000000000000000000000" ===
                                                    e.tokenIn
                                                      ? e.amountIn + " ETH"
                                                      : e.amountIn +
                                                        " " +
                                                        X(e.tokenInAddress),
                                                }),
                                                (0, a.jsx)("td", {
                                                  className:
                                                    "px-2 py-2 sm:px-4 sm:py-3 ".concat(
                                                      M.text,
                                                      " text-xs sm:text-sm whitespace-nowrap"
                                                    ),
                                                  children:
                                                    e.tokenOutAddress ===
                                                    o.fsxAddress
                                                      ? e.amountOut +
                                                        "".concat("FSX")
                                                      : e.amountOut +
                                                        " " +
                                                        X(e.tokenOutAddress),
                                                }),
                                              ],
                                            },
                                            s
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  }),
              (0, a.jsxs)("div", {
                className: ""
                  .concat(
                    M.footerBg,
                    " px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 border-t "
                  )
                  .concat(M.border),
                children: [
                  (0, a.jsxs)("div", {
                    className: "".concat(
                      M.textSecondary,
                      " text-xs sm:text-sm"
                    ),
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "inline-block w-2 h-2 rounded-full bg-green-500 mr-2",
                      }),
                      "Connected to contract",
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "".concat(
                      M.textSecondary,
                      " text-xs sm:text-sm"
                    ),
                    children: ["Last updated: ", new Date().toLocaleString()],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var K = Z;
      let z = "0.0018",
        J = (e) => {
          let { isDarkMode: s } = e,
            {
              account: t,
              isConnected: l,
              isConnecting: r,
              contractInfo: i,
              tokenBalances: o,
              updateTokenPrice: d,
              updateUSDT: x,
              updateUSDC: m,
              setSaleToken: h,
              setBlockStatus: p,
              withdrawTokens: u,
              getUserTransactions: g,
              getAllTransactions: j,
              formatAddress: f,
              formatTokenAmount: N,
              refreshContractData: y,
              isOwner: v,
            } = (0, b.$6)(),
            [w, S] = (0, c.useState)(!0),
            [k, T] = (0, c.useState)("overview"),
            [B, C] = (0, c.useState)(!1),
            [F, A] = (0, c.useState)([]);
          (0, c.useEffect)(() => {
            let e = async () => {
              if (t) {
                S(!0);
                try {
                  let e = await g(t);
                  A(e.reverse());
                } catch (e) {
                  console.error("Error fetching user data:", e);
                } finally {
                  S(!1);
                }
              }
            };
            e();
          }, [t]);
          let D = () => {
              navigator.clipboard
                .writeText(t)
                .then(() => {
                  C(!0), setTimeout(() => C(!1), 2e3);
                })
                .catch((e) => {
                  console.error("Failed to copy address:", e);
                });
            },
            U = (e) => new Date(e).toLocaleDateString(),
            E = (e) =>
              ""
                .concat(e.substring(0, 6), "...")
                .concat(e.substring(e.length - 4)),
            P = (e) => {
              switch (e) {
                case "ETH":
                  return (0, a.jsx)(n.$$w, { className: "text-[#627EEA]" });
                case "USDT":
                  return (0, a.jsx)($.lP6, { className: "text-green-500" });
                case "USDC":
                  return (0, a.jsx)("img", {
                    src: "/usdc.svg",
                    style: { width: ".9rem" },
                  });
                default:
                  return (0, a.jsx)(n.RPl, { className: "text-purple-500" });
              }
            },
            M = [
              { id: "overview", label: "Overview", icon: (0, a.jsx)(n.Op, {}) },
              { id: "assets", label: "Assets", icon: (0, a.jsx)(n.vAr, {}) },
              {
                id: "transactions",
                label: "Transactions",
                icon: (0, a.jsx)(n.ceS, {}),
              },
            ],
            H = {
              bg: s ? "bg-[#0D0B12]" : "bg-gray-100",
              header: s ? "bg-[#12101A]" : "bg-white",
              card: s ? "bg-[#12101A]" : "bg-white",
              text: s ? "text-white" : "text-gray-900",
              textSecondary: s ? "text-gray-400" : "text-gray-500",
              border: s ? "border-gray-800" : "border-gray-200",
              divide: s ? "divide-gray-800" : "divide-gray-200",
            };
          return (0, a.jsx)("div", {
            className: "".concat(H.bg, " min-h-screen pb-8"),
            children: (0, a.jsxs)("div", {
              className: "max-w-7xl mx-auto ",
              children: [
                (0, a.jsx)("div", {
                  className: ""
                    .concat(H.header, " py-4 px-4 sm:px-6 mb-6 border-b ")
                    .concat(H.border),
                  children: (0, a.jsx)("div", {
                    className: "max-w-7xl mx-auto",
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "text-xl sm:text-2xl font-bold ".concat(
                            H.text
                          ),
                          children: "User Dashboard",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center ".concat(
                            s ? "bg-[#1A1825]" : "bg-gray-100",
                            " rounded-lg px-3 py-2 gap-3"
                          ),
                          children: [
                            (0, a.jsx)(n.OZg, { className: "text-purple-500" }),
                            (0, a.jsx)("span", {
                              className: H.text,
                              children: f(t),
                            }),
                            (0, a.jsx)("button", {
                              onClick: D,
                              className: ""
                                .concat(H.textSecondary, " hover:")
                                .concat(H.text, " transition-colors"),
                              title: "Copy to clipboard",
                              children: B
                                ? (0, a.jsx)(n.l_A, {
                                    className: "text-green-500",
                                  })
                                : (0, a.jsx)(n.esY, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "flex overflow-x-auto scrollbar-hide border-b ".concat(
                      H.border,
                      " mb-6"
                    ),
                  children: M.map((e) =>
                    (0, a.jsxs)(
                      "button",
                      {
                        onClick: () => T(e.id),
                        className:
                          "flex items-center gap-2 px-4 sm:px-6 py-3 whitespace-nowrap whitespace-nowrap transition-colors ".concat(
                            k === e.id
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                              : s
                              ? "text-gray-400 hover:text-gray-300"
                              : "text-gray-600 hover:text-gray-900"
                          ),
                        children: [
                          e.icon,
                          (0, a.jsx)("span", { children: e.label }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
                w
                  ? (0, a.jsx)("div", {
                      className: "py-12 flex justify-center",
                      children: (0, a.jsx)("div", {
                        className:
                          "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500",
                      }),
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        "overview" === k &&
                          (0, a.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      H.card,
                                      " rounded-xl p-6"
                                    ),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex justify-between items-start mb-4",
                                        children: [
                                          (0, a.jsx)(n.vAr, {
                                            className:
                                              "text-purple-500 text-xl",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: H.textSecondary,
                                            children: "Total Balance",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("h3", {
                                        className: "text-2xl font-bold ".concat(
                                          H.text,
                                          " mb-1"
                                        ),
                                        children: [
                                          ((e) => {
                                            if (!e) return "0";
                                            let s = Number(e);
                                            return s >= 1e9
                                              ? (s / 1e9).toFixed(2) + " B"
                                              : s >= 1e6
                                              ? (s / 1e6).toFixed(2) + " M"
                                              : s >= 1e3
                                              ? (s / 1e3).toFixed(2) + " K"
                                              : s.toFixed(2);
                                          })(o.userFsxBlanace),
                                          " ",
                                          "FSX",
                                        ],
                                      }),
                                      (0, a.jsxs)("p", {
                                        className: H.textSecondary,
                                        children: [
                                          "≈ $",
                                          (null == o
                                            ? void 0
                                            : o.userFsxBlanace) * z,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      H.card,
                                      " rounded-xl p-6"
                                    ),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex justify-between items-start mb-4",
                                        children: [
                                          (0, a.jsx)(n.$$w, {
                                            className: "text-[#627EEA] text-xl",
                                          }),
                                          (0, a.jsxs)("span", {
                                            className: H.textSecondary,
                                            children: ["ETH", " Balance"],
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("h3", {
                                        className: "text-2xl font-bold ".concat(
                                          H.text,
                                          " mb-1"
                                        ),
                                        children: [
                                          (
                                            null == o
                                              ? void 0
                                              : o.userEthBalance
                                          )
                                            ? parseFloat(
                                                o.userEthBalance
                                              ).toFixed(6)
                                            : "0.00",
                                          " ",
                                          "ETH",
                                        ],
                                      }),
                                      (0, a.jsx)("p", {
                                        className: H.textSecondary,
                                        children: "≈",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      H.card,
                                      " rounded-xl p-6"
                                    ),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex justify-between items-start mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/futuresyncx-circle-black.png",
                                            alt: "FSX",
                                            class: "jsx-3656311742 w-6 h-6",
                                          }),
                                          (0, a.jsxs)("span", {
                                            className: H.textSecondary,
                                            children: ["FSX", " Purchased"],
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("h3", {
                                        className: "text-2xl font-bold ".concat(
                                          H.text,
                                          " mb-1"
                                        ),
                                        children: null == F ? void 0 : F.length,
                                      }),
                                      (0, a.jsxs)("p", {
                                        className: H.textSecondary,
                                        children: [
                                          "Total Count: ",
                                          (null == F ? void 0 : F.length) + 6,
                                          " ",
                                          "FSX",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      H.card,
                                      " rounded-xl p-6"
                                    ),
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex justify-between items-start mb-4",
                                        children: [
                                          (0, a.jsx)(n.qau, {
                                            className:
                                              "text-purple-500 text-xl",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: H.textSecondary,
                                            children: "Transactions",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("h3", {
                                        className: "text-2xl font-bold ".concat(
                                          H.text,
                                          " mb-1"
                                        ),
                                        children: F.length,
                                      }),
                                      (0, a.jsxs)("p", {
                                        className: H.textSecondary,
                                        children: [
                                          "Last:",
                                          " ",
                                          F.length > 0
                                            ? U(F[0].timestamp)
                                            : "N/A",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "".concat(
                                  H.card,
                                  " rounded-xl overflow-hidden"
                                ),
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "px-6 py-4 border-b ".concat(
                                      H.border,
                                      " flex justify-between items-center"
                                    ),
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className:
                                          "text-lg font-semibold ".concat(
                                            H.text
                                          ),
                                        children: "Recent Activity",
                                      }),
                                      (0, a.jsx)("button", {
                                        onClick: () => T("transactions"),
                                        className:
                                          "text-purple-400 text-sm hover:text-purple-300",
                                        children: "View All",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "divide-y ".concat(H.divide),
                                    children: [
                                      F.slice(0, 3).map((e, s) =>
                                        (0, a.jsxs)(
                                          "div",
                                          {
                                            className:
                                              "px-6 py-4 flex items-center justify-between",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-3",
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "w-10 h-10 rounded-full flex items-center justify-center ".concat(
                                                        "BUY" ===
                                                          e.transactionType
                                                          ? "bg-blue-900/30"
                                                          : "bg-purple-900/30"
                                                      ),
                                                    children:
                                                      "BUY" ===
                                                      e.transactionType
                                                        ? (0, a.jsx)(n.qau, {
                                                            className:
                                                              "text-blue-400",
                                                          })
                                                        : (0, a.jsx)(n.RPl, {
                                                            className:
                                                              "text-purple-400",
                                                          }),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    children: [
                                                      (0, a.jsx)("p", {
                                                        className: "".concat(
                                                          H.text,
                                                          " font-medium"
                                                        ),
                                                        children:
                                                          "BUY" ===
                                                          e.transactionType
                                                            ? "".concat(
                                                                "FSX",
                                                                " Token Purchase"
                                                              )
                                                            : "Stable Coin Purchase",
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        className:
                                                          "text-sm ".concat(
                                                            H.textSecondary
                                                          ),
                                                        children: U(
                                                          e.timestamp
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: "text-right",
                                                children: [
                                                  (0, a.jsxs)("p", {
                                                    className: "".concat(
                                                      H.text,
                                                      " font-medium"
                                                    ),
                                                    children: [
                                                      e.amountOut,
                                                      " ",
                                                      "BUY" ===
                                                      e.transactionType
                                                        ? "".concat("FSX")
                                                        : "".concat(e.tokenOut),
                                                    ],
                                                  }),
                                                  "BUY" === e.transactionType &&
                                                    (0, a.jsxs)("p", {
                                                      className:
                                                        "text-sm ".concat(
                                                          H.textSecondary
                                                        ),
                                                      children: [
                                                        e.paymentAmount,
                                                        " ",
                                                        e.paymentMethod,
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            ],
                                          },
                                          s
                                        )
                                      ),
                                      0 === F.length &&
                                        (0, a.jsx)("div", {
                                          className:
                                            "px-6 py-8 text-center ".concat(
                                              H.textSecondary
                                            ),
                                          children: "No recent activity",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        "assets" === k &&
                          (0, a.jsx)("div", {
                            className: "space-y-6",
                            children: (0, a.jsxs)("div", {
                              className: "".concat(
                                H.card,
                                " rounded-xl overflow-hidden"
                              ),
                              children: [
                                (0, a.jsx)("div", {
                                  className: "px-6 py-4 border-b ".concat(
                                    H.border
                                  ),
                                  children: (0, a.jsx)("h3", {
                                    className: "text-lg font-semibold ".concat(
                                      H.text
                                    ),
                                    children: "Your Assets",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "divide-y ".concat(H.divide),
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "px-6 py-4 flex items-center justify-between",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center",
                                              children: (0, a.jsx)("img", {
                                                style: { width: "3rem" },
                                                src: "/futuresyncx-circle-black.png",
                                                alt: "",
                                                srcSet: "",
                                              }),
                                            }),
                                            (0, a.jsxs)("div", {
                                              children: [
                                                (0, a.jsx)("p", {
                                                  className: "".concat(
                                                    H.text,
                                                    " font-medium"
                                                  ),
                                                  children: "FSX",
                                                }),
                                                (0, a.jsxs)("p", {
                                                  className: "text-sm ".concat(
                                                    H.textSecondary
                                                  ),
                                                  children: [
                                                    "FUTURESYNCX",
                                                    " (",
                                                    "FSX",
                                                    ")",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "text-right",
                                          children: [
                                            (0, a.jsxs)("p", {
                                              className: "".concat(
                                                H.text,
                                                " font-medium"
                                              ),
                                              children: [
                                                null == o
                                                  ? void 0
                                                  : o.userFsxBlanace,
                                                " ",
                                                "FSX",
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              className: "text-sm ".concat(
                                                H.textSecondary
                                              ),
                                              children: [
                                                "≈ $",
                                                Number(
                                                  null == o
                                                    ? void 0
                                                    : o.userFsxBlanace
                                                ) * z,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "px-6 py-4 flex items-center justify-between",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center",
                                              children: (0, a.jsx)(n.$$w, {
                                                className: "text-[#627EEA]",
                                              }),
                                            }),
                                            (0, a.jsxs)("div", {
                                              children: [
                                                (0, a.jsx)("p", {
                                                  className: "".concat(
                                                    H.text,
                                                    " font-medium"
                                                  ),
                                                  children: "ETH",
                                                }),
                                                (0, a.jsx)("p", {
                                                  className: "text-sm ".concat(
                                                    H.textSecondary
                                                  ),
                                                  children: "Ethereum",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "text-right",
                                          children: (0, a.jsxs)("p", {
                                            className: "".concat(
                                              H.text,
                                              " font-medium"
                                            ),
                                            children: [
                                              null == o
                                                ? void 0
                                                : o.userEthBalance,
                                              " ",
                                              "ETH",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "px-6 py-4 flex items-center justify-between",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center",
                                              children: (0, a.jsx)($.lP6, {
                                                className: "text-green-500",
                                              }),
                                            }),
                                            (0, a.jsxs)("div", {
                                              children: [
                                                (0, a.jsx)("p", {
                                                  className: "".concat(
                                                    H.text,
                                                    " font-medium"
                                                  ),
                                                  children: "USDT",
                                                }),
                                                (0, a.jsx)("p", {
                                                  className: "text-sm ".concat(
                                                    H.textSecondary
                                                  ),
                                                  children: "Tether USD",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "text-right",
                                          children: [
                                            (0, a.jsxs)("p", {
                                              className: "".concat(
                                                H.text,
                                                " font-medium"
                                              ),
                                              children: [
                                                o.userUSDTBalance,
                                                " USDT",
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              className: "text-sm ".concat(
                                                H.textSecondary
                                              ),
                                              children: [
                                                "≈ $",
                                                o.userUSDTBalance,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "px-6 py-4 flex items-center justify-between",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center",
                                              children: (0, a.jsxs)("span", {
                                                className:
                                                  "text-blue-500 font-bold",
                                                children: [
                                                  " ",
                                                  (0, a.jsx)("img", {
                                                    src: "/usdc.svg",
                                                    style: { width: "1rem" },
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, a.jsxs)("div", {
                                              children: [
                                                (0, a.jsx)("p", {
                                                  className: "".concat(
                                                    H.text,
                                                    " font-medium"
                                                  ),
                                                  children: "USDC",
                                                }),
                                                (0, a.jsx)("p", {
                                                  className: "text-sm ".concat(
                                                    H.textSecondary
                                                  ),
                                                  children: "USD Coin",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "text-right",
                                          children: [
                                            (0, a.jsxs)("p", {
                                              className: "".concat(
                                                H.text,
                                                " font-medium"
                                              ),
                                              children: [
                                                o.userUSDCBalance,
                                                " USDC",
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              className: "text-sm ".concat(
                                                H.textSecondary
                                              ),
                                              children: [
                                                "≈ $",
                                                o.userUSDCBalance,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        "transactions" === k &&
                          (0, a.jsx)("div", {
                            className: "space-y-6",
                            children: (0, a.jsxs)("div", {
                              className: "".concat(
                                H.card,
                                " rounded-xl overflow-hidden"
                              ),
                              children: [
                                (0, a.jsx)("div", {
                                  className: "px-6 py-4 border-b ".concat(
                                    H.border
                                  ),
                                  children: (0, a.jsx)("h3", {
                                    className: "text-lg font-semibold ".concat(
                                      H.text
                                    ),
                                    children: "Transaction History",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "overflow-x-auto",
                                  children: (0, a.jsxs)("table", {
                                    className: "w-full",
                                    children: [
                                      (0, a.jsx)("thead", {
                                        children: (0, a.jsxs)("tr", {
                                          className: "border-b "
                                            .concat(H.border, " text-left ")
                                            .concat(
                                              H.textSecondary,
                                              " text-sm"
                                            ),
                                          children: [
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-6 py-3 whitespace-nowrap",
                                              children: "Type",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-6 py-3 whitespace-nowrap",
                                              children: "Amount",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-6 py-3 whitespace-nowrap",
                                              children: "Payment",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-6 py-3 whitespace-nowrap hidden sm:table-cell",
                                              children: "Date",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-6 py-3 whitespace-nowrap hidden md:table-cell",
                                              children: "Wallet",
                                            }),
                                            (0, a.jsx)("th", {
                                              className:
                                                "px-6 py-3 whitespace-nowrap",
                                              children: "Status",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsxs)("tbody", {
                                        className: "divide-y ".concat(H.divide),
                                        children: [
                                          F.map((e, t) =>
                                            (0, a.jsxs)(
                                              "tr",
                                              {
                                                children: [
                                                  (0, a.jsx)("td", {
                                                    className:
                                                      "px-6 py-4 whitespace-nowrap",
                                                    children: (0, a.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat(
                                                            "BUY" ===
                                                              e.transactionType
                                                              ? "bg-blue-900/30 text-blue-400"
                                                              : "bg-purple-900/30 text-purple-400"
                                                          ),
                                                        children:
                                                          e.transactionType,
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsxs)("td", {
                                                    className:
                                                      "px-6 py-4 whitespace-nowrap ".concat(
                                                        H.text
                                                      ),
                                                    children: [
                                                      e.amountOut,
                                                      " ",
                                                      "FSX",
                                                    ],
                                                  }),
                                                  (0, a.jsx)("td", {
                                                    className:
                                                      "px-6 py-4 whitespace-nowrap",
                                                    children: e.tokenIn
                                                      ? (0, a.jsxs)("div", {
                                                          className:
                                                            "flex items-center gap-1",
                                                          children: [
                                                            P(e.tokenIn),
                                                            (0, a.jsxs)(
                                                              "span",
                                                              {
                                                                className:
                                                                  "".concat(
                                                                    H.text,
                                                                    " ml-1"
                                                                  ),
                                                                children: [
                                                                  e.amountIn,
                                                                  " ",
                                                                  e.tokenIn,
                                                                ],
                                                              }
                                                            ),
                                                          ],
                                                        })
                                                      : (0, a.jsx)("span", {
                                                          className:
                                                            H.textSecondary,
                                                          children: "-",
                                                        }),
                                                  }),
                                                  (0, a.jsx)("td", {
                                                    className:
                                                      "px-6 py-4 whitespace-nowrap ".concat(
                                                        H.textSecondary,
                                                        " hidden sm:table-cell"
                                                      ),
                                                    children: U(e.timestamp),
                                                  }),
                                                  (0, a.jsx)("td", {
                                                    className:
                                                      "px-6 py-4 whitespace-nowrap ".concat(
                                                        H.textSecondary,
                                                        " hidden md:table-cell"
                                                      ),
                                                    children: (0, a.jsx)("a", {
                                                      href: ""
                                                        .concat(
                                                          "https://etherscan.io/address/"
                                                        )
                                                        .concat(e.user),
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      className:
                                                        "text-purple-400 hover:text-purple-300",
                                                      children: E(e.user),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("td", {
                                                    className:
                                                      "px-6 py-4 whitespace-nowrap",
                                                    children: (0, a.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "px-2 py-1 rounded-full text-xs ".concat(
                                                            s
                                                              ? "bg-green-900 text-green-400"
                                                              : "bg-green-100 text-green-600"
                                                          ),
                                                        children: "Completed",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              },
                                              t
                                            )
                                          ),
                                          0 === F.length &&
                                            (0, a.jsx)("tr", {
                                              children: (0, a.jsx)("td", {
                                                colSpan: "6",
                                                className:
                                                  "px-6 py-8 text-center ".concat(
                                                    H.textSecondary
                                                  ),
                                                children:
                                                  "No transactions found",
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
              ],
            }),
          });
        };
      var G = J,
        Q = t(35553);
      let ee = "0x3007191Fe281B5C43c22F106021571db2F123e7E",
        es = (e) => {
          let { isDarkMode: s } = e,
            {
              account: t,
              isConnected: l,
              isConnecting: r,
              contractInfo: i,
              tokenBalances: o,
              error: d,
              connectWallet: x,
              disconnectWallet: m,
              switchNetwork: h,
              buyWithETH: p,
              buyWithUSDT: u,
              buyWithUSDC: g,
              updateTokenPrice: j,
              updateUSDT: f,
              updateUSDC: N,
              setSaleToken: y,
              setBlockStatus: v,
              withdrawTokens: w,
              getUserTransactions: S,
              getAllTransactions: k,
              formatTokenAmount: T,
              refreshContractData: B,
              isOwner: C,
            } = (0, b.$6)(),
            F = {
              mainBg: s ? "bg-[#0D0B12]" : "bg-gray-100",
              cardBg: s ? "bg-[#12101A]" : "bg-white",
              innerBg: s ? "bg-[#1A1825]" : "bg-gray-100",
              tokenBg: s ? "bg-[#292838]" : "bg-gray-200",
              text: s ? "text-white" : "text-gray-900",
              textSecondary: s ? "text-gray-400" : "text-gray-600",
              textMuted: "text-gray-500",
              border: s ? "border-gray-800" : "border-gray-200",
              divide: s ? "divide-gray-800" : "divide-gray-200",
              buttonBg: s ? "bg-[#1A1825]" : "bg-gray-100",
              buttonHover: s ? "hover:bg-[#20202e]" : "hover:bg-gray-200",
              warningBg: s ? "bg-red-900/20" : "bg-red-100",
              warningText: s ? "text-red-400" : "text-red-600",
              warningIcon: "text-red-500",
              adminBadgeBg: s ? "bg-yellow-900/30" : "bg-yellow-100",
              adminBadgeText: s ? "text-yellow-400" : "text-yellow-600",
              completedBg: s ? "bg-green-900/30" : "bg-green-100",
              completedText: s ? "text-green-400" : "text-green-600",
              arrowColor: s ? "text-gray-600" : "text-gray-400",
            },
            [A, D] = (0, c.useState)("FSX"),
            [U, E] = (0, c.useState)(""),
            [P, M] = (0, c.useState)(!1),
            [H, X] = (0, c.useState)([]),
            [O, Y] = (0, c.useState)({
              FSX: null == o ? void 0 : o.fsxBalance,
              ETH: null == o ? void 0 : o.contractEthBalance,
              USDT: null == o ? void 0 : o.usdtBalance,
              USDC: null == o ? void 0 : o.usdcBalance,
            }),
            [R, I] = (0, c.useState)({
              FSX: "0x0000000000000000000000000000000000000000",
              ETH: "0x0000000000000000000000000000000000000000",
              USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
              USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            }),
            W = (e) =>
              ""
                .concat(null == e ? void 0 : e.substring(0, 6), "...")
                .concat(null == e ? void 0 : e.substring(e.length - 4)),
            L = (e) => {
              switch (e) {
                case "ETH":
                  return (0, a.jsx)(n.$$w, { className: "text-[#627EEA]" });
                case "USDT":
                  return (0, a.jsx)($.lP6, { className: "text-green-500" });
                case "USDC":
                  return (0, a.jsx)("span", {
                    className: "text-blue-500",
                    children: (0, a.jsx)("img", {
                      src: "/usdc.svg",
                      style: { width: "1rem" },
                    }),
                  });
                default:
                  return (0, a.jsx)("span", {
                    className: "text-blue-500",
                    children: (0, a.jsx)("img", {
                      src: "/futuresyncx-circle-black.png",
                      style: { width: "1rem" },
                    }),
                  });
              }
            },
            q = async (e) => {
              if ((e.preventDefault(), !U || isNaN(U) || 0 >= parseFloat(U))) {
                alert("Please enter a valid amount");
                return;
              }
              if (parseFloat(U) > parseFloat(O[A])) {
                alert(
                  "Insufficient balance. Maximum available: "
                    .concat(O[A], " ")
                    .concat(A)
                );
                return;
              }
              M(!0);
              try {
                let e = R[A],
                  s = Q.vz(
                    U,
                    "ETH" === A ? 18 : "USDT" === A || "USDC" === A ? 6 : 18
                  );
                await w(e, s),
                  await new Promise((e) => setTimeout(e, 2e3)),
                  Y((e) => ({
                    ...e,
                    [A]: (parseFloat(e[A]) - parseFloat(U)).toString(),
                  }));
                let t = {
                    id: Date.now(),
                    token: A,
                    amount: U,
                    timestamp: new Date(),
                    address: R[A],
                    status: "Completed",
                  },
                  a = [t, ...H];
                X(a), Z(a), E("");
              } catch (e) {
                console.error("Error withdrawing tokens:", e),
                  alert("Failed to withdraw tokens: ".concat(e.message));
              } finally {
                M(!1);
              }
            };
          (0, c.useEffect)(() => {
            let e = K();
            e.length > 0 && X(e);
          }, []);
          let _ = (0, c.useRef)(H);
          (0, c.useEffect)(() => {
            _.current = H;
          }, [H]),
            (0, c.useEffect)(() => {
              let e = () => {
                Z(_.current);
              };
              return (
                window.addEventListener("beforeunload", e),
                () => {
                  window.removeEventListener("beforeunload", e);
                }
              );
            }, []);
          let V = (e) => e.toLocaleString(),
            Z = (e) => {
              try {
                return (
                  localStorage.setItem("withdrawals", JSON.stringify(e)), !0
                );
              } catch (e) {
                return (
                  console.error("Error saving withdrawals to localStorage:", e),
                  !1
                );
              }
            },
            K = () => {
              try {
                let e = localStorage.getItem("withdrawals");
                return e ? JSON.parse(e) : [];
              } catch (e) {
                return (
                  console.error(
                    "Error fetching withdrawals from localStorage:",
                    e
                  ),
                  []
                );
              }
            };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              className: "".concat(F.mainBg, " min-h-screen "),
              children: (0, a.jsx)("div", {
                className: " mx-auto",
                children: (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-5 gap-6",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "lg:col-span-3 ".concat(
                        F.cardBg,
                        " rounded-xl overflow-hidden shadow-lg"
                      ),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "p-6 border-b ".concat(
                            F.border,
                            " flex justify-between items-center"
                          ),
                          children: [
                            (0, a.jsxs)("h2", {
                              className: "text-xl font-bold ".concat(
                                F.text,
                                " flex items-center"
                              ),
                              children: [
                                (0, a.jsx)(n.OZg, {
                                  className: "mr-2 text-purple-500",
                                }),
                                "Withdraw Tokens",
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "px-3 py-1 "
                                .concat(F.adminBadgeBg, " ")
                                .concat(
                                  F.adminBadgeText,
                                  " rounded-full text-xs font-medium"
                                ),
                              children: "Admin Only",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "p-6",
                          children: (0, a.jsxs)("form", {
                            onSubmit: q,
                            children: [
                              (0, a.jsxs)("div", {
                                className: "mb-6",
                                children: [
                                  (0, a.jsx)("label", {
                                    className: "block ".concat(
                                      F.textSecondary,
                                      " mb-2"
                                    ),
                                    children: "Select Token",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "grid grid-cols-2 sm:grid-cols-4 gap-3",
                                    children: [
                                      "ETH",
                                      "FSX",
                                      "USDT",
                                      "USDC",
                                    ].map((e) =>
                                      (0, a.jsxs)(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () => D(e),
                                          className:
                                            "py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors ".concat(
                                              A === e
                                                ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                                : ""
                                                    .concat(F.buttonBg, " ")
                                                    .concat(
                                                      F.textSecondary,
                                                      " "
                                                    )
                                                    .concat(F.buttonHover)
                                            ),
                                          children: [
                                            L(e),
                                            (0, a.jsx)("span", { children: e }),
                                          ],
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "".concat(
                                  F.innerBg,
                                  " rounded-xl p-4 mb-6"
                                ),
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex justify-between items-center mb-1",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: F.textSecondary,
                                        children: "Available Balance",
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          L(A),
                                          (0, a.jsx)("span", {
                                            className: "".concat(
                                              F.text,
                                              " ml-2"
                                            ),
                                            children: A,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "text-2xl font-bold ".concat(
                                      F.text
                                    ),
                                    children: [O[A], " ", A],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "text-sm ".concat(
                                      F.textMuted,
                                      " mt-1"
                                    ),
                                    children: ["Address: ", W(R[A])],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mb-6",
                                children: [
                                  (0, a.jsx)("label", {
                                    className: "block ".concat(
                                      F.textSecondary,
                                      " mb-2"
                                    ),
                                    children: "Amount to Withdraw",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      F.innerBg,
                                      " rounded-xl p-4 flex items-center"
                                    ),
                                    children: [
                                      (0, a.jsx)("input", {
                                        type: "number",
                                        value: U,
                                        onChange: (e) => E(e.target.value),
                                        placeholder: "0.0",
                                        step: "any",
                                        min: "0",
                                        max: O[A],
                                        className: "bg-transparent ".concat(
                                          F.text,
                                          " text-2xl focus:outline-none w-full"
                                        ),
                                        required: !0,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          (0, a.jsx)("button", {
                                            type: "button",
                                            onClick: () => E(O[A]),
                                            className:
                                              "text-purple-400 text-sm hover:text-purple-300 mr-2",
                                            children: "MAX",
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1 ".concat(
                                                F.tokenBg,
                                                " rounded-full px-3 py-1"
                                              ),
                                            children: [
                                              L(A),
                                              (0, a.jsx)("span", {
                                                className: F.text,
                                                children: A,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "".concat(
                                  F.innerBg,
                                  " rounded-xl p-4 mb-6"
                                ),
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex justify-between mb-1",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: F.textSecondary,
                                        children: "Destination",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: F.textSecondary,
                                        children: "Owner Wallet",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                      (0, a.jsx)(n.OZg, {
                                        className: "text-purple-500 mr-2",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: F.text,
                                        children: "Contract Owner",
                                      }),
                                      (0, a.jsx)(n.Z1Y, {
                                        className: "".concat(
                                          F.arrowColor,
                                          " mx-4"
                                        ),
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "".concat(
                                          s ? "text-gray-300" : "text-gray-600",
                                          " text-sm"
                                        ),
                                        children: W(ee),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "".concat(
                                  F.warningBg,
                                  " rounded-xl p-4 mb-6 flex gap-3"
                                ),
                                children: [
                                  (0, a.jsx)(n.gJy, {
                                    className: "".concat(
                                      F.warningIcon,
                                      " flex-shrink-0 mt-1"
                                    ),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: "".concat(
                                          F.warningText,
                                          " font-medium"
                                        ),
                                        children: "Warning",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "text-sm ".concat(
                                          F.textSecondary
                                        ),
                                        children:
                                          "This will permanently withdraw tokens from the contract to the owner wallet. This action cannot be reversed.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("button", {
                                type: "submit",
                                disabled: P || !U || 0 >= parseFloat(U),
                                className:
                                  "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                children: P
                                  ? "Processing..."
                                  : "Withdraw ".concat(A),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "lg:col-span-2 space-y-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "".concat(
                            F.cardBg,
                            " rounded-xl p-6 shadow-lg"
                          ),
                          children: [
                            (0, a.jsx)("h3", {
                              className: "text-lg font-semibold ".concat(
                                F.text,
                                " mb-4"
                              ),
                              children: "Admin Information",
                            }),
                            (0, a.jsxs)("div", {
                              className: "space-y-3",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: F.textSecondary,
                                      children: "Contract Address",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: F.text,
                                      children: W(
                                        "0xdF091dD170338FA6C630e008eBea42d025F6c595"
                                      ),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: F.textSecondary,
                                      children: "Owner Address",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: F.text,
                                      children: W(ee),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: F.textSecondary,
                                      children: "Network",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: F.text,
                                      children: "Ethereum",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "".concat(
                            F.cardBg,
                            " rounded-xl overflow-hidden shadow-lg"
                          ),
                          children: [
                            (0, a.jsx)("div", {
                              className: "p-4 border-b ".concat(F.border),
                              children: (0, a.jsx)("h3", {
                                className: "text-lg font-semibold ".concat(
                                  F.text
                                ),
                                children: "Recent Withdrawals",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "max-h-[400px] overflow-y-auto",
                              children:
                                H && H.length > 0
                                  ? (0, a.jsx)("div", {
                                      className: "divide-y ".concat(F.divide),
                                      children: H.map((e) =>
                                        (0, a.jsxs)(
                                          "div",
                                          {
                                            className: "p-4",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex justify-between mb-1",
                                                children: [
                                                  (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      L(e.token),
                                                      (0, a.jsxs)("span", {
                                                        className: "".concat(
                                                          F.text,
                                                          " font-medium"
                                                        ),
                                                        children: [
                                                          e.amount,
                                                          " ",
                                                          e.token,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "text-xs "
                                                      .concat(
                                                        F.completedBg,
                                                        " "
                                                      )
                                                      .concat(
                                                        F.completedText,
                                                        " px-2 py-1 rounded-full"
                                                      ),
                                                    children: e.status,
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex justify-between text-sm",
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    className: F.textSecondary,
                                                    children: V(e.timestamp),
                                                  }),
                                                  (0, a.jsx)("a", {
                                                    href: "https://etherscan.io/address/".concat(
                                                      e.address
                                                    ),
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className:
                                                      "text-purple-400 hover:text-purple-300",
                                                    children: W(e.address),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          e.id
                                        )
                                      ),
                                    })
                                  : (0, a.jsx)("div", {
                                      className: "p-6 text-center ".concat(
                                        F.textMuted
                                      ),
                                      children: "No recent withdrawals",
                                    }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        };
      var et = es,
        ea = t(64146),
        ec = t(19485);
      let en = [
          "function balanceOf(address owner) view returns (uint256)",
          "function decimals() view returns (uint8)",
          "function symbol() view returns (string)",
          "function name() view returns (string)",
          "function transfer(address to, uint amount) returns (bool)",
          "function allowance(address owner, address spender) view returns (uint256)",
          "function approve(address spender, uint256 amount) returns (bool)",
        ],
        el = (e) => {
          let { isDarkMode: s } = e,
            {
              account: t,
              signer: l,
              isConnected: r,
              connectWallet: i,
              formatAddress: o,
              setReCall: d,
            } = (0, b.$6)(),
            [x, m] = (0, c.useState)(!1),
            h = {
              mainBg: s ? "bg-[#0D0B12]" : "bg-gray-100",
              cardBg: s ? "bg-[#12101A]" : "bg-white",
              innerBg: s ? "bg-[#1A1825]" : "bg-gray-100",
              tokenBg: s ? "bg-[#292838]" : "bg-gray-200",
              text: s ? "text-white" : "text-gray-900",
              textSecondary: s ? "text-gray-400" : "text-gray-600",
              textMuted: "text-gray-500",
              border: s ? "border-gray-800" : "border-gray-200",
              hover: s ? "hover:bg-gray-800/30" : "hover:bg-gray-100",
              buttonBg: s ? "bg-[#1A1825]" : "bg-gray-100",
              buttonHover: s ? "hover:bg-[#20202e]" : "hover:bg-gray-200",
              errorBg: s ? "bg-red-900/20" : "bg-red-100",
              errorText: s ? "text-red-400" : "text-red-600",
              successBg: s ? "bg-green-900/20" : "bg-green-100",
              successText: s ? "text-green-400" : "text-green-600",
            },
            [p, u] = (0, c.useState)("stablecoin"),
            [g, j] = (0, c.useState)("USDT"),
            [f, N] = (0, c.useState)(""),
            [y, v] = (0, c.useState)(""),
            [w, S] = (0, c.useState)(""),
            [k, T] = (0, c.useState)(!1),
            [B, C] = (0, c.useState)(""),
            [F, A] = (0, c.useState)(""),
            [D, U] = (0, c.useState)(""),
            [E, P] = (0, c.useState)({ USDT: "0", USDC: "0", custom: "0" }),
            [M, H] = (0, c.useState)({ copied: !1, field: null }),
            [X, O] = (0, c.useState)({
              symbol: "",
              name: "",
              decimals: 18,
              isValid: !1,
            }),
            [Y, R] = (0, c.useState)([]),
            I = () => {
              navigator.clipboard
                .writeText(t)
                .then(() => {
                  m(!0), setTimeout(() => m(!1), 2e3);
                })
                .catch((e) => {
                  console.error("Failed to copy address:", e);
                });
            },
            W = {
              USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
              USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            };
          (0, c.useEffect)(() => {
            r && l && L();
          }, [r, l, g, f, X.isValid]),
            (0, c.useEffect)(() => {
              S(""), v(""), U(""), A(""), C("");
            }, [p]);
          let L = async () => {
              if (l)
                try {
                  let e = await l.getAddress();
                  J(l);
                  let s = new ea.CH(W.USDT, en, l),
                    t = await s.balanceOf(e),
                    a = await s.decimals(),
                    c = new ea.CH(W.USDC, en, l),
                    n = await c.balanceOf(e),
                    r = await c.decimals(),
                    i = Q.bM(t, a),
                    o = Q.bM(n, r);
                  if (
                    (P((e) => ({ ...e, USDT: i, USDC: o })),
                    f && ec.UJ(f) && "custom" === p)
                  )
                    try {
                      let s = new ea.CH(f, en, l),
                        t = await s.balanceOf(e),
                        a = await s.symbol(),
                        c = await s.name(),
                        n = await s.decimals(),
                        r = Q.bM(t, n);
                      P((e) => ({ ...e, custom: r })),
                        O({ symbol: a, name: c, decimals: n, isValid: !0 });
                    } catch (e) {
                      console.error("Error fetching custom token info:", e),
                        O({ symbol: "", name: "", decimals: 18, isValid: !1 });
                    }
                } catch (e) {
                  console.error("Error fetching balances:", e);
                }
            },
            q = async (e) => {
              if ((e.preventDefault(), !y || !w || 0 >= parseFloat(w))) {
                U("Please enter a valid recipient address and amount");
                return;
              }
              if (!ec.UJ(y)) {
                U("Invalid recipient address");
                return;
              }
              A(""), U(""), C(""), T(!0);
              try {
                let e, s, t;
                if ("stablecoin" === p)
                  (e = new ea.CH(W[g], en, l)),
                    (s = await e.decimals()),
                    (t = g);
                else {
                  if (!X.isValid) throw Error("Invalid token address");
                  (e = new ea.CH(f, en, l)), (s = X.decimals), (t = X.symbol);
                }
                let a = Q.vz(w, s),
                  c = await l.getAddress(),
                  n = await e.balanceOf(c);
                if (n.lt(a)) throw Error("Insufficient ".concat(t, " balance"));
                let r = await e.transfer(y, a),
                  i = {
                    hash: r.hash,
                    token: t,
                    amount: w,
                    recipient: y,
                    timestamp: new Date().toISOString(),
                    confirmed: !1,
                    userAddress: c,
                  };
                R((e) => {
                  let s = [i, ...e];
                  return K(s, c), s;
                }),
                  await r.wait(),
                  R((e) => {
                    let s = e.map((e) =>
                      e.hash === r.hash ? { ...e, confirmed: !0 } : e
                    );
                    return K(s, c), s;
                  }),
                  C(r.hash),
                  A(
                    "Successfully transferred "
                      .concat(w, " ")
                      .concat(t, " to ")
                      .concat(o(y))
                  ),
                  S(""),
                  L(),
                  d(1);
              } catch (e) {
                console.error("Transfer error:", e),
                  U(e.message || "Transaction failed. Please try again.");
              } finally {
                T(!1);
              }
            },
            _ = (e, s) => {
              navigator.clipboard
                .writeText(e)
                .then(() => {
                  H({ copied: !0, field: s }),
                    setTimeout(() => H({ copied: !1, field: null }), 2e3);
                })
                .catch((e) => console.error("Failed to copy:", e));
            },
            V = async () => {
              if (!ec.UJ(f)) {
                U("Invalid token address"),
                  O({ symbol: "", name: "", decimals: 18, isValid: !1 });
                return;
              }
              U("");
              try {
                let e = new ea.CH(f, en, l),
                  s = await e.symbol(),
                  t = await e.name(),
                  a = await e.decimals();
                O({ symbol: s, name: t, decimals: a, isValid: !0 });
                let c = await l.getAddress(),
                  n = await e.balanceOf(c),
                  r = Q.bM(n, a);
                P((e) => ({ ...e, custom: r }));
              } catch (e) {
                console.error("Error validating token:", e),
                  U(
                    "Could not validate token. Please check the address and try again."
                  ),
                  O({ symbol: "", name: "", decimals: 18, isValid: !1 });
              }
            },
            Z = () => {
              "stablecoin" === p
                ? S(E[g])
                : "custom" === p && X.isValid && S(E.custom);
            },
            K = (e, s) => {
              try {
                localStorage.setItem(
                  "transactions_".concat(s),
                  JSON.stringify(e)
                );
              } catch (e) {
                console.error("Error saving to localStorage:", e);
              }
            },
            z = (e) => {
              try {
                let s = localStorage.getItem("transactions_".concat(e));
                if (s) return JSON.parse(s);
                return [];
              } catch (e) {
                return console.error("Error loading from localStorage:", e), [];
              }
            },
            J = async (e) => {
              if (e)
                try {
                  let s = await e.getAddress(),
                    t = z(s);
                  R(t);
                } catch (e) {
                  console.error("Error initializing transactions:", e);
                }
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: ""
                  .concat(h.header, " py-4 px-4 sm:px-6 mb-6 border-b ")
                  .concat(h.border),
                children: (0, a.jsx)("div", {
                  className: "mx-auto",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                    children: [
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)("h1", {
                          className: "text-xl sm:text-2xl font-bold ".concat(
                            h.text
                          ),
                          children: "Transaction",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center ".concat(
                          s ? "bg-[#1A1825]" : "bg-gray-100",
                          " rounded-lg px-3 py-2 gap-3"
                        ),
                        children: [
                          (0, a.jsx)(n.OZg, { className: "text-purple-500" }),
                          (0, a.jsx)("span", {
                            className: h.text,
                            children: o(t),
                          }),
                          (0, a.jsx)("button", {
                            onClick: I,
                            className: ""
                              .concat(h.textSecondary, " hover:")
                              .concat(h.text, " transition-colors"),
                            title: "Copy to clipboard",
                            children: x
                              ? (0, a.jsx)(n.l_A, {
                                  className: "text-green-500",
                                })
                              : (0, a.jsx)(n.esY, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "min-h-screen ".concat(h.mainBg, " "),
                children: (0, a.jsx)("div", {
                  className: "",
                  children: (0, a.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                      (0, a.jsx)("div", {
                        className: "lg:col-span-2",
                        children: (0, a.jsxs)("div", {
                          className: "".concat(
                            h.cardBg,
                            " rounded-xl overflow-hidden shadow-lg"
                          ),
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex border-b ".concat(h.border),
                              children: [
                                (0, a.jsxs)("button", {
                                  onClick: () => u("stablecoin"),
                                  className:
                                    "flex-1 py-4 px-4 flex justify-center items-center gap-2 ".concat(
                                      "stablecoin" === p
                                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                        : ""
                                            .concat(h.textSecondary, " ")
                                            .concat(h.hover)
                                    ),
                                  children: [
                                    (0, a.jsx)($.lP6, {
                                      className: "text-green-500",
                                    }),
                                    (0, a.jsx)("span", {
                                      children: "Stablecoins",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("button", {
                                  onClick: () => u("custom"),
                                  className:
                                    "flex-1 py-4 px-4 flex justify-center items-center gap-2 ".concat(
                                      "custom" === p
                                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                        : ""
                                            .concat(h.textSecondary, " ")
                                            .concat(h.hover)
                                    ),
                                  children: [
                                    (0, a.jsx)(n.qau, {}),
                                    (0, a.jsx)("span", {
                                      children: "Custom ERC20",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            r
                              ? (0, a.jsxs)("div", {
                                  className: "p-6",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "".concat(
                                        h.innerBg,
                                        " rounded-xl p-4 mb-6 flex items-center justify-between"
                                      ),
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            (0, a.jsx)(n.OZg, {
                                              className: "text-purple-500",
                                            }),
                                            (0, a.jsxs)("div", {
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className:
                                                    h.textSecondary +
                                                    " text-sm",
                                                  children: "Connected as",
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: h.text,
                                                  children: o(t),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("button", {
                                          onClick: () => _(t, "account"),
                                          className: ""
                                            .concat(h.textSecondary, " hover:")
                                            .concat(h.text, " p-2"),
                                          title: "Copy address",
                                          children:
                                            M.copied && "account" === M.field
                                              ? (0, a.jsx)(n.l_A, {
                                                  className: "text-green-500",
                                                })
                                              : (0, a.jsx)(n.GON, {}),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("form", {
                                      onSubmit: q,
                                      children: [
                                        "stablecoin" === p &&
                                          (0, a.jsxs)("div", {
                                            className: "mb-6",
                                            children: [
                                              (0, a.jsx)("label", {
                                                className: "block ".concat(
                                                  h.textSecondary,
                                                  " mb-2"
                                                ),
                                                children: "Select Token",
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: "flex space-x-4",
                                                children: [
                                                  (0, a.jsxs)("button", {
                                                    type: "button",
                                                    onClick: () => j("USDT"),
                                                    className:
                                                      "flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 ".concat(
                                                        "USDT" === g
                                                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                                          : ""
                                                              .concat(
                                                                h.buttonBg,
                                                                " "
                                                              )
                                                              .concat(
                                                                h.textSecondary,
                                                                " "
                                                              )
                                                              .concat(
                                                                h.buttonHover
                                                              )
                                                      ),
                                                    children: [
                                                      (0, a.jsx)($.lP6, {
                                                        className:
                                                          "text-green-500",
                                                      }),
                                                      (0, a.jsx)("span", {
                                                        children: "USDT",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, a.jsxs)("button", {
                                                    type: "button",
                                                    onClick: () => j("USDC"),
                                                    className:
                                                      "flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-2 ".concat(
                                                        "USDC" === g
                                                          ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                                          : ""
                                                              .concat(
                                                                h.buttonBg,
                                                                " "
                                                              )
                                                              .concat(
                                                                h.textSecondary,
                                                                " "
                                                              )
                                                              .concat(
                                                                h.buttonHover
                                                              )
                                                      ),
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        className:
                                                          "text-blue-500 font-semibold",
                                                        children: (0, a.jsx)(
                                                          "img",
                                                          {
                                                            src: "/usdc.svg",
                                                            style: {
                                                              width: "1rem",
                                                            },
                                                          }
                                                        ),
                                                      }),
                                                      (0, a.jsx)("span", {
                                                        children: "USDC",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        "custom" === p &&
                                          (0, a.jsxs)("div", {
                                            className: "mb-6",
                                            children: [
                                              (0, a.jsx)("label", {
                                                className: "block ".concat(
                                                  h.textSecondary,
                                                  " mb-2"
                                                ),
                                                children: "Token Address",
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                  (0, a.jsx)("input", {
                                                    type: "text",
                                                    value: f,
                                                    onChange: (e) =>
                                                      N(e.target.value),
                                                    placeholder: "0x...",
                                                    className: ""
                                                      .concat(h.innerBg, " ")
                                                      .concat(
                                                        h.text,
                                                        " rounded-l-xl p-4 focus:outline-none w-full"
                                                      ),
                                                  }),
                                                  (0, a.jsx)("button", {
                                                    type: "button",
                                                    onClick: V,
                                                    className:
                                                      "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 rounded-r-xl",
                                                    children: (0, a.jsx)(
                                                      n.U41,
                                                      {}
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              X.isValid &&
                                                (0, a.jsxs)("div", {
                                                  className: "mt-2 text-sm",
                                                  children: [
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "text-purple-400",
                                                      children: X.name,
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className: "".concat(
                                                        h.textSecondary,
                                                        " mx-2"
                                                      ),
                                                      children: "|",
                                                    }),
                                                    (0, a.jsx)("span", {
                                                      className: h.text,
                                                      children: X.symbol,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        (0, a.jsx)("div", {
                                          className: "mb-6",
                                          children: (0, a.jsxs)("div", {
                                            className:
                                              "flex justify-between mb-2",
                                            children: [
                                              (0, a.jsx)("label", {
                                                className: h.textSecondary,
                                                children: "Your Balance",
                                              }),
                                              (0, a.jsx)("span", {
                                                className: h.textSecondary,
                                                children:
                                                  "stablecoin" === p
                                                    ? ""
                                                        .concat(
                                                          parseFloat(
                                                            E[g]
                                                          ).toFixed(2),
                                                          " "
                                                        )
                                                        .concat(g)
                                                    : X.isValid
                                                    ? ""
                                                        .concat(
                                                          parseFloat(
                                                            E.custom
                                                          ).toFixed(4),
                                                          " "
                                                        )
                                                        .concat(X.symbol)
                                                    : "0",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "mb-6",
                                          children: [
                                            (0, a.jsx)("label", {
                                              className: "block ".concat(
                                                h.textSecondary,
                                                " mb-2"
                                              ),
                                              children: "Recipient Address",
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "".concat(
                                                h.innerBg,
                                                " rounded-xl p-4 flex items-center"
                                              ),
                                              children: [
                                                (0, a.jsx)("input", {
                                                  type: "text",
                                                  value: y,
                                                  onChange: (e) =>
                                                    v(e.target.value),
                                                  placeholder: "0x...",
                                                  className:
                                                    "bg-transparent ".concat(
                                                      h.text,
                                                      " focus:outline-none w-full"
                                                    ),
                                                  required: !0,
                                                }),
                                                (0, a.jsx)("button", {
                                                  type: "button",
                                                  onClick: () => {
                                                    navigator.clipboard
                                                      .readText()
                                                      .then((e) => {
                                                        e && ec.UJ(e) && v(e);
                                                      });
                                                  },
                                                  className: ""
                                                    .concat(
                                                      h.textSecondary,
                                                      " hover:"
                                                    )
                                                    .concat(h.text),
                                                  title: "Paste from clipboard",
                                                  children: (0, a.jsx)(
                                                    n.GON,
                                                    {}
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "mb-6",
                                          children: [
                                            (0, a.jsx)("label", {
                                              className: "block ".concat(
                                                h.textSecondary,
                                                " mb-2"
                                              ),
                                              children: "Amount",
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "".concat(
                                                h.innerBg,
                                                " rounded-xl p-4 flex items-center"
                                              ),
                                              children: [
                                                (0, a.jsx)("input", {
                                                  type: "number",
                                                  value: w,
                                                  onChange: (e) =>
                                                    S(e.target.value),
                                                  placeholder: "0.0",
                                                  step: "any",
                                                  min: "0",
                                                  className:
                                                    "bg-transparent ".concat(
                                                      h.text,
                                                      " text-xl focus:outline-none w-full"
                                                    ),
                                                  required: !0,
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    (0, a.jsx)("button", {
                                                      type: "button",
                                                      onClick: Z,
                                                      className:
                                                        "text-purple-400 text-sm hover:text-purple-300 mr-2",
                                                      children: "MAX",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className: ""
                                                        .concat(
                                                          h.tokenBg,
                                                          " rounded-full px-3 py-1 "
                                                        )
                                                        .concat(h.text),
                                                      children:
                                                        "stablecoin" === p
                                                          ? g
                                                          : X.isValid
                                                          ? X.symbol
                                                          : "TOKEN",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        D &&
                                          (0, a.jsxs)("div", {
                                            className: "mb-6 p-4 rounded-xl "
                                              .concat(h.errorBg, " ")
                                              .concat(
                                                h.errorText,
                                                " flex items-start gap-3"
                                              ),
                                            children: [
                                              (0, a.jsx)(n.DAO, {
                                                className: "mt-1",
                                              }),
                                              (0, a.jsx)("span", {
                                                children: D,
                                              }),
                                            ],
                                          }),
                                        F &&
                                          (0, a.jsxs)("div", {
                                            className: "mb-6 p-4 rounded-xl "
                                              .concat(h.successBg, " ")
                                              .concat(
                                                h.successText,
                                                " flex items-start gap-3"
                                              ),
                                            children: [
                                              (0, a.jsx)(n.l_A, {
                                                className: "mt-1",
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  (0, a.jsx)("p", {
                                                    children: F,
                                                  }),
                                                  B &&
                                                    (0, a.jsx)("a", {
                                                      href: "https://etherscan.io/tx/".concat(
                                                        B
                                                      ),
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      className:
                                                        "text-purple-400 hover:text-purple-300 mt-2 inline-block",
                                                      children:
                                                        "View on Etherscan",
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        (0, a.jsx)("button", {
                                          type: "submit",
                                          disabled:
                                            k ||
                                            !y ||
                                            !w ||
                                            ("custom" === p && !X.isValid),
                                          className:
                                            "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                          children: k
                                            ? "Processing..."
                                            : "Transfer Token",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, a.jsxs)("div", {
                                  className:
                                    "p-6 flex flex-col items-center justify-center py-12",
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: "".concat(
                                        h.textSecondary,
                                        " mb-6 text-center"
                                      ),
                                      children:
                                        "Connect your wallet to transfer tokens",
                                    }),
                                    (0, a.jsx)("button", {
                                      onClick: i,
                                      className:
                                        "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-xl transition-colors",
                                      children: "Connect Wallet",
                                    }),
                                  ],
                                }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "lg:col-span-1",
                        children: (0, a.jsxs)("div", {
                          className: "".concat(
                            h.cardBg,
                            " rounded-xl overflow-hidden h-full shadow-lg"
                          ),
                          children: [
                            (0, a.jsxs)("div", {
                              className: "p-4 border-b ".concat(
                                h.border,
                                " flex justify-between items-center"
                              ),
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "text-lg font-semibold ".concat(
                                    h.text
                                  ),
                                  children: "Recent Transfers",
                                }),
                                (0, a.jsx)(n.ceS, {
                                  className: h.textSecondary,
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "p-4 space-y-4 max-h-[500px] overflow-y-auto",
                              children:
                                Y && Y.length > 0
                                  ? Y.map((e, t) =>
                                      (0, a.jsxs)(
                                        "div",
                                        {
                                          className: "".concat(
                                            h.innerBg,
                                            " rounded-xl p-4"
                                          ),
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex justify-between items-center mb-2",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: "".concat(
                                                    h.text,
                                                    " font-medium"
                                                  ),
                                                  children: e.token,
                                                }),
                                                (0, a.jsxs)("a", {
                                                  href: "https://etherscan.io/tx/".concat(
                                                    e.hash
                                                  ),
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  className:
                                                    "text-purple-400 hover:text-purple-300 text-xs",
                                                  children: [
                                                    e.hash.substring(0, 6),
                                                    "...",
                                                    e.hash.substring(
                                                      e.hash.length - 4
                                                    ),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex items-center gap-2 ".concat(
                                                  h.textSecondary,
                                                  " text-sm"
                                                ),
                                              children: [
                                                (0, a.jsx)("span", {
                                                  children: parseFloat(
                                                    e.amount
                                                  ).toFixed(2),
                                                }),
                                                (0, a.jsx)(n.Z1Y, {
                                                  className: s
                                                    ? "text-gray-600"
                                                    : "text-gray-400",
                                                }),
                                                (0, a.jsx)("span", {
                                                  children: o(e.recipient),
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "mt-2 text-xs ".concat(
                                                h.textMuted
                                              ),
                                              children: [
                                                e.timestamp.toLocaleString(),
                                                e.confirmed &&
                                                  (0, a.jsxs)("span", {
                                                    className: "ml-2 ".concat(
                                                      h.successText
                                                    ),
                                                    children: [
                                                      (0, a.jsx)(n.l_A, {
                                                        className:
                                                          "inline-block",
                                                      }),
                                                      " Confirmed",
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    )
                                  : (0, a.jsx)("div", {
                                      className: "text-center py-8 ".concat(
                                        h.textMuted
                                      ),
                                      children: "No recent transfers",
                                    }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
      var er = el,
        ei = t(33556);
      let eo = (e) => {
        let { isDarkMode: s } = e,
          t = {
            mainBg: s ? "bg-[#0D0B12]" : "bg-gray-100",
            cardBg: s ? "bg-[#12101A]" : "bg-white",
            innerBg: s ? "bg-[#1A1825]" : "bg-gray-100",
            text: s ? "text-white" : "text-gray-900",
            textSecondary: s ? "text-gray-400" : "text-gray-600",
            textSocial: s ? "text-gray-300" : "text-gray-700",
            errorBg: s ? "bg-red-900/20" : "bg-red-100",
            errorText: s ? "text-red-400" : "text-red-600",
            successBg: s ? "bg-green-900/20" : "bg-green-100",
            successText: s ? "text-green-400" : "text-green-600",
            iconBg: s ? "bg-purple-900/30" : "bg-purple-100",
            socialBg: s ? "bg-[#1A1825]" : "bg-gray-100",
            hoverTwitter: s ? "hover:bg-blue-900/20" : "hover:bg-blue-100",
            hoverTelegram: s ? "hover:bg-blue-900/20" : "hover:bg-blue-100",
            hoverDiscord: s ? "hover:bg-purple-900/20" : "hover:bg-purple-100",
            hoverGithub: s ? "hover:bg-gray-700/20" : "hover:bg-gray-200",
            faqBtn: s
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-purple-500 hover:bg-purple-600",
          },
          [c, l] = (0, ei.cI)("mkgjqpzq");
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: "".concat(t.mainBg, " min-h-screen "),
            children: (0, a.jsxs)("div", {
              className: " mx-auto",
              children: [
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                  children: [
                    (0, a.jsx)("div", {
                      className: "lg:col-span-2",
                      children: (0, a.jsxs)("div", {
                        className: "".concat(
                          t.cardBg,
                          " rounded-xl overflow-hidden p-6 shadow-lg"
                        ),
                        children: [
                          (0, a.jsx)("h2", {
                            className: "text-xl font-bold ".concat(
                              t.text,
                              " mb-6"
                            ),
                            children: "Send Us a Message",
                          }),
                          (0, a.jsxs)("form", {
                            onSubmit: l,
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4",
                                children: [
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsxs)("label", {
                                        htmlFor: "name",
                                        className: "block ".concat(
                                          t.textSecondary,
                                          " mb-2"
                                        ),
                                        children: [
                                          "Name ",
                                          (0, a.jsx)("span", {
                                            className: "text-purple-400",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("input", {
                                        type: "text",
                                        id: "name",
                                        name: "name",
                                        placeholder: "Your name",
                                        className: "w-full "
                                          .concat(t.innerBg, " ")
                                          .concat(
                                            t.text,
                                            " rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                          ),
                                        required: !0,
                                      }),
                                      (0, a.jsx)(ei.p8, {
                                        prefix: "Name",
                                        field: "name",
                                        errors: c.errors,
                                        className: t.errorText,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsxs)("label", {
                                        htmlFor: "email",
                                        className: "block ".concat(
                                          t.textSecondary,
                                          " mb-2"
                                        ),
                                        children: [
                                          "Email ",
                                          (0, a.jsx)("span", {
                                            className: "text-purple-400",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        placeholder: "your@email.com",
                                        className: "w-full "
                                          .concat(t.innerBg, " ")
                                          .concat(
                                            t.text,
                                            " rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                          ),
                                        required: !0,
                                      }),
                                      (0, a.jsx)(ei.p8, {
                                        prefix: "Email",
                                        field: "email",
                                        errors: c.errors,
                                        className: t.errorText,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mb-4",
                                children: [
                                  (0, a.jsx)("label", {
                                    htmlFor: "subject",
                                    className: "block ".concat(
                                      t.textSecondary,
                                      " mb-2"
                                    ),
                                    children: "Subject",
                                  }),
                                  (0, a.jsx)("input", {
                                    type: "text",
                                    id: "subject",
                                    name: "subject",
                                    placeholder: "What's this regarding?",
                                    className: "w-full "
                                      .concat(t.innerBg, " ")
                                      .concat(
                                        t.text,
                                        " rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                      ),
                                  }),
                                  (0, a.jsx)(ei.p8, {
                                    prefix: "Subject",
                                    field: "subject",
                                    errors: c.errors,
                                    className: t.errorText,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mb-6",
                                children: [
                                  (0, a.jsxs)("label", {
                                    htmlFor: "message",
                                    className: "block ".concat(
                                      t.textSecondary,
                                      " mb-2"
                                    ),
                                    children: [
                                      "Message ",
                                      (0, a.jsx)("span", {
                                        className: "text-purple-400",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("textarea", {
                                    id: "message",
                                    name: "message",
                                    rows: "5",
                                    placeholder: "Your message here...",
                                    className: "w-full "
                                      .concat(t.innerBg, " ")
                                      .concat(
                                        t.text,
                                        " rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                      ),
                                    required: !0,
                                  }),
                                  (0, a.jsx)(ei.p8, {
                                    prefix: "Message",
                                    field: "message",
                                    errors: c.errors,
                                    className: t.errorText,
                                  }),
                                ],
                              }),
                              (0, a.jsx)(ei.p8, {
                                errors: c.errors,
                                className: "mb-4 p-3 rounded-lg "
                                  .concat(t.errorBg, " ")
                                  .concat(
                                    t.errorText,
                                    " flex items-start gap-2"
                                  ),
                              }),
                              c.succeeded &&
                                (0, a.jsxs)("div", {
                                  className: "mb-4 p-3 rounded-lg "
                                    .concat(t.successBg, " ")
                                    .concat(
                                      t.successText,
                                      " flex items-start gap-2"
                                    ),
                                  children: [
                                    (0, a.jsx)(n.l_A, {
                                      className: "mt-1 flex-shrink-0",
                                    }),
                                    (0, a.jsx)("span", {
                                      children:
                                        "Your message has been sent successfully! We'll get back to you soon.",
                                    }),
                                  ],
                                }),
                              (0, a.jsx)("button", {
                                type: "submit",
                                disabled: c.submitting,
                                className:
                                  "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
                                children: c.submitting
                                  ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)("span", {
                                          className:
                                            "inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
                                        }),
                                        "Sending...",
                                      ],
                                    })
                                  : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsx)(n.Y2X, {}),
                                        "Send Message",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "lg:col-span-1",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "".concat(
                            t.cardBg,
                            " rounded-xl p-6 mb-6 shadow-lg"
                          ),
                          children: [
                            (0, a.jsx)("h2", {
                              className: "text-xl font-bold ".concat(
                                t.text,
                                " mb-6"
                              ),
                              children: "Contact Information",
                            }),
                            (0, a.jsx)("div", {
                              className: "space-y-4",
                              children: (0, a.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "".concat(
                                      t.iconBg,
                                      " p-3 rounded-lg"
                                    ),
                                    children: (0, a.jsx)(n.SRX, {
                                      className: "text-purple-400",
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    children: [
                                      (0, a.jsx)("h3", {
                                        className: t.text + " font-medium",
                                        children: "Email",
                                      }),
                                      (0, a.jsx)("a", {
                                        href: "mailto:support@lightchain.com",
                                        className: "".concat(
                                          t.textSecondary,
                                          " hover:text-purple-400 transition-colors"
                                        ),
                                        children: "support@futuresyncx.com",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "".concat(
                            t.cardBg,
                            " rounded-xl p-6 shadow-lg"
                          ),
                          children: [
                            (0, a.jsx)("h2", {
                              className: "text-xl font-bold ".concat(
                                t.text,
                                " mb-6"
                              ),
                              children: "Connect With Us",
                            }),
                            (0, a.jsxs)("div", {
                              className: "grid grid-cols-2 gap-4",
                              children: [
                                (0, a.jsxs)("a", {
                                  href: "https://x.com/futuresyncx",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "flex items-center gap-3 p-3 "
                                    .concat(t.socialBg, " rounded-lg ")
                                    .concat(
                                      t.hoverTwitter,
                                      " transition-colors"
                                    ),
                                  children: [
                                    (0, a.jsx)(n.fWC, {
                                      className: "text-blue-400",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: t.textSocial,
                                      children: "Twitter",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("a", {
                                  href: "https://t.me/futuresyncxaiai",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "flex items-center gap-3 p-3 "
                                    .concat(t.socialBg, " rounded-lg ")
                                    .concat(
                                      t.hoverTelegram,
                                      " transition-colors"
                                    ),
                                  children: [
                                    (0, a.jsx)(n.Ww5, {
                                      className: "text-blue-500",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: t.textSocial,
                                      children: "Telegram",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "mt-12 ".concat(
                    t.cardBg,
                    " rounded-xl p-6 text-center shadow-lg"
                  ),
                  children: [
                    (0, a.jsx)("h2", {
                      className: "text-xl font-bold ".concat(t.text, " mb-4"),
                      children: "Frequently Asked Questions",
                    }),
                    (0, a.jsx)("p", {
                      className: "".concat(t.textSecondary, " mb-6"),
                      children:
                        "Find answers to common questions about our platform, token, and services.",
                    }),
                    (0, a.jsx)("a", {
                      href: "/#FAQ",
                      className: "".concat(
                        t.faqBtn,
                        " bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                      ),
                      children: "Visit FAQ Page",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var ed = eo;
      let ex = (e) => {
          let { isOpen: s, onClose: t, isDarkMode: l } = e,
            [r, i] = (0, c.useState)(""),
            [o, d] = (0, c.useState)("ETH"),
            [x, m] = (0, c.useState)(0),
            h = { ETH: 1010101, USDT: 556, USDC: 556 },
            p = {
              ETH: { min: 0.001, max: 2 },
              USDT: { min: 1, max: 4e3 },
              USDC: { min: 1, max: 4e3 },
            };
          (0, c.useEffect)(() => {
            u();
          }, [r, o]);
          let u = () => {
              if (!r || isNaN(r) || r <= 0) {
                m(0);
                return;
              }
              let e = parseFloat(r) * h[o];
              m(e);
            },
            g = (e) => {
              let s = e.target.value;
              ("" === s || /^\d*\.?\d*$/.test(s)) && i(s);
            },
            j = (e) => {
              i(e.toString());
            };
          return s
            ? (0, a.jsx)("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: (0, a.jsxs)("div", {
                  className: ""
                    .concat(
                      l ? "bg-[#13101A]" : "bg-white",
                      " rounded-lg p-6 max-w-md w-full "
                    )
                    .concat(l ? "text-white" : "text-gray-900", " shadow-xl"),
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex justify-between items-center mb-4",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-xl font-semibold ".concat(
                            l ? "text-purple-400" : "text-purple-600"
                          ),
                          children: "Token Calculator",
                        }),
                        (0, a.jsx)("button", {
                          onClick: t,
                          className: l
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-gray-900",
                          children: (0, a.jsx)(n.aHS, {}),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "mb-4",
                      children: [
                        (0, a.jsxs)("label", {
                          className: "block mb-2",
                          children: ["Enter ", o, " Amount"],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex",
                          children: [
                            (0, a.jsx)("input", {
                              type: "text",
                              value: r,
                              onChange: g,
                              placeholder: "0.0",
                              className: ""
                                .concat(l ? "bg-[#1A1825]" : "bg-gray-100", " ")
                                .concat(
                                  l ? "text-white" : "text-gray-900",
                                  " p-3 rounded-l-md w-full outline-none"
                                ),
                            }),
                            (0, a.jsx)("div", {
                              className: "".concat(
                                l ? "bg-[#1A1825]" : "bg-gray-100",
                                " flex items-center px-4 rounded-r-md"
                              ),
                              children: (0, a.jsxs)("select", {
                                value: o,
                                onChange: (e) => d(e.target.value),
                                className: ""
                                  .concat(
                                    l ? "bg-[#1A1825]" : "bg-gray-100",
                                    " "
                                  )
                                  .concat(
                                    l ? "text-white" : "text-gray-900",
                                    " outline-none"
                                  ),
                                children: [
                                  (0, a.jsx)("option", {
                                    value: "ETH",
                                    children: "ETH",
                                  }),
                                  (0, a.jsx)("option", {
                                    value: "USDT",
                                    children: "USDT",
                                  }),
                                  (0, a.jsx)("option", {
                                    value: "USDC",
                                    children: "USDC",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "".concat(
                        l ? "bg-[#1A1825]" : "bg-gray-100",
                        " p-4 rounded-md mb-4"
                      ),
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-sm ".concat(
                            l ? "text-gray-300" : "text-gray-600",
                            " mb-2"
                          ),
                          children: "Tokens You Will Receive",
                        }),
                        (0, a.jsx)("div", {
                          className: "flex items-center justify-between",
                          children: (0, a.jsxs)("h3", {
                            className: "text-2xl font-bold ".concat(
                              l ? "text-white" : "text-gray-900"
                            ),
                            children: [x.toLocaleString(), " ", "FSX"],
                          }),
                        }),
                        (0, a.jsxs)("p", {
                          className: "text-sm ".concat(
                            l ? "text-gray-400" : "text-gray-500",
                            " mt-1"
                          ),
                          children: [
                            "Rate: ",
                            h[o].toLocaleString(),
                            " tokens per ",
                            o,
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "mb-4",
                      children: [
                        (0, a.jsx)("p", {
                          className: "mb-2",
                          children: "Quick Calculate",
                        }),
                        (0, a.jsx)("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: {
                            ETH: [0.1, 0.5, 1, 2],
                            USDT: [50, 100, 500, 1e3],
                            USDC: [50, 100, 500, 1e3],
                          }[o].map((e, s) =>
                            (0, a.jsxs)(
                              "button",
                              {
                                onClick: () => j(e),
                                className: ""
                                  .concat(
                                    l ? "bg-[#1A1825]" : "bg-gray-100",
                                    " "
                                  )
                                  .concat(
                                    l
                                      ? "hover:bg-gray-600"
                                      : "hover:bg-gray-200",
                                    " py-2 rounded-md text-center transition-colors"
                                  ),
                                children: [e, " ", o],
                              },
                              s
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "".concat(
                        l ? "bg-[#1A1825]" : "bg-gray-100",
                        " p-4 rounded-md mb-4"
                      ),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex justify-between mb-2",
                          children: [
                            (0, a.jsx)("span", {
                              children: "Price per Token:",
                            }),
                            (0, a.jsxs)("span", {
                              children: [
                                { ETH: 99e-8, USDT: 0.0018, USDC: 0.0018 }[o],
                                " ",
                                o,
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, a.jsxs)("span", {
                              children: ["Tokens per ", o, ":"],
                            }),
                            (0, a.jsx)("span", {
                              children: h[o].toLocaleString(),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "".concat(
                        l ? "bg-[#1A1825]" : "bg-gray-100",
                        " p-4 rounded-md"
                      ),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex justify-between mb-2",
                          children: [
                            (0, a.jsx)("span", { children: "Minimum Buy:" }),
                            (0, a.jsxs)("span", {
                              children: [p[o].min, " ", o],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, a.jsx)("span", { children: "Maximum Buy:" }),
                            (0, a.jsxs)("span", {
                              children: [p[o].max, " ", o],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        },
        em = (e) => {
          let { isDarkMode: s } = e,
            [t, l] = (0, c.useState)(!1);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("button", {
                onClick: () => l(!0),
                className:
                  "\n        bg-gradient-to-r from-purple-500 to-pink-500 \n        hover:from-purple-600 hover:to-pink-600 \n        text-white py-2 px-4 \n        ".concat(
                    s ? "rounded" : "rounded-lg shadow",
                    "\n        flex items-center transition-all duration-200\n      "
                  ),
                children: [
                  (0, a.jsx)(n.T_s, { className: "mr-2" }),
                  "Calculate Tokens",
                ],
              }),
              (0, a.jsx)(ex, {
                isOpen: t,
                onClose: () => l(!1),
                isDarkMode: s,
              }),
            ],
          });
        };
      var eh = em,
        ep = t(83454);
      ep.env.NEXT_PUBLIC_APY_RATE, ep.env.NEXT_PUBLIC_MIN_STAKE_AMOUNT;
      let eu = ep.env.NEXT_PUBLIC_LOCK_PERIODS || "30,90,180,365",
        eg = (e) => {
          let { isDarkMode: s } = e,
            {
              account: t,
              isConnected: l,
              isConnecting: r,
              contractInfo: i,
              tokenBalances: o,
              error: d,
              connectWallet: x,
              disconnectWallet: m,
              switchNetwork: h,
              stakeTokens: p,
              unstakeTokens: u,
              harvestRewards: g,
              getUserStakes: j,
              getAllStakes: f,
              formatAddress: N,
              formatTokenAmount: y,
              refreshContractData: v,
              getContractInfo: w,
              getTokenBalances: k,
              isOwner: T,
              unstakeEarly: B,
              reCall: C,
            } = (0, b.$6)(),
            [F, A] = (0, c.useState)(""),
            [D, U] = (0, c.useState)(eu.split(",")[0]),
            [E, P] = (0, c.useState)("0"),
            [M, H] = (0, c.useState)([]),
            [X, O] = (0, c.useState)(!1),
            [Y, R] = (0, c.useState)("stake"),
            [I, W] = (0, c.useState)(!1),
            [L, $] = (0, c.useState)(!1),
            [q, _] = (0, c.useState)(null),
            [V, Z] = (0, c.useState)(),
            [K, z] = (0, c.useState)(),
            J = {
              bg: s ? "bg-[#12101A]" : "bg-white",
              inputBg: s ? "bg-[#1A1825]" : "bg-gray-100",
              text: s ? "text-white" : "text-gray-900",
              textSecondary: s ? "text-gray-400" : "text-gray-600",
              textMuted: "text-gray-500",
              border: s ? "border-gray-800" : "border-gray-200",
              hover: s ? "hover:bg-gray-800" : "hover:bg-gray-100",
              progressBg: s ? "bg-gray-800" : "bg-gray-300",
              cardBg: s ? "bg-[#1A1825]" : "bg-gray-100",
            },
            G = (e) => {
              let s = parseFloat(null == V ? void 0 : V.baseAPY);
              switch (e) {
                case "30":
                default:
                  return s;
                case "90":
                  return 1.5 * s;
                case "180":
                  return 2 * s;
                case "365":
                  return 3 * s;
              }
            };
          (0, c.useEffect)(() => {
            let e = async () => {
              if (t)
                try {
                  let e = await w();
                  Z(e), await k(), z(e);
                  let s = await j(t);
                  H(s.reverse());
                } catch (e) {
                  console.error("Error fetching user stakes:", e);
                }
            };
            e();
          }, [t, C]),
            (0, c.useEffect)(() => {
              if (F && D) {
                let e = parseFloat(F),
                  s = parseInt(D),
                  t = G(D);
                P((e * (t / 365 / 100) * s).toFixed(4));
              } else P("0");
            }, [F, D]),
            (0, c.useEffect)(() => {
              let e = async () => {
                if (t) {
                  await v();
                  try {
                    let e = await j(t);
                    H(e.reverse());
                  } catch (e) {
                    console.error("Error fetching user stakes:", e);
                  }
                }
              };
              e();
            }, [t, v, C]);
          let Q = async (e) => {
              e.preventDefault(), O(!0);
              try {
                let e = await p(F, parseInt(D));
                if (e && (A(""), await v(), t)) {
                  let e = await j(t);
                  H(e.reverse());
                }
              } catch (e) {
                console.error("Error staking tokens:", e);
              } finally {
                O(!1);
              }
            },
            ee = async (e) => {
              _(e), $(!0);
              try {
                let s = await u(e);
                if (s && (await v(), t)) {
                  let e = await j(t);
                  H(e.reverse());
                }
              } catch (e) {
                console.error("Error unstaking tokens:", e);
              } finally {
                $(!1), _(null);
              }
            },
            es = async (e) => {
              if (
                (_(e),
                $(!0),
                confirm(
                  "Are you sure you want to unstake early? A 5% penalty will be applied to your principal amount."
                ))
              )
                try {
                  let s = await B(e);
                  if (s && (await v(), t)) {
                    let e = await j(t);
                    H(e.reverse());
                  }
                } catch (e) {
                  console.error("Error unstaking tokens early:", e);
                } finally {
                  $(!1), _(null);
                }
              else $(!1), _(null);
            },
            et = async (e) => {
              _(e), W(!0);
              try {
                let s = await g(e);
                if (s && (await v(), t)) {
                  let e = await j(t);
                  H(e.reverse());
                }
              } catch (e) {
                console.error("Error harvesting rewards:", e);
              } finally {
                W(!1), _(null);
              }
            },
            ea = (e) => {
              if (!e) return "0";
              let s = Number(e);
              return s >= 1e9
                ? (s / 1e9).toFixed(2) + " B"
                : s >= 1e6
                ? (s / 1e6).toFixed(2) + " M"
                : s >= 1e3
                ? (s / 1e3).toFixed(2) + " K"
                : s.toFixed(2);
            },
            ec = (e, s) => {
              let t = new Date(1e3 * parseInt(e)),
                a = new Date(t.getTime() + 864e5 * parseInt(s)),
                c = new Date();
              return c >= a
                ? "Unlocked"
                : "".concat(Math.floor((a - c) / 864e5), " days");
            };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              className: "",
              children: (0, a.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                  (0, a.jsx)("div", {
                    className: "lg:col-span-1",
                    children: (0, a.jsxs)("div", {
                      className: "".concat(
                        J.bg,
                        " rounded-xl overflow-hidden shadow-lg"
                      ),
                      children: [
                        (0, a.jsx)("div", {
                          className: "p-6 border-b ".concat(J.border),
                          children: (0, a.jsxs)("h2", {
                            className: "text-xl font-bold ".concat(
                              J.text,
                              " flex items-center"
                            ),
                            children: [
                              (0, a.jsx)(n.NMh, {
                                className: "mr-2 text-purple-400",
                              }),
                              "Staking Stats",
                            ],
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "p-6 space-y-4",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-medium text-purple-400 mb-3",
                                  children: "Staking Information",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: J.textSecondary,
                                          children: "Token:",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: J.text,
                                          children: "FSX",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: J.textSecondary,
                                          children: "Base APY:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: J.text,
                                          children: [
                                            null == V ? void 0 : V.baseAPY,
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: J.textSecondary,
                                          children: "Total Staked:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: J.text,
                                          children: [
                                            ea(
                                              (null == V
                                                ? void 0
                                                : V.totalStaked) || 0
                                            ),
                                            " ",
                                            "FSX",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: J.textSecondary,
                                          children: "Min Stake Amount:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: J.text,
                                          children: [
                                            null == V
                                              ? void 0
                                              : V.minStakeAmount,
                                            " ",
                                            "FSX",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-medium text-purple-400 mb-3",
                                  children: "Your Staking Overview",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: J.textSecondary,
                                          children: "Your Balance:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: J.text,
                                          children: [
                                            ea(
                                              (null == o
                                                ? void 0
                                                : o.userFsxBlanace) || 0
                                            ),
                                            " ",
                                            "FSX",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: J.textSecondary,
                                          children: "Total Staked:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: J.text,
                                          children: [
                                            ea(
                                              (null == K
                                                ? void 0
                                                : K.userStaked) || 0
                                            ),
                                            " ",
                                            "FSX",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: J.textSecondary,
                                          children: "Pending Rewards:",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: J.text,
                                          children: [
                                            ea(
                                              (null == K
                                                ? void 0
                                                : K.pendingRewards) || 0
                                            ),
                                            " ",
                                            "FSX",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: J.textSecondary,
                                          children: "Active Stakes:",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: J.text,
                                          children:
                                            (null == M ? void 0 : M.length) ||
                                            0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-medium text-purple-400 mb-3",
                                  children: "APY Boosters",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "".concat(
                                    J.cardBg,
                                    " rounded-lg p-4 space-y-3"
                                  ),
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex justify-between items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "".concat(
                                                J.text,
                                                " font-medium"
                                              ),
                                              children: "30 Days Lock",
                                            }),
                                            (0, a.jsx)("p", {
                                              className: "text-sm ".concat(
                                                J.textMuted
                                              ),
                                              children: "Base APY",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("span", {
                                          className:
                                            "text-purple-400 font-bold",
                                          children: [
                                            null == V ? void 0 : V.baseAPY,
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex justify-between items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "".concat(
                                                J.text,
                                                " font-medium"
                                              ),
                                              children: "90 Days Lock",
                                            }),
                                            (0, a.jsx)("p", {
                                              className: "text-sm ".concat(
                                                J.textMuted
                                              ),
                                              children: "1.5x Bonus",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("span", {
                                          className:
                                            "text-purple-400 font-bold",
                                          children: [
                                            1.5 *
                                              parseFloat(
                                                null == V ? void 0 : V.baseAPY
                                              ),
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex justify-between items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "".concat(
                                                J.text,
                                                " font-medium"
                                              ),
                                              children: "180 Days Lock",
                                            }),
                                            (0, a.jsx)("p", {
                                              className: "text-sm ".concat(
                                                J.textMuted
                                              ),
                                              children: "2x Bonus",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("span", {
                                          className:
                                            "text-purple-400 font-bold",
                                          children: [
                                            2 *
                                              parseFloat(
                                                null == V ? void 0 : V.baseAPY
                                              ),
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex justify-between items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: "".concat(
                                                J.text,
                                                " font-medium"
                                              ),
                                              children: "365 Days Lock",
                                            }),
                                            (0, a.jsx)("p", {
                                              className: "text-sm ".concat(
                                                J.textMuted
                                              ),
                                              children: "3x Bonus",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("span", {
                                          className:
                                            "text-purple-400 font-bold",
                                          children: [
                                            3 *
                                              parseFloat(
                                                null == V ? void 0 : V.baseAPY
                                              ),
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "lg:col-span-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "".concat(
                          J.bg,
                          " rounded-xl overflow-hidden shadow-lg"
                        ),
                        children: [
                          (0, a.jsx)("div", {
                            className: "p-6 border-b ".concat(J.border),
                            children: (0, a.jsxs)("h2", {
                              className: "text-xl font-bold ".concat(
                                J.text,
                                " flex items-center"
                              ),
                              children: [
                                (0, a.jsx)(n.kUi, {
                                  className: "mr-2 text-purple-400",
                                }),
                                "Stake Your Tokens",
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex border-b ".concat(J.border),
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => R("stake"),
                                className:
                                  "flex-1 py-4 px-6 flex justify-center items-center gap-2 ".concat(
                                    "stake" === Y
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                      : ""
                                          .concat(J.textSecondary, " ")
                                          .concat(J.hover)
                                  ),
                                children: [
                                  (0, a.jsx)(n.kUi, {}),
                                  (0, a.jsx)("span", { children: "Stake" }),
                                ],
                              }),
                              (0, a.jsxs)("button", {
                                onClick: () => R("yourStakes"),
                                className:
                                  "flex-1 py-4 px-6 flex justify-center items-center gap-2 ".concat(
                                    "yourStakes" === Y
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                      : ""
                                          .concat(J.textSecondary, " ")
                                          .concat(J.hover)
                                  ),
                                children: [
                                  (0, a.jsx)(n.OZg, {}),
                                  (0, a.jsx)("span", {
                                    children: "Your Stakes",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "p-6",
                            children: [
                              l
                                ? "stake" === Y
                                  ? (0, a.jsxs)("form", {
                                      onSubmit: Q,
                                      className: "space-y-6",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("label", {
                                              className: "block ".concat(
                                                J.textSecondary,
                                                " mb-2"
                                              ),
                                              children: "Stake Amount",
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "relative",
                                              children: [
                                                (0, a.jsx)("input", {
                                                  type: "number",
                                                  value: F,
                                                  onChange: (e) =>
                                                    A(e.target.value),
                                                  placeholder: "0.0",
                                                  step: "1",
                                                  min:
                                                    null == V
                                                      ? void 0
                                                      : V.minStakeAmount,
                                                  className: "w-full "
                                                    .concat(
                                                      J.inputBg,
                                                      " rounded-lg p-4 "
                                                    )
                                                    .concat(
                                                      J.text,
                                                      " focus:outline-none focus:ring-2 focus:ring-purple-600 pr-20"
                                                    ),
                                                  required: !0,
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                                  children: (0, a.jsx)("span", {
                                                    className: J.textSecondary,
                                                    children: "FSX",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex justify-between mt-2",
                                              children: [
                                                (0, a.jsxs)("p", {
                                                  className: "text-sm ".concat(
                                                    J.textMuted
                                                  ),
                                                  children: [
                                                    "Min: ",
                                                    null == V
                                                      ? void 0
                                                      : V.minStakeAmount,
                                                    " ",
                                                    "FSX",
                                                  ],
                                                }),
                                                (0, a.jsxs)("p", {
                                                  className: "text-sm ".concat(
                                                    J.textMuted
                                                  ),
                                                  children: [
                                                    "Balance:",
                                                    " ",
                                                    ea(
                                                      (null == o
                                                        ? void 0
                                                        : o.userFsxBlanace) || 0
                                                    ),
                                                    " ",
                                                    "FSX",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          children: [
                                            (0, a.jsx)("label", {
                                              className: "block ".concat(
                                                J.textSecondary,
                                                " mb-2"
                                              ),
                                              children: "Lock Period",
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "grid grid-cols-2 md:grid-cols-4 gap-3",
                                              children: eu
                                                .split(",")
                                                .map((e) =>
                                                  (0, a.jsxs)(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      onClick: () => U(e),
                                                      className:
                                                        "py-3 px-4 rounded-lg transition-colors ".concat(
                                                          D === e
                                                            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                                            : ""
                                                                .concat(
                                                                  J.cardBg,
                                                                  " "
                                                                )
                                                                .concat(J.text)
                                                        ),
                                                      children: [e, " Days"],
                                                    },
                                                    e
                                                  )
                                                ),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "".concat(
                                            J.cardBg,
                                            " rounded-lg p-4 space-y-3"
                                          ),
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className: "flex justify-between",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: J.textSecondary,
                                                  children: "Selected APY:",
                                                }),
                                                (0, a.jsxs)("span", {
                                                  className: "".concat(
                                                    J.text,
                                                    " font-medium"
                                                  ),
                                                  children: [G(D), "%"],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "flex justify-between",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: J.textSecondary,
                                                  children: "Lock Duration:",
                                                }),
                                                (0, a.jsxs)("span", {
                                                  className: "".concat(
                                                    J.text,
                                                    " font-medium"
                                                  ),
                                                  children: [D, " Days"],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "flex justify-between",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className: J.textSecondary,
                                                  children: "Est. Reward:",
                                                }),
                                                (0, a.jsxs)("span", {
                                                  className: "".concat(
                                                    J.text,
                                                    " font-medium"
                                                  ),
                                                  children: [E, " ", "FSX"],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("button", {
                                          type: "submit",
                                          disabled:
                                            X ||
                                            !F ||
                                            parseFloat(F) <
                                              parseFloat(
                                                null == V
                                                  ? void 0
                                                  : V.minStakeAmount
                                              ) ||
                                            parseFloat(F) >
                                              parseFloat(
                                                (null == o
                                                  ? void 0
                                                  : o.userFsxBlanace) || 0
                                              ),
                                          className: "w-full ".concat(
                                            X ||
                                              !F ||
                                              parseFloat(F) <
                                                parseFloat(
                                                  null == V
                                                    ? void 0
                                                    : V.minStakeAmount
                                                ) ||
                                              parseFloat(F) >
                                                parseFloat(
                                                  (null == o
                                                    ? void 0
                                                    : o.userFsxBlanace) || 0
                                                )
                                              ? s
                                                ? "bg-gray-700 cursor-not-allowed"
                                                : "bg-gray-300 cursor-not-allowed text-gray-500"
                                              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
                                            " text-white font-medium py-4 rounded-lg transition-colors"
                                          ),
                                          children: X
                                            ? "Processing..."
                                            : "Stake ".concat("FSX"),
                                        }),
                                      ],
                                    })
                                  : (0, a.jsx)("div", {
                                      children:
                                        M && M.length > 0
                                          ? (0, a.jsx)("div", {
                                              className: "overflow-x-auto",
                                              children: (0, a.jsxs)("table", {
                                                className: "w-full text-sm",
                                                children: [
                                                  (0, a.jsx)("thead", {
                                                    children: (0, a.jsxs)(
                                                      "tr",
                                                      {
                                                        className: "border-b "
                                                          .concat(
                                                            J.border,
                                                            " text-left "
                                                          )
                                                          .concat(
                                                            J.textSecondary
                                                          ),
                                                        children: [
                                                          (0, a.jsx)("th", {
                                                            className:
                                                              "py-3 px-4 whitespace-nowrap",
                                                            children:
                                                              "Staked Amount",
                                                          }),
                                                          (0, a.jsx)("th", {
                                                            className:
                                                              "py-3 px-4 whitespace-nowrap",
                                                            children: "APY",
                                                          }),
                                                          (0, a.jsx)("th", {
                                                            className:
                                                              "py-3 px-4 whitespace-nowrap",
                                                            children:
                                                              "Lock Period",
                                                          }),
                                                          (0, a.jsx)("th", {
                                                            className:
                                                              "py-3 px-4 whitespace-nowrap",
                                                            children: "Rewards",
                                                          }),
                                                          (0, a.jsx)("th", {
                                                            className:
                                                              "py-3 px-4 whitespace-nowrap",
                                                            children: "Status",
                                                          }),
                                                          (0, a.jsx)("th", {
                                                            className:
                                                              "py-3 px-4 whitespace-nowrap",
                                                            children: "Actions",
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("tbody", {
                                                    children: M.map((e, t) =>
                                                      (0, a.jsxs)(
                                                        "tr",
                                                        {
                                                          className: "border-b "
                                                            .concat(
                                                              J.border,
                                                              " "
                                                            )
                                                            .concat(
                                                              s
                                                                ? "text-gray-300"
                                                                : "text-gray-700"
                                                            ),
                                                          children: [
                                                            (0, a.jsxs)("td", {
                                                              className:
                                                                "py-3 px-4 whitespace-nowrap",
                                                              children: [
                                                                ea(e.amount),
                                                                " ",
                                                                "FSX",
                                                              ],
                                                            }),
                                                            (0, a.jsxs)("td", {
                                                              className:
                                                                "py-3 px-4 whitespace-nowrap",
                                                              children: [
                                                                G(e.lockPeriod),
                                                                "%",
                                                              ],
                                                            }),
                                                            (0, a.jsxs)("td", {
                                                              className:
                                                                "py-3 px-4 whitespace-nowrap",
                                                              children: [
                                                                e.lockPeriod,
                                                                " Days",
                                                              ],
                                                            }),
                                                            (0, a.jsxs)("td", {
                                                              className:
                                                                "py-3 px-4 whitespace-nowrap",
                                                              children: [
                                                                ea(
                                                                  e.pendingRewards
                                                                ),
                                                                " ",
                                                                "FSX",
                                                              ],
                                                            }),
                                                            (0, a.jsx)("td", {
                                                              className:
                                                                "py-3 px-4 whitespace-nowrap",
                                                              children: (0,
                                                              a.jsx)("span", {
                                                                className:
                                                                  "px-2 py-1 rounded-full text-xs ".concat(
                                                                    "Unlocked" ===
                                                                      ec(
                                                                        e.startTime,
                                                                        e.lockPeriod
                                                                      )
                                                                      ? s
                                                                        ? "bg-green-900 text-green-400"
                                                                        : "bg-green-100 text-green-600"
                                                                      : s
                                                                      ? "bg-orange-900 text-orange-400"
                                                                      : "bg-orange-100 text-orange-600"
                                                                  ),
                                                                children: ec(
                                                                  e.startTime,
                                                                  e.lockPeriod
                                                                ),
                                                              }),
                                                            }),
                                                            (0, a.jsx)("td", {
                                                              className:
                                                                "py-3 px-4 whitespace-nowrap",
                                                              children: (0,
                                                              a.jsxs)("div", {
                                                                className:
                                                                  "flex space-x-2",
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    "button",
                                                                    {
                                                                      onClick:
                                                                        () =>
                                                                          et(
                                                                            e.id
                                                                          ),
                                                                      disabled:
                                                                        I &&
                                                                        q ===
                                                                          e.id,
                                                                      className:
                                                                        "px-2 py-3 rounded text-xs ".concat(
                                                                          parseFloat(
                                                                            e.pendingRewards
                                                                          ) > 0
                                                                            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                                                                            : s
                                                                            ? "bg-gray-700 text-gray-500"
                                                                            : "bg-gray-200 text-gray-500"
                                                                        ),
                                                                      children:
                                                                        I &&
                                                                        q ===
                                                                          e.id
                                                                          ? "..."
                                                                          : "Harvest",
                                                                    }
                                                                  ),
                                                                  "Unlocked" !==
                                                                    ec(
                                                                      e.startTime,
                                                                      e.lockPeriod
                                                                    ) &&
                                                                    (0, a.jsx)(
                                                                      "button",
                                                                      {
                                                                        onClick:
                                                                          () =>
                                                                            es(
                                                                              e.id
                                                                            ),
                                                                        disabled:
                                                                          L &&
                                                                          q ===
                                                                            e.id,
                                                                        className:
                                                                          "px-2 py-1 rounded text-xs bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
                                                                        title:
                                                                          "Unstake early with 5% penalty",
                                                                        children:
                                                                          L &&
                                                                          q ===
                                                                            e.id
                                                                            ? "..."
                                                                            : "Unstake Early (5% Penalty)",
                                                                      }
                                                                    ),
                                                                  "Unlocked" ===
                                                                    ec(
                                                                      e.startTime,
                                                                      e.lockPeriod
                                                                    ) &&
                                                                    (0, a.jsx)(
                                                                      "button",
                                                                      {
                                                                        onClick:
                                                                          () =>
                                                                            ee(
                                                                              e.id
                                                                            ),
                                                                        disabled:
                                                                          L &&
                                                                          q ===
                                                                            e.id,
                                                                        className:
                                                                          "px-2 py-1 rounded text-xs bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
                                                                        children:
                                                                          L &&
                                                                          q ===
                                                                            e.id
                                                                            ? "..."
                                                                            : "Unstake",
                                                                      }
                                                                    ),
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        },
                                                        t
                                                      )
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            })
                                          : (0, a.jsx)("div", {
                                              className: "text-center py-8",
                                              children: (0, a.jsx)("p", {
                                                className: J.textSecondary,
                                                children:
                                                  "You don't have any active stakes. Start staking to earn rewards!",
                                              }),
                                            }),
                                    })
                                : (0, a.jsxs)("div", {
                                    className: "text-center py-8",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: "".concat(
                                          J.textSecondary,
                                          " mb-6"
                                        ),
                                        children:
                                          "Connect your wallet to stake tokens",
                                      }),
                                      (0, a.jsx)("button", {
                                        onClick: x,
                                        disabled: r,
                                        className:
                                          "font-medium py-3 rounded-xl transition-colors",
                                        children: (0, a.jsx)(S.Z, {
                                          isDarkMode: s,
                                        }),
                                      }),
                                    ],
                                  }),
                              (0, a.jsxs)("div", {
                                className: "mt-8 p-4 ".concat(
                                  J.cardBg,
                                  " rounded-lg flex gap-3"
                                ),
                                children: [
                                  (0, a.jsx)(n.DAO, {
                                    className:
                                      "text-blue-400 flex-shrink-0 mt-1",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm ".concat(
                                      J.textSecondary
                                    ),
                                    children:
                                      "Staked tokens are locked for the selected period and cannot be withdrawn early. Rewards can be harvested at any time. After the lock period ends, you can unstake your tokens or keep them staked to continue earning rewards at the base APY rate.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-6 ".concat(
                          J.bg,
                          " rounded-xl overflow-hidden shadow-lg"
                        ),
                        children: [
                          (0, a.jsx)("div", {
                            className: "p-6 border-b ".concat(J.border),
                            children: (0, a.jsxs)("h2", {
                              className: "text-xl font-bold ".concat(
                                J.text,
                                " flex items-center"
                              ),
                              children: [
                                (0, a.jsx)(n.Op, {
                                  className: "mr-2 text-purple-400",
                                }),
                                "Global Staking Analytics",
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "p-6",
                            children: (0, a.jsxs)("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-3 gap-4",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "".concat(
                                    J.cardBg,
                                    " rounded-lg p-4 text-center"
                                  ),
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: J.textSecondary,
                                      children: "Total Value Locked",
                                    }),
                                    (0, a.jsxs)("h3", {
                                      className: "text-2xl font-bold ".concat(
                                        J.text
                                      ),
                                      children: [
                                        ea(
                                          (null == V
                                            ? void 0
                                            : V.totalStaked) || 0
                                        ),
                                        " ",
                                        "FSX",
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      className: "text-sm text-purple-400",
                                      children: [
                                        "$",
                                        ea(
                                          "0.0018" *
                                            ((null == V
                                              ? void 0
                                              : V.totalStaked) || 0)
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "".concat(
                                    J.cardBg,
                                    " rounded-lg p-4 text-center"
                                  ),
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: J.textSecondary,
                                      children: "Total Stakers",
                                    }),
                                    (0, a.jsx)("h3", {
                                      className: "text-2xl font-bold ".concat(
                                        J.text
                                      ),
                                      children: ea(
                                        (null == V ? void 0 : V.totalStakers) ||
                                          0
                                      ),
                                    }),
                                    (0, a.jsx)("p", {
                                      className: "text-sm text-purple-400",
                                      children: "Active Participants",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "".concat(
                                    J.cardBg,
                                    " rounded-lg p-4 text-center"
                                  ),
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: J.textSecondary,
                                      children: "Rewards Distributed",
                                    }),
                                    (0, a.jsxs)("h3", {
                                      className: "text-2xl font-bold ".concat(
                                        J.text
                                      ),
                                      children: [
                                        ea(
                                          (null == V
                                            ? void 0
                                            : V.totalRewardsDistributed) || 0
                                        ),
                                        " ",
                                        "FSX",
                                      ],
                                    }),
                                    (0, a.jsx)("p", {
                                      className: "text-sm text-purple-400",
                                      children: "Since Launch",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var ej = eg;
    },
  },
]);
