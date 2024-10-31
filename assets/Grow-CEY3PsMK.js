import{r as o,j as O,$ as B}from"./index-BhbbloSs.js";import{r as I,m as J,a as Q}from"./resolveComponentProps-CibBwjS3.js";import{u as L,s as V}from"./TransitionGroupContext-Ckl_AVPF.js";import{a as k,T as X,r as Y,g as G}from"./utils-CMEVY23T.js";import{u as N,b as Z}from"./createSimplePaletteValueFilter-CwGnd2rB.js";import{u as tt}from"./useTheme-Dvw3qUtv.js";function ut({controlled:t,default:d,name:l,state:s="value"}){const{current:i}=o.useRef(t!==void 0),[r,n]=o.useState(d),u=i?t:r,f=o.useCallback(m=>{i||n(m)},[]);return[u,f]}function ct(t,d){const{className:l,elementType:s,ownerState:i,externalForwardedProps:r,getSlotOwnerState:n,internalForwardedProps:u,...f}=d,{component:m,slots:T={[t]:void 0},slotProps:v={[t]:void 0},...F}=r,w=T[t]||s,p=I(v[t],i),{props:{component:a,...R},internalRef:b}=J({className:l,...f,externalForwardedProps:t==="root"?F:void 0,externalSlotProps:p}),A=L(b,p==null?void 0:p.ref,d.ref),P=n?n(R):{},g={...i,...P},x=t==="root"?a||m:a,C=Q(w,{...t==="root"&&!m&&!T[t]&&u,...t!=="root"&&!T[t]&&u,...R,...x&&{as:x},ref:A},g);return Object.keys(P).forEach(E=>{delete C[E]}),[w,C]}function et(t){return typeof t=="function"?t():t}const dt=o.forwardRef(function(d,l){const{children:s,container:i,disablePortal:r=!1}=d,[n,u]=o.useState(null),f=L(o.isValidElement(s)?k(s):null,l);if(N(()=>{r||u(et(i)||document.body)},[i,r]),N(()=>{if(n&&!r)return V(l,n),()=>{V(l,null)}},[l,n,r]),r){if(o.isValidElement(s)){const m={ref:f};return o.cloneElement(s,m)}return O.jsx(o.Fragment,{children:s})}return O.jsx(o.Fragment,{children:n&&B.createPortal(s,n)})});function H(t){return`scale(${t}, ${t**2})`}const nt={entering:{opacity:1,transform:H(1)},entered:{opacity:1,transform:"none"}},D=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),$=o.forwardRef(function(d,l){const{addEndListener:s,appear:i=!0,children:r,easing:n,in:u,onEnter:f,onEntered:m,onEntering:T,onExit:v,onExited:F,onExiting:w,style:p,timeout:a="auto",TransitionComponent:R=X,...b}=d,A=Z(),P=o.useRef(),g=tt(),x=o.useRef(null),C=L(x,k(r),l),E=e=>h=>{if(e){const y=x.current;h===void 0?e(y):e(y,h)}},z=E(T),K=E((e,h)=>{Y(e);const{duration:y,delay:j,easing:c}=G({style:p,timeout:a,easing:n},{mode:"enter"});let S;a==="auto"?(S=g.transitions.getAutoHeightDuration(e.clientHeight),P.current=S):S=y,e.style.transition=[g.transitions.create("opacity",{duration:S,delay:j}),g.transitions.create("transform",{duration:D?S:S*.666,delay:j,easing:c})].join(","),f&&f(e,h)}),M=E(m),U=E(w),W=E(e=>{const{duration:h,delay:y,easing:j}=G({style:p,timeout:a,easing:n},{mode:"exit"});let c;a==="auto"?(c=g.transitions.getAutoHeightDuration(e.clientHeight),P.current=c):c=h,e.style.transition=[g.transitions.create("opacity",{duration:c,delay:y}),g.transitions.create("transform",{duration:D?c:c*.666,delay:D?y:y||c*.333,easing:j})].join(","),e.style.opacity=0,e.style.transform=H(.75),v&&v(e)}),_=E(F),q=e=>{a==="auto"&&A.start(P.current||0,e),s&&s(x.current,e)};return O.jsx(R,{appear:i,in:u,nodeRef:x,onEnter:K,onEntered:M,onEntering:z,onExit:W,onExited:_,onExiting:U,addEndListener:q,timeout:a==="auto"?null:a,...b,children:(e,h)=>o.cloneElement(r,{style:{opacity:0,transform:H(.75),visibility:e==="exited"&&!u?"hidden":void 0,...nt[e],...p,...r.props.style},ref:C,...h})})});$&&($.muiSupportAuto=!0);export{$ as G,dt as P,ct as a,ut as u};
