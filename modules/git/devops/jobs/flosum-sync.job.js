const a125_0x1cd77a=a125_0x4722;function a125_0xf531(){const _0x376b67=['object','repositoryId','__decorate','1699934oscgSL','components','getBranchComponents','user','prefix','sha','\x20Branch\x20synchronized.\x20Skip','\x20Checking\x20repository\x20on\x20Flosum\x20side.','message','\x20Checking\x20sync\x20status.','FlosumSyncJob','commitJob','typedi','__metadata','branches','CommitComponentsJob','metadata','1826565FzDbgj','(((.+)+)+)+$','setStatus','repository','getComponentIds','syncData','getOwnPropertyDescriptor','apply','createBranchIfNotExists','create','\x20Flosum\x20sync\x20job\x20done.','force','../dto/commit-components.dto','defineProperty','SalesforceService','branchId','constructor','recordTypeName','./commit-components.job','\x20Update\x20remote\x20state.','name','Completed','log','SalesforceLogger3','branchName','CommitComponentsDto','retrieveAttachment','repositoryName','parse','salesforceSync','5441820ImWFRk','function','793290KQZecl','sfLogger','run','branch','2083772BtxwqZ','provider','Sync\x20repository','\x20Sync\x20status\x20','checkSyncStatus','repo','59742tTbYmg','1378783nxrYdK','recordType','getCommitDto','getOne','search','../../salesforce/services/salesforce.service','DEFAULT_GIT_USER_EMAIL','design:paramtypes','get','DEFAULT_GIT_USER_NAME','SalesforceRetrieverService','6400zJOwql','../../../../constants','getRemoteStateAttachmentId','send','getComponentsFromRepository','[FLOSUM\x20->\x20GIT]\x20[Repository:\x20','gitUrl','\x20Start\x20Flosum\x20sync\x20job','Service','getComponents','salesforceService','40TVaDcd','5qxeazv','toString',']\x20[Branch:\x20','catch','decorate'];a125_0xf531=function(){return _0x376b67;};return a125_0xf531();}(function(_0x4260c8,_0x4c26a4){const _0x3588dd=a125_0x4722,_0x183a8a=_0x4260c8();while(!![]){try{const _0x29d08e=-parseInt(_0x3588dd(0xc3))/0x1+-parseInt(_0x3588dd(0x92))/0x2+parseInt(_0x3588dd(0xa3))/0x3+-parseInt(_0x3588dd(0xc7))/0x4*(parseInt(_0x3588dd(0x8a))/0x5)+-parseInt(_0x3588dd(0xc1))/0x6+-parseInt(_0x3588dd(0x73))/0x7*(parseInt(_0x3588dd(0x89))/0x8)+parseInt(_0x3588dd(0x72))/0x9*(parseInt(_0x3588dd(0x7e))/0xa);if(_0x29d08e===_0x4c26a4)break;else _0x183a8a['push'](_0x183a8a['shift']());}catch(_0xaccd9c){_0x183a8a['push'](_0x183a8a['shift']());}}}(a125_0xf531,0xc3988));const a125_0x517c4f=(function(){let _0x284b78=!![];return function(_0x438134,_0x249978){const _0x58f9c7=_0x284b78?function(){const _0x45b47a=a125_0x4722;if(_0x249978){const _0x21c1d0=_0x249978[_0x45b47a(0xaa)](_0x438134,arguments);return _0x249978=null,_0x21c1d0;}}:function(){};return _0x284b78=![],_0x58f9c7;};}()),a125_0x476938=a125_0x517c4f(this,function(){const _0x55785a=a125_0x4722;return a125_0x476938[_0x55785a(0x8b)]()[_0x55785a(0x77)](_0x55785a(0xa4))[_0x55785a(0x8b)]()[_0x55785a(0xb3)](a125_0x476938)[_0x55785a(0x77)](_0x55785a(0xa4));});a125_0x476938();'use strict';var __decorate=this&&this[a125_0x1cd77a(0x91)]||function(_0x21be99,_0x502354,_0x2594ed,_0x1ca189){const _0x1c6d63=a125_0x1cd77a;var _0x5b1e00=arguments['length'],_0x19ff48=_0x5b1e00<0x3?_0x502354:_0x1ca189===null?_0x1ca189=Object[_0x1c6d63(0xa9)](_0x502354,_0x2594ed):_0x1ca189,_0x848ae9;if(typeof Reflect===_0x1c6d63(0x8f)&&typeof Reflect[_0x1c6d63(0x8e)]===_0x1c6d63(0xc2))_0x19ff48=Reflect['decorate'](_0x21be99,_0x502354,_0x2594ed,_0x1ca189);else{for(var _0x1a8e91=_0x21be99['length']-0x1;_0x1a8e91>=0x0;_0x1a8e91--)if(_0x848ae9=_0x21be99[_0x1a8e91])_0x19ff48=(_0x5b1e00<0x3?_0x848ae9(_0x19ff48):_0x5b1e00>0x3?_0x848ae9(_0x502354,_0x2594ed,_0x19ff48):_0x848ae9(_0x502354,_0x2594ed))||_0x19ff48;}return _0x5b1e00>0x3&&_0x19ff48&&Object[_0x1c6d63(0xb0)](_0x502354,_0x2594ed,_0x19ff48),_0x19ff48;},__metadata=this&&this[a125_0x1cd77a(0x9f)]||function(_0x21858b,_0x563e3f){const _0x56dd43=a125_0x1cd77a;if(typeof Reflect==='object'&&typeof Reflect[_0x56dd43(0xa2)]==='function')return Reflect[_0x56dd43(0xa2)](_0x21858b,_0x563e3f);};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a125_0x1cd77a(0x9c)]=void 0x0;const salesforce_logger_v3_service_1=require('../../salesforce/services/salesforce-logger-v3.service'),typedi_1=require(a125_0x1cd77a(0x9e)),constants_1=require(a125_0x1cd77a(0x7f)),salesforce_retriever_service_1=require('../../salesforce/services/salesforce-retriever.service'),salesforce_sync_service_1=require('../../salesforce/services/salesforce-sync.service'),salesforce_service_1=require(a125_0x1cd77a(0x78)),commit_components_dto_1=require(a125_0x1cd77a(0xaf)),commit_components_job_1=require(a125_0x1cd77a(0xb5));let FlosumSyncJob=class FlosumSyncJob{constructor(_0xcc3e2b,_0x218752,_0x28af23){const _0x2fefdc=a125_0x1cd77a;this[_0x2fefdc(0xc0)]=_0xcc3e2b,this['salesforceService']=_0x218752,this[_0x2fefdc(0x9d)]=_0x28af23;}async[a125_0x1cd77a(0xab)](){const _0x11ba4a=a125_0x1cd77a;let _0x2d3732=await this['repository'][_0x11ba4a(0xa0)][_0x11ba4a(0x76)](this[_0x11ba4a(0xa8)][_0x11ba4a(0xbb)])[_0x11ba4a(0x8d)](()=>null);!_0x2d3732&&(_0x2d3732=await this[_0x11ba4a(0xa6)][_0x11ba4a(0xa0)][_0x11ba4a(0xac)]({'name':this[_0x11ba4a(0xa8)]['branchName']})),this['branch']=_0x2d3732;}async[a125_0x1cd77a(0xa7)](){const _0x188de2=a125_0x1cd77a;return this[_0x188de2(0xa8)][_0x188de2(0x90)]?this['salesforceSync'][_0x188de2(0x82)](this[_0x188de2(0xa8)]['repositoryId']):this[_0x188de2(0xc0)][_0x188de2(0x94)](this['syncData'][_0x188de2(0xb2)]);}async[a125_0x1cd77a(0x87)](){const _0x5bdebf=a125_0x1cd77a,_0x3cae96=await this[_0x5bdebf(0xa7)](),_0x1ba34f=new salesforce_retriever_service_1[(_0x5bdebf(0x7d))](this[_0x5bdebf(0x88)]),_0x2924a1=await _0x1ba34f[_0x5bdebf(0xc5)](_0x3cae96);return _0x2924a1;}async[a125_0x1cd77a(0x75)](_0x5af7fa){const _0x1fca99=a125_0x1cd77a,_0x4657f6=new commit_components_dto_1[(_0x1fca99(0xbc))]();return _0x4657f6[_0x1fca99(0x9a)]=_0x1fca99(0xc9),_0x4657f6[_0x1fca99(0x95)]={'name':constants_1[_0x1fca99(0x7c)],'email':constants_1[_0x1fca99(0x79)]},_0x4657f6[_0x1fca99(0x93)]={'writed':await this[_0x1fca99(0x87)]()},_0x4657f6['convertToSFDX']=_0x5af7fa,_0x4657f6[_0x1fca99(0xcc)]=this[_0x1fca99(0xa6)],_0x4657f6['branch']=this['branch'],_0x4657f6[_0x1fca99(0xae)]=!![],_0x4657f6[_0x1fca99(0xc8)]=this[_0x1fca99(0xc8)],_0x4657f6[_0x1fca99(0x74)]=this[_0x1fca99(0xa8)][_0x1fca99(0xb4)],_0x4657f6;}async[a125_0x1cd77a(0xcb)](){const _0x47a83e=a125_0x1cd77a,_0x3e16cb=await this[_0x47a83e(0xc0)][_0x47a83e(0x80)](this[_0x47a83e(0xa8)]),_0x4febd4=await this[_0x47a83e(0x88)][_0x47a83e(0xbd)](_0x3e16cb)['then'](_0x418837=>typeof _0x418837==='string'?JSON[_0x47a83e(0xbf)](_0x418837):_0x418837)[_0x47a83e(0x8d)](()=>({}));if(_0x4febd4[this[_0x47a83e(0xa6)]['gitUrl']]){if(_0x4febd4[this[_0x47a83e(0xa6)][_0x47a83e(0x84)]]['lastCommit']===this['branch'][_0x47a83e(0x97)])return!![];}return![];}async['updateLastCommit'](){const _0x565d4c=a125_0x1cd77a,_0x401a9a=await this[_0x565d4c(0xa6)][_0x565d4c(0xa0)]['getOne'](this[_0x565d4c(0xc6)][_0x565d4c(0xb7)]);await this['sfLogger'][_0x565d4c(0xb9)](this[_0x565d4c(0x96)]+_0x565d4c(0xb6));const _0x12d71f={[this[_0x565d4c(0xa6)][_0x565d4c(0x84)]]:{'lastCommit':_0x401a9a[_0x565d4c(0x97)]}};await this[_0x565d4c(0xc0)]['updateRemoteState'](this[_0x565d4c(0xa8)],_0x12d71f);}async['run']({syncRecord:_0x49ba66,repository:_0x1be437,convertToSFDX:_0x503f49,provider:_0x3ae42f}){const _0xfe4259=a125_0x1cd77a;this[_0xfe4259(0xa8)]=_0x49ba66,this[_0xfe4259(0xc8)]=_0x3ae42f,this[_0xfe4259(0xa6)]=_0x1be437,this[_0xfe4259(0xc4)]=typedi_1['Container'][_0xfe4259(0x7b)](salesforce_logger_v3_service_1[_0xfe4259(0xba)]),this[_0xfe4259(0x96)]=_0xfe4259(0x83)+this['syncData'][_0xfe4259(0xbe)]+_0xfe4259(0x8c)+this[_0xfe4259(0xa8)][_0xfe4259(0xbb)]+']';try{await this['sfLogger'][_0xfe4259(0xb9)](this['prefix']+_0xfe4259(0x85))[_0xfe4259(0x81)](),await this[_0xfe4259(0xc0)][_0xfe4259(0xa5)](this[_0xfe4259(0xa8)],'In\x20Progress'),this['sfLogger'][_0xfe4259(0xb9)](this[_0xfe4259(0x96)]+_0xfe4259(0x99)),await this[_0xfe4259(0xab)](),await this[_0xfe4259(0xc4)][_0xfe4259(0xb9)](this[_0xfe4259(0x96)]+_0xfe4259(0x9b))[_0xfe4259(0x81)]();const _0x2c663d=await this[_0xfe4259(0xcb)]();this['sfLogger'][_0xfe4259(0xb9)](this[_0xfe4259(0x96)]+_0xfe4259(0xca)+_0x2c663d+'.');if(_0x2c663d){await this[_0xfe4259(0xc0)][_0xfe4259(0xa5)](this[_0xfe4259(0xa8)],_0xfe4259(0xb8)),await this[_0xfe4259(0xc4)][_0xfe4259(0xb9)](this[_0xfe4259(0x96)]+_0xfe4259(0x98))[_0xfe4259(0x81)]();return;}const _0x5c7e58=await this['getCommitDto'](_0x503f49);await this[_0xfe4259(0x9d)][_0xfe4259(0xc5)](_0x5c7e58,this['prefix']),await this['salesforceSync'][_0xfe4259(0xa5)](this[_0xfe4259(0xa8)],_0xfe4259(0xb8)),await this['updateLastCommit'](),this[_0xfe4259(0xc4)]['log'](this[_0xfe4259(0x96)]+_0xfe4259(0xad));}catch(_0x3c806b){throw _0x3c806b;}finally{await this[_0xfe4259(0xc4)]['send']();}}};function a125_0x4722(_0x17fa8d,_0x27ae56){const _0x3e9efa=a125_0xf531();return a125_0x4722=function(_0x476938,_0x517c4f){_0x476938=_0x476938-0x72;let _0xf531fa=_0x3e9efa[_0x476938];return _0xf531fa;},a125_0x4722(_0x17fa8d,_0x27ae56);}FlosumSyncJob=__decorate([(0x0,typedi_1[a125_0x1cd77a(0x86)])({'transient':!![]}),__metadata(a125_0x1cd77a(0x7a),[salesforce_sync_service_1['SalesforceSyncService'],salesforce_service_1[a125_0x1cd77a(0xb1)],commit_components_job_1[a125_0x1cd77a(0xa1)]])],FlosumSyncJob),exports[a125_0x1cd77a(0x9c)]=FlosumSyncJob;