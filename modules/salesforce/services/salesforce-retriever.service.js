function a135_0x24ad(_0x2c36b7,_0x30e081){const _0x251be4=a135_0x5b7f();return a135_0x24ad=function(_0xdd4e5e,_0x40fb44){_0xdd4e5e=_0xdd4e5e-0x99;let _0x5b7f9b=_0x251be4[_0xdd4e5e];return _0x5b7f9b;},a135_0x24ad(_0x2c36b7,_0x30e081);}const a135_0xc8c85b=a135_0x24ad;(function(_0x533d5e,_0x4556d2){const _0x45dfcd=a135_0x24ad,_0x4760dd=_0x533d5e();while(!![]){try{const _0x2b7750=parseInt(_0x45dfcd(0xbc))/0x1+-parseInt(_0x45dfcd(0xb0))/0x2+parseInt(_0x45dfcd(0xab))/0x3*(-parseInt(_0x45dfcd(0xb3))/0x4)+parseInt(_0x45dfcd(0xa6))/0x5+parseInt(_0x45dfcd(0xb4))/0x6*(parseInt(_0x45dfcd(0xbe))/0x7)+parseInt(_0x45dfcd(0x9f))/0x8+-parseInt(_0x45dfcd(0xc5))/0x9*(parseInt(_0x45dfcd(0xc8))/0xa);if(_0x2b7750===_0x4556d2)break;else _0x4760dd['push'](_0x4760dd['shift']());}catch(_0x2e86e4){_0x4760dd['push'](_0x4760dd['shift']());}}}(a135_0x5b7f,0x96ba7));const a135_0x40fb44=(function(){let _0x4aacb1=!![];return function(_0xe7497b,_0x38cc3b){const _0x52e63b=_0x4aacb1?function(){const _0x174dc7=a135_0x24ad;if(_0x38cc3b){const _0x4102f3=_0x38cc3b[_0x174dc7(0xcf)](_0xe7497b,arguments);return _0x38cc3b=null,_0x4102f3;}}:function(){};return _0x4aacb1=![],_0x52e63b;};}()),a135_0xdd4e5e=a135_0x40fb44(this,function(){const _0x31baa1=a135_0x24ad;return a135_0xdd4e5e['toString']()[_0x31baa1(0xd5)](_0x31baa1(0x99))[_0x31baa1(0xad)]()[_0x31baa1(0xaf)](a135_0xdd4e5e)[_0x31baa1(0xd5)](_0x31baa1(0x99));});a135_0xdd4e5e();'use strict';var __importDefault=this&&this[a135_0xc8c85b(0xa1)]||function(_0x481f6f){return _0x481f6f&&_0x481f6f['__esModule']?_0x481f6f:{'default':_0x481f6f};};Object['defineProperty'](exports,a135_0xc8c85b(0xb1),{'value':!![]}),exports['SalesforceRetrieverService']=void 0x0;const core_1=require(a135_0xc8c85b(0xa5)),typedi_1=__importDefault(require(a135_0xc8c85b(0x9e))),salesforce_query_service_1=require(a135_0xc8c85b(0xb2)),queries_1=require(a135_0xc8c85b(0xc6)),flosum_component_history_dto_1=require(a135_0xc8c85b(0xaa));class SalesforceRetrieverService{constructor(_0x237c8d){const _0x4ebfea=a135_0xc8c85b;this[_0x4ebfea(0xcb)]=_0x237c8d,this[_0x4ebfea(0x9d)]=new core_1[(_0x4ebfea(0xa9))](SalesforceRetrieverService[_0x4ebfea(0xc1)]),this[_0x4ebfea(0xce)]=0xbb8,this[_0x4ebfea(0xd1)]=0x1f4;}async[a135_0xc8c85b(0x9a)](_0x461522){const _0x340f23=a135_0xc8c85b;this[_0x340f23(0x9d)][_0x340f23(0xd3)]('manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)',_0x461522[_0x340f23(0xa2)]);const _0x2fcf88=typedi_1[_0x340f23(0xb7)]['get'](salesforce_query_service_1[_0x340f23(0xba)]),_0x2bff40=_0x461522['map'](_0x3e622f=>'\x27'+_0x3e622f+'\x27'),_0x1731ea=[];while(_0x2bff40['length']){const _0x37d2dc=_0x2bff40[_0x340f23(0xc2)](0x0,this[_0x340f23(0xd1)]),_0x51053d=_0x2fcf88['query'](queries_1[_0x340f23(0xac)][_0x340f23(0xb8)](_0x340f23(0xc3),_0x37d2dc[_0x340f23(0xc4)]())),_0x41faf4=_0x2fcf88[_0x340f23(0xc0)](queries_1[_0x340f23(0xa8)][_0x340f23(0xb8)](_0x340f23(0xc9),_0x37d2dc[_0x340f23(0xc4)]()))['then'](_0x115555=>_0x115555[_0x340f23(0xcd)](_0x19e215=>flosum_component_history_dto_1[_0x340f23(0xae)][_0x340f23(0xa3)](_0x19e215))),[_0x2db5c3,_0x1dcba0]=await Promise[_0x340f23(0xbb)]([_0x51053d,_0x41faf4]);for(const _0x136970 of _0x1dcba0){const _0x8b0d85=_0x2db5c3[_0x340f23(0xcc)](_0x2b9462=>_0x2b9462[_0x340f23(0xa4)]===_0x136970['id']);_0x8b0d85&&_0x1731ea[_0x340f23(0xbd)]({'fileType':_0x8b0d85[_0x340f23(0xd0)],'fileName':_0x136970[_0x340f23(0xb6)],'attachmentId':_0x8b0d85['Id']});}}return _0x1731ea;}async[a135_0xc8c85b(0xbf)](_0x3bab64){const _0xef5929=a135_0xc8c85b,_0x4dcd06=await this[_0xef5929(0x9a)](_0x3bab64);this[_0xef5929(0x9d)][_0xef5929(0xd3)](_0xef5929(0x9b));const _0x362a16=[];for(const _0x39ae92 of _0x4dcd06){const _0x421cd1=await this[_0xef5929(0xcb)][_0xef5929(0xca)](_0x39ae92[_0xef5929(0xa7)],!![]);_0x362a16[_0xef5929(0xbd)]({'body':_0x421cd1[_0xef5929(0xad)](_0xef5929(0x9c)),'fileName':_0x39ae92['fileName'],'fileType':_0x39ae92[_0xef5929(0xb5)]}),this[_0xef5929(0x9d)]['info']('manually\x20retrieved\x20%d/%d\x20components',_0x362a16[_0xef5929(0xa2)],_0x3bab64[_0xef5929(0xa2)]);}return _0x362a16;}async[a135_0xc8c85b(0xc7)](_0x495ae7){const _0x1f0297=a135_0xc8c85b,_0x23ab3b=[..._0x495ae7],_0x3f2a20=[],_0x169a8e=[];while(_0x23ab3b[_0x1f0297(0xa2)]){const _0x5e0f4e=_0x23ab3b[_0x1f0297(0xc2)](0x0,this[_0x1f0297(0xce)]),_0x5d834d=await this[_0x1f0297(0xcb)][_0x1f0297(0xb9)](_0x5e0f4e);_0x5e0f4e['length']!==_0x5d834d[_0x1f0297(0xd4)][_0x1f0297(0xa2)]?(_0x23ab3b[_0x1f0297(0xbd)](..._0x5d834d[_0x1f0297(0xd4)]),_0x3f2a20[_0x1f0297(0xbd)](..._0x5d834d[_0x1f0297(0xd6)])):_0x169a8e[_0x1f0297(0xbd)](..._0x5e0f4e),this['logger']['log'](_0x1f0297(0xa0),_0x495ae7[_0x1f0297(0xa2)]-_0x23ab3b[_0x1f0297(0xa2)],_0x495ae7['length']);}if(_0x169a8e[_0x1f0297(0xa2)]){const _0x4a91e2=await this[_0x1f0297(0xbf)](_0x169a8e);_0x3f2a20['push'](..._0x4a91e2);}return _0x3f2a20;}}function a135_0x5b7f(){const _0x2cffef=['685360eqzvUq','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','__importDefault','length','fromSalesforce','ParentId','../../../core','5013235mCOnGr','attachmentId','GET_COMPONENT_HISTORIES_BY_IDS','Logger','../dto/flosum-component-history.dto','57yLdrsY','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','toString','FlosumComponentHistoryDto','constructor','2164472pxOjmg','__esModule','./salesforce-query.service','60244KXbFpA','6115146gCSnuX','fileType','filename','default','replace','retrieveComponents','SalesforceQueryService','all','876350ZuAOmP','push','7zCJqOc','retrieveLastComponents','query','name','splice','%parent_ids%','join','2880WgILfh','../queries','run','31190dIkgFF','%ids%','retrieveAttachment','salesforceService','find','map','COMPONENTS_PER_REQUEST','apply','Name','COMPONENTS_PER_QUERY','SalesforceRetrieverService','info','ids','search','components','(((.+)+)+)+$','retrieveComponentIdsFromHistoryIds','manually\x20retrieving\x20components\x20from\x20salesforce','base64','logger','typedi'];a135_0x5b7f=function(){return _0x2cffef;};return a135_0x5b7f();}exports[a135_0xc8c85b(0xd2)]=SalesforceRetrieverService;