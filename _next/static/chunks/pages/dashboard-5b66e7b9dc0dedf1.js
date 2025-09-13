(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8026],
  {
    51075: function (e, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dashboard",
        function () {
          return n(6449);
        },
      ]);
    },
    6449: function (e, s, n) {
      "use strict";
      n.r(s),
        n.d(s, {
          default: function () {
            return c;
          },
        });
      var i = n(85893),
        r = n(67294);
      n(41664);
      var a = n(9008),
        o = n.n(a),
        t = n(10612),
        d = n(83728);
      function c() {
        let { isConnected: e, globalLoad: s } = (0, t.$6)(),
          [n, a] = (0, r.useState)(!0),
          [c, l] = (0, r.useState)(!1),
          [x, k] = (0, r.useState)("Dashboard");
        return (0, i.jsxs)("div", {
          className: "min-h-screen  ".concat(
            n ? "bg-[#0D0B12]" : "bg-gray-100",
            " flex"
          ),
          children: [
            (0, i.jsxs)(o(), {
              children: [
                (0, i.jsx)("title", {
                  children:
                    "FutureSyncx - Bridging Immersive Commerce with Decentralized Innovation",
                }),
                (0, i.jsx)("meta", {
                  name: "FUTURESYNCX",
                  content:
                    "Empowering digital commerce with immersive intelligence and decentralized solutions.",
                }),
                (0, i.jsx)("link", {
                  rel: "icon",
                  href: "/futuresyncx-circle-black.png",
                }),
              ],
            }),
            (0, i.jsx)(d.DJ, {
              isDarkMode: n,
              setIsSidebarOpen: l,
              isSidebarOpen: c,
            }),
            (0, i.jsx)(d.YE, {
              isDarkMode: n,
              setIsDarkMode: a,
              setIsSidebarOpen: l,
              isSidebarOpen: c,
              setIsComponent: k,
            }),
            (0, i.jsxs)("main", {
              className:
                "flex-1 lg:pl-8 px-4 pt-20 lg:pt-0 pb-8 h-screen overflow-y-auto overflow-x-hidden ".concat(
                  n ? "bg-[#0D0B12]" : "bg-gray-100"
                ),
              children: [
                s && (0, i.jsx)(d.BY, { isLoading: !0, isDarkMode: n }),
                (0, i.jsx)(d.ip, { isDarkMode: n }),
                e
                  ? (0, i.jsx)(i.Fragment, {
                      children:
                        "Dashboard" == x
                          ? (0, i.jsx)(d.A, { isDarkMode: n, setIsComponen: k })
                          : "token-documentation" == x
                          ? (0, i.jsx)(d.m5, { isDarkMode: n })
                          : "Transaction" == x
                          ? (0, i.jsx)(d.YW, { isDarkMode: n })
                          : "Admin Functions" == x
                          ? (0, i.jsx)(d.Nw, { isDarkMode: n })
                          : "Token Sale" == x
                          ? (0, i.jsx)(d.Wc, { isDarkMode: n })
                          : "Admin Overview" == x
                          ? (0, i.jsx)(d.nv, { isDarkMode: n })
                          : "User Dashboard" == x
                          ? (0, i.jsx)(d.IK, { isDarkMode: n })
                          : "Withdraw Tokens" == x
                          ? (0, i.jsx)(d.bK, { isDarkMode: n })
                          : "Token Transfer" == x
                          ? (0, i.jsx)(d.EI, { isDarkMode: n })
                          : "Contact Us" == x
                          ? (0, i.jsx)(d.Ub, { isDarkMode: n })
                          : "Staking" == x
                          ? (0, i.jsx)(d.T4, { isDarkMode: n })
                          : "",
                    })
                  : (0, i.jsx)(d.be, { isDarkMode: n }),
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
        5970, 8151, 8391, 4838, 9317, 4738, 3365, 4817, 5957, 3728, 9774, 2888,
        179,
      ],
      function () {
        return e((e.s = 51075));
      }
    ),
      (_N_E = e.O());
  },
]);
