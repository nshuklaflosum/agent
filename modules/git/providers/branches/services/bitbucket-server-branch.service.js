const a169_0x169a1e=a169_0x2aa6;(function(_0x2f5992,_0x50a4a8){const _0x27650b=a169_0x2aa6,_0x107715=_0x2f5992();while(!![]){try{const _0x1baa4d=parseInt(_0x27650b(0x133))/0x1*(-parseInt(_0x27650b(0x13a))/0x2)+parseInt(_0x27650b(0x14a))/0x3*(-parseInt(_0x27650b(0x139))/0x4)+-parseInt(_0x27650b(0x135))/0x5+-parseInt(_0x27650b(0x130))/0x6+parseInt(_0x27650b(0x13e))/0x7*(-parseInt(_0x27650b(0x14c))/0x8)+parseInt(_0x27650b(0x13f))/0x9+parseInt(_0x27650b(0x137))/0xa;if(_0x1baa4d===_0x50a4a8)break;else _0x107715['push'](_0x107715['shift']());}catch(_0x1edfe0){_0x107715['push'](_0x107715['shift']());}}}(a169_0x2259,0xa3819));const a169_0x369984=(function(){let _0x4dc9c8=!![];return function(_0x506d9b,_0x2289ba){const _0x47a150=_0x4dc9c8?function(){const _0x3e4042=a169_0x2aa6;if(_0x2289ba){const _0x68f58=_0x2289ba[_0x3e4042(0x138)](_0x506d9b,arguments);return _0x2289ba=null,_0x68f58;}}:function(){};return _0x4dc9c8=![],_0x47a150;};}()),a169_0x307b88=a169_0x369984(this,function(){const _0x43981f=a169_0x2aa6;return a169_0x307b88['toString']()[_0x43981f(0x12f)](_0x43981f(0x141))['toString']()[_0x43981f(0x14b)](a169_0x307b88)[_0x43981f(0x12f)]('(((.+)+)+)+$');});function a169_0x2aa6(_0x4a4e5f,_0x4e4aa3){const _0x4298a8=a169_0x2259();return a169_0x2aa6=function(_0x307b88,_0x369984){_0x307b88=_0x307b88-0x12f;let _0x2259cf=_0x4298a8[_0x307b88];return _0x2259cf;},a169_0x2aa6(_0x4a4e5f,_0x4e4aa3);}function a169_0x2259(){const _0x155bb5=['getOne','371kpvqKH','4867776GopNtW','./git-branch.service','(((.+)+)+)+$','/branches','BitbucketServerBranchService','replace','apiUrl','__esModule','/api/','defineProperty','createRequest','177BYlPJL','constructor','32408PsrhqC','search','3458976uhSlvB','api','BadRequestError','20533GKViVS','delete','1734740yxTyQo','request','20679680KblntX','apply','12nJfGHL','78VsEgyI','repository','refs/heads/'];a169_0x2259=function(){return _0x155bb5;};return a169_0x2259();}a169_0x307b88();'use strict';Object[a169_0x169a1e(0x148)](exports,a169_0x169a1e(0x146),{'value':!![]}),exports['BitbucketServerBranchService']=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),git_branch_service_1=require(a169_0x169a1e(0x140));class BitbucketServerBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x50c694,_0x68adbe,_0x3f21a4){const _0x42f313=a169_0x169a1e;super(_0x50c694,_0x3f21a4),this[_0x42f313(0x131)]=_0x68adbe,this[_0x42f313(0x136)]=this['createRequest']();}[a169_0x169a1e(0x149)](){const _0x46f6c9=a169_0x169a1e;return this['api'][_0x46f6c9(0x149)](this[_0x46f6c9(0x13b)][_0x46f6c9(0x145)]);}async[a169_0x169a1e(0x134)](_0x313ea0){const _0x58a6c1=a169_0x169a1e;try{await this[_0x58a6c1(0x13d)](_0x313ea0);const _0x1b85a2=this['repository'][_0x58a6c1(0x145)][_0x58a6c1(0x144)](_0x58a6c1(0x147),'/branch-utils/');await this[_0x58a6c1(0x136)]['delete'](_0x1b85a2+_0x58a6c1(0x142),{'data':{'name':_0x58a6c1(0x13c)+_0x313ea0,'dryRun':![]}});}catch(_0x48f3bd){throw new bad_request_error_1[(_0x58a6c1(0x132))](_0x48f3bd);}}}exports[a169_0x169a1e(0x143)]=BitbucketServerBranchService;