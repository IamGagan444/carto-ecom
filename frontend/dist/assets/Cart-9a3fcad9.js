import{c as g,j as e,g as o,h as N,i as w,r as n,k as _,R as v,l as C,m as k,n as H}from"./index-7afc777e.js";import{A as b,a as j}from"./index.esm-815cc63c.js";import{G as V}from"./iconBase-d5f21e66.js";import{L as Q}from"./LazyImage-979bad32.js";import{R as S}from"./Rating-f9b93257.js";import{D as f}from"./Divider-43e8d68d.js";import"./useForkRef-e7e06615.js";import"./styled-84a5f9d3.js";import"./useTheme-f3211991.js";import"./createSvgIcon-28b01689.js";import"./useControlled-f71cb4d1.js";import"./dividerClasses-856d9ad1.js";function T(s){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"}}]})(s)}const z="/assets/Wavy_Bus-30_Single-11__1___1_-removebg-preview-14fb0dcf.png",I=()=>{const s=g();return e.jsxs("div",{className:"h-screen  ",children:[e.jsxs("div",{className:"w-[95%] cu500:w-[400px] mx-auto my-2",children:[e.jsx("h2",{className:"  text-center sm:text-2xl text-xl text-slate-700 font-semibold",children:"Your Cart is empty"}),e.jsx("p",{className:"text-sm cu500:text-base text-center my-2 text-slate-600 font-medium capitalize",children:"Purchse products from Carto with high discount free return and many more...."})]}),e.jsx("div",{className:"w-[95%] cu400:w-[320px] mx-auto",children:e.jsx("img",{src:z,alt:"Empty wishlist",className:"object-contain"})}),e.jsx(o.Button,{size:"lg",variant:"gradient",color:"indigo",className:" flex items-center justify-center mx-auto w-[95%] cu400:w-[300px]",onClick:()=>s("/all-products-carto"),children:"Continue shopping"})]})},F=()=>{const s=N(),x=g(),{cartSlice:a}=w(t=>t);console.log("cart:",a),n.useEffect(()=>{s(_())},[s]);const[l,d]=n.useState(JSON.parse(localStorage.getItem("cartItems"))||[]),[i,m]=n.useState(!1);n.useEffect(()=>{d(JSON.parse(localStorage.getItem("cartItems")))},[i]);const p=(t,r)=>{const c=[...l];c[t].cartQuantity=r,d(c),localStorage.setItem("cartItems",JSON.stringify(c))},u=t=>{s(C(t)),m(!i)},h=t=>{s(k(t)),m(!i)},y=t=>{s(H(t)),m(!i)};return e.jsx("section",{className:"bg-slate-100 mt-[4.4rem] py-10",children:l&&l.length>0?e.jsxs("div",{children:[e.jsxs("h2",{className:"text-lg font-semibold sm:text-2xl mx-6 ",children:["Shopping Cart  ",e.jsxs("span",{className:"text-slate-500 text-sm sm:text-base",children:["(",a.cartTotalQuantity<10?`0${a.cartTotalQuantity}`:a.cartTotalQuantity," ","items)"]})]}),e.jsx("br",{}),e.jsxs("div",{className:"flex flex-col cu800:flex-row justify-evenly space-x-2 mx-1 cu400:mx-2",children:[e.jsx("div",{className:`${(l==null?void 0:l.length)>4?"h-[450px] overflow-y-scroll ":"h-auto"}  border-t border-gray-400 py-1 cu800:w-[65%]`,children:l==null?void 0:l.map((t,r)=>e.jsx(v.Fragment,{children:e.jsxs("div",{className:"flex items-center justify-between rounded-2xl p-2 py-3 cu500:mx-2 space-x-3  border-gray-300 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] my-5",children:[e.jsxs("div",{className:"flex items-center w-[250px] sg:w-[320px]",children:[e.jsx(Q,{src:t.thumbnail,alt:t.title,className:"w-12 h-[4.5rem] sm:h-[5rem] sm:w-16 rounded-lg mx-1 object-cover border cursor-pointer ",onClick:()=>x(`/product_details/${t.id}`)}),e.jsxs("div",{children:[e.jsx("p",{className:"text-wrap text-[13px] sm:text-[15px] font-semibold capitalize mx-2 cu500:mx-3 cursor-pointer",onClick:()=>x(`/product_details/${t.id}`),children:t.title}),e.jsx("div",{className:"hidden cu500:block mx-3 my-2",children:e.jsx(S,{name:"read-only",value:t.rating,precision:.5,readOnly:!0,size:"small"})}),e.jsxs("div",{className:"flex cu500:hidden  items-center mx-2 cu500:mx-3 my-2",children:[e.jsx("button",{onClick:()=>u(t),children:e.jsx(b,{className:"text-2xl bg-black text-white p-1"})}),e.jsx("input",{type:"number",onChange:c=>p(r,c.target.value),name:`cartQuantity${r}`,value:t.cartQuantity||"",className:"w-[40px] remove-cross focus:outline-none bg-slate-200 text-center"}),e.jsx("button",{onClick:()=>h(t),children:e.jsx(j,{className:"text-2xl bg-black text-white p-1"})}),e.jsxs("h4",{className:"cu400:hidden font-semibold block mx-4",children:["₹ ",t.price]})]})]})]}),e.jsxs("div",{className:"hidden cu500:flex  items-center  mx-3 my-2",children:[e.jsx("button",{onClick:()=>u(t),children:e.jsx(b,{className:"text-2xl bg-black text-white p-1"})}),e.jsx("input",{type:"number",onChange:c=>p(r,c.target.value),name:`cartQuantity${r}`,value:t.cartQuantity||"",className:"w-[40px] remove-cross focus:outline-none bg-slate-200 text-center"}),e.jsx("button",{onClick:()=>h(t),children:e.jsx(j,{className:"text-2xl bg-black text-white p-1"})})]}),e.jsxs("h4",{className:"hidden cu400:block font-semibold",children:["₹ ",t.price]}),e.jsx(o.Button,{ripple:!0,variant:"text",className:"rounded-full p-2 ",onClick:()=>y(t),children:e.jsx(T,{className:"text-xl cu400:text-2xl hover:text-red-500"})})]})},t.id))}),e.jsxs("div",{className:"flex flex-row cu800:flex-col justify-between sg:w-[30%] ",children:[e.jsxs("div",{className:" hidden cu700:block h-fit bg-white rounded-2xl p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",children:[e.jsx("h1",{className:"text-xl font-semibold",children:"Apply coupon"}),e.jsx("p",{className:"text-sm my-1 text-slate-600 capitalize font-semibold",children:"using a prome code?"}),e.jsxs("div",{className:"w-fit mx-auto flex my-4",children:[e.jsx("input",{type:"text",placeholder:"Enter coupons",className:"px-2 py-2 border border-black focus:outline-none text-center w-[150px]"}),e.jsx(o.Button,{size:"md",variant:"gradient",color:"light-blue",className:" bg-black rounded-none",children:"submit"})]})]}),e.jsxs("div",{className:"-ml-1 cu500:m-0 cu800:my-5 w-full cu700:w-[380px] cu800:w-full bg-white rounded-2xl p-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",children:[e.jsx("h1",{className:"text-xl font-semibold my-1",children:"Total"}),e.jsx(f,{}),e.jsxs("div",{className:"w-full flex justify-between my-2",children:[e.jsx("p",{className:"font-bold",children:"Total"}),e.jsxs("p",{className:"font-semibold",children:[a.cartTotalAmount," "]})]}),e.jsxs("div",{className:"w-full flex justify-between my-2",children:[e.jsx("p",{className:"font-semibold",children:"Delivery"}),e.jsxs("p",{className:"font-semibold",children:[+a.cartTotalQuantity*20," "]})]}),e.jsxs("div",{className:"w-full flex justify-between my-2",children:[e.jsx("p",{className:"font-semibold",children:"Discount"}),e.jsxs("p",{className:"font-semibold",children:["-",Math.round(a.cartTotalDiscount)," "]})]}),e.jsx(f,{}),e.jsxs("div",{className:"w-full flex justify-between my-2",children:[e.jsx("p",{className:"font-bold",children:"Subtotal"}),e.jsxs("p",{className:"font-bold",children:[Math.round(a.cartTotalAmount+a.cartTotalQuantity*20)," "]})]}),e.jsx(o.Button,{size:"md",variant:"gradient",color:"light-blue",className:" bg-black w-full my-3",onClick:()=>x("/checkout/shipping-address-details"),children:"Place order"})]})]})]})]}):e.jsx(I,{})})};export{F as default};
