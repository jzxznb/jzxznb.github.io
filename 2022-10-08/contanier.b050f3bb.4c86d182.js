import{i as l,T as c,x as r,o as d,b as i,A as m,z as u}from"./1.47be6668.js";const p=(o,e)=>{const a=o.__vccOpts||o;for(const[s,t]of e)a[s]=t;return a},y={__name:"contanier",props:{animate:{type:Object,default:()=>({show:!1,start:{},end:{},display:{},delay:0})},show:{type:Boolean,default:!1}},setup(o){const e=o,a=l(e.animate.start),s=()=>{const t=setTimeout(()=>{a.value={...e.animate.display,zIndex:2},clearTimeout(t)},e.animate.delay||100)};return c(()=>e.show,(t,n)=>{t?s():a.value={...e.animate.start,zIndex:-1}}),r(()=>{e.show&&s()}),(t,n)=>(d(),i("div",{class:"container",style:u(a.value)},[m(t.$slots,"default",{},void 0,!0)],4))}},v=p(y,[["__scopeId","data-v-0c73c25c"]]);export{p as u,v as y};