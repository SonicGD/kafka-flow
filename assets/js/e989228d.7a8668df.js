"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[894],{3905:(e,a,r)=>{r.d(a,{Zo:()=>c,kt:()=>k});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function d(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),p=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},c=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},i=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),i=p(r),k=n,m=i["".concat(o,".").concat(k)]||i[k]||f[k]||l;return r?t.createElement(m,s(s({ref:a},c),{},{components:r})):t.createElement(m,s({ref:a},c))}));function k(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=i;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d.mdxType="string"==typeof e?e:n,s[1]=d;for(var p=2;p<l;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}i.displayName="MDXCreateElement"},9229:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var t=r(7462),n=(r(7294),r(3905));const l={},s="IMessageHandler&lt;TMessage&gt; interface",d={unversionedId:"reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1/IMessageHandler-1",id:"reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1/IMessageHandler-1",title:"IMessageHandler&lt;TMessage&gt; interface",description:"Used to create a message handler",source:"@site/docs/reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1/IMessageHandler-1.md",sourceDirName:"reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1",slug:"/reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1/",permalink:"/kafkaflow/docs/reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1/",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1/IMessageHandler-1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMessageHandler interface",permalink:"/kafkaflow/docs/reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler/"},next:{title:"IMessageHandler&lt;TMessage&gt;.Handle method",permalink:"/kafkaflow/docs/reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1/Handle"}},o={},p=[{value:"Members",id:"members",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p};function f(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"imessagehandlertmessage-interface"},"IMessageHandler","<","TMessage",">"," interface"),(0,n.kt)("p",null,"Used to create a message handler"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IMessageHandler<in TMessage> : IMessageHandler\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TMessage"),(0,n.kt)("td",{parentName:"tr",align:null},"The message type")))),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/kafkaflow/docs/reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler-1/Handle"},"Handle"),"(\u2026)"),(0,n.kt)("td",{parentName:"tr",align:null},"the method that will be called when a ",(0,n.kt)("em",{parentName:"td"},"TMessage")," arrives")))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"interface\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.TypedHandler/KafkaFlow.TypedHandler/IMessageHandler/"},"IMessageHandler")),(0,n.kt)("li",{parentName:"ul"},"namespace\xa0",(0,n.kt)("a",{parentName:"li",href:"/kafkaflow/docs/reference/KafkaFlow.TypedHandler/"},"KafkaFlow.TypedHandler"))))}f.isMDXComponent=!0}}]);