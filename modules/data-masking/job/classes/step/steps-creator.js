const a62_0xbf10cf=a62_0x251f;(function(_0x1c385a,_0x58e2bc){const _0x543656=a62_0x251f,_0x508117=_0x1c385a();while(!![]){try{const _0x2d5eac=parseInt(_0x543656(0x117))/0x1+-parseInt(_0x543656(0x12a))/0x2+parseInt(_0x543656(0x108))/0x3+parseInt(_0x543656(0x11d))/0x4+-parseInt(_0x543656(0x106))/0x5*(-parseInt(_0x543656(0x10e))/0x6)+parseInt(_0x543656(0x10c))/0x7*(parseInt(_0x543656(0x123))/0x8)+-parseInt(_0x543656(0x129))/0x9;if(_0x2d5eac===_0x58e2bc)break;else _0x508117['push'](_0x508117['shift']());}catch(_0xd989dd){_0x508117['push'](_0x508117['shift']());}}}(a62_0x4725,0xa979f));const a62_0x4057cf=(function(){let _0x1c2a26=!![];return function(_0xed1155,_0xc54069){const _0x377806=_0x1c2a26?function(){const _0x772328=a62_0x251f;if(_0xc54069){const _0x51d9ae=_0xc54069[_0x772328(0x128)](_0xed1155,arguments);return _0xc54069=null,_0x51d9ae;}}:function(){};return _0x1c2a26=![],_0x377806;};}()),a62_0x58769a=a62_0x4057cf(this,function(){const _0xe65f6e=a62_0x251f;return a62_0x58769a[_0xe65f6e(0x104)]()[_0xe65f6e(0x111)]('(((.+)+)+)+$')['toString']()[_0xe65f6e(0x11b)](a62_0x58769a)[_0xe65f6e(0x111)](_0xe65f6e(0x119));});function a62_0x4725(){const _0x255fab=['../../enums/job.enums','1575wVbFGz','objects','3489213IhleFE','DELETE','@flosum/salesforce','MASKING','90769TWQYsL','Unknown\x20type\x20\x27','13134rxnpBP','create','\x27\x20for\x20ObjectRule\x20\x27','search','reduce','_loggerDetails','__esModule','getMaskingStep','ObjectRuleType','467283rXJvOi','_libraries','(((.+)+)+)+$','../../../../../constants','constructor','_objectsDescribes','1443628pTwPOi','_objectRules','defineProperty','getDeleteStep','name','keys','464FfjsHB','fetchDescribes','DeleteStep','./masking-step','_request','apply','15703083VLVqnW','1987840WXleVX','SALESFORCE_API_VERSION_RAW','StepsCreator','_loggerJobState','toString'];a62_0x4725=function(){return _0x255fab;};return a62_0x4725();}function a62_0x251f(_0x54e222,_0x2fde63){const _0x526451=a62_0x4725();return a62_0x251f=function(_0x58769a,_0x4057cf){_0x58769a=_0x58769a-0x101;let _0x472541=_0x526451[_0x58769a];return _0x472541;},a62_0x251f(_0x54e222,_0x2fde63);}a62_0x58769a();'use strict';Object[a62_0xbf10cf(0x11f)](exports,a62_0xbf10cf(0x114),{'value':!![]}),exports[a62_0xbf10cf(0x102)]=void 0x0;const salesforce_1=require(a62_0xbf10cf(0x10a)),masking_step_1=require(a62_0xbf10cf(0x126)),constants_1=require(a62_0xbf10cf(0x11a)),job_enums_1=require(a62_0xbf10cf(0x105)),delete_step_1=require('./delete-step');class StepsCreator{constructor({loggerDetails:_0x2a9f86,loggerJobState:_0x4911d4,objectRules:_0x2a58a2,request:_0x262611,libraries:_0x1344e6}){const _0xa7d4e9=a62_0xbf10cf;this[_0xa7d4e9(0x113)]=_0x2a9f86,this[_0xa7d4e9(0x103)]=_0x4911d4,this[_0xa7d4e9(0x11e)]=_0x2a58a2,this[_0xa7d4e9(0x127)]=_0x262611,this['_libraries']=_0x1344e6;}async[a62_0xbf10cf(0x10f)](){const _0x30b2ed=a62_0xbf10cf;return this[_0x30b2ed(0x11c)]=await this[_0x30b2ed(0x124)](),Object[_0x30b2ed(0x122)](this[_0x30b2ed(0x11e)])['map'](_0x43bb94=>{const _0x427358=_0x30b2ed,{type:_0x4109ab}=this['_objectRules'][_0x43bb94];switch(_0x4109ab){case job_enums_1[_0x427358(0x116)][_0x427358(0x10b)]:return this[_0x427358(0x115)](_0x43bb94);case job_enums_1[_0x427358(0x116)][_0x427358(0x109)]:return this[_0x427358(0x120)](_0x43bb94);default:throw new Error(_0x427358(0x10d)+_0x4109ab+_0x427358(0x110)+_0x43bb94+'\x27');}});}async[a62_0xbf10cf(0x124)](){const _0x4feabf=a62_0xbf10cf,_0x57f1d8=await salesforce_1['DescribeService'][_0x4feabf(0x107)](this[_0x4feabf(0x127)],{},Object[_0x4feabf(0x122)](this['_objectRules']),constants_1[_0x4feabf(0x101)]);return _0x57f1d8[_0x4feabf(0x112)]((_0x2e209c,_0x5dcb40)=>{const _0x576851=_0x4feabf;return{[_0x5dcb40[_0x576851(0x121)]]:_0x5dcb40,..._0x2e209c};},{});}[a62_0xbf10cf(0x115)](_0xf90284){const _0x1853f6=a62_0xbf10cf;return new masking_step_1['MaskingStep']({'loggerDetails':this[_0x1853f6(0x113)],'loggerJobState':this[_0x1853f6(0x103)],'objectName':_0xf90284,'request':this['_request'],'objectRule':this[_0x1853f6(0x11e)][_0xf90284],'objectDescribe':this['_objectsDescribes'][_0xf90284],'libraries':this[_0x1853f6(0x118)]});}['getDeleteStep'](_0x2c66ce){const _0x30c3a7=a62_0xbf10cf;return new delete_step_1[(_0x30c3a7(0x125))]({'loggerDetails':this[_0x30c3a7(0x113)],'loggerJobState':this['_loggerJobState'],'objectName':_0x2c66ce,'request':this[_0x30c3a7(0x127)],'objectRule':this[_0x30c3a7(0x11e)][_0x2c66ce],'objectDescribe':this[_0x30c3a7(0x11c)][_0x2c66ce]});}}exports[a62_0xbf10cf(0x102)]=StepsCreator;