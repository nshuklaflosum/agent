const a311_0x395e12=a311_0x134d;(function(_0xc9dede,_0x19902c){const _0x4076da=a311_0x134d,_0x4414bf=_0xc9dede();while(!![]){try{const _0x366bf0=-parseInt(_0x4076da(0x15f))/0x1*(-parseInt(_0x4076da(0x16e))/0x2)+parseInt(_0x4076da(0x160))/0x3*(-parseInt(_0x4076da(0x165))/0x4)+parseInt(_0x4076da(0x175))/0x5+parseInt(_0x4076da(0x15d))/0x6+-parseInt(_0x4076da(0x163))/0x7+-parseInt(_0x4076da(0x167))/0x8+-parseInt(_0x4076da(0x15b))/0x9;if(_0x366bf0===_0x19902c)break;else _0x4414bf['push'](_0x4414bf['shift']());}catch(_0x1b45a7){_0x4414bf['push'](_0x4414bf['shift']());}}}(a311_0x596f,0xd3597));const a311_0x5f5381=(function(){let _0x160368=!![];return function(_0x422d1e,_0x5da8c6){const _0xa7f370=_0x160368?function(){if(_0x5da8c6){const _0x1b2533=_0x5da8c6['apply'](_0x422d1e,arguments);return _0x5da8c6=null,_0x1b2533;}}:function(){};return _0x160368=![],_0xa7f370;};}()),a311_0x3db52c=a311_0x5f5381(this,function(){const _0xd516b2=a311_0x134d;return a311_0x3db52c[_0xd516b2(0x172)]()[_0xd516b2(0x15e)](_0xd516b2(0x16f))['toString']()[_0xd516b2(0x16c)](a311_0x3db52c)[_0xd516b2(0x15e)]('(((.+)+)+)+$');});a311_0x3db52c();'use strict';var __importDefault=this&&this[a311_0x395e12(0x176)]||function(_0x2632c2){const _0x3f8556=a311_0x395e12;return _0x2632c2&&_0x2632c2[_0x3f8556(0x152)]?_0x2632c2:{'default':_0x2632c2};};Object['defineProperty'](exports,a311_0x395e12(0x152),{'value':!![]}),exports['ZipCreatorDeploy']=void 0x0;const jszip_1=__importDefault(require(a311_0x395e12(0x16d))),sequence_creator_deploy_1=require(a311_0x395e12(0x159)),xml2js_1=require('xml2js'),veeva_constants_1=require(a311_0x395e12(0x174)),path_1=__importDefault(require(a311_0x395e12(0x15a))),VAULT_PACKAGE_FILENAME='vaultpackage.xml';class ZipCreatorDeploy{constructor({attachmentBodies:_0x1172d8,deploymentName:_0x5bba1e}){const _0x2ab9da=a311_0x395e12;this[_0x2ab9da(0x169)]=new Map(),this[_0x2ab9da(0x16b)]=new Map(),this['mainZip']=new jszip_1[(_0x2ab9da(0x168))](),this['attachmentBodies']=_0x1172d8,this[_0x2ab9da(0x156)]=_0x5bba1e;}async[a311_0x395e12(0x150)](){const _0x3777ee=a311_0x395e12;var _0x3081b6;for(const _0x169df4 of this[_0x3777ee(0x179)]){const _0x2594a8=new jszip_1['default']();await _0x2594a8[_0x3777ee(0x177)](_0x169df4,{'base64':!![]});for(const _0x591d08 in _0x2594a8[_0x3777ee(0x17c)]){const _0x17a9ac=await((_0x3081b6=_0x2594a8[_0x3777ee(0x171)](_0x591d08))===null||_0x3081b6===void 0x0?void 0x0:_0x3081b6[_0x3777ee(0x155)](_0x3777ee(0x17a)));if(!_0x17a9ac)continue;const {name:_0x3887f9,ext:_0x31d63d}=path_1[_0x3777ee(0x168)][_0x3777ee(0x157)](_0x591d08);switch(_0x31d63d){case veeva_constants_1[_0x3777ee(0x17b)][_0x3777ee(0x151)]:this[_0x3777ee(0x169)]['set'](_0x3887f9,_0x17a9ac);break;case veeva_constants_1[_0x3777ee(0x17b)][_0x3777ee(0x153)]:this[_0x3777ee(0x16b)][_0x3777ee(0x164)](_0x3887f9,_0x17a9ac);break;}}}}[a311_0x395e12(0x161)](){const _0x50f602=a311_0x395e12,_0x160897=new xml2js_1['Builder']({'headless':!![]}),_0x441bf6={'vaultpackage':{'$':{'xmlns':_0x50f602(0x16a)},'name':this[_0x50f602(0x156)],'source':{'vault':undefined,'author':_0x50f602(0x170)},'packagetype':_0x50f602(0x166),'summary':_0x50f602(0x178),'description':'null'}};this[_0x50f602(0x162)][_0x50f602(0x171)](VAULT_PACKAGE_FILENAME,_0x160897['buildObject'](_0x441bf6));}async[a311_0x395e12(0x15c)](){const _0x42404c=a311_0x395e12;await this[_0x42404c(0x150)]();const _0x487528=new sequence_creator_deploy_1[(_0x42404c(0x154))]({'dependencyFileByName':this['dependencyFileByName']})[_0x42404c(0x15c)]();for(const _0x2e5aca of _0x487528){const _0x4ca084=this[_0x42404c(0x16b)]['get'](_0x2e5aca);_0x4ca084&&this['mainZip'][_0x42404c(0x171)](_0x2e5aca+veeva_constants_1[_0x42404c(0x17b)]['MDL_EXTENSION'],_0x4ca084);}return this['addVaultPackageFile'](),this[_0x42404c(0x162)][_0x42404c(0x158)]({'type':_0x42404c(0x173)});}}function a311_0x596f(){const _0x271142=['deploymentName','parse','generateAsync','./sequence-creator.deploy','path','6109470ynqXNk','execute','7794900aCjZbT','search','1620019eEbGuJ','39bMlFZI','addVaultPackageFile','mainZip','8231531kUVUWq','set','238120Cchafd','migration__v','3239656tRTSXE','default','dependencyFileByName','https://veevavault.com/','mdlFileByName','constructor','jszip','2RcSphi','(((.+)+)+)+$','Flosum','file','toString','nodebuffer','../../constants/veeva.constants','4900640IwFtXX','__importDefault','loadAsync','Deploy','attachmentBodies','string','VeevaConstants','files','ZipCreatorDeploy','fillFileByNames','DEPENDENCY_EXTENSION','__esModule','MDL_EXTENSION','SequenceCreatorDeploy','async'];a311_0x596f=function(){return _0x271142;};return a311_0x596f();}function a311_0x134d(_0x601306,_0x52fc18){const _0xd75d9c=a311_0x596f();return a311_0x134d=function(_0x3db52c,_0x5f5381){_0x3db52c=_0x3db52c-0x150;let _0x596fcd=_0xd75d9c[_0x3db52c];return _0x596fcd;},a311_0x134d(_0x601306,_0x52fc18);}exports[a311_0x395e12(0x17d)]=ZipCreatorDeploy;