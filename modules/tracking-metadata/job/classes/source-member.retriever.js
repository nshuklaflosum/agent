const a344_0x139c74=a344_0x4919;function a344_0xd80b(){const _0x40fcab=['buildSourceMemberQuery','1407315jZhcYJ','SourceMember','defineProperty','where','instance','\x20<\x20:currentRetrieveDate','\x20>=\x20:lastRetrieveDate','push','stream','MemberIdOrName','(((.+)+)+)+$','apply','__esModule','@flosum/salesforce','2688366MQQzsp','LastModifiedDate','5cuStKa','metadataTypes','dataSource','RevisionCounter','QueryBuilder','next','currentRetrieveDate','MemberName','45aypEza','524672SXWHPU','andWhere','createDataSource','563380quxEEW','IsNameObsolete','956jFSbqr','execute','toString','lastRetrieveDate','984956flOSGQ','select','from','1157410VqCHXT','SourceMemberRetriever','constructor','destroy','CompositeRetrieveData','\x20IN\x20(:metadataTypes)','181IusBPx','api','search'];a344_0xd80b=function(){return _0x40fcab;};return a344_0xd80b();}(function(_0x1d8e0a,_0x77fd5f){const _0x3f04de=a344_0x4919,_0x4db532=_0x1d8e0a();while(!![]){try{const _0x4bd1aa=-parseInt(_0x3f04de(0x102))/0x1*(parseInt(_0x3f04de(0xf5))/0x2)+parseInt(_0x3f04de(0x106))/0x3+-parseInt(_0x3f04de(0xf3))/0x4*(parseInt(_0x3f04de(0x116))/0x5)+-parseInt(_0x3f04de(0x114))/0x6+-parseInt(_0x3f04de(0xf9))/0x7+parseInt(_0x3f04de(0xf0))/0x8+-parseInt(_0x3f04de(0xef))/0x9*(-parseInt(_0x3f04de(0xfc))/0xa);if(_0x4bd1aa===_0x77fd5f)break;else _0x4db532['push'](_0x4db532['shift']());}catch(_0x647eef){_0x4db532['push'](_0x4db532['shift']());}}}(a344_0xd80b,0x4892e));const a344_0x5874b4=(function(){let _0x4ce637=!![];return function(_0x3e57e4,_0x37308f){const _0x1fb67f=_0x4ce637?function(){const _0x4402fe=a344_0x4919;if(_0x37308f){const _0x39a0ed=_0x37308f[_0x4402fe(0x111)](_0x3e57e4,arguments);return _0x37308f=null,_0x39a0ed;}}:function(){};return _0x4ce637=![],_0x1fb67f;};}()),a344_0x98bb4=a344_0x5874b4(this,function(){const _0x3d45c6=a344_0x4919;return a344_0x98bb4[_0x3d45c6(0xf7)]()[_0x3d45c6(0x104)](_0x3d45c6(0x110))[_0x3d45c6(0xf7)]()[_0x3d45c6(0xfe)](a344_0x98bb4)[_0x3d45c6(0x104)]('(((.+)+)+)+$');});function a344_0x4919(_0xcf17e9,_0x4eacd3){const _0x105a22=a344_0xd80b();return a344_0x4919=function(_0x98bb4,_0x5874b4){_0x98bb4=_0x98bb4-0xea;let _0xd80b2e=_0x105a22[_0x98bb4];return _0xd80b2e;},a344_0x4919(_0xcf17e9,_0x4eacd3);}a344_0x98bb4();'use strict';Object[a344_0x139c74(0x108)](exports,a344_0x139c74(0x112),{'value':!![]}),exports['SourceMemberRetriever']=void 0x0;const salesforce_1=require(a344_0x139c74(0x113)),stream_1=require(a344_0x139c74(0x10e)),SOURCE_MEMBER_OBJECT_NAME=a344_0x139c74(0x107),LAST_MODIFIED_DATE_FIELD_NAME=a344_0x139c74(0x115),MEMBER_TYPE_FIELD_NAME='MemberType',SOURCE_MEMBER_SELECT_FIELDS=['Id',a344_0x139c74(0x10f),'ChangedBy',a344_0x139c74(0xf4),'IsNewMember',a344_0x139c74(0xee),'MemberType',a344_0x139c74(0xea),a344_0x139c74(0x115)];class SourceMemberRetriever extends stream_1['Readable']{constructor({apiVersion:_0xa5df32,instance:_0x502a89,lastRetrieveDate:_0x5eae6c,currentRetrieveDate:_0xa6e7a2,metadataTypes:_0x1358f6}){const _0x28b0a1=a344_0x139c74;super({'objectMode':!![]}),this[_0x28b0a1(0x10a)]=_0x502a89,this[_0x28b0a1(0x103)]=_0xa5df32,this[_0x28b0a1(0xf8)]=_0x5eae6c,this[_0x28b0a1(0xed)]=_0xa6e7a2,this['metadataTypes']=_0x1358f6,this[_0x28b0a1(0x118)]=this[_0x28b0a1(0xf2)]();}async*['createDataSource'](){const _0x3ff150=a344_0x139c74,_0x5d1527=new salesforce_1[(_0x3ff150(0x100))]({'api':this['api'],'queryBuilder':this[_0x3ff150(0x105)](),'instance':this[_0x3ff150(0x10a)],'isTooling':!![]});do{const {records:_0x5cb106}=await _0x5d1527[_0x3ff150(0xf6)]();yield*_0x5cb106;}while(!_0x5d1527['getIsDone']());return null;}[a344_0x139c74(0x105)](){const _0x1af5e2=a344_0x139c74;return new salesforce_1[(_0x1af5e2(0xeb))]()[_0x1af5e2(0xfa)](...SOURCE_MEMBER_SELECT_FIELDS)[_0x1af5e2(0xfb)](SOURCE_MEMBER_OBJECT_NAME)[_0x1af5e2(0x109)](MEMBER_TYPE_FIELD_NAME+_0x1af5e2(0x101),{'metadataTypes':this[_0x1af5e2(0x117)]})[_0x1af5e2(0xf1)](LAST_MODIFIED_DATE_FIELD_NAME+_0x1af5e2(0x10c),{'lastRetrieveDate':new Date(this[_0x1af5e2(0xf8)])})[_0x1af5e2(0xf1)](LAST_MODIFIED_DATE_FIELD_NAME+_0x1af5e2(0x10b),{'currentRetrieveDate':new Date(this[_0x1af5e2(0xed)])});}async['_read'](){const _0x4d2ed1=a344_0x139c74;try{const {value:_0x248e55}=await this[_0x4d2ed1(0x118)][_0x4d2ed1(0xec)]();this[_0x4d2ed1(0x10d)](_0x248e55);}catch(_0xd0cef7){this[_0x4d2ed1(0xff)](_0xd0cef7);}}}exports[a344_0x139c74(0xfd)]=SourceMemberRetriever;