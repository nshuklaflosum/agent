const a343_0x1e7ae6=a343_0x218a;(function(_0x38ebbb,_0x41ef88){const _0x19c46a=a343_0x218a,_0x2fe60d=_0x38ebbb();while(!![]){try{const _0x50a458=parseInt(_0x19c46a(0x1bd))/0x1+parseInt(_0x19c46a(0x1a4))/0x2+parseInt(_0x19c46a(0x1b2))/0x3+-parseInt(_0x19c46a(0x1ad))/0x4*(-parseInt(_0x19c46a(0x1c3))/0x5)+-parseInt(_0x19c46a(0x1bf))/0x6+parseInt(_0x19c46a(0x1c6))/0x7*(-parseInt(_0x19c46a(0x1aa))/0x8)+-parseInt(_0x19c46a(0x1c2))/0x9;if(_0x50a458===_0x41ef88)break;else _0x2fe60d['push'](_0x2fe60d['shift']());}catch(_0x3b1f24){_0x2fe60d['push'](_0x2fe60d['shift']());}}}(a343_0x32fb,0xe1598));const a343_0x111062=(function(){let _0xe249a5=!![];return function(_0x5e0b5d,_0x10cad0){const _0x5e199a=_0xe249a5?function(){const _0x300c31=a343_0x218a;if(_0x10cad0){const _0x5c825e=_0x10cad0[_0x300c31(0x1a6)](_0x5e0b5d,arguments);return _0x10cad0=null,_0x5c825e;}}:function(){};return _0xe249a5=![],_0x5e199a;};}()),a343_0x33796b=a343_0x111062(this,function(){const _0x5a4dd3=a343_0x218a;return a343_0x33796b[_0x5a4dd3(0x1b5)]()[_0x5a4dd3(0x1ae)]('(((.+)+)+)+$')[_0x5a4dd3(0x1b5)]()[_0x5a4dd3(0x1b9)](a343_0x33796b)[_0x5a4dd3(0x1ae)](_0x5a4dd3(0x1a7));});a343_0x33796b();function a343_0x218a(_0x3c0872,_0x3eb0ea){const _0x3196bf=a343_0x32fb();return a343_0x218a=function(_0x33796b,_0x111062){_0x33796b=_0x33796b-0x1a2;let _0x32fb3b=_0x3196bf[_0x33796b];return _0x32fb3b;},a343_0x218a(_0x3c0872,_0x3eb0ea);}'use strict';Object[a343_0x1e7ae6(0x1c1)](exports,a343_0x1e7ae6(0x1a3),{'value':!![]}),exports[a343_0x1e7ae6(0x1af)]=void 0x0;const salesforce_1=require(a343_0x1e7ae6(0x1a2)),stream_1=require(a343_0x1e7ae6(0x1be)),logger_adapter_1=require(a343_0x1e7ae6(0x1b6));class MetadataRetriever extends stream_1[a343_0x1e7ae6(0x1c8)]{constructor({apiVersion:_0x3eb035,instance:_0x26ae74,metadataTypes:_0x812e62,logger:_0x9cc8aa}){const _0x29144e=a343_0x1e7ae6;super({'objectMode':!![]}),this[_0x29144e(0x1a9)]=[],this[_0x29144e(0x1c0)]=_0x3eb035,this[_0x29144e(0x1ca)]=_0x9cc8aa,this['instance']=_0x26ae74,this['metadataTypes']=_0x812e62;}['createDeclarativeFilter'](){const _0x5d13f7=a343_0x1e7ae6,_0x47e3b6=this['sourceMemberRecords']['map'](_0x5d3435=>_0x5d3435[_0x5d13f7(0x1cc)])[_0x5d13f7(0x1ab)](';'),_0x5ce878=[];return _0x5ce878[_0x5d13f7(0x1b3)]({'field':'id','option':salesforce_1[_0x5d13f7(0x1a5)]['IN'],'value':_0x47e3b6}),_0x5ce878;}async[a343_0x1e7ae6(0x1c4)](){const _0x355bee=a343_0x1e7ae6,_0x1356a6=this[_0x355bee(0x1b4)](),_0x499c61=new logger_adapter_1[(_0x355bee(0x1bb))](this[_0x355bee(0x1ca)]);this[_0x355bee(0x1ce)]=await new salesforce_1['PartialRetrieve'](this['api'],this[_0x355bee(0x1b0)],_0x499c61,_0x1356a6,null,this['metadataTypes'])[_0x355bee(0x1c9)]();}async[a343_0x1e7ae6(0x1ba)](){const _0x3d7451=a343_0x1e7ae6;await this[_0x3d7451(0x1c4)]();for(const _0xe65559 of this[_0x3d7451(0x1a9)]){const _0x43f709=this[_0x3d7451(0x1ce)][_0x3d7451(0x1bc)][_0xe65559[_0x3d7451(0x1c5)]],_0x20ea86=_0x43f709===null||_0x43f709===void 0x0?void 0x0:_0x43f709['components'][_0x3d7451(0x1cd)](_0x365bc3=>_0x365bc3['listMetadataItem']['id']===_0xe65559[_0x3d7451(0x1cc)]);if(!_0x20ea86){this[_0x3d7451(0x1ca)][_0x3d7451(0x1a8)](_0x3d7451(0x1b1)+_0xe65559[_0x3d7451(0x1c7)]+'\x20'+_0xe65559['metadataType']+_0x3d7451(0x1cf));continue;}const _0x43652b={'sourceMemberRecord':_0xe65559,'listMetadataItem':_0x20ea86['listMetadataItem'],'files':_0x20ea86['files']};this[_0x3d7451(0x1b3)](_0x43652b);}}async[a343_0x1e7ae6(0x1b7)](_0x65218e,_0x6d007c,_0x2232cd){try{this['sourceMemberRecords']['push'](_0x65218e),_0x2232cd();}catch(_0x44dac7){_0x2232cd(_0x44dac7);}}async[a343_0x1e7ae6(0x1b8)](_0x49f823){const _0x44adf9=a343_0x1e7ae6;try{this[_0x44adf9(0x1a9)][_0x44adf9(0x1cb)]&&await this['handle'](),this[_0x44adf9(0x1ca)][_0x44adf9(0x1a8)]('Retrieved\x20metadata\x20items\x20completed'),await this['logger'][_0x44adf9(0x1ac)](),_0x49f823();}catch(_0x24ea4e){_0x49f823(_0x24ea4e);}}}exports[a343_0x1e7ae6(0x1af)]=MetadataRetriever;function a343_0x32fb(){const _0x178ea9=['join','update','292972dZOteL','search','MetadataRetriever','instance','The\x20','2790174ZWyffX','push','createDeclarativeFilter','toString','./logger/logger.adapter','_transform','_flush','constructor','handle','LoggerAdapter','items','912224zHerpw','stream','459018capGdp','api','defineProperty','10585908wtJtsj','35SYIJyi','retrieveMetadata','metadataType','238sEkVlb','metadataName','Transform','execute','logger','length','metadataId','find','metadataResult','\x20was\x20not\x20retrieved.','@flosum/salesforce','__esModule','2344868ETETLh','DeclarativeFilterOptions','apply','(((.+)+)+)+$','log','sourceMemberRecords','318040tgXmgM'];a343_0x32fb=function(){return _0x178ea9;};return a343_0x32fb();}