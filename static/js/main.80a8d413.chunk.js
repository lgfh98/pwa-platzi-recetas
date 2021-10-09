(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(20),c=n.n(i),s=(n(30),n(7)),o=n(8),u=n(10),l=n(9),d=n(3),h=n(13),p=n(4),j=n.n(p),f=n(11),b=n(14),v=(n(34),"https://www.themealdb.com/api/json/v1/1"),m={getLatest:function(){return O.apply(this,arguments)},getRecipe:function(e){return g.apply(this,arguments)}};function O(){return(O=Object(f.a)(j.a.mark((function e(){var t,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/search.php?f=b"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=n.meals.map((function(e){return x(e)})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(f.a)(j.a.mark((function e(t){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/lookup.php?i=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:if((r=e.sent).meals){e.next=8;break}return e.abrupt("return",null);case 8:return a=x(r.meals.shift()),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t={};t.id=e.idMeal,t.name=e.strMeal,t.category=e.strCategory,t.origin=e.strArea,t.instructions=e.strInstructions.split("\n").filter((function(e){return""!==e.trim()})),t.thumbnail=e.strMealThumb,t.tags=e.strTags?e.strTags.split(","):[],t.youtube=e.strYoutube,t.ingredients=[],t.url=e.strSource,t.dateModified=e.dateModified;for(var n=1;n<=20;n++)""!==e["strIngredient".concat(n)]&&""!==e["strMeasure".concat(n)]&&t.ingredients.push({ingredient:e["strIngredient".concat(n)],measure:e["strMeasure".concat(n)]});return t}var w=n(1),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={recipes:null,isLoading:!0},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getLatest();case 3:t=e.sent,e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),t=null;case 10:this.setState({recipes:t,isLoading:!1});case 11:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.recipes;return e.isLoading?Object(w.jsx)("div",{className:"message",children:"Cargando..."}):Object(w.jsxs)("div",{children:[Object(w.jsx)(b.a,{children:Object(w.jsx)("title",{children:"Recetas"})}),Object(w.jsx)("div",{className:"recipes",children:t&&t.map((function(e){return Object(w.jsxs)(h.a,{to:"/recipe/".concat(e.id),className:"recipe",children:[Object(w.jsx)("span",{className:"bg",style:{backgroundImage:"url(".concat(e.thumbnail,")")}}),Object(w.jsx)("span",{className:"info",children:Object(w.jsx)("h2",{children:e.name})})]},e.id)}))})]})}}]),n}(a.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.ingredients;return Object(w.jsxs)("div",{className:"ingredients",children:[Object(w.jsx)("h2",{children:"Ingredients"}),Object(w.jsx)("ul",{children:e.map((function(e,t){return Object(w.jsxs)("li",{children:[e.ingredient,": ",e.measure]},t)}))})]})}}]),n}(a.a.Component),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.instructions;return Object(w.jsxs)("div",{className:"instructions",children:[Object(w.jsx)("h2",{children:"Instructions"}),Object(w.jsx)("div",{className:"steps",children:e.map((function(e,t){return Object(w.jsxs)("div",{className:"step",children:[Object(w.jsx)("div",{className:"number",children:t+1}),Object(w.jsx)("div",{className:"text",children:e})]},t)}))})]})}}]),n}(a.a.Component),L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).share=function(e){if(e.preventDefault(),navigator.share){var t=r.state.recipe;navigator.share({title:" ".concat(t.name),text:"Receta deliciosa",url:document.location.href}).then((function(){return console.log("Contenido compartido")}))}else alert("Tu navegador no soporta Web Share Api")},r.state={recipe:null,isLoading:!0},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,m.getRecipe(this.props.match.params.recipeId);case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t=null;case 10:this.setState({recipe:t,isLoading:!1});case 11:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.recipe;return e.isLoading?Object(w.jsx)("div",{className:"message",children:"Cargando..."}):null===t?Object(w.jsx)("div",{className:"message",children:"Hubo un problema :("}):Object(w.jsxs)("div",{className:"Recipe",children:[Object(w.jsx)(b.a,{children:Object(w.jsx)("title",{children:t.name})}),Object(w.jsx)("div",{className:"hero",style:{backgroundImage:"url(".concat(t.thumbnail,")")}}),Object(w.jsxs)("div",{className:"title",children:[Object(w.jsxs)("div",{className:"info",children:[Object(w.jsx)("h1",{children:t.name}),Object(w.jsx)("p",{children:t.origin})]}),Object(w.jsx)("div",{children:Object(w.jsx)("a",{href:"/",onClick:this.share,children:"Compartir"})})]}),Object(w.jsx)(y,{ingredients:t.ingredients}),Object(w.jsx)(N,{instructions:t.instructions})]})}}]),n}(a.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).start=Object(f.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Notification"in window&&"serviceWorker"in navigator){e.next=2;break}return e.abrupt("return",alert("Tu browser no soporta notificaciones"));case 2:if("default"!==Notification.permission){e.next=5;break}return e.next=5,Notification.requestPermission();case 5:if("blocked"!==Notification.permission){e.next=7;break}return e.abrupt("return",alert("Bloqueaste las notificaciones :("));case 7:if("granted"===Notification.permission){e.next=9;break}return e.abrupt("return");case 9:t=r.state.timer,r.setState({timeLeft:t}),n=setInterval((function(){t-=1,r.setState({timeLeft:t}),t<=0&&(clearInterval(n),r.showNotification())}),1e3);case 12:case"end":return e.stop()}}),e)}))),r.showNotification=Object(f.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.getRegistration();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",alert("No hay un Service Worker :("));case 5:t.showNotification("Listo el timer!",{body:"Ding ding ding",vibrate:[1e3,500,1e3]});case 6:case"end":return e.stop()}}),e)}))),r.handleChange=function(e){r.setState({timer:e.target.value})},r.state={timer:3,timeLeft:0},r}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.timer,n=e.timeLeft;return Object(w.jsxs)("div",{className:"Timer",children:[Object(w.jsx)("div",{className:"name",children:"Timer"}),0===n?Object(w.jsxs)("div",{className:"center",children:[Object(w.jsx)("input",{type:"number",min:"0",max:"999",step:"1",value:t,onChange:this.handleChange}),Object(w.jsx)("button",{onClick:this.start,children:"Start"})]}):Object(w.jsxs)("div",{className:"timeLeft",children:[n,"s"]})]})}}]),n}(a.a.Component),S=n(25),I=function(){var e=Object(r.useState)(!navigator||navigator.onLine),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){return window.addEventListener("online",(function(){return a(!0)})),window.addEventListener("offline",(function(){return a(!1)})),function(){window.removeEventListener("online"),window.removeEventListener("offline")}}),[]),Object(w.jsx)(w.Fragment,{children:!n&&Object(w.jsx)("span",{children:"Offline"})})},W=(n(42),n(5)),T=n(15),M=Object(W.a)();T.a.initialize("UA-000000-01"),T.a.pageview(window.location.pathname+window.location.search),M.listen((function(e){T.a.pageview(window.location.pathname+window.location.search)}));var E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(w.jsx)(d.b,{history:M,children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("header",{children:[Object(w.jsxs)(h.a,{to:"/",children:["Recetas ",Object(w.jsx)(I,{})]}),Object(w.jsx)(h.a,{to:"/timer",className:"timerLink",children:"\u23f1"})]}),Object(w.jsxs)("main",{children:[Object(w.jsx)(d.a,{exact:!0,path:"/",component:k}),Object(w.jsx)(d.a,{path:"/recipe/:recipeId",component:L}),Object(w.jsx)(d.a,{path:"/timer",component:C})]})]})})}}]),n}(a.a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-platzi-recetas",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa-platzi-recetas","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):A(t,e)}))}}(),D()}},[[43,1,2]]]);
//# sourceMappingURL=main.80a8d413.chunk.js.map