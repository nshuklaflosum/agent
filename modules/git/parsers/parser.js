const a156_0x1b3370=a156_0x50f0;(function(_0x4b3652,_0x2df9c7){const _0x39a102=a156_0x50f0,_0x1b6672=_0x4b3652();while(!![]){try{const _0x55921a=parseInt(_0x39a102(0x167))/0x1*(parseInt(_0x39a102(0x15d))/0x2)+parseInt(_0x39a102(0x152))/0x3*(-parseInt(_0x39a102(0x14a))/0x4)+parseInt(_0x39a102(0x153))/0x5*(-parseInt(_0x39a102(0x165))/0x6)+parseInt(_0x39a102(0x148))/0x7*(-parseInt(_0x39a102(0x15f))/0x8)+-parseInt(_0x39a102(0x13d))/0x9*(parseInt(_0x39a102(0x140))/0xa)+-parseInt(_0x39a102(0x170))/0xb*(parseInt(_0x39a102(0x141))/0xc)+parseInt(_0x39a102(0x164))/0xd;if(_0x55921a===_0x2df9c7)break;else _0x1b6672['push'](_0x1b6672['shift']());}catch(_0x2772d0){_0x1b6672['push'](_0x1b6672['shift']());}}}(a156_0x3a06,0x389a3));const a156_0x2db351=(function(){let _0x102b51=!![];return function(_0x4f4e5c,_0x1f4f1e){const _0x1d0545=_0x102b51?function(){const _0x1dc58f=a156_0x50f0;if(_0x1f4f1e){const _0x148020=_0x1f4f1e[_0x1dc58f(0x12c)](_0x4f4e5c,arguments);return _0x1f4f1e=null,_0x148020;}}:function(){};return _0x102b51=![],_0x1d0545;};}()),a156_0x505d88=a156_0x2db351(this,function(){const _0x382843=a156_0x50f0;return a156_0x505d88[_0x382843(0x137)]()[_0x382843(0x12d)](_0x382843(0x138))[_0x382843(0x137)]()[_0x382843(0x16f)](a156_0x505d88)[_0x382843(0x12d)](_0x382843(0x138));});function a156_0x50f0(_0xeeaaa5,_0x2db9bb){const _0x5ee1b5=a156_0x3a06();return a156_0x50f0=function(_0x505d88,_0x2db351){_0x505d88=_0x505d88-0x122;let _0x3a0676=_0x5ee1b5[_0x505d88];return _0x3a0676;},a156_0x50f0(_0xeeaaa5,_0x2db9bb);}a156_0x505d88();function a156_0x3a06(){const _0x401e96=['576146JdvASv','hasChildNodes','8AfnXIw','readDir','readChildComponents','join','META_EXPERIENCES_EXTENSION','13440700VOUGmd','607494Dhmlqb','type','1mHzoyC','./data/child-types-map','./data/settings-types-list','readBundledFiles','extractComponentTypeFromFiles','MDApiParser','Xml','waveTemplates','constructor','374JLftDU','./data/folder-types','catch','filePath','./utils/xml','META_EXTENSION','getChildsByName','\x22\x20not\x20found\x20in\x20\x22','dir','path','push','apply','search','map','endsWith','BUNDLED_FOLDERS_REGEXP','error','../internal/fs.internal','Cannot\x20parse\x20childs\x20in\x20','paths','name','extractFileNameFromFiles','toString','(((.+)+)+)+$','readComponentFiles','includes','-meta.xml','logger','207uLwPWc','readFile','startsWith','197090HXFOWd','156540MbLWEi','../devops/utils/git-commit.utils','parse','extname','../../../constants','files','Component\x20\x22','486437zotFCJ','createChildComponentsFromParent','90212NYPAVc','utf-8','../../../core','isDir','isParentComponent','experiences','find','test','3cSHlip','5yXvIml','relative','filter','reduce','init','all','__esModule','default','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','isSFDXProject'];a156_0x3a06=function(){return _0x401e96;};return a156_0x3a06();}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1b00e3){return _0x1b00e3&&_0x1b00e3['__esModule']?_0x1b00e3:{'default':_0x1b00e3};};Object['defineProperty'](exports,a156_0x1b3370(0x159),{'value':!![]}),exports['MDApiParser']=void 0x0;const fs_internal_1=require(a156_0x1b3370(0x132)),utils_1=require('./utils'),path_1=require(a156_0x1b3370(0x12a)),xml_1=require(a156_0x1b3370(0x125)),child_types_map_1=__importDefault(require(a156_0x1b3370(0x168))),constants_1=require(a156_0x1b3370(0x145)),core_1=require(a156_0x1b3370(0x14c)),git_commit_utils_1=require(a156_0x1b3370(0x142)),crc32_1=require('./utils/crc32'),folder_types_1=__importDefault(require(a156_0x1b3370(0x122))),settings_types_list_1=__importDefault(require(a156_0x1b3370(0x169))),CHILD_XML_KEYS=Object['values'](child_types_map_1[a156_0x1b3370(0x15a)]);class MDApiParser{constructor(_0x4a7515,_0x676b82,_0x24ce81){const _0x4d94a5=a156_0x1b3370;this['dir']=_0x4a7515,this['isSFDXProject']=_0x24ce81,this[_0x4d94a5(0x13c)]=new core_1['Logger'](MDApiParser[_0x4d94a5(0x135)]),this[_0x4d94a5(0x126)]=_0x4d94a5(0x13b),this['META_EXPERIENCES_EXTENSION']='.site-meta.xml',this[_0x4d94a5(0x134)]=_0x676b82;}async['readChildComponents'](_0x53fada){const _0xfc4357=a156_0x1b3370;try{const _0x5c54fc=await xml_1['Xml'][_0xfc4357(0x143)](Object['values'](_0x53fada[_0xfc4357(0x146)])[0x0][_0xfc4357(0x137)](_0xfc4357(0x14b))),_0x299194=CHILD_XML_KEYS[_0xfc4357(0x155)](_0x2d3d27=>xml_1[_0xfc4357(0x16d)][_0xfc4357(0x15e)](_0x5c54fc,_0x2d3d27))[_0xfc4357(0x156)]((_0x121f20,_0x446553)=>[..._0x121f20,...xml_1[_0xfc4357(0x16d)][_0xfc4357(0x127)](_0x5c54fc,_0x446553)],[]);return(0x0,utils_1[_0xfc4357(0x149)])(_0x53fada,_0x5c54fc,_0x299194);}catch(_0x129d22){throw new Error(_0xfc4357(0x133)+_0x53fada[_0xfc4357(0x135)]+'\x20['+_0x53fada[_0xfc4357(0x166)]+']');}}async[a156_0x1b3370(0x16a)](_0x27dd55){const _0x48dd46=a156_0x1b3370,_0x2e9d17=(0x0,path_1[_0x48dd46(0x162)])(this['dir'],_0x27dd55),_0x4f0c27=_0x27dd55+(_0x27dd55[_0x48dd46(0x13f)](_0x48dd46(0x14f))?this[_0x48dd46(0x163)]:this[_0x48dd46(0x126)]),_0x39f38b=await fs_internal_1['FS'][_0x48dd46(0x160)](_0x2e9d17,!![]),_0x1a764a=await fs_internal_1['FS'][_0x48dd46(0x13e)]((0x0,path_1[_0x48dd46(0x162)])(this['dir'],_0x4f0c27),!![])[_0x48dd46(0x123)](()=>null),_0x1add75={};for(const _0x27ff97 of _0x39f38b){_0x1add75[(0x0,path_1[_0x48dd46(0x154)])(this[_0x48dd46(0x129)],_0x27ff97)]=await fs_internal_1['FS'][_0x48dd46(0x13e)](_0x27ff97,!![]);}return _0x1a764a&&(_0x1add75[(0x0,path_1['relative'])(this[_0x48dd46(0x129)],_0x4f0c27)]=_0x1a764a),_0x1add75;}async[a156_0x1b3370(0x139)](_0xeadd16){const _0xf1a006=a156_0x1b3370;let _0x46768e=_0xeadd16+this[_0xf1a006(0x126)];if(constants_1['BUNDLED_FOLDERS_REGEXP'][_0xf1a006(0x151)](_0xeadd16))return this[_0xf1a006(0x16a)](_0xeadd16);if(await fs_internal_1['FS'][_0xf1a006(0x14d)]((0x0,path_1[_0xf1a006(0x162)])(this[_0xf1a006(0x129)],_0xeadd16))||await fs_internal_1['FS']['exists']((0x0,path_1[_0xf1a006(0x162)])(this['dir'],_0x46768e))){const _0x1af22e=await fs_internal_1['FS'][_0xf1a006(0x13e)]((0x0,path_1[_0xf1a006(0x162)])(this['dir'],_0x46768e),!![]),_0x3f2bac=await(0x0,utils_1[_0xf1a006(0x16b)])({'files':{[_0x46768e]:_0x1af22e}})[_0xf1a006(0x123)](()=>null);if(_0x3f2bac&&folder_types_1[_0xf1a006(0x15a)]['includes'](_0x3f2bac))return{[_0x46768e]:await fs_internal_1['FS'][_0xf1a006(0x13e)]((0x0,path_1['join'])(this['dir'],_0x46768e),!![])};}if(!(0x0,path_1[_0xf1a006(0x144)])(_0xeadd16)&&this[_0xf1a006(0x15c)]){const _0x408caa=_0xeadd16['split']('/')[0x0],_0x80b056=(await fs_internal_1['FS'][_0xf1a006(0x160)]((0x0,path_1['join'])(this[_0xf1a006(0x129)],_0x408caa)))[_0xf1a006(0x150)](_0xb23b96=>(0x0,git_commit_utils_1['isPathsEquals'])(_0xb23b96,(0x0,path_1['join'])(this[_0xf1a006(0x129)],_0xeadd16)));if(!_0x80b056)throw new Error(_0xf1a006(0x147)+_0xeadd16+_0xf1a006(0x128)+_0x408caa+'\x22');_0xeadd16=(0x0,path_1['relative'])(this['dir'],_0x80b056),_0x46768e=_0xeadd16+this[_0xf1a006(0x126)];}const [_0x41d21e,_0xae4007]=await Promise[_0xf1a006(0x158)]([fs_internal_1['FS'][_0xf1a006(0x13e)]((0x0,path_1[_0xf1a006(0x162)])(this['dir'],_0xeadd16),!![])[_0xf1a006(0x123)](()=>null),fs_internal_1['FS'][_0xf1a006(0x13e)]((0x0,path_1[_0xf1a006(0x162)])(this[_0xf1a006(0x129)],_0x46768e),!![])['catch'](()=>null)]);return{..._0x41d21e?{[_0xeadd16]:_0x41d21e}:{},..._0xae4007?{[_0x46768e]:_0xae4007}:{}};}async['init'](){const _0x524423=a156_0x1b3370,_0x4fb9be=[...this[_0x524423(0x134)]];if(this[_0x524423(0x15c)])for(const _0x430c03 of _0x4fb9be){if(constants_1[_0x524423(0x130)][_0x524423(0x151)](_0x430c03))continue;if(await fs_internal_1['FS'][_0x524423(0x14d)]((0x0,path_1[_0x524423(0x162)])(this[_0x524423(0x129)],_0x430c03))){const _0x2dd493=await fs_internal_1['FS'][_0x524423(0x160)]((0x0,path_1['join'])(this[_0x524423(0x129)],_0x430c03),!![]);_0x4fb9be['push'](..._0x2dd493[_0x524423(0x12e)](_0x5b6f41=>(0x0,path_1[_0x524423(0x154)])(this['dir'],_0x5b6f41)));}}this[_0x524423(0x134)]=(0x0,utils_1['convertToCleanPaths'])(_0x4fb9be);}async[a156_0x1b3370(0x143)](){const _0x2aa7ea=a156_0x1b3370;await this[_0x2aa7ea(0x157)]();const _0xc743f7=[];for(const _0x36ab86 of this['paths']){if(_0x36ab86[_0x2aa7ea(0x12f)]('package.xml'))continue;const _0x21e0d2={};try{_0x21e0d2['files']=await this[_0x2aa7ea(0x139)](_0x36ab86),_0x21e0d2[_0x2aa7ea(0x124)]=constants_1[_0x2aa7ea(0x130)]['test'](_0x36ab86)?_0x36ab86:(0x0,utils_1[_0x2aa7ea(0x136)])({'files':_0x21e0d2['files']}),_0x36ab86['startsWith'](_0x2aa7ea(0x16e))?_0x21e0d2[_0x2aa7ea(0x166)]='WaveTemplateBundle':_0x21e0d2[_0x2aa7ea(0x166)]=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':_0x21e0d2[_0x2aa7ea(0x146)]});}catch(_0x4e8b35){this[_0x2aa7ea(0x13c)][_0x2aa7ea(0x131)](_0x2aa7ea(0x15b),_0x36ab86,_0x4e8b35);continue;}_0x21e0d2['name']=(0x0,utils_1['extractFilenameFromPath'])(_0x36ab86),_0x21e0d2['crc']=(0x0,crc32_1['calculateCRC32'])(_0x21e0d2);if((0x0,utils_1[_0x2aa7ea(0x14e)])(_0x21e0d2)){const _0x508d6b=await this[_0x2aa7ea(0x161)](_0x21e0d2);_0xc743f7[_0x2aa7ea(0x12b)](..._0x508d6b);}if(_0x21e0d2[_0x2aa7ea(0x166)]==='CustomLabels')continue;settings_types_list_1[_0x2aa7ea(0x15a)][_0x2aa7ea(0x13a)](_0x21e0d2['type'])&&(_0x21e0d2['type']='Settings'),_0xc743f7[_0x2aa7ea(0x12b)](_0x21e0d2);}return _0xc743f7;}}exports[a156_0x1b3370(0x16c)]=MDApiParser;