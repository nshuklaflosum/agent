const a294_0x3f2de8=a294_0x4cbf;function a294_0x55db(){const _0x3fa8fe=['defineProperty','_flush','createDeclarativeFilter','logger','3POniDC','constructor','stream','./logger/logger.adapter','execute','push','apply','toString','handle','instance','metadataType','retrieveMetadata','220546qivSVO','items','2660471ySsSQD','map','MetadataRetriever','(((.+)+)+)+$','975002dEbntt','PartialRetrieve','1193370LDHUHX','6AsuogM','__esModule','LoggerAdapter','24SWGfDG','metadataTypes','1557365yCKjFU','metadataResult','@flosum/salesforce','2038732hLNtbm','_transform','find','DeclarativeFilterOptions','10nnyVCB','Transform','update','components','1252899lQECia','log','length','sourceMemberRecords'];a294_0x55db=function(){return _0x3fa8fe;};return a294_0x55db();}(function(_0x324ed8,_0x44abec){const _0x5f5dc9=a294_0x4cbf,_0x2a1648=_0x324ed8();while(!![]){try{const _0xa8dd32=-parseInt(_0x5f5dc9(0x1bf))/0x1*(-parseInt(_0x5f5dc9(0x19e))/0x2)+-parseInt(_0x5f5dc9(0x1a6))/0x3+-parseInt(_0x5f5dc9(0x1af))/0x4+-parseInt(_0x5f5dc9(0x1ac))/0x5*(-parseInt(_0x5f5dc9(0x1a7))/0x6)+-parseInt(_0x5f5dc9(0x1a4))/0x7+-parseInt(_0x5f5dc9(0x1aa))/0x8*(-parseInt(_0x5f5dc9(0x1b7))/0x9)+-parseInt(_0x5f5dc9(0x1b3))/0xa*(-parseInt(_0x5f5dc9(0x1a0))/0xb);if(_0xa8dd32===_0x44abec)break;else _0x2a1648['push'](_0x2a1648['shift']());}catch(_0x800d36){_0x2a1648['push'](_0x2a1648['shift']());}}}(a294_0x55db,0x3e433));const a294_0x432434=(function(){let _0x25349e=!![];return function(_0x4bf47a,_0x4a4149){const _0x4bedfe=_0x25349e?function(){const _0x25d185=a294_0x4cbf;if(_0x4a4149){const _0xc10f57=_0x4a4149[_0x25d185(0x1c5)](_0x4bf47a,arguments);return _0x4a4149=null,_0xc10f57;}}:function(){};return _0x25349e=![],_0x4bedfe;};}()),a294_0x96b532=a294_0x432434(this,function(){const _0xf8ec41=a294_0x4cbf;return a294_0x96b532[_0xf8ec41(0x199)]()['search'](_0xf8ec41(0x1a3))[_0xf8ec41(0x199)]()[_0xf8ec41(0x1c0)](a294_0x96b532)['search'](_0xf8ec41(0x1a3));});a294_0x96b532();'use strict';Object[a294_0x3f2de8(0x1bb)](exports,a294_0x3f2de8(0x1a8),{'value':!![]}),exports[a294_0x3f2de8(0x1a2)]=void 0x0;function a294_0x4cbf(_0x4c8ff2,_0x442e47){const _0x4c066c=a294_0x55db();return a294_0x4cbf=function(_0x96b532,_0x432434){_0x96b532=_0x96b532-0x199;let _0x55db7f=_0x4c066c[_0x96b532];return _0x55db7f;},a294_0x4cbf(_0x4c8ff2,_0x442e47);}const salesforce_1=require(a294_0x3f2de8(0x1ae)),stream_1=require(a294_0x3f2de8(0x1c1)),logger_adapter_1=require(a294_0x3f2de8(0x1c2));class MetadataRetriever extends stream_1[a294_0x3f2de8(0x1b4)]{constructor({apiVersion:_0x25cb94,instance:_0x490ba1,metadataTypes:_0x36f16f,logger:_0x51a692}){const _0x36af56=a294_0x3f2de8;super({'objectMode':!![]}),this[_0x36af56(0x1ba)]=[],this['api']=_0x25cb94,this['logger']=_0x51a692,this[_0x36af56(0x19b)]=_0x490ba1,this['metadataTypes']=_0x36f16f;}[a294_0x3f2de8(0x1bd)](){const _0x37d847=a294_0x3f2de8,_0x4a49f9=this[_0x37d847(0x1ba)][_0x37d847(0x1a1)](_0x7cf4e3=>_0x7cf4e3['metadataId'])['join'](';'),_0x368ce5=[];return _0x368ce5[_0x37d847(0x1c4)]({'field':'id','option':salesforce_1[_0x37d847(0x1b2)]['IN'],'value':_0x4a49f9}),_0x368ce5;}async[a294_0x3f2de8(0x19d)](){const _0x18e85f=a294_0x3f2de8,_0x2b31b8=this[_0x18e85f(0x1bd)](),_0x6feb61=new logger_adapter_1[(_0x18e85f(0x1a9))](this['logger']);this[_0x18e85f(0x1ad)]=await new salesforce_1[(_0x18e85f(0x1a5))](this['api'],this[_0x18e85f(0x19b)],_0x6feb61,_0x2b31b8,null,this[_0x18e85f(0x1ab)])[_0x18e85f(0x1c3)]();}async[a294_0x3f2de8(0x19a)](){const _0x15bd4c=a294_0x3f2de8;await this['retrieveMetadata']();for(const _0x2983b2 of this[_0x15bd4c(0x1ba)]){const _0x5c20a1=this[_0x15bd4c(0x1ad)][_0x15bd4c(0x19f)][_0x2983b2[_0x15bd4c(0x19c)]],_0x68f23f=_0x5c20a1[_0x15bd4c(0x1b6)][_0x15bd4c(0x1b1)](_0x2b8a0d=>_0x2b8a0d['listMetadataItem']['id']===_0x2983b2['metadataId']);if(!_0x68f23f)continue;const _0x552326={'sourceMemberRecord':_0x2983b2,'listMetadataItem':_0x68f23f['listMetadataItem'],'files':_0x68f23f['files']};this['push'](_0x552326);}}async[a294_0x3f2de8(0x1b0)](_0x4da3ad,_0xa87baa,_0x47f10f){const _0xa25809=a294_0x3f2de8;try{this[_0xa25809(0x1ba)]['push'](_0x4da3ad),_0x47f10f();}catch(_0x5db66d){_0x47f10f(_0x5db66d);}}async[a294_0x3f2de8(0x1bc)](_0x18d31e){const _0x4cf7e1=a294_0x3f2de8;try{this[_0x4cf7e1(0x1ba)][_0x4cf7e1(0x1b9)]&&await this[_0x4cf7e1(0x19a)](),this[_0x4cf7e1(0x1be)][_0x4cf7e1(0x1b8)]('Retrieved\x20metadata\x20items\x20completed'),await this['logger'][_0x4cf7e1(0x1b5)](),_0x18d31e();}catch(_0x4d08db){_0x18d31e(_0x4d08db);}}}exports[a294_0x3f2de8(0x1a2)]=MetadataRetriever;