const a54_0x4553ba=a54_0x5f04;(function(_0x267f35,_0x39d738){const _0x4f9db1=a54_0x5f04,_0x51b28f=_0x267f35();while(!![]){try{const _0x3ea2ce=-parseInt(_0x4f9db1(0x19b))/0x1*(-parseInt(_0x4f9db1(0x18a))/0x2)+parseInt(_0x4f9db1(0x1a4))/0x3+parseInt(_0x4f9db1(0x1a1))/0x4+-parseInt(_0x4f9db1(0x188))/0x5+parseInt(_0x4f9db1(0x1d6))/0x6+-parseInt(_0x4f9db1(0x1b8))/0x7+-parseInt(_0x4f9db1(0x185))/0x8;if(_0x3ea2ce===_0x39d738)break;else _0x51b28f['push'](_0x51b28f['shift']());}catch(_0x37438d){_0x51b28f['push'](_0x51b28f['shift']());}}}(a54_0x2b6b,0xb797e));const a54_0x310532=(function(){let _0x308ed0=!![];return function(_0x116f51,_0x20c774){const _0x597211=_0x308ed0?function(){const _0x487435=a54_0x5f04;if(_0x20c774){const _0x3228dd=_0x20c774[_0x487435(0x1c5)](_0x116f51,arguments);return _0x20c774=null,_0x3228dd;}}:function(){};return _0x308ed0=![],_0x597211;};}()),a54_0x4060b6=a54_0x310532(this,function(){const _0x5b1708=a54_0x5f04;return a54_0x4060b6['toString']()[_0x5b1708(0x190)]('(((.+)+)+)+$')['toString']()[_0x5b1708(0x1c7)](a54_0x4060b6)[_0x5b1708(0x190)](_0x5b1708(0x19d));});a54_0x4060b6();'use strict';var __importDefault=this&&this[a54_0x4553ba(0x19f)]||function(_0x50242e){const _0xb65232=a54_0x4553ba;return _0x50242e&&_0x50242e[_0xb65232(0x1a0)]?_0x50242e:{'default':_0x50242e};};Object['defineProperty'](exports,a54_0x4553ba(0x1a0),{'value':!![]}),exports[a54_0x4553ba(0x191)]=void 0x0;function a54_0x2b6b(){const _0x3ebc1d=['every','fs/promises','exists','7953022mUYSnx','reduce','../../git/internal/fs.internal','1.0','ParentId','body','/services/data/','keys','.temp','../../../constants','name','types','file','apply','replace','constructor','addLocalFolder','ComponentsApi','Component_Name__c','MDApiWriter','log','push','extractComponentPermissions','orgId','destructiveChangesPost.xml','length','../utils/extract-component-permissions','src','Component__r','type','4762254SUxOTr','generateAsync','fetchComponentsDetailsByComponentsHistory','uuid','substring','/sobjects/Attachment','998928YVVaDM','../../git/parsers/mdapi','post','4972075blMuGH','then','685154lsxlSr','UTF-8','find','async','retrieveAttachments','DEPLOYZIP','search','generateAndDeployZip','writeFile','Builder','cwd','base64','SALESFORCE_API_VERSION','splitZip','start','toString','../../git/parsers/utils/zip','3HgZRbV','after\x20create\x20zip','(((.+)+)+)+$','unzip','__importDefault','__esModule','4297724Kvgram','Body','filter','334662BDcVBa','buildObject','default','text','BUILD','indexOf','map','after\x20create\x20second\x20zip','dir','removeNamespacePrefix','Zip','Name','join','values','http://soap.sforce.com/2006/04/metadata','files','fileType'];a54_0x2b6b=function(){return _0x3ebc1d;};return a54_0x2b6b();}const constants_1=require(a54_0x4553ba(0x1c1)),path_1=__importDefault(require('path')),extract_component_permissions_1=require(a54_0x4553ba(0x1d2)),xml2js_1=require('xml2js'),zip_1=require(a54_0x4553ba(0x19a)),mdapi_1=require(a54_0x4553ba(0x186)),fs_internal_1=require(a54_0x4553ba(0x1ba)),promises_1=require(a54_0x4553ba(0x1b6)),components_api_1=require('../utils/components-api'),adm_zip_1=__importDefault(require('adm-zip')),uuid_1=require(a54_0x4553ba(0x1d9)),DESTRUCTIVE_CHANGES_PER_NAME='destructiveChangesPre.xml',DESTRUCTIVE_CHANGES_POST_NAME=a54_0x4553ba(0x1d0),DEPLOY_DIR_NAME=a54_0x4553ba(0x18f);async function generateAndDeployZip({attachmentsId:_0x2ecd69,isExtractComponentsPermissions:_0x3323c4,preDestructiveAttachmentId:_0x1a88e5,postDestructiveAttachmentId:_0x4abf58,branchId:_0x4ea9f7,credentials:_0x59cc7b,metadataLogId:_0x48bcf3,environments:_0x32c604,metaTypes:_0x26dfe9},_0x40f135){const _0x43709a=a54_0x4553ba,_0x16fa45=(0x0,uuid_1['v4'])();try{const _0x4eb77f=await components_api_1[_0x43709a(0x1c9)]['fetchAttachmentsDetails'](_0x40f135,_0x2ecd69),_0xc0f375=_0x4eb77f['reduce']((_0x3fc60c,_0x1206ca)=>({..._0x3fc60c,[_0x1206ca['Id']]:_0x1206ca[_0x43709a(0x1af)]}),{}),_0x3beed0=await getComponents(_0x4eb77f,_0x40f135,_0xc0f375),_0xee2353=await components_api_1['ComponentsApi'][_0x43709a(0x1d8)](_0x40f135,_0x4eb77f['map'](({ParentId:_0x4aaeaa})=>_0x4aaeaa))[_0x43709a(0x189)](_0x4dbce3=>components_api_1[_0x43709a(0x1c9)][_0x43709a(0x1ad)](_0x4dbce3));if(_0x3323c4){const _0x5d36fe=_0x3beed0[_0x43709a(0x1a3)](({fileType:_0x93f266})=>_0x93f266==='Profile'||_0x93f266==='PermissionSet');await removePermission(_0x5d36fe,_0xee2353);}await replaceEnvironments(_0x26dfe9,_0x32c604,_0x3beed0),await writeZip(_0x3beed0,_0x16fa45),await generateAndWritePackageXML(_0x4eb77f,_0xee2353,_0x16fa45);_0x1a88e5&&await saveDestructiveChanges(_0x40f135,_0x1a88e5,DESTRUCTIVE_CHANGES_PER_NAME,_0x16fa45);_0x4abf58&&await saveDestructiveChanges(_0x40f135,_0x4abf58,DESTRUCTIVE_CHANGES_POST_NAME,_0x16fa45);const _0x18998d=(await createDeployZip(_0x16fa45)[_0x43709a(0x189)](_0x56c6f5=>{return _0x56c6f5;}))['toBuffer']()[_0x43709a(0x199)](_0x43709a(0x195));console['log'](_0x43709a(0x19c));const _0x9696a5=_0x18998d[_0x43709a(0x1d1)];if(_0x9696a5>=components_api_1['MAX_ZIP_SIZE']){const _0x205b59=await createDeployZip(_0x16fa45);console[_0x43709a(0x1cc)](_0x43709a(0x1ab));const [_0x342725,_0x2698b4]=await components_api_1[_0x43709a(0x1c9)][_0x43709a(0x197)](_0x205b59,_0x9696a5),_0x292b94=await insertZip(_0x40f135,_0x4ea9f7,_0x59cc7b['orgId'],_0x48bcf3,_0x342725['toBuffer']()[_0x43709a(0x199)](_0x43709a(0x195))),_0x60bc39=await insertZip(_0x40f135,_0x4ea9f7,_0x59cc7b[_0x43709a(0x1cf)],_0x48bcf3,_0x2698b4['toBuffer']()[_0x43709a(0x199)](_0x43709a(0x195)));return _0x292b94+','+_0x60bc39;}else return await insertZip(_0x40f135,_0x4ea9f7,_0x59cc7b[_0x43709a(0x1cf)],_0x48bcf3,_0x18998d);}catch(_0x3d153c){throw _0x3d153c;}finally{if(await fs_internal_1['FS'][_0x43709a(0x1b7)](path_1['default']['join'](process[_0x43709a(0x194)](),_0x43709a(0x1c0),_0x16fa45)))await(0x0,promises_1['rm'])(path_1[_0x43709a(0x1a6)]['join'](process[_0x43709a(0x194)](),_0x43709a(0x1c0),_0x16fa45),{'recursive':!![]});}}exports[a54_0x4553ba(0x191)]=generateAndDeployZip;async function getComponents(_0x4b6828,_0x22668e,_0x3cbd97){const _0x31d38e=a54_0x4553ba,_0x5ed09c=[],_0x4283c3=await components_api_1[_0x31d38e(0x1c9)][_0x31d38e(0x18e)](_0x4b6828,_0x22668e);return await getComponentFromZip(_0x4283c3,_0x3cbd97)[_0x31d38e(0x189)](_0xda39ab=>{const _0x5ae8c3=_0x31d38e;_0x5ed09c[_0x5ae8c3(0x1cd)](..._0xda39ab);}),_0x5ed09c;}async function getComponentFromZip(_0xb112bd,_0x7815a2){const _0x4d3640=a54_0x4553ba,_0xbcb5ea=[];for(const _0x1a6237 of _0xb112bd){const _0x3f8f70=await zip_1[_0x4d3640(0x1ae)]['unzip'](_0x1a6237[_0x4d3640(0x1b1)][_0x4d3640(0x1a2)]);for(const _0x1acad7 in _0x3f8f70[_0x4d3640(0x1b3)]){!_0x3f8f70[_0x4d3640(0x1b3)][_0x1acad7][_0x4d3640(0x1ac)]&&_0xbcb5ea[_0x4d3640(0x1cd)]({'fileName':_0x1acad7[_0x4d3640(0x1da)](_0x1acad7[_0x4d3640(0x1a9)]('/')+0x1),'fileType':_0x7815a2[_0x1a6237['id']],'body':_0x1a6237[_0x4d3640(0x1b1)][_0x4d3640(0x1a2)]});}}return _0xbcb5ea;}async function removePermission(_0x447f3e,_0x3e5996){const _0x53c85d=a54_0x4553ba;for(const _0x146877 of _0x447f3e){const _0x39c7f1=await zip_1[_0x53c85d(0x1ae)][_0x53c85d(0x19e)](_0x146877[_0x53c85d(0x1bd)]),_0x46e7a9=[];for(const _0x26f052 in _0x39c7f1[_0x53c85d(0x1b3)]){!_0x39c7f1[_0x53c85d(0x1b3)][_0x26f052][_0x53c85d(0x1ac)]&&_0x46e7a9[_0x53c85d(0x1cd)]({'fileName':_0x26f052,'body':await _0x39c7f1['files'][_0x26f052][_0x53c85d(0x18d)](_0x53c85d(0x1a7))});}const _0x50fb66=await(0x0,extract_component_permissions_1[_0x53c85d(0x1ce)])(_0x46e7a9[0x0][_0x53c85d(0x1bd)][_0x53c85d(0x199)](),_0x3e5996,_0x146877[_0x53c85d(0x1b4)]),_0x3282e9=new xml2js_1[(_0x53c85d(0x193))]({'xmldec':{'version':_0x53c85d(0x1bb),'encoding':_0x53c85d(0x18b)}}),_0x5e298e=_0x3282e9[_0x53c85d(0x1a5)](_0x50fb66),_0x311fbc=zip_1[_0x53c85d(0x1ae)]['createZip']();_0x311fbc[_0x53c85d(0x1c4)](_0x46e7a9[0x0]['fileName'],_0x5e298e),_0x146877[_0x53c85d(0x1bd)]=await _0x311fbc[_0x53c85d(0x1d7)]({'type':_0x53c85d(0x195),'compression':'DEFLATE','compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x4496f9,_0x220748,_0x450ccb){const _0x2b38df=a54_0x4553ba;for(const _0x10dc14 of _0x450ccb){if(_0x4496f9[_0x2b38df(0x1b5)](_0x5b14a5=>_0x5b14a5!==_0x10dc14[_0x2b38df(0x1b4)]))continue;const _0x5f2929=await zip_1[_0x2b38df(0x1ae)][_0x2b38df(0x19e)](_0x10dc14[_0x2b38df(0x1bd)]);for(const _0x4456b0 in _0x5f2929[_0x2b38df(0x1b3)]){if(!_0x5f2929[_0x2b38df(0x1b3)][_0x4456b0][_0x2b38df(0x1ac)]){let _0x1c236e=await _0x5f2929[_0x2b38df(0x1b3)][_0x4456b0][_0x2b38df(0x18d)]('text');for(const _0x5543cf of Object[_0x2b38df(0x1bf)](_0x220748)){const _0x133d36=new RegExp('%%'+_0x5543cf+'%%','g');_0x1c236e=_0x1c236e[_0x2b38df(0x1c6)](_0x133d36,_0x220748[_0x5543cf]);}_0x5f2929[_0x2b38df(0x1c4)](_0x4456b0,_0x1c236e);}}_0x10dc14['body']=await _0x5f2929[_0x2b38df(0x1d7)]({'type':_0x2b38df(0x195),'compression':'DEFLATE','compressionOptions':{'level':0x6}});}}async function writeZip(_0xfa8897,_0x2841c4){const _0x1b9a03=a54_0x4553ba,_0x5dd149=new mdapi_1[(_0x1b9a03(0x1cb))]({'components':_0xfa8897,'sourceDir':path_1[_0x1b9a03(0x1a6)][_0x1b9a03(0x1b0)](process[_0x1b9a03(0x194)](),_0x1b9a03(0x1c0),_0x2841c4,DEPLOY_DIR_NAME,'src'),'skipChildErrors':![]});await _0x5dd149[_0x1b9a03(0x198)]();}async function generateAndWritePackageXML(_0x3f93a0,_0x4b3ab5,_0x3b079c){const _0x125277=a54_0x4553ba,_0x55d688=getComponentsTypeAndName(_0x3f93a0,_0x4b3ab5),_0x3166c2=[...new Set(_0x55d688['map'](_0x577e8c=>_0x577e8c[_0x125277(0x1d5)]))],_0xebbbd8={'Package':{'$':{'xmlns':_0x125277(0x1b2)},'types':[],'version':''+constants_1['SALESFORCE_API_VERSION'][_0x125277(0x1da)](0x1)}};for(const _0x27b16c of _0x3166c2){const _0x58cb55=_0x55d688[_0x125277(0x1a3)](_0x40cadd=>_0x40cadd[_0x125277(0x1d5)]===_0x27b16c)[_0x125277(0x1aa)](_0x38bab0=>_0x38bab0[_0x125277(0x1c2)]),_0x1710c5={'members':_0x58cb55,'name':_0x27b16c};_0xebbbd8['Package'][_0x125277(0x1c3)][_0x125277(0x1cd)](_0x1710c5);}const _0x1b459e=new xml2js_1[(_0x125277(0x193))]({'xmldec':{'version':_0x125277(0x1bb),'encoding':_0x125277(0x18b)}}),_0x4fd0ff=_0x1b459e[_0x125277(0x1a5)](_0xebbbd8);await fs_internal_1['FS']['writeFile'](path_1[_0x125277(0x1a6)][_0x125277(0x1b0)](process[_0x125277(0x194)](),'.temp',_0x3b079c,DEPLOY_DIR_NAME,_0x125277(0x1d3),'package.xml'),_0x4fd0ff);}function a54_0x5f04(_0xda0c08,_0x4de331){const _0x16e8d6=a54_0x2b6b();return a54_0x5f04=function(_0x4060b6,_0x310532){_0x4060b6=_0x4060b6-0x185;let _0x2b6b08=_0x16e8d6[_0x4060b6];return _0x2b6b08;},a54_0x5f04(_0xda0c08,_0x4de331);}function getComponentsTypeAndName(_0x4cf0a5,_0x5f1ec6){const _0x4877f0=a54_0x4553ba;return _0x4cf0a5[_0x4877f0(0x1b9)]((_0x58334e,_0xda5257)=>{const _0x2c6247=_0x4877f0,_0x48bcfb=_0x5f1ec6[_0x2c6247(0x18c)](_0x39b543=>_0x39b543['Id']===_0xda5257[_0x2c6247(0x1bc)]);return _0x48bcfb&&_0x58334e[_0x2c6247(0x1cd)]({'name':_0x48bcfb[_0x2c6247(0x1d4)][_0x2c6247(0x1ca)],'type':_0xda5257[_0x2c6247(0x1af)]}),_0x58334e;},[]);}async function saveDestructiveChanges(_0xe33343,_0x20c930,_0x3187e2,_0x4eee62){const _0x2df4ff=a54_0x4553ba,_0x2c45c7=(await components_api_1[_0x2df4ff(0x1c9)]['fetchAttachmentBody'](_0xe33343,_0x20c930))[_0x2df4ff(0x199)]();await fs_internal_1['FS'][_0x2df4ff(0x192)](path_1[_0x2df4ff(0x1a6)]['join'](process['cwd'](),_0x2df4ff(0x1c0),_0x4eee62,DEPLOY_DIR_NAME,_0x2df4ff(0x1d3),_0x3187e2),_0x2c45c7);}async function createDeployZip(_0x42bd6d){const _0x43f530=a54_0x4553ba,_0x1f3dc9=new adm_zip_1['default']();return await _0x1f3dc9[_0x43f530(0x1c8)](path_1[_0x43f530(0x1a6)]['join'](process[_0x43f530(0x194)](),_0x43f530(0x1c0),_0x42bd6d,DEPLOY_DIR_NAME)),_0x1f3dc9;}async function insertZip(_0xa3b3fe,_0x596b6e,_0x233718,_0x3a8008,_0x11d214){const _0x1b467e=a54_0x4553ba,_0x39a772={'ParentId':_0x596b6e,'Name':_0x1b467e(0x1a8)+_0x233718,'Description':_0x1b467e(0x1a8)+_0x3a8008,'Body':_0x11d214},{data:_0x5ce69d}=await _0xa3b3fe[_0x1b467e(0x187)](_0x1b467e(0x1be)+constants_1[_0x1b467e(0x196)]+_0x1b467e(0x1db),_0x39a772);return _0x5ce69d['id'];}