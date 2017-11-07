(function(h, g, c, j, e, k, l) { /*! Jssor */
    new(function() {});
    var f = {
            Bd: function(a) {
                return -c.cos(a * c.PI) / 2 + .5
            },
            Cd: function(a) {
                return a
            },
            ce: function(a) {
                return -a * (a - 2)
            },
            de: function(a) {
                return a * a * a
            },
            ee: function(a) {
                return (a -= 1) * a * a + 1
            }
        },
        d = {
            m: f.Cd,
            l: f.de,
            od: f.ee
        };
    var b = new function() {
        var d = this,
            Ab = /\S+/g,
            F = 1,
            yb = 2,
            fb = 3,
            eb = 4,
            jb = 5,
            G, r = 0,
            i = 0,
            s = 0,
            X = 0,
            z = 0,
            I = navigator,
            ob = I.appName,
            o = I.userAgent,
            p = parseFloat;

        function Ib() {
            if (!G) {
                G = {
                    De: "ontouchstart" in h || "createTouch" in g
                };
                var a;
                if (I.pointerEnabled || (a = I.msPointerEnabled)) G.td = a ? "msTouchAction" : "touchAction"
            }
            return G
        }

        function v(j) {
            if (!r) {
                r = -1;
                if (ob == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    r = F;
                    s = p(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on X=@_jscript_version@*/ ;
                    i = g.documentMode || s
                } else if (ob == "Netscape" && !!h.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        f = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        r = yb;
                        i = p(o.substring(d + 8))
                    } else if (b >= 0) {
                        var k = o.substring(0, b).lastIndexOf("/");
                        r = f >= 0 ? eb : fb;
                        i = p(o.substring(k + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            r = F;
                            i = s = p(a[1])
                        }
                    }
                    if (c >= 0) z = p(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        r = jb;
                        i = p(a[2])
                    }
                }
            }
            return j == r
        }

        function q() {
            return v(F)
        }

        function Q() {
            return q() && (i < 6 || g.compatMode == "BackCompat")
        }

        function db() {
            return v(fb)
        }

        function ib() {
            return v(jb)
        }

        function vb() {
            return db() && z > 534 && z < 535
        }

        function J() {
            v();
            return z > 537 || i > 42 || r == F && i >= 11
        }

        function O() {
            return q() && i < 9
        }

        function wb(a) {
            var b, c;
            return function(f) {
                if (!b) {
                    b = e;
                    var d = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, e) {
                        var b = a;
                        if (e) b = g + d;
                        if (f.style[b] != l) return c = b
                    })
                }
                return c
            }
        }

        function ub(b) {
            var a;
            return function(c) {
                a = a || wb(b)(c) || b;
                return a
            }
        }
        var K = ub("transform");

        function nb(a) {
            return {}.toString.call(a)
        }
        var kb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
            kb["[object " + a + "]"] = a.toLowerCase()
        });

        function n(b, d) {
            var a, c;
            if (nb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function C(a) {
            return a == j ? String(a) : kb[nb(a)] || "object"
        }

        function lb(a) {
            for (var b in a) return e
        }

        function A(a) {
            try {
                return C(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function u(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function rb(b, a) {
            setTimeout(b, a || 0)
        }

        function H(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function tb(b, a) {
            if (i < 9) b.style.filter = a
        }
        d.Ge = Ib;
        d.hd = q;
        d.Le = db;
        d.ld = ib;
        d.Oe = J;
        d.ob = O;
        wb("transform");
        d.Hd = function() {
            return i
        };
        d.Ye = function() {
            v();
            return z
        };
        d.V = rb;

        function Y(a) {
            a.constructor === Y.caller && a.zd && a.zd.apply(a, Y.caller.arguments)
        }
        d.zd = Y;
        d.Db = function(a) {
            if (d.Ze(a)) a = g.getElementById(a);
            return a
        };

        function t(a) {
            return a || h.event
        }
        d.yd = t;
        d.cc = function(b) {
            b = t(b);
            var a = b.target || b.srcElement || g;
            if (a.nodeType == 3) a = d.xd(a);
            return a
        };
        d.ed = function(a) {
            a = t(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };

        function D(c, d, a) {
            if (a !== l) c.style[d] = a == l ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && h.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function ab(b, c, a, d) {
            if (a !== l) {
                if (a == j) a = "";
                else d && (a += "px");
                D(b, c, a)
            } else return p(D(b, c))
        }

        function m(c, a) {
            var d = a ? ab : D,
                b;
            if (a & 4) b = ub(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Db(b) {
            if (q() && s < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? p(a[1]) / 100 : 1
            } else return p(b.style.opacity || "1")
        }

        function Fb(b, a, f) {
            if (q() && s < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = H(h, [i], d);
                tb(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var L = {
            R: ["rotate"],
            fb: ["rotateX"],
            ab: ["rotateY"],
            Xb: ["skewX"],
            ac: ["skewY"]
        };
        if (!J()) L = B(L, {
            C: ["scaleX", 2],
            E: ["scaleY", 2],
            cb: ["translateZ", 1]
        });

        function M(d, a) {
            var c = "";
            if (a) {
                if (q() && i && i < 10) {
                    delete a.fb;
                    delete a.ab;
                    delete a.cb
                }
                b.j(a, function(d, b) {
                    var a = L[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (N[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (J()) {
                    if (a.rb || a.pb || a.cb) c += " translate3d(" + (a.rb || 0) + "px," + (a.pb || 0) + "px," + (a.cb || 0) + "px)";
                    if (a.C == l) a.C = 1;
                    if (a.E == l) a.E = 1;
                    if (a.C != 1 || a.E != 1) c += " scale3d(" + a.C + ", " + a.E + ", 1)"
                }
            }
            d.style[K(d)] = c
        }
        d.Ic = m("transformOrigin", 4);
        d.We = m("backfaceVisibility", 4);
        d.Ve = m("transformStyle", 4);
        d.Ue = m("perspective", 6);
        d.df = m("perspectiveOrigin", 4);
        d.Se = function(a, b) {
            if (q() && s < 9 || s < 10 && Q()) a.style.zoom = b == 1 ? "" : b;
            else {
                var c = K(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = H(e, [g], f);
                a.style[c] = d
            }
        };
        d.ec = function(b, a) {
            return function(c) {
                c = t(c);
                var f = c.type,
                    e = c.relatedTarget || (f == "mouseout" ? c.toElement : c.fromElement);
                (!e || e !== a && !d.Qe(a, e)) && b(c)
            }
        };
        d.g = function(a, e, b, c) {
            a = d.Db(a);
            if (a.addEventListener) {
                e == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(e, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + e, b);
                c && a.setCapture && a.setCapture()
            }
        };
        d.W = function(a, c, e, b) {
            a = d.Db(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", e, b);
                a.removeEventListener(c, e, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, e);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        d.Sb = function(a) {
            a = t(a);
            a.preventDefault && a.preventDefault();
            a.cancel = e;
            a.returnValue = k
        };
        d.Ne = function(a) {
            a = t(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = e
        };
        d.X = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        d.Qb = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function mb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (U(a, b) == c) return a;
                    if (!e) {
                        var d = mb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        d.H = mb;

        function S(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    U(a, b) == d && c.push(a);
                    if (!f) {
                        var e = S(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function gb(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = gb(a, c, d);
                        if (b) return b
                    }
                }
        }
        d.Ae = gb;

        function xb(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = xb(a, c, e);
                        if (d.length) b = b.concat(d)
                    }
                }
            return b
        }
        d.ze = xb;
        d.Me = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function B() {
            var e = arguments,
                d, c, b, a, g = 1 & e[0],
                f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== l) {
                            a = c[b];
                            var h = d[b];
                            d[b] = g && (A(h) || A(a)) ? B(g, {}, h, a) : a
                        }
                    }
                return d
        }
        d.J = B;

        function Z(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (A(a) && A(b)) {
                        a = Z(a, b);
                        e = !lb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        d.Rc = function(a) {
            return C(a) == "function"
        };
        d.Ze = function(a) {
            return C(a) == "string"
        };
        d.Nc = function(a) {
            return !isNaN(p(a)) && isFinite(a)
        };
        d.j = n;
        d.qf = A;

        function R(a) {
            return g.createElement(a)
        }
        d.nb = function() {
            return R("DIV")
        };
        d.cd = function() {};

        function V(b, c, a) {
            if (a == l) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function U(a, b) {
            return V(a, b) || V(a, "data-" + b)
        }
        d.O = V;
        d.p = U;

        function x(b, a) {
            if (a == l) return b.className;
            b.className = a
        }
        d.Oc = x;

        function qb(b) {
            var a = {};
            n(b, function(b) {
                a[b] = b
            });
            return a
        }

        function sb(b, a) {
            return b.match(a || Ab)
        }

        function P(b, a) {
            return qb(sb(b || "", a))
        }
        d.ff = sb;

        function bb(b, c) {
            var a = "";
            n(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function E(a, c, b) {
            x(a, bb(" ", B(Z(P(x(a)), P(c)), P(b))))
        }
        d.xd = function(a) {
            return a.parentNode
        };
        d.T = function(a) {
            d.Y(a, "none")
        };
        d.D = function(a, b) {
            d.Y(a, b ? "none" : "")
        };
        d.uf = function(b, a) {
            b.removeAttribute(a)
        };
        d.wf = function() {
            return q() && i < 10
        };
        d.xf = function(d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.e || a.I || 0) + "px " + c.round(a.u) + "px " + c.round(a.z) + "px " + c.round(a.f || a.F || 0) + "px)";
            else if (a !== l) {
                var g = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = H(g, f, "");
                b.Vb(d, e)
            }
        };
        d.lb = function() {
            return +new Date
        };
        d.Q = function(b, a) {
            b.appendChild(a)
        };
        d.Wb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        d.Ub = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        d.Sd = function(a, b) {
            n(a, function(a) {
                d.Ub(a, b)
            })
        };
        d.ad = function(a) {
            d.Sd(d.Qb(a, e), a)
        };
        d.Wd = function(a, b) {
            var c = d.xd(a);
            b & 1 && d.L(a, (d.q(c) - d.q(a)) / 2);
            b & 2 && d.P(a, (d.s(c) - d.s(a)) / 2)
        };
        d.xe = function(b, a) {
            return parseInt(b, a || 10)
        };
        d.Qd = p;
        d.Qe = function(b, a) {
            var c = g.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return k
            }
            return b === a
        };

        function W(e, c, b) {
            var a = e.cloneNode(!c);
            !b && d.uf(a, "id");
            return a
        }
        d.gb = W;
        d.Eb = function(f, g) {
            var a = new Image;

            function b(f, e) {
                d.W(a, "load", b);
                d.W(a, "abort", c);
                d.W(a, "error", c);
                g && g(a, e)
            }

            function c(a) {
                b(a, e)
            }
            if (ib() && i < 11.6 || !f) b(!f);
            else {
                d.g(a, "load", b);
                d.g(a, "abort", c);
                d.g(a, "error", c);
                a.src = f
            }
        };
        d.Md = function(e, a, f) {
            var c = e.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && f && f(a)
            }
            n(e, function(a) {
                d.Eb(a.src, b)
            });
            b()
        };
        d.Kd = function(a, g, i, h) {
            if (h) a = W(a);
            var c = S(a, g);
            if (!c.length) c = b.Me(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = W(i);
                x(e, x(d));
                b.Vb(e, d.style.cssText);
                b.Wb(e, d);
                b.Ub(d)
            }
            return a
        };

        function Gb(a) {
            var k = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                f = [],
                q, j = 0,
                h = 0,
                e = 0;

            function i() {
                E(a, q, f[e || j || h & 2 || h]);
                b.mb(a, "pointer-events", e ? "none" : "")
            }

            function c() {
                j = 0;
                i();
                d.W(g, "mouseup", c);
                d.W(g, "touchend", c);
                d.W(g, "touchcancel", c)
            }

            function o(a) {
                if (e) d.Sb(a);
                else {
                    j = 4;
                    i();
                    d.g(g, "mouseup", c);
                    d.g(g, "touchend", c);
                    d.g(g, "touchcancel", c)
                }
            }
            k.Rd = function(a) {
                if (a === l) return h;
                h = a & 2 || a & 1;
                i()
            };
            k.Fc = function(a) {
                if (a === l) return !e;
                e = a ? 0 : 3;
                i()
            };
            k.qb = a = d.Db(a);
            var m = b.ff(x(a));
            if (m) p = m.shift();
            n(r, function(a) {
                f.push(p + a)
            });
            q = bb(" ", f);
            f.unshift("");
            d.g(a, "mousedown", o);
            d.g(a, "touchstart", o)
        }
        d.zc = function(a) {
            return new Gb(a)
        };
        d.mb = D;
        d.tb = m("overflow");
        d.P = m("top", 2);
        d.L = m("left", 2);
        d.q = m("width", 2);
        d.s = m("height", 2);
        d.Yd = m("marginLeft", 2);
        d.ue = m("marginTop", 2);
        d.G = m("position");
        d.Y = m("display");
        d.M = m("zIndex", 1);
        d.Jb = function(b, a, c) {
            if (a != l) Fb(b, a, c);
            else return Db(b)
        };
        d.Vb = function(a, b) {
            if (b != l) a.style.cssText = b;
            else return a.style.cssText
        };
        var T = {
            a: d.Jb,
            e: d.P,
            f: d.L,
            Z: d.q,
            eb: d.s,
            Gb: d.G,
            Jf: d.Y,
            S: d.M
        };

        function w(g, k) {
            var f = O(),
                b = J(),
                e = vb(),
                h = K(g);

            function i(b, d, a) {
                var e = b.ub(u(-d / 2, -a / 2)),
                    f = b.ub(u(d / 2, -a / 2)),
                    g = b.ub(u(d / 2, a / 2)),
                    h = b.ub(u(-d / 2, a / 2));
                b.ub(u(300, 300));
                return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(e, a) {
                a = a || {};
                var n = a.cb || 0,
                    p = (a.fb || 0) % 360,
                    q = (a.ab || 0) % 360,
                    u = (a.R || 0) % 360,
                    k = a.C,
                    m = a.E,
                    g = a.If;
                if (k == l) k = 1;
                if (m == l) m = 1;
                if (g == l) g = 1;
                if (f) {
                    n = 0;
                    p = 0;
                    q = 0;
                    g = 0
                }
                var c = new Cb(a.rb, a.pb, n);
                c.fb(p);
                c.ab(q);
                c.se(u);
                c.re(a.Xb, a.ac);
                c.Ac(k, m, g);
                if (b) {
                    c.vb(a.F, a.I);
                    e.style[h] = c.qe()
                } else if (!X || X < 9) {
                    var o = "",
                        j = {
                            x: 0,
                            y: 0
                        };
                    if (a.bb) j = i(c, a.bb, a.wb);
                    d.ue(e, j.y);
                    d.Yd(e, j.x);
                    o = c.pe();
                    var s = e.style.filter,
                        t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        r = H(s, [t], o);
                    tb(e, r)
                }
            }
            w = function(f, c) {
                c = c || {};
                var h = c.F,
                    i = c.I,
                    g;
                n(T, function(a, b) {
                    g = c[b];
                    g !== l && a(f, g)
                });
                d.xf(f, c.c);
                if (!b) {
                    h != l && d.L(f, (c.Jc || 0) + h);
                    i != l && d.P(f, (c.Hc || 0) + i)
                }
                if (c.oe)
                    if (e) rb(d.X(j, M, f, c));
                    else a(f, c)
            };
            d.Hb = M;
            if (e) d.Hb = w;
            if (f) d.Hb = a;
            else if (!b) a = M;
            d.N = w;
            w(g, k)
        }
        d.Hb = w;
        d.N = w;

        function Cb(i, k, o) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, k || 0, o || 0, 1],
                h = c.sin,
                g = c.cos,
                l = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function n(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
            }

            function e(c, a) {
                return m.apply(j, (a || b).concat(c))
            }
            d.Ac = function(a, c, d) {
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.vb = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.fb = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
                }
            };
            d.ab = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.se = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.re = function(a, c) {
                if (a || c) {
                    i = f(a);
                    k = f(c);
                    b = e([1, l(k), 0, 0, l(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.ub = function(c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return n(a[12], a[13])
            };
            d.qe = function() {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.pe = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.C = function(b, c) {
                return a.Kc(b, c, 0)
            };
            a.E = function(b, c) {
                return a.Kc(b, 0, c)
            };
            a.Kc = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.ub = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return u(a[0][0], a[1][0])
            }
        };
        var N = {
            Jc: 0,
            Hc: 0,
            F: 0,
            I: 0,
            K: 1,
            C: 1,
            E: 1,
            R: 0,
            fb: 0,
            ab: 0,
            rb: 0,
            pb: 0,
            cb: 0,
            Xb: 0,
            ac: 0
        };
        d.Gc = function(a) {
            var c = a || {};
            if (a)
                if (b.Rc(a)) c = {
                    Cc: c
                };
                else if (b.Rc(a.c)) c.c = {
                Cc: a.c
            };
            return c
        };
        d.Tc = function(k, m, x, q, z, A, n) {
            var a = m;
            if (k) {
                a = {};
                for (var g in m) {
                    var B = A[g] || 1,
                        w = z[g] || [0, 1],
                        d = (x - w[0]) / w[1];
                    d = c.min(c.max(d, 0), 1);
                    d = d * B;
                    var u = c.floor(d);
                    if (d != u) d -= u;
                    var h = q.Cc || f.Bd,
                        i, C = k[g],
                        o = m[g];
                    if (b.Nc(o)) {
                        h = q[g] || h;
                        var y = h(d);
                        i = C + o * y
                    } else {
                        i = b.J({
                            Kb: {}
                        }, k[g]);
                        var v = q[g] || {};
                        b.j(o.Kb || o, function(e, a) {
                            h = v[a] || v.Cc || h;
                            var c = h(d),
                                b = e * c;
                            i.Kb[a] = b;
                            i[a] += b
                        })
                    }
                    a[g] = i
                }
                var t = b.j(m, function(b, a) {
                    return N[a] != l
                });
                t && b.j(N, function(c, b) {
                    if (a[b] == l && k[b] !== l) a[b] = k[b]
                });
                if (t) {
                    if (a.K) a.C = a.E = a.K;
                    a.bb = n.bb;
                    a.wb = n.wb;
                    a.oe = e
                }
            }
            if (m.c && n.vb) {
                var p = a.c.Kb,
                    s = (p.e || 0) + (p.z || 0),
                    r = (p.f || 0) + (p.u || 0);
                a.f = (a.f || 0) + r;
                a.e = (a.e || 0) + s;
                a.c.f -= r;
                a.c.u -= r;
                a.c.e -= s;
                a.c.z -= s
            }
            if (a.c && b.wf() && !a.c.e && !a.c.f && !a.c.I && !a.c.F && a.c.u == n.bb && a.c.z == n.wb) a.c = j;
            return a
        }
    };

    function n() {
        var a = this,
            d = [];

        function i(a, b) {
            d.push({
                pc: a,
                qc: b
            })
        }

        function g(a, c) {
            b.j(d, function(b, e) {
                b.pc == a && b.qc === c && d.splice(e, 1)
            })
        }
        a.Ab = a.addEventListener = i;
        a.removeEventListener = g;
        a.o = function(a) {
            var c = [].slice.call(arguments, 1);
            b.j(d, function(b) {
                b.pc == a && b.qc.apply(h, c)
            })
        }
    }
    var m = function(z, C, i, J, M, L) {
        z = z || 0;
        var a = this,
            q, n, o, u, A = 0,
            G, H, F, B, y = 0,
            g = 0,
            m = 0,
            D, l, f, d, p, w = [],
            x;

        function O(a) {
            f += a;
            d += a;
            l += a;
            g += a;
            m += a;
            y += a
        }

        function t(o) {
            var h = o;
            if (p && (h >= d || h <= f)) h = ((h - f) % p + p) % p + f;
            if (!D || u || g != h) {
                var j = c.min(h, d);
                j = c.max(j, f);
                if (!D || u || j != m) {
                    if (L) {
                        var k = (j - l) / (C || 1);
                        if (i.bd) k = 1 - k;
                        var n = b.Tc(M, L, k, G, F, H, i);
                        if (x) b.j(n, function(b, a) {
                            x[a] && x[a](J, b)
                        });
                        else b.N(J, n)
                    }
                    a.xc(m - l, j - l);
                    m = j;
                    b.j(w, function(b, c) {
                        var a = o < g ? w[w.length - c - 1] : b;
                        a.kb(m - y)
                    });
                    var r = g,
                        q = m;
                    g = h;
                    D = e;
                    a.Nb(r, q)
                }
            }
        }

        function E(a, b, e) {
            b && a.Mb(d);
            if (!e) {
                f = c.min(f, a.Qc() + y);
                d = c.max(d, a.hc() + y)
            }
            w.push(a)
        }
        var r = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
        if (b.Le() && b.Hd() < 7) r = j;
        r = r || function(a) {
            b.V(a, i.hb)
        };

        function I() {
            if (q) {
                var d = b.lb(),
                    e = c.min(d - A, i.Pc),
                    a = g + e * o;
                A = d;
                if (a * o >= n * o) a = n;
                t(a);
                if (!u && a * o >= n * o) K(B);
                else r(I)
            }
        }

        function s(h, i, j) {
            if (!q) {
                q = e;
                u = j;
                B = i;
                h = c.max(h, f);
                h = c.min(h, d);
                n = h;
                o = n < g ? -1 : 1;
                a.Uc();
                A = b.lb();
                r(I)
            }
        }

        function K(b) {
            if (q) {
                u = q = B = k;
                a.Vc();
                b && b()
            }
        }
        a.Yc = function(a, b, c) {
            s(a ? g + a : d, b, c)
        };
        a.Mc = s;
        a.xb = K;
        a.ae = function(a) {
            s(a)
        };
        a.db = function() {
            return g
        };
        a.Dc = function() {
            return n
        };
        a.Fb = function() {
            return m
        };
        a.kb = t;
        a.vb = function(a) {
            t(g + a)
        };
        a.Ec = function() {
            return q
        };
        a.Te = function(a) {
            p = a
        };
        a.Mb = O;
        a.dd = function(a, b) {
            E(a, 0, b)
        };
        a.gc = function(a) {
            E(a, 1)
        };
        a.Qc = function() {
            return f
        };
        a.hc = function() {
            return d
        };
        a.Nb = a.Uc = a.Vc = a.xc = b.cd;
        a.kc = b.lb();
        i = b.J({
            hb: 16,
            Pc: 50
        }, i);
        p = i.Lc;
        x = i.be;
        f = l = z;
        d = z + C;
        H = i.Wc || {};
        F = i.A || {};
        G = b.Gc(i.i)
    };
    var p = new function() {
            var h = this;

            function g(b, a, c) {
                c.push(a);
                b[a] = b[a] || [];
                b[a].push(c)
            }
            h.Jd = function(d) {
                for (var e = [], a, b = 0; b < d.v; b++)
                    for (a = 0; a < d.n; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
                return e
            }
        },
        s = function(l, s, q, u, z) {
            var d = this,
                v, g, a, y = 0,
                x = u.pf,
                r, h = 8;

            function t(a) {
                if (a.e) a.I = a.e;
                if (a.f) a.F = a.f;
                b.j(a, function(a) {
                    b.qf(a) && t(a)
                })
            }

            function i(g, d) {
                var a = {
                    hb: d,
                    k: 1,
                    V: 0,
                    n: 1,
                    v: 1,
                    a: 0,
                    K: 0,
                    c: 0,
                    vb: k,
                    r: k,
                    bd: k,
                    vf: p.Jd,
                    B: {
                        jb: 0,
                        ib: 0
                    },
                    i: f.Bd,
                    Wc: {},
                    Lb: [],
                    A: {}
                };
                b.J(a, g);
                t(a);
                a.i = b.Gc(a.i);
                a.rf = c.ceil(a.k / a.hb);
                a.sf = function(c, b) {
                    c /= a.n;
                    b /= a.v;
                    var f = c + "x" + b;
                    if (!a.Lb[f]) {
                        a.Lb[f] = {
                            Z: c,
                            eb: b
                        };
                        for (var d = 0; d < a.n; d++)
                            for (var e = 0; e < a.v; e++) a.Lb[f][e + "," + d] = {
                                e: e * b,
                                u: d * c + c,
                                z: e * b + b,
                                f: d * c
                            }
                    }
                    return a.Lb[f]
                };
                if (a.ic) {
                    a.ic = i(a.ic, d);
                    a.r = e
                }
                return a
            }

            function o(B, h, a, w, o, m) {
                var z = this,
                    u, v = {},
                    i = {},
                    n = [],
                    f, d, s, q = a.B.jb || 0,
                    r = a.B.ib || 0,
                    g = a.sf(o, m),
                    p = C(a),
                    D = p.length - 1,
                    t = a.k + a.V * D,
                    x = w + t,
                    l = a.r,
                    y;
                x += 50;

                function C(a) {
                    var b = a.vf(a);
                    return a.bd ? b.reverse() : b
                }
                z.Sc = x;
                z.Ob = function(d) {
                    d -= w;
                    var e = d < t;
                    if (e || y) {
                        y = e;
                        if (!l) d = t - d;
                        var f = c.ceil(d / a.hb);
                        b.j(i, function(a, e) {
                            var d = c.max(f, a.Ee);
                            d = c.min(d, a.length - 1);
                            if (a.Xc != d) {
                                if (!a.Xc && !l) b.D(n[e]);
                                else d == a.Fe && l && b.T(n[e]);
                                a.Xc = d;
                                b.N(n[e], a[d])
                            }
                        })
                    }
                };
                h = b.gb(h);
                b.Hb(h, j);
                if (b.ob()) {
                    var E = !h["no-image"],
                        A = b.ze(h);
                    b.j(A, function(a) {
                        (E || a["jssor-slider"]) && b.Jb(a, b.Jb(a), e)
                    })
                }
                b.j(p, function(h, j) {
                    b.j(h, function(G) {
                        var K = G[0],
                            J = G[1],
                            t = K + "," + J,
                            n = k,
                            p = k,
                            x = k;
                        if (q && J % 2) {
                            if (q & 3) n = !n;
                            if (q & 12) p = !p;
                            if (q & 16) x = !x
                        }
                        if (r && K % 2) {
                            if (r & 3) n = !n;
                            if (r & 12) p = !p;
                            if (r & 16) x = !x
                        }
                        a.e = a.e || a.c & 4;
                        a.z = a.z || a.c & 8;
                        a.f = a.f || a.c & 1;
                        a.u = a.u || a.c & 2;
                        var E = p ? a.z : a.e,
                            B = p ? a.e : a.z,
                            D = n ? a.u : a.f,
                            C = n ? a.f : a.u;
                        a.c = E || B || D || C;
                        s = {};
                        d = {
                            I: 0,
                            F: 0,
                            a: 1,
                            Z: o,
                            eb: m
                        };
                        f = b.J({}, d);
                        u = b.J({}, g[t]);
                        if (a.a) d.a = 2 - a.a;
                        if (a.S) {
                            d.S = a.S;
                            f.S = 0
                        }
                        var I = a.n * a.v > 1 || a.c;
                        if (a.K || a.R) {
                            var H = e;
                            if (b.ob())
                                if (a.n * a.v > 1) H = k;
                                else I = k;
                            if (H) {
                                d.K = a.K ? a.K - 1 : 1;
                                f.K = 1;
                                if (b.ob() || b.ld()) d.K = c.min(d.K, 2);
                                var N = a.R || 0;
                                d.R = N * 360 * (x ? -1 : 1);
                                f.R = 0
                            }
                        }
                        if (I) {
                            var h = u.Kb = {};
                            if (a.c) {
                                var w = a.Hf || 1;
                                if (E && B) {
                                    h.e = g.eb / 2 * w;
                                    h.z = -h.e
                                } else if (E) h.z = -g.eb * w;
                                else if (B) h.e = g.eb * w;
                                if (D && C) {
                                    h.f = g.Z / 2 * w;
                                    h.u = -h.f
                                } else if (D) h.u = -g.Z * w;
                                else if (C) h.f = g.Z * w
                            }
                            s.c = u;
                            f.c = g[t]
                        }
                        var L = n ? 1 : -1,
                            M = p ? 1 : -1;
                        if (a.x) d.F += o * a.x * L;
                        if (a.y) d.I += m * a.y * M;
                        b.j(d, function(a, c) {
                            if (b.Nc(a))
                                if (a != f[c]) s[c] = a - f[c]
                        });
                        v[t] = l ? f : d;
                        var F = a.rf,
                            A = c.round(j * a.V / a.hb);
                        i[t] = new Array(A);
                        i[t].Ee = A;
                        i[t].Fe = A + F - 1;
                        for (var z = 0; z <= F; z++) {
                            var y = b.Tc(f, s, z / F, a.i, a.A, a.Wc, {
                                vb: a.vb,
                                bb: o,
                                wb: m
                            });
                            y.S = y.S || 1;
                            i[t].push(y)
                        }
                    })
                });
                p.reverse();
                b.j(p, function(a) {
                    b.j(a, function(c) {
                        var f = c[0],
                            e = c[1],
                            d = f + "," + e,
                            a = h;
                        if (e || f) a = b.gb(h);
                        b.N(a, v[d]);
                        b.tb(a, "hidden");
                        b.G(a, "absolute");
                        B.He(a);
                        n[d] = a;
                        b.D(a, !l)
                    })
                })
            }

            function w() {
                var b = this,
                    c = 0;
                m.call(b, 0, v);
                b.Nb = function(d, b) {
                    if (b - c > h) {
                        c = b;
                        a && a.Ob(b);
                        g && g.Ob(b)
                    }
                };
                b.Zc = r
            }
            d.Ie = function() {
                var a = 0,
                    b = u.zb,
                    d = b.length;
                if (x) a = y++ % d;
                else a = c.floor(c.random() * d);
                b[a] && (b[a].sb = a);
                return b[a]
            };
            d.Re = function(w, x, k, m, b) {
                r = b;
                b = i(b, h);
                var j = m.nd,
                    f = k.nd;
                j["no-image"] = !m.Tb;
                f["no-image"] = !k.Tb;
                var n = j,
                    p = f,
                    u = b,
                    e = b.ic || i({}, h);
                if (!b.r) {
                    n = f;
                    p = j
                }
                var t = e.Mb || 0;
                g = new o(l, p, e, c.max(t - e.hb, 0), s, q);
                a = new o(l, n, u, c.max(e.hb - t, 0), s, q);
                g.Ob(0);
                a.Ob(0);
                v = c.max(g.Sc, a.Sc);
                d.sb = w
            };
            d.Ib = function() {
                l.Ib();
                g = j;
                a = j
            };
            d.af = function() {
                var b = j;
                if (a) b = new w;
                return b
            };
            if (b.ob() || b.ld() || z && b.Ye() < 537) h = 16;
            n.call(d);
            m.call(d, -1e7, 1e7)
        },
        i = function(p, fc) {
            var d = this;

            function Bc() {
                var a = this;
                m.call(a, -1e8, 2e8);
                a.Xe = function() {
                    var b = a.Fb(),
                        d = c.floor(b),
                        f = t(d),
                        e = b - c.floor(b);
                    return {
                        sb: f,
                        Pe: d,
                        Gb: e
                    }
                };
                a.Nb = function(b, a) {
                    var f = c.floor(a);
                    if (f != a && a > b) f++;
                    Tb(f, e);
                    d.o(i.bf, t(a), t(b), a, b)
                }
            }

            function Ac() {
                var a = this;
                m.call(a, 0, 0, {
                    Lc: q
                });
                b.j(C, function(b) {
                    D & 1 && b.Te(q);
                    a.gc(b);
                    b.Mb(kb / bc)
                })
            }

            function zc() {
                var a = this,
                    b = Ub.qb;
                m.call(a, -1, 2, {
                    i: f.Cd,
                    be: {
                        Gb: Zb
                    },
                    Lc: q
                }, b, {
                    Gb: 1
                }, {
                    Gb: -2
                });
                a.Rb = b
            }

            function mc(o, n) {
                var b = this,
                    f, g, h, l, c;
                m.call(b, -1e8, 2e8, {
                    Pc: 100
                });
                b.Uc = function() {
                    M = e;
                    R = j;
                    d.o(i.Ke, t(w.db()), w.db())
                };
                b.Vc = function() {
                    M = k;
                    l = k;
                    var a = w.Xe();
                    d.o(i.Je, t(w.db()), w.db());
                    !a.Gb && Dc(a.Pe, s)
                };
                b.Nb = function(i, e) {
                    var b;
                    if (l) b = c;
                    else {
                        b = g;
                        if (h) {
                            var d = e / h;
                            b = a.ye(d) * (g - f) + f
                        }
                    }
                    w.kb(b)
                };
                b.Pb = function(a, d, c, e) {
                    f = a;
                    g = d;
                    h = c;
                    w.kb(a);
                    b.kb(0);
                    b.Mc(c, e)
                };
                b.Be = function(a) {
                    l = e;
                    c = a;
                    b.Yc(a, j, e)
                };
                b.cf = function(a) {
                    c = a
                };
                w = new Bc;
                w.dd(o);
                w.dd(n)
            }

            function oc() {
                var c = this,
                    a = Xb();
                b.M(a, 0);
                b.mb(a, "pointerEvents", "none");
                c.qb = a;
                c.He = function(c) {
                    b.Q(a, c);
                    b.D(a)
                };
                c.Ib = function() {
                    b.T(a);
                    b.ad(a)
                }
            }

            function xc(o, g) {
                var f = this,
                    r, L, v, l, y = [],
                    x, B, W, G, Q, F, h, w, p;
                m.call(f, -u, u + 1, {});

                function E(a) {
                    r && r.sd();
                    T(o, a, 0);
                    F = e;
                    r = new I.U(o, I, b.Qd(b.p(o, "idle")) || lc);
                    r.kb(0)
                }

                function Z() {
                    r.kc < I.kc && E()
                }

                function M(p, r, o) {
                    if (!G) {
                        G = e;
                        if (l && o) {
                            var h = o.width,
                                c = o.height,
                                n = h,
                                m = c;
                            if (h && c && a.yb) {
                                if (a.yb & 3 && (!(a.yb & 4) || h > K || c > J)) {
                                    var j = k,
                                        q = K / J * c / h;
                                    if (a.yb & 1) j = q > 1;
                                    else if (a.yb & 2) j = q < 1;
                                    n = j ? h * J / c : K;
                                    m = j ? J : c * K / h
                                }
                                b.q(l, n);
                                b.s(l, m);
                                b.P(l, (J - m) / 2);
                                b.L(l, (K - n) / 2)
                            }
                            b.G(l, "absolute");
                            d.o(i.tf, g)
                        }
                    }
                    b.T(r);
                    p && p(f)
                }

                function Y(b, c, d, e) {
                    if (e == R && s == g && N)
                        if (!Cc) {
                            var a = t(b);
                            A.Re(a, g, c, f, d);
                            c.nf();
                            U.Mb(a - U.Qc() - 1);
                            U.kb(a);
                            z.Pb(b, b, 0)
                        }
                }

                function bb(b) {
                    if (b == R && s == g) {
                        if (!h) {
                            var a = j;
                            if (A)
                                if (A.sb == g) a = A.af();
                                else A.Ib();
                            Z();
                            h = new vc(o, g, a, r);
                            h.qd(p)
                        }!h.Ec() && h.oc()
                    }
                }

                function S(d, e, l) {
                    if (d == g) {
                        if (d != e) C[e] && C[e].kf();
                        else !l && h && h.jf();
                        p && p.Fc();
                        var m = R = b.lb();
                        f.Eb(b.X(j, bb, m))
                    } else {
                        var k = c.min(g, d),
                            i = c.max(g, d),
                            o = c.min(i - k, k + q - i),
                            n = u + a.hf - 1;
                        (!Q || o <= n) && f.Eb()
                    }
                }

                function db() {
                    if (s == g && h) {
                        h.xb();
                        p && p.gf();
                        p && p.ef();
                        h.md()
                    }
                }

                function eb() {
                    s == g && h && h.xb()
                }

                function ab(a) {
                    !P && d.o(i.lf, g, a)
                }

                function O() {
                    p = w.pInstance;
                    h && h.qd(p)
                }
                f.Eb = function(c, a) {
                    a = a || v;
                    if (y.length && !G) {
                        b.D(a);
                        if (!W) {
                            W = e;
                            d.o(i.mf, g);
                            b.j(y, function(a) {
                                if (!b.O(a, "src")) {
                                    a.src = b.p(a, "src2");
                                    b.Y(a, a["display-origin"])
                                }
                            })
                        }
                        b.Md(y, l, b.X(j, M, c, a))
                    } else M(c, a)
                };
                f.of = function() {
                    var h = g;
                    if (a.Fd < 0) h -= q;
                    var d = h + a.Fd * tc;
                    if (D & 2) d = t(d);
                    if (!(D & 1) && !ib) d = c.max(0, c.min(d, q - u));
                    if (d != g) {
                        if (A) {
                            var e = A.Ie(q);
                            if (e) {
                                var i = R = b.lb(),
                                    f = C[t(d)];
                                return f.Eb(b.X(j, Y, d, f, e, i), v)
                            }
                        }
                        cb(d)
                    }
                };
                f.rc = function() {
                    S(g, g, e)
                };
                f.kf = function() {
                    p && p.gf();
                    p && p.ef();
                    f.Dd();
                    h && h.yf();
                    h = j;
                    E()
                };
                f.nf = function() {
                    b.T(o)
                };
                f.Dd = function() {
                    b.D(o)
                };
                f.Ce = function() {
                    p && p.Fc()
                };

                function T(a, c, d) {
                    if (b.O(a, "jssor-slider")) return;
                    if (!F) {
                        if (a.tagName == "IMG") {
                            y.push(a);
                            if (!b.O(a, "src")) {
                                Q = e;
                                a["display-origin"] = b.Y(a);
                                b.T(a)
                            }
                        }
                        b.ob() && b.M(a, (b.M(a) || 0) + 1)
                    }
                    var f = b.Qb(a);
                    b.j(f, function(f) {
                        var h = f.tagName,
                            i = b.p(f, "u");
                        if (i == "player" && !w) {
                            w = f;
                            if (w.pInstance) O();
                            else b.g(w, "dataavailable", O)
                        }
                        if (i == "caption") {
                            if (c) {
                                b.Ic(f, b.p(f, "to"));
                                b.We(f, b.p(f, "bf"));
                                b.p(f, "3d") && b.Ve(f, "preserve-3d")
                            } else if (!b.hd()) {
                                var g = b.gb(f, k, e);
                                b.Wb(g, f, a);
                                b.Ub(f, a);
                                f = g;
                                c = e
                            }
                        } else if (!F && !d && !l) {
                            if (h == "A") {
                                if (b.p(f, "u") == "image") l = b.Ae(f, "IMG");
                                else l = b.H(f, "image", e);
                                if (l) {
                                    x = f;
                                    b.Y(x, "block");
                                    b.N(x, V);
                                    B = b.gb(x, e);
                                    b.G(x, "relative");
                                    b.Jb(B, 0);
                                    b.mb(B, "backgroundColor", "#000")
                                }
                            } else if (h == "IMG" && b.p(f, "u") == "image") l = f;
                            if (l) {
                                l.border = 0;
                                b.N(l, V)
                            }
                        }
                        T(f, c, d + 1)
                    })
                }
                f.xc = function(c, b) {
                    var a = u - b;
                    Zb(L, a)
                };
                f.sb = g;
                n.call(f);
                b.Ue(o, b.p(o, "p"));
                b.df(o, b.p(o, "po"));
                var H = b.H(o, "thumb", e);
                if (H) {
                    f.we = b.gb(H);
                    b.T(H)
                }
                b.D(o);
                v = b.gb(gb);
                b.M(v, 1e3);
                b.g(o, "click", ab);
                E(e);
                f.Tb = l;
                f.pd = B;
                f.nd = o;
                f.Rb = L = o;
                b.Q(L, v);
                d.Ab(203, S);
                d.Ab(28, eb);
                d.Ab(24, db)
            }

            function vc(y, g, p, q) {
                var a = this,
                    n = 0,
                    u = 0,
                    h, j, f, c, l, t, r, o = C[g];
                m.call(a, 0, 0);

                function v() {
                    b.ad(L);
                    cc && l && o.pd && b.Q(L, o.pd);
                    b.D(L, !l && o.Tb)
                }

                function w() {
                    a.oc()
                }

                function x(b) {
                    r = b;
                    a.xb();
                    a.oc()
                }
                a.oc = function() {
                    var b = a.Fb();
                    if (!B && !M && !r && s == g) {
                        if (!b) {
                            if (h && !l) {
                                l = e;
                                a.md(e);
                                d.o(i.Pd, g, n, u, h, c)
                            }
                            v()
                        }
                        var k, p = i.Ad;
                        if (b != c)
                            if (b == f) k = c;
                            else if (b == j) k = f;
                        else if (!b) k = j;
                        else k = a.Dc();
                        d.o(p, g, b, n, j, f, c);
                        var m = N && (!E || F);
                        if (b == c)(f != c && !(E & 12) || m) && o.of();
                        else(m || b != f) && a.Mc(k, w)
                    }
                };
                a.jf = function() {
                    f == c && f == a.Fb() && a.kb(j)
                };
                a.yf = function() {
                    A && A.sb == g && A.Ib();
                    var b = a.Fb();
                    b < c && d.o(i.Ad, g, -b - 1, n, j, f, c)
                };
                a.md = function(a) {
                    p && b.tb(lb, a && p.Zc.Ff ? "" : "hidden")
                };
                a.xc = function(b, a) {
                    if (l && a >= h) {
                        l = k;
                        v();
                        o.Dd();
                        A.Ib();
                        d.o(i.Ud, g, n, u, h, c)
                    }
                    d.o(i.Vd, g, a, n, j, f, c)
                };
                a.qd = function(a) {
                    if (a && !t) {
                        t = a;
                        a.Ab($JssorPlayer$.ve, x)
                    }
                };
                p && a.gc(p);
                h = a.hc();
                a.gc(q);
                j = h + q.Id;
                f = h + q.ud;
                c = a.hc()
            }

            function Kb(a, c, d) {
                b.L(a, c);
                b.P(a, d)
            }

            function Zb(c, b) {
                var a = x > 0 ? x : fb,
                    d = zb * b * (a & 1),
                    e = Ab * b * (a >> 1 & 1);
                Kb(c, d, e)
            }

            function Pb() {
                qb = M;
                Ib = z.Dc();
                G = w.db()
            }

            function gc() {
                Pb();
                if (B || !F && E & 12) {
                    z.xb();
                    d.o(i.Ld)
                }
            }

            function ec(f) {
                if (!B && (F || !(E & 12)) && !z.Ec()) {
                    var d = w.db(),
                        b = c.ceil(G);
                    if (f && c.abs(H) >= a.vd) {
                        b = c.ceil(d);
                        b += jb
                    }
                    if (!(D & 1)) b = c.min(q - u, c.max(b, 0));
                    var e = c.abs(b - d);
                    e = 1 - c.pow(1 - e, 5);
                    if (!P && qb) z.ae(Ib);
                    else if (d == b) {
                        tb.Ce();
                        tb.rc()
                    } else z.Pb(d, b, e * Vb)
                }
            }

            function Hb(a) {
                !b.p(b.cc(a), "nodrag") && b.Sb(a)
            }

            function rc(a) {
                Yb(a, 1)
            }

            function Yb(a, c) {
                a = b.yd(a);
                var l = b.cc(a);
                if (!O && !b.p(l, "nodrag") && sc() && (!c || a.touches.length == 1)) {
                    B = e;
                    yb = k;
                    R = j;
                    b.g(g, c ? "touchmove" : "mousemove", Bb);
                    b.lb();
                    P = 0;
                    gc();
                    if (!qb) x = 0;
                    if (c) {
                        var h = a.touches[0];
                        ub = h.clientX;
                        vb = h.clientY
                    } else {
                        var f = b.ed(a);
                        ub = f.x;
                        vb = f.y
                    }
                    H = 0;
                    hb = 0;
                    jb = 0;
                    d.o(i.Td, t(G), G, a)
                }
            }

            function Bb(d) {
                if (B) {
                    d = b.yd(d);
                    var f;
                    if (d.type != "mousemove") {
                        var l = d.touches[0];
                        f = {
                            x: l.clientX,
                            y: l.clientY
                        }
                    } else f = b.ed(d);
                    if (f) {
                        var j = f.x - ub,
                            k = f.y - vb;
                        if (c.floor(G) != G) x = x || fb & O;
                        if ((j || k) && !x) {
                            if (O == 3)
                                if (c.abs(k) > c.abs(j)) x = 2;
                                else x = 1;
                            else x = O;
                            if (ob && x == 1 && c.abs(k) - c.abs(j) > 3) yb = e
                        }
                        if (x) {
                            var a = k,
                                i = Ab;
                            if (x == 1) {
                                a = j;
                                i = zb
                            }
                            if (!(D & 1)) {
                                if (a > 0) {
                                    var g = i * s,
                                        h = a - g;
                                    if (h > 0) a = g + c.sqrt(h) * 5
                                }
                                if (a < 0) {
                                    var g = i * (q - u - s),
                                        h = -a - g;
                                    if (h > 0) a = -g - c.sqrt(h) * 5
                                }
                            }
                            if (H - hb < -2) jb = 0;
                            else if (H - hb > 2) jb = -1;
                            hb = H;
                            H = a;
                            sb = G - H / i / (Y || 1);
                            if (H && x && !yb) {
                                b.Sb(d);
                                if (!M) z.Be(sb);
                                else z.cf(sb)
                            }
                        }
                    }
                }
            }

            function bb() {
                qc();
                if (B) {
                    B = k;
                    b.lb();
                    b.W(g, "mousemove", Bb);
                    b.W(g, "touchmove", Bb);
                    P = H;
                    z.xb();
                    var a = w.db();
                    d.o(i.Od, t(a), a, t(G), G);
                    E & 12 && Pb();
                    ec(e)
                }
            }

            function jc(c) {
                if (P) {
                    b.Ne(c);
                    var a = b.cc(c);
                    while (a && v !== a) {
                        a.tagName == "A" && b.Sb(c);
                        try {
                            a = a.parentNode
                        } catch (d) {
                            break
                        }
                    }
                }
            }

            function Jb(a) {
                C[s];
                s = t(a);
                tb = C[s];
                Tb(a);
                return s
            }

            function Dc(a, b) {
                x = 0;
                Jb(a);
                d.o(i.Nd, t(a), b)
            }

            function Tb(a, c) {
                wb = a;
                b.j(S, function(b) {
                    b.vc(t(a), a, c)
                })
            }

            function sc() {
                var b = i.rd || 0,
                    a = X;
                if (ob) a & 1 && (a &= 1);
                i.rd |= a;
                return O = a & ~b
            }

            function qc() {
                if (O) {
                    i.rd &= ~X;
                    O = 0
                }
            }

            function Xb() {
                var a = b.nb();
                b.N(a, V);
                b.G(a, "absolute");
                return a
            }

            function t(a) {
                return (a % q + q) % q
            }

            function kc(b, d) {
                if (d)
                    if (!D) {
                        b = c.min(c.max(b + wb, 0), q - u);
                        d = k
                    } else if (D & 2) {
                    b = t(b + wb);
                    d = k
                }
                cb(b, a.yc, d)
            }

            function xb() {
                b.j(S, function(a) {
                    a.lc(a.bc.Gf <= F)
                })
            }

            function hc() {
                if (!F) {
                    F = 1;
                    xb();
                    if (!B) {
                        E & 12 && ec();
                        E & 3 && C[s].rc()
                    }
                }
            }

            function Ec() {
                if (F) {
                    F = 0;
                    xb();
                    B || !(E & 12) || gc()
                }
            }

            function ic() {
                V = {
                    Z: K,
                    eb: J,
                    e: 0,
                    f: 0
                };
                b.j(T, function(a) {
                    b.N(a, V);
                    b.G(a, "absolute");
                    b.tb(a, "hidden");
                    b.T(a)
                });
                b.N(gb, V)
            }

            function ab(b, a) {
                cb(b, a, e)
            }

            function cb(g, f, j) {
                if (Rb && (!B && (F || !(E & 12)) || a.Ed)) {
                    M = e;
                    B = k;
                    z.xb();
                    if (f == l) f = Vb;
                    var d = Cb.Fb(),
                        b = g;
                    if (j) {
                        b = d + g;
                        if (g > 0) b = c.ceil(b);
                        else b = c.floor(b)
                    }
                    if (D & 2) b = t(b);
                    if (!(D & 1)) b = c.max(0, c.min(b, q - u));
                    var i = (b - d) % q;
                    b = d + i;
                    var h = d == b ? 0 : f * c.abs(i);
                    h = c.min(h, f * u * 1.5);
                    z.Pb(d, b, h || 1)
                }
            }
            d.je = cb;
            d.Yc = function() {
                if (!N) {
                    N = e;
                    C[s] && C[s].rc()
                }
            };
            d.Xd = function() {
                return P
            };

            function W() {
                return b.q(y || p)
            }

            function nb() {
                return b.s(y || p)
            }
            d.bb = W;
            d.wb = nb;

            function Eb(c, d) {
                if (c == l) return b.q(p);
                if (!y) {
                    var a = b.nb(g);
                    b.Oc(a, b.Oc(p));
                    b.Vb(a, b.Vb(p));
                    b.Y(a, "block");
                    b.G(a, "relative");
                    b.P(a, 0);
                    b.L(a, 0);
                    b.tb(a, "visible");
                    y = b.nb(g);
                    b.G(y, "absolute");
                    b.P(y, 0);
                    b.L(y, 0);
                    b.q(y, b.q(p));
                    b.s(y, b.s(p));
                    b.Ic(y, "0 0");
                    b.Q(y, a);
                    var h = b.Qb(p);
                    b.Q(p, y);
                    b.mb(p, "backgroundImage", "");
                    b.j(h, function(c) {
                        b.Q(b.p(c, "noscale") ? p : a, c);
                        b.p(c, "autocenter") && Lb.push(c)
                    })
                }
                Y = c / (d ? b.s : b.q)(y);
                b.Se(y, Y);
                var f = d ? Y * W() : c,
                    e = d ? c : Y * nb();
                b.q(p, f);
                b.s(p, e);
                b.j(Lb, function(a) {
                    var c = b.xe(b.p(a, "autocenter"));
                    b.Wd(a, c)
                })
            }
            d.ne = Eb;
            d.kd = function(a) {
                var d = c.ceil(t(kb / bc)),
                    b = t(a - s + d);
                if (b > u) {
                    if (a - s > q / 2) a -= q;
                    else if (a - s <= -q / 2) a += q
                } else a = s + b - d;
                return a
            };
            n.call(d);
            d.qb = p = b.Db(p);
            var a = b.J({
                yb: 0,
                hf: 1,
                wc: 1,
                tc: 0,
                sc: k,
                Yb: 1,
                Bb: e,
                Ed: e,
                Fd: 1,
                jd: 3e3,
                id: 1,
                yc: 500,
                ye: f.ce,
                vd: 20,
                gd: 0,
                n: 1,
                uc: 0,
                me: 1,
                nc: 1,
                fd: 1
            }, fc);
            a.Bb = a.Bb && b.Oe();
            if (a.le != l) a.jd = a.le;
            if (a.ke != l) a.uc = a.ke;
            var fb = a.nc & 3,
                tc = (a.nc & 4) / -4 || 1,
                mb = a.te,
                I = b.J({
                    U: r,
                    Bb: a.Bb
                }, a.Af);
            I.zb = I.zb || I.Cf;
            var Fb = a.Df,
                Z = a.ie,
                eb = a.he,
                Q = !a.me,
                y, v = b.H(p, "slides", Q),
                gb = b.H(p, "loading", Q) || b.nb(g),
                Nb = b.H(p, "navigator", Q),
                dc = b.H(p, "arrowleft", Q),
                ac = b.H(p, "arrowright", Q),
                Mb = b.H(p, "thumbnavigator", Q),
                pc = b.q(v),
                nc = b.s(v),
                V, T = [],
                uc = b.Qb(v);
            b.j(uc, function(a) {
                if (a.tagName == "DIV" && !b.p(a, "u")) T.push(a);
                else b.ob() && b.M(a, (b.M(a) || 0) + 1)
            });
            var s = -1,
                wb, tb, q = T.length,
                K = a.ge || pc,
                J = a.fe || nc,
                Wb = a.gd,
                zb = K + Wb,
                Ab = J + Wb,
                bc = fb & 1 ? zb : Ab,
                u = c.min(a.n, q),
                lb, x, O, yb, S = [],
                Qb, Sb, Ob, cc, Cc, N, E = a.id,
                lc = a.jd,
                Vb = a.yc,
                rb, ib, kb, Rb = u < q,
                D = Rb ? a.Yb : 0,
                X, P, F = 1,
                M, B, R, ub = 0,
                vb = 0,
                H, hb, jb, Cb, w, U, z, Ub = new oc,
                Y, Lb = [];
            if (q) {
                if (a.Bb) Kb = function(a, c, d) {
                    b.Hb(a, {
                        rb: c,
                        pb: d
                    })
                };
                N = a.sc;
                d.bc = fc;
                ic();
                b.O(p, "jssor-slider", e);
                b.M(v, b.M(v) || 0);
                b.G(v, "absolute");
                lb = b.gb(v, e);
                b.Wb(lb, v);
                if (mb) {
                    cc = mb.Ef;
                    rb = mb.U;
                    ib = u == 1 && q > 1 && rb && (!b.hd() || b.Hd() >= 8)
                }
                kb = ib || u >= q || !(D & 1) ? 0 : a.uc;
                X = (u > 1 || kb ? fb : -1) & a.fd;
                var Gb = v,
                    C = [],
                    A, L, Db = b.Ge(),
                    ob = Db.De,
                    G, qb, Ib, sb;
                Db.td && b.mb(Gb, Db.td, ([j, "pan-y", "pan-x", "none"])[X] || "");
                U = new zc;
                if (ib) A = new rb(Ub, K, J, mb, ob);
                b.Q(lb, U.Rb);
                b.tb(v, "hidden");
                L = Xb();
                b.mb(L, "backgroundColor", "#000");
                b.Jb(L, 0);
                b.Wb(L, Gb.firstChild, Gb);
                for (var db = 0; db < T.length; db++) {
                    var wc = T[db],
                        yc = new xc(wc, db);
                    C.push(yc)
                }
                b.T(gb);
                Cb = new Ac;
                z = new mc(Cb, U);
                b.g(v, "click", jc, e);
                b.g(p, "mouseout", b.ec(hc, p));
                b.g(p, "mouseover", b.ec(Ec, p));
                if (X) {
                    b.g(v, "mousedown", Yb);
                    b.g(v, "touchstart", rc);
                    b.g(v, "dragstart", Hb);
                    b.g(v, "selectstart", Hb);
                    b.g(g, "mouseup", bb);
                    b.g(g, "touchend", bb);
                    b.g(g, "touchcancel", bb);
                    b.g(h, "blur", bb)
                }
                E &= ob ? 10 : 5;
                if (Nb && Fb) {
                    Qb = new Fb.U(Nb, Fb, W(), nb());
                    S.push(Qb)
                }
                if (Z && dc && ac) {
                    Z.Yb = D;
                    Z.n = u;
                    Sb = new Z.U(dc, ac, Z, W(), nb());
                    S.push(Sb)
                }
                if (Mb && eb) {
                    eb.tc = a.tc;
                    Ob = new eb.U(Mb, eb);
                    S.push(Ob)
                }
                b.j(S, function(a) {
                    a.Bc(q, C, gb);
                    a.Ab(o.mc, kc)
                });
                b.mb(p, "visibility", "visible");
                Eb(W());
                xb();
                a.wc && b.g(g, "keydown", function(b) {
                    if (b.keyCode == 37) ab(-a.wc);
                    else b.keyCode == 39 && ab(a.wc)
                });
                var pb = a.tc;
                if (!(D & 1)) pb = c.max(0, c.min(pb, q - u));
                z.Pb(pb, pb, 0)
            }
        };
    i.lf = 21;
    i.Td = 22;
    i.Od = 23;
    i.Ke = 24;
    i.Je = 25;
    i.mf = 26;
    i.tf = 27;
    i.Ld = 28;
    i.bf = 202;
    i.Nd = 203;
    i.Pd = 206;
    i.Ud = 207;
    i.Vd = 208;
    i.Ad = 209;
    var o = {
        mc: 1
    };
    var t = function(a, g, h) {
            var c = this;
            n.call(c);
            var r, q, d, f, i;
            b.q(a);
            b.s(a);

            function l(a) {
                c.o(o.mc, a, e)
            }

            function p(c) {
                b.D(a, c || !h.Yb && d == 0);
                b.D(g, c || !h.Yb && d >= q - h.n);
                r = c
            }
            c.vc = function(b, a, c) {
                if (c) d = a;
                else {
                    d = b;
                    p(r)
                }
            };
            c.lc = p;
            var m;
            c.Bc = function(c) {
                q = c;
                d = 0;
                if (!m) {
                    b.g(a, "click", b.X(j, l, -i));
                    b.g(g, "click", b.X(j, l, i));
                    b.zc(a);
                    b.zc(g);
                    m = e
                }
            };
            c.bc = f = b.J({
                Zd: 1
            }, h);
            i = f.Zd;
            if (f.Ac == k) {
                b.O(a, "noscale", e);
                b.O(g, "noscale", e)
            }
            if (f.Cb) {
                b.O(a, "autocenter", f.Cb);
                b.O(g, "autocenter", f.Cb)
            }
        },
        q = function(g, B) {
            var h = this,
                z, p, a, v = [],
                x, w, d, q, r, u, t, m, s, f, l;
            n.call(h);
            g = b.Db(g);

            function A(n, f) {
                var g = this,
                    c, m, k;

                function q() {
                    m.Rd(p == f)
                }

                function i(e) {
                    if (e || !s.Xd()) {
                        var a = d - f % d,
                            b = s.kd((f + a) / d - 1),
                            c = b * d + d - a;
                        h.o(o.mc, c)
                    }
                }
                g.sb = f;
                g.wd = q;
                k = n.we || n.Tb || b.nb();
                g.Rb = c = b.Kd(l, "thumbnailtemplate", k, e);
                m = b.zc(c);
                a.jc & 1 && b.g(c, "click", b.X(j, i, 0));
                a.jc & 2 && b.g(c, "mouseover", b.ec(b.X(j, i, 1), c))
            }
            h.vc = function(b, e, f) {
                var a = p;
                p = b;
                a != -1 && v[a].wd();
                v[b].wd();
                !f && s.je(s.kd(c.floor(e / d)))
            };
            h.lc = function(a) {
                b.D(g, a)
            };
            var y;
            h.Bc = function(D, C) {
                if (!y) {
                    z = D;
                    c.ceil(z / d);
                    p = -1;
                    m = c.min(m, C.length);
                    var h = a.Zb & 1,
                        n = u + (u + q) * (d - 1) * (1 - h),
                        l = t + (t + r) * (d - 1) * h,
                        B = n + (n + q) * (m - 1) * h,
                        o = l + (l + r) * (m - 1) * (1 - h);
                    b.G(f, "absolute");
                    b.tb(f, "hidden");
                    a.Cb & 1 && b.L(f, (x - B) / 2);
                    a.Cb & 2 && b.P(f, (w - o) / 2);
                    b.q(f, B);
                    b.s(f, o);
                    var j = [];
                    b.j(C, function(l, g) {
                        var i = new A(l, g),
                            e = i.Rb,
                            a = c.floor(g / d),
                            k = g % d;
                        b.L(e, (u + q) * k * (1 - h));
                        b.P(e, (t + r) * k * h);
                        if (!j[a]) {
                            j[a] = b.nb();
                            b.Q(f, j[a])
                        }
                        b.Q(j[a], e);
                        v.push(i)
                    });
                    var E = b.J({
                        sc: k,
                        Ed: k,
                        ge: n,
                        fe: l,
                        gd: q * h + r * (1 - h),
                        vd: 12,
                        yc: 200,
                        id: 1,
                        nc: a.Zb,
                        fd: a.Bf || a.zf ? 0 : a.Zb
                    }, a);
                    s = new i(g, E);
                    y = e
                }
            };
            h.bc = a = b.J({
                dc: 0,
                fc: 0,
                n: 1,
                Zb: 1,
                Cb: 3,
                jc: 1
            }, B);
            x = b.q(g);
            w = b.s(g);
            f = b.H(g, "slides", e);
            l = b.H(f, "prototype");
            u = b.q(l);
            t = b.s(l);
            b.Ub(l, f);
            d = a.v || 1;
            q = a.dc;
            r = a.fc;
            m = a.n;
            a.Ac == k && b.O(g, "noscale", e)
        };

    function r(e, d, c) {
        var a = this;
        m.call(a, 0, c);
        a.sd = b.cd;
        a.Id = 0;
        a.ud = c
    }
    jssor_1_slider_init = function() {
        var g = [{
                k: 1200,
                x: .3,
                A: {
                    f: [.3, .7]
                },
                i: {
                    f: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: -.3,
                r: e,
                i: {
                    f: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: -.3,
                A: {
                    f: [.3, .7]
                },
                i: {
                    f: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: .3,
                r: e,
                i: {
                    f: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                y: .3,
                A: {
                    e: [.3, .7]
                },
                i: {
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                y: -.3,
                r: e,
                i: {
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                y: -.3,
                A: {
                    e: [.3, .7]
                },
                i: {
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                y: .3,
                r: e,
                i: {
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: .3,
                n: 2,
                A: {
                    f: [.3, .7]
                },
                B: {
                    jb: 3
                },
                i: {
                    f: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: .3,
                n: 2,
                r: e,
                B: {
                    jb: 3
                },
                i: {
                    f: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                y: .3,
                v: 2,
                A: {
                    e: [.3, .7]
                },
                B: {
                    ib: 12
                },
                i: {
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                y: .3,
                v: 2,
                r: e,
                B: {
                    ib: 12
                },
                i: {
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                y: .3,
                n: 2,
                A: {
                    e: [.3, .7]
                },
                B: {
                    jb: 12
                },
                i: {
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                y: -.3,
                n: 2,
                r: e,
                B: {
                    jb: 12
                },
                i: {
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: .3,
                v: 2,
                A: {
                    f: [.3, .7]
                },
                B: {
                    ib: 3
                },
                i: {
                    f: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: -.3,
                v: 2,
                r: e,
                B: {
                    ib: 3
                },
                i: {
                    f: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: .3,
                y: .3,
                n: 2,
                v: 2,
                A: {
                    f: [.3, .7],
                    e: [.3, .7]
                },
                B: {
                    jb: 3,
                    ib: 12
                },
                i: {
                    f: d.l,
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                x: .3,
                y: .3,
                n: 2,
                v: 2,
                A: {
                    f: [.3, .7],
                    e: [.3, .7]
                },
                r: e,
                B: {
                    jb: 3,
                    ib: 12
                },
                i: {
                    f: d.l,
                    e: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                V: 20,
                c: 3,
                i: {
                    c: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                V: 20,
                c: 3,
                r: e,
                i: {
                    c: d.od,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                V: 20,
                c: 12,
                i: {
                    c: d.l,
                    a: d.m
                },
                a: 2
            }, {
                k: 1200,
                V: 20,
                c: 12,
                r: e,
                i: {
                    c: d.od,
                    a: d.m
                },
                a: 2
            }],
            j = {
                sc: e,
                te: {
                    U: s,
                    zb: g,
                    pf: 1
                },
                ie: {
                    U: t
                },
                he: {
                    U: q,
                    n: 10,
                    dc: 8,
                    fc: 8,
                    uc: 360
                }
            },
            f = new i("jssor_1", j);

        function a() {
            var b = f.qb.parentNode.clientWidth;
            if (b) {
                b = c.min(b, 800);
                f.ne(b)
            } else h.setTimeout(a, 30)
        }
        a();
        b.g(h, "load", a);
        b.g(h, "resize", a);
        b.g(h, "orientationchange", a)
    }
})(window, document, Math, null, true, false)
