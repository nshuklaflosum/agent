const a309_0x3b1091=a309_0x5a69;function a309_0x2ddc(){const _0x21bd51=['includes','toLowerCase','SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_modified_date__sys,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_name__v,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_type__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component__v\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20id\x20CONTAINS\x20(\x27','../dtos/veeva-component-relationship.dto','length','Component_Name__c,\x20','Branch__c\x20=\x20\x27','sourceComponentId','VeevaComponentRelationshipDto','retrieveVeevaComponentsByTypeAndName','VeevaConstants','../dtos/component.dto','10836gFNwCA','retrieveVeevaComponentsById','push','set','./veeva.service','createDataResult','type','SalesforceService','../constants/veeva.constants','No\x20components\x20found\x20in\x20Veeva','No\x20relationship\x20found\x20in\x20Veeva','203775xBnLZV','../dtos/veeva-component.dto','add','SUCCESS','chunkArray','inactive__v','DependencyService','../../shared/utils','SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_modified_date__sys,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_name__v,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20component_type__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20component_name__v\x20CONTAINS\x20(\x27','../enums/status.enums','756964eXvxer','Component_Type__c\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20','BUILD_WHERE_BY_NAME_LIMIT','(((.+)+)+)+$','join','../../../constants','has','reduce','get','288595VIWfrc','defineProperty','FLOSUM_NAMESPACE','6276069XKnMbV','8paVXkv','\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20','\x27,\x27','ComponentDto','AppResponseStatus','branchId','name','status','toString','2MMwBOB','1269156SvfQSL','retrieveDependencyVeevaComponents','retrieveComponents','componentName','componentType','609411LJCqUZ','filter','lastModifiedDate','dependencies','No\x20veeva\x20components\x20found\x20in\x20branch','No\x20dependency\x20components\x20found\x20in\x20Veeva','BUILD_WHERE_BY_ID_LIMIT','targetComponentId','_connectionVeeva','search','executeManyVQL','VeevaService','apply','_connectionSalesforce','_branchId','map','ENDPOINT_VQL','Component__c\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20','deleteDependencyVeevaComponentDuplicates'];a309_0x2ddc=function(){return _0x21bd51;};return a309_0x2ddc();}(function(_0x31e154,_0xe1feb1){const _0x180384=a309_0x5a69,_0x211e52=_0x31e154();while(!![]){try{const _0x55ef06=parseInt(_0x180384(0x1eb))/0x1+-parseInt(_0x180384(0x1bb))/0x2*(-parseInt(_0x180384(0x1c1))/0x3)+parseInt(_0x180384(0x1f5))/0x4+parseInt(_0x180384(0x1ae))/0x5+-parseInt(_0x180384(0x1e0))/0x6+parseInt(_0x180384(0x1bc))/0x7+parseInt(_0x180384(0x1b2))/0x8*(-parseInt(_0x180384(0x1b1))/0x9);if(_0x55ef06===_0xe1feb1)break;else _0x211e52['push'](_0x211e52['shift']());}catch(_0x24450a){_0x211e52['push'](_0x211e52['shift']());}}}(a309_0x2ddc,0x21361));const a309_0x27b00a=(function(){let _0x557ca9=!![];return function(_0x281fdc,_0x5ecab0){const _0x37ec99=_0x557ca9?function(){const _0x4c955b=a309_0x5a69;if(_0x5ecab0){const _0x1cbbeb=_0x5ecab0[_0x4c955b(0x1cd)](_0x281fdc,arguments);return _0x5ecab0=null,_0x1cbbeb;}}:function(){};return _0x557ca9=![],_0x37ec99;};}()),a309_0x32732c=a309_0x27b00a(this,function(){const _0xb749da=a309_0x5a69;return a309_0x32732c[_0xb749da(0x1ba)]()[_0xb749da(0x1ca)]('(((.+)+)+)+$')['toString']()['constructor'](a309_0x32732c)[_0xb749da(0x1ca)](_0xb749da(0x1f8));});a309_0x32732c();'use strict';Object[a309_0x3b1091(0x1af)](exports,'__esModule',{'value':!![]}),exports['DependencyService']=void 0x0;const veeva_constants_1=require(a309_0x3b1091(0x1e8)),veeva_service_1=require(a309_0x3b1091(0x1e4)),component_dto_1=require(a309_0x3b1091(0x1df)),veeva_component_dto_1=require(a309_0x3b1091(0x1ec)),veeva_component_relationship_dto_1=require(a309_0x3b1091(0x1d7)),utils_1=require(a309_0x3b1091(0x1f2)),constants_1=require(a309_0x3b1091(0x1fa)),status_enums_1=require(a309_0x3b1091(0x1f4)),salesforce_service_1=require('./salesforce.service');class DependencyService{constructor(_0x2e5d57,_0x2ec484,_0x4f873a){const _0x566bea=a309_0x3b1091;this[_0x566bea(0x1ce)]=_0x2ec484,this[_0x566bea(0x1c9)]=_0x4f873a,this[_0x566bea(0x1cf)]=_0x2e5d57[_0x566bea(0x1b7)];}async['execute'](){const _0x16856c=a309_0x3b1091,_0x2e135f=await this[_0x16856c(0x1be)](),_0x41369a=await this['retrieveVeevaComponentsByTypeAndName'](_0x2e135f),_0x57e46d=await this[_0x16856c(0x1bd)](_0x41369a),_0x2d4497=_0x57e46d['map'](_0x2f5a15=>_0x2f5a15[_0x16856c(0x1c8)]),_0x1f64a3=await this[_0x16856c(0x1e1)](_0x2d4497),_0x234996=DependencyService[_0x16856c(0x1e5)](_0x41369a,_0x1f64a3,_0x57e46d);return{'responseStatus':status_enums_1[_0x16856c(0x1b6)][_0x16856c(0x1ee)],'data':_0x234996};}async[a309_0x3b1091(0x1be)](){const _0x1e9a51=a309_0x3b1091,_0x4917e6=_0x1e9a51(0x1b3)+constants_1[_0x1e9a51(0x1b0)]+_0x1e9a51(0x1d9)+constants_1[_0x1e9a51(0x1b0)]+_0x1e9a51(0x1f6)+constants_1['FLOSUM_NAMESPACE']+_0x1e9a51(0x1d2)+constants_1[_0x1e9a51(0x1b0)]+_0x1e9a51(0x1da)+this[_0x1e9a51(0x1cf)]+'\x27\x20AND\x20'+constants_1['FLOSUM_NAMESPACE']+'Veeva_Component__c\x20=\x20true\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x4959bd=await salesforce_service_1[_0x1e9a51(0x1e7)]['retrieveRecords'](this[_0x1e9a51(0x1ce)],_0x4917e6);if(!_0x4959bd[_0x1e9a51(0x1d8)])throw new Error(_0x1e9a51(0x1c5));return _0x4959bd[_0x1e9a51(0x1d0)](_0x1ffb7b=>new component_dto_1[(_0x1e9a51(0x1b5))](_0x1ffb7b));}async[a309_0x3b1091(0x1dd)](_0x289203){const _0x1f8f6f=a309_0x3b1091,_0x101f4b=_0x289203[_0x1f8f6f(0x1ac)]((_0x435f77,_0x4dc09d)=>_0x435f77[_0x1f8f6f(0x1ed)]((_0x4dc09d[_0x1f8f6f(0x1c0)]+'.'+_0x4dc09d[_0x1f8f6f(0x1bf)])[_0x1f8f6f(0x1d5)]()),new Set()),_0x31be20=_0x289203[_0x1f8f6f(0x1d0)](_0x5bf88f=>_0x5bf88f[_0x1f8f6f(0x1bf)]),_0x2163e0=(0x0,utils_1['chunkArray'])(_0x31be20,veeva_constants_1['VeevaConstants'][_0x1f8f6f(0x1f7)]),_0x4bfd3b=_0x2163e0['map'](_0x161066=>veeva_constants_1[_0x1f8f6f(0x1de)][_0x1f8f6f(0x1d1)]+(_0x1f8f6f(0x1f3)+_0x161066[_0x1f8f6f(0x1f9)](_0x1f8f6f(0x1b4))+'\x27)')),_0x152845=await veeva_service_1[_0x1f8f6f(0x1cc)][_0x1f8f6f(0x1cb)](_0x4bfd3b,this['_connectionVeeva']),_0x831631=_0x152845[_0x1f8f6f(0x1d0)](_0x4ab29e=>new veeva_component_dto_1['VeevaComponentDto'](_0x4ab29e))[_0x1f8f6f(0x1c2)](_0x3a4926=>_0x101f4b[_0x1f8f6f(0x1ab)]((_0x3a4926[_0x1f8f6f(0x1e6)]+'.'+_0x3a4926[_0x1f8f6f(0x1b8)])[_0x1f8f6f(0x1d5)]()));if(!_0x831631[_0x1f8f6f(0x1d8)])throw new Error(_0x1f8f6f(0x1e9));return _0x831631;}async[a309_0x3b1091(0x1e1)](_0x152cd4){const _0x16d7e4=a309_0x3b1091,_0x4380e5=(0x0,utils_1[_0x16d7e4(0x1ef)])(_0x152cd4,veeva_constants_1[_0x16d7e4(0x1de)][_0x16d7e4(0x1c7)]),_0x5311e9=_0x4380e5[_0x16d7e4(0x1d0)](_0x36a530=>veeva_constants_1[_0x16d7e4(0x1de)][_0x16d7e4(0x1d1)]+(_0x16d7e4(0x1d6)+_0x36a530['join'](_0x16d7e4(0x1b4))+'\x27)')),_0x4b312a=await veeva_service_1[_0x16d7e4(0x1cc)]['executeManyVQL'](_0x5311e9,this[_0x16d7e4(0x1c9)]),_0x4fade1=_0x4b312a[_0x16d7e4(0x1d0)](_0x5335fa=>new veeva_component_dto_1['VeevaComponentDto'](_0x5335fa))[_0x16d7e4(0x1c2)](_0x7aea79=>!_0x7aea79[_0x16d7e4(0x1b9)][_0x16d7e4(0x1d4)](_0x16d7e4(0x1f0)));if(!_0x4fade1[_0x16d7e4(0x1d8)])throw new Error(_0x16d7e4(0x1c6));return _0x4fade1;}async['retrieveDependencyVeevaComponents'](_0x5c19e4){const _0x44305f=a309_0x3b1091,_0x5a7f2f=_0x5c19e4[_0x44305f(0x1d0)](_0x4ea614=>_0x4ea614['id']),_0x588e8e=(0x0,utils_1[_0x44305f(0x1ef)])(_0x5a7f2f,veeva_constants_1[_0x44305f(0x1de)]['BUILD_WHERE_BY_ID_LIMIT']),_0x3ca2f1=_0x588e8e[_0x44305f(0x1d0)](_0x1c8654=>veeva_constants_1['VeevaConstants'][_0x44305f(0x1d1)]+('SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20source_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component_name__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20created_date__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component_relationship__sys\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20source_component__sys\x20CONTAINS\x20(\x27'+_0x1c8654[_0x44305f(0x1f9)]('\x27,\x27')+'\x27)')),_0xdf594b=await veeva_service_1[_0x44305f(0x1cc)][_0x44305f(0x1cb)](_0x3ca2f1,this[_0x44305f(0x1c9)]),_0x577aa4=_0xdf594b[_0x44305f(0x1d0)](_0x4c62bf=>new veeva_component_relationship_dto_1[(_0x44305f(0x1dc))](_0x4c62bf));if(!_0x577aa4[_0x44305f(0x1d8)])throw new Error(_0x44305f(0x1ea));return DependencyService[_0x44305f(0x1d3)](_0x577aa4);}static[a309_0x3b1091(0x1d3)](_0x1bbc7a){const _0x535da2=a309_0x3b1091,_0x149fa2=_0x1bbc7a['reduce']((_0x5c6ace,_0x578f10)=>_0x5c6ace[_0x535da2(0x1e3)](_0x578f10[_0x535da2(0x1db)]+'.'+_0x578f10['targetComponentId'],_0x578f10),new Map());return[..._0x149fa2['values']()];}static[a309_0x3b1091(0x1e5)](_0x46572a,_0x93cbc7,_0x120f22){const _0x10e9cc=a309_0x3b1091,_0xc1086f={},_0x40f76d=_0x46572a[_0x10e9cc(0x1ac)]((_0x4049c8,_0x596e48)=>_0x4049c8[_0x10e9cc(0x1e3)](_0x596e48['id'],_0x596e48),new Map()),_0x45e451=_0x93cbc7['reduce']((_0x363a5b,_0xf08391)=>_0x363a5b[_0x10e9cc(0x1e3)](_0xf08391['id'],_0xf08391),new Map());for(const _0x4a549b of _0x120f22){const _0x2a4f1e=_0x40f76d[_0x10e9cc(0x1ab)](_0x4a549b['sourceComponentId'])&&_0x45e451[_0x10e9cc(0x1ab)](_0x4a549b[_0x10e9cc(0x1c8)]);if(!_0x2a4f1e)continue;const _0x10080c=_0x40f76d[_0x10e9cc(0x1ad)](_0x4a549b[_0x10e9cc(0x1db)]),_0x40a229=_0x45e451[_0x10e9cc(0x1ad)](_0x4a549b['targetComponentId']);!_0xc1086f[_0x10080c[_0x10e9cc(0x1b8)]+':'+_0x10080c[_0x10e9cc(0x1e6)]]&&(_0xc1086f[_0x10080c[_0x10e9cc(0x1b8)]+':'+_0x10080c['type']]={'dependencies':[],'label':_0x10080c[_0x10e9cc(0x1b8)]+'\x20('+_0x10080c[_0x10e9cc(0x1e6)]+')','type':_0x10080c['type'],'name':_0x10080c[_0x10e9cc(0x1b8)]}),_0xc1086f[_0x10080c[_0x10e9cc(0x1b8)]+':'+_0x10080c[_0x10e9cc(0x1e6)]][_0x10e9cc(0x1c4)][_0x10e9cc(0x1e2)]({'label':_0x40a229[_0x10e9cc(0x1b8)]+'\x20('+_0x40a229[_0x10e9cc(0x1e6)]+')','name':_0x40a229[_0x10e9cc(0x1b8)],'type':_0x40a229[_0x10e9cc(0x1e6)],'lastUpdate':_0x40a229[_0x10e9cc(0x1c3)],'isMissing':!_0x40f76d[_0x10e9cc(0x1ab)](_0x4a549b[_0x10e9cc(0x1c8)])});}return _0xc1086f;}}function a309_0x5a69(_0x4d3f42,_0x271bc8){const _0x22e29d=a309_0x2ddc();return a309_0x5a69=function(_0x32732c,_0x27b00a){_0x32732c=_0x32732c-0x1ab;let _0x2ddcb9=_0x22e29d[_0x32732c];return _0x2ddcb9;},a309_0x5a69(_0x4d3f42,_0x271bc8);}exports[a309_0x3b1091(0x1f1)]=DependencyService;