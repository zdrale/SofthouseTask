(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{46:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(18),c=n.n(r),s=n(9),o=n.n(s),l=n(19),u=n(3),b=n(4),h=n(6),j=n(5),p=n(20),d=n.n(p),m=n(0),v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"ui segment",children:Object(m.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{children:"Website Search "}),Object(m.jsx)("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})]})})})}}]),n}(i.a.Component),x=function(e){var t=document.getElementById("editable");return console.log(t),Object(m.jsxs)("div",{style:{height:"400px",width:"600px",textAlign:"center"},children:[Object(m.jsx)("img",{src:e.websiteData.website.image,alt:"Loading",style:{height:"100%",width:"100%"}}),Object(m.jsx)("p",{children:e.websiteData.website.title}),Object(m.jsx)("p",{id:"editable",contentEditable:"true",children:e.websiteData.website.description}),Object(m.jsx)("p",{children:e.websiteData.website.url})]})},f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={website:[]},e.onSearchSubmit=function(){var t=Object(l.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://api.linkpreview.net",{params:{key:"47caa4074eb0734eb2a59414cc3a1639",q:n}});case 2:a=t.sent,console.log(a),e.setState({website:a.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(n,[{key:"onSave",value:function(){console.log("button is clicked")}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"ui container",style:{marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)(v,{onSubmit:this.onSearchSubmit}),Object(m.jsx)(x,{websiteData:this.state}),Object(m.jsx)("button",{onClick:this.onSave,style:{marginTop:"130px"},children:"Save Changes"})]})}}]),n}(i.a.Component);c.a.render(Object(m.jsx)(f,{}),document.querySelector("#root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a660b2ad.chunk.js.map