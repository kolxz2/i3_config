(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(d){return d},b.d=function(d,e,f){b.o(d,e)||Object.defineProperty(d,e,{configurable:!1,enumerable:!0,get:f})},b.n=function(d){var e=d&&d.__esModule?function(){return d['default']}:function(){return d};return b.d(e,'a',e),e},b.o=function(d,e){return Object.prototype.hasOwnProperty.call(d,e)},b.p='',b(b.s=219)})({219:function(){function d(){let f=window.location.host.replace('www.','');chrome.runtime.sendMessage(null,{action:'ask',domain:f,referrer:document.referrer,social:e})}var e;chrome.runtime.onMessage.addListener(function(f){'start'===f.action?d():'reset'===f.action?e=void 0:'store'===f.action&&(e=f.social)})}});