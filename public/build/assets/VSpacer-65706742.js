import{i as h,aK as R,r as p,ah as m,L as b,P as V,b6 as w}from"./main-7116b29d.js";import{f as L}from"./VCard-2293bc86.js";function _(t,e){let a,u,s;const n=p(!0),r=()=>{n.value=!0,s()};h(t,r,{flush:"sync"});const c=typeof e=="function"?e:e.get,o=typeof e=="function"?void 0:e.set,f=m((i,v)=>(u=i,s=v,{get(){return n.value&&(a=c(),n.value=!1),u(),a},set(g){o==null||o(g)}}));return Object.isExtensible(f)&&(f.trigger=r),f}function d(t){return typeof t=="function"?t():b(t)}const x=()=>{};function j(...t){if(t.length!==1)return V(...t);const e=t[0];return typeof e=="function"?w(m(()=>({get:e,set:x}))):p(e)}function k(t,e,a={}){var u,s;const{flush:n="sync",deep:r=!1,immediate:c=!0,direction:o="both",transform:f={}}=a;let i,v;const g=(u=f.ltr)!=null?u:l=>l,y=(s=f.rtl)!=null?s:l=>l;return(o==="both"||o==="ltr")&&(i=h(t,l=>e.value=g(l),{flush:n,deep:r,immediate:c})),(o==="both"||o==="rtl")&&(v=h(e,l=>t.value=y(l),{flush:n,deep:r,immediate:c})),()=>{i==null||i(),v==null||v()}}function C(t=!1,e={}){const{truthyValue:a=!0,falsyValue:u=!1}=e,s=R(t),n=p(t);function r(c){if(arguments.length)return n.value=c,n.value;{const o=d(a);return n.value=n.value===o?d(u):o,n.value}}return s?r:[n,r]}const E=L("flex-grow-1","div","VSpacer");export{E as V,d as a,_ as c,k as s,j as t,C as u};
