function a233_0x1dcf(){const _0x1b95a2=['insert','1320112LChdGK','proceedChunksToUpload','sfLogger','defineProperty','4867191yXoumZ','splice','./salesforce-components-manager.service','SalesforceComponentsManager','__esModule','../errors/salesforce.error','(((.+)+)+)+$','reduce','logger','removed','toString','error','getProceededComponentsMeta','author','2089085eXBKFW','stringify','update','componentsToUpdate','map','2OOcFMo','18872iDpiVb','20hqZFof','255023GqMPuk','proceedRequests','log','floor','repositoryId','1225872PUnkaU','composite','SALESFORCE_MAX_REQUEST_SIZE_BYTES','have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(branch)','toJSON','../../../../constants','inserted','constructor','recordTypes','proceedCommitsToRepository','372KWdAlz','Logger','SalesforceError','options','proceededComponentsMeta','apply','reference','manifests','proceedCommitsToBranch','commitId','name','1833304nwDiVt','modified','push','Sending\x20','../../../../core','componentsToDelete','chunkArray','branchId','SALESFORCE_MAX_GRAPH_NODES_PER_REQUEST','length','executeGraphs','SalesforceCommitsManager','SalesforceCompositeService'];a233_0x1dcf=function(){return _0x1b95a2;};return a233_0x1dcf();}const a233_0x5216fc=a233_0x5e4e;function a233_0x5e4e(_0x3d1659,_0x32c401){const _0x10d2df=a233_0x1dcf();return a233_0x5e4e=function(_0x177011,_0xeba107){_0x177011=_0x177011-0x16d;let _0x1dcf09=_0x10d2df[_0x177011];return _0x1dcf09;},a233_0x5e4e(_0x3d1659,_0x32c401);}(function(_0x768d1d,_0x29d3f7){const _0x577922=a233_0x5e4e,_0x944935=_0x768d1d();while(!![]){try{const _0x5d65b0=-parseInt(_0x577922(0x199))/0x1*(parseInt(_0x577922(0x196))/0x2)+-parseInt(_0x577922(0x19e))/0x3+parseInt(_0x577922(0x17f))/0x4+-parseInt(_0x577922(0x191))/0x5+parseInt(_0x577922(0x1a8))/0x6*(parseInt(_0x577922(0x197))/0x7)+-parseInt(_0x577922(0x171))/0x8+parseInt(_0x577922(0x183))/0x9*(parseInt(_0x577922(0x198))/0xa);if(_0x5d65b0===_0x29d3f7)break;else _0x944935['push'](_0x944935['shift']());}catch(_0x311089){_0x944935['push'](_0x944935['shift']());}}}(a233_0x1dcf,0x41777));const a233_0xeba107=(function(){let _0x376384=!![];return function(_0x2a1dbb,_0x4beccd){const _0xc53a5a=_0x376384?function(){const _0xfe86c5=a233_0x5e4e;if(_0x4beccd){const _0x187d7e=_0x4beccd[_0xfe86c5(0x1ad)](_0x2a1dbb,arguments);return _0x4beccd=null,_0x187d7e;}}:function(){};return _0x376384=![],_0xc53a5a;};}()),a233_0x177011=a233_0xeba107(this,function(){const _0x3d6d2a=a233_0x5e4e;return a233_0x177011[_0x3d6d2a(0x18d)]()['search']('(((.+)+)+)+$')[_0x3d6d2a(0x18d)]()[_0x3d6d2a(0x1a5)](a233_0x177011)['search'](_0x3d6d2a(0x189));});a233_0x177011();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5e5353){const _0x2b5542=a233_0x5e4e;return _0x5e5353&&_0x5e5353[_0x2b5542(0x187)]?_0x5e5353:{'default':_0x5e5353};};Object[a233_0x5216fc(0x182)](exports,a233_0x5216fc(0x187),{'value':!![]}),exports['SalesforceCommitsManager']=void 0x0;const core_1=require(a233_0x5216fc(0x175)),typedi_1=__importDefault(require('typedi')),constants_1=require(a233_0x5216fc(0x1a3)),utils_1=require('../../../shared/utils'),salesforce_error_1=require(a233_0x5216fc(0x188)),composite_utils_1=require('../utils/composite.utils'),salesforce_components_manager_service_1=require(a233_0x5216fc(0x185)),salesforce_composite_service_1=require('./salesforce-composite.service');class SalesforceCommitsManager{constructor(_0x5ca824){const _0x42d580=a233_0x5216fc;this[_0x42d580(0x1ab)]=_0x5ca824,this['COMPONENTS_PER_CHUNK']=0x3,this['logger']=new core_1[(_0x42d580(0x1a9))](SalesforceCommitsManager[_0x42d580(0x170)]),this[_0x42d580(0x181)]=this['options'][_0x42d580(0x18b)],this['composite']=typedi_1['default']['get'](salesforce_composite_service_1[_0x42d580(0x17d)]),this[_0x42d580(0x1ac)]=[];}async[a233_0x5216fc(0x180)](_0x113b5b,_0x404421=![]){const _0x3e95a7=a233_0x5216fc,_0x2d3ce2=async _0x14307a=>{const _0x5b3ec4=a233_0x5e4e;await this[_0x5b3ec4(0x18b)][_0x5b3ec4(0x19b)](_0x5b3ec4(0x174)+_0x14307a[_0x5b3ec4(0x18a)]((_0x2cbb9a,_0xd03985)=>_0x2cbb9a+_0xd03985[_0x5b3ec4(0x17a)],0x0)+'\x20requests\x20to\x20composite\x20api.');const _0xb33a15=_0x14307a[_0x5b3ec4(0x195)]((_0x275416,_0x42daa3)=>({'graphId':'graph'+_0x42daa3,'compositeRequest':_0x275416})),_0x25b520=await this[_0x5b3ec4(0x19f)][_0x5b3ec4(0x17b)](_0xb33a15);if(_0x404421){const _0x3bb850=(0x0,composite_utils_1['extractComponentIdsFromGraphsResponse'])(_0x25b520);for(const {id:_0xd06931,ref:_0x3c7715}of _0x3bb850){const _0x2f8749=this['proceededComponentsMeta']['find'](_0x45ca2a=>_0x45ca2a[_0x5b3ec4(0x1ae)]===_0x3c7715);_0x2f8749&&(_0x2f8749['componentId']=_0xd06931);}}},_0x2cd2a6=0x1e8480;let _0x16d9dd=0x0,_0x4f8c8d=[];for(const _0x2a6fb1 of _0x113b5b){const _0x1cf735=_0x2a6fb1[_0x3e95a7(0x18a)]((_0x20f4de,_0x3e749a)=>{const _0x5dc6d9=JSON['stringify'](_0x3e749a)['length']*0x2;return _0x20f4de+_0x5dc6d9;},0x0);if(_0x1cf735>constants_1[_0x3e95a7(0x1a0)])throw new salesforce_error_1[(_0x3e95a7(0x1aa))]('Cannot\x20upload\x20components\x20due\x20to\x20size\x20-\x20MAX_SIZE\x20=\x20'+constants_1[_0x3e95a7(0x1a0)]+'\x20COMPONENTS_SIZE\x20=\x20'+_0x1cf735);_0x16d9dd+_0x1cf735>constants_1['SALESFORCE_MAX_REQUEST_SIZE_BYTES']-_0x2cd2a6&&(await _0x2d3ce2(_0x4f8c8d),_0x4f8c8d=[],_0x16d9dd=0x0),_0x16d9dd+=_0x1cf735,_0x4f8c8d['push'](_0x2a6fb1);}_0x4f8c8d['length']&&await _0x2d3ce2(_0x4f8c8d);}async[a233_0x5216fc(0x19a)](_0x3fc560,_0x12cbd3=![]){const _0x1ec0b9=a233_0x5216fc,_0x2285a3=(this['COMPONENTS_PER_CHUNK']+ +_0x12cbd3)*0x3,_0x33b09e=(0x0,utils_1[_0x1ec0b9(0x177)])(_0x3fc560,_0x2285a3);try{while(_0x33b09e[_0x1ec0b9(0x17a)]){const _0x53d451=_0x33b09e[_0x1ec0b9(0x184)](0x0,Math[_0x1ec0b9(0x19c)](constants_1[_0x1ec0b9(0x179)]/_0x2285a3));await this[_0x1ec0b9(0x180)](_0x53d451,_0x12cbd3);}}catch(_0x58d96f){this[_0x1ec0b9(0x18b)][_0x1ec0b9(0x18e)](_0x58d96f instanceof salesforce_error_1[_0x1ec0b9(0x1aa)]?JSON[_0x1ec0b9(0x192)](_0x58d96f[_0x1ec0b9(0x1a2)](),null,0x2):_0x58d96f),this[_0x1ec0b9(0x181)][_0x1ec0b9(0x19b)](_0x58d96f instanceof salesforce_error_1[_0x1ec0b9(0x1aa)]?JSON['stringify'](_0x58d96f[_0x1ec0b9(0x1a2)](),null,0x2):_0x58d96f[_0x1ec0b9(0x18d)]());throw _0x58d96f;}}async['proceedCommitsToRepository'](_0x4194f8){const _0x4a5443=a233_0x5216fc;for(const _0x265580 of _0x4194f8){if(!_0x265580['inserted'][_0x4a5443(0x17a)]&&!_0x265580[_0x4a5443(0x172)]['length']&&!_0x265580[_0x4a5443(0x18c)][_0x4a5443(0x17a)])continue;const _0x5286c9=[],_0x3d8732=[],_0x247715=new salesforce_components_manager_service_1[(_0x4a5443(0x186))](this[_0x4a5443(0x1ab)][_0x4a5443(0x19d)],this['options'][_0x4a5443(0x178)],_0x265580[_0x4a5443(0x190)],this['options'][_0x4a5443(0x1a6)],this[_0x4a5443(0x1ac)]);_0x5286c9[_0x4a5443(0x173)](...await _0x247715[_0x4a5443(0x17e)](_0x265580['inserted'],this[_0x4a5443(0x1ab)][_0x4a5443(0x16f)])),_0x5286c9[_0x4a5443(0x173)](...await _0x247715[_0x4a5443(0x193)](_0x265580[_0x4a5443(0x172)],this['options'][_0x4a5443(0x16f)])),_0x3d8732['push'](await _0x247715['delete'](_0x265580[_0x4a5443(0x18c)],!![])),this[_0x4a5443(0x1ac)]=_0x247715[_0x4a5443(0x18f)](),await this[_0x4a5443(0x19a)](_0x5286c9,!![]);for(const _0x211d25 of _0x3d8732){_0x211d25[_0x4a5443(0x16d)][_0x4a5443(0x17a)]&&await this[_0x4a5443(0x19a)](_0x211d25[_0x4a5443(0x16d)],!![]),_0x211d25[_0x4a5443(0x194)]['length']&&await this[_0x4a5443(0x19a)](_0x211d25[_0x4a5443(0x194)],!![]),_0x211d25[_0x4a5443(0x176)]['length']&&await this['proceedRequests'](_0x211d25[_0x4a5443(0x176)],!![]);}this[_0x4a5443(0x18b)][_0x4a5443(0x19b)]('have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(repository)',_0x5286c9[_0x4a5443(0x17a)]);}}async[a233_0x5216fc(0x16e)](_0x394610){const _0x20dd67=a233_0x5216fc,_0x34452e=[],_0x51fcb4=[];for(const _0x5d3271 of _0x394610){if(!_0x5d3271[_0x20dd67(0x1a4)][_0x20dd67(0x17a)]&&!_0x5d3271['modified']['length']&&!_0x5d3271[_0x20dd67(0x18c)][_0x20dd67(0x17a)])continue;const _0x384cb9=new salesforce_components_manager_service_1[(_0x20dd67(0x186))](this[_0x20dd67(0x1ab)]['repositoryId'],this['options'][_0x20dd67(0x178)],_0x5d3271[_0x20dd67(0x190)],this[_0x20dd67(0x1ab)]['recordTypes'],[]);_0x34452e[_0x20dd67(0x173)](...await _0x384cb9[_0x20dd67(0x17e)](_0x5d3271[_0x20dd67(0x1a4)])),_0x34452e[_0x20dd67(0x173)](...await _0x384cb9[_0x20dd67(0x193)](_0x5d3271['modified'])),_0x51fcb4[_0x20dd67(0x173)](await _0x384cb9['delete'](_0x5d3271[_0x20dd67(0x18c)]));}this[_0x20dd67(0x18b)]['log'](_0x20dd67(0x1a1),_0x34452e['length']),await this[_0x20dd67(0x19a)](_0x34452e);const _0x32f194=_0x51fcb4[_0x20dd67(0x18a)]((_0x2f11a,_0x2ab741)=>({'manifests':[..._0x2f11a[_0x20dd67(0x16d)],..._0x2ab741[_0x20dd67(0x16d)]],'componentsToDelete':[..._0x2f11a[_0x20dd67(0x176)],..._0x2ab741[_0x20dd67(0x176)]],'componentsToUpdate':[..._0x2f11a[_0x20dd67(0x194)],..._0x2ab741[_0x20dd67(0x194)]]}),{'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]});_0x32f194['manifests'][_0x20dd67(0x17a)]&&await this[_0x20dd67(0x19a)](_0x32f194[_0x20dd67(0x16d)],!![]),_0x32f194[_0x20dd67(0x194)]['length']&&await this['proceedRequests'](_0x32f194['componentsToUpdate'],!![]),_0x32f194[_0x20dd67(0x176)][_0x20dd67(0x17a)]&&await this['proceedRequests'](_0x32f194['componentsToDelete'],!![]);}async['proceedCommits'](_0x3ca71e){const _0x2471d6=a233_0x5216fc;this[_0x2471d6(0x1ab)]['branchId']?await this['proceedCommitsToBranch'](_0x3ca71e):await this[_0x2471d6(0x1a7)](_0x3ca71e);}}exports[a233_0x5216fc(0x17c)]=SalesforceCommitsManager;