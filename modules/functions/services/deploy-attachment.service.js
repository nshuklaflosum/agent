const a52_0x263742=a52_0x5f51;(function(_0x2e68c4,_0x482056){const _0xcb9753=a52_0x5f51,_0x3d2576=_0x2e68c4();while(!![]){try{const _0x54445d=-parseInt(_0xcb9753(0x116))/0x1*(-parseInt(_0xcb9753(0x115))/0x2)+-parseInt(_0xcb9753(0x11a))/0x3+parseInt(_0xcb9753(0xee))/0x4*(parseInt(_0xcb9753(0x107))/0x5)+-parseInt(_0xcb9753(0xf5))/0x6*(parseInt(_0xcb9753(0x112))/0x7)+parseInt(_0xcb9753(0xdd))/0x8+parseInt(_0xcb9753(0xe3))/0x9*(parseInt(_0xcb9753(0xf0))/0xa)+parseInt(_0xcb9753(0xe8))/0xb*(-parseInt(_0xcb9753(0xf1))/0xc);if(_0x54445d===_0x482056)break;else _0x3d2576['push'](_0x3d2576['shift']());}catch(_0x4c5924){_0x3d2576['push'](_0x3d2576['shift']());}}}(a52_0x1db5,0x5fe99));const a52_0x2a8bbc=(function(){let _0x49f1d8=!![];return function(_0x2cb992,_0x5b4e2a){const _0x1531b3=_0x49f1d8?function(){if(_0x5b4e2a){const _0x26e99d=_0x5b4e2a['apply'](_0x2cb992,arguments);return _0x5b4e2a=null,_0x26e99d;}}:function(){};return _0x49f1d8=![],_0x1531b3;};}()),a52_0xb116d6=a52_0x2a8bbc(this,function(){const _0x5e2f97=a52_0x5f51;return a52_0xb116d6['toString']()[_0x5e2f97(0xe4)]('(((.+)+)+)+$')[_0x5e2f97(0xe1)]()[_0x5e2f97(0x113)](a52_0xb116d6)[_0x5e2f97(0xe4)]('(((.+)+)+)+$');});a52_0xb116d6();'use strict';var __importDefault=this&&this[a52_0x263742(0xe0)]||function(_0x3e5c56){const _0x22b3de=a52_0x263742;return _0x3e5c56&&_0x3e5c56[_0x22b3de(0x100)]?_0x3e5c56:{'default':_0x3e5c56};};function a52_0x5f51(_0x2d9b71,_0x5e09f3){const _0x42446b=a52_0x1db5();return a52_0x5f51=function(_0xb116d6,_0x2a8bbc){_0xb116d6=_0xb116d6-0xdc;let _0x1db582=_0x42446b[_0xb116d6];return _0x1db582;},a52_0x5f51(_0x2d9b71,_0x5e09f3);}Object[a52_0x263742(0xff)](exports,a52_0x263742(0x100),{'value':!![]}),exports['deployComponents']=void 0x0;const promises_1=require(a52_0x263742(0xdc)),sfdx_utils_1=require(a52_0x263742(0xfe)),sfdx_utils_2=require('../utils/sfdx.utils'),auth_utils_1=require(a52_0x263742(0xef)),components_api_1=require(a52_0x263742(0xe6)),path_1=__importDefault(require(a52_0x263742(0x10b))),fs_internal_1=require(a52_0x263742(0x10c)),uuid_1=require('uuid'),adm_zip_1=__importDefault(require('adm-zip')),DESTRUCTIVE_CHANGES_POST_NAME=a52_0x263742(0xf4),DEPLOY_ZIP_NAME=a52_0x263742(0xfc);async function deployComponents({attachmentId:_0x4324cc,credentials:_0x3e69cf,postDestructiveAttachmentId:_0x448d9d,deployOptions:_0x222b5d},_0x3ee393){const _0x554959=a52_0x263742,_0x124dd9=(0x0,uuid_1['v4'])();try{const _0x316fb6=_0x4324cc[_0x554959(0x119)](','),_0x2d7f4e=new adm_zip_1[(_0x554959(0xeb))]();for(const _0x4d5f43 of _0x316fb6){await components_api_1[_0x554959(0xea)][_0x554959(0x10e)](_0x3ee393,_0x4d5f43)[_0x554959(0x117)](_0x115da1=>{const _0x2ae6fa=_0x554959;var _0xb2196c;const _0x21f030=new adm_zip_1[(_0x2ae6fa(0xeb))](_0x115da1);for(const _0x13eb11 of _0x21f030[_0x2ae6fa(0xf9)]()){_0x2d7f4e[_0x2ae6fa(0x101)](_0x13eb11[_0x2ae6fa(0xe2)],(_0xb2196c=_0x21f030['getEntry'](_0x13eb11[_0x2ae6fa(0xe2)]))===null||_0xb2196c===void 0x0?void 0x0:_0xb2196c['getData']());}});}!await fs_internal_1['FS']['exists'](_0x554959(0x10f)+_0x124dd9)&&await(0x0,promises_1[_0x554959(0xe9)])('.temp/'+_0x124dd9,{'recursive':!![]});await sfdx_utils_2[_0x554959(0xfd)][_0x554959(0x109)](_0x4324cc,_0x124dd9),await sfdx_utils_2[_0x554959(0xfd)][_0x554959(0xf6)](_0x3e69cf['instanceUrl'],_0x4324cc,_0x124dd9);if(_0x448d9d){const _0x5ccf64=await components_api_1['ComponentsApi'][_0x554959(0x10e)](_0x3ee393,_0x448d9d);_0x2d7f4e['addFile'](DESTRUCTIVE_CHANGES_POST_NAME,_0x5ccf64),await(0x0,promises_1[_0x554959(0xf3)])(process[_0x554959(0x110)]()+_0x554959(0x118)+_0x124dd9+'/'+DEPLOY_ZIP_NAME,_0x2d7f4e['toBuffer']());}else await(0x0,promises_1[_0x554959(0xf3)])(process[_0x554959(0x110)]()+'/.temp/'+_0x124dd9+'/'+DEPLOY_ZIP_NAME,_0x2d7f4e[_0x554959(0xf7)]());const _0x355fc7=await deploy(_0x3e69cf,_0x222b5d,_0x124dd9);return JSON[_0x554959(0xec)](_0x355fc7)[_0x554959(0x102)]['id'];}catch(_0x577c19){throw _0x577c19;}finally{await(0x0,promises_1['rm'])(path_1[_0x554959(0xeb)][_0x554959(0xde)](process[_0x554959(0x110)](),_0x554959(0xdf),_0x124dd9),{'recursive':!![]});}}exports[a52_0x263742(0xe7)]=deployComponents;function deploy(_0x1c7c8e,_0x2cff69,_0x375e2c){const _0x497d1c=a52_0x263742,_0x4ff801=path_1[_0x497d1c(0xeb)][_0x497d1c(0xde)](process[_0x497d1c(0x110)](),_0x497d1c(0xdf),_0x375e2c,DEPLOY_ZIP_NAME);let _0x35278a=_0x497d1c(0x103)+_0x4ff801+'\x20-u\x20'+_0x1c7c8e[_0x497d1c(0x106)];return _0x35278a+=_0x2cff69['checkOnly']?'\x20-c':'',_0x35278a+=_0x2cff69[_0x497d1c(0x114)]?'\x20-l\x20'+_0x2cff69[_0x497d1c(0x114)]:'',_0x35278a+=_0x2cff69['runTests']?_0x497d1c(0x111)+_0x2cff69[_0x497d1c(0x10d)]:'',_0x35278a+=_0x2cff69[_0x497d1c(0xfb)]?'\x20-g':'',_0x35278a+=_0x2cff69[_0x497d1c(0x104)]?_0x497d1c(0xe5):'',sfdx_utils_1['SFDX'][_0x497d1c(0x10a)](_0x497d1c(0x11b),_0x497d1c(0xfa)+_0x35278a)[_0x497d1c(0xf2)](async _0xc67a85=>{const _0x311f68=_0x497d1c;if(sfdx_utils_2[_0x311f68(0xfd)][_0x311f68(0xf8)](_0xc67a85))return _0x1c7c8e['accessToken']=await auth_utils_1[_0x311f68(0x105)]['updateAccessToken'](_0x1c7c8e[_0x311f68(0xed)],_0x1c7c8e['refreshToken'],_0x1c7c8e[_0x311f68(0x108)],_0x1c7c8e['clientSecret']),deploy(_0x1c7c8e,_0x2cff69,_0x375e2c);throw _0xc67a85;});}function a52_0x1db5(){const _0x5870ab=['instanceUrl','44ohskXI','../utils/auth.utils','200KHsnWd','408tqzjHP','catch','writeFile','destructiveChangesPost.xml','1084554BqACht','setInstanceUrl','toBuffer','isAuthorizationError','getEntries','force:mdapi:deploy\x20--json\x20','ignoreWarnings','deploy.zip','SFDXUtils','../../git/salesforce/utils/sfdx.utils','defineProperty','__esModule','addFile','result','-f\x20','purgeOnDelete','AuthUtils','accessToken','195685GnUrZr','clientId','createSFDXProject','spawnPromise','path','../../git/internal/fs.internal','runTests','fetchAttachmentBody','.temp/','cwd','\x20-r\x20','7EcdmaI','constructor','testLevel','282UrGsEC','2789gweLXx','then','/.temp/','split','1710219moIfdv','sfdx','fs/promises','4042904OomtqO','join','.temp','__importDefault','toString','entryName','197847ZwyyoH','search','\x20-purgeondelete','../utils/components-api','deployComponents','202235GkOYyP','mkdir','ComponentsApi','default','parse'];a52_0x1db5=function(){return _0x5870ab;};return a52_0x1db5();}