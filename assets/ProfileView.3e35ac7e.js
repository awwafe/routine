import{o as i,c as _,w as f,a as p,t as m,_ as h,u as w,b as x,d as c,e as d,f as n,g as y,F as g,r as k}from"./index.6a83bee4.js";const B={__name:"RoutineItem",props:{profile:{type:Object,required:!0},routine:{type:Object,required:!0}},setup(e){return(a,o)=>(i(),_(h,{to:`/profiles/${e.profile.id}/routines/${e.routine.id}`,theme:"flat,white"},{default:f(()=>[p(m(e.routine.name),1)]),_:1},8,["to"]))}};const I={class:"profile-view"},V=p("Back"),$={class:"profile-view__item-list"},N={__name:"ProfileView",props:{profileId:String},setup(e){const a=e,o=w(),s=o.profiles.find(t=>t.id===parseInt(a.profileId)),v=x(()=>{const t=s.routines.map(r=>r.id);return o.routines.filter(r=>t.includes(r.id))});return(t,r)=>{var l;return i(),c("div",I,[d("h1",null,"Hello "+m((l=n(s))==null?void 0:l.name),1),y(h,{to:"/"},{default:f(()=>[V]),_:1}),d("div",$,[(i(!0),c(g,null,k(n(v),u=>(i(),_(B,{key:u.id,profile:n(s),routine:u},null,8,["profile","routine"]))),128))])])}}};export{N as default};
