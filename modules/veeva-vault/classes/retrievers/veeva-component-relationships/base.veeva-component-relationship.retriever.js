const a322_0xb27406=a322_0x1761;(function(_0x11b619,_0x3615fc){const _0x28226a=a322_0x1761,_0x1361b3=_0x11b619();while(!![]){try{const _0x28c10d=-parseInt(_0x28226a(0xff))/0x1*(parseInt(_0x28226a(0x101))/0x2)+parseInt(_0x28226a(0x103))/0x3+parseInt(_0x28226a(0x10b))/0x4*(parseInt(_0x28226a(0xfe))/0x5)+parseInt(_0x28226a(0x10e))/0x6+-parseInt(_0x28226a(0x104))/0x7*(parseInt(_0x28226a(0x100))/0x8)+parseInt(_0x28226a(0xf8))/0x9+-parseInt(_0x28226a(0x10c))/0xa*(-parseInt(_0x28226a(0x102))/0xb);if(_0x28c10d===_0x3615fc)break;else _0x1361b3['push'](_0x1361b3['shift']());}catch(_0x3bb87c){_0x1361b3['push'](_0x1361b3['shift']());}}}(a322_0x5618,0xf0fb6));function a322_0x1761(_0x389863,_0x3109b2){const _0xee790d=a322_0x5618();return a322_0x1761=function(_0x891276,_0x4c405a){_0x891276=_0x891276-0xf4;let _0x5618af=_0xee790d[_0x891276];return _0x5618af;},a322_0x1761(_0x389863,_0x3109b2);}function a322_0x5618(){const _0x255cb4=['14QBwiRq','reduce','VeevaConstants','toString','BaseVeevaComponentRelationshipRetriever','deleteDuplicates','sourceComponentId','356WPNfPk','265610ecAQQA','value','10429104HyCrqN','__esModule','(((.+)+)+)+$','executeManyVQL','retrieve','set','getEndpointList','VeevaComponentRelationshipDto','values','1376874QKABMt','ENDPOINT_VQL','constructor','formComponents','../../../dtos/veeva-component-relationship.dto','apply','8605olSmpu','117906qkEYXq','5286232WLPHeF','26sNlfWk','88ODtsPl','4753713JbirqA'];a322_0x5618=function(){return _0x255cb4;};return a322_0x5618();}const a322_0x4c405a=(function(){let _0x2eb26b=!![];return function(_0x19a9b8,_0x5351fb){const _0x2303ff=_0x2eb26b?function(){const _0x2863df=a322_0x1761;if(_0x5351fb){const _0x41c218=_0x5351fb[_0x2863df(0xfd)](_0x19a9b8,arguments);return _0x5351fb=null,_0x41c218;}}:function(){};return _0x2eb26b=![],_0x2303ff;};}()),a322_0x891276=a322_0x4c405a(this,function(){const _0x43300e=a322_0x1761;return a322_0x891276[_0x43300e(0x107)]()['search'](_0x43300e(0x110))[_0x43300e(0x107)]()[_0x43300e(0xfa)](a322_0x891276)['search'](_0x43300e(0x110));});a322_0x891276();'use strict';Object['defineProperty'](exports,a322_0xb27406(0x10f),{'value':!![]}),exports[a322_0xb27406(0x108)]=void 0x0;const veeva_constants_1=require('../../../constants/veeva.constants'),veeva_component_relationship_dto_1=require(a322_0xb27406(0xfc));class BaseVeevaComponentRelationshipRetriever{constructor({value:_0x22e29a,veevaService:_0xb823cb}){const _0x5316fb=a322_0xb27406;this[_0x5316fb(0x10d)]=_0x22e29a,this['veevaService']=_0xb823cb;}['formQueryEndpoint'](_0x12375c){const _0x130d58=a322_0xb27406,_0x820ac1='\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20source_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component_name__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20created_date__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component_relationship__sys\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20'+_0x12375c;return veeva_constants_1[_0x130d58(0x106)][_0x130d58(0xf9)]+_0x820ac1;}[a322_0xb27406(0x109)](_0x3193c4){const _0x239584=a322_0xb27406,_0x4bef8d=_0x3193c4[_0x239584(0x105)]((_0x26d025,_0x33613e)=>_0x26d025[_0x239584(0xf4)](_0x33613e[_0x239584(0x10a)]+'.'+_0x33613e['targetComponentId'],_0x33613e),new Map());return[..._0x4bef8d[_0x239584(0xf7)]()];}[a322_0xb27406(0xfb)](_0xb1e444){const _0x472505=a322_0xb27406;return _0xb1e444['map'](_0x5d370e=>new veeva_component_relationship_dto_1[(_0x472505(0xf6))](_0x5d370e));}async[a322_0xb27406(0x112)](){const _0x5022c6=a322_0xb27406,_0x4dbe09=this[_0x5022c6(0xf5)](),_0xf51e6e=await this['veevaService'][_0x5022c6(0x111)](_0x4dbe09),_0x3ea8a1=this[_0x5022c6(0xfb)](_0xf51e6e);return this['deleteDuplicates'](_0x3ea8a1);}}exports[a322_0xb27406(0x108)]=BaseVeevaComponentRelationshipRetriever;