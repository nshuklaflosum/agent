const a175_0x253c71=a175_0x9dbb;(function(_0x1f0374,_0x36c96c){const _0x4745a7=a175_0x9dbb,_0x2ada8e=_0x1f0374();while(!![]){try{const _0x4196a7=parseInt(_0x4745a7(0x14d))/0x1*(parseInt(_0x4745a7(0x158))/0x2)+-parseInt(_0x4745a7(0x163))/0x3*(parseInt(_0x4745a7(0x150))/0x4)+parseInt(_0x4745a7(0x159))/0x5*(-parseInt(_0x4745a7(0x169))/0x6)+-parseInt(_0x4745a7(0x151))/0x7+parseInt(_0x4745a7(0x168))/0x8+-parseInt(_0x4745a7(0x166))/0x9*(parseInt(_0x4745a7(0x155))/0xa)+-parseInt(_0x4745a7(0x14f))/0xb*(-parseInt(_0x4745a7(0x156))/0xc);if(_0x4196a7===_0x36c96c)break;else _0x2ada8e['push'](_0x2ada8e['shift']());}catch(_0x2349d2){_0x2ada8e['push'](_0x2ada8e['shift']());}}}(a175_0x4ce6,0x48a35));const a175_0x3bdead=(function(){let _0x3fdccf=!![];return function(_0xbb5079,_0xd8cb4f){const _0x4c2307=_0x3fdccf?function(){const _0x5d9c45=a175_0x9dbb;if(_0xd8cb4f){const _0x2c5af8=_0xd8cb4f[_0x5d9c45(0x153)](_0xbb5079,arguments);return _0xd8cb4f=null,_0x2c5af8;}}:function(){};return _0x3fdccf=![],_0x4c2307;};}()),a175_0x2393ab=a175_0x3bdead(this,function(){const _0x3092d4=a175_0x9dbb;return a175_0x2393ab[_0x3092d4(0x165)]()[_0x3092d4(0x152)](_0x3092d4(0x162))[_0x3092d4(0x165)]()[_0x3092d4(0x157)](a175_0x2393ab)[_0x3092d4(0x152)]('(((.+)+)+)+$');});a175_0x2393ab();'use strict';function a175_0x4ce6(){const _0x35aedc=['4icQSuS','100185AHDdAL','request','repository','createRequest','defineProperty','apiUrl','__esModule','delete','GitBranchService','(((.+)+)+)+$','345lFVrnq','getOne','toString','4087269FuqtjL','/branches','1781880LMfEEo','162RzfgOb','./git-branch.service','../../../../../core/errors/bad-request.error','/api/','/branch-utils/','154248LhVjvV','api','1139809qUjZrP','3416lWchmA','4137154MgsnFR','search','apply','replace','10KKRZrf','168jGrCEu','constructor'];a175_0x4ce6=function(){return _0x35aedc;};return a175_0x4ce6();}Object[a175_0x253c71(0x15d)](exports,a175_0x253c71(0x15f),{'value':!![]}),exports['BitbucketServerBranchService']=void 0x0;function a175_0x9dbb(_0x578844,_0x20fa57){const _0x5c1505=a175_0x4ce6();return a175_0x9dbb=function(_0x2393ab,_0x3bdead){_0x2393ab=_0x2393ab-0x14b;let _0x4ce6ff=_0x5c1505[_0x2393ab];return _0x4ce6ff;},a175_0x9dbb(_0x578844,_0x20fa57);}const bad_request_error_1=require(a175_0x253c71(0x16b)),git_branch_service_1=require(a175_0x253c71(0x16a));class BitbucketServerBranchService extends git_branch_service_1[a175_0x253c71(0x161)]{constructor(_0x1db18c,_0x26a6dc,_0x26734b){const _0x11e02e=a175_0x253c71;super(_0x1db18c,_0x26734b),this['api']=_0x26a6dc,this[_0x11e02e(0x15a)]=this['createRequest']();}[a175_0x253c71(0x15c)](){const _0x1fda33=a175_0x253c71;return this[_0x1fda33(0x14e)]['createRequest'](this['repository'][_0x1fda33(0x15e)]);}async[a175_0x253c71(0x160)](_0x4af277){const _0x39376a=a175_0x253c71;try{await this[_0x39376a(0x164)](_0x4af277);const _0x12430a=this[_0x39376a(0x15b)][_0x39376a(0x15e)][_0x39376a(0x154)](_0x39376a(0x14b),_0x39376a(0x14c));await this[_0x39376a(0x15a)][_0x39376a(0x160)](_0x12430a+_0x39376a(0x167),{'data':{'name':'refs/heads/'+_0x4af277,'dryRun':![]}});}catch(_0x5bb24c){throw new bad_request_error_1['BadRequestError'](_0x5bb24c);}}}exports['BitbucketServerBranchService']=BitbucketServerBranchService;