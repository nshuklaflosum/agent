const a287_0x4ed8f9=a287_0x1bbf;(function(_0x3d8e59,_0x2d7545){const _0x4a3de2=a287_0x1bbf,_0x23c63d=_0x3d8e59();while(!![]){try{const _0x17ac47=-parseInt(_0x4a3de2(0xb4))/0x1+-parseInt(_0x4a3de2(0xb3))/0x2+parseInt(_0x4a3de2(0xa0))/0x3*(-parseInt(_0x4a3de2(0x9d))/0x4)+-parseInt(_0x4a3de2(0x96))/0x5*(-parseInt(_0x4a3de2(0xa8))/0x6)+parseInt(_0x4a3de2(0x9c))/0x7+parseInt(_0x4a3de2(0x94))/0x8*(parseInt(_0x4a3de2(0xa1))/0x9)+-parseInt(_0x4a3de2(0x9a))/0xa*(-parseInt(_0x4a3de2(0x92))/0xb);if(_0x17ac47===_0x2d7545)break;else _0x23c63d['push'](_0x23c63d['shift']());}catch(_0x4c2da5){_0x23c63d['push'](_0x23c63d['shift']());}}}(a287_0x4072,0xd88a0));const a287_0x547f64=(function(){let _0x47c3d3=!![];return function(_0x12d6db,_0xb38562){const _0x105601=_0x47c3d3?function(){if(_0xb38562){const _0x3cc933=_0xb38562['apply'](_0x12d6db,arguments);return _0xb38562=null,_0x3cc933;}}:function(){};return _0x47c3d3=![],_0x105601;};}()),a287_0x47ca7e=a287_0x547f64(this,function(){const _0x5771e8=a287_0x1bbf;return a287_0x47ca7e['toString']()[_0x5771e8(0xb5)](_0x5771e8(0xaf))[_0x5771e8(0xad)]()[_0x5771e8(0xae)](a287_0x47ca7e)[_0x5771e8(0xb5)](_0x5771e8(0xaf));});a287_0x47ca7e();'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a287_0x4ed8f9(0x9b)]=exports['fetchAttachmentBody']=exports[a287_0x4ed8f9(0x99)]=exports[a287_0x4ed8f9(0x93)]=exports[a287_0x4ed8f9(0xa2)]=void 0x0;const index_1=require('./index'),constants_1=require('../../../constants'),salesforce_request_1=require(a287_0x4ed8f9(0xab)),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=[a287_0x4ed8f9(0xa9)],FIELD_PARENT_ID=a287_0x4ed8f9(0x9f),FIELD_ID='Id';async function retrieveAttachments(_0x5ee70a,_0x396928){const _0x536abe=a287_0x4ed8f9;let _0x3fd26b=0x0,_0x46659e=0x0,_0xa8279b=[];const _0x1a59cd=[];for(const _0x34cbee of _0x5ee70a){if(_0x34cbee[_0x536abe(0xb8)]>REST_ATTACHMENT_MAX_SIZE){const _0x4cf923=await fetchAttachmentBody(_0x396928,_0x34cbee['Id']);_0x1a59cd[_0x536abe(0xa6)]({'id':_0x34cbee['Id'],'values':{'Body':_0x4cf923[_0x536abe(0xad)](_0x536abe(0xa7))}});continue;}if(_0x34cbee[_0x536abe(0xb8)]+_0x3fd26b>REST_ATTACHMENT_MAX_SIZE||_0x46659e+0x1>=REST_ATTACHMENT_COUNT){const _0x40bfe3=await fetchAttachments(_0x396928,BINARY_FIELDS,_0xa8279b);_0x1a59cd[_0x536abe(0xa6)](..._0x40bfe3),_0xa8279b=[],_0x3fd26b=0x0,_0x46659e=0x0;}_0xa8279b[_0x536abe(0xa6)](_0x34cbee['Id']),_0x3fd26b+=_0x34cbee[_0x536abe(0xb8)],_0x46659e++;}if(_0xa8279b[_0x536abe(0xa5)]){const _0x2cf219=await fetchAttachments(_0x396928,BINARY_FIELDS,_0xa8279b);_0x1a59cd[_0x536abe(0xa6)](..._0x2cf219);}return _0x1a59cd;}exports[a287_0x4ed8f9(0xa2)]=retrieveAttachments;function fetchAttachmentsDetailsById(_0x35bb46,_0x2f934b){return fetchAttachmentsDetails(_0x35bb46,FIELD_ID,_0x2f934b);}exports[a287_0x4ed8f9(0x93)]=fetchAttachmentsDetailsById;function fetchAttachmentsDetailsByParentId(_0x37e048,_0x31ca39){return fetchAttachmentsDetails(_0x37e048,FIELD_PARENT_ID,_0x31ca39);}function a287_0x1bbf(_0x4565b5,_0x351c68){const _0x49abf3=a287_0x4072();return a287_0x1bbf=function(_0x47ca7e,_0x547f64){_0x47ca7e=_0x47ca7e-0x91;let _0x40728e=_0x49abf3[_0x47ca7e];return _0x40728e;},a287_0x1bbf(_0x4565b5,_0x351c68);}exports[a287_0x4ed8f9(0x99)]=fetchAttachmentsDetailsByParentId;function a287_0x4072(){const _0x5c6bc8=['fetchAttachmentsDetailsById','2608jYqIHu','chunkArray','15rXDyco','SALESFORCE_API_VERSION','/query/','fetchAttachmentsDetailsByParentId','67880mVHiVt','fetchAttachments','10284680uqOfzt','4OksTGb','/retrieveAttachments/','ParentId','1366698OpFcMT','31410upAysY','retrieveAttachments','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20','\x20IN\x20(','length','push','base64','296316fONxXv','Body','Attachment','../../functions/utils/salesforce-request','arraybuffer','toString','constructor','(((.+)+)+)+$','get','/services/data/','post','3539376YSTUHD','586472pIyAHH','search','/services/apexrest','\x27,\x27','BodyLength','join','1529keiEYa'];a287_0x4072=function(){return _0x5c6bc8;};return a287_0x4072();}async function fetchAttachmentsDetails(_0x2e2969,_0x4ae1e9,_0x428c8e){const _0x463767=a287_0x4ed8f9,_0x35a57e=[],_0xc98060=(0x0,index_1[_0x463767(0x95)])(_0x428c8e,CHUNK_QUERY_SIZE);for(const _0x428078 of _0xc98060){const _0x24936c=_0x463767(0xa3)+_0x4ae1e9+_0x463767(0xa4)+('\x27'+_0x428078[_0x463767(0x91)](_0x463767(0xb7))+'\x27')+')',{data:_0x32c816}=await _0x2e2969[_0x463767(0xb0)]('/services/data/'+constants_1[_0x463767(0x97)]+_0x463767(0x98),{'params':{'q':_0x24936c}});_0x35a57e['push'](..._0x32c816['records']);}return _0x35a57e;}async function fetchAttachmentBody(_0x2c2317,_0xff4aee){const _0x2dc2d2=a287_0x4ed8f9,{data:_0x577fe8}=await _0x2c2317[_0x2dc2d2(0xb0)](_0x2dc2d2(0xb1)+constants_1['SALESFORCE_API_VERSION']+'/sobjects/Attachment/'+_0xff4aee+'/body',{'responseType':_0x2dc2d2(0xac)});return _0x577fe8;}exports['fetchAttachmentBody']=fetchAttachmentBody;async function fetchAttachments(_0x4a7337,_0x1ef02d,_0x4b7b5a){const _0x5ae56e=a287_0x4ed8f9,{data:_0x354bb0}=await _0x4a7337[_0x5ae56e(0xb2)](_0x5ae56e(0xb6)+salesforce_request_1['namespace']+_0x5ae56e(0x9e),{'objectName':_0x5ae56e(0xaa),'binaryFields':_0x1ef02d,'recordIds':_0x4b7b5a});return _0x354bb0;}exports[a287_0x4ed8f9(0x9b)]=fetchAttachments;