import{o as t,c,w as _,a as f,t as d,_ as p,u as h,b as l,d as u,e as i,f as v,F as w,r as x}from"./index.76e90e73.js";const y={__name:"RoutineItem",props:{profile:{type:Object,required:!0},routine:{type:Object,required:!0}},setup(e){return(o,m)=>(t(),c(p,{to:`/profiles/${e.profile.id}/routines/${e.routine.id}`,theme:"flat,white"},{default:_(()=>[f(d(e.routine.name),1)]),_:1},8,["to"]))}};const k={class:"profile-view"},B=f("Back"),V={class:"profile-view__item-list"},$={__name:"ProfileView",props:{profileId:String},setup(e){const o=e,r=h().profiles.find(s=>s.id===parseInt(o.profileId));return(s,g)=>{var n;return t(),l("div",k,[u("h1",null,"Hello "+d((n=i(r))==null?void 0:n.name),1),v(p,{to:"/"},{default:_(()=>[B]),_:1}),u("div",V,[(t(!0),l(w,null,x(i(r).routines,a=>(t(),c(y,{key:a.id,profile:i(r),routine:a},null,8,["profile","routine"]))),128))])])}}};export{$ as default};
