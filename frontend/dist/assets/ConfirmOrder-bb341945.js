import{h as N,i as S,r as f,k as R,c as O,j as e,g as l,s as g}from"./index-d64fb31a.js";const _=()=>{const o=N(),{cartSlice:c}=S(t=>t);f.useEffect(()=>{o(R())},[o]),console.log(c);const n=Math.round((c.cartTotalAmount+c.cartTotalQuantity*20)*100),i="INR",x="receipt#1",d=O();function y(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"h-full w-full scale-105",children:e.jsx("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"})})}const[s,j]=f.useState(""),m=JSON.parse(localStorage.getItem("cartItems")),w=async t=>{if(s==2)try{const u=await(await fetch("http://localhost:5000/order",{method:"post",body:JSON.stringify({amount:n,currency:i,receipt:x}),headers:{"Content-Type":"application/json"}})).json();var r={key:"rzp_test_xwiFtDdURfF6Cl",amount:n,currency:i,name:"Gagan-carto limited",description:"Test Transaction",image:"https://example.com/your_logo",order_id:u.id,handler:async function(a){const v={...a},b=await(await fetch("http://localhost:5000/validate",{method:"POST",body:JSON.stringify(v),headers:{"Content-Type":"application/json"}})).json();console.log("jsonres",b),d("/payment_success"),localStorage.setItem("allOrders",JSON.stringify(m)),o(g())},prefill:{name:"",email:"gaganpalai537@gmail.com",contact:"7846961770"},notes:{address:"Kalajamuna,humma,ganjam"},theme:{color:"#3399cc"}},p=new window.Razorpay(r);p.on("payment.failed",function(a){alert(a.error.code),alert(a.error.description),alert(a.error.source),alert(a.error.step),alert(a.error.reason),alert(a.error.metadata.order_id),alert(a.error.metadata.payment_id)}),p.open(),t.preventDefault(),console.log("Razorpay Response:",u)}catch(h){console.error("Fetch error:",h)}else s==1&&(d("/payment_success"),localStorage.setItem("allOrders",JSON.stringify(m)),o(g()))};return e.jsx("section",{className:"gradient h-screen grid place-items-center",children:e.jsxs("form",{action:"",className:"bg-white px-2 py-10 c500:p-10 w-full cu500:w-[470px] mx-auto  ",children:[e.jsx("h2",{className:"text-3xl font-semibold text-center mb-10",children:"Confirm Order"}),e.jsx("div",{children:[1,2].map((t,r)=>e.jsxs("label",{htmlFor:`vertical-list-react${r}`,className:"flex flex-row-reverse w-full justify-between cursor-pointer items-center pl-3 hover:bg-red-100",children:[e.jsx(l.ListItemPrefix,{className:"mr-3",children:e.jsx(l.Radio,{name:"vertical-list",id:`vertical-list-react${r}`,ripple:!1,icon:e.jsx(y,{}),className:"border-gray-900/10 bg-teal-900/5 p-0 transition-all hover:before:opacity-0 flex justify-between",onChange:()=>j(t),checked:s===t})}),e.jsx(l.Typography,{color:"blue-gray",className:`text-slate-700 hover:text-black  duration-200 capitalize ${s===t?"text-red-500 font-medium":""}`,children:t===1?"Cash on delivery":t===2?"Online payment":""})]},r))}),e.jsx("br",{}),e.jsx(l.Button,{variant:"gradient",size:"lg",color:"teal",className:"w-full  ",onClick:w,children:"confirm"})]})})};export{_ as default};