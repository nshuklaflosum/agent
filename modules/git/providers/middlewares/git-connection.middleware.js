const a189_0x3ecb2e=a189_0x2d17;function a189_0x2d17(_0x332e66,_0x2e0a60){const _0x128b3f=a189_0x74f7();return a189_0x2d17=function(_0x416488,_0x2b15db){_0x416488=_0x416488-0x77;let _0x74f7d9=_0x128b3f[_0x416488];return _0x74f7d9;},a189_0x2d17(_0x332e66,_0x2e0a60);}(function(_0x42e037,_0x32b01e){const _0x48fcc1=a189_0x2d17,_0x4c5690=_0x42e037();while(!![]){try{const _0x295341=parseInt(_0x48fcc1(0x8c))/0x1*(parseInt(_0x48fcc1(0xa5))/0x2)+-parseInt(_0x48fcc1(0x8b))/0x3*(-parseInt(_0x48fcc1(0x81))/0x4)+-parseInt(_0x48fcc1(0x79))/0x5+parseInt(_0x48fcc1(0xa1))/0x6*(parseInt(_0x48fcc1(0x86))/0x7)+parseInt(_0x48fcc1(0x88))/0x8*(-parseInt(_0x48fcc1(0xa2))/0x9)+-parseInt(_0x48fcc1(0x82))/0xa*(parseInt(_0x48fcc1(0x94))/0xb)+-parseInt(_0x48fcc1(0x9b))/0xc;if(_0x295341===_0x32b01e)break;else _0x4c5690['push'](_0x4c5690['shift']());}catch(_0x2eb9ed){_0x4c5690['push'](_0x4c5690['shift']());}}}(a189_0x74f7,0x76747));function a189_0x74f7(){const _0x4aa908=['createFromProvider','GitConnectionMiddleware','25652BvKPyC','2752010yUiBDZ','(((.+)+)+)+$','Tokens','metadata','3138632IkwFie','fetchConnection','7016MUrtHj','../../salesforce/services/salesforce.service','apply','297EIvWCr','5iPOrZY','headers','x-connection-id','constructor','SalesforceService','__metadata','toString','object','33CNqBGZ','getOwnPropertyDescriptor','decorate','../credentials/credentials.factory','credentials','gitProvider','provider','1329840NuvoRK','__decorate','CredentialsFactory','__esModule','before','search','6voYkym','4419iCBbiB','ERR_UNKNOWN_GIT_SERVICE','salesforceService','329674eOZVKg','defineProperty','context','276135ggZGbW','../../../../core','createFromConnection','container','set','function'];a189_0x74f7=function(){return _0x4aa908;};return a189_0x74f7();}const a189_0x2b15db=(function(){let _0x342ada=!![];return function(_0x3b9efa,_0xb73077){const _0x2d4efa=_0x342ada?function(){const _0x277272=a189_0x2d17;if(_0xb73077){const _0x59a4b5=_0xb73077[_0x277272(0x8a)](_0x3b9efa,arguments);return _0xb73077=null,_0x59a4b5;}}:function(){};return _0x342ada=![],_0x2d4efa;};}()),a189_0x416488=a189_0x2b15db(this,function(){const _0x48f032=a189_0x2d17;return a189_0x416488[_0x48f032(0x92)]()[_0x48f032(0xa0)]('(((.+)+)+)+$')[_0x48f032(0x92)]()[_0x48f032(0x8f)](a189_0x416488)[_0x48f032(0xa0)](_0x48f032(0x83));});a189_0x416488();'use strict';var __decorate=this&&this[a189_0x3ecb2e(0x9c)]||function(_0x36ae50,_0x5c8436,_0x5c967a,_0x4ff177){const _0x1bde1b=a189_0x3ecb2e;var _0x4857ce=arguments['length'],_0x4a0396=_0x4857ce<0x3?_0x5c8436:_0x4ff177===null?_0x4ff177=Object[_0x1bde1b(0x95)](_0x5c8436,_0x5c967a):_0x4ff177,_0x2d725c;if(typeof Reflect===_0x1bde1b(0x93)&&typeof Reflect[_0x1bde1b(0x96)]===_0x1bde1b(0x7e))_0x4a0396=Reflect[_0x1bde1b(0x96)](_0x36ae50,_0x5c8436,_0x5c967a,_0x4ff177);else{for(var _0x5b1a00=_0x36ae50['length']-0x1;_0x5b1a00>=0x0;_0x5b1a00--)if(_0x2d725c=_0x36ae50[_0x5b1a00])_0x4a0396=(_0x4857ce<0x3?_0x2d725c(_0x4a0396):_0x4857ce>0x3?_0x2d725c(_0x5c8436,_0x5c967a,_0x4a0396):_0x2d725c(_0x5c8436,_0x5c967a))||_0x4a0396;}return _0x4857ce>0x3&&_0x4a0396&&Object[_0x1bde1b(0x77)](_0x5c8436,_0x5c967a,_0x4a0396),_0x4a0396;},__metadata=this&&this[a189_0x3ecb2e(0x91)]||function(_0x8fed0b,_0x430b0c){const _0x2d08b9=a189_0x3ecb2e;if(typeof Reflect===_0x2d08b9(0x93)&&typeof Reflect[_0x2d08b9(0x85)]===_0x2d08b9(0x7e))return Reflect[_0x2d08b9(0x85)](_0x8fed0b,_0x430b0c);};Object[a189_0x3ecb2e(0x77)](exports,a189_0x3ecb2e(0x9e),{'value':!![]}),exports[a189_0x3ecb2e(0x80)]=void 0x0;const core_1=require(a189_0x3ecb2e(0x7a)),salesforce_service_1=require(a189_0x3ecb2e(0x89)),providers_tokens_1=require('../providers.tokens'),credentials_factory_1=require(a189_0x3ecb2e(0x97)),git_api_factory_1=require('../api/git-api.factory'),errors_1=require('../../../../constants/errors');let GitConnectionMiddleware=class GitConnectionMiddleware{constructor(_0xa4653e){this['salesforceService']=_0xa4653e;}async['handle'](_0x1df432,_0x98b1fa){const _0xcb4acc=a189_0x3ecb2e,_0x1f8289=_0x1df432[_0xcb4acc(0x8d)][_0xcb4acc(0x8e)]||null;if(!_0x1f8289||!_0x1df432['context'][_0xcb4acc(0x7c)])throw new Error(errors_1['ERR_UNKNOWN_GIT_SERVICE']);const _0x75b934=await this[_0xcb4acc(0xa4)][_0xcb4acc(0x87)](_0x1f8289);if(!_0x75b934)throw new Error(errors_1[_0xcb4acc(0xa3)]);const _0x456092=await credentials_factory_1[_0xcb4acc(0x9d)][_0xcb4acc(0x7b)](_0x75b934),_0x24b602=_0x1df432[_0xcb4acc(0x78)]['container'];_0x24b602[_0xcb4acc(0x7d)](providers_tokens_1[_0xcb4acc(0x84)][_0xcb4acc(0x9a)],_0x75b934['gitProvider']),_0x24b602['set'](providers_tokens_1[_0xcb4acc(0x84)][_0xcb4acc(0x98)],_0x456092),_0x1df432[_0xcb4acc(0x78)][_0xcb4acc(0x9a)]=git_api_factory_1['ServicesFactory'][_0xcb4acc(0x7f)](_0x24b602,_0x75b934[_0xcb4acc(0x99)]);}};GitConnectionMiddleware=__decorate([(0x0,core_1['Middleware'])(a189_0x3ecb2e(0x9f)),__metadata('design:paramtypes',[salesforce_service_1[a189_0x3ecb2e(0x90)]])],GitConnectionMiddleware),exports[a189_0x3ecb2e(0x80)]=GitConnectionMiddleware;