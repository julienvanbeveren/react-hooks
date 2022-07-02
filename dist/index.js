"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react");exports.useDebounce=function(e,r,n){t.useEffect((()=>{const t=setTimeout((()=>{e()}),n);return()=>{clearTimeout(t)}}),[...r])},exports.useLocalStorage=function(e,r){const[n,o]=t.useState(function(t,e){const r=localStorage.getItem(t);if(r){try{const t=JSON.parse(r);if(t)return t}catch(t){}return r}return e}(e,r)),u=new Event("storage");return t.useEffect((()=>{window.addEventListener("storage",(()=>{const t=localStorage.getItem(e);if(t){try{const e=JSON.parse(t);if(e!=n)return void o(e)}catch(t){}if(t!=n)return void o(t)}return r}))}),[]),t.useEffect((()=>{localStorage.setItem(e,n),window.dispatchEvent(u)}),[n]),[n,o]},exports.usePersistentState=function(e,r){const[n,o]=t.useState(function(t,e){const r=localStorage.getItem(t);if(r){try{const t=JSON.parse(r);if(t)return t}catch(t){}return r}return e}(e,r));return t.useEffect((()=>{localStorage.setItem(e,n)}),[n]),[n,o]},exports.usePrevState=function(e){const[r,n]=t.useState(e),[o,u]=t.useState(void 0);return[r,o,function(t){u(r),n(t)}]},exports.useThrottle=function(e,r,n){const[o,u]=t.useState(!1);let s=t.useRef(null);const c=()=>{var t;s.current?(null===(t=s.current)||void 0===t||t.call(s),s.current=null,setTimeout(c,n)):u(!1)};t.useEffect((()=>{o?s.current=e:(u(!0),e(),setTimeout(c,n))}),[...r])};
