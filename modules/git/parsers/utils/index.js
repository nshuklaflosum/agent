const a153_0x47211e=a153_0x2340;(function(_0x8b623a,_0x4f684e){const _0x3b9813=a153_0x2340,_0x2447d5=_0x8b623a();while(!![]){try{const _0x4a0929=-parseInt(_0x3b9813(0x136))/0x1+-parseInt(_0x3b9813(0x12b))/0x2+-parseInt(_0x3b9813(0x13f))/0x3*(-parseInt(_0x3b9813(0x143))/0x4)+-parseInt(_0x3b9813(0x11d))/0x5*(parseInt(_0x3b9813(0x121))/0x6)+-parseInt(_0x3b9813(0x160))/0x7+parseInt(_0x3b9813(0x150))/0x8+-parseInt(_0x3b9813(0x15b))/0x9*(-parseInt(_0x3b9813(0x140))/0xa);if(_0x4a0929===_0x4f684e)break;else _0x2447d5['push'](_0x2447d5['shift']());}catch(_0x2c904f){_0x2447d5['push'](_0x2447d5['shift']());}}}(a153_0x5039,0xaf441));const a153_0x512d17=(function(){let _0x363160=!![];return function(_0x51f387,_0xb2ffd6){const _0x52862c=_0x363160?function(){const _0x1ec598=a153_0x2340;if(_0xb2ffd6){const _0x238bf4=_0xb2ffd6[_0x1ec598(0x133)](_0x51f387,arguments);return _0xb2ffd6=null,_0x238bf4;}}:function(){};return _0x363160=![],_0x52862c;};}()),a153_0x234a4f=a153_0x512d17(this,function(){const _0x26ca83=a153_0x2340;return a153_0x234a4f[_0x26ca83(0x134)]()['search'](_0x26ca83(0x14a))[_0x26ca83(0x134)]()[_0x26ca83(0x11f)](a153_0x234a4f)[_0x26ca83(0x129)]('(((.+)+)+)+$');});a153_0x234a4f();'use strict';var __importDefault=this&&this[a153_0x47211e(0x12e)]||function(_0x206344){const _0x22c887=a153_0x47211e;return _0x206344&&_0x206344[_0x22c887(0x15f)]?_0x206344:{'default':_0x206344};};Object[a153_0x47211e(0x164)](exports,a153_0x47211e(0x15f),{'value':!![]}),exports[a153_0x47211e(0x144)]=exports['extractComponentTypeFromFiles']=exports[a153_0x47211e(0x13d)]=exports[a153_0x47211e(0x11c)]=exports[a153_0x47211e(0x146)]=exports['isParentComponentFile']=exports[a153_0x47211e(0x137)]=exports[a153_0x47211e(0x14f)]=exports['getChildComponentTypeByChildNodeName']=exports[a153_0x47211e(0x145)]=exports[a153_0x47211e(0x157)]=void 0x0;const constants_1=require(a153_0x47211e(0x132)),path_1=__importDefault(require(a153_0x47211e(0x156))),child_types_map_1=__importDefault(require('../data/child-types-map')),parent_xml_types_1=__importDefault(require('../data/parent-xml-types')),xml_v2_1=require(a153_0x47211e(0x127)),crc_32_1=__importDefault(require('crc-32')),parent_xml_types_map_1=__importDefault(require('../data/parent-xml-types-map')),fs_internal_1=require(a153_0x47211e(0x163));function convertToCleanPaths(_0x46a52b){const _0x31646a=a153_0x47211e,_0xa247d4=_0x46a52b['filter'](_0x1fea0c=>_0x1fea0c[_0x31646a(0x14c)](constants_1['META_XML_EXTENSION'])),_0x16876d=_0xa247d4[_0x31646a(0x139)](_0x3b1486=>_0x3b1486[_0x31646a(0x15a)](new RegExp(constants_1[_0x31646a(0x135)]+'$'),'')),_0x2a0ca4=_0x46a52b[_0x31646a(0x151)](_0x1e1f60=>!_0xa247d4['includes'](_0x1e1f60));return[...new Set([..._0x2a0ca4,..._0x16876d])];}exports[a153_0x47211e(0x157)]=convertToCleanPaths;function filterParserPaths(_0xfddf6f){const _0x28418c=a153_0x47211e,_0x2f60be=[...new Set(_0xfddf6f[_0x28418c(0x151)](_0x1055f7=>!_0x1055f7[_0x28418c(0x14c)](constants_1[_0x28418c(0x135)])))],_0x482561=_0xfddf6f[_0x28418c(0x151)](_0x15dec1=>_0x15dec1['endsWith'](constants_1[_0x28418c(0x135)]))[_0x28418c(0x151)](_0x4a47df=>!_0x2f60be['includes'](_0x4a47df[_0x28418c(0x15a)](constants_1[_0x28418c(0x135)],'')));return[..._0x482561,..._0x2f60be];}exports[a153_0x47211e(0x145)]=filterParserPaths;function getChildComponentTypeByChildNodeName(_0x11b3dd){const _0xf4422b=a153_0x47211e,_0x10d642=Object[_0xf4422b(0x123)](child_types_map_1['default'])[_0xf4422b(0x130)](([_0x26989e,_0x3688cf])=>_0x3688cf===_0x11b3dd);if(!_0x10d642)throw new Error('Unknown\x20child\x20type\x20for\x20'+_0x11b3dd);return _0x10d642[0x0];}exports[a153_0x47211e(0x155)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x55f60b){const _0x539ce1=a153_0x47211e,_0x958d54=_0x55f60b[_0x539ce1(0x13c)](path_1[_0x539ce1(0x153)][_0x539ce1(0x141)]),_0x140df5=path_1[_0x539ce1(0x153)][_0x539ce1(0x14e)](_0x55f60b['replace'](constants_1[_0x539ce1(0x135)],''),path_1['default']['extname'](_0x55f60b));if(_0x958d54[_0x539ce1(0x125)]>0x2)return _0x958d54[_0x958d54['length']-0x2]+'/'+_0x140df5;return _0x140df5;}exports[a153_0x47211e(0x14f)]=extractFilenameFromPath;function isParentComponent({type:_0xeb9804}){const _0x41b10c=a153_0x47211e;return parent_xml_types_1['default'][_0x41b10c(0x13e)](_0xeb9804);}exports[a153_0x47211e(0x137)]=isParentComponent;function isParentComponentFile(_0x59ce42){const _0x4f374d=a153_0x47211e,_0x205b2c=path_1[_0x4f374d(0x153)][_0x4f374d(0x161)](_0x59ce42);return Object[_0x4f374d(0x12d)](parent_xml_types_map_1[_0x4f374d(0x153)])[_0x4f374d(0x142)](_0x355c3e=>_0x205b2c[_0x4f374d(0x162)][_0x4f374d(0x14c)](_0x355c3e));}exports[a153_0x47211e(0x158)]=isParentComponentFile;function calculateCRC32(_0x53b9a9){const _0x1b4b3c=a153_0x47211e,_0x1c9b2e=Object[_0x1b4b3c(0x15e)](_0x53b9a9[_0x1b4b3c(0x159)])['sort']();switch(_0x1c9b2e['length']){case 0x1:{const [_0x158eab]=_0x1c9b2e,_0x368fb2=_0x53b9a9[_0x1b4b3c(0x159)][_0x158eab];return crc_32_1[_0x1b4b3c(0x153)]['str'](_0x368fb2[_0x1b4b3c(0x134)](_0x1b4b3c(0x128)),0x20)['toString']();}case 0x2:{const [_0x31a05e,_0x5418ec]=_0x1c9b2e,_0x5957a1=_0x53b9a9['files'][_0x31a05e],_0x2fc158=_0x53b9a9['files'][_0x5418ec];return crc_32_1[_0x1b4b3c(0x153)][_0x1b4b3c(0x138)](_0x5957a1[_0x1b4b3c(0x134)]('utf-8'),0x20)[_0x1b4b3c(0x134)]()+'\x20'+crc_32_1[_0x1b4b3c(0x153)]['str'](_0x2fc158[_0x1b4b3c(0x134)]('utf-8'),0x20)[_0x1b4b3c(0x134)]();}default:{let _0x22d95a=0x0;if(_0x1c9b2e[_0x1b4b3c(0x125)]>0x0)_0x22d95a=crc_32_1[_0x1b4b3c(0x153)][_0x1b4b3c(0x138)](_0x53b9a9['files'][_0x1c9b2e[0x0]]['toString'](_0x1b4b3c(0x128)),0x20);for(let _0x107322=0x1;_0x107322<_0x1c9b2e['length'];_0x107322++){const _0x6fba19=crc_32_1['default']['str'](_0x53b9a9[_0x1b4b3c(0x159)][_0x1c9b2e[_0x107322]][_0x1b4b3c(0x134)](_0x1b4b3c(0x128)),0x20);_0x22d95a=Math[_0x1b4b3c(0x12f)]((_0x6fba19+_0x22d95a)/0x2);}return _0x22d95a[_0x1b4b3c(0x134)]();}}}function a153_0x2340(_0x2f8a69,_0x315ac0){const _0xd8548c=a153_0x5039();return a153_0x2340=function(_0x234a4f,_0x512d17){_0x234a4f=_0x234a4f-0x11c;let _0x50394f=_0xd8548c[_0x234a4f];return _0x50394f;},a153_0x2340(_0x2f8a69,_0x315ac0);}exports[a153_0x47211e(0x146)]=calculateCRC32;function createChildComponentsFromParent(_0x4f122d,_0x19d40c,_0x1dcabe){const _0x566e07=a153_0x47211e,_0x3aad4f=[];for(const _0x20ebdd of _0x1dcabe){const _0x3e4f3b=xml_v2_1['XmlV2'][_0x566e07(0x124)](xml_v2_1[_0x566e07(0x14b)]['createEmptyRootNodeFrom'](_0x19d40c),_0x20ebdd[_0x566e07(0x154)],_0x20ebdd[_0x566e07(0x165)]),_0x1ac0c5={};_0x1ac0c5['filePath']=_0x4f122d[_0x566e07(0x148)],_0x1ac0c5[_0x566e07(0x13a)]=getChildComponentTypeByChildNodeName(_0x20ebdd[_0x566e07(0x154)]),_0x4f122d[_0x566e07(0x13a)]===_0x566e07(0x14d)?_0x1ac0c5[_0x566e07(0x122)]=_0x20ebdd[_0x566e07(0x165)][_0x566e07(0x11e)]:_0x1ac0c5[_0x566e07(0x122)]=_0x4f122d['name']+'.'+_0x20ebdd[_0x566e07(0x165)][_0x566e07(0x11e)],_0x1ac0c5[_0x566e07(0x159)]={[Object[_0x566e07(0x15e)](_0x4f122d[_0x566e07(0x159)])[0x0]]:Buffer[_0x566e07(0x15d)](xml_v2_1[_0x566e07(0x14b)][_0x566e07(0x126)](_0x3e4f3b,![]))},_0x1ac0c5[_0x566e07(0x12c)]=calculateCRC32(_0x1ac0c5),_0x3aad4f[_0x566e07(0x131)](_0x1ac0c5);}return _0x3aad4f;}exports[a153_0x47211e(0x11c)]=createChildComponentsFromParent;function extractFileNameFromFiles({files:_0x4490c9}){const _0x49140c=a153_0x47211e;var _0x112e2b;const _0x29d7d0=Object[_0x49140c(0x15e)](_0x4490c9);return((_0x112e2b=_0x29d7d0[0x0])===null||_0x112e2b===void 0x0?void 0x0:_0x112e2b[_0x49140c(0x15a)](constants_1[_0x49140c(0x135)],''))||'';}exports[a153_0x47211e(0x13d)]=extractFileNameFromFiles;function a153_0x5039(){const _0x2fb9d7=['defineProperty','nodeData','createChildComponentsFromParent','60DAbeCI','fullName','constructor','relative','384438EQiffJ','name','entries','addChildNode','length','convertToString','./xml-v2','utf-8','search','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','1188236BBdwcS','crc','values','__importDefault','round','find','push','../../../../constants','apply','toString','META_XML_EXTENSION','97199bFRJFn','isParentComponent','str','map','type','join','split','extractFileNameFromFiles','includes','1047819vsVtzW','14893070JxXKWk','sep','some','12CuBfWI','readFilesByFilename','filterParserPaths','calculateCRC32',']\x20index\x20in\x20(','filePath','readDir','(((.+)+)+)+$','XmlV2','endsWith','CustomLabels','basename','extractFilenameFromPath','7958448fyAKOS','filter','[./-]{1}','default','nodeName','getChildComponentTypeByChildNodeName','path','convertToCleanPaths','isParentComponentFile','files','replace','9ncSwaj','indexOf','from','keys','__esModule','9476950tZIgoG','parse','dir','../../internal/fs.internal'];a153_0x5039=function(){return _0x2fb9d7;};return a153_0x5039();}async function extractComponentTypeFromFiles({files:_0x52ae7e}){const _0x2555aa=a153_0x47211e,_0x233164=Object[_0x2555aa(0x15e)](_0x52ae7e),_0x354771=_0x233164[_0x2555aa(0x130)](_0x5d0d84=>_0x5d0d84['endsWith'](constants_1[_0x2555aa(0x135)]))||_0x233164[0x0];try{const _0x5a5675=await xml_v2_1[_0x2555aa(0x14b)][_0x2555aa(0x161)](_0x52ae7e[_0x354771][_0x2555aa(0x134)]('utf-8')),_0x413e5d=Object[_0x2555aa(0x15e)](_0x5a5675)[0x0];if(!_0x413e5d)throw new Error();return _0x413e5d;}catch(_0x4c3f6a){throw new Error(_0x2555aa(0x12a)+_0x233164[_0x2555aa(0x15c)](_0x354771)+_0x2555aa(0x147)+_0x233164['join'](',\x20')+')');}}exports['extractComponentTypeFromFiles']=extractComponentTypeFromFiles;async function readFilesByFilename(_0x5c5907,_0x3842a3){const _0x3fd2e4=a153_0x47211e,_0x3c18db=path_1[_0x3fd2e4(0x153)]['dirname'](_0x5c5907),_0x3532dd=path_1[_0x3fd2e4(0x153)][_0x3fd2e4(0x13b)](_0x3842a3,_0x3c18db),_0x46660a=await fs_internal_1['FS'][_0x3fd2e4(0x149)](_0x3532dd,!![]),_0x544fde=_0x46660a[_0x3fd2e4(0x139)](_0x401d68=>path_1[_0x3fd2e4(0x153)][_0x3fd2e4(0x120)](_0x3842a3,_0x401d68)),_0x3e4bdb=new RegExp('^'+_0x5c5907+_0x3fd2e4(0x152));return _0x544fde[_0x3fd2e4(0x151)](_0x1f245d=>_0x1f245d['match'](_0x3e4bdb));}exports['readFilesByFilename']=readFilesByFilename;