const a359_0x1cfd86=a359_0x1fa8;(function(_0x4baa0d,_0x1b8ef6){const _0x4a4305=a359_0x1fa8,_0x52ca13=_0x4baa0d();while(!![]){try{const _0x4aa8e7=parseInt(_0x4a4305(0x129))/0x1+parseInt(_0x4a4305(0xf4))/0x2+-parseInt(_0x4a4305(0x11e))/0x3+parseInt(_0x4a4305(0x110))/0x4*(-parseInt(_0x4a4305(0x106))/0x5)+parseInt(_0x4a4305(0x114))/0x6*(parseInt(_0x4a4305(0x107))/0x7)+parseInt(_0x4a4305(0xfd))/0x8+parseInt(_0x4a4305(0xf8))/0x9*(-parseInt(_0x4a4305(0x11f))/0xa);if(_0x4aa8e7===_0x1b8ef6)break;else _0x52ca13['push'](_0x52ca13['shift']());}catch(_0x1e01e6){_0x52ca13['push'](_0x52ca13['shift']());}}}(a359_0x2e67,0xa5e7a));const a359_0x1e0c90=(function(){let _0x4a0ef8=!![];return function(_0x34a002,_0x2ca89c){const _0x42afb1=_0x4a0ef8?function(){if(_0x2ca89c){const _0x26a611=_0x2ca89c['apply'](_0x34a002,arguments);return _0x2ca89c=null,_0x26a611;}}:function(){};return _0x4a0ef8=![],_0x42afb1;};}()),a359_0x380a9c=a359_0x1e0c90(this,function(){const _0x28a278=a359_0x1fa8;return a359_0x380a9c['toString']()[_0x28a278(0x116)](_0x28a278(0x126))[_0x28a278(0x124)]()['constructor'](a359_0x380a9c)[_0x28a278(0x116)](_0x28a278(0x126));});a359_0x380a9c();'use strict';function a359_0x1fa8(_0x346800,_0x23ea57){const _0x382b72=a359_0x2e67();return a359_0x1fa8=function(_0x380a9c,_0x1e0c90){_0x380a9c=_0x380a9c-0xf3;let _0x2e67d4=_0x382b72[_0x380a9c];return _0x2e67d4;},a359_0x1fa8(_0x346800,_0x23ea57);}Object[a359_0x1cfd86(0xfb)](exports,'__esModule',{'value':!![]}),exports[a359_0x1cfd86(0xff)]=void 0x0;function a359_0x2e67(){const _0x2bd90b=['Creating\x20','159044TqHVkz','QUEUED','VeevaError','post','2734590AohXfS','SUCCESS','search','application/json','executeManyVQL','data','status','\x20records.','DELETE_RECORDS_LIMIT','SCHEDULED','863565wepxfG','1862990ZxoJYR','RUNNING','all','Cannot\x20retrieve\x20job.\x20Job\x20status:\x20','map','toString','sleep','(((.+)+)+)+$','log','deleteVeevaObjectRecords','894360PNUHoS','errors','371758wviZRB','get','JOB_STATUS_TIMEOUT','../classes/errors/veeva-error','63zMfrnl','getJobResult','chunkArray','defineProperty','VeevaJobStatus','8746712HXQCYu','executeVQL','VeevaService','responseStatus','_logger','ERRORS_ENCOUNTERED','delete','../../shared/utils','MISSED_SCHEDULE','45aQgXES','7SMbRwE','../enums/status.enums','_connection','push','length','CREATE_RECORDS_LIMIT','VeevaResponseStatus','\x20records'];a359_0x2e67=function(){return _0x2bd90b;};return a359_0x2e67();}const utils_1=require(a359_0x1cfd86(0x104)),status_enums_1=require(a359_0x1cfd86(0x108)),veeva_error_1=require(a359_0x1cfd86(0xf7));class VeevaService{constructor({connection:_0x5180ca,logger:_0x5c3c91}){const _0x1aeb32=a359_0x1cfd86;this[_0x1aeb32(0x109)]=_0x5180ca,this['_logger']=_0x5c3c91;}async[a359_0x1cfd86(0x118)](_0x360040){const _0xd66457=a359_0x1cfd86,_0x10040b=[];for(const _0x4605c5 of _0x360040){_0x10040b[_0xd66457(0x10a)](this[_0xd66457(0xfe)](_0x4605c5));}const _0x5b247f=await Promise[_0xd66457(0x121)](_0x10040b);return _0x5b247f['flat']();}async[a359_0x1cfd86(0xfe)](_0x1a0e63){const _0x2958b4=a359_0x1cfd86,_0x552e4b=[];do{const _0x544077=await this[_0x2958b4(0x109)]['get'](_0x1a0e63),_0x2c636b=_0x544077[_0x2958b4(0x119)];if(_0x2c636b[_0x2958b4(0x100)]===status_enums_1['VeevaResponseStatus']['SUCCESS']){const {responseDetails:{next_page:_0x4ef349},data:_0x203394}=_0x2c636b;_0x1a0e63=_0x4ef349||null,_0x552e4b[_0x2958b4(0x10a)](..._0x203394);}else throw new veeva_error_1[(_0x2958b4(0x112))](_0x2c636b['errors']);}while(_0x1a0e63);return _0x552e4b;}async['createVeevaObjectRecords'](_0x109fe2,_0x36f3e6){const _0x5561fe=a359_0x1cfd86,_0x406184=[],_0x45e64a=(0x0,utils_1[_0x5561fe(0xfa)])(_0x36f3e6,VeevaService[_0x5561fe(0x10c)]),_0x534355=_0x36f3e6[_0x5561fe(0x10b)];let _0x1a8cb3=0x0;for(const _0x39191f of _0x45e64a){_0x1a8cb3+=_0x39191f[_0x5561fe(0x10b)],this[_0x5561fe(0x101)][_0x5561fe(0x127)](_0x5561fe(0x10f)+_0x1a8cb3+'/'+_0x534355+_0x5561fe(0x11b));const _0xd4bbeb=await this[_0x5561fe(0x109)][_0x5561fe(0x113)](_0x109fe2,_0x39191f),_0x5afb22=_0xd4bbeb[_0x5561fe(0x119)];if(_0x5afb22[_0x5561fe(0x100)]===status_enums_1[_0x5561fe(0x10d)][_0x5561fe(0x115)])for(const {responseStatus:_0xd98e81,data:_0x197f88}of _0x5afb22[_0x5561fe(0x119)]){if(_0xd98e81===status_enums_1['VeevaResponseStatus']['SUCCESS'])_0x406184[_0x5561fe(0x10a)](_0x197f88['id']);else throw new veeva_error_1[(_0x5561fe(0x112))](_0x5afb22[_0x5561fe(0xf3)]);}else throw new veeva_error_1[(_0x5561fe(0x112))](_0x5afb22[_0x5561fe(0xf3)]);}return _0x406184;}async[a359_0x1cfd86(0x128)](_0x4452e3,_0x374671){const _0x3de32b=a359_0x1cfd86,_0x4c43c6=_0x374671[_0x3de32b(0x123)](_0x34826d=>({'id':_0x34826d})),_0x183ecc=(0x0,utils_1[_0x3de32b(0xfa)])(_0x4c43c6,VeevaService[_0x3de32b(0x11c)]);let _0x5db597=0x0;for(const _0x3e48ac of _0x183ecc){_0x5db597+=_0x3e48ac[_0x3de32b(0x10b)],this[_0x3de32b(0x101)][_0x3de32b(0x127)]('Deleting\x20'+_0x5db597+'/'+_0x374671[_0x3de32b(0x10b)]+_0x3de32b(0x10e));const {data:_0x2edc20}=await this[_0x3de32b(0x109)][_0x3de32b(0x103)](_0x4452e3,{'headers':{'Content-Type':_0x3de32b(0x117)},'data':_0x3e48ac});if(_0x2edc20[_0x3de32b(0x100)]===status_enums_1[_0x3de32b(0x10d)][_0x3de32b(0x115)])for(const _0x2e4f83 of _0x2edc20[_0x3de32b(0x119)]){const {responseStatus:_0x422ece,errors:_0x4d75c4}=_0x2e4f83;if(_0x422ece!==status_enums_1[_0x3de32b(0x10d)][_0x3de32b(0x115)])throw new veeva_error_1[(_0x3de32b(0x112))](_0x4d75c4);}else throw new veeva_error_1['VeevaError'](_0x2edc20[_0x3de32b(0xf3)]);}}async[a359_0x1cfd86(0xf9)](_0x5a982b){const _0x437673=a359_0x1cfd86,_0x3ad26e=[];do{this['_logger'][_0x437673(0x127)]('Check\x20Retrieval\x20Status:\x20Not\x20Completed.\x20Next\x20check\x20after\x2010\x20seconds.'),await(0x0,utils_1[_0x437673(0x125)])(VeevaService['JOB_STATUS_TIMEOUT']);const _0x43095b=[];for(const _0x19d46a of _0x5a982b){const {data:_0x4415e7}=await this[_0x437673(0x109)][_0x437673(0xf5)](_0x19d46a);if(_0x4415e7[_0x437673(0x100)]===status_enums_1[_0x437673(0x10d)][_0x437673(0x115)]){const {data:_0x4b1fbb}=_0x4415e7;switch(_0x4b1fbb[_0x437673(0x11a)]){case status_enums_1['VeevaJobStatus'][_0x437673(0x115)]:case status_enums_1[_0x437673(0xfc)][_0x437673(0x102)]:_0x3ad26e[_0x437673(0x10a)](_0x4b1fbb);break;case status_enums_1[_0x437673(0xfc)]['QUEUEING']:case status_enums_1[_0x437673(0xfc)]['CANCELLED']:case status_enums_1['VeevaJobStatus'][_0x437673(0x105)]:throw new Error(_0x437673(0x122)+_0x4b1fbb['status']);case status_enums_1[_0x437673(0xfc)][_0x437673(0x111)]:case status_enums_1[_0x437673(0xfc)][_0x437673(0x120)]:case status_enums_1[_0x437673(0xfc)][_0x437673(0x11d)]:_0x43095b[_0x437673(0x10a)](_0x19d46a);break;default:throw new Error('Unknown\x20Job\x20status\x20:\x20\x27'+_0x4b1fbb[_0x437673(0x11a)]+'\x27');}}else throw new veeva_error_1[(_0x437673(0x112))](_0x4415e7[_0x437673(0xf3)]);}_0x5a982b=_0x43095b;}while(_0x5a982b[_0x437673(0x10b)]);return _0x3ad26e;}}exports[a359_0x1cfd86(0xff)]=VeevaService,VeevaService[a359_0x1cfd86(0xf6)]=0x2710,VeevaService[a359_0x1cfd86(0x10c)]=0x1f4,VeevaService[a359_0x1cfd86(0x11c)]=0x1f4;