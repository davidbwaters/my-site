!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="C:\\Users\\ThE FaMiLy\\Documents\\ThirdMeg\\my-site\\public",n(n.s=2)}([function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,e)})(e)}function c(e,t,n){return(c=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("dbw-hero",function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,u,c,s,p=(t=d,n=a(),function(){var e,r=l(t);if(n){var o=l(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)});function d(){return r(this,d),p.apply(this,arguments)}return u=d,(c=[{key:"connectedCallback",value:function(){this.content=this.innerHTML,this.render()}},{key:"render",value:function(){this.classList.add("c-hero"),this.hasAttribute("sauce")&&this.classList.add("c-hero--sauce");var e=document.createElement("div");e.classList.add("c-hero__inner"),e.innerHTML=this.content,this.innerHTML="",this.appendChild(e)}},{key:"handleEvent",value:function(e){this["on".concat(e.type," ")](e)}}])&&o(u.prototype,c),s&&o(u,s),d}(u(HTMLElement)))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);
/*! (c) Andrea Giammarchi - ISC */
var r={};try{r.WeakMap=WeakMap}catch(e){r.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,o=i.prototype;return o.delete=function(e){return this.has(e)&&delete e[this._]},o.get=function(e){return this.has(e)?e[this._]:void 0},o.has=function(e){return r.call(e,this._)},o.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(u,this)}function u(e){this.set(e[0],e[1])}}(Math.random(),Object)}var o=r.WeakMap;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u="object"!==("undefined"==typeof document?"undefined":i(document)),c=function(e){var t,n=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),r=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(n||r){var i={},a=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return i[t]||(i[t]=e)};if(r)c=a;else{var l=new o;c=function(e){return l.get(e)||function(e,t){return l.set(e,t),t}(e,a(e))}}}else u=!0;return f(e)},a=f;function f(e){return u?e:c(e)}var l,s=function(e){for(var t=arguments.length,n=[a(e)],r=1;r<t;)n.push(arguments[r++]);return n},p="-"+Math.random().toFixed(6)+"%",d=!1;try{"content"in(l=document.createElement("template"))&&(l.innerHTML='<p tabindex="'+p+'"></p>',l.content.childNodes[0].getAttribute("tabindex")==p)||(p="_dt: "+p.slice(1,-1)+";",d=!0)}catch(e){}var y="\x3c!--"+p+"--\x3e",h=/^(?:style|textarea)$/i,v=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,b=function(e){return e.join(y).replace(j,k).replace(x,E)},m=" \\f\\n\\r\\t",g="[^"+m+"\\/>\"'=]+",w="["+m+"]+"+g,O="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",S="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+g.replace("\\/","")+"))?)",x=new RegExp(O+w+S+"+)(["+m+"]*/?>)","g"),j=new RegExp(O+w+S+"*)(["+m+"]*/>)","g"),_=new RegExp("("+w+"\\s*=\\s*)(['\"]?)"+y+"\\2","gi");function E(e,t,n,r){return"<"+t+n.replace(_,N)+r}function N(e,t,n){return t+(n||'"')+p+(n||'"')}function k(e,t,n){return v.test(t)?e:"<"+t+n+"></"+t+">"}var C=Array.isArray,A=[],T=A.indexOf,M=A.slice,P=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},R=function(e,t){return 111===e.nodeType?1/t<0?t?(r=(n=e).firstChild,o=n.lastChild,(i=document.createRange()).setStartAfter(r),i.setEndAfter(o),i.deleteContents(),r):e.lastChild:t?e.valueOf():e.firstChild:e;var n,r,o,i},L=function(e){var t=e.childNodes,n=t.length;if(n<2)return t[0];var r=M.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var o=0;o<n;)e.appendChild(r[o++]);return e}}},D=function(e){var t="content"in r("template")?function(e){var t=r("template");return t.innerHTML=e,t.content}:function(e){var t=r("fragment"),o=r("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",i=o.querySelectorAll(u)}else o.innerHTML=e,i=o.childNodes;return n(t,i),t};return function(e,n){return("svg"===n?o:t)(e)};function n(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function r(t){return"fragment"===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",t)}function o(e){var t=r("fragment"),o=r("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",n(t,o.firstChild.childNodes),t}}(document),F=function(e,t,n,r,o,i){for(var u=("selectedIndex"in t),c=u;r<o;){var a=e(n[r],1);if(t.insertBefore(a,i),u&&c&&a.selected){c=!c;var f=t.selectedIndex;t.selectedIndex=f<0?r:T.call(t.querySelectorAll("option"),a)}r++}},z=function(e,t){return e==t},H=function(e){return e},$=function(e,t,n,r,o,i,u){var c=i-o;if(c<1)return-1;for(;n-t>=c;){for(var a=t,f=o;a<n&&f<i&&u(e[a],r[f]);)a++,f++;if(f===i)return t;t=a+1}return-1},I=function(e,t,n,r,o){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o},q=function(e,t,n,r){for(;n<r;)V(e(t[n++],-1))},W=function(e,t,n){for(var r=1,o=t;r<o;){var i=(r+o)/2>>>0;n<e[i]?o=i:r=i+1}return r},Z=function(e,t,n,r,o,i,u,c,a,f,l,s,p){!function(e,t,n,r,o,i,u,c,a){for(var f=[],l=e.length,s=u,p=0;p<l;)switch(e[p++]){case 0:o++,s++;break;case 1:f.push(r[o]),F(t,n,r,o++,o,s<c?t(i[s],0):a);break;case-1:s++}for(p=0;p<l;)switch(e[p++]){case 0:u++;break;case-1:-1<f.indexOf(i[u])?u++:q(t,i,u++,u)}}(function(e,t,n,r,o,i,u){var c,a,f,l,s,p,d,y=n+i,h=[];e:for(c=0;c<=y;c++){if(c>50)return null;for(d=c-1,s=c?h[c-1]:[0,0],p=h[c]=[],a=-c;a<=c;a+=2){for(f=(l=a===-c||a!==c&&s[d+a-1]<s[d+a+1]?s[d+a+1]:s[d+a-1]+1)-a;l<i&&f<n&&u(r[o+l],e[t+f]);)l++,f++;if(l===i&&f===n)break e;p[c+a]=l}}var v=Array(c/2+y/2),b=v.length-1;for(c=h.length-1;c>=0;c--){for(;l>0&&f>0&&u(r[o+l-1],e[t+f-1]);)v[b--]=0,l--,f--;if(!c)break;d=c-1,s=c?h[c-1]:[0,0],(a=l-f)===-c||a!==c&&s[d+a-1]<s[d+a+1]?(f--,v[b--]=1):(l--,v[b--]=-1)}return v}(n,r,i,u,c,f,s)||function(e,t,n,r,o,i,u,c){var a=0,f=r<c?r:c,l=Array(f++),s=Array(f);s[0]=-1;for(var p=1;p<f;p++)s[p]=u;for(var d=o.slice(i,u),y=t;y<n;y++){var h=d.indexOf(e[y]);if(-1<h){var v=h+i;-1<(a=W(s,f,v))&&(s[a]=v,l[a]={newi:y,oldi:v,prev:l[a-1]})}}for(a=--f,--u;s[a]>u;)--a;f=c+r-a;var b=Array(f),m=l[a];for(--n;m;){for(var g=m,w=g.newi,O=g.oldi;n>w;)b[--f]=1,--n;for(;u>O;)b[--f]=-1,--u;b[--f]=0,--n,--u,m=m.prev}for(;n>=t;)b[--f]=1,--n;for(;u>=i;)b[--f]=-1,--u;return b}(n,r,o,i,u,c,a,f),e,t,n,r,u,c,l,p)},V=function(e){return(e.remove||G).call(e)};function G(){var e=this.parentNode;e&&e.removeChild(this)}
/*! (c) 2018 Andrea Giammarchi (ISC) */var U=function(e,t,n,r){r||(r={});for(var o=r.compare||z,i=r.node||H,u=null==r.before?null:i(r.before,0),c=t.length,a=c,f=0,l=n.length,s=0;f<a&&s<l&&o(t[f],n[s]);)f++,s++;for(;f<a&&s<l&&o(t[a-1],n[l-1]);)a--,l--;var p=f===a,d=s===l;if(p&&d)return n;if(p&&s<l)return F(i,e,n,s,l,I(i,t,f,c,u)),n;if(d&&f<a)return q(i,t,f,a),n;var y=a-f,h=l-s,v=-1;if(y<h){if(-1<(v=$(n,s,l,t,f,a,o)))return F(i,e,n,s,v,i(t[f],0)),F(i,e,n,v+y,l,I(i,t,a,c,u)),n}else if(h<y&&-1<(v=$(t,f,a,n,s,l,o)))return q(i,t,f,v),q(i,t,v+h,a),n;return y<2||h<2?(F(i,e,n,s,l,i(t[f],0)),q(i,t,f,a),n):y===h&&function(e,t,n,r,o,i){for(;r<o&&i(n[r],e[t-1]);)r++,t--;return 0===t}(n,l,t,f,a,o)?(F(i,e,n,s,l,I(i,t,a,c,u)),n):(Z(i,e,n,s,l,h,t,f,a,y,c,o,u),n)},B=function(e,t,n,r,o){var i="importNode"in e,u=e.createDocumentFragment();return u.appendChild(e.createTextNode("g")),u.appendChild(e.createTextNode("")),(i?e.importNode(u,!0):u.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),o=t.childNodes||[],i=o.length,u=0;n&&u<i;u++)r.appendChild(e(o[u],n));return r}:i?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),J="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},K=d?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function Q(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function X(e,t,n,r){for(var o=e.attributes,i=[],u=[],c=K(o,n),a=c.length,f=0;f<a;){var l,s=c[f++],h=s.value===p;if(h||1<(l=s.value.split(y)).length){var v=s.name;if(i.indexOf(v)<0){i.push(v);var b=n.shift().replace(h?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),m=o[b]||o[b.toLowerCase()];if(h)t.push(ee(m,r,b,null));else{for(var g=l.length-2;g--;)n.shift();t.push(ee(m,r,b,l))}}u.push(s)}}f=0;for(var w=(0<(a=u.length)&&d&&!("ownerSVGElement"in e));f<a;){var O=u[f++];w&&(O.value=""),e.removeAttribute(O.name)}var S=e.nodeName;if(/^script$/i.test(S)){var x=document.createElement(S);for(a=o.length,f=0;f<a;)x.setAttributeNode(o[f++].cloneNode(!0));x.textContent=e.textContent,e.parentNode.replaceChild(x,e)}}function Y(e,t){return{type:"any",node:e,path:t}}function ee(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function te(e,t){return{type:"text",node:e,path:t}}var ne=function(e){var t=ue,n=ce;return function(r){return t!==r&&(n=ie(e,t=r)),n.apply(null,arguments)}},re=P(new o);function oe(e,t){var n=(e.convert||b)(t),r=e.transform;r&&(n=r(n));var o=D(n,e.type);ce(o);var i=[];return function e(t,n,r,o){for(var i=t.childNodes,u=i.length,c=0;c<u;){var a=i[c];switch(a.nodeType){case 1:var f=o.concat(c);X(a,n,r,f),e(a,n,r,f);break;case 8:var l=a.textContent;if(l===p)r.shift(),n.push(h.test(t.nodeName)?te(t,o):Y(a,o.concat(c)));else switch(l.slice(0,2)){case"/*":if("*/"!==l.slice(-2))break;case"👻":t.removeChild(a),c--,u--}break;case 3:h.test(t.nodeName)&&J.call(a.textContent)===y&&(r.shift(),n.push(te(t,o)))}c++}}(o,i,t.slice(0),[]),{content:o,updates:function(n){for(var r=[],o=i.length,u=0,c=0;u<o;){var a=i[u++],f=Q(n,a.path);switch(a.type){case"any":r.push({fn:e.any(f,[]),sparse:!1});break;case"attr":var l=a.sparse,s=e.attribute(f,a.name,a.node);null===l?r.push({fn:s,sparse:!1}):(c+=l.length-2,r.push({fn:s,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(f),sparse:!1}),f.textContent=""}}return o+=c,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var i=1,u=1;i<e;){var c=r[i-u];if(c.sparse){var a=c.values,f=a[0],l=1,s=a.length;for(u+=s-2;l<s;)f+=arguments[i++]+a[l++];c.fn(f)}else c.fn(arguments[i++])}return n}}}}function ie(e,t){var n=re.get(t)||re.set(t,oe(e,t));return n.updates(B.call(document,n.content,!0))}var ue=[];function ce(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===J.call(r.textContent).length&&e.removeChild(r)}}function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*! (c) Andrea Giammarchi - ISC */var fe=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var i,u;return function(c){var a,f,l,s;switch(ae(c)){case"object":if(c){if("object"===i){if(!o&&u!==c)for(f in u)f in c||(r[f]="")}else o?r.value="":r.cssText="";for(f in a=o?{}:r,c)l="number"!=typeof(s=c[f])||e.test(f)?s:s+"px",!o&&/^--/.test(f)?a.setProperty(f,l):a[f]=l;i="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(u=a):u=c;break}default:u!=c&&(i="string",u=c,o?r.value=c||"":r.cssText=c||"")}}}}(),le=function(e,t){var n,r=!0,o=document.createAttributeNS(null,t);return function(t){n!==t&&(null==(n=t)?r||(e.removeAttributeNodeNS(o),r=!0):(o.value=t,r&&(e.setAttributeNodeNS(o),r=!1)))}},se=function(e,t){return function(n){e[t]=n}};function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var de=/^(?:form|list)$/i,ye=function(e,t){return e.ownerDocument.createTextNode(t)};function he(e){return this.type=e,ne(this)}function ve(e){return e(this)}function be(e){return function(e){if(Array.isArray(e))return me(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}he.prototype={attribute:function(e,t,n){var r,o="svg"===this.type;switch(t){case"class":if(o)return le(e,t);t="className";case"props":return se(e,t);case"aria":return function(e){return function(t){for(var n in t)e.setAttribute("role"===n?n:"aria-".concat(n),t[n])}}(e);case"data":return r=e.dataset,function(e){for(var t in e)r[t]=e[t]};case"style":return fe(e,n,o);case"ref":return function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e);default:return"."===t.slice(0,1)?se(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var o=C(t)?t:[t,!1];n!==o[0]&&(n&&e.removeEventListener(r,n,o[1]),(n=o[0])&&e.addEventListener(r,n,o[1]))}}(e,t):!(t in e)||o||de.test(t)?le(e,t):function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}}(e,t)}},any:function(e,t){var n,r={node:R,before:e},o=this.type,i=!1;return function u(c){switch(pe(c)){case"string":case"number":case"boolean":i?n!==c&&(n=c,t[0].textContent=c):(i=!0,n=c,t=U(e.parentNode,t,[ye(e,c)],r));break;case"function":u(c(e));break;case"object":case"undefined":if(null==c){i=!1,t=U(e.parentNode,t,[],r);break}default:if(i=!1,n=c,C(c))if(0===c.length)t.length&&(t=U(e.parentNode,t,[],r));else switch(pe(c[0])){case"string":case"number":case"boolean":u(String(c));break;case"function":u(c.map(ve,e));break;case"object":C(c[0])&&(c=c.concat.apply([],c));default:t=U(e.parentNode,t,c,r)}else"ELEMENT_NODE"in c?t=U(e.parentNode,t,11===c.nodeType?M.call(c.childNodes):[c],r):"text"in c?u(String(c.text)):"any"in c?u(c.any):"html"in c?t=U(e.parentNode,t,M.call(D([].concat(c.html).join(""),o).childNodes),r):"length"in c&&u(M.call(c))}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var o=pe(r);"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(M.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}}}};var ge=Object.create,we=Object.freeze,Oe=(Object.keys,he.prototype,P(new o)),Se=function(e){return{html:je("html",e),svg:je("svg",e),render:function(t,n){var r="function"==typeof n?n():n,o=Oe.get(t)||Oe.set(t,xe()),i=r instanceof Ne?_e(e,o,r):r;return i!==o.wire&&(o.wire=i,t.textContent="",t.appendChild(i.valueOf())),t}}},xe=function(){return{stack:[],entry:null,wire:null}},je=function(e,t){var n=P(new o);return r.for=function(e,o){var i,u=n.get(e)||n.set(e,ge(null));return u[o]||(u[o]=(i=xe(),function(){return _e(t,i,r.apply(null,arguments))}))},r.node=function(){return _e(t,xe(),r.apply(null,arguments)).valueOf()},r;function r(){return new Ne(e,s.apply(null,arguments))}},_e=function(e,t,n){var r,o=n.type,i=n.template,u=n.values,c=u.length;Ee(e,t,u,c);var a=t.entry;if(a&&a.template===i&&a.type===o)(r=a).tag.apply(r,[i].concat(be(u)));else{var f=new e(o);t.entry=a={type:o,template:i,tag:f,wire:L(f.apply(void 0,[i].concat(be(u))))}}return a.wire},Ee=function e(t,n,r,o){for(var i=n.stack,u=0;u<o;u++){var c=r[u];c instanceof ke?r[u]=_e(t,i[u]||(i[u]=xe()),c):C(c)?e(t,i[u]||(i[u]=xe()),c,c.length):i[u]=null}o<i.length&&i.splice(o)};function Ne(e,t){this.type=e,this.template=t.shift(),this.values=t}we(Ne);var ke=Ne,Ce=Se(he),Ae=Ce.render,Te=Ce.html;Ce.svg;function Me(e){return(Me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(){var e=Le([' \n                <a\n                  class="c-header__link"\n                  href=',"\n                  >","\n                </a>"]);return Pe=function(){return e},e}function Re(){var e=Le(['\n        <div class="c-header__inner">\n          <img\n            class="c-header__logo"\n            src=','\n          />\n\n          <nav class="c-header__nav">\n            ',"\n          </nav>\n        </div>\n      "]);return Re=function(){return e},e}function Le(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function De(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fe(e,t){return!t||"object"!==Me(t)&&"function"!=typeof t?ze(e):t}function ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function He(e){var t="function"==typeof Map?new Map:void 0;return(He=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return $e(e,arguments,We(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),qe(r,e)})(e)}function $e(e,t,n){return($e=Ie()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&qe(o,n.prototype),o}).apply(null,arguments)}function Ie(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function qe(e,t){return(qe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function We(e){return(We=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("dbw-header",function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&qe(e,t)}(c,e);var t,n,r,o,i,u=(t=c,n=Ie(),function(){var e,r=We(t);if(n){var o=We(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Fe(this,e)});function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this)).render=Ae.bind(null,ze(e),e.render.bind(ze(e))),e}return r=c,(o=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){return this.state={logo:this.getAttribute("logo"),items:this.getAttribute("items").split(", ").map((function(e){return e.split(": ")}))},this.classList.add("c-header"),Te(Re(),this.state.logo,this.state.items.map((function(e){return Te(Pe(),e[1],e[0])})))}},{key:"handleEvent",value:function(e){this["on".concat(e.type," ")](e)}}])&&De(r.prototype,o),i&&De(r,i),c}(He(HTMLElement)));n(0);function Ze(e){return(Ze="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ve(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n        <video autoplay loop class="c-video-bg__video">\n          <source \n            src="','" \n            type="','"\n          >\n        </video>\n        ']);return Ve=function(){return e},e}function Ge(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ue(e,t){return!t||"object"!==Ze(t)&&"function"!=typeof t?Be(e):t}function Be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Je(e){var t="function"==typeof Map?new Map:void 0;return(Je=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return Ke(e,arguments,Ye(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Xe(r,e)})(e)}function Ke(e,t,n){return(Ke=Qe()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Xe(o,n.prototype),o}).apply(null,arguments)}function Qe(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Xe(e,t){return(Xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ye(e){return(Ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("dbw-video-bg",function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xe(e,t)}(c,e);var t,n,r,o,i,u=(t=c,n=Qe(),function(){var e,r=Ye(t);if(n){var o=Ye(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Ue(this,e)});function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=u.call(this)).render=Ae.bind(null,Be(e),e.render.bind(Be(e))),e}return r=c,(o=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){return this.state={video:this.getAttribute("source"),type:this.getAttribute("type")},this.hasAttribute("opaque")&&(this.style.opacity=".2"),this.classList.add("c-video-bg"),Te(Ve(),this.state.video,this.state.type)}},{key:"handleEvent",value:function(e){this["on".concat(e.type," ")](e)}}])&&Ge(r.prototype,o),i&&Ge(r,i),c}(Je(HTMLElement)));n(1);var et=n.p+"images/logo-black.d56f196a6d1d50fcfe8a3b3e36cd99f9.png",tt=n.p+"videos/growth.35d71d2c233bea3eb83dc74590380a5c.mp4";function nt(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    <dbw-video-bg opaque source=",' type="video/mp4">\n    </dbw-video-bg>\n    <dbw-hero>\n      <dbw-header logo="','" items="About: /about">\n      </dbw-header>\n      <h1>\n        I create digital solutions to promote growth.\n      </h2>\n    </dbw-hero>\n  ']);return nt=function(){return e},e}document.body.appendChild(Te.node(nt(),tt,et))}]);