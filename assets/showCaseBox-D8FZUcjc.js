import{j as e,r as s}from"./index-Cmwe-C8R.js";import{C as j}from"./component.module-BD0YSLJX.js";import{B as u}from"./Box-zPS9oF5n.js";import{f as R}from"./fecthData-9SLkk-nw.js";import{S as $}from"./shopCard-CxJR0JKD.js";import{K as A,a as k}from"./baseContent-BXj98wn0.js";import{c as p,I as L}from"./IconButton-BfCg_MN7.js";import{S as x}from"./Stack-CZFgWAWF.js";import{T as C}from"./Typography-OTWVZArR.js";const M=p(e.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack"),z=p(e.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward"),H=p([e.jsx("path",{d:"M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"},"0"),e.jsx("path",{d:"m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"},"1")],"KeyboardDoubleArrowRightSharp");function P(t){return e.jsx(e.Fragment,{children:e.jsx(u,{sx:{backgroundColor:`${t.backgroundColor||"rgb(224, 224, 224)"}`,position:"relative",width:"100%",height:`${t.size||"1.25rem"}`,borderRadius:"0.99rem",overflow:"hidden",margin:"0.75rem",...t.sx},children:e.jsx(u,{sx:{backgroundColor:`${t.color||"rgb(255, 213, 2)"}`,backgroundImage:`${t.colorImage||""}`,height:"100%",width:`${t.fill}%`}})})})}const E=s.memo(t=>{const[c,l]=s.useState(!1),h={backgroundColor:"transparent",border:"rgb(173, 166, 166) 2px solid",color:"white",borderRadius:"25px",height:"48px",width:"48px",cursor:"pointer"};return e.jsx(u,{component:"button",onMouseEnter:()=>!t.disable&&l(!0),onMouseLeave:()=>l(!1),onClick:t.disable?()=>{}:t.onClick,sx:{...h,opacity:`${t.disable?"0.5":"1"}`,cursor:`${t.disable?"":"pointer"}`},children:c&&!t.disable?t.hoverIcon:t.icon})}),B="http://localhost:3000/",q=s.memo(function(c){const[l,h]=s.useState(!1),[n,v]=s.useState({pos:0,click:0,maxClick:0}),[m,b]=s.useState(null),f=s.useRef(null),g=s.useRef(null),S=()=>{if(!f.current||!g.current)return 0;const o=f.current.getBoundingClientRect(),r=g.current.getBoundingClientRect(),d=r.width/o.width-1;if(d==0)return 0;const a=o.width/(r.width*.1);return Math.ceil(a*d)},w=o=>{if(!m)return;let r=0;const d=n.maxClick,a=S();let i=n.click;if(o=="left"?(r=n.pos-10,i=i-1):o=="right"&&(r=n.pos+10,i=i+1),d!=a){const D=d-a;i=i-D,r=10*i}i>a&&(i=a,r=i*10),(i<0||r<0)&&(i=0,r=0),v({pos:r,click:i,maxClick:a})},I=[{icon:e.jsx(A,{}),hoverIcon:e.jsx(M,{}),onClick:()=>w("left"),isDisable:n.click==0},{icon:e.jsx(k,{}),hoverIcon:e.jsx(z,{}),onClick:()=>w("right"),isDisable:n.click==n.maxClick&&n.maxClick!=0}],y=async()=>{try{const o=await R({url:B+`legos/info?name=legos&section=${c.section}`,methoud:"get"});if(o){const r=o.rows;b(r)}}catch(o){console.log(o)}};return s.useEffect(()=>{c.section?y():c.item&&b(c.item)},[]),e.jsx(e.Fragment,{children:m&&e.jsxs(u,{margin:"80px 0 80px 0",gap:"48px",display:"flex",flexDirection:"column",children:[e.jsxs(x,{direction:{xs:"column",sm:"row"},alignItems:{xs:"start",sm:"center"},justifyContent:"space-between",children:[e.jsx(C,{component:"h2",sx:{fontSize:"1.75rem",lineHeight:"1.1",fontWeight:"600"},children:c.title}),e.jsxs(x,{direction:"row",alignItems:"center",sx:{transition:" 0.3s ease-in-out",cursor:"pointer"},onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.jsx(C,{className:`${j.underline} ${l?j.underlineHover:""}`,sx:{position:"relative",fontSize:"16px"},children:"View All"}),e.jsx(L,{children:l?e.jsx(H,{}):e.jsx(k,{})})]})]}),e.jsx(u,{ref:f,position:"relative",height:"410px",overflow:"hidden",children:e.jsx(x,{ref:g,direction:"row",gap:"10px",position:"absolute",sx:{transform:`translate(${-n.pos}%)`,transition:"transform 0.3s ease-in-out",left:0},children:m&&m.map(o=>e.jsx($,{sx:{width:"300px"},id:`${o.id}`,name:o.name,price:o.price,picture:B+"storage/"+o.image_uploaded_png[0],sale:(o.sale||1)*100,timer:o.timesale},o.id))})}),e.jsxs(x,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:"50px",children:[e.jsx(P,{fill:n.maxClick!=0?n.click/n.maxClick*100:0,color:"none",colorImage:" linear-gradient(136deg, rgb(0, 0, 0) 0%, rgb(0, 76, 153) 50%, rgb(0, 123, 255) 100%)",backgroundColor:"#424242",size:"2px"}),e.jsx(x,{direction:"row",gap:"10px",children:I.map((o,r)=>e.jsx(E,{icon:o.icon,hoverIcon:o.hoverIcon,onClick:o.onClick,disable:o.isDisable},r))})]})]})})});export{M as A,P,q as S,z as a};