window.JSON||(window.JSON={}),function(){function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)d=rep[c],typeof d=="string"&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var JSON=window.JSON,cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{};if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={handlers:{},_uid:1,uid:function(a){return a._uid||(a._uid=c.Adapter._uid++)},bind:function(a,b,d){var e=c.Adapter.uid(a);c.Adapter.handlers[e]=c.Adapter.handlers[e]||{},c.Adapter.handlers[e][b]=c.Adapter.handlers[e][b]||[],c.Adapter.handlers[e][b].push(d),a["on"+b]=function(a,b){return function(d){c.Adapter.trigger(a,b,d)}}(a,b)},trigger:function(a,b,d){d=d||{};var e=c.Adapter.uid(a),f,g;c.Adapter.handlers[e]=c.Adapter.handlers[e]||{},c.Adapter.handlers[e][b]=c.Adapter.handlers[e][b]||[];for(f=0,g=c.Adapter.handlers[e][b].length;f<g;++f)c.Adapter.handlers[e][b][f].apply(this,[d])},extractEventData:function(a,c){var d=c&&c[a]||b;return d},onDomLoad:function(b){var c=a.setTimeout(function(){b()},2e3);a.onload=function(){clearTimeout(c),b()}}},typeof c.init!="undefined"&&c.init()}(window),function(a,b){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if(typeof g.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){if(typeof g.initHtml4.initialized!="undefined")return!1;g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var b=g.getHashByIndex(),c;return c=a===b,c},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return typeof a=="undefined"?b=g.savedHashes[g.savedHashes.length-1]:a<0?b=g.savedHashes[g.savedHashes.length+a]:b=g.savedHashes[a],b},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var d=g.getHashByState(a),e;return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var b=g.getHashByState(a),c;return c=g.discardedStates[b]||!1,c},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var b="",d,e,h,i;return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash()||"",d=g.unescapeHash(e.contentWindow.document.location.hash)||"";return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash();return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var d=b&&b.newURL||c.location.href,e=g.getHashByUrl(d),f=null,h=null,i=null,j;return g.isLastHash(e)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(e),e&&g.isTraditionalAnchor(e)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(f=g.extractState(g.getFullUrl(e||c.location.href,!1),!0),g.isLastSavedState(f)?(g.busy(!1),!1):(h=g.getHashByState(f),j=g.discardedState(f),j?(g.getHashByIndex(-2)===g.getHashByState(j.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(f.data,f.title,f.url,!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,d,e,f){if(g.getHashByUrl(e))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(f!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:f}),!1;g.busy(!0);var h=g.createStateObject(b,d,e),i=g.getHashByState(h),j=g.getState(!1),k=g.getHashByState(j),l=g.getHash();return g.storeState(h),g.expectedStateId=h.id,g.recycleState(h),g.setTitle(h),i===k?(g.busy(!1),!1):i!==l&&i!==g.getShortUrl(c.location.href)?(g.setHash(i,!1),!1):(g.saveState(h),g.Adapter.trigger(a,"statechange"),g.busy(!1),!0)},g.replaceState=function(a,b,c,d){if(g.getHashByUrl(c))throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(d!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:d}),!1;g.busy(!0);var e=g.createStateObject(a,b,c),f=g.getState(!1),h=g.getStateByIndex(-2);return g.discardState(f,e,h),g.pushState(e.data,e.title,e.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")})},typeof g.init!="undefined"&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode;if(typeof m.init!="undefined")throw new Error("History.js Core has already been loaded...");m.init=function(){return typeof m.Adapter=="undefined"?!1:(typeof m.initCore!="undefined"&&m.initCore(),typeof m.initHtml4!="undefined"&&m.initHtml4(),!0)},m.initCore=function(){if(typeof m.initCore.initialized!="undefined")return!1;m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if(typeof b!="undefined"&&b!==null){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a=typeof c!="undefined"&&typeof c.log!="undefined"&&typeof c.log.apply!="undefined",b=d.getElementById("log"),e,f,g,h,i;a?(h=Array.prototype.slice.call(arguments),e=h.shift(),typeof c.debug!="undefined"?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n";for(f=1,g=arguments.length;f<g;++f){i=arguments[f];if(typeof i=="object"&&typeof k!="undefined")try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached=typeof m.getInternetExplorerMajorVersion.cached!="undefined"?m.getInternetExplorerMajorVersion.cached:function(){var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");while((b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0]);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached=typeof m.isInternetExplorer.cached!="undefined"?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated={pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&e.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);if(d.location.port||!1)a+=":"+d.location.port;return a+="/",a},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return a.length===1&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a=m.getState(!1,!1),b=(a||{}).url||d.location.href,c;return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a,b,c){return/\./.test(a)?a:a+"/"}),c},m.getBasePageUrl=function(){var a=d.location.href.replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,b,c){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b=typeof b=="undefined"?!0:b,/[a-z]+\:\/\//.test(a)||(d==="/"?c=m.getRootUrl()+a.replace(/^\/+/,""):d==="#"?c=m.getPageUrl().replace(/#.*/,"")+a:d==="?"?c=m.getPageUrl().replace(/[\?#].*/,"")+a:b?c=m.getBaseUrl()+a.replace(/^(\.\/)+/,""):c=m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),b},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){typeof a=="undefined"&&(a=!0),typeof b=="undefined"&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b=m.extractId(a.url),c;if(!b){c=m.getStateString(a);if(typeof m.stateToId[c]!="undefined")b=m.stateToId[c];else if(typeof m.store.stateToId[c]!="undefined")b=m.store.stateToId[c];else{for(;;){b=(new Date).getTime()+String(Math.random()).replace(/\D/g,"");if(typeof m.idToState[b]=="undefined"&&typeof m.store.idToState[b]=="undefined")break}m.stateToId[c]=b,m.idToState[b]=a}}return b},m.normalizeState=function(a){var b,c;if(!a||typeof a!="object")a={};if(typeof a.normalized!="undefined")return a;if(!a.data||typeof a.data!="object")a.data={};b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(m.unescapeString(a.url||d.location.href)),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data);if(b.title||c)b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id;return b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d),d},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c),d},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id,c},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash,c},m.extractId=function(a){var b,c,d;return c=/(.*)\&_suid=([0-9]+)$/.exec(a),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c=null,d,e;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b=!1,c;return c=m.extractState(a.url),b=c&&c.id!==a.id,b},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b=!1,c,d,e;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return typeof a=="undefined"?b=m.savedStates[m.savedStates.length-1]:a<0?b=m.savedStates[m.savedStates.length+a]:b=m.savedStates[a],b},m.getHash=function(){var a=m.unescapeHash(d.location.hash);return a},m.unescapeString=function(b){var c=b,d;for(;;){d=a.unescape(c);if(d===c)break;c=d}return c},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=m.unescapeString(b),b},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e,f;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(c=m.escapeHash(a),m.busy(!0),e=m.extractState(a,!0),e&&!m.emulated.pushState?m.pushState(e.data,e.title,e.url,!1):d.location.hash!==c&&(m.bugs.setHash?(f=m.getPageUrl(),m.pushState(null,null,f+"#"+c,!1)):d.location.hash=c),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.escape(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b),b},m.setTitle=function(a){var b=a.title,c;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){typeof a!="undefined"?m.busy.flag=a:typeof m.busy.flag=="undefined"&&(m.busy.flag=!1);if(!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(m.busy.flag)return;for(a=m.queues.length-1;a>=0;--a){c=m.queues[a];if(c.length===0)continue;d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay)}};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return typeof a=="function"&&(a={callback:a}),typeof b!="undefined"&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b=m.extractState(d.location.href),c;if(!m.isLastSavedState(b))c=b;else return;return c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m};if(m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var e=!1,f=!1,g,h;return m.doubleCheckComplete(),g=m.getHash(),g?(h=m.extractState(g||d.location.href,!0),h?m.replaceState(h.data,h.title,h.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(e=m.Adapter.extractEventData("state",b,c)||!1,e?f=m.getStateById(e):m.expectedStateId?f=m.getStateById(m.expectedStateId):f=m.extractState(d.location.href),f||(f=m.createStateObject(null,null,d.location.href)),m.expectedStateId=!1,m.isLastSavedState(f)?(m.busy(!1),!1):(m.storeState(f),m.saveState(f),m.setTitle(f),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"beforeunload",m.clearAllIntervals),m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(d.location.href,!0))),f&&(m.onUnload=function(){var a,b;try{a=k.parse(f.getItem("History.store"))||{}}catch(c){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState){if(!m.idToState.hasOwnProperty(b))continue;a.idToState[b]=m.idToState[b]}for(b in m.urlToId){if(!m.urlToId.hasOwnProperty(b))continue;a.urlToId[b]=m.urlToId[b]}for(b in m.stateToId){if(!m.stateToId.hasOwnProperty(b))continue;a.stateToId[b]=m.stateToId[b]}m.store=a,m.normalizeStore(),f.setItem("History.store",k.stringify(a))},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload));if(!m.emulated.pushState){m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval));if(e.vendor==="Apple Computer, Inc."||(e.appCodeName||"")==="Mozilla")m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})}},m.init()}(window)

jade = (function(exports){
/*!
 * Jade - runtime
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Lame Array.isArray() polyfill for now.
 */

if (!Array.isArray) {
  Array.isArray = function(arr){
    return '[object Array]' == Object.prototype.toString.call(arr);
  };
}

/**
 * Lame Object.keys() polyfill for now.
 */

if (!Object.keys) {
  Object.keys = function(obj){
    var arr = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }
}

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    ac = ac.filter(nulls);
    bc = bc.filter(nulls);
    a['class'] = ac.concat(bc).join(' ');
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function nulls(val) {
  return val != null;
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 * @api private
 */

exports.attrs = function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key && Array.isArray(val)) {
        buf.push(key + '="' + exports.escape(val.join(' ')) + '"');
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + exports.escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  return String(html)
    .replace(/&(?!(\w+|\#\d+);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno){
  if (!filename) throw err;

  var context = 3
    , str = require('fs').readFileSync(filename, 'utf8')
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

  return exports;

})({});

/*
Copyright (c) 2010 Ryan Schuft (ryan.schuft@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
  This code is based in part on the work done in Ruby to support
  infection as part of Ruby on Rails in the ActiveSupport's Inflector
  and Inflections classes.  It was initally ported to Javascript by
  Ryan Schuft (ryan.schuft@gmail.com) in 2007.

  The code is available at http://code.google.com/p/inflection-js/

  The basic usage is:
    1. Include this script on your web page.
    2. Call functions on any String object in Javascript

  Currently implemented functions:

    String.pluralize(plural) == String
      renders a singular English language noun into its plural form
      normal results can be overridden by passing in an alternative

    String.singularize(singular) == String
      renders a plural English language noun into its singular form
      normal results can be overridden by passing in an alterative

    String.camelize(lowFirstLetter) == String
      renders a lower case underscored word into camel case
      the first letter of the result will be upper case unless you pass true
      also translates "/" into "::" (underscore does the opposite)

    String.underscore() == String
      renders a camel cased word into words seperated by underscores
      also translates "::" back into "/" (camelize does the opposite)

    String.humanize(lowFirstLetter) == String
      renders a lower case and underscored word into human readable form
      defaults to making the first letter capitalized unless you pass true

    String.capitalize() == String
      renders all characters to lower case and then makes the first upper

    String.dasherize() == String
      renders all underbars and spaces as dashes

    String.titleize() == String
      renders words into title casing (as for book titles)

    String.demodulize() == String
      renders class names that are prepended by modules into just the class

    String.tableize() == String
      renders camel cased singular words into their underscored plural form

    String.classify() == String
      renders an underscored plural word into its camel cased singular form

    String.foreign_key(dropIdUbar) == String
      renders a class name (camel cased singular noun) into a foreign key
      defaults to seperating the class from the id with an underbar unless
      you pass true

    String.ordinalize() == String
      renders all numbers found in the string into their sequence like "22nd"
*/

/*
  This sets up a container for some constants in its own namespace
  We use the window (if available) to enable dynamic loading of this script
  Window won't necessarily exist for non-browsers.
*/
if (window && !window.InflectionJS)
{
    window.InflectionJS = null;
}

/*
  This sets up some constants for later use
  This should use the window namespace variable if available
*/
InflectionJS =
{
    /*
      This is a list of nouns that use the same form for both singular and plural.
      This list should remain entirely in lower case to correctly match Strings.
    */
    uncountable_words: [
        'equipment', 'information', 'rice', 'money', 'species', 'series',
        'fish', 'sheep', 'moose', 'deer', 'news'
    ],

    /*
      These rules translate from the singular form of a noun to its plural form.
    */
    plural_rules: [
        [new RegExp('(m)an$', 'gi'),                 '$1en'],
        [new RegExp('(pe)rson$', 'gi'),              '$1ople'],
        [new RegExp('(child)$', 'gi'),               '$1ren'],
        [new RegExp('^(ox)$', 'gi'),                 '$1en'],
        [new RegExp('(ax|test)is$', 'gi'),           '$1es'],
        [new RegExp('(octop|vir)us$', 'gi'),         '$1i'],
        [new RegExp('(alias|status)$', 'gi'),        '$1es'],
        [new RegExp('(bu)s$', 'gi'),                 '$1ses'],
        [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
        [new RegExp('([ti])um$', 'gi'),              '$1a'],
        [new RegExp('sis$', 'gi'),                   'ses'],
        [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
        [new RegExp('(hive)$', 'gi'),                '$1s'],
        [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
        [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
        [new RegExp('(matr|vert|ind)ix|ex$', 'gi'),  '$1ices'],
        [new RegExp('([m|l])ouse$', 'gi'),           '$1ice'],
        [new RegExp('(quiz)$', 'gi'),                '$1zes'],
        [new RegExp('s$', 'gi'),                     's'],
        [new RegExp('$', 'gi'),                      's']
    ],

    /*
      These rules translate from the plural form of a noun to its singular form.
    */
    singular_rules: [
        [new RegExp('(m)en$', 'gi'),                                                       '$1an'],
        [new RegExp('(pe)ople$', 'gi'),                                                    '$1rson'],
        [new RegExp('(child)ren$', 'gi'),                                                  '$1'],
        [new RegExp('([ti])a$', 'gi'),                                                     '$1um'],
        [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi'), '$1$2sis'],
        [new RegExp('(hive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(tive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(curve)s$', 'gi'),                                                    '$1'],
        [new RegExp('([lr])ves$', 'gi'),                                                   '$1f'],
        [new RegExp('([^fo])ves$', 'gi'),                                                  '$1fe'],
        [new RegExp('([^aeiouy]|qu)ies$', 'gi'),                                           '$1y'],
        [new RegExp('(s)eries$', 'gi'),                                                    '$1eries'],
        [new RegExp('(m)ovies$', 'gi'),                                                    '$1ovie'],
        [new RegExp('(x|ch|ss|sh)es$', 'gi'),                                              '$1'],
        [new RegExp('([m|l])ice$', 'gi'),                                                  '$1ouse'],
        [new RegExp('(bus)es$', 'gi'),                                                     '$1'],
        [new RegExp('(o)es$', 'gi'),                                                       '$1'],
        [new RegExp('(shoe)s$', 'gi'),                                                     '$1'],
        [new RegExp('(cris|ax|test)es$', 'gi'),                                            '$1is'],
        [new RegExp('(octop|vir)i$', 'gi'),                                                '$1us'],
        [new RegExp('(alias|status)es$', 'gi'),                                            '$1'],
        [new RegExp('^(ox)en', 'gi'),                                                      '$1'],
        [new RegExp('(vert|ind)ices$', 'gi'),                                              '$1ex'],
        [new RegExp('(matr)ices$', 'gi'),                                                  '$1ix'],
        [new RegExp('(quiz)zes$', 'gi'),                                                   '$1'],
        [new RegExp('s$', 'gi'),                                                           '']
    ],

    /*
      This is a list of words that should not be capitalized for title case
    */
    non_titlecased_words: [
        'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
        'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
        'with', 'for'
    ],

    /*
      These are regular expressions used for converting between String formats
    */
    id_suffix: new RegExp('(_ids|_id)$', 'g'),
    underbar: new RegExp('_', 'g'),
    space_or_underbar: new RegExp('[\ _]', 'g'),
    uppercase: new RegExp('([A-Z])', 'g'),
    underbar_prefix: new RegExp('^_'),
    
    /*
      This is a helper method that applies rules based replacement to a String
      Signature:
        InflectionJS.apply_rules(str, rules, skip, override) == String
      Arguments:
        str - String - String to modify and return based on the passed rules
        rules - Array: [RegExp, String] - Regexp to match paired with String to use for replacement
        skip - Array: [String] - Strings to skip if they match
        override - String (optional) - String to return as though this method succeeded (used to conform to APIs)
      Returns:
        String - passed String modified by passed rules
      Examples:
        InflectionJS.apply_rules("cows", InflectionJs.singular_rules) === 'cow'
    */
    apply_rules: function(str, rules, skip, override)
    {
        if (override)
        {
            str = override;
        }
        else
        {
            var ignore = (skip.indexOf(str.toLowerCase()) > -1);
            if (!ignore)
            {
                for (var x = 0; x < rules.length; x++)
                {
                    if (str.match(rules[x][0]))
                    {
                        str = str.replace(rules[x][0], rules[x][1]);
                        break;
                    }
                }
            }
        }
        return str;
    }
};

/*
  This lets us detect if an Array contains a given element
  Signature:
    Array.indexOf(item, fromIndex, compareFunc) == Integer
  Arguments:
    item - Object - object to locate in the Array
    fromIndex - Integer (optional) - starts checking from this position in the Array
    compareFunc - Function (optional) - function used to compare Array item vs passed item
  Returns:
    Integer - index position in the Array of the passed item
  Examples:
    ['hi','there'].indexOf("guys") === -1
    ['hi','there'].indexOf("hi") === 0
*/
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(item, fromIndex, compareFunc)
    {
        if (!fromIndex)
        {
            fromIndex = -1;
        }
        var index = -1;
        for (var i = fromIndex; i < this.length; i++)
        {
            if (this[i] === item || compareFunc && compareFunc(this[i], item))
            {
                index = i;
                break;
            }
        }
        return index;
    };
}

/*
  You can override this list for all Strings or just one depending on if you
  set the new values on prototype or on a given String instance.
*/
if (!String.prototype._uncountable_words)
{
    String.prototype._uncountable_words = InflectionJS.uncountable_words;
}

/*
  You can override this list for all Strings or just one depending on if you
  set the new values on prototype or on a given String instance.
*/
if (!String.prototype._plural_rules)
{
    String.prototype._plural_rules = InflectionJS.plural_rules;
}

/*
  You can override this list for all Strings or just one depending on if you
  set the new values on prototype or on a given String instance.
*/
if (!String.prototype._singular_rules)
{
    String.prototype._singular_rules = InflectionJS.singular_rules;
}

/*
  You can override this list for all Strings or just one depending on if you
  set the new values on prototype or on a given String instance.
*/
if (!String.prototype._non_titlecased_words)
{
    String.prototype._non_titlecased_words = InflectionJS.non_titlecased_words;
}

/*
  This function adds plurilization support to every String object
    Signature:
      String.pluralize(plural) == String
    Arguments:
      plural - String (optional) - overrides normal output with said String
    Returns:
      String - singular English language nouns are returned in plural form
    Examples:
      "person".pluralize() == "people"
      "octopus".pluralize() == "octopi"
      "Hat".pluralize() == "Hats"
      "person".pluralize("guys") == "guys"
*/
if (!String.prototype.pluralize)
{
    String.prototype.pluralize = function(plural)
    {
        return InflectionJS.apply_rules(
            this,
            this._plural_rules,
            this._uncountable_words,
            plural
        );
    };
}

/*
  This function adds singularization support to every String object
    Signature:
      String.singularize(singular) == String
    Arguments:
      singular - String (optional) - overrides normal output with said String
    Returns:
      String - plural English language nouns are returned in singular form
    Examples:
      "people".singularize() == "person"
      "octopi".singularize() == "octopus"
      "Hats".singularize() == "Hat"
      "guys".singularize("person") == "person"
*/
if (!String.prototype.singularize)
{
    String.prototype.singularize = function(singular)
    {
        return InflectionJS.apply_rules(
            this,
            this._singular_rules,
            this._uncountable_words,
            singular
        );
    };
}

/*
  This function adds camelization support to every String object
    Signature:
      String.camelize(lowFirstLetter) == String
    Arguments:
      lowFirstLetter - boolean (optional) - default is to capitalize the first
        letter of the results... passing true will lowercase it
    Returns:
      String - lower case underscored words will be returned in camel case
        additionally '/' is translated to '::'
    Examples:
      "message_properties".camelize() == "MessageProperties"
      "message_properties".camelize(true) == "messageProperties"
*/
if (!String.prototype.camelize)
{
     String.prototype.camelize = function(lowFirstLetter)
     {
        var str = this.toLowerCase();
        var str_path = str.split('/');
        for (var i = 0; i < str_path.length; i++)
        {
            var str_arr = str_path[i].split('_');
            var initX = ((lowFirstLetter && i + 1 === str_path.length) ? (1) : (0));
            for (var x = initX; x < str_arr.length; x++)
            {
                str_arr[x] = str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
            }
            str_path[i] = str_arr.join('');
        }
        str = str_path.join('::');
        return str;
    };
}

/*
  This function adds underscore support to every String object
    Signature:
      String.underscore() == String
    Arguments:
      N/A
    Returns:
      String - camel cased words are returned as lower cased and underscored
        additionally '::' is translated to '/'
    Examples:
      "MessageProperties".camelize() == "message_properties"
      "messageProperties".underscore() == "message_properties"
*/
if (!String.prototype.underscore)
{
     String.prototype.underscore = function()
     {
        var str = this;
        var str_path = str.split('::');
        for (var i = 0; i < str_path.length; i++)
        {
            str_path[i] = str_path[i].replace(InflectionJS.uppercase, '_$1');
            str_path[i] = str_path[i].replace(InflectionJS.underbar_prefix, '');
        }
        str = str_path.join('/').toLowerCase();
        return str;
    };
}

/*
  This function adds humanize support to every String object
    Signature:
      String.humanize(lowFirstLetter) == String
    Arguments:
      lowFirstLetter - boolean (optional) - default is to capitalize the first
        letter of the results... passing true will lowercase it
    Returns:
      String - lower case underscored words will be returned in humanized form
    Examples:
      "message_properties".humanize() == "Message properties"
      "message_properties".humanize(true) == "message properties"
*/
if (!String.prototype.humanize)
{
    String.prototype.humanize = function(lowFirstLetter)
    {
        var str = this.toLowerCase();
        str = str.replace(InflectionJS.id_suffix, '');
        str = str.replace(InflectionJS.underbar, ' ');
        if (!lowFirstLetter)
        {
            str = str.capitalize();
        }
        return str;
    };
}

/*
  This function adds capitalization support to every String object
    Signature:
      String.capitalize() == String
    Arguments:
      N/A
    Returns:
      String - all characters will be lower case and the first will be upper
    Examples:
      "message_properties".capitalize() == "Message_properties"
      "message properties".capitalize() == "Message properties"
*/
if (!String.prototype.capitalize)
{
    String.prototype.capitalize = function()
    {
        var str = this.toLowerCase();
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    };
}

/*
  This function adds dasherization support to every String object
    Signature:
      String.dasherize() == String
    Arguments:
      N/A
    Returns:
      String - replaces all spaces or underbars with dashes
    Examples:
      "message_properties".capitalize() == "message-properties"
      "Message Properties".capitalize() == "Message-Properties"
*/
if (!String.prototype.dasherize)
{
    String.prototype.dasherize = function()
    {
        var str = this;
        str = str.replace(InflectionJS.space_or_underbar, '-');
        return str;
    };
}

/*
  This function adds titleize support to every String object
    Signature:
      String.titleize() == String
    Arguments:
      N/A
    Returns:
      String - capitalizes words as you would for a book title
    Examples:
      "message_properties".titleize() == "Message Properties"
      "message properties to keep".titleize() == "Message Properties to Keep"
*/
if (!String.prototype.titleize)
{
    String.prototype.titleize = function()
    {
        var str = this.toLowerCase();
        str = str.replace(InflectionJS.underbar, ' ');
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var d = str_arr[x].split('-');
            for (var i = 0; i < d.length; i++)
            {
                if (this._non_titlecased_words.indexOf(d[i].toLowerCase()) < 0)
                {
                    d[i] = d[i].capitalize();
                }
            }
            str_arr[x] = d.join('-');
        }
        str = str_arr.join(' ');
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    };
}

/*
  This function adds demodulize support to every String object
    Signature:
      String.demodulize() == String
    Arguments:
      N/A
    Returns:
      String - removes module names leaving only class names (Ruby style)
    Examples:
      "Message::Bus::Properties".demodulize() == "Properties"
*/
if (!String.prototype.demodulize)
{
    String.prototype.demodulize = function()
    {
        var str = this;
        var str_arr = str.split('::');
        str = str_arr[str_arr.length - 1];
        return str;
    };
}

/*
  This function adds tableize support to every String object
    Signature:
      String.tableize() == String
    Arguments:
      N/A
    Returns:
      String - renders camel cased words into their underscored plural form
    Examples:
      "MessageBusProperty".tableize() == "message_bus_properties"
*/
if (!String.prototype.tableize)
{
    String.prototype.tableize = function()
    {
        var str = this;
        str = str.underscore().pluralize();
        return str;
    };
}

/*
  This function adds classification support to every String object
    Signature:
      String.classify() == String
    Arguments:
      N/A
    Returns:
      String - underscored plural nouns become the camel cased singular form
    Examples:
      "message_bus_properties".classify() == "MessageBusProperty"
*/
if (!String.prototype.classify)
{
    String.prototype.classify = function()
    {
        var str = this;
        str = str.camelize().singularize();
        return str;
    };
}

/*
  This function adds foreign key support to every String object
    Signature:
      String.foreign_key(dropIdUbar) == String
    Arguments:
      dropIdUbar - boolean (optional) - default is to seperate id with an
        underbar at the end of the class name, you can pass true to skip it
    Returns:
      String - camel cased singular class names become underscored with id
    Examples:
      "MessageBusProperty".foreign_key() == "message_bus_property_id"
      "MessageBusProperty".foreign_key(true) == "message_bus_propertyid"
*/
if (!String.prototype.foreign_key)
{
    String.prototype.foreign_key = function(dropIdUbar)
    {
        var str = this;
        str = str.demodulize().underscore() + ((dropIdUbar) ? ('') : ('_')) + 'id';
        return str;
    };
}

/*
  This function adds ordinalize support to every String object
    Signature:
      String.ordinalize() == String
    Arguments:
      N/A
    Returns:
      String - renders all found numbers their sequence like "22nd"
    Examples:
      "the 1 pitch".ordinalize() == "the 1st pitch"
*/
if (!String.prototype.ordinalize)
{
    String.prototype.ordinalize = function()
    {
        var str = this;
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var i = parseInt(str_arr[x]);
            if (i === NaN)
            {
                var ltd = str_arr[x].substring(str_arr[x].length - 2);
                var ld = str_arr[x].substring(str_arr[x].length - 1);
                var suf = "th";
                if (ltd != "11" && ltd != "12" && ltd != "13")
                {
                    if (ld === "1")
                    {
                        suf = "st";
                    }
                    else if (ld === "2")
                    {
                        suf = "nd";
                    }
                    else if (ld === "3")
                    {
                        suf = "rd";
                    }
                }
                str_arr[x] += suf;
            }
        }
        str = str_arr.join(' ');
        return str;
    };
}
/*
    json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

var theoricus = window.theoricus = {'config':{},'core':{},'mvc':{'lib':{}},'utils':{}};

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  theoricus.utils.StringUtil = (function() {
    /*
      @param [String] str
    */

    function StringUtil() {}

    StringUtil.ucfirst = function(str) {
      var a, b;
      a = str.substr(0, 1).toUpperCase();
      b = str.substr(1);
      return a + b;
    };

    /*
      @param [String] str
    */


    StringUtil.camelize = function(str) {
      var buffer, part, parts, _i, _len;
      parts = [].concat(str.split("_"));
      buffer = "";
      for (_i = 0, _len = parts.length; _i < _len; _i++) {
        part = parts[_i];
        buffer += StringUtil.ucfirst(part);
      }
      return buffer;
    };

    /*
      @param [String] str
    */


    StringUtil.underscore = function(str) {
      str = str.replace(/([A-Z])/g, "_$1").toLowerCase();
      return str = str.substr(1) === "_" ? str.substr(1) : str;
    };

    return StringUtil;

  })();

  theoricus.core.Route = (function() {

    Route.named_param_reg = /:\w+/g;

    Route.splat_param_reg = /\*\w+/g;

    Route.prototype.api = null;

    Route.prototype.location = null;

    function Route(match, to, at, el, router, location) {
      this.match = match;
      this.to = to;
      this.at = at;
      this.el = el;
      this.router = router;
      this.location = location != null ? location : null;
      this.matcher = this.match.replace(Route.named_param_reg, '([^\/]+)');
      this.matcher = this.matcher.replace(Route.splat_param_reg, '(.*?)');
      this.matcher = new RegExp("^" + this.matcher + "$");
      this.api = {};
      try {
        this.api.controller_name = to.split("/")[0];
        this.api.action_name = to.split("/")[1];
      } catch (error) {
        console.log("TODO: handle error");
      }
      this.api.params = (location != null ? this.matcher.exec(location).slice(1) : void 0) || [];
    }

    /*
      @param [String] location
    */


    Route.prototype.clone = function(location) {
      return new Route(this.match, this.to, this.at, this.el, this.router, location);
    };

    return Route;

  })();

  /*
  Proxyes browser's History API, routing request to and from the aplication
  */


  theoricus.core.Router = (function() {
    var Factory;

    Factory = null;

    Router.prototype.routes = [];

    Router.prototype.listeners = [];

    Router.prototype.trigger = true;

    /*
      @param [theoricus.Theoricus] @the   Shortcut for app's instance
      @param [Function] @on_change  state/url change handler
    */


    function Router(the, on_change) {
      var opts, route, _ref,
        _this = this;
      this.the = the;
      this.on_change = on_change;
      this.run = __bind(this.run, this);

      Factory = this.the.factory;
      _ref = app.routes;
      for (route in _ref) {
        opts = _ref[route];
        this.map(route, opts.to, opts.at, opts.el, this);
      }
      History.Adapter.bind(window, 'statechange', function() {
        return _this.route(History.getState());
      });
      setTimeout(function() {
        var url;
        url = window.location.pathname;
        if (url === "/") {
          url = app.root;
        }
        return _this.run(url);
      }, 1);
    }

    /*
      Creates and store a route
      
      @param [String] route
      @param [String] to
      @param [String] at
      @param [String] el
    */


    Router.prototype.map = function(route, to, at, el) {
      return this.routes.push(new theoricus.core.Route(route, to, at, el, this));
    };

    Router.prototype.route = function(state) {
      var route, url, _i, _len, _ref;
      if (this.trigger) {
        url = state.hash || state.title;
        url = url.replace('.', '');
        if (this.the.base_path != null) {
          url = url.replace(this.the.base_path, '');
        }
        if ((url.slice(0, 1)) === '.') {
          url = url.slice(1);
        }
        if ((url.slice(0, 1)) !== '/') {
          url = "/" + url;
        }
        if (url === "/") {
          url = app.root;
        }
        _ref = this.routes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          route = _ref[_i];
          if (route.matcher.test(url)) {
            if (typeof this.on_change === "function") {
              this.on_change(route.clone(url));
            }
            return;
          }
        }
      }
      return this.trigger = true;
    };

    Router.prototype.navigate = function(url, trigger, replace) {
      var action;
      if (trigger == null) {
        trigger = true;
      }
      if (replace == null) {
        replace = false;
      }
      this.trigger = trigger;
      action = replace ? "replaceState" : "pushState";
      return History[action](null, null, url);
    };

    Router.prototype.run = function(url, trigger) {
      var len;
      if (trigger == null) {
        trigger = true;
      }
      if (this.the.base_path != null) {
        url = url.replace(this.the.base_path, '');
      }
      if (url.substr(-1) === '/') {
        len = url.length;
        len--;
        url = url.substr(0, len);
      }
      this.trigger = trigger;
      return this.route({
        title: url
      });
    };

    Router.prototype.go = function(index) {
      return History.go(index);
    };

    Router.prototype.back = function() {
      return History.back();
    };

    Router.prototype.forward = function() {
      return History.forward();
    };

    return Router;

  })();

  theoricus.utils.ObjectUtil = (function() {

    function ObjectUtil() {}

    /*
      @param [] str
      @param [] search
      @param [Boolean] strong_typing
    */


    ObjectUtil.find = function(src, search, strong_typing) {
      var k, v;
      if (strong_typing == null) {
        strong_typing = false;
      }
      for (k in search) {
        v = search[k];
        if (v instanceof Object) {
          return ObjectUtil.find(src[k], v);
        } else if (strong_typing) {
          if (src[k] === v) {
            return src;
          }
        } else {
          if (("" + src[k]) === ("" + v)) {
            return src;
          }
        }
      }
      return null;
    };

    return ObjectUtil;

  })();

  theoricus.mvc.lib.Binder = (function() {
    var bind_name_reg, bind_reg, collect, context_reg, parse;

    function Binder() {}

    context_reg = '(<!-- @[\\w]+ -->)([^<]+)(<!-- \/@[\\w]+ -->)';

    bind_reg = "(<!-- @~KEY -->)([^<]+)(<!-- \/@~KEY -->)";

    bind_name_reg = /(<!-- @)([\w]+)( -->)/;

    Binder.prototype.binds = null;

    Binder.prototype.bind = function(dom, just_clean_attrs) {
      return parse((this.binds = {}), dom, just_clean_attrs);
    };

    Binder.prototype.update = function(field, val) {
      var current, item, node, search, updated, _i, _len, _ref, _results;
      if (this.binds == null) {
        return;
      }
      if (this.binds[field] == null) {
        return;
      }
      _ref = this.binds[field] || [];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        node = $(item.target);
        switch (item.type) {
          case 'node':
            current = node.html();
            search = new RegExp(bind_reg.replace(/\~KEY/g, field), 'g');
            updated = current.replace(search, "$1" + val + "$3");
            node.html(updated);
            break;
          case 'attr':
            _results.push(node.attr(item.attr, val));
            break;
          default:
            _results.push(void 0);
        }
      }
      return _results;
    };

    parse = function(binds, dom, just_clean_attrs) {
      return dom.children().each(function() {
        var attr, key, keys, match_all, match_single, name, text, value, _i, _j, _len, _len1, _ref;
        _ref = this.attributes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          attr = _ref[_i];
          name = attr.nodeName;
          value = attr.nodeValue;
          match_single = new RegExp(context_reg);
          if (match_single.test(value)) {
            key = (value.match(bind_name_reg))[2];
            ($(this)).attr(name, (value.match(match_single))[2]);
            if (just_clean_attrs === false) {
              collect(binds, this, 'attr', key, name);
            }
          }
        }
        if (just_clean_attrs === false) {
          match_all = new RegExp(context_reg, 'g');
          text = ($(this)).clone().children().remove().end().html();
          text = "" + text;
          keys = (text.match(match_all)) || [];
          for (_j = 0, _len1 = keys.length; _j < _len1; _j++) {
            key = keys[_j];
            key = (key.match(bind_name_reg))[2];
            collect(binds, this, 'node', key);
          }
        }
        return parse(binds, $(this), just_clean_attrs);
      });
    };

    collect = function(binds, target, type, variable, attr) {
      var bind, tmp, _ref;
      bind = ((_ref = binds[variable]) != null ? _ref : binds[variable] = []);
      tmp = {
        type: type,
        target: target
      };
      if (attr != null) {
        tmp.attr = attr;
      }
      return bind.push(tmp);
    };

    return Binder;

  })();

  theoricus.mvc.lib.Fetcher = (function() {

    function Fetcher() {}

    Fetcher.prototype.loaded = null;

    Fetcher.prototype.onload = null;

    Fetcher.prototype.onerror = null;

    Fetcher.prototype.data = null;

    return Fetcher;

  })();

  theoricus.utils.ArrayUtil = (function() {
    var ObjectUtil;

    function ArrayUtil() {}

    ObjectUtil = theoricus.utils.ObjectUtil;

    /*
      @param [] src
      @param [] search
    */


    ArrayUtil.find = function(src, search) {
      var i, v, _i, _len;
      for (i = _i = 0, _len = src.length; _i < _len; i = ++_i) {
        v = src[i];
        if (!(search instanceof Object)) {
          if (v === search) {
            return {
              item: v,
              index: i
            };
          }
        } else {
          if (ObjectUtil.find(v, search) != null) {
            return {
              item: v,
              index: i
            };
          }
        }
      }
      return null;
    };

    /*
      @param [] src
      @param [] search
    */


    ArrayUtil["delete"] = function(src, search) {
      var item;
      item = ArrayUtil.find(src, search);
      if (item != null) {
        return src.splice(item.index, 1);
      }
    };

    return ArrayUtil;

  })();

  theoricus.mvc.Model = (function(_super) {
    var ArrayUtil;

    __extends(Model, _super);

    function Model() {
      return Model.__super__.constructor.apply(this, arguments);
    }

    ArrayUtil = theoricus.utils.ArrayUtil;

    Model._fields = [];

    Model._collection = [];

    Model.rest = function(host, resources) {
      var k, v, _ref, _results;
      if (resources == null) {
        _ref = [host, null], resources = _ref[0], host = _ref[1];
      }
      _results = [];
      for (k in resources) {
        v = resources[k];
        _results.push(this[k] = this._build_rest.apply(this, [k].concat(v.concat(host))));
      }
      return _results;
    };

    Model.fields = function(fields) {
      var key, type, _results;
      _results = [];
      for (key in fields) {
        type = fields[key];
        _results.push(this._build_gs(key, type));
      }
      return _results;
    };

    /*
      Builds a method to fetch the given service.
    
      Notice the method is being returned inside a private scope
      that contains all the variables needed to fetch the data.
    
      
      @param [String] key   
      @param [String] method  
      @param [String] url   
      @param [String] domain
    */


    Model._build_rest = function(key, method, url, domain) {
      var call;
      return call = function() {
        var args, data, found, r_url;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if ((domain != null) && domain.substring(domain.length - 1) === "/") {
          domain = domain.substring(0, domain.length - 1);
        }
        if (key === "read" && this._collection.length) {
          found = ArrayUtil.find(this._collection, {
            id: args[0]
          });
          if (found != null) {
            return found.item;
          }
        }
        if (args.length) {
          if (typeof args[args.length - 1] === 'object') {
            data = args.pop();
          } else {
            data = '';
          }
        }
        r_url = url;
        while ((/:[a-z]+/.exec(r_url)) != null) {
          r_url = url.replace(/:[a-z]+/, args.shift() || null);
        }
        if (domain != null) {
          r_url = "" + domain + r_url;
        }
        return this._request(method, r_url, data);
      };
    };

    /*
      General request method
    
      @param [String] method  URL request method
      @param [String] url   URL to be requested
      @param [Object] data  Data to be send
    */


    Model._request = function(method, url, data) {
      var fetcher, req,
        _this = this;
      if (data == null) {
        data = '';
      }
      console.log("[Model] request", method, url, data);
      fetcher = new theoricus.mvc.lib.Fetcher;
      req = {
        url: url,
        type: method,
        data: data
      };
      if (/\.json/.test(url)) {
        req.dataType = 'json';
      }
      req = $.ajax(req);
      req.done(function(data) {
        fetcher.loaded = true;
        fetcher.records = _this._instantiate(data);
        return typeof fetcher.onload === "function" ? fetcher.onload(fetcher.records) : void 0;
      });
      req.error(function(error) {
        fetcher.error = true;
        if (fetcher.onerror != null) {
          return fetcher.onerror(error);
        } else {
          return console.log(error);
        }
      });
      return fetcher;
    };

    /*
      Builds local getters/setters for the given params
    
      @param [String] field
      @param [String] type
    */


    Model._build_gs = function(field, type) {
      var classname, getter, ltype, setter, stype, _val;
      _val = null;
      classname = (("" + this).match(/function\s(\w+)/))[1];
      stype = (("" + type).match(/function\s(\w+)/))[1];
      ltype = stype.toLowerCase();
      getter = function() {
        return _val;
      };
      setter = function(value) {
        var f, msg, prop;
        switch (ltype) {
          case 'string':
            f = typeof value === 'string';
            break;
          case 'number':
            f = typeof value === 'number';
            break;
          default:
            f = value instanceof type;
        }
        if (f) {
          _val = value;
          return this.update(field, _val);
        } else {
          prop = "" + classname + "." + field;
          msg = "Property '" + prop + "' must to be " + stype + ".";
          throw new Error(msg);
        }
      };
      return Object.defineProperty(this.prototype, field, {
        get: getter,
        set: setter
      });
    };

    /*
      Instantiate one Model instance for each of the items present in data.
    
      And array with 10 items will result in 10 new models, that will be 
      cached into @_collection variable
    
      @param [Object] data  Data to be parsed
    */


    Model._instantiate = function(data) {
      var Factory, classname, model, record, records, _i, _len, _ref;
      Factory = theoricus.core.Factory;
      classname = (("" + this).match(/function\s(\w+)/))[1];
      records = [];
      _ref = [].concat(data);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        model = Factory.model(classname, record);
        records.push(model);
      }
      /*
          When calling the rest service multiple times, the collection variable keeps 
          the old data and duplicate the recordset between a rest call and another one.
          For now, just flush the old collection when instantiate a new model instance
      */

      this._collection = [];
      this._collection = (this._collection || []).concat(records);
      if (records.length === 1) {
        return records[0];
      } else {
        return records;
      }
    };

    return Model;

  })(theoricus.mvc.lib.Binder);

  theoricus.mvc.View = (function() {
    var Factory;

    function View() {
      this.find = __bind(this.find, this);

      this.set_triggers = __bind(this.set_triggers, this);

      this.render = __bind(this.render, this);

    }

    Factory = null;

    View.prototype.el = null;

    View.prototype.classpath = null;

    View.prototype.classname = null;

    View.prototype.namespace = null;

    View.prototype.process = null;

    /*
      @param [theoricus.Theoricus] @the   Shortcut for app's instance
    */


    View.prototype._boot = function(the) {
      this.the = the;
      Factory = this.the.factory;
      return this;
    };

    /*
      @param [Object] @data   Data to be passed to the template
      @param [Object] @el     Element where the view will be "attached/appended"
    */


    View.prototype.render = function(data, el, template) {
      var api, dom, tmpl_folder, tmpl_name;
      this.data = data != null ? data : {};
      if (el == null) {
        el = this.process.route.el;
      }
      if (template == null) {
        template = null;
      }
      if (typeof this.before_render === "function") {
        this.before_render(this.data);
      }
      if (!this.el) {
        api = this.process.route.api;
        this.el = $(el);
        if (template === null) {
          tmpl_folder = this.namespace.replace(/\./g, '/');
          tmpl_name = this.classname.underscore();
          template = Factory.template("" + tmpl_folder + "/" + tmpl_name);
        }
        if (template != null) {
          dom = template(this.data);
        }
        dom = this.el.append(dom);
        if (this.data instanceof theoricus.mvc.Model) {
          this.data.bind(dom, !this.the.config.autobind);
        }
      }
      if (typeof this.set_triggers === "function") {
        this.set_triggers();
      }
      if (typeof this.after_render === "function") {
        this.after_render(this.data);
      }
      /*
          In case you define an "on_resize" handler it will be automatically 
          binded and triggered
      */

      if (this.on_resize != null) {
        $(window).unbind('resize', this.on_resize);
        $(window).bind('resize', this.on_resize);
        return this.on_resize();
      }
    };

    /*
      In case you defined @events in your view they will be automatically binded
    */


    View.prototype.set_triggers = function() {
      var all, ev, funk, sel, _ref, _ref1, _results;
      if (!(this.events != null)) {
        return;
      }
      _ref = this.events;
      _results = [];
      for (sel in _ref) {
        funk = _ref[sel];
        _ref1 = sel.match(/(.*)[\s|\t]+([\S]+)$/m), all = _ref1[0], sel = _ref1[1], ev = _ref1[2];
        (this.el.find(sel)).unbind(ev, null, this[funk]);
        _results.push((this.el.find(sel)).bind(ev, null, this[funk]));
      }
      return _results;
    };

    /*
      Destroy the view after the 'out' animation, the default behavior is to just
      empty it's container element.
    
      before_destroy will be called just before emptying it.
    */


    View.prototype.destroy = function() {
      if (this.on_resize != null) {
        $(window).unbind('resize', this.on_resize);
      }
      if (typeof this.before_destroy === "function") {
        this.before_destroy();
      }
      return this.el.empty();
    };

    /*
      Should execute view transition in.
    
      In case you transition isn't syncoronous ( i.e. has animation )
      you should execute the method "shout" given as argument.
    
      It will it will return a callback which will notify the current process
      your view just got rendered ( i.e. animation finished )
    
      @param [Function] shout Return a framework "continue signal"
    
      NOTE: If you execute shout, and then cancel your transition, the framework
      will never now your view finished the transition in
    */


    View.prototype["in"] = function(shout) {
      var enabled_transitions;
      if (typeof this.before_in === "function") {
        this.before_in();
      }
      enabled_transitions = this.the.config.enable_auto_transitions;
      enabled_transitions &= !this.the.config.disable_transitions;
      if (!enabled_transitions) {
        return;
      }
      this.el.css("opacity", 0);
      return this.el.animate({
        opacity: 1
      }, 600, typeof shout === "function" ? shout('view ') : void 0);
    };

    /*
      Should execute view transition out.
    
      In case you transition isn't syncoronous ( i.e. has animation )
      you should execute the method "shout" given as argument.
    
      It will it will return a callback which will notify the current process
      your view just got rendered ( i.e. animation finished )
    
      @param [Function] shout Return a framework "continue signal"
    
      NOTE: If you execute shout, and then cancel your transition, the framework
      will never now your view finished the transition in
    */


    View.prototype.out = function(shout) {
      var enabled_transitions;
      if (typeof this.before_out === "function") {
        this.before_out();
      }
      enabled_transitions = this.the.config.enable_auto_transitions;
      enabled_transitions &= !this.the.config.disable_transitions;
      if (!enabled_transitions) {
        return;
      }
      return this.el.animate({
        opacity: 0
      }, 300, typeof shout === "function" ? shout('view') : void 0);
    };

    /*
      Shortcut for application navigate
    
      @param [String] url URL to navigate
    */


    View.prototype.navigate = function(url, trigger, replace) {
      if (trigger == null) {
        trigger = true;
      }
      if (replace == null) {
        replace = false;
      }
      return this.the.processes.router.navigate(url, trigger, replace);
    };

    /*
      Shortcut for Factory.view method
    
      @param [String] path    Path to view file
    */


    View.prototype.view = function(path) {
      return Factory.view(path, this.process);
    };

    /*
      Shortcut for Factory.template method
    
      @param [String] url Path to template file
    */


    View.prototype.template = function(path) {
      return Factory.template(path);
    };

    /*
      instantiates a view, render on container passing current data
    */


    View.prototype.require = function(view, container, data, template) {
      if (data == null) {
        data = this.data;
      }
      view = this.view(view);
      if (container) {
        if (container instanceof String) {
          container = this.el.find(container);
        }
        if (!(container instanceof $)) {
          container = $(container);
        }
        view.render(data, this.el.find(container, template));
      }
      return view;
    };

    View.prototype.find = function(selector) {
      return this.el.find(selector);
    };

    /*
      Takes a selector or array of selectors
      Adds click event handler to each of them
    */


    View.prototype.link = function(a_selector) {
      var _this = this;
      return $(a_selector).each(function(index, selector) {
        return _this.find(selector).click(function(event) {
          _this.navigate($(event.delegateTarget).attr('href'));
          return false;
        });
      });
    };

    return View;

  })();

  theoricus.mvc.Controller = (function() {
    var Fetcher, Model, View, _ref;

    function Controller() {}

    Fetcher = theoricus.mvc.lib.Fetcher;

    _ref = theoricus.mvc, Model = _ref.Model, View = _ref.View;

    /*
      @param [theoricus.Theoricus] @the   Shortcut for app's instance
    */


    Controller.prototype._boot = function(the) {
      this.the = the;
      return this;
    };

    /*
      Renders view
    
      @param [String] path  path to view on the app tree
      @param [String] data  data to be rendered on the template
      @param [Object] element element where it will be rendered, defaults to @process.route.el
    */


    Controller.prototype.render = function(path, data, el, view) {
      var shout, view_didnt_shout,
        _this = this;
      if (el == null) {
        el = this.process.route.el;
      }
      view = view || this.the.factory.view(path, this.process);
      if (data instanceof Fetcher) {
        if (data.loaded) {
          view.render(data.records, el);
        } else {
          data.onload = function(records) {
            return _this.render(path, records, el, view);
          };
        }
      } else {
        view.render(data, el);
        view_didnt_shout = true;
        shout = function(type) {
          if (view_didnt_shout === false) {
            console.warn('You can only request one shout.');
            return;
          }
          view_didnt_shout = false;
          return view.process.after_run;
        };
        view["in"](shout);
        if (view_didnt_shout) {
          shout()('automaticaly');
        }
      }
      return view;
    };

    /*
      You should call this in order to ignore the render logic of the
      application, as in, manage the rendering / transitions yourself
    */


    Controller.prototype.rendered = function() {
      this.process.no_render = true;
      return this.process.after_run();
    };

    Controller.prototype.destroy = function(after_destroy) {
      var action_name, controller_name, msg, shout, view_didnt_shout,
        _this = this;
      if (this.process.no_render) {
        after_destroy();
        return;
      }
      if (!(this.view instanceof theoricus.mvc.View)) {
        controller_name = this.route.api.controller_name.camelize();
        action_name = this.route.api.action_name;
        msg = "Can't destroy View because it isn't a proper View instance. ";
        msg += "Check your `" + controller_name + "` controller, the action ";
        msg += "`" + action_name + "` must return a View instance.";
        console.error(msg);
        return;
      }
      view_didnt_shout = true;
      shout = function(type) {
        if (view_didnt_shout === false) {
          console.warn('You can only request one shout.');
          return;
        }
        view_didnt_shout = false;
        return function() {
          _this.view.destroy();
          return typeof _this.after_destroy === "function" ? _this.after_destroy() : void 0;
        };
      };
      this.view.out(shout);
      if (view_didnt_shout) {
        return shout()('automaticaly');
      }
    };

    return Controller;

  })();

  theoricus.config.Config = (function() {

    Config.prototype.animate_at_startup = false;

    Config.prototype.enable_auto_transitions = true;

    Config.prototype.app_name = null;

    Config.prototype.no_push_state = null;

    Config.prototype.disable_transitions = null;

    /*
      @param [theoricus.Theoricus] @the   Shortcut for app's instance
    */


    function Config(the) {
      var _ref, _ref1, _ref2;
      this.the = the;
      this.app_name = "app";
      this.disable_transitions = (_ref = app.config.disable_transitions) != null ? _ref : false;
      this.animate_at_startup = (_ref1 = app.config.animate_at_startup) != null ? _ref1 : true;
      this.enable_auto_transitions = (_ref2 = app.config.enable_auto_transitions) != null ? _ref2 : true;
      this.vendors = app.config.vendors;
    }

    return Config;

  })();

  theoricus.core.Factory = (function() {
    var Controller, Model, View, _is, _ref;

    _ref = theoricus.mvc, Model = _ref.Model, View = _ref.View, Controller = _ref.Controller;

    Factory.prototype.controllers = {};

    /*
      @param [theoricus.Theoricus] @the   Shortcut for app's instance
    */


    function Factory(the) {
      this.the = the;
    }

    _is = function(src, comparison) {
      while (src = src.__proto__) {
        if (src instanceof comparison) {
          return true;
        }
        src = src.__proto__;
      }
      return false;
    };

    Factory.model = Factory.prototype.model = function(name, init) {
      var classname, classpath, klass, model, prop, value;
      if (init == null) {
        init = {};
      }
      classname = theoricus.utils.StringUtil.camelize(name);
      classpath = "app.models." + name;
      if ((klass = app.models[classname]) == null) {
        console.error('Model not found: ' + classpath);
        console.error('just tried classname: ' + classname);
      } else {
        if (!((model = new klass(init)) instanceof Model)) {
          console.error("" + classpath + " is not a Model instance - you probably forgot to extend thoricus.mvc.Model");
        }
      }
      if (model == null) {
        model = new app.AppModel(init);
      }
      model.classpath = classpath;
      model.classname = classname;
      for (prop in init) {
        value = init[prop];
        model[prop] = value;
      }
      return model;
    };

    /*
      Returns an instantiated [theoricus.mvc.View] View
    
      @param [String] path  path to the view file
      @param [theoricus.core.Process] process process responsible for the view
    */


    Factory.prototype.view = function(path, process) {
      var classname, classpath, klass, namespace, p, parts, view;
      if (process == null) {
        process = null;
      }
      path = path.replace(/^\/|\/$/g, '');
      klass = app.views;
      classpath = "app.views";
      classname = (parts = path.split('/')).pop();
      classname = theoricus.utils.StringUtil.camelize(classname);
      namespace = path.split('/');
      namespace.pop();
      namespace = namespace.join('.');
      while (parts.length) {
        classpath += "." + (p = parts.shift());
        if (klass[p] != null) {
          klass = klass[p];
        } else {
          console.error("Namespace '" + p + " not found in app.views...");
        }
      }
      classpath += "." + classname;
      if ((klass = klass[classname]) == null) {
        console.error('View not found: ' + classpath);
      } else {
        if (!((view = new klass) instanceof View)) {
          console.error("" + classpath + " is not a View instance - you probably forgot to extend thoricus.mvc.View");
        }
      }
      if (view == null) {
        view = new app.AppView;
      }
      view._boot(this.the);
      view.classpath = classpath;
      view.classname = classname;
      view.namespace = namespace;
      if (process != null) {
        view.process = process;
      }
      return view;
    };

    /*
      Returns an instantiated [theoricus.mvc.Controller] Controller
    
      @param [String] name  controller name
    */


    Factory.prototype.controller = function(name) {
      var classname, classpath, controller, klass;
      classname = classname = theoricus.utils.StringUtil.camelize(name);
      classpath = "app.controllers." + classname;
      if (this.controllers[classname] != null) {
        return this.controllers[classname];
      } else {
        if ((klass = app.controllers[classname]) == null) {
          console.error('Controller not found: ' + classpath);
        }
        if (!((controller = new klass) instanceof Controller)) {
          console.error("" + classpath + " is not a Controller instance - you probably forgot to extend thoricus.mvc.Controller");
        }
        controller.classpath = classpath;
        controller.classname = classname;
        controller._boot(this.the);
        return this.controllers[classname] = controller;
      }
    };

    /*
      Returns a compiled jade template
    
      @param [String] path  path to the template
    */


    Factory.template = Factory.prototype.template = function(path) {
      path = path.replace(/^\/|\/$/g, '');
      if (app.templates[path] != null) {
        return app.templates[path];
      }
      if (app.templates['components/' + path] != null) {
        return app.templates['components/' + path];
      }
      return console.error("Factory::template not found for " + path);
    };

    return Factory;

  })();

  /*
  Responsible for "running" a [theoricus.core.Route] Route
  
   @author {https://github.com/arboleya arboleya}
  */


  theoricus.core.Process = (function() {
    var StringUtil;

    StringUtil = theoricus.utils.StringUtil;

    Process.prototype.controller = null;

    Process.prototype.route = null;

    Process.prototype.no_render = false;

    /*
      Instantiate controller responsible for the route
      
      @param [theoricus.Theoricus] @the   Shortcut for current app's instace
      @route [theoricus.core.Route] @route Route responsible for the process
    */


    function Process(the, route) {
      this.the = the;
      this.route = route;
      this.controller = this.the.factory.controller(this.route.api.controller_name);
    }

    /*
      Executes controller's action, in case it isn't declared executes an 
      standard one.
      
      @return [theoricus.mvc.View] view
    */


    Process.prototype.run = function(after_run) {
      var action, controller_name, msg,
        _this = this;
      if (!this.controller[action = this.route.api.action_name]) {
        /*
              Build a default action ( renders the view passing all model records as data)
              in case the controller doesn't have an action for current process call
        */

        this.controller[action] = function() {
          var api, model, model_name, view_folder, view_name;
          api = _this.route.api;
          model_name = api.controller_name.singularize().camelize();
          model = app.models[model_name];
          view_folder = api.controller_name.singularize();
          view_name = api.action_name;
          if ((model != null ? model.all : void 0) != null) {
            return _this.controller.render("" + view_folder + "/" + view_name, model.all());
          } else {
            return _this.controller.render("" + view_folder + "/" + view_name, null);
          }
        };
      }
      this.controller.process = this;
      this.after_run = function() {
        _this.controller.process = null;
        return after_run();
      };
      this.view = this.controller[action].apply(this.controller, this.route.api.params);
      if (this.no_render) {
        return;
      }
      if (!(this.view instanceof theoricus.mvc.View)) {
        controller_name = this.route.api.controller_name.camelize();
        msg = "Check your `" + controller_name + "` controller, the action ";
        msg += "`" + action + "` must return a View instance.";
        return console.error(msg);
      }
    };

    /*
      Executes view's transition "out" method, wait for its end
      empty the dom element and then call a callback
      
      @return [theoricus.mvc.View] view
    */


    Process.prototype.destroy = function(after_destroy) {
      var _this = this;
      this.controller.process = this;
      this.after_destroy = function() {
        _this.controller.process = null;
        return after_destroy();
      };
      return this.controller.destroy(this.after_destroy);
    };

    return Process;

  })();

  theoricus.core.Processes = (function() {
    var ArrayUtil, Factory;

    Factory = null;

    ArrayUtil = theoricus.utils.ArrayUtil;

    Processes.prototype.locked = false;

    Processes.prototype.disable_transitions = null;

    Processes.prototype.active_processes = [];

    Processes.prototype.dead_processes = [];

    Processes.prototype.pending_processes = [];

    /*
      @param [theoricus.Theoricus] @the   Shortcut for app's instance
    */


    function Processes(the) {
      var _this = this;
      this.the = the;
      this._run_pending_processes = __bind(this._run_pending_processes, this);

      this._destroy_dead_processes = __bind(this._destroy_dead_processes, this);

      this._on_router_change = __bind(this._on_router_change, this);

      Factory = this.the.factory;
      if (this.the.config.animate_at_startup === false) {
        this.disable_transitions = this.the.config.disable_transitions;
        this.the.config.disable_transitions = true;
      }
      $(document).ready(function() {
        return _this.router = new theoricus.core.Router(_this.the, _this._on_router_change);
      });
    }

    /*
      1st
    
      Triggered on router chance
    
      @param [theoricus.core.Router] route
    */


    Processes.prototype._on_router_change = function(route) {
      var process;
      if (this.locked) {
        return this.router.navigate(this.last_process.route.location, 0, 1);
      }
      process = new theoricus.core.Process(this.the, route);
      this.last_process = process;
      this.locked = true;
      this.the.crawler.is_rendered = false;
      this._filter_pending_processes(process);
      this._filter_dead_processes();
      return this._destroy_dead_processes();
    };

    /*
      2nd
    
      Check if target scope ( for rendering ) exists
      If yes adds it to pending_process list
      If no  throws an error
    
      @param [theoricus.core.Process] process
    */


    Processes.prototype._filter_pending_processes = function(process) {
      var found, route, search, _results;
      this.pending_processes = [process];
      _results = [];
      while (process && process.route.at) {
        route = ArrayUtil.find(this.router.routes, {
          match: process.route.at
        });
        if (route != null) {
          process = new theoricus.core.Process(this.the, route.item.clone());
          search = {
            route: {
              match: process.route.match
            }
          };
          found = ArrayUtil.find(this.active_processes, search) != null;
          if (found) {
            process.active = true;
          }
          this.pending_processes.push(process);
          if (route.target_route === null) {
            break;
          } else {
            _results.push(void 0);
          }
        } else {
          console.log("ERROR: Dependency not found at=" + process.route.at);
          console.log(process.route);
          break;
        }
      }
      return _results;
    };

    /*
      3th
    
      Check which of the routes needs to stay active in order to render
      current process.
      The ones that doesn't, are pushed to dead_processes
    */


    Processes.prototype._filter_dead_processes = function() {
      var active, found, location, search, _i, _len, _ref, _results;
      this.dead_processes = [];
      _ref = this.active_processes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        active = _ref[_i];
        search = {
          route: {
            match: active.route.match
          }
        };
        found = ArrayUtil.find(this.pending_processes, search);
        if (found != null) {
          location = found.item.route.location;
          if ((location != null) && location !== active.route.location) {
            _results.push(this.dead_processes.push(active));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(this.dead_processes.push(active));
        }
      }
      return _results;
    };

    /*
      4th
    
      Destroy dead processes one by one ( passing the next destroy as callback )
      then run the pending proccess
    */


    Processes.prototype._destroy_dead_processes = function() {
      var process, search;
      if (this.dead_processes.length) {
        process = this.dead_processes.pop();
        process.destroy(this._destroy_dead_processes);
        search = {
          route: {
            match: process.route.match
          }
        };
        return ArrayUtil["delete"](this.active_processes, search);
      } else {
        return this._run_pending_processes();
      }
    };

    /*
      5th
      Execute run method of pending processes that are not active
    */


    Processes.prototype._run_pending_processes = function() {
      var found, process, search;
      if (this.pending_processes.length) {
        process = this.pending_processes.pop();
        search = {
          route: {
            match: process.route.match
          }
        };
        found = ArrayUtil.find(this.active_processes, search) != null;
        if (!found || !process.active) {
          this.active_processes.push(process);
          return process.run(this._run_pending_processes);
        } else {
          return this._run_pending_processes();
        }
      } else {
        this.locked = false;
        this.the.crawler.is_rendered = true;
        if (this.disable_transitions != null) {
          this.the.config.disable_transitions = this.disable_transitions;
          return this.disable_transitions = null;
        }
      }
    };

    return Processes;

  })();

  theoricus.Theoricus = (function() {

    Theoricus.prototype.app = null;

    Theoricus.prototype.base_path = '';

    Theoricus.prototype.root = null;

    Theoricus.prototype.factory = null;

    Theoricus.prototype.config = null;

    Theoricus.prototype.processes = null;

    Theoricus.prototype.crawler = (window.crawler = {
      is_rendered: false
    });

    function Theoricus() {
      this.config = new theoricus.config.Config(this);
      this.factory = new theoricus.core.Factory(this);
    }

    Theoricus.prototype.start = function() {
      return this.processes = new theoricus.core.Processes(this);
    };

    return Theoricus;

  })();

}).call(this);
