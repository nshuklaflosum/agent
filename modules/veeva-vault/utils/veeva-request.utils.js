const a317_0x413392=a317_0x1634;(function(_0x28801e,_0x207da4){const _0xa1d936=a317_0x1634,_0x1044f9=_0x28801e();while(!![]){try{const _0x444a9d=parseInt(_0xa1d936(0xe8))/0x1+parseInt(_0xa1d936(0xf9))/0x2+parseInt(_0xa1d936(0xed))/0x3*(-parseInt(_0xa1d936(0xe3))/0x4)+parseInt(_0xa1d936(0xe2))/0x5+parseInt(_0xa1d936(0x10a))/0x6+-parseInt(_0xa1d936(0xf0))/0x7+-parseInt(_0xa1d936(0xe5))/0x8;if(_0x444a9d===_0x207da4)break;else _0x1044f9['push'](_0x1044f9['shift']());}catch(_0xd76f06){_0x1044f9['push'](_0x1044f9['shift']());}}}(a317_0x14e4,0xcece0));function a317_0x1634(_0x3df571,_0x35f06b){const _0x6cac65=a317_0x14e4();return a317_0x1634=function(_0x17dc79,_0x580c80){_0x17dc79=_0x17dc79-0xe2;let _0x14e4e0=_0x6cac65[_0x17dc79];return _0x14e4e0;},a317_0x1634(_0x3df571,_0x35f06b);}const a317_0x580c80=(function(){let _0x431753=!![];return function(_0x37c9b1,_0x1f3125){const _0x26ceaa=_0x431753?function(){const _0x3b2982=a317_0x1634;if(_0x1f3125){const _0x344bb9=_0x1f3125[_0x3b2982(0xf7)](_0x37c9b1,arguments);return _0x1f3125=null,_0x344bb9;}}:function(){};return _0x431753=![],_0x26ceaa;};}()),a317_0x17dc79=a317_0x580c80(this,function(){const _0x1b871e=a317_0x1634;return a317_0x17dc79[_0x1b871e(0xee)]()[_0x1b871e(0xe6)]('(((.+)+)+)+$')[_0x1b871e(0xee)]()['constructor'](a317_0x17dc79)[_0x1b871e(0xe6)]('(((.+)+)+)+$');});a317_0x17dc79();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x16ee6e){const _0x22e585=a317_0x1634;return _0x16ee6e&&_0x16ee6e[_0x22e585(0x104)]?_0x16ee6e:{'default':_0x16ee6e};};function a317_0x14e4(){const _0x2c21ba=['1656177kelbfy','VeevaConstants','updateAccessToken','../constants/veeva.constants','axios','207gaSGVf','toString','accept','4264848bfNnGP','config','response','defineProperty','errors','default','data','apply','axios-retry','590198GYouBv','responseType','every','headers','baseURL','maxBodyLength','application/json','type','authorization','interceptors','parse','__esModule','use','VeevaResponseStatus','SUCCESS','text','arraybuffer','9315882RTdlAv','responseStatus','VEEVA_UNDEFINED_ERROR','createVeevaRequest','maxContentLength','instanceUrl','create','5811260adxdmw','50084RVbTDS','includes','18767120jPQHFI','search','../classes/errors/veeva-request-error'];a317_0x14e4=function(){return _0x2c21ba;};return a317_0x14e4();}Object[a317_0x413392(0xf3)](exports,'__esModule',{'value':!![]}),exports[a317_0x413392(0x10d)]=void 0x0;const axios_1=__importDefault(require(a317_0x413392(0xec))),axios_retry_1=__importDefault(require(a317_0x413392(0xf8))),veeva_constants_1=require(a317_0x413392(0xeb)),status_enums_1=require('../enums/status.enums'),veeva_request_error_1=require(a317_0x413392(0xe7)),DELAY=0x9c4,MAX_BODY_LENGTH=0x6400000,MAX_CONTENT_LENGTH=0x6400000,VALID_RESPONSE_TYPES_TO_PARSE=[a317_0x413392(0x109),a317_0x413392(0x108)];function createVeevaRequest(_0x2b9f6e){const _0x43a5aa=a317_0x413392,{auth:_0x22cbe0}=_0x2b9f6e,_0x4394fd=axios_1[_0x43a5aa(0xf5)][_0x43a5aa(0x110)]();return(0x0,axios_retry_1['default'])(_0x4394fd,{'retries':0x3,'retryDelay'(_0xcdf7bd){return _0xcdf7bd*DELAY;}}),_0x4394fd['interceptors']['request'][_0x43a5aa(0x105)](_0x29b95e=>{const _0x1c2ef0=_0x43a5aa;var _0x5f31fb;return(_0x5f31fb=_0x29b95e[_0x1c2ef0(0xfc)])['accept']||(_0x5f31fb[_0x1c2ef0(0xef)]=_0x1c2ef0(0xff)),_0x29b95e[_0x1c2ef0(0xfc)][_0x1c2ef0(0x101)]=''+_0x22cbe0['accessToken'],_0x29b95e[_0x1c2ef0(0xfd)]=_0x22cbe0[_0x1c2ef0(0x10f)],_0x29b95e[_0x1c2ef0(0xfe)]=MAX_BODY_LENGTH,_0x29b95e[_0x1c2ef0(0x10e)]=MAX_CONTENT_LENGTH,_0x29b95e;}),_0x4394fd[_0x43a5aa(0x102)][_0x43a5aa(0xf2)]['use'](async _0x237759=>{const _0x536c45=_0x43a5aa;var _0x5b89ba,_0x1eaca9;const _0x180123=(_0x5b89ba=_0x237759[_0x536c45(0xfc)]['content-type'])===null||_0x5b89ba===void 0x0?void 0x0:_0x5b89ba[_0x536c45(0xe4)]('application/json');if(!_0x180123)return _0x237759;const _0x32d463=VALID_RESPONSE_TYPES_TO_PARSE[_0x536c45(0xe4)](_0x237759[_0x536c45(0xf1)][_0x536c45(0xfa)]),_0x49b3ea=_0x32d463?JSON[_0x536c45(0x103)](_0x237759[_0x536c45(0xf6)]):_0x237759[_0x536c45(0xf6)];if(_0x49b3ea[_0x536c45(0x10b)]===status_enums_1[_0x536c45(0x106)][_0x536c45(0x107)])return _0x237759;const _0x4c1427=_0x49b3ea[_0x536c45(0xf4)][_0x536c45(0xfb)](_0x337b57=>_0x337b57[_0x536c45(0x100)]!==veeva_constants_1[_0x536c45(0xe9)]['INVALID_SESSION_ID']),_0x173ebb=((_0x1eaca9=_0x237759[_0x536c45(0xf1)][_0x536c45(0xfc)])===null||_0x1eaca9===void 0x0?void 0x0:_0x1eaca9['Content-Type'])==='multipart/form-data';if(_0x4c1427||_0x173ebb)return _0x237759;return await _0x2b9f6e[_0x536c45(0xea)](),_0x4394fd(_0x237759['config']);},async _0x1998fc=>{const _0x139e14=_0x43a5aa;var _0x175f36;const _0x482fc2=((_0x175f36=_0x1998fc===null||_0x1998fc===void 0x0?void 0x0:_0x1998fc[_0x139e14(0xf2)])===null||_0x175f36===void 0x0?void 0x0:_0x175f36['data'])||_0x1998fc['message']||veeva_constants_1[_0x139e14(0xe9)][_0x139e14(0x10c)];throw new veeva_request_error_1['VeevaRequestError'](_0x482fc2[_0x139e14(0xf4)]||_0x482fc2);}),_0x4394fd;}exports['createVeevaRequest']=createVeevaRequest;