const a176_0xd92afb=a176_0x25f3;(function(_0x1c1a8a,_0x58f1b0){const _0x2fd515=a176_0x25f3,_0x135f13=_0x1c1a8a();while(!![]){try{const _0x43f7db=-parseInt(_0x2fd515(0x159))/0x1+parseInt(_0x2fd515(0x161))/0x2*(parseInt(_0x2fd515(0x15b))/0x3)+parseInt(_0x2fd515(0x13c))/0x4+-parseInt(_0x2fd515(0x17b))/0x5+-parseInt(_0x2fd515(0x14f))/0x6*(parseInt(_0x2fd515(0x17a))/0x7)+-parseInt(_0x2fd515(0x148))/0x8*(parseInt(_0x2fd515(0x141))/0x9)+-parseInt(_0x2fd515(0x169))/0xa*(-parseInt(_0x2fd515(0x14d))/0xb);if(_0x43f7db===_0x58f1b0)break;else _0x135f13['push'](_0x135f13['shift']());}catch(_0x4f5ff6){_0x135f13['push'](_0x135f13['shift']());}}}(a176_0x48ca,0xb1024));const a176_0x658985=(function(){let _0x2aa72e=!![];return function(_0x40e607,_0x3bba12){const _0x7e2222=_0x2aa72e?function(){if(_0x3bba12){const _0x1c95ac=_0x3bba12['apply'](_0x40e607,arguments);return _0x3bba12=null,_0x1c95ac;}}:function(){};return _0x2aa72e=![],_0x7e2222;};}()),a176_0x24e2e9=a176_0x658985(this,function(){const _0x20d7cd=a176_0x25f3;return a176_0x24e2e9[_0x20d7cd(0x165)]()[_0x20d7cd(0x135)](_0x20d7cd(0x160))[_0x20d7cd(0x165)]()['constructor'](a176_0x24e2e9)[_0x20d7cd(0x135)](_0x20d7cd(0x160));});a176_0x24e2e9();'use strict';function a176_0x25f3(_0x295299,_0x3eff06){const _0x44cb9a=a176_0x48ca();return a176_0x25f3=function(_0x24e2e9,_0x658985){_0x24e2e9=_0x24e2e9-0x131;let _0x48cad3=_0x44cb9a[_0x24e2e9];return _0x48cad3;},a176_0x25f3(_0x295299,_0x3eff06);}var __importDefault=this&&this[a176_0xd92afb(0x173)]||function(_0x2eeabf){const _0x20ba7b=a176_0xd92afb;return _0x2eeabf&&_0x2eeabf[_0x20ba7b(0x149)]?_0x2eeabf:{'default':_0x2eeabf};};Object[a176_0xd92afb(0x162)](exports,a176_0xd92afb(0x149),{'value':!![]}),exports[a176_0xd92afb(0x155)]=void 0x0;const core_1=require(a176_0xd92afb(0x164)),typedi_1=__importDefault(require(a176_0xd92afb(0x13e))),constants_1=require(a176_0xd92afb(0x138)),utils_1=require(a176_0xd92afb(0x168)),salesforce_error_1=require(a176_0xd92afb(0x178)),composite_utils_1=require(a176_0xd92afb(0x137)),salesforce_components_manager_service_1=require('./salesforce-components-manager.service'),salesforce_composite_service_1=require(a176_0xd92afb(0x14c)),salesforce_git_sync_service_1=require(a176_0xd92afb(0x146));class SalesforceCommitsManager{constructor(_0x1424d1){const _0x1cdbeb=a176_0xd92afb;this[_0x1cdbeb(0x16f)]=_0x1424d1,this[_0x1cdbeb(0x172)]=0x3,this[_0x1cdbeb(0x14b)]=new core_1[(_0x1cdbeb(0x139))](SalesforceCommitsManager[_0x1cdbeb(0x13f)]),this['sfLogger']=this['options'][_0x1cdbeb(0x14b)],this['composite']=typedi_1[_0x1cdbeb(0x166)][_0x1cdbeb(0x167)](salesforce_composite_service_1[_0x1cdbeb(0x145)]),this[_0x1cdbeb(0x174)]=typedi_1[_0x1cdbeb(0x166)]['get'](salesforce_git_sync_service_1[_0x1cdbeb(0x170)]),this['proceededComponentsMeta']=[];}async[a176_0xd92afb(0x131)](_0x4cb914,_0xd09529=![]){const _0x187cc3=a176_0xd92afb,_0x149457=(this[_0x187cc3(0x172)]+ +_0xd09529)*0x3,_0x37f5c0=utils_1[_0x187cc3(0x15c)](_0x4cb914,_0x149457);try{while(_0x37f5c0[_0x187cc3(0x133)]){const _0x58ab3d=_0x37f5c0[_0x187cc3(0x14e)](0x0,Math[_0x187cc3(0x15e)](constants_1[_0x187cc3(0x157)]/_0x149457));await this['sfLogger']['log'](_0x187cc3(0x142)+_0x58ab3d['length']*_0x149457+_0x187cc3(0x147))[_0x187cc3(0x151)]();const _0x44aadb=_0x58ab3d[_0x187cc3(0x14a)]((_0x4973ad,_0x2fecd3)=>({'graphId':_0x187cc3(0x13a)+_0x2fecd3,'compositeRequest':_0x4973ad})),_0x4111b2=await this[_0x187cc3(0x158)][_0x187cc3(0x15f)](_0x44aadb);if(_0xd09529){const _0x13e5f7=composite_utils_1['extractComponentIdsFromGraphsResponse'](_0x4111b2);for(const {id:_0x2784c2,ref:_0x1b20ba}of _0x13e5f7){const _0x3e631a=this['proceededComponentsMeta']['find'](_0x28a23f=>_0x28a23f['reference']===_0x1b20ba);_0x3e631a&&(_0x3e631a['componentId']=_0x2784c2);}}}}catch(_0x33fdbb){this[_0x187cc3(0x14b)][_0x187cc3(0x15d)](_0x33fdbb instanceof salesforce_error_1[_0x187cc3(0x140)]?JSON[_0x187cc3(0x154)](_0x33fdbb['toJSON'](),null,0x2):_0x33fdbb),this[_0x187cc3(0x152)]['log'](_0x33fdbb instanceof salesforce_error_1[_0x187cc3(0x140)]?JSON[_0x187cc3(0x154)](_0x33fdbb['toJSON'](),null,0x2):_0x33fdbb[_0x187cc3(0x165)]());throw _0x33fdbb;}}async[a176_0xd92afb(0x150)](_0x35fcf0){const _0x2b994a=a176_0xd92afb;for(const _0x39ae8b of _0x35fcf0){if(!_0x39ae8b[_0x2b994a(0x132)][_0x2b994a(0x133)]&&!_0x39ae8b[_0x2b994a(0x163)][_0x2b994a(0x133)]&&!_0x39ae8b['removed'][_0x2b994a(0x133)])continue;const _0xa53fc5=[],_0x739dbe=[],_0x1d53dc=new salesforce_components_manager_service_1[(_0x2b994a(0x171))](this['options'][_0x2b994a(0x16b)],this[_0x2b994a(0x16f)][_0x2b994a(0x134)],_0x39ae8b[_0x2b994a(0x16d)],this['options'][_0x2b994a(0x175)],this['proceededComponentsMeta']);_0xa53fc5[_0x2b994a(0x176)](...await _0x1d53dc[_0x2b994a(0x179)](_0x39ae8b['inserted'],this[_0x2b994a(0x16f)]['commitId'])),_0xa53fc5['push'](...await _0x1d53dc[_0x2b994a(0x143)](_0x39ae8b['modified'],this[_0x2b994a(0x16f)][_0x2b994a(0x136)])),_0x739dbe['push'](await _0x1d53dc[_0x2b994a(0x156)](_0x39ae8b['removed'],!![])),this['proceededComponentsMeta']=_0x1d53dc[_0x2b994a(0x153)](),await this[_0x2b994a(0x131)](_0xa53fc5,!![]);for(const _0x43b02e of _0x739dbe){_0x43b02e['manifests'][_0x2b994a(0x133)]&&await this['proceedRequests'](_0x43b02e['manifests'],!![]),_0x43b02e['componentsToUpdate'][_0x2b994a(0x133)]&&await this[_0x2b994a(0x131)](_0x43b02e[_0x2b994a(0x13d)],!![]),_0x43b02e['componentsToDelete'][_0x2b994a(0x133)]&&await this[_0x2b994a(0x131)](_0x43b02e['componentsToDelete'],!![]);}this[_0x2b994a(0x14b)]['log']('have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(repository)',_0xa53fc5[_0x2b994a(0x133)]);}}async['proceedCommitsToBranch'](_0x5a65a3){const _0x3d044a=a176_0xd92afb,_0x242a92=[],_0x1251e4=[];for(const _0xe0f91e of _0x5a65a3){if(!_0xe0f91e['inserted'][_0x3d044a(0x133)]&&!_0xe0f91e[_0x3d044a(0x163)][_0x3d044a(0x133)]&&!_0xe0f91e[_0x3d044a(0x16e)]['length'])continue;const _0x216c39=new salesforce_components_manager_service_1[(_0x3d044a(0x171))](this['options'][_0x3d044a(0x16b)],this[_0x3d044a(0x16f)][_0x3d044a(0x134)],_0xe0f91e['author'],this['options']['recordTypes'],[]);_0x242a92['push'](...await _0x216c39[_0x3d044a(0x179)](_0xe0f91e[_0x3d044a(0x132)])),_0x242a92[_0x3d044a(0x176)](...await _0x216c39[_0x3d044a(0x143)](_0xe0f91e[_0x3d044a(0x163)])),_0x1251e4[_0x3d044a(0x176)](await _0x216c39[_0x3d044a(0x156)](_0xe0f91e[_0x3d044a(0x16e)]));}this['logger'][_0x3d044a(0x16a)](_0x3d044a(0x13b),_0x242a92[_0x3d044a(0x133)]),await this[_0x3d044a(0x131)](_0x242a92);const _0x1f8f6e=_0x1251e4['reduce']((_0x223573,_0x5e89ab)=>({'manifests':[..._0x223573[_0x3d044a(0x177)],..._0x5e89ab[_0x3d044a(0x177)]],'componentsToDelete':[..._0x223573[_0x3d044a(0x144)],..._0x5e89ab[_0x3d044a(0x144)]],'componentsToUpdate':[..._0x223573['componentsToUpdate'],..._0x5e89ab[_0x3d044a(0x13d)]]}),{'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]});_0x1f8f6e[_0x3d044a(0x177)][_0x3d044a(0x133)]&&await this[_0x3d044a(0x131)](_0x1f8f6e[_0x3d044a(0x177)],!![]),_0x1f8f6e[_0x3d044a(0x13d)][_0x3d044a(0x133)]&&await this[_0x3d044a(0x131)](_0x1f8f6e[_0x3d044a(0x13d)],!![]),_0x1f8f6e[_0x3d044a(0x144)][_0x3d044a(0x133)]&&await this[_0x3d044a(0x131)](_0x1f8f6e[_0x3d044a(0x144)],!![]);}async[a176_0xd92afb(0x15a)](_0x407ba8){const _0x3cf669=a176_0xd92afb;this[_0x3cf669(0x16f)][_0x3cf669(0x134)]?await this[_0x3cf669(0x16c)](_0x407ba8):await this[_0x3cf669(0x150)](_0x407ba8);}}exports[a176_0xd92afb(0x155)]=SalesforceCommitsManager;function a176_0x48ca(){const _0x3a1016=['search','commitId','../utils/composite.utils','../../../../constants','Logger','graph','have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(branch)','1646676IJBwPM','componentsToUpdate','typedi','name','SalesforceError','252594nsgRpF','Sending\x20','update','componentsToDelete','SalesforceCompositeService','./salesforce-git-sync.service','\x20requests\x20to\x20composite\x20api.','48VxuGDN','__esModule','map','logger','./salesforce-composite.service','11CgKztR','splice','436008amHZcT','proceedCommitsToRepository','send','sfLogger','getProceededComponentsMeta','stringify','SalesforceCommitsManager','delete','SALESFORCE_MAX_GRAPH_NODES_PER_REQUEST','composite','740443GqExCD','proceedCommits','3UMWFfT','chunkArray','error','floor','executeGraphs','(((.+)+)+)+$','477038VxYywO','defineProperty','modified','../../../../core','toString','default','get','../../../shared/utils','37403120KNswEa','log','repositoryId','proceedCommitsToBranch','author','removed','options','SalesforceGitSyncService','SalesforceComponentsManager','COMPONENTS_PER_CHUNK','__importDefault','gitSync','recordTypes','push','manifests','../errors/salesforce.error','insert','133kKJfeY','6879705lypjVX','proceedRequests','inserted','length','branchId'];a176_0x48ca=function(){return _0x3a1016;};return a176_0x48ca();}