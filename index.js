'use strict';const _0x50a824=_0x4ff2;(function(_0x40c833,_0x2e7405){const _0x3db526=_0x4ff2,_0x16dc42=_0x40c833();while(!![]){try{const _0x4a8921=parseInt(_0x3db526(0x217))/0x1*(parseInt(_0x3db526(0x199))/0x2)+parseInt(_0x3db526(0x19c))/0x3+-parseInt(_0x3db526(0x1c8))/0x4*(parseInt(_0x3db526(0x1ce))/0x5)+parseInt(_0x3db526(0x2af))/0x6*(-parseInt(_0x3db526(0x25f))/0x7)+-parseInt(_0x3db526(0x21f))/0x8*(parseInt(_0x3db526(0x240))/0x9)+-parseInt(_0x3db526(0x1ec))/0xa+parseInt(_0x3db526(0x19a))/0xb*(parseInt(_0x3db526(0x29d))/0xc);if(_0x4a8921===_0x2e7405)break;else _0x16dc42['push'](_0x16dc42['shift']());}catch(_0x19390c){_0x16dc42['push'](_0x16dc42['shift']());}}}(_0x1fa3,0xe0dde));var __createBinding=this&&this['__createBinding']||(Object[_0x50a824(0x2b2)]?function(_0x324100,_0x5289bd,_0x9084ee,_0x1e5813){const _0x25f4e2=_0x50a824;if(_0x1e5813===undefined)_0x1e5813=_0x9084ee;var _0x41a40a=Object[_0x25f4e2(0x259)](_0x5289bd,_0x9084ee);(!_0x41a40a||(_0x25f4e2(0x25b)in _0x41a40a?!_0x5289bd['__esModule']:_0x41a40a['writable']||_0x41a40a[_0x25f4e2(0x285)]))&&(_0x41a40a={'enumerable':!![],'get':function(){return _0x5289bd[_0x9084ee];}}),Object['defineProperty'](_0x324100,_0x1e5813,_0x41a40a);}:function(_0x390bbe,_0x976fe8,_0x1981bf,_0x3a0a8b){if(_0x3a0a8b===undefined)_0x3a0a8b=_0x1981bf;_0x390bbe[_0x3a0a8b]=_0x976fe8[_0x1981bf];}),__setModuleDefault=this&&this[_0x50a824(0x1ac)]||(Object['create']?function(_0x6e8c76,_0x6732f4){const _0x3a33b6=_0x50a824;Object['defineProperty'](_0x6e8c76,_0x3a33b6(0x2b6),{'enumerable':!![],'value':_0x6732f4});}:function(_0x5a5ed0,_0xdf1333){const _0x4cf70a=_0x50a824;_0x5a5ed0[_0x4cf70a(0x2b6)]=_0xdf1333;}),__importStar=this&&this[_0x50a824(0x21d)]||function(_0x4f02e0){const _0x2bd28d=_0x50a824;if(_0x4f02e0&&_0x4f02e0[_0x2bd28d(0x24c)])return _0x4f02e0;var _0x29563={};if(_0x4f02e0!=null){for(var _0x5745fa in _0x4f02e0)if(_0x5745fa!==_0x2bd28d(0x2b6)&&Object[_0x2bd28d(0x1af)][_0x2bd28d(0x2b7)][_0x2bd28d(0x269)](_0x4f02e0,_0x5745fa))__createBinding(_0x29563,_0x4f02e0,_0x5745fa);}return __setModuleDefault(_0x29563,_0x4f02e0),_0x29563;},__importDefault=this&&this[_0x50a824(0x22b)]||function(_0xd7ac1){const _0x4fca9b=_0x50a824;return _0xd7ac1&&_0xd7ac1[_0x4fca9b(0x24c)]?_0xd7ac1:{'default':_0xd7ac1};};Object[_0x50a824(0x245)](exports,_0x50a824(0x24c),{'value':!![]});const baileys_1=__importStar(require('@whiskeysockets/baileys')),logger_1=__importDefault(require(_0x50a824(0x225))),logger=logger_1['default'][_0x50a824(0x27e)]({});logger[_0x50a824(0x1fa)]=_0x50a824(0x205);const pino=require(_0x50a824(0x248)),boom_1=require('@hapi/boom'),conf=require(_0x50a824(0x1bc)),axios=require('axios');let fs=require(_0x50a824(0x1b0)),path=require(_0x50a824(0x22f));const FileType=require(_0x50a824(0x23f)),{Sticker,createSticker,StickerTypes}=require(_0x50a824(0x204)),{verifierEtatJid,recupererActionJid}=require(_0x50a824(0x1a7)),{atbverifierEtatJid,atbrecupererActionJid}=require('./bdd/antibot');let evt=require(__dirname+_0x50a824(0x247));const {isUserBanned,addUserToBanList,removeUserFromBanList}=require('./bdd/banUser'),{addGroupToBanList,isGroupBanned,removeGroupFromBanList}=require(_0x50a824(0x231)),{isGroupOnlyAdmin,addGroupToOnlyAdminList,removeGroupFromOnlyAdminList}=require(_0x50a824(0x241));let {reagir}=require(__dirname+_0x50a824(0x23a));function _0x4ff2(_0x53ec97,_0x1cce6f){const _0x1fa3e6=_0x1fa3();return _0x4ff2=function(_0x4ff2d8,_0x4eaeac){_0x4ff2d8=_0x4ff2d8-0x196;let _0x3bf49a=_0x1fa3e6[_0x4ff2d8];return _0x3bf49a;},_0x4ff2(_0x53ec97,_0x1cce6f);}function _0x1fa3(){const _0x3567f9=['!!!\x20connexion\x20fermée,\x20reconnexion\x20en\x20cours\x20...','DisconnectReason','private','toFile','keys','toLocaleLowerCase','reactionMessage','toBuffer','╔════◇\x0a║\x20ᴊᴏᴇʟ ᴍᴅ \x0a║\x20\x20\x20\x20Prefix\x20:\x20[\x20','/commandes/','child','number','text','Options\x20must\x20be\x20an\x20object','\x0a║\x20\x20\x20\x20Total\x20Commandes\x20:\x20','unavailable','transparent','configurable','fonction','trim','vous\x20êtes\x20déconnecté,,,\x20veuillez\x20rescanner\x20le\x20code\x20qr\x20svp','timeout','image','video','public','\x20*\x20*\x20*','groupMetadata','delete','protocolMessage','mention\x20pas\x20actifs','sender','recording','WARN_COUNT','AUTO_DOWNLOAD_STATUS','antibot\x20','FULL','Boom','add','writeToFile','length','OWNER_NAME','12Rmakxf','antidemote','badSession','server','\x20removed\x20from\x20group.','notify','error','Filter\x20must\x20be\x20a\x20function','existsSync','yes','string','messages.upsert','/auth','groupSettingUpdate','conversation','extendedTextMessage','composing','contextInfo','59502DZBQhP','\x20have\x20been\x20removed\x20from\x20administrative\x20rights.','session','create','contacts.upsert','------','😡😡\x20','default','hasOwnProperty','close','creds','s.whatsapp.net','delay','Africa/Abidjan','76614Tonkba','11653521kJjTMR','#000000','1355013uuxibB','group_id','AUTO_READ_STATUS','12345','\x20H\x20','videoMessage','then','type','fetchLatestBaileysVersion','\x20has\x20violated\x20the\x20anti-promotion\x20rule,\x20therefore\x20both\x20','chatJid','./bdd/antilien','demote','message','Hello,\x20it\x27s\x20time\x20to\x20close\x20the\x20group;\x20sayonara.','profilePictureUrl','__setModuleDefault','buttonsResponseMessage','extname','prototype','fs-extra','\x20avoid\x20sending\x20link.','./store.json','forEach','mtype','Les\x20crons\x20n\x27ont\x20pas\x20été\x20activés','lien\x20detecté','toLowerCase','selectedButtonId','NUMERO_OWNER','non','loggedOut','./set','action','participant','bdd\x20err\x20','msg','child_process','off','connexion\x20réplacée\x20,,,\x20une\x20sesssion\x20est\x20déjà\x20ouverte\x20veuillez\x20la\x20fermer\x20svp\x20!!!','\x20]\x0a║\x20\x20\x20\x20Mode\x20:','message\x20provenant\x20du\x20groupe\x20:\x20','welcome','includes','228QgRuUG','imageMessage','\x20:\x20','goodbye','groupParticipantsUpdate','undefined','112155siIWDx','output','restartRequired','./bdd/warn','sendPresenceUpdate','creds.update','split','find','\x20has\x20violated\x20the\x20anti-demotion\x20rule\x20by\x20removing\x20@','1.0.0','random','connectionReplaced','push','downloadContentFromMessage','message\x20deleted\x20\x0a\x20@','utf8','test','store.json','function','jidDecode','mise\x20à\x20jour\x20','120363158701337904@g.us','------\x20contenu\x20du\x20message\x20------','audio/mp4','sendMessage','BAES','readFileSync','caption','You\x20don\x27t\x20have\x20acces\x20to\x20commands\x20here','Session\x20Invalide\x20','4198450qTNKtD','lien\x20detected,\x20\x0a','BAE5','connexion\x20en\x20cour\x20...','getContentType','log','bot\x20detected,\x20\x0a','PM_PERMIT','bind','etablissement\x20d\x27un\x20automute\x20pour\x20','st1.webp','listResponseMessage','bot\x20detected\x20;you\x20will\x20be\x20remove\x20because\x20of\x20reaching\x20warn-limit','Good\x20morning;\x20It\x27s\x20time\x20to\x20open\x20the\x20group.','level','mimetype','pushName','promote','https://telegra.ph/file/4cc2712eee93c105f6739.jpg','/commandes','readdirSync','floor','map','./bdd/sudo','wa-sticker-formatter','silent','owner','255714595078','✅\x20connexion\x20reussie!\x20☺️','filter','unmute_at','unlink','participants','antipromote','not_announcement','255714565078','PREFIXE','one\x20or\x20somes\x20member(s)\x20left\x20group;\x0a','loadMessage','reaction','type\x20de\x20message\x20:\x20','./bdd/mention','url','45sXAMTZ','node-cron','useMultiFileAuthState','connectionLost','status@broadcast','fromMe','__importStar','╔════◇◇◇═════╗\x0a║\x20bienvenue\x20chère\x20\x20nouvoux(s)\x20membre(s)\x0a║\x20*Nouveaux(s)\x20Membre(s)\x20:*voici\x20lien\x20powered by joel tech\x22,\x0a','324976ZGKlVD','ChatJid\x20must\x20be\x20a\x20string','mentionedJid','redémarrage\x20en\x20cours\x20▶️','endsWith','fromBuffer','@whiskeysockets/baileys/lib/Utils/logger','mute_at','===========\x20Nouveau\x20message\x20===========','@s.whatsapp.net','./bdd/cron','message\x20delete\x20\x0a\x20@','__importDefault','key','assign','Zoou-Md','path','user','./bdd/banGroup','statusCode','------------------/-----','messageContextInfo','warn','NOM_OWNER','selectedRowId','\x20a\x20','replace','/framework/app','ext','slice','shift','makeCacheableSignalKeyStore','file-type','99ILBxqY','./bdd/onlyAdmin','︎\x0a╚══════════════════╝\x0a\x0a╔═════◇\x0a\x0apowered \x22 by joeltech \x22\x0a\x20\x0aj\x27oe\x20l\x20m\x20mul\x20dvice,\x202024\x20madein\x20moon\x20by\x20joel\x20..\x0a\x20\x20thans\x20f\x27or.ch\x20oosing\x20joel\x20md\x0a\x0a╚══════════════════╝','bot\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20','open','defineProperty','startsWith','/framework/zokou','pino','writeFileSync','author','schedule','__esModule','etablissement\x20d\x27un\x20autounmute\x20pour\x20','/auth/creds.json','Link\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20','║\x20@','remove','link\x20detected\x20,\x20you\x20will\x20be\x20remove\x20because\x20of\x20reaching\x20warn-limit','Zoou-MD','./media/chrono.webp','concat','remoteJid','ADM','readMessages','getOwnPropertyDescriptor','connection.update','get','singleSelectReply','je\x20fais\x20rien','\x20Avoid\x20sending\x20link.','119wXsmyZ','https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif','@g.us','./media/deleted-message.jpg','MODE','\x20n\x27a\x20pas\x20pu\x20être\x20chargé\x20pour\x20les\x20raisons\x20suivantes\x20:\x20','contacts','....\x20','parse','recupererToutesLesValeurs','call','connexion\x20au\x20serveur\x20perdue\x20😞\x20,,,\x20reconnexion\x20en\x20cours\x20...\x20','group-participants.update','URL','Cas\x20de\x20superUser\x20je\x20fais\x20rien','subject','hum\x20','./bdd/level','downloadAndSaveMediaMessage','Je\x20ne\x20reagis\x20pas\x20au\x20reactions','from'];_0x1fa3=function(){return _0x3567f9;};return _0x1fa3();}var session=conf[_0x50a824(0x2b1)]['replace'](/ᴊᴏᴇʟ-ᴍᴅ;;;=>/g,'');const prefixe=conf[_0x50a824(0x210)];async function authentification(){const _0x40b08a=_0x50a824;try{if(!fs[_0x40b08a(0x2a5)](__dirname+'/auth/creds.json'))console[_0x40b08a(0x1f1)](_0x40b08a(0x1ef)),await fs['writeFileSync'](__dirname+_0x40b08a(0x24e),atob(session),_0x40b08a(0x1dd));else fs[_0x40b08a(0x2a5)](__dirname+_0x40b08a(0x24e))&&session!='zokk'&&await fs[_0x40b08a(0x249)](__dirname+_0x40b08a(0x24e),atob(session),_0x40b08a(0x1dd));}catch(_0x3e69d1){console[_0x40b08a(0x1f1)](_0x40b08a(0x1eb)+_0x3e69d1);return;}}authentification();const store=(0x0,baileys_1['makeInMemoryStore'])({'logger':pino()[_0x50a824(0x27e)]({'level':'silent','stream':'store'})});setTimeout(()=>{async function _0x571006(){const _0x2d3e30=_0x4ff2,{version:_0x53acf4,isLatest:_0x3462c6}=await(0x0,baileys_1[_0x2d3e30(0x1a4)])(),{state:_0x207fdc,saveCreds:_0x10ab0d}=await(0x0,baileys_1[_0x2d3e30(0x219)])(__dirname+_0x2d3e30(0x2a9)),_0xd9a585={'version':_0x53acf4,'logger':pino({'level':_0x2d3e30(0x205)}),'browser':['JOEL-MD','safari',_0x2d3e30(0x1d7)],'printQRInTerminal':!![],'fireInitQueries':![],'shouldSyncHistoryMessage':!![],'downloadHistory':!![],'syncFullHistory':!![],'generateHighQualityLinkPreview':!![],'markOnlineOnConnect':![],'keepAliveIntervalMs':0x7530,'auth':{'creds':_0x207fdc[_0x2d3e30(0x2b9)],'keys':(0x0,baileys_1[_0x2d3e30(0x23e)])(_0x207fdc[_0x2d3e30(0x278)],logger)},'getMessage':async _0x4b64ba=>{const _0x28331b=_0x2d3e30;if(store){const _0x26a283=await store[_0x28331b(0x212)](_0x4b64ba['remoteJid'],_0x4b64ba['id'],undefined);return _0x26a283[_0x28331b(0x1a9)]||undefined;}return{'conversation':'An\x20Error\x20Occurred,\x20Repeat\x20Command!'};}},_0x41157d=(0x0,baileys_1[_0x2d3e30(0x2b6)])(_0xd9a585);store[_0x2d3e30(0x1f4)](_0x41157d['ev']),setInterval(()=>{const _0x1fab59=_0x2d3e30;store[_0x1fab59(0x29a)](_0x1fab59(0x1df));},0xbb8),_0x41157d['ev']['on'](_0x2d3e30(0x2a8),async _0xfdcf33=>{const _0x13ed19=_0x2d3e30,{messages:_0x3f3d21}=_0xfdcf33,_0x3029c4=_0x3f3d21[0x0];if(!_0x3029c4[_0x13ed19(0x1a9)])return;const _0x34455c=_0x376072=>{const _0x34544e=_0x13ed19;if(!_0x376072)return _0x376072;if(/:\d+@/gi[_0x34544e(0x1de)](_0x376072)){let _0x3d5b42=(0x0,baileys_1[_0x34544e(0x1e1)])(_0x376072)||{};return _0x3d5b42[_0x34544e(0x230)]&&_0x3d5b42[_0x34544e(0x2a0)]&&_0x3d5b42['user']+'@'+_0x3d5b42['server']||_0x376072;}else return _0x376072;};var _0x59690b=(0x0,baileys_1[_0x13ed19(0x1f0)])(_0x3029c4[_0x13ed19(0x1a9)]),_0x256b45=_0x59690b==_0x13ed19(0x2ab)?_0x3029c4['message'][_0x13ed19(0x2ab)]:_0x59690b==_0x13ed19(0x1c9)?_0x3029c4['message'][_0x13ed19(0x1c9)]?.['caption']:_0x59690b==_0x13ed19(0x1a1)?_0x3029c4[_0x13ed19(0x1a9)]['videoMessage']?.['caption']:_0x59690b==_0x13ed19(0x2ac)?_0x3029c4['message']?.[_0x13ed19(0x2ac)]?.['text']:_0x59690b=='buttonsResponseMessage'?_0x3029c4?.[_0x13ed19(0x1a9)]?.['buttonsResponseMessage']?.['selectedButtonId']:_0x59690b==_0x13ed19(0x1f7)?_0x3029c4['message']?.['listResponseMessage']?.[_0x13ed19(0x25c)]?.['selectedRowId']:_0x59690b==_0x13ed19(0x234)?_0x3029c4?.[_0x13ed19(0x1a9)]?.[_0x13ed19(0x1ad)]?.[_0x13ed19(0x1b8)]||_0x3029c4['message']?.['listResponseMessage']?.[_0x13ed19(0x25c)]?.[_0x13ed19(0x237)]||_0x3029c4[_0x13ed19(0x280)]:'',_0x2a9ad4=_0x3029c4[_0x13ed19(0x22c)][_0x13ed19(0x256)],_0x57354f=_0x34455c(_0x41157d[_0x13ed19(0x230)]['id']),_0x5091c9=_0x57354f[_0x13ed19(0x1d4)]('@')[0x0];const _0x30d651=_0x2a9ad4?.[_0x13ed19(0x223)](_0x13ed19(0x261));var _0x377027=_0x30d651?await _0x41157d[_0x13ed19(0x28e)](_0x2a9ad4):'',_0x229479=_0x30d651?_0x377027[_0x13ed19(0x26e)]:'',_0x584b88=_0x3029c4[_0x13ed19(0x1a9)][_0x13ed19(0x2ac)]?.[_0x13ed19(0x2ae)]?.['quotedMessage'],_0x559b3b=_0x34455c(_0x3029c4[_0x13ed19(0x1a9)]?.[_0x13ed19(0x2ac)]?.[_0x13ed19(0x2ae)]?.[_0x13ed19(0x1be)]),_0x3e2692=_0x3029c4[_0x13ed19(0x1a9)]?.['extendedTextMessage']?.[_0x13ed19(0x2ae)]?.['mentionedJid'],_0x4fe0f4=_0x3e2692?_0x3e2692:_0x584b88?_0x559b3b:'',_0x9e4074=_0x30d651?_0x3029c4[_0x13ed19(0x22c)][_0x13ed19(0x1be)]?_0x3029c4['key'][_0x13ed19(0x1be)]:_0x3029c4[_0x13ed19(0x1be)]:_0x2a9ad4;_0x3029c4[_0x13ed19(0x22c)][_0x13ed19(0x21c)]&&(_0x9e4074=_0x57354f);var _0x5bf6f9=_0x30d651?_0x3029c4[_0x13ed19(0x22c)]['participant']:'';const {getAllSudoNumbers:_0x8e88ed}=require(_0x13ed19(0x203)),_0x42c9ce=_0x3029c4[_0x13ed19(0x1fc)],_0x49675f='2250545065189',_0x333d8a=_0x13ed19(0x207),_0x23af9b=_0x13ed19(0x20f),_0x266254='2250545065189',_0x12fc29=await _0x8e88ed(),_0x1514e3=[_0x5091c9,_0x49675f,_0x333d8a,_0x23af9b,_0x266254,conf['NUMERO_OWNER']][_0x13ed19(0x202)](_0x4ee16c=>_0x4ee16c[_0x13ed19(0x239)](/[^0-9]/g)+_0x13ed19(0x228)),_0x3c3f7b=_0x1514e3[_0x13ed19(0x255)](_0x12fc29),_0x468ada=_0x3c3f7b[_0x13ed19(0x1c7)](_0x9e4074);var _0x59d6eb=[_0x49675f,_0x333d8a,_0x23af9b,_0x266254][_0x13ed19(0x202)](_0x30d7a3=>_0x30d7a3[_0x13ed19(0x239)](/[^0-9]/g)+_0x13ed19(0x228))[_0x13ed19(0x1c7)](_0x9e4074);function _0x1d2c8f(_0x22c561){const _0x94a282=_0x13ed19;_0x41157d[_0x94a282(0x1e6)](_0x2a9ad4,{'text':_0x22c561},{'quoted':_0x3029c4});}console[_0x13ed19(0x1f1)]('\x09\x20[][]...joel-Md}...[][]'),console[_0x13ed19(0x1f1)](_0x13ed19(0x227));_0x30d651&&console['log'](_0x13ed19(0x1c5)+_0x229479);console['log']('message\x20envoyé\x20par\x20:\x20'+'['+_0x42c9ce+_0x13ed19(0x1ca)+_0x9e4074[_0x13ed19(0x1d4)](_0x13ed19(0x228))[0x0]+'\x20]'),console[_0x13ed19(0x1f1)](_0x13ed19(0x214)+_0x59690b),console[_0x13ed19(0x1f1)](_0x13ed19(0x1e4)),console['log'](_0x256b45);function _0xd5347e(_0x406b49){const _0x13abca=_0x13ed19;let _0xe19b03=[];for(_0xfdcf33 of _0x406b49){if(_0xfdcf33['admin']==null)continue;_0xe19b03[_0x13abca(0x1da)](_0xfdcf33['id']);}return _0xe19b03;}var _0x132f3e=conf['ETAT'];if(_0x132f3e==0x1)await _0x41157d['sendPresenceUpdate']('available',_0x2a9ad4);else{if(_0x132f3e==0x2)await _0x41157d[_0x13ed19(0x1d2)](_0x13ed19(0x2ad),_0x2a9ad4);else _0x132f3e==0x3?await _0x41157d[_0x13ed19(0x1d2)](_0x13ed19(0x293),_0x2a9ad4):await _0x41157d[_0x13ed19(0x1d2)](_0x13ed19(0x283),_0x2a9ad4);}const _0x2bf6ac=_0x30d651?await _0x377027[_0x13ed19(0x20c)]:'';let _0x22b1cf=_0x30d651?_0xd5347e(_0x2bf6ac):'';const _0x303c9f=_0x30d651?_0x22b1cf[_0x13ed19(0x1c7)](_0x9e4074):![];var _0x3bb635=_0x30d651?_0x22b1cf[_0x13ed19(0x1c7)](_0x57354f):![];const _0x1526f6=_0x256b45?_0x256b45[_0x13ed19(0x287)]()[_0x13ed19(0x1d4)](/ +/)[_0x13ed19(0x23c)](0x1):null,_0x59bdbe=_0x256b45?_0x256b45[_0x13ed19(0x246)](prefixe):![],_0x495f01=_0x59bdbe?_0x256b45[_0x13ed19(0x23c)](0x1)[_0x13ed19(0x287)]()[_0x13ed19(0x1d4)](/ +/)[_0x13ed19(0x23d)]()[_0x13ed19(0x1b7)]():![],_0x1a8e79=conf[_0x13ed19(0x26c)][_0x13ed19(0x1d4)](',');function _0x2406fd(){const _0x4cb982=_0x13ed19,_0x306f8f=Math[_0x4cb982(0x201)](Math[_0x4cb982(0x1d8)]()*_0x1a8e79[_0x4cb982(0x29b)]),_0xcfd509=_0x1a8e79[_0x306f8f];return _0xcfd509;}var _0x24ce86={'superUser':_0x468ada,'dev':_0x59d6eb,'verifGroupe':_0x30d651,'mbre':_0x2bf6ac,'membreGroupe':_0x5bf6f9,'verifAdmin':_0x303c9f,'infosGroupe':_0x377027,'nomGroupe':_0x229479,'auteurMessage':_0x9e4074,'nomAuteurMessage':_0x42c9ce,'idBot':_0x57354f,'verifzokouAdmin':_0x3bb635,'prefixe':prefixe,'arg':_0x1526f6,'repondre':_0x1d2c8f,'mtype':_0x59690b,'groupeAdmin':_0xd5347e,'msgRepondu':_0x584b88,'auteurMsgRepondu':_0x559b3b,'ms':_0x3029c4,'mybotpic':_0x2406fd};if(_0x3029c4[_0x13ed19(0x1a9)][_0x13ed19(0x290)]&&_0x3029c4[_0x13ed19(0x1a9)][_0x13ed19(0x290)][_0x13ed19(0x1a3)]===0x0&&conf[_0x13ed19(0x257)][_0x13ed19(0x279)]()===_0x13ed19(0x2a6)){if(_0x3029c4[_0x13ed19(0x22c)][_0x13ed19(0x21c)]||_0x3029c4[_0x13ed19(0x1a9)][_0x13ed19(0x290)]['key']['fromMe']){console[_0x13ed19(0x1f1)]('Message\x20supprimer\x20me\x20concernant');return;}console[_0x13ed19(0x1f1)]('Message\x20supprimer');let _0x7c3fd3=_0x3029c4[_0x13ed19(0x1a9)][_0x13ed19(0x290)][_0x13ed19(0x22c)];try{let _0x396ecf=_0x13ed19(0x1b2);const _0xc699a0=fs[_0x13ed19(0x1e8)](_0x396ecf,_0x13ed19(0x1dd)),_0x56285d=JSON[_0x13ed19(0x267)](_0xc699a0);let _0xfe3bfa=_0x56285d['messages'][_0x7c3fd3[_0x13ed19(0x256)]],_0x1f220a;for(let _0x13af2b=0x0;_0x13af2b<_0xfe3bfa['length'];_0x13af2b++){if(_0xfe3bfa[_0x13af2b][_0x13ed19(0x22c)]['id']===_0x7c3fd3['id']){_0x1f220a=_0xfe3bfa[_0x13af2b];break;}}if(_0x1f220a===null||!_0x1f220a||_0x1f220a===_0x13ed19(0x1cd)){console[_0x13ed19(0x1f1)]('Message\x20non\x20trouver');return;}await _0x41157d[_0x13ed19(0x1e6)](_0x57354f,{'image':{'url':_0x13ed19(0x262)},'caption':'\x20\x20\x20\x20\x20\x20\x20\x20🕷️Anti-delete-message by joeltech 🕷️\x0a\x20Message\x20from\x20@'+_0x1f220a[_0x13ed19(0x22c)][_0x13ed19(0x1be)][_0x13ed19(0x1d4)]('@')[0x0]+'','mentions':[_0x1f220a[_0x13ed19(0x22c)][_0x13ed19(0x1be)]]})[_0x13ed19(0x1a2)](()=>{_0x41157d['sendMessage'](_0x57354f,{'forward':_0x1f220a},{'quoted':_0x1f220a});});}catch(_0x4ad910){console[_0x13ed19(0x1f1)](_0x4ad910);}}_0x3029c4[_0x13ed19(0x22c)]&&_0x3029c4['key'][_0x13ed19(0x256)]===_0x13ed19(0x21b)&&conf[_0x13ed19(0x19e)]==='yes'&&await _0x41157d[_0x13ed19(0x258)]([_0x3029c4[_0x13ed19(0x22c)]]);if(_0x3029c4[_0x13ed19(0x22c)]&&_0x3029c4[_0x13ed19(0x22c)]['remoteJid']===_0x13ed19(0x21b)&&conf[_0x13ed19(0x295)]==='yes'){if(_0x3029c4[_0x13ed19(0x1a9)]['extendedTextMessage']){var _0x2d8cc1=_0x3029c4[_0x13ed19(0x1a9)][_0x13ed19(0x2ac)]['text'];await _0x41157d[_0x13ed19(0x1e6)](_0x57354f,{'text':_0x2d8cc1},{'quoted':_0x3029c4});}else{if(_0x3029c4['message']['imageMessage']){var _0xc84d84=_0x3029c4[_0x13ed19(0x1a9)][_0x13ed19(0x1c9)][_0x13ed19(0x1e9)],_0x593917=await _0x41157d[_0x13ed19(0x271)](_0x3029c4[_0x13ed19(0x1a9)]['imageMessage']);await _0x41157d[_0x13ed19(0x1e6)](_0x57354f,{'image':{'url':_0x593917},'caption':_0xc84d84},{'quoted':_0x3029c4});}else{if(_0x3029c4['message'][_0x13ed19(0x1a1)]){var _0xc84d84=_0x3029c4['message'][_0x13ed19(0x1a1)]['caption'],_0x545d55=await _0x41157d['downloadAndSaveMediaMessage'](_0x3029c4[_0x13ed19(0x1a9)][_0x13ed19(0x1a1)]);await _0x41157d['sendMessage'](_0x57354f,{'video':{'url':_0x545d55},'caption':_0xc84d84},{'quoted':_0x3029c4});}}}}if(!_0x59d6eb&&_0x2a9ad4==_0x13ed19(0x1e3))return;if(_0x256b45&&_0x9e4074['endsWith'](_0x13ed19(0x196))){const {ajouterOuMettreAJourUserData:_0x3b6d74}=require(_0x13ed19(0x270));try{await _0x3b6d74(_0x9e4074);}catch(_0x265d51){console[_0x13ed19(0x2a3)
