const a29_0x1ea56c=a29_0x1498;(function(_0x267fb4,_0x4abb69){const _0x3e2a59=a29_0x1498,_0x5f1988=_0x267fb4();while(!![]){try{const _0x10786e=parseInt(_0x3e2a59(0x16f))/0x1+parseInt(_0x3e2a59(0x164))/0x2+-parseInt(_0x3e2a59(0x167))/0x3*(parseInt(_0x3e2a59(0x172))/0x4)+parseInt(_0x3e2a59(0x175))/0x5*(-parseInt(_0x3e2a59(0x15c))/0x6)+parseInt(_0x3e2a59(0x15a))/0x7+-parseInt(_0x3e2a59(0x157))/0x8+-parseInt(_0x3e2a59(0x16a))/0x9*(-parseInt(_0x3e2a59(0x156))/0xa);if(_0x10786e===_0x4abb69)break;else _0x5f1988['push'](_0x5f1988['shift']());}catch(_0x45db52){_0x5f1988['push'](_0x5f1988['shift']());}}}(a29_0x30a3,0x91f8d));const a29_0xf7f62f=(function(){let _0x262656=!![];return function(_0x236b0e,_0x4d5291){const _0x13da28=_0x262656?function(){if(_0x4d5291){const _0x3cf63a=_0x4d5291['apply'](_0x236b0e,arguments);return _0x4d5291=null,_0x3cf63a;}}:function(){};return _0x262656=![],_0x13da28;};}()),a29_0x45ca36=a29_0xf7f62f(this,function(){const _0x3e947c=a29_0x1498;return a29_0x45ca36['toString']()[_0x3e947c(0x159)](_0x3e947c(0x16d))[_0x3e947c(0x16e)]()[_0x3e947c(0x176)](a29_0x45ca36)[_0x3e947c(0x159)](_0x3e947c(0x16d));});a29_0x45ca36();function a29_0x1498(_0x524f57,_0x2652c5){const _0x24958e=a29_0x30a3();return a29_0x1498=function(_0x45ca36,_0xf7f62f){_0x45ca36=_0x45ca36-0x156;let _0x30a33d=_0x24958e[_0x45ca36];return _0x30a33d;},a29_0x1498(_0x524f57,_0x2652c5);}'use strict';Object[a29_0x1ea56c(0x168)](exports,'__esModule',{'value':!![]}),exports['handlerParamInjector']=void 0x0;const constants_1=require(a29_0x1ea56c(0x16b));async function injectParam(_0x3922b1,_0x42a5c0,_0x421218){const _0x366418=a29_0x1ea56c;var _0x3d32cd,_0x4e505a;const _0x492010=Reflect[_0x366418(0x170)](constants_1[_0x366418(0x165)],_0x3922b1),_0x302af5=(_0x3d32cd=_0x42a5c0[_0x366418(0x169)])===null||_0x3d32cd===void 0x0?void 0x0:_0x3d32cd[_0x366418(0x162)],_0x257d80=((_0x4e505a=_0x42a5c0[_0x366418(0x169)])===null||_0x4e505a===void 0x0?void 0x0:_0x4e505a[_0x366418(0x16c)])||[];let _0x2130be=_0x302af5?_0x421218[_0x302af5]:_0x421218;for(const _0x37341e of _0x257d80){_0x37341e['validatable']&&await _0x37341e[_0x366418(0x160)](_0x2130be,_0x492010[_0x42a5c0[_0x366418(0x15e)]]),_0x37341e[_0x366418(0x15f)]&&(_0x2130be=await _0x37341e[_0x366418(0x173)](_0x2130be,_0x492010[_0x42a5c0[_0x366418(0x15e)]]));}return _0x2130be;}async function injectCustomParam(_0x22caef,_0xf2c7cf){const _0xd5cd16=a29_0x1ea56c;return _0x22caef[_0xd5cd16(0x174)]&&_0x22caef[_0xd5cd16(0x174)](_0xf2c7cf,_0x22caef[_0xd5cd16(0x169)]);}async function handlerParamInjector(_0x3aa813,_0x174d2d,_0x24572a,_0x4cacfc){const _0x176c2c=a29_0x1ea56c,_0x4bda72=Reflect[_0x176c2c(0x177)](constants_1['META_HANDLER_ARGS'],_0x3aa813)||[],_0x47c203=[];for(const _0x56ad9a of _0x4bda72[_0x176c2c(0x158)]((_0x2a19e6,_0x47445d)=>_0x2a19e6['index']-_0x47445d[_0x176c2c(0x15e)])){switch(_0x56ad9a[_0x176c2c(0x163)]){case 0x0:_0x47c203[_0x176c2c(0x166)](_0x174d2d['context']);break;case 0x4:_0x47c203[_0x176c2c(0x166)](_0x174d2d);break;case 0x5:_0x47c203['push'](_0x24572a);break;case 0x6:_0x47c203['push'](_0x4cacfc);break;case 0x1:_0x47c203[_0x176c2c(0x166)](await injectParam(_0x3aa813,_0x56ad9a,_0x174d2d[_0x176c2c(0x15d)]));break;case 0x2:_0x47c203['push'](await injectParam(_0x3aa813,_0x56ad9a,_0x174d2d[_0x176c2c(0x15b)]));break;case 0x3:_0x47c203[_0x176c2c(0x166)](await injectParam(_0x3aa813,_0x56ad9a,_0x174d2d[_0x176c2c(0x171)]));break;case 0x7:_0x47c203[_0x176c2c(0x166)](await injectCustomParam(_0x56ad9a,_0x174d2d[_0x176c2c(0x161)]));break;default:continue;}}return _0x47c203;}function a29_0x30a3(){const _0x11470a=['getMetadata','query','108xbmQpn','transform','value','4463815Citigh','constructor','getOwnMetadata','856190rZtBVG','6537256fGQpkj','sort','search','3013843VWxAIL','params','6SRUzHk','body','index','transformable','validate','context','name','type','776812CisBRB','META_HANDLER_PARAMTYPES','push','93051VwTTjR','defineProperty','data','171rBSLsP','../constants','pipes','(((.+)+)+)+$','toString','699564fsZLMh'];a29_0x30a3=function(){return _0x11470a;};return a29_0x30a3();}exports['handlerParamInjector']=handlerParamInjector;