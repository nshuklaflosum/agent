const a153_0x24e37d=a153_0x50e1;(function(_0x10c24d,_0x7bbd27){const _0x305fc8=a153_0x50e1,_0x5c531e=_0x10c24d();while(!![]){try{const _0x55ee03=-parseInt(_0x305fc8(0x197))/0x1*(-parseInt(_0x305fc8(0x1aa))/0x2)+parseInt(_0x305fc8(0x160))/0x3*(parseInt(_0x305fc8(0x15e))/0x4)+-parseInt(_0x305fc8(0x168))/0x5+-parseInt(_0x305fc8(0x16a))/0x6*(-parseInt(_0x305fc8(0x190))/0x7)+parseInt(_0x305fc8(0x169))/0x8+-parseInt(_0x305fc8(0x16e))/0x9*(-parseInt(_0x305fc8(0x17e))/0xa)+-parseInt(_0x305fc8(0x165))/0xb*(parseInt(_0x305fc8(0x179))/0xc);if(_0x55ee03===_0x7bbd27)break;else _0x5c531e['push'](_0x5c531e['shift']());}catch(_0x16bda4){_0x5c531e['push'](_0x5c531e['shift']());}}}(a153_0x78ac,0xe265c));const a153_0x216efa=(function(){let _0x37c9bc=!![];return function(_0xec4f0d,_0x5130de){const _0x40fa95=_0x37c9bc?function(){const _0x5aa562=a153_0x50e1;if(_0x5130de){const _0xb4d50a=_0x5130de[_0x5aa562(0x1a5)](_0xec4f0d,arguments);return _0x5130de=null,_0xb4d50a;}}:function(){};return _0x37c9bc=![],_0x40fa95;};}()),a153_0x3b59cb=a153_0x216efa(this,function(){const _0x45dd0b=a153_0x50e1;return a153_0x3b59cb['toString']()[_0x45dd0b(0x198)]('(((.+)+)+)+$')[_0x45dd0b(0x161)]()[_0x45dd0b(0x17c)](a153_0x3b59cb)[_0x45dd0b(0x198)](_0x45dd0b(0x170));});a153_0x3b59cb();'use strict';function a153_0x50e1(_0x56d1eb,_0xb81256){const _0x4125a2=a153_0x78ac();return a153_0x50e1=function(_0x3b59cb,_0x216efa){_0x3b59cb=_0x3b59cb-0x15c;let _0x78ac9e=_0x4125a2[_0x3b59cb];return _0x78ac9e;},a153_0x50e1(_0x56d1eb,_0xb81256);}var __importDefault=this&&this[a153_0x24e37d(0x15c)]||function(_0x5ba688){const _0x231526=a153_0x24e37d;return _0x5ba688&&_0x5ba688[_0x231526(0x16d)]?_0x5ba688:{'default':_0x5ba688};};Object[a153_0x24e37d(0x164)](exports,a153_0x24e37d(0x16d),{'value':!![]}),exports[a153_0x24e37d(0x16b)]=exports['extractComponentTypeFromFiles']=exports[a153_0x24e37d(0x19f)]=exports[a153_0x24e37d(0x17d)]=exports['calculateCRC32']=exports[a153_0x24e37d(0x16f)]=exports['isParentComponent']=exports[a153_0x24e37d(0x196)]=exports[a153_0x24e37d(0x180)]=exports[a153_0x24e37d(0x17f)]=exports[a153_0x24e37d(0x174)]=void 0x0;const constants_1=require('../../../../constants'),path_1=__importDefault(require(a153_0x24e37d(0x182))),child_types_map_1=__importDefault(require(a153_0x24e37d(0x162))),parent_xml_types_1=__importDefault(require(a153_0x24e37d(0x183))),xml_v2_1=require('./xml-v2'),crc_32_1=__importDefault(require('crc-32')),parent_xml_types_map_1=__importDefault(require(a153_0x24e37d(0x195))),fs_internal_1=require('../../internal/fs.internal');function convertToCleanPaths(_0x1696e5){const _0x25a74f=a153_0x24e37d,_0x19760f=_0x1696e5[_0x25a74f(0x18a)](_0x807ed0=>_0x807ed0['endsWith'](constants_1[_0x25a74f(0x175)])),_0xa27d40=_0x19760f[_0x25a74f(0x191)](_0x3f3be2=>_0x3f3be2['replace'](new RegExp(constants_1[_0x25a74f(0x175)]+'$'),'')),_0x1c6031=_0x1696e5[_0x25a74f(0x18a)](_0x2831b6=>!_0x19760f[_0x25a74f(0x192)](_0x2831b6));return[...new Set([..._0x1c6031,..._0xa27d40])];}exports[a153_0x24e37d(0x174)]=convertToCleanPaths;function filterParserPaths(_0x28591b){const _0x272297=a153_0x24e37d,_0x2a7107=[...new Set(_0x28591b[_0x272297(0x18a)](_0x3e2603=>!_0x3e2603[_0x272297(0x17a)](constants_1[_0x272297(0x175)])))],_0x108a98=_0x28591b[_0x272297(0x18a)](_0x4593b9=>_0x4593b9[_0x272297(0x17a)](constants_1[_0x272297(0x175)]))['filter'](_0x47905d=>!_0x2a7107['includes'](_0x47905d[_0x272297(0x19c)](constants_1['META_XML_EXTENSION'],'')));return[..._0x108a98,..._0x2a7107];}exports['filterParserPaths']=filterParserPaths;function getChildComponentTypeByChildNodeName(_0x53f7c6){const _0x4dc4ea=a153_0x24e37d,_0x5c3bd9=Object[_0x4dc4ea(0x19e)](child_types_map_1[_0x4dc4ea(0x181)])[_0x4dc4ea(0x1a7)](([_0x1d75ef,_0x42117a])=>_0x42117a===_0x53f7c6);if(!_0x5c3bd9)throw new Error(_0x4dc4ea(0x15d)+_0x53f7c6);return _0x5c3bd9[0x0];}exports['getChildComponentTypeByChildNodeName']=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x15fe4f){const _0x590224=a153_0x24e37d,_0x1401a8=_0x15fe4f[_0x590224(0x185)](path_1[_0x590224(0x181)][_0x590224(0x166)]),_0x1710e6=path_1[_0x590224(0x181)][_0x590224(0x187)](_0x15fe4f[_0x590224(0x19c)](constants_1[_0x590224(0x175)],''),path_1[_0x590224(0x181)][_0x590224(0x171)](_0x15fe4f));if(_0x1401a8[_0x590224(0x184)]>0x2)return _0x1401a8[_0x1401a8[_0x590224(0x184)]-0x2]+'/'+_0x1710e6;return _0x1710e6;}exports[a153_0x24e37d(0x196)]=extractFilenameFromPath;function isParentComponent({type:_0x2d8c88}){const _0x3b466f=a153_0x24e37d;return parent_xml_types_1['default'][_0x3b466f(0x192)](_0x2d8c88);}exports['isParentComponent']=isParentComponent;function isParentComponentFile(_0x2b3f11){const _0x5cfb55=a153_0x24e37d,_0x108253=path_1[_0x5cfb55(0x181)]['parse'](_0x2b3f11);return Object[_0x5cfb55(0x163)](parent_xml_types_map_1[_0x5cfb55(0x181)])[_0x5cfb55(0x194)](_0x34db16=>_0x108253[_0x5cfb55(0x167)][_0x5cfb55(0x17a)](_0x34db16));}exports[a153_0x24e37d(0x16f)]=isParentComponentFile;function calculateCRC32(_0x3d1ed1){const _0x1a5a1f=a153_0x24e37d,_0x5d143b=Object[_0x1a5a1f(0x16c)](_0x3d1ed1['files'])[_0x1a5a1f(0x17b)]();switch(_0x5d143b[_0x1a5a1f(0x184)]){case 0x1:{const [_0x18ffcc]=_0x5d143b,_0x49b3c4=_0x3d1ed1[_0x1a5a1f(0x188)][_0x18ffcc];return crc_32_1[_0x1a5a1f(0x181)][_0x1a5a1f(0x1a6)](_0x49b3c4[_0x1a5a1f(0x161)]('utf-8'),0x20)[_0x1a5a1f(0x161)]();}case 0x2:{const [_0x3c7859,_0x12b1a1]=_0x5d143b,_0x4b4e8a=_0x3d1ed1[_0x1a5a1f(0x188)][_0x3c7859],_0x4f23f3=_0x3d1ed1['files'][_0x12b1a1];return crc_32_1[_0x1a5a1f(0x181)]['str'](_0x4b4e8a['toString']('utf-8'),0x20)[_0x1a5a1f(0x161)]()+'\x20'+crc_32_1[_0x1a5a1f(0x181)][_0x1a5a1f(0x1a6)](_0x4f23f3[_0x1a5a1f(0x161)](_0x1a5a1f(0x176)),0x20)[_0x1a5a1f(0x161)]();}default:{let _0x2f45ba=0x0;if(_0x5d143b[_0x1a5a1f(0x184)]>0x0)_0x2f45ba=crc_32_1[_0x1a5a1f(0x181)][_0x1a5a1f(0x1a6)](_0x3d1ed1['files'][_0x5d143b[0x0]][_0x1a5a1f(0x161)](_0x1a5a1f(0x176)),0x20);for(let _0x5bd2e3=0x1;_0x5bd2e3<_0x5d143b[_0x1a5a1f(0x184)];_0x5bd2e3++){const _0x511be1=crc_32_1[_0x1a5a1f(0x181)][_0x1a5a1f(0x1a6)](_0x3d1ed1[_0x1a5a1f(0x188)][_0x5d143b[_0x5bd2e3]][_0x1a5a1f(0x161)](_0x1a5a1f(0x176)),0x20);_0x2f45ba=Math[_0x1a5a1f(0x19a)]((_0x511be1+_0x2f45ba)/0x2);}return _0x2f45ba['toString']();}}}exports[a153_0x24e37d(0x19d)]=calculateCRC32;function createChildComponentsFromParent(_0x18c895,_0x919ae7,_0x446f13){const _0x365f6d=a153_0x24e37d,_0x48f261=[];for(const _0x11c1c6 of _0x446f13){const _0x2f73af=xml_v2_1['XmlV2'][_0x365f6d(0x177)](xml_v2_1['XmlV2']['createEmptyRootNodeFrom'](_0x919ae7),_0x11c1c6[_0x365f6d(0x178)],_0x11c1c6['nodeData']),_0x35c2de={};_0x35c2de['filePath']=_0x18c895[_0x365f6d(0x15f)],_0x35c2de[_0x365f6d(0x173)]=getChildComponentTypeByChildNodeName(_0x11c1c6[_0x365f6d(0x178)]),_0x18c895[_0x365f6d(0x173)]===_0x365f6d(0x1a9)?_0x35c2de[_0x365f6d(0x1a0)]=_0x11c1c6[_0x365f6d(0x199)][_0x365f6d(0x1a8)]:_0x35c2de[_0x365f6d(0x1a0)]=_0x18c895[_0x365f6d(0x1a0)]+'.'+_0x11c1c6[_0x365f6d(0x199)][_0x365f6d(0x1a8)],_0x35c2de['files']={[Object[_0x365f6d(0x16c)](_0x18c895[_0x365f6d(0x188)])[0x0]]:Buffer[_0x365f6d(0x1a4)](xml_v2_1[_0x365f6d(0x18b)][_0x365f6d(0x18e)](_0x2f73af,![]))},_0x35c2de[_0x365f6d(0x193)]=calculateCRC32(_0x35c2de),_0x48f261[_0x365f6d(0x19b)](_0x35c2de);}return _0x48f261;}exports['createChildComponentsFromParent']=createChildComponentsFromParent;function extractFileNameFromFiles({files:_0x586705}){const _0x5604b0=a153_0x24e37d;var _0x19c4bb;const _0x5a81fe=Object[_0x5604b0(0x16c)](_0x586705);return((_0x19c4bb=_0x5a81fe[0x0])===null||_0x19c4bb===void 0x0?void 0x0:_0x19c4bb[_0x5604b0(0x19c)](constants_1[_0x5604b0(0x175)],''))||'';}exports[a153_0x24e37d(0x19f)]=extractFileNameFromFiles;async function extractComponentTypeFromFiles({files:_0x24a02f}){const _0x3158fb=a153_0x24e37d,_0x32acf0=Object['keys'](_0x24a02f),_0x4e41f0=_0x32acf0['find'](_0x1d4fdb=>_0x1d4fdb[_0x3158fb(0x17a)](constants_1['META_XML_EXTENSION']))||_0x32acf0[0x0];try{const _0x5d7f46=await xml_v2_1[_0x3158fb(0x18b)][_0x3158fb(0x186)](_0x24a02f[_0x4e41f0][_0x3158fb(0x161)](_0x3158fb(0x176))),_0x546798=Object[_0x3158fb(0x16c)](_0x5d7f46)[0x0];if(!_0x546798)throw new Error();return _0x546798;}catch(_0x31035c){throw new Error(_0x3158fb(0x172)+_0x32acf0[_0x3158fb(0x18f)](_0x4e41f0)+']\x20index\x20in\x20('+_0x32acf0[_0x3158fb(0x1a1)](',\x20')+')');}}exports['extractComponentTypeFromFiles']=extractComponentTypeFromFiles;async function readFilesByFilename(_0x45641d,_0x333ab1){const _0xa7e254=a153_0x24e37d,_0x24f834=path_1[_0xa7e254(0x181)][_0xa7e254(0x1a3)](_0x45641d),_0x809e5=path_1[_0xa7e254(0x181)]['join'](_0x333ab1,_0x24f834),_0x432075=await fs_internal_1['FS'][_0xa7e254(0x1a2)](_0x809e5,!![]),_0x1ee910=_0x432075[_0xa7e254(0x191)](_0x3d4d53=>path_1['default'][_0xa7e254(0x18d)](_0x333ab1,_0x3d4d53)),_0x4b5183=new RegExp('^'+_0x45641d+_0xa7e254(0x18c));return _0x1ee910[_0xa7e254(0x18a)](_0xbc5871=>_0xbc5871[_0xa7e254(0x189)](_0x4b5183));}function a153_0x78ac(){const _0x5ad259=['entries','extractFileNameFromFiles','name','join','readDir','dirname','from','apply','str','find','fullName','CustomLabels','310kWWnYy','__importDefault','Unknown\x20child\x20type\x20for\x20','77108pQiLIu','filePath','228gGwmnO','toString','../data/child-types-map','values','defineProperty','44IARLmt','sep','dir','2375810wQokwu','1864744ydUMHm','2532DfwJgW','readFilesByFilename','keys','__esModule','72vJKXKq','isParentComponentFile','(((.+)+)+)+$','extname','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','type','convertToCleanPaths','META_XML_EXTENSION','utf-8','addChildNode','nodeName','9109488rGkmDm','endsWith','sort','constructor','createChildComponentsFromParent','493780Wcjgdm','filterParserPaths','getChildComponentTypeByChildNodeName','default','path','../data/parent-xml-types','length','split','parse','basename','files','match','filter','XmlV2','[./-]{1}','relative','convertToString','indexOf','24948IJhpOt','map','includes','crc','some','../data/parent-xml-types-map','extractFilenameFromPath','5431wvZAXj','search','nodeData','round','push','replace','calculateCRC32'];a153_0x78ac=function(){return _0x5ad259;};return a153_0x78ac();}exports[a153_0x24e37d(0x16b)]=readFilesByFilename;