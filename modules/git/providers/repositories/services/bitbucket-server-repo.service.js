const a206_0x474d79=a206_0x4f87;(function(_0x387371,_0x30e253){const _0x2fd1da=a206_0x4f87,_0xa025d7=_0x387371();while(!![]){try{const _0x3450d0=-parseInt(_0x2fd1da(0x1ba))/0x1*(parseInt(_0x2fd1da(0x1a7))/0x2)+-parseInt(_0x2fd1da(0x1d0))/0x3*(parseInt(_0x2fd1da(0x1b6))/0x4)+-parseInt(_0x2fd1da(0x1d8))/0x5+parseInt(_0x2fd1da(0x1b9))/0x6+parseInt(_0x2fd1da(0x1c9))/0x7*(-parseInt(_0x2fd1da(0x1bb))/0x8)+parseInt(_0x2fd1da(0x1c1))/0x9*(parseInt(_0x2fd1da(0x1d7))/0xa)+parseInt(_0x2fd1da(0x1b4))/0xb;if(_0x3450d0===_0x30e253)break;else _0xa025d7['push'](_0xa025d7['shift']());}catch(_0x1a4d4b){_0xa025d7['push'](_0xa025d7['shift']());}}}(a206_0x38c0,0x81a75));const a206_0x2f65bc=(function(){let _0x5f036a=!![];return function(_0x5cefa7,_0x36bbc9){const _0x399726=_0x5f036a?function(){const _0x5cd82=a206_0x4f87;if(_0x36bbc9){const _0x53c248=_0x36bbc9[_0x5cd82(0x197)](_0x5cefa7,arguments);return _0x36bbc9=null,_0x53c248;}}:function(){};return _0x5f036a=![],_0x399726;};}()),a206_0x32002c=a206_0x2f65bc(this,function(){const _0x55481d=a206_0x4f87;return a206_0x32002c[_0x55481d(0x1d4)]()[_0x55481d(0x1c0)](_0x55481d(0x1c3))[_0x55481d(0x1d4)]()[_0x55481d(0x1ca)](a206_0x32002c)[_0x55481d(0x1c0)](_0x55481d(0x1c3));});function a206_0x4f87(_0x4e49a0,_0x3c2eec){const _0x585238=a206_0x38c0();return a206_0x4f87=function(_0x32002c,_0x2f65bc){_0x32002c=_0x32002c-0x18d;let _0x38c0b3=_0x585238[_0x32002c];return _0x38c0b3;},a206_0x4f87(_0x4e49a0,_0x3c2eec);}a206_0x32002c();'use strict';var __decorate=this&&this[a206_0x474d79(0x1a2)]||function(_0x3bb6ec,_0x36cb0c,_0x2cb97e,_0xbcc9d6){const _0x5cc92c=a206_0x474d79;var _0x24dd12=arguments[_0x5cc92c(0x1a1)],_0x5c2187=_0x24dd12<0x3?_0x36cb0c:_0xbcc9d6===null?_0xbcc9d6=Object[_0x5cc92c(0x1a8)](_0x36cb0c,_0x2cb97e):_0xbcc9d6,_0x29f291;if(typeof Reflect==='object'&&typeof Reflect[_0x5cc92c(0x18d)]==='function')_0x5c2187=Reflect['decorate'](_0x3bb6ec,_0x36cb0c,_0x2cb97e,_0xbcc9d6);else{for(var _0x467c6e=_0x3bb6ec['length']-0x1;_0x467c6e>=0x0;_0x467c6e--)if(_0x29f291=_0x3bb6ec[_0x467c6e])_0x5c2187=(_0x24dd12<0x3?_0x29f291(_0x5c2187):_0x24dd12>0x3?_0x29f291(_0x36cb0c,_0x2cb97e,_0x5c2187):_0x29f291(_0x36cb0c,_0x2cb97e))||_0x5c2187;}return _0x24dd12>0x3&&_0x5c2187&&Object['defineProperty'](_0x36cb0c,_0x2cb97e,_0x5c2187),_0x5c2187;},__metadata=this&&this['__metadata']||function(_0x439f66,_0x27a562){const _0x5bf572=a206_0x474d79;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x5bf572(0x198))return Reflect[_0x5bf572(0x1aa)](_0x439f66,_0x27a562);},__param=this&&this[a206_0x474d79(0x1bf)]||function(_0x3cffe0,_0x411afb){return function(_0x5d41bc,_0x2c2f2){_0x411afb(_0x5d41bc,_0x2c2f2,_0x3cffe0);};};Object['defineProperty'](exports,a206_0x474d79(0x1a6),{'value':!![]}),exports['BitbucketServerRepoService']=void 0x0;const bad_request_error_1=require(a206_0x474d79(0x19a)),not_found_error_1=require(a206_0x474d79(0x1d5)),typedi_1=require(a206_0x474d79(0x1c7)),api_error_1=require(a206_0x474d79(0x1a9)),bitbucket_server_api_service_1=require(a206_0x474d79(0x1a4)),git_internal_1=require('../../../internal/git.internal'),utils_1=require('../../../../shared/utils'),repo_class_1=require(a206_0x474d79(0x1ac)),git_repo_service_1=require(a206_0x474d79(0x191)),providers_tokens_1=require('../../providers.tokens'),bitbucket_server_credentials_dto_1=require('../../credentials/dto/bitbucket-server-credentials.dto');let BitbucketServerRepoService=class BitbucketServerRepoService extends git_repo_service_1[a206_0x474d79(0x1d9)]{constructor(_0x154e01,_0x369a21){const _0x3d83b9=a206_0x474d79;super(_0x154e01),this[_0x3d83b9(0x1cf)]=_0x154e01,this[_0x3d83b9(0x19c)]=_0x369a21[_0x3d83b9(0x19c)],this[_0x3d83b9(0x1cd)]=_0x369a21;}async['create'](_0x985ecc){const _0x2a460c=a206_0x474d79;try{const _0x4d71fe={'name':_0x985ecc[_0x2a460c(0x1a0)],'scmId':_0x2a460c(0x193),'defaultBranch':_0x985ecc[_0x2a460c(0x18e)],..._0x985ecc[_0x2a460c(0x1d6)]||{}},_0x475077=await this[_0x2a460c(0x199)]['post'](_0x2a460c(0x1b5)+this[_0x2a460c(0x19c)]+'/repos',_0x4d71fe),_0x31ab53=repo_class_1[_0x2a460c(0x1d2)][_0x2a460c(0x1af)](_0x475077,'',this[_0x2a460c(0x1cf)],this[_0x2a460c(0x1cd)]);return _0x985ecc[_0x2a460c(0x1b0)]&&await git_internal_1[_0x2a460c(0x1ad)][_0x2a460c(0x190)](_0x31ab53,_0x985ecc['defaultBranch']||_0x2a460c(0x194),'',this[_0x2a460c(0x1cd)]),this['getOne'](_0x31ab53[_0x2a460c(0x1a0)]);}catch(_0x2da101){if(_0x2da101 instanceof api_error_1[_0x2a460c(0x1be)])throw _0x2da101;throw new bad_request_error_1[(_0x2a460c(0x1cb))](_0x2da101);}}async[a206_0x474d79(0x19b)](){const _0x6112b=a206_0x474d79;try{const _0x5b87bd=[];let _0x21917f;do{_0x21917f=await this[_0x6112b(0x199)][_0x6112b(0x195)](_0x6112b(0x1b5)+this[_0x6112b(0x19c)]+_0x6112b(0x1bc),{'params':{'limit':0x64,'start':_0x21917f?_0x21917f[_0x6112b(0x1c8)]:0x0}}),_0x5b87bd[_0x6112b(0x1b1)](..._0x21917f[_0x6112b(0x1b7)]);}while(!_0x21917f[_0x6112b(0x1a5)]);return _0x5b87bd[_0x6112b(0x192)](_0x197ae5=>repo_class_1[_0x6112b(0x1d2)][_0x6112b(0x1af)](_0x197ae5,(0x0,utils_1[_0x6112b(0x19f)])(this[_0x6112b(0x199)][_0x6112b(0x1c2)][_0x6112b(0x1ae)]||'',_0x6112b(0x196)+this[_0x6112b(0x19c)]+'/repos/'+_0x197ae5[_0x6112b(0x1b2)]),this[_0x6112b(0x1cf)],this[_0x6112b(0x1cd)]));}catch(_0x45e7d6){if(_0x45e7d6 instanceof api_error_1[_0x6112b(0x1be)])throw _0x45e7d6;throw new not_found_error_1[(_0x6112b(0x1ab))](_0x45e7d6);}}async[a206_0x474d79(0x1d1)](_0x37b09b){const _0x5c824c=a206_0x474d79;var _0x39f3b7;try{const _0xdc4592=await this[_0x5c824c(0x199)][_0x5c824c(0x195)](_0x5c824c(0x1b5)+this['project']+'/repos/'+_0x37b09b),_0x2636ba=repo_class_1[_0x5c824c(0x1d2)]['fromBitbucketServer'](_0xdc4592,(0x0,utils_1[_0x5c824c(0x19f)])(this[_0x5c824c(0x199)][_0x5c824c(0x1c2)][_0x5c824c(0x1ae)]||'','/projects/'+this['project']+_0x5c824c(0x19d)+_0x37b09b),this['api'],this[_0x5c824c(0x1cd)]),_0x2d8052=await this[_0x5c824c(0x199)][_0x5c824c(0x195)](_0x2636ba['apiUrl']+_0x5c824c(0x1b8))[_0x5c824c(0x1a3)](_0x223d5d=>_0x223d5d[_0x5c824c(0x1b7)]);return _0x2636ba[_0x5c824c(0x18e)]=(_0x39f3b7=_0x2d8052[_0x5c824c(0x1cc)](_0x1e0bbb=>_0x1e0bbb[_0x5c824c(0x1c6)]===!![]))===null||_0x39f3b7===void 0x0?void 0x0:_0x39f3b7['displayId'],_0x2636ba;}catch(_0x4a6b68){if(_0x4a6b68 instanceof api_error_1[_0x5c824c(0x1be)])throw _0x4a6b68;throw new not_found_error_1[(_0x5c824c(0x1ab))](_0x4a6b68);}}async[a206_0x474d79(0x1c4)](_0x105560,_0x1e6918){const _0x59163e=a206_0x474d79;try{const _0x36e37b=await this[_0x59163e(0x199)][_0x59163e(0x19e)](_0x59163e(0x1b5)+this[_0x59163e(0x19c)]+_0x59163e(0x19d)+_0x105560,_0x1e6918),_0x54f6af=await this[_0x59163e(0x199)][_0x59163e(0x195)](_0x59163e(0x1b5)+this[_0x59163e(0x19c)]+_0x59163e(0x19d)+_0x105560+'/default-branch'),_0x23c82f=repo_class_1[_0x59163e(0x1d2)][_0x59163e(0x1af)](_0x36e37b,(0x0,utils_1['joinURL'])(this[_0x59163e(0x199)][_0x59163e(0x1c2)][_0x59163e(0x1ae)]||'',_0x59163e(0x196)+this[_0x59163e(0x19c)]+'/repos/'+_0x105560),this[_0x59163e(0x1cf)],this['credentials']);return _0x23c82f[_0x59163e(0x18e)]=_0x54f6af['displayId'],_0x23c82f;}catch(_0x40fc39){if(_0x40fc39 instanceof api_error_1['ApiError'])throw _0x40fc39;throw new not_found_error_1[(_0x59163e(0x1ab))](_0x40fc39);}}async[a206_0x474d79(0x1d3)](_0x2ff465){const _0x1cb796=a206_0x474d79;try{await this[_0x1cb796(0x1d1)](_0x2ff465),await this[_0x1cb796(0x199)][_0x1cb796(0x1d3)](_0x1cb796(0x1b5)+this[_0x1cb796(0x19c)]+'/repos/'+_0x2ff465);}catch(_0x5d9731){if(_0x5d9731 instanceof api_error_1[_0x1cb796(0x1be)])throw _0x5d9731;throw new bad_request_error_1[(_0x1cb796(0x1cb))](_0x5d9731);}}};BitbucketServerRepoService=__decorate([(0x0,typedi_1[a206_0x474d79(0x1bd)])(),__param(0x1,(0x0,typedi_1[a206_0x474d79(0x1c5)])(providers_tokens_1['Tokens'][a206_0x474d79(0x1cd)])),__metadata(a206_0x474d79(0x18f),[bitbucket_server_api_service_1[a206_0x474d79(0x1ce)],bitbucket_server_credentials_dto_1[a206_0x474d79(0x1b3)]])],BitbucketServerRepoService),exports['BitbucketServerRepoService']=BitbucketServerRepoService;function a206_0x38c0(){const _0x12eefd=['typedi','nextPageStart','1434895DFmbul','constructor','BadRequestError','find','credentials','BitbucketServerApiService','api','63EXDIzy','getOne','Repo','delete','toString','../../../../../core/errors/not-found.error','apiBody','2573110mbLpRs','2706830mtebTK','GitRepoService','decorate','defaultBranch','design:paramtypes','createEmptyBranch','./git-repo.service','map','git','master','get','/projects/','apply','function','request','../../../../../core/errors/bad-request.error','getAll','project','/repos/','put','joinURL','name','length','__decorate','then','../../api/bitbucket-server-api.service','isLastPage','__esModule','258982Arrfue','getOwnPropertyDescriptor','../../../../../core/errors/api.error','metadata','NotFoundError','../repo.class','Git','baseURL','fromBitbucketServer','autoInit','push','slug','BitbucketServerCredentialsDto','15315652uHjCPu','projects/','183444swQpcQ','values','/branches','1234314CTWDPy','1gMiXGv','8HeMdKI','/repos','Service','ApiError','__param','search','27fbeJwm','defaults','(((.+)+)+)+$','update','Inject','isDefault'];a206_0x38c0=function(){return _0x12eefd;};return a206_0x38c0();}