const a66_0x4b4975=a66_0x2ff0;(function(_0x3b7c4c,_0x1a1b84){const _0x3c49c1=a66_0x2ff0,_0x547ae8=_0x3b7c4c();while(!![]){try{const _0x1906fe=-parseInt(_0x3c49c1(0x14b))/0x1+parseInt(_0x3c49c1(0x159))/0x2+parseInt(_0x3c49c1(0x15d))/0x3+parseInt(_0x3c49c1(0x151))/0x4+parseInt(_0x3c49c1(0x143))/0x5*(parseInt(_0x3c49c1(0x149))/0x6)+parseInt(_0x3c49c1(0x147))/0x7+-parseInt(_0x3c49c1(0x156))/0x8;if(_0x1906fe===_0x1a1b84)break;else _0x547ae8['push'](_0x547ae8['shift']());}catch(_0x50fbf5){_0x547ae8['push'](_0x547ae8['shift']());}}}(a66_0x2725,0x5e79f));const a66_0x363bf4=(function(){let _0x374a6e=!![];return function(_0x70444c,_0x5c77b6){const _0x8064c1=_0x374a6e?function(){const _0x495db6=a66_0x2ff0;if(_0x5c77b6){const _0x30115c=_0x5c77b6[_0x495db6(0x142)](_0x70444c,arguments);return _0x5c77b6=null,_0x30115c;}}:function(){};return _0x374a6e=![],_0x8064c1;};}()),a66_0x2292f1=a66_0x363bf4(this,function(){const _0x1779d9=a66_0x2ff0;return a66_0x2292f1['toString']()['search'](_0x1779d9(0x140))[_0x1779d9(0x158)]()[_0x1779d9(0x155)](a66_0x2292f1)[_0x1779d9(0x150)](_0x1779d9(0x140));});a66_0x2292f1();'use strict';Object[a66_0x4b4975(0x14c)](exports,a66_0x4b4975(0x13f),{'value':!![]}),exports['BulkV1Deploy']=void 0x0;function a66_0x2725(){const _0x6705d1=['apply','25OmjlHn','push','records','baseDeployPayload','778288rTgTzq','BaseBulkDeploy','621930jIcmnS','castRecord','62570NPBHPq','defineProperty','execute','deployer','@flosum/utils','search','258368xkinVt','SimpleBulkv1DeployData','deployRecords','MAX_RECORDS_CHUNK_COUNT','constructor','4441784EIOfxx','calculateRecordSize','toString','396192GGoIbP','NULL_CSV_VALUE','#N/A','stringify','337863tizQqs','isExceedCSVSizeLimit','__esModule','(((.+)+)+)+$','@flosum/salesforce'];a66_0x2725=function(){return _0x6705d1;};return a66_0x2725();}const salesforce_1=require(a66_0x4b4975(0x141)),sync_1=require('csv-stringify/sync'),base_bulk_deploy_1=require('./base-bulk-deploy'),utils_1=require(a66_0x4b4975(0x14f));class BulkV1Deploy extends base_bulk_deploy_1['BaseBulkDeploy']{constructor(_0x3d63a4){const _0x517422=a66_0x4b4975;super(_0x3d63a4),this[_0x517422(0x14e)]=new salesforce_1[(_0x517422(0x152))](this[_0x517422(0x146)]);}async[a66_0x4b4975(0x144)](_0x48011d,_0x5ecc93,_0x53eabb){const _0x4d4bc5=a66_0x4b4975,_0x23e8d8=this[_0x4d4bc5(0x14a)](_0x48011d),_0x30437d=this[_0x4d4bc5(0x145)]['length']>=base_bulk_deploy_1[_0x4d4bc5(0x148)][_0x4d4bc5(0x154)]||this[_0x4d4bc5(0x13e)](_0x23e8d8);_0x30437d&&await this['executeDeploy'](),this['recordsCsvSize']+=utils_1['CsvUtils'][_0x4d4bc5(0x157)](_0x48011d),this[_0x4d4bc5(0x145)][_0x4d4bc5(0x144)](_0x23e8d8),_0x53eabb();}[a66_0x4b4975(0x153)](_0x2926a6){const _0x2552e5=a66_0x4b4975,_0x97e95c=(0x0,sync_1[_0x2552e5(0x15c)])(_0x2926a6,{'header':!![]});return this[_0x2552e5(0x14e)][_0x2552e5(0x14d)](_0x97e95c);}['castRecord'](_0x780c75){const _0x21b77c=a66_0x4b4975,_0x452cb4={};for(const _0x4eccd3 in _0x780c75){_0x780c75[_0x4eccd3]===null?_0x452cb4[_0x4eccd3]=BulkV1Deploy[_0x21b77c(0x15a)]:_0x452cb4[_0x4eccd3]=_0x780c75[_0x4eccd3];}return _0x452cb4;}}function a66_0x2ff0(_0x4d41c1,_0x4c8e69){const _0x236892=a66_0x2725();return a66_0x2ff0=function(_0x2292f1,_0x363bf4){_0x2292f1=_0x2292f1-0x13e;let _0x272505=_0x236892[_0x2292f1];return _0x272505;},a66_0x2ff0(_0x4d41c1,_0x4c8e69);}exports['BulkV1Deploy']=BulkV1Deploy,BulkV1Deploy['NULL_CSV_VALUE']=a66_0x4b4975(0x15b);