import{o as i,b as d,F as w,r as S,n as N,d as u,e as c,s as L,u as M,h as R,t as $,f as n,w as r,_ as m,l as A,c as T,a as p}from"./index.b616579d.js";import{C as E,_ as I,D as B}from"./vue3-smooth-dnd.esm.33f8e1d1.js";const j={class:"avatar-select"},G=["onClick"],H=["src"],J={__name:"AvatarSelect",props:{selected:{type:String,required:!0}},emits:["select"],setup(y,{emit:b}){const s="/routine/",t=["avatar-1.svg","avatar-2.svg","avatar-3.svg","avatar-4.svg","avatar-5.png","avatar-6.png","avatar-7.svg","avatar-8.svg","avatar-9.svg","avatar-10.svg","avatar-11.svg","avatar-12.svg","avatar-13.svg","avatar-14.svg","avatar-15.png"].map(o=>({img:o,src:`${s}avatars/${o}`}));function a(o){b("select",o)}return(o,v)=>(i(),d("div",j,[(i(!0),d(w,null,S(c(t),f=>(i(),d("div",{class:N(["avatar-select__frame no-highlights",{"is-selected":y.selected===f.img}]),key:f.img,onClick:x=>a(f.img)},[u("img",{class:"avatar-select__avatar",src:f.src},null,8,H)],10,G))),128))]))}};const K={class:"colour-select"},O=["onClick"],Q={__name:"ColourSelect",props:{selected:{type:String,required:!0}},emits:["select"],setup(y,{emit:b}){const s=["#ace9dd","#b5efcd","#b7dbf4","#ddc5e7","#b9bfc7","#faeca7","#f2ceab","#f8c2ba"];function t(a){b("select",a)}return(a,o)=>(i(),d("div",K,[(i(),d(w,null,S(s,v=>u("div",{key:v,class:N(["colour-select__frame no-highlights",{"is-selected":v===y.selected}]),onClick:f=>t(v)},[u("div",{class:"colour-select__colour",style:L(`background: ${v}`)},null,4)],10,O)),64))]))}};const W={class:"profile-edit-view"},Y={key:0},Z=p(" Done "),ee={class:"profile-edit-view__task"},te=p("X"),ae=["onSubmit"],le=p("Add Task"),se={key:1},ne=p(" Done "),oe=p("X"),ie=["onSubmit"],re=p("Add Routine"),de={__name:"ProfileEditView",props:{profileId:String},setup(y){const b=y,s=M(),t=s.profiles.find(e=>e.id===parseInt(b.profileId)),a=R(null),o=R("");function v(e){a.value=e}function f(){a&&o.value.trim()&&(s.addTask(t,a.value,o.value.trim()),o.value="")}function x(e,_){s.deleteTask(t,e,_)}const C=R("");function U(){C.value.trim()&&(s.addRoutine(t,C.value.trim()),C.value="")}function q(e){window.confirm(`Are you sure you want to delete the ${e.name} routine?`)&&s.deleteRoutine(t,e)}function z(e){s.selectColour(t,e)}function F(e){s.selectAvatar(t,e)}function P(e){t.routines=V(t.routines,e),s.saveRoutines()}function X(e){a.value.tasks=V(a.value.tasks,e),s.saveRoutines()}function V(e,_){const{removedIndex:g,addedIndex:h,payload:l}=_;if(g===null&&h===null)return e;const k=[...e];let D=l;return g!==null&&(D=k.splice(g,1)[0]),h!==null&&k.splice(h,0,D),k}return(e,_)=>{var g,h;return i(),d("div",W,[a.value?(i(),d("div",Y,[u("h1",null," Editing "+$((g=c(t))==null?void 0:g.name)+"'s "+$(a.value.name)+" routine ",1),n(m,{to:"/"},{default:r(()=>[Z]),_:1}),n(c(E),{class:"profile-edit-view__item-list",orientation:"vertical",onDrop:X},{default:r(()=>[(i(!0),d(w,null,S(a.value.tasks,l=>(i(),T(c(B),{key:l.label,class:"profile-edit-view__item"},{default:r(()=>[u("span",ee,$(l.label),1),n(m,{delay:"false",onClick:k=>x(a.value,l)},{default:r(()=>[te]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1}),u("div",null,[u("form",{novalidate:"",onSubmit:A(f,["prevent"])},[n(I,{modelValue:o.value,"onUpdate:modelValue":_[0]||(_[0]=l=>o.value=l)},null,8,["modelValue"]),n(m,{delay:"false",type:"submit"},{default:r(()=>[le]),_:1})],40,ae)])])):(i(),d("div",se,[u("h1",null,"Editing "+$((h=c(t))==null?void 0:h.name),1),n(m,{to:"/"},{default:r(()=>[ne]),_:1}),n(c(E),{class:"profile-edit-view__item-list",orientation:"vertical",onDrop:P},{default:r(()=>[(i(!0),d(w,null,S(c(t).routines,l=>(i(),T(c(B),{key:l.id,class:"profile-edit-view__item"},{default:r(()=>[n(m,{theme:"flat,white",onClick:k=>v(l)},{default:r(()=>[p($(l.name),1)]),_:2},1032,["onClick"]),n(m,{delay:"false",onClick:k=>q(l)},{default:r(()=>[oe]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1}),u("div",null,[u("form",{novalidate:"",onSubmit:A(U,["prevent"])},[n(I,{modelValue:C.value,"onUpdate:modelValue":_[1]||(_[1]=l=>C.value=l)},null,8,["modelValue"]),n(m,{delay:"false",type:"submit"},{default:r(()=>[re]),_:1})],40,ie)]),n(Q,{selected:c(t).colour,onSelect:z},null,8,["selected"]),n(J,{selected:c(t).avatar,onSelect:F},null,8,["selected"])]))])}}};export{de as default};
