!function(e){e.easing.jswing=e.easing.swing,e.extend(e.easing,{def:"easeOutQuad",swing:function(t,n,i,o,r){return e.easing[e.easing.def](t,n,i,o,r)},easeInQuad:function(e,t,n,i,o){return i*(t/=o)*t+n},easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n},easeInOutQuad:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,i,o){return i*(t/=o)*t*t+n},easeOutCubic:function(e,t,n,i,o){return i*((t=t/o-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t*t+n:i/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,i,o){return i*(t/=o)*t*t*t+n},easeOutQuart:function(e,t,n,i,o){return-i*((t=t/o-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t*t*t+n:-i/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,i,o){return i*(t/=o)*t*t*t*t+n},easeOutQuint:function(e,t,n,i,o){return i*((t=t/o-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,i,o){return(t/=o/2)<1?i/2*t*t*t*t*t+n:i/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,i,o){return-i*Math.cos(t/o*(Math.PI/2))+i+n},easeOutSine:function(e,t,n,i,o){return i*Math.sin(t/o*(Math.PI/2))+n},easeInOutSine:function(e,t,n,i,o){return-i/2*(Math.cos(Math.PI*t/o)-1)+n},easeInExpo:function(e,t,n,i,o){return 0==t?n:i*Math.pow(2,10*(t/o-1))+n},easeOutExpo:function(e,t,n,i,o){return t==o?n+i:i*(1-Math.pow(2,-10*t/o))+n},easeInOutExpo:function(e,t,n,i,o){return 0==t?n:t==o?n+i:(t/=o/2)<1?i/2*Math.pow(2,10*(t-1))+n:i/2*(2-Math.pow(2,-10*--t))+n},easeInCirc:function(e,t,n,i,o){return-i*(Math.sqrt(1-(t/=o)*t)-1)+n},easeOutCirc:function(e,t,n,i,o){return i*Math.sqrt(1-(t=t/o-1)*t)+n},easeInOutCirc:function(e,t,n,i,o){return(t/=o/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+n:i/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,i,o){var r=1.70158,s=0,a=i;if(0==t)return n;if(1==(t/=o))return n+i;if(s||(s=.3*o),a<Math.abs(i)){a=i;r=s/4}else r=s/(2*Math.PI)*Math.asin(i/a);return-a*Math.pow(2,10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/s)+n},easeOutElastic:function(e,t,n,i,o){var r=1.70158,s=0,a=i;if(0==t)return n;if(1==(t/=o))return n+i;if(s||(s=.3*o),a<Math.abs(i)){a=i;r=s/4}else r=s/(2*Math.PI)*Math.asin(i/a);return a*Math.pow(2,-10*t)*Math.sin((t*o-r)*(2*Math.PI)/s)+i+n},easeInOutElastic:function(e,t,n,i,o){var r=1.70158,s=0,a=i;if(0==t)return n;if(2==(t/=o/2))return n+i;if(s||(s=o*(.3*1.5)),a<Math.abs(i)){a=i;r=s/4}else r=s/(2*Math.PI)*Math.asin(i/a);return t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/s)*-.5+n:a*Math.pow(2,-10*(t-=1))*Math.sin((t*o-r)*(2*Math.PI)/s)*.5+i+n},easeInBack:function(e,t,n,i,o,r){return void 0==r&&(r=1.70158),i*(t/=o)*t*((r+1)*t-r)+n},easeOutBack:function(e,t,n,i,o,r){return void 0==r&&(r=1.70158),i*((t=t/o-1)*t*((r+1)*t+r)+1)+n},easeInOutBack:function(e,t,n,i,o,r){return void 0==r&&(r=1.70158),(t/=o/2)<1?i/2*(t*t*((1+(r*=1.525))*t-r))+n:i/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+n},easeInBounce:function(t,n,i,o,r){return o-e.easing.easeOutBounce(t,r-n,0,o,r)+i},easeOutBounce:function(e,t,n,i,o){return(t/=o)<1/2.75?i*(7.5625*t*t)+n:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(t,n,i,o,r){return n<r/2?.5*e.easing.easeInBounce(t,2*n,0,o,r)+i:.5*e.easing.easeOutBounce(t,2*n-r,0,o,r)+.5*o+i}}),e.fn.animatescroll=function(t){var n=e.extend({},e.fn.animatescroll.defaults,t);if("html,body"==n.element){var i=this.offset().top;e(n.element).stop().animate({scrollTop:i-n.padding},n.scrollSpeed,n.easing)}else e(n.element).stop().animate({scrollTop:this.offset().top-this.parent().offset().top+this.parent().scrollTop()-n.padding},n.scrollSpeed,n.easing)},e.fn.animatescroll.defaults={easing:"swing",scrollSpeed:800,padding:0,element:"html,body"}}(jQuery),function(){"use strict";var e,t;function n(t){return void 0===this||Object.getPrototypeOf(this)!==n.prototype?new n(t):((e=this).version="3.3.2",e.tools=new y,e.isSupported()?(e.tools.extend(e.defaults,t||{}),e.defaults.container=i(e.defaults),e.store={elements:{},containers:[]},e.sequences={},e.history=[],e.uid=0,e.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),e)}function i(t){if(t&&t.container){if("string"==typeof t.container)return window.document.documentElement.querySelector(t.container);if(e.tools.isNode(t.container))return t.container;console.log('ScrollReveal: invalid container "'+t.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return e.defaults.container}function o(){return++e.uid}function r(t,n,i){n.container&&(n.container=i),t.config?t.config=e.tools.extendClone(t.config,n):t.config=e.tools.extendClone(e.defaults,n),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X"}function s(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=a(e,0),e.styles.transition.delayed=a(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",u(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",u(e)}function a(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function u(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function l(t){var n=t.config.container;n&&-1===e.store.containers.indexOf(n)&&e.store.containers.push(t.config.container),e.store.elements[t.id]=t}function c(){if(e.isSupported()){d();for(var t=0;t<e.store.containers.length;t++)e.store.containers[t].addEventListener("scroll",f),e.store.containers[t].addEventListener("resize",f);e.initialized||(window.addEventListener("scroll",f),window.addEventListener("resize",f),e.initialized=!0)}return e}function f(){t(d)}function d(){var t,n,i,o,r;e.tools.forOwn(e.sequences,function(t){r=e.sequences[t],i=!1;for(var n=0;n<r.elemIds.length;n++)o=r.elemIds[n],m(e.store.elements[o])&&!i&&(i=!0);r.active=i}),e.tools.forOwn(e.store.elements,function(i){var o,r;n=e.store.elements[i],r=(o=n).config.useDelay,t="always"===r||"onload"===r&&!e.initialized||"once"===r&&!o.seen,function(t){if(t.sequence){var n=e.sequences[t.sequence.id];return n.active&&!n.blocked&&!t.revealing&&!t.disabled}return m(t)&&!t.revealing&&!t.disabled}(n)?(n.config.beforeReveal(n.domEl),t?n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.delayed):n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.target+n.styles.transition.instant),p("reveal",n,t),n.revealing=!0,n.seen=!0,n.sequence&&function(t,n){var i=0,o=0,r=e.sequences[t.sequence.id];r.blocked=!0,n&&"onload"===t.config.useDelay&&(o=t.config.delay);t.sequence.timer&&(i=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer));t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){r.blocked=!1,t.sequence.timer=null,f()},Math.abs(r.interval)+o-i)}(n,t)):function(t){if(t.sequence){var n=e.sequences[t.sequence.id];return!n.active&&t.config.reset&&t.revealing&&!t.disabled}return!m(t)&&t.config.reset&&t.revealing&&!t.disabled}(n)&&(n.config.beforeReset(n.domEl),n.domEl.setAttribute("style",n.styles.inline+n.styles.transform.initial+n.styles.transition.instant),p("reset",n),n.revealing=!1)})}function p(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function g(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:i,width:o}}function m(e){var t,n,i,o,r,s,a,u,l,c=g(e.domEl),f={width:(t=e.config.container).clientWidth,height:t.clientHeight},d=function(e){if(e&&e!==window.document.documentElement){var t=g(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}(e.config.container),p=e.config.viewFactor,m=c.height,y=c.width,h=c.top,w=c.left;return n=h+m*p,i=w+y*p,o=h+m-m*p,r=w+y-y*p,s=d.y+e.config.viewOffset.top,a=d.x+e.config.viewOffset.left,u=d.y-e.config.viewOffset.bottom+f.height,l=d.x-e.config.viewOffset.right+f.width,n<u&&o>s&&i>a&&r<l||"fixed"===window.getComputedStyle(e.domEl).position}function y(){}n.prototype.defaults={origin:"bottom",distance:"0",duration:550,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.8,easing:"ease-in-out",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"once",viewFactor:.3,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},n.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},n.prototype.reveal=function(t,n,a,u){var f,d,p,g,m,y,h;if(void 0!==n&&"number"==typeof n?(a=n,n={}):void 0!==n&&null!==n||(n={}),!(d=function(t,n){{if("string"==typeof t)return Array.prototype.slice.call(n.querySelectorAll(t));if(e.tools.isNode(t))return[t];if(e.tools.isNodeList(t))return Array.prototype.slice.call(t)}return[]}(t,f=i(n))).length)return console.log('ScrollReveal: reveal on "'+t+'" failed, no elements found.'),e;a&&"number"==typeof a&&(y=o(),m=e.sequences[y]={id:y,interval:a,elemIds:[],active:!1});for(var w=0;w<d.length;w++)(g=d[w].getAttribute("data-sr-id"))?p=e.store.elements[g]:(p={id:o(),domEl:d[w],seen:!1,revealing:!1}).domEl.setAttribute("data-sr-id",p.id),m&&(p.sequence={id:m.id,index:m.elemIds.length},m.elemIds.push(p.id)),r(p,n,f),s(p),l(p),e.tools.isMobile()&&!p.config.mobile||!e.isSupported()?(p.domEl.setAttribute("style",p.styles.inline),p.disabled=!0):p.revealing||p.domEl.setAttribute("style",p.styles.inline+p.styles.transform.initial);return!u&&e.isSupported()&&(h={target:t,config:n,interval:a},e.history.push(h),e.initTimeout&&window.clearTimeout(e.initTimeout),e.initTimeout=window.setTimeout(c,0)),e},n.prototype.sync=function(){if(e.history.length&&e.isSupported()){for(var t=0;t<e.history.length;t++){var n=e.history[t];e.reveal(n.target,n.config,n.interval,!0)}c()}else console.log("ScrollReveal: sync failed, no reveals found.");return e},y.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},y.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},y.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},y.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},y.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},y.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},y.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return n}):"undefined"!=typeof module&&module.exports?module.exports=n:window.ScrollReveal=n}();