import{b as l,j as e,L as i,g as s}from"./index-7afc777e.js";const d=()=>{const{user:t,isAuthenticated:a,isLoading:n,loginWithPopup:o,logout:r}=l();return e.jsx("section",{className:"gradient  h-screen flex justify-center",children:e.jsx("main",{className:"w-[95%] cu500:w-[400px] bg-white p-3 grid place-items-center ",children:e.jsxs("div",{children:[e.jsx("img",{src:t==null?void 0:t.picture,alt:"users",className:"w-[200px] h-[200px] object-contain mx-auto rounded-full border-[6px] border-blue-400"}),e.jsx("h3",{className:" my-3 text-center text-xl font-semibold",children:"Gagan pallai"}),e.jsxs("div",{className:"w-full mt-6 grid grid-cols-2 gap-2",children:[e.jsx(i,{to:"/admin/dashboard",children:e.jsx(s.Button,{size:"lg",variant:"gradient",color:"indigo",className:" flex items-center justify-center w-full",children:"Dashboard"})}),e.jsx(i,{to:"/admin/all-orders",children:e.jsx(s.Button,{size:"lg",variant:"gradient",color:"lime",className:"  flex items-center justify-center w-full text-white",children:"Orders"})})]}),e.jsx(s.Button,{size:"lg",variant:"gradient",color:"orange",className:" flex items-center justify-center my-2 w-full",onClick:()=>r({logoutParams:{returnTo:window.location.origin}}),children:"logout"})]})})})};export{d as default};