const a123_0x32e2c5=a123_0x64e5;function a123_0x64e5(_0x3f6336,_0x4deec8){const _0x3bcec3=a123_0x132d();return a123_0x64e5=function(_0x3a03ac,_0x25d3d4){_0x3a03ac=_0x3a03ac-0x8f;let _0x132dfa=_0x3bcec3[_0x3a03ac];return _0x132dfa;},a123_0x64e5(_0x3f6336,_0x4deec8);}function a123_0x132d(){const _0x24ab8d=['3806104oeZBCZ','__esModule','createProjectFrom','1786641VgQwax','makeDir','mdapiToSource','apply','dir','toString','/*\x20','Shell','shortid','defineProperty','message','uniqueId','cp\x20-r\x20','/force-app\x20','2562040igQtCc','default','SFDX','fullProjectName','path','../../internal/shell.internal','(((.+)+)+)+$','createEmptyProject','exec','.temp','copyProjectTo','7576xQmxAV','NO_RESULTS_TO_FORMAT','join','2408210IvtToQ','cwd','match','PROJECTS_PATH','33vPqQbo','SFDXUtils','4523495hhvxsu','search','4879836HIbjJq'];a123_0x132d=function(){return _0x24ab8d;};return a123_0x132d();}(function(_0x5680d7,_0x49863a){const _0x1e955e=a123_0x64e5,_0x1deafc=_0x5680d7();while(!![]){try{const _0x59a4df=-parseInt(_0x1e955e(0x98))/0x1*(-parseInt(_0x1e955e(0x91))/0x2)+parseInt(_0x1e955e(0xa0))/0x3+parseInt(_0x1e955e(0xae))/0x4+-parseInt(_0x1e955e(0x9a))/0x5+-parseInt(_0x1e955e(0x9c))/0x6+parseInt(_0x1e955e(0x94))/0x7+parseInt(_0x1e955e(0x9d))/0x8;if(_0x59a4df===_0x49863a)break;else _0x1deafc['push'](_0x1deafc['shift']());}catch(_0x4267f6){_0x1deafc['push'](_0x1deafc['shift']());}}}(a123_0x132d,0x71001));const a123_0x25d3d4=(function(){let _0x446636=!![];return function(_0x24be0c,_0x37f8da){const _0x8cae5d=_0x446636?function(){const _0x41c111=a123_0x64e5;if(_0x37f8da){const _0x308913=_0x37f8da[_0x41c111(0xa3)](_0x24be0c,arguments);return _0x37f8da=null,_0x308913;}}:function(){};return _0x446636=![],_0x8cae5d;};}()),a123_0x3a03ac=a123_0x25d3d4(this,function(){const _0x48067b=a123_0x64e5;return a123_0x3a03ac[_0x48067b(0xa5)]()['search'](_0x48067b(0xb4))[_0x48067b(0xa5)]()['constructor'](a123_0x3a03ac)[_0x48067b(0x9b)](_0x48067b(0xb4));});a123_0x3a03ac();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1166a3){const _0x3dae09=a123_0x64e5;return _0x1166a3&&_0x1166a3[_0x3dae09(0x9e)]?_0x1166a3:{'default':_0x1166a3};};Object[a123_0x32e2c5(0xa9)](exports,'__esModule',{'value':!![]}),exports[a123_0x32e2c5(0x99)]=void 0x0;const path_1=__importDefault(require(a123_0x32e2c5(0xb2))),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require(a123_0x32e2c5(0xb3)),sfdx_utils_1=require('../../salesforce/utils/sfdx.utils'),shortid_1=__importDefault(require(a123_0x32e2c5(0xa8))),sfdx_1=require('../../../../constants/sfdx');class SFDXUtils{constructor(){const _0x27a730=a123_0x32e2c5;this[_0x27a730(0x97)]=path_1[_0x27a730(0xaf)][_0x27a730(0x93)](process[_0x27a730(0x95)](),_0x27a730(0x8f),'sfdx'),this['uniqueId']=(0x0,shortid_1['default'])();}get[a123_0x32e2c5(0xb1)](){const _0xa7ae7c=a123_0x32e2c5;return''+this[_0xa7ae7c(0xab)];}get[a123_0x32e2c5(0xa4)](){const _0x565aed=a123_0x32e2c5;return path_1[_0x565aed(0xaf)][_0x565aed(0x93)](this[_0x565aed(0x97)],this[_0x565aed(0xb1)]);}async[a123_0x32e2c5(0x9f)](_0x5c9717){const _0x447e17=a123_0x32e2c5;!await fs_internal_1['FS']['exists'](this['PROJECTS_PATH'])&&await fs_internal_1['FS'][_0x447e17(0xa1)](this['PROJECTS_PATH']);await sfdx_utils_1[_0x447e17(0xb0)][_0x447e17(0xb5)](this[_0x447e17(0x97)],this['fullProjectName']),await sfdx_utils_1[_0x447e17(0xb0)]['createEmptyPackageXml'](_0x5c9717);try{await sfdx_utils_1[_0x447e17(0xb0)][_0x447e17(0xa2)](_0x5c9717,this[_0x447e17(0xa4)]);}catch(_0x15f4c7){if(!_0x15f4c7[_0x447e17(0xaa)][_0x447e17(0x96)](sfdx_1[_0x447e17(0x92)]))throw _0x15f4c7;}}async[a123_0x32e2c5(0x90)](_0x545384,_0x2a04ec=!![]){const _0x275aa1=a123_0x32e2c5;_0x2a04ec&&(!await fs_internal_1['FS']['exists'](_0x545384+'/sfdx-project.json')&&(_0x2a04ec=![])),_0x2a04ec?await shell_internal_1[_0x275aa1(0xa7)][_0x275aa1(0xb6)](_0x275aa1(0xac)+this['dir']+_0x275aa1(0xad)+_0x545384):await shell_internal_1[_0x275aa1(0xa7)][_0x275aa1(0xb6)](_0x275aa1(0xac)+this[_0x275aa1(0xa4)]+_0x275aa1(0xa6)+_0x545384);}async['removeDir'](){const _0x133a11=a123_0x32e2c5;await fs_internal_1['FS']['removeDir'](this[_0x133a11(0xa4)]);}}exports[a123_0x32e2c5(0x99)]=SFDXUtils;