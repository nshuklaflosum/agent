const a364_0x884159=a364_0x3521;function a364_0x2e42(){const _0xe0aa02=['default','VeevaResponseStatus','content-type','post','29245cGxYRU','5502816EbHhrX','VpkService','1319871Acnlaa','102848JcrQRv','__importDefault','apply','../classes/errors/veeva-error','605864cTvgwa','VeevaError','ENDPOINT_VALIDATE_VPK','parse','1925122ViOdMS','_connection','errors','includes','multipart/form-data','../utils/veeva-auth.utils','file','responseStatus','402zTVnaR','constructor','data','toString','generate','105efvabp','application/json','append','(((.+)+)+)+$','../constants/veeva.constants','validate','4NmoNhU','search','VeevaConstants','updateVeevaConnection','../enums/status.enums','SUCCESS','createReadStream','16131410IRaPms'];a364_0x2e42=function(){return _0xe0aa02;};return a364_0x2e42();}function a364_0x3521(_0x2d6fa0,_0xe5420c){const _0x3bec54=a364_0x2e42();return a364_0x3521=function(_0x81adcf,_0x3c983c){_0x81adcf=_0x81adcf-0x129;let _0x2e4263=_0x3bec54[_0x81adcf];return _0x2e4263;},a364_0x3521(_0x2d6fa0,_0xe5420c);}(function(_0x434fdc,_0x10dca7){const _0x19bab2=a364_0x3521,_0x154585=_0x434fdc();while(!![]){try{const _0xd07db=parseInt(_0x19bab2(0x139))/0x1+-parseInt(_0x19bab2(0x13d))/0x2+-parseInt(_0x19bab2(0x134))/0x3*(-parseInt(_0x19bab2(0x150))/0x4)+parseInt(_0x19bab2(0x131))/0x5*(-parseInt(_0x19bab2(0x145))/0x6)+parseInt(_0x19bab2(0x14a))/0x7*(-parseInt(_0x19bab2(0x135))/0x8)+-parseInt(_0x19bab2(0x132))/0x9+parseInt(_0x19bab2(0x12c))/0xa;if(_0xd07db===_0x10dca7)break;else _0x154585['push'](_0x154585['shift']());}catch(_0xb0f5e8){_0x154585['push'](_0x154585['shift']());}}}(a364_0x2e42,0x7a21e));const a364_0x3c983c=(function(){let _0x4e09e7=!![];return function(_0x55183b,_0x10c6f2){const _0x330ee8=_0x4e09e7?function(){const _0xf0b790=a364_0x3521;if(_0x10c6f2){const _0x232d7e=_0x10c6f2[_0xf0b790(0x137)](_0x55183b,arguments);return _0x10c6f2=null,_0x232d7e;}}:function(){};return _0x4e09e7=![],_0x330ee8;};}()),a364_0x81adcf=a364_0x3c983c(this,function(){const _0xb03e86=a364_0x3521;return a364_0x81adcf[_0xb03e86(0x148)]()[_0xb03e86(0x151)]('(((.+)+)+)+$')[_0xb03e86(0x148)]()[_0xb03e86(0x146)](a364_0x81adcf)['search'](_0xb03e86(0x14d));});a364_0x81adcf();'use strict';var __importDefault=this&&this[a364_0x884159(0x136)]||function(_0x181ca5){return _0x181ca5&&_0x181ca5['__esModule']?_0x181ca5:{'default':_0x181ca5};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['VpkService']=void 0x0;const form_data_1=__importDefault(require('form-data')),fs_1=require('fs'),veeva_constants_1=require(a364_0x884159(0x14e)),veeva_auth_utils_1=require(a364_0x884159(0x142)),veeva_error_1=require(a364_0x884159(0x138)),status_enums_1=require(a364_0x884159(0x129));class VpkService{constructor({connection:_0x194f66}){const _0x2b06d6=a364_0x884159;this[_0x2b06d6(0x13e)]=_0x194f66;}async[a364_0x884159(0x149)](_0x2135bc,_0x149082=0x1){const _0xb22da5=a364_0x884159;var _0x36bb97;const _0x772cc=new form_data_1[(_0xb22da5(0x12d))]();_0x772cc[_0xb22da5(0x14c)](_0xb22da5(0x143),(0x0,fs_1[_0xb22da5(0x12b)])(_0x2135bc));const _0x4af460=await this[_0xb22da5(0x13e)]['post'](veeva_constants_1[_0xb22da5(0x152)]['ENDPOINT_EXPORT_IMPORT_PACKAGE'],_0x772cc,{'responseType':'arraybuffer','headers':{'Content-Type':_0xb22da5(0x141)}}),_0x1a11db=(_0x36bb97=_0x4af460['headers'][_0xb22da5(0x12f)])===null||_0x36bb97===void 0x0?void 0x0:_0x36bb97[_0xb22da5(0x140)](_0xb22da5(0x14b));if(!_0x1a11db)return _0x4af460['data'];else{const _0x30556a=JSON[_0xb22da5(0x13c)](_0x4af460[_0xb22da5(0x147)]);if(_0x149082>0x0)return await(0x0,veeva_auth_utils_1[_0xb22da5(0x153)])(this['_connection']),await this[_0xb22da5(0x149)](_0x2135bc,_0x149082-0x1);throw new veeva_error_1[(_0xb22da5(0x13a))](_0x30556a[_0xb22da5(0x13f)]);}}async[a364_0x884159(0x14f)](_0x31eaf3,_0x4a0fb2=0x1){const _0x2e1610=a364_0x884159,_0x4e2edf=new form_data_1[(_0x2e1610(0x12d))]();_0x4e2edf[_0x2e1610(0x14c)](_0x2e1610(0x143),(0x0,fs_1['createReadStream'])(_0x31eaf3));const _0x4caf66=await this[_0x2e1610(0x13e)][_0x2e1610(0x130)](veeva_constants_1[_0x2e1610(0x152)][_0x2e1610(0x13b)],_0x4e2edf,{'headers':{'Content-Type':_0x2e1610(0x141)}}),_0x5cb7b5=_0x4caf66['data'];if(_0x5cb7b5[_0x2e1610(0x144)]===status_enums_1[_0x2e1610(0x12e)][_0x2e1610(0x12a)])return _0x5cb7b5;else{if(_0x4a0fb2>0x0)return await(0x0,veeva_auth_utils_1[_0x2e1610(0x153)])(this[_0x2e1610(0x13e)]),await this[_0x2e1610(0x14f)](_0x31eaf3,_0x4a0fb2-0x1);throw new veeva_error_1[(_0x2e1610(0x13a))](_0x5cb7b5[_0x2e1610(0x13f)]);}}}exports[a364_0x884159(0x133)]=VpkService;