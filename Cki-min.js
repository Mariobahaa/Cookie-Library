!function(){var e=function(){Object.defineProperty(this,"allCookieList",{value:function(){var e=[],o=decodeURI(document.cookie);o=o.split(";");for(var t=0;t<o.length;t++)e[o[t].split("=")[0].trim()]=o[t].split("=")[1].trim();return e},writable:!1,enumerable:!1,configurable:!1})};e.prototype.setCookie=function(e,o,t){arguments[2]?document.cookie=e+"="+o+";expires="+t.toUTCString():document.cookie=e+"="+o},e.prototype.getCookie=function(e){return console.log(this),this.allCookieList()[e]},e.prototype.deleteCookie=function(e){var o=new Date;o.setTime(o.getTime()-864e5),document.cookie=e+"=;expires="+o.toUTCString()},e.prototype.hasCookie=function(e){var o=this.allCookieList();for(var t in o)if(t==e)return!0;return!1},window.cki=new e}();