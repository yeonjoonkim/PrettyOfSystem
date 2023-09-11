import { Injectable } from '@angular/core';
import { PostCodeItemType } from 'src/app/interface/global/global.interface';

@Injectable({
  providedIn: 'root',
})
export class NtService {
  public data: PostCodeItemType[] = [
    {
      postCode: '822',
      suburb: 'ACACIA HILLS',
    },
    {
      postCode: '846',
      suburb: 'ADELAIDE RIVER',
    },
    {
      postCode: '810',
      suburb: 'ALAWA',
    },
    {
      postCode: '872',
      suburb: 'ALI CURUNG',
    },
    {
      postCode: '870',
      suburb: 'ALICE SPRINGS',
    },
    {
      postCode: '871',
      suburb: 'ALICE SPRINGS',
    },
    {
      postCode: '872',
      suburb: 'ALICE SPRINGS',
    },
    {
      postCode: '4825',
      suburb: 'ALPURRURULAM',
    },
    {
      postCode: '885',
      suburb: 'ALYANGULA',
    },
    {
      postCode: '873',
      suburb: 'AMOONGUNA',
    },
    {
      postCode: '872',
      suburb: 'AMPILATWATJA',
    },
    {
      postCode: '872',
      suburb: 'ANATYE',
    },
    {
      postCode: '822',
      suburb: 'ANGURUGU',
    },
    {
      postCode: '822',
      suburb: 'ANINDILYAKWA',
    },
    {
      postCode: '872',
      suburb: 'ANMATJERE',
    },
    {
      postCode: '812',
      suburb: 'ANULA',
    },
    {
      postCode: '870',
      suburb: 'ARALUEN',
    },
    {
      postCode: '830',
      suburb: 'ARCHER',
    },
    {
      postCode: '872',
      suburb: 'AREYONGA',
    },
    {
      postCode: '852',
      suburb: 'ARNOLD',
    },
    {
      postCode: '873',
      suburb: 'ARUMBERA',
    },
    {
      postCode: '872',
      suburb: 'ATITJERE',
    },
    {
      postCode: '852',
      suburb: 'BAINES',
    },
    {
      postCode: '832',
      suburb: 'BAKEWELL',
    },
    {
      postCode: '872',
      suburb: 'BARROW CREEK',
    },
    {
      postCode: '852',
      suburb: 'BARUNGA',
    },
    {
      postCode: '845',
      suburb: 'BATCHELOR',
    },
    {
      postCode: '822',
      suburb: 'BATHURST ISLAND',
    },
    {
      postCode: '820',
      suburb: 'BAYVIEW',
    },
    {
      postCode: '822',
      suburb: 'BEES CREEK',
    },
    {
      postCode: '832',
      suburb: 'BELLAMACK',
    },
    {
      postCode: '822',
      suburb: 'BELYUEN',
    },
    {
      postCode: '828',
      suburb: 'BERRIMAH',
    },
    {
      postCode: '838',
      suburb: 'BERRY SPRINGS',
    },
    {
      postCode: '852',
      suburb: 'BESWICK',
    },
    {
      postCode: '852',
      suburb: 'BESWICK CREEK',
    },
    {
      postCode: '852',
      suburb: 'BINJARI',
    },
    {
      postCode: '852',
      suburb: 'BIRDUM',
    },
    {
      postCode: '822',
      suburb: 'BLACK JUNGLE',
    },
    {
      postCode: '822',
      suburb: 'BLACKMORE',
    },
    {
      postCode: '854',
      suburb: 'BORROLOOLA',
    },
    {
      postCode: '852',
      suburb: 'BRADSHAW',
    },
    {
      postCode: '870',
      suburb: 'BRAITLING',
    },
    {
      postCode: '810',
      suburb: 'BRINKIN',
    },
    {
      postCode: '852',
      suburb: 'BUCHANAN',
    },
    {
      postCode: '812',
      suburb: 'BUFFALO CREEK',
    },
    {
      postCode: '852',
      suburb: 'BULMAN WEEMOL',
    },
    {
      postCode: '822',
      suburb: 'BURRUNDIE',
    },
    {
      postCode: '872',
      suburb: 'BURT PLAIN',
    },
    {
      postCode: '822',
      suburb: 'BYNOE',
    },
    {
      postCode: '822',
      suburb: 'BYNOE HARBOUR',
    },
    {
      postCode: '862',
      suburb: 'CALVERT',
    },
    {
      postCode: '822',
      suburb: 'CAMP CREEK',
    },
    {
      postCode: '872',
      suburb: 'CANTEEN CREEK',
    },
    {
      postCode: '810',
      suburb: 'CASUARINA',
    },
    {
      postCode: '811',
      suburb: 'CASUARINA',
    },
    {
      postCode: '822',
      suburb: 'CHANNEL ISLAND',
    },
    {
      postCode: '820',
      suburb: 'CHARLES DARWIN',
    },
    {
      postCode: '822',
      suburb: 'CHARLES DARWIN',
    },
    {
      postCode: '815',
      suburb: 'CHARLES DARWIN UNIVERSITY',
    },
    {
      postCode: '909',
      suburb: 'CHARLES DARWIN UNIVERSITY',
    },
    {
      postCode: '822',
      suburb: 'CHARLOTTE',
    },
    {
      postCode: '872',
      suburb: 'CHILLA WELL',
    },
    {
      postCode: '870',
      suburb: 'CICCONE',
    },
    {
      postCode: '822',
      suburb: 'CLARAVALE',
    },
    {
      postCode: '822',
      suburb: 'COBOURG',
    },
    {
      postCode: '810',
      suburb: 'COCONUT GROVE',
    },
    {
      postCode: '822',
      suburb: 'COLLETT CREEK',
    },
    {
      postCode: '873',
      suburb: 'CONNELLAN',
    },
    {
      postCode: '839',
      suburb: 'COOLALINGA',
    },
    {
      postCode: '822',
      suburb: 'COOMALIE CREEK',
    },
    {
      postCode: '820',
      suburb: 'COONAWARRA',
    },
    {
      postCode: '850',
      suburb: 'COSSACK',
    },
    {
      postCode: '872',
      suburb: 'COSTELLO',
    },
    {
      postCode: '822',
      suburb: 'COX PENINSULA',
    },
    {
      postCode: '852',
      suburb: 'CRESWELL',
    },
    {
      postCode: '852',
      suburb: 'DAGURAGU',
    },
    {
      postCode: '822',
      suburb: 'DALY',
    },
    {
      postCode: '822',
      suburb: 'DALY RIVER',
    },
    {
      postCode: '852',
      suburb: 'DALY WATERS',
    },
    {
      postCode: '801',
      suburb: 'DARWIN',
    },
    {
      postCode: '800',
      suburb: 'DARWIN CITY',
    },
    {
      postCode: '820',
      suburb: 'DARWIN DC',
    },
    {
      postCode: '841',
      suburb: 'DARWIN RIVER',
    },
    {
      postCode: '822',
      suburb: 'DARWIN RIVER DAM',
    },
    {
      postCode: '872',
      suburb: 'DAVENPORT',
    },
    {
      postCode: '852',
      suburb: 'DELAMERE',
    },
    {
      postCode: '870',
      suburb: 'DESERT SPRINGS',
    },
    {
      postCode: '822',
      suburb: 'DOUGLAS-DALY',
    },
    {
      postCode: '830',
      suburb: 'DRIVER',
    },
    {
      postCode: '840',
      suburb: 'DUNDEE BEACH',
    },
    {
      postCode: '840',
      suburb: 'DUNDEE DOWNS',
    },
    {
      postCode: '840',
      suburb: 'DUNDEE FOREST',
    },
    {
      postCode: '830',
      suburb: 'DURACK',
    },
    {
      postCode: '822',
      suburb: 'EAST ARM',
    },
    {
      postCode: '822',
      suburb: 'EAST ARNHEM',
    },
    {
      postCode: '820',
      suburb: 'EAST POINT',
    },
    {
      postCode: '870',
      suburb: 'EAST SIDE',
    },
    {
      postCode: '820',
      suburb: 'EATON',
    },
    {
      postCode: '852',
      suburb: 'EDITH',
    },
    {
      postCode: '862',
      suburb: 'ELLIOTT',
    },
    {
      postCode: '822',
      suburb: 'ELRUNDIE',
    },
    {
      postCode: '852',
      suburb: 'ELSEY',
    },
    {
      postCode: '850',
      suburb: 'EMUNGALAN',
    },
    {
      postCode: '872',
      suburb: 'ENGAWALA',
    },
    {
      postCode: '822',
      suburb: 'EVA VALLEY',
    },
    {
      postCode: '820',
      suburb: 'FANNIE BAY',
    },
    {
      postCode: '830',
      suburb: 'FARRAR',
    },
    {
      postCode: '872',
      suburb: 'FINKE',
    },
    {
      postCode: '822',
      suburb: 'FINNISS VALLEY',
    },
    {
      postCode: '822',
      suburb: 'FLEMING',
    },
    {
      postCode: '852',
      suburb: 'FLORINA',
    },
    {
      postCode: '822',
      suburb: 'FLY CREEK',
    },
    {
      postCode: '852',
      suburb: 'FLYING FOX',
    },
    {
      postCode: '875',
      suburb: 'FLYNN',
    },
    {
      postCode: '822',
      suburb: 'FREDS PASS',
    },
    {
      postCode: '822',
      suburb: 'GALIWINKU',
    },
    {
      postCode: '880',
      suburb: 'GAPUWIYAK',
    },
    {
      postCode: '872',
      suburb: 'GHAN',
    },
    {
      postCode: '870',
      suburb: 'GILLEN',
    },
    {
      postCode: '836',
      suburb: 'GIRRAWEEN',
    },
    {
      postCode: '822',
      suburb: 'GLYDE POINT',
    },
    {
      postCode: '822',
      suburb: 'GOULBURN ISLAND',
    },
    {
      postCode: '830',
      suburb: 'GRAY',
    },
    {
      postCode: '852',
      suburb: 'GREGORY',
    },
    {
      postCode: '852',
      suburb: 'GULUNG MARDRULK',
    },
    {
      postCode: '822',
      suburb: 'GUNBALANYA',
    },
    {
      postCode: '832',
      suburb: 'GUNN',
    },
    {
      postCode: '822',
      suburb: 'GUNN POINT',
    },
    {
      postCode: '880',
      suburb: 'GUNYANGARA',
    },
    {
      postCode: '852',
      suburb: 'GURINDJI',
    },
    {
      postCode: '872',
      suburb: 'HAASTS BLUFF',
    },
    {
      postCode: '872',
      suburb: 'HALE',
    },
    {
      postCode: '872',
      suburb: 'HART',
    },
    {
      postCode: '873',
      suburb: 'HEAVITREE GAP CPA',
    },
    {
      postCode: '852',
      suburb: 'HELEN SPRINGS STATION',
    },
    {
      postCode: '836',
      suburb: 'HERBERT',
    },
    {
      postCode: '872',
      suburb: 'HERMANNSBURG',
    },
    {
      postCode: '822',
      suburb: 'HIDDEN VALLEY',
    },
    {
      postCode: '812',
      suburb: 'HOLMES',
    },
    {
      postCode: '829',
      suburb: 'HOLTZE',
    },
    {
      postCode: '822',
      suburb: 'HOTHAM',
    },
    {
      postCode: '835',
      suburb: 'HOWARD SPRINGS',
    },
    {
      postCode: '872',
      suburb: 'HUGH',
    },
    {
      postCode: '822',
      suburb: 'HUGHES',
    },
    {
      postCode: '836',
      suburb: 'HUMPTY DOO',
    },
    {
      postCode: '873',
      suburb: 'ILPARPA',
    },
    {
      postCode: '872',
      suburb: 'IMANPA',
    },
    {
      postCode: '872',
      suburb: 'ININTI STORE',
    },
    {
      postCode: '874',
      suburb: 'IRLPME',
    },
    {
      postCode: '886',
      suburb: 'JABIRU',
    },
    {
      postCode: '852',
      suburb: 'JILKMINGGAN',
    },
    {
      postCode: '810',
      suburb: 'JINGILI',
    },
    {
      postCode: '832',
      suburb: 'JOHNSTON',
    },
    {
      postCode: '822',
      suburb: 'KAKADU',
    },
    {
      postCode: '852',
      suburb: 'KALKARINDJI',
    },
    {
      postCode: '872',
      suburb: 'KALTUKATJARA',
    },
    {
      postCode: '812',
      suburb: 'KARAMA',
    },
    {
      postCode: '813',
      suburb: 'KARAMA',
    },
    {
      postCode: '850',
      suburb: 'KATHERINE',
    },
    {
      postCode: '851',
      suburb: 'KATHERINE',
    },
    {
      postCode: '852',
      suburb: 'KATHERINE',
    },
    {
      postCode: '850',
      suburb: 'KATHERINE EAST',
    },
    {
      postCode: '850',
      suburb: 'KATHERINE SOUTH',
    },
    {
      postCode: '873',
      suburb: 'KILGARIFF',
    },
    {
      postCode: '872',
      suburb: 'KINTORE',
    },
    {
      postCode: '828',
      suburb: 'KNUCKEY LAGOON',
    },
    {
      postCode: '822',
      suburb: 'KOOLPINYAH',
    },
    {
      postCode: '872',
      suburb: 'KULGERA',
    },
    {
      postCode: '872',
      suburb: 'KUNPARRKA',
    },
    {
      postCode: '852',
      suburb: 'LAJAMANU',
    },
    {
      postCode: '822',
      suburb: 'LAKE BENNETT',
    },
    {
      postCode: '872',
      suburb: 'LAKE MACKAY',
    },
    {
      postCode: '822',
      suburb: 'LAMBELLS LAGOON',
    },
    {
      postCode: '850',
      suburb: 'LANSDOWNE',
    },
    {
      postCode: '872',
      suburb: 'LARAMBA',
    },
    {
      postCode: '875',
      suburb: 'LARAPINTA',
    },
    {
      postCode: '820',
      suburb: 'LARRAKEYAH',
    },
    {
      postCode: '852',
      suburb: 'LARRIMAH',
    },
    {
      postCode: '812',
      suburb: 'LEANYER',
    },
    {
      postCode: '810',
      suburb: 'LEE POINT',
    },
    {
      postCode: '852',
      suburb: 'LIMMEN',
    },
    {
      postCode: '822',
      suburb: 'LITCHFIELD PARK',
    },
    {
      postCode: '822',
      suburb: 'LIVINGSTONE',
    },
    {
      postCode: '822',
      suburb: 'LLOYD CREEK',
    },
    {
      postCode: '820',
      suburb: 'LUDMILLA',
    },
    {
      postCode: '810',
      suburb: 'LYONS',
    },
    {
      postCode: '872',
      suburb: 'MACDONNELL RANGE',
    },
    {
      postCode: '812',
      suburb: 'MALAK',
    },
    {
      postCode: '852',
      suburb: 'MANBULLOO',
    },
    {
      postCode: '822',
      suburb: 'MANDORAH',
    },
    {
      postCode: '822',
      suburb: 'MANINGRIDA',
    },
    {
      postCode: '837',
      suburb: 'MANTON',
    },
    {
      postCode: '822',
      suburb: 'MAPURU',
    },
    {
      postCode: '852',
      suburb: 'MARANBOY',
    },
    {
      postCode: '822',
      suburb: 'MARANUNGA',
    },
    {
      postCode: '822',
      suburb: 'MARGARET RIVER',
    },
    {
      postCode: '830',
      suburb: 'MARLOW LAGOON',
    },
    {
      postCode: '822',
      suburb: 'MARRAKAI',
    },
    {
      postCode: '812',
      suburb: 'MARRARA',
    },
    {
      postCode: '852',
      suburb: 'MATARANKA',
    },
    {
      postCode: '852',
      suburb: 'MCARTHUR',
    },
    {
      postCode: '822',
      suburb: 'MCMINNS LAGOON',
    },
    {
      postCode: '872',
      suburb: 'MEREENIE',
    },
    {
      postCode: '822',
      suburb: 'MICKET CREEK',
    },
    {
      postCode: '822',
      suburb: 'MIDDLE POINT',
    },
    {
      postCode: '822',
      suburb: 'MILIKAPITI',
    },
    {
      postCode: '822',
      suburb: 'MILINGIMBI',
    },
    {
      postCode: '810',
      suburb: 'MILLNER',
    },
    {
      postCode: '822',
      suburb: 'MILYAKBURRA',
    },
    {
      postCode: '852',
      suburb: 'MINIYERI',
    },
    {
      postCode: '822',
      suburb: 'MINJILANG',
    },
    {
      postCode: '832',
      suburb: 'MITCHELL',
    },
    {
      postCode: '810',
      suburb: 'MOIL',
    },
    {
      postCode: '830',
      suburb: 'MOULDEN',
    },
    {
      postCode: '822',
      suburb: 'MOUNT BUNDEY',
    },
    {
      postCode: '874',
      suburb: 'MOUNT JOHNS',
    },
    {
      postCode: '872',
      suburb: 'MOUNT LIEBIG',
    },
    {
      postCode: '872',
      suburb: 'MOUNT ZEIL',
    },
    {
      postCode: '810',
      suburb: 'MUIRHEAD',
    },
    {
      postCode: '822',
      suburb: 'MURRUMUJUK',
    },
    {
      postCode: '872',
      suburb: 'MUTITJULU',
    },
    {
      postCode: '810',
      suburb: 'NAKARA',
    },
    {
      postCode: '872',
      suburb: 'NAMATJIRA',
    },
    {
      postCode: '872',
      suburb: 'NAPPERBY STATION',
    },
    {
      postCode: '822',
      suburb: 'NAUIYU',
    },
    {
      postCode: '822',
      suburb: 'NEMARLUK',
    },
    {
      postCode: '862',
      suburb: 'NEWCASTLE WATERS',
    },
    {
      postCode: '822',
      suburb: 'NGANMARRIYANGA',
    },
    {
      postCode: '852',
      suburb: 'NGUKURR',
    },
    {
      postCode: '880',
      suburb: 'NHULUNBUY',
    },
    {
      postCode: '881',
      suburb: 'NHULUNBUY',
    },
    {
      postCode: '862',
      suburb: 'NICHOLSON',
    },
    {
      postCode: '810',
      suburb: 'NIGHTCLIFF',
    },
    {
      postCode: '814',
      suburb: 'NIGHTCLIFF',
    },
    {
      postCode: '852',
      suburb: 'NITMILUK',
    },
    {
      postCode: '837',
      suburb: 'NOONAMAH',
    },
    {
      postCode: '822',
      suburb: 'NUMBULWAR',
    },
    {
      postCode: '822',
      suburb: 'NUMBURINDI',
    },
    {
      postCode: '852',
      suburb: 'NUTWOOD DOWNS',
    },
    {
      postCode: '872',
      suburb: 'NYIRRIPI',
    },
    {
      postCode: '822',
      suburb: 'OENPELLI',
    },
    {
      postCode: '830',
      suburb: 'PALMERSTON',
    },
    {
      postCode: '831',
      suburb: 'PALMERSTON',
    },
    {
      postCode: '862',
      suburb: 'PAMAYU',
    },
    {
      postCode: '872',
      suburb: 'PAPUNYA',
    },
    {
      postCode: '804',
      suburb: 'PARAP',
    },
    {
      postCode: '820',
      suburb: 'PARAP',
    },
    {
      postCode: '852',
      suburb: 'PELLEW ISLANDS',
    },
    {
      postCode: '822',
      suburb: 'PEPPIMENARTI',
    },
    {
      postCode: '872',
      suburb: 'PETERMANN',
    },
    {
      postCode: '852',
      suburb: 'PIGEON HOLE',
    },
    {
      postCode: '847',
      suburb: 'PINE CREEK',
    },
    {
      postCode: '829',
      suburb: 'PINELANDS',
    },
    {
      postCode: '822',
      suburb: 'PIRLANGIMPI',
    },
    {
      postCode: '822',
      suburb: 'POINT STUART',
    },
    {
      postCode: '822',
      suburb: 'PULARUMPI',
    },
    {
      postCode: '822',
      suburb: 'RAKULA',
    },
    {
      postCode: '822',
      suburb: 'RAMINGINING',
    },
    {
      postCode: '4825',
      suburb: 'RANKEN',
    },
    {
      postCode: '810',
      suburb: 'RAPID CREEK',
    },
    {
      postCode: '822',
      suburb: 'ROBIN FALLS',
    },
    {
      postCode: '852',
      suburb: 'ROBINSON RIVER',
    },
    {
      postCode: '832',
      suburb: 'ROSEBERY',
    },
    {
      postCode: '873',
      suburb: 'ROSS',
    },
    {
      postCode: '822',
      suburb: 'RUM JUNGLE',
    },
    {
      postCode: '870',
      suburb: 'SADADEEN',
    },
    {
      postCode: '872',
      suburb: 'SANDOVER',
    },
    {
      postCode: '822',
      suburb: 'SANDPALMS ROADHOUSE',
    },
    {
      postCode: '872',
      suburb: 'SANTA TERESA',
    },
    {
      postCode: '830',
      suburb: 'SHOAL BAY',
    },
    {
      postCode: '872',
      suburb: 'SIMPSON',
    },
    {
      postCode: '822',
      suburb: 'SOUTHPORT',
    },
    {
      postCode: '822',
      suburb: 'STAPLETON',
    },
    {
      postCode: '870',
      suburb: 'STUART',
    },
    {
      postCode: '820',
      suburb: 'STUART PARK',
    },
    {
      postCode: '852',
      suburb: 'STURT PLATEAU',
    },
    {
      postCode: '862',
      suburb: 'TABLELANDS',
    },
    {
      postCode: '872',
      suburb: 'TANAMI',
    },
    {
      postCode: '852',
      suburb: 'TANAMI EAST',
    },
    {
      postCode: '872',
      suburb: 'TARA',
    },
    {
      postCode: '872',
      suburb: 'TELEGRAPH STATION',
    },
    {
      postCode: '860',
      suburb: 'TENNANT CREEK',
    },
    {
      postCode: '861',
      suburb: 'TENNANT CREEK',
    },
    {
      postCode: '862',
      suburb: 'TENNANT CREEK',
    },
    {
      postCode: '822',
      suburb: 'THAMARRURR',
    },
    {
      postCode: '870',
      suburb: 'THE GAP',
    },
    {
      postCode: '820',
      suburb: 'THE GARDENS',
    },
    {
      postCode: '820',
      suburb: 'THE NARROWS',
    },
    {
      postCode: '872',
      suburb: 'TI TREE',
    },
    {
      postCode: '852',
      suburb: 'TIMBER CREEK',
    },
    {
      postCode: '853',
      suburb: 'TINDAL',
    },
    {
      postCode: '822',
      suburb: 'TIPPERARY',
    },
    {
      postCode: '872',
      suburb: 'TITJIKALA',
    },
    {
      postCode: '822',
      suburb: 'TIVENDALE',
    },
    {
      postCode: '810',
      suburb: 'TIWI',
    },
    {
      postCode: '822',
      suburb: 'TIWI ISLANDS',
    },
    {
      postCode: '852',
      suburb: 'TOP SPRINGS',
    },
    {
      postCode: '822',
      suburb: 'TORTILLA FLATS',
    },
    {
      postCode: '822',
      suburb: 'TUMBLING WATERS',
    },
    {
      postCode: '822',
      suburb: 'UMBAKUMBA',
    },
    {
      postCode: '874',
      suburb: 'UNDOOLYA',
    },
    {
      postCode: '852',
      suburb: 'URALLA',
    },
    {
      postCode: '852',
      suburb: 'VENN',
    },
    {
      postCode: '822',
      suburb: 'VERNON ISLANDS',
    },
    {
      postCode: '852',
      suburb: 'VICTORIA RIVER',
    },
    {
      postCode: '834',
      suburb: 'VIRGINIA',
    },
    {
      postCode: '822',
      suburb: 'WADEYE',
    },
    {
      postCode: '803',
      suburb: 'WAGAIT BEACH',
    },
    {
      postCode: '822',
      suburb: 'WAGAIT BEACH',
    },
    {
      postCode: '810',
      suburb: 'WAGAMAN',
    },
    {
      postCode: '822',
      suburb: 'WAK WAK',
    },
    {
      postCode: '872',
      suburb: 'WALLACE ROCKHOLE',
    },
    {
      postCode: '810',
      suburb: 'WANGURI',
    },
    {
      postCode: '822',
      suburb: 'WARRUWI',
    },
    {
      postCode: '852',
      suburb: 'WARUMUNGU',
    },
    {
      postCode: '822',
      suburb: 'WEDDELL',
    },
    {
      postCode: '822',
      suburb: 'WEST ARNHEM',
    },
    {
      postCode: '870',
      suburb: 'WHITE GUMS',
    },
    {
      postCode: '822',
      suburb: 'WICKHAM',
    },
    {
      postCode: '872',
      suburb: 'WILLOWRA',
    },
    {
      postCode: '872',
      suburb: 'WILORA',
    },
    {
      postCode: '852',
      suburb: 'WILTON',
    },
    {
      postCode: '820',
      suburb: 'WINNELLIE',
    },
    {
      postCode: '821',
      suburb: 'WINNELLIE',
    },
    {
      postCode: '822',
      suburb: 'WINNELLIE',
    },
    {
      postCode: '906',
      suburb: 'WINNELLIE',
    },
    {
      postCode: '907',
      suburb: 'WINNELLIE',
    },
    {
      postCode: '822',
      suburb: 'WISHART',
    },
    {
      postCode: '830',
      suburb: 'WOODROFFE',
    },
    {
      postCode: '820',
      suburb: 'WOOLNER',
    },
    {
      postCode: '812',
      suburb: 'WULAGI',
    },
    {
      postCode: '822',
      suburb: 'WURRUMIYANGA',
    },
    {
      postCode: '872',
      suburb: 'WUTUNUGURRA',
    },
    {
      postCode: '852',
      suburb: 'YARRALIN',
    },
    {
      postCode: '830',
      suburb: 'YARRAWONGA',
    },
    {
      postCode: '880',
      suburb: 'YIRRKALA',
    },
    {
      postCode: '872',
      suburb: 'YUELAMU',
    },
    {
      postCode: '872',
      suburb: 'YUENDUMU',
    },
    {
      postCode: '872',
      suburb: 'YULARA',
    },
    {
      postCode: '832',
      suburb: 'ZUCCOLI',
    },
  ];
  constructor() {}
}
