(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{3133:(e,l,s)=>{Promise.resolve().then(s.bind(s,4101))},4101:(e,l,s)=>{"use strict";s.d(l,{default:()=>x});var t=s(5155),a=s(7396),r=s(2115);function x(e){let{projects:l}=e,[s,x]=(0,r.useState)("All"),[d,c]=(0,r.useState)(l),[p,i]=(0,r.useState)(""),[n,o]=(0,r.useState)(l);return(0,r.useEffect)(()=>{"All"===s?c(l):c(l.filter(e=>e.status.toLowerCase().includes(s.toLowerCase())))},[s,l]),(0,r.useEffect)(()=>{o(d.filter(e=>e.title.toLowerCase().includes(p.toLowerCase())))},[p,d]),(0,t.jsx)("div",{className:"w-full h-full",children:(0,t.jsx)("div",{className:"w-full h-[90%] flex flex-col mt-[40px]",children:(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"w-full border-b-[1px] px-[20px] flex justify-between",children:[(0,t.jsx)("div",{className:"flex gap-[20px]",children:[{label:"All"},{label:"In progress"},{label:"Completed"},{label:"Pending"},{label:"Rejected"}].map((e,l)=>(0,t.jsxs)("button",{value:e.label,className:"h-[50px] flex flex-col justify-between",onClick:e=>{x(e.currentTarget.value)},children:[(0,t.jsx)("p",{children:e.label}),e.label===s&&(0,t.jsx)("div",{className:"h-[5px] w-full bg-[#2d2d2d] rounded-t-[3px]"})]},"f_".concat(l)))}),(0,t.jsxs)("div",{className:"gap-[20px] flex",children:[(0,t.jsx)("input",{className:"text-[#9ca3af] pl-[15px] bg-[#f5f5f5] h-[40px] w-[200px] rounded-[6px] outline-none",type:"text",onChange:e=>{i(e.currentTarget.value)},placeholder:"Search"}),(0,t.jsx)(a.default,{href:"/auth/projects/create",className:"text-white bg-[#2d2d2d] h-[40px] w-[200px] rounded-[6px] flex items-center justify-center",children:"Create project"})]})]}),(0,t.jsx)("div",{className:"w-full h-[50px] px-[20px] flex items-center justify-between border-b-[1px]",children:[{label:"STATUS"},{label:"TITLE"},{label:"DETAILS"},{label:"PRICE"}].map((e,l)=>(0,t.jsx)("p",{className:"w-[200px] text-[#2d2d2d] text-ellipsis text-nowrap overflow-hidden",children:e.label},"c_".concat(l)))}),(0,t.jsx)("div",{className:"h-[80%] w-full overflow-y-scroll grow",children:n.map((e,l)=>(0,t.jsxs)(a.default,{href:"/auth/projects/".concat(e.id),className:"w-full h-[50px] border-b-[1px] flex justify-between px-[20px] items-center",children:[(0,t.jsxs)("div",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden flex items-center gap-[10px]",children:[(0,t.jsx)("span",{style:{backgroundColor:"Completed"===e.status?"#688B58":"In progress"===e.status?"#4DA2E7":"Rejected"===e.status?"#C11730":"#2d2d2d"},className:"h-[7px] w-[7px] rounded-[20px]"}),(0,t.jsx)("p",{children:e.status})]}),(0,t.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.title}),(0,t.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.details}),(0,t.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.price})]},"p_".concat(l)))})]})})})}}},e=>{var l=l=>e(e.s=l);e.O(0,[396,441,517,358],()=>l(3133)),_N_E=e.O()}]);