import{r as s,U as o}from"./index-BhbbloSs.js";let u=0;function f(t){const[e,n]=s.useState(t),c=t||e;return s.useEffect(()=>{e==null&&(u+=1,n(`mui-${u}`))},[e]),c}const l={...o},a=l.useId;function d(t){if(a!==void 0){const e=a();return t??e}return f(t)}export{d as u};
