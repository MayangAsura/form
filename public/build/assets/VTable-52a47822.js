import{p as b,bN as h,ca as m,bO as d,cf as c,g as v,cj as f,cm as u,u as g,c as t,x}from"./main-7116b29d.js";const T=b({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...h(),...m(),...d(),...c()},"v-table"),V=v()({name:"VTable",props:T(),setup(a,r){let{slots:e}=r;const{themeClasses:n}=f(a),{densityClasses:i}=u(a);return g(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},n.value,i.value,a.class],style:a.style},{default:()=>{var o,s,l;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:x(a.height)}},[t("table",null,[e.default()])]):(s=e.wrapper)==null?void 0:s.call(e),(l=e.bottom)==null?void 0:l.call(e)]}})),{}}});export{V,T as m};
