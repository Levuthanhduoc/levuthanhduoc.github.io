import{r as i,w as D,j as e,D as P,s as k}from"./index-D5pX6302.js";import{A}from"./AppTheme-DIzLHyh1.js";import{C as N}from"./ColorModeSelect-wJT5oHd_.js";import{T as d}from"./Typography-CrxpHmPT.js";import{B as C}from"./Box-Cby90BCR.js";import{b as c}from"./Select-BesQJ5mH.js";import{a as u,T as x}from"./TextField-CVY4S9he.js";import{F as R,C as U}from"./FormControlLabel-BR29usde.js";import{B as W}from"./listItemTextClasses-B1_4AOWS.js";import{L as q}from"./Link-CKa5jwLC.js";import{C as L}from"./Card-BTAKRoWn.js";import{S as z}from"./Stack-C4PaOJaX.js";import"./ButtonBase-9oSa2JUu.js";import"./TransitionGroupContext-z8OabIrq.js";import"./toggleButtonClasses-CtAiA76S.js";import"./iconButtonClasses-DcT-f4kU.js";import"./dividerClasses-BSwl_sl9.js";import"./tabClasses-B5QezPLh.js";import"./InputBase-DTykFqmy.js";import"./ownerWindow-BHp5sQI1.js";import"./useTheme-MFxDN3Ki.js";import"./react-is.production.min-DUDD-a5e.js";import"./Portal-eRj7pKhv.js";import"./useSlotProps-CJSahpOm.js";import"./utils-BcMrzJk_.js";import"./Fade-ZxgvaLvK.js";import"./Paper-CGjRDlWx.js";import"./Grow-CRhCDY5e.js";import"./checkboxClasses-BV_S66V8.js";import"./useThemeProps-BvER-489.js";const O="http://localhost:3000/",$=k(L)(({theme:a})=>({display:"flex",flexDirection:"column",alignSelf:"center",width:"100%",padding:a.spacing(4),gap:a.spacing(2),margin:"auto",boxShadow:"hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",[a.breakpoints.up("sm")]:{width:"450px"},...a.applyStyles("dark",{boxShadow:"hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"})})),H=k(z)(({theme:a})=>({height:"calc((1 - var(--template-frame-height, 0)) * 100dvh)",minHeight:"100%",padding:a.spacing(2),[a.breakpoints.up("sm")]:{padding:a.spacing(4)},"&::before":{content:'""',display:"block",position:"absolute",zIndex:-1,inset:0,backgroundImage:"radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",backgroundRepeat:"no-repeat",...a.applyStyles("dark",{backgroundImage:"none"})}}));function Se(a){const[g,h]=i.useState(!1),[T,f]=i.useState(""),[l,j]=i.useState(!1),[F,w]=i.useState(""),[p,y]=i.useState(!1),[M,S]=i.useState(""),[E,b]=i.useState(null),v=D(),B=()=>{const t=document.getElementById("email"),s=document.getElementById("password"),n=document.getElementById("name"),m=new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/);b(null);let r=!0;return!t.value||!/\S+@\S+\.\S+/.test(t.value)?(h(!0),f("Please enter a valid email address."),r=!1):(h(!1),f("")),!s.value||!m.test(s.value)?(j(!0),w("Password must be at least 6 characters long."),r=!1):(j(!1),w("")),!n.value||n.value.length<3?(y(!0),S("Name is required."),r=!1):(y(!1),S("")),r},I=async t=>{let s=[];if(t.preventDefault(),p||g||l)return;const n=new FormData(t.currentTarget),m=JSON.stringify({name:n.get("name"),password:n.get("password"),email:n.get("email")});try{let r=await fetch(O+"users/signup",{method:"POST",body:m,headers:{"Content-Type":"application/json"}});if(r.ok){const o=await r.json();if(o.status){v("/signin");return}else console.log(o),s=[...s,...o.data.message]}}catch(r){let o="";typeof r=="string"?o=r.toUpperCase():r instanceof Error&&(o=r.message),s.push(o)}s.length>0&&b(s)};return e.jsxs(A,{...a,children:[e.jsx(P,{enableColorScheme:!0}),e.jsx(N,{sx:{position:"fixed",top:"1rem",right:"1rem"}}),e.jsx(H,{direction:"column",justifyContent:"space-between",children:e.jsxs($,{variant:"outlined",children:[e.jsx(d,{component:"h1",variant:"h4",sx:{width:"100%",fontSize:"clamp(2rem, 10vw, 2.15rem)"},children:"Sign up"}),E&&e.jsx(C,{sx:{color:"rgb(145, 8, 8)"},children:E.map((t,s)=>e.jsx(d,{children:t},s))}),e.jsxs(C,{component:"form",onSubmit:I,sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(c,{children:[e.jsx(u,{htmlFor:"name",children:"Username"}),e.jsx(x,{autoComplete:"name",name:"name",required:!0,fullWidth:!0,id:"name",placeholder:"jonhCena",error:p,helperText:M,color:p?"error":"primary"})]}),e.jsxs(c,{children:[e.jsx(u,{htmlFor:"email",children:"Email"}),e.jsx(x,{required:!0,fullWidth:!0,id:"email",placeholder:"your@email.com",name:"email",autoComplete:"email",variant:"outlined",error:g,helperText:T,color:l?"error":"primary"})]}),e.jsxs(c,{children:[e.jsx(u,{htmlFor:"password",children:"Password"}),e.jsx(x,{required:!0,fullWidth:!0,name:"password",placeholder:"••••••",type:"password",id:"password",autoComplete:"new-password",variant:"outlined",error:l,helperText:F,color:l?"error":"primary"})]}),e.jsx(R,{control:e.jsx(U,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive updates via email."}),e.jsx(W,{type:"submit",fullWidth:!0,variant:"contained",onClick:B,children:"Sign up"}),e.jsxs(d,{sx:{textAlign:"center"},children:["Already have an account?"," ",e.jsx("span",{style:{cursor:"pointer"},onClick:()=>v("/signin"),children:e.jsx(q,{variant:"body2",sx:{alignSelf:"center"},children:"Sign in"})})]})]})]})})]})}export{Se as default};