function a142_0x1c12(_0x87539d,_0x515fcc){const _0x5b0491=a142_0x3be7();return a142_0x1c12=function(_0xbcf874,_0x4a3335){_0xbcf874=_0xbcf874-0x1a5;let _0x3be7a2=_0x5b0491[_0xbcf874];return _0x3be7a2;},a142_0x1c12(_0x87539d,_0x515fcc);}const a142_0x40aa5c=a142_0x1c12;function a142_0x3be7(){const _0x295876=['nothing\x20to\x20commit','commit','uniqueId','__esModule','status','Git','GitUtils','sleep','toString','MAX_GIT_STATUS_CHECK','(((.+)+)+)+$','add','1737788fdHYtr','search','constructor','48945xOCiIs','checkout','../../internal/git.internal','default','commitAndPush','getCurrentHash','describeCommit','dir','422432OYTddM','catch','name','Shell','setCredentials','GIT_STATUS_CHECK_INTERVAL','762zRGyZQ','9hNGKFL','shortid','cd\x20','message','26250HWsLwk','17064256yNagvW','__importDefault','5289670jdOCWj','git','49XQwiaa','66aoJzUQ','remote','2168640xRzaKh'];a142_0x3be7=function(){return _0x295876;};return a142_0x3be7();}(function(_0xf55b25,_0x31c4c8){const _0x4fce46=a142_0x1c12,_0x165eef=_0xf55b25();while(!![]){try{const _0x4697b3=-parseInt(_0x4fce46(0x1c0))/0x1+parseInt(_0x4fce46(0x1ab))/0x2*(parseInt(_0x4fce46(0x1b1))/0x3)+parseInt(_0x4fce46(0x1b3))/0x4+parseInt(_0x4fce46(0x1c3))/0x5*(parseInt(_0x4fce46(0x1a6))/0x6)+-parseInt(_0x4fce46(0x1b0))/0x7*(parseInt(_0x4fce46(0x1cb))/0x8)+-parseInt(_0x4fce46(0x1a7))/0x9*(parseInt(_0x4fce46(0x1ae))/0xa)+parseInt(_0x4fce46(0x1ac))/0xb;if(_0x4697b3===_0x31c4c8)break;else _0x165eef['push'](_0x165eef['shift']());}catch(_0x1094af){_0x165eef['push'](_0x165eef['shift']());}}}(a142_0x3be7,0xf1762));const a142_0x4a3335=(function(){let _0x370896=!![];return function(_0x197e0e,_0x11eb8b){const _0x440f64=_0x370896?function(){if(_0x11eb8b){const _0x17d0cb=_0x11eb8b['apply'](_0x197e0e,arguments);return _0x11eb8b=null,_0x17d0cb;}}:function(){};return _0x370896=![],_0x440f64;};}()),a142_0xbcf874=a142_0x4a3335(this,function(){const _0x3cbe74=a142_0x1c12;return a142_0xbcf874[_0x3cbe74(0x1bc)]()[_0x3cbe74(0x1c1)](_0x3cbe74(0x1be))['toString']()[_0x3cbe74(0x1c2)](a142_0xbcf874)[_0x3cbe74(0x1c1)]('(((.+)+)+)+$');});a142_0xbcf874();'use strict';var __importDefault=this&&this[a142_0x40aa5c(0x1ad)]||function(_0x565e38){const _0x55574c=a142_0x40aa5c;return _0x565e38&&_0x565e38[_0x55574c(0x1b7)]?_0x565e38:{'default':_0x565e38};};Object['defineProperty'](exports,a142_0x40aa5c(0x1b7),{'value':!![]}),exports[a142_0x40aa5c(0x1ba)]=void 0x0;const fs_internal_1=require('../../internal/fs.internal'),git_internal_1=require(a142_0x40aa5c(0x1c5)),shell_internal_1=require('../../internal/shell.internal'),utils_1=require('../../../shared/utils'),shortid_1=__importDefault(require(a142_0x40aa5c(0x1a8)));class GitUtils{constructor(_0x8f3567){const _0x13fea5=a142_0x40aa5c;this['remote']=_0x8f3567,this[_0x13fea5(0x1bd)]=0xa,this[_0x13fea5(0x1a5)]=0xbb8,this[_0x13fea5(0x1b6)]=(0x0,shortid_1[_0x13fea5(0x1c6)])();}get[a142_0x40aa5c(0x1ca)](){const _0x5d47e5=a142_0x40aa5c;return this[_0x5d47e5(0x1af)]['baseDir'];}async['clone'](_0xc3f9c2,_0x32e77c){const _0x22f7d2=a142_0x40aa5c;this[_0x22f7d2(0x1af)]=await git_internal_1[_0x22f7d2(0x1b9)]['clone'](this[_0x22f7d2(0x1b2)],''+this[_0x22f7d2(0x1b6)],_0xc3f9c2);}async['checkoutTo'](_0x1aefef){const _0x228138=a142_0x40aa5c;await this[_0x228138(0x1af)][_0x228138(0x1c4)](_0x1aefef);}[a142_0x40aa5c(0x1c8)](){const _0x124060=a142_0x40aa5c;return this[_0x124060(0x1af)][_0x124060(0x1c8)]();}[a142_0x40aa5c(0x1c9)](_0x49087b){const _0x5537cd=a142_0x40aa5c;return this[_0x5537cd(0x1af)][_0x5537cd(0x1c9)](_0x49087b);}async[a142_0x40aa5c(0x1c7)](_0x405c1c,_0x3b19ae,_0x446c93){const _0xb7f928=a142_0x40aa5c;await this['git'][_0xb7f928(0x1bf)]('.');const _0x48eb38=await this[_0xb7f928(0x1af)][_0xb7f928(0x1b8)]()[_0xb7f928(0x1cc)](_0xd2907=>_0xd2907[_0xb7f928(0x1aa)]||_0xd2907);if(_0x48eb38['includes'](_0xb7f928(0x1b4)))return;await this[_0xb7f928(0x1af)][_0xb7f928(0x1cf)](_0x3b19ae[_0xb7f928(0x1cd)],_0x3b19ae['email']);try{await this[_0xb7f928(0x1af)][_0xb7f928(0x1b5)](_0x405c1c);}catch(_0x2565b4){let _0x21cd06=0x0;do{_0x21cd06++;const _0x2daf49=await this['git']['status']()[_0xb7f928(0x1cc)](_0xcac858=>_0xcac858[_0xb7f928(0x1aa)]||_0xcac858);if(_0x2daf49['includes'](_0xb7f928(0x1b4))){_0x21cd06=0x0;break;}await(0x0,utils_1[_0xb7f928(0x1bb)])(this[_0xb7f928(0x1a5)]);}while(_0x21cd06<this[_0xb7f928(0x1bd)]);if(_0x21cd06===this['MAX_GIT_STATUS_CHECK'])throw _0x2565b4;}await this['git']['push'](_0x446c93);}async['clearDir'](){const _0x46bce6=a142_0x40aa5c;await shell_internal_1[_0x46bce6(0x1ce)]['exec'](_0x46bce6(0x1a9)+this[_0x46bce6(0x1ca)]+'\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd')[_0x46bce6(0x1cc)](()=>void 0x0);}async['removeDir'](){await fs_internal_1['FS']['removeDir'](this['dir']);}}exports[a142_0x40aa5c(0x1ba)]=GitUtils;