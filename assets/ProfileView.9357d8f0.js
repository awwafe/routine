import{_ as c,o as t,c as l,w as d,a as s,t as p,u as r,R as m,b as v,d as u,e as h,V as x,F as I,r as V,f as y}from"./index.9028609d.js";const B={class:"name"},R={__name:"RoutineItem",props:{profile:{type:Object,required:!0},routine:{type:Object,required:!0}},setup(e){return(i,f)=>(t(),l(r(m),{to:`/profiles/${e.profile.id}/routines/${e.routine.id}`,class:"item"},{default:d(()=>[s("div",B,p(e.routine.name),1)]),_:1},8,["to"]))}};var g=c(R,[["__scopeId","data-v-14c8be38"]]);const k={class:"profile"},w=y("Back"),b={class:"item-list"},$={__name:"ProfileView",props:{profileId:String},setup(e){const i=e,o=v().profiles.find(a=>a.id===parseInt(i.profileId));return(a,N)=>{var n;return t(),u("div",k,[s("h1",null,"Hello "+p((n=r(o))==null?void 0:n.name),1),h(x,{to:"/"},{default:d(()=>[w]),_:1}),s("div",b,[(t(!0),u(I,null,V(r(o).routines,_=>(t(),l(g,{id:_.id,profile:r(o),routine:_},null,8,["id","profile","routine"]))),256))])])}}};var S=c($,[["__scopeId","data-v-7e2f4761"]]);export{S as default};
