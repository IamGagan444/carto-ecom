import{b as N,c as y,h as v,r as c,j as e,f as k,L as l,l as L,o as M}from"./index-7afc777e.js";import{M as d}from"./Moneyformat-fb62a419.js";import{a as I,b as C}from"./index.esm-591eb6cb.js";import{L as z}from"./LazyImage-979bad32.js";import{m as H}from"./motion-cc032898.js";import{R as _}from"./Rating-f9b93257.js";import"./iconBase-d5f21e66.js";import"./useForkRef-e7e06615.js";import"./styled-84a5f9d3.js";import"./useTheme-f3211991.js";import"./createSvgIcon-28b01689.js";import"./useControlled-f71cb4d1.js";const V=({data:s})=>{var n;const{loginWithRedirect:m,isAuthenticated:x,isLoading:p}=N(),h={initial:{x:"-100%",opacity:0},whileInView:{x:0,opacity:1},transition:{delay:.3}},o=y(),i=v(),u=t=>{x?(i(L(t)),o("/checkout/cart")):m()},[g,f]=c.useState(JSON.parse(localStorage.getItem("wishListItems"))||[]),a=t=>{i(M(t)),f(JSON.parse(localStorage.getItem("wishListItems"))||[])},b=JSON.parse(localStorage.getItem("cartItems"))||[];return p?e.jsx("div",{className:" h-screen w-full grid place-items-center bg-white absolute z-20 inset-0",children:e.jsx(k,{})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"grid grid-cols-2 cu600:grid-cols-3 sg:grid-cols-4 lg:grid-cols-5 py-6 md:mx-2 sm:gap-1 bg-white",children:s&&((n=s==null?void 0:s.products)==null?void 0:n.map(t=>{const w=b.some(r=>r.id===t.id),j=g.some(r=>r.id===t.id);return e.jsx(c.Fragment,{children:e.jsxs(H.div,{className:"group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden border border-gray-300 h-[370px] cu500:h-[420px] mx-auto hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]",...h,children:[e.jsxs(l,{className:"relative cu500:mx-2 cu500:mt-2 flex h-[200px] cu500:h-60 overflow-hidden border ",to:`/product_details/${t.id}`,children:[e.jsx(z,{className:"peer absolute top-0 right-0  w-full object-cover h-[200px] cu500:h-[280px] ",src:t.thumbnail,alt:"product image"}),e.jsx("img",{className:"peer peer-hover:right-0 absolute top-0 -right-96 w-full object-cover transition-all delay-100 duration-1000 hover:right-0 h-[250px] ",src:t.images[0],alt:"product image"}),e.jsx("svg",{className:"group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",children:e.jsx("path",{fill:"currentColor",d:"M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"})})]}),j?e.jsx("button",{className:"absolute top-0 z-[9999] left-0 m-2 rounded-full bg-black px-1 py-1 text-center text-[12px] font-medium ",onClick:()=>a(t),children:e.jsx(I,{className:"text-2xl text-pink-500  "})}):e.jsx("button",{className:"absolute top-0 z-[9999] left-0 m-2 rounded-full bg-black px-1 py-1 text-center text-[12px] font-medium ",onClick:()=>a(t),children:e.jsx(C,{className:"text-2xl text-white  "})}),e.jsxs("div",{className:"mt-2 px-1 cu500:px-2 pb-2",children:[e.jsxs("p",{className:"text-center text-[12px] p-1 px-2 bg-slate-300 w-fit uppercase font-semibold",children:[t.brand," "]}),e.jsx(l,{to:`/product_details/${t.id}`,children:e.jsx("h5",{className:"text-sm text-wrap",children:t.title})}),e.jsx("div",{className:"flex items-center space-x-1",children:e.jsxs("p",{children:[e.jsx("span",{className:"text-lg cu500:text-xl font-bold text-green-600 ",children:d(t.price)})," ",e.jsx("span",{className:"text-[12px] cu500:text-sm line-through",children:d(t.price+199)})," ",e.jsxs("span",{className:"text-[12px] cu500:text-sm ",children:[Math.round(t.discountPercentage),"%"]})]})}),e.jsxs("div",{className:"my-1 flex items-center space-x-1",children:[e.jsx(_,{name:"read-only",value:t.rating,precision:.5,readOnly:!0,size:"small"}),e.jsxs("p",{className:"text-sm",children:[" ","(",parseFloat(+t.rating).toFixed(1),")"]})]}),w?e.jsxs("button",{onClick:()=>o("/checkout/cart"),className:"w-full hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 mt-2 focus:ring-blue-300",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-2 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),"Go to cart"]}):e.jsxs("button",{onClick:()=>u(t),className:"w-full hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 mt-2 focus:ring-blue-300",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-2 h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),"Add to cart"]})]})]})},t.id)}))})})};export{V as default};
