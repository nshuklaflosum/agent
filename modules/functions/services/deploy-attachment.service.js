const a84_0x3dea9e=a84_0x32ec;(function(_0x8db63,_0x427ed6){const _0x3c0e86=a84_0x32ec,_0x249326=_0x8db63();while(!![]){try{const _0x3526b6=parseInt(_0x3c0e86(0x13e))/0x1+parseInt(_0x3c0e86(0x12f))/0x2+parseInt(_0x3c0e86(0x14d))/0x3+parseInt(_0x3c0e86(0x152))/0x4*(-parseInt(_0x3c0e86(0x127))/0x5)+-parseInt(_0x3c0e86(0x144))/0x6+-parseInt(_0x3c0e86(0x123))/0x7*(parseInt(_0x3c0e86(0x15d))/0x8)+parseInt(_0x3c0e86(0x159))/0x9;if(_0x3526b6===_0x427ed6)break;else _0x249326['push'](_0x249326['shift']());}catch(_0x384069){_0x249326['push'](_0x249326['shift']());}}}(a84_0x5b19,0x62ab2));const a84_0x17022b=(function(){let _0x520954=!![];return function(_0x547799,_0x25c6d8){const _0x460fa8=_0x520954?function(){const _0x5ce3a9=a84_0x32ec;if(_0x25c6d8){const _0x14e980=_0x25c6d8[_0x5ce3a9(0x147)](_0x547799,arguments);return _0x25c6d8=null,_0x14e980;}}:function(){};return _0x520954=![],_0x460fa8;};}()),a84_0x154a06=a84_0x17022b(this,function(){const _0x3f9e61=a84_0x32ec;return a84_0x154a06[_0x3f9e61(0x156)]()['search'](_0x3f9e61(0x153))[_0x3f9e61(0x156)]()[_0x3f9e61(0x15a)](a84_0x154a06)[_0x3f9e61(0x128)]('(((.+)+)+)+$');});a84_0x154a06();'use strict';function a84_0x32ec(_0x2f89e9,_0x188c73){const _0x4906e1=a84_0x5b19();return a84_0x32ec=function(_0x154a06,_0x17022b){_0x154a06=_0x154a06-0x122;let _0x5b1928=_0x4906e1[_0x154a06];return _0x5b1928;},a84_0x32ec(_0x2f89e9,_0x188c73);}var __importDefault=this&&this[a84_0x3dea9e(0x155)]||function(_0x3ded09){const _0x221f14=a84_0x3dea9e;return _0x3ded09&&_0x3ded09[_0x221f14(0x163)]?_0x3ded09:{'default':_0x3ded09};};Object[a84_0x3dea9e(0x130)](exports,a84_0x3dea9e(0x163),{'value':!![]}),exports['deployComponents']=void 0x0;const promises_1=require('fs/promises'),sfdx_utils_1=require('../../git/salesforce/utils/sfdx.utils'),sfdx_utils_2=require('../utils/sfdx.utils'),auth_utils_1=require(a84_0x3dea9e(0x154)),path_1=__importDefault(require(a84_0x3dea9e(0x15c))),fs_internal_1=require(a84_0x3dea9e(0x157)),uuid_1=require(a84_0x3dea9e(0x125)),adm_zip_1=__importDefault(require(a84_0x3dea9e(0x13c))),fetch_attachments_1=require(a84_0x3dea9e(0x14f)),DESTRUCTIVE_CHANGES_POST_NAME=a84_0x3dea9e(0x138),DEPLOY_ZIP_NAME=a84_0x3dea9e(0x14e);async function deployComponents({attachmentId:_0x46653b,credentials:_0x23aa01,postDestructiveAttachmentId:_0x3b0345,deployOptions:_0x42663c},_0x20b34c){const _0x53a206=a84_0x3dea9e,_0x466032=(0x0,uuid_1['v4'])();try{const _0x46b374=_0x46653b[_0x53a206(0x134)](','),_0x131f5f=new adm_zip_1[(_0x53a206(0x132))]();for(const _0x2d34bc of _0x46b374){await(0x0,fetch_attachments_1[_0x53a206(0x145)])(_0x20b34c,_0x2d34bc)[_0x53a206(0x14a)](_0x3e3536=>{const _0x363a99=_0x53a206;var _0x3f5d20;const _0x21ac94=new adm_zip_1[(_0x363a99(0x132))](_0x3e3536);for(const _0x2e924b of _0x21ac94[_0x363a99(0x133)]()){_0x131f5f[_0x363a99(0x143)](_0x2e924b[_0x363a99(0x12a)],(_0x3f5d20=_0x21ac94[_0x363a99(0x124)](_0x2e924b[_0x363a99(0x12a)]))===null||_0x3f5d20===void 0x0?void 0x0:_0x3f5d20[_0x363a99(0x12b)]());}});}!await fs_internal_1['FS'][_0x53a206(0x15f)](_0x53a206(0x135)+_0x466032)&&await(0x0,promises_1[_0x53a206(0x131)])(_0x53a206(0x135)+_0x466032,{'recursive':!![]});await sfdx_utils_2[_0x53a206(0x161)][_0x53a206(0x150)](_0x46653b,_0x466032),await sfdx_utils_2[_0x53a206(0x161)]['setInstanceUrl'](_0x23aa01[_0x53a206(0x15e)],_0x46653b,_0x466032);if(_0x3b0345){const _0x34722c=await(0x0,fetch_attachments_1[_0x53a206(0x145)])(_0x20b34c,_0x3b0345);_0x131f5f[_0x53a206(0x143)](DESTRUCTIVE_CHANGES_POST_NAME,_0x34722c),await(0x0,promises_1[_0x53a206(0x14b)])(process['cwd']()+'/.temp/'+_0x466032+'/'+DEPLOY_ZIP_NAME,_0x131f5f[_0x53a206(0x126)]());}else await(0x0,promises_1[_0x53a206(0x14b)])(process[_0x53a206(0x15b)]()+'/.temp/'+_0x466032+'/'+DEPLOY_ZIP_NAME,_0x131f5f[_0x53a206(0x126)]());const _0x24ef7a=await deploy(_0x23aa01,_0x42663c,_0x466032);return JSON[_0x53a206(0x14c)](_0x24ef7a)[_0x53a206(0x162)]['id'];}catch(_0x16f145){throw _0x16f145;}finally{await(0x0,promises_1['rm'])(path_1[_0x53a206(0x132)][_0x53a206(0x158)](process[_0x53a206(0x15b)](),_0x53a206(0x136),_0x466032),{'recursive':!![]});}}exports[a84_0x3dea9e(0x122)]=deployComponents;function deploy(_0xb99bb9,_0x4c21ff,_0x177e75){const _0x2d419e=a84_0x3dea9e,_0x45063b=path_1[_0x2d419e(0x132)][_0x2d419e(0x158)](process[_0x2d419e(0x15b)](),_0x2d419e(0x136),_0x177e75,DEPLOY_ZIP_NAME);let _0x5724a7=_0x2d419e(0x160)+_0x45063b+_0x2d419e(0x129)+_0xb99bb9[_0x2d419e(0x142)];return _0x5724a7+=_0x4c21ff['checkOnly']?'\x20-c':'',_0x5724a7+=_0x4c21ff[_0x2d419e(0x139)]?_0x2d419e(0x13a)+_0x4c21ff[_0x2d419e(0x139)]:'',_0x5724a7+=_0x4c21ff[_0x2d419e(0x137)]?_0x2d419e(0x12d)+_0x4c21ff[_0x2d419e(0x137)]:'',_0x5724a7+=_0x4c21ff['ignoreWarnings']?'\x20-g':'',_0x5724a7+=_0x4c21ff[_0x2d419e(0x151)]?_0x2d419e(0x141):'',sfdx_utils_1[_0x2d419e(0x13d)]['spawnPromise'](_0x2d419e(0x13f),_0x2d419e(0x12e)+_0x5724a7)[_0x2d419e(0x148)](async _0x404de1=>{const _0xa8003e=_0x2d419e;if(sfdx_utils_2[_0xa8003e(0x161)][_0xa8003e(0x13b)](_0x404de1))return _0xb99bb9[_0xa8003e(0x142)]=await auth_utils_1['AuthUtils'][_0xa8003e(0x146)](_0xb99bb9[_0xa8003e(0x15e)],_0xb99bb9[_0xa8003e(0x140)],_0xb99bb9[_0xa8003e(0x12c)],_0xb99bb9[_0xa8003e(0x149)]),deploy(_0xb99bb9,_0x4c21ff,_0x177e75);throw _0x404de1;});}function a84_0x5b19(){const _0x56c5f5=['-f\x20','SFDXUtils','result','__esModule','deployComponents','13258KQNPBO','getEntry','uuid','toBuffer','990ORKKLM','search','\x20-u\x20','entryName','getData','clientId','\x20-r\x20','force:mdapi:deploy\x20--json\x20','774128FvTXCn','defineProperty','mkdir','default','getEntries','split','.temp/','.temp','runTests','destructiveChangesPost.xml','testLevel','\x20-l\x20','isAuthorizationError','adm-zip','SFDX','463262GuKTfk','sfdx','refreshToken','\x20-purgeondelete','accessToken','addFile','2367138cBeyEe','fetchAttachmentBody','updateAccessToken','apply','catch','clientSecret','then','writeFile','parse','1544400XrgOmt','deploy.zip','../../shared/utils/fetch-attachments','createSFDXProject','purgeOnDelete','13344bTsnAR','(((.+)+)+)+$','../utils/auth.utils','__importDefault','toString','../../git/internal/fs.internal','join','6863877JbfGZr','constructor','cwd','path','2824nvbIVk','instanceUrl','exists'];a84_0x5b19=function(){return _0x56c5f5;};return a84_0x5b19();}