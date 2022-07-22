import{o as d,b as m,d as e,t as p,f,e as _,c as b,w as y,_ as I,a as x,g as C,h as k,i as T,n as D,u as S,j as M,F as O,r as R}from"./index.c27d75a8.js";import{V as B,_ as L}from"./VDialog.a8af445b.js";import"./_commonjsHelpers.4e997714.js";const V={class:"task-item__name"},A=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1in",height:"0.5in",viewBox:"0 0 300 150"},[e("path",{stroke:"none",d:"M 12.00,48.00  C 12.00,50.09 11.79,54.99 12.60,56.72    15.59,63.18 26.09,56.64 33.00,63.00    30.84,63.18 23.05,63.87 21.80,65.02    18.02,67.88 21.29,76.35 21.80,80.00    21.80,80.00 21.80,86.00 21.80,86.00    21.80,86.00 40.00,87.00 40.00,87.00    39.93,88.88 40.06,91.04 38.98,92.69    37.51,94.93 35.15,94.75 32.59,96.20    28.33,98.61 26.87,102.22 27.34,107.00    27.34,107.00 30.02,123.41 30.02,123.41    31.82,125.75 40.01,127.95 43.00,128.00    43.00,128.00 87.00,128.00 87.00,128.00    88.08,121.56 91.16,121.80 97.00,122.04    97.00,122.04 109.00,123.00 109.00,123.00    109.00,123.00 128.00,123.00 128.00,123.00    128.00,123.00 182.00,122.00 182.00,122.00    194.58,121.97 188.42,119.03 201.00,119.00    201.00,119.00 243.00,119.00 243.00,119.00    243.00,119.00 258.00,118.00 258.00,118.00    259.53,109.10 266.01,113.37 270.40,109.15    272.61,107.03 272.30,100.85 272.00,98.00    272.00,98.00 280.00,97.00 280.00,97.00    280.00,94.10 280.26,88.55 279.26,86.02    276.49,78.98 264.63,76.88 258.00,76.00    265.15,69.19 276.40,73.03 274.85,62.04    274.47,59.35 273.73,58.85 272.00,57.00    281.68,53.77 281.00,54.28 281.00,44.00    281.00,44.00 258.00,42.38 258.00,42.38    250.00,40.84 251.48,38.03 235.00,38.00    235.00,38.00 189.00,39.00 189.00,39.00    189.00,39.00 177.00,39.82 177.00,39.82    177.00,39.82 159.00,38.00 159.00,38.00    159.00,38.00 128.00,38.00 128.00,38.00    116.90,38.02 120.16,39.40 113.00,40.67    113.00,40.67 97.00,42.17 97.00,42.17    97.00,42.17 87.00,43.83 87.00,43.83    87.00,43.83 57.00,45.00 57.00,45.00    57.00,45.00 32.00,48.00 32.00,48.00    32.00,48.00 12.00,48.00 12.00,48.00 Z"})],-1),N={key:0,class:"task-item__status"},j=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500"},[e("g",{transform:"matrix(1, 0, 0, 1, 15.123517, 15.326177)"},[e("path",{xmlns:"http://www.w3.org/2000/svg",d:"m234.667969 469.339844c-129.386719 0-234.667969-105.277344-234.667969-234.664063s105.28125-234.6679685 234.667969-234.6679685c44.992187 0 88.765625 12.8203125 126.589843 37.0976565 7.425782 4.78125 9.601563 14.679687 4.820313 22.125-4.796875 7.445312-14.675781 9.597656-22.121094 4.820312-32.640625-20.972656-70.441406-32.042969-109.289062-32.042969-111.746094 0-202.667969 90.921876-202.667969 202.667969 0 111.742188 90.921875 202.664063 202.667969 202.664063 111.742187 0 202.664062-90.921875 202.664062-202.664063 0-6.679687-.320312-13.292969-.9375-19.796875-.851562-8.8125 5.589844-16.621094 14.378907-17.472656 8.832031-.8125 16.617187 5.589844 17.472656 14.378906.722656 7.53125 1.085937 15.167969 1.085937 22.890625 0 129.386719-105.277343 234.664063-234.664062 234.664063zm0 0","data-original":"#000000",style:{}}),e("path",{xmlns:"http://www.w3.org/2000/svg",d:"M 234.376 313.378 C 230.282 313.378 226.185 311.819 223.071 308.686 L 127.071 212.686 C 120.821 206.432 120.821 196.3 127.071 190.05 C 133.321 183.8 143.454 183.8 149.704 190.05 L 234.399 274.745 L 457.735 51.405 C 463.989 45.155 474.122 45.155 480.372 51.405 C 486.622 57.655 486.622 67.788 480.372 74.038 L 245.704 308.706 C 242.567 311.819 238.474 313.378 234.376 313.378 Z M 234.376 313.378","data-original":"#000000",style:{}})])],-1),U=[j],q={key:1,class:"task-item__lottie"},z={__name:"TaskItem",props:{task:{type:Object,required:!0},profile:{type:Object,required:!0}},setup(r){const a=r,c="/routine/",s=a.profile.check||"check-1.json",i=`${c}checks/${s}`;function t(){a.task.completed=!a.task.completed}return(u,v)=>(d(),m("div",{class:"task-item no-highlights",onClick:t},[e("div",V,[A,e("span",null,p(r.task.label),1)]),r.task.completed?(d(),m("div",q,[f(_(B),{animationLink:i,height:80,width:80,loop:!1})])):(d(),m("div",N,U))]))}};const F=e("div",{class:"routine-complete-dialog__title"}," Congratulations! ",-1),E={class:"routine-complete-dialog__content"},J=x(" Done "),Z={__name:"RoutineCompleteDialog",props:{open:Boolean},emits:["close"],setup(r,{emit:a}){const c=r,s=[1,2,3,4,5,6,7,8],i=JSON.parse(localStorage.getItem("displayedAnimations")||"[]"),t=s.filter(g=>!i.includes(g)),u=t[Math.floor(Math.random()*t.length)];i.push(u),i.length>5&&i.shift(),localStorage.setItem("displayedAnimations",JSON.stringify(i));const h=`/routine/animations/animation-${u}.gif`;function n(){a("close")}function l(){setTimeout(()=>{n()},300)}return(g,o)=>(d(),b(L,{class:"routine-complete-dialog",open:c.open,onClose:n},{default:y(()=>[F,e("div",E,[e("img",{alt:"Animation",class:"routine-complete-dialog__animation",src:h}),f(I,{onClick:l},{default:y(()=>[J]),_:1})])]),_:1},8,["open"]))}};const P={__name:"RoutineTimer",props:{background:{type:String,required:!0}},setup(r){const a=r,c=new Date,s=C(0),i=setInterval(()=>{const n=new Date,l=Math.floor((n.getTime()-c.getTime())/1e3);s.value!==l&&(s.value=l)},200);function t(n){const l="00"+n;return l.substring(l.length-2)}const u=k(()=>t(s.value%60)),v=k(()=>t(Math.floor(s.value/60)%60)),h=k(()=>t(Math.floor(s.value/3600)%60));return T(()=>{clearInterval(i)}),(n,l)=>(d(),m("div",{class:"routine-timer",style:D(`background: ${a.background};`)},p(_(h))+":"+p(_(v))+":"+p(_(u)),5))}};const G={class:"routine-view"},H={style:{"white-space":"nowrap"}},K=x(" Done "),Q={class:"routine-view__item-list"},e0={__name:"RoutineView",props:{profileId:String,routineId:String},setup(r){const a=r,c=C(!1);function s(){c.value=!1}const t=S().profiles.find(o=>o.id===parseInt(a.profileId)),u=t.routines.find(o=>o.id===parseInt(a.routineId)),h=new Date().getDay(),n=C([]);u.tasks.forEach(o=>{var w;(!((w=o.days)!=null&&w.length)||o.days.includes(h))&&n.value.push({label:o.label,completed:!1})});const l=k(()=>n.value.every(o=>o.completed));let g=!1;return M(l,o=>{o&&!g&&(g=!0,setTimeout(()=>{c.value=!0},1e3))}),(o,w)=>(d(),m("div",G,[e("h1",null,[x(p(_(t).name)+"'s ",1),e("span",H,p(_(u).name)+" Routine ",1)]),e("div",null,[f(P,{background:_(t).colour},null,8,["background"])]),f(I,{to:"/"},{default:y(()=>[K]),_:1}),e("div",Q,[(d(!0),m(O,null,R(n.value,$=>(d(),b(z,{key:$.id,task:$,profile:_(t)},null,8,["task","profile"]))),128))]),f(Z,{open:c.value,onClose:s},null,8,["open"])]))}};export{e0 as default};
