const a134_0x5127f0=a134_0x3fe1;(function(_0x5c8df1,_0x58e51c){const _0x20a947=a134_0x3fe1,_0x19633c=_0x5c8df1();while(!![]){try{const _0x307fde=parseInt(_0x20a947(0x144))/0x1+parseInt(_0x20a947(0x14e))/0x2+parseInt(_0x20a947(0x16c))/0x3*(-parseInt(_0x20a947(0x160))/0x4)+parseInt(_0x20a947(0x15e))/0x5+-parseInt(_0x20a947(0x14b))/0x6+parseInt(_0x20a947(0x175))/0x7+parseInt(_0x20a947(0x149))/0x8;if(_0x307fde===_0x58e51c)break;else _0x19633c['push'](_0x19633c['shift']());}catch(_0x24ebfb){_0x19633c['push'](_0x19633c['shift']());}}}(a134_0xff71,0xeca22));const a134_0x55a611=(function(){let _0x1a3e3a=!![];return function(_0x35da8c,_0x13ba72){const _0x3de502=_0x1a3e3a?function(){const _0x1ae698=a134_0x3fe1;if(_0x13ba72){const _0x230522=_0x13ba72[_0x1ae698(0x170)](_0x35da8c,arguments);return _0x13ba72=null,_0x230522;}}:function(){};return _0x1a3e3a=![],_0x3de502;};}()),a134_0x517bdb=a134_0x55a611(this,function(){const _0x559e3b=a134_0x3fe1;return a134_0x517bdb['toString']()['search'](_0x559e3b(0x14c))[_0x559e3b(0x151)]()[_0x559e3b(0x16a)](a134_0x517bdb)['search']('(((.+)+)+)+$');});a134_0x517bdb();'use strict';function a134_0xff71(){const _0x5078f3=['join','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','find','ids','fromSalesforce','filename','length','371660wkqlXP','log','defineProperty','SalesforceRetrieverService','run','14603888doglDU','replace','7903134AsTReW','(((.+)+)+)+$','__importDefault','297852QfMzKw','Name','FlosumComponentHistoryDto','toString','SalesforceQueryService','../../../core','COMPONENTS_PER_QUERY','COMPONENTS_PER_REQUEST','salesforceService','%ids%','__esModule','fileName','map','push','../dto/flosum-component-history.dto','retrieveComponentIdsFromHistoryIds','1761260sboEmf','fileType','5308aJxaJx','components','logger','query','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','retrieveLastComponents','%parent_ids%','GET_COMPONENT_HISTORIES_BY_IDS','ParentId','attachmentId','constructor','./salesforce-query.service','2385hTAPmy','then','retrieveAttachment','info','apply','Logger','typedi','splice','manually\x20retrieving\x20components\x20from\x20salesforce','4501560pFvvji'];a134_0xff71=function(){return _0x5078f3;};return a134_0xff71();}var __importDefault=this&&this[a134_0x5127f0(0x14d)]||function(_0x585167){const _0x37553d=a134_0x5127f0;return _0x585167&&_0x585167[_0x37553d(0x158)]?_0x585167:{'default':_0x585167};};Object[a134_0x5127f0(0x146)](exports,'__esModule',{'value':!![]}),exports[a134_0x5127f0(0x147)]=void 0x0;const core_1=require(a134_0x5127f0(0x153)),typedi_1=__importDefault(require(a134_0x5127f0(0x172))),salesforce_query_service_1=require(a134_0x5127f0(0x16b)),queries_1=require('../queries'),flosum_component_history_dto_1=require(a134_0x5127f0(0x15c));class SalesforceRetrieverService{constructor(_0xe0f85){const _0x518044=a134_0x5127f0;this[_0x518044(0x156)]=_0xe0f85,this[_0x518044(0x162)]=new core_1[(_0x518044(0x171))](SalesforceRetrieverService['name']),this[_0x518044(0x155)]=0xbb8,this[_0x518044(0x154)]=0x1f4;}async[a134_0x5127f0(0x15d)](_0x56e5b5){const _0x32ed1e=a134_0x5127f0;this[_0x32ed1e(0x162)]['info']('manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)',_0x56e5b5[_0x32ed1e(0x143)]);const _0x1ce1ba=typedi_1['default']['get'](salesforce_query_service_1[_0x32ed1e(0x152)]),_0x47e0e0=_0x56e5b5['map'](_0x3659d7=>'\x27'+_0x3659d7+'\x27'),_0x5ef95b=[];while(_0x47e0e0['length']){const _0x150771=_0x47e0e0[_0x32ed1e(0x173)](0x0,this['COMPONENTS_PER_QUERY']),_0x247f3d=_0x1ce1ba['query'](queries_1[_0x32ed1e(0x177)][_0x32ed1e(0x14a)](_0x32ed1e(0x166),_0x150771[_0x32ed1e(0x176)]())),_0x30416d=_0x1ce1ba[_0x32ed1e(0x163)](queries_1[_0x32ed1e(0x167)][_0x32ed1e(0x14a)](_0x32ed1e(0x157),_0x150771[_0x32ed1e(0x176)]()))[_0x32ed1e(0x16d)](_0x3aefd6=>_0x3aefd6[_0x32ed1e(0x15a)](_0x5c0ff6=>flosum_component_history_dto_1[_0x32ed1e(0x150)][_0x32ed1e(0x17a)](_0x5c0ff6))),[_0x46efd1,_0x3b7da9]=await Promise['all']([_0x247f3d,_0x30416d]);for(const _0x508cd7 of _0x3b7da9){const _0x145202=_0x46efd1[_0x32ed1e(0x178)](_0x8ad3a4=>_0x8ad3a4[_0x32ed1e(0x168)]===_0x508cd7['id']);_0x145202&&_0x5ef95b[_0x32ed1e(0x15b)]({'fileType':_0x145202[_0x32ed1e(0x14f)],'fileName':_0x508cd7[_0x32ed1e(0x142)],'attachmentId':_0x145202['Id']});}}return _0x5ef95b;}async[a134_0x5127f0(0x165)](_0x4156b9){const _0x6b426d=a134_0x5127f0,_0x557d29=await this[_0x6b426d(0x15d)](_0x4156b9);this['logger'][_0x6b426d(0x16f)](_0x6b426d(0x174));const _0x433ec9=[];for(const _0x274a7b of _0x557d29){const _0x1c36c4=await this[_0x6b426d(0x156)][_0x6b426d(0x16e)](_0x274a7b[_0x6b426d(0x169)],!![]);_0x433ec9[_0x6b426d(0x15b)]({'body':_0x1c36c4[_0x6b426d(0x151)]('base64'),'fileName':_0x274a7b[_0x6b426d(0x159)],'fileType':_0x274a7b[_0x6b426d(0x15f)]}),this[_0x6b426d(0x162)]['info']('manually\x20retrieved\x20%d/%d\x20components',_0x433ec9[_0x6b426d(0x143)],_0x4156b9['length']);}return _0x433ec9;}async[a134_0x5127f0(0x148)](_0x571b97){const _0x33be18=a134_0x5127f0,_0x4c9e46=[..._0x571b97],_0x663fc6=[],_0x2427b5=[];while(_0x4c9e46[_0x33be18(0x143)]){const _0x26564f=_0x4c9e46[_0x33be18(0x173)](0x0,this[_0x33be18(0x155)]),_0x573a42=await this['salesforceService']['retrieveComponents'](_0x26564f);_0x26564f[_0x33be18(0x143)]!==_0x573a42[_0x33be18(0x179)][_0x33be18(0x143)]?(_0x4c9e46[_0x33be18(0x15b)](..._0x573a42[_0x33be18(0x179)]),_0x663fc6[_0x33be18(0x15b)](..._0x573a42[_0x33be18(0x161)])):_0x2427b5[_0x33be18(0x15b)](..._0x26564f),this[_0x33be18(0x162)][_0x33be18(0x145)](_0x33be18(0x164),_0x571b97[_0x33be18(0x143)]-_0x4c9e46[_0x33be18(0x143)],_0x571b97[_0x33be18(0x143)]);}if(_0x2427b5['length']){const _0x4010b2=await this['retrieveLastComponents'](_0x2427b5);_0x663fc6[_0x33be18(0x15b)](..._0x4010b2);}return _0x663fc6;}}function a134_0x3fe1(_0x2a9e2a,_0x272987){const _0x10c50c=a134_0xff71();return a134_0x3fe1=function(_0x517bdb,_0x55a611){_0x517bdb=_0x517bdb-0x142;let _0xff7168=_0x10c50c[_0x517bdb];return _0xff7168;},a134_0x3fe1(_0x2a9e2a,_0x272987);}exports['SalesforceRetrieverService']=SalesforceRetrieverService;