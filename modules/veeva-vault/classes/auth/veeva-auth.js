const a288_0x7abd6d=a288_0x33ec;(function(_0x17b4fa,_0x164642){const _0x4049fc=a288_0x33ec,_0x1d036c=_0x17b4fa();while(!![]){try{const _0x504ff1=-parseInt(_0x4049fc(0x11c))/0x1*(-parseInt(_0x4049fc(0x111))/0x2)+-parseInt(_0x4049fc(0x104))/0x3+-parseInt(_0x4049fc(0x10a))/0x4+-parseInt(_0x4049fc(0xff))/0x5*(parseInt(_0x4049fc(0x10c))/0x6)+parseInt(_0x4049fc(0xfb))/0x7*(parseInt(_0x4049fc(0x10f))/0x8)+-parseInt(_0x4049fc(0x11f))/0x9+parseInt(_0x4049fc(0x116))/0xa;if(_0x504ff1===_0x164642)break;else _0x1d036c['push'](_0x1d036c['shift']());}catch(_0xbcf589){_0x1d036c['push'](_0x1d036c['shift']());}}}(a288_0x2185,0xf2d03));const a288_0x39ce50=(function(){let _0x5ae2a4=!![];return function(_0x3726d7,_0x8be9ae){const _0x556749=_0x5ae2a4?function(){const _0x529116=a288_0x33ec;if(_0x8be9ae){const _0x5b259e=_0x8be9ae[_0x529116(0x11d)](_0x3726d7,arguments);return _0x8be9ae=null,_0x5b259e;}}:function(){};return _0x5ae2a4=![],_0x556749;};}()),a288_0x564b6a=a288_0x39ce50(this,function(){const _0x1118b0=a288_0x33ec;return a288_0x564b6a[_0x1118b0(0x121)]()[_0x1118b0(0x119)](_0x1118b0(0x110))['toString']()[_0x1118b0(0x100)](a288_0x564b6a)[_0x1118b0(0x119)](_0x1118b0(0x110));});a288_0x564b6a();'use strict';var __importDefault=this&&this[a288_0x7abd6d(0x115)]||function(_0x50bc4e){const _0x36ed22=a288_0x7abd6d;return _0x50bc4e&&_0x50bc4e[_0x36ed22(0x117)]?_0x50bc4e:{'default':_0x50bc4e};};Object[a288_0x7abd6d(0x11e)](exports,'__esModule',{'value':!![]}),exports['VeevaAuth']=void 0x0;const veeva_constants_1=require(a288_0x7abd6d(0xfe)),axios_1=__importDefault(require('axios')),status_enums_1=require(a288_0x7abd6d(0x112)),utils_1=require(a288_0x7abd6d(0x124)),app_constants_1=require(a288_0x7abd6d(0x118)),base_veeva_auth_1=require('./base-veeva-auth');function a288_0x2185(){const _0x587f32=['3491076VTfqqO','some','responseStatus','56LfiCeu','(((.+)+)+)+$','249154JwwWTL','../../enums/status.enums','application/x-www-form-urlencoded','VeevaResponseStatus','__importDefault','29439020fsMZrP','__esModule','../../constants/app.constants','search','ENDPOINT_AUTH','sleep','4RtZwTW','apply','defineProperty','4394034StweyE','type','toString','UNDEFINED_ERROR','VeevaAuth','../../../shared/utils','398713RZJyHF','post','BaseVeevaAuth','../../constants/veeva.constants','5ZAepFJ','constructor','username','errors','append','374658LkoTDm','password','VeevaConstants','sessionId','auth','message','6605608ZrOUme','LOGIN_TIMEOUT'];a288_0x2185=function(){return _0x587f32;};return a288_0x2185();}class VeevaAuth extends base_veeva_auth_1[a288_0x7abd6d(0xfd)]{constructor(_0x27b3a9,_0x38eb16=0x0){const _0x3a09ed=a288_0x7abd6d;super(_0x27b3a9),this[_0x3a09ed(0x108)]=_0x27b3a9,this['attemptsOfUpdateToken']=_0x38eb16;}async['getNewAccessToken'](_0x3ff992=this['attemptsOfUpdateToken']){const _0x4d3a29=a288_0x7abd6d;var _0x3e50ec,_0x73f802;const _0x1dd56e=this[_0x4d3a29(0x108)]['instanceUrl']+veeva_constants_1[_0x4d3a29(0x106)][_0x4d3a29(0x11a)],_0x1024d6=new URLSearchParams();_0x1024d6[_0x4d3a29(0x103)](_0x4d3a29(0x101),this['auth']['username']),_0x1024d6[_0x4d3a29(0x103)](_0x4d3a29(0x105),this[_0x4d3a29(0x108)]['password']);const {data:_0x2ccad3}=await axios_1['default'][_0x4d3a29(0xfc)](_0x1dd56e,_0x1024d6,{'headers':{'Content-Type':_0x4d3a29(0x113)}});if(_0x2ccad3[_0x4d3a29(0x10e)]===status_enums_1[_0x4d3a29(0x114)]['SUCCESS'])return _0x2ccad3[_0x4d3a29(0x107)];else{const _0x5bfe5e=(_0x3e50ec=_0x2ccad3['errors'])===null||_0x3e50ec===void 0x0?void 0x0:_0x3e50ec[_0x4d3a29(0x10d)](_0x459fe7=>_0x459fe7[_0x4d3a29(0x120)]===veeva_constants_1[_0x4d3a29(0x106)]['API_LIMIT_EXCEEDED']);if(_0x5bfe5e&&_0x3ff992>0x0)return await(0x0,utils_1[_0x4d3a29(0x11b)])(VeevaAuth['LOGIN_TIMEOUT']),await this['getNewAccessToken'](_0x3ff992-0x1);else throw new Error(((_0x73f802=_0x2ccad3[_0x4d3a29(0x102)][0x0])===null||_0x73f802===void 0x0?void 0x0:_0x73f802[_0x4d3a29(0x109)])||app_constants_1['AppConstants'][_0x4d3a29(0x122)]);}}}function a288_0x33ec(_0x44f23f,_0x244b73){const _0x374e4b=a288_0x2185();return a288_0x33ec=function(_0x564b6a,_0x39ce50){_0x564b6a=_0x564b6a-0xfb;let _0x2185f3=_0x374e4b[_0x564b6a];return _0x2185f3;},a288_0x33ec(_0x44f23f,_0x244b73);}exports[a288_0x7abd6d(0x123)]=VeevaAuth,VeevaAuth[a288_0x7abd6d(0x10b)]=0x3e8*0x3c;