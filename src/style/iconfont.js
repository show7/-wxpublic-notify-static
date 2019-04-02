!(function (d) {
  var e,
    n =
      '<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M927.104 866.816l-195.626667-208.768C780.629333 601.770667 810.666667 528.426667 810.666667 448 810.666667 271.530667 667.136 128 490.666667 128S170.666667 271.530667 170.666667 448 314.197333 768 490.666667 768c65.322667 0 126.08-19.754667 176.768-53.461333l197.461333 210.688L927.104 866.816zM256 448C256 318.592 361.258667 213.333333 490.666667 213.333333S725.333333 318.592 725.333333 448 620.074667 682.666667 490.666667 682.666667 256 577.408 256 448z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1025 1024"><path d="M513.344 0a512 512 0 1 0 0 1024 512 512 0 0 0 0-1024z m226.048 674.624l-54.528 56.896-171.52-164.928-171.392 164.928-54.592-56.896L456.576 512 287.36 349.312l54.592-56.768 171.392 164.8 171.52-164.8 54.528 56.768L570.176 512l169.216 162.624z" fill="" ></path></symbol></svg>',
    t = (e = document.getElementsByTagName ('script'))[
      e.length - 1
    ].getAttribute ('data-injectcss');
  if (t && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;
    try {
      document.write (
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log (e);
    }
  }
  !(function (e) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf (document.readyState))
        setTimeout (e, 0);
      else {
        var t = function () {
          document.removeEventListener ('DOMContentLoaded', t, !1), e ();
        };
        document.addEventListener ('DOMContentLoaded', t, !1);
      }
    else
      document.attachEvent &&
        ((n = e), (o = d.document), (i = !1), (c = function () {
          i || ((i = !0), n ());
        }), (l = function () {
          try {
            o.documentElement.doScroll ('left');
          } catch (e) {
            return void setTimeout (l, 50);
          }
          c ();
        }) (), (o.onreadystatechange = function () {
          'complete' == o.readyState && ((o.onreadystatechange = null), c ());
        }));
    var n, o, i, c, l;
  }) (function () {
    var e, t;
    ((e = document.createElement (
      'div'
    )).innerHTML = n), (n = null), (t = e.getElementsByTagName ('svg')[0]) &&
      (t.setAttribute ('aria-hidden', 'true'), (t.style.position =
        'absolute'), (t.style.width = 0), (t.style.height = 0), (t.style.overflow =
        'hidden'), (function (e, t) {
        t.firstChild
          ? (function (e, t) {
              t.parentNode.insertBefore (e, t);
            }) (e, t.firstChild)
          : t.appendChild (e);
      }) (t, document.body));
  });
}) (window);
