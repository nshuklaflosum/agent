const a323_0x36958b=a323_0x30d7;(function(_0x2edaf0,_0xf6f0bc){const _0x10c41a=a323_0x30d7,_0x528c42=_0x2edaf0();while(!![]){try{const _0x11ac31=parseInt(_0x10c41a(0xab))/0x1*(parseInt(_0x10c41a(0xa5))/0x2)+-parseInt(_0x10c41a(0xa3))/0x3+parseInt(_0x10c41a(0xa6))/0x4*(-parseInt(_0x10c41a(0xbf))/0x5)+-parseInt(_0x10c41a(0xc0))/0x6+-parseInt(_0x10c41a(0xb9))/0x7+-parseInt(_0x10c41a(0xa2))/0x8*(-parseInt(_0x10c41a(0xb5))/0x9)+parseInt(_0x10c41a(0xac))/0xa*(parseInt(_0x10c41a(0xaa))/0xb);if(_0x11ac31===_0xf6f0bc)break;else _0x528c42['push'](_0x528c42['shift']());}catch(_0x5ecfae){_0x528c42['push'](_0x528c42['shift']());}}}(a323_0x8bd8,0xd66eb));function a323_0x8bd8(){const _0xcbd441=['ENDPOINT_VQL','8ybqNTy','41562OvCEPn','../../../dtos/veeva-component-relationship.dto','6YmmBgL','36lIBSvY','deleteDuplicates','values','VeevaComponentRelationshipDto','967791PSDYrT','294841IKVMBN','190CoLLRo','retrieve','../../../constants/veeva.constants','constructor','reduce','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20source_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component_name__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20created_date__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component_relationship__sys\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20','toString','targetComponentId','VeevaConstants','7935831UsKsUH','executeManyVQL','value','map','7095613LRIIGL','search','defineProperty','formComponents','set','BaseVeevaComponentRelationshipRetriever','171715EvEwLj','7338036XPFjRN','apply','veevaService','getEndpointList'];a323_0x8bd8=function(){return _0xcbd441;};return a323_0x8bd8();}const a323_0x24d181=(function(){let _0x160573=!![];return function(_0x103af3,_0x397964){const _0x520b8d=_0x160573?function(){const _0x916b2c=a323_0x30d7;if(_0x397964){const _0x6b9474=_0x397964[_0x916b2c(0x9e)](_0x103af3,arguments);return _0x397964=null,_0x6b9474;}}:function(){};return _0x160573=![],_0x520b8d;};}()),a323_0x214d2b=a323_0x24d181(this,function(){const _0x317447=a323_0x30d7;return a323_0x214d2b[_0x317447(0xb2)]()[_0x317447(0xba)]('(((.+)+)+)+$')['toString']()[_0x317447(0xaf)](a323_0x214d2b)[_0x317447(0xba)]('(((.+)+)+)+$');});a323_0x214d2b();function a323_0x30d7(_0x536375,_0x25f931){const _0x5a3f38=a323_0x8bd8();return a323_0x30d7=function(_0x214d2b,_0x24d181){_0x214d2b=_0x214d2b-0x9e;let _0x8bd8e9=_0x5a3f38[_0x214d2b];return _0x8bd8e9;},a323_0x30d7(_0x536375,_0x25f931);}'use strict';Object[a323_0x36958b(0xbb)](exports,'__esModule',{'value':!![]}),exports['BaseVeevaComponentRelationshipRetriever']=void 0x0;const veeva_constants_1=require(a323_0x36958b(0xae)),veeva_component_relationship_dto_1=require(a323_0x36958b(0xa4));class BaseVeevaComponentRelationshipRetriever{constructor({value:_0x57bbcd,veevaService:_0x483140}){const _0x1b93a0=a323_0x36958b;this[_0x1b93a0(0xb7)]=_0x57bbcd,this[_0x1b93a0(0x9f)]=_0x483140;}['formQueryEndpoint'](_0x6c1a04){const _0x3b0f0=a323_0x36958b,_0x4c608c=_0x3b0f0(0xb1)+_0x6c1a04;return veeva_constants_1[_0x3b0f0(0xb4)][_0x3b0f0(0xa1)]+_0x4c608c;}['deleteDuplicates'](_0xaafe58){const _0x4a03a4=a323_0x36958b,_0x1f234b=_0xaafe58[_0x4a03a4(0xb0)]((_0x16ad31,_0x35e522)=>_0x16ad31[_0x4a03a4(0xbd)](_0x35e522['sourceComponentId']+'.'+_0x35e522[_0x4a03a4(0xb3)],_0x35e522),new Map());return[..._0x1f234b[_0x4a03a4(0xa8)]()];}[a323_0x36958b(0xbc)](_0x5a8b9e){const _0x3b13a3=a323_0x36958b;return _0x5a8b9e[_0x3b13a3(0xb8)](_0x5e56da=>new veeva_component_relationship_dto_1[(_0x3b13a3(0xa9))](_0x5e56da));}async[a323_0x36958b(0xad)](){const _0x5d7593=a323_0x36958b,_0x53a109=this[_0x5d7593(0xa0)](),_0x2933fd=await this[_0x5d7593(0x9f)][_0x5d7593(0xb6)](_0x53a109),_0x31ba32=this['formComponents'](_0x2933fd);return this[_0x5d7593(0xa7)](_0x31ba32);}}exports[a323_0x36958b(0xbe)]=BaseVeevaComponentRelationshipRetriever;