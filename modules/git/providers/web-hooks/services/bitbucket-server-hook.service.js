function a249_0x17e0(){const _0x8be39a=['HookDto','toString','10QHGTSX','api','map','../../../../../core/errors/not-found.error','createRequest','54489612soEacC','webhooks/','475564MCUvOs','525987CHMlsn','./git-hook.service','create','put','delete','update','(((.+)+)+)+$','339157MRBLNi','242928HInDbY','defineProperty','getOne','GitHookService','17200568UPhWvi','../../../../../core/errors/bad-request.error','BadRequestError','54bRqaxm','post','fromBitbucketServer','1224734FBIpVK','35OatJjZ','request','getAll','constructor','6jNtetP','webhooks','../dto/hook.dto','search','values','78KisdTv','__esModule','BitbucketServerHookService','get','NotFoundError'];a249_0x17e0=function(){return _0x8be39a;};return a249_0x17e0();}const a249_0x43c9d0=a249_0x4a2a;(function(_0x258e41,_0x1a5113){const _0x2ef8c0=a249_0x4a2a,_0x271a14=_0x258e41();while(!![]){try{const _0x329927=parseInt(_0x2ef8c0(0x1a7))/0x1+parseInt(_0x2ef8c0(0x1b9))/0x2*(-parseInt(_0x2ef8c0(0x1be))/0x3)+parseInt(_0x2ef8c0(0x1a6))/0x4*(-parseInt(_0x2ef8c0(0x1ba))/0x5)+parseInt(_0x2ef8c0(0x198))/0x6*(-parseInt(_0x2ef8c0(0x1ae))/0x7)+-parseInt(_0x2ef8c0(0x1af))/0x8*(-parseInt(_0x2ef8c0(0x1b6))/0x9)+parseInt(_0x2ef8c0(0x19f))/0xa*(-parseInt(_0x2ef8c0(0x1b3))/0xb)+parseInt(_0x2ef8c0(0x1a4))/0xc;if(_0x329927===_0x1a5113)break;else _0x271a14['push'](_0x271a14['shift']());}catch(_0x3b15f7){_0x271a14['push'](_0x271a14['shift']());}}}(a249_0x17e0,0xf3c3e));const a249_0x541ed8=(function(){let _0x4a6442=!![];return function(_0x57bc20,_0xfad2a0){const _0x235f3e=_0x4a6442?function(){if(_0xfad2a0){const _0x2025f2=_0xfad2a0['apply'](_0x57bc20,arguments);return _0xfad2a0=null,_0x2025f2;}}:function(){};return _0x4a6442=![],_0x235f3e;};}()),a249_0x4e18cc=a249_0x541ed8(this,function(){const _0x5aeddb=a249_0x4a2a;return a249_0x4e18cc[_0x5aeddb(0x19e)]()[_0x5aeddb(0x1c1)](_0x5aeddb(0x1ad))['toString']()[_0x5aeddb(0x1bd)](a249_0x4e18cc)[_0x5aeddb(0x1c1)](_0x5aeddb(0x1ad));});a249_0x4e18cc();'use strict';Object[a249_0x43c9d0(0x1b0)](exports,a249_0x43c9d0(0x199),{'value':!![]}),exports[a249_0x43c9d0(0x19a)]=void 0x0;const bad_request_error_1=require(a249_0x43c9d0(0x1b4)),not_found_error_1=require(a249_0x43c9d0(0x1a2)),hook_dto_1=require(a249_0x43c9d0(0x1c0)),git_hook_service_1=require(a249_0x43c9d0(0x1a8));function a249_0x4a2a(_0x55b3b8,_0x3933cc){const _0x4e9ff4=a249_0x17e0();return a249_0x4a2a=function(_0x4e18cc,_0x541ed8){_0x4e18cc=_0x4e18cc-0x197;let _0x17e054=_0x4e9ff4[_0x4e18cc];return _0x17e054;},a249_0x4a2a(_0x55b3b8,_0x3933cc);}class BitbucketServerHookService extends git_hook_service_1[a249_0x43c9d0(0x1b2)]{constructor(_0x33f28d,_0xf7d74c){super(_0x33f28d),this['api']=_0xf7d74c,this['request']=this['createRequest']();}[a249_0x43c9d0(0x1a3)](){const _0x543e59=a249_0x43c9d0;return this[_0x543e59(0x1a0)][_0x543e59(0x1a3)](this['repository']['apiUrl']);}async[a249_0x43c9d0(0x1a9)](_0x4d4296){const _0x461c1f=a249_0x43c9d0;try{const _0x13895f=await this['request'][_0x461c1f(0x1b7)](_0x461c1f(0x1bf),_0x4d4296);return hook_dto_1['HookDto'][_0x461c1f(0x1b8)](_0x13895f);}catch(_0x2e5e01){throw new bad_request_error_1[(_0x461c1f(0x1b5))](_0x2e5e01);}}async[a249_0x43c9d0(0x1b1)](_0x373ee3){const _0x44e581=a249_0x43c9d0;try{const _0x159010=await this['request'][_0x44e581(0x19b)](_0x44e581(0x1a5)+_0x373ee3);return hook_dto_1[_0x44e581(0x19d)][_0x44e581(0x1b8)](_0x159010);}catch(_0x5edef5){throw new not_found_error_1[(_0x44e581(0x19c))](_0x5edef5);}}async[a249_0x43c9d0(0x1bc)](){const _0x697a04=a249_0x43c9d0;try{const _0x35283b=await this[_0x697a04(0x1bb)][_0x697a04(0x19b)]('webhooks');return _0x35283b[_0x697a04(0x197)][_0x697a04(0x1a1)](_0x310b0b=>hook_dto_1['HookDto'][_0x697a04(0x1b8)](_0x310b0b));}catch(_0x2089e6){throw new not_found_error_1['NotFoundError'](_0x2089e6);}}async[a249_0x43c9d0(0x1ac)](_0x2f6d5c,_0xcd645c){const _0x1017d2=a249_0x43c9d0;try{const _0xf5282c=await this['request'][_0x1017d2(0x1aa)](_0x1017d2(0x1a5)+_0x2f6d5c,_0xcd645c);return hook_dto_1[_0x1017d2(0x19d)]['fromBitbucketServer'](_0xf5282c);}catch(_0x288c3b){throw new not_found_error_1['NotFoundError'](_0x288c3b);}}async[a249_0x43c9d0(0x1ab)](_0x32a966){const _0x37470a=a249_0x43c9d0;try{await this[_0x37470a(0x1bb)]['delete'](_0x37470a(0x1a5)+_0x32a966);}catch(_0x513585){throw new not_found_error_1[(_0x37470a(0x19c))](_0x513585);}}}exports[a249_0x43c9d0(0x19a)]=BitbucketServerHookService;