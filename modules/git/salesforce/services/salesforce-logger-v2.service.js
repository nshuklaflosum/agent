const a247_0x1b601f=a247_0x211c;(function(_0x545499,_0x1158fb){const _0x5c53ff=a247_0x211c,_0x3ab05f=_0x545499();while(!![]){try{const _0x402404=parseInt(_0x5c53ff(0x212))/0x1*(-parseInt(_0x5c53ff(0x1f5))/0x2)+parseInt(_0x5c53ff(0x20c))/0x3*(-parseInt(_0x5c53ff(0x213))/0x4)+-parseInt(_0x5c53ff(0x1fd))/0x5+-parseInt(_0x5c53ff(0x1ea))/0x6*(-parseInt(_0x5c53ff(0x20d))/0x7)+parseInt(_0x5c53ff(0x208))/0x8+parseInt(_0x5c53ff(0x1f7))/0x9+-parseInt(_0x5c53ff(0x1ff))/0xa;if(_0x402404===_0x1158fb)break;else _0x3ab05f['push'](_0x3ab05f['shift']());}catch(_0x36ad49){_0x3ab05f['push'](_0x3ab05f['shift']());}}}(a247_0x36cd,0xa1e87));function a247_0x36cd(){const _0x3ff665=['search','../errors/salesforce.error','Log__c','./salesforce-auth.service','[message]\x20%s','typedi','logger','1170952azWBcQ','setLoggerId','11006550HgwIwq','name','getLoggerId','default','splice','toString','1012045JZFgGp','map','2693980OGtMIU','loggerId','apply','./salesforce-rest.service','/flosum_git','IGNORE_FLOSUM_GIT_NAMESPACE','removeLogger','getPrefix','request','8140376nbqetz','createSalesforceRequest','SalesforceLogger2','../../../../constants','33nmEbpz','2013382GMurvg','services/apexrest','delete','SalesforceError','constructor','2fQacHl','80796awSYHq','length','__importDefault','(((.+)+)+)+$','get','defineProperty','FLOSUM_GIT_NAMESPACE','SalesforceAuthService','__esModule','6WFlLCT','prefix','messages','createLogger'];a247_0x36cd=function(){return _0x3ff665;};return a247_0x36cd();}const a247_0x42aa6d=(function(){let _0x1ee58b=!![];return function(_0x525ca8,_0x5b7a7c){const _0x38c28e=_0x1ee58b?function(){const _0x36b3a2=a247_0x211c;if(_0x5b7a7c){const _0x537830=_0x5b7a7c[_0x36b3a2(0x201)](_0x525ca8,arguments);return _0x5b7a7c=null,_0x537830;}}:function(){};return _0x1ee58b=![],_0x38c28e;};}()),a247_0x225246=a247_0x42aa6d(this,function(){const _0x18cd08=a247_0x211c;return a247_0x225246['toString']()[_0x18cd08(0x1ee)](_0x18cd08(0x216))[_0x18cd08(0x1fc)]()[_0x18cd08(0x211)](a247_0x225246)['search']('(((.+)+)+)+$');});a247_0x225246();'use strict';var __importDefault=this&&this[a247_0x1b601f(0x215)]||function(_0x2cd105){const _0x52e320=a247_0x1b601f;return _0x2cd105&&_0x2cd105[_0x52e320(0x1e9)]?_0x2cd105:{'default':_0x2cd105};};Object[a247_0x1b601f(0x1e6)](exports,a247_0x1b601f(0x1e9),{'value':!![]}),exports[a247_0x1b601f(0x20a)]=void 0x0;const typedi_1=__importDefault(require(a247_0x1b601f(0x1f3))),constants_1=require(a247_0x1b601f(0x20b)),core_1=require('../../../../core'),salesforce_error_1=require(a247_0x1b601f(0x1ef)),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a247_0x1b601f(0x1f1)),salesforce_rest_service_1=require(a247_0x1b601f(0x202));class SalesforceLogger2{constructor(_0x30f0c6,_0x1b1269){const _0x57a00f=a247_0x1b601f;this[_0x57a00f(0x200)]=_0x30f0c6,this[_0x57a00f(0x1eb)]=_0x1b1269,this[_0x57a00f(0x207)]=(0x0,create_request_util_1[_0x57a00f(0x209)])(typedi_1[_0x57a00f(0x1fa)][_0x57a00f(0x217)](salesforce_auth_service_1[_0x57a00f(0x1e8)])),this[_0x57a00f(0x1f4)]=new core_1['Logger'](SalesforceLogger2[_0x57a00f(0x1f8)]),this[_0x57a00f(0x1ec)]=[];}[a247_0x1b601f(0x1f6)](_0x3a1db0){const _0x22f51e=a247_0x1b601f;this[_0x22f51e(0x200)]=_0x3a1db0;}[a247_0x1b601f(0x1f9)](){return this['loggerId']||'';}[a247_0x1b601f(0x206)](){const _0x418a0b=a247_0x1b601f;return this[_0x418a0b(0x1eb)]||'';}async['send'](){const _0x1b3b1d=a247_0x1b601f;try{if(!this[_0x1b3b1d(0x200)])return;const _0x4db3c5=this['messages'][_0x1b3b1d(0x1fb)](0x0)[_0x1b3b1d(0x1fe)](_0x5c5553=>''+(this[_0x1b3b1d(0x1eb)]||'')+_0x5c5553);this[_0x1b3b1d(0x200)]&&_0x4db3c5[_0x1b3b1d(0x214)]&&await this[_0x1b3b1d(0x207)]['post'](_0x1b3b1d(0x20e)+(constants_1[_0x1b3b1d(0x204)]?'':_0x1b3b1d(0x203))+'/logger',{'messages':_0x4db3c5,'loggerId':this[_0x1b3b1d(0x200)]});}catch(_0x12d415){throw new salesforce_error_1[(_0x1b3b1d(0x210))](_0x12d415);}}['log'](_0x2d4e52){const _0x12dbe9=a247_0x1b601f;return this[_0x12dbe9(0x1f4)]['log'](_0x12dbe9(0x1f2),_0x2d4e52),this[_0x12dbe9(0x1ec)]['push'](_0x2d4e52),this;}static async[a247_0x1b601f(0x1ed)](){const _0x3da534=a247_0x1b601f;try{const _0x300b29=typedi_1['default'][_0x3da534(0x217)](salesforce_rest_service_1['SalesforceRestService']),_0x301fa=await _0x300b29['post'](constants_1[_0x3da534(0x1e7)]+_0x3da534(0x1f0),{});return new SalesforceLogger2(_0x301fa);}catch(_0x3073ed){throw new salesforce_error_1[(_0x3da534(0x210))](_0x3073ed);}}async[a247_0x1b601f(0x205)](){const _0x417f57=a247_0x1b601f;try{if(!this['loggerId'])return;const _0x2804e8=typedi_1[_0x417f57(0x1fa)]['get'](salesforce_rest_service_1['SalesforceRestService']);await _0x2804e8[_0x417f57(0x20f)](constants_1[_0x417f57(0x1e7)]+_0x417f57(0x1f0),this['loggerId']),this[_0x417f57(0x200)]='',this['messages']=[];}catch(_0x320189){throw new salesforce_error_1[(_0x417f57(0x210))](_0x320189);}}}function a247_0x211c(_0x50e9ab,_0x280cfc){const _0x4e61fa=a247_0x36cd();return a247_0x211c=function(_0x225246,_0x42aa6d){_0x225246=_0x225246-0x1e6;let _0x36cdc5=_0x4e61fa[_0x225246];return _0x36cdc5;},a247_0x211c(_0x50e9ab,_0x280cfc);}exports[a247_0x1b601f(0x20a)]=SalesforceLogger2;