const a54_0x1969b5=a54_0x3130;function a54_0x5634(){const _0x37d38e=['defineProperty','typedi','(((.+)+)+)+$','refs/heads/','7572243WQNSro','GitBranchService','BitbucketServerBranchService','delete','__importDefault','5391550yjhAfV','/branches','apiUrl','BitbucketServerApiService','replace','get','18UmGWXB','10FaViSQ','../../../core/errors/bad-request.error','8448520yuOGTR','apply','request','365357NFhtGE','search','BadRequestError','createRequest','default','../../git-api/services/bitbucket-server-api.service','./git-branch.service','5pZvmem','/api/','2476604DnZeQD','repository','toString','3406467QFjQpt','377796pZpeFK','__esModule'];a54_0x5634=function(){return _0x37d38e;};return a54_0x5634();}(function(_0x1e7094,_0x511b74){const _0x32cd9b=a54_0x3130,_0x54fc36=_0x1e7094();while(!![]){try{const _0xdc4272=parseInt(_0x32cd9b(0x82))/0x1*(-parseInt(_0x32cd9b(0x7d))/0x2)+parseInt(_0x32cd9b(0x8e))/0x3+-parseInt(_0x32cd9b(0x8b))/0x4*(-parseInt(_0x32cd9b(0x89))/0x5)+-parseInt(_0x32cd9b(0x8f))/0x6+parseInt(_0x32cd9b(0x71))/0x7+parseInt(_0x32cd9b(0x7f))/0x8+parseInt(_0x32cd9b(0x7c))/0x9*(-parseInt(_0x32cd9b(0x76))/0xa);if(_0xdc4272===_0x511b74)break;else _0x54fc36['push'](_0x54fc36['shift']());}catch(_0xa8007c){_0x54fc36['push'](_0x54fc36['shift']());}}}(a54_0x5634,0xe1ae9));const a54_0x3d8ecf=(function(){let _0x27d0d8=!![];return function(_0x38b7d9,_0xe64129){const _0x44b6e4=_0x27d0d8?function(){const _0x3a1f81=a54_0x3130;if(_0xe64129){const _0xad08f3=_0xe64129[_0x3a1f81(0x80)](_0x38b7d9,arguments);return _0xe64129=null,_0xad08f3;}}:function(){};return _0x27d0d8=![],_0x44b6e4;};}()),a54_0x51ede6=a54_0x3d8ecf(this,function(){const _0x3d54cc=a54_0x3130;return a54_0x51ede6[_0x3d54cc(0x8d)]()[_0x3d54cc(0x83)](_0x3d54cc(0x6f))[_0x3d54cc(0x8d)]()['constructor'](a54_0x51ede6)[_0x3d54cc(0x83)](_0x3d54cc(0x6f));});function a54_0x3130(_0x3a9396,_0x5e4c8e){const _0x15469d=a54_0x5634();return a54_0x3130=function(_0x51ede6,_0x3d8ecf){_0x51ede6=_0x51ede6-0x6e;let _0x56344f=_0x15469d[_0x51ede6];return _0x56344f;},a54_0x3130(_0x3a9396,_0x5e4c8e);}a54_0x51ede6();'use strict';var __importDefault=this&&this[a54_0x1969b5(0x75)]||function(_0x41610f){return _0x41610f&&_0x41610f['__esModule']?_0x41610f:{'default':_0x41610f};};Object[a54_0x1969b5(0x91)](exports,a54_0x1969b5(0x90),{'value':!![]}),exports[a54_0x1969b5(0x73)]=void 0x0;const bad_request_error_1=require(a54_0x1969b5(0x7e)),typedi_1=__importDefault(require(a54_0x1969b5(0x6e))),bitbucket_server_api_service_1=require(a54_0x1969b5(0x87)),git_branch_service_1=require(a54_0x1969b5(0x88));class BitbucketServerBranchService extends git_branch_service_1[a54_0x1969b5(0x72)]{constructor(_0x3bf515){const _0x2638ce=a54_0x1969b5;super(_0x3bf515),this[_0x2638ce(0x81)]=this[_0x2638ce(0x85)]();}[a54_0x1969b5(0x85)](){const _0x1f6d42=a54_0x1969b5,_0x295e7f=typedi_1[_0x1f6d42(0x86)][_0x1f6d42(0x7b)](bitbucket_server_api_service_1[_0x1f6d42(0x79)]);return _0x295e7f[_0x1f6d42(0x85)](this['repository'][_0x1f6d42(0x78)]);}async[a54_0x1969b5(0x74)](_0x35fca7){const _0x6c1548=a54_0x1969b5;try{await this['getOne'](_0x35fca7);const _0x58f5d1=this[_0x6c1548(0x8c)][_0x6c1548(0x78)][_0x6c1548(0x7a)](_0x6c1548(0x8a),'/branch-utils/');await this[_0x6c1548(0x81)][_0x6c1548(0x74)](_0x58f5d1+_0x6c1548(0x77),{'data':{'name':_0x6c1548(0x70)+_0x35fca7,'dryRun':![]}});}catch(_0x4f0857){throw new bad_request_error_1[(_0x6c1548(0x84))](_0x4f0857);}}}exports[a54_0x1969b5(0x73)]=BitbucketServerBranchService;