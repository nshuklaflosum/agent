const a363_0x14169c=a363_0x25ca;(function(_0x398d3e,_0x2e7f8d){const _0x8d65c2=a363_0x25ca,_0x4007a6=_0x398d3e();while(!![]){try{const _0x47af0f=-parseInt(_0x8d65c2(0xe3))/0x1+-parseInt(_0x8d65c2(0xda))/0x2+parseInt(_0x8d65c2(0xe0))/0x3*(parseInt(_0x8d65c2(0xef))/0x4)+parseInt(_0x8d65c2(0xe1))/0x5+parseInt(_0x8d65c2(0xe7))/0x6+-parseInt(_0x8d65c2(0x109))/0x7*(-parseInt(_0x8d65c2(0xf8))/0x8)+-parseInt(_0x8d65c2(0x105))/0x9*(parseInt(_0x8d65c2(0x100))/0xa);if(_0x47af0f===_0x2e7f8d)break;else _0x4007a6['push'](_0x4007a6['shift']());}catch(_0x1fd266){_0x4007a6['push'](_0x4007a6['shift']());}}}(a363_0x5e72,0x53dfc));const a363_0x18b346=(function(){let _0x7830b7=!![];return function(_0x58e01d,_0x41a18f){const _0x59c25a=_0x7830b7?function(){if(_0x41a18f){const _0x418c7a=_0x41a18f['apply'](_0x58e01d,arguments);return _0x41a18f=null,_0x418c7a;}}:function(){};return _0x7830b7=![],_0x59c25a;};}()),a363_0x3e6fc9=a363_0x18b346(this,function(){const _0x368701=a363_0x25ca;return a363_0x3e6fc9[_0x368701(0xe4)]()[_0x368701(0x10b)](_0x368701(0xf5))['toString']()['constructor'](a363_0x3e6fc9)['search'](_0x368701(0xf5));});a363_0x3e6fc9();function a363_0x5e72(){const _0x4a7a06=['status','log','_logger','QUEUEING','deleteVeevaObjectRecords','18mzkrKJ','777335HCaBgE','defineProperty','271382JjAWnd','toString','length','executeVQL','2337354zGvgUD','map','DELETE_RECORDS_LIMIT','Check\x20Retrieval\x20Status:\x20Not\x20Completed.\x20Next\x20check\x20after\x2010\x20seconds.','flat','\x20records','RUNNING','all','145076bUYfJV','Unknown\x20Job\x20status\x20:\x20\x27','createVeevaObjectRecords','QUEUED','errors','SUCCESS','(((.+)+)+)+$','Cannot\x20retrieve\x20job.\x20Job\x20status:\x20','VeevaError','223048NwyEew','VeevaJobStatus','data','CANCELLED','__esModule','sleep','responseStatus','JOB_STATUS_TIMEOUT','10580JckQkb','get','Deleting\x20','executeManyVQL','CREATE_RECORDS_LIMIT','2385kGKAyk','VeevaResponseStatus','\x20records.','push','91QJrADV','Creating\x20','search','../enums/status.enums','post','chunkArray','_connection','ERRORS_ENCOUNTERED','459586BeydPl'];a363_0x5e72=function(){return _0x4a7a06;};return a363_0x5e72();}'use strict';Object[a363_0x14169c(0xe2)](exports,a363_0x14169c(0xfc),{'value':!![]}),exports['VeevaService']=void 0x0;const utils_1=require('../../shared/utils'),status_enums_1=require(a363_0x14169c(0xd5)),veeva_error_1=require('../classes/errors/veeva-error');function a363_0x25ca(_0x3dd4ee,_0x4eacf4){const _0xb0c056=a363_0x5e72();return a363_0x25ca=function(_0x3e6fc9,_0x18b346){_0x3e6fc9=_0x3e6fc9-0xd5;let _0x5e7252=_0xb0c056[_0x3e6fc9];return _0x5e7252;},a363_0x25ca(_0x3dd4ee,_0x4eacf4);}class VeevaService{constructor({connection:_0x187dfa,logger:_0x19bc34}){const _0x5e2422=a363_0x14169c;this['_connection']=_0x187dfa,this[_0x5e2422(0xdd)]=_0x19bc34;}async[a363_0x14169c(0x103)](_0x56a7d3){const _0xed2bd3=a363_0x14169c,_0x59c1db=[];for(const _0x48adee of _0x56a7d3){_0x59c1db[_0xed2bd3(0x108)](this['executeVQL'](_0x48adee));}const _0x56d4ea=await Promise[_0xed2bd3(0xee)](_0x59c1db);return _0x56d4ea[_0xed2bd3(0xeb)]();}async[a363_0x14169c(0xe6)](_0x5e6236){const _0x343f43=a363_0x14169c,_0x187609=[];do{const _0x4fb7e6=await this[_0x343f43(0xd8)]['get'](_0x5e6236),_0x580c1f=_0x4fb7e6[_0x343f43(0xfa)];if(_0x580c1f[_0x343f43(0xfe)]===status_enums_1[_0x343f43(0x106)][_0x343f43(0xf4)]){const {responseDetails:{next_page:_0x35fdde},data:_0x290d2b}=_0x580c1f;_0x5e6236=_0x35fdde||null,_0x187609[_0x343f43(0x108)](..._0x290d2b);}else throw new veeva_error_1[(_0x343f43(0xf7))](_0x580c1f['errors']);}while(_0x5e6236);return _0x187609;}async[a363_0x14169c(0xf1)](_0x1f3ab1,_0x2e357e){const _0x3a66e1=a363_0x14169c,_0x569a9e=[],_0x26ec14=(0x0,utils_1[_0x3a66e1(0xd7)])(_0x2e357e,VeevaService[_0x3a66e1(0x104)]),_0x276a4f=_0x2e357e[_0x3a66e1(0xe5)];let _0x59853d=0x0;for(const _0x40ac2d of _0x26ec14){_0x59853d+=_0x40ac2d[_0x3a66e1(0xe5)],this[_0x3a66e1(0xdd)][_0x3a66e1(0xdc)](_0x3a66e1(0x10a)+_0x59853d+'/'+_0x276a4f+_0x3a66e1(0x107));const _0x2b90a3=await this[_0x3a66e1(0xd8)][_0x3a66e1(0xd6)](_0x1f3ab1,_0x40ac2d),_0x2a3005=_0x2b90a3[_0x3a66e1(0xfa)];if(_0x2a3005[_0x3a66e1(0xfe)]===status_enums_1['VeevaResponseStatus'][_0x3a66e1(0xf4)])for(const {responseStatus:_0xb6e18c,data:_0x4b42d4}of _0x2a3005[_0x3a66e1(0xfa)]){if(_0xb6e18c===status_enums_1[_0x3a66e1(0x106)]['SUCCESS'])_0x569a9e[_0x3a66e1(0x108)](_0x4b42d4['id']);else throw new veeva_error_1['VeevaError'](_0x2a3005[_0x3a66e1(0xf3)]);}else throw new veeva_error_1[(_0x3a66e1(0xf7))](_0x2a3005[_0x3a66e1(0xf3)]);}return _0x569a9e;}async[a363_0x14169c(0xdf)](_0x498c4e,_0x35a7ae){const _0x5b7985=a363_0x14169c,_0x20c6a2=_0x35a7ae[_0x5b7985(0xe8)](_0x4f3dc7=>({'id':_0x4f3dc7})),_0x2fb449=(0x0,utils_1[_0x5b7985(0xd7)])(_0x20c6a2,VeevaService[_0x5b7985(0xe9)]);let _0x2851fb=0x0;for(const _0x8be28c of _0x2fb449){_0x2851fb+=_0x8be28c[_0x5b7985(0xe5)],this['_logger']['log'](_0x5b7985(0x102)+_0x2851fb+'/'+_0x35a7ae[_0x5b7985(0xe5)]+_0x5b7985(0xec));const {data:_0x48ae30}=await this[_0x5b7985(0xd8)]['delete'](_0x498c4e,{'headers':{'Content-Type':'application/json'},'data':_0x8be28c});if(_0x48ae30[_0x5b7985(0xfe)]===status_enums_1[_0x5b7985(0x106)][_0x5b7985(0xf4)])for(const _0xfef583 of _0x48ae30[_0x5b7985(0xfa)]){const {responseStatus:_0x2bbc74,errors:_0x170cdf}=_0xfef583;if(_0x2bbc74!==status_enums_1[_0x5b7985(0x106)]['SUCCESS'])throw new veeva_error_1[(_0x5b7985(0xf7))](_0x170cdf);}else throw new veeva_error_1['VeevaError'](_0x48ae30[_0x5b7985(0xf3)]);}}async['getJobResult'](_0x20f5fc){const _0x4b2f7c=a363_0x14169c,_0x200eef=[];do{this[_0x4b2f7c(0xdd)][_0x4b2f7c(0xdc)](_0x4b2f7c(0xea)),await(0x0,utils_1[_0x4b2f7c(0xfd)])(VeevaService[_0x4b2f7c(0xff)]);const _0x48d8ea=[];for(const _0x2187bc of _0x20f5fc){const {data:_0x191ecf}=await this['_connection'][_0x4b2f7c(0x101)](_0x2187bc);if(_0x191ecf[_0x4b2f7c(0xfe)]===status_enums_1['VeevaResponseStatus'][_0x4b2f7c(0xf4)]){const {data:_0xbfe80e}=_0x191ecf;switch(_0xbfe80e[_0x4b2f7c(0xdb)]){case status_enums_1[_0x4b2f7c(0xf9)][_0x4b2f7c(0xf4)]:case status_enums_1[_0x4b2f7c(0xf9)][_0x4b2f7c(0xd9)]:_0x200eef[_0x4b2f7c(0x108)](_0xbfe80e);break;case status_enums_1[_0x4b2f7c(0xf9)][_0x4b2f7c(0xde)]:case status_enums_1[_0x4b2f7c(0xf9)][_0x4b2f7c(0xfb)]:case status_enums_1[_0x4b2f7c(0xf9)]['MISSED_SCHEDULE']:throw new Error(_0x4b2f7c(0xf6)+_0xbfe80e['status']);case status_enums_1['VeevaJobStatus'][_0x4b2f7c(0xf2)]:case status_enums_1[_0x4b2f7c(0xf9)][_0x4b2f7c(0xed)]:case status_enums_1[_0x4b2f7c(0xf9)]['SCHEDULED']:_0x48d8ea['push'](_0x2187bc);break;default:throw new Error(_0x4b2f7c(0xf0)+_0xbfe80e[_0x4b2f7c(0xdb)]+'\x27');}}else throw new veeva_error_1[(_0x4b2f7c(0xf7))](_0x191ecf[_0x4b2f7c(0xf3)]);}_0x20f5fc=_0x48d8ea;}while(_0x20f5fc[_0x4b2f7c(0xe5)]);return _0x200eef;}}exports['VeevaService']=VeevaService,VeevaService['JOB_STATUS_TIMEOUT']=0x2710,VeevaService['CREATE_RECORDS_LIMIT']=0x1f4,VeevaService['DELETE_RECORDS_LIMIT']=0x1f4;