const a344_0x39be8b=a344_0x3bed;function a344_0x3bed(_0xf26e80,_0x9c5a6b){const _0x2ee2ee=a344_0x5e41();return a344_0x3bed=function(_0x61ee15,_0x4c58c4){_0x61ee15=_0x61ee15-0xd7;let _0x5e413c=_0x2ee2ee[_0x61ee15];return _0x5e413c;},a344_0x3bed(_0xf26e80,_0x9c5a6b);}(function(_0x295e8c,_0x379fda){const _0x58efa7=a344_0x3bed,_0x41d08a=_0x295e8c();while(!![]){try{const _0x168608=parseInt(_0x58efa7(0x109))/0x1+-parseInt(_0x58efa7(0xfe))/0x2+-parseInt(_0x58efa7(0xee))/0x3*(-parseInt(_0x58efa7(0x10f))/0x4)+-parseInt(_0x58efa7(0xe6))/0x5*(-parseInt(_0x58efa7(0xe2))/0x6)+-parseInt(_0x58efa7(0x106))/0x7+-parseInt(_0x58efa7(0xeb))/0x8+parseInt(_0x58efa7(0xf2))/0x9*(parseInt(_0x58efa7(0x105))/0xa);if(_0x168608===_0x379fda)break;else _0x41d08a['push'](_0x41d08a['shift']());}catch(_0x2104d3){_0x41d08a['push'](_0x41d08a['shift']());}}}(a344_0x5e41,0x9d773));const a344_0x4c58c4=(function(){let _0x5a41d5=!![];return function(_0x51e06f,_0x13d040){const _0x172aff=_0x5a41d5?function(){const _0x467981=a344_0x3bed;if(_0x13d040){const _0x51de4a=_0x13d040[_0x467981(0x107)](_0x51e06f,arguments);return _0x13d040=null,_0x51de4a;}}:function(){};return _0x5a41d5=![],_0x172aff;};}()),a344_0x61ee15=a344_0x4c58c4(this,function(){const _0x16999b=a344_0x3bed;return a344_0x61ee15[_0x16999b(0x10d)]()[_0x16999b(0xfc)](_0x16999b(0x110))[_0x16999b(0x10d)]()[_0x16999b(0xf8)](a344_0x61ee15)['search'](_0x16999b(0x110));});function a344_0x5e41(){const _0xbff6be=['_transform','size','Name__c','Revision_Counter__c','getIsDone','buildOrgComponentQuery','logger','SourceMemberHandler','getComponentFromFlosum','andWhere','ChangedBy','402THtHDM','instance','RevisionCounter','handledMembersCounter','52990nFANzv','ORG_COMPONENT_OBJECT_NAME','\x20IN\x20(:sourceMemberIds)','@flosum/salesforce','targetOrgId','5627960CRBXeG','set','OrganisationName__c','4131DhBmnB','where','api','\x20components','117eQojDI','Folder__c','select','sourceMemberRecords','_flush','QueryBuilder','constructor','Changes\x20found\x20for\x20','Source_Member_Id__c','keys','search','get','2014548ImoueD','execute','FLOSUM_NAMESPACE','Attachment_ID__c','API_Name__c','handle','\x20=\x20:targetOrgId','234700jJKtgp','1681239TXSwuN','apply','addToChunk','293254FsbMqT','push','stream','IsNameObsolete','toString','defineProperty','3740jybaAJ','(((.+)+)+)+$','log'];a344_0x5e41=function(){return _0xbff6be;};return a344_0x5e41();}a344_0x61ee15();'use strict';Object[a344_0x39be8b(0x10e)](exports,'__esModule',{'value':!![]}),exports[a344_0x39be8b(0xde)]=void 0x0;const stream_1=require(a344_0x39be8b(0x10b)),salesforce_1=require(a344_0x39be8b(0xe9)),constants_1=require('../../constants'),constants_2=require('../../../../constants'),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a344_0x39be8b(0xe4),IS_NAME_OBSOLETE=a344_0x39be8b(0x10c),MEMBER_ID_FIELD_NAME='MemberIdOrName',MEMBER_TYPE_FIELD_NAME='MemberType',MEMBER_NAME='MemberName',CHANGED_BY_FIELD_NAME=a344_0x39be8b(0xe1),SOURCE_MEMBER_ID_FIELD_NAME=constants_2[a344_0x39be8b(0x100)]+a344_0x39be8b(0xfa),ORGANIZATION_NAME_FIELD=constants_2[a344_0x39be8b(0x100)]+'OrganisationName__c',REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2['FLOSUM_NAMESPACE']+a344_0x39be8b(0xda),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2['FLOSUM_NAMESPACE']+a344_0x39be8b(0xda),constants_2['FLOSUM_NAMESPACE']+'Component_Type__c',constants_2[a344_0x39be8b(0x100)]+a344_0x39be8b(0x102),constants_2['FLOSUM_NAMESPACE']+a344_0x39be8b(0xd9),constants_2[a344_0x39be8b(0x100)]+a344_0x39be8b(0xfa),constants_2[a344_0x39be8b(0x100)]+a344_0x39be8b(0xed),constants_2[a344_0x39be8b(0x100)]+a344_0x39be8b(0x101),constants_2[a344_0x39be8b(0x100)]+a344_0x39be8b(0xf3)];class SourceMemberHandler extends stream_1['Transform']{constructor({apiVersion:_0x20f1c9,instance:_0x189a37,targetOrgId:_0x2eba23,logger:_0x39e310}){const _0x5da3b1=a344_0x39be8b;super({'objectMode':!![]}),this[_0x5da3b1(0xf5)]=new Map(),this[_0x5da3b1(0xe5)]=0x0,this[_0x5da3b1(0xf0)]=_0x20f1c9,this[_0x5da3b1(0xe3)]=_0x189a37,this[_0x5da3b1(0xea)]=_0x2eba23,this[_0x5da3b1(0xdd)]=_0x39e310;}[a344_0x39be8b(0xdc)](){const _0x5c9627=a344_0x39be8b;return new salesforce_1[(_0x5c9627(0xf7))]()[_0x5c9627(0xf4)](...ORG_COMPONENT_SELECT_FIELDS)['from'](constants_1[_0x5c9627(0xe7)])[_0x5c9627(0xef)](SOURCE_MEMBER_ID_FIELD_NAME+_0x5c9627(0xe8),{'sourceMemberIds':[...this['sourceMemberRecords'][_0x5c9627(0xfb)]()]})[_0x5c9627(0xe0)](ORGANIZATION_NAME_FIELD+_0x5c9627(0x104),{'targetOrgId':this[_0x5c9627(0xea)]});}async['getComponentFromFlosum'](){const _0x472f62=a344_0x39be8b,_0x162845=new salesforce_1['CompositeRetrieveData']({'api':this[_0x472f62(0xf0)],'queryBuilder':this[_0x472f62(0xdc)](),'instance':this[_0x472f62(0xe3)],'isTooling':![]}),_0x22174d=new Map();do{const {records:_0x2cb000}=await _0x162845[_0x472f62(0xff)]();for(const _0xf78c82 of _0x2cb000){_0x22174d[_0x472f62(0xec)](_0xf78c82[SOURCE_MEMBER_ID_FIELD_NAME],_0xf78c82);}}while(!_0x162845[_0x472f62(0xdb)]());return _0x22174d;}async['addToChunk'](_0x54f12f){const _0x2765b3=a344_0x39be8b;this[_0x2765b3(0xf5)]['set'](_0x54f12f['Id'],_0x54f12f),this[_0x2765b3(0xf5)][_0x2765b3(0xd8)]===MAX_CHUNK_SIZE&&await this[_0x2765b3(0x103)]();}async['handle'](){const _0x58f9e0=a344_0x39be8b,_0x289196=await this[_0x58f9e0(0xdf)]();for(const [_0x1f841e,_0xaaa79a]of this['sourceMemberRecords']){const _0x5443f4=_0x289196[_0x58f9e0(0xfd)](_0x1f841e);if(_0x5443f4&&_0xaaa79a[REVISION_COUNTER_FIELD_NAME]===_0x5443f4[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x5c06b1={'sourceMemberId':_0xaaa79a['Id'],'componentId':(_0x5443f4===null||_0x5443f4===void 0x0?void 0x0:_0x5443f4['Id'])||null,'attachmentId':(_0x5443f4===null||_0x5443f4===void 0x0?void 0x0:_0x5443f4[_0x58f9e0(0x101)])||null,'metadataId':_0xaaa79a[MEMBER_ID_FIELD_NAME],'metadataType':_0xaaa79a[MEMBER_TYPE_FIELD_NAME],'metadataName':_0xaaa79a[MEMBER_NAME],'isNameObsolete':_0xaaa79a[IS_NAME_OBSOLETE],'revisionCounter':_0xaaa79a[REVISION_COUNTER_FIELD_NAME],'changedBy':_0xaaa79a[CHANGED_BY_FIELD_NAME]};this[_0x58f9e0(0xe5)]++,this[_0x58f9e0(0x10a)](_0x5c06b1);}this[_0x58f9e0(0xf5)]=new Map();}async[a344_0x39be8b(0xd7)](_0x1d793e,_0xd78442,_0xc85d0){const _0x43b619=a344_0x39be8b;try{await this[_0x43b619(0x108)](_0x1d793e),_0xc85d0();}catch(_0x384dcc){_0xc85d0(_0x384dcc);}}async[a344_0x39be8b(0xf6)](_0x2cb00c){const _0x28c92c=a344_0x39be8b;try{this[_0x28c92c(0xf5)]['size']&&await this[_0x28c92c(0x103)](),this[_0x28c92c(0xdd)][_0x28c92c(0x111)](_0x28c92c(0xf9)+this[_0x28c92c(0xe5)]+_0x28c92c(0xf1)),await this['logger']['update'](),_0x2cb00c();}catch(_0x3bc77c){_0x2cb00c(_0x3bc77c);}}}exports[a344_0x39be8b(0xde)]=SourceMemberHandler;