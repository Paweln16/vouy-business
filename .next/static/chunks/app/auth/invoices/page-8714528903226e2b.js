(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{9711:(e,l,s)=>{Promise.resolve().then(s.bind(s,2815))},2815:(e,l,s)=>{"use strict";s.d(l,{default:()=>i});var t=s(5155),a=s(7396),x=s(2115);function i(e){let{invoices:l}=e,[s,i]=(0,x.useState)("All"),[r,c]=(0,x.useState)([]),[n,p]=(0,x.useState)(""),[d,o]=(0,x.useState)([]);return(0,x.useEffect)(()=>{"All"===s?c(l):c(l.filter(e=>e.type.toLowerCase().includes(s.toLowerCase().split(" ")[0])))},[s,l]),(0,x.useEffect)(()=>{o(r.filter(e=>e.title.toLowerCase().includes(n.toLowerCase())))},[n,r]),(0,t.jsx)("div",{className:"h-full w-full",children:(0,t.jsxs)("div",{className:"w-full h-[90%] flex flex-col mt-[40px]",children:[(0,t.jsxs)("div",{className:"w-full border-b-[1px] px-[20px] flex justify-between",children:[(0,t.jsx)("div",{className:"flex gap-[20px]",children:[{label:"All"},{label:"Sales Invoices"},{label:"Cost Invoices"}].map((e,l)=>(0,t.jsxs)("button",{value:e.label,className:"h-[50px] flex flex-col justify-between",onClick:e=>{i(e.currentTarget.value)},children:[(0,t.jsx)("p",{children:e.label}),e.label===s&&(0,t.jsx)("div",{className:"h-[5px] w-full bg-[#2d2d2d] rounded-t-[3px]"})]},"f_".concat(l)))}),(0,t.jsxs)("div",{className:"gap-[20px] flex",children:[(0,t.jsx)("input",{className:"text-[#9ca3af] pl-[15px] bg-[#f5f5f5] h-[40px] w-[200px] rounded-[6px] outline-none",type:"text",onChange:e=>{p(e.currentTarget.value)},placeholder:"Search"}),(0,t.jsx)(a.default,{href:"/auth/invoices/create",className:"text-white bg-[#2d2d2d] h-[40px] w-[200px] rounded-[6px] flex items-center justify-center",children:"Create invoice"})]})]}),(0,t.jsx)("div",{className:"w-full h-[50px] px-[20px] flex items-center justify-between border-b-[1px]",children:[{label:"STATUS"},{label:"TITLE"},{label:"DETAILS"},{label:"TYPE"},{label:"PRICE"}].map((e,l)=>(0,t.jsx)("p",{className:"w-[200px] text-[#2d2d2d] text-ellipsis text-nowrap overflow-hidden",children:e.label},"c_".concat(l)))}),(0,t.jsx)("div",{className:"h-[80%] w-full overflow-y-scroll grow",children:d.map((e,l)=>(0,t.jsxs)(a.default,{href:"/auth/invoices/".concat(e.id),className:"w-full h-[50px] border-b-[1px] flex justify-between px-[20px] items-center",children:[(0,t.jsxs)("div",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden flex items-center gap-[10px]",children:[(0,t.jsx)("span",{style:{backgroundColor:"Completed"===e.status?"#91B57E":"In progress"===e.status?"#4DA2E7":"Rejected"===e.status?"#E22600":"#000000"},className:"h-[7px] w-[7px] rounded-[20px]"}),(0,t.jsx)("p",{children:e.status})]}),(0,t.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.title}),(0,t.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.details}),(0,t.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.type}),(0,t.jsx)("p",{className:"w-[200px] text-ellipsis text-nowrap overflow-hidden",children:e.price})]},"p_".concat(l)))})]})})}}},e=>{var l=l=>e(e.s=l);e.O(0,[396,441,517,358],()=>l(9711)),_N_E=e.O()}]);