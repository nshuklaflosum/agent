const a212_0x22e855=a212_0x11a2;(function(_0x808900,_0x71345){const _0x28fda2=a212_0x11a2,_0x204a3b=_0x808900();while(!![]){try{const _0x18c38a=parseInt(_0x28fda2(0x101))/0x1*(-parseInt(_0x28fda2(0x106))/0x2)+-parseInt(_0x28fda2(0x11c))/0x3+-parseInt(_0x28fda2(0x104))/0x4+parseInt(_0x28fda2(0x10d))/0x5*(-parseInt(_0x28fda2(0x115))/0x6)+-parseInt(_0x28fda2(0x108))/0x7+-parseInt(_0x28fda2(0x114))/0x8+parseInt(_0x28fda2(0xfe))/0x9;if(_0x18c38a===_0x71345)break;else _0x204a3b['push'](_0x204a3b['shift']());}catch(_0x3a29d6){_0x204a3b['push'](_0x204a3b['shift']());}}}(a212_0x467c,0x8f371));const a212_0xbb3af=(function(){let _0x27acea=!![];return function(_0xdbd935,_0x3bd108){const _0x1f5707=_0x27acea?function(){const _0x3f829a=a212_0x11a2;if(_0x3bd108){const _0x415007=_0x3bd108[_0x3f829a(0x117)](_0xdbd935,arguments);return _0x3bd108=null,_0x415007;}}:function(){};return _0x27acea=![],_0x1f5707;};}()),a212_0xc57808=a212_0xbb3af(this,function(){const _0x23d672=a212_0x11a2;return a212_0xc57808[_0x23d672(0x107)]()[_0x23d672(0x10a)](_0x23d672(0x118))[_0x23d672(0x107)]()[_0x23d672(0x102)](a212_0xc57808)[_0x23d672(0x10a)](_0x23d672(0x118));});a212_0xc57808();'use strict';function a212_0x11a2(_0x24ecbf,_0x38e791){const _0x43fc2f=a212_0x467c();return a212_0x11a2=function(_0xc57808,_0xbb3af){_0xc57808=_0xc57808-0xfc;let _0x467c4e=_0x43fc2f[_0xc57808];return _0x467c4e;},a212_0x11a2(_0x24ecbf,_0x38e791);}Object[a212_0x22e855(0x10b)](exports,a212_0x22e855(0x110),{'value':!![]}),exports[a212_0x22e855(0x120)]=void 0x0;function a212_0x467c(){const _0x1e7026=['BadRequestError','values','../dto/hook.dto','BitbucketServerHookService','fromBitbucketServer','createRequest','api','delete','37416312kpPAUB','map','repository','155circGt','constructor','./git-hook.service','2755728GUFBin','webhooks','5060rDGERW','toString','6564292mfIdhk','get','search','defineProperty','HookDto','1209745mitLzZ','getOne','create','__esModule','../../../../../core/errors/bad-request.error','NotFoundError','request','6809800yauhvt','6AtDRdk','update','apply','(((.+)+)+)+$','webhooks/','post','apiUrl','1376241jXNRXU'];a212_0x467c=function(){return _0x1e7026;};return a212_0x467c();}const bad_request_error_1=require(a212_0x22e855(0x111)),not_found_error_1=require('../../../../../core/errors/not-found.error'),hook_dto_1=require(a212_0x22e855(0x11f)),git_hook_service_1=require(a212_0x22e855(0x103));class BitbucketServerHookService extends git_hook_service_1['GitHookService']{constructor(_0x56d1fb,_0x79da81){const _0x389388=a212_0x22e855;super(_0x56d1fb),this[_0x389388(0xfc)]=_0x79da81,this[_0x389388(0x113)]=this[_0x389388(0x122)]();}[a212_0x22e855(0x122)](){const _0x5bd8c8=a212_0x22e855;return this['api'][_0x5bd8c8(0x122)](this[_0x5bd8c8(0x100)][_0x5bd8c8(0x11b)]);}async[a212_0x22e855(0x10f)](_0x12a61e){const _0x5036a1=a212_0x22e855;try{const _0x4869e8=await this['request'][_0x5036a1(0x11a)](_0x5036a1(0x105),_0x12a61e);return hook_dto_1[_0x5036a1(0x10c)][_0x5036a1(0x121)](_0x4869e8);}catch(_0x2b46b5){throw new bad_request_error_1[(_0x5036a1(0x11d))](_0x2b46b5);}}async[a212_0x22e855(0x10e)](_0x6eb88c){const _0x5bd33a=a212_0x22e855;try{const _0x56a9ae=await this['request'][_0x5bd33a(0x109)]('webhooks/'+_0x6eb88c);return hook_dto_1['HookDto'][_0x5bd33a(0x121)](_0x56a9ae);}catch(_0x1484ca){throw new not_found_error_1[(_0x5bd33a(0x112))](_0x1484ca);}}async['getAll'](){const _0xe301bb=a212_0x22e855;try{const _0x3b0caf=await this['request']['get']('webhooks');return _0x3b0caf[_0xe301bb(0x11e)][_0xe301bb(0xff)](_0xb55919=>hook_dto_1['HookDto'][_0xe301bb(0x121)](_0xb55919));}catch(_0x3f57e0){throw new not_found_error_1['NotFoundError'](_0x3f57e0);}}async[a212_0x22e855(0x116)](_0x1cedd4,_0x28e7c9){const _0x2c11f6=a212_0x22e855;try{const _0x3f5bdf=await this[_0x2c11f6(0x113)]['put'](_0x2c11f6(0x119)+_0x1cedd4,_0x28e7c9);return hook_dto_1['HookDto'][_0x2c11f6(0x121)](_0x3f5bdf);}catch(_0x5c4a40){throw new not_found_error_1[(_0x2c11f6(0x112))](_0x5c4a40);}}async[a212_0x22e855(0xfd)](_0x52f91a){const _0x572378=a212_0x22e855;try{await this[_0x572378(0x113)][_0x572378(0xfd)](_0x572378(0x119)+_0x52f91a);}catch(_0x5cb01a){throw new not_found_error_1[(_0x572378(0x112))](_0x5cb01a);}}}exports['BitbucketServerHookService']=BitbucketServerHookService;