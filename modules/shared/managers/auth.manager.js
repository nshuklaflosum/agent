const a282_0x3aec66=a282_0x37ba;function a282_0x37ba(_0x4fb997,_0x3835d8){const _0x23f429=a282_0x4df9();return a282_0x37ba=function(_0xc72416,_0x15af1b){_0xc72416=_0xc72416-0x1cb;let _0x4df914=_0x23f429[_0xc72416];return _0x4df914;},a282_0x37ba(_0x4fb997,_0x3835d8);}(function(_0xcd5c29,_0x50b696){const _0x2d54ce=a282_0x37ba,_0x22a157=_0xcd5c29();while(!![]){try{const _0x4f89cc=parseInt(_0x2d54ce(0x1d1))/0x1*(-parseInt(_0x2d54ce(0x1d6))/0x2)+-parseInt(_0x2d54ce(0x1cd))/0x3*(-parseInt(_0x2d54ce(0x1dc))/0x4)+parseInt(_0x2d54ce(0x1da))/0x5+-parseInt(_0x2d54ce(0x1cc))/0x6*(parseInt(_0x2d54ce(0x1d9))/0x7)+parseInt(_0x2d54ce(0x1d3))/0x8+parseInt(_0x2d54ce(0x1cf))/0x9*(-parseInt(_0x2d54ce(0x1de))/0xa)+parseInt(_0x2d54ce(0x1e5))/0xb*(parseInt(_0x2d54ce(0x1e4))/0xc);if(_0x4f89cc===_0x50b696)break;else _0x22a157['push'](_0x22a157['shift']());}catch(_0x2dbc6c){_0x22a157['push'](_0x22a157['shift']());}}}(a282_0x4df9,0x612bb));const a282_0x15af1b=(function(){let _0x464dc7=!![];return function(_0x2e43ae,_0x2342d3){const _0x138b3d=_0x464dc7?function(){if(_0x2342d3){const _0x1372a9=_0x2342d3['apply'](_0x2e43ae,arguments);return _0x2342d3=null,_0x1372a9;}}:function(){};return _0x464dc7=![],_0x138b3d;};}()),a282_0xc72416=a282_0x15af1b(this,function(){const _0x383336=a282_0x37ba;return a282_0xc72416[_0x383336(0x1ce)]()['search'](_0x383336(0x1d7))['toString']()[_0x383336(0x1db)](a282_0xc72416)['search'](_0x383336(0x1d7));});function a282_0x4df9(){const _0x192f5e=['12eJoRnH','2214949eGUcJa','default','_refreshToken','instanceUrl','324BBmLlq','6yLwNFj','toString','9LyCzjz','defineProperty','22uEEpOR','AuthorizationManager','3861064gQKxHn','/services/oauth2/token','_clientSecret','12790hIZklY','(((.+)+)+)+$','refreshToken','25186Ddoiti','21220ofrupc','constructor','1303192jaesLL','AuthManager','6068390OFrcZT','post','axios','access_token','__importDefault','_clientId'];a282_0x4df9=function(){return _0x192f5e;};return a282_0x4df9();}a282_0xc72416();'use strict';var __importDefault=this&&this[a282_0x3aec66(0x1e2)]||function(_0x5126b9){return _0x5126b9&&_0x5126b9['__esModule']?_0x5126b9:{'default':_0x5126b9};};Object[a282_0x3aec66(0x1d0)](exports,'__esModule',{'value':!![]}),exports[a282_0x3aec66(0x1dd)]=void 0x0;const axios_1=__importDefault(require(a282_0x3aec66(0x1e0))),salesforce_1=require('@flosum/salesforce');class AuthManager extends salesforce_1[a282_0x3aec66(0x1d2)]{constructor({accessToken:_0x472e28,refreshToken:_0x2b83fe,instanceUrl:_0x4a404a,clientId:_0x189606,clientSecret:_0xac8daf}){const _0x52dca9=a282_0x3aec66;super({'accessToken':_0x472e28,'instanceUrl':_0x4a404a}),this[_0x52dca9(0x1d5)]=_0xac8daf,this[_0x52dca9(0x1e3)]=_0x189606,this[_0x52dca9(0x1e7)]=_0x2b83fe;}async[a282_0x3aec66(0x1d8)](){const _0x1bf392=a282_0x3aec66,{data:_0x1a964b}=await axios_1[_0x1bf392(0x1e6)][_0x1bf392(0x1df)](this[_0x1bf392(0x1cb)]+_0x1bf392(0x1d4),null,{'params':{'grant_type':'refresh_token','refresh_token':this[_0x1bf392(0x1e7)],'client_id':this[_0x1bf392(0x1e3)],'client_secret':this['_clientSecret']}});return _0x1a964b[_0x1bf392(0x1e1)];}}exports[a282_0x3aec66(0x1dd)]=AuthManager;