const a185_0x5bc592=a185_0x31bf;(function(_0x251143,_0x455959){const _0x2a00cf=a185_0x31bf,_0x58d953=_0x251143();while(!![]){try{const _0x173ce1=-parseInt(_0x2a00cf(0x1f6))/0x1+parseInt(_0x2a00cf(0x1c4))/0x2*(parseInt(_0x2a00cf(0x1fb))/0x3)+-parseInt(_0x2a00cf(0x1dd))/0x4*(parseInt(_0x2a00cf(0x1ec))/0x5)+parseInt(_0x2a00cf(0x1c1))/0x6+parseInt(_0x2a00cf(0x1d1))/0x7+-parseInt(_0x2a00cf(0x1cd))/0x8*(parseInt(_0x2a00cf(0x1d7))/0x9)+parseInt(_0x2a00cf(0x1ef))/0xa*(-parseInt(_0x2a00cf(0x1e8))/0xb);if(_0x173ce1===_0x455959)break;else _0x58d953['push'](_0x58d953['shift']());}catch(_0x4a996f){_0x58d953['push'](_0x58d953['shift']());}}}(a185_0x993e,0xd4e5a));const a185_0x133873=(function(){let _0xbc9816=!![];return function(_0x304d85,_0x2ef4ab){const _0x3404c6=_0xbc9816?function(){const _0x329b6f=a185_0x31bf;if(_0x2ef4ab){const _0x15b4fe=_0x2ef4ab[_0x329b6f(0x1d2)](_0x304d85,arguments);return _0x2ef4ab=null,_0x15b4fe;}}:function(){};return _0xbc9816=![],_0x3404c6;};}()),a185_0x4593c7=a185_0x133873(this,function(){const _0x55cc73=a185_0x31bf;return a185_0x4593c7[_0x55cc73(0x1f5)]()[_0x55cc73(0x1c2)](_0x55cc73(0x1ee))[_0x55cc73(0x1f5)]()[_0x55cc73(0x1e4)](a185_0x4593c7)[_0x55cc73(0x1c2)]('(((.+)+)+)+$');});a185_0x4593c7();function a185_0x993e(){const _0x540bbb=['retrieveLastComponents','constructor','__importDefault','SalesforceQueryService','defineProperty','11PrCDPf','length','retrieveComponentIdsFromHistoryIds','GET_COMPONENT_HISTORIES_BY_IDS','246520VqYSbZ','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','(((.+)+)+)+$','2572390PdKbSO','name','ParentId','info','typedi','ids','toString','1514348SHWUys','splice','retrieveAttachment','manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)','__esModule','3LQWlfV','./salesforce-query.service','join','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','FlosumComponentHistoryDto','then','fileName','10072848ZWIkHe','search','%ids%','2437012xHticL','log','salesforceService','COMPONENTS_PER_QUERY','get','components','COMPONENTS_PER_REQUEST','replace','Name','8nwpfXY','retrieveComponents','manually\x20retrieving\x20components\x20from\x20salesforce','SalesforceRetrieverService','9683135BgZqrz','apply','default','query','%parent_ids%','../dto/flosum-component-history.dto','5858334bHVbsw','find','all','push','../../../../core','../queries','80TKIsdO','filename','manually\x20retrieved\x20%d/%d\x20components','base64','logger','map'];a185_0x993e=function(){return _0x540bbb;};return a185_0x993e();}function a185_0x31bf(_0x1d3bfe,_0x5e035b){const _0x42c8d5=a185_0x993e();return a185_0x31bf=function(_0x4593c7,_0x133873){_0x4593c7=_0x4593c7-0x1be;let _0x993ece=_0x42c8d5[_0x4593c7];return _0x993ece;},a185_0x31bf(_0x1d3bfe,_0x5e035b);}'use strict';var __importDefault=this&&this[a185_0x5bc592(0x1e5)]||function(_0x556af4){const _0xfc4f99=a185_0x5bc592;return _0x556af4&&_0x556af4[_0xfc4f99(0x1fa)]?_0x556af4:{'default':_0x556af4};};Object[a185_0x5bc592(0x1e7)](exports,a185_0x5bc592(0x1fa),{'value':!![]}),exports[a185_0x5bc592(0x1d0)]=void 0x0;const core_1=require(a185_0x5bc592(0x1db)),typedi_1=__importDefault(require(a185_0x5bc592(0x1f3))),salesforce_query_service_1=require(a185_0x5bc592(0x1fc)),queries_1=require(a185_0x5bc592(0x1dc)),flosum_component_history_dto_1=require(a185_0x5bc592(0x1d6));class SalesforceRetrieverService{constructor(_0x43553b){const _0x5bc48d=a185_0x5bc592;this[_0x5bc48d(0x1c6)]=_0x43553b,this[_0x5bc48d(0x1e1)]=new core_1['Logger'](SalesforceRetrieverService[_0x5bc48d(0x1f0)]),this['COMPONENTS_PER_REQUEST']=0xbb8,this[_0x5bc48d(0x1c7)]=0x1f4;}async[a185_0x5bc592(0x1ea)](_0x1ee3f1){const _0x4c92cb=a185_0x5bc592;this['logger'][_0x4c92cb(0x1f2)](_0x4c92cb(0x1f9),_0x1ee3f1[_0x4c92cb(0x1e9)]);const _0x4b06b0=typedi_1[_0x4c92cb(0x1d3)][_0x4c92cb(0x1c8)](salesforce_query_service_1[_0x4c92cb(0x1e6)]),_0x3e0be9=_0x1ee3f1[_0x4c92cb(0x1e2)](_0x6dfef9=>'\x27'+_0x6dfef9+'\x27'),_0x57e383=[];while(_0x3e0be9[_0x4c92cb(0x1e9)]){const _0x4731e1=_0x3e0be9[_0x4c92cb(0x1f7)](0x0,this['COMPONENTS_PER_QUERY']),_0x107486=_0x4b06b0[_0x4c92cb(0x1d4)](queries_1[_0x4c92cb(0x1fe)][_0x4c92cb(0x1cb)](_0x4c92cb(0x1d5),_0x4731e1[_0x4c92cb(0x1fd)]())),_0xab049d=_0x4b06b0[_0x4c92cb(0x1d4)](queries_1[_0x4c92cb(0x1eb)][_0x4c92cb(0x1cb)](_0x4c92cb(0x1c3),_0x4731e1[_0x4c92cb(0x1fd)]()))[_0x4c92cb(0x1bf)](_0x2fdf4c=>_0x2fdf4c['map'](_0x3be095=>flosum_component_history_dto_1[_0x4c92cb(0x1be)]['fromSalesforce'](_0x3be095))),[_0x2c9446,_0x25d4c9]=await Promise[_0x4c92cb(0x1d9)]([_0x107486,_0xab049d]);for(const _0x3f2e2a of _0x25d4c9){const _0x503f0f=_0x2c9446[_0x4c92cb(0x1d8)](_0x25d1ba=>_0x25d1ba[_0x4c92cb(0x1f1)]===_0x3f2e2a['id']);_0x503f0f&&_0x57e383[_0x4c92cb(0x1da)]({'fileType':_0x503f0f[_0x4c92cb(0x1cc)],'fileName':_0x3f2e2a[_0x4c92cb(0x1de)],'attachmentId':_0x503f0f['Id']});}}return _0x57e383;}async[a185_0x5bc592(0x1e3)](_0x5ee326){const _0x1643bd=a185_0x5bc592,_0x1fc91d=await this[_0x1643bd(0x1ea)](_0x5ee326);this[_0x1643bd(0x1e1)][_0x1643bd(0x1f2)](_0x1643bd(0x1cf));const _0x4cbb9c=[];for(const _0x27d8bd of _0x1fc91d){const _0x3a7f63=await this['salesforceService'][_0x1643bd(0x1f8)](_0x27d8bd['attachmentId'],!![]);_0x4cbb9c[_0x1643bd(0x1da)]({'body':_0x3a7f63[_0x1643bd(0x1f5)](_0x1643bd(0x1e0)),'fileName':_0x27d8bd[_0x1643bd(0x1c0)],'fileType':_0x27d8bd['fileType']}),this[_0x1643bd(0x1e1)][_0x1643bd(0x1f2)](_0x1643bd(0x1df),_0x4cbb9c[_0x1643bd(0x1e9)],_0x5ee326[_0x1643bd(0x1e9)]);}return _0x4cbb9c;}async['run'](_0x8ec1a1){const _0x52588e=a185_0x5bc592,_0x1d4f88=[..._0x8ec1a1],_0x3356ed=[],_0xb3c7ab=[];while(_0x1d4f88['length']){const _0x9956d6=_0x1d4f88[_0x52588e(0x1f7)](0x0,this[_0x52588e(0x1ca)]),_0x9c1b59=await this[_0x52588e(0x1c6)][_0x52588e(0x1ce)](_0x9956d6);_0x9956d6[_0x52588e(0x1e9)]!==_0x9c1b59[_0x52588e(0x1f4)][_0x52588e(0x1e9)]?(_0x1d4f88['push'](..._0x9c1b59[_0x52588e(0x1f4)]),_0x3356ed[_0x52588e(0x1da)](..._0x9c1b59[_0x52588e(0x1c9)])):_0xb3c7ab[_0x52588e(0x1da)](..._0x9956d6),this['logger'][_0x52588e(0x1c5)](_0x52588e(0x1ed),_0x8ec1a1[_0x52588e(0x1e9)]-_0x1d4f88[_0x52588e(0x1e9)],_0x8ec1a1[_0x52588e(0x1e9)]);}if(_0xb3c7ab['length']){const _0x56a951=await this[_0x52588e(0x1e3)](_0xb3c7ab);_0x3356ed[_0x52588e(0x1da)](..._0x56a951);}return _0x3356ed;}}exports[a185_0x5bc592(0x1d0)]=SalesforceRetrieverService;