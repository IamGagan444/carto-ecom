import{n as C,o as y,p as B,q as _,h as b,b as N,a as g,t as j,T as S,C as T}from"./styled-a643bfc1.js";import{_ as i,a as l}from"./useForkRef-a9a9b79d.js";import{r as $,j as E}from"./index-7f94716b.js";const p=["sx"],v=o=>{var s,n;const t={systemProps:{},otherProps:{}},r=(s=o==null||(n=o.theme)==null?void 0:n.unstable_sxConfig)!=null?s:C;return Object.keys(o).forEach(e=>{r[e]?t.systemProps[e]=o[e]:t.otherProps[e]=o[e]}),t};function I(o){const{sx:s}=o,n=i(o,p),{systemProps:t,otherProps:r}=v(n);let e;return Array.isArray(s)?e=[t,...s]:typeof s=="function"?e=(...x)=>{const a=s(...x);return y(a)?l({},t,a):t}:e=l({},t,s),l({},r,{sx:e})}const M=["className","component"];function R(o={}){const{themeId:s,defaultTheme:n,defaultClassName:t="MuiBox-root",generateClassName:r}=o,e=B("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(_);return $.forwardRef(function(u,f){const c=b(n),m=I(u),{className:d,component:h="div"}=m,P=i(m,M);return E.jsx(e,l({as:h,ref:f,className:N(d,r?r(t):t),theme:s&&c[s]||c},P))})}const w=g("MuiBox",["root"]),A=w,F=j(),O=R({themeId:S,defaultTheme:F,defaultClassName:A.root,generateClassName:T.generate}),G=O;export{G as B,I as e};