/**
 * Copyright (c) 2020
 *
 * Matt Oestreich
 * matthewpoestreich@gmail.com
 * https://mattoestreich.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * // -----------------------------------------------------------------------------------
 *
 * css.js
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 JotForm
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * // -----------------------------------------------------------------------------------
 *
 * styled-components/styled-components
 * ONE FILE IN THIS REPO HAS BEEN MODIFIED FROM styled-components. PLEASE SEE THE
 * FOLLOWING FILE, WHICH WAS MODIFIED:
 * https://github.com/styled-components/styled-components/blob/v3.3.3/src/utils/generateAlphabeticName.js
 */

'use strict';
var e,
  t = require('react'),
  r = (e = t) && 'object' == typeof e && 'default' in e ? e.default : e;
function n(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function s(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function o(e, t, r) {
  return t && s(e.prototype, t), r && s(e, r), e;
}
function i() {
  return (i =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function c(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && a(e, t);
}
function l(e) {
  return (l = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function a(e, t) {
  return (a =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function u() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
  } catch (e) {
    return !1;
  }
}
function p(e, t) {
  return !t || ('object' != typeof t && 'function' != typeof t)
    ? (function (e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      })(e)
    : t;
}
function f(e) {
  return function () {
    var t,
      r = l(e);
    if (u()) {
      var n = l(this).constructor;
      t = Reflect.construct(r, arguments, n);
    } else t = r.apply(this, arguments);
    return p(this, t);
  };
}
var h = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  },
  y = function () {
    return (function (e) {
      var t,
        r = '';
      for (t = e; t > 52; t = Math.floor(t / 52)) r = h(t % 52) + r;
      return h(t % 52) + r;
    })(Math.floor(9999999999999 * Math.random()));
  },
  v = function () {
    var e = document.createElement('style');
    e.setAttribute('data-stylish', 'stylin'), document.head.appendChild(e);
  },
  d = function () {
    return document.querySelector('style[data-stylish]');
  },
  m = function (e) {
    return e.replace(/\n/g, '').replace(/\s+/g, ' ');
  },
  g = function (e) {
    return m(e).match(/((@media [\s]*).*?[^}]*}.*?})/g);
  };
var S,
  b,
  x = new ((S = void 0),
  ((b = function () {
    (this.cssImportStatements = []),
      (this.cssKeyframeStatements = []),
      (this.cssRegex = new RegExp('([\\s\\S]*?){([\\s\\S]*?)}', 'gi')),
      (this.cssMediaQueryRegex = '((@media [\\s\\S]*?){([\\s\\S]*?}\\s*?)})'),
      (this.cssKeyframeRegex = '((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})'),
      (this.combinedCSSRegex =
        '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})'),
      (this.cssCommentsRegex = '(\\/\\*[\\s\\S]*?\\*\\/)'),
      (this.cssImportStatementRegex = new RegExp('@import .*?;', 'gi'));
  }).prototype.stripComments = function (e) {
    var t = new RegExp(this.cssCommentsRegex, 'gi');
    return e.replace(t, '');
  }),
  (b.prototype.parseCSS = function (e) {
    if (void 0 === e) return [];
    for (var t = []; ; ) {
      var r = this.cssImportStatementRegex.exec(e);
      if (null === r) break;
      this.cssImportStatements.push(r[0]),
        t.push({ selector: '@imports', type: 'imports', styles: r[0] });
    }
    e = e.replace(this.cssImportStatementRegex, '');
    for (var n, s = new RegExp(this.cssKeyframeRegex, 'gi'); null !== (n = s.exec(e)); )
      t.push({ selector: '@keyframes', type: 'keyframes', styles: n[0] });
    e = e.replace(s, '');
    for (var o = new RegExp(this.combinedCSSRegex, 'gi'); null !== (n = o.exec(e)); ) {
      var i = '';
      i =
        void 0 === n[2]
          ? n[5].split('\r\n').join('\n').trim()
          : n[2].split('\r\n').join('\n').trim();
      var c = new RegExp(this.cssCommentsRegex, 'gi'),
        l = c.exec(i);
      if (
        (null !== l && (i = i.replace(c, '').trim()),
        -1 !== (i = i.replace(/\n+/, '\n')).indexOf('@media'))
      ) {
        var a = { selector: i, type: 'media', subStyles: this.parseCSS(n[3] + '\n}') };
        null !== l && (a.comments = l[0]), t.push(a);
      } else {
        var u = { selector: i, rules: this.parseRules(n[6]) };
        '@font-face' === i && (u.type = 'font-face'), null !== l && (u.comments = l[0]), t.push(u);
      }
    }
    return t;
  }),
  (b.prototype.parseRules = function (e) {
    var t = [];
    e = (e = e.split('\r\n').join('\n')).split(';');
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      if (-1 !== (n = n.trim()).indexOf(':')) {
        var s = (n = n.split(':'))[0].trim(),
          o = n.slice(1).join(':').trim();
        if (s.length < 1 || o.length < 1) continue;
        t.push({ directive: s, value: o });
      } else
        'base64,' === n.trim().substr(0, 7)
          ? (t[t.length - 1].value += n.trim())
          : n.length > 0 && t.push({ directive: '', value: n, defective: !0 });
    }
    return t;
  }),
  (b.prototype.findCorrespondingRule = function (e, t, r) {
    void 0 === r && (r = !1);
    for (
      var n = !1, s = 0;
      s < e.length && (e[s].directive !== t || ((n = e[s]), r !== e[s].value));
      s++
    );
    return n;
  }),
  (b.prototype.findBySelector = function (e, t, r) {
    void 0 === r && (r = !1);
    for (var n = [], s = 0; s < e.length; s++)
      !1 === r
        ? e[s].selector === t && n.push(e[s])
        : -1 !== e[s].selector.indexOf(t) && n.push(e[s]);
    if ('@imports' === t || n.length < 2) return n;
    var o = n[0];
    for (s = 1; s < n.length; s++) this.intelligentCSSPush([o], n[s]);
    return [o];
  }),
  (b.prototype.deleteBySelector = function (e, t) {
    for (var r = [], n = 0; n < e.length; n++) e[n].selector !== t && r.push(e[n]);
    return r;
  }),
  (b.prototype.compressCSS = function (e) {
    for (var t = [], r = {}, n = 0; n < e.length; n++) {
      var s = e[n];
      if (!0 !== r[s.selector]) {
        var o = this.findBySelector(e, s.selector);
        0 !== o.length && ((t = t.concat(o)), (r[s.selector] = !0));
      }
    }
    return t;
  }),
  (b.prototype.cssDiff = function (e, t) {
    if (e.selector !== t.selector) return !1;
    if ('media' === e.type || 'media' === t.type) return !1;
    for (var r, n, s = { selector: e.selector, rules: [] }, o = 0; o < e.rules.length; o++)
      (r = e.rules[o]),
        (!1 === (n = this.findCorrespondingRule(t.rules, r.directive, r.value)) ||
          r.value !== n.value) &&
          s.rules.push(r);
    for (var i = 0; i < t.rules.length; i++)
      (n = t.rules[i]),
        !1 === (r = this.findCorrespondingRule(e.rules, n.directive)) &&
          ((n.type = 'DELETED'), s.rules.push(n));
    return 0 !== s.rules.length && s;
  }),
  (b.prototype.intelligentMerge = function (e, t, r) {
    void 0 === r && (r = !1);
    for (var n = 0; n < t.length; n++) this.intelligentCSSPush(e, t[n], r);
    for (n = 0; n < e.length; n++) {
      var s = e[n];
      'media' !== s.type && 'keyframes' !== s.type && (s.rules = this.compactRules(s.rules));
    }
  }),
  (b.prototype.intelligentCSSPush = function (e, t, r) {
    var n = t.selector,
      s = !1;
    if ((void 0 === r && (r = !1), !1 === r)) {
      for (var o = 0; o < e.length; o++)
        if (e[o].selector === n) {
          s = e[o];
          break;
        }
    } else
      for (var i = e.length - 1; i > -1; i--)
        if (e[i].selector === n) {
          s = e[i];
          break;
        }
    if (!1 === s) e.push(t);
    else if ('media' !== t.type)
      for (var c = 0; c < t.rules.length; c++) {
        var l = t.rules[c],
          a = this.findCorrespondingRule(s.rules, l.directive);
        !1 === a
          ? s.rules.push(l)
          : 'DELETED' === l.type
          ? (a.type = 'DELETED')
          : (a.value = l.value);
      }
    else s.subStyles = s.subStyles.concat(t.subStyles);
  }),
  (b.prototype.compactRules = function (e) {
    for (var t = [], r = 0; r < e.length; r++) 'DELETED' !== e[r].type && t.push(e[r]);
    return t;
  }),
  (b.prototype.getCSSForEditor = function (e, t) {
    void 0 === t && (t = 0);
    var r = '';
    void 0 === e && (e = this.css);
    for (var n = 0; n < e.length; n++) 'imports' === e[n].type && (r += e[n].styles + '\n\n');
    for (n = 0; n < e.length; n++) {
      var s = e[n];
      if (void 0 !== s.selector) {
        var o = '';
        void 0 !== s.comments && (o = s.comments + '\n'),
          'media' === s.type
            ? ((r += o + s.selector + '{\n'),
              (r += this.getCSSForEditor(s.subStyles, t + 1)),
              (r += '}\n\n'))
            : 'keyframes' !== s.type &&
              'imports' !== s.type &&
              ((r += this.getSpaces(t) + o + s.selector + ' {\n'),
              (r += this.getCSSOfRules(s.rules, t + 1)),
              (r += this.getSpaces(t) + '}\n\n'));
      }
    }
    for (n = 0; n < e.length; n++) 'keyframes' === e[n].type && (r += e[n].styles + '\n\n');
    return r;
  }),
  (b.prototype.getImports = function (e) {
    for (var t = [], r = 0; r < e.length; r++) 'imports' === e[r].type && t.push(e[r].styles);
    return t;
  }),
  (b.prototype.getCSSOfRules = function (e, t) {
    for (var r = '', n = 0; n < e.length; n++)
      void 0 !== e[n] &&
        (void 0 === e[n].defective
          ? (r += this.getSpaces(t) + e[n].directive + ': ' + e[n].value + ';\n')
          : (r += this.getSpaces(t) + e[n].value + ';\n'));
    return r || '\n';
  }),
  (b.prototype.getSpaces = function (e) {
    for (var t = '', r = 0; r < 4 * e; r++) t += ' ';
    return t;
  }),
  (b.prototype.applyNamespacing = function (e, t) {
    var r = e,
      n = '.' + this.cssPreviewNamespace;
    void 0 !== t && (n = t), 'string' == typeof e && (r = this.parseCSS(e));
    for (var s = 0; s < r.length; s++) {
      var o = r[s];
      if (
        !(
          o.selector.indexOf('@font-face') > -1 ||
          o.selector.indexOf('keyframes') > -1 ||
          o.selector.indexOf('@import') > -1 ||
          o.selector.indexOf('.form-all') > -1 ||
          o.selector.indexOf('#stage') > -1
        )
      )
        if ('media' !== o.type) {
          for (var i = o.selector.split(','), c = [], l = 0; l < i.length; l++)
            -1 === i[l].indexOf('.supernova') ? c.push(n + ' ' + i[l]) : c.push(i[l]);
          o.selector = c.join(',');
        } else o.subStyles = this.applyNamespacing(o.subStyles, t);
    }
    return r;
  }),
  (b.prototype.clearNamespacing = function (e, t) {
    void 0 === t && (t = !1);
    var r = e,
      n = '.' + this.cssPreviewNamespace;
    'string' == typeof e && (r = this.parseCSS(e));
    for (var s = 0; s < r.length; s++) {
      var o = r[s];
      if ('media' !== o.type) {
        for (var i = o.selector.split(','), c = [], l = 0; l < i.length; l++)
          c.push(i[l].split(n + ' ').join(''));
        o.selector = c.join(',');
      } else o.subStyles = this.clearNamespacing(o.subStyles, !0);
    }
    return !1 === t ? this.getCSSForEditor(r) : r;
  }),
  (b.prototype.createStyleElement = function (e, t, r) {
    if (
      (void 0 === r && (r = !1),
      !1 === this.testMode && 'nonamespace' !== r && (t = this.applyNamespacing(t)),
      'string' != typeof t && (t = this.getCSSForEditor(t)),
      !0 === r && (t = this.getCSSForEditor(this.parseCSS(t))),
      !1 !== this.testMode)
    )
      return this.testMode('create style #' + e, t);
    var n = document.getElementById(e);
    n && n.parentNode.removeChild(n);
    var s = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
    (o.id = e),
      (o.type = 'text/css'),
      s.appendChild(o),
      o.styleSheet && !o.sheet
        ? (o.styleSheet.cssText = t)
        : o.appendChild(document.createTextNode(t));
  }),
  void (S.cssjs = b)).cssjs();
module.exports = function (e) {
  return function (s) {
    for (var l = arguments.length, a = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
      a[u - 1] = arguments[u];
    return (function (l) {
      c(p, t.Component);
      var u = f(p);
      function p() {
        return n(this, p), u.apply(this, arguments);
      }
      return (
        o(p, [
          {
            key: 'interpolateStyle',
            value: function () {
              var e = this,
                t = a.reduce(function (t, r, n) {
                  return t + ('function' == typeof r ? r(e.props) : r) + s[n + 1];
                }, s[0]),
                r = y(),
                n = m(t),
                o = g(n);
              o &&
                o.forEach(function (e) {
                  return (n = n.replace(e, ''));
                });
              var i = '.'.concat(r, ' {').concat(n, '}');
              o &&
                o.length &&
                x.parseCSS(o.join('')).forEach(function (e) {
                  var t = ''.concat(e.selector, ' { .').concat(r, ' {');
                  e.subStyles.forEach(function (e) {
                    e.rules.forEach(function (e) {
                      t += ''.concat(e.directive, ': ').concat(e.value, ';');
                    });
                  }),
                    (i += t += '}}');
                });
              var c = d();
              c || (v(), (c = d())), this.element.setAttribute('class', r), (c.textContent += i);
            },
          },
          {
            key: 'componentDidMount',
            value: function () {
              this.interpolateStyle();
            },
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.interpolateStyle();
            },
          },
          {
            key: 'render',
            value: function () {
              var t = this;
              return r.createElement(
                e,
                i({}, this.props, {
                  ref: function (e) {
                    return (t.element = e);
                  },
                }),
              );
            },
          },
        ]),
        p
      );
    })();
  };
};
