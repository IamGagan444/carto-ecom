import{r as d,j as r}from"./index-7afc777e.js";import{a,_ as W,u as St}from"./useForkRef-e7e06615.js";import{g as _,a as D,s as b,c as K,u as U,b as E,d as B,m as bt}from"./styled-84a5f9d3.js";import{c as st,S as Ct}from"./createSvgIcon-28b01689.js";import{e as yt,B as Lt}from"./Box-1597337f.js";import{T as wt,g as nt,P as Rt}from"./Paper-039c3cb6.js";import{u as $t}from"./useTheme-f3211991.js";import{B as Mt}from"./Button-24862430.js";import"./ButtonBase-ab6f346e.js";import"./useEnhancedEffect-b6d467e7.js";function jt(t){return _("MuiTypography",t)}D("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Nt=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Tt=t=>{const{align:e,gutterBottom:o,noWrap:n,paragraph:i,variant:c,classes:u}=t,l={root:["root",c,t.align!=="inherit"&&`align${K(e)}`,o&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return B(l,jt,u)},zt=b("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.variant&&e[o.variant],o.align!=="inherit"&&e[`align${K(o.align)}`],o.noWrap&&e.noWrap,o.gutterBottom&&e.gutterBottom,o.paragraph&&e.paragraph]}})(({theme:t,ownerState:e})=>a({margin:0},e.variant==="inherit"&&{font:"inherit"},e.variant!=="inherit"&&t.typography[e.variant],e.align!=="inherit"&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})),rt={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Et={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},It=t=>Et[t]||t,Pt=d.forwardRef(function(e,o){const n=U({props:e,name:"MuiTypography"}),i=It(n.color),c=yt(a({},n,{color:i})),{align:u="inherit",className:l,component:m,gutterBottom:x=!1,noWrap:h=!1,paragraph:p=!1,variant:v="body1",variantMapping:S=rt}=c,C=W(c,Nt),g=a({},c,{align:u,color:i,className:l,component:m,gutterBottom:x,noWrap:h,paragraph:p,variant:v,variantMapping:S}),L=m||(p?"p":S[v]||rt[v])||"span",R=Tt(g);return r.jsx(zt,a({as:L,ref:o,ownerState:g,className:E(R.root,l)},C))}),Z=Pt;function Wt(t){return _("MuiCollapse",t)}D("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const _t=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Dt=t=>{const{orientation:e,classes:o}=t,n={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return B(n,Wt,o)},Ut=b("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.state==="entered"&&e.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&e.hidden]}})(({theme:t,ownerState:e})=>a({height:0,overflow:"hidden",transition:t.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:t.transitions.create("width")},e.state==="entered"&&a({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),Bt=b("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,e)=>e.wrapper})(({ownerState:t})=>a({display:"flex",width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),At=b("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,e)=>e.wrapperInner})(({ownerState:t})=>a({width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),lt=d.forwardRef(function(e,o){const n=U({props:e,name:"MuiCollapse"}),{addEndListener:i,children:c,className:u,collapsedSize:l="0px",component:m,easing:x,in:h,onEnter:p,onEntered:v,onEntering:S,onExit:C,onExited:g,onExiting:L,orientation:R="vertical",style:$,timeout:f=bt.standard,TransitionComponent:I=wt}=n,j=W(n,_t),M=a({},n,{orientation:R,collapsedSize:l}),y=Dt(M),N=$t(),T=d.useRef(),A=d.useRef(null),X=d.useRef(),q=typeof l=="number"?`${l}px`:l,F=R==="horizontal",H=F?"width":"height";d.useEffect(()=>()=>{clearTimeout(T.current)},[]);const J=d.useRef(null),dt=St(o,J),k=s=>w=>{if(s){const z=J.current;w===void 0?s(z):s(z,w)}},Y=()=>A.current?A.current[F?"clientWidth":"clientHeight"]:0,ut=k((s,w)=>{A.current&&F&&(A.current.style.position="absolute"),s.style[H]=q,p&&p(s,w)}),mt=k((s,w)=>{const z=Y();A.current&&F&&(A.current.style.position="");const{duration:O,easing:G}=nt({style:$,timeout:f,easing:x},{mode:"enter"});if(f==="auto"){const ot=N.transitions.getAutoHeightDuration(z);s.style.transitionDuration=`${ot}ms`,X.current=ot}else s.style.transitionDuration=typeof O=="string"?O:`${O}ms`;s.style[H]=`${z}px`,s.style.transitionTimingFunction=G,S&&S(s,w)}),ht=k((s,w)=>{s.style[H]="auto",v&&v(s,w)}),vt=k(s=>{s.style[H]=`${Y()}px`,C&&C(s)}),xt=k(g),ft=k(s=>{const w=Y(),{duration:z,easing:O}=nt({style:$,timeout:f,easing:x},{mode:"exit"});if(f==="auto"){const G=N.transitions.getAutoHeightDuration(w);s.style.transitionDuration=`${G}ms`,X.current=G}else s.style.transitionDuration=typeof z=="string"?z:`${z}ms`;s.style[H]=q,s.style.transitionTimingFunction=O,L&&L(s)}),gt=s=>{f==="auto"&&(T.current=setTimeout(s,X.current||0)),i&&i(J.current,s)};return r.jsx(I,a({in:h,onEnter:ut,onEntered:ht,onEntering:mt,onExit:vt,onExited:xt,onExiting:ft,addEndListener:gt,nodeRef:J,timeout:f==="auto"?null:f},j,{children:(s,w)=>r.jsx(Ut,a({as:m,className:E(y.root,u,{entered:y.entered,exited:!h&&q==="0px"&&y.hidden}[s]),style:a({[F?"minWidth":"minHeight"]:q},$),ownerState:a({},M,{state:s}),ref:dt},w,{children:r.jsx(Bt,{ownerState:a({},M,{state:s}),className:y.wrapper,ref:A,children:r.jsx(At,{ownerState:a({},M,{state:s}),className:y.wrapperInner,children:c})})}))}))});lt.muiSupportAuto=!0;const ct=lt,kt=d.createContext({}),V=kt,Ft=d.createContext({}),Q=Ft;function Ht(t){return _("MuiStep",t)}D("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Ot=["active","children","className","component","completed","disabled","expanded","index","last"],Vt=t=>{const{classes:e,orientation:o,alternativeLabel:n,completed:i}=t;return B({root:["root",o,n&&"alternativeLabel",i&&"completed"]},Ht,e)},qt=b("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel,o.completed&&e.completed]}})(({ownerState:t})=>a({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),Jt=d.forwardRef(function(e,o){const n=U({props:e,name:"MuiStep"}),{active:i,children:c,className:u,component:l="div",completed:m,disabled:x,expanded:h=!1,index:p,last:v}=n,S=W(n,Ot),{activeStep:C,connector:g,alternativeLabel:L,orientation:R,nonLinear:$}=d.useContext(V);let[f=!1,I=!1,j=!1]=[i,m,x];C===p?f=i!==void 0?i:!0:!$&&C>p?I=m!==void 0?m:!0:!$&&C<p&&(j=x!==void 0?x:!0);const M=d.useMemo(()=>({index:p,last:v,expanded:h,icon:p+1,active:f,completed:I,disabled:j}),[p,v,h,f,I,j]),y=a({},n,{active:f,orientation:R,alternativeLabel:L,completed:I,disabled:j,expanded:h,component:l}),N=Vt(y),T=r.jsxs(qt,a({as:l,className:E(N.root,u),ref:o,ownerState:y},S,{children:[g&&L&&p!==0?g:null,c]}));return r.jsx(Q.Provider,{value:M,children:g&&!L&&p!==0?r.jsxs(d.Fragment,{children:[g,T]}):T})}),Gt=Jt,Kt=st(r.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Qt=st(r.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Xt(t){return _("MuiStepIcon",t)}const Yt=D("MuiStepIcon",["root","active","completed","error","text"]),tt=Yt;var at;const Zt=["active","className","completed","error","icon"],te=t=>{const{classes:e,active:o,completed:n,error:i}=t;return B({root:["root",o&&"active",n&&"completed",i&&"error"],text:["text"]},Xt,e)},et=b(Ct,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,e)=>e.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${tt.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${tt.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${tt.error}`]:{color:(t.vars||t).palette.error.main}})),ee=b("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,e)=>e.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),oe=d.forwardRef(function(e,o){const n=U({props:e,name:"MuiStepIcon"}),{active:i=!1,className:c,completed:u=!1,error:l=!1,icon:m}=n,x=W(n,Zt),h=a({},n,{active:i,completed:u,error:l}),p=te(h);if(typeof m=="number"||typeof m=="string"){const v=E(c,p.root);return l?r.jsx(et,a({as:Qt,className:v,ref:o,ownerState:h},x)):u?r.jsx(et,a({as:Kt,className:v,ref:o,ownerState:h},x)):r.jsxs(et,a({className:v,ref:o,ownerState:h},x,{children:[at||(at=r.jsx("circle",{cx:"12",cy:"12",r:"12"})),r.jsx(ee,{className:p.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:h,children:m})]}))}return m}),ne=oe;function re(t){return _("MuiStepLabel",t)}const ae=D("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),P=ae,ie=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],se=t=>{const{classes:e,orientation:o,active:n,completed:i,error:c,disabled:u,alternativeLabel:l}=t;return B({root:["root",o,c&&"error",u&&"disabled",l&&"alternativeLabel"],label:["label",n&&"active",i&&"completed",c&&"error",u&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",n&&"active",i&&"completed",c&&"error",u&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer",l&&"alternativeLabel"]},re,e)},le=b("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation]]}})(({ownerState:t})=>a({display:"flex",alignItems:"center",[`&.${P.alternativeLabel}`]:{flexDirection:"column"},[`&.${P.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),ce=b("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,e)=>e.label})(({theme:t})=>a({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${P.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.alternativeLabel}`]:{marginTop:16},[`&.${P.error}`]:{color:(t.vars||t).palette.error.main}})),pe=b("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,e)=>e.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${P.alternativeLabel}`]:{paddingRight:0}})),de=b("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,e)=>e.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${P.alternativeLabel}`]:{textAlign:"center"}})),pt=d.forwardRef(function(e,o){var n;const i=U({props:e,name:"MuiStepLabel"}),{children:c,className:u,componentsProps:l={},error:m=!1,icon:x,optional:h,slotProps:p={},StepIconComponent:v,StepIconProps:S}=i,C=W(i,ie),{alternativeLabel:g,orientation:L}=d.useContext(V),{active:R,disabled:$,completed:f,icon:I}=d.useContext(Q),j=x||I;let M=v;j&&!M&&(M=ne);const y=a({},i,{active:R,alternativeLabel:g,completed:f,disabled:$,error:m,orientation:L}),N=se(y),T=(n=p.label)!=null?n:l.label;return r.jsxs(le,a({className:E(N.root,u),ref:o,ownerState:y},C,{children:[j||M?r.jsx(pe,{className:N.iconContainer,ownerState:y,children:r.jsx(M,a({completed:f,active:R,error:m,icon:j},S))}):null,r.jsxs(de,{className:N.labelContainer,ownerState:y,children:[c?r.jsx(ce,a({ownerState:y},T,{className:E(N.label,T==null?void 0:T.className),children:c})):null,h]})]}))});pt.muiName="StepLabel";const ue=pt;function me(t){return _("MuiStepConnector",t)}D("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const he=["className"],ve=t=>{const{classes:e,orientation:o,alternativeLabel:n,active:i,completed:c,disabled:u}=t,l={root:["root",o,n&&"alternativeLabel",i&&"active",c&&"completed",u&&"disabled"],line:["line",`line${K(o)}`]};return B(l,me,e)},xe=b("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel,o.completed&&e.completed]}})(({ownerState:t})=>a({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:8+4,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),fe=b("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.line,e[`line${K(o.orientation)}`]]}})(({ownerState:t,theme:e})=>{const o=e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600];return a({display:"block",borderColor:e.vars?e.vars.palette.StepConnector.border:o},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),ge=d.forwardRef(function(e,o){const n=U({props:e,name:"MuiStepConnector"}),{className:i}=n,c=W(n,he),{alternativeLabel:u,orientation:l="horizontal"}=d.useContext(V),{active:m,disabled:x,completed:h}=d.useContext(Q),p=a({},n,{alternativeLabel:u,orientation:l,active:m,completed:h,disabled:x}),v=ve(p);return r.jsx(xe,a({className:E(v.root,i),ref:o,ownerState:p},c,{children:r.jsx(fe,{className:v.line,ownerState:p})}))}),Se=ge;function be(t){return _("MuiStepContent",t)}D("MuiStepContent",["root","last","transition"]);const Ce=["children","className","TransitionComponent","transitionDuration","TransitionProps"],ye=t=>{const{classes:e,last:o}=t;return B({root:["root",o&&"last"],transition:["transition"]},be,e)},Le=b("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.last&&e.last]}})(({ownerState:t,theme:e})=>a({marginLeft:12,paddingLeft:8+12,paddingRight:8,borderLeft:e.vars?`1px solid ${e.vars.palette.StepContent.border}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}`},t.last&&{borderLeft:"none"})),we=b(ct,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,e)=>e.transition})({}),Re=d.forwardRef(function(e,o){const n=U({props:e,name:"MuiStepContent"}),{children:i,className:c,TransitionComponent:u=ct,transitionDuration:l="auto",TransitionProps:m}=n,x=W(n,Ce);d.useContext(V);const{active:h,last:p,expanded:v}=d.useContext(Q),S=a({},n,{last:p}),C=ye(S);let g=l;return l==="auto"&&!u.muiSupportAuto&&(g=void 0),r.jsx(Le,a({className:E(C.root,c),ref:o,ownerState:S},x,{children:r.jsx(we,a({as:u,in:h||v,className:C.transition,ownerState:S,timeout:g,unmountOnExit:!0},m,{children:i}))}))}),$e=Re;function Me(t){return _("MuiStepper",t)}D("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const je=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Ne=t=>{const{orientation:e,alternativeLabel:o,classes:n}=t;return B({root:["root",e,o&&"alternativeLabel"]},Me,n)},Te=b("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.alternativeLabel&&e.alternativeLabel]}})(({ownerState:t})=>a({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),ze=r.jsx(Se,{}),Ee=d.forwardRef(function(e,o){const n=U({props:e,name:"MuiStepper"}),{activeStep:i=0,alternativeLabel:c=!1,children:u,className:l,component:m="div",connector:x=ze,nonLinear:h=!1,orientation:p="horizontal"}=n,v=W(n,je),S=a({},n,{alternativeLabel:c,orientation:p,component:m}),C=Ne(S),g=d.Children.toArray(u).filter(Boolean),L=g.map(($,f)=>d.cloneElement($,a({index:f,last:f+1===g.length},$.props))),R=d.useMemo(()=>({activeStep:i,alternativeLabel:c,connector:x,nonLinear:h,orientation:p}),[i,c,x,h,p]);return r.jsx(V.Provider,{value:R,children:r.jsx(Te,a({as:m,ownerState:S,className:E(C.root,l),ref:o},v,{children:L}))})}),Ie=Ee,it=[{label:"Order confirmed",description:"Wait for seller response"},{label:"Seller packed",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Delivered",description:"Try out different ad text to see what brings in the most customers"}],Oe=()=>{const[t,e]=d.useState(0),o=()=>{e(0)};return r.jsxs("div",{className:"mt-[4.4rem] h-screen val-bg4",children:[r.jsx("h2",{className:"text-xl sm:text-3xl font-semibold text-center text-slate-700 py-10",children:"Order status"}),r.jsxs("div",{className:" bg-white  w-[450px] mx-auto px-4 py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg",children:[r.jsx(Ie,{activeStep:t,orientation:"vertical",children:it.map((n,i)=>r.jsxs(Gt,{children:[r.jsx(ue,{optional:i===2?r.jsx(Z,{variant:"caption",children:"Last step"}):null,children:n.label}),r.jsxs($e,{children:[r.jsx(Z,{children:n.description}),r.jsx(Lt,{sx:{mb:2}})]})]},n.label))}),t===it.length&&r.jsxs(Rt,{square:!0,elevation:0,sx:{p:3},children:[r.jsx(Z,{children:"All steps completed - you're finished"}),r.jsx(Mt,{onClick:o,sx:{mt:1,mr:1},children:"Reset"})]})]})]})};export{Oe as default};
