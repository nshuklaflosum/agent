const a78_0x4c5bea=a78_0xb0d2;(function(_0x51c8ea,_0x13d090){const _0x582143=a78_0xb0d2,_0x4fe747=_0x51c8ea();while(!![]){try{const _0x20c7ce=-parseInt(_0x582143(0x191))/0x1+parseInt(_0x582143(0x16f))/0x2*(-parseInt(_0x582143(0x181))/0x3)+parseInt(_0x582143(0x179))/0x4*(parseInt(_0x582143(0x172))/0x5)+-parseInt(_0x582143(0x17c))/0x6+-parseInt(_0x582143(0x175))/0x7+-parseInt(_0x582143(0x195))/0x8*(-parseInt(_0x582143(0x174))/0x9)+parseInt(_0x582143(0x18b))/0xa*(parseInt(_0x582143(0x18a))/0xb);if(_0x20c7ce===_0x13d090)break;else _0x4fe747['push'](_0x4fe747['shift']());}catch(_0x401f05){_0x4fe747['push'](_0x4fe747['shift']());}}}(a78_0x438d,0x4d4dd));const a78_0x2accfd=(function(){let _0x28792a=!![];return function(_0x5dbd3d,_0x3435bf){const _0x236c00=_0x28792a?function(){const _0x74d9ee=a78_0xb0d2;if(_0x3435bf){const _0x6efdd1=_0x3435bf[_0x74d9ee(0x18d)](_0x5dbd3d,arguments);return _0x3435bf=null,_0x6efdd1;}}:function(){};return _0x28792a=![],_0x236c00;};}()),a78_0x2ba5fd=a78_0x2accfd(this,function(){const _0x29d103=a78_0xb0d2;return a78_0x2ba5fd[_0x29d103(0x17a)]()['search'](_0x29d103(0x176))[_0x29d103(0x17a)]()[_0x29d103(0x193)](a78_0x2ba5fd)[_0x29d103(0x18c)](_0x29d103(0x176));});a78_0x2ba5fd();'use strict';var __importDefault=this&&this[a78_0x4c5bea(0x185)]||function(_0x4a208b){const _0x338a41=a78_0x4c5bea;return _0x4a208b&&_0x4a208b[_0x338a41(0x188)]?_0x4a208b:{'default':_0x4a208b};};Object[a78_0x4c5bea(0x17d)](exports,a78_0x4c5bea(0x188),{'value':!![]}),exports[a78_0x4c5bea(0x17f)]=void 0x0;const bad_request_error_1=require(a78_0x4c5bea(0x187)),not_found_error_1=require('../../../core/errors/not-found.error'),bitbucket_api_service_1=require('../../git-api/services/bitbucket-api.service'),typedi_1=__importDefault(require(a78_0x4c5bea(0x182))),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a78_0x4c5bea(0x189));function a78_0x438d(){const _0x3702a1=['GitHookService','fromBitbucket','20AgXCkJ','post','45fpaVjG','2936878ddsJII','(((.+)+)+)+$','hooks','BadRequestError','370652SxwHFI','toString','update','2610648IsYeVT','defineProperty','NotFoundError','BitbucketHookService','delete','1105308ViKwtr','typedi','request','values','__importDefault','create','../../../core/errors/bad-request.error','__esModule','./git-hook.service','319xJwZnO','515870CZJcRA','search','apply','hooks/','HookDto','createRequest','349255UfUaHX','BitbucketApiService','constructor','getAll','35704Evevst','get','apiUrl','put','2ZZhkKx'];a78_0x438d=function(){return _0x3702a1;};return a78_0x438d();}class BitbucketHookService extends git_hook_service_1[a78_0x4c5bea(0x170)]{constructor(_0x3cebf6){const _0x58510d=a78_0x4c5bea;super(_0x3cebf6),this[_0x58510d(0x183)]=this[_0x58510d(0x190)]();}[a78_0x4c5bea(0x190)](){const _0xb3a7ef=a78_0x4c5bea,_0x49df17=typedi_1['default'][_0xb3a7ef(0x196)](bitbucket_api_service_1[_0xb3a7ef(0x192)]);return _0x49df17['createRequest'](this['repository'][_0xb3a7ef(0x197)]);}async[a78_0x4c5bea(0x186)](_0x5dea4b){const _0x5f5990=a78_0x4c5bea;try{const _0x172ef2=await this[_0x5f5990(0x183)][_0x5f5990(0x173)](_0x5f5990(0x177),_0x5dea4b);return hook_dto_1[_0x5f5990(0x18f)]['fromBitbucket'](_0x172ef2);}catch(_0x2f3f9c){throw new bad_request_error_1[(_0x5f5990(0x178))](_0x2f3f9c);}}async['getOne'](_0x208053){const _0x57b4aa=a78_0x4c5bea;try{const _0x1a8efd=await this[_0x57b4aa(0x183)][_0x57b4aa(0x196)](_0x57b4aa(0x18e)+_0x208053);return hook_dto_1[_0x57b4aa(0x18f)][_0x57b4aa(0x171)](_0x1a8efd);}catch(_0x3a9db7){throw new not_found_error_1[(_0x57b4aa(0x17e))](_0x3a9db7);}}async[a78_0x4c5bea(0x194)](){const _0x67704f=a78_0x4c5bea;try{const _0x3d5466=await this[_0x67704f(0x183)]['get'](_0x67704f(0x177));return _0x3d5466[_0x67704f(0x184)]['map'](_0x26e302=>hook_dto_1[_0x67704f(0x18f)][_0x67704f(0x171)](_0x26e302));}catch(_0x37c54b){throw new not_found_error_1[(_0x67704f(0x17e))](_0x37c54b);}}async[a78_0x4c5bea(0x17b)](_0x37ed24,_0x210c6a){const _0x261513=a78_0x4c5bea;try{const _0x2708cd=await this[_0x261513(0x183)][_0x261513(0x198)](_0x261513(0x18e)+_0x37ed24,_0x210c6a);return hook_dto_1[_0x261513(0x18f)][_0x261513(0x171)](_0x2708cd);}catch(_0x4c1091){throw new not_found_error_1[(_0x261513(0x17e))](_0x4c1091);}}async[a78_0x4c5bea(0x180)](_0x132c52){const _0x103a80=a78_0x4c5bea;try{await this['request'][_0x103a80(0x180)]('hooks/'+_0x132c52);}catch(_0x43ae78){throw new not_found_error_1[(_0x103a80(0x17e))](_0x43ae78);}}}function a78_0xb0d2(_0x229704,_0x26be5f){const _0xe1360a=a78_0x438d();return a78_0xb0d2=function(_0x2ba5fd,_0x2accfd){_0x2ba5fd=_0x2ba5fd-0x16f;let _0x438d1c=_0xe1360a[_0x2ba5fd];return _0x438d1c;},a78_0xb0d2(_0x229704,_0x26be5f);}exports[a78_0x4c5bea(0x17f)]=BitbucketHookService;