function a24_0xc3b1(){const _0x3e6ebe=['typedi','handlers','middlewares','search','nestedPath','map','getPrototypeOf','injectMiddlewares','express','getHandlerMeta','Logger','normalizePaths','injecting\x20','595525WTqvav','getOwnMetadata','__esModule','ControllerInjector','toLowerCase','META_CONTROLLER_PREFIX','META_CONTROLLER_MIDDLEWARES','log','../classes/logger.class','root','../wrappers/handler.wrapper','router','106575PkGZsJ','CONTROLLER_DEFAULT_PREFIX','handlerWrapper','521605KhtxHB','./middleware.injector','nested','constructor','META_CONTROLLER_VERSION','path','(((.+)+)+)+$','459465PiWcld','32QfYmjk','329764XNyGua','prefix','instance','filter','629532MtHELi','\x20is\x20not\x20a\x20Controller','get','inject','injectNestedController','use','toString','META_HANDLER','../utils','controllerType','middlewareInjector','name','348022grkrKV','controller-injector','injectHandlers','__importDefault','method','../constants','getOwnPropertyNames'];a24_0xc3b1=function(){return _0x3e6ebe;};return a24_0xc3b1();}function a24_0x5393(_0xefa49f,_0x25255f){const _0x26c7d2=a24_0xc3b1();return a24_0x5393=function(_0x2a33fe,_0x1a5915){_0x2a33fe=_0x2a33fe-0x125;let _0xc3b13f=_0x26c7d2[_0x2a33fe];return _0xc3b13f;},a24_0x5393(_0xefa49f,_0x25255f);}const a24_0x3aa6cb=a24_0x5393;(function(_0x4a8dcc,_0x3fc987){const _0x12300d=a24_0x5393,_0x49d357=_0x4a8dcc();while(!![]){try{const _0x5d6867=parseInt(_0x12300d(0x136))/0x1+-parseInt(_0x12300d(0x152))/0x2+parseInt(_0x12300d(0x140))/0x3+-parseInt(_0x12300d(0x142))/0x4+-parseInt(_0x12300d(0x139))/0x5+-parseInt(_0x12300d(0x146))/0x6+-parseInt(_0x12300d(0x12a))/0x7*(-parseInt(_0x12300d(0x141))/0x8);if(_0x5d6867===_0x3fc987)break;else _0x49d357['push'](_0x49d357['shift']());}catch(_0x3938f6){_0x49d357['push'](_0x49d357['shift']());}}}(a24_0xc3b1,0x20cbf));const a24_0x1a5915=(function(){let _0x5416a5=!![];return function(_0x49bac1,_0x493ad5){const _0x5b7158=_0x5416a5?function(){if(_0x493ad5){const _0x2b1c98=_0x493ad5['apply'](_0x49bac1,arguments);return _0x493ad5=null,_0x2b1c98;}}:function(){};return _0x5416a5=![],_0x5b7158;};}()),a24_0x2a33fe=a24_0x1a5915(this,function(){const _0x166e7a=a24_0x5393;return a24_0x2a33fe[_0x166e7a(0x14c)]()['search'](_0x166e7a(0x13f))[_0x166e7a(0x14c)]()[_0x166e7a(0x13c)](a24_0x2a33fe)[_0x166e7a(0x15c)](_0x166e7a(0x13f));});a24_0x2a33fe();'use strict';var __importDefault=this&&this[a24_0x3aa6cb(0x155)]||function(_0x311c95){return _0x311c95&&_0x311c95['__esModule']?_0x311c95:{'default':_0x311c95};};Object['defineProperty'](exports,a24_0x3aa6cb(0x12c),{'value':!![]}),exports[a24_0x3aa6cb(0x12d)]=void 0x0;const express_1=require(a24_0x3aa6cb(0x125)),typedi_1=__importDefault(require(a24_0x3aa6cb(0x159))),logger_class_1=require(a24_0x3aa6cb(0x132)),constants_1=require(a24_0x3aa6cb(0x157)),utils_1=require(a24_0x3aa6cb(0x14e)),handler_wrapper_1=require(a24_0x3aa6cb(0x134)),middleware_injector_1=require(a24_0x3aa6cb(0x13a)),logger=new logger_class_1[(a24_0x3aa6cb(0x127))](a24_0x3aa6cb(0x153));class ControllerInjector{constructor(_0x36b198,_0x4f55da){const _0xbd06f8=a24_0x3aa6cb;this['controllerType']=_0x36b198,this[_0xbd06f8(0x133)]=_0x4f55da,this[_0xbd06f8(0x135)]=(0x0,express_1['Router'])({'mergeParams':!![]}),this['nestedPath']='';if(!Reflect['getOwnMetadata'](constants_1['META_CONTROLLER'],_0x36b198))throw TypeError(_0x36b198[_0xbd06f8(0x151)]+_0xbd06f8(0x147));}get[a24_0x3aa6cb(0x15a)](){const _0x45fe21=a24_0x3aa6cb,_0x43fda5=Object[_0x45fe21(0x15f)](this[_0x45fe21(0x144)]);return Object[_0x45fe21(0x158)](_0x43fda5)[_0x45fe21(0x15e)](_0x43cb55=>_0x43fda5[_0x43cb55])[_0x45fe21(0x145)](_0x5465dc=>!!Reflect['getOwnMetadata'](constants_1[_0x45fe21(0x14d)],_0x5465dc));}get[a24_0x3aa6cb(0x15b)](){const _0x35ec3a=a24_0x3aa6cb;return Reflect[_0x35ec3a(0x12b)](constants_1[_0x35ec3a(0x130)],this[_0x35ec3a(0x14f)])||[];}get['prefix'](){const _0x3816bf=a24_0x3aa6cb;var _0x3ce92e;const _0x41c089=(_0x3ce92e=Reflect[_0x3816bf(0x12b)](constants_1[_0x3816bf(0x12f)],this['controllerType']))!==null&&_0x3ce92e!==void 0x0?_0x3ce92e:constants_1[_0x3816bf(0x137)],_0x50229c=Reflect[_0x3816bf(0x12b)](constants_1[_0x3816bf(0x13d)],this['controllerType'])||'';return this[_0x3816bf(0x15d)]?'':(0x0,utils_1[_0x3816bf(0x128)])(_0x41c089,_0x50229c);}get[a24_0x3aa6cb(0x13e)](){const _0x4ebc4b=a24_0x3aa6cb;if(this[_0x4ebc4b(0x15d)])return this[_0x4ebc4b(0x15d)];const _0x40c779=Reflect[_0x4ebc4b(0x12b)](constants_1['META_CONTROLLER_PATH'],this[_0x4ebc4b(0x14f)])||'';return(0x0,utils_1[_0x4ebc4b(0x128)])(_0x40c779);}get['instance'](){const _0x4fbe3b=a24_0x3aa6cb;return typedi_1['default'][_0x4fbe3b(0x148)](this[_0x4fbe3b(0x14f)]);}async[a24_0x3aa6cb(0x160)](){const _0x48a3df=a24_0x3aa6cb;for(const _0x3e0aa6 of this[_0x48a3df(0x15b)]){const _0x35880c=await(0x0,middleware_injector_1[_0x48a3df(0x150)])(_0x3e0aa6);this[_0x48a3df(0x135)][_0x48a3df(0x14b)](_0x35880c);}}async[a24_0x3aa6cb(0x14a)](_0x4154d4){const _0x48c7d8=a24_0x3aa6cb,_0x176ae3=_0x4154d4[_0x48c7d8(0x13b)];logger[_0x48c7d8(0x131)]('injecting\x20nested\x20'+_0x176ae3['name']+'\x20at\x20'+this[_0x48c7d8(0x13e)]+_0x4154d4[_0x48c7d8(0x13e)]);const _0x11ead2=new ControllerInjector(_0x176ae3,this);_0x11ead2[_0x48c7d8(0x15d)]=_0x4154d4[_0x48c7d8(0x13e)],await _0x11ead2[_0x48c7d8(0x149)](this[_0x48c7d8(0x135)]);}async[a24_0x3aa6cb(0x154)](){const _0x33680c=a24_0x3aa6cb;var _0x9fed17;for(const _0x9d7ed of this[_0x33680c(0x15a)]){const _0x16232c=(0x0,utils_1[_0x33680c(0x126)])(_0x9d7ed);if(_0x16232c['nested'])await this[_0x33680c(0x14a)](_0x16232c);else{const _0x236537=_0x16232c[_0x33680c(0x156)][_0x33680c(0x14c)]()[_0x33680c(0x12e)]();logger[_0x33680c(0x131)]('injecting\x20'+this[_0x33680c(0x14f)][_0x33680c(0x151)]+'#'+_0x9d7ed['name']+'\x20at\x20['+_0x16232c['method']+']\x20'+(0x0,utils_1[_0x33680c(0x128)])(((_0x9fed17=this[_0x33680c(0x133)])===null||_0x9fed17===void 0x0?void 0x0:_0x9fed17[_0x33680c(0x13e)])||'',this['path'],_0x16232c[_0x33680c(0x13e)])),this['router'][_0x236537](_0x16232c[_0x33680c(0x13e)],(0x0,handler_wrapper_1[_0x33680c(0x138)])(_0x9d7ed,this['instance']));}}}async[a24_0x3aa6cb(0x149)](_0x2d0937){const _0xb38859=a24_0x3aa6cb;!this[_0xb38859(0x15d)]&&logger['log'](_0xb38859(0x129)+this[_0xb38859(0x14f)][_0xb38859(0x151)]+'\x20{'+this[_0xb38859(0x143)]+'}'),await this[_0xb38859(0x160)](),await this[_0xb38859(0x154)](),_0x2d0937[_0xb38859(0x14b)](''+this[_0xb38859(0x143)]+this['path'],this['router']);}}exports['ControllerInjector']=ControllerInjector;