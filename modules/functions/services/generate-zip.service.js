const a86_0x176df6=a86_0x4955;(function(_0x2ff4cd,_0x385c06){const _0xc121d3=a86_0x4955,_0x564f11=_0x2ff4cd();while(!![]){try{const _0x313553=parseInt(_0xc121d3(0xd4))/0x1+parseInt(_0xc121d3(0xee))/0x2*(parseInt(_0xc121d3(0xff))/0x3)+-parseInt(_0xc121d3(0xba))/0x4+-parseInt(_0xc121d3(0xd5))/0x5*(-parseInt(_0xc121d3(0xcd))/0x6)+-parseInt(_0xc121d3(0x117))/0x7*(-parseInt(_0xc121d3(0xbf))/0x8)+-parseInt(_0xc121d3(0x102))/0x9*(-parseInt(_0xc121d3(0xc7))/0xa)+-parseInt(_0xc121d3(0xf7))/0xb;if(_0x313553===_0x385c06)break;else _0x564f11['push'](_0x564f11['shift']());}catch(_0x577c77){_0x564f11['push'](_0x564f11['shift']());}}}(a86_0x3fa4,0xdae07));const a86_0x492eb4=(function(){let _0x5c989f=!![];return function(_0x479c36,_0x2905d4){const _0x1bcf91=_0x5c989f?function(){const _0x1b93de=a86_0x4955;if(_0x2905d4){const _0x28f467=_0x2905d4[_0x1b93de(0x119)](_0x479c36,arguments);return _0x2905d4=null,_0x28f467;}}:function(){};return _0x5c989f=![],_0x1bcf91;};}()),a86_0x5d137f=a86_0x492eb4(this,function(){const _0x190920=a86_0x4955;return a86_0x5d137f[_0x190920(0xf6)]()[_0x190920(0xc4)](_0x190920(0xd7))[_0x190920(0xf6)]()[_0x190920(0xc3)](a86_0x5d137f)[_0x190920(0xc4)](_0x190920(0xd7));});a86_0x5d137f();'use strict';var __importDefault=this&&this[a86_0x176df6(0xea)]||function(_0x4210e3){const _0x5826ec=a86_0x176df6;return _0x4210e3&&_0x4210e3[_0x5826ec(0xe8)]?_0x4210e3:{'default':_0x4210e3};};Object[a86_0x176df6(0xf5)](exports,a86_0x176df6(0xe8),{'value':!![]}),exports[a86_0x176df6(0x10c)]=void 0x0;const constants_1=require(a86_0x176df6(0x114)),path_1=__importDefault(require(a86_0x176df6(0xc0))),extract_component_permissions_1=require(a86_0x176df6(0xf1)),xml2js_1=require(a86_0x176df6(0xdb)),zip_1=require('../../git/parsers/utils/zip'),mdapi_1=require(a86_0x176df6(0xe5)),fs_internal_1=require('../../git/internal/fs.internal'),promises_1=require('fs/promises'),components_api_1=require(a86_0x176df6(0xcb)),adm_zip_1=__importDefault(require(a86_0x176df6(0xfc))),uuid_1=require(a86_0x176df6(0xe6)),fetch_attachments_1=require(a86_0x176df6(0xc8)),DESTRUCTIVE_CHANGES_PER_NAME=a86_0x176df6(0x112),DESTRUCTIVE_CHANGES_POST_NAME=a86_0x176df6(0xdd),DEPLOY_DIR_NAME=a86_0x176df6(0x105);async function generateAndDeployZip({attachmentsId:_0x12c571,isExtractComponentsPermissions:_0x49d444,preDestructiveAttachmentId:_0x163b71,postDestructiveAttachmentId:_0x3b85f8,branchId:_0x3db9f5,credentials:_0x538dd9,metadataLogId:_0x11abc2,environments:_0x27ce21,metaTypes:_0xd0f44d},_0x1b7cd7){const _0x1a9d37=a86_0x176df6,_0x3414eb=(0x0,uuid_1['v4'])();try{const _0x2a2b0b=await(0x0,fetch_attachments_1['fetchAttachmentsDetailsById'])(_0x1b7cd7,_0x12c571),_0x4b0bdb=_0x2a2b0b[_0x1a9d37(0xfe)]((_0x2bb1ed,_0x1fa1c5)=>({..._0x2bb1ed,[_0x1fa1c5['Id']]:_0x1fa1c5['Name']}),{}),_0x412e21=await getComponents(_0x2a2b0b,_0x1b7cd7,_0x4b0bdb),_0x5c7cdd=await components_api_1['ComponentsApi'][_0x1a9d37(0xc2)](_0x1b7cd7,_0x2a2b0b[_0x1a9d37(0xcc)](({ParentId:_0x39eb43})=>_0x39eb43))[_0x1a9d37(0xd8)](_0xe61f28=>components_api_1[_0x1a9d37(0xbd)][_0x1a9d37(0x104)](_0xe61f28));if(_0x49d444){const _0x59e48b=_0x412e21[_0x1a9d37(0xce)](({fileType:_0x18f9cd})=>_0x18f9cd===_0x1a9d37(0x113)||_0x18f9cd===_0x1a9d37(0x10a));await removePermission(_0x59e48b,_0x5c7cdd);}await replaceEnvironments(_0xd0f44d,_0x27ce21,_0x412e21),await writeZip(_0x412e21,_0x3414eb),await generateAndWritePackageXML(_0x2a2b0b,_0x5c7cdd,_0x3414eb);_0x163b71&&await saveDestructiveChanges(_0x1b7cd7,_0x163b71,DESTRUCTIVE_CHANGES_PER_NAME,_0x3414eb);_0x3b85f8&&await saveDestructiveChanges(_0x1b7cd7,_0x3b85f8,DESTRUCTIVE_CHANGES_POST_NAME,_0x3414eb);const _0x38a559=(await createDeployZip(_0x3414eb)[_0x1a9d37(0xd8)](_0x459919=>{return _0x459919;}))[_0x1a9d37(0xe0)]()[_0x1a9d37(0xf6)](_0x1a9d37(0xf2));console[_0x1a9d37(0x110)](_0x1a9d37(0x101));const _0x3895e9=_0x38a559['length'];if(_0x3895e9>=components_api_1['MAX_ZIP_SIZE']){const _0x29fc64=await createDeployZip(_0x3414eb);console[_0x1a9d37(0x110)](_0x1a9d37(0x111));const [_0x2cbf15,_0x50d223]=await components_api_1[_0x1a9d37(0xbd)]['splitZip'](_0x29fc64,_0x3895e9),_0x1938b4=await insertZip(_0x1b7cd7,_0x3db9f5,_0x538dd9['orgId'],_0x11abc2,_0x2cbf15[_0x1a9d37(0xe0)]()[_0x1a9d37(0xf6)](_0x1a9d37(0xf2))),_0x581e66=await insertZip(_0x1b7cd7,_0x3db9f5,_0x538dd9[_0x1a9d37(0xe7)],_0x11abc2,_0x50d223[_0x1a9d37(0xe0)]()['toString'](_0x1a9d37(0xf2)));return _0x1938b4+','+_0x581e66;}else return await insertZip(_0x1b7cd7,_0x3db9f5,_0x538dd9[_0x1a9d37(0xe7)],_0x11abc2,_0x38a559);}catch(_0x496a23){throw _0x496a23;}finally{if(await fs_internal_1['FS'][_0x1a9d37(0x10b)](path_1[_0x1a9d37(0xde)][_0x1a9d37(0xdc)](process[_0x1a9d37(0xe3)](),_0x1a9d37(0xd1),_0x3414eb)))await(0x0,promises_1['rm'])(path_1['default'][_0x1a9d37(0xdc)](process[_0x1a9d37(0xe3)](),_0x1a9d37(0xd1),_0x3414eb),{'recursive':!![]});}}exports[a86_0x176df6(0x10c)]=generateAndDeployZip;async function getComponents(_0xb7c214,_0x5bbe03,_0x555ac9){const _0x33150e=a86_0x176df6,_0x42187d=[],_0xf6b0d0=await(0x0,fetch_attachments_1['retrieveAttachments'])(_0xb7c214,_0x5bbe03);return await getComponentFromZip(_0xf6b0d0,_0x555ac9)[_0x33150e(0xd8)](_0xa7d6e0=>{const _0x3619d1=_0x33150e;_0x42187d[_0x3619d1(0x10e)](..._0xa7d6e0);}),_0x42187d;}async function getComponentFromZip(_0x147fb6,_0x353f13){const _0xdd869b=a86_0x176df6,_0x42217e=[];for(const _0x11280f of _0x147fb6){const _0x5957a6=await zip_1[_0xdd869b(0x108)][_0xdd869b(0xe9)](_0x11280f['values'][_0xdd869b(0x107)]);for(const _0x369db6 in _0x5957a6[_0xdd869b(0x115)]){!_0x5957a6['files'][_0x369db6][_0xdd869b(0xf8)]&&_0x42217e['push']({'fileName':_0x369db6[_0xdd869b(0xbc)](_0x369db6[_0xdd869b(0xd3)]('/')+0x1),'fileType':_0x353f13[_0x11280f['id']],'body':_0x11280f[_0xdd869b(0xc5)][_0xdd869b(0x107)]});}}return _0x42217e;}function a86_0x4955(_0x4dc81f,_0x10b4ef){const _0x5c3b14=a86_0x3fa4();return a86_0x4955=function(_0x5d137f,_0x492eb4){_0x5d137f=_0x5d137f-0xba;let _0x3fa402=_0x5c3b14[_0x5d137f];return _0x3fa402;},a86_0x4955(_0x4dc81f,_0x10b4ef);}async function removePermission(_0xa233e8,_0x58517a){const _0x3f01c3=a86_0x176df6;for(const _0x565de7 of _0xa233e8){const _0x4b68da=await zip_1['Zip'][_0x3f01c3(0xe9)](_0x565de7['body']),_0x12f358=[];for(const _0x38c4d9 in _0x4b68da[_0x3f01c3(0x115)]){!_0x4b68da[_0x3f01c3(0x115)][_0x38c4d9][_0x3f01c3(0xf8)]&&_0x12f358[_0x3f01c3(0x10e)]({'fileName':_0x38c4d9,'body':await _0x4b68da[_0x3f01c3(0x115)][_0x38c4d9][_0x3f01c3(0xf0)]('text')});}const _0x5d9979=await(0x0,extract_component_permissions_1[_0x3f01c3(0xdf)])(_0x12f358[0x0][_0x3f01c3(0xf3)]['toString'](),_0x58517a,_0x565de7[_0x3f01c3(0xe4)]),_0x5d3380=new xml2js_1[(_0x3f01c3(0xe1))]({'xmldec':{'version':_0x3f01c3(0x100),'encoding':_0x3f01c3(0xec)}}),_0x25f290=_0x5d3380[_0x3f01c3(0xd9)](_0x5d9979),_0x1d885d=zip_1[_0x3f01c3(0x108)][_0x3f01c3(0xed)]();_0x1d885d[_0x3f01c3(0xcf)](_0x12f358[0x0][_0x3f01c3(0x118)],_0x25f290),_0x565de7[_0x3f01c3(0xf3)]=await _0x1d885d[_0x3f01c3(0xd0)]({'type':_0x3f01c3(0xf2),'compression':'DEFLATE','compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x54537b,_0x577158,_0x141511){const _0x1e2cd8=a86_0x176df6;for(const _0x4a277f of _0x141511){if(_0x54537b[_0x1e2cd8(0xc6)](_0x4882fe=>_0x4882fe!==_0x4a277f['fileType']))continue;const _0x395829=await zip_1[_0x1e2cd8(0x108)][_0x1e2cd8(0xe9)](_0x4a277f[_0x1e2cd8(0xf3)]);for(const _0x35fef2 in _0x395829[_0x1e2cd8(0x115)]){if(!_0x395829['files'][_0x35fef2][_0x1e2cd8(0xf8)]){let _0xee9b83=await _0x395829[_0x1e2cd8(0x115)][_0x35fef2][_0x1e2cd8(0xf0)](_0x1e2cd8(0xf4));for(const _0x3b5e75 of Object[_0x1e2cd8(0xbb)](_0x577158)){const _0x49bdd3=new RegExp('%%'+_0x3b5e75+'%%','g');_0xee9b83=_0xee9b83[_0x1e2cd8(0x10f)](_0x49bdd3,_0x577158[_0x3b5e75]);}_0x395829['file'](_0x35fef2,_0xee9b83);}}_0x4a277f[_0x1e2cd8(0xf3)]=await _0x395829[_0x1e2cd8(0xd0)]({'type':'base64','compression':_0x1e2cd8(0xfd),'compressionOptions':{'level':0x6}});}}async function writeZip(_0x24612e,_0xedf80){const _0x328632=a86_0x176df6,_0x557723=new mdapi_1[(_0x328632(0xca))]({'components':_0x24612e,'sourceDir':path_1[_0x328632(0xde)][_0x328632(0xdc)](process[_0x328632(0xe3)](),'.temp',_0xedf80,DEPLOY_DIR_NAME,_0x328632(0xc9)),'skipChildErrors':![]});await _0x557723['start']();}async function generateAndWritePackageXML(_0x8974d,_0x56a370,_0x30aba2){const _0x3e7789=a86_0x176df6,_0x149504=getComponentsTypeAndName(_0x8974d,_0x56a370),_0x2e80e7=[...new Set(_0x149504['map'](_0x75afb1=>_0x75afb1['type']))],_0xa249ac={'Package':{'$':{'xmlns':_0x3e7789(0xbe)},'types':[],'version':''+constants_1[_0x3e7789(0xfb)][_0x3e7789(0xbc)](0x1)}};for(const _0xaf337e of _0x2e80e7){const _0x5039cd=_0x149504[_0x3e7789(0xce)](_0x8cdf06=>_0x8cdf06['type']===_0xaf337e)[_0x3e7789(0xcc)](_0x4e8a73=>_0x4e8a73['name']),_0x2a681e={'members':_0x5039cd,'name':_0xaf337e};_0xa249ac[_0x3e7789(0x116)][_0x3e7789(0xef)][_0x3e7789(0x10e)](_0x2a681e);}const _0x3529b6=new xml2js_1['Builder']({'xmldec':{'version':_0x3e7789(0x100),'encoding':_0x3e7789(0xec)}}),_0xaa9213=_0x3529b6['buildObject'](_0xa249ac);await fs_internal_1['FS'][_0x3e7789(0xf9)](path_1[_0x3e7789(0xde)][_0x3e7789(0xdc)](process[_0x3e7789(0xe3)](),_0x3e7789(0xd1),_0x30aba2,DEPLOY_DIR_NAME,_0x3e7789(0xc9),_0x3e7789(0xfa)),_0xaa9213);}function getComponentsTypeAndName(_0x3dc30c,_0x42562f){const _0x3d8695=a86_0x176df6;return _0x3dc30c[_0x3d8695(0xfe)]((_0x344b5f,_0x4ac2d0)=>{const _0x4797be=_0x3d8695,_0x55d048=_0x42562f[_0x4797be(0xda)](_0x2f3cab=>_0x2f3cab['Id']===_0x4ac2d0['ParentId']);return _0x55d048&&_0x344b5f['push']({'name':_0x55d048[_0x4797be(0x103)][_0x4797be(0x10d)],'type':_0x4ac2d0[_0x4797be(0x109)]}),_0x344b5f;},[]);}async function saveDestructiveChanges(_0x3da31c,_0x5a3527,_0x48ea46,_0x2c05a4){const _0x56e7e7=a86_0x176df6,_0x55db0b=(await(0x0,fetch_attachments_1[_0x56e7e7(0xe2)])(_0x3da31c,_0x5a3527))[_0x56e7e7(0xf6)]();await fs_internal_1['FS'][_0x56e7e7(0xf9)](path_1['default'][_0x56e7e7(0xdc)](process[_0x56e7e7(0xe3)](),'.temp',_0x2c05a4,DEPLOY_DIR_NAME,_0x56e7e7(0xc9),_0x48ea46),_0x55db0b);}function a86_0x3fa4(){const _0x5d63bc=['dir','writeFile','package.xml','SALESFORCE_API_VERSION','adm-zip','DEFLATE','reduce','249eITEEx','1.0','after\x20create\x20zip','2956689cErBsG','Component__r','removeNamespacePrefix','DEPLOYZIP','/sobjects/Attachment','Body','Zip','Name','PermissionSet','exists','generateAndDeployZip','Component_Name__c','push','replace','log','after\x20create\x20second\x20zip','destructiveChangesPre.xml','Profile','../../../constants','files','Package','42UkduEY','fileName','apply','2025920IzrQjX','keys','substring','ComponentsApi','http://soap.sforce.com/2006/04/metadata','2190144dvkBqP','path','post','fetchComponentsDetailsByComponentsHistory','constructor','search','values','every','40acjeLw','../../shared/utils/fetch-attachments','src','MDApiWriter','../utils/components-api','map','174FxXgoS','filter','file','generateAsync','.temp','/services/data/','indexOf','1621095vuuNWF','236295PTRcxp','BUILD','(((.+)+)+)+$','then','buildObject','find','xml2js','join','destructiveChangesPost.xml','default','extractComponentPermissions','toBuffer','Builder','fetchAttachmentBody','cwd','fileType','../../git/parsers/mdapi','uuid','orgId','__esModule','unzip','__importDefault','addLocalFolder','UTF-8','createZip','34206xPHVWd','types','async','../utils/extract-component-permissions','base64','body','text','defineProperty','toString','65613328yJsiNg'];a86_0x3fa4=function(){return _0x5d63bc;};return a86_0x3fa4();}async function createDeployZip(_0x147ebd){const _0x3cc514=a86_0x176df6,_0x568684=new adm_zip_1['default']();return await _0x568684[_0x3cc514(0xeb)](path_1[_0x3cc514(0xde)][_0x3cc514(0xdc)](process[_0x3cc514(0xe3)](),'.temp',_0x147ebd,DEPLOY_DIR_NAME)),_0x568684;}async function insertZip(_0x431d6e,_0x5e2712,_0x4b069f,_0x2f9571,_0x349dc5){const _0x495616=a86_0x176df6,_0x5e1447={'ParentId':_0x5e2712,'Name':_0x495616(0xd6)+_0x4b069f,'Description':'BUILD'+_0x2f9571,'Body':_0x349dc5},{data:_0x37511a}=await _0x431d6e[_0x495616(0xc1)](_0x495616(0xd2)+constants_1[_0x495616(0xfb)]+_0x495616(0x106),_0x5e1447);return _0x37511a['id'];}