const a61_0x4df26c=a61_0x5b08;(function(_0x202860,_0x1cb247){const _0x2ce2f5=a61_0x5b08,_0x10c74f=_0x202860();while(!![]){try{const _0x5bffec=parseInt(_0x2ce2f5(0x14b))/0x1+-parseInt(_0x2ce2f5(0x13b))/0x2+parseInt(_0x2ce2f5(0x15b))/0x3*(-parseInt(_0x2ce2f5(0x160))/0x4)+parseInt(_0x2ce2f5(0x140))/0x5+parseInt(_0x2ce2f5(0x13e))/0x6+parseInt(_0x2ce2f5(0x163))/0x7+-parseInt(_0x2ce2f5(0x161))/0x8*(parseInt(_0x2ce2f5(0x142))/0x9);if(_0x5bffec===_0x1cb247)break;else _0x10c74f['push'](_0x10c74f['shift']());}catch(_0x18c405){_0x10c74f['push'](_0x10c74f['shift']());}}}(a61_0xc0fc,0xd4a6a));const a61_0x3164e4=(function(){let _0x2cd8ad=!![];return function(_0x25f835,_0x5c52bb){const _0x1d4a34=_0x2cd8ad?function(){const _0x1d6c15=a61_0x5b08;if(_0x5c52bb){const _0x26eeda=_0x5c52bb[_0x1d6c15(0x150)](_0x25f835,arguments);return _0x5c52bb=null,_0x26eeda;}}:function(){};return _0x2cd8ad=![],_0x1d4a34;};}()),a61_0x3c4882=a61_0x3164e4(this,function(){const _0xc529c0=a61_0x5b08;return a61_0x3c4882['toString']()[_0xc529c0(0x158)](_0xc529c0(0x13c))[_0xc529c0(0x143)]()[_0xc529c0(0x144)](a61_0x3c4882)[_0xc529c0(0x158)](_0xc529c0(0x13c));});a61_0x3c4882();'use strict';function a61_0x5b08(_0x117d7d,_0x203434){const _0x5cebec=a61_0xc0fc();return a61_0x5b08=function(_0x3c4882,_0x3164e4){_0x3c4882=_0x3c4882-0x13a;let _0xc0fc2e=_0x5cebec[_0x3c4882];return _0xc0fc2e;},a61_0x5b08(_0x117d7d,_0x203434);}Object[a61_0x4df26c(0x154)](exports,a61_0x4df26c(0x14d),{'value':!![]}),exports[a61_0x4df26c(0x147)]=void 0x0;function a61_0xc0fc(){const _0x52dd14=['log','649292JwUHMg','(((.+)+)+)+$','fields','3218520pXfcOq','getRetrieveStream','1205360XWSroH','pipeline','144BzwEyB','toString','constructor','keys','getDeployStream','MaskingStep','objectName','getMaskingStream','name','1367288uAGMoQ','setObjectStatus','__esModule','Masking\x20object\x20\x27','IN_PROGRESS','apply','objectRule','reduce','COMPLETED','defineProperty','StandardMasking','recordsCount','Finish\x20masking\x20for\x20object\x20\x27','search','loggerJobState','fieldRules','354KaUxvf','BaseStep','stream/promises','_libraries','execute','41208FmgQmG','35416VirKtO','ObjectStatus','2361464xiaLOU','../../enums/logger.enums'];a61_0xc0fc=function(){return _0x52dd14;};return a61_0xc0fc();}const promises_1=require(a61_0x4df26c(0x15d)),logger_enums_1=require(a61_0x4df26c(0x164)),standard_masking_1=require('../../masking/standard-masking'),base_step_1=require('./base-step');class MaskingStep extends base_step_1[a61_0x4df26c(0x15c)]{constructor({libraries:_0x3a8f3a,..._0x173c22}){const _0x34e8d4=a61_0x4df26c;super(_0x173c22),this[_0x34e8d4(0x151)]=_0x173c22[_0x34e8d4(0x151)],this[_0x34e8d4(0x15e)]=_0x3a8f3a,this[_0x34e8d4(0x13d)]=Object[_0x34e8d4(0x145)](this[_0x34e8d4(0x151)]['fieldRules']);}async[a61_0x4df26c(0x15f)](){const _0x5249ec=a61_0x4df26c;this['log'](_0x5249ec(0x14e)+this['objectName']+'\x27'),this[_0x5249ec(0x159)]['setObjectStatus'](this[_0x5249ec(0x148)],logger_enums_1['ObjectStatus'][_0x5249ec(0x14f)]);try{this[_0x5249ec(0x156)]=await this['getRecordsCount'](),this[_0x5249ec(0x156)]!==0x0&&await(0x0,promises_1[_0x5249ec(0x141)])(this[_0x5249ec(0x13f)](),this[_0x5249ec(0x149)](),this[_0x5249ec(0x146)]()),this[_0x5249ec(0x159)][_0x5249ec(0x14c)](this['objectName'],logger_enums_1[_0x5249ec(0x162)][_0x5249ec(0x153)]),this[_0x5249ec(0x13a)](_0x5249ec(0x157)+this['objectName']+'\x27');}catch(_0x3cc757){this['error'](_0x3cc757),this[_0x5249ec(0x159)][_0x5249ec(0x14c)](this[_0x5249ec(0x148)],logger_enums_1['ObjectStatus']['FAILED']);}}['getMaskingStream'](){const _0x148121=a61_0x4df26c,_0x9c9ae5=this['objectDescribe'][_0x148121(0x13d)][_0x148121(0x152)]((_0x274061,_0x5220cd)=>_0x274061['set'](_0x5220cd[_0x148121(0x14a)],_0x5220cd),new Map()),_0x21f563={'objectName':this[_0x148121(0x148)],'fieldRules':this[_0x148121(0x151)][_0x148121(0x15a)],'describeFieldMap':_0x9c9ae5,'libraries':this[_0x148121(0x15e)]};return new standard_masking_1[(_0x148121(0x155))](_0x21f563);}}exports[a61_0x4df26c(0x147)]=MaskingStep;