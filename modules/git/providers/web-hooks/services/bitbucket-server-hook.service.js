const a212_0x3394e8=a212_0x5b7a;function a212_0x13a6(){const _0x53f3f4=['fromBitbucketServer','221OwPDFM','1QepoBT','request','3872ICRFOS','297EpXYBt','GitHookService','repository','NotFoundError','9CcsLXY','3170168rDbqzT','516940EBobkn','12sPgzpv','../../../../../core/errors/bad-request.error','553092DzvUjU','2271330HYSKez','BitbucketServerHookService','toString','webhooks','./git-hook.service','post','403706GzTAsF','create','map','api','update','constructor','apiUrl','11cIqqoO','(((.+)+)+)+$','search','delete','values','../../../../../core/errors/not-found.error','webhooks/','getOne','BadRequestError','createRequest','apply','get','put','HookDto','2653238GHOVdu'];a212_0x13a6=function(){return _0x53f3f4;};return a212_0x13a6();}(function(_0x1885d4,_0x35f5dd){const _0x32b2c5=a212_0x5b7a,_0x1626d2=_0x1885d4();while(!![]){try{const _0x357137=-parseInt(_0x32b2c5(0xc4))/0x1*(-parseInt(_0x32b2c5(0xd7))/0x2)+parseInt(_0x32b2c5(0xc7))/0x3*(parseInt(_0x32b2c5(0xc6))/0x4)+-parseInt(_0x32b2c5(0xcd))/0x5*(parseInt(_0x32b2c5(0xce))/0x6)+parseInt(_0x32b2c5(0xc1))/0x7+parseInt(_0x32b2c5(0xcc))/0x8*(parseInt(_0x32b2c5(0xcb))/0x9)+-parseInt(_0x32b2c5(0xd1))/0xa*(-parseInt(_0x32b2c5(0xde))/0xb)+-parseInt(_0x32b2c5(0xd0))/0xc*(parseInt(_0x32b2c5(0xc3))/0xd);if(_0x357137===_0x35f5dd)break;else _0x1626d2['push'](_0x1626d2['shift']());}catch(_0x1d2639){_0x1626d2['push'](_0x1626d2['shift']());}}}(a212_0x13a6,0x4ba28));const a212_0x47fd8a=(function(){let _0x1f526f=!![];return function(_0xc00531,_0x54c5f9){const _0x2e3e86=_0x1f526f?function(){const _0x52d36f=a212_0x5b7a;if(_0x54c5f9){const _0x24d6bd=_0x54c5f9[_0x52d36f(0xbd)](_0xc00531,arguments);return _0x54c5f9=null,_0x24d6bd;}}:function(){};return _0x1f526f=![],_0x2e3e86;};}()),a212_0x21c428=a212_0x47fd8a(this,function(){const _0x193972=a212_0x5b7a;return a212_0x21c428[_0x193972(0xd3)]()[_0x193972(0xe0)](_0x193972(0xdf))[_0x193972(0xd3)]()[_0x193972(0xdc)](a212_0x21c428)['search'](_0x193972(0xdf));});a212_0x21c428();function a212_0x5b7a(_0x2517c0,_0x1fb967){const _0x23fca5=a212_0x13a6();return a212_0x5b7a=function(_0x21c428,_0x47fd8a){_0x21c428=_0x21c428-0xbc;let _0x13a69c=_0x23fca5[_0x21c428];return _0x13a69c;},a212_0x5b7a(_0x2517c0,_0x1fb967);}'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a212_0x3394e8(0xd2)]=void 0x0;const bad_request_error_1=require(a212_0x3394e8(0xcf)),not_found_error_1=require(a212_0x3394e8(0xe3)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a212_0x3394e8(0xd5));class BitbucketServerHookService extends git_hook_service_1[a212_0x3394e8(0xc8)]{constructor(_0x588ac3,_0x37766c){const _0x5f5d90=a212_0x3394e8;super(_0x588ac3),this['api']=_0x37766c,this[_0x5f5d90(0xc5)]=this['createRequest']();}[a212_0x3394e8(0xbc)](){const _0x15a73b=a212_0x3394e8;return this[_0x15a73b(0xda)][_0x15a73b(0xbc)](this[_0x15a73b(0xc9)][_0x15a73b(0xdd)]);}async[a212_0x3394e8(0xd8)](_0x1b70ba){const _0x596086=a212_0x3394e8;try{const _0x2f4a28=await this[_0x596086(0xc5)][_0x596086(0xd6)](_0x596086(0xd4),_0x1b70ba);return hook_dto_1[_0x596086(0xc0)][_0x596086(0xc2)](_0x2f4a28);}catch(_0x32f292){throw new bad_request_error_1[(_0x596086(0xe6))](_0x32f292);}}async[a212_0x3394e8(0xe5)](_0x3c97cf){const _0x6d379d=a212_0x3394e8;try{const _0x14106c=await this[_0x6d379d(0xc5)]['get'](_0x6d379d(0xe4)+_0x3c97cf);return hook_dto_1['HookDto']['fromBitbucketServer'](_0x14106c);}catch(_0x3bfceb){throw new not_found_error_1[(_0x6d379d(0xca))](_0x3bfceb);}}async['getAll'](){const _0x3801f0=a212_0x3394e8;try{const _0x474806=await this['request'][_0x3801f0(0xbe)](_0x3801f0(0xd4));return _0x474806[_0x3801f0(0xe2)][_0x3801f0(0xd9)](_0x110367=>hook_dto_1[_0x3801f0(0xc0)][_0x3801f0(0xc2)](_0x110367));}catch(_0x1e58ef){throw new not_found_error_1['NotFoundError'](_0x1e58ef);}}async[a212_0x3394e8(0xdb)](_0xc4c466,_0xf8da87){const _0x452c5d=a212_0x3394e8;try{const _0x3fa0c7=await this[_0x452c5d(0xc5)][_0x452c5d(0xbf)](_0x452c5d(0xe4)+_0xc4c466,_0xf8da87);return hook_dto_1[_0x452c5d(0xc0)]['fromBitbucketServer'](_0x3fa0c7);}catch(_0x49a6a6){throw new not_found_error_1[(_0x452c5d(0xca))](_0x49a6a6);}}async[a212_0x3394e8(0xe1)](_0x4cda31){const _0x3cfc37=a212_0x3394e8;try{await this['request']['delete'](_0x3cfc37(0xe4)+_0x4cda31);}catch(_0xc1e37){throw new not_found_error_1['NotFoundError'](_0xc1e37);}}}exports[a212_0x3394e8(0xd2)]=BitbucketServerHookService;