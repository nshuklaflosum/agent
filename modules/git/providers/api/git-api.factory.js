const a126_0x7809d5=a126_0x4903;(function(_0x582adb,_0x2e1a33){const _0x418344=a126_0x4903,_0x4610fe=_0x582adb();while(!![]){try{const _0x1de4b2=-parseInt(_0x418344(0xc9))/0x1+-parseInt(_0x418344(0xc6))/0x2+parseInt(_0x418344(0xbc))/0x3*(parseInt(_0x418344(0xba))/0x4)+parseInt(_0x418344(0xd2))/0x5+parseInt(_0x418344(0xc5))/0x6+parseInt(_0x418344(0xcb))/0x7*(-parseInt(_0x418344(0xc0))/0x8)+parseInt(_0x418344(0xd4))/0x9;if(_0x1de4b2===_0x2e1a33)break;else _0x4610fe['push'](_0x4610fe['shift']());}catch(_0x2864d0){_0x4610fe['push'](_0x4610fe['shift']());}}}(a126_0x3280,0x2def2));function a126_0x3280(){const _0x386fad=['../types/git-provider','GithubServer','__esModule','GitlabServer','BitbucketServerApiService','BitbucketServer','237072ghcCIH','search','6SGBSpu','AzureServer','createFromProvider','toString','248tLBiCO','GithubApiService','./bitbucket-api.service','(((.+)+)+)+$','GitlabApiService','820824pCmusZ','354784oAOMVF','GitProvider','Gitlab','32535JKwAhH','Unknown\x20git\x20provider\x20\x27','5964InSpNy','get','apply','./gitlab-api.service','ServicesFactory','./github-api.service','AzureApiService','415170XtBOjS','defineProperty','774999UlrCGw','BitbucketApiService','Bitbucket'];a126_0x3280=function(){return _0x386fad;};return a126_0x3280();}function a126_0x4903(_0x351566,_0x5dcc75){const _0x3160c0=a126_0x3280();return a126_0x4903=function(_0x31851c,_0x24f55){_0x31851c=_0x31851c-0xb6;let _0x3280e1=_0x3160c0[_0x31851c];return _0x3280e1;},a126_0x4903(_0x351566,_0x5dcc75);}const a126_0x24f55=(function(){let _0x5de485=!![];return function(_0x4e5380,_0x3b50d0){const _0x924a71=_0x5de485?function(){const _0x1ae035=a126_0x4903;if(_0x3b50d0){const _0x3ac512=_0x3b50d0[_0x1ae035(0xcd)](_0x4e5380,arguments);return _0x3b50d0=null,_0x3ac512;}}:function(){};return _0x5de485=![],_0x924a71;};}()),a126_0x31851c=a126_0x24f55(this,function(){const _0x340631=a126_0x4903;return a126_0x31851c['toString']()['search'](_0x340631(0xc3))[_0x340631(0xbf)]()['constructor'](a126_0x31851c)[_0x340631(0xbb)](_0x340631(0xc3));});a126_0x31851c();'use strict';Object[a126_0x7809d5(0xd3)](exports,a126_0x7809d5(0xb6),{'value':!![]}),exports[a126_0x7809d5(0xcf)]=void 0x0;const git_provider_1=require(a126_0x7809d5(0xd7)),gitlab_api_service_1=require(a126_0x7809d5(0xce)),github_api_service_1=require(a126_0x7809d5(0xd0)),azure_api_service_1=require('./azure-api.service'),bitbucket_api_service_1=require(a126_0x7809d5(0xc2)),bitbucket_server_api_service_1=require('./bitbucket-server-api.service'),PROVIDER_SERVICES_MAP={[git_provider_1[a126_0x7809d5(0xc7)][a126_0x7809d5(0xc8)]]:gitlab_api_service_1[a126_0x7809d5(0xc4)],[git_provider_1['GitProvider'][a126_0x7809d5(0xb7)]]:gitlab_api_service_1['GitlabApiService'],[git_provider_1[a126_0x7809d5(0xc7)]['Github']]:github_api_service_1[a126_0x7809d5(0xc1)],[git_provider_1['GitProvider'][a126_0x7809d5(0xd8)]]:github_api_service_1['GithubApiService'],[git_provider_1['GitProvider'][a126_0x7809d5(0xd6)]]:bitbucket_api_service_1[a126_0x7809d5(0xd5)],[git_provider_1[a126_0x7809d5(0xc7)][a126_0x7809d5(0xb9)]]:bitbucket_server_api_service_1[a126_0x7809d5(0xb8)],[git_provider_1[a126_0x7809d5(0xc7)]['Azure']]:azure_api_service_1[a126_0x7809d5(0xd1)],[git_provider_1[a126_0x7809d5(0xc7)][a126_0x7809d5(0xbd)]]:azure_api_service_1[a126_0x7809d5(0xd1)]};class ServicesFactory{static[a126_0x7809d5(0xbe)](_0x35e9f9,_0x433276){const _0x4582b2=a126_0x7809d5;if(!(_0x433276 in PROVIDER_SERVICES_MAP))throw new Error(_0x4582b2(0xca)+_0x433276+'\x27');return _0x35e9f9[_0x4582b2(0xcc)](PROVIDER_SERVICES_MAP[_0x433276]);}}exports[a126_0x7809d5(0xcf)]=ServicesFactory;