const a126_0x13fcf3=a126_0x3268;(function(_0x37cb62,_0x269a26){const _0x5c9961=a126_0x3268,_0x18fb78=_0x37cb62();while(!![]){try{const _0x2731be=-parseInt(_0x5c9961(0xa7))/0x1*(-parseInt(_0x5c9961(0xaa))/0x2)+parseInt(_0x5c9961(0xf1))/0x3*(parseInt(_0x5c9961(0xd8))/0x4)+-parseInt(_0x5c9961(0xae))/0x5*(-parseInt(_0x5c9961(0xc4))/0x6)+-parseInt(_0x5c9961(0xcb))/0x7+-parseInt(_0x5c9961(0xc1))/0x8+parseInt(_0x5c9961(0xda))/0x9*(-parseInt(_0x5c9961(0xf0))/0xa)+parseInt(_0x5c9961(0xed))/0xb;if(_0x2731be===_0x269a26)break;else _0x18fb78['push'](_0x18fb78['shift']());}catch(_0x1d1630){_0x18fb78['push'](_0x18fb78['shift']());}}}(a126_0x27d1,0x866ce));function a126_0x3268(_0x4e487c,_0xe8dbda){const _0x399856=a126_0x27d1();return a126_0x3268=function(_0x321dfe,_0x468144){_0x321dfe=_0x321dfe-0x9a;let _0x27d19f=_0x399856[_0x321dfe];return _0x27d19f;},a126_0x3268(_0x4e487c,_0xe8dbda);}const a126_0x468144=(function(){let _0x2ca712=!![];return function(_0x247d27,_0x5cbf04){const _0x559376=_0x2ca712?function(){const _0x39fa70=a126_0x3268;if(_0x5cbf04){const _0x5a8daf=_0x5cbf04[_0x39fa70(0xee)](_0x247d27,arguments);return _0x5cbf04=null,_0x5a8daf;}}:function(){};return _0x2ca712=![],_0x559376;};}()),a126_0x321dfe=a126_0x468144(this,function(){const _0x48b0bf=a126_0x3268;return a126_0x321dfe[_0x48b0bf(0xc9)]()['search']('(((.+)+)+)+$')[_0x48b0bf(0xc9)]()[_0x48b0bf(0xc3)](a126_0x321dfe)[_0x48b0bf(0xaf)](_0x48b0bf(0xc0));});a126_0x321dfe();'use strict';var __importDefault=this&&this[a126_0x13fcf3(0x9b)]||function(_0x3a880c){const _0x33882b=a126_0x13fcf3;return _0x3a880c&&_0x3a880c[_0x33882b(0xe0)]?_0x3a880c:{'default':_0x3a880c};};Object[a126_0x13fcf3(0xb0)](exports,a126_0x13fcf3(0xe0),{'value':!![]}),exports[a126_0x13fcf3(0xe1)]=void 0x0;const constants_1=require(a126_0x13fcf3(0xbc)),core_1=require(a126_0x13fcf3(0x9c)),path_1=__importDefault(require(a126_0x13fcf3(0xbb))),branch_dto_1=require(a126_0x13fcf3(0xa8)),utils_1=require(a126_0x13fcf3(0x9e)),fs_internal_1=require(a126_0x13fcf3(0xef)),internal_utils_1=require(a126_0x13fcf3(0x9a)),utils_2=require(a126_0x13fcf3(0xb2));class Git{constructor(_0x1942ba){const _0x8913bf=a126_0x13fcf3;this[_0x8913bf(0xcc)]=_0x1942ba;}get[a126_0x13fcf3(0xb6)](){const _0x30b5df=a126_0x13fcf3;return this[_0x30b5df(0xcc)];}async[a126_0x13fcf3(0xe5)](_0x44d5f3,_0x5252a1){const _0x29ec3b=a126_0x13fcf3;await utils_2[_0x29ec3b(0xc6)][_0x29ec3b(0xac)](_0x29ec3b(0xc8)+this[_0x29ec3b(0xcc)]+_0x29ec3b(0xa4)+_0x44d5f3+_0x29ec3b(0xba)+_0x5252a1+'\x22','');}async[a126_0x13fcf3(0xdb)](..._0x1c8b83){const _0xb007dc=a126_0x13fcf3;await utils_2[_0xb007dc(0xc6)]['spawnPromise'](_0xb007dc(0xc8)+this['_repoPath']+'\x20&&\x20git\x20add\x20'+_0x1c8b83['join']('\x20'),'');}async['status'](){const _0x20ff54=a126_0x13fcf3;return utils_2[_0x20ff54(0xc6)]['spawnPromise']('cd\x20'+this[_0x20ff54(0xcc)]+_0x20ff54(0xea),'');}async[a126_0x13fcf3(0xe6)](_0x46a2e7){const _0x32b449=a126_0x13fcf3;Git[_0x32b449(0xad)][_0x32b449(0xc5)](_0x32b449(0xbf),_0x46a2e7),await utils_2['ChildProcessUtils'][_0x32b449(0xac)]('cd\x20'+this['_repoPath']+_0x32b449(0xb1)+_0x46a2e7+'\x22','');}async['push'](_0x3aeaa5){const _0xf0d9c5=a126_0x13fcf3;Git[_0xf0d9c5(0xad)][_0xf0d9c5(0xc5)](_0xf0d9c5(0x9d),_0x3aeaa5),await utils_2['ChildProcessUtils'][_0xf0d9c5(0xac)](_0xf0d9c5(0xc8)+this['_repoPath']+_0xf0d9c5(0xd2)+_0x3aeaa5+'\x20--quiet','');}async['checkout'](_0xef9f97){const _0x5551ec=a126_0x13fcf3;Git[_0x5551ec(0xad)]['log'](_0x5551ec(0xe9),_0xef9f97),await utils_2[_0x5551ec(0xc6)]['spawnPromise']('cd\x20'+this[_0x5551ec(0xcc)]+'\x20&&\x20git\x20checkout\x20'+_0xef9f97,'');}async['getCurrentHash'](){const _0x21b980=a126_0x13fcf3,_0x3a75d6=await utils_2[_0x21b980(0xc6)][_0x21b980(0xac)](_0x21b980(0xc8)+this[_0x21b980(0xcc)]+_0x21b980(0xf2),'');return _0x3a75d6[_0x21b980(0xce)]('\x0a','');}async[a126_0x13fcf3(0xd1)](_0x27bf50){const _0x1909d8=a126_0x13fcf3;Git[_0x1909d8(0xad)][_0x1909d8(0xc5)](_0x1909d8(0xb9),_0x27bf50);const _0x24fc24=await utils_2[_0x1909d8(0xc6)]['spawnPromise'](_0x1909d8(0xc8)+this['_repoPath']+_0x1909d8(0xcf)+_0x27bf50,'');return{'author':(0x0,internal_utils_1[_0x1909d8(0xa2)])(_0x24fc24),'email':(0x0,internal_utils_1[_0x1909d8(0xb4)])(_0x24fc24),'message':(0x0,internal_utils_1[_0x1909d8(0xde)])(_0x24fc24),'changes':(0x0,internal_utils_1['extractChangesFromCommitDescribe'])(_0x24fc24)};}static async[a126_0x13fcf3(0xa6)](_0xcee1f9,_0x21934f){const _0xa573c1=a126_0x13fcf3,[_0x5dcdec]=await utils_2['ChildProcessUtils'][_0xa573c1(0xac)](_0xa573c1(0xe2)+_0xcee1f9+'\x20'+_0x21934f+_0xa573c1(0xd6),'')[_0xa573c1(0xec)](_0x35fb75=>_0x35fb75['replace'](/\s/g,'\x20')[_0xa573c1(0xe8)]('\x20'));return _0x5dcdec;}static async[a126_0x13fcf3(0xd7)](_0x25dd9e,_0x25ff58,_0x345282){const _0x401b8b=a126_0x13fcf3,_0x3dd1f4=path_1[_0x401b8b(0xa5)][_0x401b8b(0xab)](this[_0x401b8b(0xb7)],_0x25ff58),_0x41d00d=new Git(_0x3dd1f4);return Git[_0x401b8b(0xad)][_0x401b8b(0xc5)](_0x401b8b(0xb8),_0x345282,_0x3dd1f4),await fs_internal_1['FS'][_0x401b8b(0xeb)](_0x3dd1f4),await utils_2[_0x401b8b(0xc6)]['spawnPromise'](_0x401b8b(0xb3)+_0x345282+_0x401b8b(0xb5)+_0x25dd9e+'\x20'+_0x3dd1f4,''),_0x41d00d;}static async[a126_0x13fcf3(0xa3)](_0xd2765,_0x3ec495){const _0x31d5cf=a126_0x13fcf3,_0xa6711e=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x1becbb=_0xd2765[_0x31d5cf(0xdd)][_0x31d5cf(0xce)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x31d5cf(0xd5)])(_0xd2765[_0x31d5cf(0xdd)])+_0x31d5cf(0xc2)+_0x3ec495['getGitShellAuthorizationString']()+'@'),_0x49dd97=await utils_2[_0x31d5cf(0xc6)][_0x31d5cf(0xac)](_0x31d5cf(0xe2)+_0x1becbb,'');return _0x49dd97[_0x31d5cf(0xe8)]('\x0a')['filter'](_0x107623=>_0xa6711e[_0x31d5cf(0xca)](_0x107623))[_0x31d5cf(0xbe)](_0x5a98c6=>{const _0x5baa8a=_0x31d5cf,[,_0x412326,_0x11991c]=_0x5a98c6[_0x5baa8a(0xdc)](_0xa6711e),_0x1bbab7=new branch_dto_1['BranchDto']();return _0x1bbab7[_0x5baa8a(0xd0)]=_0x412326,_0x1bbab7[_0x5baa8a(0xd4)]=_0x11991c[_0x5baa8a(0xce)]('refs/heads/',''),_0x1bbab7;});}static async[a126_0x13fcf3(0xa0)](_0x3157b4,_0x4aef7e,_0x5d7d62,_0x36ad24){const _0x34c482=a126_0x13fcf3,_0x837103=_0x3157b4['gitUrl'][_0x34c482(0xce)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x34c482(0xd5)])(_0x3157b4[_0x34c482(0xdd)])+'://'+_0x36ad24[_0x34c482(0xe4)]()+'@'),_0x7b2520=path_1['default'][_0x34c482(0xab)](this['DEFAULT_CLONE_PATH'],_0x3157b4['name']);Git[_0x34c482(0xad)][_0x34c482(0xc5)]('create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]',_0x3157b4[_0x34c482(0xd4)],_0x4aef7e,_0x7b2520),await fs_internal_1['FS'][_0x34c482(0xeb)](_0x7b2520),await fs_internal_1['FS']['makeDir'](_0x7b2520);const _0x543e1e=new Git(_0x7b2520);await utils_2[_0x34c482(0xc6)][_0x34c482(0xac)](_0x34c482(0xc8)+_0x543e1e[_0x34c482(0xb6)]+_0x34c482(0xd9),''),await utils_2[_0x34c482(0xc6)][_0x34c482(0xac)](_0x34c482(0xc8)+_0x543e1e[_0x34c482(0xb6)]+_0x34c482(0xe7)+_0x837103,''),await _0x543e1e[_0x34c482(0xe5)](constants_1[_0x34c482(0xa1)],constants_1[_0x34c482(0xa9)]),await utils_2[_0x34c482(0xc6)][_0x34c482(0xac)](_0x34c482(0xc8)+_0x543e1e[_0x34c482(0xb6)]+'\x20&&\x20git\x20checkout\x20--orphan\x20'+_0x4aef7e,''),await utils_2[_0x34c482(0xc6)][_0x34c482(0xac)](_0x34c482(0xc8)+_0x543e1e['baseDir']+_0x34c482(0xb1)+(_0x5d7d62||constants_1[_0x34c482(0xdf)])+_0x34c482(0xbd),''),await _0x543e1e[_0x34c482(0xe3)](_0x4aef7e),Git[_0x34c482(0xad)][_0x34c482(0xc5)](_0x34c482(0x9f)),await fs_internal_1['FS'][_0x34c482(0xeb)](_0x543e1e[_0x34c482(0xb6)]);}}exports[a126_0x13fcf3(0xe1)]=Git,Git['DEFAULT_CLONE_PATH']=path_1[a126_0x13fcf3(0xa5)]['join'](process[a126_0x13fcf3(0xc7)](),a126_0x13fcf3(0xd3),'git'),Git[a126_0x13fcf3(0xad)]=new core_1[(a126_0x13fcf3(0xcd))](Git[a126_0x13fcf3(0xd4)]);function a126_0x27d1(){const _0x2ad39b=['\x20&&\x20git\x20remote\x20add\x20origin\x20','split','checkout\x20to\x20%s','\x20&&\x20git\x20status','removeDir','then','3224936VUPwCZ','apply','./fs.internal','3047130JzDblc','21ounicr','\x20&&\x20git\x20rev-parse\x20HEAD','./internal.utils','__importDefault','../../../core','push\x20changes\x20to\x20%s','../../shared/utils','clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch','createEmptyBranch','DEFAULT_GIT_USER_NAME','extractAuthorFromCommitDescribe','getRepositoryBranches','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','default','getRemoteHash','1mAxHgO','../providers/branches/dto/branch.dto','DEFAULT_GIT_USER_EMAIL','1120942yHgiSw','join','spawnPromise','logger','1745cGKpvl','search','defineProperty','\x20&&\x20git\x20commit\x20-m\x20\x22','@flosum/utils','git\x20clone\x20-b\x20','extractEmailFromCommitDescribe','\x20--single-branch\x20','baseDir','DEFAULT_CLONE_PATH','clone\x20repository\x20branch\x20%s\x20to\x20%s','describe\x20commit\x20%s','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','path','../../../constants','\x22\x20--allow-empty','map','commit\x20message\x20\x22%s\x22','(((.+)+)+)+$','1466944BIbjlg','://','constructor','8166TnkBLs','log','ChildProcessUtils','cwd','cd\x20','toString','test','2601284OUvkwx','_repoPath','Logger','replace','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','sha','describeCommit','\x20&&\x20git\x20push\x20origin\x20','.temp','name','getProtocol','\x20--refs','clone','394908HUJEBw','\x20&&\x20git\x20init','27aFNJGg','add','match','gitUrl','extractMessageFromCommitDescribe','INITIAL_COMMIT','__esModule','Git','git\x20ls-remote\x20','push','getGitShellAuthorizationString','setCredentials','commit'];a126_0x27d1=function(){return _0x2ad39b;};return a126_0x27d1();}