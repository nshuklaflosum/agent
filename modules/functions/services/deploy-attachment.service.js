const a52_0x209449=a52_0xe600;function a52_0x14cf(){const _0xe41fb0=['sfdx','197970WgslQs','testLevel','path','../../git/internal/fs.internal','mkdir','-f\x20','setInstanceUrl','clientId','.temp','entryName','\x20-r\x20','.temp/','AuthUtils','cwd','3836884gUajUp','deployComponents','adm-zip','ComponentsApi','search','\x20-purgeondelete','uuid','10SxkSEA','toBuffer','354067ebwELC','accessToken','catch','toString','writeFile','defineProperty','createSFDXProject','SFDXUtils','16350422XlnfiM','join','force:mdapi:deploy\x20--json\x20','split','refreshToken','__esModule','checkOnly','default','clientSecret','ignoreWarnings','constructor','../../git/salesforce/utils/sfdx.utils','45FsBwiQ','\x20-c','updateAccessToken','\x20-l\x20','(((.+)+)+)+$','../utils/sfdx.utils','destructiveChangesPost.xml','1606977WzJKnd','getEntry','parse','exists','fetchAttachmentBody','95402DbzjcQ','2325087sOBsiF','then','fs/promises','9KTCFIr','/.temp/','SFDX','runTests','80wazhDE','deploy.zip','instanceUrl'];a52_0x14cf=function(){return _0xe41fb0;};return a52_0x14cf();}function a52_0xe600(_0x3e3dc2,_0xb0fde4){const _0x348fd5=a52_0x14cf();return a52_0xe600=function(_0x19c650,_0x1e77d0){_0x19c650=_0x19c650-0x66;let _0x14cf10=_0x348fd5[_0x19c650];return _0x14cf10;},a52_0xe600(_0x3e3dc2,_0xb0fde4);}(function(_0x2ab6b0,_0x3025dc){const _0x23126d=a52_0xe600,_0x578257=_0x2ab6b0();while(!![]){try{const _0x3c20f7=-parseInt(_0x23126d(0xa5))/0x1*(parseInt(_0x23126d(0xa1))/0x2)+parseInt(_0x23126d(0x9c))/0x3+parseInt(_0x23126d(0x78))/0x4+-parseInt(_0x23126d(0x95))/0x5*(-parseInt(_0x23126d(0x6a))/0x6)+-parseInt(_0x23126d(0x81))/0x7*(-parseInt(_0x23126d(0x66))/0x8)+-parseInt(_0x23126d(0xa2))/0x9*(-parseInt(_0x23126d(0x7f))/0xa)+-parseInt(_0x23126d(0x89))/0xb;if(_0x3c20f7===_0x3025dc)break;else _0x578257['push'](_0x578257['shift']());}catch(_0xd9f757){_0x578257['push'](_0x578257['shift']());}}}(a52_0x14cf,0x9c515));const a52_0x1e77d0=(function(){let _0x2d1877=!![];return function(_0xe01913,_0x954bd4){const _0x566c98=_0x2d1877?function(){if(_0x954bd4){const _0x3e8ab5=_0x954bd4['apply'](_0xe01913,arguments);return _0x954bd4=null,_0x3e8ab5;}}:function(){};return _0x2d1877=![],_0x566c98;};}()),a52_0x19c650=a52_0x1e77d0(this,function(){const _0x55967e=a52_0xe600;return a52_0x19c650[_0x55967e(0x84)]()[_0x55967e(0x7c)](_0x55967e(0x99))[_0x55967e(0x84)]()[_0x55967e(0x93)](a52_0x19c650)[_0x55967e(0x7c)](_0x55967e(0x99));});a52_0x19c650();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5166fb){const _0x55ecbf=a52_0xe600;return _0x5166fb&&_0x5166fb[_0x55ecbf(0x8e)]?_0x5166fb:{'default':_0x5166fb};};Object[a52_0x209449(0x86)](exports,a52_0x209449(0x8e),{'value':!![]}),exports[a52_0x209449(0x79)]=void 0x0;const promises_1=require(a52_0x209449(0xa4)),sfdx_utils_1=require(a52_0x209449(0x94)),sfdx_utils_2=require(a52_0x209449(0x9a)),auth_utils_1=require('../utils/auth.utils'),components_api_1=require('../utils/components-api'),path_1=__importDefault(require(a52_0x209449(0x6c))),fs_internal_1=require(a52_0x209449(0x6d)),uuid_1=require(a52_0x209449(0x7e)),adm_zip_1=__importDefault(require(a52_0x209449(0x7a))),DESTRUCTIVE_CHANGES_POST_NAME=a52_0x209449(0x9b),DEPLOY_ZIP_NAME=a52_0x209449(0x67);async function deployComponents({attachmentId:_0x1bfbea,credentials:_0x59872d,postDestructiveAttachmentId:_0x2ceb2b,deployOptions:_0x509411},_0x531350){const _0x2025c0=a52_0x209449,_0x354b47=(0x0,uuid_1['v4'])();try{const _0x1b1872=_0x1bfbea[_0x2025c0(0x8c)](','),_0x3051b7=new adm_zip_1[(_0x2025c0(0x90))]();for(const _0x35aaa5 of _0x1b1872){await components_api_1[_0x2025c0(0x7b)]['fetchAttachmentBody'](_0x531350,_0x35aaa5)[_0x2025c0(0xa3)](_0x1d85cd=>{const _0x5631e7=_0x2025c0;var _0x56a670;const _0x62db03=new adm_zip_1[(_0x5631e7(0x90))](_0x1d85cd);for(const _0x1d335f of _0x62db03['getEntries']()){_0x3051b7['addFile'](_0x1d335f[_0x5631e7(0x73)],(_0x56a670=_0x62db03[_0x5631e7(0x9d)](_0x1d335f['entryName']))===null||_0x56a670===void 0x0?void 0x0:_0x56a670['getData']());}});}!await fs_internal_1['FS'][_0x2025c0(0x9f)](_0x2025c0(0x75)+_0x354b47)&&await(0x0,promises_1[_0x2025c0(0x6e)])('.temp/'+_0x354b47,{'recursive':!![]});await sfdx_utils_2[_0x2025c0(0x88)][_0x2025c0(0x87)](_0x1bfbea,_0x354b47),await sfdx_utils_2['SFDXUtils'][_0x2025c0(0x70)](_0x59872d[_0x2025c0(0x68)],_0x1bfbea,_0x354b47);if(_0x2ceb2b){const _0x54be15=await components_api_1['ComponentsApi'][_0x2025c0(0xa0)](_0x531350,_0x2ceb2b);_0x3051b7['addFile'](DESTRUCTIVE_CHANGES_POST_NAME,_0x54be15),await(0x0,promises_1[_0x2025c0(0x85)])(process['cwd']()+_0x2025c0(0xa6)+_0x354b47+'/'+DEPLOY_ZIP_NAME,_0x3051b7[_0x2025c0(0x80)]());}else await(0x0,promises_1[_0x2025c0(0x85)])(process[_0x2025c0(0x77)]()+_0x2025c0(0xa6)+_0x354b47+'/'+DEPLOY_ZIP_NAME,_0x3051b7[_0x2025c0(0x80)]());const _0x105d36=await deploy(_0x59872d,_0x509411,_0x354b47);return JSON[_0x2025c0(0x9e)](_0x105d36)['result']['id'];}catch(_0x448bfc){throw _0x448bfc;}finally{await(0x0,promises_1['rm'])(path_1[_0x2025c0(0x90)][_0x2025c0(0x8a)](process['cwd'](),_0x2025c0(0x72),_0x354b47),{'recursive':!![]});}}exports[a52_0x209449(0x79)]=deployComponents;function deploy(_0x42eefc,_0x14da75,_0xc13183){const _0x298f24=a52_0x209449,_0x38a4cb=path_1[_0x298f24(0x90)][_0x298f24(0x8a)](process[_0x298f24(0x77)](),_0x298f24(0x72),_0xc13183,DEPLOY_ZIP_NAME);let _0x4c00e6=_0x298f24(0x6f)+_0x38a4cb+'\x20-u\x20'+_0x42eefc[_0x298f24(0x82)];return _0x4c00e6+=_0x14da75[_0x298f24(0x8f)]?_0x298f24(0x96):'',_0x4c00e6+=_0x14da75[_0x298f24(0x6b)]?_0x298f24(0x98)+_0x14da75[_0x298f24(0x6b)]:'',_0x4c00e6+=_0x14da75[_0x298f24(0xa8)]?_0x298f24(0x74)+_0x14da75[_0x298f24(0xa8)]:'',_0x4c00e6+=_0x14da75[_0x298f24(0x92)]?'\x20-g':'',_0x4c00e6+=_0x14da75['purgeOnDelete']?_0x298f24(0x7d):'',sfdx_utils_1[_0x298f24(0xa7)]['spawnPromise'](_0x298f24(0x69),_0x298f24(0x8b)+_0x4c00e6)[_0x298f24(0x83)](async _0xbb0a5=>{const _0x11cf0d=_0x298f24;if(sfdx_utils_2[_0x11cf0d(0x88)]['isAuthorizationError'](_0xbb0a5))return _0x42eefc[_0x11cf0d(0x82)]=await auth_utils_1[_0x11cf0d(0x76)][_0x11cf0d(0x97)](_0x42eefc[_0x11cf0d(0x68)],_0x42eefc[_0x11cf0d(0x8d)],_0x42eefc[_0x11cf0d(0x71)],_0x42eefc[_0x11cf0d(0x91)]),deploy(_0x42eefc,_0x14da75,_0xc13183);throw _0xbb0a5;});}