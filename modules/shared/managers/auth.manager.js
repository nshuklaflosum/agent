const a297_0x11b46a=a297_0x3946;function a297_0x18c7(){const _0x592ec4=['461pqnKAA','77tjkyrd','@flosum/salesforce','toString','2468240tWnNab','27gpKXPG','2014drbAZo','36NXzOSd','10738hUAFZb','/services/oauth2/token','_clientId','refreshToken','search','refresh_token','_clientSecret','(((.+)+)+)+$','constructor','311516YKSBUZ','515130xOkhCI','3832nboaSi','873310GAXwRm','apply','__esModule','default','AuthManager','defineProperty','411276iIGyBb','post','access_token','_refreshToken'];a297_0x18c7=function(){return _0x592ec4;};return a297_0x18c7();}(function(_0x5e4b2f,_0x3e29ac){const _0x51ad28=a297_0x3946,_0x31336b=_0x5e4b2f();while(!![]){try{const _0x44ce99=-parseInt(_0x51ad28(0x81))/0x1*(-parseInt(_0x51ad28(0x87))/0x2)+-parseInt(_0x51ad28(0x86))/0x3*(parseInt(_0x51ad28(0x74))/0x4)+parseInt(_0x51ad28(0x85))/0x5+parseInt(_0x51ad28(0x75))/0x6+parseInt(_0x51ad28(0x89))/0x7*(parseInt(_0x51ad28(0x76))/0x8)+-parseInt(_0x51ad28(0x88))/0x9*(parseInt(_0x51ad28(0x77))/0xa)+parseInt(_0x51ad28(0x82))/0xb*(-parseInt(_0x51ad28(0x7d))/0xc);if(_0x44ce99===_0x3e29ac)break;else _0x31336b['push'](_0x31336b['shift']());}catch(_0x2e7340){_0x31336b['push'](_0x31336b['shift']());}}}(a297_0x18c7,0x773b2));const a297_0x564ae7=(function(){let _0x5440d6=!![];return function(_0x50201f,_0x3c0651){const _0x40331a=_0x5440d6?function(){const _0x4723cd=a297_0x3946;if(_0x3c0651){const _0x4c3a58=_0x3c0651[_0x4723cd(0x78)](_0x50201f,arguments);return _0x3c0651=null,_0x4c3a58;}}:function(){};return _0x5440d6=![],_0x40331a;};}()),a297_0x553f79=a297_0x564ae7(this,function(){const _0x1020b1=a297_0x3946;return a297_0x553f79[_0x1020b1(0x84)]()['search'](_0x1020b1(0x90))[_0x1020b1(0x84)]()[_0x1020b1(0x91)](a297_0x553f79)[_0x1020b1(0x8d)](_0x1020b1(0x90));});a297_0x553f79();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x53d040){const _0x300b87=a297_0x3946;return _0x53d040&&_0x53d040[_0x300b87(0x79)]?_0x53d040:{'default':_0x53d040};};function a297_0x3946(_0x30c78f,_0x5dc5c1){const _0x5042a4=a297_0x18c7();return a297_0x3946=function(_0x553f79,_0x564ae7){_0x553f79=_0x553f79-0x74;let _0x18c747=_0x5042a4[_0x553f79];return _0x18c747;},a297_0x3946(_0x30c78f,_0x5dc5c1);}Object[a297_0x11b46a(0x7c)](exports,'__esModule',{'value':!![]}),exports[a297_0x11b46a(0x7b)]=void 0x0;const axios_1=__importDefault(require('axios')),salesforce_1=require(a297_0x11b46a(0x83));class AuthManager extends salesforce_1['AuthorizationManager']{constructor({accessToken:_0x26d743,refreshToken:_0x34da70,instanceUrl:_0x4d04ca,clientId:_0x2b2246,clientSecret:_0x6150e3}){const _0x12a2b8=a297_0x11b46a;super({'accessToken':_0x26d743,'instanceUrl':_0x4d04ca}),this[_0x12a2b8(0x8f)]=_0x6150e3,this[_0x12a2b8(0x8b)]=_0x2b2246,this[_0x12a2b8(0x80)]=_0x34da70;}async[a297_0x11b46a(0x8c)](){const _0x58c7a7=a297_0x11b46a,{data:_0x3ab32b}=await axios_1[_0x58c7a7(0x7a)][_0x58c7a7(0x7e)](this['instanceUrl']+_0x58c7a7(0x8a),null,{'params':{'grant_type':_0x58c7a7(0x8e),'refresh_token':this[_0x58c7a7(0x80)],'client_id':this[_0x58c7a7(0x8b)],'client_secret':this[_0x58c7a7(0x8f)]}});return _0x3ab32b[_0x58c7a7(0x7f)];}}exports[a297_0x11b46a(0x7b)]=AuthManager;