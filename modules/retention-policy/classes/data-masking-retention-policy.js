const a279_0x5d1187=a279_0x138f;function a279_0x3089(){const _0x7201bf=['(((.+)+)+)+$','1606536YuDfAc','../../data-masking/services/masking.service','name','35515LaPwVu','readFile','MaskingService','search','getJobCompletedDate','../../../core','utf-8','JOB_LOG_STATE_FILENAME','filterExpiredJobs','110swXzPR','completedDate','getTime','fs/promises','toString','104735uCnOtu','DataMaskingRetentionPolicy','logger','74JjkXRQ','error','6006264EaSekX','deleteJob','35jYwoWu','../../shared/utils/job.utils','__importDefault','getJobsIds','isExistsPath','@flosum/utils','execute','path','1766130wxQZdG','join','__esModule','36101681oNdXGc','apply','maskingFolderPath','100vBTJyw','default','constructor','EXPIRED_RANGE_DATE','1030059MisKZa'];a279_0x3089=function(){return _0x7201bf;};return a279_0x3089();}(function(_0x189c0d,_0x187eee){const _0x52a5df=a279_0x138f,_0x81953c=_0x189c0d();while(!![]){try{const _0x199639=parseInt(_0x52a5df(0xee))/0x1*(-parseInt(_0x52a5df(0xff))/0x2)+parseInt(_0x52a5df(0xdf))/0x3+-parseInt(_0x52a5df(0xe5))/0x4*(parseInt(_0x52a5df(0xfc))/0x5)+parseInt(_0x52a5df(0x101))/0x6+parseInt(_0x52a5df(0x103))/0x7*(-parseInt(_0x52a5df(0xeb))/0x8)+parseInt(_0x52a5df(0xe9))/0x9*(-parseInt(_0x52a5df(0xf7))/0xa)+parseInt(_0x52a5df(0xe2))/0xb;if(_0x199639===_0x187eee)break;else _0x81953c['push'](_0x81953c['shift']());}catch(_0x1efde9){_0x81953c['push'](_0x81953c['shift']());}}}(a279_0x3089,0xbc385));const a279_0x2a0d73=(function(){let _0xa168bd=!![];return function(_0x1d6ed2,_0x38539a){const _0x1c7dc7=_0xa168bd?function(){const _0x46fc6f=a279_0x138f;if(_0x38539a){const _0x2aa30c=_0x38539a[_0x46fc6f(0xe3)](_0x1d6ed2,arguments);return _0x38539a=null,_0x2aa30c;}}:function(){};return _0xa168bd=![],_0x1c7dc7;};}()),a279_0x1baf65=a279_0x2a0d73(this,function(){const _0x424bd6=a279_0x138f;return a279_0x1baf65[_0x424bd6(0xfb)]()['search'](_0x424bd6(0xea))['toString']()[_0x424bd6(0xe7)](a279_0x1baf65)[_0x424bd6(0xf1)](_0x424bd6(0xea));});a279_0x1baf65();'use strict';var __importDefault=this&&this[a279_0x5d1187(0x105)]||function(_0xb219b7){const _0x183465=a279_0x5d1187;return _0xb219b7&&_0xb219b7[_0x183465(0xe1)]?_0xb219b7:{'default':_0xb219b7};};function a279_0x138f(_0xf5a161,_0x40a893){const _0x1c1052=a279_0x3089();return a279_0x138f=function(_0x1baf65,_0x2a0d73){_0x1baf65=_0x1baf65-0xdc;let _0x3089d5=_0x1c1052[_0x1baf65];return _0x3089d5;},a279_0x138f(_0xf5a161,_0x40a893);}Object['defineProperty'](exports,a279_0x5d1187(0xe1),{'value':!![]}),exports[a279_0x5d1187(0xfd)]=void 0x0;const promises_1=require(a279_0x5d1187(0xfa)),core_1=require(a279_0x5d1187(0xf3)),utils_1=require(a279_0x5d1187(0xdc)),job_1=require('../../../constants/job'),job_utils_1=__importDefault(require(a279_0x5d1187(0x104))),masking_service_1=require(a279_0x5d1187(0xec)),path_1=__importDefault(require(a279_0x5d1187(0xde)));class DataMaskingRetentionPolicy{constructor(){const _0x4b9f0c=a279_0x5d1187;this[_0x4b9f0c(0xe8)]=0x9a7ec800,this[_0x4b9f0c(0xfe)]=new core_1['Logger'](DataMaskingRetentionPolicy[_0x4b9f0c(0xed)]);}async[a279_0x5d1187(0xdd)](){const _0x6cf897=a279_0x5d1187;try{const _0x5e3e41=await job_utils_1[_0x6cf897(0xe6)][_0x6cf897(0x106)](masking_service_1[_0x6cf897(0xf0)][_0x6cf897(0xe4)]),_0x207def=await this[_0x6cf897(0xf6)](_0x5e3e41);for(const _0x4620d9 of _0x207def){await this['deleteJob'](_0x4620d9);}}catch(_0x3996c7){this[_0x6cf897(0xfe)][_0x6cf897(0x100)](_0x3996c7);}}async[a279_0x5d1187(0xf6)](_0xb6467c){const _0x75ae87=a279_0x5d1187,_0x421f8d=[];for(const _0xe53079 of _0xb6467c){const _0x2a2c93=await this[_0x75ae87(0xf2)](_0xe53079),_0x544fe7=_0x2a2c93&&this['isExpiredDate'](_0x2a2c93);_0x544fe7&&_0x421f8d['push'](_0xe53079);}return _0x421f8d;}async['getJobCompletedDate'](_0x1c06e5){const _0x1eb9a6=a279_0x5d1187;var _0x419b48;const _0x4fdea=path_1[_0x1eb9a6(0xe6)][_0x1eb9a6(0xe0)](masking_service_1[_0x1eb9a6(0xf0)]['maskingFolderPath'],_0x1c06e5,job_1[_0x1eb9a6(0xf5)]);if(!await utils_1['FsUtils'][_0x1eb9a6(0x107)](_0x4fdea))return null;const _0x136b75=await(0x0,promises_1[_0x1eb9a6(0xef)])(_0x4fdea,{'encoding':_0x1eb9a6(0xf4)});return(_0x419b48=JSON['parse'](_0x136b75)[_0x1eb9a6(0xf8)])!==null&&_0x419b48!==void 0x0?_0x419b48:null;}['isExpiredDate'](_0x21b18a){const _0x1fb4ea=a279_0x5d1187;return new Date()[_0x1fb4ea(0xf9)]()-_0x21b18a>this[_0x1fb4ea(0xe8)];}[a279_0x5d1187(0x102)](_0x5ac01c){const _0x3abf2a=a279_0x5d1187,_0x36d11d=path_1[_0x3abf2a(0xe6)][_0x3abf2a(0xe0)](masking_service_1[_0x3abf2a(0xf0)]['maskingFolderPath'],_0x5ac01c);return(0x0,promises_1['rm'])(_0x36d11d,{'recursive':!![],'force':!![]});}}exports[a279_0x5d1187(0xfd)]=DataMaskingRetentionPolicy;