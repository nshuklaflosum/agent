var a55_0x9f77f8=a55_0x90be;(function(_0x51b14d,_0x41d7ca){var _0x216b70=a55_0x90be,_0x2c7db7=_0x51b14d();while(!![]){try{var _0x5d69b2=-parseInt(_0x216b70(0x157))/0x1+parseInt(_0x216b70(0x15d))/0x2*(-parseInt(_0x216b70(0x16b))/0x3)+parseInt(_0x216b70(0x141))/0x4*(parseInt(_0x216b70(0x16d))/0x5)+-parseInt(_0x216b70(0x142))/0x6*(-parseInt(_0x216b70(0x155))/0x7)+-parseInt(_0x216b70(0x164))/0x8+parseInt(_0x216b70(0x161))/0x9+parseInt(_0x216b70(0x144))/0xa;if(_0x5d69b2===_0x41d7ca)break;else _0x2c7db7['push'](_0x2c7db7['shift']());}catch(_0x1c096c){_0x2c7db7['push'](_0x2c7db7['shift']());}}}(a55_0x4737,0x45372));var a55_0x1f70c9=(function(){var _0x465f93=!![];return function(_0x24eeaa,_0x16a00d){var _0x57deae=_0x465f93?function(){var _0x128de6=a55_0x90be;if(_0x16a00d){var _0x369997=_0x16a00d[_0x128de6(0x14e)](_0x24eeaa,arguments);return _0x16a00d=null,_0x369997;}}:function(){};return _0x465f93=![],_0x57deae;};}()),a55_0x192aed=a55_0x1f70c9(this,function(){var _0x1da73f=a55_0x90be;return a55_0x192aed['toString']()[_0x1da73f(0x148)]('(((.+)+)+)+$')['toString']()[_0x1da73f(0x146)](a55_0x192aed)[_0x1da73f(0x148)]('(((.+)+)+)+$');});function a55_0x4737(){var _0x214892=['__decorate','true','metadata','jobId','Version','apply','data-masking','Post','length','param','__metadata','./services/masking.service','24052bSlQNq','getJobDetails','64388TTiLGS','Controller','function','offset','job','defineProperty','48uxiDhJ','design:paramtypes','MaskingService','__esModule','2353527NOoLWL','createJob','includeDetails','3078656aEoybD','design:returntype','getLog','getJobState','path','../../core','body','30288rEKIRM','Param\x20\x27limit\x27\x20is\x20missed','5DSwXXp','decorate','prototype','query','limit','Get','job/:jobId','DataMaskingController','872720QnETZh','558wfzpWH','design:type','1757990QVqPBF','object','constructor','job/:jobId/log','search'];a55_0x4737=function(){return _0x214892;};return a55_0x4737();}a55_0x192aed();'use strict';var __decorate=this&&this[a55_0x9f77f8(0x149)]||function(_0x2a7d3e,_0x293906,_0x211d35,_0x3e341b){var _0x1de853=a55_0x9f77f8,_0x328d80=arguments[_0x1de853(0x151)],_0x464719=_0x328d80<0x3?_0x293906:_0x3e341b===null?_0x3e341b=Object['getOwnPropertyDescriptor'](_0x293906,_0x211d35):_0x3e341b,_0x12f27f;if(typeof Reflect==='object'&&typeof Reflect[_0x1de853(0x16e)]==='function')_0x464719=Reflect['decorate'](_0x2a7d3e,_0x293906,_0x211d35,_0x3e341b);else{for(var _0xd01117=_0x2a7d3e['length']-0x1;_0xd01117>=0x0;_0xd01117--)if(_0x12f27f=_0x2a7d3e[_0xd01117])_0x464719=(_0x328d80<0x3?_0x12f27f(_0x464719):_0x328d80>0x3?_0x12f27f(_0x293906,_0x211d35,_0x464719):_0x12f27f(_0x293906,_0x211d35))||_0x464719;}return _0x328d80>0x3&&_0x464719&&Object[_0x1de853(0x15c)](_0x293906,_0x211d35,_0x464719),_0x464719;},__metadata=this&&this[a55_0x9f77f8(0x153)]||function(_0x5d71eb,_0x59bf0e){var _0x276d4b=a55_0x9f77f8;if(typeof Reflect===_0x276d4b(0x145)&&typeof Reflect['metadata']===_0x276d4b(0x159))return Reflect[_0x276d4b(0x14b)](_0x5d71eb,_0x59bf0e);},__param=this&&this['__param']||function(_0x5f7a6b,_0x375d90){return function(_0x2def58,_0x1e91af){_0x375d90(_0x2def58,_0x1e91af,_0x5f7a6b);};};Object['defineProperty'](exports,a55_0x9f77f8(0x160),{'value':!![]}),exports[a55_0x9f77f8(0x174)]=void 0x0;function a55_0x90be(_0x4d47ac,_0x3d12bf){var _0x2cfb65=a55_0x4737();return a55_0x90be=function(_0x192aed,_0x1f70c9){_0x192aed=_0x192aed-0x141;var _0x47373b=_0x2cfb65[_0x192aed];return _0x47373b;},a55_0x90be(_0x4d47ac,_0x3d12bf);}const core_1=require(a55_0x9f77f8(0x169)),masking_service_1=require(a55_0x9f77f8(0x154)),bad_request_error_1=require('../../core/errors/bad-request.error');let DataMaskingController=class DataMaskingController{async['createJob'](_0x2d37c8){var _0x2f2070=a55_0x9f77f8;return masking_service_1[_0x2f2070(0x15f)]['createMaskingJob'](_0x2d37c8);}async['getJobs'](_0x53ec16,_0x400b71){var _0x22dc7f=a55_0x9f77f8;if(!_0x53ec16)throw new bad_request_error_1['BadRequestError'](_0x22dc7f(0x16c));return masking_service_1[_0x22dc7f(0x15f)]['getJobs'](+_0x53ec16,+(_0x400b71||0x0));}async[a55_0x9f77f8(0x167)](_0x47b691,_0x782685){var _0x4730f6=a55_0x9f77f8;return masking_service_1['MaskingService'][_0x4730f6(0x167)](_0x47b691,_0x782685===_0x4730f6(0x14a));}async[a55_0x9f77f8(0x166)](_0x49f50a){var _0x11f287=a55_0x9f77f8;return masking_service_1[_0x11f287(0x15f)][_0x11f287(0x156)](_0x49f50a);}};__decorate([(0x0,core_1[a55_0x9f77f8(0x150)])('job'),__param(0x0,core_1['param'][a55_0x9f77f8(0x16a)]()),__metadata(a55_0x9f77f8(0x143),Function),__metadata(a55_0x9f77f8(0x15e),[Object]),__metadata(a55_0x9f77f8(0x165),Promise)],DataMaskingController[a55_0x9f77f8(0x16f)],a55_0x9f77f8(0x162),null),__decorate([(0x0,core_1[a55_0x9f77f8(0x172)])(a55_0x9f77f8(0x15b)),__param(0x0,core_1[a55_0x9f77f8(0x152)][a55_0x9f77f8(0x170)](a55_0x9f77f8(0x171))),__param(0x1,core_1['param'][a55_0x9f77f8(0x170)](a55_0x9f77f8(0x15a))),__metadata(a55_0x9f77f8(0x143),Function),__metadata(a55_0x9f77f8(0x15e),[String,String]),__metadata('design:returntype',Promise)],DataMaskingController[a55_0x9f77f8(0x16f)],'getJobs',null),__decorate([(0x0,core_1['Get'])(a55_0x9f77f8(0x173)),__param(0x0,core_1['param'][a55_0x9f77f8(0x168)]('jobId')),__param(0x1,core_1[a55_0x9f77f8(0x152)][a55_0x9f77f8(0x170)](a55_0x9f77f8(0x163))),__metadata(a55_0x9f77f8(0x143),Function),__metadata(a55_0x9f77f8(0x15e),[String,String]),__metadata(a55_0x9f77f8(0x165),Promise)],DataMaskingController[a55_0x9f77f8(0x16f)],a55_0x9f77f8(0x167),null),__decorate([(0x0,core_1[a55_0x9f77f8(0x172)])(a55_0x9f77f8(0x147)),__param(0x0,core_1[a55_0x9f77f8(0x152)][a55_0x9f77f8(0x168)](a55_0x9f77f8(0x14c))),__metadata('design:type',Function),__metadata(a55_0x9f77f8(0x15e),[String]),__metadata(a55_0x9f77f8(0x165),Promise)],DataMaskingController[a55_0x9f77f8(0x16f)],'getLog',null),DataMaskingController=__decorate([(0x0,core_1[a55_0x9f77f8(0x158)])(a55_0x9f77f8(0x14f)),(0x0,core_1[a55_0x9f77f8(0x14d)])('v1')],DataMaskingController),exports['DataMaskingController']=DataMaskingController;