const a197_0x2fe07f=a197_0x26e1;(function(_0x265de8,_0x5e5d80){const _0x3aac95=a197_0x26e1,_0x21eeea=_0x265de8();while(!![]){try{const _0x5abf38=parseInt(_0x3aac95(0xa2))/0x1*(-parseInt(_0x3aac95(0xac))/0x2)+-parseInt(_0x3aac95(0xa6))/0x3*(parseInt(_0x3aac95(0xbe))/0x4)+-parseInt(_0x3aac95(0xb0))/0x5*(parseInt(_0x3aac95(0xbc))/0x6)+parseInt(_0x3aac95(0xb5))/0x7+parseInt(_0x3aac95(0xcb))/0x8*(-parseInt(_0x3aac95(0xc8))/0x9)+parseInt(_0x3aac95(0xa8))/0xa*(parseInt(_0x3aac95(0xc2))/0xb)+-parseInt(_0x3aac95(0xc9))/0xc;if(_0x5abf38===_0x5e5d80)break;else _0x21eeea['push'](_0x21eeea['shift']());}catch(_0x48e291){_0x21eeea['push'](_0x21eeea['shift']());}}}(a197_0x467f,0x2a092));const a197_0x3b7b75=(function(){let _0x53658f=!![];return function(_0x5cebee,_0x36f85e){const _0x103646=_0x53658f?function(){if(_0x36f85e){const _0x1ec187=_0x36f85e['apply'](_0x5cebee,arguments);return _0x36f85e=null,_0x1ec187;}}:function(){};return _0x53658f=![],_0x103646;};}()),a197_0x4718bd=a197_0x3b7b75(this,function(){const _0x587f1e=a197_0x26e1;return a197_0x4718bd[_0x587f1e(0xab)]()['search'](_0x587f1e(0xa5))[_0x587f1e(0xab)]()[_0x587f1e(0xa9)](a197_0x4718bd)[_0x587f1e(0xc7)](_0x587f1e(0xa5));});a197_0x4718bd();'use strict';var __importDefault=this&&this[a197_0x2fe07f(0xb2)]||function(_0x50ce5b){const _0x2b0e2d=a197_0x2fe07f;return _0x50ce5b&&_0x50ce5b[_0x2b0e2d(0xae)]?_0x50ce5b:{'default':_0x50ce5b};};function a197_0x467f(){const _0x5429ef=['../../internal/shell.internal','createEmptyProject','11ZNOIoH','dir','removeDir','createProjectFrom','defineProperty','search','24282QIVilD','1924512NQxmqg','copyProjectTo','56YSmovc','149qDDAeu','shortid','SFDXUtils','(((.+)+)+)+$','1719ROKcUo','cp\x20-r\x20','3245930rgEaVl','constructor','createEmptyPackageXml','toString','122fCUPwj','cwd','__esModule','branchName','25TAUvCE','sfdx','__importDefault','path','SFDX','2110185hPIljb','uniqueId','default','fullProjectName','PROJECTS_PATH','makeDir','.temp','278742NOCSpA','exec','232itksIb','/force-app\x20'];a197_0x467f=function(){return _0x5429ef;};return a197_0x467f();}Object[a197_0x2fe07f(0xc6)](exports,a197_0x2fe07f(0xae),{'value':!![]}),exports[a197_0x2fe07f(0xa4)]=void 0x0;const path_1=__importDefault(require(a197_0x2fe07f(0xb3))),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require(a197_0x2fe07f(0xc0)),sfdx_utils_1=require('../../salesforce/utils/sfdx.utils'),shortid_1=__importDefault(require(a197_0x2fe07f(0xa3)));function a197_0x26e1(_0x61f777,_0x2a9f9d){const _0x314009=a197_0x467f();return a197_0x26e1=function(_0x4718bd,_0x3b7b75){_0x4718bd=_0x4718bd-0xa2;let _0x467fdd=_0x314009[_0x4718bd];return _0x467fdd;},a197_0x26e1(_0x61f777,_0x2a9f9d);}class SFDXUtils{constructor(_0x317466,_0x2396da){const _0x341a95=a197_0x2fe07f;this['projectName']=_0x317466,this[_0x341a95(0xaf)]=_0x2396da,this[_0x341a95(0xb9)]=path_1['default']['join'](process[_0x341a95(0xad)](),_0x341a95(0xbb),_0x341a95(0xb1)),this[_0x341a95(0xb6)]=shortid_1['default']();}get[a197_0x2fe07f(0xb8)](){return''+this['uniqueId'];}get[a197_0x2fe07f(0xc3)](){const _0xd78815=a197_0x2fe07f;return path_1[_0xd78815(0xb7)]['join'](this['PROJECTS_PATH'],this[_0xd78815(0xb8)]);}async[a197_0x2fe07f(0xc5)](_0x3f0390){const _0x779ab9=a197_0x2fe07f;!await fs_internal_1['FS']['exists'](this[_0x779ab9(0xb9)])&&await fs_internal_1['FS'][_0x779ab9(0xba)](this[_0x779ab9(0xb9)]),await sfdx_utils_1[_0x779ab9(0xb4)][_0x779ab9(0xc1)](this[_0x779ab9(0xb9)],this[_0x779ab9(0xb8)]),await sfdx_utils_1['SFDX'][_0x779ab9(0xaa)](_0x3f0390),await sfdx_utils_1['SFDX']['mdapiToSource'](_0x3f0390,this[_0x779ab9(0xc3)]);}async[a197_0x2fe07f(0xca)](_0x5a7940){const _0x472763=a197_0x2fe07f;await shell_internal_1['Shell'][_0x472763(0xbd)](_0x472763(0xa7)+this[_0x472763(0xc3)]+_0x472763(0xbf)+_0x5a7940);}async[a197_0x2fe07f(0xc4)](){const _0x45b525=a197_0x2fe07f;await fs_internal_1['FS'][_0x45b525(0xc4)](this['dir']);}}exports[a197_0x2fe07f(0xa4)]=SFDXUtils;