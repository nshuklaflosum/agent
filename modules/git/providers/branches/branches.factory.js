function a170_0x31d1(){const _0x3a6574=['toString','GithubBranchService','createFromContext','constructor','9794iaOGpG','BitbucketServerBranchService','BitbucketServer','BranchesFactory','358006sqKtuT','5942952vPLzOv','Bitbucket','AzureServer','BitbucketBranchService','./services/bitbucket-server-branch.service','Azure','../providers.tokens','12rhCCzC','__esModule','GitlabServer','./services/bitbucket-branch.service','Github','AzureBranchService','search','(((.+)+)+)+$','1166395YVmrVc','defineProperty','../types/git-provider','8WEAWyW','GitProvider','container','229IhJnIv','./services/azure-branch.service','3QuCxhA','get','380YzNHTS','5572956PsGgNC','8190917iNuggP','63137712ssLuIB','Gitlab','GitlabBranchService'];a170_0x31d1=function(){return _0x3a6574;};return a170_0x31d1();}const a170_0x1680b9=a170_0x7cff;(function(_0x481f41,_0x169f3a){const _0x147931=a170_0x7cff,_0x3b1e8c=_0x481f41();while(!![]){try{const _0x4d7d10=-parseInt(_0x147931(0x10a))/0x1*(-parseInt(_0x147931(0xf0))/0x2)+parseInt(_0x147931(0x10c))/0x3*(parseInt(_0x147931(0xe7))/0x4)+parseInt(_0x147931(0x104))/0x5*(parseInt(_0x147931(0xfc))/0x6)+-parseInt(_0x147931(0xe8))/0x7*(-parseInt(_0x147931(0x107))/0x8)+parseInt(_0x147931(0xf5))/0x9+parseInt(_0x147931(0x10e))/0xa*(parseInt(_0x147931(0xf4))/0xb)+-parseInt(_0x147931(0xe9))/0xc;if(_0x4d7d10===_0x169f3a)break;else _0x3b1e8c['push'](_0x3b1e8c['shift']());}catch(_0x50f65b){_0x3b1e8c['push'](_0x3b1e8c['shift']());}}}(a170_0x31d1,0xc01fd));const a170_0x42a079=(function(){let _0x7a16fd=!![];return function(_0x23f711,_0x170d68){const _0xd9a4a7=_0x7a16fd?function(){if(_0x170d68){const _0x411c95=_0x170d68['apply'](_0x23f711,arguments);return _0x170d68=null,_0x411c95;}}:function(){};return _0x7a16fd=![],_0xd9a4a7;};}()),a170_0x2dbfb8=a170_0x42a079(this,function(){const _0x51081d=a170_0x7cff;return a170_0x2dbfb8['toString']()[_0x51081d(0x102)](_0x51081d(0x103))[_0x51081d(0xec)]()[_0x51081d(0xef)](a170_0x2dbfb8)[_0x51081d(0x102)](_0x51081d(0x103));});a170_0x2dbfb8();'use strict';Object[a170_0x1680b9(0x105)](exports,a170_0x1680b9(0xfd),{'value':!![]}),exports[a170_0x1680b9(0xf3)]=void 0x0;function a170_0x7cff(_0x5e06b0,_0x4f4d0a){const _0x1229be=a170_0x31d1();return a170_0x7cff=function(_0x2dbfb8,_0x42a079){_0x2dbfb8=_0x2dbfb8-0xe7;let _0x31d165=_0x1229be[_0x2dbfb8];return _0x31d165;},a170_0x7cff(_0x5e06b0,_0x4f4d0a);}const git_provider_1=require(a170_0x1680b9(0x106)),azure_branch_service_1=require(a170_0x1680b9(0x10b)),bitbucket_branch_service_1=require(a170_0x1680b9(0xff)),bitbucket_server_branch_service_1=require(a170_0x1680b9(0xf9)),github_branch_service_1=require('./services/github-branch.service'),gitlab_branch_service_1=require('./services/gitlab-branch.service'),providers_tokens_1=require(a170_0x1680b9(0xfb)),PROVIDER_BRANCHES_MAP={[git_provider_1['GitProvider'][a170_0x1680b9(0xfa)]]:azure_branch_service_1[a170_0x1680b9(0x101)],[git_provider_1[a170_0x1680b9(0x108)][a170_0x1680b9(0xf7)]]:azure_branch_service_1[a170_0x1680b9(0x101)],[git_provider_1[a170_0x1680b9(0x108)][a170_0x1680b9(0xf6)]]:bitbucket_branch_service_1[a170_0x1680b9(0xf8)],[git_provider_1[a170_0x1680b9(0x108)][a170_0x1680b9(0xf2)]]:bitbucket_server_branch_service_1[a170_0x1680b9(0xf1)],[git_provider_1[a170_0x1680b9(0x108)][a170_0x1680b9(0x100)]]:github_branch_service_1[a170_0x1680b9(0xed)],[git_provider_1[a170_0x1680b9(0x108)]['GithubServer']]:github_branch_service_1['GithubBranchService'],[git_provider_1[a170_0x1680b9(0x108)][a170_0x1680b9(0xea)]]:gitlab_branch_service_1['GitlabBranchService'],[git_provider_1[a170_0x1680b9(0x108)][a170_0x1680b9(0xfe)]]:gitlab_branch_service_1[a170_0x1680b9(0xeb)]};class BranchesFactory{static async[a170_0x1680b9(0xee)](_0x4f1a2c){const _0x2ab501=a170_0x1680b9;return _0x4f1a2c[_0x2ab501(0x109)][_0x2ab501(0x10d)](PROVIDER_BRANCHES_MAP[_0x4f1a2c['container']['get'](providers_tokens_1['Tokens']['provider'])]);}}exports[a170_0x1680b9(0xf3)]=BranchesFactory;