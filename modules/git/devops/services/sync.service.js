const a111_0x457028=a111_0x23b8;(function(_0x1126f5,_0x47e9b4){const _0x423d40=a111_0x23b8,_0x1b0174=_0x1126f5();while(!![]){try{const _0x4b4280=parseInt(_0x423d40(0x140))/0x1+parseInt(_0x423d40(0x151))/0x2*(-parseInt(_0x423d40(0x125))/0x3)+-parseInt(_0x423d40(0x12d))/0x4*(parseInt(_0x423d40(0x133))/0x5)+parseInt(_0x423d40(0x103))/0x6*(-parseInt(_0x423d40(0x116))/0x7)+-parseInt(_0x423d40(0x10b))/0x8+parseInt(_0x423d40(0x105))/0x9+-parseInt(_0x423d40(0x15f))/0xa*(-parseInt(_0x423d40(0x107))/0xb);if(_0x4b4280===_0x47e9b4)break;else _0x1b0174['push'](_0x1b0174['shift']());}catch(_0x2dfa9a){_0x1b0174['push'](_0x1b0174['shift']());}}}(a111_0x21a4,0xbd8b1));const a111_0xeebd77=(function(){let _0x41a873=!![];return function(_0x271e89,_0x3f5d5a){const _0x40cdd9=_0x41a873?function(){const _0x439f91=a111_0x23b8;if(_0x3f5d5a){const _0x39aaea=_0x3f5d5a[_0x439f91(0x130)](_0x271e89,arguments);return _0x3f5d5a=null,_0x39aaea;}}:function(){};return _0x41a873=![],_0x40cdd9;};}()),a111_0x2d6a7e=a111_0xeebd77(this,function(){const _0x559b45=a111_0x23b8;return a111_0x2d6a7e[_0x559b45(0x159)]()[_0x559b45(0x114)](_0x559b45(0x16a))[_0x559b45(0x159)]()[_0x559b45(0x176)](a111_0x2d6a7e)['search'](_0x559b45(0x16a));});a111_0x2d6a7e();'use strict';function a111_0x23b8(_0x37913e,_0x1c967b){const _0x2faa19=a111_0x21a4();return a111_0x23b8=function(_0x2d6a7e,_0xeebd77){_0x2d6a7e=_0x2d6a7e-0x100;let _0x21a43=_0x2faa19[_0x2d6a7e];return _0x21a43;},a111_0x23b8(_0x37913e,_0x1c967b);}var __decorate=this&&this[a111_0x457028(0x11d)]||function(_0x15ee74,_0x14dec5,_0x2d977d,_0x517979){const _0x225b0b=a111_0x457028;var _0x46c64c=arguments['length'],_0x5329e4=_0x46c64c<0x3?_0x14dec5:_0x517979===null?_0x517979=Object[_0x225b0b(0x16c)](_0x14dec5,_0x2d977d):_0x517979,_0x556a7a;if(typeof Reflect==='object'&&typeof Reflect[_0x225b0b(0x160)]===_0x225b0b(0x10d))_0x5329e4=Reflect[_0x225b0b(0x160)](_0x15ee74,_0x14dec5,_0x2d977d,_0x517979);else{for(var _0x59a30d=_0x15ee74[_0x225b0b(0x10e)]-0x1;_0x59a30d>=0x0;_0x59a30d--)if(_0x556a7a=_0x15ee74[_0x59a30d])_0x5329e4=(_0x46c64c<0x3?_0x556a7a(_0x5329e4):_0x46c64c>0x3?_0x556a7a(_0x14dec5,_0x2d977d,_0x5329e4):_0x556a7a(_0x14dec5,_0x2d977d))||_0x5329e4;}return _0x46c64c>0x3&&_0x5329e4&&Object[_0x225b0b(0x155)](_0x14dec5,_0x2d977d,_0x5329e4),_0x5329e4;},__metadata=this&&this[a111_0x457028(0x17c)]||function(_0xb93042,_0x28b31c){const _0x710a33=a111_0x457028;if(typeof Reflect==='object'&&typeof Reflect[_0x710a33(0x121)]===_0x710a33(0x10d))return Reflect[_0x710a33(0x121)](_0xb93042,_0x28b31c);},SyncService_1;Object['defineProperty'](exports,a111_0x457028(0x161),{'value':!![]}),exports[a111_0x457028(0x16e)]=void 0x0;const constants_1=require(a111_0x457028(0x128)),core_1=require(a111_0x457028(0x169)),too_many_requests_error_1=require(a111_0x457028(0x124)),flosum_repository_sync_dto_1=require(a111_0x457028(0x17b)),salesforce_error_1=require(a111_0x457028(0x17d)),salesforce_sync_service_1=require(a111_0x457028(0x17f)),salesforce_service_1=require(a111_0x457028(0x177)),utils_1=require(a111_0x457028(0x13c)),typedi_1=require(a111_0x457028(0x17a)),hooks_utils_1=require(a111_0x457028(0x104)),git_branch_not_found_error_1=require(a111_0x457028(0x129)),flosum_sync_job_1=require('../jobs/flosum-sync.job'),git_sync_job_1=require('../jobs/git-sync.job'),providers_tokens_1=require(a111_0x457028(0x13e)),bad_request_error_1=require(a111_0x457028(0x11c));let SyncService=SyncService_1=class SyncService{constructor(_0x8600,_0x33076a){const _0x3559c1=a111_0x457028;this['salesforceService']=_0x8600,this['salesforceSync']=_0x33076a,this['logger']=new core_1['Logger'](SyncService_1[_0x3559c1(0x11e)]),this[_0x3559c1(0x106)]={},this[_0x3559c1(0x115)]=[];}async[a111_0x457028(0x15b)](_0x25b45b,_0x2c0bd3){const _0x2f06cf=a111_0x457028;if(_0x2c0bd3 instanceof git_branch_not_found_error_1[_0x2f06cf(0x132)]){await this[_0x2f06cf(0x15a)][_0x2f06cf(0x112)](_0x25b45b,_0x2f06cf(0x145));return;}if(_0x2c0bd3 instanceof too_many_requests_error_1[_0x2f06cf(0x134)]){await this['salesforceSync'][_0x2f06cf(0x112)](_0x25b45b,_0x2f06cf(0x162));throw _0x2c0bd3;}try{await this['sfLogger'][_0x2f06cf(0x12c)](this[_0x2f06cf(0x139)]+'\x20Stop\x20sync\x20job\x20for\x20\x27'+_0x25b45b['repositoryName']+_0x2f06cf(0x14b)+_0x25b45b[_0x2f06cf(0x10a)]+_0x2f06cf(0x15d)+_0x2c0bd3+'.')[_0x2f06cf(0x136)](),await this[_0x2f06cf(0x15a)][_0x2f06cf(0x126)](_0x25b45b,{}),await this[_0x2f06cf(0x15a)]['setStatus'](_0x25b45b,_0x2f06cf(0x13b));}catch(_0x14efb0){if(_0x14efb0 instanceof salesforce_error_1['SalesforceError'])throw _0x14efb0;}}async[a111_0x457028(0x109)](_0x1f305c){const _0x20a262=a111_0x457028;if(_0x1f305c[_0x20a262(0x147)]){const _0x4550b8=_0x1f305c['repositoryName'][_0x20a262(0x14a)](),_0x59e1dc=this[_0x20a262(0x106)][_0x4550b8];if(!_0x59e1dc)this[_0x20a262(0x106)][_0x4550b8]=_0x1f305c[_0x20a262(0x111)];else{if(_0x59e1dc&&_0x59e1dc!==_0x1f305c[_0x20a262(0x111)])return await this[_0x20a262(0x15b)](_0x1f305c,new Error(_0x20a262(0x119)+_0x1f305c[_0x20a262(0x111)]+'\x27\x20due\x20it\x20intersects\x20with\x20another\x20repository\x20by\x20repository\x20key\x20\x27'+_0x4550b8+_0x20a262(0x14e)+_0x59e1dc+'\x27')),!![];}}return![];}async[a111_0x457028(0x14c)](_0x5b79bf){const _0x320bea=a111_0x457028;if(!constants_1[_0x320bea(0x165)]['test'](_0x5b79bf[_0x320bea(0x111)]))return await this[_0x320bea(0x15b)](_0x5b79bf,new Error(_0x320bea(0x119)+_0x5b79bf['repositoryName']+_0x320bea(0x11f))),![];if(!constants_1['BRANCH_NAME_REGEXP'][_0x320bea(0x148)](_0x5b79bf[_0x320bea(0x10a)]))return await this[_0x320bea(0x15b)](_0x5b79bf,new Error('Unable\x20to\x20synchronize\x20branch\x20\x27'+_0x5b79bf[_0x320bea(0x10a)]+'\x27\x20in\x20repository\x20\x27'+_0x5b79bf['repositoryName']+_0x320bea(0x167))),![];return!![];}async[a111_0x457028(0x156)](_0x21069c,_0x4cf62c){const _0x4ac9ad=a111_0x457028;let _0x7e7895=this[_0x4ac9ad(0x115)][_0x4ac9ad(0x15c)](_0x249e96=>_0x21069c[_0x4ac9ad(0x111)]===_0x249e96[_0x4ac9ad(0x11e)]);!_0x7e7895&&(this['sfLogger']['log'](this[_0x4ac9ad(0x139)]+_0x4ac9ad(0x16f)+_0x21069c['repositoryName']+_0x4ac9ad(0x14d)),_0x7e7895=await this[_0x4ac9ad(0x122)][_0x4ac9ad(0x100)]({'name':_0x21069c['repositoryName'],'autoInit':!![],'defaultBranch':_0x21069c[_0x4ac9ad(0x10a)],'private':!![],'createHook':typedi_1[_0x4ac9ad(0x113)][_0x4ac9ad(0x120)](providers_tokens_1['Tokens']['config'])[_0x4ac9ad(0x127)]}));if(this[_0x4ac9ad(0x179)][_0x4ac9ad(0x127)]){const _0x183f39=await _0x7e7895['hooks']['getAll']();!_0x183f39[_0x4ac9ad(0x15c)](_0x2ca891=>_0x2ca891['url']===hooks_utils_1[_0x4ac9ad(0x16b)][_0x4ac9ad(0x10c)](this[_0x4ac9ad(0x179)][_0x4ac9ad(0x137)],this[_0x4ac9ad(0x179)][_0x4ac9ad(0x163)],_0x4cf62c))&&(this[_0x4ac9ad(0x146)][_0x4ac9ad(0x152)](this[_0x4ac9ad(0x139)]+_0x4ac9ad(0x16f)+_0x21069c[_0x4ac9ad(0x111)]+_0x4ac9ad(0x102)),await _0x7e7895[_0x4ac9ad(0x175)][_0x4ac9ad(0x100)](hooks_utils_1[_0x4ac9ad(0x16b)]['createHookPayload'](this['config']['gitProvider'],_0x7e7895['hooks'],this[_0x4ac9ad(0x179)][_0x4ac9ad(0x163)],_0x4cf62c)));}return this['repoList'][_0x4ac9ad(0x171)](_0x7e7895),_0x7e7895;}async[a111_0x457028(0x158)](){const _0x4c3935=a111_0x457028;this[_0x4c3935(0x12b)]=typedi_1[_0x4c3935(0x113)]['get'](providers_tokens_1[_0x4c3935(0x166)]['gitApiService']),this['repoService']=typedi_1[_0x4c3935(0x113)][_0x4c3935(0x120)](providers_tokens_1['Tokens'][_0x4c3935(0x108)]),this[_0x4c3935(0x179)]=typedi_1[_0x4c3935(0x113)][_0x4c3935(0x120)](providers_tokens_1[_0x4c3935(0x166)][_0x4c3935(0x179)]),this[_0x4c3935(0x146)]=typedi_1[_0x4c3935(0x113)][_0x4c3935(0x120)](providers_tokens_1[_0x4c3935(0x166)][_0x4c3935(0x10f)]),this['prefix']='['+SyncService_1[_0x4c3935(0x11e)]+_0x4c3935(0x12f)+this[_0x4c3935(0x179)][_0x4c3935(0x137)][_0x4c3935(0x12a)]()+']',this[_0x4c3935(0x149)][_0x4c3935(0x172)](this[_0x4c3935(0x146)][_0x4c3935(0x11a)]());try{this['sfLogger'][_0x4c3935(0x152)](this[_0x4c3935(0x139)]+'\x20Start\x20sync\x20job.'),await this['sfLogger'][_0x4c3935(0x152)](this[_0x4c3935(0x139)]+'\x20Getting\x20repository\x20records.')['send']();const _0x55d27c=await this[_0x4c3935(0x15a)][_0x4c3935(0x153)](typedi_1[_0x4c3935(0x113)][_0x4c3935(0x120)](providers_tokens_1[_0x4c3935(0x166)][_0x4c3935(0x13a)]));if(!_0x55d27c['length'])throw new bad_request_error_1[(_0x4c3935(0x168))](this[_0x4c3935(0x139)]+'\x20No\x20repositories\x20to\x20sync.');await this[_0x4c3935(0x146)][_0x4c3935(0x152)](this[_0x4c3935(0x139)]+'\x20Getting\x20branch\x20records.')['send']();const _0x1551ef=await this[_0x4c3935(0x15a)][_0x4c3935(0x131)](_0x55d27c[_0x4c3935(0x117)](_0x1cbb7d=>'\x27'+_0x1cbb7d[_0x4c3935(0x147)]+'\x27')['join'](','));await this[_0x4c3935(0x146)]['log'](this['prefix']+_0x4c3935(0x157))[_0x4c3935(0x136)](),this[_0x4c3935(0x115)]=await this[_0x4c3935(0x122)][_0x4c3935(0x142)]();const _0x115e0=[..._0x55d27c,..._0x1551ef];this[_0x4c3935(0x146)]['log'](this[_0x4c3935(0x139)]+_0x4c3935(0x138)+_0x115e0[_0x4c3935(0x10e)]+'\x20branches.');for(const _0x3ef036 of _0x115e0){this[_0x4c3935(0x10f)][_0x4c3935(0x152)](_0x4c3935(0x173)+_0x3ef036[_0x4c3935(0x111)]+'['+_0x3ef036[_0x4c3935(0x147)]+_0x4c3935(0x14f)+_0x3ef036[_0x4c3935(0x10a)]+'['+_0x3ef036[_0x4c3935(0x141)]+']\x20branch.'),this['sfLogger'][_0x4c3935(0x152)](this[_0x4c3935(0x139)]+'\x20Syncing\x20repository:\x20\x22'+_0x3ef036[_0x4c3935(0x111)]+_0x4c3935(0x101)+_0x3ef036[_0x4c3935(0x10a)]+'\x22.'),this[_0x4c3935(0x146)][_0x4c3935(0x152)](this['prefix']+_0x4c3935(0x180));const _0x525232=await this[_0x4c3935(0x14c)](_0x3ef036);if(!_0x525232)continue;this[_0x4c3935(0x146)][_0x4c3935(0x152)](this[_0x4c3935(0x139)]+_0x4c3935(0x13d));const _0x575c1e=await this['isIntersects'](_0x3ef036);if(_0x575c1e)continue;await this[_0x4c3935(0x146)][_0x4c3935(0x136)]();let _0x2025f6;try{await this[_0x4c3935(0x146)][_0x4c3935(0x152)](this[_0x4c3935(0x139)]+_0x4c3935(0x178))[_0x4c3935(0x136)](),_0x2025f6=await this[_0x4c3935(0x156)](_0x3ef036,typedi_1['Container'][_0x4c3935(0x120)](providers_tokens_1[_0x4c3935(0x166)][_0x4c3935(0x13a)]));}catch(_0x35075a){await this[_0x4c3935(0x15b)](_0x3ef036,_0x35075a instanceof too_many_requests_error_1['TooManyRequests']?_0x35075a:new Error(_0x4c3935(0x174)+_0x35075a));continue;}await this[_0x4c3935(0x146)]['log'](this['prefix']+_0x4c3935(0x144))[_0x4c3935(0x136)]();if(_0x3ef036[_0x4c3935(0x154)]===flosum_repository_sync_dto_1[_0x4c3935(0x150)]['FlosumToGit']){const _0x5527f4=typedi_1['Container']['get'](flosum_sync_job_1[_0x4c3935(0x164)]);await _0x5527f4[_0x4c3935(0x158)]({'repository':_0x2025f6,'convertToSFDX':this[_0x4c3935(0x179)][_0x4c3935(0x170)],'syncRecord':_0x3ef036,'provider':this[_0x4c3935(0x179)][_0x4c3935(0x137)]})[_0x4c3935(0x11b)](_0x54c042=>this[_0x4c3935(0x15b)](_0x3ef036,_0x54c042));}else{const _0x1524c3=typedi_1['Container'][_0x4c3935(0x120)](git_sync_job_1[_0x4c3935(0x135)]);await _0x1524c3[_0x4c3935(0x158)]({'repository':_0x2025f6,'branch':_0x3ef036[_0x4c3935(0x10a)],'provider':this[_0x4c3935(0x179)][_0x4c3935(0x137)],'repositoryGit':_0x2025f6[_0x4c3935(0x118)],'syncRecord':_0x3ef036})['catch'](_0x2539ef=>this[_0x4c3935(0x15b)](_0x3ef036,_0x2539ef));}}}catch(_0x3219a2){this[_0x4c3935(0x10f)]['error'](_0x3219a2);_0x3219a2 instanceof too_many_requests_error_1['TooManyRequests']?(await this[_0x4c3935(0x146)][_0x4c3935(0x152)](this[_0x4c3935(0x139)]+_0x4c3935(0x143))[_0x4c3935(0x136)](),await(0x0,utils_1[_0x4c3935(0x17e)])(0x3c*0x3c*0x3e8),this[_0x4c3935(0x158)]()):await this[_0x4c3935(0x146)]['error'](this[_0x4c3935(0x139)]+_0x4c3935(0x110)+_0x3219a2)[_0x4c3935(0x136)]();return;}await this[_0x4c3935(0x146)][_0x4c3935(0x152)](this[_0x4c3935(0x139)]+_0x4c3935(0x123))[_0x4c3935(0x136)](),await this['salesforceSync'][_0x4c3935(0x12e)](typedi_1[_0x4c3935(0x113)][_0x4c3935(0x120)](providers_tokens_1[_0x4c3935(0x166)][_0x4c3935(0x13a)]))[_0x4c3935(0x11b)](()=>null);}};SyncService=SyncService_1=__decorate([(0x0,typedi_1['Service'])({'transient':!![]}),__metadata(a111_0x457028(0x13f),[salesforce_service_1[a111_0x457028(0x15e)],salesforce_sync_service_1[a111_0x457028(0x16d)]])],SyncService),exports[a111_0x457028(0x16e)]=SyncService;function a111_0x21a4(){const _0xf2b35c=['BadRequestError','../../../../core','(((.+)+)+)+$','HooksUtils','getOwnPropertyDescriptor','SalesforceSyncService','SyncService','\x20Repository\x20\x22','isConvertToSfdx','push','setLoggerId','Syncing\x20','[ERROR]\x20Could\x20not\x20find/create\x20repository.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Possible\x20error\x20reasons:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201.\x20Git\x20service\x20is\x20unavailable\x20for\x20the\x20moment.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x202.\x20Repository\x20with\x20this\x20name\x20already\x20created\x20in\x20git,\x20but\x20with\x20another\x20lettercase\x20(repository\x20names\x20are\x20case-sensitive\x20and\x20should\x20be\x20identical).\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x203.\x20The\x20agent\x20could\x20not\x20recieve\x20all\x20repositories\x20from\x20git\x20service\x20due\x20permissions\x20that\x20you\x20provided.\x20(See\x20guide\x20how\x20to\x20setup\x20environment\x20variables\x20for\x20this\x20service).\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Original\x20error:\x20','hooks','constructor','../../salesforce/services/salesforce.service','\x20Getting\x20Flosum\x20repository','config','typedi','../../salesforce/dto/flosum-repository-sync.dto','__metadata','../../salesforce/errors/salesforce.error','sleep','../../salesforce/services/salesforce-sync.service','\x20Checking\x20valid\x20name.','create','\x22\x20branch:\x20\x22','\x22\x20does\x27t\x20has\x20the\x20agent\x20webhook.\x20Agent\x20will\x20create\x20new\x20repository\x20webhook\x20to\x20enable\x20back\x20sync.','18GaGDde','../../providers/web-hooks/hooks.utils','3870198EoFear','repositoriesIntersections','46261842BvIXtt','gitRepoService','isIntersects','branchName','9588208SoPkjV','getHookLinkFor','function','length','logger','\x20Stop\x20sync\x20job\x20due\x20error\x20-\x20','repositoryName','setStatus','Container','search','repoList','1685999MuwTxB','map','gitUrl','Unable\x20to\x20synchronize\x20repository\x20\x27','getLoggerId','catch','../../../../core/errors/bad-request.error','__decorate','name','\x27\x20due\x20repository\x20name\x20does\x20not\x20meet\x20the\x20naming\x20requirements.','get','metadata','repoService','\x20Sync\x20job\x20done.','../../../../core/errors/too-many-requests.error','7593XcqSwy','updateRemoteState','isBidirectionalSynchronization','../../../../constants','../errors/git-branch-not-found.error','toUpperCase','gitApiService','error','4qlFxtf','disableSync',']\x20[','apply','getBranchRecords','GitBranchNotFoundError','4906810WRNWbV','TooManyRequests','GitSyncJob','send','gitProvider','\x20Have\x20to\x20synchronize\x20','prefix','connectionId','Error','../../../shared/utils','\x20Checking\x20intersects.','../../providers/providers.tokens','design:paramtypes','253002VccdAI','branchId','getAll','\x20[PAUSE]\x20Pause\x20sync\x20job\x20due\x20error\x20-\x20Rate\x20limit\x20quota\x20for\x20git\x20service\x20exceeded.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Paused\x20for\x201h\x20to\x20refill\x20limit\x20quota\x20continue.\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20This\x20kind\x20of\x20error\x20is\x20not\x20critical\x20just\x20need\x20to\x20wait\x20until\x20we\x20can\x20continue\x20work\x20with\x20git\x20service.','\x20Completed\x20prepare\x20to\x20syncing.','Not\x20Synchronized','sfLogger','repositoryId','test','salesforceService','toLowerCase','\x27\x20[','checkValidNaming','\x22\x20does\x20not\x20exists.\x20Creating\x20it\x20on\x20git\x20service.','\x27\x20-\x20\x27',']\x20repository\x20','SyncDirection','956HzWVEg','log','getRepositoryRecords','direction','defineProperty','getOrCreateRepo','\x20Getting\x20repositories\x20from\x20git\x20service.','run','toString','salesforceSync','handleRecordSyncError','find',']\x20due\x20error\x20-\x20','SalesforceService','10Yzvbhj','decorate','__esModule','Waiting','applicationUrl','FlosumSyncJob','REPOSITORY_NAME_REGEXP','Tokens','\x27\x20due\x20branch\x20name\x20does\x20not\x20meet\x20the\x20naming\x20requirements.'];a111_0x21a4=function(){return _0xf2b35c;};return a111_0x21a4();}