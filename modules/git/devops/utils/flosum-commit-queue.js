const a74_0x8e1e43=a74_0x1954;function a74_0x2661(){const _0x2e6762=['commit','apply','__esModule','8qGThMI','syncBranchId','34LLrzoH','180653PIQgzM','17340DmntzX','isSingleOperation','457982JLwwym','8QpLTpu','logger','push','search','commitAttachmentId','388728FiosBN','toString','log','298181QFSExx','../../../shared/utils','28470xcpbXn','(((.+)+)+)+$','name','constructor','add\x20new\x20commit\x20to\x20queue\x20\x22%s\x22','84elqBip','length','235269fgWewx','235QfZSqj','60icXtIc','Logger','run','deleteAttachmentId','queue'];a74_0x2661=function(){return _0x2e6762;};return a74_0x2661();}function a74_0x1954(_0x4f8747,_0x49c892){const _0xa9587b=a74_0x2661();return a74_0x1954=function(_0x31069c,_0x1f807e){_0x31069c=_0x31069c-0xe0;let _0x2661b7=_0xa9587b[_0x31069c];return _0x2661b7;},a74_0x1954(_0x4f8747,_0x49c892);}(function(_0xc603e5,_0x381357){const _0x25a249=a74_0x1954,_0x30a3d7=_0xc603e5();while(!![]){try{const _0x530c3f=-parseInt(_0x25a249(0xef))/0x1*(-parseInt(_0x25a249(0xed))/0x2)+-parseInt(_0x25a249(0xe1))/0x3*(-parseInt(_0x25a249(0xeb))/0x4)+-parseInt(_0x25a249(0xe2))/0x5*(parseInt(_0x25a249(0xfc))/0x6)+parseInt(_0x25a249(0xf1))/0x7*(parseInt(_0x25a249(0xf2))/0x8)+parseInt(_0x25a249(0xf7))/0x9*(-parseInt(_0x25a249(0xe3))/0xa)+-parseInt(_0x25a249(0xee))/0xb+parseInt(_0x25a249(0x101))/0xc*(parseInt(_0x25a249(0xfa))/0xd);if(_0x530c3f===_0x381357)break;else _0x30a3d7['push'](_0x30a3d7['shift']());}catch(_0x11936d){_0x30a3d7['push'](_0x30a3d7['shift']());}}}(a74_0x2661,0x2bb4d));const a74_0x1f807e=(function(){let _0x37485c=!![];return function(_0x1da972,_0x4efb5c){const _0x3f1c4a=_0x37485c?function(){const _0x4fd356=a74_0x1954;if(_0x4efb5c){const _0x58dfd7=_0x4efb5c[_0x4fd356(0xe9)](_0x1da972,arguments);return _0x4efb5c=null,_0x58dfd7;}}:function(){};return _0x37485c=![],_0x3f1c4a;};}()),a74_0x31069c=a74_0x1f807e(this,function(){const _0x478d00=a74_0x1954;return a74_0x31069c[_0x478d00(0xf8)]()[_0x478d00(0xf5)](_0x478d00(0xfd))['toString']()[_0x478d00(0xff)](a74_0x31069c)[_0x478d00(0xf5)](_0x478d00(0xfd));});a74_0x31069c();'use strict';Object['defineProperty'](exports,a74_0x8e1e43(0xea),{'value':!![]}),exports['FlosumCommitQueue']=void 0x0;const commits_queue_1=require('./commits-queue'),core_1=require('../../../../core'),utils_1=require(a74_0x8e1e43(0xfb));class FlosumCommitQueue extends commits_queue_1['CommitsQueue']{constructor(){const _0x460eca=a74_0x8e1e43;super('flosum.commit'),this['logger']=new core_1[(_0x460eca(0xe4))](FlosumCommitQueue[_0x460eca(0xfe)]);}['add'](_0x3d0a0a,_0x5471f5,_0x1e9d51){const _0x444cd1=a74_0x8e1e43;var _0xb87506,_0x243c96,_0x146d55;const _0x14b901=_0x3d0a0a['syncRepositoryId']+'#'+_0x3d0a0a[_0x444cd1(0xec)]+'#'+_0x1e9d51;this[_0x444cd1(0xf3)][_0x444cd1(0xf9)](_0x444cd1(0x100),_0x14b901),(_0xb87506=this[_0x444cd1(0xe7)])[_0x14b901]||(_0xb87506[_0x14b901]=[]);const _0x439769=utils_1['getLastArrayItem'](this[_0x444cd1(0xe7)][_0x14b901]);_0x3d0a0a[_0x444cd1(0xf0)]&&this[_0x444cd1(0xe7)][_0x14b901][_0x444cd1(0xe0)]&&_0x439769[_0x444cd1(0xe8)][_0x444cd1(0xf0)]?_0x439769[_0x444cd1(0xe8)]['isSingleOperation']&&((_0x243c96=_0x439769[_0x444cd1(0xe8)])[_0x444cd1(0xf6)]||(_0x243c96['commitAttachmentId']=_0x3d0a0a['commitAttachmentId']),(_0x146d55=_0x439769[_0x444cd1(0xe8)])[_0x444cd1(0xe6)]||(_0x146d55[_0x444cd1(0xe6)]=_0x3d0a0a[_0x444cd1(0xe6)])):this['queue'][_0x14b901][_0x444cd1(0xf4)]({'commit':_0x3d0a0a,'loggerId':_0x5471f5,'connectionId':_0x1e9d51}),this[_0x444cd1(0xe5)](_0x14b901);}}exports['FlosumCommitQueue']=FlosumCommitQueue;