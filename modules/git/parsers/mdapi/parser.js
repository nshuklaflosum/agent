const a146_0x817485=a146_0x50d8;function a146_0x1fbf(){const _0x15a276=['name','catch','path','../utils/xml','push','readDir','logger','relative','readBundledFiles','getChildsByName','__esModule','-meta.xml','type','isSFDXProject','files','error','waveTemplates','isParentComponent','paths','BUNDLED_FOLDERS_REGEXP','crc','extractComponentTypeFromFiles','../data/settings-types-list','search','31870GPCRnZ','dir','(((.+)+)+)+$','map','test','5351892ncxXVg','split','../../devops/utils/git-commit.utils','filter','708zwvHGn','277240uvPPUN','Xml','readChildComponents','META_EXTENSION','parse','exists','defineProperty','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','Logger','MDApiParser','isPathsEquals','calculateCRC32','../utils/crc32','Component\x20\x22','10114952VOFNAQ','1649190vyNSFW','createChildComponentsFromParent','join','experiences','META_EXPERIENCES_EXTENSION','utf-8','3228024KdEVzH','default','filePath','toString','../../../../constants','extname','isDir','../../../../core','532658EzXgaZ','readFile','../data/child-types-map','includes','../utils','readComponentFiles','package.xml','WaveTemplateBundle','extractFileNameFromFiles','hasChildNodes','extractFilenameFromPath','all','CustomLabels','Cannot\x20parse\x20childs\x20in\x20','startsWith','init','values','endsWith'];a146_0x1fbf=function(){return _0x15a276;};return a146_0x1fbf();}(function(_0x1be673,_0x3e8c6a){const _0x50a6ae=a146_0x50d8,_0x43ce7b=_0x1be673();while(!![]){try{const _0x544e0d=parseInt(_0x50a6ae(0x1c3))/0x1+parseInt(_0x50a6ae(0x1e0))/0x2+-parseInt(_0x50a6ae(0x1d2))/0x3+parseInt(_0x50a6ae(0x1d8))/0x4+parseInt(_0x50a6ae(0x1b9))/0x5*(-parseInt(_0x50a6ae(0x1c2))/0x6)+-parseInt(_0x50a6ae(0x1be))/0x7+parseInt(_0x50a6ae(0x1d1))/0x8;if(_0x544e0d===_0x3e8c6a)break;else _0x43ce7b['push'](_0x43ce7b['shift']());}catch(_0x4f89b6){_0x43ce7b['push'](_0x43ce7b['shift']());}}}(a146_0x1fbf,0x85eae));const a146_0x1a54f9=(function(){let _0x164b17=!![];return function(_0x2af7eb,_0x3f454f){const _0x2ee794=_0x164b17?function(){if(_0x3f454f){const _0x54f25b=_0x3f454f['apply'](_0x2af7eb,arguments);return _0x3f454f=null,_0x54f25b;}}:function(){};return _0x164b17=![],_0x2ee794;};}()),a146_0x92c6dc=a146_0x1a54f9(this,function(){const _0x3d0c80=a146_0x50d8;return a146_0x92c6dc[_0x3d0c80(0x1db)]()[_0x3d0c80(0x1b8)]('(((.+)+)+)+$')[_0x3d0c80(0x1db)]()['constructor'](a146_0x92c6dc)[_0x3d0c80(0x1b8)](_0x3d0c80(0x1bb));});a146_0x92c6dc();function a146_0x50d8(_0x20eaa4,_0x2c3a0f){const _0x38cf98=a146_0x1fbf();return a146_0x50d8=function(_0x92c6dc,_0x1a54f9){_0x92c6dc=_0x92c6dc-0x192;let _0x1fbf20=_0x38cf98[_0x92c6dc];return _0x1fbf20;},a146_0x50d8(_0x20eaa4,_0x2c3a0f);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x58cb0b){const _0x183bef=a146_0x50d8;return _0x58cb0b&&_0x58cb0b[_0x183bef(0x1ab)]?_0x58cb0b:{'default':_0x58cb0b};};Object[a146_0x817485(0x1c9)](exports,a146_0x817485(0x1ab),{'value':!![]}),exports[a146_0x817485(0x1cc)]=void 0x0;const fs_internal_1=require('../../internal/fs.internal'),utils_1=require(a146_0x817485(0x193)),path_1=require(a146_0x817485(0x1a3)),xml_1=require(a146_0x817485(0x1a4)),child_types_map_1=__importDefault(require(a146_0x817485(0x1e2))),constants_1=require(a146_0x817485(0x1dc)),core_1=require(a146_0x817485(0x1df)),git_commit_utils_1=require(a146_0x817485(0x1c0)),crc32_1=require(a146_0x817485(0x1cf)),folder_types_1=__importDefault(require('../data/folder-types')),settings_types_list_1=__importDefault(require(a146_0x817485(0x1b7))),CHILD_XML_KEYS=Object[a146_0x817485(0x19f)](child_types_map_1[a146_0x817485(0x1d9)]);class MDApiParser{constructor(_0x99360a,_0x49272c,_0x58f389){const _0x51f0d8=a146_0x817485;this[_0x51f0d8(0x1ba)]=_0x99360a,this['isSFDXProject']=_0x58f389,this[_0x51f0d8(0x1a7)]=new core_1[(_0x51f0d8(0x1cb))](MDApiParser[_0x51f0d8(0x1a1)]),this[_0x51f0d8(0x1c6)]=_0x51f0d8(0x1ac),this[_0x51f0d8(0x1d6)]='.site-meta.xml',this[_0x51f0d8(0x1b3)]=_0x49272c;}async[a146_0x817485(0x1c5)](_0x41be3a){const _0x1c4b14=a146_0x817485;try{const _0x2549c1=await xml_1['Xml'][_0x1c4b14(0x1c7)](Object[_0x1c4b14(0x19f)](_0x41be3a[_0x1c4b14(0x1af)])[0x0][_0x1c4b14(0x1db)](_0x1c4b14(0x1d7))),_0x1886bb=CHILD_XML_KEYS[_0x1c4b14(0x1c1)](_0xa64b=>xml_1[_0x1c4b14(0x1c4)][_0x1c4b14(0x198)](_0x2549c1,_0xa64b))['reduce']((_0x34a92d,_0xa499b1)=>[..._0x34a92d,...xml_1[_0x1c4b14(0x1c4)][_0x1c4b14(0x1aa)](_0x2549c1,_0xa499b1)],[]);return(0x0,utils_1[_0x1c4b14(0x1d3)])(_0x41be3a,_0x2549c1,_0x1886bb);}catch(_0x53731e){throw new Error(_0x1c4b14(0x19c)+_0x41be3a[_0x1c4b14(0x1a1)]+'\x20['+_0x41be3a[_0x1c4b14(0x1ad)]+']');}}async[a146_0x817485(0x1a9)](_0x3ffacf){const _0x313f3a=a146_0x817485,_0x3a1ee6=(0x0,path_1[_0x313f3a(0x1d4)])(this['dir'],_0x3ffacf),_0x40d504=_0x3ffacf+(_0x3ffacf[_0x313f3a(0x19d)](_0x313f3a(0x1d5))?this[_0x313f3a(0x1d6)]:this[_0x313f3a(0x1c6)]),_0xdcdc9d=await fs_internal_1['FS'][_0x313f3a(0x1a6)](_0x3a1ee6,!![]),_0x575abd=await fs_internal_1['FS'][_0x313f3a(0x1e1)]((0x0,path_1[_0x313f3a(0x1d4)])(this[_0x313f3a(0x1ba)],_0x40d504),!![])[_0x313f3a(0x1a2)](()=>null),_0x1a5ca0={};for(const _0x435607 of _0xdcdc9d){_0x1a5ca0[(0x0,path_1[_0x313f3a(0x1a8)])(this[_0x313f3a(0x1ba)],_0x435607)]=await fs_internal_1['FS']['readFile'](_0x435607,!![]);}return _0x575abd&&(_0x1a5ca0[(0x0,path_1[_0x313f3a(0x1a8)])(this['dir'],_0x40d504)]=_0x575abd),_0x1a5ca0;}async[a146_0x817485(0x194)](_0x340bed){const _0x9bd39=a146_0x817485;let _0x5b7f82=_0x340bed+this[_0x9bd39(0x1c6)];if(constants_1[_0x9bd39(0x1b4)][_0x9bd39(0x1bd)](_0x340bed))return this[_0x9bd39(0x1a9)](_0x340bed);if(await fs_internal_1['FS'][_0x9bd39(0x1de)]((0x0,path_1[_0x9bd39(0x1d4)])(this[_0x9bd39(0x1ba)],_0x340bed))||await fs_internal_1['FS'][_0x9bd39(0x1c8)]((0x0,path_1[_0x9bd39(0x1d4)])(this['dir'],_0x5b7f82))){const _0x15107d=await fs_internal_1['FS'][_0x9bd39(0x1e1)]((0x0,path_1[_0x9bd39(0x1d4)])(this[_0x9bd39(0x1ba)],_0x5b7f82),!![]),_0x45073c=await(0x0,utils_1[_0x9bd39(0x1b6)])({'files':{[_0x5b7f82]:_0x15107d}})[_0x9bd39(0x1a2)](()=>null);if(_0x45073c&&folder_types_1[_0x9bd39(0x1d9)][_0x9bd39(0x192)](_0x45073c))return{[_0x5b7f82]:await fs_internal_1['FS'][_0x9bd39(0x1e1)]((0x0,path_1[_0x9bd39(0x1d4)])(this[_0x9bd39(0x1ba)],_0x5b7f82),!![])};}if(!(0x0,path_1[_0x9bd39(0x1dd)])(_0x340bed)&&this['isSFDXProject']){const _0x1ea481=_0x340bed[_0x9bd39(0x1bf)]('/')[0x0],_0x18ea53=(await fs_internal_1['FS'][_0x9bd39(0x1a6)]((0x0,path_1[_0x9bd39(0x1d4)])(this[_0x9bd39(0x1ba)],_0x1ea481)))['find'](_0x3efade=>(0x0,git_commit_utils_1[_0x9bd39(0x1cd)])(_0x3efade,(0x0,path_1[_0x9bd39(0x1d4)])(this['dir'],_0x340bed)));if(!_0x18ea53)throw new Error(_0x9bd39(0x1d0)+_0x340bed+'\x22\x20not\x20found\x20in\x20\x22'+_0x1ea481+'\x22');_0x340bed=(0x0,path_1['relative'])(this[_0x9bd39(0x1ba)],_0x18ea53),_0x5b7f82=_0x340bed+this[_0x9bd39(0x1c6)];}const [_0x2a0058,_0x566f7b]=await Promise[_0x9bd39(0x19a)]([fs_internal_1['FS'][_0x9bd39(0x1e1)]((0x0,path_1[_0x9bd39(0x1d4)])(this[_0x9bd39(0x1ba)],_0x340bed),!![])[_0x9bd39(0x1a2)](()=>null),fs_internal_1['FS'][_0x9bd39(0x1e1)]((0x0,path_1[_0x9bd39(0x1d4)])(this[_0x9bd39(0x1ba)],_0x5b7f82),!![])[_0x9bd39(0x1a2)](()=>null)]);return{..._0x2a0058?{[_0x340bed]:_0x2a0058}:{},..._0x566f7b?{[_0x5b7f82]:_0x566f7b}:{}};}async[a146_0x817485(0x19e)](){const _0x4cfcbb=a146_0x817485,_0x51acf3=[...this[_0x4cfcbb(0x1b3)]];if(this[_0x4cfcbb(0x1ae)])for(const _0x5f12ab of _0x51acf3){if(constants_1[_0x4cfcbb(0x1b4)][_0x4cfcbb(0x1bd)](_0x5f12ab))continue;if(await fs_internal_1['FS'][_0x4cfcbb(0x1de)]((0x0,path_1[_0x4cfcbb(0x1d4)])(this[_0x4cfcbb(0x1ba)],_0x5f12ab))){const _0x4d38cd=await fs_internal_1['FS'][_0x4cfcbb(0x1a6)]((0x0,path_1[_0x4cfcbb(0x1d4)])(this['dir'],_0x5f12ab),!![]);_0x51acf3[_0x4cfcbb(0x1a5)](..._0x4d38cd[_0x4cfcbb(0x1bc)](_0x537c1d=>(0x0,path_1[_0x4cfcbb(0x1a8)])(this[_0x4cfcbb(0x1ba)],_0x537c1d)));}}this[_0x4cfcbb(0x1b3)]=(0x0,utils_1['convertToCleanPaths'])(_0x51acf3);}async[a146_0x817485(0x1c7)](){const _0x14f11a=a146_0x817485;await this['init']();const _0xeabc8d=[];for(const _0x29940d of this[_0x14f11a(0x1b3)]){if(_0x29940d[_0x14f11a(0x1a0)](_0x14f11a(0x195)))continue;const _0x1f8f63={};try{_0x1f8f63[_0x14f11a(0x1af)]=await this[_0x14f11a(0x194)](_0x29940d),_0x1f8f63[_0x14f11a(0x1da)]=constants_1[_0x14f11a(0x1b4)][_0x14f11a(0x1bd)](_0x29940d)?_0x29940d:(0x0,utils_1[_0x14f11a(0x197)])({'files':_0x1f8f63[_0x14f11a(0x1af)]}),_0x29940d[_0x14f11a(0x19d)](_0x14f11a(0x1b1))?_0x1f8f63['type']=_0x14f11a(0x196):_0x1f8f63[_0x14f11a(0x1ad)]=await(0x0,utils_1[_0x14f11a(0x1b6)])({'files':_0x1f8f63[_0x14f11a(0x1af)]});}catch(_0x442ec9){this[_0x14f11a(0x1a7)][_0x14f11a(0x1b0)](_0x14f11a(0x1ca),_0x29940d,_0x442ec9);continue;}_0x1f8f63['name']=(0x0,utils_1[_0x14f11a(0x199)])(_0x29940d),_0x1f8f63[_0x14f11a(0x1b5)]=(0x0,crc32_1[_0x14f11a(0x1ce)])(_0x1f8f63);if((0x0,utils_1[_0x14f11a(0x1b2)])(_0x1f8f63)){const _0x658ef4=await this['readChildComponents'](_0x1f8f63);_0xeabc8d['push'](..._0x658ef4);}if(_0x1f8f63['type']===_0x14f11a(0x19b))continue;settings_types_list_1[_0x14f11a(0x1d9)][_0x14f11a(0x192)](_0x1f8f63[_0x14f11a(0x1ad)])&&(_0x1f8f63[_0x14f11a(0x1ad)]='Settings'),_0xeabc8d[_0x14f11a(0x1a5)](_0x1f8f63);}return _0xeabc8d;}}exports[a146_0x817485(0x1cc)]=MDApiParser;