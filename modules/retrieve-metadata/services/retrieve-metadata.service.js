const a277_0x3d212b=a277_0x3f0f;(function(_0x1c0284,_0x182346){const _0x2f5380=a277_0x3f0f,_0x2d157b=_0x1c0284();while(!![]){try{const _0x3bd080=parseInt(_0x2f5380(0x10e))/0x1*(-parseInt(_0x2f5380(0x135))/0x2)+-parseInt(_0x2f5380(0x12e))/0x3*(parseInt(_0x2f5380(0x106))/0x4)+parseInt(_0x2f5380(0x128))/0x5+parseInt(_0x2f5380(0x11a))/0x6+parseInt(_0x2f5380(0xfe))/0x7+parseInt(_0x2f5380(0x11c))/0x8*(-parseInt(_0x2f5380(0x115))/0x9)+-parseInt(_0x2f5380(0x131))/0xa;if(_0x3bd080===_0x182346)break;else _0x2d157b['push'](_0x2d157b['shift']());}catch(_0x3041b9){_0x2d157b['push'](_0x2d157b['shift']());}}}(a277_0x4c76,0xa301b));const a277_0x88a454=(function(){let _0x1ea4b5=!![];return function(_0x392a99,_0x2701aa){const _0x27c858=_0x1ea4b5?function(){const _0x2b4a76=a277_0x3f0f;if(_0x2701aa){const _0x31282e=_0x2701aa[_0x2b4a76(0x105)](_0x392a99,arguments);return _0x2701aa=null,_0x31282e;}}:function(){};return _0x1ea4b5=![],_0x27c858;};}()),a277_0x4c919c=a277_0x88a454(this,function(){const _0x2b93d0=a277_0x3f0f;return a277_0x4c919c[_0x2b93d0(0xff)]()[_0x2b93d0(0x12a)](_0x2b93d0(0x10c))[_0x2b93d0(0xff)]()[_0x2b93d0(0x138)](a277_0x4c919c)[_0x2b93d0(0x12a)](_0x2b93d0(0x10c));});a277_0x4c919c();function a277_0x4c76(){const _0x2cda7c=['init','5419800UstOdH','data','search','.json','../../../core/errors/bad-request.error','getJobLogs','2649333AyMMiH','JobStatus','__esModule','2419390iJnYby','NotFoundError','create','makeDir','2QnESbp','JOB_PATH','utf-8','constructor','getJobsIds','Chunk\x20not\x20found.','3804430gtxtYV','toString','sortJobsIds','readFile','join','IN_PROGRESS','setError','apply','4QhGGPz','__importDefault','getResult','getJobs','getJobState','RETRIEVE_METADATA_FOLDER_NAME','(((.+)+)+)+$','../../shared/utils/job.utils','710927aTLVMB','isExistsPath','fs/promises','../../shared/managers/state-manger','@flosum/utils','push','FsUtils','18Azzuom','then','Job\x20not\x20completed.','Job\x20log\x20not\x20found.','../../shared/utils/csv.utils','7707456kxgBbx','getJobStatus','1633496vXkgBJ','default','createRetrieveJob','Result\x20not\x20found.','BadRequestError','retrieveMetadataFolder','RETRIEVE_RESULTS_IDS_FILENAME','slice','parse','../../../configs/path','catch'];a277_0x4c76=function(){return _0x2cda7c;};return a277_0x4c76();}function a277_0x3f0f(_0x36d5b4,_0x3b169d){const _0x38f84d=a277_0x4c76();return a277_0x3f0f=function(_0x4c919c,_0x88a454){_0x4c919c=_0x4c919c-0xfc;let _0x4c7613=_0x38f84d[_0x4c919c];return _0x4c7613;},a277_0x3f0f(_0x36d5b4,_0x3b169d);}'use strict';var __importDefault=this&&this[a277_0x3d212b(0x107)]||function(_0x1a3566){const _0x1cb616=a277_0x3d212b;return _0x1a3566&&_0x1a3566[_0x1cb616(0x130)]?_0x1a3566:{'default':_0x1a3566};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const job_utils_1=__importDefault(require(a277_0x3d212b(0x10d))),path_1=__importDefault(require('path')),manifest_manger_1=__importDefault(require('../job/classes/manifest-manger')),state_manger_1=__importDefault(require(a277_0x3d212b(0x111))),promises_1=require(a277_0x3d212b(0x110)),utils_1=require(a277_0x3d212b(0x112)),csv_utils_1=__importDefault(require(a277_0x3d212b(0x119))),not_found_error_1=require('../../../core/errors/not-found.error'),logger_enums_1=require('../../shared/enums/logger.enums'),bad_request_error_1=require(a277_0x3d212b(0x12c)),job_1=require('../../../constants/job'),fs_utils_1=require('../../shared/utils/fs.utils'),constants_1=require('../constants'),path_2=require(a277_0x3d212b(0x125));class RetrieveMetadataService{static async[a277_0x3d212b(0x109)](_0xedb77a,_0x3cfc7b){const _0x167afc=a277_0x3d212b,_0x4d5b43=await job_utils_1[_0x167afc(0x11d)][_0x167afc(0xfc)](RetrieveMetadataService['retrieveMetadataFolder']),_0x120006=await job_utils_1[_0x167afc(0x11d)][_0x167afc(0x100)](RetrieveMetadataService['retrieveMetadataFolder'],_0x4d5b43),_0x16fcbf=_0x120006[_0x167afc(0x123)](_0x3cfc7b,_0x3cfc7b+_0xedb77a),_0x4a17f1=[];for(const _0x4a84e8 of _0x16fcbf){const _0x45ed97=await state_manger_1[_0x167afc(0x11d)][_0x167afc(0x10a)](path_1[_0x167afc(0x11d)][_0x167afc(0x102)](RetrieveMetadataService[_0x167afc(0x121)],_0x4a84e8));_0x4a17f1[_0x167afc(0x113)](_0x45ed97);}return _0x4a17f1;}static async[a277_0x3d212b(0x11e)](_0x3609dd){const _0x301773=a277_0x3d212b,_0x1e3f6f=job_utils_1[_0x301773(0x11d)]['generateJobId'](),_0x4347e8=path_1[_0x301773(0x11d)][_0x301773(0x102)](RetrieveMetadataService[_0x301773(0x121)],_0x1e3f6f);await(0x0,fs_utils_1[_0x301773(0x134)])(_0x4347e8),await manifest_manger_1[_0x301773(0x11d)][_0x301773(0x133)](_0x4347e8,_0x3609dd),await state_manger_1[_0x301773(0x11d)][_0x301773(0x133)](_0x4347e8,_0x1e3f6f);const _0x109b92=path_1[_0x301773(0x11d)][_0x301773(0x102)](__dirname,job_1[_0x301773(0x136)]);return job_utils_1[_0x301773(0x11d)]['runJob'](_0x109b92,{'jobStorePath':_0x4347e8,'jobId':_0x1e3f6f})[_0x301773(0x126)](async _0x271ac8=>{const _0x52b2de=_0x301773,_0xf0b830=new state_manger_1['default'](_0x4347e8);await _0xf0b830[_0x52b2de(0x127)](),await _0xf0b830[_0x52b2de(0x104)](_0x271ac8);}),{'jobId':_0x1e3f6f};}static async[a277_0x3d212b(0x108)](_0x1d4ee0){const _0x50ee1d=a277_0x3d212b,{status:_0x3d148e}=await RetrieveMetadataService[_0x50ee1d(0x11b)](_0x1d4ee0);if(_0x3d148e===logger_enums_1[_0x50ee1d(0x12f)]['IN_PROGRESS'])throw new bad_request_error_1[(_0x50ee1d(0x120))]('Job\x20not\x20completed.');const _0xe227d5=path_1['default'][_0x50ee1d(0x102)](RetrieveMetadataService[_0x50ee1d(0x121)],_0x1d4ee0,constants_1[_0x50ee1d(0x122)]);if(await utils_1[_0x50ee1d(0x114)][_0x50ee1d(0x10f)](_0xe227d5))return(0x0,promises_1[_0x50ee1d(0x101)])(_0xe227d5,_0x50ee1d(0x137))[_0x50ee1d(0x116)](JSON['parse']);else throw new not_found_error_1[(_0x50ee1d(0x132))](_0x50ee1d(0x11f));}static async['getResultChunk'](_0x169a64,_0x5cd0f2){const _0x37fa4a=a277_0x3d212b,{status:_0x4a8b5a}=await RetrieveMetadataService[_0x37fa4a(0x11b)](_0x169a64);if(_0x4a8b5a===logger_enums_1[_0x37fa4a(0x12f)][_0x37fa4a(0x103)])throw new bad_request_error_1['BadRequestError'](_0x37fa4a(0x117));const _0x175b57=path_1[_0x37fa4a(0x11d)]['join'](RetrieveMetadataService[_0x37fa4a(0x121)],_0x169a64,constants_1['RETRIEVE_RESULT_FOLDER_NAME']),_0x526b58={'data':[]};if(await utils_1[_0x37fa4a(0x114)]['isExistsPath'](path_1[_0x37fa4a(0x11d)][_0x37fa4a(0x102)](_0x175b57,_0x5cd0f2+_0x37fa4a(0x12b))))_0x526b58[_0x37fa4a(0x129)]=await(0x0,promises_1[_0x37fa4a(0x101)])(path_1[_0x37fa4a(0x11d)][_0x37fa4a(0x102)](_0x175b57,_0x5cd0f2+_0x37fa4a(0x12b)),_0x37fa4a(0x137))[_0x37fa4a(0x116)](JSON[_0x37fa4a(0x124)]);else throw new not_found_error_1[(_0x37fa4a(0x132))](_0x37fa4a(0xfd));return _0x526b58;}static async['getJobStatus'](_0x7c39b6){const _0x78f20f=a277_0x3d212b;try{return await state_manger_1['default'][_0x78f20f(0x10a)](path_1['default'][_0x78f20f(0x102)](RetrieveMetadataService[_0x78f20f(0x121)],_0x7c39b6));}catch(_0x530f48){throw new not_found_error_1['NotFoundError'](_0x530f48);}}static async[a277_0x3d212b(0x12d)](_0x53f38b){const _0xaa3f1=a277_0x3d212b,_0x37dafd=path_1[_0xaa3f1(0x11d)][_0xaa3f1(0x102)](RetrieveMetadataService['retrieveMetadataFolder'],_0x53f38b,job_1['JOB_LOG_DETAILS_FILENAME']);if(await utils_1[_0xaa3f1(0x114)]['isExistsPath'](_0x37dafd))return(0x0,promises_1['readFile'])(_0x37dafd,_0xaa3f1(0x137))['then'](_0x2ae586=>csv_utils_1[_0xaa3f1(0x11d)]['parse'](_0x2ae586,{'columns':!![]}));throw new not_found_error_1[(_0xaa3f1(0x132))](_0xaa3f1(0x118));}}exports[a277_0x3d212b(0x11d)]=RetrieveMetadataService,RetrieveMetadataService[a277_0x3d212b(0x121)]=path_1['default']['join'](path_2['dataPath'],constants_1[a277_0x3d212b(0x10b)]);