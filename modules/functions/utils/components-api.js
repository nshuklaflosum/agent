const a89_0x1ed4c4=a89_0x1a2a;(function(_0x35d740,_0x4623c4){const _0x5aab3d=a89_0x1a2a,_0x4fcf39=_0x35d740();while(!![]){try{const _0xd86813=parseInt(_0x5aab3d(0x13f))/0x1+parseInt(_0x5aab3d(0x14e))/0x2+parseInt(_0x5aab3d(0x135))/0x3*(parseInt(_0x5aab3d(0x145))/0x4)+-parseInt(_0x5aab3d(0x14b))/0x5+parseInt(_0x5aab3d(0x142))/0x6+parseInt(_0x5aab3d(0x13d))/0x7+-parseInt(_0x5aab3d(0x137))/0x8;if(_0xd86813===_0x4623c4)break;else _0x4fcf39['push'](_0x4fcf39['shift']());}catch(_0x5690e3){_0x4fcf39['push'](_0x4fcf39['shift']());}}}(a89_0x3f3e,0x5c156));function a89_0x3f3e(){const _0x35e334=['deleteFile','/query/','Component_Type__c\x0a\x20\x20\x20\x20\x20\x20FROM\x20','addFile','(((.+)+)+)+$','2646910GjzNHd','Component_Name__c,\x20','498229tndGow','/services/data/','defineProperty','2746050BCryoW','getEntries','length','2116456tyPuyA','push','constructor','Component_History__c\x0a\x20\x20\x20\x20\x20\x20WHERE\x20Id\x20IN\x20(','../../../constants','chunkArray','854245oXbFLC','filter','default','318384kdnKgi','Component_Type__c','Component__r.','../../shared/utils','getEntry','search','toString','Component__r','ComponentsApi','\x27,\x27','map','records','FLOSUM_NAMESPACE','__esModule','getData','extractFieldsFromRecord','MAX_ZIP_SIZE','isDirectory','fetchComponentsDetailsByComponentsHistory','get','3jwxHpb','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20','11794536VxqYAu'];a89_0x3f3e=function(){return _0x35e334;};return a89_0x3f3e();}const a89_0xd1f5d0=(function(){let _0x2cc7b3=!![];return function(_0x1f935b,_0x1c09fc){const _0x17ba87=_0x2cc7b3?function(){if(_0x1c09fc){const _0x461778=_0x1c09fc['apply'](_0x1f935b,arguments);return _0x1c09fc=null,_0x461778;}}:function(){};return _0x2cc7b3=![],_0x17ba87;};}()),a89_0x2ddcb8=a89_0xd1f5d0(this,function(){const _0x35ee70=a89_0x1a2a;return a89_0x2ddcb8[_0x35ee70(0x127)]()[_0x35ee70(0x126)](_0x35ee70(0x13c))[_0x35ee70(0x127)]()[_0x35ee70(0x147)](a89_0x2ddcb8)['search'](_0x35ee70(0x13c));});a89_0x2ddcb8();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5bad22){const _0xaed757=a89_0x1a2a;return _0x5bad22&&_0x5bad22[_0xaed757(0x12e)]?_0x5bad22:{'default':_0x5bad22};};Object[a89_0x1ed4c4(0x141)](exports,a89_0x1ed4c4(0x12e),{'value':!![]}),exports[a89_0x1ed4c4(0x129)]=exports['MAX_ZIP_SIZE']=void 0x0;const utils_1=require(a89_0x1ed4c4(0x151)),constants_1=require(a89_0x1ed4c4(0x149)),flosum_naming_utils_1=require('../../git/salesforce/utils/flosum-naming.utils'),adm_zip_1=__importDefault(require('adm-zip')),CHUNK_QUERY_SIZE=0x1f4;exports[a89_0x1ed4c4(0x131)]=0x2100000;function a89_0x1a2a(_0x5ed107,_0x52ff28){const _0x239417=a89_0x3f3e();return a89_0x1a2a=function(_0x2ddcb8,_0xd1f5d0){_0x2ddcb8=_0x2ddcb8-0x125;let _0x3f3eab=_0x239417[_0x2ddcb8];return _0x3f3eab;},a89_0x1a2a(_0x5ed107,_0x52ff28);}class ComponentsApi{static async[a89_0x1ed4c4(0x133)](_0x3140a2,_0x4d4683){const _0x3b23b3=a89_0x1ed4c4,_0x207f0d=[],_0x1c9505=(0x0,utils_1[_0x3b23b3(0x14a)])(_0x4d4683,CHUNK_QUERY_SIZE);for(const _0xbe789b of _0x1c9505){const _0x18f605=_0x3b23b3(0x136)+constants_1[_0x3b23b3(0x12d)]+_0x3b23b3(0x150)+constants_1['FLOSUM_NAMESPACE']+_0x3b23b3(0x13e)+constants_1[_0x3b23b3(0x12d)]+_0x3b23b3(0x150)+constants_1[_0x3b23b3(0x12d)]+_0x3b23b3(0x13a)+constants_1[_0x3b23b3(0x12d)]+_0x3b23b3(0x148)+('\x27'+_0xbe789b['join'](_0x3b23b3(0x12a))+'\x27')+')',{data:_0x5f07fa}=await _0x3140a2[_0x3b23b3(0x134)](_0x3b23b3(0x140)+constants_1['SALESFORCE_API_VERSION']+_0x3b23b3(0x139),{'params':{'q':_0x18f605}});_0x207f0d[_0x3b23b3(0x146)](..._0x5f07fa[_0x3b23b3(0x12c)]);}return _0x207f0d;}static['removeNamespacePrefix'](_0xcc6098){const _0x38a694=a89_0x1ed4c4,_0x2db4c9=_0xcc6098[_0x38a694(0x12b)](_0x117972=>{const _0x366d52=_0x38a694,_0x398446=(0x0,flosum_naming_utils_1['extractFieldsFromRecord'])(_0x117972,['Id',_0x366d52(0x128)]);return _0x398446[_0x366d52(0x128)]=(0x0,flosum_naming_utils_1[_0x366d52(0x130)])(_0x398446[_0x366d52(0x128)],['Component_Name__c',_0x366d52(0x14f)]),_0x398446;});return _0x2db4c9;}static async['splitZip'](_0x17f283,_0x1f8f23){const _0x15ec48=a89_0x1ed4c4;var _0x2532b2;const _0x5d431f=_0x17f283[_0x15ec48(0x143)]()[_0x15ec48(0x14c)](_0x2c8cba=>!_0x2c8cba[_0x15ec48(0x132)])['sort']((_0x4b98c1,_0x2bdf7b)=>_0x4b98c1['getData']()[_0x15ec48(0x144)]>_0x2bdf7b[_0x15ec48(0x12f)]()[_0x15ec48(0x144)]?-0x1:0x1),_0xff2125=new adm_zip_1[(_0x15ec48(0x14d))]();for(const {entryName:_0x20c11f}of _0x5d431f){const _0x1a6e0f=(_0x2532b2=_0x17f283[_0x15ec48(0x125)](_0x20c11f))===null||_0x2532b2===void 0x0?void 0x0:_0x2532b2[_0x15ec48(0x12f)]();_0xff2125[_0x15ec48(0x13b)](_0x20c11f,_0x1a6e0f),_0x17f283[_0x15ec48(0x138)](_0x20c11f);if(_0x1f8f23-_0xff2125['toBuffer']()[_0x15ec48(0x127)]('base64')[_0x15ec48(0x144)]<exports[_0x15ec48(0x131)])break;}return[_0x17f283,_0xff2125];}}exports['ComponentsApi']=ComponentsApi;