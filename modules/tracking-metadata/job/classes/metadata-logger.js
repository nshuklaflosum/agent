const a298_0x493444=a298_0x43c2;(function(_0x433116,_0xecce31){const _0x1aee9f=a298_0x43c2,_0x14938d=_0x433116();while(!![]){try{const _0x5a6a77=parseInt(_0x1aee9f(0xcf))/0x1+-parseInt(_0x1aee9f(0xd5))/0x2+parseInt(_0x1aee9f(0xe4))/0x3*(-parseInt(_0x1aee9f(0xe9))/0x4)+-parseInt(_0x1aee9f(0xeb))/0x5+parseInt(_0x1aee9f(0xc4))/0x6*(parseInt(_0x1aee9f(0xd9))/0x7)+parseInt(_0x1aee9f(0xcd))/0x8*(-parseInt(_0x1aee9f(0xc0))/0x9)+-parseInt(_0x1aee9f(0xc9))/0xa*(-parseInt(_0x1aee9f(0xca))/0xb);if(_0x5a6a77===_0xecce31)break;else _0x14938d['push'](_0x14938d['shift']());}catch(_0x20304d){_0x14938d['push'](_0x14938d['shift']());}}}(a298_0x2bb5,0x1fde7));function a298_0x2bb5(){const _0x58685e=['success','LogStatus','targetOrgId','Tracking\x20Organization\x20-\x20Retrieve','147iFHMrT','Process_Type__c','metadataLog','apiVersion','__esModule','19212yEyUqZ','createMetadataLog','534740bwZYDi','deployMetadataLog','search','then','RestSimpleDeployData','639kfBpOS','toString','update','Job_Completed__c','63822HstVdg','Update\x20metadata\x20log\x20error\x20\x0a','getTime','constructor','execute','31180qYjkbK','1298JTPnun','error','FLOSUM_NAMESPACE','7640mXRhWj','Is_Error__c','221090emKqwy','MetadataLogger','Succeed__c','Init\x20metadata\x20log\x20error\x20\x0a','Tracking_Setting__c','init','118032jMAloZ','metadataLogId','EXCEPTION','../../../../constants','7GjNmmn','instance','trackingSettingId','Status__c','Metadata_Log__c','(((.+)+)+)+$','_status'];a298_0x2bb5=function(){return _0x58685e;};return a298_0x2bb5();}const a298_0xaf4815=(function(){let _0x1a568e=!![];return function(_0x5e6b6a,_0x1cc103){const _0x56caa3=_0x1a568e?function(){if(_0x1cc103){const _0x3aa62c=_0x1cc103['apply'](_0x5e6b6a,arguments);return _0x1cc103=null,_0x3aa62c;}}:function(){};return _0x1a568e=![],_0x56caa3;};}()),a298_0xa206d5=a298_0xaf4815(this,function(){const _0x1ed9b4=a298_0x43c2;return a298_0xa206d5[_0x1ed9b4(0xc1)]()[_0x1ed9b4(0xed)](_0x1ed9b4(0xde))[_0x1ed9b4(0xc1)]()[_0x1ed9b4(0xc7)](a298_0xa206d5)['search'](_0x1ed9b4(0xde));});a298_0xa206d5();'use strict';Object['defineProperty'](exports,a298_0x493444(0xe8),{'value':!![]}),exports[a298_0x493444(0xd0)]=void 0x0;const salesforce_1=require('@flosum/salesforce'),constants_1=require('../../constants'),constants_2=require(a298_0x493444(0xd8)),METADATA_LOG_OBJECT_NAME=constants_2[a298_0x493444(0xcc)]+a298_0x493444(0xdd),PROCESS_TYPE_RETRIEVE_ORGANIZATION=a298_0x493444(0xe3);function a298_0x43c2(_0x35462f,_0xa25322){const _0x4e28ff=a298_0x2bb5();return a298_0x43c2=function(_0xa206d5,_0xaf4815){_0xa206d5=_0xa206d5-0xbe;let _0x2bb5c7=_0x4e28ff[_0xa206d5];return _0x2bb5c7;},a298_0x43c2(_0x35462f,_0xa25322);}class MetadataLogger{constructor({apiVersion:_0x20de39,instance:_0x27e264,targetOrgId:_0xfabf6,trackingSettingId:_0x42b4ce,startDate:_0x4d64c4}){const _0x31b9f1=a298_0x493444;this[_0x31b9f1(0xe7)]=_0x20de39,this['instance']=_0x27e264,this[_0x31b9f1(0xe2)]=_0xfabf6,this[_0x31b9f1(0xdb)]=_0x42b4ce,this['startDate']=_0x4d64c4;}set['status'](_0x16de77){this['_status']=_0x16de77;}async['deployMetadataLog'](){const _0x4f5c5f=a298_0x493444,_0x1c15db=new salesforce_1[(_0x4f5c5f(0xbf))]({'instance':this[_0x4f5c5f(0xda)],'objectName':METADATA_LOG_OBJECT_NAME,'api':this[_0x4f5c5f(0xe7)],'allOrNone':![],'externalIdField':'Id'});return await _0x1c15db[_0x4f5c5f(0xc8)]({'records':[this[_0x4f5c5f(0xe6)]]});}[a298_0x493444(0xea)](){const _0x34348a=a298_0x493444;this[_0x34348a(0xe6)]={'attributes':{'type':METADATA_LOG_OBJECT_NAME},'Id':this[_0x34348a(0xd6)]||null,[constants_2[_0x34348a(0xcc)]+'Start_Date__c']:this['startDate'],[constants_2[_0x34348a(0xcc)]+'Organisation__c']:this[_0x34348a(0xe2)],[constants_2['FLOSUM_NAMESPACE']+_0x34348a(0xd3)]:this[_0x34348a(0xdb)],[constants_2['FLOSUM_NAMESPACE']+_0x34348a(0xe5)]:PROCESS_TYPE_RETRIEVE_ORGANIZATION,[constants_2['FLOSUM_NAMESPACE']+_0x34348a(0xdc)]:this[_0x34348a(0xdf)],[constants_2[_0x34348a(0xcc)]+_0x34348a(0xd1)]:this[_0x34348a(0xdf)]===constants_1[_0x34348a(0xe1)]['COMPLETED'],[constants_2[_0x34348a(0xcc)]+'Completed_Date__c']:this[_0x34348a(0xdf)]===constants_1[_0x34348a(0xe1)]['IN_PROGRESS']?null:new Date()[_0x34348a(0xc6)](),[constants_2['FLOSUM_NAMESPACE']+_0x34348a(0xce)]:this['_status']===constants_1[_0x34348a(0xe1)][_0x34348a(0xd7)],[constants_2['FLOSUM_NAMESPACE']+_0x34348a(0xc3)]:this[_0x34348a(0xdf)]!==constants_1[_0x34348a(0xe1)]['IN_PROGRESS']};}async[a298_0x493444(0xd4)](){const _0x20ac1e=a298_0x493444;this['createMetadataLog']();const _0x56cc89=await this[_0x20ac1e(0xec)](),_0x30c15b=_0x56cc89['at'](0x0);if(_0x30c15b===null||_0x30c15b===void 0x0?void 0x0:_0x30c15b[_0x20ac1e(0xe0)])return this[_0x20ac1e(0xd6)]=_0x30c15b['id'],_0x30c15b['id'];else throw new Error(_0x20ac1e(0xd2)+(_0x30c15b===null||_0x30c15b===void 0x0?void 0x0:_0x30c15b[_0x20ac1e(0xcb)]));}async[a298_0x493444(0xc2)](){const _0x4a4dfd=a298_0x493444;this[_0x4a4dfd(0xea)](),await this[_0x4a4dfd(0xec)]()[_0x4a4dfd(0xbe)](_0x3a804f=>{const _0x9cce2c=_0x4a4dfd,_0x236488=_0x3a804f['at'](0x0);if(_0x236488===null||_0x236488===void 0x0?void 0x0:_0x236488[_0x9cce2c(0xcb)])throw new Error(_0x9cce2c(0xc5)+(_0x236488===null||_0x236488===void 0x0?void 0x0:_0x236488[_0x9cce2c(0xcb)]));});}}exports[a298_0x493444(0xd0)]=MetadataLogger;