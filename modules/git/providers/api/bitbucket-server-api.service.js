function a164_0x15b7(){var _0x3e570f=['toString','credentials','2wPAPmE','BitbucketServerApiService','__metadata','55wxtISd','MAX_REQUEST_PER_HOUR','constructor','../types/git-provider','getHeaders','587232UqDIBC','3605679GpiYlR','4434970GGSkTD','decorate','defineProperty','GitApiService','16fQCIGu','__param','23794PWjfJn','apply','./git-api.service','search','function','830505OcXpEj','18230jioNCB','length','32fqSgYL','BitbucketServerCredentialsDto','Service','object','Inject','getUsers','(((.+)+)+)+$','metadata','get','getAuthorizationHeader','provider','__esModule','__decorate','request','3776004WHoLWs','getOwnPropertyDescriptor'];a164_0x15b7=function(){return _0x3e570f;};return a164_0x15b7();}var a164_0x352036=a164_0x1aa7;(function(_0x5f4735,_0x520282){var _0xea6da=a164_0x1aa7,_0xeb70a8=_0x5f4735();while(!![]){try{var _0x37eccf=-parseInt(_0xea6da(0x9c))/0x1*(parseInt(_0xea6da(0xac))/0x2)+-parseInt(_0xea6da(0xb1))/0x3+-parseInt(_0xea6da(0xb4))/0x4*(parseInt(_0xea6da(0xb2))/0x5)+-parseInt(_0xea6da(0xa4))/0x6+-parseInt(_0xea6da(0xa5))/0x7+-parseInt(_0xea6da(0xaa))/0x8*(parseInt(_0xea6da(0x98))/0x9)+parseInt(_0xea6da(0xa6))/0xa*(parseInt(_0xea6da(0x9f))/0xb);if(_0x37eccf===_0x520282)break;else _0xeb70a8['push'](_0xeb70a8['shift']());}catch(_0x9df15e){_0xeb70a8['push'](_0xeb70a8['shift']());}}}(a164_0x15b7,0x6a597));function a164_0x1aa7(_0x37daea,_0x4f1b4f){var _0xd4033d=a164_0x15b7();return a164_0x1aa7=function(_0x41d8fd,_0x950994){_0x41d8fd=_0x41d8fd-0x8d;var _0x15b7e0=_0xd4033d[_0x41d8fd];return _0x15b7e0;},a164_0x1aa7(_0x37daea,_0x4f1b4f);}var a164_0x950994=(function(){var _0x3f06bc=!![];return function(_0x451965,_0x310fc9){var _0x50deb8=_0x3f06bc?function(){var _0x1481f8=a164_0x1aa7;if(_0x310fc9){var _0x3b2b8e=_0x310fc9[_0x1481f8(0xad)](_0x451965,arguments);return _0x310fc9=null,_0x3b2b8e;}}:function(){};return _0x3f06bc=![],_0x50deb8;};}()),a164_0x41d8fd=a164_0x950994(this,function(){var _0x50cb63=a164_0x1aa7;return a164_0x41d8fd[_0x50cb63(0x9a)]()[_0x50cb63(0xaf)](_0x50cb63(0x90))[_0x50cb63(0x9a)]()[_0x50cb63(0xa1)](a164_0x41d8fd)[_0x50cb63(0xaf)](_0x50cb63(0x90));});a164_0x41d8fd();'use strict';var __decorate=this&&this[a164_0x352036(0x96)]||function(_0x204c68,_0x13c40d,_0x54ee7d,_0x51f78a){var _0x5b7cea=a164_0x352036,_0x13c1f6=arguments[_0x5b7cea(0xb3)],_0x3989d0=_0x13c1f6<0x3?_0x13c40d:_0x51f78a===null?_0x51f78a=Object[_0x5b7cea(0x99)](_0x13c40d,_0x54ee7d):_0x51f78a,_0x268a7c;if(typeof Reflect===_0x5b7cea(0x8d)&&typeof Reflect[_0x5b7cea(0xa7)]===_0x5b7cea(0xb0))_0x3989d0=Reflect[_0x5b7cea(0xa7)](_0x204c68,_0x13c40d,_0x54ee7d,_0x51f78a);else{for(var _0x423ccb=_0x204c68[_0x5b7cea(0xb3)]-0x1;_0x423ccb>=0x0;_0x423ccb--)if(_0x268a7c=_0x204c68[_0x423ccb])_0x3989d0=(_0x13c1f6<0x3?_0x268a7c(_0x3989d0):_0x13c1f6>0x3?_0x268a7c(_0x13c40d,_0x54ee7d,_0x3989d0):_0x268a7c(_0x13c40d,_0x54ee7d))||_0x3989d0;}return _0x13c1f6>0x3&&_0x3989d0&&Object[_0x5b7cea(0xa8)](_0x13c40d,_0x54ee7d,_0x3989d0),_0x3989d0;},__metadata=this&&this[a164_0x352036(0x9e)]||function(_0x48bc8b,_0x33db23){var _0x11e96c=a164_0x352036;if(typeof Reflect===_0x11e96c(0x8d)&&typeof Reflect[_0x11e96c(0x91)]===_0x11e96c(0xb0))return Reflect[_0x11e96c(0x91)](_0x48bc8b,_0x33db23);},__param=this&&this[a164_0x352036(0xab)]||function(_0x177425,_0x5ae4d7){return function(_0x2b7ef2,_0x10902c){_0x5ae4d7(_0x2b7ef2,_0x10902c,_0x177425);};};Object[a164_0x352036(0xa8)](exports,a164_0x352036(0x95),{'value':!![]}),exports[a164_0x352036(0x9d)]=void 0x0;const typedi_1=require('typedi'),git_api_service_1=require(a164_0x352036(0xae)),bitbucket_server_credentials_dto_1=require('../credentials/dto/bitbucket-server-credentials.dto'),providers_tokens_1=require('../providers.tokens'),git_provider_1=require(a164_0x352036(0xa2));let BitbucketServerApiService=class BitbucketServerApiService extends git_api_service_1[a164_0x352036(0xa9)]{constructor(_0x44bb25,_0x2a0abf){var _0x465b06=a164_0x352036;super(_0x44bb25,_0x2a0abf),this[_0x465b06(0xa0)]=0x2710;}[a164_0x352036(0xa3)](){var _0x198ec1=a164_0x352036;return{'Authorization':this[_0x198ec1(0x9b)][_0x198ec1(0x93)]()};}[a164_0x352036(0x8f)](){var _0x2745f4=a164_0x352036;return this[_0x2745f4(0x97)][_0x2745f4(0x92)]('users');}async['isLoggedIn'](){var _0x198e3a=a164_0x352036;return await this[_0x198e3a(0x8f)](),!![];}};BitbucketServerApiService=__decorate([(0x0,typedi_1[a164_0x352036(0xb6)])(),__param(0x0,(0x0,typedi_1[a164_0x352036(0x8e)])(providers_tokens_1['Tokens'][a164_0x352036(0x94)])),__param(0x1,(0x0,typedi_1['Inject'])(providers_tokens_1['Tokens'][a164_0x352036(0x9b)])),__metadata('design:paramtypes',[String,bitbucket_server_credentials_dto_1[a164_0x352036(0xb5)]])],BitbucketServerApiService),exports[a164_0x352036(0x9d)]=BitbucketServerApiService;