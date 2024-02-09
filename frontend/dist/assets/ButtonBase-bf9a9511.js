import{a as X,_ as te,u as ce}from"./useForkRef-a9a9b79d.js";import{r as l,R as K,j as _}from"./index-7f94716b.js";import{w as ge,x as Ue,y as ze,z as pe,A as Ae,b as T,a as ye,s as ne,u as Re,g as Ke,B as Xe,d as Ye}from"./styled-a643bfc1.js";import{u as We}from"./useEnhancedEffect-dee83f4c.js";function G(e){const t=l.useRef(e);return We(()=>{t.current=e}),l.useRef((...r)=>(0,t.current)(...r)).current}var Pt=Ue(function(e,t){var r=e.styles,s=ge([r],void 0,l.useContext(ze)),i=l.useRef();return pe(function(){var n=t.key+"-global",o=new t.sheet.constructor({key:n,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),c=!1,u=document.querySelector('style[data-emotion="'+n+" "+s.name+'"]');return t.sheet.tags.length&&(o.before=t.sheet.tags[0]),u!==null&&(c=!0,u.setAttribute("data-emotion",n),o.hydrate([u])),i.current=[o,c],function(){o.flush()}},[t]),pe(function(){var n=i.current,o=n[0],c=n[1];if(c){n[1]=!1;return}if(s.next!==void 0&&Ae(t,s.next,!0),o.tags.length){var u=o.tags[o.tags.length-1].nextElementSibling;o.before=u,o.flush()}t.insert("",s,o,!1)},[t,s.name]),null});function Ge(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return ge(t)}var oe=function(){var t=Ge.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},Z(e,t)}function He(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const fe=K.createContext(null);function qe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){var r=function(n){return t&&l.isValidElement(n)?t(n):n},s=Object.create(null);return e&&l.Children.map(e,function(i){return i}).forEach(function(i){s[i.key]=r(i)}),s}function Je(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var s=Object.create(null),i=[];for(var n in e)n in t?i.length&&(s[n]=i,i=[]):i.push(n);var o,c={};for(var u in t){if(s[u])for(o=0;o<s[u].length;o++){var p=s[u][o];c[s[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<i.length;o++)c[i[o]]=r(i[o]);return c}function $(e,t,r){return r[t]!=null?r[t]:e.props[t]}function Qe(e,t){return re(e.children,function(r){return l.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:$(r,"appear",e),enter:$(r,"enter",e),exit:$(r,"exit",e)})})}function Ze(e,t,r){var s=re(e.children),i=Je(t,s);return Object.keys(i).forEach(function(n){var o=i[n];if(l.isValidElement(o)){var c=n in t,u=n in s,p=t[n],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?i[n]=l.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:$(o,"exit",e),enter:$(o,"enter",e)}):!u&&c&&!d?i[n]=l.cloneElement(o,{in:!1}):u&&c&&l.isValidElement(p)&&(i[n]=l.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:$(o,"exit",e),enter:$(o,"enter",e)}))}}),i}var et=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},tt={component:"div",childFactory:function(t){return t}},ie=function(e){He(t,e);function t(s,i){var n;n=e.call(this,s,i)||this;var o=n.handleExited.bind(qe(n));return n.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},n}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,n){var o=n.children,c=n.handleExited,u=n.firstRender;return{children:u?Qe(i,c):Ze(i,o,c),firstRender:!1}},r.handleExited=function(i,n){var o=re(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(n),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[i.key],{children:u}}))},r.render=function(){var i=this.props,n=i.component,o=i.childFactory,c=te(i,["component","childFactory"]),u=this.state.contextValue,p=et(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,n===null?K.createElement(fe.Provider,{value:u},p):K.createElement(fe.Provider,{value:u},K.createElement(n,c,p))},t}(K.Component);ie.propTypes={};ie.defaultProps=tt;const nt=ie;function ot(e){const{className:t,classes:r,pulsate:s=!1,rippleX:i,rippleY:n,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=l.useState(!1),b=T(t,r.ripple,r.rippleVisible,s&&r.ripplePulsate),v={width:o,height:o,top:-(o/2)+n,left:-(o/2)+i},h=T(r.child,d&&r.childLeaving,s&&r.childPulsate);return!c&&!d&&g(!0),l.useEffect(()=>{if(!c&&u!=null){const y=setTimeout(u,p);return()=>{clearTimeout(y)}}},[u,c,p]),_.jsx("span",{className:b,style:v,children:_.jsx("span",{className:h})})}const rt=ye("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=rt,it=["center","classes","className"];let H=e=>e,de,he,me,be;const ee=550,st=80,at=oe(de||(de=H`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),lt=oe(he||(he=H`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ut=oe(me||(me=H`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ct=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),pt=ne(ot,{name:"MuiTouchRipple",slot:"Ripple"})(be||(be=H`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,at,ee,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,lt,ee,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ut,({theme:e})=>e.transitions.easing.easeInOut),ft=l.forwardRef(function(t,r){const s=Re({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:n={},className:o}=s,c=te(s,it),[u,p]=l.useState([]),d=l.useRef(0),g=l.useRef(null);l.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=l.useRef(!1),v=l.useRef(0),h=l.useRef(null),y=l.useRef(null);l.useEffect(()=>()=>{v.current&&clearTimeout(v.current)},[]);const O=l.useCallback(f=>{const{pulsate:R,rippleX:x,rippleY:k,rippleSize:N,cb:U}=f;p(M=>[...M,_.jsx(pt,{classes:{ripple:T(n.ripple,m.ripple),rippleVisible:T(n.rippleVisible,m.rippleVisible),ripplePulsate:T(n.ripplePulsate,m.ripplePulsate),child:T(n.child,m.child),childLeaving:T(n.childLeaving,m.childLeaving),childPulsate:T(n.childPulsate,m.childPulsate)},timeout:ee,pulsate:R,rippleX:x,rippleY:k,rippleSize:N},d.current)]),d.current+=1,g.current=U},[n]),F=l.useCallback((f={},R={},x=()=>{})=>{const{pulsate:k=!1,center:N=i||R.pulsate,fakeElement:U=!1}=R;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const M=U?null:y.current,B=M?M.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,V,w;if(N||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)C=Math.round(B.width/2),V=Math.round(B.height/2);else{const{clientX:D,clientY:P}=f.touches&&f.touches.length>0?f.touches[0]:f;C=Math.round(D-B.left),V=Math.round(P-B.top)}if(N)w=Math.sqrt((2*B.width**2+B.height**2)/3),w%2===0&&(w+=1);else{const D=Math.max(Math.abs((M?M.clientWidth:0)-C),C)*2+2,P=Math.max(Math.abs((M?M.clientHeight:0)-V),V)*2+2;w=Math.sqrt(D**2+P**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{O({pulsate:k,rippleX:C,rippleY:V,rippleSize:w,cb:x})},v.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},st)):O({pulsate:k,rippleX:C,rippleY:V,rippleSize:w,cb:x})},[i,O]),I=l.useCallback(()=>{F({},{pulsate:!0})},[F]),j=l.useCallback((f,R)=>{if(clearTimeout(v.current),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,v.current=setTimeout(()=>{j(f,R)});return}h.current=null,p(x=>x.length>0?x.slice(1):x),g.current=R},[]);return l.useImperativeHandle(r,()=>({pulsate:I,start:F,stop:j}),[I,F,j]),_.jsx(ct,X({className:T(m.root,n.root,o),ref:y},c,{children:_.jsx(nt,{component:null,exit:!0,children:u})}))}),dt=ft;function ht(e){return Ke("MuiButtonBase",e)}const mt=ye("MuiButtonBase",["root","disabled","focusVisible"]),bt=mt,gt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],yt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:s,classes:i}=e,o=Ye({root:["root",t&&"disabled",r&&"focusVisible"]},ht,i);return r&&s&&(o.root+=` ${s}`),o},Rt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${bt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),xt=l.forwardRef(function(t,r){const s=Re({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:n=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:v="a",onBlur:h,onClick:y,onContextMenu:O,onDragLeave:F,onFocus:I,onFocusVisible:j,onKeyDown:f,onKeyUp:R,onMouseDown:x,onMouseLeave:k,onMouseUp:N,onTouchEnd:U,onTouchMove:M,onTouchStart:B,tabIndex:C=0,TouchRippleProps:V,touchRippleRef:w,type:D}=s,P=te(s,gt),z=l.useRef(null),E=l.useRef(null),xe=ce(E,w),{isFocusVisibleRef:se,onFocus:Me,onBlur:Ee,ref:Te}=Xe(),[L,Y]=l.useState(!1);p&&L&&Y(!1),l.useImperativeHandle(i,()=>({focusVisible:()=>{Y(!0),z.current.focus()}}),[]);const[q,ve]=l.useState(!1);l.useEffect(()=>{ve(!0)},[]);const Ce=q&&!d&&!p;l.useEffect(()=>{L&&b&&!d&&q&&E.current.pulsate()},[d,b,L,q]);function S(a,le,Ie=g){return G(ue=>(le&&le(ue),!Ie&&E.current&&E.current[a](ue),!0))}const Pe=S("start",x),Se=S("stop",O),Be=S("stop",F),Ve=S("stop",N),we=S("stop",a=>{L&&a.preventDefault(),k&&k(a)}),ke=S("start",B),De=S("stop",U),Le=S("stop",M),$e=S("stop",a=>{Ee(a),se.current===!1&&Y(!1),h&&h(a)},!1),_e=G(a=>{z.current||(z.current=a.currentTarget),Me(a),se.current===!0&&(Y(!0),j&&j(a)),I&&I(a)}),J=()=>{const a=z.current;return u&&u!=="button"&&!(a.tagName==="A"&&a.href)},Q=l.useRef(!1),Fe=G(a=>{b&&!Q.current&&L&&E.current&&a.key===" "&&(Q.current=!0,E.current.stop(a,()=>{E.current.start(a)})),a.target===a.currentTarget&&J()&&a.key===" "&&a.preventDefault(),f&&f(a),a.target===a.currentTarget&&J()&&a.key==="Enter"&&!p&&(a.preventDefault(),y&&y(a))}),je=G(a=>{b&&a.key===" "&&E.current&&L&&!a.defaultPrevented&&(Q.current=!1,E.current.stop(a,()=>{E.current.pulsate(a)})),R&&R(a),y&&a.target===a.currentTarget&&J()&&a.key===" "&&!a.defaultPrevented&&y(a)});let W=u;W==="button"&&(P.href||P.to)&&(W=v);const A={};W==="button"?(A.type=D===void 0?"button":D,A.disabled=p):(!P.href&&!P.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const Ne=ce(r,Te,z),ae=X({},s,{centerRipple:n,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:C,focusVisible:L}),Oe=yt(ae);return _.jsxs(Rt,X({as:W,className:T(Oe.root,c),ownerState:ae,onBlur:$e,onClick:y,onContextMenu:Se,onFocus:_e,onKeyDown:Fe,onKeyUp:je,onMouseDown:Pe,onMouseLeave:we,onMouseUp:Ve,onDragLeave:Be,onTouchEnd:De,onTouchMove:Le,onTouchStart:ke,ref:Ne,tabIndex:p?-1:C,type:D},A,P,{children:[o,Ce?_.jsx(dt,X({ref:xe,center:n},V)):null]}))}),St=xt;export{St as B,Pt as G,fe as T,He as _,G as u};
