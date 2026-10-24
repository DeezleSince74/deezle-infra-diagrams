/* Deezle Infra Diagrams: rf-app, part 1 of 4. The server joins the parts in order and inlines them into the widget page. Built from src/widget-app by scripts/build-server.mjs. */
"use strict";
var InfraDiagram = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn2, res) =>
    function __init() {
      return (fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])((fn2 = 0))), res);
    };
  var __commonJS = (cb, mod) =>
    function __require() {
      return (
        mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
        mod.exports
      );
    };
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, "default", { value: mod, enumerable: true })
        : target,
      mod,
    )
  );
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function m(n2, l3) {
    for (var u4 in l3) n2[u4] = l3[u4];
    return n2;
  }
  function b(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function k(l3, u4, t3) {
    var i4,
      r3,
      o3,
      e3 = {};
    for (o3 in u4) "key" == o3 ? (i4 = u4[o3]) : "ref" == o3 ? (r3 = u4[o3]) : (e3[o3] = u4[o3]);
    if (
      (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3),
      "function" == typeof l3 && null != l3.defaultProps)
    )
      for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return x(l3, e3, i4, r3, null);
  }
  function x(n2, t3, i4, r3, o3) {
    var e3 = {
      type: n2,
      props: t3,
      key: i4,
      ref: r3,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: null == o3 ? ++u : o3,
      __i: -1,
      __u: 0,
    };
    return (null == o3 && null != l.vnode && l.vnode(e3), e3);
  }
  function M() {
    return { current: null };
  }
  function S(n2) {
    return n2.children;
  }
  function C(n2, l3) {
    ((this.props = n2), (this.context = l3));
  }
  function $(n2, l3) {
    if (null == l3) return n2.__ ? $(n2.__, n2.__i + 1) : null;
    for (var u4; l3 < n2.__k.length; l3++)
      if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
    return "function" == typeof n2.type ? $(n2) : null;
  }
  function I(n2) {
    if (n2.__P && n2.__d) {
      var u4 = n2.__v,
        t3 = u4.__e,
        i4 = [],
        r3 = [],
        o3 = m({}, u4);
      ((o3.__v = u4.__v + 1),
        l.vnode && l.vnode(o3),
        q(
          n2.__P,
          o3,
          u4,
          n2.__n,
          n2.__P.namespaceURI,
          32 & u4.__u ? [t3] : null,
          i4,
          null == t3 ? $(u4) : t3,
          !!(32 & u4.__u),
          r3,
        ),
        (o3.__v = u4.__v),
        (o3.__.__k[o3.__i] = o3),
        D(i4, o3, r3),
        (u4.__e = u4.__ = null),
        o3.__e != t3 && P(o3));
    }
  }
  function P(n2) {
    if (null != (n2 = n2.__) && null != n2.__c)
      return (
        (n2.__e = n2.__c.base = null),
        n2.__k.some(function (l3) {
          if (null != l3 && null != l3.__e) return (n2.__e = n2.__c.base = l3.__e);
        }),
        P(n2)
      );
  }
  function A(n2) {
    ((!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++) || r != l.debounceRendering) &&
      ((r = l.debounceRendering) || o)(H);
  }
  function H() {
    try {
      for (var n2, l3 = 1; i.length;)
        (i.length > l3 && i.sort(e), (n2 = i.shift()), (l3 = i.length), I(n2));
    } finally {
      i.length = H.__r = 0;
    }
  }
  function L(n2, l3, u4, t3, i4, r3, o3, e3, f4, c3, a3) {
    var s3,
      h3,
      p3,
      v3,
      y3,
      _3,
      g4 = (t3 && t3.__k) || w,
      m3 = l3.length;
    for (f4 = T(u4, l3, g4, f4, m3), s3 = 0; s3 < m3; s3++)
      null != (p3 = u4.__k[s3]) &&
        ((h3 = (-1 != p3.__i && g4[p3.__i]) || d),
        (p3.__i = s3),
        (_3 = q(n2, p3, h3, i4, r3, o3, e3, f4, c3, a3)),
        (v3 = p3.__e),
        p3.ref &&
          h3.ref != p3.ref &&
          (h3.ref && J(h3.ref, null, p3), a3.push(p3.ref, p3.__c || v3, p3)),
        null == y3 && null != v3 && (y3 = v3),
        4 & p3.__u
          ? ((f4 = j(p3, f4, n2)), h3.__e && (h3.__e = null))
          : "function" == typeof p3.type && void 0 !== _3
            ? (f4 = _3)
            : v3 && (f4 = v3.nextSibling),
        (p3.__u &= -7));
    return ((u4.__e = y3), f4);
  }
  function T(n2, l3, u4, t3, i4) {
    var r3,
      o3,
      e3,
      f4,
      c3,
      a3 = u4.length,
      s3 = a3,
      h3 = 0;
    for (n2.__k = new Array(i4), r3 = 0; r3 < i4; r3++)
      null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3
        ? ("string" == typeof o3 ||
          "number" == typeof o3 ||
          "bigint" == typeof o3 ||
          o3.constructor == String
            ? (o3 = n2.__k[r3] = x(null, o3, null, null, null))
            : g(o3)
              ? (o3 = n2.__k[r3] = x(S, { children: o3 }, null, null, null))
              : void 0 === o3.constructor && o3.__b > 0
                ? (o3 = n2.__k[r3] = x(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v))
                : (n2.__k[r3] = o3),
          (f4 = r3 + h3),
          (o3.__ = n2),
          (o3.__b = n2.__b + 1),
          (e3 = null),
          -1 != (c3 = o3.__i = O(o3, u4, f4, s3)) && (s3--, (e3 = u4[c3]) && (e3.__u |= 2)),
          null == e3 || null == e3.__v
            ? (-1 == c3 && (i4 > a3 ? h3-- : i4 < a3 && h3++),
              "function" != typeof o3.type && (o3.__u |= 4))
            : c3 != f4 &&
              (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, (o3.__u |= 4))))
        : (n2.__k[r3] = null);
    if (s3)
      for (r3 = 0; r3 < a3; r3++)
        null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = $(e3)), K(e3, e3));
    return t3;
  }
  function j(n2, l3, u4) {
    var t3, i4;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i4 = 0; t3 && i4 < t3.length; i4++)
        t3[i4] && ((t3[i4].__ = n2), (l3 = j(t3[i4], l3, u4)));
      return l3;
    }
    n2.__e != l3 &&
      (l3 && n2.type && !l3.parentNode && (l3 = $(n2)), (l3 = u4.insertBefore(n2.__e, l3 || null)));
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function F(n2, l3) {
    return (
      (l3 = l3 || []),
      null == n2 ||
        "boolean" == typeof n2 ||
        (g(n2)
          ? n2.some(function (n3) {
              F(n3, l3);
            })
          : l3.push(n2)),
      l3
    );
  }
  function O(n2, l3, u4, t3) {
    var i4,
      r3,
      o3,
      e3 = n2.key,
      f4 = n2.type,
      c3 = l3[u4],
      a3 = null != c3 && 0 == (2 & c3.__u);
    if ((null === c3 && null == e3) || (a3 && e3 == c3.key && f4 == c3.type)) return u4;
    if (t3 > (a3 ? 1 : 0)) {
      for (i4 = u4 - 1, r3 = u4 + 1; i4 >= 0 || r3 < l3.length;)
        if (
          null != (c3 = l3[(o3 = i4 >= 0 ? i4-- : r3++)]) &&
          0 == (2 & c3.__u) &&
          e3 == c3.key &&
          f4 == c3.type
        )
          return o3;
    }
    return -1;
  }
  function z(n2, l3, u4) {
    "-" == l3[0]
      ? n2.setProperty(l3, null == u4 ? "" : u4)
      : (n2[l3] = null == u4 ? "" : "number" != typeof u4 || _.test(l3) ? u4 : u4 + "px");
  }
  function N(n2, l3, u4, t3, i4) {
    var r3, o3;
    n: if ("style" == l3)
      if ("string" == typeof u4) n2.style.cssText = u4;
      else {
        if (("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3))
          for (l3 in t3) (u4 && l3 in u4) || z(n2.style, l3, "");
        if (u4) for (l3 in u4) (t3 && u4[l3] == t3[l3]) || z(n2.style, l3, u4[l3]);
      }
    else if ("o" == l3[0] && "n" == l3[1])
      ((r3 = l3 != (l3 = l3.replace(s, "$1"))),
        (o3 = l3.toLowerCase()),
        (l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2)),
        n2.l || (n2.l = {}),
        (n2.l[l3 + r3] = u4),
        u4
          ? t3
            ? (u4[a] = t3[a])
            : ((u4[a] = h), n2.addEventListener(l3, r3 ? v : p, r3))
          : n2.removeEventListener(l3, r3 ? v : p, r3));
    else {
      if ("http://www.w3.org/2000/svg" == i4)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "width" != l3 &&
        "height" != l3 &&
        "href" != l3 &&
        "list" != l3 &&
        "form" != l3 &&
        "tabIndex" != l3 &&
        "download" != l3 &&
        "rowSpan" != l3 &&
        "colSpan" != l3 &&
        "role" != l3 &&
        "popover" != l3 &&
        l3 in n2
      )
        try {
          n2[l3] = null == u4 ? "" : u4;
          break n;
        } catch (n3) {}
      "function" == typeof u4 ||
        (null == u4 || (false === u4 && "-" != l3[4])
          ? n2.removeAttribute(l3)
          : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
    }
  }
  function V(n2) {
    return function (u4) {
      if (this.l) {
        var t3 = this.l[u4.type + n2];
        if (null == u4[c]) u4[c] = h++;
        else if (u4[c] < t3[a]) return;
        return t3(l.event ? l.event(u4) : u4);
      }
    };
  }
  function q(n2, u4, t3, i4, r3, o3, e3, f4, c3, a3) {
    var s3,
      h3,
      p3,
      v3,
      y3,
      d3,
      _3,
      k4,
      x4,
      M3,
      I3,
      P4,
      A4,
      H3,
      T4,
      j4,
      F4 = u4.type;
    if (void 0 !== u4.constructor) return null;
    (128 & t3.__u && ((c3 = !!(32 & t3.__u)), (o3 = [(f4 = u4.__e = t3.__e)])),
      (s3 = l.__b) && s3(u4));
    n: if ("function" == typeof F4) {
      h3 = e3.length;
      try {
        if (
          ((x4 = u4.props),
          (M3 = F4.prototype && F4.prototype.render),
          (I3 = (s3 = F4.contextType) && i4[s3.__c]),
          (P4 = s3 ? (I3 ? I3.props.value : s3.__) : i4),
          t3.__c
            ? (k4 = (p3 = u4.__c = t3.__c).__ = p3.__E)
            : (M3
                ? (u4.__c = p3 = new F4(x4, P4))
                : ((u4.__c = p3 = new C(x4, P4)), (p3.constructor = F4), (p3.render = Q)),
              I3 && I3.sub(p3),
              p3.state || (p3.state = {}),
              (p3.__n = i4),
              (v3 = p3.__d = true),
              (p3.__h = []),
              (p3._sb = [])),
          M3 && null == p3.__s && (p3.__s = p3.state),
          M3 &&
            null != F4.getDerivedStateFromProps &&
            (p3.__s == p3.state && (p3.__s = m({}, p3.__s)),
            m(p3.__s, F4.getDerivedStateFromProps(x4, p3.__s))),
          (y3 = p3.props),
          (d3 = p3.state),
          (p3.__v = u4),
          v3)
        )
          (M3 &&
            null == F4.getDerivedStateFromProps &&
            null != p3.componentWillMount &&
            p3.componentWillMount(),
            M3 && null != p3.componentDidMount && p3.__h.push(p3.componentDidMount));
        else {
          if (
            (M3 &&
              null == F4.getDerivedStateFromProps &&
              x4 !== y3 &&
              null != p3.componentWillReceiveProps &&
              p3.componentWillReceiveProps(x4, P4),
            u4.__v == t3.__v ||
              (!p3.__e &&
                null != p3.shouldComponentUpdate &&
                false === p3.shouldComponentUpdate(x4, p3.__s, P4)))
          ) {
            (u4.__v != t3.__v && ((p3.props = x4), (p3.state = p3.__s), (p3.__d = false)),
              (u4.__e = t3.__e),
              (u4.__k = t3.__k),
              u4.__k.some(function (n3) {
                n3 && (n3.__ = u4);
              }),
              w.push.apply(p3.__h, p3._sb),
              (p3._sb = []),
              p3.__h.length && e3.push(p3),
              (f4 = $(t3)));
            break n;
          }
          (null != p3.componentWillUpdate && p3.componentWillUpdate(x4, p3.__s, P4),
            M3 &&
              null != p3.componentDidUpdate &&
              p3.__h.push(function () {
                p3.componentDidUpdate(y3, d3, _3);
              }));
        }
        if (
          ((p3.context = P4),
          (p3.props = x4),
          (p3.__P = n2),
          (p3.__e = false),
          (A4 = l.__r),
          (H3 = 0),
          M3)
        )
          ((p3.state = p3.__s),
            (p3.__d = false),
            A4 && A4(u4),
            (s3 = p3.render(p3.props, p3.state, p3.context)),
            w.push.apply(p3.__h, p3._sb),
            (p3._sb = []));
        else
          do {
            ((p3.__d = false),
              A4 && A4(u4),
              (s3 = p3.render(p3.props, p3.state, p3.context)),
              (p3.state = p3.__s));
          } while (p3.__d && ++H3 < 25);
        ((p3.state = p3.__s),
          null != p3.getChildContext && (i4 = m(m({}, i4), p3.getChildContext())),
          M3 &&
            !v3 &&
            null != p3.getSnapshotBeforeUpdate &&
            (_3 = p3.getSnapshotBeforeUpdate(y3, d3)),
          (T4 = null != s3 && s3.type === S && null == s3.key ? E(s3.props.children) : s3),
          (f4 = L(n2, g(T4) ? T4 : [T4], u4, t3, i4, r3, o3, e3, f4, c3, a3)),
          (p3.base = u4.__e),
          (u4.__u &= -161),
          p3.__h.length && e3.push(p3),
          k4 && (p3.__E = p3.__ = null));
      } catch (n3) {
        if (((e3.length = h3), (u4.__v = null), c3 || null != o3)) {
          if (n3.then) {
            for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling;)
              f4 = f4.nextSibling;
            (null != o3 && (o3[o3.indexOf(f4)] = null), (u4.__e = f4));
          } else if (null != o3) for (j4 = o3.length; j4--;) b(o3[j4]);
        } else u4.__e = t3.__e;
        (null == u4.__k && (u4.__k = t3.__k || []), n3.then || B(u4), l.__e(n3, u4, t3));
      }
    } else
      null == o3 && u4.__v == t3.__v
        ? ((u4.__k = t3.__k), (u4.__e = t3.__e))
        : (f4 = u4.__e = G(t3.__e, u4, t3, i4, r3, o3, e3, c3, a3));
    return ((s3 = l.diffed) && s3(u4), 128 & u4.__u ? void 0 : f4);
  }
  function B(n2) {
    n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
  }
  function D(n2, u4, t3) {
    for (var i4 = 0; i4 < t3.length; i4++) J(t3[i4], t3[++i4], t3[++i4]);
    (l.__c && l.__c(u4, n2),
      n2.some(function (u5) {
        try {
          ((n2 = u5.__h),
            (u5.__h = []),
            n2.some(function (n3) {
              n3.call(u5);
            }));
        } catch (n3) {
          l.__e(n3, u5.__v);
        }
      }));
  }
  function E(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b > 0
      ? n2
      : g(n2)
        ? n2.map(E)
        : void 0 !== n2.constructor
          ? null
          : m({}, n2);
  }
  function G(u4, t3, i4, r3, o3, e3, f4, c3, a3) {
    var s3,
      h3,
      p3,
      v3,
      y3,
      w4,
      _3,
      m3 = i4.props || d,
      k4 = t3.props,
      x4 = t3.type;
    if (
      ("svg" == x4
        ? (o3 = "http://www.w3.org/2000/svg")
        : "math" == x4
          ? (o3 = "http://www.w3.org/1998/Math/MathML")
          : o3 || (o3 = "http://www.w3.org/1999/xhtml"),
      null != e3)
    ) {
      for (s3 = 0; s3 < e3.length; s3++)
        if (
          (y3 = e3[s3]) &&
          "setAttribute" in y3 == !!x4 &&
          (x4 ? y3.localName == x4 : 3 == y3.nodeType)
        ) {
          ((u4 = y3), (e3[s3] = null));
          break;
        }
    }
    if (null == u4) {
      if (null == x4) return document.createTextNode(k4);
      ((u4 = document.createElementNS(o3, x4, k4.is && k4)),
        c3 && (l.__m && l.__m(t3, e3), (c3 = false)),
        (e3 = null));
    }
    if (null == x4) m3 === k4 || (c3 && u4.data == k4) || (u4.data = k4);
    else {
      if (
        ((e3 = "textarea" == x4 && null != k4.defaultValue ? null : e3 && n.call(u4.childNodes)),
        !c3 && null != e3)
      )
        for (m3 = {}, s3 = 0; s3 < u4.attributes.length; s3++)
          m3[(y3 = u4.attributes[s3]).name] = y3.value;
      for (s3 in m3)
        ((y3 = m3[s3]),
          "dangerouslySetInnerHTML" == s3
            ? (p3 = y3)
            : "children" == s3 ||
              s3 in k4 ||
              ("value" == s3 && "defaultValue" in k4) ||
              ("checked" == s3 && "defaultChecked" in k4) ||
              N(u4, s3, null, y3, o3));
      for (s3 in k4)
        ((y3 = k4[s3]),
          "children" == s3
            ? (v3 = y3)
            : "dangerouslySetInnerHTML" == s3
              ? (h3 = y3)
              : "value" == s3
                ? (w4 = y3)
                : "checked" == s3
                  ? (_3 = y3)
                  : (c3 && "function" != typeof y3) || m3[s3] === y3 || N(u4, s3, y3, m3[s3], o3));
      if (h3)
        (c3 ||
          (p3 && (h3.__html == p3.__html || h3.__html == u4.innerHTML)) ||
          (u4.innerHTML = h3.__html),
          (t3.__k = []));
      else if (
        (p3 && (u4.innerHTML = ""),
        L(
          "template" == t3.type ? u4.content : u4,
          g(v3) ? v3 : [v3],
          t3,
          i4,
          r3,
          "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : o3,
          e3,
          f4,
          e3 ? e3[0] : i4.__k && $(i4, 0),
          c3,
          a3,
        ),
        null != e3)
      )
        for (s3 = e3.length; s3--;) b(e3[s3]);
      (c3 && "textarea" != x4) ||
        ((s3 = "value"),
        "progress" == x4 && null == w4
          ? u4.removeAttribute("value")
          : null != w4 &&
            (w4 !== u4[s3] || ("progress" == x4 && !w4) || ("option" == x4 && w4 != m3[s3])) &&
            N(u4, s3, w4, m3[s3], o3),
        (s3 = "checked"),
        null != _3 && _3 != u4[s3] && N(u4, s3, _3, m3[s3], o3));
    }
    return u4;
  }
  function J(n2, u4, t3) {
    try {
      if ("function" == typeof n2) {
        var i4 = "function" == typeof n2.__u;
        (i4 && n2.__u(), (i4 && null == u4) || (n2.__u = n2(u4)));
      } else n2.current = u4;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function K(n2, u4, t3) {
    var i4, r3;
    if (
      (l.unmount && l.unmount(n2),
      (i4 = n2.ref) && ((i4.current && i4.current != n2.__e) || J(i4, null, u4)),
      null != (i4 = n2.__c))
    ) {
      if (i4.componentWillUnmount)
        try {
          i4.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u4);
        }
      i4.base = i4.__P = i4.__n = null;
    }
    if ((i4 = n2.__k))
      for (r3 = 0; r3 < i4.length; r3++)
        i4[r3] && K(i4[r3], u4, t3 || "function" != typeof n2.type);
    (t3 || b(n2.__e), (n2.__c = n2.__ = n2.__e = void 0));
  }
  function Q(n2, l3, u4) {
    return this.constructor(n2, u4);
  }
  function R(u4, t3, i4) {
    var r3, o3, e3, f4;
    (t3 == document && (t3 = document.documentElement),
      l.__ && l.__(u4, t3),
      (o3 = (r3 = "function" == typeof i4) ? null : (i4 && i4.__k) || t3.__k),
      (e3 = []),
      (f4 = []),
      q(
        t3,
        (u4 = ((!r3 && i4) || t3).__k = k(S, null, [u4])),
        o3 || d,
        d,
        t3.namespaceURI,
        !r3 && i4 ? [i4] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null,
        e3,
        !r3 && i4 ? i4 : o3 ? o3.__e : t3.firstChild,
        r3,
        f4,
      ),
      D(e3, u4, f4),
      (u4.props.children = null));
  }
  function U(n2, l3) {
    R(n2, l3, U);
  }
  function W(l3, u4, t3) {
    var i4,
      r3,
      o3,
      e3,
      f4 = m({}, l3.props);
    for (o3 in (l3.type && l3.type.defaultProps && (e3 = l3.type.defaultProps), u4))
      "key" == o3
        ? (i4 = u4[o3])
        : "ref" == o3
          ? (r3 = u4[o3])
          : (f4[o3] = void 0 === u4[o3] && null != e3 ? e3[o3] : u4[o3]);
    return (
      arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3),
      x(l3.type, f4, i4 || l3.key, r3 || l3.ref, null)
    );
  }
  function X(n2) {
    function l3(n3) {
      var u4, t3;
      return (
        this.getChildContext ||
          ((u4 = /* @__PURE__ */ new Set()),
          ((t3 = {})[l3.__c] = this),
          (this.getChildContext = function () {
            return t3;
          }),
          (this.componentWillUnmount = function () {
            u4 = null;
          }),
          (this.shouldComponentUpdate = function (n4) {
            this.props.value != n4.value &&
              u4.forEach(function (n5) {
                ((n5.__e = true), A(n5));
              });
          }),
          (this.sub = function (n4) {
            u4.add(n4);
            var l4 = n4.componentWillUnmount;
            n4.componentWillUnmount = function () {
              (u4 && u4.delete(n4), l4 && l4.call(n4));
            };
          })),
        n3.children
      );
    }
    return (
      (l3.__c = "__cC" + y++),
      (l3.__ = n2),
      (l3.Provider =
        l3.__l =
        (l3.Consumer = function (n3, l4) {
          return n3.children(l4);
        }).contextType =
          l3),
      l3
    );
  }
  var n, l, u, t, i, r, o, e, f, c, a, s, h, p, v, y, d, w, _, g;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      d = {};
      w = [];
      _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      g = Array.isArray;
      ((n = w.slice),
        (l = {
          __e: function (n2, l3, u4, t3) {
            for (var i4, r3, o3; (l3 = l3.__);)
              if ((i4 = l3.__c) && !i4.__)
                try {
                  if (
                    ((r3 = i4.constructor) &&
                      null != r3.getDerivedStateFromError &&
                      (i4.setState(r3.getDerivedStateFromError(n2)), (o3 = i4.__d)),
                    null != i4.componentDidCatch &&
                      (i4.componentDidCatch(n2, t3 || {}), (o3 = i4.__d)),
                    o3)
                  )
                    return (i4.__E = i4);
                } catch (l4) {
                  n2 = l4;
                }
            throw n2;
          },
        }),
        (u = 0),
        (t = function (n2) {
          return null != n2 && void 0 === n2.constructor;
        }),
        (C.prototype.setState = function (n2, l3) {
          var u4;
          ((u4 =
            null != this.__s && this.__s != this.state ? this.__s : (this.__s = m({}, this.state))),
            "function" == typeof n2 && (n2 = n2(m({}, u4), this.props)),
            n2 && m(u4, n2),
            null != n2 && this.__v && (l3 && this._sb.push(l3), A(this)));
        }),
        (C.prototype.forceUpdate = function (n2) {
          this.__v && ((this.__e = true), n2 && this.__h.push(n2), A(this));
        }),
        (C.prototype.render = S),
        (i = []),
        (o =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (e = function (n2, l3) {
          return n2.__v.__b - l3.__v.__b;
        }),
        (H.__r = 0),
        (f = Math.random().toString(8)),
        (c = "__d" + f),
        (a = "__a" + f),
        (s = /(PointerCapture)$|Capture$/i),
        (h = 0),
        (p = V(false)),
        (v = V(true)),
        (y = 0));
    },
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function s2(n2, t3) {
    (c2.__h && c2.__h(r2, n2, o2 || t3), (o2 = 0));
    var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return (n2 >= u4.__.length && u4.__.push({}), u4.__[n2]);
  }
  function d2(n2) {
    return ((o2 = 1), y2(D2, n2));
  }
  function y2(n2, u4, i4) {
    var o3 = s2(t2++, 2);
    if (
      ((o3.t = n2),
      !o3.__c &&
        ((o3.__ = [
          i4 ? i4(u4) : D2(void 0, u4),
          function (n3) {
            var t3 = o3.__N ? o3.__N[0] : o3.__[0],
              r3 = o3.t(t3, n3);
            t3 !== r3 && ((o3.__N = [r3, o3.__[1]]), o3.__c.setState({}));
          },
        ]),
        (o3.__c = r2),
        !r2.__f))
    ) {
      var f4 = function (n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u5 = false,
          i5 = o3.__c.props !== n3;
        if (
          (o3.__c.__H.__.some(function (n4) {
            if (n4.__N) {
              u5 = true;
              var t4 = n4.__[0];
              ((n4.__ = n4.__N), (n4.__N = void 0), t4 !== n4.__[0] && (i5 = true));
            }
          }),
          c3)
        ) {
          var f5 = c3.call(this, n3, t3, r3);
          return u5 ? f5 || i5 : f5;
        }
        return !u5 || i5;
      };
      r2.__f = true;
      var c3 = r2.shouldComponentUpdate,
        e3 = r2.componentWillUpdate;
      ((r2.componentWillUpdate = function (n3, t3, r3) {
        if (this.__e) {
          var u5 = c3;
          ((c3 = void 0), f4(n3, t3, r3), (c3 = u5));
        }
        e3 && e3.call(this, n3, t3, r3);
      }),
        (r2.shouldComponentUpdate = f4));
    }
    return o3.__N || o3.__;
  }
  function h2(n2, u4) {
    var i4 = s2(t2++, 3);
    !c2.__s && C2(i4.__H, u4) && ((i4.__ = n2), (i4.u = u4), r2.__H.__h.push(i4));
  }
  function _2(n2, u4) {
    var i4 = s2(t2++, 4);
    !c2.__s && C2(i4.__H, u4) && ((i4.__ = n2), (i4.u = u4), r2.__h.push(i4));
  }
  function A2(n2) {
    return (
      (o2 = 5),
      T2(function () {
        return { current: n2 };
      }, [])
    );
  }
  function F2(n2, t3, r3) {
    ((o2 = 6),
      _2(
        function () {
          if ("function" == typeof n2) {
            var r4 = n2(t3());
            return function () {
              (n2(null), r4 && "function" == typeof r4 && r4());
            };
          }
          if (n2)
            return (
              (n2.current = t3()),
              function () {
                return (n2.current = null);
              }
            );
        },
        null == r3 ? r3 : r3.concat(n2),
      ));
  }
  function T2(n2, r3) {
    var u4 = s2(t2++, 7);
    return (C2(u4.__H, r3) && ((u4.__ = n2()), (u4.__H = r3), (u4.__h = n2)), u4.__);
  }
  function q2(n2, t3) {
    return (
      (o2 = 8),
      T2(function () {
        return n2;
      }, t3)
    );
  }
  function x2(n2) {
    var u4 = r2.context[n2.__c],
      i4 = s2(t2++, 9);
    return (
      (i4.c = n2),
      u4 ? (null == i4.__ && ((i4.__ = true), u4.sub(r2)), u4.props.value) : n2.__
    );
  }
  function P2(n2, t3) {
    c2.useDebugValue && c2.useDebugValue(t3 ? t3(n2) : n2);
  }
  function b2(n2) {
    var u4 = s2(t2++, 10),
      i4 = d2();
    return (
      (u4.__ = n2),
      r2.componentDidCatch ||
        (r2.componentDidCatch = function (n3, t3) {
          (u4.__ && u4.__(n3, t3), i4[1](n3));
        }),
      [
        i4[0],
        function () {
          i4[1](void 0);
        },
      ]
    );
  }
  function g2() {
    var n2 = s2(t2++, 11);
    if (!n2.__) {
      for (var u4 = r2.__v; null !== u4 && !u4.__m && null !== u4.__;) u4 = u4.__;
      var i4 = u4.__m || (u4.__m = [0, 0]);
      n2.__ = "P" + i4[0] + "-" + i4[1]++;
    }
    return n2.__;
  }
  function j2() {
    for (var n2; (n2 = f2.shift());) {
      var t3 = n2.__H;
      if (n2.__P && t3)
        try {
          (t3.__h.some(z2), t3.__h.some(B2), (t3.__h = []));
        } catch (r3) {
          ((t3.__h = []), c2.__e(r3, n2.__v));
        }
    }
  }
  function w2(n2) {
    var t3,
      r3 = function () {
        (clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2));
      },
      u4 = setTimeout(r3, 35);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2,
      u4 = n2.__c;
    ("function" == typeof u4 && ((n2.__c = void 0), u4()), (r2 = t3));
  }
  function B2(n2) {
    var t3 = r2;
    ((n2.__c = n2.__()), (r2 = t3));
  }
  function C2(n2, t3) {
    return (
      !n2 ||
      n2.length !== t3.length ||
      t3.some(function (t4, r3) {
        return t4 !== n2[r3];
      })
    );
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, p2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m2 = c2.unmount;
      p2 = c2.__;
      ((c2.__b = function (n2) {
        ((r2 = null), e2 && e2(n2));
      }),
        (c2.__ = function (n2, t3) {
          (n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), p2 && p2(n2, t3));
        }),
        (c2.__r = function (n2) {
          (a2 && a2(n2), (t2 = 0));
          var i4 = (r2 = n2.__c).__H;
          (i4 &&
            (u2 === r2
              ? ((i4.__h = []),
                (r2.__h = []),
                i4.__.some(function (n3) {
                  (n3.__N && (n3.__ = n3.__N), (n3.u = n3.__N = void 0));
                }))
              : (i4.__h.some(z2), i4.__h.some(B2), (i4.__h = []), (t2 = 0))),
            (u2 = r2));
        }),
        (c2.diffed = function (n2) {
          v2 && v2(n2);
          var t3 = n2.__c;
          (t3 &&
            t3.__H &&
            (t3.__H.__h.length &&
              ((1 !== f2.push(t3) && i2 === c2.requestAnimationFrame) ||
                ((i2 = c2.requestAnimationFrame) || w2)(j2)),
            t3.__H.__.some(function (n3) {
              n3.u && ((n3.__H = n3.u), (n3.u = void 0));
            })),
            (u2 = r2 = null));
        }),
        (c2.__c = function (n2, t3) {
          (t3.some(function (n3) {
            try {
              (n3.__h.some(z2),
                (n3.__h = n3.__h.filter(function (n4) {
                  return !n4.__ || B2(n4);
                })));
            } catch (r3) {
              (t3.some(function (n4) {
                n4.__h && (n4.__h = []);
              }),
                (t3 = []),
                c2.__e(r3, n3.__v));
            }
          }),
            l2 && l2(n2, t3));
        }),
        (c2.unmount = function (n2) {
          m2 && m2(n2);
          var t3,
            r3 = n2.__c;
          r3 &&
            r3.__H &&
            (r3.__H.__.some(function (n3) {
              try {
                z2(n3);
              } catch (n4) {
                t3 = n4;
              }
            }),
            (r3.__H = void 0),
            t3 && c2.__e(t3, r3.__v));
        }));
      k2 = "function" == typeof requestAnimationFrame;
    },
  });

  // node_modules/preact/compat/dist/compat.module.js
  var compat_module_exports = {};
  __export(compat_module_exports, {
    Children: () => L2,
    Component: () => C,
    Fragment: () => S,
    PureComponent: () => M2,
    StrictMode: () => S,
    Suspense: () => P3,
    SuspenseList: () => B3,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => an,
    cloneElement: () => mn,
    createContext: () => X,
    createElement: () => k,
    createFactory: () => sn,
    createPortal: () => $2,
    createRef: () => M,
    default: () => gn,
    findDOMNode: () => yn,
    flushSync: () => bn,
    forwardRef: () => D3,
    hydrate: () => tn,
    isElement: () => Sn,
    isFragment: () => vn,
    isMemo: () => dn,
    isValidElement: () => hn,
    lazy: () => z3,
    memo: () => N2,
    render: () => nn,
    startTransition: () => x3,
    unmountComponentAtNode: () => pn,
    unstable_batchedUpdates: () => _n,
    useCallback: () => q2,
    useContext: () => x2,
    useDebugValue: () => P2,
    useDeferredValue: () => w3,
    useEffect: () => h2,
    useErrorBoundary: () => b2,
    useId: () => g2,
    useImperativeHandle: () => F2,
    useInsertionEffect: () => I2,
    useLayoutEffect: () => _2,
    useMemo: () => T2,
    useReducer: () => y2,
    useRef: () => A2,
    useState: () => d2,
    useSyncExternalStore: () => C3,
    useTransition: () => k3,
    version: () => cn,
  });
  function g3(n2, t3) {
    for (var e3 in t3) n2[e3] = t3[e3];
    return n2;
  }
  function E2(n2, t3) {
    for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
    for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
    return false;
  }
  function C3(n2, t3) {
    var e3 = t3(),
      r3 = d2({ t: { __: e3, u: t3 } }),
      u4 = r3[0].t,
      o3 = r3[1];
    return (
      _2(
        function () {
          ((u4.__ = e3), (u4.u = t3), R2(u4) && o3({ t: u4 }));
        },
        [n2, e3, t3],
      ),
      h2(
        function () {
          return (
            R2(u4) && o3({ t: u4 }),
            n2(function () {
              R2(u4) && o3({ t: u4 });
            })
          );
        },
        [n2],
      ),
      e3
    );
  }
  function R2(n2) {
    try {
      return !(
        ((t3 = n2.__) === (e3 = n2.u()) && (0 !== t3 || 1 / t3 == 1 / e3)) ||
        (t3 != t3 && e3 != e3)
      );
    } catch (n3) {
      return true;
    }
    var t3, e3;
  }
  function x3(n2) {
    n2();
  }
  function w3(n2) {
    return n2;
  }
  function k3() {
    return [false, x3];
  }
  function M2(n2, t3) {
    ((this.props = n2), (this.context = t3));
  }
  function N2(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref;
      return (
        t3 != n3.ref && t3 && ("function" == typeof t3 ? t3(null) : (t3.current = null)),
        e3 ? !e3(this.props, n3) || t3 != n3.ref : E2(this.props, n3)
      );
    }
    function u4(e4) {
      return ((this.shouldComponentUpdate = r3), k(n2, e4));
    }
    return (
      (u4.displayName = "Memo(" + (n2.displayName || n2.name) + ")"),
      (u4.__f = u4.prototype.isReactComponent = true),
      (u4.type = n2),
      u4
    );
  }
  function D3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return (delete e3.ref, n2(e3, t4.ref || null));
    }
    return (
      (t3.$$typeof = A3),
      (t3.render = n2),
      (t3.prototype.isReactComponent = t3.__f = true),
      (t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")"),
      t3
    );
  }
  function V2(n2, t3, e3) {
    return (
      n2 &&
        (n2.__c &&
          n2.__c.__H &&
          (n2.__c.__H.__.forEach(function (n3) {
            "function" == typeof n3.__c && n3.__c();
          }),
          (n2.__c.__H = null)),
        null != (n2 = g3({}, n2)).__c &&
          (n2.__c.__P === e3 && (n2.__c.__P = t3), (n2.__c.__e = true), (n2.__c = null)),
        (n2.__k =
          n2.__k &&
          n2.__k.map(function (n3) {
            return V2(n3, t3, e3);
          }))),
      n2
    );
  }
  function W2(n2, t3, e3) {
    return (
      n2 &&
        e3 &&
        ((n2.__v = null),
        (n2.__k =
          n2.__k &&
          n2.__k.map(function (n3) {
            return W2(n3, t3, e3);
          })),
        n2.__c &&
          n2.__c.__P === t3 &&
          (n2.__e && e3.appendChild(n2.__e), (n2.__c.__e = true), (n2.__c.__P = e3))),
      n2
    );
  }
  function P3() {
    ((this.__u = 0), (this.o = null), (this.__b = null));
  }
  function j3(n2) {
    var t3 = n2.__ && n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function z3(n2) {
    var e3,
      r3,
      u4,
      o3 = null;
    function i4(i5) {
      if (
        (e3 ||
          (e3 = n2()).then(
            function (n3) {
              (n3 && (o3 = n3.default || n3), (u4 = true));
            },
            function (n3) {
              ((r3 = n3), (u4 = true));
            },
          ),
        r3)
      )
        throw r3;
      if (!u4) throw e3;
      return o3 ? k(o3, i5) : null;
    }
    return ((i4.displayName = "Lazy"), (i4.__f = true), i4);
  }
  function B3() {
    ((this.i = null), (this.l = null));
  }
  function Z(n2) {
    return (
      (this.getChildContext = function () {
        return n2.context;
      }),
      n2.children
    );
  }
  function Y(n2) {
    var e3 = this,
      r3 = n2.h;
    if (
      ((e3.componentWillUnmount = function () {
        (R(null, e3.v), (e3.v = null), (e3.h = null));
      }),
      e3.h && e3.h !== r3 && e3.componentWillUnmount(),
      !e3.v)
    ) {
      for (var u4 = e3.__v; null !== u4 && !u4.__m && null !== u4.__;) u4 = u4.__;
      ((e3.h = r3),
        (e3.v = {
          nodeType: 1,
          parentNode: r3,
          childNodes: [],
          __k: { __m: u4.__m },
          contains: function () {
            return true;
          },
          namespaceURI: r3.namespaceURI,
          insertBefore: function (n3, t3) {
            (this.childNodes.push(n3), e3.h.insertBefore(n3, t3));
          },
          removeChild: function (n3) {
            (this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.h.removeChild(n3));
          },
        }));
    }
    R(k(Z, { context: e3.context }, n2.__v), e3.v);
  }
  function $2(n2, e3) {
    var r3 = k(Y, { __v: n2, h: e3 });
    return ((r3.containerInfo = e3), r3);
  }
  function nn(n2, t3, e3) {
    return (
      null == t3.__k && (t3.textContent = ""),
      R(n2, t3),
      "function" == typeof e3 && e3(),
      n2 ? n2.__c : null
    );
  }
  function tn(n2, t3, e3) {
    return (U(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null);
  }
  function sn(n2) {
    return k.bind(null, n2);
  }
  function hn(n2) {
    return !!n2 && n2.$$typeof === q3;
  }
  function vn(n2) {
    return hn(n2) && n2.type === S;
  }
  function dn(n2) {
    return !!n2 && "string" == typeof n2.displayName && 0 == n2.displayName.indexOf("Memo(");
  }
  function mn(n2) {
    return hn(n2) ? W.apply(null, arguments) : n2;
  }
  function pn(n2) {
    return !!n2.__k && (R(null, n2), true);
  }
  function yn(n2) {
    return (n2 && (n2.base || (1 === n2.nodeType && n2))) || null;
  }
  var I2,
    T3,
    A3,
    F3,
    L2,
    O2,
    U2,
    H2,
    q3,
    G2,
    J2,
    K2,
    Q2,
    X2,
    en,
    rn,
    un,
    on,
    ln,
    fn,
    an,
    cn,
    _n,
    bn,
    Sn,
    gn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      I2 = _2;
      (((M2.prototype = new C()).isPureReactComponent = true),
        (M2.prototype.shouldComponentUpdate = function (n2, t3) {
          return E2(this.props, n2) || E2(this.state, t3);
        }));
      T3 = l.__b;
      l.__b = function (n2) {
        (n2.type && n2.type.__f && n2.ref && ((n2.props.ref = n2.ref), (n2.ref = null)),
          T3 && T3(n2));
      };
      A3 = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref")) || 3911;
      F3 = function (n2, t3) {
        return null == n2 ? null : F(F(n2).map(t3));
      };
      L2 = {
        map: F3,
        forEach: F3,
        count: function (n2) {
          return n2 ? F(n2).length : 0;
        },
        only: function (n2) {
          var t3 = F(n2);
          if (1 !== t3.length) throw "Children.only";
          return t3[0];
        },
        toArray: F,
      };
      O2 = l.__e;
      l.__e = function (n2, t3, e3, r3) {
        if (n2.then) {
          for (var u4, o3 = t3; (o3 = o3.__);)
            if ((u4 = o3.__c) && u4.__c)
              return (
                null == t3.__e && ((t3.__e = e3.__e), (t3.__k = e3.__k || [])),
                u4.__c(n2, t3)
              );
        }
        O2(n2, t3, e3, r3);
      };
      U2 = l.unmount;
      ((l.unmount = function (n2) {
        var t3 = n2.__c;
        (t3 && (t3.__z = true),
          t3 && t3.__R && t3.__R(),
          t3 && 32 & n2.__u && (n2.type = null),
          U2 && U2(n2));
      }),
        ((P3.prototype = new C()).__c = function (n2, t3) {
          var e3 = t3.__c,
            r3 = this;
          (null == r3.o && (r3.o = []), r3.o.push(e3));
          var u4 = j3(r3.__v),
            o3 = false,
            i4 = function () {
              o3 || r3.__z || ((o3 = true), (e3.__R = null), u4 ? u4(f4) : f4());
            };
          e3.__R = i4;
          var l3 = e3.__P;
          e3.__P = null;
          var f4 = function () {
            if (!--r3.__u) {
              if (r3.state.__a) {
                var n3 = r3.state.__a;
                r3.__v.__k[0] = W2(n3, n3.__c.__P, n3.__c.__O);
              }
              var t4;
              for (r3.setState({ __a: (r3.__b = null) }); (t4 = r3.o.pop());)
                ((t4.__P = l3), t4.forceUpdate());
            }
          };
          (r3.__u++ || 32 & t3.__u || r3.setState({ __a: (r3.__b = r3.__v.__k[0]) }),
            n2.then(i4, i4));
        }),
        (P3.prototype.componentWillUnmount = function () {
          this.o = [];
        }),
        (P3.prototype.render = function (n2, e3) {
          if (this.__b) {
            if (this.__v.__k) {
              var r3 = document.createElement("div"),
                o3 = this.__v.__k[0].__c;
              this.__v.__k[0] = V2(this.__b, r3, (o3.__O = o3.__P));
            }
            this.__b = null;
          }
          var i4 = e3.__a && k(S, null, n2.fallback);
          return (i4 && (i4.__u &= -33), [k(S, null, e3.__a ? null : n2.children), i4]);
        }));
      H2 = function (n2, t3, e3) {
        if (
          (++e3[1] === e3[0] && n2.l.delete(t3),
          n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size))
        )
          for (e3 = n2.i; e3;) {
            for (; e3.length > 3;) e3.pop()();
            if (e3[1] < e3[0]) break;
            n2.i = e3 = e3[2];
          }
      };
      (((B3.prototype = new C()).__a = function (n2) {
        var t3 = this,
          e3 = j3(t3.__v),
          r3 = t3.l.get(n2);
        return (
          r3[0]++,
          function (u4) {
            var o3 = function () {
              t3.props.revealOrder ? (r3.push(u4), H2(t3, n2, r3)) : u4();
            };
            e3 ? e3(o3) : o3();
          }
        );
      }),
        (B3.prototype.render = function (n2) {
          ((this.i = null), (this.l = /* @__PURE__ */ new Map()));
          var t3 = F(n2.children);
          n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
          for (var e3 = t3.length; e3--;) this.l.set(t3[e3], (this.i = [1, 0, this.i]));
          return n2.children;
        }),
        (B3.prototype.componentDidUpdate = B3.prototype.componentDidMount =
          function () {
            var n2 = this;
            this.l.forEach(function (t3, e3) {
              H2(n2, e3, t3);
            });
          }));
      q3 = ("undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element")) || 60103;
      G2 =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      K2 = /[A-Z0-9]/g;
      Q2 = "undefined" != typeof document;
      X2 = function (n2) {
        return (
          "undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/
        ).test(n2);
      };
      ((C.prototype.isReactComponent = true),
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(
          function (t3) {
            Object.defineProperty(C.prototype, t3, {
              configurable: true,
              get: function () {
                return this["UNSAFE_" + t3];
              },
              set: function (n2) {
                Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
              },
            });
          },
        ));
      en = l.event;
      l.event = function (n2) {
        return (
          en && (n2 = en(n2)),
          (n2.persist = function () {}),
          (n2.isPropagationStopped = function () {
            return this.cancelBubble;
          }),
          (n2.isDefaultPrevented = function () {
            return this.defaultPrevented;
          }),
          (n2.nativeEvent = n2)
        );
      };
      un = {
        configurable: true,
        get: function () {
          return this.class;
        },
      };
      on = l.vnode;
      l.vnode = function (n2) {
        ("string" == typeof n2.type &&
          (function (n3) {
            var t3 = n3.props,
              e3 = n3.type,
              u4 = {},
              o3 = -1 == e3.indexOf("-");
            for (var i4 in t3) {
              var l3 = t3[i4];
              if (!(
                ("value" === i4 && "defaultValue" in t3 && null == l3) ||
                (Q2 && "children" === i4 && "noscript" === e3) ||
                "class" === i4 ||
                "className" === i4
              )) {
                var f4 = i4.toLowerCase();
                ("defaultValue" === i4 && "value" in t3 && null == t3.value
                  ? (i4 = "value")
                  : "download" === i4 && true === l3
                    ? (l3 = "")
                    : "translate" === f4 && "no" === l3
                      ? (l3 = false)
                      : "o" === f4[0] && "n" === f4[1]
                        ? "ondoubleclick" === f4
                          ? (i4 = "ondblclick")
                          : "onchange" !== f4 ||
                              ("input" !== e3 && "textarea" !== e3) ||
                              X2(t3.type)
                            ? "onfocus" === f4
                              ? (i4 = "onfocusin")
                              : "onblur" === f4
                                ? (i4 = "onfocusout")
                                : J2.test(i4) && (i4 = f4)
                            : (f4 = i4 = "oninput")
                        : o3 && G2.test(i4)
                          ? (i4 = i4.replace(K2, "-$&").toLowerCase())
                          : null === l3 && (l3 = void 0),
                  "oninput" === f4 && u4[(i4 = f4)] && (i4 = "oninputCapture"),
                  (u4[i4] = l3));
              }
            }
            ("select" == e3 &&
              (u4.multiple &&
                Array.isArray(u4.value) &&
                (u4.value = F(t3.children).forEach(function (n4) {
                  n4.props.selected = -1 != u4.value.indexOf(n4.props.value);
                })),
              null != u4.defaultValue &&
                (u4.value = F(t3.children).forEach(function (n4) {
                  n4.props.selected = u4.multiple
                    ? -1 != u4.defaultValue.indexOf(n4.props.value)
                    : u4.defaultValue == n4.props.value;
                }))),
              t3.class && !t3.className
                ? ((u4.class = t3.class), Object.defineProperty(u4, "className", un))
                : t3.className && (u4.class = u4.className = t3.className),
              (n3.props = u4));
          })(n2),
          (n2.$$typeof = q3),
          on && on(n2));
      };
      ln = l.__r;
      l.__r = function (n2) {
        (ln && ln(n2), (rn = n2.__c));
      };
      fn = l.diffed;
      l.diffed = function (n2) {
        fn && fn(n2);
        var t3 = n2.props,
          e3 = n2.__e;
        (null != e3 &&
          "textarea" === n2.type &&
          "value" in t3 &&
          t3.value !== e3.value &&
          (e3.value = null == t3.value ? "" : t3.value),
          (rn = null));
      };
      an = {
        ReactCurrentDispatcher: {
          current: {
            readContext: function (n2) {
              return rn.__n[n2.__c].props.value;
            },
            useCallback: q2,
            useContext: x2,
            useDebugValue: P2,
            useDeferredValue: w3,
            useEffect: h2,
            useId: g2,
            useImperativeHandle: F2,
            useInsertionEffect: I2,
            useLayoutEffect: _2,
            useMemo: T2,
            useReducer: y2,
            useRef: A2,
            useState: d2,
            useSyncExternalStore: C3,
            useTransition: k3,
          },
        },
      };
      cn = "18.3.1";
      _n = function (n2, t3) {
        return n2(t3);
      };
      bn = function (n2, t3) {
        var r3,
          u4 = l.debounceRendering;
        l.debounceRendering = function (n3) {
          r3 = n3;
        };
        try {
          var o3 = n2(t3);
          return (r3 && r3(), o3);
        } finally {
          l.debounceRendering = u4;
        }
      };
      Sn = hn;
      gn = {
        useState: d2,
        useId: g2,
        useReducer: y2,
        useEffect: h2,
        useLayoutEffect: _2,
        useInsertionEffect: I2,
        useTransition: k3,
        useDeferredValue: w3,
        useSyncExternalStore: C3,
        startTransition: x3,
        useRef: A2,
        useImperativeHandle: F2,
        useMemo: T2,
        useCallback: q2,
        useContext: x2,
        useDebugValue: P2,
        version: "18.3.1",
        Children: L2,
        render: nn,
        hydrate: tn,
        unmountComponentAtNode: pn,
        createPortal: $2,
        createElement: k,
        createContext: X,
        createFactory: sn,
        cloneElement: mn,
        createRef: M,
        Fragment: S,
        isValidElement: hn,
        isElement: Sn,
        isFragment: vn,
        isMemo: dn,
        findDOMNode: yn,
        Component: C,
        PureComponent: M2,
        memo: N2,
        forwardRef: D3,
        flushSync: bn,
        unstable_batchedUpdates: _n,
        StrictMode: S,
        Suspense: P3,
        SuspenseList: B3,
        lazy: z3,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: an,
      };
    },
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
  var require_use_sync_external_store_shim_production = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js"(exports) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var React = (init_compat_module(), __toCommonJS(compat_module_exports));
      function is(x4, y3) {
        return (x4 === y3 && (0 !== x4 || 1 / x4 === 1 / y3)) || (x4 !== x4 && y3 !== y3);
      }
      var objectIs = "function" === typeof Object.is ? Object.is : is;
      var useState = React.useState;
      var useEffect = React.useEffect;
      var useLayoutEffect = React.useLayoutEffect;
      var useDebugValue2 = React.useDebugValue;
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        var value = getSnapshot(),
          _useState = useState({ inst: { value, getSnapshot } }),
          inst = _useState[0].inst,
          forceUpdate = _useState[1];
        useLayoutEffect(
          function () {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot],
        );
        useEffect(
          function () {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function () {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe],
        );
        useDebugValue2(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      var shim =
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
          ? useSyncExternalStore$1
          : useSyncExternalStore$2;
      exports.useSyncExternalStore =
        void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    },
  });

  // node_modules/use-sync-external-store/shim/index.js
  var require_shim = __commonJS({
    "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_use_sync_external_store_shim_production();
      } else {
        module.exports = null;
      }
    },
  });

  // node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js
  var require_with_selector_production = __commonJS({
    "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js"(
      exports,
    ) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var React = (init_compat_module(), __toCommonJS(compat_module_exports));
      var shim = require_shim();
      function is(x4, y3) {
        return (x4 === y3 && (0 !== x4 || 1 / x4 === 1 / y3)) || (x4 !== x4 && y3 !== y3);
      }
      var objectIs = "function" === typeof Object.is ? Object.is : is;
      var useSyncExternalStore = shim.useSyncExternalStore;
      var useRef = React.useRef;
      var useEffect = React.useEffect;
      var useMemo = React.useMemo;
      var useDebugValue2 = React.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function (
        subscribe,
        getSnapshot,
        getServerSnapshot,
        selector,
        isEqual,
      ) {
        var instRef = useRef(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(
          function () {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return (memoizedSelection = currentSelection);
                }
                return (memoizedSelection = nextSnapshot);
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return ((memoizedSnapshot = nextSnapshot), currentSelection);
              memoizedSnapshot = nextSnapshot;
              return (memoizedSelection = nextSelection);
            }
            var hasMemo = false,
              memoizedSnapshot,
              memoizedSelection,
              maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function () {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot
                ? void 0
                : function () {
                    return memoizedSelector(maybeGetServerSnapshot());
                  },
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual],
        );
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(
          function () {
            inst.hasValue = true;
            inst.value = value;
          },
          [value],
        );
        useDebugValue2(value);
        return value;
      };
    },
  });

  // node_modules/use-sync-external-store/shim/with-selector.js
  var require_with_selector = __commonJS({
    "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_with_selector_production();
      } else {
        module.exports = null;
      }
    },
  });

  // src/widget-app/app.ts
  var app_exports = {};
  __export(app_exports, {
    mount: () => mount,
  });
  init_compat_module();

  // node_modules/preact/compat/client.mjs
  init_compat_module();
  function createRoot(container) {
    return {
      // eslint-disable-next-line
      render: function (children2) {
        nn(children2, container);
      },
      // eslint-disable-next-line
      unmount: function () {
        pn(container);
      },
    };
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  init_preact_module();
  init_preact_module();
  var f3 = 0;
  var i3 = Array.isArray;
  function u3(e3, t3, n2, o3, i4, u4) {
    t3 || (t3 = {});
    var a3,
      c3,
      p3 = t3;
    if ("ref" in p3) for (c3 in ((p3 = {}), t3)) "ref" == c3 ? (a3 = t3[c3]) : (p3[c3] = t3[c3]);
    var l3 = {
      type: e3,
      props: p3,
      key: n2,
      ref: a3,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --f3,
      __i: -1,
      __u: 0,
      __source: i4,
      __self: u4,
    };
    if ("function" == typeof e3 && (a3 = e3.defaultProps))
      for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
    return (l.vnode && l.vnode(l3), l3);
  }

  // node_modules/@xyflow/react/dist/esm/index.js
  init_compat_module();

  // node_modules/classcat/index.js
  function cc(names) {
    if (typeof names === "string" || typeof names === "number") return "" + names;
    let out = "";
    if (Array.isArray(names)) {
      for (let i4 = 0, tmp; i4 < names.length; i4++) {
        if ((tmp = cc(names[i4])) !== "") {
          out += (out && " ") + tmp;
        }
      }
    } else {
      for (let k4 in names) {
        if (names[k4]) out += (out && " ") + k4;
      }
    }
    return out;
  }

  // node_modules/d3-dispatch/src/dispatch.js
  var noop = { value: () => {} };
  function dispatch() {
    for (var i4 = 0, n2 = arguments.length, _3 = {}, t3; i4 < n2; ++i4) {
      if (!(t3 = arguments[i4] + "") || t3 in _3 || /[\s.]/.test(t3))
        throw new Error("illegal type: " + t3);
      _3[t3] = [];
    }
    return new Dispatch(_3);
  }
  function Dispatch(_3) {
    this._ = _3;
  }
  function parseTypenames(typenames, types) {
    return typenames
      .trim()
      .split(/^|\s+/)
      .map(function (t3) {
        var name = "",
          i4 = t3.indexOf(".");
        if (i4 >= 0) ((name = t3.slice(i4 + 1)), (t3 = t3.slice(0, i4)));
        if (t3 && !types.hasOwnProperty(t3)) throw new Error("unknown type: " + t3);
        return { type: t3, name };
      });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function (typename, callback) {
      var _3 = this._,
        T4 = parseTypenames(typename + "", _3),
        t3,
        i4 = -1,
        n2 = T4.length;
      if (arguments.length < 2) {
        while (++i4 < n2)
          if ((t3 = (typename = T4[i4]).type) && (t3 = get(_3[t3], typename.name))) return t3;
        return;
      }
      if (callback != null && typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      while (++i4 < n2) {
        if ((t3 = (typename = T4[i4]).type)) _3[t3] = set(_3[t3], typename.name, callback);
        else if (callback == null) for (t3 in _3) _3[t3] = set(_3[t3], typename.name, null);
      }
      return this;
    },
    copy: function () {
      var copy = {},
        _3 = this._;
      for (var t3 in _3) copy[t3] = _3[t3].slice();
      return new Dispatch(copy);
    },
    call: function (type, that) {
      if ((n2 = arguments.length - 2) > 0)
        for (var args = new Array(n2), i4 = 0, n2, t3; i4 < n2; ++i4) args[i4] = arguments[i4 + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t3 = this._[type], i4 = 0, n2 = t3.length; i4 < n2; ++i4) t3[i4].value.apply(that, args);
    },
    apply: function (type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t3 = this._[type], i4 = 0, n2 = t3.length; i4 < n2; ++i4)
        t3[i4].value.apply(that, args);
    },
  };
  function get(type, name) {
    for (var i4 = 0, n2 = type.length, c3; i4 < n2; ++i4) {
      if ((c3 = type[i4]).name === name) {
        return c3.value;
      }
    }
  }
  function set(type, name, callback) {
    for (var i4 = 0, n2 = type.length; i4 < n2; ++i4) {
      if (type[i4].name === name) {
        ((type[i4] = noop), (type = type.slice(0, i4).concat(type.slice(i4 + 1))));
        break;
      }
    }
    if (callback != null) type.push({ name, value: callback });
    return type;
  }
  var dispatch_default = dispatch;

  // node_modules/d3-selection/src/namespaces.js
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces_default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
  };

  // node_modules/d3-selection/src/namespace.js
  function namespace_default(name) {
    var prefix = (name += ""),
      i4 = prefix.indexOf(":");
    if (i4 >= 0 && (prefix = name.slice(0, i4)) !== "xmlns") name = name.slice(i4 + 1);
    return namespaces_default.hasOwnProperty(prefix)
      ? { space: namespaces_default[prefix], local: name }
      : name;
  }

  // node_modules/d3-selection/src/creator.js
  function creatorInherit(name) {
    return function () {
      var document2 = this.ownerDocument,
        uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml
        ? document2.createElement(name)
        : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function () {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator_default(name) {
    var fullname = namespace_default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  // node_modules/d3-selection/src/selector.js
  function none() {}
  function selector_default(selector) {
    return selector == null
      ? none
      : function () {
          return this.querySelector(selector);
        };
  }

  // node_modules/d3-selection/src/selection/select.js
  function select_default(select) {
    if (typeof select !== "function") select = selector_default(select);
    for (
      var groups = this._groups, m3 = groups.length, subgroups = new Array(m3), j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (
        var group = groups[j4],
          n2 = group.length,
          subgroup = (subgroups[j4] = new Array(n2)),
          node,
          subnode,
          i4 = 0;
        i4 < n2;
        ++i4
      ) {
        if ((node = group[i4]) && (subnode = select.call(node, node.__data__, i4, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i4] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/array.js
  function array(x4) {
    return x4 == null ? [] : Array.isArray(x4) ? x4 : Array.from(x4);
  }

  // node_modules/d3-selection/src/selectorAll.js
  function empty() {
    return [];
  }
  function selectorAll_default(selector) {
    return selector == null
      ? empty
      : function () {
          return this.querySelectorAll(selector);
        };
  }

  // node_modules/d3-selection/src/selection/selectAll.js
  function arrayAll(select) {
    return function () {
      return array(select.apply(this, arguments));
    };
  }
  function selectAll_default(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = selectorAll_default(select);
    for (
      var groups = this._groups, m3 = groups.length, subgroups = [], parents = [], j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (var group = groups[j4], n2 = group.length, node, i4 = 0; i4 < n2; ++i4) {
        if ((node = group[i4])) {
          subgroups.push(select.call(node, node.__data__, i4, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  // node_modules/d3-selection/src/matcher.js
  function matcher_default(selector) {
    return function () {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function (node) {
      return node.matches(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectChild.js
  var find = Array.prototype.find;
  function childFind(match) {
    return function () {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selectChild_default(match) {
    return this.select(
      match == null
        ? childFirst
        : childFind(typeof match === "function" ? match : childMatcher(match)),
    );
  }

  // node_modules/d3-selection/src/selection/selectChildren.js
  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function () {
      return filter.call(this.children, match);
    };
  }
  function selectChildren_default(match) {
    return this.selectAll(
      match == null
        ? children
        : childrenFilter(typeof match === "function" ? match : childMatcher(match)),
    );
  }

  // node_modules/d3-selection/src/selection/filter.js
  function filter_default(match) {
    if (typeof match !== "function") match = matcher_default(match);
    for (
      var groups = this._groups, m3 = groups.length, subgroups = new Array(m3), j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (
        var group = groups[j4], n2 = group.length, subgroup = (subgroups[j4] = []), node, i4 = 0;
        i4 < n2;
        ++i4
      ) {
        if ((node = group[i4]) && match.call(node, node.__data__, i4, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/selection/sparse.js
  function sparse_default(update) {
    return new Array(update.length);
  }

  // node_modules/d3-selection/src/selection/enter.js
  function enter_default() {
    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
  }
  function EnterNode(parent, datum2) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum2;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function (child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function (child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function (selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function (selector) {
      return this._parent.querySelectorAll(selector);
    },
  };

  // node_modules/d3-selection/src/constant.js
  function constant_default(x4) {
    return function () {
      return x4;
    };
  }

  // node_modules/d3-selection/src/selection/data.js
  function bindIndex(parent, group, enter, update, exit, data) {
    var i4 = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;
    for (; i4 < dataLength; ++i4) {
      if ((node = group[i4])) {
        node.__data__ = data[i4];
        update[i4] = node;
      } else {
        enter[i4] = new EnterNode(parent, data[i4]);
      }
    }
    for (; i4 < groupLength; ++i4) {
      if ((node = group[i4])) {
        exit[i4] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i4,
      node,
      nodeByKeyValue = /* @__PURE__ */ new Map(),
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;
    for (i4 = 0; i4 < groupLength; ++i4) {
      if ((node = group[i4])) {
        keyValues[i4] = keyValue = key.call(node, node.__data__, i4, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i4] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
    for (i4 = 0; i4 < dataLength; ++i4) {
      keyValue = key.call(parent, data[i4], i4, data) + "";
      if ((node = nodeByKeyValue.get(keyValue))) {
        update[i4] = node;
        node.__data__ = data[i4];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i4] = new EnterNode(parent, data[i4]);
      }
    }
    for (i4 = 0; i4 < groupLength; ++i4) {
      if ((node = group[i4]) && nodeByKeyValue.get(keyValues[i4]) === node) {
        exit[i4] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function data_default(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;
    if (typeof value !== "function") value = constant_default(value);
    for (
      var m3 = groups.length,
        update = new Array(m3),
        enter = new Array(m3),
        exit = new Array(m3),
        j4 = 0;
      j4 < m3;
      ++j4
    ) {
      var parent = parents[j4],
        group = groups[j4],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j4, parents)),
        dataLength = data.length,
        enterGroup = (enter[j4] = new Array(dataLength)),
        updateGroup = (update[j4] = new Array(dataLength)),
        exitGroup = (exit[j4] = new Array(groupLength));
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if ((previous = enterGroup[i0])) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }
  function arraylike(data) {
    return typeof data === "object" && "length" in data ? data : Array.from(data);
  }

  // node_modules/d3-selection/src/selection/exit.js
  function exit_default() {
    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
  }

  // node_modules/d3-selection/src/selection/join.js
  function join_default(onenter, onupdate, onexit) {
    var enter = this.enter(),
      update = this,
      exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter) enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  // node_modules/d3-selection/src/selection/merge.js
  function merge_default(context) {
    var selection2 = context.selection ? context.selection() : context;
    for (
      var groups0 = this._groups,
        groups1 = selection2._groups,
        m0 = groups0.length,
        m1 = groups1.length,
        m3 = Math.min(m0, m1),
        merges = new Array(m0),
        j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (
        var group0 = groups0[j4],
          group1 = groups1[j4],
          n2 = group0.length,
          merge = (merges[j4] = new Array(n2)),
          node,
          i4 = 0;
        i4 < n2;
        ++i4
      ) {
        if ((node = group0[i4] || group1[i4])) {
          merge[i4] = node;
        }
      }
    }
    for (; j4 < m0; ++j4) {
      merges[j4] = groups0[j4];
    }
    return new Selection(merges, this._parents);
  }

  // node_modules/d3-selection/src/selection/order.js
  function order_default() {
    for (var groups = this._groups, j4 = -1, m3 = groups.length; ++j4 < m3;) {
      for (var group = groups[j4], i4 = group.length - 1, next = group[i4], node; --i4 >= 0;) {
        if ((node = group[i4])) {
          if (next && node.compareDocumentPosition(next) ^ 4)
            next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/sort.js
  function sort_default(compare) {
    if (!compare) compare = ascending;
    function compareNode(a3, b3) {
      return a3 && b3 ? compare(a3.__data__, b3.__data__) : !a3 - !b3;
    }
    for (
      var groups = this._groups, m3 = groups.length, sortgroups = new Array(m3), j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (
        var group = groups[j4],
          n2 = group.length,
          sortgroup = (sortgroups[j4] = new Array(n2)),
          node,
          i4 = 0;
        i4 < n2;
        ++i4
      ) {
        if ((node = group[i4])) {
          sortgroup[i4] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending(a3, b3) {
    return a3 < b3 ? -1 : a3 > b3 ? 1 : a3 >= b3 ? 0 : NaN;
  }

  // node_modules/d3-selection/src/selection/call.js
  function call_default() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  // node_modules/d3-selection/src/selection/nodes.js
  function nodes_default() {
    return Array.from(this);
  }

  // node_modules/d3-selection/src/selection/node.js
  function node_default() {
    for (var groups = this._groups, j4 = 0, m3 = groups.length; j4 < m3; ++j4) {
      for (var group = groups[j4], i4 = 0, n2 = group.length; i4 < n2; ++i4) {
        var node = group[i4];
        if (node) return node;
      }
    }
    return null;
  }

  // node_modules/d3-selection/src/selection/size.js
  function size_default() {
    let size = 0;
    for (const node of this) ++size;
    return size;
  }

  // node_modules/d3-selection/src/selection/empty.js
  function empty_default() {
    return !this.node();
  }

  // node_modules/d3-selection/src/selection/each.js
  function each_default(callback) {
    for (var groups = this._groups, j4 = 0, m3 = groups.length; j4 < m3; ++j4) {
      for (var group = groups[j4], i4 = 0, n2 = group.length, node; i4 < n2; ++i4) {
        if ((node = group[i4])) callback.call(node, node.__data__, i4, group);
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/attr.js
  function attrRemove(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function () {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function () {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function () {
      var v3 = value.apply(this, arguments);
      if (v3 == null) this.removeAttribute(name);
      else this.setAttribute(name, v3);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function () {
      var v3 = value.apply(this, arguments);
      if (v3 == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v3);
    };
  }
  function attr_default(name, value) {
    var fullname = namespace_default(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
    }
    return this.each(
      (value == null
        ? fullname.local
          ? attrRemoveNS
          : attrRemove
        : typeof value === "function"
          ? fullname.local
            ? attrFunctionNS
            : attrFunction
          : fullname.local
            ? attrConstantNS
            : attrConstant)(fullname, value),
    );
  }

  // node_modules/d3-selection/src/window.js
  function window_default(node) {
    return (
      (node.ownerDocument && node.ownerDocument.defaultView) ||
      (node.document && node) ||
      node.defaultView
    );
  }

  // node_modules/d3-selection/src/selection/style.js
  function styleRemove(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function () {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function () {
      var v3 = value.apply(this, arguments);
      if (v3 == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v3, priority);
    };
  }
  function style_default(name, value, priority) {
    return arguments.length > 1
      ? this.each(
          (value == null
            ? styleRemove
            : typeof value === "function"
              ? styleFunction
              : styleConstant)(name, value, priority == null ? "" : priority),
        )
      : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return (
      node.style.getPropertyValue(name) ||
      window_default(node).getComputedStyle(node, null).getPropertyValue(name)
    );
  }

  // node_modules/d3-selection/src/selection/property.js
  function propertyRemove(name) {
    return function () {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function () {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function () {
      var v3 = value.apply(this, arguments);
      if (v3 == null) delete this[name];
      else this[name] = v3;
    };
  }
  function property_default(name, value) {
    return arguments.length > 1
      ? this.each(
          (value == null
            ? propertyRemove
            : typeof value === "function"
              ? propertyFunction
              : propertyConstant)(name, value),
        )
      : this.node()[name];
  }

  // node_modules/d3-selection/src/selection/classed.js
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function (name) {
      var i4 = this._names.indexOf(name);
      if (i4 < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function (name) {
      var i4 = this._names.indexOf(name);
      if (i4 >= 0) {
        this._names.splice(i4, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function (name) {
      return this._names.indexOf(name) >= 0;
    },
  };
  function classedAdd(node, names) {
    var list = classList(node),
      i4 = -1,
      n2 = names.length;
    while (++i4 < n2) list.add(names[i4]);
  }
  function classedRemove(node, names) {
    var list = classList(node),
      i4 = -1,
      n2 = names.length;
    while (++i4 < n2) list.remove(names[i4]);
  }
  function classedTrue(names) {
    return function () {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function () {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function () {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function classed_default(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()),
        i4 = -1,
        n2 = names.length;
      while (++i4 < n2) if (!list.contains(names[i4])) return false;
      return true;
    }
    return this.each(
      (typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(
        names,
        value,
      ),
    );
  }

  // node_modules/d3-selection/src/selection/text.js
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function () {
      var v3 = value.apply(this, arguments);
      this.textContent = v3 == null ? "" : v3;
    };
  }
  function text_default(value) {
    return arguments.length
      ? this.each(
          value == null
            ? textRemove
            : (typeof value === "function" ? textFunction : textConstant)(value),
        )
      : this.node().textContent;
  }

  // node_modules/d3-selection/src/selection/html.js
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function () {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function () {
      var v3 = value.apply(this, arguments);
      this.innerHTML = v3 == null ? "" : v3;
    };
  }
  function html_default(value) {
    return arguments.length
      ? this.each(
          value == null
            ? htmlRemove
            : (typeof value === "function" ? htmlFunction : htmlConstant)(value),
        )
      : this.node().innerHTML;
  }

  // node_modules/d3-selection/src/selection/raise.js
  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  function raise_default() {
    return this.each(raise);
  }

  // node_modules/d3-selection/src/selection/lower.js
  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function lower_default() {
    return this.each(lower);
  }

  // node_modules/d3-selection/src/selection/append.js
  function append_default(name) {
    var create2 = typeof name === "function" ? name : creator_default(name);
    return this.select(function () {
      return this.appendChild(create2.apply(this, arguments));
    });
  }

  // node_modules/d3-selection/src/selection/insert.js
  function constantNull() {
    return null;
  }
  function insert_default(name, before) {
    var create2 = typeof name === "function" ? name : creator_default(name),
      select =
        before == null
          ? constantNull
          : typeof before === "function"
            ? before
            : selector_default(before);
    return this.select(function () {
      return this.insertBefore(
        create2.apply(this, arguments),
        select.apply(this, arguments) || null,
      );
    });
  }

  // node_modules/d3-selection/src/selection/remove.js
  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  function remove_default() {
    return this.each(remove);
  }

  // node_modules/d3-selection/src/selection/clone.js
  function selection_cloneShallow() {
    var clone = this.cloneNode(false),
      parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true),
      parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function clone_default(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  // node_modules/d3-selection/src/selection/datum.js
  function datum_default(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  // node_modules/d3-selection/src/selection/on.js
  function contextListener(listener) {
    return function (event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames2(typenames) {
    return typenames
      .trim()
      .split(/^|\s+/)
      .map(function (t3) {
        var name = "",
          i4 = t3.indexOf(".");
        if (i4 >= 0) ((name = t3.slice(i4 + 1)), (t3 = t3.slice(0, i4)));
        return { type: t3, name };
      });
  }
  function onRemove(typename) {
    return function () {
      var on2 = this.__on;
      if (!on2) return;
      for (var j4 = 0, i4 = -1, m3 = on2.length, o3; j4 < m3; ++j4) {
        if (
          ((o3 = on2[j4]),
          (!typename.type || o3.type === typename.type) && o3.name === typename.name)
        ) {
          this.removeEventListener(o3.type, o3.listener, o3.options);
        } else {
          on2[++i4] = o3;
        }
      }
      if (++i4) on2.length = i4;
      else delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function () {
      var on2 = this.__on,
        o3,
        listener = contextListener(value);
      if (on2)
        for (var j4 = 0, m3 = on2.length; j4 < m3; ++j4) {
          if ((o3 = on2[j4]).type === typename.type && o3.name === typename.name) {
            this.removeEventListener(o3.type, o3.listener, o3.options);
            this.addEventListener(o3.type, (o3.listener = listener), (o3.options = options));
            o3.value = value;
            return;
          }
        }
      this.addEventListener(typename.type, listener, options);
      o3 = { type: typename.type, name: typename.name, value, listener, options };
      if (!on2) this.__on = [o3];
      else on2.push(o3);
    };
  }
  function on_default(typename, value, options) {
    var typenames = parseTypenames2(typename + ""),
      i4,
      n2 = typenames.length,
      t3;
    if (arguments.length < 2) {
      var on2 = this.node().__on;
      if (on2)
        for (var j4 = 0, m3 = on2.length, o3; j4 < m3; ++j4) {
          for (i4 = 0, o3 = on2[j4]; i4 < n2; ++i4) {
            if ((t3 = typenames[i4]).type === o3.type && t3.name === o3.name) {
              return o3.value;
            }
          }
        }
      return;
    }
    on2 = value ? onAdd : onRemove;
    for (i4 = 0; i4 < n2; ++i4) this.each(on2(typenames[i4], value, options));
    return this;
  }

  // node_modules/d3-selection/src/selection/dispatch.js
  function dispatchEvent(node, type, params) {
    var window2 = window_default(node),
      event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params)
        (event.initEvent(type, params.bubbles, params.cancelable), (event.detail = params.detail));
      else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type, params) {
    return function () {
      return dispatchEvent(this, type, params);
    };
  }
  function dispatchFunction(type, params) {
    return function () {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }
  function dispatch_default2(type, params) {
    return this.each(
      (typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params),
    );
  }

  // node_modules/d3-selection/src/selection/iterator.js
  function* iterator_default() {
    for (var groups = this._groups, j4 = 0, m3 = groups.length; j4 < m3; ++j4) {
      for (var group = groups[j4], i4 = 0, n2 = group.length, node; i4 < n2; ++i4) {
        if ((node = group[i4])) yield node;
      }
    }
  }

  // node_modules/d3-selection/src/selection/index.js
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: select_default,
    selectAll: selectAll_default,
    selectChild: selectChild_default,
    selectChildren: selectChildren_default,
    filter: filter_default,
    data: data_default,
    enter: enter_default,
    exit: exit_default,
    join: join_default,
    merge: merge_default,
    selection: selection_selection,
    order: order_default,
    sort: sort_default,
    call: call_default,
    nodes: nodes_default,
    node: node_default,
    size: size_default,
    empty: empty_default,
    each: each_default,
    attr: attr_default,
    style: style_default,
    property: property_default,
    classed: classed_default,
    text: text_default,
    html: html_default,
    raise: raise_default,
    lower: lower_default,
    append: append_default,
    insert: insert_default,
    remove: remove_default,
    clone: clone_default,
    datum: datum_default,
    on: on_default,
    dispatch: dispatch_default2,
    [Symbol.iterator]: iterator_default,
  };
  var selection_default = selection;

  // node_modules/d3-selection/src/select.js
  function select_default2(selector) {
    return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
  }

  // node_modules/d3-selection/src/sourceEvent.js
  function sourceEvent_default(event) {
    let sourceEvent;
    while ((sourceEvent = event.sourceEvent)) event = sourceEvent;
    return event;
  }

  // node_modules/d3-selection/src/pointer.js
  function pointer_default(event, node) {
    event = sourceEvent_default(event);
    if (node === void 0) node = event.currentTarget;
    if (node) {
      var svg2 = node.ownerSVGElement || node;
      if (svg2.createSVGPoint) {
        var point = svg2.createSVGPoint();
        ((point.x = event.clientX), (point.y = event.clientY));
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [
          event.clientX - rect.left - node.clientLeft,
          event.clientY - rect.top - node.clientTop,
        ];
      }
    }
    return [event.pageX, event.pageY];
  }

  // node_modules/d3-drag/src/noevent.js
  var nonpassive = { passive: false };
  var nonpassivecapture = { capture: true, passive: false };
  function nopropagation(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-drag/src/nodrag.js
  function nodrag_default(view) {
    var root2 = view.document.documentElement,
      selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
    } else {
      root2.__noselect = root2.style.MozUserSelect;
      root2.style.MozUserSelect = "none";
    }
  }
  function yesdrag(view, noclick) {
    var root2 = view.document.documentElement,
      selection2 = select_default2(view).on("dragstart.drag", null);
    if (noclick) {
      selection2.on("click.drag", noevent_default, nonpassivecapture);
      setTimeout(function () {
        selection2.on("click.drag", null);
      }, 0);
    }
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", null);
    } else {
      root2.style.MozUserSelect = root2.__noselect;
      delete root2.__noselect;
    }
  }

  // node_modules/d3-drag/src/constant.js
  var constant_default2 = (x4) => () => x4;

  // node_modules/d3-drag/src/event.js
  function DragEvent(
    type,
    { sourceEvent, subject, target, identifier, active, x: x4, y: y3, dx, dy, dispatch: dispatch2 },
  ) {
    Object.defineProperties(this, {
      type: { value: type, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      subject: { value: subject, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      identifier: { value: identifier, enumerable: true, configurable: true },
      active: { value: active, enumerable: true, configurable: true },
      x: { value: x4, enumerable: true, configurable: true },
      y: { value: y3, enumerable: true, configurable: true },
      dx: { value: dx, enumerable: true, configurable: true },
      dy: { value: dy, enumerable: true, configurable: true },
      _: { value: dispatch2 },
    });
  }
  DragEvent.prototype.on = function () {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };

  // node_modules/d3-drag/src/drag.js
  function defaultFilter(event) {
    return !event.ctrlKey && !event.button;
  }
  function defaultContainer() {
    return this.parentNode;
  }
  function defaultSubject(event, d3) {
    return d3 == null ? { x: event.x, y: event.y } : d3;
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function drag_default() {
    var filter2 = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = dispatch_default("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;
    function drag(selection2) {
      selection2
        .on("mousedown.drag", mousedowned)
        .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved, nonpassive)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d3) {
      if (touchending || !filter2.call(this, event, d3)) return;
      var gesture = beforestart(this, container.call(this, event, d3), event, d3, "mouse");
      if (!gesture) return;
      select_default2(event.view)
        .on("mousemove.drag", mousemoved, nonpassivecapture)
        .on("mouseup.drag", mouseupped, nonpassivecapture);
      nodrag_default(event.view);
      nopropagation(event);
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start", event);
    }
    function mousemoved(event) {
      noevent_default(event);
      if (!mousemoving) {
        var dx = event.clientX - mousedownx,
          dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag", event);
    }
    function mouseupped(event) {
      select_default2(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent_default(event);
      gestures.mouse("end", event);
    }
    function touchstarted(event, d3) {
      if (!filter2.call(this, event, d3)) return;
      var touches = event.changedTouches,
        c3 = container.call(this, event, d3),
        n2 = touches.length,
        i4,
        gesture;
      for (i4 = 0; i4 < n2; ++i4) {
        if ((gesture = beforestart(this, c3, event, d3, touches[i4].identifier, touches[i4]))) {
          nopropagation(event);
          gesture("start", event, touches[i4]);
        }
      }
    }
    function touchmoved(event) {
      var touches = event.changedTouches,
        n2 = touches.length,
        i4,
        gesture;
      for (i4 = 0; i4 < n2; ++i4) {
        if ((gesture = gestures[touches[i4].identifier])) {
          noevent_default(event);
          gesture("drag", event, touches[i4]);
        }
      }
    }
    function touchended(event) {
      var touches = event.changedTouches,
        n2 = touches.length,
        i4,
        gesture;
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function () {
        touchending = null;
      }, 500);
      for (i4 = 0; i4 < n2; ++i4) {
        if ((gesture = gestures[touches[i4].identifier])) {
          nopropagation(event);
          gesture("end", event, touches[i4]);
        }
      }
    }
    function beforestart(that, container2, event, d3, identifier, touch) {
      var dispatch2 = listeners.copy(),
        p3 = pointer_default(touch || event, container2),
        dx,
        dy,
        s3;
      if (
        (s3 = subject.call(
          that,
          new DragEvent("beforestart", {
            sourceEvent: event,
            target: drag,
            identifier,
            active,
            x: p3[0],
            y: p3[1],
            dx: 0,
            dy: 0,
            dispatch: dispatch2,
          }),
          d3,
        )) == null
      )
        return;
      dx = s3.x - p3[0] || 0;
      dy = s3.y - p3[1] || 0;
      return function gesture(type, event2, touch2) {
        var p0 = p3,
          n2;
        switch (type) {
          case "start":
            ((gestures[identifier] = gesture), (n2 = active++));
            break;
          case "end":
            (delete gestures[identifier], --active);
          // falls through
          case "drag":
            ((p3 = pointer_default(touch2 || event2, container2)), (n2 = active));
            break;
        }
        dispatch2.call(
          type,
          that,
          new DragEvent(type, {
            sourceEvent: event2,
            subject: s3,
            target: drag,
            identifier,
            active: n2,
            x: p3[0] + dx,
            y: p3[1] + dy,
            dx: p3[0] - p0[0],
            dy: p3[1] - p0[1],
            dispatch: dispatch2,
          }),
          d3,
        );
      };
    }
    drag.filter = function (_3) {
      return arguments.length
        ? ((filter2 = typeof _3 === "function" ? _3 : constant_default2(!!_3)), drag)
        : filter2;
    };
    drag.container = function (_3) {
      return arguments.length
        ? ((container = typeof _3 === "function" ? _3 : constant_default2(_3)), drag)
        : container;
    };
    drag.subject = function (_3) {
      return arguments.length
        ? ((subject = typeof _3 === "function" ? _3 : constant_default2(_3)), drag)
        : subject;
    };
    drag.touchable = function (_3) {
      return arguments.length
        ? ((touchable = typeof _3 === "function" ? _3 : constant_default2(!!_3)), drag)
        : touchable;
    };
    drag.on = function () {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag : value;
    };
    drag.clickDistance = function (_3) {
      return arguments.length
        ? ((clickDistance2 = (_3 = +_3) * _3), drag)
        : Math.sqrt(clickDistance2);
    };
    return drag;
  }

  // node_modules/d3-color/src/define.js
  function define_default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  // node_modules/d3-color/src/color.js
  function Color() {}
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex = /^#([0-9a-f]{3,8})$/;
  var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
  var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
  var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
  var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
  var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
  var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
  define_default(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb,
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format) {
    var m3, l3;
    format = (format + "").trim().toLowerCase();
    return (m3 = reHex.exec(format))
      ? ((l3 = m3[1].length),
        (m3 = parseInt(m3[1], 16)),
        l3 === 6
          ? rgbn(m3)
          : l3 === 3
            ? new Rgb(
                ((m3 >> 8) & 15) | ((m3 >> 4) & 240),
                ((m3 >> 4) & 15) | (m3 & 240),
                ((m3 & 15) << 4) | (m3 & 15),
                1,
              )
            : l3 === 8
              ? rgba((m3 >> 24) & 255, (m3 >> 16) & 255, (m3 >> 8) & 255, (m3 & 255) / 255)
              : l3 === 4
                ? rgba(
                    ((m3 >> 12) & 15) | ((m3 >> 8) & 240),
                    ((m3 >> 8) & 15) | ((m3 >> 4) & 240),
                    ((m3 >> 4) & 15) | (m3 & 240),
                    (((m3 & 15) << 4) | (m3 & 15)) / 255,
                  )
                : null)
      : (m3 = reRgbInteger.exec(format))
        ? new Rgb(m3[1], m3[2], m3[3], 1)
        : (m3 = reRgbPercent.exec(format))
          ? new Rgb((m3[1] * 255) / 100, (m3[2] * 255) / 100, (m3[3] * 255) / 100, 1)
          : (m3 = reRgbaInteger.exec(format))
            ? rgba(m3[1], m3[2], m3[3], m3[4])
            : (m3 = reRgbaPercent.exec(format))
              ? rgba((m3[1] * 255) / 100, (m3[2] * 255) / 100, (m3[3] * 255) / 100, m3[4])
              : (m3 = reHslPercent.exec(format))
                ? hsla(m3[1], m3[2] / 100, m3[3] / 100, 1)
                : (m3 = reHslaPercent.exec(format))
                  ? hsla(m3[1], m3[2] / 100, m3[3] / 100, m3[4])
                  : named.hasOwnProperty(format)
                    ? rgbn(named[format])
                    : format === "transparent"
                      ? new Rgb(NaN, NaN, NaN, 0)
                      : null;
  }
  function rgbn(n2) {
    return new Rgb((n2 >> 16) & 255, (n2 >> 8) & 255, n2 & 255, 1);
  }
  function rgba(r3, g4, b3, a3) {
    if (a3 <= 0) r3 = g4 = b3 = NaN;
    return new Rgb(r3, g4, b3, a3);
  }
  function rgbConvert(o3) {
    if (!(o3 instanceof Color)) o3 = color(o3);
    if (!o3) return new Rgb();
    o3 = o3.rgb();
    return new Rgb(o3.r, o3.g, o3.b, o3.opacity);
  }
  function rgb(r3, g4, b3, opacity) {
    return arguments.length === 1
      ? rgbConvert(r3)
      : new Rgb(r3, g4, b3, opacity == null ? 1 : opacity);
  }
  function Rgb(r3, g4, b3, opacity) {
    this.r = +r3;
    this.g = +g4;
    this.b = +b3;
    this.opacity = +opacity;
  }
  define_default(
    Rgb,
    rgb,
    extend(Color, {
      brighter(k4) {
        k4 = k4 == null ? brighter : Math.pow(brighter, k4);
        return new Rgb(this.r * k4, this.g * k4, this.b * k4, this.opacity);
      },
      darker(k4) {
        k4 = k4 == null ? darker : Math.pow(darker, k4);
        return new Rgb(this.r * k4, this.g * k4, this.b * k4, this.opacity);
      },
      rgb() {
        return this;
      },
      clamp() {
        return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
      },
      displayable() {
        return (
          -0.5 <= this.r &&
          this.r < 255.5 &&
          -0.5 <= this.g &&
          this.g < 255.5 &&
          -0.5 <= this.b &&
          this.b < 255.5 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      hex: rgb_formatHex,
      // Deprecated! Use color.formatHex.
      formatHex: rgb_formatHex,
      formatHex8: rgb_formatHex8,
      formatRgb: rgb_formatRgb,
      toString: rgb_formatRgb,
    }),
  );
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a3 = clampa(this.opacity);
    return `${a3 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a3 === 1 ? ")" : `, ${a3})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h3, s3, l3, a3) {
    if (a3 <= 0) h3 = s3 = l3 = NaN;
    else if (l3 <= 0 || l3 >= 1) h3 = s3 = NaN;
    else if (s3 <= 0) h3 = NaN;
    return new Hsl(h3, s3, l3, a3);
  }
  function hslConvert(o3) {
    if (o3 instanceof Hsl) return new Hsl(o3.h, o3.s, o3.l, o3.opacity);
    if (!(o3 instanceof Color)) o3 = color(o3);
    if (!o3) return new Hsl();
    if (o3 instanceof Hsl) return o3;
    o3 = o3.rgb();
    var r3 = o3.r / 255,
      g4 = o3.g / 255,
      b3 = o3.b / 255,
      min = Math.min(r3, g4, b3),
      max = Math.max(r3, g4, b3),
      h3 = NaN,
      s3 = max - min,
      l3 = (max + min) / 2;
    if (s3) {
      if (r3 === max) h3 = (g4 - b3) / s3 + (g4 < b3) * 6;
      else if (g4 === max) h3 = (b3 - r3) / s3 + 2;
      else h3 = (r3 - g4) / s3 + 4;
      s3 /= l3 < 0.5 ? max + min : 2 - max - min;
      h3 *= 60;
    } else {
      s3 = l3 > 0 && l3 < 1 ? 0 : h3;
    }
    return new Hsl(h3, s3, l3, o3.opacity);
  }
  function hsl(h3, s3, l3, opacity) {
    return arguments.length === 1
      ? hslConvert(h3)
      : new Hsl(h3, s3, l3, opacity == null ? 1 : opacity);
  }
  function Hsl(h3, s3, l3, opacity) {
    this.h = +h3;
    this.s = +s3;
    this.l = +l3;
    this.opacity = +opacity;
  }
  define_default(
    Hsl,
    hsl,
    extend(Color, {
      brighter(k4) {
        k4 = k4 == null ? brighter : Math.pow(brighter, k4);
        return new Hsl(this.h, this.s, this.l * k4, this.opacity);
      },
      darker(k4) {
        k4 = k4 == null ? darker : Math.pow(darker, k4);
        return new Hsl(this.h, this.s, this.l * k4, this.opacity);
      },
      rgb() {
        var h3 = (this.h % 360) + (this.h < 0) * 360,
          s3 = isNaN(h3) || isNaN(this.s) ? 0 : this.s,
          l3 = this.l,
          m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s3,
          m1 = 2 * l3 - m22;
        return new Rgb(
          hsl2rgb(h3 >= 240 ? h3 - 240 : h3 + 120, m1, m22),
          hsl2rgb(h3, m1, m22),
          hsl2rgb(h3 < 120 ? h3 + 240 : h3 - 120, m1, m22),
          this.opacity,
        );
      },
      clamp() {
        return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
      },
      displayable() {
        return (
          ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
          0 <= this.l &&
          this.l <= 1 &&
          0 <= this.opacity &&
          this.opacity <= 1
        );
      },
      formatHsl() {
        const a3 = clampa(this.opacity);
        return `${a3 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a3 === 1 ? ")" : `, ${a3})`}`;
      },
    }),
  );
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }
  function hsl2rgb(h3, m1, m22) {
    return (
      (h3 < 60
        ? m1 + ((m22 - m1) * h3) / 60
        : h3 < 180
          ? m22
          : h3 < 240
            ? m1 + ((m22 - m1) * (240 - h3)) / 60
            : m1) * 255
    );
  }

  // node_modules/d3-interpolate/src/basis.js
  function basis(t1, v0, v1, v22, v3) {
    var t22 = t1 * t1,
      t3 = t22 * t1;
    return (
      ((1 - 3 * t1 + 3 * t22 - t3) * v0 +
        (4 - 6 * t22 + 3 * t3) * v1 +
        (1 + 3 * t1 + 3 * t22 - 3 * t3) * v22 +
        t3 * v3) /
      6
    );
  }
  function basis_default(values) {
    var n2 = values.length - 1;
    return function (t3) {
      var i4 = t3 <= 0 ? (t3 = 0) : t3 >= 1 ? ((t3 = 1), n2 - 1) : Math.floor(t3 * n2),
        v1 = values[i4],
        v22 = values[i4 + 1],
        v0 = i4 > 0 ? values[i4 - 1] : 2 * v1 - v22,
        v3 = i4 < n2 - 1 ? values[i4 + 2] : 2 * v22 - v1;
      return basis((t3 - i4 / n2) * n2, v0, v1, v22, v3);
    };
  }

  // node_modules/d3-interpolate/src/basisClosed.js
  function basisClosed_default(values) {
    var n2 = values.length;
    return function (t3) {
      var i4 = Math.floor(((t3 %= 1) < 0 ? ++t3 : t3) * n2),
        v0 = values[(i4 + n2 - 1) % n2],
        v1 = values[i4 % n2],
        v22 = values[(i4 + 1) % n2],
        v3 = values[(i4 + 2) % n2];
      return basis((t3 - i4 / n2) * n2, v0, v1, v22, v3);
    };
  }

  // node_modules/d3-interpolate/src/constant.js
  var constant_default3 = (x4) => () => x4;

  // node_modules/d3-interpolate/src/color.js
  function linear(a3, d3) {
    return function (t3) {
      return a3 + t3 * d3;
    };
  }
  function exponential(a3, b3, y3) {
    return (
      (a3 = Math.pow(a3, y3)),
      (b3 = Math.pow(b3, y3) - a3),
      (y3 = 1 / y3),
      function (t3) {
        return Math.pow(a3 + t3 * b3, y3);
      }
    );
  }
  function gamma(y3) {
    return (y3 = +y3) === 1
      ? nogamma
      : function (a3, b3) {
          return b3 - a3 ? exponential(a3, b3, y3) : constant_default3(isNaN(a3) ? b3 : a3);
        };
  }
  function nogamma(a3, b3) {
    var d3 = b3 - a3;
    return d3 ? linear(a3, d3) : constant_default3(isNaN(a3) ? b3 : a3);
  }

  // node_modules/d3-interpolate/src/rgb.js
  var rgb_default = (function rgbGamma(y3) {
    var color2 = gamma(y3);
    function rgb2(start2, end) {
      var r3 = color2((start2 = rgb(start2)).r, (end = rgb(end)).r),
        g4 = color2(start2.g, end.g),
        b3 = color2(start2.b, end.b),
        opacity = nogamma(start2.opacity, end.opacity);
      return function (t3) {
        start2.r = r3(t3);
        start2.g = g4(t3);
        start2.b = b3(t3);
        start2.opacity = opacity(t3);
        return start2 + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  })(1);
  function rgbSpline(spline) {
    return function (colors) {
      var n2 = colors.length,
        r3 = new Array(n2),
        g4 = new Array(n2),
        b3 = new Array(n2),
        i4,
        color2;
      for (i4 = 0; i4 < n2; ++i4) {
        color2 = rgb(colors[i4]);
        r3[i4] = color2.r || 0;
        g4[i4] = color2.g || 0;
        b3[i4] = color2.b || 0;
      }
      r3 = spline(r3);
      g4 = spline(g4);
      b3 = spline(b3);
      color2.opacity = 1;
      return function (t3) {
        color2.r = r3(t3);
        color2.g = g4(t3);
        color2.b = b3(t3);
        return color2 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis_default);
  var rgbBasisClosed = rgbSpline(basisClosed_default);

  // node_modules/d3-interpolate/src/numberArray.js
  function numberArray_default(a3, b3) {
    if (!b3) b3 = [];
    var n2 = a3 ? Math.min(b3.length, a3.length) : 0,
      c3 = b3.slice(),
      i4;
    return function (t3) {
      for (i4 = 0; i4 < n2; ++i4) c3[i4] = a3[i4] * (1 - t3) + b3[i4] * t3;
      return c3;
    };
  }
  function isNumberArray(x4) {
    return ArrayBuffer.isView(x4) && !(x4 instanceof DataView);
  }

  // node_modules/d3-interpolate/src/array.js
  function genericArray(a3, b3) {
    var nb = b3 ? b3.length : 0,
      na = a3 ? Math.min(nb, a3.length) : 0,
      x4 = new Array(na),
      c3 = new Array(nb),
      i4;
    for (i4 = 0; i4 < na; ++i4) x4[i4] = value_default(a3[i4], b3[i4]);
    for (; i4 < nb; ++i4) c3[i4] = b3[i4];
    return function (t3) {
      for (i4 = 0; i4 < na; ++i4) c3[i4] = x4[i4](t3);
      return c3;
    };
  }

  // node_modules/d3-interpolate/src/date.js
  function date_default(a3, b3) {
    var d3 = /* @__PURE__ */ new Date();
    return (
      (a3 = +a3),
      (b3 = +b3),
      function (t3) {
        return (d3.setTime(a3 * (1 - t3) + b3 * t3), d3);
      }
    );
  }

  // node_modules/d3-interpolate/src/number.js
  function number_default(a3, b3) {
    return (
      (a3 = +a3),
      (b3 = +b3),
      function (t3) {
        return a3 * (1 - t3) + b3 * t3;
      }
    );
  }

  // node_modules/d3-interpolate/src/object.js
  function object_default(a3, b3) {
    var i4 = {},
      c3 = {},
      k4;
    if (a3 === null || typeof a3 !== "object") a3 = {};
    if (b3 === null || typeof b3 !== "object") b3 = {};
    for (k4 in b3) {
      if (k4 in a3) {
        i4[k4] = value_default(a3[k4], b3[k4]);
      } else {
        c3[k4] = b3[k4];
      }
    }
    return function (t3) {
      for (k4 in i4) c3[k4] = i4[k4](t3);
      return c3;
    };
  }

  // node_modules/d3-interpolate/src/string.js
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero(b3) {
    return function () {
      return b3;
    };
  }
  function one(b3) {
    return function (t3) {
      return b3(t3) + "";
    };
  }
  function string_default(a3, b3) {
    var bi = (reA.lastIndex = reB.lastIndex = 0),
      am,
      bm,
      bs,
      i4 = -1,
      s3 = [],
      q4 = [];
    ((a3 = a3 + ""), (b3 = b3 + ""));
    while ((am = reA.exec(a3)) && (bm = reB.exec(b3))) {
      if ((bs = bm.index) > bi) {
        bs = b3.slice(bi, bs);
        if (s3[i4]) s3[i4] += bs;
        else s3[++i4] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s3[i4]) s3[i4] += bm;
        else s3[++i4] = bm;
      } else {
        s3[++i4] = null;
        q4.push({ i: i4, x: number_default(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b3.length) {
      bs = b3.slice(bi);
      if (s3[i4]) s3[i4] += bs;
      else s3[++i4] = bs;
    }
    return s3.length < 2
      ? q4[0]
        ? one(q4[0].x)
        : zero(b3)
      : ((b3 = q4.length),
        function (t3) {
          for (var i5 = 0, o3; i5 < b3; ++i5) s3[(o3 = q4[i5]).i] = o3.x(t3);
          return s3.join("");
        });
  }

  // node_modules/d3-interpolate/src/value.js
  function value_default(a3, b3) {
    var t3 = typeof b3,
      c3;
    return b3 == null || t3 === "boolean"
      ? constant_default3(b3)
      : (t3 === "number"
          ? number_default
          : t3 === "string"
            ? (c3 = color(b3))
              ? ((b3 = c3), rgb_default)
              : string_default
            : b3 instanceof color
              ? rgb_default
              : b3 instanceof Date
                ? date_default
                : isNumberArray(b3)
                  ? numberArray_default
                  : Array.isArray(b3)
                    ? genericArray
                    : (typeof b3.valueOf !== "function" && typeof b3.toString !== "function") ||
                        isNaN(b3)
                      ? object_default
                      : number_default)(a3, b3);
  }

  // node_modules/d3-interpolate/src/transform/decompose.js
  var degrees = 180 / Math.PI;
  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
  function decompose_default(a3, b3, c3, d3, e3, f4) {
    var scaleX, scaleY, skewX;
    if ((scaleX = Math.sqrt(a3 * a3 + b3 * b3))) ((a3 /= scaleX), (b3 /= scaleX));
    if ((skewX = a3 * c3 + b3 * d3)) ((c3 -= a3 * skewX), (d3 -= b3 * skewX));
    if ((scaleY = Math.sqrt(c3 * c3 + d3 * d3)))
      ((c3 /= scaleY), (d3 /= scaleY), (skewX /= scaleY));
    if (a3 * d3 < b3 * c3) ((a3 = -a3), (b3 = -b3), (skewX = -skewX), (scaleX = -scaleX));
    return {
      translateX: e3,
      translateY: f4,
      rotate: Math.atan2(b3, a3) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY,
    };
  }

  // node_modules/d3-interpolate/src/transform/parse.js
  var svgNode;
  function parseCss(value) {
    const m3 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m3.isIdentity ? identity : decompose_default(m3.a, m3.b, m3.c, m3.d, m3.e, m3.f);
  }
  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  // node_modules/d3-interpolate/src/transform/index.js
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s3) {
      return s3.length ? s3.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s3, q4) {
      if (xa !== xb || ya !== yb) {
        var i4 = s3.push("translate(", null, pxComma, null, pxParen);
        q4.push({ i: i4 - 4, x: number_default(xa, xb) }, { i: i4 - 2, x: number_default(ya, yb) });
      } else if (xb || yb) {
        s3.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a3, b3, s3, q4) {
      if (a3 !== b3) {
        if (a3 - b3 > 180) b3 += 360;
        else if (b3 - a3 > 180) a3 += 360;
        q4.push({ i: s3.push(pop(s3) + "rotate(", null, degParen) - 2, x: number_default(a3, b3) });
      } else if (b3) {
        s3.push(pop(s3) + "rotate(" + b3 + degParen);
      }
    }
    function skewX(a3, b3, s3, q4) {
      if (a3 !== b3) {
        q4.push({ i: s3.push(pop(s3) + "skewX(", null, degParen) - 2, x: number_default(a3, b3) });
      } else if (b3) {
        s3.push(pop(s3) + "skewX(" + b3 + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s3, q4) {
      if (xa !== xb || ya !== yb) {
        var i4 = s3.push(pop(s3) + "scale(", null, ",", null, ")");
        q4.push({ i: i4 - 4, x: number_default(xa, xb) }, { i: i4 - 2, x: number_default(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s3.push(pop(s3) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function (a3, b3) {
      var s3 = [],
        q4 = [];
      ((a3 = parse(a3)), (b3 = parse(b3)));
      translate(a3.translateX, a3.translateY, b3.translateX, b3.translateY, s3, q4);
      rotate(a3.rotate, b3.rotate, s3, q4);
      skewX(a3.skewX, b3.skewX, s3, q4);
      scale(a3.scaleX, a3.scaleY, b3.scaleX, b3.scaleY, s3, q4);
      a3 = b3 = null;
      return function (t3) {
        var i4 = -1,
          n2 = q4.length,
          o3;
        while (++i4 < n2) s3[(o3 = q4[i4]).i] = o3.x(t3);
        return s3.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  // node_modules/d3-interpolate/src/zoom.js
  var epsilon2 = 1e-12;
  function cosh(x4) {
    return ((x4 = Math.exp(x4)) + 1 / x4) / 2;
  }
  function sinh(x4) {
    return ((x4 = Math.exp(x4)) - 1 / x4) / 2;
  }
  function tanh(x4) {
    return ((x4 = Math.exp(2 * x4)) - 1) / (x4 + 1);
  }
  var zoom_default = (function zoomRho(rho, rho2, rho4) {
    function zoom(p0, p1) {
      var ux0 = p0[0],
        uy0 = p0[1],
        w0 = p0[2],
        ux1 = p1[0],
        uy1 = p1[1],
        w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d22 = dx * dx + dy * dy,
        i4,
        S2;
      if (d22 < epsilon2) {
        S2 = Math.log(w1 / w0) / rho;
        i4 = function (t3) {
          return [ux0 + t3 * dx, uy0 + t3 * dy, w0 * Math.exp(rho * t3 * S2)];
        };
      } else {
        var d1 = Math.sqrt(d22),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d22) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d22) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S2 = (r1 - r0) / rho;
        i4 = function (t3) {
          var s3 = t3 * S2,
            coshr0 = cosh(r0),
            u4 = (w0 / (rho2 * d1)) * (coshr0 * tanh(rho * s3 + r0) - sinh(r0));
          return [ux0 + u4 * dx, uy0 + u4 * dy, (w0 * coshr0) / cosh(rho * s3 + r0)];
        };
      }
      i4.duration = (S2 * 1e3 * rho) / Math.SQRT2;
      return i4;
    }
    zoom.rho = function (_3) {
      var _1 = Math.max(1e-3, +_3),
        _22 = _1 * _1,
        _4 = _22 * _22;
      return zoomRho(_1, _22, _4);
    };
    return zoom;
  })(Math.SQRT2, 2, 4);

  // node_modules/d3-timer/src/timer.js
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame =
    typeof window === "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (f4) {
          setTimeout(f4, 17);
        };
  function now() {
    return clockNow || (setFrame(clearNow), (clockNow = clock.now() + clockSkew));
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function (callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function () {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    },
  };
  function timer(callback, delay, time) {
    var t3 = new Timer();
    t3.restart(callback, delay, time);
    return t3;
  }
  function timerFlush() {
    now();
    ++frame;
    var t3 = taskHead,
      e3;
    while (t3) {
      if ((e3 = clockNow - t3._time) >= 0) t3._call.call(void 0, e3);
      t3 = t3._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(),
      delay = now2 - clockLast;
    if (delay > pokeDelay) ((clockSkew -= delay), (clockLast = now2));
  }
  function nap() {
    var t0,
      t1 = taskHead,
      t22,
      time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        ((t0 = t1), (t1 = t1._next));
      } else {
        ((t22 = t1._next), (t1._next = null));
        t1 = t0 ? (t0._next = t22) : (taskHead = t22);
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame) return;
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    if (delay > 24) {
      if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) ((clockLast = clock.now()), (interval = setInterval(poke, pokeDelay)));
      ((frame = 1), setFrame(wake));
    }
  }

  // node_modules/d3-timer/src/timeout.js
  function timeout_default(callback, delay, time) {
    var t3 = new Timer();
    delay = delay == null ? 0 : +delay;
    t3.restart(
      (elapsed) => {
        t3.stop();
        callback(elapsed + delay);
      },
      delay,
      time,
    );
    return t3;
  }

  // node_modules/d3-transition/src/transition/schedule.js
  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule_default(node, name, id2, index2, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id2 in schedules) return;
    create(node, id2, {
      name,
      index: index2,
      // For context during callback.
      group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED,
    });
  }
  function init(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }
  function set2(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }
  function get2(node, id2) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
    return schedule;
  }
  function create(node, id2, self) {
    var schedules = node.__transition,
      tween;
    schedules[id2] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start2, self.delay, self.time);
      if (self.delay <= elapsed) start2(elapsed - self.delay);
    }
    function start2(elapsed) {
      var i4, j4, n2, o3;
      if (self.state !== SCHEDULED) return stop();
      for (i4 in schedules) {
        o3 = schedules[i4];
        if (o3.name !== self.name) continue;
        if (o3.state === STARTED) return timeout_default(start2);
        if (o3.state === RUNNING) {
          o3.state = ENDED;
          o3.timer.stop();
          o3.on.call("interrupt", node, node.__data__, o3.index, o3.group);
          delete schedules[i4];
        } else if (+i4 < id2) {
          o3.state = ENDED;
          o3.timer.stop();
          o3.on.call("cancel", node, node.__data__, o3.index, o3.group);
          delete schedules[i4];
        }
      }
      timeout_default(function () {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return;
      self.state = STARTED;
      tween = new Array((n2 = self.tween.length));
      for (i4 = 0, j4 = -1; i4 < n2; ++i4) {
        if ((o3 = self.tween[i4].value.call(node, node.__data__, self.index, self.group))) {
          tween[++j4] = o3;
        }
      }
      tween.length = j4 + 1;
    }
    function tick(elapsed) {
      var t3 =
          elapsed < self.duration
            ? self.ease.call(null, elapsed / self.duration)
            : (self.timer.restart(stop), (self.state = ENDING), 1),
        i4 = -1,
        n2 = tween.length;
      while (++i4 < n2) {
        tween[i4].call(node, t3);
      }
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id2];
      for (var i4 in schedules) return;
      delete node.__transition;
    }
  }

  // node_modules/d3-transition/src/interrupt.js
  function interrupt_default(node, name) {
    var schedules = node.__transition,
      schedule,
      active,
      empty2 = true,
      i4;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for (i4 in schedules) {
      if ((schedule = schedules[i4]).name !== name) {
        empty2 = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(
        active ? "interrupt" : "cancel",
        node,
        node.__data__,
        schedule.index,
        schedule.group,
      );
      delete schedules[i4];
    }
    if (empty2) delete node.__transition;
  }

  // node_modules/d3-transition/src/selection/interrupt.js
  function interrupt_default2(name) {
    return this.each(function () {
      interrupt_default(this, name);
    });
  }

  // node_modules/d3-transition/src/transition/tween.js
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function () {
      var schedule = set2(this, id2),
        tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i4 = 0, n2 = tween1.length; i4 < n2; ++i4) {
          if (tween1[i4].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i4, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error();
    return function () {
      var schedule = set2(this, id2),
        tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t3 = { name, value }, i4 = 0, n2 = tween1.length; i4 < n2; ++i4) {
          if (tween1[i4].name === name) {
            tween1[i4] = t3;
            break;
          }
        }
        if (i4 === n2) tween1.push(t3);
      }
      schedule.tween = tween1;
    };
  }
  function tween_default(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get2(this.node(), id2).tween;
      for (var i4 = 0, n2 = tween.length, t3; i4 < n2; ++i4) {
        if ((t3 = tween[i4]).name === name) {
          return t3.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function () {
      var schedule = set2(this, id2);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function (node) {
      return get2(node, id2).value[name];
    };
  }

  // node_modules/d3-transition/src/transition/interpolate.js
  function interpolate_default(a3, b3) {
    var c3;
    return (
      typeof b3 === "number"
        ? number_default
        : b3 instanceof color
          ? rgb_default
          : (c3 = color(b3))
            ? ((b3 = c3), rgb_default)
            : string_default
    )(a3, b3);
  }

  // node_modules/d3-transition/src/transition/attr.js
  function attrRemove2(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS2(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant2(name, interpolate, value1) {
    var string00,
      string1 = value1 + "",
      interpolate0;
    return function () {
      var string0 = this.getAttribute(name);
      return string0 === string1
        ? null
        : string0 === string00
          ? interpolate0
          : (interpolate0 = interpolate((string00 = string0), value1));
    };
  }
  function attrConstantNS2(fullname, interpolate, value1) {
    var string00,
      string1 = value1 + "",
      interpolate0;
    return function () {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1
        ? null
        : string0 === string00
          ? interpolate0
          : (interpolate0 = interpolate((string00 = string0), value1));
    };
  }
  function attrFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0,
        value1 = value(this),
        string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1
        ? null
        : string0 === string00 && string1 === string10
          ? interpolate0
          : ((string10 = string1), (interpolate0 = interpolate((string00 = string0), value1)));
    };
  }
  function attrFunctionNS2(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0,
        value1 = value(this),
        string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1
        ? null
        : string0 === string00 && string1 === string10
          ? interpolate0
          : ((string10 = string1), (interpolate0 = interpolate((string00 = string0), value1)));
    };
  }
  function attr_default2(name, value) {
    var fullname = namespace_default(name),
      i4 = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
    return this.attrTween(
      name,
      typeof value === "function"
        ? (fullname.local ? attrFunctionNS2 : attrFunction2)(
            fullname,
            i4,
            tweenValue(this, "attr." + name, value),
          )
        : value == null
          ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname)
          : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i4, value),
    );
  }

  // node_modules/d3-transition/src/transition/attrTween.js
  function attrInterpolate(name, i4) {
    return function (t3) {
      this.setAttribute(name, i4.call(this, t3));
    };
  }
  function attrInterpolateNS(fullname, i4) {
    return function (t3) {
      this.setAttributeNS(fullname.space, fullname.local, i4.call(this, t3));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i4 = value.apply(this, arguments);
      if (i4 !== i0) t0 = (i0 = i4) && attrInterpolateNS(fullname, i4);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i4 = value.apply(this, arguments);
      if (i4 !== i0) t0 = (i0 = i4) && attrInterpolate(name, i4);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween_default(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    var fullname = namespace_default(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  // node_modules/d3-transition/src/transition/delay.js
  function delayFunction(id2, value) {
    return function () {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return (
      (value = +value),
      function () {
        init(this, id2).delay = value;
      }
    );
  }
  function delay_default(value) {
    var id2 = this._id;
    return arguments.length
      ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value))
      : get2(this.node(), id2).delay;
  }

  // node_modules/d3-transition/src/transition/duration.js
  function durationFunction(id2, value) {
    return function () {
      set2(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return (
      (value = +value),
      function () {
        set2(this, id2).duration = value;
      }
    );
  }
  function duration_default(value) {
    var id2 = this._id;
    return arguments.length
      ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value))
      : get2(this.node(), id2).duration;
  }

  // node_modules/d3-transition/src/transition/ease.js
  function easeConstant(id2, value) {
    if (typeof value !== "function") throw new Error();
    return function () {
      set2(this, id2).ease = value;
    };
  }
  function ease_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
  }

  // node_modules/d3-transition/src/transition/easeVarying.js
  function easeVarying(id2, value) {
    return function () {
      var v3 = value.apply(this, arguments);
      if (typeof v3 !== "function") throw new Error();
      set2(this, id2).ease = v3;
    };
  }
  function easeVarying_default(value) {
    if (typeof value !== "function") throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  // node_modules/d3-transition/src/transition/filter.js
  function filter_default2(match) {
    if (typeof match !== "function") match = matcher_default(match);
    for (
      var groups = this._groups, m3 = groups.length, subgroups = new Array(m3), j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (
        var group = groups[j4], n2 = group.length, subgroup = (subgroups[j4] = []), node, i4 = 0;
        i4 < n2;
        ++i4
      ) {
        if ((node = group[i4]) && match.call(node, node.__data__, i4, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/merge.js
  function merge_default2(transition2) {
    if (transition2._id !== this._id) throw new Error();
    for (
      var groups0 = this._groups,
        groups1 = transition2._groups,
        m0 = groups0.length,
        m1 = groups1.length,
        m3 = Math.min(m0, m1),
        merges = new Array(m0),
        j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (
        var group0 = groups0[j4],
          group1 = groups1[j4],
          n2 = group0.length,
          merge = (merges[j4] = new Array(n2)),
          node,
          i4 = 0;
        i4 < n2;
        ++i4
      ) {
        if ((node = group0[i4] || group1[i4])) {
          merge[i4] = node;
        }
      }
    }
    for (; j4 < m0; ++j4) {
      merges[j4] = groups0[j4];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/on.js
  function start(name) {
    return (name + "")
      .trim()
      .split(/^|\s+/)
      .every(function (t3) {
        var i4 = t3.indexOf(".");
        if (i4 >= 0) t3 = t3.slice(0, i4);
        return !t3 || t3 === "start";
      });
  }
  function onFunction(id2, name, listener) {
    var on0,
      on1,
      sit = start(name) ? init : set2;
    return function () {
      var schedule = sit(this, id2),
        on2 = schedule.on;
      if (on2 !== on0) (on1 = (on0 = on2).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function on_default2(name, listener) {
    var id2 = this._id;
    return arguments.length < 2
      ? get2(this.node(), id2).on.on(name)
      : this.each(onFunction(id2, name, listener));
  }

  // node_modules/d3-transition/src/transition/remove.js
  function removeFunction(id2) {
    return function () {
      var parent = this.parentNode;
      for (var i4 in this.__transition) if (+i4 !== id2) return;
      if (parent) parent.removeChild(this);
    };
  }
  function remove_default2() {
    return this.on("end.remove", removeFunction(this._id));
  }

  // node_modules/d3-transition/src/transition/select.js
  function select_default3(select) {
    var name = this._name,
      id2 = this._id;
    if (typeof select !== "function") select = selector_default(select);
    for (
      var groups = this._groups, m3 = groups.length, subgroups = new Array(m3), j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (
        var group = groups[j4],
          n2 = group.length,
          subgroup = (subgroups[j4] = new Array(n2)),
          node,
          subnode,
          i4 = 0;
        i4 < n2;
        ++i4
      ) {
        if ((node = group[i4]) && (subnode = select.call(node, node.__data__, i4, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i4] = subnode;
          schedule_default(subgroup[i4], name, id2, i4, subgroup, get2(node, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selectAll.js
  function selectAll_default2(select) {
    var name = this._name,
      id2 = this._id;
    if (typeof select !== "function") select = selectorAll_default(select);
    for (
      var groups = this._groups, m3 = groups.length, subgroups = [], parents = [], j4 = 0;
      j4 < m3;
      ++j4
    ) {
      for (var group = groups[j4], n2 = group.length, node, i4 = 0; i4 < n2; ++i4) {
        if ((node = group[i4])) {
          for (
            var children2 = select.call(node, node.__data__, i4, group),
              child,
              inherit2 = get2(node, id2),
              k4 = 0,
              l3 = children2.length;
            k4 < l3;
            ++k4
          ) {
            if ((child = children2[k4])) {
              schedule_default(child, name, id2, k4, children2, inherit2);
            }
          }
          subgroups.push(children2);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selection.js
  var Selection2 = selection_default.prototype.constructor;
  function selection_default2() {
    return new Selection2(this._groups, this._parents);
  }

  // node_modules/d3-transition/src/transition/style.js
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1
        ? null
        : string0 === string00 && string1 === string10
          ? interpolate0
          : (interpolate0 = interpolate((string00 = string0), (string10 = string1)));
    };
  }
  function styleRemove2(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant2(name, interpolate, value1) {
    var string00,
      string1 = value1 + "",
      interpolate0;
    return function () {
      var string0 = styleValue(this, name);
      return string0 === string1
        ? null
        : string0 === string00
          ? interpolate0
          : (interpolate0 = interpolate((string00 = string0), value1));
    };
  }
  function styleFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
      if (value1 == null)
        string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1
        ? null
        : string0 === string00 && string1 === string10
          ? interpolate0
          : ((string10 = string1), (interpolate0 = interpolate((string00 = string0), value1)));
    };
  }
  function styleMaybeRemove(id2, name) {
    var on0,
      on1,
      listener0,
      key = "style." + name,
      event = "end." + key,
      remove2;
    return function () {
      var schedule = set2(this, id2),
        on2 = schedule.on,
        listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
      if (on2 !== on0 || listener0 !== listener)
        (on1 = (on0 = on2).copy()).on(event, (listener0 = listener));
      schedule.on = on1;
    };
  }
  function style_default2(name, value, priority) {
    var i4 = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
    return value == null
      ? this.styleTween(name, styleNull(name, i4)).on("end.style." + name, styleRemove2(name))
      : typeof value === "function"
        ? this.styleTween(
            name,
            styleFunction2(name, i4, tweenValue(this, "style." + name, value)),
          ).each(styleMaybeRemove(this._id, name))
        : this.styleTween(name, styleConstant2(name, i4, value), priority).on(
            "end.style." + name,
            null,
          );
  }

  // node_modules/d3-transition/src/transition/styleTween.js
  function styleInterpolate(name, i4, priority) {
    return function (t3) {
      this.style.setProperty(name, i4.call(this, t3), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t3, i0;
    function tween() {
      var i4 = value.apply(this, arguments);
      if (i4 !== i0) t3 = (i0 = i4) && styleInterpolate(name, i4, priority);
      return t3;
    }
    tween._value = value;
    return tween;
  }
  function styleTween_default(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  // node_modules/d3-transition/src/transition/text.js
  function textConstant2(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction2(value) {
    return function () {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function text_default2(value) {
    return this.tween(
      "text",
      typeof value === "function"
        ? textFunction2(tweenValue(this, "text", value))
        : textConstant2(value == null ? "" : value + ""),
    );
  }

  // node_modules/d3-transition/src/transition/textTween.js
  function textInterpolate(i4) {
    return function (t3) {
      this.textContent = i4.call(this, t3);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i4 = value.apply(this, arguments);
      if (i4 !== i0) t0 = (i0 = i4) && textInterpolate(i4);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function textTween_default(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, textTween(value));
  }

  // node_modules/d3-transition/src/transition/transition.js
  function transition_default() {
    var name = this._name,
      id0 = this._id,
      id1 = newId();
    for (var groups = this._groups, m3 = groups.length, j4 = 0; j4 < m3; ++j4) {
      for (var group = groups[j4], n2 = group.length, node, i4 = 0; i4 < n2; ++i4) {
        if ((node = group[i4])) {
          var inherit2 = get2(node, id0);
          schedule_default(node, name, id1, i4, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease,
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }

  // node_modules/d3-transition/src/transition/end.js
  function end_default() {
    var on0,
      on1,
      that = this,
      id2 = that._id,
      size = that.size();
    return new Promise(function (resolve, reject) {
      var cancel = { value: reject },
        end = {
          value: function () {
            if (--size === 0) resolve();
          },
        };
      that.each(function () {
        var schedule = set2(this, id2),
          on2 = schedule.on;
        if (on2 !== on0) {
          on1 = (on0 = on2).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
      if (size === 0) resolve();
    });
  }

  // node_modules/d3-transition/src/transition/index.js
  var id = 0;
  function Transition(groups, parents, name, id2) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function transition(name) {
    return selection_default().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection_default.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: select_default3,
    selectAll: selectAll_default2,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: filter_default2,
    merge: merge_default2,
    selection: selection_default2,
    transition: transition_default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: on_default2,
    attr: attr_default2,
    attrTween: attrTween_default,
    style: style_default2,
    styleTween: styleTween_default,
    text: text_default2,
    textTween: textTween_default,
    remove: remove_default2,
    tween: tween_default,
    delay: delay_default,
    duration: duration_default,
    ease: ease_default,
    easeVarying: easeVarying_default,
    end: end_default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator],
  };

  // node_modules/d3-ease/src/cubic.js
  function cubicInOut(t3) {
    return ((t3 *= 2) <= 1 ? t3 * t3 * t3 : (t3 -= 2) * t3 * t3 + 2) / 2;
  }

  // node_modules/d3-transition/src/selection/transition.js
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut,
  };
  function inherit(node, id2) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id2])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id2} not found`);
      }
    }
    return timing;
  }
  function transition_default2(name) {
    var id2, timing;
    if (name instanceof Transition) {
      ((id2 = name._id), (name = name._name));
    } else {
      ((id2 = newId()),
        ((timing = defaultTiming).time = now()),
        (name = name == null ? null : name + ""));
    }
    for (var groups = this._groups, m3 = groups.length, j4 = 0; j4 < m3; ++j4) {
      for (var group = groups[j4], n2 = group.length, node, i4 = 0; i4 < n2; ++i4) {
        if ((node = group[i4])) {
          schedule_default(node, name, id2, i4, group, timing || inherit(node, id2));
        }
      }
    }
    return new Transition(groups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/selection/index.js
  selection_default.prototype.interrupt = interrupt_default2;
  selection_default.prototype.transition = transition_default2;

  // node_modules/d3-zoom/src/constant.js
  var constant_default4 = (x4) => () => x4;

  // node_modules/d3-zoom/src/event.js
  function ZoomEvent(type, { sourceEvent, target, transform: transform2, dispatch: dispatch2 }) {
    Object.defineProperties(this, {
      type: { value: type, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      transform: { value: transform2, enumerable: true, configurable: true },
      _: { value: dispatch2 },
    });
  }

  // node_modules/d3-zoom/src/transform.js
  function Transform(k4, x4, y3) {
    this.k = k4;
    this.x = x4;
    this.y = y3;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function (k4) {
      return k4 === 1 ? this : new Transform(this.k * k4, this.x, this.y);
    },
    translate: function (x4, y3) {
      return (x4 === 0) & (y3 === 0)
        ? this
        : new Transform(this.k, this.x + this.k * x4, this.y + this.k * y3);
    },
    apply: function (point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function (x4) {
      return x4 * this.k + this.x;
    },
    applyY: function (y3) {
      return y3 * this.k + this.y;
    },
    invert: function (location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function (x4) {
      return (x4 - this.x) / this.k;
    },
    invertY: function (y3) {
      return (y3 - this.y) / this.k;
    },
    rescaleX: function (x4) {
      return x4.copy().domain(x4.range().map(this.invertX, this).map(x4.invert, x4));
    },
    rescaleY: function (y3) {
      return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    },
  };
  var identity2 = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node) {
    while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
    return node.__zoom;
  }

  // node_modules/d3-zoom/src/noevent.js
  function nopropagation2(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default2(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-zoom/src/zoom.js
  function defaultFilter2(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
  }
  function defaultExtent() {
    var e3 = this;
    if (e3 instanceof SVGElement) {
      e3 = e3.ownerSVGElement || e3;
      if (e3.hasAttribute("viewBox")) {
        e3 = e3.viewBox.baseVal;
        return [
          [e3.x, e3.y],
          [e3.x + e3.width, e3.y + e3.height],
        ];
      }
      return [
        [0, 0],
        [e3.width.baseVal.value, e3.height.baseVal.value],
      ];
    }
    return [
      [0, 0],
      [e3.clientWidth, e3.clientHeight],
    ];
  }
  function defaultTransform() {
    return this.__zoom || identity2;
  }
  function defaultWheelDelta(event) {
    return (
      -event.deltaY *
      (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) *
      (event.ctrlKey ? 10 : 1)
    );
  }
  function defaultTouchable2() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function defaultConstrain(transform2, extent, translateExtent) {
    var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
    return transform2.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1),
    );
  }
  function zoom_default2() {
    var filter2 = defaultFilter2,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta2 = defaultWheelDelta,
      touchable = defaultTouchable2,
      scaleExtent = [0, Infinity],
      translateExtent = [
        [-Infinity, -Infinity],
        [Infinity, Infinity],
      ],
      duration = 250,
      interpolate = zoom_default,
      listeners = dispatch_default("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;
    function zoom(selection2) {
      selection2
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, { passive: false })
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
        .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function (collection, transform2, point, event) {
      var selection2 = collection.selection ? collection.selection() : collection;
      selection2.property("__zoom", defaultTransform);
      if (collection !== selection2) {
        schedule(collection, transform2, point, event);
      } else {
        selection2.interrupt().each(function () {
          gesture(this, arguments)
            .event(event)
            .start()
            .zoom(
              null,
              typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2,
            )
            .end();
        });
      }
    };
    zoom.scaleBy = function (selection2, k4, p3, event) {
      zoom.scaleTo(
        selection2,
        function () {
          var k0 = this.__zoom.k,
            k1 = typeof k4 === "function" ? k4.apply(this, arguments) : k4;
          return k0 * k1;
        },
        p3,
        event,
      );
    };
    zoom.scaleTo = function (selection2, k4, p3, event) {
      zoom.transform(
        selection2,
        function () {
          var e3 = extent.apply(this, arguments),
            t0 = this.__zoom,
            p0 =
              p3 == null ? centroid(e3) : typeof p3 === "function" ? p3.apply(this, arguments) : p3,
            p1 = t0.invert(p0),
            k1 = typeof k4 === "function" ? k4.apply(this, arguments) : k4;
          return constrain(translate(scale(t0, k1), p0, p1), e3, translateExtent);
        },
        p3,
        event,
      );
    };
    zoom.translateBy = function (selection2, x4, y3, event) {
      zoom.transform(
        selection2,
        function () {
          return constrain(
            this.__zoom.translate(
              typeof x4 === "function" ? x4.apply(this, arguments) : x4,
              typeof y3 === "function" ? y3.apply(this, arguments) : y3,
            ),
            extent.apply(this, arguments),
            translateExtent,
          );
        },
        null,
        event,
      );
    };
    zoom.translateTo = function (selection2, x4, y3, p3, event) {
      zoom.transform(
        selection2,
        function () {
          var e3 = extent.apply(this, arguments),
            t3 = this.__zoom,
            p0 =
              p3 == null ? centroid(e3) : typeof p3 === "function" ? p3.apply(this, arguments) : p3;
          return constrain(
            identity2
              .translate(p0[0], p0[1])
              .scale(t3.k)
              .translate(
                typeof x4 === "function" ? -x4.apply(this, arguments) : -x4,
                typeof y3 === "function" ? -y3.apply(this, arguments) : -y3,
              ),
            e3,
            translateExtent,
          );
        },
        p3,
        event,
      );
    };
    function scale(transform2, k4) {
      k4 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k4));
      return k4 === transform2.k ? transform2 : new Transform(k4, transform2.x, transform2.y);
    }
    function translate(transform2, p0, p1) {
      var x4 = p0[0] - p1[0] * transform2.k,
        y3 = p0[1] - p1[1] * transform2.k;
      return x4 === transform2.x && y3 === transform2.y
        ? transform2
        : new Transform(transform2.k, x4, y3);
    }
    function centroid(extent2) {
      return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
    }
    function schedule(transition2, transform2, point, event) {
      transition2
        .on("start.zoom", function () {
          gesture(this, arguments).event(event).start();
        })
        .on("interrupt.zoom end.zoom", function () {
          gesture(this, arguments).event(event).end();
        })
        .tween("zoom", function () {
          var that = this,
            args = arguments,
            g4 = gesture(that, args).event(event),
            e3 = extent.apply(that, args),
            p3 =
              point == null
                ? centroid(e3)
                : typeof point === "function"
                  ? point.apply(that, args)
                  : point,
            w4 = Math.max(e3[1][0] - e3[0][0], e3[1][1] - e3[0][1]),
            a3 = that.__zoom,
            b3 = typeof transform2 === "function" ? transform2.apply(that, args) : transform2,
            i4 = interpolate(a3.invert(p3).concat(w4 / a3.k), b3.invert(p3).concat(w4 / b3.k));
          return function (t3) {
            if (t3 === 1) t3 = b3;
            else {
              var l3 = i4(t3),
                k4 = w4 / l3[2];
              t3 = new Transform(k4, p3[0] - l3[0] * k4, p3[1] - l3[1] * k4);
            }
            g4.zoom(null, t3);
          };
        });
    }
    function gesture(that, args, clean) {
      return (!clean && that.__zooming) || new Gesture(that, args);
    }
    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = extent.apply(that, args);
      this.taps = 0;
    }
    Gesture.prototype = {
      event: function (event) {
        if (event) this.sourceEvent = event;
        return this;
      },
      start: function () {
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function (key, transform2) {
        if (this.mouse && key !== "mouse") this.mouse[1] = transform2.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch") this.touch0[1] = transform2.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch") this.touch1[1] = transform2.invert(this.touch1[0]);
        this.that.__zoom = transform2;
        this.emit("zoom");
        return this;
      },
      end: function () {
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function (type) {
        var d3 = select_default2(this.that).datum();
        listeners.call(
          type,
          this.that,
          new ZoomEvent(type, {
            sourceEvent: this.sourceEvent,
            target: zoom,
            type,
            transform: this.that.__zoom,
            dispatch: listeners,
          }),
          d3,
        );
      },
    };
    function wheeled(event, ...args) {
      if (!filter2.apply(this, arguments)) return;
      var g4 = gesture(this, args).event(event),
        t3 = this.__zoom,
        k4 = Math.max(
          scaleExtent[0],
          Math.min(scaleExtent[1], t3.k * Math.pow(2, wheelDelta2.apply(this, arguments))),
        ),
        p3 = pointer_default(event);
      if (g4.wheel) {
        if (g4.mouse[0][0] !== p3[0] || g4.mouse[0][1] !== p3[1]) {
          g4.mouse[1] = t3.invert((g4.mouse[0] = p3));
        }
        clearTimeout(g4.wheel);
      } else if (t3.k === k4) return;
      else {
        g4.mouse = [p3, t3.invert(p3)];
        interrupt_default(this);
        g4.start();
      }
      noevent_default2(event);
      g4.wheel = setTimeout(wheelidled, wheelDelay);
      g4.zoom(
        "mouse",
        constrain(translate(scale(t3, k4), g4.mouse[0], g4.mouse[1]), g4.extent, translateExtent),
      );
      function wheelidled() {
        g4.wheel = null;
        g4.end();
      }
    }
    function mousedowned(event, ...args) {
      if (touchending || !filter2.apply(this, arguments)) return;
      var currentTarget = event.currentTarget,
        g4 = gesture(this, args, true).event(event),
        v3 = select_default2(event.view)
          .on("mousemove.zoom", mousemoved, true)
          .on("mouseup.zoom", mouseupped, true),
        p3 = pointer_default(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;
      nodrag_default(event.view);
      nopropagation2(event);
      g4.mouse = [p3, this.__zoom.invert(p3)];
      interrupt_default(this);
      g4.start();
      function mousemoved(event2) {
        noevent_default2(event2);
        if (!g4.moved) {
          var dx = event2.clientX - x0,
            dy = event2.clientY - y0;
          g4.moved = dx * dx + dy * dy > clickDistance2;
        }
        g4.event(event2).zoom(
          "mouse",
          constrain(
            translate(
              g4.that.__zoom,
              (g4.mouse[0] = pointer_default(event2, currentTarget)),
              g4.mouse[1],
            ),
            g4.extent,
            translateExtent,
          ),
        );
      }
      function mouseupped(event2) {
        v3.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(event2.view, g4.moved);
        noevent_default2(event2);
        g4.event(event2).end();
      }
    }
    function dblclicked(event, ...args) {
      if (!filter2.apply(this, arguments)) return;
      var t0 = this.__zoom,
        p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
      noevent_default2(event);
      if (duration > 0)
        select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
      else select_default2(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
      if (!filter2.apply(this, arguments)) return;
      var touches = event.touches,
        n2 = touches.length,
        g4 = gesture(this, args, event.changedTouches.length === n2).event(event),
        started,
        i4,
        t3,
        p3;
      nopropagation2(event);
      for (i4 = 0; i4 < n2; ++i4) {
        ((t3 = touches[i4]), (p3 = pointer_default(t3, this)));
        p3 = [p3, this.__zoom.invert(p3), t3.identifier];
        if (!g4.touch0) ((g4.touch0 = p3), (started = true), (g4.taps = 1 + !!touchstarting));
        else if (!g4.touch1 && g4.touch0[2] !== p3[2]) ((g4.touch1 = p3), (g4.taps = 0));
      }
      if (touchstarting) touchstarting = clearTimeout(touchstarting);
      if (started) {
        if (g4.taps < 2)
          ((touchfirst = p3[0]),
            (touchstarting = setTimeout(function () {
              touchstarting = null;
            }, touchDelay)));
        interrupt_default(this);
        g4.start();
      }
    }
    function touchmoved(event, ...args) {
      if (!this.__zooming) return;
      var g4 = gesture(this, args).event(event),
        touches = event.changedTouches,
        n2 = touches.length,
        i4,
        t3,
        p3,
        l3;
      noevent_default2(event);
      for (i4 = 0; i4 < n2; ++i4) {
        ((t3 = touches[i4]), (p3 = pointer_default(t3, this)));
        if (g4.touch0 && g4.touch0[2] === t3.identifier) g4.touch0[0] = p3;
        else if (g4.touch1 && g4.touch1[2] === t3.identifier) g4.touch1[0] = p3;
      }
      t3 = g4.that.__zoom;
      if (g4.touch1) {
        var p0 = g4.touch0[0],
          l0 = g4.touch0[1],
          p1 = g4.touch1[0],
          l1 = g4.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t3 = scale(t3, Math.sqrt(dp / dl));
        p3 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        l3 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      } else if (g4.touch0) ((p3 = g4.touch0[0]), (l3 = g4.touch0[1]));
      else return;
      g4.zoom("touch", constrain(translate(t3, p3, l3), g4.extent, translateExtent));
    }
    function touchended(event, ...args) {
      if (!this.__zooming) return;
      var g4 = gesture(this, args).event(event),
        touches = event.changedTouches,
        n2 = touches.length,
        i4,
        t3;
      nopropagation2(event);
      if (touchending) clearTimeout(touchending);
      touchending = setTimeout(function () {
        touchending = null;
      }, touchDelay);
      for (i4 = 0; i4 < n2; ++i4) {
        t3 = touches[i4];
        if (g4.touch0 && g4.touch0[2] === t3.identifier) delete g4.touch0;
        else if (g4.touch1 && g4.touch1[2] === t3.identifier) delete g4.touch1;
      }
      if (g4.touch1 && !g4.touch0) ((g4.touch0 = g4.touch1), delete g4.touch1);
      if (g4.touch0) g4.touch0[1] = this.__zoom.invert(g4.touch0[0]);
      else {
        g4.end();
        if (g4.taps === 2) {
          t3 = pointer_default(t3, this);
          if (Math.hypot(touchfirst[0] - t3[0], touchfirst[1] - t3[1]) < tapDistance) {
            var p3 = select_default2(this).on("dblclick.zoom");
            if (p3) p3.apply(this, arguments);
          }
        }
      }
    }
    zoom.wheelDelta = function (_3) {
      return arguments.length
        ? ((wheelDelta2 = typeof _3 === "function" ? _3 : constant_default4(+_3)), zoom)
        : wheelDelta2;
    };
    zoom.filter = function (_3) {
      return arguments.length
        ? ((filter2 = typeof _3 === "function" ? _3 : constant_default4(!!_3)), zoom)
        : filter2;
    };
    zoom.touchable = function (_3) {
      return arguments.length
        ? ((touchable = typeof _3 === "function" ? _3 : constant_default4(!!_3)), zoom)
        : touchable;
    };
    zoom.extent = function (_3) {
      return arguments.length
        ? ((extent =
            typeof _3 === "function"
              ? _3
              : constant_default4([
                  [+_3[0][0], +_3[0][1]],
                  [+_3[1][0], +_3[1][1]],
                ])),
          zoom)
        : extent;
    };
    zoom.scaleExtent = function (_3) {
      return arguments.length
        ? ((scaleExtent[0] = +_3[0]), (scaleExtent[1] = +_3[1]), zoom)
        : [scaleExtent[0], scaleExtent[1]];
    };
    zoom.translateExtent = function (_3) {
      return arguments.length
        ? ((translateExtent[0][0] = +_3[0][0]),
          (translateExtent[1][0] = +_3[1][0]),
          (translateExtent[0][1] = +_3[0][1]),
          (translateExtent[1][1] = +_3[1][1]),
          zoom)
        : [
            [translateExtent[0][0], translateExtent[0][1]],
            [translateExtent[1][0], translateExtent[1][1]],
          ];
    };
    zoom.constrain = function (_3) {
      return arguments.length ? ((constrain = _3), zoom) : constrain;
    };
    zoom.duration = function (_3) {
      return arguments.length ? ((duration = +_3), zoom) : duration;
    };
    zoom.interpolate = function (_3) {
      return arguments.length ? ((interpolate = _3), zoom) : interpolate;
    };
    zoom.on = function () {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function (_3) {
      return arguments.length
        ? ((clickDistance2 = (_3 = +_3) * _3), zoom)
        : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function (_3) {
      return arguments.length ? ((tapDistance = +_3), zoom) : tapDistance;
    };
    return zoom;
  }

