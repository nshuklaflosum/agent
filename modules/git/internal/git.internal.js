const a126_0x5ebb83=a126_0x1487;(function(_0x42bfb4,_0x583d56){const _0x48dad8=a126_0x1487,_0x5ef5e4=_0x42bfb4();while(!![]){try{const _0xb56b45=parseInt(_0x48dad8(0x184))/0x1*(parseInt(_0x48dad8(0x186))/0x2)+parseInt(_0x48dad8(0x1ad))/0x3*(parseInt(_0x48dad8(0x1b0))/0x4)+-parseInt(_0x48dad8(0x178))/0x5*(-parseInt(_0x48dad8(0x174))/0x6)+-parseInt(_0x48dad8(0x1aa))/0x7+parseInt(_0x48dad8(0x175))/0x8+-parseInt(_0x48dad8(0x1ab))/0x9*(-parseInt(_0x48dad8(0x183))/0xa)+parseInt(_0x48dad8(0x1a6))/0xb*(-parseInt(_0x48dad8(0x19d))/0xc);if(_0xb56b45===_0x583d56)break;else _0x5ef5e4['push'](_0x5ef5e4['shift']());}catch(_0x435097){_0x5ef5e4['push'](_0x5ef5e4['shift']());}}}(a126_0x1fa6,0x71541));function a126_0x1fa6(){const _0x32e18b=['./fs.internal','__importDefault','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','(((.+)+)+)+$','../../shared/utils','getRemoteHash','BranchDto','_repoPath','6ZKgOrh','7330928lRPHvC','extractEmailFromCommitDescribe','ChildProcessUtils','3847365fgFvix','removeDir','\x20--refs','\x20&&\x20git\x20status','path','../../../constants','log','getCurrentHash','__esModule','clone','makeDir','1720MIOzzj','638777DDSUQU','clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch','2oJEcah','\x20&&\x20git\x20push\x20origin\x20','.temp','cd\x20','checkout\x20to\x20%s','search','default','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','checkout','apply','\x20&&\x20git\x20checkout\x20--orphan\x20','../providers/branches/dto/branch.dto','map','getProtocol','\x20--quiet','../../../core','replace','cwd','push\x20changes\x20to\x20%s','name','join','\x20&&\x20git\x20commit\x20-m\x20\x22','match','48LYKkfb','filter','baseDir','add','createEmptyBranch','://','gitUrl','extractMessageFromCommitDescribe','getGitShellAuthorizationString','8679099knggQv','DEFAULT_CLONE_PATH','INITIAL_COMMIT','Git','379484BaIXDl','24588JFAtmx','describe\x20commit\x20%s','63iOBmJA','Logger','spawnPromise','167604WjgvTB','git\x20ls-remote\x20','clone\x20repository\x20branch\x20%s\x20to\x20%s','logger','then','toString','extractAuthorFromCommitDescribe','setCredentials','push','DEFAULT_GIT_USER_NAME','\x20--single-branch\x20','test','describeCommit','DEFAULT_GIT_USER_EMAIL','refs/heads/','getRepositoryBranches','\x20&&\x20git\x20add\x20'];a126_0x1fa6=function(){return _0x32e18b;};return a126_0x1fa6();}const a126_0x2802af=(function(){let _0x452a33=!![];return function(_0x41f6e6,_0xc9a960){const _0x1cb92f=_0x452a33?function(){const _0x1b9fa3=a126_0x1487;if(_0xc9a960){const _0x4968fa=_0xc9a960[_0x1b9fa3(0x18f)](_0x41f6e6,arguments);return _0xc9a960=null,_0x4968fa;}}:function(){};return _0x452a33=![],_0x1cb92f;};}()),a126_0x1608cc=a126_0x2802af(this,function(){const _0xd0e484=a126_0x1487;return a126_0x1608cc[_0xd0e484(0x1b5)]()['search'](_0xd0e484(0x1c4))['toString']()['constructor'](a126_0x1608cc)[_0xd0e484(0x18b)](_0xd0e484(0x1c4));});a126_0x1608cc();'use strict';var __importDefault=this&&this[a126_0x5ebb83(0x1c2)]||function(_0x4fdce2){const _0x5bc7ae=a126_0x5ebb83;return _0x4fdce2&&_0x4fdce2[_0x5bc7ae(0x180)]?_0x4fdce2:{'default':_0x4fdce2};};Object['defineProperty'](exports,a126_0x5ebb83(0x180),{'value':!![]}),exports[a126_0x5ebb83(0x1a9)]=void 0x0;const constants_1=require(a126_0x5ebb83(0x17d)),core_1=require(a126_0x5ebb83(0x195)),path_1=__importDefault(require(a126_0x5ebb83(0x17c))),branch_dto_1=require(a126_0x5ebb83(0x191)),utils_1=require(a126_0x5ebb83(0x1c5)),fs_internal_1=require(a126_0x5ebb83(0x1c1)),internal_utils_1=require('./internal.utils'),utils_2=require('@flosum/utils');class Git{constructor(_0x3054b7){const _0x5a9b99=a126_0x5ebb83;this[_0x5a9b99(0x1c8)]=_0x3054b7;}get[a126_0x5ebb83(0x19f)](){return this['_repoPath'];}async[a126_0x5ebb83(0x1b7)](_0x263e5,_0xc0d45a){const _0x597ee8=a126_0x5ebb83;await utils_2[_0x597ee8(0x177)]['spawnPromise'](_0x597ee8(0x189)+this[_0x597ee8(0x1c8)]+_0x597ee8(0x1c3)+_0x263e5+_0x597ee8(0x18d)+_0xc0d45a+'\x22','');}async[a126_0x5ebb83(0x1a0)](..._0x1cd8bb){const _0x1f01df=a126_0x5ebb83;await utils_2[_0x1f01df(0x177)][_0x1f01df(0x1af)]('cd\x20'+this['_repoPath']+_0x1f01df(0x1c0)+_0x1cd8bb[_0x1f01df(0x19a)]('\x20'),'');}async['status'](){const _0x2b04f0=a126_0x5ebb83;return utils_2[_0x2b04f0(0x177)][_0x2b04f0(0x1af)](_0x2b04f0(0x189)+this[_0x2b04f0(0x1c8)]+_0x2b04f0(0x17b),'');}async['commit'](_0x3b5e4b){const _0x3b4730=a126_0x5ebb83;Git['logger']['log']('commit\x20message\x20\x22%s\x22',_0x3b5e4b),await utils_2['ChildProcessUtils']['spawnPromise'](_0x3b4730(0x189)+this['_repoPath']+_0x3b4730(0x19b)+_0x3b5e4b+'\x22','');}async[a126_0x5ebb83(0x1b8)](_0x45afc0){const _0x4c57f0=a126_0x5ebb83;Git[_0x4c57f0(0x1b3)][_0x4c57f0(0x17e)](_0x4c57f0(0x198),_0x45afc0),await utils_2['ChildProcessUtils'][_0x4c57f0(0x1af)](_0x4c57f0(0x189)+this[_0x4c57f0(0x1c8)]+_0x4c57f0(0x187)+_0x45afc0+_0x4c57f0(0x194),'');}async[a126_0x5ebb83(0x18e)](_0x3203c8){const _0x591be6=a126_0x5ebb83;Git[_0x591be6(0x1b3)][_0x591be6(0x17e)](_0x591be6(0x18a),_0x3203c8),await utils_2[_0x591be6(0x177)]['spawnPromise'](_0x591be6(0x189)+this[_0x591be6(0x1c8)]+'\x20&&\x20git\x20checkout\x20'+_0x3203c8,'');}async[a126_0x5ebb83(0x17f)](){const _0x5ea12d=a126_0x5ebb83,_0x33f608=await utils_2[_0x5ea12d(0x177)][_0x5ea12d(0x1af)](_0x5ea12d(0x189)+this[_0x5ea12d(0x1c8)]+'\x20&&\x20git\x20rev-parse\x20HEAD','');return _0x33f608[_0x5ea12d(0x196)]('\x0a','');}async[a126_0x5ebb83(0x1bc)](_0x3f669e){const _0x526807=a126_0x5ebb83;Git[_0x526807(0x1b3)]['log'](_0x526807(0x1ac),_0x3f669e);const _0xd8eae3=await utils_2[_0x526807(0x177)][_0x526807(0x1af)]('cd\x20'+this[_0x526807(0x1c8)]+'\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20'+_0x3f669e,'');return{'author':(0x0,internal_utils_1[_0x526807(0x1b6)])(_0xd8eae3),'email':(0x0,internal_utils_1[_0x526807(0x176)])(_0xd8eae3),'message':(0x0,internal_utils_1[_0x526807(0x1a4)])(_0xd8eae3),'changes':(0x0,internal_utils_1['extractChangesFromCommitDescribe'])(_0xd8eae3)};}static async[a126_0x5ebb83(0x1c6)](_0x2a575f,_0x185a32){const _0x409c19=a126_0x5ebb83,[_0x570b02]=await utils_2['ChildProcessUtils'][_0x409c19(0x1af)](_0x409c19(0x1b1)+_0x2a575f+'\x20'+_0x185a32+_0x409c19(0x17a),'')[_0x409c19(0x1b4)](_0x534111=>_0x534111[_0x409c19(0x196)](/\s/g,'\x20')['split']('\x20'));return _0x570b02;}static async[a126_0x5ebb83(0x181)](_0x36a5a7,_0x293d19,_0xe11823){const _0x445d7a=a126_0x5ebb83,_0x22aefe=path_1['default'][_0x445d7a(0x19a)](this[_0x445d7a(0x1a7)],_0x293d19),_0x56f3d2=new Git(_0x22aefe);return Git[_0x445d7a(0x1b3)][_0x445d7a(0x17e)](_0x445d7a(0x1b2),_0xe11823,_0x22aefe),await fs_internal_1['FS'][_0x445d7a(0x179)](_0x22aefe),await utils_2[_0x445d7a(0x177)][_0x445d7a(0x1af)]('git\x20clone\x20-b\x20'+_0xe11823+_0x445d7a(0x1ba)+_0x36a5a7+'\x20'+_0x22aefe,''),_0x56f3d2;}static async[a126_0x5ebb83(0x1bf)](_0x4c178d,_0x149a42){const _0x555dfa=a126_0x5ebb83,_0x3563ee=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x5c1891=_0x4c178d[_0x555dfa(0x1a3)]['replace'](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x555dfa(0x193)])(_0x4c178d[_0x555dfa(0x1a3)])+_0x555dfa(0x1a2)+_0x149a42[_0x555dfa(0x1a5)]()+'@'),_0xca9e6b=await utils_2[_0x555dfa(0x177)][_0x555dfa(0x1af)](_0x555dfa(0x1b1)+_0x5c1891,'');return _0xca9e6b['split']('\x0a')[_0x555dfa(0x19e)](_0x32b830=>_0x3563ee[_0x555dfa(0x1bb)](_0x32b830))[_0x555dfa(0x192)](_0x41c663=>{const _0x536a7f=_0x555dfa,[,_0x4be684,_0x141299]=_0x41c663[_0x536a7f(0x19c)](_0x3563ee),_0x37290f=new branch_dto_1[(_0x536a7f(0x1c7))]();return _0x37290f['sha']=_0x4be684,_0x37290f[_0x536a7f(0x199)]=_0x141299[_0x536a7f(0x196)](_0x536a7f(0x1be),''),_0x37290f;});}static async[a126_0x5ebb83(0x1a1)](_0x478d01,_0x26a4c3,_0x4371e1,_0x3fbb66){const _0x267c5b=a126_0x5ebb83,_0x3f5494=_0x478d01['gitUrl']['replace'](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x267c5b(0x193)])(_0x478d01[_0x267c5b(0x1a3)])+_0x267c5b(0x1a2)+_0x3fbb66['getGitShellAuthorizationString']()+'@'),_0x2b3278=path_1[_0x267c5b(0x18c)][_0x267c5b(0x19a)](this[_0x267c5b(0x1a7)],_0x478d01[_0x267c5b(0x199)]);Git['logger'][_0x267c5b(0x17e)]('create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]',_0x478d01['name'],_0x26a4c3,_0x2b3278),await fs_internal_1['FS'][_0x267c5b(0x179)](_0x2b3278),await fs_internal_1['FS'][_0x267c5b(0x182)](_0x2b3278);const _0x2da055=new Git(_0x2b3278);await utils_2[_0x267c5b(0x177)][_0x267c5b(0x1af)](_0x267c5b(0x189)+_0x2da055[_0x267c5b(0x19f)]+'\x20&&\x20git\x20init',''),await utils_2[_0x267c5b(0x177)][_0x267c5b(0x1af)]('cd\x20'+_0x2da055['baseDir']+'\x20&&\x20git\x20remote\x20add\x20origin\x20'+_0x3f5494,''),await _0x2da055[_0x267c5b(0x1b7)](constants_1[_0x267c5b(0x1b9)],constants_1[_0x267c5b(0x1bd)]),await utils_2[_0x267c5b(0x177)][_0x267c5b(0x1af)](_0x267c5b(0x189)+_0x2da055[_0x267c5b(0x19f)]+_0x267c5b(0x190)+_0x26a4c3,''),await utils_2['ChildProcessUtils']['spawnPromise'](_0x267c5b(0x189)+_0x2da055[_0x267c5b(0x19f)]+_0x267c5b(0x19b)+(_0x4371e1||constants_1[_0x267c5b(0x1a8)])+'\x22\x20--allow-empty',''),await _0x2da055[_0x267c5b(0x1b8)](_0x26a4c3),Git[_0x267c5b(0x1b3)][_0x267c5b(0x17e)](_0x267c5b(0x185)),await fs_internal_1['FS']['removeDir'](_0x2da055[_0x267c5b(0x19f)]);}}function a126_0x1487(_0x498cb1,_0x46f202){const _0x247d13=a126_0x1fa6();return a126_0x1487=function(_0x1608cc,_0x2802af){_0x1608cc=_0x1608cc-0x174;let _0x1fa67c=_0x247d13[_0x1608cc];return _0x1fa67c;},a126_0x1487(_0x498cb1,_0x46f202);}exports[a126_0x5ebb83(0x1a9)]=Git,Git[a126_0x5ebb83(0x1a7)]=path_1[a126_0x5ebb83(0x18c)][a126_0x5ebb83(0x19a)](process[a126_0x5ebb83(0x197)](),a126_0x5ebb83(0x188),'git'),Git[a126_0x5ebb83(0x1b3)]=new core_1[(a126_0x5ebb83(0x1ae))](Git['name']);