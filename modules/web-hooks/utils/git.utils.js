function a195_0x11c7(_0x4b7552,_0x235ada){const _0x4c2d1e=a195_0x1490();return a195_0x11c7=function(_0x35060b,_0xae3f03){_0x35060b=_0x35060b-0x84;let _0x1490e5=_0x4c2d1e[_0x35060b];return _0x1490e5;},a195_0x11c7(_0x4b7552,_0x235ada);}const a195_0x4fcc72=a195_0x11c7;(function(_0x757bac,_0x164f53){const _0x2d44b6=a195_0x11c7,_0x385515=_0x757bac();while(!![]){try{const _0x56a9ae=parseInt(_0x2d44b6(0xab))/0x1*(-parseInt(_0x2d44b6(0x90))/0x2)+-parseInt(_0x2d44b6(0x93))/0x3*(-parseInt(_0x2d44b6(0xa5))/0x4)+parseInt(_0x2d44b6(0xaa))/0x5*(-parseInt(_0x2d44b6(0xa3))/0x6)+-parseInt(_0x2d44b6(0x85))/0x7+-parseInt(_0x2d44b6(0xa0))/0x8*(parseInt(_0x2d44b6(0x9e))/0x9)+parseInt(_0x2d44b6(0x84))/0xa*(parseInt(_0x2d44b6(0xa9))/0xb)+parseInt(_0x2d44b6(0xa1))/0xc*(parseInt(_0x2d44b6(0xb0))/0xd);if(_0x56a9ae===_0x164f53)break;else _0x385515['push'](_0x385515['shift']());}catch(_0x41b1d9){_0x385515['push'](_0x385515['shift']());}}}(a195_0x1490,0x739e4));const a195_0xae3f03=(function(){let _0x4570d2=!![];return function(_0x422cb2,_0x50a577){const _0x2b46fa=_0x4570d2?function(){const _0x2f969e=a195_0x11c7;if(_0x50a577){const _0x5c658c=_0x50a577[_0x2f969e(0x97)](_0x422cb2,arguments);return _0x50a577=null,_0x5c658c;}}:function(){};return _0x4570d2=![],_0x2b46fa;};}()),a195_0x35060b=a195_0xae3f03(this,function(){const _0x406e0c=a195_0x11c7;return a195_0x35060b['toString']()[_0x406e0c(0x9b)](_0x406e0c(0x98))[_0x406e0c(0x9f)]()[_0x406e0c(0xb7)](a195_0x35060b)['search']('(((.+)+)+)+$');});a195_0x35060b();'use strict';var __importDefault=this&&this[a195_0x4fcc72(0xb3)]||function(_0x1656e4){return _0x1656e4&&_0x1656e4['__esModule']?_0x1656e4:{'default':_0x1656e4};};Object[a195_0x4fcc72(0xb6)](exports,a195_0x4fcc72(0x8d),{'value':!![]}),exports[a195_0x4fcc72(0x94)]=void 0x0;const fs_internal_1=require(a195_0x4fcc72(0x9a)),git_internal_1=require(a195_0x4fcc72(0x88)),shell_internal_1=require(a195_0x4fcc72(0x8a)),utils_1=require('../../shared/utils'),shortid_1=__importDefault(require(a195_0x4fcc72(0xb9)));class GitUtils{constructor(_0x2615f5){const _0x11289f=a195_0x4fcc72;this[_0x11289f(0xa2)]=_0x2615f5,this[_0x11289f(0x8b)]=0xa,this[_0x11289f(0xb5)]=0xbb8,this[_0x11289f(0xb1)]=shortid_1[_0x11289f(0x99)]();}get[a195_0x4fcc72(0x87)](){const _0x5be8bd=a195_0x4fcc72;return this[_0x5be8bd(0x86)][_0x5be8bd(0xb4)];}async[a195_0x4fcc72(0xa6)](_0x274e6b,_0x18b56c){const _0x3725f7=a195_0x4fcc72;this[_0x3725f7(0x86)]=await git_internal_1['Git'][_0x3725f7(0xa6)](this[_0x3725f7(0xa2)],''+this[_0x3725f7(0xb1)],_0x274e6b);}async[a195_0x4fcc72(0xac)](_0x51ffde){const _0x345e6a=a195_0x4fcc72;await this['git'][_0x345e6a(0xa8)](_0x51ffde);}[a195_0x4fcc72(0xae)](){const _0x17cfa0=a195_0x4fcc72;return this[_0x17cfa0(0x86)]['getCurrentHash']();}['describeCommit'](_0xeebf5){const _0x5c259a=a195_0x4fcc72;return this[_0x5c259a(0x86)][_0x5c259a(0x9d)](_0xeebf5);}async[a195_0x4fcc72(0x91)](_0x3d5725,_0x113edd,_0x2bfea5){const _0x504787=a195_0x4fcc72;await this[_0x504787(0x86)][_0x504787(0xa7)]('.');const _0x2d91b3=await this['git'][_0x504787(0xb8)]()[_0x504787(0xaf)](_0x482a8e=>_0x482a8e[_0x504787(0x8e)]||_0x482a8e);if(_0x2d91b3['includes'](_0x504787(0x8f)))return;await this[_0x504787(0x86)][_0x504787(0x89)](_0x113edd['name'],_0x113edd['email']);try{await this[_0x504787(0x86)]['commit'](_0x3d5725);}catch(_0x16c57d){let _0x1ace9b=0x0;do{_0x1ace9b++;const _0x73c706=await this[_0x504787(0x86)][_0x504787(0xb8)]()[_0x504787(0xaf)](_0x47d4d2=>_0x47d4d2[_0x504787(0x8e)]||_0x47d4d2);if(_0x73c706[_0x504787(0x95)]('nothing\x20to\x20commit')){_0x1ace9b=0x0;break;}await utils_1[_0x504787(0xad)](this['GIT_STATUS_CHECK_INTERVAL']);}while(_0x1ace9b<this['MAX_GIT_STATUS_CHECK']);if(_0x1ace9b===this[_0x504787(0x8b)])throw _0x16c57d;}await this[_0x504787(0x86)][_0x504787(0x9c)](_0x2bfea5);}async[a195_0x4fcc72(0xa4)](){const _0x5eaa3c=a195_0x4fcc72;await shell_internal_1[_0x5eaa3c(0x96)][_0x5eaa3c(0x92)]('cd\x20'+this[_0x5eaa3c(0x87)]+_0x5eaa3c(0xb2))[_0x5eaa3c(0xaf)](()=>void 0x0);}async[a195_0x4fcc72(0x8c)](){const _0x57247a=a195_0x4fcc72;await fs_internal_1['FS']['removeDir'](this[_0x57247a(0x87)]);}}function a195_0x1490(){const _0x213302=['clone','add','checkout','1428922YNYHBb','1129805UJpsbm','684860NuftMS','checkoutTo','sleep','getCurrentHash','catch','1808937kFZvfw','uniqueId','\x20&&\x20git\x20rm\x20-rf\x20.\x20&&\x20git\x20clean\x20.\x20-fxd','__importDefault','baseDir','GIT_STATUS_CHECK_INTERVAL','defineProperty','constructor','status','shortid','60XxhjYY','161350ZDjigO','git','dir','../../internal/git.internal','setCredentials','../../internal/shell.internal','MAX_GIT_STATUS_CHECK','removeDir','__esModule','message','nothing\x20to\x20commit','2hVsYSK','commitAndPush','exec','12753tnLnnd','GitUtils','includes','Shell','apply','(((.+)+)+)+$','default','../../internal/fs.internal','search','push','describeCommit','54CrZwvK','toString','403792YzOGCQ','84ZHPBLh','remote','12zwDGZc','clearDir','172mtcAyb'];a195_0x1490=function(){return _0x213302;};return a195_0x1490();}exports[a195_0x4fcc72(0x94)]=GitUtils;