const a275_0x16bc76=a275_0x4dc8;(function(_0x52ea8a,_0x9e2835){const _0x462904=a275_0x4dc8,_0x2f0571=_0x52ea8a();while(!![]){try{const _0x2d3d38=parseInt(_0x462904(0xe7))/0x1*(parseInt(_0x462904(0x106))/0x2)+parseInt(_0x462904(0x100))/0x3+-parseInt(_0x462904(0xf7))/0x4+-parseInt(_0x462904(0xeb))/0x5+parseInt(_0x462904(0x109))/0x6*(-parseInt(_0x462904(0x102))/0x7)+-parseInt(_0x462904(0xff))/0x8+-parseInt(_0x462904(0xf1))/0x9*(-parseInt(_0x462904(0x105))/0xa);if(_0x2d3d38===_0x9e2835)break;else _0x2f0571['push'](_0x2f0571['shift']());}catch(_0x24e7b6){_0x2f0571['push'](_0x2f0571['shift']());}}}(a275_0x22c8,0x6d895));const a275_0x4a84f5=(function(){let _0x3f9b43=!![];return function(_0x33f6d4,_0x358e6c){const _0x5b8c63=_0x3f9b43?function(){const _0x18e44d=a275_0x4dc8;if(_0x358e6c){const _0x360a50=_0x358e6c[_0x18e44d(0xfa)](_0x33f6d4,arguments);return _0x358e6c=null,_0x360a50;}}:function(){};return _0x3f9b43=![],_0x5b8c63;};}()),a275_0x2350d3=a275_0x4a84f5(this,function(){const _0x1bfdf6=a275_0x4dc8;return a275_0x2350d3[_0x1bfdf6(0x101)]()[_0x1bfdf6(0x104)](_0x1bfdf6(0xe6))[_0x1bfdf6(0x101)]()['constructor'](a275_0x2350d3)[_0x1bfdf6(0x104)](_0x1bfdf6(0xe6));});a275_0x2350d3();function a275_0x22c8(){const _0x10ba05=['./classes/logger','../../../core','./classes/retrieve-metadata','(((.+)+)+)+$','1FSXebf','error','jobStorePath','slice','1839155chGJjH','catch','setCompleted','Retrieve\x20metadata\x20job\x20has\x20been\x20failed','../../shared/managers/state-manger','Retrieve\x20metadata\x20job\x20has\x20been\x20completed','639mcBhlf','Job','execute','Retrieve\x20metadata\x20job\x20has\x20been\x20started','defineProperty','default','1360260ESqIiH','__importDefault','then','apply','setError','setInProgress','jobId','Logger','5066792gCHBGH','1805793ZGrhbq','toString','567231oNpRqp','__esModule','search','149460rJAOKe','1550146buoUga','message','init','48YmhTde','argv','exit'];a275_0x22c8=function(){return _0x10ba05;};return a275_0x22c8();}'use strict';function a275_0x4dc8(_0x5bc5c2,_0x4d3f94){const _0x5268ba=a275_0x22c8();return a275_0x4dc8=function(_0x2350d3,_0x4a84f5){_0x2350d3=_0x2350d3-0xe2;let _0x22c84b=_0x5268ba[_0x2350d3];return _0x22c84b;},a275_0x4dc8(_0x5bc5c2,_0x4d3f94);}var __importDefault=this&&this[a275_0x16bc76(0xf8)]||function(_0x1ce306){const _0x18a99d=a275_0x16bc76;return _0x1ce306&&_0x1ce306[_0x18a99d(0x103)]?_0x1ce306:{'default':_0x1ce306};};Object[a275_0x16bc76(0xf5)](exports,a275_0x16bc76(0x103),{'value':!![]}),exports[a275_0x16bc76(0xf2)]=void 0x0;const minimist_1=__importDefault(require('minimist')),state_manger_1=__importDefault(require(a275_0x16bc76(0xef))),core_1=require(a275_0x16bc76(0xe4)),logger_1=__importDefault(require(a275_0x16bc76(0xe3))),retrieve_metadata_1=__importDefault(require(a275_0x16bc76(0xe5)));class Job{constructor(){const _0x49773e=a275_0x16bc76,{jobId:_0xef6b2d,jobStorePath:_0xac4cf2}=(0x0,minimist_1[_0x49773e(0xf6)])(process[_0x49773e(0x10a)][_0x49773e(0xea)](0x2));this[_0x49773e(0xe9)]=_0xac4cf2,this[_0x49773e(0xfd)]=_0xef6b2d;}async[a275_0x16bc76(0xf3)](){const _0x4836d4=a275_0x16bc76,_0x244b7e=new core_1[(_0x4836d4(0xfe))](this[_0x4836d4(0xfd)]),_0x51ae64=new logger_1[(_0x4836d4(0xf6))](this[_0x4836d4(0xfd)],_0x244b7e),_0x1a4776=await new state_manger_1[(_0x4836d4(0xf6))](this[_0x4836d4(0xe9)])[_0x4836d4(0x108)]();await _0x51ae64['log'](_0x4836d4(0xf4));try{await _0x1a4776[_0x4836d4(0xfc)](),await new retrieve_metadata_1[(_0x4836d4(0xf6))](this[_0x4836d4(0xe9)],_0x51ae64,_0x1a4776)[_0x4836d4(0xf3)](),await _0x1a4776[_0x4836d4(0xed)](),await _0x51ae64['log'](_0x4836d4(0xf0));}catch(_0x4db63d){await _0x1a4776[_0x4836d4(0xfb)](_0x4db63d),await _0x51ae64['error'](_0x4836d4(0xee)),await _0x51ae64[_0x4836d4(0xe8)](_0x4db63d[_0x4836d4(0x107)]);}}}exports['Job']=Job,new Job()['execute']()[a275_0x16bc76(0xf9)](()=>process['exit'](0x0))[a275_0x16bc76(0xec)](()=>process[a275_0x16bc76(0xe2)](0x1));