function a153_0x1705(){const _0x2581f6=['fileName','keys','(((.+)+)+)+$','map','../../internal/fs.internal','body','269556ShbcJG','240980YWSAtR','writeParent','makeDir','components','all','fileType','push','length','join','text','35QWwbXS','default','writeFile','../../../../core','../errors/invalid-xml.error','[WriteChild]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20','search','apply','../utils/zip','nodebuffer','12560LWLHlp','715154Uvrxwx','files','__importDefault','name','Zip','InvalidXmlError','toString','parse','XmlV2','parentComponents','dir','log','988360aObmRs','exists','writeChild','20369124nZvbrC','[InvalidXmlError]\x20An\x20error\x20occurred\x20while\x20proceeding\x20XML\x20','replaceOrAppend','readZip','1572501MOsNgY','__esModule','48OdNFcz','handleXmlParsingError','skipChildErrors','MAX_WRITES_PER_TICK','constructor','path','MDApiWriter','readFile','internalLogger','catch','sourceDir','].\x20Original\x20error:\x20','Logger'];a153_0x1705=function(){return _0x2581f6;};return a153_0x1705();}const a153_0x1e5093=a153_0x43b1;(function(_0x5aa2a1,_0x134e78){const _0x57fb9d=a153_0x43b1,_0x342c5b=_0x5aa2a1();while(!![]){try{const _0x3a4119=parseInt(_0x57fb9d(0x227))/0x1+-parseInt(_0x57fb9d(0x228))/0x2+-parseInt(_0x57fb9d(0x1fd))/0x3+-parseInt(_0x57fb9d(0x212))/0x4+-parseInt(_0x57fb9d(0x213))/0x5*(parseInt(_0x57fb9d(0x1ff))/0x6)+-parseInt(_0x57fb9d(0x21d))/0x7*(parseInt(_0x57fb9d(0x1f6))/0x8)+parseInt(_0x57fb9d(0x1f9))/0x9;if(_0x3a4119===_0x134e78)break;else _0x342c5b['push'](_0x342c5b['shift']());}catch(_0x8a6e43){_0x342c5b['push'](_0x342c5b['shift']());}}}(a153_0x1705,0x4ef2a));const a153_0x20f114=(function(){let _0x29b235=!![];return function(_0x151ee5,_0x4b88e2){const _0x3d92b5=_0x29b235?function(){const _0x126f52=a153_0x43b1;if(_0x4b88e2){const _0x528852=_0x4b88e2[_0x126f52(0x224)](_0x151ee5,arguments);return _0x4b88e2=null,_0x528852;}}:function(){};return _0x29b235=![],_0x3d92b5;};}()),a153_0x386a89=a153_0x20f114(this,function(){const _0x4f1d45=a153_0x43b1;return a153_0x386a89[_0x4f1d45(0x1f0)]()[_0x4f1d45(0x223)]('(((.+)+)+)+$')[_0x4f1d45(0x1f0)]()[_0x4f1d45(0x203)](a153_0x386a89)[_0x4f1d45(0x223)](_0x4f1d45(0x20e));});a153_0x386a89();'use strict';var __importDefault=this&&this[a153_0x1e5093(0x22a)]||function(_0x1aa948){const _0x36a46c=a153_0x1e5093;return _0x1aa948&&_0x1aa948[_0x36a46c(0x1fe)]?_0x1aa948:{'default':_0x1aa948};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a153_0x1e5093(0x205)]=void 0x0;const path_1=__importDefault(require(a153_0x1e5093(0x204))),core_1=require(a153_0x1e5093(0x220)),fs_internal_1=require(a153_0x1e5093(0x210)),invalid_xml_error_1=require(a153_0x1e5093(0x221)),xml_v2_1=require('../utils/xml-v2'),zip_1=require(a153_0x1e5093(0x225)),child_types_1=__importDefault(require('../data/child-types'));function a153_0x43b1(_0x5541b2,_0x294e1b){const _0x2da893=a153_0x1705();return a153_0x43b1=function(_0x386a89,_0x20f114){_0x386a89=_0x386a89-0x1f0;let _0x17054a=_0x2da893[_0x386a89];return _0x17054a;},a153_0x43b1(_0x5541b2,_0x294e1b);}class MDApiWriter{constructor({components:_0x4e282e,sourceDir:_0x54aa3c,skipChildErrors:_0x494327}){const _0x2ecf66=a153_0x1e5093;this[_0x2ecf66(0x202)]=0x64,this[_0x2ecf66(0x1f3)]={},this[_0x2ecf66(0x207)]=new core_1[(_0x2ecf66(0x20b))](MDApiWriter[_0x2ecf66(0x22b)]),this[_0x2ecf66(0x216)]=_0x4e282e,this['sourceDir']=_0x54aa3c,this['skipChildErrors']=_0x494327;}async['readZip'](_0x47331e,_0x189085=![]){const _0x43002f=a153_0x1e5093,_0x373fb8=await zip_1[_0x43002f(0x22c)]['unzip'](_0x47331e),_0x1218c1=[];for(const _0x319b1b of Object['keys'](_0x373fb8[_0x43002f(0x229)])){!_0x373fb8[_0x43002f(0x229)][_0x319b1b][_0x43002f(0x1f4)]&&_0x1218c1[_0x43002f(0x219)]({'filename':_0x319b1b,'body':await _0x373fb8['files'][_0x319b1b]['async'](_0x189085?_0x43002f(0x226):_0x43002f(0x21c))});}return _0x1218c1;}async[a153_0x1e5093(0x214)](_0xb41597){const _0x486666=a153_0x1e5093;try{const _0xe857cc=await this[_0x486666(0x1fc)](_0xb41597[_0x486666(0x211)],!![]);await Promise[_0x486666(0x217)](_0xe857cc[_0x486666(0x20f)](({filename:_0x1fdddd,body:_0x111448})=>fs_internal_1['FS'][_0x486666(0x21f)](path_1[_0x486666(0x21e)][_0x486666(0x21b)](this[_0x486666(0x209)],_0x1fdddd),_0x111448)));}catch(_0x3af49c){throw new Error('[WriteParent]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20'+_0xb41597[_0x486666(0x20c)]+'\x20['+_0xb41597[_0x486666(0x218)]+'].\x20Original\x20error:\x20'+_0x3af49c);}}[a153_0x1e5093(0x200)](_0x20bed5,_0x3cbe2c){const _0x24ca3c=a153_0x1e5093;throw new invalid_xml_error_1[(_0x24ca3c(0x22d))](_0x24ca3c(0x1fa)+_0x3cbe2c['fileName']+'\x20['+_0x3cbe2c[_0x24ca3c(0x218)]+_0x24ca3c(0x20a)+_0x20bed5);}async[a153_0x1e5093(0x1f8)](_0x3099a0){const _0x1fc8b5=a153_0x1e5093,{filename:_0x5649f7,body:_0x534229}=(await this[_0x1fc8b5(0x1fc)](_0x3099a0[_0x1fc8b5(0x211)]))[0x0];try{if(!this[_0x1fc8b5(0x1f3)][_0x5649f7]){const _0x115f76=path_1[_0x1fc8b5(0x21e)][_0x1fc8b5(0x21b)](this[_0x1fc8b5(0x209)],_0x5649f7);if(await fs_internal_1['FS'][_0x1fc8b5(0x1f7)](_0x115f76)){const _0x1e28a3=await fs_internal_1['FS'][_0x1fc8b5(0x206)](_0x115f76);this['parentComponents'][_0x5649f7]=await xml_v2_1[_0x1fc8b5(0x1f2)][_0x1fc8b5(0x1f1)](_0x1e28a3)['catch'](_0x207ba3=>this[_0x1fc8b5(0x200)](_0x207ba3,_0x3099a0));}else{this[_0x1fc8b5(0x1f3)][_0x5649f7]=await xml_v2_1['XmlV2'][_0x1fc8b5(0x1f1)](_0x534229)[_0x1fc8b5(0x208)](_0x4c1d72=>this['handleXmlParsingError'](_0x4c1d72,_0x3099a0));return;}}const _0x24d317=this[_0x1fc8b5(0x1f3)][_0x5649f7],_0x5d6066=await xml_v2_1[_0x1fc8b5(0x1f2)][_0x1fc8b5(0x1f1)](_0x534229)[_0x1fc8b5(0x208)](_0x167955=>this[_0x1fc8b5(0x200)](_0x167955,_0x3099a0));xml_v2_1['XmlV2'][_0x1fc8b5(0x1fb)](_0x24d317,_0x5d6066);}catch(_0x5e02cc){if(_0x5e02cc instanceof invalid_xml_error_1[_0x1fc8b5(0x22d)]){if(this[_0x1fc8b5(0x201)])return;else throw _0x5e02cc;}throw new Error(_0x1fc8b5(0x222)+_0x3099a0[_0x1fc8b5(0x20c)]+'\x20['+_0x3099a0['fileType']+_0x1fc8b5(0x20a)+_0x5e02cc);}}async['start'](){const _0x2b28c3=a153_0x1e5093;!await fs_internal_1['FS'][_0x2b28c3(0x1f7)](this[_0x2b28c3(0x209)])&&await fs_internal_1['FS'][_0x2b28c3(0x215)](this[_0x2b28c3(0x209)]);for(const _0x27a985 of this[_0x2b28c3(0x216)]){!child_types_1['default']['includes'](_0x27a985[_0x2b28c3(0x218)])?await this[_0x2b28c3(0x214)](_0x27a985):await this[_0x2b28c3(0x1f8)](_0x27a985);}const _0x339d6a=Object[_0x2b28c3(0x20d)](this[_0x2b28c3(0x1f3)]);this[_0x2b28c3(0x207)][_0x2b28c3(0x1f5)]('have\x20to\x20write\x20%d\x20files',this['components'][_0x2b28c3(0x21a)]);while(_0x339d6a[_0x2b28c3(0x21a)]){const _0x3a6f79=_0x339d6a['splice'](0x0,this[_0x2b28c3(0x202)]);for(const _0x57456c of _0x3a6f79){await fs_internal_1['FS'][_0x2b28c3(0x21f)](path_1[_0x2b28c3(0x21e)][_0x2b28c3(0x21b)](this['sourceDir'],_0x57456c),xml_v2_1[_0x2b28c3(0x1f2)]['convertToString'](this[_0x2b28c3(0x1f3)][_0x57456c]));}}this[_0x2b28c3(0x1f3)]={};}}exports[a153_0x1e5093(0x205)]=MDApiWriter;