import{_ as p,o as l,d as c,a as s,t as u,n as C,p as V,g as $,h as D,i as y,b as A,j as N,k as R,u as b,e as r,w as _,V as S,F as T,r as F,c as j,f as w}from"./index.1aec5cac.js";var q="/routine/check.png";const E=e=>(V("data-v-16f4ba3a"),e=e(),$(),e),J={class:"task__name"},M=E(()=>s("img",{src:q,alt:"check"},null,-1)),U=[M],z={__name:"TaskItem",props:{task:{type:Object,required:!0}},setup(e){const o=e;function a(){o.task.completed=!o.task.completed}return(n,m)=>(l(),c("div",{class:"task",onClick:a},[s("div",J,u(e.task.label),1),s("div",{class:C(["task__status",{"is-checked":e.task.completed}])},U,2)]))}};var L=p(z,[["__scopeId","data-v-16f4ba3a"]]);const X={class:"dialog__modal"},G={__name:"VDialog",props:{open:{type:Boolean,required:!0}},emits:["close"],setup(e,{emit:o}){function a(){o("close")}return(n,m)=>(l(),c("div",{class:C(["dialog",{"is-visible":e.open}])},[s("div",{class:"dialog__takeover",onClick:a}),s("div",X,[D(n.$slots,"default",{},void 0,!0),s("div",{class:"dialog__close",onClick:a}," X ")])],2))}};var H=p(G,[["__scopeId","data-v-ecb91db4"]]);const K=e=>(V("data-v-98913142"),e=e(),$(),e),P={class:"routine"},Q=w(" Done "),W={class:"item-list"},Y=K(()=>s("div",{class:"dialog__title"}," Congratulations! ",-1)),Z={class:"dialog__content"},ee=w(" Done "),te={__name:"RoutineView",props:{profileId:String,routineId:String},setup(e){const o=e,a=y(!1);function n(){a.value=!1}const v=A().profiles.find(t=>t.id===parseInt(o.profileId)),f=v.routines.find(t=>t.id===parseInt(o.routineId)),d=y([]);f.tasks.forEach(t=>{d.value.push({label:t.label,completed:!1})});const x=N(()=>d.value.every(t=>t.completed));let g=!1;R(x,t=>{t&&!g&&(g=!0,a.value=!0)});const O=[1,2,3,4,5,6,7,8],i=JSON.parse(localStorage.getItem("displayedAnimations")||"[]"),h=O.filter(t=>!i.includes(t)),k=h[Math.floor(Math.random()*h.length)];i.push(k),i.length>5&&i.shift(),localStorage.setItem("displayedAnimations",JSON.stringify(i));const B=`/routine/animations/animation-${k}.gif`;return(t,ae)=>(l(),c("div",P,[s("h1",null,u(b(v).name)+"'s "+u(b(f).name)+" Routine",1),r(S,{to:"/"},{default:_(()=>[Q]),_:1}),s("div",W,[(l(!0),c(T,null,F(d.value,I=>(l(),j(L,{id:I.label,task:I},null,8,["id","task"]))),256))]),r(H,{open:a.value,onClose:n},{default:_(()=>[Y,s("div",Z,[s("div",null,[s("img",{alt:"Animation",class:"dialog__animation",src:B})]),r(S,{onClick:n},{default:_(()=>[ee]),_:1})])]),_:1},8,["open"])]))}};var ne=p(te,[["__scopeId","data-v-98913142"]]);export{ne as default};
