const a214_0x4235fc=a214_0x25ce;function a214_0x25ce(_0x521b90,_0x42d6bd){const _0x24142b=a214_0x3d38();return a214_0x25ce=function(_0x2da642,_0x4ad7f8){_0x2da642=_0x2da642-0xf5;let _0x3d38e3=_0x24142b[_0x2da642];return _0x3d38e3;},a214_0x25ce(_0x521b90,_0x42d6bd);}(function(_0x3b6c8a,_0x31185a){const _0x4c04d5=a214_0x25ce,_0x21643f=_0x3b6c8a();while(!![]){try{const _0x2e79a0=parseInt(_0x4c04d5(0x10e))/0x1*(parseInt(_0x4c04d5(0x100))/0x2)+parseInt(_0x4c04d5(0x108))/0x3*(parseInt(_0x4c04d5(0x103))/0x4)+-parseInt(_0x4c04d5(0x11c))/0x5+-parseInt(_0x4c04d5(0x111))/0x6+parseInt(_0x4c04d5(0xf7))/0x7+parseInt(_0x4c04d5(0x11d))/0x8*(-parseInt(_0x4c04d5(0x106))/0x9)+parseInt(_0x4c04d5(0x104))/0xa*(parseInt(_0x4c04d5(0x117))/0xb);if(_0x2e79a0===_0x31185a)break;else _0x21643f['push'](_0x21643f['shift']());}catch(_0x483eaf){_0x21643f['push'](_0x21643f['shift']());}}}(a214_0x3d38,0x9ef59));const a214_0x4ad7f8=(function(){let _0x3243ea=!![];return function(_0x397685,_0x50e598){const _0x5b293e=_0x3243ea?function(){const _0x26fa04=a214_0x25ce;if(_0x50e598){const _0x169965=_0x50e598[_0x26fa04(0xf6)](_0x397685,arguments);return _0x50e598=null,_0x169965;}}:function(){};return _0x3243ea=![],_0x5b293e;};}()),a214_0x2da642=a214_0x4ad7f8(this,function(){const _0x3ebebc=a214_0x25ce;return a214_0x2da642[_0x3ebebc(0x11e)]()[_0x3ebebc(0x11a)](_0x3ebebc(0x116))['toString']()[_0x3ebebc(0xf5)](a214_0x2da642)[_0x3ebebc(0x11a)](_0x3ebebc(0x116));});function a214_0x3d38(){const _0x2abc26=['createBitbucketHookPayload','defineProperty','1080122XKHdOl','AzureServer','Azure','1532WrHLxV','12736270bUrrLA','createGithubHookPayload','117oBRwSK','repo:push','5637ujceYS','/api/v1/git/devops/git-commit','1.0-preview.1','httpRequest','createBitbucketServerHookPayload','joinURL','2wYqpbW','API_PATH_TO_GIT_COMMIT_WEBHOOK','webHooks','5131878CbzzOr','GitProvider','Bitbucket','createAzureHookPayload','web','(((.+)+)+)+$','11wqdWTm','getHookLinkFor','tfs','search','Gitlab','2096985jsWKvV','757312aTWgfa','toString','constructor','apply','581231WWmUzG','git.push','json','GithubServer','../../../shared/utils','createHookPayload','__esModule'];a214_0x3d38=function(){return _0x2abc26;};return a214_0x3d38();}a214_0x2da642();'use strict';Object[a214_0x4235fc(0xff)](exports,a214_0x4235fc(0xfd),{'value':!![]}),exports['HooksUtils']=void 0x0;const utils_1=require(a214_0x4235fc(0xfb)),git_provider_1=require('../types/git-provider');class HooksUtils{static['createGithubHookPayload'](_0x5aad11,_0x1b5ec4,_0x503566){const _0x1d5d79=a214_0x4235fc;return{'name':_0x1d5d79(0x115),'config':{'url':this['getHookLinkFor'](_0x5aad11,_0x1b5ec4,_0x503566),'content_type':_0x1d5d79(0xf9)}};}static['createGitlabHookPayload'](_0x173dbb,_0x17c02f,_0x1c8edf){const _0x455840=a214_0x4235fc;return{'url':this[_0x455840(0x118)](_0x173dbb,_0x17c02f,_0x1c8edf),'push_events':!![]};}static[a214_0x4235fc(0xfe)](_0x2f75de,_0x5940e6,_0x1faac1){const _0x4995bb=a214_0x4235fc;return{'url':this[_0x4995bb(0x118)](_0x2f75de,_0x5940e6,_0x1faac1),'active':!![],'events':[_0x4995bb(0x107)]};}static[a214_0x4235fc(0x10c)](_0x26b716,_0x4f9401,_0x1795b8){return{'url':this['getHookLinkFor'](_0x26b716,_0x4f9401,_0x1795b8),'active':!![],'events':['repo:refs_changed']};}static[a214_0x4235fc(0x114)](_0x55ba3f,_0x1b393d,_0xec93c9,_0x234ea0){const _0x2fdf65=a214_0x4235fc;return{'publisherId':_0x2fdf65(0x119),'eventType':_0x2fdf65(0xf8),'resourceVersion':_0x2fdf65(0x10a),'consumerId':_0x2fdf65(0x110),'consumerActionId':_0x2fdf65(0x10b),'publisherInputs':{'projectId':_0x1b393d},'consumerInputs':{'url':this[_0x2fdf65(0x118)](_0x55ba3f,_0xec93c9,_0x234ea0)}};}static['getHookLinkFor'](_0x434269,_0x4b6e63,_0xc7f8ba){const _0xe2efed=a214_0x4235fc;return(0x0,utils_1[_0xe2efed(0x10d)])(_0x4b6e63,this[_0xe2efed(0x10f)]+'/'+_0x434269+'/'+_0xc7f8ba);}static[a214_0x4235fc(0xfc)](_0x51fe9c,_0x1dc607,_0x3122b2,_0xc36a4f){const _0x3ca9e9=a214_0x4235fc;switch(_0x51fe9c){case git_provider_1[_0x3ca9e9(0x112)]['Github']:case git_provider_1[_0x3ca9e9(0x112)][_0x3ca9e9(0xfa)]:return this[_0x3ca9e9(0x105)](_0x51fe9c,_0x3122b2,_0xc36a4f);case git_provider_1[_0x3ca9e9(0x112)][_0x3ca9e9(0x11b)]:case git_provider_1['GitProvider']['GitlabServer']:return this['createGitlabHookPayload'](_0x51fe9c,_0x3122b2,_0xc36a4f);case git_provider_1[_0x3ca9e9(0x112)][_0x3ca9e9(0x102)]:case git_provider_1[_0x3ca9e9(0x112)][_0x3ca9e9(0x101)]:return this[_0x3ca9e9(0x114)](_0x51fe9c,_0x1dc607['getProjectId'](),_0x3122b2,_0xc36a4f);case git_provider_1[_0x3ca9e9(0x112)][_0x3ca9e9(0x113)]:return this[_0x3ca9e9(0xfe)](_0x51fe9c,_0x3122b2,_0xc36a4f);case git_provider_1[_0x3ca9e9(0x112)]['BitbucketServer']:return this[_0x3ca9e9(0x10c)](_0x51fe9c,_0x3122b2,_0xc36a4f);}}}exports['HooksUtils']=HooksUtils,HooksUtils['API_PATH_TO_GIT_COMMIT_WEBHOOK']=a214_0x4235fc(0x109);