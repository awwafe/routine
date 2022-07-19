import{o as fn,b as gn,g as Re,q as Ae}from"./index.b935e0a2.js";import{c as pn}from"./_commonjsHelpers.4e997714.js";const mn=["value"],bn={__name:"VInput",props:{modelValue:String},emits:["update:modelValue"],setup(x,{emit:R}){const C=x;function w(V){R("update:modelValue",V.target.value)}return(V,W)=>(fn(),gn("input",{value:C.modelValue,class:"v-input",onInput:w},null,40,mn))}};var F={exports:{}};(function(x,R){(function(C,w){w(R)})(pn,function(C){var w,V,W="smooth-dnd-container-instance",A="smooth-dnd-draggable-wrapper",Et="animated",H="__smooth_dnd_draggable_translation_value",X="__smooth_dnd_draggable_visibility_value",q="smooth-dnd-ghost",B="smooth-dnd-container",Ft="smooth-dnd-extra-size-for-insertion",Dt="smooth-dnd-stretcher-element",M="smooth-dnd-stretcher-instance",ot="smooth-dnd-disable-touch-action",rt="smooth-dnd-no-user-select",Vt="smooth-dnd-prevent-auto-scroll-class",St="smooth-dnd-drop-preview-default-class",Ct="smooth-dnd-drop-preview-inner-class",it="smooth-dnd-drop-preview-constant-class",Ot="smooth-dnd-drop-preview-flex-container-class",Be=Object.freeze({containerInstance:W,defaultGroupName:"@@smooth-dnd-default-group@@",wrapperClass:A,defaultGrabHandleClass:"smooth-dnd-default-grap-handle",animationClass:Et,translationValue:H,visibilityValue:X,ghostClass:q,containerClass:B,extraSizeForInsertion:Ft,stretcherElementClass:Dt,stretcherElementInstance:M,isDraggableDetached:"smoth-dnd-is-draggable-detached",disbaleTouchActions:ot,noUserSelectClass:rt,preventAutoScrollClass:Vt,dropPlaceholderDefaultClass:St,dropPlaceholderInnerClass:Ct,dropPlaceholderWrapperClass:it,dropPlaceholderFlexContainerClass:Ot}),$={groupName:void 0,behaviour:"move",orientation:"vertical",getChildPayload:void 0,animationDuration:250,autoScrollEnabled:!0,shouldAcceptDrop:void 0,shouldAnimateDrop:void 0};function Rt(t){return(Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ht(t){return function(e){if(Array.isArray(e)){for(var n=0,o=new Array(e.length);n<e.length;n++)o[n]=e[n];return o}}(t)||function(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(V=w||(w={})).x="x",V.y="y",V.xy="xy";function Xt(t,e,n){return n==="x"?{left:Math.max(t.left,e.left),top:t.top,right:Math.min(t.right,e.right),bottom:t.bottom}:{left:t.left,top:Math.max(t.top,e.top),right:t.right,bottom:Math.min(t.bottom,e.bottom)}}function Te(t){var e=window.getComputedStyle(t),n=e.overflow;if(n==="auto"||n==="scroll")return w.xy;var o=e["overflow-x"],r=o==="auto"||o==="scroll",a=e["overflow-y"],u=a==="auto"||a==="scroll";return r&&u?w.xy:r?w.x:u?w.y:null}function kt(t,e){var n=window.getComputedStyle(t),o=n.overflow,r=n["overflow-".concat(e)];return o==="auto"||o==="scroll"||r==="auto"||r==="scroll"}var ze=function(t,e){return{left:Math.max(t.left,e.left),top:Math.max(t.top,e.top),right:Math.min(t.right,e.right),bottom:Math.min(t.bottom,e.bottom)}},Gt=function(t){var e=t.getBoundingClientRect(),n={left:e.left,right:e.right,top:e.top,bottom:e.bottom};if(lt(t,"x")&&!at(t,"x")){var o=n.right-n.left;n.right=n.right+t.scrollWidth-o}if(lt(t,"y")&&!at(t,"y")){var r=n.bottom-n.top;n.bottom=n.bottom+t.scrollHeight-r}return n},at=function(t,e){var n=window.getComputedStyle(t),o=n.overflow,r=n["overflow-".concat(e)];return o==="auto"||o==="scroll"||o==="hidden"||r==="auto"||r==="scroll"||r==="hidden"},lt=function(t,e){return e==="x"?t.scrollWidth>t.clientWidth:t.scrollHeight>t.clientHeight},Yt=function(t,e){var n=t,o=e||Gt(t);for(n=t.parentElement;n;)lt(n,"x")&&at(n,"x")&&(o=Xt(o,n.getBoundingClientRect(),"x")),lt(n,"y")&&at(n,"y")&&(o=Xt(o,n.getBoundingClientRect(),"y")),n=n.parentElement;return o},Ne=function(t,e){for(var n=t;n;){if(n[W]){var o=function(){var r=n[W];if(e.some(function(a){return a===r}))return{v:r}}();if(Rt(o)==="object")return o.v}n=n.parentElement}return null},U=function(t,e){for(var n=t;n;){if(n.matches(e))return n;n=n.parentElement}return null},At=function(t,e){return-1<t.className.split(" ").map(function(n){return n}).indexOf(e)},T=function(t,e){if(t){var n=t.className.split(" ").filter(function(o){return o});n.indexOf(e)===-1&&(n.unshift(e),t.className=n.join(" "))}},st=function(t,e){if(t){var n=t.className.split(" ").filter(function(o){return o&&o!==e});t.className=n.join(" ")}},_e=function(t,e){return t.removeChild(t.children[e])},Le=function(t,e,n){n>=t.children.length?t.appendChild(e):t.insertBefore(e,t.children[n])},Me=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():window.document.selection&&window.document.selection.empty()},Wt=function(t){if(t){var e=window.getComputedStyle(t);if(e)return e.cursor}return null};function It(t){return!(t.bottom<=t.top||t.right<=t.left)}function qt(t){var e=t.element,n=t.draggables;return function(o,r){var a=o,u=a.removedIndex,s=a.addedIndex,d=a.droppedElement,i=null;if(u!==null&&(i=_e(e,u),n.splice(u,1)),s!==null){var l=window.document.createElement("div");l.className="".concat(A),l.appendChild(i&&i.firstElementChild?i.firstElementChild:d),Le(e,l,s),s>=n.length?n.push(l):n.splice(s,0,l)}r&&r(o)}}var je=Object.freeze({domDropHandler:qt,reactDropHandler:function(){return{handler:function(){return function(t,e){e&&e(t)}}}}}),Fe={size:"offsetWidth",distanceToParent:"offsetLeft",translate:"transform",begin:"left",end:"right",dragPosition:"x",scrollSize:"scrollWidth",offsetSize:"offsetWidth",scrollValue:"scrollLeft",scale:"scaleX",setSize:"width",setters:{translate:function(t){return"translate3d(".concat(t,"px, 0, 0)")}}},Ve={size:"offsetHeight",distanceToParent:"offsetTop",translate:"transform",begin:"top",end:"bottom",dragPosition:"y",scrollSize:"scrollHeight",offsetSize:"offsetHeight",scrollValue:"scrollTop",scale:"scaleY",setSize:"height",setters:{translate:function(t){return"translate3d(0,".concat(t,"px, 0)")}}};function He(t,e,n){t[Ft]=0;var o=function(i){return{get:function(l,c){return l[i[c]||c]},set:function(l,c,f){l[i[c]]=i.setters[c]?i.setters[c](f):f}}}(e==="horizontal"?Fe:Ve),r={translation:0};function a(){u(t),function(i){var l=i.getBoundingClientRect();r.scaleX=i.offsetWidth?(l.right-l.left)/i.offsetWidth:1,r.scaleY=i.offsetHeight?(l.bottom-l.top)/i.offsetHeight:1}(t)}function u(i){r.rect=Gt(i);var l=Yt(i,r.rect);It(l)&&(r.lastVisibleRect=r.visibleRect),r.visibleRect=l}function s(i){var l=i;if(l.tagName){var c=l.getBoundingClientRect();return e==="vertical"?c.bottom-c.top:c.right-c.left}return o.get(i,"size")*o.get(r,"scale")}function d(i){return o.get(i,"dragPosition")}return window.addEventListener("resize",function(){u(t)}),setTimeout(function(){a()},10),{getSize:s,getContainerRectangles:function(){return{rect:r.rect,visibleRect:r.visibleRect,lastVisibleRect:r.lastVisibleRect}},getBeginEndOfDOMRect:function(i){return{begin:o.get(i,"begin"),end:o.get(i,"end")}},getBeginEndOfContainer:function(){return{begin:o.get(r.rect,"begin")+r.translation,end:o.get(r.rect,"end")+r.translation}},getBeginEndOfContainerVisibleRect:function(){return{begin:o.get(r.visibleRect,"begin")+r.translation,end:o.get(r.visibleRect,"end")+r.translation}},getBeginEnd:function(i){var l=function(c){return(o.get(c,"distanceToParent")+(c[H]||0))*o.get(r,"scale")}(i)+(o.get(r.rect,"begin")+r.translation)-o.get(t,"scrollValue");return{begin:l,end:l+s(i)*o.get(r,"scale")}},getAxisValue:d,setTranslation:function(i,l){l?o.set(i.style,"translate",l):i.style.removeProperty("transform"),i[H]=l},getTranslation:function(i){return i[H]},setVisibility:function(i,l){i[X]!==void 0&&i[X]===l||(l?i.style.removeProperty("visibility"):i.style.visibility="hidden",i[X]=l)},isVisible:function(i){return i[X]===void 0||i[X]},isInVisibleRect:function(i,l){var c=r.visibleRect,f=c.left,g=c.top,p=c.right,y=c.bottom;y-g<2&&(y=g+30);var v=r.rect;return e==="vertical"?i>v.left&&i<v.right&&g<l&&l<y:f<i&&i<p&&l>v.top&&l<v.bottom},setSize:function(i,l){o.set(i,"setSize",l)},getTopLeftOfElementBegin:function(i){var l=0;return{top:e==="horizontal"?(l=i,r.rect.top):(l=r.rect.left,i),left:l}},getScrollSize:function(i){return o.get(i,"scrollSize")},getScrollValue:function(i){return o.get(i,"scrollValue")},setScrollValue:function(i,l){return o.set(i,"scrollValue",l)},invalidate:a,invalidateRects:function(){u(t)},getPosition:function(i){return d(i)},setBegin:function(i,l){o.set(i,"begin",l)}}}function $t(t,e,n){var o,r,a,u=n.left,s=n.right,d=n.top,i=n.bottom,l=t.x,c=t.y;if(l<u||s<l||c<d||i<c)return null;a=e==="x"?(o=u,r=s,l):(o=d,r=i,c);var f=r-o,g=400<f?100:f/4;return r-a<g?{direction:"end",speedFactor:(g-(r-a))/g}:a-o<g?{direction:"begin",speedFactor:(g-(a-o))/g}:null}function ut(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"y",n=null,o=null,r=null,a=null;return{animate:function(u,s){r=u,a=s,function d(){n===null&&(n=requestAnimationFrame(function(i){o===null&&(o=i);var l=i-o;o=i;var c,f,g,p=l/1e3*a;f=e,g=p=r==="begin"?0-p:p,(c=t)&&(c!==window?f==="x"?c.scrollLeft+=g:c.scrollTop+=g:f==="x"?c.scrollBy(g,0):c.scrollBy(0,g)),n=null,d()}))}()},stop:function(){n!==null&&(cancelAnimationFrame(n),n=null),o=null}}}function Xe(t){return function(){return Yt(t,t.getBoundingClientRect())}}var N,ct,E,ke=function(t){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:1500,n=t.reduce(function(o,r){var a=function(u){for(var s=[],d=u.element;d;){var i=Te(d);if(i&&!At(d,Vt)){var l={};switch(i){case w.xy:l.x={animator:ut(d,"x")},l.y={animator:ut(d,"y")};break;case w.x:l.x={animator:ut(d,"x")};break;case w.y:l.y={animator:ut(d,"y")}}s.push({axisAnimations:l,getRect:Xe(d),scrollerElement:d})}d=d.parentElement}return s}(r).filter(function(u){return!o.find(function(s){return s.scrollerElement===u.scrollerElement})});return[].concat(Ht(o),Ht(a))},[]);return function(o){var r=o.draggableInfo;if(o.reset)n.forEach(function(s){s.axisAnimations.x&&s.axisAnimations.x.animator.stop(),s.axisAnimations.y&&s.axisAnimations.y.animator.stop()});else if(r){(function(s,d){s.forEach(function(i){var l=i.axisAnimations,c=(0,i.getRect)();l.x&&(l.x.scrollParams=$t(d,"x",c),i.cachedRect=c),l.y&&(l.y.scrollParams=$t(d,"y",c),i.cachedRect=c)})})(n,r.mousePosition),n.forEach(function(s){var d=s.axisAnimations,i=d.x,l=d.y;if(i)if(i.scrollParams){var c=i.scrollParams,f=c.direction,g=c.speedFactor;i.animator.animate(f,g*e)}else i.animator.stop();if(l)if(l.scrollParams){var p=l.scrollParams,y=p.direction,v=p.speedFactor;l.animator.animate(y,v*e)}else l.animator.stop()});var a=n.filter(function(s){return s.cachedRect});if(a.length&&1<a.length){var u=function(s,d){for(var i=document.elementFromPoint(d.x,d.y);i;){var l=s.find(function(c){return c.scrollerElement===i});if(l)return l;i=i.parentElement}return null}(a,r.mousePosition);u&&a.forEach(function(s){s!==u&&(s.axisAnimations.x&&s.axisAnimations.x.animator.stop(),s.axisAnimations.y&&s.axisAnimations.y.animator.stop())})}}}};typeof window!="undefined"&&((N=Element)&&N.prototype&&!N.prototype.matches&&(N.prototype.matches=N.prototype.matchesSelector||N.prototype.mozMatchesSelector||N.prototype.msMatchesSelector||N.prototype.oMatchesSelector||N.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;0<=--n&&e.item(n)!==this;);return-1<n}),(ct=Node||Element)&&ct.prototype&&ct.prototype.firstElementChild==null&&Object.defineProperty(ct.prototype,"firstElementChild",{get:function(){for(var t,e=this.childNodes,n=0;t=e[n++];)if(t.nodeType===1)return t;return null}}),Array.prototype.some||(Array.prototype.some=function(t){if(this==null)throw new TypeError("Array.prototype.some called on null or undefined");if(typeof t!="function")throw new TypeError;for(var e=Object(this),n=e.length>>>0,o=2<=arguments.length?arguments[1]:void 0,r=0;r<n;r++)if(r in e&&t.call(o,e[r],r,e))return!0;return!1}));var Ut={overflow:"hidden",display:"block"},Jt={height:"100%",display:"table-cell","vertical-align":"top"},Ge=(D(E={},".".concat(B),{position:"relative","min-height":"30px","min-width":"30px"}),D(E,".".concat(B,".horizontal"),{display:"table"}),D(E,".".concat(B,".horizontal > .").concat(Dt),{display:"inline-block"}),D(E,".".concat(B,".horizontal > .").concat(A),Jt),D(E,".".concat(B,".vertical > .").concat(A),Ut),D(E,".".concat(A),{"box-sizing":"border-box"}),D(E,".".concat(A,".horizontal"),Jt),D(E,".".concat(A,".vertical"),Ut),D(E,".".concat(A,".animated"),{transition:"transform ease"}),D(E,".".concat(q),{"box-sizing":"border-box"}),D(E,".".concat(q,".animated"),{transition:"all ease-in-out"}),D(E,".".concat(q," *"),{"pointer-events":"none"}),D(E,".".concat(ot," *"),{"touch-action":"none","-ms-touch-action":"none"}),D(E,".".concat(rt),{"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),D(E,".".concat(Ct),{flex:"1"}),D(E,".".concat(B,".horizontal > .").concat(it),{height:"100%",overflow:"hidden",display:"table-cell","vertical-align":"top"}),D(E,".".concat(B,".vertical > .").concat(it),{overflow:"hidden",display:"block",width:"100%"}),D(E,".".concat(Ot),{width:"100%",height:"100%",display:"flex","justify-content":"stretch","align-items":"stretch"}),D(E,".".concat(St),{"background-color":"rgba(150, 150, 150, 0.1)",border:"1px solid #ccc"}),E);function Pt(t){return Object.keys(t).reduce(function(e,n){var o=t[n];return Rt(o)==="object"?"".concat(e).concat(n,"{").concat(Pt(o),"}"):"".concat(e).concat(n,":").concat(o,";")},"")}function Kt(t){if(t&&typeof window!="undefined"){var e=window.document.head||window.document.getElementsByTagName("head")[0],n=window.document.createElement("style"),o=Pt({"body *":{cursor:"".concat(t," !important")}});return n.type="text/css",n.styleSheet?n.styleSheet.cssText=o:n.appendChild(window.document.createTextNode(o)),e.appendChild(n),n}return null}var k,dt,Ye=["mousedown","touchstart"],ft=["mousemove","touchmove"],gt=["mouseup","touchend"],S=null,_=null,b=null,m=null,I=[],L=!1,pt=!1,J=!1,mt=!1,G=null,P=null,K=null,Q=null,Qt=(k=null,dt=!1,{start:function(){dt||(dt=!0,function t(){k=requestAnimationFrame(function(){S.forEach(function(e){return e.layout.invalidateRects()}),setTimeout(function(){k!==null&&t()},50)})}())},stop:function(){k!==null&&(cancelAnimationFrame(k),k=null),dt=!1}}),We=typeof window!="undefined"&&!!(window.navigator.userAgent.match(/Android/i)||window.navigator.userAgent.match(/webOS/i)||window.navigator.userAgent.match(/iPhone/i)||window.navigator.userAgent.match(/iPad/i)||window.navigator.userAgent.match(/iPod/i)||window.navigator.userAgent.match(/BlackBerry/i)||window.navigator.userAgent.match(/Windows Phone/i));function qe(){typeof window!="undefined"&&Ye.forEach(function(t){window.document.addEventListener(t,Ue,{passive:!1})})}function Zt(){return m&&m.ghostParent?m.ghostParent:_&&_.parentElement||window.document.body}var Z,Bt,te,vt,Tt,zt,$e=(vt=null,Tt=1,zt=5,function(t,e,n){Z=yt(t),te=n,(Bt=typeof e=="number"?e:We?200:0)&&(vt=setTimeout(re,Bt)),ft.forEach(function(o){return window.document.addEventListener(o,ee)},{passive:!1}),gt.forEach(function(o){return window.document.addEventListener(o,ne)},{passive:!1}),window.document.addEventListener("drag",oe,{passive:!1})});function ee(t){var e=yt(t),n=e.clientX,o=e.clientY;if(Bt)(Math.abs(Z.clientX-n)>zt||Math.abs(Z.clientY-o)>zt)&&ht();else if(Math.abs(Z.clientX-n)>Tt||Math.abs(Z.clientY-o)>Tt)return re()}function ne(){ht()}function oe(){ht()}function ht(){clearTimeout(vt),ft.forEach(function(t){return window.document.removeEventListener(t,ee)},{passive:!1}),gt.forEach(function(t){return window.document.removeEventListener(t,ne)},{passive:!1}),window.document.removeEventListener("drag",oe,{passive:!1})}function re(){clearTimeout(vt),ht(),te()}function Ue(t){var e=yt(t);if(!L&&(e.button===void 0||e.button===0)&&(_=U(e.target,"."+A))){var n=U(_,"."+B),o=I.filter(function(s){return s.element===n})[0],r=o.getOptions().dragHandleSelector,a=o.getOptions().nonDragAreaSelector,u=!0;r&&!U(e.target,r)&&(u=!1),a&&U(e.target,a)&&(u=!1),u&&(o.layout.invalidate(),T(window.document.body,ot),T(window.document.body,rt),window.document.addEventListener("mouseup",function s(){st(window.document.body,ot),st(window.document.body,rt),window.document.removeEventListener("mouseup",s)})),u&&$e(e,o.getOptions().dragBeginDelay,function(){Me(),de(e,Wt(t.target)),ft.forEach(function(s){window.document.addEventListener(s,ie,{passive:!1})}),gt.forEach(function(s){window.document.addEventListener(s,Nt,{passive:!1})})})}}function ie(t){t.preventDefault();var e=yt(t);if(m){var n=m.container.getOptions();n.behaviour==="contain"?function(o){var r,a,u,s,d=o.clientX,i=o.clientY,l=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"vertical",c=m.container.layout.getBeginEndOfContainerVisibleRect();s=l==="vertical"?(r=i,a="y",u="top",m.size.offsetHeight):(r=d,a="x",u="left",m.size.offsetWidth);var f=c.begin,g=c.end-s,p=Math.max(f,Math.min(g,r+b.positionDelta[u]));b.topLeft[a]=p,m.position[a]=Math.max(c.begin,Math.min(c.end,r+b.centerDelta[a])),m.mousePosition[a]=Math.max(c.begin,Math.min(c.end,r)),m.position[a]<c.begin+s/2&&(m.position[a]=c.begin+2),m.position[a]>c.end-s/2&&(m.position[a]=c.end-2)}(e,n.orientation):K?K==="y"?(b.topLeft.y=e.clientY+b.positionDelta.top,m.position.y=e.clientY+b.centerDelta.y,m.mousePosition.y=e.clientY):K==="x"&&(b.topLeft.x=e.clientX+b.positionDelta.left,m.position.x=e.clientX+b.centerDelta.x,m.mousePosition.x=e.clientX):(b.topLeft.x=e.clientX+b.positionDelta.left,b.topLeft.y=e.clientY+b.positionDelta.top,m.position.x=e.clientX+b.centerDelta.x,m.position.y=e.clientY+b.centerDelta.y,m.mousePosition.x=e.clientX,m.mousePosition.y=e.clientY),Mt(),(mt=!G(m))&&Je()}else de(e,Wt(t.target))}var tt,ae,le,Y,Je=(tt=se,le=!(ae=20),Y=null,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];Y&&clearTimeout(Y),le&&!Y?tt.call.apply(tt,[null].concat(e)):Y=setTimeout(function(){Y=null,tt.call.apply(tt,[null].concat(e))},ae)});function se(){mt&&(mt=!1,ue(m,S))}function Nt(){ft.forEach(function(t){window.document.removeEventListener(t,ie,{passive:!1})}),gt.forEach(function(t){window.document.removeEventListener(t,Nt,{passive:!1})}),P({reset:!0}),Q&&(function(t){t&&typeof window!="undefined"&&(window.document.head||window.document.getElementsByTagName("head")[0]).removeChild(t)}(Q),Q=null),m&&(Qt.stop(),se(),J=!0,function(t){function e(){st(b.ghost,"animated"),b.ghost.style.transitionDuration=null,Zt().removeChild(b.ghost),t()}function n(v,h,z){var jt=v.top,et=v.left;T(b.ghost,"animated"),z&&T(b.ghost.firstElementChild,z),b.topLeft.x=et,b.topLeft.y=jt,Mt(h),setTimeout(function(){e()},h+20)}function o(v,h){T(b.ghost,"animated"),Mt(v,.9,!0),setTimeout(function(){h()},v+20)}if(m.targetElement){var r=I.filter(function(v){return v.element===m.targetElement})[0];!(y=r.getOptions()).shouldAnimateDrop||y.shouldAnimateDrop(m.container.getOptions(),m.payload)?n(r.getDragResult().shadowBeginEnd.rect,Math.max(150,r.getOptions().animationDuration/2),r.getOptions().dropClass):e()}else{var a=I.filter(function(v){return v===m.container})[0];if(a){var u=a.getOptions(),s=u.behaviour,d=u.removeOnDropOut;if(s!=="move"&&s!=="contain"||!pt&&d||!a.getDragResult())o(a.getOptions().animationDuration,e);else{var i=a.layout.getContainerRectangles();if(!It(i.visibleRect)&&It(i.lastVisibleRect))n({top:i.lastVisibleRect.top,left:i.lastVisibleRect.left},a.getOptions().animationDuration,a.getOptions().dropClass);else{var l=a.getDragResult(),c=l.removedIndex,f=l.elementSize,g=a.layout;a.getTranslateCalculator({dragResult:{removedIndex:c,addedIndex:c,elementSize:f,pos:void 0,shadowBeginEnd:void 0}});var p=0<c?g.getBeginEnd(a.draggables[c-1]).end:g.getBeginEndOfContainer().begin;n(g.getTopLeftOfElementBegin(p),a.getOptions().animationDuration,a.getOptions().dropClass)}}}else o($.animationDuration,e)}var y}(function(){ce(L=!1);for(var t=S||[],e=t.shift();e!==void 0;)e.handleDrop(m),e=t.shift();G=K=m=b=_=S=null,J=!1}))}function yt(t){return t.touches?t.touches[0]:t}function ue(t,e){var n=!1;e.forEach(function(o){var r=o.handleDrag(t);n=!!r.containerBoxChanged||!1,r.containerBoxChanged=!1}),n&&(n=!1,requestAnimationFrame(function(){I.forEach(function(o){o.layout.invalidateRects(),o.onTranslated()})}))}function _t(t){var e=t,n=null;return function(o){return!(n!==null||!L||J)&&(n=requestAnimationFrame(function(){L&&!J&&(ue(o,e),P({draggableInfo:o})),n=null}),!0)}}function Lt(t,e){return t.getOptions().autoScrollEnabled?ke(e,t.getScrollMaxSpeed()):function(n){return null}}function ce(t){I.forEach(function(e){var n=t?e.getOptions().onDragStart:e.getOptions().onDragEnd;if(n){var o={isSource:e===m.container,payload:m.payload};e.isDragRelevant(m.container,m.payload)?o.willAcceptDrop=!0:o.willAcceptDrop=!1,n(o)}})}function de(t,e){if(_!==null){L=!0;var n=I.filter(function(o){return _.parentElement===o.element})[0];n.setDraggables(),K=n.getOptions().lockAxis?n.getOptions().lockAxis.toLowerCase():null,m=function(o){var r=I.filter(function(d){return o.parentElement===d.element})[0],a=r.draggables.indexOf(o),u=r.getOptions().getGhostParent,s=o.getBoundingClientRect();return{container:r,element:o,size:{offsetHeight:s.bottom-s.top,offsetWidth:s.right-s.left},elementIndex:a,payload:r.getOptions().getChildPayload?r.getOptions().getChildPayload(a):void 0,targetElement:null,position:{x:0,y:0},groupName:r.getOptions().groupName,ghostParent:u?u():null,invalidateShadow:null,mousePosition:null,relevantContainers:null}}(_),b=function(o,r,a,u){var s=r.x,d=r.y,i=o.getBoundingClientRect(),l=i.left,c=i.top,f=i.right,g=i.bottom,p=ze(a.layout.getContainerRectangles().visibleRect,i),y=p.left+(p.right-p.left)/2,v=p.top+(p.bottom-p.top)/2,h=o.cloneNode(!0);return h.style.zIndex="1000",h.style.boxSizing="border-box",h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.transform=null,h.style.removeProperty("transform"),a.shouldUseTransformForGhost()?h.style.transform="translate3d(".concat(l,"px, ").concat(c,"px, 0)"):(h.style.top="".concat(c,"px"),h.style.left="".concat(l,"px")),h.style.width=f-l+"px",h.style.height=g-c+"px",h.style.overflow="visible",h.style.transition=null,h.style.removeProperty("transition"),h.style.pointerEvents="none",h.style.userSelect="none",a.getOptions().dragClass?setTimeout(function(){T(h.firstElementChild,a.getOptions().dragClass);var z=window.getComputedStyle(h.firstElementChild).cursor;Q=Kt(z)}):Q=Kt(u),T(h,a.getOptions().orientation||"vertical"),T(h,q),{ghost:h,centerDelta:{x:y-s,y:v-d},positionDelta:{left:l-s,top:c-d},topLeft:{x:l,y:c}}}(_,{x:t.clientX,y:t.clientY},m.container,e),m.position={x:t.clientX+b.centerDelta.x,y:t.clientY+b.centerDelta.y},m.mousePosition={x:t.clientX,y:t.clientY},S=I.filter(function(o){return o.isDragRelevant(n,m.payload)}),m.relevantContainers=S,G=_t(S),P&&P({reset:!0,draggableInfo:void 0}),P=Lt(n,S),S.forEach(function(o){return o.prepareDrag(o,S)}),ce(!0),G(m),Zt().appendChild(b.ghost),Qt.start()}}var bt=null;function Mt(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:0,e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:1,n=2<arguments.length&&arguments[2]!==void 0&&arguments[2],o=b,r=o.ghost,a=o.topLeft,u=a.x,s=a.y,d=!m.container||m.container.shouldUseTransformForGhost(),i=d?"translate3d(".concat(u,"px,").concat(s,"px, 0)"):null;if(e!==1&&(i=i?"".concat(i," scale(").concat(e,")"):"scale(".concat(e,")")),0<t)return b.ghost.style.transitionDuration=t+"ms",void requestAnimationFrame(function(){i&&(r.style.transform=i),d||(r.style.left=u+"px",r.style.top=s+"px"),bt=null,n&&(r.style.opacity="0")});bt===null&&(bt=requestAnimationFrame(function(){i&&(r.style.transform=i),d||(r.style.left=u+"px",r.style.top=s+"px"),bt=null,n&&(r.style.opacity="0")}))}function Ke(){if(L&&!pt&&!J){mt=!(pt=!0);var t=Object.assign({},m,{targetElement:null,position:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER},mousePosition:{x:Number.MAX_SAFE_INTEGER,y:Number.MAX_SAFE_INTEGER}});S.forEach(function(e){e.handleDrag(t)}),m.targetElement=null,m.cancelDrop=!0,Nt(),pt=!1}}typeof window!="undefined"&&function(){if(typeof window!="undefined"){var t=window.document.head||window.document.getElementsByTagName("head")[0],e=window.document.createElement("style");e.id="smooth-dnd-style-definitions";var n=Pt(Ge);e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(window.document.createTextNode(n)),t.appendChild(e)}}();var wt=(qe(),{register:function(t){(function(e){I.push(e),L&&m&&e.isDragRelevant(m.container,m.payload)&&(S.push(e),e.prepareDrag(e,S),P&&P({reset:!0,draggableInfo:void 0}),P=Lt(e,S),G=_t(S),e.handleDrag(m))})(t)},unregister:function(t){(function(e){if(I.splice(I.indexOf(e),1),L&&m){m.container===e&&e.fireRemoveElement(),m.targetElement===e.element&&(m.targetElement=null);var n=S.indexOf(e);-1<n&&(S.splice(n,1),P&&P({reset:!0,draggableInfo:void 0}),P=Lt(e,S),G=_t(S))}})(t)},isDragging:function(){return L},cancelDrag:Ke});function fe(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:$.animationDuration;e?(T(t,Et),t.style.transitionDuration=n+"ms"):(st(t,Et),t.style.removeProperty("transition-duration"))}function ge(t){var e=[];return Array.prototype.forEach.call(t.children,function(n){if(n.nodeType===Node.ELEMENT_NODE){var o=n;At(n,A)||(o=function(r){if(O.wrapChild){var a=window.document.createElement("div");return a.className="".concat(A),r.parentElement.insertBefore(a,r),a.appendChild(r),a}return r}(n)),o[H]=0,e.push(o)}else t.removeChild(n)}),e}function Qe(t){var e=t.layout;return function(n,o){var r=2<arguments.length&&arguments[2]!==void 0&&arguments[2];return function a(u,s,d,i){var l=4<arguments.length&&arguments[4]!==void 0&&arguments[4];if(i<d)return d;if(d===i){var c=e.getBeginEnd(u[d]),f=c.begin,g=c.end;return l?s<(g+f)/2?d:d+1:d}var p=Math.floor((i+d)/2),y=e.getBeginEnd(u[p]),v=y.begin,h=y.end;return s<v?a(u,s,d,p-1,l):h<s?a(u,s,p+1,i,l):l?s<(h+v)/2?p:p+1:p}(n,o,0,n.length-1,r)}}function Ze(t){var e=t.element,n=t.draggables,o=t.layout,r=t.getOptions,a=function(s){var d=s.element,i=s.draggables,l=s.layout;return function(){i.forEach(function(c){fe(c,!1),l.setTranslation(c,0),l.setVisibility(c,!0)}),d[M]&&(d[M].parentNode.removeChild(d[M]),d[M]=null)}}({element:e,draggables:n,layout:o,getOptions:r}),u=(O.dropHandler||qt)({element:e,draggables:n,layout:o,getOptions:r});return function(s,d){var i=d.addedIndex,l=d.removedIndex,c=2<arguments.length&&arguments[2]!==void 0&&arguments[2];if(a(),!s.cancelDrop&&(s.targetElement||r().removeOnDropOut||c)){var f={removedIndex:l,addedIndex:i!==null?l!==null&&l<i?i-1:i:null,payload:s.payload};u(f,r().onDrop)}}}function pe(t){var e=t.element,n=t.getOptions,o=null;return function(r){var a=r.draggableInfo,u=o;return o==null&&a.container.element===e&&n().behaviour!=="copy"&&(u=o=a.elementIndex),{removedIndex:u}}}function me(t){var e=t.draggables,n=t.layout;return function(o){var r=o.dragResult;r.removedIndex!==null&&n.setVisibility(e[r.removedIndex],!1)}}function ve(t){var e=t.element,n=t.layout;return function(o){var r=o.draggableInfo,a=document.elementFromPoint(r.position.x,r.position.y);if(a){var u=Ne(a,r.relevantContainers);if(u&&u.element===e)return{pos:n.getPosition(r.position)}}return{pos:null}}}function he(t){var e=t.layout,n=null;return function(o){var r=o.draggableInfo;return o.dragResult.pos===null?n=null:{elementSize:n=n||e.getSize(r.size)}}}function ye(t){var e=t.element;return function(n){var o=n.draggableInfo,r=n.dragResult;(function(a,u){var s=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2];u&&s?a.targetElement=u:a.targetElement===u&&(a.targetElement=null)})(o,e,!!r.pos)}}function tn(){return function(t){return t.dragResult.pos!==null?{addedIndex:0}:{addedIndex:null}}}function en(t){var e=t.layout,n=null;return function(o){var r=o.dragResult.addedIndex;if(r===n)return null;n=r;var a=e.getBeginEndOfContainer(),u=a.begin;return a.end,{shadowBeginEnd:{rect:e.getTopLeftOfElementBegin(u)}}}}function nn(t){var e=t.layout,n=t.element,o=t.getOptions,r=null;return function(a){var u=a.dragResult,s=u.elementSize,d=u.shadowBeginEnd,i=u.addedIndex,l=u.dropPlaceholderContainer,c=o();if(c.dropPlaceholder){var f=typeof c.dropPlaceholder=="boolean"?{}:c.dropPlaceholder,g=f.animationDuration,p=f.className,y=f.showOnTop;if(i===null)return l&&r!==null&&n.removeChild(l),r=null,{dropPlaceholderContainer:void 0};if(!l){var v=document.createElement("div"),h=document.createElement("div");h.className=Ot,v.className="".concat(Ct," ").concat(p||St),(l=document.createElement("div")).className="".concat(it),l.style.position="absolute",g!==void 0&&(l.style.transition="all ".concat(g,"ms ease")),l.appendChild(h),h.appendChild(v),e.setSize(l.style,s+"px"),l.style.pointerEvents="none",y?n.appendChild(l):n.insertBefore(l,n.firstElementChild)}return r!==i&&d.dropArea&&e.setBegin(l.style,d.dropArea.begin-e.getBeginEndOfContainer().begin+"px"),r=i,{dropPlaceholderContainer:l}}return null}}function on(t){var e=we(t);return function(n){var o=n.draggableInfo,r=n.dragResult;return o.invalidateShadow?e({draggableInfo:o,dragResult:r}):null}}function rn(t){var e=function(n){var o=n.draggables,r=Qe({layout:n.layout});return function(a){var u=a.dragResult,s=u.shadowBeginEnd,d=u.pos;if(s)return s.begin+s.beginAdjustment<=d&&s.end>=d?null:d<s.begin+s.beginAdjustment?r(o,d):d>s.end?r(o,d)+1:o.length;var i=r(o,d,!0);return i!==null?i:o.length}}(t);return function(n){var o=n.dragResult,r=null;return o.pos!==null&&(r=e({dragResult:o}))===null&&(r=o.addedIndex),{addedIndex:r}}}function an(){var t=null;return function(e){var n=e.dragResult,o=n.addedIndex,r=n.shadowBeginEnd;o!==t&&t!==null&&r&&(r.beginAdjustment=0),t=o}}function ln(t){var e=t.element,n=t.draggables,o=t.layout,r=t.getOptions,a=null;return function(u){var s=u.dragResult,d=s.addedIndex,i=s.removedIndex,l=s.elementSize;if(i===null){if(d!==null){if(!a){var c=o.getBeginEndOfContainer();c.end=c.begin+o.getSize(e);var f=o.getScrollSize(e)>o.getSize(e)?c.begin+o.getScrollSize(e)-o.getScrollValue(e):c.end,g=0<n.length?o.getBeginEnd(n[n.length-1]).end-n[n.length-1][H]:c.begin;if(f<g+l){(a=window.document.createElement("div")).className=Dt+" "+r().orientation;var p=0<n.length?l+g-f:l;return o.setSize(a.style,"".concat(p,"px")),e.appendChild(a),e[M]=a,{containerBoxChanged:!0}}}}else if(a){o.setTranslation(a,0);var y=a;return a=null,e.removeChild(y),{containerBoxChanged:!(e[M]=null)}}}}}function be(t){var e=t.draggables,n=t.layout,o=null,r=null;return function(a){var u=a.dragResult,s=u.addedIndex,d=u.removedIndex,i=u.elementSize;if(s!==o||d!==r){for(var l=0;l<e.length;l++)if(l!==d){var c=e[l],f=0;d!==null&&d<l&&(f-=i),s!==null&&s<=l&&(f+=i),n.setTranslation(c,f)}return{addedIndex:o=s,removedIndex:r=d}}}}function we(t){var e=t.draggables,n=t.layout,o=null;return function(r){var a=r.draggableInfo,u=r.dragResult,s=u.addedIndex,d=u.removedIndex,i=u.elementSize,l=u.pos,c=u.shadowBeginEnd;if(l===null)return{shadowBeginEnd:o=null};if(s===null||!a.invalidateShadow&&s===o)return null;var f=s-1,g=Number.MIN_SAFE_INTEGER,p=0,y=0,v=null,h=null;if(f===d&&f--,-1<f){var z=n.getSize(e[f]);if(h=n.getBeginEnd(e[f]),i<z){var jt=(z-i)/2;g=h.end-jt}else g=h.end;p=h.end}else h={end:n.getBeginEndOfContainer().begin},p=n.getBeginEndOfContainer().begin;var et=Number.MAX_SAFE_INTEGER,nt=s;if(nt===d&&nt++,nt<e.length){var Ce=n.getSize(e[nt]);if(v=n.getBeginEnd(e[nt]),i<Ce){var cn=(Ce-i)/2;et=v.begin+cn}else et=v.begin;y=v.begin}else v={begin:n.getContainerRectangles().rect.end},y=n.getContainerRectangles().rect.end-n.getContainerRectangles().rect.begin;var dn=h&&v?n.getTopLeftOfElementBegin(h.end):null;return o=s,{shadowBeginEnd:{dropArea:{begin:p,end:y},begin:g,end:et,rect:dn,beginAdjustment:c?c.beginAdjustment:0}}}}function sn(){var t=null;return function(e){var n=e.dragResult,o=n.pos,r=n.addedIndex,a=n.shadowBeginEnd;if(o!==null){if(r!=null&&t===null){if(o<a.begin){var u=o-a.begin-5;a.beginAdjustment=u}t=r}}else t=null}}function xe(t){var e=t.getOptions,n=!1,o=e();return function(r){var a=!!r.dragResult.pos;a!==n&&((n=a)?o.onDragEnter&&o.onDragEnter():o.onDragLeave&&o.onDragLeave())}}function Ee(t){var e=t.getOptions,n=null,o=e();return function(r){var a=r.dragResult,u=a.addedIndex,s=a.removedIndex,d=r.draggableInfo,i=d.payload,l=d.element;if(o.onDropReady&&u!==null&&n!==u){var c=n=u;s!==null&&s<u&&c--,o.onDropReady({addedIndex:c,removedIndex:s,payload:i,element:l?l.firstElementChild:void 0})}}}function De(t){return t.getOptions().behaviour==="drop-zone"?Se(t)(pe,me,ve,he,ye,tn,en,xe,Ee):Se(t)(pe,me,ve,he,ye,on,rn,an,ln,be,we,nn,sn,xe,Ee)}function Se(t){return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var r=n.map(function(u){return u(t)}),a=null;return function(u){return a=r.reduce(function(s,d){return Object.assign(s,d({draggableInfo:u,dragResult:s}))},a||{addedIndex:null,removedIndex:null,elementSize:null,pos:null,shadowBeginEnd:null})}}}function un(t){return function(e){var n=Object.assign({},$,e),o=null,r=null,a=function(f,g){var p=ge(f),y=g();return T(f,"".concat(B," ").concat(y.orientation)),{element:f,draggables:p,getOptions:g,layout:He(f,y.orientation,y.animationDuration)}}(t,c),u=De(a),s=Ze(a),d=function(f,g){var p=[];function y(){p&&(p.forEach(function(v){return v.removeEventListener("scroll",g)}),window.removeEventListener("scroll",g))}return function(){for(var v=f;v;)(kt(v,"x")||kt(v,"y"))&&p.push(v),v=v.parentElement}(),{dispose:function(){y(),p=null},start:function(){p&&(p.forEach(function(v){return v.addEventListener("scroll",g)}),window.addEventListener("scroll",g))},stop:y}}(t,function(){a.layout.invalidateRects(),i()});function i(){r!==null&&(r.invalidateShadow=!0,o=u(r),r.invalidateShadow=!1)}function l(f,g){for(var p=ge(g),y=0;y<p.length;y++)f[y]=p[y];for(var v=0;v<f.length-p.length;v++)f.pop()}function c(){return n}return{element:t,draggables:a.draggables,isDragRelevant:function(f){var g=f.element,p=f.getOptions;return function(y,v){var h=p();if(h.shouldAcceptDrop)return h.shouldAcceptDrop(y.getOptions(),v);var z=y.getOptions();return h.behaviour!=="copy"&&U(g,"."+A)!==y.element&&(y.element===g||!(!z.groupName||z.groupName!==h.groupName))}}(a),layout:a.layout,dispose:function(f){d.dispose(),function(g){O.wrapChild&&Array.prototype.forEach.call(g.children,function(p){p.nodeType===Node.ELEMENT_NODE&&At(p,A)&&(g.insertBefore(p.firstElementChild,p),g.removeChild(p))})}(f.element)},prepareDrag:function(f,g){var p=f.element,y=a.draggables;l(y,p),f.layout.invalidateRects(),y.forEach(function(v){return fe(v,!0,c().animationDuration)}),d.start()},handleDrag:function(f){return o=u(r=f)},handleDrop:function(f){d.stop(),o&&o.dropPlaceholderContainer&&t.removeChild(o.dropPlaceholderContainer),r=null,u=De(a),s(f,o),o=null},fireRemoveElement:function(){s(r,Object.assign({},o,{addedIndex:null}),!0),o=null},getDragResult:function(){return o},getTranslateCalculator:function(f){return be(a)(f)},onTranslated:function(){i()},setDraggables:function(){l(a.draggables,t)},getScrollMaxSpeed:function(){return O.maxScrollSpeed},shouldUseTransformForGhost:function(){return O.useTransformForGhost===!0},getOptions:c,setOptions:function(f){var g=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];n=g===!1?Object.assign({},$,f):Object.assign({},$,n,f)}}}}var O=function(t,e){var n=un(t)(e);return t[W]=n,wt.register(n),{dispose:function(){wt.unregister(n),n.dispose(n)},setOptions:function(o,r){n.setOptions(o,r)}}};function xt(t,e,n){Object.defineProperty(t,n,{set:function(o){e[n]=o},get:function(){return e[n]}})}O.wrapChild=!0,O.cancelDrag=function(){wt.cancelDrag()},O.isDragging=function(){return wt.isDragging()};function j(t,e){return console.warn('default export is deprecated. please use named export "smoothDnD"'),O(t,e)}j.cancelDrag=function(){O.cancelDrag()},j.isDragging=function(){return O.isDragging()},xt(j,O,"useTransformForGhost"),xt(j,O,"maxScrollSpeed"),xt(j,O,"wrapChild"),xt(j,O,"dropHandler"),C.smoothDnD=O,C.constants=Be,C.dropHandlers=je,C.default=j,Object.defineProperty(C,"__esModule",{value:!0})})})(F,F.exports);const vn=function(x){return Array.isArray(x)};function Ie(x){return x?typeof x=="string"||typeof x=="object"&&(typeof x.value=="string"||typeof x.value=="function"||typeof x.value=="object"):!0}function Pe(x,R){const C=x.$props.tag;if(C){if(typeof C=="string"){const w={value:C};return R&&(w.props={class:R}),w}else if(typeof C=="object"){const w={value:C.value||"div",props:C.props||{}};return R&&(w.props.class?vn(w.props.class)?w.props.class.push(R):w.props.class=[R,w.props.class]:w.props.class=R),w}}return{value:"div"}}F.exports.smoothDnD.dropHandler=F.exports.dropHandlers.reactDropHandler().handler;F.exports.smoothDnD.wrapChild=!1;const Oe={"drag-start":"onDragStart","drag-end":"onDragEnd",drop:"onDrop","drag-enter":"onDragEnter","drag-leave":"onDragLeave","drop-ready":"onDropReady"};var wn=Re({name:"Container",mounted(){const x=Object.assign({},this.$props);for(const R in Oe)x[Oe[R]]=C=>{this.$emit(R,C)};this.containerElement=this.$refs.container||this.$el,this.container=F.exports.smoothDnD(this.containerElement,x)},unmounted(){this.container&&this.container.dispose()},emits:["drop","drag-start","drag-end","drag-enter","drag-leave","drop-ready"],props:{removeOnDropOut:{type:Boolean,default:!1},autoScrollEnabled:{type:Boolean,default:!0},behaviour:String,groupName:String,orientation:String,dragHandleSelector:String,nonDragAreaSelector:String,lockAxis:String,dragClass:String,dropClass:String,dragBeginDelay:Number,animationDuration:Number,getChildPayload:Function,shouldAnimateDrop:Function,shouldAcceptDrop:Function,getGhostParent:Function,dropPlaceholder:[Object,Boolean],tag:{validator:Ie,default:"div"}},render(){const x=Pe(this);return Ae(x.value,Object.assign({},{ref:"container"},x.props),this.$slots.default())}}),xn=Re({name:"Draggable",props:{tag:{validator:Ie,default:"div"}},render:function(){const x=Pe(this,F.exports.constants.wrapperClass);return Ae(x.value,Object.assign({},x.props),this.$slots.default())}});export{wn as C,xn as D,bn as _};
