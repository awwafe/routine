import{_ as k,o as e,d as a,a as s,t as y,n as I,p as A,g as S,u as n,h as c,i as g,b as C,j as O,k as x,e as h,w as N,R as V,F as $,r as T,c as w,f as D}from"./index.3047f404.js";var E="/routine/check.png";const R=t=>(A("data-v-95e5db6a"),t=t(),S(),t),L={class:"task__name"},B=R(()=>s("img",{src:E,alt:"check"},null,-1)),M=[B],j={__name:"TaskItem",props:{task:{type:Object,required:!0}},setup(t){const r=t;function _(){r.task.completed=!r.task.completed}return(l,m)=>(e(),a("div",{class:"task",onClick:_},[s("div",L,y(t.task.label),1),s("div",{class:I(["task__status",{"is-checked":t.task.completed}])},M,2)]))}};var q=k(j,[["__scopeId","data-v-95e5db6a"]]),F="/routine/assets/animation-1.54df5d4d.gif",J="/routine/assets/animation-2.6f25f7ef.gif",U="/routine/assets/animation-3.c6adb7e5.gif",z="/routine/assets/animation-4.22ce13ab.gif",G="/routine/assets/animation-5.3382d7e9.gif",H="/routine/assets/animation-6.1f928e43.gif",K="/routine/assets/animation-7.25d65325.gif",P="/routine/assets/animation-8.ff3556b1.gif";const b=t=>(A("data-v-1a8caa56"),t=t(),S(),t),X={class:"dialog__modal"},Y=b(()=>s("div",{class:"dialog__title"}," CONGRATULATIONS! ",-1)),Q={class:"dialog__content"},W=b(()=>s("div",null," YOU HAVE COMPLETED ALL TASKS ",-1)),Z={key:0,alt:"Animation",class:"animation",src:F},tt={key:1,alt:"Animation",class:"animation",src:J},et={key:2,alt:"Animation",class:"animation",src:U},st={key:3,alt:"Animation",class:"animation",src:z},at={key:4,alt:"Animation",class:"animation",src:G},it={key:5,alt:"Animation",class:"animation",src:H},ot={key:6,alt:"Animation",class:"animation",src:K},nt={key:7,alt:"Animation",class:"animation",src:P},lt={__name:"VDialog",props:{open:{type:Boolean,required:!0}},emits:["close"],setup(t,{emit:r}){const _=[1,2,3,4,5,6,7,8],l=JSON.parse(localStorage.getItem("displayedAnimations")||"[]"),m=_.filter(u=>!l.includes(u)),i=m[Math.floor(Math.random()*m.length)];l.push(i),l.length>5&&l.shift(),localStorage.setItem("displayedAnimations",JSON.stringify(l));function d(){r("close")}return(u,p)=>(e(),a("div",{class:I(["dialog",{"is-visible":t.open}])},[s("div",{class:"dialog__takeover",onClick:d}),s("div",X,[Y,s("div",{class:"dialog__close",onClick:d}," X "),s("div",Q,[W,s("div",null,[n(i)===1?(e(),a("img",Z)):c("",!0),n(i)===2?(e(),a("img",tt)):c("",!0),n(i)===3?(e(),a("img",et)):c("",!0),n(i)===4?(e(),a("img",st)):c("",!0),n(i)===5?(e(),a("img",at)):c("",!0),n(i)===6?(e(),a("img",it)):c("",!0),n(i)===7?(e(),a("img",ot)):c("",!0),n(i)===8?(e(),a("img",nt)):c("",!0)]),s("button",{onClick:d}," DONE ")])])],2))}};var ct=k(lt,[["__scopeId","data-v-1a8caa56"]]);const rt={class:"profile"},_t=D(" DONE "),dt={class:"item-list"},pt={__name:"RoutineView",props:{profileId:String,routineId:String},setup(t){const r=t,_=g(!1);function l(){_.value=!1}const d=C().profiles.find(o=>o.id===parseInt(r.profileId)).routines.find(o=>o.id===parseInt(r.routineId)),u=g([]);d.tasks.forEach(o=>{u.value.push({label:o.label,completed:!1})});const p=O(()=>u.value.every(o=>o.completed));let f=!1;return x(p,o=>{o&&!f&&(f=!0,_.value=!0)}),(o,ut)=>(e(),a("div",rt,[s("h1",null,y(n(d).name)+" Routine",1),h(n(V),{to:"/"},{default:N(()=>[_t]),_:1}),s("div",dt,[(e(!0),a($,null,T(u.value,v=>(e(),w(q,{id:v.label,task:v},null,8,["id","task"]))),256))]),h(ct,{open:_.value,onClose:l},null,8,["open"])]))}};export{pt as default};
