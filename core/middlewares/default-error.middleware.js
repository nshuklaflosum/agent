function a37_0x2ee9(){var _0x358100=['search','Logger','apply','16hTVjMG','error','454301mHVLkA','../errors/api.error','name','logger','11842127EIYVFO','3EsbOkd','statusCode','object','20HQwZul','status','decorate','__decorate','../errors/internal-server.error','1503585bBcvrD','length','750672fmpJSE','function','toString','1334534jthykq','log','defineProperty','119zhJdWP','181680PVLOdJ','303630qVDZOZ','__esModule','send','DefaultErrorMiddleware','(((.+)+)+)+$','toJSON'];a37_0x2ee9=function(){return _0x358100;};return a37_0x2ee9();}var a37_0x77f509=a37_0xd1e8;(function(_0x55ffb9,_0x2840bd){var _0x255637=a37_0xd1e8,_0x4ffac0=_0x55ffb9();while(!![]){try{var _0x58aff1=-parseInt(_0x255637(0x95))/0x1+parseInt(_0x255637(0xa7))/0x2*(-parseInt(_0x255637(0x9a))/0x3)+parseInt(_0x255637(0x93))/0x4*(parseInt(_0x255637(0x8a))/0x5)+parseInt(_0x255637(0xa4))/0x6+parseInt(_0x255637(0xaa))/0x7*(parseInt(_0x255637(0x89))/0x8)+-parseInt(_0x255637(0xa2))/0x9*(parseInt(_0x255637(0x9d))/0xa)+parseInt(_0x255637(0x99))/0xb;if(_0x58aff1===_0x2840bd)break;else _0x4ffac0['push'](_0x4ffac0['shift']());}catch(_0x1acdd8){_0x4ffac0['push'](_0x4ffac0['shift']());}}}(a37_0x2ee9,0x5b8a1));var a37_0x26878f=(function(){var _0x126168=!![];return function(_0xb91f55,_0x49e341){var _0x439900=_0x126168?function(){var _0x34e41=a37_0xd1e8;if(_0x49e341){var _0x5d2e0e=_0x49e341[_0x34e41(0x92)](_0xb91f55,arguments);return _0x49e341=null,_0x5d2e0e;}}:function(){};return _0x126168=![],_0x439900;};}()),a37_0x371b5b=a37_0x26878f(this,function(){var _0x4badb9=a37_0xd1e8;return a37_0x371b5b[_0x4badb9(0xa6)]()[_0x4badb9(0x90)]('(((.+)+)+)+$')[_0x4badb9(0xa6)]()['constructor'](a37_0x371b5b)[_0x4badb9(0x90)](_0x4badb9(0x8e));});a37_0x371b5b();'use strict';var __decorate=this&&this[a37_0x77f509(0xa0)]||function(_0x3e54fc,_0xfa927d,_0x47209c,_0x1d6e51){var _0x37ac12=a37_0x77f509,_0x2d5ecf=arguments[_0x37ac12(0xa3)],_0x1db1e4=_0x2d5ecf<0x3?_0xfa927d:_0x1d6e51===null?_0x1d6e51=Object['getOwnPropertyDescriptor'](_0xfa927d,_0x47209c):_0x1d6e51,_0xb9be03;if(typeof Reflect===_0x37ac12(0x9c)&&typeof Reflect[_0x37ac12(0x9f)]===_0x37ac12(0xa5))_0x1db1e4=Reflect['decorate'](_0x3e54fc,_0xfa927d,_0x47209c,_0x1d6e51);else{for(var _0x2853b5=_0x3e54fc[_0x37ac12(0xa3)]-0x1;_0x2853b5>=0x0;_0x2853b5--)if(_0xb9be03=_0x3e54fc[_0x2853b5])_0x1db1e4=(_0x2d5ecf<0x3?_0xb9be03(_0x1db1e4):_0x2d5ecf>0x3?_0xb9be03(_0xfa927d,_0x47209c,_0x1db1e4):_0xb9be03(_0xfa927d,_0x47209c))||_0x1db1e4;}return _0x2d5ecf>0x3&&_0x1db1e4&&Object['defineProperty'](_0xfa927d,_0x47209c,_0x1db1e4),_0x1db1e4;},DefaultErrorMiddleware_1;Object[a37_0x77f509(0xa9)](exports,a37_0x77f509(0x8b),{'value':!![]}),exports['DefaultErrorMiddleware']=void 0x0;function a37_0xd1e8(_0x5dea75,_0x55ea9b){var _0x3ee418=a37_0x2ee9();return a37_0xd1e8=function(_0x371b5b,_0x26878f){_0x371b5b=_0x371b5b-0x89;var _0x2ee996=_0x3ee418[_0x371b5b];return _0x2ee996;},a37_0xd1e8(_0x5dea75,_0x55ea9b);}const __1=require('..'),middleware_decorator_1=require('../decorators/middleware.decorator'),api_error_1=require(a37_0x77f509(0x96)),internal_server_error_1=require(a37_0x77f509(0xa1));let DefaultErrorMiddleware=DefaultErrorMiddleware_1=class DefaultErrorMiddleware{constructor(){var _0x34340d=a37_0x77f509;this[_0x34340d(0x98)]=new __1[(_0x34340d(0x91))](DefaultErrorMiddleware_1[_0x34340d(0x97)]);}['handleError'](_0x108a30,_0x508720,_0x1f2406){var _0x21de43=a37_0x77f509;!(_0x108a30 instanceof api_error_1['ApiError'])&&(_0x108a30=new internal_server_error_1['InternalServerError'](_0x108a30)),this[_0x21de43(0x98)][_0x21de43(0xa8)](_0x108a30[_0x21de43(0x8f)]()),_0x1f2406[_0x21de43(0x9e)](_0x108a30[_0x21de43(0x9b)])[_0x21de43(0x8c)](_0x108a30['toJSON']());}};DefaultErrorMiddleware=DefaultErrorMiddleware_1=__decorate([(0x0,middleware_decorator_1['Middleware'])(a37_0x77f509(0x94))],DefaultErrorMiddleware),exports[a37_0x77f509(0x8d)]=DefaultErrorMiddleware;