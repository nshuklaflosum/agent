const a360_0x1136ed=a360_0x1e67;function a360_0x4eab(){const _0x51e7bc=['deployment_status__v','../utils/array.utils','filename','post','map','Deploy\x20Log','_saveLog','PackageComponentDto','status','endsWith','getJobResult','artifacts','package_components','148oBytXL','ENDPOINT_EXPORT_IMPORT_PACKAGE','getDeployDetailsAndSaveLog','form-data','vaultPackage','uniqueName','../dtos/package-details.dto','constructor','importVpk','getValidationDetailsAndSaveLog','groupToMap','responseStatus','_connection','multipart/form-data','includes','file','isDeployed','VeevaResponseStatus','search','filter','errors','get','Import\x20package','Get\x20validation\x20details.','apply','191UMtqUi','put','text','packageComponentList','../constants/veeva.constants','formPackageComponentList','reduce','href','_logger','_veevaService','DEPLOYED','length','__esModule','ENDPOINT_DEPLOY_PACKAGE','getJobDetailUrl','toString','36327OosFrW','deploymentAction','PackageDetailsDto','data','ArrayUtils','url','VERIFIED','86984OrFAol','../classes/errors/veeva-error','6245496RcTNCt','import','default','__importDefault','VeevaConstants','7814Jckjda','413qYKdvj','DEPLOYED_WITH_WARNINGS','{package_id}','../utils/veeva-auth.utils','../dtos/package-component.dto','SUCCESS','3177550IMyVfU','2336076fuRJVW','name__v','rel','(((.+)+)+)+$','Wait\x20Executing\x20job','6036360wmBsGl','VeevaPackageStatus','replace','log','append','../enums/status.enums','packageId','getLogResultText','VeevaError','Get\x20deploy\x20result','Validation.log','Validation\x20Log','PackageComponentStatus'];a360_0x4eab=function(){return _0x51e7bc;};return a360_0x4eab();}(function(_0x2b91a5,_0x16d073){const _0x13821c=a360_0x1e67,_0xf9a6b6=_0x2b91a5();while(!![]){try{const _0x19f0c2=parseInt(_0x13821c(0x184))/0x1*(parseInt(_0x13821c(0x1a2))/0x2)+parseInt(_0x13821c(0x194))/0x3*(parseInt(_0x13821c(0x1c9))/0x4)+-parseInt(_0x13821c(0x1a9))/0x5+parseInt(_0x13821c(0x1aa))/0x6+parseInt(_0x13821c(0x1a3))/0x7*(-parseInt(_0x13821c(0x19b))/0x8)+parseInt(_0x13821c(0x19d))/0x9+-parseInt(_0x13821c(0x1af))/0xa;if(_0x19f0c2===_0x16d073)break;else _0xf9a6b6['push'](_0xf9a6b6['shift']());}catch(_0x239b82){_0xf9a6b6['push'](_0xf9a6b6['shift']());}}}(a360_0x4eab,0x60e6b));const a360_0xed07a6=(function(){let _0x3cd07b=!![];return function(_0xc9952e,_0x5309a9){const _0x59983a=_0x3cd07b?function(){const _0x1c9f34=a360_0x1e67;if(_0x5309a9){const _0x40cf78=_0x5309a9[_0x1c9f34(0x183)](_0xc9952e,arguments);return _0x5309a9=null,_0x40cf78;}}:function(){};return _0x3cd07b=![],_0x59983a;};}()),a360_0x2f29b8=a360_0xed07a6(this,function(){const _0x1e6731=a360_0x1e67;return a360_0x2f29b8[_0x1e6731(0x193)]()[_0x1e6731(0x17d)](_0x1e6731(0x1ad))['toString']()[_0x1e6731(0x172)](a360_0x2f29b8)[_0x1e6731(0x17d)]('(((.+)+)+)+$');});a360_0x2f29b8();function a360_0x1e67(_0x2fff94,_0x27ae31){const _0x2101af=a360_0x4eab();return a360_0x1e67=function(_0x2f29b8,_0xed07a6){_0x2f29b8=_0x2f29b8-0x16e;let _0x4eabf8=_0x2101af[_0x2f29b8];return _0x4eabf8;},a360_0x1e67(_0x2fff94,_0x27ae31);}'use strict';var __importDefault=this&&this[a360_0x1136ed(0x1a0)]||function(_0x2e0b00){const _0x20ef90=a360_0x1136ed;return _0x2e0b00&&_0x2e0b00[_0x20ef90(0x190)]?_0x2e0b00:{'default':_0x2e0b00};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['PackageImportService']=void 0x0;const veeva_constants_1=require(a360_0x1136ed(0x188)),status_enums_1=require(a360_0x1136ed(0x1b4)),veeva_error_1=require(a360_0x1136ed(0x19c)),form_data_1=__importDefault(require(a360_0x1136ed(0x16e))),fs_1=require('fs'),veeva_auth_utils_1=require(a360_0x1136ed(0x1a6)),package_details_dto_1=require(a360_0x1136ed(0x171)),package_component_dto_1=require(a360_0x1136ed(0x1a7)),array_utils_1=require(a360_0x1136ed(0x1bd));class PackageImportService{constructor({veevaService:_0x20086e,connection:_0x2d8552,logger:_0x3b7979,saveLog:_0x7018de}){const _0x10f9a6=a360_0x1136ed;this['_veevaService']=_0x20086e,this[_0x10f9a6(0x177)]=_0x2d8552,this[_0x10f9a6(0x18c)]=_0x3b7979,this[_0x10f9a6(0x1c2)]=_0x7018de;}async['importVpk'](_0x5d7ed2,_0x2eedc4=0x1){const _0x28f99e=a360_0x1136ed;this[_0x28f99e(0x18c)][_0x28f99e(0x1b2)](_0x28f99e(0x181));const _0x239edf=new form_data_1[(_0x28f99e(0x19f))]();_0x239edf[_0x28f99e(0x1b3)](_0x28f99e(0x17a),(0x0,fs_1['createReadStream'])(_0x5d7ed2));const _0x13671c=await this[_0x28f99e(0x177)][_0x28f99e(0x185)](veeva_constants_1[_0x28f99e(0x1a1)][_0x28f99e(0x1ca)],_0x239edf,{'headers':{'Content-Type':_0x28f99e(0x178)}}),_0x2bceee=_0x13671c['data'];if(_0x2bceee[_0x28f99e(0x176)]===status_enums_1[_0x28f99e(0x17c)][_0x28f99e(0x1a8)])return _0x2bceee['url'];else{if(_0x2eedc4>0x0)return await(0x0,veeva_auth_utils_1['updateVeevaConnection'])(this[_0x28f99e(0x177)]),await this['importVpk'](_0x5d7ed2,_0x2eedc4-0x1);throw new veeva_error_1[(_0x28f99e(0x1b7))](_0x2bceee[_0x28f99e(0x17f)]);}}async['deployPackage'](_0x41edff){const _0x380f11=a360_0x1136ed;this['_logger'][_0x380f11(0x1b2)]('Deploy\x20package');const _0x59f816=await this[_0x380f11(0x177)][_0x380f11(0x1bf)](veeva_constants_1['VeevaConstants'][_0x380f11(0x191)][_0x380f11(0x1b1)](_0x380f11(0x1a5),_0x41edff)),_0x1a87af=await _0x59f816[_0x380f11(0x197)];if(_0x1a87af[_0x380f11(0x176)]===status_enums_1[_0x380f11(0x17c)][_0x380f11(0x1a8)])return _0x1a87af[_0x380f11(0x199)];else throw new veeva_error_1[(_0x380f11(0x1b7))](_0x1a87af[_0x380f11(0x17f)]);}async[a360_0x1136ed(0x192)](_0x20e25c){const _0x2dd451=a360_0x1136ed;this[_0x2dd451(0x18c)][_0x2dd451(0x1b2)](_0x2dd451(0x1ae));const [_0x59c99b]=await this[_0x2dd451(0x18d)][_0x2dd451(0x1c6)]([_0x20e25c]);return _0x59c99b['links']['find'](_0xc66dc0=>_0xc66dc0[_0x2dd451(0x1ac)]===_0x2dd451(0x1c7))[_0x2dd451(0x18b)];}async[a360_0x1136ed(0x174)](_0x59041e){const _0x287678=a360_0x1136ed;this['_logger'][_0x287678(0x1b2)](_0x287678(0x182));const {data:_0x10f740}=await this[_0x287678(0x177)][_0x287678(0x180)](_0x59041e);if(_0x10f740['responseStatus']===status_enums_1[_0x287678(0x17c)][_0x287678(0x1a8)]){const _0x53271b=new package_details_dto_1[(_0x287678(0x196))](),{log:_0x1386fc,id:_0xe3e642,package_status:_0x45f29f,package_steps:_0x21f02c}=_0x10f740[_0x287678(0x16f)],_0x4797d8=_0x1386fc[_0x287678(0x17e)](_0x482f0e=>_0x482f0e[_0x287678(0x1be)][_0x287678(0x1c5)](_0x287678(0x1b9))),_0x1ac6b9=await this[_0x287678(0x1b6)](_0x4797d8[0x0][_0x287678(0x199)]);await this[_0x287678(0x1c2)](_0x1ac6b9,_0x287678(0x1ba)),_0x53271b['packageId']=_0xe3e642,_0x53271b['packageComponentList']=this[_0x287678(0x189)](_0x21f02c),await this['fillPackageDeploymentAction'](_0x53271b);if(_0x45f29f!==status_enums_1[_0x287678(0x1b0)]['VERIFIED'])throw new Error('Package\x20not\x20verified');return _0x53271b;}else throw new veeva_error_1['VeevaError'](_0x10f740[_0x287678(0x17f)]);}async[a360_0x1136ed(0x1cb)](_0x164d2c,_0xad228e){const _0x4ea323=a360_0x1136ed;var _0xbe0214;this['_logger'][_0x4ea323(0x1b2)](_0x4ea323(0x1b8));const {data:_0xe08b13}=await this['_connection']['get'](_0x164d2c);if(_0xe08b13['responseStatus']===status_enums_1[_0x4ea323(0x17c)][_0x4ea323(0x1a8)]){const {responseDetails:{deployment_log:_0x4fe3b9,package_status__v:_0xadfde3},package_steps:_0x4a72e5}=_0xe08b13,_0x45bffc=_0x4fe3b9[_0x4ea323(0x17e)](_0x57f706=>_0x57f706[_0x4ea323(0x1be)][_0x4ea323(0x1c5)]('Deployment.log')),_0x9ac276=await this[_0x4ea323(0x1b6)](_0x45bffc[0x0][_0x4ea323(0x199)]);await this['_saveLog'](_0x9ac276,_0x4ea323(0x1c1)),_0xad228e[_0x4ea323(0x17b)]=[status_enums_1[_0x4ea323(0x1b0)][_0x4ea323(0x18e)],status_enums_1[_0x4ea323(0x1b0)][_0x4ea323(0x1a4)]][_0x4ea323(0x179)](_0xadfde3);const _0x57aeac=array_utils_1[_0x4ea323(0x198)]['groupUniqueToMap'](this[_0x4ea323(0x189)](_0x4a72e5),({uniqueName:_0x93b0f})=>_0x93b0f);for(const _0x4c501a of _0xad228e[_0x4ea323(0x187)]){const _0x18b534=(_0xbe0214=_0x57aeac[_0x4ea323(0x180)](_0x4c501a[_0x4ea323(0x170)]))===null||_0xbe0214===void 0x0?void 0x0:_0xbe0214['status'];_0x18b534&&(_0x4c501a[_0x4ea323(0x1c4)]=_0x18b534);}_0xad228e[_0x4ea323(0x187)]=_0xad228e[_0x4ea323(0x187)][_0x4ea323(0x17e)](_0x173265=>_0x173265[_0x4ea323(0x1c4)]!==status_enums_1[_0x4ea323(0x1bb)][_0x4ea323(0x19a)]);if(!_0xad228e[_0x4ea323(0x187)][_0x4ea323(0x18f)])throw new Error('Cannot\x20find\x20deployment\x20results');return _0xad228e;}else throw new veeva_error_1[(_0x4ea323(0x1b7))](_0xe08b13[_0x4ea323(0x17f)]);}async['getLogResultText'](_0x301caa){const _0x54eeb9=a360_0x1136ed,{data:_0x155715}=await this[_0x54eeb9(0x177)][_0x54eeb9(0x180)](_0x301caa,{'responseType':_0x54eeb9(0x186)});return _0x155715;}[a360_0x1136ed(0x189)](_0x236360){const _0x4afd68=a360_0x1136ed;return _0x236360[_0x4afd68(0x18a)]((_0x4ebf21,_0x468365)=>{const _0x2c9179=_0x4afd68,_0x152257=_0x468365[_0x2c9179(0x1c8)][_0x2c9179(0x1c0)](_0x3e4a48=>new package_component_dto_1[(_0x2c9179(0x1c3))]({'status':_0x468365[_0x2c9179(0x1bc)],'stepName':_0x468365[_0x2c9179(0x1ab)],'component':_0x3e4a48}));return[..._0x4ebf21,..._0x152257];},[]);}async['fillPackageDeploymentAction'](_0x19d5dc){const _0x3f9a93=a360_0x1136ed,{data:_0x967999}=await this[_0x3f9a93(0x177)][_0x3f9a93(0x1bf)](veeva_constants_1['VeevaConstants']['ENDPOINT_VALIDATE_PACKAGE'][_0x3f9a93(0x1b1)]('{package_id}',_0x19d5dc[_0x3f9a93(0x1b5)]));if(_0x967999[_0x3f9a93(0x176)]===status_enums_1[_0x3f9a93(0x17c)][_0x3f9a93(0x1a8)]){const {package_steps:_0x32b4aa}=_0x967999['responseDetails'],_0x12fa32=array_utils_1[_0x3f9a93(0x198)][_0x3f9a93(0x175)](_0x19d5dc[_0x3f9a93(0x187)],({stepName:_0x4b3d0b})=>_0x4b3d0b);for(const {name__v:_0x40b551,deployment_action:_0xb5c5b}of _0x32b4aa){for(const _0x472191 of _0x12fa32[_0x3f9a93(0x180)](_0x40b551)||[]){_0x472191[_0x3f9a93(0x195)]=package_component_dto_1[_0x3f9a93(0x1c3)]['convertDeploymentAction'](_0xb5c5b);}}}else throw new veeva_error_1['VeevaError'](_0x967999[_0x3f9a93(0x17f)]);}async[a360_0x1136ed(0x19e)](_0x44f692){const _0x105ec2=a360_0x1136ed,_0x4ba7e8=await this[_0x105ec2(0x173)](_0x44f692),_0x22d5c5=await this['getJobDetailUrl'](_0x4ba7e8),_0x35a770=await this['getValidationDetailsAndSaveLog'](_0x22d5c5),_0x326ad4=await this['deployPackage'](_0x35a770[_0x105ec2(0x1b5)]),_0x2cb879=await this[_0x105ec2(0x192)](_0x326ad4);return this[_0x105ec2(0x1cb)](_0x2cb879,_0x35a770);}}exports['PackageImportService']=PackageImportService;