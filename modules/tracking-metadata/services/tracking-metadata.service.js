const a300_0x596b78=a300_0x33b8;function a300_0x48aa(){const _0xf19f58=['TRACKING_METADATA_FOLDER_NAME','15499ZOcjKC','dataPath','8LErZIs','stringify','../../../constants/job','fs/promises','../../../core','TrackingMetadataService','5WnHMjN','catch','generateJobId','1982892wSZBEo','2602964xtKpRW','12yHpbmt','3033740AZivrM','createJob','Logger','createManifest','join','runJob','constructor','4664733XqkROG','../constants','default','makeDir','../../shared/utils/fs.utils','apply','search','3190rrybWa','1ZTIQJS','__importDefault','1103962RiMFlu','__esModule','MANIFEST_FILENAME','defineProperty','path','4135041ioiFiU','(((.+)+)+)+$','writeFile','error','getManifestPath','toString','trackingMetadataFolder'];a300_0x48aa=function(){return _0xf19f58;};return a300_0x48aa();}(function(_0x157583,_0x46c592){const _0x4a34cf=a300_0x33b8,_0x32f4f9=_0x157583();while(!![]){try{const _0x5148fb=parseInt(_0x4a34cf(0x1da))/0x1*(parseInt(_0x4a34cf(0x1dc))/0x2)+parseInt(_0x4a34cf(0x1d2))/0x3+-parseInt(_0x4a34cf(0x1cb))/0x4*(parseInt(_0x4a34cf(0x1c5))/0x5)+-parseInt(_0x4a34cf(0x1ca))/0x6*(parseInt(_0x4a34cf(0x1c9))/0x7)+-parseInt(_0x4a34cf(0x1bf))/0x8*(-parseInt(_0x4a34cf(0x1e1))/0x9)+-parseInt(_0x4a34cf(0x1d9))/0xa*(parseInt(_0x4a34cf(0x1bd))/0xb)+parseInt(_0x4a34cf(0x1c8))/0xc;if(_0x5148fb===_0x46c592)break;else _0x32f4f9['push'](_0x32f4f9['shift']());}catch(_0x5e9b7f){_0x32f4f9['push'](_0x32f4f9['shift']());}}}(a300_0x48aa,0xbe6c4));const a300_0x3e31dc=(function(){let _0x2ee8be=!![];return function(_0x35536a,_0x42a0ca){const _0x25cab7=_0x2ee8be?function(){const _0x42c17b=a300_0x33b8;if(_0x42a0ca){const _0x260725=_0x42a0ca[_0x42c17b(0x1d7)](_0x35536a,arguments);return _0x42a0ca=null,_0x260725;}}:function(){};return _0x2ee8be=![],_0x25cab7;};}()),a300_0x3a6465=a300_0x3e31dc(this,function(){const _0x5758f5=a300_0x33b8;return a300_0x3a6465[_0x5758f5(0x1e6)]()[_0x5758f5(0x1d8)](_0x5758f5(0x1e2))[_0x5758f5(0x1e6)]()[_0x5758f5(0x1d1)](a300_0x3a6465)[_0x5758f5(0x1d8)](_0x5758f5(0x1e2));});a300_0x3a6465();'use strict';var __importDefault=this&&this[a300_0x596b78(0x1db)]||function(_0x1fee7c){const _0x361a31=a300_0x596b78;return _0x1fee7c&&_0x1fee7c[_0x361a31(0x1dd)]?_0x1fee7c:{'default':_0x1fee7c};};Object[a300_0x596b78(0x1df)](exports,a300_0x596b78(0x1dd),{'value':!![]}),exports[a300_0x596b78(0x1c4)]=void 0x0;const job_utils_1=__importDefault(require('../../shared/utils/job.utils')),path_1=__importDefault(require(a300_0x596b78(0x1e0))),fs_utils_1=require(a300_0x596b78(0x1d6)),job_1=require(a300_0x596b78(0x1c1)),path_2=require('../../../configs/path'),constants_1=require(a300_0x596b78(0x1d3)),promises_1=require(a300_0x596b78(0x1c2)),core_1=require(a300_0x596b78(0x1c3));class TrackingMetadataService{static async[a300_0x596b78(0x1cc)](_0x5907cb){const _0x5219ed=a300_0x596b78,_0x14c0a5=job_utils_1[_0x5219ed(0x1d4)][_0x5219ed(0x1c7)](),_0x2ad303=path_1[_0x5219ed(0x1d4)]['join'](TrackingMetadataService[_0x5219ed(0x1bb)],_0x14c0a5);await(0x0,fs_utils_1[_0x5219ed(0x1d5)])(_0x2ad303),await this['createManifest'](_0x2ad303,_0x5907cb);const _0x600f05=path_1['default'][_0x5219ed(0x1cf)](__dirname,job_1['JOB_PATH']),_0xc71093=new core_1[(_0x5219ed(0x1cd))](_0x14c0a5);return job_utils_1[_0x5219ed(0x1d4)][_0x5219ed(0x1d0)](_0x600f05,{'jobStorePath':_0x2ad303,'jobId':_0x14c0a5})[_0x5219ed(0x1c6)](async _0x121bb8=>{const _0x179542=_0x5219ed;_0xc71093[_0x179542(0x1e4)](_0x121bb8);}),{'jobId':_0x14c0a5};}static async[a300_0x596b78(0x1ce)](_0x5a0aaa,_0x45770e){const _0x49368c=a300_0x596b78,_0x9b3205=this['getManifestPath'](_0x5a0aaa);return(0x0,promises_1[_0x49368c(0x1e3)])(_0x9b3205,JSON[_0x49368c(0x1c0)]({'details':_0x45770e}));}static[a300_0x596b78(0x1e5)](_0x178597){const _0x5cb40a=a300_0x596b78;return path_1[_0x5cb40a(0x1d4)]['join'](_0x178597,job_1[_0x5cb40a(0x1de)]);}}function a300_0x33b8(_0x5de2e9,_0x5514f2){const _0x237432=a300_0x48aa();return a300_0x33b8=function(_0x3a6465,_0x3e31dc){_0x3a6465=_0x3a6465-0x1bb;let _0x48aa12=_0x237432[_0x3a6465];return _0x48aa12;},a300_0x33b8(_0x5de2e9,_0x5514f2);}exports[a300_0x596b78(0x1c4)]=TrackingMetadataService,TrackingMetadataService[a300_0x596b78(0x1bb)]=path_1['default'][a300_0x596b78(0x1cf)](path_2[a300_0x596b78(0x1be)],constants_1[a300_0x596b78(0x1bc)]);