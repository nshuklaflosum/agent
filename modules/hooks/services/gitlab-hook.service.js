const a82_0x219468=a82_0x4c17;(function(_0x1936c0,_0x334eef){const _0x390ac3=a82_0x4c17,_0x14506f=_0x1936c0();while(!![]){try{const _0x518cc0=-parseInt(_0x390ac3(0x17e))/0x1*(-parseInt(_0x390ac3(0x16e))/0x2)+-parseInt(_0x390ac3(0x164))/0x3*(parseInt(_0x390ac3(0x16f))/0x4)+-parseInt(_0x390ac3(0x177))/0x5*(-parseInt(_0x390ac3(0x188))/0x6)+-parseInt(_0x390ac3(0x173))/0x7+parseInt(_0x390ac3(0x185))/0x8*(parseInt(_0x390ac3(0x17b))/0x9)+-parseInt(_0x390ac3(0x180))/0xa*(parseInt(_0x390ac3(0x16a))/0xb)+parseInt(_0x390ac3(0x176))/0xc*(parseInt(_0x390ac3(0x16d))/0xd);if(_0x518cc0===_0x334eef)break;else _0x14506f['push'](_0x14506f['shift']());}catch(_0x2ac19a){_0x14506f['push'](_0x14506f['shift']());}}}(a82_0x4dcd,0x9511c));function a82_0x4c17(_0x1c660b,_0x4808dd){const _0x2c2e5c=a82_0x4dcd();return a82_0x4c17=function(_0x548f26,_0x536c7b){_0x548f26=_0x548f26-0x15f;let _0x4dcdba=_0x2c2e5c[_0x548f26];return _0x4dcdba;},a82_0x4c17(_0x1c660b,_0x4808dd);}const a82_0x536c7b=(function(){let _0x2e61e3=!![];return function(_0xd53314,_0x1419a5){const _0x5960d8=_0x2e61e3?function(){const _0x225fb1=a82_0x4c17;if(_0x1419a5){const _0x183778=_0x1419a5[_0x225fb1(0x179)](_0xd53314,arguments);return _0x1419a5=null,_0x183778;}}:function(){};return _0x2e61e3=![],_0x5960d8;};}()),a82_0x548f26=a82_0x536c7b(this,function(){const _0x3bbe97=a82_0x4c17;return a82_0x548f26[_0x3bbe97(0x182)]()['search'](_0x3bbe97(0x169))['toString']()[_0x3bbe97(0x165)](a82_0x548f26)[_0x3bbe97(0x16c)](_0x3bbe97(0x169));});a82_0x548f26();'use strict';var __importDefault=this&&this[a82_0x219468(0x163)]||function(_0x571847){return _0x571847&&_0x571847['__esModule']?_0x571847:{'default':_0x571847};};Object['defineProperty'](exports,a82_0x219468(0x174),{'value':!![]}),exports[a82_0x219468(0x168)]=void 0x0;function a82_0x4dcd(){const _0x439f23=['9630AJFtDs','default','toString','getOne','update','1634712Kctziu','put','delete','1740XyVYnL','fromGitlab','hooks','request','GitlabApiService','__importDefault','3EDlSRm','constructor','typedi','map','GitlabHookService','(((.+)+)+)+$','7711HaPcoZ','NotFoundError','search','10413exhxKt','897658MaupYx','3452440vrWoiV','HookDto','repository','createRequest','5135060RCwMhz','__esModule','apiUrl','27396vsDpuo','6905NhcQOK','hooks/','apply','get','9tYaeqz','post','../../../core/errors/bad-request.error','1hkpdar','create'];a82_0x4dcd=function(){return _0x439f23;};return a82_0x4dcd();}const bad_request_error_1=require(a82_0x219468(0x17d)),not_found_error_1=require('../../../core/errors/not-found.error'),gitlab_api_service_1=require('../../git-api/services/gitlab-api.service'),typedi_1=__importDefault(require(a82_0x219468(0x166))),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require('./git-hook.service');class GitlabHookService extends git_hook_service_1['GitHookService']{constructor(_0x45e4db){const _0x48504a=a82_0x219468;super(_0x45e4db),this['request']=this[_0x48504a(0x172)]();}[a82_0x219468(0x172)](){const _0x188f1f=a82_0x219468,_0xb62d00=typedi_1[_0x188f1f(0x181)][_0x188f1f(0x17a)](gitlab_api_service_1[_0x188f1f(0x162)]);return _0xb62d00[_0x188f1f(0x172)](this[_0x188f1f(0x171)][_0x188f1f(0x175)]);}async[a82_0x219468(0x17f)](_0x432558){const _0x1d55c4=a82_0x219468;try{const _0x4c72de=await this[_0x1d55c4(0x161)][_0x1d55c4(0x17c)](_0x1d55c4(0x160),_0x432558);return hook_dto_1[_0x1d55c4(0x170)][_0x1d55c4(0x15f)](_0x4c72de);}catch(_0x862c17){throw new bad_request_error_1['BadRequestError'](_0x862c17);}}async[a82_0x219468(0x183)](_0x1f95b3){const _0x42de96=a82_0x219468;try{const _0x5ebdab=await this[_0x42de96(0x161)][_0x42de96(0x17a)]('hooks/'+_0x1f95b3);return hook_dto_1[_0x42de96(0x170)]['fromGitlab'](_0x5ebdab);}catch(_0x2d7eb5){throw new not_found_error_1[(_0x42de96(0x16b))](_0x2d7eb5);}}async['getAll'](){const _0x4897eb=a82_0x219468;try{const _0x1e73e3=await this['request'][_0x4897eb(0x17a)](_0x4897eb(0x160));return _0x1e73e3[_0x4897eb(0x167)](_0x133852=>hook_dto_1[_0x4897eb(0x170)]['fromGitlab'](_0x133852));}catch(_0x3b9a72){throw new not_found_error_1['NotFoundError'](_0x3b9a72);}}async[a82_0x219468(0x184)](_0x4d3ce7,_0x191878){const _0x50bc63=a82_0x219468;try{const _0x52ba79=await this[_0x50bc63(0x161)][_0x50bc63(0x186)](_0x50bc63(0x178)+_0x4d3ce7,_0x191878);return hook_dto_1[_0x50bc63(0x170)][_0x50bc63(0x15f)](_0x52ba79);}catch(_0x4ab945){throw new not_found_error_1[(_0x50bc63(0x16b))](_0x4ab945);}}async[a82_0x219468(0x187)](_0xaa4d1c){const _0x3af35b=a82_0x219468;try{await this['request'][_0x3af35b(0x187)]('hooks/'+_0xaa4d1c);}catch(_0x3f7b5f){throw new not_found_error_1[(_0x3af35b(0x16b))](_0x3f7b5f);}}}exports[a82_0x219468(0x168)]=GitlabHookService;