const a302_0x486db8=a302_0x30c0;(function(_0x4037aa,_0x11379a){const _0x286344=a302_0x30c0,_0x3dd6ec=_0x4037aa();while(!![]){try{const _0x385a12=-parseInt(_0x286344(0x1d3))/0x1+-parseInt(_0x286344(0x1e7))/0x2+parseInt(_0x286344(0x1d0))/0x3+parseInt(_0x286344(0x1e9))/0x4+-parseInt(_0x286344(0x1d8))/0x5+-parseInt(_0x286344(0x1ee))/0x6+parseInt(_0x286344(0x1ef))/0x7*(parseInt(_0x286344(0x1eb))/0x8);if(_0x385a12===_0x11379a)break;else _0x3dd6ec['push'](_0x3dd6ec['shift']());}catch(_0x2074f2){_0x3dd6ec['push'](_0x3dd6ec['shift']());}}}(a302_0x197b,0xca9d8));const a302_0x22fc26=(function(){let _0xfe8158=!![];return function(_0x54bf95,_0x473549){const _0x340bcd=_0xfe8158?function(){const _0x51c822=a302_0x30c0;if(_0x473549){const _0x2261d9=_0x473549[_0x51c822(0x1d6)](_0x54bf95,arguments);return _0x473549=null,_0x2261d9;}}:function(){};return _0xfe8158=![],_0x340bcd;};}()),a302_0x379041=a302_0x22fc26(this,function(){const _0x31d0a7=a302_0x30c0;return a302_0x379041[_0x31d0a7(0x1d5)]()['search'](_0x31d0a7(0x1ec))['toString']()[_0x31d0a7(0x1ca)](a302_0x379041)['search']('(((.+)+)+)+$');});a302_0x379041();'use strict';Object[a302_0x486db8(0x1e2)](exports,a302_0x486db8(0x1d1),{'value':!![]}),exports[a302_0x486db8(0x1e3)]=exports[a302_0x486db8(0x1ed)]=exports[a302_0x486db8(0x1df)]=exports[a302_0x486db8(0x1e5)]=exports[a302_0x486db8(0x1cb)]=void 0x0;const index_1=require('./index'),constants_1=require(a302_0x486db8(0x1f0)),salesforce_request_1=require(a302_0x486db8(0x1da)),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=[a302_0x486db8(0x1d2)],FIELD_PARENT_ID='ParentId',FIELD_ID='Id';async function retrieveAttachments(_0x26a36d,_0xa45f08){const _0x2e0563=a302_0x486db8;let _0x4ab431=0x0,_0x355b92=0x0,_0x45aa24=[];const _0x4ca216=[];for(const _0x266ce0 of _0x26a36d){if(_0x266ce0['BodyLength']>REST_ATTACHMENT_MAX_SIZE){const _0x263425=await fetchAttachmentBody(_0xa45f08,_0x266ce0['Id']);_0x4ca216[_0x2e0563(0x1ce)]({'id':_0x266ce0['Id'],'values':{'Body':_0x263425[_0x2e0563(0x1d5)]('base64')}});continue;}if(_0x266ce0[_0x2e0563(0x1db)]+_0x4ab431>REST_ATTACHMENT_MAX_SIZE||_0x355b92+0x1>=REST_ATTACHMENT_COUNT){const _0x3bbd5c=await fetchAttachments(_0xa45f08,BINARY_FIELDS,_0x45aa24);_0x4ca216[_0x2e0563(0x1ce)](..._0x3bbd5c),_0x45aa24=[],_0x4ab431=0x0,_0x355b92=0x0;}_0x45aa24[_0x2e0563(0x1ce)](_0x266ce0['Id']),_0x4ab431+=_0x266ce0[_0x2e0563(0x1db)],_0x355b92++;}if(_0x45aa24[_0x2e0563(0x1de)]){const _0x22f75a=await fetchAttachments(_0xa45f08,BINARY_FIELDS,_0x45aa24);_0x4ca216[_0x2e0563(0x1ce)](..._0x22f75a);}return _0x4ca216;}exports['retrieveAttachments']=retrieveAttachments;function a302_0x197b(){const _0x21193c=['\x27,\x27','4911520IWZato','(((.+)+)+)+$','fetchAttachmentBody','9094794xrZwRl','28eapckz','../../../constants','constructor','retrieveAttachments','/body','records','push','/sobjects/Attachment/','4320198zvARuk','__esModule','Body','740509tzcgOh','get','toString','apply','/query/','7368185EKXtgv','/services/apexrest','../../functions/utils/salesforce-request','BodyLength','SALESFORCE_API_VERSION','arraybuffer','length','fetchAttachmentsDetailsByParentId','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20','chunkArray','defineProperty','fetchAttachments','/services/data/','fetchAttachmentsDetailsById','Attachment','116616laYWIu','\x20IN\x20(','2889356WQrCTw'];a302_0x197b=function(){return _0x21193c;};return a302_0x197b();}function fetchAttachmentsDetailsById(_0x1434cc,_0x1877a3){return fetchAttachmentsDetails(_0x1434cc,FIELD_ID,_0x1877a3);}exports[a302_0x486db8(0x1e5)]=fetchAttachmentsDetailsById;function a302_0x30c0(_0x408f40,_0x483205){const _0x45c14f=a302_0x197b();return a302_0x30c0=function(_0x379041,_0x22fc26){_0x379041=_0x379041-0x1ca;let _0x197bb7=_0x45c14f[_0x379041];return _0x197bb7;},a302_0x30c0(_0x408f40,_0x483205);}function fetchAttachmentsDetailsByParentId(_0x2edeff,_0x3ef62b){return fetchAttachmentsDetails(_0x2edeff,FIELD_PARENT_ID,_0x3ef62b);}exports[a302_0x486db8(0x1df)]=fetchAttachmentsDetailsByParentId;async function fetchAttachmentsDetails(_0x15fe9a,_0x418984,_0x27e5c0){const _0xa0dd53=a302_0x486db8,_0x4ba50c=[],_0x8a0b37=(0x0,index_1[_0xa0dd53(0x1e1)])(_0x27e5c0,CHUNK_QUERY_SIZE);for(const _0xfab4cc of _0x8a0b37){const _0x535d5e=_0xa0dd53(0x1e0)+_0x418984+_0xa0dd53(0x1e8)+('\x27'+_0xfab4cc['join'](_0xa0dd53(0x1ea))+'\x27')+')',{data:_0x40a5bf}=await _0x15fe9a['get']('/services/data/'+constants_1[_0xa0dd53(0x1dc)]+_0xa0dd53(0x1d7),{'params':{'q':_0x535d5e}});_0x4ba50c[_0xa0dd53(0x1ce)](..._0x40a5bf[_0xa0dd53(0x1cd)]);}return _0x4ba50c;}async function fetchAttachmentBody(_0x3be283,_0x4f89ef){const _0x57e713=a302_0x486db8,{data:_0x9c2d40}=await _0x3be283[_0x57e713(0x1d4)](_0x57e713(0x1e4)+constants_1['SALESFORCE_API_VERSION']+_0x57e713(0x1cf)+_0x4f89ef+_0x57e713(0x1cc),{'responseType':_0x57e713(0x1dd)});return _0x9c2d40;}exports['fetchAttachmentBody']=fetchAttachmentBody;async function fetchAttachments(_0x14a131,_0x322ba9,_0x4558eb){const _0x609c79=a302_0x486db8,{data:_0x5e0b52}=await _0x14a131['post'](_0x609c79(0x1d9)+salesforce_request_1['namespace']+'/retrieveAttachments/',{'objectName':_0x609c79(0x1e6),'binaryFields':_0x322ba9,'recordIds':_0x4558eb});return _0x5e0b52;}exports[a302_0x486db8(0x1e3)]=fetchAttachments;