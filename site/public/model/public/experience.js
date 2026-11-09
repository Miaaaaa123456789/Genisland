(()=>{var sE=Object.create;var Gp=Object.defineProperty;var rE=Object.getOwnPropertyDescriptor;var oE=Object.getOwnPropertyNames;var lE=Object.getPrototypeOf,uE=Object.prototype.hasOwnProperty;var Si=(t,e,n)=>()=>{if(n)throw n[0];try{return t&&(e=t(t=0)),e}catch(a){throw n=[a],a}};var ja=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}},cE=(t,e)=>{for(var n in e)Gp(t,n,{get:e[n],enumerable:!0})},fE=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of oE(e))!uE.call(t,i)&&i!==n&&Gp(t,i,{get:()=>e[i],enumerable:!(a=rE(e,i))||a.enumerable});return t};var ns=(t,e,n)=>(n=t!=null?sE(lE(t)):{},fE(e||!t||!t.__esModule?Gp(n,"default",{value:t,enumerable:!0}):n,t));var Uv=ja(Ot=>{"use strict";function Xp(t,e){var n=t.length;t.push(e);e:for(;0<n;){var a=n-1>>>1,i=t[a];if(0<Bc(i,e))t[a]=e,t[n]=i,n=a;else break e}}function $a(t){return t.length===0?null:t[0]}function zc(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var a=0,i=t.length,s=i>>>1;a<s;){var r=2*(a+1)-1,o=t[r],l=r+1,u=t[l];if(0>Bc(o,n))l<i&&0>Bc(u,o)?(t[a]=u,t[l]=n,a=l):(t[a]=o,t[r]=n,a=r);else if(l<i&&0>Bc(u,n))t[a]=u,t[l]=n,a=l;else break e}}return e}function Bc(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}Ot.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Ev=performance,Ot.unstable_now=function(){return Ev.now()}):(Vp=Date,Av=Vp.now(),Ot.unstable_now=function(){return Vp.now()-Av});var Ev,Vp,Av,_i=[],as=[],dE=1,xa=null,wn=3,Yp=!1,Ml=!1,bl=!1,Zp=!1,wv=typeof setTimeout=="function"?setTimeout:null,Iv=typeof clearTimeout=="function"?clearTimeout:null,Cv=typeof setImmediate<"u"?setImmediate:null;function Fc(t){for(var e=$a(as);e!==null;){if(e.callback===null)zc(as);else if(e.startTime<=t)zc(as),e.sortIndex=e.expirationTime,Xp(_i,e);else break;e=$a(as)}}function Jp(t){if(bl=!1,Fc(t),!Ml)if($a(_i)!==null)Ml=!0,Ir||(Ir=!0,wr());else{var e=$a(as);e!==null&&Kp(Jp,e.startTime-t)}}var Ir=!1,Tl=-1,Rv=5,Dv=-1;function Pv(){return Zp?!0:!(Ot.unstable_now()-Dv<Rv)}function qp(){if(Zp=!1,Ir){var t=Ot.unstable_now();Dv=t;var e=!0;try{e:{Ml=!1,bl&&(bl=!1,Iv(Tl),Tl=-1),Yp=!0;var n=wn;try{t:{for(Fc(t),xa=$a(_i);xa!==null&&!(xa.expirationTime>t&&Pv());){var a=xa.callback;if(typeof a=="function"){xa.callback=null,wn=xa.priorityLevel;var i=a(xa.expirationTime<=t);if(t=Ot.unstable_now(),typeof i=="function"){xa.callback=i,Fc(t),e=!0;break t}xa===$a(_i)&&zc(_i),Fc(t)}else zc(_i);xa=$a(_i)}if(xa!==null)e=!0;else{var s=$a(as);s!==null&&Kp(Jp,s.startTime-t),e=!1}}break e}finally{xa=null,wn=n,Yp=!1}e=void 0}}finally{e?wr():Ir=!1}}}var wr;typeof Cv=="function"?wr=function(){Cv(qp)}:typeof MessageChannel<"u"?(Wp=new MessageChannel,Lv=Wp.port2,Wp.port1.onmessage=qp,wr=function(){Lv.postMessage(null)}):wr=function(){wv(qp,0)};var Wp,Lv;function Kp(t,e){Tl=wv(function(){t(Ot.unstable_now())},e)}Ot.unstable_IdlePriority=5;Ot.unstable_ImmediatePriority=1;Ot.unstable_LowPriority=4;Ot.unstable_NormalPriority=3;Ot.unstable_Profiling=null;Ot.unstable_UserBlockingPriority=2;Ot.unstable_cancelCallback=function(t){t.callback=null};Ot.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rv=0<t?Math.floor(1e3/t):5};Ot.unstable_getCurrentPriorityLevel=function(){return wn};Ot.unstable_next=function(t){switch(wn){case 1:case 2:case 3:var e=3;break;default:e=wn}var n=wn;wn=e;try{return t()}finally{wn=n}};Ot.unstable_requestPaint=function(){Zp=!0};Ot.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=wn;wn=t;try{return e()}finally{wn=n}};Ot.unstable_scheduleCallback=function(t,e,n){var a=Ot.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?a+n:a):n=a,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,t={id:dE++,callback:e,priorityLevel:t,startTime:n,expirationTime:i,sortIndex:-1},n>a?(t.sortIndex=n,Xp(as,t),$a(_i)===null&&t===$a(as)&&(bl?(Iv(Tl),Tl=-1):bl=!0,Kp(Jp,n-a))):(t.sortIndex=i,Xp(_i,t),Ml||Yp||(Ml=!0,Ir||(Ir=!0,wr()))),t};Ot.unstable_shouldYield=Pv;Ot.unstable_wrapCallback=function(t){var e=wn;return function(){var n=wn;wn=e;try{return t.apply(this,arguments)}finally{wn=n}}}});var Nv=ja((ED,Ov)=>{"use strict";Ov.exports=Uv()});var Yv=ja(Ye=>{"use strict";var $p=Symbol.for("react.transitional.element"),hE=Symbol.for("react.portal"),pE=Symbol.for("react.fragment"),mE=Symbol.for("react.strict_mode"),gE=Symbol.for("react.profiler"),xE=Symbol.for("react.consumer"),vE=Symbol.for("react.context"),yE=Symbol.for("react.forward_ref"),SE=Symbol.for("react.suspense"),_E=Symbol.for("react.memo"),kv=Symbol.for("react.lazy"),ME=Symbol.for("react.activity"),Bv=Symbol.iterator;function bE(t){return t===null||typeof t!="object"?null:(t=Bv&&t[Bv]||t["@@iterator"],typeof t=="function"?t:null)}var Gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vv=Object.assign,qv={};function Dr(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||Gv}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Dr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wv(){}Wv.prototype=Dr.prototype;function em(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||Gv}var tm=em.prototype=new Wv;tm.constructor=em;Vv(tm,Dr.prototype);tm.isPureReactComponent=!0;var Fv=Array.isArray;function jp(){}var wt={H:null,A:null,T:null,S:null},Xv=Object.prototype.hasOwnProperty;function nm(t,e,n){var a=n.ref;return{$$typeof:$p,type:t,key:e,ref:a!==void 0?a:null,props:n}}function TE(t,e){return nm(t.type,e,t.props)}function am(t){return typeof t=="object"&&t!==null&&t.$$typeof===$p}function EE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zv=/\/+/g;function Qp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?EE(""+t.key):e.toString(36)}function AE(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(jp,jp):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Rr(t,e,n,a,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case $p:case hE:r=!0;break;case kv:return r=t._init,Rr(r(t._payload),e,n,a,i)}}if(r)return i=i(t),r=a===""?"."+Qp(t,0):a,Fv(i)?(n="",r!=null&&(n=r.replace(zv,"$&/")+"/"),Rr(i,e,n,"",function(u){return u})):i!=null&&(am(i)&&(i=TE(i,n+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(zv,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=a===""?".":a+":";if(Fv(t))for(var l=0;l<t.length;l++)a=t[l],s=o+Qp(a,l),r+=Rr(a,e,n,s,i);else if(l=bE(t),typeof l=="function")for(t=l.call(t),l=0;!(a=t.next()).done;)a=a.value,s=o+Qp(a,l++),r+=Rr(a,e,n,s,i);else if(s==="object"){if(typeof t.then=="function")return Rr(AE(t),e,n,a,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Hc(t,e,n){if(t==null)return t;var a=[],i=0;return Rr(t,a,"","",function(s){return e.call(n,s,i++)}),a}function CE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Hv=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},LE={map:Hc,forEach:function(t,e,n){Hc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Hc(t,function(){e++}),e},toArray:function(t){return Hc(t,function(e){return e})||[]},only:function(t){if(!am(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Activity=ME;Ye.Children=LE;Ye.Component=Dr;Ye.Fragment=pE;Ye.Profiler=gE;Ye.PureComponent=em;Ye.StrictMode=mE;Ye.Suspense=SE;Ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=wt;Ye.__COMPILER_RUNTIME={__proto__:null,c:function(t){return wt.H.useMemoCache(t)}};Ye.cache=function(t){return function(){return t.apply(null,arguments)}};Ye.cacheSignal=function(){return null};Ye.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=Vv({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!Xv.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(a[s]=e[s]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];a.children=r}return nm(t.type,i,a)};Ye.createContext=function(t){return t={$$typeof:vE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:xE,_context:t},t};Ye.createElement=function(t,e,n){var a,i={},s=null;if(e!=null)for(a in e.key!==void 0&&(s=""+e.key),e)Xv.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(i[a]=e[a]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(a in r=t.defaultProps,r)i[a]===void 0&&(i[a]=r[a]);return nm(t,s,i)};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:yE,render:t}};Ye.isValidElement=am;Ye.lazy=function(t){return{$$typeof:kv,_payload:{_status:-1,_result:t},_init:CE}};Ye.memo=function(t,e){return{$$typeof:_E,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=wt.T,n={};wt.T=n;try{var a=t(),i=wt.S;i!==null&&i(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(jp,Hv)}catch(s){Hv(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),wt.T=e}};Ye.unstable_useCacheRefresh=function(){return wt.H.useCacheRefresh()};Ye.use=function(t){return wt.H.use(t)};Ye.useActionState=function(t,e,n){return wt.H.useActionState(t,e,n)};Ye.useCallback=function(t,e){return wt.H.useCallback(t,e)};Ye.useContext=function(t){return wt.H.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t,e){return wt.H.useDeferredValue(t,e)};Ye.useEffect=function(t,e){return wt.H.useEffect(t,e)};Ye.useEffectEvent=function(t){return wt.H.useEffectEvent(t)};Ye.useId=function(){return wt.H.useId()};Ye.useImperativeHandle=function(t,e,n){return wt.H.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return wt.H.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return wt.H.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return wt.H.useMemo(t,e)};Ye.useOptimistic=function(t,e){return wt.H.useOptimistic(t,e)};Ye.useReducer=function(t,e,n){return wt.H.useReducer(t,e,n)};Ye.useRef=function(t){return wt.H.useRef(t)};Ye.useState=function(t){return wt.H.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return wt.H.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return wt.H.useTransition()};Ye.version="19.2.0"});var Pr=ja((CD,Zv)=>{"use strict";Zv.exports=Yv()});var Kv=ja(Fn=>{"use strict";var wE=Pr();function Jv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function is(){}var Bn={d:{f:is,r:function(){throw Error(Jv(522))},D:is,C:is,L:is,m:is,X:is,S:is,M:is},p:0,findDOMNode:null},IE=Symbol.for("react.portal");function RE(t,e,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:IE,key:a==null?null:""+a,children:t,containerInfo:e,implementation:n}}var El=wE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function kc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Bn;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Jv(299));return RE(t,e,null,n)};Fn.flushSync=function(t){var e=El.T,n=Bn.p;try{if(El.T=null,Bn.p=2,t)return t()}finally{El.T=e,Bn.p=n,Bn.d.f()}};Fn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Bn.d.C(t,e))};Fn.prefetchDNS=function(t){typeof t=="string"&&Bn.d.D(t)};Fn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,a=kc(n,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Bn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:s}):n==="script"&&Bn.d.X(t,{crossOrigin:a,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Fn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=kc(e.as,e.crossOrigin);Bn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Bn.d.M(t)};Fn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,a=kc(n,e.crossOrigin);Bn.d.L(t,n,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Fn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=kc(e.as,e.crossOrigin);Bn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Bn.d.m(t)};Fn.requestFormReset=function(t){Bn.d.r(t)};Fn.unstable_batchedUpdates=function(t,e){return t(e)};Fn.useFormState=function(t,e,n){return El.H.useFormState(t,e,n)};Fn.useFormStatus=function(){return El.H.useHostTransitionStatus()};Fn.version="19.2.0"});var $v=ja((wD,jv)=>{"use strict";function Qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qv)}catch(t){console.error(t)}}Qv(),jv.exports=Kv()});var fb=ja(hd=>{"use strict";var on=Nv(),ES=Pr(),DE=$v();function te(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function AS(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function CS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function LS(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ey(t){if(fu(t)!==t)throw Error(te(188))}function PE(t){var e=t.alternate;if(!e){if(e=fu(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,a=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ey(i),t;if(s===a)return ey(i),e;s=s.sibling}throw Error(te(188))}if(n.return!==a.return)n=i,a=s;else{for(var r=!1,o=i.child;o;){if(o===n){r=!0,n=i,a=s;break}if(o===a){r=!0,a=i,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,a=i;break}if(o===a){r=!0,a=s,n=i;break}o=o.sibling}if(!r)throw Error(te(189))}}if(n.alternate!==a)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function wS(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=wS(t),e!==null)return e;t=t.sibling}return null}var Dt=Object.assign,UE=Symbol.for("react.element"),Gc=Symbol.for("react.transitional.element"),Pl=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),IS=Symbol.for("react.strict_mode"),Bm=Symbol.for("react.profiler"),RS=Symbol.for("react.consumer"),wi=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),Fm=Symbol.for("react.suspense"),zm=Symbol.for("react.suspense_list"),P0=Symbol.for("react.memo"),ss=Symbol.for("react.lazy"),Hm=Symbol.for("react.activity"),OE=Symbol.for("react.memo_cache_sentinel"),ty=Symbol.iterator;function Al(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var NE=Symbol.for("react.client.reference");function km(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===NE?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zr:return"Fragment";case Bm:return"Profiler";case IS:return"StrictMode";case Fm:return"Suspense";case zm:return"SuspenseList";case Hm:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Pl:return"Portal";case wi:return t.displayName||"Context";case RS:return(t._context.displayName||"Context")+".Consumer";case D0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P0:return e=t.displayName||null,e!==null?e:km(t.type)||"Memo";case ss:e=t._payload,t=t._init;try{return km(t(e))}catch{}}return null}var Ul=Array.isArray,ke=ES.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt=DE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Qs={pending:!1,data:null,method:null,action:null},Gm=[],Hr=-1;function ii(t){return{current:t}}function gn(t){0>Hr||(t.current=Gm[Hr],Gm[Hr]=null,Hr--)}function Ct(t,e){Hr++,Gm[Hr]=t.current,t.current=e}var ai=ii(null),Ql=ii(null),gs=ii(null),Mf=ii(null);function bf(t,e){switch(Ct(gs,e),Ct(Ql,t),Ct(ai,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?lS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=lS(e),t=QM(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}gn(ai),Ct(ai,t)}function io(){gn(ai),gn(Ql),gn(gs)}function Vm(t){t.memoizedState!==null&&Ct(Mf,t);var e=ai.current,n=QM(e,t.type);e!==n&&(Ct(Ql,t),Ct(ai,n))}function Tf(t){Ql.current===t&&(gn(ai),gn(Ql)),Mf.current===t&&(gn(Mf),lu._currentValue=Qs)}var im,ny;function Ys(t){if(im===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);im=e&&e[1]||"",ny=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+im+t+ny}var sm=!1;function rm(t,e){if(!t||sm)return"";sm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var c=d}Reflect.construct(t,[],p)}else{try{p.call()}catch(d){c=d}t.call(p.prototype)}}else{try{throw Error()}catch(d){c=d}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&c&&typeof d.stack=="string")return[d.stack,c.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=a=0;a<l.length&&!l[a].includes("DetermineComponentFrameRoot");)a++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(a===l.length||i===u.length)for(a=l.length-1,i=u.length-1;1<=a&&0<=i&&l[a]!==u[i];)i--;for(;1<=a&&0<=i;a--,i--)if(l[a]!==u[i]){if(a!==1||i!==1)do if(a--,i--,0>i||l[a]!==u[i]){var f=`
`+l[a].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=a&&0<=i);break}}}finally{sm=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ys(n):""}function BE(t,e){switch(t.tag){case 26:case 27:case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return t.child!==e&&e!==null?Ys("Suspense Fallback"):Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 15:return rm(t.type,!1);case 11:return rm(t.type.render,!1);case 1:return rm(t.type,!0);case 31:return Ys("Activity");default:return""}}function ay(t){try{var e="",n=null;do e+=BE(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var qm=Object.prototype.hasOwnProperty,U0=on.unstable_scheduleCallback,om=on.unstable_cancelCallback,FE=on.unstable_shouldYield,zE=on.unstable_requestPaint,ra=on.unstable_now,HE=on.unstable_getCurrentPriorityLevel,DS=on.unstable_ImmediatePriority,PS=on.unstable_UserBlockingPriority,Ef=on.unstable_NormalPriority,kE=on.unstable_LowPriority,US=on.unstable_IdlePriority,GE=on.log,VE=on.unstable_setDisableYieldValue,du=null,oa=null;function fs(t){if(typeof GE=="function"&&VE(t),oa&&typeof oa.setStrictMode=="function")try{oa.setStrictMode(du,t)}catch{}}var la=Math.clz32?Math.clz32:XE,qE=Math.log,WE=Math.LN2;function XE(t){return t>>>=0,t===0?32:31-(qE(t)/WE|0)|0}var Vc=256,qc=262144,Wc=4194304;function Zs(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qf(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=a&134217727;return o!==0?(a=o&~s,a!==0?i=Zs(a):(r&=o,r!==0?i=Zs(r):n||(n=o&~t,n!==0&&(i=Zs(n))))):(o=a&~s,o!==0?i=Zs(o):r!==0?i=Zs(r):n||(n=a&~t,n!==0&&(i=Zs(n)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:i}function hu(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function YE(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OS(){var t=Wc;return Wc<<=1,(Wc&62914560)===0&&(Wc=4194304),t}function lm(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pu(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ZE(t,e,n,a,i,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(n=r&~n;0<n;){var f=31-la(n),p=1<<f;o[f]=0,l[f]=-1;var c=u[f];if(c!==null)for(u[f]=null,f=0;f<c.length;f++){var d=c[f];d!==null&&(d.lane&=-536870913)}n&=~p}a!==0&&NS(t,a,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function NS(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-la(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function BS(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-la(n),i=1<<a;i&e|t[a]&e&&(t[a]|=e),n&=~i}}function FS(t,e){var n=e&-e;return n=(n&42)!==0?1:O0(n),(n&(t.suspendedLanes|e))!==0?0:n}function O0(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function N0(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zS(){var t=pt.p;return t!==0?t:(t=window.event,t===void 0?32:lb(t.type))}function iy(t,e){var n=pt.p;try{return pt.p=t,e()}finally{pt.p=n}}var ws=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ws,Jn="__reactProps$"+ws,go="__reactContainer$"+ws,Wm="__reactEvents$"+ws,JE="__reactListeners$"+ws,KE="__reactHandles$"+ws,sy="__reactResources$"+ws,mu="__reactMarker$"+ws;function B0(t){delete t[Mn],delete t[Jn],delete t[Wm],delete t[JE],delete t[KE]}function kr(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[go]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hS(t);t!==null;){if(n=t[Mn])return n;t=hS(t)}return e}t=n,n=t.parentNode}return null}function xo(t){if(t=t[Mn]||t[go]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ol(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(te(33))}function Qr(t){var e=t[sy];return e||(e=t[sy]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function mn(t){t[mu]=!0}var HS=new Set,kS={};function or(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(kS[t]=e,t=0;t<e.length;t++)HS.add(e[t])}var QE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ry={},oy={};function jE(t){return qm.call(oy,t)?!0:qm.call(ry,t)?!1:QE.test(t)?oy[t]=!0:(ry[t]=!0,!1)}function of(t,e,n){if(jE(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Xc(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Mi(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function ya(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function GS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $E(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xm(t){if(!t._valueTracker){var e=GS(t)?"checked":"value";t._valueTracker=$E(t,e,""+t[e])}}function VS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=GS(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var eA=/[\n"\\]/g;function Ma(t){return t.replace(eA,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ym(t,e,n,a,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ya(e)):t.value!==""+ya(e)&&(t.value=""+ya(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Zm(t,r,ya(e)):n!=null?Zm(t,r,ya(n)):a!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ya(o):t.removeAttribute("name")}function qS(t,e,n,a,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Xm(t);return}n=n!=null?""+ya(n):"",e=e!=null?""+ya(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=o?t.checked:!!a,t.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Xm(t)}function Zm(t,e,n){e==="number"&&Af(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function jr(t,e,n,a){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&a&&(t[n].defaultSelected=!0)}else{for(n=""+ya(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function WS(t,e,n){if(e!=null&&(e=""+ya(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ya(n):""}function XS(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(te(92));if(Ul(a)){if(1<a.length)throw Error(te(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=ya(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),Xm(t)}function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var tA=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ly(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||tA.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function YS(t,e,n){if(e!=null&&typeof e!="object")throw Error(te(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&n[i]!==a&&ly(t,i,a)}else for(var s in e)e.hasOwnProperty(s)&&ly(t,s,e[s])}function F0(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lf(t){return aA.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Jm=null;function z0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gr=null,$r=null;function uy(t){var e=xo(t);if(e&&(t=e.stateNode)){var n=t[Jn]||null;e:switch(t=e.stateNode,e.type){case"input":if(Ym(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ma(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var i=a[Jn]||null;if(!i)throw Error(te(90));Ym(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&VS(a)}break e;case"textarea":WS(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&jr(t,!!n.multiple,e,!1)}}}var um=!1;function ZS(t,e,n){if(um)return t(e,n);um=!0;try{var a=t(e);return a}finally{if(um=!1,(Gr!==null||$r!==null)&&(ud(),Gr&&(e=Gr,t=$r,$r=Gr=null,uy(e),t)))for(e=0;e<t.length;e++)uy(t[e])}}function jl(t,e){var n=t.stateNode;if(n===null)return null;var a=n[Jn]||null;if(a===null)return null;n=a[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Km=!1;if(Oi)try{Ur={},Object.defineProperty(Ur,"passive",{get:function(){Km=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{Km=!1}var Ur,ds=null,H0=null,uf=null;function JS(){if(uf)return uf;var t,e=H0,n=e.length,a,i="value"in ds?ds.value:ds.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var r=n-t;for(a=1;a<=r&&e[n-a]===i[s-a];a++);return uf=i.slice(t,1<a?1-a:void 0)}function cf(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yc(){return!0}function cy(){return!1}function Kn(t){function e(n,a,i,s,r){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yc:cy,this.isPropagationStopped=cy,this}return Dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yc)},persist:function(){},isPersistent:Yc}),e}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=Kn(lr),gu=Dt({},lr,{view:0,detail:0}),iA=Kn(gu),cm,fm,Cl,$f=Dt({},gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:k0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cl&&(Cl&&t.type==="mousemove"?(cm=t.screenX-Cl.screenX,fm=t.screenY-Cl.screenY):fm=cm=0,Cl=t),cm)},movementY:function(t){return"movementY"in t?t.movementY:fm}}),fy=Kn($f),sA=Dt({},$f,{dataTransfer:0}),rA=Kn(sA),oA=Dt({},gu,{relatedTarget:0}),dm=Kn(oA),lA=Dt({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),uA=Kn(lA),cA=Dt({},lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fA=Kn(cA),dA=Dt({},lr,{data:0}),dy=Kn(dA),hA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mA[t])?!!e[t]:!1}function k0(){return gA}var xA=Dt({},gu,{key:function(t){if(t.key){var e=hA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cf(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:k0,charCode:function(t){return t.type==="keypress"?cf(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cf(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vA=Kn(xA),yA=Dt({},$f,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hy=Kn(yA),SA=Dt({},gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:k0}),_A=Kn(SA),MA=Dt({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bA=Kn(MA),TA=Dt({},$f,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EA=Kn(TA),AA=Dt({},lr,{newState:0,oldState:0}),CA=Kn(AA),LA=[9,13,27,32],G0=Oi&&"CompositionEvent"in window,Fl=null;Oi&&"documentMode"in document&&(Fl=document.documentMode);var wA=Oi&&"TextEvent"in window&&!Fl,KS=Oi&&(!G0||Fl&&8<Fl&&11>=Fl),py=" ",my=!1;function QS(t,e){switch(t){case"keyup":return LA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function IA(t,e){switch(t){case"compositionend":return jS(e);case"keypress":return e.which!==32?null:(my=!0,py);case"textInput":return t=e.data,t===py&&my?null:t;default:return null}}function RA(t,e){if(Vr)return t==="compositionend"||!G0&&QS(t,e)?(t=JS(),uf=H0=ds=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return KS&&e.locale!=="ko"?null:e.data;default:return null}}var DA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DA[t.type]:e==="textarea"}function $S(t,e,n,a){Gr?$r?$r.push(a):$r=[a]:Gr=a,e=qf(e,"onChange"),0<e.length&&(n=new jf("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var zl=null,$l=null;function PA(t){ZM(t,0)}function ed(t){var e=Ol(t);if(VS(e))return t}function xy(t,e){if(t==="change")return e}var e_=!1;Oi&&(Oi?(Jc="oninput"in document,Jc||(hm=document.createElement("div"),hm.setAttribute("oninput","return;"),Jc=typeof hm.oninput=="function"),Zc=Jc):Zc=!1,e_=Zc&&(!document.documentMode||9<document.documentMode));var Zc,Jc,hm;function vy(){zl&&(zl.detachEvent("onpropertychange",t_),$l=zl=null)}function t_(t){if(t.propertyName==="value"&&ed($l)){var e=[];$S(e,$l,t,z0(t)),ZS(PA,e)}}function UA(t,e,n){t==="focusin"?(vy(),zl=e,$l=n,zl.attachEvent("onpropertychange",t_)):t==="focusout"&&vy()}function OA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ed($l)}function NA(t,e){if(t==="click")return ed(e)}function BA(t,e){if(t==="input"||t==="change")return ed(e)}function FA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ca=typeof Object.is=="function"?Object.is:FA;function eu(t,e){if(ca(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!qm.call(e,i)||!ca(t[i],e[i]))return!1}return!0}function yy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sy(t,e){var n=yy(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yy(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function a_(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Af(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Af(t.document)}return e}function V0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var zA=Oi&&"documentMode"in document&&11>=document.documentMode,qr=null,Qm=null,Hl=null,jm=!1;function _y(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jm||qr==null||qr!==Af(a)||(a=qr,"selectionStart"in a&&V0(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hl&&eu(Hl,a)||(Hl=a,a=qf(Qm,"onSelect"),0<a.length&&(e=new jf("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=qr)))}function Xs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionrun:Xs("Transition","TransitionRun"),transitionstart:Xs("Transition","TransitionStart"),transitioncancel:Xs("Transition","TransitionCancel"),transitionend:Xs("Transition","TransitionEnd")},pm={},i_={};Oi&&(i_=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function ur(t){if(pm[t])return pm[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i_)return pm[t]=e[n];return t}var s_=ur("animationend"),r_=ur("animationiteration"),o_=ur("animationstart"),HA=ur("transitionrun"),kA=ur("transitionstart"),GA=ur("transitioncancel"),l_=ur("transitionend"),u_=new Map,$m="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$m.push("scrollEnd");function Ha(t,e){u_.set(t,e),or(e,[t])}var Cf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},va=[],Xr=0,q0=0;function td(){for(var t=Xr,e=q0=Xr=0;e<t;){var n=va[e];va[e++]=null;var a=va[e];va[e++]=null;var i=va[e];va[e++]=null;var s=va[e];if(va[e++]=null,a!==null&&i!==null){var r=a.pending;r===null?i.next=i:(i.next=r.next,r.next=i),a.pending=i}s!==0&&c_(n,i,s)}}function nd(t,e,n,a){va[Xr++]=t,va[Xr++]=e,va[Xr++]=n,va[Xr++]=a,q0|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function W0(t,e,n,a){return nd(t,e,n,a),Lf(t)}function cr(t,e){return nd(t,null,null,e),Lf(t)}function c_(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var i=!1,s=t.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-la(n),t=s.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=n|536870912),s):null}function Lf(t){if(50<Jl)throw Jl=0,S0=null,Error(te(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Yr={};function VA(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ia(t,e,n,a){return new VA(t,e,n,a)}function X0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Di(t,e){var n=t.alternate;return n===null?(n=ia(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function f_(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ff(t,e,n,a,i,s){var r=0;if(a=t,typeof t=="function")X0(t)&&(r=1);else if(typeof t=="string")r=XC(t,n,ai.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Hm:return t=ia(31,n,e,i),t.elementType=Hm,t.lanes=s,t;case zr:return js(n.children,i,s,e);case IS:r=8,i|=24;break;case Bm:return t=ia(12,n,e,i|2),t.elementType=Bm,t.lanes=s,t;case Fm:return t=ia(13,n,e,i),t.elementType=Fm,t.lanes=s,t;case zm:return t=ia(19,n,e,i),t.elementType=zm,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wi:r=10;break e;case RS:r=9;break e;case D0:r=11;break e;case P0:r=14;break e;case ss:r=16,a=null;break e}r=29,n=Error(te(130,t===null?"null":typeof t,"")),a=null}return e=ia(r,n,e,i),e.elementType=t,e.type=a,e.lanes=s,e}function js(t,e,n,a){return t=ia(7,t,a,e),t.lanes=n,t}function mm(t,e,n){return t=ia(6,t,null,e),t.lanes=n,t}function d_(t){var e=ia(18,null,null,0);return e.stateNode=t,e}function gm(t,e,n){return e=ia(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var My=new WeakMap;function ba(t,e){if(typeof t=="object"&&t!==null){var n=My.get(t);return n!==void 0?n:(e={value:t,source:e,stack:ay(e)},My.set(t,e),e)}return{value:t,source:e,stack:ay(e)}}var Zr=[],Jr=0,wf=null,tu=0,Sa=[],_a=0,Es=null,ei=1,ti="";function Ci(t,e){Zr[Jr++]=tu,Zr[Jr++]=wf,wf=t,tu=e}function h_(t,e,n){Sa[_a++]=ei,Sa[_a++]=ti,Sa[_a++]=Es,Es=t;var a=ei;t=ti;var i=32-la(a)-1;a&=~(1<<i),n+=1;var s=32-la(e)+i;if(30<s){var r=i-i%5;s=(a&(1<<r)-1).toString(32),a>>=r,i-=r,ei=1<<32-la(e)+i|n<<i|a,ti=s+t}else ei=1<<s|n<<i|a,ti=t}function Y0(t){t.return!==null&&(Ci(t,1),h_(t,1,0))}function Z0(t){for(;t===wf;)wf=Zr[--Jr],Zr[Jr]=null,tu=Zr[--Jr],Zr[Jr]=null;for(;t===Es;)Es=Sa[--_a],Sa[_a]=null,ti=Sa[--_a],Sa[_a]=null,ei=Sa[--_a],Sa[_a]=null}function p_(t,e){Sa[_a++]=ei,Sa[_a++]=ti,Sa[_a++]=Es,ei=e.id,ti=e.overflow,Es=t}var bn=null,Rt=null,lt=!1,xs=null,Ta=!1,e0=Error(te(519));function As(t){var e=Error(te(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nu(ba(e,t)),e0}function by(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[Mn]=t,e[Jn]=a,n){case"dialog":nt("cancel",e),nt("close",e);break;case"iframe":case"object":case"embed":nt("load",e);break;case"video":case"audio":for(n=0;n<ru.length;n++)nt(ru[n],e);break;case"source":nt("error",e);break;case"img":case"image":case"link":nt("error",e),nt("load",e);break;case"details":nt("toggle",e);break;case"input":nt("invalid",e),qS(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":nt("invalid",e);break;case"textarea":nt("invalid",e),XS(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||KM(e.textContent,n)?(a.popover!=null&&(nt("beforetoggle",e),nt("toggle",e)),a.onScroll!=null&&nt("scroll",e),a.onScrollEnd!=null&&nt("scrollend",e),a.onClick!=null&&(e.onclick=Ii),e=!0):e=!1,e||As(t,!0)}function Ty(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ta=!1;return;case 27:case 3:Ta=!0;return;default:bn=bn.return}}function Or(t){if(t!==bn)return!1;if(!lt)return Ty(t),lt=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||E0(t.type,t.memoizedProps)),n=!n),n&&Rt&&As(t),Ty(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));Rt=dS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));Rt=dS(t)}else e===27?(e=Rt,Is(t.type)?(t=w0,w0=null,Rt=t):Rt=e):Rt=bn?Aa(t.stateNode.nextSibling):null;return!0}function nr(){Rt=bn=null,lt=!1}function xm(){var t=xs;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),xs=null),t}function nu(t){xs===null?xs=[t]:xs.push(t)}var t0=ii(null),fr=null,Ri=null;function os(t,e,n){Ct(t0,e._currentValue),e._currentValue=n}function Pi(t){t._currentValue=t0.current,gn(t0)}function n0(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function a0(t,e,n,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),n0(s.return,n,t),a||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(te(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),n0(r,n,t),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function vo(t,e,n,a){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(te(387));if(r=r.memoizedProps,r!==null){var o=i.type;ca(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===Mf.current){if(r=i.alternate,r===null)throw Error(te(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(lu):t=[lu])}i=i.return}t!==null&&a0(e,t,n,a),e.flags|=262144}function If(t){for(t=t.firstContext;t!==null;){if(!ca(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){fr=t,Ri=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return m_(fr,t)}function Kc(t,e){return fr===null&&ar(t),m_(t,e)}function m_(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ri===null){if(t===null)throw Error(te(308));Ri=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ri=Ri.next=e;return n}var qA=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},WA=on.unstable_scheduleCallback,XA=on.unstable_NormalPriority,en={$$typeof:wi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function J0(){return{controller:new qA,data:new Map,refCount:0}}function xu(t){t.refCount--,t.refCount===0&&WA(XA,function(){t.controller.abort()})}var kl=null,i0=0,oo=0,eo=null;function YA(t,e){if(kl===null){var n=kl=[];i0=0,oo=Sg(),eo={status:"pending",value:void 0,then:function(a){n.push(a)}}}return i0++,e.then(Ey,Ey),e}function Ey(){if(--i0===0&&kl!==null){eo!==null&&(eo.status="fulfilled");var t=kl;kl=null,oo=0,eo=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ZA(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Ay=ke.S;ke.S=function(t,e){wM=ra(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&YA(t,e),Ay!==null&&Ay(t,e)};var $s=ii(null);function K0(){var t=$s.current;return t!==null?t:bt.pooledCache}function df(t,e){e===null?Ct($s,$s.current):Ct($s,e.pool)}function g_(){var t=K0();return t===null?null:{parent:en._currentValue,pool:t}}var yo=Error(te(460)),Q0=Error(te(474)),ad=Error(te(542)),Rf={then:function(){}};function Cy(t){return t=t.status,t==="fulfilled"||t==="rejected"}function x_(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ii,Ii),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wy(t),t;default:if(typeof e.status=="string")e.then(Ii,Ii);else{if(t=bt,t!==null&&100<t.shellSuspendCounter)throw Error(te(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,wy(t),t}throw er=e,yo}}function Js(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(er=n,yo):n}}var er=null;function Ly(){if(er===null)throw Error(te(459));var t=er;return er=null,t}function wy(t){if(t===yo||t===ad)throw Error(te(483))}var to=null,au=0;function Qc(t){var e=au;return au+=1,to===null&&(to=[]),x_(to,t,e)}function Ll(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function jc(t,e){throw e.$$typeof===UE?Error(te(525)):(t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function v_(t){function e(h,m){if(t){var S=h.deletions;S===null?(h.deletions=[m],h.flags|=16):S.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function a(h){for(var m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(h,m){return h=Di(h,m),h.index=0,h.sibling=null,h}function s(h,m,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<m?(h.flags|=67108866,m):S):(h.flags|=67108866,m)):(h.flags|=1048576,m)}function r(h){return t&&h.alternate===null&&(h.flags|=67108866),h}function o(h,m,S,_){return m===null||m.tag!==6?(m=mm(S,h.mode,_),m.return=h,m):(m=i(m,S),m.return=h,m)}function l(h,m,S,_){var E=S.type;return E===zr?f(h,m,S.props.children,_,S.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ss&&Js(E)===m.type)?(m=i(m,S.props),Ll(m,S),m.return=h,m):(m=ff(S.type,S.key,S.props,null,h.mode,_),Ll(m,S),m.return=h,m)}function u(h,m,S,_){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=gm(S,h.mode,_),m.return=h,m):(m=i(m,S.children||[]),m.return=h,m)}function f(h,m,S,_,E){return m===null||m.tag!==7?(m=js(S,h.mode,_,E),m.return=h,m):(m=i(m,S),m.return=h,m)}function p(h,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=mm(""+m,h.mode,S),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Gc:return S=ff(m.type,m.key,m.props,null,h.mode,S),Ll(S,m),S.return=h,S;case Pl:return m=gm(m,h.mode,S),m.return=h,m;case ss:return m=Js(m),p(h,m,S)}if(Ul(m)||Al(m))return m=js(m,h.mode,S,null),m.return=h,m;if(typeof m.then=="function")return p(h,Qc(m),S);if(m.$$typeof===wi)return p(h,Kc(h,m),S);jc(h,m)}return null}function c(h,m,S,_){var E=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(h,m,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gc:return S.key===E?l(h,m,S,_):null;case Pl:return S.key===E?u(h,m,S,_):null;case ss:return S=Js(S),c(h,m,S,_)}if(Ul(S)||Al(S))return E!==null?null:f(h,m,S,_,null);if(typeof S.then=="function")return c(h,m,Qc(S),_);if(S.$$typeof===wi)return c(h,m,Kc(h,S),_);jc(h,S)}return null}function d(h,m,S,_,E){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return h=h.get(S)||null,o(m,h,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Gc:return h=h.get(_.key===null?S:_.key)||null,l(m,h,_,E);case Pl:return h=h.get(_.key===null?S:_.key)||null,u(m,h,_,E);case ss:return _=Js(_),d(h,m,S,_,E)}if(Ul(_)||Al(_))return h=h.get(S)||null,f(m,h,_,E,null);if(typeof _.then=="function")return d(h,m,S,Qc(_),E);if(_.$$typeof===wi)return d(h,m,S,Kc(m,_),E);jc(m,_)}return null}function x(h,m,S,_){for(var E=null,A=null,v=m,b=m=0,I=null;v!==null&&b<S.length;b++){v.index>b?(I=v,v=null):I=v.sibling;var w=c(h,v,S[b],_);if(w===null){v===null&&(v=I);break}t&&v&&w.alternate===null&&e(h,v),m=s(w,m,b),A===null?E=w:A.sibling=w,A=w,v=I}if(b===S.length)return n(h,v),lt&&Ci(h,b),E;if(v===null){for(;b<S.length;b++)v=p(h,S[b],_),v!==null&&(m=s(v,m,b),A===null?E=v:A.sibling=v,A=v);return lt&&Ci(h,b),E}for(v=a(v);b<S.length;b++)I=d(v,h,b,S[b],_),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?b:I.key),m=s(I,m,b),A===null?E=I:A.sibling=I,A=I);return t&&v.forEach(function(O){return e(h,O)}),lt&&Ci(h,b),E}function y(h,m,S,_){if(S==null)throw Error(te(151));for(var E=null,A=null,v=m,b=m=0,I=null,w=S.next();v!==null&&!w.done;b++,w=S.next()){v.index>b?(I=v,v=null):I=v.sibling;var O=c(h,v,w.value,_);if(O===null){v===null&&(v=I);break}t&&v&&O.alternate===null&&e(h,v),m=s(O,m,b),A===null?E=O:A.sibling=O,A=O,v=I}if(w.done)return n(h,v),lt&&Ci(h,b),E;if(v===null){for(;!w.done;b++,w=S.next())w=p(h,w.value,_),w!==null&&(m=s(w,m,b),A===null?E=w:A.sibling=w,A=w);return lt&&Ci(h,b),E}for(v=a(v);!w.done;b++,w=S.next())w=d(v,h,b,w.value,_),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?b:w.key),m=s(w,m,b),A===null?E=w:A.sibling=w,A=w);return t&&v.forEach(function(B){return e(h,B)}),lt&&Ci(h,b),E}function g(h,m,S,_){if(typeof S=="object"&&S!==null&&S.type===zr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Gc:e:{for(var E=S.key;m!==null;){if(m.key===E){if(E=S.type,E===zr){if(m.tag===7){n(h,m.sibling),_=i(m,S.props.children),_.return=h,h=_;break e}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ss&&Js(E)===m.type){n(h,m.sibling),_=i(m,S.props),Ll(_,S),_.return=h,h=_;break e}n(h,m);break}else e(h,m);m=m.sibling}S.type===zr?(_=js(S.props.children,h.mode,_,S.key),_.return=h,h=_):(_=ff(S.type,S.key,S.props,null,h.mode,_),Ll(_,S),_.return=h,h=_)}return r(h);case Pl:e:{for(E=S.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(h,m.sibling),_=i(m,S.children||[]),_.return=h,h=_;break e}else{n(h,m);break}else e(h,m);m=m.sibling}_=gm(S,h.mode,_),_.return=h,h=_}return r(h);case ss:return S=Js(S),g(h,m,S,_)}if(Ul(S))return x(h,m,S,_);if(Al(S)){if(E=Al(S),typeof E!="function")throw Error(te(150));return S=E.call(S),y(h,m,S,_)}if(typeof S.then=="function")return g(h,m,Qc(S),_);if(S.$$typeof===wi)return g(h,m,Kc(h,S),_);jc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,m!==null&&m.tag===6?(n(h,m.sibling),_=i(m,S),_.return=h,h=_):(n(h,m),_=mm(S,h.mode,_),_.return=h,h=_),r(h)):n(h,m)}return function(h,m,S,_){try{au=0;var E=g(h,m,S,_);return to=null,E}catch(v){if(v===yo||v===ad)throw v;var A=ia(29,v,null,h.mode);return A.lanes=_,A.return=h,A}}}var ir=v_(!0),y_=v_(!1),rs=!1;function j0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ys(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ht&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=Lf(t),c_(t,null,n),e}return nd(t,a,e,n),Lf(t)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,BS(t,n)}}function vm(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var r0=!1;function Vl(){if(r0){var t=eo;if(t!==null)throw t}}function ql(t,e,n,a){r0=!1;var i=t.updateQueue;rs=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;r=0,f=u=l=null,o=s;do{var c=o.lane&-536870913,d=c!==o.lane;if(d?(rt&c)===c:(a&c)===c){c!==0&&c===oo&&(r0=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=t,y=o;c=e;var g=n;switch(y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(g,p,c);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,c=typeof x=="function"?x.call(g,p,c):x,c==null)break e;p=Dt({},p,c);break e;case 2:rs=!0}}c=o.callback,c!==null&&(t.flags|=64,d&&(t.flags|=8192),d=i.callbacks,d===null?i.callbacks=[c]:d.push(c))}else d={lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=d,l=p):f=f.next=d,r|=c;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;d=o,o=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,s===null&&(i.shared.lanes=0),Ls|=r,t.lanes=r,t.memoizedState=p}}function S_(t,e){if(typeof t!="function")throw Error(te(191,t));t.call(e)}function __(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)S_(n[t],e)}var lo=ii(null),Df=ii(0);function Iy(t,e){t=zi,Ct(Df,t),Ct(lo,e),zi=t|e.baseLanes}function o0(){Ct(Df,zi),Ct(lo,lo.current)}function $0(){zi=Df.current,gn(lo),gn(Df)}var fa=ii(null),Ea=null;function ls(t){var e=t.alternate;Ct(Yt,Yt.current&1),Ct(fa,t),Ea===null&&(e===null||lo.current!==null||e.memoizedState!==null)&&(Ea=t)}function l0(t){Ct(Yt,Yt.current),Ct(fa,t),Ea===null&&(Ea=t)}function M_(t){t.tag===22?(Ct(Yt,Yt.current),Ct(fa,t),Ea===null&&(Ea=t)):us(t)}function us(){Ct(Yt,Yt.current),Ct(fa,fa.current)}function aa(t){gn(fa),Ea===t&&(Ea=null),gn(Yt)}var Yt=ii(0);function Pf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||C0(n)||L0(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ni=0,Ze=null,_t=null,jt=null,Uf=!1,no=!1,sr=!1,Of=0,iu=0,ao=null,JA=0;function kt(){throw Error(te(321))}function eg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ca(t[n],e[n]))return!1;return!0}function tg(t,e,n,a,i,s){return Ni=s,Ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ke.H=t===null||t.memoizedState===null?$_:dg,sr=!1,s=n(a,i),sr=!1,no&&(s=T_(e,n,a,i)),b_(t),s}function b_(t){ke.H=su;var e=_t!==null&&_t.next!==null;if(Ni=0,jt=_t=Ze=null,Uf=!1,iu=0,ao=null,e)throw Error(te(300));t===null||tn||(t=t.dependencies,t!==null&&If(t)&&(tn=!0))}function T_(t,e,n,a){Ze=t;var i=0;do{if(no&&(ao=null),iu=0,no=!1,25<=i)throw Error(te(301));if(i+=1,jt=_t=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}ke.H=eM,s=e(n,a)}while(no);return s}function KA(){var t=ke.H,e=t.useState()[0];return e=typeof e.then=="function"?vu(e):e,t=t.useState()[0],(_t!==null?_t.memoizedState:null)!==t&&(Ze.flags|=1024),e}function ng(){var t=Of!==0;return Of=0,t}function ag(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function ig(t){if(Uf){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Uf=!1}Ni=0,jt=_t=Ze=null,no=!1,iu=Of=0,ao=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ze.memoizedState=jt=t:jt=jt.next=t,jt}function Zt(){if(_t===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=jt===null?Ze.memoizedState:jt.next;if(e!==null)jt=e,_t=t;else{if(t===null)throw Ze.alternate===null?Error(te(467)):Error(te(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},jt===null?Ze.memoizedState=jt=t:jt=jt.next=t}return jt}function id(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vu(t){var e=iu;return iu+=1,ao===null&&(ao=[]),t=x_(ao,t,e),e=Ze,(jt===null?e.memoizedState:jt.next)===null&&(e=e.alternate,ke.H=e===null||e.memoizedState===null?$_:dg),t}function sd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vu(t);if(t.$$typeof===wi)return Tn(t)}throw Error(te(438,String(t)))}function sg(t){var e=null,n=Ze.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=Ze.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=id(),Ze.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=OE;return e.index++,n}function Bi(t,e){return typeof e=="function"?e(t):e}function hf(t){var e=Zt();return rg(e,_t,t)}function rg(t,e,n){var a=t.queue;if(a===null)throw Error(te(311));a.lastRenderedReducer=n;var i=t.baseQueue,s=a.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,a.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,f=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(rt&p)===p:(Ni&p)===p){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===oo&&(f=!0);else if((Ni&c)===c){u=u.next,c===oo&&(f=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Ze.lanes|=c,Ls|=c;p=u.action,sr&&n(s,p),s=u.hasEagerState?u.eagerState:n(s,p)}else c={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=c,r=s):l=l.next=c,Ze.lanes|=p,Ls|=p;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!ca(s,t.memoizedState)&&(tn=!0,f&&(n=eo,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=l,a.lastRenderedState=s}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function ym(t){var e=Zt(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var a=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);ca(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,a]}function E_(t,e,n){var a=Ze,i=Zt(),s=lt;if(s){if(n===void 0)throw Error(te(407));n=n()}else n=e();var r=!ca((_t||i).memoizedState,n);if(r&&(i.memoizedState=n,tn=!0),i=i.queue,og(L_.bind(null,a,i,t),[t]),i.getSnapshot!==e||r||jt!==null&&jt.memoizedState.tag&1){if(a.flags|=2048,uo(9,{destroy:void 0},C_.bind(null,a,i,n,e),null),bt===null)throw Error(te(349));s||(Ni&127)!==0||A_(a,e,n)}return n}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ze.updateQueue,e===null?(e=id(),Ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C_(t,e,n,a){e.value=n,e.getSnapshot=a,w_(e)&&I_(t)}function L_(t,e,n){return n(function(){w_(e)&&I_(t)})}function w_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ca(t,n)}catch{return!0}}function I_(t){var e=cr(t,2);e!==null&&Zn(e,t,2)}function u0(t){var e=zn();if(typeof t=="function"){var n=t;if(t=n(),sr){fs(!0);try{n()}finally{fs(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:t},e}function R_(t,e,n,a){return t.baseState=n,rg(t,_t,typeof a=="function"?a:Bi)}function QA(t,e,n,a,i){if(od(t))throw Error(te(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};ke.T!==null?n(!0):s.isTransition=!1,a(s),n=e.pending,n===null?(s.next=e.pending=s,D_(e,s)):(s.next=n.next,e.pending=n.next=s)}}function D_(t,e){var n=e.action,a=e.payload,i=t.state;if(e.isTransition){var s=ke.T,r={};ke.T=r;try{var o=n(i,a),l=ke.S;l!==null&&l(r,o),Ry(t,e,o)}catch(u){c0(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),ke.T=s}}else try{s=n(i,a),Ry(t,e,s)}catch(u){c0(t,e,u)}}function Ry(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Dy(t,e,a)},function(a){return c0(t,e,a)}):Dy(t,e,n)}function Dy(t,e,n){e.status="fulfilled",e.value=n,P_(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,D_(t,n)))}function c0(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,P_(e),e=e.next;while(e!==a)}t.action=null}function P_(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function U_(t,e){return e}function Py(t,e){if(lt){var n=bt.formState;if(n!==null){e:{var a=Ze;if(lt){if(Rt){t:{for(var i=Rt,s=Ta;i.nodeType!==8;){if(!s){i=null;break t}if(i=Aa(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Rt=Aa(i.nextSibling),a=i.data==="F!";break e}}As(a)}a=!1}a&&(e=n[0])}}return n=zn(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:U_,lastRenderedState:e},n.queue=a,n=K_.bind(null,Ze,a),a.dispatch=n,a=u0(!1),s=fg.bind(null,Ze,!1,a.queue),a=zn(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,n=QA.bind(null,Ze,i,s,n),i.dispatch=n,a.memoizedState=t,[e,n,!1]}function Uy(t){var e=Zt();return O_(e,_t,t)}function O_(t,e,n){if(e=rg(t,e,U_)[0],t=hf(Bi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=vu(e)}catch(r){throw r===yo?ad:r}else a=e;e=Zt();var i=e.queue,s=i.dispatch;return n!==e.memoizedState&&(Ze.flags|=2048,uo(9,{destroy:void 0},jA.bind(null,i,n),null)),[a,s,t]}function jA(t,e){t.action=e}function Oy(t){var e=Zt(),n=_t;if(n!==null)return O_(e,n,t);Zt(),e=e.memoizedState,n=Zt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function uo(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=Ze.updateQueue,e===null&&(e=id(),Ze.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function N_(){return Zt().memoizedState}function pf(t,e,n,a){var i=zn();Ze.flags|=t,i.memoizedState=uo(1|e,{destroy:void 0},n,a===void 0?null:a)}function rd(t,e,n,a){var i=Zt();a=a===void 0?null:a;var s=i.memoizedState.inst;_t!==null&&a!==null&&eg(a,_t.memoizedState.deps)?i.memoizedState=uo(e,s,n,a):(Ze.flags|=t,i.memoizedState=uo(1|e,s,n,a))}function Ny(t,e){pf(8390656,8,t,e)}function og(t,e){rd(2048,8,t,e)}function $A(t){Ze.flags|=4;var e=Ze.updateQueue;if(e===null)e=id(),Ze.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function B_(t){var e=Zt().memoizedState;return $A({ref:e,nextImpl:t}),function(){if((ht&2)!==0)throw Error(te(440));return e.impl.apply(void 0,arguments)}}function F_(t,e){return rd(4,2,t,e)}function z_(t,e){return rd(4,4,t,e)}function H_(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k_(t,e,n){n=n!=null?n.concat([t]):null,rd(4,4,H_.bind(null,e,t),n)}function lg(){}function G_(t,e){var n=Zt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&eg(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function V_(t,e){var n=Zt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&eg(e,a[1]))return a[0];if(a=t(),sr){fs(!0);try{t()}finally{fs(!1)}}return n.memoizedState=[a,e],a}function ug(t,e,n){return n===void 0||(Ni&1073741824)!==0&&(rt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=RM(),Ze.lanes|=t,Ls|=t,n)}function q_(t,e,n,a){return ca(n,e)?n:lo.current!==null?(t=ug(t,n,a),ca(t,e)||(tn=!0),t):(Ni&42)===0||(Ni&1073741824)!==0&&(rt&261930)===0?(tn=!0,t.memoizedState=n):(t=RM(),Ze.lanes|=t,Ls|=t,e)}function W_(t,e,n,a,i){var s=pt.p;pt.p=s!==0&&8>s?s:8;var r=ke.T,o={};ke.T=o,fg(t,!1,e,n);try{var l=i(),u=ke.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=ZA(l,a);Wl(t,e,f,ua(t))}else Wl(t,e,a,ua(t))}catch(p){Wl(t,e,{then:function(){},status:"rejected",reason:p},ua())}finally{pt.p=s,r!==null&&o.types!==null&&(r.types=o.types),ke.T=r}}function eC(){}function f0(t,e,n,a){if(t.tag!==5)throw Error(te(476));var i=X_(t).queue;W_(t,i,e,Qs,n===null?eC:function(){return Y_(t),n(a)})}function X_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Qs,baseState:Qs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:Qs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Y_(t){var e=X_(t);e.next===null&&(e=t.alternate.memoizedState),Wl(t,e.next.queue,{},ua())}function cg(){return Tn(lu)}function Z_(){return Zt().memoizedState}function J_(){return Zt().memoizedState}function tC(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=ua();t=vs(n);var a=ys(e,t,n);a!==null&&(Zn(a,e,n),Gl(a,e,n)),e={cache:J0()},t.payload=e;return}e=e.return}}function nC(t,e,n){var a=ua();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},od(t)?Q_(e,n):(n=W0(t,e,n,a),n!==null&&(Zn(n,t,a),j_(n,e,a)))}function K_(t,e,n){var a=ua();Wl(t,e,n,a)}function Wl(t,e,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(od(t))Q_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(i.hasEagerState=!0,i.eagerState=o,ca(o,r))return nd(t,e,i,0),bt===null&&td(),!1}catch{}if(n=W0(t,e,i,a),n!==null)return Zn(n,t,a),j_(n,e,a),!0}return!1}function fg(t,e,n,a){if(a={lane:2,revertLane:Sg(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},od(t)){if(e)throw Error(te(479))}else e=W0(t,n,a,2),e!==null&&Zn(e,t,2)}function od(t){var e=t.alternate;return t===Ze||e!==null&&e===Ze}function Q_(t,e){no=Uf=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j_(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,BS(t,n)}}var su={readContext:Tn,use:sd,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt};su.useEffectEvent=kt;var $_={readContext:Tn,use:sd,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Ny,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,pf(4194308,4,H_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pf(4194308,4,t,e)},useInsertionEffect:function(t,e){pf(4,2,t,e)},useMemo:function(t,e){var n=zn();e=e===void 0?null:e;var a=t();if(sr){fs(!0);try{t()}finally{fs(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=zn();if(n!==void 0){var i=n(e);if(sr){fs(!0);try{n(e)}finally{fs(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=nC.bind(null,Ze,t),[a.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:function(t){t=u0(t);var e=t.queue,n=K_.bind(null,Ze,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:lg,useDeferredValue:function(t,e){var n=zn();return ug(n,t,e)},useTransition:function(){var t=u0(!1);return t=W_.bind(null,Ze,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=Ze,i=zn();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),bt===null)throw Error(te(349));(rt&127)!==0||A_(a,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ny(L_.bind(null,a,s,t),[t]),a.flags|=2048,uo(9,{destroy:void 0},C_.bind(null,a,s,n,e),null),n},useId:function(){var t=zn(),e=bt.identifierPrefix;if(lt){var n=ti,a=ei;n=(a&~(1<<32-la(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Of++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=JA++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:cg,useFormState:Py,useActionState:Py,useOptimistic:function(t){var e=zn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=fg.bind(null,Ze,!0,n),n.dispatch=e,[t,e]},useMemoCache:sg,useCacheRefresh:function(){return zn().memoizedState=tC.bind(null,Ze)},useEffectEvent:function(t){var e=zn(),n={impl:t};return e.memoizedState=n,function(){if((ht&2)!==0)throw Error(te(440));return n.impl.apply(void 0,arguments)}}},dg={readContext:Tn,use:sd,useCallback:G_,useContext:Tn,useEffect:og,useImperativeHandle:k_,useInsertionEffect:F_,useLayoutEffect:z_,useMemo:V_,useReducer:hf,useRef:N_,useState:function(){return hf(Bi)},useDebugValue:lg,useDeferredValue:function(t,e){var n=Zt();return q_(n,_t.memoizedState,t,e)},useTransition:function(){var t=hf(Bi)[0],e=Zt().memoizedState;return[typeof t=="boolean"?t:vu(t),e]},useSyncExternalStore:E_,useId:Z_,useHostTransitionStatus:cg,useFormState:Uy,useActionState:Uy,useOptimistic:function(t,e){var n=Zt();return R_(n,_t,t,e)},useMemoCache:sg,useCacheRefresh:J_};dg.useEffectEvent=B_;var eM={readContext:Tn,use:sd,useCallback:G_,useContext:Tn,useEffect:og,useImperativeHandle:k_,useInsertionEffect:F_,useLayoutEffect:z_,useMemo:V_,useReducer:ym,useRef:N_,useState:function(){return ym(Bi)},useDebugValue:lg,useDeferredValue:function(t,e){var n=Zt();return _t===null?ug(n,t,e):q_(n,_t.memoizedState,t,e)},useTransition:function(){var t=ym(Bi)[0],e=Zt().memoizedState;return[typeof t=="boolean"?t:vu(t),e]},useSyncExternalStore:E_,useId:Z_,useHostTransitionStatus:cg,useFormState:Oy,useActionState:Oy,useOptimistic:function(t,e){var n=Zt();return _t!==null?R_(n,_t,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:sg,useCacheRefresh:J_};eM.useEffectEvent=B_;function Sm(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:Dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var d0={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=ua(),i=vs(a);i.payload=e,n!=null&&(i.callback=n),e=ys(t,i,a),e!==null&&(Zn(e,t,a),Gl(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=ua(),i=vs(a);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ys(t,i,a),e!==null&&(Zn(e,t,a),Gl(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ua(),a=vs(n);a.tag=2,e!=null&&(a.callback=e),e=ys(t,a,n),e!==null&&(Zn(e,t,n),Gl(e,t,n))}};function By(t,e,n,a,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,s,r):e.prototype&&e.prototype.isPureReactComponent?!eu(n,a)||!eu(i,s):!0}function Fy(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&d0.enqueueReplaceState(e,e.state,null)}function rr(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=Dt({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}function tM(t){Cf(t)}function nM(t){console.error(t)}function aM(t){Cf(t)}function Nf(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function zy(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function h0(t,e,n){return n=vs(n),n.tag=3,n.payload={element:null},n.callback=function(){Nf(t,e)},n}function iM(t){return t=vs(t),t.tag=3,t}function sM(t,e,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=a.value;t.payload=function(){return i(s)},t.callback=function(){zy(e,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){zy(e,n,a),typeof i!="function"&&(Ss===null?Ss=new Set([this]):Ss.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function aC(t,e,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&vo(e,n,i,!0),n=fa.current,n!==null){switch(n.tag){case 31:case 13:return Ea===null?kf():n.alternate===null&&Gt===0&&(Gt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===Rf?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Rm(t,a,i)),!1;case 22:return n.flags|=65536,a===Rf?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Rm(t,a,i)),!1}throw Error(te(435,n.tag))}return Rm(t,a,i),kf(),!1}if(lt)return e=fa.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==e0&&(t=Error(te(422),{cause:a}),nu(ba(t,n)))):(a!==e0&&(e=Error(te(423),{cause:a}),nu(ba(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=ba(a,n),i=h0(t.stateNode,a,i),vm(t,i),Gt!==4&&(Gt=2)),!1;var s=Error(te(520),{cause:a});if(s=ba(s,n),Zl===null?Zl=[s]:Zl.push(s),Gt!==4&&(Gt=2),e===null)return!0;a=ba(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=h0(n.stateNode,a,t),vm(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ss===null||!Ss.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=iM(i),sM(i,t,n,a),vm(n,i),!1}n=n.return}while(n!==null);return!1}var hg=Error(te(461)),tn=!1;function _n(t,e,n,a){e.child=t===null?y_(e,null,n,a):ir(e,t.child,n,a)}function Hy(t,e,n,a,i){n=n.render;var s=e.ref;if("ref"in a){var r={};for(var o in a)o!=="ref"&&(r[o]=a[o])}else r=a;return ar(e),a=tg(t,e,n,r,s,i),o=ng(),t!==null&&!tn?(ag(t,e,i),Fi(t,e,i)):(lt&&o&&Y0(e),e.flags|=1,_n(t,e,a,i),e.child)}function ky(t,e,n,a,i){if(t===null){var s=n.type;return typeof s=="function"&&!X0(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,rM(t,e,s,a,i)):(t=ff(n.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!pg(t,i)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:eu,n(r,a)&&t.ref===e.ref)return Fi(t,e,i)}return e.flags|=1,t=Di(s,a),t.ref=e.ref,t.return=e,e.child=t}function rM(t,e,n,a,i){if(t!==null){var s=t.memoizedProps;if(eu(s,a)&&t.ref===e.ref)if(tn=!1,e.pendingProps=a=s,pg(t,i))(t.flags&131072)!==0&&(tn=!0);else return e.lanes=t.lanes,Fi(t,e,i)}return p0(t,e,n,a,i)}function oM(t,e,n,a){var i=a.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,t!==null){for(a=e.child=t.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~s}else a=0,e.child=null;return Gy(t,e,s,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&df(e,s!==null?s.cachePool:null),s!==null?Iy(e,s):o0(),M_(e);else return a=e.lanes=536870912,Gy(t,e,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(df(e,s.cachePool),Iy(e,s),us(e),e.memoizedState=null):(t!==null&&df(e,null),o0(),us(e));return _n(t,e,i,n),e.child}function Nl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Gy(t,e,n,a,i){var s=K0();return s=s===null?null:{parent:en._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&df(e,null),o0(),M_(e),t!==null&&vo(t,e,a,!0),e.childLanes=i,null}function mf(t,e){return e=Bf({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Vy(t,e,n){return ir(e,t.child,null,n),t=mf(e,e.pendingProps),t.flags|=2,aa(e),e.memoizedState=null,t}function iC(t,e,n){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(lt){if(a.mode==="hidden")return t=mf(e,a),e.lanes=536870912,Nl(null,t);if(l0(e),(t=Rt)?(t=$M(t,Ta),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Es!==null?{id:ei,overflow:ti}:null,retryLane:536870912,hydrationErrors:null},n=d_(t),n.return=e,e.child=n,bn=e,Rt=null)):t=null,t===null)throw As(e);return e.lanes=536870912,null}return mf(e,a)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(l0(e),i)if(e.flags&256)e.flags&=-257,e=Vy(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(te(558));else if(tn||vo(t,e,n,!1),i=(n&t.childLanes)!==0,tn||i){if(a=bt,a!==null&&(r=FS(a,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,cr(t,r),Zn(a,t,r),hg;kf(),e=Vy(t,e,n)}else t=s.treeContext,Rt=Aa(r.nextSibling),bn=e,lt=!0,xs=null,Ta=!1,t!==null&&p_(e,t),e=mf(e,a),e.flags|=4096;return e}return t=Di(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function gf(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(te(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function p0(t,e,n,a,i){return ar(e),n=tg(t,e,n,a,void 0,i),a=ng(),t!==null&&!tn?(ag(t,e,i),Fi(t,e,i)):(lt&&a&&Y0(e),e.flags|=1,_n(t,e,n,i),e.child)}function qy(t,e,n,a,i,s){return ar(e),e.updateQueue=null,n=T_(e,a,n,i),b_(t),a=ng(),t!==null&&!tn?(ag(t,e,s),Fi(t,e,s)):(lt&&a&&Y0(e),e.flags|=1,_n(t,e,n,s),e.child)}function Wy(t,e,n,a,i){if(ar(e),e.stateNode===null){var s=Yr,r=n.contextType;typeof r=="object"&&r!==null&&(s=Tn(r)),s=new n(a,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=d0,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=a,s.state=e.memoizedState,s.refs={},j0(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?Tn(r):Yr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Sm(e,n,r,a),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&d0.enqueueReplaceState(s,s.state,null),ql(e,a,s,i),Vl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=rr(n,o);s.props=l;var u=s.context,f=n.contextType;r=Yr,typeof f=="object"&&f!==null&&(r=Tn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&Fy(e,s,a,r),rs=!1;var c=e.memoizedState;s.state=c,ql(e,a,s,i),Vl(),u=e.memoizedState,o||c!==u||rs?(typeof p=="function"&&(Sm(e,n,p,a),u=e.memoizedState),(l=rs||By(e,n,l,a,c,u,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=u),s.props=a,s.state=u,s.context=r,a=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{s=e.stateNode,s0(t,e),r=e.memoizedProps,f=rr(n,r),s.props=f,p=e.pendingProps,c=s.context,u=n.contextType,l=Yr,typeof u=="object"&&u!==null&&(l=Tn(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||c!==l)&&Fy(e,s,a,l),rs=!1,c=e.memoizedState,s.state=c,ql(e,a,s,i),Vl();var d=e.memoizedState;r!==p||c!==d||rs||t!==null&&t.dependencies!==null&&If(t.dependencies)?(typeof o=="function"&&(Sm(e,n,o,a),d=e.memoizedState),(f=rs||By(e,n,f,a,c,d,l)||t!==null&&t.dependencies!==null&&If(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,d,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,d,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=d),s.props=a,s.state=d,s.context=l,a=f):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),a=!1)}return s=a,gf(t,e),a=(e.flags&128)!==0,s||a?(s=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&a?(e.child=ir(e,t.child,null,i),e.child=ir(e,null,n,i)):_n(t,e,n,i),e.memoizedState=s.state,t=e.child):t=Fi(t,e,i),t}function Xy(t,e,n,a){return nr(),e.flags|=256,_n(t,e,n,a),e.child}var _m={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mm(t){return{baseLanes:t,cachePool:g_()}}function bm(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=sa),t}function lM(t,e,n){var a=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(lt){if(i?ls(e):us(e),(t=Rt)?(t=$M(t,Ta),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Es!==null?{id:ei,overflow:ti}:null,retryLane:536870912,hydrationErrors:null},n=d_(t),n.return=e,e.child=n,bn=e,Rt=null)):t=null,t===null)throw As(e);return L0(t)?e.lanes=32:e.lanes=536870912,null}var o=a.children;return a=a.fallback,i?(us(e),i=e.mode,o=Bf({mode:"hidden",children:o},i),a=js(a,i,n,null),o.return=e,a.return=e,o.sibling=a,e.child=o,a=e.child,a.memoizedState=Mm(n),a.childLanes=bm(t,r,n),e.memoizedState=_m,Nl(null,a)):(ls(e),m0(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(ls(e),e.flags&=-257,e=Tm(t,e,n)):e.memoizedState!==null?(us(e),e.child=t.child,e.flags|=128,e=null):(us(e),o=a.fallback,i=e.mode,a=Bf({mode:"visible",children:a.children},i),o=js(o,i,n,null),o.flags|=2,a.return=e,o.return=e,a.sibling=o,e.child=a,ir(e,t.child,null,n),a=e.child,a.memoizedState=Mm(n),a.childLanes=bm(t,r,n),e.memoizedState=_m,e=Nl(null,a));else if(ls(e),L0(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,a=Error(te(419)),a.stack="",a.digest=r,nu({value:a,source:null,stack:null}),e=Tm(t,e,n)}else if(tn||vo(t,e,n,!1),r=(n&t.childLanes)!==0,tn||r){if(r=bt,r!==null&&(a=FS(r,n),a!==0&&a!==l.retryLane))throw l.retryLane=a,cr(t,a),Zn(r,t,a),hg;C0(o)||kf(),e=Tm(t,e,n)}else C0(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Rt=Aa(o.nextSibling),bn=e,lt=!0,xs=null,Ta=!1,t!==null&&p_(e,t),e=m0(e,a.children),e.flags|=4096);return e}return i?(us(e),o=a.fallback,i=e.mode,l=t.child,u=l.sibling,a=Di(l,{mode:"hidden",children:a.children}),a.subtreeFlags=l.subtreeFlags&65011712,u!==null?o=Di(u,o):(o=js(o,i,n,null),o.flags|=2),o.return=e,a.return=e,a.sibling=o,e.child=a,Nl(null,a),a=e.child,o=t.child.memoizedState,o===null?o=Mm(n):(i=o.cachePool,i!==null?(l=en._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=g_(),o={baseLanes:o.baseLanes|n,cachePool:i}),a.memoizedState=o,a.childLanes=bm(t,r,n),e.memoizedState=_m,Nl(t.child,a)):(ls(e),n=t.child,t=n.sibling,n=Di(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function m0(t,e){return e=Bf({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Bf(t,e){return t=ia(22,t,null,e),t.lanes=0,t}function Tm(t,e,n){return ir(e,t.child,null,n),t=m0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yy(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),n0(t.return,e,n)}function Em(t,e,n,a,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i,r.treeForkCount=s)}function uM(t,e,n){var a=e.pendingProps,i=a.revealOrder,s=a.tail;a=a.children;var r=Yt.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Ct(Yt,r),_n(t,e,a,n),a=lt?tu:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yy(t,n,e);else if(t.tag===19)Yy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pf(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Em(e,!1,i,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pf(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Em(e,!0,n,null,s,a);break;case"together":Em(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ls|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(vo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pg(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&If(t)))}function sC(t,e,n){switch(e.tag){case 3:bf(e,e.stateNode.containerInfo),os(e,en,t.memoizedState.cache),nr();break;case 27:case 5:Vm(e);break;case 4:bf(e,e.stateNode.containerInfo);break;case 10:os(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,l0(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(ls(e),e.flags|=128,null):(n&e.child.childLanes)!==0?lM(t,e,n):(ls(e),t=Fi(t,e,n),t!==null?t.sibling:null);ls(e);break;case 19:var i=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(vo(t,e,n,!1),a=(n&e.childLanes)!==0),i){if(a)return uM(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ct(Yt,Yt.current),a)break;return null;case 22:return e.lanes=0,oM(t,e,n,e.pendingProps);case 24:os(e,en,t.memoizedState.cache)}return Fi(t,e,n)}function cM(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)tn=!0;else{if(!pg(t,n)&&(e.flags&128)===0)return tn=!1,sC(t,e,n);tn=(t.flags&131072)!==0}else tn=!1,lt&&(e.flags&1048576)!==0&&h_(e,tu,e.index);switch(e.lanes=0,e.tag){case 16:e:{var a=e.pendingProps;if(t=Js(e.elementType),e.type=t,typeof t=="function")X0(t)?(a=rr(t,a),e.tag=1,e=Wy(null,e,t,a,n)):(e.tag=0,e=p0(null,e,t,a,n));else{if(t!=null){var i=t.$$typeof;if(i===D0){e.tag=11,e=Hy(null,e,t,a,n);break e}else if(i===P0){e.tag=14,e=ky(null,e,t,a,n);break e}}throw e=km(t)||t,Error(te(306,e,""))}}return e;case 0:return p0(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,i=rr(a,e.pendingProps),Wy(t,e,a,i,n);case 3:e:{if(bf(e,e.stateNode.containerInfo),t===null)throw Error(te(387));a=e.pendingProps;var s=e.memoizedState;i=s.element,s0(t,e),ql(e,a,null,n);var r=e.memoizedState;if(a=r.cache,os(e,en,a),a!==s.cache&&a0(e,[en],n,!0),Vl(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Xy(t,e,a,n);break e}else if(a!==i){i=ba(Error(te(424)),e),nu(i),e=Xy(t,e,a,n);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Rt=Aa(t.firstChild),bn=e,lt=!0,xs=null,Ta=!0,n=y_(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),a===i){e=Fi(t,e,n);break e}_n(t,e,a,n)}e=e.child}return e;case 26:return gf(t,e),t===null?(n=mS(e.type,null,e.pendingProps,null))?e.memoizedState=n:lt||(n=e.type,t=e.pendingProps,a=Wf(gs.current).createElement(n),a[Mn]=e,a[Jn]=t,En(a,n,t),mn(a),e.stateNode=a):e.memoizedState=mS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Vm(e),t===null&&lt&&(a=e.stateNode=eb(e.type,e.pendingProps,gs.current),bn=e,Ta=!0,i=Rt,Is(e.type)?(w0=i,Rt=Aa(a.firstChild)):Rt=i),_n(t,e,e.pendingProps.children,n),gf(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&lt&&((i=a=Rt)&&(a=PC(a,e.type,e.pendingProps,Ta),a!==null?(e.stateNode=a,bn=e,Rt=Aa(a.firstChild),Ta=!1,i=!0):i=!1),i||As(e)),Vm(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,a=s.children,E0(i,s)?a=null:r!==null&&E0(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=tg(t,e,KA,null,null,n),lu._currentValue=i),gf(t,e),_n(t,e,a,n),e.child;case 6:return t===null&&lt&&((t=n=Rt)&&(n=UC(n,e.pendingProps,Ta),n!==null?(e.stateNode=n,bn=e,Rt=null,t=!0):t=!1),t||As(e)),null;case 13:return lM(t,e,n);case 4:return bf(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ir(e,null,a,n):_n(t,e,a,n),e.child;case 11:return Hy(t,e,e.type,e.pendingProps,n);case 7:return _n(t,e,e.pendingProps,n),e.child;case 8:return _n(t,e,e.pendingProps.children,n),e.child;case 12:return _n(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,os(e,e.type,a.value),_n(t,e,a.children,n),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,ar(e),i=Tn(i),a=a(i),e.flags|=1,_n(t,e,a,n),e.child;case 14:return ky(t,e,e.type,e.pendingProps,n);case 15:return rM(t,e,e.type,e.pendingProps,n);case 19:return uM(t,e,n);case 31:return iC(t,e,n);case 22:return oM(t,e,n,e.pendingProps);case 24:return ar(e),a=Tn(en),t===null?(i=K0(),i===null&&(i=bt,s=J0(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),e.memoizedState={parent:a,cache:i},j0(e),os(e,en,i)):((t.lanes&n)!==0&&(s0(t,e),ql(e,null,null,n),Vl()),i=t.memoizedState,s=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),os(e,en,a)):(a=s.cache,os(e,en,a),a!==i.cache&&a0(e,[en],n,!0))),_n(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(te(156,e.tag))}function bi(t){t.flags|=4}function Am(t,e,n,a,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(UM())t.flags|=8192;else throw er=Rf,Q0}else t.flags&=-16777217}function Zy(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ab(e))if(UM())t.flags|=8192;else throw er=Rf,Q0}function $c(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?OS():536870912,t.lanes|=e,co|=e)}function wl(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function rC(t,e,n){var a=e.pendingProps;switch(Z0(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return It(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Pi(en),io(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Or(e)?bi(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xm())),It(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(bi(e),s!==null?(It(e),Zy(e,s)):(It(e),Am(e,i,null,a,n))):s?s!==t.memoizedState?(bi(e),It(e),Zy(e,s)):(It(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&bi(e),It(e),Am(e,i,t,a,n)),null;case 27:if(Tf(e),n=gs.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&bi(e);else{if(!a){if(e.stateNode===null)throw Error(te(166));return It(e),null}t=ai.current,Or(e)?by(e,t):(t=eb(i,a,n),e.stateNode=t,bi(e))}return It(e),null;case 5:if(Tf(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&bi(e);else{if(!a){if(e.stateNode===null)throw Error(te(166));return It(e),null}if(s=ai.current,Or(e))by(e,s);else{var r=Wf(gs.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?r.createElement(i,{is:a.is}):r.createElement(i)}}s[Mn]=e,s[Jn]=a;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(En(s,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&bi(e)}}return It(e),Am(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&bi(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(te(166));if(t=gs.current,Or(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,i=bn,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[Mn]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||KM(t.nodeValue,n)),t||As(e,!0)}else t=Wf(t).createTextNode(a),t[Mn]=e,e.stateNode=t}return It(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=Or(e),n!==null){if(t===null){if(!a)throw Error(te(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(557));t[Mn]=e}else nr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;It(e),t=!1}else n=xm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(aa(e),e):(aa(e),null);if((e.flags&128)!==0)throw Error(te(558))}return It(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Or(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(te(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(te(317));i[Mn]=e}else nr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;It(e),i=!1}else i=xm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(aa(e),e):(aa(e),null)}return aa(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==i&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),$c(e,e.updateQueue),It(e),null);case 4:return io(),t===null&&_g(e.stateNode.containerInfo),It(e),null;case 10:return Pi(e.type),It(e),null;case 19:if(gn(Yt),a=e.memoizedState,a===null)return It(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)wl(a,!1);else{if(Gt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Pf(t),s!==null){for(e.flags|=128,wl(a,!1),t=s.updateQueue,e.updateQueue=t,$c(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)f_(n,t),n=n.sibling;return Ct(Yt,Yt.current&1|2),lt&&Ci(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ra()>zf&&(e.flags|=128,i=!0,wl(a,!1),e.lanes=4194304)}else{if(!i)if(t=Pf(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,$c(e,t),wl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!lt)return It(e),null}else 2*ra()-a.renderingStartTime>zf&&n!==536870912&&(e.flags|=128,i=!0,wl(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(t=a.last,t!==null?t.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ra(),t.sibling=null,n=Yt.current,Ct(Yt,i?n&1|2:n&1),lt&&Ci(e,a.treeForkCount),t):(It(e),null);case 22:case 23:return aa(e),$0(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),n=e.updateQueue,n!==null&&$c(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&gn($s),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Pi(en),It(e),null;case 25:return null;case 30:return null}throw Error(te(156,e.tag))}function oC(t,e){switch(Z0(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Pi(en),io(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Tf(e),null;case 31:if(e.memoizedState!==null){if(aa(e),e.alternate===null)throw Error(te(340));nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(aa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));nr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gn(Yt),null;case 4:return io(),null;case 10:return Pi(e.type),null;case 22:case 23:return aa(e),$0(),t!==null&&gn($s),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Pi(en),null;case 25:return null;default:return null}}function fM(t,e){switch(Z0(e),e.tag){case 3:Pi(en),io();break;case 26:case 27:case 5:Tf(e);break;case 4:io();break;case 31:e.memoizedState!==null&&aa(e);break;case 13:aa(e);break;case 19:gn(Yt);break;case 10:Pi(e.type);break;case 22:case 23:aa(e),$0(),t!==null&&gn($s);break;case 24:Pi(en)}}function yu(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&t)===t){a=void 0;var s=n.create,r=n.inst;a=s(),r.destroy=a}n=n.next}while(n!==i)}}catch(o){yt(e,e.return,o)}}function Cs(t,e,n){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var s=i.next;a=s;do{if((a.tag&t)===t){var r=a.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=n,u=o;try{u()}catch(f){yt(i,l,f)}}}a=a.next}while(a!==s)}}catch(f){yt(e,e.return,f)}}function dM(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{__(e,n)}catch(a){yt(t,t.return,a)}}}function hM(t,e,n){n.props=rr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){yt(t,e,a)}}function Xl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(i){yt(t,e,i)}}function ni(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){yt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function pM(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){yt(t,t.return,i)}}function Cm(t,e,n){try{var a=t.stateNode;CC(a,t.type,n,e),a[Jn]=e}catch(i){yt(t,t.return,i)}}function mM(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Is(t.type)||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Is(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function g0(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ii));else if(a!==4&&(a===27&&Is(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(g0(t,e,n),t=t.sibling;t!==null;)g0(t,e,n),t=t.sibling}function Ff(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Is(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}function gM(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);En(e,a,n),e[Mn]=t,e[Jn]=n}catch(s){yt(t,t.return,s)}}var Li=!1,$t=!1,wm=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,pn=null;function lC(t,e){if(t=t.containerInfo,b0=Jf,t=a_(t),V0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,o=-1,l=-1,u=0,f=0,p=t,c=null;t:for(;;){for(var d;p!==n||i!==0&&p.nodeType!==3||(o=r+i),p!==s||a!==0&&p.nodeType!==3||(l=r+a),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)c=p,p=d;for(;;){if(p===t)break t;if(c===n&&++u===i&&(o=r),c===s&&++f===a&&(l=r),(d=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(T0={focusedElem:t,selectionRange:n},Jf=!1,pn=e;pn!==null;)if(e=pn,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pn=t;else for(;pn!==null;){switch(e=pn,s=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)i=t[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,n=e,i=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var x=rr(n.type,i);t=a.getSnapshotBeforeUpdate(x,s),a.__reactInternalSnapshotBeforeUpdate=t}catch(y){yt(n,n.return,y)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)A0(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":A0(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(te(163))}if(t=e.sibling,t!==null){t.return=e.return,pn=t;break}pn=e.return}}function xM(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n),a&4&&yu(5,n);break;case 1:if(Ei(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){yt(n,n.return,r)}else{var i=rr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){yt(n,n.return,r)}}a&64&&dM(n),a&512&&Xl(n,n.return);break;case 3:if(Ei(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{__(t,e)}catch(r){yt(n,n.return,r)}}break;case 27:e===null&&a&4&&gM(n);case 26:case 5:Ei(t,n),e===null&&a&4&&pM(n),a&512&&Xl(n,n.return);break;case 12:Ei(t,n);break;case 31:Ei(t,n),a&4&&SM(t,n);break;case 13:Ei(t,n),a&4&&_M(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=xC.bind(null,n),OC(t,n))));break;case 22:if(a=n.memoizedState!==null||Li,!a){e=e!==null&&e.memoizedState!==null||$t,i=Li;var s=$t;Li=a,($t=e)&&!s?Ai(t,n,(n.subtreeFlags&8772)!==0):Ei(t,n),Li=i,$t=s}break;case 30:break;default:Ei(t,n)}}function vM(t){var e=t.alternate;e!==null&&(t.alternate=null,vM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&B0(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,Xn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)yM(t,e,n),n=n.sibling}function yM(t,e,n){if(oa&&typeof oa.onCommitFiberUnmount=="function")try{oa.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 26:$t||ni(n,e),Ti(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$t||ni(n,e);var a=Nt,i=Xn;Is(n.type)&&(Nt=n.stateNode,Xn=!1),Ti(t,e,n),Kl(n.stateNode),Nt=a,Xn=i;break;case 5:$t||ni(n,e);case 6:if(a=Nt,i=Xn,Nt=null,Ti(t,e,n),Nt=a,Xn=i,Nt!==null)if(Xn)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(n.stateNode)}catch(s){yt(n,e,s)}else try{Nt.removeChild(n.stateNode)}catch(s){yt(n,e,s)}break;case 18:Nt!==null&&(Xn?(t=Nt,cS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),mo(t)):cS(Nt,n.stateNode));break;case 4:a=Nt,i=Xn,Nt=n.stateNode.containerInfo,Xn=!0,Ti(t,e,n),Nt=a,Xn=i;break;case 0:case 11:case 14:case 15:Cs(2,n,e),$t||Cs(4,n,e),Ti(t,e,n);break;case 1:$t||(ni(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&hM(n,e,a)),Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:$t=(a=$t)||n.memoizedState!==null,Ti(t,e,n),$t=a;break;default:Ti(t,e,n)}}function SM(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{mo(t)}catch(n){yt(e,e.return,n)}}}function _M(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{mo(t)}catch(n){yt(e,e.return,n)}}function uC(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Jy),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Jy),e;default:throw Error(te(435,t.tag))}}function ef(t,e){var n=uC(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var i=vC.bind(null,t,a);a.then(i,i)}})}function qn(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(Is(o.type)){Nt=o.stateNode,Xn=!1;break e}break;case 5:Nt=o.stateNode,Xn=!1;break e;case 3:case 4:Nt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(Nt===null)throw Error(te(160));yM(s,r,i),Nt=null,Xn=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)MM(e,t),e=e.sibling}var za=null;function MM(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(e,t),Wn(t),a&4&&(Cs(3,t,t.return),yu(3,t),Cs(5,t,t.return));break;case 1:qn(e,t),Wn(t),a&512&&($t||n===null||ni(n,n.return)),a&64&&Li&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=za;if(qn(e,t),Wn(t),a&512&&($t||n===null||ni(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){e:{a=t.type,n=t.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":s=i.getElementsByTagName("title")[0],(!s||s[mu]||s[Mn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(a),i.head.insertBefore(s,i.querySelector("head > title"))),En(s,a,n),s[Mn]=t,mn(s),a=s;break e;case"link":var r=xS("link","href",i).get(a+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}s=i.createElement(a),En(s,a,n),i.head.appendChild(s);break;case"meta":if(r=xS("meta","content",i).get(a+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}s=i.createElement(a),En(s,a,n),i.head.appendChild(s);break;default:throw Error(te(468,a))}s[Mn]=t,mn(s),a=s}t.stateNode=a}else vS(i,t.type,t.stateNode);else t.stateNode=gS(i,a,t.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?vS(i,t.type,t.stateNode):gS(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Cm(t,t.memoizedProps,n.memoizedProps)}break;case 27:qn(e,t),Wn(t),a&512&&($t||n===null||ni(n,n.return)),n!==null&&a&4&&Cm(t,t.memoizedProps,n.memoizedProps);break;case 5:if(qn(e,t),Wn(t),a&512&&($t||n===null||ni(n,n.return)),t.flags&32){i=t.stateNode;try{ro(i,"")}catch(x){yt(t,t.return,x)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Cm(t,i,n!==null?n.memoizedProps:i)),a&1024&&(wm=!0);break;case 6:if(qn(e,t),Wn(t),a&4){if(t.stateNode===null)throw Error(te(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(x){yt(t,t.return,x)}}break;case 3:if(yf=null,i=za,za=Xf(e.containerInfo),qn(e,t),za=i,Wn(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(x){yt(t,t.return,x)}wm&&(wm=!1,bM(t));break;case 4:a=za,za=Xf(t.stateNode.containerInfo),qn(e,t),Wn(t),za=a;break;case 12:qn(e,t),Wn(t);break;case 31:qn(e,t),Wn(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ef(t,a)));break;case 13:qn(e,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ld=ra()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ef(t,a)));break;case 22:i=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Li,f=$t;if(Li=u||i,$t=f||l,qn(e,t),$t=f,Li=u,Wn(t),a&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||l||Li||$t||Ks(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,c=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(x){yt(l,l.return,x)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(x){yt(l,l.return,x)}}}else if(e.tag===18){if(n===null){l=e;try{var d=l.stateNode;i?fS(d,!0):fS(l.stateNode,!1)}catch(x){yt(l,l.return,x)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ef(t,n))));break;case 19:qn(e,t),Wn(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ef(t,a)));break;case 30:break;case 21:break;default:qn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(mM(a)){n=a;break}a=a.return}if(n==null)throw Error(te(160));switch(n.tag){case 27:var i=n.stateNode,s=Lm(t);Ff(t,s,i);break;case 5:var r=n.stateNode;n.flags&32&&(ro(r,""),n.flags&=-33);var o=Lm(t);Ff(t,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,u=Lm(t);g0(t,u,l);break;default:throw Error(te(161))}}catch(f){yt(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bM(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;bM(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ei(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)xM(t,e.alternate,e),e=e.sibling}function Ks(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Cs(4,e,e.return),Ks(e);break;case 1:ni(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&hM(e,e.return,n),Ks(e);break;case 27:Kl(e.stateNode);case 26:case 5:ni(e,e.return),Ks(e);break;case 22:e.memoizedState===null&&Ks(e);break;case 30:Ks(e);break;default:Ks(e)}t=t.sibling}}function Ai(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:Ai(i,s,n),yu(4,s);break;case 1:if(Ai(i,s,n),a=s,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){yt(a,a.return,u)}if(a=s,i=a.updateQueue,i!==null){var o=a.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)S_(l[i],o)}catch(u){yt(a,a.return,u)}}n&&r&64&&dM(s),Xl(s,s.return);break;case 27:gM(s);case 26:case 5:Ai(i,s,n),n&&a===null&&r&4&&pM(s),Xl(s,s.return);break;case 12:Ai(i,s,n);break;case 31:Ai(i,s,n),n&&r&4&&SM(i,s);break;case 13:Ai(i,s,n),n&&r&4&&_M(i,s);break;case 22:s.memoizedState===null&&Ai(i,s,n),Xl(s,s.return);break;case 30:break;default:Ai(i,s,n)}e=e.sibling}}function mg(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&xu(n))}function gg(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xu(t))}function Fa(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)TM(t,e,n,a),e=e.sibling}function TM(t,e,n,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Fa(t,e,n,a),i&2048&&yu(9,e);break;case 1:Fa(t,e,n,a);break;case 3:Fa(t,e,n,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&xu(t)));break;case 12:if(i&2048){Fa(t,e,n,a),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){yt(e,e.return,l)}}else Fa(t,e,n,a);break;case 31:Fa(t,e,n,a);break;case 13:Fa(t,e,n,a);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?Fa(t,e,n,a):Yl(t,e):s._visibility&2?Fa(t,e,n,a):(s._visibility|=2,Br(t,e,n,a,(e.subtreeFlags&10256)!==0||!1)),i&2048&&mg(r,e);break;case 24:Fa(t,e,n,a),i&2048&&gg(e.alternate,e);break;default:Fa(t,e,n,a)}}function Br(t,e,n,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=n,l=a,u=r.flags;switch(r.tag){case 0:case 11:case 15:Br(s,r,o,l,i),yu(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Br(s,r,o,l,i):Yl(s,r):(f._visibility|=2,Br(s,r,o,l,i)),i&&u&2048&&mg(r.alternate,r);break;case 24:Br(s,r,o,l,i),i&&u&2048&&gg(r.alternate,r);break;default:Br(s,r,o,l,i)}e=e.sibling}}function Yl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,i=a.flags;switch(a.tag){case 22:Yl(n,a),i&2048&&mg(a.alternate,a);break;case 24:Yl(n,a),i&2048&&gg(a.alternate,a);break;default:Yl(n,a)}e=e.sibling}}var Bl=8192;function Nr(t,e,n){if(t.subtreeFlags&Bl)for(t=t.child;t!==null;)EM(t,e,n),t=t.sibling}function EM(t,e,n){switch(t.tag){case 26:Nr(t,e,n),t.flags&Bl&&t.memoizedState!==null&&YC(n,za,t.memoizedState,t.memoizedProps);break;case 5:Nr(t,e,n);break;case 3:case 4:var a=za;za=Xf(t.stateNode.containerInfo),Nr(t,e,n),za=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Bl,Bl=16777216,Nr(t,e,n),Bl=a):Nr(t,e,n));break;default:Nr(t,e,n)}}function AM(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Il(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];pn=a,LM(a,t)}AM(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)CM(t),t=t.sibling}function CM(t){switch(t.tag){case 0:case 11:case 15:Il(t),t.flags&2048&&Cs(9,t,t.return);break;case 3:Il(t);break;case 12:Il(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,xf(t)):Il(t);break;default:Il(t)}}function xf(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];pn=a,LM(a,t)}AM(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Cs(8,e,e.return),xf(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,xf(e));break;default:xf(e)}t=t.sibling}}function LM(t,e){for(;pn!==null;){var n=pn;switch(n.tag){case 0:case 11:case 15:Cs(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:xu(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,pn=a;else e:for(n=t;pn!==null;){a=pn;var i=a.sibling,s=a.return;if(vM(a),a===n){pn=null;break e}if(i!==null){i.return=s,pn=i;break e}pn=s}}}var cC={getCacheForType:function(t){var e=Tn(en),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Tn(en).controller.signal}},fC=typeof WeakMap=="function"?WeakMap:Map,ht=0,bt=null,at=null,rt=0,vt=0,na=null,hs=!1,So=!1,xg=!1,zi=0,Gt=0,Ls=0,tr=0,vg=0,sa=0,co=0,Zl=null,Yn=null,x0=!1,ld=0,wM=0,zf=1/0,Hf=null,Ss=null,rn=0,_s=null,fo=null,Ui=0,v0=0,y0=null,IM=null,Jl=0,S0=null;function ua(){return(ht&2)!==0&&rt!==0?rt&-rt:ke.T!==null?Sg():zS()}function RM(){if(sa===0)if((rt&536870912)===0||lt){var t=qc;qc<<=1,(qc&3932160)===0&&(qc=262144),sa=t}else sa=536870912;return t=fa.current,t!==null&&(t.flags|=32),sa}function Zn(t,e,n){(t===bt&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(ho(t,0),ps(t,rt,sa,!1)),pu(t,n),((ht&2)===0||t!==bt)&&(t===bt&&((ht&2)===0&&(tr|=n),Gt===4&&ps(t,rt,sa,!1)),si(t))}function DM(t,e,n){if((ht&6)!==0)throw Error(te(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||hu(t,e),i=a?pC(t,e):Im(t,e,!0),s=a;do{if(i===0){So&&!a&&ps(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!dC(n)){i=Im(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=Zl;var l=o.current.memoizedState.isDehydrated;if(l&&(ho(o,r).flags|=256),r=Im(o,r,!1),r!==2){if(xg&&!l){o.errorRecoveryDisabledLanes|=s,tr|=s,i=4;break e}s=Yn,Yn=i,s!==null&&(Yn===null?Yn=s:Yn.push.apply(Yn,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){ho(t,0),ps(t,e,0,!0);break}e:{switch(a=t,s=i,s){case 0:case 1:throw Error(te(345));case 4:if((e&4194048)!==e)break;case 6:ps(a,e,sa,!hs);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(te(329))}if((e&62914560)===e&&(i=ld+300-ra(),10<i)){if(ps(a,e,sa,!hs),Qf(a,0,!0)!==0)break e;Ui=e,a.timeoutHandle=jM(Ky.bind(null,a,n,Yn,Hf,x0,e,sa,tr,co,hs,s,"Throttled",-0,0),i);break e}Ky(a,n,Yn,Hf,x0,e,sa,tr,co,hs,s,null,-0,0)}}break}while(!0);si(t)}function Ky(t,e,n,a,i,s,r,o,l,u,f,p,c,d){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},EM(e,s,p);var x=(s&62914560)===s?ld-ra():(s&4194048)===s?wM-ra():0;if(x=ZC(p,x),x!==null){Ui=s,t.cancelPendingCommit=x(jy.bind(null,t,e,s,n,a,i,r,o,l,f,p,null,c,d)),ps(t,s,r,!u);return}}jy(t,e,s,n,a,i,r,o,l)}function dC(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],s=i.getSnapshot;i=i.value;try{if(!ca(s(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ps(t,e,n,a){e&=~vg,e&=~tr,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var s=31-la(i),r=1<<s;a[s]=-1,i&=~r}n!==0&&NS(t,n,e)}function ud(){return(ht&6)===0?(Su(0,!1),!1):!0}function yg(){if(at!==null){if(vt===0)var t=at.return;else t=at,Ri=fr=null,ig(t),to=null,au=0,t=at;for(;t!==null;)fM(t.alternate,t),t=t.return;at=null}}function ho(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,IC(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Ui=0,yg(),bt=t,at=n=Di(t.current,null),rt=e,vt=0,na=null,hs=!1,So=hu(t,e),xg=!1,co=sa=vg=tr=Ls=Gt=0,Yn=Zl=null,x0=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-la(a),s=1<<i;e|=t[i],a&=~s}return zi=e,td(),n}function PM(t,e){Ze=null,ke.H=su,e===yo||e===ad?(e=Ly(),vt=3):e===Q0?(e=Ly(),vt=4):vt=e===hg?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,na=e,at===null&&(Gt=1,Nf(t,ba(e,t.current)))}function UM(){var t=fa.current;return t===null?!0:(rt&4194048)===rt?Ea===null:(rt&62914560)===rt||(rt&536870912)!==0?t===Ea:!1}function OM(){var t=ke.H;return ke.H=su,t===null?su:t}function NM(){var t=ke.A;return ke.A=cC,t}function kf(){Gt=4,hs||(rt&4194048)!==rt&&fa.current!==null||(So=!0),(Ls&134217727)===0&&(tr&134217727)===0||bt===null||ps(bt,rt,sa,!1)}function Im(t,e,n){var a=ht;ht|=2;var i=OM(),s=NM();(bt!==t||rt!==e)&&(Hf=null,ho(t,e)),e=!1;var r=Gt;e:do try{if(vt!==0&&at!==null){var o=at,l=na;switch(vt){case 8:yg(),r=6;break e;case 3:case 2:case 9:case 6:fa.current===null&&(e=!0);var u=vt;if(vt=0,na=null,Kr(t,o,l,u),n&&So){r=0;break e}break;default:u=vt,vt=0,na=null,Kr(t,o,l,u)}}hC(),r=Gt;break}catch(f){PM(t,f)}while(!0);return e&&t.shellSuspendCounter++,Ri=fr=null,ht=a,ke.H=i,ke.A=s,at===null&&(bt=null,rt=0,td()),r}function hC(){for(;at!==null;)BM(at)}function pC(t,e){var n=ht;ht|=2;var a=OM(),i=NM();bt!==t||rt!==e?(Hf=null,zf=ra()+500,ho(t,e)):So=hu(t,e);e:do try{if(vt!==0&&at!==null){e=at;var s=na;t:switch(vt){case 1:vt=0,na=null,Kr(t,e,s,1);break;case 2:case 9:if(Cy(s)){vt=0,na=null,Qy(e);break}e=function(){vt!==2&&vt!==9||bt!==t||(vt=7),si(t)},s.then(e,e);break e;case 3:vt=7;break e;case 4:vt=5;break e;case 7:Cy(s)?(vt=0,na=null,Qy(e)):(vt=0,na=null,Kr(t,e,s,7));break;case 5:var r=null;switch(at.tag){case 26:r=at.memoizedState;case 5:case 27:var o=at;if(r?ab(r):o.stateNode.complete){vt=0,na=null;var l=o.sibling;if(l!==null)at=l;else{var u=o.return;u!==null?(at=u,cd(u)):at=null}break t}}vt=0,na=null,Kr(t,e,s,5);break;case 6:vt=0,na=null,Kr(t,e,s,6);break;case 8:yg(),Gt=6;break e;default:throw Error(te(462))}}mC();break}catch(f){PM(t,f)}while(!0);return Ri=fr=null,ke.H=a,ke.A=i,ht=n,at!==null?0:(bt=null,rt=0,td(),Gt)}function mC(){for(;at!==null&&!FE();)BM(at)}function BM(t){var e=cM(t.alternate,t,zi);t.memoizedProps=t.pendingProps,e===null?cd(t):at=e}function Qy(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=qy(n,e,e.pendingProps,e.type,void 0,rt);break;case 11:e=qy(n,e,e.pendingProps,e.type.render,e.ref,rt);break;case 5:ig(e);default:fM(n,e),e=at=f_(e,zi),e=cM(n,e,zi)}t.memoizedProps=t.pendingProps,e===null?cd(t):at=e}function Kr(t,e,n,a){Ri=fr=null,ig(e),to=null,au=0;var i=e.return;try{if(aC(t,i,e,n,rt)){Gt=1,Nf(t,ba(n,t.current)),at=null;return}}catch(s){if(i!==null)throw at=i,s;Gt=1,Nf(t,ba(n,t.current)),at=null;return}e.flags&32768?(lt||a===1?t=!0:So||(rt&536870912)!==0?t=!1:(hs=t=!0,(a===2||a===9||a===3||a===6)&&(a=fa.current,a!==null&&a.tag===13&&(a.flags|=16384))),FM(e,t)):cd(e)}function cd(t){var e=t;do{if((e.flags&32768)!==0){FM(e,hs);return}t=e.return;var n=rC(e.alternate,e,zi);if(n!==null){at=n;return}if(e=e.sibling,e!==null){at=e;return}at=e=t}while(e!==null);Gt===0&&(Gt=5)}function FM(t,e){do{var n=oC(t.alternate,t);if(n!==null){n.flags&=32767,at=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){at=t;return}at=t=n}while(t!==null);Gt=6,at=null}function jy(t,e,n,a,i,s,r,o,l){t.cancelPendingCommit=null;do fd();while(rn!==0);if((ht&6)!==0)throw Error(te(327));if(e!==null){if(e===t.current)throw Error(te(177));if(s=e.lanes|e.childLanes,s|=q0,ZE(t,n,s,r,o,l),t===bt&&(at=bt=null,rt=0),fo=e,_s=t,Ui=n,v0=s,y0=i,IM=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,yC(Ef,function(){return VM(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=ke.T,ke.T=null,i=pt.p,pt.p=2,r=ht,ht|=4;try{lC(t,e,n)}finally{ht=r,pt.p=i,ke.T=a}}rn=1,zM(),HM(),kM()}}function zM(){if(rn===1){rn=0;var t=_s,e=fo,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=ke.T,ke.T=null;var a=pt.p;pt.p=2;var i=ht;ht|=4;try{MM(e,t);var s=T0,r=a_(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&n_(o.ownerDocument.documentElement,o)){if(l!==null&&V0(o)){var u=l.start,f=l.end;if(f===void 0&&(f=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,c=p&&p.defaultView||window;if(c.getSelection){var d=c.getSelection(),x=o.textContent.length,y=Math.min(l.start,x),g=l.end===void 0?y:Math.min(l.end,x);!d.extend&&y>g&&(r=g,g=y,y=r);var h=Sy(o,y),m=Sy(o,g);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var S=p.createRange();S.setStart(h.node,h.offset),d.removeAllRanges(),y>g?(d.addRange(S),d.extend(m.node,m.offset)):(S.setEnd(m.node,m.offset),d.addRange(S))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var _=p[o];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Jf=!!b0,T0=b0=null}finally{ht=i,pt.p=a,ke.T=n}}t.current=e,rn=2}}function HM(){if(rn===2){rn=0;var t=_s,e=fo,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=ke.T,ke.T=null;var a=pt.p;pt.p=2;var i=ht;ht|=4;try{xM(t,e.alternate,e)}finally{ht=i,pt.p=a,ke.T=n}}rn=3}}function kM(){if(rn===4||rn===3){rn=0,zE();var t=_s,e=fo,n=Ui,a=IM;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?rn=5:(rn=0,fo=_s=null,GM(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ss=null),N0(n),e=e.stateNode,oa&&typeof oa.onCommitFiberRoot=="function")try{oa.onCommitFiberRoot(du,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=ke.T,i=pt.p,pt.p=2,ke.T=null;try{for(var s=t.onRecoverableError,r=0;r<a.length;r++){var o=a[r];s(o.value,{componentStack:o.stack})}}finally{ke.T=e,pt.p=i}}(Ui&3)!==0&&fd(),si(t),i=t.pendingLanes,(n&261930)!==0&&(i&42)!==0?t===S0?Jl++:(Jl=0,S0=t):Jl=0,Su(0,!1)}}function GM(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,xu(e)))}function fd(){return zM(),HM(),kM(),VM()}function VM(){if(rn!==5)return!1;var t=_s,e=v0;v0=0;var n=N0(Ui),a=ke.T,i=pt.p;try{pt.p=32>n?32:n,ke.T=null,n=y0,y0=null;var s=_s,r=Ui;if(rn=0,fo=_s=null,Ui=0,(ht&6)!==0)throw Error(te(331));var o=ht;if(ht|=4,CM(s.current),TM(s,s.current,r,n),ht=o,Su(0,!1),oa&&typeof oa.onPostCommitFiberRoot=="function")try{oa.onPostCommitFiberRoot(du,s)}catch{}return!0}finally{pt.p=i,ke.T=a,GM(t,e)}}function $y(t,e,n){e=ba(n,e),e=h0(t.stateNode,e,2),t=ys(t,e,2),t!==null&&(pu(t,2),si(t))}function yt(t,e,n){if(t.tag===3)$y(t,t,n);else for(;e!==null;){if(e.tag===3){$y(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ss===null||!Ss.has(a))){t=ba(n,t),n=iM(2),a=ys(e,n,2),a!==null&&(sM(n,a,e,t),pu(a,2),si(a));break}}e=e.return}}function Rm(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new fC;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(n)||(xg=!0,i.add(n),t=gC.bind(null,t,e,n),e.then(t,t))}function gC(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,bt===t&&(rt&n)===n&&(Gt===4||Gt===3&&(rt&62914560)===rt&&300>ra()-ld?(ht&2)===0&&ho(t,0):vg|=n,co===rt&&(co=0)),si(t)}function qM(t,e){e===0&&(e=OS()),t=cr(t,e),t!==null&&(pu(t,e),si(t))}function xC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qM(t,n)}function vC(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(te(314))}a!==null&&a.delete(e),qM(t,n)}function yC(t,e){return U0(t,e)}var Gf=null,Fr=null,_0=!1,Vf=!1,Dm=!1,ms=0;function si(t){t!==Fr&&t.next===null&&(Fr===null?Gf=Fr=t:Fr=Fr.next=t),Vf=!0,_0||(_0=!0,_C())}function Su(t,e){if(!Dm&&Vf){Dm=!0;do for(var n=!1,a=Gf;a!==null;){if(!e)if(t!==0){var i=a.pendingLanes;if(i===0)var s=0;else{var r=a.suspendedLanes,o=a.pingedLanes;s=(1<<31-la(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,eS(a,s))}else s=rt,s=Qf(a,a===bt?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||hu(a,s)||(n=!0,eS(a,s));a=a.next}while(n);Dm=!1}}function SC(){WM()}function WM(){Vf=_0=!1;var t=0;ms!==0&&wC()&&(t=ms);for(var e=ra(),n=null,a=Gf;a!==null;){var i=a.next,s=XM(a,e);s===0?(a.next=null,n===null?Gf=i:n.next=i,i===null&&(Fr=n)):(n=a,(t!==0||(s&3)!==0)&&(Vf=!0)),a=i}rn!==0&&rn!==5||Su(t,!1),ms!==0&&(ms=0)}function XM(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-la(s),o=1<<r,l=i[r];l===-1?((o&n)===0||(o&a)!==0)&&(i[r]=YE(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=bt,n=rt,n=Qf(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&om(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||hu(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&om(a),N0(n)){case 2:case 8:n=PS;break;case 32:n=Ef;break;case 268435456:n=US;break;default:n=Ef}return a=YM.bind(null,t),n=U0(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&om(a),t.callbackPriority=2,t.callbackNode=null,2}function YM(t,e){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(fd()&&t.callbackNode!==n)return null;var a=rt;return a=Qf(t,t===bt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(DM(t,a,e),XM(t,ra()),t.callbackNode!=null&&t.callbackNode===n?YM.bind(null,t):null)}function eS(t,e){if(fd())return null;DM(t,e,!0)}function _C(){RC(function(){(ht&6)!==0?U0(DS,SC):WM()})}function Sg(){if(ms===0){var t=oo;t===0&&(t=Vc,Vc<<=1,(Vc&261888)===0&&(Vc=256)),ms=t}return ms}function tS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:lf(""+t)}function nS(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function MC(t,e,n,a,i){if(e==="submit"&&n&&n.stateNode===i){var s=tS((i[Jn]||null).action),r=a.submitter;r&&(e=(e=r[Jn]||null)?tS(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new jf("action","action",null,a,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ms!==0){var l=r?nS(i,r):new FormData(i);f0(n,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?nS(i,r):new FormData(i),f0(n,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(tf=0;tf<$m.length;tf++)nf=$m[tf],aS=nf.toLowerCase(),iS=nf[0].toUpperCase()+nf.slice(1),Ha(aS,"on"+iS);var nf,aS,iS,tf;Ha(s_,"onAnimationEnd");Ha(r_,"onAnimationIteration");Ha(o_,"onAnimationStart");Ha("dblclick","onDoubleClick");Ha("focusin","onFocus");Ha("focusout","onBlur");Ha(HA,"onTransitionRun");Ha(kA,"onTransitionStart");Ha(GA,"onTransitionCancel");Ha(l_,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function ZM(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],i=a.event;a=a.listeners;e:{var s=void 0;if(e)for(var r=a.length-1;0<=r;r--){var o=a[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(f){Cf(f)}i.currentTarget=null,s=l}else for(r=0;r<a.length;r++){if(o=a[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(f){Cf(f)}i.currentTarget=null,s=l}}}}function nt(t,e){var n=e[Wm];n===void 0&&(n=e[Wm]=new Set);var a=t+"__bubble";n.has(a)||(JM(e,t,2,!1),n.add(a))}function Pm(t,e,n){var a=0;e&&(a|=4),JM(n,t,a,e)}var af="_reactListening"+Math.random().toString(36).slice(2);function _g(t){if(!t[af]){t[af]=!0,HS.forEach(function(n){n!=="selectionchange"&&(bC.has(n)||Pm(n,!1,t),Pm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[af]||(e[af]=!0,Pm("selectionchange",!1,e))}}function JM(t,e,n,a){switch(lb(e)){case 2:var i=QC;break;case 8:i=jC;break;default:i=Eg}n=i.bind(null,e,n,t),i=void 0,!Km||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Um(t,e,n,a,i){var s=a;if((e&1)===0&&(e&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var o=a.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=a.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=kr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){a=s=r;continue e}o=o.parentNode}}a=a.return}ZS(function(){var u=s,f=z0(n),p=[];e:{var c=u_.get(t);if(c!==void 0){var d=jf,x=t;switch(t){case"keypress":if(cf(n)===0)break e;case"keydown":case"keyup":d=vA;break;case"focusin":x="focus",d=dm;break;case"focusout":x="blur",d=dm;break;case"beforeblur":case"afterblur":d=dm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=rA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=_A;break;case s_:case r_:case o_:d=uA;break;case l_:d=bA;break;case"scroll":case"scrollend":d=iA;break;case"wheel":d=EA;break;case"copy":case"cut":case"paste":d=fA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=hy;break;case"toggle":case"beforetoggle":d=CA}var y=(e&4)!==0,g=!y&&(t==="scroll"||t==="scrollend"),h=y?c!==null?c+"Capture":null:c;y=[];for(var m=u,S;m!==null;){var _=m;if(S=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||S===null||h===null||(_=jl(m,h),_!=null&&y.push(ou(m,_,S))),g)break;m=m.return}0<y.length&&(c=new d(c,x,null,n,f),p.push({event:c,listeners:y}))}}if((e&7)===0){e:{if(c=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",c&&n!==Jm&&(x=n.relatedTarget||n.fromElement)&&(kr(x)||x[go]))break e;if((d||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,d?(x=n.relatedTarget||n.toElement,d=u,x=x?kr(x):null,x!==null&&(g=fu(x),y=x.tag,x!==g||y!==5&&y!==27&&y!==6)&&(x=null)):(d=null,x=u),d!==x)){if(y=fy,_="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=hy,_="onPointerLeave",h="onPointerEnter",m="pointer"),g=d==null?c:Ol(d),S=x==null?c:Ol(x),c=new y(_,m+"leave",d,n,f),c.target=g,c.relatedTarget=S,_=null,kr(f)===u&&(y=new y(h,m+"enter",x,n,f),y.target=S,y.relatedTarget=g,_=y),g=_,d&&x)t:{for(y=TC,h=d,m=x,S=0,_=h;_;_=y(_))S++;_=0;for(var E=m;E;E=y(E))_++;for(;0<S-_;)h=y(h),S--;for(;0<_-S;)m=y(m),_--;for(;S--;){if(h===m||m!==null&&h===m.alternate){y=h;break t}h=y(h),m=y(m)}y=null}else y=null;d!==null&&sS(p,c,d,y,!1),x!==null&&g!==null&&sS(p,g,x,y,!0)}}e:{if(c=u?Ol(u):window,d=c.nodeName&&c.nodeName.toLowerCase(),d==="select"||d==="input"&&c.type==="file")var A=xy;else if(gy(c))if(e_)A=BA;else{A=OA;var v=UA}else d=c.nodeName,!d||d.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&F0(u.elementType)&&(A=xy):A=NA;if(A&&(A=A(t,u))){$S(p,A,n,f);break e}v&&v(t,c,u),t==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Zm(c,"number",c.value)}switch(v=u?Ol(u):window,t){case"focusin":(gy(v)||v.contentEditable==="true")&&(qr=v,Qm=u,Hl=null);break;case"focusout":Hl=Qm=qr=null;break;case"mousedown":jm=!0;break;case"contextmenu":case"mouseup":case"dragend":jm=!1,_y(p,n,f);break;case"selectionchange":if(zA)break;case"keydown":case"keyup":_y(p,n,f)}var b;if(G0)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Vr?QS(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(KS&&n.locale!=="ko"&&(Vr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Vr&&(b=JS()):(ds=f,H0="value"in ds?ds.value:ds.textContent,Vr=!0)),v=qf(u,I),0<v.length&&(I=new dy(I,t,null,n,f),p.push({event:I,listeners:v}),b?I.data=b:(b=jS(n),b!==null&&(I.data=b)))),(b=wA?IA(t,n):RA(t,n))&&(I=qf(u,"onBeforeInput"),0<I.length&&(v=new dy("onBeforeInput","beforeinput",null,n,f),p.push({event:v,listeners:I}),v.data=b)),MC(p,t,u,n,f)}ZM(p,e)})}function ou(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qf(t,e){for(var n=e+"Capture",a=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=jl(t,n),i!=null&&a.unshift(ou(t,i,s)),i=jl(t,e),i!=null&&a.push(ou(t,i,s))),t.tag===3)return a;t=t.return}return[]}function TC(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sS(t,e,n,a,i){for(var s=e._reactName,r=[];n!==null&&n!==a;){var o=n,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===a)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=jl(n,s),u!=null&&r.unshift(ou(n,u,l))):i||(u=jl(n,s),u!=null&&r.push(ou(n,u,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var EC=/\r\n?/g,AC=/\u0000|\uFFFD/g;function rS(t){return(typeof t=="string"?t:""+t).replace(EC,`
`).replace(AC,"")}function KM(t,e){return e=rS(e),rS(t)===e}function St(t,e,n,a,i,s){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ro(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ro(t,""+a);break;case"className":Xc(t,"class",a);break;case"tabIndex":Xc(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Xc(t,n,a);break;case"style":YS(t,a,s);break;case"data":if(e!=="object"){Xc(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=lf(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",i.name,i,null),St(t,e,"formEncType",i.formEncType,i,null),St(t,e,"formMethod",i.formMethod,i,null),St(t,e,"formTarget",i.formTarget,i,null)):(St(t,e,"encType",i.encType,i,null),St(t,e,"method",i.method,i,null),St(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=lf(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=Ii);break;case"onScroll":a!=null&&nt("scroll",t);break;case"onScrollEnd":a!=null&&nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(te(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=lf(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":nt("beforetoggle",t),nt("toggle",t),of(t,"popover",a);break;case"xlinkActuate":Mi(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Mi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Mi(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Mi(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Mi(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Mi(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Mi(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Mi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Mi(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":of(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=nA.get(n)||n,of(t,n,a))}}function M0(t,e,n,a,i,s){switch(n){case"style":YS(t,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(te(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ro(t,a):(typeof a=="number"||typeof a=="bigint")&&ro(t,""+a);break;case"onScroll":a!=null&&nt("scroll",t);break;case"onScrollEnd":a!=null&&nt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kS.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),s=t[Jn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof a=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,i);break e}n in t?t[n]=a:a===!0?t.setAttribute(n,""):of(t,n,a)}}}function En(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nt("error",t),nt("load",t);var a=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:St(t,e,s,r,n,null)}}i&&St(t,e,"srcSet",n.srcSet,n,null),a&&St(t,e,"src",n.src,n,null);return;case"input":nt("invalid",t);var o=s=r=i=null,l=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var f=n[a];if(f!=null)switch(a){case"name":i=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":u=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(te(137,e));break;default:St(t,e,a,f,n,null)}}qS(t,s,o,l,u,r,i,!1);return;case"select":nt("invalid",t),a=r=s=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":a=o;default:St(t,e,i,o,n,null)}e=s,n=r,t.multiple=!!a,e!=null?jr(t,!!a,e,!1):n!=null&&jr(t,!!a,n,!0);return;case"textarea":nt("invalid",t),s=i=a=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":a=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(te(91));break;default:St(t,e,r,o,n,null)}XS(t,a,i,s);return;case"option":for(l in n)n.hasOwnProperty(l)&&(a=n[l],a!=null)&&(l==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":St(t,e,l,a,n,null));return;case"dialog":nt("beforetoggle",t),nt("toggle",t),nt("cancel",t),nt("close",t);break;case"iframe":case"object":nt("load",t);break;case"video":case"audio":for(a=0;a<ru.length;a++)nt(ru[a],t);break;case"image":nt("error",t),nt("load",t);break;case"details":nt("toggle",t);break;case"embed":case"source":case"link":nt("error",t),nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(a=n[u],a!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:St(t,e,u,a,n,null)}return;default:if(F0(e)){for(f in n)n.hasOwnProperty(f)&&(a=n[f],a!==void 0&&M0(t,e,f,a,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(a=n[o],a!=null&&St(t,e,o,a,n,null))}function CC(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:a.hasOwnProperty(d)||St(t,e,d,null,a,p)}}for(var c in a){var d=a[c];if(p=n[c],a.hasOwnProperty(c)&&(d!=null||p!=null))switch(c){case"type":s=d;break;case"name":i=d;break;case"checked":u=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(te(137,e));break;default:d!==p&&St(t,e,c,d,a,p)}}Ym(t,r,o,l,u,f,s,i);return;case"select":d=r=o=c=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":d=l;default:a.hasOwnProperty(s)||St(t,e,s,null,a,l)}for(i in a)if(s=a[i],l=n[i],a.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":c=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&St(t,e,i,s,a,l)}e=o,n=r,a=d,c!=null?jr(t,!!n,c,!1):!!a!=!!n&&(e!=null?jr(t,!!n,e,!0):jr(t,!!n,n?[]:"",!1));return;case"textarea":d=c=null;for(o in n)if(i=n[o],n.hasOwnProperty(o)&&i!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:St(t,e,o,null,a,i)}for(r in a)if(i=a[r],s=n[r],a.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":c=i;break;case"defaultValue":d=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(te(91));break;default:i!==s&&St(t,e,r,i,a,s)}WS(t,c,d);return;case"option":for(var x in n)c=n[x],n.hasOwnProperty(x)&&c!=null&&!a.hasOwnProperty(x)&&(x==="selected"?t.selected=!1:St(t,e,x,null,a,c));for(l in a)c=a[l],d=n[l],a.hasOwnProperty(l)&&c!==d&&(c!=null||d!=null)&&(l==="selected"?t.selected=c&&typeof c!="function"&&typeof c!="symbol":St(t,e,l,c,a,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)c=n[y],n.hasOwnProperty(y)&&c!=null&&!a.hasOwnProperty(y)&&St(t,e,y,null,a,c);for(u in a)if(c=a[u],d=n[u],a.hasOwnProperty(u)&&c!==d&&(c!=null||d!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(te(137,e));break;default:St(t,e,u,c,a,d)}return;default:if(F0(e)){for(var g in n)c=n[g],n.hasOwnProperty(g)&&c!==void 0&&!a.hasOwnProperty(g)&&M0(t,e,g,void 0,a,c);for(f in a)c=a[f],d=n[f],!a.hasOwnProperty(f)||c===d||c===void 0&&d===void 0||M0(t,e,f,c,a,d);return}}for(var h in n)c=n[h],n.hasOwnProperty(h)&&c!=null&&!a.hasOwnProperty(h)&&St(t,e,h,null,a,c);for(p in a)c=a[p],d=n[p],!a.hasOwnProperty(p)||c===d||c==null&&d==null||St(t,e,p,c,a,d)}function oS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function LC(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&oS(r)){for(r=0,o=i.responseEnd,a+=1;a<n.length;a++){var l=n[a],u=l.startTime;if(u>o)break;var f=l.transferSize,p=l.initiatorType;f&&oS(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-u)/(l-u)))}if(--a,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var b0=null,T0=null;function Wf(t){return t.nodeType===9?t:t.ownerDocument}function lS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function QM(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function E0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Om=null;function wC(){var t=window.event;return t&&t.type==="popstate"?t===Om?!1:(Om=t,!0):(Om=null,!1)}var jM=typeof setTimeout=="function"?setTimeout:void 0,IC=typeof clearTimeout=="function"?clearTimeout:void 0,uS=typeof Promise=="function"?Promise:void 0,RC=typeof queueMicrotask=="function"?queueMicrotask:typeof uS<"u"?function(t){return uS.resolve(null).then(t).catch(DC)}:jM;function DC(t){setTimeout(function(){throw t})}function Is(t){return t==="head"}function cS(t,e){var n=e,a=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(i),mo(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Kl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Kl(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[mu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Kl(t.ownerDocument.body);n=i}while(n);mo(e)}function fS(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function A0(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":A0(n),B0(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function PC(t,e,n,a){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[mu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=Aa(t.nextSibling),t===null)break}return null}function UC(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Aa(t.nextSibling),t===null))return null;return t}function $M(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Aa(t.nextSibling),t===null))return null;return t}function C0(t){return t.data==="$?"||t.data==="$~"}function L0(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function OC(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Aa(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var w0=null;function dS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Aa(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function hS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function eb(t,e,n){switch(e=Wf(n),t){case"html":if(t=e.documentElement,!t)throw Error(te(452));return t;case"head":if(t=e.head,!t)throw Error(te(453));return t;case"body":if(t=e.body,!t)throw Error(te(454));return t;default:throw Error(te(451))}}function Kl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);B0(t)}var Ca=new Map,pS=new Set;function Xf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Hi=pt.d;pt.d={f:NC,r:BC,D:FC,C:zC,L:HC,m:kC,X:VC,S:GC,M:qC};function NC(){var t=Hi.f(),e=ud();return t||e}function BC(t){var e=xo(t);e!==null&&e.tag===5&&e.type==="form"?Y_(e):Hi.r(t)}var _o=typeof document>"u"?null:document;function tb(t,e,n){var a=_o;if(a&&typeof e=="string"&&e){var i=Ma(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),pS.has(i)||(pS.add(i),t={rel:t,crossOrigin:n,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),En(e,"link",t),mn(e),a.head.appendChild(e)))}}function FC(t){Hi.D(t),tb("dns-prefetch",t,null)}function zC(t,e){Hi.C(t,e),tb("preconnect",t,e)}function HC(t,e,n){Hi.L(t,e,n);var a=_o;if(a&&t&&e){var i='link[rel="preload"][as="'+Ma(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Ma(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Ma(n.imageSizes)+'"]')):i+='[href="'+Ma(t)+'"]';var s=i;switch(e){case"style":s=po(t);break;case"script":s=Mo(t)}Ca.has(s)||(t=Dt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Ca.set(s,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(_u(s))||e==="script"&&a.querySelector(Mu(s))||(e=a.createElement("link"),En(e,"link",t),mn(e),a.head.appendChild(e)))}}function kC(t,e){Hi.m(t,e);var n=_o;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Ma(a)+'"][href="'+Ma(t)+'"]',s=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Mo(t)}if(!Ca.has(s)&&(t=Dt({rel:"modulepreload",href:t},e),Ca.set(s,t),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Mu(s)))return}a=n.createElement("link"),En(a,"link",t),mn(a),n.head.appendChild(a)}}}function GC(t,e,n){Hi.S(t,e,n);var a=_o;if(a&&t){var i=Qr(a).hoistableStyles,s=po(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=a.querySelector(_u(s)))o.loading=5;else{t=Dt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Ca.get(s))&&Mg(t,n);var l=r=a.createElement("link");mn(l),En(l,"link",t),l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,vf(r,e,a)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function VC(t,e){Hi.X(t,e);var n=_o;if(n&&t){var a=Qr(n).hoistableScripts,i=Mo(t),s=a.get(i);s||(s=n.querySelector(Mu(i)),s||(t=Dt({src:t,async:!0},e),(e=Ca.get(i))&&bg(t,e),s=n.createElement("script"),mn(s),En(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function qC(t,e){Hi.M(t,e);var n=_o;if(n&&t){var a=Qr(n).hoistableScripts,i=Mo(t),s=a.get(i);s||(s=n.querySelector(Mu(i)),s||(t=Dt({src:t,async:!0,type:"module"},e),(e=Ca.get(i))&&bg(t,e),s=n.createElement("script"),mn(s),En(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(i,s))}}function mS(t,e,n,a){var i=(i=gs.current)?Xf(i):null;if(!i)throw Error(te(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=po(n.href),n=Qr(i).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=po(n.href);var s=Qr(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(_u(t)))&&!s._p&&(r.instance=s,r.state.loading=5),Ca.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ca.set(t,n),s||WC(i,t,n,r.state))),e&&a===null)throw Error(te(528,""));return r}if(e&&a!==null)throw Error(te(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Mo(n),n=Qr(i).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(te(444,t))}}function po(t){return'href="'+Ma(t)+'"'}function _u(t){return'link[rel="stylesheet"]['+t+"]"}function nb(t){return Dt({},t,{"data-precedence":t.precedence,precedence:null})}function WC(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),En(e,"link",n),mn(e),t.head.appendChild(e))}function Mo(t){return'[src="'+Ma(t)+'"]'}function Mu(t){return"script[async]"+t}function gS(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ma(n.href)+'"]');if(a)return e.instance=a,mn(a),a;var i=Dt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),mn(a),En(a,"style",i),vf(a,n.precedence,t),e.instance=a;case"stylesheet":i=po(n.href);var s=t.querySelector(_u(i));if(s)return e.state.loading|=4,e.instance=s,mn(s),s;a=nb(n),(i=Ca.get(i))&&Mg(a,i),s=(t.ownerDocument||t).createElement("link"),mn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),En(s,"link",a),e.state.loading|=4,vf(s,n.precedence,t),e.instance=s;case"script":return s=Mo(n.src),(i=t.querySelector(Mu(s)))?(e.instance=i,mn(i),i):(a=n,(i=Ca.get(s))&&(a=Dt({},n),bg(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),mn(i),En(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(te(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,vf(a,n.precedence,t));return e.instance}function vf(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,s=i,r=0;r<a.length;r++){var o=a[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Mg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function bg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var yf=null;function xS(t,e,n){if(yf===null){var a=new Map,i=yf=new Map;i.set(n,a)}else i=yf,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var s=n[i];if(!(s[mu]||s[Mn]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=a.get(r);o?o.push(s):a.set(r,[s])}}return a}function vS(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function XC(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ab(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function YC(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=po(a.href),s=e.querySelector(_u(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Yf.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,mn(s);return}s=e.ownerDocument||e,a=nb(a),(i=Ca.get(i))&&Mg(a,i),s=s.createElement("link"),mn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),En(s,"link",a),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Yf.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Nm=0;function ZC(t,e){return t.stylesheets&&t.count===0&&Sf(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&Sf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Nm===0&&(Nm=62500*LC());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Sf(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Nm?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zf=null;function Sf(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zf=new Map,e.forEach(JC,t),Zf=null,Yf.call(t))}function JC(t,e){if(!(e.state.loading&4)){var n=Zf.get(t);if(n)var a=n.get(null);else{n=new Map,Zf.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}i=e.instance,r=i.getAttribute("data-precedence"),s=n.get(r)||a,s===a&&n.set(null,i),n.set(r,i),this.count++,a=Yf.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var lu={$$typeof:wi,Provider:null,Consumer:null,_currentValue:Qs,_currentValue2:Qs,_threadCount:0};function KC(t,e,n,a,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lm(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lm(0),this.hiddenUpdates=lm(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function ib(t,e,n,a,i,s,r,o,l,u,f,p){return t=new KC(t,e,n,r,l,u,f,p,o),e=1,s===!0&&(e|=24),s=ia(3,null,null,e),t.current=s,s.stateNode=t,e=J0(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:e},j0(s),t}function sb(t){return t?(t=Yr,t):Yr}function rb(t,e,n,a,i,s){i=sb(i),a.context===null?a.context=i:a.pendingContext=i,a=vs(e),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=ys(t,a,e),n!==null&&(Zn(n,t,e),Gl(n,t,e))}function yS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tg(t,e){yS(t,e),(t=t.alternate)&&yS(t,e)}function ob(t){if(t.tag===13||t.tag===31){var e=cr(t,67108864);e!==null&&Zn(e,t,67108864),Tg(t,67108864)}}function SS(t){if(t.tag===13||t.tag===31){var e=ua();e=O0(e);var n=cr(t,e);n!==null&&Zn(n,t,e),Tg(t,e)}}var Jf=!0;function QC(t,e,n,a){var i=ke.T;ke.T=null;var s=pt.p;try{pt.p=2,Eg(t,e,n,a)}finally{pt.p=s,ke.T=i}}function jC(t,e,n,a){var i=ke.T;ke.T=null;var s=pt.p;try{pt.p=8,Eg(t,e,n,a)}finally{pt.p=s,ke.T=i}}function Eg(t,e,n,a){if(Jf){var i=I0(a);if(i===null)Um(t,e,a,Kf,n),_S(t,a);else if(eL(i,t,e,n,a))a.stopPropagation();else if(_S(t,a),e&4&&-1<$C.indexOf(t)){for(;i!==null;){var s=xo(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Zs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-la(r);o.entanglements[1]|=l,r&=~l}si(s),(ht&6)===0&&(zf=ra()+500,Su(0,!1))}}break;case 31:case 13:o=cr(s,2),o!==null&&Zn(o,s,2),ud(),Tg(s,2)}if(s=I0(a),s===null&&Um(t,e,a,Kf,n),s===i)break;i=s}i!==null&&a.stopPropagation()}else Um(t,e,a,null,n)}}function I0(t){return t=z0(t),Ag(t)}var Kf=null;function Ag(t){if(Kf=null,t=kr(t),t!==null){var e=fu(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=CS(e),t!==null)return t;t=null}else if(n===31){if(t=LS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Kf=t,null}function lb(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(HE()){case DS:return 2;case PS:return 8;case Ef:case kE:return 32;case US:return 268435456;default:return 32}default:return 32}}var R0=!1,Ms=null,bs=null,Ts=null,uu=new Map,cu=new Map,cs=[],$C="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _S(t,e){switch(t){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":uu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cu.delete(e.pointerId)}}function Rl(t,e,n,a,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xo(e),e!==null&&ob(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function eL(t,e,n,a,i){switch(e){case"focusin":return Ms=Rl(Ms,t,e,n,a,i),!0;case"dragenter":return bs=Rl(bs,t,e,n,a,i),!0;case"mouseover":return Ts=Rl(Ts,t,e,n,a,i),!0;case"pointerover":var s=i.pointerId;return uu.set(s,Rl(uu.get(s)||null,t,e,n,a,i)),!0;case"gotpointercapture":return s=i.pointerId,cu.set(s,Rl(cu.get(s)||null,t,e,n,a,i)),!0}return!1}function ub(t){var e=kr(t.target);if(e!==null){var n=fu(e);if(n!==null){if(e=n.tag,e===13){if(e=CS(n),e!==null){t.blockedOn=e,iy(t.priority,function(){SS(n)});return}}else if(e===31){if(e=LS(n),e!==null){t.blockedOn=e,iy(t.priority,function(){SS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _f(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=I0(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);Jm=a,n.target.dispatchEvent(a),Jm=null}else return e=xo(n),e!==null&&ob(e),t.blockedOn=n,!1;e.shift()}return!0}function MS(t,e,n){_f(t)&&n.delete(e)}function tL(){R0=!1,Ms!==null&&_f(Ms)&&(Ms=null),bs!==null&&_f(bs)&&(bs=null),Ts!==null&&_f(Ts)&&(Ts=null),uu.forEach(MS),cu.forEach(MS)}function sf(t,e){t.blockedOn===e&&(t.blockedOn=null,R0||(R0=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,tL)))}var rf=null;function bS(t){rf!==t&&(rf=t,on.unstable_scheduleCallback(on.unstable_NormalPriority,function(){rf===t&&(rf=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(Ag(a||n)===null)continue;break}var s=xo(n);s!==null&&(t.splice(e,3),e-=3,f0(s,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function mo(t){function e(l){return sf(l,t)}Ms!==null&&sf(Ms,t),bs!==null&&sf(bs,t),Ts!==null&&sf(Ts,t),uu.forEach(e),cu.forEach(e);for(var n=0;n<cs.length;n++){var a=cs[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<cs.length&&(n=cs[0],n.blockedOn===null);)ub(n),n.blockedOn===null&&cs.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],s=n[a+1],r=i[Jn]||null;if(typeof s=="function")r||bS(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[Jn]||null)o=r.formAction;else if(Ag(i)!==null)continue}else o=r.action;typeof o=="function"?n[a+1]=o:(n.splice(a,3),a-=3),bS(n)}}}function cb(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Cg(t){this._internalRoot=t}dd.prototype.render=Cg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));var n=e.current,a=ua();rb(n,a,t,e,null,null)};dd.prototype.unmount=Cg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rb(t.current,2,null,t,null,null),ud(),e[go]=null}};function dd(t){this._internalRoot=t}dd.prototype.unstable_scheduleHydration=function(t){if(t){var e=zS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cs.length&&e!==0&&e<cs[n].priority;n++);cs.splice(n,0,t),n===0&&ub(t)}};var TS=ES.version;if(TS!=="19.2.0")throw Error(te(527,TS,"19.2.0"));pt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=PE(e),t=t!==null?wS(t):null,t=t===null?null:t.stateNode,t};var nL={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:ke,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Dl.isDisabled&&Dl.supportsFiber))try{du=Dl.inject(nL),oa=Dl}catch{}var Dl;hd.createRoot=function(t,e){if(!AS(t))throw Error(te(299));var n=!1,a="",i=tM,s=nM,r=aM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ib(t,1,!1,null,null,n,a,null,i,s,r,cb),t[go]=e.current,_g(t),new Cg(e)};hd.hydrateRoot=function(t,e,n){if(!AS(t))throw Error(te(299));var a=!1,i="",s=tM,r=nM,o=aM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=ib(t,1,!0,e,n??null,a,i,l,s,r,o,cb),e.context=sb(null),n=e.current,a=ua(),a=O0(a),i=vs(a),i.callback=null,ys(n,i,a),n=a,e.current.lanes=n,pu(e,n),si(e),t[go]=e.current,_g(t),new dd(e)};hd.version="19.2.0"});var pb=ja((RD,hb)=>{"use strict";function db(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(db)}catch(t){console.error(t)}}db(),hb.exports=fb()});function yb(t){let e={"01":"00","02":"01","03":"02","04":"03","05":"04","05A":"05","05B":"05","06":"05","07":"06","08":"07"},n={"00":"01","01":"02","02":"03","03":"04","04":"05","05A":"06","05B":"06","06":"07","07":"08"},a={"05A":"05B","05B":"05A"};return{prev:e[t],next:n[t],alt:a[t],choice:t==="05"}}var ki,KD,Cu,vb,gd,xd,vd,Lu,yd=Si(()=>{ki=[{id:"00",name:"\u524D\u7F6E\u533B\u9662\u5C55\u5385",short:"\u5C55\u5385",x:8,z:24,halo:6.2,summary:"\u5148\u8FA8\u8BA4\u771F\u5B9E\u9662\u533A\uFF0C\u518D\u8FDB\u5165\u4F53\u9A8C\u3002\u6C99\u76D8\u6807\u51FA\u4E3B\u697C\u3001\u4FA7\u7FFC\u3001\u8FDE\u5ECA\uFF0C\u4EE5\u53CA\u672C\u4E2D\u5FC3\u5728\u533B\u9662\u4E2D\u7684\u4F4D\u7F6E\u3002",devices:"\u9662\u533A\u6C99\u76D8\u3001\u503E\u659C\u89E6\u63A7\u9762\u3001\u4E09\u6BB5\u6587\u5316\u77ED\u5899\uFF0C\u4EE5\u53CA\u5229\u7B19\u3001Copilot\u3001\u5C0F\u7B19 JITAI\u3001\u665A\u661F\u56DB\u7EC4\u4E0D\u540C\u7684\u9648\u5217\u3002",why:"\u653E\u5728\u52A8\u7EBF\u6700\u5DE6\u7AEF\uFF0C\u5730\u9762\u7565\u62AC\u9AD8\uFF0C\u5E76\u7528\u95E8\u5ECA\u4E0E\u865A\u62DF\u5F62\u8C61\u5165\u53E3\u5206\u5F00\uFF0C\u907F\u514D\u628A\u5C31\u8BCA\u7A7A\u95F4\u548C\u540E\u9762\u7684\u751F\u6210\u5F0F\u4F53\u9A8C\u8FDE\u6210\u4E00\u6761\u8D70\u5ECA\u3002",basis:"\u6C99\u76D8\u53EA\u8868\u8FBE\u516C\u5F00\u7684\u7A7A\u95F4\u5173\u7CFB\u3002\u6587\u5316\u77ED\u5899\u8BF4\u660E\u670D\u52A1\u5BF9\u8C61\u4E0E\u76EE\u7684\uFF0C\u4E0D\u5C55\u793A\u5E8A\u4F4D\u3001\u961F\u5217\u6216\u4E2A\u4EBA\u8BCA\u7597\u4FE1\u606F\u3002",limit:"\u4E0D\u80FD\u4EE3\u66FF\u5BFC\u8BCA\uFF0C\u4E5F\u4E0D\u6784\u6210\u5C31\u533B\u8DEF\u7EBF\u5EFA\u8BAE\u3002"},{id:"01",name:"\u865A\u62DF\u5F62\u8C61\u5165\u53E3",short:"\u5F62\u8C61",x:20,z:27,halo:4.6,summary:"\u8BBF\u5BA2\u5728\u8FD9\u91CC\u786E\u8BA4\u4E00\u4E2A\u53EF\u968F\u540E\u66F4\u65B0\u7684\u62BD\u8C61\u5F62\u8C61\uFF1A\u7EBF\u6846\u8F6E\u5ED3\u3001\u670D\u88C5\u8272\u5E26\u3001\u5C9B\u5C7F\u5FBD\u7AE0\u548C\u58F0\u97F3\u504F\u597D\u3002",devices:"\u7EA6\u5360\u8BE5\u6BB5\u5899\u9762\u4E09\u5206\u4E4B\u4E8C\u7684\u5F27\u5F62\u5B9A\u5236\u5C4F\uFF0C\u6709\u91D1\u5C5E\u6536\u8FB9\u3001\u5C4F\u4F53\u539A\u5EA6\u548C\u80CC\u9762\u68C0\u4FEE\u7ED3\u6784\u3002\u5DE6\u4FA7\u7559\u51FA\u901A\u884C\u3002",why:"\u7D27\u90BB\u5C55\u5385\uFF0C\u95E8\u5ECA\u8DB3\u591F\u5BBD\uFF0C\u7AD9\u5728\u5916\u9762\u5C31\u80FD\u770B\u89C1\u540E\u9762\u7684\u60C5\u7EEA\u5C9B\u3002\u4E00\u6761\u7EC6\u5149\u7EBF\u4ECE\u5C4F\u4E2D\u5EF6\u5411\u955C\u6620\uFF0C\u8868\u793A\u5F62\u8C61\u53EF\u4EE5\u66F4\u65B0\u3002",basis:"\u5F62\u8C61\u53EA\u5728\u8BBF\u5BA2\u786E\u8BA4\u540E\u624D\u4F5C\u4E3A\u540E\u7EED\u5BF9\u7167\u7684\u89C6\u89C9\u7EBF\u7D22\u3002\u753B\u9762\u4E0D\u4F7F\u7528\u771F\u4EBA\u5927\u5934\u7167\uFF0C\u4E5F\u4E0D\u751F\u6210\u7406\u60F3\u4EBA\u683C\u6216\u6210\u957F\u5206\u6570\u3002",limit:"\u4E0D\u662F\u5FC3\u7406\u8BC4\u4F30\uFF0C\u4E0D\u8F93\u51FA\u6027\u683C\u5224\u65AD\u3002"},{id:"02",name:"\u60C5\u7EEA\u611F\u77E5\u4E0E\u4E2A\u4EBA\u5C9B",short:"\u60C5\u7EEA\u5C9B",x:34,z:31,halo:7.4,summary:"\u8EAB\u4F53\u8282\u5F8B\u3001\u7ED8\u753B\u548C\u58F0\u97F3\u5148\u53D8\u6210\u672C\u4EBA\u80FD\u67E5\u770B\u7684\u89C6\u89C9\u8F93\u5165\uFF0C\u518D\u751F\u957F\u4E3A\u4E00\u5EA7\u4E2A\u4EBA\u5C9B\u3002",devices:"HRV \u611F\u5E94\u5E95\u5EA7\u3001\u6A2A\u5411\u7ED8\u753B\u53F0\u3001\u58F0\u97F3\u91C7\u96C6\u73AF\u3001\u56DB\u5206\u4E4B\u4E09\u73AF\u5E55\u3001\u4E2D\u592E\u4E2A\u4EBA\u5C9B\u4E0E\u65C1\u8FB9\u4E24\u5EA7\u5C0F\u5C9B\uFF0C\u4EE5\u53CA\u98CE\u4E0E\u6C14\u5473\u7684\u5EFA\u7B51\u63A5\u53E3\u3002",why:"\u8FD9\u662F\u5168\u7EBF\u6700\u5927\u7684\u6C89\u6D78\u533A\u3002\u73AF\u5E55\u7559\u51FA\u524D\u65B9\u89C2\u770B\u53E3\uFF0C\u5165\u53E3\u548C\u51FA\u53E3\u90FD\u770B\u5F97\u89C1\uFF0C\u4E0D\u662F\u5BC6\u95ED\u9ED1\u7BB1\u3002",basis:"\u6CE2\u5F62\u3001\u7B14\u89E6\u548C\u58F0\u7EB9\u53EA\u4F5C\u4E3A\u5F53\u6B21\u8868\u8FBE\u7684\u53EF\u89C6\u5316\uFF0C\u9700\u672C\u4EBA\u786E\u8BA4\u540E\u624D\u8FDB\u5165\u540E\u7EED\u53D9\u4E8B\u3002",limit:"\u4E0D\u89E3\u8BFB\u4E3A\u8BCA\u65AD\uFF0C\u4E0D\u8BA1\u7B97\u98CE\u9669\u7B49\u7EA7\uFF0C\u4E0D\u66FF\u4EE3\u4E34\u5E8A\u8BC4\u4F30\u3002"},{id:"03",name:"\u751F\u6210\u5F0F\u6210\u957F\u8D70\u5ECA",short:"\u8D70\u5ECA",x:49,z:31,halo:6.5,summary:"\u9AD8\u800C\u5BBD\u7684\u6697\u8FC7\u6E21\u3002\u6696\u767D\u7C92\u5B50\u52FE\u51FA\u5899\u4E0E\u5730\u576A\u8FB9\u754C\uFF0C\u5C11\u91CF\u9752\u7D2B\u7C92\u5B50\u77ED\u6682\u805A\u6210\u5C9B\u5CB8\u7EBF\u7A3F\u548C\u6CE2\u5F62\uFF0C\u518D\u6563\u5F00\u3002",devices:"\u7A7A\u95F4\u70B9\u4E91\u672C\u8EAB\u3002\u6CA1\u6709\u4EBA\u7269\uFF0C\u6CA1\u6709\u706F\u7BB1\u8D34\u56FE\u3002\u5730\u9762\u53EA\u4FDD\u7559\u4F4E\u4EAE\u5EA6\u53CD\u5C04\u548C\u884C\u8FDB\u8FB9\u754C\u3002",why:"\u5B83\u662F\u60C5\u7EEA\u5C9B\u901A\u5F80\u5706\u684C\u7684\u552F\u4E00\u4E3B\u901A\u9053\uFF0C\u957F\u5EA6\u7EA6\u4E3A\u666E\u901A\u8FC7\u9053\u7684\u4E24\u500D\u3002\u8FDC\u7AEF\u53EA\u6F0F\u51FA\u5706\u684C\u7684\u4E00\u5708\u5F31\u5149\u3002",basis:"\u7C92\u5B50\u662F\u4F53\u9A8C\u7EBF\u7D22\u7684\u7A7A\u95F4\u5316\uFF0C\u4E0D\u662F\u76D1\u6D4B\u6307\u6807\u3002",limit:"\u8D70\u5ECA\u91CC\u4E0D\u51FA\u73B0\u8BC4\u5206\u3001\u9884\u540E\u6216\u65E5\u5149\u7A97\u666F\u3002"},{id:"04",name:"\u56E2\u4F53\u5706\u684C\u4E0E VR \u5267\u672C",short:"\u5706\u684C",x:63,z:30,halo:5.8,summary:"\u5C0F\u7EC4\u56F4\u7ED5\u4E00\u5F20\u4F1A\u7F13\u6162\u751F\u6210\u5C9B\u5CB8\u548C\u5173\u7CFB\u7EBF\u7684\u5706\u684C\u3002\u5934\u663E\u505C\u5728\u5145\u7535\u4F4D\u4E0A\uFF0C\u7A7A\u95F4\u91CC\u4E0D\u653E\u4EBA\u3002",devices:"\u539A\u73AF\u684C\u3001\u4E03\u628A\u4E0D\u540C\u89D2\u5EA6\u7684\u5EA7\u6905\u3001\u5934\u663E\u4E0E\u63A7\u5236\u5668\u5145\u7535\u67B6\u3001\u540E\u4FA7\u5F27\u5F62\u53D9\u4E8B\u5899\u3001\u684C\u65C1\u7684\u7C92\u5B50\u4EEA\u5668\u3002",why:"\u51FA\u8D70\u5ECA\u540E\u89C6\u91CE\u655E\u5F00\u3002\u8FD9\u91CC\u662F\u7B2C\u4E8C\u4E2A\u89C6\u89C9\u91CD\u5FC3\uFF0C\u51FA\u53E3\u76F4\u63A5\u8FDE\u5230\u5206\u53C9\u5E73\u53F0\u3002",basis:"\u684C\u9762\u5730\u5F62\u968F\u9009\u62E9\u53D8\u5316\uFF0C\u5448\u73B0\u7684\u662F\u53D9\u4E8B\u7EBF\u7D22\uFF0C\u4E0D\u662F\u7597\u6548\u3002",limit:"VR \u5267\u672C\u7528\u4E8E\u4F53\u9A8C\u548C\u8BA8\u8BBA\uFF0C\u4E0D\u4F5C\u4E3A\u6CBB\u7597\u65B9\u6848\u3002"},{id:"05",name:"\u5206\u53C9\u5E73\u53F0",short:"\u5206\u53C9",x:73,z:30,halo:4.2,summary:"\u4E24\u6761\u5B9E\u4F53\u901A\u8DEF\u7ED5\u8FC7\u51E0\u5EA7\u4F4E\u5C9B\uFF1A\u540E\u4FA7\u53BB\u4E2A\u4EBA\u5C9B\uFF0C\u524D\u4FA7\u53BB\u5171\u521B\u3002\u4E24\u8DEF\u90FD\u5728\u955C\u6620\u524D\u7684\u6865\u4E0A\u6C47\u5408\u3002",devices:"\u5C9B\u6E7E\u91CC\u7684\u4F4E\u5C9B\u3001\u524D\u540E\u4E24\u6761\u77F3\u6750\u6B65\u9053\u3001\u5206\u5F00\u7684\u9752\u8272\u822A\u7EBF\u3002\u6CA1\u6709\u6C34\u9762\uFF0C\u4E5F\u6CA1\u6709\u60AC\u6D6E\u7BAD\u5934\u3002",why:"\u5706\u684C\u4E4B\u540E\u5FC5\u987B\u505A\u51FA\u9009\u62E9\uFF0C\u4F46\u53E6\u4E00\u6761\u8DEF\u59CB\u7EC8\u7559\u5728\u6A21\u578B\u91CC\uFF0C\u4E0D\u4F1A\u56E0\u4E3A\u9009\u4E86\u4E00\u8FB9\u5C31\u6D88\u5931\u3002",basis:"\u5206\u53C9\u7528\u7A7A\u95F4\u6C1B\u56F4\u533A\u5206\uFF0C\u4E0D\u5F39\u7A97\uFF0C\u4E5F\u4E0D\u6697\u793A\u67D0\u4E00\u6761\u662F\u6B63\u786E\u8DEF\u7EBF\u3002",limit:"\u9009\u62E9\u53EA\u51B3\u5B9A\u5148\u770B\u54EA\u4E00\u533A\uFF0C\u4E0D\u8BB0\u5F55\u4E3A\u8BC4\u4F30\u7ED3\u679C\u3002"},{id:"05A",name:"\u9690\u79D8\u4E2A\u4EBA\u5C9B",short:"\u4E2A\u4EBA",x:84,z:45,halo:5.2,summary:"\u540E\u4FA7\u8F83\u5B89\u9759\u3002\u5DE6\u8FB9\u662F\u53EF\u9009\u7684\u4E2A\u4EBA VR \u4F4D\uFF0C\u53F3\u8FB9\u662F\u6709\u56F4\u5408\u3001\u8EBA\u5367\u548C\u4F4E\u523A\u6FC0\u5185\u5149\u7684\u8212\u7F13\u8231\u3002",devices:"\u5934\u663E\u3001\u63A7\u5236\u5668\u3001\u6536\u7EB3\u67B6\u3001\u60C5\u5883\u5C4F\uFF0C\u4EE5\u53CA\u5E26\u901A\u98CE\u53E3\u548C\u63A7\u5236\u754C\u9762\u7684\u4F11\u606F\u8231\u3002\u4E0D\u662F\u6309\u6469\u6905\u3002",why:"\u4E0E\u5171\u521B\u533A\u9694\u7740\u5C9B\u6E7E\uFF0C\u5F7C\u6B64\u770B\u5F97\u89C1\uFF0C\u4F46\u6CA1\u6709\u76F4\u63A5\u901A\u9053\u3002\u4ECE\u5256\u5207\u5168\u666F\u4ECD\u80FD\u770B\u6E05\u5185\u90E8\u3002",basis:"\u4E24\u79CD\u8BBE\u7F6E\u5E76\u5217\uFF0C\u4F9B\u4E0D\u540C\u9700\u8981\u3002\u540E\u5899\u5C9B\u5F71\u6BD4\u5176\u4ED6\u533A\u57DF\u66F4\u5B89\u9759\u3002",limit:"\u4E0D\u8868\u793A\u6BCF\u4F4D\u8BBF\u5BA2\u90FD\u8981\u63A5\u53D7\u66B4\u9732\u5F0F\u4F53\u9A8C\u3002\u8212\u7F13\u8231\u4E0D\u662F\u533B\u7597\u5668\u68B0\uFF0C\u8FD9\u91CC\u4E0D\u5C55\u793A\u6CE8\u518C\u4FE1\u606F\u3002"},{id:"05B",name:"\u5171\u521B\u7A7A\u95F4",short:"\u5171\u521B",x:84,z:15,halo:5.2,summary:"\u524D\u4FA7\u66F4\u5F00\u653E\u3002\u684C\u9762\u662F\u77F3\u6750\uFF0C\u5C0F\u5C9B\u53EF\u4EE5\u9760\u8FD1\u6216\u5206\u5F00\uFF0C\u8FDE\u63A5\u7EBF\u8D34\u7740\u684C\u9762\u53D8\u5316\u3002",devices:"\u539A\u5171\u521B\u684C\u3001\u53EF\u79FB\u52A8\u5C0F\u5C9B\u3001\u4F5C\u54C1\u5E26\u3001\u533F\u540D\u5B58\u653E\u4F4D\u3001\u5C11\u91CF\u5EA7\u4F4D\u3002\u5468\u8FB9\u4E0E\u673A\u5668\u4EBA\u9648\u5217\u53EA\u5728\u6700\u5916\u6CBF\u3002",why:"\u548C\u9690\u79D8\u4E2A\u4EBA\u5C9B\u540C\u65F6\u51FA\u73B0\u5728\u5168\u666F\u91CC\uFF0C\u7167\u660E\u66F4\u6696\uFF0C\u4F46\u4ECD\u662F\u540C\u4E00\u680B\u6DF1\u8272\u5EFA\u7B51\u3002",basis:"\u4F5C\u54C1\u4EE5\u533F\u540D\u5B58\u653E\u3002\u8FDE\u63A5\u7EBF\u53EA\u8868\u793A\u5F53\u6B21\u5171\u521B\u7684\u7A7A\u95F4\u5173\u7CFB\u3002",limit:"\u4E0D\u662F\u5546\u5E97\uFF0C\u4E5F\u4E0D\u5C55\u793A\u4E2A\u4EBA\u75C5\u5386\u3002"},{id:"06",name:"\u955C\u6620\u7A7A\u95F4",short:"\u955C\u6620",x:97,z:30,halo:4.4,summary:"\u4E24\u8DEF\u5728\u4E00\u6BB5\u771F\u6B63\u7684\u6865\u4E0A\u6C47\u5408\u3002\u524D\u65B9\u662F\u4E0E\u7A7A\u95F4\u76F8\u79F0\u7684\u5927\u955C\uFF0C\u9ED8\u8BA4\u53EA\u6620\u51FA\u5149\u548C\u5C9B\u5CB8\u3002",devices:"\u6709\u539A\u5EA6\u7684\u6865\u9762\u3001\u539A\u91CD\u91D1\u5C5E\u955C\u6846\u3001\u955C\u80CC\u7ED3\u6784\u548C\u89C2\u770B\u4F4D\u3002\u6865\u843D\u5728\u5C9B\u4E0E\u5C9B\u4E4B\u95F4\uFF0C\u955C\u524D\u6CA1\u6709\u680F\u6746\u3002",why:"\u653E\u5728\u4E24\u6761\u652F\u8DEF\u771F\u6B63\u4EA4\u4F1A\u7684\u5730\u65B9\u3002\u9760\u8FD1\u540E\uFF0C\u624D\u53E0\u52A0\u5165\u53E3\u786E\u8BA4\u8FC7\u7684\u62BD\u8C61\u8F6E\u5ED3\u3001\u5FBD\u7AE0\u548C\u59FF\u6001\u8F68\u8FF9\u3002",basis:"\u955C\u4E2D\u4E0D\u751F\u6210\u964C\u751F\u4EBA\u8138\u3002\u6CA1\u6709\u4EBA\u7269\u6A21\u578B\u65F6\uFF0C\u53EA\u7528\u540C\u4E00\u5957\u7EBF\u6846\u5F62\u8C61\u4F5C\u793A\u610F\u3002",limit:"\u4E0D\u5BF9\u6BD4\u51FA\u7406\u60F3\u81EA\u6211\uFF0C\u4E5F\u4E0D\u7ED9\u51FA\u6210\u957F\u8BC4\u5206\u3002"},{id:"07",name:"\u62A5\u544A\u5C55\u793A\u5385",short:"\u62A5\u544A",x:109,z:27,halo:6.4,summary:"\u4E00\u9762\u6A2A\u5411\u5C55\u5F00\u7684\u6570\u5B57\u5899\uFF0C\u800C\u4E0D\u662F\u51E0\u5757\u5B64\u7ACB\u4EEA\u8868\u3002\u4ECE\u5DE6\u5230\u53F3\u662F\u822A\u884C\u8DB3\u8FF9\u3001\u672C\u4EBA\u786E\u8BA4\u7684\u8868\u8FBE\u3001\u56E2\u961F\u4E0E\u6280\u672F\u4F9D\u636E\u3002",devices:"\u591A\u5C42\u73BB\u7483\u3001\u5185\u5D4C\u5C4F\u5E55\u3001\u7EC6\u7EBF\u8F68\u8FF9\u3001\u95F4\u9694\u4E0D\u540C\u7684\u6A21\u5757\uFF0C\u4EE5\u53CA\u5899\u524D\u7684\u4E13\u4E1A\u4EA4\u6D41\u53F0\u3002",why:"\u955C\u6620\u4E4B\u540E\u9700\u8981\u4E00\u6BB5\u8DB3\u591F\u957F\u7684\u4FA7\u5899\uFF0C\u8D70\u52A8\u65F6\u80FD\u770B\u51FA\u5C42\u6B21\u548C\u89C6\u5DEE\u3002",basis:"\u4E34\u5E8A\u76F8\u5173\u5185\u5BB9\u53EA\u7528\u8131\u654F\u793A\u610F\uFF0C\u6216\u6807\u6CE8\u4E3A\u9700\u672C\u4EBA\u786E\u8BA4\u3002\u5899\u9762\u53EF\u4EE5\u70B9\u5F00\u770B\u6765\u6E90\u8BF4\u660E\u3002",limit:"\u4E0D\u51FA\u73B0\u7597\u6548\u767E\u5206\u6BD4\u3001\u98CE\u9669\u7ED3\u8BBA\u3001\u4F2A\u9020\u7684\u6CE8\u518C\u53F7\u6216\u8BB8\u53EF\u8BC1\u56FE\u6837\u3002"},{id:"08",name:"\u79BB\u573A\u4E0E\u518D\u6B21\u542F\u822A",short:"\u79BB\u573A",x:118,z:24,halo:3.4,summary:"\u51FA\u53E3\u523B\u610F\u6536\u5C0F\uFF1A\u4E00\u5EA7\u5C0F\u5C9B\u706F\u6807\u3001\u4E00\u6761\u4F38\u5411\u95E8\u5916\u7684\u5149\uFF0C\u548C\u4E00\u5F20\u62BD\u8C61\u6D77\u56FE\u3002",devices:"\u706F\u6807\u3001\u6D77\u56FE\u5C4F\u3001\u77ED\u95E8\u5ECA\u3002\u4E0D\u518D\u65B0\u5EFA\u540C\u7B49\u4F53\u91CF\u7684\u4E3B\u9898\u5385\u3002",why:"\u52A8\u7EBF\u5728\u8FD9\u91CC\u7ED3\u675F\u3002\u5149\u7EBF\u4ECE\u9752\u7D2B\u56DE\u5230\u6696\u7684\u4E2D\u6027\u8272\uFF0C\u8BA9\u4EBA\u77E5\u9053\u4E0B\u6B21\u4F1A\u4F9D\u636E\u65B0\u7684\u8868\u8FBE\u751F\u6210\u4E0D\u540C\u65C5\u7A0B\u3002",basis:"\u6D77\u56FE\u53EA\u8BF4\u660E\u201C\u4E0B\u4E00\u6B21\u4F1A\u4E0D\u540C\u201D\uFF0C\u4E0D\u4FDD\u5B58\u672A\u786E\u8BA4\u7684\u63A8\u65AD\u3002",limit:"\u4E0D\u662F\u590D\u8BCA\u9884\u7EA6\uFF0C\u4E5F\u4E0D\u9884\u6D4B\u4E0B\u4E00\u6B21\u7684\u72B6\u6001\u3002"}],KD=Object.fromEntries(ki.map(t=>[t.id,t])),Cu=[[3.2,24],[8,24],[14.2,25.3],[20,27],[25,26.4],[31,27.6],[35.2,28.3],[40,27.2],[45.5,30.4],[49,31],[56,30.5],[63,30],[73,30]],vb=[[42.6,30.6],[49,31],[56.5,30.6]],gd=[[73,30],[78,36.5],[82,42],[84,45],[89,43],[93.2,34.5]],xd=[[73,30],[78,23.5],[82,18],[84,15],[89,17.5],[93.2,25.5]],vd=[[100.8,30],[105,28.4],[109,27],[114,25.2],[118,24],[122.4,23.2]],Lu={overview:{p:[10,13.5,54],t:[48,1.8,29]},"00":{p:[1.5,6.2,12],t:[8,1.2,24]},"01":{p:[13,4.4,16],t:[21,1.7,30]},"02":{p:[22,7.2,16],t:[34,1.5,32]},"03":{p:[44.2,1.72,30.95],t:[56.5,1.55,31]},"04":{p:[54,7.2,18],t:[64,.9,31]},"05":{p:[64,13,12],t:[86,.3,30]},"05A":{p:[74,5.6,37],t:[86,1.15,45.5]},"05B":{p:[74,5.4,24],t:[85,.9,14]},"06":{p:[88,4.2,22],t:[99,1.7,30]},"07":{p:[103,4.1,15],t:[112,1.45,31.5]},"08":{p:[112,3.4,15],t:[119.5,1.15,24]}}});var _b=ja(Sd=>{"use strict";var aL=Symbol.for("react.transitional.element"),iL=Symbol.for("react.fragment");function Sb(t,e,n){var a=null;if(n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),"key"in e){n={};for(var i in e)i!=="key"&&(n[i]=e[i])}else n=e;return e=n.ref,{$$typeof:aL,type:t,key:a,ref:e!==void 0?e:null,props:n}}Sd.Fragment=iL;Sd.jsx=Sb;Sd.jsxs=Sb});var wu=ja(($D,Mb)=>{"use strict";Mb.exports=_b()});function sL(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function rL(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Yo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function k1(){let t=Yo("canvas");return t.style.display="block",t}function Xu(...t){let e="THREE."+t.shift();Zo?Zo("log",e,...t):console.log(e,...t)}function G1(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=G1(t);let e="THREE."+t.shift();if(Zo)Zo("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ze(...t){t=G1(t);let e="THREE."+t.shift();if(Zo)Zo("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function gr(...t){let e=t.join(" ");e in bb||(bb[e]=!0,Oe(...t))}function V1(t,e,n){return new Promise(function(a,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:a()}}setTimeout(s,n)})}function ks(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[t&255]+In[t>>8&255]+In[t>>16&255]+In[t>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function Px(t,e){return(t%e+e)%e}function oL(t,e,n,a,i){return a+(t-e)*(i-a)/(n-e)}function lL(t,e,n){return t!==e?(n-t)/(e-t):0}function Hu(t,e,n){return(1-n)*t+n*e}function uL(t,e,n,a){return Hu(t,e,1-Math.exp(-n*a))}function cL(t,e=1){return e-Math.abs(Px(t,e*2)-e)}function fL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function dL(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function hL(t,e){return t+Math.floor(Math.random()*(e-t+1))}function pL(t,e){return t+Math.random()*(e-t)}function mL(t){return t*(.5-Math.random())}function gL(t){t!==void 0&&(Tb=t);let e=Tb+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xL(t){return t*Vo}function vL(t){return t*Jo}function yL(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function SL(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ux(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _L(t,e,n,a,i){let s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),u=s((e+a)/2),f=r((e+a)/2),p=s((e-a)/2),c=r((e-a)/2),d=s((a-e)/2),x=r((a-e)/2);switch(i){case"XYX":t.set(o*f,l*p,l*c,o*u);break;case"YZY":t.set(l*c,o*f,l*p,o*u);break;case"ZXZ":t.set(l*p,l*c,o*f,o*u);break;case"XZX":t.set(o*f,l*x,l*d,o*u);break;case"YXY":t.set(l*d,o*f,l*x,o*u);break;case"ZYZ":t.set(l*x,l*d,o*f,o*u);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cp(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ox(t,e){if(e.constructor===Float32Array)return t;let n=Cp(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Nx(t,e){if(e.constructor===Float32Array)return t;let n=Cp(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}function ML(){let t={enabled:!0,workingColorSpace:qu,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===gt&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===gt&&(i.r=qo(i.r),i.g=qo(i.g),i.b=qo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qa?Wu:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return t.define({[qu]:{primaries:e,whitePoint:a,transfer:Wu,toXYZ:Ab,fromXYZ:Cb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:a,transfer:gt,toXYZ:Ab,fromXYZ:Cb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),t}function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function Ig(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ch.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}function Pg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function kg(t,e,n,a,i){for(let s=0,r=t.length-3;s<=r;s+=3){hr.fromArray(t,s);let o=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=e.dot(hr),u=n.dot(hr),f=a.dot(hr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}function Nb(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=ks()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}function Id(t,e,n,a,i,s){Bo.subVectors(t,n).addScalar(.5).multiply(a),i!==void 0?(Ou.x=s*Bo.x-i*Bo.y,Ou.y=i*Bo.x+s*Bo.y):Ou.copy(Bo),t.copy(e),t.x+=Ou.x,t.y+=Ou.y,t.applyMatrix4(X1)}function FL(t,e,n,a,i,s,r,o){let l;if(e.side===ln?l=a.intersectTriangle(r,s,i,!0,o):l=a.intersectTriangle(i,s,r,e.side===pi,o),l===null)return null;Fd.copy(o),Fd.applyMatrix4(t.matrixWorld);let u=n.ray.origin.distanceTo(Fd);return u<n.near||u>n.far?null:{distance:u,point:Fd.clone(),object:t}}function zd(t,e,n,a,i,s,r,o,l,u){t.getVertexPosition(o,Ud),t.getVertexPosition(l,Od),t.getVertexPosition(u,Nd);let f=FL(t,e,n,a,Ud,Od,Nd,kb);if(f){let p=new R;oi.getBarycoord(kb,Ud,Od,Nd,p),i&&(f.uv=oi.getInterpolatedAttribute(i,o,l,u,p,new xe)),s&&(f.uv1=oi.getInterpolatedAttribute(s,o,l,u,p,new xe)),r&&(f.normal=oi.getInterpolatedAttribute(r,o,l,u,p,new R),f.normal.dot(a.direction)>0&&f.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new R,materialIndex:0};oi.getNormal(Ud,Od,Nd,c.normal),f.face=c,f.barycoord=p}return f}function Vd(t,e,n,a,i,s,r){let o=t.geometry.attributes.position;if(mh.fromBufferAttribute(o,i),gh.fromBufferAttribute(o,s),n.distanceSqToSegment(mh,gh,Zg,Xb)>a)return;Zg.applyMatrix4(t.matrixWorld);let u=e.ray.origin.distanceTo(Zg);if(!(u<e.near||u>e.far))return{distance:u,point:Xb.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}function Kb(t,e,n,a,i,s,r){let o=ix.distanceSqToPoint(t);if(o<n){let l=new R;ix.closestPointToPoint(t,l),l.applyMatrix4(a);let u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}function Bx(){let t=0,e=0,n=0,a=0;function i(s,r,o,l){t=s,e=o,n=-3*s+3*r-2*o-l,a=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,u){i(r,o,u*(o-s),u*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,u,f,p){let c=(r-s)/u-(o-s)/(u+f)+(o-r)/f,d=(o-r)/f-(l-r)/(f+p)+(l-o)/p;c*=f,d*=f,i(r,o,c,d)},calc:function(s){let r=s*s,o=r*s;return t+e*s+n*r+a*o}}}function $b(t,e,n,a,i){let s=(a-e)*.5,r=(i-n)*.5,o=t*t,l=t*o;return(2*n-2*a+s+r)*l+(-3*n+3*a-2*s-r)*o+s*t+n}function kL(t,e){let n=1-t;return n*n*e}function GL(t,e){return 2*(1-t)*t*e}function VL(t,e){return t*t*e}function ku(t,e,n,a){return kL(t,e)+GL(t,n)+VL(t,a)}function qL(t,e){let n=1-t;return n*n*n*e}function WL(t,e){let n=1-t;return 3*n*n*t*e}function XL(t,e){return 3*(1-t)*t*t*e}function YL(t,e){return t*t*t*e}function Gu(t,e,n,a,i){return qL(t,e)+WL(t,n)+XL(t,a)+YL(t,i)}function Ar(t){let e={};for(let n in t){e[n]={};for(let a in t[n]){let i=t[n][a];if(e1(i))i.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=i.clone();else if(Array.isArray(i))if(e1(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[n][a]=s}else e[n][a]=i.slice();else e[n][a]=i}}return e}function Un(t){let e={};for(let n=0;n<t.length;n++){let a=Ar(t[n]);for(let i in a)e[i]=a[i]}return e}function e1(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function JL(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fx(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}function zo(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Jd(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}function Z1(t,e,n,a,i){let s=1-t;return s*s*s*e+3*s*s*t*n+3*s*t*t*a+t*t*t*i}function jL(t,e,n,a,i){let s=1-t;return 3*s*s*(n-e)+6*s*t*(a-n)+3*t*t*(i-a)}function $L(t,e,n,a,i){let s=(t-e)/(i-e);for(let r=0;r<8;r++){let o=Z1(s,e,n,a,i)-t;if(Math.abs(o)<1e-10)break;let l=jL(s,e,n,a,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}function t1(t,e){for(let n=0,a=t.length;n!==a;n+=2)t[n]+=e}function n1(t,e){for(let n=0,a=t.length;n!==a;n+=2)t[n]*=e}function a1(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function u1(t,e){return t.distance-e.distance}function lx(t,e,n,a){let i=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(i=!1),i===!0&&a===!0){let s=t.children;for(let r=0,o=s.length;r<o;r++)lx(s[r],e,n,!0)}}function kx(t,e,n,a){let i=lw(a);switch(n){case Ax:return t*e;case Yh:return t*e/i.components*i.byteLength;case Zh:return t*e/i.components*i.byteLength;case Hs:return t*e*2/i.components*i.byteLength;case Jh:return t*e*2/i.components*i.byteLength;case Cx:return t*e*3/i.components*i.byteLength;case Ka:return t*e*4/i.components*i.byteLength;case Kh:return t*e*4/i.components*i.byteLength;case bc:case Tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jh:case ep:return Math.max(t,16)*Math.max(e,8)/4;case Qh:case $h:return Math.max(t,8)*Math.max(e,8)/2;case tp:case np:case ip:case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ap:case Cc:case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case up:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _p:case Mp:case bp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Tp:case Ep:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Lc:case Ap:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lw(t){switch(t){case $n:case Mx:return{byteLength:1,components:1};case pl:case bx:case Ja:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case Za:case qh:case Ua:return{byteLength:4,components:1};case Tx:case Ex:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var c1,cx,f1,Sc,zh,cl,pi,ln,mi,Mr,fl,dl,fx,dx,d1,br,h1,p1,m1,g1,x1,v1,y1,S1,hx,px,_1,M1,b1,T1,E1,A1,C1,L1,w1,th,nh,ah,Wo,ih,sh,rh,oh,Hh,I1,R1,gi,mx,gx,xx,_c,vx,yx,Sx,_x,Tr,hl,kh,Gh,xr,li,lh,vn,D1,Mc,kn,Vh,Qi,$n,Mx,bx,pl,qh,Za,Ua,Ja,Wh,Xh,Er,Tx,Ex,Ax,Cx,Ka,Zi,ji,Yh,Zh,Hs,Jh,Kh,bc,Tc,Ec,Ac,Qh,jh,$h,ep,tp,np,ap,ip,sp,Cc,rp,op,lp,up,cp,fp,dp,hp,pp,mp,gp,xp,vp,yp,Sp,_p,Mp,bp,Tp,Ep,Lc,Ap,Vu,uh,jd,ex,tx,nx,ax,P1,wc,U1,Qa,an,qu,Wu,gt,$d,O1,N1,B1,F1,Lx,z1,H1,wx,Ix,Rx,Dx,wa,Xo,bb,Zo,q1,ui,In,Tb,Vo,Jo,zt,xe,ci,R,Lg,Eb,qe,wg,Ab,Cb,ot,To,ch,bL,Ko,TL,Rg,Pn,Bt,fh,pa,Yu,dh,ft,Eo,ka,EL,AL,Rs,_d,da,Lb,wb,fi,Qo,CL,Ib,Ao,Gi,Md,Iu,LL,wL,Rb,Db,Pb,Ub,IL,Co,Dg,Jt,sn,RL,jo,W1,Ds,bd,Ge,Rn,Zu,vr,Ga,Vi,Ug,qi,Lo,wo,Ob,Og,Ng,Bg,Fg,zg,Hg,oi,di,Wi,Va,Td,Io,Ro,Do,Ps,Us,dr,Ru,Ed,Ad,hr,nn,Cd,DL,Vt,Ju,Ku,et,PL,Du,Gg,hi,UL,La,Vg,Po,ha,Pu,xn,Lt,hh,Hn,Qu,qg,OL,NL,qa,BL,Ia,$o,Uo,Uu,Oo,No,Bo,Ou,X1,Ld,Nu,wd,Bb,Wg,Fb,ju,Xi,Xg,Rd,Dd,yr,Wa,zb,pr,Pd,Hb,Ud,Od,Nd,Yg,Bd,kb,Fd,Le,$u,ec,Fo,Gb,Hd,Vb,zL,Bu,Fu,tc,mr,HL,kd,Ns,qb,ph,Sr,mh,gh,Wb,zu,Gd,Zg,Xb,xh,Yb,Zb,el,tl,Jb,ix,qd,Wd,nl,nc,ac,Ji,ic,sc,Ra,al,il,Qn,Xd,Yd,Jg,Zd,rc,Da,oc,vh,Qb,jb,Kg,Qg,jg,Ki,yh,Sh,_h,Mh,bh,lc,Th,ZL,uc,qt,jn,ma,sl,Y1,KL,QL,Pa,Eh,Xa,cc,fc,Ah,Ch,Bs,Lh,wh,Ih,Rh,ga,Fs,Dh,Ph,Uh,dc,zs,Oh,eh,Nh,J1,rl,Ho,Bh,ol,_r,hc,$g,i1,s1,pc,Kd,Qd,ri,mc,Os,r1,o1,Dn,sx,Ya,gc,rx,ll,xc,ko,Go,ul,Fh,zx,ew,Hx,tw,nw,aw,iw,sw,rw,ow,ox,Pt,eP,l1,vc,yc,ux,Gx=Si(()=>{c1=0,cx=1,f1=2,Sc=1,zh=2,cl=3,pi=0,ln=1,mi=2,Mr=0,fl=1,dl=2,fx=3,dx=4,d1=5,br=100,h1=101,p1=102,m1=103,g1=104,x1=200,v1=201,y1=202,S1=203,hx=204,px=205,_1=206,M1=207,b1=208,T1=209,E1=210,A1=211,C1=212,L1=213,w1=214,th=0,nh=1,ah=2,Wo=3,ih=4,sh=5,rh=6,oh=7,Hh=0,I1=1,R1=2,gi=0,mx=1,gx=2,xx=3,_c=4,vx=5,yx=6,Sx=7,_x=300,Tr=301,hl=302,kh=303,Gh=304,xr=1e3,li=1001,lh=1002,vn=1003,D1=1004,Mc=1005,kn=1006,Vh=1007,Qi=1008,$n=1009,Mx=1010,bx=1011,pl=1012,qh=1013,Za=1014,Ua=1015,Ja=1016,Wh=1017,Xh=1018,Er=1020,Tx=35902,Ex=35899,Ax=1021,Cx=1022,Ka=1023,Zi=1026,ji=1027,Yh=1028,Zh=1029,Hs=1030,Jh=1031,Kh=1033,bc=33776,Tc=33777,Ec=33778,Ac=33779,Qh=35840,jh=35841,$h=35842,ep=35843,tp=36196,np=37492,ap=37496,ip=37488,sp=37489,Cc=37490,rp=37491,op=37808,lp=37809,up=37810,cp=37811,fp=37812,dp=37813,hp=37814,pp=37815,mp=37816,gp=37817,xp=37818,vp=37819,yp=37820,Sp=37821,_p=36492,Mp=36494,bp=36495,Tp=36283,Ep=36284,Lc=36285,Ap=36286,Vu=2300,uh=2301,jd=2302,ex=2303,tx=2400,nx=2401,ax=2402,P1=3200,wc=0,U1=1,Qa="",an="srgb",qu="srgb-linear",Wu="linear",gt="srgb",$d=7680,O1=519,N1=512,B1=513,F1=514,Lx=515,z1=516,H1=517,wx=518,Ix=519,Rx=35044,Dx="300 es",wa=2e3,Xo=2001;bb={},Zo=null;q1={[th]:th,[ah]:rh,[ih]:ih,[Wo]:sh,[nh]:nh,[rh]:ah,[oh]:oh,[sh]:Wo},ui=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){let a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){let a=this._listeners;if(a===void 0)return;let i=a[e];if(i!==void 0){let s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let a=n[e.type];if(a!==void 0){e.target=this;let i=a.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tb=1234567,Vo=Math.PI/180,Jo=180/Math.PI;zt={DEG2RAD:Vo,RAD2DEG:Jo,generateUUID:ks,clamp:Je,euclideanModulo:Px,mapLinear:oL,inverseLerp:lL,lerp:Hu,damp:uL,pingpong:cL,smoothstep:fL,smootherstep:dL,randInt:hL,randFloat:pL,randFloatSpread:mL,seededRandom:gL,degToRad:xL,radToDeg:vL,isPowerOfTwo:yL,ceilPowerOfTwo:SL,floorPowerOfTwo:Ux,setQuaternionFromProperEuler:_L,normalize:Nx,denormalize:Ox},xe=class{static{this.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,a=this.y,i=e.elements;return this.x=i[0]*n+i[3]*a+i[6],this.y=i[1]*n+i[4]*a+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Je(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let a=this.dot(e)/n;return Math.acos(Je(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let a=Math.cos(n),i=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*a-r*i+e.x,this.y=s*i+r*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ci=class{constructor(e=0,n=0,a=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=i}static slerpFlat(e,n,a,i,s,r,o){let l=a[i+0],u=a[i+1],f=a[i+2],p=a[i+3],c=s[r+0],d=s[r+1],x=s[r+2],y=s[r+3];if(p!==y||l!==c||u!==d||f!==x){let g=l*c+u*d+f*x+p*y;g<0&&(c=-c,d=-d,x=-x,y=-y,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),S=Math.sin(m);h=Math.sin(h*m)/S,o=Math.sin(o*m)/S,l=l*h+c*o,u=u*h+d*o,f=f*h+x*o,p=p*h+y*o}else{l=l*h+c*o,u=u*h+d*o,f=f*h+x*o,p=p*h+y*o;let m=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=m,u*=m,f*=m,p*=m}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=p}static multiplyQuaternionsFlat(e,n,a,i,s,r){let o=a[i],l=a[i+1],u=a[i+2],f=a[i+3],p=s[r],c=s[r+1],d=s[r+2],x=s[r+3];return e[n]=o*x+f*p+l*d-u*c,e[n+1]=l*x+f*c+u*p-o*d,e[n+2]=u*x+f*d+o*c-l*p,e[n+3]=f*x-o*p-l*c-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,i){return this._x=e,this._y=n,this._z=a,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let a=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(a/2),f=o(i/2),p=o(s/2),c=l(a/2),d=l(i/2),x=l(s/2);switch(r){case"XYZ":this._x=c*f*p+u*d*x,this._y=u*d*p-c*f*x,this._z=u*f*x+c*d*p,this._w=u*f*p-c*d*x;break;case"YXZ":this._x=c*f*p+u*d*x,this._y=u*d*p-c*f*x,this._z=u*f*x-c*d*p,this._w=u*f*p+c*d*x;break;case"ZXY":this._x=c*f*p-u*d*x,this._y=u*d*p+c*f*x,this._z=u*f*x+c*d*p,this._w=u*f*p-c*d*x;break;case"ZYX":this._x=c*f*p-u*d*x,this._y=u*d*p+c*f*x,this._z=u*f*x-c*d*p,this._w=u*f*p+c*d*x;break;case"YZX":this._x=c*f*p+u*d*x,this._y=u*d*p+c*f*x,this._z=u*f*x-c*d*p,this._w=u*f*p-c*d*x;break;case"XZY":this._x=c*f*p-u*d*x,this._y=u*d*p-c*f*x,this._z=u*f*x+c*d*p,this._w=u*f*p+c*d*x;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let a=n/2,i=Math.sin(a);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,a=n[0],i=n[4],s=n[8],r=n[1],o=n[5],l=n[9],u=n[2],f=n[6],p=n[10],c=a+o+p;if(c>0){let d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-u)*d,this._z=(r-i)*d}else if(a>o&&a>p){let d=2*Math.sqrt(1+a-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+u)/d}else if(o>p){let d=2*Math.sqrt(1+o-a-p);this._w=(s-u)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-a-o);this._w=(r-i)/d,this._x=(s+u)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){let a=this.angleTo(e);if(a===0)return this;let i=Math.min(1,n/a);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let a=e._x,i=e._y,s=e._z,r=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=a*f+r*o+i*u-s*l,this._y=i*f+r*l+s*o-a*u,this._z=s*f+r*u+a*l-i*o,this._w=r*f-a*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,n){let a=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(a=-a,i=-i,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){let u=Math.acos(o),f=Math.sin(u);l=Math.sin(l*u)/f,n=Math.sin(n*u)/f,this._x=this._x*l+a*n,this._y=this._y*l+i*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+a*n,this._y=this._y*l+i*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),i=Math.sqrt(1-a),s=Math.sqrt(a);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,n=0,a=0){this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Eb.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Eb.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,a=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*a+s[6]*i,this.y=s[1]*n+s[4]*a+s[7]*i,this.z=s[2]*n+s[5]*a+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,a=this.y,i=this.z,s=e.elements,r=1/(s[3]*n+s[7]*a+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*a+s[8]*i+s[12])*r,this.y=(s[1]*n+s[5]*a+s[9]*i+s[13])*r,this.z=(s[2]*n+s[6]*a+s[10]*i+s[14])*r,this}applyQuaternion(e){let n=this.x,a=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*a),f=2*(o*n-s*i),p=2*(s*a-r*n);return this.x=n+l*u+r*p-o*f,this.y=a+l*f+o*u-s*p,this.z=i+l*p+s*f-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,a=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*a+s[8]*i,this.y=s[1]*n+s[5]*a+s[9]*i,this.z=s[2]*n+s[6]*a+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Je(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let a=e.x,i=e.y,s=e.z,r=n.x,o=n.y,l=n.z;return this.x=i*l-s*o,this.y=s*r-a*l,this.z=a*o-i*r,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Lg.copy(this).projectOnVector(e),this.sub(Lg)}reflect(e){return this.sub(Lg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let a=this.dot(e)/n;return Math.acos(Je(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,a=this.y-e.y,i=this.z-e.z;return n*n+a*a+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){let i=Math.sin(n)*e;return this.x=i*Math.sin(a),this.y=Math.cos(n)*e,this.z=i*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lg=new R,Eb=new ci,qe=class{static{this.prototype.isMatrix3=!0}constructor(e,n,a,i,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,i,s,r,o,l,u)}set(e,n,a,i,s,r,o,l,u){let f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=a,f[7]=r,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let a=e.elements,i=n.elements,s=this.elements,r=a[0],o=a[3],l=a[6],u=a[1],f=a[4],p=a[7],c=a[2],d=a[5],x=a[8],y=i[0],g=i[3],h=i[6],m=i[1],S=i[4],_=i[7],E=i[2],A=i[5],v=i[8];return s[0]=r*y+o*m+l*E,s[3]=r*g+o*S+l*A,s[6]=r*h+o*_+l*v,s[1]=u*y+f*m+p*E,s[4]=u*g+f*S+p*A,s[7]=u*h+f*_+p*v,s[2]=c*y+d*m+x*E,s[5]=c*g+d*S+x*A,s[8]=c*h+d*_+x*v,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],a=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*r*f-n*o*u-a*s*f+a*o*l+i*s*u-i*r*l}invert(){let e=this.elements,n=e[0],a=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*r-o*u,c=o*l-f*s,d=u*s-r*l,x=n*p+a*c+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=p*y,e[1]=(i*u-f*a)*y,e[2]=(o*a-i*r)*y,e[3]=c*y,e[4]=(f*n-i*l)*y,e[5]=(i*s-o*n)*y,e[6]=d*y,e[7]=(a*l-u*n)*y,e[8]=(r*n-a*s)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(a*l,a*u,-a*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+n,0,0,1),this}scale(e,n){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wg.makeScale(e,n)),this}rotate(e){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wg.makeRotation(-e)),this}translate(e,n){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wg.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,a=e.elements;for(let i=0;i<9;i++)if(n[i]!==a[i])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){let a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wg=new qe,Ab=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cb=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=ML();ch=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{To===void 0&&(To=Yo("canvas")),To.width=e.width,To.height=e.height;let i=To.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),a=To}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Yo("canvas");n.width=e.width,n.height=e.height;let a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);let i=a.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Yi(s[r]/255)*255;return a.putImageData(i,0,0),n}else if(e.data){let n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Yi(n[a]/255)*255):n[a]=Yi(n[a]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bL=0,Ko=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bL++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let a={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ig(i[r].image)):s.push(Ig(i[r]))}else s=Ig(i);a.url=s}return n||(e.images[this.uuid]=a),a}};TL=0,Rg=new R,Pn=class t extends ui{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,a=li,i=li,s=kn,r=Qi,o=Ka,l=$n,u=t.DEFAULT_ANISOTROPY,f=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TL++}),this.uuid=ks(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rg).x}get height(){return this.source.getSize(Rg).y}get depth(){return this.source.getSize(Rg).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let a=e[n];if(a===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let i=this[n];if(i===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}i&&a&&i.isVector2&&a.isVector2||i&&a&&i.isVector3&&a.isVector3||i&&a&&i.isMatrix3&&a.isMatrix3?i.copy(a):this[n]=a}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=_x;Pn.DEFAULT_ANISOTROPY=1;Bt=class{static{this.prototype.isVector4=!0}constructor(e=0,n=0,a=0,i=1){this.x=e,this.y=n,this.z=a,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,i){return this.x=e,this.y=n,this.z=a,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,a=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*a+r[8]*i+r[12]*s,this.y=r[1]*n+r[5]*a+r[9]*i+r[13]*s,this.z=r[2]*n+r[6]*a+r[10]*i+r[14]*s,this.w=r[3]*n+r[7]*a+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,i,s,l=e.elements,u=l[0],f=l[4],p=l[8],c=l[1],d=l[5],x=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(f-c)<.01&&Math.abs(p-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+c)<.1&&Math.abs(p+y)<.1&&Math.abs(x+g)<.1&&Math.abs(u+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(u+1)/2,_=(d+1)/2,E=(h+1)/2,A=(f+c)/4,v=(p+y)/4,b=(x+g)/4;return S>_&&S>E?S<.01?(a=0,i=.707106781,s=.707106781):(a=Math.sqrt(S),i=A/a,s=v/a):_>E?_<.01?(a=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),a=A/i,s=b/i):E<.01?(a=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),a=v/s,i=b/s),this.set(a,i,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(p-y)*(p-y)+(c-f)*(c-f));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(p-y)/m,this.z=(c-f)/m,this.w=Math.acos((u+d+h-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Je(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fh=class extends ui{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n),this.textures=[];let i=a.count;for(let s=0;s<i;s++)this.textures[s]=new Pn({width:e,height:n,depth:a.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=a,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let i=Object.assign({},e.textures[n].image);this.textures[n].source=new Ko(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pa=class extends fh{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}},Yu=class extends Pn{constructor(e=null,n=1,a=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},dh=class extends Pn{constructor(e=null,n=1,a=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ft=class t{static{this.prototype.isMatrix4=!0}constructor(e,n,a,i,s,r,o,l,u,f,p,c,d,x,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,i,s,r,o,l,u,f,p,c,d,x,y,g)}set(e,n,a,i,s,r,o,l,u,f,p,c,d,x,y,g){let h=this.elements;return h[0]=e,h[4]=n,h[8]=a,h[12]=i,h[1]=s,h[5]=r,h[9]=o,h[13]=l,h[2]=u,h[6]=f,h[10]=p,h[14]=c,h[3]=d,h[7]=x,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){let n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,a=e.elements,i=1/Eo.setFromMatrixColumn(e,0).length(),s=1/Eo.setFromMatrixColumn(e,1).length(),r=1/Eo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*i,n[1]=a[1]*i,n[2]=a[2]*i,n[3]=0,n[4]=a[4]*s,n[5]=a[5]*s,n[6]=a[6]*s,n[7]=0,n[8]=a[8]*r,n[9]=a[9]*r,n[10]=a[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,a=e.x,i=e.y,s=e.z,r=Math.cos(a),o=Math.sin(a),l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let c=r*f,d=r*p,x=o*f,y=o*p;n[0]=l*f,n[4]=-l*p,n[8]=u,n[1]=d+x*u,n[5]=c-y*u,n[9]=-o*l,n[2]=y-c*u,n[6]=x+d*u,n[10]=r*l}else if(e.order==="YXZ"){let c=l*f,d=l*p,x=u*f,y=u*p;n[0]=c+y*o,n[4]=x*o-d,n[8]=r*u,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-x,n[6]=y+c*o,n[10]=r*l}else if(e.order==="ZXY"){let c=l*f,d=l*p,x=u*f,y=u*p;n[0]=c-y*o,n[4]=-r*p,n[8]=x+d*o,n[1]=d+x*o,n[5]=r*f,n[9]=y-c*o,n[2]=-r*u,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){let c=r*f,d=r*p,x=o*f,y=o*p;n[0]=l*f,n[4]=x*u-d,n[8]=c*u+y,n[1]=l*p,n[5]=y*u+c,n[9]=d*u-x,n[2]=-u,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){let c=r*l,d=r*u,x=o*l,y=o*u;n[0]=l*f,n[4]=y-c*p,n[8]=x*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-u*f,n[6]=d*p+x,n[10]=c-y*p}else if(e.order==="XZY"){let c=r*l,d=r*u,x=o*l,y=o*u;n[0]=l*f,n[4]=-p,n[8]=u*f,n[1]=c*p+y,n[5]=r*f,n[9]=d*p-x,n[2]=x*p-d,n[6]=o*f,n[10]=y*p+c}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(EL,e,AL)}lookAt(e,n,a){let i=this.elements;return da.subVectors(e,n),da.lengthSq()===0&&(da.z=1),da.normalize(),Rs.crossVectors(a,da),Rs.lengthSq()===0&&(Math.abs(a.z)===1?da.x+=1e-4:da.z+=1e-4,da.normalize(),Rs.crossVectors(a,da)),Rs.normalize(),_d.crossVectors(da,Rs),i[0]=Rs.x,i[4]=_d.x,i[8]=da.x,i[1]=Rs.y,i[5]=_d.y,i[9]=da.y,i[2]=Rs.z,i[6]=_d.z,i[10]=da.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let a=e.elements,i=n.elements,s=this.elements,r=a[0],o=a[4],l=a[8],u=a[12],f=a[1],p=a[5],c=a[9],d=a[13],x=a[2],y=a[6],g=a[10],h=a[14],m=a[3],S=a[7],_=a[11],E=a[15],A=i[0],v=i[4],b=i[8],I=i[12],w=i[1],O=i[5],B=i[9],G=i[13],P=i[2],X=i[6],H=i[10],V=i[14],ie=i[3],Y=i[7],ee=i[11],ne=i[15];return s[0]=r*A+o*w+l*P+u*ie,s[4]=r*v+o*O+l*X+u*Y,s[8]=r*b+o*B+l*H+u*ee,s[12]=r*I+o*G+l*V+u*ne,s[1]=f*A+p*w+c*P+d*ie,s[5]=f*v+p*O+c*X+d*Y,s[9]=f*b+p*B+c*H+d*ee,s[13]=f*I+p*G+c*V+d*ne,s[2]=x*A+y*w+g*P+h*ie,s[6]=x*v+y*O+g*X+h*Y,s[10]=x*b+y*B+g*H+h*ee,s[14]=x*I+y*G+g*V+h*ne,s[3]=m*A+S*w+_*P+E*ie,s[7]=m*v+S*O+_*X+E*Y,s[11]=m*b+S*B+_*H+E*ee,s[15]=m*I+S*G+_*V+E*ne,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],a=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],c=e[10],d=e[14],x=e[3],y=e[7],g=e[11],h=e[15],m=l*d-u*c,S=o*d-u*p,_=o*c-l*p,E=r*d-u*f,A=r*c-l*f,v=r*p-o*f;return n*(y*m-g*S+h*_)-a*(x*m-g*E+h*A)+i*(x*S-y*E+h*v)-s*(x*_-y*A+g*v)}determinantAffine(){let e=this.elements,n=e[0],a=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],u=e[6],f=e[10];return n*(r*f-o*u)-a*(s*f-o*l)+i*(s*u-r*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=a),this}invert(){let e=this.elements,n=e[0],a=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],c=e[10],d=e[11],x=e[12],y=e[13],g=e[14],h=e[15],m=n*o-a*r,S=n*l-i*r,_=n*u-s*r,E=a*l-i*o,A=a*u-s*o,v=i*u-s*l,b=f*y-p*x,I=f*g-c*x,w=f*h-d*x,O=p*g-c*y,B=p*h-d*y,G=c*h-d*g,P=m*G-S*B+_*O+E*w-A*I+v*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=(o*G-l*B+u*O)*X,e[1]=(i*B-a*G-s*O)*X,e[2]=(y*v-g*A+h*E)*X,e[3]=(c*A-p*v-d*E)*X,e[4]=(l*w-r*G-u*I)*X,e[5]=(n*G-i*w+s*I)*X,e[6]=(g*_-x*v-h*S)*X,e[7]=(f*v-c*_+d*S)*X,e[8]=(r*B-o*w+u*b)*X,e[9]=(a*w-n*B-s*b)*X,e[10]=(x*A-y*_+h*m)*X,e[11]=(p*_-f*A-d*m)*X,e[12]=(o*I-r*O-l*b)*X,e[13]=(n*O-a*I+i*b)*X,e[14]=(y*S-x*E-g*m)*X,e[15]=(f*E-p*S+c*m)*X,this}scale(e){let n=this.elements,a=e.x,i=e.y,s=e.z;return n[0]*=a,n[4]*=i,n[8]*=s,n[1]*=a,n[5]*=i,n[9]*=s,n[2]*=a,n[6]*=i,n[10]*=s,n[3]*=a,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,i))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let a=Math.cos(n),i=Math.sin(n),s=1-a,r=e.x,o=e.y,l=e.z,u=s*r,f=s*o;return this.set(u*r+a,u*o-i*l,u*l+i*o,0,u*o+i*l,f*o+a,f*l-i*r,0,u*l-i*o,f*l+i*r,s*l*l+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,i,s,r){return this.set(1,a,s,0,e,1,r,0,n,i,1,0,0,0,0,1),this}compose(e,n,a){let i=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,u=s+s,f=r+r,p=o+o,c=s*u,d=s*f,x=s*p,y=r*f,g=r*p,h=o*p,m=l*u,S=l*f,_=l*p,E=a.x,A=a.y,v=a.z;return i[0]=(1-(y+h))*E,i[1]=(d+_)*E,i[2]=(x-S)*E,i[3]=0,i[4]=(d-_)*A,i[5]=(1-(c+h))*A,i[6]=(g+m)*A,i[7]=0,i[8]=(x+S)*v,i[9]=(g-m)*v,i[10]=(1-(c+y))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,a){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return a.set(1,1,1),n.identity(),this;let r=Eo.set(i[0],i[1],i[2]).length(),o=Eo.set(i[4],i[5],i[6]).length(),l=Eo.set(i[8],i[9],i[10]).length();s<0&&(r=-r),ka.copy(this);let u=1/r,f=1/o,p=1/l;return ka.elements[0]*=u,ka.elements[1]*=u,ka.elements[2]*=u,ka.elements[4]*=f,ka.elements[5]*=f,ka.elements[6]*=f,ka.elements[8]*=p,ka.elements[9]*=p,ka.elements[10]*=p,n.setFromRotationMatrix(ka),a.x=r,a.y=o,a.z=l,this}makePerspective(e,n,a,i,s,r,o=wa,l=!1){let u=this.elements,f=2*s/(n-e),p=2*s/(a-i),c=(n+e)/(n-e),d=(a+i)/(a-i),x,y;if(l)x=s/(r-s),y=r*s/(r-s);else if(o===wa)x=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===Xo)x=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=p,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,a,i,s,r,o=wa,l=!1){let u=this.elements,f=2/(n-e),p=2/(a-i),c=-(n+e)/(n-e),d=-(a+i)/(a-i),x,y;if(l)x=1/(r-s),y=r/(r-s);else if(o===wa)x=-2/(r-s),y=-(r+s)/(r-s);else if(o===Xo)x=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=p,u[9]=0,u[13]=d,u[2]=0,u[6]=0,u[10]=x,u[14]=y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let n=this.elements,a=e.elements;for(let i=0;i<16;i++)if(n[i]!==a[i])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){let a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}},Eo=new R,ka=new ft,EL=new R(0,0,0),AL=new R(1,1,1),Rs=new R,_d=new R,da=new R,Lb=new ft,wb=new ci,fi=class t{constructor(e=0,n=0,a=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,i=this._order){return this._x=e,this._y=n,this._z=a,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],f=i[9],p=i[2],c=i[6],d=i[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Je(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Lb.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lb,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wb.setFromEuler(this),this.setFromQuaternion(wb,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";Qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},CL=0,Ib=new R,Ao=new ci,Gi=new ft,Md=new R,Iu=new R,LL=new R,wL=new ci,Rb=new R(1,0,0),Db=new R(0,1,0),Pb=new R(0,0,1),Ub={type:"added"},IL={type:"removed"},Co={type:"childadded",child:null},Dg={type:"childremoved",child:null},Jt=class t extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CL++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new R,n=new fi,a=new ci,i=new R(1,1,1);function s(){a.setFromEuler(n,!1)}function r(){n.setFromQuaternion(a,void 0,!1)}n._onChange(s),a._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new qe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ao.setFromAxisAngle(e,n),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,n){return Ao.setFromAxisAngle(e,n),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(Rb,e)}rotateY(e){return this.rotateOnAxis(Db,e)}rotateZ(e){return this.rotateOnAxis(Pb,e)}translateOnAxis(e,n){return Ib.copy(e).applyQuaternion(this.quaternion),this.position.add(Ib.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rb,e)}translateY(e){return this.translateOnAxis(Db,e)}translateZ(e){return this.translateOnAxis(Pb,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Md.copy(e):Md.set(e,n,a);let i=this.parent;this.updateWorldMatrix(!0,!1),Iu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Iu,Md,this.up):Gi.lookAt(Md,Iu,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),Ao.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ub),Co.child=e,this.dispatchEvent(Co),Co.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IL),Dg.child=e,this.dispatchEvent(Dg),Dg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ub),Co.child=e,this.dispatchEvent(Co),Co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,i=this.children.length;a<i;a++){let r=this.children[a].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Iu,e,LL),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Iu,wL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,a=e.y,i=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*a-s[8]*i,s[13]+=a-s[1]*n-s[5]*a-s[9]*i,s[14]+=i-s[2]*n-s[6]*a-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let a=0,i=n.length;a<i;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n,a=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,a)}}toJSON(e){let n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(n){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),f=r(e.images),p=r(e.shapes),c=r(e.skeletons),d=r(e.animations),x=r(e.nodes);o.length>0&&(a.geometries=o),l.length>0&&(a.materials=l),u.length>0&&(a.textures=u),f.length>0&&(a.images=f),p.length>0&&(a.shapes=p),c.length>0&&(a.skeletons=c),d.length>0&&(a.animations=d),x.length>0&&(a.nodes=x)}return a.object=i,a;function r(o){let l=[];for(let u in o){let f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){let i=e.children[a];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new R(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;sn=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},RL={type:"move"},jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let y of e.hand.values()){let g=n.getJointPose(y,a),h=this._getHandJoint(u,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],c=f.position.distanceTo(p.position),d=.02,x=.005;u.inputState.pinching&&c>d+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=d-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=n.getPose(e.targetRaySpace,a),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RL)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let a=new sn;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}},W1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},bd={h:0,s:0,l:0};Ge=class{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,a,i=ot.workingColorSpace){return this.r=e,this.g=n,this.b=a,ot.colorSpaceToWorking(this,i),this}setHSL(e,n,a,i=ot.workingColorSpace){if(e=Px(e,1),n=Je(n,0,1),a=Je(a,0,1),n===0)this.r=this.g=this.b=a;else{let s=a<=.5?a*(1+n):a+n-a*n,r=2*a-s;this.r=Pg(r,s,e+1/3),this.g=Pg(r,s,e),this.b=Pg(r,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,n=an){function a(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return a(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return a(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return a(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=an){let a=W1[e.toLowerCase()];return a!==void 0?this.setHex(a,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return ot.workingToColorSpace(Rn.copy(this),e),Math.round(Je(Rn.r*255,0,255))*65536+Math.round(Je(Rn.g*255,0,255))*256+Math.round(Je(Rn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(Rn.copy(this),n);let a=Rn.r,i=Rn.g,s=Rn.b,r=Math.max(a,i,s),o=Math.min(a,i,s),l,u,f=(o+r)/2;if(o===r)l=0,u=0;else{let p=r-o;switch(u=f<=.5?p/(r+o):p/(2-r-o),r){case a:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-a)/p+2;break;case s:l=(a-i)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(Rn.copy(this),n),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=an){ot.workingToColorSpace(Rn.copy(this),e);let n=Rn.r,a=Rn.g,i=Rn.b;return e!==an?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(i*255)})`}offsetHSL(e,n,a){return this.getHSL(Ds),this.setHSL(Ds.h+e,Ds.s+n,Ds.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Ds),e.getHSL(bd);let a=Hu(Ds.h,bd.h,n),i=Hu(Ds.s,bd.s,n),s=Hu(Ds.l,bd.l,n);return this.setHSL(a,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,a=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*a+s[6]*i,this.g=s[1]*n+s[4]*a+s[7]*i,this.b=s[2]*n+s[5]*a+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rn=new Ge;Ge.NAMES=W1;Zu=class t{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new t(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},vr=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ga=new R,Vi=new R,Ug=new R,qi=new R,Lo=new R,wo=new R,Ob=new R,Og=new R,Ng=new R,Bg=new R,Fg=new Bt,zg=new Bt,Hg=new Bt,oi=class t{constructor(e=new R,n=new R,a=new R){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,i){i.subVectors(a,n),Ga.subVectors(e,n),i.cross(Ga);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,a,i,s){Ga.subVectors(i,n),Vi.subVectors(a,n),Ug.subVectors(e,n);let r=Ga.dot(Ga),o=Ga.dot(Vi),l=Ga.dot(Ug),u=Vi.dot(Vi),f=Vi.dot(Ug),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;let c=1/p,d=(u*l-o*f)*c,x=(r*f-o*l)*c;return s.set(1-d-x,x,d)}static containsPoint(e,n,a,i){return this.getBarycoord(e,n,a,i,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,a,i,s,r,o,l){return this.getBarycoord(e,n,a,i,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(r,qi.y),l.addScaledVector(o,qi.z),l)}static getInterpolatedAttribute(e,n,a,i,s,r){return Fg.setScalar(0),zg.setScalar(0),Hg.setScalar(0),Fg.fromBufferAttribute(e,n),zg.fromBufferAttribute(e,a),Hg.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Fg,s.x),r.addScaledVector(zg,s.y),r.addScaledVector(Hg,s.z),r}static isFrontFacing(e,n,a,i){return Ga.subVectors(a,n),Vi.subVectors(e,n),Ga.cross(Vi).dot(i)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,i){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,a,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ga.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),Ga.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,i,s){return t.getInterpolation(e,this.a,this.b,this.c,n,a,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let a=this.a,i=this.b,s=this.c,r,o;Lo.subVectors(i,a),wo.subVectors(s,a),Og.subVectors(e,a);let l=Lo.dot(Og),u=wo.dot(Og);if(l<=0&&u<=0)return n.copy(a);Ng.subVectors(e,i);let f=Lo.dot(Ng),p=wo.dot(Ng);if(f>=0&&p<=f)return n.copy(i);let c=l*p-f*u;if(c<=0&&l>=0&&f<=0&&l-f>0)return r=l/(l-f),n.copy(a).addScaledVector(Lo,r);Bg.subVectors(e,s);let d=Lo.dot(Bg),x=wo.dot(Bg);if(x>=0&&d<=x)return n.copy(s);let y=d*u-l*x;if(y<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(a).addScaledVector(wo,o);let g=f*x-d*p;if(g<=0&&p-f>=0&&d-x>=0)return Ob.subVectors(s,i),o=(p-f)/(p-f+(d-x)),n.copy(i).addScaledVector(Ob,o);let h=1/(g+y+c);return r=y*h,o=c*h,n.copy(a).addScaledVector(Lo,r).addScaledVector(wo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},di=class{constructor(e=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Va.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Va.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let a=Va.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let a=e.geometry;if(a!==void 0){let s=a.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Va):Va.fromBufferAttribute(s,r),Va.applyMatrix4(e.matrixWorld),this.expandByPoint(Va);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Td.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Td.copy(a.boundingBox)),Td.applyMatrix4(e.matrixWorld),this.union(Td)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Va),Va.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ru),Ed.subVectors(this.max,Ru),Io.subVectors(e.a,Ru),Ro.subVectors(e.b,Ru),Do.subVectors(e.c,Ru),Ps.subVectors(Ro,Io),Us.subVectors(Do,Ro),dr.subVectors(Io,Do);let n=[0,-Ps.z,Ps.y,0,-Us.z,Us.y,0,-dr.z,dr.y,Ps.z,0,-Ps.x,Us.z,0,-Us.x,dr.z,0,-dr.x,-Ps.y,Ps.x,0,-Us.y,Us.x,0,-dr.y,dr.x,0];return!kg(n,Io,Ro,Do,Ed)||(n=[1,0,0,0,1,0,0,0,1],!kg(n,Io,Ro,Do,Ed))?!1:(Ad.crossVectors(Ps,Us),n=[Ad.x,Ad.y,Ad.z],kg(n,Io,Ro,Do,Ed))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Va).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Va).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new R,new R,new R,new R,new R,new R,new R,new R],Va=new R,Td=new di,Io=new R,Ro=new R,Do=new R,Ps=new R,Us=new R,dr=new R,Ru=new R,Ed=new R,Ad=new R,hr=new R;nn=new R,Cd=new xe,DL=0,Vt=class extends ui{constructor(e,n,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DL++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Rx,this.updateRanges=[],this.gpuType=Ua,this.version=0,this._normalizationScale=e!==void 0?Cp(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[a+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Cd.fromBufferAttribute(this,n),Cd.applyMatrix3(e),this.setXY(n,Cd.x,Cd.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=this._denormalize(a)),a}setComponent(e,n,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),a=this._normalize(a)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),a=this._normalize(a),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=i,this}setXYZW(e,n,a,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),a=this._normalize(a),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Ox(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Nx(e,this.array)}},Ju=class extends Vt{constructor(e,n,a){super(new Uint16Array(e),n,a)}},Ku=class extends Vt{constructor(e,n,a){super(new Uint32Array(e),n,a)}},et=class extends Vt{constructor(e,n,a){super(new Float32Array(e),n,a)}},PL=new di,Du=new R,Gg=new R,hi=class{constructor(e=new R,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let a=this.center;n!==void 0?a.copy(n):PL.setFromPoints(e).getCenter(a);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,a.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Du.subVectors(e,this.center);let n=Du.lengthSq();if(n>this.radius*this.radius){let a=Math.sqrt(n),i=(a-this.radius)*.5;this.center.addScaledVector(Du,i/a),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Du.copy(e.center).add(Gg)),this.expandByPoint(Du.copy(e.center).sub(Gg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},UL=0,La=new ft,Vg=new Jt,Po=new R,ha=new di,Pu=new di,xn=new R,Lt=class t extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UL++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sL(e)?Ku:Ju)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let a=this.attributes.normal;if(a!==void 0){let s=new qe().getNormalMatrix(e);a.applyNormalMatrix(s),a.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return La.makeRotationFromQuaternion(e),this.applyMatrix4(La),this}rotateX(e){return La.makeRotationX(e),this.applyMatrix4(La),this}rotateY(e){return La.makeRotationY(e),this.applyMatrix4(La),this}rotateZ(e){return La.makeRotationZ(e),this.applyMatrix4(La),this}translate(e,n,a){return La.makeTranslation(e,n,a),this.applyMatrix4(La),this}scale(e,n,a){return La.makeScale(e,n,a),this.applyMatrix4(La),this}lookAt(e){return Vg.lookAt(e),Vg.updateMatrix(),this.applyMatrix4(Vg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let a=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];a.push(r.x,r.y,r.z||0)}this.setAttribute("position",new et(a,3))}else{let a=Math.min(e.length,n.count);for(let i=0;i<a;i++){let s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,i=n.length;a<i;a++){let s=n[a];ha.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ha.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ha.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ha.min),this.boundingBox.expandByPoint(ha.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let a=this.boundingSphere.center;if(ha.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){let o=n[s];Pu.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(ha.min,Pu.min),ha.expandByPoint(xn),xn.addVectors(ha.max,Pu.max),ha.expandByPoint(xn)):(ha.expandByPoint(Pu.min),ha.expandByPoint(Pu.max))}ha.getCenter(a);let i=0;for(let s=0,r=e.count;s<r;s++)xn.fromBufferAttribute(e,s),i=Math.max(i,a.distanceToSquared(xn));if(n)for(let s=0,r=n.length;s<r;s++){let o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)xn.fromBufferAttribute(o,u),l&&(Po.fromBufferAttribute(e,u),xn.add(Po)),i=Math.max(i,a.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let a=n.position,i=n.normal,s=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==a.count)&&(r=new Vt(new Float32Array(4*a.count),4),this.setAttribute("tangent",r));let o=[],l=[],u=new Uint8Array(a.count);for(let I=0;I<a.count;I++)o[I]=new R,l[I]=new R;let f=new R,p=new R,c=new R,d=new xe,x=new xe,y=new xe,g=new R,h=new R;function m(I,w,O){u[I]=u[w]=u[O]=1,f.fromBufferAttribute(a,I),p.fromBufferAttribute(a,w),c.fromBufferAttribute(a,O),d.fromBufferAttribute(s,I),x.fromBufferAttribute(s,w),y.fromBufferAttribute(s,O),p.sub(f),c.sub(f),x.sub(d),y.sub(d);let B=1/(x.x*y.y-y.x*x.y);isFinite(B)&&(g.copy(p).multiplyScalar(y.y).addScaledVector(c,-x.y).multiplyScalar(B),h.copy(c).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(B),o[I].add(g),o[w].add(g),o[O].add(g),l[I].add(h),l[w].add(h),l[O].add(h))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,w=S.length;I<w;++I){let O=S[I],B=O.start,G=O.count;for(let P=B,X=B+G;P<X;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let _=new R,E=new R,A=new R,v=new R;function b(I){A.fromBufferAttribute(i,I),v.copy(A);let w=o[I];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),E.crossVectors(v,w);let B=E.dot(l[I])<0?-1:1;r.setXYZW(I,_.x,_.y,_.z,B)}for(let I=0,w=a.count;I<w;++I)u[I]&&b(I);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new Vt(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let c=0,d=a.count;c<d;c++)a.setXYZ(c,0,0,0);let i=new R,s=new R,r=new R,o=new R,l=new R,u=new R,f=new R,p=new R;if(e)for(let c=0,d=e.count;c<d;c+=3){let x=e.getX(c+0),y=e.getX(c+1),g=e.getX(c+2);i.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,g),f.subVectors(r,s),p.subVectors(i,s),f.cross(p),o.fromBufferAttribute(a,x),l.fromBufferAttribute(a,y),u.fromBufferAttribute(a,g),o.add(f),l.add(f),u.add(f),a.setXYZ(x,o.x,o.y,o.z),a.setXYZ(y,l.x,l.y,l.z),a.setXYZ(g,u.x,u.y,u.z)}else for(let c=0,d=n.count;c<d;c+=3)i.fromBufferAttribute(n,c+0),s.fromBufferAttribute(n,c+1),r.fromBufferAttribute(n,c+2),f.subVectors(r,s),p.subVectors(i,s),f.cross(p),a.setXYZ(c+0,f.x,f.y,f.z),a.setXYZ(c+1,f.x,f.y,f.z),a.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)xn.fromBufferAttribute(e,n),xn.normalize(),e.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,l){let u=o.array,f=o.itemSize,p=o.normalized,c=new u.constructor(l.length*f),d=0,x=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*f;for(let h=0;h<f;h++)c[x++]=u[d++]}return new Vt(c,f,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,a=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,a);n.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let f=0,p=u.length;f<p;f++){let c=u[f],d=e(c,a);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let a=this.attributes;for(let l in a){let u=a[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],f=[];for(let p=0,c=u.length;p<c;p++){let d=u[p];f.push(d.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let a=e.index;a!==null&&this.setIndex(a.clone());let i=e.attributes;for(let u in i){let f=i[u];this.setAttribute(u,f.clone(n))}let s=e.morphAttributes;for(let u in s){let f=[],p=s[u];for(let c=0,d=p.length;c<d;c++)f.push(p[c].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,f=r.length;u<f;u++){let p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Rx,this.updateRanges=[],this.version=0,this.uuid=ks()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,a){e*=this.stride,a*=n.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=n.array[a+i];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=Nb(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);let a=new this.array.constructor(e.arrayBuffers[n]),i=new this.constructor(a,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=Nb(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let a={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return a.usage=this.usage,a}};Hn=new R,Qu=class t{constructor(e,n,a,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=a,this.normalized=i,this._normalizationScale=e!==void 0?Cp(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,a=this.data.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.applyMatrix4(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.applyNormalMatrix(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Hn.fromBufferAttribute(this,n),Hn.transformDirection(e),this.setXYZ(n,Hn.x,Hn.y,Hn.z);return this}getComponent(e,n){let a=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(a=this._denormalize(a)),a}setComponent(e,n,a){return this.normalized&&(a=this._normalize(a)),this.data.array[e*this.data.stride+this.offset+n]=a,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),a=this._normalize(a)),this.data.array[e+0]=n,this.data.array[e+1]=a,this}setXYZ(e,n,a,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),a=this._normalize(a),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=i,this}setXYZW(e,n,a,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),a=this._normalize(a),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=a,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Xu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let a=0;a<this.count;a++){let i=a*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[i+s])}return new Vt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let a=0;a<this.count;a++){let i=a*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Ox(e,this.data.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Nx(e,this.data.array)}},qg=new R,OL=new R,NL=new qe,qa=class{constructor(e=new R(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,i){return this.normal.set(e,n,a),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){let i=qg.subVectors(a,n).cross(OL.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,a=!0){let i=e.delta(qg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return a===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let a=n||NL.getNormalMatrix(e),i=this.coplanarPoint(qg).applyMatrix4(e),s=this.normal.applyMatrix3(a).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},BL=0,Ia=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BL++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=fl,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hx,this.blendDst=px,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$d,this.stencilZFail=$d,this.stencilZPass=$d,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let a=e[n];if(a===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}let i=this[n];if(i===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(a):i&&i.isVector2&&a&&a.isVector2||i&&i.isEuler&&a&&a.isEuler||i&&i.isVector3&&a&&a.isVector3?i.copy(a):this[n]=a}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(a.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(a.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(a.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(a.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(n){let s=i(e.textures),r=i(e.images);s.length>0&&(a.textures=s),r.length>0&&(a.images=r)}return a}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new qa().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new xe().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,a=null;if(n!==null){let i=n.length;a=new Array(i);for(let s=0;s!==i;++s)a[s]=n[s].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$o=class extends Ia{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uu=new R,Oo=new R,No=new R,Bo=new xe,Ou=new xe,X1=new ft,Ld=new R,Nu=new R,wd=new R,Bb=new xe,Wg=new xe,Fb=new xe,ju=class extends Jt{constructor(e=new $o){if(super(),this.isSprite=!0,this.type="Sprite",Uo===void 0){Uo=new Lt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new hh(n,5);Uo.setIndex([0,1,2,0,2,3]),Uo.setAttribute("position",new Qu(a,3,0,!1)),Uo.setAttribute("uv",new Qu(a,2,3,!1))}this.geometry=Uo,this.material=e,this.center=new xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oo.setFromMatrixScale(this.matrixWorld),X1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),No.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oo.multiplyScalar(-No.z);let a=this.material.rotation,i,s;a!==0&&(s=Math.cos(a),i=Math.sin(a));let r=this.center;Id(Ld.set(-.5,-.5,0),No,r,Oo,i,s),Id(Nu.set(.5,-.5,0),No,r,Oo,i,s),Id(wd.set(.5,.5,0),No,r,Oo,i,s),Bb.set(0,0),Wg.set(1,0),Fb.set(1,1);let o=e.ray.intersectTriangle(Ld,Nu,wd,!1,Uu);if(o===null&&(Id(Nu.set(-.5,.5,0),No,r,Oo,i,s),Wg.set(0,1),o=e.ray.intersectTriangle(Ld,wd,Nu,!1,Uu),o===null))return;let l=e.ray.origin.distanceTo(Uu);l<e.near||l>e.far||n.push({distance:l,point:Uu.clone(),uv:oi.getInterpolation(Uu,Ld,Nu,wd,Bb,Wg,Fb,new xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let n=super.toJSON(e);return n.object.center=this.center.toArray(),n}};Xi=new R,Xg=new R,Rd=new R,Dd=new R,yr=class{constructor(e=new R,n=new R(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,a,i){Xg.copy(e).add(n).multiplyScalar(.5),Rd.copy(n).sub(e).normalize(),Dd.copy(this.origin).sub(Xg);let s=e.distanceTo(n)*.5,r=-this.direction.dot(Rd),o=Dd.dot(this.direction),l=-Dd.dot(Rd),u=Dd.lengthSq(),f=Math.abs(1-r*r),p,c,d,x;if(f>0)if(p=r*l-o,c=r*o-l,x=s*f,p>=0)if(c>=-x)if(c<=x){let y=1/f;p*=y,c*=y,d=p*(p+r*c+2*o)+c*(r*p+c+2*l)+u}else c=s,p=Math.max(0,-(r*c+o)),d=-p*p+c*(c+2*l)+u;else c=-s,p=Math.max(0,-(r*c+o)),d=-p*p+c*(c+2*l)+u;else c<=-x?(p=Math.max(0,-(-r*s+o)),c=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+c*(c+2*l)+u):c<=x?(p=0,c=Math.min(Math.max(-s,-l),s),d=c*(c+2*l)+u):(p=Math.max(0,-(r*s+o)),c=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+c*(c+2*l)+u);else c=r>0?-s:s,p=Math.max(0,-(r*c+o)),d=-p*p+c*(c+2*l)+u;return a&&a.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Xg).addScaledVector(Rd,c),d}intersectSphere(e,n){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let a=Xi.dot(this.direction),i=Xi.dot(Xi)-a*a,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=a-r,l=a+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){let a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,i,s,r,o,l,u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,c=this.origin;return u>=0?(a=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(a=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),f>=0?(s=(e.min.y-c.y)*f,r=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,r=(e.min.y-c.y)*f),a>r||s>i||((s>a||isNaN(a))&&(a=s),(r<i||isNaN(i))&&(i=r),p>=0?(o=(e.min.z-c.z)*p,l=(e.max.z-c.z)*p):(o=(e.max.z-c.z)*p,l=(e.min.z-c.z)*p),a>l||o>i)||((o>a||a!==a)&&(a=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(a>=0?a:i,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,a,i,s){let r=this.origin,o=this.direction,l=o.x,u=o.y,f=o.z,p=e.x-r.x,c=e.y-r.y,d=e.z-r.z,x=n.x-r.x,y=n.y-r.y,g=n.z-r.z,h=a.x-r.x,m=a.y-r.y,S=a.z-r.z,_=Math.abs(l),E=Math.abs(u),A=Math.abs(f),v,b,I,w,O,B,G,P,X,H,V,ie;if(_>=E&&_>=A?(I=l,B=p,X=x,ie=h,l>=0?(v=u,b=f,w=c,O=d,G=y,P=g,H=m,V=S):(v=f,b=u,w=d,O=c,G=g,P=y,H=S,V=m)):E>=A?(I=u,B=c,X=y,ie=m,u>=0?(v=f,b=l,w=d,O=p,G=g,P=x,H=S,V=h):(v=l,b=f,w=p,O=d,G=x,P=g,H=h,V=S)):(I=f,B=d,X=g,ie=S,f>=0?(v=l,b=u,w=p,O=c,G=x,P=y,H=h,V=m):(v=u,b=l,w=c,O=p,G=y,P=x,H=m,V=h)),I===0)return null;let Y=v/I,ee=b/I,ne=1/I,Te=w-Y*B,Be=O-ee*B,K=G-Y*X,me=P-ee*X,_e=H-Y*ie,Pe=V-ee*ie,ve=_e*me-Pe*K,Ve=Te*Pe-Be*_e,Ut=K*Be-me*Te;if(i){if(ve<0||Ve<0||Ut<0)return null}else if((ve<0||Ve<0||Ut<0)&&(ve>0||Ve>0||Ut>0))return null;let Ne=ve+Ve+Ut;if(Ne===0)return null;let ut=ne*(ve*B+Ve*X+Ut*ie);return(Ne>0?ut<0:ut>0)?null:this.at(ut/Ne,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wa=class extends Ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zb=new ft,pr=new yr,Pd=new hi,Hb=new R,Ud=new R,Od=new R,Nd=new R,Yg=new R,Bd=new R,kb=new R,Fd=new R,Le=class extends Jt{constructor(e=new Lt,n=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){let i=n[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){let a=this.geometry,i=a.attributes.position,s=a.morphAttributes.position,r=a.morphTargetsRelative;n.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Bd.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let f=o[l],p=s[l];f!==0&&(Yg.fromBufferAttribute(p,e),r?Bd.addScaledVector(Yg,f):Bd.addScaledVector(Yg.sub(n),f))}n.add(Bd)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let a=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pd.copy(a.boundingSphere),Pd.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(Pd.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Pd,Hb)===null||pr.origin.distanceToSquared(Hb)>(e.far-e.near)**2))&&(zb.copy(s).invert(),pr.copy(e.ray).applyMatrix4(zb),!(a.boundingBox!==null&&pr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,a){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,c=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,y=c.length;x<y;x++){let g=c[x],h=r[g.materialIndex],m=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=m,E=S;_<E;_+=3){let A=o.getX(_),v=o.getX(_+1),b=o.getX(_+2);i=zd(this,h,e,a,u,f,p,A,v,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{let x=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let g=x,h=y;g<h;g+=3){let m=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);i=zd(this,r,e,a,u,f,p,m,S,_),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,y=c.length;x<y;x++){let g=c[x],h=r[g.materialIndex],m=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=m,E=S;_<E;_+=3){let A=_,v=_+1,b=_+2;i=zd(this,h,e,a,u,f,p,A,v,b),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{let x=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=x,h=y;g<h;g+=3){let m=g,S=g+1,_=g+2;i=zd(this,r,e,a,u,f,p,m,S,_),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}};$u=class extends Pn{constructor(e=null,n=1,a=1,i,s,r,o,l,u=vn,f=vn,p,c){super(null,r,o,l,u,f,i,s,p,c),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ec=class extends Vt{constructor(e,n,a,i=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fo=new ft,Gb=new ft,Hd=[],Vb=new di,zL=new ft,Bu=new Le,Fu=new hi,tc=class extends Le{constructor(e,n,a){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<a;i++)this.setMatrixAt(i,zL)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Fo),Vb.copy(e.boundingBox).applyMatrix4(Fo),this.boundingBox.union(Vb)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Fo),Fu.copy(e.boundingSphere).applyMatrix4(Fo),this.boundingSphere.union(Fu)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let a=n.morphTargetInfluences,i=this.morphTexture.source.data.data,s=a.length+1,r=e*s+1;for(let o=0;o<a.length;o++)a[o]=i[r+o]}raycast(e,n){let a=this.matrixWorld,i=this.count;if(Bu.geometry=this.geometry,Bu.material=this.material,Bu.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fu.copy(this.boundingSphere),Fu.applyMatrix4(a),e.ray.intersectsSphere(Fu)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fo),Gb.multiplyMatrices(a,Fo),Bu.matrixWorld=Gb,Bu.raycast(e,Hd);for(let r=0,o=Hd.length;r<o;r++){let l=Hd[r];l.instanceId=s,l.object=this,n.push(l)}Hd.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let a=n.morphTargetInfluences,i=a.length+1;this.morphTexture===null&&(this.morphTexture=new $u(new Float32Array(i*this.count),i,this.count,Yh,Ua));let s=this.morphTexture.source.data.data,r=0;for(let u=0;u<a.length;u++)r+=a[u];let o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;return s[l]=o,s.set(a,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mr=new hi,HL=new xe(.5,.5),kd=new R,Ns=class{constructor(e=new qa,n=new qa,a=new qa,i=new qa,s=new qa,r=new qa){this.planes=[e,n,a,i,s,r]}set(e,n,a,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(a),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=wa,a=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],u=s[3],f=s[4],p=s[5],c=s[6],d=s[7],x=s[8],y=s[9],g=s[10],h=s[11],m=s[12],S=s[13],_=s[14],E=s[15];if(i[0].setComponents(u-r,d-f,h-x,E-m).normalize(),i[1].setComponents(u+r,d+f,h+x,E+m).normalize(),i[2].setComponents(u+o,d+p,h+y,E+S).normalize(),i[3].setComponents(u-o,d-p,h-y,E-S).normalize(),a)i[4].setComponents(l,c,g,_).normalize(),i[5].setComponents(u-l,d-c,h-g,E-_).normalize();else if(i[4].setComponents(u-l,d-c,h-g,E-_).normalize(),n===wa)i[5].setComponents(u+l,d+c,h+g,E+_).normalize();else if(n===Xo)i[5].setComponents(l,c,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);let n=HL.distanceTo(e.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let n=this.planes,a=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(a)<i)return!1;return!0}intersectsBox(e){let n=this.planes;for(let a=0;a<6;a++){let i=n[a];if(kd.x=i.normal.x>0?e.max.x:e.min.x,kd.y=i.normal.y>0?e.max.y:e.min.y,kd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kd)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qb=new ft,ph=class t{constructor(){this.coordinateSystem=wa,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,a=this._frustums;for(let i=0;i<n.length;i++){let s=n[i];qb.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),a[i]===void 0&&(a[i]=new Ns),a[i].setFromProjectionMatrix(qb,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let a=0;a<this._count;a++)if(n[a].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let a=0;a<this._count;a++)if(n[a].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let a=0;a<this._count;a++)if(n[a].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let a=0;a<this._count;a++)if(n[a].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let a=0;a<this._count;a++)if(n[a].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,a=e._frustums;for(let i=0;i<e._count;i++)n[i]===void 0&&(n[i]=new Ns),n[i].copy(a[i]);return this._count=e._count,this}clone(){return new t().copy(this)}},Sr=class extends Ia{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mh=new R,gh=new R,Wb=new ft,zu=new yr,Gd=new hi,Zg=new R,Xb=new R,xh=class extends Jt{constructor(e=new Lt,n=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,a=[0];for(let i=1,s=n.count;i<s;i++)mh.fromBufferAttribute(n,i-1),gh.fromBufferAttribute(n,i),a[i]=a[i-1],a[i]+=mh.distanceTo(gh);e.setAttribute("lineDistance",new et(a,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let a=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Gd.copy(a.boundingSphere),Gd.applyMatrix4(i),Gd.radius+=s,e.ray.intersectsSphere(Gd)===!1)return;Wb.copy(i).invert(),zu.copy(e.ray).applyMatrix4(Wb);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,f=a.index,c=a.attributes.position;if(f!==null){let d=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let y=d,g=x-1;y<g;y+=u){let h=f.getX(y),m=f.getX(y+1),S=Vd(this,e,zu,l,h,m,y);S&&n.push(S)}if(this.isLineLoop){let y=f.getX(x-1),g=f.getX(d),h=Vd(this,e,zu,l,y,g,x-1);h&&n.push(h)}}else{let d=Math.max(0,r.start),x=Math.min(c.count,r.start+r.count);for(let y=d,g=x-1;y<g;y+=u){let h=Vd(this,e,zu,l,y,y+1,y);h&&n.push(h)}if(this.isLineLoop){let y=Vd(this,e,zu,l,x-1,d,x-1);y&&n.push(y)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){let i=n[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};Yb=new R,Zb=new R,el=class extends xh{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,a=[];for(let i=0,s=n.count;i<s;i+=2)Yb.fromBufferAttribute(n,i),Zb.fromBufferAttribute(n,i+1),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+Yb.distanceTo(Zb);e.setAttribute("lineDistance",new et(a,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},tl=class extends Ia{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jb=new ft,ix=new yr,qd=new hi,Wd=new R,nl=class extends Jt{constructor(e=new Lt,n=new tl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let a=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qd.copy(a.boundingSphere),qd.applyMatrix4(i),qd.radius+=s,e.ray.intersectsSphere(qd)===!1)return;Jb.copy(i).invert(),ix.copy(e.ray).applyMatrix4(Jb);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=a.index,p=a.attributes.position;if(u!==null){let c=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let x=c,y=d;x<y;x++){let g=u.getX(x);Wd.fromBufferAttribute(p,g),Kb(Wd,g,l,i,e,n,this)}}else{let c=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let x=c,y=d;x<y;x++)Wd.fromBufferAttribute(p,x),Kb(Wd,x,l,i,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){let i=n[a[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};nc=class extends Pn{constructor(e=[],n=Tr,a,i,s,r,o,l,u,f){super(e,n,a,i,s,r,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ac=class extends Pn{constructor(e,n,a,i,s,r,o,l,u){super(e,n,a,i,s,r,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ji=class extends Pn{constructor(e,n,a=Za,i,s,r,o=vn,l=vn,u,f=Zi,p=1){if(f!==Zi&&f!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:n,depth:p};super(c,i,s,r,o,l,f,a,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},ic=class extends Ji{constructor(e,n=Za,a=Tr,i,s,r=vn,o=vn,l,u=Zi){let f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,n,a,i,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sc=class extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ra=class t extends Lt{constructor(e=1,n=1,a=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],u=[],f=[],p=[],c=0,d=0;x("z","y","x",-1,-1,a,n,e,r,s,0),x("z","y","x",1,-1,a,n,-e,r,s,1),x("x","z","y",1,1,e,a,n,i,r,2),x("x","z","y",1,-1,e,a,-n,i,r,3),x("x","y","z",1,-1,e,n,a,i,s,4),x("x","y","z",-1,-1,e,n,-a,i,s,5),this.setIndex(l),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2));function x(y,g,h,m,S,_,E,A,v,b,I){let w=_/v,O=E/b,B=_/2,G=E/2,P=A/2,X=v+1,H=b+1,V=0,ie=0,Y=new R;for(let ee=0;ee<H;ee++){let ne=ee*O-G;for(let Te=0;Te<X;Te++){let Be=Te*w-B;Y[y]=Be*m,Y[g]=ne*S,Y[h]=P,u.push(Y.x,Y.y,Y.z),Y[y]=0,Y[g]=0,Y[h]=A>0?1:-1,f.push(Y.x,Y.y,Y.z),p.push(Te/v),p.push(1-ee/b),V+=1}}for(let ee=0;ee<b;ee++)for(let ne=0;ne<v;ne++){let Te=c+ne+X*ee,Be=c+ne+X*(ee+1),K=c+(ne+1)+X*(ee+1),me=c+(ne+1)+X*ee;l.push(Te,Be,me),l.push(Be,K,me),ie+=6}o.addGroup(d,ie,I),d+=ie,c+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},al=class t extends Lt{constructor(e=1,n=1,a=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:a,radialSegments:i,heightSegments:s},n=Math.max(0,n),a=Math.max(1,Math.floor(a)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],o=[],l=[],u=[],f=n/2,p=Math.PI/2*e,c=n,d=2*p+c,x=a*2+s,y=i+1,g=new R,h=new R;for(let m=0;m<=x;m++){let S=0,_=0,E=0,A=0;if(m<=a){let I=m/a,w=I*Math.PI/2;_=-f-e*Math.cos(w),E=e*Math.sin(w),A=-e*Math.cos(w),S=I*p}else if(m<=a+s){let I=(m-a)/s;_=-f+I*n,E=e,A=0,S=p+I*c}else{let I=(m-a-s)/a,w=I*Math.PI/2;_=f+e*Math.sin(w),E=e*Math.cos(w),A=e*Math.sin(w),S=p+c+I*p}let v=Math.max(0,Math.min(1,S/d)),b=0;m===0?b=.5/i:m===x&&(b=-.5/i);for(let I=0;I<=i;I++){let w=I/i,O=w*Math.PI*2,B=Math.sin(O),G=Math.cos(O);h.x=-E*G,h.y=_,h.z=E*B,o.push(h.x,h.y,h.z),g.set(-E*G,A,E*B),g.normalize(),l.push(g.x,g.y,g.z),u.push(w+b,v)}if(m>0){let I=(m-1)*y;for(let w=0;w<i;w++){let O=I+w,B=I+w+1,G=m*y+w,P=m*y+w+1;r.push(O,B,G),r.push(B,P,G)}}}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},il=class t extends Lt{constructor(e=1,n=32,a=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:a,thetaLength:i},n=Math.max(3,n);let s=[],r=[],o=[],l=[],u=new R,f=new xe;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,c=3;p<=n;p++,c+=3){let d=a+p/n*i;u.x=e*Math.cos(d),u.y=e*Math.sin(d),r.push(u.x,u.y,u.z),o.push(0,0,1),f.x=(r[c]/e+1)/2,f.y=(r[c+1]/e+1)/2,l.push(f.x,f.y)}for(let p=1;p<=n;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qn=class t extends Lt{constructor(e=1,n=1,a=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:a,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let u=this;i=Math.floor(i),s=Math.floor(s);let f=[],p=[],c=[],d=[],x=0,y=[],g=a/2,h=0;m(),r===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(d,2));function m(){let _=new R,E=new R,A=0,v=(n-e)/a;for(let b=0;b<=s;b++){let I=[],w=b/s,O=w*(n-e)+e;for(let B=0;B<=i;B++){let G=B/i,P=G*l+o,X=Math.sin(P),H=Math.cos(P);E.x=O*X,E.y=-w*a+g,E.z=O*H,p.push(E.x,E.y,E.z),_.set(X,v,H).normalize(),c.push(_.x,_.y,_.z),d.push(G,1-w),I.push(x++)}y.push(I)}for(let b=0;b<i;b++)for(let I=0;I<s;I++){let w=y[I][b],O=y[I+1][b],B=y[I+1][b+1],G=y[I][b+1];(e>0||I!==0)&&(f.push(w,O,G),A+=3),(n>0||I!==s-1)&&(f.push(O,B,G),A+=3)}u.addGroup(h,A,0),h+=A}function S(_){let E=x,A=new xe,v=new R,b=0,I=_===!0?e:n,w=_===!0?1:-1;for(let B=1;B<=i;B++)p.push(0,g*w,0),c.push(0,w,0),d.push(.5,.5),x++;let O=x;for(let B=0;B<=i;B++){let P=B/i*l+o,X=Math.cos(P),H=Math.sin(P);v.x=I*H,v.y=g*w,v.z=I*X,p.push(v.x,v.y,v.z),c.push(0,w,0),A.x=X*.5+.5,A.y=H*.5*w+.5,d.push(A.x,A.y),x++}for(let B=0;B<i;B++){let G=E+B,P=O+B;_===!0?f.push(P,P+1,G):f.push(P+1,P,G),b+=3}u.addGroup(h,b,_===!0?1:2),h+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xd=new R,Yd=new R,Jg=new R,Zd=new oi,rc=class extends Lt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){let i=Math.pow(10,4),s=Math.cos(Vo*n),r=e.getIndex(),o=e.getAttribute("position"),l=r?r.count:o.count,u=[0,0,0],f=["a","b","c"],p=new Array(3),c=new Map,d=[];for(let x=0;x<l;x+=3){r?(u[0]=r.getX(x),u[1]=r.getX(x+1),u[2]=r.getX(x+2)):(u[0]=x,u[1]=x+1,u[2]=x+2);let{a:y,b:g,c:h}=Zd;if(y.fromBufferAttribute(o,u[0]),g.fromBufferAttribute(o,u[1]),h.fromBufferAttribute(o,u[2]),Zd.getNormal(Jg),p[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,p[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,p[2]=`${Math.round(h.x*i)},${Math.round(h.y*i)},${Math.round(h.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let m=0;m<3;m++){let S=(m+1)%3,_=p[m],E=p[S],A=Zd[f[m]],v=Zd[f[S]],b=`${_}_${E}`,I=`${E}_${_}`,w=c.get(I);w?(Jg.dot(w.normal)<=s&&(d.push(A.x,A.y,A.z),d.push(v.x,v.y,v.z)),c.set(I,null)):c.has(b)||c.set(b,{index0:u[m],index1:u[S],normal:Jg.clone()})}}for(let x of c.values())if(x){let{index0:y,index1:g}=x;Xd.fromBufferAttribute(o,y),Yd.fromBufferAttribute(o,g),d.push(Xd.x,Xd.y,Xd.z),d.push(Yd.x,Yd.y,Yd.z)}this.setAttribute("position",new et(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Da=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,n){let a=this.getUtoTmapping(e);return this.getPoint(a,n)}getPoints(e=5){let n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return n}getSpacedPoints(e=5){let n=[];for(let a=0;a<=e;a++)n.push(this.getPointAt(a/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],a,i=this.getPoint(0),s=0;n.push(0);for(let r=1;r<=e;r++)a=this.getPoint(r/e),s+=a.distanceTo(i),n.push(s),i=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let a=this.getLengths(),i=0,s=a.length,r;n?r=n:r=e*a[s-1];let o=0,l=s-1,u;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),u=a[i]-r,u<0)o=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,a[i]===r)return i/(s-1);let f=a[i],c=a[i+1]-f,d=(r-f)/c;return(i+d)/(s-1)}getTangent(e,n){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),o=this.getPoint(s),l=n||(r.isVector2?new xe:new R);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,n){let a=this.getUtoTmapping(e);return this.getTangent(a,n)}computeFrenetFrames(e,n=!1){let a=new R,i=[],s=[],r=[],o=new R,l=new ft;for(let d=0;d<=e;d++){let x=d/e;i[d]=this.getTangentAt(x,new R)}s[0]=new R,r[0]=new R;let u=Number.MAX_VALUE,f=Math.abs(i[0].x),p=Math.abs(i[0].y),c=Math.abs(i[0].z);f<=u&&(u=f,a.set(1,0,0)),p<=u&&(u=p,a.set(0,1,0)),c<=u&&a.set(0,0,1),o.crossVectors(i[0],a).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Je(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,x))}r[d].crossVectors(i[d],s[d])}if(n===!0){let d=Math.acos(Je(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(i[x],d*x)),r[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},oc=class extends Da{constructor(e=0,n=0,a=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=a,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new xe){let a=n,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),c=l-this.aX,d=u-this.aY;l=c*f-d*p+this.aX,u=c*p+d*f+this.aY}return a.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vh=class extends oc{constructor(e,n,a,i,s,r){super(e,n,a,a,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};Qb=new R,jb=new R,Kg=new Bx,Qg=new Bx,jg=new Bx,Ki=class extends Da{constructor(e=[],n=!1,a="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=a,this.tension=i}getPoint(e,n=new R){let a=n,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,f;this.closed||o>0?u=i[(o-1)%s]:(jb.subVectors(i[0],i[1]).add(i[0]),u=jb);let p=i[o%s],c=i[(o+1)%s];if(this.closed||o+2<s?f=i[(o+2)%s]:(Qb.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=Qb),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(u.distanceToSquared(p),d),y=Math.pow(p.distanceToSquared(c),d),g=Math.pow(c.distanceToSquared(f),d);y<1e-4&&(y=1),x<1e-4&&(x=y),g<1e-4&&(g=y),Kg.initNonuniformCatmullRom(u.x,p.x,c.x,f.x,x,y,g),Qg.initNonuniformCatmullRom(u.y,p.y,c.y,f.y,x,y,g),jg.initNonuniformCatmullRom(u.z,p.z,c.z,f.z,x,y,g)}else this.curveType==="catmullrom"&&(Kg.initCatmullRom(u.x,p.x,c.x,f.x,this.tension),Qg.initCatmullRom(u.y,p.y,c.y,f.y,this.tension),jg.initCatmullRom(u.z,p.z,c.z,f.z,this.tension));return a.set(Kg.calc(l),Qg.calc(l),jg.calc(l)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){let i=e.points[n];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){let i=this.points[n];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){let i=e.points[n];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};yh=class extends Da{constructor(e=new xe,n=new xe,a=new xe,i=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=a,this.v3=i}getPoint(e,n=new xe){let a=n,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return a.set(Gu(e,i.x,s.x,r.x,o.x),Gu(e,i.y,s.y,r.y,o.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sh=class extends Da{constructor(e=new R,n=new R,a=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=a,this.v3=i}getPoint(e,n=new R){let a=n,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return a.set(Gu(e,i.x,s.x,r.x,o.x),Gu(e,i.y,s.y,r.y,o.y),Gu(e,i.z,s.z,r.z,o.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_h=class extends Da{constructor(e=new xe,n=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new xe){let a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new xe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mh=class extends Da{constructor(e=new R,n=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new R){let a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new R){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends Da{constructor(e=new xe,n=new xe,a=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new xe){let a=n,i=this.v0,s=this.v1,r=this.v2;return a.set(ku(e,i.x,s.x,r.x),ku(e,i.y,s.y,r.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends Da{constructor(e=new R,n=new R,a=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new R){let a=n,i=this.v0,s=this.v1,r=this.v2;return a.set(ku(e,i.x,s.x,r.x),ku(e,i.y,s.y,r.y),ku(e,i.z,s.z,r.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Th=class extends Da{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new xe){let a=n,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],u=i[r],f=i[r>i.length-2?i.length-1:r+1],p=i[r>i.length-3?i.length-1:r+2];return a.set($b(o,l.x,u.x,f.x,p.x),$b(o,l.y,u.y,f.y,p.y)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){let i=e.points[n];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){let i=this.points[n];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){let i=e.points[n];this.points.push(new xe().fromArray(i))}return this}},ZL=Object.freeze({__proto__:null,ArcCurve:vh,CatmullRomCurve3:Ki,CubicBezierCurve:yh,CubicBezierCurve3:Sh,EllipseCurve:oc,LineCurve:_h,LineCurve3:Mh,QuadraticBezierCurve:bh,QuadraticBezierCurve3:lc,SplineCurve:Th}),uc=class t extends Lt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],n=12,a=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:a,phiLength:i},n=Math.floor(n),i=Je(i,0,Math.PI*2);let s=[],r=[],o=[],l=[],u=[],f=1/n,p=new R,c=new xe,d=new R,x=new R,y=new R,g=0,h=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:g=e[m+1].x-e[m].x,h=e[m+1].y-e[m].y,d.x=h*1,d.y=-g,d.z=h*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:g=e[m+1].x-e[m].x,h=e[m+1].y-e[m].y,d.x=h*1,d.y=-g,d.z=h*0,x.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(x)}for(let m=0;m<=n;m++){let S=a+m*f*i,_=Math.sin(S),E=Math.cos(S);for(let A=0;A<=e.length-1;A++){p.x=e[A].x*_,p.y=e[A].y,p.z=e[A].x*E,r.push(p.x,p.y,p.z),c.x=m/n,c.y=A/(e.length-1),o.push(c.x,c.y);let v=l[3*A+0]*_,b=l[3*A+1],I=l[3*A+0]*E;u.push(v,b,I)}}for(let m=0;m<n;m++)for(let S=0;S<e.length-1;S++){let _=S+m*e.length,E=_,A=_+e.length,v=_+e.length+1,b=_+1;s.push(E,A,b),s.push(v,b,A)}this.setIndex(s),this.setAttribute("position",new et(r,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}},qt=class t extends Lt{constructor(e=1,n=1,a=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:i};let s=e/2,r=n/2,o=Math.floor(a),l=Math.floor(i),u=o+1,f=l+1,p=e/o,c=n/l,d=[],x=[],y=[],g=[];for(let h=0;h<f;h++){let m=h*c-r;for(let S=0;S<u;S++){let _=S*p-s;x.push(_,-m,0),y.push(0,0,1),g.push(S/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let S=m+u*h,_=m+u*(h+1),E=m+1+u*(h+1),A=m+1+u*h;d.push(S,_,A),d.push(_,E,A)}this.setIndex(d),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},jn=class t extends Lt{constructor(e=1,n=32,a=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:a,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));let l=Math.min(r+o,Math.PI),u=0,f=[],p=new R,c=new R,d=[],x=[],y=[],g=[];for(let h=0;h<=a;h++){let m=[],S=h/a,_=r+S*o,E=e*Math.cos(_),A=Math.sqrt(e*e-E*E),v=0;h===0&&r===0?v=.5/n:h===a&&l===Math.PI&&(v=-.5/n);for(let b=0;b<=n;b++){let I=b/n,w=i+I*s;p.x=-A*Math.cos(w),p.y=E,p.z=A*Math.sin(w),x.push(p.x,p.y,p.z),c.copy(p).normalize(),y.push(c.x,c.y,c.z),g.push(I+v,1-S),m.push(u++)}f.push(m)}for(let h=0;h<a;h++)for(let m=0;m<n;m++){let S=f[h][m+1],_=f[h][m],E=f[h+1][m],A=f[h+1][m+1];(h!==0||r>0)&&d.push(S,_,A),(h!==a-1||l<Math.PI)&&d.push(_,E,A)}this.setIndex(d),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ma=class t extends Lt{constructor(e=1,n=.4,a=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:a,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},a=Math.floor(a),i=Math.floor(i);let l=[],u=[],f=[],p=[],c=new R,d=new R,x=new R;for(let y=0;y<=a;y++){let g=r+y/a*o;for(let h=0;h<=i;h++){let m=h/i*s;d.x=(e+n*Math.cos(g))*Math.cos(m),d.y=(e+n*Math.cos(g))*Math.sin(m),d.z=n*Math.sin(g),u.push(d.x,d.y,d.z),c.x=e*Math.cos(m),c.y=e*Math.sin(m),x.subVectors(d,c).normalize(),f.push(x.x,x.y,x.z),p.push(h/i),p.push(y/a)}}for(let y=1;y<=a;y++)for(let g=1;g<=i;g++){let h=(i+1)*y+g-1,m=(i+1)*(y-1)+g-1,S=(i+1)*(y-1)+g,_=(i+1)*y+g;l.push(h,m,_),l.push(m,S,_)}this.setIndex(l),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},sl=class t extends Lt{constructor(e=new lc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),n=64,a=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:a,radialSegments:i,closed:s};let r=e.computeFrenetFrames(n,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new R,l=new R,u=new xe,f=new R,p=[],c=[],d=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new et(p,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(d,2));function y(){for(let S=0;S<n;S++)g(S);g(s===!1?n:0),m(),h()}function g(S){f=e.getPointAt(S/n,f);let _=r.normals[S],E=r.binormals[S];for(let A=0;A<=i;A++){let v=A/i*Math.PI*2,b=Math.sin(v),I=-Math.cos(v);l.x=I*_.x+b*E.x,l.y=I*_.y+b*E.y,l.z=I*_.z+b*E.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=f.x+a*l.x,o.y=f.y+a*l.y,o.z=f.z+a*l.z,p.push(o.x,o.y,o.z)}}function h(){for(let S=1;S<=n;S++)for(let _=1;_<=i;_++){let E=(i+1)*(S-1)+(_-1),A=(i+1)*S+(_-1),v=(i+1)*S+_,b=(i+1)*(S-1)+_;x.push(E,A,b),x.push(A,v,b)}}function m(){for(let S=0;S<=n;S++)for(let _=0;_<=i;_++)u.x=S/n,u.y=_/i,d.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new ZL[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};Y1={clone:Ar,merge:Un},KL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pa=class extends Ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KL,this.fragmentShader=QL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=JL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?n.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[i]={type:"m4",value:r.toArray()}:n.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let a={};for(let i in this.extensions)this.extensions[i]===!0&&(a[i]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let a in e.uniforms){let i=e.uniforms[a];switch(this.uniforms[a]={},i.type){case"t":this.uniforms[a].value=n[i.value]||null;break;case"c":this.uniforms[a].value=new Ge().setHex(i.value);break;case"v2":this.uniforms[a].value=new xe().fromArray(i.value);break;case"v3":this.uniforms[a].value=new R().fromArray(i.value);break;case"v4":this.uniforms[a].value=new Bt().fromArray(i.value);break;case"m3":this.uniforms[a].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[a].value=new ft().fromArray(i.value);break;default:this.uniforms[a].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Eh=class extends Pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xa=class extends Ia{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cc=class extends Xa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){gr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},fc=class extends Ia{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Hh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ah=class extends Ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ch=class extends Ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Bs=class{constructor(e,n,a,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new n.constructor(a),this.sampleValues=n,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,a=this._cachedIndex,i=n[a],s=n[a-1];e:{t:{let r;n:{a:if(!(e<i)){for(let o=a+2;;){if(i===void 0){if(e<s)break a;return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===o)break;if(s=i,i=n[++a],e<i)break t}r=n.length;break n}if(!(e>=s)){let o=n[1];e<o&&(a=2,s=o);for(let l=a-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===l)break;if(i=s,s=n[--a-1],e>=s)break t}r=a,a=0;break n}break e}for(;a<r;){let o=a+r>>>1;e<n[o]?r=o:a=o+1}if(i=n[a],s=n[a-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return a=n.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,s,i)}return this.interpolate_(a,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,a=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)n[r]=a[s+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Lh=class extends Bs{constructor(e,n,a,i){super(e,n,a,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tx,endingEnd:tx}}intervalChanged_(e,n,a){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case nx:s=e,o=2*n-a;break;case ax:s=i.length-2,o=n+i[s]-i[s+1];break;default:s=e,o=a}if(l===void 0)switch(this.getSettings_().endingEnd){case nx:r=e,l=2*a-n;break;case ax:r=1,l=a+i[1]-i[0];break;default:r=e-1,l=n}let u=(a-n)*.5,f=this.valueSize;this._weightPrev=u/(n-o),this._weightNext=u/(l-a),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this._offsetPrev,p=this._offsetNext,c=this._weightPrev,d=this._weightNext,x=(a-n)/(i-n),y=x*x,g=y*x,h=-c*g+2*c*y-c*x,m=(1+c)*g+(-1.5-2*c)*y+(-.5+c)*x+1,S=(-1-d)*g+(1.5+d)*y+.5*x,_=d*g-d*y;for(let E=0;E!==o;++E)s[E]=h*r[f+E]+m*r[u+E]+S*r[l+E]+_*r[p+E];return s}},wh=class extends Bs{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=(a-n)/(i-n),p=1-f;for(let c=0;c!==o;++c)s[c]=r[u+c]*p+r[l+c]*f;return s}},Ih=class extends Bs{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Rh=class extends Bs{interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let x=(a-n)/(i-n),y=1-x;for(let g=0;g!==o;++g)s[g]=r[u+g]*y+r[l+g]*x;return s}let c=o*2,d=e-1;for(let x=0;x!==o;++x){let y=r[u+x],g=r[l+x],h=d*c+x*2,m=p[h],S=p[h+1],_=e*c+x*2,E=f[_],A=f[_+1],v=$L(a,n,m,E,i);s[x]=Z1(v,y,S,A,g)}return s}};ga=class{constructor(e,n,a,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zo(n,this.TimeBufferType),this.values=zo(a,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,a;if(n.toJSON!==this.toJSON)a=n.toJSON(e);else{a={name:e.name,times:zo(e.times,Array),values:zo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(a.interpolation=i),Jd(e.settings)&&(a.settings={inTangents:zo(e.settings.inTangents,Array),outTangents:zo(e.settings.outTangents,Array)})}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new Ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Rh(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Vu:n=this.InterpolantFactoryMethodDiscrete;break;case uh:n=this.InterpolantFactoryMethodLinear;break;case jd:n=this.InterpolantFactoryMethodSmooth;break;case ex:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return Oe("KeyframeTrack:",a),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vu;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return jd;case this.InterpolantFactoryMethodBezier:return ex}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let a=0,i=n.length;a!==i;++a)n[a]+=e;Jd(this.settings)&&(t1(this.settings.inTangents,e),t1(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let a=0,i=n.length;a!==i;++a)n[a]*=e;Jd(this.settings)&&(n1(this.settings.inTangents,e),n1(this.settings.outTangents,e))}return this}trim(e,n){let a=this.times,i=a.length,s=0,r=i-1;for(;s!==i&&a[s]<e;)++s;for(;r!==-1&&a[r]>n;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=a.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let a=this.times,i=this.values,s=a.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=a[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){ze("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&rL(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){ze("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),a=this.getValueSize(),i=this.getInterpolation()===jd,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],f=e[o+1];if(u!==f&&(o!==1||u!==e[0]))if(i)l=!0;else{let p=o*a,c=p-a,d=p+a;for(let x=0;x!==a;++x){let y=n[p+x];if(y!==n[c+x]||y!==n[d+x]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let p=o*a,c=r*a;for(let d=0;d!==a;++d)n[c+d]=n[p+d]}++r}}if(s>0){e[r]=e[s];for(let o=s*a,l=r*a,u=0;u!==a;++u)n[l+u]=n[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=n.slice(0,r*a)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),a=this.constructor,i=new a(this.name,e,n);return i.createInterpolant=this.createInterpolant,Jd(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};ga.prototype.ValueTypeName="";ga.prototype.TimeBufferType=Float32Array;ga.prototype.ValueBufferType=Float32Array;ga.prototype.DefaultInterpolation=uh;Fs=class extends ga{constructor(e,n,a){super(e,n,a)}};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Vu;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;Dh=class extends ga{constructor(e,n,a,i){super(e,n,a,i)}};Dh.prototype.ValueTypeName="color";Ph=class extends ga{constructor(e,n,a,i){super(e,n,a,i)}};Ph.prototype.ValueTypeName="number";Uh=class extends Bs{constructor(e,n,a,i){super(e,n,a,i)}interpolate_(e,n,a,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(a-n)/(i-n),u=e*o;for(let f=u+o;u!==f;u+=4)ci.slerpFlat(s,0,r,u-o,r,u,l);return s}},dc=class extends ga{constructor(e,n,a,i){super(e,n,a,i)}InterpolantFactoryMethodLinear(e){return new Uh(this.times,this.values,this.getValueSize(),e)}};dc.prototype.ValueTypeName="quaternion";dc.prototype.InterpolantFactoryMethodSmooth=void 0;zs=class extends ga{constructor(e,n,a){super(e,n,a)}};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Vu;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;Oh=class extends ga{constructor(e,n,a,i){super(e,n,a,i)}};Oh.prototype.ValueTypeName="vector";eh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(a1(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!a1(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};Nh=class{constructor(e,n,a){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,r,o),s=!0},this.itemEnd=function(f){r++,i.onProgress!==void 0&&i.onProgress(f,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){let p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,c=u.length;p<c;p+=2){let d=u[p],x=u[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},J1=new Nh,rl=class{constructor(e){this.manager=e!==void 0?e:J1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let a=this;return new Promise(function(i,s){a.load(e,i,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};rl.DEFAULT_MATERIAL_NAME="__DEFAULT";Ho=new WeakMap,Bh=class extends rl{constructor(e){super(e)}load(e,n,a,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=eh.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(r),s.manager.itemEnd(e)},0);else{let p=Ho.get(r);p===void 0&&(p=[],Ho.set(r,p)),p.push({onLoad:n,onError:i})}return r}let o=Yo("img");function l(){f(),n&&n(this);let p=Ho.get(this)||[];for(let c=0;c<p.length;c++){let d=p[c];d.onLoad&&d.onLoad(this)}Ho.delete(this),s.manager.itemEnd(e)}function u(p){f(),i&&i(p),eh.remove(`image:${e}`);let c=Ho.get(this)||[];for(let d=0;d<c.length;d++){let x=c[d];x.onError&&x.onError(p)}Ho.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),eh.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},ol=class extends rl{constructor(e){super(e)}load(e,n,a,i){let s=new Pn,r=new Bh(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},a,i),s}},_r=class extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},hc=class extends _r{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},$g=new ft,i1=new R,s1=new R,pc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera;i1.setFromMatrixPosition(e.matrixWorld),n.position.copy(i1),s1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(s1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,a,i){$g.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix($g,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,u=i?i.y/s.y:0;e.coordinateSystem===Xo||e.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply($g)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kd=new R,Qd=new ci,ri=new R,mc=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=wa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kd,Qd,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kd,Qd,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n,a=!1){super.updateWorldMatrix(e,n,a),this.matrixWorld.decompose(Kd,Qd,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kd,Qd,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Os=new R,r1=new xe,o1=new xe,Dn=class extends mc{constructor(e=50,n=1,a=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Os.x,Os.y).multiplyScalar(-e/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Os.x,Os.y).multiplyScalar(-e/Os.z)}getViewSize(e,n){return this.getViewBounds(e,r1,o1),n.subVectors(o1,r1)}setViewOffset(e,n,a,i,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Vo*.5*this.fov)/this.zoom,a=2*n,i=this.aspect*a,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/l,n-=r.offsetY*a/u,i*=r.width/l,a*=r.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},sx=class extends pc{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}},Ya=class extends _r{constructor(e,n,a=0,i=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=i,this.shadow=new sx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},gc=class extends mc{constructor(e=-1,n=1,a=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=a-e,r=a+e,o=i+n,l=i-n;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},rx=class extends pc{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ll=class extends _r{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new rx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},xc=class extends _r{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}},ko=-90,Go=1,ul=class extends Jt{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Dn(ko,Go,e,n);i.layers=this.layers,this.add(i);let s=new Dn(ko,Go,e,n);s.layers=this.layers,this.add(s);let r=new Dn(ko,Go,e,n);r.layers=this.layers,this.add(r);let o=new Dn(ko,Go,e,n);o.layers=this.layers,this.add(o);let l=new Dn(ko,Go,e,n);l.layers=this.layers,this.add(l);let u=new Dn(ko,Go,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[a,i,s,r,o,l]=n;for(let u of n)this.remove(u);if(e===wa)a.up.set(0,1,0),a.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)a.up.set(0,-1,0),a.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:a,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,u,f]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=a.texture.mipmapsAutoUpdate;a.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(a,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(a,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(a,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(a,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(a,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),a.texture.mipmapsAutoUpdate=y,e.setRenderTarget(a,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(p,c,d),e.xr.enabled=x,a.texture.needsPMREMUpdate=!0}},Fh=class extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},zx="\\[\\]\\.:\\/",ew=new RegExp("["+zx+"]","g"),Hx="[^"+zx+"]",tw="[^"+zx.replace("\\.","")+"]",nw=/((?:WC+[\/:])*)/.source.replace("WC",Hx),aw=/(WCOD+)?/.source.replace("WCOD",tw),iw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hx),sw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hx),rw=new RegExp("^"+nw+aw+iw+sw+"$"),ow=["material","materials","bones","map"],ox=class{constructor(e,n,a){let i=a||Pt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,i)}getValue(e,n){this.bind();let a=this._targetGroup.nCachedObjects_,i=this._bindings[a];i!==void 0&&i.getValue(e,n)}setValue(e,n){let a=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=a.length;i!==s;++i)a[i].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=e.length;n!==a;++n)e[n].unbind()}},Pt=class t{constructor(e,n,a){this.path=n,this.parsedPath=a||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,a){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,a):new t(e,n,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ew,"")}static parseTrackName(e){let n=rw.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let a={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},i=a.nodeName&&a.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=a.nodeName.substring(i+1);ow.indexOf(s)!==-1&&(a.nodeName=a.nodeName.substring(0,i),a.objectName=s)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let a=e.skeleton.getBoneByName(n);if(a!==void 0)return a}if(e.children){let a=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===n||o.uuid===n)return o;let l=a(o.children);if(l)return l}return null},i=a(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)e[n++]=a[i]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let a=this.resolvedProperty;for(let i=0,s=a.length;i!==s;++i)a[i]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,a=n.objectName,i=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let u=n.objectIndex;switch(a){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(u!==void 0){if(e[u]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=n.nodeName;ze("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=ox;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];eP=new Float32Array(1),l1=new ft,vc=class{constructor(e,n,a=0,i=1/0){this.ray=new yr(e,n),this.near=a,this.far=i,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ze("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return l1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l1),this}intersectObject(e,n=!0,a=[]){return lx(e,this,a,n),a.sort(u1),a}intersectObjects(e,n=!0,a=[]){for(let i=0,s=e.length;i<s;i++)lx(e[i],this,a,n);return a.sort(u1),a}};yc=class{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(Je(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ux=class{static{this.prototype.isMatrix2=!0}constructor(e,n,a,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,a,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let a=0;a<4;a++)this.elements[a]=e[a+n];return this}set(e,n,a,i){let s=this.elements;return s[0]=e,s[2]=n,s[1]=a,s[3]=i,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function xT(){let t=null,e=!1,n=null,a=null;function i(s,r){a=t.requestAnimationFrame(i),n(s,r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(a=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function cw(t){let e=new WeakMap;function n(o,l){let u=o.array,f=o.usage,p=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,f),o.onUploadCallback();let d;if(u instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)d=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=t.SHORT;else if(u instanceof Uint32Array)d=t.UNSIGNED_INT;else if(u instanceof Int32Array)d=t.INT;else if(u instanceof Int8Array)d=t.BYTE;else if(u instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function a(o,l,u){let f=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,f);else{p.sort((d,x)=>d.start-x.start);let c=0;for(let d=1;d<p.length;d++){let x=p[c],y=p[d];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++c,p[c]=y)}p.length=c+1;for(let d=0,x=p.length;d<x;d++){let y=p[d];t.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:r}}function WI(t,e,n,a,i,s){let r=new Ge(0),o=i===!0?0:1,l,u,f=null,p=0,c=null;function d(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){let _=m.backgroundBlurriness>0;S=e.get(S,_)}return S}function x(m){let S=!1,_=d(m);_===null?g(r,o):_&&_.isColor&&(g(_,1),S=!0);let E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(m,S){let _=d(S);_&&_.isCubeTexture?(u===void 0&&(u=new Le(new Ra(1,1,1),new Pa({name:"BackgroundCubeMaterial",uniforms:Ar(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qI.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(vT),u.material.toneMapped=ot.getTransfer(_.colorSpace)!==gt,(f!==_||p!==_.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,c=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Le(new qt(2,2),new Pa({name:"BackgroundMaterial",uniforms:Ar(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ot.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,p=_.version,c=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,S){m.getRGB(Lp,Fx(t)),n.buffers.color.setClear(Lp.r,Lp.g,Lp.b,S,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,S=1){r.set(m),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:x,addToRenderList:y,dispose:h}}function XI(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),a={},i=c(null),s=i,r=!1;function o(O,B,G,P,X){let H=!1,V=p(O,P,G,B);s!==V&&(s=V,u(s.object)),H=d(O,P,G,X),H&&x(O,P,G,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,_(O,B,G,P),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function u(O){return t.bindVertexArray(O)}function f(O){return t.deleteVertexArray(O)}function p(O,B,G,P){let X=P.wireframe===!0,H=a[B.id];H===void 0&&(H={},a[B.id]=H);let V=O.isInstancedMesh===!0?O.id:0,ie=H[V];ie===void 0&&(ie={},H[V]=ie);let Y=ie[G.id];Y===void 0&&(Y={},ie[G.id]=Y);let ee=Y[X];return ee===void 0&&(ee=c(l()),Y[X]=ee),ee}function c(O){let B=[],G=[],P=[];for(let X=0;X<n;X++)B[X]=0,G[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:P,object:O,attributes:{},index:null}}function d(O,B,G,P){let X=s.attributes,H=B.attributes,V=0,ie=G.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let ne=X[Y],Te=H[Y];if(Te===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(Te=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(Te=O.instanceColor)),ne===void 0||ne.attribute!==Te||Te&&ne.data!==Te.data)return!0;V++}return s.attributesNum!==V||s.index!==P}function x(O,B,G,P){let X={},H=B.attributes,V=0,ie=G.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let ne=H[Y];ne===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));let Te={};Te.attribute=ne,ne&&ne.data&&(Te.data=ne.data),X[Y]=Te,V++}s.attributes=X,s.attributesNum=V,s.index=P}function y(){let O=s.newAttributes;for(let B=0,G=O.length;B<G;B++)O[B]=0}function g(O){h(O,0)}function h(O,B){let G=s.newAttributes,P=s.enabledAttributes,X=s.attributeDivisors;G[O]=1,P[O]===0&&(t.enableVertexAttribArray(O),P[O]=1),X[O]!==B&&(t.vertexAttribDivisor(O,B),X[O]=B)}function m(){let O=s.newAttributes,B=s.enabledAttributes;for(let G=0,P=B.length;G<P;G++)B[G]!==O[G]&&(t.disableVertexAttribArray(G),B[G]=0)}function S(O,B,G,P,X,H,V){V===!0?t.vertexAttribIPointer(O,B,G,X,H):t.vertexAttribPointer(O,B,G,P,X,H)}function _(O,B,G,P){y();let X=P.attributes,H=G.getAttributes(),V=B.defaultAttributeValues;for(let ie in H){let Y=H[ie];if(Y.location>=0){let ee=X[ie];if(ee===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),ee!==void 0){let ne=ee.normalized,Te=ee.itemSize,Be=e.get(ee);if(Be===void 0)continue;let K=Be.buffer,me=Be.type,_e=Be.bytesPerElement,Pe=me===t.INT||me===t.UNSIGNED_INT||ee.gpuType===qh;if(ee.isInterleavedBufferAttribute){let ve=ee.data,Ve=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Ut=ee.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ne=0;Ne<Y.locationSize;Ne++)h(Y.location+Ne,ve.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ne=0;Ne<Y.locationSize;Ne++)g(Y.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,K);for(let Ne=0;Ne<Y.locationSize;Ne++)S(Y.location+Ne,Te/Y.locationSize,me,ne,Ve*_e,(Ut+Te/Y.locationSize*Ne)*_e,Pe)}else{if(ee.isInstancedBufferAttribute){for(let ve=0;ve<Y.locationSize;ve++)h(Y.location+ve,ee.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<Y.locationSize;ve++)g(Y.location+ve);t.bindBuffer(t.ARRAY_BUFFER,K);for(let ve=0;ve<Y.locationSize;ve++)S(Y.location+ve,Te/Y.locationSize,me,ne,Te*_e,Te/Y.locationSize*ve*_e,Pe)}}else if(V!==void 0){let ne=V[ie];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(Y.location,ne);break;case 3:t.vertexAttrib3fv(Y.location,ne);break;case 4:t.vertexAttrib4fv(Y.location,ne);break;default:t.vertexAttrib1fv(Y.location,ne)}}}}m()}function E(){I();for(let O in a){let B=a[O];for(let G in B){let P=B[G];for(let X in P){let H=P[X];for(let V in H)f(H[V].object),delete H[V];delete P[X]}}delete a[O]}}function A(O){if(a[O.id]===void 0)return;let B=a[O.id];for(let G in B){let P=B[G];for(let X in P){let H=P[X];for(let V in H)f(H[V].object),delete H[V];delete P[X]}}delete a[O.id]}function v(O){for(let B in a){let G=a[B];for(let P in G){let X=G[P];if(X[O.id]===void 0)continue;let H=X[O.id];for(let V in H)f(H[V].object),delete H[V];delete X[O.id]}}}function b(O){for(let B in a){let G=a[B],P=O.isInstancedMesh===!0?O.id:0,X=G[P];if(X!==void 0){for(let H in X){let V=X[H];for(let ie in V)f(V[ie].object),delete V[ie];delete X[H]}delete G[P],Object.keys(G).length===0&&delete a[B]}}}function I(){w(),r=!0,s!==i&&(s=i,u(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function YI(t,e,n){let a;function i(l){a=l}function s(l,u){t.drawArrays(a,l,u),n.update(u,a,1)}function r(l,u,f){f!==0&&(t.drawArraysInstanced(a,l,u,f),n.update(u,a,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,l,0,u,0,f);let c=0;for(let d=0;d<f;d++)c+=u[d];n.update(c,a,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function ZI(t,e,n,a){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(v){return!(v!==Ka&&a.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let b=v===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==$n&&v!==Ua&&!b&&a.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp",f=l(u);f!==u&&(Oe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:_,maxSamples:E,samples:A}}function JI(t){let e=this,n=null,a=0,i=!1,s=!1,r=new qa,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let d=p.length!==0||c||a!==0||i;return i=c,a=p.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){n=f(p,c,0)},this.setState=function(p,c,d){let x=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,h=t.get(p);if(!i||x===null||x.length===0||s&&!g)s?f(null):u();else{let m=s?0:a,S=m*4,_=h.clippingState||null;l.value=_,_=f(x,c,S,d);for(let E=0;E!==S;++E)_[E]=n[E];h.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function f(p,c,d,x){let y=p!==null?p.length:0,g=null;if(y!==0){if(g=l.value,x!==!0||g===null){let h=d+y*4,m=c.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let S=0,_=d;S!==y;++S,_+=4)r.copy(p[S]).applyMatrix4(m,o),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function Q1(t,e,n){return new Dc(t,{minFilter:Qi,generateMipmaps:e,type:Ja,colorSpace:qu,depthBuffer:n})}function Pc(t,e,n){return new Pa({name:t,uniforms:e,vertexShader:je.cube_vert,fragmentShader:n,side:ln,blending:Mr,depthTest:!1,depthWrite:!1})}function tR(){return Pc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yT}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nR(){return Pc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ST}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function aR(){return Pc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${QI}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function j1(){return Pc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function $1(){return Pc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function iR(t){let e=new WeakMap,n=new WeakMap,a=null;function i(c,d=!1){return c==null?null:d?r(c):s(c)}function s(c){if(c&&c.isTexture){let d=c.mapping;if(d===kh||d===Gh)if(e.has(c)){let x=e.get(c).texture;return o(x,c.mapping)}else{let x=c.image;if(x&&x.height>0){let y=new Dc(x.height);return y.fromEquirectangularTexture(t,c),e.set(c,y),c.addEventListener("dispose",u),o(y.texture,c.mapping)}else return null}}return c}function r(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let d=c.mapping,x=d===kh||d===Gh,y=d===Tr||d===hl;if(x||y){let g=n.get(c),h=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==h)return a===null&&(a=new gl(t)),g=x?a.fromEquirectangular(c,g):a.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),g.texture;if(g!==void 0)return g.texture;{let m=c.image;return x&&m&&m.height>0||y&&m&&l(m)?(a===null&&(a=new gl(t)),g=x?a.fromEquirectangular(c):a.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,n.set(c,g),c.addEventListener("dispose",f),g.texture):null}}}return c}function o(c,d){return d===kh?c.mapping=Tr:d===Gh&&(c.mapping=hl),c}function l(c){let d=0,x=6;for(let y=0;y<x;y++)c[y]!==void 0&&d++;return d===x}function u(c){let d=c.target;d.removeEventListener("dispose",u);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function f(c){let d=c.target;d.removeEventListener("dispose",f);let x=n.get(d);x!==void 0&&(n.delete(d),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:i,dispose:p}}function sR(t){let e={};function n(a){if(e[a]!==void 0)return e[a];let i=t.getExtension(a);return e[a]=i,i}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){let i=n(a);return i===null&&gr("WebGLRenderer: "+a+" extension not supported."),i}}}function rR(t,e,n,a){let i={},s=new WeakMap,r=new FinalizationRegistry(x=>delete i[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let g in x.attributes)e.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete i[x.id],r.unregister(x);let y=s.get(x);y&&(e.remove(y),s.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function u(x,y){return i[y.id]!==void 0||(y.addEventListener("dispose",o),i[y.id]=new WeakRef(y),r.register(y,y.id,y),n.memory.geometries++),y}function f(x){let y=x.attributes;for(let g in y)e.update(y[g],t.ARRAY_BUFFER)}function p(x){let y=x.index,g=x.attributes.position,h=0;if(g===void 0)return;let m=y!==null?y.array.length:g.array.length/3-1,S=g.count>=65535?Ku:Ju,_=new S(Math.ceil(m/3)*6,1),E=_.array;if(y!==null){let v=y.array;h=y.version;for(let b=0,I=0;b<m;b+=3){let w=v[b+0],O=v[b+1],B=v[b+2];E[I++]=w,E[I++]=O,E[I++]=O,E[I++]=B,E[I++]=B,E[I++]=w}}else{h=g.version;for(let v=0,b=0;v<m;v+=3){let I=v+0,w=v+1,O=v+2;E[b++]=I,E[b++]=w,E[b++]=w,E[b++]=O,E[b++]=O,E[b++]=I}}_.version=h;let A=s.get(x);A&&e.remove(A),s.set(x,_)}function c(x){let y=s.get(x);if(y){let g=x.index;g!==null&&y.version<g.version&&p(x)}else p(x);return s.get(x)}function d(){for(let x in i){let y=i[x].deref();y!==void 0&&l(y)}}return{get:u,update:f,getWireframeAttribute:c,dispose:d}}function oR(t,e,n){let a;function i(p){a=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,c){t.drawElements(a,c,s,p*r),n.update(c,a,1)}function u(p,c,d){d!==0&&(t.drawElementsInstanced(a,c,s,p*r,d),n.update(c,a,d))}function f(p,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,c,0,s,p,0,d);let y=0;for(let g=0;g<d;g++)y+=c[g];n.update(y,a,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function lR(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ze("WebGLInfo: Unknown draw mode:",r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:a}}function uR(t,e,n){let a=new WeakMap,i=new Bt;function s(r,o,l){let u=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,c=a.get(o);if(c===void 0||c.count!==p){let I=function(){v.dispose(),a.delete(o),o.removeEventListener("dispose",I)};c!==void 0&&c.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],S=0;d===!0&&(S=1),x===!0&&(S=2),y===!0&&(S=3);let _=o.attributes.position.count*S,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*E*4*p),v=new Yu(A,_,E,p);v.type=Ua,v.needsUpdate=!0;let b=S*4;for(let w=0;w<p;w++){let O=g[w],B=h[w],G=m[w],P=_*E*4*w;for(let X=0;X<O.count;X++){let H=X*b;d===!0&&(i.fromBufferAttribute(O,X),A[P+H+0]=i.x,A[P+H+1]=i.y,A[P+H+2]=i.z,A[P+H+3]=0),x===!0&&(i.fromBufferAttribute(B,X),A[P+H+4]=i.x,A[P+H+5]=i.y,A[P+H+6]=i.z,A[P+H+7]=0),y===!0&&(i.fromBufferAttribute(G,X),A[P+H+8]=i.x,A[P+H+9]=i.y,A[P+H+10]=i.z,A[P+H+11]=G.itemSize===4?i.w:1)}}c={count:p,texture:v,size:new xe(_,E)},a.set(o,c),o.addEventListener("dispose",I)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let d=0;for(let y=0;y<u.length;y++)d+=u[y];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function cR(t,e,n,a,i){let s=new WeakMap;function r(u){let f=i.render.frame,p=u.geometry,c=e.get(u,p);if(s.get(c)!==f&&(e.update(c),s.set(c,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==f&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){let d=u.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return c}function o(){s=new WeakMap}function l(u){let f=u.target;f.removeEventListener("dispose",l),a.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}function dR(t,e,n,a,i,s){let r=new pa(e,n,{type:t,depthBuffer:i,stencilBuffer:s,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,f=new Lt;f.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new et([0,2,0,0,2,0],2));let p=new Eh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Le(f,p),d=new gc(-1,1,1,-1,0,1),x=null,y=null,g=!1,h,m=null,S=[],_=!1;this.setSize=function(E,A){r.setSize(E,A),o!==null&&o.setSize(E,A),l!==null&&l.setSize(E,A);for(let v=0;v<S.length;v++){let b=S[v];b.setSize&&b.setSize(E,A)}},this.setEffects=function(E){S=E,_=S.length>0&&S[0].isRenderPass===!0;let A=r.width,v=r.height;S.length>0&&o===null&&(o=new pa(A,v,{type:Ja,depthBuffer:!1,stencilBuffer:!1}),l=new pa(A,v,{type:Ja,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&S.some(I=>I.needsDepthTexture===!0);b!==(r.depthTexture!==null)&&(b===!0&&u===null&&(u=new Ji(A,v),s===!0&&(u.format=ji,u.type=Er)),r.dispose(),r.depthTexture=b?u:null,r.resolveDepthBuffer=b,r.storeMultisampledDepthBuffer=b);for(let I=0;I<S.length;I++){let w=S[I];w.setSize&&w.setSize(A,v),b&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(u)}},this.begin=function(E,A){if(g||E.toneMapping===gi&&S.length===0)return!1;if(m=A,A!==null){let v=A.width,b=A.height;(r.width!==v||r.height!==b)&&this.setSize(v,b)}return _===!1&&E.setRenderTarget(r),h=E.toneMapping,E.toneMapping=gi,!0},this.hasRenderPass=function(){return _},this.end=function(E,A){E.toneMapping=h,g=!0;let v=r,b=o;for(let I=0;I<S.length;I++){let w=S[I];w.enabled!==!1&&(w.render(E,b,v,A),w.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(x!==E.outputColorSpace||y!==E.toneMapping){x=E.outputColorSpace,y=E.toneMapping,p.defines={},ot.getTransfer(x)===gt&&(p.defines.SRGB_TRANSFER="");let I=fR[y];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(m),E.render(c,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}function xl(t,e,n){let a=t[0];if(a<=0||a>0)return t;let i=e*n,s=eT[i];if(s===void 0&&(s=new Float32Array(i),eT[i]=s),e!==0){a.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function un(t,e){if(t.length!==e.length)return!1;for(let n=0,a=t.length;n<a;n++)if(t[n]!==e[n])return!1;return!0}function cn(t,e){for(let n=0,a=e.length;n<a;n++)t[n]=e[n]}function Rp(t,e){let n=tT[e];n===void 0&&(n=new Int32Array(e),tT[e]=n);for(let a=0;a!==e;++a)n[a]=t.allocateTextureUnit();return n}function hR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2fv(this.addr,e),cn(n,e)}}function mR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(un(n,e))return;t.uniform3fv(this.addr,e),cn(n,e)}}function gR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4fv(this.addr,e),cn(n,e)}}function xR(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(un(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(un(n,a))return;iT.set(a),t.uniformMatrix2fv(this.addr,!1,iT),cn(n,a)}}function vR(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(un(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(un(n,a))return;aT.set(a),t.uniformMatrix3fv(this.addr,!1,aT),cn(n,a)}}function yR(t,e){let n=this.cache,a=e.elements;if(a===void 0){if(un(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(un(n,a))return;nT.set(a),t.uniformMatrix4fv(this.addr,!1,nT),cn(n,a)}}function SR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _R(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2iv(this.addr,e),cn(n,e)}}function MR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;t.uniform3iv(this.addr,e),cn(n,e)}}function bR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4iv(this.addr,e),cn(n,e)}}function TR(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ER(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(un(n,e))return;t.uniform2uiv(this.addr,e),cn(n,e)}}function AR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(un(n,e))return;t.uniform3uiv(this.addr,e),cn(n,e)}}function CR(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(un(n,e))return;t.uniform4uiv(this.addr,e),cn(n,e)}}function Dp(t){return t.version===0&&(t.compareFunction=Ix,t.needsUpdate=!0),t}function LR(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?s=Dp(MT):s=_T,n.setTexture2D(e||s,i)}function wR(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),n.setTexture3D(e||ET,i)}function IR(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Dp(bT):s=AT,n.setTextureCube(e||s,i)}function RR(t,e,n){let a=this.cache,i=n.allocateTextureUnit();a[0]!==i&&(t.uniform1i(this.addr,i),a[0]=i),n.setTexture2DArray(e||TT,i)}function DR(t){switch(t){case 5126:return hR;case 35664:return pR;case 35665:return mR;case 35666:return gR;case 35674:return xR;case 35675:return vR;case 35676:return yR;case 5124:case 35670:return SR;case 35667:case 35671:return _R;case 35668:case 35672:return MR;case 35669:case 35673:return bR;case 5125:return TR;case 36294:return ER;case 36295:return AR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return LR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return RR}}function PR(t,e){t.uniform1fv(this.addr,e)}function UR(t,e){let n=xl(e,this.size,2);t.uniform2fv(this.addr,n)}function OR(t,e){let n=xl(e,this.size,3);t.uniform3fv(this.addr,n)}function NR(t,e){let n=xl(e,this.size,4);t.uniform4fv(this.addr,n)}function BR(t,e){let n=xl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function FR(t,e){let n=xl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zR(t,e){let n=xl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HR(t,e){t.uniform1iv(this.addr,e)}function kR(t,e){t.uniform2iv(this.addr,e)}function GR(t,e){t.uniform3iv(this.addr,e)}function VR(t,e){t.uniform4iv(this.addr,e)}function qR(t,e){t.uniform1uiv(this.addr,e)}function WR(t,e){t.uniform2uiv(this.addr,e)}function XR(t,e){t.uniform3uiv(this.addr,e)}function YR(t,e){t.uniform4uiv(this.addr,e)}function ZR(t,e,n){let a=this.cache,i=e.length,s=Rp(n,i);un(a,s)||(t.uniform1iv(this.addr,s),cn(a,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Dp(MT):r=_T;for(let o=0;o!==i;++o)n.setTexture2D(e[o]||r,s[o])}function JR(t,e,n){let a=this.cache,i=e.length,s=Rp(n,i);un(a,s)||(t.uniform1iv(this.addr,s),cn(a,s));for(let r=0;r!==i;++r)n.setTexture3D(e[r]||ET,s[r])}function KR(t,e,n){let a=this.cache,i=e.length,s=Rp(n,i);un(a,s)||(t.uniform1iv(this.addr,s),cn(a,s));let r;this.type===t.SAMPLER_CUBE_SHADOW?r=Dp(bT):r=AT;for(let o=0;o!==i;++o)n.setTextureCube(e[o]||r,s[o])}function QR(t,e,n){let a=this.cache,i=e.length,s=Rp(n,i);un(a,s)||(t.uniform1iv(this.addr,s),cn(a,s));for(let r=0;r!==i;++r)n.setTexture2DArray(e[r]||TT,s[r])}function jR(t){switch(t){case 5126:return PR;case 35664:return UR;case 35665:return OR;case 35666:return NR;case 35674:return BR;case 35675:return FR;case 35676:return zR;case 5124:case 35670:return HR;case 35667:case 35671:return kR;case 35668:case 35672:return GR;case 35669:case 35673:return VR;case 5125:return qR;case 36294:return WR;case 36295:return XR;case 36296:return YR;case 35678:case 36198:case 36298:case 36306:case 35682:return ZR;case 35679:case 36299:case 36307:return JR;case 35680:case 36300:case 36308:case 36293:return KR;case 36289:case 36303:case 36311:case 36292:return QR}}function sT(t,e){t.seq.push(e),t.map[e.id]=e}function $R(t,e,n){let a=t.name,i=a.length;for(Vx.lastIndex=0;;){let s=Vx.exec(a),r=Vx.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===i){sT(n,u===void 0?new Wx(o,t,e):new Xx(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Yx(o),sT(n,p)),n=p}}}function rT(t,e,n){let a=t.createShader(e);return t.shaderSource(a,n),t.compileShader(a),a}function n3(t,e){let n=t.split(`
`),a=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=i;r<s;r++){let o=r+1;a.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return a.join(`
`)}function a3(t){ot._getMatrix(oT,ot.workingColorSpace,t);let e=`mat3( ${oT.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case Wu:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function lT(t,e,n){let a=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(a&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+n3(t.getShaderSource(e),o)}else return s}function i3(t,e){let n=a3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function r3(t,e){let n=s3[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function o3(){ot.getLuminanceCoefficients(wp);let t=wp.x.toFixed(4),e=wp.y.toFixed(4),n=wp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rc).join(`
`)}function u3(t){let e=[];for(let n in t){let a=t[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function c3(t,e){let n={},a=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<a;i++){let s=t.getActiveAttrib(e,i),r=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function Rc(t){return t!==""}function uT(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function cT(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Zx(t){return t.replace(f3,d3)}function d3(t,e){let n=je[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Zx(n)}function fT(t){return t.replace(h3,p3)}function p3(t,e,n,a){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=a.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dT(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g3(t){return m3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function v3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":x3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function S3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":y3[t.combine]||"ENVMAP_BLENDING_NONE"}function _3(t,e,n,a){let i=t.getContext(),s=n.defines,r=n.vertexShader,o=n.fragmentShader,l=g3(n),u=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=v3(n),p=S3(n),c=l3(n),d=u3(s),x=i.createProgram(),y,g,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Rc).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Rc).join(`
`),g.length>0&&(g+=`
`)):(y=[dT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rc).join(`
`),g=[dT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gi?"#define TONE_MAPPING":"",n.toneMapping!==gi?je.tonemapping_pars_fragment:"",n.toneMapping!==gi?r3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,i3("linearToOutputTexel",n.outputColorSpace),o3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rc).join(`
`)),r=Zx(r),r=uT(r,n),r=cT(r,n),o=Zx(o),o=uT(o,n),o=cT(o,n),r=fT(r),o=fT(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,y=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=h+y+r,S=h+g+o,_=rT(i,i.VERTEX_SHADER,m),E=rT(i,i.FRAGMENT_SHADER,S);i.attachShader(x,_),i.attachShader(x,E),n.index0AttributeName!==void 0?i.bindAttribLocation(x,0,n.index0AttributeName):n.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(w){if(t.debug.checkShaderErrors){let O=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(_)||"",G=i.getShaderInfoLog(E)||"",P=O.trim(),X=B.trim(),H=G.trim(),V=!0,ie=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,x,_,E);else{let Y=lT(i,_,"vertex"),ee=lT(i,E,"fragment");ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+P+`
`+Y+`
`+ee)}else P!==""?Oe("WebGLProgram: Program Info Log:",P):(X===""||H==="")&&(ie=!1);ie&&(w.diagnostics={runnable:V,programLog:P,vertexShader:{log:X,prefix:y},fragmentShader:{log:H,prefix:g}})}i.deleteShader(_),i.deleteShader(E),v=new ml(i,x),b=c3(i,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(x,e3)),I},this.destroy=function(){a.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=t3++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=E,this}function b3(t){return t===Hs||t===Cc||t===Lc}function T3(t,e,n,a,i,s){let r=new Qo,o=new Jx,l=new Set,u=[],f=new Map,p=a.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,b,I,w,O,B){let G=w.fog,P=O.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||X,H),ie=c[v.type],Y=a.precision;v.precision!==null&&(Y=a.getMaxPrecision(v.precision),Y!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",Y,"instead."));let ee=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ne=ee!==void 0?ee.length:0,Te=0;P.morphAttributes.position!==void 0&&(Te=1),P.morphAttributes.normal!==void 0&&(Te=2),P.morphAttributes.color!==void 0&&(Te=3);let Be,K,me,_e;if(ie){let ye=vi[ie];Be=ye.vertexShader,K=ye.fragmentShader}else{Be=v.vertexShader,K=v.fragmentShader;let ye=o.getVertexShaderStage(v),xt=o.getFragmentShaderStage(v);o.update(v,ye,xt),me=ye.id,_e=xt.id}let Pe=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ve=O.isInstancedMesh===!0,Ut=O.isBatchedMesh===!0,Ne=!!v.map,ut=!!v.matcap,mt=!!V,$e=mt&&V.isPMREMTexture===!0,Kt=!!v.aoMap,Ht=!!v.lightMap,yn=!!v.bumpMap&&v.wireframe===!1,Et=!!v.normalMap,ta=!!v.displacementMap,Xt=!!v.emissiveMap,An=!!v.metalnessMap,Vn=!!v.roughnessMap,On=v.anisotropy>0,L=v.clearcoat>0,ge=v.diffuseRoughness>0,be=v.dispersion>0,He=v.retroreflectivity>0,se=v.iridescence>0,tt=v.sheen>0,we=v.transmission>0,Ue=On&&!!v.anisotropyMap,C=L&&!!v.clearcoatMap,M=L&&!!v.clearcoatNormalMap,N=L&&!!v.clearcoatRoughnessMap,j=ge&&!!v.diffuseRoughnessMap,W=se&&!!v.iridescenceMap,re=se&&!!v.iridescenceThicknessMap,de=tt&&!!v.sheenColorMap,J=tt&&!!v.sheenRoughnessMap,Q=!!v.specularMap,ce=!!v.specularColorMap,D=!!v.specularIntensityMap,$=we&&!!v.transmissionMap,Z=we&&!!v.thicknessMap,fe=!!v.gradientMap,le=!!v.alphaMap,ue=v.alphaTest>0,Re=!!v.alphaHash,Qe=!!v.extensions,oe=gi;v.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(oe=t.toneMapping);let De=$e?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ke={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Be,fragmentShader:K,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:Y,batching:Ut,batchingColor:Ut&&O._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&O.instanceColor!==null,instancingMorph:Ve&&O.morphTexture!==null,outputColorSpace:Pe===null?t.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ne,matcap:ut,envMap:mt,envMapMode:mt&&V.mapping,envMapPMREM:$e,envMapMaxLod:$e?De.length-1:null,envMapSize:$e?De[0].width:null,aoMap:Kt,lightMap:Ht,bumpMap:yn,normalMap:Et,displacementMap:ta,emissiveMap:Xt,normalMapObjectSpace:Et&&v.normalMapType===U1,normalMapTangentSpace:Et&&v.normalMapType===wc,packedNormalMap:Et&&v.normalMapType===wc&&b3(v.normalMap.format),metalnessMap:An,roughnessMap:Vn,anisotropy:On,anisotropyMap:Ue,clearcoat:L,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:N,diffuseRoughness:ge,diffuseRoughnessMap:j,dispersion:be,retroreflection:He,iridescence:se,iridescenceMap:W,iridescenceThicknessMap:re,sheen:tt,sheenColorMap:de,sheenRoughnessMap:J,specularMap:Q,specularColorMap:ce,specularIntensityMap:D,transmission:we,transmissionMap:$,thicknessMap:Z,gradientMap:fe,opaque:v.transparent===!1&&v.blending===fl&&v.alphaToCoverage===!1,alphaMap:le,alphaTest:ue,alphaHash:Re,combine:v.combine,mapUv:Ne&&d(v.map.channel),aoMapUv:Kt&&d(v.aoMap.channel),lightMapUv:Ht&&d(v.lightMap.channel),bumpMapUv:yn&&d(v.bumpMap.channel),normalMapUv:Et&&d(v.normalMap.channel),displacementMapUv:ta&&d(v.displacementMap.channel),emissiveMapUv:Xt&&d(v.emissiveMap.channel),metalnessMapUv:An&&d(v.metalnessMap.channel),roughnessMapUv:Vn&&d(v.roughnessMap.channel),anisotropyMapUv:Ue&&d(v.anisotropyMap.channel),clearcoatMapUv:C&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:W&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(v.sheenRoughnessMap.channel),specularMapUv:Q&&d(v.specularMap.channel),specularColorMapUv:ce&&d(v.specularColorMap.channel),specularIntensityMapUv:D&&d(v.specularIntensityMap.channel),transmissionMapUv:$&&d(v.transmissionMap.channel),thicknessMapUv:Z&&d(v.thicknessMap.channel),alphaMapUv:le&&d(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Et||On),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(Ne||le),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&Et===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(ye=>ye.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ne&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:Xt&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Qe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&v.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function y(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)b.push(I),b.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(b,v),h(b,v),b.push(t.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function g(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function h(v,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.retroreflection&&r.enable(24),b.diffuseRoughness&&r.enable(25),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function m(v){let b=c[v.type],I;if(b){let w=vi[b];I=Y1.clone(w.uniforms)}else I=v.uniforms;return I}function S(v,b){let I=f.get(b);return I!==void 0?++I.usedTimes:(I=new _3(t,b,v,i),u.push(I),f.set(b,I)),I}function _(v){if(--v.usedTimes===0){let b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:m,acquireProgram:S,releaseProgram:_,releaseShaderCache:E,programs:u,dispose:A}}function E3(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function a(r){t.delete(r)}function i(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:a,update:i,dispose:s}}function A3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function hT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pT(){let t=[],e=0,n=[],a=[],i=[];function s(){e=0,n.length=0,a.length=0,i.length=0}function r(c){let d=0;return c.isInstancedMesh&&(d+=2),c.isSkinnedMesh&&(d+=1),d}function o(c,d,x,y,g,h){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:d,material:x,materialVariant:r(c),groupOrder:y,renderOrder:c.renderOrder,z:g,group:h},t[e]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=x,m.materialVariant=r(c),m.groupOrder=y,m.renderOrder=c.renderOrder,m.z=g,m.group=h),e++,m}function l(c,d,x,y,g,h,m){m.reversedDepth===!0&&(g=-g);let S=o(c,d,x,y,g,h);x.transmission>0?a.push(S):x.transparent===!0?i.push(S):n.push(S)}function u(c,d,x,y,g,h){let m=o(c,d,x,y,g,h);x.transmission>0?a.unshift(m):x.transparent===!0?i.unshift(m):n.unshift(m)}function f(c,d){n.length>1&&n.sort(c||A3),a.length>1&&a.sort(d||hT),i.length>1&&i.sort(d||hT)}function p(){for(let c=e,d=t.length;c<d;c++){let x=t[c];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:i,init:s,push:l,unshift:u,finish:p,sort:f}}function C3(){let t=new WeakMap;function e(a,i){let s=t.get(a),r;return s===void 0?(r=new pT,t.set(a,[r])):i>=s.length?(r=new pT,s.push(r)):r=s[i],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function L3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new R,color:new Ge};break;case"SpotLight":n={position:new R,direction:new R,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new R,halfWidth:new R,halfHeight:new R};break}return t[e.id]=n,n}}}function w3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}function R3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function D3(t){let e=new L3,n=w3(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new R);let i=new R,s=new ft,r=new ft;function o(u){let f=0,p=0,c=0;for(let B=0;B<9;B++)a.probe[B].set(0,0,0);let d=0,x=0,y=0,g=0,h=0,m=0,S=0,_=0,E=0,A=0,v=0,b=0,I=0,w=0;u.sort(R3);for(let B=0,G=u.length;B<G;B++){let P=u[B],X=P.color,H=P.intensity,V=P.distance,ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hs?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=X.r*H,p+=X.g*H,c+=X.b*H;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)a.probe[Y].addScaledVector(P.sh.coefficients[Y],H);w++}else if(P.isSunLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,ne=n.get(P);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),a.sunShadow[x]=ne,a.sunShadowMap[x]=ie;let Te=ee.getViewportCount();for(let Be=0;Be<Te;Be++)a.sunShadowMatrix[y+Be]=ee.getMatrix(Be),a.sunShadowCascade[y+Be]=ee._cascadeData[Be];y+=Te,x++}a.sun[d]=Y,d++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,ne=n.get(P);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,a.directionalShadow[g]=ne,a.directionalShadowMap[g]=ie,a.directionalShadowMatrix[g]=P.shadow.matrix,E++}a.directional[g]=Y,g++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(X).multiplyScalar(H),Y.distance=V,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,a.spot[m]=Y;let ee=P.shadow;if(P.map&&(a.spotLightMap[b]=P.map,b++,ee.updateMatrices(P),P.castShadow&&I++),a.spotLightMatrix[m]=ee.matrix,P.castShadow){let ne=n.get(P);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,a.spotShadow[m]=ne,a.spotShadowMap[m]=ie,v++}m++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(X).multiplyScalar(H),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),a.rectArea[S]=Y,S++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let ee=P.shadow,ne=n.get(P);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,a.pointShadow[h]=ne,a.pointShadowMap[h]=ie,a.pointShadowMatrix[h]=P.shadow.matrix,A++}a.point[h]=Y,h++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(H),Y.groundColor.copy(P.groundColor).multiplyScalar(H),a.hemi[_]=Y,_++}}S>0&&(t.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_FLOAT_1,a.rectAreaLTC2=Se.LTC_FLOAT_2):(a.rectAreaLTC1=Se.LTC_HALF_1,a.rectAreaLTC2=Se.LTC_HALF_2)),a.ambient[0]=f,a.ambient[1]=p,a.ambient[2]=c;let O=a.hash;(O.sunLength!==d||O.directionalLength!==g||O.pointLength!==h||O.spotLength!==m||O.rectAreaLength!==S||O.hemiLength!==_||O.numSunShadows!==x||O.numDirectionalShadows!==E||O.numPointShadows!==A||O.numSpotShadows!==v||O.numSpotMaps!==b||O.numLightProbes!==w)&&(a.sun.length=d,a.directional.length=g,a.spot.length=m,a.rectArea.length=S,a.point.length=h,a.hemi.length=_,a.sunShadow.length=x,a.sunShadowMap.length=x,a.sunShadowMatrix.length=y,a.sunShadowCascade.length=y,a.directionalShadow.length=E,a.directionalShadowMap.length=E,a.directionalShadowMatrix.length=E,a.pointShadow.length=A,a.pointShadowMap.length=A,a.pointShadowMatrix.length=A,a.spotShadow.length=v,a.spotShadowMap.length=v,a.spotLightMatrix.length=v+b-I,a.spotLightMap.length=b,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=w,O.sunLength=d,O.directionalLength=g,O.pointLength=h,O.spotLength=m,O.rectAreaLength=S,O.hemiLength=_,O.numSunShadows=x,O.numDirectionalShadows=E,O.numPointShadows=A,O.numSpotShadows=v,O.numSpotMaps=b,O.numLightProbes=w,a.version=I3++)}function l(u,f){let p=0,c=0,d=0,x=0,y=0,g=0,h=f.matrixWorldInverse;for(let m=0,S=u.length;m<S;m++){let _=u[m];if(_.isSunLight){let E=a.sun[p];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(h),p++}else if(_.isDirectionalLight){let E=a.directional[c];E.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(h),c++}else if(_.isSpotLight){let E=a.spot[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(h),x++}else if(_.isRectAreaLight){let E=a.rectArea[y];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(h),r.identity(),s.copy(_.matrixWorld),s.premultiply(h),r.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),y++}else if(_.isPointLight){let E=a.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(h),d++}else if(_.isHemisphereLight){let E=a.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:a}}function mT(t){let e=new D3(t),n=[],a=[],i=[];function s(p){f.camera=p,n.length=0,a.length=0,i.length=0}function r(p){p.isLightProbeGrid?i.push(p):n.push(p)}function o(p){a.push(p)}function l(){e.setup(n),i.sort((p,c)=>p.priority-c.priority||p.id-c.id)}function u(p){e.setupView(n,p)}let f={lightsArray:n,shadowsArray:a,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o}}function P3(t){let e=new WeakMap;function n(i,s=0){let r=e.get(i),o;return r===void 0?(o=new mT(t),e.set(i,[o])):s>=r.length?(o=new mT(t),r.push(o)):o=r[s],o}function a(){e=new WeakMap}return{get:n,dispose:a}}function F3(t,e,n){let a=new Ns,i=new xe,s=new xe,r=new Bt,o=new Ah,l=new Ch,u={},f=n.maxTextureSize,p={[pi]:ln,[ln]:pi,[mi]:mi},c=new Pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:U3,fragmentShader:O3}),d=c.clone();d.defines.HORIZONTAL_PASS=1;let x=new Lt;x.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Le(x,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let h=this.type;this.render=function(A,v,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===zh&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sc);let I=t.getRenderTarget(),w=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Mr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=h!==this.type;G&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=A.length;P<X;P++){let H=A[P],V=H.shadow;if(V===void 0){Oe("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ie=V.getFrameExtents();i.multiply(ie),s.copy(V.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/ie.x),i.x=s.x*ie.x,V.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/ie.y),i.y=s.y*ie.y,V.mapSize.y=s.y));let Y=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||G===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===cl){if(H.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new pa(i.x,i.y,{format:Hs,type:Ja,minFilter:kn,magFilter:kn,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new Ji(i.x,i.y,Ua),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=Zi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn}else H.isPointLight?(V.map=new Dc(i.x),V.map.depthTexture=new ic(i.x,Za)):(V.map=new pa(i.x,i.y),V.map.depthTexture=new Ji(i.x,i.y,Za)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=Zi,this.type===Sc?(V.map.depthTexture.compareFunction=Y?wx:Lx,V.map.depthTexture.minFilter=kn,V.map.depthTexture.magFilter=kn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let ee=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();H.isPointLight!==!0&&V.updateMatrices(H,b);let ne=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Te=0;Te<ee;Te++){let Be=V.getCamera(Te);if(H.isPointLight){let K=V.camera,me=V.matrix,_e=H.distance||K.far;_e!==K.far&&(K.far=_e,K.updateProjectionMatrix()),Ic.setFromMatrixPosition(H.matrixWorld),K.position.copy(Ic),qx.copy(K.position),qx.add(N3[Te]),K.up.copy(B3[Te]),K.lookAt(qx),K.updateMatrixWorld(),me.makeTranslation(-Ic.x,-Ic.y,-Ic.z),gT.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V._frustum.setFromProjectionMatrix(gT,K.coordinateSystem,K.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Te),t.clear();else{Te===0&&(t.setRenderTarget(V.map),t.clear());let K=V.getViewport(Te);r.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),B.viewport(r)}a=V.getFrustum(Te),_(v,b,Be,H,ne,this.type)}V.isPointLightShadow!==!0&&this.type===cl&&m(V,b),V.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(I,w,O)};function m(A,v){let b=e.update(y);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new pa(i.x,i.y,{format:Hs,type:Ja}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value.set(A.map.width,A.map.height),c.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(v,null,b,c,y,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(v,null,b,d,y,null)}function S(A,v,b,I){let w=null,O=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)w=O;else if(w=b.isPointLight===!0?l:o,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let B=w.uuid,G=v.uuid,P=u[B];P===void 0&&(P={},u[B]=P);let X=P[G];X===void 0&&(X=w.clone(),P[G]=X,v.addEventListener("dispose",E)),w=X}if(w.visible=v.visible,w.wireframe=v.wireframe,I===cl?w.side=v.shadowSide!==null?v.shadowSide:v.side:w.side=v.shadowSide!==null?v.shadowSide:p[v.side],w.alphaMap=v.alphaMap,w.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,w.map=v.map,w.clipShadows=v.clipShadows,w.clippingPlanes=v.clippingPlanes,w.clipIntersection=v.clipIntersection,w.displacementMap=v.displacementMap,w.displacementScale=v.displacementScale,w.displacementBias=v.displacementBias,w.wireframeLinewidth=v.wireframeLinewidth,w.linewidth=v.linewidth,b.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let B=t.properties.get(w);B.light=b}return w}function _(A,v,b,I,w,O){if(A.visible===!1)return;if(A.layers.test(w)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===cl)&&(!A.frustumCulled||A.intersectsFrustum(a))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let P=e.update(A),X=A.material;if(Array.isArray(X)){let H=P.groups;for(let V=0,ie=H.length;V<ie;V++){let Y=H[V],ee=X[Y.materialIndex];if(ee&&ee.visible){let ne=S(A,ee,I,O);A.onBeforeShadow(t,A,v,b,P,ne,Y),t.renderBufferDirect(b,null,P,ne,A,Y),A.onAfterShadow(t,A,v,b,P,ne,Y)}}}else if(X.visible){let H=S(A,X,I,O);A.onBeforeShadow(t,A,v,b,P,H,null),t.renderBufferDirect(b,null,P,H,A,null),A.onAfterShadow(t,A,v,b,P,H,null)}}let G=A.children;for(let P=0,X=G.length;P<X;P++)_(G[P],v,b,I,w,O)}function E(A){A.target.removeEventListener("dispose",E);for(let b in u){let I=u[b],w=A.target.uuid;w in I&&(I[w].dispose(),delete I[w])}}}function z3(t,e){function n(){let D=!1,$=new Bt,Z=null,fe=new Bt(0,0,0,0);return{setMask:function(le){Z!==le&&!D&&(t.colorMask(le,le,le,le),Z=le)},setLocked:function(le){D=le},setClear:function(le,ue,Re,Qe,oe){oe===!0&&(le*=Qe,ue*=Qe,Re*=Qe),$.set(le,ue,Re,Qe),fe.equals($)===!1&&(t.clearColor(le,ue,Re,Qe),fe.copy($))},reset:function(){D=!1,Z=null,fe.set(-1,0,0,0)}}}function a(){let D=!1,$=!1,Z=null,fe=null,le=null;return{setReversed:function(ue){if($!==ue){let Re=e.get("EXT_clip_control");ue?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),$=ue;let Qe=le;le=null,this.setClear(Qe)}},getReversed:function(){return $},setTest:function(ue){ue?ve(t.DEPTH_TEST):Ve(t.DEPTH_TEST)},setMask:function(ue){Z!==ue&&!D&&(t.depthMask(ue),Z=ue)},setFunc:function(ue){if($&&(ue=q1[ue]),fe!==ue){switch(ue){case th:t.depthFunc(t.NEVER);break;case nh:t.depthFunc(t.ALWAYS);break;case ah:t.depthFunc(t.LESS);break;case Wo:t.depthFunc(t.LEQUAL);break;case ih:t.depthFunc(t.EQUAL);break;case sh:t.depthFunc(t.GEQUAL);break;case rh:t.depthFunc(t.GREATER);break;case oh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=ue}},setLocked:function(ue){D=ue},setClear:function(ue){le!==ue&&(le=ue,$&&(ue=1-ue),t.clearDepth(ue))},reset:function(){D=!1,Z=null,fe=null,le=null,$=!1}}}function i(){let D=!1,$=null,Z=null,fe=null,le=null,ue=null,Re=null,Qe=null,oe=null;return{setTest:function(De){D||(De?ve(t.STENCIL_TEST):Ve(t.STENCIL_TEST))},setMask:function(De){$!==De&&!D&&(t.stencilMask(De),$=De)},setFunc:function(De,Ke,ye){(Z!==De||fe!==Ke||le!==ye)&&(t.stencilFunc(De,Ke,ye),Z=De,fe=Ke,le=ye)},setOp:function(De,Ke,ye){(ue!==De||Re!==Ke||Qe!==ye)&&(t.stencilOp(De,Ke,ye),ue=De,Re=Ke,Qe=ye)},setLocked:function(De){D=De},setClear:function(De){oe!==De&&(t.clearStencil(De),oe=De)},reset:function(){D=!1,$=null,Z=null,fe=null,le=null,ue=null,Re=null,Qe=null,oe=null}}}let s=new n,r=new a,o=new i,l={},u=new WeakMap,f={},p={},c={},d=new WeakMap,x=[],y=null,g=!1,h=null,m=null,S=null,_=null,E=null,A=null,v=null,b=new Ge(0,0,0),I=0,w=!1,O=null,B=null,G=null,P=null,X=null,H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ie=0,Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=ie>=2);let ee=null,ne={},Te=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),K=new Bt().fromArray(Te),me=new Bt().fromArray(Be);function _e(D,$,Z,fe){let le=new Uint8Array(4),ue=t.createTexture();t.bindTexture(D,ue),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<Z;Re++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D($,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D($+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return ue}let Pe={};Pe[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(t.DEPTH_TEST),r.setFunc(Wo),yn(!1),Et(cx),ve(t.CULL_FACE),Kt(Mr);function ve(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function Ve(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function Ut(D,$){return c[D]!==$?(t.bindFramebuffer(D,$),c[D]=$,D===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=$),D===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=$),!0):!1}function Ne(D,$){let Z=x,fe=!1;if(D){Z=d.get($),Z===void 0&&(Z=[],d.set($,Z));let le=D.textures;if(Z.length!==le.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Re=le.length;ue<Re;ue++)Z[ue]=t.COLOR_ATTACHMENT0+ue;Z.length=le.length,fe=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,fe=!0);fe&&t.drawBuffers(Z)}function ut(D){return y!==D?(t.useProgram(D),y=D,!0):!1}let mt={[br]:t.FUNC_ADD,[h1]:t.FUNC_SUBTRACT,[p1]:t.FUNC_REVERSE_SUBTRACT};mt[m1]=t.MIN,mt[g1]=t.MAX;let $e={[x1]:t.ZERO,[v1]:t.ONE,[y1]:t.SRC_COLOR,[hx]:t.SRC_ALPHA,[E1]:t.SRC_ALPHA_SATURATE,[b1]:t.DST_COLOR,[_1]:t.DST_ALPHA,[S1]:t.ONE_MINUS_SRC_COLOR,[px]:t.ONE_MINUS_SRC_ALPHA,[T1]:t.ONE_MINUS_DST_COLOR,[M1]:t.ONE_MINUS_DST_ALPHA,[A1]:t.CONSTANT_COLOR,[C1]:t.ONE_MINUS_CONSTANT_COLOR,[L1]:t.CONSTANT_ALPHA,[w1]:t.ONE_MINUS_CONSTANT_ALPHA};function Kt(D,$,Z,fe,le,ue,Re,Qe,oe,De){if(D===Mr){g===!0&&(Ve(t.BLEND),g=!1);return}if(g===!1&&(ve(t.BLEND),g=!0),D!==d1){if(D!==h||De!==w){if((m!==br||E!==br)&&(t.blendEquation(t.FUNC_ADD),m=br,E=br),De)switch(D){case fl:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dl:t.blendFunc(t.ONE,t.ONE);break;case fx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ze("WebGLState: Invalid blending: ",D);break}else switch(D){case fl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fx:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dx:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",D);break}S=null,_=null,A=null,v=null,b.set(0,0,0),I=0,h=D,w=De}return}le=le||$,ue=ue||Z,Re=Re||fe,($!==m||le!==E)&&(t.blendEquationSeparate(mt[$],mt[le]),m=$,E=le),(Z!==S||fe!==_||ue!==A||Re!==v)&&(t.blendFuncSeparate($e[Z],$e[fe],$e[ue],$e[Re]),S=Z,_=fe,A=ue,v=Re),(Qe.equals(b)===!1||oe!==I)&&(t.blendColor(Qe.r,Qe.g,Qe.b,oe),b.copy(Qe),I=oe),h=D,w=!1}function Ht(D,$){D.side===mi?Ve(t.CULL_FACE):ve(t.CULL_FACE);let Z=D.side===ln;$&&(Z=!Z),yn(Z),D.blending===fl&&D.transparent===!1?Kt(Mr):Kt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Xt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function yn(D){O!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),O=D)}function Et(D){D!==c1?(ve(t.CULL_FACE),D!==B&&(D===cx?t.cullFace(t.BACK):D===f1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ve(t.CULL_FACE),B=D}function ta(D){D!==G&&(V&&t.lineWidth(D),G=D)}function Xt(D,$,Z){D?(ve(t.POLYGON_OFFSET_FILL),(P!==$||X!==Z)&&(P=$,X=Z,r.getReversed()&&($=-$,Z=-Z),t.polygonOffset($,Z))):Ve(t.POLYGON_OFFSET_FILL)}function An(D){D?ve(t.SCISSOR_TEST):Ve(t.SCISSOR_TEST)}function Vn(D){D===void 0&&(D=t.TEXTURE0+H-1),ee!==D&&(t.activeTexture(D),ee=D)}function On(D,$,Z){Z===void 0&&(ee===null?Z=t.TEXTURE0+H-1:Z=ee);let fe=ne[Z];fe===void 0&&(fe={type:void 0,texture:void 0},ne[Z]=fe),(fe.type!==D||fe.texture!==$)&&(ee!==Z&&(t.activeTexture(Z),ee=Z),t.bindTexture(D,$||Pe[D]),fe.type=D,fe.texture=$)}function L(){let D=ne[ee];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ge(){try{t.compressedTexImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function be(){try{t.compressedTexImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function He(){try{t.texSubImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function se(){try{t.texSubImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function tt(){try{t.compressedTexSubImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function Ue(){try{t.texStorage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function C(){try{t.texStorage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function M(){try{t.texImage2D(...arguments)}catch(D){ze("WebGLState:",D)}}function N(){try{t.texImage3D(...arguments)}catch(D){ze("WebGLState:",D)}}function j(D){return p[D]!==void 0?p[D]:t.getParameter(D)}function W(D,$){p[D]!==$&&(t.pixelStorei(D,$),p[D]=$)}function re(D){K.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function de(D){me.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),me.copy(D))}function J(D,$){let Z=u.get($);Z===void 0&&(Z=new WeakMap,u.set($,Z));let fe=Z.get(D);fe===void 0&&(fe=t.getUniformBlockIndex($,D.name),t.uniformBlockBinding($,fe,fe),Z.set(D,fe))}function Q(D,$,Z){let le=u.get($).get(D);l[le]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,le,Z),l[le]=Z)}function ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},ee=null,ne={},c={},l={},d=new WeakMap,x=[],y=null,g=!1,h=null,m=null,S=null,_=null,E=null,A=null,v=null,b=new Ge(0,0,0),I=0,w=!1,O=null,B=null,G=null,P=null,X=null,K.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ve,disable:Ve,bindFramebuffer:Ut,drawBuffers:Ne,useProgram:ut,setBlending:Kt,setMaterial:Ht,setFlipSided:yn,setCullFace:Et,setLineWidth:ta,setPolygonOffset:Xt,setScissorTest:An,activeTexture:Vn,bindTexture:On,unbindTexture:L,compressedTexImage2D:ge,compressedTexImage3D:be,texImage2D:M,texImage3D:N,pixelStorei:W,getParameter:j,updateUBOMapping:J,uniformBlockBinding:Q,texStorage2D:Ue,texStorage3D:C,texSubImage2D:He,texSubImage3D:se,compressedTexSubImage2D:tt,compressedTexSubImage3D:we,scissor:re,viewport:de,reset:ce}}function H3(t,e,n,a,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new xe,f=new WeakMap,p=new Set,c,d=new WeakMap,x=new Set,y=new FinalizationRegistry(C=>x.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(C,M){return g?new OffscreenCanvas(C,M):Yo("canvas")}function m(C,M,N){let j=1,W=Ue(C);if((W.width>N||W.height>N)&&(j=N/Math.max(W.width,W.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let re=Math.floor(j*W.width),de=Math.floor(j*W.height);c===void 0&&(c=h(re,de));let J=M?h(re,de):c;return J.width=re,J.height=de,J.getContext("2d").drawImage(C,0,0,re,de),Oe("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+re+"x"+de+")."),J}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),C;return C}function S(C){return C.generateMipmaps}function _(C){t.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(C,M,N,j,W,re=!1){if(C!==null){if(t[C]!==void 0)return t[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de;j&&(de=e.get("EXT_texture_norm16"),de||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===t.RED&&(N===t.FLOAT&&(J=t.R32F),N===t.HALF_FLOAT&&(J=t.R16F),N===t.UNSIGNED_BYTE&&(J=t.R8),N===t.UNSIGNED_SHORT&&de&&(J=de.R16_EXT),N===t.SHORT&&de&&(J=de.R16_SNORM_EXT)),M===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(J=t.R8UI),N===t.UNSIGNED_SHORT&&(J=t.R16UI),N===t.UNSIGNED_INT&&(J=t.R32UI),N===t.BYTE&&(J=t.R8I),N===t.SHORT&&(J=t.R16I),N===t.INT&&(J=t.R32I)),M===t.RG&&(N===t.FLOAT&&(J=t.RG32F),N===t.HALF_FLOAT&&(J=t.RG16F),N===t.UNSIGNED_BYTE&&(J=t.RG8),N===t.UNSIGNED_SHORT&&de&&(J=de.RG16_EXT),N===t.SHORT&&de&&(J=de.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(J=t.RG8UI),N===t.UNSIGNED_SHORT&&(J=t.RG16UI),N===t.UNSIGNED_INT&&(J=t.RG32UI),N===t.BYTE&&(J=t.RG8I),N===t.SHORT&&(J=t.RG16I),N===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(J=t.RGB8UI),N===t.UNSIGNED_SHORT&&(J=t.RGB16UI),N===t.UNSIGNED_INT&&(J=t.RGB32UI),N===t.BYTE&&(J=t.RGB8I),N===t.SHORT&&(J=t.RGB16I),N===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),N===t.UNSIGNED_INT&&(J=t.RGBA32UI),N===t.BYTE&&(J=t.RGBA8I),N===t.SHORT&&(J=t.RGBA16I),N===t.INT&&(J=t.RGBA32I)),M===t.RGB&&(N===t.UNSIGNED_SHORT&&de&&(J=de.RGB16_EXT),N===t.SHORT&&de&&(J=de.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),M===t.RGBA){let Q=re?Wu:ot.getTransfer(W);N===t.FLOAT&&(J=t.RGBA32F),N===t.HALF_FLOAT&&(J=t.RGBA16F),N===t.UNSIGNED_BYTE&&(J=Q===gt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&de&&(J=de.RGBA16_EXT),N===t.SHORT&&de&&(J=de.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(C,M){let N;return C?M===null||M===Za||M===Er?N=t.DEPTH24_STENCIL8:M===Ua?N=t.DEPTH32F_STENCIL8:M===pl&&(N=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Za||M===Er?N=t.DEPTH_COMPONENT24:M===Ua?N=t.DEPTH_COMPONENT32F:M===pl&&(N=t.DEPTH_COMPONENT16),N}function b(C,M){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==vn&&C.minFilter!==kn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){let M=new WeakRef(C);a.get(C).__ref=M,x.add(M),y.register(C,M,M)}function w(C){let M=a.get(C).__ref;M!==void 0&&(x.delete(M),y.unregister(M))}function O(C){G(C.target)}function B(C){P(C.target)}function G(C){C.removeEventListener("dispose",O),w(C),H(C),C.isVideoTexture&&f.delete(C),C.isHTMLTexture&&p.delete(C)}function P(C){C.removeEventListener("dispose",B),w(C),ie(C)}function X(){for(let C of x){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):G(M))}x.clear(),p.clear()}function H(C){let M=a.get(C);if(M.__webglInit===void 0)return;let N=C.source,j=d.get(N);if(j){let W=j[M.__cacheKey];W.usedTimes--,W.usedTimes===0&&V(C),Object.keys(j).length===0&&d.delete(N)}a.remove(C)}function V(C){let M=a.get(C);t.deleteTexture(M.__webglTexture);let N=C.source,j=d.get(N);delete j[M.__cacheKey],r.memory.textures--}function ie(C){let M=a.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let N=C.depthTexture;if(N&&N.renderTarget===C&&G(N),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let re=0;re<M.__webglFramebuffer[W].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[W][re]);else t.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)t.deleteFramebuffer(M.__webglFramebuffer[W]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let j=C.textures;for(let W=0,re=j.length;W<re;W++){let de=a.get(j[W]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),r.memory.textures--),a.remove(j[W])}a.remove(C)}let Y=0;function ee(){Y=0}function ne(){return Y}function Te(C){Y=C}function Be(){let C=Y;return C>=i.maxTextures&&Oe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),Y+=1,C}function K(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function me(C,M){let N=a.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){let j=C.image;if(j===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(N,C,M);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+M)}function _e(C,M){let N=a.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Ht(N,C,M);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+M)}function Pe(C,M){let N=a.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){Ht(N,C,M);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+M)}function ve(C,M){let N=a.get(C);if(C.version>0&&N.__version!==C.version){yn(N,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+M)}let Ve={[xr]:t.REPEAT,[li]:t.CLAMP_TO_EDGE,[lh]:t.MIRRORED_REPEAT},Ut={[vn]:t.NEAREST,[D1]:t.NEAREST_MIPMAP_NEAREST,[Mc]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[Vh]:t.LINEAR_MIPMAP_NEAREST,[Qi]:t.LINEAR_MIPMAP_LINEAR},Ne={[N1]:t.NEVER,[Ix]:t.ALWAYS,[B1]:t.LESS,[Lx]:t.LEQUAL,[F1]:t.EQUAL,[wx]:t.GEQUAL,[z1]:t.GREATER,[H1]:t.NOTEQUAL};function ut(C,M){if(M.type===Ua&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===kn||M.magFilter===Vh||M.magFilter===Mc||M.magFilter===Qi||M.minFilter===kn||M.minFilter===Vh||M.minFilter===Mc||M.minFilter===Qi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Ve[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Ve[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Ve[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Ut[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Ut[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===vn||M.minFilter!==Mc&&M.minFilter!==Qi||M.type===Ua&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function mt(C,M){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",O),I(M));let j=M.source,W=d.get(j);W===void 0&&(W={},d.set(j,W));let re=K(M);if(re!==C.__cacheKey){W[re]===void 0&&(W[re]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,N=!0),W[re].usedTimes++;let de=W[C.__cacheKey];de!==void 0&&(W[C.__cacheKey].usedTimes--,de.usedTimes===0&&V(M)),C.__cacheKey=re,C.__webglTexture=W[re].texture}return N}function $e(C,M,N){return Math.floor(Math.floor(C/N)/M)}function Kt(C,M,N,j){let re=C.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,N,j,M.data);else{re.sort((D,$)=>D.start-$.start);let de=0;for(let D=1;D<re.length;D++){let $=re[de],Z=re[D],fe=$.start+$.count,le=$e(Z.start,M.width,4),ue=$e($.start,M.width,4);Z.start<=fe+1&&le===ue&&$e(Z.start+Z.count-1,M.width,4)===le?$.count=Math.max($.count,Z.start+Z.count-$.start):(++de,re[de]=Z)}re.length=de+1;let J=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let D=0,$=re.length;D<$;D++){let Z=re[D],fe=Math.floor(Z.start/4),le=Math.ceil(Z.count/4),ue=fe%M.width,Re=Math.floor(fe/M.width),Qe=le,oe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,Re),n.texSubImage2D(t.TEXTURE_2D,0,ue,Re,Qe,oe,N,j,M.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function Ht(C,M,N){let j=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=t.TEXTURE_3D);let W=mt(C,M),re=M.source;n.bindTexture(j,C.__webglTexture,t.TEXTURE0+N);let de=a.get(re);if(re.version!==de.__version||W===!0){if(n.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let oe=ot.getPrimaries(ot.workingColorSpace),De=M.colorSpace===Qa?null:ot.getPrimaries(M.colorSpace),Ke=M.colorSpace===Qa||oe===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=m(M.image,!1,i.maxTextureSize);Q=we(M,Q);let ce=s.convert(M.format,M.colorSpace),D=s.convert(M.type),$=A(M.internalFormat,ce,D,M.normalized,M.colorSpace,M.isVideoTexture);ut(j,M);let Z,fe=M.mipmaps,le=M.isVideoTexture!==!0,ue=de.__version===void 0||W===!0,Re=re.dataReady,Qe=b(M,Q);if(M.isDepthTexture)$=v(M.format===ji,M.type),ue&&(le?n.texStorage2D(t.TEXTURE_2D,1,$,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,$,Q.width,Q.height,0,ce,D,null));else if(M.isDataTexture)if(fe.length>0){le&&ue&&n.texStorage2D(t.TEXTURE_2D,Qe,$,fe[0].width,fe[0].height);for(let oe=0,De=fe.length;oe<De;oe++)Z=fe[oe],le?Re&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,ce,D,Z.data):n.texImage2D(t.TEXTURE_2D,oe,$,Z.width,Z.height,0,ce,D,Z.data);M.generateMipmaps=!1}else le?(ue&&n.texStorage2D(t.TEXTURE_2D,Qe,$,Q.width,Q.height),Re&&Kt(M,Q,ce,D)):n.texImage2D(t.TEXTURE_2D,0,$,Q.width,Q.height,0,ce,D,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Qe,$,fe[0].width,fe[0].height,Q.depth);for(let oe=0,De=fe.length;oe<De;oe++)if(Z=fe[oe],M.format!==Ka)if(ce!==null)if(le){if(Re)if(M.layerUpdates.size>0){let Ke=kx(Z.width,Z.height,M.format,M.type);for(let ye of M.layerUpdates){let xt=Z.data.subarray(ye*Ke/Z.data.BYTES_PER_ELEMENT,(ye+1)*Ke/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,ye,Z.width,Z.height,1,ce,xt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,Q.depth,ce,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,$,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Re&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,Q.depth,ce,D,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,$,Z.width,Z.height,Q.depth,0,ce,D,Z.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&ue&&n.texStorage2D(t.TEXTURE_2D,Qe,$,fe[0].width,fe[0].height);for(let oe=0,De=fe.length;oe<De;oe++)Z=fe[oe],M.format!==Ka?ce!==null?le?Re&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,ce,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,$,Z.width,Z.height,0,Z.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Re&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,ce,D,Z.data):n.texImage2D(t.TEXTURE_2D,oe,$,Z.width,Z.height,0,ce,D,Z.data)}else if(M.isDataArrayTexture)if(le){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Qe,$,Q.width,Q.height,Q.depth),Re)if(M.layerUpdates.size>0){let oe=kx(Q.width,Q.height,M.format,M.type);for(let De of M.layerUpdates){let Ke=Q.data.subarray(De*oe/Q.data.BYTES_PER_ELEMENT,(De+1)*oe/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,De,Q.width,Q.height,1,ce,D,Ke)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,D,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,$,Q.width,Q.height,Q.depth,0,ce,D,Q.data);else if(M.isData3DTexture)le?(ue&&n.texStorage3D(t.TEXTURE_3D,Qe,$,Q.width,Q.height,Q.depth),Re&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,D,Q.data)):n.texImage3D(t.TEXTURE_3D,0,$,Q.width,Q.height,Q.depth,0,ce,D,Q.data);else if(M.isFramebufferTexture){if(ue)if(le)n.texStorage2D(t.TEXTURE_2D,Qe,$,Q.width,Q.height);else{let oe=Q.width,De=Q.height;for(let Ke=0;Ke<Qe;Ke++)n.texImage2D(t.TEXTURE_2D,Ke,$,oe,De,0,ce,D,null),oe>>=1,De>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){let oe=t.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),Q.parentNode!==oe){oe.appendChild(Q),p.add(M),oe.onpaint=De=>{let Ke=De.changedElements;for(let ye of p)Ke.includes(ye.image)&&(ye.needsUpdate=!0)},oe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{let Ke=t.RGBA,ye=t.RGBA,xt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ke,ye,xt,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(fe.length>0){if(le&&ue){let oe=Ue(fe[0]);n.texStorage2D(t.TEXTURE_2D,Qe,$,oe.width,oe.height)}for(let oe=0,De=fe.length;oe<De;oe++)Z=fe[oe],le?Re&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,ce,D,Z):n.texImage2D(t.TEXTURE_2D,oe,$,ce,D,Z);M.generateMipmaps=!1}else if(le){if(ue){let oe=Ue(Q);n.texStorage2D(t.TEXTURE_2D,Qe,$,oe.width,oe.height)}Re&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,D,Q)}else n.texImage2D(t.TEXTURE_2D,0,$,ce,D,Q);S(M)&&M.mipmapsAutoUpdate===!0&&_(j),de.__version=re.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function yn(C,M,N){if(M.image.length!==6)return;let j=mt(C,M),W=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+N);let re=a.get(W);if(W.version!==re.__version||j===!0){n.activeTexture(t.TEXTURE0+N);let de=ot.getPrimaries(ot.workingColorSpace),J=M.colorSpace===Qa?null:ot.getPrimaries(M.colorSpace),Q=M.colorSpace===Qa||de===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ce=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,$=[];for(let ye=0;ye<6;ye++)!ce&&!D?$[ye]=m(M.image[ye],!0,i.maxCubemapSize):$[ye]=D?M.image[ye].image:M.image[ye],$[ye]=we(M,$[ye]);let Z=$[0],fe=s.convert(M.format,M.colorSpace),le=s.convert(M.type),ue=A(M.internalFormat,fe,le,M.normalized,M.colorSpace),Re=M.isVideoTexture!==!0,Qe=re.__version===void 0||j===!0,oe=W.dataReady,De=b(M,Z);ut(t.TEXTURE_CUBE_MAP,M);let Ke;if(M.isDepthTexture){if(ue=v(M.format===ji,M.type),Qe)if(Re)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ue,Z.width,Z.height);else for(let ye=0;ye<6;ye++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ue,Z.width,Z.height,0,fe,le,null)}else if(ce){Re&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,ue,Z.width,Z.height);for(let ye=0;ye<6;ye++){Ke=$[ye].mipmaps;for(let xt=0;xt<Ke.length;xt++){let dn=Ke[xt];M.format!==Ka?fe!==null?Re?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xt,0,0,dn.width,dn.height,fe,dn.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xt,ue,dn.width,dn.height,0,dn.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xt,0,0,dn.width,dn.height,fe,le,dn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xt,ue,dn.width,dn.height,0,fe,le,dn.data)}}}else{if(Ke=M.mipmaps,Re&&Qe){Ke.length>0&&De++;let ye=Ue($[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,ue,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(D){Re?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,$[ye].width,$[ye].height,fe,le,$[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ue,$[ye].width,$[ye].height,0,fe,le,$[ye].data);for(let xt=0;xt<Ke.length;xt++){let es=Ke[xt].image[ye].image;Re?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xt+1,0,0,es.width,es.height,fe,le,es.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xt+1,ue,es.width,es.height,0,fe,le,es.data)}}else{Re?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,fe,le,$[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ue,fe,le,$[ye]);for(let xt=0;xt<Ke.length;xt++){let dn=Ke[xt];Re?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xt+1,0,0,fe,le,dn.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,xt+1,ue,fe,le,dn.image[ye])}}}S(M)&&M.mipmapsAutoUpdate===!0&&_(t.TEXTURE_CUBE_MAP),re.__version=W.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Et(C,M,N,j,W,re){let de=s.convert(N.format,N.colorSpace),J=s.convert(N.type),Q=A(N.internalFormat,de,J,N.normalized,N.colorSpace),ce=a.get(M),D=a.get(N);if(D.__renderTarget=M,!ce.__hasExternalTextures){let $=Math.max(1,M.width>>re),Z=Math.max(1,M.height>>re);W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?n.texImage3D(W,re,Q,$,Z,M.depth,0,de,J,null):n.texImage2D(W,re,Q,$,Z,0,de,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),se(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,W,D.__webglTexture,0,He(M)):(W===t.TEXTURE_2D||W>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,W,D.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ta(C,M,N){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){let j=M.depthTexture,W=j&&j.isDepthTexture?j.type:null,re=v(M.stencilBuffer,W),de=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;se(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He(M),re,M.width,M.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,He(M),re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,C)}else{let j=M.textures;for(let W=0;W<j.length;W++){let re=j[W],de=s.convert(re.format,re.colorSpace),J=s.convert(re.type),Q=A(re.internalFormat,de,J,re.normalized,re.colorSpace);se(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He(M),Q,M.width,M.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,He(M),Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xt(C,M,N){let j=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=a.get(M.depthTexture);W.__renderTarget=M;let re=j?M.depthTexture.image[0]:M.depthTexture.image;(!W.__webglTexture||re.width!==M.width||re.height!==M.height)&&(re.width=M.width,re.height=M.height,M.depthTexture.needsUpdate=!0),j?ve(M.depthTexture,0):me(M.depthTexture,0);let de=W.__webglTexture,J=He(M),Q=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,ce=M.depthTexture.format===ji?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)se(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,Q,de,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,ce,Q,de,0);else if(M.depthTexture.format===ji)se(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,Q,de,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,ce,Q,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function An(C){let M=a.get(C),N=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){let W=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",W)};j.addEventListener("dispose",W),M.__depthDisposeCallback=W}M.__boundDepthTexture=j}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(N)for(let j=0;j<6;j++)Xt(M.__webglFramebuffer[j],C,j);else C.texture.mipmaps.length>0?Xt(M.__webglFramebuffer[0],C,0):Xt(M.__webglFramebuffer,C,0);else if(N){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=t.createRenderbuffer(),ta(M.__webglDepthbuffer[j],C,!1);else{let W=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,re)}}else if(C.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ta(M.__webglDepthbuffer,C,!1);else{let W=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Vn(C,M,N){let j=a.get(C);M!==void 0&&Et(j.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&An(C)}function On(C){let M=C.texture,N=a.get(C),j=a.get(M);C.addEventListener("dispose",B),I(C);let W=C.textures,re=C.isWebGLCubeRenderTarget===!0,de=W.length>1;if(de||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=M.version,r.memory.textures++),re){N.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps.length>0){N.__webglFramebuffer[J]=[];for(let Q=0;Q<M.mipmaps.length;Q++)N.__webglFramebuffer[J][Q]=t.createFramebuffer()}else N.__webglFramebuffer[J]=t.createFramebuffer()}else{if(M.mipmaps.length>0){N.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)N.__webglFramebuffer[J]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(de)for(let J=0,Q=W.length;J<Q;J++){let ce=a.get(W[J]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),r.memory.textures++)}if(C.samples>0&&se(C)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let J=0;J<W.length;J++){let Q=W[J];N.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[J]);let ce=s.convert(Q.format,Q.colorSpace),D=s.convert(Q.type),$=A(Q.internalFormat,ce,D,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),Z=He(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,$,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,N.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),ta(N.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),ut(t.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Et(N.__webglFramebuffer[J][Q],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Et(N.__webglFramebuffer[J],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);S(M)?_(t.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),n.unbindTexture()}else if(de){for(let J=0,Q=W.length;J<Q;J++){let ce=W[J],D=a.get(ce),$=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,D.__webglTexture),ut($,ce),Et(N.__webglFramebuffer,C,ce,t.COLOR_ATTACHMENT0+J,$,0),S(ce)&&_($)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,j.__webglTexture),ut(J,M),M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Et(N.__webglFramebuffer[Q],C,M,t.COLOR_ATTACHMENT0,J,Q);else Et(N.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,J,0);S(M)?_(J):M.mipmaps.length>0&&t.texParameteri(J,t.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),n.unbindTexture()}C.depthBuffer&&An(C)}function L(C){let M=C.textures;for(let N=0,j=M.length;N<j;N++){let W=M[N];if(S(W)&&W.mipmapsAutoUpdate===!0){let re=E(C),de=a.get(W).__webglTexture;n.bindTexture(re,de),_(re),n.unbindTexture()}}}let ge=[];function be(C){if(C.samples>0){if(se(C)===!1){let M=C.textures,N=C.width,j=C.height,W=t.COLOR_BUFFER_BIT,re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=a.get(C),J=M.length>1;if(J)for(let ce=0;ce<M.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(W|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(W|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let D=a.get(M[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,D,0)}t.blitFramebuffer(0,0,N,j,0,0,N,j,W,t.NEAREST),l===!0&&(ge.length=0,ge.push(t.COLOR_ATTACHMENT0+ce),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ge.push(re),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ce=0;ce<M.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,de.__webglColorRenderbuffer[ce]);let D=a.get(M[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,D,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function He(C){return Math.min(i.maxSamples,C.samples)}function se(C){let M=a.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tt(C){let M=r.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function we(C,M){let N=C.colorSpace,j=C.format,W=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==qu&&N!==Qa&&(ot.getTransfer(N)===gt?(j!==Ka||W!==$n)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",N)),M}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=Be,this.resetTextureUnits=ee,this.getTextureUnits=ne,this.setTextureUnits=Te,this.setTexture2D=me,this.setTexture2DArray=_e,this.setTexture3D=Pe,this.setTextureCube=ve,this.rebindTextures=Vn,this.setupRenderTarget=On,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=An,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=se,this.dispose=X}function k3(t,e){function n(a,i=Qa){let s,r=ot.getTransfer(i);if(a===$n)return t.UNSIGNED_BYTE;if(a===Wh)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Xh)return t.UNSIGNED_SHORT_5_5_5_1;if(a===Tx)return t.UNSIGNED_INT_5_9_9_9_REV;if(a===Ex)return t.UNSIGNED_INT_10F_11F_11F_REV;if(a===Mx)return t.BYTE;if(a===bx)return t.SHORT;if(a===pl)return t.UNSIGNED_SHORT;if(a===qh)return t.INT;if(a===Za)return t.UNSIGNED_INT;if(a===Ua)return t.FLOAT;if(a===Ja)return t.HALF_FLOAT;if(a===Ax)return t.ALPHA;if(a===Cx)return t.RGB;if(a===Ka)return t.RGBA;if(a===Zi)return t.DEPTH_COMPONENT;if(a===ji)return t.DEPTH_STENCIL;if(a===Yh)return t.RED;if(a===Zh)return t.RED_INTEGER;if(a===Hs)return t.RG;if(a===Jh)return t.RG_INTEGER;if(a===Kh)return t.RGBA_INTEGER;if(a===bc||a===Tc||a===Ec||a===Ac)if(r===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ac)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Qh||a===jh||a===$h||a===ep)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$h)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ep)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===tp||a===np||a===ap||a===ip||a===sp||a===Cc||a===rp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===tp||a===np)return r===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===ap)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(a===ip)return s.COMPRESSED_R11_EAC;if(a===sp)return s.COMPRESSED_SIGNED_R11_EAC;if(a===Cc)return s.COMPRESSED_RG11_EAC;if(a===rp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===op||a===lp||a===up||a===cp||a===fp||a===dp||a===hp||a===pp||a===mp||a===gp||a===xp||a===vp||a===yp||a===Sp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===op)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===up)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===dp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===pp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===mp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===vp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===yp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Sp)return r===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===_p||a===Mp||a===bp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===_p)return r===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Mp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===bp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Tp||a===Ep||a===Lc||a===Ap)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Tp)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Ep)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Lc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ap)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Er?t.UNSIGNED_INT_24_8:t[a]!==void 0?t[a]:null}return{convert:n}}function W3(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function a(g,h){h.color.getRGB(g.fogColor.value,Fx(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function i(g,h,m,S,_){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),p(g,h)):h.isMeshPhongMaterial?(s(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),c(g,h),h.isMeshPhysicalMaterial&&d(g,h,_)):h.isMeshMatcapMaterial?(s(g,h),x(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,S):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===ln&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===ln&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=e.get(h),S=m.envMap,_=m.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(q3.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(CT),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,S){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=S*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function c(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,m){g.ior.value=h.ior,h.diffuseRoughness>0&&(g.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){let m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:i}}function X3(t,e,n,a){let i={},s={};function r(m,S){let _=S.program;a.uniformBlockBinding(m,_,i[m.id])}function o(m,S){let _=i[m.id];_===void 0&&(x(m),_=l(m),i[m.id]=_,m.addEventListener("dispose",g));let E=S.program;a.updateUBOMapping(m,E);let A=e.render.frame;s[m.id]!==A&&(u(m),s[m.id]=A)}function l(m){let S=t.createBuffer(),_=m.__size,E=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,_,E),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function u(m){let S=i[m.id],_=m.uniforms,E=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let A=0,v=_.length;A<v;A++){let b=_[A];if(Array.isArray(b))for(let I=0,w=b.length;I<w;I++)f(b[I],A,I,E);else f(b,A,0,E)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(m,S,_,E){if(c(m,S,_,E)===!0){let A=m.__offset,v=m.value;if(Array.isArray(v)){let b=0;for(let I=0;I<v.length;I++){let w=v[I],O=y(w,!0);p(w,m.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,A,m.__data)}}function p(m,S,_){typeof m=="number"||typeof m=="boolean"?S[_]=m:m.isMatrix3?(S[_]=m.elements[0],S[_+1]=m.elements[1],S[_+2]=m.elements[2],S[_+3]=0,S[_+4]=m.elements[3],S[_+5]=m.elements[4],S[_+6]=m.elements[5],S[_+7]=0,S[_+8]=m.elements[6],S[_+9]=m.elements[7],S[_+10]=m.elements[8],S[_+11]=0):ArrayBuffer.isView(m)?S.set(m.subarray(0,S.length-_),_):m.toArray(S,_)}function c(m,S,_,E){let A=m.value,v=S+"_"+_;if(Array.isArray(A)){E[v]===void 0&&(E[v]=[]);let b=E[v],I=!1;for(let w=0;w<A.length;w++)d(A[w],b,w)===!0&&(I=!0);return I}return d(A,E,v)}function d(m,S,_){if(S[_]===void 0)return typeof m=="number"||typeof m=="boolean"?S[_]=m:ArrayBuffer.isView(m)?S[_]=m.slice():S[_]=m.clone(),!0;{let E=S[_];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return S[_]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function x(m){let S=m.uniforms,_=0,E=16;for(let v=0,b=S.length;v<b;v++){let I=Array.isArray(S[v])?S[v]:[S[v]];for(let w=0,O=I.length;w<O;w++){let B=I[w],G=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(S[v])||Array.isArray(B.value),X=_;for(let V=0,ie=G.length;V<ie;V++){let Y=G[V],ee=y(Y,P),ne=_%E,Te=ne%ee.boundary,Be=ne+Te;_+=Te,Be!==0&&E-Be<ee.storage&&(_+=E-Be),V===0&&(X=_),_+=ee.storage}let H=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new H((_-X)/Float32Array.BYTES_PER_ELEMENT),B.__offset=X}}let A=_%E;return A>0&&(_+=E-A),m.__size=_,m.__cache={},this}function y(m,S){let _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=16,_.storage=48):m.isMatrix4?(_.boundary=16,_.storage=64):m.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",m),S===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(m){let S=m.target;S.removeEventListener("dispose",g),t.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function h(){for(let m in i)t.deleteBuffer(i[m]);i={},s={}}return{bind:r,update:o,dispose:h}}function Z3(){return xi===null&&(xi=new $u(Y3,16,16,Hs,Ja),xi.name="DFG_LUT",xi.minFilter=kn,xi.magFilter=kn,xi.wrapS=li,xi.wrapT=li,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var fw,dw,hw,pw,mw,gw,xw,vw,yw,Sw,_w,Mw,bw,Tw,Ew,Aw,Cw,Lw,ww,Iw,Rw,Dw,Pw,Uw,Ow,Nw,Bw,Fw,zw,Hw,kw,Gw,Vw,qw,Ww,Xw,Yw,Zw,Jw,Kw,Qw,jw,$w,e2,t2,n2,a2,i2,s2,r2,o2,l2,u2,c2,f2,d2,h2,p2,m2,g2,x2,v2,y2,S2,_2,M2,b2,T2,E2,A2,C2,L2,w2,I2,R2,D2,P2,U2,O2,N2,B2,F2,z2,H2,k2,G2,V2,q2,W2,X2,Y2,Z2,J2,K2,Q2,j2,$2,eI,tI,nI,aI,iI,sI,rI,oI,lI,uI,cI,fI,dI,hI,pI,mI,gI,xI,vI,yI,SI,_I,MI,bI,TI,EI,AI,CI,LI,wI,II,RI,DI,PI,UI,OI,NI,BI,FI,zI,HI,kI,GI,VI,je,Se,vi,Lp,qI,vT,Dc,K1,KI,QI,yT,ST,jI,$I,eR,gl,fR,_T,MT,bT,TT,ET,AT,eT,tT,nT,aT,iT,Wx,Xx,Yx,Vx,ml,e3,t3,oT,s3,wp,f3,h3,m3,x3,y3,M3,Jx,Kx,I3,U3,O3,N3,B3,gT,Ic,qx,G3,V3,Qx,jx,q3,CT,Y3,xi,Ip,Cr=Si(()=>{Gx();Gx();fw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_w=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ew=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Uw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ow=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hw="gl_FragColor = linearToOutputTexel( gl_FragColor );",kw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$w=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,n2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,a2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d2=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,h2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T2=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Y2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hI=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_I=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MI=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bI=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EI=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,II=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HI=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:fw,alphahash_pars_fragment:dw,alphamap_fragment:hw,alphamap_pars_fragment:pw,alphatest_fragment:mw,alphatest_pars_fragment:gw,aomap_fragment:xw,aomap_pars_fragment:vw,batching_pars_vertex:yw,batching_vertex:Sw,begin_vertex:_w,beginnormal_vertex:Mw,bsdfs:bw,iridescence_fragment:Tw,bumpmap_pars_fragment:Ew,clipping_planes_fragment:Aw,clipping_planes_pars_fragment:Cw,clipping_planes_pars_vertex:Lw,clipping_planes_vertex:ww,color_fragment:Iw,color_pars_fragment:Rw,color_pars_vertex:Dw,color_vertex:Pw,common:Uw,defaultnormal_vertex:Ow,displacementmap_pars_vertex:Nw,displacementmap_vertex:Bw,emissivemap_fragment:Fw,emissivemap_pars_fragment:zw,colorspace_fragment:Hw,colorspace_pars_fragment:kw,envmap_fragment:Gw,envmap_common_pars_fragment:Vw,envmap_pars_fragment:qw,envmap_pars_vertex:Ww,envmap_physical_pars_fragment:n2,envmap_vertex:Xw,fog_vertex:Yw,fog_pars_vertex:Zw,fog_fragment:Jw,fog_pars_fragment:Kw,gradientmap_pars_fragment:Qw,lightmap_pars_fragment:jw,lights_lambert_fragment:$w,lights_lambert_pars_fragment:e2,lights_pars_begin:t2,lights_toon_fragment:a2,lights_toon_pars_fragment:i2,lights_phong_fragment:s2,lights_phong_pars_fragment:r2,lights_physical_fragment:o2,lights_physical_pars_fragment:l2,lights_fragment_begin:u2,lights_fragment_maps:c2,lights_fragment_end:f2,lightprobes_pars_fragment:d2,logdepthbuf_fragment:h2,logdepthbuf_pars_fragment:p2,logdepthbuf_pars_vertex:m2,logdepthbuf_vertex:g2,map_fragment:x2,map_pars_fragment:v2,map_particle_fragment:y2,map_particle_pars_fragment:S2,metalnessmap_fragment:_2,metalnessmap_pars_fragment:M2,morphinstance_vertex:b2,morphcolor_vertex:T2,morphnormal_vertex:E2,morphtarget_pars_vertex:A2,morphtarget_vertex:C2,normal_fragment_begin:L2,normal_fragment_maps:w2,normal_pars_fragment:I2,normal_pars_vertex:R2,normal_vertex:D2,normalmap_pars_fragment:P2,clearcoat_normal_fragment_begin:U2,clearcoat_normal_fragment_maps:O2,clearcoat_pars_fragment:N2,iridescence_pars_fragment:B2,opaque_fragment:F2,packing:z2,premultiplied_alpha_fragment:H2,project_vertex:k2,dithering_fragment:G2,dithering_pars_fragment:V2,roughnessmap_fragment:q2,roughnessmap_pars_fragment:W2,shadowmap_pars_fragment:X2,shadowmap_pars_vertex:Y2,shadowmap_vertex:Z2,shadowmask_pars_fragment:J2,skinbase_vertex:K2,skinning_pars_vertex:Q2,skinning_vertex:j2,skinnormal_vertex:$2,specularmap_fragment:eI,specularmap_pars_fragment:tI,tonemapping_fragment:nI,tonemapping_pars_fragment:aI,transmission_fragment:iI,transmission_pars_fragment:sI,uv_pars_fragment:rI,uv_pars_vertex:oI,uv_vertex:lI,worldpos_vertex:uI,background_vert:cI,background_frag:fI,backgroundCube_vert:dI,backgroundCube_frag:hI,cube_vert:pI,cube_frag:mI,depth_vert:gI,depth_frag:xI,distance_vert:vI,distance_frag:yI,equirect_vert:SI,equirect_frag:_I,linedashed_vert:MI,linedashed_frag:bI,meshbasic_vert:TI,meshbasic_frag:EI,meshlambert_vert:AI,meshlambert_frag:CI,meshmatcap_vert:LI,meshmatcap_frag:wI,meshnormal_vert:II,meshnormal_frag:RI,meshphong_vert:DI,meshphong_frag:PI,meshphysical_vert:UI,meshphysical_frag:OI,meshtoon_vert:NI,meshtoon_frag:BI,points_vert:FI,points_frag:zI,shadow_vert:HI,shadow_frag:kI,sprite_vert:GI,sprite_frag:VI},Se={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},vi={basic:{uniforms:Un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Un([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Un([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Un([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Un([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Un([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Un([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Un([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Un([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Un([Se.common,Se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Un([Se.lights,Se.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};vi.physical={uniforms:Un([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};Lp={r:0,b:0,g:0},qI=new ft,vT=new qe;vT.set(-1,0,0,0,1,0,0,0,1);Dc=class extends pa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let a={width:e,height:e,depth:1},i=[a,a,a,a,a,a];this.texture=new nc(i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ra(5,5,5),s=new Pa({name:"CubemapFromEquirect",uniforms:Ar(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ln,blending:Mr});s.uniforms.tEquirect.value=n;let r=new Le(i,s),o=n.minFilter;return n.minFilter===Qi&&(n.minFilter=kn),new ul(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,a=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,a,i);e.setRenderTarget(s)}},K1=256,KI=3,QI=20,yT=256,ST=16,jI=3,$I=new R,eR=new Ge,gl=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ul(1,10,null),this._boxMesh=new Le(new Ra(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,a=.1,i=100,s={}){let{size:r=256,position:o=$I}=s,l=this._renderer;this._setSize(r);let u=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,c=l.autoClearColor,d=l.autoClearDepth,x=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(eR));let g=new ul(a,i,f);return g.position.copy(o),g.update(l,e),l.autoClear=p,l.autoClearColor=c,l.autoClearDepth=d,l.autoClearStencil=x,e.background=y,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(u,n)),this._applyPMREM(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(K1,Ux(e))}_fromTexture(e,n){e.mapping===Tr||e.mapping===hl?this._setSize(e.image.length===0?K1:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let a=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(a),a}_allocateTarget(){let e=this._cubeSize,n=Q1(e,!1,!1),a=Math.log2(e)-KI;for(let i=0;i<=a;i++)n.texture.mipmaps.push({width:e>>i,height:e>>i});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,a=this._sourceTarget;return(a===null||a.width!==n||e&&a.depthBuffer===!1)&&(a!==null&&a.dispose(),this._sourceTarget=Q1(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,a){let i=this._boxMesh,s=this._cubeCamera;i.material=a,s.renderTarget=e,s.activeMipmapLevel=n;let r=e.width>>n;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Tr||e.mapping===hl?(this._cubemapMaterial===null&&(this._cubemapMaterial=$1()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=j1()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=tR(),this._integrationMaterial=nR());let n=this._cubeSize,a=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/ST);for(let r=0;r<=a;r++){let o=t.lodToRoughness(r,a);if(r>a-jI)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(yT*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=aR());let a=this._blurMaterial,i=a.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,a),i.envMap.value=e.texture,this._renderCube(s,0,a)}};fR={[mx]:"LINEAR_TONE_MAPPING",[gx]:"REINHARD_TONE_MAPPING",[xx]:"CINEON_TONE_MAPPING",[_c]:"ACES_FILMIC_TONE_MAPPING",[yx]:"AGX_TONE_MAPPING",[Sx]:"NEUTRAL_TONE_MAPPING",[vx]:"CUSTOM_TONE_MAPPING"};_T=new Pn,MT=new Ji(1,1),bT=new ic(1),TT=new Yu,ET=new dh,AT=new nc,eT=[],tT=[],nT=new Float32Array(16),aT=new Float32Array(9),iT=new Float32Array(4);Wx=class{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=DR(n.type)}},Xx=class{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jR(n.type)}},Yx=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,n[o.id],a)}}},Vx=/(\w+)(\])?(\[|\.)?/g;ml=class{constructor(e,n){this.seq=[],this.map={};let a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){let o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);$R(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,n,a,i){let s=this.map[n];s!==void 0&&s.setValue(e,a,i)}setOptional(e,n,a){let i=n[a];i!==void 0&&this.setValue(e,a,i)}static upload(e,n,a,i){for(let s=0,r=n.length;s!==r;++s){let o=n[s],l=a[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,n){let a=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in n&&a.push(r)}return a}};e3=37297,t3=0;oT=new qe;s3={[mx]:"Linear",[gx]:"Reinhard",[xx]:"Cineon",[_c]:"ACESFilmic",[yx]:"AgX",[Sx]:"Neutral",[vx]:"Custom"};wp=new R;f3=/^[ \t]*#include +<([\w\d./]+)>/gm;h3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;m3={[Sc]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};x3={[hl]:"ENVMAP_MODE_REFRACTION"};y3={[Hh]:"ENVMAP_BLENDING_MULTIPLY",[I1]:"ENVMAP_BLENDING_MIX",[R1]:"ENVMAP_BLENDING_ADD"};M3=0,Jx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,a){let i=this._getShaderCacheForMaterial(e);return i.has(n)===!1&&(i.add(n),n.usedTimes++),i.has(a)===!1&&(i.add(a),a.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){let n=this.shaderCache,a=n.get(e);return a===void 0&&(a=new Kx(e),n.set(e,a)),a}},Kx=class{constructor(e){this.id=M3++,this.code=e,this.usedTimes=0}};I3=0;U3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,N3=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],B3=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],gT=new ft,Ic=new R,qx=new R;G3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let a=new sc(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,a=new Pa({vertexShader:G3,fragmentShader:V3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Le(new qt(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jx=class extends ui{constructor(e,n){super();let a=this,i=null,s=1,r=null,o="local-floor",l=1,u=null,f=null,p=null,c=null,d=null,x=null,y=typeof XRWebGLBinding<"u",g=new Qx,h={},m=n.getContextAttributes(),S=null,_=null,E=[],A=[],v=new xe,b=null,I=null,w=new Dn;w.viewport=new Bt;let O=new Dn;O.viewport=new Bt;let B=[w,O],G=new Fh,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=E[K];return me===void 0&&(me=new jo,E[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=E[K];return me===void 0&&(me=new jo,E[K]=me),me.getGripSpace()},this.getHand=function(K){let me=E[K];return me===void 0&&(me=new jo,E[K]=me),me.getHandSpace()};function H(K){let me=A.indexOf(K.inputSource);if(me===-1)return;let _e=E[me];_e!==void 0&&(_e.update(K.inputSource,K.frame,u||r),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ie);for(let K=0;K<E.length;K++){let me=A[K];me!==null&&(A[K]=null,E[K].disconnect(me))}P=null,X=null,g.reset();for(let K in h)delete h[K];if(e.setRenderTarget(S),d=null,c=null,p=null,i=null,_=null,Be.stop(),a.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),I!==null){let K=I.camera;K.fov=I.fov,K.zoom=I.zoom,K.updateProjectionMatrix(),I=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,a.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,a.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(i,n)),p},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,ve=null;m.depth&&(ve=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=m.stencil?ji:Zi,Pe=m.stencil?Er:Za);let Ve={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};p=this.getBinding(),c=p.createProjectionLayer(Ve),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),_=new pa(c.textureWidth,c.textureHeight,{format:Ka,type:$n,depthTexture:new Ji(c.textureWidth,c.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,n,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new pa(d.framebufferWidth,d.framebufferHeight,{format:Ka,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(K){for(let me=0;me<K.removed.length;me++){let _e=K.removed[me],Pe=A.indexOf(_e);Pe>=0&&(A[Pe]=null,E[Pe].disconnect(_e))}for(let me=0;me<K.added.length;me++){let _e=K.added[me],Pe=A.indexOf(_e);if(Pe===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=A.length){A.push(_e),Pe=Ve;break}else if(A[Ve]===null){A[Ve]=_e,Pe=Ve;break}if(Pe===-1)break}let ve=E[Pe];ve&&ve.connect(_e)}}function Y(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let me=K.near,_e=K.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),G.near=O.near=w.near=me,G.far=O.far=w.far=_e,(P!==G.near||X!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,X=G.far),G.layers.mask=K.layers.mask|6,w.layers.mask=G.layers.mask&-5,O.layers.mask=G.layers.mask&-3;let Pe=K.parent,ve=G.cameras;Y(G,Pe);for(let Ve=0;Ve<ve.length;Ve++)Y(ve[Ve],Pe);G.projectionMatrix.copy(w.projectionMatrix),G.projectionMatrixInverse.copy(w.projectionMatrixInverse),I===null&&K.isPerspectiveCamera&&(I={camera:K,fov:K.fov,zoom:K.zoom}),ee(K,G,Pe)};function ee(K,me,_e){_e===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(c===null&&d===null))return l},this.setFoveation=function(K){l=K,c!==null&&(c.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(K){return h[K]};let ne=null;function Te(K,me){if(f=me.getViewerPose(u||r),x=me,f!==null){let _e=f.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Pe=!1;_e.length!==G.cameras.length&&(G.cameras.length=0,Pe=!0);for(let Ne=0;Ne<_e.length;Ne++){let ut=_e[Ne],mt=null;if(d!==null)mt=d.getViewport(ut);else{let Kt=p.getViewSubImage(c,ut);mt=Kt.viewport,Ne===0&&(e.setRenderTargetTextures(_,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(_))}let $e=B[Ne];$e===void 0&&($e=new Dn,$e.layers.enable(Ne),$e.viewport=new Bt,B[Ne]=$e),$e.matrix.fromArray(ut.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ut.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(mt.x,mt.y,mt.width,mt.height),Ne===0&&(G.matrix.copy($e.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Pe===!0&&G.cameras.push($e)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&y){p=a.getBinding();let Ne=p.getDepthInformation(_e[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,i.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),p=a.getBinding();for(let Ne=0;Ne<_e.length;Ne++){let ut=_e[Ne].camera;if(ut){let mt=h[ut];mt||(mt=new sc,h[ut]=mt);let $e=p.getCameraImage(ut);mt.sourceTexture=$e}}}}for(let _e=0;_e<E.length;_e++){let Pe=A[_e],ve=E[_e];Pe!==null&&ve!==void 0&&ve.update(Pe,me,u||r)}ne&&ne(K,me),me.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:me}),x=null}let Be=new xT;Be.setAnimationLoop(Te),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}},q3=new ft,CT=new qe;CT.set(-1,0,0,0,1,0,0,0,1);Y3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;Ip=class{constructor(e={}){let{canvas:n=k1(),context:a=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:d=$n}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=r;let y=d,g=new Set([Kh,Jh,Zh]),h=new Set([$n,Za,pl,Er,Wh,Xh]),m=new Uint32Array(4),S=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},E=null,A=null,v=[],b=[],I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,O=!1,B=null,G=null,P=null,X=null;this._outputColorSpace=an;let H=0,V=0,ie=null,Y=-1,ee=null,ne=new Bt,Te=new Bt,Be=null,K=new Ge(0),me=0,_e=n.width,Pe=n.height,ve=1,Ve=null,Ut=null,Ne=new Bt(0,0,_e,Pe),ut=new Bt(0,0,_e,Pe),mt=!1,$e=new Ns,Kt=new ph,Ht=!1,yn=!1,Et=new ft,ta=new R,Xt=new Bt,An={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vn=!1;function On(){return ie===null?ve:1}let L=a;function ge(T,U){return n.getContext(T,U)}let be,He,se,tt,we,Ue,C,M,N,j,W,re,de,J,Q,ce,D,$,Z,fe,le,ue,Re;try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",Ke,!1),n.addEventListener("webglcontextcreationerror",ye,!1),L===null){let U="webgl2";if(L=ge(U,T),L===null)throw ge(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(T){throw n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),ze("WebGLRenderer: "+T.message),T}function Qe(){be=new sR(L),be.init(),le=new k3(L,be),He=new ZI(L,be,e,le),se=new z3(L,be),He.reversedDepthBuffer&&c&&se.buffers.depth.setReversed(!0),G=L.createFramebuffer(),P=L.createFramebuffer(),X=L.createFramebuffer(),tt=new lR(L),we=new E3,Ue=new H3(L,be,se,we,He,le,tt),C=new iR(w),M=new cw(L),ue=new XI(L,M),N=new rR(L,M,tt,ue),j=new cR(L,N,M,ue,tt),$=new uR(L,He,Ue),Q=new JI(we),W=new T3(w,C,be,He,ue,Q),re=new W3(w,we),de=new C3,J=new P3(be),D=new WI(w,C,se,j,x,l),ce=new F3(w,j,He),Re=new X3(L,tt,He,se),Z=new YI(L,be,tt),fe=new oR(L,be,tt),tt.programs=W.programs,w.capabilities=He,w.extensions=be,w.properties=we,w.renderLists=de,w.shadowMap=ce,w.state=se,w.info=tt}y!==$n&&(I=new dR(y,n.width,n.height,o,i,s));let oe=new jx(w,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(T){T!==void 0&&(ve=T,this.setSize(_e,Pe,!1))},this.getSize=function(T){return T.set(_e,Pe)},this.setSize=function(T,U,q=!0){if(oe.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=T,Pe=U,n.width=Math.floor(T*ve),n.height=Math.floor(U*ve),q===!0&&(n.style.width=T+"px",n.style.height=U+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(_e*ve,Pe*ve).floor()},this.setDrawingBufferSize=function(T,U,q){_e=T,Pe=U,ve=q,n.width=Math.floor(T*q),n.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(y===$n){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ne)},this.getViewport=function(T){return T.copy(Ne)},this.setViewport=function(T,U,q,F){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,U,q,F),se.viewport(ne.copy(Ne).multiplyScalar(On()).round())},this.getScissor=function(T){return T.copy(ut)},this.setScissor=function(T,U,q,F){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,U,q,F),se.scissor(Te.copy(ut).multiplyScalar(On()).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(T){se.setScissorTest(mt=T)},this.setOpaqueSort=function(T){Ve=T},this.setTransparentSort=function(T){Ut=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,q=!0){let F=0;if(T){let z=!1;if(ie!==null){let pe=ie.texture.format;z=g.has(pe)}if(z){let pe=ie.texture.type,Ee=h.has(pe),he=D.getClearColor(),Me=D.getClearAlpha(),Ie=he.r,Xe=he.g,it=he.b;Ee?(m[0]=Ie,m[1]=Xe,m[2]=it,m[3]=Me,L.clearBufferuiv(L.COLOR,0,m)):(S[0]=Ie,S[1]=Xe,S[2]=it,S[3]=Me,L.clearBufferiv(L.COLOR,0,S))}else F|=L.COLOR_BUFFER_BIT}U&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),B=T},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),D.dispose(),de.dispose(),J.dispose(),Ue.dispose(),we.dispose(),C.dispose(),j.dispose(),N.dispose(),ue.dispose(),Re.dispose(),W.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",mv),oe.removeEventListener("sessionend",gv),Vs.stop()};function De(T){T.preventDefault(),Xu("WebGLRenderer: Context Lost."),O=!0}function Ke(){Xu("WebGLRenderer: Context Restored."),O=!1;let T=tt.autoReset,U=ce.enabled,q=ce.autoUpdate,F=ce.needsUpdate,z=ce.type;Qe(),tt.autoReset=T,ce.enabled=U,ce.autoUpdate=q,ce.needsUpdate=F,ce.type=z}function ye(T){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xt(T){let U=T.target;U.removeEventListener("dispose",xt),dn(U)}function dn(T){es(T),we.remove(T)}function es(T){let U=we.get(T).programs;U!==void 0&&(U.forEach(function(q){W.releaseProgram(q)}),T.isShaderMaterial&&W.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,F,z,pe){U===null&&(U=An);let Ee=z.isMesh&&z.matrixWorld.determinantAffine()<0,he=nE(T,U,q,F,z);se.setMaterial(F,Ee);let Me=q.index,Ie=1;if(F.wireframe===!0){if(Me=N.getWireframeAttribute(q),Me===void 0)return;Ie=2}let Xe=q.drawRange,it=q.attributes.position,Ae=Xe.start*Ie,st=(Xe.start+Xe.count)*Ie;pe!==null&&(Ae=Math.max(Ae,pe.start*Ie),st=Math.min(st,(pe.start+pe.count)*Ie)),Me!==null?(Ae=Math.max(Ae,0),st=Math.min(st,Me.count)):it!=null&&(Ae=Math.max(Ae,0),st=Math.min(st,it.count));let Qt=st-Ae;if(Qt<0||Qt===1/0)return;ue.setup(z,F,he,q,Me);let At,Mt=Z;if(Me!==null&&(At=M.get(Me),Mt=fe,Mt.setIndex(At)),z.isMesh)F.wireframe===!0?(se.setLineWidth(F.wireframeLinewidth*On()),Mt.setMode(L.LINES)):Mt.setMode(L.TRIANGLES);else if(z.isLine){let Cn=F.linewidth;Cn===void 0&&(Cn=1),se.setLineWidth(Cn*On()),z.isLineSegments?Mt.setMode(L.LINES):z.isLineLoop?Mt.setMode(L.LINE_LOOP):Mt.setMode(L.LINE_STRIP)}else z.isPoints?Mt.setMode(L.POINTS):z.isSprite&&Mt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(be.get("WEBGL_multi_draw"))Mt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Cn=z._multiDrawStarts,Ce=z._multiDrawCounts,Nn=z._multiDrawCount,dt=Me?M.get(Me).bytesPerElement:1,qs=we.get(F).currentProgram.getUniforms();for(let Ln=0;Ln<Nn;Ln++)qs.setValue(L,"_gl_DrawID",Ln),Mt.render(Cn[Ln]/dt,Ce[Ln])}else if(z.isInstancedMesh)Mt.renderInstances(Ae,Qt,z.count);else if(q.isInstancedBufferGeometry){let Cn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ce=Math.min(q.instanceCount,Cn);Mt.renderInstances(Ae,Qt,Ce)}else Mt.render(Ae,Qt)};function pv(T,U,q,F){B!==null&&T.isNodeMaterial&&B.setObject(F,T),Ht===!0&&Q.setState(T,q,!1),T.transparent===!0&&T.side===mi&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,_l(T,U,F),T.side=pi,T.needsUpdate=!0,_l(T,U,F),T.side=mi):_l(T,U,F)}this.compile=function(T,U,q=null){q===null&&(q=T),B!==null&&B.renderStart(T,U,q),A=J.get(q),A.init(U),b.push(A),q.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),T!==q&&T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),yn=this.localClippingEnabled,Ht=Q.init(this.clippingPlanes,yn),Ht===!0&&Q.setGlobalState(this.clippingPlanes,U),B!==null&&ce.render(A.state.shadowsArray,q,U);let F=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let pe=z.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){let he=pe[Ee];pv(he,q,U,z),F.add(he)}else pv(pe,q,U,z),F.add(pe)}),A=b.pop(),B!==null&&B.renderEnd(),F},this.compileAsync=function(T,U,q=null){let F=this.compile(T,U,q);return new Promise(z=>{function pe(){if(F.forEach(function(Ee){let Me=we.get(Ee).currentProgram;(Me===void 0||Me.isReady())&&F.delete(Ee)}),F.size===0){z(T);return}setTimeout(pe,10)}be.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Hp=null;function eE(T){Hp&&Hp(T)}function mv(){Vs.stop()}function gv(){Vs.start()}let Vs=new xT;Vs.setAnimationLoop(eE),typeof self<"u"&&Vs.setContext(self),this.setAnimationLoop=function(T){Hp=T,oe.setAnimationLoop(T),T===null?Vs.stop():Vs.start()},oe.addEventListener("sessionstart",mv),oe.addEventListener("sessionend",gv),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(T,U);let q=oe.enabled===!0&&oe.isPresenting===!0,F=I!==null&&(ie===null||q)&&I.begin(w,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,U,ie),A=J.get(T,b.length),A.init(U),A.state.textureUnits=Ue.getTextureUnits(),b.push(A),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Kt.setFromArrayCamera(U):$e.setFromProjectionMatrix(Et,wa,U.reversedDepth),yn=this.localClippingEnabled,Ht=Q.init(this.clippingPlanes,yn),E=de.get(T,v.length),E.init(),v.push(E),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let Ee=w.xr.getDepthSensingMesh();Ee!==null&&kp(Ee,U,-1/0,w.sortObjects)}kp(T,U,0,w.sortObjects),E.finish(),B!==null&&B.updateLights(A.state.lightsArray),w.sortObjects===!0&&E.sort(Ve,Ut),Vn=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Vn&&D.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),Ht===!0&&Q.beginShadows();let z=A.state.shadowsArray;if(ce.render(z,T,U),Ht===!0&&Q.endShadows(),(F&&I.hasRenderPass())===!1){let Ee=E.opaque,he=E.transmissive;if(A.setupLights(),U.isArrayCamera){let Me=U.cameras;if(he.length>0)for(let Ie=0,Xe=Me.length;Ie<Xe;Ie++){let it=Me[Ie];vv(Ee,he,T,it)}Vn&&D.render(T);for(let Ie=0,Xe=Me.length;Ie<Xe;Ie++){let it=Me[Ie];xv(E,T,it,it.viewport)}}else he.length>0&&vv(Ee,he,T,U),Vn&&D.render(T),xv(E,T,U)}ie!==null&&V===0&&(Ue.updateMultisampleRenderTarget(ie),Ue.updateRenderTargetMipmap(ie)),F&&I.end(w),T.isScene===!0&&T.onAfterRender(w,T,U),ue.resetDefaultState(),Y=-1,ee=null,b.pop(),b.length>0?(A=b[b.length-1],Ue.setTextureUnits(A.state.textureUnits),Ht===!0&&Q.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,B!==null&&B.renderEnd()};function kp(T,U,q,F){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){let Ee=U.isArrayCamera?Kt:$e;if(!T.frustumCulled||T.intersectsFrustum(Ee)){F&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Et);let he=j.update(T),Me=T.material;Me.visible&&E.push(T,he,Me,q,Xt.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Ee=U.isArrayCamera?Kt:$e;if(!T.frustumCulled||T.intersectsFrustum(Ee)){let he=j.update(T),Me=T.material;if(F&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Xt.copy(he.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(Et)),Array.isArray(Me)){let Ie=he.groups;for(let Xe=0,it=Ie.length;Xe<it;Xe++){let Ae=Ie[Xe],st=Me[Ae.materialIndex];st&&st.visible&&E.push(T,he,st,q,Xt.z,Ae,U)}}else Me.visible&&E.push(T,he,Me,q,Xt.z,null,U)}}}let pe=T.children;for(let Ee=0,he=pe.length;Ee<he;Ee++)kp(pe[Ee],U,q,F)}function xv(T,U,q,F){let{opaque:z,transmissive:pe,transparent:Ee}=T;A.setupLightsView(q),Ht===!0&&Q.setGlobalState(w.clippingPlanes,q),F&&se.viewport(ne.copy(F)),z.length>0&&Oc(z,U,q),pe.length>0&&Oc(pe,U,q),Ee.length>0&&Oc(Ee,U,q),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function vv(T,U,q,F){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let Ae=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new pa(1,1,{generateMipmaps:!0,type:Ae?Ja:$n,minFilter:Qi,samples:Math.max(4,He.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let pe=A.state.transmissionRenderTarget[F.id],Ee=F.viewport||ne;pe.setSize(Ee.z*w.transmissionResolutionScale,Ee.w*w.transmissionResolutionScale);let he=w.getRenderTarget(),Me=w.getActiveCubeFace(),Ie=w.getActiveMipmapLevel();w.setRenderTarget(pe),w.getClearColor(K),me=w.getClearAlpha(),me<1&&w.setClearColor(16777215,.5),w.clear(),Vn&&D.render(q);let Xe=w.toneMapping;w.toneMapping=gi;let it=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),Ht===!0&&Q.setGlobalState(w.clippingPlanes,F),Oc(T,q,F),Ue.updateMultisampleRenderTarget(pe),Ue.updateRenderTargetMipmap(pe),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let st=0,Qt=U.length;st<Qt;st++){let At=U[st],{object:Mt,geometry:Cn,material:Ce,group:Nn}=At;if(Ce.side===mi&&Mt.layers.test(F.layers)){let dt=Ce.side;Ce.side=ln,Ce.needsUpdate=!0,yv(Mt,q,F,Cn,Ce,Nn),Ce.side=dt,Ce.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ue.updateMultisampleRenderTarget(pe),Ue.updateRenderTargetMipmap(pe))}w.setRenderTarget(he,Me,Ie),w.setClearColor(K,me),it!==void 0&&(F.viewport=it),w.toneMapping=Xe}function Oc(T,U,q){let F=U.isScene===!0?U.overrideMaterial:null;for(let z=0,pe=T.length;z<pe;z++){let Ee=T[z],{object:he,geometry:Me,group:Ie}=Ee,Xe=Ee.material;Xe.allowOverride===!0&&F!==null&&(Xe=F),he.layers.test(q.layers)&&yv(he,U,q,Me,Xe,Ie)}}function yv(T,U,q,F,z,pe){B!==null&&z.isNodeMaterial&&B.setObject(T,z),T.onBeforeRender(w,U,q,F,z,pe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(w,U,q,F,T,pe),z.transparent===!0&&z.side===mi&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,w.renderBufferDirect(q,U,F,z,T,pe),z.side=pi,z.needsUpdate=!0,w.renderBufferDirect(q,U,F,z,T,pe),z.side=mi):w.renderBufferDirect(q,U,F,z,T,pe),T.onAfterRender(w,U,q,F,z,pe)}function Sv(T){let U=0;for(let q of T)q.texture!==null&&U++;return U}function _l(T,U,q){U.isScene!==!0&&(U=An);let F=we.get(T),z=A.state.lights,pe=A.state.shadowsArray,Ee=z.state.version,he=W.getParameters(T,z.state,pe,U,q,A.state.lightProbeGridArray),Me=W.getProgramCacheKey(he),Ie=F.programs;F.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,F.fog=U.fog;let Xe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;F.envMap=C.get(T.envMap||F.environment,Xe),F.envMapRotation=F.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",xt),Ie=new Map,F.programs=Ie,F.programVariants=new Map);let it=Ie.get(Me);if(it!==void 0){if(F.currentProgram===it&&F.lightsStateVersion===Ee)return Mv(T,he),it}else he.uniforms=W.getUniforms(T),B!==null&&T.isNodeMaterial&&B.build(T,q,he),T.onBeforeCompile(he,w),it=W.acquireProgram(he,Me),Ie.set(Me,it),F.uniforms=he.uniforms;let Ae=F.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=Q.uniform),Mv(T,he),F.needsLights=iE(T),F.lightsStateVersion=Ee,F.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.sunLights.value=z.state.sun,Ae.sunLightShadows.value=z.state.sunShadow,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.sunShadowMatrix.value=z.state.sunShadowMatrix,Ae.sunShadowCascade.value=z.state.sunShadowCascade,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),F.numLightProbeGrids=Sv(A.state.lightProbeGridArray),F.currentProgram=it,F.uniformsList=null,it}function tE(T,U,q,F,z){let pe=we.get(T),Ee=pe.currentProgram.id+","+F+","+z,he=pe.programVariants.get(Ee);return he===void 0?(he=_l(T,U,q),pe.programVariants.set(Ee,he)):(pe.currentProgram=he,pe.uniformsList=null,pe.outputColorSpace=F,pe.toneMapping=z),he}function _v(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ml.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Mv(T,U){let q=we.get(T);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function nE(T,U,q,F,z){U.isScene!==!0&&(U=An),Ue.resetTextureUnits();let pe=U.fog,Ee=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?U.environment:null,he=ie===null?w.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ot.workingColorSpace,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ie=C.get(F.envMap||Ee,Me),Xe=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ae=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,Qt=!!q.morphAttributes.color,At=gi;F.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(At=w.toneMapping);let Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Cn=Mt!==void 0?Mt.length:0,Ce=we.get(F),Nn=A.state.lights;if(Ht===!0&&(yn===!0||T!==ee)){let Ft=T===ee&&F.id===Y;Q.setState(F,T,Ft)}let dt=!1,qs=!1;F.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==Nn.state.version||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Ie||F.fog===!0&&Ce.fog!==pe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Q.numPlanes||Ce.numIntersection!==Q.numIntersection)||Ce.vertexAlphas!==Xe||Ce.vertexTangents!==it||Ce.morphTargets!==Ae||Ce.morphNormals!==st||Ce.morphColors!==Qt||Ce.morphTargetsCount!==Cn||Ce.numLightProbeGrids!==Sv(A.state.lightProbeGridArray)?dt=!0:(Ce.outputColorSpace!==he||Ce.toneMapping!==At)&&(qs=!0):(dt=!0,Ce.__version=F.version);let Ln=Ce.currentProgram;(dt===!0||qs===!0)&&(Ln=qs===!0?tE(F,U,z,he,At):_l(F,U,z),B&&F.isNodeMaterial&&B.onUpdateProgram(F,Ln,Ce));let Nc=!1,ts=!1,Ws=!1,ct=Ln.getUniforms(),Sn=Ce.uniforms;if(se.useProgram(Ln.program)&&(Nc=!0,ts=!0,Ws=!0),F.id!==Y&&(Y=F.id,ts=!0),Nc||ee!==T){se.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(L,"projectionMatrix",T.projectionMatrix),ct.setValue(L,"viewMatrix",T.matrixWorldInverse);let hn=ct.map.cameraPosition;hn!==void 0&&hn.setValue(L,ta.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ct.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),ee!==T&&(ee=T,ts=!0,Ws=!0)}if(Ce.needsLights&&(Nn.state.sunShadowMap.length>0&&ct.setValue(L,"sunShadowMap",Nn.state.sunShadowMap,Ue),Nn.state.directionalShadowMap.length>0&&ct.setValue(L,"directionalShadowMap",Nn.state.directionalShadowMap,Ue),Nn.state.spotShadowMap.length>0&&ct.setValue(L,"spotShadowMap",Nn.state.spotShadowMap,Ue),Nn.state.pointShadowMap.length>0&&ct.setValue(L,"pointShadowMap",Nn.state.pointShadowMap,Ue)),z.isSkinnedMesh){ct.setOptional(L,z,"bindMatrix"),ct.setOptional(L,z,"bindMatrixInverse");let Ft=z.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ct.setValue(L,"boneTexture",Ft.boneTexture,Ue))}z.isBatchedMesh&&(ct.setOptional(L,z,"batchingTexture"),ct.setValue(L,"batchingTexture",z._matricesTexture,Ue),ct.setOptional(L,z,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",z._indirectTexture,Ue),ct.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",z._colorsTexture,Ue));let Ba=q.morphAttributes;if((Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0)&&$.update(z,q,Ln),(ts||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,ct.setValue(L,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=Z3()),ts){if(ct.setValue(L,"toneMappingExposure",w.toneMappingExposure),Ce.needsLights&&aE(Sn,Ws),pe&&F.fog===!0&&re.refreshFogUniforms(Sn,pe),re.refreshMaterialUniforms(Sn,F,ve,Pe,A.state.transmissionRenderTarget[T.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let Ft=_,hn=0;for(let yi of A.state.lightProbeGridArray)yi.texture!==null&&(Ft.textures[hn]=yi.texture,Ft.min[hn]=yi.boundingBox.min,Ft.max[hn]=yi.boundingBox.max,Ft.resolution[hn]=yi.resolution,hn++);for(let yi in Ft)Ft[yi].length=hn;Sn.probesSH.value=Ft.textures,Sn.probesMin.value=Ft.min,Sn.probesMax.value=Ft.max,Sn.probesResolution.value=Ft.resolution}ml.upload(L,_v(Ce),Sn,Ue)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ml.upload(L,_v(Ce),Sn,Ue),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ct.setValue(L,"center",z.center),ct.setValue(L,"modelViewMatrix",z.modelViewMatrix),ct.setValue(L,"normalMatrix",z.normalMatrix),ct.setValue(L,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){let Ft=F.uniformsGroups;for(let hn=0,yi=Ft.length;hn<yi;hn++){let Tv=Ft[hn];Re.update(Tv,Ln),Re.bind(Tv,Ln)}}return Ln}function aE(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function iE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,U,q){let F=we.get(T);F.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),we.get(T.texture).__webglTexture=U,we.get(T.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:q,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let q=we.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){ie=T,H=U,V=q;let F=null,z=!1,pe=!1;if(T){let he=we.get(T);if(he.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),ne.copy(T.viewport),Te.copy(T.scissor),Be=T.scissorTest,se.viewport(ne),se.scissor(Te),se.setScissorTest(Be),Y=-1;return}else if(he.__webglFramebuffer===void 0)Ue.setupRenderTarget(T);else if(he.__hasExternalTextures)Ue.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xe=T.depthTexture;if(he.__boundDepthTexture!==Xe){if(Xe!==null&&we.has(Xe)&&(T.width!==Xe.image.width||T.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(T)}}let Me=T.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);let Ie=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?F=Ie[U][q]:F=Ie[U],z=!0):T.samples>0&&Ue.useMultisampledRTT(T)===!1?F=we.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[q]:F=Ie,ne.copy(T.viewport),Te.copy(T.scissor),Be=T.scissorTest}else ne.copy(Ne).multiplyScalar(ve).floor(),Te.copy(ut).multiplyScalar(ve).floor(),Be=mt;if(q!==0&&(F=G),se.bindFramebuffer(L.FRAMEBUFFER,F)&&se.drawBuffers(T,F),se.viewport(ne),se.scissor(Te),se.setScissorTest(Be),z){let he=we.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,q)}else if(pe){let he=U;for(let Me=0;Me<T.textures.length;Me++){let Ie=we.get(T.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,Ie.__webglTexture,q,he)}}else if(T!==null&&q!==0){let he=we.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,q)}Y=-1};function bv(T){let U=we.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=He.textureFormatReadable(T.format),U.__typeReadable=He.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,q,F,z,pe,Ee,he=0){if(!(T&&T.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Me=Me[Ee],Array.isArray(Me)&&(Me=Me[0])),Me){se.bindFramebuffer(L.FRAMEBUFFER,Me);try{let Ie=T.textures[he],Xe=Ie.format,it=Ie.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he);let Ae=bv(Ie);if(Ae.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-F&&q>=0&&q<=T.height-z&&L.readPixels(U,q,F,z,le.convert(Xe),le.convert(it),pe)}finally{let Ie=ie!==null?we.get(ie).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,U,q,F,z,pe,Ee,he=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Me=Me[Ee],Array.isArray(Me)&&(Me=Me[0])),Me)if(U>=0&&U<=T.width-F&&q>=0&&q<=T.height-z){se.bindFramebuffer(L.FRAMEBUFFER,Me);let Ie=T.textures[he],Xe=Ie.format,it=Ie.type;T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he);let Ae=bv(Ie);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),L.readPixels(U,q,F,z,le.convert(Xe),le.convert(it),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Qt=ie!==null?we.get(ie).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,Qt);let At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await V1(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(st),L.deleteSync(At),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,q=0){let F=Math.pow(2,-q),z=Math.floor(T.image.width*F),pe=Math.floor(T.image.height*F),Ee=U!==null?U.x:0,he=U!==null?U.y:0;Ue.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Ee,he,z,pe),se.unbindTexture()},this.copyTextureToTexture=function(T,U,q=null,F=null,z=0,pe=0){let Ee,he,Me,Ie,Xe,it,Ae,st,Qt,At=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(q!==null)Ee=q.max.x-q.min.x,he=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,Xe=q.min.y,it=q.isBox3?q.min.z:0;else{let ct=Math.pow(2,-z);Ee=Math.floor(At.width*ct),he=Math.floor(At.height*ct),T.isDataArrayTexture?Me=At.depth:T.isData3DTexture?Me=Math.floor(At.depth*ct):Me=1,Ie=0,Xe=0,it=0}F!==null?(Ae=F.x,st=F.y,Qt=F.z):(Ae=0,st=0,Qt=0);let Mt=le.convert(U.format),Cn=le.convert(U.type),Ce;U.isData3DTexture?(Ue.setTexture3D(U,0),Ce=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ue.setTexture2DArray(U,0),Ce=L.TEXTURE_2D_ARRAY):(Ue.setTexture2D(U,0),Ce=L.TEXTURE_2D),se.activeTexture(L.TEXTURE0),se.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),se.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),se.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Nn=se.getParameter(L.UNPACK_ROW_LENGTH),dt=se.getParameter(L.UNPACK_IMAGE_HEIGHT),qs=se.getParameter(L.UNPACK_SKIP_PIXELS),Ln=se.getParameter(L.UNPACK_SKIP_ROWS),Nc=se.getParameter(L.UNPACK_SKIP_IMAGES);se.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),se.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),se.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),se.pixelStorei(L.UNPACK_SKIP_ROWS,Xe),se.pixelStorei(L.UNPACK_SKIP_IMAGES,it);let ts=T.isDataArrayTexture||T.isData3DTexture,Ws=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let ct=we.get(T),Sn=we.get(U),Ba=we.get(ct.__renderTarget),Ft=we.get(Sn.__renderTarget);se.bindFramebuffer(L.READ_FRAMEBUFFER,Ba.__webglFramebuffer),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let hn=0;hn<Me;hn++)ts&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(T).__webglTexture,z,it+hn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(U).__webglTexture,pe,Qt+hn)),L.blitFramebuffer(Ie,Xe,Ie+Ee,Xe+he,Ae,st,Ae+Ee,st+he,L.DEPTH_BUFFER_BIT,L.NEAREST);se.bindFramebuffer(L.READ_FRAMEBUFFER,null),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||we.has(T)){let ct=we.get(T),Sn=we.get(U);se.bindFramebuffer(L.READ_FRAMEBUFFER,P),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,X);for(let Ba=0;Ba<Me;Ba++)ts?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ct.__webglTexture,z,it+Ba):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,z),Ws?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Sn.__webglTexture,pe,Qt+Ba):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Sn.__webglTexture,pe),z!==0?L.blitFramebuffer(Ie,Xe,Ie+Ee,Xe+he,Ae,st,Ae+Ee,st+he,L.COLOR_BUFFER_BIT,L.NEAREST):Ws?L.copyTexSubImage3D(Ce,pe,Ae,st,Qt+Ba,Ie,Xe,Ee,he):L.copyTexSubImage2D(Ce,pe,Ae,st,Ie,Xe,Ee,he);se.bindFramebuffer(L.READ_FRAMEBUFFER,null),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ws?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ce,pe,Ae,st,Qt,Ee,he,Me,Mt,Cn,At.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,pe,Ae,st,Qt,Ee,he,Me,Mt,At.data):L.texSubImage3D(Ce,pe,Ae,st,Qt,Ee,he,Me,Mt,Cn,At):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,Ae,st,Ee,he,Mt,Cn,At.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,Ae,st,At.width,At.height,Mt,At.data):L.texSubImage2D(L.TEXTURE_2D,pe,Ae,st,Ee,he,Mt,Cn,At);se.pixelStorei(L.UNPACK_ROW_LENGTH,Nn),se.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dt),se.pixelStorei(L.UNPACK_SKIP_PIXELS,qs),se.pixelStorei(L.UNPACK_SKIP_ROWS,Ln),se.pixelStorei(L.UNPACK_SKIP_IMAGES,Nc),pe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&L.generateMipmap(Ce),se.unbindTexture()},this.initRenderTarget=function(T){we.get(T).__webglFramebuffer===void 0&&Ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ue.setTextureCube(T,0):T.isData3DTexture?Ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ue.setTexture2DArray(T,0):Ue.setTexture2D(T,0),se.unbindTexture()},this.resetState=function(){H=0,V=0,ie=null,se.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}});function Oa(t,e,n,a,i,s){let r=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Uc.copy(e),Uc[a]=0,Uc.normalize();let u=.5*r/(r+o),f=1-Uc.angleTo(t)/l;return Math.sign(Uc[n])===1?f*u:o/(r+o)+u+u*(1-f)}var Uc,Up,LT=Si(()=>{Cr();Uc=new R;Up=class t extends Ra{constructor(e=1,n=1,a=1,i=2,s=.1){let r=i*2+1;if(s=Math.min(e/2,n/2,a/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:a,segments:i,radius:s},r===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new R,u=new R,f=new R(e,n,a).divideScalar(2).subScalar(s),p=this.attributes.position.array,c=this.attributes.normal.array,d=this.attributes.uv.array,x=p.length/6,y=new R,g=.5/r;for(let h=0,m=0;h<p.length;h+=3,m+=2)switch(l.fromArray(p,h),u.copy(l),u.x-=Math.sign(u.x)*g,u.y-=Math.sign(u.y)*g,u.z-=Math.sign(u.z)*g,u.normalize(),p[h+0]=f.x*Math.sign(l.x)+u.x*s,p[h+1]=f.y*Math.sign(l.y)+u.y*s,p[h+2]=f.z*Math.sign(l.z)+u.z*s,c[h+0]=u.x,c[h+1]=u.y,c[h+2]=u.z,Math.floor(h/x)){case 0:y.set(1,0,0),d[m+0]=Oa(y,u,"z","y",s,a),d[m+1]=1-Oa(y,u,"y","z",s,n);break;case 1:y.set(-1,0,0),d[m+0]=1-Oa(y,u,"z","y",s,a),d[m+1]=1-Oa(y,u,"y","z",s,n);break;case 2:y.set(0,1,0),d[m+0]=1-Oa(y,u,"x","z",s,e),d[m+1]=Oa(y,u,"z","x",s,a);break;case 3:y.set(0,-1,0),d[m+0]=1-Oa(y,u,"x","z",s,e),d[m+1]=1-Oa(y,u,"z","x",s,a);break;case 4:y.set(0,0,1),d[m+0]=1-Oa(y,u,"x","y",s,e),d[m+1]=1-Oa(y,u,"y","x",s,n);break;case 5:y.set(0,0,-1),d[m+0]=Oa(y,u,"x","y",s,e),d[m+1]=1-Oa(y,u,"y","x",s,n);break}}static fromJSON(e){return new t(e.width,e.height,e.depth,e.segments,e.radius)}}});function We(t){return $x.add(t),t}function Gn(t){return ev.add(t),t}function Op(t){return tv.add(t),t}function wT(){$x.forEach(t=>t.dispose()),ev.forEach(t=>t.dispose()),tv.forEach(t=>t.dispose()),$x.clear(),ev.clear(),tv.clear(),nv.clear(),av.clear()}function ae(t,e,n){let a=`${t}|${e}|${n}`,i=nv.get(a);return i||(i=We(new Ra(t,e,n)),nv.set(a,i)),i}function Tt(t,e,n,a=.04,i=2){let s=`${t}|${e}|${n}|${a}|${i}`,r=av.get(s);if(!r){let o=Math.min(a,t/2-.001,e/2-.001,n/2-.001);r=We(new Up(t,e,n,i,Math.max(.001,o))),av.set(s,r)}return r}function k(t,e,n,a,i,s,r={}){let o=new Le(e,n);return o.position.set(a,i,s),r.rx&&(o.rotation.x=r.rx),r.ry&&(o.rotation.y=r.ry),r.rz&&(o.rotation.z=r.rz),(r.sx||r.sy||r.sz)&&o.scale.set(r.sx??1,r.sy??1,r.sz??1),o.castShadow=r.cast??!1,o.receiveShadow=r.receive??!1,t.add(o),o}function Np(t,e=0){return new Ki(t.map(([n,a])=>new R(n,e,a)),!1,"catmullrom",.12)}function vl(t,e,n,a,i,s){let r=Np(e,0),o=r.getLength(),l=Math.max(1,Math.ceil(o/.85)),u=ae(1,1,1);for(let f=0;f<l;f++){let p=r.getPoint(f/l),c=r.getPoint((f+1)/l),d=c.x-p.x,x=c.z-p.z,y=Math.hypot(d,x)+.06,g=(p.x+c.x)/2,h=(p.z+c.z)/2;k(t,u,s,g,i-a/2,h,{ry:Math.atan2(d,x),sx:n,sy:a,sz:y,receive:!0,cast:!0})}return r}function IT(t,e,n){let a=Np(t,0),i=Math.max(8,Math.floor(a.getLength()*3)),s=[],r=[];for(let l=0;l<=i;l++){let u=l/i,f=a.getPoint(u),p=a.getTangent(u),c=new R(-p.z,0,p.x);if(c.lengthSq()<1e-6&&c.set(1,0,0),c.normalize().multiplyScalar(e),s.push(f.x+c.x,n,f.z+c.z,f.x-c.x,n,f.z-c.z),l<i){let d=l*2;r.push(d,d+1,d+2,d+1,d+3,d+2)}}let o=We(new Lt);return o.setAttribute("position",new et(s,3)),o.setIndex(r),o.computeVertexNormals(),{geo:o,curve:a}}function iv(t,e,n,a){let i=e/2,s=[[0,n,-i],[0,n,i],[t,a,i],[t,a,-i],[0,0,-i],[0,0,i],[t,0,i],[t,0,-i]],r=new Float32Array(s.flat()),o=[0,1,2,0,2,3,4,6,5,4,7,6,0,3,7,0,7,4,1,5,6,1,6,2,0,4,5,0,5,1,3,2,6,3,6,7],l=We(new Lt);return l.setAttribute("position",new Vt(r,3)),l.setIndex(o),l.computeVertexNormals(),l}function $i(t,e,n,a=28){let i=We(new il(1,Math.max(12,a)));i.rotateX(-Math.PI/2);let s=i.attributes.position,r=new Float32Array(s.count*3);for(let o=0;o<s.count;o++){let l=(s.getX(o)??0)*t,u=(s.getZ(o)??0)*e;s.setX(o,l),s.setZ(o,u);let f=l/t,p=u/e,c=Math.atan2(p,f),d=Math.hypot(f,p),x=Math.sin(c*3+.6)*.08+Math.sin(c*7)*.035,y=Math.max(0,1.04-d+x),g=y*y*n;s.setY(o,g);let h=g<n*.12;r[o*3]=h?.34:.4+g*.35,r[o*3+1]=h?.32:.38+g*.22,r[o*3+2]=h?.3:.34+g*.08}return i.computeVertexNormals(),i.setAttribute("color",new Vt(r,3)),i}function RT(t,e,n,a=40){let i=We(new il(1,Math.max(18,a)));i.rotateX(-Math.PI/2);let s=i.attributes.position,r=new Float32Array(s.count*3);for(let o=0;o<s.count;o++){let l=(s.getX(o)??0)*t,u=(s.getZ(o)??0)*e;s.setX(o,l),s.setZ(o,u);let f=t===0?0:l/t,p=e===0?0:u/e,c=Math.atan2(p,f),d=Math.sin(c*3+.4)*.07+Math.sin(c*5.5)*.035,x=Math.hypot(f,p),y=.74+d,g=x>y?n*Math.max(0,(1.05-x)/Math.max(.08,1.05-y)):n;s.setY(o,g);let h=x>y-.05;r[o*3]=h?.78:.68,r[o*3+1]=h?.74:.64,r[o*3+2]=h?.66:.58}return i.computeVertexNormals(),i.setAttribute("color",new Vt(r,3)),i}function Gs(t,e=!0){let n=Op(new ac(t));return n.colorSpace=e?an:Qa,n.anisotropy=4,n.needsUpdate=!0,n}function DT(){let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d");if(!e)throw new Error("canvas");let n=e.createRadialGradient(64,64,4,64,64,64);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),Gs(t,!1)}function sv(t){let e=t>>>0;return()=>{e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}var $x,ev,tv,nv,av,Wt,Bp=Si(()=>{Cr();LT();$x=new Set,ev=new Set,tv=new Set,nv=new Map,av=new Map;Wt='"WenQuanYi Zen Hei", "Noto Sans SC", sans-serif'});function Na(t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let a=n.getContext("2d");if(!a)throw new Error("2d");let i=Gs(n,!0);return{canvas:n,ctx:a,tex:i}}function Lr(t,e){let n=Na(512,160);return J3(n,t,e),n}function J3(t,e,n){let{ctx:a}=t;a.clearRect(0,0,512,160),a.fillStyle="#14181c",a.fillRect(0,0,512,160),a.strokeStyle="rgba(110,207,198,0.85)",a.lineWidth=4,a.strokeRect(10,10,492,140),a.fillStyle="#e7e4dc",a.font=`600 54px ${Wt}`,a.fillText(e,32,78),a.fillStyle="#a7aba3",a.font=`400 28px ${Wt}`,a.fillText(n,32,122),t.tex.needsUpdate=!0}function PT(){let t=["\u533B\u9662\u6587\u5316","\u4E13\u4E1A\u57FA\u7840","\u670D\u52A1\u4E0E\u76EE\u7684"],e=[["\u4EBA\u7684\u8868\u8FBE\u5148\u4E8E\u7CFB\u7EDF\u7684\u89E3\u91CA","\u7A7A\u95F4\u3001\u534F\u4F5C\u4E0E\u7167\u6599"],["\u65E2\u6709\u4E34\u5E8A\u8DEF\u5F84\u4ECD\u5728\u9662\u5185","\u4F53\u9A8C\u4E0D\u6539\u5199\u8BCA\u7597\u6D41\u7A0B"],["\u786E\u8BA4\u3001\u4F53\u9A8C\u3001\u518D\u751F\u6210","\u4E0D\u81EA\u52A8\u7ED9\u51FA\u8BC4\u5224"]];return t.map((n,a)=>{let i=Na(640,360),{ctx:s}=i;return s.fillStyle="#1a1e24",s.fillRect(0,0,640,360),s.fillStyle="#6ecfc6",s.fillRect(0,0,8,360),s.fillStyle="#e7e4dc",s.font=`600 48px ${Wt}`,s.fillText(n,40,90),s.fillStyle="#c5c2b8",s.font=`400 30px ${Wt}`,s.fillText(e[a]?.[0]??"",40,170),s.fillText(e[a]?.[1]??"",40,220),s.strokeStyle="rgba(208,160,106,0.45)",s.strokeRect(40,270,180,2),i.tex.needsUpdate=!0,i})}function UT(){let t=Na(768,420),e=Na(768,420),n=Na(768,420);return K3(t),Q3(e),j3(n),[t,e,n]}function rv(t,e,n,a){t.fillStyle="#12161b",t.fillRect(0,0,e,n),t.fillStyle=a,t.fillRect(0,0,e,6)}function K3(t){let{ctx:e}=t;rv(e,768,420,"#6ecfc6"),e.fillStyle="#e7e4dc",e.font=`600 36px ${Wt}`,e.fillText("\u672C\u6B21\u822A\u884C\u8DB3\u8FF9",36,70),e.fillStyle="#9aa097",e.font=`400 22px ${Wt}`,e.fillText("\u53EA\u8BB0\u5F55\u7ECF\u8FC7\u7684\u7A7A\u95F4\uFF0C\u4E0D\u542B\u8BC4\u5206",36,108);let n=["\u5C55\u5385","\u5F62\u8C61","\u5C9B\u5C7F","\u8D70\u5ECA","\u5706\u684C","\u5206\u53C9","\u955C\u6620"];e.strokeStyle="rgba(110,207,198,0.8)",e.lineWidth=2,e.beginPath(),e.moveTo(70,230),e.bezierCurveTo(200,160,360,300,680,200),e.stroke(),n.forEach((a,i)=>{let s=70+i*98,r=230+Math.sin(i*.9)*36;e.fillStyle=i%2?"#b7a6d6":"#6ecfc6",e.beginPath(),e.arc(s,r,7,0,Math.PI*2),e.fill(),e.fillStyle="#d9d6cc",e.font=`400 20px ${Wt}`,e.fillText(a,s-22,r+32)}),t.tex.needsUpdate=!0}function Q3(t){let{ctx:e}=t;rv(e,768,420,"#b7a6d6"),e.fillStyle="#e7e4dc",e.font=`600 36px ${Wt}`,e.fillText("\u672C\u4EBA\u786E\u8BA4\u7684\u8868\u8FBE",36,70),e.fillStyle="#9aa097",e.font=`400 22px ${Wt}`,e.fillText("\u672A\u7ECF\u786E\u8BA4\u7684\u5185\u5BB9\u4E0D\u8FDB\u5165\u8FD9\u9762\u5899",36,108),[["\u8282\u5F8B","\u53EF\u89C6\u5316\u6CE2\u5F62\uFF0C\u4E0D\u662F\u8BCA\u65AD\u8BFB\u6570"],["\u7B14\u89E6","\u5F53\u6B21\u7ED8\u753B\u7684\u5F62\u6001"],["\u58F0\u97F3","\u672C\u4EBA\u9009\u62E9\u4FDD\u7559\u7684\u7247\u6BB5"],["\u9009\u62E9","\u5F62\u8C61\u3001\u8DEF\u7EBF\u4E0E\u662F\u5426\u8FDB\u5165\u652F\u8DEF"]].forEach((a,i)=>{let s=160+i*58;e.fillStyle="rgba(183,166,214,0.18)",e.fillRect(36,s-28,690,48),e.fillStyle="#e7e4dc",e.font=`600 24px ${Wt}`,e.fillText(a[0]??"",52,s),e.fillStyle="#b7b3aa",e.font=`400 22px ${Wt}`,e.fillText(a[1]??"",160,s)}),t.tex.needsUpdate=!0}function j3(t){let{ctx:e}=t;rv(e,768,420,"#d0a06a"),e.fillStyle="#e7e4dc",e.font=`600 36px ${Wt}`,e.fillText("\u56E2\u961F\u3001\u6280\u672F\u4E0E\u4F9D\u636E",36,70);let n=["\u9662\u5185\u4E13\u4E1A\u56E2\u961F\u4ECD\u8D1F\u8D23\u4E34\u5E8A\u5224\u65AD\u3002","\u5229\u7B19\u3001Copilot\u3001\u5C0F\u7B19 JITAI\u3001\u665A\u661F","\u662F\u966A\u4F34\u4E0E\u6D41\u7A0B\u754C\u9762\uFF0C\u4E0D\u662F\u8BCA\u65AD\u8005\u3002","\u672C\u5899\u4E0D\u63D0\u4F9B\u7597\u6548\u3001\u98CE\u9669\u6216\u6CE8\u518C\u4FE1\u606F\u3002","\u53EF\u5C55\u5F00\u67E5\u770B\u6765\u6E90\u8BF4\u660E\u4E0E\u9002\u7528\u8FB9\u754C\u3002"];e.font=`400 26px ${Wt}`,e.fillStyle="#d5d1c6",n.forEach((a,i)=>e.fillText(a,36,140+i*46)),t.tex.needsUpdate=!0}function OT(){let t=Na(1024,768);return ov(t,0),t}function ov(t,e){let{ctx:n}=t;n.fillStyle="#12161c",n.fillRect(0,0,1024,768),["#6ecfc6","#d0a06a","#b7a6d6"].forEach((i,s)=>{n.fillStyle=i,n.globalAlpha=.85,n.fillRect(70,160+s*36,180,18)}),n.globalAlpha=1,n.fillStyle="#9aa097",n.font=`400 28px ${Wt}`,n.fillText("\u670D\u88C5\u8272\u5E26",70,130),n.fillText("\u58F0\u97F3\u4E0E\u504F\u597D",70,340);for(let i=0;i<3;i++)n.beginPath(),n.strokeStyle=i===1?"#e7e4dc":"#3c444c",n.lineWidth=3,n.arc(110+i*70,400,18,0,Math.PI*2),n.stroke();n.save(),n.translate(560+e*16,400),n.strokeStyle="#d5efe8",n.lineWidth=3,n.beginPath(),n.ellipse(0,-150,36,46,0,0,Math.PI*2),n.moveTo(0,-104),n.lineTo(0,10),n.moveTo(-90,-30),n.lineTo(0,-70),n.lineTo(86,-18),n.moveTo(0,10),n.lineTo(-46,130),n.moveTo(0,10),n.lineTo(52,128),n.stroke(),n.restore(),n.beginPath(),n.strokeStyle="#6ecfc6",n.lineWidth=2,n.arc(860,180,54,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(820,190),n.quadraticCurveTo(860,150,900,196),n.quadraticCurveTo(860,214,820,190),n.stroke(),n.fillStyle="#9aa097",n.font=`400 26px ${Wt}`,n.fillText("\u5C9B\u5C7F\u5FBD\u7AE0",800,270),n.strokeStyle="rgba(110,207,198,0.35)",n.beginPath(),n.moveTo(620,390),n.lineTo(980,390),n.stroke(),n.fillStyle="#6d756f",n.font=`400 22px ${Wt}`,n.fillText("\u53EF\u968F\u4F53\u9A8C\u66F4\u65B0  \xB7  \u4E0D\u751F\u6210\u7406\u60F3\u4EBA\u683C",620,640),t.tex.needsUpdate=!0}function NT(){let t=Na(768,420),{ctx:e}=t;e.fillStyle="#14181e",e.fillRect(0,0,768,420),e.strokeStyle="rgba(110,207,198,0.45)",e.lineWidth=1.5;for(let n=0;n<7;n++){e.beginPath(),e.moveTo(40,80+n*28);for(let a=40;a<=720;a+=20){let i=80+n*28+Math.sin(a*.02+n)*16+Math.sin(a*.05)*6;e.lineTo(a,i)}e.stroke()}return e.fillStyle="#e7e4dc",e.font=`600 36px ${Wt}`,e.fillText("\u4E0B\u4E00\u6B21\uFF0C\u4F1A\u662F\u53E6\u4E00\u6761\u822A\u7EBF",48,340),e.fillStyle="#9aa097",e.font=`400 22px ${Wt}`,e.fillText("\u57FA\u4E8E\u65B0\u7684\u8868\u8FBE\u4E0E\u72B6\u6001\uFF0C\u800C\u4E0D\u662F\u540C\u4E00\u4EFD\u5267\u672C",48,380),t.tex.needsUpdate=!0,t}function BT(){let t=Na(2048,512);return lv(t,0),t}function lv(t,e){let{ctx:n}=t,a=n.createLinearGradient(0,0,0,512);a.addColorStop(0,"#141824"),a.addColorStop(.45,"#24343a"),a.addColorStop(.62,"#1a3a40"),a.addColorStop(1,"#10161a"),n.fillStyle=a,n.fillRect(0,0,2048,512),n.globalAlpha=.35;for(let i=0;i<18;i++)n.fillStyle=i%2?"#6ecfc6":"#b7a6d6",n.fillRect((i*180+e*40)%2100,40+i%5*30,90,2);n.globalAlpha=1,n.fillStyle="#0e1418",n.beginPath(),n.moveTo(0,360);for(let i=0;i<=2048;i+=16){let s=300+Math.sin(i*.008+e)*28+Math.sin(i*.02+e*.7)*12+Math.sin(i*.004)*36;n.lineTo(i,s)}n.lineTo(2048,512),n.lineTo(0,512),n.fill(),n.strokeStyle="rgba(180,210,206,0.35)",n.stroke(),t.tex.needsUpdate=!0}function FT(){let t=Na(512,512);return uv(t,0),t}function uv(t,e){let{ctx:n}=t;n.fillStyle="#102226",n.fillRect(0,0,512,512),n.save(),n.translate(256,256),n.rotate(e*.15),n.strokeStyle="rgba(110,207,198,0.55)",n.lineWidth=2;let a=[[-70,-20],[80,-60],[20,70],[-90,80],[110,40]];for(let i=0;i<a.length;i++){let s=a[i],r=a[(i+2)%a.length];!s||!r||(n.beginPath(),n.moveTo(s[0],s[1]),n.lineTo(r[0],r[1]),n.stroke())}a.forEach((i,s)=>{n.fillStyle=s%2?"#c8b6e4":"#8fd0c8",n.beginPath(),n.ellipse(i[0],i[1],28+s%3*8,18,s,0,Math.PI*2),n.fill()}),n.restore(),t.tex.needsUpdate=!0}function zT(){let t=Na(256,128);return cv(t,0),t}function cv(t,e){let{ctx:n}=t;n.fillStyle="#101418",n.fillRect(0,0,256,128),n.strokeStyle="#6ecfc6",n.lineWidth=2,n.beginPath();for(let a=0;a<256;a++){let i=64+Math.sin(a*.08+e*2)*18+Math.sin(a*.03+e)*8;a===0?n.moveTo(a,i):n.lineTo(a,i)}n.stroke(),t.tex.needsUpdate=!0}function fv(){let t=Na(640,360),{ctx:e}=t,n=e.createLinearGradient(0,0,0,360);return n.addColorStop(0,"#1a1c24"),n.addColorStop(1,"#101318"),e.fillStyle=n,e.fillRect(0,0,640,360),e.fillStyle="#2a3034",e.beginPath(),e.moveTo(40,250),e.quadraticCurveTo(180,160,320,230),e.quadraticCurveTo(460,140,620,240),e.lineTo(620,320),e.lineTo(40,320),e.fill(),e.fillStyle="#8d9390",e.font=`400 24px ${Wt}`,e.fillText("\u4E2A\u4EBA\u60C5\u5883  \xB7  \u53EF\u6309\u9700\u8981\u53D8\u5316",40,56),t.tex.needsUpdate=!0,t}function HT(){let t=Na(1024,512),{ctx:e}=t;e.fillStyle="#16141a",e.fillRect(0,0,1024,512),e.strokeStyle="rgba(208,160,106,0.55)",e.lineWidth=2;for(let n=0;n<5;n++)e.beginPath(),e.moveTo(60,80+n*70),e.bezierCurveTo(300,40+n*40,640,160+n*20,960,90+n*55),e.stroke();return e.fillStyle="#e7e4dc",e.font=`500 32px ${Wt}`,e.fillText("\u5404\u7EC4\u4E0D\u540C\u7684\u53D9\u4E8B\u7EBF\u7D22",60,450),t.tex.needsUpdate=!0,t}function kT(){let t=document.createElement("canvas");t.width=256,t.height=512;let e=t.getContext("2d");if(!e)throw new Error("2d");e.fillStyle="#c3c6cb",e.fillRect(0,0,256,512);for(let n=0;n<1400;n++){let a=170+n*17%50;e.fillStyle=`rgba(${a},${a},${a+4},0.18)`,e.fillRect(n*37%256,n*19%512,3,2)}for(let n=24;n<490;n+=36)for(let a=16;a<240;a+=28){let i=(a*3+n)%17>12;e.fillStyle=i?"#e4d0ae":"#667480",e.fillRect(a,n,14,20)}return Gs(t,!0)}function GT(){let t=document.createElement("canvas");t.width=512,t.height=512;let e=t.getContext("2d");if(!e)throw new Error("2d");e.fillStyle="#4a5360",e.fillRect(0,0,512,512);for(let a=0;a<6e3;a++){let i=22+a%28;e.fillStyle=`rgba(${i+8},${i+10},${i+12},0.35)`,e.fillRect(a*53%512,a*97%512,2,2)}e.strokeStyle="rgba(0,0,0,0.28)",e.lineWidth=2;for(let a=0;a<=512;a+=128)e.beginPath(),e.moveTo(a,0),e.lineTo(a,512),e.moveTo(0,a),e.lineTo(512,a),e.stroke();let n=Gs(t,!0);return n.wrapS=n.wrapT=xr,n.repeat.set(8,6),n}function VT(){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");if(!e)throw new Error("2d");let n=e.createImageData(256,256);for(let i=0;i<n.data.length;i+=4){let s=150+i*13%80;n.data[i]=s,n.data[i+1]=s,n.data[i+2]=s,n.data[i+3]=255}e.putImageData(n,0,0);let a=Gs(t,!1);return a.wrapS=a.wrapT=xr,a.repeat.set(6,6),a}var dv=Si(()=>{Cr();Bp()});function yl(t){return new fc({color:0,emissive:16777215,emissiveIntensity:t})}var Fp,qT=Si(()=>{Cr();Fp=class extends vr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ra;e.deleteAttribute("uv");let n=new Xa({side:ln}),a=new Xa,i=new Ya(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Le(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let r=new tc(e,a,6),o=new Jt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new Le(e,yl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let u=new Le(e,yl(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);let f=new Le(e,yl(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let p=new Le(e,yl(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let c=new Le(e,yl(20));c.position.set(3.235,11.486,-12.541),c.scale.set(2.5,2,.1),this.add(c);let d=new Le(e,yl(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(let n of e)n.dispose()}}});function WT(t,e){let n=new gl(e);t.environment=n.fromScene(new Fp,.04).texture,t.environmentIntensity=.22,n.dispose();let a=GT(),i=VT(),s=kT(),r=H=>Gn(new Xa(H)),o=H=>Gn(new cc(H)),l={floor:r({map:a,roughnessMap:i,roughness:.78,metalness:.05,color:16777215}),floorDark:r({color:2764856,roughness:.92,metalness:0}),path:r({color:3817544,roughness:.7,metalness:.08}),wall:r({color:3949388,roughness:.8,metalness:.04}),wallAlt:r({color:4870748,roughness:.74,metalness:.06}),titanium:r({color:10133928,metalness:.86,roughness:.32}),metalDark:r({color:2764339,metalness:.7,roughness:.4}),wood:r({color:7098688,roughness:.62,metalness:.02}),fabric:r({color:2762280,roughness:.9,metalness:0}),robotGloss:o({color:16054264,roughness:.18,metalness:.04,clearcoat:.65,clearcoatRoughness:.18}),robotMatte:r({color:15131096,roughness:.48,metalness:.02}),visor:r({color:460809,roughness:.06,metalness:.45}),stripe:r({color:9426144,roughness:.35,metalness:.1,emissive:1193018,emissiveIntensity:.2}),stripeGray:r({color:10133670,roughness:.4,metalness:.2}),pod:r({color:2304046,roughness:.45,metalness:.35}),podInner:r({color:1708572,roughness:.8,emissive:3811908,emissiveIntensity:.35}),cushion:r({color:4866108,roughness:.85}),hospital:r({map:s,color:16777215,roughness:.72,metalness:.02,emissive:12166280,emissiveMap:s,emissiveIntensity:.18}),podium:r({color:12040372,roughness:.66,metalness:.05}),resin:o({color:1863288,roughness:.12,metalness:.05,transparent:!0,opacity:.62,emissive:799544,emissiveIntensity:.35}),glass:o({color:10400956,roughness:.08,metalness:.15,transparent:!0,opacity:.28}),mirrorGlass:r({color:9279907,roughness:.08,metalness:.92}),island:r({vertexColors:!0,roughness:1,metalness:0}),land:r({vertexColors:!0,roughness:1,metalness:0}),dune:r({color:2764854,roughness:.9})},u=Gn(new Wa({color:7262150,transparent:!0,opacity:.55,toneMapped:!0})),f=Gn(new Wa({color:7262150,transparent:!0,opacity:.18,toneMapped:!0})),p=Gn(new Wa({color:13672554,transparent:!0,opacity:.45,toneMapped:!0}));t.background=new Ge(1712168),t.fog=new Zu(1712168,.0036),t.add(new xc(14542060,.9)),t.add(new hc(10399936,3814444,1.15));let c=new ll(16183526,3.1);c.position.set(86,62,36),c.target.position.set(62,0,30),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.camera.left=-80,c.shadow.camera.right=80,c.shadow.camera.top=60,c.shadow.camera.bottom=-60,c.shadow.camera.far=180,c.shadow.bias=-4e-4,c.shadow.normalBias=.04,t.add(c,c.target);let d=new ll(14016746,1.65);d.position.set(-24,28,-30),d.target.position.set(50,0,30),t.add(d,d.target),eD(t,l),k(t,Tt(12.4,.16,14.2,.08,3),l.path,8,.08,24,{receive:!0,cast:!0}),$3(t,u,8,24,12.5,14.3,.18),nD(t,l,15.05,25.6),vl(t,Cu.slice(2,8),2.15,.06,.05,l.path),vl(t,Cu.slice(7),2.15,.06,.05,l.path),vl(t,gd,2.05,.07,.06,l.path),vl(t,xd,2.05,.07,.06,l.path),vl(t,vd,2.1,.06,.05,l.path),Sl(t,Cu,.1,.09,u),Sl(t,gd,.11,.1,u),Sl(t,xd,.11,.1,u),Sl(t,vd,.09,.09,p);let y=Sl(t,[[20,27],[25,26.4],[31,27.6]],.16,.11,u).material;y.opacity=.15,Sl(t,vb,.08,.045,f),k(t,ae(15.2,.04,7.2),l.floorDark,50,.02,31,{receive:!0}),k(t,ae(15,.08,.08),l.metalDark,50,.08,27.85),k(t,ae(15,.08,.08),l.metalDark,50,.08,34.15),k(t,$i(3.4,2.4,.85,28),l.island,80.2,0,30.2,{receive:!0,cast:!0}),k(t,$i(2.2,1.6,.62,22),l.island,86.6,0,33.6,{receive:!0,cast:!0}),k(t,$i(1.8,1.5,.5,20),l.island,85.8,0,26.4,{receive:!0,cast:!0}),k(t,ae(8.2,.32,6.4),l.path,96.6,.36,30,{cast:!0,receive:!0}),k(t,ae(8.2,.04,6.5),l.titanium,96.6,.2,30),k(t,iv(2.6,6.2,.02,.48),l.path,90.6,0,30,{receive:!0,cast:!0});let g=k(t,iv(2.4,5.4,.02,.48),l.path,0,0,0,{receive:!0,cast:!0});g.position.set(103.2,0,30),g.rotation.y=Math.PI,k(t,ae(7.4,.08,.08),l.titanium,96.6,.56,33.05),k(t,ae(7.4,.08,.08),l.titanium,96.6,.56,26.95),tD(t,l.wall,l.titanium);let h=new sn;t.add(h),iD(t,h,l,s),uD(t,h,l),cD(t,h,l),hD(t),pD(t,h,l),gD(t,h,l),vD(t,l),yD(t,l),SD(t,l);let m=aD(t,l.wall,l.metalDark),S=new Map,_=[],E=ae(1,1,1),A=Gn(new Wa({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1})),v=new Map,b={"00":14725242,"01":9425106,"02":12035292,"03":6969928,"04":14725242,"05":8308932,"05A":12035798,"05B":14725242,"06":9425106,"07":13226196,"08":15123106},I={"00":[12,13],"01":[9,9],"02":[13,11],"03":[14,6.5],"04":[11,10],"05":[7,7],"05A":[11,8],"05B":[11,8],"06":[9,7],"07":[13,7],"08":[7,6]};for(let H of ki){let V=Gn(new Wa({color:H.id==="08"||H.id==="04"||H.id==="00"||H.id==="05B"?13672554:7262150,transparent:!0,opacity:0,depthWrite:!1})),ie=new Le(We(new ma(H.halo,.03,6,64)),V);ie.rotation.x=Math.PI/2,ie.position.set(H.x,.12,H.z),t.add(ie),S.set(H.id,V);let[Y,ee]=I[H.id],ne=k(t,E,A,H.x,1.3,H.z,{sx:Y,sy:2.6,sz:ee});ne.userData.station=H.id,_.push(ne);let Te=H.id==="03"?.8:2.4,Be=new Ya(b[H.id],Te,H.id==="03"?10:14,2);Be.position.set(H.x,2.5,H.z),t.add(Be),v.set(H.id,{light:Be,base:Te,hot:H.id==="03"?2.2:8})}let w=t.getObjectByName("particles").material,O=t.userData.avatar,B=t.userData.ring,G=t.userData.table,P=t.userData.wave,X=_D(t,[Cu,gd,xd,vd]);return{shell:m,detail:h,halos:S,hits:_,lights:v,particles:w,motes:X,avatar:O,ring:B,table:G,wave:P,mirrorFade:t.userData.mirrorFade,mirrorPoint:t.userData.mirrorPoint,islandGroup:t.userData.islandGroup,islands:t.userData.islands,layouts:t.userData.layouts,layoutIndex:0,lines:t.userData.lines,linePos:t.userData.linePos,reportMats:t.userData.reportMats,holo:t.userData.holo,confirmMat:y,confirmed:!1,reportFocus:-1}}function $3(t,e,n,a,i,s,r){k(t,ae(i,.012,.035),e,n,r,a-s/2),k(t,ae(i,.012,.035),e,n,r,a+s/2),k(t,ae(.035,.012,s),e,n-i/2,r,a),k(t,ae(.035,.012,s),e,n+i/2,r,a)}function Sl(t,e,n,a,i){let{geo:s}=IT(e,n,a),r=new Le(s,i);return r.renderOrder=2,t.add(r),r}function eD(t,e){let n=[[8,24,18,14,1.2],[24,30,10,8,1],[36,32,16,12,1.15],[51,31,11,8,.95],[64,30,14,12,1.1],[74,31,8,7,.9],[85,45,12,8,1.05],[85,15,12,9,1.05],[99,30,10,8,1],[111,27,12,8,1.05],[119,24,7,6,.95],[60,60,64,18,1.3],[60,0,64,16,1.15],[-4,30,12,24,1.05],[130,28,12,20,1]];for(let[a,i,s,r,o]of n){let l=k(t,RT(s,r,o,36),e.land,a,-o,i,{receive:!0});l.receiveShadow=!0,l.castShadow=!0}}function tD(t,e,n){let a=[[16,2.5,.42,16,46.5],[30,2.7,.42,44,42.6],[18,2.35,.4,68,40.8],[22,2.25,.4,88,51],[22,2.45,.4,112,39.5]];for(let[i,s,r,o,l]of a)k(t,ae(i,s,r),e,o,s/2,l,{cast:!0,receive:!0}),k(t,ae(i,.08,r+.04),n,o,.04,l);k(t,ae(.4,2.5,6),e,.5,1.25,16.5,{cast:!0,receive:!0}),k(t,ae(.4,2.5,8),e,.5,1.25,33,{cast:!0,receive:!0}),k(t,ae(.35,2.4,6),e,123.2,1.2,28,{cast:!0})}function nD(t,e,n,a){k(t,ae(.42,2.85,.55),e.wall,n,1.42,a-2.15,{cast:!0,receive:!0}),k(t,ae(.42,2.85,.55),e.wall,n,1.42,a+2.15,{cast:!0,receive:!0}),k(t,ae(.5,.28,4.9),e.titanium,n,2.95,a,{cast:!0}),k(t,ae(.08,2.4,.9),e.glass,n,1.4,a-2.7),k(t,ae(.08,2.4,.9),e.glass,n,1.4,a+2.7),k(t,ae(1.2,.02,4.2),e.titanium,n,.16,a)}function aD(t,e,n){let a=new sn;a.name="shell",a.visible=!1;let i=[[16,16,46.5,2.5],[30,44,42.6,2.7],[18,68,40.8,2.35],[22,88,51,2.25],[22,112,39.5,2.45]];for(let[s,r,o,l]of i)k(a,ae(s,2.6,.36),e,r,l+1.3,o);return k(a,ae(40,.16,28),n,22,5.55,30),k(a,ae(16,.18,12),new Xa({color:460810,roughness:.9}),50,5.35,31),k(a,ae(62,.16,26),n,92,5.6,32),t.add(a),a}function iD(t,e,n,a){let s=new sn;s.position.set(6.35,.16,21.5),t.add(s);let r=Gn(new Sr({color:7262150,transparent:!0,opacity:.45}));t.userData.holo=r;let o=(c,d,x,y,g,h,m)=>{k(s,ae(c,d,x),m,y,g,h,{cast:!0,receive:!0});let S=new el(We(new rc(ae(c,.02,x))),r);S.position.set(y,g+d/2+.16,h),s.add(S)};o(2.7,.22,1.65,0,.11,0,n.podium),o(1.12,1.22,.7,-.28,.22+.61,-.12,n.hospital),o(1.05,.46,.58,1.05,.22+.23,.28,n.hospital),o(.82,.34,.48,-1.12,.22+.17,.22,n.hospital),o(.62,.22,.26,.42,.62,.02,n.podium),k(s,ae(.72,.05,.42),n.titanium,.05,.48,.92,{cast:!0});for(let c of[-.22,.22])for(let d of[.78,1.05])k(s,ae(.04,.36,.04),n.metalDark,c,.28,d);k(s,ae(.12,.08,.12),n.stripe,.55,.28,-.35);let l=Lr("\u9662\u533A","\u4E3B\u697C \xB7 \u8FDE\u5ECA \xB7 \u672C\u4E2D\u5FC3"),u=fn(l.tex,.55),f=new sn;f.position.set(6.3,.16,17.7),f.rotation.x=-.55,t.add(f),k(t,ae(.42,.7,.36),n.metalDark,6.3,.16+.35,18.15,{cast:!0}),k(f,ae(.7,.42,.04),n.titanium,0,.55,0),k(f,new qt(.62,.32),u,0,.55,.03),PT().forEach((c,d)=>{let x=3.15+d*2.15;k(t,ae(1.9,1.15,.08),n.wallAlt,x,1.55,30.35,{cast:!0,receive:!0}),k(t,ae(1.7,.95,.02),n.titanium,x,1.55,30.28),k(t,new qt(1.58,.84),fn(c.tex,.4),x,1.55,30.3)}),k(t,ae(.28,2.35,11.5),n.wall,13.7,1.2,24.6,{cast:!0,receive:!0}),sD(t,n,11.15,.16,29.15),rD(t,n,12.15,.16,26.15),oD(t,n,12.05,.16,23.15),lD(t,n,11.35,.16,20.35)}function fn(t,e=.7){return Gn(new Xa({map:t,emissive:16777215,emissiveMap:t,emissiveIntensity:e,roughness:.42,metalness:.04}))}function sD(t,e,n,a,i){let s=new sn;s.position.set(n,a,i),s.rotation.y=Math.PI;let r=[new xe(.15,0),new xe(.23,.06),new xe(.29,.32),new xe(.31,.66),new xe(.26,.96),new xe(.16,1.08),new xe(.09,1.12)],o=new Le(We(new uc(r,36)),e.robotGloss);o.castShadow=!0,s.add(o);let l=new Le(We(new jn(.2,32,24)),e.robotGloss);l.scale.set(1.28,.9,1.02),l.position.set(0,1.24,.02),l.castShadow=!0,s.add(l);let u=new Le(We(new jn(.125,28,18)),e.visor);u.scale.set(1.45,.95,.48),u.position.set(.01,1.25,.16),s.add(u);let f=new Le(We(new jn(.012,10,8)),e.stripe);f.position.set(.075,1.27,.215),s.add(f),k(s,Tt(.16,.1,.018,.01),e.visor,.04,.78,.29),k(s,ae(.018,.72,.03),e.stripe,-.27,.52,.06),k(s,ae(.014,.72,.025),e.stripeGray,-.25,.52,.09);let p=new Le(We(new ma(.2,.016,8,28)),e.titanium);p.rotation.x=Math.PI/2,p.position.y=.02,s.add(p),t.add(s);let c=Lr("\u5229\u7B19","\u670D\u52A1\u7EC8\u7AEF");k(t,ae(.52,.16,.03),e.metalDark,n,a+.12,i-.55),k(t,new qt(.48,.13),fn(c.tex,.45),n,a+.12,i-.58,{ry:Math.PI})}function rD(t,e,n,a,i){k(t,Tt(.78,.62,.42,.04,2),e.metalDark,n,a+.42,i,{cast:!0,receive:!0}),k(t,ae(.7,.04,.34),e.titanium,n,a+.74,i);let s=Op(new ol().load(new URL("./media/copilot.jpg",import.meta.url).href));s.colorSpace=an,k(t,Tt(.46,.78,.04,.02),e.titanium,n,a+1.22,i+.02,{rx:-.18,cast:!0}),k(t,new qt(.4,.7),fn(s,.8),n,a+1.24,i+.05,{rx:-.18});let r=Lr("Copilot","\u590D\u8BCA\u52A9\u624B\u754C\u9762");k(t,new qt(.46,.13),fn(r.tex,.45),n,a+.22,i-.28,{ry:Math.PI})}function oD(t,e,n,a,i){k(t,Tt(.52,.78,.46,.06,3),e.wallAlt,n,a+.39,i,{cast:!0}),k(t,ae(.46,.03,.4),e.titanium,n,a+.8,i);let s=new sn;s.position.set(n,a+.8,i),s.rotation.y=Math.PI;let r=new Le(We(new jn(.2,28,20)),e.robotMatte);r.scale.set(1.05,1.2,.82),r.position.y=.28,r.castShadow=!0,s.add(r);let o=new Le(We(new ma(.19,.006,6,24)),e.titanium);o.rotation.x=Math.PI/2,o.position.y=.2,s.add(o);let l=new Le(Tt(.36,.26,.28,.08,3),e.robotMatte);l.position.y=.64,l.castShadow=!0,s.add(l);for(let c of[-1,1]){let d=new Le(We(new jn(.052,18,14)),e.visor);d.position.set(c*.075,.655,.13),s.add(d);let x=new Le(We(new jn(.012,8,8)),e.robotGloss);x.position.set(c*.09,.675,.17),s.add(x);let y=new Le(We(new al(.04,.1,4,8)),e.robotMatte);y.scale.set(.42,1.05,1),y.position.set(c*.25,.36,0),s.add(y);let g=new Le(We(new Qn(.006,.006,.2,6)),e.visor);g.position.set(c*.1,.88,0),s.add(g);let h=new Le(We(new Qn(.012,.012,.028,6)),e.visor);h.position.set(c*.1,.8,0),s.add(h)}let u=new Le(We(new Qn(.009,.009,.07,8)),e.visor);u.rotation.z=Math.PI/2,u.position.set(0,.655,.145),s.add(u);let f=new Le(We(new ma(.05,.012,8,18)),e.titanium);f.position.set(.16,.04,.12),f.rotation.x=Math.PI/2.4,s.add(f),t.add(s);let p=Lr("\u5C0F\u7B19 JITAI","\u966A\u4F34\u4E0E\u8282\u5F8B");k(t,new qt(.48,.13),fn(p.tex,.45),n,a+.18,i-.32,{ry:Math.PI})}function lD(t,e,n,a,i){k(t,Tt(.7,.28,.5,.04),e.wood,n,a+.2,i,{cast:!0}),k(t,ae(.62,.06,.42),e.titanium,n,a+.38,i);let s=Op(new ol().load(new URL("./media/wanxing.jpg",import.meta.url).href));s.colorSpace=an,k(t,Tt(.62,.86,.06,.03),e.titanium,n,a+.95,i,{cast:!0}),k(t,new qt(.54,.76),fn(s,.9),n,a+.95,i+.04);let r=new Ya(14725242,1.4,3.5,2);r.position.set(n,a+1.1,i-.3),t.add(r);let o=Lr("\u665A\u661F","\u591C\u95F4\u966A\u4F34\u754C\u9762");k(t,new qt(.48,.13),fn(o.tex,.45),n,a+.42,i-.3,{ry:Math.PI})}function hv(t,e,n,a){let i=a.theta1-a.theta0,s=i/a.count;for(let l=0;l<a.count;l++){let u=a.theta0+s*l+.01,f=a.theta0+s*(l+1)-.01,p=(u+f)/2,c=Math.max(.12,2*a.radius*Math.sin((f-u)/2)),d=Math.atan2(Math.cos(p),-Math.sin(p)),x=a.cx+Math.sin(p)*a.radius,y=a.cz+Math.cos(p)*a.radius,g=.07;k(t,ae(a.thick,g,c),e.titanium,x,a.y+a.height/2,y,{ry:d,cast:!0}),k(t,ae(a.thick,g,c),e.titanium,x,a.y-a.height/2,y,{ry:d,cast:!0});let h=Math.cos(p),m=-Math.sin(p),S=c/2-.03;k(t,ae(a.thick,a.height,.05),e.titanium,x+h*S,a.y,y+m*S,{ry:d,cast:!0}),k(t,ae(a.thick,a.height,.05),e.titanium,x-h*S,a.y,y-m*S,{ry:d,cast:!0});let _=a.radius+(a.inward?.28:-.28),E=a.cx+Math.sin(p)*_,A=a.cz+Math.cos(p)*_;k(t,ae(.1,a.height*.62,c*.45),e.metalDark,E,a.y,A,{ry:d}),l%3===0&&k(t,ae(.08,a.y-a.height/2,.08),e.titanium,x,(a.y-a.height/2)/2,y),k(t,ae(.04,.03,c*.6),e.visor,x,.22,y,{ry:d})}let r=a.radius+(a.inward?.015:-.015),o=new Le(We(new Qn(r,r,a.height-.2,Math.max(12,a.count*8),1,!0,a.theta0,i)),n);o.position.set(a.cx,a.y,a.cz),o.material.side=a.inward?ln:pi,t.add(o)}function uD(t,e,n){k(t,ae(8.5,3.05,.28),n.wall,21.2,1.55,36.2,{cast:!0,receive:!0});let a=OT();t.userData.avatar=a;let i=fn(a.tex,.65);hv(t,n,i,{cx:21.2,cz:34.6,y:1.75,radius:3.6,height:2.55,thick:.14,theta0:Math.PI-.58,theta1:Math.PI+.58,count:5,inward:!1}),k(e,ae(2.2,.7,.35),n.metalDark,21.2,.45,35.6);let s=We(new sl(new Ki([new R(22.4,.7,34.2),new R(22.6,.25,34.8),new R(22.2,.08,35.4)]),8,.012,5,!1));e.add(new Le(s,n.visor))}function cD(t,e,n){let a=BT();t.userData.ring=a;let i=fn(a.tex,.7);hv(t,n,i,{cx:34,cz:33.4,y:1.85,radius:6.15,height:2.7,thick:.16,theta0:-2.12,theta1:2.12,count:8,inward:!0}),k(t,$i(1.35,.95,.72,32),n.island,34,.08,31.7,{cast:!0,receive:!0}),k(t,$i(.55,.4,.28,18),n.island,32.5,.04,30.6,{cast:!0}),k(t,$i(.42,.34,.2,16),n.island,35.3,.04,31.1,{cast:!0});let s=zT();t.userData.wave=s;let r=fn(s.tex,.8);k(t,Tt(.46,.08,.36,.02),n.titanium,30.2,.08,30.6,{cast:!0});let o=new Le(We(new Qn(.1,.11,.04,20)),n.metalDark);o.position.set(30.2,.14,30.6),t.add(o);let l=new Le(We(new ma(.07,.016,8,20)),n.stripe);l.rotation.x=Math.PI/2,l.position.set(30.2,.2,30.6),t.add(l),k(t,ae(.28,.42,.04),n.titanium,30.55,.4,30.85),k(t,new qt(.24,.32),r,30.55,.42,30.88),dD(e,n.visor,[30.2,.12,30.75],[30.5,.05,30.9],[30.55,.2,30.85]),k(t,Tt(1.15,.06,.62,.02),n.wood,31.6,.72,28.7,{cast:!0}),k(t,ae(.06,.68,.06),n.metalDark,31.15,.36,28.45),k(t,ae(.06,.68,.06),n.metalDark,32.05,.36,28.45),k(t,ae(.06,.68,.06),n.metalDark,31.15,.36,28.95),k(t,ae(.06,.68,.06),n.metalDark,32.05,.36,28.95);let u=fD();k(t,new qt(1,.5),fn(u,.35),31.6,.76,28.7,{rx:-Math.PI/2}),k(e,ae(.12,.02,.02),n.metalDark,32.05,.78,28.95,{rz:.4}),k(t,Tt(.42,.06,.42,.02),n.titanium,33.4,.08,30.15);let f=new Le(We(new ma(.28,.025,10,28)),n.titanium);f.position.set(33.4,.72,30.15),t.add(f);let p=new Le(We(new al(.03,.12,4,8)),n.visor);p.position.set(33.4,.72,30.15),t.add(p),k(t,ae(.04,.64,.04),n.metalDark,33.4,.38,30.15),k(e,ae(.34,.02,.16),n.metalDark,36.4,.2,34.8);for(let c of[-.08,0,.08]){let d=new Le(We(new Qn(.015,.015,.02,8)),n.titanium);d.position.set(36.4+c,.22,34.8),e.add(d)}}function fD(){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d");if(!e)throw new Error("2d");return e.fillStyle="#e7e2d6",e.fillRect(0,0,512,256),e.strokeStyle="#6d6256",e.lineWidth=3,e.beginPath(),e.moveTo(40,180),e.quadraticCurveTo(140,40,240,150),e.quadraticCurveTo(320,230,460,80),e.stroke(),Gs(t,!0)}function dD(t,e,n,a,i){let s=We(new sl(new Ki([new R(...n),new R(...a),new R(...i)]),10,.01,5,!1));t.add(new Le(s,e))}function hD(t){let n=new Float32Array(3e4),a=new Float32Array(1e4),i=new Float32Array(1e4),s=sv(11),r=0,o=(d,x,y,g)=>{r>=1e4||(n[r*3]=d,n[r*3+1]=x,n[r*3+2]=y,a[r]=s(),i[r]=g,r++)},l=43,u=57.2;for(let d=0;d<6400;d++){let x=l+s()*(u-l),y=.15+Math.pow(s(),.85)*4.9,g=d%2===0?27.75:34.45;o(x,y,g+(s()-.5)*.9,1)}for(let d=0;d<1600;d++)o(l+s()*(u-l),d%4===0?.12+s()*.3:4.4+s()*.75,28.3+s()*5.4,.3);for(let d=0;d<1200;d++)o(l+s()*(u-l),.7+s()*2.4,30.3+(s()-.5)*1.5,2);for(let d=0;d<800;d++){let x=s()*Math.PI*2,y=.5+Math.sin(x*4)*.16+s()*.1;o(50.2+Math.cos(x)*y*1.5,1.45+Math.sin(x)*y,31+(s()-.5)*.28,3)}let f=We(new Lt);f.setAttribute("position",new Vt(n,3)),f.setAttribute("aSeed",new Vt(a,1)),f.setAttribute("aKind",new Vt(i,1));let p=Gn(new Pa({transparent:!0,depthWrite:!1,blending:dl,uniforms:{uTime:{value:0},uPixel:{value:1}},vertexShader:`
        attribute float aSeed;
        attribute float aKind;
        varying float vKind;
        varying float vSeed;
        uniform float uTime;
        uniform float uPixel;
        void main() {
          vec3 p = position;
          p.y += sin(uTime * 0.45 + aSeed * 18.0) * 0.03;
          if (aKind > 2.5) {
            float gather = 0.5 + 0.5 * sin(uTime * 0.42);
            vec3 center = vec3(50.2, 1.45, 31.0);
            vec3 scatter = vec3(sin(aSeed * 20.0), cos(aSeed * 12.0), sin(aSeed * 8.0)) * (1.0 - gather) * 1.6;
            p = mix(p, center, 0.0) + scatter * 0.35 + (p - center) * (0.45 + gather * 0.55) + center * 0.0;
            p = mix(center + (position - center), position + scatter, 1.0 - gather);
          }
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float dist = max(2.0, -mv.z);
          gl_PointSize = clamp(280.0 / dist * uPixel, 1.4, 13.0);
          vKind = aKind;
          vSeed = aSeed;
        }
      `,fragmentShader:`
        varying float vKind;
        varying float vSeed;
        uniform float uTime;
        void main() {
          vec2 c = gl_PointCoord - vec2(0.5);
          float d = length(c);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.08, d);
          vec3 col = vec3(1.0, 0.93, 0.82);
          if (vKind > 1.5) {
            float k = 0.5 + 0.5 * sin(uTime * 0.8 + vSeed * 24.0);
            col = mix(vec3(0.45, 0.85, 0.8), vec3(0.72, 0.62, 0.95), k);
          }
          float tw = 0.45 + 0.55 * sin(uTime * 1.5 + vSeed * 30.0);
          float alpha = a * tw * (vKind > 1.5 ? 0.8 : 0.42);
          gl_FragColor = vec4(col, alpha);
        }
      `})),c=new nl(f,p);c.name="particles",c.frustumCulled=!1,t.add(c)}function pD(t,e,n){let s=new Le(We(new Qn(3.25,3.32,.16,48)),n.metalDark);s.position.set(63,.66,30),s.castShadow=!0,s.receiveShadow=!0,t.add(s);let r=new Le(We(new ma(3.25,.035,8,48)),n.titanium);r.rotation.x=Math.PI/2,r.position.set(63,.74,30),t.add(r);let o=FT();t.userData.table=o;let l=new Le(We(new Qn(1.7,1.7,.02,40)),fn(o.tex,.85));l.position.set(63,.75,30),t.add(l);let u=new Ya(14725242,2.2,8,2);u.position.set(63,.4,30),t.add(u),[.35,1.15,2.05,2.9,3.75,4.55,5.4].forEach((g,h)=>{let m=4.05+h%3*.12,S=63+Math.sin(g)*m,_=30+Math.cos(g)*m;XT(t,n,S,_,Math.atan2(63-S,30-_),h%2===0)});let p=68.4,c=26.6;k(t,Tt(1.5,.08,.42,.02),n.titanium,p,.78,c,{cast:!0}),k(t,ae(.06,.74,.06),n.metalDark,p-.6,.4,c),k(t,ae(.06,.74,.06),n.metalDark,p+.6,.4,c);for(let g=0;g<4;g++)YT(t,n,p-.52+g*.34,.95,c);k(e,ae(1.3,.04,.12),n.metalDark,p,.7,c+.2);let d=HT();hv(t,n,fn(d.tex,.45),{cx:63,cz:37.2,y:1.7,radius:4.4,height:2.15,thick:.12,theta0:-1.15,theta1:1.15,count:5,inward:!0});for(let g=0;g<7;g++){let h=1.4+g%3*.35;k(t,ae(.08,h,.45),n.fabric,58.2+g*.55,h/2,36.4,{ry:.15*(g%2?1:-1)})}let x=new Le(We(new jn(.42,24,16)),n.glass);x.position.set(58.6,.7,33.4),t.add(x),k(t,Tt(.7,.12,.7,.04),n.titanium,58.6,.2,33.4,{cast:!0});let y=mD();y.position.set(58.6,.72,33.4),t.add(y)}function XT(t,e,n,a,i,s){let r=new sn;r.position.set(n,0,a),r.rotation.y=i;let o=[[-.18,-.18],[.18,-.18],[-.18,.16],[.18,.16]];for(let[l,u]of o)k(r,ae(.035,.44,.035),e.metalDark,l,.22,u,{cast:!0});k(r,Tt(.5,.06,.46,.02),e.wood,0,.46,0,{cast:!0}),k(r,Tt(.46,.42,.045,.02),e.wood,0,.74,-.2,{rx:-.12,cast:!0}),s&&(k(r,ae(.04,.16,.28),e.metalDark,-.24,.58,0),k(r,ae(.04,.16,.28),e.metalDark,.24,.58,0)),t.add(r)}function YT(t,e,n,a,i){let s=new sn;s.position.set(n,a,i),k(s,Tt(.16,.09,.1,.03),e.metalDark,0,0,0),k(s,ae(.12,.06,.02),e.visor,0,0,.05);let r=new Le(We(new ma(.07,.008,6,14,Math.PI)),e.titanium);r.rotation.z=Math.PI,r.position.set(0,.02,-.02),s.add(r),t.add(s),k(t,ae(.04,.05,.08),e.visor,n+.1,a-.16,i)}function mD(){let e=new Float32Array(840),n=sv(3);for(let s=0;s<280;s++){let r=n()*Math.PI*2,o=Math.pow(n(),.5)*.28;e[s*3]=Math.cos(r)*o,e[s*3+1]=(n()-.4)*.22,e[s*3+2]=Math.sin(r)*o*.8}let a=We(new Lt);a.setAttribute("position",new Vt(e,3));let i=Gn(new tl({color:13154020,size:.02,transparent:!0,opacity:.85,depthWrite:!1}));return new nl(a,i)}function gD(t,e,n){k(t,ae(8.5,2.15,.22),n.wall,84,1.08,49.3,{cast:!0,receive:!0}),k(t,ae(.22,2.05,5.2),n.wall,78.2,1.02,45.2,{cast:!0}),k(t,ae(.22,2.05,5.2),n.wall,89.6,1.02,45.2,{cast:!0});let a=fv();k(t,new qt(3.2,1.5),fn(a.tex,.35),84,1.55,49.1),k(t,Tt(1.2,.06,.55,.02),n.wood,80.4,.78,44.6,{cast:!0}),k(t,ae(.05,.74,.05),n.metalDark,79.95,.39,44.4),k(t,ae(.05,.74,.05),n.metalDark,80.85,.39,44.4),YT(t,n,80.15,.92,44.6),k(t,ae(.16,.05,.28),n.titanium,80.7,.84,44.75),k(t,ae(.04,.9,.7),n.titanium,79.3,1.15,46.2);let i=fv();k(t,new qt(.62,.4),fn(i.tex,.4),79.3,1.2,46.15,{ry:Math.PI/2}),xD(t,n,87.4,45.1,-.4);let s=.78;k(t,Tt(3.4,.12,1.9,.06,3),n.wood,84,s-.02,15.2,{cast:!0,receive:!0});let r=new sn;r.position.set(84,s+.08,15.2),t.add(r);let o=[[[-.7,.15],[.55,.4],[-.2,-.45],[.85,-.3],[.05,.45]],[[-.2,.05],[.22,.16],[.02,-.2],[.32,-.02],[-.28,.22]],[[-1.15,-.45],[1.15,.45],[-1,.5],[1.05,-.5],[0,0]]],l=[],u=[[.28,.16,.2],[.22,.2,.16],[.18,.12,.18],[.24,.14,.14],[.16,.18,.16]];o[0].forEach((y,g)=>{let h=u[g]??[.2,.14,.16],m=new Le($i(h[0],h[2],h[1],14),n.island);m.position.set(y[0],0,y[1]),r.add(m),l.push(m)});let f=new Float32Array(60),p=We(new Lt);p.setAttribute("position",new Vt(f,3)),p.setDrawRange(0,0);let c=new el(p,Gn(new Sr({color:7262150,transparent:!0,opacity:.8})));r.add(c),t.userData.islandGroup=r,t.userData.islands=l,t.userData.layouts=o,t.userData.lines=c,t.userData.linePos=f,k(t,Tt(1.4,.08,.42,.03),n.wood,78.6,.46,16.4,{cast:!0}),k(t,ae(.08,.42,1.2),n.metalDark,78.1,.24,16.4),k(t,ae(.08,.42,1.2),n.metalDark,79.1,.24,16.4);for(let y=0;y<5;y++)k(t,ae(.28,.55,.22),n.wallAlt,80.2+y*.42,.7,18.6),k(t,ae(.22,.4,.02),n.glass,80.2+y*.42,.75,18.48);k(t,ae(3.6,.08,.42),n.titanium,84,.72,9.6,{cast:!0}),k(t,ae(.06,.68,.36),n.metalDark,82.4,.36,9.6),k(t,ae(.06,.68,.36),n.metalDark,85.6,.36,9.6),k(t,Tt(.28,.16,.2,.02),n.fabric,83.1,.86,9.6),k(t,Tt(.22,.22,.18,.02),n.wood,83.6,.9,9.6);let d=new sn;d.position.set(85.1,.78,9.6),d.scale.setScalar(.45);let x=new Le(Tt(.36,.26,.28,.08,2),n.robotMatte);x.position.y=.5,d.add(x);for(let y of[-1,1]){let g=new Le(We(new jn(.05,12,10)),n.visor);g.position.set(y*.07,.52,.12),d.add(g)}t.add(d)}function xD(t,e,n,a,i){let s=new sn;s.position.set(n,0,a),s.rotation.y=i,k(s,Tt(2.35,.12,1.15,.06),e.titanium,.05,.08,0,{cast:!0,receive:!0});let r=new Le(We(new Qn(.5,.5,1.65,28,1,!0)),e.pod);r.rotation.z=Math.PI/2,r.position.set(.15,.62,0),r.castShadow=!0,s.add(r);let o=new Le(We(new jn(.5,24,16,0,Math.PI*2,0,Math.PI)),e.pod);o.rotation.z=Math.PI/2,o.position.set(.95,.62,0),o.castShadow=!0,s.add(o);let l=new Le(We(new ma(.5,.028,8,24)),e.titanium);l.rotation.y=Math.PI/2,l.position.set(-.68,.62,0),s.add(l),k(s,Tt(1.15,.08,.62,.03),e.cushion,.15,.4,0),k(s,Tt(.28,.1,.28,.04),e.cushion,.72,.48,0);let u=new Le(We(new Qn(.52,.52,.7,24,1,!0,Math.PI*.15,Math.PI*.7)),e.glass);u.rotation.z=Math.PI/2,u.position.set(.2,.66,0),s.add(u);for(let p=0;p<5;p++)k(s,ae(.16,.025,.03),e.visor,.15+p*.02,.78,.48);k(s,ae(.04,.28,.22),e.titanium,-.2,.55,.62),k(s,ae(.02,.16,.12),e.visor,-.2,.55,.74);let f=new Ya(13021404,.9,3.2,2);f.position.set(.1,.62,0),s.add(f),t.add(s)}function vD(t,e){let n=new sn,a=99.7,i=30,s=.52;n.position.set(a,s,i);let r=4.3,o=2.85;k(n,ae(.16,.12,r),e.titanium,0,o,0,{cast:!0}),k(n,ae(.16,.12,r),e.titanium,0,0,0,{cast:!0}),k(n,ae(.16,o,.12),e.titanium,0,o/2,r/2,{cast:!0}),k(n,ae(.16,o,.12),e.titanium,0,o/2,-r/2,{cast:!0}),k(n,ae(.06,o-.2,r-.24),e.mirrorGlass,.02,o/2,0),k(n,ae(.1,o-.3,r-.5),e.metalDark,.16,o/2,0),k(n,ae(.08,o,.08),e.titanium,.22,o/2,-.8),k(n,ae(.08,o,.08),e.titanium,.22,o/2,.8),k(n,ae(.12,.16,.9),e.titanium,0,-.02,0);let l=Gn(new Wa({map:t.userData.avatar?.tex,transparent:!0,opacity:0,depthWrite:!1})),u=t.userData.avatar;l.map=u.tex;let f=new Le(new qt(1.3,1.7),l);f.position.set(-.06,o*.58,0),f.rotation.y=-Math.PI/2,n.add(f),t.add(n),t.userData.mirrorFade=l,t.userData.mirrorPoint=new R(a,s+o*.5,i)}function yD(t,e){k(t,ae(12.6,.28,.55),e.wallAlt,109.2,.2,32.4,{cast:!0,receive:!0});let n=UT(),a=n.map(o=>fn(o.tex,.55)),i=[0,.18,.36],s=[4.05,3.7,3.55];n.forEach((o,l)=>{let u=104.2+l*4.15;k(t,ae(s[l]??3.6,2.15,.06),e.titanium,u,1.55,32.15-(i[l]??0),{cast:!0});let f=k(t,new qt((s[l]??3.6)-.22,1.9),a[l]??e.glass,u,1.55,32.1-(i[l]??0));f.position.z+=.04,k(t,ae((s[l]??3)*.8,.012,.012),e.stripe,u,.55+l*.08,31.7-l*.1)}),t.userData.reportMats=a,k(t,Tt(1.6,.08,.7,.03),e.wood,108.5,.74,24.6,{cast:!0}),k(t,ae(.06,.7,.06),e.metalDark,107.9,.36,24.35),k(t,ae(.06,.7,.06),e.metalDark,109.1,.36,24.35),XT(t,e,108.5,23.7,0,!1);let r=Lr("\u4EA4\u6D41","\u53EA\u8C08\u5DF2\u786E\u8BA4\u7684\u5185\u5BB9");k(t,new qt(.42,.28),fn(r.tex,.4),109.15,.8,24.6,{rx:-.9})}function SD(t,e){k(t,$i(.55,.4,.55,18),e.island,118.2,.05,24.2,{cast:!0});let n=new Ya(15123106,3.5,7,2);n.position.set(118.2,.9,24.2),t.add(n);let a=new Le(We(new jn(.08,16,12)),e.stripe);a.position.set(118.2,.72,24.2),t.add(a);let i=NT();k(t,ae(1.5,.9,.08),e.titanium,116.4,1.35,26.4,{cast:!0}),k(t,new qt(1.35,.75),fn(i.tex,.55),116.4,1.35,26.32),k(t,ae(.28,2.5,1.4),e.wall,122.5,1.25,21.6,{cast:!0}),k(t,ae(.28,2.5,1.4),e.wall,122.5,1.25,25.4,{cast:!0}),k(t,ae(.4,.2,2.4),e.titanium,122.5,2.55,23.5)}function _D(t,e){let n=DT(),a=[];return e.forEach((i,s)=>{let r=Np(i,.2),o=s===0?8:5;for(let l=0;l<o;l++){let u=Gn(new $o({map:n,color:s===3?13672554:l%4===0?12035798:7262150,transparent:!0,depthWrite:!1,blending:dl,opacity:.85})),f=new ju(u);f.scale.set(.55,.55,1),t.add(f),a.push({sprite:f,curve:r,u:l/o,speed:.025+l%3*.008})}}),a}var ZT=Si(()=>{Cr();qT();yd();Bp();dv()});var JT={};cE(JT,{mountExperience:()=>MD});function MD(t,e){let n=!1,a=new Ip({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),a.setClearColor(1053722,1),a.outputColorSpace=an,a.toneMapping=_c,a.toneMappingExposure=1.28,a.shadowMap.enabled=!0,a.shadowMap.type=zh;let i=new vr,s=new Dn(40,1,.08,240),r=WT(i,a),o=new vc,l=new xe,u=new R(...Lu.overview.t),f=new yc,p=new R(...Lu.overview.t),c=new R(...Lu.overview.p),d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,x=d?.2:1.35,y="intro",g=0,h=null,m=null,S=0,_=null,E=0,A=!1,v=0,b=performance.now(),I=0,w=!1,O=0,B=0,G=0,P=0,X=new R,H=new R,V=new R,ie=new R,Y=0,ee=1.6,ne=0,Te=zp.slice(0,-1).reduce((L,ge)=>L+ge.d,0),Be=L=>{let ge=c.clone().sub(p),be=Math.cos(L),He=Math.sin(L);s.position.set(p.x+ge.x*be-ge.z*He,c.y,p.z+ge.x*He+ge.z*be),u.copy(p),s.lookAt(u)};Be(-.06);let K=()=>{f.setFromVector3(s.position.clone().sub(u))},me=()=>{f.phi=zt.clamp(f.phi,.22,1.45),f.radius=zt.clamp(f.radius,4,90);let L=new R().setFromSpherical(f);s.position.copy(u).add(L),s.lookAt(u)},_e=()=>{y="free",K(),e.onTour(!1)},Pe=(L,ge,be=1.65)=>{X.copy(s.position),V.copy(u),H.set(L[0],L[1],L[2]),ie.set(ge[0],ge[1],ge[2]),Y=0,ee=d?.35:be,y="fly",e.onTour(!1)},ve=()=>{let L=t.clientWidth||window.innerWidth,ge=t.clientHeight||window.innerHeight,be=L/Math.max(1,ge);a.setSize(L,ge,!1),s.aspect=be,s.fov=be<.9?24:40,s.updateProjectionMatrix();let He=r.particles.uniforms.uPixel;He&&(He.value=a.getPixelRatio())};ve();let Ve=new ResizeObserver(ve);Ve.observe(t);let Ut=(L,ge)=>{let be=t.getBoundingClientRect();l.x=(L-be.left)/be.width*2-1,l.y=-((ge-be.top)/be.height)*2+1,o.setFromCamera(l,s);let se=o.intersectObjects(r.hits,!1)[0]?.object.userData.station??null;if(se)return se;s.updateMatrixWorld();let tt=null,we=96,Ue=new R;for(let C of ki){if(Ue.set(C.x,1.6,C.z).project(s),Ue.z<-1||Ue.z>1)continue;let M=(Ue.x*.5+.5)*be.width+be.left,N=(-Ue.y*.5+.5)*be.height+be.top,j=Math.hypot(M-L,N-ge);j<we&&(we=j,tt=C.id)}return tt},Ne=()=>{y!=="free"&&_e(),f.radius=zt.clamp(f.radius*.72,4,90),me()},ut=L=>{let ge=Lu[L];Pe(ge.p,ge.t,L==="03"?2.1:1.7),h=L==="overview"?null:L,e.onSelect(h)},mt=L=>{L.pointerType!=="touch"&&(L.button!==0&&L.button!==2&&L.button!==1||(w=!0,O=0,B=L.clientX,G=L.clientY,t.setPointerCapture(L.pointerId)))},$e=L=>{if(L.pointerType==="touch")return;if(!w){let He=Ut(L.clientX,L.clientY),se=performance.now();He!==m?(m=He,S=se,_&&(_=null,e.onHover(null,0,0))):He&&_===He?e.onHover(He,L.clientX,L.clientY):He&&se-S>1e3&&(_=He,e.onHover(He,L.clientX,L.clientY));return}let ge=L.clientX-B,be=L.clientY-G;if(B=L.clientX,G=L.clientY,O+=Math.abs(ge)+Math.abs(be),O>3&&y!=="free"&&_e(),y==="free")if(L.buttons===2||L.buttons===4){s.updateMatrix();let He=new R().setFromMatrixColumn(s.matrix,0),se=new R().setFromMatrixColumn(s.matrix,1),tt=f.radius*.0014;u.addScaledVector(He,-ge*tt),u.addScaledVector(se,be*tt),u.y=zt.clamp(u.y,0,8),me()}else f.theta-=ge*.008,f.phi-=be*.006,me()},Kt=L=>{if(L.pointerType!=="touch"&&w&&(w=!1,O<5)){let ge=Ut(L.clientX,L.clientY);ge?ut(ge):Ne()}},Ht=L=>{L.preventDefault(),y!=="free"&&_e(),f.radius=zt.clamp(f.radius*Math.exp(L.deltaY*.0011),4,90)},yn=L=>L.preventDefault(),Et=L=>{if(L.touches.length===1){w=!0,O=0;let ge=L.touches[0];if(!ge)return;B=ge.clientX,G=ge.clientY}else if(L.touches.length===2){let ge=L.touches[0],be=L.touches[1];if(!ge||!be)return;P=Math.hypot(ge.clientX-be.clientX,ge.clientY-be.clientY),y!=="free"&&_e()}},ta=L=>{if(L.preventDefault(),L.touches.length===2){let se=L.touches[0],tt=L.touches[1];if(!se||!tt||P<=0)return;let we=Math.hypot(se.clientX-tt.clientX,se.clientY-tt.clientY);y!=="free"&&_e(),f.radius=zt.clamp(f.radius*(P/we),4,90),P=we;return}let ge=L.touches[0];if(!ge||!w)return;let be=ge.clientX-B,He=ge.clientY-G;B=ge.clientX,G=ge.clientY,O+=Math.abs(be)+Math.abs(He),O>4&&y!=="free"&&_e(),y==="free"&&(f.theta-=be*.009,f.phi-=He*.007,me())},Xt=L=>{if(!(L.touches.length>0)){if(O<8&&w){let ge=L.changedTouches[0];if(ge){let be=Ut(ge.clientX,ge.clientY);be?ut(be):Ne()}}w=!1,P=0}};t.addEventListener("pointerdown",mt),t.addEventListener("pointermove",$e),window.addEventListener("pointerup",Kt),t.addEventListener("wheel",Ht,{passive:!1}),t.addEventListener("contextmenu",yn),t.addEventListener("touchstart",Et,{passive:!0}),t.addEventListener("touchmove",ta,{passive:!1}),t.addEventListener("touchend",Xt);let An=L=>L*L*(3-2*L),Vn=(L,ge,be)=>{s.position.set(zt.lerp(L.p[0],ge.p[0],be),zt.lerp(L.p[1],ge.p[1],be),zt.lerp(L.p[2],ge.p[2],be)),u.set(zt.lerp(L.t[0],ge.t[0],be),zt.lerp(L.t[1],ge.t[1],be),zt.lerp(L.t[2],ge.t[2],be)),s.lookAt(u)},On=L=>{if(n)return;v=requestAnimationFrame(On);let ge=Math.min(.05,Math.max(0,(L-b)/1e3));b=L;let be=L/1e3;if(y==="intro"){g+=ge;let N=An(Math.min(1,g/x));Be(zt.lerp(-.06,0,N)),N>=1&&_e()}else if(y==="fly"){Y+=ge/ee;let N=An(Math.min(1,Y));s.position.lerpVectors(X,H,N),u.lerpVectors(V,ie,N),s.lookAt(u),Y>=1&&_e()}else if(y==="tour")if(ne+=ge,ne>=Te)_e();else{let N=0;for(let j=0;j<zp.length-1;j++){let W=zp[j],re=zp[j+1];if(!W||!re)break;if(ne<=N+W.d){Vn(W,re,An((ne-N)/W.d));break}N+=W.d}}else me();r.particles.uniforms.uTime&&(r.particles.uniforms.uTime.value=be);for(let N of r.motes){let j=ge*N.speed;N.u=Number.isFinite(N.u+j)?(N.u+j)%1:0,N.u<0&&(N.u+=1);let W=N.curve.points.length>1?N.curve.getPoint(Math.min(N.u,.999)):null;W&&N.sprite.position.set(W.x,.38+Math.sin(be*2+N.u*8)*.05,W.z)}r.confirmMat.opacity=r.confirmed?.45+Math.sin(be*3)*.28:.12,E>0?(E=Math.max(0,E-ge),r.holo.opacity=.35+Math.abs(Math.sin(be*5))*.6):r.holo.opacity=zt.damp(r.holo.opacity,.42,2,ge);for(let[N,j]of r.halos){let W=N===h||N===_?.95:0;j.opacity=zt.damp(j.opacity,W,5,ge)}for(let[N,j]of r.lights){let W=N===h?j.hot:j.base;j.light.intensity=zt.damp(j.light.intensity,W,3,ge)}let He=r.layouts[r.layoutIndex]??r.layouts[0];He&&r.islands.forEach((N,j)=>{let W=He[j];W&&(N.position.x=zt.damp(N.position.x,W[0],2.8,ge),N.position.z=zt.damp(N.position.z,W[1],2.8,ge))});let se=r.linePos,tt=0,we=0;for(let N=0;N<r.islands.length;N++)for(let j=N+1;j<r.islands.length;j++){let W=r.islands[N],re=r.islands[j];if(!W||!re)continue;Math.hypot(W.position.x-re.position.x,W.position.z-re.position.z)<1.25&&tt+6<=se.length&&(se[tt++]=W.position.x,se[tt++]=.05,se[tt++]=W.position.z,se[tt++]=re.position.x,se[tt++]=.05,se[tt++]=re.position.z,we++)}let Ue=r.lines.geometry.getAttribute("position");Ue.needsUpdate=!0,r.lines.geometry.setDrawRange(0,we*2);let C=s.position.distanceTo(r.mirrorPoint),M=h==="06"?.78:C<9?zt.clamp(1.2-C/9,0,.8):0;r.mirrorFade.opacity=zt.damp(r.mirrorFade.opacity,M,3,ge),r.reportMats.forEach((N,j)=>{let W=r.reportFocus===j;N.emissiveIntensity=zt.damp(N.emissiveIntensity,W?1.2:.55,4,ge)}),r.detail.visible=s.position.y<22,I+=ge,I>.09&&(I=0,ov(r.avatar,Math.sin(be*.7)),lv(r.ring,be),uv(r.table,be*.4),cv(r.wave,be)),a.render(i,s)};return v=requestAnimationFrame(On),e.onReady(),{goto:ut,tour:()=>{ne=0,y="tour",h=null,e.onSelect(null),e.onTour(!0)},stop:()=>_e(),setShell:L=>{A=L,r.shell.visible=A},nudge:()=>{r.layoutIndex=(r.layoutIndex+1)%r.layouts.length},confirmAvatar:()=>{r.confirmed=!0},pulseCampus:()=>{E=4},focusReport:L=>{r.reportFocus=L},dispose:()=>{n=!0,cancelAnimationFrame(v),Ve.disconnect(),t.removeEventListener("pointerdown",mt),t.removeEventListener("pointermove",$e),window.removeEventListener("pointerup",Kt),t.removeEventListener("wheel",Ht),t.removeEventListener("contextmenu",yn),t.removeEventListener("touchstart",Et),t.removeEventListener("touchmove",ta),t.removeEventListener("touchend",Xt),wT(),a.dispose(),a.forceContextLoss()}}}var zp,KT=Si(()=>{Cr();yd();Bp();dv();ZT();zp=[{p:[2,2.2,16],t:[8,1.2,24],d:3.4},{p:[12,1.85,19],t:[20,1.55,28],d:3.6},{p:[22,2.4,18],t:[34,1.4,31.5],d:3.8},{p:[38,1.75,26],t:[46,1.5,31],d:2.6},{p:[44.4,1.68,30.92],t:[56.2,1.5,31],d:4.4},{p:[58,2.6,22],t:[64,.9,30],d:3.4},{p:[68,4.2,20],t:[84,.5,30],d:3.2},{p:[78,1.85,40],t:[86.5,1.1,45.2],d:3.6},{p:[80,4.2,30],t:[86,.7,15],d:3},{p:[76,1.9,20],t:[85,.9,14.2],d:3.4},{p:[90,2.3,23],t:[99.5,1.65,30],d:3.4},{p:[103,2.1,20],t:[112,1.4,32],d:3.6},{p:[113,1.85,18],t:[120,1.15,24],d:3.2}]});var jT=ns(pb());var ea=ns(Pr(),1);var md=ns(Pr());var mb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pd=(...t)=>t.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();var bu=ns(Pr());var gb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var xb=(0,bu.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:i="",children:s,iconNode:r,...o},l)=>(0,bu.createElement)("svg",{ref:l,...gb,width:e,height:e,stroke:t,strokeWidth:a?Number(n)*24/Number(e):n,className:pd("lucide",i),...o},[...r.map(([u,f])=>(0,bu.createElement)(u,f)),...Array.isArray(s)?s:[s]]));var bo=(t,e)=>{let n=(0,md.forwardRef)(({className:a,...i},s)=>(0,md.createElement)(xb,{ref:s,iconNode:e,className:pd(`lucide-${mb(t)}`,a),...i}));return n.displayName=`${t}`,n};var Tu=bo("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);var Eu=bo("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var Au=bo("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);yd();var Fe=ns(wu(),1);function QT(){let t=(0,ea.useRef)(null),e=(0,ea.useRef)(null),[n,a]=(0,ea.useState)(!1),[i,s]=(0,ea.useState)(null),[r,o]=(0,ea.useState)(null),[l,u]=(0,ea.useState)(null),[f,p]=(0,ea.useState)(!1),[c,d]=(0,ea.useState)(!1),[x,y]=(0,ea.useState)(!1),[g,h]=(0,ea.useState)(!1);(0,ea.useEffect)(()=>{if(!t.current)return;let A=!1,v=null;return Promise.resolve().then(()=>(KT(),JT)).then(({mountExperience:b})=>{if(!(A||!t.current))try{v=b(t.current,{onReady:()=>{A||a(!0)},onError:I=>{A||s(I)},onSelect:I=>{A||(o(I),p(!1),y(!1))},onHover:(I,w,O)=>{A||u(I?{id:I,x:w,y:O}:null)},onTour:I=>{A||y(I)}}),e.current=v}catch(I){A||s(I instanceof Error?I.message:"\u7A7A\u95F4\u672A\u80FD\u751F\u6210")}}),()=>{A=!0,v?.dispose(),e.current=null}},[]);let m=ki.find(E=>E.id===r)??null,S=m?yb(m.id):null,_=E=>{if(!i){e.current?.goto(E);return}o(E==="overview"?null:E),p(!1)};return(0,Fe.jsxs)("div",{className:"zs",children:[i&&(0,Fe.jsx)("img",{className:"zs-static",src:"../assets/route/overview.webp",alt:"\u6893\u7B19\u56ED\u7A7A\u95F4\u52A8\u7EBF\u793A\u610F\u56FE"}),(0,Fe.jsx)("canvas",{hidden:!!i,ref:t,className:"zs-canvas","aria-label":"\u6893\u7B19\u56ED\u4E09\u7EF4\u52A8\u7EBF"}),(0,Fe.jsxs)("div",{className:"zs-ui",children:[(0,Fe.jsxs)("header",{className:"zs-title",children:[(0,Fe.jsx)("p",{className:"zs-kicker",children:"\u533B\u9662\u5185\u7684\u751F\u6210\u5F0F\u7FA4\u5C9B"}),(0,Fe.jsx)("h1",{children:"\u6893\u7B19\u56ED"}),(0,Fe.jsx)("p",{children:i?"\u70B9\u51FB\u4E0B\u65B9\u7AD9\u70B9\u67E5\u770B\u7A7A\u95F4\u8BF4\u660E\u3002":"\u70B9\u4E0B\u9762\u7684\u4E00\u7AD9\u5C31\u4F1A\u98DE\u8FC7\u53BB\u3002\u62D6\u62FD\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u6216\u70B9\u7A7A\u767D\u5904\u62C9\u8FD1\u3002"})]}),(0,Fe.jsxs)("div",{className:"zs-controls",role:"toolbar","aria-label":"\u89C6\u89D2",children:[(0,Fe.jsxs)("button",{type:"button",onClick:()=>_("overview"),children:[(0,Fe.jsx)(Eu,{}),"\u5168\u666F"]}),(0,Fe.jsxs)("button",{type:"button",disabled:!!i,onClick:()=>{x?e.current?.stop():e.current?.tour()},children:[(0,Fe.jsx)(Au,{}),x?"\u505C\u6B62\u6D4F\u89C8":"\u6CBF\u52A8\u7EBF\u6D4F\u89C8"]}),(0,Fe.jsxs)("button",{type:"button",disabled:!!i,"aria-pressed":c,onClick:()=>{let E=!c;d(E),e.current?.setShell(E)},children:[(0,Fe.jsx)(Tu,{}),c?"\u5256\u5207\u5168\u666F":"\u5B8C\u6574\u5916\u58F3"]})]}),(0,Fe.jsx)("nav",{className:"zs-route","aria-label":"\u52A8\u7EBF\u7AD9\u70B9",children:ki.map(E=>(0,Fe.jsx)("button",{type:"button","aria-pressed":E.id===r,onClick:()=>_(E.id),children:E.short},E.id))}),m&&S&&(0,Fe.jsxs)("aside",{className:"zs-panel","aria-live":"polite",children:[(0,Fe.jsxs)("p",{className:"zs-kicker",children:[m.id," \xB7 ",m.short]}),(0,Fe.jsx)("h2",{children:m.name}),(0,Fe.jsx)("p",{children:m.summary}),(0,Fe.jsxs)("p",{children:[(0,Fe.jsx)("strong",{children:"\u8BBE\u5907"}),m.devices]}),(0,Fe.jsxs)("p",{children:[(0,Fe.jsx)("strong",{children:"\u4F4D\u7F6E"}),m.why]}),f&&(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsxs)("p",{children:[(0,Fe.jsx)("strong",{children:"\u4F9D\u636E"}),m.basis]}),(0,Fe.jsxs)("p",{children:[(0,Fe.jsx)("strong",{children:"\u8FB9\u754C"}),m.limit]})]}),(0,Fe.jsxs)("div",{className:"zs-row",children:[(0,Fe.jsx)("button",{type:"button",onClick:()=>p(E=>!E),children:f?"\u6536\u8D77\u8BF4\u660E":"\u4F9D\u636E\u4E0E\u8FB9\u754C"}),!i&&m.id==="00"&&(0,Fe.jsx)("button",{type:"button",onClick:()=>e.current?.pulseCampus(),children:"\u70B9\u4EAE\u9662\u533A\u8F6E\u5ED3"}),!i&&m.id==="01"&&(0,Fe.jsx)("button",{type:"button",onClick:()=>{e.current?.confirmAvatar(),h(!0)},children:g?"\u5F62\u8C61\u5DF2\u786E\u8BA4":"\u786E\u8BA4\u521D\u59CB\u5F62\u8C61"}),!i&&m.id==="05B"&&(0,Fe.jsx)("button",{type:"button",onClick:()=>e.current?.nudge(),children:"\u8C03\u6574\u5C0F\u5C9B\u8DDD\u79BB"}),!i&&m.id==="07"&&["\u822A\u884C\u8DB3\u8FF9","\u5DF2\u786E\u8BA4\u8868\u8FBE","\u56E2\u961F\u4E0E\u4F9D\u636E"].map((E,A)=>(0,Fe.jsx)("button",{type:"button",onClick:()=>e.current?.focusReport(A),children:E},E))]}),(0,Fe.jsxs)("div",{className:"zs-row",children:[(0,Fe.jsx)("button",{type:"button",disabled:!S.prev,onClick:()=>S.prev&&_(S.prev),children:"\u4E0A\u4E00\u7AD9"}),S.choice?(0,Fe.jsxs)(Fe.Fragment,{children:[(0,Fe.jsx)("button",{type:"button",onClick:()=>_("05A"),children:"\u5148\u770B\u4E2A\u4EBA\u5C9B"}),(0,Fe.jsx)("button",{type:"button",onClick:()=>_("05B"),children:"\u5148\u770B\u5171\u521B"})]}):(0,Fe.jsx)("button",{type:"button",disabled:!S.next,onClick:()=>S.next&&_(S.next),children:"\u4E0B\u4E00\u7AD9"}),S.alt&&(0,Fe.jsx)("button",{type:"button",onClick:()=>S.alt&&_(S.alt),children:S.alt==="05A"?"\u53BB\u770B\u4E2A\u4EBA\u5C9B":"\u53BB\u770B\u5171\u521B"}),(0,Fe.jsx)("button",{type:"button",onClick:()=>_("overview"),children:"\u8FD4\u56DE\u5168\u666F"})]})]}),l&&(0,Fe.jsx)("div",{className:"zs-hover",style:{left:l.x,top:l.y},children:ki.find(E=>E.id===l.id)?.name}),(0,Fe.jsx)("p",{className:"zs-status",children:i?"\u5F53\u524D\u8BBE\u5907\u65E0\u6CD5\u52A0\u8F7D 3D\uFF0C\u5DF2\u5207\u6362\u4E3A\u52A8\u7EBF\u56FE\u3002":n?"\u5256\u5207\u5168\u666F \xB7 \u7A7A\u95F4\u5185\u6CA1\u6709\u4EBA\u7269":"\u6B63\u5728\u751F\u6210\u7A7A\u95F4"})]})]})}var $T=ns(wu());(0,jT.createRoot)(document.getElementById("root")).render((0,$T.jsx)(QT,{}));})();
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/box.js:
lucide-react/dist/esm/icons/compass.js:
lucide-react/dist/esm/icons/route.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
