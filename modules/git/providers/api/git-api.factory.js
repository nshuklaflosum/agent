const a109_0x1aa07e=a109_0xee59;(function(_0x3a825d,_0x2e37d7){const _0x33a862=a109_0xee59,_0x542d8c=_0x3a825d();while(!![]){try{const _0x11a26e=-parseInt(_0x33a862(0xce))/0x1+-parseInt(_0x33a862(0xd9))/0x2+parseInt(_0x33a862(0xbf))/0x3+-parseInt(_0x33a862(0xd5))/0x4*(parseInt(_0x33a862(0xdb))/0x5)+parseInt(_0x33a862(0xca))/0x6*(parseInt(_0x33a862(0xda))/0x7)+-parseInt(_0x33a862(0xc9))/0x8+-parseInt(_0x33a862(0xc2))/0x9*(-parseInt(_0x33a862(0xd8))/0xa);if(_0x11a26e===_0x2e37d7)break;else _0x542d8c['push'](_0x542d8c['shift']());}catch(_0x49200d){_0x542d8c['push'](_0x542d8c['shift']());}}}(a109_0x59ec,0xd08f9));function a109_0xee59(_0x4f0d51,_0x3a2414){const _0x459c9e=a109_0x59ec();return a109_0xee59=function(_0x29b978,_0x4bd7e6){_0x29b978=_0x29b978-0xbe;let _0x59ec31=_0x459c9e[_0x29b978];return _0x59ec31;},a109_0xee59(_0x4f0d51,_0x3a2414);}const a109_0x4bd7e6=(function(){let _0x5ee228=!![];return function(_0x222d1e,_0x2161a0){const _0x2429fa=_0x5ee228?function(){if(_0x2161a0){const _0x29d610=_0x2161a0['apply'](_0x222d1e,arguments);return _0x2161a0=null,_0x29d610;}}:function(){};return _0x5ee228=![],_0x2429fa;};}()),a109_0x29b978=a109_0x4bd7e6(this,function(){const _0x5b3d5d=a109_0xee59;return a109_0x29b978['toString']()['search'](_0x5b3d5d(0xd0))['toString']()[_0x5b3d5d(0xc3)](a109_0x29b978)[_0x5b3d5d(0xd4)](_0x5b3d5d(0xd0));});a109_0x29b978();'use strict';Object['defineProperty'](exports,a109_0x1aa07e(0xc4),{'value':!![]}),exports['ServicesFactory']=void 0x0;const git_provider_1=require('../types/git-provider'),gitlab_api_service_1=require('./gitlab-api.service'),github_api_service_1=require(a109_0x1aa07e(0xc7)),azure_api_service_1=require(a109_0x1aa07e(0xd3)),bitbucket_api_service_1=require(a109_0x1aa07e(0xd1)),bitbucket_server_api_service_1=require(a109_0x1aa07e(0xc0)),PROVIDER_SERVICES_MAP={[git_provider_1[a109_0x1aa07e(0xd2)][a109_0x1aa07e(0xbe)]]:gitlab_api_service_1[a109_0x1aa07e(0xcf)],[git_provider_1[a109_0x1aa07e(0xd2)][a109_0x1aa07e(0xcd)]]:gitlab_api_service_1[a109_0x1aa07e(0xcf)],[git_provider_1[a109_0x1aa07e(0xd2)]['Github']]:github_api_service_1[a109_0x1aa07e(0xc6)],[git_provider_1[a109_0x1aa07e(0xd2)][a109_0x1aa07e(0xc5)]]:github_api_service_1[a109_0x1aa07e(0xc6)],[git_provider_1[a109_0x1aa07e(0xd2)][a109_0x1aa07e(0xd7)]]:bitbucket_api_service_1['BitbucketApiService'],[git_provider_1[a109_0x1aa07e(0xd2)]['BitbucketServer']]:bitbucket_server_api_service_1['BitbucketServerApiService'],[git_provider_1[a109_0x1aa07e(0xd2)]['Azure']]:azure_api_service_1[a109_0x1aa07e(0xcc)],[git_provider_1[a109_0x1aa07e(0xd2)][a109_0x1aa07e(0xc8)]]:azure_api_service_1[a109_0x1aa07e(0xcc)]};class ServicesFactory{static[a109_0x1aa07e(0xc1)](_0x348dc8,_0x3ecdd2){const _0x2ed3d=a109_0x1aa07e;if(!(_0x3ecdd2 in PROVIDER_SERVICES_MAP))throw new Error(_0x2ed3d(0xcb)+_0x3ecdd2+'\x27');return _0x348dc8['get'](PROVIDER_SERVICES_MAP[_0x3ecdd2]);}}function a109_0x59ec(){const _0x36e4e6=['5375756yztAjT','ServicesFactory','Bitbucket','3489170QcMRZg','888628FQQAON','7MzxZOR','5EHNQTk','Gitlab','4982733VYLCYf','./bitbucket-server-api.service','createFromProvider','9OTdLRm','constructor','__esModule','GithubServer','GithubApiService','./github-api.service','AzureServer','2013976MgMhrh','10196838ZrHoYV','Unknown\x20git\x20provider\x20\x27','AzureApiService','GitlabServer','815036sBbGah','GitlabApiService','(((.+)+)+)+$','./bitbucket-api.service','GitProvider','./azure-api.service','search'];a109_0x59ec=function(){return _0x36e4e6;};return a109_0x59ec();}exports[a109_0x1aa07e(0xd6)]=ServicesFactory;