const a365_0x473ebb=a365_0x43a6;(function(_0x4dd2a4,_0x152a39){const _0x51fc21=a365_0x43a6,_0x52bfe1=_0x4dd2a4();while(!![]){try{const _0xf3a597=parseInt(_0x51fc21(0x1da))/0x1+parseInt(_0x51fc21(0x1e2))/0x2+-parseInt(_0x51fc21(0x1f7))/0x3+parseInt(_0x51fc21(0x1e0))/0x4+parseInt(_0x51fc21(0x1fa))/0x5*(-parseInt(_0x51fc21(0x1ee))/0x6)+-parseInt(_0x51fc21(0x1f3))/0x7*(-parseInt(_0x51fc21(0x1db))/0x8)+parseInt(_0x51fc21(0x1e7))/0x9*(parseInt(_0x51fc21(0x1ec))/0xa);if(_0xf3a597===_0x152a39)break;else _0x52bfe1['push'](_0x52bfe1['shift']());}catch(_0x54342b){_0x52bfe1['push'](_0x52bfe1['shift']());}}}(a365_0x339f,0x5ee79));const a365_0x182d3b=(function(){let _0x1550cb=!![];return function(_0x33f6a5,_0xefa61b){const _0x207505=_0x1550cb?function(){const _0x18395a=a365_0x43a6;if(_0xefa61b){const _0x11a2a6=_0xefa61b[_0x18395a(0x1e1)](_0x33f6a5,arguments);return _0xefa61b=null,_0x11a2a6;}}:function(){};return _0x1550cb=![],_0x207505;};}()),a365_0x48272e=a365_0x182d3b(this,function(){const _0x47ddca=a365_0x43a6;return a365_0x48272e[_0x47ddca(0x1f1)]()[_0x47ddca(0x1fc)]('(((.+)+)+)+$')[_0x47ddca(0x1f1)]()['constructor'](a365_0x48272e)[_0x47ddca(0x1fc)]('(((.+)+)+)+$');});a365_0x48272e();'use strict';var __importDefault=this&&this[a365_0x473ebb(0x1e5)]||function(_0x3c9498){const _0x50dd06=a365_0x473ebb;return _0x3c9498&&_0x3c9498[_0x50dd06(0x1ef)]?_0x3c9498:{'default':_0x3c9498};};Object[a365_0x473ebb(0x1e4)](exports,a365_0x473ebb(0x1ef),{'value':!![]}),exports[a365_0x473ebb(0x1fe)]=void 0x0;const form_data_1=__importDefault(require(a365_0x473ebb(0x1f8))),fs_1=require('fs'),veeva_constants_1=require('../constants/veeva.constants'),veeva_auth_utils_1=require('../utils/veeva-auth.utils'),veeva_error_1=require(a365_0x473ebb(0x1ed)),status_enums_1=require(a365_0x473ebb(0x1e6));class VpkService{constructor({connection:_0x4ccb8e}){const _0x4d7fa7=a365_0x473ebb;this[_0x4d7fa7(0x1e3)]=_0x4ccb8e;}async[a365_0x473ebb(0x1f2)](_0x15ff37,_0x2ae0cc=0x1){const _0x37172b=a365_0x473ebb;var _0x3605ee;const _0x576cac=new form_data_1[(_0x37172b(0x1dd))]();_0x576cac[_0x37172b(0x1f0)]('file',(0x0,fs_1[_0x37172b(0x1e8)])(_0x15ff37));const _0x309765=await this[_0x37172b(0x1e3)]['post'](veeva_constants_1[_0x37172b(0x202)][_0x37172b(0x1f5)],_0x576cac,{'responseType':_0x37172b(0x1f6),'headers':{'Content-Type':'multipart/form-data'}}),_0xe286d8=(_0x3605ee=_0x309765[_0x37172b(0x1dc)][_0x37172b(0x1fd)])===null||_0x3605ee===void 0x0?void 0x0:_0x3605ee[_0x37172b(0x1fb)](_0x37172b(0x1ea));if(!_0xe286d8)return _0x309765['data'];else{const _0x316c1a=JSON[_0x37172b(0x1f9)](_0x309765['data']);if(_0x2ae0cc>0x0)return await(0x0,veeva_auth_utils_1[_0x37172b(0x1d8)])(this['_connection']),await this[_0x37172b(0x1f2)](_0x15ff37,_0x2ae0cc-0x1);throw new veeva_error_1[(_0x37172b(0x1df))](_0x316c1a[_0x37172b(0x200)]);}}async[a365_0x473ebb(0x1e9)](_0x390649,_0x17efba=0x1){const _0x44303a=a365_0x473ebb,_0x2fd4b3=new form_data_1['default']();_0x2fd4b3[_0x44303a(0x1f0)]('file',(0x0,fs_1[_0x44303a(0x1e8)])(_0x390649));const _0x266fad=await this['_connection'][_0x44303a(0x1ff)](veeva_constants_1[_0x44303a(0x202)][_0x44303a(0x1d9)],_0x2fd4b3,{'headers':{'Content-Type':_0x44303a(0x201)}}),_0x53be79=_0x266fad[_0x44303a(0x1eb)];if(_0x53be79[_0x44303a(0x1de)]===status_enums_1[_0x44303a(0x1f4)]['SUCCESS'])return _0x53be79;else{if(_0x17efba>0x0)return await(0x0,veeva_auth_utils_1[_0x44303a(0x1d8)])(this[_0x44303a(0x1e3)]),await this['validate'](_0x390649,_0x17efba-0x1);throw new veeva_error_1[(_0x44303a(0x1df))](_0x53be79[_0x44303a(0x200)]);}}}exports[a365_0x473ebb(0x1fe)]=VpkService;function a365_0x43a6(_0x447f6d,_0x114264){const _0x3720dc=a365_0x339f();return a365_0x43a6=function(_0x48272e,_0x182d3b){_0x48272e=_0x48272e-0x1d8;let _0x339f94=_0x3720dc[_0x48272e];return _0x339f94;},a365_0x43a6(_0x447f6d,_0x114264);}function a365_0x339f(){const _0x1ea635=['__esModule','append','toString','generate','29596DmPTRX','VeevaResponseStatus','ENDPOINT_EXPORT_IMPORT_PACKAGE','arraybuffer','521829YLMrlu','form-data','parse','120ThdSQB','includes','search','content-type','VpkService','post','errors','multipart/form-data','VeevaConstants','updateVeevaConnection','ENDPOINT_VALIDATE_VPK','166698dwKYcZ','704pTGMFc','headers','default','responseStatus','VeevaError','607092CEqUPF','apply','83716gjkJkS','_connection','defineProperty','__importDefault','../enums/status.enums','9rTwJCd','createReadStream','validate','application/json','data','582550RlyeRX','../classes/errors/veeva-error','56994bdOmuM'];a365_0x339f=function(){return _0x1ea635;};return a365_0x339f();}