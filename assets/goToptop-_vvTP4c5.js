import{j as o,r as t}from"./index-Cmwe-C8R.js";import{c as n,I as l}from"./IconButton-BfCg_MN7.js";const a=n([o.jsx("path",{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},"0"),o.jsx("path",{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},"1")],"KeyboardDoubleArrowUp");function d(){const[e,s]=t.useState(!1),r=()=>{window.scrollY>300?s(!0):s(!1)};return t.useEffect(()=>{window.addEventListener("scroll",r)},[]),o.jsx(o.Fragment,{children:e&&o.jsx(l,{sx:{position:"fixed",zIndex:1e3,bottom:"70px",right:"10px",background:" #0056B3"},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:o.jsx(a,{})})})}export{d as default};