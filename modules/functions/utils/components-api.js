const a90_0x1e4e20=a90_0x44e6;(function(_0x149821,_0x16a4a0){const _0x1d7f61=a90_0x44e6,_0x576f9e=_0x149821();while(!![]){try{const _0x476ec5=parseInt(_0x1d7f61(0x122))/0x1+-parseInt(_0x1d7f61(0x112))/0x2*(parseInt(_0x1d7f61(0x11c))/0x3)+parseInt(_0x1d7f61(0x104))/0x4+-parseInt(_0x1d7f61(0x101))/0x5*(-parseInt(_0x1d7f61(0x113))/0x6)+parseInt(_0x1d7f61(0x10a))/0x7+parseInt(_0x1d7f61(0xff))/0x8+parseInt(_0x1d7f61(0x105))/0x9*(-parseInt(_0x1d7f61(0x11f))/0xa);if(_0x476ec5===_0x16a4a0)break;else _0x576f9e['push'](_0x576f9e['shift']());}catch(_0x36e056){_0x576f9e['push'](_0x576f9e['shift']());}}}(a90_0x3c40,0xd4dfb));const a90_0x1a3e28=(function(){let _0x3846c3=!![];return function(_0x5afeb1,_0x264021){const _0x55410d=_0x3846c3?function(){const _0x3384fd=a90_0x44e6;if(_0x264021){const _0x1730ec=_0x264021[_0x3384fd(0x11e)](_0x5afeb1,arguments);return _0x264021=null,_0x1730ec;}}:function(){};return _0x3846c3=![],_0x55410d;};}()),a90_0x400a53=a90_0x1a3e28(this,function(){const _0x2e2e2c=a90_0x44e6;return a90_0x400a53[_0x2e2e2c(0x106)]()['search'](_0x2e2e2c(0x10f))[_0x2e2e2c(0x106)]()['constructor'](a90_0x400a53)[_0x2e2e2c(0x117)]('(((.+)+)+)+$');});function a90_0x44e6(_0x481869,_0x5713db){const _0x30bd55=a90_0x3c40();return a90_0x44e6=function(_0x400a53,_0x1a3e28){_0x400a53=_0x400a53-0xfd;let _0x3c409a=_0x30bd55[_0x400a53];return _0x3c409a;},a90_0x44e6(_0x481869,_0x5713db);}a90_0x400a53();'use strict';function a90_0x3c40(){const _0x29d721=['base64','4271664CJBFnY','Component_History__c\x0a\x20\x20\x20\x20\x20\x20WHERE\x20Id\x20IN\x20(','45oFQree','defineProperty','splitZip','5991684fHECnM','1913733xAhBFG','toString','__esModule','removeNamespacePrefix','addFile','10205601sggETL','get','fetchComponentsDetailsByComponentsHistory','isDirectory','records','(((.+)+)+)+$','Component_Name__c,\x20','MAX_ZIP_SIZE','16rTUhoF','1037598CVTcpI','length','getData','getEntries','search','Component_Type__c\x0a\x20\x20\x20\x20\x20\x20FROM\x20','ComponentsApi','../../shared/utils','map','605118fjTJyX','Component__r.','apply','130QuqTqW','Component__r','FLOSUM_NAMESPACE','203641FpGWJo','sort','join','/services/data/','push','filter','extractFieldsFromRecord'];a90_0x3c40=function(){return _0x29d721;};return a90_0x3c40();}var __importDefault=this&&this['__importDefault']||function(_0x3e542e){const _0x3322fd=a90_0x44e6;return _0x3e542e&&_0x3e542e[_0x3322fd(0x107)]?_0x3e542e:{'default':_0x3e542e};};Object[a90_0x1e4e20(0x102)](exports,a90_0x1e4e20(0x107),{'value':!![]}),exports[a90_0x1e4e20(0x119)]=exports['MAX_ZIP_SIZE']=void 0x0;const utils_1=require(a90_0x1e4e20(0x11a)),constants_1=require('../../../constants'),flosum_naming_utils_1=require('../../git/salesforce/utils/flosum-naming.utils'),adm_zip_1=__importDefault(require('adm-zip')),CHUNK_QUERY_SIZE=0x1f4;exports[a90_0x1e4e20(0x111)]=0x2100000;class ComponentsApi{static async[a90_0x1e4e20(0x10c)](_0x29401e,_0x23d022){const _0x2c6fa1=a90_0x1e4e20,_0x2bf93b=[],_0x5bf6a3=(0x0,utils_1['chunkArray'])(_0x23d022,CHUNK_QUERY_SIZE);for(const _0x5168b2 of _0x5bf6a3){const _0x5e76bf='\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20'+constants_1[_0x2c6fa1(0x121)]+_0x2c6fa1(0x11d)+constants_1[_0x2c6fa1(0x121)]+_0x2c6fa1(0x110)+constants_1['FLOSUM_NAMESPACE']+_0x2c6fa1(0x11d)+constants_1[_0x2c6fa1(0x121)]+_0x2c6fa1(0x118)+constants_1['FLOSUM_NAMESPACE']+_0x2c6fa1(0x100)+('\x27'+_0x5168b2[_0x2c6fa1(0x124)]('\x27,\x27')+'\x27')+')',{data:_0x552141}=await _0x29401e[_0x2c6fa1(0x10b)](_0x2c6fa1(0x125)+constants_1['SALESFORCE_API_VERSION']+'/query/',{'params':{'q':_0x5e76bf}});_0x2bf93b[_0x2c6fa1(0x126)](..._0x552141[_0x2c6fa1(0x10e)]);}return _0x2bf93b;}static[a90_0x1e4e20(0x108)](_0x45a859){const _0x1c213c=a90_0x1e4e20,_0x554f66=_0x45a859[_0x1c213c(0x11b)](_0x586c93=>{const _0x5c8b4d=_0x1c213c,_0x3b4c25=(0x0,flosum_naming_utils_1['extractFieldsFromRecord'])(_0x586c93,['Id',_0x5c8b4d(0x120)]);return _0x3b4c25[_0x5c8b4d(0x120)]=(0x0,flosum_naming_utils_1[_0x5c8b4d(0xfd)])(_0x3b4c25[_0x5c8b4d(0x120)],['Component_Name__c','Component_Type__c']),_0x3b4c25;});return _0x554f66;}static async[a90_0x1e4e20(0x103)](_0x54e627,_0x5e8e93){const _0x118320=a90_0x1e4e20;var _0x4b4c08;const _0x3a1e2d=_0x54e627[_0x118320(0x116)]()[_0x118320(0x127)](_0x583ceb=>!_0x583ceb[_0x118320(0x10d)])[_0x118320(0x123)]((_0x27a4f5,_0x232690)=>_0x27a4f5[_0x118320(0x115)]()[_0x118320(0x114)]>_0x232690[_0x118320(0x115)]()[_0x118320(0x114)]?-0x1:0x1),_0x37c1ed=new adm_zip_1['default']();for(const {entryName:_0x555607}of _0x3a1e2d){const _0x28b533=(_0x4b4c08=_0x54e627['getEntry'](_0x555607))===null||_0x4b4c08===void 0x0?void 0x0:_0x4b4c08[_0x118320(0x115)]();_0x37c1ed[_0x118320(0x109)](_0x555607,_0x28b533),_0x54e627['deleteFile'](_0x555607);if(_0x5e8e93-_0x37c1ed['toBuffer']()[_0x118320(0x106)](_0x118320(0xfe))[_0x118320(0x114)]<exports['MAX_ZIP_SIZE'])break;}return[_0x54e627,_0x37c1ed];}}exports[a90_0x1e4e20(0x119)]=ComponentsApi;