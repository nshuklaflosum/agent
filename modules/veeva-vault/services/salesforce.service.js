const a377_0x317a7b=a377_0x24fb;(function(_0x1a86fc,_0x21ed80){const _0x3ade71=a377_0x24fb,_0x575490=_0x1a86fc();while(!![]){try{const _0xc66042=-parseInt(_0x3ade71(0xb0))/0x1*(parseInt(_0x3ade71(0xba))/0x2)+-parseInt(_0x3ade71(0xab))/0x3+parseInt(_0x3ade71(0xb3))/0x4+parseInt(_0x3ade71(0xaf))/0x5+-parseInt(_0x3ade71(0xbe))/0x6*(parseInt(_0x3ade71(0xb1))/0x7)+-parseInt(_0x3ade71(0xb2))/0x8+parseInt(_0x3ade71(0xb8))/0x9;if(_0xc66042===_0x21ed80)break;else _0x575490['push'](_0x575490['shift']());}catch(_0x1876b6){_0x575490['push'](_0x575490['shift']());}}}(a377_0x56d4,0x7ae9a));const a377_0x3baacf=(function(){let _0x59ffc1=!![];return function(_0x36b7e7,_0x8c007c){const _0x381bf6=_0x59ffc1?function(){const _0x430d00=a377_0x24fb;if(_0x8c007c){const _0x120171=_0x8c007c[_0x430d00(0xaa)](_0x36b7e7,arguments);return _0x8c007c=null,_0x120171;}}:function(){};return _0x59ffc1=![],_0x381bf6;};}()),a377_0x178442=a377_0x3baacf(this,function(){const _0x342010=a377_0x24fb;return a377_0x178442[_0x342010(0xb5)]()[_0x342010(0xb6)](_0x342010(0xbc))['toString']()[_0x342010(0xb7)](a377_0x178442)['search'](_0x342010(0xbc));});a377_0x178442();'use strict';function a377_0x24fb(_0x7447d2,_0x2519a0){const _0x40358f=a377_0x56d4();return a377_0x24fb=function(_0x178442,_0x3baacf){_0x178442=_0x178442-0xa8;let _0x56d401=_0x40358f[_0x178442];return _0x56d401;},a377_0x24fb(_0x7447d2,_0x2519a0);}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['SalesforceService']=void 0x0;function a377_0x56d4(){const _0x4f5d11=['constructor','7260210JxCcOG','map','19026YVKDOz','_connection','(((.+)+)+)+$','get','70842HznGSI','post','nextRecordsUrl','INSERT_RECORDS_LIMIT','data','chunkArray','apply','312393vsyjoQ','records','push','../../shared/utils','2942125srkRCj','68epdniS','14ePrKHZ','1826088wmmUHL','444900mNtnJs','SalesforceService','toString','search'];a377_0x56d4=function(){return _0x4f5d11;};return a377_0x56d4();}const utils_1=require(a377_0x317a7b(0xae)),flosum_constants_1=require('../constants/flosum.constants');class SalesforceService{constructor({connection:_0x2a530b}){const _0x5e2244=a377_0x317a7b;this[_0x5e2244(0xbb)]=_0x2a530b;}async['insertMultipleRecords'](_0x1cc9f2,_0x2012a0){const _0x431d4e=a377_0x317a7b,_0x56d413=[],_0x156eb8=_0x2012a0[_0x431d4e(0xb9)](_0x541b4b=>({'attributes':{'type':_0x1cc9f2},..._0x541b4b})),_0x299c47=(0x0,utils_1[_0x431d4e(0xa9)])(_0x156eb8,SalesforceService[_0x431d4e(0xc1)]);for(const _0x5a056b of _0x299c47){const {data:_0x27deb9}=await this[_0x431d4e(0xbb)][_0x431d4e(0xbf)](flosum_constants_1['FlosumConstants']['ENDPOINT_INSERT_MULTIPLE_RECORDS'],{'allOrNone':!![],'records':_0x5a056b});_0x56d413[_0x431d4e(0xad)](..._0x27deb9);}return _0x56d413;}async['retrieveRecords'](_0x5d9a69){const _0x54e731=a377_0x317a7b,_0x52c9ff=[];let _0x3f2f37,_0x55ddcc;do{let _0x436b12;!_0x3f2f37?_0x436b12=await this[_0x54e731(0xbb)][_0x54e731(0xbd)](flosum_constants_1['FlosumConstants']['ENDPOINT_QUERY'],{'params':{'q':_0x5d9a69}}):_0x436b12=await this[_0x54e731(0xbb)][_0x54e731(0xbd)](_0x3f2f37),_0x52c9ff['push'](..._0x436b12[_0x54e731(0xa8)][_0x54e731(0xac)]),_0x3f2f37=_0x436b12[_0x54e731(0xa8)][_0x54e731(0xc0)],_0x55ddcc=_0x436b12[_0x54e731(0xa8)]['done'];}while(!_0x55ddcc);return _0x52c9ff;}}exports[a377_0x317a7b(0xb4)]=SalesforceService,SalesforceService[a377_0x317a7b(0xc1)]=0xc8;