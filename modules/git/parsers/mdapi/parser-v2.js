const a145_0x4cf97c=a145_0x1d65;(function(_0x4d2d20,_0x3c00fb){const _0x1e268b=a145_0x1d65,_0x2984bd=_0x4d2d20();while(!![]){try{const _0x392a15=parseInt(_0x1e268b(0x8c))/0x1+-parseInt(_0x1e268b(0x7e))/0x2*(parseInt(_0x1e268b(0x74))/0x3)+-parseInt(_0x1e268b(0xa7))/0x4+-parseInt(_0x1e268b(0x6e))/0x5+parseInt(_0x1e268b(0x8d))/0x6+parseInt(_0x1e268b(0xb2))/0x7*(-parseInt(_0x1e268b(0xad))/0x8)+parseInt(_0x1e268b(0x92))/0x9;if(_0x392a15===_0x3c00fb)break;else _0x2984bd['push'](_0x2984bd['shift']());}catch(_0x207051){_0x2984bd['push'](_0x2984bd['shift']());}}}(a145_0x5e01,0xbd3da));const a145_0x40b1c0=(function(){let _0x4921fd=!![];return function(_0x56288f,_0x15e7c3){const _0x414d21=_0x4921fd?function(){if(_0x15e7c3){const _0x18934a=_0x15e7c3['apply'](_0x56288f,arguments);return _0x15e7c3=null,_0x18934a;}}:function(){};return _0x4921fd=![],_0x414d21;};}()),a145_0x3369a6=a145_0x40b1c0(this,function(){const _0x129cfd=a145_0x1d65;return a145_0x3369a6['toString']()[_0x129cfd(0x96)](_0x129cfd(0x7f))[_0x129cfd(0x78)]()[_0x129cfd(0x9e)](a145_0x3369a6)['search']('(((.+)+)+)+$');});a145_0x3369a6();'use strict';function a145_0x1d65(_0x3eeb8c,_0x286b03){const _0x2693e0=a145_0x5e01();return a145_0x1d65=function(_0x3369a6,_0x40b1c0){_0x3369a6=_0x3369a6-0x6e;let _0x5e0180=_0x2693e0[_0x3369a6];return _0x5e0180;},a145_0x1d65(_0x3eeb8c,_0x286b03);}var __importDefault=this&&this[a145_0x4cf97c(0xa0)]||function(_0x16eee6){const _0x338a4d=a145_0x4cf97c;return _0x16eee6&&_0x16eee6[_0x338a4d(0x79)]?_0x16eee6:{'default':_0x16eee6};};Object[a145_0x4cf97c(0x82)](exports,'__esModule',{'value':!![]}),exports['MDApiParserV2']=void 0x0;const fs_internal_1=require(a145_0x4cf97c(0xb5)),utils_1=require(a145_0x4cf97c(0x7a)),path_1=require(a145_0x4cf97c(0xa5)),xml_v2_1=require(a145_0x4cf97c(0x9a)),child_types_map_1=__importDefault(require(a145_0x4cf97c(0x7b))),constants_1=require(a145_0x4cf97c(0xaf)),core_1=require(a145_0x4cf97c(0xa3)),crc32_1=require('../utils/crc32'),folder_types_1=__importDefault(require(a145_0x4cf97c(0x90))),settings_types_list_1=__importDefault(require('../data/settings-types-list')),CHILD_XML_KEYS=Object[a145_0x4cf97c(0x81)](child_types_map_1[a145_0x4cf97c(0x8f)]);function a145_0x5e01(){const _0x386447=['constructor','Logger','__importDefault','catch','XmlV2','../../../../core','logger','path','WaveTemplateBundle','1382220vDpAQh','join','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','relative','waveTemplates','parse','2662232hxCwiC','name','../../../../constants','getChildsByName','type','21zefGVi','Cannot\x20parse\x20children\x20in\x20','META_EXTENSION','../../internal/fs.internal','extractFilenameFromPath','startsWith','5355630OqAvqd','.site-meta.xml','createChildComponentsFromParent','replace','readChildComponents','META_EXPERIENCES_EXTENSION','12fPCYGg','files','reduce','test','toString','__esModule','../utils','../data/child-types-map','extractComponentTypeFromFiles','readComponent','293378FLeESW','(((.+)+)+)+$','endsWith','values','defineProperty','readBundledComponent','paths','readFile','foldBundledComponentsPaths','hasChildNodes','calculateCRC32','push','crc','dir','1318686UqTFPE','4861104BNnSVk','Settings','default','../data/folder-types','split','14832306XIeFDB','slice','CustomLabels','isParentComponent','search','BUNDLED_FOLDERS_REGEXP','readDir','includes','../utils/xml-v2','filePath','filter','map'];a145_0x5e01=function(){return _0x386447;};return a145_0x5e01();}class MDApiParserV2{constructor(_0x429151,_0x4d2bfc){const _0x44a65e=a145_0x4cf97c;this[_0x44a65e(0x8b)]=_0x429151,this[_0x44a65e(0x84)]=_0x4d2bfc,this[_0x44a65e(0xa4)]=new core_1[(_0x44a65e(0x9f))](MDApiParserV2['name']),this[_0x44a65e(0xb4)]='-meta.xml',this[_0x44a65e(0x73)]=_0x44a65e(0x6f);}async['readChildComponents'](_0x2e76d3){const _0xf8a8ff=a145_0x4cf97c;try{const _0x403224=await xml_v2_1[_0xf8a8ff(0xa2)][_0xf8a8ff(0xac)](Object[_0xf8a8ff(0x81)](_0x2e76d3[_0xf8a8ff(0x75)])[0x0][_0xf8a8ff(0x78)]('utf-8')),_0x4a010f=CHILD_XML_KEYS[_0xf8a8ff(0x9c)](_0x14644f=>xml_v2_1['XmlV2'][_0xf8a8ff(0x87)](_0x403224,_0x14644f))[_0xf8a8ff(0x76)]((_0x1bb6ec,_0x3d2e6c)=>[..._0x1bb6ec,...xml_v2_1[_0xf8a8ff(0xa2)][_0xf8a8ff(0xb0)](_0x403224,_0x3d2e6c)],[]);return(0x0,utils_1[_0xf8a8ff(0x70)])(_0x2e76d3,_0x403224,_0x4a010f);}catch(_0x401d18){throw new Error(_0xf8a8ff(0xb3)+_0x2e76d3['name']+'\x20['+_0x2e76d3[_0xf8a8ff(0xb1)]+']');}}async[a145_0x4cf97c(0x83)](_0xdcaaf0){const _0x14318a=a145_0x4cf97c,_0x511788=(0x0,path_1[_0x14318a(0xa8)])(this[_0x14318a(0x8b)],_0xdcaaf0),_0x4d9ffb=_0xdcaaf0+(_0xdcaaf0[_0x14318a(0xb7)]('experiences')?this[_0x14318a(0x73)]:this['META_EXTENSION']),_0x5372f8=await fs_internal_1['FS'][_0x14318a(0x98)](_0x511788,!![]),_0x5a9044=await fs_internal_1['FS'][_0x14318a(0x85)]((0x0,path_1['join'])(this[_0x14318a(0x8b)],_0x4d9ffb),!![])[_0x14318a(0xa1)](()=>null),_0x32183b={};for(const _0x5091ac of _0x5372f8){_0x32183b[(0x0,path_1[_0x14318a(0xaa)])(this[_0x14318a(0x8b)],_0x5091ac)[_0x14318a(0x71)](/\\/g,'/')]=await fs_internal_1['FS'][_0x14318a(0x85)](_0x5091ac,!![]);}return _0x5a9044&&(_0x32183b[(0x0,path_1['relative'])(this['dir'],_0x4d9ffb)[_0x14318a(0x71)](/\\/g,'/')]=_0x5a9044),_0x32183b;}async[a145_0x4cf97c(0x7d)](_0x3a73ba){const _0x13b735=a145_0x4cf97c,_0xb7122c=_0x3a73ba+this['META_EXTENSION'];if(constants_1[_0x13b735(0x97)][_0x13b735(0x77)](_0x3a73ba))return this[_0x13b735(0x83)](_0x3a73ba);if(await fs_internal_1['FS']['exists']((0x0,path_1[_0x13b735(0xa8)])(this[_0x13b735(0x8b)],_0xb7122c))){const _0x350108=await fs_internal_1['FS']['readFile']((0x0,path_1['join'])(this[_0x13b735(0x8b)],_0xb7122c),!![]),_0x3fff7c=await(0x0,utils_1[_0x13b735(0x7c)])({'files':{[_0xb7122c]:_0x350108}})[_0x13b735(0xa1)](()=>null);if(_0x3fff7c&&folder_types_1[_0x13b735(0x8f)]['includes'](_0x3fff7c))return{[_0xb7122c]:_0x350108};return{[_0xb7122c]:_0x350108,[_0x3a73ba]:await fs_internal_1['FS'][_0x13b735(0x85)]((0x0,path_1[_0x13b735(0xa8)])(this[_0x13b735(0x8b)],_0x3a73ba),!![])};}return{[_0x3a73ba]:await fs_internal_1['FS'][_0x13b735(0x85)]((0x0,path_1[_0x13b735(0xa8)])(this['dir'],_0x3a73ba),!![])};}[a145_0x4cf97c(0x86)](){const _0xd68259=a145_0x4cf97c;this[_0xd68259(0x84)]=this[_0xd68259(0x84)][_0xd68259(0x9d)](_0x488b94=>constants_1['BUNDLED_FOLDERS_REGEXP'][_0xd68259(0x77)](_0x488b94)?_0x488b94[_0xd68259(0x91)]('/')[_0xd68259(0x93)](0x0,0x2)[_0xd68259(0xa8)]('/'):_0x488b94),this[_0xd68259(0x84)]=[...new Set(this[_0xd68259(0x84)])];}async['parse'](){const _0x1b1c89=a145_0x4cf97c,_0x358217=[];this[_0x1b1c89(0x86)]();for(const _0x1a2834 of this['paths']){if(_0x1a2834[_0x1b1c89(0x80)]('package.xml'))continue;const _0x48baa7={};try{_0x48baa7['files']=await this['readComponent'](_0x1a2834),_0x48baa7[_0x1b1c89(0x9b)]=constants_1['BUNDLED_FOLDERS_REGEXP']['test'](_0x1a2834)?_0x1a2834:(0x0,utils_1['extractFileNameFromFiles'])({'files':_0x48baa7[_0x1b1c89(0x75)]}),_0x1a2834[_0x1b1c89(0xb7)](_0x1b1c89(0xab))?_0x48baa7['type']=_0x1b1c89(0xa6):_0x48baa7[_0x1b1c89(0xb1)]=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':_0x48baa7['files']});}catch(_0x28a7cf){this[_0x1b1c89(0xa4)]['error'](_0x1b1c89(0xa9),_0x1a2834,_0x28a7cf);continue;}_0x48baa7[_0x1b1c89(0xae)]=(0x0,utils_1[_0x1b1c89(0xb6)])(_0x1a2834),_0x48baa7[_0x1b1c89(0x8a)]=(0x0,crc32_1[_0x1b1c89(0x88)])(_0x48baa7);if((0x0,utils_1[_0x1b1c89(0x95)])(_0x48baa7)){const _0x3ae95d=await this[_0x1b1c89(0x72)](_0x48baa7);_0x358217['push'](..._0x3ae95d);}if(_0x48baa7[_0x1b1c89(0xb1)]===_0x1b1c89(0x94))continue;settings_types_list_1[_0x1b1c89(0x8f)][_0x1b1c89(0x99)](_0x48baa7[_0x1b1c89(0xb1)])&&(_0x48baa7['type']=_0x1b1c89(0x8e)),_0x358217[_0x1b1c89(0x89)](_0x48baa7);}return _0x358217;}}exports['MDApiParserV2']=MDApiParserV2;