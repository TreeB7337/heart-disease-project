(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6443],{86443:(e,t,n)=>{"use strict";n.r(t);n.d(t,{Bounce:()=>F,Flip:()=>q,Icons:()=>N,Slide:()=>z,ToastContainer:()=>U,Zoom:()=>H,collapseToast:()=>T,cssTransition:()=>v,toast:()=>J,useToast:()=>M,useToastContainer:()=>x});var o=n(77865);var s=n.n(o);function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function i(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}const r=i;function l(e){return typeof e==="number"&&!isNaN(e)}function c(e){return typeof e==="boolean"}function u(e){return typeof e==="string"}function d(e){return typeof e==="function"}function f(e){return u(e)||d(e)?e:null}function p(e){return e!=null}function m(e,t){return e===false||l(e)&&e>0?e:t}function g(e){return(0,o.isValidElement)(e)||u(e)||d(e)||l(e)}const y={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"};const h={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function T(e,t,n){if(n===void 0){n=300}const{scrollHeight:o,style:s}=e;requestAnimationFrame((()=>{s.minHeight="initial";s.height=o+"px";s.transition="all "+n+"ms";requestAnimationFrame((()=>{s.height="0";s.padding="0";s.margin="0";setTimeout(t,n)}))}))}function v(e){let{enter:t,exit:n,appendPosition:a=false,collapse:i=true,collapseDuration:r=300}=e;return function e(l){let{children:c,position:u,preventExitTransition:d,done:f,nodeRef:p,isIn:m}=l;const g=a?t+"--"+u:t;const y=a?n+"--"+u:n;const h=(0,o.useRef)(0);(0,o.useLayoutEffect)((()=>{const e=p.current;const t=g.split(" ");const n=o=>{if(o.target!==p.current)return;e.dispatchEvent(new Event("d"));e.removeEventListener("animationend",n);e.removeEventListener("animationcancel",n);if(h.current===0&&o.type!=="animationcancel"){e.classList.remove(...t)}};const o=()=>{e.classList.add(...t);e.addEventListener("animationend",n);e.addEventListener("animationcancel",n)};o()}),[]);(0,o.useEffect)((()=>{const e=p.current;const t=()=>{e.removeEventListener("animationend",t);i?T(e,f,r):f()};const n=()=>{h.current=1;e.className+=" "+y;e.addEventListener("animationend",t)};if(!m)d?t():n()}),[m]);return s().createElement(s().Fragment,null,c)}}function E(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const b={list:new Map,emitQueue:new Map,on(e,t){this.list.has(e)||this.list.set(e,[]);this.list.get(e).push(t);return this},off(e,t){if(t){const n=this.list.get(e).filter((e=>e!==t));this.list.set(e,n);return this}this.list.delete(e);return this},cancelEmit(e){const t=this.emitQueue.get(e);if(t){t.forEach(clearTimeout);this.emitQueue.delete(e)}return this},emit(e){this.list.has(e)&&this.list.get(e).forEach((t=>{const n=setTimeout((()=>{t(...[].slice.call(arguments,1))}),0);this.emitQueue.has(e)||this.emitQueue.set(e,[]);this.emitQueue.get(e).push(n)}))}};const C=e=>{let{theme:t,type:n,...o}=e;return s().createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-"+n+")",...o})};function _(e){return s().createElement(C,{...e},s().createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function I(e){return s().createElement(C,{...e},s().createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function L(e){return s().createElement(C,{...e},s().createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function O(e){return s().createElement(C,{...e},s().createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function R(){return s().createElement("div",{className:"Toastify"+"__spinner"})}const N={info:I,warning:_,success:L,error:O,spinner:R};const P=e=>e in N;function k(e){let{theme:t,type:n,isLoading:s,icon:a}=e;let i=null;const r={theme:t,type:n};if(a===false);else if(d(a)){i=a(r)}else if((0,o.isValidElement)(a)){i=(0,o.cloneElement)(a,r)}else if(u(a)||l(a)){i=a}else if(s){i=N.spinner()}else if(P(n)){i=N[n](r)}return i}function x(e){const[,t]=(0,o.useReducer)((e=>e+1),0);const[n,s]=(0,o.useState)([]);const a=(0,o.useRef)(null);const i=(0,o.useRef)(new Map).current;const r=e=>n.indexOf(e)!==-1;const y=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:r,getToast:e=>i.get(e)}).current;(0,o.useEffect)((()=>{y.containerId=e.containerId;b.cancelEmit(3).on(0,_).on(1,(e=>a.current&&T(e))).on(5,h).emit(2,y);return()=>{i.clear();b.emit(3,y)}}),[]);(0,o.useEffect)((()=>{y.props=e;y.isToastActive=r;y.displayedToast=n.length}));function h(e){let{containerId:t}=e;const{limit:n}=y.props;if(n&&(!t||y.containerId===t)){y.count-=y.queue.length;y.queue=[]}}function T(e){s((t=>p(e)?t.filter((t=>t!==e)):[]))}function v(){const{toastContent:e,toastProps:t,staleId:n}=y.queue.shift();I(e,t,n)}function C(e){return!a.current||y.props.enableMultiContainer&&e.containerId!==y.props.containerId||i.has(e.toastId)&&e.updateId==null}function _(e,n){let{delay:s,staleId:a,...r}=n;if(!g(e)||C(r))return;const{toastId:h,updateId:_,data:L}=r;const{props:O}=y;const R=()=>T(h);const N=_==null;if(N)y.count++;const P={toastId:h,updateId:_,data:L,containerId:r.containerId,isLoading:r.isLoading,theme:r.theme||O.theme,icon:r.icon!=null?r.icon:O.icon,isIn:false,key:r.key||y.toastKey++,type:r.type,closeToast:R,closeButton:r.closeButton,rtl:O.rtl,position:r.position||O.position,transition:r.transition||O.transition,className:f(r.className||O.toastClassName),bodyClassName:f(r.bodyClassName||O.bodyClassName),style:r.style||O.toastStyle,bodyStyle:r.bodyStyle||O.bodyStyle,onClick:r.onClick||O.onClick,pauseOnHover:c(r.pauseOnHover)?r.pauseOnHover:O.pauseOnHover,pauseOnFocusLoss:c(r.pauseOnFocusLoss)?r.pauseOnFocusLoss:O.pauseOnFocusLoss,draggable:c(r.draggable)?r.draggable:O.draggable,draggablePercent:r.draggablePercent||O.draggablePercent,draggableDirection:r.draggableDirection||O.draggableDirection,closeOnClick:c(r.closeOnClick)?r.closeOnClick:O.closeOnClick,progressClassName:f(r.progressClassName||O.progressClassName),progressStyle:r.progressStyle||O.progressStyle,autoClose:r.isLoading?false:m(r.autoClose,O.autoClose),hideProgressBar:c(r.hideProgressBar)?r.hideProgressBar:O.hideProgressBar,progress:r.progress,role:r.role||O.role,deleteToast(){const e=E(i.get(h),"removed");i.delete(h);b.emit(4,e);const n=y.queue.length;y.count=p(h)?y.count-1:y.count-y.displayedToast;if(y.count<0)y.count=0;if(n>0){const e=p(h)?1:y.props.limit;if(n===1||e===1){y.displayedToast++;v()}else{const t=e>n?n:e;y.displayedToast=t;for(let e=0;e<t;e++)v()}}else{t()}}};P.iconOut=k(P);if(d(r.onOpen))P.onOpen=r.onOpen;if(d(r.onClose))P.onClose=r.onClose;P.closeButton=O.closeButton;if(r.closeButton===false||g(r.closeButton)){P.closeButton=r.closeButton}else if(r.closeButton===true){P.closeButton=g(O.closeButton)?O.closeButton:true}let x=e;if((0,o.isValidElement)(e)&&!u(e.type)){x=(0,o.cloneElement)(e,{closeToast:R,toastProps:P,data:L})}else if(d(e)){x=e({closeToast:R,toastProps:P,data:L})}if(O.limit&&O.limit>0&&y.count>O.limit&&N){y.queue.push({toastContent:x,toastProps:P,staleId:a})}else if(l(s)){setTimeout((()=>{I(x,P,a)}),s)}else{I(x,P,a)}}function I(e,t,n){const{toastId:o}=t;if(n)i.delete(n);const a={content:e,props:t};i.set(o,a);s((e=>[...e,o].filter((e=>e!==n))));b.emit(4,E(a,a.props.updateId==null?"added":"updated"))}function L(t){const n=new Map;const o=Array.from(i.values());if(e.newestOnTop)o.reverse();o.forEach((e=>{const{position:t}=e.props;n.has(t)||n.set(t,[]);n.get(t).push(e)}));return Array.from(n,(e=>t(e[0],e[1])))}return{getToastToRender:L,containerRef:a,isToastActive:r}}function B(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function M(e){const[t,n]=(0,o.useState)(false);const[s,a]=(0,o.useState)(false);const i=(0,o.useRef)(null);const r=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:true,canDrag:false,boundingRect:null,didMove:false}).current;const l=(0,o.useRef)(e);const{autoClose:c,pauseOnHover:u,closeToast:f,onClick:p,closeOnClick:m}=e;(0,o.useEffect)((()=>{l.current=e}));(0,o.useEffect)((()=>{if(i.current)i.current.addEventListener("d",h,{once:true});if(d(e.onOpen))e.onOpen((0,o.isValidElement)(e.children)&&e.children.props);return()=>{const e=l.current;if(d(e.onClose))e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]);(0,o.useEffect)((()=>{e.pauseOnFocusLoss&&v();return()=>{e.pauseOnFocusLoss&&E()}}),[e.pauseOnFocusLoss]);function g(t){if(e.draggable){b();const n=i.current;r.canCloseOnClick=true;r.canDrag=true;r.boundingRect=n.getBoundingClientRect();n.style.transition="";r.x=B(t.nativeEvent);r.y=w(t.nativeEvent);if(e.draggableDirection==="x"){r.start=r.x;r.removalDistance=n.offsetWidth*(e.draggablePercent/100)}else{r.start=r.y;r.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent/100)}}}function y(){if(r.boundingRect){const{top:t,bottom:n,left:o,right:s}=r.boundingRect;if(e.pauseOnHover&&r.x>=o&&r.x<=s&&r.y>=t&&r.y<=n){T()}else{h()}}}function h(){n(true)}function T(){n(false)}function v(){if(!document.hasFocus())T();window.addEventListener("focus",h);window.addEventListener("blur",T)}function E(){window.removeEventListener("focus",h);window.removeEventListener("blur",T)}function b(){r.didMove=false;document.addEventListener("mousemove",_);document.addEventListener("mouseup",I);document.addEventListener("touchmove",_);document.addEventListener("touchend",I)}function C(){document.removeEventListener("mousemove",_);document.removeEventListener("mouseup",I);document.removeEventListener("touchmove",_);document.removeEventListener("touchend",I)}function _(n){const o=i.current;if(r.canDrag&&o){r.didMove=true;if(t)T();r.x=B(n);r.y=w(n);if(e.draggableDirection==="x"){r.delta=r.x-r.start}else{r.delta=r.y-r.start}if(r.start!==r.x)r.canCloseOnClick=false;o.style.transform="translate"+e.draggableDirection+"("+r.delta+"px)";o.style.opacity=""+(1-Math.abs(r.delta/r.removalDistance))}}function I(){C();const t=i.current;if(r.canDrag&&r.didMove&&t){r.canDrag=false;if(Math.abs(r.delta)>r.removalDistance){a(true);e.closeToast();return}t.style.transition="transform 0.2s, opacity 0.2s";t.style.transform="translate"+e.draggableDirection+"(0)";t.style.opacity="1"}}const L={onMouseDown:g,onTouchStart:g,onMouseUp:y,onTouchEnd:y};if(c&&u){L.onMouseEnter=T;L.onMouseLeave=h}if(m){L.onClick=e=>{p&&p(e);r.canCloseOnClick&&f()}}return{playToast:h,pauseToast:T,isRunning:t,preventExitTransition:s,toastRef:i,eventHandlers:L}}function D(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return s().createElement("button",{className:"Toastify"+"__close-button "+"Toastify"+"__close-button--"+n,type:"button",onClick:e=>{e.stopPropagation();t(e)},"aria-label":o},s().createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s().createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function A(e){let{delay:t,isRunning:n,closeToast:o,type:a,hide:i,className:l,style:c,controlledProgress:u,progress:f,rtl:p,isIn:m,theme:g}=e;const y={...c,animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1};if(u)y.transform="scaleX("+f+")";const h=r("Toastify"+"__progress-bar",u?"Toastify"+"__progress-bar--controlled":"Toastify"+"__progress-bar--animated","Toastify"+"__progress-bar-theme--"+g,"Toastify"+"__progress-bar--"+a,{["Toastify"+"__progress-bar--rtl"]:p});const T=d(l)?l({rtl:p,type:a,defaultClassName:h}):r(h,l);const v={[u&&f>=1?"onTransitionEnd":"onAnimationEnd"]:u&&f<1?null:()=>{m&&o()}};return s().createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:T,style:y,...v})}A.defaultProps={type:h.DEFAULT,hide:false};const S=e=>{const{isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:a}=M(e);const{closeButton:i,children:l,autoClose:c,onClick:u,type:f,hideProgressBar:p,closeToast:m,transition:g,position:y,className:h,style:T,bodyClassName:v,bodyStyle:E,progressClassName:b,progressStyle:C,updateId:_,role:I,progress:L,rtl:O,toastId:R,deleteToast:N,isIn:P,isLoading:k,iconOut:x,theme:B}=e;const w=r("Toastify"+"__toast","Toastify"+"__toast-theme--"+B,"Toastify"+"__toast--"+f,{["Toastify"+"__toast--rtl"]:O});const S=d(h)?h({rtl:O,position:y,type:f,defaultClassName:w}):r(w,h);const F=!!L;const z={closeToast:m,type:f,theme:B};let H=null;if(i===false);else if(d(i)){H=i(z)}else if(s().isValidElement(i)){H=s().cloneElement(i,z)}else{H=D(z)}return s().createElement(g,{isIn:P,done:N,position:y,preventExitTransition:n,nodeRef:o},s().createElement("div",{id:R,onClick:u,className:S,...a,style:T,ref:o},s().createElement("div",{...P&&{role:I},className:d(v)?v({type:f}):r("Toastify"+"__toast-body",v),style:E},x!=null&&s().createElement("div",{className:r("Toastify"+"__toast-icon",{["Toastify"+"--animate-icon "+"Toastify"+"__zoom-enter"]:!k})},x),s().createElement("div",null,l)),H,(c||F)&&s().createElement(A,{..._&&!F?{key:"pb-"+_}:{},rtl:O,theme:B,delay:c,isRunning:t,isIn:P,closeToast:m,hide:p,type:f,style:C,className:b,controlledProgress:F,progress:L})))};const F=v({enter:"Toastify"+"--animate "+"Toastify"+"__bounce-enter",exit:"Toastify"+"--animate "+"Toastify"+"__bounce-exit",appendPosition:true});const z=v({enter:"Toastify"+"--animate "+"Toastify"+"__slide-enter",exit:"Toastify"+"--animate "+"Toastify"+"__slide-exit",appendPosition:true});const H=v({enter:"Toastify"+"--animate "+"Toastify"+"__zoom-enter",exit:"Toastify"+"--animate "+"Toastify"+"__zoom-exit"});const q=v({enter:"Toastify"+"--animate "+"Toastify"+"__flip-enter",exit:"Toastify"+"--animate "+"Toastify"+"__flip-exit"});const U=(0,o.forwardRef)(((e,t)=>{const{getToastToRender:n,containerRef:a,isToastActive:i}=x(e);const{className:l,style:c,rtl:u,containerId:p}=e;function m(e){const t=r("Toastify"+"__toast-container","Toastify"+"__toast-container--"+e,{["Toastify"+"__toast-container--rtl"]:u});return d(l)?l({position:e,rtl:u,defaultClassName:t}):r(t,f(l))}(0,o.useEffect)((()=>{if(t){t.current=a.current}}),[]);return s().createElement("div",{ref:a,className:"Toastify",id:p},n(((e,t)=>{const n=!t.length?{...c,pointerEvents:"none"}:{...c};return s().createElement("div",{className:m(e),style:n,key:"container-"+e},t.map(((e,n)=>{let{content:o,props:a}=e;return s().createElement(S,{...a,isIn:i(a.toastId),style:{...a.style,"--nth":n+1,"--len":t.length},key:"toast-"+a.key},o)})))})))}));U.displayName="ToastContainer";U.defaultProps={position:y.TOP_RIGHT,transition:F,rtl:false,autoClose:5e3,hideProgressBar:false,closeButton:D,pauseOnHover:true,pauseOnFocusLoss:true,closeOnClick:true,newestOnTop:false,draggable:true,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Q=new Map;let V;let G=[];function W(e,t){let{containerId:n}=t;const o=Q.get(n||V);if(!o)return null;return o.getToast(e)}function j(){return Math.random().toString(36).substring(2,9)}function X(e){if(e&&(u(e.toastId)||l(e.toastId))){return e.toastId}return j()}function Y(e,t){if(Q.size>0){b.emit(0,e,t)}else{G.push({content:e,options:t})}return t.toastId}function K(e,t){return{...t,type:t&&t.type||e,toastId:X(t)}}function Z(e){return(t,n)=>Y(t,K(e,n))}function J(e,t){return Y(e,K(h.DEFAULT,t))}J.loading=(e,t)=>Y(e,K(h.DEFAULT,{isLoading:true,autoClose:false,closeOnClick:false,closeButton:false,draggable:false,...t}));function $(e,t,n){let{pending:o,error:s,success:a}=t;let i;if(o){i=u(o)?J.loading(o,n):J.loading(o.render,{...n,...o})}const r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100};const l=(e,t,o)=>{if(t==null){J.dismiss(i);return}const s={type:e,...r,...n,data:o};const a=u(t)?{render:t}:t;if(i){J.update(i,{...s,...a})}else{J(a.render,{...s,...a})}return o};const c=d(e)?e():e;c.then((e=>l("success",a,e))).catch((e=>l("error",s,e)));return c}J.promise=$;J.success=Z(h.SUCCESS);J.info=Z(h.INFO);J.error=Z(h.ERROR);J.warning=Z(h.WARNING);J.warn=J.warning;J.dark=(e,t)=>Y(e,K(h.DEFAULT,{theme:"dark",...t}));J.dismiss=e=>{if(Q.size>0){b.emit(1,e)}else{G=G.filter((t=>p(e)&&t.options.toastId!==e))}};J.clearWaitingQueue=function(e){if(e===void 0){e={}}return b.emit(5,e)};J.isActive=e=>{let t=false;Q.forEach((n=>{if(n.isToastActive&&n.isToastActive(e)){t=true}}));return t};J.update=function(e,t){if(t===void 0){t={}}setTimeout((()=>{const n=W(e,t);if(n){const{props:o,content:s}=n;const a={...o,...t,toastId:t.toastId||e,updateId:j()};if(a.toastId!==e)a.staleId=e;const i=a.render||s;delete a.render;Y(i,a)}}),0)};J.done=e=>{J.update(e,{progress:1})};J.onChange=e=>{b.on(4,e);return()=>{b.off(4,e)}};J.POSITION=y;J.TYPE=h;b.on(2,(e=>{V=e.containerId||e;Q.set(V,e);G.forEach((e=>{b.emit(0,e.content,e.options)}));G=[]})).on(3,(e=>{Q.delete(e.containerId||e);if(Q.size===0){b.off(0).off(1).off(5)}}))}}]);
//# sourceMappingURL=6443.04025a1d063425902d56.js.map?v=04025a1d063425902d56