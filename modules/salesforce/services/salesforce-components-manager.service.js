const a128_0x11fe3f=a128_0x1714;(function(_0x234220,_0x2cad5d){const _0x17b6cc=a128_0x1714,_0x2762b0=_0x234220();while(!![]){try{const _0x2d8f0e=parseInt(_0x17b6cc(0x16b))/0x1+-parseInt(_0x17b6cc(0x140))/0x2*(parseInt(_0x17b6cc(0x136))/0x3)+-parseInt(_0x17b6cc(0x161))/0x4*(parseInt(_0x17b6cc(0x160))/0x5)+-parseInt(_0x17b6cc(0x149))/0x6+parseInt(_0x17b6cc(0x15f))/0x7+parseInt(_0x17b6cc(0x14f))/0x8*(parseInt(_0x17b6cc(0x14a))/0x9)+-parseInt(_0x17b6cc(0x145))/0xa;if(_0x2d8f0e===_0x2cad5d)break;else _0x2762b0['push'](_0x2762b0['shift']());}catch(_0x5329c4){_0x2762b0['push'](_0x2762b0['shift']());}}}(a128_0x490a,0xc23ad));const a128_0x1df130=(function(){let _0x541498=!![];return function(_0x276866,_0x283b6b){const _0x5f5da7=_0x541498?function(){if(_0x283b6b){const _0x189fa8=_0x283b6b['apply'](_0x276866,arguments);return _0x283b6b=null,_0x189fa8;}}:function(){};return _0x541498=![],_0x5f5da7;};}()),a128_0x2e46ed=a128_0x1df130(this,function(){const _0x1d12e9=a128_0x1714;return a128_0x2e46ed[_0x1d12e9(0x11a)]()[_0x1d12e9(0x11e)]('(((.+)+)+)+$')[_0x1d12e9(0x11a)]()[_0x1d12e9(0x163)](a128_0x2e46ed)['search'](_0x1d12e9(0x141));});a128_0x2e46ed();'use strict';function a128_0x1714(_0xe59d17,_0x30d296){const _0x39391e=a128_0x490a();return a128_0x1714=function(_0x2e46ed,_0x1df130){_0x2e46ed=_0x2e46ed-0x118;let _0x490a14=_0x39391e[_0x2e46ed];return _0x490a14;},a128_0x1714(_0xe59d17,_0x30d296);}var __importDefault=this&&this[a128_0x11fe3f(0x16a)]||function(_0xa89192){return _0xa89192&&_0xa89192['__esModule']?_0xa89192:{'default':_0xa89192};};Object[a128_0x11fe3f(0x165)](exports,'__esModule',{'value':!![]}),exports[a128_0x11fe3f(0x127)]=void 0x0;const constants_1=require(a128_0x11fe3f(0x151)),core_1=require(a128_0x11fe3f(0x11f)),zip_1=require(a128_0x11fe3f(0x119)),typedi_1=__importDefault(require('typedi')),salesforce_error_1=require(a128_0x11fe3f(0x12a)),composite_utils_1=require(a128_0x11fe3f(0x146)),flosum_naming_utils_1=require(a128_0x11fe3f(0x143)),salesforce_git_sync_service_1=require(a128_0x11fe3f(0x12c));class SalesforceComponentsManager{constructor(_0x191ec2,_0x30e393,_0x10c675,_0x31862a,_0x192445){const _0x413559=a128_0x11fe3f;this[_0x413559(0x14d)]=_0x191ec2,this[_0x413559(0x120)]=_0x30e393,this[_0x413559(0x14e)]=_0x10c675,this['recordTypes']=_0x31862a,this[_0x413559(0x124)]=_0x192445,this[_0x413559(0x172)]=new core_1[(_0x413559(0x11d))](SalesforceComponentsManager[_0x413559(0x131)]),this['gitSync']=typedi_1['default']['get'](salesforce_git_sync_service_1[_0x413559(0x173)]);}['proceedComponentMeta'](_0x576e14,_0x290f64){const _0x226fde=a128_0x11fe3f,_0x3de718=flosum_naming_utils_1['extractFieldsFromRecord'](_0x576e14,['Component_Type__c','Component_Name__c',_0x226fde(0x132)]);this[_0x226fde(0x124)][_0x226fde(0x158)]({'componentId':'','reference':_0x290f64,'version':_0x3de718[_0x226fde(0x132)],'componentName':_0x3de718[_0x226fde(0x16f)],'componentType':_0x3de718[_0x226fde(0x154)]});}['prepareCommitManifest'](_0x546cc3,_0x17e7e6){const _0x511d92=a128_0x11fe3f,{request:_0x5d9c99}=composite_utils_1[_0x511d92(0x164)](constants_1[_0x511d92(0x122)],{[constants_1[_0x511d92(0x12e)]+_0x511d92(0x157)]:_0x546cc3,[constants_1['FLOSUM_NAMESPACE']+_0x511d92(0x125)]:_0x17e7e6});return _0x5d9c99;}async[a128_0x11fe3f(0x148)](_0x1be73b,_0xb8f941){const _0x21335d=a128_0x11fe3f,_0x85bc35={},_0x1d5dcd=zip_1[_0x21335d(0x12b)][_0x21335d(0x177)]();for(const _0x249599 of Object[_0x21335d(0x142)](_0x1be73b[_0x21335d(0x156)])){_0x1d5dcd['file'](_0x249599,_0x1be73b[_0x21335d(0x156)][_0x249599],{'createFolders':!![]});}return _0x85bc35['ContentType']=_0x21335d(0x12f),_0x85bc35[_0x21335d(0x15e)]=_0x1be73b[_0x21335d(0x13b)],_0x85bc35[_0x21335d(0x153)]=_0x1be73b[_0x21335d(0x13b)],_0x85bc35['ParentId']=_0xb8f941,_0x85bc35[_0x21335d(0x147)]=await _0x1d5dcd['generateAsync']({'type':_0x21335d(0x15a),'compression':_0x21335d(0x175),'compressionOptions':{'level':0x6}}),_0x85bc35;}[a128_0x11fe3f(0x159)](_0x5ac197,_0x4379e9,_0x2fa227){const _0x4ab1c3=a128_0x11fe3f,_0x2b2464=new Date()[_0x4ab1c3(0x152)](),_0x96f425={};return _0x96f425[constants_1[_0x4ab1c3(0x12e)]+'Component__c']=_0x4379e9,_0x96f425[constants_1[_0x4ab1c3(0x12e)]+_0x4ab1c3(0x13d)]=_0x5ac197[_0x4ab1c3(0x118)],_0x96f425[constants_1['FLOSUM_NAMESPACE']+_0x4ab1c3(0x16d)]=_0x2b2464,_0x96f425[constants_1[_0x4ab1c3(0x12e)]+_0x4ab1c3(0x178)]=this[_0x4ab1c3(0x14e)],_0x96f425[constants_1[_0x4ab1c3(0x12e)]+_0x4ab1c3(0x132)]=_0x2fa227?_0x2fa227+0x1:0x1,_0x96f425[constants_1[_0x4ab1c3(0x15b)]+_0x4ab1c3(0x139)]=!![],_0x96f425;}['prepareComponentRecord'](_0x18bcb3,_0x1f60f0){const _0x151b74=a128_0x11fe3f;var _0x20a31e,_0xee7c42;const _0x42b65c=new Date()[_0x151b74(0x152)](),_0x222de4={};return!_0x1f60f0?(this[_0x151b74(0x120)]?(_0x222de4[constants_1[_0x151b74(0x12e)]+'Branch__c']=this[_0x151b74(0x120)],_0x222de4[constants_1[_0x151b74(0x12e)]+_0x151b74(0x13a)]=_0x151b74(0x126),_0x222de4['RecordTypeId']=(_0x20a31e=this[_0x151b74(0x16e)][_0x151b74(0x129)](_0x446d58=>_0x446d58['name']==='Branch'))===null||_0x20a31e===void 0x0?void 0x0:_0x20a31e['id']):(_0x222de4[constants_1[_0x151b74(0x12e)]+'Repository__c']=this[_0x151b74(0x14d)],_0x222de4[constants_1[_0x151b74(0x12e)]+'Source__c']='Repository',_0x222de4[_0x151b74(0x13f)]=(_0xee7c42=this['recordTypes'][_0x151b74(0x129)](_0x55156a=>_0x55156a[_0x151b74(0x131)]===_0x151b74(0x150)))===null||_0xee7c42===void 0x0?void 0x0:_0xee7c42['id']),_0x222de4[constants_1[_0x151b74(0x12e)]+_0x151b74(0x132)]=0x1):_0x222de4[constants_1[_0x151b74(0x12e)]+_0x151b74(0x132)]=_0x1f60f0[_0x151b74(0x170)]+0x1,_0x222de4[constants_1[_0x151b74(0x12e)]+'Component_Type__c']=_0x18bcb3['type'],_0x222de4[constants_1[_0x151b74(0x12e)]+_0x151b74(0x16f)]=_0x18bcb3[_0x151b74(0x131)],_0x222de4[constants_1[_0x151b74(0x12e)]+_0x151b74(0x14c)]=_0x18bcb3[_0x151b74(0x162)],_0x222de4[constants_1['FLOSUM_NAMESPACE']+_0x151b74(0x137)]=this[_0x151b74(0x14e)],_0x222de4[constants_1[_0x151b74(0x12e)]+'Last_Modified_By__c']=this[_0x151b74(0x14e)],_0x222de4[constants_1[_0x151b74(0x12e)]+_0x151b74(0x144)]=_0x42b65c,_0x222de4[constants_1[_0x151b74(0x12e)]+_0x151b74(0x123)]=_0x42b65c,_0x222de4[constants_1['FLOSUM_NAMESPACE']+_0x151b74(0x13d)]=_0x18bcb3[_0x151b74(0x118)],_0x222de4;}['getProceededComponentsMeta'](){return this['proceededComponentsMeta'];}async['insert'](_0x4cbc10,_0x17df82){const _0x506b5d=a128_0x11fe3f,_0x2c6b6c=[];for(const _0x1955dd of _0x4cbc10){const _0x46e30e=composite_utils_1['createPostRequest'](constants_1['FLOSUM_COMPONENT'],this['prepareComponentRecord'](_0x1955dd)),_0x7bb440=composite_utils_1[_0x506b5d(0x164)](constants_1[_0x506b5d(0x138)],this[_0x506b5d(0x159)](_0x1955dd,'@{'+_0x46e30e[_0x506b5d(0x168)]+_0x506b5d(0x133))),_0x29b7a9=composite_utils_1['createPostRequest'](constants_1[_0x506b5d(0x176)],await this['prepareComponentAttachmentRecord'](_0x1955dd,'@{'+_0x7bb440['reference']+_0x506b5d(0x133)));this[_0x506b5d(0x167)](_0x46e30e['request'][_0x506b5d(0x121)],_0x46e30e['reference']),_0x2c6b6c['push'](_0x46e30e[_0x506b5d(0x15c)],_0x7bb440[_0x506b5d(0x15c)],_0x29b7a9['request']),_0x17df82&&_0x2c6b6c[_0x506b5d(0x158)](this[_0x506b5d(0x13c)](_0x17df82,'@{'+_0x7bb440[_0x506b5d(0x168)]+_0x506b5d(0x133)));}return _0x2c6b6c;}async[a128_0x11fe3f(0x16c)](_0x12f3a5,_0x34e8c6=''){const _0x1d6e36=a128_0x11fe3f,_0x1ae1c9=[];for(const {component:_0x4621f7,meta:_0x156843}of _0x12f3a5){if(!_0x156843['id']){const _0x54395c=this[_0x1d6e36(0x124)][_0x1d6e36(0x129)](_0xc08c8b=>_0xc08c8b[_0x1d6e36(0x155)]===_0x4621f7['name']&&_0xc08c8b['componentType']===_0x4621f7['type']);if(!_0x54395c)throw new salesforce_error_1[(_0x1d6e36(0x11c))](new Error('Could\x20not\x20proceed\x20component\x20'+_0x4621f7[_0x1d6e36(0x131)]+'\x20['+_0x4621f7[_0x1d6e36(0x13b)]+_0x1d6e36(0x174)));_0x156843['id']=_0x54395c[_0x1d6e36(0x15d)];}const _0xbe50dc=composite_utils_1[_0x1d6e36(0x179)](constants_1['FLOSUM_COMPONENT'],_0x156843['id'],this[_0x1d6e36(0x12d)](_0x4621f7,_0x156843)),_0x25bed5=composite_utils_1[_0x1d6e36(0x164)](constants_1[_0x1d6e36(0x138)],this[_0x1d6e36(0x159)](_0x4621f7,_0x156843['id'],_0x156843[_0x1d6e36(0x170)])),_0x51848f=composite_utils_1['createPostRequest'](constants_1['FLOSUM_ATTACHMENT'],await this[_0x1d6e36(0x148)](_0x4621f7,'@{'+_0x25bed5[_0x1d6e36(0x168)]+_0x1d6e36(0x133)));this[_0x1d6e36(0x167)](_0xbe50dc['request'][_0x1d6e36(0x121)],_0xbe50dc['reference']),_0x1ae1c9['push'](_0xbe50dc[_0x1d6e36(0x15c)],_0x25bed5[_0x1d6e36(0x15c)],_0x51848f[_0x1d6e36(0x15c)]),_0x34e8c6&&_0x1ae1c9[_0x1d6e36(0x158)](this[_0x1d6e36(0x13c)](_0x34e8c6,'@{'+_0x25bed5['reference']+_0x1d6e36(0x133)));}return _0x1ae1c9;}async[a128_0x11fe3f(0x169)](_0x5e54cc,_0x193675=![]){const _0x1089c0=a128_0x11fe3f,_0x3784c0={'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]},_0x17e722=[];for(const _0x5f5c3b of _0x5e54cc){if(_0x5f5c3b['id'])_0x17e722[_0x1089c0(0x158)](_0x5f5c3b['id']);else{const _0x4896dd=this['proceededComponentsMeta'][_0x1089c0(0x129)](_0x11a9e6=>_0x11a9e6[_0x1089c0(0x155)]===_0x5f5c3b[_0x1089c0(0x131)]&&_0x11a9e6[_0x1089c0(0x130)]===_0x5f5c3b['type']);if(!_0x4896dd||!_0x4896dd[_0x1089c0(0x15d)])continue;_0x17e722[_0x1089c0(0x158)](_0x4896dd[_0x1089c0(0x15d)]);}}if(_0x193675){const _0x427240=await this[_0x1089c0(0x166)]['fetchCommitManifestsByComponentIds'](_0x17e722);_0x3784c0[_0x1089c0(0x134)]=_0x427240[_0x1089c0(0x11b)](_0x59969a=>composite_utils_1[_0x1089c0(0x128)](constants_1['FLOSUM_COMMIT_MANIFEST'],_0x59969a)[_0x1089c0(0x15c)]);}return _0x3784c0[_0x1089c0(0x171)]=_0x17e722[_0x1089c0(0x11b)](_0x4408a3=>composite_utils_1[_0x1089c0(0x179)](constants_1[_0x1089c0(0x14b)],_0x4408a3,{[constants_1[_0x1089c0(0x15b)]+_0x1089c0(0x135)]:!![]})[_0x1089c0(0x15c)]),_0x3784c0[_0x1089c0(0x13e)]=_0x17e722[_0x1089c0(0x11b)](_0x4663a2=>composite_utils_1[_0x1089c0(0x128)](constants_1[_0x1089c0(0x14b)],_0x4663a2)['request']),_0x3784c0;}}function a128_0x490a(){const _0x3169f4=['../../../constants','toISOString','Description','Component_Type__c','componentName','files','Commit__c','push','prepareComponentHistoryRecord','base64','FLOSUM_GIT_NAMESPACE','request','componentId','Name','7031136gwxcYY','5CuDznj','5333992JBuvuu','filePath','constructor','createPostRequest','defineProperty','gitSync','proceedComponentMeta','reference','delete','__importDefault','1507927orEJSO','update','Changed_On__c','recordTypes','Component_Name__c','version','componentsToUpdate','logger','SalesforceGitSyncService',']\x20-\x20meta\x20not\x20found','DEFLATE','FLOSUM_ATTACHMENT','createZip','Changed_By__c','createPatchRequest','crc','../../parsers/utils/zip','toString','map','SalesforceError','Logger','search','../../../core','branchId','body','FLOSUM_COMMIT_MANIFEST','Committed_On__c','proceededComponentsMeta','Component_History__c','Branch','SalesforceComponentsManager','createDeleteRequest','find','../errors/salesforce.error','Zip','./salesforce-git-sync.service','prepareComponentRecord','FLOSUM_NAMESPACE','application/zip','componentType','name','Version__c','.id}','manifests','Deletion_By_Agent__c','3746013YsEABp','Last_Updated_By__c','FLOSUM_COMPONENT_HISTORY','Is_From_Agent__c','Source__c','type','prepareCommitManifest','CRC32__c','componentsToDelete','RecordTypeId','2NLEzSw','(((.+)+)+)+$','keys','../utils/flosum-naming.utils','Last_Modified_Date__c','5720210YbkaOI','../utils/composite.utils','Body','prepareComponentAttachmentRecord','872046UiTcPv','14244489jyoSgc','FLOSUM_COMPONENT','File_Name__c','repositoryId','username','8fuxzcR','Repository'];a128_0x490a=function(){return _0x3169f4;};return a128_0x490a();}exports[a128_0x11fe3f(0x127)]=SalesforceComponentsManager;