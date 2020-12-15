'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "38e1f4c32239f39cf33270525369f314",
"assets/assets/movieData/best/1917%2520(2020).json": "7e77e7ce481b1673d139a20642699af6",
"assets/assets/movieData/best/1985%2520(2018).json": "bf019128dfb52fdcabbed4afb4373fcd",
"assets/assets/movieData/best/A%2520Beautiful%2520Day%2520in%2520the%2520Neighborhood%2520(2019).json": "c5cac52710cbff5cfbbf42247d8a4f3c",
"assets/assets/movieData/best/A%2520Ciambra%2520(2018).json": "db741c37d02e0a98c4f5bb8007b771ad",
"assets/assets/movieData/best/A%2520Secret%2520Love%2520(2020).json": "735b5666cd06495bc56caf74189fcd6b",
"assets/assets/movieData/best/A%2520Shaun%2520the%2520Sheep%2520Movie": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/A%2520Simple%2520Favor%2520(2018).json": "281f1de9119441e4ddc96f9a6f864358",
"assets/assets/movieData/best/A%2520Star%2520Is%2520Born%2520(2018).json": "8724a72ddfbf5634cb61ace8cf4513d1",
"assets/assets/movieData/best/A%2520Whisker%2520Away%2520(Nakitai%2520Watashi%2520wa%2520Neko%2520wo%2520Kaburu)%2520(2020).json": "b0e96749eeb821a327dbddd399f41093",
"assets/assets/movieData/best/Abominable%2520(2019).json": "db85ad636241a62212a4c4ffdee6b0e8",
"assets/assets/movieData/best/American%2520Factory%2520(2019).json": "fdea5f261eb6413542d5e97b9a1c8cf3",
"assets/assets/movieData/best/Andre%2520the%2520Giant%2520(2018).json": "a0740e14c9c3cccc4ce1246c4d850dbb",
"assets/assets/movieData/best/Arctic%2520(2019).json": "f53b12896eb84801f0e3f694f5bccc8b",
"assets/assets/movieData/best/At%2520the%2520Heart%2520of%2520Gold": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Athlete%2520A%2520(2020).json": "216289511027a0203f797504ff13fc67",
"assets/assets/movieData/best/Bad%2520Education%2520(2019).json": "9ec19514d318de887203ab9a0c2859a2",
"assets/assets/movieData/best/Batman%2520vs%2520Teenage%2520Mutant%2520Ninja%2520Turtles%2520(2019).json": "d2c09d725f999e5cdaa77eb1c0a4204b",
"assets/assets/movieData/best/Beastie%2520Boys%2520Story%2520(2020).json": "7e5ca17fccfe2fc5f881a23e47da4a3f",
"assets/assets/movieData/best/Becoming%2520Astrid%2520(Unga%2520Astrid)%2520(2018).json": "132803aeee5ee265f28fb90c9ba796a5",
"assets/assets/movieData/best/Big%2520Time%2520Adolescence%2520(2020).json": "30fa98aa6d11779bf9211b7fb85a0a20",
"assets/assets/movieData/best/Black%2520Panther%2520(2018).json": "9cbc40ce24946dbd8e2decc9813b6871",
"assets/assets/movieData/best/BlacKkKlansman%2520(2018).json": "0425496173d0293dbd62021818a5946a",
"assets/assets/movieData/best/Blinded%2520by%2520the%2520Light%2520(2019).json": "4ee3426a45bd0bb39a991019ad6ad88d",
"assets/assets/movieData/best/Booksmart%2520(2019).json": "35e8843494fbc899357299b9309aefc3",
"assets/assets/movieData/best/Border%2520(Grns)%2520(2018).json": "9b138fbd9ce2511d23ebafa6093109d4",
"assets/assets/movieData/best/Borg%2520Vs.%2520McEnroe%2520(2018).json": "d0fda5789d872ce5ebed2af723db9173",
"assets/assets/movieData/best/Boy%2520Erased%2520(2018).json": "dfcb5aac6f97da8fb6205384199bb768",
"assets/assets/movieData/best/Brittany%2520Runs%2520a%2520Marathon%2520(2019).json": "29d677cac55c7db992a89711fd4f6fcb",
"assets/assets/movieData/best/Call%2520Me%2520by%2520Your%2520Name%2520(2018).json": "f704376d410860b17488d39b659ca20e",
"assets/assets/movieData/best/Circus%2520of%2520Books%2520(2019).json": "6bf6f58bb8a78fd0df46df9358af2bc0",
"assets/assets/movieData/best/Cold%2520War%2520(Zimna%2520wojna)%2520(2018).json": "1d0a1745f30ea63ce658be1029986cca",
"assets/assets/movieData/best/Corpus%2520Christi%2520(Boze%2520cialo)%2520(2020).json": "31b1b0f010252c16e142fe79eee0fb5f",
"assets/assets/movieData/best/Crazy%2520Rich%2520Asians%2520(2018).json": "507d71835020878b5463208e7f14e099",
"assets/assets/movieData/best/Creed%2520II%2520(2018).json": "21a1494492927330f102fa7725105e5d",
"assets/assets/movieData/best/Dark%2520Waters%2520(2019).json": "3e2642ba03a10410f6b8b12c40cb013c",
"assets/assets/movieData/best/Deadwood": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Dogman%2520(2019).json": "48c4682259e76e812543b800a8673956",
"assets/assets/movieData/best/Downton%2520Abbey%2520(2019).json": "ac59e485c4b1ffea40c3248751381c5c",
"assets/assets/movieData/best/Echo%2520In%2520the%2520Canyon%2520(2019).json": "d66148cba9fc70cfd212090b0a9ca9ae",
"assets/assets/movieData/best/El%2520Camino": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Fighting%2520with%2520My%2520Family%2520(2019).json": "b2f87e642c9d61e55ae6a280d5b714a0",
"assets/assets/movieData/best/Ford%2520v%2520Ferrari%2520(2019).json": "c9e36bd5e609b5a0548c28355c14202a",
"assets/assets/movieData/best/Free%2520Solo%2520(2018).json": "2ea392199393aa5caedafe5022b0bb3d",
"assets/assets/movieData/best/Fyre%2520(2019).json": "21ffef6936ccba4e19a702b5651c758c",
"assets/assets/movieData/best/Gregory's%2520Girl%2520(2019).json": "f42dbbf4cc0f69c401c149ce205e67ef",
"assets/assets/movieData/best/Heroic%2520Losers%2520(La%2520odisea%2520de%2520los%2520giles)%2520(2019).json": "3c6e8a638f51e0dce752e0325d07a243",
"assets/assets/movieData/best/Homecoming": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Honeyland%2520(2019).json": "6a213f84ce107109b0120b8a29b8bba6",
"assets/assets/movieData/best/I%2520Am%2520Mother%2520(2019).json": "27924e648c8afa48dee47bc8649f510f",
"assets/assets/movieData/best/I%2520Lost%2520My%2520Body%2520(2019).json": "fa975fff316d33916384f0938b8903f4",
"assets/assets/movieData/best/I'm%2520No%2520Longer%2520Here%2520(Ya%2520no%2520estoy%2520aqu)%2520(2019).json": "b5956ef012912cd55e70c9637e0d332c",
"assets/assets/movieData/best/Instant%2520Family%2520(2018).json": "5561c5267412a0c638a6cb259f3267b0",
"assets/assets/movieData/best/Invader%2520Zim": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Ip%2520Man%25204": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Isle%2520of%2520Dogs%2520(2018).json": "a0dbb560f476b33f1ae457328b01c8ed",
"assets/assets/movieData/best/John%2520Mulaney": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/John%2520Mulaney%2520&%2520The%2520Sack%2520Lunch%2520Bunch%2520(2019).json": "219549ada541fa5962265a5aa55b6ffa",
"assets/assets/movieData/best/John%2520Wick": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Jojo%2520Rabbit%2520(2019).json": "918e1a8e99ba890250e7262ba2cc1669",
"assets/assets/movieData/best/Judy%2520(2019).json": "84bcb7c922f95e224c1b5a1b2b104827",
"assets/assets/movieData/best/Just%2520Mercy%2520(2020).json": "a8b91bec88cbc0f534a677bd0c2e1cc0",
"assets/assets/movieData/best/Justice%2520League%2520Dark": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Kingdom%2520(2019).json": "cbd0a3aa9e3cc135361847b9261ad0b9",
"assets/assets/movieData/best/Klaus%2520(2019).json": "f9d62ecc1a76811844c00df1dc555bf9",
"assets/assets/movieData/best/Knives%2520Out%2520(2019).json": "0d5a733d22191096ec6277d5ad1cb121",
"assets/assets/movieData/best/Leave%2520No%2520Trace%2520(2018).json": "40d9131c1ab44bad23520f34e14adc1b",
"assets/assets/movieData/best/Les%2520Misrables%2520(2020).json": "d0d680e0acdc9fe42b399fcfd82be36e",
"assets/assets/movieData/best/Little%2520Women%2520(2019).json": "ed3779f97648a65267f1aeff40db793d",
"assets/assets/movieData/best/Long%2520Shot%2520(2019).json": "909ce98206666492cf5013d978c7a809",
"assets/assets/movieData/best/Loveless%2520(Nelyubov)%2520(2018).json": "41b316edb52764f6f91e90e4f30c1e29",
"assets/assets/movieData/best/Luce%2520(2019).json": "209cafa6660f5315bfc9a6af996b19e9",
"assets/assets/movieData/best/Mard%2520Ko%2520Dard%2520Nahi%2520Hota%2520(2019).json": "cc469bf65c769d32513e98c8dd3291a9",
"assets/assets/movieData/best/Marriage%2520Story%2520(2019).json": "89b472a3ed79e96d192c2debbf56d783",
"assets/assets/movieData/best/McQueen%2520(2018).json": "12bab9566d75260b00b15e2b3fb99836",
"assets/assets/movieData/best/Miss%2520Americana%2520(2020).json": "6676ba4425089434dfa1667365c23204",
"assets/assets/movieData/best/Monos%2520(2019).json": "62bfa64ce96fd7b834463e209616d4c8",
"assets/assets/movieData/best/Mortal%2520Kombat%2520Legends": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieData/best/Ne%2520Zha%2520(2019).json": "933793295cc37a1bc4567145bdc07ea5",
"assets/assets/movieData/best/Official%2520Secrets%2520(2019).json": "39065516c15062a020dcd428eb3a91d9",
"assets/assets/movieData/best/One%2520Child%2520Nation%2520(2019).json": "c2a0894ac2618fd1eebc298ea10f9e11",
"assets/assets/movieData/best/Onward%2520(2020).json": "db2e1e6d699c4db38cb17dadf00b51b7",
"assets/assets/movieData/best/Paddleton%2520(2019).json": "3184a69c4ae9f4b4f630d019c081fdfe",
"assets/assets/movieData/best/Panga%2520(2020).json": "a4cb84ae55bec70564fd7660dcffa667",
"assets/assets/movieData/best/Pavarotti%2520(2019).json": "a71ae54c020cddb68ded98470495b896",
"assets/assets/movieData/best/Portrait%2520of%2520a%2520Lady%2520on%2520Fire%2520(Portrait%2520de%2520la%2520jeune%2520fille%2520en%2520feu)%2520(2020).json": "39e30d432aaefefce5e23bfeb7f4fdac",
"assets/assets/movieData/best/Queen%2520&%2520Slim%2520(2019).json": "8c016c92ac5d11d3667a3c37c9bd9646",
"assets/assets/movieData/best/Queen%2520of%2520Hearts%2520(2019).json": "c4f9027fdf6e1d3c9a898148f791f7d3",
"assets/assets/movieData/best/Ready%2520or%2520Not%2520(2019).json": "cf069fbb828e731c10b46b8867bb7bec",
"assets/assets/movieData/best/Spelling%2520the%2520Dream%2520(2020).json": "33cf6f8d92cac7ec3b15e8c201cf95ba",
"assets/assets/movieData/best/The%2520Biggest%2520Little%2520Farm%2520(2019).json": "d652eb55d5a7b518b7f2366fe49dd329",
"assets/assets/movieData/best/The%2520Cave%2520(2019).json": "bd6f5590ba595f977675fc48e2ab920e",
"assets/assets/movieData/best/The%2520Gangster,%2520the%2520Cop,%2520the%2520Devil%2520(2019).json": "d5a3f3b501443da62d9b1e1c36760560",
"assets/assets/movieData/best/The%2520Half%2520of%2520It%2520(2020).json": "6685d5d04efe6964b755d22d35f1786e",
"assets/assets/movieData/best/The%2520Invisible%2520Man%2520(2020).json": "3002736fc13311b01531e3feff23138e",
"assets/assets/movieData/best/The%2520Irishman%2520(2019).json": "2a71e76038bbb3017faa4e1ee95d85bb",
"assets/assets/movieData/best/The%2520Report%2520(2019).json": "eda0057ddccbffcbb24c54b9d4b69398",
"assets/assets/movieData/best/The%2520Way%2520Back%2520(2020).json": "229f05770321de34d6b277dbcb08cef5",
"assets/assets/movieData/best/The%2520Wild%2520Pear%2520Tree%2520(Ahlat%2520agaci)%2520(2019).json": "09a220fcb2aeeb917c27ddd8ee963898",
"assets/assets/movieData/best/Togo%2520(2019).json": "36f15ae4536044ac1458f93a93bbcda9",
"assets/assets/movieData/best/Waves%2520(2019).json": "ad278287ae2a1a025a96b3a6e3551774",
"assets/assets/movieData/best/Weathering%2520with%2520You%2520(2020).json": "45c5307b0617b2c9d73944b9847fa5ff",
"assets/assets/movieImages/best/1917%2520(2020).jpeg": "f0dba2a4293ac99b30ebd5dbeace8431",
"assets/assets/movieImages/best/1985%2520(2018).jpeg": "1892ccaa4033674bd9da72adf2c5be49",
"assets/assets/movieImages/best/A%2520Beautiful%2520Day%2520in%2520the%2520Neighborhood%2520(2019).jpeg": "64c8532bc4a0117a4bac7997bbf2bf4f",
"assets/assets/movieImages/best/A%2520Ciambra%2520(2018).jpeg": "0a6e64e235b31acb19b99e2e4c081685",
"assets/assets/movieImages/best/A%2520Secret%2520Love%2520(2020).jpeg": "50208f6b3f4e9c3844635a63cb49be34",
"assets/assets/movieImages/best/A%2520Shaun%2520the%2520Sheep%2520Movie": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/A%2520Simple%2520Favor%2520(2018).jpeg": "4ee46dc136c8e9d472ba7129d1ba518b",
"assets/assets/movieImages/best/A%2520Star%2520Is%2520Born%2520(2018).jpeg": "1da4f48ef6e78b222f517f09de350a5d",
"assets/assets/movieImages/best/A%2520Whisker%2520Away%2520(Nakitai%2520Watashi%2520wa%2520Neko%2520wo%2520Kaburu)%2520(2020).jpeg": "deea04945c1268dc23b7984c9d8d1c0f",
"assets/assets/movieImages/best/Abominable%2520(2019).jpeg": "180f432814909af277c64e6fa0419123",
"assets/assets/movieImages/best/American%2520Factory%2520(2019).jpeg": "b2bf66451cde90f4132098081564d0a8",
"assets/assets/movieImages/best/Andre%2520the%2520Giant%2520(2018).jpeg": "95d54b324dad691c8048b8529db16734",
"assets/assets/movieImages/best/Arctic%2520(2019).jpeg": "8eddd1534f7675fc994b989ff5b96cdb",
"assets/assets/movieImages/best/At%2520the%2520Heart%2520of%2520Gold": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Athlete%2520A%2520(2020).jpeg": "c419c6dbde86bb2aea1503988ecb1795",
"assets/assets/movieImages/best/Bad%2520Education%2520(2019).jpeg": "65b48e1ef5e50b32793629ff5b6af493",
"assets/assets/movieImages/best/Batman%2520vs%2520Teenage%2520Mutant%2520Ninja%2520Turtles%2520(2019).jpeg": "48fd633cdbec1c50593f393ae397cbbc",
"assets/assets/movieImages/best/Beastie%2520Boys%2520Story%2520(2020).jpeg": "0eb024d34a710866de95081b94705a0a",
"assets/assets/movieImages/best/Becoming%2520Astrid%2520(Unga%2520Astrid)%2520(2018).jpeg": "9fc57600e6301190b003c6a3b5782892",
"assets/assets/movieImages/best/Big%2520Time%2520Adolescence%2520(2020).jpeg": "955477054e4fe60190f91a14b89829bc",
"assets/assets/movieImages/best/Black%2520Panther%2520(2018).jpeg": "803bd07e6715dfbae6017fac1d47132a",
"assets/assets/movieImages/best/BlacKkKlansman%2520(2018).jpeg": "d0430d4fbc2b8bd9d0859786563fc30a",
"assets/assets/movieImages/best/Blinded%2520by%2520the%2520Light%2520(2019).jpeg": "fa92d31468931051d2f7a9376c804ab3",
"assets/assets/movieImages/best/Booksmart%2520(2019).jpeg": "36667a823023a461fefd3c497f04123b",
"assets/assets/movieImages/best/Border%2520(Grns)%2520(2018).jpeg": "e9cb142245d63f39ef8395b1e0991dba",
"assets/assets/movieImages/best/Borg%2520Vs.%2520McEnroe%2520(2018).jpeg": "ba7a90e6bb18bce0e64577df6cc218b8",
"assets/assets/movieImages/best/Boy%2520Erased%2520(2018).jpeg": "8574508f8e54be675943004ba996c22e",
"assets/assets/movieImages/best/Brittany%2520Runs%2520a%2520Marathon%2520(2019).jpeg": "02bb8bcb94f566f57778062d6c874aa4",
"assets/assets/movieImages/best/Call%2520Me%2520by%2520Your%2520Name%2520(2018).jpeg": "692a8dd03f124098956115c4a3f95329",
"assets/assets/movieImages/best/Circus%2520of%2520Books%2520(2019).jpeg": "33f014836661ef17b08beed01bb723e9",
"assets/assets/movieImages/best/Cold%2520War%2520(Zimna%2520wojna)%2520(2018).jpeg": "7b9718690738fac15ab5dbfa9f42bb66",
"assets/assets/movieImages/best/Corpus%2520Christi%2520(Boze%2520cialo)%2520(2020).jpeg": "acd2fc2f08e614a997ae819e796e4744",
"assets/assets/movieImages/best/Crazy%2520Rich%2520Asians%2520(2018).jpeg": "7c88efe8f8501f934d5f42971a232540",
"assets/assets/movieImages/best/Creed%2520II%2520(2018).jpeg": "706120a2cf1165145d1c8bae56bcfe3f",
"assets/assets/movieImages/best/Dark%2520Waters%2520(2019).jpeg": "9502391e4d49cdf51215f7bed02c718f",
"assets/assets/movieImages/best/Deadwood": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Dogman%2520(2019).jpeg": "e5ec146a7c14bb3f5ee67580ee4a68da",
"assets/assets/movieImages/best/Downton%2520Abbey%2520(2019).jpeg": "8ed7c110094e24a491e976c2766221bc",
"assets/assets/movieImages/best/Echo%2520In%2520the%2520Canyon%2520(2019).jpeg": "5f7c5f8d91547389bafb3bb69c08c157",
"assets/assets/movieImages/best/El%2520Camino": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Fighting%2520with%2520My%2520Family%2520(2019).jpeg": "f99f857d5bb773b7c8aa864ebf14be09",
"assets/assets/movieImages/best/Ford%2520v%2520Ferrari%2520(2019).jpeg": "81ba26f991dbbeffce62099e5a1cd261",
"assets/assets/movieImages/best/Free%2520Solo%2520(2018).jpeg": "52682ed043d0d2bf2b628bbf476bf9ec",
"assets/assets/movieImages/best/Fyre%2520(2019).jpeg": "f1c36dad1066438a1a302a83f3fc369f",
"assets/assets/movieImages/best/Gregory's%2520Girl%2520(2019).jpeg": "2f82fb4c7b8ac48edad8fb1cd0507ff3",
"assets/assets/movieImages/best/Heroic%2520Losers%2520(La%2520odisea%2520de%2520los%2520giles)%2520(2019).jpeg": "6b369777088445fd64bc37831fa5f66e",
"assets/assets/movieImages/best/Homecoming": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Honeyland%2520(2019).jpeg": "48289bf1dc4e9a1eb986ebdaa04e48cf",
"assets/assets/movieImages/best/I%2520Am%2520Mother%2520(2019).jpeg": "5645160256dd468d53c743a4267c1b26",
"assets/assets/movieImages/best/I%2520Lost%2520My%2520Body%2520(2019).jpeg": "221435dfdbf8d59504c4e5889ab8b1f8",
"assets/assets/movieImages/best/I'm%2520No%2520Longer%2520Here%2520(Ya%2520no%2520estoy%2520aqu)%2520(2019).jpeg": "7a98a00226f59c14fff1925f4cbb64d1",
"assets/assets/movieImages/best/Instant%2520Family%2520(2018).jpeg": "f0f1a39f1c0678bb266bda4ba89fde6a",
"assets/assets/movieImages/best/Invader%2520Zim": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Ip%2520Man%25204": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Isle%2520of%2520Dogs%2520(2018).jpeg": "331bdd2f576e0e76dd66e9df2b679ac0",
"assets/assets/movieImages/best/John%2520Mulaney": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/John%2520Mulaney%2520&%2520The%2520Sack%2520Lunch%2520Bunch%2520(2019).jpeg": "cc394e5bfbfb93511e331ab239fbf867",
"assets/assets/movieImages/best/John%2520Wick": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Jojo%2520Rabbit%2520(2019).jpeg": "081250a115b190c20c2f431e31e0fc75",
"assets/assets/movieImages/best/Judy%2520(2019).jpeg": "d46dddfd6936c7cc733bca6e573e57ce",
"assets/assets/movieImages/best/Just%2520Mercy%2520(2020).jpeg": "53fa4ccda45a104deceb100bbed8e5a4",
"assets/assets/movieImages/best/Justice%2520League%2520Dark": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Kingdom%2520(2019).jpeg": "6509aa906cc765f26634cbf07f29fbcf",
"assets/assets/movieImages/best/Klaus%2520(2019).jpeg": "3972c4c45e3db8f1644f429ea9a2710c",
"assets/assets/movieImages/best/Knives%2520Out%2520(2019).jpeg": "0c8da33586aace5de056969e7c4c9b74",
"assets/assets/movieImages/best/Leave%2520No%2520Trace%2520(2018).jpeg": "c9dc163acc45a243fdd387b108d37143",
"assets/assets/movieImages/best/Les%2520Misrables%2520(2020).jpeg": "450bf1ca951cf2c235900bb8a3a955cf",
"assets/assets/movieImages/best/Little%2520Women%2520(2019).jpeg": "21c9410f921f78c211b16076fa1c17d9",
"assets/assets/movieImages/best/Long%2520Shot%2520(2019).jpeg": "0c5139903a1d74dd27f973db99327791",
"assets/assets/movieImages/best/Loveless%2520(Nelyubov)%2520(2018).jpeg": "ca9e322d65c3fd37ba3f52aceb0e582d",
"assets/assets/movieImages/best/Luce%2520(2019).jpeg": "f2fb9924d5db9e8d3071a29f6aa50dc0",
"assets/assets/movieImages/best/Mard%2520Ko%2520Dard%2520Nahi%2520Hota%2520(2019).jpeg": "4c45830fdaf542e2e3002fb15b0af9e0",
"assets/assets/movieImages/best/Marriage%2520Story%2520(2019).jpeg": "565a1649640663774104f44a10c79cd0",
"assets/assets/movieImages/best/McQueen%2520(2018).jpeg": "5e01723160be30243266992f3f193270",
"assets/assets/movieImages/best/Miss%2520Americana%2520(2020).jpeg": "399735a4183f951cda1b8db1b301446c",
"assets/assets/movieImages/best/Monos%2520(2019).jpeg": "b237c3498197371df6b9762c5acdffdb",
"assets/assets/movieImages/best/Mortal%2520Kombat%2520Legends": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/movieImages/best/Ne%2520Zha%2520(2019).jpeg": "e4360a8adecbc84cf0f3e79e91faed4e",
"assets/assets/movieImages/best/Official%2520Secrets%2520(2019).jpeg": "f3baf7119b0a219b159e3c801398b657",
"assets/assets/movieImages/best/One%2520Child%2520Nation%2520(2019).jpeg": "a54463b4b8826cd85bde43425474f189",
"assets/assets/movieImages/best/Onward%2520(2020).jpeg": "019b8df6b7a2d914662bd4ca762f1b31",
"assets/assets/movieImages/best/Paddleton%2520(2019).jpeg": "9f0beeb13ec201003bcc6d0801355155",
"assets/assets/movieImages/best/Panga%2520(2020).jpeg": "83db822753ad28396b84d346fb0d69a9",
"assets/assets/movieImages/best/Pavarotti%2520(2019).jpeg": "7a21f201b4d251bb6e4faeb568c13f40",
"assets/assets/movieImages/best/Portrait%2520of%2520a%2520Lady%2520on%2520Fire%2520(Portrait%2520de%2520la%2520jeune%2520fille%2520en%2520feu)%2520(2020).jpeg": "43c86551f756402b8ec3769a43edfcb4",
"assets/assets/movieImages/best/Queen%2520&%2520Slim%2520(2019).jpeg": "a0ca12adec33b276e0c0f954278d935b",
"assets/assets/movieImages/best/Queen%2520of%2520Hearts%2520(2019).jpeg": "cc06c7cdda6783bde2fdb807077c069c",
"assets/assets/movieImages/best/Ready%2520or%2520Not%2520(2019).jpeg": "ebd11e8b0320bfe7ca0a01a6d8a40645",
"assets/assets/movieImages/best/Spelling%2520the%2520Dream%2520(2020).jpeg": "c2a4bbfe342392975f926709e3a97e4c",
"assets/assets/movieImages/best/The%2520Biggest%2520Little%2520Farm%2520(2019).jpeg": "f7976189a22dbeb864c8472341359a90",
"assets/assets/movieImages/best/The%2520Cave%2520(2019).jpeg": "b09090e78a684fcd358fb2f120a07dbb",
"assets/assets/movieImages/best/The%2520Gangster,%2520the%2520Cop,%2520the%2520Devil%2520(2019).jpeg": "94301bcdb96919f7089d3bdb09bb6a5b",
"assets/assets/movieImages/best/The%2520Half%2520of%2520It%2520(2020).jpeg": "83664b64b5c6cda4e16b0189fcc7a7ac",
"assets/assets/movieImages/best/The%2520Invisible%2520Man%2520(2020).jpeg": "4e0c367dc27297e25bfd7561d6988024",
"assets/assets/movieImages/best/The%2520Irishman%2520(2019).jpeg": "32779fa39125e839a6b91c84e5e8121e",
"assets/assets/movieImages/best/The%2520Report%2520(2019).jpeg": "4d29fc15598c574c00032a729623b055",
"assets/assets/movieImages/best/The%2520Way%2520Back%2520(2020).jpeg": "b2f61636217b88d8ea1c78f53ffdb139",
"assets/assets/movieImages/best/The%2520Wild%2520Pear%2520Tree%2520(Ahlat%2520agaci)%2520(2019).jpeg": "0438f7dbf7ef22458624c42a243a5ae4",
"assets/assets/movieImages/best/Togo%2520(2019).jpeg": "c347ebe79b2ee8c435764e3e7bde4a8b",
"assets/assets/movieImages/best/Waves%2520(2019).jpeg": "d3e2b4548d6f0a15afeaedfe77594e19",
"assets/assets/movieImages/best/Weathering%2520with%2520You%2520(2020).jpeg": "3702691f50ed5dc089cc91677f54251d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "386dd261e643ec87d811b44a1d9e885a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "18bbebd583e6de6e4fa3ffcc94a63ecb",
"/": "18bbebd583e6de6e4fa3ffcc94a63ecb",
"main.dart.js": "d2fbec6012a1b132e238fd90e8b56248",
"manifest.json": "836ed321249255776dbffbd319e62e43",
"version.json": "29a2aac9b4dd4f5245eec090d9068828"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
