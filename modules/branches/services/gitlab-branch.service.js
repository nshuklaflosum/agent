const a57_0x502072=a57_0x128a;function a57_0x128a(_0x4d4315,_0x21a4ab){const _0x869c2a=a57_0x1d6f();return a57_0x128a=function(_0x2b74db,_0x25d481){_0x2b74db=_0x2b74db-0x127;let _0x1d6fb5=_0x869c2a[_0x2b74db];return _0x1d6fb5;},a57_0x128a(_0x4d4315,_0x21a4ab);}(function(_0x414cbb,_0x4461dd){const _0x4228af=a57_0x128a,_0x3955b6=_0x414cbb();while(!![]){try{const _0x2809ad=parseInt(_0x4228af(0x131))/0x1*(parseInt(_0x4228af(0x13f))/0x2)+-parseInt(_0x4228af(0x13e))/0x3*(-parseInt(_0x4228af(0x12a))/0x4)+parseInt(_0x4228af(0x145))/0x5+parseInt(_0x4228af(0x13d))/0x6*(parseInt(_0x4228af(0x13b))/0x7)+parseInt(_0x4228af(0x13a))/0x8*(-parseInt(_0x4228af(0x141))/0x9)+-parseInt(_0x4228af(0x146))/0xa*(parseInt(_0x4228af(0x127))/0xb)+-parseInt(_0x4228af(0x138))/0xc;if(_0x2809ad===_0x4461dd)break;else _0x3955b6['push'](_0x3955b6['shift']());}catch(_0x23be89){_0x3955b6['push'](_0x3955b6['shift']());}}}(a57_0x1d6f,0xe2f37));const a57_0x25d481=(function(){let _0x30307d=!![];return function(_0x505c84,_0x2e30de){const _0x2eac68=_0x30307d?function(){const _0xc87521=a57_0x128a;if(_0x2e30de){const _0x50b704=_0x2e30de[_0xc87521(0x137)](_0x505c84,arguments);return _0x2e30de=null,_0x50b704;}}:function(){};return _0x30307d=![],_0x2eac68;};}()),a57_0x2b74db=a57_0x25d481(this,function(){const _0x10df5b=a57_0x128a;return a57_0x2b74db[_0x10df5b(0x144)]()['search'](_0x10df5b(0x13c))[_0x10df5b(0x144)]()[_0x10df5b(0x12d)](a57_0x2b74db)[_0x10df5b(0x129)](_0x10df5b(0x13c));});a57_0x2b74db();'use strict';var __importDefault=this&&this[a57_0x502072(0x12c)]||function(_0x49e955){const _0x5008ea=a57_0x502072;return _0x49e955&&_0x49e955[_0x5008ea(0x132)]?_0x49e955:{'default':_0x49e955};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a57_0x502072(0x140)]=void 0x0;function a57_0x1d6f(){const _0x1fd543=['4Ktgorz','GitlabBranchService','8730nsBQQR','BadRequestError','request','toString','5704110DNcyQA','29410pUIfOi','2959ZTylbQ','../../../core/errors/bad-request.error','search','4JsmlKo','repository/branches/','__importDefault','constructor','get','createRequest','GitlabApiService','315506MLlkMl','__esModule','default','./git-branch.service','../../git-api/services/gitlab-api.service','typedi','apply','19898268bmaTXk','delete','5864lSDyhk','10199336ThJRxu','(((.+)+)+)+$','6KjXRDP','2583111SORkIC'];a57_0x1d6f=function(){return _0x1fd543;};return a57_0x1d6f();}const bad_request_error_1=require(a57_0x502072(0x128)),gitlab_api_service_1=require(a57_0x502072(0x135)),typedi_1=__importDefault(require(a57_0x502072(0x136))),git_branch_service_1=require(a57_0x502072(0x134));class GitlabBranchService extends git_branch_service_1['GitBranchService']{constructor(_0xf3cb5d){const _0x48fe5c=a57_0x502072;super(_0xf3cb5d),this[_0x48fe5c(0x143)]=this['createRequest']();}[a57_0x502072(0x12f)](){const _0x526d8f=a57_0x502072,_0x3adeea=typedi_1[_0x526d8f(0x133)][_0x526d8f(0x12e)](gitlab_api_service_1[_0x526d8f(0x130)]);return _0x3adeea[_0x526d8f(0x12f)](this['repository']['apiUrl']);}async['delete'](_0x21502e){const _0x295fc3=a57_0x502072;try{await this[_0x295fc3(0x143)][_0x295fc3(0x139)](_0x295fc3(0x12b)+_0x21502e);}catch(_0x3daa3e){throw new bad_request_error_1[(_0x295fc3(0x142))](_0x3daa3e);}}}exports[a57_0x502072(0x140)]=GitlabBranchService;