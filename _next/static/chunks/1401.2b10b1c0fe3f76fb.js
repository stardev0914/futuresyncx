(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1401],
  {
    40926: function (e, t, r) {
      "use strict";
      function i() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function s() {
        let e = i();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserCryptoAvailable =
          t.getSubtleCrypto =
          t.getBrowerCrypto =
            void 0),
        (t.getBrowerCrypto = i),
        (t.getSubtleCrypto = s),
        (t.isBrowserCryptoAvailable = function () {
          return !!i() && !!s();
        });
    },
    88618: function (e, t, r) {
      "use strict";
      var i = r(83454);
      function s() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function n() {
        return (
          void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = s),
        (t.isNode = n),
        (t.isBrowser = function () {
          return !s() && !n();
        });
    },
    1468: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(34308);
      i.__exportStar(r(40926), t), i.__exportStar(r(88618), t);
    },
    34308: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: function () {
            return n;
          },
          __asyncDelegator: function () {
            return v;
          },
          __asyncGenerator: function () {
            return w;
          },
          __asyncValues: function () {
            return E;
          },
          __await: function () {
            return b;
          },
          __awaiter: function () {
            return h;
          },
          __classPrivateFieldGet: function () {
            return S;
          },
          __classPrivateFieldSet: function () {
            return P;
          },
          __createBinding: function () {
            return d;
          },
          __decorate: function () {
            return a;
          },
          __exportStar: function () {
            return p;
          },
          __extends: function () {
            return s;
          },
          __generator: function () {
            return u;
          },
          __importDefault: function () {
            return D;
          },
          __importStar: function () {
            return I;
          },
          __makeTemplateObject: function () {
            return _;
          },
          __metadata: function () {
            return l;
          },
          __param: function () {
            return c;
          },
          __read: function () {
            return g;
          },
          __rest: function () {
            return o;
          },
          __spread: function () {
            return y;
          },
          __spreadArrays: function () {
            return m;
          },
          __values: function () {
            return f;
          },
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var i =
        function (e, t) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        };
      function s(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, i = Object.getOwnPropertySymbols(e);
            s < i.length;
            s++
          )
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function a(e, t, r, i) {
        var s,
          n = arguments.length,
          o =
            n < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) &&
              (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
        return n > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (s, n) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            return (function (n) {
              if (r) throw TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (s =
                        2 & n[0]
                          ? i.return
                          : n[0]
                          ? i.throw || ((s = i.return) && s.call(i), 0)
                          : i.next) &&
                      !(s = s.call(i, n[1])).done)
                  )
                    return s;
                  switch (((i = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n;
                      break;
                    case 4:
                      return o.label++, { value: n[1], done: !1 };
                    case 5:
                      o.label++, (i = n[1]), (n = [0]);
                      continue;
                    case 7:
                      (n = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        o.label = n[1];
                        break;
                      }
                      if (6 === n[0] && o.label < s[1]) {
                        (o.label = s[1]), (s = n);
                        break;
                      }
                      if (s && o.label < s[2]) {
                        (o.label = s[2]), o.ops.push(n);
                        break;
                      }
                      s[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  n = t.call(e, o);
                } catch (e) {
                  (n = [6, e]), (i = 0);
                } finally {
                  r = s = 0;
                }
              if (5 & n[0]) throw n[1];
              return { value: n[0] ? n[1] : void 0, done: !0 };
            })([n, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          n = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = n.next()).done; )
            o.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var i = Array(e), s = 0, t = 0; t < r; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++)
            i[s] = n[o];
        return i;
      }
      function b(e) {
        return this instanceof b ? ((this.v = e), this) : new b(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var i,
          s = r.apply(e, t || []),
          n = [];
        return (
          (i = {}),
          o("next"),
          o("throw"),
          o("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          s[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                n.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof b
              ? Promise.resolve(r.value.v).then(c, l)
              : h(n[0][2], r);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a("next", e);
        }
        function l(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function v(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, s) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: b(e[i](t)), done: "return" === i }
                  : s
                  ? s(t)
                  : t;
              }
            : s;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, s) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, s, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function _(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function D(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function S(e, t) {
        if (!t.has(e))
          throw TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    71401: function (e, t, r) {
      "use strict";
      let i;
      r.r(t),
        r.d(t, {
          EthereumProvider: function () {
            return gG;
          },
          OPTIONAL_EVENTS: function () {
            return gj;
          },
          OPTIONAL_METHODS: function () {
            return gN;
          },
          REQUIRED_EVENTS: function () {
            return gR;
          },
          REQUIRED_METHODS: function () {
            return gT;
          },
          default: function () {
            return gW;
          },
        });
      var s = {};
      r.r(s),
        r.d(s, {
          identity: function () {
            return it;
          },
        });
      var n = {};
      r.r(n),
        r.d(n, {
          base2: function () {
            return ir;
          },
        });
      var o = {};
      r.r(o),
        r.d(o, {
          base8: function () {
            return ii;
          },
        });
      var a = {};
      r.r(a),
        r.d(a, {
          base10: function () {
            return is;
          },
        });
      var c = {};
      r.r(c),
        r.d(c, {
          base16: function () {
            return io;
          },
          base16upper: function () {
            return ia;
          },
        });
      var l = {};
      r.r(l),
        r.d(l, {
          base32: function () {
            return ic;
          },
          base32hex: function () {
            return id;
          },
          base32hexpad: function () {
            return ig;
          },
          base32hexpadupper: function () {
            return iy;
          },
          base32hexupper: function () {
            return ip;
          },
          base32pad: function () {
            return ih;
          },
          base32padupper: function () {
            return iu;
          },
          base32upper: function () {
            return il;
          },
          base32z: function () {
            return im;
          },
        });
      var h = {};
      r.r(h),
        r.d(h, {
          base36: function () {
            return ib;
          },
          base36upper: function () {
            return iw;
          },
        });
      var u = {};
      r.r(u),
        r.d(u, {
          base58btc: function () {
            return iv;
          },
          base58flickr: function () {
            return iE;
          },
        });
      var d = {};
      r.r(d),
        r.d(d, {
          base64: function () {
            return i_;
          },
          base64pad: function () {
            return iI;
          },
          base64url: function () {
            return iD;
          },
          base64urlpad: function () {
            return iS;
          },
        });
      var p = {};
      r.r(p),
        r.d(p, {
          base256emoji: function () {
            return iA;
          },
        });
      var f = {};
      r.r(f),
        r.d(f, {
          sha256: function () {
            return iM;
          },
          sha512: function () {
            return i$;
          },
        });
      var g = {};
      r.r(g),
        r.d(g, {
          identity: function () {
            return iF;
          },
        });
      var y = {};
      r.r(y),
        r.d(y, {
          code: function () {
            return iV;
          },
          decode: function () {
            return iW;
          },
          encode: function () {
            return iK;
          },
          name: function () {
            return iH;
          },
        });
      var m = {};
      r.r(m),
        r.d(m, {
          code: function () {
            return iZ;
          },
          decode: function () {
            return iX;
          },
          encode: function () {
            return iQ;
          },
          name: function () {
            return iJ;
          },
        });
      var b = r(17187),
        w = r.n(b),
        v = r(83454),
        E = function (e, t, r) {
          if (r || 2 == arguments.length)
            for (var i, s = 0, n = t.length; s < n; s++)
              (!i && s in t) ||
                (i || (i = Array.prototype.slice.call(t, 0, s)), (i[s] = t[s]));
          return e.concat(i || Array.prototype.slice.call(t));
        },
        _ = function (e, t, r) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.type = "browser");
        },
        I = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = v.platform);
        },
        D = function (e, t, r, i) {
          (this.name = e),
            (this.version = t),
            (this.os = r),
            (this.bot = i),
            (this.type = "bot-device");
        },
        S = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        P = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        O =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        x = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        A = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function C(e) {
        var t =
          "" !== e &&
          x.reduce(function (t, r) {
            var i = r[0],
              s = r[1];
            if (t) return t;
            var n = s.exec(e);
            return !!n && [i, n];
          }, !1);
        if (!t) return null;
        var r = t[0],
          i = t[1];
        if ("searchbot" === r) return new S();
        var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
        s
          ? s.length < 3 &&
            (s = E(
              E([], s, !0),
              (function (e) {
                for (var t = [], r = 0; r < e; r++) t.push("0");
                return t;
              })(3 - s.length),
              !0
            ))
          : (s = []);
        var n = s.join("."),
          o = (function (e) {
            for (var t = 0, r = A.length; t < r; t++) {
              var i = A[t],
                s = i[0];
              if (i[1].exec(e)) return s;
            }
            return null;
          })(e),
          a = O.exec(e);
        return a && a[1] ? new D(r, n, o, a[1]) : new _(r, n, o);
      }
      var T = r(66736),
        N = r(62873),
        R = r(65755);
      let j = "2.23.2",
        L = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
            t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
          version: `viem@${j}`,
        };
      class U extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof U
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof U && t.cause.docsPath) || t.docsPath,
            s = L.getDocsUrl?.({ ...t, docsPath: i }),
            n = [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(s ? [`Docs: ${s}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(L.version ? [`Version: ${L.version}`] : []),
            ].join("\n");
          super(n, t.cause ? { cause: t.cause } : void 0),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = r),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = j);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
      function k(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      class B extends U {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      function q(e, { dir: t, size: r = 32 } = {}) {
        return "string" == typeof e
          ? (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              let i = e.replace("0x", "");
              if (i.length > 2 * r)
                throw new B({
                  size: Math.ceil(i.length / 2),
                  targetSize: r,
                  type: "hex",
                });
              return `0x${i["right" === t ? "padEnd" : "padStart"](
                2 * r,
                "0"
              )}`;
            })(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r)
                throw new B({ size: e.length, targetSize: r, type: "bytes" });
              let i = new Uint8Array(r);
              for (let s = 0; s < r; s++) {
                let n = "right" === t;
                i[n ? s : r - s - 1] = e[n ? s : e.length - s - 1];
              }
              return i;
            })(e, { dir: t, size: r });
      }
      class M extends U {
        constructor({ max: e, min: t, signed: r, size: i, value: s }) {
          super(
            `Number "${s}" is not in safe ${
              i ? `${8 * i}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class $ extends U {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
      function z(e) {
        return k(e, { strict: !1 }) ? Math.ceil((e.length - 2) / 2) : e.length;
      }
      function F(e, { size: t }) {
        if (z(e) > t) throw new $({ givenSize: z(e), maxSize: t });
      }
      function H(e, t = {}) {
        let { signed: r } = t;
        t.size && F(e, { size: t.size });
        let i = BigInt(e);
        if (!r) return i;
        let s = (e.length - 2) / 2,
          n = (1n << (8n * BigInt(s) - 1n)) - 1n;
        return i <= n ? i : i - BigInt(`0x${"f".padStart(2 * s, "f")}`) - 1n;
      }
      let V = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function K(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? G(e, t)
          : "string" == typeof e
          ? (function (e, t = {}) {
              let r = Y.encode(e);
              return W(r, t);
            })(e, t)
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let r = `0x${Number(e)}`;
              return "number" == typeof t.size
                ? (F(r, { size: t.size }), q(r, { size: t.size }))
                : r;
            })(e, t)
          : W(e, t);
      }
      function W(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += V[e[t]];
        let i = `0x${r}`;
        return "number" == typeof t.size
          ? (F(i, { size: t.size }), q(i, { dir: "right", size: t.size }))
          : i;
      }
      function G(e, t = {}) {
        let r;
        let { signed: i, size: s } = t,
          n = BigInt(e);
        s
          ? (r = i
              ? (1n << (8n * BigInt(s) - 1n)) - 1n
              : 2n ** (8n * BigInt(s)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let o = "bigint" == typeof r && i ? -r - 1n : 0;
        if ((r && n > r) || n < o) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new M({
            max: r ? `${r}${t}` : void 0,
            min: `${o}${t}`,
            signed: i,
            size: s,
            value: `${e}${t}`,
          });
        }
        let a = `0x${(i && n < 0
          ? (1n << BigInt(8 * s)) + BigInt(n)
          : n
        ).toString(16)}`;
        return s ? q(a, { size: s }) : a;
      }
      let Y = new TextEncoder(),
        J = new TextEncoder(),
        Z = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function Q(e) {
        return e >= Z.zero && e <= Z.nine
          ? e - Z.zero
          : e >= Z.A && e <= Z.F
          ? e - (Z.A - 10)
          : e >= Z.a && e <= Z.f
          ? e - (Z.a - 10)
          : void 0;
      }
      function X(e, t = {}) {
        let r = e;
        t.size &&
          (F(r, { size: t.size }), (r = q(r, { dir: "right", size: t.size })));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let s = i.length / 2,
          n = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
          let r = Q(i.charCodeAt(t++)),
            s = Q(i.charCodeAt(t++));
          if (void 0 === r || void 0 === s)
            throw new U(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          n[e] = 16 * r + s;
        }
        return n;
      }
      function ee(e, t = {}) {
        let r = J.encode(e);
        return "number" == typeof t.size
          ? (F(r, { size: t.size }), q(r, { dir: "right", size: t.size }))
          : r;
      }
      var et = r(22250);
      function er(e, t) {
        let r = (0, et.fr)(
          k(e, { strict: !1 })
            ? (function (e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e
                  ? (function (e, t) {
                      let r = G(e, t);
                      return X(r);
                    })(e, t)
                  : "boolean" == typeof e
                  ? (function (e, t = {}) {
                      let r = new Uint8Array(1);
                      return ((r[0] = Number(e)), "number" == typeof t.size)
                        ? (F(r, { size: t.size }), q(r, { size: t.size }))
                        : r;
                    })(e, t)
                  : k(e)
                  ? X(e, t)
                  : ee(e, t);
              })(e)
            : e
        );
        return "bytes" === (t || "hex") ? r : K(r);
      }
      class ei extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let es = new ei(8192);
      async function en({ hash: e, signature: t }) {
        let i = k(e) ? e : K(e),
          { secp256k1: s } = await Promise.resolve().then(r.bind(r, 92875)),
          n = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: r, v: i, yParity: n } = t,
                o = Number(n ?? i),
                a = eo(o);
              return new s.Signature(H(e), H(r)).addRecoveryBit(a);
            }
            let e = k(t) ? t : K(t),
              r = (function (e, t = {}) {
                return Number(H(e, t));
              })(`0x${e.slice(130)}`),
              i = eo(r);
            return s.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              i
            );
          })(),
          o = n.recoverPublicKey(i.substring(2)).toHex(!1);
        return `0x${o}`;
      }
      function eo(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function ea({ hash: e, signature: t }) {
        return (function (e) {
          let t = er(`0x${e.substring(4)}`).substring(26);
          return (function (e, t) {
            if (es.has(`${e}.${t}`)) return es.get(`${e}.${t}`);
            let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
              i = er(ee(r), "bytes"),
              s = (t ? r.substring(`${t}0x`.length) : r).split("");
            for (let e = 0; e < 40; e += 2)
              i[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()),
                (15 & i[e >> 1]) >= 8 &&
                  s[e + 1] &&
                  (s[e + 1] = s[e + 1].toUpperCase());
            let n = `0x${s.join("")}`;
            return es.set(`${e}.${t}`, n), n;
          })(`0x${t}`);
        })(await en({ hash: e, signature: t }));
      }
      var ec = (function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let r = 0; r < e.length; r++) {
          let i = e.charAt(r),
            s = i.charCodeAt(0);
          if (255 !== t[s]) throw TypeError(i + " is ambiguous");
          t[s] = r;
        }
        let r = e.length,
          i = e.charAt(0),
          s = Math.log(r) / Math.log(256),
          n = Math.log(256) / Math.log(r);
        function o(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          let n = 0,
            o = 0,
            a = 0;
          for (; e[n] === i; ) o++, n++;
          let c = ((e.length - n) * s + 1) >>> 0,
            l = new Uint8Array(c);
          for (; n < e.length; ) {
            let i = e.charCodeAt(n);
            if (i > 255) return;
            let s = t[i];
            if (255 === s) return;
            let o = 0;
            for (let e = c - 1; (0 !== s || o < a) && -1 !== e; e--, o++)
              (s += (r * l[e]) >>> 0),
                (l[e] = s % 256 >>> 0),
                (s = (s / 256) >>> 0);
            if (0 !== s) throw Error("Non-zero carry");
            (a = o), n++;
          }
          let h = c - a;
          for (; h !== c && 0 === l[h]; ) h++;
          let u = new Uint8Array(o + (c - h)),
            d = o;
          for (; h !== c; ) u[d++] = l[h++];
          return u;
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            let s = 0,
              o = 0,
              a = 0,
              c = t.length;
            for (; a !== c && 0 === t[a]; ) a++, s++;
            let l = ((c - a) * n + 1) >>> 0,
              h = new Uint8Array(l);
            for (; a !== c; ) {
              let e = t[a],
                i = 0;
              for (let t = l - 1; (0 !== e || i < o) && -1 !== t; t--, i++)
                (e += (256 * h[t]) >>> 0),
                  (h[t] = e % r >>> 0),
                  (e = (e / r) >>> 0);
              if (0 !== e) throw Error("Non-zero carry");
              (o = i), a++;
            }
            let u = l - o;
            for (; u !== l && 0 === h[u]; ) u++;
            let d = i.repeat(s);
            for (; u < l; ++u) d += e.charAt(h[u]);
            return d;
          },
          decodeUnsafe: o,
          decode: function (e) {
            let t = o(e);
            if (t) return t;
            throw Error("Non-base" + r + " character");
          },
        };
      })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      let el = (e) =>
          JSON.stringify(e, (e, t) =>
            "bigint" == typeof t ? t.toString() + "n" : t
          ),
        eh = (e) => {
          let t = e.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(t, (e, t) => {
            let r = "string" == typeof t && t.match(/^\d+n$/);
            return r ? BigInt(t.substring(0, t.length - 1)) : t;
          });
        };
      function eu(e) {
        if ("string" != typeof e)
          throw Error(`Cannot safe json parse value of type ${typeof e}`);
        try {
          return eh(e);
        } catch (t) {
          return e;
        }
      }
      function ed(e) {
        return "string" == typeof e ? e : el(e) || "";
      }
      function ep(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function ef(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      let eg =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        ey = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function em(
        e
      ) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          ep(e),
          e
        );
      }
      class eb {
        clone() {
          return this._cloneInto();
        }
      }
      function ew(e = 32) {
        if (eg && "function" == typeof eg.getRandomValues)
          return eg.getRandomValues(new Uint8Array(e));
        if (eg && "function" == typeof eg.randomBytes) return eg.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      class ev extends eb {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = ey(this.buffer));
        }
        update(e) {
          ef(this);
          let { view: t, buffer: r, blockLen: i } = this;
          e = em(e);
          let s = e.length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = ey(e);
              for (; i <= s - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          ef(this),
            (function (e, t) {
              ep(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error(
                  "digestInto() expects output buffer of length at least " + r
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > i - n && (this.process(r, 0), (n = 0));
          for (let e = n; e < i; e++) t[e] = 0;
          (function (e, t, r, i) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, i);
            let s = BigInt(32),
              n = BigInt(4294967295),
              o = Number((r >> s) & n),
              a = Number(r & n);
            e.setUint32(t + (i ? 4 : 0), o, i),
              e.setUint32(t + (i ? 0 : 4), a, i);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let o = ey(e),
            a = this.outputLen;
          if (a % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = a / 4,
            l = this.get();
          if (c > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: i,
            finished: s,
            destroyed: n,
            pos: o,
          } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      let eE = BigInt(4294967296 - 1),
        e_ = BigInt(32);
      function eI(e, t = !1) {
        return t
          ? { h: Number(e & eE), l: Number((e >> e_) & eE) }
          : { h: 0 | Number((e >> e_) & eE), l: 0 | Number(e & eE) };
      }
      let eD = (e, t) => (BigInt(e >>> 0) << e_) | BigInt(t >>> 0),
        eS = {
          fromBig: eI,
          split: function (e, t = !1) {
            let r = new Uint32Array(e.length),
              i = new Uint32Array(e.length);
            for (let s = 0; s < e.length; s++) {
              let { h: n, l: o } = eI(e[s], t);
              [r[s], i[s]] = [n, o];
            }
            return [r, i];
          },
          toBig: eD,
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          rotr32H: (e, t) => t,
          rotr32L: (e, t) => e,
          rotlSH: (e, t, r) => (e << r) | (t >>> (32 - r)),
          rotlSL: (e, t, r) => (t << r) | (e >>> (32 - r)),
          rotlBH: (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
          rotlBL: (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
          add: function (e, t, r, i) {
            let s = (t >>> 0) + (i >>> 0);
            return { h: (e + r + ((s / 4294967296) | 0)) | 0, l: 0 | s };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, i) => (t + r + i + ((e / 4294967296) | 0)) | 0,
          add4L: (e, t, r, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
          add4H: (e, t, r, i, s) =>
            (t + r + i + s + ((e / 4294967296) | 0)) | 0,
          add5H: (e, t, r, i, s, n) =>
            (t + r + i + s + n + ((e / 4294967296) | 0)) | 0,
          add5L: (e, t, r, i, s) =>
            (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0) + (s >>> 0),
        },
        [eP, eO] = eS.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        ex = new Uint32Array(80),
        eA = new Uint32Array(80);
      class eC extends ev {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: i,
            Ch: s,
            Cl: n,
            Dh: o,
            Dl: a,
            Eh: c,
            El: l,
            Fh: h,
            Fl: u,
            Gh: d,
            Gl: p,
            Hh: f,
            Hl: g,
          } = this;
          return [e, t, r, i, s, n, o, a, c, l, h, u, d, p, f, g];
        }
        set(e, t, r, i, s, n, o, a, c, l, h, u, d, p, f, g) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | i),
            (this.Ch = 0 | s),
            (this.Cl = 0 | n),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | h),
            (this.Fl = 0 | u),
            (this.Gh = 0 | d),
            (this.Gl = 0 | p),
            (this.Hh = 0 | f),
            (this.Hl = 0 | g);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (ex[r] = e.getUint32(t)), (eA[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | ex[e - 15],
              r = 0 | eA[e - 15],
              i = eS.rotrSH(t, r, 1) ^ eS.rotrSH(t, r, 8) ^ eS.shrSH(t, r, 7),
              s = eS.rotrSL(t, r, 1) ^ eS.rotrSL(t, r, 8) ^ eS.shrSL(t, r, 7),
              n = 0 | ex[e - 2],
              o = 0 | eA[e - 2],
              a = eS.rotrSH(n, o, 19) ^ eS.rotrBH(n, o, 61) ^ eS.shrSH(n, o, 6),
              c = eS.rotrSL(n, o, 19) ^ eS.rotrBL(n, o, 61) ^ eS.shrSL(n, o, 6),
              l = eS.add4L(s, c, eA[e - 7], eA[e - 16]),
              h = eS.add4H(l, i, a, ex[e - 7], ex[e - 16]);
            (ex[e] = 0 | h), (eA[e] = 0 | l);
          }
          let {
            Ah: r,
            Al: i,
            Bh: s,
            Bl: n,
            Ch: o,
            Cl: a,
            Dh: c,
            Dl: l,
            Eh: h,
            El: u,
            Fh: d,
            Fl: p,
            Gh: f,
            Gl: g,
            Hh: y,
            Hl: m,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t =
                eS.rotrSH(h, u, 14) ^ eS.rotrSH(h, u, 18) ^ eS.rotrBH(h, u, 41),
              b =
                eS.rotrSL(h, u, 14) ^ eS.rotrSL(h, u, 18) ^ eS.rotrBL(h, u, 41),
              w = (h & d) ^ (~h & f),
              v = (u & p) ^ (~u & g),
              E = eS.add5L(m, b, v, eO[e], eA[e]),
              _ = eS.add5H(E, y, t, w, eP[e], ex[e]),
              I = 0 | E,
              D =
                eS.rotrSH(r, i, 28) ^ eS.rotrBH(r, i, 34) ^ eS.rotrBH(r, i, 39),
              S =
                eS.rotrSL(r, i, 28) ^ eS.rotrBL(r, i, 34) ^ eS.rotrBL(r, i, 39),
              P = (r & s) ^ (r & o) ^ (s & o),
              O = (i & n) ^ (i & a) ^ (n & a);
            (y = 0 | f),
              (m = 0 | g),
              (f = 0 | d),
              (g = 0 | p),
              (d = 0 | h),
              (p = 0 | u),
              ({ h: h, l: u } = eS.add(0 | c, 0 | l, 0 | _, 0 | I)),
              (c = 0 | o),
              (l = 0 | a),
              (o = 0 | s),
              (a = 0 | n),
              (s = 0 | r),
              (n = 0 | i);
            let x = eS.add3L(I, S, O);
            (r = eS.add3H(x, _, D, P)), (i = 0 | x);
          }
          ({ h: r, l: i } = eS.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | i)),
            ({ h: s, l: n } = eS.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
            ({ h: o, l: a } = eS.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
            ({ h: c, l: l } = eS.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
            ({ h: h, l: u } = eS.add(0 | this.Eh, 0 | this.El, 0 | h, 0 | u)),
            ({ h: d, l: p } = eS.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | p)),
            ({ h: f, l: g } = eS.add(0 | this.Gh, 0 | this.Gl, 0 | f, 0 | g)),
            ({ h: y, l: m } = eS.add(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | m)),
            this.set(r, i, s, n, o, a, c, l, h, u, d, p, f, g, y, m);
        }
        roundClean() {
          ex.fill(0), eA.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let eT = (function (e) {
          let t = (t) => e().update(em(t)).digest(),
            r = e();
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = () => e()),
            t
          );
        })(() => new eC()),
        eN = BigInt(0),
        eR = BigInt(1),
        ej = BigInt(2);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function eL(
        e
      ) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function eU(e) {
        if (!eL(e)) throw Error("Uint8Array expected");
      }
      function ek(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let eB = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function eq(e) {
        eU(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += eB[e[r]];
        return t;
      }
      function eM(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? eN : BigInt("0x" + e);
      }
      let e$ = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function ez(e) {
        return e >= e$._0 && e <= e$._9
          ? e - e$._0
          : e >= e$.A && e <= e$.F
          ? e - (e$.A - 10)
          : e >= e$.a && e <= e$.f
          ? e - (e$.a - 10)
          : void 0;
      }
      function eF(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = ez(e.charCodeAt(s)),
            n = ez(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n) {
            let t = e[s] + e[s + 1];
            throw Error(
              'hex string expected, got non-hex character "' +
                t +
                '" at index ' +
                s
            );
          }
          i[t] = 16 * r + n;
        }
        return i;
      }
      function eH(e) {
        return eU(e), eM(eq(Uint8Array.from(e).reverse()));
      }
      function eV(e, t) {
        return eF(e.toString(16).padStart(2 * t, "0"));
      }
      function eK(e, t) {
        return eV(e, t).reverse();
      }
      function eW(e, t, r) {
        let i;
        if ("string" == typeof t)
          try {
            i = eF(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (eL(t)) i = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let s = i.length;
        if ("number" == typeof r && s !== r)
          throw Error(e + " of length " + r + " expected, got " + s);
        return i;
      }
      function eG(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          eU(i), (t += i.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, i), (i += s.length);
        }
        return r;
      }
      let eY = (e) => "bigint" == typeof e && eN <= e;
      function eJ(e, t, r, i) {
        if (!(eY(t) && eY(r) && eY(i)) || !(r <= t) || !(t < i))
          throw Error(
            "expected valid " + e + ": " + r + " <= n < " + i + ", got " + t
          );
      }
      let eZ = (e) => (ej << BigInt(e - 1)) - eR,
        eQ = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || eL(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function eX(e, t, r = {}) {
        let i = (t, r, i) => {
          let s = eQ[r];
          if ("function" != typeof s) throw Error("invalid validator function");
          let n = e[t];
          if (!(i && void 0 === n) && !s(n, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + n
            );
        };
        for (let [e, r] of Object.entries(t)) i(e, r, !1);
        for (let [e, t] of Object.entries(r)) i(e, t, !0);
        return e;
      }
      function e0(e) {
        let t = new WeakMap();
        return (r, ...i) => {
          let s = t.get(r);
          if (void 0 !== s) return s;
          let n = e(r, ...i);
          return t.set(r, n), n;
        };
      }
      let e1 = BigInt(0),
        e2 = BigInt(1),
        e8 = BigInt(2),
        e3 = BigInt(3),
        e5 = BigInt(4),
        e6 = BigInt(5),
        e4 = BigInt(8);
      function e9(e, t) {
        let r = e % t;
        return r >= e1 ? r : t + r;
      }
      function e7(e, t, r) {
        let i = e;
        for (; t-- > e1; ) (i *= i), (i %= r);
        return i;
      }
      function te(e, t) {
        if (e === e1) throw Error("invert: expected non-zero number");
        if (t <= e1) throw Error("invert: expected positive modulus, got " + t);
        let r = e9(e, t),
          i = t,
          s = e1,
          n = e2;
        for (; r !== e1; ) {
          let e = i / r,
            t = i % r,
            o = s - n * e;
          (i = r), (r = t), (s = n), (n = o);
        }
        if (i !== e2) throw Error("invert: does not exist");
        return e9(s, t);
      }
      let tt = (e, t) => (e9(e, t) & e2) === e2,
        tr = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
      function ti(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function ts(e, t, r = !1, i = {}) {
        let s;
        if (e <= e1) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: n, nByteLength: o } = ti(e, t);
        if (o > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: o,
          MASK: eZ(n),
          ZERO: e1,
          ONE: e2,
          create: (t) => e9(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return e1 <= t && t < e;
          },
          is0: (e) => e === e1,
          isOdd: (e) => (e & e2) === e2,
          neg: (t) => e9(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => e9(t * t, e),
          add: (t, r) => e9(t + r, e),
          sub: (t, r) => e9(t - r, e),
          mul: (t, r) => e9(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < e1)
                throw Error("invalid exponent, negatives unsupported");
              if (r === e1) return e.ONE;
              if (r === e2) return t;
              let i = e.ONE,
                s = t;
              for (; r > e1; )
                r & e2 && (i = e.mul(i, s)), (s = e.sqr(s)), (r >>= e2);
              return i;
            })(a, e, t),
          div: (t, r) => e9(t * te(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => te(t, e),
          sqrt:
            i.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % e5 === e3) {
                    let t = (e + e2) / e5;
                    return function (e, r) {
                      let i = e.pow(r, t);
                      if (!e.eql(e.sqr(i), r))
                        throw Error("Cannot find square root");
                      return i;
                    };
                  }
                  if (e % e4 === e6) {
                    let t = (e - e6) / e4;
                    return function (e, r) {
                      let i = e.mul(r, e8),
                        s = e.pow(i, t),
                        n = e.mul(r, s),
                        o = e.mul(e.mul(n, e8), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), r))
                        throw Error("Cannot find square root");
                      return a;
                    };
                  }
                  return (function (e) {
                    let t, r, i;
                    let s = (e - e2) / e8;
                    for (t = e - e2, r = 0; t % e8 === e1; t /= e8, r++);
                    for (
                      i = e8;
                      i < e &&
                      (function (e, t, r) {
                        if (t < e1)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (r <= e1) throw Error("invalid modulus");
                        if (r === e2) return e1;
                        let i = e2;
                        for (; t > e1; )
                          t & e2 && (i = (i * e) % r),
                            (e = (e * e) % r),
                            (t >>= e2);
                        return i;
                      })(i, s, e) !==
                        e - e2;
                      i++
                    )
                      if (i > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === r) {
                      let t = (e + e2) / e5;
                      return function (e, r) {
                        let i = e.pow(r, t);
                        if (!e.eql(e.sqr(i), r))
                          throw Error("Cannot find square root");
                        return i;
                      };
                    }
                    let n = (t + e2) / e8;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let a = r,
                        c = e.pow(e.mul(e.ONE, i), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++)
                          r = e.sqr(r);
                        let r = e.pow(c, e2 << BigInt(a - t - 1));
                        (c = e.sqr(r)),
                          (l = e.mul(l, r)),
                          (h = e.mul(h, c)),
                          (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                i = t.reduce(
                  (t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))),
                  e.ONE
                ),
                s = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, s) =>
                    e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i)),
                  s
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? eK(e, o) : eV(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error(
                "Field.fromBytes: expected " + o + " bytes, got " + e.length
              );
            return r ? eH(e) : eM(eq(e));
          },
        });
        return Object.freeze(a);
      }
      let tn = BigInt(0),
        to = BigInt(1);
      function ta(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function tc(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function tl(e, t) {
        return (
          tc(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let th = new WeakMap(),
        tu = new WeakMap();
      function td(e) {
        return tu.get(e) || 1;
      }
      let tp = BigInt(0),
        tf = BigInt(1),
        tg = BigInt(2),
        ty = BigInt(8),
        tm = { zip215: !0 };
      BigInt(0), BigInt(1);
      let tb = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        tw = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        );
      BigInt(0);
      let tv = BigInt(1),
        tE = BigInt(2);
      BigInt(3);
      let t_ = BigInt(5),
        tI = BigInt(8),
        tD = ts(tb, void 0, !0),
        tS = {
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: tD,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: tI,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: eT,
          randomBytes: ew,
          adjustScalarBytes: function (e) {
            return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
          },
          uvRatio: function (e, t) {
            let r = e9(t * t * t, tb),
              i = e9(r * r * t, tb),
              s = (function (e) {
                let t = BigInt(10),
                  r = BigInt(20),
                  i = BigInt(40),
                  s = BigInt(80),
                  n = (((e * e) % tb) * e) % tb,
                  o = (e7(n, tE, tb) * n) % tb,
                  a = (e7(o, tv, tb) * e) % tb,
                  c = (e7(a, t_, tb) * a) % tb,
                  l = (e7(c, t, tb) * c) % tb,
                  h = (e7(l, r, tb) * l) % tb,
                  u = (e7(h, i, tb) * h) % tb,
                  d = (e7(u, s, tb) * u) % tb,
                  p = (e7(d, s, tb) * u) % tb,
                  f = (e7(p, t, tb) * c) % tb;
                return { pow_p_5_8: (e7(f, tE, tb) * e) % tb, b2: n };
              })(e * i).pow_p_5_8,
              n = e9(e * r * s, tb),
              o = e9(t * n * n, tb),
              a = n,
              c = e9(n * tw, tb),
              l = o === e,
              h = o === e9(-e, tb),
              u = o === e9(-e * tw, tb);
            return (
              l && (n = a),
              (h || u) && (n = c),
              tt(n, tb) && (n = e9(-n, tb)),
              { isValid: l || h, value: n }
            );
          },
        },
        tP = (function (e) {
          var t;
          let r = (function (e) {
              let t =
                ((function (e) {
                  let t = tr.reduce((e, t) => ((e[t] = "function"), e), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger",
                  });
                  eX(e, t);
                })(e.Fp),
                eX(
                  e,
                  { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
                  { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
                ),
                Object.freeze({
                  ...ti(e.n, e.nBitLength),
                  ...e,
                  p: e.Fp.ORDER,
                }));
              return (
                eX(
                  e,
                  {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function",
                  },
                  {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function",
                  }
                ),
                Object.freeze({ ...t })
              );
            })(e),
            {
              Fp: i,
              n: s,
              prehash: n,
              hash: o,
              randomBytes: a,
              nByteLength: c,
              h: l,
            } = r,
            h = tg << (BigInt(8 * c) - tf),
            u = i.create,
            d = ts(r.n, r.nBitLength),
            p =
              r.uvRatio ||
              ((e, t) => {
                try {
                  return { isValid: !0, value: i.sqrt(e * i.inv(t)) };
                } catch {
                  return { isValid: !1, value: tp };
                }
              }),
            f = r.adjustScalarBytes || ((e) => e),
            g =
              r.domain ||
              ((e, t, r) => {
                if ((ek("phflag", r), t.length || r))
                  throw Error("Contexts/pre-hash are not supported");
                return e;
              });
          function y(e, t) {
            eJ("coordinate " + e, t, tp, h);
          }
          function m(e) {
            if (!(e instanceof v)) throw Error("ExtendedPoint expected");
          }
          let b = e0((e, t) => {
              let { ex: r, ey: s, ez: n } = e,
                o = e.is0();
              null == t && (t = o ? ty : i.inv(n));
              let a = u(r * t),
                c = u(s * t),
                l = u(n * t);
              if (o) return { x: tp, y: tf };
              if (l !== tf) throw Error("invZ was invalid");
              return { x: a, y: c };
            }),
            w = e0((e) => {
              let { a: t, d: i } = r;
              if (e.is0()) throw Error("bad point: ZERO");
              let { ex: s, ey: n, ez: o, et: a } = e,
                c = u(s * s),
                l = u(n * n),
                h = u(o * o),
                d = u(h * h),
                p = u(c * t),
                f = u(h * u(p + l)),
                g = u(d + u(i * u(c * l)));
              if (f !== g) throw Error("bad point: equation left != right (1)");
              let y = u(s * n),
                m = u(o * a);
              if (y !== m) throw Error("bad point: equation left != right (2)");
              return !0;
            });
          class v {
            constructor(e, t, r, i) {
              (this.ex = e),
                (this.ey = t),
                (this.ez = r),
                (this.et = i),
                y("x", e),
                y("y", t),
                y("z", r),
                y("t", i),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(e) {
              if (e instanceof v) throw Error("extended point not allowed");
              let { x: t, y: r } = e || {};
              return y("x", t), y("y", r), new v(t, r, tf, u(t * r));
            }
            static normalizeZ(e) {
              let t = i.invertBatch(e.map((e) => e.ez));
              return e.map((e, r) => e.toAffine(t[r])).map(v.fromAffine);
            }
            static msm(e, t) {
              return (function (e, t, r, i) {
                if (
                  ((function (e, t) {
                    if (!Array.isArray(e)) throw Error("array expected");
                    e.forEach((e, r) => {
                      if (!(e instanceof t))
                        throw Error("invalid point at index " + r);
                    });
                  })(r, e),
                  (function (e, t) {
                    if (!Array.isArray(e))
                      throw Error("array of scalars expected");
                    e.forEach((e, r) => {
                      if (!t.isValid(e))
                        throw Error("invalid scalar at index " + r);
                    });
                  })(i, t),
                  r.length !== i.length)
                )
                  throw Error(
                    "arrays of points and scalars must have equal length"
                  );
                let s = e.ZERO,
                  n = (function (e) {
                    let t;
                    for (t = 0; e > eN; e >>= eR, t += 1);
                    return t;
                  })(BigInt(r.length)),
                  o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                  a = (1 << o) - 1,
                  c = Array(a + 1).fill(s),
                  l = Math.floor((t.BITS - 1) / o) * o,
                  h = s;
                for (let e = l; e >= 0; e -= o) {
                  c.fill(s);
                  for (let t = 0; t < i.length; t++) {
                    let s = i[t],
                      n = Number((s >> BigInt(e)) & BigInt(a));
                    c[n] = c[n].add(r[t]);
                  }
                  let t = s;
                  for (let e = c.length - 1, r = s; e > 0; e--)
                    (r = r.add(c[e])), (t = t.add(r));
                  if (((h = h.add(t)), 0 !== e))
                    for (let e = 0; e < o; e++) h = h.double();
                }
                return h;
              })(v, d, e, t);
            }
            _setWindowSize(e) {
              I.setWindowSize(this, e);
            }
            assertValidity() {
              w(this);
            }
            equals(e) {
              m(e);
              let { ex: t, ey: r, ez: i } = this,
                { ex: s, ey: n, ez: o } = e,
                a = u(t * o),
                c = u(s * i),
                l = u(r * o),
                h = u(n * i);
              return a === c && l === h;
            }
            is0() {
              return this.equals(v.ZERO);
            }
            negate() {
              return new v(u(-this.ex), this.ey, this.ez, u(-this.et));
            }
            double() {
              let { a: e } = r,
                { ex: t, ey: i, ez: s } = this,
                n = u(t * t),
                o = u(i * i),
                a = u(tg * u(s * s)),
                c = u(e * n),
                l = t + i,
                h = u(u(l * l) - n - o),
                d = c + o,
                p = d - a,
                f = c - o,
                g = u(h * p),
                y = u(d * f),
                m = u(h * f),
                b = u(p * d);
              return new v(g, y, b, m);
            }
            add(e) {
              m(e);
              let { a: t, d: i } = r,
                { ex: s, ey: n, ez: o, et: a } = this,
                { ex: c, ey: l, ez: h, et: d } = e;
              if (t === BigInt(-1)) {
                let e = u((n - s) * (l + c)),
                  t = u((n + s) * (l - c)),
                  r = u(t - e);
                if (r === tp) return this.double();
                let i = u(o * tg * d),
                  p = u(a * tg * h),
                  f = p + i,
                  g = t + e,
                  y = p - i,
                  m = u(f * r),
                  b = u(g * y),
                  w = u(f * y),
                  E = u(r * g);
                return new v(m, b, E, w);
              }
              let p = u(s * c),
                f = u(n * l),
                g = u(a * i * d),
                y = u(o * h),
                b = u((s + n) * (c + l) - p - f),
                w = y - g,
                E = y + g,
                _ = u(f - t * p),
                I = u(b * w),
                D = u(E * _),
                S = u(b * _),
                P = u(w * E);
              return new v(I, D, P, S);
            }
            subtract(e) {
              return this.add(e.negate());
            }
            wNAF(e) {
              return I.wNAFCached(this, e, v.normalizeZ);
            }
            multiply(e) {
              eJ("scalar", e, tf, s);
              let { p: t, f: r } = this.wNAF(e);
              return v.normalizeZ([t, r])[0];
            }
            multiplyUnsafe(e, t = v.ZERO) {
              return (
                eJ("scalar", e, tp, s),
                e === tp
                  ? _
                  : this.is0() || e === tf
                  ? this
                  : I.wNAFCachedUnsafe(this, e, v.normalizeZ, t)
              );
            }
            isSmallOrder() {
              return this.multiplyUnsafe(l).is0();
            }
            isTorsionFree() {
              return I.unsafeLadder(this, s).is0();
            }
            toAffine(e) {
              return b(this, e);
            }
            clearCofactor() {
              let { h: e } = r;
              return e === tf ? this : this.multiplyUnsafe(e);
            }
            static fromHex(e, t = !1) {
              let { d: s, a: n } = r,
                o = i.BYTES;
              (e = eW("pointHex", e, o)), ek("zip215", t);
              let a = e.slice(),
                c = e[o - 1];
              a[o - 1] = -129 & c;
              let l = eH(a),
                d = t ? h : i.ORDER;
              eJ("pointHex.y", l, tp, d);
              let f = u(l * l),
                g = u(f - tf),
                y = u(s * f - n),
                { isValid: m, value: b } = p(g, y);
              if (!m) throw Error("Point.fromHex: invalid y coordinate");
              let w = (b & tf) === tf,
                E = (128 & c) != 0;
              if (!t && b === tp && E)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return E !== w && (b = u(-b)), v.fromAffine({ x: b, y: l });
            }
            static fromPrivateKey(e) {
              return D(e).point;
            }
            toRawBytes() {
              let { x: e, y: t } = this.toAffine(),
                r = eK(t, i.BYTES);
              return (r[r.length - 1] |= e & tf ? 128 : 0), r;
            }
            toHex() {
              return eq(this.toRawBytes());
            }
          }
          (v.BASE = new v(r.Gx, r.Gy, tf, u(r.Gx * r.Gy))),
            (v.ZERO = new v(tp, tf, tf, tp));
          let { BASE: E, ZERO: _ } = v,
            I =
              ((t = 8 * c),
              {
                constTimeNegate: ta,
                hasPrecomputes: (e) => 1 !== td(e),
                unsafeLadder(e, t, r = v.ZERO) {
                  let i = e;
                  for (; t > tn; )
                    t & to && (r = r.add(i)), (i = i.double()), (t >>= to);
                  return r;
                },
                precomputeWindow(e, r) {
                  let { windows: i, windowSize: s } = tl(r, t),
                    n = [],
                    o = e,
                    a = o;
                  for (let e = 0; e < i; e++) {
                    (a = o), n.push(a);
                    for (let e = 1; e < s; e++) (a = a.add(o)), n.push(a);
                    o = a.double();
                  }
                  return n;
                },
                wNAF(e, r, i) {
                  let { windows: s, windowSize: n } = tl(e, t),
                    o = v.ZERO,
                    a = v.BASE,
                    c = BigInt(2 ** e - 1),
                    l = 2 ** e,
                    h = BigInt(e);
                  for (let e = 0; e < s; e++) {
                    let t = e * n,
                      s = Number(i & c);
                    (i >>= h), s > n && ((s -= l), (i += to));
                    let u = t + Math.abs(s) - 1,
                      d = e % 2 != 0,
                      p = s < 0;
                    0 === s
                      ? (a = a.add(ta(d, r[t])))
                      : (o = o.add(ta(p, r[u])));
                  }
                  return { p: o, f: a };
                },
                wNAFUnsafe(e, r, i, s = v.ZERO) {
                  let { windows: n, windowSize: o } = tl(e, t),
                    a = BigInt(2 ** e - 1),
                    c = 2 ** e,
                    l = BigInt(e);
                  for (let e = 0; e < n; e++) {
                    let t = e * o;
                    if (i === tn) break;
                    let n = Number(i & a);
                    if (((i >>= l), n > o && ((n -= c), (i += to)), 0 === n))
                      continue;
                    let h = r[t + Math.abs(n) - 1];
                    n < 0 && (h = h.negate()), (s = s.add(h));
                  }
                  return s;
                },
                getPrecomputes(e, t, r) {
                  let i = th.get(t);
                  return (
                    i ||
                      ((i = this.precomputeWindow(t, e)),
                      1 !== e && th.set(t, r(i))),
                    i
                  );
                },
                wNAFCached(e, t, r) {
                  let i = td(e);
                  return this.wNAF(i, this.getPrecomputes(i, e, r), t);
                },
                wNAFCachedUnsafe(e, t, r, i) {
                  let s = td(e);
                  return 1 === s
                    ? this.unsafeLadder(e, t, i)
                    : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), t, i);
                },
                setWindowSize(e, r) {
                  tc(r, t), tu.set(e, r), th.delete(e);
                },
              });
          function D(e) {
            let t = i.BYTES;
            e = eW("private key", e, t);
            let r = eW("hashed private key", o(e), 2 * t),
              n = f(r.slice(0, t)),
              a = r.slice(t, 2 * t),
              c = e9(eH(n), s),
              l = E.multiply(c),
              h = l.toRawBytes();
            return { head: n, prefix: a, scalar: c, point: l, pointBytes: h };
          }
          function S(e = new Uint8Array(), ...t) {
            let r = eG(...t);
            return e9(eH(o(g(r, eW("context", e), !!n))), s);
          }
          return (
            E._setWindowSize(8),
            {
              CURVE: r,
              getPublicKey: function (e) {
                return D(e).pointBytes;
              },
              sign: function (e, t, r = {}) {
                (e = eW("message", e)), n && (e = n(e));
                let { prefix: o, scalar: a, pointBytes: c } = D(t),
                  l = S(r.context, o, e),
                  h = E.multiply(l).toRawBytes(),
                  u = S(r.context, h, c, e),
                  d = e9(l + u * a, s);
                eJ("signature.s", d, tp, s);
                let p = eG(h, eK(d, i.BYTES));
                return eW("result", p, 2 * i.BYTES);
              },
              verify: function (e, t, r, s = tm) {
                let o, a, c;
                let { context: l, zip215: h } = s,
                  u = i.BYTES;
                (e = eW("signature", e, 2 * u)),
                  (t = eW("message", t)),
                  (r = eW("publicKey", r, u)),
                  void 0 !== h && ek("zip215", h),
                  n && (t = n(t));
                let d = eH(e.slice(u, 2 * u));
                try {
                  (o = v.fromHex(r, h)),
                    (a = v.fromHex(e.slice(0, u), h)),
                    (c = E.multiplyUnsafe(d));
                } catch {
                  return !1;
                }
                if (!h && o.isSmallOrder()) return !1;
                let p = S(l, a.toRawBytes(), o.toRawBytes(), t);
                return a
                  .add(o.multiplyUnsafe(p))
                  .subtract(c)
                  .clearCofactor()
                  .equals(v.ZERO);
              },
              ExtendedPoint: v,
              utils: {
                getExtendedPublicKey: D,
                randomPrivateKey: () => a(i.BYTES),
                precompute: (e = 8, t = v.BASE) => (
                  t._setWindowSize(e), t.multiply(BigInt(3)), t
                ),
              },
            }
          );
        })(tS),
        tO = "base64url",
        tx = "utf8",
        tA = "utf8",
        tC = "base58btc";
      function tT(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function tN(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? tT(globalThis.Buffer.allocUnsafe(e))
          : new Uint8Array(e);
      }
      function tR(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = tN(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return tT(r);
      }
      var tj = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + " is ambiguous");
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (
              var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
              e[t];

            ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var u = 0, d = n - 1;
                (0 !== h || u < s) && -1 !== d;
                d--, u++
              )
                (h += (a * o[d]) >>> 0),
                  (o[d] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = u), t++;
            }
            if (" " !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; )
                f[g++] = o[p++];
              return f;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
              s++, r++;
            for (
              var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
              s !== n;

            ) {
              for (
                var u = t[s], d = 0, p = o - 1;
                (0 !== u || d < i) && -1 !== p;
                p--, d++
              )
                (u += (256 * l[p]) >>> 0),
                  (l[p] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let tL = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        tU = (e) => new TextEncoder().encode(e),
        tk = (e) => new TextDecoder().decode(e);
      class tB {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class tq {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return t$(this, e);
        }
      }
      class tM {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return t$(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let t$ = (e, t) =>
        new tM({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class tz {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new tB(e, t, r)),
            (this.decoder = new tq(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let tF = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new tz(e, t, r, i),
        tH = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = tj(r, t);
          return tF({ prefix: e, name: t, encode: i, decode: (e) => tL(s(e)) });
        },
        tV = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n),
              (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        tK = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            s = (1 << r) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i))
            for (; (n.length * r) & 7; ) n += "=";
          return n;
        },
        tW = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          tF({
            prefix: t,
            name: e,
            encode: (e) => tK(e, i, r),
            decode: (t) => tV(t, i, r, e),
          }),
        tG = tF({
          prefix: "\x00",
          name: "identity",
          encode: (e) => tk(e),
          decode: (e) => tU(e),
        });
      var tY = Object.freeze({ __proto__: null, identity: tG });
      let tJ = tW({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var tZ = Object.freeze({ __proto__: null, base2: tJ });
      let tQ = tW({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var tX = Object.freeze({ __proto__: null, base8: tQ });
      let t0 = tH({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var t1 = Object.freeze({ __proto__: null, base10: t0 });
      let t2 = tW({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        t8 = tW({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var t3 = Object.freeze({ __proto__: null, base16: t2, base16upper: t8 });
      let t5 = tW({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        t6 = tW({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        t4 = tW({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        t9 = tW({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        t7 = tW({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        re = tW({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        rt = tW({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        rr = tW({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        ri = tW({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var rs = Object.freeze({
        __proto__: null,
        base32: t5,
        base32upper: t6,
        base32pad: t4,
        base32padupper: t9,
        base32hex: t7,
        base32hexupper: re,
        base32hexpad: rt,
        base32hexpadupper: rr,
        base32z: ri,
      });
      let rn = tH({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        ro = tH({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var ra = Object.freeze({ __proto__: null, base36: rn, base36upper: ro });
      let rc = tH({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        rl = tH({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var rh = Object.freeze({
        __proto__: null,
        base58btc: rc,
        base58flickr: rl,
      });
      let ru = tW({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        rd = tW({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        rp = tW({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        rf = tW({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var rg = Object.freeze({
        __proto__: null,
        base64: ru,
        base64pad: rd,
        base64url: rp,
        base64urlpad: rf,
      });
      let ry = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        rm = ry.reduce((e, t, r) => ((e[r] = t), e), []),
        rb = ry.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        rw = tF({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += rm[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = rb[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var rv = Object.freeze({ __proto__: null, base256emoji: rw });
      function rE(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 2147483648; )
          (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (rE.bytes = r - i + 1), t;
      }
      function r_(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((r_.bytes = 0), RangeError("Could not decode varint"));
          (r = e[n++]),
            (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)),
            (s += 7);
        } while (r >= 128);
        return (r_.bytes = n - t), i;
      }
      var rI = {
        encode: rE,
        decode: r_,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 268435456
            ? 4
            : e < 34359738368
            ? 5
            : e < 4398046511104
            ? 6
            : e < 562949953421312
            ? 7
            : e < 72057594037927940
            ? 8
            : e < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let rD = (e, t, r = 0) => (rI.encode(e, t, r), t),
        rS = (e) => rI.encodingLength(e),
        rP = (e, t) => {
          let r = t.byteLength,
            i = rS(e),
            s = i + rS(r),
            n = new Uint8Array(s + r);
          return rD(e, n, 0), rD(r, n, i), n.set(t, s), new rO(e, r, t, n);
        };
      class rO {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let rx = ({ name: e, code: t, encode: r }) => new rA(e, t, r);
      class rA {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? rP(this.code, t)
              : t.then((e) => rP(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let rC = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        rT = rx({ name: "sha2-256", code: 18, encode: rC("SHA-256") }),
        rN = rx({ name: "sha2-512", code: 19, encode: rC("SHA-512") });
      var rR = Object.freeze({ __proto__: null, sha256: rT, sha512: rN });
      let rj = (e) => rP(0, tL(e));
      var rL = Object.freeze({
        __proto__: null,
        identity: { code: 0, name: "identity", encode: tL, digest: rj },
      });
      new TextEncoder(), new TextDecoder();
      let rU = {
        ...tY,
        ...tZ,
        ...tX,
        ...t1,
        ...t3,
        ...rs,
        ...ra,
        ...rh,
        ...rg,
        ...rv,
      };
      function rk(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...rR, ...rL });
      let rB = rk(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        rq = rk(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            e = e.substring(1);
            let t = tN(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        rM = {
          utf8: rB,
          "utf-8": rB,
          hex: rU.base16,
          latin1: rq,
          ascii: rq,
          binary: rq,
          ...rU,
        };
      function r$(e, t = "utf8") {
        let r = rM[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8")
          : r.encoder.encode(e).substring(1);
      }
      function rz(e, t = "utf8") {
        let r = rM[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? tT(globalThis.Buffer.from(e, "utf-8"))
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function rF(e) {
        return eu(r$(rz(e, tO), tx));
      }
      function rH(e) {
        return r$(rz(ed(e), tx), tO);
      }
      function rV(e) {
        let t = rz("K36", tC),
          r = "z" + r$(tR([t, e]), tC);
        return ["did", "key", r].join(":");
      }
      function rK(e) {
        let t = e.split("."),
          r = rF(t[0]),
          i = rF(t[1]),
          s = rz(t[2], tO),
          n = rz(t.slice(0, 2).join("."), tA);
        return { header: r, payload: i, signature: s, data: n };
      }
      function rW(e = ew(32)) {
        let t = tP.getPublicKey(e);
        return { secretKey: tR([e, t]), publicKey: t };
      }
      async function rG(e, t, r, i, s = (0, T.fromMiliseconds)(Date.now())) {
        var n, o;
        let a = { alg: "EdDSA", typ: "JWT" },
          c = rV(i.publicKey),
          l = { iss: c, sub: e, aud: t, iat: s, exp: s + r },
          h = rz(
            [rH((n = { header: a, payload: l }).header), rH(n.payload)].join(
              "."
            ),
            tA
          ),
          u = tP.sign(h, i.secretKey.slice(0, 32));
        return [
          rH((o = { header: a, payload: l, signature: u }).header),
          rH(o.payload),
          r$(o.signature, tO),
        ].join(".");
      }
      function rY(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function rJ(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        let r = rY(t),
          i = 0;
        for (let t of e) r.set(t, i), (i += t.length);
        return r;
      }
      var rZ = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + " is ambiguous");
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (
              var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
              e[t];

            ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var u = 0, d = n - 1;
                (0 !== h || u < s) && -1 !== d;
                d--, u++
              )
                (h += (a * o[d]) >>> 0),
                  (o[d] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = u), t++;
            }
            if (" " !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; )
                f[g++] = o[p++];
              return f;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
              s++, r++;
            for (
              var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
              s !== n;

            ) {
              for (
                var u = t[s], d = 0, p = o - 1;
                (0 !== u || d < i) && -1 !== p;
                p--, d++
              )
                (u += (256 * l[p]) >>> 0),
                  (l[p] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      new Uint8Array(0);
      let rQ = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        rX = (e) => new TextEncoder().encode(e),
        r0 = (e) => new TextDecoder().decode(e);
      class r1 {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class r2 {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return r3(this, e);
        }
      }
      class r8 {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return r3(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let r3 = (e, t) =>
        new r8({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class r5 {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new r1(e, t, r)),
            (this.decoder = new r2(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let r6 = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new r5(e, t, r, i),
        r4 = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = rZ(r, t);
          return r6({ prefix: e, name: t, encode: i, decode: (e) => rQ(s(e)) });
        },
        r9 = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n),
              (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        r7 = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            s = (1 << r) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i))
            for (; (n.length * r) & 7; ) n += "=";
          return n;
        },
        ie = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          r6({
            prefix: t,
            name: e,
            encode: (e) => r7(e, i, r),
            decode: (t) => r9(t, i, r, e),
          }),
        it = r6({
          prefix: "\x00",
          name: "identity",
          encode: (e) => r0(e),
          decode: (e) => rX(e),
        }),
        ir = ie({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        ii = ie({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        is = r4({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        io = ie({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        ia = ie({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        ic = ie({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        il = ie({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        ih = ie({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        iu = ie({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        id = ie({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        ip = ie({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        ig = ie({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        iy = ie({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        im = ie({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        ib = r4({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        iw = r4({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        iv = r4({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        iE = r4({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        i_ = ie({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        iI = ie({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        iD = ie({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        iS = ie({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        iP = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        iO = iP.reduce((e, t, r) => ((e[r] = t), e), []),
        ix = iP.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        iA = r6({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += iO[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = ix[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      function iC(e, t, r) {
        t = t || [];
        for (var i = (r = r || 0); e >= 2147483648; )
          (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (iC.bytes = r - i + 1), t;
      }
      function iT(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((iT.bytes = 0), RangeError("Could not decode varint"));
          (r = e[n++]),
            (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)),
            (s += 7);
        } while (r >= 128);
        return (iT.bytes = n - t), i;
      }
      var iN = {
        encode: iC,
        decode: iT,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 268435456
            ? 4
            : e < 34359738368
            ? 5
            : e < 4398046511104
            ? 6
            : e < 562949953421312
            ? 7
            : e < 72057594037927940
            ? 8
            : e < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let iR = (e, t, r = 0) => (iN.encode(e, t, r), t),
        ij = (e) => iN.encodingLength(e),
        iL = (e, t) => {
          let r = t.byteLength,
            i = ij(e),
            s = i + ij(r),
            n = new Uint8Array(s + r);
          return iR(e, n, 0), iR(r, n, i), n.set(t, s), new iU(e, r, t, n);
        };
      class iU {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let ik = ({ name: e, code: t, encode: r }) => new iB(e, t, r);
      class iB {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? iL(this.code, t)
              : t.then((e) => iL(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let iq = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        iM = ik({ name: "sha2-256", code: 18, encode: iq("SHA-256") }),
        i$ = ik({ name: "sha2-512", code: 19, encode: iq("SHA-512") }),
        iz = (e) => iL(0, rQ(e)),
        iF = { code: 0, name: "identity", encode: rQ, digest: iz },
        iH = "raw",
        iV = 85,
        iK = (e) => rQ(e),
        iW = (e) => rQ(e),
        iG = new TextEncoder(),
        iY = new TextDecoder(),
        iJ = "json",
        iZ = 512,
        iQ = (e) => iG.encode(JSON.stringify(e)),
        iX = (e) => JSON.parse(iY.decode(e));
      class i0 {
        constructor(e, t, r, i) {
          (this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = i),
            (this.byteOffset = i.byteOffset),
            (this.byteLength = i.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: i7,
              byteLength: i7,
              code: i9,
              version: i9,
              multihash: i9,
              bytes: i9,
              _baseCache: i7,
              asCID: i7,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: e, multihash: t } = this;
            if (e !== i3)
              throw Error("Cannot convert a non dag-pb CID to CIDv0");
            if (t.code !== i5)
              throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
            return i0.createV0(t);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: e, digest: t } = this.multihash,
                r = Digest.create(e, t);
              return i0.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            Digest.equals(this.multihash, e.multihash)
          );
        }
        toString(e) {
          let { bytes: t, version: r, _baseCache: i } = this;
          return 0 === r
            ? i2(t, i, e || base58btc.encoder)
            : i8(t, i, e || base32.encoder);
        }
        toJSON() {
          return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes,
          };
        }
        get [Symbol.toStringTag]() {
          return "CID";
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return "CID(" + this.toString() + ")";
        }
        static isCID(e) {
          return se(/^0\.0/, st), !!(e && (e[i4] || e.asCID === e));
        }
        get toBaseEncodedString() {
          throw Error("Deprecated, use .toString()");
        }
        get codec() {
          throw Error(
            '"codec" property is deprecated, use integer "code" property instead'
          );
        }
        get buffer() {
          throw Error(
            "Deprecated .buffer property, use .bytes to get Uint8Array instead"
          );
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof i0) return e;
          if (null != e && e.asCID === e) {
            let { version: t, code: r, multihash: i, bytes: s } = e;
            return new i0(t, r, i, s || i6(t, r, i.bytes));
          }
          if (null == e || !0 !== e[i4]) return null;
          {
            let { version: t, multihash: r, code: i } = e,
              s = Digest.decode(r);
            return i0.create(t, i, s);
          }
        }
        static create(e, t, r) {
          if ("number" != typeof t)
            throw Error("String codecs are no longer supported");
          switch (e) {
            case 0:
              if (t === i3) return new i0(e, t, r, r.bytes);
              throw Error(
                `Version 0 CID must use dag-pb (code: ${i3}) block encoding`
              );
            case 1: {
              let i = i6(e, t, r.bytes);
              return new i0(e, t, r, i);
            }
            default:
              throw Error("Invalid version");
          }
        }
        static createV0(e) {
          return i0.create(0, i3, e);
        }
        static createV1(e, t) {
          return i0.create(1, e, t);
        }
        static decode(e) {
          let [t, r] = i0.decodeFirst(e);
          if (r.length) throw Error("Incorrect length");
          return t;
        }
        static decodeFirst(e) {
          let t = i0.inspectBytes(e),
            r = t.size - t.multihashSize,
            i = coerce(e.subarray(r, r + t.multihashSize));
          if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
          let s = i.subarray(t.multihashSize - t.digestSize),
            n = new Digest.Digest(t.multihashCode, t.digestSize, s, i),
            o = 0 === t.version ? i0.createV0(n) : i0.createV1(t.codec, n);
          return [o, e.subarray(t.size)];
        }
        static inspectBytes(e) {
          let t = 0,
            r = () => {
              let [r, i] = varint.decode(e.subarray(t));
              return (t += i), r;
            },
            i = r(),
            s = i3;
          if (
            (18 === i ? ((i = 0), (t = 0)) : 1 === i && (s = r()),
            0 !== i && 1 !== i)
          )
            throw RangeError(`Invalid CID version ${i}`);
          let n = t,
            o = r(),
            a = r(),
            c = t + a;
          return {
            version: i,
            codec: s,
            multihashCode: o,
            digestSize: a,
            multihashSize: c - n,
            size: c,
          };
        }
        static parse(e, t) {
          let [r, i] = i1(e, t),
            s = i0.decode(i);
          return s._baseCache.set(r, e), s;
        }
      }
      let i1 = (e, t) => {
          switch (e[0]) {
            case "Q": {
              let r = t || base58btc;
              return [base58btc.prefix, r.decode(`${base58btc.prefix}${e}`)];
            }
            case base58btc.prefix: {
              let r = t || base58btc;
              return [base58btc.prefix, r.decode(e)];
            }
            case base32.prefix: {
              let r = t || base32;
              return [base32.prefix, r.decode(e)];
            }
            default:
              if (null == t)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
                );
              return [e[0], t.decode(e)];
          }
        },
        i2 = (e, t, r) => {
          let { prefix: i } = r;
          if (i !== base58btc.prefix)
            throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          let s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e).slice(1);
            return t.set(i, s), s;
          }
        },
        i8 = (e, t, r) => {
          let { prefix: i } = r,
            s = t.get(i);
          if (null != s) return s;
          {
            let s = r.encode(e);
            return t.set(i, s), s;
          }
        },
        i3 = 112,
        i5 = 18,
        i6 = (e, t, r) => {
          let i = varint.encodingLength(e),
            s = i + varint.encodingLength(t),
            n = new Uint8Array(s + r.byteLength);
          return (
            varint.encodeTo(e, n, 0), varint.encodeTo(t, n, i), n.set(r, s), n
          );
        },
        i4 = Symbol.for("@ipld/js-cid/CID"),
        i9 = { writable: !1, configurable: !1, enumerable: !0 },
        i7 = { writable: !1, enumerable: !1, configurable: !1 },
        se = (e, t) => {
          if (e.test("0.0.0-dev")) console.warn(t);
          else throw Error(t);
        },
        st = null,
        sr = { ...s, ...n, ...o, ...a, ...c, ...l, ...h, ...u, ...d, ...p };
      function si(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...f, ...g });
      let ss = si(
          "utf8",
          "u",
          (e) => {
            let t = new TextDecoder("utf8");
            return "u" + t.decode(e);
          },
          (e) => {
            let t = new TextEncoder();
            return t.encode(e.substring(1));
          }
        ),
        sn = si(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            e = e.substring(1);
            let t = rY(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        so = {
          utf8: ss,
          "utf-8": ss,
          hex: sr.base16,
          latin1: sn,
          ascii: sn,
          binary: sn,
          ...sr,
        };
      function sa(e, t = "utf8") {
        let r = so[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, "utf8")
          : r.decoder.decode(`${r.prefix}${e}`);
      }
      function sc(e, t = "utf8") {
        let r = so[t];
        if (!r) throw Error(`Unsupported encoding "${t}"`);
        return ("utf8" === t || "utf-8" === t) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8")
          : r.encoder.encode(e).substring(1);
      }
      let sl = {
        waku: {
          publish: "waku_publish",
          batchPublish: "waku_batchPublish",
          subscribe: "waku_subscribe",
          batchSubscribe: "waku_batchSubscribe",
          subscription: "waku_subscription",
          unsubscribe: "waku_unsubscribe",
          batchUnsubscribe: "waku_batchUnsubscribe",
          batchFetchMessages: "waku_batchFetchMessages",
        },
        irn: {
          publish: "irn_publish",
          batchPublish: "irn_batchPublish",
          subscribe: "irn_subscribe",
          batchSubscribe: "irn_batchSubscribe",
          subscription: "irn_subscription",
          unsubscribe: "irn_unsubscribe",
          batchUnsubscribe: "irn_batchUnsubscribe",
          batchFetchMessages: "irn_batchFetchMessages",
        },
        iridium: {
          publish: "iridium_publish",
          batchPublish: "iridium_batchPublish",
          subscribe: "iridium_subscribe",
          batchSubscribe: "iridium_batchSubscribe",
          subscription: "iridium_subscription",
          unsubscribe: "iridium_unsubscribe",
          batchUnsubscribe: "iridium_batchUnsubscribe",
          batchFetchMessages: "iridium_batchFetchMessages",
        },
      };
      var sh = r(83454),
        su = r(48764).Buffer;
      function sd(e) {
        let [t, r] = e.split(":");
        return { namespace: t, reference: r };
      }
      function sp(e, t = []) {
        let r = [];
        return (
          Object.keys(e).forEach((i) => {
            if (t.length && !t.includes(i)) return;
            let s = e[i];
            r.push(...s.accounts);
          }),
          r
        );
      }
      function sf(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      var sg = Object.defineProperty,
        sy = Object.defineProperties,
        sm = Object.getOwnPropertyDescriptors,
        sb = Object.getOwnPropertySymbols,
        sw = Object.prototype.hasOwnProperty,
        sv = Object.prototype.propertyIsEnumerable,
        sE = (e, t, r) =>
          t in e
            ? sg(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        s_ = (e, t) => {
          for (var r in t || (t = {})) sw.call(t, r) && sE(e, r, t[r]);
          if (sb) for (var r of sb(t)) sv.call(t, r) && sE(e, r, t[r]);
          return e;
        },
        sI = (e, t) => sy(e, sm(t));
      let sD = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown",
      };
      function sS() {
        return (
          "u" > typeof sh &&
          "u" > typeof sh.versions &&
          "u" > typeof sh.versions.node
        );
      }
      function sP() {
        return (
          !(0, N.getDocument)() &&
          !!(0, N.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function sO() {
        return !sS() && !!(0, N.getNavigator)() && !!(0, N.getDocument)();
      }
      function sx() {
        return sP()
          ? sD.reactNative
          : sS()
          ? sD.node
          : sO()
          ? sD.browser
          : sD.unknown;
      }
      function sA() {
        var e;
        try {
          return sP() &&
            "u" > typeof r.g &&
            "u" > typeof (null == r.g ? void 0 : r.g.Application)
            ? null == (e = r.g.Application)
              ? void 0
              : e.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function sC() {
        return (
          (0, R.D)() || { name: "", description: "", url: "", icons: [""] }
        );
      }
      function sT(e, t, i) {
        let s = (function () {
            var e;
            if (
              sx() === sD.reactNative &&
              "u" > typeof r.g &&
              "u" > typeof (null == r.g ? void 0 : r.g.Platform)
            ) {
              let { OS: e, Version: t } = r.g.Platform;
              return [e, t].join("-");
            }
            let t = e
              ? C(e)
              : "undefined" == typeof document &&
                "undefined" != typeof navigator &&
                "ReactNative" === navigator.product
              ? new P()
              : "undefined" != typeof navigator
              ? C(navigator.userAgent)
              : void 0 !== v && v.version
              ? new I(v.version.slice(1))
              : null;
            if (null === t) return "unknown";
            let i = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === t.type
              ? [i, t.name, t.version].join("-")
              : [i, t.version].join("-");
          })(),
          n = (function () {
            var e;
            let t = sx();
            return t === sD.browser
              ? [
                  t,
                  (null == (e = (0, N.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), ["js", i].join("-"), s, n].join("/");
      }
      function sN(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function sR(e) {
        return Object.fromEntries(e.entries());
      }
      function sj(e) {
        return new Map(Object.entries(e));
      }
      function sL(e = T.FIVE_MINUTES, t) {
        let r, i, s, n;
        let o = (0, T.toMiliseconds)(e || T.FIVE_MINUTES);
        return {
          resolve: (e) => {
            s && r && (clearTimeout(s), r(e), (n = Promise.resolve(e)));
          },
          reject: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          done: () =>
            new Promise((e, a) => {
              if (n) return e(n);
              (s = setTimeout(() => {
                let e = Error(t);
                (n = Promise.reject(e)), a(e);
              }, o)),
                (r = e),
                (i = a);
            }),
        };
      }
      function sU(e, t, r) {
        return new Promise(async (i, s) => {
          let n = setTimeout(() => s(Error(r)), t);
          try {
            let t = await e;
            i(t);
          } catch (e) {
            s(e);
          }
          clearTimeout(n);
        });
      }
      function sk(e, t) {
        if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${t}`;
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${t}`;
        }
        throw Error(`Unknown expirer target type: ${e}`);
      }
      function sB(e) {
        let [t, r] = e.split(":"),
          i = { id: void 0, topic: void 0 };
        if ("topic" === t && "string" == typeof r) i.topic = r;
        else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
        else
          throw Error(
            `Invalid target, expected id:number or topic:string, got ${t}:${r}`
          );
        return i;
      }
      function sq(e, t) {
        return (0, T.fromMiliseconds)(
          (t || Date.now()) + (0, T.toMiliseconds)(e)
        );
      }
      function sM(e) {
        return Date.now() >= (0, T.toMiliseconds)(e);
      }
      function s$(e, t) {
        return `${e}${t ? `:${t}` : ""}`;
      }
      function sz(e = [], t = []) {
        return [...new Set([...e, ...t])];
      }
      async function sF({ id: e, topic: t, wcDeepLink: i }) {
        var s;
        try {
          if (!i) return;
          let n = "string" == typeof i ? JSON.parse(i) : i,
            o = n?.href;
          if ("string" != typeof o) return;
          let a = (function (e, t, r) {
              let i = `requestId=${t}&sessionTopic=${r}`;
              e.endsWith("/") && (e = e.slice(0, -1));
              let s = `${e}`;
              if (e.startsWith("https://t.me")) {
                let t = e.includes("?") ? "&startapp=" : "?startapp=";
                s = `${s}${t}${(function (e, t = !1) {
                  let r = su.from(e).toString("base64");
                  return t ? r.replace(/[=]/g, "") : r;
                })(i, !0)}`;
              } else s = `${s}/wc?${i}`;
              return s;
            })(o, e, t),
            c = sx();
          if (c === sD.browser) {
            let e;
            if (!(null != (s = (0, N.getDocument)()) && s.hasFocus())) {
              console.warn("Document does not have focus, skipping deeplink.");
              return;
            }
            (e = "_self"),
              (function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? (e = "_top")
                : (("u" > typeof window &&
                    (!!window.TelegramWebviewProxy ||
                      !!window.Telegram ||
                      !!window.TelegramWebviewProxyProto)) ||
                    a.startsWith("https://") ||
                    a.startsWith("http://")) &&
                  (e = "_blank"),
              window.open(a, e, "noreferrer noopener");
          } else
            c === sD.reactNative &&
              "u" > typeof (null == r.g ? void 0 : r.g.Linking) &&
              (await r.g.Linking.openURL(a));
        } catch (e) {
          console.error(e);
        }
      }
      async function sH(e, t) {
        let r = "";
        try {
          if (sO() && (r = localStorage.getItem(t))) return r;
          r = await e.getItem(t);
        } catch (e) {
          console.error(e);
        }
        return r;
      }
      function sV(e, t) {
        if (!e.includes(t)) return null;
        let r = e.split(/([&,?,=])/),
          i = r.indexOf(t);
        return r[i + 2];
      }
      function sK() {
        return "u" > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
              let t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            });
      }
      function sW() {
        return "u" > typeof sh && "true" === sh.env.IS_VITEST;
      }
      function sG(e) {
        return su.from(e, "base64").toString("utf-8");
      }
      function sY(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function sJ(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function sZ(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        sY(e.outputLen), sY(e.blockLen);
      }
      function sQ(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function sX(e, t) {
        sJ(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      let s0 = BigInt(4294967296 - 1),
        s1 = BigInt(32),
        s2 = (e, t, r) => (e << r) | (t >>> (32 - r)),
        s8 = (e, t, r) => (t << r) | (e >>> (32 - r)),
        s3 = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        s5 = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        s6 =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0;
      function s4(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function s9(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let s7 = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function ne(e) {
        for (let r = 0; r < e.length; r++) {
          var t;
          e[r] =
            (((t = e[r]) << 24) & 4278190080) |
            ((t << 8) & 16711680) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      function nt(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          sJ(e),
          e
        );
      }
      class nr {
        clone() {
          return this._cloneInto();
        }
      }
      function ni(e) {
        let t = (t) => e().update(nt(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function ns(e = 32) {
        if (s6 && "function" == typeof s6.getRandomValues)
          return s6.getRandomValues(new Uint8Array(e));
        if (s6 && "function" == typeof s6.randomBytes) return s6.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      let nn = [],
        no = [],
        na = [],
        nc = BigInt(0),
        nl = BigInt(1),
        nh = BigInt(2),
        nu = BigInt(7),
        nd = BigInt(256),
        np = BigInt(113);
      for (let e = 0, t = nl, r = 1, i = 0; e < 24; e++) {
        ([r, i] = [i, (2 * r + 3 * i) % 5]),
          nn.push(2 * (5 * i + r)),
          no.push((((e + 1) * (e + 2)) / 2) % 64);
        let s = nc;
        for (let e = 0; e < 7; e++)
          (t = ((t << nl) ^ ((t >> nu) * np)) % nd) & nh &&
            (s ^= nl << ((nl << BigInt(e)) - nl));
        na.push(s);
      }
      let [nf, ng] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            i = new Uint32Array(e.length);
          for (let s = 0; s < e.length; s++) {
            let { h: n, l: o } = (function (e, t = !1) {
              return t
                ? { h: Number(e & s0), l: Number((e >> s1) & s0) }
                : { h: 0 | Number((e >> s1) & s0), l: 0 | Number(e & s0) };
            })(e[s], t);
            [r[s], i[s]] = [n, o];
          }
          return [r, i];
        })(na, !0),
        ny = (e, t, r) => (r > 32 ? s3(e, t, r) : s2(e, t, r)),
        nm = (e, t, r) => (r > 32 ? s5(e, t, r) : s8(e, t, r));
      class nb extends nr {
        constructor(e, t, r, i = !1, s = 24) {
          var n;
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            sY(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 =
              ((n = this.state),
              new Uint32Array(
                n.buffer,
                n.byteOffset,
                Math.floor(n.byteLength / 4)
              )));
        }
        keccak() {
          s7 || ne(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let i = 24 - t; i < 24; i++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let i = (t + 8) % 10,
                    s = (t + 2) % 10,
                    n = r[s],
                    o = r[s + 1],
                    a = ny(n, o, 1) ^ r[i],
                    c = nm(n, o, 1) ^ r[i + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= a), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  s = e[3];
                for (let r = 0; r < 24; r++) {
                  let i = no[r],
                    n = ny(t, s, i),
                    o = nm(t, s, i),
                    a = nn[r];
                  (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let i = 0; i < 10; i++) r[i] = e[t + i];
                  for (let i = 0; i < 10; i++)
                    e[t + i] ^= ~r[(i + 2) % 10] & r[(i + 4) % 10];
                }
                (e[0] ^= nf[i]), (e[1] ^= ng[i]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            s7 || ne(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          sQ(this);
          let { blockLen: t, state: r } = this;
          e = nt(e);
          let i = e.length;
          for (let s = 0; s < i; ) {
            let n = Math.min(t - this.pos, i - s);
            for (let t = 0; t < n; t++) r[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: i } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          sQ(this, !1), sJ(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let i = 0, s = e.length; i < s; ) {
            this.posOut >= r && this.keccak();
            let n = Math.min(r - this.posOut, s - i);
            e.set(t.subarray(this.posOut, this.posOut + n), i),
              (this.posOut += n),
              (i += n);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return sY(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if ((sX(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: i,
            rounds: s,
            enableXOF: n,
          } = this;
          return (
            e || (e = new nb(t, r, i, n, s)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = s),
            (e.suffix = r),
            (e.outputLen = i),
            (e.enableXOF = n),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let nw = ni(() => new nb(136, 1, 32));
      function nv(e) {
        let t = `Ethereum Signed Message:
${e.length}`,
          r = new TextEncoder().encode(t + e);
        return "0x" + su.from(nw(r)).toString("hex");
      }
      async function nE(e, t, r, i, s, n) {
        switch (r.t) {
          case "eip191":
            return await n_(e, t, r.s);
          case "eip1271":
            return await nI(e, t, r.s, i, s, n);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`
            );
        }
      }
      async function n_(e, t, r) {
        return (
          (await ea({ hash: nv(t), signature: r })).toLowerCase() ===
          e.toLowerCase()
        );
      }
      async function nI(e, t, r, i, s, n) {
        let o = sd(i);
        if (!o.namespace || !o.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`
          );
        try {
          let o = "0x1626ba7e",
            a = r.substring(2),
            c = nv(t).substring(2),
            l = await fetch(
              `${
                n || "https://rpc.walletconnect.org/v1"
              }/?chainId=${i}&projectId=${s}`,
              {
                method: "POST",
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: "2.0",
                  method: "eth_call",
                  params: [
                    {
                      to: e,
                      data:
                        o +
                        c +
                        "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" +
                        a,
                    },
                    "latest",
                  ],
                }),
              }
            ),
            { result: h } = await l.json();
          return !!h && h.slice(0, o.length).toLowerCase() === o.toLowerCase();
        } catch (e) {
          return console.error("isValidEip1271Signature: ", e), !1;
        }
      }
      var nD = Object.defineProperty,
        nS = Object.defineProperties,
        nP = Object.getOwnPropertyDescriptors,
        nO = Object.getOwnPropertySymbols,
        nx = Object.prototype.hasOwnProperty,
        nA = Object.prototype.propertyIsEnumerable,
        nC = (e, t, r) =>
          t in e
            ? nD(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        nT = (e, t) => {
          for (var r in t || (t = {})) nx.call(t, r) && nC(e, r, t[r]);
          if (nO) for (var r of nO(t)) nA.call(t, r) && nC(e, r, t[r]);
          return e;
        },
        nN = (e, t) => nS(e, nP(t));
      let nR = (e) => e?.split(":"),
        nj = (e) => {
          let t = e && nR(e);
          if (t) return e.includes("did:pkh:") ? t[3] : t[1];
        },
        nL = (e) => {
          let t = e && nR(e);
          if (t) return t[2] + ":" + t[3];
        },
        nU = (e) => {
          let t = e && nR(e);
          if (t) return t.pop();
        };
      async function nk(e) {
        let { cacao: t, projectId: r } = e,
          { s: i, p: s } = t,
          n = nB(s, s.iss),
          o = nU(s.iss);
        return await nE(o, n, i, nL(s.iss), r);
      }
      let nB = (e, t) => {
        let r = `${e.domain} wants you to sign in with your Ethereum account:`,
          i = nU(t);
        if (!e.aud && !e.uri)
          throw Error(
            "Either `aud` or `uri` is required to construct the message"
          );
        let s = e.statement || void 0,
          n = `URI: ${e.aud || e.uri}`,
          o = `Version: ${e.version}`,
          a = `Chain ID: ${nj(t)}`,
          c = `Nonce: ${e.nonce}`,
          l = `Issued At: ${e.iat}`,
          h = e.exp ? `Expiration Time: ${e.exp}` : void 0,
          u = e.nbf ? `Not Before: ${e.nbf}` : void 0,
          d = e.requestId ? `Request ID: ${e.requestId}` : void 0,
          p = e.resources
            ? `Resources:${e.resources
                .map(
                  (e) => `
- ${e}`
                )
                .join("")}`
            : void 0,
          f = nH(e.resources);
        if (f) {
          let e = n$(f);
          s = (function (e = "", t) {
            nq(t);
            let r =
              "I further authorize the stated URI to perform the following actions on my behalf: ";
            if (e.includes(r)) return e;
            let i = [],
              s = 0;
            Object.keys(t.att).forEach((e) => {
              let r = Object.keys(t.att[e]).map((e) => ({
                ability: e.split("/")[0],
                action: e.split("/")[1],
              }));
              r.sort((e, t) => e.action.localeCompare(t.action));
              let n = {};
              r.forEach((e) => {
                n[e.ability] || (n[e.ability] = []),
                  n[e.ability].push(e.action);
              });
              let o = Object.keys(n).map(
                (t) => `(${++s}) '${t}': '${n[t].join("', '")}' for '${e}'.`
              );
              i.push(o.join(", ").replace(".,", "."));
            });
            let n = i.join(" "),
              o = `${r}${n}`;
            return `${e ? e + " " : ""}${o}`;
          })(s, e);
        }
        return [r, i, "", s, "", n, o, a, c, l, h, u, d, p].filter(
          (e) => null != e
        ).join(`
`);
      };
      function nq(e) {
        if (!e) throw Error("No recap provided, value is undefined");
        if (!e.att) throw Error("No `att` property found");
        let t = Object.keys(e.att);
        if (!(null != t && t.length))
          throw Error("No resources found in `att` property");
        t.forEach((t) => {
          let r = e.att[t];
          if (Array.isArray(r) || "object" != typeof r)
            throw Error(`Resource must be an object: ${t}`);
          if (!Object.keys(r).length)
            throw Error(`Resource object is empty: ${t}`);
          Object.keys(r).forEach((e) => {
            let t = r[e];
            if (!Array.isArray(t))
              throw Error(
                `Ability limits ${e} must be an array of objects, found: ${t}`
              );
            if (!t.length)
              throw Error(
                `Value of ${e} is empty array, must be an array with objects`
              );
            t.forEach((t) => {
              if ("object" != typeof t)
                throw Error(
                  `Ability limits (${e}) must be an array of objects, found: ${t}`
                );
            });
          });
        });
      }
      function nM(e) {
        return (
          nq(e),
          `urn:recap:${su
            .from(JSON.stringify(e))
            .toString("base64")
            .replace(/=/g, "")}`
        );
      }
      function n$(e) {
        var t;
        let r =
          ((t = e.replace("urn:recap:", "")),
          JSON.parse(su.from(t, "base64").toString("utf-8")));
        return nq(r), r;
      }
      function nz(e) {
        var t;
        let r = n$(e);
        nq(r);
        let i = null == (t = r.att) ? void 0 : t.eip155;
        return i ? Object.keys(i).map((e) => e.split("/")[1]) : [];
      }
      function nF(e) {
        let t = n$(e);
        nq(t);
        let r = [];
        return (
          Object.values(t.att).forEach((e) => {
            Object.values(e).forEach((e) => {
              var t;
              null != (t = e?.[0]) && t.chains && r.push(e[0].chains);
            });
          }),
          [...new Set(r.flat())]
        );
      }
      function nH(e) {
        if (!e) return;
        let t = e?.[e.length - 1];
        return t && t.includes("urn:recap:") ? t : void 0;
      }
      function nV(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function nK(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function nW(e, ...t) {
        if (!nK(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function nG(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function nY(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      let nJ = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        nZ = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        nQ = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      if (!nQ) throw Error("Non little-endian hardware is not supported");
      function nX(e) {
        if ("string" == typeof e)
          e = (function (e) {
            if ("string" != typeof e) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(e));
          })(e);
        else if (nK(e)) e = n2(e);
        else throw Error("Uint8Array expected, got " + typeof e);
        return e;
      }
      function n0(e, t, r = !0) {
        if (void 0 === t) return new Uint8Array(e);
        if (t.length !== e)
          throw Error(
            "invalid output length, expected " + e + ", got: " + t.length
          );
        if (r && t.byteOffset % 4 != 0)
          throw Error("invalid output, must be aligned");
        return t;
      }
      function n1(e, t, r, i) {
        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, r, i);
        let s = BigInt(32),
          n = BigInt(4294967295),
          o = Number((r >> s) & n),
          a = Number(r & n);
        e.setUint32(t + (i ? 4 : 0), o, i), e.setUint32(t + (i ? 0 : 4), a, i);
      }
      function n2(e) {
        return Uint8Array.from(e);
      }
      function n8(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      let n3 = (e) => Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
        n5 = n3("expand 16-byte k"),
        n6 = n3("expand 32-byte k"),
        n4 = nJ(n5),
        n9 = nJ(n6);
      function n7(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      function oe(e) {
        return e.byteOffset % 4 == 0;
      }
      let ot = 4294967296 - 1,
        or = new Uint32Array(),
        oi = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
      class os {
        constructor(e) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            nW((e = nX(e)), 32);
          let t = oi(e, 0),
            r = oi(e, 2),
            i = oi(e, 4),
            s = oi(e, 6),
            n = oi(e, 8),
            o = oi(e, 10),
            a = oi(e, 12),
            c = oi(e, 14);
          (this.r[0] = 8191 & t),
            (this.r[1] = ((t >>> 13) | (r << 3)) & 8191),
            (this.r[2] = ((r >>> 10) | (i << 6)) & 7939),
            (this.r[3] = ((i >>> 7) | (s << 9)) & 8191),
            (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
            (this.r[5] = (n >>> 1) & 8190),
            (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
            (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
            (this.r[8] = ((a >>> 8) | (c << 8)) & 8191),
            (this.r[9] = (c >>> 5) & 127);
          for (let t = 0; t < 8; t++) this.pad[t] = oi(e, 16 + 2 * t);
        }
        process(e, t, r = !1) {
          let { h: i, r: s } = this,
            n = s[0],
            o = s[1],
            a = s[2],
            c = s[3],
            l = s[4],
            h = s[5],
            u = s[6],
            d = s[7],
            p = s[8],
            f = s[9],
            g = oi(e, t + 0),
            y = oi(e, t + 2),
            m = oi(e, t + 4),
            b = oi(e, t + 6),
            w = oi(e, t + 8),
            v = oi(e, t + 10),
            E = oi(e, t + 12),
            _ = oi(e, t + 14),
            I = i[0] + (8191 & g),
            D = i[1] + (((g >>> 13) | (y << 3)) & 8191),
            S = i[2] + (((y >>> 10) | (m << 6)) & 8191),
            P = i[3] + (((m >>> 7) | (b << 9)) & 8191),
            O = i[4] + (((b >>> 4) | (w << 12)) & 8191),
            x = i[5] + ((w >>> 1) & 8191),
            A = i[6] + (((w >>> 14) | (v << 2)) & 8191),
            C = i[7] + (((v >>> 11) | (E << 5)) & 8191),
            T = i[8] + (((E >>> 8) | (_ << 8)) & 8191),
            N = i[9] + ((_ >>> 5) | (r ? 0 : 2048)),
            R = 0,
            j =
              0 + I * n + D * (5 * f) + S * (5 * p) + P * (5 * d) + O * (5 * u);
          (R = j >>> 13),
            (j &= 8191),
            (j +=
              x * (5 * h) +
              A * (5 * l) +
              C * (5 * c) +
              T * (5 * a) +
              N * (5 * o)),
            (R += j >>> 13),
            (j &= 8191);
          let L = R + I * o + D * n + S * (5 * f) + P * (5 * p) + O * (5 * d);
          (R = L >>> 13),
            (L &= 8191),
            (L +=
              x * (5 * u) +
              A * (5 * h) +
              C * (5 * l) +
              T * (5 * c) +
              N * (5 * a)),
            (R += L >>> 13),
            (L &= 8191);
          let U = R + I * a + D * o + S * n + P * (5 * f) + O * (5 * p);
          (R = U >>> 13),
            (U &= 8191),
            (U +=
              x * (5 * d) +
              A * (5 * u) +
              C * (5 * h) +
              T * (5 * l) +
              N * (5 * c)),
            (R += U >>> 13),
            (U &= 8191);
          let k = R + I * c + D * a + S * o + P * n + O * (5 * f);
          (R = k >>> 13),
            (k &= 8191),
            (k +=
              x * (5 * p) +
              A * (5 * d) +
              C * (5 * u) +
              T * (5 * h) +
              N * (5 * l)),
            (R += k >>> 13),
            (k &= 8191);
          let B = R + I * l + D * c + S * a + P * o + O * n;
          (R = B >>> 13),
            (B &= 8191),
            (B +=
              x * (5 * f) +
              A * (5 * p) +
              C * (5 * d) +
              T * (5 * u) +
              N * (5 * h)),
            (R += B >>> 13),
            (B &= 8191);
          let q = R + I * h + D * l + S * c + P * a + O * o;
          (R = q >>> 13),
            (q &= 8191),
            (q +=
              x * n + A * (5 * f) + C * (5 * p) + T * (5 * d) + N * (5 * u)),
            (R += q >>> 13),
            (q &= 8191);
          let M = R + I * u + D * h + S * l + P * c + O * a;
          (R = M >>> 13),
            (M &= 8191),
            (M += x * o + A * n + C * (5 * f) + T * (5 * p) + N * (5 * d)),
            (R += M >>> 13),
            (M &= 8191);
          let $ = R + I * d + D * u + S * h + P * l + O * c;
          (R = $ >>> 13),
            ($ &= 8191),
            ($ += x * a + A * o + C * n + T * (5 * f) + N * (5 * p)),
            (R += $ >>> 13),
            ($ &= 8191);
          let z = R + I * p + D * d + S * u + P * h + O * l;
          (R = z >>> 13),
            (z &= 8191),
            (z += x * c + A * a + C * o + T * n + N * (5 * f)),
            (R += z >>> 13),
            (z &= 8191);
          let F = R + I * f + D * p + S * d + P * u + O * h;
          (R = F >>> 13),
            (F &= 8191),
            (F += x * l + A * c + C * a + T * o + N * n),
            (R += F >>> 13),
            (F &= 8191),
            (j = 8191 & (R = ((R = ((R << 2) + R) | 0) + j) | 0)),
            (R >>>= 13),
            (L += R),
            (i[0] = j),
            (i[1] = L),
            (i[2] = U),
            (i[3] = k),
            (i[4] = B),
            (i[5] = q),
            (i[6] = M),
            (i[7] = $),
            (i[8] = z),
            (i[9] = F);
        }
        finalize() {
          let { h: e, pad: t } = this,
            r = new Uint16Array(10),
            i = e[1] >>> 13;
          e[1] &= 8191;
          for (let t = 2; t < 10; t++)
            (e[t] += i), (i = e[t] >>> 13), (e[t] &= 8191);
          (e[0] += 5 * i),
            (i = e[0] >>> 13),
            (e[0] &= 8191),
            (e[1] += i),
            (i = e[1] >>> 13),
            (e[1] &= 8191),
            (e[2] += i),
            (r[0] = e[0] + 5),
            (i = r[0] >>> 13),
            (r[0] &= 8191);
          for (let t = 1; t < 10; t++)
            (r[t] = e[t] + i), (i = r[t] >>> 13), (r[t] &= 8191);
          r[9] -= 8192;
          let s = (1 ^ i) - 1;
          for (let e = 0; e < 10; e++) r[e] &= s;
          s = ~s;
          for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | r[t];
          (e[0] = (e[0] | (e[1] << 13)) & 65535),
            (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
            (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
            (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
            (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
            (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
            (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
            (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
          let n = e[0] + t[0];
          e[0] = 65535 & n;
          for (let r = 1; r < 8; r++)
            (n = (((e[r] + t[r]) | 0) + (n >>> 16)) | 0), (e[r] = 65535 & n);
          n8(r);
        }
        update(e) {
          nG(this);
          let { buffer: t, blockLen: r } = this;
          e = nX(e);
          let i = e.length;
          for (let s = 0; s < i; ) {
            let n = Math.min(r - this.pos, i - s);
            if (n === r) {
              for (; r <= i - s; s += r) this.process(e, s);
              continue;
            }
            t.set(e.subarray(s, s + n), this.pos),
              (this.pos += n),
              (s += n),
              this.pos === r && (this.process(t, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          n8(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(e) {
          nG(this),
            (function (e, t) {
              nW(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error(
                  "digestInto() expects output buffer of length at least " + r
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, h: r } = this,
            { pos: i } = this;
          if (i) {
            for (t[i++] = 1; i < 16; i++) t[i] = 0;
            this.process(t, 0, !0);
          }
          this.finalize();
          let s = 0;
          for (let t = 0; t < 8; t++)
            (e[s++] = r[t] >>> 0), (e[s++] = r[t] >>> 8);
          return e;
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
      }
      let on = (function (e) {
          let t = (t, r) => e(r).update(nX(t)).digest(),
            r = e(new Uint8Array(32));
          return (
            (t.outputLen = r.outputLen),
            (t.blockLen = r.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        })((e) => new os(e)),
        oo = (function (e, t) {
          let {
            allowShortKeys: r,
            extendNonceFn: i,
            counterLength: s,
            counterRight: n,
            rounds: o,
          } = (function (e, t) {
            if (null == t || "object" != typeof t)
              throw Error("options must be defined");
            return Object.assign(e, t);
          })(
            {
              allowShortKeys: !1,
              counterLength: 8,
              counterRight: !1,
              rounds: 20,
            },
            t
          );
          if ("function" != typeof e) throw Error("core must be a function");
          return (
            nV(s),
            nV(o),
            nY(n),
            nY(r),
            (t, a, c, l, h = 0) => {
              nW(t), nW(a), nW(c);
              let u = c.length;
              if (
                (void 0 === l && (l = new Uint8Array(u)),
                nW(l),
                nV(h),
                h < 0 || h >= ot)
              )
                throw Error("arx: counter overflow");
              if (l.length < u)
                throw Error(
                  `arx: output (${l.length}) is shorter than data (${u})`
                );
              let d = [],
                p = t.length,
                f,
                g;
              if (32 === p) d.push((f = n2(t))), (g = n9);
              else if (16 === p && r)
                (f = new Uint8Array(32)).set(t),
                  f.set(t, 16),
                  (g = n4),
                  d.push(f);
              else throw Error(`arx: invalid 32-byte key, got length=${p}`);
              oe(a) || d.push((a = n2(a)));
              let y = nJ(f);
              if (i) {
                if (24 !== a.length)
                  throw Error("arx: extended nonce must be 24 bytes");
                i(g, y, nJ(a.subarray(0, 16)), y), (a = a.subarray(16));
              }
              let m = 16 - s;
              if (m !== a.length)
                throw Error(`arx: nonce must be ${m} or 16 bytes`);
              if (12 !== m) {
                let e = new Uint8Array(12);
                e.set(a, n ? 0 : 12 - a.length), (a = e), d.push(a);
              }
              let b = nJ(a);
              return (
                (function (e, t, r, i, s, n, o, a) {
                  let c = s.length,
                    l = new Uint8Array(64),
                    h = nJ(l),
                    u = oe(s) && oe(n),
                    d = u ? nJ(s) : or,
                    p = u ? nJ(n) : or;
                  for (let f = 0; f < c; o++) {
                    if ((e(t, r, i, h, o, a), o >= ot))
                      throw Error("arx: counter overflow");
                    let g = Math.min(64, c - f);
                    if (u && 64 === g) {
                      let e = f / 4;
                      if (f % 4 != 0)
                        throw Error("arx: invalid block position");
                      for (let t = 0, r; t < 16; t++)
                        p[(r = e + t)] = d[r] ^ h[t];
                      f += 64;
                      continue;
                    }
                    for (let e = 0, t; e < g; e++) n[(t = f + e)] = s[t] ^ l[e];
                    f += g;
                  }
                })(e, g, y, b, c, l, h, o),
                n8(...d),
                l
              );
            }
          );
        })(
          function (e, t, r, i, s, n = 20) {
            let o = e[0],
              a = e[1],
              c = e[2],
              l = e[3],
              h = t[0],
              u = t[1],
              d = t[2],
              p = t[3],
              f = t[4],
              g = t[5],
              y = t[6],
              m = t[7],
              b = r[0],
              w = r[1],
              v = r[2],
              E = o,
              _ = a,
              I = c,
              D = l,
              S = h,
              P = u,
              O = d,
              x = p,
              A = f,
              C = g,
              T = y,
              N = m,
              R = s,
              j = b,
              L = w,
              U = v;
            for (let e = 0; e < n; e += 2)
              (A = (A + (R = n7(R ^ (E = (E + S) | 0), 16))) | 0),
                (E = (E + (S = n7(S ^ A, 12))) | 0),
                (A = (A + (R = n7(R ^ E, 8))) | 0),
                (S = n7(S ^ A, 7)),
                (C = (C + (j = n7(j ^ (_ = (_ + P) | 0), 16))) | 0),
                (_ = (_ + (P = n7(P ^ C, 12))) | 0),
                (C = (C + (j = n7(j ^ _, 8))) | 0),
                (P = n7(P ^ C, 7)),
                (T = (T + (L = n7(L ^ (I = (I + O) | 0), 16))) | 0),
                (I = (I + (O = n7(O ^ T, 12))) | 0),
                (T = (T + (L = n7(L ^ I, 8))) | 0),
                (O = n7(O ^ T, 7)),
                (N = (N + (U = n7(U ^ (D = (D + x) | 0), 16))) | 0),
                (D = (D + (x = n7(x ^ N, 12))) | 0),
                (N = (N + (U = n7(U ^ D, 8))) | 0),
                (x = n7(x ^ N, 7)),
                (T = (T + (U = n7(U ^ (E = (E + P) | 0), 16))) | 0),
                (E = (E + (P = n7(P ^ T, 12))) | 0),
                (T = (T + (U = n7(U ^ E, 8))) | 0),
                (P = n7(P ^ T, 7)),
                (N = (N + (R = n7(R ^ (_ = (_ + O) | 0), 16))) | 0),
                (_ = (_ + (O = n7(O ^ N, 12))) | 0),
                (N = (N + (R = n7(R ^ _, 8))) | 0),
                (O = n7(O ^ N, 7)),
                (A = (A + (j = n7(j ^ (I = (I + x) | 0), 16))) | 0),
                (I = (I + (x = n7(x ^ A, 12))) | 0),
                (A = (A + (j = n7(j ^ I, 8))) | 0),
                (x = n7(x ^ A, 7)),
                (C = (C + (L = n7(L ^ (D = (D + S) | 0), 16))) | 0),
                (D = (D + (S = n7(S ^ C, 12))) | 0),
                (C = (C + (L = n7(L ^ D, 8))) | 0),
                (S = n7(S ^ C, 7));
            let k = 0;
            (i[k++] = (o + E) | 0),
              (i[k++] = (a + _) | 0),
              (i[k++] = (c + I) | 0),
              (i[k++] = (l + D) | 0),
              (i[k++] = (h + S) | 0),
              (i[k++] = (u + P) | 0),
              (i[k++] = (d + O) | 0),
              (i[k++] = (p + x) | 0),
              (i[k++] = (f + A) | 0),
              (i[k++] = (g + C) | 0),
              (i[k++] = (y + T) | 0),
              (i[k++] = (m + N) | 0),
              (i[k++] = (s + R) | 0),
              (i[k++] = (b + j) | 0),
              (i[k++] = (w + L) | 0),
              (i[k++] = (v + U) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        oa = new Uint8Array(16),
        oc = (e, t) => {
          e.update(t);
          let r = t.length % 16;
          r && e.update(oa.subarray(r));
        },
        ol = new Uint8Array(32);
      function oh(e, t, r, i, s) {
        let n = e(t, r, ol),
          o = on.create(n);
        s && oc(o, s), oc(o, i);
        let a = new Uint8Array(16),
          c = nZ(a);
        n1(c, 0, BigInt(s ? s.length : 0), !0),
          n1(c, 8, BigInt(i.length), !0),
          o.update(a);
        let l = o.digest();
        return n8(n, a), l;
      }
      let ou = ((e, t) => {
        function r(i, ...s) {
          if ((nW(i), void 0 !== e.nonceLength)) {
            let t = s[0];
            if (!t) throw Error("nonce / iv required");
            e.varSizeNonce ? nW(t) : nW(t, e.nonceLength);
          }
          let n = e.tagLength;
          n && void 0 !== s[1] && nW(s[1]);
          let o = t(i, ...s),
            a = (e, t) => {
              if (void 0 !== t) {
                if (2 !== e) throw Error("cipher output not supported");
                nW(t);
              }
            },
            c = !1;
          return {
            encrypt(e, t) {
              if (c)
                throw Error("cannot encrypt() twice with same key + nonce");
              return (c = !0), nW(e), a(o.encrypt.length, t), o.encrypt(e, t);
            },
            decrypt(e, t) {
              if ((nW(e), n && e.length < n))
                throw Error(
                  "invalid ciphertext length: smaller than tagLength=" + n
                );
              return a(o.decrypt.length, t), o.decrypt(e, t);
            },
          };
        }
        return Object.assign(r, e), r;
      })({ blockSize: 64, nonceLength: 12, tagLength: 16 }, (e, t, r) => ({
        encrypt(i, s) {
          let n = i.length;
          (s = n0(n + 16, s, !1)).set(i);
          let o = s.subarray(0, -16);
          oo(e, t, o, o, 1);
          let a = oh(oo, e, t, o, r);
          return s.set(a, n), n8(a), s;
        },
        decrypt(i, s) {
          s = n0(i.length - 16, s, !1);
          let n = i.subarray(0, -16),
            o = i.subarray(-16),
            a = oh(oo, e, t, n, r);
          if (
            !(function (e, t) {
              if (e.length !== t.length) return !1;
              let r = 0;
              for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
              return 0 === r;
            })(o, a)
          )
            throw Error("invalid tag");
          return s.set(i.subarray(0, -16)), oo(e, t, s, s, 1), n8(a), s;
        },
      }));
      class od extends nr {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), sZ(e);
          let r = nt(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let i = this.blockLen,
            s = new Uint8Array(i);
          s.set(r.length > i ? e.create().update(r).digest() : r);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return sQ(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          sQ(this),
            sJ(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: r,
            finished: i,
            destroyed: s,
            blockLen: n,
            outputLen: o,
          } = this;
          return (
            (e.finished = i),
            (e.destroyed = s),
            (e.blockLen = n),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let op = (e, t, r) => new od(e, t).update(r).digest();
      op.create = (e, t) => new od(e, t);
      let of = new Uint8Array([0]),
        og = new Uint8Array(),
        oy = (e, t, r, i, s) => {
          var n;
          return (function (e, t, r, i = 32) {
            if ((sZ(e), sY(i), i > 255 * e.outputLen))
              throw Error("Length should be <= 255*HashLen");
            let s = Math.ceil(i / e.outputLen);
            void 0 === r && (r = og);
            let n = new Uint8Array(s * e.outputLen),
              o = op.create(e, t),
              a = o._cloneInto(),
              c = new Uint8Array(o.outputLen);
            for (let t = 0; t < s; t++)
              (of[0] = t + 1),
                a
                  .update(0 === t ? og : c)
                  .update(r)
                  .update(of)
                  .digestInto(c),
                n.set(c, e.outputLen * t),
                o._cloneInto(a);
            return (
              o.destroy(), a.destroy(), c.fill(0), of.fill(0), n.slice(0, i)
            );
          })(
            e,
            ((n = r),
            sZ(e),
            void 0 === n && (n = new Uint8Array(e.outputLen)),
            op(e, nt(n), nt(t))),
            i,
            s
          );
        };
      class om extends nr {
        constructor(e, t, r, i) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = s4(this.buffer));
        }
        update(e) {
          sQ(this);
          let { view: t, buffer: r, blockLen: i } = this;
          e = nt(e);
          let s = e.length;
          for (let n = 0; n < s; ) {
            let o = Math.min(i - this.pos, s - n);
            if (o === i) {
              let t = s4(e);
              for (; i <= s - n; n += i) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          sQ(this), sX(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: n } = this;
          (t[n++] = 128),
            this.buffer.subarray(n).fill(0),
            this.padOffset > i - n && (this.process(r, 0), (n = 0));
          for (let e = n; e < i; e++) t[e] = 0;
          (function (e, t, r, i) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, i);
            let s = BigInt(32),
              n = BigInt(4294967295),
              o = Number((r >> s) & n),
              a = Number(r & n);
            e.setUint32(t + (i ? 4 : 0), o, i),
              e.setUint32(t + (i ? 0 : 4), a, i);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let o = s4(e),
            a = this.outputLen;
          if (a % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = a / 4,
            l = this.get();
          if (c > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: i,
            finished: s,
            destroyed: n,
            pos: o,
          } = this;
          return (
            (e.length = i),
            (e.pos = o),
            (e.finished = s),
            (e.destroyed = n),
            i % t && e.buffer.set(r),
            e
          );
        }
      }
      let ob = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        ow = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        ov = new Uint32Array(64);
      class oE extends om {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | ow[0]),
            (this.B = 0 | ow[1]),
            (this.C = 0 | ow[2]),
            (this.D = 0 | ow[3]),
            (this.E = 0 | ow[4]),
            (this.F = 0 | ow[5]),
            (this.G = 0 | ow[6]),
            (this.H = 0 | ow[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: i, E: s, F: n, G: o, H: a } = this;
          return [e, t, r, i, s, n, o, a];
        }
        set(e, t, r, i, s, n, o, a) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | i),
            (this.E = 0 | s),
            (this.F = 0 | n),
            (this.G = 0 | o),
            (this.H = 0 | a);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) ov[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = ov[e - 15],
              r = ov[e - 2],
              i = s9(t, 7) ^ s9(t, 18) ^ (t >>> 3),
              s = s9(r, 17) ^ s9(r, 19) ^ (r >>> 10);
            ov[e] = (s + ov[e - 7] + i + ov[e - 16]) | 0;
          }
          let { A: r, B: i, C: s, D: n, E: o, F: a, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            var h, u, d, p;
            let t = s9(o, 6) ^ s9(o, 11) ^ s9(o, 25),
              f = (l + t + (((h = o) & a) ^ (~h & c)) + ob[e] + ov[e]) | 0,
              g =
                ((s9(r, 2) ^ s9(r, 13) ^ s9(r, 22)) +
                  (((u = r) & (d = i)) ^ (u & (p = s)) ^ (d & p))) |
                0;
            (l = c),
              (c = a),
              (a = o),
              (o = (n + f) | 0),
              (n = s),
              (s = i),
              (i = r),
              (r = (f + g) | 0);
          }
          (r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (n = (n + this.D) | 0),
            (o = (o + this.E) | 0),
            (a = (a + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, i, s, n, o, a, c, l);
        }
        roundClean() {
          ov.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let o_ = ni(() => new oE()),
        oI = BigInt(0),
        oD = BigInt(1),
        oS = BigInt(2);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function oP(
        e
      ) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function oO(e) {
        if (!oP(e)) throw Error("Uint8Array expected");
      }
      function ox(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let oA = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function oC(e) {
        oO(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += oA[e[r]];
        return t;
      }
      function oT(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function oN(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? oI : BigInt("0x" + e);
      }
      let oR = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function oj(e) {
        return e >= oR._0 && e <= oR._9
          ? e - oR._0
          : e >= oR.A && e <= oR.F
          ? e - (oR.A - 10)
          : e >= oR.a && e <= oR.f
          ? e - (oR.a - 10)
          : void 0;
      }
      function oL(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let i = new Uint8Array(r);
        for (let t = 0, s = 0; t < r; t++, s += 2) {
          let r = oj(e.charCodeAt(s)),
            n = oj(e.charCodeAt(s + 1));
          if (void 0 === r || void 0 === n) {
            let t = e[s] + e[s + 1];
            throw Error(
              'hex string expected, got non-hex character "' +
                t +
                '" at index ' +
                s
            );
          }
          i[t] = 16 * r + n;
        }
        return i;
      }
      function oU(e) {
        return oN(oC(e));
      }
      function ok(e) {
        return oO(e), oN(oC(Uint8Array.from(e).reverse()));
      }
      function oB(e, t) {
        return oL(e.toString(16).padStart(2 * t, "0"));
      }
      function oq(e, t) {
        return oB(e, t).reverse();
      }
      function oM(e, t, r) {
        let i;
        if ("string" == typeof t)
          try {
            i = oL(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (oP(t)) i = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let s = i.length;
        if ("number" == typeof r && s !== r)
          throw Error(e + " of length " + r + " expected, got " + s);
        return i;
      }
      function o$(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          oO(i), (t += i.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, i = 0; t < e.length; t++) {
          let s = e[t];
          r.set(s, i), (i += s.length);
        }
        return r;
      }
      let oz = (e) => "bigint" == typeof e && oI <= e;
      function oF(e, t, r) {
        return oz(e) && oz(t) && oz(r) && t <= e && e < r;
      }
      function oH(e, t, r, i) {
        if (!oF(t, r, i))
          throw Error(
            "expected valid " + e + ": " + r + " <= n < " + i + ", got " + t
          );
      }
      function oV(e) {
        let t;
        for (t = 0; e > oI; e >>= oD, t += 1);
        return t;
      }
      let oK = (e) => (oS << BigInt(e - 1)) - oD,
        oW = (e) => new Uint8Array(e),
        oG = (e) => Uint8Array.from(e);
      function oY(e, t, r) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let i = oW(e),
          s = oW(e),
          n = 0,
          o = () => {
            i.fill(1), s.fill(0), (n = 0);
          },
          a = (...e) => r(s, i, ...e),
          c = (e = oW()) => {
            (s = a(oG([0]), e)),
              (i = a()),
              0 !== e.length && ((s = a(oG([1]), e)), (i = a()));
          },
          l = () => {
            if (n++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              r = [];
            for (; e < t; ) {
              i = a();
              let t = i.slice();
              r.push(t), (e += i.length);
            }
            return o$(...r);
          };
        return (e, t) => {
          let r;
          for (o(), c(e); !(r = t(l())); ) c();
          return o(), r;
        };
      }
      let oJ = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || oP(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function oZ(e, t, r = {}) {
        let i = (t, r, i) => {
          let s = oJ[r];
          if ("function" != typeof s) throw Error("invalid validator function");
          let n = e[t];
          if (!(i && void 0 === n) && !s(n, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + n
            );
        };
        for (let [e, r] of Object.entries(t)) i(e, r, !1);
        for (let [e, t] of Object.entries(r)) i(e, t, !0);
        return e;
      }
      let oQ = () => {
        throw Error("not implemented");
      };
      function oX(e) {
        let t = new WeakMap();
        return (r, ...i) => {
          let s = t.get(r);
          if (void 0 !== s) return s;
          let n = e(r, ...i);
          return t.set(r, n), n;
        };
      }
      var o0 = Object.freeze({
        __proto__: null,
        isBytes: oP,
        abytes: oO,
        abool: ox,
        bytesToHex: oC,
        numberToHexUnpadded: oT,
        hexToNumber: oN,
        hexToBytes: oL,
        bytesToNumberBE: oU,
        bytesToNumberLE: ok,
        numberToBytesBE: oB,
        numberToBytesLE: oq,
        numberToVarBytesBE: function (e) {
          return oL(oT(e));
        },
        ensureBytes: oM,
        concatBytes: o$,
        equalBytes: function (e, t) {
          if (e.length !== t.length) return !1;
          let r = 0;
          for (let i = 0; i < e.length; i++) r |= e[i] ^ t[i];
          return 0 === r;
        },
        utf8ToBytes: function (e) {
          if ("string" != typeof e) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(e));
        },
        inRange: oF,
        aInRange: oH,
        bitLen: oV,
        bitGet: function (e, t) {
          return (e >> BigInt(t)) & oD;
        },
        bitSet: function (e, t, r) {
          return e | ((r ? oD : oI) << BigInt(t));
        },
        bitMask: oK,
        createHmacDrbg: oY,
        validateObject: oZ,
        notImplemented: oQ,
        memoized: oX,
      });
      let o1 = BigInt(0),
        o2 = BigInt(1),
        o8 = BigInt(2),
        o3 = BigInt(3),
        o5 = BigInt(4),
        o6 = BigInt(5),
        o4 = BigInt(8);
      function o9(e, t) {
        let r = e % t;
        return r >= o1 ? r : t + r;
      }
      function o7(e, t, r) {
        if (t < o1) throw Error("invalid exponent, negatives unsupported");
        if (r <= o1) throw Error("invalid modulus");
        if (r === o2) return o1;
        let i = o2;
        for (; t > o1; )
          t & o2 && (i = (i * e) % r), (e = (e * e) % r), (t >>= o2);
        return i;
      }
      function ae(e, t, r) {
        let i = e;
        for (; t-- > o1; ) (i *= i), (i %= r);
        return i;
      }
      function at(e, t) {
        if (e === o1) throw Error("invert: expected non-zero number");
        if (t <= o1) throw Error("invert: expected positive modulus, got " + t);
        let r = o9(e, t),
          i = t,
          s = o1,
          n = o2;
        for (; r !== o1; ) {
          let e = i / r,
            t = i % r,
            o = s - n * e;
          (i = r), (r = t), (s = n), (n = o);
        }
        if (i !== o2) throw Error("invert: does not exist");
        return o9(s, t);
      }
      let ar = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function ai(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function as(e, t, r = !1, i = {}) {
        let s;
        if (e <= o1) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: n, nByteLength: o } = ai(e, t);
        if (o > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let a = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: n,
          BYTES: o,
          MASK: oK(n),
          ZERO: o1,
          ONE: o2,
          create: (t) => o9(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return o1 <= t && t < e;
          },
          is0: (e) => e === o1,
          isOdd: (e) => (e & o2) === o2,
          neg: (t) => o9(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => o9(t * t, e),
          add: (t, r) => o9(t + r, e),
          sub: (t, r) => o9(t - r, e),
          mul: (t, r) => o9(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < o1)
                throw Error("invalid exponent, negatives unsupported");
              if (r === o1) return e.ONE;
              if (r === o2) return t;
              let i = e.ONE,
                s = t;
              for (; r > o1; )
                r & o2 && (i = e.mul(i, s)), (s = e.sqr(s)), (r >>= o2);
              return i;
            })(a, e, t),
          div: (t, r) => o9(t * at(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => at(t, e),
          sqrt:
            i.sqrt ||
            ((t) => (
              s ||
                (s = (function (e) {
                  if (e % o5 === o3) {
                    let t = (e + o2) / o5;
                    return function (e, r) {
                      let i = e.pow(r, t);
                      if (!e.eql(e.sqr(i), r))
                        throw Error("Cannot find square root");
                      return i;
                    };
                  }
                  if (e % o4 === o6) {
                    let t = (e - o6) / o4;
                    return function (e, r) {
                      let i = e.mul(r, o8),
                        s = e.pow(i, t),
                        n = e.mul(r, s),
                        o = e.mul(e.mul(n, o8), s),
                        a = e.mul(n, e.sub(o, e.ONE));
                      if (!e.eql(e.sqr(a), r))
                        throw Error("Cannot find square root");
                      return a;
                    };
                  }
                  return (function (e) {
                    let t, r, i;
                    let s = (e - o2) / o8;
                    for (t = e - o2, r = 0; t % o8 === o1; t /= o8, r++);
                    for (i = o8; i < e && o7(i, s, e) !== e - o2; i++)
                      if (i > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === r) {
                      let t = (e + o2) / o5;
                      return function (e, r) {
                        let i = e.pow(r, t);
                        if (!e.eql(e.sqr(i), r))
                          throw Error("Cannot find square root");
                        return i;
                      };
                    }
                    let n = (t + o2) / o8;
                    return function (e, o) {
                      if (e.pow(o, s) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let a = r,
                        c = e.pow(e.mul(e.ONE, i), t),
                        l = e.pow(o, n),
                        h = e.pow(o, t);
                      for (; !e.eql(h, e.ONE); ) {
                        if (e.eql(h, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(h); t < a && !e.eql(r, e.ONE); t++)
                          r = e.sqr(r);
                        let r = e.pow(c, o2 << BigInt(a - t - 1));
                        (c = e.sqr(r)),
                          (l = e.mul(l, r)),
                          (h = e.mul(h, c)),
                          (a = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              s(a, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                i = t.reduce(
                  (t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))),
                  e.ONE
                ),
                s = e.inv(i);
              return (
                t.reduceRight(
                  (t, i, s) =>
                    e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i)),
                  s
                ),
                r
              );
            })(a, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? oq(e, o) : oB(e, o)),
          fromBytes: (e) => {
            if (e.length !== o)
              throw Error(
                "Field.fromBytes: expected " + o + " bytes, got " + e.length
              );
            return r ? ok(e) : oU(e);
          },
        });
        return Object.freeze(a);
      }
      function an(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        let t = e.toString(2).length;
        return Math.ceil(t / 8);
      }
      function ao(e) {
        let t = an(e);
        return t + Math.ceil(t / 2);
      }
      let aa = BigInt(0),
        ac = BigInt(1);
      function al(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function ah(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function au(e, t) {
        return (
          ah(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let ad = new WeakMap(),
        ap = new WeakMap();
      function af(e) {
        return ap.get(e) || 1;
      }
      function ag(e) {
        return (
          (function (e) {
            let t = ar.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            });
            oZ(e, t);
          })(e.Fp),
          oZ(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...ai(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let ay = BigInt(0),
        am = BigInt(1),
        ab = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        );
      BigInt(0);
      let aw = BigInt(1),
        av = BigInt(2),
        aE = BigInt(3),
        a_ = BigInt(5);
      BigInt(8);
      let aI = (function (e) {
        let t =
            (oZ(
              e,
              { a: "bigint" },
              {
                montgomeryBits: "isSafeInteger",
                nByteLength: "isSafeInteger",
                adjustScalarBytes: "function",
                domain: "function",
                powPminus2: "function",
                Gu: "bigint",
              }
            ),
            Object.freeze({ ...e })),
          { P: r } = t,
          i = (e) => o9(e, r),
          s = t.montgomeryBits,
          n = Math.ceil(s / 8),
          o = t.nByteLength,
          a = t.adjustScalarBytes || ((e) => e),
          c = t.powPminus2 || ((e) => o7(e, r - BigInt(2), r));
        function l(e, t, r) {
          let s = i(e * (t - r));
          return [(t = i(t - s)), (r = i(r + s))];
        }
        let h = (t.a - BigInt(2)) / BigInt(4);
        function u(e, t) {
          let u = (function (e) {
              let t = oM("u coordinate", e, n);
              return 32 === o && (t[31] &= 127), ok(t);
            })(t),
            d = (function (e) {
              let t = oM("scalar", e),
                r = t.length;
              if (r !== n && r !== o)
                throw Error(
                  "invalid scalar, expected " +
                    n +
                    " or " +
                    o +
                    " bytes, got " +
                    r
                );
              return ok(a(t));
            })(e),
            p = (function (e, t) {
              oH("u", e, ay, r), oH("scalar", t, ay, r);
              let n = am,
                o = ay,
                a = e,
                u = am,
                d = ay,
                p;
              for (let r = BigInt(s - 1); r >= ay; r--) {
                let s = (t >> r) & am;
                (d ^= s),
                  (n = (p = l(d, n, a))[0]),
                  (a = p[1]),
                  (o = (p = l(d, o, u))[0]),
                  (u = p[1]),
                  (d = s);
                let c = n + o,
                  f = i(c * c),
                  g = n - o,
                  y = i(g * g),
                  m = f - y,
                  b = a + u,
                  w = a - u,
                  v = i(w * c),
                  E = i(b * g),
                  _ = v + E,
                  I = v - E;
                (a = i(_ * _)),
                  (u = i(e * i(I * I))),
                  (n = i(f * y)),
                  (o = i(m * (f + i(h * m))));
              }
              (n = (p = l(d, n, a))[0]),
                (a = p[1]),
                (o = (p = l(d, o, u))[0]),
                (u = p[1]);
              let f = c(o);
              return i(n * f);
            })(u, d);
          if (p === ay) throw Error("invalid private or public key received");
          return oq(i(p), n);
        }
        let d = oq(i(t.Gu), n);
        function p(e) {
          return u(e, d);
        }
        return {
          scalarMult: u,
          scalarMultBase: p,
          getSharedSecret: (e, t) => u(e, t),
          getPublicKey: (e) => p(e),
          utils: { randomPrivateKey: () => t.randomBytes(t.nByteLength) },
          GuBytes: d,
        };
      })({
        P: ab,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (e) => {
          let { pow_p_5_8: t, b2: r } = (function (e) {
            let t = BigInt(10),
              r = BigInt(20),
              i = BigInt(40),
              s = BigInt(80),
              n = (((e * e) % ab) * e) % ab,
              o = (ae(n, av, ab) * n) % ab,
              a = (ae(o, aw, ab) * e) % ab,
              c = (ae(a, a_, ab) * a) % ab,
              l = (ae(c, t, ab) * c) % ab,
              h = (ae(l, r, ab) * l) % ab,
              u = (ae(h, i, ab) * h) % ab,
              d = (ae(u, s, ab) * u) % ab,
              p = (ae(d, s, ab) * u) % ab,
              f = (ae(p, t, ab) * c) % ab;
            return { pow_p_5_8: (ae(f, av, ab) * e) % ab, b2: n };
          })(e);
          return o9(ae(t, aE, ab) * r, ab);
        },
        adjustScalarBytes: function (e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        },
        randomBytes: ns,
      });
      function aD(e) {
        void 0 !== e.lowS && ox("lowS", e.lowS),
          void 0 !== e.prehash && ox("prehash", e.prehash);
      }
      let { bytesToNumberBE: aS, hexToBytes: aP } = o0,
        aO = {
          Err: class extends Error {
            constructor(e = "") {
              super(e);
            }
          },
          _tlv: {
            encode: (e, t) => {
              let { Err: r } = aO;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (1 & t.length) throw new r("tlv.encode: unpadded data");
              let i = t.length / 2,
                s = oT(i);
              if ((s.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let n = i > 127 ? oT((s.length / 2) | 128) : "";
              return oT(e) + n + s + t;
            },
            decode(e, t) {
              let { Err: r } = aO,
                i = 0;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (t.length < 2 || t[i++] !== e)
                throw new r("tlv.decode: wrong tlv");
              let s = t[i++],
                n = 0;
              if (128 & s) {
                let e = 127 & s;
                if (!e)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let o = t.subarray(i, i + e);
                if (o.length !== e)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === o[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let e of o) n = (n << 8) | e;
                if (((i += e), n < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else n = s;
              let o = t.subarray(i, i + n);
              if (o.length !== n) throw new r("tlv.decode: wrong value length");
              return { v: o, l: t.subarray(i + n) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = aO;
              if (e < ax)
                throw new t("integer: negative integers are not allowed");
              let r = oT(e);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(e) {
              let { Err: t } = aO;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return aS(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: r, _tlv: i } = aO,
              s = "string" == typeof e ? aP(e) : e;
            oO(s);
            let { v: n, l: o } = i.decode(48, s);
            if (o.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: a, l: c } = i.decode(2, n),
              { v: l, l: h } = i.decode(2, c);
            if (h.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: r.decode(a), s: r.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: r } = aO,
              i = t.encode(2, r.encode(e.r)),
              s = t.encode(2, r.encode(e.s));
            return t.encode(48, i + s);
          },
        },
        ax = BigInt(0),
        aA = BigInt(1);
      BigInt(2);
      let aC = BigInt(3);
      BigInt(4);
      let aT = as(
          BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          )
        ),
        aN = aT.create(BigInt("-3")),
        aR = BigInt(
          "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
        ),
        aj = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = ag(e);
                  return (
                    oZ(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: r, n: i } = t,
                s = r.BYTES + 1,
                n = 2 * r.BYTES + 1;
              function o(e) {
                return o9(e, i);
              }
              let {
                  ProjectivePoint: a,
                  normPrivateKeyToScalar: c,
                  weierstrassEquation: l,
                  isWithinCurveOrder: h,
                } = (function (e) {
                  var t;
                  let r = (function (e) {
                      let t = ag(e);
                      oZ(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: i, a: s } = t;
                      if (r) {
                        if (!i.eql(s, i.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: i } = r,
                    s = as(r.n, r.nBitLength),
                    n =
                      r.toBytes ||
                      ((e, t, r) => {
                        let s = t.toAffine();
                        return o$(
                          Uint8Array.from([4]),
                          i.toBytes(s.x),
                          i.toBytes(s.y)
                        );
                      }),
                    o =
                      r.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1),
                          r = i.fromBytes(t.subarray(0, i.BYTES)),
                          s = i.fromBytes(t.subarray(i.BYTES, 2 * i.BYTES));
                        return { x: r, y: s };
                      });
                  function a(e) {
                    let { a: t, b: s } = r,
                      n = i.sqr(e),
                      o = i.mul(n, e);
                    return i.add(i.add(o, i.mul(e, t)), s);
                  }
                  if (!i.eql(i.sqr(r.Gy), a(r.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function c(e) {
                    let t;
                    let {
                      allowedPrivateKeyLengths: i,
                      nByteLength: s,
                      wrapPrivateKey: n,
                      n: o,
                    } = r;
                    if (i && "bigint" != typeof e) {
                      if (
                        (oP(e) && (e = oC(e)),
                        "string" != typeof e || !i.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * s, "0");
                    }
                    try {
                      t =
                        "bigint" == typeof e ? e : oU(oM("private key", e, s));
                    } catch {
                      throw Error(
                        "invalid private key, expected hex or " +
                          s +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return n && (t = o9(t, o)), oH("private key", t, aA, o), t;
                  }
                  function l(e) {
                    if (!(e instanceof d))
                      throw Error("ProjectivePoint expected");
                  }
                  let h = oX((e, t) => {
                      let { px: r, py: s, pz: n } = e;
                      if (i.eql(n, i.ONE)) return { x: r, y: s };
                      let o = e.is0();
                      null == t && (t = o ? i.ONE : i.inv(n));
                      let a = i.mul(r, t),
                        c = i.mul(s, t),
                        l = i.mul(n, t);
                      if (o) return { x: i.ZERO, y: i.ZERO };
                      if (!i.eql(l, i.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: c };
                    }),
                    u = oX((e) => {
                      if (e.is0()) {
                        if (r.allowInfinityPoint && !i.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: s } = e.toAffine();
                      if (!i.isValid(t) || !i.isValid(s))
                        throw Error("bad point: x or y not FE");
                      let n = i.sqr(s),
                        o = a(t);
                      if (!i.eql(n, o))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class d {
                    constructor(e, t, r) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = r),
                        null == e || !i.isValid(e))
                      )
                        throw Error("x required");
                      if (null == t || !i.isValid(t)) throw Error("y required");
                      if (null == r || !i.isValid(r)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: r } = e || {};
                      if (!e || !i.isValid(t) || !i.isValid(r))
                        throw Error("invalid affine point");
                      if (e instanceof d)
                        throw Error("projective point not allowed");
                      let s = (e) => i.eql(e, i.ZERO);
                      return s(t) && s(r) ? d.ZERO : new d(t, r, i.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = i.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(d.fromAffine);
                    }
                    static fromHex(e) {
                      let t = d.fromAffine(o(oM("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return d.BASE.multiply(c(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, r, i) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, r) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + r);
                            });
                          })(r, e),
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, r) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + r);
                            });
                          })(i, t),
                          r.length !== i.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let s = e.ZERO,
                          n = oV(BigInt(r.length)),
                          o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                          a = (1 << o) - 1,
                          c = Array(a + 1).fill(s),
                          l = Math.floor((t.BITS - 1) / o) * o,
                          h = s;
                        for (let e = l; e >= 0; e -= o) {
                          c.fill(s);
                          for (let t = 0; t < i.length; t++) {
                            let s = i[t],
                              n = Number((s >> BigInt(e)) & BigInt(a));
                            c[n] = c[n].add(r[t]);
                          }
                          let t = s;
                          for (let e = c.length - 1, r = s; e > 0; e--)
                            (r = r.add(c[e])), (t = t.add(r));
                          if (((h = h.add(t)), 0 !== e))
                            for (let e = 0; e < o; e++) h = h.double();
                        }
                        return h;
                      })(d, s, e, t);
                    }
                    _setWindowSize(e) {
                      f.setWindowSize(this, e);
                    }
                    assertValidity() {
                      u(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (i.isOdd) return !i.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      l(e);
                      let { px: t, py: r, pz: s } = this,
                        { px: n, py: o, pz: a } = e,
                        c = i.eql(i.mul(t, a), i.mul(n, s)),
                        h = i.eql(i.mul(r, a), i.mul(o, s));
                      return c && h;
                    }
                    negate() {
                      return new d(this.px, i.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = r,
                        s = i.mul(t, aC),
                        { px: n, py: o, pz: a } = this,
                        c = i.ZERO,
                        l = i.ZERO,
                        h = i.ZERO,
                        u = i.mul(n, n),
                        p = i.mul(o, o),
                        f = i.mul(a, a),
                        g = i.mul(n, o);
                      return (
                        (g = i.add(g, g)),
                        (h = i.mul(n, a)),
                        (h = i.add(h, h)),
                        (c = i.mul(e, h)),
                        (l = i.mul(s, f)),
                        (l = i.add(c, l)),
                        (c = i.sub(p, l)),
                        (l = i.add(p, l)),
                        (l = i.mul(c, l)),
                        (c = i.mul(g, c)),
                        (h = i.mul(s, h)),
                        (f = i.mul(e, f)),
                        (g = i.sub(u, f)),
                        (g = i.mul(e, g)),
                        (g = i.add(g, h)),
                        (h = i.add(u, u)),
                        (u = i.add(h, u)),
                        (u = i.add(u, f)),
                        (u = i.mul(u, g)),
                        (l = i.add(l, u)),
                        (f = i.mul(o, a)),
                        (f = i.add(f, f)),
                        (u = i.mul(f, g)),
                        (c = i.sub(c, u)),
                        (h = i.mul(f, p)),
                        (h = i.add(h, h)),
                        (h = i.add(h, h)),
                        new d(c, l, h)
                      );
                    }
                    add(e) {
                      l(e);
                      let { px: t, py: s, pz: n } = this,
                        { px: o, py: a, pz: c } = e,
                        h = i.ZERO,
                        u = i.ZERO,
                        p = i.ZERO,
                        f = r.a,
                        g = i.mul(r.b, aC),
                        y = i.mul(t, o),
                        m = i.mul(s, a),
                        b = i.mul(n, c),
                        w = i.add(t, s),
                        v = i.add(o, a);
                      (w = i.mul(w, v)),
                        (v = i.add(y, m)),
                        (w = i.sub(w, v)),
                        (v = i.add(t, n));
                      let E = i.add(o, c);
                      return (
                        (v = i.mul(v, E)),
                        (E = i.add(y, b)),
                        (v = i.sub(v, E)),
                        (E = i.add(s, n)),
                        (h = i.add(a, c)),
                        (E = i.mul(E, h)),
                        (h = i.add(m, b)),
                        (E = i.sub(E, h)),
                        (p = i.mul(f, v)),
                        (h = i.mul(g, b)),
                        (p = i.add(h, p)),
                        (h = i.sub(m, p)),
                        (p = i.add(m, p)),
                        (u = i.mul(h, p)),
                        (m = i.add(y, y)),
                        (m = i.add(m, y)),
                        (b = i.mul(f, b)),
                        (v = i.mul(g, v)),
                        (m = i.add(m, b)),
                        (b = i.sub(y, b)),
                        (b = i.mul(f, b)),
                        (v = i.add(v, b)),
                        (y = i.mul(m, v)),
                        (u = i.add(u, y)),
                        (y = i.mul(E, v)),
                        (h = i.mul(w, h)),
                        (h = i.sub(h, y)),
                        (y = i.mul(w, m)),
                        (p = i.mul(E, p)),
                        (p = i.add(p, y)),
                        new d(h, u, p)
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(d.ZERO);
                    }
                    wNAF(e) {
                      return f.wNAFCached(this, e, d.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: s } = r;
                      oH("scalar", e, ax, s);
                      let n = d.ZERO;
                      if (e === ax) return n;
                      if (this.is0() || e === aA) return this;
                      if (!t || f.hasPrecomputes(this))
                        return f.wNAFCachedUnsafe(this, e, d.normalizeZ);
                      let {
                          k1neg: o,
                          k1: a,
                          k2neg: c,
                          k2: l,
                        } = t.splitScalar(e),
                        h = n,
                        u = n,
                        p = this;
                      for (; a > ax || l > ax; )
                        a & aA && (h = h.add(p)),
                          l & aA && (u = u.add(p)),
                          (p = p.double()),
                          (a >>= aA),
                          (l >>= aA);
                      return (
                        o && (h = h.negate()),
                        c && (u = u.negate()),
                        (u = new d(i.mul(u.px, t.beta), u.py, u.pz)),
                        h.add(u)
                      );
                    }
                    multiply(e) {
                      let t, s;
                      let { endo: n, n: o } = r;
                      if ((oH("scalar", e, aA, o), n)) {
                        let {
                            k1neg: r,
                            k1: o,
                            k2neg: a,
                            k2: c,
                          } = n.splitScalar(e),
                          { p: l, f: h } = this.wNAF(o),
                          { p: u, f: p } = this.wNAF(c);
                        (l = f.constTimeNegate(r, l)),
                          (u = f.constTimeNegate(a, u)),
                          (u = new d(i.mul(u.px, n.beta), u.py, u.pz)),
                          (t = l.add(u)),
                          (s = h.add(p));
                      } else {
                        let { p: r, f: i } = this.wNAF(e);
                        (t = r), (s = i);
                      }
                      return d.normalizeZ([t, s])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let i = d.BASE,
                        s = (e, t) =>
                          t !== ax && t !== aA && e.equals(i)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        n = s(this, t).add(s(e, r));
                      return n.is0() ? void 0 : n;
                    }
                    toAffine(e) {
                      return h(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = r;
                      if (e === aA) return !0;
                      if (t) return t(d, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = r;
                      return e === aA
                        ? this
                        : t
                        ? t(d, this)
                        : this.multiplyUnsafe(r.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        ox("isCompressed", e),
                        this.assertValidity(),
                        n(d, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return ox("isCompressed", e), oC(this.toRawBytes(e));
                    }
                  }
                  (d.BASE = new d(r.Gx, r.Gy, i.ONE)),
                    (d.ZERO = new d(i.ZERO, i.ONE, i.ZERO));
                  let p = r.nBitLength,
                    f =
                      ((t = r.endo ? Math.ceil(p / 2) : p),
                      {
                        constTimeNegate: al,
                        hasPrecomputes: (e) => 1 !== af(e),
                        unsafeLadder(e, t, r = d.ZERO) {
                          let i = e;
                          for (; t > aa; )
                            t & ac && (r = r.add(i)),
                              (i = i.double()),
                              (t >>= ac);
                          return r;
                        },
                        precomputeWindow(e, r) {
                          let { windows: i, windowSize: s } = au(r, t),
                            n = [],
                            o = e,
                            a = o;
                          for (let e = 0; e < i; e++) {
                            (a = o), n.push(a);
                            for (let e = 1; e < s; e++)
                              (a = a.add(o)), n.push(a);
                            o = a.double();
                          }
                          return n;
                        },
                        wNAF(e, r, i) {
                          let { windows: s, windowSize: n } = au(e, t),
                            o = d.ZERO,
                            a = d.BASE,
                            c = BigInt(2 ** e - 1),
                            l = 2 ** e,
                            h = BigInt(e);
                          for (let e = 0; e < s; e++) {
                            let t = e * n,
                              s = Number(i & c);
                            (i >>= h), s > n && ((s -= l), (i += ac));
                            let u = t + Math.abs(s) - 1,
                              d = e % 2 != 0,
                              p = s < 0;
                            0 === s
                              ? (a = a.add(al(d, r[t])))
                              : (o = o.add(al(p, r[u])));
                          }
                          return { p: o, f: a };
                        },
                        wNAFUnsafe(e, r, i, s = d.ZERO) {
                          let { windows: n, windowSize: o } = au(e, t),
                            a = BigInt(2 ** e - 1),
                            c = 2 ** e,
                            l = BigInt(e);
                          for (let e = 0; e < n; e++) {
                            let t = e * o;
                            if (i === aa) break;
                            let n = Number(i & a);
                            if (
                              ((i >>= l),
                              n > o && ((n -= c), (i += ac)),
                              0 === n)
                            )
                              continue;
                            let h = r[t + Math.abs(n) - 1];
                            n < 0 && (h = h.negate()), (s = s.add(h));
                          }
                          return s;
                        },
                        getPrecomputes(e, t, r) {
                          let i = ad.get(t);
                          return (
                            i ||
                              ((i = this.precomputeWindow(t, e)),
                              1 !== e && ad.set(t, r(i))),
                            i
                          );
                        },
                        wNAFCached(e, t, r) {
                          let i = af(e);
                          return this.wNAF(i, this.getPrecomputes(i, e, r), t);
                        },
                        wNAFCachedUnsafe(e, t, r, i) {
                          let s = af(e);
                          return 1 === s
                            ? this.unsafeLadder(e, t, i)
                            : this.wNAFUnsafe(
                                s,
                                this.getPrecomputes(s, e, r),
                                t,
                                i
                              );
                        },
                        setWindowSize(e, r) {
                          ah(r, t), ap.set(e, r), ad.delete(e);
                        },
                      });
                  return {
                    CURVE: r,
                    ProjectivePoint: d,
                    normPrivateKeyToScalar: c,
                    weierstrassEquation: a,
                    isWithinCurveOrder: function (e) {
                      return oF(e, aA, r.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, i) {
                    let s = t.toAffine(),
                      n = r.toBytes(s.x);
                    return (
                      ox("isCompressed", i),
                      i
                        ? o$(Uint8Array.from([t.hasEvenY() ? 2 : 3]), n)
                        : o$(Uint8Array.from([4]), n, r.toBytes(s.y))
                    );
                  },
                  fromBytes(e) {
                    let t = e.length,
                      i = e[0],
                      o = e.subarray(1);
                    if (t === s && (2 === i || 3 === i)) {
                      let e;
                      let t = oU(o);
                      if (!oF(t, aA, r.ORDER))
                        throw Error("Point is not on curve");
                      let s = l(t);
                      try {
                        e = r.sqrt(s);
                      } catch (t) {
                        let e = t instanceof Error ? ": " + t.message : "";
                        throw Error("Point is not on curve" + e);
                      }
                      let n = (e & aA) === aA;
                      return (
                        ((1 & i) == 1) !== n && (e = r.neg(e)), { x: t, y: e }
                      );
                    }
                    if (t === n && 4 === i) {
                      let e = r.fromBytes(o.subarray(0, r.BYTES)),
                        t = r.fromBytes(o.subarray(r.BYTES, 2 * r.BYTES));
                      return { x: e, y: t };
                    }
                    throw Error(
                      "invalid Point, expected length of " +
                        s +
                        ", or uncompressed " +
                        n +
                        ", got " +
                        t
                    );
                  },
                }),
                u = (e) => oC(oB(e, t.nByteLength)),
                d = (e, t, r) => oU(e.slice(t, r));
              class p {
                constructor(e, t, r) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return (
                    (e = oM("compactSignature", e, 2 * r)),
                    new p(d(e, 0, r), d(e, r, 2 * r))
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = aO.toSig(oM("DER", e));
                  return new p(t, r);
                }
                assertValidity() {
                  oH("r", this.r, aA, i), oH("s", this.s, aA, i);
                }
                addRecoveryBit(e) {
                  return new p(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: s, s: n, recovery: c } = this,
                    l = y(oM("msgHash", e));
                  if (null == c || ![0, 1, 2, 3].includes(c))
                    throw Error("recovery id invalid");
                  let h = 2 === c || 3 === c ? s + t.n : s;
                  if (h >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let d = a.fromHex(((1 & c) == 0 ? "02" : "03") + u(h)),
                    p = at(h, i),
                    f = o(-l * p),
                    g = o(n * p),
                    m = a.BASE.multiplyAndAddUnsafe(d, f, g);
                  if (!m) throw Error("point at infinify");
                  return m.assertValidity(), m;
                }
                hasHighS() {
                  return this.s > i >> aA;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new p(this.r, o(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return oL(this.toDERHex());
                }
                toDERHex() {
                  return aO.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return oL(this.toCompactHex());
                }
                toCompactHex() {
                  return u(this.r) + u(this.s);
                }
              }
              function f(e) {
                let t = oP(e),
                  r = "string" == typeof e,
                  i = (t || r) && e.length;
                return t
                  ? i === s || i === n
                  : r
                  ? i === 2 * s || i === 2 * n
                  : e instanceof a;
              }
              let g =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let r = oU(e),
                      i = 8 * e.length - t.nBitLength;
                    return i > 0 ? r >> BigInt(i) : r;
                  },
                y =
                  t.bits2int_modN ||
                  function (e) {
                    return o(g(e));
                  },
                m = oK(t.nBitLength);
              function b(e) {
                return (
                  oH("num < 2^" + t.nBitLength, e, ax, m), oB(e, t.nByteLength)
                );
              }
              let w = { lowS: t.lowS, prehash: !1 },
                v = { lowS: t.lowS, prehash: !1 };
              return (
                a.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return a.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (f(e)) throw Error("first arg must be private key");
                    if (!f(t)) throw Error("second arg must be public key");
                    return a.fromHex(t).multiply(c(e)).toRawBytes(r);
                  },
                  sign: function (e, s, n = w) {
                    let { seed: l, k2sig: u } = (function (e, s, n = w) {
                      if (["recovered", "canonical"].some((e) => e in n))
                        throw Error("sign() legacy options not supported");
                      let { hash: l, randomBytes: u } = t,
                        { lowS: d, prehash: f, extraEntropy: m } = n;
                      null == d && (d = !0),
                        (e = oM("msgHash", e)),
                        aD(n),
                        f && (e = oM("prehashed msgHash", l(e)));
                      let v = y(e),
                        E = c(s),
                        _ = [b(E), b(v)];
                      if (null != m && !1 !== m) {
                        let e = !0 === m ? u(r.BYTES) : m;
                        _.push(oM("extraEntropy", e));
                      }
                      let I = o$(..._);
                      return {
                        seed: I,
                        k2sig: function (e) {
                          let t = g(e);
                          if (!h(t)) return;
                          let r = at(t, i),
                            s = a.BASE.multiply(t).toAffine(),
                            n = o(s.x);
                          if (n === ax) return;
                          let c = o(r * o(v + n * E));
                          if (c === ax) return;
                          let l = (s.x === n ? 0 : 2) | Number(s.y & aA),
                            u = c;
                          return (
                            d &&
                              c > i >> aA &&
                              ((u = c > i >> aA ? o(-c) : c), (l ^= 1)),
                            new p(n, u, l)
                          );
                        },
                      };
                    })(e, s, n);
                    return oY(t.hash.outputLen, t.nByteLength, t.hmac)(l, u);
                  },
                  verify: function (e, r, s, n = v) {
                    let c, l;
                    (r = oM("msgHash", r)), (s = oM("publicKey", s));
                    let { lowS: h, prehash: u, format: d } = n;
                    if ((aD(n), "strict" in n))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== d && "compact" !== d && "der" !== d)
                      throw Error("format must be compact or der");
                    let f = "string" == typeof e || oP(e),
                      g =
                        !f &&
                        !d &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!f && !g)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((g && (c = new p(e.r, e.s)), f)) {
                        try {
                          "compact" !== d && (c = p.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof aO.Err)) throw e;
                        }
                        c || "der" === d || (c = p.fromCompact(e));
                      }
                      l = a.fromHex(s);
                    } catch {
                      return !1;
                    }
                    if (!c || (h && c.hasHighS())) return !1;
                    u && (r = t.hash(r));
                    let { r: m, s: b } = c,
                      w = y(r),
                      E = at(b, i),
                      _ = o(w * E),
                      I = o(m * E),
                      D = a.BASE.multiplyAndAddUnsafe(l, _, I)?.toAffine();
                    return !!D && o(D.x) === m;
                  },
                  ProjectivePoint: a,
                  Signature: p,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return c(e), !0;
                      } catch {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: c,
                    randomPrivateKey: () => {
                      let e = ao(t.n);
                      return (function (e, t, r = !1) {
                        let i = e.length,
                          s = an(t),
                          n = ao(t);
                        if (i < 16 || i < n || i > 1024)
                          throw Error(
                            "expected " + n + "-1024 bytes of input, got " + i
                          );
                        let o = r ? ok(e) : oU(e),
                          a = o9(o, t - o2) + o2;
                        return r ? oq(a, s) : oB(a, s);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = a.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...r) =>
                op(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) {
                      let i = e[r];
                      sJ(i), (t += i.length);
                    }
                    let r = new Uint8Array(t);
                    for (let t = 0, i = 0; t < e.length; t++) {
                      let s = e[t];
                      r.set(s, i), (i += s.length);
                    }
                    return r;
                  })(...r)
                ),
              randomBytes: ns,
            });
          return { ...r(t), create: r };
        })(
          {
            a: aN,
            b: aR,
            Fp: aT,
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
            h: BigInt(1),
            lowS: !1,
          },
          o_
        ),
        aL = "base10",
        aU = "base16",
        ak = "base64pad",
        aB = "base64url",
        aq = "utf8";
      function aM() {
        let e = ns(32);
        return sc(e, aU);
      }
      function a$(e) {
        let t = o_(sa(e, aU));
        return sc(t, aU);
      }
      function az(e) {
        let t = o_(sa(e, aq));
        return sc(t, aU);
      }
      function aF(e) {
        return Number(sc(e, aL));
      }
      function aH(e) {
        return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function aV(e) {
        let t = e.replace(/-/g, "+").replace(/_/g, "/"),
          r = (4 - (t.length % 4)) % 4;
        return t + "=".repeat(r);
      }
      function aK(e) {
        if (2 === aF(e.type)) return sc(rJ([e.type, e.sealed]), ak);
        if (1 === aF(e.type)) {
          if (typeof e.senderPublicKey > "u")
            throw Error("Missing sender public key for type 1 envelope");
          return sc(rJ([e.type, e.senderPublicKey, e.iv, e.sealed]), ak);
        }
        return sc(rJ([e.type, e.iv, e.sealed]), ak);
      }
      function aW(e) {
        let t = (e.encoding || ak) === aB ? aV(e.encoded) : e.encoded,
          r = sa(t, ak),
          i = r.slice(0, 1);
        if (1 === aF(i)) {
          let e = r.slice(1, 33),
            t = r.slice(33, 45),
            s = r.slice(45);
          return { type: i, sealed: s, iv: t, senderPublicKey: e };
        }
        if (2 === aF(i)) {
          let e = r.slice(1),
            t = ns(12);
          return { type: i, sealed: e, iv: t };
        }
        let s = r.slice(1, 13),
          n = r.slice(13);
        return { type: i, sealed: n, iv: s };
      }
      function aG(e) {
        let t = e?.type || 0;
        if (1 === t) {
          if (typeof e?.senderPublicKey > "u")
            throw Error("missing sender public key");
          if (typeof e?.receiverPublicKey > "u")
            throw Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey: e?.senderPublicKey,
          receiverPublicKey: e?.receiverPublicKey,
        };
      }
      function aY(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      function aJ(e) {
        return e?.relay || { protocol: "irn" };
      }
      function aZ(e) {
        let t = sl[e];
        if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
        return t;
      }
      function aQ(e) {
        var t;
        if (!e.includes("wc:")) {
          let t = sG(e);
          null != t && t.includes("wc:") && (e = t);
        }
        e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes(
          "wc:"
        )
          ? e.replace("wc:", "")
          : e;
        let r = e.indexOf(":"),
          i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          s = e.substring(0, r),
          n = e.substring(r + 1, i).split("@"),
          o = "u" > typeof i ? e.substring(i) : "",
          a = new URLSearchParams(o),
          c = {};
        a.forEach((e, t) => {
          c[t] = e;
        });
        let l = "string" == typeof c.methods ? c.methods.split(",") : void 0;
        return {
          protocol: s,
          topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
          version: parseInt(n[1], 10),
          symKey: c.symKey,
          relay: (function (e, t = "-") {
            let r = {},
              i = "relay" + t;
            return (
              Object.keys(e).forEach((t) => {
                if (t.startsWith(i)) {
                  let s = t.replace(i, ""),
                    n = e[t];
                  r[s] = n;
                }
              }),
              r
            );
          })(c),
          methods: l,
          expiryTimestamp: c.expiryTimestamp
            ? parseInt(c.expiryTimestamp, 10)
            : void 0,
        };
      }
      function aX(e) {
        let t = new URLSearchParams(),
          r = (function (e, t = "-") {
            let r = {};
            return (
              Object.keys(e).forEach((i) => {
                e[i] && (r["relay" + t + i] = e[i]);
              }),
              r
            );
          })(e.relay);
        Object.keys(r)
          .sort()
          .forEach((e) => {
            t.set(e, r[e]);
          }),
          t.set("symKey", e.symKey),
          e.expiryTimestamp &&
            t.set("expiryTimestamp", e.expiryTimestamp.toString()),
          e.methods && t.set("methods", e.methods.join(","));
        let i = t.toString();
        return `${e.protocol}:${e.topic}@${e.version}?${i}`;
      }
      function a0(e, t, r) {
        return `${e}?wc_ev=${r}&topic=${t}`;
      }
      function a1(e) {
        let t = [];
        return (
          e.forEach((e) => {
            let [r, i] = e.split(":");
            t.push(`${r}:${i}`);
          }),
          t
        );
      }
      function a2(e) {
        return e.includes(":");
      }
      function a8(e) {
        return a2(e) ? e.split(":")[0] : e;
      }
      function a3(e, t) {
        t = t.map((e) => e.replace("did:pkh:", ""));
        let r = (function (e) {
          let t = {};
          return (
            e?.forEach((e) => {
              var r;
              let [i, s] = e.split(":");
              t[i] ||
                (t[i] = { accounts: [], chains: [], events: [], methods: [] }),
                t[i].accounts.push(e),
                null == (r = t[i].chains) || r.push(`${i}:${s}`);
            }),
            t
          );
        })(t);
        for (let [t, i] of Object.entries(r))
          i.methods ? (i.methods = sz(i.methods, e)) : (i.methods = e),
            (i.events = ["chainChanged", "accountsChanged"]);
        return r;
      }
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      let a5 = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        a6 = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function a4(e, t) {
        let { message: r, code: i } = a6[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function a9(e, t) {
        let { message: r, code: i } = a5[e];
        return { message: t ? `${r} ${t}` : r, code: i };
      }
      function a7(e, t) {
        return (
          !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
        );
      }
      function ce(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function ct(e) {
        return typeof e > "u";
      }
      function cr(e, t) {
        return !!(t && ct(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function ci(e, t) {
        return !!(t && ct(e)) || ("number" == typeof e && !isNaN(e));
      }
      function cs(e) {
        return !!(cr(e, !1) && e.includes(":")) && 2 === e.split(":").length;
      }
      function cn(e) {
        let t = !0;
        return (
          a7(e) ? e.length && (t = e.every((e) => cr(e, !1))) : (t = !1), t
        );
      }
      function co(e, t) {
        let r = null;
        return (
          Object.values(e).forEach((e) => {
            var i;
            let s;
            if (r) return;
            let n =
              ((i = `${t}, namespace`),
              (s = null),
              cn(e?.methods)
                ? cn(e?.events) ||
                  (s = a9(
                    "UNSUPPORTED_EVENTS",
                    `${i}, events should be an array of strings or empty array for no events`
                  ))
                : (s = a9(
                    "UNSUPPORTED_METHODS",
                    `${i}, methods should be an array of strings or empty array for no methods`
                  )),
              s);
            n && (r = n);
          }),
          r
        );
      }
      function ca(e, t) {
        let r = null;
        if (e && ce(e)) {
          let i;
          let s = co(e, t);
          s && (r = s);
          let n =
            ((i = null),
            Object.values(e).forEach((e) => {
              var r, s;
              let n;
              if (i) return;
              let o =
                ((r = e?.accounts),
                (s = `${t} namespace`),
                (n = null),
                a7(r)
                  ? r.forEach((e) => {
                      n ||
                        (function (e) {
                          if (cr(e, !1) && e.includes(":")) {
                            let t = e.split(":");
                            if (3 === t.length) {
                              let e = t[0] + ":" + t[1];
                              return !!t[2] && cs(e);
                            }
                          }
                          return !1;
                        })(e) ||
                        (n = a9(
                          "UNSUPPORTED_ACCOUNTS",
                          `${s}, account ${e} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (n = a9(
                      "UNSUPPORTED_ACCOUNTS",
                      `${s}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                n);
              o && (i = o);
            }),
            i);
          n && (r = n);
        } else
          r = a4(
            "MISSING_OR_INVALID",
            `${t}, namespaces should be an object with data`
          );
        return r;
      }
      function cc(e) {
        return cr(e.protocol, !0);
      }
      function cl(e) {
        return "u" > typeof e;
      }
      function ch(e, t) {
        return !(
          !cs(t) ||
          !(function (e) {
            let t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...a1(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function cu(e, t, r) {
        let i = null,
          s = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                var i;
                r.includes(":")
                  ? (t[r] = e[r])
                  : null == (i = e[r].chains) ||
                    i.forEach((i) => {
                      t[i] = { methods: e[r].methods, events: e[r].events };
                    });
              }),
              t
            );
          })(e),
          n = (function (e) {
            let t = {};
            return (
              Object.keys(e).forEach((r) => {
                if (r.includes(":")) t[r] = e[r];
                else {
                  let i = a1(e[r].accounts);
                  i?.forEach((i) => {
                    t[i] = {
                      accounts: e[r].accounts.filter((e) =>
                        e.includes(`${i}:`)
                      ),
                      methods: e[r].methods,
                      events: e[r].events,
                    };
                  });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(s),
          a = Object.keys(n),
          c = cd(Object.keys(e)),
          l = cd(Object.keys(t)),
          h = c.filter((e) => !l.includes(e));
        return (
          h.length &&
            (i = a4(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`
            )),
          sN(o, a) ||
            (i = a4(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || i) return;
            let s = a1(t[e].accounts);
            s.includes(e) ||
              (i = a4(
                "NON_CONFORMING_NAMESPACES",
                `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${s.toString()}`
              ));
          }),
          o.forEach((e) => {
            i ||
              (sN(s[e].methods, n[e].methods)
                ? sN(s[e].events, n[e].events) ||
                  (i = a4(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces events don't satisfy namespace events for ${e}`
                  ))
                : (i = a4(
                    "NON_CONFORMING_NAMESPACES",
                    `${r} namespaces methods don't satisfy namespace methods for ${e}`
                  )));
          }),
          i
        );
      }
      function cd(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      function cp() {
        let e = sx();
        return new Promise((t) => {
          switch (e) {
            case sD.browser:
              t(sO() && navigator?.onLine);
              break;
            case sD.reactNative:
              t(cf());
              break;
            case sD.node:
            default:
              t(!0);
          }
        });
      }
      async function cf() {
        if (sP() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
          let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
          return e?.isConnected;
        }
        return !0;
      }
      let cg = {};
      class cy {
        static get(e) {
          return cg[e];
        }
        static set(e, t) {
          cg[e] = t;
        }
        static delete(e) {
          delete cg[e];
        }
      }
      class cm {}
      class cb extends cm {
        constructor(e) {
          super();
        }
      }
      let cw = T.FIVE_SECONDS,
        cv = { pulse: "heartbeat_pulse" };
      class cE extends cb {
        constructor(e) {
          super(e),
            (this.events = new b.EventEmitter()),
            (this.interval = cw),
            (this.interval = e?.interval || cw);
        }
        static async init(e) {
          let t = new cE(e);
          return await t.init(), t;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async initialize() {
          this.intervalRef = setInterval(
            () => this.pulse(),
            (0, T.toMiliseconds)(this.interval)
          );
        }
        pulse() {
          this.events.emit(cv.pulse);
        }
      }
      let c_ =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        cI =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        cD = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function cS(e, t) {
        if (
          "__proto__" === e ||
          ("constructor" === e && t && "object" == typeof t && "prototype" in t)
        ) {
          console.warn(
            `[destr] Dropping "${e}" key to prevent prototype pollution.`
          );
          return;
        }
        return t;
      }
      function cP(e, t = {}) {
        if ("string" != typeof e) return e;
        if ('"' === e[0] && '"' === e[e.length - 1] && -1 === e.indexOf("\\"))
          return e.slice(1, -1);
        let r = e.trim();
        if (r.length <= 9)
          switch (r.toLowerCase()) {
            case "true":
              return !0;
            case "false":
              return !1;
            case "undefined":
              return;
            case "null":
              return null;
            case "nan":
              return Number.NaN;
            case "infinity":
              return Number.POSITIVE_INFINITY;
            case "-infinity":
              return Number.NEGATIVE_INFINITY;
          }
        if (!cD.test(e)) {
          if (t.strict) throw SyntaxError("[destr] Invalid JSON");
          return e;
        }
        try {
          if (c_.test(e) || cI.test(e)) {
            if (t.strict) throw Error("[destr] Possible prototype pollution");
            return JSON.parse(e, cS);
          }
          return JSON.parse(e);
        } catch (r) {
          if (t.strict) throw r;
          return e;
        }
      }
      var cO = r(48764).Buffer;
      function cx(e, ...t) {
        try {
          var r;
          return (r = e(...t)) && "function" == typeof r.then
            ? r
            : Promise.resolve(r);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      function cA(e) {
        if (
          (function (e) {
            let t = typeof e;
            return null === e || ("object" !== t && "function" !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            let t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ("function" == typeof e.toJSON) return cA(e.toJSON());
        throw Error("[unstorage] Cannot stringify value!");
      }
      let cC = "base64:";
      function cT(e) {
        return (
          (e &&
            e
              .split("?")[0]
              ?.replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")) ||
          ""
        );
      }
      function cN(e) {
        return (e = cT(e)) ? e + ":" : "";
      }
      let cR = () => {
        let e = new Map();
        return {
          name: "memory",
          getInstance: () => e,
          hasItem: (t) => e.has(t),
          getItem: (t) => e.get(t) ?? null,
          getItemRaw: (t) => e.get(t) ?? null,
          setItem(t, r) {
            e.set(t, r);
          },
          setItemRaw(t, r) {
            e.set(t, r);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => [...e.keys()],
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function cj(e, t, r) {
        return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {};
      }
      async function cL(e) {
        "function" == typeof e.dispose && (await cx(e.dispose));
      }
      function cU(e) {
        return new Promise((t, r) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => r(e.error));
        });
      }
      function ck(e, t) {
        let r = indexedDB.open(e);
        r.onupgradeneeded = () => r.result.createObjectStore(t);
        let i = cU(r);
        return (e, r) => i.then((i) => r(i.transaction(t, e).objectStore(t)));
      }
      function cB() {
        return i || (i = ck("keyval-store", "keyval")), i;
      }
      function cq(e, t = cB()) {
        return t("readonly", (t) => cU(t.get(e)));
      }
      var cM = (e = {}) => {
        let t;
        let r = e.base && e.base.length > 0 ? `${e.base}:` : "",
          i = (e) => r + e;
        return (
          e.dbName && e.storeName && (t = ck(e.dbName, e.storeName)),
          {
            name: "idb-keyval",
            options: e,
            hasItem: async (e) => !(typeof (await cq(i(e), t)) > "u"),
            getItem: async (e) => (await cq(i(e), t)) ?? null,
            setItem: (e, r) =>
              (function (e, t, r = cB()) {
                return r("readwrite", (r) => (r.put(t, e), cU(r.transaction)));
              })(i(e), r, t),
            removeItem: (e) =>
              (function (e, t = cB()) {
                return t("readwrite", (t) => (t.delete(e), cU(t.transaction)));
              })(i(e), t),
            getKeys: () =>
              (function (e = cB()) {
                return e("readonly", (e) => {
                  var t, r;
                  if (e.getAllKeys) return cU(e.getAllKeys());
                  let i = [];
                  return ((t = e),
                  (r = (e) => i.push(e.key)),
                  (t.openCursor().onsuccess = function () {
                    this.result && (r(this.result), this.result.continue());
                  }),
                  cU(t.transaction)).then(() => i);
                });
              })(t),
            clear: () =>
              (function (e = cB()) {
                return e("readwrite", (e) => (e.clear(), cU(e.transaction)));
              })(t),
          }
        );
      };
      class c$ {
        constructor() {
          this.indexedDb = (function (e = {}) {
            let t = {
                mounts: { "": e.driver || cR() },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              r = (e) => {
                for (let r of t.mountpoints)
                  if (e.startsWith(r))
                    return {
                      base: r,
                      relativeKey: e.slice(r.length),
                      driver: t.mounts[r],
                    };
                return { base: "", relativeKey: e, driver: t.mounts[""] };
              },
              i = (e, r) =>
                t.mountpoints
                  .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
                  .map((r) => ({
                    relativeBase:
                      e.length > r.length ? e.slice(r.length) : void 0,
                    mountpoint: r,
                    driver: t.mounts[r],
                  })),
              s = (e, r) => {
                if (t.watching)
                  for (let i of ((r = cT(r)), t.watchListeners)) i(e, r);
              },
              n = async () => {
                if (!t.watching)
                  for (let e in ((t.watching = !0), t.mounts))
                    t.unwatch[e] = await cj(t.mounts[e], s, e);
              },
              o = async () => {
                if (t.watching) {
                  for (let e in t.unwatch) await t.unwatch[e]();
                  (t.unwatch = {}), (t.watching = !1);
                }
              },
              a = (e, t, i) => {
                let s = new Map(),
                  n = (e) => {
                    let t = s.get(e.base);
                    return (
                      t ||
                        ((t = { driver: e.driver, base: e.base, items: [] }),
                        s.set(e.base, t)),
                      t
                    );
                  };
                for (let i of e) {
                  let e = "string" == typeof i,
                    s = cT(e ? i : i.key),
                    o = e ? void 0 : i.value,
                    a = e || !i.options ? t : { ...t, ...i.options },
                    c = r(s);
                  n(c).items.push({
                    key: s,
                    value: o,
                    relativeKey: c.relativeKey,
                    options: a,
                  });
                }
                return Promise.all([...s.values()].map((e) => i(e))).then((e) =>
                  e.flat()
                );
              },
              c = {
                hasItem(e, t = {}) {
                  e = cT(e);
                  let { relativeKey: i, driver: s } = r(e);
                  return cx(s.hasItem, i, t);
                },
                getItem(e, t = {}) {
                  e = cT(e);
                  let { relativeKey: i, driver: s } = r(e);
                  return cx(s.getItem, i, t).then((e) => cP(e));
                },
                getItems: (e, t = {}) =>
                  a(e, t, (e) =>
                    e.driver.getItems
                      ? cx(
                          e.driver.getItems,
                          e.items.map((e) => ({
                            key: e.relativeKey,
                            options: e.options,
                          })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: (function (...e) {
                              return cT(e.join(":"));
                            })(e.base, t.key),
                            value: cP(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            cx(e.driver.getItem, t.relativeKey, t.options).then(
                              (e) => ({ key: t.key, value: cP(e) })
                            )
                          )
                        )
                  ),
                getItemRaw(e, t = {}) {
                  e = cT(e);
                  let { relativeKey: i, driver: s } = r(e);
                  return s.getItemRaw
                    ? cx(s.getItemRaw, i, t)
                    : cx(s.getItem, i, t).then((e) => {
                        var t;
                        return "string" == typeof e && e.startsWith(cC)
                          ? ((t = e.slice(cC.length)),
                            globalThis.Buffer
                              ? cO.from(t, "base64")
                              : Uint8Array.from(globalThis.atob(t), (e) =>
                                  e.codePointAt(0)
                                ))
                          : e;
                      });
                },
                async setItem(e, t, i = {}) {
                  if (void 0 === t) return c.removeItem(e);
                  e = cT(e);
                  let { relativeKey: n, driver: o } = r(e);
                  o.setItem &&
                    (await cx(o.setItem, n, cA(t), i),
                    o.watch || s("update", e));
                },
                async setItems(e, t) {
                  await a(e, t, async (e) => {
                    if (e.driver.setItems)
                      return cx(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: cA(e.value),
                          options: e.options,
                        })),
                        t
                      );
                    e.driver.setItem &&
                      (await Promise.all(
                        e.items.map((t) =>
                          cx(
                            e.driver.setItem,
                            t.relativeKey,
                            cA(t.value),
                            t.options
                          )
                        )
                      ));
                  });
                },
                async setItemRaw(e, t, i = {}) {
                  if (void 0 === t) return c.removeItem(e, i);
                  e = cT(e);
                  let { relativeKey: n, driver: o } = r(e);
                  if (o.setItemRaw) await cx(o.setItemRaw, n, t, i);
                  else {
                    if (!o.setItem) return;
                    await cx(
                      o.setItem,
                      n,
                      "string" == typeof t
                        ? t
                        : cC +
                            (globalThis.Buffer
                              ? cO.from(t).toString("base64")
                              : globalThis.btoa(String.fromCodePoint(...t))),
                      i
                    );
                  }
                  o.watch || s("update", e);
                },
                async removeItem(e, t = {}) {
                  "boolean" == typeof t && (t = { removeMeta: t }), (e = cT(e));
                  let { relativeKey: i, driver: n } = r(e);
                  n.removeItem &&
                    (await cx(n.removeItem, i, t),
                    (t.removeMeta || t.removeMata) &&
                      (await cx(n.removeItem, i + "$", t)),
                    n.watch || s("remove", e));
                },
                async getMeta(e, t = {}) {
                  "boolean" == typeof t && (t = { nativeOnly: t }), (e = cT(e));
                  let { relativeKey: i, driver: s } = r(e),
                    n = Object.create(null);
                  if (
                    (s.getMeta && Object.assign(n, await cx(s.getMeta, i, t)),
                    !t.nativeOnly)
                  ) {
                    let e = await cx(s.getItem, i + "$", t).then((e) => cP(e));
                    e &&
                      "object" == typeof e &&
                      ("string" == typeof e.atime &&
                        (e.atime = new Date(e.atime)),
                      "string" == typeof e.mtime &&
                        (e.mtime = new Date(e.mtime)),
                      Object.assign(n, e));
                  }
                  return n;
                },
                setMeta(e, t, r = {}) {
                  return this.setItem(e + "$", t, r);
                },
                removeMeta(e, t = {}) {
                  return this.removeItem(e + "$", t);
                },
                async getKeys(e, t = {}) {
                  e = cN(e);
                  let r = i(e, !0),
                    s = [],
                    n = [],
                    o = !0;
                  for (let e of r) {
                    e.driver.flags?.maxDepth || (o = !1);
                    let r = await cx(e.driver.getKeys, e.relativeBase, t);
                    for (let t of r) {
                      let r = e.mountpoint + cT(t);
                      s.some((e) => r.startsWith(e)) || n.push(r);
                    }
                    s = [
                      e.mountpoint,
                      ...s.filter((t) => !t.startsWith(e.mountpoint)),
                    ];
                  }
                  let a = void 0 !== t.maxDepth && !o;
                  return n.filter((r) => {
                    var i;
                    return (
                      (!a ||
                        (function (e, t) {
                          if (void 0 === t) return !0;
                          let r = 0,
                            i = e.indexOf(":");
                          for (; i > -1; ) r++, (i = e.indexOf(":", i + 1));
                          return r <= t;
                        })(r, t.maxDepth)) &&
                      ((i = e)
                        ? r.startsWith(i) && "$" !== r[r.length - 1]
                        : "$" !== r[r.length - 1])
                    );
                  });
                },
                async clear(e, t = {}) {
                  (e = cN(e)),
                    await Promise.all(
                      i(e, !1).map(async (e) => {
                        if (e.driver.clear)
                          return cx(e.driver.clear, e.relativeBase, t);
                        if (e.driver.removeItem) {
                          let r = await e.driver.getKeys(
                            e.relativeBase || "",
                            t
                          );
                          return Promise.all(
                            r.map((r) => e.driver.removeItem(r, t))
                          );
                        }
                      })
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(t.mounts).map((e) => cL(e)));
                },
                watch: async (e) => (
                  await n(),
                  t.watchListeners.push(e),
                  async () => {
                    (t.watchListeners = t.watchListeners.filter(
                      (t) => t !== e
                    )),
                      0 === t.watchListeners.length && (await o());
                  }
                ),
                async unwatch() {
                  (t.watchListeners = []), await o();
                },
                mount(e, r) {
                  if ((e = cN(e)) && t.mounts[e])
                    throw Error(`already mounted at ${e}`);
                  return (
                    e &&
                      (t.mountpoints.push(e),
                      t.mountpoints.sort((e, t) => t.length - e.length)),
                    (t.mounts[e] = r),
                    t.watching &&
                      Promise.resolve(cj(r, s, e))
                        .then((r) => {
                          t.unwatch[e] = r;
                        })
                        .catch(console.error),
                    c
                  );
                },
                async unmount(e, r = !0) {
                  (e = cN(e)) &&
                    t.mounts[e] &&
                    (t.watching &&
                      e in t.unwatch &&
                      (t.unwatch[e]?.(), delete t.unwatch[e]),
                    r && (await cL(t.mounts[e])),
                    (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                    delete t.mounts[e]);
                },
                getMount(e = "") {
                  e = cT(e) + ":";
                  let t = r(e);
                  return { driver: t.driver, base: t.base };
                },
                getMounts(e = "", t = {}) {
                  e = cT(e);
                  let r = i(e, t.parents);
                  return r.map((e) => ({
                    driver: e.driver,
                    base: e.mountpoint,
                  }));
                },
                keys: (e, t = {}) => c.getKeys(e, t),
                get: (e, t = {}) => c.getItem(e, t),
                set: (e, t, r = {}) => c.setItem(e, t, r),
                has: (e, t = {}) => c.hasItem(e, t),
                del: (e, t = {}) => c.removeItem(e, t),
                remove: (e, t = {}) => c.removeItem(e, t),
              };
            return c;
          })({
            driver: cM({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((e) => [e.key, e.value]);
        }
        async getItem(e) {
          let t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, ed(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var cz =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof r.g
            ? r.g
            : "u" > typeof self
            ? self
            : {},
        cF = { exports: {} };
      function cH(e) {
        var t;
        return [e[0], eu(null != (t = e[1]) ? t : "")];
      }
      !(function () {
        let e;
        function t() {}
        ((e = t).prototype.getItem = function (e) {
          return this.hasOwnProperty(e) ? String(this[e]) : null;
        }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            let e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          "u" > typeof cz && cz.localStorage
            ? (cF.exports = cz.localStorage)
            : "u" > typeof window && window.localStorage
            ? (cF.exports = window.localStorage)
            : (cF.exports = new t());
      })();
      class cV {
        constructor() {
          this.localStorage = cF.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(cH);
        }
        async getItem(e) {
          let t = this.localStorage.getItem(e);
          if (null !== t) return eu(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, ed(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      let cK = async (e, t, r) => {
          let i = "wc_storage_version",
            s = await t.getItem(i);
          if (s && s >= 1) {
            r(t);
            return;
          }
          let n = await e.getKeys();
          if (!n.length) {
            r(t);
            return;
          }
          let o = [];
          for (; n.length; ) {
            let r = n.shift();
            if (!r) continue;
            let i = r.toLowerCase();
            if (
              i.includes("wc@") ||
              i.includes("walletconnect") ||
              i.includes("wc_") ||
              i.includes("wallet_connect")
            ) {
              let i = await e.getItem(r);
              await t.setItem(r, i), o.push(r);
            }
          }
          await t.setItem(i, 1), r(t), cW(e, o);
        },
        cW = async (e, t) => {
          t.length &&
            t.forEach(async (t) => {
              await e.removeItem(t);
            });
        };
      class cG {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          let e = new cV();
          this.storage = e;
          try {
            let t = new c$();
            cK(e, t, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              let t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var cY = r(36559),
        cJ = r.n(cY);
      let cZ = { level: "info" },
        cQ = "custom_context";
      class cX {
        constructor(e) {
          (this.nodeValue = e),
            (this.sizeInBytes = new TextEncoder().encode(
              this.nodeValue
            ).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      }
      class c0 {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          let t = new cX(e);
          if (t.size > this.maxSizeInBytes)
            throw Error(
              `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
            );
          for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
          this.head
            ? (this.tail && (this.tail.next = t), (this.tail = t))
            : ((this.head = t), (this.tail = t)),
            this.lengthInNodes++,
            (this.sizeInBytes += t.size);
        }
        shift() {
          if (!this.head) return;
          let e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          let e = [],
            t = this.head;
          for (; null !== t; ) e.push(t.value), (t = t.next);
          return e;
        }
        get length() {
          return this.lengthInNodes;
        }
        get size() {
          return this.sizeInBytes;
        }
        toOrderedArray() {
          return Array.from(this);
        }
        [Symbol.iterator]() {
          let e = this.head;
          return {
            next: () => {
              if (!e) return { done: !0, value: null };
              let t = e.value;
              return (e = e.next), { done: !1, value: t };
            },
          };
        }
      }
      class c1 {
        constructor(e, t = 1024e3) {
          (this.level = e ?? "error"),
            (this.levelValue = cY.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = t),
            (this.logs = new c0(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, t) {
          t === cY.levels.values.error
            ? console.error(e)
            : t === cY.levels.values.warn
            ? console.warn(e)
            : t === cY.levels.values.debug
            ? console.debug(e)
            : t === cY.levels.values.trace
            ? console.trace(e)
            : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append(ed({ timestamp: new Date().toISOString(), log: e }));
          let t = "string" == typeof e ? JSON.parse(e).level : e.level;
          t >= this.levelValue && this.forwardToConsole(e, t);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new c0(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          let t = this.getLogArray();
          return (
            t.push(ed({ extraMetadata: e })),
            new Blob(t, { type: "application/json" })
          );
        }
      }
      class c2 {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new c1(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
        downloadLogsBlobInBrowser(e) {
          let t = URL.createObjectURL(this.logsToBlob(e)),
            r = document.createElement("a");
          (r.href = t),
            (r.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(r),
            r.click(),
            document.body.removeChild(r),
            URL.revokeObjectURL(t);
        }
      }
      class c8 {
        constructor(e, t = 1024e3) {
          this.baseChunkLogger = new c1(e, t);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
      }
      var c3 = Object.defineProperty,
        c5 = Object.defineProperties,
        c6 = Object.getOwnPropertyDescriptors,
        c4 = Object.getOwnPropertySymbols,
        c9 = Object.prototype.hasOwnProperty,
        c7 = Object.prototype.propertyIsEnumerable,
        le = (e, t, r) =>
          t in e
            ? c3(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lt = (e, t) => {
          for (var r in t || (t = {})) c9.call(t, r) && le(e, r, t[r]);
          if (c4) for (var r of c4(t)) c7.call(t, r) && le(e, r, t[r]);
          return e;
        },
        lr = (e, t) => c5(e, c6(t));
      function li(e) {
        return lr(lt({}, e), { level: e?.level || cZ.level });
      }
      function ls(e, t = cQ) {
        return typeof e.bindings > "u"
          ? (function (e, t = cQ) {
              return e[t] || "";
            })(e, t)
          : e.bindings().context || "";
      }
      function ln(e, t, r = cQ) {
        let i = (function (e, t, r = cQ) {
            let i = ls(e, r);
            return i.trim() ? `${i}/${t}` : t;
          })(e, t, r),
          s = e.child({ context: i });
        return (function (e, t, r = cQ) {
          return (e[r] = t), e;
        })(s, i, r);
      }
      var lo = Object.defineProperty,
        la = (e, t, r) =>
          t in e
            ? lo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lc = (e, t, r) => la(e, "symbol" != typeof t ? t + "" : t, r);
      class ll extends cm {
        constructor(e) {
          super(),
            (this.opts = e),
            lc(this, "protocol", "wc"),
            lc(this, "version", 2);
        }
      }
      var lh = Object.defineProperty,
        lu = (e, t, r) =>
          t in e
            ? lh(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        ld = (e, t, r) => lu(e, "symbol" != typeof t ? t + "" : t, r);
      class lp extends cm {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            ld(this, "records", new Map());
        }
      }
      class lf {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      }
      class lg extends cm {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class ly extends cm {
        constructor(e) {
          super();
        }
      }
      class lm {
        constructor(e, t, r, i) {
          (this.core = e), (this.logger = t), (this.name = r);
        }
      }
      class lb extends cm {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class lw extends cm {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      class lv {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.store = r);
        }
      }
      class lE {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      }
      class l_ {
        constructor(e, t, r) {
          (this.core = e), (this.logger = t), (this.telemetryEnabled = r);
        }
      }
      var lI = Object.defineProperty,
        lD = (e, t, r) =>
          t in e
            ? lI(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        lS = (e, t, r) => lD(e, "symbol" != typeof t ? t + "" : t, r);
      class lP {
        constructor(e) {
          (this.opts = e), lS(this, "protocol", "wc"), lS(this, "version", 2);
        }
      }
      class lO {
        constructor(e) {
          this.client = e;
        }
      }
      let lx = "INTERNAL_ERROR",
        lA = "SERVER_ERROR",
        lC = [-32700, -32600, -32601, -32602, -32603],
        lT = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [lx]: { code: -32603, message: "Internal error" },
          [lA]: { code: -32e3, message: "Server error" },
        };
      function lN(e) {
        return Object.keys(lT).includes(e) ? lT[e] : lT[lA];
      }
      function lR(e, t, r) {
        return e.message.includes("getaddrinfo ENOTFOUND") ||
          e.message.includes("connect ECONNREFUSED")
          ? Error(`Unavailable ${r} RPC url at ${t}`)
          : e;
      }
      var lj = r(1468);
      function lL(e = 3) {
        let t = Date.now() * Math.pow(10, e);
        return t + Math.floor(Math.random() * Math.pow(10, e));
      }
      function lU(e = 6) {
        return BigInt(lL(e));
      }
      function lk(e, t, r) {
        return { id: r || lL(), jsonrpc: "2.0", method: e, params: t };
      }
      function lB(e, t) {
        return { id: e, jsonrpc: "2.0", result: t };
      }
      function lq(e, t, r) {
        var i, s;
        return {
          id: e,
          jsonrpc: "2.0",
          error:
            void 0 === (i = t)
              ? lN(lx)
              : ("string" == typeof i &&
                  (i = Object.assign(Object.assign({}, lN(lA)), {
                    message: i,
                  })),
                void 0 !== r && (i.data = r),
                (s = i.code),
                lC.includes(s) &&
                  (i = (function (e) {
                    let t = Object.values(lT).find((t) => t.code === e);
                    return t || lT[lA];
                  })(i.code)),
                i),
        };
      }
      class lM {}
      class l$ extends lM {
        constructor() {
          super();
        }
      }
      class lz extends l$ {
        constructor(e) {
          super();
        }
      }
      function lF(e, t) {
        let r = (function (e) {
          let t = e.match(RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        })(e);
        return void 0 !== r && RegExp(t).test(r);
      }
      function lH(e) {
        return lF(e, "^https?:");
      }
      function lV(e) {
        return lF(e, "^wss?:");
      }
      function lK(e) {
        return (
          "object" == typeof e &&
          "id" in e &&
          "jsonrpc" in e &&
          "2.0" === e.jsonrpc
        );
      }
      function lW(e) {
        return lK(e) && "method" in e;
      }
      function lG(e) {
        return lK(e) && (lY(e) || lJ(e));
      }
      function lY(e) {
        return "result" in e;
      }
      function lJ(e) {
        return "error" in e;
      }
      class lZ extends lz {
        constructor(e) {
          super(e),
            (this.events = new b.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            lk(e.method, e.params || [], e.id || lU().toString()),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (r, i) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                i(e);
              }
            this.events.on(`${e.id}`, (e) => {
              lJ(e) ? i(e.error) : r(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (e) {
              i(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            lG(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      let lQ = () =>
          "u" > typeof WebSocket ||
          ("u" > typeof r.g && "u" > typeof r.g.WebSocket) ||
          ("u" > typeof window && "u" > typeof window.WebSocket) ||
          ("u" > typeof self && "u" > typeof self.WebSocket),
        lX = (e) => e.split("?")[0],
        l0 =
          "u" > typeof WebSocket
            ? WebSocket
            : "u" > typeof r.g && "u" > typeof r.g.WebSocket
            ? r.g.WebSocket
            : "u" > typeof window && "u" > typeof window.WebSocket
            ? window.WebSocket
            : "u" > typeof self && "u" > typeof self.WebSocket
            ? self.WebSocket
            : r(72030);
      class l1 {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new b.EventEmitter()),
            (this.registering = !1),
            !lV(e))
          )
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          this.url = e;
        }
        get connected() {
          return "u" > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            if (typeof this.socket > "u") {
              t(Error("Connection already closed"));
              return;
            }
            (this.socket.onclose = (t) => {
              this.onClose(t), e();
            }),
              this.socket.close();
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send(ed(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register(e = this.url) {
          if (!lV(e))
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, r) => {
              let i = (0, lj.isReactNative)()
                  ? void 0
                  : {
                      rejectUnauthorized: !RegExp(
                        "wss?://localhost(:d{2,5})?"
                      ).test(e),
                    },
                s = new l0(e, [], i);
              lQ()
                ? (s.onerror = (e) => {
                    r(this.emitError(e.error));
                  })
                : s.on("error", (e) => {
                    r(this.emitError(e));
                  }),
                (s.onopen = () => {
                  this.onOpen(s), t(s);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? eu(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = r.message || r.toString(),
            s = lq(e, i);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return lR(e, lX(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          let t = this.parseError(
            Error(
              e?.message ||
                `WebSocket connection failed for host: ${lX(this.url)}`
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
      var l2 = r(48764).Buffer,
        l8 = r(83454);
      let l3 = "core",
        l5 = `wc@2:${l3}:`,
        l6 = { name: l3, logger: "error" },
        l4 = { database: ":memory:" },
        l9 = "client_ed25519_seed",
        l7 = T.ONE_DAY,
        he = T.SIX_HOURS,
        ht = "wss://relay.walletconnect.org",
        hr = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          transport_closed: "relayer_transport_closed",
          publish: "relayer_publish",
        },
        hi = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        hs = "2.19.2",
        hn = { link_mode: "link_mode", relay: "relay" },
        ho = { inbound: "inbound", outbound: "outbound" },
        ha = "WALLETCONNECT_LINK_MODE_APPS",
        hc = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          expired: "subscription_expired",
          disabled: "subscription_disabled",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        hl =
          (T.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: T.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: T.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: T.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: T.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: T.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: T.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        hh = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        hu = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        hd = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        hp = "https://verify.walletconnect.org",
        hf = `${hp}/v3`,
        hg = ["https://verify.walletconnect.com", hp],
        hy = {
          pairing_started: "pairing_started",
          pairing_uri_validation_success: "pairing_uri_validation_success",
          pairing_uri_not_expired: "pairing_uri_not_expired",
          store_new_pairing: "store_new_pairing",
          subscribing_pairing_topic: "subscribing_pairing_topic",
          subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
          existing_pairing: "existing_pairing",
          pairing_not_expired: "pairing_not_expired",
          emit_inactive_pairing: "emit_inactive_pairing",
          emit_session_proposal: "emit_session_proposal",
          subscribing_to_pairing_topic: "subscribing_to_pairing_topic",
        },
        hm = {
          no_wss_connection: "no_wss_connection",
          no_internet_connection: "no_internet_connection",
          malformed_pairing_uri: "malformed_pairing_uri",
          active_pairing_already_exists: "active_pairing_already_exists",
          subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
          pairing_expired: "pairing_expired",
          proposal_expired: "proposal_expired",
          proposal_listener_not_found: "proposal_listener_not_found",
        },
        hb = {
          session_approve_started: "session_approve_started",
          proposal_not_expired: "proposal_not_expired",
          session_namespaces_validation_success:
            "session_namespaces_validation_success",
          create_session_topic: "create_session_topic",
          subscribing_session_topic: "subscribing_session_topic",
          subscribe_session_topic_success: "subscribe_session_topic_success",
          publishing_session_approve: "publishing_session_approve",
          session_approve_publish_success: "session_approve_publish_success",
          store_session: "store_session",
          publishing_session_settle: "publishing_session_settle",
          session_settle_publish_success: "session_settle_publish_success",
        },
        hw = {
          no_internet_connection: "no_internet_connection",
          no_wss_connection: "no_wss_connection",
          proposal_expired: "proposal_expired",
          subscribe_session_topic_failure: "subscribe_session_topic_failure",
          session_approve_publish_failure: "session_approve_publish_failure",
          session_settle_publish_failure: "session_settle_publish_failure",
          session_approve_namespace_validation_failure:
            "session_approve_namespace_validation_failure",
          proposal_not_found: "proposal_not_found",
        },
        hv = {
          authenticated_session_approve_started:
            "authenticated_session_approve_started",
          authenticated_session_not_expired:
            "authenticated_session_not_expired",
          chains_caip2_compliant: "chains_caip2_compliant",
          chains_evm_compliant: "chains_evm_compliant",
          create_authenticated_session_topic:
            "create_authenticated_session_topic",
          cacaos_verified: "cacaos_verified",
          store_authenticated_session: "store_authenticated_session",
          subscribing_authenticated_session_topic:
            "subscribing_authenticated_session_topic",
          subscribe_authenticated_session_topic_success:
            "subscribe_authenticated_session_topic_success",
          publishing_authenticated_session_approve:
            "publishing_authenticated_session_approve",
          authenticated_session_approve_publish_success:
            "authenticated_session_approve_publish_success",
        },
        hE = {
          no_internet_connection: "no_internet_connection",
          no_wss_connection: "no_wss_connection",
          missing_session_authenticate_request:
            "missing_session_authenticate_request",
          session_authenticate_request_expired:
            "session_authenticate_request_expired",
          chains_caip2_compliant_failure: "chains_caip2_compliant_failure",
          chains_evm_compliant_failure: "chains_evm_compliant_failure",
          invalid_cacao: "invalid_cacao",
          subscribe_authenticated_session_topic_failure:
            "subscribe_authenticated_session_topic_failure",
          authenticated_session_approve_publish_failure:
            "authenticated_session_approve_publish_failure",
          authenticated_session_pending_request_not_found:
            "authenticated_session_pending_request_not_found",
        };
      var h_ = function (e, t) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
        for (var s = 0; s < e.length; s++) {
          var n = e.charAt(s),
            o = n.charCodeAt(0);
          if (255 !== r[o]) throw TypeError(n + " is ambiguous");
          r[o] = s;
        }
        var a = e.length,
          c = e.charAt(0),
          l = Math.log(a) / Math.log(256),
          h = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[0]) {
            for (var i = 0, s = 0; e[t] === c; ) i++, t++;
            for (
              var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
              e[t];

            ) {
              var h = r[e.charCodeAt(t)];
              if (255 === h) return;
              for (
                var u = 0, d = n - 1;
                (0 !== h || u < s) && -1 !== d;
                d--, u++
              )
                (h += (a * o[d]) >>> 0),
                  (o[d] = h % 256 >>> 0),
                  (h = (h / 256) >>> 0);
              if (0 !== h) throw Error("Non-zero carry");
              (s = u), t++;
            }
            if (" " !== e[t]) {
              for (var p = n - s; p !== n && 0 === o[p]; ) p++;
              for (var f = new Uint8Array(i + (n - p)), g = i; p !== n; )
                f[g++] = o[p++];
              return f;
            }
          }
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, s = 0, n = t.length; s !== n && 0 === t[s]; )
              s++, r++;
            for (
              var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
              s !== n;

            ) {
              for (
                var u = t[s], d = 0, p = o - 1;
                (0 !== u || d < i) && -1 !== p;
                p--, d++
              )
                (u += (256 * l[p]) >>> 0),
                  (l[p] = u % a >>> 0),
                  (u = (u / a) >>> 0);
              if (0 !== u) throw Error("Non-zero carry");
              (i = d), s++;
            }
            for (var f = o - i; f !== o && 0 === l[f]; ) f++;
            for (var g = c.repeat(r); f < o; ++f) g += e.charAt(l[f]);
            return g;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var r = u(e);
            if (r) return r;
            throw Error(`Non-${t} character`);
          },
        };
      };
      let hI = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        hD = (e) => new TextEncoder().encode(e),
        hS = (e) => new TextDecoder().decode(e);
      class hP {
        constructor(e, t, r) {
          (this.name = e), (this.prefix = t), (this.baseEncode = r);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class hO {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return hA(this, e);
        }
      }
      class hx {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return hA(this, e);
        }
        decode(e) {
          let t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      let hA = (e, t) =>
        new hx({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class hC {
        constructor(e, t, r, i) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = i),
            (this.encoder = new hP(e, t, r)),
            (this.decoder = new hO(e, t, i));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      let hT = ({ name: e, prefix: t, encode: r, decode: i }) =>
          new hC(e, t, r, i),
        hN = ({ prefix: e, name: t, alphabet: r }) => {
          let { encode: i, decode: s } = h_(r, t);
          return hT({ prefix: e, name: t, encode: i, decode: (e) => hI(s(e)) });
        },
        hR = (e, t, r, i) => {
          let s = {};
          for (let e = 0; e < t.length; ++e) s[t[e]] = e;
          let n = e.length;
          for (; "=" === e[n - 1]; ) --n;
          let o = new Uint8Array(((n * r) / 8) | 0),
            a = 0,
            c = 0,
            l = 0;
          for (let t = 0; t < n; ++t) {
            let n = s[e[t]];
            if (void 0 === n) throw SyntaxError(`Non-${i} character`);
            (c = (c << r) | n),
              (a += r) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
          }
          if (a >= r || 255 & (c << (8 - a)))
            throw SyntaxError("Unexpected end of data");
          return o;
        },
        hj = (e, t, r) => {
          let i = "=" === t[t.length - 1],
            s = (1 << r) - 1,
            n = "",
            o = 0,
            a = 0;
          for (let i = 0; i < e.length; ++i)
            for (a = (a << 8) | e[i], o += 8; o > r; )
              (o -= r), (n += t[s & (a >> o)]);
          if ((o && (n += t[s & (a << (r - o))]), i))
            for (; (n.length * r) & 7; ) n += "=";
          return n;
        },
        hL = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) =>
          hT({
            prefix: t,
            name: e,
            encode: (e) => hj(e, i, r),
            decode: (t) => hR(t, i, r, e),
          }),
        hU = hT({
          prefix: "\x00",
          name: "identity",
          encode: (e) => hS(e),
          decode: (e) => hD(e),
        });
      var hk = Object.freeze({ __proto__: null, identity: hU });
      let hB = hL({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var hq = Object.freeze({ __proto__: null, base2: hB });
      let hM = hL({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var h$ = Object.freeze({ __proto__: null, base8: hM });
      let hz = hN({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var hF = Object.freeze({ __proto__: null, base10: hz });
      let hH = hL({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        hV = hL({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var hK = Object.freeze({ __proto__: null, base16: hH, base16upper: hV });
      let hW = hL({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        hG = hL({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        hY = hL({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        hJ = hL({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        hZ = hL({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        hQ = hL({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        hX = hL({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        h0 = hL({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        h1 = hL({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var h2 = Object.freeze({
        __proto__: null,
        base32: hW,
        base32upper: hG,
        base32pad: hY,
        base32padupper: hJ,
        base32hex: hZ,
        base32hexupper: hQ,
        base32hexpad: hX,
        base32hexpadupper: h0,
        base32z: h1,
      });
      let h8 = hN({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        h3 = hN({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var h5 = Object.freeze({ __proto__: null, base36: h8, base36upper: h3 });
      let h6 = hN({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        h4 = hN({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var h9 = Object.freeze({
        __proto__: null,
        base58btc: h6,
        base58flickr: h4,
      });
      let h7 = hL({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        ue = hL({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        ut = hL({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        ur = hL({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var ui = Object.freeze({
        __proto__: null,
        base64: h7,
        base64pad: ue,
        base64url: ut,
        base64urlpad: ur,
      });
      let us = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        un = us.reduce((e, t, r) => ((e[r] = t), e), []),
        uo = us.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []),
        ua = hT({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, t) => (e += un[t]), "");
          },
          decode: function (e) {
            let t = [];
            for (let r of e) {
              let e = uo[r.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
              t.push(e);
            }
            return new Uint8Array(t);
          },
        });
      var uc = Object.freeze({ __proto__: null, base256emoji: ua });
      function ul(e, t, r) {
        (t = t || []), (r = r || 0);
        for (var i = r; e >= 2147483648; )
          (t[r++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (t[r++] = (255 & e) | 128), (e >>>= 7);
        return (t[r] = 0 | e), (ul.bytes = r - i + 1), t;
      }
      function uh(e, t) {
        var r,
          i = 0,
          t = t || 0,
          s = 0,
          n = t,
          o = e.length;
        do {
          if (n >= o)
            throw ((uh.bytes = 0), RangeError("Could not decode varint"));
          (r = e[n++]),
            (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)),
            (s += 7);
        } while (r >= 128);
        return (uh.bytes = n - t), i;
      }
      var uu = {
        encode: ul,
        decode: uh,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 268435456
            ? 4
            : e < 34359738368
            ? 5
            : e < 4398046511104
            ? 6
            : e < 562949953421312
            ? 7
            : e < 72057594037927940
            ? 8
            : e < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let ud = (e, t, r = 0) => (uu.encode(e, t, r), t),
        up = (e) => uu.encodingLength(e),
        uf = (e, t) => {
          let r = t.byteLength,
            i = up(e),
            s = i + up(r),
            n = new Uint8Array(s + r);
          return ud(e, n, 0), ud(r, n, i), n.set(t, s), new ug(e, r, t, n);
        };
      class ug {
        constructor(e, t, r, i) {
          (this.code = e), (this.size = t), (this.digest = r), (this.bytes = i);
        }
      }
      let uy = ({ name: e, code: t, encode: r }) => new um(e, t, r);
      class um {
        constructor(e, t, r) {
          (this.name = e), (this.code = t), (this.encode = r);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array
              ? uf(this.code, t)
              : t.then((e) => uf(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      let ub = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        uw = uy({ name: "sha2-256", code: 18, encode: ub("SHA-256") }),
        uv = uy({ name: "sha2-512", code: 19, encode: ub("SHA-512") });
      var uE = Object.freeze({ __proto__: null, sha256: uw, sha512: uv });
      let u_ = (e) => uf(0, hI(e));
      var uI = Object.freeze({
        __proto__: null,
        identity: { code: 0, name: "identity", encode: hI, digest: u_ },
      });
      new TextEncoder(), new TextDecoder();
      let uD = {
        ...hk,
        ...hq,
        ...h$,
        ...hF,
        ...hK,
        ...h2,
        ...h5,
        ...h9,
        ...ui,
        ...uc,
      };
      function uS(e, t, r, i) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: i },
        };
      }
      ({ ...uE, ...uI });
      let uP = uS(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        uO = uS(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            e = e.substring(1);
            let t = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          }
        ),
        ux = {
          utf8: uP,
          "utf-8": uP,
          hex: uD.base16,
          latin1: uO,
          ascii: uO,
          binary: uO,
          ...uD,
        };
      var uA = Object.defineProperty,
        uC = (e, t, r) =>
          t in e
            ? uA(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        uT = (e, t, r) => uC(e, "symbol" != typeof t ? t + "" : t, r);
      class uN {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            uT(this, "keychain", new Map()),
            uT(this, "name", "keychain"),
            uT(this, "version", "0.3"),
            uT(this, "initialized", !1),
            uT(this, "storagePrefix", l5),
            uT(this, "init", async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            uT(
              this,
              "has",
              (e) => (this.isInitialized(), this.keychain.has(e))
            ),
            uT(this, "set", async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            uT(this, "get", (e) => {
              this.isInitialized();
              let t = this.keychain.get(e);
              if (typeof t > "u") {
                let { message: t } = a4(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(t);
              }
              return t;
            }),
            uT(this, "del", async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = ln(t, this.name));
        }
        get context() {
          return ls(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, sR(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? sj(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var uR = Object.defineProperty,
        uj = (e, t, r) =>
          t in e
            ? uR(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        uL = (e, t, r) => uj(e, "symbol" != typeof t ? t + "" : t, r);
      class uU {
        constructor(e, t, r) {
          (this.core = e),
            (this.logger = t),
            uL(this, "name", "crypto"),
            uL(this, "keychain"),
            uL(this, "randomSessionIdentifier", aM()),
            uL(this, "initialized", !1),
            uL(this, "init", async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            uL(
              this,
              "hasKeys",
              (e) => (this.isInitialized(), this.keychain.has(e))
            ),
            uL(this, "getClientId", async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                t = rW(e);
              return rV(t.publicKey);
            }),
            uL(this, "generateKeyPair", () => {
              this.isInitialized();
              let e = (function () {
                let e = aI.utils.randomPrivateKey(),
                  t = aI.getPublicKey(e);
                return { privateKey: sc(e, aU), publicKey: sc(t, aU) };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            uL(this, "signJWT", async (e) => {
              this.isInitialized();
              let t = await this.getClientSeed(),
                r = rW(t),
                i = this.randomSessionIdentifier;
              return await rG(i, e, l7, r);
            }),
            uL(this, "generateSharedKey", (e, t, r) => {
              this.isInitialized();
              let i = this.getPrivateKey(e),
                s = (function (e, t) {
                  let r = aI.getSharedSecret(sa(e, aU), sa(t, aU)),
                    i = oy(o_, r, void 0, void 0, 32);
                  return sc(i, aU);
                })(i, t);
              return this.setSymKey(s, r);
            }),
            uL(this, "setSymKey", async (e, t) => {
              this.isInitialized();
              let r = t || a$(e);
              return await this.keychain.set(r, e), r;
            }),
            uL(this, "deleteKeyPair", async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            uL(this, "deleteSymKey", async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            uL(this, "encode", async (e, t, r) => {
              this.isInitialized();
              let i = aG(r),
                s = ed(t);
              if (2 === i.type)
                return (function (e, t) {
                  let r = sa("2", aL),
                    i = ns(12),
                    s = sa(e, aq),
                    n = aK({ type: r, sealed: s, iv: i });
                  return t === aB ? aH(n) : n;
                })(s, r?.encoding);
              if (aY(i)) {
                let t = i.senderPublicKey,
                  r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              let n = this.getSymKey(e),
                { type: o, senderPublicKey: a } = i;
              return (function (e) {
                let t = sa(`${"u" > typeof e.type ? e.type : 0}`, aL);
                if (1 === aF(t) && typeof e.senderPublicKey > "u")
                  throw Error("Missing sender public key for type 1 envelope");
                let r =
                    "u" > typeof e.senderPublicKey
                      ? sa(e.senderPublicKey, aU)
                      : void 0,
                  i = "u" > typeof e.iv ? sa(e.iv, aU) : ns(12),
                  s = sa(e.symKey, aU),
                  n = ou(s, i).encrypt(sa(e.message, aq)),
                  o = aK({ type: t, sealed: n, iv: i, senderPublicKey: r });
                return e.encoding === aB ? aH(o) : o;
              })({
                type: o,
                symKey: n,
                message: s,
                senderPublicKey: a,
                encoding: r?.encoding,
              });
            }),
            uL(this, "decode", async (e, t, r) => {
              this.isInitialized();
              let i = (function (e, t) {
                let r = aW({ encoded: e, encoding: t?.encoding });
                return aG({
                  type: aF(r.type),
                  senderPublicKey:
                    "u" > typeof r.senderPublicKey
                      ? sc(r.senderPublicKey, aU)
                      : void 0,
                  receiverPublicKey: t?.receiverPublicKey,
                });
              })(t, r);
              if (2 === i.type) {
                let e = (function (e, t) {
                  let { sealed: r } = aW({ encoded: e, encoding: t });
                  return sc(r, aq);
                })(t, r?.encoding);
                return eu(e);
              }
              if (aY(i)) {
                let t = i.receiverPublicKey,
                  r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              try {
                let i = this.getSymKey(e),
                  s = (function (e) {
                    let t = sa(e.symKey, aU),
                      { sealed: r, iv: i } = aW({
                        encoded: e.encoded,
                        encoding: e.encoding,
                      }),
                      s = ou(t, i).decrypt(r);
                    if (null === s) throw Error("Failed to decrypt");
                    return sc(s, aq);
                  })({ symKey: i, encoded: t, encoding: r?.encoding });
                return eu(s);
              } catch (t) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(t);
              }
            }),
            uL(this, "getPayloadType", (e, t = ak) => {
              let r = aW({ encoded: e, encoding: t });
              return aF(r.type);
            }),
            uL(this, "getPayloadSenderPublicKey", (e, t = ak) => {
              let r = aW({ encoded: e, encoding: t });
              return r.senderPublicKey ? sc(r.senderPublicKey, aU) : void 0;
            }),
            (this.core = e),
            (this.logger = ln(t, this.name)),
            (this.keychain = r || new uN(this.core, this.logger));
        }
        get context() {
          return ls(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(l9);
          } catch {
            (e = aM()), await this.keychain.set(l9, e);
          }
          return (function (e, t = "utf8") {
            let r = ux[t];
            if (!r) throw Error(`Unsupported encoding "${t}"`);
            return ("utf8" === t || "utf-8" === t) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, "utf8")
              : r.decoder.decode(`${r.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var uk = Object.defineProperty,
        uB = Object.defineProperties,
        uq = Object.getOwnPropertyDescriptors,
        uM = Object.getOwnPropertySymbols,
        u$ = Object.prototype.hasOwnProperty,
        uz = Object.prototype.propertyIsEnumerable,
        uF = (e, t, r) =>
          t in e
            ? uk(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        uH = (e, t) => {
          for (var r in t || (t = {})) u$.call(t, r) && uF(e, r, t[r]);
          if (uM) for (var r of uM(t)) uz.call(t, r) && uF(e, r, t[r]);
          return e;
        },
        uV = (e, t) => uB(e, uq(t)),
        uK = (e, t, r) => uF(e, "symbol" != typeof t ? t + "" : t, r);
      class uW extends lf {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            uK(this, "messages", new Map()),
            uK(this, "messagesWithoutClientAck", new Map()),
            uK(this, "name", "messages"),
            uK(this, "version", "0.3"),
            uK(this, "initialized", !1),
            uK(this, "storagePrefix", l5),
            uK(this, "init", async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e);
                  let t = await this.getRelayerMessagesWithoutClientAck();
                  "u" > typeof t && (this.messagesWithoutClientAck = t),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            uK(this, "set", async (e, t, r) => {
              this.isInitialized();
              let i = az(t),
                s = this.messages.get(e);
              if ((typeof s > "u" && (s = {}), "u" > typeof s[i])) return i;
              if (((s[i] = t), this.messages.set(e, s), r === ho.inbound)) {
                let r = this.messagesWithoutClientAck.get(e) || {};
                this.messagesWithoutClientAck.set(e, uV(uH({}, r), { [i]: t }));
              }
              return await this.persist(), i;
            }),
            uK(this, "get", (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            uK(this, "getWithoutAck", (e) => {
              this.isInitialized();
              let t = {};
              for (let r of e) {
                let e = this.messagesWithoutClientAck.get(r) || {};
                t[r] = Object.values(e);
              }
              return t;
            }),
            uK(this, "has", (e, t) => {
              this.isInitialized();
              let r = this.get(e),
                i = az(t);
              return "u" > typeof r[i];
            }),
            uK(this, "ack", async (e, t) => {
              this.isInitialized();
              let r = this.messagesWithoutClientAck.get(e);
              if (typeof r > "u") return;
              let i = az(t);
              delete r[i],
                0 === Object.keys(r).length
                  ? this.messagesWithoutClientAck.delete(e)
                  : this.messagesWithoutClientAck.set(e, r),
                await this.persist();
            }),
            uK(this, "del", async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                this.messagesWithoutClientAck.delete(e),
                await this.persist();
            }),
            (this.logger = ln(e, this.name)),
            (this.core = t);
        }
        get context() {
          return ls(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get storageKeyWithoutClientAck() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name +
            "_withoutClientAck"
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, sR(e));
        }
        async setRelayerMessagesWithoutClientAck(e) {
          await this.core.storage.setItem(
            this.storageKeyWithoutClientAck,
            sR(e)
          );
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? sj(e) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let e = await this.core.storage.getItem(
            this.storageKeyWithoutClientAck
          );
          return "u" > typeof e ? sj(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(
              this.messagesWithoutClientAck
            );
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var uG = Object.defineProperty,
        uY = Object.defineProperties,
        uJ = Object.getOwnPropertyDescriptors,
        uZ = Object.getOwnPropertySymbols,
        uQ = Object.prototype.hasOwnProperty,
        uX = Object.prototype.propertyIsEnumerable,
        u0 = (e, t, r) =>
          t in e
            ? uG(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        u1 = (e, t) => {
          for (var r in t || (t = {})) uQ.call(t, r) && u0(e, r, t[r]);
          if (uZ) for (var r of uZ(t)) uX.call(t, r) && u0(e, r, t[r]);
          return e;
        },
        u2 = (e, t) => uY(e, uJ(t)),
        u8 = (e, t, r) => u0(e, "symbol" != typeof t ? t + "" : t, r);
      class u3 extends lg {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            u8(this, "events", new b.EventEmitter()),
            u8(this, "name", "publisher"),
            u8(this, "queue", new Map()),
            u8(this, "publishTimeout", (0, T.toMiliseconds)(T.ONE_MINUTE)),
            u8(
              this,
              "initialPublishTimeout",
              (0, T.toMiliseconds)(15 * T.ONE_SECOND)
            ),
            u8(this, "needsTransportRestart", !1),
            u8(this, "publish", async (e, t, r) => {
              var i;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: r },
                });
              let s = r?.ttl || he,
                n = aJ(r),
                o = r?.prompt || !1,
                a = r?.tag || 0,
                c = r?.id || lU().toString(),
                l = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: s,
                    relay: n,
                    prompt: o,
                    tag: a,
                    id: c,
                    attestation: r?.attestation,
                    tvf: r?.tvf,
                  },
                },
                h = `Failed to publish payload, please try again. id:${c} tag:${a}`;
              try {
                let i = new Promise(async (i) => {
                  let n = ({ id: e }) => {
                    l.opts.id === e &&
                      (this.removeRequestFromQueue(e),
                      this.relayer.events.removeListener(hr.publish, n),
                      i(l));
                  };
                  this.relayer.events.on(hr.publish, n);
                  let h = sU(
                    new Promise((i, n) => {
                      this.rpcPublish({
                        topic: e,
                        message: t,
                        ttl: s,
                        prompt: o,
                        tag: a,
                        id: c,
                        attestation: r?.attestation,
                        tvf: r?.tvf,
                      })
                        .then(i)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), n(e);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${c} tag:${a}`
                  );
                  try {
                    await h, this.events.removeListener(hr.publish, n);
                  } catch (e) {
                    this.queue.set(c, u2(u1({}, l), { attempt: 1 })),
                      this.logger.warn(e, e?.message);
                  }
                });
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { id: c, topic: e, message: t, opts: r },
                }),
                  await sU(i, this.publishTimeout, h);
              } catch (e) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  null != (i = r?.internal) && i.throwOnFailedPublish)
                )
                  throw e;
              } finally {
                this.queue.delete(c);
              }
            }),
            u8(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            u8(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            u8(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            u8(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = ln(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return ls(this.logger);
        }
        async rpcPublish(e) {
          var t, r, i, s;
          let {
              topic: n,
              message: o,
              ttl: a = he,
              prompt: c,
              tag: l,
              id: h,
              attestation: u,
              tvf: d,
            } = e,
            p = {
              method: aZ(aJ().protocol).publish,
              params: u1(
                {
                  topic: n,
                  message: o,
                  ttl: a,
                  prompt: c,
                  tag: l,
                  attestation: u,
                },
                d
              ),
              id: h,
            };
          ct(null == (t = p.params) ? void 0 : t.prompt) &&
            (null == (r = p.params) || delete r.prompt),
            ct(null == (i = p.params) ? void 0 : i.tag) &&
              (null == (s = p.params) || delete s.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: p,
            });
          let f = await this.relayer.request(p);
          return (
            this.relayer.events.emit(hr.publish, e),
            this.logger.debug("Successfully Published Payload"),
            f
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e, t) => {
            let r = e.attempt + 1;
            this.queue.set(t, u2(u1({}, e), { attempt: r }));
            let { topic: i, message: s, opts: n, attestation: o } = e;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${r}`
            ),
              await this.rpcPublish(
                u2(u1({}, e), {
                  topic: i,
                  message: s,
                  ttl: n.ttl,
                  prompt: n.prompt,
                  tag: n.tag,
                  id: n.id,
                  attestation: o,
                  tvf: n.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(cv.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(hr.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(hr.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      var u5 = Object.defineProperty,
        u6 = (e, t, r) =>
          t in e
            ? u5(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        u4 = (e, t, r) => u6(e, "symbol" != typeof t ? t + "" : t, r);
      class u9 {
        constructor() {
          u4(this, "map", new Map()),
            u4(this, "set", (e, t) => {
              let r = this.get(e);
              this.exists(e, t) || this.map.set(e, [...r, t]);
            }),
            u4(this, "get", (e) => this.map.get(e) || []),
            u4(this, "exists", (e, t) => this.get(e).includes(t)),
            u4(this, "delete", (e, t) => {
              if (typeof t > "u") {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let r = this.get(e);
              if (!this.exists(e, t)) return;
              let i = r.filter((e) => e !== t);
              if (!i.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, i);
            }),
            u4(this, "clear", () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var u7 = Object.defineProperty,
        de = Object.defineProperties,
        dt = Object.getOwnPropertyDescriptors,
        dr = Object.getOwnPropertySymbols,
        di = Object.prototype.hasOwnProperty,
        ds = Object.prototype.propertyIsEnumerable,
        dn = (e, t, r) =>
          t in e
            ? u7(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        da = (e, t) => {
          for (var r in t || (t = {})) di.call(t, r) && dn(e, r, t[r]);
          if (dr) for (var r of dr(t)) ds.call(t, r) && dn(e, r, t[r]);
          return e;
        },
        dc = (e, t) => de(e, dt(t)),
        dl = (e, t, r) => dn(e, "symbol" != typeof t ? t + "" : t, r);
      class dh extends lb {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            dl(this, "subscriptions", new Map()),
            dl(this, "topicMap", new u9()),
            dl(this, "events", new b.EventEmitter()),
            dl(this, "name", "subscription"),
            dl(this, "version", "0.3"),
            dl(this, "pending", new Map()),
            dl(this, "cached", []),
            dl(this, "initialized", !1),
            dl(this, "storagePrefix", l5),
            dl(this, "subscribeTimeout", (0, T.toMiliseconds)(T.ONE_MINUTE)),
            dl(
              this,
              "initialSubscribeTimeout",
              (0, T.toMiliseconds)(15 * T.ONE_SECOND)
            ),
            dl(this, "clientId"),
            dl(this, "batchSubscribeTopicsLimit", 500),
            dl(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            dl(this, "subscribe", async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                let r = aJ(t),
                  i = { topic: e, relay: r, transportType: t?.transportType };
                this.pending.set(e, i);
                let s = await this.rpcSubscribe(e, r, t);
                return (
                  "string" == typeof s &&
                    (this.onSubscribe(s, i),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: e, opts: t },
                    })),
                  s
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            dl(this, "unsubscribe", async (e, t) => {
              this.isInitialized(),
                "u" > typeof t?.id
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            dl(
              this,
              "isSubscribed",
              (e) =>
                new Promise((t) => {
                  t(this.topicMap.topics.includes(e));
                })
            ),
            dl(
              this,
              "isKnownTopic",
              (e) =>
                new Promise((t) => {
                  t(
                    this.topicMap.topics.includes(e) ||
                      this.pending.has(e) ||
                      this.cached.some((t) => t.topic === e)
                  );
                })
            ),
            dl(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            dl(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            dl(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            dl(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            dl(this, "start", async () => {
              await this.onConnect();
            }),
            dl(this, "stop", async () => {
              await this.onDisconnect();
            }),
            dl(this, "restart", async () => {
              await this.restore(), await this.onRestart();
            }),
            dl(this, "checkPending", async () => {
              if (
                0 === this.pending.size &&
                (!this.initialized || !this.relayer.connected)
              )
                return;
              let e = [];
              this.pending.forEach((t) => {
                e.push(t);
              }),
                await this.batchSubscribe(e);
            }),
            dl(this, "registerEventListeners", () => {
              this.relayer.core.heartbeat.on(cv.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(hc.created, async (e) => {
                  let t = hc.created;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                }),
                this.events.on(hc.deleted, async (e) => {
                  let t = hc.deleted;
                  this.logger.info(`Emitting ${t}`),
                    this.logger.debug({ type: "event", event: t, data: e }),
                    await this.persist();
                });
            }),
            (this.relayer = e),
            (this.logger = ln(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return ls(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        get hasAnyTopics() {
          return (
            this.topicMap.topics.length > 0 ||
            this.pending.size > 0 ||
            this.cached.length > 0 ||
            this.subscriptions.size > 0
          );
        }
        hasSubscription(e, t) {
          let r = !1;
          try {
            r = this.getSubscription(e).topic === t;
          } catch {}
          return r;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          let r = this.topicMap.get(e);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(e, r, t))
          );
        }
        async unsubscribeById(e, t, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: r },
            });
          try {
            let i = aJ(r);
            await this.restartToComplete({ topic: e, id: t, relay: i }),
              await this.rpcUnsubscribe(e, t, i);
            let s = a9("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, s),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: r },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, t, r) {
          var i;
          (r && r?.transportType !== hn.relay) ||
            (await this.restartToComplete({ topic: e, id: e, relay: t }));
          let s = { method: aZ(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: s,
            });
          let n = null == (i = r?.internal) ? void 0 : i.throwOnFailedPublish;
          try {
            let t = await this.getSubscriptionId(e);
            if (r?.transportType === hn.link_mode)
              return (
                setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(s).catch((e) => this.logger.warn(e));
                }, (0, T.toMiliseconds)(T.ONE_SECOND)),
                t
              );
            let i = new Promise(async (t) => {
                let r = (i) => {
                  i.topic === e &&
                    (this.events.removeListener(hc.created, r), t(i.id));
                };
                this.events.on(hc.created, r);
                try {
                  let i = await sU(
                    new Promise((e, t) => {
                      this.relayer
                        .request(s)
                        .catch((e) => {
                          this.logger.warn(e, e?.message), t(e);
                        })
                        .then(e);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${e} failed, please try again`
                  );
                  this.events.removeListener(hc.created, r), t(i);
                } catch {}
              }),
              o = await sU(
                i,
                this.subscribeTimeout,
                `Subscribing to ${e} failed, please try again`
              );
            if (!o && n)
              throw Error(`Subscribing to ${e} failed, please try again`);
            return o ? t : null;
          } catch (e) {
            if (
              (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(hr.connection_stalled),
              n)
            )
              throw e;
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let t = e[0].relay,
            r = {
              method: aZ(t.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            await await sU(
              new Promise((e) => {
                this.relayer
                  .request(r)
                  .catch((e) => this.logger.warn(e))
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchSubscribe failed, please try again"
            );
          } catch {
            this.relayer.events.emit(hr.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let t;
          if (!e.length) return;
          let r = e[0].relay,
            i = {
              method: aZ(r.protocol).batchFetchMessages,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            });
          try {
            t = await await sU(
              new Promise((e, t) => {
                this.relayer
                  .request(i)
                  .catch((e) => {
                    this.logger.warn(e), t(e);
                  })
                  .then(e);
              }),
              this.subscribeTimeout,
              "rpcBatchFetchMessages failed, please try again"
            );
          } catch {
            this.relayer.events.emit(hr.connection_stalled);
          }
          return t;
        }
        rpcUnsubscribe(e, t, r) {
          let i = {
            method: aZ(r.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i,
            }),
            this.relayer.request(i)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, dc(da({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, da({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, r) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, r),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t);
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, da({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(hc.created, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let t = this.subscriptions.get(e);
          if (!t) {
            let { message: t } = a4("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          let r = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(r.topic, e),
            this.events.emit(hc.deleted, dc(da({}, r), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(hc.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let e = [...this.cached],
              t = Math.ceil(
                this.cached.length / this.batchSubscribeTopicsLimit
              );
            for (let r = 0; r < t; r++) {
              let t = e.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(hc.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = a4("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          e.length &&
            (await this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(
              await Promise.all(
                e.map(async (e) =>
                  dc(da({}, e), { id: await this.getSubscriptionId(e.topic) })
                )
              )
            ));
        }
        async batchFetchMessages(e) {
          var t;
          if (!e.length) return;
          this.logger.trace(
            `Fetching batch messages for ${e.length} subscriptions`
          );
          let r = await this.rpcBatchFetchMessages(e);
          r &&
            r.messages &&
            (await ((t = (0, T.toMiliseconds)(T.ONE_SECOND)),
            new Promise((e) => setTimeout(e, t))),
            await this.relayer.handleBatchMessageEvents(r.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete(e) {
          this.relayer.connected ||
            this.relayer.connecting ||
            (this.cached.push(e), await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId ||
              (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(e) {
          return az(e + (await this.getClientId()));
        }
      }
      var du = Object.defineProperty,
        dd = Object.getOwnPropertySymbols,
        dp = Object.prototype.hasOwnProperty,
        df = Object.prototype.propertyIsEnumerable,
        dg = (e, t, r) =>
          t in e
            ? du(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dy = (e, t) => {
          for (var r in t || (t = {})) dp.call(t, r) && dg(e, r, t[r]);
          if (dd) for (var r of dd(t)) df.call(t, r) && dg(e, r, t[r]);
          return e;
        },
        dm = (e, t, r) => dg(e, "symbol" != typeof t ? t + "" : t, r);
      class db extends ly {
        constructor(e) {
          super(e),
            dm(this, "protocol", "wc"),
            dm(this, "version", 2),
            dm(this, "core"),
            dm(this, "logger"),
            dm(this, "events", new b.EventEmitter()),
            dm(this, "provider"),
            dm(this, "messages"),
            dm(this, "subscriber"),
            dm(this, "publisher"),
            dm(this, "name", "relayer"),
            dm(this, "transportExplicitlyClosed", !1),
            dm(this, "initialized", !1),
            dm(this, "connectionAttemptInProgress", !1),
            dm(this, "relayUrl"),
            dm(this, "projectId"),
            dm(this, "packageName"),
            dm(this, "bundleId"),
            dm(this, "hasExperiencedNetworkDisruption", !1),
            dm(this, "pingTimeout"),
            dm(
              this,
              "heartBeatTimeout",
              (0, T.toMiliseconds)(T.THIRTY_SECONDS + T.FIVE_SECONDS)
            ),
            dm(this, "reconnectTimeout"),
            dm(this, "connectPromise"),
            dm(this, "reconnectInProgress", !1),
            dm(this, "requestsInFlight", []),
            dm(this, "connectTimeout", (0, T.toMiliseconds)(15 * T.ONE_SECOND)),
            dm(this, "request", async (e) => {
              var t, r;
              this.logger.debug("Publishing Request Payload");
              let i = e.id || lU().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  {
                    id: i,
                    method: e.method,
                    topic: null == (t = e.params) ? void 0 : t.topic,
                  },
                  "relayer.request - publishing..."
                );
                let s = `${i}:${
                  (null == (r = e.params) ? void 0 : r.tag) || ""
                }`;
                this.requestsInFlight.push(s);
                let n = await this.provider.request(e);
                return (
                  (this.requestsInFlight = this.requestsInFlight.filter(
                    (e) => e !== s
                  )),
                  n
                );
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${i}`), e);
              }
            }),
            dm(this, "resetPingTimeout", () => {
              sS() &&
                (clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var e, t, r, i;
                  try {
                    this.logger.debug(
                      {},
                      "pingTimeout: Connection stalled, terminating..."
                    ),
                      null ==
                        (i =
                          null ==
                          (r =
                            null ==
                            (t =
                              null == (e = this.provider)
                                ? void 0
                                : e.connection)
                              ? void 0
                              : t.socket)
                            ? void 0
                            : r.terminate) || i.call(r);
                  } catch (e) {
                    this.logger.warn(e, e?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            dm(this, "onPayloadHandler", (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            dm(this, "onConnectHandler", () => {
              this.logger.warn({}, "Relayer connected \uD83D\uDEDC"),
                this.startPingTimeout(),
                this.events.emit(hr.connect);
            }),
            dm(this, "onDisconnectHandler", () => {
              this.logger.warn({}, "Relayer disconnected \uD83D\uDED1"),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            dm(this, "onProviderErrorHandler", (e) => {
              this.logger.fatal(`Fatal socket error: ${e.message}`),
                this.events.emit(hr.error, e),
                this.logger.fatal(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            dm(this, "registerProviderListeners", () => {
              this.provider.on(hi.payload, this.onPayloadHandler),
                this.provider.on(hi.connect, this.onConnectHandler),
                this.provider.on(hi.disconnect, this.onDisconnectHandler),
                this.provider.on(hi.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? ln(e.logger, this.name)
                : cJ()(li({ level: e.logger || "error" }))),
            (this.messages = new uW(this.logger, e.core)),
            (this.subscriber = new dh(this, this.logger)),
            (this.publisher = new u3(this, this.logger)),
            (this.relayUrl = e?.relayUrl || ht),
            (this.projectId = e.projectId),
            sP() &&
            "u" > typeof r.g &&
            "u" > typeof (null == r.g ? void 0 : r.g.Platform) &&
            (null == r.g ? void 0 : r.g.Platform.OS) === "android"
              ? (this.packageName = sA())
              : sP() &&
                "u" > typeof r.g &&
                "u" > typeof (null == r.g ? void 0 : r.g.Platform) &&
                (null == r.g ? void 0 : r.g.Platform.OS) === "ios" &&
                (this.bundleId = sA()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.hasAnyTopics)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        get context() {
          return ls(this.logger);
        }
        get connected() {
          var e, t, r;
          return (
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : r.readyState) === 1
          );
        }
        get connecting() {
          var e, t, r;
          return (
            (null ==
            (r =
              null == (t = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : t.socket)
              ? void 0
              : r.readyState) === 0 || void 0 !== this.connectPromise
          );
        }
        async publish(e, t, r) {
          this.isInitialized(),
            await this.publisher.publish(e, t, r),
            await this.recordMessageEvent(
              {
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: hn.relay,
              },
              ho.outbound
            );
        }
        async subscribe(e, t) {
          var r, i, s;
          this.isInitialized(),
            (null != t && t.transportType && t?.transportType !== "relay") ||
              (await this.toEstablishConnection());
          let n =
              typeof (null == (r = t?.internal)
                ? void 0
                : r.throwOnFailedPublish) > "u" ||
              (null == (i = t?.internal) ? void 0 : i.throwOnFailedPublish),
            o =
              (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) ||
              "",
            a,
            c = (t) => {
              t.topic === e && (this.subscriber.off(hc.created, c), a());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (a = e), this.subscriber.on(hc.created, c);
              }),
              new Promise(async (r, i) => {
                (o =
                  (await this.subscriber
                    .subscribe(
                      e,
                      dy({ internal: { throwOnFailedPublish: n } }, t)
                    )
                    .catch((e) => {
                      n && i(e);
                    })) || o),
                  r();
              }),
            ]),
            o
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportDisconnect() {
          this.provider.disconnect &&
          (this.hasExperiencedNetworkDisruption || this.connected)
            ? await sU(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(e) {
          if (!this.subscriber.hasAnyTopics) {
            this.logger.warn(
              "Starting WS connection skipped because the client has no topics to work with."
            );
            return;
          }
          if (
            (this.connectPromise
              ? (this.logger.debug(
                  {},
                  "Waiting for existing connection attempt to resolve..."
                ),
                await this.connectPromise,
                this.logger.debug({}, "Existing connection attempt resolved"))
              : ((this.connectPromise = new Promise(async (t, r) => {
                  await this.connect(e)
                    .then(t)
                    .catch(r)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })),
                await this.connectPromise),
            !this.connected)
          )
            throw Error(
              `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
            );
        }
        async restartTransport(e) {
          this.logger.debug({}, "Restarting transport..."),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = e || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await cp()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return;
          }
          let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
          for (let e of (this.logger.debug(
            `Batch of ${t.length} message events sorted`
          ),
          t))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(
                e,
                "Error while processing batch message event: " + e?.message
              );
            }
          this.logger.trace(`Batch of ${t.length} message events processed`);
        }
        async onLinkMessageEvent(e, t) {
          let { topic: r } = e;
          if (!t.sessionExists) {
            let e = sq(T.FIVE_MINUTES);
            await this.core.pairing.pairings.set(r, {
              topic: r,
              expiry: e,
              relay: { protocol: "irn" },
              active: !1,
            });
          }
          this.events.emit(hr.message, e),
            await this.recordMessageEvent(e, ho.inbound);
        }
        async connect(e) {
          await this.confirmOnlineStateOrThrow(),
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let t = 1;
          for (; t < 6; ) {
            try {
              if (this.transportExplicitlyClosed) break;
              this.logger.debug(
                {},
                `Connecting to ${this.relayUrl}, attempt: ${t}...`
              ),
                await this.createProvider(),
                await new Promise(async (e, t) => {
                  let r = () => {
                    t(
                      Error("Connection interrupted while trying to subscribe")
                    );
                  };
                  this.provider.once(hi.disconnect, r),
                    await sU(
                      new Promise((e, t) => {
                        this.provider.connect().then(e).catch(t);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((e) => {
                        t(e);
                      })
                      .finally(() => {
                        this.provider.off(hi.disconnect, r),
                          clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (e, t) => {
                      let r = () => {
                        t(
                          Error(
                            "Connection interrupted while trying to subscribe"
                          )
                        );
                      };
                      this.provider.once(hi.disconnect, r),
                        await this.subscriber
                          .start()
                          .then(e)
                          .catch(t)
                          .finally(() => {
                            this.provider.off(hi.disconnect, r);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    e();
                });
            } catch (e) {
              await this.subscriber.stop(),
                this.logger.warn({}, e.message),
                (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug(
                {},
                `Connected to ${this.relayUrl} successfully on attempt: ${t}`
              );
              break;
            }
            await new Promise((e) =>
              setTimeout(e, (0, T.toMiliseconds)(1 * t))
            ),
              t++;
          }
        }
        startPingTimeout() {
          var e, t, r, i, s;
          if (sS())
            try {
              null !=
                (t = null == (e = this.provider) ? void 0 : e.connection) &&
                t.socket &&
                (null ==
                  (s =
                    null ==
                    (i = null == (r = this.provider) ? void 0 : r.connection)
                      ? void 0
                      : i.socket) ||
                  s.on("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e, e?.message);
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new lZ(
            new l1(
              (function ({
                protocol: e,
                version: t,
                relayUrl: r,
                sdkVersion: i,
                auth: s,
                projectId: n,
                useOnCloseEvent: o,
                bundleId: a,
                packageName: c,
              }) {
                let l = r.split("?"),
                  h = sT(e, t, i),
                  u = (function (e, t) {
                    let r = new URLSearchParams(e);
                    for (let e of Object.keys(t).sort())
                      if (t.hasOwnProperty(e)) {
                        let i = t[e];
                        void 0 !== i && r.set(e, i);
                      }
                    return r.toString();
                  })(l[1] || "", {
                    auth: s,
                    ua: h,
                    projectId: n,
                    useOnCloseEvent: o || void 0,
                    packageName: c || void 0,
                    bundleId: a || void 0,
                  });
                return l[0] + "?" + u;
              })({
                sdkVersion: hs,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e, t) {
          let { topic: r, message: i } = e;
          await this.messages.set(r, i, t);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: t, message: r } = e;
          if (!r || 0 === r.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${r}`), !0;
          if (!(await this.subscriber.isKnownTopic(t)))
            return (
              this.logger.warn(`Ignoring message for unknown topic ${t}`), !0
            );
          let i = this.messages.has(t, r);
          return i && this.logger.warn(`Ignoring duplicate message: ${r}`), i;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            lW(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let t = e.params,
              { topic: r, message: i, publishedAt: s, attestation: n } = t.data,
              o = {
                topic: r,
                message: i,
                publishedAt: s,
                transportType: hn.relay,
                attestation: n,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(dy({ type: "event", event: t.id }, o)),
              this.events.emit(t.id, o),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(o);
          } else lG(e) && this.events.emit(hr.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (await this.recordMessageEvent(e, ho.inbound),
            this.events.emit(hr.message, e));
        }
        async acknowledgePayload(e) {
          let t = lB(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(hi.payload, this.onPayloadHandler),
            this.provider.off(hi.connect, this.onConnectHandler),
            this.provider.off(hi.disconnect, this.onDisconnectHandler),
            this.provider.off(hi.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await cp();
          !(function (e) {
            switch (sx()) {
              case sD.browser:
                !sP() &&
                  sO() &&
                  (window.addEventListener("online", () => e(!0)),
                  window.addEventListener("offline", () => e(!1)));
                break;
              case sD.reactNative:
                sP() &&
                  "u" > typeof r.g &&
                  null != r.g &&
                  r.g.NetInfo &&
                  r.g?.NetInfo.addEventListener((t) => e(t?.isConnected));
              case sD.node:
            }
          })(async (t) => {
            e !== t &&
              ((e = t),
              t
                ? await this.transportOpen().catch((e) =>
                    this.logger.error(e, e?.message)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          clearTimeout(this.pingTimeout),
            this.events.emit(hr.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.reconnectInProgress &&
              ((this.reconnectInProgress = !0),
              await this.subscriber.stop(),
              this.subscriber.hasAnyTopics &&
                (this.transportExplicitlyClosed ||
                  (this.reconnectTimeout = setTimeout(async () => {
                    await this.transportOpen().catch((e) =>
                      this.logger.error(e, e?.message)
                    ),
                      (this.reconnectTimeout = void 0),
                      (this.reconnectInProgress = !1);
                  }, (0, T.toMiliseconds)(0.1)))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(),
            this.connected || (await this.connect());
        }
      }
      function dw() {}
      function dv(e) {
        if (!e || "object" != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          "[object Object]" === Object.prototype.toString.call(e)
        );
      }
      function dE(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function d_(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let dI = "[object Arguments]",
        dD = "[object Object]";
      var dS = Object.defineProperty,
        dP = Object.getOwnPropertySymbols,
        dO = Object.prototype.hasOwnProperty,
        dx = Object.prototype.propertyIsEnumerable,
        dA = (e, t, r) =>
          t in e
            ? dS(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dC = (e, t) => {
          for (var r in t || (t = {})) dO.call(t, r) && dA(e, r, t[r]);
          if (dP) for (var r of dP(t)) dx.call(t, r) && dA(e, r, t[r]);
          return e;
        },
        dT = (e, t, r) => dA(e, "symbol" != typeof t ? t + "" : t, r);
      class dN extends lm {
        constructor(e, t, r, i = l5, s) {
          super(e, t, r, i),
            (this.core = e),
            (this.logger = t),
            (this.name = r),
            dT(this, "map", new Map()),
            dT(this, "version", "0.3"),
            dT(this, "cached", []),
            dT(this, "initialized", !1),
            dT(this, "getKey"),
            dT(this, "storagePrefix", l5),
            dT(this, "recentlyDeleted", []),
            dT(this, "recentlyDeletedLimit", 200),
            dT(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  var t;
                  this.getKey && null !== e && !ct(e)
                    ? this.map.set(this.getKey(e), e)
                    : (null == (t = e?.proposer) ? void 0 : t.publicKey)
                    ? this.map.set(e.id, e)
                    : e?.topic && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            dT(this, "set", async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            dT(
              this,
              "get",
              (e) => (
                this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({ type: "method", method: "get", key: e }),
                this.getData(e)
              )
            ),
            dT(
              this,
              "getAll",
              (e) => (
                this.isInitialized(),
                e
                  ? this.values.filter((t) =>
                      Object.keys(e).every((r) =>
                        (function e(t, r, i, s, n, o, a) {
                          let c = a(t, r, i, s, n, o);
                          if (void 0 !== c) return c;
                          if (typeof t == typeof r)
                            switch (typeof t) {
                              case "bigint":
                              case "string":
                              case "boolean":
                              case "symbol":
                              case "undefined":
                              case "function":
                                return t === r;
                              case "number":
                                return t === r || Object.is(t, r);
                            }
                          return (function t(r, i, s, n) {
                            if (Object.is(r, i)) return !0;
                            let o = d_(r),
                              a = d_(i);
                            if (
                              (o === dI && (o = dD),
                              a === dI && (a = dD),
                              o !== a)
                            )
                              return !1;
                            switch (o) {
                              case "[object String]":
                                return r.toString() === i.toString();
                              case "[object Number]": {
                                let e = r.valueOf(),
                                  t = i.valueOf();
                                return (
                                  e === t ||
                                  (Number.isNaN(e) && Number.isNaN(t))
                                );
                              }
                              case "[object Boolean]":
                              case "[object Date]":
                              case "[object Symbol]":
                                return Object.is(r.valueOf(), i.valueOf());
                              case "[object RegExp]":
                                return (
                                  r.source === i.source && r.flags === i.flags
                                );
                              case "[object Function]":
                                return r === i;
                            }
                            s = s ?? new Map();
                            let c = s.get(r),
                              l = s.get(i);
                            if (null != c && null != l) return c === i;
                            s.set(r, i), s.set(i, r);
                            try {
                              switch (o) {
                                case "[object Map]":
                                  if (r.size !== i.size) return !1;
                                  for (let [t, o] of r.entries())
                                    if (
                                      !i.has(t) ||
                                      !e(o, i.get(t), t, r, i, s, n)
                                    )
                                      return !1;
                                  return !0;
                                case "[object Set]": {
                                  if (r.size !== i.size) return !1;
                                  let t = Array.from(r.values()),
                                    o = Array.from(i.values());
                                  for (let a = 0; a < t.length; a++) {
                                    let c = t[a],
                                      l = o.findIndex((t) =>
                                        e(c, t, void 0, r, i, s, n)
                                      );
                                    if (-1 === l) return !1;
                                    o.splice(l, 1);
                                  }
                                  return !0;
                                }
                                case "[object Array]":
                                case "[object Uint8Array]":
                                case "[object Uint8ClampedArray]":
                                case "[object Uint16Array]":
                                case "[object Uint32Array]":
                                case "[object BigUint64Array]":
                                case "[object Int8Array]":
                                case "[object Int16Array]":
                                case "[object Int32Array]":
                                case "[object BigInt64Array]":
                                case "[object Float32Array]":
                                case "[object Float64Array]":
                                  if (
                                    ("u" > typeof l2 &&
                                      l2.isBuffer(r) !== l2.isBuffer(i)) ||
                                    r.length !== i.length
                                  )
                                    return !1;
                                  for (let t = 0; t < r.length; t++)
                                    if (!e(r[t], i[t], t, r, i, s, n))
                                      return !1;
                                  return !0;
                                case "[object ArrayBuffer]":
                                  return (
                                    r.byteLength === i.byteLength &&
                                    t(
                                      new Uint8Array(r),
                                      new Uint8Array(i),
                                      s,
                                      n
                                    )
                                  );
                                case "[object DataView]":
                                  return (
                                    r.byteLength === i.byteLength &&
                                    r.byteOffset === i.byteOffset &&
                                    t(
                                      new Uint8Array(r),
                                      new Uint8Array(i),
                                      s,
                                      n
                                    )
                                  );
                                case "[object Error]":
                                  return (
                                    r.name === i.name && r.message === i.message
                                  );
                                case dD: {
                                  if (
                                    !(
                                      t(r.constructor, i.constructor, s, n) ||
                                      (dv(r) && dv(i))
                                    )
                                  )
                                    return !1;
                                  let o = [...Object.keys(r), ...dE(r)],
                                    a = [...Object.keys(i), ...dE(i)];
                                  if (o.length !== a.length) return !1;
                                  for (let t = 0; t < o.length; t++) {
                                    let a = o[t],
                                      c = r[a];
                                    if (!Object.hasOwn(i, a)) return !1;
                                    let l = i[a];
                                    if (!e(c, l, a, r, i, s, n)) return !1;
                                  }
                                  return !0;
                                }
                                default:
                                  return !1;
                              }
                            } finally {
                              s.delete(r), s.delete(i);
                            }
                          })(t, r, o, a);
                        })(t[r], e[r], void 0, void 0, void 0, void 0, dw)
                      )
                    )
                  : this.values
              )
            ),
            dT(this, "update", async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              let r = dC(dC({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }),
            dT(this, "delete", async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = ln(t, this.name)),
            (this.storagePrefix = i),
            (this.getKey = s);
        }
        get context() {
          return ls(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let t = this.map.get(e);
          if (!t) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: t } = a4(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(t), Error(t));
            }
            let { message: t } = a4("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.error(t), Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = a4("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var dR = Object.defineProperty,
        dj = (e, t, r) =>
          t in e
            ? dR(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dL = (e, t, r) => dj(e, "symbol" != typeof t ? t + "" : t, r);
      class dU {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            dL(this, "name", "pairing"),
            dL(this, "version", "0.3"),
            dL(this, "events", new (w())()),
            dL(this, "pairings"),
            dL(this, "initialized", !1),
            dL(this, "storagePrefix", l5),
            dL(this, "ignoredPayloadTypes", [1]),
            dL(this, "registeredMethods", []),
            dL(this, "init", async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            dL(this, "register", ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            dL(this, "create", async (e) => {
              this.isInitialized();
              let t = aM(),
                r = await this.core.crypto.setSymKey(t),
                i = sq(T.FIVE_MINUTES),
                s = { protocol: "irn" },
                n = {
                  topic: r,
                  expiry: i,
                  relay: s,
                  active: !1,
                  methods: e?.methods,
                },
                o = aX({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: r,
                  symKey: t,
                  relay: s,
                  expiryTimestamp: i,
                  methods: e?.methods,
                });
              return (
                this.events.emit(hh.create, n),
                this.core.expirer.set(r, i),
                await this.pairings.set(r, n),
                await this.core.relayer.subscribe(r, {
                  transportType: e?.transportType,
                }),
                { topic: r, uri: o }
              );
            }),
            dL(this, "pair", async (e) => {
              let t;
              this.isInitialized();
              let r = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [hy.pairing_started] },
              });
              this.isValidPair(e, r);
              let {
                topic: i,
                symKey: s,
                relay: n,
                expiryTimestamp: o,
                methods: a,
              } = aQ(e.uri);
              if (
                ((r.props.properties.topic = i),
                r.addTrace(hy.pairing_uri_validation_success),
                r.addTrace(hy.pairing_uri_not_expired),
                this.pairings.keys.includes(i))
              ) {
                if (
                  ((t = this.pairings.get(i)),
                  r.addTrace(hy.existing_pairing),
                  t.active)
                )
                  throw (
                    (r.setError(hm.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${i}. Please try again with a new connection URI.`
                    ))
                  );
                r.addTrace(hy.pairing_not_expired);
              }
              let c = o || sq(T.FIVE_MINUTES),
                l = { topic: i, relay: n, expiry: c, active: !1, methods: a };
              this.core.expirer.set(i, c),
                await this.pairings.set(i, l),
                r.addTrace(hy.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: i })),
                this.events.emit(hh.create, l),
                r.addTrace(hy.emit_inactive_pairing),
                this.core.crypto.keychain.has(i) ||
                  (await this.core.crypto.setSymKey(s, i)),
                r.addTrace(hy.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                r.setError(hm.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(i, { relay: n });
              } catch (e) {
                throw (r.setError(hm.subscribe_pairing_topic_failure), e);
              }
              return r.addTrace(hy.subscribe_pairing_topic_success), l;
            }),
            dL(this, "activate", async ({ topic: e }) => {
              this.isInitialized();
              let t = sq(T.FIVE_MINUTES);
              this.core.expirer.set(e, t),
                await this.pairings.update(e, { active: !0, expiry: t });
            }),
            dL(this, "ping", async (e) => {
              this.isInitialized(),
                await this.isValidPing(e),
                this.logger.warn(
                  "ping() is deprecated and will be removed in the next major release."
                );
              let { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                let e = await this.sendRequest(t, "wc_pairingPing", {}),
                  { done: r, resolve: i, reject: s } = sL();
                this.events.once(s$("pairing_ping", e), ({ error: e }) => {
                  e ? s(e) : i();
                }),
                  await r();
              }
            }),
            dL(this, "updateExpiry", async ({ topic: e, expiry: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: t });
            }),
            dL(this, "updateMetadata", async ({ topic: e, metadata: t }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: t });
            }),
            dL(
              this,
              "getPairings",
              () => (this.isInitialized(), this.pairings.values)
            ),
            dL(this, "disconnect", async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  a9("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            dL(this, "formatUriFromPairing", (e) => {
              this.isInitialized();
              let { topic: t, relay: r, expiry: i, methods: s } = e,
                n = this.core.crypto.keychain.get(t);
              return aX({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: n,
                relay: r,
                expiryTimestamp: i,
                methods: s,
              });
            }),
            dL(this, "sendRequest", async (e, t, r) => {
              let i = lk(t, r),
                s = await this.core.crypto.encode(e, i),
                n = hl[t].req;
              return (
                this.core.history.set(e, i),
                this.core.relayer.publish(e, s, n),
                i.id
              );
            }),
            dL(this, "sendResult", async (e, t, r) => {
              let i = lB(e, r),
                s = await this.core.crypto.encode(t, i),
                n = (await this.core.history.get(t, e)).request.method,
                o = hl[n].res;
              await this.core.relayer.publish(t, s, o),
                await this.core.history.resolve(i);
            }),
            dL(this, "sendError", async (e, t, r) => {
              let i = lq(e, r),
                s = await this.core.crypto.encode(t, i),
                n = (await this.core.history.get(t, e)).request.method,
                o = hl[n] ? hl[n].res : hl.unregistered_method.res;
              await this.core.relayer.publish(t, s, o),
                await this.core.history.resolve(i);
            }),
            dL(this, "deletePairing", async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, a9("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            dL(this, "cleanup", async () => {
              let e = this.pairings.getAll().filter((e) => sM(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            dL(this, "onRelayEventRequest", async (e) => {
              let { topic: t, payload: r } = e;
              switch (r.method) {
                case "wc_pairingPing":
                  return await this.onPairingPingRequest(t, r);
                case "wc_pairingDelete":
                  return await this.onPairingDeleteRequest(t, r);
                default:
                  return await this.onUnknownRpcMethodRequest(t, r);
              }
            }),
            dL(this, "onRelayEventResponse", async (e) => {
              let { topic: t, payload: r } = e,
                i = (await this.core.history.get(t, r.id)).request.method;
              return "wc_pairingPing" === i
                ? this.onPairingPingResponse(t, r)
                : this.onUnknownRpcMethodResponse(i);
            }),
            dL(this, "onPairingPingRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(r, e, !0),
                  this.events.emit(hh.ping, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            dL(this, "onPairingPingResponse", (e, t) => {
              let { id: r } = t;
              setTimeout(() => {
                lY(t)
                  ? this.events.emit(s$("pairing_ping", r), {})
                  : lJ(t) &&
                    this.events.emit(s$("pairing_ping", r), { error: t.error });
              }, 500);
            }),
            dL(this, "onPairingDeleteRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(hh.delete, { id: r, topic: e });
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            dL(this, "onUnknownRpcMethodRequest", async (e, t) => {
              let { id: r, method: i } = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                let t = a9("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (t) {
                await this.sendError(r, e, t), this.logger.error(t);
              }
            }),
            dL(this, "onUnknownRpcMethodResponse", (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(a9("WC_METHOD_UNSUPPORTED", e));
            }),
            dL(this, "isValidPair", (e, t) => {
              var r;
              if (!cl(e)) {
                let { message: r } = a4(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw (t.setError(hm.malformed_pairing_uri), Error(r));
              }
              if (
                !(function (e) {
                  function t(e) {
                    try {
                      return "u" > typeof new URL(e);
                    } catch {
                      return !1;
                    }
                  }
                  try {
                    if (cr(e, !1)) {
                      if (t(e)) return !0;
                      let r = sG(e);
                      return t(r);
                    }
                  } catch {}
                  return !1;
                })(e.uri)
              ) {
                let { message: r } = a4(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw (t.setError(hm.malformed_pairing_uri), Error(r));
              }
              let i = aQ(e?.uri);
              if (!(null != (r = i?.relay) && r.protocol)) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (t.setError(hm.malformed_pairing_uri), Error(e));
              }
              if (!(null != i && i.symKey)) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (t.setError(hm.malformed_pairing_uri), Error(e));
              }
              if (
                null != i &&
                i.expiryTimestamp &&
                (0, T.toMiliseconds)(i?.expiryTimestamp) < Date.now()
              ) {
                t.setError(hm.pairing_expired);
                let { message: e } = a4(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            dL(this, "isValidPing", async (e) => {
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            dL(this, "isValidDisconnect", async (e) => {
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            dL(this, "isValidPairingTopic", async (e) => {
              if (!cr(e, !1)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: t } = a4(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(t);
              }
              if (sM(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: t } = a4("EXPIRED", `pairing topic: ${e}`);
                throw Error(t);
              }
            }),
            (this.core = e),
            (this.logger = ln(t, this.name)),
            (this.pairings = new dN(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return ls(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(hr.message, async (e) => {
            let { topic: t, message: r, transportType: i } = e;
            if (
              this.pairings.keys.includes(t) &&
              i !== hn.link_mode &&
              !this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r)
              )
            )
              try {
                let e = await this.core.crypto.decode(t, r);
                lW(e)
                  ? (this.core.history.set(t, e),
                    await this.onRelayEventRequest({ topic: t, payload: e }))
                  : lG(e) &&
                    (await this.core.history.resolve(e),
                    await this.onRelayEventResponse({ topic: t, payload: e }),
                    this.core.history.delete(t, e.id)),
                  await this.core.relayer.messages.ack(t, r);
              } catch (e) {
                this.logger.error(e);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(hd.expired, async (e) => {
            let { topic: t } = sB(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(hh.expire, { topic: t }));
          });
        }
      }
      var dk = Object.defineProperty,
        dB = (e, t, r) =>
          t in e
            ? dk(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dq = (e, t, r) => dB(e, "symbol" != typeof t ? t + "" : t, r);
      class dM extends lp {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            dq(this, "records", new Map()),
            dq(this, "events", new b.EventEmitter()),
            dq(this, "name", "history"),
            dq(this, "version", "0.3"),
            dq(this, "cached", []),
            dq(this, "initialized", !1),
            dq(this, "storagePrefix", l5),
            dq(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            dq(this, "set", (e, t, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: r,
                }),
                this.records.has(t.id))
              )
                return;
              let i = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: r,
                expiry: sq(T.THIRTY_DAYS),
              };
              this.records.set(i.id, i),
                this.persist(),
                this.events.emit(hu.created, i);
            }),
            dq(this, "resolve", async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = lJ(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.persist(),
                this.events.emit(hu.updated, t));
            }),
            dq(
              this,
              "get",
              async (e, t) => (
                this.isInitialized(),
                this.logger.debug("Getting record"),
                this.logger.trace({
                  type: "method",
                  method: "get",
                  topic: e,
                  id: t,
                }),
                await this.getRecord(t)
              )
            ),
            dq(this, "delete", (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((r) => {
                  r.topic !== e ||
                    ("u" > typeof t && r.id !== t) ||
                    (this.records.delete(r.id),
                    this.events.emit(hu.deleted, r));
                }),
                this.persist();
            }),
            dq(
              this,
              "exists",
              async (e, t) => (
                this.isInitialized(),
                !!this.records.has(t) && (await this.getRecord(t)).topic === e
              )
            ),
            dq(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            dq(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            dq(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            dq(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = ln(t, this.name));
        }
        get context() {
          return ls(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((t) => {
              if ("u" > typeof t.response) return;
              let r = {
                topic: t.topic,
                request: lk(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(r);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let t = this.records.get(e);
          if (!t) {
            let { message: t } = a4("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(hu.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = a4("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(hu.created, (e) => {
            let t = hu.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: e });
          }),
            this.events.on(hu.updated, (e) => {
              let t = hu.updated;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.events.on(hu.deleted, (e) => {
              let t = hu.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
            this.core.heartbeat.on(cv.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((t) => {
              (0, T.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(hu.deleted, t, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var d$ = Object.defineProperty,
        dz = (e, t, r) =>
          t in e
            ? d$(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dF = (e, t, r) => dz(e, "symbol" != typeof t ? t + "" : t, r);
      class dH extends lw {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            dF(this, "expirations", new Map()),
            dF(this, "events", new b.EventEmitter()),
            dF(this, "name", "expirer"),
            dF(this, "version", "0.3"),
            dF(this, "cached", []),
            dF(this, "initialized", !1),
            dF(this, "storagePrefix", l5),
            dF(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            dF(this, "has", (e) => {
              try {
                let t = this.formatTarget(e);
                return "u" > typeof this.getExpiration(t);
              } catch {
                return !1;
              }
            }),
            dF(this, "set", (e, t) => {
              this.isInitialized();
              let r = this.formatTarget(e),
                i = { target: r, expiry: t };
              this.expirations.set(r, i),
                this.checkExpiry(r, i),
                this.events.emit(hd.created, { target: r, expiration: i });
            }),
            dF(this, "get", (e) => {
              this.isInitialized();
              let t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            dF(this, "del", (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let t = this.formatTarget(e),
                  r = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(hd.deleted, { target: t, expiration: r });
              }
            }),
            dF(this, "on", (e, t) => {
              this.events.on(e, t);
            }),
            dF(this, "once", (e, t) => {
              this.events.once(e, t);
            }),
            dF(this, "off", (e, t) => {
              this.events.off(e, t);
            }),
            dF(this, "removeListener", (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = ln(t, this.name));
        }
        get context() {
          return ls(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return sk("topic", e);
          if ("number" == typeof e) return sk("id", e);
          let { message: t } = a4("UNKNOWN_TYPE", `Target type: ${typeof e}`);
          throw Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(hd.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = a4("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let t = this.expirations.get(e);
          if (!t) {
            let { message: t } = a4("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw (this.logger.warn(t), Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          let { expiry: r } = t;
          (0, T.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(hd.expired, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(cv.pulse, () => this.checkExpirations()),
            this.events.on(hd.created, (e) => {
              let t = hd.created;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(hd.expired, (e) => {
              let t = hd.expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(hd.deleted, (e) => {
              let t = hd.deleted;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      }
      var dV = Object.defineProperty,
        dK = (e, t, r) =>
          t in e
            ? dV(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dW = (e, t, r) => dK(e, "symbol" != typeof t ? t + "" : t, r);
      class dG extends lv {
        constructor(e, t, r) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            (this.store = r),
            dW(this, "name", "verify-api"),
            dW(this, "abortController"),
            dW(this, "isDevEnv"),
            dW(this, "verifyUrlV3", hf),
            dW(this, "storagePrefix", l5),
            dW(this, "version", 2),
            dW(this, "publicKey"),
            dW(this, "fetchPromise"),
            dW(this, "init", async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, T.toMiliseconds)(
                    null == (e = this.publicKey) ? void 0 : e.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            dW(this, "register", async (e) => {
              if (!sO() || this.isDevEnv) return;
              let t = window.location.origin,
                { id: r, decryptedId: i } = e,
                s = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${t}&id=${r}&decryptedId=${i}`;
              try {
                let e = (0, N.getDocument)(),
                  t = this.startAbortTimer(5 * T.ONE_SECOND),
                  i = await new Promise((i, n) => {
                    let o = () => {
                      window.removeEventListener("message", c),
                        e.body.removeChild(a),
                        n("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", o);
                    let a = e.createElement("iframe");
                    (a.src = s),
                      (a.style.display = "none"),
                      a.addEventListener("error", o, {
                        signal: this.abortController.signal,
                      });
                    let c = (s) => {
                      if (s.data && "string" == typeof s.data)
                        try {
                          let n = JSON.parse(s.data);
                          if ("verify_attestation" === n.type) {
                            if (rK(n.attestation).payload.id !== r) return;
                            clearInterval(t),
                              e.body.removeChild(a),
                              this.abortController.signal.removeEventListener(
                                "abort",
                                o
                              ),
                              window.removeEventListener("message", c),
                              i(null === n.attestation ? "" : n.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(a),
                      window.addEventListener("message", c, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", i), i;
              } catch (e) {
                this.logger.warn(e);
              }
              return "";
            }),
            dW(this, "resolve", async (e) => {
              if (this.isDevEnv) return "";
              let { attestationId: t, hash: r, encryptedId: i } = e;
              if ("" === t) {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return;
              }
              if (t) {
                if (rK(t).payload.id !== i) return;
                let e = await this.isValidJwtAttestation(t);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn(
                      "resolve: jwt attestation: origin url not verified"
                    );
                    return;
                  }
                  return e;
                }
              }
              if (!r) return;
              let s = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(r, s);
            }),
            dW(this, "fetchAttestation", async (e, t) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${t}`);
              let r = this.startAbortTimer(5 * T.ONE_SECOND),
                i = await fetch(`${t}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(r), 200 === i.status ? await i.json() : void 0
              );
            }),
            dW(this, "getVerifyUrl", (e) => {
              let t = e || hp;
              return (
                hg.includes(t) ||
                  (this.logger.info(
                    `verify url: ${t}, not included in trusted list, assigning default: ${hp}`
                  ),
                  (t = hp)),
                t
              );
            }),
            dW(this, "fetchPublicKey", async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                let e = this.startAbortTimer(T.FIVE_SECONDS),
                  t = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await t.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            dW(this, "persistPublicKey", async (e) => {
              this.logger.debug("persisting public key to local storage", e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            dW(this, "removePublicKey", async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            dW(this, "isValidJwtAttestation", async (e) => {
              let t = await this.getPublicKey();
              try {
                if (t) return this.validateAttestation(e, t);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
              let r = await this.fetchAndPersistPublicKey();
              try {
                if (r) return this.validateAttestation(e, r);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
            }),
            dW(this, "getPublicKey", async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()
            ),
            dW(this, "fetchAndPersistPublicKey", async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let t = await this.fetchPublicKey();
                t && (await this.persistPublicKey(t), e(t));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            dW(this, "validateAttestation", (e, t) => {
              let r = (function (e, t) {
                  let [r, i, s] = e.split("."),
                    n = su.from(aV(s), "base64");
                  if (64 !== n.length) throw Error("Invalid signature length");
                  let o = n.slice(0, 32),
                    a = n.slice(32, 64),
                    c = `${r}.${i}`,
                    l = o_(c),
                    h = (function (e) {
                      let t = su.from(e.x, "base64"),
                        r = su.from(e.y, "base64");
                      return rJ([new Uint8Array([4]), t, r]);
                    })(t);
                  if (!aj.verify(rJ([o, a]), l, h))
                    throw Error("Invalid signature");
                  return rK(e).payload;
                })(e, t.publicKey),
                i = {
                  hasExpired: (0, T.toMiliseconds)(r.exp) < Date.now(),
                  payload: r,
                };
              if (i.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  Error("JWT attestation expired"))
                );
              return {
                origin: i.payload.origin,
                isScam: i.payload.isScam,
                isVerified: i.payload.isVerified,
              };
            }),
            (this.logger = ln(t, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = sW()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//verify:public:key"
          );
        }
        get context() {
          return ls(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, T.toMiliseconds)(e)
            )
          );
        }
      }
      var dY = Object.defineProperty,
        dJ = (e, t, r) =>
          t in e
            ? dY(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        dZ = (e, t, r) => dJ(e, "symbol" != typeof t ? t + "" : t, r);
      class dQ extends lE {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            dZ(this, "context", "echo"),
            dZ(this, "registerDeviceToken", async (e) => {
              let {
                  clientId: t,
                  token: r,
                  notificationType: i,
                  enableEncrypted: s = !1,
                } = e,
                n = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(n, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: t,
                  type: i,
                  token: r,
                  always_raw: s,
                }),
              });
            }),
            (this.logger = ln(t, this.context));
        }
      }
      var dX = Object.defineProperty,
        d0 = Object.getOwnPropertySymbols,
        d1 = Object.prototype.hasOwnProperty,
        d2 = Object.prototype.propertyIsEnumerable,
        d8 = (e, t, r) =>
          t in e
            ? dX(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        d3 = (e, t) => {
          for (var r in t || (t = {})) d1.call(t, r) && d8(e, r, t[r]);
          if (d0) for (var r of d0(t)) d2.call(t, r) && d8(e, r, t[r]);
          return e;
        },
        d5 = (e, t, r) => d8(e, "symbol" != typeof t ? t + "" : t, r);
      class d6 extends l_ {
        constructor(e, t, r = !0) {
          super(e, t, r),
            (this.core = e),
            (this.logger = t),
            d5(this, "context", "event-client"),
            d5(this, "storagePrefix", l5),
            d5(this, "storageVersion", 0.1),
            d5(this, "events", new Map()),
            d5(this, "shouldPersist", !1),
            d5(this, "init", async () => {
              if (!sW())
                try {
                  let e = {
                    eventId: sK(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: "INIT",
                      type: "",
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: sT(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          hs
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            d5(this, "createEvent", (e) => {
              let {
                  event: t = "ERROR",
                  type: r = "",
                  properties: { topic: i, trace: s },
                } = e,
                n = sK(),
                o = this.core.projectId || "",
                a = Date.now(),
                c = d3(
                  {
                    eventId: n,
                    timestamp: a,
                    props: {
                      event: t,
                      type: r,
                      properties: { topic: i, trace: s },
                    },
                    bundleId: o,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(n)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(n, c), (this.shouldPersist = !0)),
                c
              );
            }),
            d5(this, "getEvent", (e) => {
              let { eventId: t, topic: r } = e;
              if (t) return this.events.get(t);
              let i = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === r
              );
              if (i) return d3(d3({}, i), this.setMethods(i.eventId));
            }),
            d5(this, "deleteEvent", (e) => {
              let { eventId: t } = e;
              this.events.delete(t), (this.shouldPersist = !0);
            }),
            d5(this, "setEventListeners", () => {
              this.core.heartbeat.on(cv.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, T.fromMiliseconds)(Date.now()) -
                      (0, T.fromMiliseconds)(e.timestamp) >
                      86400 &&
                      (this.events.delete(e.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            d5(this, "setMethods", (e) => ({
              addTrace: (t) => this.addTrace(e, t),
              setError: (t) => this.setError(e, t),
            })),
            d5(this, "addTrace", (e, t) => {
              let r = this.events.get(e);
              r &&
                (r.props.properties.trace.push(t),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            d5(this, "setError", (e, t) => {
              let r = this.events.get(e);
              r &&
                ((r.props.type = t),
                (r.timestamp = Date.now()),
                this.events.set(e, r),
                (this.shouldPersist = !0));
            }),
            d5(this, "persist", async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            d5(this, "restore", async () => {
              try {
                let e =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(
                    e.eventId,
                    d3(d3({}, e), this.setMethods(e.eventId))
                  );
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            d5(this, "submit", async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [t, r] of this.events) r.props.type && e.push(r);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let t of e)
                      this.events.delete(t.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            d5(this, "sendEvent", async (e) => {
              let t = this.getAppDomain() ? "" : "&sp=desktop";
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${hs}${t}`,
                { method: "POST", body: JSON.stringify(e) }
              );
            }),
            d5(this, "getAppDomain", () => sC().url),
            (this.logger = ln(t, this.context)),
            (this.telemetryEnabled = r),
            r
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            "//" +
            this.context
          );
        }
      }
      var d4 = Object.defineProperty,
        d9 = Object.getOwnPropertySymbols,
        d7 = Object.prototype.hasOwnProperty,
        pe = Object.prototype.propertyIsEnumerable,
        pt = (e, t, r) =>
          t in e
            ? d4(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        pr = (e, t) => {
          for (var r in t || (t = {})) d7.call(t, r) && pt(e, r, t[r]);
          if (d9) for (var r of d9(t)) pe.call(t, r) && pt(e, r, t[r]);
          return e;
        },
        pi = (e, t, r) => pt(e, "symbol" != typeof t ? t + "" : t, r);
      class ps extends ll {
        constructor(e) {
          var t, r;
          super(e),
            pi(this, "protocol", "wc"),
            pi(this, "version", 2),
            pi(this, "name", l3),
            pi(this, "relayUrl"),
            pi(this, "projectId"),
            pi(this, "customStoragePrefix"),
            pi(this, "events", new b.EventEmitter()),
            pi(this, "logger"),
            pi(this, "heartbeat"),
            pi(this, "relayer"),
            pi(this, "crypto"),
            pi(this, "storage"),
            pi(this, "history"),
            pi(this, "expirer"),
            pi(this, "pairing"),
            pi(this, "verify"),
            pi(this, "echoClient"),
            pi(this, "linkModeSupportedApps"),
            pi(this, "eventClient"),
            pi(this, "initialized", !1),
            pi(this, "logChunkController"),
            pi(this, "on", (e, t) => this.events.on(e, t)),
            pi(this, "once", (e, t) => this.events.once(e, t)),
            pi(this, "off", (e, t) => this.events.off(e, t)),
            pi(this, "removeListener", (e, t) =>
              this.events.removeListener(e, t)
            ),
            pi(
              this,
              "dispatchEnvelope",
              ({ topic: e, message: t, sessionExists: r }) => {
                if (!e || !t) return;
                let i = {
                  topic: e,
                  message: t,
                  publishedAt: Date.now(),
                  transportType: hn.link_mode,
                };
                this.relayer.onLinkMessageEvent(i, { sessionExists: r });
              }
            );
          let i = this.getGlobalCore(e?.customStoragePrefix);
          if (i)
            try {
              return (
                (this.customStoragePrefix = i.customStoragePrefix),
                (this.logger = i.logger),
                (this.heartbeat = i.heartbeat),
                (this.crypto = i.crypto),
                (this.history = i.history),
                (this.expirer = i.expirer),
                (this.storage = i.storage),
                (this.relayer = i.relayer),
                (this.pairing = i.pairing),
                (this.verify = i.verify),
                (this.echoClient = i.echoClient),
                (this.linkModeSupportedApps = i.linkModeSupportedApps),
                (this.eventClient = i.eventClient),
                (this.initialized = i.initialized),
                (this.logChunkController = i.logChunkController),
                i
              );
            } catch (e) {
              console.warn("Failed to copy global core", e);
            }
          (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || ht),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let s = li({
              level:
                "string" == typeof e?.logger && e.logger ? e.logger : l6.logger,
              name: l3,
            }),
            { logger: n, chunkLoggerController: o } =
              "u" >
                typeof (r = {
                  opts: s,
                  maxSizeInBytes: e?.maxLogBlobSizeInBytes,
                  loggerOverride: e?.logger,
                }).loggerOverride && "string" != typeof r.loggerOverride
                ? { logger: r.loggerOverride, chunkLoggerController: null }
                : "u" > typeof window
                ? (function (e) {
                    var t, r;
                    let i = new c2(
                      null == (t = e.opts) ? void 0 : t.level,
                      e.maxSizeInBytes
                    );
                    return {
                      logger: cJ()(
                        lr(lt({}, e.opts), {
                          level: "trace",
                          browser: lr(
                            lt({}, null == (r = e.opts) ? void 0 : r.browser),
                            { write: (e) => i.write(e) }
                          ),
                        })
                      ),
                      chunkLoggerController: i,
                    };
                  })(r)
                : (function (e) {
                    var t;
                    let r = new c8(
                      null == (t = e.opts) ? void 0 : t.level,
                      e.maxSizeInBytes
                    );
                    return {
                      logger: cJ()(lr(lt({}, e.opts), { level: "trace" }), r),
                      chunkLoggerController: r,
                    };
                  })(r);
          (this.logChunkController = o),
            null != (t = this.logChunkController) &&
              t.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, t;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (t = this.logChunkController) ||
                    t.downloadLogsBlobInBrowser({
                      clientId: await this.crypto.getClientId(),
                    }));
              }),
            (this.logger = ln(n, this.name)),
            (this.heartbeat = new cE()),
            (this.crypto = new uU(this, this.logger, e?.keychain)),
            (this.history = new dM(this, this.logger)),
            (this.expirer = new dH(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new cG(pr(pr({}, l4), e?.storageOptions))),
            (this.relayer = new db({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new dU(this, this.logger)),
            (this.verify = new dG(this, this.logger, this.storage)),
            (this.echoClient = new dQ(this.projectId || "", this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new d6(this, this.logger, e?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(e) {
          let t = new ps(e);
          await t.initialize();
          let r = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t;
        }
        get context() {
          return ls(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(ha, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps =
                (await this.storage.getItem(ha)) || []),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
        getGlobalCore(e = "") {
          try {
            if (this.isGlobalCoreDisabled()) return;
            let t = `_walletConnectCore_${e}`,
              r = `${t}_count`;
            return (
              (globalThis[r] = (globalThis[r] || 0) + 1),
              globalThis[r] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[r]} times.`
                ),
              globalThis[t]
            );
          } catch (e) {
            console.warn("Failed to get global WalletConnect core", e);
            return;
          }
        }
        setGlobalCore(e) {
          var t;
          try {
            if (this.isGlobalCoreDisabled()) return;
            let r = `_walletConnectCore_${
              (null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ""
            }`;
            globalThis[r] = e;
          } catch (e) {
            console.warn("Failed to set global WalletConnect core", e);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return "u" > typeof l8 && "true" === l8.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      }
      let pn = "client",
        po = `wc@2:${pn}:`,
        pa = {
          name: pn,
          logger: "error",
          controller: !1,
          relayUrl: "wss://relay.walletconnect.org",
        },
        pc = "WALLETCONNECT_DEEPLINK_CHOICE",
        pl = "Proposal expired",
        ph = T.SEVEN_DAYS,
        pu = {
          wc_sessionPropose: {
            req: { ttl: T.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: T.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: T.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: T.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: T.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: T.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: T.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: T.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: T.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: T.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: T.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: T.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: T.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: T.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        pd = { min: T.FIVE_MINUTES, max: T.SEVEN_DAYS },
        pp = { idle: "IDLE", active: "ACTIVE" },
        pf = {
          eth_sendTransaction: { key: "" },
          eth_sendRawTransaction: { key: "" },
          wallet_sendCalls: { key: "" },
          solana_signTransaction: { key: "signature" },
          solana_signAllTransactions: { key: "transactions" },
          solana_signAndSendTransaction: { key: "signature" },
        },
        pg = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        py = "wc@1.5:auth:",
        pm = `${py}:PUB_KEY`;
      var pb = Object.defineProperty,
        pw = Object.defineProperties,
        pv = Object.getOwnPropertyDescriptors,
        pE = Object.getOwnPropertySymbols,
        p_ = Object.prototype.hasOwnProperty,
        pI = Object.prototype.propertyIsEnumerable,
        pD = (e, t, r) =>
          t in e
            ? pb(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        pS = (e, t) => {
          for (var r in t || (t = {})) p_.call(t, r) && pD(e, r, t[r]);
          if (pE) for (var r of pE(t)) pI.call(t, r) && pD(e, r, t[r]);
          return e;
        },
        pP = (e, t) => pw(e, pv(t)),
        pO = (e, t, r) => pD(e, "symbol" != typeof t ? t + "" : t, r);
      class px extends lO {
        constructor(e) {
          super(e),
            pO(this, "name", "engine"),
            pO(this, "events", new (w())()),
            pO(this, "initialized", !1),
            pO(this, "requestQueue", { state: pp.idle, queue: [] }),
            pO(this, "sessionRequestQueue", { state: pp.idle, queue: [] }),
            pO(this, "requestQueueDelay", T.ONE_SECOND),
            pO(this, "expectedPairingMethodMap", new Map()),
            pO(this, "recentlyDeletedMap", new Map()),
            pO(this, "recentlyDeletedLimit", 200),
            pO(this, "relayMessageCache", []),
            pO(this, "pendingSessions", new Map()),
            pO(this, "init", async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(pu) }),
                (this.initialized = !0),
                setTimeout(async () => {
                  await this.processPendingMessageEvents(),
                    (this.sessionRequestQueue.queue =
                      this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, T.toMiliseconds)(this.requestQueueDelay)));
            }),
            pO(this, "connect", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let t = pP(pS({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              let {
                  pairingTopic: r,
                  requiredNamespaces: i,
                  optionalNamespaces: s,
                  sessionProperties: n,
                  scopedProperties: o,
                  relays: a,
                } = t,
                c = r,
                l,
                h = !1;
              try {
                if (c) {
                  let e = this.client.core.pairing.pairings.get(c);
                  this.client.logger.warn(
                    "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                  ),
                    (h = e.active);
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${c}) failed`
                  ),
                  e)
                );
              }
              if (!c || !h) {
                let { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (c = e), (l = t);
              }
              if (!c) {
                let { message: e } = a4(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${c}`
                );
                throw Error(e);
              }
              let u = await this.client.core.crypto.generateKeyPair(),
                d = pu.wc_sessionPropose.req.ttl || T.FIVE_MINUTES,
                p = sq(d),
                f = pP(
                  pS(
                    pS(
                      {
                        requiredNamespaces: i,
                        optionalNamespaces: s,
                        relays: a ?? [{ protocol: "irn" }],
                        proposer: {
                          publicKey: u,
                          metadata: this.client.metadata,
                        },
                        expiryTimestamp: p,
                        pairingTopic: c,
                      },
                      n && { sessionProperties: n }
                    ),
                    o && { scopedProperties: o }
                  ),
                  { id: lL() }
                ),
                g = s$("session_connect", f.id),
                { reject: y, resolve: m, done: b } = sL(d, pl),
                w = ({ id: e }) => {
                  e === f.id &&
                    (this.client.events.off("proposal_expire", w),
                    this.pendingSessions.delete(f.id),
                    this.events.emit(g, { error: { message: pl, code: 0 } }));
                };
              return (
                this.client.events.on("proposal_expire", w),
                this.events.once(g, ({ error: e, session: t }) => {
                  this.client.events.off("proposal_expire", w),
                    e ? y(e) : t && m(t);
                }),
                await this.sendRequest({
                  topic: c,
                  method: "wc_sessionPropose",
                  params: f,
                  throwOnFailedPublish: !0,
                  clientRpcId: f.id,
                }),
                await this.setProposal(f.id, f),
                { uri: l, approval: b }
              );
            }),
            pO(this, "pair", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error("pair() failed"), e);
              }
            }),
            pO(this, "approve", async (e) => {
              var t, r, i;
              let s = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (t = e?.id) ? void 0 : t.toString(),
                  trace: [hb.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (s.setError(hw.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (t) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${e?.id}) failed`
                  ),
                  s.setError(hw.proposal_not_found),
                  t)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  s.setError(hw.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: n,
                  relayProtocol: o,
                  namespaces: a,
                  sessionProperties: c,
                  scopedProperties: l,
                  sessionConfig: h,
                } = e,
                u = this.client.proposal.get(n);
              this.client.core.eventClient.deleteEvent({ eventId: s.eventId });
              let {
                  pairingTopic: d,
                  proposer: p,
                  requiredNamespaces: f,
                  optionalNamespaces: g,
                } = u,
                y =
                  null == (r = this.client.core.eventClient)
                    ? void 0
                    : r.getEvent({ topic: d });
              y ||
                (y =
                  null == (i = this.client.core.eventClient)
                    ? void 0
                    : i.createEvent({
                        type: hb.session_approve_started,
                        properties: {
                          topic: d,
                          trace: [
                            hb.session_approve_started,
                            hb.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let m = await this.client.core.crypto.generateKeyPair(),
                b = p.publicKey,
                w = await this.client.core.crypto.generateSharedKey(m, b),
                v = pS(
                  pS(
                    pS(
                      {
                        relay: { protocol: o ?? "irn" },
                        namespaces: a,
                        controller: {
                          publicKey: m,
                          metadata: this.client.metadata,
                        },
                        expiry: sq(ph),
                      },
                      c && { sessionProperties: c }
                    ),
                    l && { scopedProperties: l }
                  ),
                  h && { sessionConfig: h }
                ),
                E = hn.relay;
              y.addTrace(hb.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(w, {
                  transportType: E,
                });
              } catch (e) {
                throw (y.setError(hw.subscribe_session_topic_failure), e);
              }
              y.addTrace(hb.subscribe_session_topic_success);
              let _ = pP(pS({}, v), {
                topic: w,
                requiredNamespaces: f,
                optionalNamespaces: g,
                pairingTopic: d,
                acknowledged: !1,
                self: v.controller,
                peer: { publicKey: p.publicKey, metadata: p.metadata },
                controller: m,
                transportType: hn.relay,
              });
              await this.client.session.set(w, _), y.addTrace(hb.store_session);
              try {
                y.addTrace(hb.publishing_session_settle),
                  await this.sendRequest({
                    topic: w,
                    method: "wc_sessionSettle",
                    params: v,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(hw.session_settle_publish_failure), e);
                  }),
                  y.addTrace(hb.session_settle_publish_success),
                  y.addTrace(hb.publishing_session_approve),
                  await this.sendResult({
                    id: n,
                    topic: d,
                    result: {
                      relay: { protocol: o ?? "irn" },
                      responderPublicKey: m,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (y?.setError(hw.session_approve_publish_failure), e);
                  }),
                  y.addTrace(hb.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(w, a9("USER_DISCONNECTED")),
                  await this.client.core.relayer.unsubscribe(w),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: y.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: d,
                  metadata: p.metadata,
                }),
                await this.client.proposal.delete(n, a9("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: d }),
                await this.setExpiry(w, sq(ph)),
                {
                  topic: w,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(w)),
                }
              );
            }),
            pO(this, "reject", async (e) => {
              let t;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  e)
                );
              }
              let { id: r, reason: i } = e;
              try {
                t = this.client.proposal.get(r).pairingTopic;
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${r}) failed`
                  ),
                  e)
                );
              }
              t &&
                (await this.sendError({
                  id: r,
                  topic: t,
                  error: i,
                  rpcOpts: pu.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(r, a9("USER_DISCONNECTED")));
            }),
            pO(this, "update", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  e)
                );
              }
              let { topic: t, namespaces: r } = e,
                { done: i, resolve: s, reject: n } = sL(),
                o = lL(),
                a = lU().toString(),
                c = this.client.session.get(t).namespaces;
              return (
                this.events.once(s$("session_update", o), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.client.session.update(t, { namespaces: r }),
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                  throwOnFailedPublish: !0,
                  clientRpcId: o,
                  relayRpcId: a,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(t, { namespaces: c }),
                    n(e);
                }),
                { acknowledged: i }
              );
            }),
            pO(this, "extend", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  e)
                );
              }
              let { topic: t } = e,
                r = lL(),
                { done: i, resolve: s, reject: n } = sL();
              return (
                this.events.once(s$("session_extend", r), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                await this.setExpiry(t, sq(ph)),
                this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: r,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  n(e);
                }),
                { acknowledged: i }
              );
            }),
            pO(this, "request", async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  e)
                );
              }
              let {
                  chainId: t,
                  request: r,
                  topic: i,
                  expiry: s = pu.wc_sessionRequest.req.ttl,
                } = e,
                n = this.client.session.get(i);
              n?.transportType === hn.relay &&
                (await this.confirmOnlineStateOrThrow());
              let o = lL(),
                a = lU().toString(),
                {
                  done: c,
                  resolve: l,
                  reject: h,
                } = sL(s, "Request expired. Please try again.");
              this.events.once(
                s$("session_request", o),
                ({ error: e, result: t }) => {
                  e ? h(e) : l(t);
                }
              );
              let u = "wc_sessionRequest",
                d = this.getAppLinkIfEnabled(n.peer.metadata, n.transportType);
              if (d)
                return (
                  await this.sendRequest({
                    clientRpcId: o,
                    relayRpcId: a,
                    topic: i,
                    method: u,
                    params: {
                      request: pP(pS({}, r), { expiryTimestamp: sq(s) }),
                      chainId: t,
                    },
                    expiry: s,
                    throwOnFailedPublish: !0,
                    appLink: d,
                  }).catch((e) => h(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: i,
                    request: r,
                    chainId: t,
                    id: o,
                  }),
                  await c()
                );
              let p = {
                  request: pP(pS({}, r), { expiryTimestamp: sq(s) }),
                  chainId: t,
                },
                f = this.shouldSetTVF(u, p);
              return await Promise.all([
                new Promise(async (e) => {
                  await this.sendRequest(
                    pS(
                      {
                        clientRpcId: o,
                        relayRpcId: a,
                        topic: i,
                        method: u,
                        params: p,
                        expiry: s,
                        throwOnFailedPublish: !0,
                      },
                      f && { tvf: this.getTVFParams(o, p) }
                    )
                  ).catch((e) => h(e)),
                    this.client.events.emit("session_request_sent", {
                      topic: i,
                      request: r,
                      chainId: t,
                      id: o,
                    }),
                    e();
                }),
                new Promise(async (e) => {
                  var t;
                  if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                    let e = await sH(this.client.core.storage, pc);
                    await sF({ id: o, topic: i, wcDeepLink: e });
                  }
                  e();
                }),
                c(),
              ]).then((e) => e[2]);
            }),
            pO(this, "respond", async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: t, response: r } = e,
                { id: i } = r,
                s = this.client.session.get(t);
              s.transportType === hn.relay &&
                (await this.confirmOnlineStateOrThrow());
              let n = this.getAppLinkIfEnabled(
                s.peer.metadata,
                s.transportType
              );
              lY(r)
                ? await this.sendResult({
                    id: i,
                    topic: t,
                    result: r.result,
                    throwOnFailedPublish: !0,
                    appLink: n,
                  })
                : lJ(r) &&
                  (await this.sendError({
                    id: i,
                    topic: t,
                    error: r.error,
                    appLink: n,
                  })),
                this.cleanupAfterResponse(e);
            }),
            pO(this, "ping", async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  e)
                );
              }
              let { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                let e = lL(),
                  r = lU().toString(),
                  { done: i, resolve: s, reject: n } = sL();
                this.events.once(s$("session_ping", e), ({ error: e }) => {
                  e ? n(e) : s();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: t,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: r,
                    }),
                    i(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (this.client.logger.warn(
                    "ping() on pairing topic is deprecated and will be removed in the next major release."
                  ),
                  await this.client.core.pairing.ping({ topic: t }));
            }),
            pO(this, "emit", async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: t, event: r, chainId: i } = e,
                s = lU().toString(),
                n = lL();
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: r, chainId: i },
                throwOnFailedPublish: !0,
                relayRpcId: s,
                clientRpcId: n,
              });
            }),
            pO(this, "disconnect", async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: t } = e;
              if (this.client.session.keys.includes(t))
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionDelete",
                  params: a9("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: t, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(t))
                await this.client.core.pairing.disconnect({ topic: t });
              else {
                let { message: e } = a4(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${t}`
                );
                throw Error(e);
              }
            }),
            pO(
              this,
              "find",
              (e) => (
                this.isInitialized(),
                this.client.session.getAll().filter((t) =>
                  (function (e, t) {
                    let { requiredNamespaces: r } = t,
                      i = Object.keys(e.namespaces),
                      s = Object.keys(r),
                      n = !0;
                    return (
                      !!sN(s, i) &&
                      (i.forEach((t) => {
                        let {
                            accounts: i,
                            methods: s,
                            events: o,
                          } = e.namespaces[t],
                          a = a1(i),
                          c = r[t];
                        (sN(sf(t, c), a) &&
                          sN(c.methods, s) &&
                          sN(c.events, o)) ||
                          (n = !1);
                      }),
                      n)
                    );
                  })(t, e)
                )
              )
            ),
            pO(this, "getPendingSessionRequests", () =>
              this.client.pendingRequest.getAll()
            ),
            pO(this, "authenticate", async (e, t) => {
              var r;
              let i;
              this.isInitialized(), this.isValidAuthenticate(e);
              let s =
                  t &&
                  this.client.core.linkModeSupportedApps.includes(t) &&
                  (null == (r = this.client.metadata.redirect)
                    ? void 0
                    : r.linkMode),
                n = s ? hn.link_mode : hn.relay;
              n === hn.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: o,
                  statement: a = "",
                  uri: c,
                  domain: l,
                  nonce: h,
                  type: u,
                  exp: d,
                  nbf: p,
                  methods: f = [],
                  expiry: g,
                } = e,
                y = [...(e.resources || [])],
                { topic: m, uri: b } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: n,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: m, uri: b },
              });
              let w = await this.client.core.crypto.generateKeyPair(),
                v = a$(w);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(pm, {
                    responseTopic: v,
                    publicKey: w,
                  }),
                  this.client.auth.pairingTopics.set(v, {
                    topic: v,
                    pairingTopic: m,
                  }),
                ]),
                await this.client.core.relayer.subscribe(v, {
                  transportType: n,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${m}`
                ),
                f.length > 0)
              ) {
                let { namespace: e } = sd(o[0]),
                  t = (function (e, t, r) {
                    let i = (function (e, t, r, i = {}) {
                      return (
                        r?.sort((e, t) => e.localeCompare(t)),
                        {
                          att: {
                            [e]: (function (e, t, r = {}) {
                              t = t?.sort((e, t) => e.localeCompare(t));
                              let i = t.map((t) => ({ [`${e}/${t}`]: [r] }));
                              return Object.assign({}, ...i);
                            })(t, r, i),
                          },
                        }
                      );
                    })(e, t, r);
                    return nM(i);
                  })(e, "request", f);
                nH(y) &&
                  (t = (function (e, t) {
                    let r = n$(e),
                      i = n$(t),
                      s = (function (e, t) {
                        nq(e), nq(t);
                        let r = Object.keys(e.att)
                            .concat(Object.keys(t.att))
                            .sort((e, t) => e.localeCompare(t)),
                          i = { att: {} };
                        return (
                          r.forEach((r) => {
                            var s, n;
                            Object.keys(
                              (null == (s = e.att) ? void 0 : s[r]) || {}
                            )
                              .concat(
                                Object.keys(
                                  (null == (n = t.att) ? void 0 : n[r]) || {}
                                )
                              )
                              .sort((e, t) => e.localeCompare(t))
                              .forEach((s) => {
                                var n, o;
                                i.att[r] = nN(nT({}, i.att[r]), {
                                  [s]:
                                    (null == (n = e.att[r]) ? void 0 : n[s]) ||
                                    (null == (o = t.att[r]) ? void 0 : o[s]),
                                });
                              });
                          }),
                          i
                        );
                      })(r, i);
                    return nM(s);
                  })(t, y.pop())),
                  y.push(t);
              }
              let E =
                  g && g > pu.wc_sessionAuthenticate.req.ttl
                    ? g
                    : pu.wc_sessionAuthenticate.req.ttl,
                _ = {
                  authPayload: {
                    type: u ?? "caip122",
                    chains: o,
                    statement: a,
                    aud: c,
                    domain: l,
                    version: "1",
                    nonce: h,
                    iat: new Date().toISOString(),
                    exp: d,
                    nbf: p,
                    resources: y,
                  },
                  requester: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: sq(E),
                },
                I = {
                  eip155: {
                    chains: o,
                    methods: [...new Set(["personal_sign", ...f])],
                    events: ["chainChanged", "accountsChanged"],
                  },
                },
                D = {
                  requiredNamespaces: {},
                  optionalNamespaces: I,
                  relays: [{ protocol: "irn" }],
                  pairingTopic: m,
                  proposer: { publicKey: w, metadata: this.client.metadata },
                  expiryTimestamp: sq(pu.wc_sessionPropose.req.ttl),
                  id: lL(),
                },
                { done: S, resolve: P, reject: O } = sL(E, "Request expired"),
                x = lL(),
                A = s$("session_connect", D.id),
                C = s$("session_request", x),
                T = async ({ error: e, session: t }) => {
                  this.events.off(C, N), e ? O(e) : t && P({ session: t });
                },
                N = async (e) => {
                  var r, i, s;
                  let o;
                  if (
                    (await this.deletePendingAuthRequest(x, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    e.error)
                  ) {
                    let t = a9(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return e.error.code === t.code
                      ? void 0
                      : (this.events.off(A, T), O(e.error.message));
                  }
                  await this.deleteProposal(D.id), this.events.off(A, T);
                  let { cacaos: a, responder: c } = e.result,
                    l = [],
                    h = [];
                  for (let e of a) {
                    (await nk({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        e,
                        "Signature verification failed"
                      ),
                      O(
                        a9(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: t } = e,
                      r = nH(t.resources),
                      i = [nL(t.iss)],
                      s = nU(t.iss);
                    if (r) {
                      let e = nz(r),
                        t = nF(r);
                      l.push(...e), i.push(...t);
                    }
                    for (let e of i) h.push(`${e}:${s}`);
                  }
                  let u = await this.client.core.crypto.generateSharedKey(
                    w,
                    c.publicKey
                  );
                  l.length > 0 &&
                    ((o = {
                      topic: u,
                      acknowledged: !0,
                      self: { publicKey: w, metadata: this.client.metadata },
                      peer: c,
                      controller: c.publicKey,
                      expiry: sq(ph),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: m,
                      namespaces: a3([...new Set(l)], [...new Set(h)]),
                      transportType: n,
                    }),
                    await this.client.core.relayer.subscribe(u, {
                      transportType: n,
                    }),
                    await this.client.session.set(u, o),
                    m &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: m,
                        metadata: c.metadata,
                      })),
                    (o = this.client.session.get(u))),
                    null != (r = this.client.metadata.redirect) &&
                      r.linkMode &&
                      null != (i = c.metadata.redirect) &&
                      i.linkMode &&
                      null != (s = c.metadata.redirect) &&
                      s.universal &&
                      t &&
                      (this.client.core.addLinkModeSupportedApp(
                        c.metadata.redirect.universal
                      ),
                      this.client.session.update(u, {
                        transportType: hn.link_mode,
                      })),
                    P({ auths: a, session: o });
                };
              this.events.once(A, T), this.events.once(C, N);
              try {
                if (s) {
                  let e = lk("wc_sessionAuthenticate", _, x);
                  this.client.core.history.set(m, e);
                  let r = await this.client.core.crypto.encode("", e, {
                    type: 2,
                    encoding: aB,
                  });
                  i = a0(t, m, r);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: m,
                      method: "wc_sessionAuthenticate",
                      params: _,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: x,
                    }),
                    this.sendRequest({
                      topic: m,
                      method: "wc_sessionPropose",
                      params: D,
                      expiry: pu.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: D.id,
                    }),
                  ]);
              } catch (e) {
                throw (this.events.off(A, T), this.events.off(C, N), e);
              }
              return (
                await this.setProposal(D.id, D),
                await this.setAuthRequest(x, {
                  request: pP(pS({}, _), { verifyContext: {} }),
                  pairingTopic: m,
                  transportType: n,
                }),
                { uri: i ?? b, response: S }
              );
            }),
            pO(this, "approveSessionAuthenticate", async (e) => {
              let t;
              let { id: r, auths: i } = e,
                s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: r.toString(),
                    trace: [hv.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (s.setError(hE.no_internet_connection), e);
              }
              let n = this.getPendingAuthRequest(r);
              if (!n)
                throw (
                  (s.setError(
                    hE.authenticated_session_pending_request_not_found
                  ),
                  Error(`Could not find pending auth request with id ${r}`))
                );
              let o = n.transportType || hn.relay;
              o === hn.relay && (await this.confirmOnlineStateOrThrow());
              let a = n.requester.publicKey,
                c = await this.client.core.crypto.generateKeyPair(),
                l = a$(a),
                h = { type: 1, receiverPublicKey: a, senderPublicKey: c },
                u = [],
                d = [];
              for (let e of i) {
                if (
                  !(await nk({
                    cacao: e,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  s.setError(hE.invalid_cacao);
                  let e = a9(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: r,
                      topic: l,
                      error: e,
                      encodeOpts: h,
                    }),
                    Error(e.message))
                  );
                }
                s.addTrace(hv.cacaos_verified);
                let { p: t } = e,
                  i = nH(t.resources),
                  n = [nL(t.iss)],
                  o = nU(t.iss);
                if (i) {
                  let e = nz(i),
                    t = nF(i);
                  u.push(...e), n.push(...t);
                }
                for (let e of n) d.push(`${e}:${o}`);
              }
              let p = await this.client.core.crypto.generateSharedKey(c, a);
              if (
                (s.addTrace(hv.create_authenticated_session_topic),
                u?.length > 0)
              ) {
                (t = {
                  topic: p,
                  acknowledged: !0,
                  self: { publicKey: c, metadata: this.client.metadata },
                  peer: { publicKey: a, metadata: n.requester.metadata },
                  controller: a,
                  expiry: sq(ph),
                  authentication: i,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: n.pairingTopic,
                  namespaces: a3([...new Set(u)], [...new Set(d)]),
                  transportType: o,
                }),
                  s.addTrace(hv.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(p, {
                    transportType: o,
                  });
                } catch (e) {
                  throw (
                    (s.setError(
                      hE.subscribe_authenticated_session_topic_failure
                    ),
                    e)
                  );
                }
                s.addTrace(hv.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(p, t),
                  s.addTrace(hv.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: n.pairingTopic,
                    metadata: n.requester.metadata,
                  });
              }
              s.addTrace(hv.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: l,
                  id: r,
                  result: {
                    cacaos: i,
                    responder: { publicKey: c, metadata: this.client.metadata },
                  },
                  encodeOpts: h,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                });
              } catch (e) {
                throw (
                  (s.setError(hE.authenticated_session_approve_publish_failure),
                  e)
                );
              }
              return (
                await this.client.auth.requests.delete(r, {
                  message: "fulfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: n.pairingTopic,
                }),
                this.client.core.eventClient.deleteEvent({
                  eventId: s.eventId,
                }),
                { session: t }
              );
            }),
            pO(this, "rejectSessionAuthenticate", async (e) => {
              this.isInitialized();
              let { id: t, reason: r } = e,
                i = this.getPendingAuthRequest(t);
              if (!i)
                throw Error(`Could not find pending auth request with id ${t}`);
              i.transportType === hn.relay &&
                (await this.confirmOnlineStateOrThrow());
              let s = i.requester.publicKey,
                n = await this.client.core.crypto.generateKeyPair(),
                o = a$(s);
              await this.sendError({
                id: t,
                topic: o,
                error: r,
                encodeOpts: {
                  type: 1,
                  receiverPublicKey: s,
                  senderPublicKey: n,
                },
                rpcOpts: pu.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(
                  i.requester.metadata,
                  i.transportType
                ),
              }),
                await this.client.auth.requests.delete(t, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(t, a9("USER_DISCONNECTED"));
            }),
            pO(this, "formatAuthMessage", (e) => {
              this.isInitialized();
              let { request: t, iss: r } = e;
              return nB(t, r);
            }),
            pO(this, "processRelayMessageCache", () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            pO(this, "cleanupDuplicatePairings", async (e) => {
              if (e.pairingTopic)
                try {
                  let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var i, s;
                        return (
                          (null == (i = r.peerMetadata) ? void 0 : i.url) &&
                          (null == (s = r.peerMetadata) ? void 0 : s.url) ===
                            e.peer.metadata.url &&
                          r.topic &&
                          r.topic !== t.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      r.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            pO(this, "deleteSession", async (e) => {
              var t;
              let {
                  topic: r,
                  expirerHasDeleted: i = !1,
                  emitEvent: s = !0,
                  id: n = 0,
                } = e,
                { self: o } = this.client.session.get(r);
              await this.client.core.relayer.unsubscribe(r),
                await this.client.session.delete(r, a9("USER_DISCONNECTED")),
                this.addToRecentlyDeleted(r, "session"),
                this.client.core.crypto.keychain.has(o.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                this.client.core.crypto.keychain.has(r) &&
                  (await this.client.core.crypto.deleteSymKey(r)),
                i || this.client.core.expirer.del(r),
                this.client.core.storage
                  .removeItem(pc)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === r &&
                    this.deletePendingSessionRequest(
                      e.id,
                      a9("USER_DISCONNECTED")
                    );
                }),
                r ===
                  (null == (t = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : t.topic) && (this.sessionRequestQueue.state = pp.idle),
                s &&
                  this.client.events.emit("session_delete", {
                    id: n,
                    topic: r,
                  });
            }),
            pO(this, "deleteProposal", async (e, t) => {
              if (t)
                try {
                  let t = this.client.proposal.get(e),
                    r = this.client.core.eventClient.getEvent({
                      topic: t.pairingTopic,
                    });
                  r?.setError(hw.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(e, a9("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "proposal");
            }),
            pO(this, "deletePendingSessionRequest", async (e, t, r = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "request"),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                r &&
                  ((this.sessionRequestQueue.state = pp.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            pO(this, "deletePendingAuthRequest", async (e, t, r = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, t),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            pO(this, "setExpiry", async (e, t) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, t),
                await this.client.session.update(e, { expiry: t }));
            }),
            pO(this, "setProposal", async (e, t) => {
              this.client.core.expirer.set(e, sq(pu.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(e, t);
            }),
            pO(this, "setAuthRequest", async (e, t) => {
              let {
                request: r,
                pairingTopic: i,
                transportType: s = hn.relay,
              } = t;
              this.client.core.expirer.set(e, r.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: r.authPayload,
                  requester: r.requester,
                  expiryTimestamp: r.expiryTimestamp,
                  id: e,
                  pairingTopic: i,
                  verifyContext: r.verifyContext,
                  transportType: s,
                });
            }),
            pO(this, "setPendingSessionRequest", async (e) => {
              let { id: t, topic: r, params: i, verifyContext: s } = e,
                n =
                  i.request.expiryTimestamp || sq(pu.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(t, n),
                await this.client.pendingRequest.set(t, {
                  id: t,
                  topic: r,
                  params: i,
                  verifyContext: s,
                });
            }),
            pO(this, "sendRequest", async (e) => {
              let t, i;
              let {
                  topic: s,
                  method: n,
                  params: o,
                  expiry: a,
                  relayRpcId: c,
                  clientRpcId: l,
                  throwOnFailedPublish: h,
                  appLink: u,
                  tvf: d,
                } = e,
                p = lk(n, o, l),
                f = !!u;
              try {
                t = await this.client.core.crypto.encode(s, p, {
                  encoding: f ? aB : ak,
                });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${s} failed`
                  ),
                  e)
                );
              }
              if (pg.includes(n)) {
                let e = az(JSON.stringify(p)),
                  r = az(t);
                i = await this.client.core.verify.register({
                  id: r,
                  decryptedId: e,
                });
              }
              let g = pu[n].req;
              if (
                ((g.attestation = i),
                a && (g.ttl = a),
                c && (g.id = c),
                this.client.core.history.set(s, p),
                f)
              ) {
                let e = a0(u, s, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = pu[n].req;
                a && (e.ttl = a),
                  c && (e.id = c),
                  (e.tvf = pP(pS({}, d), { correlationId: p.id })),
                  h
                    ? ((e.internal = pP(pS({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(s, t, e))
                    : this.client.core.relayer
                        .publish(s, t, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return p.id;
            }),
            pO(this, "sendResult", async (e) => {
              let t, i, s;
              let {
                  id: n,
                  topic: o,
                  result: a,
                  throwOnFailedPublish: c,
                  encodeOpts: l,
                  appLink: h,
                } = e,
                u = lB(n, a),
                d = h && "u" > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                t = await this.client.core.crypto.encode(
                  o,
                  u,
                  pP(pS({}, l || {}), { encoding: d ? aB : ak })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${o} failed`
                  ),
                  e)
                );
              }
              try {
                i = await this.client.core.history.get(o, n);
                let e = i.request;
                try {
                  this.shouldSetTVF(e.method, e.params) &&
                    (s = this.getTVFParams(n, e.params, a));
                } catch (e) {
                  this.client.logger.warn(
                    "sendResult() -> getTVFParams() failed",
                    e
                  );
                }
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${o}, ${n}) failed`
                  ),
                  e)
                );
              }
              if (d) {
                let e = a0(h, o, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = i.request.method,
                  r = pu[e].res;
                (r.tvf = pP(pS({}, s), { correlationId: n })),
                  c
                    ? ((r.internal = pP(pS({}, r.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(o, t, r))
                    : this.client.core.relayer
                        .publish(o, t, r)
                        .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(u);
            }),
            pO(this, "sendError", async (e) => {
              let t, i;
              let {
                  id: s,
                  topic: n,
                  error: o,
                  encodeOpts: a,
                  rpcOpts: c,
                  appLink: l,
                } = e,
                h = lq(s, o),
                u = l && "u" > typeof (null == r.g ? void 0 : r.g.Linking);
              try {
                t = await this.client.core.crypto.encode(
                  n,
                  h,
                  pP(pS({}, a || {}), { encoding: u ? aB : ak })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${n} failed`
                  ),
                  e)
                );
              }
              try {
                i = await this.client.core.history.get(n, s);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${n}, ${s}) failed`
                  ),
                  e)
                );
              }
              if (u) {
                let e = a0(l, n, t);
                await r.g.Linking.openURL(e, this.client.name);
              } else {
                let e = i.request.method,
                  r = c || pu[e].res;
                this.client.core.relayer.publish(n, t, r);
              }
              await this.client.core.history.resolve(h);
            }),
            pO(this, "cleanup", async () => {
              let e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                let r = !1;
                sM(t.expiry) && (r = !0),
                  this.client.core.crypto.keychain.has(t.topic) || (r = !0),
                  r && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  sM(e.expiryTimestamp) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            pO(this, "onProviderMessageEvent", async (e) => {
              !this.initialized || this.relayMessageCache.length > 0
                ? this.relayMessageCache.push(e)
                : await this.onRelayMessage(e);
            }),
            pO(this, "onRelayEventRequest", async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            pO(this, "processRequestsQueue", async () => {
              if (this.requestQueue.state === pp.active) {
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = pp.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = pp.idle;
            }),
            pO(this, "processRequest", async (e) => {
              let {
                  topic: t,
                  payload: r,
                  attestation: i,
                  transportType: s,
                  encryptedId: n,
                } = e,
                o = r.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: t, requestMethod: o })
              )
                switch (o) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(t, r);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(t, r);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(t, r);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(t, r);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(t, r);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                      transportType: s,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(t, r);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: t,
                      payload: r,
                      attestation: i,
                      encryptedId: n,
                      transportType: s,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${o}`
                    );
                }
            }),
            pO(this, "onRelayEventResponse", async (e) => {
              let { topic: t, payload: r, transportType: i } = e,
                s = (await this.client.core.history.get(t, r.id)).request
                  .method;
              switch (s) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, r, i);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, r);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(t, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${s}`
                  );
              }
            }),
            pO(this, "onRelayEventUnknownPayload", (e) => {
              let { topic: t } = e,
                { message: r } = a4(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(r);
            }),
            pO(this, "shouldIgnorePairingRequest", (e) => {
              let { topic: t, requestMethod: r } = e,
                i = this.expectedPairingMethodMap.get(t);
              return (
                !(!i || i.includes(r)) &&
                !!(
                  i.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            pO(this, "onSessionProposeRequest", async (e) => {
              let { topic: t, payload: r, attestation: i, encryptedId: s } = e,
                { params: n, id: o } = r;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: t });
                0 === this.client.events.listenerCount("session_proposal") &&
                  (console.warn("No listener for session_proposal event"),
                  e?.setError(hm.proposal_listener_not_found)),
                  this.isValidConnect(pS({}, r.params));
                let a = n.expiryTimestamp || sq(pu.wc_sessionPropose.req.ttl),
                  c = pS({ id: o, pairingTopic: t, expiryTimestamp: a }, n);
                await this.setProposal(o, c);
                let l = await this.getVerifyContext({
                  attestationId: i,
                  hash: az(JSON.stringify(r)),
                  encryptedId: s,
                  metadata: c.proposer.metadata,
                });
                e?.addTrace(hy.emit_session_proposal),
                  this.client.events.emit("session_proposal", {
                    id: o,
                    params: c,
                    verifyContext: l,
                  });
              } catch (e) {
                await this.sendError({
                  id: o,
                  topic: t,
                  error: e,
                  rpcOpts: pu.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            pO(this, "onSessionProposeResponse", async (e, t, r) => {
              let { id: i } = t;
              if (lY(t)) {
                let { result: s } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: s,
                });
                let n = this.client.proposal.get(i);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n,
                });
                let o = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: o,
                });
                let a = s.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: a,
                });
                let c = await this.client.core.crypto.generateSharedKey(o, a);
                this.pendingSessions.set(i, {
                  sessionTopic: c,
                  pairingTopic: e,
                  proposalId: i,
                  publicKey: o,
                });
                let l = await this.client.core.relayer.subscribe(c, {
                  transportType: r,
                });
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: l,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if (lJ(t)) {
                await this.client.proposal.delete(i, a9("USER_DISCONNECTED"));
                let e = s$("session_connect", i);
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit(e, { error: t.error });
              }
            }),
            pO(this, "onSessionSettleRequest", async (e, t) => {
              let { id: r, params: i } = t;
              try {
                this.isValidSessionSettleRequest(i);
                let {
                    relay: r,
                    controller: s,
                    expiry: n,
                    namespaces: o,
                    sessionProperties: a,
                    scopedProperties: c,
                    sessionConfig: l,
                  } = t.params,
                  h = [...this.pendingSessions.values()].find(
                    (t) => t.sessionTopic === e
                  );
                if (!h)
                  return this.client.logger.error(
                    `Pending session not found for topic ${e}`
                  );
                let u = this.client.proposal.get(h.proposalId),
                  d = pP(
                    pS(
                      pS(
                        pS(
                          {
                            topic: e,
                            relay: r,
                            expiry: n,
                            namespaces: o,
                            acknowledged: !0,
                            pairingTopic: h.pairingTopic,
                            requiredNamespaces: u.requiredNamespaces,
                            optionalNamespaces: u.optionalNamespaces,
                            controller: s.publicKey,
                            self: {
                              publicKey: h.publicKey,
                              metadata: this.client.metadata,
                            },
                            peer: {
                              publicKey: s.publicKey,
                              metadata: s.metadata,
                            },
                          },
                          a && { sessionProperties: a }
                        ),
                        c && { scopedProperties: c }
                      ),
                      l && { sessionConfig: l }
                    ),
                    { transportType: hn.relay }
                  );
                await this.client.session.set(d.topic, d),
                  await this.setExpiry(d.topic, d.expiry),
                  await this.client.core.pairing.updateMetadata({
                    topic: h.pairingTopic,
                    metadata: d.peer.metadata,
                  }),
                  this.client.events.emit("session_connect", { session: d }),
                  this.events.emit(s$("session_connect", h.proposalId), {
                    session: d,
                  }),
                  this.pendingSessions.delete(h.proposalId),
                  this.deleteProposal(h.proposalId, !1),
                  this.cleanupDuplicatePairings(d),
                  await this.sendResult({
                    id: t.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            pO(this, "onSessionSettleResponse", async (e, t) => {
              let { id: r } = t;
              lY(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(s$("session_approve", r), {}))
                : lJ(t) &&
                  (await this.client.session.delete(e, a9("USER_DISCONNECTED")),
                  this.events.emit(s$("session_approve", r), {
                    error: t.error,
                  }));
            }),
            pO(this, "onSessionUpdateRequest", async (e, t) => {
              let { params: r, id: i } = t;
              try {
                let t = `${e}_session_update`,
                  s = cy.get(t);
                if (s && this.isRequestOutOfSync(s, i)) {
                  this.client.logger.warn(
                    `Discarding out of sync request - ${i}`
                  ),
                    this.sendError({
                      id: i,
                      topic: e,
                      error: a9("INVALID_UPDATE_REQUEST"),
                    });
                  return;
                }
                this.isValidUpdate(pS({ topic: e }, r));
                try {
                  cy.set(t, i),
                    await this.client.session.update(e, {
                      namespaces: r.namespaces,
                    }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (cy.delete(t), e);
                }
                this.client.events.emit("session_update", {
                  id: i,
                  topic: e,
                  params: r,
                });
              } catch (t) {
                await this.sendError({ id: i, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            pO(
              this,
              "isRequestOutOfSync",
              (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
            ),
            pO(this, "onSessionUpdateResponse", (e, t) => {
              let { id: r } = t,
                i = s$("session_update", r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              lY(t)
                ? this.events.emit(s$("session_update", r), {})
                : lJ(t) &&
                  this.events.emit(s$("session_update", r), { error: t.error });
            }),
            pO(this, "onSessionExtendRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, sq(ph)),
                  await this.sendResult({
                    id: r,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: e,
                  });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            pO(this, "onSessionExtendResponse", (e, t) => {
              let { id: r } = t,
                i = s$("session_extend", r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              lY(t)
                ? this.events.emit(s$("session_extend", r), {})
                : lJ(t) &&
                  this.events.emit(s$("session_extend", r), { error: t.error });
            }),
            pO(this, "onSessionPingRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({
                    id: r,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: r, topic: e });
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            pO(this, "onSessionPingResponse", (e, t) => {
              let { id: r } = t,
                i = s$("session_ping", r);
              setTimeout(() => {
                if (0 === this.events.listenerCount(i))
                  throw Error(`emitting ${i} without any listeners 2176`);
                lY(t)
                  ? this.events.emit(s$("session_ping", r), {})
                  : lJ(t) &&
                    this.events.emit(s$("session_ping", r), { error: t.error });
              }, 500);
            }),
            pO(this, "onSessionDeleteRequest", async (e, t) => {
              let { id: r } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(hr.publish, async () => {
                        t(await this.deleteSession({ topic: e, id: r }));
                      });
                    }),
                    this.sendResult({
                      id: r,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: a9("USER_DISCONNECTED"),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            pO(this, "onSessionRequest", async (e) => {
              var t, r, i;
              let {
                  topic: s,
                  payload: n,
                  attestation: o,
                  encryptedId: a,
                  transportType: c,
                } = e,
                { id: l, params: h } = n;
              try {
                await this.isValidRequest(pS({ topic: s }, h));
                let e = this.client.session.get(s),
                  n = await this.getVerifyContext({
                    attestationId: o,
                    hash: az(JSON.stringify(lk("wc_sessionRequest", h, l))),
                    encryptedId: a,
                    metadata: e.peer.metadata,
                    transportType: c,
                  }),
                  u = { id: l, topic: s, params: h, verifyContext: n };
                await this.setPendingSessionRequest(u),
                  c === hn.link_mode &&
                    null != (t = e.peer.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (r = e.peer.metadata.redirect)
                        ? void 0
                        : r.universal
                    ),
                  null != (i = this.client.signConfig) && i.disableRequestQueue
                    ? this.emitSessionRequest(u)
                    : (this.addSessionRequestToSessionRequestQueue(u),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: l, topic: s, error: e }),
                  this.client.logger.error(e);
              }
            }),
            pO(this, "onSessionRequestResponse", (e, t) => {
              let { id: r } = t,
                i = s$("session_request", r);
              if (0 === this.events.listenerCount(i))
                throw Error(`emitting ${i} without any listeners`);
              lY(t)
                ? this.events.emit(s$("session_request", r), {
                    result: t.result,
                  })
                : lJ(t) &&
                  this.events.emit(s$("session_request", r), {
                    error: t.error,
                  });
            }),
            pO(this, "onSessionEventRequest", async (e, t) => {
              let { id: r, params: i } = t;
              try {
                let t = `${e}_session_event_${i.event.name}`,
                  s = cy.get(t);
                if (s && this.isRequestOutOfSync(s, r)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  );
                  return;
                }
                this.isValidEmit(pS({ topic: e }, i)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: e,
                    params: i,
                  }),
                  cy.set(t, r);
              } catch (t) {
                await this.sendError({ id: r, topic: e, error: t }),
                  this.client.logger.error(t);
              }
            }),
            pO(this, "onSessionAuthenticateResponse", (e, t) => {
              let { id: r } = t;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: t,
              }),
                lY(t)
                  ? this.events.emit(s$("session_request", r), {
                      result: t.result,
                    })
                  : lJ(t) &&
                    this.events.emit(s$("session_request", r), {
                      error: t.error,
                    });
            }),
            pO(this, "onSessionAuthenticateRequest", async (e) => {
              var t;
              let {
                topic: r,
                payload: i,
                attestation: s,
                encryptedId: n,
                transportType: o,
              } = e;
              try {
                let {
                    requester: e,
                    authPayload: a,
                    expiryTimestamp: c,
                  } = i.params,
                  l = await this.getVerifyContext({
                    attestationId: s,
                    hash: az(JSON.stringify(i)),
                    encryptedId: n,
                    metadata: e.metadata,
                    transportType: o,
                  }),
                  h = {
                    requester: e,
                    pairingTopic: r,
                    id: i.id,
                    authPayload: a,
                    verifyContext: l,
                    expiryTimestamp: c,
                  };
                await this.setAuthRequest(i.id, {
                  request: h,
                  pairingTopic: r,
                  transportType: o,
                }),
                  o === hn.link_mode &&
                    null != (t = e.metadata.redirect) &&
                    t.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      e.metadata.redirect.universal
                    ),
                  this.client.events.emit("session_authenticate", {
                    topic: r,
                    params: i.params,
                    id: i.id,
                    verifyContext: l,
                  });
              } catch (n) {
                this.client.logger.error(n);
                let e = i.params.requester.publicKey,
                  t = await this.client.core.crypto.generateKeyPair(),
                  s = this.getAppLinkIfEnabled(i.params.requester.metadata, o);
                await this.sendError({
                  id: i.id,
                  topic: r,
                  error: n,
                  encodeOpts: {
                    type: 1,
                    receiverPublicKey: e,
                    senderPublicKey: t,
                  },
                  rpcOpts: pu.wc_sessionAuthenticate.autoReject,
                  appLink: s,
                });
              }
            }),
            pO(this, "addSessionRequestToSessionRequestQueue", (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            pO(this, "cleanupAfterResponse", (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = pp.idle),
                    this.processSessionRequestQueue();
                }, (0, T.toMiliseconds)(this.requestQueueDelay));
            }),
            pO(
              this,
              "cleanupPendingSentRequestsForTopic",
              ({ topic: e, error: t }) => {
                let r = this.client.core.history.pending;
                r.length > 0 &&
                  r
                    .filter(
                      (t) =>
                        t.topic === e &&
                        "wc_sessionRequest" === t.request.method
                    )
                    .forEach((e) => {
                      let r = e.request.id,
                        i = s$("session_request", r);
                      if (0 === this.events.listenerCount(i))
                        throw Error(`emitting ${i} without any listeners`);
                      this.events.emit(s$("session_request", e.request.id), {
                        error: t,
                      });
                    });
              }
            ),
            pO(this, "processSessionRequestQueue", () => {
              if (this.sessionRequestQueue.state === pp.active) {
                this.client.logger.info(
                  "session request queue is already active."
                );
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info("session request queue is empty.");
                return;
              }
              try {
                (this.sessionRequestQueue.state = pp.active),
                  this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            pO(this, "emitSessionRequest", (e) => {
              this.client.events.emit("session_request", e);
            }),
            pO(this, "onPairingCreated", (e) => {
              if (
                (e.methods &&
                  this.expectedPairingMethodMap.set(e.topic, e.methods),
                e.active)
              )
                return;
              let t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: lk(
                    "wc_sessionPropose",
                    pP(pS({}, t), {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                      scopedProperties: t.scopedProperties,
                    }),
                    t.id
                  ),
                });
            }),
            pO(this, "isValidConnect", async (e) => {
              let t;
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(t);
              }
              let {
                pairingTopic: r,
                requiredNamespaces: i,
                optionalNamespaces: s,
                sessionProperties: n,
                scopedProperties: o,
                relays: a,
              } = e;
              if (
                (ct(r) || (await this.isValidPairingTopic(r)),
                (t = !1),
                a
                  ? a &&
                    a7(a) &&
                    a.length &&
                    a.forEach((e) => {
                      t = cc(e);
                    })
                  : (t = !0),
                !t)
              ) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${a}`
                );
                throw Error(e);
              }
              if (
                (ct(i) ||
                  0 === ce(i) ||
                  this.validateNamespaces(i, "requiredNamespaces"),
                ct(s) ||
                  0 === ce(s) ||
                  this.validateNamespaces(s, "optionalNamespaces"),
                ct(n) || this.validateSessionProps(n, "sessionProperties"),
                !ct(o))
              ) {
                this.validateSessionProps(o, "scopedProperties");
                let e = Object.keys(i || {}).concat(Object.keys(s || {}));
                if (!Object.keys(o).every((t) => e.includes(t)))
                  throw Error(
                    `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(
                      o
                    )}, required/optional namespaces: ${JSON.stringify(e)}`
                  );
              }
            }),
            pO(this, "validateNamespaces", (e, t) => {
              let r = (function (e, t, r) {
                let i = null;
                if (e && ce(e)) {
                  let s;
                  let n = co(e, t);
                  n && (i = n);
                  let o =
                    ((s = null),
                    Object.entries(e).forEach(([e, i]) => {
                      var n, o;
                      let a;
                      if (s) return;
                      let c =
                        ((n = sf(e, i)),
                        (o = `${t} ${r}`),
                        (a = null),
                        a7(n) && n.length
                          ? n.forEach((e) => {
                              a ||
                                cs(e) ||
                                (a = a9(
                                  "UNSUPPORTED_CHAINS",
                                  `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : cs(e) ||
                            (a = a9(
                              "UNSUPPORTED_CHAINS",
                              `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        a);
                      c && (s = c);
                    }),
                    s);
                  o && (i = o);
                } else
                  i = a4(
                    "MISSING_OR_INVALID",
                    `${t}, ${r} should be an object with data`
                  );
                return i;
              })(e, "connect()", t);
              if (r) throw Error(r.message);
            }),
            pO(this, "isValidApprove", async (e) => {
              if (!cl(e))
                throw Error(
                  a4("MISSING_OR_INVALID", `approve() params: ${e}`).message
                );
              let {
                id: t,
                namespaces: r,
                relayProtocol: i,
                sessionProperties: s,
                scopedProperties: n,
              } = e;
              this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
              let o = this.client.proposal.get(t),
                a = ca(r, "approve()");
              if (a) throw Error(a.message);
              let c = cu(o.requiredNamespaces, r, "approve()");
              if (c) throw Error(c.message);
              if (!cr(i, !0)) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${i}`
                );
                throw Error(e);
              }
              if (
                (ct(s) || this.validateSessionProps(s, "sessionProperties"),
                !ct(n))
              ) {
                this.validateSessionProps(n, "scopedProperties");
                let e = new Set(Object.keys(r));
                if (!Object.keys(n).every((t) => e.has(t)))
                  throw Error(
                    `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(
                      n
                    )}, approved namespaces: ${Array.from(e).join(", ")}`
                  );
              }
            }),
            pO(this, "isValidReject", async (e) => {
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(t);
              }
              let { id: t, reason: r } = e;
              if (
                (this.checkRecentlyDeleted(t),
                await this.isValidProposalId(t),
                !r ||
                  "object" != typeof r ||
                  !r.code ||
                  !ci(r.code, !1) ||
                  !r.message ||
                  !cr(r.message, !1))
              ) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw Error(e);
              }
            }),
            pO(this, "isValidSessionSettleRequest", (e) => {
              let t;
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(t);
              }
              let { relay: r, controller: i, namespaces: s, expiry: n } = e;
              if (!cc(r)) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let o =
                ((t = null),
                cr(i?.publicKey, !1) ||
                  (t = a4(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() controller public key should be a string"
                  )),
                t);
              if (o) throw Error(o.message);
              let a = ca(s, "onSessionSettleRequest()");
              if (a) throw Error(a.message);
              if (sM(n)) {
                let { message: e } = a4("EXPIRED", "onSessionSettleRequest()");
                throw Error(e);
              }
            }),
            pO(this, "isValidUpdate", async (e) => {
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t, namespaces: r } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              let i = this.client.session.get(t),
                s = ca(r, "update()");
              if (s) throw Error(s.message);
              let n = cu(i.requiredNamespaces, r, "update()");
              if (n) throw Error(n.message);
            }),
            pO(this, "isValidExtend", async (e) => {
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
            }),
            pO(this, "isValidRequest", async (e) => {
              var t;
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: r, request: i, chainId: s, expiry: n } = e;
              this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
              let { namespaces: o } = this.client.session.get(r);
              if (!ch(o, s)) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${s}`
                );
                throw Error(e);
              }
              if (ct(i) || !cr(i.method, !1)) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (
                !(
                  cr((t = i.method), !1) &&
                  (function (e, t) {
                    let r = [];
                    return (
                      Object.values(e).forEach((e) => {
                        a1(e.accounts).includes(t) && r.push(...e.methods);
                      }),
                      r
                    );
                  })(o, s).includes(t)
                )
              ) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `request() method: ${i.method}`
                );
                throw Error(e);
              }
              if (n && (!ci(n, !1) || !(n <= pd.max) || !(n >= pd.min))) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${n}. Expiry must be a number (in seconds) between ${pd.min} and ${pd.max}`
                );
                throw Error(e);
              }
            }),
            pO(this, "isValidRespond", async (e) => {
              var t;
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: r, response: i } = e;
              try {
                await this.isValidSessionTopic(r);
              } catch (r) {
                throw (
                  (null != (t = e?.response) &&
                    t.id &&
                    this.cleanupAfterResponse(e),
                  r)
                );
              }
              if (
                ct(i) ||
                (ct(i.result) && ct(i.error)) ||
                !ci(i.id, !1) ||
                !cr(i.jsonrpc, !1)
              ) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            pO(this, "isValidPing", async (e) => {
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            pO(this, "isValidEmit", async (e) => {
              var t;
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: r, event: i, chainId: s } = e;
              await this.isValidSessionTopic(r);
              let { namespaces: n } = this.client.session.get(r);
              if (!ch(n, s)) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${s}`
                );
                throw Error(e);
              }
              if (ct(i) || !cr(i.name, !1)) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
              if (
                !(
                  cr((t = i.name), !1) &&
                  (function (e, t) {
                    let r = [];
                    return (
                      Object.values(e).forEach((e) => {
                        a1(e.accounts).includes(t) && r.push(...e.events);
                      }),
                      r
                    );
                  })(n, s).includes(t)
                )
              ) {
                let { message: e } = a4(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(i)}`
                );
                throw Error(e);
              }
            }),
            pO(this, "isValidDisconnect", async (e) => {
              if (!cl(e)) {
                let { message: t } = a4(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(t);
              }
              let { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            pO(this, "isValidAuthenticate", (e) => {
              let { chains: t, uri: r, domain: i, nonce: s } = e;
              if (!Array.isArray(t) || 0 === t.length)
                throw Error("chains is required and must be a non-empty array");
              if (!cr(r, !1)) throw Error("uri is required parameter");
              if (!cr(i, !1)) throw Error("domain is required parameter");
              if (!cr(s, !1)) throw Error("nonce is required parameter");
              if ([...new Set(t.map((e) => sd(e).namespace))].length > 1)
                throw Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              let { namespace: n } = sd(t[0]);
              if ("eip155" !== n)
                throw Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            pO(this, "getVerifyContext", async (e) => {
              let {
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  metadata: s,
                  transportType: n,
                } = e,
                o = {
                  verified: {
                    verifyUrl: s.verifyUrl || hp,
                    validation: "UNKNOWN",
                    origin: s.url || "",
                  },
                };
              try {
                if (n === hn.link_mode) {
                  let e = this.getAppLinkIfEnabled(s, n);
                  return (
                    (o.verified.validation =
                      e && new URL(e).origin === new URL(s.url).origin
                        ? "VALID"
                        : "INVALID"),
                    o
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: t,
                  hash: r,
                  encryptedId: i,
                  verifyUrl: s.verifyUrl,
                });
                e &&
                  ((o.verified.origin = e.origin),
                  (o.verified.isScam = e.isScam),
                  (o.verified.validation =
                    e.origin === new URL(s.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(o)}`
                ),
                o
              );
            }),
            pO(this, "validateSessionProps", (e, t) => {
              Object.values(e).forEach((r, i) => {
                if (null == r) {
                  let { message: s } = a4(
                    "MISSING_OR_INVALID",
                    `${t} must contain an existing value for each key. Received: ${r} for key ${
                      Object.keys(e)[i]
                    }`
                  );
                  throw Error(s);
                }
              });
            }),
            pO(this, "getPendingAuthRequest", (e) => {
              let t = this.client.auth.requests.get(e);
              return "object" == typeof t ? t : void 0;
            }),
            pO(this, "addToRecentlyDeleted", (e, t) => {
              if (
                (this.recentlyDeletedMap.set(e, t),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  t = this.recentlyDeletedLimit / 2;
                for (let r of this.recentlyDeletedMap.keys()) {
                  if (e++ >= t) break;
                  this.recentlyDeletedMap.delete(r);
                }
              }
            }),
            pO(this, "checkRecentlyDeleted", (e) => {
              let t = this.recentlyDeletedMap.get(e);
              if (t) {
                let { message: r } = a4(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${t}: ${e}`
                );
                throw Error(r);
              }
            }),
            pO(this, "isLinkModeEnabled", (e, t) => {
              var i, s, n, o, a, c, l, h, u;
              return (
                !!e &&
                t === hn.link_mode &&
                (null ==
                (s = null == (i = this.client.metadata) ? void 0 : i.redirect)
                  ? void 0
                  : s.linkMode) === !0 &&
                (null ==
                (o = null == (n = this.client.metadata) ? void 0 : n.redirect)
                  ? void 0
                  : o.universal) !== void 0 &&
                (null ==
                (c = null == (a = this.client.metadata) ? void 0 : a.redirect)
                  ? void 0
                  : c.universal) !== "" &&
                (null == (l = e?.redirect) ? void 0 : l.universal) !== void 0 &&
                (null == (h = e?.redirect) ? void 0 : h.universal) !== "" &&
                (null == (u = e?.redirect) ? void 0 : u.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  e.redirect.universal
                ) &&
                "u" > typeof (null == r.g ? void 0 : r.g.Linking)
              );
            }),
            pO(this, "getAppLinkIfEnabled", (e, t) => {
              var r;
              return this.isLinkModeEnabled(e, t)
                ? null == (r = e?.redirect)
                  ? void 0
                  : r.universal
                : void 0;
            }),
            pO(this, "handleLinkModeMessage", ({ url: e }) => {
              if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
              let t = sV(e, "topic") || "",
                r = decodeURIComponent(sV(e, "wc_ev") || ""),
                i = this.client.session.keys.includes(t);
              i &&
                this.client.session.update(t, { transportType: hn.link_mode }),
                this.client.core.dispatchEnvelope({
                  topic: t,
                  message: r,
                  sessionExists: i,
                });
            }),
            pO(this, "registerLinkModeListeners", async () => {
              var e;
              if (
                sW() ||
                (sP() &&
                  null != (e = this.client.metadata.redirect) &&
                  e.linkMode)
              ) {
                let e = null == r.g ? void 0 : r.g.Linking;
                if ("u" > typeof e) {
                  e.addEventListener(
                    "url",
                    this.handleLinkModeMessage,
                    this.client.name
                  );
                  let t = await e.getInitialURL();
                  t &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: t });
                    }, 50);
                }
              }
            }),
            pO(this, "shouldSetTVF", (e, t) => {
              if (!t || "wc_sessionRequest" !== e) return !1;
              let { request: r } = t;
              return Object.keys(pf).includes(r.method);
            }),
            pO(this, "getTVFParams", (e, t, r) => {
              var i, s;
              try {
                let n = t.request.method,
                  o = this.extractTxHashesFromResult(n, r);
                return pP(
                  pS(
                    { correlationId: e, rpcMethods: [n], chainId: t.chainId },
                    this.isValidContractData(t.request.params) && {
                      contractAddresses: [
                        null ==
                        (s = null == (i = t.request.params) ? void 0 : i[0])
                          ? void 0
                          : s.to,
                      ],
                    }
                  ),
                  { txHashes: o }
                );
              } catch (e) {
                this.client.logger.warn("Error getting TVF params", e);
              }
              return {};
            }),
            pO(this, "isValidContractData", (e) => {
              var t;
              if (!e) return !1;
              try {
                let r = e?.data || (null == (t = e?.[0]) ? void 0 : t.data);
                if (!r.startsWith("0x")) return !1;
                let i = r.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(i) && i.length % 2 == 0;
              } catch {}
              return !1;
            }),
            pO(this, "extractTxHashesFromResult", (e, t) => {
              try {
                let r = pf[e];
                if ("string" == typeof t) return [t];
                let i = t[r.key];
                if (a7(i))
                  return "solana_signAllTransactions" === e
                    ? i.map((e) =>
                        (function (e) {
                          let t = atob(e),
                            r = new Uint8Array(t.length);
                          for (let e = 0; e < t.length; e++)
                            r[e] = t.charCodeAt(e);
                          let i = r[0];
                          if (0 === i) throw Error("No signatures found");
                          if (r.length < 1 + 64 * i)
                            throw Error(
                              "Transaction data too short for claimed signature count"
                            );
                          if (r.length < 100)
                            throw Error("Transaction too short");
                          let s = su.from(e, "base64").slice(1, 65);
                          return ec.encode(s);
                        })(e)
                      )
                    : i;
                if ("string" == typeof i) return [i];
              } catch (e) {
                this.client.logger.warn(
                  "Error extracting tx hashes from result",
                  e
                );
              }
              return [];
            });
        }
        async processPendingMessageEvents() {
          try {
            let e = this.client.session.keys,
              t = this.client.core.relayer.messages.getWithoutAck(e);
            for (let [e, r] of Object.entries(t))
              for (let t of r)
                try {
                  await this.onProviderMessageEvent({
                    topic: e,
                    message: t,
                    publishedAt: Date.now(),
                  });
                } catch {
                  this.client.logger.warn(
                    `Error processing pending message event for topic: ${e}, message: ${t}`
                  );
                }
          } catch (e) {
            this.client.logger.warn("processPendingMessageEvents failed", e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = a4("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(hr.message, (e) => {
            this.onProviderMessageEvent(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: t, message: r, attestation: i, transportType: s } = e,
            { publicKey: n } = this.client.auth.authKeys.keys.includes(pm)
              ? this.client.auth.authKeys.get(pm)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            let e = await this.client.core.crypto.decode(t, r, {
              receiverPublicKey: n,
              encoding: s === hn.link_mode ? aB : ak,
            });
            lW(e)
              ? (this.client.core.history.set(t, e),
                await this.onRelayEventRequest({
                  topic: t,
                  payload: e,
                  attestation: i,
                  transportType: s,
                  encryptedId: az(r),
                }))
              : lG(e)
              ? (await this.client.core.history.resolve(e),
                await this.onRelayEventResponse({
                  topic: t,
                  payload: e,
                  transportType: s,
                }),
                this.client.core.history.delete(t, e.id))
              : await this.onRelayEventUnknownPayload({
                  topic: t,
                  payload: e,
                  transportType: s,
                }),
              await this.client.core.relayer.messages.ack(t, r);
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(hd.expired, async (e) => {
            let { topic: t, id: r } = sB(e.target);
            return r && this.client.pendingRequest.keys.includes(r)
              ? await this.deletePendingSessionRequest(r, a4("EXPIRED"), !0)
              : r && this.client.auth.requests.keys.includes(r)
              ? await this.deletePendingAuthRequest(r, a4("EXPIRED"), !0)
              : void (t
                  ? this.client.session.keys.includes(t) &&
                    (await this.deleteSession({
                      topic: t,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: t }))
                  : r &&
                    (await this.deleteProposal(r, !0),
                    this.client.events.emit("proposal_expire", { id: r })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(hh.create, (e) =>
            this.onPairingCreated(e)
          ),
            this.client.core.pairing.events.on(hh.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, "pairing");
            });
        }
        isValidPairingTopic(e) {
          if (!cr(e, !1)) {
            let { message: t } = a4(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: t } = a4(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (sM(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: t } = a4("EXPIRED", `pairing topic: ${e}`);
            throw Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!cr(e, !1)) {
            let { message: t } = a4(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(t);
          }
          if (
            (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e))
          ) {
            let { message: t } = a4(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (sM(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: t } = a4("EXPIRED", `session topic: ${e}`);
            throw Error(t);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: t } = a4(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(t));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (
            (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
          )
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if (cr(e, !1)) {
            let { message: t } = a4(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(t);
          } else {
            let { message: t } = a4(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(t);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            let { message: t } = a4(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: t } = a4(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(t);
          }
          if (sM(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: t } = a4("EXPIRED", `proposal id: ${e}`);
            throw Error(t);
          }
        }
      }
      class pA extends dN {
        constructor(e, t) {
          super(e, t, "proposal", po), (this.core = e), (this.logger = t);
        }
      }
      class pC extends dN {
        constructor(e, t) {
          super(e, t, "session", po), (this.core = e), (this.logger = t);
        }
      }
      class pT extends dN {
        constructor(e, t) {
          super(e, t, "request", po, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class pN extends dN {
        constructor(e, t) {
          super(e, t, "authKeys", py, () => pm),
            (this.core = e),
            (this.logger = t);
        }
      }
      class pR extends dN {
        constructor(e, t) {
          super(e, t, "pairingTopics", py), (this.core = e), (this.logger = t);
        }
      }
      class pj extends dN {
        constructor(e, t) {
          super(e, t, "requests", py, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      var pL = Object.defineProperty,
        pU = (e, t, r) =>
          t in e
            ? pL(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        pk = (e, t, r) => pU(e, "symbol" != typeof t ? t + "" : t, r);
      class pB {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            pk(this, "authKeys"),
            pk(this, "pairingTopics"),
            pk(this, "requests"),
            (this.authKeys = new pN(this.core, this.logger)),
            (this.pairingTopics = new pR(this.core, this.logger)),
            (this.requests = new pj(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      }
      var pq = Object.defineProperty,
        pM = (e, t, r) =>
          t in e
            ? pq(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p$ = (e, t, r) => pM(e, "symbol" != typeof t ? t + "" : t, r);
      class pz extends lP {
        constructor(e) {
          super(e),
            p$(this, "protocol", "wc"),
            p$(this, "version", 2),
            p$(this, "name", pa.name),
            p$(this, "metadata"),
            p$(this, "core"),
            p$(this, "logger"),
            p$(this, "events", new b.EventEmitter()),
            p$(this, "engine"),
            p$(this, "session"),
            p$(this, "proposal"),
            p$(this, "pendingRequest"),
            p$(this, "auth"),
            p$(this, "signConfig"),
            p$(this, "on", (e, t) => this.events.on(e, t)),
            p$(this, "once", (e, t) => this.events.once(e, t)),
            p$(this, "off", (e, t) => this.events.off(e, t)),
            p$(this, "removeListener", (e, t) =>
              this.events.removeListener(e, t)
            ),
            p$(this, "removeAllListeners", (e) =>
              this.events.removeAllListeners(e)
            ),
            p$(this, "connect", async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "pair", async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "approve", async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "reject", async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "update", async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "extend", async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "request", async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "respond", async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "ping", async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "emit", async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "disconnect", async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "find", (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "getPendingSessionRequests", () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "authenticate", async (e, t) => {
              try {
                return await this.engine.authenticate(e, t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "formatAuthMessage", (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "approveSessionAuthenticate", async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            p$(this, "rejectSessionAuthenticate", async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || pa.name),
            (this.metadata = (function (e) {
              var t, r;
              let i = sC();
              try {
                return (
                  null != e &&
                    e.url &&
                    i.url &&
                    e.url !== i.url &&
                    (console.warn(
                      `The configured WalletConnect 'metadata.url':${e.url} differs from the actual page url:${i.url}. This is probably unintended and can lead to issues.`
                    ),
                    (e.url = i.url)),
                  null != (t = e?.icons) &&
                    t.length &&
                    e.icons.length > 0 &&
                    (e.icons = e.icons.filter((e) => "" !== e)),
                  sI(s_(s_({}, i), e), {
                    url: e?.url || i.url,
                    name: e?.name || i.name,
                    description: e?.description || i.description,
                    icons:
                      null != (r = e?.icons) && r.length && e.icons.length > 0
                        ? e.icons
                        : i.icons,
                  })
                );
              } catch (t) {
                return console.warn("Error populating app metadata", t), e || i;
              }
            })(e?.metadata)),
            (this.signConfig = e?.signConfig);
          let t =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : cJ()(li({ level: e?.logger || pa.logger }));
          (this.core = e?.core || new ps(e)),
            (this.logger = ln(t, this.name)),
            (this.session = new pC(this.core, this.logger)),
            (this.proposal = new pA(this.core, this.logger)),
            (this.pendingRequest = new pT(this.core, this.logger)),
            (this.engine = new px(this)),
            (this.auth = new pB(this.core, this.logger));
        }
        static async init(e) {
          let t = new pz(e);
          return await t.initialize(), t;
        }
        get context() {
          return ls(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info("SignClient Initialization Success"),
              setTimeout(() => {
                this.engine.processRelayMessageCache();
              }, (0, T.toMiliseconds)(T.ONE_SECOND));
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      var pF = r(80699),
        pH = r.n(pF),
        pV = Object.defineProperty,
        pK = Object.defineProperties,
        pW = Object.getOwnPropertyDescriptors,
        pG = Object.getOwnPropertySymbols,
        pY = Object.prototype.hasOwnProperty,
        pJ = Object.prototype.propertyIsEnumerable,
        pZ = (e, t, r) =>
          t in e
            ? pV(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        pQ = (e, t) => {
          for (var r in t || (t = {})) pY.call(t, r) && pZ(e, r, t[r]);
          if (pG) for (var r of pG(t)) pJ.call(t, r) && pZ(e, r, t[r]);
          return e;
        },
        pX = (e, t) => pK(e, pW(t));
      let p0 = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class p1 {
        constructor(e, t = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new b.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !lH(e))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            let t = ed(e),
              r = await (
                await pH()(this.url, pX(pQ({}, p0), { body: t }))
              ).json();
            this.onPayload({ data: r });
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        async register(e = this.url) {
          if (!lH(e))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return t(Error("HTTP connection is missing or invalid"));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let t = ed({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
              await pH()(e, pX(pQ({}, p0), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            let e = this.parseError(t);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let t = "string" == typeof e.data ? eu(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          let r = this.parseError(t),
            i = r.message || r.toString(),
            s = lq(e, i);
          this.events.emit("payload", s);
        }
        parseError(e, t = this.url) {
          return lR(e, t, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      var p2 = r(48764).Buffer;
      let p8 = "error",
        p3 = "wc@2:universal_provider:",
        p5 = "https://rpc.walletconnect.org/v1/",
        p6 = "generic",
        p4 = `${p5}bundler`,
        p9 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      function p7() {}
      function fe(e) {
        return null == e || ("object" != typeof e && "function" != typeof e);
      }
      function ft(e) {
        return ArrayBuffer.isView(e) && !(e instanceof DataView);
      }
      function fr(e) {
        return "object" == typeof e && null !== e;
      }
      function fi(e) {
        return Object.getOwnPropertySymbols(e).filter((t) =>
          Object.prototype.propertyIsEnumerable.call(e, t)
        );
      }
      function fs(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(e);
      }
      let fn = "[object String]",
        fo = "[object Number]",
        fa = "[object Boolean]",
        fc = "[object Arguments]";
      function fl(e, t, r, i = new Map(), s) {
        let n = s?.(e, t, r, i);
        if (null != n) return n;
        if (fe(e)) return e;
        if (i.has(e)) return i.get(e);
        if (Array.isArray(e)) {
          let t = Array(e.length);
          i.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = fl(e[n], n, r, i, s);
          return (
            Object.hasOwn(e, "index") && (t.index = e.index),
            Object.hasOwn(e, "input") && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          let t = RegExp(e.source, e.flags);
          return (t.lastIndex = e.lastIndex), t;
        }
        if (e instanceof Map) {
          let t = new Map();
          for (let [n, o] of (i.set(e, t), e)) t.set(n, fl(o, n, r, i, s));
          return t;
        }
        if (e instanceof Set) {
          let t = new Set();
          for (let n of (i.set(e, t), e)) t.add(fl(n, void 0, r, i, s));
          return t;
        }
        if ("u" > typeof p2 && p2.isBuffer(e)) return e.subarray();
        if (ft(e)) {
          let t = new (Object.getPrototypeOf(e).constructor)(e.length);
          i.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = fl(e[n], n, r, i, s);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return i.set(e, t), fh(t, e, r, i, s), t;
        }
        if ("u" > typeof File && e instanceof File) {
          let t = new File([e], e.name, { type: e.type });
          return i.set(e, t), fh(t, e, r, i, s), t;
        }
        if (e instanceof Blob) {
          let t = new Blob([e], { type: e.type });
          return i.set(e, t), fh(t, e, r, i, s), t;
        }
        if (e instanceof Error) {
          let t = new e.constructor();
          return (
            i.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            fh(t, e, r, i, s),
            t
          );
        }
        if (
          "object" == typeof e &&
          (function (e) {
            switch (fs(e)) {
              case fc:
              case "[object Array]":
              case "[object ArrayBuffer]":
              case "[object DataView]":
              case fa:
              case "[object Date]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Map]":
              case fo:
              case "[object Object]":
              case "[object RegExp]":
              case "[object Set]":
              case fn:
              case "[object Symbol]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          let t = Object.create(Object.getPrototypeOf(e));
          return i.set(e, t), fh(t, e, r, i, s), t;
        }
        return e;
      }
      function fh(e, t, r = e, i, s) {
        let n = [...Object.keys(t), ...fi(t)];
        for (let o = 0; o < n.length; o++) {
          let a = n[o],
            c = Object.getOwnPropertyDescriptor(e, a);
          (null == c || c.writable) && (e[a] = fl(t[a], a, r, i, s));
        }
      }
      function fu(e) {
        var t;
        return (
          (t = (t, r, i, s) => {
            let n = void 0;
            if (null != n) return n;
            if ("object" == typeof e)
              switch (Object.prototype.toString.call(e)) {
                case fo:
                case fn:
                case fa: {
                  let t = new e.constructor(e?.valueOf());
                  return fh(t, e), t;
                }
                case fc: {
                  let t = {};
                  return (
                    fh(t, e),
                    (t.length = e.length),
                    (t[Symbol.iterator] = e[Symbol.iterator]),
                    t
                  );
                }
                default:
                  return;
              }
          }),
          fl(e, void 0, e, new Map(), t)
        );
      }
      function fd(e) {
        return (
          null !== e && "object" == typeof e && "[object Arguments]" === fs(e)
        );
      }
      var fp = Object.defineProperty,
        ff = Object.defineProperties,
        fg = Object.getOwnPropertyDescriptors,
        fy = Object.getOwnPropertySymbols,
        fm = Object.prototype.hasOwnProperty,
        fb = Object.prototype.propertyIsEnumerable,
        fw = (e, t, r) =>
          t in e
            ? fp(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        fv = (e, t) => {
          for (var r in t || (t = {})) fm.call(t, r) && fw(e, r, t[r]);
          if (fy) for (var r of fy(t)) fb.call(t, r) && fw(e, r, t[r]);
          return e;
        },
        fE = (e, t) => ff(e, fg(t));
      function f_(e, t, r) {
        var i;
        let s = sd(e);
        return (
          (null == (i = t.rpcMap) ? void 0 : i[s.reference]) ||
          `${p5}?chainId=${s.namespace}:${s.reference}&projectId=${r}`
        );
      }
      function fI(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function fD(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function fS(e = {}, t = {}) {
        let r = fP(e),
          i = fP(t);
        return (function (e, ...t) {
          return (function (e, ...t) {
            let r = t.slice(0, -1),
              i = t[t.length - 1],
              s = e;
            for (let e = 0; e < r.length; e++) {
              let t = r[e];
              s = (function e(t, r, i, s) {
                if (
                  (fe(t) && (t = Object(t)), null == r || "object" != typeof r)
                )
                  return t;
                if (s.has(r))
                  return (function (e) {
                    if (fe(e)) return e;
                    if (
                      Array.isArray(e) ||
                      ft(e) ||
                      e instanceof ArrayBuffer ||
                      ("u" > typeof SharedArrayBuffer &&
                        e instanceof SharedArrayBuffer)
                    )
                      return e.slice(0);
                    let t = Object.getPrototypeOf(e),
                      r = t.constructor;
                    if (
                      e instanceof Date ||
                      e instanceof Map ||
                      e instanceof Set
                    )
                      return new r(e);
                    if (e instanceof RegExp) {
                      let t = new r(e);
                      return (t.lastIndex = e.lastIndex), t;
                    }
                    if (e instanceof DataView) return new r(e.buffer.slice(0));
                    if (e instanceof Error) {
                      let t = new r(e.message);
                      return (
                        (t.stack = e.stack),
                        (t.name = e.name),
                        (t.cause = e.cause),
                        t
                      );
                    }
                    if ("u" > typeof File && e instanceof File)
                      return new r([e], e.name, {
                        type: e.type,
                        lastModified: e.lastModified,
                      });
                    if ("object" == typeof e) {
                      let r = Object.create(t);
                      return Object.assign(r, e);
                    }
                    return e;
                  })(s.get(r));
                if ((s.set(r, t), Array.isArray(r))) {
                  r = r.slice();
                  for (let e = 0; e < r.length; e++) r[e] = r[e] ?? void 0;
                }
                let n = [...Object.keys(r), ...fi(r)];
                for (let o = 0; o < n.length; o++) {
                  let a = n[o],
                    c = r[a],
                    l = t[a];
                  if (
                    (fd(c) && (c = { ...c }),
                    fd(l) && (l = { ...l }),
                    "u" > typeof p2 && p2.isBuffer(c) && (c = fu(c)),
                    Array.isArray(c))
                  ) {
                    if ("object" == typeof l && null != l) {
                      let e = [],
                        t = Reflect.ownKeys(l);
                      for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        e[i] = l[i];
                      }
                      l = e;
                    } else l = [];
                  }
                  let h = i(l, c, a, t, r, s);
                  null != h
                    ? (t[a] = h)
                    : Array.isArray(c) || (fr(l) && fr(c))
                    ? (t[a] = e(l, c, i, s))
                    : null == l &&
                      (function (e) {
                        if ("object" != typeof e || null == e) return !1;
                        if (null === Object.getPrototypeOf(e)) return !0;
                        if (
                          "[object Object]" !==
                          Object.prototype.toString.call(e)
                        ) {
                          let t = e[Symbol.toStringTag];
                          return (
                            !!(
                              null != t &&
                              Object.getOwnPropertyDescriptor(
                                e,
                                Symbol.toStringTag
                              )?.writable
                            ) && e.toString() === `[object ${t}]`
                          );
                        }
                        let t = e;
                        for (; null !== Object.getPrototypeOf(t); )
                          t = Object.getPrototypeOf(t);
                        return Object.getPrototypeOf(e) === t;
                      })(c)
                    ? (t[a] = e({}, c, i, s))
                    : null == l && ft(c)
                    ? (t[a] = fu(c))
                    : (void 0 === l || void 0 !== c) && (t[a] = c);
                }
                return t;
              })(s, t, i, new Map());
            }
            return s;
          })(e, ...t, p7);
        })(r, i);
      }
      function fP(e) {
        var t, r, i, s;
        let n = {};
        if (!ce(e)) return n;
        for (let [o, a] of Object.entries(e)) {
          let e = a2(o) ? [o] : a.chains,
            c = a.methods || [],
            l = a.events || [],
            h = a.rpcMap || {},
            u = a8(o);
          n[u] = fE(fv(fv({}, n[u]), a), {
            chains: sz(e, null == (t = n[u]) ? void 0 : t.chains),
            methods: sz(c, null == (r = n[u]) ? void 0 : r.methods),
            events: sz(l, null == (i = n[u]) ? void 0 : i.events),
            rpcMap: fv(fv({}, h), null == (s = n[u]) ? void 0 : s.rpcMap),
          });
        }
        return n;
      }
      function fO(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function fx(e) {
        let t = {};
        for (let [r, i] of Object.entries(e)) {
          let e = i.methods || [],
            s = i.events || [],
            n = i.accounts || [],
            o = a2(r) ? [r] : i.chains ? i.chains : fD(i.accounts);
          t[r] = { chains: o, methods: e, events: s, accounts: n };
        }
        return t;
      }
      function fA(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let fC = {},
        fT = (e) => fC[e],
        fN = (e, t) => {
          fC[e] = t;
        };
      var fR = Object.defineProperty,
        fj = (e, t, r) =>
          t in e
            ? fR(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        fL = (e, t, r) => fj(e, "symbol" != typeof t ? t + "" : t, r);
      class fU {
        constructor(e) {
          fL(this, "name", "polkadot"),
            fL(this, "client"),
            fL(this, "httpProviders"),
            fL(this, "events"),
            fL(this, "namespace"),
            fL(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(p9.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = fI(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var fk = Object.defineProperty,
        fB = Object.defineProperties,
        fq = Object.getOwnPropertyDescriptors,
        fM = Object.getOwnPropertySymbols,
        f$ = Object.prototype.hasOwnProperty,
        fz = Object.prototype.propertyIsEnumerable,
        fF = (e, t, r) =>
          t in e
            ? fk(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        fH = (e, t) => {
          for (var r in t || (t = {})) f$.call(t, r) && fF(e, r, t[r]);
          if (fM) for (var r of fM(t)) fz.call(t, r) && fF(e, r, t[r]);
          return e;
        },
        fV = (e, t) => fB(e, fq(t)),
        fK = (e, t, r) => fF(e, "symbol" != typeof t ? t + "" : t, r);
      class fW {
        constructor(e) {
          fK(this, "name", "eip155"),
            fK(this, "client"),
            fK(this, "chainId"),
            fK(this, "namespace"),
            fK(this, "httpProviders"),
            fK(this, "events"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
              return await this.getCapabilities(e);
            case "wallet_getCallsStatus":
              return await this.getCallStatus(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(p9.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          let r =
            t ||
            f_(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new lZ(new p1(r, fT("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = parseInt(fI(t));
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        async handleSwitchChain(e) {
          var t, r;
          let i = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : "0x0";
          i = i.startsWith("0x") ? i : `0x${i}`;
          let s = parseInt(i, 16);
          if (this.isChainApproved(s)) this.setDefaultChain(`${s}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: i }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${s}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${s}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var t, r, i;
          let s =
            null == (r = null == (t = e.request) ? void 0 : t.params)
              ? void 0
              : r[0];
          if (!s)
            throw Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          let n = this.client.session.get(e.topic),
            o =
              (null == (i = n?.sessionProperties) ? void 0 : i.capabilities) ||
              {};
          if (null != o && o[s]) return o?.[s];
          let a = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: fV(fH({}, n.sessionProperties || {}), {
                capabilities: fV(fH({}, o || {}), { [s]: a }),
              }),
            });
          } catch (e) {
            console.warn("Failed to update session with capabilities", e);
          }
          return a;
        }
        async getCallStatus(e) {
          var t, r;
          let i = this.client.session.get(e.topic),
            s = null == (t = i.sessionProperties) ? void 0 : t.bundler_name;
          if (s) {
            let t = this.getBundlerUrl(e.chainId, s);
            try {
              return await this.getUserOperationReceipt(t, e);
            } catch (e) {
              console.warn("Failed to fetch call status from bundler", e, t);
            }
          }
          let n = null == (r = i.sessionProperties) ? void 0 : r.bundler_url;
          if (n)
            try {
              return await this.getUserOperationReceipt(n, e);
            } catch (e) {
              console.warn(
                "Failed to fetch call status from custom bundler",
                e,
                n
              );
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw Error("Fetching call status not approved by the wallet.");
        }
        async getUserOperationReceipt(e, t) {
          var r;
          let i = new URL(e),
            s = await fetch(i, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(
                lk("eth_getUserOperationReceipt", [
                  null == (r = t.request.params) ? void 0 : r[0],
                ])
              ),
            });
          if (!s.ok)
            throw Error(`Failed to fetch user operation receipt - ${s.status}`);
          return await s.json();
        }
        getBundlerUrl(e, t) {
          return `${p4}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`;
        }
      }
      var fG = Object.defineProperty,
        fY = (e, t, r) =>
          t in e
            ? fG(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        fJ = (e, t, r) => fY(e, "symbol" != typeof t ? t + "" : t, r);
      class fZ {
        constructor(e) {
          fJ(this, "name", "solana"),
            fJ(this, "client"),
            fJ(this, "httpProviders"),
            fJ(this, "events"),
            fJ(this, "namespace"),
            fJ(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(p9.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = fI(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var fQ = Object.defineProperty,
        fX = (e, t, r) =>
          t in e
            ? fQ(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        f0 = (e, t, r) => fX(e, "symbol" != typeof t ? t + "" : t, r);
      class f1 {
        constructor(e) {
          f0(this, "name", "cosmos"),
            f0(this, "client"),
            f0(this, "httpProviders"),
            f0(this, "events"),
            f0(this, "namespace"),
            f0(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              p9.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = fI(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var f2 = Object.defineProperty,
        f8 = (e, t, r) =>
          t in e
            ? f2(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        f3 = (e, t, r) => f8(e, "symbol" != typeof t ? t + "" : t, r);
      class f5 {
        constructor(e) {
          f3(this, "name", "algorand"),
            f3(this, "client"),
            f3(this, "httpProviders"),
            f3(this, "events"),
            f3(this, "namespace"),
            f3(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (!this.httpProviders[e]) {
            let r =
              t ||
              f_(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          (this.chainId = e),
            this.events.emit(
              p9.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace, this.client.core.projectId);
          return typeof r > "u"
            ? void 0
            : new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var f6 = Object.defineProperty,
        f4 = (e, t, r) =>
          t in e
            ? f6(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        f9 = (e, t, r) => f4(e, "symbol" != typeof t ? t + "" : t, r);
      class f7 {
        constructor(e) {
          f9(this, "name", "cip34"),
            f9(this, "client"),
            f9(this, "httpProviders"),
            f9(this, "events"),
            f9(this, "namespace"),
            f9(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              p9.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              let r = this.getCardanoRPCUrl(t),
                i = fI(t);
              e[i] = this.createHttpProvider(i, r);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        getCardanoRPCUrl(e) {
          let t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || this.getCardanoRPCUrl(e);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var ge = Object.defineProperty,
        gt = (e, t, r) =>
          t in e
            ? ge(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        gr = (e, t, r) => gt(e, "symbol" != typeof t ? t + "" : t, r);
      class gi {
        constructor(e) {
          gr(this, "name", "elrond"),
            gr(this, "client"),
            gr(this, "httpProviders"),
            gr(this, "events"),
            gr(this, "namespace"),
            gr(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(p9.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = fI(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var gs = Object.defineProperty,
        gn = (e, t, r) =>
          t in e
            ? gs(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        go = (e, t, r) => gn(e, "symbol" != typeof t ? t + "" : t, r);
      class ga {
        constructor(e) {
          go(this, "name", "multiversx"),
            go(this, "client"),
            go(this, "httpProviders"),
            go(this, "events"),
            go(this, "namespace"),
            go(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(p9.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              let i = fI(t);
              e[i] = this.createHttpProvider(
                i,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var gc = Object.defineProperty,
        gl = (e, t, r) =>
          t in e
            ? gc(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        gh = (e, t, r) => gl(e, "symbol" != typeof t ? t + "" : t, r);
      class gu {
        constructor(e) {
          gh(this, "name", "near"),
            gh(this, "client"),
            gh(this, "httpProviders"),
            gh(this, "events"),
            gh(this, "namespace"),
            gh(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let r = t || f_(`${this.name}:${e}`, this.namespace);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(
            p9.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var r;
              e[t] = this.createHttpProvider(
                t,
                null == (r = this.namespace.rpcMap) ? void 0 : r[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace);
          return typeof r > "u"
            ? void 0
            : new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var gd = Object.defineProperty,
        gp = (e, t, r) =>
          t in e
            ? gd(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        gf = (e, t, r) => gp(e, "symbol" != typeof t ? t + "" : t, r);
      class gg {
        constructor(e) {
          gf(this, "name", "tezos"),
            gf(this, "client"),
            gf(this, "httpProviders"),
            gf(this, "events"),
            gf(this, "namespace"),
            gf(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let r = t || f_(`${this.name}:${e}`, this.namespace);
            if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, r);
          }
          this.events.emit(
            p9.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((t) => {
              e[t] = this.createHttpProvider(t);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace);
          return typeof r > "u" ? void 0 : new lZ(new p1(r));
        }
      }
      var gy = Object.defineProperty,
        gm = (e, t, r) =>
          t in e
            ? gy(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        gb = (e, t, r) => gm(e, "symbol" != typeof t ? t + "" : t, r);
      class gw {
        constructor(e) {
          gb(this, "name", p6),
            gb(this, "client"),
            gb(this, "httpProviders"),
            gb(this, "events"),
            gb(this, "namespace"),
            gb(this, "chainId"),
            (this.namespace = e.namespace),
            (this.events = fT("events")),
            (this.client = fT("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set(
                (this.namespace.accounts || []).concat(e.accounts || [])
              ),
            ]),
            (this.namespace.methods = [
              ...new Set(
                (this.namespace.methods || []).concat(e.methods || [])
              ),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(p9.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, t;
          let r = {};
          return (
            null == (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
              t.forEach((e) => {
                let t = sd(e);
                r[`${t.namespace}:${t.reference}`] = this.createHttpProvider(e);
              }),
            r
          );
        }
        getHttpProvider(e) {
          let t = this.httpProviders[e];
          if (typeof t > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return t;
        }
        setHttpProvider(e, t) {
          let r = this.createHttpProvider(e, t);
          r && (this.httpProviders[e] = r);
        }
        createHttpProvider(e, t) {
          let r = t || f_(e, this.namespace, this.client.core.projectId);
          if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
          return new lZ(new p1(r, fT("disableProviderPing")));
        }
      }
      var gv = Object.defineProperty,
        gE = Object.defineProperties,
        g_ = Object.getOwnPropertyDescriptors,
        gI = Object.getOwnPropertySymbols,
        gD = Object.prototype.hasOwnProperty,
        gS = Object.prototype.propertyIsEnumerable,
        gP = (e, t, r) =>
          t in e
            ? gv(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        gO = (e, t) => {
          for (var r in t || (t = {})) gD.call(t, r) && gP(e, r, t[r]);
          if (gI) for (var r of gI(t)) gS.call(t, r) && gP(e, r, t[r]);
          return e;
        },
        gx = (e, t) => gE(e, g_(t)),
        gA = (e, t, r) => gP(e, "symbol" != typeof t ? t + "" : t, r);
      class gC {
        constructor(e) {
          gA(this, "client"),
            gA(this, "namespaces"),
            gA(this, "optionalNamespaces"),
            gA(this, "sessionProperties"),
            gA(this, "scopedProperties"),
            gA(this, "events", new (w())()),
            gA(this, "rpcProviders", {}),
            gA(this, "session"),
            gA(this, "providerOpts"),
            gA(this, "logger"),
            gA(this, "uri"),
            gA(this, "disableProviderPing", !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : cJ()(li({ level: e?.logger || p8 }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let t = new gC(e);
          return await t.initialize(), t;
        }
        async request(e, t, r) {
          let [i, s] = this.validateChain(t);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(i).request({
            request: gO({}, e),
            chainId: `${i}:${s}`,
            topic: this.session.topic,
            expiry: r,
          });
        }
        sendAsync(e, t, r, i) {
          let s = new Date().getTime();
          this.request(e, r, i)
            .then((e) => t(null, lB(s, e)))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: a9("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, t) {
          if (!this.client) throw Error("Sign Client not initialized");
          this.setNamespaces(e), await this.cleanupPendingPairings();
          let { uri: r, response: i } = await this.client.authenticate(e, t);
          r && ((this.uri = r), this.events.emit("display_uri", r));
          let s = await i();
          if (((this.session = s.session), this.session)) {
            let e = fx(this.session.namespaces);
            (this.namespaces = fS(this.namespaces, e)),
              await this.persist("namespaces", this.namespaces),
              this.onConnect();
          }
          return s;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          let { uri: t, approval: r } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          t && ((this.uri = t), this.events.emit("display_uri", t));
          let i = await r();
          this.session = i;
          let s = fx(i.namespaces);
          return (
            (this.namespaces = fS(this.namespaces, s)),
            await this.persist("namespaces", this.namespaces),
            await this.persist("optionalNamespaces", this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            let [r, i] = this.validateChain(e),
              s = this.getProvider(r);
            s.name === p6
              ? s.setDefaultChain(`${r}:${i}`, t)
              : s.setDefaultChain(i, t);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let t = this.client.pairing.getAll();
          if (a7(t)) {
            for (let r of t)
              e.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${t.length}`);
          }
        }
        abortPairingAttempt() {
          this.logger.warn(
            "abortPairingAttempt is deprecated. This is now a no-op."
          );
        }
        async checkStorage() {
          (this.namespaces = (await this.getFromStore("namespaces")) || {}),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.session && this.createProviders();
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          var e, t;
          if (
            ((this.client =
              this.providerOpts.client ||
              (await pz.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || p8,
                relayUrl:
                  this.providerOpts.relayUrl || "wss://relay.walletconnect.org",
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled,
              }))),
            this.providerOpts.session)
          )
            try {
              this.session = this.client.session.get(
                this.providerOpts.session.topic
              );
            } catch (r) {
              throw (
                (this.logger.error("Failed to get session", r),
                Error(
                  `The provided session: ${
                    null ==
                    (t = null == (e = this.providerOpts) ? void 0 : e.session)
                      ? void 0
                      : t.topic
                  } doesn't exist in the Sign client`
                ))
              );
            }
          else {
            let e = this.client.session.getAll();
            this.session = e[0];
          }
          this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => a8(e))),
          ];
          fN("client", this.client),
            fN("events", this.events),
            fN("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let t = (function (e, t) {
                  let r = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!r.length) return [];
                  let i = [];
                  return (
                    r.forEach((e) => {
                      let r = t.namespaces[e].accounts;
                      i.push(...r);
                    }),
                    i
                  );
                })(e, this.session),
                r = fD(t),
                i = fS(this.namespaces, this.optionalNamespaces),
                s = gx(gO({}, i[e]), { accounts: t, chains: r });
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new fW({ namespace: s });
                  break;
                case "algorand":
                  this.rpcProviders[e] = new f5({ namespace: s });
                  break;
                case "solana":
                  this.rpcProviders[e] = new fZ({ namespace: s });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new f1({ namespace: s });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new fU({ namespace: s });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new f7({ namespace: s });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new gi({ namespace: s });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new ga({ namespace: s });
                  break;
                case "near":
                  this.rpcProviders[e] = new gu({ namespace: s });
                  break;
                case "tezos":
                  this.rpcProviders[e] = new gg({ namespace: s });
                  break;
                default:
                  this.rpcProviders[p6]
                    ? this.rpcProviders[p6].updateNamespace(s)
                    : (this.rpcProviders[p6] = new gw({ namespace: s }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            var t;
            let { topic: r } = e;
            r === (null == (t = this.session) ? void 0 : t.topic) &&
              this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              var t;
              let { params: r, topic: i } = e;
              if (i !== (null == (t = this.session) ? void 0 : t.topic)) return;
              let { event: s } = r;
              if ("accountsChanged" === s.name) {
                let e = s.data;
                e && a7(e) && this.events.emit("accountsChanged", e.map(fO));
              } else if ("chainChanged" === s.name) {
                let e = r.chainId,
                  t = r.event.data,
                  i = a8(e),
                  s = fA(e) !== fA(t) ? `${i}:${fA(t)}` : e;
                this.onChainChanged(s);
              } else this.events.emit(s.name, s.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: t }) => {
              var r, i;
              if (e !== (null == (r = this.session) ? void 0 : r.topic)) return;
              let { namespaces: s } = t,
                n = null == (i = this.client) ? void 0 : i.session.get(e);
              (this.session = gx(gO({}, n), { namespaces: s })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: t });
            }),
            this.client.on("session_delete", async (e) => {
              var t;
              e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
                (await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  gx(gO({}, a9("USER_DISCONNECTED")), { data: e.topic })
                ));
            }),
            this.on(p9.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[p6];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: t,
            optionalNamespaces: r,
            sessionProperties: i,
            scopedProperties: s,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = i),
            (this.scopedProperties = s);
        }
        validateChain(e) {
          let [t, r] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, r];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => a8(e))
              .includes(t)
          )
            throw Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && r) return [t, r];
          let i = a8(Object.keys(this.namespaces)[0]),
            s = this.rpcProviders[i].getDefaultChain();
          return [i, s];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        async onChainChanged(e, t = !1) {
          if (!this.namespaces) return;
          let [r, i] = this.validateChain(e);
          if (!i) return;
          this.updateNamespaceChain(r, i), this.events.emit("chainChanged", i);
          let s = this.getProvider(r).getDefaultChain();
          t || this.getProvider(r).setDefaultChain(i),
            this.emitAccountsChangedOnChainChange({
              namespace: r,
              previousChainId: s,
              newChainId: e,
            }),
            await this.persist("namespaces", this.namespaces);
        }
        emitAccountsChangedOnChainChange({
          namespace: e,
          previousChainId: t,
          newChainId: r,
        }) {
          var i, s;
          try {
            if (t === r) return;
            let n =
              null ==
              (s = null == (i = this.session) ? void 0 : i.namespaces[e])
                ? void 0
                : s.accounts;
            if (!n) return;
            let o = n.filter((e) => e.includes(`${r}:`)).map(fO);
            if (!a7(o)) return;
            this.events.emit("accountsChanged", o);
          } catch (e) {
            this.logger.warn(
              "Failed to emit accountsChanged on chain change",
              e
            );
          }
        }
        updateNamespaceChain(e, t) {
          if (!this.namespaces) return;
          let r = this.namespaces[e] ? e : `${e}:${t}`;
          this.namespaces[r]
            ? this.namespaces[r] && (this.namespaces[r].defaultChain = t)
            : (this.namespaces[r] = {
                chains: [],
                methods: [],
                events: [],
                defaultChain: t,
              });
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            await this.deleteFromStore("namespaces"),
            await this.deleteFromStore("optionalNamespaces"),
            await this.deleteFromStore("sessionProperties"),
            (this.session = void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 }),
            await this.cleanupStorage();
        }
        async persist(e, t) {
          var r;
          let i = (null == (r = this.session) ? void 0 : r.topic) || "";
          await this.client.core.storage.setItem(`${p3}/${e}${i}`, t);
        }
        async getFromStore(e) {
          var t;
          let r = (null == (t = this.session) ? void 0 : t.topic) || "";
          return await this.client.core.storage.getItem(`${p3}/${e}${r}`);
        }
        async deleteFromStore(e) {
          var t;
          let r = (null == (t = this.session) ? void 0 : t.topic) || "";
          await this.client.core.storage.removeItem(`${p3}/${e}${r}`);
        }
        async cleanupStorage() {
          var e;
          try {
            if ((null == (e = this.client) ? void 0 : e.session.length) > 0)
              return;
            let t = await this.client.core.storage.getKeys();
            for (let e of t)
              e.startsWith(p3) &&
                (await this.client.core.storage.removeItem(e));
          } catch (e) {
            this.logger.warn("Failed to cleanup storage", e);
          }
        }
      }
      let gT = ["eth_sendTransaction", "personal_sign"],
        gN = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
          "wallet_sendCalls",
          "wallet_getCapabilities",
          "wallet_getCallsStatus",
          "wallet_showCallsStatus",
        ],
        gR = ["chainChanged", "accountsChanged"],
        gj = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var gL = Object.defineProperty,
        gU = Object.defineProperties,
        gk = Object.getOwnPropertyDescriptors,
        gB = Object.getOwnPropertySymbols,
        gq = Object.prototype.hasOwnProperty,
        gM = Object.prototype.propertyIsEnumerable,
        g$ = (e, t, r) =>
          t in e
            ? gL(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        gz = (e, t) => {
          for (var r in t || (t = {})) gq.call(t, r) && g$(e, r, t[r]);
          if (gB) for (var r of gB(t)) gM.call(t, r) && g$(e, r, t[r]);
          return e;
        },
        gF = (e, t) => gU(e, gk(t)),
        gH = (e, t, r) => g$(e, "symbol" != typeof t ? t + "" : t, r);
      function gV(e) {
        return Number(e[0].split(":")[1]);
      }
      function gK(e) {
        return `0x${e.toString(16)}`;
      }
      class gW {
        constructor() {
          gH(this, "events", new b.EventEmitter()),
            gH(this, "namespace", "eip155"),
            gH(this, "accounts", []),
            gH(this, "signer"),
            gH(this, "chainId", 1),
            gH(this, "modal"),
            gH(this, "rpc"),
            gH(this, "STORAGE_KEY", "wc@2:ethereum_provider:"),
            gH(this, "on", (e, t) => (this.events.on(e, t), this)),
            gH(this, "once", (e, t) => (this.events.once(e, t), this)),
            gH(
              this,
              "removeListener",
              (e, t) => (this.events.removeListener(e, t), this)
            ),
            gH(this, "off", (e, t) => (this.events.off(e, t), this)),
            gH(this, "parseAccount", (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e
            ),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let t = new gW();
          return await t.initialize(e), t;
        }
        async request(e, t) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            t
          );
        }
        sendAsync(e, t, r) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: t, optional: r } = (function (e) {
            let {
              chains: t,
              optionalChains: r,
              methods: i,
              optionalMethods: s,
              events: n,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!a7(t)) throw Error("Invalid chains");
            let c = {
                chains: t,
                methods: i || gT,
                events: n || gR,
                rpcMap: gz({}, t.length ? { [gV(t)]: a[gV(t)] } : {}),
              },
              l = n?.filter((e) => !gR.includes(e)),
              h = i?.filter((e) => !gT.includes(e));
            if (
              !r &&
              !o &&
              !s &&
              !(null != l && l.length) &&
              !(null != h && h.length)
            )
              return { required: t.length ? c : void 0 };
            let u = (l?.length && h?.length) || !r,
              d = {
                chains: [...new Set(u ? c.chains.concat(r || []) : r)],
                methods: [
                  ...new Set(c.methods.concat(null != s && s.length ? s : gN)),
                ],
                events: [
                  ...new Set(c.events.concat(null != o && o.length ? o : gj)),
                ],
                rpcMap: a,
              };
            return {
              required: t.length ? c : void 0,
              optional: r.length ? d : void 0,
            };
          })(this.rpc);
          try {
            let i = await new Promise(async (i, s) => {
              var n;
              this.rpc.showQrModal &&
                (null == (n = this.modal) ||
                  n.subscribeModal((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      s(Error("Connection request reset. Please try again.")));
                  }));
              let o =
                null != e && e.scopedProperties
                  ? { [this.namespace]: e.scopedProperties }
                  : void 0;
              await this.signer
                .connect(
                  gF(
                    gz(
                      { namespaces: gz({}, t && { [this.namespace]: t }) },
                      r && { optionalNamespaces: { [this.namespace]: r } }
                    ),
                    { pairingTopic: e?.pairingTopic, scopedProperties: o }
                  )
                )
                .then((e) => {
                  i(e);
                })
                .catch((e) => {
                  s(Error(e.message));
                });
            });
            if (!i) return;
            let s = sp(i.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
              this.setAccounts(s),
              this.events.emit("connect", { chainId: gK(this.chainId) });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async authenticate(e, t) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts({ chains: e?.chains });
          try {
            let r = await new Promise(async (r, i) => {
                var s;
                this.rpc.showQrModal &&
                  (null == (s = this.modal) ||
                    s.subscribeModal((e) => {
                      e.open ||
                        this.signer.session ||
                        (this.signer.abortPairingAttempt(),
                        i(
                          Error("Connection request reset. Please try again.")
                        ));
                    })),
                  await this.signer
                    .authenticate(gF(gz({}, e), { chains: this.rpc.chains }), t)
                    .then((e) => {
                      r(e);
                    })
                    .catch((e) => {
                      i(Error(e.message));
                    });
              }),
              i = r.session;
            if (i) {
              let e = sp(i.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
                this.setAccounts(e),
                this.events.emit("connect", { chainId: gK(this.chainId) });
            }
            return r;
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: t } = e,
              { event: r } = t;
            "accountsChanged" === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === r.name
              ? this.setChainId(this.formatChainId(r.data))
              : this.events.emit(r.name, r.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("accountsChanged", (e) => {
              (this.accounts = this.parseAccounts(e)),
                this.events.emit("accountsChanged", this.accounts);
            }),
            this.signer.on("chainChanged", (e) => {
              let t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", gK(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  gF(gz({}, a9("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, r;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (r = this.modal) || r.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", gK(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          let [t, r, i] = e.split(":");
          return { chainId: `${t}:${r}`, address: i };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, r;
          let i = null != (t = e?.chains) ? t : [],
            s = null != (r = e?.optionalChains) ? r : [],
            n = i.concat(s);
          if (!n.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let o = i.length ? e?.methods || gT : [],
            a = i.length ? e?.events || gR : [],
            c = e?.optionalMethods || [],
            l = e?.optionalEvents || [],
            h = e?.rpcMap || this.buildRpcMap(n, e.projectId),
            u = e?.qrModalOptions || void 0;
          return {
            chains: i?.map((e) => this.formatChainId(e)),
            optionalChains: s.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: l,
            rpcMap: h,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: u,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          let r = {};
          return (
            e.forEach((e) => {
              r[e] = this.getRpcUrl(e, t);
            }),
            r
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? gV(this.rpc.chains)
              : gV(this.rpc.optionalChains)),
            (this.signer = await gC.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storage: e.storage,
              storageOptions: e.storageOptions,
              customStoragePrefix: e.customStoragePrefix,
              telemetryEnabled: e.telemetryEnabled,
              logger: e.logger,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: t } = await r
                .e(9343)
                .then(r.bind(r, 59343));
              e = t;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  gz({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: t, optionalChains: r, rpcMap: i } = e;
          t &&
            a7(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
            })),
            r &&
              a7(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = r?.map((e) => this.formatChainId(e))),
              r.forEach((e) => {
                this.rpc.rpcMap[e] = i?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) ||
            `https://rpc.walletconnect.org/v1/?chainId=eip155:${e}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              let e = await this.signer.client.core.storage.getItem(
                  `${this.STORAGE_KEY}/chainId`
                ),
                t = this.session.namespaces[`${this.namespace}:${e}`]
                  ? this.session.namespaces[`${this.namespace}:${e}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts);
            } catch (e) {
              this.signer.logger.error(
                "Failed to load persisted session, clearing state..."
              ),
                this.signer.logger.error(e),
                await this.disconnect().catch((e) =>
                  this.signer.logger.warn(e)
                );
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      let gG = gW;
    },
    80699: function (e, t, r) {
      var i =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== r.g && r.g),
        s = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = i.DOMException);
          }
          return (e.prototype = i), new e();
        })();
      (function (e) {
        var t =
            (void 0 !== s && s) ||
            ("undefined" != typeof self && self) ||
            (void 0 !== r.g && r.g) ||
            {},
          i = {
            searchParams: "URLSearchParams" in t,
            iterable: "Symbol" in t && "iterator" in Symbol,
            blob:
              "FileReader" in t &&
              "Blob" in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            formData: "FormData" in t,
            arrayBuffer: "ArrayBuffer" in t,
          };
        if (i.arrayBuffer)
          var n = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            o =
              ArrayBuffer.isView ||
              function (e) {
                return e && n.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function a(e) {
          if (
            ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
          )
            throw TypeError(
              'Invalid character in header field name: "' + e + '"'
            );
          return e.toLowerCase();
        }
        function c(e) {
          return "string" != typeof e && (e = String(e)), e;
        }
        function l(e) {
          var t = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            i.iterable &&
              (t[Symbol.iterator] = function () {
                return t;
              }),
            t
          );
        }
        function h(e) {
          (this.map = {}),
            e instanceof h
              ? e.forEach(function (e, t) {
                  this.append(t, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  if (2 != e.length)
                    throw TypeError(
                      "Headers constructor: expected name/value pair to be length 2, found" +
                        e.length
                    );
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (t) {
                  this.append(t, e[t]);
                }, this);
        }
        function u(e) {
          if (!e._noBody) {
            if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
            e.bodyUsed = !0;
          }
        }
        function d(e) {
          return new Promise(function (t, r) {
            (e.onload = function () {
              t(e.result);
            }),
              (e.onerror = function () {
                r(e.error);
              });
          });
        }
        function p(e) {
          var t = new FileReader(),
            r = d(t);
          return t.readAsArrayBuffer(e), r;
        }
        function f(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }
        function g() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = e), e)) {
                if ("string" == typeof e) this._bodyText = e;
                else if (i.blob && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (i.formData && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (
                  i.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e)
                )
                  this._bodyText = e.toString();
                else {
                  var t;
                  i.arrayBuffer &&
                  i.blob &&
                  (t = e) &&
                  DataView.prototype.isPrototypeOf(t)
                    ? ((this._bodyArrayBuffer = f(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : i.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(e) || o(e))
                    ? (this._bodyArrayBuffer = f(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e));
                }
              } else (this._noBody = !0), (this._bodyText = "");
              !this.headers.get("content-type") &&
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : i.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            i.blob &&
              (this.blob = function () {
                var e = u(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
            (this.arrayBuffer = function () {
              if (this._bodyArrayBuffer)
                return (
                  u(this) ||
                  (ArrayBuffer.isView(this._bodyArrayBuffer)
                    ? Promise.resolve(
                        this._bodyArrayBuffer.buffer.slice(
                          this._bodyArrayBuffer.byteOffset,
                          this._bodyArrayBuffer.byteOffset +
                            this._bodyArrayBuffer.byteLength
                        )
                      )
                    : Promise.resolve(this._bodyArrayBuffer))
                );
              if (i.blob) return this.blob().then(p);
              throw Error("could not read as ArrayBuffer");
            }),
            (this.text = function () {
              var e,
                t,
                r,
                i,
                s,
                n = u(this);
              if (n) return n;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (r = d((t = new FileReader()))),
                  (s = (i = /charset=([A-Za-z0-9_-]+)/.exec(e.type))
                    ? i[1]
                    : "utf-8"),
                  t.readAsText(e, s),
                  r
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var t = new Uint8Array(e), r = Array(t.length), i = 0;
                      i < t.length;
                      i++
                    )
                      r[i] = String.fromCharCode(t[i]);
                    return r.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            i.formData &&
              (this.formData = function () {
                return this.text().then(b);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (h.prototype.append = function (e, t) {
          (e = a(e)), (t = c(t));
          var r = this.map[e];
          this.map[e] = r ? r + ", " + t : t;
        }),
          (h.prototype.delete = function (e) {
            delete this.map[a(e)];
          }),
          (h.prototype.get = function (e) {
            return (e = a(e)), this.has(e) ? this.map[e] : null;
          }),
          (h.prototype.has = function (e) {
            return this.map.hasOwnProperty(a(e));
          }),
          (h.prototype.set = function (e, t) {
            this.map[a(e)] = c(t);
          }),
          (h.prototype.forEach = function (e, t) {
            for (var r in this.map)
              this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
          }),
          (h.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (t, r) {
                e.push(r);
              }),
              l(e)
            );
          }),
          (h.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (t) {
                e.push(t);
              }),
              l(e)
            );
          }),
          (h.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (t, r) {
                e.push([r, t]);
              }),
              l(e)
            );
          }),
          i.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
        var y = [
          "CONNECT",
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "PATCH",
          "POST",
          "PUT",
          "TRACE",
        ];
        function m(e, r) {
          if (!(this instanceof m))
            throw TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          var i,
            s,
            n = (r = r || {}).body;
          if (e instanceof m) {
            if (e.bodyUsed) throw TypeError("Already read");
            (this.url = e.url),
              (this.credentials = e.credentials),
              r.headers || (this.headers = new h(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              n ||
                null == e._bodyInit ||
                ((n = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials =
              r.credentials || this.credentials || "same-origin"),
            (r.headers || !this.headers) && (this.headers = new h(r.headers)),
            (this.method =
              ((s = (i = r.method || this.method || "GET").toUpperCase()),
              y.indexOf(s) > -1 ? s : i)),
            (this.mode = r.mode || this.mode || null),
            (this.signal =
              r.signal ||
              this.signal ||
              (function () {
                if ("AbortController" in t) return new AbortController().signal;
              })()),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && n)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          if (
            (this._initBody(n),
            ("GET" === this.method || "HEAD" === this.method) &&
              ("no-store" === r.cache || "no-cache" === r.cache))
          ) {
            var o = /([?&])_=[^&]*/;
            o.test(this.url)
              ? (this.url = this.url.replace(o, "$1_=" + new Date().getTime()))
              : (this.url +=
                  (/\?/.test(this.url) ? "&" : "?") +
                  "_=" +
                  new Date().getTime());
          }
        }
        function b(e) {
          var t = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var r = e.split("="),
                    i = r.shift().replace(/\+/g, " "),
                    s = r.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(i), decodeURIComponent(s));
                }
              }),
            t
          );
        }
        function w(e, t) {
          if (!(this instanceof w))
            throw TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          if (
            (t || (t = {}),
            (this.type = "default"),
            (this.status = void 0 === t.status ? 200 : t.status),
            this.status < 200 || this.status > 599)
          )
            throw RangeError(
              "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
            );
          (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText =
              void 0 === t.statusText ? "" : "" + t.statusText),
            (this.headers = new h(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
        }
        (m.prototype.clone = function () {
          return new m(this, { body: this._bodyInit });
        }),
          g.call(m.prototype),
          g.call(w.prototype),
          (w.prototype.clone = function () {
            return new w(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new h(this.headers),
              url: this.url,
            });
          }),
          (w.error = function () {
            var e = new w(null, { status: 200, statusText: "" });
            return (e.ok = !1), (e.status = 0), (e.type = "error"), e;
          });
        var v = [301, 302, 303, 307, 308];
        (w.redirect = function (e, t) {
          if (-1 === v.indexOf(t)) throw RangeError("Invalid status code");
          return new w(null, { status: t, headers: { location: e } });
        }),
          (e.DOMException = t.DOMException);
        try {
          new e.DOMException();
        } catch (t) {
          (e.DOMException = function (e, t) {
            (this.message = e), (this.name = t);
            var r = Error(e);
            this.stack = r.stack;
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException);
        }
        function E(r, s) {
          return new Promise(function (n, o) {
            var l = new m(r, s);
            if (l.signal && l.signal.aborted)
              return o(new e.DOMException("Aborted", "AbortError"));
            var u = new XMLHttpRequest();
            function d() {
              u.abort();
            }
            if (
              ((u.onload = function () {
                var e,
                  t,
                  r = {
                    statusText: u.statusText,
                    headers:
                      ((e = u.getAllResponseHeaders() || ""),
                      (t = new h()),
                      e
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split("\r")
                        .map(function (e) {
                          return 0 === e.indexOf("\n")
                            ? e.substr(1, e.length)
                            : e;
                        })
                        .forEach(function (e) {
                          var r = e.split(":"),
                            i = r.shift().trim();
                          if (i) {
                            var s = r.join(":").trim();
                            try {
                              t.append(i, s);
                            } catch (e) {
                              console.warn("Response " + e.message);
                            }
                          }
                        }),
                      t),
                  };
                0 === l.url.indexOf("file://") &&
                (u.status < 200 || u.status > 599)
                  ? (r.status = 200)
                  : (r.status = u.status),
                  (r.url =
                    "responseURL" in u
                      ? u.responseURL
                      : r.headers.get("X-Request-URL"));
                var i = "response" in u ? u.response : u.responseText;
                setTimeout(function () {
                  n(new w(i, r));
                }, 0);
              }),
              (u.onerror = function () {
                setTimeout(function () {
                  o(TypeError("Network request failed"));
                }, 0);
              }),
              (u.ontimeout = function () {
                setTimeout(function () {
                  o(TypeError("Network request timed out"));
                }, 0);
              }),
              (u.onabort = function () {
                setTimeout(function () {
                  o(new e.DOMException("Aborted", "AbortError"));
                }, 0);
              }),
              u.open(
                l.method,
                (function (e) {
                  try {
                    return "" === e && t.location.href ? t.location.href : e;
                  } catch (t) {
                    return e;
                  }
                })(l.url),
                !0
              ),
              "include" === l.credentials
                ? (u.withCredentials = !0)
                : "omit" === l.credentials && (u.withCredentials = !1),
              "responseType" in u &&
                (i.blob
                  ? (u.responseType = "blob")
                  : i.arrayBuffer && (u.responseType = "arraybuffer")),
              s &&
                "object" == typeof s.headers &&
                !(
                  s.headers instanceof h ||
                  (t.Headers && s.headers instanceof t.Headers)
                ))
            ) {
              var p = [];
              Object.getOwnPropertyNames(s.headers).forEach(function (e) {
                p.push(a(e)), u.setRequestHeader(e, c(s.headers[e]));
              }),
                l.headers.forEach(function (e, t) {
                  -1 === p.indexOf(t) && u.setRequestHeader(t, e);
                });
            } else
              l.headers.forEach(function (e, t) {
                u.setRequestHeader(t, e);
              });
            l.signal &&
              (l.signal.addEventListener("abort", d),
              (u.onreadystatechange = function () {
                4 === u.readyState && l.signal.removeEventListener("abort", d);
              })),
              u.send(void 0 === l._bodyInit ? null : l._bodyInit);
          });
        }
        (E.polyfill = !0),
          t.fetch ||
            ((t.fetch = E), (t.Headers = h), (t.Request = m), (t.Response = w)),
          (e.Headers = h),
          (e.Request = m),
          (e.Response = w),
          (e.fetch = E),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })({}),
        (s.fetch.ponyfill = !0),
        delete s.fetch.polyfill;
      var n = i.fetch ? i : s;
      ((t = n.fetch).default = n.fetch),
        (t.fetch = n.fetch),
        (t.Headers = n.Headers),
        (t.Request = n.Request),
        (t.Response = n.Response),
        (e.exports = t);
    },
    72030: function (e) {
      "use strict";
      e.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    36900: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(30004);
      i.__exportStar(r(46869), t), i.__exportStar(r(88033), t);
    },
    46869: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_THOUSAND = t.ONE_HUNDRED = void 0),
        (t.ONE_HUNDRED = 100),
        (t.ONE_THOUSAND = 1e3);
    },
    88033: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ONE_YEAR =
          t.FOUR_WEEKS =
          t.THREE_WEEKS =
          t.TWO_WEEKS =
          t.ONE_WEEK =
          t.THIRTY_DAYS =
          t.SEVEN_DAYS =
          t.FIVE_DAYS =
          t.THREE_DAYS =
          t.ONE_DAY =
          t.TWENTY_FOUR_HOURS =
          t.TWELVE_HOURS =
          t.SIX_HOURS =
          t.THREE_HOURS =
          t.ONE_HOUR =
          t.SIXTY_MINUTES =
          t.THIRTY_MINUTES =
          t.TEN_MINUTES =
          t.FIVE_MINUTES =
          t.ONE_MINUTE =
          t.SIXTY_SECONDS =
          t.THIRTY_SECONDS =
          t.TEN_SECONDS =
          t.FIVE_SECONDS =
          t.ONE_SECOND =
            void 0),
        (t.ONE_SECOND = 1),
        (t.FIVE_SECONDS = 5),
        (t.TEN_SECONDS = 10),
        (t.THIRTY_SECONDS = 30),
        (t.SIXTY_SECONDS = 60),
        (t.ONE_MINUTE = t.SIXTY_SECONDS),
        (t.FIVE_MINUTES = 5 * t.ONE_MINUTE),
        (t.TEN_MINUTES = 10 * t.ONE_MINUTE),
        (t.THIRTY_MINUTES = 30 * t.ONE_MINUTE),
        (t.SIXTY_MINUTES = 60 * t.ONE_MINUTE),
        (t.ONE_HOUR = t.SIXTY_MINUTES),
        (t.THREE_HOURS = 3 * t.ONE_HOUR),
        (t.SIX_HOURS = 6 * t.ONE_HOUR),
        (t.TWELVE_HOURS = 12 * t.ONE_HOUR),
        (t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR),
        (t.ONE_DAY = t.TWENTY_FOUR_HOURS),
        (t.THREE_DAYS = 3 * t.ONE_DAY),
        (t.FIVE_DAYS = 5 * t.ONE_DAY),
        (t.SEVEN_DAYS = 7 * t.ONE_DAY),
        (t.THIRTY_DAYS = 30 * t.ONE_DAY),
        (t.ONE_WEEK = t.SEVEN_DAYS),
        (t.TWO_WEEKS = 2 * t.ONE_WEEK),
        (t.THREE_WEEKS = 3 * t.ONE_WEEK),
        (t.FOUR_WEEKS = 4 * t.ONE_WEEK),
        (t.ONE_YEAR = 365 * t.ONE_DAY);
    },
    66736: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(30004);
      i.__exportStar(r(44273), t),
        i.__exportStar(r(47001), t),
        i.__exportStar(r(52939), t),
        i.__exportStar(r(36900), t);
    },
    52939: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(30004);
      i.__exportStar(r(88766), t);
    },
    88766: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IWatch = void 0),
        (t.IWatch = class {});
    },
    83207: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fromMiliseconds = t.toMiliseconds = void 0);
      let i = r(36900);
      (t.toMiliseconds = function (e) {
        return e * i.ONE_THOUSAND;
      }),
        (t.fromMiliseconds = function (e) {
          return Math.floor(e / i.ONE_THOUSAND);
        });
    },
    83873: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.delay = void 0),
        (t.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    44273: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(30004);
      i.__exportStar(r(83873), t), i.__exportStar(r(83207), t);
    },
    47001: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Watch = void 0);
      class r {
        constructor() {
          this.timestamps = new Map();
        }
        start(e) {
          if (this.timestamps.has(e))
            throw Error(`Watch already started for label: ${e}`);
          this.timestamps.set(e, { started: Date.now() });
        }
        stop(e) {
          let t = this.get(e);
          if (void 0 !== t.elapsed)
            throw Error(`Watch already stopped for label: ${e}`);
          let r = Date.now() - t.started;
          this.timestamps.set(e, { started: t.started, elapsed: r });
        }
        get(e) {
          let t = this.timestamps.get(e);
          if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
          return t;
        }
        elapsed(e) {
          let t = this.get(e),
            r = t.elapsed || Date.now() - t.started;
          return r;
        }
      }
      (t.Watch = r), (t.default = r);
    },
    30004: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __assign: function () {
            return n;
          },
          __asyncDelegator: function () {
            return v;
          },
          __asyncGenerator: function () {
            return w;
          },
          __asyncValues: function () {
            return E;
          },
          __await: function () {
            return b;
          },
          __awaiter: function () {
            return h;
          },
          __classPrivateFieldGet: function () {
            return S;
          },
          __classPrivateFieldSet: function () {
            return P;
          },
          __createBinding: function () {
            return d;
          },
          __decorate: function () {
            return a;
          },
          __exportStar: function () {
            return p;
          },
          __extends: function () {
            return s;
          },
          __generator: function () {
            return u;
          },
          __importDefault: function () {
            return D;
          },
          __importStar: function () {
            return I;
          },
          __makeTemplateObject: function () {
            return _;
          },
          __metadata: function () {
            return l;
          },
          __param: function () {
            return c;
          },
          __read: function () {
            return g;
          },
          __rest: function () {
            return o;
          },
          __spread: function () {
            return y;
          },
          __spreadArrays: function () {
            return m;
          },
          __values: function () {
            return f;
          },
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var i =
        function (e, t) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        };
      function s(e, t) {
        function r() {
          this.constructor = e;
        }
        i(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var n = function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var s in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var r = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, i = Object.getOwnPropertySymbols(e);
            s < i.length;
            s++
          )
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (r[i[s]] = e[i[s]]);
        return r;
      }
      function a(e, t, r, i) {
        var s,
          n = arguments.length,
          o =
            n < 3
              ? t
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(t, r))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, r, i);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) &&
              (o = (n < 3 ? s(o) : n > 3 ? s(t, r, o) : s(t, r)) || o);
        return n > 3 && o && Object.defineProperty(t, r, o), o;
      }
      function c(e, t) {
        return function (r, i) {
          t(r, i, e);
        };
      }
      function l(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function h(e, t, r, i) {
        return new (r || (r = Promise))(function (s, n) {
          function o(e) {
            try {
              c(i.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((i = i.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          i,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            return (function (n) {
              if (r) throw TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    i &&
                      (s =
                        2 & n[0]
                          ? i.return
                          : n[0]
                          ? i.throw || ((s = i.return) && s.call(i), 0)
                          : i.next) &&
                      !(s = s.call(i, n[1])).done)
                  )
                    return s;
                  switch (((i = 0), s && (n = [2 & n[0], s.value]), n[0])) {
                    case 0:
                    case 1:
                      s = n;
                      break;
                    case 4:
                      return o.label++, { value: n[1], done: !1 };
                    case 5:
                      o.label++, (i = n[1]), (n = [0]);
                      continue;
                    case 7:
                      (n = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                        (6 === n[0] || 2 === n[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === n[0] && (!s || (n[1] > s[0] && n[1] < s[3]))) {
                        o.label = n[1];
                        break;
                      }
                      if (6 === n[0] && o.label < s[1]) {
                        (o.label = s[1]), (s = n);
                        break;
                      }
                      if (s && o.label < s[2]) {
                        (o.label = s[2]), o.ops.push(n);
                        break;
                      }
                      s[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  n = t.call(e, o);
                } catch (e) {
                  (n = [6, e]), (i = 0);
                } finally {
                  r = s = 0;
                }
              if (5 & n[0]) throw n[1];
              return { value: n[0] ? n[1] : void 0, done: !0 };
            })([n, a]);
          };
        }
      }
      function d(e, t, r, i) {
        void 0 === i && (i = r), (e[i] = t[r]);
      }
      function p(e, t) {
        for (var r in e)
          "default" === r || t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      function f(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && i >= e.length && (e = void 0),
                { value: e && e[i++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i,
          s,
          n = r.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(i = n.next()).done; )
            o.push(i.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var i = Array(e), s = 0, t = 0; t < r; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++)
            i[s] = n[o];
        return i;
      }
      function b(e) {
        return this instanceof b ? ((this.v = e), this) : new b(e);
      }
      function w(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var i,
          s = r.apply(e, t || []),
          n = [];
        return (
          (i = {}),
          o("next"),
          o("throw"),
          o("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function o(e) {
          s[e] &&
            (i[e] = function (t) {
              return new Promise(function (r, i) {
                n.push([e, t, r, i]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var r;
            (r = s[e](t)).value instanceof b
              ? Promise.resolve(r.value.v).then(c, l)
              : h(n[0][2], r);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a("next", e);
        }
        function l(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function v(e) {
        var t, r;
        return (
          (t = {}),
          i("next"),
          i("throw", function (e) {
            throw e;
          }),
          i("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function i(i, s) {
          t[i] = e[i]
            ? function (t) {
                return (r = !r)
                  ? { value: b(e[i](t)), done: "return" === i }
                  : s
                  ? s(t)
                  : t;
              }
            : s;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = f(e)),
            (t = {}),
            i("next"),
            i("throw"),
            i("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function i(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (i, s) {
                !(function (e, t, r, i) {
                  Promise.resolve(i).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(i, s, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function _(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      }
      function D(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function S(e, t) {
        if (!t.has(e))
          throw TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function P(e, t, r) {
        if (!t.has(e))
          throw TypeError("attempted to set private field on non-instance");
        return t.set(e, r), r;
      }
    },
    62873: function (e, t) {
      "use strict";
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function i(e) {
        let t = r(e);
        if (!t) throw Error(`${e} is not defined in Window`);
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
            void 0),
        (t.getFromWindow = r),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i("document");
        }),
        (t.getDocument = function () {
          return r("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return i("navigator");
        }),
        (t.getNavigator = function () {
          return r("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return i("location");
        }),
        (t.getLocation = function () {
          return r("location");
        }),
        (t.getCryptoOrThrow = function () {
          return i("crypto");
        }),
        (t.getCrypto = function () {
          return r("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return i("localStorage");
        }),
        (t.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    65755: function (e, t, r) {
      "use strict";
      t.D = void 0;
      let i = r(62873);
      t.D = function () {
        let e, t, r;
        try {
          (e = i.getDocumentOrThrow()), (t = i.getLocationOrThrow());
        } catch (e) {
          return null;
        }
        function s(...t) {
          let r = e.getElementsByTagName("meta");
          for (let e = 0; e < r.length; e++) {
            let i = r[e],
              s = ["itemprop", "property", "name"]
                .map((e) => i.getAttribute(e))
                .filter((e) => !!e && t.includes(e));
            if (s.length && s) {
              let e = i.getAttribute("content");
              if (e) return e;
            }
          }
          return "";
        }
        let n =
            ((r = s("name", "og:site_name", "og:title", "twitter:title")) ||
              (r = e.title),
            r),
          o = (function () {
            let e = s(
              "description",
              "og:description",
              "twitter:description",
              "keywords"
            );
            return e;
          })(),
          a = t.origin,
          c = (function () {
            let r = e.getElementsByTagName("link"),
              i = [];
            for (let e = 0; e < r.length; e++) {
              let s = r[e],
                n = s.getAttribute("rel");
              if (n && n.toLowerCase().indexOf("icon") > -1) {
                let e = s.getAttribute("href");
                if (e) {
                  if (
                    -1 === e.toLowerCase().indexOf("https:") &&
                    -1 === e.toLowerCase().indexOf("http:") &&
                    0 !== e.indexOf("//")
                  ) {
                    let r = t.protocol + "//" + t.host;
                    if (0 === e.indexOf("/")) r += e;
                    else {
                      let i = t.pathname.split("/");
                      i.pop();
                      let s = i.join("/");
                      r += s + "/" + e;
                    }
                    i.push(r);
                  } else if (0 === e.indexOf("//")) {
                    let r = t.protocol + e;
                    i.push(r);
                  } else i.push(e);
                }
              }
            }
            return i;
          })();
        return { description: o, url: a, icons: c, name: n };
      };
    },
    17187: function (e) {
      "use strict";
      var t,
        r = "object" == typeof Reflect ? Reflect : null,
        i =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      t =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var s =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function n() {
        n.init.call(this);
      }
      (e.exports = n),
        (e.exports.once = function (e, t) {
          return new Promise(function (r, i) {
            function s(r) {
              e.removeListener(t, n), i(r);
            }
            function n() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", s),
                r([].slice.call(arguments));
            }
            g(e, t, n, { once: !0 }),
              "error" !== t &&
                "function" == typeof e.on &&
                g(e, "error", s, { once: !0 });
          });
        }),
        (n.EventEmitter = n),
        (n.prototype._events = void 0),
        (n.prototype._eventsCount = 0),
        (n.prototype._maxListeners = void 0);
      var o = 10;
      function a(e) {
        if ("function" != typeof e)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function c(e) {
        return void 0 === e._maxListeners
          ? n.defaultMaxListeners
          : e._maxListeners;
      }
      function l(e, t, r, i) {
        if (
          (a(r),
          void 0 === (n = e._events)
            ? ((n = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== n.newListener &&
                (e.emit("newListener", t, r.listener ? r.listener : r),
                (n = e._events)),
              (o = n[t])),
          void 0 === o)
        )
          (o = n[t] = r), ++e._eventsCount;
        else if (
          ("function" == typeof o
            ? (o = n[t] = i ? [r, o] : [o, r])
            : i
            ? o.unshift(r)
            : o.push(r),
          (s = c(e)) > 0 && o.length > s && !o.warned)
        ) {
          o.warned = !0;
          var s,
            n,
            o,
            l = Error(
              "Possible EventEmitter memory leak detected. " +
                o.length +
                " " +
                String(t) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = e),
            (l.type = t),
            (l.count = o.length),
            console && console.warn && console.warn(l);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function u(e, t, r) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          s = h.bind(i);
        return (s.listener = r), (i.wrapFn = s), s;
      }
      function d(e, t, r) {
        var i = e._events;
        if (void 0 === i) return [];
        var s = i[t];
        return void 0 === s
          ? []
          : "function" == typeof s
          ? r
            ? [s.listener || s]
            : [s]
          : r
          ? (function (e) {
              for (var t = Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r];
              return t;
            })(s)
          : f(s, s.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var r = t[e];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function f(e, t) {
        for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
        return r;
      }
      function g(e, t, r, i) {
        if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
        else if ("function" == typeof e.addEventListener)
          e.addEventListener(t, function s(n) {
            i.once && e.removeEventListener(t, s), r(n);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof e
          );
      }
      Object.defineProperty(n, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          o = e;
        },
      }),
        (n.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (n.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (n.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (n.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var s = "error" === e,
            n = this._events;
          if (void 0 !== n) s = s && void 0 === n.error;
          else if (!s) return !1;
          if (s) {
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var o,
              a = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
            throw ((a.context = o), a);
          }
          var c = n[e];
          if (void 0 === c) return !1;
          if ("function" == typeof c) i(c, this, t);
          else
            for (var l = c.length, h = f(c, l), r = 0; r < l; ++r)
              i(h[r], this, t);
          return !0;
        }),
        (n.prototype.addListener = function (e, t) {
          return l(this, e, t, !1);
        }),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.prependListener = function (e, t) {
          return l(this, e, t, !0);
        }),
        (n.prototype.once = function (e, t) {
          return a(t), this.on(e, u(this, e, t)), this;
        }),
        (n.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, u(this, e, t)), this;
        }),
        (n.prototype.removeListener = function (e, t) {
          var r, i, s, n, o;
          if ((a(t), void 0 === (i = this._events) || void 0 === (r = i[e])))
            return this;
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e],
                i.removeListener &&
                  this.emit("removeListener", e, r.listener || t));
          else if ("function" != typeof r) {
            for (s = -1, n = r.length - 1; n >= 0; n--)
              if (r[n] === t || r[n].listener === t) {
                (o = r[n].listener), (s = n);
                break;
              }
            if (s < 0) return this;
            0 === s
              ? r.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(r, s),
              1 === r.length && (i[e] = r[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", e, o || t);
          }
          return this;
        }),
        (n.prototype.off = n.prototype.removeListener),
        (n.prototype.removeAllListeners = function (e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 == arguments.length) {
            var s,
              n = Object.keys(r);
            for (i = 0; i < n.length; ++i)
              "removeListener" !== (s = n[i]) && this.removeAllListeners(s);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (n.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (n.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (n.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (n.prototype.listenerCount = p),
        (n.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    85346: function (e) {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, r, i) {
        var s = (i && i.stringify) || t;
        if ("object" == typeof e && null !== e) {
          var n = r.length + 1;
          if (1 === n) return e;
          var o = Array(n);
          o[0] = s(e);
          for (var a = 1; a < n; a++) o[a] = s(r[a]);
          return o.join(" ");
        }
        if ("string" != typeof e) return e;
        var c = r.length;
        if (0 === c) return e;
        for (
          var l = "", h = 0, u = -1, d = (e && e.length) || 0, p = 0;
          p < d;

        ) {
          if (37 === e.charCodeAt(p) && p + 1 < d) {
            switch (((u = u > -1 ? u : 0), e.charCodeAt(p + 1))) {
              case 100:
              case 102:
                if (h >= c || null == r[h]) break;
                u < p && (l += e.slice(u, p)),
                  (l += Number(r[h])),
                  (u = p + 2),
                  p++;
                break;
              case 105:
                if (h >= c || null == r[h]) break;
                u < p && (l += e.slice(u, p)),
                  (l += Math.floor(Number(r[h]))),
                  (u = p + 2),
                  p++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c || void 0 === r[h]) break;
                u < p && (l += e.slice(u, p));
                var f = typeof r[h];
                if ("string" === f) {
                  (l += "'" + r[h] + "'"), (u = p + 2), p++;
                  break;
                }
                if ("function" === f) {
                  (l += r[h].name || "<anonymous>"), (u = p + 2), p++;
                  break;
                }
                (l += s(r[h])), (u = p + 2), p++;
                break;
              case 115:
                if (h >= c) break;
                u < p && (l += e.slice(u, p)),
                  (l += String(r[h])),
                  (u = p + 2),
                  p++;
                break;
              case 37:
                u < p && (l += e.slice(u, p)),
                  (l += "%"),
                  (u = p + 2),
                  p++,
                  h--;
            }
            ++h;
          }
          ++p;
        }
        return -1 === u ? e : (u < d && (l += e.slice(u)), l);
      };
    },
    36559: function (e, t, r) {
      "use strict";
      let i = r(85346);
      e.exports = n;
      let s =
        (function () {
          function e(e) {
            return void 0 !== e && e;
          }
          try {
            if ("undefined" != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, "globalThis", {
                get: function () {
                  return (
                    delete Object.prototype.globalThis, (this.globalThis = this)
                  );
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (t) {
            return e(self) || e(window) || e(this) || {};
          }
        })().console || {};
      function n(e) {
        var t;
        (e = e || {}).browser = e.browser || {};
        let r = e.browser.transmit;
        if (r && "function" != typeof r.send)
          throw Error("pino: transmit option must have a send function");
        let i = e.browser.write || s;
        e.browser.write && (e.browser.asObject = !0);
        let h = e.serializers || {},
          u = (function (e, t) {
            if (Array.isArray(e)) {
              let t = e.filter(function (e) {
                return "!stdSerializers.err" !== e;
              });
              return t;
            }
            return !0 === e && Object.keys(t);
          })(e.browser.serialize, h),
          g = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (g = !1),
          "function" == typeof i &&
            (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i),
          !1 === e.enabled && (e.level = "silent");
        let y = e.level || "info",
          m = Object.create(i);
        m.log || (m.log = d),
          Object.defineProperty(m, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(m, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                o(b, m, "error", "log"),
                o(b, m, "fatal", "error"),
                o(b, m, "warn", "error"),
                o(b, m, "info", "log"),
                o(b, m, "debug", "log"),
                o(b, m, "trace", "log");
            },
          });
        let b = {
          transmit: r,
          serialize: u,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp:
            "function" == typeof (t = e).timestamp
              ? t.timestamp
              : !1 === t.timestamp
              ? p
              : f,
        };
        return (
          (m.levels = n.levels),
          (m.level = y),
          (m.setMaxListeners =
            m.getMaxListeners =
            m.emit =
            m.addListener =
            m.on =
            m.prependListener =
            m.once =
            m.prependOnceListener =
            m.removeListener =
            m.removeAllListeners =
            m.listeners =
            m.listenerCount =
            m.eventNames =
            m.write =
            m.flush =
              d),
          (m.serializers = h),
          (m._serialize = u),
          (m._stdErrSerialize = g),
          (m.child = function (t, i) {
            if (!t) throw Error("missing bindings for child Pino");
            (i = i || {}),
              u && t.serializers && (i.serializers = t.serializers);
            let s = i.serializers;
            if (u && s) {
              var n = Object.assign({}, h, s),
                o = !0 === e.browser.serialize ? Object.keys(n) : u;
              delete t.serializers, a([t], o, n, this._stdErrSerialize);
            }
            function d(e) {
              (this._childLevel = (0 | e._childLevel) + 1),
                (this.error = c(e, t, "error")),
                (this.fatal = c(e, t, "fatal")),
                (this.warn = c(e, t, "warn")),
                (this.info = c(e, t, "info")),
                (this.debug = c(e, t, "debug")),
                (this.trace = c(e, t, "trace")),
                n && ((this.serializers = n), (this._serialize = o)),
                r && (this._logEvent = l([].concat(e._logEvent.bindings, t)));
            }
            return (d.prototype = this), new d(this);
          }),
          r && (m._logEvent = l()),
          m
        );
      }
      function o(e, t, r, o) {
        let c = Object.getPrototypeOf(t);
        (t[r] =
          t.levelVal > t.levels.values[r]
            ? d
            : c[r]
            ? c[r]
            : s[r] || s[o] || d),
          (function (e, t, r) {
            if (e.transmit || t[r] !== d) {
              var o;
              t[r] =
                ((o = t[r]),
                function () {
                  let c = e.timestamp(),
                    h = Array(arguments.length),
                    u =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === s
                        ? s
                        : this;
                  for (var d = 0; d < h.length; d++) h[d] = arguments[d];
                  if (
                    (e.serialize &&
                      !e.asObject &&
                      a(
                        h,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    e.asObject
                      ? o.call(
                          u,
                          (function (e, t, r, s) {
                            e._serialize &&
                              a(
                                r,
                                e._serialize,
                                e.serializers,
                                e._stdErrSerialize
                              );
                            let o = r.slice(),
                              c = o[0],
                              l = {};
                            s && (l.time = s), (l.level = n.levels.values[t]);
                            let h = (0 | e._childLevel) + 1;
                            if (
                              (h < 1 && (h = 1),
                              null !== c && "object" == typeof c)
                            ) {
                              for (; h-- && "object" == typeof o[0]; )
                                Object.assign(l, o.shift());
                              c = o.length ? i(o.shift(), o) : void 0;
                            } else
                              "string" == typeof c && (c = i(o.shift(), o));
                            return void 0 !== c && (l.msg = c), l;
                          })(this, r, h, c)
                        )
                      : o.apply(u, h),
                    e.transmit)
                  ) {
                    let i = e.transmit.level || t.level,
                      s = n.levels.values[i],
                      o = n.levels.values[r];
                    if (o < s) return;
                    (function (e, t, r) {
                      let i = t.send,
                        s = t.ts,
                        n = t.methodLevel,
                        o = t.methodValue,
                        c = t.val,
                        h = e._logEvent.bindings;
                      a(
                        r,
                        e._serialize || Object.keys(e.serializers),
                        e.serializers,
                        void 0 === e._stdErrSerialize || e._stdErrSerialize
                      ),
                        (e._logEvent.ts = s),
                        (e._logEvent.messages = r.filter(function (e) {
                          return -1 === h.indexOf(e);
                        })),
                        (e._logEvent.level.label = n),
                        (e._logEvent.level.value = o),
                        i(n, e._logEvent, c),
                        (e._logEvent = l(h));
                    })(
                      this,
                      {
                        ts: c,
                        methodLevel: r,
                        methodValue: o,
                        transmitLevel: i,
                        transmitValue:
                          n.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal,
                      },
                      h
                    );
                  }
                });
            }
          })(e, t, r);
      }
      function a(e, t, r, i) {
        for (let s in e)
          if (i && e[s] instanceof Error) e[s] = n.stdSerializers.err(e[s]);
          else if ("object" == typeof e[s] && !Array.isArray(e[s]))
            for (let i in e[s])
              t && t.indexOf(i) > -1 && i in r && (e[s][i] = r[i](e[s][i]));
      }
      function c(e, t, r) {
        return function () {
          let i = Array(1 + arguments.length);
          i[0] = t;
          for (var s = 1; s < i.length; s++) i[s] = arguments[s - 1];
          return e[r].apply(this, i);
        };
      }
      function l(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function h() {
        return {};
      }
      function u(e) {
        return e;
      }
      function d() {}
      function p() {
        return !1;
      }
      function f() {
        return Date.now();
      }
      (n.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (n.stdSerializers = {
          mapHttpRequest: h,
          mapHttpResponse: h,
          wrapRequestSerializer: u,
          wrapResponseSerializer: u,
          wrapErrorSerializer: u,
          req: h,
          res: h,
          err: function (e) {
            let t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (let r in e) void 0 === t[r] && (t[r] = e[r]);
            return t;
          },
        }),
        (n.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: p,
            epochTime: f,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
