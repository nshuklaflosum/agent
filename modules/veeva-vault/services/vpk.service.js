const a364_0x7bd019=a364_0x4bb0;(function(_0x5f3bb1,_0x20a312){const _0x405990=a364_0x4bb0,_0x4f39ea=_0x5f3bb1();while(!![]){try{const _0x5b0023=-parseInt(_0x405990(0x16a))/0x1+parseInt(_0x405990(0x17a))/0x2+-parseInt(_0x405990(0x158))/0x3*(parseInt(_0x405990(0x16b))/0x4)+-parseInt(_0x405990(0x179))/0x5*(parseInt(_0x405990(0x16e))/0x6)+parseInt(_0x405990(0x174))/0x7*(parseInt(_0x405990(0x173))/0x8)+parseInt(_0x405990(0x154))/0x9+parseInt(_0x405990(0x157))/0xa;if(_0x5b0023===_0x20a312)break;else _0x4f39ea['push'](_0x4f39ea['shift']());}catch(_0x2c9808){_0x4f39ea['push'](_0x4f39ea['shift']());}}}(a364_0x101e,0x632a5));const a364_0x13b631=(function(){let _0xd747b4=!![];return function(_0x48c00c,_0x136e0f){const _0xa0914b=_0xd747b4?function(){const _0x29a43c=a364_0x4bb0;if(_0x136e0f){const _0x6d70d0=_0x136e0f[_0x29a43c(0x171)](_0x48c00c,arguments);return _0x136e0f=null,_0x6d70d0;}}:function(){};return _0xd747b4=![],_0xa0914b;};}()),a364_0x34be23=a364_0x13b631(this,function(){const _0x261f66=a364_0x4bb0;return a364_0x34be23['toString']()[_0x261f66(0x15e)](_0x261f66(0x168))[_0x261f66(0x15d)]()['constructor'](a364_0x34be23)['search'](_0x261f66(0x168));});a364_0x34be23();'use strict';var __importDefault=this&&this[a364_0x7bd019(0x156)]||function(_0x80c14){const _0x3e635f=a364_0x7bd019;return _0x80c14&&_0x80c14[_0x3e635f(0x172)]?_0x80c14:{'default':_0x80c14};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a364_0x7bd019(0x161)]=void 0x0;const form_data_1=__importDefault(require('form-data')),fs_1=require('fs'),veeva_constants_1=require('../constants/veeva.constants'),veeva_auth_utils_1=require(a364_0x7bd019(0x17c)),veeva_error_1=require(a364_0x7bd019(0x162)),status_enums_1=require('../enums/status.enums');class VpkService{constructor({connection:_0x23c9fd}){this['_connection']=_0x23c9fd;}async[a364_0x7bd019(0x176)](_0x3c1d7d,_0x58c23d=0x1){const _0x11a364=a364_0x7bd019;var _0x14ffce;const _0x15324b=new form_data_1[(_0x11a364(0x16f))]();_0x15324b[_0x11a364(0x166)](_0x11a364(0x15c),(0x0,fs_1[_0x11a364(0x178)])(_0x3c1d7d));const _0x6f8544=await this['_connection'][_0x11a364(0x163)](veeva_constants_1[_0x11a364(0x155)][_0x11a364(0x15a)],_0x15324b,{'responseType':_0x11a364(0x160),'headers':{'Content-Type':_0x11a364(0x177)}}),_0x1b2183=(_0x14ffce=_0x6f8544[_0x11a364(0x15f)][_0x11a364(0x165)])===null||_0x14ffce===void 0x0?void 0x0:_0x14ffce['includes'](_0x11a364(0x17b));if(!_0x1b2183)return _0x6f8544[_0x11a364(0x16d)];else{const _0x22e97c=JSON[_0x11a364(0x175)](_0x6f8544[_0x11a364(0x16d)]);if(_0x58c23d>0x0)return await(0x0,veeva_auth_utils_1['updateVeevaConnection'])(this['_connection']),await this['generate'](_0x3c1d7d,_0x58c23d-0x1);throw new veeva_error_1[(_0x11a364(0x170))](_0x22e97c[_0x11a364(0x16c)]);}}async[a364_0x7bd019(0x15b)](_0x4286d7,_0x1e89ba=0x1){const _0x3d5aab=a364_0x7bd019,_0x1d2966=new form_data_1[(_0x3d5aab(0x16f))]();_0x1d2966[_0x3d5aab(0x166)](_0x3d5aab(0x15c),(0x0,fs_1[_0x3d5aab(0x178)])(_0x4286d7));const _0x52a4cb=await this['_connection'][_0x3d5aab(0x163)](veeva_constants_1[_0x3d5aab(0x155)][_0x3d5aab(0x169)],_0x1d2966,{'headers':{'Content-Type':_0x3d5aab(0x177)}}),_0x17a138=_0x52a4cb[_0x3d5aab(0x16d)];if(_0x17a138[_0x3d5aab(0x164)]===status_enums_1['VeevaResponseStatus'][_0x3d5aab(0x159)])return _0x17a138;else{if(_0x1e89ba>0x0)return await(0x0,veeva_auth_utils_1[_0x3d5aab(0x167)])(this['_connection']),await this[_0x3d5aab(0x15b)](_0x4286d7,_0x1e89ba-0x1);throw new veeva_error_1[(_0x3d5aab(0x170))](_0x17a138[_0x3d5aab(0x16c)]);}}}function a364_0x4bb0(_0x4a8c62,_0x4663b9){const _0x45b06f=a364_0x101e();return a364_0x4bb0=function(_0x34be23,_0x13b631){_0x34be23=_0x34be23-0x154;let _0x101e75=_0x45b06f[_0x34be23];return _0x101e75;},a364_0x4bb0(_0x4a8c62,_0x4663b9);}exports['VpkService']=VpkService;function a364_0x101e(){const _0x35b0f3=['63MCEnNj','SUCCESS','ENDPOINT_EXPORT_IMPORT_PACKAGE','validate','file','toString','search','headers','arraybuffer','VpkService','../classes/errors/veeva-error','post','responseStatus','content-type','append','updateVeevaConnection','(((.+)+)+)+$','ENDPOINT_VALIDATE_VPK','734765XqVnYm','109576oYCayp','errors','data','30iZDFPW','default','VeevaError','apply','__esModule','394648RzPAJI','91Xsmtzd','parse','generate','multipart/form-data','createReadStream','700095kAtnRa','298752erKxOB','application/json','../utils/veeva-auth.utils','5187465nVUHSj','VeevaConstants','__importDefault','10492510AxWQoV'];a364_0x101e=function(){return _0x35b0f3;};return a364_0x101e();}