const a157_0x1f3ebc=a157_0x4502;function a157_0x31d0(){const _0x46ef1a=['../providers.tokens','(((.+)+)+)+$','defineProperty','BitbucketApiService','10078341xiPRYj','552182kFreyS','27988NPtbVs','35KWcvuG','../credentials/dto/bitbucket-credentials.dto','/site/oauth2/access_token','https://bitbucket.org','function','1648296IOPJFw','accessTokenExpiresAt','3681dEzhnX','isLoggedIn','refreshToken','request','decorate','../types/git-provider','password','Inject','createRequest','26998410qWKSzN','GitApiService','./git-api.service','URL','headers','default','constructor','length','MAX_REQUEST_PER_HOUR','metadata','__param','Authorization','axios','post','get','now','url','search','apply','__decorate','object','__esModule','Tokens','pathname','7567536Zwkoia','design:paramtypes','__importDefault','user','grant_type=client_credentials','getOwnPropertyDescriptor','credentials','5qvQCYL','24272VTlHLB','interceptors','Service'];a157_0x31d0=function(){return _0x46ef1a;};return a157_0x31d0();}(function(_0x53a9dc,_0x40617a){const _0x223ddc=a157_0x4502,_0x36fdfb=_0x53a9dc();while(!![]){try{const _0x337516=-parseInt(_0x223ddc(0x1eb))/0x1*(-parseInt(_0x223ddc(0x1f4))/0x2)+parseInt(_0x223ddc(0x1fb))/0x3+parseInt(_0x223ddc(0x1f5))/0x4*(parseInt(_0x223ddc(0x1f6))/0x5)+-parseInt(_0x223ddc(0x1e4))/0x6+-parseInt(_0x223ddc(0x1f3))/0x7+parseInt(_0x223ddc(0x1ec))/0x8*(-parseInt(_0x223ddc(0x1fd))/0x9)+parseInt(_0x223ddc(0x1cc))/0xa;if(_0x337516===_0x40617a)break;else _0x36fdfb['push'](_0x36fdfb['shift']());}catch(_0x2fa91c){_0x36fdfb['push'](_0x36fdfb['shift']());}}}(a157_0x31d0,0xb3e0e));const a157_0x56b3fc=(function(){let _0x3749c8=!![];return function(_0x512918,_0x1d8027){const _0x423b36=_0x3749c8?function(){const _0x1af66e=a157_0x4502;if(_0x1d8027){const _0x119910=_0x1d8027[_0x1af66e(0x1de)](_0x512918,arguments);return _0x1d8027=null,_0x119910;}}:function(){};return _0x3749c8=![],_0x423b36;};}()),a157_0x2cb6a9=a157_0x56b3fc(this,function(){const _0x209c9b=a157_0x4502;return a157_0x2cb6a9['toString']()[_0x209c9b(0x1dd)](_0x209c9b(0x1f0))['toString']()[_0x209c9b(0x1d2)](a157_0x2cb6a9)['search'](_0x209c9b(0x1f0));});a157_0x2cb6a9();'use strict';var __decorate=this&&this[a157_0x1f3ebc(0x1df)]||function(_0x16beef,_0xf8983b,_0x214c9d,_0x5a4314){const _0x5a55cb=a157_0x1f3ebc;var _0x22f360=arguments['length'],_0x53b697=_0x22f360<0x3?_0xf8983b:_0x5a4314===null?_0x5a4314=Object[_0x5a55cb(0x1e9)](_0xf8983b,_0x214c9d):_0x5a4314,_0x109c00;if(typeof Reflect===_0x5a55cb(0x1e0)&&typeof Reflect[_0x5a55cb(0x201)]===_0x5a55cb(0x1fa))_0x53b697=Reflect[_0x5a55cb(0x201)](_0x16beef,_0xf8983b,_0x214c9d,_0x5a4314);else{for(var _0x1b29af=_0x16beef[_0x5a55cb(0x1d3)]-0x1;_0x1b29af>=0x0;_0x1b29af--)if(_0x109c00=_0x16beef[_0x1b29af])_0x53b697=(_0x22f360<0x3?_0x109c00(_0x53b697):_0x22f360>0x3?_0x109c00(_0xf8983b,_0x214c9d,_0x53b697):_0x109c00(_0xf8983b,_0x214c9d))||_0x53b697;}return _0x22f360>0x3&&_0x53b697&&Object[_0x5a55cb(0x1f1)](_0xf8983b,_0x214c9d,_0x53b697),_0x53b697;},__metadata=this&&this['__metadata']||function(_0x13c89a,_0x22ebed){const _0x494eff=a157_0x1f3ebc;if(typeof Reflect==='object'&&typeof Reflect[_0x494eff(0x1d5)]===_0x494eff(0x1fa))return Reflect[_0x494eff(0x1d5)](_0x13c89a,_0x22ebed);},__param=this&&this[a157_0x1f3ebc(0x1d6)]||function(_0x58fbfd,_0x398c0f){return function(_0x58e225,_0x41c343){_0x398c0f(_0x58e225,_0x41c343,_0x58fbfd);};},__importDefault=this&&this[a157_0x1f3ebc(0x1e6)]||function(_0x14b786){const _0xcef66e=a157_0x1f3ebc;return _0x14b786&&_0x14b786[_0xcef66e(0x1e1)]?_0x14b786:{'default':_0x14b786};};Object[a157_0x1f3ebc(0x1f1)](exports,'__esModule',{'value':!![]}),exports['BitbucketApiService']=void 0x0;const axios_1=__importDefault(require(a157_0x1f3ebc(0x1d8))),typedi_1=require('typedi'),git_api_service_1=require(a157_0x1f3ebc(0x1ce)),bitbucket_credentials_dto_1=require(a157_0x1f3ebc(0x1f7)),providers_tokens_1=require(a157_0x1f3ebc(0x1ef)),git_provider_1=require(a157_0x1f3ebc(0x1c8)),url_1=require(a157_0x1f3ebc(0x1dc));let BitbucketApiService=class BitbucketApiService extends git_api_service_1[a157_0x1f3ebc(0x1cd)]{constructor(_0x1f80ea,_0x4ec2bf){const _0x3d056f=a157_0x1f3ebc;super(_0x1f80ea,_0x4ec2bf),this[_0x3d056f(0x1fc)]=-0x1,this[_0x3d056f(0x1d4)]=0x3e8;}[a157_0x1f3ebc(0x1cb)](_0x5dd52c){const _0x4b69e6=a157_0x1f3ebc,_0x4a12d3=super[_0x4b69e6(0x1cb)](_0x5dd52c);return _0x4a12d3[_0x4b69e6(0x1ed)][_0x4b69e6(0x200)]['use'](async _0x5c85b5=>{const _0x1d4db0=_0x4b69e6;return await this['checkAccessToken'](),_0x5c85b5[_0x1d4db0(0x1d0)][_0x1d4db0(0x1d7)]=this['credentials']['getAuthorizationHeader'](),_0x5c85b5;}),_0x4a12d3;}async['checkAccessToken'](){const _0x313ac4=a157_0x1f3ebc;if(Date[_0x313ac4(0x1db)]()<this[_0x313ac4(0x1fc)])return;await this[_0x313ac4(0x1ff)]();}async[a157_0x1f3ebc(0x1ff)](){const _0x3955a4=a157_0x1f3ebc,{clientId:_0x4cd9b9,clientSecret:_0x163bec}=this[_0x3955a4(0x1ea)],_0x3c8efe=new url_1[(_0x3955a4(0x1cf))](_0x3955a4(0x1f9));_0x3c8efe['username']=_0x4cd9b9,_0x3c8efe[_0x3955a4(0x1c9)]=_0x163bec,_0x3c8efe[_0x3955a4(0x1e3)]=_0x3955a4(0x1f8);const {data:_0x360930}=await axios_1[_0x3955a4(0x1d1)][_0x3955a4(0x1d9)](_0x3c8efe['toString'](),_0x3955a4(0x1e8)),{expires_in:_0x2e4b16,access_token:_0x2522da}=_0x360930;this['accessTokenExpiresAt']=Date[_0x3955a4(0x1db)]()+_0x2e4b16*0x3e8,this[_0x3955a4(0x1ea)]['setAccessToken'](_0x2522da);}['getHeaders'](){return{};}['getCurrentUser'](){const _0x1ca695=a157_0x1f3ebc;return this[_0x1ca695(0x200)][_0x1ca695(0x1da)](_0x1ca695(0x1e7));}async[a157_0x1f3ebc(0x1fe)](){return await this['getCurrentUser'](),!![];}};function a157_0x4502(_0x1dd8bf,_0x32d545){const _0x4fe15c=a157_0x31d0();return a157_0x4502=function(_0x2cb6a9,_0x56b3fc){_0x2cb6a9=_0x2cb6a9-0x1c8;let _0x31d05a=_0x4fe15c[_0x2cb6a9];return _0x31d05a;},a157_0x4502(_0x1dd8bf,_0x32d545);}BitbucketApiService=__decorate([(0x0,typedi_1[a157_0x1f3ebc(0x1ee)])(),__param(0x0,(0x0,typedi_1[a157_0x1f3ebc(0x1ca)])(providers_tokens_1[a157_0x1f3ebc(0x1e2)]['provider'])),__param(0x1,(0x0,typedi_1['Inject'])(providers_tokens_1[a157_0x1f3ebc(0x1e2)][a157_0x1f3ebc(0x1ea)])),__metadata(a157_0x1f3ebc(0x1e5),[String,bitbucket_credentials_dto_1['BitbucketCredentialsDto']])],BitbucketApiService),exports[a157_0x1f3ebc(0x1f2)]=BitbucketApiService;