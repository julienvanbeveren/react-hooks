"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(t,r,n){const[o,s]=e.useState(!1);let c=e.useRef(null);const u=()=>{var e;c.current?(null===(e=c.current)||void 0===e||e.call(c),c.current=null,setTimeout(u,n)):s(!1)};e.useEffect((()=>{o?c.current=t:(s(!0),t(),setTimeout(u,n))}),[...r])}exports.useClipboard=function(){return function(e){navigator.clipboard.writeText(e)}},exports.useDebounce=function(t,r,n){e.useEffect((()=>{const e=setTimeout((()=>{t()}),n);return()=>{clearTimeout(e)}}),[...r])},exports.useFetch=function(t,r){const[n,o]=e.useState(!0),[s,c]=e.useState(),[u,i]=e.useState(void 0);return e.useEffect((()=>{(async()=>{try{const e=await fetch(t,r);if(!e.ok)throw new Error(e.status.toString());const n=await e.json();i(n)}catch(e){c(e)}o(!1)})()}),[]),{loading:n,error:s,data:u}},exports.useInitialRender=function(t,r){const n=e.useRef(!0);e.useEffect((()=>{n.current&&(t(),n.current=!1)}),[...r])},exports.useLocalStorage=function(t,r){const[n,o]=e.useState(function(e,t){const r=localStorage.getItem(e);if(r){try{const e=JSON.parse(r);if(e)return e}catch(e){}return r}return t}(t,r)),s=new Event("storage");return e.useEffect((()=>{window.addEventListener("storage",(()=>{const e=localStorage.getItem(t);if(e){try{const t=JSON.parse(e);if(t!=n)return void o(t)}catch(e){}if(e!=n)return void o(e)}return r}))}),[]),e.useEffect((()=>{localStorage.setItem(t,n),window.dispatchEvent(s)}),[n]),[n,o]},exports.useNoInitialRender=function(t,r){const n=e.useRef(!0);e.useEffect((()=>{n.current?n.current=!1:t()}),[...r])},exports.usePersistentState=function(t,r){const[n,o]=e.useState(function(e,t){const r=localStorage.getItem(e);if(r){try{const e=JSON.parse(r);if(e)return e}catch(e){}return r}return t}(t,r));return e.useEffect((()=>{localStorage.setItem(t,n)}),[n]),[n,o]},exports.usePrevState=function(t){const[r,n]=e.useState(t),[o,s]=e.useState(void 0);return[r,o,function(e){s(r),n(e)}]},exports.useScreen=function(r){const[n,o]=e.useState([window.innerWidth,window.innerHeight]),[s,c]=e.useState("");return e.useEffect((()=>(window.addEventListener("resize",(e=>{o([window.innerWidth,window.innerHeight])})),()=>{window.removeEventListener("resize",(e=>{}))})),[]),t((()=>{const e=null==r?void 0:r.sort(((e,t)=>{let r=0,n=0;return Object.keys(e).forEach((e=>r++)),Object.keys(t).forEach((e=>n++)),n-r}));null==e||e.forEach((e=>{let t=e.name;delete e.name;for(const r of Object.keys(e)){switch(r){case"maxWidth":if(n[0]>e[r])return;break;case"minWidth":if(n[0]<e[r])return;break;case"maxHeight":if(n[1]>e[r])return;break;case"minHeight":if(n[1]<e[r])return}c(t)}}))}),[n],100),{width:n[0],height:n[1],screen:s}},exports.useScript=function(t){e.useEffect((()=>{const e=document.createElement("script");return e.src=t,e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[])},exports.useThrottle=t;
