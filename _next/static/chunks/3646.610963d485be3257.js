(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3646],
  {
    6400: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Component: function () {
            return S;
          },
          Fragment: function () {
            return I;
          },
          cloneElement: function () {
            return q;
          },
          createContext: function () {
            return H;
          },
          createElement: function () {
            return k;
          },
          createRef: function () {
            return E;
          },
          h: function () {
            return k;
          },
          hydrate: function () {
            return W;
          },
          isValidElement: function () {
            return a;
          },
          options: function () {
            return s;
          },
          render: function () {
            return U;
          },
          toChildArray: function () {
            return function e(t, n) {
              return (
                (n = n || []),
                null == t ||
                  "boolean" == typeof t ||
                  (b(t)
                    ? t.some(function (t) {
                        e(t, n);
                      })
                    : n.push(t)),
                n
              );
            };
          },
        });
      var i,
        s,
        r,
        a,
        o,
        c,
        l,
        u,
        d,
        h,
        p,
        f,
        m,
        g = {},
        _ = [],
        y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        b = Array.isArray;
      function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function v(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function k(e, t, n) {
        var s,
          r,
          a,
          o = {};
        for (a in t)
          "key" == a ? (s = t[a]) : "ref" == a ? (r = t[a]) : (o[a] = t[a]);
        if (
          (arguments.length > 2 &&
            (o.children = arguments.length > 3 ? i.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps)
            void 0 === o[a] && (o[a] = e.defaultProps[a]);
        return C(e, o, s, r, null);
      }
      function C(e, t, n, i, a) {
        var o = {
          type: e,
          props: t,
          key: n,
          ref: i,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++r : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != s.vnode && s.vnode(o), o;
      }
      function E() {
        return { current: null };
      }
      function I(e) {
        return e.children;
      }
      function S(e, t) {
        (this.props = e), (this.context = t);
      }
      function M(e, t) {
        if (null == t) return e.__ ? M(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? M(e) : null;
      }
      function x(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !A.__r++) ||
          c !== s.debounceRendering) &&
          ((c = s.debounceRendering) || l)(A);
      }
      function A() {
        for (var e, t, n, i, r, a, c = 1; o.length; )
          o.length > c && o.sort(u),
            (e = o.shift()),
            (c = o.length),
            e.__d &&
              ((t = void 0),
              (i = (n = e.__v).__e),
              (r = []),
              (a = []),
              e.__P &&
                (((t = w({}, n)).__v = n.__v + 1),
                s.vnode && s.vnode(t),
                R(
                  e.__P,
                  t,
                  n,
                  e.__n,
                  e.__P.namespaceURI,
                  32 & n.__u ? [i] : null,
                  r,
                  null == i ? M(n) : i,
                  !!(32 & n.__u),
                  a
                ),
                (t.__v = n.__v),
                (t.__.__k[t.__i] = t),
                T(r, t, a),
                t.__e != i &&
                  (function e(t) {
                    var n, i;
                    if (null != (t = t.__) && null != t.__c) {
                      for (
                        t.__e = t.__c.base = null, n = 0;
                        n < t.__k.length;
                        n++
                      )
                        if (null != (i = t.__k[n]) && null != i.__e) {
                          t.__e = t.__c.base = i.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(t)));
        A.__r = 0;
      }
      function L(e, t, n, i, r, a, o, c, l, u, d) {
        var h,
          p,
          f,
          m,
          y,
          w,
          k = (i && i.__k) || _,
          E = t.length;
        for (
          l = (function (e, t, n, i, r) {
            var a,
              o,
              c,
              l,
              u,
              d = n.length,
              h = d,
              p = 0;
            for (e.__k = Array(r), a = 0; a < r; a++)
              null != (o = t[a]) &&
              "boolean" != typeof o &&
              "function" != typeof o
                ? ((l = a + p),
                  ((o = e.__k[a] =
                    "string" == typeof o ||
                    "number" == typeof o ||
                    "bigint" == typeof o ||
                    o.constructor == String
                      ? C(null, o, null, null, null)
                      : b(o)
                      ? C(I, { children: o }, null, null, null)
                      : void 0 === o.constructor && o.__b > 0
                      ? C(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                      : o).__ = e),
                  (o.__b = e.__b + 1),
                  (c = null),
                  -1 !==
                    (u = o.__i =
                      (function (e, t, n, i) {
                        var s,
                          r,
                          a = e.key,
                          o = e.type,
                          c = t[n];
                        if (
                          (null === c && null == e.key) ||
                          (c && a == c.key && o === c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (i > (null != c && 0 == (2 & c.__u) ? 1 : 0))
                          for (s = n - 1, r = n + 1; s >= 0 || r < t.length; ) {
                            if (s >= 0) {
                              if (
                                (c = t[s]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o === c.type
                              )
                                return s;
                              s--;
                            }
                            if (r < t.length) {
                              if (
                                (c = t[r]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o === c.type
                              )
                                return r;
                              r++;
                            }
                          }
                        return -1;
                      })(o, n, l, h)) && (h--, (c = n[u]) && (c.__u |= 2)),
                  null == c || null === c.__v
                    ? (-1 == u && (r > d ? p-- : r < d && p++),
                      "function" != typeof o.type && (o.__u |= 4))
                    : u != l &&
                      (u == l - 1
                        ? p--
                        : u == l + 1
                        ? p++
                        : (u > l ? p-- : p++, (o.__u |= 4))))
                : (e.__k[a] = null);
            if (h)
              for (a = 0; a < d; a++)
                null != (c = n[a]) &&
                  0 == (2 & c.__u) &&
                  (c.__e == i && (i = M(c)),
                  (function e(t, n, i) {
                    var r, a;
                    if (
                      (s.unmount && s.unmount(t),
                      (r = t.ref) &&
                        ((r.current && r.current !== t.__e) || j(r, null, n)),
                      null != (r = t.__c))
                    ) {
                      if (r.componentWillUnmount)
                        try {
                          r.componentWillUnmount();
                        } catch (e) {
                          s.__e(e, n);
                        }
                      r.base = r.__P = null;
                    }
                    if ((r = t.__k))
                      for (a = 0; a < r.length; a++)
                        r[a] && e(r[a], n, i || "function" != typeof t.type);
                    i || v(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(c, c));
            return i;
          })(n, t, k, l, E),
            h = 0;
          h < E;
          h++
        )
          null != (f = n.__k[h]) &&
            ((p = -1 === f.__i ? g : k[f.__i] || g),
            (f.__i = h),
            (w = R(e, f, p, r, a, o, c, l, u, d)),
            (m = f.__e),
            f.ref &&
              p.ref != f.ref &&
              (p.ref && j(p.ref, null, f), d.push(f.ref, f.__c || m, f)),
            null == y && null != m && (y = m),
            4 & f.__u || p.__k === f.__k
              ? (l = (function e(t, n, i) {
                  var s, r;
                  if ("function" == typeof t.type) {
                    for (s = t.__k, r = 0; s && r < s.length; r++)
                      s[r] && ((s[r].__ = t), (n = e(s[r], n, i)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !i.contains(n) && (n = M(t)),
                    i.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 == n.nodeType);
                  return n;
                })(f, l, e))
              : "function" == typeof f.type && void 0 !== w
              ? (l = w)
              : m && (l = m.nextSibling),
            (f.__u &= -7));
        return (n.__e = y), l;
      }
      function P(e, t, n) {
        "-" == t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || y.test(t)
                ? n
                : n + "px");
      }
      function D(e, t, n, i, s) {
        var r;
        e: if ("style" == t) {
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof i && (e.style.cssText = i = ""), i))
              for (t in i) (n && t in n) || P(e.style, t, "");
            if (n) for (t in n) (i && n[t] === i[t]) || P(e.style, t, n[t]);
          }
        } else if ("o" == t[0] && "n" == t[1])
          (r = t != (t = t.replace(d, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" == t || "onFocusIn" == t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + r] = n),
            n
              ? i
                ? (n.t = i.t)
                : ((n.t = h), e.addEventListener(t, r ? f : p, r))
              : e.removeEventListener(t, r ? f : p, r);
        else {
          if ("http://www.w3.org/2000/svg" == s)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function N(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.u) t.u = h++;
            else if (t.u < n.t) return;
            return n(s.event ? s.event(t) : t);
          }
        };
      }
      function R(e, t, n, r, a, o, c, l, u, d) {
        var h,
          p,
          f,
          m,
          _,
          y,
          k,
          C,
          E,
          x,
          A,
          P,
          N,
          R,
          T,
          j,
          U,
          W = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((u = !!(32 & n.__u)), (o = [(l = t.__e = n.__e)])),
          (h = s.__b) && h(t);
        e: if ("function" == typeof W)
          try {
            if (
              ((C = t.props),
              (E = "prototype" in W && W.prototype.render),
              (x = (h = W.contextType) && r[h.__c]),
              (A = h ? (x ? x.props.value : h.__) : r),
              n.__c
                ? (k = (p = t.__c = n.__c).__ = p.__E)
                : (E
                    ? (t.__c = p = new W(C, A))
                    : ((t.__c = p = new S(C, A)),
                      (p.constructor = W),
                      (p.render = O)),
                  x && x.sub(p),
                  (p.props = C),
                  p.state || (p.state = {}),
                  (p.context = A),
                  (p.__n = r),
                  (f = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              E && null == p.__s && (p.__s = p.state),
              E &&
                null != W.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = w({}, p.__s)),
                w(p.__s, W.getDerivedStateFromProps(C, p.__s))),
              (m = p.props),
              (_ = p.state),
              (p.__v = t),
              f)
            )
              E &&
                null == W.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                E &&
                  null != p.componentDidMount &&
                  p.__h.push(p.componentDidMount);
            else {
              if (
                (E &&
                  null == W.getDerivedStateFromProps &&
                  C !== m &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(C, A),
                !p.__e &&
                  ((null != p.shouldComponentUpdate &&
                    !1 === p.shouldComponentUpdate(C, p.__s, A)) ||
                    t.__v == n.__v))
              ) {
                for (
                  t.__v != n.__v &&
                    ((p.props = C), (p.state = p.__s), (p.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    P = 0;
                  P < p._sb.length;
                  P++
                )
                  p.__h.push(p._sb[P]);
                (p._sb = []), p.__h.length && c.push(p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate(C, p.__s, A),
                E &&
                  null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(m, _, y);
                  });
            }
            if (
              ((p.context = A),
              (p.props = C),
              (p.__P = e),
              (p.__e = !1),
              (N = s.__r),
              (R = 0),
              E)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  N && N(t),
                  h = p.render(p.props, p.state, p.context),
                  T = 0;
                T < p._sb.length;
                T++
              )
                p.__h.push(p._sb[T]);
              p._sb = [];
            } else
              do
                (p.__d = !1),
                  N && N(t),
                  (h = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              while (p.__d && ++R < 25);
            (p.state = p.__s),
              null != p.getChildContext &&
                (r = w(w({}, r), p.getChildContext())),
              E &&
                !f &&
                null != p.getSnapshotBeforeUpdate &&
                (y = p.getSnapshotBeforeUpdate(m, _)),
              (j = h),
              null != h &&
                h.type === I &&
                null == h.key &&
                (j = (function e(t) {
                  return "object" != typeof t || null == t
                    ? t
                    : b(t)
                    ? t.map(e)
                    : w({}, t);
                })(h.props.children)),
              (l = L(e, b(j) ? j : [j], t, n, r, a, o, c, l, u, d)),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && c.push(p),
              k && (p.__E = p.__ = null);
          } catch (e) {
            if (((t.__v = null), u || null != o)) {
              if (e.then) {
                for (
                  t.__u |= u ? 160 : 128;
                  l && 8 == l.nodeType && l.nextSibling;

                )
                  l = l.nextSibling;
                (o[o.indexOf(l)] = null), (t.__e = l);
              } else for (U = o.length; U--; ) v(o[U]);
            } else (t.__e = n.__e), (t.__k = n.__k);
            s.__e(e, t, n);
          }
        else
          null == o && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (l = t.__e =
                (function (e, t, n, r, a, o, c, l, u) {
                  var d,
                    h,
                    p,
                    f,
                    m,
                    _,
                    y,
                    w = n.props,
                    k = t.props,
                    C = t.type;
                  if (
                    ("svg" == C
                      ? (a = "http://www.w3.org/2000/svg")
                      : "math" == C
                      ? (a = "http://www.w3.org/1998/Math/MathML")
                      : a || (a = "http://www.w3.org/1999/xhtml"),
                    null != o)
                  ) {
                    for (d = 0; d < o.length; d++)
                      if (
                        (m = o[d]) &&
                        "setAttribute" in m == !!C &&
                        (C ? m.localName == C : 3 == m.nodeType)
                      ) {
                        (e = m), (o[d] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == C) return document.createTextNode(k);
                    (e = document.createElementNS(a, C, k.is && k)),
                      l && (s.__m && s.__m(t, o), (l = !1)),
                      (o = null);
                  }
                  if (null === C)
                    w === k || (l && e.data === k) || (e.data = k);
                  else {
                    if (
                      ((o = o && i.call(e.childNodes)),
                      (w = n.props || g),
                      !l && null != o)
                    )
                      for (w = {}, d = 0; d < e.attributes.length; d++)
                        w[(m = e.attributes[d]).name] = m.value;
                    for (d in w)
                      if (((m = w[d]), "children" == d));
                      else if ("dangerouslySetInnerHTML" == d) p = m;
                      else if (!(d in k)) {
                        if (
                          ("value" == d && "defaultValue" in k) ||
                          ("checked" == d && "defaultChecked" in k)
                        )
                          continue;
                        D(e, d, null, m, a);
                      }
                    for (d in k)
                      (m = k[d]),
                        "children" == d
                          ? (f = m)
                          : "dangerouslySetInnerHTML" == d
                          ? (h = m)
                          : "value" == d
                          ? (_ = m)
                          : "checked" == d
                          ? (y = m)
                          : (l && "function" != typeof m) ||
                            w[d] === m ||
                            D(e, d, m, w[d], a);
                    if (h)
                      l ||
                        (p &&
                          (h.__html === p.__html ||
                            h.__html === e.innerHTML)) ||
                        (e.innerHTML = h.__html),
                        (t.__k = []);
                    else if (
                      (p && (e.innerHTML = ""),
                      L(
                        "template" === t.type ? e.content : e,
                        b(f) ? f : [f],
                        t,
                        n,
                        r,
                        "foreignObject" == C
                          ? "http://www.w3.org/1999/xhtml"
                          : a,
                        o,
                        c,
                        o ? o[0] : n.__k && M(n, 0),
                        l,
                        u
                      ),
                      null != o)
                    )
                      for (d = o.length; d--; ) v(o[d]);
                    l ||
                      ((d = "value"),
                      "progress" == C && null == _
                        ? e.removeAttribute("value")
                        : void 0 === _ ||
                          (_ === e[d] &&
                            ("progress" != C || _) &&
                            ("option" != C || _ === w[d])) ||
                          D(e, d, _, w[d], a),
                      (d = "checked"),
                      void 0 !== y && y !== e[d] && D(e, d, y, w[d], a));
                  }
                  return e;
                })(n.__e, t, n, r, a, o, c, u, d));
        return (h = s.diffed) && h(t), 128 & t.__u ? void 0 : l;
      }
      function T(e, t, n) {
        for (var i = 0; i < n.length; i++) j(n[i], n[++i], n[++i]);
        s.__c && s.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              s.__e(e, t.__v);
            }
          });
      }
      function j(e, t, n) {
        try {
          if ("function" == typeof e) {
            var i = "function" == typeof e.__u;
            i && e.__u(), (i && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          s.__e(e, n);
        }
      }
      function O(e, t, n) {
        return this.constructor(e, n);
      }
      function U(e, t, n) {
        var r, a, o, c;
        t == document && (t = document.documentElement),
          s.__ && s.__(e, t),
          (a = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (o = []),
          (c = []),
          R(
            t,
            (e = ((!r && n) || t).__k = k(I, null, [e])),
            a || g,
            g,
            t.namespaceURI,
            !r && n
              ? [n]
              : a
              ? null
              : t.firstChild
              ? i.call(t.childNodes)
              : null,
            o,
            !r && n ? n : a ? a.__e : t.firstChild,
            r,
            c
          ),
          T(o, e, c);
      }
      function W(e, t) {
        U(e, t, W);
      }
      function q(e, t, n) {
        var s,
          r,
          a,
          o,
          c = w({}, e.props);
        for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps),
        t))
          "key" == a
            ? (s = t[a])
            : "ref" == a
            ? (r = t[a])
            : (c[a] = void 0 === t[a] && void 0 !== o ? o[a] : t[a]);
        return (
          arguments.length > 2 &&
            (c.children = arguments.length > 3 ? i.call(arguments, 2) : n),
          C(e.type, c, s || e.key, r || e.ref, null)
        );
      }
      function H(e) {
        function t(e) {
          var n, i;
          return (
            this.getChildContext ||
              ((n = new Set()),
              ((i = {})[t.__c] = this),
              (this.getChildContext = function () {
                return i;
              }),
              (this.componentWillUnmount = function () {
                n = null;
              }),
              (this.shouldComponentUpdate = function (e) {
                this.props.value !== e.value &&
                  n.forEach(function (e) {
                    (e.__e = !0), x(e);
                  });
              }),
              (this.sub = function (e) {
                n.add(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function () {
                  n && n.delete(e), t && t.call(e);
                };
              })),
            e.children
          );
        }
        return (
          (t.__c = "__cC" + m++),
          (t.__ = e),
          (t.Provider =
            t.__l =
            (t.Consumer = function (e, t) {
              return e.children(t);
            }).contextType =
              t),
          t
        );
      }
      (i = _.slice),
        (s = {
          __e: function (e, t, n, i) {
            for (var s, r, a; (t = t.__); )
              if ((s = t.__c) && !s.__)
                try {
                  if (
                    ((r = s.constructor) &&
                      null != r.getDerivedStateFromError &&
                      (s.setState(r.getDerivedStateFromError(e)), (a = s.__d)),
                    null != s.componentDidCatch &&
                      (s.componentDidCatch(e, i || {}), (a = s.__d)),
                    a)
                  )
                    return (s.__E = s);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (r = 0),
        (a = function (e) {
          return null != e && null == e.constructor;
        }),
        (S.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = w({}, this.state))),
            "function" == typeof e && (e = e(w({}, n), this.props)),
            e && w(n, e),
            null != e && this.__v && (t && this._sb.push(t), x(this));
        }),
        (S.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), x(this));
        }),
        (S.prototype.render = I),
        (o = []),
        (l =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (A.__r = 0),
        (d = /(PointerCapture)$|Capture$/i),
        (h = 0),
        (p = N(!1)),
        (f = N(!0)),
        (m = 0);
    },
    30396: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCallback: function () {
            return I;
          },
          useContext: function () {
            return S;
          },
          useDebugValue: function () {
            return M;
          },
          useEffect: function () {
            return w;
          },
          useErrorBoundary: function () {
            return x;
          },
          useId: function () {
            return A;
          },
          useImperativeHandle: function () {
            return C;
          },
          useLayoutEffect: function () {
            return v;
          },
          useMemo: function () {
            return E;
          },
          useReducer: function () {
            return b;
          },
          useRef: function () {
            return k;
          },
          useState: function () {
            return y;
          },
        });
      var i,
        s,
        r,
        a,
        o = n(6400),
        c = 0,
        l = [],
        u = o.options,
        d = u.__b,
        h = u.__r,
        p = u.diffed,
        f = u.__c,
        m = u.unmount,
        g = u.__;
      function _(e, t) {
        u.__h && u.__h(s, e, c || t), (c = 0);
        var n = s.__H || (s.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function y(e) {
        return (c = 1), b(j, e);
      }
      function b(e, t, n) {
        var r = _(i++, 2);
        if (
          ((r.t = e),
          !r.__c &&
            ((r.__ = [
              n ? n(t) : j(void 0, t),
              function (e) {
                var t = r.__N ? r.__N[0] : r.__[0],
                  n = r.t(t, e);
                t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
              },
            ]),
            (r.__c = s),
            !s.__f))
        ) {
          var a = function (e, t, n) {
            if (!r.__c.__H) return !0;
            var i = r.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              i.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, n);
            var s = r.__c.props !== e;
            return (
              i.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
                }
              }),
              (o && o.call(this, e, t, n)) || s
            );
          };
          s.__f = !0;
          var o = s.shouldComponentUpdate,
            c = s.componentWillUpdate;
          (s.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var i = o;
              (o = void 0), a(e, t, n), (o = i);
            }
            c && c.call(this, e, t, n);
          }),
            (s.shouldComponentUpdate = a);
        }
        return r.__N || r.__;
      }
      function w(e, t) {
        var n = _(i++, 3);
        !u.__s && T(n.__H, t) && ((n.__ = e), (n.u = t), s.__H.__h.push(n));
      }
      function v(e, t) {
        var n = _(i++, 4);
        !u.__s && T(n.__H, t) && ((n.__ = e), (n.u = t), s.__h.push(n));
      }
      function k(e) {
        return (
          (c = 5),
          E(function () {
            return { current: e };
          }, [])
        );
      }
      function C(e, t, n) {
        (c = 6),
          v(
            function () {
              if ("function" == typeof e) {
                var n = e(t());
                return function () {
                  e(null), n && "function" == typeof n && n();
                };
              }
              if (e)
                return (
                  (e.current = t()),
                  function () {
                    return (e.current = null);
                  }
                );
            },
            null == n ? n : n.concat(e)
          );
      }
      function E(e, t) {
        var n = _(i++, 7);
        return T(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
      }
      function I(e, t) {
        return (
          (c = 8),
          E(function () {
            return e;
          }, t)
        );
      }
      function S(e) {
        var t = s.context[e.__c],
          n = _(i++, 9);
        return (
          (n.c = e),
          t ? (null == n.__ && ((n.__ = !0), t.sub(s)), t.props.value) : e.__
        );
      }
      function M(e, t) {
        u.useDebugValue && u.useDebugValue(t ? t(e) : e);
      }
      function x(e) {
        var t = _(i++, 10),
          n = y();
        return (
          (t.__ = e),
          s.componentDidCatch ||
            (s.componentDidCatch = function (e, i) {
              t.__ && t.__(e, i), n[1](e);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function A() {
        var e = _(i++, 11);
        if (!e.__) {
          for (var t = s.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + n[0] + "-" + n[1]++;
        }
        return e.__;
      }
      function L() {
        for (var e; (e = l.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(N), e.__H.__h.forEach(R), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), u.__e(t, e.__v);
            }
      }
      (u.__b = function (e) {
        (s = null), d && d(e);
      }),
        (u.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), g && g(e, t);
        }),
        (u.__r = function (e) {
          h && h(e), (i = 0);
          var t = (s = e.__c).__H;
          t &&
            (r === s
              ? ((t.__h = []),
                (s.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                }))
              : (t.__h.forEach(N), t.__h.forEach(R), (t.__h = []), (i = 0))),
            (r = s);
        }),
        (u.diffed = function (e) {
          p && p(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== l.push(t) && a === u.requestAnimationFrame) ||
                ((a = u.requestAnimationFrame) || D)(L)),
            t.__H.__.forEach(function (e) {
              e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (r = s = null);
        }),
        (u.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(N),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || R(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                u.__e(n, e.__v);
            }
          }),
            f && f(e, t);
        }),
        (u.unmount = function (e) {
          m && m(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                N(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && u.__e(t, n.__v));
        });
      var P = "function" == typeof requestAnimationFrame;
      function D(e) {
        var t,
          n = function () {
            clearTimeout(i), P && cancelAnimationFrame(t), setTimeout(e);
          },
          i = setTimeout(n, 100);
        P && (t = requestAnimationFrame(n));
      }
      function N(e) {
        var t = s,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (s = t);
      }
      function R(e) {
        var t = s;
        (e.__c = e.__()), (s = t);
      }
      function T(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function j(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    42817: function (e, t, n) {
      var i = n(48764).Buffer;
      let s = n(91488);
      function r(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        if ("fixed" === e) return "fixed128x128";
        if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function a(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function u(e, t) {
        if ("address" === e) return u("uint160", l(t));
        if ("bool" === e) return u("uint8", t ? 1 : 0);
        if ("string" === e) return u("bytes", new i(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (h in ((d = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            d.push(u(e, t[h]));
          if ("dynamic" === n) {
            var n,
              r,
              d,
              h,
              p,
              f = u("uint256", t.length);
            d.unshift(f);
          }
          return i.concat(d);
        }
        if ("bytes" === e)
          return (
            (t = new i(t)),
            (d = i.concat([u("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (d = i.concat([d, s.zeros(32 - (t.length % 32))])),
            d
          );
        if (e.startsWith("bytes")) {
          if ((n = a(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return s.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          r = l(t);
          let i = s.bitLengthFromBigInt(r);
          if (i > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + i);
          if (r < 0) throw Error("Supplied uint is negative");
          return s.bufferBEFromBigInt(r, 32);
        } else if (e.startsWith("int")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          r = l(t);
          let i = s.bitLengthFromBigInt(r);
          if (i > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + i);
          let o = s.twosFromBigInt(r, 256);
          return s.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = o(e)), (r = l(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return u("uint256", r * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (n = o(e)), u("int256", l(t) * BigInt(2) ** BigInt(n[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function d(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, o, c = [], u = 0; u < e.length; u++) {
          var d = r(e[u]),
            h = t[u];
          if ("bytes" === d) c.push(h);
          else if ("string" === d) c.push(new i(h, "utf8"));
          else if ("bool" === d) c.push(new i(h ? "01" : "00", "hex"));
          else if ("address" === d) c.push(s.setLength(h, 20));
          else if (d.startsWith("bytes")) {
            if ((n = a(d)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            c.push(s.setLengthRight(h, n));
          } else if (d.startsWith("uint")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            o = l(h);
            let e = s.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            c.push(s.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith("int")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            o = l(h);
            let e = s.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = s.twosFromBigInt(o, n);
            c.push(s.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + d);
        }
        return i.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            s = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = r(e[o]),
              d = u(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === c(l)
              ? (n.push(u("uint256", a)), s.push(d), (a += d.length))
              : n.push(d);
          }
          return i.concat(n.concat(s));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return s.keccak(d(e, t));
        },
      };
    },
    87009: function (e, t, n) {
      var i = n(48764).Buffer;
      let s = n(91488),
        r = n(42817),
        a = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, n, a = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, n)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : s.keccak(this.encodeData(t, o, n, a)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", s.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = i.from(o, "utf8")),
                    ["bytes32", s.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    i = o.map((t) => l(e, n, t));
                  return [
                    "bytes32",
                    s.keccak(
                      r.rawEncode(
                        i.map(([e]) => e),
                        i.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let i of n[e]) {
                let [e, n] = l(i.name, i.type, t[i.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let r of n[e]) {
                let e = t[r.name];
                if (void 0 !== e) {
                  if ("bytes" === r.type)
                    o.push("bytes32"), (e = s.keccak(e)), c.push(e);
                  else if ("string" === r.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = i.from(e, "utf8")),
                      (e = s.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[r.type])
                    o.push("bytes32"),
                      (e = s.keccak(this.encodeData(r.type, e, n, a))),
                      c.push(e);
                  else if (r.type.lastIndexOf("]") === r.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(r.type), c.push(e);
                }
              }
            return r.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = "",
              i = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let s of (i = [e].concat(i.sort()))) {
              let e = t[s];
              if (!e) throw Error("No type definition specified: " + s);
              n +=
                s +
                "(" +
                t[s].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let i of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(i.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, i = !0) {
            return s.keccak(this.encodeData(e, t, n, i));
          },
          hashType(e, t) {
            return s.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in a.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              r = [i.from("1901", "hex")];
            return (
              r.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                r.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              s.keccak(i.concat(r))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? s.toBuffer(e.value) : e.value;
              }),
              i = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return r.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                r.soliditySHA3(Array(e.length).fill("string"), a),
                r.soliditySHA3(i, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    91488: function (e, t, n) {
      var i = n(48764).Buffer;
      let { keccak_256: s } = n(85426);
      function r(e) {
        return i.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let s = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; s.length < t; ) s.unshift(0);
        return i.from(s);
      }
      function o(e, t, n) {
        let i = r(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(i), i)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(i, t - e.length), i)
          : e.slice(-t);
      }
      function c(e) {
        if (!i.isBuffer(e)) {
          if (Array.isArray(e)) e = i.from(e);
          else if ("string" == typeof e) {
            var t;
            e = l(e)
              ? i.from((t = u(e)).length % 2 ? "0" + t : t, "hex")
              : i.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = i.allocUnsafe(0);
          else if ("bigint" == typeof e) e = a(e);
          else if (e.toArray) e = i.from(e.toArray());
          else throw Error("invalid type");
        }
        return e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function u(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: r,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: u,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return i.from(s(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          let n;
          if (e < 0n) {
            let i = (1n << BigInt(t)) - 1n;
            n = (~e & i) + 1n;
          } else n = e;
          return n & ((1n << BigInt(t)) - 1n);
        },
      };
    },
    83646: function (e, t, n) {
      "use strict";
      let i;
      n.r(t),
        n.d(t, {
          CoinbaseWalletSDK: function () {
            return e3;
          },
          createCoinbaseWalletSDK: function () {
            return e4;
          },
          default: function () {
            return e8;
          },
        });
      let s = (e, t) => {
        switch (e) {
          case "standard":
          default:
            return `data:image/svg+xml,%3Csvg width='${t}' height='${t}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
          case "circle":
            return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${t}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
          case "text":
            return `data:image/svg+xml,%3Csvg width='${t}' height='${(
              0.1 * t
            ).toFixed(
              2
            )}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
          case "textWithLogo":
            return `data:image/svg+xml,%3Csvg width='${t}' height='${(
              0.25 * t
            ).toFixed(
              2
            )}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
          case "textLight":
            return `data:image/svg+xml,%3Csvg width='${t}' height='${(
              0.1 * t
            ).toFixed(
              2
            )}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
          case "textWithLogoLight":
            return `data:image/svg+xml,%3Csvg width='${t}' height='${(
              0.25 * t
            ).toFixed(
              2
            )}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        }
      };
      class r {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let i = localStorage.key(n);
            "string" == typeof i && i.startsWith(e) && t.push(i);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new r("CBWSDK").clear(), new r("walletlink").clear();
        }
      }
      let a = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        o = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        c = "Unspecified error message.";
      function l(e, t = c) {
        if (e && Number.isInteger(e)) {
          let t = e.toString();
          if (d(o, t)) return o[t].message;
          if (e >= -32099 && e <= -32e3) return "Unspecified server error.";
        }
        return t;
      }
      function u(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function d(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function h(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let p = {
        rpc: {
          parse: (e) => f(a.rpc.parse, e),
          invalidRequest: (e) => f(a.rpc.invalidRequest, e),
          invalidParams: (e) => f(a.rpc.invalidParams, e),
          methodNotFound: (e) => f(a.rpc.methodNotFound, e),
          internal: (e) => f(a.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return f(t, e);
          },
          invalidInput: (e) => f(a.rpc.invalidInput, e),
          resourceNotFound: (e) => f(a.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => f(a.rpc.resourceUnavailable, e),
          transactionRejected: (e) => f(a.rpc.transactionRejected, e),
          methodNotSupported: (e) => f(a.rpc.methodNotSupported, e),
          limitExceeded: (e) => f(a.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => m(a.provider.userRejectedRequest, e),
          unauthorized: (e) => m(a.provider.unauthorized, e),
          unsupportedMethod: (e) => m(a.provider.unsupportedMethod, e),
          disconnected: (e) => m(a.provider.disconnected, e),
          chainDisconnected: (e) => m(a.provider.chainDisconnected, e),
          unsupportedChain: (e) => m(a.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: i } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new y(t, n, i);
          },
        },
      };
      function f(e, t) {
        let [n, i] = g(t);
        return new _(e, n || l(e), i);
      }
      function m(e, t) {
        let [n, i] = g(t);
        return new y(e, n || l(e), i);
      }
      function g(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class _ extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class y extends _ {
        constructor(e, t, n) {
          if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      let b = (e) => e,
        w = (e) => e,
        v = (e) => e;
      function k(e) {
        return Math.floor(e);
      }
      var C,
        E,
        I = n(48764).Buffer;
      let S = /^[0-9]*$/,
        M = /^[a-f0-9]*$/;
      function x(e) {
        return A(crypto.getRandomValues(new Uint8Array(e)));
      }
      function A(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function L(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function P(e, t = !1) {
        let n = e.toString("hex");
        return b(t ? `0x${n}` : n);
      }
      function D(e) {
        return P(H(e), !0);
      }
      function N(e) {
        return v(e.toString(10));
      }
      function R(e) {
        return b(`0x${BigInt(e).toString(16)}`);
      }
      function T(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function j(e) {
        return T(e) ? e.slice(2) : e;
      }
      function O(e) {
        return T(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function U(e) {
        if ("string" != typeof e) return !1;
        let t = j(e).toLowerCase();
        return M.test(t);
      }
      function W(e, t = !1) {
        let n = (function (e, t = !1) {
          if ("string" == typeof e) {
            let n = j(e).toLowerCase();
            if (M.test(n)) return b(t ? `0x${n}` : n);
          }
          throw p.rpc.invalidParams(
            `"${String(e)}" is not a hexadecimal string`
          );
        })(e, !1);
        return n.length % 2 == 1 && (n = b(`0${n}`)), t ? b(`0x${n}`) : n;
      }
      function q(e) {
        if ("string" == typeof e) {
          let t = j(e).toLowerCase();
          if (U(t) && 40 === t.length) return w(O(t));
        }
        throw p.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function H(e) {
        if (I.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (U(e)) {
            let t = W(e, !1);
            return I.from(t, "hex");
          }
          return I.from(e, "utf8");
        }
        throw p.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function V(e) {
        if ("number" == typeof e && Number.isInteger(e)) return k(e);
        if ("string" == typeof e) {
          if (S.test(e)) return k(Number(e));
          if (U(e)) return k(Number(BigInt(W(e, !0))));
        }
        throw p.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function Z(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(V(e));
        if ("string" == typeof e) {
          if (S.test(e)) return BigInt(e);
          if (U(e)) return BigInt(W(e, !0));
        }
        throw p.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function z() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function K(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function B(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          i = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: i };
      }
      async function F(e, { iv: t, cipherText: n }) {
        let i = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(i);
      }
      function $(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function G(e, t) {
        let n = $(e),
          i = await crypto.subtle.exportKey(n, t);
        return A(new Uint8Array(i));
      }
      async function J(e, t) {
        let n = $(e),
          i = L(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(i),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function Y(e, t) {
        let n = JSON.stringify(e, (e, t) =>
          t instanceof Error
            ? Object.assign(Object.assign({}, t.code ? { code: t.code } : {}), {
                message: t.message,
              })
            : t
        );
        return B(t, n);
      }
      async function Q(e, t) {
        return JSON.parse(await F(t, e));
      }
      let X = { storageKey: "ownPrivateKey", keyType: "private" },
        ee = { storageKey: "ownPublicKey", keyType: "public" },
        et = { storageKey: "peerPublicKey", keyType: "public" };
      class en {
        constructor() {
          (this.storage = new r("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(et, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(ee.storageKey),
            this.storage.removeItem(X.storageKey),
            this.storage.removeItem(et.storageKey);
        }
        async generateKeyPair() {
          let e = await z();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(X, e.privateKey),
            await this.storeKey(ee, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(X)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(ee)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(et)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await K(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? J(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await G(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      }
      let ei = "4.3.0",
        es = "@coinbase/wallet-sdk";
      async function er(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          i = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": ei,
              "X-Cbw-Sdk-Platform": es,
            },
          }),
          { result: s, error: r } = await i.json();
        if (r) throw r;
        return s;
      }
      function ea({ metadata: e, preference: t }) {
        var n, i;
        let { appName: s, appLogoUrl: r, appChainIds: a } = e;
        if ("smartWalletOnly" !== t.options) {
          let e = (function () {
            let e = globalThis;
            return e.coinbaseWalletExtension;
          })();
          if (e)
            return (
              null === (n = e.setAppInfo) ||
                void 0 === n ||
                n.call(e, s, r, a, t),
              e
            );
        }
        let o = (function () {
          var e, t;
          try {
            let n = globalThis;
            return null !== (e = n.ethereum) && void 0 !== e
              ? e
              : null === (t = n.top) || void 0 === t
              ? void 0
              : t.ethereum;
          } catch (e) {
            return;
          }
        })();
        if (null == o ? void 0 : o.isCoinbaseBrowser)
          return (
            null === (i = o.setAppInfo) ||
              void 0 === i ||
              i.call(o, s, r, a, t),
            o
          );
      }
      let eo = "accounts",
        ec = "activeChain",
        el = "availableChains",
        eu = "walletCapabilities";
      class ed {
        constructor(e) {
          var t, n, i;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new en()),
            (this.storage = new r("CBWSDK", "SCWStateManager")),
            (this.accounts =
              null !== (t = this.storage.loadObject(eo)) && void 0 !== t
                ? t
                : []),
            (this.chain = this.storage.loadObject(ec) || {
              id:
                null !==
                  (i =
                    null === (n = e.metadata.appChainIds) || void 0 === n
                      ? void 0
                      : n[0]) && void 0 !== i
                  ? i
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n, i, s;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) ||
          void 0 === n
            ? void 0
            : n.call(t));
          let r = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (i = e.params) && void 0 !== i ? i : {}
                ),
              },
            }),
            a = await this.communicator.postRequestAndWaitForResponse(r);
          if ("failure" in a.content) throw a.content.failure;
          let o = await J("public", a.sender);
          await this.keyManager.setPeerPublicKey(o);
          let c = await this.decryptResponseMessage(a),
            l = c.result;
          if ("error" in l) throw l.error;
          if ("eth_requestAccounts" === e.method) {
            let e = l.value;
            (this.accounts = e),
              this.storage.storeObject(eo, e),
              null === (s = this.callback) ||
                void 0 === s ||
                s.call(this, "accountsChanged", e);
          }
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length) {
            if ("wallet_sendCalls" === e.method)
              return this.sendRequestToPopup(e);
            throw p.provider.unauthorized();
          }
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, "connect", { chainId: R(this.chain.id) }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return R(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(eu);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl)
                throw p.rpc.internal("No RPC URL set for chain");
              return er(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) ||
          void 0 === n
            ? void 0
            : n.call(t));
          let i = await this.sendEncryptedRequest(e),
            s = await this.decryptResponseMessage(i),
            r = s.result;
          if ("error" in r) throw r.error;
          return r.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t =
                    null === (e = this.metadata.appChainIds) || void 0 === e
                      ? void 0
                      : e[0]) && void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
            throw p.rpc.invalidParams();
          let i = V(n[0].chainId),
            s = this.updateChain(i);
          if (s) return null;
          let r = await this.sendRequestToPopup(e);
          return null === r && this.updateChain(i), r;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw p.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let n = await Y({ action: e, chainId: this.chain.id }, t),
            i = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(i);
        }
        async createRequestMessage(e) {
          let t = await G("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let i = e.content;
          if ("failure" in i) throw i.failure;
          let s = await this.keyManager.getSharedSecret();
          if (!s) throw p.provider.unauthorized("Invalid session");
          let r = await Q(i.encrypted, s),
            a = null === (t = r.data) || void 0 === t ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            this.storage.storeObject(el, e), this.updateChain(this.chain.id, e);
          }
          let o =
            null === (n = r.data) || void 0 === n ? void 0 : n.capabilities;
          return o && this.storage.storeObject(eu, o), r;
        }
        updateChain(e, t) {
          var n;
          let i = null != t ? t : this.storage.loadObject(el),
            s = null == i ? void 0 : i.find((t) => t.id === e);
          return (
            !!s &&
            (s !== this.chain &&
              ((this.chain = s),
              this.storage.storeObject(ec, s),
              null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, "chainChanged", R(s.id))),
            !0)
          );
        }
      }
      var eh = n(87009);
      let ep = "Addresses";
      function ef(e) {
        return void 0 !== e.errorMessage;
      }
      class em {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            i = await crypto.subtle.importKey(
              "raw",
              L(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            s = new TextEncoder(),
            r = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              i,
              s.encode(e)
            ),
            a = r.slice(r.byteLength - 16),
            o = r.slice(0, r.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o),
            u = new Uint8Array([...n, ...c, ...l]);
          return A(u);
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, i) => {
            !(async function () {
              let s = await crypto.subtle.importKey(
                  "raw",
                  L(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                r = L(e),
                a = r.slice(0, 12),
                o = r.slice(12, 28),
                c = r.slice(28),
                l = new Uint8Array([...c, ...o]),
                u = { name: "AES-GCM", iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(u, s, l),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                i(e);
              }
            })();
          });
        }
      }
      class eg {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let i = `${t}:${n}`;
          this.auth = `Basic ${btoa(i)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: i } = await t.json();
            if (i) throw Error(`Check unseen events failed: ${i}`);
            let s =
              null !==
                (e =
                  null == n
                    ? void 0
                    : n
                        .filter((e) => "Web3Response" === e.event)
                        .map((e) => ({
                          type: "Event",
                          sessionId: this.sessionId,
                          eventId: e.id,
                          event: e.event,
                          data: e.data,
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(s), s;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      ((C = E || (E = {}))[(C.DISCONNECTED = 0)] = "DISCONNECTED"),
        (C[(C.CONNECTING = 1)] = "CONNECTING"),
        (C[(C.CONNECTED = 2)] = "CONNECTED");
      class e_ {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var n;
            let i;
            try {
              this.webSocket = i = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, E.CONNECTING),
              (i.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, E.DISCONNECTED);
              }),
              (i.onopen = (t) => {
                var n;
                if (
                  (e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, E.CONNECTED),
                  this.pendingData.length > 0)
                ) {
                  let e = [...this.pendingData];
                  e.forEach((e) => this.sendData(e)), (this.pendingData = []);
                }
              }),
              (i.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (n = this.incomingDataListener) ||
                      void 0 === n ||
                      n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, E.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      class ey {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = k(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              if (!e) return;
              let t = new Map([
                ["__destroyed", this.handleDestroyed],
                ["EthereumAddress", this.handleAccountUpdated],
                ["WalletUsername", this.handleWalletUsernameUpdated],
                ["AppVersion", this.handleAppVersionUpdated],
                [
                  "ChainId",
                  (t) =>
                    e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                ],
              ]);
              t.forEach((t, n) => {
                let i = e[n];
                void 0 !== i && t(i);
              });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e &&
                (null === (t = this.listener) ||
                  void 0 === t ||
                  t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null === (t = this.listener) ||
                void 0 === t ||
                t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let i = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.metadataUpdated(e, i);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let i = await this.cipher.decrypt(e),
                s = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.chainUpdated(i, s);
            }),
            (this.session = e),
            (this.cipher = new em(e.secret)),
            (this.listener = n);
          let i = new e_(`${t}/rpc`, WebSocket);
          i.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case E.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        i.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case E.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case E.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            i.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null === (t = this.requestResolutions.get(e.id)) ||
                  void 0 === t ||
                  t(e));
            }),
            (this.ws = i),
            (this.http = new eg(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: k(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e &&
              (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (n = this.listener) || void 0 === n || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" !== e.type || "Web3Response" !== e.event) return;
          let n = await this.cipher.decrypt(e.data),
            i = JSON.parse(n);
          if ("WEB3_RESPONSE" !== i.type) return;
          let { id: s, response: r } = i;
          null === (t = this.listener) ||
            void 0 === t ||
            t.handleWeb3ResponseMessage(s, r);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          this.shouldFetchUnseenEventsOnConnect = !1;
          let e = await this.http.fetchUnseenEvents();
          e.forEach((e) => this.handleIncomingEvent(e));
        }
        async publishEvent(e, t, n = !1) {
          let i = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            s = {
              type: "PublishEvent",
              id: k(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: i,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(s);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n;
          let i = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, s) => {
                n = window.setTimeout(() => {
                  s(Error(`request ${i} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(i, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(i);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          let e = await this.makeRequest({
            type: "HostSession",
            id: k(this.nextReqId++),
            sessionId: this.session.id,
            sessionKey: this.session.key,
          });
          return (
            "Fail" !== e.type &&
            (this.sendData({
              type: "IsLinked",
              id: k(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: k(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class eb {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          let e = this._nextRequestId,
            t = O(e.toString(16)),
            n = this.callbacks.get(t);
          return n && this.callbacks.delete(t), e;
        }
      }
      var ew = n(53932),
        ev = n(66409);
      let ek = "session:id",
        eC = "session:secret",
        eE = "session:linked";
      class eI {
        constructor(e, t, n, i = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, ev.ci)((0, ew.JQ)(`${t}, ${n} WalletLink`))),
            (this._linked = !!i);
        }
        static create(e) {
          let t = x(16),
            n = x(32);
          return new eI(e, t, n).save();
        }
        static load(e) {
          let t = e.getItem(ek),
            n = e.getItem(eE),
            i = e.getItem(eC);
          return t && i ? new eI(e, t, i, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(ek, this.id),
            this.storage.setItem(eC, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(eE, this._linked ? "1" : "0");
        }
      }
      function eS() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = null == window ? void 0 : window.matchMedia) ||
              void 0 === e
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) &&
          void 0 !== t &&
          t
        );
      }
      function eM() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function ex() {
        for (var e, t, n = 0, i = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                i,
                s = "";
              if ("string" == typeof t || "number" == typeof t) s += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (i = e(t[n])) && (s && (s += " "), (s += i));
                else for (n in t) t[n] && (s && (s += " "), (s += n));
              }
              return s;
            })(e)) &&
            (i && (i += " "), (i += t));
        return i;
      }
      var eA = n(6400),
        eL = n(30396);
      class eP {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = eS());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, eA.render)(
              (0, eA.h)(
                "div",
                null,
                (0, eA.h)(
                  eD,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    (0, eA.h)(eN, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let eD = (e) =>
          (0, eA.h)(
            "div",
            { class: ex("-cbwsdk-snackbar-container") },
            (0, eA.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            (0, eA.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        eN = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [i, s] = (0, eL.useState)(!0),
            [r, a] = (0, eL.useState)(null != e && e);
          (0, eL.useEffect)(() => {
            let e = [
              window.setTimeout(() => {
                s(!1);
              }, 1),
              window.setTimeout(() => {
                a(!0);
              }, 1e4),
            ];
            return () => {
              e.forEach(window.clearTimeout);
            };
          });
          let o = () => {
            a(!r);
          };
          return (0, eA.h)(
            "div",
            {
              class: ex(
                "-cbwsdk-snackbar-instance",
                i && "-cbwsdk-snackbar-instance-hidden",
                r && "-cbwsdk-snackbar-instance-expanded"
              ),
            },
            (0, eA.h)(
              "div",
              { class: "-cbwsdk-snackbar-instance-header", onClick: o },
              (0, eA.h)("img", {
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                class: "-cbwsdk-snackbar-instance-header-cblogo",
              }),
              " ",
              (0, eA.h)(
                "div",
                { class: "-cbwsdk-snackbar-instance-header-message" },
                t
              ),
              (0, eA.h)(
                "div",
                { class: "-gear-container" },
                !r &&
                  (0, eA.h)(
                    "svg",
                    {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    (0, eA.h)("circle", {
                      cx: "12",
                      cy: "12",
                      r: "12",
                      fill: "#F5F7F8",
                    })
                  ),
                (0, eA.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                  class: "-gear-icon",
                  title: "Expand",
                })
              )
            ),
            n &&
              n.length > 0 &&
              (0, eA.h)(
                "div",
                { class: "-cbwsdk-snackbar-instance-menu" },
                n.map((e, t) =>
                  (0, eA.h)(
                    "div",
                    {
                      class: ex(
                        "-cbwsdk-snackbar-instance-menu-item",
                        e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"
                      ),
                      onClick: e.onClick,
                      key: t,
                    },
                    (0, eA.h)(
                      "svg",
                      {
                        width: e.svgWidth,
                        height: e.svgHeight,
                        viewBox: "0 0 10 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, eA.h)("path", {
                        "fill-rule": e.defaultFillRule,
                        "clip-rule": e.defaultClipRule,
                        d: e.path,
                        fill: "#AAAAAA",
                      })
                    ),
                    (0, eA.h)(
                      "span",
                      {
                        class: ex(
                          "-cbwsdk-snackbar-instance-menu-item-info",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                        ),
                      },
                      e.info
                    )
                  )
                )
              )
          );
        };
      class eR {
        constructor() {
          (this.attached = !1), (this.snackbar = new eP());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            eM();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      class eT {
        constructor() {
          (this.root = null), (this.darkMode = eS());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            eM();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, eA.render)(null, this.root),
            e &&
              (0, eA.render)(
                (0, eA.h)(
                  ej,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let ej = ({
          title: e,
          buttonText: t,
          darkMode: n,
          onButtonClick: i,
          onDismiss: s,
        }) =>
          (0, eA.h)(
            eD,
            { darkMode: n },
            (0, eA.h)(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              (0, eA.h)(
                "style",
                null,
                ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
              ),
              (0, eA.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: s,
              }),
              (0, eA.h)(
                "div",
                {
                  class: ex(
                    "-cbwsdk-redirect-dialog-box",
                    n ? "dark" : "light"
                  ),
                },
                (0, eA.h)("p", null, e),
                (0, eA.h)("button", { onClick: i }, t)
              )
            )
          ),
        eO = "https://www.walletlink.org";
      class eU {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new eT());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class eW {
        constructor(e) {
          var t;
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null === (t = null == window ? void 0 : window.navigator) ||
                  void 0 === t
                  ? void 0
                  : t.userAgent
              )),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(ep);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  i = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  i ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                eW.accountRequestCallbackIds.size > 0 &&
                  (Array.from(eW.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  eW.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: n, ui: i, connection: s } = this.subscribe();
          (this._session = n),
            (this.connection = s),
            (this.relayEventManager = new eb()),
            (this.ui = i),
            this.ui.attach();
        }
        subscribe() {
          let e = eI.load(this.storage) || eI.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new ey({ session: e, linkAPIUrl: t, listener: this }),
            i = this.isMobileWeb ? new eU() : new eR();
          return n.connect(), { session: e, ui: i, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = eI.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && r.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: N(e.weiValue),
              data: P(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? N(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? N(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? N(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? N(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: N(e.weiValue),
              data: P(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? N(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? N(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? N(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? N(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: P(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = x(8),
            i = (i) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, i),
                null == t || t();
            };
          return new Promise((s, r) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: i,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), ef(e))) return r(Error(e.errorMessage));
                s(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof eU)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            eW.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              eW.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var i;
          let s =
            null !== (i = null == n ? void 0 : n.message) && void 0 !== i
              ? i
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: s });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            i = x(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(i, (n) => {
              if (ef(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              eW.accountRequestCallbackIds.add(i),
              this.publishWeb3RequestEvent(i, n);
          });
        }
        watchAsset(e, t, n, i, s, r) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: i, image: s },
                chainId: r,
              },
            },
            o = null,
            c = x(8),
            l = (e) => {
              this.publishWeb3RequestCanceledEvent(c),
                this.handleErrorResponse(c, a.method, e),
                null == o || o();
            };
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: l,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ef(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, i, s, r) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: i,
                chainName: s,
                iconUrls: n,
                nativeCurrency: r,
              },
            },
            o = null,
            c = x(8),
            l = (e) => {
              this.publishWeb3RequestCanceledEvent(c),
                this.handleErrorResponse(c, a.method, e),
                null == o || o();
            };
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: l,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ef(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            i = null,
            s = x(8),
            r = (e) => {
              this.publishWeb3RequestCanceledEvent(s),
                this.handleErrorResponse(s, n.method, e),
                null == i || i();
            };
          return (
            (i = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: r,
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(s, (n) =>
                (null == i || i(), ef(n) && n.errorCode)
                  ? t(
                      p.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : ef(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(s, n);
            })
          );
        }
      }
      eW.accountRequestCallbackIds = new Set();
      var eq = n(48764).Buffer;
      let eH = "DefaultChainId",
        eV = "DefaultJsonRpcUrl";
      class eZ {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new r("walletlink", eO)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(ep);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => q(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let e = this.initializeRelay(),
            { id: t, secret: n } = e.getWalletLinkSession();
          return { id: t, secret: n };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(eV)) && void 0 !== e
            ? e
            : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(eV, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let i = this.getChainId();
          this._storage.setItem(eH, t.toString(10));
          let s = V(t) !== i;
          s &&
            (null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "chainChanged", R(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw p.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw p.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw p.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw p.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: i, symbol: s, image: r, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              i,
              s,
              a,
              r,
              null == n ? void 0 : n.toString()
            );
          return !ef(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let i = e[0];
          if (
            (null === (t = i.rpcUrls) || void 0 === t ? void 0 : t.length) === 0
          )
            throw p.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!i.chainName || "" === i.chainName.trim())
            throw p.rpc.invalidParams("chainName is a required field");
          if (!i.nativeCurrency)
            throw p.rpc.invalidParams("nativeCurrency is a required field");
          let s = Number.parseInt(i.chainId, 16);
          if (s === this.getChainId()) return !1;
          let r = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: u,
            } = i,
            d = await r.addEthereumChain(s.toString(), a, l, o, c, u);
          if (ef(d)) return !1;
          if (
            (null === (n = d.result) || void 0 === n
              ? void 0
              : n.isApproved) === !0
          )
            return this.updateProviderInfo(a[0], s), null;
          throw p.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = e[0],
            n = Number.parseInt(t.chainId, 16),
            i = this.initializeRelay(),
            s = await i.switchEthereumChain(
              n.toString(10),
              this.selectedAddress || void 0
            );
          if (ef(s)) throw s;
          let r = s.result;
          return (
            r.isApproved &&
              r.rpcUrl.length > 0 &&
              this.updateProviderInfo(r.rpcUrl, n),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let i = e.map((e) => q(e));
          JSON.stringify(i) !== JSON.stringify(this._addresses) &&
            ((this._addresses = i),
            null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "accountsChanged", i),
            this._storage.setItem(ep, i.join(" ")));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return R(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw p.rpc.internal("No RPC URL set for chain");
              return er(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = q(e),
            n = this._addresses.map((e) => q(e));
          if (!n.includes(t)) throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? q(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? q(e.to) : null,
            i = null != e.value ? Z(e.value) : BigInt(0),
            s = e.data ? H(e.data) : eq.alloc(0),
            r = null != e.nonce ? V(e.nonce) : null,
            a = null != e.gasPrice ? Z(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? Z(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas ? Z(e.maxPriorityFeePerGas) : null,
            l = null != e.gas ? Z(e.gas) : null,
            u = e.chainId ? V(e.chainId) : this.getChainId();
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: i,
            data: s,
            nonce: r,
            gasPriceInWei: a,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            gasLimit: l,
            chainId: u,
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw p.rpc.invalidParams();
          let i = this.initializeRelay(),
            s = await i.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: D(n[0]),
                signature: D(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (ef(s)) throw s;
          return s.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null !== (e = this._storage.getItem(eH)) && void 0 !== e ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, "connect", { chainId: R(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            i = await n.requestEthereumAccounts();
          if (ef(i)) throw i;
          if (!i.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(i.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, "connect", { chainId: R(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw p.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let i = this.initializeRelay(),
            s = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: q(t),
                message: D(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (ef(s)) throw s;
          return s.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            i = await n.signEthereumTransaction(t);
          if (ef(i)) throw i;
          return i.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = H(e[0]),
            n = this.initializeRelay(),
            i = await n.submitEthereumTransaction(t, this.getChainId());
          if (ef(i)) throw i;
          return i.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            i = await n.signAndSubmitEthereumTransaction(t);
          if (ef(i)) throw i;
          return i.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw p.rpc.invalidParams();
          let i = n["eth_signTypedData_v1" === t ? 1 : 0],
            s = n["eth_signTypedData_v1" === t ? 0 : 1];
          this._ensureKnownAddress(i);
          let r = this.initializeRelay(),
            a = await r.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: q(i),
                message: ((e) => {
                  let n = {
                    eth_signTypedData_v1: eh.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: eh.hashForSignTypedData_v3,
                    eth_signTypedData_v4: eh.hashForSignTypedData_v4,
                    eth_signTypedData: eh.hashForSignTypedData_v4,
                  };
                  return P(
                    n[t]({
                      data: (function (e) {
                        if ("string" == typeof e) return JSON.parse(e);
                        if ("object" == typeof e) return e;
                        throw p.rpc.invalidParams(
                          `Not a JSON string or an object: ${String(e)}`
                        );
                      })(e),
                    }),
                    !0
                  );
                })(s),
                typedDataJson: JSON.stringify(s, null, 2),
                addPrefix: !1,
              },
            });
          if (ef(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new eW({
                linkAPIUrl: eO,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let ez = "SignerType",
        eK = new r("CBWSDK", "SignerConfigurator");
      async function eB(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: i,
          callback: s,
        } = e;
        eF(t, n, s).catch(() => {});
        let r = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: i,
            }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(r);
        return a;
      }
      async function eF(e, t, n) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let i = new eZ({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: i.getSession() },
        }),
          await i.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      let e$ = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: eG, getCrossOriginOpenerPolicy: eJ } = {
          getCrossOriginOpenerPolicy: () => (void 0 === i ? "undefined" : i),
          checkCrossOriginOpenerPolicy: async () => {
            if ("undefined" == typeof window) {
              i = "non-browser-env";
              return;
            }
            try {
              let e = `${window.location.origin}${window.location.pathname}`,
                t = await fetch(e, { method: "HEAD" });
              if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
              let n = t.headers.get("Cross-Origin-Opener-Policy");
              (i = null != n ? n : "null"),
                "same-origin" === i && console.error(e$);
            } catch (e) {
              console.error(
                "Error checking Cross-Origin-Opener-Policy:",
                e.message
              ),
                (i = "error");
            }
          },
        };
      class eY {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              let t = await this.waitForPopupLoaded();
              t.postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let i = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let s = n.data;
                  e(s) &&
                    (t(s),
                    window.removeEventListener("message", i),
                    this.listeners.delete(i));
                };
                window.addEventListener("message", i),
                  this.listeners.set(i, { reject: n });
              })),
            (this.disconnect = () => {
              var e;
              (e = this.popup) && !e.closed && e.close(),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(p.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    (function (e) {
                      let t = {
                        sdkName: es,
                        sdkVersion: ei,
                        origin: window.location.origin,
                        coop: eJ(),
                      };
                      for (let [n, i] of Object.entries(t))
                        e.searchParams.append(n, i.toString());
                    })(e);
                    let i = `wallet_${crypto.randomUUID()}`,
                      s = window.open(
                        e,
                        i,
                        `width=420, height=540, left=${t}, top=${n}`
                      );
                    if ((null == s || s.focus(), !s))
                      throw p.rpc.internal("Pop up window failed to open");
                    return s;
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: ei,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw p.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var eQ = n(54146);
      class eX extends eQ.v {}
      var e0 = function (e, t) {
        var n = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            0 > t.indexOf(i) &&
            (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, i = Object.getOwnPropertySymbols(e);
            s < i.length;
            s++
          )
            0 > t.indexOf(i[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (n[i[s]] = e[i[s]]);
        return n;
      };
      class e1 extends eX {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: i } = n,
            s = e0(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = s),
            (this.communicator = new eY({
              url: i,
              metadata: t,
              preference: s,
            }));
          let r = eK.getItem(ez);
          r && (this.signer = this.initSigner(r));
        }
        async request(e) {
          try {
            if (
              (!(function (e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                  throw p.rpc.invalidParams({
                    message: "Expected a single, non-array, object argument.",
                    data: e,
                  });
                let { method: t, params: n } = e;
                if ("string" != typeof t || 0 === t.length)
                  throw p.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e,
                  });
                if (
                  void 0 !== n &&
                  !Array.isArray(n) &&
                  ("object" != typeof n || null === n)
                )
                  throw p.rpc.invalidParams({
                    message:
                      "'args.params' must be an object or array if provided.",
                    data: e,
                  });
                switch (t) {
                  case "eth_sign":
                  case "eth_signTypedData_v2":
                  case "eth_subscribe":
                  case "eth_unsubscribe":
                    throw p.provider.unsupportedMethod();
                }
              })(e),
              !this.signer)
            )
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), eK.setItem(ez, t);
                  break;
                }
                case "wallet_sendCalls": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return er(e, "http://rpc.wallet.coinbase.com");
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return R(1);
                default:
                  throw p.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === a.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      let n = {};
                      return (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        d(e, "code") &&
                        (function (e) {
                          if (!Number.isInteger(e)) return !1;
                          let t = e.toString();
                          return !!(o[t] || (e >= -32099 && e <= -32e3));
                        })(e.code)
                          ? ((n.code = e.code),
                            e.message && "string" == typeof e.message
                              ? ((n.message = e.message),
                                d(e, "data") && (n.data = e.data))
                              : ((n.message = l(n.code)),
                                (n.data = { originalError: u(e) })))
                          : ((n.code = a.rpc.internal),
                            (n.message = h(e, "message") ? e.message : c),
                            (n.data = { originalError: u(e) })),
                        t && (n.stack = h(e, "stack") ? e.stack : void 0),
                        n
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: a.rpc.internal };
                        if (ef(e)) {
                          let n = e.errorMessage,
                            i =
                              null !== (t = e.errorCode) && void 0 !== t
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? a.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: i,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", ei),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null === (e = this.signer) || void 0 === e
            ? void 0
            : e.cleanup()),
            (this.signer = null),
            r.clearAll(),
            this.emit(
              "disconnect",
              p.provider.disconnected("User initiated disconnection")
            );
        }
        requestSignerSelection(e) {
          return eB({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          return (function (e) {
            let {
              signerType: t,
              metadata: n,
              communicator: i,
              callback: s,
            } = e;
            switch (t) {
              case "scw":
                return new ed({ metadata: n, callback: s, communicator: i });
              case "walletlink":
                return new eZ({ metadata: n, callback: s });
            }
          })({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      }
      function e2(e) {
        if (e) {
          if (!["all", "smartWalletOnly", "eoaOnly"].includes(e.options))
            throw Error(`Invalid options: ${e.options}`);
          if (
            e.attribution &&
            void 0 !== e.attribution.auto &&
            void 0 !== e.attribution.dataSuffix
          )
            throw Error(
              "Attribution cannot contain both auto and dataSuffix properties"
            );
        }
      }
      class e3 {
        constructor(e) {
          (this.metadata = {
            appName: e.appName || "Dapp",
            appLogoUrl:
              e.appLogoUrl ||
              (function () {
                let e =
                    document.querySelector('link[sizes="192x192"]') ||
                    document.querySelector('link[sizes="180x180"]') ||
                    document.querySelector('link[rel="icon"]') ||
                    document.querySelector('link[rel="shortcut icon"]'),
                  { protocol: t, host: n } = document.location,
                  i = e ? e.getAttribute("href") : null;
                return !i ||
                  i.startsWith("javascript:") ||
                  i.startsWith("vbscript:")
                  ? `${t}//${n}/favicon.ico`
                  : i.startsWith("http://") ||
                    i.startsWith("https://") ||
                    i.startsWith("data:")
                  ? i
                  : i.startsWith("//")
                  ? t + i
                  : `${t}//${n}${i}`;
              })(),
            appChainIds: e.appChainIds || [],
          }),
            this.storeLatestVersion(),
            eG();
        }
        makeWeb3Provider(e = { options: "all" }) {
          var t;
          e2(e);
          let n = { metadata: this.metadata, preference: e };
          return null !== (t = ea(n)) && void 0 !== t ? t : new e1(n);
        }
        getCoinbaseWalletLogo(e, t = 240) {
          return s(e, t);
        }
        storeLatestVersion() {
          let e = new r("CBWSDK");
          e.setItem("VERSION", ei);
        }
      }
      let e5 = { options: "all" };
      function e4(e) {
        var t;
        let n = new r("CBWSDK");
        n.setItem("VERSION", ei), eG();
        let i = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(
            e5,
            null !== (t = e.preference) && void 0 !== t ? t : {}
          ),
        };
        e2(i.preference);
        let s = null;
        return {
          getProvider: () => (
            s ||
              (s = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !== (t = ea(n)) && void 0 !== t ? t : new e1(n);
              })(i)),
            s
          ),
        };
      }
      var e8 = e3;
    },
  },
]);
