const a220_0x5eea12=a220_0x28ad;(function(_0x23786d,_0x5bb10d){const _0x16c7c8=a220_0x28ad,_0x553cba=_0x23786d();while(!![]){try{const _0x432a1e=parseInt(_0x16c7c8(0x1ea))/0x1*(-parseInt(_0x16c7c8(0x1eb))/0x2)+-parseInt(_0x16c7c8(0x1e9))/0x3+parseInt(_0x16c7c8(0x1f2))/0x4+-parseInt(_0x16c7c8(0x1f3))/0x5*(parseInt(_0x16c7c8(0x1d3))/0x6)+parseInt(_0x16c7c8(0x1e4))/0x7*(parseInt(_0x16c7c8(0x1d4))/0x8)+parseInt(_0x16c7c8(0x1ec))/0x9*(-parseInt(_0x16c7c8(0x1e8))/0xa)+parseInt(_0x16c7c8(0x1f1))/0xb;if(_0x432a1e===_0x5bb10d)break;else _0x553cba['push'](_0x553cba['shift']());}catch(_0x248cef){_0x553cba['push'](_0x553cba['shift']());}}}(a220_0x26bf,0x42fae));const a220_0x398010=(function(){let _0x5b21bc=!![];return function(_0x365735,_0x13b3f5){const _0x4f6365=_0x5b21bc?function(){const _0x41f887=a220_0x28ad;if(_0x13b3f5){const _0xb6472c=_0x13b3f5[_0x41f887(0x1df)](_0x365735,arguments);return _0x13b3f5=null,_0xb6472c;}}:function(){};return _0x5b21bc=![],_0x4f6365;};}()),a220_0x327b4a=a220_0x398010(this,function(){const _0x2589cb=a220_0x28ad;return a220_0x327b4a[_0x2589cb(0x1da)]()['search'](_0x2589cb(0x1dc))['toString']()[_0x2589cb(0x1ed)](a220_0x327b4a)[_0x2589cb(0x1e0)](_0x2589cb(0x1dc));});function a220_0x28ad(_0x4f49c2,_0xfe200b){const _0x403a9f=a220_0x26bf();return a220_0x28ad=function(_0x327b4a,_0x398010){_0x327b4a=_0x327b4a-0x1d1;let _0x26bf23=_0x403a9f[_0x327b4a];return _0x26bf23;},a220_0x28ad(_0x4f49c2,_0xfe200b);}function a220_0x26bf(){const _0x1641f2=['post','(((.+)+)+)+$','hooks/','request','apply','search','./git-hook.service','map','__esModule','35zdeYQr','fromGitlab','update','../../../../../core/errors/not-found.error','1337040VhGzON','930450CEslEs','253FfgiAq','4334QkkeLi','18OWlXVu','constructor','BadRequestError','getOne','HookDto','14874552ppTafo','291756xqjwhW','208465wFFhdg','delete','GitlabHookService','put','getAll','GitHookService','NotFoundError','54vmevgm','560360IZLjxB','get','createRequest','create','defineProperty','apiUrl','toString'];a220_0x26bf=function(){return _0x1641f2;};return a220_0x26bf();}a220_0x327b4a();'use strict';Object[a220_0x5eea12(0x1d8)](exports,a220_0x5eea12(0x1e3),{'value':!![]}),exports[a220_0x5eea12(0x1f5)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a220_0x5eea12(0x1e7)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a220_0x5eea12(0x1e1));class GitlabHookService extends git_hook_service_1[a220_0x5eea12(0x1d1)]{constructor(_0x3e73d9,_0x520831){super(_0x3e73d9),this['api']=_0x520831,this['request']=this['createRequest']();}[a220_0x5eea12(0x1d6)](){const _0x5cde9e=a220_0x5eea12;return this['api'][_0x5cde9e(0x1d6)](this['repository'][_0x5cde9e(0x1d9)]);}async[a220_0x5eea12(0x1d7)](_0x182d91){const _0x220989=a220_0x5eea12;try{const _0x25b421=await this[_0x220989(0x1de)][_0x220989(0x1db)]('hooks',_0x182d91);return hook_dto_1['HookDto']['fromGitlab'](_0x25b421);}catch(_0xfa3642){throw new bad_request_error_1[(_0x220989(0x1ee))](_0xfa3642);}}async[a220_0x5eea12(0x1ef)](_0x49e2dd){const _0x56b21f=a220_0x5eea12;try{const _0x426945=await this[_0x56b21f(0x1de)][_0x56b21f(0x1d5)](_0x56b21f(0x1dd)+_0x49e2dd);return hook_dto_1['HookDto'][_0x56b21f(0x1e5)](_0x426945);}catch(_0x33ed8a){throw new not_found_error_1[(_0x56b21f(0x1d2))](_0x33ed8a);}}async[a220_0x5eea12(0x1f7)](){const _0x503fbd=a220_0x5eea12;try{const _0x186867=await this[_0x503fbd(0x1de)][_0x503fbd(0x1d5)]('hooks');return _0x186867[_0x503fbd(0x1e2)](_0x5c0adb=>hook_dto_1['HookDto'][_0x503fbd(0x1e5)](_0x5c0adb));}catch(_0x1835f0){throw new not_found_error_1['NotFoundError'](_0x1835f0);}}async[a220_0x5eea12(0x1e6)](_0x46236a,_0xb981bc){const _0x365dc3=a220_0x5eea12;try{const _0x1598c6=await this[_0x365dc3(0x1de)][_0x365dc3(0x1f6)]('hooks/'+_0x46236a,_0xb981bc);return hook_dto_1[_0x365dc3(0x1f0)]['fromGitlab'](_0x1598c6);}catch(_0x4f23c5){throw new not_found_error_1[(_0x365dc3(0x1d2))](_0x4f23c5);}}async[a220_0x5eea12(0x1f4)](_0x54dd7c){const _0x15654a=a220_0x5eea12;try{await this[_0x15654a(0x1de)][_0x15654a(0x1f4)](_0x15654a(0x1dd)+_0x54dd7c);}catch(_0x450ef6){throw new not_found_error_1[(_0x15654a(0x1d2))](_0x450ef6);}}}exports[a220_0x5eea12(0x1f5)]=GitlabHookService;