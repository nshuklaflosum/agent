const a137_0x5d6090=a137_0x420a;(function(_0x53e31e,_0x23f712){const _0x5f53cf=a137_0x420a,_0xe10ffc=_0x53e31e();while(!![]){try{const _0x30ef4f=parseInt(_0x5f53cf(0x196))/0x1+-parseInt(_0x5f53cf(0x199))/0x2+-parseInt(_0x5f53cf(0x19a))/0x3*(-parseInt(_0x5f53cf(0x18e))/0x4)+parseInt(_0x5f53cf(0x18c))/0x5+parseInt(_0x5f53cf(0x1a0))/0x6+parseInt(_0x5f53cf(0x19c))/0x7*(-parseInt(_0x5f53cf(0x1a9))/0x8)+-parseInt(_0x5f53cf(0x194))/0x9*(parseInt(_0x5f53cf(0x19f))/0xa);if(_0x30ef4f===_0x23f712)break;else _0xe10ffc['push'](_0xe10ffc['shift']());}catch(_0x2b9465){_0xe10ffc['push'](_0xe10ffc['shift']());}}}(a137_0x5e43,0xbdd64));const a137_0x4591e2=(function(){let _0xa87afc=!![];return function(_0x1482c6,_0x317c1e){const _0x2fc35c=_0xa87afc?function(){const _0x6dc387=a137_0x420a;if(_0x317c1e){const _0x26d88f=_0x317c1e[_0x6dc387(0x19b)](_0x1482c6,arguments);return _0x317c1e=null,_0x26d88f;}}:function(){};return _0xa87afc=![],_0x2fc35c;};}()),a137_0x275f82=a137_0x4591e2(this,function(){const _0x40d514=a137_0x420a;return a137_0x275f82[_0x40d514(0x1a7)]()['search']('(((.+)+)+)+$')[_0x40d514(0x1a7)]()[_0x40d514(0x19e)](a137_0x275f82)['search'](_0x40d514(0x192));});a137_0x275f82();function a137_0x420a(_0x55f647,_0xc94cfc){const _0xf4ffc9=a137_0x5e43();return a137_0x420a=function(_0x275f82,_0x4591e2){_0x275f82=_0x275f82-0x18c;let _0x5e43e0=_0xf4ffc9[_0x275f82];return _0x5e43e0;},a137_0x420a(_0x55f647,_0xc94cfc);}'use strict';function a137_0x5e43(){const _0x3e07fa=['createEmptyBranch','../../../internal/git.internal','GitBranchService','init\x20branch','toString','Branch\x20not\x20found','101512ugdXKs','NotFoundError','BadRequestError','5079620aIWocu','repository','8544rsMnNa','getOne','Git','__esModule','(((.+)+)+)+$','../../../../../core/errors/bad-request.error','18mhCCwB','create','518254GFGkVt','getAll','credentials','1206302uobVDO','1467CkYTzw','apply','707TogUKP','name','constructor','462710gkefiZ','1057032EFBhlH','../../../../../core/errors/not-found.error','getRepositoryBranches'];a137_0x5e43=function(){return _0x3e07fa;};return a137_0x5e43();}Object['defineProperty'](exports,a137_0x5d6090(0x191),{'value':!![]}),exports['GitBranchService']=void 0x0;const bad_request_error_1=require(a137_0x5d6090(0x193)),not_found_error_1=require(a137_0x5d6090(0x1a1)),git_internal_1=require(a137_0x5d6090(0x1a4));class GitBranchService{constructor(_0xc81343,_0x9fec26){const _0x54e6ec=a137_0x5d6090;this[_0x54e6ec(0x18d)]=_0xc81343,this['credentials']=_0x9fec26;}async[a137_0x5d6090(0x195)](_0x35077d){const _0xe59133=a137_0x5d6090;try{return await git_internal_1[_0xe59133(0x190)][_0xe59133(0x1a3)](this[_0xe59133(0x18d)],_0x35077d[_0xe59133(0x19d)],_0xe59133(0x1a6),this['credentials']),this[_0xe59133(0x18f)](_0x35077d[_0xe59133(0x19d)]);}catch(_0x411892){throw new bad_request_error_1[(_0xe59133(0x1ab))](_0x411892);}}async[a137_0x5d6090(0x18f)](_0x12033c){const _0x51c91d=a137_0x5d6090;try{const _0x3dadac=await this[_0x51c91d(0x197)](),_0x277853=_0x3dadac['find'](_0x3a75e0=>_0x3a75e0[_0x51c91d(0x19d)]===_0x12033c);if(!_0x277853)throw new Error(_0x51c91d(0x1a8));return _0x277853;}catch(_0x5b169d){throw new not_found_error_1[(_0x51c91d(0x1aa))](_0x5b169d);}}async[a137_0x5d6090(0x197)](){const _0xcd6ae7=a137_0x5d6090;try{const _0x41c51b=await git_internal_1[_0xcd6ae7(0x190)][_0xcd6ae7(0x1a2)](this[_0xcd6ae7(0x18d)],this[_0xcd6ae7(0x198)]);return _0x41c51b;}catch(_0x1872ff){throw new bad_request_error_1['BadRequestError'](_0x1872ff);}}}exports[a137_0x5d6090(0x1a5)]=GitBranchService;