(()=>{var e={};e.id=320,e.ids=[320],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},4573:e=>{"use strict";e.exports=require("node:buffer")},77598:e=>{"use strict";e.exports=require("node:crypto")},57975:e=>{"use strict";e.exports=require("node:util")},429:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>x,tree:()=>o});var a=t(70260),r=t(28203),l=t(25155),i=t.n(l),n=t(67292),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(s,d);let o=["",{children:["auth",{children:["tasks",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,40159)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/tasks/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,95521)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,50042)),"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/not-found.tsx"]}],p=["/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/tasks/page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/auth/tasks/page",pathname:"/auth/tasks",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},38274:(e,s,t)=>{"use strict";t.r(s),t.d(s,{"00bcebb40af748360d3173b1776dfd0799709ea208":()=>a.C,"603fa2992adc821d7917706c8e8947a7adccabc39e":()=>u,"605b65ca41235cba380fa2425f8a6273be12d9bf85":()=>a.J});var a=t(7939),r=t(21590);t(70376);var l=t(16500);let i=l.z.object({title:l.z.string().min(3,{message:"Title should be at least 3 characters"}),deadline:l.z.string().min(3,{message:"Deadline should be at least 3 characters"}),details:l.z.string().min(3,{message:"Details should be at least 3 characters"}),status:l.z.string()});var n=t(47735),d=t(42385),o=t(99184),p=t(53332),c=t(99344);let x=process.env.BASE_URL;async function u(e,s){let{isAuth:t}=await (0,p.g)();if(!t)return;let a=await (0,d.UL)(),r=a.get("session")?.value,l=i.safeParse({title:s.get("title"),deadline:s.get("deadline"),details:s.get("details"),status:s.get("status")});return l.success?(await fetch(x+"/api/tasks",{method:"POST",body:JSON.stringify(l.data),headers:{"Content-Type":"application/json",Authorization:`${r}`}})).ok?((0,n.revalidatePath)("/auth/tasks"),(0,o.redirect)("/auth/tasks")):{message:"Enter valid data"}:{errors:l.error?.flatten().fieldErrors}}(0,c.D)([u]),(0,r.A)(u,"603fa2992adc821d7917706c8e8947a7adccabc39e",null)},81637:(e,s,t)=>{Promise.resolve().then(t.bind(t,99845))},75557:(e,s,t)=>{Promise.resolve().then(t.bind(t,38497))},38497:(e,s,t)=>{"use strict";t.d(s,{default:()=>p});var a=t(45512),r=t(26008),l=t(58009),i=t(26248);let n=(0,i.createServerReference)("603fa2992adc821d7917706c8e8947a7adccabc39e",i.callServer,void 0,i.findSourceMapURL,"createTask");var d=t(19936);function o(){let[e,s,t]=(0,l.useActionState)(n,{errors:{title:[],deadline:[],details:[],status:[]},message:void 0});return(0,a.jsxs)("div",{className:"fixed  top-0 right-0 bg-white shadow-xl h-full w-[40%] p-[40px] flex flex-col gap-[20px]",children:[(0,a.jsx)("span",{className:"font-[600] text-[22px]",children:"Create task"}),(0,a.jsxs)("form",{action:s,className:"w-full flex flex-col gap-[15px]",children:[(0,a.jsxs)("div",{className:"h-[75px] w-full flex flex-col gap-[10px]",children:[(0,a.jsx)("span",{children:"Title"}),(0,a.jsx)("input",{className:"border-[1px] rounded-[10px] h-full pl-[10px]",type:"text",name:"title",id:""}),e?.errors?.title&&(0,a.jsx)("p",{children:e.errors.title})]}),(0,a.jsxs)("div",{className:"h-[75px] w-full flex flex-col gap-[10px]",children:[(0,a.jsx)("span",{children:"Deadline"}),(0,a.jsx)("input",{className:"border-[1px] rounded-[10px] h-full pl-[10px]",type:"text",name:"deadline",id:""}),e?.errors?.deadline&&(0,a.jsx)("p",{children:e.errors.deadline})]}),(0,a.jsxs)("div",{className:"h-[75px] w-full flex flex-col gap-[10px]",children:[(0,a.jsx)("span",{children:"Details"}),(0,a.jsx)("input",{className:"border-[1px] rounded-[10px] h-full pl-[10px]",type:"text",name:"details",id:""}),e?.errors?.details&&(0,a.jsx)("p",{children:e.errors.details})]}),(0,a.jsxs)("div",{className:"h-[75px] w-full flex flex-col gap-[10px]",children:[(0,a.jsx)("span",{children:"Status"}),(0,a.jsxs)("select",{className:"h-full w-full border-[1px] rounded-[10px]",name:"status",id:"",children:[(0,a.jsx)("option",{value:"In progress",children:"In progress"}),(0,a.jsx)("option",{value:"Completed",children:"Completed"})]}),e?.errors?.status&&(0,a.jsx)("p",{children:e.errors.status})]}),(0,a.jsxs)("div",{className:"h-[45px] w-full flex gap-[10px] mt-[20px]",children:[(0,a.jsx)("button",{type:"submit",className:"w-[50%] h-full rounded-[10px] bg-[#2d2d2d] text-white",children:"Create task"}),(0,a.jsx)("button",{className:"w-[50%] h-full rounded-[10px] ",type:"button",onClick:()=>{},children:"Cancel"})]})]}),t&&(0,a.jsx)(d.A,{message:"Creating task..."})]})}function p({tasks:e}){let[s,t]=(0,l.useState)("All"),[i,n]=(0,l.useState)(e),[d,p]=(0,l.useState)(""),[c,x]=(0,l.useState)(e),[u,h]=(0,l.useState)(!1);return(0,a.jsxs)("div",{className:"w-full h-full",children:[(0,a.jsx)("div",{className:"w-full h-[90%] flex flex-col mt-[40px]",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"w-full border-b-[1px] px-[20px] flex justify-between",children:[(0,a.jsx)("div",{className:"flex gap-[20px]",children:[{label:"All"},{label:"In progress"},{label:"Completed"},{label:"Pending"},{label:"Rejected"}].map((e,r)=>(0,a.jsxs)("button",{value:e.label,className:"h-[50px] flex flex-col justify-between",onClick:e=>{t(e.currentTarget.value)},children:[(0,a.jsx)("p",{children:e.label}),e.label===s&&(0,a.jsx)("div",{className:"h-[5px] w-full bg-[#2d2d2d] rounded-t-[3px]"})]},`f_${r}`))}),(0,a.jsxs)("div",{className:"gap-[20px] flex",children:[(0,a.jsx)("input",{className:"text-[#9ca3af] pl-[15px] bg-[#f5f5f5] h-[40px] w-[200px] rounded-[6px] outline-none",type:"text",onChange:e=>{p(e.currentTarget.value)},placeholder:"Search"}),(0,a.jsx)("button",{onClick:()=>{h(!u)},className:"text-white bg-[#2d2d2d] h-[40px] w-[200px] rounded-[6px] flex items-center justify-center",children:"Create task"})]})]}),(0,a.jsx)("div",{className:"w-full h-[50px] px-[20px] flex items-center justify-between border-b-[1px]",children:[{label:"STATUS"},{label:"TITLE"},{label:"DETAILS"},{label:"DEADLINE"}].map((e,s)=>(0,a.jsx)("p",{className:"w-[200px] text-[#2d2d2d] text-ellipsis text-nowrap overflow-hidden",children:e.label},`c_${s}`))}),(0,a.jsx)("div",{className:"h-[80%] w-full overflow-y-scroll grow",children:c.map((e,s)=>(0,a.jsxs)(r.default,{href:`/auth/tasks/${e.id}`,className:"w-full h-[50px] border-b-[1px] flex justify-between px-[20px] items-center",children:[(0,a.jsxs)("div",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden flex items-center gap-[10px]",children:[(0,a.jsx)("span",{style:{backgroundColor:"Completed"===e.status?"#688B58":"In progress"===e.status?"#4DA2E7":"Rejected"===e.status?"#C11730":"#2d2d2d"},className:"h-[7px] w-[7px] rounded-[20px]"}),(0,a.jsx)("p",{children:e.status})]}),(0,a.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.title}),(0,a.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.deadline}),(0,a.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.details})]},`p_${s}`))})]})}),u&&(0,a.jsx)(o,{})]})}},19936:(e,s,t)=>{"use strict";t.d(s,{A:()=>r});var a=t(45512);function r({message:e}){return(0,a.jsx)("div",{className:"h-screen w-screen bg-white flex items-center justify-center fixed top-0 left-0 text-black font-[500] text-[20px]",children:(0,a.jsx)("p",{children:e})})}},99845:(e,s,t)=>{"use strict";t.d(s,{default:()=>a});let a=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/tasks/Tasks/Tasks.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/pawelniedzwiedz/Desktop/vouy-business/src/app/auth/tasks/Tasks/Tasks.tsx","default")},40159:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var a=t(62740),r=t(44512),l=t(99845),i=t(71444);async function n(){let e=await (0,r.UL)(),s=await e.get("session")?.value,t=await (0,i.x1)(s);return(0,a.jsx)("div",{className:"h-screen w-screen px-[20px] pt-[100px] overflow-hidden",children:(0,a.jsx)(l.default,{tasks:t})})}},53332:(e,s,t)=>{"use strict";t.d(s,{g:()=>i});var a=t(42385),r=t(6439),l=t(99184);let i=async()=>{let e=(await a.UL()).get("session")?.value,s=await (0,r.Yc)(e);return s?.userId||(0,l.redirect)("/login"),{isAuth:!0,userId:s?.userId,organizationId:s?.organizationId}}}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[989,405,892,155,987,735,476],()=>t(429));module.exports=a})();