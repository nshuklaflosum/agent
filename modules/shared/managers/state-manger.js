const a283_0x32699f=a283_0x3232;(function(_0x2aa8df,_0x47a3dc){const _0x3c2b6d=a283_0x3232,_0xc6ea69=_0x2aa8df();while(!![]){try{const _0x34a0a9=parseInt(_0x3c2b6d(0xd2))/0x1+parseInt(_0x3c2b6d(0xe4))/0x2+-parseInt(_0x3c2b6d(0xdf))/0x3*(parseInt(_0x3c2b6d(0xf0))/0x4)+-parseInt(_0x3c2b6d(0xfd))/0x5+-parseInt(_0x3c2b6d(0xf9))/0x6*(-parseInt(_0x3c2b6d(0xf2))/0x7)+parseInt(_0x3c2b6d(0xdc))/0x8*(parseInt(_0x3c2b6d(0x101))/0x9)+parseInt(_0x3c2b6d(0xf4))/0xa*(parseInt(_0x3c2b6d(0xf5))/0xb);if(_0x34a0a9===_0x47a3dc)break;else _0xc6ea69['push'](_0xc6ea69['shift']());}catch(_0x43d808){_0xc6ea69['push'](_0xc6ea69['shift']());}}}(a283_0x579e,0xd61b4));const a283_0x561e8b=(function(){let _0x48f702=!![];return function(_0x5b3908,_0x5036e3){const _0x1c569b=_0x48f702?function(){const _0x1f2884=a283_0x3232;if(_0x5036e3){const _0x12f6fc=_0x5036e3[_0x1f2884(0xf1)](_0x5b3908,arguments);return _0x5036e3=null,_0x12f6fc;}}:function(){};return _0x48f702=![],_0x1c569b;};}()),a283_0x3e125f=a283_0x561e8b(this,function(){const _0x23b71d=a283_0x3232;return a283_0x3e125f['toString']()[_0x23b71d(0xfc)](_0x23b71d(0xee))['toString']()[_0x23b71d(0xe3)](a283_0x3e125f)[_0x23b71d(0xfc)]('(((.+)+)+)+$');});function a283_0x579e(){const _0x1ef77d=['JobStatus','stringify','getJobState','893194JXbmOE','join','create','setInProgress','__esModule','path','../../../constants/job','jobState','parse','../enums/logger.enums','30016gJFAZI','IN_PROGRESS','QUEUED','141HnulEe','warnings','defineProperty','setError','constructor','75144iVhIQZ','__importDefault','JOB_LOG_STATE_FILENAME','fs/promises','statePath','update','push','getJobStatePath','Job\x20not\x20found.','error','(((.+)+)+)+$','FsUtils','111484laSvim','apply','434nXxNMT','getTime','3338630wqymvK','11vvSnqX','default','writeFile','createdDate','135084aldWdC','then','status','search','4412740NcPCeN','FAILED','utf-8','COMPLETED','981CSTjWn','setCompleted'];a283_0x579e=function(){return _0x1ef77d;};return a283_0x579e();}a283_0x3e125f();'use strict';var __importDefault=this&&this[a283_0x32699f(0xe5)]||function(_0x42b769){const _0x1ec27a=a283_0x32699f;return _0x42b769&&_0x42b769[_0x1ec27a(0xd6)]?_0x42b769:{'default':_0x42b769};};Object[a283_0x32699f(0xe1)](exports,a283_0x32699f(0xd6),{'value':!![]});const logger_enums_1=require(a283_0x32699f(0xdb)),path_1=__importDefault(require(a283_0x32699f(0xd7))),promises_1=require(a283_0x32699f(0xe7)),utils_1=require('@flosum/utils'),job_1=require(a283_0x32699f(0xd8));class StateManager{constructor(_0x4be553){const _0x14a951=a283_0x32699f;this[_0x14a951(0xe8)]=StateManager[_0x14a951(0xeb)](_0x4be553);}static[a283_0x32699f(0xeb)](_0x50801a){const _0x221e5d=a283_0x32699f;return path_1[_0x221e5d(0xf6)][_0x221e5d(0xd3)](_0x50801a,job_1[_0x221e5d(0xe6)]);}static async[a283_0x32699f(0xd4)](_0x5f1dc8,_0x18289e){const _0x4e87b6=a283_0x32699f,_0x193c8b=StateManager['getJobStatePath'](_0x5f1dc8),_0x54a390={'id':_0x18289e,'status':logger_enums_1[_0x4e87b6(0x103)][_0x4e87b6(0xde)],'createdDate':null,'completedDate':null,'error':null,'warnings':[]};await(0x0,promises_1[_0x4e87b6(0xf7)])(_0x193c8b,JSON[_0x4e87b6(0xd0)](_0x54a390));}static async[a283_0x32699f(0xd1)](_0x756c82){const _0x4cd8ed=a283_0x32699f,_0x3d8765=StateManager[_0x4cd8ed(0xeb)](_0x756c82);if(await utils_1[_0x4cd8ed(0xef)]['isExistsPath'](_0x3d8765))return(0x0,promises_1['readFile'])(_0x3d8765,_0x4cd8ed(0xff))[_0x4cd8ed(0xfa)](JSON[_0x4cd8ed(0xda)]);throw new Error(_0x4cd8ed(0xec));}async[a283_0x32699f(0xe9)](){const _0x4c9d58=a283_0x32699f;await(0x0,promises_1[_0x4c9d58(0xf7)])(this[_0x4c9d58(0xe8)],JSON[_0x4c9d58(0xd0)](this[_0x4c9d58(0xd9)]));}async['init'](){const _0x4ae0cf=a283_0x32699f;return this['jobState']=await(0x0,promises_1['readFile'])(this[_0x4ae0cf(0xe8)],_0x4ae0cf(0xff))['then'](JSON[_0x4ae0cf(0xda)]),this;}async[a283_0x32699f(0xd5)](){const _0x2bdf69=a283_0x32699f;this[_0x2bdf69(0xd9)]['status']=logger_enums_1[_0x2bdf69(0x103)][_0x2bdf69(0xdd)],this[_0x2bdf69(0xd9)][_0x2bdf69(0xf8)]=new Date()['getTime'](),await this[_0x2bdf69(0xe9)]();}async[a283_0x32699f(0x102)](){const _0x53c7d2=a283_0x32699f;this['jobState'][_0x53c7d2(0xfb)]=logger_enums_1['JobStatus'][_0x53c7d2(0x100)],this[_0x53c7d2(0xd9)]['completedDate']=new Date()[_0x53c7d2(0xf3)](),await this[_0x53c7d2(0xe9)]();}async[a283_0x32699f(0xe2)]({message:_0x5e4454}){const _0x576f25=a283_0x32699f;this[_0x576f25(0xd9)]['status']=logger_enums_1[_0x576f25(0x103)][_0x576f25(0xfe)],this[_0x576f25(0xd9)]['completedDate']=new Date()[_0x576f25(0xf3)](),this['jobState'][_0x576f25(0xed)]=_0x5e4454,await this[_0x576f25(0xe9)]();}['addWarning'](_0x1177ef){const _0x5430cd=a283_0x32699f;return this[_0x5430cd(0xd9)][_0x5430cd(0xe0)][_0x5430cd(0xea)](_0x1177ef),this[_0x5430cd(0xe9)]();}}function a283_0x3232(_0xbc47a3,_0x3394cc){const _0x386935=a283_0x579e();return a283_0x3232=function(_0x3e125f,_0x561e8b){_0x3e125f=_0x3e125f-0xd0;let _0x579e27=_0x386935[_0x3e125f];return _0x579e27;},a283_0x3232(_0xbc47a3,_0x3394cc);}exports[a283_0x32699f(0xf6)]=StateManager;