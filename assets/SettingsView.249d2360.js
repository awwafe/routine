import{b as h,h as k,o,d as a,e as l,w as d,u as i,R as c,a as e,F as _,r as b,k as w,l as S,v as g,f as m,t as x}from"./index.0cac686b.js";const P=e("h1",null," Settings ",-1),V=m(" Back "),B=["onClick"],y=["onSubmit"],C=e("button",{type:"submit"},"Add",-1),F={__name:"SettingsView",setup(N){const s=h(),v=s.profiles,n=k("");function f(){s.addPerson(n.value),n.value=""}function p(r){s.deletePerson(r)}return(r,u)=>(o(),a(_,null,[P,l(i(c),{to:"/"},{default:d(()=>[V]),_:1}),e("main",null,[(o(!0),a(_,null,b(i(v),t=>(o(),a("div",{key:t.id},[l(i(c),{to:`/settings/${t.id}`},{default:d(()=>[m(x(t.name),1)]),_:2},1032,["to"]),e("button",{onClick:R=>p(t)},"X",8,B)]))),128)),e("div",null,[e("form",{novalidate:"",onSubmit:w(f,["prevent"])},[S(e("input",{"onUpdate:modelValue":u[0]||(u[0]=t=>n.value=t)},null,512),[[g,n.value]]),C],40,y)])])],64))}};export{F as default};
