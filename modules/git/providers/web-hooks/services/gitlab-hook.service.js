const a215_0x2a79a9=a215_0x4204;(function(_0x59082a,_0x49bbaa){const _0x3c22ba=a215_0x4204,_0x2e8201=_0x59082a();while(!![]){try{const _0x304e31=-parseInt(_0x3c22ba(0x10b))/0x1*(-parseInt(_0x3c22ba(0x105))/0x2)+-parseInt(_0x3c22ba(0x10c))/0x3+parseInt(_0x3c22ba(0x109))/0x4*(-parseInt(_0x3c22ba(0x101))/0x5)+parseInt(_0x3c22ba(0x115))/0x6*(-parseInt(_0x3c22ba(0x119))/0x7)+-parseInt(_0x3c22ba(0x10f))/0x8+parseInt(_0x3c22ba(0x103))/0x9*(-parseInt(_0x3c22ba(0x121))/0xa)+parseInt(_0x3c22ba(0x107))/0xb*(parseInt(_0x3c22ba(0x104))/0xc);if(_0x304e31===_0x49bbaa)break;else _0x2e8201['push'](_0x2e8201['shift']());}catch(_0x5c32f8){_0x2e8201['push'](_0x2e8201['shift']());}}}(a215_0x5497,0xb1808));const a215_0x5aa106=(function(){let _0x22fac5=!![];return function(_0x5614dd,_0x35d8a9){const _0x43c985=_0x22fac5?function(){if(_0x35d8a9){const _0x2abd4d=_0x35d8a9['apply'](_0x5614dd,arguments);return _0x35d8a9=null,_0x2abd4d;}}:function(){};return _0x22fac5=![],_0x43c985;};}()),a215_0x92470e=a215_0x5aa106(this,function(){const _0x19f3e0=a215_0x4204;return a215_0x92470e[_0x19f3e0(0x106)]()['search'](_0x19f3e0(0x117))[_0x19f3e0(0x106)]()[_0x19f3e0(0x102)](a215_0x92470e)[_0x19f3e0(0x11c)](_0x19f3e0(0x117));});a215_0x92470e();'use strict';Object[a215_0x2a79a9(0x100)](exports,a215_0x2a79a9(0x111),{'value':!![]}),exports[a215_0x2a79a9(0x118)]=void 0x0;function a215_0x4204(_0x23652d,_0x2913e0){const _0x2c3ad7=a215_0x5497();return a215_0x4204=function(_0x92470e,_0x5aa106){_0x92470e=_0x92470e-0x100;let _0x549703=_0x2c3ad7[_0x92470e];return _0x549703;},a215_0x4204(_0x23652d,_0x2913e0);}function a215_0x5497(){const _0x4c6e60=['../../../../../core/errors/bad-request.error','NotFoundError','post','api','../../../../../core/errors/not-found.error','HookDto','defineProperty','805TwXgRY','constructor','7497FwyPOn','20592ibovio','2OQbSPb','toString','22495pGAqOQ','delete','25924IlcZbl','hooks/','505913RvYEuh','3317328bmWIuq','request','hooks','2205088hFfgJh','update','__esModule','fromGitlab','getOne','get','852AJIKOz','getAll','(((.+)+)+)+$','GitlabHookService','39515idssWE','./git-hook.service','createRequest','search','GitHookService','BadRequestError','repository','put','740SUgvcL'];a215_0x5497=function(){return _0x4c6e60;};return a215_0x5497();}const bad_request_error_1=require(a215_0x2a79a9(0x122)),not_found_error_1=require(a215_0x2a79a9(0x126)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a215_0x2a79a9(0x11a));class GitlabHookService extends git_hook_service_1[a215_0x2a79a9(0x11d)]{constructor(_0x302d3d,_0x2ea719){const _0x4be6a5=a215_0x2a79a9;super(_0x302d3d),this[_0x4be6a5(0x125)]=_0x2ea719,this[_0x4be6a5(0x10d)]=this[_0x4be6a5(0x11b)]();}['createRequest'](){const _0x6a2f15=a215_0x2a79a9;return this['api'][_0x6a2f15(0x11b)](this[_0x6a2f15(0x11f)]['apiUrl']);}async['create'](_0x49799e){const _0x1dff05=a215_0x2a79a9;try{const _0x530114=await this[_0x1dff05(0x10d)][_0x1dff05(0x124)](_0x1dff05(0x10e),_0x49799e);return hook_dto_1[_0x1dff05(0x127)][_0x1dff05(0x112)](_0x530114);}catch(_0x3dbff2){throw new bad_request_error_1[(_0x1dff05(0x11e))](_0x3dbff2);}}async[a215_0x2a79a9(0x113)](_0x31b1f5){const _0x1d7ca3=a215_0x2a79a9;try{const _0x100c3c=await this[_0x1d7ca3(0x10d)][_0x1d7ca3(0x114)]('hooks/'+_0x31b1f5);return hook_dto_1[_0x1d7ca3(0x127)]['fromGitlab'](_0x100c3c);}catch(_0x3f6b50){throw new not_found_error_1[(_0x1d7ca3(0x123))](_0x3f6b50);}}async[a215_0x2a79a9(0x116)](){const _0x32aa02=a215_0x2a79a9;try{const _0x22cfe0=await this[_0x32aa02(0x10d)]['get'](_0x32aa02(0x10e));return _0x22cfe0['map'](_0x35cc8e=>hook_dto_1['HookDto']['fromGitlab'](_0x35cc8e));}catch(_0x27bf75){throw new not_found_error_1[(_0x32aa02(0x123))](_0x27bf75);}}async[a215_0x2a79a9(0x110)](_0x4b1a26,_0xfa86e2){const _0x7b7df=a215_0x2a79a9;try{const _0xeb0347=await this[_0x7b7df(0x10d)][_0x7b7df(0x120)]('hooks/'+_0x4b1a26,_0xfa86e2);return hook_dto_1['HookDto'][_0x7b7df(0x112)](_0xeb0347);}catch(_0x31a83e){throw new not_found_error_1['NotFoundError'](_0x31a83e);}}async[a215_0x2a79a9(0x108)](_0x33dcb3){const _0x559dfa=a215_0x2a79a9;try{await this['request'][_0x559dfa(0x108)](_0x559dfa(0x10a)+_0x33dcb3);}catch(_0x54e7ec){throw new not_found_error_1['NotFoundError'](_0x54e7ec);}}}exports['GitlabHookService']=GitlabHookService;