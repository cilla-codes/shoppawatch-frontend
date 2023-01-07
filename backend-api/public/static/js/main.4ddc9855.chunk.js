(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(27),r=c.n(n),i=c(7),j=c(15),l=c(4),d=c.n(l),u=c(6),o=c(9),b=c.n(o);b.a.defaults.headers.post["Content-Type"]="application/json",b.a.defaults.xsrfCookieName="CSRF-TOKEN",b.a.defaults.xsrfHeaderName="X-CSRF-Token",b.a.defaults.withCredentials=!0;var h={products:"/api/v1/products/",addItem:"/api/v1/carts/add_item",updateItem:"/api/v1/carts/update_item",removeItem:"/api/v1/carts/remove_item",registrations:"/api/v1/registrations",sessions:"/api/v1/sessions",loggedIn:"/api/v1/logged_in",logOut:"/api/v1/logout",cart:"/api/v1/carts/get_cart",search:"/api/v1/products/search"},O=Object(j.b)("cart/addToCartHandler",function(){var e=Object(u.a)(d.a.mark((function e(t,c){var a,s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=c.getState(),!((s=a.cart.quantity)>=1)){e.next=7;break}return e.next=5,b.a.post(h.addItem,{product_id:t.id,quantity:s});case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),m=Object(j.b)("cart/fetchCart",function(){var e=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(h.cart);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(j.c)({name:"cart",initialState:{cart:{},quantity:1},reducers:{setQuantity:function(e,t){e.quantity=t.payload},setCart:function(e,t){e.cart=t.payload}},extraReducers:function(e){e.addCase(O.fulfilled,(function(e,t){e.cart=t.payload})).addCase(m.fulfilled,(function(e,t){e.cart=t.payload}))}}),x=p.actions,f=x.setQuantity,v=x.setCart,N=function(e){return e.cart.cart},g=function(e){return e.cart.quantity},y=p.reducer,w="LOGGED_IN",_="NOT_LOGGED_IN",k={user:{},loggedInStatus:_,errorMessage:""},C=Object(j.b)("auth/signin",function(){var e=Object(u.a)(d.a.mark((function e(t,c){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.dispatch,e.next=3,b.a.post("".concat(h.sessions),{user:{email:t.email,password:t.password}},{withCredentials:!0});case 3:return(s=e.sent).data.logged_in&&(a(I(s.data)),a(L(s.data)),a(v(s.data.user_cart))),e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),S=Object(j.b)("auth/signup",function(){var e=Object(u.a)(d.a.mark((function e(t,c){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.dispatch,e.next=3,b.a.post("".concat(h.registrations),{user:{name:t.name,email:t.email,password:t.password}},{withCredentials:!0});case 3:return"created"===(s=e.sent).data.status&&(a(I(s.data)),a(L(s.data))),e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),q=Object(j.c)({name:"auth",initialState:k,reducers:{handleLogin:function(e,t){e.loggedInStatus=w,e.user=t.payload.user},handleLogout:function(e){e.loggedInStatus=_,e.user={}},setUser:function(e,t){e.user=t.payload.user},setLoggedInStatus:function(e,t){e.loggedInStatus=t.payload},setErrorMessage:function(e,t){e.errorMessage=t.payload}},extraReducers:function(e){e.addCase(C.fulfilled,(function(e,t){401===t.payload.status&&(e.errorMessage=t.payload.message)})).addCase(S.fulfilled,(function(e,t){422===t.payload.status&&(e.errorMessage=t.payload.message)}))}}),E=q.actions,I=E.handleLogin,F=E.handleLogout,T=E.setLoggedInStatus,L=E.setUser,A=E.setErrorMessage,D=function(e){return e.auth.loggedInStatus},G=function(e){return e.auth.errorMessage},M=q.reducer,P=Object(j.a)({reducer:{cart:y,auth:M}}),W=c(8),R=c(3),B=c(0),U=function(e){var t=e.page,c=e.children;return Object(B.jsx)("div",{className:"main-wrapper "+(t||""),children:c})},Q=c(5),z=function(e){var t,c=e.product,a=e.usCurrency,s=Object(i.b)();return Object(B.jsxs)("div",{className:"watch-block",children:[Object(B.jsx)(W.b,{to:"/products/".concat(c.id),className:"watch-image-link",children:Object(B.jsx)("img",{src:c.main_image,alt:""})}),Object(B.jsxs)("div",{className:"watch-details",children:[Object(B.jsx)("div",{className:"brand__watch",children:Object(B.jsx)("span",{className:"brand-name__watch",children:c.brand})}),Object(B.jsx)(W.b,{to:"/products/".concat(c.id),children:Object(B.jsx)("div",{className:"name",children:Object(B.jsx)("span",{className:"watch-name",children:(t=c.name,t.length>29?"".concat(t.substring(0,29),"..."):t)})})}),Object(B.jsx)(W.b,{to:"/products/".concat(c.id),children:Object(B.jsx)("div",{className:"price",children:Object(B.jsx)("span",{className:"watch-price",children:Object(B.jsx)("span",{className:"full-price",children:a.format(c.price)})})})})]}),Object(B.jsx)("div",{className:"add-to-cart",onClick:function(){return s(O(c))},children:"Add to cart"})]})},H=function(e){var t=e.page,c=e.children;return Object(B.jsx)("div",{className:"main-content "+(t||""),children:c})};var J=function(){var e=Object(a.useState)(""),t=Object(Q.a)(e,2),c=t[0],s=t[1],n=Object(R.m)();return Object(B.jsxs)("form",{className:"search",onSubmit:function(e){e.preventDefault(),c.trim()?n("/search/".concat(c)):n("/")},children:[Object(B.jsx)("input",{type:"text",placeholder:"Search",name:"query",onChange:function(e){return s(e.target.value)}}),Object(B.jsx)("button",{type:"submit",children:Object(B.jsx)("i",{className:"fal fa-search"})})]})},K=function(){var e=Object(R.m)(),t=Object(a.useState)(!1),c=Object(Q.a)(t,2),s=c[0],n=c[1],r=Object(a.useRef)(),j=Object(i.b)(),l=Object(i.c)(N),d=Object(i.c)(D),u=function(e){r.current&&!r.current.contains(e.target)&&n(!1)};return Object(a.useEffect)((function(){return document.addEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}),[]),Object(B.jsx)("div",{className:"nav",children:Object(B.jsxs)("div",{className:"centered-nav",children:[Object(B.jsx)("div",{className:"left-nav",children:Object(B.jsx)(W.b,{to:"/",children:Object(B.jsxs)("div",{className:"brand",children:[Object(B.jsx)("span",{className:"brand-name",children:"ShoppAWatch"}),Object(B.jsx)("span",{className:"brand-end-period"})]})})}),Object(B.jsx)(J,{}),Object(B.jsxs)("div",{className:"right-nav",children:[Object(B.jsx)("div",{className:"cart-icon",children:Object(B.jsxs)(W.b,{to:"/cart",children:[Object(B.jsx)("span",{className:"cart-icon-badge",children:l.total_items||0}),Object(B.jsx)("i",{className:"fal fa-shopping-cart"})]})}),"NOT_LOGGED_IN"===d?Object(B.jsx)("div",{class:"signin-text",children:Object(B.jsx)(W.b,{to:"/signin",children:"Sign in"})}):Object(B.jsxs)("div",{className:"dropdown",ref:r,children:[Object(B.jsx)("div",{className:"username-icon",onClick:function(e){n(!s)},children:Object(B.jsx)("i",{className:"fal fa-user-circle"})}),s&&Object(B.jsx)("div",{className:"dropdown-content",children:Object(B.jsxs)("div",{onClick:function(){b.a.delete("".concat(h.logOut),{withCredentials:!0}).then((function(t){j(F()),j(v(t.data.cart)),e("/signin")})).catch((function(e){console.log("logout error",e)}))},className:"dropdown-link",children:[Object(B.jsx)("i",{class:"fal fa-sign-out"}),Object(B.jsx)("span",{children:"Signout"})]})})]})]})]})})},X=function(){return Object(B.jsx)("div",{className:"footer-wrapper",children:Object(B.jsx)("div",{className:"footer-content",children:Object(B.jsx)("span",{className:"copyright",children:"Copyright 2021 \xa9 ShoppAWatch"})})})},Y=function(e){var t=e.usCurrency,c=Object(a.useState)([]),s=Object(Q.a)(c,2),n=s[0],r=s[1],j=(Object(i.c)(g),function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(h.products);case 2:t=e.sent,c=t.data,r(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){j()}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(K,{}),Object(B.jsxs)(H,{children:[Object(B.jsx)("div",{className:"page-heading",children:Object(B.jsx)("h2",{children:"Shop"})}),Object(B.jsx)("div",{className:"watches-container",children:n.map((function(e){return Object(B.jsx)(z,{product:e,usCurrency:t},e.id)}))})]}),Object(B.jsx)(X,{})]})},$=function(e){var t=e.product,c=t.description.specs;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("p",{children:t.description.main}),Object(B.jsx)("ul",{children:c.map((function(e){return Object(B.jsx)("li",{children:e})}))}),Object(B.jsx)("p",{children:t.description.details})]})},V=c(20),Z=c.n(V),ee=function(e){var t=e.usCurrency,c=Object(R.o)().id,s=Object(a.useState)({}),n=Object(Q.a)(s,2),r=n[0],j=n[1],l=Object(i.c)(g),o=Object(i.b)();return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(h.products).concat(c));case 2:t=e.sent,a=t.data,j(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(a.useEffect)((function(){o(f(1)),window.scrollTo(0,0)}),[]),r.description?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(K,{}),Object(B.jsx)(H,{page:"product-page",children:Object(B.jsxs)("div",{className:"single-product-layout",children:[Object(B.jsxs)("div",{className:"top-watch-block__single",children:[Object(B.jsx)("div",{className:"leftside-single-block",children:Object(B.jsx)("img",{src:r.main_image,alt:""})}),Object(B.jsxs)("div",{className:"rightside-single-block",children:[Object(B.jsxs)("div",{className:"top-rightside-single-block",children:[Object(B.jsx)("div",{className:"name",children:Object(B.jsx)("span",{className:"watch-name",children:r.name})}),Object(B.jsx)("div",{className:"price",children:Object(B.jsx)("span",{className:"watch-price",children:Object(B.jsx)("span",{className:"full-price",children:t.format(r.price)})})}),Object(B.jsx)("div",{className:"description",children:Object(B.jsx)("p",{children:r.description.summary})})]}),Object(B.jsx)("hr",{}),Object(B.jsxs)("div",{className:"bottom-rightside-single-block",children:[Object(B.jsxs)("div",{className:"quantity__cart",children:[Object(B.jsx)("span",{className:"decrement",onClick:function(){l>1&&o(f(l-1))},children:Object(B.jsx)("i",{className:"far fa-minus"})}),Object(B.jsx)("input",{type:"number",className:"quantity-count-input",value:l,size:"4",onChange:function(e){return function(e){o(f(e.target.valueAsNumber||e.target.value))}(e)}}),Object(B.jsx)("span",{className:"increment",onClick:function(){l>=1?o(f(l+1)):"string"===typeof l&&o(f(1))},children:Object(B.jsx)("i",{className:"far fa-plus"})})]}),Object(B.jsx)("div",{className:"add-to-cart-button",onClick:function(){o(O(r))},children:Object(B.jsx)("span",{children:"Add To Cart"})})]})]})]}),Object(B.jsx)("div",{className:"divider"}),Object(B.jsx)("div",{className:"bottom-watch-block__single",children:Object(B.jsxs)("div",{className:"tabs",children:[Object(B.jsxs)("div",{className:"tabs-list",children:[Object(B.jsx)("span",{className:"tabs-list-item selected",children:"Description"}),Object(B.jsx)("span",{className:"tabs-list-item",children:"Reviews(0)"})]}),Object(B.jsx)("div",{className:"tab-content",children:Object(B.jsx)($,{product:r},r.id)})]})})]})}),Object(B.jsx)(X,{})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(K,{}),Object(B.jsx)(H,{children:Object(B.jsx)("div",{className:"loader-spinner",children:Object(B.jsx)(Z.a,{type:"TailSpin",color:"Gray",height:100,width:100,timeout:3e3})})}),Object(B.jsx)(X,{})]})},te=c(21),ce=function(e){var t=e.item,c=e.usCurrency,s=Object(a.useState)(t.quantity),n=Object(Q.a)(s,2),r=n[0],j=n[1],l=Object(i.b)(),o=Object(te.debounce)(function(){var e=Object(u.a)(d.a.mark((function e(c){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(h.updateItem),{cart_item_id:t.id,new_quantity:c});case 2:a=e.sent,l(v(a.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),10),O=function(){var e=Object(u.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(h.removeItem),{data:{cart_item_id:t.id}});case 2:c=e.sent,l(v(c.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o(r)}),[r]),Object(B.jsxs)("div",{className:"watch-block__cart",children:[Object(B.jsxs)("div",{className:"watch-details-left",children:[Object(B.jsx)("img",{src:t.main_image,alt:""}),Object(B.jsx)("div",{className:"name__cart",children:Object(B.jsx)("span",{className:"watch-name__cart",children:t.name})})]}),Object(B.jsxs)("div",{className:"watch-details-right",children:[Object(B.jsxs)("div",{className:"watch-details mobile",children:[Object(B.jsx)("div",{className:"name__cart",children:Object(B.jsx)("span",{className:"watch-name__cart",children:t.name})}),Object(B.jsx)("div",{className:"price__cart",children:Object(B.jsxs)("span",{className:"watch-price__cart",children:["$",t.total_price]})})]}),Object(B.jsxs)("div",{className:"quantity__cart",children:[Object(B.jsx)("span",{className:"decrement",onClick:function(){return o(void((e=r)>1&&j(e-1)));var e},children:Object(B.jsx)("i",{className:"far fa-minus"})}),Object(B.jsx)("input",{type:"number",className:"quantity-count-input",value:r,size:"4",min:"1",onChange:function(e){return j(e.target.value)}}),Object(B.jsx)("span",{className:"increment",onClick:function(){return o(void j(Number(r)+1))},children:Object(B.jsx)("i",{className:"far fa-plus"})})]}),Object(B.jsx)("div",{className:"bigger-screen price__cart",children:Object(B.jsx)("span",{className:"watch-price__cart",children:c.format(t.total_price)})})]}),Object(B.jsx)("div",{className:"delete-watch",onClick:function(){return O()},children:Object(B.jsx)("span",{children:Object(B.jsx)("i",{className:"fal fa-times mobile"})})})]})},ae=function(e){var t=e.usCurrency,c=Object(i.c)(N),a=Object(i.c)(D),s=c.cart_items,n=Object(te.sortBy)(s,(function(e){return e.created_at}));return s?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(K,{}),Object(B.jsxs)(H,{page:"cart",children:[Object(B.jsx)("div",{className:"cart-heading",children:Object(B.jsx)("h2",{children:"Cart"})}),0===s.length?Object(B.jsx)("div",{className:"empty-cart",children:Object(B.jsx)("p",{className:"empty-cart-text",children:"Your ShoppAWatch Cart is empty"})}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"watches-container__cart",children:n.map((function(e){return Object(B.jsx)(ce,{item:e,usCurrency:t},e.id)}))}),Object(B.jsx)("div",{className:"checkout-wrapper",children:Object(B.jsxs)("div",{className:"checkout",children:[Object(B.jsxs)("div",{className:"subtotal-amount",children:[Object(B.jsx)("span",{className:"subtotal-text",children:"Subtotal"}),Object(B.jsx)("span",{className:"subtotal-price",children:t.format(c.total_price)})]}),Object(B.jsxs)("div",{className:"delivery-amount",children:[Object(B.jsx)("span",{className:"delivery-text",children:"Delivery"}),Object(B.jsx)("span",{className:"delivery-price",children:"Free"})]}),Object(B.jsxs)("div",{className:"total-amount",children:[Object(B.jsx)("span",{className:"total-text",children:"Total"}),Object(B.jsx)("span",{className:"total-price",children:t.format(c.total_price)})]}),a===w?Object(B.jsx)(W.b,{to:"/checkout",children:Object(B.jsx)("div",{className:"checkout-button",children:Object(B.jsx)("span",{children:"Checkout"})})}):Object(B.jsx)(W.b,{to:"/signin",children:Object(B.jsx)("div",{className:"checkout-button",children:Object(B.jsx)("span",{children:"Checkout"})})})]})})]})]}),Object(B.jsx)(X,{})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(K,{}),Object(B.jsx)(H,{children:Object(B.jsx)("div",{className:"loader-spinner",children:Object(B.jsx)(Z.a,{type:"TailSpin",color:"Gray",height:100,width:100,timeout:3e3})})}),Object(B.jsx)(X,{})]})},se=function(){var e=Object(i.b)(),t=Object(R.m)(),c=Object(a.useState)(""),s=Object(Q.a)(c,2),n=s[0],r=s[1],j=Object(a.useState)(""),l=Object(Q.a)(j,2),d=l[0],u=l[1],o=Object(a.useState)(""),b=Object(Q.a)(o,2),h=b[0],O=b[1],m=Object(i.c)(D),p=Object(i.c)(G);return Object(a.useEffect)((function(){m===w&&t("/")}),[m]),Object(a.useEffect)((function(){e(A(""))}),[]),Object(B.jsx)(U,{page:"sign-up-page",children:Object(B.jsxs)("div",{className:"sign-up-page-content",children:[Object(B.jsxs)(W.b,{to:"/",className:"brand",children:[Object(B.jsx)("span",{className:"brand-name",children:"ShoppAWatch"}),Object(B.jsx)("span",{className:"brand-end-period"})]}),Object(B.jsx)("h2",{children:"Sign up for an account"}),""!==p&&Object(B.jsx)("p",{class:"error",children:p}),Object(B.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e(S({name:n,email:d,password:h})),e(A(""))}(t)},children:[Object(B.jsxs)("div",{className:"input-container",children:[Object(B.jsx)("i",{className:"fal fa-user"}),Object(B.jsx)("input",{type:"text",name:"name",className:"text-input",placeholder:"Name",value:n,onChange:function(e){return r(e.target.value)},required:!0})]}),Object(B.jsxs)("div",{className:"input-container",children:[Object(B.jsx)("i",{className:"fal fa-envelope"}),Object(B.jsx)("input",{type:"email",name:"email",className:"email-input",placeholder:"Email",value:d,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(B.jsxs)("div",{className:"input-container",children:[Object(B.jsx)("i",{className:"fal fa-lock-alt"}),Object(B.jsx)("input",{type:"password",name:"password",className:"password-input",placeholder:"Password",value:h,onChange:function(e){return O(e.target.value)},required:!0})]}),Object(B.jsx)("input",{type:"submit",value:"Sign up",className:"sign-up-button"})]}),Object(B.jsx)("div",{className:"auth-link",children:Object(B.jsxs)("p",{children:["Already have an account? ",Object(B.jsx)(W.b,{to:"/signin",children:"Sign in"})]})})]})})},ne=function(){var e=Object(a.useState)(""),t=Object(Q.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),r=Object(Q.a)(n,2),j=r[0],l=r[1],d=Object(i.b)(),u=Object(R.m)(),o=Object(i.c)(D),b=Object(i.c)(G);return Object(a.useEffect)((function(){o===w&&u(-1)}),[o]),Object(a.useEffect)((function(){d(A(""))}),[]),Object(B.jsx)(U,{page:"sign-in-page",children:Object(B.jsxs)("div",{className:"sign-in-page-content",children:[Object(B.jsxs)(W.b,{to:"/",className:"brand",children:[Object(B.jsx)("span",{className:"brand-name",children:"ShoppAWatch"}),Object(B.jsx)("span",{className:"brand-end-period"})]}),Object(B.jsx)("h2",{children:"Sign in to your account"}),""!==b&&Object(B.jsx)("p",{class:"error",children:b}),Object(B.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),d(C({email:c,password:j})),d(A(""))}(e)},children:[Object(B.jsxs)("div",{className:"input-container",children:[Object(B.jsx)("i",{className:"fal fa-envelope"}),Object(B.jsx)("input",{type:"email",name:"email",className:"email-input",placeholder:"Email",value:c,onChange:function(e){return s(e.target.value)},required:!0})]}),Object(B.jsxs)("div",{className:"input-container",children:[Object(B.jsx)("i",{className:"fal fa-lock-alt"}),Object(B.jsx)("input",{type:"password",name:"password",className:"password-input",placeholder:"Password",value:j,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(B.jsx)("input",{type:"submit",value:"Sign in",className:"sign-in-button"})]}),Object(B.jsx)("div",{className:"auth-link",children:Object(B.jsxs)("p",{children:["New to ShoppAWatch? ",Object(B.jsx)(W.b,{to:"/signup",children:"Sign up"})]})})]})})},re=function(e){var t=e.item,c=e.usCurrency;return Object(B.jsxs)("div",{class:"watch-order-details",children:[Object(B.jsxs)("div",{class:"watch-order-details-left",children:[Object(B.jsx)("div",{class:"watch-name__checkout",children:t.name}),Object(B.jsxs)("div",{class:"quantity__checkout",children:[Object(B.jsx)("span",{class:"quantity-text"}),"Quantity:",Object(B.jsx)("span",{class:"quantity-count__checkout",children:t.quantity})]})]}),Object(B.jsx)("div",{class:"price__checkout",children:Object(B.jsxs)("span",{class:"watch-price__checkout",children:[c.format(t.price)," "]})})]})},ie=function(e){var t=e.usCurrency,c=Object(i.c)(N),a=c.cart_items,s=Object(te.sortBy)(a,(function(e){return e.created_at}));return a?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"nav",children:Object(B.jsxs)("div",{className:"centered-nav",children:[Object(B.jsx)("div",{className:"left-nav",children:Object(B.jsx)(W.b,{to:"/",children:Object(B.jsxs)("div",{className:"brand",children:[Object(B.jsx)("span",{className:"brand-name",children:"ShoppAWatch"}),Object(B.jsx)("span",{className:"brand-end-period"})]})})}),Object(B.jsx)("div",{className:"right-nav",children:Object(B.jsx)("div",{className:"secure-icon",children:Object(B.jsx)("i",{className:"fas fa-lock-alt"})})})]})}),Object(B.jsx)(H,{page:"checkout-page",children:Object(B.jsxs)("div",{className:"checkout-card",children:[Object(B.jsx)("h1",{children:"Checkout"}),Object(B.jsxs)("div",{className:"order-summary",children:[Object(B.jsx)("h2",{children:"Order summary"}),s.map((function(e){return Object(B.jsx)(re,{item:e,usCurrency:t},e.id)})),Object(B.jsxs)("div",{class:"total-amount__checkout",children:[Object(B.jsx)("span",{className:"total-text__checkout",children:"Total"}),Object(B.jsx)("span",{className:"total-price__checkout",children:t.format(c.total_price)})]}),Object(B.jsx)("hr",{}),Object(B.jsxs)("div",{className:"checkout-card-bottom",children:[Object(B.jsx)("h2",{children:"Payment method"}),Object(B.jsx)("div",{className:"payment-method",children:Object(B.jsx)("span",{children:"Method: PayPal"})})]}),Object(B.jsxs)("div",{className:"checkout-actions",children:[Object(B.jsx)(W.b,{to:"/cart",children:Object(B.jsx)("div",{className:"back-button",children:Object(B.jsx)("span",{children:"Back"})})}),Object(B.jsx)("div",{className:"pay-button",children:Object(B.jsxs)("span",{children:["Pay ",t.format(c.total_price)]})})]})]})]})}),Object(B.jsx)(X,{})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{className:"nav",children:Object(B.jsxs)("div",{className:"centered-nav",children:[Object(B.jsx)("div",{className:"left-nav",children:Object(B.jsxs)("div",{className:"brand",children:[Object(B.jsx)("span",{className:"brand-name",children:"ShoppAWatch"}),Object(B.jsx)("span",{className:"brand-end-period"})]})}),Object(B.jsx)("div",{className:"right-nav",children:Object(B.jsx)("div",{className:"secure-icon",children:Object(B.jsx)("i",{className:"fas fa-lock-alt"})})})]})}),Object(B.jsx)(H,{children:Object(B.jsx)("div",{className:"loader-spinner",children:Object(B.jsx)(Z.a,{type:"TailSpin",color:"Gray",height:100,width:100,timeout:3e3})})}),Object(B.jsx)(X,{})]})},je=function(e){var t=e.usCurrency,c=Object(R.o)().keyword,s=Object(a.useState)([]),n=Object(Q.a)(s,2),r=n[0],i=n[1],j=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(h.search),{params:{query:c}});case 2:t=e.sent,a=t.data,i(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[c]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(K,{}),Object(B.jsxs)(H,{children:[Object(B.jsx)("div",{className:"page-heading",children:Object(B.jsx)("h2",{children:"Shop"})}),Object(B.jsx)("div",{className:"watches-container",children:r.map((function(e){return Object(B.jsx)(z,{product:e,usCurrency:t},e.id)}))})]}),Object(B.jsx)(X,{})]})};var le=function(){var e=Object(i.c)(D),t=Object(i.b)(),c=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(a.useEffect)((function(){t(m()),t(f(1)),b.a.get("".concat(h.loggedIn),{withCredentials:!0}).then((function(c){c.data.logged_in&&e===_?(t(T(w)),t(L(c.data.user))):c.data.logged_in||e!==w||(t(T(_)),t(L({})))})).catch((function(e){console.log("check login error",e)}))}),[]),Object(B.jsx)(W.a,{children:Object(B.jsx)(U,{children:Object(B.jsxs)(R.d,{children:[Object(B.jsx)(R.b,{exact:!0,path:"/",element:Object(B.jsx)(Y,{usCurrency:c})}),Object(B.jsx)(R.b,{exact:!0,path:"/search/:keyword",element:Object(B.jsx)(je,{usCurrency:c})}),Object(B.jsx)(R.b,{path:"/products/:id",element:Object(B.jsx)(ee,{usCurrency:c})}),Object(B.jsx)(R.b,{path:"/cart",element:Object(B.jsx)(ae,{usCurrency:c})}),Object(B.jsx)(R.b,{path:"/checkout",element:e===w?Object(B.jsx)(ie,{usCurrency:c}):Object(B.jsx)(R.a,{to:"/signin"})}),Object(B.jsx)(R.b,{path:"/signup",element:Object(B.jsx)(se,{})}),Object(B.jsx)(R.b,{path:"/signin",element:Object(B.jsx)(ne,{})})]})})})},de=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};c(99);r.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(i.a,{store:P,children:Object(B.jsx)(le,{})})}),document.getElementById("root")),de()},99:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.4ddc9855.chunk.js.map