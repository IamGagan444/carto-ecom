import{b as h,c as x,r as d,j as e,f,g as o,q as j}from"./index-7afc777e.js";import{P as N,a as v}from"./index.esm-84f173ea.js";import{b as y}from"./index.esm-dbb1c3b4.js";import{a as k,b as w}from"./index.esm-feda0b63.js";import{G as C}from"./iconBase-d5f21e66.js";import{L as S}from"./LazyImage-979bad32.js";function z(a){return C({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"}}]})(a)}const F=()=>{const{user:a,isLoading:m,logout:g}=h(),u=x(),[t,i]=d.useState(JSON.parse(localStorage.getItem("userData"))||{name:"",email:"",phoneNumber:"",profile:""});d.useEffect(()=>{JSON.parse(localStorage.getItem("userData"))||i({name:(a==null?void 0:a.name)||"",email:(a==null?void 0:a.email)||"",phoneNumber:"",profile:(a==null?void 0:a.picture)||""})},[a]),console.log(t.profile);const p=l=>{const s=l.target.files[0];if(s){const r=new FileReader;r.onloadend=()=>{i(c=>({...c,profile:r.result}))},r.readAsDataURL(s)}},n=l=>{const{name:s,value:r}=l.target;i(c=>({...c,[s]:r}))},b=()=>{localStorage.setItem("userData",JSON.stringify(t)),j.success("profile updated")};return m?e.jsx("div",{className:"h-screen grid place-items-center",children:e.jsx(f,{})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"profile-bg mt-[4.4rem]",children:e.jsxs("div",{className:"w-full cu500:w-[500px]  mx-auto p-2 bg-gray-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 ",children:[e.jsxs("div",{className:"w-full h-[140px] bg-sky-300 rounded-t-xl relative",children:[e.jsx("button",{onClick:()=>g({logoutParams:{returnTo:window.location.origin}}),className:"p-2 bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-full  m-1 absolute right-0",children:e.jsx(k,{className:"text-2xl rotate-180"})}),e.jsx("div",{className:" w-[120px] h-[120px] rounded-full border-4 border-white mx-auto  overflow-hidden hover:shadow-[0_10px_20px_#fff] duration-1000 absolute -bottom-1/3 left-1/2 transform -translate-x-1/2",children:e.jsx(S,{src:t==null?void 0:t.profile,alt:"",className:" object-contain hover:object-cover duration-1000 w-full h-full bg-white "})}),e.jsxs("div",{className:"absolute -bottom-1/3 left-[55%] ",children:[e.jsx("button",{className:"p-2 bg-black text-white rounded-full border-4 border-white",onClick:()=>document.getElementById("fileInput").click(),children:e.jsx(z,{})}),e.jsx("input",{id:"fileInput",style:{display:"none"},maxLength:1,accept:"image/*",type:"file",name:"file",onChange:p})]})]}),e.jsx("br",{}),e.jsxs("div",{className:"w-full mt-16 grid grid-cols-2 gap-2",children:[e.jsxs(o.Button,{size:"lg",variant:"gradient",color:"light-blue",className:" bg-red-500 flex items-center justify-center",children:[e.jsx(y,{className:"text-2xl"})," orders"]}),e.jsxs(o.Button,{size:"lg",variant:"gradient",color:"light-blue",className:" bg-red-500 flex items-center justify-center",children:[e.jsx(N,{className:"text-2xl"})," carts"]}),e.jsxs(o.Button,{size:"lg",variant:"gradient",color:"light-blue",className:" bg-red-500 flex items-center justify-center",onClick:()=>u("/checkout/wishlist"),children:[e.jsx(v,{className:"text-2xl"})," wishlist"]}),e.jsxs(o.Button,{size:"lg",variant:"gradient",color:"light-blue",className:" bg-black flex items-center justify-center",onClick:b,children:[e.jsx(w,{className:"text-2xl"})," Save"]})]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-100 my-3 text-center",children:"Personal Details"}),e.jsxs("form",{action:"",className:"text-gray-100 ",children:[e.jsx("p",{children:"Name"}),e.jsx("input",{type:"text",name:"name",value:t.name,onChange:n,placeholder:"Enter Name",className:"bg-gray-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-full p-2 focus:outline-none focus:bg-transparent my-1 capitalize "}),e.jsx("p",{className:"mt-3",children:"Email"}),e.jsx("input",{type:"text",name:"email",value:t==null?void 0:t.email,onChange:n,placeholder:"Email Address",className:"bg-gray-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-full p-2 focus:outline-none focus:bg-transparent my-1 "}),e.jsx("p",{className:"mt-3",children:"Phone Number"}),e.jsx("input",{type:"text",name:"phoneNumber",value:t==null?void 0:t.phoneNumber,onChange:n,placeholder:"Phone Number",className:"bg-gray-400 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-full p-2 focus:outline-none focus:bg-transparent my-1 "})]}),e.jsx("br",{})]})]})})})};export{F as default};
