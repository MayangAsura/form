import{p as re,I as Z,bN as ue,ca as de,cy as ce,bO as me,cf as fe,g as _e,bV as he,cj as ve,e as pe,d as T,y as ge,b_ as be,s as ye,b as xe,u as we,c as e,F as I,V as f,H as s,r as O,C as b,Q as z,E as t,L as g,G as a,D as B,b9 as $,k as Ve,bD as ke,bP as C,M as Ie,N as Ce,O as Be,aK as R,J as V,B as Se}from"./main-7116b29d.js";import{a as W,V as ee,b as te}from"./VWindowItem-e3fe3799.js";import{_ as Te}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ae}from"./index-8b8166df.js";import{V as _,a as j}from"./VRow-fd24a200.js";import{c as p,V as w,a as x,b as i,d as U,e as $e,g as E}from"./VCard-2293bc86.js";import{V as A}from"./VImg-d2643058.js";import{V as M}from"./VDivider-8d6669ae.js";import{V as ae,a as le}from"./VTabs-7c5ca974.js";import"./lazy-b0b001bd.js";import"./easing-9f15041e.js";const Me=re({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:Z,default:"$ratingEmpty"},fullIcon:{type:Z,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:l=>["top","bottom"].includes(l)},ripple:Boolean,...ue(),...de(),...ce(),...me(),...fe()},"v-rating"),se=_e()({name:"VRating",props:Me(),emits:{"update:modelValue":l=>!0},setup(l,v){let{slots:d}=v;const{t:y}=he(),{themeClasses:k}=ve(l),o=pe(l,"modelValue"),n=T(()=>ge(parseFloat(o.value),0,+l.length)),G=T(()=>be(Number(l.length),1)),Y=T(()=>G.value.flatMap(r=>l.halfIncrements?[r-.5,r]:[r])),N=ye(-1),D=T(()=>Y.value.map(r=>{const h=l.hover&&N.value>-1,c=n.value>=r,m=N.value>=r,S=(h?m:c)?l.fullIcon:l.emptyIcon,H=l.activeColor??l.color,F=c||m?H:l.color;return{isFilled:c,isHovered:m,icon:S,color:F}})),ie=T(()=>[0,...Y.value].map(r=>{function h(){N.value=r}function c(){N.value=-1}function m(){l.disabled||l.readonly||(o.value=n.value===r&&l.clearable?0:r)}return{onMouseenter:l.hover?h:void 0,onMouseleave:l.hover?c:void 0,onClick:m}})),q=T(()=>l.name??`v-rating-${xe()}`);function P(r){var Q,X;let{value:h,index:c,showStar:m=!0}=r;const{onMouseenter:L,onMouseleave:S,onClick:H}=ie.value[c+1],F=`${q.value}-${String(h).replace(".","-")}`,J={color:(Q=D.value[c])==null?void 0:Q.color,density:l.density,disabled:l.disabled,icon:(X=D.value[c])==null?void 0:X.icon,ripple:l.ripple,size:l.size,variant:"plain"};return e(I,null,[e("label",{for:F,class:{"v-rating__item--half":l.halfIncrements&&h%1>0,"v-rating__item--full":l.halfIncrements&&h%1===0},onMouseenter:L,onMouseleave:S,onClick:H},[e("span",{class:"v-rating__hidden"},[y(l.itemAriaLabel,h,l.length)]),m?d.item?d.item({...D.value[c],props:J,value:h,index:c,rating:n.value}):e(f,J,null):void 0]),e("input",{class:"v-rating__hidden",name:q.value,id:F,type:"radio",value:h,checked:n.value===h,tabindex:-1,readonly:l.readonly,disabled:l.disabled},null)])}function K(r){return d["item-label"]?d["item-label"](r):r.label?e("span",null,[r.label]):e("span",null,[s(" ")])}return we(()=>{var h;const r=!!((h=l.itemLabels)!=null&&h.length)||d["item-label"];return e(l.tag,{class:["v-rating",{"v-rating--hover":l.hover,"v-rating--readonly":l.readonly},k.value,l.class],style:l.style},{default:()=>[e(P,{value:0,index:-1,showStar:!1},null),G.value.map((c,m)=>{var L,S;return e("div",{class:"v-rating__wrapper"},[r&&l.itemLabelPosition==="top"?K({value:c,index:m,label:(L=l.itemLabels)==null?void 0:L[m]}):void 0,e("div",{class:"v-rating__item"},[l.halfIncrements?e(I,null,[e(P,{value:c-.5,index:m*2},null),e(P,{value:c,index:m*2+1},null)]):e(P,{value:c,index:m},null)]),r&&l.itemLabelPosition==="bottom"?K({value:c,index:m,label:(S=l.itemLabels)==null?void 0:S[m]}):void 0])})]})}),{}}}),Le="/build/assets/avatar-2-e08c0d9d.png",Ne="/build/assets/avatar-3-c4f5e15c.png",oe="/build/assets/avatar-4-51fa719c.png",Pe="/build/assets/2-900bffb1.png",Fe="/build/assets/1-bcaf6cc6.png",Re="/build/assets/2-131ad046.png",Ee="/build/assets/3-d1fa1b62.png",Ue="/build/assets/5-f951b35f.jpg",ze="/build/assets/6-cda15124.jpg";const u=l=>(Ce("data-v-4b6cf603"),l=l(),Be(),l),je={class:"d-flex justify-space-between flex-wrap pt-8"},De={class:"me-2 mb-2"},He={class:"d-flex justify-space-between align-center mt-4"},Oe=u(()=>a("span",{class:"font-weight-medium"},"18 mutual friends",-1)),We={class:"v-avatar-group"},Ge=u(()=>a("div",{class:"mb-4"}," Although cards can support multiple actions, UI controls, and an overflow menu. ",-1)),Ye={class:"d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row"},qe={class:"ma-auto pa-5"},Ke=u(()=>a("span",null,"Price :",-1)),Je=u(()=>a("span",{class:"font-weight-medium"},"$899",-1)),Qe=u(()=>a("span",{class:"ms-2"},"Add to cart",-1)),Xe={class:"d-flex flex-column-reverse flex-md-row"},Ze=u(()=>a("span",null,"5 Star | 98 reviews",-1)),et={class:"ma-auto pa-5"},tt=u(()=>a("p",{class:"font-weight-medium text-base"}," $249.40 ",-1)),at=u(()=>a("p",{class:"mb-0"}," 3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz ",-1)),lt={class:"me-auto pe-4"},st={class:"d-flex align-center mb-6"},nt=u(()=>a("span",{class:"ms-3"},"Full Access",-1)),ot={class:"d-flex align-center mb-0"},it=u(()=>a("span",{class:"ms-3"},"15 Members",-1)),rt={class:"ms-auto ps-4"},ut={class:"d-flex align-center mb-6"},dt=u(()=>a("span",{class:"ms-3"},"Access all Features",-1)),ct={class:"d-flex align-center mb-0"},mt=u(()=>a("span",{class:"ms-3"},"Lifetime Free Update",-1)),ft={class:"membership-pricing d-flex flex-column align-center py-14 h-100 justify-center"},_t=u(()=>a("p",{class:"mb-5"},[a("sub",{class:"text-h5"},"$"),a("sup",{class:"text-h2 font-weight-medium"},"899"),a("sub",{class:"text-h5"},"USD")],-1)),ht=u(()=>a("p",{class:"text-sm"},[s(" 5 Tips For Offshore "),a("br"),s(" Software Development ")],-1)),vt=u(()=>a("span",{class:"text-subtitle-2"},"5 Star | 98 reviews",-1)),pt=u(()=>a("p",null," If you are looking for a new way to promote your business that won't cost you more money, maybe printing is one of the options you won't resist. ",-1)),gt=u(()=>a("p",{class:"mb-0"}," become fast, easy and simple. If you want your promotional material to be an eye-catching ",-1)),bt=u(()=>a("h6",{class:"text-h6"}," Support ",-1)),yt=u(()=>a("p",null," According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle. ",-1)),xt={__name:"CardBasic",setup(l){const v=[W,Le,Ne,oe],d=O(!1);return(y,k)=>(b(),z(j,null,{default:t(()=>[e(_,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(p,null,{default:t(()=>[e(A,{src:g(Fe),cover:""},null,8,["src"]),e(w,null,{default:t(()=>[e(x,null,{default:t(()=>[s("Influencing The Influencer")]),_:1})]),_:1}),e(i,null,{default:t(()=>[s(" Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago. ")]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(p,null,{default:t(()=>[e(A,{src:g(Re)},null,8,["src"]),e(i,{class:"position-relative"},{default:t(()=>[e(U,{size:"75",class:"avatar-center",image:g(W)},null,8,["image"]),a("div",je,[a("div",De,[e(x,{class:"pa-0"},{default:t(()=>[s(" Robert Meyer ")]),_:1}),e($e,{class:"text-caption pa-0"},{default:t(()=>[s(" London, UK ")]),_:1})]),e(f,null,{default:t(()=>[s("send request")]),_:1})]),a("div",He,[Oe,a("div",We,[(b(),B(I,null,$(v,o=>e(U,{key:o,image:o,size:"40"},null,8,["image"])),64))])])]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"4",sm:"6"},{default:t(()=>[e(p,null,{default:t(()=>[e(A,{src:g(Ee),cover:"","max-height":"280"},null,8,["src"]),e(w,null,{default:t(()=>[e(x,null,{default:t(()=>[s("Popular Uses Of The Internet")]),_:1})]),_:1}),e(i,null,{default:t(()=>[Ge,e(f,{variant:"text",density:"comfortable",onClick:k[0]||(k[0]=o=>d.value=!g(d))},{default:t(()=>[s(" Details ")]),_:1})]),_:1}),e(Ae,null,{default:t(()=>[Ve(a("div",null,[e(M),e(i,null,{default:t(()=>[s(" I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. ")]),_:1})],512),[[ke,g(d)]])]),_:1})]),_:1})]),_:1}),e(_,{sm:"6",cols:"12"},{default:t(()=>[e(p,null,{default:t(()=>[a("div",Ye,[a("div",qe,[e(A,{width:"137",height:"176",src:g(Pe)},null,8,["src"])]),e(M,{vertical:y.$vuetify.display.mdAndUp},null,8,["vertical"]),a("div",null,[e(w,null,{default:t(()=>[e(x,null,{default:t(()=>[s("Apple iPhone 11 Pro")]),_:1})]),_:1}),e(i,null,{default:t(()=>[s(" Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic ")]),_:1}),e(i,{class:"text-subtitle-1"},{default:t(()=>[Ke,s(),Je]),_:1}),e(E,{class:"justify-space-between"},{default:t(()=>[e(f,null,{default:t(()=>[e(C,{icon:"bx-cart-add"}),Qe]),_:1}),e(f,{color:"secondary",icon:"bx-share-alt"})]),_:1})])])]),_:1})]),_:1}),e(_,{sm:"6",cols:"12"},{default:t(()=>[e(p,null,{default:t(()=>[a("div",Xe,[a("div",null,[e(w,null,{default:t(()=>[e(x,null,{default:t(()=>[s("Stumptown Roasters")]),_:1})]),_:1}),e(i,{class:"d-flex align-center flex-wrap text-body-1"},{default:t(()=>[e(se,{"model-value":5,readonly:"",class:"me-3",density:"compact"}),Ze]),_:1}),e(i,null,{default:t(()=>[s(" Before there was a United States of America, there were coffee houses, because how are you supposed to build. ")]),_:1}),e(E,null,{default:t(()=>[e(f,null,{default:t(()=>[s("Location")]),_:1}),e(f,null,{default:t(()=>[s("Reviews")]),_:1})]),_:1})]),a("div",et,[e(A,{width:176,src:g(Ue),class:"rounded"},null,8,["src"])])])]),_:1})]),_:1}),e(_,{lg:"4",sm:"6",cols:"12"},{default:t(()=>[e(p,null,{default:t(()=>[e(A,{src:g(ze)},null,8,["src"]),e(w,null,{default:t(()=>[e(x,null,{default:t(()=>[s("Apple Watch")]),_:1})]),_:1}),e(i,null,{default:t(()=>[tt,at]),_:1}),e(f,{block:"",class:"rounded-t-0"},{default:t(()=>[s(" Add to cart ")]),_:1})]),_:1})]),_:1}),e(_,{md:"6",lg:"8",cols:"12"},{default:t(()=>[e(p,null,{default:t(()=>[e(j,{"no-gutters":""},{default:t(()=>[e(_,{cols:"12",sm:"8",md:"12",lg:"7",order:"2","order-lg":"1"},{default:t(()=>[e(w,null,{default:t(()=>[e(x,null,{default:t(()=>[s("Lifetime Membership")]),_:1})]),_:1}),e(i,null,{default:t(()=>[s(" Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men. ")]),_:1}),e(i,null,{default:t(()=>[e(M)]),_:1}),e(i,{class:"d-flex justify-center"},{default:t(()=>[a("div",lt,[a("p",st,[e(C,{color:"primary",icon:"bx-lock-open"}),nt]),a("p",ot,[e(C,{color:"primary",icon:"bx-user"}),it])]),y.$vuetify.display.smAndUp?(b(),z(M,{key:0,vertical:"",inset:""})):Ie("",!0),a("div",rt,[a("p",ut,[e(C,{color:"primary",icon:"bx-star"}),dt]),a("p",ct,[e(C,{color:"primary",icon:"bx-trending-up"}),mt])])]),_:1})]),_:1}),e(_,{cols:"12",sm:"4",md:"12",lg:"5",order:"1","order-lg":"2",class:"member-pricing-bg text-center"},{default:t(()=>[a("div",ft,[_t,ht,e(f,{class:"mt-8"},{default:t(()=>[s(" Contact Now ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",lg:"4",md:"6"},{default:t(()=>[e(p,{title:"Influencing The Influencer"},{default:t(()=>[e(i,null,{default:t(()=>[s(" Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch. ")]),_:1}),e(i,null,{default:t(()=>[s(" If you're in the market for new desktops, notebooks, or PDAs, there are a myriad of choices. Here's a rundown of some of the best systems available. ")]),_:1}),e(E,null,{default:t(()=>[e(f,null,{default:t(()=>[s("Read More")]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",lg:"4",md:"6"},{default:t(()=>[e(p,{title:"The Best Answers"},{default:t(()=>[e(i,{class:"d-flex align-center flex-wrap"},{default:t(()=>[e(se,{"model-value":5,readonly:"",density:"compact",class:"me-3"}),vt]),_:1}),e(i,null,{default:t(()=>[pt,gt]),_:1}),e(E,null,{default:t(()=>[e(f,null,{default:t(()=>[s("Location")]),_:1}),e(f,null,{default:t(()=>[s("Reviews")]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{cols:"12",md:"6",lg:"4"},{default:t(()=>[e(p,{class:"text-center"},{default:t(()=>[e(i,{class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(U,{color:"primary",variant:"tonal",size:"50",class:"mb-4"},{default:t(()=>[e(C,{size:"2rem",icon:"bx-help-circle"})]),_:1}),bt]),_:1}),e(i,null,{default:t(()=>[yt]),_:1}),e(i,null,{default:t(()=>[e(f,{variant:"elevated"},{default:t(()=>[s(" Contact Now ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},wt=Te(xt,[["__scopeId","data-v-4b6cf603"]]),ne="Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards...",Vt={__name:"CardNavigation",setup(l){const v=O("ITEM ONE"),d=O("ITEM ONE"),y=["ITEM ONE","ITEM TWO","ITEM THREE"];return(k,o)=>(b(),z(j,null,{default:t(()=>[e(_,{md:"6",cols:"12"},{default:t(()=>[e(p,null,{default:t(()=>[e(ae,{modelValue:g(v),"onUpdate:modelValue":o[0]||(o[0]=n=>R(v)?v.value=n:null)},{default:t(()=>[(b(),B(I,null,$(y,n=>e(le,{key:n,value:n},{default:t(()=>[s(V(n),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(M),e(ee,{modelValue:g(v),"onUpdate:modelValue":o[1]||(o[1]=n=>R(v)?v.value=n:null)},{default:t(()=>[(b(),B(I,null,$(y,n=>e(te,{key:n,value:n},{default:t(()=>[e(w,null,{default:t(()=>[e(x,null,{default:t(()=>[s("Navigation Card")]),_:1})]),_:1}),e(i,null,{default:t(()=>[s(V(ne))]),_:1}),e(i,null,{default:t(()=>[e(f,null,{default:t(()=>[s("Learn More")]),_:1})]),_:1})]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(_,{md:"6",cols:"12"},{default:t(()=>[e(p,null,{default:t(()=>[e(ae,{modelValue:g(d),"onUpdate:modelValue":o[2]||(o[2]=n=>R(d)?d.value=n:null),"align-tabs":"center"},{default:t(()=>[(b(),B(I,null,$(y,n=>e(le,{key:n,value:n},{default:t(()=>[s(V(n),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(M),e(ee,{modelValue:g(d),"onUpdate:modelValue":o[3]||(o[3]=n=>R(d)?d.value=n:null)},{default:t(()=>[(b(),B(I,null,$(y,n=>e(te,{key:n,value:n,class:"text-center"},{default:t(()=>[e(w,null,{default:t(()=>[e(x,null,{default:t(()=>[s("Navigation Card")]),_:1})]),_:1}),e(i,null,{default:t(()=>[s(V(ne))]),_:1}),e(i,null,{default:t(()=>[e(f,null,{default:t(()=>[s("Learn More")]),_:1})]),_:1})]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},kt="/build/assets/avatar-8-4955f2bf.png",It={class:"clamp-text text-white mb-0"},Ct={class:"text-no-wrap"},Bt={class:"text-white ms-2"},St={class:"d-flex align-center"},Tt={class:"text-subtitle-2 text-white me-4"},At={class:"text-subtitle-2 text-white"},$t={__name:"CardSolid",setup(l){const v=[{cardBg:"#16B1FF",title:"Twitter Card",icon:"bxl-twitter",text:'"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',avatarImg:oe,avatarName:"Mary Vaughn",likes:"1.2k",share:"80"},{cardBg:"#3B5998",title:"Facebook Card",icon:"bxl-facebook",text:"You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients.",avatarImg:W,avatarName:"Eugene Clarke",likes:"3.2k",share:"49"},{cardBg:"#007BB6",title:"Linkedin Card",icon:"bxl-linkedin",text:"With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed.",avatarImg:kt,avatarName:"Anne Burke1",likes:"1.2k",share:"80"}];return(d,y)=>{const k=Se("IconBtn");return b(),z(j,null,{default:t(()=>[(b(),B(I,null,$(v,o=>e(_,{key:o.icon,cols:"12",md:"6",lg:"4"},{default:t(()=>[e(p,{color:o.cardBg},{default:t(()=>[e(w,null,{prepend:t(()=>[e(C,{size:"1.9rem",color:"white",icon:o.icon},null,8,["icon"])]),default:t(()=>[e(x,{class:"text-white"},{default:t(()=>[s(V(o.title),1)]),_:2},1024)]),_:2},1024),e(i,null,{default:t(()=>[a("p",It,V(o.text),1)]),_:2},1024),e(i,{class:"d-flex justify-space-between align-center flex-wrap"},{default:t(()=>[a("div",Ct,[e(U,{size:"34",image:o.avatarImg},null,8,["image"]),a("span",Bt,V(o.avatarName),1)]),a("div",St,[e(k,{icon:"bx-heart",color:"white",class:"me-1"}),a("span",Tt,V(o.likes),1),e(k,{icon:"bx-share-alt",color:"white",class:"me-1"}),a("span",At,V(o.share),1)])]),_:2},1024)]),_:2},1032,["color"])]),_:2},1024)),64))]),_:1})}}},Mt=a("p",{class:"text-2xl mb-6"}," Basic Cards ",-1),Lt=a("p",{class:"text-2xl mb-6 mt-14"}," Navigation Cards ",-1),Nt=a("p",{class:"text-2xl mt-14 mb-6"}," Solid Cards ",-1),Gt={__name:"cards",setup(l){return(v,d)=>(b(),B("div",null,[Mt,e(wt),Lt,e(Vt),Nt,e($t)]))}};export{Gt as default};
