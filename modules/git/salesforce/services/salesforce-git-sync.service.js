const a197_0x485f94=a197_0x5576;(function(_0x40bc9f,_0x2ea67f){const _0x5213cf=a197_0x5576,_0x96c223=_0x40bc9f();while(!![]){try{const _0x43233c=parseInt(_0x5213cf(0x1c2))/0x1+parseInt(_0x5213cf(0x1ad))/0x2+-parseInt(_0x5213cf(0x1c4))/0x3+parseInt(_0x5213cf(0x1d8))/0x4*(-parseInt(_0x5213cf(0x1d6))/0x5)+-parseInt(_0x5213cf(0x1cd))/0x6+parseInt(_0x5213cf(0x1b4))/0x7*(-parseInt(_0x5213cf(0x1a9))/0x8)+-parseInt(_0x5213cf(0x1af))/0x9*(-parseInt(_0x5213cf(0x1a3))/0xa);if(_0x43233c===_0x2ea67f)break;else _0x96c223['push'](_0x96c223['shift']());}catch(_0x152c10){_0x96c223['push'](_0x96c223['shift']());}}}(a197_0x56a6,0xdeeb8));const a197_0x5c1f70=(function(){let _0x490885=!![];return function(_0x9d44b1,_0x69e41a){const _0x5d7daa=_0x490885?function(){const _0x22089e=a197_0x5576;if(_0x69e41a){const _0x529603=_0x69e41a[_0x22089e(0x1bd)](_0x9d44b1,arguments);return _0x69e41a=null,_0x529603;}}:function(){};return _0x490885=![],_0x5d7daa;};}()),a197_0x65edcc=a197_0x5c1f70(this,function(){const _0x485fc1=a197_0x5576;return a197_0x65edcc[_0x485fc1(0x1b5)]()['search']('(((.+)+)+)+$')['toString']()[_0x485fc1(0x1e0)](a197_0x65edcc)[_0x485fc1(0x1a8)](_0x485fc1(0x1db));});a197_0x65edcc();'use strict';var __decorate=this&&this[a197_0x485f94(0x1e4)]||function(_0x46885c,_0x4fade0,_0x18862f,_0xc58f95){const _0x1f89f6=a197_0x485f94;var _0x4079dd=arguments['length'],_0x24dffe=_0x4079dd<0x3?_0x4fade0:_0xc58f95===null?_0xc58f95=Object['getOwnPropertyDescriptor'](_0x4fade0,_0x18862f):_0xc58f95,_0x4dd0ee;if(typeof Reflect===_0x1f89f6(0x1d9)&&typeof Reflect[_0x1f89f6(0x1a6)]===_0x1f89f6(0x1bf))_0x24dffe=Reflect['decorate'](_0x46885c,_0x4fade0,_0x18862f,_0xc58f95);else{for(var _0x41e1d5=_0x46885c[_0x1f89f6(0x1b7)]-0x1;_0x41e1d5>=0x0;_0x41e1d5--)if(_0x4dd0ee=_0x46885c[_0x41e1d5])_0x24dffe=(_0x4079dd<0x3?_0x4dd0ee(_0x24dffe):_0x4079dd>0x3?_0x4dd0ee(_0x4fade0,_0x18862f,_0x24dffe):_0x4dd0ee(_0x4fade0,_0x18862f))||_0x24dffe;}return _0x4079dd>0x3&&_0x24dffe&&Object[_0x1f89f6(0x1dd)](_0x4fade0,_0x18862f,_0x24dffe),_0x24dffe;},__metadata=this&&this[a197_0x485f94(0x1d4)]||function(_0x4cfb61,_0x5f7a54){const _0x30dd3b=a197_0x485f94;if(typeof Reflect===_0x30dd3b(0x1d9)&&typeof Reflect[_0x30dd3b(0x1b1)]===_0x30dd3b(0x1bf))return Reflect[_0x30dd3b(0x1b1)](_0x4cfb61,_0x5f7a54);};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['SalesforceGitSyncService']=void 0x0;function a197_0x56a6(){const _0xcd45dc=['extractComponentMetadataFromRecord','fetchBranchComponents','18490gzSzlZ','File_Name__c','fetchRepositoryComponents','decorate','NotFoundError','search','101608XjcidG','%componentIds%','fetchBranchComponentsByFilenames','Branch\x20\x22','1578216kJlGUw','splice','15147QqSyOd','replace','metadata','extractFieldsFromRecord','Name','392EOjCxC','toString','join','length','restService','Completed','fetchCommitManifestsByComponentIds','queryService','Service','apply','%name%','function','Repository__c','getComponentRecordTypes','191015LMzJKN','Component_Type__c','4249770YHymbR','Repository\x20\x22','%branchId%','getBranchIdByName','SalesforceQueryService','substr','FLOSUM_COMMIT','map','MAX_QUERY_ARRAY_ITEMS','5909094BOATws','GET_BRANCH_BY_NAME_QUERY','query','FLOSUM_NAMESPACE','push','%fileNames%','Version__c','__metadata','Status__c','19475TBFeNy','GET_BRANCH_COMPONENTS_QUERY','68bcZusc','object','\x22\x20not\x20found\x20in\x20flosum.','(((.+)+)+)+$','GET_COMMIT_MANIFESTS_BY_COMPONENT_IDS','defineProperty','%repositoryId%','Component_Name__c','constructor','CRC32__c','createCommit','GET_REPOSITORY_COMPONENTS_QUERY','__decorate','../../../../core/errors/not-found.error','FLOSUM_GIT_NAMESPACE'];a197_0x56a6=function(){return _0xcd45dc;};return a197_0x56a6();}const not_found_error_1=require(a197_0x485f94(0x1e5)),typedi_1=require('typedi'),constants_1=require('../../../../constants'),queries_1=require('../queries'),flosum_naming_utils_1=require('../utils/flosum-naming.utils'),salesforce_query_service_1=require('./salesforce-query.service'),salesforce_rest_service_1=require('./salesforce-rest.service');let SalesforceGitSyncService=class SalesforceGitSyncService{constructor(_0x1eb0de,_0x379e2e){const _0x5836d6=a197_0x485f94;this[_0x5836d6(0x1bb)]=_0x1eb0de,this[_0x5836d6(0x1b8)]=_0x379e2e,this[_0x5836d6(0x1cc)]=0xc8;}['extractComponentMetadataFromRecord'](_0x10d55e){const _0x678db5=a197_0x485f94,_0x4937fe=(0x0,flosum_naming_utils_1[_0x678db5(0x1b2)])(_0x10d55e,[_0x678db5(0x1df),_0x678db5(0x1c3),_0x678db5(0x1e1),_0x678db5(0x1a4),'Version__c','Id']);return{'id':_0x4937fe['Id'],'name':_0x4937fe[_0x678db5(0x1df)],'type':_0x4937fe[_0x678db5(0x1c3)],'fileName':_0x4937fe[_0x678db5(0x1a4)],'crc32':_0x4937fe[_0x678db5(0x1e1)],'version':+_0x4937fe[_0x678db5(0x1d3)]};}async['getRepositoryIdByName'](_0x2e5f3b){const _0x13e3a2=a197_0x485f94,[_0x1036ba]=await this['queryService'][_0x13e3a2(0x1cf)](queries_1['GET_REPOSITORY_BY_NAME_QUERY'][_0x13e3a2(0x1b0)]('%name%',_0x2e5f3b));if(!_0x1036ba)throw new not_found_error_1['NotFoundError'](_0x13e3a2(0x1c5)+_0x2e5f3b+_0x13e3a2(0x1da));return _0x1036ba['Id'];}async[a197_0x485f94(0x1c7)](_0x127931){const _0x540eba=a197_0x485f94,[_0x3ebe64]=await this[_0x540eba(0x1bb)][_0x540eba(0x1cf)](queries_1[_0x540eba(0x1ce)][_0x540eba(0x1b0)](_0x540eba(0x1be),_0x127931));if(!_0x3ebe64)throw new not_found_error_1[(_0x540eba(0x1a7))](_0x540eba(0x1ac)+_0x127931+_0x540eba(0x1da));return _0x3ebe64['Id'];}async[a197_0x485f94(0x1c1)](){const _0x263a7e=a197_0x485f94,_0x8dd1a1=await this[_0x263a7e(0x1bb)][_0x263a7e(0x1cf)](queries_1['GET_COMPONENT_RECORD_TYPES_QUERY']);return _0x8dd1a1[_0x263a7e(0x1cb)](_0x33f629=>(0x0,flosum_naming_utils_1[_0x263a7e(0x1b2)])(_0x33f629,['Id',_0x263a7e(0x1b3)]))[_0x263a7e(0x1cb)](_0x244779=>({'id':_0x244779['Id'],'name':_0x244779[_0x263a7e(0x1b3)]}));}async['fetchRepositoryComponentsByFilenames'](_0x5c3e6e,_0x556285){const _0x3b1697=a197_0x485f94,_0x125149=[];while(_0x5c3e6e['length']){const _0x4e7dce=queries_1['GET_REPOSITORY_COMPONENTS_BY_FILENAMES_QUERY'][_0x3b1697(0x1b0)]('%fileNames%',_0x5c3e6e[_0x3b1697(0x1ae)](0x0,this[_0x3b1697(0x1cc)])[_0x3b1697(0x1cb)](_0x558909=>'\x27'+_0x558909+'\x27')[_0x3b1697(0x1b6)](','))['replace']('%repositoryId%',_0x556285),_0x1f8512=await this[_0x3b1697(0x1bb)]['query'](_0x4e7dce);_0x125149[_0x3b1697(0x1d1)](..._0x1f8512);}return _0x125149['map'](_0x404b67=>this['extractComponentMetadataFromRecord'](_0x404b67));}async[a197_0x485f94(0x1ab)](_0x1f20f8,_0x34d959){const _0xa2ed89=a197_0x485f94,_0x1ac954=[];while(_0x1f20f8['length']){const _0x146c8e=queries_1['GET_BRANCH_COMPONENTS_BY_FILENAMES_QUERY']['replace'](_0xa2ed89(0x1d2),_0x1f20f8[_0xa2ed89(0x1ae)](0x0,this[_0xa2ed89(0x1cc)])[_0xa2ed89(0x1cb)](_0x168023=>'\x27'+_0x168023+'\x27')[_0xa2ed89(0x1b6)](','))['replace'](_0xa2ed89(0x1c6),_0x34d959),_0x35cabc=await this[_0xa2ed89(0x1bb)][_0xa2ed89(0x1cf)](_0x146c8e);_0x1ac954[_0xa2ed89(0x1d1)](..._0x35cabc);}return _0x1ac954[_0xa2ed89(0x1cb)](_0x13afdd=>this[_0xa2ed89(0x1a1)](_0x13afdd));}async[a197_0x485f94(0x1a5)](_0x1fe760){const _0x3d795f=a197_0x485f94,_0x31c0de=queries_1[_0x3d795f(0x1e3)]['replace'](_0x3d795f(0x1de),_0x1fe760),_0x5d1e37=await this[_0x3d795f(0x1bb)][_0x3d795f(0x1cf)](_0x31c0de);return _0x5d1e37[_0x3d795f(0x1cb)](_0x191a79=>this[_0x3d795f(0x1a1)](_0x191a79));}async[a197_0x485f94(0x1a2)](_0x1a0e41){const _0x44ab42=a197_0x485f94,_0x55ded1=queries_1[_0x44ab42(0x1d7)][_0x44ab42(0x1b0)]('%branchId%',_0x1a0e41),_0x11288c=await this[_0x44ab42(0x1bb)][_0x44ab42(0x1cf)](_0x55ded1);return _0x11288c[_0x44ab42(0x1cb)](_0xb851d1=>this['extractComponentMetadataFromRecord'](_0xb851d1));}async[a197_0x485f94(0x1ba)](_0x199c85){const _0x1d20fe=a197_0x485f94,_0x2c46a6=[..._0x199c85],_0x478e39=[];while(_0x2c46a6[_0x1d20fe(0x1b7)]){const _0x5887c7=queries_1[_0x1d20fe(0x1dc)][_0x1d20fe(0x1b0)](_0x1d20fe(0x1aa),_0x2c46a6[_0x1d20fe(0x1ae)](0x0,this['MAX_QUERY_ARRAY_ITEMS'])['map'](_0x291647=>'\x27'+_0x291647+'\x27')[_0x1d20fe(0x1b6)](',')),_0x3957fd=await this[_0x1d20fe(0x1bb)][_0x1d20fe(0x1cf)](_0x5887c7);_0x478e39[_0x1d20fe(0x1d1)](..._0x3957fd[_0x1d20fe(0x1cb)](_0x410989=>_0x410989['Id']));}return _0x478e39;}async[a197_0x485f94(0x1e2)](_0x244817,_0x46a001){const _0x12b79e=a197_0x485f94;return this['restService']['post'](constants_1[_0x12b79e(0x1ca)],{[constants_1[_0x12b79e(0x1d0)]+_0x12b79e(0x1c0)]:_0x46a001,[constants_1[_0x12b79e(0x1d0)]+'Commit_Name__c']:_0x244817[_0x12b79e(0x1c9)](0x0,0xff),[constants_1[_0x12b79e(0x1d0)]+_0x12b79e(0x1d5)]:_0x12b79e(0x1b9),[constants_1[_0x12b79e(0x1e6)]+'Is_From_Agent__c']:!![]});}};function a197_0x5576(_0x32d6d2,_0x11f12f){const _0x3f3dd5=a197_0x56a6();return a197_0x5576=function(_0x65edcc,_0x5c1f70){_0x65edcc=_0x65edcc-0x1a1;let _0x56a6de=_0x3f3dd5[_0x65edcc];return _0x56a6de;},a197_0x5576(_0x32d6d2,_0x11f12f);}SalesforceGitSyncService=__decorate([(0x0,typedi_1[a197_0x485f94(0x1bc)])(),__metadata('design:paramtypes',[salesforce_query_service_1[a197_0x485f94(0x1c8)],salesforce_rest_service_1['SalesforceRestService']])],SalesforceGitSyncService),exports['SalesforceGitSyncService']=SalesforceGitSyncService;