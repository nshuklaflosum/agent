const a123_0x2d87fa=a123_0x4fbd;(function(_0x2df200,_0x47efe9){const _0x3d7cb4=a123_0x4fbd,_0x24f44e=_0x2df200();while(!![]){try{const _0x30289c=parseInt(_0x3d7cb4(0x105))/0x1+parseInt(_0x3d7cb4(0x101))/0x2*(-parseInt(_0x3d7cb4(0xdc))/0x3)+-parseInt(_0x3d7cb4(0xed))/0x4*(-parseInt(_0x3d7cb4(0xe5))/0x5)+-parseInt(_0x3d7cb4(0xe2))/0x6*(parseInt(_0x3d7cb4(0xfd))/0x7)+-parseInt(_0x3d7cb4(0x107))/0x8*(-parseInt(_0x3d7cb4(0xfa))/0x9)+-parseInt(_0x3d7cb4(0x109))/0xa*(-parseInt(_0x3d7cb4(0xef))/0xb)+parseInt(_0x3d7cb4(0xff))/0xc*(-parseInt(_0x3d7cb4(0xee))/0xd);if(_0x30289c===_0x47efe9)break;else _0x24f44e['push'](_0x24f44e['shift']());}catch(_0x4b25b2){_0x24f44e['push'](_0x24f44e['shift']());}}}(a123_0x4fec,0x7bbc3));const a123_0x10e366=(function(){let _0x32ce8c=!![];return function(_0x170198,_0x6cef6e){const _0x23236c=_0x32ce8c?function(){if(_0x6cef6e){const _0x4197a0=_0x6cef6e['apply'](_0x170198,arguments);return _0x6cef6e=null,_0x4197a0;}}:function(){};return _0x32ce8c=![],_0x23236c;};}()),a123_0x2b66c3=a123_0x10e366(this,function(){const _0x509ed7=a123_0x4fbd;return a123_0x2b66c3[_0x509ed7(0xf6)]()['search']('(((.+)+)+)+$')[_0x509ed7(0xf6)]()[_0x509ed7(0x108)](a123_0x2b66c3)[_0x509ed7(0xf1)](_0x509ed7(0xd9));});a123_0x2b66c3();function a123_0x4fbd(_0x47aa50,_0x73bd9a){const _0x4631c2=a123_0x4fec();return a123_0x4fbd=function(_0x2b66c3,_0x10e366){_0x2b66c3=_0x2b66c3-0xd7;let _0x4fecf2=_0x4631c2[_0x2b66c3];return _0x4fecf2;},a123_0x4fbd(_0x47aa50,_0x73bd9a);}'use strict';var __importDefault=this&&this[a123_0x2d87fa(0xf4)]||function(_0x2c38be){return _0x2c38be&&_0x2c38be['__esModule']?_0x2c38be:{'default':_0x2c38be};};Object[a123_0x2d87fa(0xf0)](exports,a123_0x2d87fa(0xe7),{'value':!![]}),exports[a123_0x2d87fa(0xe9)]=void 0x0;const path_1=__importDefault(require(a123_0x2d87fa(0xf9))),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require('../../internal/shell.internal'),sfdx_utils_1=require(a123_0x2d87fa(0xf8)),shortid_1=__importDefault(require(a123_0x2d87fa(0xf2))),sfdx_1=require('../../../../constants/sfdx'),promises_1=require(a123_0x2d87fa(0xdd)),vlocity_1=require(a123_0x2d87fa(0x10a));class SFDXUtils{constructor(){const _0x1b8b3b=a123_0x2d87fa;this[_0x1b8b3b(0xfc)]=path_1['default']['join'](process[_0x1b8b3b(0xd7)](),_0x1b8b3b(0xdf),'sfdx'),this[_0x1b8b3b(0xd8)]=(0x0,shortid_1[_0x1b8b3b(0xe6)])();}get[a123_0x2d87fa(0xeb)](){const _0x48f0e5=a123_0x2d87fa;return''+this[_0x48f0e5(0xd8)];}get[a123_0x2d87fa(0xdb)](){const _0x4d6869=a123_0x2d87fa;return path_1['default'][_0x4d6869(0xde)](this['PROJECTS_PATH'],this[_0x4d6869(0xeb)]);}async[a123_0x2d87fa(0x103)](_0x23e118){const _0xffcf00=a123_0x2d87fa;!await fs_internal_1['FS']['exists'](this[_0xffcf00(0xfc)])&&await fs_internal_1['FS'][_0xffcf00(0xe4)](this[_0xffcf00(0xfc)]);await sfdx_utils_1[_0xffcf00(0x102)][_0xffcf00(0x106)](this[_0xffcf00(0xfc)],this['fullProjectName']),await sfdx_utils_1['SFDX'][_0xffcf00(0x10b)](_0x23e118);try{await sfdx_utils_1[_0xffcf00(0x102)]['mdapiToSource'](_0x23e118,this[_0xffcf00(0xdb)]);}catch(_0x20761f){if(!_0x20761f['message'][_0xffcf00(0xf7)](sfdx_1[_0xffcf00(0xe0)]))throw _0x20761f;}}async[a123_0x2d87fa(0xf5)](_0x15d67a,_0x17d07a=!![]){const _0x182a93=a123_0x2d87fa;_0x17d07a&&(!await fs_internal_1['FS'][_0x182a93(0xe8)](_0x15d67a+_0x182a93(0xe3))&&(_0x17d07a=![])),_0x17d07a?await shell_internal_1[_0x182a93(0x104)][_0x182a93(0xfb)]('cp\x20-r\x20'+this[_0x182a93(0xdb)]+_0x182a93(0xec)+_0x15d67a):await shell_internal_1['Shell']['exec'](_0x182a93(0xda)+this[_0x182a93(0xdb)]+_0x182a93(0xf3)+_0x15d67a);}async[a123_0x2d87fa(0xea)](){const _0x289ba1=a123_0x2d87fa;await fs_internal_1['FS'][_0x289ba1(0xea)](this[_0x289ba1(0xdb)]);}async[a123_0x2d87fa(0xfe)](_0x286d44,_0x1084d5){const _0x10fd12=a123_0x2d87fa,_0x5aca1d=await(0x0,promises_1['readdir'])(_0x286d44),_0x327e61=_0x5aca1d[_0x10fd12(0x100)](_0x284cbc=>(0x0,vlocity_1[_0x10fd12(0xe1)])(_0x284cbc));for(const _0x1d66cf of _0x327e61){const _0x1ae421=path_1['default'][_0x10fd12(0xde)](_0x286d44,_0x1d66cf),_0x2bc376=path_1[_0x10fd12(0xe6)][_0x10fd12(0xde)](_0x1084d5,_0x1d66cf);await(0x0,promises_1['cp'])(_0x1ae421,_0x2bc376,{'recursive':!![]});}}}exports[a123_0x2d87fa(0xe9)]=SFDXUtils;function a123_0x4fec(){const _0x32140e=['cwd','uniqueId','(((.+)+)+)+$','cp\x20-r\x20','dir','3ToqUyf','fs/promises','join','.temp','NO_RESULTS_TO_FORMAT','isVlocityComponent','6RpRfCA','/sfdx-project.json','makeDir','300YNCiSH','default','__esModule','exists','SFDXUtils','removeDir','fullProjectName','/force-app\x20','45724vFhsQk','3079271eSBhUp','495066vNyNSi','defineProperty','search','shortid','/*\x20','__importDefault','copyProjectTo','toString','match','../../salesforce/utils/sfdx.utils','path','2691nawwVS','exec','PROJECTS_PATH','2740969UAcayJ','copyVlocityComponents','48KBeYXm','filter','736210Dktpxr','SFDX','createProjectFrom','Shell','629201PoAcDo','createEmptyProject','4784wRvMbW','constructor','160kVXIOk','../../parsers/utils/vlocity','createEmptyPackageXml'];a123_0x4fec=function(){return _0x32140e;};return a123_0x4fec();}