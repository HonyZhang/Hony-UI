(window._iconfont_svg_string_4778502 =
  '<svg><symbol id="hony-icon-Loading-Line" viewBox="0 0 1024 1024"><path d="M510.784 117.44a30.272 30.272 0 0 0-32.064-30.848 426.688 426.688 0 1 0 458.56 459.648 30.272 30.272 0 0 0-30.784-32.128 34.368 34.368 0 0 0-33.408 31.808 362.624 362.624 0 1 1-394.24-395.072 34.368 34.368 0 0 0 32-33.408z"  ></path></symbol></svg>'),
  (n => {
    var e = (t = (t = document.getElementsByTagName('script'))[
        t.length - 1
      ]).getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg');
    if (!t) {
      var o,
        i,
        d,
        c,
        s,
        a = function (e, t) {
          t.parentNode.insertBefore(e, t);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          );
        } catch (e) {
          console && console.log(e);
        }
      }
      (o = function () {
        var e,
          t = document.createElement('div');
        (t.innerHTML = n._iconfont_svg_string_4778502),
          (t = t.getElementsByTagName('svg')[0]) &&
            (t.setAttribute('aria-hidden', 'true'),
            (t.style.position = 'absolute'),
            (t.style.width = 0),
            (t.style.height = 0),
            (t.style.overflow = 'hidden'),
            (t = t),
            (e = document.body).firstChild
              ? a(t, e.firstChild)
              : e.appendChild(t));
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o();
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((d = o),
            (c = n.document),
            (s = !1),
            r(),
            (c.onreadystatechange = function () {
              'complete' == c.readyState &&
                ((c.onreadystatechange = null), l());
            }));
    }
    function l() {
      s || ((s = !0), d());
    }
    function r() {
      try {
        c.documentElement.doScroll('left');
      } catch (e) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
