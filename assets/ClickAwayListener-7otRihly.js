import{r as n,j as k}from"./index-0Al3NA_R.js";import{u as C}from"./TransitionGroupContext-Cev5wNdk.js";import{g as T}from"./utils-BHYmojG2.js";import{a as w}from"./ButtonBase-D-qFk_4g.js";import{o as p}from"./useTheme-CvEDvl7a.js";function v(o){return o.substring(2).toLowerCase()}function x(o,s){return s.documentElement.clientWidth<o.clientX||s.documentElement.clientHeight<o.clientY}function H(o){const{children:s,disableReactTree:R=!1,mouseEvent:u="onClick",onClickAway:L,touchEvent:i="onTouchEnd"}=o,f=n.useRef(!1),c=n.useRef(null),l=n.useRef(!1),d=n.useRef(!1);n.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const g=C(T(s),c),a=w(e=>{const t=d.current;d.current=!1;const r=p(c.current);if(!l.current||!c.current||"clientX"in e&&x(e,r))return;if(f.current){f.current=!1;return}let E;e.composedPath?E=e.composedPath().includes(c.current):E=!r.documentElement.contains(e.target)||c.current.contains(e.target),!E&&(R||!t)&&L(e)}),h=e=>t=>{d.current=!0;const r=s.props[e];r&&r(t)},m={ref:g};return i!==!1&&(m[i]=h(i)),n.useEffect(()=>{if(i!==!1){const e=v(i),t=p(c.current),r=()=>{f.current=!0};return t.addEventListener(e,a),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,a),t.removeEventListener("touchmove",r)}}},[a,i]),u!==!1&&(m[u]=h(u)),n.useEffect(()=>{if(u!==!1){const e=v(u),t=p(c.current);return t.addEventListener(e,a),()=>{t.removeEventListener(e,a)}}},[a,u]),k.jsx(n.Fragment,{children:n.cloneElement(s,m)})}export{H as C};