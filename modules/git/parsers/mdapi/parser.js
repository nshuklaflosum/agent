const a115_0xb7255c=a115_0x3241;(function(_0x4c8322,_0x4dd3d2){const _0xb941f8=a115_0x3241,_0x5b911d=_0x4c8322();while(!![]){try{const _0x4a9d61=parseInt(_0xb941f8(0xf3))/0x1*(parseInt(_0xb941f8(0xcf))/0x2)+-parseInt(_0xb941f8(0xc9))/0x3*(-parseInt(_0xb941f8(0xbe))/0x4)+parseInt(_0xb941f8(0xdb))/0x5+-parseInt(_0xb941f8(0xf0))/0x6*(-parseInt(_0xb941f8(0xbc))/0x7)+-parseInt(_0xb941f8(0xd9))/0x8*(-parseInt(_0xb941f8(0xc0))/0x9)+parseInt(_0xb941f8(0xcd))/0xa*(-parseInt(_0xb941f8(0xeb))/0xb)+-parseInt(_0xb941f8(0xf6))/0xc*(parseInt(_0xb941f8(0xbd))/0xd);if(_0x4a9d61===_0x4dd3d2)break;else _0x5b911d['push'](_0x5b911d['shift']());}catch(_0x265e90){_0x5b911d['push'](_0x5b911d['shift']());}}}(a115_0x32fa,0xb1ae7));const a115_0x371e01=(function(){let _0x37525f=!![];return function(_0x410e3d,_0x2ca924){const _0x42f9b9=_0x37525f?function(){if(_0x2ca924){const _0x282c24=_0x2ca924['apply'](_0x410e3d,arguments);return _0x2ca924=null,_0x282c24;}}:function(){};return _0x37525f=![],_0x42f9b9;};}()),a115_0x5de7e7=a115_0x371e01(this,function(){const _0x33888b=a115_0x3241;return a115_0x5de7e7['toString']()[_0x33888b(0xf7)](_0x33888b(0xe5))[_0x33888b(0x100)]()['constructor'](a115_0x5de7e7)[_0x33888b(0xf7)](_0x33888b(0xe5));});function a115_0x32fa(){const _0x8aca9f=['calculateCRC32','values','BUNDLED_FOLDERS_REGEXP','extractComponentTypeFromFiles','408pTQfsD','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','4657340SYTAGy','includes','relative','getChildsByName','../utils/xml','init','crc','../data/child-types-map','split','isSFDXProject','(((.+)+)+)+$','defineProperty','readDir','waveTemplates','map','error','693BdAFQo','reduce','Component\x20\x22','experiences','extname','6uHIqIL','isDir','paths','217663JEtYli','extractFileNameFromFiles','hasChildNodes','8897892UiTxHD','search','name','filter','../utils','default','readBundledFiles','readChildComponents','extractFilenameFromPath','Xml','toString','.site-meta.xml','path','readComponentFiles','META_EXTENSION','test','exists','logger','-meta.xml','join','push','7361417Pdwmrh','39AWVeFp','440708PoLWVX','isPathsEquals','151911jHGQJM','META_EXPERIENCES_EXTENSION','files','WaveTemplateBundle','../../devops/utils/git-commit.utils','Cannot\x20parse\x20childs\x20in\x20','../utils/crc32','find','type','9hESNaX','dir','filePath','readFile','69820HyODkm','utf-8','2uqZtia','../../../../core','createChildComponentsFromParent','parse','catch','MDApiParser'];a115_0x32fa=function(){return _0x8aca9f;};return a115_0x32fa();}a115_0x5de7e7();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5b7d55){return _0x5b7d55&&_0x5b7d55['__esModule']?_0x5b7d55:{'default':_0x5b7d55};};function a115_0x3241(_0x9f1ab3,_0x308541){const _0x1387ac=a115_0x32fa();return a115_0x3241=function(_0x5de7e7,_0x371e01){_0x5de7e7=_0x5de7e7-0xb6;let _0x32fa8f=_0x1387ac[_0x5de7e7];return _0x32fa8f;},a115_0x3241(_0x9f1ab3,_0x308541);}Object[a115_0xb7255c(0xe6)](exports,'__esModule',{'value':!![]}),exports[a115_0xb7255c(0xd4)]=void 0x0;const fs_internal_1=require('../../internal/fs.internal'),utils_1=require(a115_0xb7255c(0xfa)),path_1=require(a115_0xb7255c(0x102)),xml_1=require(a115_0xb7255c(0xdf)),child_types_map_1=__importDefault(require(a115_0xb7255c(0xe2))),constants_1=require('../../../../constants'),core_1=require(a115_0xb7255c(0xd0)),git_commit_utils_1=require(a115_0xb7255c(0xc4)),crc32_1=require(a115_0xb7255c(0xc6)),folder_types_1=__importDefault(require('../data/folder-types')),CHILD_XML_KEYS=Object['values'](child_types_map_1[a115_0xb7255c(0xfb)]);class MDApiParser{constructor(_0x471803,_0x278086,_0x4d4c8d){const _0x246c3c=a115_0xb7255c;this[_0x246c3c(0xca)]=_0x471803,this[_0x246c3c(0xe4)]=_0x4d4c8d,this[_0x246c3c(0xb8)]=new core_1['Logger'](MDApiParser[_0x246c3c(0xf8)]),this[_0x246c3c(0x104)]=_0x246c3c(0xb9),this[_0x246c3c(0xc1)]=_0x246c3c(0x101),this[_0x246c3c(0xf2)]=_0x278086;}async['readChildComponents'](_0x376b66){const _0x1160fa=a115_0xb7255c;try{const _0x53f00e=await xml_1['Xml'][_0x1160fa(0xd2)](Object[_0x1160fa(0xd6)](_0x376b66[_0x1160fa(0xc2)])[0x0]['toString'](_0x1160fa(0xce))),_0x107113=CHILD_XML_KEYS[_0x1160fa(0xf9)](_0x2291c2=>xml_1[_0x1160fa(0xff)][_0x1160fa(0xf5)](_0x53f00e,_0x2291c2))[_0x1160fa(0xec)]((_0x22473b,_0x39cbab)=>[..._0x22473b,...xml_1[_0x1160fa(0xff)][_0x1160fa(0xde)](_0x53f00e,_0x39cbab)],[]);return(0x0,utils_1[_0x1160fa(0xd1)])(_0x376b66,_0x53f00e,_0x107113);}catch(_0x37d43b){throw new Error(_0x1160fa(0xc5)+_0x376b66['name']+'\x20['+_0x376b66[_0x1160fa(0xc8)]+']');}}async[a115_0xb7255c(0xfc)](_0xa379f4){const _0x5ad45f=a115_0xb7255c,_0x500057=(0x0,path_1[_0x5ad45f(0xba)])(this['dir'],_0xa379f4),_0x4e33c9=_0xa379f4+(_0xa379f4['startsWith'](_0x5ad45f(0xee))?this['META_EXPERIENCES_EXTENSION']:this[_0x5ad45f(0x104)]),_0x1182a8=await fs_internal_1['FS'][_0x5ad45f(0xe7)](_0x500057,!![]),_0xace6da=await fs_internal_1['FS']['readFile']((0x0,path_1[_0x5ad45f(0xba)])(this[_0x5ad45f(0xca)],_0x4e33c9),!![])['catch'](()=>null),_0x554a90={};for(const _0x3dd02b of _0x1182a8){_0x554a90[(0x0,path_1[_0x5ad45f(0xdd)])(this[_0x5ad45f(0xca)],_0x3dd02b)]=await fs_internal_1['FS']['readFile'](_0x3dd02b,!![]);}return _0xace6da&&(_0x554a90[(0x0,path_1[_0x5ad45f(0xdd)])(this[_0x5ad45f(0xca)],_0x4e33c9)]=_0xace6da),_0x554a90;}async['readComponentFiles'](_0x1a814b){const _0x524ea5=a115_0xb7255c;let _0xf5a415=_0x1a814b+this[_0x524ea5(0x104)];if(constants_1[_0x524ea5(0xd7)][_0x524ea5(0xb6)](_0x1a814b))return this[_0x524ea5(0xfc)](_0x1a814b);if(await fs_internal_1['FS'][_0x524ea5(0xf1)]((0x0,path_1[_0x524ea5(0xba)])(this[_0x524ea5(0xca)],_0x1a814b))||await fs_internal_1['FS'][_0x524ea5(0xb7)]((0x0,path_1[_0x524ea5(0xba)])(this[_0x524ea5(0xca)],_0xf5a415))){const _0x27cb65=await fs_internal_1['FS'][_0x524ea5(0xcc)]((0x0,path_1['join'])(this[_0x524ea5(0xca)],_0xf5a415),!![]),_0x27bc05=await(0x0,utils_1[_0x524ea5(0xd8)])({'files':{[_0xf5a415]:_0x27cb65}})[_0x524ea5(0xd3)](()=>null);if(_0x27bc05&&folder_types_1[_0x524ea5(0xfb)][_0x524ea5(0xdc)](_0x27bc05))return{[_0xf5a415]:await fs_internal_1['FS']['readFile']((0x0,path_1[_0x524ea5(0xba)])(this['dir'],_0xf5a415),!![])};}if(!(0x0,path_1[_0x524ea5(0xef)])(_0x1a814b)&&this[_0x524ea5(0xe4)]){const _0x33bd62=_0x1a814b[_0x524ea5(0xe3)]('/')[0x0],_0x3aff73=(await fs_internal_1['FS'][_0x524ea5(0xe7)]((0x0,path_1['join'])(this['dir'],_0x33bd62)))[_0x524ea5(0xc7)](_0x3e5724=>(0x0,git_commit_utils_1[_0x524ea5(0xbf)])(_0x3e5724,(0x0,path_1[_0x524ea5(0xba)])(this[_0x524ea5(0xca)],_0x1a814b)));if(!_0x3aff73)throw new Error(_0x524ea5(0xed)+_0x1a814b+'\x22\x20not\x20found\x20in\x20\x22'+_0x33bd62+'\x22');_0x1a814b=(0x0,path_1[_0x524ea5(0xdd)])(this[_0x524ea5(0xca)],_0x3aff73),_0xf5a415=_0x1a814b+this['META_EXTENSION'];}const [_0x4b7e86,_0x1e66df]=await Promise['all']([fs_internal_1['FS'][_0x524ea5(0xcc)]((0x0,path_1[_0x524ea5(0xba)])(this[_0x524ea5(0xca)],_0x1a814b),!![])['catch'](()=>null),fs_internal_1['FS']['readFile']((0x0,path_1[_0x524ea5(0xba)])(this['dir'],_0xf5a415),!![])[_0x524ea5(0xd3)](()=>null)]);return{..._0x4b7e86?{[_0x1a814b]:_0x4b7e86}:{},..._0x1e66df?{[_0xf5a415]:_0x1e66df}:{}};}async[a115_0xb7255c(0xe0)](){const _0x5ed942=a115_0xb7255c,_0x105d83=[...this[_0x5ed942(0xf2)]];if(this[_0x5ed942(0xe4)])for(const _0x155598 of _0x105d83){if(constants_1['BUNDLED_FOLDERS_REGEXP'][_0x5ed942(0xb6)](_0x155598))continue;if(await fs_internal_1['FS'][_0x5ed942(0xf1)]((0x0,path_1['join'])(this[_0x5ed942(0xca)],_0x155598))){const _0x5c2275=await fs_internal_1['FS'][_0x5ed942(0xe7)]((0x0,path_1[_0x5ed942(0xba)])(this[_0x5ed942(0xca)],_0x155598),!![]);_0x105d83['push'](..._0x5c2275[_0x5ed942(0xe9)](_0x432662=>(0x0,path_1[_0x5ed942(0xdd)])(this[_0x5ed942(0xca)],_0x432662)));}}this[_0x5ed942(0xf2)]=(0x0,utils_1['convertToCleanPaths'])(_0x105d83);}async[a115_0xb7255c(0xd2)](){const _0x32a340=a115_0xb7255c;await this['init']();const _0x4852de=[];for(const _0x316216 of this[_0x32a340(0xf2)]){if(_0x316216['endsWith']('package.xml'))continue;const _0x2cddfa={};try{_0x2cddfa[_0x32a340(0xc2)]=await this[_0x32a340(0x103)](_0x316216),_0x2cddfa[_0x32a340(0xcb)]=constants_1[_0x32a340(0xd7)][_0x32a340(0xb6)](_0x316216)?_0x316216:(0x0,utils_1[_0x32a340(0xf4)])({'files':_0x2cddfa[_0x32a340(0xc2)]}),_0x316216['startsWith'](_0x32a340(0xe8))?_0x2cddfa[_0x32a340(0xc8)]=_0x32a340(0xc3):_0x2cddfa['type']=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':_0x2cddfa[_0x32a340(0xc2)]});}catch(_0x2f3201){this[_0x32a340(0xb8)][_0x32a340(0xea)](_0x32a340(0xda),_0x316216,_0x2f3201);continue;}_0x2cddfa[_0x32a340(0xf8)]=(0x0,utils_1[_0x32a340(0xfe)])(_0x316216),_0x2cddfa[_0x32a340(0xe1)]=(0x0,crc32_1[_0x32a340(0xd5)])(_0x2cddfa);if((0x0,utils_1['isParentComponent'])(_0x2cddfa)){const _0xc1cef8=await this[_0x32a340(0xfd)](_0x2cddfa);_0x4852de[_0x32a340(0xbb)](..._0xc1cef8);}if(_0x2cddfa[_0x32a340(0xc8)]==='CustomLabels')continue;_0x4852de['push'](_0x2cddfa);}return _0x4852de;}}exports[a115_0xb7255c(0xd4)]=MDApiParser;