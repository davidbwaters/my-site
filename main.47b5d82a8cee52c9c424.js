(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return a(e,arguments,f(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}function a(e,t,n){return(a=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&s(o,n.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("dbw-hero",function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,e);var t,n,u,a,l,p=(t=d,n=c(),function(){var e,r=f(t);if(n){var o=f(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)});function d(){return r(this,d),p.apply(this,arguments)}return u=d,(a=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){var e=this.querySelector(".inner"),t=document.createElement("div");t.classList.add("c-hero__inner"),t.appendChild(e),this.classList.add("c-hero"),this.appendChild(t)}}])&&o(u.prototype,a),l&&o(u,l),d}(u(HTMLElement)))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);
/*! (c) Andrea Giammarchi - ISC */
var r={};try{r.WeakMap=WeakMap}catch(e){r.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=i.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(u,this)}function u(e){this.set(e[0],e[1])}}(Math.random(),Object)}var o=r.WeakMap;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u="object"!==("undefined"==typeof document?"undefined":i(document)),a=function(e){var t,n=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),r=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(n||r){var i={},c=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return i[t]||(i[t]=e)};if(r)a=c;else{var f=new o;a=function(e){return f.get(e)||function(e,t){return f.set(e,t),t}(e,c(e))}}}else u=!0;return s(e)},c=s;function s(e){return u?e:a(e)}var f,l=function(e){for(var t=arguments.length,n=[c(e)],r=1;r<t;)n.push(arguments[r++]);return n},p="-"+Math.random().toFixed(6)+"%",d=!1;try{"content"in(f=document.createElement("template"))&&(f.innerHTML='<p tabindex="'+p+'"></p>',f.content.childNodes[0].getAttribute("tabindex")==p)||(p="_dt: "+p.slice(1,-1)+";",d=!0)}catch(e){}var h="\x3c!--"+p+"--\x3e",v=/^(?:style|textarea)$/i,y=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,m=function(e){return e.join(h).replace(k,N).replace(O,A)},b=" \\f\\n\\r\\t",g="[^"+b+"\\/>\"'=]+",w="["+b+"]+"+g,x="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",S="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+g.replace("\\/","")+"))?)",O=new RegExp(x+w+S+"+)(["+b+"]*/?>)","g"),k=new RegExp(x+w+S+"*)(["+b+"]*/>)","g"),j=new RegExp("("+w+"\\s*=\\s*)(['\"]?)"+h+"\\2","gi");function A(e,t,n,r){return"<"+t+n.replace(j,E)+r}function E(e,t,n){return t+(n||'"')+p+(n||'"')}function N(e,t,n){return y.test(t)?e:"<"+t+n+"></"+t+">"}var C=Array.isArray,_=[],T=_.indexOf,M=_.slice,P=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},L=function(e,t){return 111===e.nodeType?1/t<0?t?(r=(n=e).firstChild,o=n.lastChild,(i=document.createRange()).setStartAfter(r),i.setEndAfter(o),i.deleteContents(),r):e.lastChild:t?e.valueOf():e.firstChild:e;var n,r,o,i},R=function(e){var t=e.childNodes,n=t.length;if(n<2)return t[0];var r=M.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var o=0;o<n;)e.appendChild(r[o++]);return e}}},I=function(e){var t="content"in r("template")?function(e){var t=r("template");return t.innerHTML=e,t.content}:function(e){var t=r("fragment"),o=r("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",i=o.querySelectorAll(u)}else o.innerHTML=e,i=o.childNodes;return n(t,i),t};return function(e,n){return("svg"===n?o:t)(e)};function n(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function r(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function o(e){var t=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",n(t,o.firstChild.childNodes),t}}(document),F=function(e,t,n,r,o,i){for(var u=("selectedIndex"in t),a=u;r<o;){var c=e(n[r],1);if(t.insertBefore(c,i),u&&a&&c.selected){a=!a;var s=t.selectedIndex;t.selectedIndex=s<0?r:T.call(t.querySelectorAll("option"),c)}r++}},D=function(e,t){return e==t},H=function(e){return e},W=function(e,t,n,r,o,i,u){var a=i-o;if(a<1)return-1;for(;n-t>=a;){for(var c=t,s=o;c<n&&s<i&&u(e[c],r[s]);)c++,s++;if(s===i)return t;t=c+1}return-1},z=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},$=function(e,t,n,r){for(;n<r;)G(e(t[n++],-1))},q=function(e,t,n){for(var r=1,o=t;r<o;){var i=(r+o)/2>>>0;n<e[i]?o=i:r=i+1}return r},B=function(e,t,n,r,o,i,u,a,c,s,f,l,p){!function(e,t,n,r,o,i,u,a,c){for(var s=[],f=e.length,l=u,p=0;p<f;)switch(e[p++]){case 0:o++,l++;break;case 1:s.push(r[o]),F(t,n,r,o++,o,l<a?t(i[l],0):c);break;case-1:l++}for(p=0;p<f;)switch(e[p++]){case 0:u++;break;case-1:-1<s.indexOf(i[u])?u++:$(t,i,u++,u)}}(function(e,t,n,r,o,i,u){var a,c,s,f,l,p,d,h=n+i,v=[];e:for(a=0;a<=h;a++){if(a>50)return null;for(d=a-1,l=a?v[a-1]:[0,0],p=v[a]=[],c=-a;c<=a;c+=2){for(s=(f=c===-a||c!==a&&l[d+c-1]<l[d+c+1]?l[d+c+1]:l[d+c-1]+1)-c;f<i&&s<n&&u(r[o+f],e[t+s]);)f++,s++;if(f===i&&s===n)break e;p[a+c]=f}}var y=Array(a/2+h/2),m=y.length-1;for(a=v.length-1;a>=0;a--){for(;f>0&&s>0&&u(r[o+f-1],e[t+s-1]);)y[m--]=0,f--,s--;if(!a)break;d=a-1,l=a?v[a-1]:[0,0],(c=f-s)===-a||c!==a&&l[d+c-1]<l[d+c+1]?(s--,y[m--]=1):(f--,y[m--]=-1)}return y}(n,r,i,u,a,s,l)||function(e,t,n,r,o,i,u,a){var c=0,s=r<a?r:a,f=Array(s++),l=Array(s);l[0]=-1;for(var p=1;p<s;p++)l[p]=u;for(var d=o.slice(i,u),h=t;h<n;h++){var v=d.indexOf(e[h]);if(-1<v){var y=v+i;-1<(c=q(l,s,y))&&(l[c]=y,f[c]={newi:h,oldi:y,prev:f[c-1]})}}for(c=--s,--u;l[c]>u;)--c;s=a+r-c;var m=Array(s),b=f[c];for(--n;b;){for(var g=b,w=g.newi,x=g.oldi;n>w;)m[--s]=1,--n;for(;u>x;)m[--s]=-1,--u;m[--s]=0,--n,--u,b=b.prev}for(;n>=t;)m[--s]=1,--n;for(;u>=i;)m[--s]=-1,--u;return m}(n,r,o,i,u,a,c,s),e,t,n,r,u,a,f,p)},G=function(e){return(e.remove||V).call(e)};function V(){var e=this.parentNode;e&&e.removeChild(this)}
/*! (c) 2018 Andrea Giammarchi (ISC) */var Z=function(e,t,n,r){r||(r={});for(var o=r.compare||D,i=r.node||H,u=null==r.before?null:i(r.before,0),a=t.length,c=a,s=0,f=n.length,l=0;s<c&&l<f&&o(t[s],n[l]);)s++,l++;for(;s<c&&l<f&&o(t[c-1],n[f-1]);)c--,f--;var p=s===c,d=l===f;if(p&&d)return n;if(p&&l<f)return F(i,e,n,l,f,z(i,t,s,a,u)),n;if(d&&s<c)return $(i,t,s,c),n;var h=c-s,v=f-l,y=-1;if(h<v){if(-1<(y=W(n,l,f,t,s,c,o)))return F(i,e,n,l,y,i(t[s],0)),F(i,e,n,y+h,f,z(i,t,c,a,u)),n}else if(v<h&&-1<(y=W(t,s,c,n,l,f,o)))return $(i,t,s,y),$(i,t,y+v,c),n;return h<2||v<2?(F(i,e,n,l,f,i(t[s],0)),$(i,t,s,c),n):h===v&&function(e,t,n,r,o,i){for(;r<o&&i(n[r],e[t-1]);)r++,t--;return 0===t}(n,f,t,s,c,o)?(F(i,e,n,l,f,z(i,t,c,a,u)),n):(B(i,e,n,l,f,v,t,s,c,h,a,o,u),n)},J=function(e,t,n,r,o){var i="importNode"in e,u=e.createDocumentFragment();return u.appendChild(e.createTextNode("g")),u.appendChild(e.createTextNode("")),(i?e.importNode(u,!0):u.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],i=o.length,u=0;n&&u<i;u++)r.appendChild(e(o[u],n));return r}:i?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),Q="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},U=d?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function X(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function K(e,t,n,r){for(var o=e.attributes,i=[],u=[],a=U(o,n),c=a.length,s=0;s<c;){var f,l=a[s++],v=l.value===p;if(v||1<(f=l.value.split(h)).length){var y=l.name;if(i.indexOf(y)<0){i.push(y);var m=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+y+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),b=o[m]||o[m.toLowerCase()];if(v)t.push(ee(b,r,m,null));else{for(var g=f.length-2;g--;)n.shift();t.push(ee(b,r,m,f))}}u.push(l)}}s=0;for(var w=(0<(c=u.length)&&d&&!("ownerSVGElement"in e));s<c;){var x=u[s++];w&&(x.value=""),e.removeAttribute(x.name)}var S=e.nodeName;if(/^script$/i.test(S)){var O=document.createElement(S);for(c=o.length,s=0;s<c;)O.setAttributeNode(o[s++].cloneNode(!0));O.textContent=e.textContent,e.parentNode.replaceChild(O,e)}}function Y(e,t){return{type:"any",node:e,path:t}}function ee(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function te(e,t){return{type:"text",node:e,path:t}}var ne=function(e){var t=ue,n=ae;return function(r){return t!==r&&(n=ie(e,t=r)),n.apply(null,arguments)}},re=P(new o);function oe(e,t){var n=(e.convert||m)(t),r=e.transform;r&&(n=r(n));var o=I(n,e.type);ae(o);var i=[];return function e(t,n,r,o){for(var i=t.childNodes,u=i.length,a=0;a<u;){var c=i[a];switch(c.nodeType){case 1:var s=o.concat(a);K(c,n,r,s),e(c,n,r,s);break;case 8:var f=c.textContent;if(f===p)r.shift(),n.push(v.test(t.nodeName)?te(t,o):Y(c,o.concat(a)));else switch(f.slice(0,2)){case"/*":if("*/"!==f.slice(-2))break;case"👻":t.removeChild(c),a--,u--}break;case 3:v.test(t.nodeName)&&Q.call(c.textContent)===h&&(r.shift(),n.push(te(t,o)))}a++}}(o,i,t.slice(0),[]),{content:o,updates:function(n){for(var r=[],o=i.length,u=0,a=0;u<o;){var c=i[u++],s=X(n,c.path);switch(c.type){case"any":r.push({fn:e.any(s,[]),sparse:!1});break;case"attr":var f=c.sparse,l=e.attribute(s,c.name,c.node);null===f?r.push({fn:l,sparse:!1}):(a+=f.length-2,r.push({fn:l,sparse:!0,values:f}));break;case"text":r.push({fn:e.text(s),sparse:!1}),s.textContent=""}}return o+=a,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var i=1,u=1;i<e;){var a=r[i-u];if(a.sparse){var c=a.values,s=c[0],f=1,l=c.length;for(u+=l-2;f<l;)s+=arguments[i++]+c[f++];a.fn(s)}else a.fn(arguments[i++])}return n}}}}function ie(e,t){var n=re.get(t)||re.set(t,oe(e,t));return n.updates(J.call(document,n.content,!0))}var ue=[];function ae(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===Q.call(r.textContent).length&&e.removeChild(r)}}function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*! (c) Andrea Giammarchi - ISC */var se=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var i,u;return function(a){var c,s,f,l;switch(ce(a)){case"object":if(a){if("object"===i){if(!o&&u!==a)for(s in u)s in a||(r[s]="")}else o?r.value="":r.cssText="";for(s in c=o?{}:r,a)f="number"!=typeof(l=a[s])||e.test(s)?l:l+"px",!o&&/^--/.test(s)?c.setProperty(s,f):c[s]=f;i="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(u=c):u=a;break}default:u!=a&&(i="string",u=a,o?r.value=a||"":r.cssText=a||"")}}}}(),fe=function(e,t){var n,r=!0,o=document.createAttributeNS(null,t);return function(t){n!==t&&(null==(n=t)?r||(e.removeAttributeNodeNS(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}},le=function(e,t){return function(n){e[t]=n}};function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var de=/^(?:form|list)$/i,he=function(e,t){return e.ownerDocument.createTextNode(t)};function ve(e){return this.type=e,ne(this)}function ye(e){return e(this)}function me(e){return function(e){if(Array.isArray(e))return be(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return be(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}ve.prototype={attribute:function(e,t,n){var r,o="svg"===this.type;switch(t){case"class":if(o)return fe(e,t);t="className";case"props":return le(e,t);case"aria":return function(e){return function(t){for(var n in t)e.setAttribute("role"===n?n:"aria-".concat(n),t[n])}}(e);case"data":return r=e.dataset,function(e){for(var t in e)r[t]=e[t]};case"style":return se(e,n,o);case"ref":return function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e);default:return"."===t.slice(0,1)?le(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var o=C(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}}(e,t):!(t in e)||o||de.test(t)?fe(e,t):function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}}(e,t)}},any:function(e,t){var n,r={node:L,before:e},o=this.type,i=!1;return function u(a){switch(pe(a)){case"string":case"number":case"boolean":i?n!==a&&(n=a,t[0].textContent=a):(i=!0,n=a,t=Z(e.parentNode,t,[he(e,a)],r));break;case"function":u(a(e));break;case"object":case"undefined":if(null==a){i=!1,t=Z(e.parentNode,t,[],r);break}default:if(i=!1,n=a,C(a))if(0===a.length)t.length&&(t=Z(e.parentNode,t,[],r));else switch(pe(a[0])){case"string":case"number":case"boolean":u(String(a));break;case"function":u(a.map(ye,e));break;case"object":C(a[0])&&(a=a.concat.apply([],a));default:t=Z(e.parentNode,t,a,r)}else"ELEMENT_NODE"in a?t=Z(e.parentNode,t,11===a.nodeType?M.call(a.childNodes):[a],r):"text"in a?u(String(a.text)):"any"in a?u(a.any):"html"in a?t=Z(e.parentNode,t,M.call(I([].concat(a.html).join(""),o).childNodes),r):"length"in a&&u(M.call(a))}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=pe(r);"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(M.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var ge=Object.create,we=Object.freeze,xe=(Object.keys,ve.prototype,P(new o)),Se=function(e){return{html:ke("html",e),svg:ke("svg",e),render:function(t,n){var r="function"==typeof n?n():n,o=xe.get(t)||xe.set(t,Oe()),i=r instanceof Ee?je(e,o,r):r;return i!==o.wire&&(o.wire=i,t.textContent="",t.appendChild(i.valueOf())),t}}},Oe=function(){return{stack:[],entry:null,wire:null}},ke=function(e,t){var n=P(new o);return r.for=function(e,o){var i,u=n.get(e)||n.set(e,ge(null));return u[o]||(u[o]=(i=Oe(),function(){return je(t,i,r.apply(null,arguments))}))},r.node=function(){return je(t,Oe(),r.apply(null,arguments)).valueOf()},r;function r(){return new Ee(e,l.apply(null,arguments))}},je=function(e,t,n){var r,o=n.type,i=n.template,u=n.values,a=u.length;Ae(e,t,u,a);var c=t.entry;if(c&&c.template===i&&c.type===o)(r=c).tag.apply(r,[i].concat(me(u)));else{var s=new e(o);t.entry=c={type:o,template:i,tag:s,wire:R(s.apply(void 0,[i].concat(me(u))))}}return c.wire},Ae=function e(t,n,r,o){for(var i=n.stack,u=0;u<o;u++){var a=r[u];a instanceof Ne?r[u]=je(t,i[u]||(i[u]=Oe()),a):C(a)?e(t,i[u]||(i[u]=Oe()),a,a.length):i[u]=null}o<i.length&&i.splice(o)};function Ee(e,t){this.type=e,this.template=t.shift(),this.values=t}we(Ee);var Ne=Ee,Ce=Se(ve),_e=Ce.render,Te=Ce.html;Ce.svg;function Me(e){return(Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(){var e=Re(['\n                <a\n                  class="c-header__link"\n                  href=',"\n                  >","\n                </a>\n              "]);return Pe=function(){return e},e}function Le(){var e=Re(['\n\n        <img\n          class="c-header__logo"\n          src=',"\n        />\n        ",'\n        <nav class="c-header__nav">\n          ',"\n        </nav>\n      "]);return Le=function(){return e},e}function Re(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function Ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fe(e,t){return!t||"object"!==Me(t)&&"function"!=typeof t?De(e):t}function De(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function He(e){var t="function"==typeof Map?new Map:void 0;return(He=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return We(e,arguments,qe(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),$e(r,e)})(e)}function We(e,t,n){return(We=ze()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&$e(o,n.prototype),o}).apply(null,arguments)}function ze(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function $e(e,t){return($e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qe(e){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("dbw-header",function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$e(e,t)}(a,e);var t,n,r,o,i,u=(t=a,n=ze(),function(){var e,r=qe(t);if(n){var o=qe(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Fe(this,e)});function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=u.call(this)).render=_e.bind(null,De(e),e.render.bind(De(e))),e}return r=a,(o=[{key:"connectedCallback",value:function(){this.state={logo:this.getAttribute("logo"),items:this.getAttribute("items").replace(/ /g,"").replace(/\n/g,"").split(",").map((function(e){return e.replace(":",",").replace(/\'/g,"").split(",")}))},this.render()}},{key:"render",value:function(){return console.log(this.state.items),this.classList.add("c-header"),Te(Le(),this.state.logo,this.innerText,this.state.items.map((function(e){return Te(Pe(),e[1],e[0])})))}}])&&Ie(r.prototype,o),i&&Ie(r,i),a}(He(HTMLElement)));n(0);var Be="undefined"!=typeof navigator&&"undefined"!=typeof window;if(Be&&"undefined"!=typeof nw)try{nw.Window.get()}catch(e){Be=!1}var Ge=!Be,Ve=Be?navigator.userAgent:void 0;function Ze(e,t){var n=window.matchMedia(e);t(n.matches);var r=function(){return t(n.matches)};return n.addListener(r),function(){return n.removeListener(r)}}var Je={gui:Be,terminal:Ge,registerQuery:Ze};Je.node="undefined"!=typeof process&&!!process.versions&&!!process.versions.node,Je.pwa=Je.gui&&window.matchMedia("(display-mode: standalone)").matches&&null!==document.head.querySelector('[rel="manifest"]'),Je.uwp="undefined"!=typeof Windows&&"undefined"!=typeof MSApp,Je.nwjs=!(!Je.node||!process.versions.nw),Je.electron=!(!Je.node||!process.versions.electron),Je.cordova=!(!Je.gui||!window.cordova),Je.packaged=Je.uwp||Je.nwjs||Je.electron||Je.cordova,Je.web=!Je.node&&!Je.packaged,Je.browser=Je.web,Je.website=Je.web&&!Je.pwa,Je.worker=!Je.gui&&"undefined"!=typeof self&&void 0!==self.importScripts,Je.serviceWorker=Je.worker&&!!navigator.serviceWorker.controller||!1;Je.android=!!Je.gui&&Ve.includes("Android"),Je.chromeos=!!Je.gui&&Ve.includes("CrOS"),Je.tizen=!!Je.gui&&Ve.includes("Tizen"),Je.ios=Je.gui&&/iPad|iPhone|iPod/.test(Ve)&&!window.MSStream||!1,Je.linuxBased=Je.android||Je.tizen,Je.windows=Je.node?"win32"===process.platform:Ve.includes("Windows"),Je.macos=Je.node?"darwin"===process.platform:Ve.includes("Macintosh"),Je.linux=Je.node?"linux"===process.platform:Ve.includes("Linux")&&!Je.linuxBased&&!Je.macos;Je.edgeHtml=Je.gui&&Ve.includes("Edge/"),Je.edgeChromium=Je.gui&&Ve.includes("Edg/"),Je.edgeAndroid=Je.gui&&Ve.includes("EdgA/"),Je.edgeIos=Je.gui&&Ve.includes("EdgiOS/"),Je.chromeIos=Je.gui&&Ve.includes("CriOS/"),Je.firefoxIos=Je.gui&&Ve.includes("FxiOS/"),Je.edge=Je.edgeHtml||Je.edgeChromium||Je.edgeAndroid||Je.edgeIos,Je.samsungBrowser=Je.gui&&Ve.includes("SamsungBrowser/"),Je.opera=Je.gui&&(Ve.includes("Opera")||Ve.includes("OPR/")),Je.firefox=Je.gui&&(Ve.includes("Firefox")||Je.firefoxIos),Je.chrome=Je.gui&&(Ve.includes("Chrome")||Je.chromeIos)&&!Je.edge&&!Je.opera&&!Je.samsungBrowser,Je.safari=Je.gui&&Ve.includes("Safari")&&!Je.chrome&&!Je.edge&&!Je.firefox&&!Je.opera||Je.edgeIos||Je.chromeIos||Je.firefoxIos,Je.ie=Je.trident=Je.gui&&Ve.includes("Trident"),Je.blink=Je.chrome&&!Je.chromeIos||Je.edgeChromium||Je.edgeAndroid||Je.samsungBrowser,Je.webkit=Je.blink||Je.safari,Je.gecko=Je.firefox&&!Je.firefoxIos&&!Je.webkit&&!Je.safari;var Qe={};Je.on=function(e,t){Qe[e]=Qe[e]||new Set,Qe[e].add(t)},Je.off=Je.removeListener=function(e,t){Qe[e]&&Qe[e].delete(t)};var Ue=Je.emit=function(e,t){Qe[e]&&Qe[e].forEach((function(e){return e(t)}))};function Xe(e,t){return Je[e]!==t&&(Je[e]=t,Ue(e,t),!0)}if(Je.gui){Je.pixelRatio=parseFloat(window.devicePixelRatio.toFixed(2)),Je.gameconsole=Ve.includes("Xbox")||Ve.includes("PlayStation");var Ke=0;if(window.addEventListener("gamepadconnected",(function(e){return Ke++})),window.addEventListener("gamepaddisconnected",(function(e){return Ke--})),Je.gameconsole)Je.gamepad=!0,Je.mouse=!0,Je.touch=!1,Je.tv=!0,Je.battery=!1,Je.phone=Je.tablet=Je.hybrid=Je.laptop=Je.desktop=!1,Je.formfactor="gameconsole";else{var Ye=function(){Xe("tv","tv"===Je.formfactor),Xe("phone","phone"===Je.formfactor),Xe("tablet","tablet"===Je.formfactor),Xe("hybrid","hybrid"===Je.formfactor),Xe("laptop","laptop"===Je.formfactor),Xe("desktop","desktop"===Je.formfactor)},et=function(){var e=Math.min(window.screen.width,window.screen.height);return Je.tv?"tv":Je.touch&&e<600?"phone":Je.touch&&!Je.mouse?"tablet":Je.touch&&Je.mouse?"hybrid":Je.battery?"laptop":"desktop"};Je.touch=navigator.maxTouchPoints>0,Je.tv=Ve.includes("TV"),Ke=navigator.getGamepads?Array.from(navigator.getGamepads()).filter((function(e){return null!=e})).length:0,Je.gamepad=Ke>0,Ze("(orientation: portrait)",(function(e){Je.portrait=e,Je.landscape=!e,Je.orientation=e?"portrait":"landscape",Ue("portrait",Je.portrait),Ue("landscape",Je.landscape),Ue("orientation",Je.orientation)})),Ze("(any-pointer: coarse)",(function(e){Xe("touch",e),Xe("formfactor",et())&&Ye()})),Ze("(hover: hover)",(function(e){Xe("mouse",e),Xe("input",e?"mouse":"touch"),Xe("formfactor",et())&&Ye()}))}}Je.csp=Je.uwp||!1,Je.nwjs?Je.dev="sdk"===process.versions["nw-flavor"]:Je.electron?Je.dev=process.execPath.replace(/\\/g,"/").includes("node_modules/electron/"):Je.uwp?Je.dev=Windows.ApplicationModel.Package.current.isDevelopmentMode:Je.node?Je.dev=!1:Je.dev=void 0;function tt(e){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function nt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ot(e,t){return!t||"object"!==tt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function it(e){var t="function"==typeof Map?new Map:void 0;return(it=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return ut(e,arguments,st(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),ct(r,e)})(e)}function ut(e,t,n){return(ut=at()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&ct(o,n.prototype),o}).apply(null,arguments)}function at(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ct(e,t){return(ct=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function st(e){return(st=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("dbw-video-bg",function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ct(e,t)}(a,e);var t,n,r,o,i,u=(t=a,n=at(),function(){var e,r=st(t);if(n){var o=st(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return ot(this,e)});function a(){return nt(this,a),u.apply(this,arguments)}return r=a,(o=[{key:"connectedCallback",value:function(){this.state={},this.render()}},{key:"render",value:function(){var e=this.querySelector("video");this.classList.add("c-video-bg"),e.classList.add("c-video-bg__video"),e.setAttribute("autoplay",""),e.setAttribute("muted",""),e.setAttribute("loop",""),this.hasAttribute("opaque")&&(this.style.opacity=".5"),this.hasAttribute("blur")&&(e.style.filter="blur(3px)"),this.hasAttribute("noise")&&(this.innerHTML+="\n        <svg\n          height=\"100%\"\n          width=\"100%\"\n          style=\"\n            mix-blend-mode: difference;\n            opacity: .25;\n            position: relative;\n          \"\n        >\n          <filter \n            id='noise'\n            x='0%' \n            y='0%' \n            width='100%' \n            height='100%'\n          >\n            <feTurbulence \n              type=\"fractalNoise\" \n              baseFrequency=\"0.8\"\n              numOctaves=\"1\"\n            />\n          </filter>\n          <rect \n            filter=\"url(#noise)\"\n            width='100%' \n            height='100%'\n          />\n        </svg>\n      "),this.hasAttribute("banner")&&(this.style.backgroundImage=this.getAttribute(banner))}}])&&rt(r.prototype,o),i&&rt(r,i),a}(it(HTMLElement)));n(1);var ft=n.p+"images/logo-white.d96868d3e9da51ef9f24ce7c45178318.png",lt=n.p+"images/squigle-white.8e85094a0f6d9b711e5902323463f5a1.svg",pt=n.p+"videos/growth.mp4",dt=n.p+"videos/growth.webm";console.log(ft),console.log(pt),document.body.innerHTML='\n  <dbw-header \n    logo="'.concat(ft,"\"\n    items=\"\n      Dribbble: 'https://dribbble.com/dbwatersdesigns',\n      Github: 'https://github.com/davidbwaters',\n      Mail: 'mailto:mrdavidbwaters@gmail.com',\n    \"\n  >\n  </dbw-header>\n  <dbw-hero sauce>\n\n    <div class=\"inner\">\n      <h1>\n        I create digital solutions to promote growth.\n      </h1>\n      <img src=\"").concat(lt,'" width="68px" height="7px"/>\n      <br/>\n      <h2 class="u-h4">\n        Hi, I am David B. Waters. I design things and \n        leverage modern technology to build them. \n        Let\'s collaborate.\n      </h2>\n    </div>\n\n    <dbw-video-bg noise blur>\n      <video>\n        <source src="').concat(pt,'" type="video/mp4"/>\n        <source src="').concat(dt,'" type="video/webm"/>\n      </video>\n    </dbw-video-bg>\n    \n  </dbw-hero>\n')}],[[2,1]]]);