const a62_0x713576=a62_0x15af;(function(_0x19f606,_0x1c00e9){const _0x2ef362=a62_0x15af,_0x4e50a2=_0x19f606();while(!![]){try{const _0xf0fd78=-parseInt(_0x2ef362(0x92))/0x1+parseInt(_0x2ef362(0x93))/0x2+parseInt(_0x2ef362(0x9a))/0x3*(parseInt(_0x2ef362(0xa5))/0x4)+-parseInt(_0x2ef362(0x9c))/0x5*(parseInt(_0x2ef362(0x87))/0x6)+-parseInt(_0x2ef362(0x97))/0x7*(parseInt(_0x2ef362(0x94))/0x8)+-parseInt(_0x2ef362(0xa1))/0x9+-parseInt(_0x2ef362(0x98))/0xa*(-parseInt(_0x2ef362(0x9d))/0xb);if(_0xf0fd78===_0x1c00e9)break;else _0x4e50a2['push'](_0x4e50a2['shift']());}catch(_0x10f6d6){_0x4e50a2['push'](_0x4e50a2['shift']());}}}(a62_0x5642,0x1a82c));const a62_0x5fc4a7=(function(){let _0x538380=!![];return function(_0x4d3405,_0x5011a9){const _0x2f4d65=_0x538380?function(){const _0x3b4765=a62_0x15af;if(_0x5011a9){const _0x4d2729=_0x5011a9[_0x3b4765(0x90)](_0x4d3405,arguments);return _0x5011a9=null,_0x4d2729;}}:function(){};return _0x538380=![],_0x2f4d65;};}()),a62_0x2b5d47=a62_0x5fc4a7(this,function(){const _0x4f658b=a62_0x15af;return a62_0x2b5d47['toString']()['search'](_0x4f658b(0x99))[_0x4f658b(0xa2)]()[_0x4f658b(0x85)](a62_0x2b5d47)[_0x4f658b(0x86)](_0x4f658b(0x99));});a62_0x2b5d47();'use strict';var __importDefault=this&&this[a62_0x713576(0x8f)]||function(_0x4792fe){const _0x5921c8=a62_0x713576;return _0x4792fe&&_0x4792fe[_0x5921c8(0x89)]?_0x4792fe:{'default':_0x4792fe};};Object[a62_0x713576(0xa8)](exports,a62_0x713576(0x89),{'value':!![]}),require(a62_0x713576(0x8b)),require('../config');const typedi_1=__importDefault(require('typedi')),app_settings_service_1=require('../shared/services/app-settings.service'),git_commit_job_1=require(a62_0x713576(0xa0)),settings_config_service_1=require(a62_0x713576(0xa6)),fs_1=require('fs'),childs_utils_1=require('./childs.utils'),appSettings=typedi_1[a62_0x713576(0xa3)][a62_0x713576(0x84)](app_settings_service_1['AppSettingsService']),socketPath=childs_utils_1[a62_0x713576(0x9b)]();if(!socketPath)throw new Error('Unresolved\x20socket\x20path');const message=fs_1[a62_0x713576(0x95)](socketPath,{'encoding':'utf-8'}),{data}=JSON[a62_0x713576(0x91)](message),execute=async _0x2bb429=>{const _0x4b8866=a62_0x713576;await settings_config_service_1[_0x4b8866(0xa4)][_0x4b8866(0x8e)](),appSettings[_0x4b8866(0x8d)]({'provider':_0x2bb429[_0x4b8866(0x9e)]||_0x2bb429[_0x4b8866(0x9f)][_0x4b8866(0x9e)]});const _0x1ce84e=typedi_1[_0x4b8866(0xa3)][_0x4b8866(0x84)](git_commit_job_1[_0x4b8866(0x8a)]);await _0x1ce84e[_0x4b8866(0x96)](_0x2bb429[_0x4b8866(0x9f)],undefined);};function a62_0x15af(_0x54fff1,_0x8d2690){const _0x22a3ab=a62_0x5642();return a62_0x15af=function(_0x2b5d47,_0x5fc4a7){_0x2b5d47=_0x2b5d47-0x84;let _0x564209=_0x22a3ab[_0x2b5d47];return _0x564209;},a62_0x15af(_0x54fff1,_0x8d2690);}function a62_0x5642(){const _0x5409bb=['__esModule','GitCommitJob','reflect-metadata','catch','update','loadSettings','__importDefault','apply','parse','121479hmISsJ','217254gvLkWG','1960PwUxxr','readFileSync','run','371FmjLDD','30cwzNpZ','(((.+)+)+)+$','15bIBPOP','getSocketPath','5wFiWyd','1440791uSBCPG','provider','commit','../web-hooks/jobs/git-commit.job','721053CeYrAp','toString','default','SettingsConfigService','4328BWOqiv','../shared/services/settings-config.service','then','defineProperty','get','constructor','search','1102866EetfbG','exit'];a62_0x5642=function(){return _0x5409bb;};return a62_0x5642();}execute(data)[a62_0x713576(0xa7)](()=>process[a62_0x713576(0x88)](0x0))[a62_0x713576(0x8c)](()=>process[a62_0x713576(0x88)](0x0));