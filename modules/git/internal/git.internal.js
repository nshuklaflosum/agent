const a95_0x3d2ced=a95_0x374b;(function(_0x3d4bf2,_0x346067){const _0x57235c=a95_0x374b,_0x5be955=_0x3d4bf2();while(!![]){try{const _0x1aafae=-parseInt(_0x57235c(0x217))/0x1*(parseInt(_0x57235c(0x20e))/0x2)+-parseInt(_0x57235c(0x203))/0x3+parseInt(_0x57235c(0x21e))/0x4+-parseInt(_0x57235c(0x205))/0x5*(parseInt(_0x57235c(0x1e1))/0x6)+parseInt(_0x57235c(0x229))/0x7+-parseInt(_0x57235c(0x1ff))/0x8+parseInt(_0x57235c(0x222))/0x9;if(_0x1aafae===_0x346067)break;else _0x5be955['push'](_0x5be955['shift']());}catch(_0x1f23a2){_0x5be955['push'](_0x5be955['shift']());}}}(a95_0x28ce,0x8ac73));const a95_0x5dda94=(function(){let _0x2203f4=!![];return function(_0x52eea5,_0x38e71c){const _0x3cb17c=_0x2203f4?function(){if(_0x38e71c){const _0x73c2f2=_0x38e71c['apply'](_0x52eea5,arguments);return _0x38e71c=null,_0x73c2f2;}}:function(){};return _0x2203f4=![],_0x3cb17c;};}()),a95_0x57c8e4=a95_0x5dda94(this,function(){const _0x33df18=a95_0x374b;return a95_0x57c8e4['toString']()[_0x33df18(0x1e2)](_0x33df18(0x213))[_0x33df18(0x1fe)]()['constructor'](a95_0x57c8e4)['search'](_0x33df18(0x213));});a95_0x57c8e4();'use strict';function a95_0x374b(_0x14f3f5,_0x2f56bf){const _0x8ae02=a95_0x28ce();return a95_0x374b=function(_0x57c8e4,_0x5dda94){_0x57c8e4=_0x57c8e4-0x1dd;let _0x28ce7b=_0x8ae02[_0x57c8e4];return _0x28ce7b;},a95_0x374b(_0x14f3f5,_0x2f56bf);}var __importDefault=this&&this[a95_0x3d2ced(0x207)]||function(_0x43e6a4){const _0xc789c7=a95_0x3d2ced;return _0x43e6a4&&_0x43e6a4[_0xc789c7(0x20b)]?_0x43e6a4:{'default':_0x43e6a4};};Object['defineProperty'](exports,a95_0x3d2ced(0x20b),{'value':!![]}),exports[a95_0x3d2ced(0x1e7)]=void 0x0;const constants_1=require(a95_0x3d2ced(0x1eb)),core_1=require(a95_0x3d2ced(0x214)),path_1=__importDefault(require(a95_0x3d2ced(0x1fa))),branch_dto_1=require(a95_0x3d2ced(0x216)),utils_1=require(a95_0x3d2ced(0x209)),fs_internal_1=require('./fs.internal'),internal_utils_1=require(a95_0x3d2ced(0x21a)),shell_internal_1=require('./shell.internal');class Git{constructor(_0x2f60fa){const _0x513e80=a95_0x3d2ced;this[_0x513e80(0x1f0)]=_0x2f60fa;}get[a95_0x3d2ced(0x210)](){const _0x2f8ccd=a95_0x3d2ced;return this[_0x2f8ccd(0x1f0)];}async[a95_0x3d2ced(0x1ed)](_0x4ae4cd,_0x432ffa){const _0x5c98e0=a95_0x3d2ced;await shell_internal_1[_0x5c98e0(0x204)][_0x5c98e0(0x20d)]('cd\x20'+this[_0x5c98e0(0x1f0)]+_0x5c98e0(0x206)+_0x4ae4cd+_0x5c98e0(0x1f2)+_0x432ffa+'\x22');}async['add'](..._0x7f268d){const _0x28b652=a95_0x3d2ced;await shell_internal_1[_0x28b652(0x204)][_0x28b652(0x20d)](_0x28b652(0x1e6)+this[_0x28b652(0x1f0)]+'\x20&&\x20git\x20add\x20'+_0x7f268d[_0x28b652(0x22b)]('\x20'));}async[a95_0x3d2ced(0x21f)](){const _0x476a0b=a95_0x3d2ced;return shell_internal_1[_0x476a0b(0x204)][_0x476a0b(0x20d)]('cd\x20'+this[_0x476a0b(0x1f0)]+'\x20&&\x20git\x20status');}async[a95_0x3d2ced(0x20c)](_0x16df45){const _0x244cdf=a95_0x3d2ced;Git['logger'][_0x244cdf(0x22e)]('commit\x20message\x20\x22%s\x22',_0x16df45),await shell_internal_1['Shell'][_0x244cdf(0x20d)]('cd\x20'+this['_repoPath']+_0x244cdf(0x1f1)+_0x16df45+'\x22');}async[a95_0x3d2ced(0x1ee)](_0x5181b3){const _0x1e33b3=a95_0x3d2ced;Git['logger'][_0x1e33b3(0x22e)](_0x1e33b3(0x22a),_0x5181b3),await shell_internal_1[_0x1e33b3(0x204)][_0x1e33b3(0x20d)](_0x1e33b3(0x1e6)+this[_0x1e33b3(0x1f0)]+'\x20&&\x20git\x20push\x20origin\x20'+_0x5181b3+_0x1e33b3(0x223));}async[a95_0x3d2ced(0x226)](_0x3ec6f8){const _0x198acf=a95_0x3d2ced;Git[_0x198acf(0x1f4)][_0x198acf(0x22e)](_0x198acf(0x21c),_0x3ec6f8),await shell_internal_1['Shell'][_0x198acf(0x20d)](_0x198acf(0x1e6)+this[_0x198acf(0x1f0)]+_0x198acf(0x212)+_0x3ec6f8);}async[a95_0x3d2ced(0x1e5)](){const _0x130b8d=a95_0x3d2ced,_0x39e00e=await shell_internal_1['Shell'][_0x130b8d(0x20d)]('cd\x20'+this[_0x130b8d(0x1f0)]+_0x130b8d(0x200));return _0x39e00e[_0x130b8d(0x1f7)]('\x0a','');}async[a95_0x3d2ced(0x1f8)](_0x12548b){const _0x689f2=a95_0x3d2ced;Git[_0x689f2(0x1f4)][_0x689f2(0x22e)](_0x689f2(0x224),_0x12548b);const _0x10cfef=await shell_internal_1[_0x689f2(0x204)][_0x689f2(0x20d)](_0x689f2(0x1e6)+this[_0x689f2(0x1f0)]+_0x689f2(0x1de)+_0x12548b);return{'author':(0x0,internal_utils_1['extractAuthorFromCommitDescribe'])(_0x10cfef),'email':(0x0,internal_utils_1[_0x689f2(0x1e8)])(_0x10cfef),'message':(0x0,internal_utils_1[_0x689f2(0x1fd)])(_0x10cfef),'changes':(0x0,internal_utils_1[_0x689f2(0x1e3)])(_0x10cfef)};}static async['getRemoteHash'](_0x1ed489,_0x195032){const _0x1a3b0e=a95_0x3d2ced,[_0x3cfc4a]=await shell_internal_1[_0x1a3b0e(0x204)][_0x1a3b0e(0x20d)]('git\x20ls-remote\x20'+_0x1ed489+'\x20'+_0x195032+_0x1a3b0e(0x21d))['then'](_0x47af35=>_0x47af35[_0x1a3b0e(0x1f7)](/\s/g,'\x20')['split']('\x20'));return _0x3cfc4a;}static async[a95_0x3d2ced(0x208)](_0x2cf3d7,_0x40d20e,_0x42375e){const _0x122caa=a95_0x3d2ced,_0x5f0fd4=path_1[_0x122caa(0x22d)]['join'](this[_0x122caa(0x1f9)],_0x40d20e),_0x25d568=new Git(_0x5f0fd4);return Git[_0x122caa(0x1f4)][_0x122caa(0x22e)](_0x122caa(0x218),_0x42375e,_0x2cf3d7,_0x5f0fd4),await fs_internal_1['FS']['removeDir'](_0x5f0fd4),await shell_internal_1['Shell'][_0x122caa(0x20d)](_0x122caa(0x215)+_0x42375e+_0x122caa(0x22c)+_0x2cf3d7+'\x20'+_0x5f0fd4),_0x25d568;}static async[a95_0x3d2ced(0x1f3)](_0x4a863d,_0x2f61eb){const _0x4eff20=a95_0x3d2ced,_0x21fd4a=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x8698b0=_0x4a863d[_0x4eff20(0x211)][_0x4eff20(0x1f7)](/http(s)?\:\/\/(.+@)?/,(0x0,utils_1[_0x4eff20(0x20a)])(_0x4a863d['gitUrl'])+_0x4eff20(0x20f)+_0x2f61eb[_0x4eff20(0x1ef)]()+'@'),_0x51030c=await shell_internal_1[_0x4eff20(0x204)][_0x4eff20(0x20d)](_0x4eff20(0x1dd)+_0x8698b0),_0x16cfa2=_0x51030c['split']('\x0a')[_0x4eff20(0x1fb)](_0x365283=>_0x21fd4a[_0x4eff20(0x202)](_0x365283))[_0x4eff20(0x1df)](_0x3bccb4=>{const _0x229f89=_0x4eff20,[,_0x250d0a,_0x401f0c]=_0x3bccb4['match'](_0x21fd4a),_0x1c2a41=new branch_dto_1[(_0x229f89(0x1e0))]();return _0x1c2a41[_0x229f89(0x1e4)]=_0x250d0a,_0x1c2a41[_0x229f89(0x219)]=_0x401f0c[_0x229f89(0x1f7)]('refs/heads/',''),_0x1c2a41;});return _0x16cfa2;}static async[a95_0x3d2ced(0x1f5)](_0x528ad1,_0x18a4dd,_0x47bd51,_0x523998){const _0x54fd1f=a95_0x3d2ced,_0x352fe4=_0x528ad1[_0x54fd1f(0x211)]['replace'](/http(s)?\:\/\/(.+@)?/,(0x0,utils_1[_0x54fd1f(0x20a)])(_0x528ad1[_0x54fd1f(0x211)])+_0x54fd1f(0x20f)+_0x523998[_0x54fd1f(0x1ef)]()+'@'),_0x59c4ff=path_1[_0x54fd1f(0x22d)][_0x54fd1f(0x22b)](this[_0x54fd1f(0x1f9)],_0x528ad1[_0x54fd1f(0x219)]);Git[_0x54fd1f(0x1f4)][_0x54fd1f(0x22e)]('create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]\x20%s',_0x528ad1[_0x54fd1f(0x219)],_0x18a4dd,_0x59c4ff,_0x352fe4),await fs_internal_1['FS'][_0x54fd1f(0x1f6)](_0x59c4ff),await fs_internal_1['FS']['makeDir'](_0x59c4ff);const _0x2c0c9c=new Git(_0x59c4ff);await shell_internal_1['Shell'][_0x54fd1f(0x20d)]('cd\x20'+_0x2c0c9c[_0x54fd1f(0x210)]+_0x54fd1f(0x1ec)),await shell_internal_1['Shell'][_0x54fd1f(0x20d)](_0x54fd1f(0x1e6)+_0x2c0c9c[_0x54fd1f(0x210)]+_0x54fd1f(0x201)+_0x352fe4),await _0x2c0c9c[_0x54fd1f(0x1ed)](constants_1[_0x54fd1f(0x225)],constants_1[_0x54fd1f(0x1fc)]),await shell_internal_1[_0x54fd1f(0x204)][_0x54fd1f(0x20d)](_0x54fd1f(0x1e6)+_0x2c0c9c[_0x54fd1f(0x210)]+'\x20&&\x20git\x20checkout\x20--orphan\x20'+_0x18a4dd),await shell_internal_1[_0x54fd1f(0x204)][_0x54fd1f(0x20d)](_0x54fd1f(0x1e6)+_0x2c0c9c[_0x54fd1f(0x210)]+_0x54fd1f(0x1f1)+(_0x47bd51||constants_1[_0x54fd1f(0x21b)])+_0x54fd1f(0x228)),await _0x2c0c9c['push'](_0x18a4dd),Git[_0x54fd1f(0x1f4)][_0x54fd1f(0x22e)](_0x54fd1f(0x221)),await fs_internal_1['FS'][_0x54fd1f(0x1f6)](_0x2c0c9c[_0x54fd1f(0x210)]);}}function a95_0x28ce(){const _0x5bb50d=['1778678TjdfZN','://','baseDir','gitUrl','\x20&&\x20git\x20checkout\x20','(((.+)+)+)+$','../../../core','git\x20clone\x20-b\x20','../providers/branches/dto/branch.dto','1uiFmMn','clone\x20repository\x20branch\x20%s\x20from\x20%s\x20to\x20%s','name','./internal.utils','INITIAL_COMMIT','checkout\x20to\x20%s','\x20--refs','4314696tOBebB','status','git','clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch','12860532RCOAFE','\x20--quiet','describe\x20commit\x20%s','DEFAULT_GIT_USER_NAME','checkout','.temp','\x22\x20--allow-empty','4467036XYNUMY','push\x20changes\x20to\x20%s','join','\x20--single-branch\x20','default','log','git\x20ls-remote\x20','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','map','BranchDto','6738ubZnbe','search','extractChangesFromCommitDescribe','sha','getCurrentHash','cd\x20','Git','extractEmailFromCommitDescribe','cwd','Logger','../../../constants','\x20&&\x20git\x20init','setCredentials','push','getGitShellAuthorizationString','_repoPath','\x20&&\x20git\x20commit\x20-m\x20\x22','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','getRepositoryBranches','logger','createEmptyBranch','removeDir','replace','describeCommit','DEFAULT_CLONE_PATH','path','filter','DEFAULT_GIT_USER_EMAIL','extractMessageFromCommitDescribe','toString','4030416XptEik','\x20&&\x20git\x20rev-parse\x20HEAD','\x20&&\x20git\x20remote\x20add\x20origin\x20','test','3320121iXqnGH','Shell','345MNOMog','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','__importDefault','clone','../../shared/utils','getProtocol','__esModule','commit','exec'];a95_0x28ce=function(){return _0x5bb50d;};return a95_0x28ce();}exports[a95_0x3d2ced(0x1e7)]=Git,Git['DEFAULT_CLONE_PATH']=path_1[a95_0x3d2ced(0x22d)][a95_0x3d2ced(0x22b)](process[a95_0x3d2ced(0x1e9)](),a95_0x3d2ced(0x227),a95_0x3d2ced(0x220)),Git[a95_0x3d2ced(0x1f4)]=new core_1[(a95_0x3d2ced(0x1ea))](Git['name']);