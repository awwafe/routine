import{_ as f,o as _,d as u,a as t,t as m,n as I,p as b,g as y,e as v,w as S,V as C,f as V,h as g,b as $,i as x,j as w,u as k,F as O,r as B,c as D}from"./index.3269c16f.js";var A="/routine/check.png";const N=e=>(b("data-v-16f4ba3a"),e=e(),y(),e),R={class:"task__name"},T=N(()=>t("img",{src:A,alt:"check"},null,-1)),F=[T],j={__name:"TaskItem",props:{task:{type:Object,required:!0}},setup(e){const o=e;function n(){o.task.completed=!o.task.completed}return(a,d)=>(_(),u("div",{class:"task",onClick:n},[t("div",R,m(e.task.label),1),t("div",{class:I(["task__status",{"is-checked":e.task.completed}])},F,2)]))}};var q=f(j,[["__scopeId","data-v-16f4ba3a"]]);const E=e=>(b("data-v-2f5b547e"),e=e(),y(),e),J={class:"dialog__modal"},M=E(()=>t("div",{class:"dialog__title"}," Congratulations! ",-1)),U={class:"dialog__content"},z=V(" Done "),L={__name:"VDialog",props:{open:{type:Boolean,required:!0}},emits:["close"],setup(e,{emit:o}){const n=[1,2,3,4,5,6,7,8],a=JSON.parse(localStorage.getItem("displayedAnimations")||"[]"),d=n.filter(r=>!a.includes(r)),i=d[Math.floor(Math.random()*d.length)];a.push(i),a.length>5&&a.shift(),localStorage.setItem("displayedAnimations",JSON.stringify(a));const l=`/routine/animations/animation-${i}.gif`;function c(){o("close")}return(r,s)=>(_(),u("div",{class:I(["dialog",{"is-visible":e.open}])},[t("div",{class:"dialog__takeover",onClick:c}),t("div",J,[M,t("div",{class:"dialog__close",onClick:c}," X "),t("div",U,[t("div",null,[t("img",{alt:"Animation",class:"animation",src:l})]),v(C,{onClick:c},{default:S(()=>[z]),_:1})])])],2))}};var X=f(L,[["__scopeId","data-v-2f5b547e"]]);const G={class:"profile"},H=V(" Done "),K={class:"item-list"},P={__name:"RoutineView",props:{profileId:String,routineId:String},setup(e){const o=e,n=g(!1);function a(){n.value=!1}const i=$().profiles.find(s=>s.id===parseInt(o.profileId)),p=i.routines.find(s=>s.id===parseInt(o.routineId)),l=g([]);p.tasks.forEach(s=>{l.value.push({label:s.label,completed:!1})});const c=x(()=>l.value.every(s=>s.completed));let r=!1;return w(c,s=>{s&&!r&&(r=!0,n.value=!0)}),(s,Q)=>(_(),u("div",G,[t("h1",null,m(k(i).name)+"'s "+m(k(p).name)+" Routine",1),v(C,{to:"/"},{default:S(()=>[H]),_:1}),t("div",K,[(_(!0),u(O,null,B(l.value,h=>(_(),D(q,{id:h.label,task:h},null,8,["id","task"]))),256))]),v(X,{open:n.value,onClose:a},null,8,["open"])]))}};var Y=f(P,[["__scopeId","data-v-57c28b68"]]);export{Y as default};
