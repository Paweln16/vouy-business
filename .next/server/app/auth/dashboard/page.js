(()=>{var e={};e.id=618,e.ids=[618],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},47349:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>x,pages:()=>d,routeModule:()=>c,tree:()=>p});var r=t(70260),a=t(28203),n=t(25155),l=t.n(n),i=t(67292),o={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(s,o);let p=["",{children:["auth",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,98867)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/dashboard/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,95521)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,50042)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/not-found.tsx"]}],d=["/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/dashboard/page.tsx"],x={require:t,loadChunk:()=>Promise.resolve()},c=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/auth/dashboard/page",pathname:"/auth/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},62592:(e,s,t)=>{"use strict";t.r(s),t.d(s,{"00bcebb40af748360d3173b1776dfd0799709ea208":()=>r.C,"605b65ca41235cba380fa2425f8a6273be12d9bf85":()=>r.J});var r=t(7939)},4643:(e,s,t)=>{Promise.resolve().then(t.bind(t,60963))},18715:(e,s,t)=>{Promise.resolve().then(t.bind(t,77831))},77831:(e,s,t)=>{"use strict";t.d(s,{default:()=>l});var r=t(45512),a=t(18028),n=t(58009);function l(){let[e,s]=(0,n.useState)({title:{text:"Acme's Inc Income"},data:[{month:"Jan",income:2.3},{month:"Feb",income:4.3},{month:"Mar",income:5.3},{month:"Apr",income:1.3},{month:"May",income:2.3},{month:"Jun",income:6.3},{month:"Jul",income:8.3},{month:"Sep",income:8.3},{month:"Oct",income:5.3},{month:"Nov",income:3.3},{month:"Dec",income:2.3}],series:[{type:"bar",xKey:"month",yKey:"income",yName:"Income"}]});return(0,r.jsx)("div",{className:"h-[50%] w-full border-[1px] rounded-[10px] p-[10px]",children:(0,r.jsx)(a.ui,{className:"h-full w-full",options:e})})}},60963:(e,s,t)=>{"use strict";t.d(s,{default:()=>r});let r=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/dashboard/Revenue/Revenue.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/dashboard/Revenue/Revenue.tsx","default")},98867:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d});var r=t(62740);function a({projects:e}){return(0,r.jsxs)("div",{className:"w-full h-[50%] border-[1px] rounded-[10px] p-[20px] flex flex-col",children:[(0,r.jsx)("span",{className:"text-[23px] font-[600]",children:"Last Projects"}),(0,r.jsxs)("div",{className:"w-full h-[50px] flex items-center justify-between text-[15px] font-[400] border-y-[1px] mt-[30px]",children:[(0,r.jsx)("span",{className:"w-[200px]",children:"STATUS"}),(0,r.jsx)("span",{className:"w-[200px]",children:"TITLE"}),(0,r.jsx)("span",{className:"w-[200px]",children:"DEADLINE"}),(0,r.jsx)("span",{className:"w-[200px]",children:"PRICE"})]}),(0,r.jsx)("div",{className:"w-full h-[70%] overflow-y-scroll",children:e.map((e,s)=>(0,r.jsxs)("div",{className:"flex justify-between h-[50px] w-full border-b-[1px] items-center",children:[(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.status}),(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.title}),(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.deadline}),(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.price})]},s))})]})}function n({orders:e}){return(0,r.jsxs)("div",{className:"w-full h-[50%] border-[1px] rounded-[10px] p-[20px] flex flex-col",children:[(0,r.jsx)("span",{className:"text-[23px] font-[600]",children:"Last Orders"}),(0,r.jsxs)("div",{className:"w-full h-[50px] flex items-center justify-between text-[15px] font-[400] border-y-[1px] mt-[30px]",children:[(0,r.jsx)("span",{className:"w-[200px]",children:"STATUS"}),(0,r.jsx)("span",{className:"w-[200px]",children:"TITLE"}),(0,r.jsx)("span",{className:"w-[200px]",children:"PRICE"})]}),(0,r.jsx)("div",{className:"w-full h-[70%] overflow-y-scroll",children:e.map((e,s)=>(0,r.jsxs)("div",{className:"flex justify-between h-[50px] w-full border-b-[1px] items-center",children:[(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.status}),(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.title}),(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.price})]},s))})]})}function l({tasks:e}){return(0,r.jsxs)("div",{className:"w-full h-[50%] border-[1px] rounded-[10px] p-[20px] flex flex-col",children:[(0,r.jsx)("span",{className:"text-[23px] font-[600]",children:"Tasks"}),(0,r.jsxs)("div",{className:"w-full h-[50px] flex items-center justify-between text-[15px] font-[400] border-y-[1px] mt-[30px]",children:[(0,r.jsx)("span",{className:"w-[200px]",children:"STATUS"}),(0,r.jsx)("span",{className:"w-[200px]",children:"TITLE"}),(0,r.jsx)("span",{className:"w-[200px]",children:"DEADLINE"}),(0,r.jsx)("span",{className:"w-[200px]",children:"PRICE"})]}),(0,r.jsx)("div",{className:"w-full h-[70%] overflow-y-scroll",children:e.map((e,s)=>(0,r.jsxs)("div",{className:"flex justify-between h-[50px] w-full border-b-[1px] items-center",children:[(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.status}),(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.title}),(0,r.jsx)("span",{className:"w-[200px] overflow-hidden text-nowrap text-ellipsis",children:e.deadline})]},s))})]})}var i=t(44512),o=t(71444),p=t(60963);async function d(){let e=await (0,i.UL)(),s=e.get("session")?.value,t=await (0,o.JQ)(s),d=await (0,o.WF)(s),x=await (0,o.x1)(s);return(0,r.jsxs)("div",{className:"w-screen h-screen pt-[100px] flex p-[30px] gap-[20px] justify-center overflow-hidden",children:[(0,r.jsxs)("div",{className:"w-[50%] h-full flex flex-col justify-center items-center gap-[20px]",children:[(0,r.jsx)(a,{projects:t}),(0,r.jsx)(n,{orders:d})]}),(0,r.jsxs)("div",{className:"h-full w-[50%] flex flex-col justify-center items-center gap-[20px]",children:[(0,r.jsx)(l,{tasks:x}),(0,r.jsx)(p.default,{})]})]})}}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[989,405,892,155,987,28,476],()=>t(47349));module.exports=r})();