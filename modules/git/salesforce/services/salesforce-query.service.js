const a277_0x5533e2=a277_0x53bb;(function(_0x5b7e6d,_0x591988){const _0x30b67b=a277_0x53bb,_0xba314=_0x5b7e6d();while(!![]){try{const _0x4e788c=parseInt(_0x30b67b(0x1e2))/0x1*(parseInt(_0x30b67b(0x1c9))/0x2)+-parseInt(_0x30b67b(0x1e7))/0x3*(parseInt(_0x30b67b(0x1d8))/0x4)+-parseInt(_0x30b67b(0x1e8))/0x5+parseInt(_0x30b67b(0x1cb))/0x6+-parseInt(_0x30b67b(0x1c0))/0x7*(parseInt(_0x30b67b(0x1e4))/0x8)+parseInt(_0x30b67b(0x1e0))/0x9*(parseInt(_0x30b67b(0x1d4))/0xa)+-parseInt(_0x30b67b(0x1bf))/0xb*(parseInt(_0x30b67b(0x1d2))/0xc);if(_0x4e788c===_0x591988)break;else _0xba314['push'](_0xba314['shift']());}catch(_0x395d4d){_0xba314['push'](_0xba314['shift']());}}}(a277_0x22aa,0xe0acf));function a277_0x53bb(_0x4b39ed,_0x538d5d){const _0x25d4b5=a277_0x22aa();return a277_0x53bb=function(_0x8f3ed4,_0x12d0ad){_0x8f3ed4=_0x8f3ed4-0x1bc;let _0x22aa47=_0x25d4b5[_0x8f3ed4];return _0x22aa47;},a277_0x53bb(_0x4b39ed,_0x538d5d);}const a277_0x12d0ad=(function(){let _0x13b29f=!![];return function(_0x45df94,_0x29db5e){const _0x5c6491=_0x13b29f?function(){const _0xe7c8df=a277_0x53bb;if(_0x29db5e){const _0x20b715=_0x29db5e[_0xe7c8df(0x1ea)](_0x45df94,arguments);return _0x29db5e=null,_0x20b715;}}:function(){};return _0x13b29f=![],_0x5c6491;};}()),a277_0x8f3ed4=a277_0x12d0ad(this,function(){const _0x968d41=a277_0x53bb;return a277_0x8f3ed4[_0x968d41(0x1cf)]()[_0x968d41(0x1e3)](_0x968d41(0x1df))[_0x968d41(0x1cf)]()[_0x968d41(0x1dc)](a277_0x8f3ed4)[_0x968d41(0x1e3)](_0x968d41(0x1df));});function a277_0x22aa(){const _0x490b13=['object','2856KVyZLq','get','310UDGkrK','services/data/','defineProperty','FLOSUM_GIT_NAMESPACE','12wxoOEB','metadata','./salesforce-auth.service','__metadata','constructor','function','query','(((.+)+)+)+$','320553HvuBhw','createSalesforceRequest','82sHfbQv','search','8024jYcszu','replace','parseSoqlString','1473033byhOtl','6369750VjmRCR','push','apply','decorate','../errors/salesforce.error','/query/?q=','12298JDKcHk','3801ZdwzEq','../utils/create-request.util','request','design:paramtypes','__esModule','SalesforceError','length','records','SalesforceAuthService','39064pehRFs','getRequest','10633296LwvlwR','../../../../constants','__decorate','nextRecordsUrl','toString','Service'];a277_0x22aa=function(){return _0x490b13;};return a277_0x22aa();}a277_0x8f3ed4();'use strict';var __decorate=this&&this[a277_0x5533e2(0x1cd)]||function(_0x1411e1,_0x4b8d66,_0x328f90,_0x2f7742){const _0x5ef5a5=a277_0x5533e2;var _0x256152=arguments['length'],_0x4890b5=_0x256152<0x3?_0x4b8d66:_0x2f7742===null?_0x2f7742=Object['getOwnPropertyDescriptor'](_0x4b8d66,_0x328f90):_0x2f7742,_0x4be631;if(typeof Reflect==='object'&&typeof Reflect['decorate']==='function')_0x4890b5=Reflect[_0x5ef5a5(0x1bc)](_0x1411e1,_0x4b8d66,_0x328f90,_0x2f7742);else{for(var _0x58ee9a=_0x1411e1[_0x5ef5a5(0x1c6)]-0x1;_0x58ee9a>=0x0;_0x58ee9a--)if(_0x4be631=_0x1411e1[_0x58ee9a])_0x4890b5=(_0x256152<0x3?_0x4be631(_0x4890b5):_0x256152>0x3?_0x4be631(_0x4b8d66,_0x328f90,_0x4890b5):_0x4be631(_0x4b8d66,_0x328f90))||_0x4890b5;}return _0x256152>0x3&&_0x4890b5&&Object[_0x5ef5a5(0x1d6)](_0x4b8d66,_0x328f90,_0x4890b5),_0x4890b5;},__metadata=this&&this[a277_0x5533e2(0x1db)]||function(_0x4aad42,_0x8db1f8){const _0x46b776=a277_0x5533e2;if(typeof Reflect===_0x46b776(0x1d1)&&typeof Reflect[_0x46b776(0x1d9)]===_0x46b776(0x1dd))return Reflect[_0x46b776(0x1d9)](_0x4aad42,_0x8db1f8);};Object[a277_0x5533e2(0x1d6)](exports,a277_0x5533e2(0x1c4),{'value':!![]}),exports['SalesforceQueryService']=void 0x0;const typedi_1=require('typedi'),constants_1=require(a277_0x5533e2(0x1cc)),salesforce_error_1=require(a277_0x5533e2(0x1bd)),create_request_util_1=require(a277_0x5533e2(0x1c1)),salesforce_auth_service_1=require(a277_0x5533e2(0x1da));let SalesforceQueryService=class SalesforceQueryService{constructor(_0x3f0e72){const _0x53877a=a277_0x5533e2;this['request']=(0x0,create_request_util_1[_0x53877a(0x1e1)])(_0x3f0e72);}[a277_0x5533e2(0x1e6)](_0x581e1e){const _0x34a9eb=a277_0x5533e2;return _0x581e1e[_0x34a9eb(0x1e5)](/\%namespace\%/g,constants_1[_0x34a9eb(0x1d7)])[_0x34a9eb(0x1e5)](/\%flosum_namespace\%/g,constants_1['FLOSUM_NAMESPACE']);}[a277_0x5533e2(0x1ca)](){return this['request'];}async[a277_0x5533e2(0x1de)](_0x1418ed){const _0x48848d=a277_0x5533e2;try{const _0x1fa0c2=encodeURI(this['parseSoqlString'](_0x1418ed)),_0x58e229=_0x48848d(0x1d5)+constants_1['SALESFORCE_API_VERSION']+_0x48848d(0x1be)+_0x1fa0c2,{data:_0x37babb}=await this[_0x48848d(0x1c2)][_0x48848d(0x1d3)](_0x58e229),_0x11bd63=_0x37babb[_0x48848d(0x1c7)];let _0x2428b4=_0x37babb['nextRecordsUrl'];while(_0x2428b4){const {data:_0x5386e3}=await this[_0x48848d(0x1c2)]['get'](_0x2428b4);_0x2428b4=_0x5386e3[_0x48848d(0x1ce)],_0x11bd63[_0x48848d(0x1e9)](..._0x5386e3['records']);}return _0x11bd63;}catch(_0x4b4faf){throw new salesforce_error_1[(_0x48848d(0x1c5))](_0x4b4faf);}}};SalesforceQueryService=__decorate([(0x0,typedi_1[a277_0x5533e2(0x1d0)])(),__metadata(a277_0x5533e2(0x1c3),[salesforce_auth_service_1[a277_0x5533e2(0x1c8)]])],SalesforceQueryService),exports['SalesforceQueryService']=SalesforceQueryService;