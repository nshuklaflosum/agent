const a408_0x3458e4=a408_0x46d3;(function(_0x5626db,_0x28ab88){const _0x140b09=a408_0x46d3,_0x292647=_0x5626db();while(!![]){try{const _0x8a54b2=parseInt(_0x140b09(0xf2))/0x1*(-parseInt(_0x140b09(0xfb))/0x2)+parseInt(_0x140b09(0xf5))/0x3+-parseInt(_0x140b09(0xf9))/0x4*(parseInt(_0x140b09(0xfd))/0x5)+-parseInt(_0x140b09(0xe9))/0x6*(parseInt(_0x140b09(0xda))/0x7)+parseInt(_0x140b09(0xe0))/0x8*(parseInt(_0x140b09(0xef))/0x9)+-parseInt(_0x140b09(0xdb))/0xa*(-parseInt(_0x140b09(0x101))/0xb)+parseInt(_0x140b09(0xe1))/0xc;if(_0x8a54b2===_0x28ab88)break;else _0x292647['push'](_0x292647['shift']());}catch(_0x23297f){_0x292647['push'](_0x292647['shift']());}}}(a408_0x4925,0xa3489));const a408_0x51f4c1=(function(){let _0x4411e9=!![];return function(_0x2ba4f1,_0x50029d){const _0x56a309=_0x4411e9?function(){const _0x4cac35=a408_0x46d3;if(_0x50029d){const _0x3164db=_0x50029d[_0x4cac35(0xe4)](_0x2ba4f1,arguments);return _0x50029d=null,_0x3164db;}}:function(){};return _0x4411e9=![],_0x56a309;};}()),a408_0xbcfc59=a408_0x51f4c1(this,function(){const _0x13fe43=a408_0x46d3;return a408_0xbcfc59['toString']()['search'](_0x13fe43(0xe8))[_0x13fe43(0xed)]()[_0x13fe43(0xf7)](a408_0xbcfc59)['search'](_0x13fe43(0xe8));});a408_0xbcfc59();'use strict';var __importDefault=this&&this[a408_0x3458e4(0xd5)]||function(_0x1c7e10){const _0x20ed6b=a408_0x3458e4;return _0x1c7e10&&_0x1c7e10[_0x20ed6b(0xf8)]?_0x1c7e10:{'default':_0x1c7e10};};function a408_0x46d3(_0x5a2675,_0xcb6420){const _0x539d5f=a408_0x4925();return a408_0x46d3=function(_0xbcfc59,_0x51f4c1){_0xbcfc59=_0xbcfc59-0xd5;let _0x4925e8=_0x539d5f[_0xbcfc59];return _0x4925e8;},a408_0x46d3(_0x5a2675,_0xcb6420);}function a408_0x4925(){const _0x2fc882=['validate','__importDefault','form-data','default','responseStatus','append','123781EltwiF','4950gTfmXc','VpkService','generate','../classes/errors/veeva-error','file','3769976fTLsZV','30507972qYKgYI','updateVeevaConnection','multipart/form-data','apply','VeevaConstants','arraybuffer','defineProperty','(((.+)+)+)+$','366oklwhP','_connection','SUCCESS','createReadStream','toString','content-type','9CbNTcb','VeevaResponseStatus','VeevaError','393818qildjh','includes','parse','899325EIjyaP','headers','constructor','__esModule','2777188fkEiBq','errors','6qvXgpo','post','5SvGEAs','ENDPOINT_VALIDATE_VPK','data','ENDPOINT_EXPORT_IMPORT_PACKAGE','6886BVwuYz','application/json'];a408_0x4925=function(){return _0x2fc882;};return a408_0x4925();}Object[a408_0x3458e4(0xe7)](exports,a408_0x3458e4(0xf8),{'value':!![]}),exports[a408_0x3458e4(0xdc)]=void 0x0;const form_data_1=__importDefault(require(a408_0x3458e4(0xd6))),fs_1=require('fs'),veeva_constants_1=require('../constants/veeva.constants'),veeva_auth_utils_1=require('../utils/veeva-auth.utils'),veeva_error_1=require(a408_0x3458e4(0xde)),status_enums_1=require('../enums/status.enums');class VpkService{constructor({connection:_0x591d45}){const _0x5e01f5=a408_0x3458e4;this[_0x5e01f5(0xea)]=_0x591d45;}async['generate'](_0x3dcd56,_0x32d6b6=0x1){const _0x4490cb=a408_0x3458e4;var _0x2f8470;const _0x48aa6d=new form_data_1[(_0x4490cb(0xd7))]();_0x48aa6d[_0x4490cb(0xd9)](_0x4490cb(0xdf),(0x0,fs_1[_0x4490cb(0xec)])(_0x3dcd56));const _0x3ef9a7=await this[_0x4490cb(0xea)][_0x4490cb(0xfc)](veeva_constants_1[_0x4490cb(0xe5)][_0x4490cb(0x100)],_0x48aa6d,{'responseType':_0x4490cb(0xe6),'headers':{'Content-Type':_0x4490cb(0xe3)}}),_0x4e5eb2=(_0x2f8470=_0x3ef9a7[_0x4490cb(0xf6)][_0x4490cb(0xee)])===null||_0x2f8470===void 0x0?void 0x0:_0x2f8470[_0x4490cb(0xf3)](_0x4490cb(0x102));if(!_0x4e5eb2)return _0x3ef9a7[_0x4490cb(0xff)];else{const _0x5435db=JSON[_0x4490cb(0xf4)](_0x3ef9a7['data']);if(_0x32d6b6>0x0)return await(0x0,veeva_auth_utils_1[_0x4490cb(0xe2)])(this['_connection']),await this[_0x4490cb(0xdd)](_0x3dcd56,_0x32d6b6-0x1);throw new veeva_error_1[(_0x4490cb(0xf1))](_0x5435db[_0x4490cb(0xfa)]);}}async[a408_0x3458e4(0x103)](_0xdc39fe,_0x1ffebb=0x1){const _0x292375=a408_0x3458e4,_0x1762eb=new form_data_1[(_0x292375(0xd7))]();_0x1762eb[_0x292375(0xd9)](_0x292375(0xdf),(0x0,fs_1[_0x292375(0xec)])(_0xdc39fe));const _0x413d73=await this[_0x292375(0xea)][_0x292375(0xfc)](veeva_constants_1[_0x292375(0xe5)][_0x292375(0xfe)],_0x1762eb,{'headers':{'Content-Type':_0x292375(0xe3)}}),_0x5cb5be=_0x413d73[_0x292375(0xff)];if(_0x5cb5be[_0x292375(0xd8)]===status_enums_1[_0x292375(0xf0)][_0x292375(0xeb)])return _0x5cb5be;else{if(_0x1ffebb>0x0)return await(0x0,veeva_auth_utils_1[_0x292375(0xe2)])(this[_0x292375(0xea)]),await this['validate'](_0xdc39fe,_0x1ffebb-0x1);throw new veeva_error_1[(_0x292375(0xf1))](_0x5cb5be[_0x292375(0xfa)]);}}}exports[a408_0x3458e4(0xdc)]=VpkService;