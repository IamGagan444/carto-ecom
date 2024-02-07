import{a as e,_ as w}from"./useForkRef-e7e06615.js";import{r as D,j as v}from"./index-7afc777e.js";import{s as f,f as R,u as C,b as L,d as W}from"./styled-84a5f9d3.js";import{g as $}from"./dividerClasses-856d9ad1.js";const I=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],j=t=>{const{absolute:i,children:r,classes:n,flexItem:s,light:l,orientation:a,textAlign:o,variant:c}=t;return W({root:["root",i&&"absolute",c,l&&"light",a==="vertical"&&"vertical",s&&"flexItem",r&&"withChildren",r&&a==="vertical"&&"withChildrenVertical",o==="right"&&a!=="vertical"&&"textAlignRight",o==="left"&&a!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",a==="vertical"&&"wrapperVertical"]},$,n)},B=f("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:r}=t;return[i.root,r.absolute&&i.absolute,i[r.variant],r.light&&i.light,r.orientation==="vertical"&&i.vertical,r.flexItem&&i.flexItem,r.children&&i.withChildren,r.children&&r.orientation==="vertical"&&i.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&i.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&i.textAlignLeft]}})(({theme:t,ownerState:i})=>e({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:R(t.palette.divider,.08)},i.variant==="inset"&&{marginLeft:72},i.variant==="middle"&&i.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},i.variant==="middle"&&i.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},i.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>e({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:i})=>e({},i.children&&i.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:i})=>e({},i.children&&i.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>e({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),N=f("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,i)=>{const{ownerState:r}=t;return[i.wrapper,r.orientation==="vertical"&&i.wrapperVertical]}})(({theme:t,ownerState:i})=>e({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},i.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),x=D.forwardRef(function(i,r){const n=C({props:i,name:"MuiDivider"}),{absolute:s=!1,children:l,className:a,component:o=l?"div":"hr",flexItem:c=!1,light:p=!1,orientation:m="horizontal",role:g=o!=="hr"?"separator":void 0,textAlign:u="center",variant:b="fullWidth"}=n,A=w(n,I),d=e({},n,{absolute:s,component:o,flexItem:c,light:p,orientation:m,role:g,textAlign:u,variant:b}),h=j(d);return v.jsx(B,e({as:o,className:L(h.root,a),role:g,ref:r,ownerState:d},A,{children:l?v.jsx(N,{className:h.wrapper,ownerState:d,children:l}):null}))});x.muiSkipListHighlight=!0;const M=x;export{M as D};
