const a142_0x3949e1=a142_0x570b;(function(_0xb4046b,_0x3a3da6){const _0x2c4d2d=a142_0x570b,_0x19f3c7=_0xb4046b();while(!![]){try{const _0x12dc5f=-parseInt(_0x2c4d2d(0xae))/0x1+-parseInt(_0x2c4d2d(0xa4))/0x2*(parseInt(_0x2c4d2d(0xc7))/0x3)+parseInt(_0x2c4d2d(0xb7))/0x4+-parseInt(_0x2c4d2d(0xb4))/0x5*(-parseInt(_0x2c4d2d(0xbf))/0x6)+-parseInt(_0x2c4d2d(0xb1))/0x7+-parseInt(_0x2c4d2d(0xc9))/0x8*(parseInt(_0x2c4d2d(0xa7))/0x9)+parseInt(_0x2c4d2d(0xbc))/0xa;if(_0x12dc5f===_0x3a3da6)break;else _0x19f3c7['push'](_0x19f3c7['shift']());}catch(_0x5c0dad){_0x19f3c7['push'](_0x19f3c7['shift']());}}}(a142_0x5747,0xe37d3));const a142_0x8756a9=(function(){let _0x23cc66=!![];return function(_0x568b68,_0x2f5f6d){const _0x4a7563=_0x23cc66?function(){if(_0x2f5f6d){const _0x23ba01=_0x2f5f6d['apply'](_0x568b68,arguments);return _0x2f5f6d=null,_0x23ba01;}}:function(){};return _0x23cc66=![],_0x4a7563;};}()),a142_0x32f927=a142_0x8756a9(this,function(){const _0x4b0b85=a142_0x570b;return a142_0x32f927[_0x4b0b85(0xb2)]()[_0x4b0b85(0xca)]('(((.+)+)+)+$')[_0x4b0b85(0xb2)]()[_0x4b0b85(0xc1)](a142_0x32f927)[_0x4b0b85(0xca)](_0x4b0b85(0xcb));});a142_0x32f927();'use strict';Object['defineProperty'](exports,a142_0x3949e1(0xc8),{'value':!![]}),exports[a142_0x3949e1(0xc3)]=void 0x0;const git_provider_1=require(a142_0x3949e1(0xbe)),azure_credentials_dto_1=require('./dto/azure-credentials.dto'),azure_server_credentials_dto_1=require(a142_0x3949e1(0xa5)),bitbucket_credentials_dto_1=require(a142_0x3949e1(0xac)),bitbucket_server_credentials_dto_1=require(a142_0x3949e1(0xc5)),github_credentials_dto_1=require(a142_0x3949e1(0xbb)),github_server_credentials_dto_1=require(a142_0x3949e1(0xcd)),gitlab_credentials_dto_1=require(a142_0x3949e1(0xa8)),gitlab_server_credentials_dto_1=require(a142_0x3949e1(0xb3)),class_validator_1=require(a142_0x3949e1(0xa3)),unprocessable_entity_error_1=require(a142_0x3949e1(0xba)),PROVIDER_CREDENTIALS_MAP={[git_provider_1[a142_0x3949e1(0xa9)][a142_0x3949e1(0xa2)]]:azure_credentials_dto_1[a142_0x3949e1(0xb9)],[git_provider_1[a142_0x3949e1(0xa9)][a142_0x3949e1(0xce)]]:azure_server_credentials_dto_1[a142_0x3949e1(0xa6)],[git_provider_1[a142_0x3949e1(0xa9)]['Bitbucket']]:bitbucket_credentials_dto_1[a142_0x3949e1(0xad)],[git_provider_1[a142_0x3949e1(0xa9)]['BitbucketServer']]:bitbucket_server_credentials_dto_1[a142_0x3949e1(0xc4)],[git_provider_1[a142_0x3949e1(0xa9)]['Github']]:github_credentials_dto_1[a142_0x3949e1(0xc2)],[git_provider_1[a142_0x3949e1(0xa9)][a142_0x3949e1(0xc0)]]:github_server_credentials_dto_1[a142_0x3949e1(0xb5)],[git_provider_1['GitProvider'][a142_0x3949e1(0xcc)]]:gitlab_credentials_dto_1['GitlabCredentialsDto'],[git_provider_1[a142_0x3949e1(0xa9)][a142_0x3949e1(0xaa)]]:gitlab_server_credentials_dto_1[a142_0x3949e1(0xb8)]};function a142_0x570b(_0x2c4516,_0x5937fb){const _0x4e6acd=a142_0x5747();return a142_0x570b=function(_0x32f927,_0x8756a9){_0x32f927=_0x32f927-0xa2;let _0x5747d9=_0x4e6acd[_0x32f927];return _0x5747d9;},a142_0x570b(_0x2c4516,_0x5937fb);}class CredentialsFactory{static async[a142_0x3949e1(0xb6)](_0x202e87){const _0x4a84c8=a142_0x3949e1;if(!(_0x202e87[_0x4a84c8(0xc6)]in PROVIDER_CREDENTIALS_MAP))throw new Error(_0x4a84c8(0xb0)+_0x202e87[_0x4a84c8(0xc6)]+'\x27');const _0x16d00b=PROVIDER_CREDENTIALS_MAP[_0x202e87[_0x4a84c8(0xc6)]],_0x3854fc=_0x16d00b[_0x4a84c8(0xbd)](_0x202e87[_0x4a84c8(0xaf)]),_0x1bccca=await(0x0,class_validator_1['validate'])(_0x3854fc);if(_0x1bccca[_0x4a84c8(0xab)])throw new unprocessable_entity_error_1[(_0x4a84c8(0xcf))](_0x1bccca);return _0x3854fc;}}exports[a142_0x3949e1(0xc3)]=CredentialsFactory;function a142_0x5747(){const _0x35b147=['./dto/bitbucket-server-credentials.dto','gitProvider','1035228SYVLeB','__esModule','96blIENq','search','(((.+)+)+)+$','Gitlab','./dto/github-server-credentials.dto','AzureServer','UnprocessableEntityError','Azure','class-validator','4XplUqp','./dto/azure-server-credentials.dto','AzureServerCredentialsDto','1384983oCRmgu','./dto/gitlab-credentials.dto','GitProvider','GitlabServer','length','./dto/bitbucket-credentials.dto','BitbucketCredentialsDto','736401jYZzBg','envVariables','Unknown\x20git\x20provider\x20\x27','7751492iIdBur','toString','./dto/gitlab-server-credentials.dto','25DudnFY','GithubServerCredentialsDto','createFromConnection','1384932DsxuuT','GitlabServerCredentialsDto','AzureCredentialsDto','../../../../core/errors/unprocessable-entity.error','./dto/github-credentials.dto','41075700rUEvZQ','fromConnectionEnvVariables','../types/git-provider','1030254wrPHIu','GithubServer','constructor','GithubCredentialsDto','CredentialsFactory','BitbucketServerCredentialsDto'];a142_0x5747=function(){return _0x35b147;};return a142_0x5747();}