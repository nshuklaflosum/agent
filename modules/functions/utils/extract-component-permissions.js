'use strict';const a91_0xbc1222=a91_0x3e2b;(function(_0x55264c,_0x5c127e){const _0x937841=a91_0x3e2b,_0x5eb1f2=_0x55264c();while(!![]){try{const _0x70eb5a=parseInt(_0x937841(0x1bf))/0x1+parseInt(_0x937841(0x1af))/0x2*(parseInt(_0x937841(0x1d3))/0x3)+parseInt(_0x937841(0x1b8))/0x4*(-parseInt(_0x937841(0x1ca))/0x5)+-parseInt(_0x937841(0x1b1))/0x6*(-parseInt(_0x937841(0x1da))/0x7)+parseInt(_0x937841(0x1db))/0x8*(-parseInt(_0x937841(0x1d4))/0x9)+parseInt(_0x937841(0x1b2))/0xa*(-parseInt(_0x937841(0x1aa))/0xb)+parseInt(_0x937841(0x1ac))/0xc;if(_0x70eb5a===_0x5c127e)break;else _0x5eb1f2['push'](_0x5eb1f2['shift']());}catch(_0x53b984){_0x5eb1f2['push'](_0x5eb1f2['shift']());}}}(a91_0x522b,0x99720));function a91_0x522b(){const _0x36beef=['(((.+)+)+)+$','parse','44442rptIfe','hasActivationRequired','138oEJUZq','70CaeDtW','layoutAssignments','field','application','name','recordTypeVisibilities','166048HmEqhi','dataCategoryGroup','description','Component__r','push','externalDataSourceAccesses','tab','906190jybGOy','externalDataSource','recordType','customSettingAccesses','PermissionSet','Profile','http://soap.sforce.com/2006/04/metadata','flow','tabSettings','isArray','userPermissions','75xBDmvy','applicationVisibilities','customMetadataTypeAccesses','content','Component_Name__c','flowAccesses','profileActionOverrides','apexPage','pageAccesses','18AilFLM','1710pmYUHw','toString','object','categoryGroupVisibilities','classAccesses','custom','180607jVPFlJ','42144MeYLUk','../../git/parsers/utils/xml','loginIpRanges','search','label','get','extractComponentPermissions','801262rySBFC','layout','13548804XiqyaY'];a91_0x522b=function(){return _0x36beef;};return a91_0x522b();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['extractComponentPermissions']=void 0x0;const xml_1=require(a91_0xbc1222(0x1a4)),PERMISSIONS_MAP=new Map([[a91_0xbc1222(0x1d8),'apexClass'],[a91_0xbc1222(0x1d2),a91_0xbc1222(0x1d1)],[a91_0xbc1222(0x1c7),a91_0xbc1222(0x1be)],['tabVisibilities',a91_0xbc1222(0x1be)],[a91_0xbc1222(0x1d0),a91_0xbc1222(0x1cd)],[a91_0xbc1222(0x1d7),a91_0xbc1222(0x1b9)],['objectPermissions',a91_0xbc1222(0x1d6)],[a91_0xbc1222(0x1cc),'name'],[a91_0xbc1222(0x1c2),a91_0xbc1222(0x1b6)],[a91_0xbc1222(0x1cb),a91_0xbc1222(0x1b5)],[a91_0xbc1222(0x1bd),a91_0xbc1222(0x1c0)],['customPermissions','name'],[a91_0xbc1222(0x1cf),a91_0xbc1222(0x1c6)],['layoutAssignments',a91_0xbc1222(0x1ab)],[a91_0xbc1222(0x1b7),a91_0xbc1222(0x1c1)],['fieldPermissions',a91_0xbc1222(0x1b4)]]);var UNREMOVE_PERMISSION;(function(_0x3f723b){const _0x26c6a2=a91_0xbc1222,_0xb90ab9=(function(){let _0x930fea=!![];return function(_0x293690,_0x4b0827){const _0x351001=_0x930fea?function(){if(_0x4b0827){const _0x4cc914=_0x4b0827['apply'](_0x293690,arguments);return _0x4b0827=null,_0x4cc914;}}:function(){};return _0x930fea=![],_0x351001;};}()),_0x398470=_0xb90ab9(this,function(){const _0x2603e3=a91_0x3e2b;return _0x398470[_0x2603e3(0x1d5)]()[_0x2603e3(0x1a6)](_0x2603e3(0x1ad))[_0x2603e3(0x1d5)]()['constructor'](_0x398470)[_0x2603e3(0x1a6)](_0x2603e3(0x1ad));});_0x398470(),_0x3f723b['hasActivationRequired']=_0x26c6a2(0x1b0),_0x3f723b[_0x26c6a2(0x1a7)]=_0x26c6a2(0x1a7),_0x3f723b['custom']=_0x26c6a2(0x1d9),_0x3f723b[_0x26c6a2(0x1ba)]=_0x26c6a2(0x1ba);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x2fcee9=>{const _0x473669=a91_0xbc1222;var _0x11115a,_0x5a942f;return(_0x11115a=_0x2fcee9[_0x473669(0x1c4)])===null||_0x11115a===void 0x0?!![]:delete _0x11115a[_0x473669(0x1c9)],(_0x5a942f=_0x2fcee9['Profile'])===null||_0x5a942f===void 0x0?!![]:delete _0x5a942f['loginIpRanges'],_0x2fcee9;},'PermissionSet':_0x5f1ebf=>{const _0x458de7=a91_0xbc1222;var _0x2d6223,_0x4e7a8e;return(_0x2d6223=_0x5f1ebf[_0x458de7(0x1c3)])===null||_0x2d6223===void 0x0?!![]:delete _0x2d6223[_0x458de7(0x1c9)],(_0x4e7a8e=_0x5f1ebf[_0x458de7(0x1c3)])===null||_0x4e7a8e===void 0x0?!![]:delete _0x4e7a8e[_0x458de7(0x1a5)],_0x5f1ebf;}};async function extractComponentPermissions(_0x14e5c4,_0x3f9a08,_0xf37bb6){const _0x1187e8=a91_0xbc1222,_0x417577=await getReadyComponent(_0x14e5c4,_0xf37bb6),_0x206bc1=_0x417577[_0xf37bb6];if(!_0x206bc1)return _0x417577;for(const _0x3115cb in _0x206bc1){if(UNREMOVE_PERMISSION[_0x3115cb])continue;const _0x258241=_0x206bc1[_0x3115cb],_0x1c7adc=getValidPermission(_0x258241,_0x3115cb,_0x3f9a08);_0x1c7adc['length']?_0x206bc1[_0x3115cb]=_0x1c7adc:delete _0x206bc1[_0x3115cb];}return _0x417577[_0xf37bb6]['$']={'xmlns':_0x1187e8(0x1c5)},_0x417577;}exports[a91_0xbc1222(0x1a9)]=extractComponentPermissions;function getValidPermission(_0x2d0229,_0x5a7be0,_0x275d76){const _0x28c639=a91_0xbc1222;let _0x26b950=[];if(_0x5a7be0===_0x28c639(0x1b3))_0x26b950=getValidLayout(_0x2d0229,_0x5a7be0,_0x275d76);else{const _0x1594cb=Array[_0x28c639(0x1c8)](_0x2d0229)?_0x2d0229:[_0x2d0229];for(const _0x23cb6d of _0x1594cb){isValidPermission(_0x23cb6d,_0x5a7be0,_0x275d76)&&_0x26b950[_0x28c639(0x1bc)](_0x23cb6d);}}return _0x26b950;}function a91_0x3e2b(_0x47dc07,_0x3f31ec){const _0x2b9467=a91_0x522b();return a91_0x3e2b=function(_0x4e6772,_0x3e8372){_0x4e6772=_0x4e6772-0x1a4;let _0x522b96=_0x2b9467[_0x4e6772];return _0x522b96;},a91_0x3e2b(_0x47dc07,_0x3f31ec);}function isValidPermission(_0xab676c,_0x34aaba,_0x21649d){const _0x449a9f=a91_0xbc1222,_0xb7f5a4=PERMISSIONS_MAP[_0x449a9f(0x1a8)](_0x34aaba);return _0xab676c[_0xb7f5a4]&&_0x21649d['some'](_0x1206f3=>_0x1206f3[_0x449a9f(0x1bb)][_0x449a9f(0x1ce)]['includes'](_0xab676c[_0xb7f5a4]));}function getValidLayout(_0x576e4a,_0x1bcd8f,_0x1dae60){const _0x3dabb8=a91_0xbc1222,_0x241760=[],_0x4aac05=Array[_0x3dabb8(0x1c8)](_0x576e4a)?_0x576e4a:[_0x576e4a];for(const _0x2da594 in _0x4aac05){isValidPermission(_0x4aac05[_0x2da594],_0x1bcd8f,_0x1dae60)&&(!_0x4aac05[_0x2da594][_0x3dabb8(0x1c1)]&&_0x241760[_0x3dabb8(0x1bc)](_0x4aac05[_0x2da594]),isValidPermission(_0x4aac05[_0x2da594],'recordTypeVisibilities',_0x1dae60)&&_0x241760[_0x3dabb8(0x1bc)](_0x4aac05[_0x2da594]));}return _0x241760;}async function getReadyComponent(_0x232c09,_0x14c087){const _0x459d34=a91_0xbc1222,_0x2ff4cd=await xml_1['Xml'][_0x459d34(0x1ae)](_0x232c09);return prepareDeleteComponent[_0x14c087](_0x2ff4cd);}