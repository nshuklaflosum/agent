function a166_0x4b53(){const _0x4b619f=['Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s\x20to\x20get\x20component\x20name.\x20Original\x20error:\x20','readComponent','apply','replace','join','logger','defineProperty','split','../internal/fs.internal','129528pKSBxW','relative','Can\x20not\x20find\x20DataPack\x20file\x20in\x20Vlocity\x20component.','23176jHDVTe','./base.parser','readDir','BaseParser','9072YXUoyG','1972510GOLzIA','219856MeOBTC','(((.+)+)+)+$','VlocityParser','paths','Name','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','4uMkSBR','VLOCITY_DATA_PACK_EXTENSION','name','_DataPack.json','execute','2284251bmMDrd','entries','sourceDir','find','search','6530772pbiByX','extractFileNameFromFiles','crc','parse','sep','log','toString','path','30589PklhRb'];a166_0x4b53=function(){return _0x4b619f;};return a166_0x4b53();}const a166_0x2d903a=a166_0x1103;(function(_0xbd56fd,_0x488bde){const _0x3a4722=a166_0x1103,_0xcc058d=_0xbd56fd();while(!![]){try{const _0x4d2e0a=-parseInt(_0x3a4722(0x1b7))/0x1+-parseInt(_0x3a4722(0x196))/0x2+-parseInt(_0x3a4722(0x1aa))/0x3*(parseInt(_0x3a4722(0x1a5))/0x4)+-parseInt(_0x3a4722(0x19e))/0x5+-parseInt(_0x3a4722(0x1af))/0x6+parseInt(_0x3a4722(0x19f))/0x7+-parseInt(_0x3a4722(0x199))/0x8*(-parseInt(_0x3a4722(0x19d))/0x9);if(_0x4d2e0a===_0x488bde)break;else _0xcc058d['push'](_0xcc058d['shift']());}catch(_0xc98a9e){_0xcc058d['push'](_0xcc058d['shift']());}}}(a166_0x4b53,0x9560a));const a166_0xa3984f=(function(){let _0x4a12a3=!![];return function(_0x11c471,_0x5058fe){const _0x313310=_0x4a12a3?function(){const _0x3088f5=a166_0x1103;if(_0x5058fe){const _0x4c9358=_0x5058fe[_0x3088f5(0x18f)](_0x11c471,arguments);return _0x5058fe=null,_0x4c9358;}}:function(){};return _0x4a12a3=![],_0x313310;};}()),a166_0x532e76=a166_0xa3984f(this,function(){const _0x437a19=a166_0x1103;return a166_0x532e76[_0x437a19(0x1b5)]()['search'](_0x437a19(0x1a0))[_0x437a19(0x1b5)]()['constructor'](a166_0x532e76)[_0x437a19(0x1ae)](_0x437a19(0x1a0));});a166_0x532e76();'use strict';Object[a166_0x2d903a(0x193)](exports,'__esModule',{'value':!![]}),exports[a166_0x2d903a(0x1a1)]=void 0x0;const base_parser_1=require(a166_0x2d903a(0x19a)),fs_internal_1=require(a166_0x2d903a(0x195)),crc32_1=require('./utils/crc32'),path_1=require(a166_0x2d903a(0x1b6));function a166_0x1103(_0x61b13a,_0x4dd2e9){const _0x473b51=a166_0x4b53();return a166_0x1103=function(_0x532e76,_0xa3984f){_0x532e76=_0x532e76-0x18d;let _0x4b53e4=_0x473b51[_0x532e76];return _0x4b53e4;},a166_0x1103(_0x61b13a,_0x4dd2e9);}class VlocityParser extends base_parser_1[a166_0x2d903a(0x19c)]{constructor({sourceDir:_0x52f5b4,paths:_0x36585e}){const _0x4f9b8b=a166_0x2d903a;super({'sourceDir':_0x52f5b4,'paths':_0x36585e},VlocityParser[_0x4f9b8b(0x1a7)]),this[_0x4f9b8b(0x1a6)]=_0x4f9b8b(0x1a8);}async[a166_0x2d903a(0x18e)](_0x917d06){const _0x67cbfc=a166_0x2d903a,_0x3e1eec=(0x0,path_1[_0x67cbfc(0x191)])(this[_0x67cbfc(0x1ac)],_0x917d06),_0x41f9b9=await fs_internal_1['FS'][_0x67cbfc(0x19b)](_0x3e1eec,!![]),_0x2d98a4={};for(const _0x37389a of _0x41f9b9){_0x2d98a4[(0x0,path_1[_0x67cbfc(0x197)])(this[_0x67cbfc(0x1ac)],_0x37389a)[_0x67cbfc(0x190)](/\\/g,'/')]=await fs_internal_1['FS']['readFile'](_0x37389a,!![]);}return _0x2d98a4;}[a166_0x2d903a(0x1b0)]({files:_0x221ae5}){const _0x51d72d=a166_0x2d903a,_0x44960b=Object[_0x51d72d(0x1ab)](_0x221ae5)[_0x51d72d(0x1ad)](([_0xca939])=>_0xca939['endsWith'](this['VLOCITY_DATA_PACK_EXTENSION']));if(!_0x44960b)throw new Error(_0x51d72d(0x198));const _0x253a0b=JSON[_0x51d72d(0x1b2)](_0x44960b[0x1][_0x51d72d(0x1b5)]());return _0x253a0b[_0x51d72d(0x1a3)];}async[a166_0x2d903a(0x1a9)](){const _0x3f019d=a166_0x2d903a,_0x59ed26=this[_0x3f019d(0x1a2)][0x0],[_0x21200d,_0x10338d]=_0x59ed26[_0x3f019d(0x194)](path_1[_0x3f019d(0x1b3)]);let _0x11cf1e,_0x2b4055=_0x10338d;try{_0x11cf1e=await this[_0x3f019d(0x18e)](_0x59ed26);}catch(_0x362ac6){return this['logger']['error'](_0x3f019d(0x1a4),_0x59ed26,_0x362ac6),[];}try{_0x2b4055=this[_0x3f019d(0x1b0)]({'files':_0x11cf1e});}catch(_0x4617eb){this[_0x3f019d(0x192)][_0x3f019d(0x1b4)](_0x3f019d(0x18d),_0x59ed26,_0x4617eb);}const _0x4c2096={'files':_0x11cf1e,'vlocityComponentName':_0x2b4055,'filePath':_0x59ed26,'type':_0x21200d,'name':_0x10338d,'crc':'','isVlocityComponent':!![]},_0x888e7c=(0x0,crc32_1['calculateCRC32'])(_0x4c2096);return _0x4c2096[_0x3f019d(0x1b1)]=_0x888e7c,[_0x4c2096];}}exports[a166_0x2d903a(0x1a1)]=VlocityParser;