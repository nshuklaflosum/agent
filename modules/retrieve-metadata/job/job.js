function a275_0x267a(){const _0x5af970=['defineProperty','__esModule','message','jobId','724746fophUP','./classes/logger','Retrieve\x20metadata\x20job\x20has\x20been\x20failed','Job','Retrieve\x20metadata\x20job\x20has\x20been\x20completed','5hcqLSC','slice','default','1568108KvSNtc','12523850OfwuDD','8958418KXjfdG','search','65007dCkqRB','2masHVY','../../shared/managers/state-manger','toString','then','Logger','error','catch','jobStorePath','argv','minimist','16ZUkshw','336964XceRxA','execute','1779504DdqyQA','setError','exit','log'];a275_0x267a=function(){return _0x5af970;};return a275_0x267a();}const a275_0x1a9a94=a275_0x5737;(function(_0x37812a,_0x3f72c8){const _0x5908cd=a275_0x5737,_0x5152e2=_0x37812a();while(!![]){try{const _0x3b6f15=-parseInt(_0x5908cd(0x10a))/0x1*(-parseInt(_0x5908cd(0x121))/0x2)+parseInt(_0x5908cd(0x10c))/0x3+-parseInt(_0x5908cd(0x11c))/0x4*(parseInt(_0x5908cd(0x119))/0x5)+parseInt(_0x5908cd(0x114))/0x6+-parseInt(_0x5908cd(0x11e))/0x7+-parseInt(_0x5908cd(0x109))/0x8*(-parseInt(_0x5908cd(0x120))/0x9)+parseInt(_0x5908cd(0x11d))/0xa;if(_0x3b6f15===_0x3f72c8)break;else _0x5152e2['push'](_0x5152e2['shift']());}catch(_0x257aaf){_0x5152e2['push'](_0x5152e2['shift']());}}}(a275_0x267a,0x9db41));const a275_0x10fd55=(function(){let _0x1470be=!![];return function(_0x2a43a9,_0x1063bd){const _0x5e5034=_0x1470be?function(){if(_0x1063bd){const _0x282abd=_0x1063bd['apply'](_0x2a43a9,arguments);return _0x1063bd=null,_0x282abd;}}:function(){};return _0x1470be=![],_0x5e5034;};}()),a275_0x1d79e1=a275_0x10fd55(this,function(){const _0x38dc93=a275_0x5737;return a275_0x1d79e1['toString']()[_0x38dc93(0x11f)]('(((.+)+)+)+$')[_0x38dc93(0x123)]()['constructor'](a275_0x1d79e1)['search']('(((.+)+)+)+$');});a275_0x1d79e1();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x259e58){const _0x46089b=a275_0x5737;return _0x259e58&&_0x259e58[_0x46089b(0x111)]?_0x259e58:{'default':_0x259e58};};Object[a275_0x1a9a94(0x110)](exports,a275_0x1a9a94(0x111),{'value':!![]}),exports[a275_0x1a9a94(0x117)]=void 0x0;const minimist_1=__importDefault(require(a275_0x1a9a94(0x108))),state_manger_1=__importDefault(require(a275_0x1a9a94(0x122))),core_1=require('../../../core'),logger_1=__importDefault(require(a275_0x1a9a94(0x115))),retrieve_metadata_1=__importDefault(require('./classes/retrieve-metadata'));function a275_0x5737(_0x1ce8bb,_0x12489e){const _0x36110=a275_0x267a();return a275_0x5737=function(_0x1d79e1,_0x10fd55){_0x1d79e1=_0x1d79e1-0x104;let _0x267a65=_0x36110[_0x1d79e1];return _0x267a65;},a275_0x5737(_0x1ce8bb,_0x12489e);}class Job{constructor(){const _0x41429f=a275_0x1a9a94,{jobId:_0x1b2d38,jobStorePath:_0x471f46}=(0x0,minimist_1[_0x41429f(0x11b)])(process[_0x41429f(0x107)][_0x41429f(0x11a)](0x2));this[_0x41429f(0x106)]=_0x471f46,this[_0x41429f(0x113)]=_0x1b2d38;}async[a275_0x1a9a94(0x10b)](){const _0x17a035=a275_0x1a9a94,_0x4a469a=new core_1[(_0x17a035(0x125))](this[_0x17a035(0x113)]),_0x27705b=new logger_1[(_0x17a035(0x11b))](this[_0x17a035(0x113)],_0x4a469a),_0x25a04f=await new state_manger_1[(_0x17a035(0x11b))](this[_0x17a035(0x106)])['init']();await _0x27705b['log']('Retrieve\x20metadata\x20job\x20has\x20been\x20started');try{await _0x25a04f['setInProgress'](),await new retrieve_metadata_1['default'](this[_0x17a035(0x106)],_0x27705b,_0x25a04f)['execute'](),await _0x25a04f['setCompleted'](),await _0x27705b[_0x17a035(0x10f)](_0x17a035(0x118));}catch(_0x4a242e){await _0x25a04f[_0x17a035(0x10d)](_0x4a242e),await _0x27705b[_0x17a035(0x104)](_0x17a035(0x116)),await _0x27705b[_0x17a035(0x104)](_0x4a242e[_0x17a035(0x112)]);}}}exports[a275_0x1a9a94(0x117)]=Job,new Job()[a275_0x1a9a94(0x10b)]()[a275_0x1a9a94(0x124)](()=>process['exit'](0x0))[a275_0x1a9a94(0x105)](()=>process[a275_0x1a9a94(0x10e)](0x1));