const a300_0x3bc330=a300_0xe3db;(function(_0x385fe4,_0x2459af){const _0x3eda5b=a300_0xe3db,_0x25f830=_0x385fe4();while(!![]){try{const _0x54ba27=-parseInt(_0x3eda5b(0x1fa))/0x1+parseInt(_0x3eda5b(0x1fc))/0x2*(-parseInt(_0x3eda5b(0x1f5))/0x3)+parseInt(_0x3eda5b(0x1cf))/0x4*(parseInt(_0x3eda5b(0x1e3))/0x5)+parseInt(_0x3eda5b(0x1e8))/0x6*(parseInt(_0x3eda5b(0x1f0))/0x7)+parseInt(_0x3eda5b(0x1e4))/0x8*(-parseInt(_0x3eda5b(0x1c7))/0x9)+parseInt(_0x3eda5b(0x1ec))/0xa*(parseInt(_0x3eda5b(0x1e6))/0xb)+-parseInt(_0x3eda5b(0x1f3))/0xc;if(_0x54ba27===_0x2459af)break;else _0x25f830['push'](_0x25f830['shift']());}catch(_0x19130a){_0x25f830['push'](_0x25f830['shift']());}}}(a300_0x4051,0x97551));const a300_0x2fa0c7=(function(){let _0x32a6fb=!![];return function(_0x15a115,_0x3e6774){const _0x3d444c=_0x32a6fb?function(){const _0x1f8c13=a300_0xe3db;if(_0x3e6774){const _0x266610=_0x3e6774[_0x1f8c13(0x1dd)](_0x15a115,arguments);return _0x3e6774=null,_0x266610;}}:function(){};return _0x32a6fb=![],_0x3d444c;};}()),a300_0x1e6c72=a300_0x2fa0c7(this,function(){const _0x4ed01b=a300_0xe3db;return a300_0x1e6c72[_0x4ed01b(0x1ca)]()[_0x4ed01b(0x1d6)](_0x4ed01b(0x1f6))[_0x4ed01b(0x1ca)]()['constructor'](a300_0x1e6c72)[_0x4ed01b(0x1d6)]('(((.+)+)+)+$');});a300_0x1e6c72();function a300_0xe3db(_0x9cca2c,_0x263745){const _0x19b1da=a300_0x4051();return a300_0xe3db=function(_0x1e6c72,_0x2fa0c7){_0x1e6c72=_0x1e6c72-0x1c5;let _0x40510b=_0x19b1da[_0x1e6c72];return _0x40510b;},a300_0xe3db(_0x9cca2c,_0x263745);}'use strict';Object[a300_0x3bc330(0x1e5)](exports,a300_0x3bc330(0x1d1),{'value':!![]}),exports[a300_0x3bc330(0x1eb)]=void 0x0;function a300_0x4051(){const _0x3b440a=['getComponentFromFlosum','\x20components','andWhere','Source_Member_Id__c','245277DYzQHF','\x20=\x20:targetOrgId','logger','toString','where','instance','Changes\x20found\x20for\x20','MemberIdOrName','4902068HyQecR','get','__esModule','sourceMemberRecords','execute','handledMembersCounter','from','search','size','addToChunk','CompositeRetrieveData','ChangedBy','api','targetOrgId','apply','ORG_COMPONENT_OBJECT_NAME','select','_flush','Folder__c','OrganisationName__c','5btTTdg','304eBEGSz','defineProperty','340593mgAqqN','getIsDone','102Lcxjiq','Revision_Counter__c','QueryBuilder','SourceMemberHandler','70CnELWV','../../constants','API_Name__c','RevisionCounter','288141uhHNZu','handle','../../../../constants','219312KZwTlL','push','3AAjszO','(((.+)+)+)+$','MemberType','@flosum/salesforce','set','323509OKvvyG','\x20IN\x20(:sourceMemberIds)','289546kggSOZ','FLOSUM_NAMESPACE'];a300_0x4051=function(){return _0x3b440a;};return a300_0x4051();}const stream_1=require('stream'),salesforce_1=require(a300_0x3bc330(0x1f8)),constants_1=require(a300_0x3bc330(0x1ed)),constants_2=require(a300_0x3bc330(0x1f2)),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a300_0x3bc330(0x1ef),IS_NAME_OBSOLETE='IsNameObsolete',MEMBER_ID_FIELD_NAME=a300_0x3bc330(0x1ce),MEMBER_TYPE_FIELD_NAME=a300_0x3bc330(0x1f7),CHANGED_BY_FIELD_NAME=a300_0x3bc330(0x1da),SOURCE_MEMBER_ID_FIELD_NAME=constants_2[a300_0x3bc330(0x1fd)]+a300_0x3bc330(0x1c6),ORGANIZATION_NAME_FIELD=constants_2[a300_0x3bc330(0x1fd)]+a300_0x3bc330(0x1e2),REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2[a300_0x3bc330(0x1fd)]+a300_0x3bc330(0x1e9),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2[a300_0x3bc330(0x1fd)]+a300_0x3bc330(0x1e9),constants_2[a300_0x3bc330(0x1fd)]+'Component_Type__c',constants_2[a300_0x3bc330(0x1fd)]+a300_0x3bc330(0x1ee),constants_2[a300_0x3bc330(0x1fd)]+'Name__c',constants_2['FLOSUM_NAMESPACE']+a300_0x3bc330(0x1c6),constants_2['FLOSUM_NAMESPACE']+'OrganisationName__c',constants_2[a300_0x3bc330(0x1fd)]+'Attachment_ID__c',constants_2[a300_0x3bc330(0x1fd)]+a300_0x3bc330(0x1e1)];class SourceMemberHandler extends stream_1['Transform']{constructor({apiVersion:_0x200293,instance:_0x19a564,targetOrgId:_0x2a5046,logger:_0x2983a5}){const _0xaa4c9f=a300_0x3bc330;super({'objectMode':!![]}),this[_0xaa4c9f(0x1d2)]=new Map(),this[_0xaa4c9f(0x1d4)]=0x0,this['api']=_0x200293,this['instance']=_0x19a564,this['targetOrgId']=_0x2a5046,this[_0xaa4c9f(0x1c9)]=_0x2983a5;}['buildOrgComponentQuery'](){const _0x5a3e01=a300_0x3bc330;return new salesforce_1[(_0x5a3e01(0x1ea))]()[_0x5a3e01(0x1df)](...ORG_COMPONENT_SELECT_FIELDS)[_0x5a3e01(0x1d5)](constants_1[_0x5a3e01(0x1de)])[_0x5a3e01(0x1cb)](SOURCE_MEMBER_ID_FIELD_NAME+_0x5a3e01(0x1fb),{'sourceMemberIds':[...this['sourceMemberRecords']['keys']()]})[_0x5a3e01(0x1c5)](ORGANIZATION_NAME_FIELD+_0x5a3e01(0x1c8),{'targetOrgId':this[_0x5a3e01(0x1dc)]});}async[a300_0x3bc330(0x1fe)](){const _0x2607e6=a300_0x3bc330,_0x251c68=new salesforce_1[(_0x2607e6(0x1d9))]({'api':this[_0x2607e6(0x1db)],'queryBuilder':this['buildOrgComponentQuery'](),'instance':this[_0x2607e6(0x1cc)],'isTooling':![]}),_0x408651=new Map();do{const {records:_0x579dac}=await _0x251c68[_0x2607e6(0x1d3)]();for(const _0x5d9f17 of _0x579dac){_0x408651[_0x2607e6(0x1f9)](_0x5d9f17[SOURCE_MEMBER_ID_FIELD_NAME],_0x5d9f17);}}while(!_0x251c68[_0x2607e6(0x1e7)]());return _0x408651;}async[a300_0x3bc330(0x1d8)](_0x5a3e5d){const _0x469b36=a300_0x3bc330;this[_0x469b36(0x1d2)]['set'](_0x5a3e5d['Id'],_0x5a3e5d),this[_0x469b36(0x1d2)][_0x469b36(0x1d7)]===MAX_CHUNK_SIZE&&await this[_0x469b36(0x1f1)]();}async[a300_0x3bc330(0x1f1)](){const _0x454361=a300_0x3bc330,_0x19755e=await this[_0x454361(0x1fe)]();for(const [_0x268860,_0x163bb3]of this[_0x454361(0x1d2)]){const _0x2b165a=_0x19755e[_0x454361(0x1d0)](_0x268860);if(_0x2b165a&&_0x163bb3[REVISION_COUNTER_FIELD_NAME]===_0x2b165a[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x7f1b69={'sourceMemberId':_0x163bb3['Id'],'componentId':(_0x2b165a===null||_0x2b165a===void 0x0?void 0x0:_0x2b165a['Id'])||null,'attachmentId':(_0x2b165a===null||_0x2b165a===void 0x0?void 0x0:_0x2b165a['Attachment_ID__c'])||null,'metadataId':_0x163bb3[MEMBER_ID_FIELD_NAME],'metadataType':_0x163bb3[MEMBER_TYPE_FIELD_NAME],'isNameObsolete':_0x163bb3[IS_NAME_OBSOLETE],'revisionCounter':_0x163bb3[REVISION_COUNTER_FIELD_NAME],'changedBy':_0x163bb3[CHANGED_BY_FIELD_NAME]};this[_0x454361(0x1d4)]++,this[_0x454361(0x1f4)](_0x7f1b69);}this[_0x454361(0x1d2)]=new Map();}async['_transform'](_0x4bb4f8,_0x47d424,_0x2da296){const _0x562d49=a300_0x3bc330;try{await this[_0x562d49(0x1d8)](_0x4bb4f8),_0x2da296();}catch(_0x28d614){_0x2da296(_0x28d614);}}async[a300_0x3bc330(0x1e0)](_0x5a876d){const _0x53c6e3=a300_0x3bc330;try{this[_0x53c6e3(0x1d2)][_0x53c6e3(0x1d7)]&&await this[_0x53c6e3(0x1f1)](),this[_0x53c6e3(0x1c9)]['log'](_0x53c6e3(0x1cd)+this[_0x53c6e3(0x1d4)]+_0x53c6e3(0x1ff)),await this[_0x53c6e3(0x1c9)]['update'](),_0x5a876d();}catch(_0x1345c4){_0x5a876d(_0x1345c4);}}}exports[a300_0x3bc330(0x1eb)]=SourceMemberHandler;