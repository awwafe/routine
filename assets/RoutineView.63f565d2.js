import{_ as k,o as l,d as n,t as r,a,n as I,p as C,g as b,h as v,b as x,i as y,j as S,u as f,e as m,w as O,R as T,F as V,r as D,c as E,f as N}from"./index.eaeb2986.js";const R={__name:"TaskItem",props:{task:{type:Object,required:!0}},setup(e){const o=e;function s(){o.task.completed=!o.task.completed}return(i,_)=>(l(),n("div",{class:"task",onClick:s},r(e.task.label)+" - "+r(e.task.completed),1))}};var w=k(R,[["__scopeId","data-v-0c8f949e"]]);const g=e=>(C("data-v-7a91b0ee"),e=e(),b(),e),L=g(()=>a("div",{class:"dialog__title"}," CONGRATULATIONS! ",-1)),A=g(()=>a("div",null," YOU HAVE COMPLETED ALL TASKS ",-1)),B={__name:"VDialog",props:{open:{type:Boolean,required:!0}},emits:["close"],setup(e,{emit:o}){function s(){o("close")}return(i,_)=>(l(),n("div",{class:I(["dialog",{"is-visible":e.open}])},[a("div",{class:"dialog__takeover",onClick:s}),a("div",{class:"dialog__modal"},[L,a("div",{class:"dialog__close",onClick:s}," X "),a("div",{class:"dialog__content"},[A,a("button",{onClick:s}," DONE ")])])],2))}};var $=k(B,[["__scopeId","data-v-7a91b0ee"]]);const j={class:"profile"},q=N(" DONE "),F={class:"item-list"},H={__name:"RoutineView",props:{profileId:String,routineId:String},setup(e){const o=e,s=v(!1);function i(){s.value=!1}const d=x().profiles.find(t=>t.id===parseInt(o.profileId)).routines.find(t=>t.id===parseInt(o.routineId)),c=v([]);d.tasks.forEach(t=>{c.value.push({label:t.label,completed:!1})});const h=y(()=>c.value.every(t=>t.completed));let u=!1;return S(h,t=>{t&&!u&&(u=!0,s.value=!0)}),(t,z)=>(l(),n("div",j,[a("h1",null,r(f(d).name)+" Routine",1),m(f(T),{to:"/"},{default:O(()=>[q]),_:1}),a("div",F,[(l(!0),n(V,null,D(c.value,p=>(l(),E(w,{id:p.label,task:p},null,8,["id","task"]))),256))]),m($,{open:s.value,onClose:i},null,8,["open"])]))}};export{H as default};
