function a155_0x46a4(_0x1d6a15,_0x44cc87){const _0x4aae67=a155_0x33c0();return a155_0x46a4=function(_0x579fc2,_0x4034ff){_0x579fc2=_0x579fc2-0x94;let _0x33c08e=_0x4aae67[_0x579fc2];return _0x33c08e;},a155_0x46a4(_0x1d6a15,_0x44cc87);}const a155_0x4b7729=a155_0x46a4;(function(_0x3b5f4e,_0x319885){const _0x2024dc=a155_0x46a4,_0x4119e9=_0x3b5f4e();while(!![]){try{const _0x342a6d=-parseInt(_0x2024dc(0xa9))/0x1+parseInt(_0x2024dc(0xdb))/0x2+parseInt(_0x2024dc(0xa6))/0x3+-parseInt(_0x2024dc(0xad))/0x4+parseInt(_0x2024dc(0x99))/0x5+-parseInt(_0x2024dc(0xae))/0x6*(parseInt(_0x2024dc(0x98))/0x7)+-parseInt(_0x2024dc(0xb5))/0x8*(-parseInt(_0x2024dc(0xb4))/0x9);if(_0x342a6d===_0x319885)break;else _0x4119e9['push'](_0x4119e9['shift']());}catch(_0x4d696d){_0x4119e9['push'](_0x4119e9['shift']());}}}(a155_0x33c0,0x1eb70));const a155_0x4034ff=(function(){let _0x4db7d6=!![];return function(_0x23e7f5,_0x5d5540){const _0x398867=_0x4db7d6?function(){const _0x50412e=a155_0x46a4;if(_0x5d5540){const _0x58c75e=_0x5d5540[_0x50412e(0xa5)](_0x23e7f5,arguments);return _0x5d5540=null,_0x58c75e;}}:function(){};return _0x4db7d6=![],_0x398867;};}()),a155_0x579fc2=a155_0x4034ff(this,function(){const _0x3ab3b9=a155_0x46a4;return a155_0x579fc2[_0x3ab3b9(0xd7)]()[_0x3ab3b9(0xb7)](_0x3ab3b9(0x94))['toString']()[_0x3ab3b9(0xd4)](a155_0x579fc2)[_0x3ab3b9(0xb7)](_0x3ab3b9(0x94));});a155_0x579fc2();'use strict';var __importDefault=this&&this[a155_0x4b7729(0x96)]||function(_0x56759a){return _0x56759a&&_0x56759a['__esModule']?_0x56759a:{'default':_0x56759a};};Object[a155_0x4b7729(0xcc)](exports,'__esModule',{'value':!![]}),exports[a155_0x4b7729(0xd5)]=void 0x0;function a155_0x33c0(){const _0x253f96=['sourceDir','includes','329812RlYFQO','6RhcQfV','XmlV2','join','values','BUNDLED_FOLDERS_REGEXP','experiences','93384DWoLSN','392dGGwQw','path','search','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','catch','Settings','readDir','utf-8','./utils/crc32','createChildComponentsFromParent','BaseParser','-meta.xml','replace','name','extractFilenameFromPath','split','./base.parser','CustomLabels','extractComponentTypeFromFiles','extractFileNameFromFiles','./utils/xml-v2','readChildComponents','slice','defineProperty','./data/settings-types-list','waveTemplates','paths','readBundledComponent','calculateCRC32','files','default','constructor','MDApiParserV2','.site-meta.xml','toString','type','./data/folder-types','hasChildNodes','14130ysCiqK','foldBundledComponentsPaths','startsWith','(((.+)+)+)+$','exists','__importDefault','reduce','1602769oTMGUE','35115KslLLr','filter','crc','META_EXPERIENCES_EXTENSION','push','readComponent','readFile','map','getChildsByName','logger','META_EXTENSION','WaveTemplateBundle','apply','411246WRkNHA','test','../../../constants','222366otqMQQ','Cannot\x20parse\x20children\x20in\x20'];a155_0x33c0=function(){return _0x253f96;};return a155_0x33c0();}const fs_internal_1=require('../internal/fs.internal'),utils_1=require('./utils'),path_1=require(a155_0x4b7729(0xb6)),xml_v2_1=require(a155_0x4b7729(0xc9)),child_types_map_1=__importDefault(require('./data/child-types-map')),constants_1=require(a155_0x4b7729(0xa8)),crc32_1=require(a155_0x4b7729(0xbd)),folder_types_1=__importDefault(require(a155_0x4b7729(0xd9))),settings_types_list_1=__importDefault(require(a155_0x4b7729(0xcd))),base_parser_1=require(a155_0x4b7729(0xc5)),CHILD_XML_KEYS=Object[a155_0x4b7729(0xb1)](child_types_map_1[a155_0x4b7729(0xd3)]);class MDApiParserV2 extends base_parser_1[a155_0x4b7729(0xbf)]{constructor({sourceDir:_0x48d528,paths:_0x4a141d}){const _0x3207df=a155_0x4b7729;super({'sourceDir':_0x48d528,'paths':_0x4a141d},MDApiParserV2[_0x3207df(0xc2)]),this['META_EXTENSION']=_0x3207df(0xc0),this[_0x3207df(0x9c)]=_0x3207df(0xd6);}async['readChildComponents'](_0x52fb21){const _0xa2833b=a155_0x4b7729;try{const _0x2cc869=await xml_v2_1[_0xa2833b(0xaf)]['parse'](Object[_0xa2833b(0xb1)](_0x52fb21[_0xa2833b(0xd2)])[0x0][_0xa2833b(0xd7)](_0xa2833b(0xbc))),_0x23370f=CHILD_XML_KEYS[_0xa2833b(0x9a)](_0x4d82e5=>xml_v2_1[_0xa2833b(0xaf)][_0xa2833b(0xda)](_0x2cc869,_0x4d82e5))[_0xa2833b(0x97)]((_0x2decc7,_0x1ad035)=>[..._0x2decc7,...xml_v2_1['XmlV2'][_0xa2833b(0xa1)](_0x2cc869,_0x1ad035)],[]);return(0x0,utils_1[_0xa2833b(0xbe)])(_0x52fb21,_0x2cc869,_0x23370f);}catch(_0x2417a7){throw new Error(_0xa2833b(0xaa)+_0x52fb21[_0xa2833b(0xc2)]+'\x20['+_0x52fb21[_0xa2833b(0xd8)]+']');}}async[a155_0x4b7729(0xd0)](_0x3732d0){const _0x55c764=a155_0x4b7729,_0x14fee8=(0x0,path_1[_0x55c764(0xb0)])(this[_0x55c764(0xab)],_0x3732d0),_0x2ba7d0=_0x3732d0+(_0x3732d0['startsWith'](_0x55c764(0xb3))?this[_0x55c764(0x9c)]:this[_0x55c764(0xa3)]),_0x4111b8=await fs_internal_1['FS'][_0x55c764(0xbb)](_0x14fee8,!![]),_0x5b3b40=await fs_internal_1['FS'][_0x55c764(0x9f)]((0x0,path_1[_0x55c764(0xb0)])(this[_0x55c764(0xab)],_0x2ba7d0),!![])['catch'](()=>null),_0x46d89e={};for(const _0x3de19b of _0x4111b8){_0x46d89e[(0x0,path_1['relative'])(this[_0x55c764(0xab)],_0x3de19b)[_0x55c764(0xc1)](/\\/g,'/')]=await fs_internal_1['FS'][_0x55c764(0x9f)](_0x3de19b,!![]);}return _0x5b3b40&&(_0x46d89e[(0x0,path_1['relative'])(this[_0x55c764(0xab)],_0x2ba7d0)[_0x55c764(0xc1)](/\\/g,'/')]=_0x5b3b40),_0x46d89e;}async[a155_0x4b7729(0x9e)](_0x4c4078){const _0x3f49a2=a155_0x4b7729,_0x595b73=_0x4c4078+this[_0x3f49a2(0xa3)];if(constants_1[_0x3f49a2(0xb2)][_0x3f49a2(0xa7)](_0x4c4078))return this[_0x3f49a2(0xd0)](_0x4c4078);if(await fs_internal_1['FS'][_0x3f49a2(0x95)]((0x0,path_1[_0x3f49a2(0xb0)])(this[_0x3f49a2(0xab)],_0x595b73))){const _0xa436c3=await fs_internal_1['FS'][_0x3f49a2(0x9f)]((0x0,path_1[_0x3f49a2(0xb0)])(this[_0x3f49a2(0xab)],_0x595b73),!![]),_0x18b476=await(0x0,utils_1[_0x3f49a2(0xc7)])({'files':{[_0x595b73]:_0xa436c3}})[_0x3f49a2(0xb9)](()=>null);if(_0x18b476&&folder_types_1[_0x3f49a2(0xd3)][_0x3f49a2(0xac)](_0x18b476))return{[_0x595b73]:_0xa436c3};return{[_0x595b73]:_0xa436c3,[_0x4c4078]:await fs_internal_1['FS'][_0x3f49a2(0x9f)]((0x0,path_1[_0x3f49a2(0xb0)])(this[_0x3f49a2(0xab)],_0x4c4078),!![])};}return{[_0x4c4078]:await fs_internal_1['FS'][_0x3f49a2(0x9f)]((0x0,path_1[_0x3f49a2(0xb0)])(this[_0x3f49a2(0xab)],_0x4c4078),!![])};}[a155_0x4b7729(0xdc)](){const _0x44779c=a155_0x4b7729;this[_0x44779c(0xcf)]=this['paths'][_0x44779c(0xa0)](_0x442777=>constants_1[_0x44779c(0xb2)]['test'](_0x442777)?_0x442777[_0x44779c(0xc4)]('/')[_0x44779c(0xcb)](0x0,0x2)['join']('/'):_0x442777),this[_0x44779c(0xcf)]=[...new Set(this[_0x44779c(0xcf)])];}async['execute'](){const _0x11ab26=a155_0x4b7729,_0x90ac17=[];this[_0x11ab26(0xdc)]();for(const _0x520cc0 of this[_0x11ab26(0xcf)]){if(_0x520cc0['endsWith']('package.xml'))continue;const _0x56800d={};try{_0x56800d[_0x11ab26(0xd2)]=await this[_0x11ab26(0x9e)](_0x520cc0),_0x56800d['filePath']=constants_1[_0x11ab26(0xb2)]['test'](_0x520cc0)?_0x520cc0:(0x0,utils_1[_0x11ab26(0xc8)])({'files':_0x56800d['files']}),_0x520cc0[_0x11ab26(0xdd)](_0x11ab26(0xce))?_0x56800d[_0x11ab26(0xd8)]=_0x11ab26(0xa4):_0x56800d[_0x11ab26(0xd8)]=await(0x0,utils_1[_0x11ab26(0xc7)])({'files':_0x56800d[_0x11ab26(0xd2)]});}catch(_0x3162ef){this[_0x11ab26(0xa2)]['error'](_0x11ab26(0xb8),_0x520cc0,_0x3162ef);continue;}_0x56800d[_0x11ab26(0xc2)]=(0x0,utils_1[_0x11ab26(0xc3)])(_0x520cc0),_0x56800d[_0x11ab26(0x9b)]=(0x0,crc32_1[_0x11ab26(0xd1)])(_0x56800d);if((0x0,utils_1['isParentComponent'])(_0x56800d)){const _0x48e47d=await this[_0x11ab26(0xca)](_0x56800d);_0x90ac17[_0x11ab26(0x9d)](..._0x48e47d);}if(_0x56800d['type']===_0x11ab26(0xc6))continue;settings_types_list_1['default'][_0x11ab26(0xac)](_0x56800d[_0x11ab26(0xd8)])&&(_0x56800d[_0x11ab26(0xd8)]=_0x11ab26(0xba)),_0x90ac17[_0x11ab26(0x9d)](_0x56800d);}return _0x90ac17;}}exports[a155_0x4b7729(0xd5)]=MDApiParserV2;