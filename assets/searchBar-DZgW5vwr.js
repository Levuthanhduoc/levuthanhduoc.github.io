import{j as r,R as m,r as n}from"./index-B6mmHA4u.js";import{c as h}from"./ButtonBase-CuIIuAh8.js";import{u as x}from"./useTranslation-NlrpaXS2.js";import{I as u}from"./InputBase-BYHp5D8w.js";const f=h(r.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),v=m.forwardRef((a,s)=>{const[t,c]=n.useState(""),{t:o}=x();return r.jsx(u,{ref:s,sx:a.sx?a.sx:{width:{xs:"100px",sm:"20vw"}},onChange:e=>{c(e.target.value),a.onSearch(e.target.value)},value:t,id:"searchBar",className:"text",placeholder:o("common.search")})});export{f as S,v as a};