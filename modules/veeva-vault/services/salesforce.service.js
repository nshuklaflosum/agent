const a361_0x27f328=a361_0x15cf;(function(_0x40a428,_0x34ed23){const _0x4505ee=a361_0x15cf,_0x326116=_0x40a428();while(!![]){try{const _0x3e5175=parseInt(_0x4505ee(0xb0))/0x1+-parseInt(_0x4505ee(0xba))/0x2*(parseInt(_0x4505ee(0xb4))/0x3)+parseInt(_0x4505ee(0xc2))/0x4+-parseInt(_0x4505ee(0xa7))/0x5+parseInt(_0x4505ee(0xab))/0x6*(parseInt(_0x4505ee(0xb2))/0x7)+-parseInt(_0x4505ee(0xbd))/0x8+-parseInt(_0x4505ee(0xbb))/0x9*(-parseInt(_0x4505ee(0xaf))/0xa);if(_0x3e5175===_0x34ed23)break;else _0x326116['push'](_0x326116['shift']());}catch(_0x3db70b){_0x326116['push'](_0x326116['shift']());}}}(a361_0x1d05,0x4959e));const a361_0x2133dd=(function(){let _0x810277=!![];return function(_0x52d14a,_0x305f71){const _0x5cd68f=_0x810277?function(){const _0x5d08ee=a361_0x15cf;if(_0x305f71){const _0x5484f4=_0x305f71[_0x5d08ee(0xad)](_0x52d14a,arguments);return _0x305f71=null,_0x5484f4;}}:function(){};return _0x810277=![],_0x5cd68f;};}()),a361_0x2554ff=a361_0x2133dd(this,function(){const _0x3d2003=a361_0x15cf;return a361_0x2554ff[_0x3d2003(0xbc)]()[_0x3d2003(0xc0)](_0x3d2003(0xae))[_0x3d2003(0xbc)]()['constructor'](a361_0x2554ff)[_0x3d2003(0xc0)](_0x3d2003(0xae));});a361_0x2554ff();'use strict';function a361_0x1d05(){const _0x16a3d6=['1981FyPnXl','../constants/flosum.constants','75963QIkycE','SalesforceService','../../shared/utils','post','chunkArray','FlosumConstants','12nTSFHa','4374mfNsJg','toString','996648eEyDrO','data','get','search','done','89596DSIexe','_connection','push','1257610SofQMn','ENDPOINT_QUERY','insertMultipleRecords','INSERT_RECORDS_LIMIT','5196vzPniq','map','apply','(((.+)+)+)+$','590UDfjlB','532324zQvCZK','nextRecordsUrl'];a361_0x1d05=function(){return _0x16a3d6;};return a361_0x1d05();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a361_0x27f328(0xb5)]=void 0x0;const utils_1=require(a361_0x27f328(0xb6)),flosum_constants_1=require(a361_0x27f328(0xb3));class SalesforceService{constructor({connection:_0x3e1e1d}){this['_connection']=_0x3e1e1d;}async[a361_0x27f328(0xa9)](_0x500bf0,_0x463245){const _0x2dd23a=a361_0x27f328,_0x213a4d=[],_0x3921ea=_0x463245[_0x2dd23a(0xac)](_0x1099a2=>({'attributes':{'type':_0x500bf0},..._0x1099a2})),_0x1cea2f=(0x0,utils_1[_0x2dd23a(0xb8)])(_0x3921ea,SalesforceService[_0x2dd23a(0xaa)]);for(const _0x88c98e of _0x1cea2f){const {data:_0x293fee}=await this['_connection'][_0x2dd23a(0xb7)](flosum_constants_1[_0x2dd23a(0xb9)]['ENDPOINT_INSERT_MULTIPLE_RECORDS'],{'allOrNone':!![],'records':_0x88c98e});_0x213a4d[_0x2dd23a(0xc4)](..._0x293fee);}return _0x213a4d;}async['retrieveRecords'](_0x5923c2){const _0x5641b1=a361_0x27f328,_0x29f534=[];let _0x1ffebc,_0x5310fa;do{let _0x2057cc;!_0x1ffebc?_0x2057cc=await this[_0x5641b1(0xc3)]['get'](flosum_constants_1[_0x5641b1(0xb9)][_0x5641b1(0xa8)],{'params':{'q':_0x5923c2}}):_0x2057cc=await this[_0x5641b1(0xc3)][_0x5641b1(0xbf)](_0x1ffebc),_0x29f534[_0x5641b1(0xc4)](..._0x2057cc[_0x5641b1(0xbe)]['records']),_0x1ffebc=_0x2057cc['data'][_0x5641b1(0xb1)],_0x5310fa=_0x2057cc[_0x5641b1(0xbe)][_0x5641b1(0xc1)];}while(!_0x5310fa);return _0x29f534;}}function a361_0x15cf(_0x1e1ae5,_0x353efd){const _0x3768a1=a361_0x1d05();return a361_0x15cf=function(_0x2554ff,_0x2133dd){_0x2554ff=_0x2554ff-0xa7;let _0x1d0592=_0x3768a1[_0x2554ff];return _0x1d0592;},a361_0x15cf(_0x1e1ae5,_0x353efd);}exports[a361_0x27f328(0xb5)]=SalesforceService,SalesforceService['INSERT_RECORDS_LIMIT']=0xc8;