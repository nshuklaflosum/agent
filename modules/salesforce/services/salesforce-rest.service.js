const a133_0x174eaf=a133_0x13c0;(function(_0x5f32f8,_0x46fa86){const _0x48f074=a133_0x13c0,_0x1693de=_0x5f32f8();while(!![]){try{const _0x5b9ddd=-parseInt(_0x48f074(0x7d))/0x1+parseInt(_0x48f074(0x7f))/0x2+parseInt(_0x48f074(0x79))/0x3+-parseInt(_0x48f074(0x67))/0x4+-parseInt(_0x48f074(0x6b))/0x5+-parseInt(_0x48f074(0x6c))/0x6+parseInt(_0x48f074(0x77))/0x7;if(_0x5b9ddd===_0x46fa86)break;else _0x1693de['push'](_0x1693de['shift']());}catch(_0x665635){_0x1693de['push'](_0x1693de['shift']());}}}(a133_0x3384,0x921ee));const a133_0x2d4ce8=(function(){let _0x10d59f=!![];return function(_0x2c6775,_0x551570){const _0x37ede2=_0x10d59f?function(){if(_0x551570){const _0x4be8e4=_0x551570['apply'](_0x2c6775,arguments);return _0x551570=null,_0x4be8e4;}}:function(){};return _0x10d59f=![],_0x37ede2;};}()),a133_0x2ea8fb=a133_0x2d4ce8(this,function(){const _0xafd058=a133_0x13c0;return a133_0x2ea8fb['toString']()[_0xafd058(0x84)](_0xafd058(0x7a))[_0xafd058(0x85)]()[_0xafd058(0x6f)](a133_0x2ea8fb)[_0xafd058(0x84)](_0xafd058(0x7a));});a133_0x2ea8fb();'use strict';var __decorate=this&&this['__decorate']||function(_0xadd268,_0x512a38,_0x5dcb39,_0x1c356d){const _0x17fb45=a133_0x13c0;var _0x24fe64=arguments[_0x17fb45(0x88)],_0x538ca6=_0x24fe64<0x3?_0x512a38:_0x1c356d===null?_0x1c356d=Object['getOwnPropertyDescriptor'](_0x512a38,_0x5dcb39):_0x1c356d,_0x2ad770;if(typeof Reflect===_0x17fb45(0x71)&&typeof Reflect[_0x17fb45(0x74)]===_0x17fb45(0x73))_0x538ca6=Reflect[_0x17fb45(0x74)](_0xadd268,_0x512a38,_0x5dcb39,_0x1c356d);else{for(var _0x514766=_0xadd268[_0x17fb45(0x88)]-0x1;_0x514766>=0x0;_0x514766--)if(_0x2ad770=_0xadd268[_0x514766])_0x538ca6=(_0x24fe64<0x3?_0x2ad770(_0x538ca6):_0x24fe64>0x3?_0x2ad770(_0x512a38,_0x5dcb39,_0x538ca6):_0x2ad770(_0x512a38,_0x5dcb39))||_0x538ca6;}return _0x24fe64>0x3&&_0x538ca6&&Object[_0x17fb45(0x75)](_0x512a38,_0x5dcb39,_0x538ca6),_0x538ca6;},__metadata=this&&this[a133_0x174eaf(0x89)]||function(_0x2989,_0x469f4c){const _0x205d21=a133_0x174eaf;if(typeof Reflect==='object'&&typeof Reflect[_0x205d21(0x6d)]===_0x205d21(0x73))return Reflect[_0x205d21(0x6d)](_0x2989,_0x469f4c);};Object[a133_0x174eaf(0x75)](exports,a133_0x174eaf(0x81),{'value':!![]}),exports[a133_0x174eaf(0x6a)]=void 0x0;const constants_1=require('../../../constants'),typedi_1=require(a133_0x174eaf(0x76)),salesforce_error_1=require('../errors/salesforce.error'),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require('./salesforce-auth.service');let SalesforceRestService=class SalesforceRestService{constructor(_0x2dc013){const _0x18f711=a133_0x174eaf;this[_0x18f711(0x69)]=create_request_util_1[_0x18f711(0x7e)](_0x2dc013);}async['delete'](_0x129bf2,_0x5dbd23){const _0x41009a=a133_0x174eaf;try{await this[_0x41009a(0x69)][_0x41009a(0x70)]('services/data/'+constants_1[_0x41009a(0x86)]+_0x41009a(0x80)+_0x129bf2+'/'+_0x5dbd23);}catch(_0x5301f3){throw new salesforce_error_1[(_0x41009a(0x83))](_0x5301f3);}}async['get'](_0x4f2f36,_0x57c022){const _0x3c59d6=a133_0x174eaf;try{const _0x154774=await this['request'][_0x3c59d6(0x68)](_0x3c59d6(0x7c)+constants_1[_0x3c59d6(0x86)]+_0x3c59d6(0x80)+_0x4f2f36+'/'+_0x57c022);return _0x154774[_0x3c59d6(0x78)];}catch(_0x190b41){throw new salesforce_error_1[(_0x3c59d6(0x83))](_0x190b41);}}async[a133_0x174eaf(0x87)](_0x18d4df,_0x41e118){const _0x62818f=a133_0x174eaf;try{const _0x38adcb=await this['request']['post']('services/data/'+constants_1[_0x62818f(0x86)]+'/sobjects/'+_0x18d4df,_0x41e118);return _0x38adcb[_0x62818f(0x78)]['id'];}catch(_0x1c9908){throw new salesforce_error_1[(_0x62818f(0x83))](_0x1c9908);}}async[a133_0x174eaf(0x72)](_0x43d596,_0x4a7743,_0x12c64b){const _0x1a75cf=a133_0x174eaf;try{await this[_0x1a75cf(0x69)][_0x1a75cf(0x72)](_0x1a75cf(0x7c)+constants_1['SALESFORCE_API_VERSION']+_0x1a75cf(0x80)+_0x43d596+'/'+_0x4a7743,_0x12c64b);}catch(_0x1a07be){throw new salesforce_error_1[(_0x1a75cf(0x83))](_0x1a07be);}}};function a133_0x3384(){const _0x3d0890=['Service','SalesforceError','search','toString','SALESFORCE_API_VERSION','post','length','__metadata','1228888QejqYe','get','request','SalesforceRestService','544580TWNrss','1279800WPMRKi','metadata','design:paramtypes','constructor','delete','object','patch','function','decorate','defineProperty','typedi','8979152OGoXWM','data','975447qiLuCK','(((.+)+)+)+$','SalesforceAuthService','services/data/','417830LoNicK','createSalesforceRequest','75786qcCAMk','/sobjects/','__esModule'];a133_0x3384=function(){return _0x3d0890;};return a133_0x3384();}function a133_0x13c0(_0x4ebd58,_0x4ae5cc){const _0xc3aa1d=a133_0x3384();return a133_0x13c0=function(_0x2ea8fb,_0x2d4ce8){_0x2ea8fb=_0x2ea8fb-0x67;let _0x33843a=_0xc3aa1d[_0x2ea8fb];return _0x33843a;},a133_0x13c0(_0x4ebd58,_0x4ae5cc);}SalesforceRestService=__decorate([typedi_1[a133_0x174eaf(0x82)](),__metadata(a133_0x174eaf(0x6e),[salesforce_auth_service_1[a133_0x174eaf(0x7b)]])],SalesforceRestService),exports[a133_0x174eaf(0x6a)]=SalesforceRestService;