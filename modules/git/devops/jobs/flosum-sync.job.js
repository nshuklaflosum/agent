const a106_0x1e53ef=a106_0x569f;(function(_0x4a9836,_0x19d89e){const _0xa0df60=a106_0x569f,_0x5e0315=_0x4a9836();while(!![]){try{const _0x14656b=parseInt(_0xa0df60(0x14d))/0x1+-parseInt(_0xa0df60(0xff))/0x2*(-parseInt(_0xa0df60(0x139))/0x3)+-parseInt(_0xa0df60(0x126))/0x4+-parseInt(_0xa0df60(0x13c))/0x5*(-parseInt(_0xa0df60(0x142))/0x6)+parseInt(_0xa0df60(0x102))/0x7*(-parseInt(_0xa0df60(0xf8))/0x8)+parseInt(_0xa0df60(0x13d))/0x9*(-parseInt(_0xa0df60(0xf5))/0xa)+parseInt(_0xa0df60(0x128))/0xb*(-parseInt(_0xa0df60(0x148))/0xc);if(_0x14656b===_0x19d89e)break;else _0x5e0315['push'](_0x5e0315['shift']());}catch(_0x73b8b6){_0x5e0315['push'](_0x5e0315['shift']());}}}(a106_0x38bc,0x1fbe2));const a106_0xb3891=(function(){let _0x197b73=!![];return function(_0x246a3c,_0x1cd198){const _0x336590=_0x197b73?function(){const _0x425389=a106_0x569f;if(_0x1cd198){const _0x3734c0=_0x1cd198[_0x425389(0x136)](_0x246a3c,arguments);return _0x1cd198=null,_0x3734c0;}}:function(){};return _0x197b73=![],_0x336590;};}()),a106_0xf1dcd9=a106_0xb3891(this,function(){const _0x4a8d3c=a106_0x569f;return a106_0xf1dcd9[_0x4a8d3c(0x11f)]()[_0x4a8d3c(0x100)](_0x4a8d3c(0x12c))[_0x4a8d3c(0x11f)]()[_0x4a8d3c(0x13e)](a106_0xf1dcd9)[_0x4a8d3c(0x100)](_0x4a8d3c(0x12c));});a106_0xf1dcd9();'use strict';var __decorate=this&&this[a106_0x1e53ef(0xf7)]||function(_0x3133cd,_0x5baaf8,_0xe731f9,_0x2f8910){const _0x47266f=a106_0x1e53ef;var _0x48d4c0=arguments[_0x47266f(0x124)],_0x5ca883=_0x48d4c0<0x3?_0x5baaf8:_0x2f8910===null?_0x2f8910=Object[_0x47266f(0x10a)](_0x5baaf8,_0xe731f9):_0x2f8910,_0x1afb1a;if(typeof Reflect===_0x47266f(0x121)&&typeof Reflect[_0x47266f(0x127)]==='function')_0x5ca883=Reflect[_0x47266f(0x127)](_0x3133cd,_0x5baaf8,_0xe731f9,_0x2f8910);else{for(var _0x43497f=_0x3133cd[_0x47266f(0x124)]-0x1;_0x43497f>=0x0;_0x43497f--)if(_0x1afb1a=_0x3133cd[_0x43497f])_0x5ca883=(_0x48d4c0<0x3?_0x1afb1a(_0x5ca883):_0x48d4c0>0x3?_0x1afb1a(_0x5baaf8,_0xe731f9,_0x5ca883):_0x1afb1a(_0x5baaf8,_0xe731f9))||_0x5ca883;}return _0x48d4c0>0x3&&_0x5ca883&&Object[_0x47266f(0x11d)](_0x5baaf8,_0xe731f9,_0x5ca883),_0x5ca883;},__metadata=this&&this[a106_0x1e53ef(0x11b)]||function(_0x680461,_0x1685e5){const _0x2ffa23=a106_0x1e53ef;if(typeof Reflect===_0x2ffa23(0x121)&&typeof Reflect[_0x2ffa23(0x112)]===_0x2ffa23(0x10c))return Reflect[_0x2ffa23(0x112)](_0x680461,_0x1685e5);};Object['defineProperty'](exports,a106_0x1e53ef(0x13f),{'value':!![]}),exports['FlosumSyncJob']=void 0x0;const salesforce_logger_v3_service_1=require(a106_0x1e53ef(0x103)),typedi_1=require('typedi'),constants_1=require(a106_0x1e53ef(0xfa)),salesforce_retriever_service_1=require(a106_0x1e53ef(0x10d)),salesforce_sync_service_1=require(a106_0x1e53ef(0x10b)),salesforce_service_1=require('../../salesforce/services/salesforce.service'),commit_components_dto_1=require(a106_0x1e53ef(0x10e)),commit_components_job_1=require(a106_0x1e53ef(0x13b));let FlosumSyncJob=class FlosumSyncJob{constructor(_0x3dcff0,_0xc02ca7,_0x4f5d85){const _0x4e132a=a106_0x1e53ef;this[_0x4e132a(0x14b)]=_0x3dcff0,this[_0x4e132a(0x114)]=_0xc02ca7,this['commitJob']=_0x4f5d85;}async[a106_0x1e53ef(0xf2)](){const _0x5d40b3=a106_0x1e53ef;let _0x4e46cf=await this[_0x5d40b3(0x107)][_0x5d40b3(0x101)][_0x5d40b3(0x135)](this[_0x5d40b3(0x12f)][_0x5d40b3(0x12a)])[_0x5d40b3(0x109)](()=>null);!_0x4e46cf&&(_0x4e46cf=await this[_0x5d40b3(0x107)][_0x5d40b3(0x101)]['create']({'name':this[_0x5d40b3(0x12f)][_0x5d40b3(0x12a)]})),this['branch']=_0x4e46cf;}async[a106_0x1e53ef(0x140)](){const _0x475d62=a106_0x1e53ef;return this['syncData']['repositoryId']?this[_0x475d62(0x14b)][_0x475d62(0x108)](this['syncData'][_0x475d62(0x113)]):this[_0x475d62(0x14b)][_0x475d62(0x137)](this[_0x475d62(0x12f)][_0x475d62(0x147)]);}async[a106_0x1e53ef(0xfe)](){const _0x35de8c=a106_0x1e53ef,_0x579638=await this[_0x35de8c(0x140)](),_0x70991d=new salesforce_retriever_service_1[(_0x35de8c(0x14a))](this['salesforceService']),_0x5649c8=await _0x70991d[_0x35de8c(0x14c)](_0x579638);return _0x5649c8;}async['getCommitDto'](_0x57025c){const _0x440339=a106_0x1e53ef,_0x34c80b=new commit_components_dto_1[(_0x440339(0x133))]();return _0x34c80b['message']=_0x440339(0x120),_0x34c80b[_0x440339(0xf3)]={'name':constants_1['DEFAULT_GIT_USER_NAME'],'email':constants_1[_0x440339(0x105)]},_0x34c80b[_0x440339(0x117)]={'writed':await this[_0x440339(0xfe)]()},_0x34c80b['convertToSFDX']=_0x57025c,_0x34c80b[_0x440339(0xf4)]=this[_0x440339(0x107)],_0x34c80b['branch']=this[_0x440339(0x123)],_0x34c80b[_0x440339(0x143)]=!![],_0x34c80b[_0x440339(0x122)]=this[_0x440339(0x122)],_0x34c80b;}async[a106_0x1e53ef(0x13a)](){const _0x428417=a106_0x1e53ef,_0x566a95=await this['salesforceSync'][_0x428417(0x144)](this[_0x428417(0x12f)]),_0x402b87=await this[_0x428417(0x114)][_0x428417(0x12b)](_0x566a95)['then'](_0x571357=>typeof _0x571357==='string'?JSON[_0x428417(0x118)](_0x571357):_0x571357)[_0x428417(0x109)](()=>({}));if(_0x402b87[this[_0x428417(0x107)]['gitUrl']]){if(_0x402b87[this[_0x428417(0x107)][_0x428417(0x106)]][_0x428417(0x111)]===this[_0x428417(0x123)][_0x428417(0x11c)])return!![];}return![];}async[a106_0x1e53ef(0x110)](){const _0x3a7b57=a106_0x1e53ef,_0x402a65=await this['repository'][_0x3a7b57(0x101)][_0x3a7b57(0x135)](this[_0x3a7b57(0x123)][_0x3a7b57(0x134)]);await this[_0x3a7b57(0x131)]['log'](this[_0x3a7b57(0xfd)]+_0x3a7b57(0x132));const _0x44a211={[this[_0x3a7b57(0x107)][_0x3a7b57(0x106)]]:{'lastCommit':_0x402a65['sha']}};await this['salesforceSync'][_0x3a7b57(0x119)](this[_0x3a7b57(0x12f)],_0x44a211);}async[a106_0x1e53ef(0x14c)]({syncRecord:_0x365a72,repository:_0x44183b,convertToSFDX:_0xa2808a,provider:_0x328bd2}){const _0x510f31=a106_0x1e53ef;this[_0x510f31(0x12f)]=_0x365a72,this[_0x510f31(0x122)]=_0x328bd2,this['repository']=_0x44183b,this[_0x510f31(0x131)]=typedi_1[_0x510f31(0x125)][_0x510f31(0x11e)](salesforce_logger_v3_service_1[_0x510f31(0x115)]),this[_0x510f31(0xfd)]='[FLOSUM\x20->\x20GIT]\x20[Repository:\x20'+this[_0x510f31(0x12f)][_0x510f31(0xfc)]+']\x20[Branch:\x20'+this[_0x510f31(0x12f)]['branchName']+']';try{await this[_0x510f31(0x131)][_0x510f31(0x116)](this['prefix']+_0x510f31(0x10f))[_0x510f31(0x141)](),await this[_0x510f31(0x14b)][_0x510f31(0xf9)](this[_0x510f31(0x12f)],_0x510f31(0x145)),this[_0x510f31(0x131)][_0x510f31(0x116)](this[_0x510f31(0xfd)]+_0x510f31(0x146)),await this[_0x510f31(0xf2)](),await this[_0x510f31(0x131)][_0x510f31(0x116)](this[_0x510f31(0xfd)]+_0x510f31(0x129))[_0x510f31(0x141)]();const _0x510ae4=await this[_0x510f31(0x13a)]();this[_0x510f31(0x131)][_0x510f31(0x116)](this[_0x510f31(0xfd)]+_0x510f31(0xf6)+_0x510ae4+'.');if(_0x510ae4){await this['salesforceSync'][_0x510f31(0xf9)](this['syncData'],'Completed'),await this[_0x510f31(0x131)][_0x510f31(0x116)](this[_0x510f31(0xfd)]+_0x510f31(0x149))[_0x510f31(0x141)]();return;}const _0x5af546=await this[_0x510f31(0x12e)](_0xa2808a);await this[_0x510f31(0x130)]['run'](_0x5af546,this[_0x510f31(0xfd)]),await this['salesforceSync'][_0x510f31(0xf9)](this[_0x510f31(0x12f)],_0x510f31(0x12d)),await this[_0x510f31(0x110)](),this[_0x510f31(0x131)][_0x510f31(0x116)](this['prefix']+'\x20Flosum\x20sync\x20job\x20done.');}catch(_0x1b2898){throw _0x1b2898;}finally{await this[_0x510f31(0x131)][_0x510f31(0x141)]();}}};function a106_0x38bc(){const _0x106192=['prefix','getComponents','346686LKArhr','search','branches','7Qgxmhg','../../salesforce/services/salesforce-logger-v3.service','Service','DEFAULT_GIT_USER_EMAIL','gitUrl','repository','getComponentsFromRepository','catch','getOwnPropertyDescriptor','../../salesforce/services/salesforce-sync.service','function','../../salesforce/services/salesforce-retriever.service','../dto/commit-components.dto','\x20Start\x20Flosum\x20sync\x20job','updateLastCommit','lastCommit','metadata','repositoryId','salesforceService','SalesforceLogger3','log','components','parse','updateRemoteState','SalesforceService','__metadata','sha','defineProperty','get','toString','Sync\x20repository','object','provider','branch','length','Container','512IxnFeW','decorate','11cOUOkB','\x20Checking\x20sync\x20status.','branchName','retrieveAttachment','(((.+)+)+)+$','Completed','getCommitDto','syncData','commitJob','sfLogger','\x20Update\x20remote\x20state.','CommitComponentsDto','name','getOne','apply','getBranchComponents','design:paramtypes','3HrQqcQ','checkSyncStatus','./commit-components.job','30445jxVQAa','6507fEolmY','constructor','__esModule','getComponentIds','send','216ocBoDH','force','getRemoteStateAttachmentId','In\x20Progress','\x20Checking\x20repository\x20on\x20Flosum\x20side.','branchId','1584624kHgLLa','\x20Branch\x20synchronized.\x20Skip','SalesforceRetrieverService','salesforceSync','run','179833IXvIAW','createBranchIfNotExists','user','repo','3090HcBRqS','\x20Sync\x20status\x20','__decorate','694200lzmXzC','setStatus','../../../../constants','CommitComponentsJob','repositoryName'];a106_0x38bc=function(){return _0x106192;};return a106_0x38bc();}function a106_0x569f(_0x127aa1,_0x416fa5){const _0x40ebb0=a106_0x38bc();return a106_0x569f=function(_0xf1dcd9,_0xb3891){_0xf1dcd9=_0xf1dcd9-0xf2;let _0x38bc2f=_0x40ebb0[_0xf1dcd9];return _0x38bc2f;},a106_0x569f(_0x127aa1,_0x416fa5);}FlosumSyncJob=__decorate([(0x0,typedi_1[a106_0x1e53ef(0x104)])({'transient':!![]}),__metadata(a106_0x1e53ef(0x138),[salesforce_sync_service_1['SalesforceSyncService'],salesforce_service_1[a106_0x1e53ef(0x11a)],commit_components_job_1[a106_0x1e53ef(0xfb)]])],FlosumSyncJob),exports['FlosumSyncJob']=FlosumSyncJob;