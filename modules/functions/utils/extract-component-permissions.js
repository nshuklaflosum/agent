'use strict';const a59_0xf9cc5e=a59_0x35e7;(function(_0x7e5607,_0x1c8f9d){const _0x3caf1b=a59_0x35e7,_0x70113a=_0x7e5607();while(!![]){try{const _0x32a847=parseInt(_0x3caf1b(0x1a2))/0x1+-parseInt(_0x3caf1b(0x1a5))/0x2+-parseInt(_0x3caf1b(0x1b3))/0x3*(-parseInt(_0x3caf1b(0x18e))/0x4)+-parseInt(_0x3caf1b(0x1b5))/0x5+-parseInt(_0x3caf1b(0x1c0))/0x6*(-parseInt(_0x3caf1b(0x1c5))/0x7)+-parseInt(_0x3caf1b(0x1ad))/0x8+-parseInt(_0x3caf1b(0x1b8))/0x9*(-parseInt(_0x3caf1b(0x1c1))/0xa);if(_0x32a847===_0x1c8f9d)break;else _0x70113a['push'](_0x70113a['shift']());}catch(_0x3bd4ac){_0x70113a['push'](_0x70113a['shift']());}}}(a59_0x2ee1,0x7dd8a));Object[a59_0xf9cc5e(0x198)](exports,a59_0xf9cc5e(0x1a3),{'value':!![]}),exports[a59_0xf9cc5e(0x193)]=void 0x0;const xml_1=require('../../git/parsers/utils/xml'),PERMISSIONS_MAP=new Map([['classAccesses','apexClass'],[a59_0xf9cc5e(0x199),a59_0xf9cc5e(0x1a9)],[a59_0xf9cc5e(0x1ae),a59_0xf9cc5e(0x1bc)],[a59_0xf9cc5e(0x1c2),a59_0xf9cc5e(0x1bc)],[a59_0xf9cc5e(0x1b7),a59_0xf9cc5e(0x1b1)],[a59_0xf9cc5e(0x1ab),a59_0xf9cc5e(0x19b)],[a59_0xf9cc5e(0x194),a59_0xf9cc5e(0x1af)],[a59_0xf9cc5e(0x1be),a59_0xf9cc5e(0x1b0)],['customSettingAccesses','name'],[a59_0xf9cc5e(0x19a),a59_0xf9cc5e(0x1bb)],[a59_0xf9cc5e(0x197),a59_0xf9cc5e(0x18c)],[a59_0xf9cc5e(0x19c),'name'],[a59_0xf9cc5e(0x1bf),a59_0xf9cc5e(0x192)],[a59_0xf9cc5e(0x195),'layout'],[a59_0xf9cc5e(0x1a8),'recordType'],[a59_0xf9cc5e(0x190),a59_0xf9cc5e(0x19f)]]);var UNREMOVE_PERMISSION;(function(_0xadba71){const _0x53b7c4=a59_0xf9cc5e,_0x350264=(function(){let _0x197ef0=!![];return function(_0x15b6ce,_0x514d21){const _0x19f8b1=_0x197ef0?function(){const _0x4b2e2b=a59_0x35e7;if(_0x514d21){const _0x235aab=_0x514d21[_0x4b2e2b(0x1a7)](_0x15b6ce,arguments);return _0x514d21=null,_0x235aab;}}:function(){};return _0x197ef0=![],_0x19f8b1;};}()),_0x2d441f=_0x350264(this,function(){const _0x6fb4ce=a59_0x35e7;return _0x2d441f['toString']()[_0x6fb4ce(0x1a6)]('(((.+)+)+)+$')['toString']()['constructor'](_0x2d441f)[_0x6fb4ce(0x1a6)](_0x6fb4ce(0x1bd));});_0x2d441f(),_0xadba71['hasActivationRequired']='hasActivationRequired',_0xadba71['label']=_0x53b7c4(0x1c3),_0xadba71['custom']=_0x53b7c4(0x18f),_0xadba71[_0x53b7c4(0x1ac)]=_0x53b7c4(0x1ac);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x9f0a95=>{const _0x9e53d8=a59_0xf9cc5e;var _0x1df7c1,_0x1bbfb3;return(_0x1df7c1=_0x9f0a95['Profile'])===null||_0x1df7c1===void 0x0?!![]:delete _0x1df7c1[_0x9e53d8(0x1a1)],(_0x1bbfb3=_0x9f0a95[_0x9e53d8(0x19d)])===null||_0x1bbfb3===void 0x0?!![]:delete _0x1bbfb3[_0x9e53d8(0x1b9)],_0x9f0a95;},'PermissionSet':_0x2fe609=>{const _0x1467c6=a59_0xf9cc5e;var _0x43c5b9,_0x1dd32b;return(_0x43c5b9=_0x2fe609[_0x1467c6(0x1c4)])===null||_0x43c5b9===void 0x0?!![]:delete _0x43c5b9[_0x1467c6(0x1a1)],(_0x1dd32b=_0x2fe609[_0x1467c6(0x1c4)])===null||_0x1dd32b===void 0x0?!![]:delete _0x1dd32b[_0x1467c6(0x1b9)],_0x2fe609;}};async function extractComponentPermissions(_0xdf2363,_0x314508,_0x3a8902){const _0xa7f736=a59_0xf9cc5e,_0x4fde14=await getReadyComponent(_0xdf2363,_0x3a8902),_0x209942=_0x4fde14[_0x3a8902];if(!_0x209942)return _0x4fde14;for(const _0x57d999 in _0x209942){if(UNREMOVE_PERMISSION[_0x57d999])continue;const _0x50029f=_0x209942[_0x57d999],_0x68bbdc=getValidPermission(_0x50029f,_0x57d999,_0x314508);_0x68bbdc[_0xa7f736(0x1b4)]?_0x209942[_0x57d999]=_0x68bbdc:delete _0x209942[_0x57d999];}return _0x4fde14[_0x3a8902]['$']={'xmlns':_0xa7f736(0x196)},_0x4fde14;}exports[a59_0xf9cc5e(0x193)]=extractComponentPermissions;function getValidPermission(_0x3977e4,_0x22894c,_0x106ae4){const _0x3e1f86=a59_0xf9cc5e;let _0x589c4c=[];if(_0x22894c===_0x3e1f86(0x195))_0x589c4c=getValidLayout(_0x3977e4,_0x22894c,_0x106ae4);else{const _0x55fb11=Array['isArray'](_0x3977e4)?_0x3977e4:[_0x3977e4];for(const _0x459329 of _0x55fb11){isValidPermission(_0x459329,_0x22894c,_0x106ae4)&&_0x589c4c[_0x3e1f86(0x19e)](_0x459329);}}return _0x589c4c;}function a59_0x2ee1(){const _0x1ea48e=['content','Xml','3AcWAQJ','length','4790310IGCgCs','recordType','profileActionOverrides','5381379wfSTDB','loginIpRanges','Component__r','application','tab','(((.+)+)+)+$','customMetadataTypeAccesses','flowAccesses','1144998VDSUXc','20AXfEKU','tabVisibilities','label','PermissionSet','14knVICr','externalDataSource','get','3255796OOULEK','custom','fieldPermissions','includes','flow','extractComponentPermissions','objectPermissions','layoutAssignments','http://soap.sforce.com/2006/04/metadata','externalDataSourceAccesses','defineProperty','pageAccesses','applicationVisibilities','dataCategoryGroup','customPermissions','Profile','push','field','some','userPermissions','696201LbHQbg','__esModule','parse','1467814rqThXB','search','apply','recordTypeVisibilities','apexPage','isArray','categoryGroupVisibilities','description','7041944GSLUKX','tabSettings','object','name'];a59_0x2ee1=function(){return _0x1ea48e;};return a59_0x2ee1();}function isValidPermission(_0x242f14,_0x228177,_0x1c8b1e){const _0x1129ec=a59_0xf9cc5e,_0x50ea8f=PERMISSIONS_MAP[_0x1129ec(0x18d)](_0x228177);return _0x242f14[_0x50ea8f]&&_0x1c8b1e[_0x1129ec(0x1a0)](_0x2e6179=>_0x2e6179[_0x1129ec(0x1ba)]['Component_Name__c'][_0x1129ec(0x191)](_0x242f14[_0x50ea8f]));}function a59_0x35e7(_0x224e07,_0x157302){const _0x5d9fa9=a59_0x2ee1();return a59_0x35e7=function(_0x53865f,_0x2ddcd9){_0x53865f=_0x53865f-0x18c;let _0x2ee1dd=_0x5d9fa9[_0x53865f];return _0x2ee1dd;},a59_0x35e7(_0x224e07,_0x157302);}function getValidLayout(_0x4606ba,_0x547251,_0x2ffdef){const _0x11e66e=a59_0xf9cc5e,_0x5e0e60=[],_0x365c33=Array[_0x11e66e(0x1aa)](_0x4606ba)?_0x4606ba:[_0x4606ba];for(const _0x11b8f6 in _0x365c33){isValidPermission(_0x365c33[_0x11b8f6],_0x547251,_0x2ffdef)&&(!_0x365c33[_0x11b8f6][_0x11e66e(0x1b6)]&&_0x5e0e60[_0x11e66e(0x19e)](_0x365c33[_0x11b8f6]),isValidPermission(_0x365c33[_0x11b8f6],'recordTypeVisibilities',_0x2ffdef)&&_0x5e0e60['push'](_0x365c33[_0x11b8f6]));}return _0x5e0e60;}async function getReadyComponent(_0x436e5d,_0x36ced6){const _0x40a227=a59_0xf9cc5e,_0x1ab9d7=await xml_1[_0x40a227(0x1b2)][_0x40a227(0x1a4)](_0x436e5d);return prepareDeleteComponent[_0x36ced6](_0x1ab9d7);}