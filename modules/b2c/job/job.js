const a66_0x3b3df9=a66_0x543e;(function(_0x958f59,_0x1848d1){const _0x5c26c8=a66_0x543e,_0x288210=_0x958f59();while(!![]){try{const _0x190e5f=-parseInt(_0x5c26c8(0x108))/0x1+-parseInt(_0x5c26c8(0x119))/0x2+-parseInt(_0x5c26c8(0x135))/0x3*(-parseInt(_0x5c26c8(0x123))/0x4)+parseInt(_0x5c26c8(0xef))/0x5*(-parseInt(_0x5c26c8(0x106))/0x6)+-parseInt(_0x5c26c8(0xee))/0x7*(-parseInt(_0x5c26c8(0xff))/0x8)+parseInt(_0x5c26c8(0x126))/0x9*(parseInt(_0x5c26c8(0xf7))/0xa)+-parseInt(_0x5c26c8(0x133))/0xb*(-parseInt(_0x5c26c8(0x114))/0xc);if(_0x190e5f===_0x1848d1)break;else _0x288210['push'](_0x288210['shift']());}catch(_0x4546a1){_0x288210['push'](_0x288210['shift']());}}}(a66_0x3e18,0x66f84));const a66_0x381291=(function(){let _0x1ea91f=!![];return function(_0x44ff4f,_0xdc8968){const _0x5d8308=_0x1ea91f?function(){if(_0xdc8968){const _0x46cd83=_0xdc8968['apply'](_0x44ff4f,arguments);return _0xdc8968=null,_0x46cd83;}}:function(){};return _0x1ea91f=![],_0x5d8308;};}()),a66_0x332db1=a66_0x381291(this,function(){const _0x1c9676=a66_0x543e;return a66_0x332db1[_0x1c9676(0x115)]()[_0x1c9676(0x107)](_0x1c9676(0x122))[_0x1c9676(0x115)]()[_0x1c9676(0xf5)](a66_0x332db1)[_0x1c9676(0x107)]('(((.+)+)+)+$');});a66_0x332db1();'use strict';function a66_0x3e18(){const _0x580994=['FLOSUM_NAMESPACE','AuthManager','AxiosInstanceUtils','activateCodeVersion','jobId','constructor','create','10BxYOwl','./classes/salesforce-auth','@flosum/salesforce','./classes/run-script','======\x20Deploy\x20cartridges\x20','log','catch','Job','8UflJnp','codeVersion','isExistsPath','env','__esModule','======\x20Retrieve\x20cartridges\x20','B2C\x20job\x20has\x20been\x20failed.','12HmNziz','search','694256nxtRFw','./classes/retrieve-cartridges','then','../constants','variables','getFlosumNamespace','execute','path','slice','exit','FsUtils','../../../core','926916PTJIGX','toString','credentials','setInProgress','logger','1247576FHslYe','default','setError','error','cartridges','IGNORE_FLOSUM_NAMESPACE','getAxiosInstance','branchId','deployCartridges','(((.+)+)+)+$','663596SBaVTk','retrieveCartridges','axiosInstance','3820086VoWwFQ','toLowerCase','defineProperty','isActivateCodeVersion','join','runScript','B2C\x20job\x20has\x20been\x20completed.','./classes/logger','minimist','jobPath','isCompileCartridges','true','getManifestParameters','55bUhUKY','argv','12qZKQOG','setCompleted','apiVersion','padEnd','./classes/manifest-manager','namespace','../../shared/managers/auth.manager','init','3787105FCsRQd','688680kyZsrD'];a66_0x3e18=function(){return _0x580994;};return a66_0x3e18();}var __importDefault=this&&this['__importDefault']||function(_0xb40e0a){const _0x22dec8=a66_0x543e;return _0xb40e0a&&_0xb40e0a[_0x22dec8(0x103)]?_0xb40e0a:{'default':_0xb40e0a};};function a66_0x543e(_0x536434,_0x2f2fb2){const _0x46216d=a66_0x3e18();return a66_0x543e=function(_0x332db1,_0x381291){_0x332db1=_0x332db1-0xe9;let _0x3e18bc=_0x46216d[_0x332db1];return _0x3e18bc;},a66_0x543e(_0x536434,_0x2f2fb2);}Object[a66_0x3b3df9(0x128)](exports,a66_0x3b3df9(0x103),{'value':!![]}),exports[a66_0x3b3df9(0xfe)]=void 0x0;const core_1=require(a66_0x3b3df9(0x113)),salesforce_1=require(a66_0x3b3df9(0xf9)),auth_manager_1=require(a66_0x3b3df9(0xec)),constants_1=require(a66_0x3b3df9(0x10b)),utils_1=require('@flosum/utils'),minimist_1=__importDefault(require(a66_0x3b3df9(0x12e))),path_1=__importDefault(require(a66_0x3b3df9(0x10f))),state_manger_1=__importDefault(require('../../shared/managers/state-manger')),logger_1=__importDefault(require(a66_0x3b3df9(0x12d))),retrieve_cartridges_1=__importDefault(require(a66_0x3b3df9(0x109))),deploy_cartridges_1=__importDefault(require('./classes/deploy-cartridges')),run_script_1=__importDefault(require(a66_0x3b3df9(0xfa))),manifest_manager_1=__importDefault(require(a66_0x3b3df9(0xea))),salesforce_auth_1=__importDefault(require(a66_0x3b3df9(0xf8)));class Job{constructor(){const _0x49c20a=a66_0x3b3df9,{jobId:_0x1ea2ff,jobStorePath:_0x56bf82}=(0x0,minimist_1['default'])(process[_0x49c20a(0x134)][_0x49c20a(0x110)](0x2));this['jobPath']=_0x56bf82,this[_0x49c20a(0xf4)]=_0x1ea2ff;}async['execute'](){const _0x3038e2=a66_0x3b3df9,_0x324c18=new core_1['Logger'](this[_0x3038e2(0xf4)]);this[_0x3038e2(0x118)]=new logger_1[(_0x3038e2(0x11a))](this[_0x3038e2(0xf4)],_0x324c18);const _0x226e83=await new state_manger_1['default'](this[_0x3038e2(0x12f)])[_0x3038e2(0xed)](),_0x379eea=path_1[_0x3038e2(0x11a)][_0x3038e2(0x12a)](this[_0x3038e2(0x12f)],_0x3038e2(0x11d),constants_1['FLOSUM_SCRIPT_PATH']);await this[_0x3038e2(0x118)][_0x3038e2(0xfc)]('B2C\x20job\x20has\x20been\x20started.');try{await _0x226e83[_0x3038e2(0x117)](),this[_0x3038e2(0x125)]=await this[_0x3038e2(0x11f)](),this[_0x3038e2(0xeb)]=this[_0x3038e2(0x10d)](),await this[_0x3038e2(0x132)](),await this[_0x3038e2(0x124)](),await utils_1[_0x3038e2(0x112)][_0x3038e2(0x101)](_0x379eea)?await this[_0x3038e2(0x12b)]():(await this[_0x3038e2(0x121)](),this[_0x3038e2(0x129)]&&await this[_0x3038e2(0xf3)]()),await _0x226e83[_0x3038e2(0x136)](),await this[_0x3038e2(0x118)][_0x3038e2(0xfc)](_0x3038e2(0x12c));}catch(_0x4d066b){await _0x226e83[_0x3038e2(0x11b)](_0x4d066b),await this[_0x3038e2(0x118)][_0x3038e2(0x11c)](_0x4d066b['message']),await this['logger'][_0x3038e2(0x11c)](_0x3038e2(0x105));}}async[a66_0x3b3df9(0x132)](){const _0x2d68de=a66_0x3b3df9,{credentials:_0x3bbafe,apiVersion:_0x5bca6e,branchId:_0x2af817,codeVersion:_0x55ff6c,isCompileCartridges:_0x5504fb,isActivateCodeVersion:_0x263558,variables:_0x2e79f0}=await new manifest_manager_1['default'](this['jobPath'])[_0x2d68de(0xed)]();this['credentials']=_0x3bbafe,this[_0x2d68de(0x137)]=_0x5bca6e,this[_0x2d68de(0x120)]=_0x2af817,this[_0x2d68de(0x100)]=_0x55ff6c,this[_0x2d68de(0x130)]=_0x5504fb,this[_0x2d68de(0x129)]=_0x263558,this[_0x2d68de(0x10c)]=_0x2e79f0;}async['getAxiosInstance'](){const _0x5c8e8c=a66_0x3b3df9,_0x349524=await salesforce_auth_1[_0x5c8e8c(0x11a)]['getAuthDetails']();return salesforce_1[_0x5c8e8c(0xf2)][_0x5c8e8c(0xf6)](new auth_manager_1[(_0x5c8e8c(0xf1))](_0x349524),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a66_0x3b3df9(0x124)](){const _0x1405d5=a66_0x3b3df9;await this[_0x1405d5(0x118)][_0x1405d5(0xfc)](_0x1405d5(0x104)[_0x1405d5(0xe9)](0x32,'=')),await new retrieve_cartridges_1['default'](this[_0x1405d5(0x12f)],this[_0x1405d5(0x125)],this[_0x1405d5(0x137)],this[_0x1405d5(0xeb)],this[_0x1405d5(0x120)],this['variables'],this[_0x1405d5(0x118)])[_0x1405d5(0x10e)]();}async[a66_0x3b3df9(0x12b)](){const _0x5cca91=a66_0x3b3df9;await this[_0x5cca91(0x118)][_0x5cca91(0xfc)]('======\x20Run\x20script\x20'[_0x5cca91(0xe9)](0x32,'=')),await new run_script_1[(_0x5cca91(0x11a))](this[_0x5cca91(0x12f)],this[_0x5cca91(0x116)],this[_0x5cca91(0x100)],this['isCompileCartridges'],this[_0x5cca91(0x129)],this['logger'])[_0x5cca91(0x10e)]();}async[a66_0x3b3df9(0x121)](){const _0x522dcb=a66_0x3b3df9;await this[_0x522dcb(0x118)]['log'](_0x522dcb(0xfb)[_0x522dcb(0xe9)](0x32,'=')),await new deploy_cartridges_1[(_0x522dcb(0x11a))](this[_0x522dcb(0x12f)],this[_0x522dcb(0x116)],this[_0x522dcb(0x100)],this[_0x522dcb(0x118)])[_0x522dcb(0x10e)]();}async[a66_0x3b3df9(0xf3)](){const _0x5f2cd3=a66_0x3b3df9;await this[_0x5f2cd3(0x118)][_0x5f2cd3(0xfc)]('======\x20Deploy\x20cartridges\x20'[_0x5f2cd3(0xe9)](0x32,'=')),await new deploy_cartridges_1[(_0x5f2cd3(0x11a))](this[_0x5f2cd3(0x12f)],this[_0x5f2cd3(0x116)],this['codeVersion'],this[_0x5f2cd3(0x118)])[_0x5f2cd3(0xf3)]();}[a66_0x3b3df9(0x10d)](){const _0x39194f=a66_0x3b3df9;var _0x1c1e2c,_0x43628e;return((_0x43628e=(_0x1c1e2c=process[_0x39194f(0x102)])===null||_0x1c1e2c===void 0x0?void 0x0:_0x1c1e2c[_0x39194f(0x11e)])===null||_0x43628e===void 0x0?void 0x0:_0x43628e[_0x39194f(0x127)]())===_0x39194f(0x131)?'':constants_1[_0x39194f(0xf0)];}}exports[a66_0x3b3df9(0xfe)]=Job,new Job()[a66_0x3b3df9(0x10e)]()[a66_0x3b3df9(0x10a)](()=>process[a66_0x3b3df9(0x111)](0x0))[a66_0x3b3df9(0xfd)](()=>process[a66_0x3b3df9(0x111)](0x1));