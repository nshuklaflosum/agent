const a79_0x4e79e4=a79_0x11a3;function a79_0x11a3(_0x8cf60e,_0x39c738){const _0xc0975=a79_0x33b7();return a79_0x11a3=function(_0x23809e,_0x5e21a4){_0x23809e=_0x23809e-0x78;let _0x33b76e=_0xc0975[_0x23809e];return _0x33b76e;},a79_0x11a3(_0x8cf60e,_0x39c738);}(function(_0x18909e,_0x5ca6d2){const _0x20a47f=a79_0x11a3,_0x2e65bb=_0x18909e();while(!![]){try{const _0x429413=-parseInt(_0x20a47f(0x7f))/0x1+-parseInt(_0x20a47f(0xa7))/0x2+-parseInt(_0x20a47f(0xad))/0x3*(parseInt(_0x20a47f(0x78))/0x4)+parseInt(_0x20a47f(0x7e))/0x5+parseInt(_0x20a47f(0x85))/0x6*(-parseInt(_0x20a47f(0xa8))/0x7)+parseInt(_0x20a47f(0x90))/0x8*(parseInt(_0x20a47f(0x84))/0x9)+parseInt(_0x20a47f(0x8d))/0xa;if(_0x429413===_0x5ca6d2)break;else _0x2e65bb['push'](_0x2e65bb['shift']());}catch(_0x26c0ad){_0x2e65bb['push'](_0x2e65bb['shift']());}}}(a79_0x33b7,0xa4bce));const a79_0x5e21a4=(function(){let _0x3ebed3=!![];return function(_0x34350f,_0xf935e1){const _0x5f40cf=_0x3ebed3?function(){const _0x106053=a79_0x11a3;if(_0xf935e1){const _0x4c607b=_0xf935e1[_0x106053(0x88)](_0x34350f,arguments);return _0xf935e1=null,_0x4c607b;}}:function(){};return _0x3ebed3=![],_0x5f40cf;};}()),a79_0x23809e=a79_0x5e21a4(this,function(){const _0x283acc=a79_0x11a3;return a79_0x23809e[_0x283acc(0xa1)]()[_0x283acc(0x80)]('(((.+)+)+)+$')[_0x283acc(0xa1)]()[_0x283acc(0x97)](a79_0x23809e)[_0x283acc(0x80)](_0x283acc(0xaa));});a79_0x23809e();'use strict';var __importDefault=this&&this[a79_0x4e79e4(0x91)]||function(_0x540cdd){const _0x337f91=a79_0x4e79e4;return _0x540cdd&&_0x540cdd[_0x337f91(0x9e)]?_0x540cdd:{'default':_0x540cdd};};Object[a79_0x4e79e4(0xa5)](exports,'__esModule',{'value':!![]}),exports['SFDXUtils']=void 0x0;const path_1=__importDefault(require(a79_0x4e79e4(0x81))),fs_internal_1=require(a79_0x4e79e4(0xa6)),shell_internal_1=require('../../internal/shell.internal'),sfdx_utils_1=require(a79_0x4e79e4(0x8e)),shortid_1=__importDefault(require('shortid')),constants_1=require(a79_0x4e79e4(0xab)),constants_2=require(a79_0x4e79e4(0x7c)),core_1=require(a79_0x4e79e4(0x89));class SFDXUtils{constructor(){const _0x17e1ff=a79_0x4e79e4;this[_0x17e1ff(0x83)]=new core_1[(_0x17e1ff(0x7b))](SFDXUtils[_0x17e1ff(0xac)]),this[_0x17e1ff(0x9f)]=path_1[_0x17e1ff(0x94)][_0x17e1ff(0x93)](process[_0x17e1ff(0x8c)](),_0x17e1ff(0xa4),_0x17e1ff(0x98)),this[_0x17e1ff(0xa2)]=shortid_1[_0x17e1ff(0x94)]();}get[a79_0x4e79e4(0x7d)](){const _0x20381c=a79_0x4e79e4;return''+this[_0x20381c(0xa2)];}get[a79_0x4e79e4(0x8b)](){const _0x21da83=a79_0x4e79e4;return path_1[_0x21da83(0x94)][_0x21da83(0x93)](this[_0x21da83(0x9f)],this[_0x21da83(0x7d)]);}async[a79_0x4e79e4(0x82)](_0x509654){const _0x497dda=a79_0x4e79e4;!await fs_internal_1['FS']['exists'](this[_0x497dda(0x9f)])&&await fs_internal_1['FS'][_0x497dda(0x9a)](this[_0x497dda(0x9f)]);await sfdx_utils_1[_0x497dda(0x87)][_0x497dda(0x8f)](this[_0x497dda(0x9f)],this['fullProjectName']),await sfdx_utils_1['SFDX'][_0x497dda(0xa9)](_0x509654),await sfdx_utils_1[_0x497dda(0x87)][_0x497dda(0xae)](_0x509654,this[_0x497dda(0x8b)]);const _0x5a4279=await fs_internal_1['FS'][_0x497dda(0x79)](_0x509654);for(const _0x36eb37 of _0x5a4279){constants_1[_0x497dda(0x9d)][_0x497dda(0xa3)](_0x22f0df=>_0x36eb37['endsWith'](_0x22f0df))&&(this['logger'][_0x497dda(0x86)]('copy\x20unsupported\x20folder\x20%s',_0x36eb37),await shell_internal_1['Shell'][_0x497dda(0x96)](_0x497dda(0x92)+_0x36eb37+'\x20'+this[_0x497dda(0x8b)]+'/'+constants_2[_0x497dda(0x95)]));}}async[a79_0x4e79e4(0x8a)](_0x12836a,_0x5202ed=!![]){const _0x3420ef=a79_0x4e79e4;_0x5202ed&&(!await fs_internal_1['FS'][_0x3420ef(0x9b)](_0x12836a+_0x3420ef(0xa0))&&(_0x5202ed=![])),_0x5202ed?await shell_internal_1[_0x3420ef(0xaf)]['exec']('cp\x20-r\x20'+this[_0x3420ef(0x8b)]+'/force-app\x20'+_0x12836a):await shell_internal_1['Shell'][_0x3420ef(0x96)]('cp\x20-r\x20'+this['dir']+_0x3420ef(0x9c)+_0x12836a);}async[a79_0x4e79e4(0x7a)](){const _0x17cab8=a79_0x4e79e4;await fs_internal_1['FS'][_0x17cab8(0x7a)](this[_0x17cab8(0x8b)]);}}function a79_0x33b7(){const _0x3e1180=['constructor','sfdx','SFDXUtils','makeDir','exists','/*\x20','SFDX_UNSUPPORTED_TYPES_FOLDERS','__esModule','PROJECTS_PATH','/sfdx-project.json','toString','uniqueId','some','.temp','defineProperty','../../internal/fs.internal','848830lrYwLv','14NZLoVW','createEmptyPackageXml','(((.+)+)+)+$','../constants','name','4042809whEjYc','mdapiToSource','Shell','4laVicz','readDir','removeDir','Logger','../../../../constants','fullProjectName','312125JhTQbc','301123QAfXcA','search','path','createProjectFrom','logger','117xDwJBn','3760212PhJgBJ','log','SFDX','apply','../../../../core','copyProjectTo','dir','cwd','34289350HSmFZR','../../salesforce/utils/sfdx.utils','createEmptyProject','313816RsIyuT','__importDefault','cp\x20-r\x20','join','default','FORCE_APP_DEFAULT_DIR','exec'];a79_0x33b7=function(){return _0x3e1180;};return a79_0x33b7();}exports[a79_0x4e79e4(0x99)]=SFDXUtils;