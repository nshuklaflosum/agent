const a149_0x68b791=a149_0x2d76;(function(_0x65ab93,_0x13518a){const _0x499f3b=a149_0x2d76,_0x108f34=_0x65ab93();while(!![]){try{const _0x55d96b=-parseInt(_0x499f3b(0x8f))/0x1*(parseInt(_0x499f3b(0x7d))/0x2)+-parseInt(_0x499f3b(0x94))/0x3*(parseInt(_0x499f3b(0x81))/0x4)+-parseInt(_0x499f3b(0x75))/0x5*(parseInt(_0x499f3b(0xad))/0x6)+parseInt(_0x499f3b(0x82))/0x7*(-parseInt(_0x499f3b(0xb6))/0x8)+parseInt(_0x499f3b(0x98))/0x9*(-parseInt(_0x499f3b(0xa8))/0xa)+parseInt(_0x499f3b(0xb0))/0xb+parseInt(_0x499f3b(0x97))/0xc;if(_0x55d96b===_0x13518a)break;else _0x108f34['push'](_0x108f34['shift']());}catch(_0x2b917a){_0x108f34['push'](_0x108f34['shift']());}}}(a149_0x3290,0x8b665));const a149_0x517a01=(function(){let _0x4d53d0=!![];return function(_0x4b9d9a,_0x247091){const _0x1181b1=_0x4d53d0?function(){const _0x2907e6=a149_0x2d76;if(_0x247091){const _0x439c2a=_0x247091[_0x2907e6(0xae)](_0x4b9d9a,arguments);return _0x247091=null,_0x439c2a;}}:function(){};return _0x4d53d0=![],_0x1181b1;};}()),a149_0x33c336=a149_0x517a01(this,function(){const _0x27cd76=a149_0x2d76;return a149_0x33c336[_0x27cd76(0x79)]()[_0x27cd76(0x9d)](_0x27cd76(0x87))[_0x27cd76(0x79)]()[_0x27cd76(0xb1)](a149_0x33c336)[_0x27cd76(0x9d)](_0x27cd76(0x87));});a149_0x33c336();function a149_0x2d76(_0x3b7e10,_0x1484a8){const _0x17f97e=a149_0x3290();return a149_0x2d76=function(_0x33c336,_0x517a01){_0x33c336=_0x33c336-0x74;let _0x329082=_0x17f97e[_0x33c336];return _0x329082;},a149_0x2d76(_0x3b7e10,_0x1484a8);}'use strict';var __importDefault=this&&this[a149_0x68b791(0xa3)]||function(_0x4805f3){const _0x10e90e=a149_0x68b791;return _0x4805f3&&_0x4805f3[_0x10e90e(0x8e)]?_0x4805f3:{'default':_0x4805f3};};function a149_0x3290(){const _0x745896=['keys','__esModule','115HYXTVj','defineProperty','fileType','../utils/xml-v2','../../internal/fs.internal','51hDPwBU','../../../../core','[WriteChild]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20','16956864UfsRCt','21510NDofru','async','includes','unzip','MDApiWriter','search','text','components','catch','convertToString','writeChild','__importDefault','InvalidXmlError','makeDir','skipChildErrors','name','250dEFiiv','exists','push','sourceDir','have\x20to\x20write\x20%d\x20files','48PojTSp','apply','files','12109141dvatIl','constructor','XmlV2','].\x20Original\x20error:\x20','replaceOrAppend','log','865256NzOAxM','parse','handleXmlParsingError','599015NLkGXi','start','writeFile','Zip','toString','all','MAX_WRITES_PER_TICK','splice','3062UYRyUR','internalLogger','nodebuffer','body','150712qOvQxi','7LIcVug','default','parentComponents','fileName','join','(((.+)+)+)+$','[InvalidXmlError]\x20An\x20error\x20occurred\x20while\x20proceeding\x20XML\x20','readZip','dir','path','length'];a149_0x3290=function(){return _0x745896;};return a149_0x3290();}Object[a149_0x68b791(0x90)](exports,a149_0x68b791(0x8e),{'value':!![]}),exports['MDApiWriter']=void 0x0;const path_1=__importDefault(require(a149_0x68b791(0x8b))),core_1=require(a149_0x68b791(0x95)),fs_internal_1=require(a149_0x68b791(0x93)),invalid_xml_error_1=require('../errors/invalid-xml.error'),xml_v2_1=require(a149_0x68b791(0x92)),zip_1=require('../utils/zip'),child_types_1=__importDefault(require('../data/child-types'));class MDApiWriter{constructor({components:_0x353e56,sourceDir:_0x409c6e,skipChildErrors:_0x411c8f}){const _0x20b9f6=a149_0x68b791;this[_0x20b9f6(0x7b)]=0x64,this[_0x20b9f6(0x84)]={},this[_0x20b9f6(0x7e)]=new core_1['Logger'](MDApiWriter[_0x20b9f6(0xa7)]),this['components']=_0x353e56,this[_0x20b9f6(0xab)]=_0x409c6e,this[_0x20b9f6(0xa6)]=_0x411c8f;}async[a149_0x68b791(0x89)](_0x4499d2,_0xb6f045=![]){const _0x3407df=a149_0x68b791,_0x2055af=await zip_1[_0x3407df(0x78)][_0x3407df(0x9b)](_0x4499d2),_0x46b286=[];for(const _0x4fe63a of Object['keys'](_0x2055af['files'])){!_0x2055af[_0x3407df(0xaf)][_0x4fe63a][_0x3407df(0x8a)]&&_0x46b286[_0x3407df(0xaa)]({'filename':_0x4fe63a,'body':await _0x2055af[_0x3407df(0xaf)][_0x4fe63a][_0x3407df(0x99)](_0xb6f045?_0x3407df(0x7f):_0x3407df(0x9e))});}return _0x46b286;}async['writeParent'](_0xa1d10a){const _0x164035=a149_0x68b791;try{const _0x3d4ef3=await this['readZip'](_0xa1d10a['body'],!![]);await Promise[_0x164035(0x7a)](_0x3d4ef3['map'](({filename:_0x21f28e,body:_0x2bce9e})=>fs_internal_1['FS'][_0x164035(0x77)](path_1[_0x164035(0x83)]['join'](this['sourceDir'],_0x21f28e),_0x2bce9e)));}catch(_0x44794f){throw new Error('[WriteParent]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20'+_0xa1d10a[_0x164035(0x85)]+'\x20['+_0xa1d10a['fileType']+_0x164035(0xb3)+_0x44794f);}}[a149_0x68b791(0x74)](_0xbc6c37,_0x52c7e9){const _0x1b955b=a149_0x68b791;throw new invalid_xml_error_1[(_0x1b955b(0xa4))](_0x1b955b(0x88)+_0x52c7e9['fileName']+'\x20['+_0x52c7e9[_0x1b955b(0x91)]+_0x1b955b(0xb3)+_0xbc6c37);}async[a149_0x68b791(0xa2)](_0x171630){const _0x165f0c=a149_0x68b791,{filename:_0x109540,body:_0x3bd093}=(await this[_0x165f0c(0x89)](_0x171630[_0x165f0c(0x80)]))[0x0];try{if(!this[_0x165f0c(0x84)][_0x109540]){const _0x158e49=path_1[_0x165f0c(0x83)][_0x165f0c(0x86)](this[_0x165f0c(0xab)],_0x109540);if(await fs_internal_1['FS'][_0x165f0c(0xa9)](_0x158e49)){const _0x324fc8=await fs_internal_1['FS']['readFile'](_0x158e49);this[_0x165f0c(0x84)][_0x109540]=await xml_v2_1[_0x165f0c(0xb2)][_0x165f0c(0xb7)](_0x324fc8)[_0x165f0c(0xa0)](_0x44077f=>this[_0x165f0c(0x74)](_0x44077f,_0x171630));}else{this[_0x165f0c(0x84)][_0x109540]=await xml_v2_1['XmlV2'][_0x165f0c(0xb7)](_0x3bd093)[_0x165f0c(0xa0)](_0x290181=>this[_0x165f0c(0x74)](_0x290181,_0x171630));return;}}const _0x492fba=this[_0x165f0c(0x84)][_0x109540],_0x29758c=await xml_v2_1[_0x165f0c(0xb2)][_0x165f0c(0xb7)](_0x3bd093)['catch'](_0x16fa1a=>this[_0x165f0c(0x74)](_0x16fa1a,_0x171630));xml_v2_1[_0x165f0c(0xb2)][_0x165f0c(0xb4)](_0x492fba,_0x29758c);}catch(_0x2bd74f){if(_0x2bd74f instanceof invalid_xml_error_1['InvalidXmlError']){if(this[_0x165f0c(0xa6)])return;else throw _0x2bd74f;}throw new Error(_0x165f0c(0x96)+_0x171630[_0x165f0c(0x85)]+'\x20['+_0x171630[_0x165f0c(0x91)]+_0x165f0c(0xb3)+_0x2bd74f);}}async[a149_0x68b791(0x76)](){const _0x1b2be9=a149_0x68b791;!await fs_internal_1['FS'][_0x1b2be9(0xa9)](this[_0x1b2be9(0xab)])&&await fs_internal_1['FS'][_0x1b2be9(0xa5)](this['sourceDir']);for(const _0x2eb816 of this['components']){!child_types_1[_0x1b2be9(0x83)][_0x1b2be9(0x9a)](_0x2eb816['fileType'])?await this['writeParent'](_0x2eb816):await this[_0x1b2be9(0xa2)](_0x2eb816);}const _0x167c50=Object[_0x1b2be9(0x8d)](this['parentComponents']);this[_0x1b2be9(0x7e)][_0x1b2be9(0xb5)](_0x1b2be9(0xac),this[_0x1b2be9(0x9f)][_0x1b2be9(0x8c)]);while(_0x167c50[_0x1b2be9(0x8c)]){const _0x53a4df=_0x167c50[_0x1b2be9(0x7c)](0x0,this[_0x1b2be9(0x7b)]);for(const _0x3f134b of _0x53a4df){await fs_internal_1['FS'][_0x1b2be9(0x77)](path_1[_0x1b2be9(0x83)][_0x1b2be9(0x86)](this[_0x1b2be9(0xab)],_0x3f134b),xml_v2_1[_0x1b2be9(0xb2)][_0x1b2be9(0xa1)](this[_0x1b2be9(0x84)][_0x3f134b]));}}this['parentComponents']={};}}exports[a149_0x68b791(0x9c)]=MDApiWriter;