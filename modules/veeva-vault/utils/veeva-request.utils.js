const a369_0xedd956=a369_0x176e;(function(_0x253121,_0x573de3){const _0x7240ad=a369_0x176e,_0x4d7a75=_0x253121();while(!![]){try{const _0x2cbe2d=parseInt(_0x7240ad(0x12e))/0x1*(-parseInt(_0x7240ad(0x151))/0x2)+parseInt(_0x7240ad(0x12d))/0x3*(parseInt(_0x7240ad(0x138))/0x4)+parseInt(_0x7240ad(0x12c))/0x5*(-parseInt(_0x7240ad(0x150))/0x6)+-parseInt(_0x7240ad(0x14a))/0x7*(parseInt(_0x7240ad(0x129))/0x8)+-parseInt(_0x7240ad(0x153))/0x9+parseInt(_0x7240ad(0x126))/0xa+-parseInt(_0x7240ad(0x12a))/0xb*(-parseInt(_0x7240ad(0x142))/0xc);if(_0x2cbe2d===_0x573de3)break;else _0x4d7a75['push'](_0x4d7a75['shift']());}catch(_0x54b0c9){_0x4d7a75['push'](_0x4d7a75['shift']());}}}(a369_0x185c,0x8e61f));const a369_0x1bfefa=(function(){let _0x45206f=!![];return function(_0x3bb144,_0xd0f946){const _0x39fcab=_0x45206f?function(){if(_0xd0f946){const _0x4859bc=_0xd0f946['apply'](_0x3bb144,arguments);return _0xd0f946=null,_0x4859bc;}}:function(){};return _0x45206f=![],_0x39fcab;};}()),a369_0x160b0c=a369_0x1bfefa(this,function(){const _0x181a01=a369_0x176e;return a369_0x160b0c[_0x181a01(0x154)]()[_0x181a01(0x14e)](_0x181a01(0x14f))[_0x181a01(0x154)]()[_0x181a01(0x144)](a369_0x160b0c)[_0x181a01(0x14e)](_0x181a01(0x14f));});function a369_0x176e(_0x4eeaba,_0x3fea84){const _0x51706b=a369_0x185c();return a369_0x176e=function(_0x160b0c,_0x1bfefa){_0x160b0c=_0x160b0c-0x120;let _0x185c3d=_0x51706b[_0x160b0c];return _0x185c3d;},a369_0x176e(_0x4eeaba,_0x3fea84);}function a369_0x185c(){const _0x205a11=['content-type','application/json','2575016JlsYhb','11yiGRIf','multipart/form-data','370DwzRdQ','631776UrGjFA','13tzfSGC','default','createVeevaRequest','INVALID_SESSION_ID','../classes/errors/veeva-request-error','startsWith','message','VEEVA_UNDEFINED_ERROR','arraybuffer','../enums/status.enums','16xNBqBv','VeevaRequestError','SUCCESS','response','request','text','defineProperty','headers','updateAccessToken','VeevaResponseStatus','28362924OkMzvg','axios','constructor','VeevaConstants','interceptors','responseStatus','every','maxContentLength','7XdaSzI','includes','../constants/veeva.constants','config','search','(((.+)+)+)+$','66258QosSxz','149122pCuHfd','instanceUrl','4760388OHKLRD','toString','axios-retry','Content-Type','accept','use','__importDefault','errors','145380huZNSy'];a369_0x185c=function(){return _0x205a11;};return a369_0x185c();}a369_0x160b0c();'use strict';var __importDefault=this&&this[a369_0xedd956(0x124)]||function(_0x188904){return _0x188904&&_0x188904['__esModule']?_0x188904:{'default':_0x188904};};Object[a369_0xedd956(0x13e)](exports,'__esModule',{'value':!![]}),exports[a369_0xedd956(0x130)]=void 0x0;const axios_1=__importDefault(require(a369_0xedd956(0x143))),axios_retry_1=__importDefault(require(a369_0xedd956(0x120))),veeva_constants_1=require(a369_0xedd956(0x14c)),status_enums_1=require(a369_0xedd956(0x137)),veeva_request_error_1=require(a369_0xedd956(0x132)),DELAY=0x9c4,MAX_BODY_LENGTH=0x6400000,MAX_CONTENT_LENGTH=0x6400000,VALID_RESPONSE_TYPES_TO_PARSE=[a369_0xedd956(0x136),a369_0xedd956(0x13d)];function createVeevaRequest(_0x6d10e4){const _0x18c7d9=a369_0xedd956,{auth:_0x862d27}=_0x6d10e4,_0x2baa99=axios_1['default']['create']();return(0x0,axios_retry_1[_0x18c7d9(0x12f)])(_0x2baa99,{'retries':0x3,'retryDelay'(_0x585612){return _0x585612*DELAY;}}),_0x2baa99[_0x18c7d9(0x146)][_0x18c7d9(0x13c)][_0x18c7d9(0x123)](_0x55c166=>{const _0x1f2b2f=_0x18c7d9;var _0x11ec00;return(_0x11ec00=_0x55c166[_0x1f2b2f(0x13f)])['accept']||(_0x11ec00[_0x1f2b2f(0x122)]=_0x1f2b2f(0x128)),_0x55c166['headers']['authorization']=''+_0x862d27['accessToken'],_0x55c166['baseURL']=_0x862d27[_0x1f2b2f(0x152)],_0x55c166['maxBodyLength']=MAX_BODY_LENGTH,_0x55c166[_0x1f2b2f(0x149)]=MAX_CONTENT_LENGTH,_0x55c166;}),_0x2baa99[_0x18c7d9(0x146)][_0x18c7d9(0x13b)][_0x18c7d9(0x123)](async _0x483160=>{const _0x4c7b4b=_0x18c7d9;var _0x3b19fd,_0xfa84f6;const _0x5cfc14=(_0x3b19fd=_0x483160[_0x4c7b4b(0x13f)][_0x4c7b4b(0x127)])===null||_0x3b19fd===void 0x0?void 0x0:_0x3b19fd['includes'](_0x4c7b4b(0x128));if(!_0x5cfc14)return _0x483160;const _0x2ebdb3=VALID_RESPONSE_TYPES_TO_PARSE[_0x4c7b4b(0x14b)](_0x483160['config']['responseType']),_0x54a3b4=_0x2ebdb3?JSON['parse'](_0x483160['data']):_0x483160['data'];if(_0x54a3b4[_0x4c7b4b(0x147)]===status_enums_1[_0x4c7b4b(0x141)][_0x4c7b4b(0x13a)])return _0x483160;const _0x491adf=_0x54a3b4[_0x4c7b4b(0x125)][_0x4c7b4b(0x148)](_0x2cf35c=>_0x2cf35c['type']!==veeva_constants_1[_0x4c7b4b(0x145)][_0x4c7b4b(0x131)]),_0x2d318a=(((_0xfa84f6=_0x483160[_0x4c7b4b(0x14d)][_0x4c7b4b(0x13f)])===null||_0xfa84f6===void 0x0?void 0x0:_0xfa84f6[_0x4c7b4b(0x121)])+'')[_0x4c7b4b(0x133)](_0x4c7b4b(0x12b));if(_0x491adf||_0x2d318a)return _0x483160;return await _0x6d10e4[_0x4c7b4b(0x140)](),_0x2baa99(_0x483160[_0x4c7b4b(0x14d)]);},async _0x5dc8a9=>{const _0x4db217=_0x18c7d9;var _0x2b4e09;const _0x163dc5=((_0x2b4e09=_0x5dc8a9===null||_0x5dc8a9===void 0x0?void 0x0:_0x5dc8a9[_0x4db217(0x13b)])===null||_0x2b4e09===void 0x0?void 0x0:_0x2b4e09['data'])||_0x5dc8a9[_0x4db217(0x134)]||veeva_constants_1[_0x4db217(0x145)][_0x4db217(0x135)];throw new veeva_request_error_1[(_0x4db217(0x139))](_0x163dc5[_0x4db217(0x125)]||_0x163dc5);}),_0x2baa99;}exports[a369_0xedd956(0x130)]=createVeevaRequest;