const a157_0xb86ad2=a157_0xca6d;(function(_0x5434a4,_0x3bf469){const _0x3e8bd3=a157_0xca6d,_0x404b9b=_0x5434a4();while(!![]){try{const _0x38d0aa=-parseInt(_0x3e8bd3(0x9b))/0x1*(parseInt(_0x3e8bd3(0xa1))/0x2)+-parseInt(_0x3e8bd3(0xa6))/0x3*(-parseInt(_0x3e8bd3(0xd1))/0x4)+parseInt(_0x3e8bd3(0xba))/0x5*(-parseInt(_0x3e8bd3(0x89))/0x6)+parseInt(_0x3e8bd3(0x98))/0x7+-parseInt(_0x3e8bd3(0xab))/0x8+parseInt(_0x3e8bd3(0x83))/0x9*(parseInt(_0x3e8bd3(0x9a))/0xa)+parseInt(_0x3e8bd3(0xad))/0xb*(parseInt(_0x3e8bd3(0xc1))/0xc);if(_0x38d0aa===_0x3bf469)break;else _0x404b9b['push'](_0x404b9b['shift']());}catch(_0x30333f){_0x404b9b['push'](_0x404b9b['shift']());}}}(a157_0x1118,0x3a66c));const a157_0x78f59=(function(){let _0x174110=!![];return function(_0x1aec8c,_0x48f068){const _0x280237=_0x174110?function(){const _0x3c7955=a157_0xca6d;if(_0x48f068){const _0x18719f=_0x48f068[_0x3c7955(0x9f)](_0x1aec8c,arguments);return _0x48f068=null,_0x18719f;}}:function(){};return _0x174110=![],_0x280237;};}()),a157_0x35bc51=a157_0x78f59(this,function(){const _0x21f251=a157_0xca6d;return a157_0x35bc51[_0x21f251(0xb0)]()[_0x21f251(0x8b)]('(((.+)+)+)+$')[_0x21f251(0xb0)]()[_0x21f251(0xb1)](a157_0x35bc51)[_0x21f251(0x8b)]('(((.+)+)+)+$');});a157_0x35bc51();'use strict';var __importDefault=this&&this[a157_0xb86ad2(0xd0)]||function(_0xf2e70a){const _0x587e6b=a157_0xb86ad2;return _0xf2e70a&&_0xf2e70a[_0x587e6b(0x97)]?_0xf2e70a:{'default':_0xf2e70a};};Object['defineProperty'](exports,a157_0xb86ad2(0x97),{'value':!![]}),exports[a157_0xb86ad2(0xa0)]=exports[a157_0xb86ad2(0x84)]=exports[a157_0xb86ad2(0x8e)]=exports[a157_0xb86ad2(0x9e)]=exports[a157_0xb86ad2(0x87)]=exports[a157_0xb86ad2(0xa5)]=exports[a157_0xb86ad2(0xb5)]=exports[a157_0xb86ad2(0xbb)]=exports[a157_0xb86ad2(0xc9)]=exports[a157_0xb86ad2(0xa4)]=exports[a157_0xb86ad2(0xcc)]=void 0x0;const constants_1=require(a157_0xb86ad2(0xa3)),path_1=__importDefault(require(a157_0xb86ad2(0x96))),child_types_map_1=__importDefault(require(a157_0xb86ad2(0xbf))),parent_xml_types_1=__importDefault(require(a157_0xb86ad2(0xb7))),xml_v2_1=require(a157_0xb86ad2(0x85)),crc_32_1=__importDefault(require(a157_0xb86ad2(0xb3))),parent_xml_types_map_1=__importDefault(require(a157_0xb86ad2(0xae))),fs_internal_1=require(a157_0xb86ad2(0xce));function convertToCleanPaths(_0x4ec652){const _0x260408=a157_0xb86ad2,_0x5ae826=_0x4ec652[_0x260408(0xb9)](_0x138adc=>_0x138adc[_0x260408(0xbd)](constants_1[_0x260408(0xaf)])),_0xfcb513=_0x5ae826[_0x260408(0xc8)](_0xb14bb3=>_0xb14bb3[_0x260408(0x93)](new RegExp(constants_1['META_XML_EXTENSION']+'$'),'')),_0x3dbc86=_0x4ec652[_0x260408(0xb9)](_0x29986f=>!_0x5ae826[_0x260408(0xa7)](_0x29986f));return[...new Set([..._0x3dbc86,..._0xfcb513])];}exports['convertToCleanPaths']=convertToCleanPaths;function filterParserPaths(_0x4f6cce){const _0x515414=a157_0xb86ad2,_0x1435a3=[...new Set(_0x4f6cce['filter'](_0x36de76=>!_0x36de76['endsWith'](constants_1[_0x515414(0xaf)])))],_0x189134=_0x4f6cce[_0x515414(0xb9)](_0x1f09ab=>_0x1f09ab[_0x515414(0xbd)](constants_1[_0x515414(0xaf)]))[_0x515414(0xb9)](_0x41fc60=>!_0x1435a3['includes'](_0x41fc60[_0x515414(0x93)](constants_1[_0x515414(0xaf)],'')));return[..._0x189134,..._0x1435a3];}exports['filterParserPaths']=filterParserPaths;function getChildComponentTypeByChildNodeName(_0x30d085){const _0x44e186=a157_0xb86ad2,_0x5b71aa=Object[_0x44e186(0xa8)](child_types_map_1[_0x44e186(0xcd)])[_0x44e186(0xc4)](([_0x25a6c7,_0x4a0476])=>_0x4a0476===_0x30d085);if(!_0x5b71aa)throw new Error(_0x44e186(0xc0)+_0x30d085);return _0x5b71aa[0x0];}exports[a157_0xb86ad2(0xc9)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x3e7ff7){const _0x847528=a157_0xb86ad2,_0x274a5e=_0x3e7ff7[_0x847528(0xca)](path_1[_0x847528(0xcd)][_0x847528(0xac)]),_0x390b24=path_1[_0x847528(0xcd)]['basename'](_0x3e7ff7['replace'](constants_1[_0x847528(0xaf)],''),path_1[_0x847528(0xcd)]['extname'](_0x3e7ff7));if(_0x274a5e[_0x847528(0x8d)]>0x2)return _0x274a5e[_0x274a5e['length']-0x2]+'/'+_0x390b24;return _0x390b24;}function a157_0x1118(){const _0x392c4a=['Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','98450nbqdpt','70997FbScnb','name','readDir','createChildComponentsFromParent','apply','readFilesByFilename','2JVBJTQ','XmlV2','../../../../constants','filterParserPaths','isParentComponentFile','6UjDtXQ','includes','entries','type','files','3540544qkCpBe','sep','338074vnjYwq','../data/parent-xml-types-map','META_XML_EXTENSION','toString','constructor',']\x20index\x20in\x20(','crc-32','parse','isParentComponent','CustomLabels','../data/parent-xml-types','dirname','filter','1998080vhLOLW','extractFilenameFromPath','nodeName','endsWith','sort','../data/child-types-map','Unknown\x20child\x20type\x20for\x20','60pNIIMU','keys','utf-8','find','createEmptyRootNodeFrom','str','from','map','getChildComponentTypeByChildNodeName','split','filePath','convertToCleanPaths','default','../../internal/fs.internal','[./-]{1}','__importDefault','842520CwfGQS','180ELdhmA','extractComponentTypeFromFiles','./xml-v2','indexOf','calculateCRC32','nodeData','6IgjYOT','round','search','dir','length','extractFileNameFromFiles','relative','crc','join','fullName','replace','some','values','path','__esModule','2663941UtxKkE'];a157_0x1118=function(){return _0x392c4a;};return a157_0x1118();}exports['extractFilenameFromPath']=extractFilenameFromPath;function isParentComponent({type:_0x5f5c5b}){const _0x54c098=a157_0xb86ad2;return parent_xml_types_1['default'][_0x54c098(0xa7)](_0x5f5c5b);}exports[a157_0xb86ad2(0xb5)]=isParentComponent;function isParentComponentFile(_0x1f7049){const _0x589d69=a157_0xb86ad2,_0x785f86=path_1[_0x589d69(0xcd)][_0x589d69(0xb4)](_0x1f7049);return Object[_0x589d69(0x95)](parent_xml_types_map_1[_0x589d69(0xcd)])[_0x589d69(0x94)](_0x2cd393=>_0x785f86[_0x589d69(0x8c)][_0x589d69(0xbd)](_0x2cd393));}exports[a157_0xb86ad2(0xa5)]=isParentComponentFile;function calculateCRC32(_0x1a8e0f){const _0x18fb44=a157_0xb86ad2,_0x87e077=Object[_0x18fb44(0xc2)](_0x1a8e0f[_0x18fb44(0xaa)])[_0x18fb44(0xbe)]();switch(_0x87e077[_0x18fb44(0x8d)]){case 0x1:{const [_0x4ad3a6]=_0x87e077,_0x243e70=_0x1a8e0f['files'][_0x4ad3a6];return crc_32_1[_0x18fb44(0xcd)][_0x18fb44(0xc6)](_0x243e70[_0x18fb44(0xb0)]('utf-8'),0x20)[_0x18fb44(0xb0)]();}case 0x2:{const [_0x5626cf,_0x43da9f]=_0x87e077,_0x57f5d5=_0x1a8e0f[_0x18fb44(0xaa)][_0x5626cf],_0x49fc62=_0x1a8e0f[_0x18fb44(0xaa)][_0x43da9f];return crc_32_1['default']['str'](_0x57f5d5['toString'](_0x18fb44(0xc3)),0x20)[_0x18fb44(0xb0)]()+'\x20'+crc_32_1[_0x18fb44(0xcd)][_0x18fb44(0xc6)](_0x49fc62[_0x18fb44(0xb0)](_0x18fb44(0xc3)),0x20)[_0x18fb44(0xb0)]();}default:{let _0x776ddd=0x0;if(_0x87e077[_0x18fb44(0x8d)]>0x0)_0x776ddd=crc_32_1[_0x18fb44(0xcd)][_0x18fb44(0xc6)](_0x1a8e0f['files'][_0x87e077[0x0]][_0x18fb44(0xb0)](_0x18fb44(0xc3)),0x20);for(let _0x20b088=0x1;_0x20b088<_0x87e077[_0x18fb44(0x8d)];_0x20b088++){const _0x4b4148=crc_32_1[_0x18fb44(0xcd)]['str'](_0x1a8e0f['files'][_0x87e077[_0x20b088]][_0x18fb44(0xb0)]('utf-8'),0x20);_0x776ddd=Math[_0x18fb44(0x8a)]((_0x4b4148+_0x776ddd)/0x2);}return _0x776ddd[_0x18fb44(0xb0)]();}}}exports[a157_0xb86ad2(0x87)]=calculateCRC32;function createChildComponentsFromParent(_0x5c5b31,_0x525f30,_0x1eedf4){const _0x2f2e12=a157_0xb86ad2,_0x5eb8e3=[];for(const _0x2d7433 of _0x1eedf4){const _0x366056=xml_v2_1[_0x2f2e12(0xa2)]['addChildNode'](xml_v2_1[_0x2f2e12(0xa2)][_0x2f2e12(0xc5)](_0x525f30),_0x2d7433[_0x2f2e12(0xbc)],_0x2d7433[_0x2f2e12(0x88)]),_0x222c80={};_0x222c80[_0x2f2e12(0xcb)]=_0x5c5b31[_0x2f2e12(0xcb)],_0x222c80[_0x2f2e12(0xa9)]=getChildComponentTypeByChildNodeName(_0x2d7433[_0x2f2e12(0xbc)]),_0x5c5b31[_0x2f2e12(0xa9)]===_0x2f2e12(0xb6)?_0x222c80[_0x2f2e12(0x9c)]=_0x2d7433[_0x2f2e12(0x88)]['fullName']:_0x222c80['name']=_0x5c5b31['name']+'.'+_0x2d7433['nodeData'][_0x2f2e12(0x92)],_0x222c80[_0x2f2e12(0xaa)]={[Object[_0x2f2e12(0xc2)](_0x5c5b31[_0x2f2e12(0xaa)])[0x0]]:Buffer[_0x2f2e12(0xc7)](xml_v2_1['XmlV2']['convertToString'](_0x366056,![]))},_0x222c80[_0x2f2e12(0x90)]=calculateCRC32(_0x222c80),_0x5eb8e3['push'](_0x222c80);}return _0x5eb8e3;}exports[a157_0xb86ad2(0x9e)]=createChildComponentsFromParent;function extractFileNameFromFiles({files:_0x4df672}){const _0x5b7433=a157_0xb86ad2;var _0x2ae4a8;const _0x369cc1=Object['keys'](_0x4df672);return((_0x2ae4a8=_0x369cc1[0x0])===null||_0x2ae4a8===void 0x0?void 0x0:_0x2ae4a8[_0x5b7433(0x93)](constants_1['META_XML_EXTENSION'],''))||'';}exports[a157_0xb86ad2(0x8e)]=extractFileNameFromFiles;function a157_0xca6d(_0x5573cf,_0x22d3b4){const _0x258fee=a157_0x1118();return a157_0xca6d=function(_0x35bc51,_0x78f59){_0x35bc51=_0x35bc51-0x83;let _0x1118d2=_0x258fee[_0x35bc51];return _0x1118d2;},a157_0xca6d(_0x5573cf,_0x22d3b4);}async function extractComponentTypeFromFiles({files:_0x3144ac}){const _0xf4cd6b=a157_0xb86ad2,_0x50d3e0=Object['keys'](_0x3144ac),_0x56037c=_0x50d3e0['find'](_0x51b080=>_0x51b080[_0xf4cd6b(0xbd)](constants_1['META_XML_EXTENSION']))||_0x50d3e0[0x0];try{const _0x42f324=await xml_v2_1[_0xf4cd6b(0xa2)][_0xf4cd6b(0xb4)](_0x3144ac[_0x56037c][_0xf4cd6b(0xb0)]('utf-8')),_0x458719=Object[_0xf4cd6b(0xc2)](_0x42f324)[0x0];if(!_0x458719)throw new Error();return _0x458719;}catch(_0x5a135d){throw new Error(_0xf4cd6b(0x99)+_0x50d3e0[_0xf4cd6b(0x86)](_0x56037c)+_0xf4cd6b(0xb2)+_0x50d3e0['join'](',\x20')+')');}}exports[a157_0xb86ad2(0x84)]=extractComponentTypeFromFiles;async function readFilesByFilename(_0x2b8d1f,_0x4bf5b8){const _0x5c2982=a157_0xb86ad2,_0x7d83b6=path_1[_0x5c2982(0xcd)][_0x5c2982(0xb8)](_0x2b8d1f),_0x42e4b0=path_1['default'][_0x5c2982(0x91)](_0x4bf5b8,_0x7d83b6),_0x4c2698=await fs_internal_1['FS'][_0x5c2982(0x9d)](_0x42e4b0,!![]),_0x438852=_0x4c2698[_0x5c2982(0xc8)](_0x5dd4d7=>path_1[_0x5c2982(0xcd)][_0x5c2982(0x8f)](_0x4bf5b8,_0x5dd4d7)),_0x75a8d3=new RegExp('^'+_0x2b8d1f+_0x5c2982(0xcf));return _0x438852[_0x5c2982(0xb9)](_0x52d63f=>_0x52d63f['match'](_0x75a8d3));}exports[a157_0xb86ad2(0xa0)]=readFilesByFilename;