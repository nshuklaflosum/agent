const a126_0x475498=a126_0x2395;(function(_0x3c05b4,_0x1b12af){const _0x2d848f=a126_0x2395,_0x42389d=_0x3c05b4();while(!![]){try{const _0x39c398=-parseInt(_0x2d848f(0xfe))/0x1*(parseInt(_0x2d848f(0xe3))/0x2)+-parseInt(_0x2d848f(0xf6))/0x3*(parseInt(_0x2d848f(0xdb))/0x4)+-parseInt(_0x2d848f(0xf8))/0x5+-parseInt(_0x2d848f(0x10d))/0x6*(-parseInt(_0x2d848f(0x10e))/0x7)+parseInt(_0x2d848f(0xc9))/0x8*(parseInt(_0x2d848f(0xd8))/0x9)+parseInt(_0x2d848f(0xc5))/0xa+-parseInt(_0x2d848f(0xd0))/0xb*(-parseInt(_0x2d848f(0xdc))/0xc);if(_0x39c398===_0x1b12af)break;else _0x42389d['push'](_0x42389d['shift']());}catch(_0x5ef546){_0x42389d['push'](_0x42389d['shift']());}}}(a126_0xabe2,0xa3be2));const a126_0x1a71ef=(function(){let _0x3cb17d=!![];return function(_0xedf2da,_0x424d70){const _0x206cb3=_0x3cb17d?function(){const _0x476927=a126_0x2395;if(_0x424d70){const _0x164f4c=_0x424d70[_0x476927(0x118)](_0xedf2da,arguments);return _0x424d70=null,_0x164f4c;}}:function(){};return _0x3cb17d=![],_0x206cb3;};}()),a126_0x87c0c6=a126_0x1a71ef(this,function(){const _0x4e7c53=a126_0x2395;return a126_0x87c0c6[_0x4e7c53(0xfc)]()[_0x4e7c53(0xf2)]('(((.+)+)+)+$')[_0x4e7c53(0xfc)]()[_0x4e7c53(0x11d)](a126_0x87c0c6)['search']('(((.+)+)+)+$');});a126_0x87c0c6();'use strict';function a126_0x2395(_0x32a40f,_0x261b5b){const _0x369d7c=a126_0xabe2();return a126_0x2395=function(_0x87c0c6,_0x1a71ef){_0x87c0c6=_0x87c0c6-0xc3;let _0xabe25e=_0x369d7c[_0x87c0c6];return _0xabe25e;},a126_0x2395(_0x32a40f,_0x261b5b);}var __decorate=this&&this[a126_0x475498(0x103)]||function(_0x433881,_0x6f99fc,_0x553aaa,_0x112568){const _0x590ab3=a126_0x475498;var _0x1e3c7f=arguments['length'],_0x57e741=_0x1e3c7f<0x3?_0x6f99fc:_0x112568===null?_0x112568=Object['getOwnPropertyDescriptor'](_0x6f99fc,_0x553aaa):_0x112568,_0x247e75;if(typeof Reflect==='object'&&typeof Reflect[_0x590ab3(0xfa)]===_0x590ab3(0xd9))_0x57e741=Reflect[_0x590ab3(0xfa)](_0x433881,_0x6f99fc,_0x553aaa,_0x112568);else{for(var _0x18f91c=_0x433881[_0x590ab3(0x114)]-0x1;_0x18f91c>=0x0;_0x18f91c--)if(_0x247e75=_0x433881[_0x18f91c])_0x57e741=(_0x1e3c7f<0x3?_0x247e75(_0x57e741):_0x1e3c7f>0x3?_0x247e75(_0x6f99fc,_0x553aaa,_0x57e741):_0x247e75(_0x6f99fc,_0x553aaa))||_0x57e741;}return _0x1e3c7f>0x3&&_0x57e741&&Object[_0x590ab3(0xf5)](_0x6f99fc,_0x553aaa,_0x57e741),_0x57e741;},__metadata=this&&this[a126_0x475498(0xec)]||function(_0x1ab892,_0x573468){const _0x29b2e0=a126_0x475498;if(typeof Reflect==='object'&&typeof Reflect[_0x29b2e0(0xca)]==='function')return Reflect[_0x29b2e0(0xca)](_0x1ab892,_0x573468);};Object[a126_0x475498(0xf5)](exports,a126_0x475498(0xc8),{'value':!![]}),exports[a126_0x475498(0x11a)]=void 0x0;const salesforce_logger_v3_service_1=require(a126_0x475498(0xf4)),typedi_1=require('typedi'),constants_1=require(a126_0x475498(0xcb)),salesforce_retriever_service_1=require(a126_0x475498(0xce)),salesforce_sync_service_1=require(a126_0x475498(0xdd)),salesforce_service_1=require(a126_0x475498(0xeb)),commit_components_dto_1=require(a126_0x475498(0xee)),commit_components_job_1=require('./commit-components.job');let FlosumSyncJob=class FlosumSyncJob{constructor(_0x5f534c,_0x54570d,_0x2b50b7){const _0x3912fe=a126_0x475498;this[_0x3912fe(0x110)]=_0x5f534c,this[_0x3912fe(0x102)]=_0x54570d,this[_0x3912fe(0x113)]=_0x2b50b7;}async[a126_0x475498(0x11c)](){const _0x3cee47=a126_0x475498;let _0x1d89ba=await this['repository'][_0x3cee47(0x107)][_0x3cee47(0xfb)](this[_0x3cee47(0xff)][_0x3cee47(0xe6)])['catch'](()=>null);!_0x1d89ba&&(_0x1d89ba=await this['repository'][_0x3cee47(0x107)][_0x3cee47(0xf1)]({'name':this[_0x3cee47(0xff)][_0x3cee47(0xe6)]})),this['branch']=_0x1d89ba;}async['getComponentIds'](){const _0x4e8e56=a126_0x475498;return this[_0x4e8e56(0xff)][_0x4e8e56(0x101)]?this['salesforceSync'][_0x4e8e56(0xcf)](this[_0x4e8e56(0xff)][_0x4e8e56(0x101)]):this[_0x4e8e56(0x110)][_0x4e8e56(0x10b)](this[_0x4e8e56(0xff)][_0x4e8e56(0x104)]);}async[a126_0x475498(0xcd)](){const _0x1b31d4=a126_0x475498,_0x5e59ff=await this[_0x1b31d4(0xd5)](),_0x25f4d5=new salesforce_retriever_service_1[(_0x1b31d4(0x100))](this['salesforceService']),_0x536ef7=await _0x25f4d5[_0x1b31d4(0x10a)](_0x5e59ff);return _0x536ef7;}async['getCommitDto'](_0x244648){const _0x5960d7=a126_0x475498,_0x266d8a=new commit_components_dto_1[(_0x5960d7(0xea))]();return _0x266d8a[_0x5960d7(0x11b)]=_0x5960d7(0x106),_0x266d8a[_0x5960d7(0xde)]={'name':constants_1['DEFAULT_GIT_USER_NAME'],'email':constants_1['DEFAULT_GIT_USER_EMAIL']},_0x266d8a[_0x5960d7(0x116)]={'writed':await this[_0x5960d7(0xcd)]()},_0x266d8a[_0x5960d7(0xe0)]=_0x244648,_0x266d8a[_0x5960d7(0xd6)]=this[_0x5960d7(0xe1)],_0x266d8a[_0x5960d7(0xc3)]=this[_0x5960d7(0xc3)],_0x266d8a[_0x5960d7(0xd7)]=!![],_0x266d8a['provider']=this[_0x5960d7(0xd3)],_0x266d8a['recordType']=this[_0x5960d7(0xff)][_0x5960d7(0xd4)],_0x266d8a;}async['checkSyncStatus'](){const _0x458ce7=a126_0x475498,_0x370bf3=await this['salesforceSync'][_0x458ce7(0xf0)](this[_0x458ce7(0xff)]),_0x2d75e2=await this[_0x458ce7(0x102)][_0x458ce7(0xf9)](_0x370bf3)[_0x458ce7(0xc6)](_0x3db7bd=>typeof _0x3db7bd===_0x458ce7(0xef)?JSON[_0x458ce7(0xcc)](_0x3db7bd):_0x3db7bd)[_0x458ce7(0xe4)](()=>({}));if(_0x2d75e2[this[_0x458ce7(0xe1)][_0x458ce7(0x117)]]){if(_0x2d75e2[this[_0x458ce7(0xe1)]['gitUrl']][_0x458ce7(0x109)]===this['branch']['sha'])return!![];}return![];}async[a126_0x475498(0xd1)](){const _0x5a8085=a126_0x475498,_0x480eff=await this[_0x5a8085(0xe1)][_0x5a8085(0x107)][_0x5a8085(0xfb)](this[_0x5a8085(0xc3)][_0x5a8085(0xe2)]);await this[_0x5a8085(0xda)][_0x5a8085(0xe9)](this['prefix']+_0x5a8085(0xdf));const _0x363adf={[this['repository'][_0x5a8085(0x117)]]:{'lastCommit':_0x480eff[_0x5a8085(0xc7)]}};await this[_0x5a8085(0x110)]['updateRemoteState'](this['syncData'],_0x363adf);}async[a126_0x475498(0x10a)]({syncRecord:_0x5d8104,repository:_0x34780f,convertToSFDX:_0x530f66,provider:_0x5798d7}){const _0x4a041d=a126_0x475498;this[_0x4a041d(0xff)]=_0x5d8104,this[_0x4a041d(0xd3)]=_0x5798d7,this[_0x4a041d(0xe1)]=_0x34780f,this[_0x4a041d(0xda)]=typedi_1[_0x4a041d(0xc4)][_0x4a041d(0xed)](salesforce_logger_v3_service_1[_0x4a041d(0x115)]),this[_0x4a041d(0xf3)]=_0x4a041d(0x112)+this[_0x4a041d(0xff)]['repositoryName']+_0x4a041d(0x108)+this['syncData'][_0x4a041d(0xe6)]+']';try{await this[_0x4a041d(0xda)][_0x4a041d(0xe9)](this[_0x4a041d(0xf3)]+_0x4a041d(0xe5))[_0x4a041d(0xe7)](),await this[_0x4a041d(0x110)][_0x4a041d(0x119)](this[_0x4a041d(0xff)],'In\x20Progress'),this[_0x4a041d(0xda)][_0x4a041d(0xe9)](this[_0x4a041d(0xf3)]+_0x4a041d(0xfd)),await this['createBranchIfNotExists'](),await this[_0x4a041d(0xda)][_0x4a041d(0xe9)](this[_0x4a041d(0xf3)]+_0x4a041d(0x111))[_0x4a041d(0xe7)]();const _0x13cd13=await this['checkSyncStatus']();this[_0x4a041d(0xda)]['log'](this['prefix']+_0x4a041d(0xd2)+_0x13cd13+'.');if(_0x13cd13){await this['salesforceSync']['setStatus'](this[_0x4a041d(0xff)],_0x4a041d(0x105)),await this[_0x4a041d(0xda)][_0x4a041d(0xe9)](this[_0x4a041d(0xf3)]+_0x4a041d(0x10c))[_0x4a041d(0xe7)]();return;}const _0xae2996=await this[_0x4a041d(0xf7)](_0x530f66);await this['commitJob'][_0x4a041d(0x10a)](_0xae2996,this['prefix']),await this[_0x4a041d(0x110)][_0x4a041d(0x119)](this['syncData'],_0x4a041d(0x105)),await this['updateLastCommit'](),this[_0x4a041d(0xda)][_0x4a041d(0xe9)](this[_0x4a041d(0xf3)]+'\x20Flosum\x20sync\x20job\x20done.');}catch(_0x2b3bfe){throw _0x2b3bfe;}finally{await this[_0x4a041d(0xda)][_0x4a041d(0xe7)]();}}};function a126_0xabe2(){const _0x3a9d60=['7juXfwQ','Service','salesforceSync','\x20Checking\x20sync\x20status.','[FLOSUM\x20->\x20GIT]\x20[Repository:\x20','commitJob','length','SalesforceLogger3','components','gitUrl','apply','setStatus','FlosumSyncJob','message','createBranchIfNotExists','constructor','branch','Container','10470450JcUtml','then','sha','__esModule','1391064EaGOky','metadata','../../../../constants','parse','getComponents','../../salesforce/services/salesforce-retriever.service','getComponentsFromRepository','5227827KzDYyZ','updateLastCommit','\x20Sync\x20status\x20','provider','recordTypeName','getComponentIds','repo','force','9rxkgeM','function','sfLogger','778436CCzwrx','24VMBeyh','../../salesforce/services/salesforce-sync.service','user','\x20Update\x20remote\x20state.','convertToSFDX','repository','name','2LNVkVJ','catch','\x20Start\x20Flosum\x20sync\x20job','branchName','send','SalesforceService','log','CommitComponentsDto','../../salesforce/services/salesforce.service','__metadata','get','../dto/commit-components.dto','string','getRemoteStateAttachmentId','create','search','prefix','../../salesforce/services/salesforce-logger-v3.service','defineProperty','9ueLyYr','getCommitDto','3477545arVmbd','retrieveAttachment','decorate','getOne','toString','\x20Checking\x20repository\x20on\x20Flosum\x20side.','812309vLIxrT','syncData','SalesforceRetrieverService','repositoryId','salesforceService','__decorate','branchId','Completed','Sync\x20repository','branches',']\x20[Branch:\x20','lastCommit','run','getBranchComponents','\x20Branch\x20synchronized.\x20Skip','3545358DAskcr'];a126_0xabe2=function(){return _0x3a9d60;};return a126_0xabe2();}FlosumSyncJob=__decorate([(0x0,typedi_1[a126_0x475498(0x10f)])({'transient':!![]}),__metadata('design:paramtypes',[salesforce_sync_service_1['SalesforceSyncService'],salesforce_service_1[a126_0x475498(0xe8)],commit_components_job_1['CommitComponentsJob']])],FlosumSyncJob),exports[a126_0x475498(0x11a)]=FlosumSyncJob;