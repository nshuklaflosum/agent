function a114_0x121e(){const _0x51fb95=['slice','search','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','join','waveTemplates','extractComponentTypeFromFiles','Logger','defineProperty','Xml','endsWith','replace','__esModule','paths','name','__importDefault','package.xml','relative','497541tTWopA','files','readComponent','../utils/xml','exists','../../../../constants','path','readBundledComponent','10094qEGOLn','CustomLabels','../data/child-types-map','3704mlewoU','META_EXTENSION','push','crc','dir','toString','(((.+)+)+)+$','37043413ahzElr','startsWith','catch','hasChildNodes','readDir','split','getChildsByName','1762410BjPozg','error','extractFileNameFromFiles','Cannot\x20parse\x20children\x20in\x20','default','24MVZttE','../../internal/fs.internal','createChildComponentsFromParent','WaveTemplateBundle','reduce','logger','../utils','calculateCRC32','426SEzKwq','-meta.xml','includes','readChildComponents','14769HwkcPt','extractFilenameFromPath','11521340lYlktZ','type','.site-meta.xml','filter','test','../utils/crc32','filePath','../../../../core','275gpMDtK','parse','BUNDLED_FOLDERS_REGEXP','META_EXPERIENCES_EXTENSION','foldBundledComponentsPaths','62433VpIqgA','readFile','values'];a114_0x121e=function(){return _0x51fb95;};return a114_0x121e();}const a114_0x32dd31=a114_0x1909;function a114_0x1909(_0x514925,_0x1becd9){const _0x160724=a114_0x121e();return a114_0x1909=function(_0x3a9dbd,_0x3cfe2f){_0x3a9dbd=_0x3a9dbd-0x1b3;let _0x121ed7=_0x160724[_0x3a9dbd];return _0x121ed7;},a114_0x1909(_0x514925,_0x1becd9);}(function(_0x3138d1,_0x18092d){const _0x502031=a114_0x1909,_0x3cdb72=_0x3138d1();while(!![]){try{const _0x53c41e=-parseInt(_0x502031(0x1eb))/0x1*(-parseInt(_0x502031(0x1bf))/0x2)+parseInt(_0x502031(0x1b7))/0x3*(-parseInt(_0x502031(0x1d5))/0x4)+-parseInt(_0x502031(0x1d0))/0x5+parseInt(_0x502031(0x1dd))/0x6*(-parseInt(_0x502031(0x1f0))/0x7)+parseInt(_0x502031(0x1c2))/0x8*(-parseInt(_0x502031(0x1e1))/0x9)+-parseInt(_0x502031(0x1e3))/0xa+parseInt(_0x502031(0x1c9))/0xb;if(_0x53c41e===_0x18092d)break;else _0x3cdb72['push'](_0x3cdb72['shift']());}catch(_0x18c321){_0x3cdb72['push'](_0x3cdb72['shift']());}}}(a114_0x121e,0xd2a3a));const a114_0x3cfe2f=(function(){let _0x19ffba=!![];return function(_0x32e1cd,_0x5a2615){const _0x3a88cf=_0x19ffba?function(){if(_0x5a2615){const _0x4be0d2=_0x5a2615['apply'](_0x32e1cd,arguments);return _0x5a2615=null,_0x4be0d2;}}:function(){};return _0x19ffba=![],_0x3a88cf;};}()),a114_0x3a9dbd=a114_0x3cfe2f(this,function(){const _0x4e8807=a114_0x1909;return a114_0x3a9dbd[_0x4e8807(0x1c7)]()[_0x4e8807(0x1f4)]('(((.+)+)+)+$')[_0x4e8807(0x1c7)]()['constructor'](a114_0x3a9dbd)[_0x4e8807(0x1f4)](_0x4e8807(0x1c8));});a114_0x3a9dbd();'use strict';var __importDefault=this&&this[a114_0x32dd31(0x1b4)]||function(_0x16efdb){const _0x39b01e=a114_0x32dd31;return _0x16efdb&&_0x16efdb[_0x39b01e(0x1fe)]?_0x16efdb:{'default':_0x16efdb};};Object[a114_0x32dd31(0x1fa)](exports,a114_0x32dd31(0x1fe),{'value':!![]}),exports['MDApiParserV2']=void 0x0;const fs_internal_1=require(a114_0x32dd31(0x1d6)),utils_1=require(a114_0x32dd31(0x1db)),path_1=require(a114_0x32dd31(0x1bd)),xml_1=require(a114_0x32dd31(0x1ba)),child_types_map_1=__importDefault(require(a114_0x32dd31(0x1c1))),constants_1=require(a114_0x32dd31(0x1bc)),core_1=require(a114_0x32dd31(0x1ea)),crc32_1=require(a114_0x32dd31(0x1e8)),folder_types_1=__importDefault(require('../data/folder-types')),CHILD_XML_KEYS=Object['values'](child_types_map_1[a114_0x32dd31(0x1d4)]);class MDApiParserV2{constructor(_0x14ff36,_0x4cedfe){const _0x2afb91=a114_0x32dd31;this[_0x2afb91(0x1c6)]=_0x14ff36,this[_0x2afb91(0x1ff)]=_0x4cedfe,this[_0x2afb91(0x1da)]=new core_1[(_0x2afb91(0x1f9))](MDApiParserV2[_0x2afb91(0x1b3)]),this['META_EXTENSION']=_0x2afb91(0x1de),this['META_EXPERIENCES_EXTENSION']=_0x2afb91(0x1e5);}async['readChildComponents'](_0x56ce33){const _0x564d36=a114_0x32dd31;try{const _0x5ec04e=await xml_1[_0x564d36(0x1fb)]['parse'](Object[_0x564d36(0x1f2)](_0x56ce33[_0x564d36(0x1b8)])[0x0]['toString']('utf-8')),_0x3f79c3=CHILD_XML_KEYS[_0x564d36(0x1e6)](_0x109996=>xml_1[_0x564d36(0x1fb)][_0x564d36(0x1cc)](_0x5ec04e,_0x109996))[_0x564d36(0x1d9)]((_0x1986f9,_0x433816)=>[..._0x1986f9,...xml_1[_0x564d36(0x1fb)][_0x564d36(0x1cf)](_0x5ec04e,_0x433816)],[]);return(0x0,utils_1[_0x564d36(0x1d7)])(_0x56ce33,_0x5ec04e,_0x3f79c3);}catch(_0x284f3d){throw new Error(_0x564d36(0x1d3)+_0x56ce33[_0x564d36(0x1b3)]+'\x20['+_0x56ce33[_0x564d36(0x1e4)]+']');}}async[a114_0x32dd31(0x1be)](_0xfe0170){const _0x4d3b83=a114_0x32dd31,_0x3599f7=(0x0,path_1[_0x4d3b83(0x1f6)])(this[_0x4d3b83(0x1c6)],_0xfe0170),_0x58c5ee=_0xfe0170+(_0xfe0170[_0x4d3b83(0x1ca)]('experiences')?this[_0x4d3b83(0x1ee)]:this[_0x4d3b83(0x1c3)]),_0x31958a=await fs_internal_1['FS'][_0x4d3b83(0x1cd)](_0x3599f7,!![]),_0x3032e3=await fs_internal_1['FS']['readFile']((0x0,path_1[_0x4d3b83(0x1f6)])(this[_0x4d3b83(0x1c6)],_0x58c5ee),!![])[_0x4d3b83(0x1cb)](()=>null),_0x238a26={};for(const _0x1437ff of _0x31958a){_0x238a26[(0x0,path_1[_0x4d3b83(0x1b6)])(this[_0x4d3b83(0x1c6)],_0x1437ff)[_0x4d3b83(0x1fd)](/\\/g,'/')]=await fs_internal_1['FS'][_0x4d3b83(0x1f1)](_0x1437ff,!![]);}return _0x3032e3&&(_0x238a26[(0x0,path_1[_0x4d3b83(0x1b6)])(this[_0x4d3b83(0x1c6)],_0x58c5ee)[_0x4d3b83(0x1fd)](/\\/g,'/')]=_0x3032e3),_0x238a26;}async[a114_0x32dd31(0x1b9)](_0x1fb3d0){const _0x277d4c=a114_0x32dd31,_0x22a425=_0x1fb3d0+this[_0x277d4c(0x1c3)];if(constants_1['BUNDLED_FOLDERS_REGEXP'][_0x277d4c(0x1e7)](_0x1fb3d0))return this[_0x277d4c(0x1be)](_0x1fb3d0);if(await fs_internal_1['FS'][_0x277d4c(0x1bb)]((0x0,path_1[_0x277d4c(0x1f6)])(this[_0x277d4c(0x1c6)],_0x22a425))){const _0x589a4a=await fs_internal_1['FS'][_0x277d4c(0x1f1)]((0x0,path_1[_0x277d4c(0x1f6)])(this['dir'],_0x22a425),!![]),_0x44de6a=await(0x0,utils_1[_0x277d4c(0x1f8)])({'files':{[_0x22a425]:_0x589a4a}})[_0x277d4c(0x1cb)](()=>null);if(_0x44de6a&&folder_types_1[_0x277d4c(0x1d4)][_0x277d4c(0x1df)](_0x44de6a))return{[_0x22a425]:_0x589a4a};return{[_0x22a425]:_0x589a4a,[_0x1fb3d0]:await fs_internal_1['FS'][_0x277d4c(0x1f1)]((0x0,path_1[_0x277d4c(0x1f6)])(this[_0x277d4c(0x1c6)],_0x1fb3d0),!![])};}return{[_0x1fb3d0]:await fs_internal_1['FS'][_0x277d4c(0x1f1)]((0x0,path_1['join'])(this[_0x277d4c(0x1c6)],_0x1fb3d0),!![])};}[a114_0x32dd31(0x1ef)](){const _0x24434a=a114_0x32dd31;this['paths']=this[_0x24434a(0x1ff)]['map'](_0x30e112=>constants_1['BUNDLED_FOLDERS_REGEXP']['test'](_0x30e112)?_0x30e112[_0x24434a(0x1ce)]('/')[_0x24434a(0x1f3)](0x0,0x2)[_0x24434a(0x1f6)]('/'):_0x30e112),this[_0x24434a(0x1ff)]=[...new Set(this[_0x24434a(0x1ff)])];}async[a114_0x32dd31(0x1ec)](){const _0x52987b=a114_0x32dd31,_0x4927f1=[];this[_0x52987b(0x1ef)]();for(const _0x578d54 of this['paths']){if(_0x578d54[_0x52987b(0x1fc)](_0x52987b(0x1b5)))continue;const _0x46d50f={};try{_0x46d50f[_0x52987b(0x1b8)]=await this[_0x52987b(0x1b9)](_0x578d54),_0x46d50f[_0x52987b(0x1e9)]=constants_1[_0x52987b(0x1ed)]['test'](_0x578d54)?_0x578d54:(0x0,utils_1[_0x52987b(0x1d2)])({'files':_0x46d50f[_0x52987b(0x1b8)]}),_0x578d54[_0x52987b(0x1ca)](_0x52987b(0x1f7))?_0x46d50f[_0x52987b(0x1e4)]=_0x52987b(0x1d8):_0x46d50f[_0x52987b(0x1e4)]=await(0x0,utils_1[_0x52987b(0x1f8)])({'files':_0x46d50f[_0x52987b(0x1b8)]});}catch(_0x4388e3){this['logger'][_0x52987b(0x1d1)](_0x52987b(0x1f5),_0x578d54,_0x4388e3);continue;}_0x46d50f[_0x52987b(0x1b3)]=(0x0,utils_1[_0x52987b(0x1e2)])(_0x578d54),_0x46d50f[_0x52987b(0x1c5)]=(0x0,crc32_1[_0x52987b(0x1dc)])(_0x46d50f);if((0x0,utils_1['isParentComponent'])(_0x46d50f)){const _0x2c5e94=await this[_0x52987b(0x1e0)](_0x46d50f);_0x4927f1[_0x52987b(0x1c4)](..._0x2c5e94);}if(_0x46d50f[_0x52987b(0x1e4)]===_0x52987b(0x1c0))continue;_0x4927f1[_0x52987b(0x1c4)](_0x46d50f);}return _0x4927f1;}}exports['MDApiParserV2']=MDApiParserV2;