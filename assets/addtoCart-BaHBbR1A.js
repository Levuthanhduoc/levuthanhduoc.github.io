const o=(t,c)=>{const{cart:e,setCart:d}=c;if(e){let i=1;const r=[...e];let a=[],l=!1,n=0;for(const s of r)s.id==t.id&&(i=Number(s.quantity)+1,r[n].quantity=`${i}`,l=!0),n=n+1;l?a=r:a=[...e,{id:t.id,name:t.name,quantity:`${i}`,price:`${t.price}`,sale:`${t.sale||0}`}],localStorage.setItem("shopCart",JSON.stringify(a)),d(a)}};export{o as A};