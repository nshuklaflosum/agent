const a58_0x5caa7f=a58_0xc0e8;function a58_0x36ad(){const _0x3d19cd=['write','Logger\x20Job\x20State\x20wasn\x27t\x20init','start','stringify','setJobStatus','_jobState','search','defineProperty','updateObjectProcess','726369mdJwZW','FsUtils','1759496hkoAdI','1INvdtu','getJobState','fs/promises','jobStorePath','_jobId','failed','@flosum/utils','setJobError','JOB_LOG_STATE_FILENAME','utf-8','getTime','join','4366158CAKxRC','status','successful','name','__esModule','../../job-detail','FAILED','5mLLcnZ','apply','_isLoggerInit','COMPLETED','JobStatus','__importDefault','10uCNeXG','includes','LoggerJobState','12488TiMBrX','toString','QUEUED','initObjectStatistics','isExistsPath','isLoggerInit','getObjectState','5679yXmnaI','updateLoggerState','constructor','2588218qLgYZH','initJobState','parse','path','BaseLogger','Cannot\x20find\x20object\x20\x27','default','../../enums/logger.enums','(((.+)+)+)+$','readFile','8052485AEWwjs','../../../../../constants/job','filePath','setObjectStatus','jobState','_jobPath','ObjectStatus','15024394wHlcPw'];a58_0x36ad=function(){return _0x3d19cd;};return a58_0x36ad();}(function(_0x29fc2b,_0x5dc023){const _0x1d1a46=a58_0xc0e8,_0x5ce271=_0x29fc2b();while(!![]){try{const _0x5f4413=-parseInt(_0x1d1a46(0x10e))/0x1*(parseInt(_0x1d1a46(0xf0))/0x2)+parseInt(_0x1d1a46(0x10b))/0x3+-parseInt(_0x1d1a46(0x10d))/0x4+-parseInt(_0x1d1a46(0x121))/0x5*(-parseInt(_0x1d1a46(0x11a))/0x6)+parseInt(_0x1d1a46(0xfa))/0x7+parseInt(_0x1d1a46(0x12a))/0x8*(-parseInt(_0x1d1a46(0xed))/0x9)+parseInt(_0x1d1a46(0x127))/0xa*(parseInt(_0x1d1a46(0x101))/0xb);if(_0x5f4413===_0x5dc023)break;else _0x5ce271['push'](_0x5ce271['shift']());}catch(_0x18df55){_0x5ce271['push'](_0x5ce271['shift']());}}}(a58_0x36ad,0xbb44b));const a58_0x12b712=(function(){let _0x288533=!![];return function(_0x386ef8,_0x254278){const _0x59972a=_0x288533?function(){const _0x2970fc=a58_0xc0e8;if(_0x254278){const _0x2d13c4=_0x254278[_0x2970fc(0x122)](_0x386ef8,arguments);return _0x254278=null,_0x2d13c4;}}:function(){};return _0x288533=![],_0x59972a;};}()),a58_0x3c83d1=a58_0x12b712(this,function(){const _0x4996d2=a58_0xc0e8;return a58_0x3c83d1[_0x4996d2(0x12b)]()[_0x4996d2(0x108)](_0x4996d2(0xf8))[_0x4996d2(0x12b)]()[_0x4996d2(0xef)](a58_0x3c83d1)[_0x4996d2(0x108)](_0x4996d2(0xf8));});a58_0x3c83d1();'use strict';var __importDefault=this&&this[a58_0x5caa7f(0x126)]||function(_0x53ed95){return _0x53ed95&&_0x53ed95['__esModule']?_0x53ed95:{'default':_0x53ed95};};Object[a58_0x5caa7f(0x109)](exports,a58_0x5caa7f(0x11e),{'value':!![]}),exports[a58_0x5caa7f(0x129)]=void 0x0;function a58_0xc0e8(_0x219854,_0x73d16f){const _0x4f8599=a58_0x36ad();return a58_0xc0e8=function(_0x3c83d1,_0x12b712){_0x3c83d1=_0x3c83d1-0xec;let _0x36ad5d=_0x4f8599[_0x3c83d1];return _0x36ad5d;},a58_0xc0e8(_0x219854,_0x73d16f);}const path_1=__importDefault(require(a58_0x5caa7f(0xf3))),logger_enums_1=require(a58_0x5caa7f(0xf7)),base_logger_1=require('./base-logger'),promises_1=require(a58_0x5caa7f(0x110)),job_detail_1=require(a58_0x5caa7f(0x11f)),utils_1=require(a58_0x5caa7f(0x114)),job_1=require(a58_0x5caa7f(0xfb));class LoggerJobState extends base_logger_1[a58_0x5caa7f(0xf4)]{constructor(){const _0x26f0d9=a58_0x5caa7f;super(...arguments),this[_0x26f0d9(0x123)]=![];}get[a58_0x5caa7f(0x12f)](){const _0x358875=a58_0x5caa7f;return this[_0x358875(0x123)];}set[a58_0x5caa7f(0x12f)](_0x1074fb){const _0x41245b=a58_0x5caa7f;this[_0x41245b(0x123)]=_0x1074fb;}get[a58_0x5caa7f(0xfe)](){const _0x3775b1=a58_0x5caa7f;if(!this[_0x3775b1(0x12f)])throw new Error(_0x3775b1(0x103));return this[_0x3775b1(0x107)];}get[a58_0x5caa7f(0xfc)](){const _0x51bffa=a58_0x5caa7f;return path_1[_0x51bffa(0xf6)][_0x51bffa(0x119)](this[_0x51bffa(0xff)],job_1[_0x51bffa(0x116)]);}async['init'](_0x4935b2){const _0x115c65=a58_0x5caa7f;return this['_jobState']=await this[_0x115c65(0x10f)](),this['_jobState']['processed']=this[_0x115c65(0x12d)](_0x4935b2),await this['write'](),await this[_0x115c65(0x104)](),this[_0x115c65(0x12f)]=!![],this;}[a58_0x5caa7f(0xfd)](_0x594186,_0x429b29){const _0x2a76fa=a58_0x5caa7f;this['getObjectState'](_0x594186)[_0x2a76fa(0x11b)]=_0x429b29,this[_0x2a76fa(0xee)]();}[a58_0x5caa7f(0x106)](_0x204303){const _0xf2c467=a58_0x5caa7f;this[_0xf2c467(0xfe)][_0xf2c467(0x11b)]=_0x204303,[logger_enums_1['JobStatus'][_0xf2c467(0x120)],logger_enums_1[_0xf2c467(0x125)][_0xf2c467(0x124)]][_0xf2c467(0x128)](_0x204303)&&(this[_0xf2c467(0xfe)]['completedDate']=new Date()[_0xf2c467(0x118)]()),this['updateLoggerState']();}[a58_0x5caa7f(0x115)](_0x3855e1){const _0x30791c=a58_0x5caa7f;this[_0x30791c(0xfe)]['error']=_0x3855e1,this[_0x30791c(0xee)]();}[a58_0x5caa7f(0x10a)](_0x348686,_0x596470,_0x1b700a){const _0x5c0fb6=a58_0x5caa7f,_0x194907=this[_0x5c0fb6(0xec)](_0x348686);_0x194907[_0x5c0fb6(0x11c)]+=_0x596470,_0x194907[_0x5c0fb6(0x113)]+=_0x1b700a,this[_0x5c0fb6(0xfe)]['successful']+=_0x596470,this[_0x5c0fb6(0xfe)][_0x5c0fb6(0x113)]+=_0x1b700a,this[_0x5c0fb6(0xee)]();}[a58_0x5caa7f(0xec)](_0x11003a){const _0x417724=a58_0x5caa7f;var _0x166bc6;const _0x15edf9=(_0x166bc6=this[_0x417724(0xfe)]['processed'])===null||_0x166bc6===void 0x0?void 0x0:_0x166bc6['find'](_0x5b9566=>_0x5b9566[_0x417724(0x11d)]===_0x11003a);if(!_0x15edf9)throw new Error(_0x417724(0xf5)+_0x11003a+'\x27\x20in\x20statistic');return _0x15edf9;}async[a58_0x5caa7f(0x10f)](){const _0x54971e=a58_0x5caa7f;if(!await utils_1[_0x54971e(0x10c)][_0x54971e(0x12e)](this[_0x54971e(0xfc)]))return this[_0x54971e(0xf1)]();const _0x46f3a6=await(0x0,promises_1[_0x54971e(0xf9)])(job_detail_1[_0x54971e(0x111)]+'/'+job_1[_0x54971e(0x116)],{'encoding':_0x54971e(0x117)});return JSON[_0x54971e(0xf2)](_0x46f3a6);}[a58_0x5caa7f(0xf1)](){const _0x506fde=a58_0x5caa7f;return{'id':this[_0x506fde(0x112)],'status':logger_enums_1[_0x506fde(0x125)][_0x506fde(0x12c)],'processed':[],'createdDate':new Date()['getTime'](),'successful':0x0,'failed':0x0};}[a58_0x5caa7f(0x12d)](_0x426acb){const _0x3989da=a58_0x5caa7f;return _0x426acb['map'](_0x356c8e=>({'name':_0x356c8e,'status':logger_enums_1[_0x3989da(0x100)][_0x3989da(0x12c)],'failed':0x0,'successful':0x0}));}[a58_0x5caa7f(0x102)](){const _0x434480=a58_0x5caa7f;return(0x0,promises_1['writeFile'])(this[_0x434480(0xfc)],JSON[_0x434480(0x105)](this[_0x434480(0x107)]));}}exports[a58_0x5caa7f(0x129)]=LoggerJobState;