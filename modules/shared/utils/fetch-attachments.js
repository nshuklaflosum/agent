const a287_0x52f43e=a287_0x34b7;(function(_0x3800d7,_0x48cde2){const _0x2fd63b=a287_0x34b7,_0x643e53=_0x3800d7();while(!![]){try{const _0x3f65fd=parseInt(_0x2fd63b(0xe3))/0x1+-parseInt(_0x2fd63b(0xd5))/0x2*(-parseInt(_0x2fd63b(0xe8))/0x3)+parseInt(_0x2fd63b(0xdb))/0x4*(parseInt(_0x2fd63b(0xd8))/0x5)+-parseInt(_0x2fd63b(0xe5))/0x6+-parseInt(_0x2fd63b(0xeb))/0x7*(parseInt(_0x2fd63b(0xe7))/0x8)+-parseInt(_0x2fd63b(0xef))/0x9+parseInt(_0x2fd63b(0xf0))/0xa;if(_0x3f65fd===_0x48cde2)break;else _0x643e53['push'](_0x643e53['shift']());}catch(_0x3e9d79){_0x643e53['push'](_0x643e53['shift']());}}}(a287_0xdf76,0xbbd96));function a287_0x34b7(_0x67b452,_0xb759df){const _0x24b463=a287_0xdf76();return a287_0x34b7=function(_0x2d17b4,_0x340406){_0x2d17b4=_0x2d17b4-0xd4;let _0xdf7631=_0x24b463[_0x2d17b4];return _0xdf7631;},a287_0x34b7(_0x67b452,_0xb759df);}const a287_0x340406=(function(){let _0xb8f96d=!![];return function(_0x44a189,_0xfb54f1){const _0xb5dbee=_0xb8f96d?function(){const _0x5934bc=a287_0x34b7;if(_0xfb54f1){const _0x3d5a47=_0xfb54f1[_0x5934bc(0xf7)](_0x44a189,arguments);return _0xfb54f1=null,_0x3d5a47;}}:function(){};return _0xb8f96d=![],_0xb5dbee;};}()),a287_0x2d17b4=a287_0x340406(this,function(){const _0x4d9e58=a287_0x34b7;return a287_0x2d17b4[_0x4d9e58(0xfa)]()[_0x4d9e58(0xe1)](_0x4d9e58(0xf3))['toString']()[_0x4d9e58(0xda)](a287_0x2d17b4)['search'](_0x4d9e58(0xf3));});a287_0x2d17b4();'use strict';Object[a287_0x52f43e(0xf2)](exports,'__esModule',{'value':!![]}),exports['fetchAttachments']=exports[a287_0x52f43e(0xea)]=exports[a287_0x52f43e(0xfc)]=exports['fetchAttachmentsDetailsById']=exports[a287_0x52f43e(0xf9)]=void 0x0;const index_1=require(a287_0x52f43e(0xd7)),constants_1=require('../../../constants'),salesforce_request_1=require(a287_0x52f43e(0xed)),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=[a287_0x52f43e(0xe0)],FIELD_PARENT_ID=a287_0x52f43e(0xf1),FIELD_ID='Id';async function retrieveAttachments(_0x287531,_0x29e20e){const _0x8e50bc=a287_0x52f43e;let _0x4d0d1d=0x0,_0x1bf4cd=0x0,_0x5169f5=[];const _0x533562=[];for(const _0x42f859 of _0x287531){if(_0x42f859[_0x8e50bc(0xfb)]>REST_ATTACHMENT_MAX_SIZE){const _0x119924=await fetchAttachmentBody(_0x29e20e,_0x42f859['Id']);_0x533562['push']({'id':_0x42f859['Id'],'values':{'Body':_0x119924[_0x8e50bc(0xfa)](_0x8e50bc(0xf4))}});continue;}if(_0x42f859[_0x8e50bc(0xfb)]+_0x4d0d1d>REST_ATTACHMENT_MAX_SIZE||_0x1bf4cd+0x1>=REST_ATTACHMENT_COUNT){const _0x54f07c=await fetchAttachments(_0x29e20e,BINARY_FIELDS,_0x5169f5);_0x533562['push'](..._0x54f07c),_0x5169f5=[],_0x4d0d1d=0x0,_0x1bf4cd=0x0;}_0x5169f5['push'](_0x42f859['Id']),_0x4d0d1d+=_0x42f859[_0x8e50bc(0xfb)],_0x1bf4cd++;}if(_0x5169f5[_0x8e50bc(0xf5)]){const _0x137229=await fetchAttachments(_0x29e20e,BINARY_FIELDS,_0x5169f5);_0x533562[_0x8e50bc(0xdd)](..._0x137229);}return _0x533562;}exports[a287_0x52f43e(0xf9)]=retrieveAttachments;function fetchAttachmentsDetailsById(_0x580b49,_0x1f0b06){return fetchAttachmentsDetails(_0x580b49,FIELD_ID,_0x1f0b06);}exports['fetchAttachmentsDetailsById']=fetchAttachmentsDetailsById;function fetchAttachmentsDetailsByParentId(_0x181f1a,_0x29f651){return fetchAttachmentsDetails(_0x181f1a,FIELD_PARENT_ID,_0x29f651);}exports[a287_0x52f43e(0xfc)]=fetchAttachmentsDetailsByParentId;async function fetchAttachmentsDetails(_0x4b6f84,_0x159e50,_0x172a5f){const _0x2d8dc2=a287_0x52f43e,_0x466f7c=[],_0x530bbe=(0x0,index_1[_0x2d8dc2(0xe9)])(_0x172a5f,CHUNK_QUERY_SIZE);for(const _0x3e072a of _0x530bbe){const _0x4b39c5='\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20'+_0x159e50+_0x2d8dc2(0xe6)+('\x27'+_0x3e072a[_0x2d8dc2(0xe4)](_0x2d8dc2(0xd9))+'\x27')+')',{data:_0x51ed16}=await _0x4b6f84['get'](_0x2d8dc2(0xec)+constants_1['SALESFORCE_API_VERSION']+_0x2d8dc2(0xd6),{'params':{'q':_0x4b39c5}});_0x466f7c['push'](..._0x51ed16['records']);}return _0x466f7c;}function a287_0xdf76(){const _0x459ab0=['11195811snCCua','30446570ZTuqOa','ParentId','defineProperty','(((.+)+)+)+$','base64','length','/retrieveAttachments/','apply','arraybuffer','retrieveAttachments','toString','BodyLength','fetchAttachmentsDetailsByParentId','/services/apexrest','SALESFORCE_API_VERSION','18314eyuEwd','/query/','./index','3085DVRGuY','\x27,\x27','constructor','1888DHavFZ','get','push','post','/sobjects/Attachment/','Body','search','namespace','1094304ToGAxo','join','8625030fBKsLE','\x20IN\x20(','2184knwoGY','66EQXGvz','chunkArray','fetchAttachmentBody','30275dhOjZh','/services/data/','../../functions/utils/salesforce-request','/body'];a287_0xdf76=function(){return _0x459ab0;};return a287_0xdf76();}async function fetchAttachmentBody(_0x54a63b,_0x51ecfa){const _0x175c2b=a287_0x52f43e,{data:_0x36eed8}=await _0x54a63b[_0x175c2b(0xdc)]('/services/data/'+constants_1[_0x175c2b(0xd4)]+_0x175c2b(0xdf)+_0x51ecfa+_0x175c2b(0xee),{'responseType':_0x175c2b(0xf8)});return _0x36eed8;}exports[a287_0x52f43e(0xea)]=fetchAttachmentBody;async function fetchAttachments(_0x397ffc,_0x4b968f,_0x4ffd2a){const _0x33889d=a287_0x52f43e,{data:_0x1b7b48}=await _0x397ffc[_0x33889d(0xde)](_0x33889d(0xfd)+salesforce_request_1[_0x33889d(0xe2)]+_0x33889d(0xf6),{'objectName':'Attachment','binaryFields':_0x4b968f,'recordIds':_0x4ffd2a});return _0x1b7b48;}exports['fetchAttachments']=fetchAttachments;