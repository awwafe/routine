import{u as V,g as x,o as _,b as p,f as n,w as a,_ as r,e as c,d as f,q as D,F as P,r as S,c as b,a as d,t as k}from"./index.c27d75a8.js";import{C,_ as $,D as B}from"./vue3-smooth-dnd.esm.d7bbafe7.js";import"./_commonjsHelpers.4e997714.js";const A={class:"settings-view"},N=f("h1",null," Settings ",-1),F=d(" Done "),I=d("X"),R=["onSubmit"],T=d("Add Person"),U={__name:"SettingsView",setup(q){const s=V(),o=x("");function v(){o.value.trim()&&(s.addPerson(o.value.trim()),o.value="")}function g(t){window.confirm(`Are you sure you want to delete ${t.name}?`)&&s.deletePerson(t)}function w(t){s.profiles=y(s.profiles,t),s.saveRoutines()}function y(t,i){const{removedIndex:e,addedIndex:l,payload:h}=i;if(e===null&&l===null)return t;const u=[...t];let m=h;return e!==null&&(m=u.splice(e,1)[0]),l!==null&&u.splice(l,0,m),u}return(t,i)=>(_(),p("div",A,[N,n(r,{to:"/"},{default:a(()=>[F]),_:1}),n(c(C),{class:"settings-view__item-list",orientation:"vertical","drag-begin-delay":200,onDrop:w},{default:a(()=>[(_(!0),p(P,null,S(c(s).profiles,e=>(_(),b(c(B),{key:e.id,class:"settings-view__item"},{default:a(()=>[n(r,{to:`/settings/${e.id}`,theme:"flat,white"},{default:a(()=>[d(k(e.name),1)]),_:2},1032,["to"]),n(r,{delay:"false",onClick:l=>g(e)},{default:a(()=>[I]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1}),f("div",null,[f("form",{novalidate:"",onSubmit:D(v,["prevent"])},[n($,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=e=>o.value=e),class:"settings-view__input"},null,8,["modelValue"]),n(r,{delay:"false",type:"submit"},{default:a(()=>[T]),_:1})],40,R)])]))}};export{U as default};
