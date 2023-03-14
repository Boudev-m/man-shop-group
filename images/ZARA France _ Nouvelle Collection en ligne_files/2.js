(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[2],{1024:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(1)),o=a(n(15));n(1342);const r={ROW:"row",COLUMN:"column"},c={S:"s",M:"m",L:"l",None:"none"},s=e=>{let{className:t,slot:n,children:a,renderOpts:{contentDirection:s=r.ROW,parentWithFixedPosition:i=!1,size:d=c.S,withDivider:u=!0}={}}=e;return l.default.createElement("div",{className:(0,o.default)("container-docked",{"container-docked---parent-fixed":i})},n,l.default.createElement("div",{className:(0,o.default)(t,"container-docked__container","container-docked__container--".concat(d))},l.default.createElement("div",{className:(0,o.default)("container-docked__divider",{"container-docked__divider---hidden":!u})}),l.default.createElement("div",{className:"container-docked__content container-docked__content--".concat(s)},a)))};s.Sizes=c,s.ContentDirections=r;var i=s;t.default=i},1342:function(e,t,n){},1343:function(e,t,n){},1344:function(e,t,n){},158:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MODAL_CONTAINER_CLASSNAME=void 0;var l=a(n(18)),o=a(n(2)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(1)),c=a(n(15)),s=a(n(26)),i=n(7),d=a(n(42)),u=a(n(516));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(1344);var _=function(e){return r.default.createElement("svg",e,r.default.createElement("path",{d:"M12 12.707l6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707z"}))};_.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"inherit",stroke:"inherit"};t.MODAL_CONTAINER_CLASSNAME="modal__container";const O={base:"base",alert:"alert"},v={s:"s",m:"m",l:"l"},b=(0,r.lazy)(()=>n.e(11).then(n.t.bind(null,1034,7))),E={isOpen:!0,bodyOpenClassName:null,htmlOpenClassName:null,ariaHideApp:!0,className:" ",portalClassName:"modal",overlayClassName:"modal__overlay"},y=e=>{let{children:t}=e;const n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const e=e=>{if(!(n.current.scrollHeight<=n.current.clientHeight))switch(e.key){case"ArrowDown":case"PageDown":case"ArrowUp":case"PageUp":e.target===n.current.parentElement.parentElement&&n.current.focus()}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[]),r.default.createElement("div",{className:"modal__body",ref:n,tabIndex:"-1"},t)},N=e=>{let{actions:t,type:n,size:a,slot:l}=e;const{isMobile:o}=(0,i.useDevice)();return t?r.default.createElement(u.default,{className:"modal__actions",actions:t,renderOpts:{withDivider:o&&n!==O.alert,contentDirection:o&&n!==O.alert?u.default.ContentDirections.COLUMN:u.default.ContentDirections.ROW,parentWithFixedPosition:!0,size:a},slot:l}):null};function h(e){let{title:t,children:n,onClose:a=(()=>!1),hideCloseButton:o=!1,qaCloseAction:u,className:f,portalClassName:m,onMouseEnter:h,onMouseLeave:w,size:C=v.s,type:D=O.base,actions:g=null,actionsSlot:k=null}=e;const{getText:L}=(0,i.useI18n)(),P=p(p({},E),{},{portalClassName:(0,c.default)(E.portalClassName,m)});return r.default.createElement(r.Suspense,{fallback:r.default.createElement("div",null)},r.default.createElement(b,(0,l.default)({},P,{shouldCloseOnOverlayClick:D!==O.alert,bodyOpenClassName:"disable-scroll",onRequestClose:a,appElement:document.getElementById("theme-app"),parentSelector:()=>document.getElementById("theme-modal-container"),className:(0,c.default)("modal--type-".concat(D),{["modal--size-".concat(C)]:!!C,"modal--no-actions":!g&&D===O.base})}),r.default.createElement("div",{className:(0,c.default)("modal__container",f),onMouseEnter:h,onMouseLeave:w},r.default.createElement("div",{className:"modal__header"},!o&&D===O.base&&r.default.createElement("button",{type:"button",className:"modal__close-button",onClick:a,"aria-label":L("shared.buttons","close")},r.default.createElement(_,{className:"modal__close-icon"})),t&&r.default.createElement("h1",{className:"modal__title"},t)),r.default.createElement(y,null,n),r.default.createElement(N,{type:D,size:C,actions:g||(D===O.alert?r.default.createElement(d.default,{className:"modal__action-base-button",onClick:a},r.default.createElement(s.default,{bundle:"shared.common",name:"alert-modal-default-button"})):null),slot:k}))))}h.types=O,h.sizes=v;var w=h;t.default=w},516:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(1)),o=a(n(15)),r=a(n(1024));n(1343);const c=r.default.ContentDirections,s=r.default.Sizes,i=e=>{let{className:t,actions:n,renderOpts:a={},slot:s}=e;const{contentDirection:i=c.ROW}=a;return l.default.createElement(r.default,{className:(0,o.default)(t,"button-docked"),slot:s,renderOpts:a},l.default.Children.map(n,e=>l.default.cloneElement(e,{className:(0,o.default)("button-docked__action",{"button-docked__action--inline":i===c.ROW},e.props.className)})))};i.Sizes=s,i.ContentDirections=c;var d=i;t.default=d}}]);