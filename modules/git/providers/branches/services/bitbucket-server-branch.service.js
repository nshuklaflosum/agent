const a136_0x378303=a136_0x3f01;(function(_0x184ca7,_0x934393){const _0x3166ec=a136_0x3f01,_0x28db50=_0x184ca7();while(!![]){try{const _0x423c5e=-parseInt(_0x3166ec(0x8a))/0x1*(-parseInt(_0x3166ec(0x8f))/0x2)+parseInt(_0x3166ec(0x91))/0x3+parseInt(_0x3166ec(0x89))/0x4*(parseInt(_0x3166ec(0x97))/0x5)+-parseInt(_0x3166ec(0x96))/0x6*(-parseInt(_0x3166ec(0x95))/0x7)+parseInt(_0x3166ec(0x88))/0x8+parseInt(_0x3166ec(0x9a))/0x9*(parseInt(_0x3166ec(0x9c))/0xa)+-parseInt(_0x3166ec(0xa2))/0xb;if(_0x423c5e===_0x934393)break;else _0x28db50['push'](_0x28db50['shift']());}catch(_0x692068){_0x28db50['push'](_0x28db50['shift']());}}}(a136_0x480e,0x25c11));const a136_0x2feb5d=(function(){let _0x2fc525=!![];return function(_0x570705,_0x3db3c5){const _0x366d79=_0x2fc525?function(){const _0xe2035b=a136_0x3f01;if(_0x3db3c5){const _0x3c53d3=_0x3db3c5[_0xe2035b(0x92)](_0x570705,arguments);return _0x3db3c5=null,_0x3c53d3;}}:function(){};return _0x2fc525=![],_0x366d79;};}()),a136_0x360ba2=a136_0x2feb5d(this,function(){const _0x3c55a8=a136_0x3f01;return a136_0x360ba2[_0x3c55a8(0x99)]()[_0x3c55a8(0x8b)](_0x3c55a8(0x90))[_0x3c55a8(0x99)]()[_0x3c55a8(0xa3)](a136_0x360ba2)[_0x3c55a8(0x8b)](_0x3c55a8(0x90));});a136_0x360ba2();'use strict';function a136_0x480e(){const _0xa01f47=['../../../../../core/errors/bad-request.error','refs/heads/','/branch-utils/','268ryEQIL','(((.+)+)+)+$','123021cmUGJA','apply','repository','/branches','1414axcGEX','3582CrsNpG','625bCsqLh','/api/','toString','171SwdydV','./git-branch.service','112390WsrWhZ','createRequest','__esModule','delete','BitbucketServerBranchService','api','8082074DMJJgy','constructor','apiUrl','GitBranchService','1144240CnhSXp','9340JzxIzN','592ONOKnf','search'];a136_0x480e=function(){return _0xa01f47;};return a136_0x480e();}Object['defineProperty'](exports,a136_0x378303(0x9e),{'value':!![]}),exports[a136_0x378303(0xa0)]=void 0x0;const bad_request_error_1=require(a136_0x378303(0x8c)),git_branch_service_1=require(a136_0x378303(0x9b));class BitbucketServerBranchService extends git_branch_service_1[a136_0x378303(0x87)]{constructor(_0x16ef47,_0x1d49a1,_0x4ae638){const _0x3c4f3d=a136_0x378303;super(_0x16ef47,_0x4ae638),this[_0x3c4f3d(0xa1)]=_0x1d49a1,this['request']=this[_0x3c4f3d(0x9d)]();}[a136_0x378303(0x9d)](){const _0x2e91b7=a136_0x378303;return this[_0x2e91b7(0xa1)][_0x2e91b7(0x9d)](this[_0x2e91b7(0x93)][_0x2e91b7(0xa4)]);}async[a136_0x378303(0x9f)](_0x269de6){const _0xdad1d5=a136_0x378303;try{await this['getOne'](_0x269de6);const _0x59fb94=this[_0xdad1d5(0x93)]['apiUrl']['replace'](_0xdad1d5(0x98),_0xdad1d5(0x8e));await this['request'][_0xdad1d5(0x9f)](_0x59fb94+_0xdad1d5(0x94),{'data':{'name':_0xdad1d5(0x8d)+_0x269de6,'dryRun':![]}});}catch(_0xc92674){throw new bad_request_error_1['BadRequestError'](_0xc92674);}}}function a136_0x3f01(_0x4ee643,_0x5ec7b3){const _0x1c48b6=a136_0x480e();return a136_0x3f01=function(_0x360ba2,_0x2feb5d){_0x360ba2=_0x360ba2-0x87;let _0x480e09=_0x1c48b6[_0x360ba2];return _0x480e09;},a136_0x3f01(_0x4ee643,_0x5ec7b3);}exports[a136_0x378303(0xa0)]=BitbucketServerBranchService;