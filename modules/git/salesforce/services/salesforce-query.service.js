function a278_0xebaf(){const _0x45f4ec=['15MnrhfS','SalesforceError','32370756bVoFiJ','10734060WEgQrE','createSalesforceRequest','__decorate','parseSoqlString','81996UGsStm','getOwnPropertyDescriptor','decorate','553383SiaBgd','2152665viufqV','__metadata','1379384axasIR','/query/?q=','replace','./salesforce-auth.service','typedi','request','services/data/','search','records','40ElBFZl','(((.+)+)+)+$','1019386iTdjVS','FLOSUM_NAMESPACE','defineProperty','constructor','object','query','toString','__esModule','../../../../constants','getRequest','553eDLwcF','SalesforceQueryService','nextRecordsUrl','SalesforceAuthService','3xhBwZf','design:paramtypes','get','length'];a278_0xebaf=function(){return _0x45f4ec;};return a278_0xebaf();}const a278_0x5a5d98=a278_0x2af1;function a278_0x2af1(_0x5a931d,_0xb713d){const _0x3c6e83=a278_0xebaf();return a278_0x2af1=function(_0x5dc997,_0x1baaa6){_0x5dc997=_0x5dc997-0x101;let _0xebaf45=_0x3c6e83[_0x5dc997];return _0xebaf45;},a278_0x2af1(_0x5a931d,_0xb713d);}(function(_0x1b1a8e,_0x3e235e){const _0x58257b=a278_0x2af1,_0x5d7254=_0x1b1a8e();while(!![]){try{const _0x3652bf=-parseInt(_0x58257b(0x119))/0x1+-parseInt(_0x58257b(0x127))/0x2*(-parseInt(_0x58257b(0x10b))/0x3)+-parseInt(_0x58257b(0x11c))/0x4*(parseInt(_0x58257b(0x10f))/0x5)+-parseInt(_0x58257b(0x116))/0x6*(parseInt(_0x58257b(0x107))/0x7)+-parseInt(_0x58257b(0x125))/0x8*(parseInt(_0x58257b(0x11a))/0x9)+parseInt(_0x58257b(0x112))/0xa+parseInt(_0x58257b(0x111))/0xb;if(_0x3652bf===_0x3e235e)break;else _0x5d7254['push'](_0x5d7254['shift']());}catch(_0x23f9b8){_0x5d7254['push'](_0x5d7254['shift']());}}}(a278_0xebaf,0xa1ba3));const a278_0x1baaa6=(function(){let _0x1aefac=!![];return function(_0x316f6e,_0x1f8e58){const _0x4cc83c=_0x1aefac?function(){if(_0x1f8e58){const _0x2ff594=_0x1f8e58['apply'](_0x316f6e,arguments);return _0x1f8e58=null,_0x2ff594;}}:function(){};return _0x1aefac=![],_0x4cc83c;};}()),a278_0x5dc997=a278_0x1baaa6(this,function(){const _0x4a8210=a278_0x2af1;return a278_0x5dc997['toString']()[_0x4a8210(0x123)]('(((.+)+)+)+$')[_0x4a8210(0x103)]()[_0x4a8210(0x12a)](a278_0x5dc997)[_0x4a8210(0x123)](_0x4a8210(0x126));});a278_0x5dc997();'use strict';var __decorate=this&&this[a278_0x5a5d98(0x114)]||function(_0x76aa24,_0x36ee51,_0x1a70f6,_0x82a0bc){const _0x40b590=a278_0x5a5d98;var _0x4375f0=arguments[_0x40b590(0x10e)],_0x5adc71=_0x4375f0<0x3?_0x36ee51:_0x82a0bc===null?_0x82a0bc=Object[_0x40b590(0x117)](_0x36ee51,_0x1a70f6):_0x82a0bc,_0x566bf8;if(typeof Reflect===_0x40b590(0x101)&&typeof Reflect['decorate']==='function')_0x5adc71=Reflect[_0x40b590(0x118)](_0x76aa24,_0x36ee51,_0x1a70f6,_0x82a0bc);else{for(var _0x283bdc=_0x76aa24[_0x40b590(0x10e)]-0x1;_0x283bdc>=0x0;_0x283bdc--)if(_0x566bf8=_0x76aa24[_0x283bdc])_0x5adc71=(_0x4375f0<0x3?_0x566bf8(_0x5adc71):_0x4375f0>0x3?_0x566bf8(_0x36ee51,_0x1a70f6,_0x5adc71):_0x566bf8(_0x36ee51,_0x1a70f6))||_0x5adc71;}return _0x4375f0>0x3&&_0x5adc71&&Object[_0x40b590(0x129)](_0x36ee51,_0x1a70f6,_0x5adc71),_0x5adc71;},__metadata=this&&this[a278_0x5a5d98(0x11b)]||function(_0x51b036,_0x10b4d8){const _0x1f2871=a278_0x5a5d98;if(typeof Reflect===_0x1f2871(0x101)&&typeof Reflect['metadata']==='function')return Reflect['metadata'](_0x51b036,_0x10b4d8);};Object['defineProperty'](exports,a278_0x5a5d98(0x104),{'value':!![]}),exports[a278_0x5a5d98(0x108)]=void 0x0;const typedi_1=require(a278_0x5a5d98(0x120)),constants_1=require(a278_0x5a5d98(0x105)),salesforce_error_1=require('../errors/salesforce.error'),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a278_0x5a5d98(0x11f));let SalesforceQueryService=class SalesforceQueryService{constructor(_0x3cdefc){const _0x45d02e=a278_0x5a5d98;this[_0x45d02e(0x121)]=(0x0,create_request_util_1[_0x45d02e(0x113)])(_0x3cdefc);}['parseSoqlString'](_0x334bcb){const _0x7842fc=a278_0x5a5d98;return _0x334bcb[_0x7842fc(0x11e)](/\%namespace\%/g,constants_1['FLOSUM_GIT_NAMESPACE'])[_0x7842fc(0x11e)](/\%flosum_namespace\%/g,constants_1[_0x7842fc(0x128)]);}[a278_0x5a5d98(0x106)](){const _0x290f73=a278_0x5a5d98;return this[_0x290f73(0x121)];}async[a278_0x5a5d98(0x102)](_0x5a7ec1){const _0xbb0d08=a278_0x5a5d98;try{const _0x3978ba=encodeURI(this[_0xbb0d08(0x115)](_0x5a7ec1)),_0x3cd780=_0xbb0d08(0x122)+constants_1['SALESFORCE_API_VERSION']+_0xbb0d08(0x11d)+_0x3978ba,{data:_0x2021ae}=await this[_0xbb0d08(0x121)][_0xbb0d08(0x10d)](_0x3cd780),_0xf5805e=_0x2021ae[_0xbb0d08(0x124)];let _0x3ff421=_0x2021ae[_0xbb0d08(0x109)];while(_0x3ff421){const {data:_0x15c234}=await this[_0xbb0d08(0x121)][_0xbb0d08(0x10d)](_0x3ff421);_0x3ff421=_0x15c234['nextRecordsUrl'],_0xf5805e['push'](..._0x15c234[_0xbb0d08(0x124)]);}return _0xf5805e;}catch(_0x33baf6){throw new salesforce_error_1[(_0xbb0d08(0x110))](_0x33baf6);}}};SalesforceQueryService=__decorate([(0x0,typedi_1['Service'])(),__metadata(a278_0x5a5d98(0x10c),[salesforce_auth_service_1[a278_0x5a5d98(0x10a)]])],SalesforceQueryService),exports['SalesforceQueryService']=SalesforceQueryService;