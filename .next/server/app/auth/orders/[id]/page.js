(()=>{var e={};e.id=975,e.ids=[975],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},65207:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>l});var s=t(70260),i=t(28203),n=t(25155),a=t.n(n),d=t(67292),o={};for(let e in d)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);t.d(r,o);let l=["",{children:["auth",{children:["orders",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,59340)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/orders/[id]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,95521)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,50042)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/not-found.tsx"]}],c=["/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/orders/[id]/page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/auth/orders/[id]/page",pathname:"/auth/orders/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},62592:(e,r,t)=>{"use strict";t.r(r),t.d(r,{"00bcebb40af748360d3173b1776dfd0799709ea208":()=>s.C,"605b65ca41235cba380fa2425f8a6273be12d9bf85":()=>s.J});var s=t(7939)},55482:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,13219,23)),Promise.resolve().then(t.t.bind(t,34863,23)),Promise.resolve().then(t.t.bind(t,25155,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,96313,23)),Promise.resolve().then(t.t.bind(t,48530,23)),Promise.resolve().then(t.t.bind(t,88921,23))},23938:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,66959,23)),Promise.resolve().then(t.t.bind(t,33875,23)),Promise.resolve().then(t.t.bind(t,88903,23)),Promise.resolve().then(t.t.bind(t,84178,23)),Promise.resolve().then(t.t.bind(t,86013,23)),Promise.resolve().then(t.t.bind(t,87190,23)),Promise.resolve().then(t.t.bind(t,61365,23))},82822:()=>{},68910:()=>{},75506:(e,r,t)=>{Promise.resolve().then(t.bind(t,14192))},64890:(e,r,t)=>{Promise.resolve().then(t.bind(t,72846))},96487:()=>{},78335:()=>{},72846:(e,r,t)=>{"use strict";t.d(r,{default:()=>p});var s=t(45512),i=t(26008),n=t(79334),a=t(26248);let d=(0,a.createServerReference)("00bcebb40af748360d3173b1776dfd0799709ea208",a.callServer,void 0,a.findSourceMapURL,"signOut");function o(){return(0,s.jsx)("form",{action:d,className:"bg-[#2d2d2d] h-[35px] flex items-center justify-center text-white rounded-[5px] px-[15px]",children:(0,s.jsx)("button",{type:"submit",children:" Sign out"})})}var l=t(58009),c=t(68531),u=t(77612),h=t(74587);function p(){let e=[{label:"Dashboard",href:"/auth/dashboard"},{label:"Invoices",href:"/auth/invoices"},{label:"Projects",href:"/auth/projects"},{label:"Orders",href:"/auth/orders"},{label:"Tasks",href:"/auth/tasks"},{label:"Users",href:"/auth/users"},{label:"Company",href:"/auth/company"}],r=(0,n.usePathname)();function t(e){let r=e.match(/^\/[^/]+\/[^/]+/);return r?r[0]:null}let[a,d]=(0,l.useState)(!1),p={hidden:{height:"0"},visible:{height:"100vh",transition:{type:"tween",ease:(0,h.A)(.65,0,.35,1),duration:1.2}},exit:{y:"-100vh",height:0,transition:{type:"tween",duration:1,delay:.5}}},f={hidden:{opacity:0,y:"50%"},visible:{opacity:1,y:0,transition:{duration:.5,ease:(0,h.A)(.65,0,.35,1)}},exit:{opacity:0,y:"50%",transition:{duration:.1,ease:(0,h.A)(.65,0,.35,1)}}};return(0,s.jsxs)("div",{className:"w-screen h-[100px] bg-white fixed top-0 left-0 z-10 flex items-center px-[30px] gap-[100px]",children:[(0,s.jsx)("div",{className:"z-50",children:(0,s.jsx)(i.default,{href:"/auth/dashboard",className:"font-[600] text-[20px]",children:"VOUY"})}),(0,s.jsx)("div",{className:"hidden lg:flex gap-[25px]",children:e.map((e,n)=>(0,s.jsx)(i.default,{style:{color:e.href===t(r)?"#000000":"#979797"},href:e.href,children:e.label},n))}),(0,s.jsx)("div",{className:"hidden lg:flex w-full mb-[15px] justify-end",children:(0,s.jsx)(o,{})}),(0,s.jsx)("div",{className:"w-full justify-end flex z-50 lg:hidden mr-[10px]",onClick:()=>{d(!a)},children:a&&(0,s.jsx)("span",{children:"Close"})||(0,s.jsx)("span",{children:"Menu"})}),(0,s.jsx)(c.N,{children:a&&(0,s.jsx)(u.P.div,{variants:p,initial:"hidden",animate:"visible",exit:"exit",className:"overflow- bg-white z-0 top-0 left-0 h-screen w-screen fixed flex flex-col ",children:(0,s.jsx)("div",{className:"w-full flex items-center h-full",children:(0,s.jsx)(u.P.div,{variants:{hidden:{},visible:{transition:{staggerChildren:.2,delayChildren:.9}},exit:{transition:{staggerChildren:.05,staggerDirection:-1}}},initial:"hidden",animate:"visible",exit:"exit",className:"w-full  flex flex-col pl-[40px] text-[20px] ",children:e.map((e,n)=>(0,s.jsx)(u.P.span,{variants:f,children:(0,s.jsx)(i.default,{href:e.href,onClick:()=>{d(!1)},style:{color:e.href===t(r)?"#000000":"#979797"},children:e.label})},n))})})})})]})}},7939:(e,r,t)=>{"use strict";t.d(r,{J:()=>c,C:()=>u});var s=t(21590);t(70376);var i=t(99184),n=t(16500);let a=(0,n.Ik)({email:(0,n.Yj)({required_error:"Email is required"}).min(1,"Email is required").email("Invalid email"),password:(0,n.Yj)({required_error:"Password is required"}).min(1,"Password is required")});var d=t(6439),o=t(99344);let l=process.env.BASE_URL;async function c(e,r){let t=a.safeParse({email:r.get("email"),password:r.get("password")});if(!t.success)return{errors:t.error?.flatten().fieldErrors};let s=await fetch(l+"/api/auth",{method:"POST",headers:{"Content-Type":"application/jsop"},body:JSON.stringify(t.data)}).then(e=>e.json());await (0,d.jw)(s.id,s.organizationId),(0,i.redirect)("/auth/dashboard")}async function u(){return await (0,d.ME)(),(0,i.redirect)("/signin")}(0,o.D)([c,u]),(0,s.A)(c,"605b65ca41235cba380fa2425f8a6273be12d9bf85",null),(0,s.A)(u,"00bcebb40af748360d3173b1776dfd0799709ea208",null)},95521:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(62740),i=t(14192);async function n({children:e}){return(0,s.jsxs)("div",{children:[(0,s.jsx)(i.default,{}),e]})}},59340:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(62740);async function i(){return(0,s.jsx)("div",{className:"h-screen w-screen pt-[100px]"})}},71354:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l,metadata:()=>o});var s=t(62740),i=t(52067),n=t.n(i),a=t(4738),d=t.n(a);t(61135);let o={title:"VOUY BUSINESS",description:"VOUY Business manager"};function l({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${n().variable} ${d().variable} antialiased`,children:e})})}},6439:(e,r,t)=>{"use strict";t.d(r,{ME:()=>u,Yc:()=>l,jw:()=>c});var s=t(42385),i=t(41231),n=t(13194);let a=process.env.AUTH_SECRET,d=new TextEncoder().encode(a);async function o(e){return new i.P(e).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("7d").sign(d)}async function l(e=""){try{let{payload:r}=await (0,n.V)(e,d,{algorithms:["HS256"]});return r}catch(e){console.log("Failed to verify session")}}async function c(e,r){let t=new Date(Date.now()+6048e5),i=await (0,s.UL)(),n=await o({userId:e,organizationId:r,expiresAt:t});i.set("session",n,{httpOnly:!0,secure:!0,expires:t,sameSite:"lax",path:"/"})}async function u(){(await (0,s.UL)()).delete("session")}},50042:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(62740);function i(){return(0,s.jsx)("div",{className:"overflow-hidden h-screen w-screen flex items-center bg-white justify-center text-[20px] font-[500]",children:(0,s.jsx)("p",{children:"Page not found"})})}},14192:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/pawelniedzwiedz/Desktop/vouy-business/src/components/Header/Header.tsx","default")},61135:()=>{}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[989,405,892,200],()=>t(65207));module.exports=s})();