(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{482:function(e,t,n){"use strict";n.r(t);var o=n(385),r=n(386),c=n(441),m=n(419),_=n(389),v=(n(35),n(13)),d=(n(86),n(28),n(0)),l=n(147),f=n(148),w=n(169),C=n.n(w),h=d.a.extend({validate:function(e){var t=e.params;return/^\d+$/.test(t.id)},components:{HeaderComponent:l.default,FooterComponent:f.default},asyncData:function(e){return Object(v.a)(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,C.a.get("https://jsonplaceholder.typicode.com/comments/".concat(n.id));case 3:return o=t.sent,r=o.data,t.abrupt("return",{comment:r});case 6:case"end":return t.stop()}}),t)})))()}}),x=n(50),component=Object(x.a)(h,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("HeaderComponent",{attrs:{title:"Test April",pageTitle:"comment "+e.comment.id}}),e._v(" "),t(o.a,[t(c.a,{attrs:{"two-line":"",color:"#004D40"}},[t(m.a,[t(_.a,[t(_.c,[e._v("id")]),e._v(" "),t(_.b,[e._v(e._s(e.comment.id))])],1)],1),e._v(" "),t(r.a),e._v(" "),t(m.a,[t(_.a,[t(_.c,[e._v("PostId")]),e._v(" "),t(_.b,[e._v(e._s(e.comment.postId))])],1)],1),e._v(" "),t(r.a),e._v(" "),t(m.a,[t(_.a,[t(_.c,[e._v("Name")]),e._v(" "),t(_.b,[e._v(e._s(e.comment.name))])],1)],1),e._v(" "),t(r.a),e._v(" "),t(m.a,[t(_.a,[t(_.c,[e._v("Email")]),e._v(" "),t(_.b,[e._v(e._s(e.comment.email))])],1)],1),e._v(" "),t(r.a),e._v(" "),t(m.a,[t(_.a,[t(_.c,[e._v("Body")]),e._v(" "),t(_.b,[e._v(e._s(e.comment.body))])],1)],1)],1)],1),e._v(" "),t("FooterComponent")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderComponent:n(147).default,FooterComponent:n(148).default})}}]);