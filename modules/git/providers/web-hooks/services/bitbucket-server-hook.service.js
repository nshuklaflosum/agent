const a160_0x3f5698=a160_0x3034;function a160_0x3034(_0x3a11ac,_0x4a41a8){const _0xfbd54a=a160_0x1ef2();return a160_0x3034=function(_0x18af26,_0x57056d){_0x18af26=_0x18af26-0xc2;let _0x1ef2be=_0xfbd54a[_0x18af26];return _0x1ef2be;},a160_0x3034(_0x3a11ac,_0x4a41a8);}(function(_0x18006e,_0xc5df47){const _0x3568b1=a160_0x3034,_0x478373=_0x18006e();while(!![]){try{const _0x4fe8e2=-parseInt(_0x3568b1(0xdf))/0x1*(-parseInt(_0x3568b1(0xe9))/0x2)+-parseInt(_0x3568b1(0xca))/0x3*(-parseInt(_0x3568b1(0xd6))/0x4)+parseInt(_0x3568b1(0xc2))/0x5*(parseInt(_0x3568b1(0xcd))/0x6)+parseInt(_0x3568b1(0xcf))/0x7+-parseInt(_0x3568b1(0xd3))/0x8*(parseInt(_0x3568b1(0xea))/0x9)+-parseInt(_0x3568b1(0xe4))/0xa+-parseInt(_0x3568b1(0xde))/0xb;if(_0x4fe8e2===_0xc5df47)break;else _0x478373['push'](_0x478373['shift']());}catch(_0x57b2ce){_0x478373['push'](_0x478373['shift']());}}}(a160_0x1ef2,0x77c95));function a160_0x1ef2(){const _0x4a506d=['7103184iXuceY','22ySAWQM','GitHookService','get','../dto/hook.dto','request','1589010qFJSWp','update','put','fromBitbucketServer','__esModule','30746bnsXst','9ZTimyj','30qjWwZM','webhooks/','HookDto','apply','repository','delete','BitbucketServerHookService','getOne','1298403iYAVAN','createRequest','BadRequestError','804738oILIRV','toString','3548846VUbssy','NotFoundError','../../../../../core/errors/not-found.error','getAll','6299464DaWEie','webhooks','values','4phiaBn','api','defineProperty','create','constructor','(((.+)+)+)+$','post','./git-hook.service'];a160_0x1ef2=function(){return _0x4a506d;};return a160_0x1ef2();}const a160_0x57056d=(function(){let _0x4f02ad=!![];return function(_0x346242,_0x260d6f){const _0x1d72bb=_0x4f02ad?function(){const _0x39a81c=a160_0x3034;if(_0x260d6f){const _0x333558=_0x260d6f[_0x39a81c(0xc5)](_0x346242,arguments);return _0x260d6f=null,_0x333558;}}:function(){};return _0x4f02ad=![],_0x1d72bb;};}()),a160_0x18af26=a160_0x57056d(this,function(){const _0x30404e=a160_0x3034;return a160_0x18af26[_0x30404e(0xce)]()['search'](_0x30404e(0xdb))[_0x30404e(0xce)]()[_0x30404e(0xda)](a160_0x18af26)['search'](_0x30404e(0xdb));});a160_0x18af26();'use strict';Object[a160_0x3f5698(0xd8)](exports,a160_0x3f5698(0xe8),{'value':!![]}),exports[a160_0x3f5698(0xc8)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a160_0x3f5698(0xd1)),hook_dto_1=require(a160_0x3f5698(0xe2)),git_hook_service_1=require(a160_0x3f5698(0xdd));class BitbucketServerHookService extends git_hook_service_1[a160_0x3f5698(0xe0)]{constructor(_0x59c175,_0x3b3e05){const _0x3c72d2=a160_0x3f5698;super(_0x59c175),this[_0x3c72d2(0xd7)]=_0x3b3e05,this[_0x3c72d2(0xe3)]=this['createRequest']();}[a160_0x3f5698(0xcb)](){const _0x1e06d7=a160_0x3f5698;return this[_0x1e06d7(0xd7)][_0x1e06d7(0xcb)](this[_0x1e06d7(0xc6)]['apiUrl']);}async[a160_0x3f5698(0xd9)](_0x1f0780){const _0x94cb46=a160_0x3f5698;try{const _0x5c6d0b=await this[_0x94cb46(0xe3)][_0x94cb46(0xdc)]('webhooks',_0x1f0780);return hook_dto_1['HookDto']['fromBitbucketServer'](_0x5c6d0b);}catch(_0x2b8c05){throw new bad_request_error_1[(_0x94cb46(0xcc))](_0x2b8c05);}}async[a160_0x3f5698(0xc9)](_0x5a5b86){const _0x36f529=a160_0x3f5698;try{const _0x51ebea=await this[_0x36f529(0xe3)][_0x36f529(0xe1)](_0x36f529(0xc3)+_0x5a5b86);return hook_dto_1[_0x36f529(0xc4)]['fromBitbucketServer'](_0x51ebea);}catch(_0x32243f){throw new not_found_error_1[(_0x36f529(0xd0))](_0x32243f);}}async[a160_0x3f5698(0xd2)](){const _0x5cd7bd=a160_0x3f5698;try{const _0x5dd656=await this[_0x5cd7bd(0xe3)][_0x5cd7bd(0xe1)](_0x5cd7bd(0xd4));return _0x5dd656[_0x5cd7bd(0xd5)]['map'](_0x5efa31=>hook_dto_1[_0x5cd7bd(0xc4)]['fromBitbucketServer'](_0x5efa31));}catch(_0x9bc43d){throw new not_found_error_1['NotFoundError'](_0x9bc43d);}}async[a160_0x3f5698(0xe5)](_0x2b5cd5,_0x49e6dc){const _0x52c7b4=a160_0x3f5698;try{const _0x35e960=await this['request'][_0x52c7b4(0xe6)]('webhooks/'+_0x2b5cd5,_0x49e6dc);return hook_dto_1['HookDto'][_0x52c7b4(0xe7)](_0x35e960);}catch(_0x1a59f2){throw new not_found_error_1[(_0x52c7b4(0xd0))](_0x1a59f2);}}async[a160_0x3f5698(0xc7)](_0xc4bf02){const _0x3849c4=a160_0x3f5698;try{await this[_0x3849c4(0xe3)][_0x3849c4(0xc7)](_0x3849c4(0xc3)+_0xc4bf02);}catch(_0x17c0bb){throw new not_found_error_1['NotFoundError'](_0x17c0bb);}}}exports[a160_0x3f5698(0xc8)]=BitbucketServerHookService;