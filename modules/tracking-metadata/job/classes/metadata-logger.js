const a298_0x3bb6a7=a298_0x44dd;(function(_0x4158ba,_0x3505e4){const _0x32cd43=a298_0x44dd,_0x59167b=_0x4158ba();while(!![]){try{const _0x39a6de=parseInt(_0x32cd43(0x163))/0x1*(-parseInt(_0x32cd43(0x156))/0x2)+-parseInt(_0x32cd43(0x177))/0x3+parseInt(_0x32cd43(0x16f))/0x4+parseInt(_0x32cd43(0x178))/0x5+parseInt(_0x32cd43(0x14b))/0x6*(parseInt(_0x32cd43(0x171))/0x7)+-parseInt(_0x32cd43(0x176))/0x8*(parseInt(_0x32cd43(0x166))/0x9)+parseInt(_0x32cd43(0x158))/0xa;if(_0x39a6de===_0x3505e4)break;else _0x59167b['push'](_0x59167b['shift']());}catch(_0x5be650){_0x59167b['push'](_0x59167b['shift']());}}}(a298_0x1c96,0xb5d51));function a298_0x44dd(_0x1d2945,_0x523f9b){const _0x16de74=a298_0x1c96();return a298_0x44dd=function(_0x5521b1,_0x36016d){_0x5521b1=_0x5521b1-0x149;let _0x1c9612=_0x16de74[_0x5521b1];return _0x1c9612;},a298_0x44dd(_0x1d2945,_0x523f9b);}function a298_0x1c96(){const _0x7de52c=['targetOrgId','Completed_Date__c','661708RSgLJw','Succeed__c','98uiURen','metadataLogId','Organisation__c','update','getTime','36472GnlStB','1936209FHfkbZ','1936675jsEpsK','apiVersion','RestSimpleDeployData','338784gujipg','Init\x20metadata\x20log\x20error\x20\x0a','metadataLog','Metadata_Log__c','Start_Date__c','Tracking\x20Organization\x20-\x20Retrieve','constructor','Status__c','deployMetadataLog','@flosum/salesforce','Is_Error__c','1878nlpBiI','instance','24428090eBhCyx','defineProperty','error','../../constants','search','trackingSettingId','startDate','createMetadataLog','(((.+)+)+)+$','COMPLETED','MetadataLogger','1027yMznmi','LogStatus','toString','2826lItwTW','Job_Completed__c','_status','apply','IN_PROGRESS','__esModule','FLOSUM_NAMESPACE'];a298_0x1c96=function(){return _0x7de52c;};return a298_0x1c96();}const a298_0x36016d=(function(){let _0x21abe4=!![];return function(_0x52ebe3,_0x47ac2b){const _0x58a278=_0x21abe4?function(){const _0x559071=a298_0x44dd;if(_0x47ac2b){const _0x166a21=_0x47ac2b[_0x559071(0x169)](_0x52ebe3,arguments);return _0x47ac2b=null,_0x166a21;}}:function(){};return _0x21abe4=![],_0x58a278;};}()),a298_0x5521b1=a298_0x36016d(this,function(){const _0xfa2a57=a298_0x44dd;return a298_0x5521b1[_0xfa2a57(0x165)]()[_0xfa2a57(0x15c)](_0xfa2a57(0x160))[_0xfa2a57(0x165)]()[_0xfa2a57(0x151)](a298_0x5521b1)[_0xfa2a57(0x15c)]('(((.+)+)+)+$');});a298_0x5521b1();'use strict';Object[a298_0x3bb6a7(0x159)](exports,a298_0x3bb6a7(0x16b),{'value':!![]}),exports['MetadataLogger']=void 0x0;const salesforce_1=require(a298_0x3bb6a7(0x154)),constants_1=require(a298_0x3bb6a7(0x15b)),constants_2=require('../../../../constants'),METADATA_LOG_OBJECT_NAME=constants_2[a298_0x3bb6a7(0x16c)]+a298_0x3bb6a7(0x14e),PROCESS_TYPE_RETRIEVE_ORGANIZATION=a298_0x3bb6a7(0x150);class MetadataLogger{constructor({apiVersion:_0x424cc0,instance:_0x32e70f,targetOrgId:_0x4fcb83,trackingSettingId:_0x504bcd,startDate:_0x563f35}){const _0x547d95=a298_0x3bb6a7;this[_0x547d95(0x149)]=_0x424cc0,this['instance']=_0x32e70f,this['targetOrgId']=_0x4fcb83,this[_0x547d95(0x15d)]=_0x504bcd,this[_0x547d95(0x15e)]=_0x563f35;}set['status'](_0xdcdfb){const _0x4104bb=a298_0x3bb6a7;this[_0x4104bb(0x168)]=_0xdcdfb;}async[a298_0x3bb6a7(0x153)](){const _0x26fb5b=a298_0x3bb6a7,_0x5b36d2=new salesforce_1[(_0x26fb5b(0x14a))]({'instance':this[_0x26fb5b(0x157)],'objectName':METADATA_LOG_OBJECT_NAME,'api':this[_0x26fb5b(0x149)],'allOrNone':![],'externalIdField':'Id'});return await _0x5b36d2['execute']({'records':[this[_0x26fb5b(0x14d)]]});}[a298_0x3bb6a7(0x15f)](){const _0x2bef02=a298_0x3bb6a7;this[_0x2bef02(0x14d)]={'attributes':{'type':METADATA_LOG_OBJECT_NAME},'Id':this[_0x2bef02(0x172)]||null,[constants_2[_0x2bef02(0x16c)]+_0x2bef02(0x14f)]:this[_0x2bef02(0x15e)],[constants_2[_0x2bef02(0x16c)]+_0x2bef02(0x173)]:this[_0x2bef02(0x16d)],[constants_2[_0x2bef02(0x16c)]+'Tracking_Setting__c']:this['trackingSettingId'],[constants_2[_0x2bef02(0x16c)]+'Process_Type__c']:PROCESS_TYPE_RETRIEVE_ORGANIZATION,[constants_2[_0x2bef02(0x16c)]+_0x2bef02(0x152)]:this['_status'],[constants_2[_0x2bef02(0x16c)]+_0x2bef02(0x170)]:this['_status']===constants_1['LogStatus'][_0x2bef02(0x161)],[constants_2[_0x2bef02(0x16c)]+_0x2bef02(0x16e)]:this['_status']===constants_1[_0x2bef02(0x164)]['IN_PROGRESS']?null:new Date()[_0x2bef02(0x175)](),[constants_2['FLOSUM_NAMESPACE']+_0x2bef02(0x155)]:this[_0x2bef02(0x168)]===constants_1['LogStatus']['EXCEPTION'],[constants_2[_0x2bef02(0x16c)]+_0x2bef02(0x167)]:this[_0x2bef02(0x168)]!==constants_1[_0x2bef02(0x164)][_0x2bef02(0x16a)]};}async['init'](){const _0x6ea1fb=a298_0x3bb6a7;this[_0x6ea1fb(0x15f)]();const _0x45009c=await this[_0x6ea1fb(0x153)](),_0x441d2d=_0x45009c['at'](0x0);if(_0x441d2d===null||_0x441d2d===void 0x0?void 0x0:_0x441d2d['success'])return this['metadataLogId']=_0x441d2d['id'],_0x441d2d['id'];else throw new Error(_0x6ea1fb(0x14c)+(_0x441d2d===null||_0x441d2d===void 0x0?void 0x0:_0x441d2d[_0x6ea1fb(0x15a)]));}async[a298_0x3bb6a7(0x174)](){const _0x3c4426=a298_0x3bb6a7;this[_0x3c4426(0x15f)](),await this[_0x3c4426(0x153)]()['then'](_0x43f00e=>{const _0x19a9a8=_0x3c4426,_0x1fd5be=_0x43f00e['at'](0x0);if(_0x1fd5be===null||_0x1fd5be===void 0x0?void 0x0:_0x1fd5be[_0x19a9a8(0x15a)])throw new Error('Update\x20metadata\x20log\x20error\x20\x0a'+(_0x1fd5be===null||_0x1fd5be===void 0x0?void 0x0:_0x1fd5be['error']));});}}exports[a298_0x3bb6a7(0x162)]=MetadataLogger;