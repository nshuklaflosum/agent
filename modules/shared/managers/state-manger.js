const a327_0x5a04f4=a327_0x1887;(function(_0x3bd03b,_0x40ab87){const _0xf106cb=a327_0x1887,_0xeb678b=_0x3bd03b();while(!![]){try{const _0x3a4958=-parseInt(_0xf106cb(0x99))/0x1+parseInt(_0xf106cb(0xb2))/0x2*(parseInt(_0xf106cb(0xa0))/0x3)+parseInt(_0xf106cb(0xb1))/0x4+-parseInt(_0xf106cb(0x95))/0x5+-parseInt(_0xf106cb(0xb9))/0x6+parseInt(_0xf106cb(0x9a))/0x7*(parseInt(_0xf106cb(0xab))/0x8)+parseInt(_0xf106cb(0x9c))/0x9*(-parseInt(_0xf106cb(0x9e))/0xa);if(_0x3a4958===_0x40ab87)break;else _0xeb678b['push'](_0xeb678b['shift']());}catch(_0x3144b2){_0xeb678b['push'](_0xeb678b['shift']());}}}(a327_0x2f52,0x932d0));const a327_0x357276=(function(){let _0x44bafb=!![];return function(_0x2b04b3,_0x4e3c61){const _0x1e0ba4=_0x44bafb?function(){const _0x286605=a327_0x1887;if(_0x4e3c61){const _0x563ea8=_0x4e3c61[_0x286605(0xa5)](_0x2b04b3,arguments);return _0x4e3c61=null,_0x563ea8;}}:function(){};return _0x44bafb=![],_0x1e0ba4;};}()),a327_0x164666=a327_0x357276(this,function(){const _0x4dffff=a327_0x1887;return a327_0x164666[_0x4dffff(0xc2)]()[_0x4dffff(0xc3)]('(((.+)+)+)+$')[_0x4dffff(0xc2)]()[_0x4dffff(0xbd)](a327_0x164666)[_0x4dffff(0xc3)](_0x4dffff(0xa1));});a327_0x164666();function a327_0x2f52(){const _0x433faa=['1326334TtaLlH','warnings','defineProperty','statePath','getJobStatePath','FAILED','Job\x20not\x20found.','2093916KDckgM','setError','getTime','createdDate','constructor','readFile','JobStatus','utf-8','QUEUED','toString','search','../enums/logger.enums','setCompleted','JOB_LOG_STATE_FILENAME','default','3608975DiSovG','__esModule','setInProgress','path','114044ExmPLe','7hnSqGr','parse','6981435tbSJLb','status','10zkuqTM','writeFile','3xtWSxi','(((.+)+)+)+$','IN_PROGRESS','@flosum/utils','push','apply','FsUtils','create','init','then','addWarning','7478080auAenY','../../../constants/job','update','jobState','COMPLETED','error','3861780qCVcQE'];a327_0x2f52=function(){return _0x433faa;};return a327_0x2f52();}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x24b5af){const _0x2e53af=a327_0x1887;return _0x24b5af&&_0x24b5af[_0x2e53af(0x96)]?_0x24b5af:{'default':_0x24b5af};};Object[a327_0x5a04f4(0xb4)](exports,a327_0x5a04f4(0x96),{'value':!![]});const logger_enums_1=require(a327_0x5a04f4(0xc4)),path_1=__importDefault(require(a327_0x5a04f4(0x98))),promises_1=require('fs/promises'),utils_1=require(a327_0x5a04f4(0xa3)),job_1=require(a327_0x5a04f4(0xac));function a327_0x1887(_0x5d7d4f,_0x4492b2){const _0x3f4a29=a327_0x2f52();return a327_0x1887=function(_0x164666,_0x357276){_0x164666=_0x164666-0x94;let _0x2f5201=_0x3f4a29[_0x164666];return _0x2f5201;},a327_0x1887(_0x5d7d4f,_0x4492b2);}class StateManager{constructor(_0x555061){this['statePath']=StateManager['getJobStatePath'](_0x555061);}static[a327_0x5a04f4(0xb6)](_0x1465fe){const _0x258ff0=a327_0x5a04f4;return path_1[_0x258ff0(0x94)]['join'](_0x1465fe,job_1[_0x258ff0(0xc6)]);}static async[a327_0x5a04f4(0xa7)](_0xc64570,_0x2a40d2){const _0x2bfb2f=a327_0x5a04f4,_0x24056b=StateManager[_0x2bfb2f(0xb6)](_0xc64570),_0x17030a={'id':_0x2a40d2,'status':logger_enums_1[_0x2bfb2f(0xbf)][_0x2bfb2f(0xc1)],'createdDate':null,'completedDate':null,'error':null,'warnings':[]};await(0x0,promises_1[_0x2bfb2f(0x9f)])(_0x24056b,JSON['stringify'](_0x17030a));}static async['getJobState'](_0x475483){const _0x3799a5=a327_0x5a04f4,_0x41cfcb=StateManager['getJobStatePath'](_0x475483);if(await utils_1[_0x3799a5(0xa6)]['isExistsPath'](_0x41cfcb))return(0x0,promises_1['readFile'])(_0x41cfcb,_0x3799a5(0xc0))[_0x3799a5(0xa9)](JSON[_0x3799a5(0x9b)]);throw new Error(_0x3799a5(0xb8));}async[a327_0x5a04f4(0xad)](){const _0x5c6be4=a327_0x5a04f4;await(0x0,promises_1['writeFile'])(this[_0x5c6be4(0xb5)],JSON['stringify'](this[_0x5c6be4(0xae)]));}async[a327_0x5a04f4(0xa8)](){const _0x463ac9=a327_0x5a04f4;return this['jobState']=await(0x0,promises_1[_0x463ac9(0xbe)])(this[_0x463ac9(0xb5)],_0x463ac9(0xc0))[_0x463ac9(0xa9)](JSON['parse']),this;}async[a327_0x5a04f4(0x97)](){const _0x550972=a327_0x5a04f4;this['jobState']['status']=logger_enums_1[_0x550972(0xbf)][_0x550972(0xa2)],this[_0x550972(0xae)][_0x550972(0xbc)]=new Date()[_0x550972(0xbb)](),await this[_0x550972(0xad)]();}async[a327_0x5a04f4(0xc5)](){const _0x5a33bb=a327_0x5a04f4;this[_0x5a33bb(0xae)][_0x5a33bb(0x9d)]=logger_enums_1[_0x5a33bb(0xbf)][_0x5a33bb(0xaf)],this[_0x5a33bb(0xae)]['completedDate']=new Date()[_0x5a33bb(0xbb)](),await this[_0x5a33bb(0xad)]();}async[a327_0x5a04f4(0xba)]({message:_0x2807e9}){const _0x44c272=a327_0x5a04f4;this[_0x44c272(0xae)][_0x44c272(0x9d)]=logger_enums_1[_0x44c272(0xbf)][_0x44c272(0xb7)],this['jobState']['completedDate']=new Date()['getTime'](),this['jobState'][_0x44c272(0xb0)]=_0x2807e9,await this['update']();}[a327_0x5a04f4(0xaa)](_0x2e93e7){const _0x1df60e=a327_0x5a04f4;return this[_0x1df60e(0xae)][_0x1df60e(0xb3)][_0x1df60e(0xa4)](_0x2e93e7),this[_0x1df60e(0xad)]();}}exports[a327_0x5a04f4(0x94)]=StateManager;