function a92_0x22a5(){const _0x22de98=['../../shared/errors/request.error','clientSecret','refreshToken','2jPDvGf','config','clientId','string','Bearer\x20','baseURL','maxContentLength','10679728tozpnn','search','9953540ZZUYRs','interceptors','toString','apply','message','298298yclBem','../../../constants','use','RequestError','createRequest','12ZUWnHE','11huhQSX','default','2608713Arzkpp','isArray','453056qsvPBz','create','maxBodyLength','__importDefault','/Flosum','(((.+)+)+)+$','error','response','namespace','51372XHwWea','authorization','isAxiosError','accept','instanceUrl','./auth.utils','FLOSUM_NAMESPACE','axios','__esModule','387755GYpeJQ','27zPIXfl','defineProperty','AuthUtils','headers','accessToken'];a92_0x22a5=function(){return _0x22de98;};return a92_0x22a5();}const a92_0xd76e24=a92_0x5d0d;(function(_0x4fdc86,_0x23f8cc){const _0x315597=a92_0x5d0d,_0xe0032a=_0x4fdc86();while(!![]){try{const _0x5ee6d9=parseInt(_0x315597(0x100))/0x1*(-parseInt(_0x315597(0xdf))/0x2)+parseInt(_0x315597(0xd7))/0x3*(parseInt(_0x315597(0xf7))/0x4)+parseInt(_0x315597(0xd6))/0x5*(-parseInt(_0x315597(0xf2))/0x6)+-parseInt(_0x315597(0xed))/0x7+-parseInt(_0x315597(0xe6))/0x8+parseInt(_0x315597(0xf5))/0x9+parseInt(_0x315597(0xe8))/0xa*(parseInt(_0x315597(0xf3))/0xb);if(_0x5ee6d9===_0x23f8cc)break;else _0xe0032a['push'](_0xe0032a['shift']());}catch(_0x12e692){_0xe0032a['push'](_0xe0032a['shift']());}}}(a92_0x22a5,0xafe95));const a92_0x3c26af=(function(){let _0x1a0412=!![];return function(_0x34bba1,_0x42edcd){const _0x4812ff=_0x1a0412?function(){const _0x1d967d=a92_0x5d0d;if(_0x42edcd){const _0x1c619c=_0x42edcd[_0x1d967d(0xeb)](_0x34bba1,arguments);return _0x42edcd=null,_0x1c619c;}}:function(){};return _0x1a0412=![],_0x4812ff;};}()),a92_0x390380=a92_0x3c26af(this,function(){const _0x97db9b=a92_0x5d0d;return a92_0x390380[_0x97db9b(0xea)]()['search']('(((.+)+)+)+$')[_0x97db9b(0xea)]()['constructor'](a92_0x390380)[_0x97db9b(0xe7)](_0x97db9b(0xfc));});function a92_0x5d0d(_0x5175fd,_0x87d7d5){const _0x5360f9=a92_0x22a5();return a92_0x5d0d=function(_0x390380,_0x3c26af){_0x390380=_0x390380-0xd4;let _0x22a5ae=_0x5360f9[_0x390380];return _0x22a5ae;},a92_0x5d0d(_0x5175fd,_0x87d7d5);}a92_0x390380();'use strict';var __importDefault=this&&this[a92_0xd76e24(0xfa)]||function(_0x38f303){const _0x4aa1b5=a92_0xd76e24;return _0x38f303&&_0x38f303[_0x4aa1b5(0xd5)]?_0x38f303:{'default':_0x38f303};};Object[a92_0xd76e24(0xd8)](exports,a92_0xd76e24(0xd5),{'value':!![]}),exports[a92_0xd76e24(0xf1)]=exports[a92_0xd76e24(0xff)]=void 0x0;const axios_1=__importDefault(require(a92_0xd76e24(0xd4))),axios_retry_1=__importDefault(require('axios-retry')),request_error_1=require(a92_0xd76e24(0xdc)),auth_utils_1=require(a92_0xd76e24(0x105)),constants_1=require(a92_0xd76e24(0xee)),DELAY=0x9c4;exports[a92_0xd76e24(0xff)]=constants_1[a92_0xd76e24(0x106)]?a92_0xd76e24(0xfb):'';function createRequest(_0x28981b){const _0x39f00a=a92_0xd76e24,_0x326b02=axios_1[_0x39f00a(0xf4)][_0x39f00a(0xf8)]();return(0x0,axios_retry_1[_0x39f00a(0xf4)])(_0x326b02,{'retries':0x3,'retryDelay'(_0x4f5f6b){return _0x4f5f6b*DELAY;}}),_0x326b02['interceptors']['request'][_0x39f00a(0xef)](_0x20533f=>{const _0x19b41e=_0x39f00a;return _0x20533f[_0x19b41e(0xda)][_0x19b41e(0x103)]='application/json',_0x20533f[_0x19b41e(0xda)][_0x19b41e(0x101)]=_0x19b41e(0xe3)+_0x28981b[_0x19b41e(0xdb)],_0x20533f['baseURL']=_0x28981b['instanceUrl'],_0x20533f[_0x19b41e(0xf9)]=0x6400000,_0x20533f[_0x19b41e(0xe5)]=0x6400000,_0x20533f;}),_0x326b02[_0x39f00a(0xe9)]['response'][_0x39f00a(0xef)](undefined,async _0x31d9fd=>{const _0x3a4c3c=_0x39f00a;var _0x107339,_0x24f9ac,_0x3410aa;if(_0x31d9fd[_0x3a4c3c(0x102)]&&_0x31d9fd[_0x3a4c3c(0xe0)]){if(((_0x107339=_0x31d9fd['response'])===null||_0x107339===void 0x0?void 0x0:_0x107339['status'])===0x191)return _0x28981b[_0x3a4c3c(0xdb)]=await auth_utils_1[_0x3a4c3c(0xd9)]['updateAccessToken'](_0x28981b['instanceUrl'],_0x28981b[_0x3a4c3c(0xde)],_0x28981b[_0x3a4c3c(0xe1)],_0x28981b[_0x3a4c3c(0xdd)]),_0x31d9fd[_0x3a4c3c(0xe0)]['headers'][_0x3a4c3c(0x101)]=_0x3a4c3c(0xe3)+_0x28981b[_0x3a4c3c(0xdb)],_0x31d9fd[_0x3a4c3c(0xe0)][_0x3a4c3c(0xe4)]=_0x28981b[_0x3a4c3c(0x104)],_0x326b02(_0x31d9fd[_0x3a4c3c(0xe0)]);}let _0x4b934d=((_0x24f9ac=_0x31d9fd===null||_0x31d9fd===void 0x0?void 0x0:_0x31d9fd[_0x3a4c3c(0xfe)])===null||_0x24f9ac===void 0x0?void 0x0:_0x24f9ac['data'])||{};Array[_0x3a4c3c(0xf6)](_0x4b934d)&&(_0x4b934d=_0x4b934d[0x0]);const _0x3754ab=_0x4b934d[_0x3a4c3c(0xec)]||typeof _0x4b934d[_0x3a4c3c(0xfd)]===_0x3a4c3c(0xe2)?_0x4b934d[_0x3a4c3c(0xfd)]:((_0x3410aa=_0x4b934d[_0x3a4c3c(0xfd)])===null||_0x3410aa===void 0x0?void 0x0:_0x3410aa['message'])||_0x31d9fd[_0x3a4c3c(0xec)];throw new request_error_1[(_0x3a4c3c(0xf0))](_0x3754ab,_0x4b934d);}),_0x326b02;}exports[a92_0xd76e24(0xf1)]=createRequest;