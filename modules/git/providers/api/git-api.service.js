const a161_0x9f45e1=a161_0x4eaa;function a161_0x4eaa(_0x32469d,_0xe2a5c5){const _0x4a2378=a161_0x615b();return a161_0x4eaa=function(_0x31096c,_0x4d14ed){_0x31096c=_0x31096c-0xb8;let _0x615bf6=_0x4a2378[_0x31096c];return _0x615bf6;},a161_0x4eaa(_0x32469d,_0xe2a5c5);}function a161_0x615b(){const _0x32831e=['createRequest','search','__esModule','../../../shared/utils/request','256sFgNuN','numberOfRequestsInQueue','toString','requestWrapper','9863PIADzR','11uhuQgK','use','defineProperty','5434965rrmDSc','request','proxyOptions','7806rypgUD','1209763IZwJHM','interceptors','provider','apply','16dXPWQO','__importDefault','3225818gVVPng','axios','(((.+)+)+)+$','GitApiService','default','getHeaders','7673710HaBpiS','create','credentials','1071153qenYZi','MAX_REQUEST_PER_HOUR','8061jxshEa','timers/promises'];a161_0x615b=function(){return _0x32831e;};return a161_0x615b();}(function(_0x169004,_0x58d5d9){const _0x114eac=a161_0x4eaa,_0x2404c3=_0x169004();while(!![]){try{const _0x594c3b=-parseInt(_0x114eac(0xc4))/0x1+-parseInt(_0x114eac(0xca))/0x2+parseInt(_0x114eac(0xd5))/0x3*(-parseInt(_0x114eac(0xb8))/0x4)+parseInt(_0x114eac(0xc0))/0x5+parseInt(_0x114eac(0xc3))/0x6*(parseInt(_0x114eac(0xbc))/0x7)+-parseInt(_0x114eac(0xc8))/0x8*(-parseInt(_0x114eac(0xd3))/0x9)+parseInt(_0x114eac(0xd0))/0xa*(parseInt(_0x114eac(0xbd))/0xb);if(_0x594c3b===_0x58d5d9)break;else _0x2404c3['push'](_0x2404c3['shift']());}catch(_0x256b31){_0x2404c3['push'](_0x2404c3['shift']());}}}(a161_0x615b,0xe3433));const a161_0x4d14ed=(function(){let _0x29fc67=!![];return function(_0x21ddad,_0x366fe0){const _0x58f5ee=_0x29fc67?function(){const _0x53ea5e=a161_0x4eaa;if(_0x366fe0){const _0x4eef64=_0x366fe0[_0x53ea5e(0xc7)](_0x21ddad,arguments);return _0x366fe0=null,_0x4eef64;}}:function(){};return _0x29fc67=![],_0x58f5ee;};}()),a161_0x31096c=a161_0x4d14ed(this,function(){const _0x3d3f7f=a161_0x4eaa;return a161_0x31096c[_0x3d3f7f(0xba)]()[_0x3d3f7f(0xd8)](_0x3d3f7f(0xcc))['toString']()['constructor'](a161_0x31096c)[_0x3d3f7f(0xd8)](_0x3d3f7f(0xcc));});a161_0x31096c();'use strict';var __importDefault=this&&this[a161_0x9f45e1(0xc9)]||function(_0x292373){const _0x53fe8d=a161_0x9f45e1;return _0x292373&&_0x292373[_0x53fe8d(0xd9)]?_0x292373:{'default':_0x292373};};Object[a161_0x9f45e1(0xbf)](exports,a161_0x9f45e1(0xd9),{'value':!![]}),exports[a161_0x9f45e1(0xcd)]=void 0x0;const axios_1=__importDefault(require(a161_0x9f45e1(0xcb))),promises_1=require(a161_0x9f45e1(0xd6)),request_1=require(a161_0x9f45e1(0xda));class GitApiService{constructor(_0x19dc76,_0x23cfd2){const _0x3ffb52=a161_0x9f45e1;this[_0x3ffb52(0xc6)]=_0x19dc76,this[_0x3ffb52(0xd2)]=_0x23cfd2,this['numberOfRequestsInQueue']=0x0,this[_0x3ffb52(0xd4)]=-0x1,this[_0x3ffb52(0xc1)]=this[_0x3ffb52(0xd7)]();}get['requestInterval'](){const _0x41bd21=a161_0x9f45e1;return 0x3c*0x3c*0x3e8/this[_0x41bd21(0xd4)];}[a161_0x9f45e1(0xd7)](_0xf70b19){const _0x5b82e9=a161_0x9f45e1,_0x513b20=axios_1[_0x5b82e9(0xce)][_0x5b82e9(0xd1)]({'baseURL':_0xf70b19||this[_0x5b82e9(0xd2)]['getBaseUrl'](),'headers':this[_0x5b82e9(0xcf)](),...(0x0,request_1[_0x5b82e9(0xc2)])()});return _0x513b20[_0x5b82e9(0xc5)][_0x5b82e9(0xc1)][_0x5b82e9(0xbe)](async _0x2b08ae=>{const _0x1c057e=_0x5b82e9,_0x496ab3=this[_0x1c057e(0xb9)]++*this['requestInterval'];return await(0x0,promises_1['setTimeout'])(_0x496ab3),this['numberOfRequestsInQueue']-=0x1,_0x2b08ae;}),(0x0,request_1[_0x5b82e9(0xbb)])(_0x513b20);}}exports[a161_0x9f45e1(0xcd)]=GitApiService;