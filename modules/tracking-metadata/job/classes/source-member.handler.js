const a300_0x4c2f2a=a300_0x4d53;function a300_0x1b55(){const _0x36ad4d=['Revision_Counter__c','QueryBuilder','get','search','1405vWzQas','set','MemberType','getIsDone','api','RevisionCounter','execute','select','165592XApgjZ','51139YKkBcH','\x20IN\x20(:sourceMemberIds)','logger','__esModule','24Oeplkj','\x20=\x20:targetOrgId','sourceMemberRecords','log','size','stream','@flosum/salesforce','instance','addToChunk','defineProperty','update','Folder__c','../../../../constants','680qSRvLC','Name__c','Source_Member_Id__c','IsNameObsolete','MemberIdOrName','CompositeRetrieveData','1274864HKEhet','Transform','(((.+)+)+)+$','Component_Type__c','3sgIUXL','_transform','SourceMemberHandler','FLOSUM_NAMESPACE','buildOrgComponentQuery','andWhere','399258kanbpL','2325841fzarBj','targetOrgId','7164ZshROw','ChangedBy','where','Attachment_ID__c','getComponentFromFlosum','Changes\x20found\x20for\x20','handle','apply','31001xlTMae'];a300_0x1b55=function(){return _0x36ad4d;};return a300_0x1b55();}(function(_0x35a946,_0x3a95f3){const _0x2e2d28=a300_0x4d53,_0x392ac0=_0x35a946();while(!![]){try{const _0x556e99=parseInt(_0x2e2d28(0x1cb))/0x1*(parseInt(_0x2e2d28(0x1a3))/0x2)+-parseInt(_0x2e2d28(0x1ba))/0x3*(parseInt(_0x2e2d28(0x19e))/0x4)+-parseInt(_0x2e2d28(0x196))/0x5*(-parseInt(_0x2e2d28(0x1c3))/0x6)+-parseInt(_0x2e2d28(0x1c1))/0x7+parseInt(_0x2e2d28(0x1b6))/0x8+parseInt(_0x2e2d28(0x1c0))/0x9+parseInt(_0x2e2d28(0x1b0))/0xa*(-parseInt(_0x2e2d28(0x19f))/0xb);if(_0x556e99===_0x3a95f3)break;else _0x392ac0['push'](_0x392ac0['shift']());}catch(_0x26ed15){_0x392ac0['push'](_0x392ac0['shift']());}}}(a300_0x1b55,0x3610d));const a300_0x6a7c45=(function(){let _0x2cf63c=!![];return function(_0x5139c4,_0x16140e){const _0x4182b7=_0x2cf63c?function(){const _0x49852b=a300_0x4d53;if(_0x16140e){const _0x45d752=_0x16140e[_0x49852b(0x1ca)](_0x5139c4,arguments);return _0x16140e=null,_0x45d752;}}:function(){};return _0x2cf63c=![],_0x4182b7;};}()),a300_0x14d355=a300_0x6a7c45(this,function(){const _0x62135b=a300_0x4d53;return a300_0x14d355['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](a300_0x14d355)[_0x62135b(0x195)](_0x62135b(0x1b8));});a300_0x14d355();'use strict';function a300_0x4d53(_0x4d4088,_0x40ff00){const _0x54c02b=a300_0x1b55();return a300_0x4d53=function(_0x14d355,_0x6a7c45){_0x14d355=_0x14d355-0x194;let _0x1b5597=_0x54c02b[_0x14d355];return _0x1b5597;},a300_0x4d53(_0x4d4088,_0x40ff00);}Object[a300_0x4c2f2a(0x1ac)](exports,a300_0x4c2f2a(0x1a2),{'value':!![]}),exports[a300_0x4c2f2a(0x1bc)]=void 0x0;const stream_1=require(a300_0x4c2f2a(0x1a8)),salesforce_1=require(a300_0x4c2f2a(0x1a9)),constants_1=require('../../constants'),constants_2=require(a300_0x4c2f2a(0x1af)),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a300_0x4c2f2a(0x19b),IS_NAME_OBSOLETE=a300_0x4c2f2a(0x1b3),MEMBER_ID_FIELD_NAME=a300_0x4c2f2a(0x1b4),MEMBER_TYPE_FIELD_NAME=a300_0x4c2f2a(0x198),CHANGED_BY_FIELD_NAME=a300_0x4c2f2a(0x1c4),SOURCE_MEMBER_ID_FIELD_NAME=constants_2[a300_0x4c2f2a(0x1bd)]+a300_0x4c2f2a(0x1b2),ORGANIZATION_NAME_FIELD=constants_2[a300_0x4c2f2a(0x1bd)]+'OrganisationName__c',REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2[a300_0x4c2f2a(0x1bd)]+a300_0x4c2f2a(0x1cc),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2['FLOSUM_NAMESPACE']+a300_0x4c2f2a(0x1cc),constants_2[a300_0x4c2f2a(0x1bd)]+a300_0x4c2f2a(0x1b9),constants_2[a300_0x4c2f2a(0x1bd)]+'API_Name__c',constants_2[a300_0x4c2f2a(0x1bd)]+a300_0x4c2f2a(0x1b1),constants_2[a300_0x4c2f2a(0x1bd)]+a300_0x4c2f2a(0x1b2),constants_2[a300_0x4c2f2a(0x1bd)]+'OrganisationName__c',constants_2[a300_0x4c2f2a(0x1bd)]+a300_0x4c2f2a(0x1c6),constants_2[a300_0x4c2f2a(0x1bd)]+a300_0x4c2f2a(0x1ae)];class SourceMemberHandler extends stream_1[a300_0x4c2f2a(0x1b7)]{constructor({apiVersion:_0x1ac7bd,instance:_0x20131a,targetOrgId:_0x42c9c6,logger:_0x514d43}){const _0x40c6df=a300_0x4c2f2a;super({'objectMode':!![]}),this[_0x40c6df(0x1a5)]=new Map(),this['handledMembersCounter']=0x0,this[_0x40c6df(0x19a)]=_0x1ac7bd,this[_0x40c6df(0x1aa)]=_0x20131a,this[_0x40c6df(0x1c2)]=_0x42c9c6,this[_0x40c6df(0x1a1)]=_0x514d43;}['buildOrgComponentQuery'](){const _0x303df2=a300_0x4c2f2a;return new salesforce_1[(_0x303df2(0x1cd))]()[_0x303df2(0x19d)](...ORG_COMPONENT_SELECT_FIELDS)['from'](constants_1['ORG_COMPONENT_OBJECT_NAME'])[_0x303df2(0x1c5)](SOURCE_MEMBER_ID_FIELD_NAME+_0x303df2(0x1a0),{'sourceMemberIds':[...this[_0x303df2(0x1a5)]['keys']()]})[_0x303df2(0x1bf)](ORGANIZATION_NAME_FIELD+_0x303df2(0x1a4),{'targetOrgId':this['targetOrgId']});}async[a300_0x4c2f2a(0x1c7)](){const _0x4a0955=a300_0x4c2f2a,_0x295600=new salesforce_1[(_0x4a0955(0x1b5))]({'api':this[_0x4a0955(0x19a)],'queryBuilder':this[_0x4a0955(0x1be)](),'instance':this['instance'],'isTooling':![]}),_0x1f8ac2=new Map();do{const {records:_0x1ab4fc}=await _0x295600[_0x4a0955(0x19c)]();for(const _0x306228 of _0x1ab4fc){_0x1f8ac2['set'](_0x306228[SOURCE_MEMBER_ID_FIELD_NAME],_0x306228);}}while(!_0x295600[_0x4a0955(0x199)]());return _0x1f8ac2;}async[a300_0x4c2f2a(0x1ab)](_0x317ffe){const _0x236404=a300_0x4c2f2a;this['sourceMemberRecords'][_0x236404(0x197)](_0x317ffe['Id'],_0x317ffe),this[_0x236404(0x1a5)][_0x236404(0x1a7)]===MAX_CHUNK_SIZE&&await this['handle']();}async[a300_0x4c2f2a(0x1c9)](){const _0x41babc=a300_0x4c2f2a,_0x51cad0=await this['getComponentFromFlosum']();for(const [_0x1a1fac,_0x475226]of this[_0x41babc(0x1a5)]){const _0x36afcb=_0x51cad0[_0x41babc(0x194)](_0x1a1fac);if(_0x36afcb&&_0x475226[REVISION_COUNTER_FIELD_NAME]===_0x36afcb[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x5f5c3f={'sourceMemberId':_0x475226['Id'],'componentId':(_0x36afcb===null||_0x36afcb===void 0x0?void 0x0:_0x36afcb['Id'])||null,'attachmentId':(_0x36afcb===null||_0x36afcb===void 0x0?void 0x0:_0x36afcb[_0x41babc(0x1c6)])||null,'metadataId':_0x475226[MEMBER_ID_FIELD_NAME],'metadataType':_0x475226[MEMBER_TYPE_FIELD_NAME],'isNameObsolete':_0x475226[IS_NAME_OBSOLETE],'revisionCounter':_0x475226[REVISION_COUNTER_FIELD_NAME],'changedBy':_0x475226[CHANGED_BY_FIELD_NAME]};this['handledMembersCounter']++,this['push'](_0x5f5c3f);}this['sourceMemberRecords']=new Map();}async[a300_0x4c2f2a(0x1bb)](_0x498a74,_0x5d82c5,_0xb94a39){try{await this['addToChunk'](_0x498a74),_0xb94a39();}catch(_0x16a0d7){_0xb94a39(_0x16a0d7);}}async['_flush'](_0x2c4287){const _0x4e17ca=a300_0x4c2f2a;try{this[_0x4e17ca(0x1a5)][_0x4e17ca(0x1a7)]&&await this['handle'](),this[_0x4e17ca(0x1a1)][_0x4e17ca(0x1a6)](_0x4e17ca(0x1c8)+this['handledMembersCounter']+'\x20components'),await this[_0x4e17ca(0x1a1)][_0x4e17ca(0x1ad)](),_0x2c4287();}catch(_0x5d6295){_0x2c4287(_0x5d6295);}}}exports[a300_0x4c2f2a(0x1bc)]=SourceMemberHandler;