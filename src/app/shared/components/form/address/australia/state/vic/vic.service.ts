import { Injectable } from '@angular/core';
import { IPostCodeItem } from 'src/app/interface/global/global.interface';

@Injectable({
  providedIn: 'root'
})
export class VicService {
  public data: IPostCodeItem[] =
  [
    {
      "postCode": "3737",
      "suburb": "ABBEYARD"
    },
    {
      "postCode": "3067",
      "suburb": "ABBOTSFORD"
    },
    {
      "postCode": "8006",
      "suburb": "ABECKETT STREET"
    },
    {
      "postCode": "3040",
      "suburb": "ABERFELDIE"
    },
    {
      "postCode": "3825",
      "suburb": "ABERFELDY"
    },
    {
      "postCode": "3714",
      "suburb": "ACHERON"
    },
    {
      "postCode": "3833",
      "suburb": "ADA"
    },
    {
      "postCode": "3984",
      "suburb": "ADAMS ESTATE"
    },
    {
      "postCode": "3352",
      "suburb": "ADDINGTON"
    },
    {
      "postCode": "3465",
      "suburb": "ADELAIDE LEAD"
    },
    {
      "postCode": "3962",
      "suburb": "AGNES"
    },
    {
      "postCode": "3336",
      "suburb": "AINTREE"
    },
    {
      "postCode": "3237",
      "suburb": "AIRE VALLEY"
    },
    {
      "postCode": "3231",
      "suburb": "AIREYS INLET"
    },
    {
      "postCode": "3851",
      "suburb": "AIRLY"
    },
    {
      "postCode": "3042",
      "suburb": "AIRPORT WEST"
    },
    {
      "postCode": "3424",
      "suburb": "ALBACUTYA"
    },
    {
      "postCode": "3021",
      "suburb": "ALBANVALE"
    },
    {
      "postCode": "3206",
      "suburb": "ALBERT PARK"
    },
    {
      "postCode": "3971",
      "suburb": "ALBERTON"
    },
    {
      "postCode": "3971",
      "suburb": "ALBERTON WEST"
    },
    {
      "postCode": "3020",
      "suburb": "ALBION"
    },
    {
      "postCode": "3714",
      "suburb": "ALEXANDRA"
    },
    {
      "postCode": "3350",
      "suburb": "ALFREDTON"
    },
    {
      "postCode": "3823",
      "suburb": "ALLAMBEE"
    },
    {
      "postCode": "3871",
      "suburb": "ALLAMBEE RESERVE"
    },
    {
      "postCode": "3871",
      "suburb": "ALLAMBEE SOUTH"
    },
    {
      "postCode": "3691",
      "suburb": "ALLANS FLAT"
    },
    {
      "postCode": "3277",
      "suburb": "ALLANSFORD"
    },
    {
      "postCode": "3364",
      "suburb": "ALLENDALE"
    },
    {
      "postCode": "3305",
      "suburb": "ALLESTREE"
    },
    {
      "postCode": "3465",
      "suburb": "ALMA"
    },
    {
      "postCode": "3727",
      "suburb": "ALMONDS"
    },
    {
      "postCode": "3979",
      "suburb": "ALMURTA"
    },
    {
      "postCode": "3078",
      "suburb": "ALPHINGTON"
    },
    {
      "postCode": "3018",
      "suburb": "ALTONA"
    },
    {
      "postCode": "3025",
      "suburb": "ALTONA EAST"
    },
    {
      "postCode": "3025",
      "suburb": "ALTONA GATE"
    },
    {
      "postCode": "3028",
      "suburb": "ALTONA MEADOWS"
    },
    {
      "postCode": "3025",
      "suburb": "ALTONA NORTH"
    },
    {
      "postCode": "3249",
      "suburb": "ALVIE"
    },
    {
      "postCode": "3371",
      "suburb": "AMHERST"
    },
    {
      "postCode": "3825",
      "suburb": "AMOR"
    },
    {
      "postCode": "3468",
      "suburb": "AMPHITHEATRE"
    },
    {
      "postCode": "3213",
      "suburb": "ANAKIE"
    },
    {
      "postCode": "3715",
      "suburb": "ANCONA"
    },
    {
      "postCode": "3995",
      "suburb": "ANDERSON"
    },
    {
      "postCode": "3898",
      "suburb": "ANGLERS REST"
    },
    {
      "postCode": "3230",
      "suburb": "ANGLESEA"
    },
    {
      "postCode": "3549",
      "suburb": "ANNUELLO"
    },
    {
      "postCode": "3414",
      "suburb": "ANTWERP"
    },
    {
      "postCode": "3233",
      "suburb": "APOLLO BAY"
    },
    {
      "postCode": "3579",
      "suburb": "APPIN"
    },
    {
      "postCode": "3579",
      "suburb": "APPIN SOUTH"
    },
    {
      "postCode": "3319",
      "suburb": "APSLEY"
    },
    {
      "postCode": "3409",
      "suburb": "ARAPILES"
    },
    {
      "postCode": "3377",
      "suburb": "ARARAT"
    },
    {
      "postCode": "3951",
      "suburb": "ARAWATA"
    },
    {
      "postCode": "3858",
      "suburb": "ARBUCKLE"
    },
    {
      "postCode": "3631",
      "suburb": "ARCADIA"
    },
    {
      "postCode": "3631",
      "suburb": "ARCADIA SOUTH"
    },
    {
      "postCode": "3475",
      "suburb": "ARCHDALE"
    },
    {
      "postCode": "3475",
      "suburb": "ARCHDALE JUNCTION"
    },
    {
      "postCode": "3723",
      "suburb": "ARCHERTON"
    },
    {
      "postCode": "3995",
      "suburb": "ARCHIES CREEK"
    },
    {
      "postCode": "3022",
      "suburb": "ARDEER"
    },
    {
      "postCode": "3629",
      "suburb": "ARDMONA"
    },
    {
      "postCode": "3480",
      "suburb": "AREEGRA"
    },
    {
      "postCode": "3523",
      "suburb": "ARGYLE"
    },
    {
      "postCode": "3143",
      "suburb": "ARMADALE"
    },
    {
      "postCode": "3143",
      "suburb": "ARMADALE NORTH"
    },
    {
      "postCode": "3377",
      "suburb": "ARMSTRONG"
    },
    {
      "postCode": "3217",
      "suburb": "ARMSTRONG CREEK"
    },
    {
      "postCode": "3551",
      "suburb": "ARNOLD"
    },
    {
      "postCode": "3551",
      "suburb": "ARNOLD WEST"
    },
    {
      "postCode": "3099",
      "suburb": "ARTHURS CREEK"
    },
    {
      "postCode": "3936",
      "suburb": "ARTHURS SEAT"
    },
    {
      "postCode": "3364",
      "suburb": "ASCOT"
    },
    {
      "postCode": "3551",
      "suburb": "ASCOT"
    },
    {
      "postCode": "3032",
      "suburb": "ASCOT VALE"
    },
    {
      "postCode": "3442",
      "suburb": "ASHBOURNE"
    },
    {
      "postCode": "3147",
      "suburb": "ASHBURTON"
    },
    {
      "postCode": "3147",
      "suburb": "ASHWOOD"
    },
    {
      "postCode": "3195",
      "suburb": "ASPENDALE"
    },
    {
      "postCode": "3195",
      "suburb": "ASPENDALE GARDENS"
    },
    {
      "postCode": "3818",
      "suburb": "ATHLONE"
    },
    {
      "postCode": "3049",
      "suburb": "ATTWOOD"
    },
    {
      "postCode": "3393",
      "suburb": "AUBREY"
    },
    {
      "postCode": "3123",
      "suburb": "AUBURN"
    },
    {
      "postCode": "3122",
      "suburb": "AUBURN SOUTH"
    },
    {
      "postCode": "3570",
      "suburb": "AUCHMORE"
    },
    {
      "postCode": "3212",
      "suburb": "AVALON"
    },
    {
      "postCode": "3664",
      "suburb": "AVENEL"
    },
    {
      "postCode": "3467",
      "suburb": "AVOCA"
    },
    {
      "postCode": "3477",
      "suburb": "AVON PLAINS"
    },
    {
      "postCode": "3034",
      "suburb": "AVONDALE HEIGHTS"
    },
    {
      "postCode": "3559",
      "suburb": "AVONMORE"
    },
    {
      "postCode": "3782",
      "suburb": "AVONSLEIGH"
    },
    {
      "postCode": "3551",
      "suburb": "AXE CREEK"
    },
    {
      "postCode": "3551",
      "suburb": "AXEDALE"
    },
    {
      "postCode": "3268",
      "suburb": "AYRFORD"
    },
    {
      "postCode": "3340",
      "suburb": "BACCHUS MARSH"
    },
    {
      "postCode": "3670",
      "suburb": "BADDAGINNIE"
    },
    {
      "postCode": "3777",
      "suburb": "BADGER CREEK"
    },
    {
      "postCode": "3579",
      "suburb": "BAEL BAEL"
    },
    {
      "postCode": "3551",
      "suburb": "BAGSHOT"
    },
    {
      "postCode": "3551",
      "suburb": "BAGSHOT NORTH"
    },
    {
      "postCode": "3312",
      "suburb": "BAHGALLAH"
    },
    {
      "postCode": "3608",
      "suburb": "BAILIESTON"
    },
    {
      "postCode": "3875",
      "suburb": "BAIRNSDALE"
    },
    {
      "postCode": "3350",
      "suburb": "BAKERY HILL"
    },
    {
      "postCode": "3354",
      "suburb": "BAKERY HILL"
    },
    {
      "postCode": "3183",
      "suburb": "BALACLAVA"
    },
    {
      "postCode": "3364",
      "suburb": "BALD HILLS"
    },
    {
      "postCode": "3249",
      "suburb": "BALINTORE"
    },
    {
      "postCode": "3342",
      "suburb": "BALLAN"
    },
    {
      "postCode": "3279",
      "suburb": "BALLANGEICH"
    },
    {
      "postCode": "3483",
      "suburb": "BALLAPUR"
    },
    {
      "postCode": "3350",
      "suburb": "BALLARAT"
    },
    {
      "postCode": "3353",
      "suburb": "BALLARAT"
    },
    {
      "postCode": "3350",
      "suburb": "BALLARAT CENTRAL"
    },
    {
      "postCode": "3350",
      "suburb": "BALLARAT EAST"
    },
    {
      "postCode": "3354",
      "suburb": "BALLARAT MC"
    },
    {
      "postCode": "3350",
      "suburb": "BALLARAT NORTH"
    },
    {
      "postCode": "3350",
      "suburb": "BALLARAT WEST"
    },
    {
      "postCode": "3561",
      "suburb": "BALLENDELLA"
    },
    {
      "postCode": "3340",
      "suburb": "BALLIANG"
    },
    {
      "postCode": "3340",
      "suburb": "BALLIANG EAST"
    },
    {
      "postCode": "3375",
      "suburb": "BALLYROGAN"
    },
    {
      "postCode": "3666",
      "suburb": "BALMATTUM"
    },
    {
      "postCode": "3407",
      "suburb": "BALMORAL"
    },
    {
      "postCode": "3926",
      "suburb": "BALNARRING"
    },
    {
      "postCode": "3926",
      "suburb": "BALNARRING BEACH"
    },
    {
      "postCode": "3971",
      "suburb": "BALOOK"
    },
    {
      "postCode": "3103",
      "suburb": "BALWYN"
    },
    {
      "postCode": "3103",
      "suburb": "BALWYN EAST"
    },
    {
      "postCode": "3104",
      "suburb": "BALWYN NORTH"
    },
    {
      "postCode": "3561",
      "suburb": "BAMAWM"
    },
    {
      "postCode": "3564",
      "suburb": "BAMAWM EXTENSION"
    },
    {
      "postCode": "3241",
      "suburb": "BAMBRA"
    },
    {
      "postCode": "3333",
      "suburb": "BAMGANIE"
    },
    {
      "postCode": "3691",
      "suburb": "BANDIANA"
    },
    {
      "postCode": "3694",
      "suburb": "BANDIANA MILPO"
    },
    {
      "postCode": "3393",
      "suburb": "BANGERANG"
    },
    {
      "postCode": "3175",
      "suburb": "BANGHOLME"
    },
    {
      "postCode": "3875",
      "suburb": "BANKSIA PENINSULA"
    },
    {
      "postCode": "3549",
      "suburb": "BANNERTON"
    },
    {
      "postCode": "3331",
      "suburb": "BANNOCKBURN"
    },
    {
      "postCode": "3485",
      "suburb": "BANYAN"
    },
    {
      "postCode": "3388",
      "suburb": "BANYENA"
    },
    {
      "postCode": "3084",
      "suburb": "BANYULE"
    },
    {
      "postCode": "3691",
      "suburb": "BARANDUDA"
    },
    {
      "postCode": "3220",
      "suburb": "BAREENA"
    },
    {
      "postCode": "3444",
      "suburb": "BARFOLD"
    },
    {
      "postCode": "3463",
      "suburb": "BARINGHUP"
    },
    {
      "postCode": "3463",
      "suburb": "BARINGHUP WEST"
    },
    {
      "postCode": "3723",
      "suburb": "BARJARG"
    },
    {
      "postCode": "3451",
      "suburb": "BARKERS CREEK"
    },
    {
      "postCode": "3384",
      "suburb": "BARKLY"
    },
    {
      "postCode": "3364",
      "suburb": "BARKSTEAD"
    },
    {
      "postCode": "3639",
      "suburb": "BARMAH"
    },
    {
      "postCode": "3557",
      "suburb": "BARNADOWN"
    },
    {
      "postCode": "3688",
      "suburb": "BARNAWARTHA"
    },
    {
      "postCode": "3691",
      "suburb": "BARNAWARTHA NORTH"
    },
    {
      "postCode": "3871",
      "suburb": "BAROMI"
    },
    {
      "postCode": "3249",
      "suburb": "BARONGAROOK"
    },
    {
      "postCode": "3249",
      "suburb": "BARONGAROOK WEST"
    },
    {
      "postCode": "3221",
      "suburb": "BARRABOOL"
    },
    {
      "postCode": "3525",
      "suburb": "BARRAKEE"
    },
    {
      "postCode": "3249",
      "suburb": "BARRAMUNGA"
    },
    {
      "postCode": "3537",
      "suburb": "BARRAPORT"
    },
    {
      "postCode": "3537",
      "suburb": "BARRAPORT WEST"
    },
    {
      "postCode": "3458",
      "suburb": "BARRYS REEF"
    },
    {
      "postCode": "3329",
      "suburb": "BARUNAH PARK"
    },
    {
      "postCode": "3329",
      "suburb": "BARUNAH PLAINS"
    },
    {
      "postCode": "3737",
      "suburb": "BARWIDGEE"
    },
    {
      "postCode": "3722",
      "suburb": "BARWITE"
    },
    {
      "postCode": "3243",
      "suburb": "BARWON DOWNS"
    },
    {
      "postCode": "3227",
      "suburb": "BARWON HEADS"
    },
    {
      "postCode": "3460",
      "suburb": "BASALT"
    },
    {
      "postCode": "3991",
      "suburb": "BASS"
    },
    {
      "postCode": "3213",
      "suburb": "BATESFORD"
    },
    {
      "postCode": "3730",
      "suburb": "BATHUMI"
    },
    {
      "postCode": "3058",
      "suburb": "BATMAN"
    },
    {
      "postCode": "3833",
      "suburb": "BAW BAW"
    },
    {
      "postCode": "3833",
      "suburb": "BAW BAW VILLAGE"
    },
    {
      "postCode": "3911",
      "suburb": "BAXTER"
    },
    {
      "postCode": "3375",
      "suburb": "BAYINDEEN"
    },
    {
      "postCode": "3981",
      "suburb": "BAYLES"
    },
    {
      "postCode": "3444",
      "suburb": "BAYNTON"
    },
    {
      "postCode": "3444",
      "suburb": "BAYNTON EAST"
    },
    {
      "postCode": "3153",
      "suburb": "BAYSWATER"
    },
    {
      "postCode": "3153",
      "suburb": "BAYSWATER NORTH"
    },
    {
      "postCode": "3807",
      "suburb": "BEACONSFIELD"
    },
    {
      "postCode": "3808",
      "suburb": "BEACONSFIELD UPPER"
    },
    {
      "postCode": "3475",
      "suburb": "BEALIBA"
    },
    {
      "postCode": "3641",
      "suburb": "BEARII"
    },
    {
      "postCode": "3517",
      "suburb": "BEARS LAGOON"
    },
    {
      "postCode": "3579",
      "suburb": "BEAUCHAMP"
    },
    {
      "postCode": "3373",
      "suburb": "BEAUFORT"
    },
    {
      "postCode": "3193",
      "suburb": "BEAUMARIS"
    },
    {
      "postCode": "3477",
      "suburb": "BEAZLEYS BRIDGE"
    },
    {
      "postCode": "3135",
      "suburb": "BEDFORD ROAD"
    },
    {
      "postCode": "3251",
      "suburb": "BEEAC"
    },
    {
      "postCode": "3237",
      "suburb": "BEECH FOREST"
    },
    {
      "postCode": "3747",
      "suburb": "BEECHWORTH"
    },
    {
      "postCode": "3139",
      "suburb": "BEENAK"
    },
    {
      "postCode": "3160",
      "suburb": "BELGRAVE"
    },
    {
      "postCode": "3160",
      "suburb": "BELGRAVE HEIGHTS"
    },
    {
      "postCode": "3160",
      "suburb": "BELGRAVE SOUTH"
    },
    {
      "postCode": "3215",
      "suburb": "BELL PARK"
    },
    {
      "postCode": "3215",
      "suburb": "BELL POST HILL"
    },
    {
      "postCode": "3223",
      "suburb": "BELLARINE"
    },
    {
      "postCode": "3889",
      "suburb": "BELLBIRD CREEK"
    },
    {
      "postCode": "3228",
      "suburb": "BELLBRAE"
    },
    {
      "postCode": "3691",
      "suburb": "BELLBRIDGE"
    },
    {
      "postCode": "3381",
      "suburb": "BELLELLEN"
    },
    {
      "postCode": "3081",
      "suburb": "BELLFIELD"
    },
    {
      "postCode": "3381",
      "suburb": "BELLFIELD"
    },
    {
      "postCode": "3228",
      "suburb": "BELLS BEACH"
    },
    {
      "postCode": "3216",
      "suburb": "BELMONT"
    },
    {
      "postCode": "3889",
      "suburb": "BEMM RIVER"
    },
    {
      "postCode": "3946",
      "suburb": "BENA"
    },
    {
      "postCode": "3671",
      "suburb": "BENALLA"
    },
    {
      "postCode": "3672",
      "suburb": "BENALLA"
    },
    {
      "postCode": "3900",
      "suburb": "BENAMBRA"
    },
    {
      "postCode": "3319",
      "suburb": "BENAYEO"
    },
    {
      "postCode": "3097",
      "suburb": "BEND OF ISLANDS"
    },
    {
      "postCode": "3550",
      "suburb": "BENDIGO"
    },
    {
      "postCode": "3552",
      "suburb": "BENDIGO"
    },
    {
      "postCode": "3554",
      "suburb": "BENDIGO DC"
    },
    {
      "postCode": "3551",
      "suburb": "BENDIGO FORWARD"
    },
    {
      "postCode": "3550",
      "suburb": "BENDIGO SOUTH"
    },
    {
      "postCode": "3888",
      "suburb": "BENDOC"
    },
    {
      "postCode": "3875",
      "suburb": "BENGWORDEN"
    },
    {
      "postCode": "3579",
      "suburb": "BENJEROOP"
    },
    {
      "postCode": "3435",
      "suburb": "BENLOCH"
    },
    {
      "postCode": "3125",
      "suburb": "BENNETTSWOOD"
    },
    {
      "postCode": "3960",
      "suburb": "BENNISON"
    },
    {
      "postCode": "3204",
      "suburb": "BENTLEIGH"
    },
    {
      "postCode": "3165",
      "suburb": "BENTLEIGH EAST"
    },
    {
      "postCode": "3235",
      "suburb": "BENWERRIN"
    },
    {
      "postCode": "3342",
      "suburb": "BEREMBOKE"
    },
    {
      "postCode": "3518",
      "suburb": "BERRIMAL"
    },
    {
      "postCode": "3351",
      "suburb": "BERRINGA"
    },
    {
      "postCode": "3691",
      "suburb": "BERRINGAMA"
    },
    {
      "postCode": "3531",
      "suburb": "BERRIWILLOCK"
    },
    {
      "postCode": "3323",
      "suburb": "BERRYBANK"
    },
    {
      "postCode": "3953",
      "suburb": "BERRYS CREEK"
    },
    {
      "postCode": "3806",
      "suburb": "BERWICK"
    },
    {
      "postCode": "3304",
      "suburb": "BESSIEBELLE"
    },
    {
      "postCode": "3472",
      "suburb": "BET BET"
    },
    {
      "postCode": "3888",
      "suburb": "BETE BOLONG"
    },
    {
      "postCode": "3888",
      "suburb": "BETE BOLONG NORTH"
    },
    {
      "postCode": "3691",
      "suburb": "BETHANGA"
    },
    {
      "postCode": "3472",
      "suburb": "BETLEY"
    },
    {
      "postCode": "3395",
      "suburb": "BEULAH"
    },
    {
      "postCode": "3590",
      "suburb": "BEVERFORD"
    },
    {
      "postCode": "3753",
      "suburb": "BEVERIDGE"
    },
    {
      "postCode": "3490",
      "suburb": "BIG DESERT"
    },
    {
      "postCode": "3231",
      "suburb": "BIG HILL"
    },
    {
      "postCode": "3555",
      "suburb": "BIG HILL"
    },
    {
      "postCode": "3799",
      "suburb": "BIG PATS CREEK"
    },
    {
      "postCode": "3707",
      "suburb": "BIGGARA"
    },
    {
      "postCode": "3858",
      "suburb": "BILLABONG"
    },
    {
      "postCode": "3533",
      "suburb": "BIMBOURIE"
    },
    {
      "postCode": "3896",
      "suburb": "BINDI"
    },
    {
      "postCode": "3966",
      "suburb": "BINGINWARRI"
    },
    {
      "postCode": "3898",
      "suburb": "BINGO MUNJIE"
    },
    {
      "postCode": "3483",
      "suburb": "BIRCHIP"
    },
    {
      "postCode": "3483",
      "suburb": "BIRCHIP WEST"
    },
    {
      "postCode": "3505",
      "suburb": "BIRDWOODTON"
    },
    {
      "postCode": "3242",
      "suburb": "BIRREGURRA"
    },
    {
      "postCode": "3918",
      "suburb": "BITTERN"
    },
    {
      "postCode": "3350",
      "suburb": "BLACK HILL"
    },
    {
      "postCode": "3381",
      "suburb": "BLACK RANGE"
    },
    {
      "postCode": "3193",
      "suburb": "BLACK ROCK"
    },
    {
      "postCode": "3193",
      "suburb": "BLACK ROCK NORTH"
    },
    {
      "postCode": "3130",
      "suburb": "BLACKBURN"
    },
    {
      "postCode": "3130",
      "suburb": "BLACKBURN NORTH"
    },
    {
      "postCode": "3130",
      "suburb": "BLACKBURN SOUTH"
    },
    {
      "postCode": "3401",
      "suburb": "BLACKHEATH"
    },
    {
      "postCode": "3844",
      "suburb": "BLACKWARRY"
    },
    {
      "postCode": "3458",
      "suburb": "BLACKWOOD"
    },
    {
      "postCode": "3992",
      "suburb": "BLACKWOOD FOREST"
    },
    {
      "postCode": "3942",
      "suburb": "BLAIRGOWRIE"
    },
    {
      "postCode": "3342",
      "suburb": "BLAKEVILLE"
    },
    {
      "postCode": "3364",
      "suburb": "BLAMPIED"
    },
    {
      "postCode": "3980",
      "suburb": "BLIND BIGHT"
    },
    {
      "postCode": "3352",
      "suburb": "BLOWHARD"
    },
    {
      "postCode": "3351",
      "suburb": "BO PEEP"
    },
    {
      "postCode": "3678",
      "suburb": "BOBINAWARRAH"
    },
    {
      "postCode": "3301",
      "suburb": "BOCHARA"
    },
    {
      "postCode": "3699",
      "suburb": "BOGONG"
    },
    {
      "postCode": "3669",
      "suburb": "BOHO"
    },
    {
      "postCode": "3669",
      "suburb": "BOHO SOUTH"
    },
    {
      "postCode": "3531",
      "suburb": "BOIGBEAT"
    },
    {
      "postCode": "3490",
      "suburb": "BOINKA"
    },
    {
      "postCode": "3860",
      "suburb": "BOISDALE"
    },
    {
      "postCode": "3387",
      "suburb": "BOLANGUM"
    },
    {
      "postCode": "3432",
      "suburb": "BOLINDA"
    },
    {
      "postCode": "3546",
      "suburb": "BOLTON"
    },
    {
      "postCode": "3305",
      "suburb": "BOLWARRA"
    },
    {
      "postCode": "3352",
      "suburb": "BOLWARRAH"
    },
    {
      "postCode": "3820",
      "suburb": "BONA VISTA"
    },
    {
      "postCode": "3888",
      "suburb": "BONANG"
    },
    {
      "postCode": "3196",
      "suburb": "BONBEACH"
    },
    {
      "postCode": "3691",
      "suburb": "BONEGILLA"
    },
    {
      "postCode": "3939",
      "suburb": "BONEO"
    },
    {
      "postCode": "3561",
      "suburb": "BONN"
    },
    {
      "postCode": "3335",
      "suburb": "BONNIE BROOK"
    },
    {
      "postCode": "3720",
      "suburb": "BONNIE DOON"
    },
    {
      "postCode": "3352",
      "suburb": "BONSHAW"
    },
    {
      "postCode": "3260",
      "suburb": "BOOKAAR"
    },
    {
      "postCode": "3825",
      "suburb": "BOOLA"
    },
    {
      "postCode": "3960",
      "suburb": "BOOLARONG"
    },
    {
      "postCode": "3870",
      "suburb": "BOOLARRA"
    },
    {
      "postCode": "3870",
      "suburb": "BOOLARRA SOUTH"
    },
    {
      "postCode": "3880",
      "suburb": "BOOLE POOLE"
    },
    {
      "postCode": "3392",
      "suburb": "BOOLITE"
    },
    {
      "postCode": "3728",
      "suburb": "BOOMAHNOOMOONAH"
    },
    {
      "postCode": "3235",
      "suburb": "BOONAH"
    },
    {
      "postCode": "3163",
      "suburb": "BOORAN ROAD PO"
    },
    {
      "postCode": "3265",
      "suburb": "BOORCAN"
    },
    {
      "postCode": "3678",
      "suburb": "BOORHAMAN"
    },
    {
      "postCode": "3678",
      "suburb": "BOORHAMAN EAST"
    },
    {
      "postCode": "3685",
      "suburb": "BOORHAMAN NORTH"
    },
    {
      "postCode": "3723",
      "suburb": "BOOROLITE"
    },
    {
      "postCode": "3953",
      "suburb": "BOOROOL"
    },
    {
      "postCode": "3537",
      "suburb": "BOORT"
    },
    {
      "postCode": "3730",
      "suburb": "BOOSEY"
    },
    {
      "postCode": "3682",
      "suburb": "BORALMA"
    },
    {
      "postCode": "3379",
      "suburb": "BORNES HILL"
    },
    {
      "postCode": "3155",
      "suburb": "BORONIA"
    },
    {
      "postCode": "3518",
      "suburb": "BORUNG"
    },
    {
      "postCode": "3260",
      "suburb": "BOSTOCKS CREEK"
    },
    {
      "postCode": "3977",
      "suburb": "BOTANIC RIDGE"
    },
    {
      "postCode": "3599",
      "suburb": "BOUNDARY BEND"
    },
    {
      "postCode": "3465",
      "suburb": "BOWENVALE"
    },
    {
      "postCode": "3675",
      "suburb": "BOWEYA"
    },
    {
      "postCode": "3675",
      "suburb": "BOWEYA NORTH"
    },
    {
      "postCode": "3735",
      "suburb": "BOWMANS FOREST"
    },
    {
      "postCode": "3678",
      "suburb": "BOWSER"
    },
    {
      "postCode": "3128",
      "suburb": "BOX HILL"
    },
    {
      "postCode": "3128",
      "suburb": "BOX HILL CENTRAL"
    },
    {
      "postCode": "3129",
      "suburb": "BOX HILL NORTH"
    },
    {
      "postCode": "3128",
      "suburb": "BOX HILL SOUTH"
    },
    {
      "postCode": "3725",
      "suburb": "BOXWOOD"
    },
    {
      "postCode": "3463",
      "suburb": "BRADFORD"
    },
    {
      "postCode": "3361",
      "suburb": "BRADVALE"
    },
    {
      "postCode": "3195",
      "suburb": "BRAESIDE"
    },
    {
      "postCode": "3631",
      "suburb": "BRANDITT"
    },
    {
      "postCode": "3150",
      "suburb": "BRANDON PARK"
    },
    {
      "postCode": "3821",
      "suburb": "BRANDY CREEK"
    },
    {
      "postCode": "3302",
      "suburb": "BRANXHOLME"
    },
    {
      "postCode": "3821",
      "suburb": "BRAVINGTON"
    },
    {
      "postCode": "3019",
      "suburb": "BRAYBROOK"
    },
    {
      "postCode": "3303",
      "suburb": "BREAKAWAY CREEK"
    },
    {
      "postCode": "3219",
      "suburb": "BREAKWATER"
    },
    {
      "postCode": "3227",
      "suburb": "BREAMLEA"
    },
    {
      "postCode": "3517",
      "suburb": "BRENANAH"
    },
    {
      "postCode": "3131",
      "suburb": "BRENTFORD SQUARE"
    },
    {
      "postCode": "3352",
      "suburb": "BREWSTER"
    },
    {
      "postCode": "3860",
      "suburb": "BRIAGOLONG"
    },
    {
      "postCode": "3088",
      "suburb": "BRIAR HILL"
    },
    {
      "postCode": "3723",
      "suburb": "BRIDGE CREEK"
    },
    {
      "postCode": "3516",
      "suburb": "BRIDGEWATER"
    },
    {
      "postCode": "3516",
      "suburb": "BRIDGEWATER NORTH"
    },
    {
      "postCode": "3516",
      "suburb": "BRIDGEWATER ON LODDON"
    },
    {
      "postCode": "3741",
      "suburb": "BRIGHT"
    },
    {
      "postCode": "3186",
      "suburb": "BRIGHTON"
    },
    {
      "postCode": "3187",
      "suburb": "BRIGHTON EAST"
    },
    {
      "postCode": "3186",
      "suburb": "BRIGHTON NORTH"
    },
    {
      "postCode": "3184",
      "suburb": "BRIGHTON ROAD"
    },
    {
      "postCode": "3391",
      "suburb": "BRIM"
    },
    {
      "postCode": "3312",
      "suburb": "BRIMBOAL"
    },
    {
      "postCode": "3685",
      "suburb": "BRIMIN"
    },
    {
      "postCode": "3401",
      "suburb": "BRIMPAEN"
    },
    {
      "postCode": "3319",
      "suburb": "BRINGALBERT"
    },
    {
      "postCode": "3315",
      "suburb": "BRIT BRIT"
    },
    {
      "postCode": "3658",
      "suburb": "BROADFORD"
    },
    {
      "postCode": "3875",
      "suburb": "BROADLANDS"
    },
    {
      "postCode": "3047",
      "suburb": "BROADMEADOWS"
    },
    {
      "postCode": "3301",
      "suburb": "BROADWATER"
    },
    {
      "postCode": "3888",
      "suburb": "BRODRIBB RIVER"
    },
    {
      "postCode": "3673",
      "suburb": "BROKEN CREEK"
    },
    {
      "postCode": "3472",
      "suburb": "BROMLEY"
    },
    {
      "postCode": "3338",
      "suburb": "BROOKFIELD"
    },
    {
      "postCode": "3012",
      "suburb": "BROOKLYN"
    },
    {
      "postCode": "3896",
      "suburb": "BROOKVILLE"
    },
    {
      "postCode": "3364",
      "suburb": "BROOMFIELD"
    },
    {
      "postCode": "3418",
      "suburb": "BROUGHTON"
    },
    {
      "postCode": "3350",
      "suburb": "BROWN HILL"
    },
    {
      "postCode": "3685",
      "suburb": "BROWNS PLAINS"
    },
    {
      "postCode": "3749",
      "suburb": "BRUARONG"
    },
    {
      "postCode": "3268",
      "suburb": "BRUCKNELL"
    },
    {
      "postCode": "3885",
      "suburb": "BRUMBY"
    },
    {
      "postCode": "3056",
      "suburb": "BRUNSWICK"
    },
    {
      "postCode": "3057",
      "suburb": "BRUNSWICK EAST"
    },
    {
      "postCode": "3056",
      "suburb": "BRUNSWICK LOWER"
    },
    {
      "postCode": "3056",
      "suburb": "BRUNSWICK NORTH"
    },
    {
      "postCode": "3055",
      "suburb": "BRUNSWICK SOUTH"
    },
    {
      "postCode": "3055",
      "suburb": "BRUNSWICK WEST"
    },
    {
      "postCode": "3885",
      "suburb": "BRUTHEN"
    },
    {
      "postCode": "3375",
      "suburb": "BUANGOR"
    },
    {
      "postCode": "3885",
      "suburb": "BUCHAN"
    },
    {
      "postCode": "3885",
      "suburb": "BUCHAN SOUTH"
    },
    {
      "postCode": "3740",
      "suburb": "BUCKLAND"
    },
    {
      "postCode": "3240",
      "suburb": "BUCKLEY"
    },
    {
      "postCode": "3301",
      "suburb": "BUCKLEY SWAMP"
    },
    {
      "postCode": "3525",
      "suburb": "BUCKRABANYULE"
    },
    {
      "postCode": "3862",
      "suburb": "BUDGEE BUDGEE"
    },
    {
      "postCode": "3870",
      "suburb": "BUDGEREE"
    },
    {
      "postCode": "3579",
      "suburb": "BUDGERUM EAST"
    },
    {
      "postCode": "3958",
      "suburb": "BUFFALO"
    },
    {
      "postCode": "3737",
      "suburb": "BUFFALO RIVER"
    },
    {
      "postCode": "3314",
      "suburb": "BULART"
    },
    {
      "postCode": "3890",
      "suburb": "BULDAH"
    },
    {
      "postCode": "3586",
      "suburb": "BULGA"
    },
    {
      "postCode": "3377",
      "suburb": "BULGANA"
    },
    {
      "postCode": "3428",
      "suburb": "BULLA"
    },
    {
      "postCode": "3266",
      "suburb": "BULLAHARRE"
    },
    {
      "postCode": "3352",
      "suburb": "BULLAROOK"
    },
    {
      "postCode": "3461",
      "suburb": "BULLARTO"
    },
    {
      "postCode": "3461",
      "suburb": "BULLARTO SOUTH"
    },
    {
      "postCode": "3105",
      "suburb": "BULLEEN"
    },
    {
      "postCode": "3437",
      "suburb": "BULLENGAROOK"
    },
    {
      "postCode": "3700",
      "suburb": "BULLIOH"
    },
    {
      "postCode": "3875",
      "suburb": "BULLUMWAAL"
    },
    {
      "postCode": "3821",
      "suburb": "BULN BULN"
    },
    {
      "postCode": "3821",
      "suburb": "BULN BULN EAST"
    },
    {
      "postCode": "3902",
      "suburb": "BUMBERRAH"
    },
    {
      "postCode": "3634",
      "suburb": "BUNBARTHA"
    },
    {
      "postCode": "3851",
      "suburb": "BUNDALAGUAH"
    },
    {
      "postCode": "3730",
      "suburb": "BUNDALONG"
    },
    {
      "postCode": "3730",
      "suburb": "BUNDALONG SOUTH"
    },
    {
      "postCode": "3898",
      "suburb": "BUNDARA"
    },
    {
      "postCode": "3342",
      "suburb": "BUNDING"
    },
    {
      "postCode": "3083",
      "suburb": "BUNDOORA"
    },
    {
      "postCode": "3465",
      "suburb": "BUNG BONG"
    },
    {
      "postCode": "3260",
      "suburb": "BUNGADOR"
    },
    {
      "postCode": "3334",
      "suburb": "BUNGAL"
    },
    {
      "postCode": "3401",
      "suburb": "BUNGALALLY"
    },
    {
      "postCode": "3352",
      "suburb": "BUNGAREE"
    },
    {
      "postCode": "3726",
      "suburb": "BUNGEET"
    },
    {
      "postCode": "3726",
      "suburb": "BUNGEET WEST"
    },
    {
      "postCode": "3691",
      "suburb": "BUNGIL"
    },
    {
      "postCode": "3527",
      "suburb": "BUNGULUKE"
    },
    {
      "postCode": "3357",
      "suburb": "BUNINYONG"
    },
    {
      "postCode": "3352",
      "suburb": "BUNKERS HILL"
    },
    {
      "postCode": "3815",
      "suburb": "BUNYIP"
    },
    {
      "postCode": "3815",
      "suburb": "BUNYIP NORTH"
    },
    {
      "postCode": "3858",
      "suburb": "BURAGWONDUC"
    },
    {
      "postCode": "3568",
      "suburb": "BURKES BRIDGE"
    },
    {
      "postCode": "3475",
      "suburb": "BURKES FLAT"
    },
    {
      "postCode": "3371",
      "suburb": "BURNBANK"
    },
    {
      "postCode": "3558",
      "suburb": "BURNEWANG"
    },
    {
      "postCode": "3121",
      "suburb": "BURNLEY"
    },
    {
      "postCode": "3121",
      "suburb": "BURNLEY NORTH"
    },
    {
      "postCode": "3023",
      "suburb": "BURNSIDE"
    },
    {
      "postCode": "3023",
      "suburb": "BURNSIDE HEIGHTS"
    },
    {
      "postCode": "3559",
      "suburb": "BURRAMBOOT"
    },
    {
      "postCode": "3730",
      "suburb": "BURRAMINE"
    },
    {
      "postCode": "3730",
      "suburb": "BURRAMINE SOUTH"
    },
    {
      "postCode": "3709",
      "suburb": "BURROWYE"
    },
    {
      "postCode": "3352",
      "suburb": "BURRUMBEET"
    },
    {
      "postCode": "3125",
      "suburb": "BURWOOD"
    },
    {
      "postCode": "3151",
      "suburb": "BURWOOD EAST"
    },
    {
      "postCode": "3151",
      "suburb": "BURWOOD HEIGHTS"
    },
    {
      "postCode": "3281",
      "suburb": "BUSHFIELD"
    },
    {
      "postCode": "3860",
      "suburb": "BUSHY PARK"
    },
    {
      "postCode": "3885",
      "suburb": "BUTCHERS RIDGE"
    },
    {
      "postCode": "3711",
      "suburb": "BUXTON"
    },
    {
      "postCode": "3301",
      "suburb": "BYADUK"
    },
    {
      "postCode": "3300",
      "suburb": "BYADUK NORTH"
    },
    {
      "postCode": "3678",
      "suburb": "BYAWATHA"
    },
    {
      "postCode": "3762",
      "suburb": "BYLANDS"
    },
    {
      "postCode": "3617",
      "suburb": "BYRNESIDE"
    },
    {
      "postCode": "3505",
      "suburb": "CABARITA"
    },
    {
      "postCode": "3364",
      "suburb": "CABBAGE TREE"
    },
    {
      "postCode": "3889",
      "suburb": "CABBAGE TREE CREEK"
    },
    {
      "postCode": "3442",
      "suburb": "CADELLO"
    },
    {
      "postCode": "3023",
      "suburb": "CAIRNLEA"
    },
    {
      "postCode": "3037",
      "suburb": "CALDER PARK"
    },
    {
      "postCode": "3984",
      "suburb": "CALDERMEADE"
    },
    {
      "postCode": "3556",
      "suburb": "CALIFORNIA GULLY"
    },
    {
      "postCode": "3573",
      "suburb": "CALIVIL"
    },
    {
      "postCode": "3387",
      "suburb": "CALLAWADDA"
    },
    {
      "postCode": "3844",
      "suburb": "CALLIGNEE"
    },
    {
      "postCode": "3844",
      "suburb": "CALLIGNEE NORTH"
    },
    {
      "postCode": "3844",
      "suburb": "CALLIGNEE SOUTH"
    },
    {
      "postCode": "3971",
      "suburb": "CALROSSIE"
    },
    {
      "postCode": "3875",
      "suburb": "CALULU"
    },
    {
      "postCode": "3779",
      "suburb": "CAMBARVILLE"
    },
    {
      "postCode": "3124",
      "suburb": "CAMBERWELL"
    },
    {
      "postCode": "3126",
      "suburb": "CAMBERWELL EAST"
    },
    {
      "postCode": "3124",
      "suburb": "CAMBERWELL NORTH"
    },
    {
      "postCode": "3124",
      "suburb": "CAMBERWELL SOUTH"
    },
    {
      "postCode": "3124",
      "suburb": "CAMBERWELL WEST"
    },
    {
      "postCode": "3352",
      "suburb": "CAMBRIAN HILL"
    },
    {
      "postCode": "3061",
      "suburb": "CAMPBELLFIELD"
    },
    {
      "postCode": "3387",
      "suburb": "CAMPBELLS BRIDGE"
    },
    {
      "postCode": "3451",
      "suburb": "CAMPBELLS CREEK"
    },
    {
      "postCode": "3556",
      "suburb": "CAMPBELLS FOREST"
    },
    {
      "postCode": "3364",
      "suburb": "CAMPBELLTOWN"
    },
    {
      "postCode": "3260",
      "suburb": "CAMPERDOWN"
    },
    {
      "postCode": "3350",
      "suburb": "CANADIAN"
    },
    {
      "postCode": "3537",
      "suburb": "CANARY ISLAND"
    },
    {
      "postCode": "3630",
      "suburb": "CANIAMBO"
    },
    {
      "postCode": "3890",
      "suburb": "CANN RIVER"
    },
    {
      "postCode": "3540",
      "suburb": "CANNIE"
    },
    {
      "postCode": "3977",
      "suburb": "CANNONS CREEK"
    },
    {
      "postCode": "3393",
      "suburb": "CANNUM"
    },
    {
      "postCode": "3126",
      "suburb": "CANTERBURY"
    },
    {
      "postCode": "3305",
      "suburb": "CAPE BRIDGEWATER"
    },
    {
      "postCode": "3351",
      "suburb": "CAPE CLEAR"
    },
    {
      "postCode": "3888",
      "suburb": "CAPE CONRAN"
    },
    {
      "postCode": "3233",
      "suburb": "CAPE OTWAY"
    },
    {
      "postCode": "3995",
      "suburb": "CAPE PATERSON"
    },
    {
      "postCode": "3939",
      "suburb": "CAPE SCHANCK"
    },
    {
      "postCode": "3925",
      "suburb": "CAPE WOOLAMAI"
    },
    {
      "postCode": "3940",
      "suburb": "CAPEL SOUND"
    },
    {
      "postCode": "3579",
      "suburb": "CAPELS CROSSING"
    },
    {
      "postCode": "3623",
      "suburb": "CARAG CARAG"
    },
    {
      "postCode": "3371",
      "suburb": "CARALULUP"
    },
    {
      "postCode": "3274",
      "suburb": "CARAMUT"
    },
    {
      "postCode": "3477",
      "suburb": "CARAPOOEE"
    },
    {
      "postCode": "3477",
      "suburb": "CARAPOOEE WEST"
    },
    {
      "postCode": "3312",
      "suburb": "CARAPOOK"
    },
    {
      "postCode": "3678",
      "suburb": "CARBOOR"
    },
    {
      "postCode": "3352",
      "suburb": "CARDIGAN"
    },
    {
      "postCode": "3352",
      "suburb": "CARDIGAN VILLAGE"
    },
    {
      "postCode": "3978",
      "suburb": "CARDINIA"
    },
    {
      "postCode": "3496",
      "suburb": "CARDROSS"
    },
    {
      "postCode": "3334",
      "suburb": "CARGERIE"
    },
    {
      "postCode": "3512",
      "suburb": "CARINA"
    },
    {
      "postCode": "3825",
      "suburb": "CARINGAL"
    },
    {
      "postCode": "3464",
      "suburb": "CARISBROOK"
    },
    {
      "postCode": "3239",
      "suburb": "CARLISLE RIVER"
    },
    {
      "postCode": "3442",
      "suburb": "CARLSRUHE"
    },
    {
      "postCode": "3053",
      "suburb": "CARLTON"
    },
    {
      "postCode": "3054",
      "suburb": "CARLTON NORTH"
    },
    {
      "postCode": "3053",
      "suburb": "CARLTON SOUTH"
    },
    {
      "postCode": "3685",
      "suburb": "CARLYLE"
    },
    {
      "postCode": "3163",
      "suburb": "CARNEGIE"
    },
    {
      "postCode": "3351",
      "suburb": "CARNGHAM"
    },
    {
      "postCode": "3023",
      "suburb": "CAROLINE SPRINGS"
    },
    {
      "postCode": "3260",
      "suburb": "CARPENDEIT"
    },
    {
      "postCode": "3844",
      "suburb": "CARRAJUNG"
    },
    {
      "postCode": "3844",
      "suburb": "CARRAJUNG LOWER"
    },
    {
      "postCode": "3844",
      "suburb": "CARRAJUNG SOUTH"
    },
    {
      "postCode": "3361",
      "suburb": "CARRANBALLAC"
    },
    {
      "postCode": "3480",
      "suburb": "CARRON"
    },
    {
      "postCode": "3197",
      "suburb": "CARRUM"
    },
    {
      "postCode": "3201",
      "suburb": "CARRUM DOWNS"
    },
    {
      "postCode": "3494",
      "suburb": "CARWARP"
    },
    {
      "postCode": "3305",
      "suburb": "CASHMORE"
    },
    {
      "postCode": "3898",
      "suburb": "CASSILIS"
    },
    {
      "postCode": "3777",
      "suburb": "CASTELLA"
    },
    {
      "postCode": "3311",
      "suburb": "CASTERTON"
    },
    {
      "postCode": "3691",
      "suburb": "CASTLE CREEK"
    },
    {
      "postCode": "3585",
      "suburb": "CASTLE DONNINGTON"
    },
    {
      "postCode": "3450",
      "suburb": "CASTLEMAINE"
    },
    {
      "postCode": "3981",
      "suburb": "CATANI"
    },
    {
      "postCode": "3377",
      "suburb": "CATHCART"
    },
    {
      "postCode": "3714",
      "suburb": "CATHKIN"
    },
    {
      "postCode": "3537",
      "suburb": "CATUMNAL"
    },
    {
      "postCode": "3162",
      "suburb": "CAULFIELD"
    },
    {
      "postCode": "3145",
      "suburb": "CAULFIELD EAST"
    },
    {
      "postCode": "3161",
      "suburb": "CAULFIELD JUNCTION"
    },
    {
      "postCode": "3161",
      "suburb": "CAULFIELD NORTH"
    },
    {
      "postCode": "3162",
      "suburb": "CAULFIELD SOUTH"
    },
    {
      "postCode": "3660",
      "suburb": "CAVEAT"
    },
    {
      "postCode": "3314",
      "suburb": "CAVENDISH"
    },
    {
      "postCode": "3145",
      "suburb": "CENTRAL PARK"
    },
    {
      "postCode": "3221",
      "suburb": "CERES"
    },
    {
      "postCode": "3148",
      "suburb": "CHADSTONE"
    },
    {
      "postCode": "3148",
      "suburb": "CHADSTONE CENTRE"
    },
    {
      "postCode": "3890",
      "suburb": "CHANDLERS CREEK"
    },
    {
      "postCode": "3352",
      "suburb": "CHAPEL FLAT"
    },
    {
      "postCode": "3239",
      "suburb": "CHAPPLE VALE"
    },
    {
      "postCode": "3318",
      "suburb": "CHARAM"
    },
    {
      "postCode": "3217",
      "suburb": "CHARLEMONT"
    },
    {
      "postCode": "3695",
      "suburb": "CHARLEROI"
    },
    {
      "postCode": "3525",
      "suburb": "CHARLTON"
    },
    {
      "postCode": "3379",
      "suburb": "CHATSWORTH"
    },
    {
      "postCode": "3196",
      "suburb": "CHELSEA"
    },
    {
      "postCode": "3196",
      "suburb": "CHELSEA HEIGHTS"
    },
    {
      "postCode": "3192",
      "suburb": "CHELTENHAM"
    },
    {
      "postCode": "3192",
      "suburb": "CHELTENHAM EAST"
    },
    {
      "postCode": "3351",
      "suburb": "CHEPSTOWE"
    },
    {
      "postCode": "3434",
      "suburb": "CHEROKEE"
    },
    {
      "postCode": "3401",
      "suburb": "CHERRYPOOL"
    },
    {
      "postCode": "3678",
      "suburb": "CHESHUNT"
    },
    {
      "postCode": "3678",
      "suburb": "CHESHUNT SOUTH"
    },
    {
      "postCode": "3725",
      "suburb": "CHESNEY VALE"
    },
    {
      "postCode": "3312",
      "suburb": "CHETWYND"
    },
    {
      "postCode": "3451",
      "suburb": "CHEWTON"
    },
    {
      "postCode": "3451",
      "suburb": "CHEWTON BUSHLANDS"
    },
    {
      "postCode": "3824",
      "suburb": "CHILDERS"
    },
    {
      "postCode": "3585",
      "suburb": "CHILLINGOLLAH"
    },
    {
      "postCode": "3683",
      "suburb": "CHILTERN"
    },
    {
      "postCode": "3683",
      "suburb": "CHILTERN VALLEY"
    },
    {
      "postCode": "3544",
      "suburb": "CHINANGIN"
    },
    {
      "postCode": "3546",
      "suburb": "CHINKAPOOK"
    },
    {
      "postCode": "3756",
      "suburb": "CHINTIN"
    },
    {
      "postCode": "3116",
      "suburb": "CHIRNSIDE PARK"
    },
    {
      "postCode": "3525",
      "suburb": "CHIRRIP"
    },
    {
      "postCode": "3260",
      "suburb": "CHOCOLYN"
    },
    {
      "postCode": "3775",
      "suburb": "CHRISTMAS HILLS"
    },
    {
      "postCode": "3777",
      "suburb": "CHUM CREEK"
    },
    {
      "postCode": "3842",
      "suburb": "CHURCHILL"
    },
    {
      "postCode": "3925",
      "suburb": "CHURCHILL ISLAND"
    },
    {
      "postCode": "3373",
      "suburb": "CHUTE"
    },
    {
      "postCode": "3352",
      "suburb": "CLARENDON"
    },
    {
      "postCode": "3352",
      "suburb": "CLARETOWN"
    },
    {
      "postCode": "3169",
      "suburb": "CLARINDA"
    },
    {
      "postCode": "3430",
      "suburb": "CLARKEFIELD"
    },
    {
      "postCode": "3352",
      "suburb": "CLARKES HILL"
    },
    {
      "postCode": "3168",
      "suburb": "CLAYTON"
    },
    {
      "postCode": "3169",
      "suburb": "CLAYTON SOUTH"
    },
    {
      "postCode": "3409",
      "suburb": "CLEAR LAKE"
    },
    {
      "postCode": "3782",
      "suburb": "CLEMATIS"
    },
    {
      "postCode": "3875",
      "suburb": "CLIFTON CREEK"
    },
    {
      "postCode": "3068",
      "suburb": "CLIFTON HILL"
    },
    {
      "postCode": "3222",
      "suburb": "CLIFTON SPRINGS"
    },
    {
      "postCode": "3658",
      "suburb": "CLONBINANE"
    },
    {
      "postCode": "3315",
      "suburb": "CLOVER FLAT"
    },
    {
      "postCode": "3822",
      "suburb": "CLOVERLEA"
    },
    {
      "postCode": "3889",
      "suburb": "CLUB TERRACE"
    },
    {
      "postCode": "3370",
      "suburb": "CLUNES"
    },
    {
      "postCode": "3978",
      "suburb": "CLYDE"
    },
    {
      "postCode": "3978",
      "suburb": "CLYDE NORTH"
    },
    {
      "postCode": "3851",
      "suburb": "CLYDEBANK"
    },
    {
      "postCode": "3461",
      "suburb": "CLYDESDALE"
    },
    {
      "postCode": "3825",
      "suburb": "COALVILLE"
    },
    {
      "postCode": "3851",
      "suburb": "COBAINS"
    },
    {
      "postCode": "3442",
      "suburb": "COBAW"
    },
    {
      "postCode": "3862",
      "suburb": "COBBANNAH"
    },
    {
      "postCode": "3900",
      "suburb": "COBBERAS"
    },
    {
      "postCode": "3338",
      "suburb": "COBBLEBANK"
    },
    {
      "postCode": "3266",
      "suburb": "COBDEN"
    },
    {
      "postCode": "3643",
      "suburb": "COBRAM"
    },
    {
      "postCode": "3644",
      "suburb": "COBRAM"
    },
    {
      "postCode": "3644",
      "suburb": "COBRAM EAST"
    },
    {
      "postCode": "3266",
      "suburb": "COBRICO"
    },
    {
      "postCode": "3898",
      "suburb": "COBUNGRA"
    },
    {
      "postCode": "3058",
      "suburb": "COBURG"
    },
    {
      "postCode": "3058",
      "suburb": "COBURG NORTH"
    },
    {
      "postCode": "3546",
      "suburb": "COCAMBA"
    },
    {
      "postCode": "3475",
      "suburb": "COCHRANES CREEK"
    },
    {
      "postCode": "3781",
      "suburb": "COCKATOO"
    },
    {
      "postCode": "3030",
      "suburb": "COCOROC"
    },
    {
      "postCode": "3285",
      "suburb": "CODRINGTON"
    },
    {
      "postCode": "3364",
      "suburb": "COGHILLS CREEK"
    },
    {
      "postCode": "3568",
      "suburb": "COHUNA"
    },
    {
      "postCode": "3340",
      "suburb": "COIMADAI"
    },
    {
      "postCode": "3542",
      "suburb": "COKUM"
    },
    {
      "postCode": "3250",
      "suburb": "COLAC"
    },
    {
      "postCode": "3707",
      "suburb": "COLAC COLAC"
    },
    {
      "postCode": "3250",
      "suburb": "COLAC EAST"
    },
    {
      "postCode": "3250",
      "suburb": "COLAC WEST"
    },
    {
      "postCode": "3559",
      "suburb": "COLBINABBIN"
    },
    {
      "postCode": "3342",
      "suburb": "COLBROOK"
    },
    {
      "postCode": "3770",
      "suburb": "COLDSTREAM"
    },
    {
      "postCode": "3315",
      "suburb": "COLERAINE"
    },
    {
      "postCode": "3494",
      "suburb": "COLIGNAN"
    },
    {
      "postCode": "3066",
      "suburb": "COLLINGWOOD"
    },
    {
      "postCode": "3066",
      "suburb": "COLLINGWOOD NORTH"
    },
    {
      "postCode": "8003",
      "suburb": "COLLINS STREET EAST"
    },
    {
      "postCode": "8007",
      "suburb": "COLLINS STREET WEST"
    },
    {
      "postCode": "3630",
      "suburb": "COLLIVER"
    },
    {
      "postCode": "3889",
      "suburb": "COMBIENBAR"
    },
    {
      "postCode": "3384",
      "suburb": "CONCONGELLA"
    },
    {
      "postCode": "3303",
      "suburb": "CONDAH"
    },
    {
      "postCode": "3286",
      "suburb": "CONDAH SWAMP"
    },
    {
      "postCode": "3633",
      "suburb": "CONGUPNA"
    },
    {
      "postCode": "3227",
      "suburb": "CONNEWARRE"
    },
    {
      "postCode": "3318",
      "suburb": "CONNEWIRRICOO"
    },
    {
      "postCode": "3315",
      "suburb": "COOJAR"
    },
    {
      "postCode": "3048",
      "suburb": "COOLAROO"
    },
    {
      "postCode": "3616",
      "suburb": "COOMA"
    },
    {
      "postCode": "3629",
      "suburb": "COOMBOONA"
    },
    {
      "postCode": "3461",
      "suburb": "COOMOORA"
    },
    {
      "postCode": "3860",
      "suburb": "COONGULLA"
    },
    {
      "postCode": "3477",
      "suburb": "COONOOER BRIDGE"
    },
    {
      "postCode": "3477",
      "suburb": "COONOOER WEST"
    },
    {
      "postCode": "3825",
      "suburb": "COOPERS CREEK"
    },
    {
      "postCode": "3268",
      "suburb": "COORIEMUNGLE"
    },
    {
      "postCode": "3480",
      "suburb": "COPE COPE"
    },
    {
      "postCode": "3814",
      "suburb": "CORA LYNN"
    },
    {
      "postCode": "3480",
      "suburb": "CORACK"
    },
    {
      "postCode": "3480",
      "suburb": "CORACK EAST"
    },
    {
      "postCode": "3249",
      "suburb": "CORAGULAC"
    },
    {
      "postCode": "3691",
      "suburb": "CORAL BANK"
    },
    {
      "postCode": "3352",
      "suburb": "CORINDHAP"
    },
    {
      "postCode": "3984",
      "suburb": "CORINELLA"
    },
    {
      "postCode": "3214",
      "suburb": "CORIO"
    },
    {
      "postCode": "3311",
      "suburb": "CORNDALE"
    },
    {
      "postCode": "3551",
      "suburb": "CORNELLA"
    },
    {
      "postCode": "3683",
      "suburb": "CORNISHTOWN"
    },
    {
      "postCode": "3984",
      "suburb": "CORONET BAY"
    },
    {
      "postCode": "3559",
      "suburb": "COROP"
    },
    {
      "postCode": "3558",
      "suburb": "COROP WEST"
    },
    {
      "postCode": "3254",
      "suburb": "COROROOKE"
    },
    {
      "postCode": "3888",
      "suburb": "CORRINGLE"
    },
    {
      "postCode": "3707",
      "suburb": "CORRYONG"
    },
    {
      "postCode": "3249",
      "suburb": "CORUNNUN"
    },
    {
      "postCode": "3631",
      "suburb": "COSGROVE"
    },
    {
      "postCode": "3631",
      "suburb": "COSGROVE SOUTH"
    },
    {
      "postCode": "3523",
      "suburb": "COSTERFIELD"
    },
    {
      "postCode": "3101",
      "suburb": "COTHAM"
    },
    {
      "postCode": "3465",
      "suburb": "COTSWOLD"
    },
    {
      "postCode": "3099",
      "suburb": "COTTLES BRIDGE"
    },
    {
      "postCode": "3862",
      "suburb": "COWA"
    },
    {
      "postCode": "3506",
      "suburb": "COWANGIE"
    },
    {
      "postCode": "3922",
      "suburb": "COWES"
    },
    {
      "postCode": "3268",
      "suburb": "COWLEYS CREEK"
    },
    {
      "postCode": "3857",
      "suburb": "COWWARR"
    },
    {
      "postCode": "3465",
      "suburb": "CRAIGIE"
    },
    {
      "postCode": "3064",
      "suburb": "CRAIGIEBURN"
    },
    {
      "postCode": "3977",
      "suburb": "CRANBOURNE"
    },
    {
      "postCode": "3977",
      "suburb": "CRANBOURNE EAST"
    },
    {
      "postCode": "3977",
      "suburb": "CRANBOURNE NORTH"
    },
    {
      "postCode": "3977",
      "suburb": "CRANBOURNE SOUTH"
    },
    {
      "postCode": "3977",
      "suburb": "CRANBOURNE WEST"
    },
    {
      "postCode": "3669",
      "suburb": "CREEK JUNCTION"
    },
    {
      "postCode": "3551",
      "suburb": "CREEK VIEW"
    },
    {
      "postCode": "3666",
      "suburb": "CREIGHTONS CREEK"
    },
    {
      "postCode": "3121",
      "suburb": "CREMORNE"
    },
    {
      "postCode": "3322",
      "suburb": "CRESSY"
    },
    {
      "postCode": "3363",
      "suburb": "CRESWICK"
    },
    {
      "postCode": "3363",
      "suburb": "CRESWICK NORTH"
    },
    {
      "postCode": "3919",
      "suburb": "CRIB POINT"
    },
    {
      "postCode": "3193",
      "suburb": "CROMER"
    },
    {
      "postCode": "3858",
      "suburb": "CROOKAYAN"
    },
    {
      "postCode": "3862",
      "suburb": "CROOKED RIVER"
    },
    {
      "postCode": "3041",
      "suburb": "CROSS KEYS"
    },
    {
      "postCode": "3373",
      "suburb": "CROSS ROADS"
    },
    {
      "postCode": "3283",
      "suburb": "CROSSLEY"
    },
    {
      "postCode": "3821",
      "suburb": "CROSSOVER"
    },
    {
      "postCode": "3377",
      "suburb": "CROWLANDS"
    },
    {
      "postCode": "3301",
      "suburb": "CROXTON EAST"
    },
    {
      "postCode": "3136",
      "suburb": "CROYDON"
    },
    {
      "postCode": "3136",
      "suburb": "CROYDON HILLS"
    },
    {
      "postCode": "3136",
      "suburb": "CROYDON NORTH"
    },
    {
      "postCode": "3136",
      "suburb": "CROYDON SOUTH"
    },
    {
      "postCode": "3393",
      "suburb": "CRYMELON"
    },
    {
      "postCode": "3714",
      "suburb": "CRYSTAL CREEK"
    },
    {
      "postCode": "3265",
      "suburb": "CUDGEE"
    },
    {
      "postCode": "3705",
      "suburb": "CUDGEWA"
    },
    {
      "postCode": "3530",
      "suburb": "CULGOA"
    },
    {
      "postCode": "3315",
      "suburb": "CULLA"
    },
    {
      "postCode": "3568",
      "suburb": "CULLEN"
    },
    {
      "postCode": "3496",
      "suburb": "CULLULLERAINE"
    },
    {
      "postCode": "3251",
      "suburb": "CUNDARE"
    },
    {
      "postCode": "3251",
      "suburb": "CUNDARE NORTH"
    },
    {
      "postCode": "3268",
      "suburb": "CURDIES RIVER"
    },
    {
      "postCode": "3268",
      "suburb": "CURDIEVALE"
    },
    {
      "postCode": "3222",
      "suburb": "CURLEWIS"
    },
    {
      "postCode": "3483",
      "suburb": "CURYO"
    },
    {
      "postCode": "3385",
      "suburb": "DADSWELLS BRIDGE"
    },
    {
      "postCode": "3465",
      "suburb": "DAISY HILL"
    },
    {
      "postCode": "3341",
      "suburb": "DALES CREEK"
    },
    {
      "postCode": "3047",
      "suburb": "DALLAS"
    },
    {
      "postCode": "3981",
      "suburb": "DALMORE"
    },
    {
      "postCode": "3568",
      "suburb": "DALTONS BRIDGE"
    },
    {
      "postCode": "3477",
      "suburb": "DALYENONG"
    },
    {
      "postCode": "3992",
      "suburb": "DALYSTON"
    },
    {
      "postCode": "3175",
      "suburb": "DANDENONG"
    },
    {
      "postCode": "3175",
      "suburb": "DANDENONG EAST"
    },
    {
      "postCode": "3175",
      "suburb": "DANDENONG NORTH"
    },
    {
      "postCode": "3164",
      "suburb": "DANDENONG SOUTH"
    },
    {
      "postCode": "3175",
      "suburb": "DANDENONG SOUTH"
    },
    {
      "postCode": "8785",
      "suburb": "DANDENONG SOUTH"
    },
    {
      "postCode": "3737",
      "suburb": "DANDONGADALE"
    },
    {
      "postCode": "3862",
      "suburb": "DARGO"
    },
    {
      "postCode": "3340",
      "suburb": "DARLEY"
    },
    {
      "postCode": "3871",
      "suburb": "DARLIMURLA"
    },
    {
      "postCode": "3145",
      "suburb": "DARLING"
    },
    {
      "postCode": "3145",
      "suburb": "DARLING SOUTH"
    },
    {
      "postCode": "3271",
      "suburb": "DARLINGTON"
    },
    {
      "postCode": "3822",
      "suburb": "DARNUM"
    },
    {
      "postCode": "3756",
      "suburb": "DARRAWEIT GUIM"
    },
    {
      "postCode": "3851",
      "suburb": "DARRIMAN"
    },
    {
      "postCode": "3304",
      "suburb": "DARTMOOR"
    },
    {
      "postCode": "3701",
      "suburb": "DARTMOUTH"
    },
    {
      "postCode": "3858",
      "suburb": "DAWSON"
    },
    {
      "postCode": "3460",
      "suburb": "DAYLESFORD"
    },
    {
      "postCode": "3363",
      "suburb": "DEAN"
    },
    {
      "postCode": "3235",
      "suburb": "DEANS MARSH"
    },
    {
      "postCode": "3336",
      "suburb": "DEANSIDE"
    },
    {
      "postCode": "3888",
      "suburb": "DEDDICK VALLEY"
    },
    {
      "postCode": "3691",
      "suburb": "DEDERANG"
    },
    {
      "postCode": "3385",
      "suburb": "DEEP LEAD"
    },
    {
      "postCode": "3103",
      "suburb": "DEEPDENE"
    },
    {
      "postCode": "3023",
      "suburb": "DEER PARK"
    },
    {
      "postCode": "3022",
      "suburb": "DEER PARK EAST"
    },
    {
      "postCode": "3023",
      "suburb": "DEER PARK NORTH"
    },
    {
      "postCode": "3356",
      "suburb": "DELACOMBE"
    },
    {
      "postCode": "3037",
      "suburb": "DELAHEY"
    },
    {
      "postCode": "3723",
      "suburb": "DELATITE"
    },
    {
      "postCode": "3871",
      "suburb": "DELBURN"
    },
    {
      "postCode": "3888",
      "suburb": "DELEGATE RIVER"
    },
    {
      "postCode": "3186",
      "suburb": "DENDY"
    },
    {
      "postCode": "3377",
      "suburb": "DENICULL CREEK"
    },
    {
      "postCode": "3858",
      "suburb": "DENISON"
    },
    {
      "postCode": "3280",
      "suburb": "DENNINGTON"
    },
    {
      "postCode": "3461",
      "suburb": "DENVER"
    },
    {
      "postCode": "3875",
      "suburb": "DEPTFORD"
    },
    {
      "postCode": "3516",
      "suburb": "DERBY"
    },
    {
      "postCode": "3352",
      "suburb": "DEREEL"
    },
    {
      "postCode": "3312",
      "suburb": "DERGHOLM"
    },
    {
      "postCode": "3026",
      "suburb": "DERRIMUT"
    },
    {
      "postCode": "3523",
      "suburb": "DERRINAL"
    },
    {
      "postCode": "3325",
      "suburb": "DERRINALLUM"
    },
    {
      "postCode": "3726",
      "suburb": "DEVENISH"
    },
    {
      "postCode": "3714",
      "suburb": "DEVILS RIVER"
    },
    {
      "postCode": "3977",
      "suburb": "DEVON MEADOWS"
    },
    {
      "postCode": "3971",
      "suburb": "DEVON NORTH"
    },
    {
      "postCode": "3808",
      "suburb": "DEWHURST"
    },
    {
      "postCode": "3610",
      "suburb": "DHURRINGILE"
    },
    {
      "postCode": "3089",
      "suburb": "DIAMOND CREEK"
    },
    {
      "postCode": "3309",
      "suburb": "DIGBY"
    },
    {
      "postCode": "3427",
      "suburb": "DIGGERS REST"
    },
    {
      "postCode": "3561",
      "suburb": "DIGGORA"
    },
    {
      "postCode": "3414",
      "suburb": "DIMBOOLA"
    },
    {
      "postCode": "3571",
      "suburb": "DINGEE"
    },
    {
      "postCode": "3172",
      "suburb": "DINGLEY VILLAGE"
    },
    {
      "postCode": "3579",
      "suburb": "DINGWALL"
    },
    {
      "postCode": "3898",
      "suburb": "DINNER PLAIN"
    },
    {
      "postCode": "3265",
      "suburb": "DIXIE"
    },
    {
      "postCode": "3775",
      "suburb": "DIXONS CREEK"
    },
    {
      "postCode": "3377",
      "suburb": "DOBIE"
    },
    {
      "postCode": "3678",
      "suburb": "DOCKER"
    },
    {
      "postCode": "3678",
      "suburb": "DOCKERS PLAINS"
    },
    {
      "postCode": "3008",
      "suburb": "DOCKLANDS"
    },
    {
      "postCode": "8012",
      "suburb": "DOCKLANDS"
    },
    {
      "postCode": "3895",
      "suburb": "DOCTORS FLAT"
    },
    {
      "postCode": "3871",
      "suburb": "DOLLAR"
    },
    {
      "postCode": "3139",
      "suburb": "DON VALLEY"
    },
    {
      "postCode": "3480",
      "suburb": "DONALD"
    },
    {
      "postCode": "3108",
      "suburb": "DONCASTER"
    },
    {
      "postCode": "3109",
      "suburb": "DONCASTER EAST"
    },
    {
      "postCode": "3109",
      "suburb": "DONCASTER HEIGHTS"
    },
    {
      "postCode": "3064",
      "suburb": "DONNYBROOK"
    },
    {
      "postCode": "3111",
      "suburb": "DONVALE"
    },
    {
      "postCode": "3478",
      "suburb": "DOOBOOBETIC"
    },
    {
      "postCode": "3401",
      "suburb": "DOOEN"
    },
    {
      "postCode": "3646",
      "suburb": "DOOKIE"
    },
    {
      "postCode": "3647",
      "suburb": "DOOKIE COLLEGE"
    },
    {
      "postCode": "3754",
      "suburb": "DOREEN"
    },
    {
      "postCode": "3312",
      "suburb": "DORODONG"
    },
    {
      "postCode": "3893",
      "suburb": "DOUBLE BRIDGES"
    },
    {
      "postCode": "3409",
      "suburb": "DOUGLAS"
    },
    {
      "postCode": "3177",
      "suburb": "DOVETON"
    },
    {
      "postCode": "3249",
      "suburb": "DREEITE"
    },
    {
      "postCode": "3249",
      "suburb": "DREEITE SOUTH"
    },
    {
      "postCode": "3840",
      "suburb": "DRIFFIELD"
    },
    {
      "postCode": "3304",
      "suburb": "DRIK DRIK"
    },
    {
      "postCode": "3936",
      "suburb": "DROMANA"
    },
    {
      "postCode": "3660",
      "suburb": "DROPMORE"
    },
    {
      "postCode": "3818",
      "suburb": "DROUIN"
    },
    {
      "postCode": "3818",
      "suburb": "DROUIN EAST"
    },
    {
      "postCode": "3818",
      "suburb": "DROUIN SOUTH"
    },
    {
      "postCode": "3818",
      "suburb": "DROUIN WEST"
    },
    {
      "postCode": "3636",
      "suburb": "DRUMANURE"
    },
    {
      "postCode": "3304",
      "suburb": "DRUMBORG"
    },
    {
      "postCode": "3215",
      "suburb": "DRUMCONDRA"
    },
    {
      "postCode": "3570",
      "suburb": "DRUMMARTIN"
    },
    {
      "postCode": "3461",
      "suburb": "DRUMMOND"
    },
    {
      "postCode": "3446",
      "suburb": "DRUMMOND NORTH"
    },
    {
      "postCode": "3401",
      "suburb": "DRUNG"
    },
    {
      "postCode": "3461",
      "suburb": "DRY DIGGINGS"
    },
    {
      "postCode": "3222",
      "suburb": "DRYSDALE"
    },
    {
      "postCode": "3409",
      "suburb": "DUCHEMBEGARRA"
    },
    {
      "postCode": "3956",
      "suburb": "DUMBALK"
    },
    {
      "postCode": "3956",
      "suburb": "DUMBALK NORTH"
    },
    {
      "postCode": "3527",
      "suburb": "DUMOSA"
    },
    {
      "postCode": "3371",
      "suburb": "DUNACH"
    },
    {
      "postCode": "3271",
      "suburb": "DUNDONNELL"
    },
    {
      "postCode": "3175",
      "suburb": "DUNEARN"
    },
    {
      "postCode": "3294",
      "suburb": "DUNKELD"
    },
    {
      "postCode": "3630",
      "suburb": "DUNKIRK"
    },
    {
      "postCode": "3472",
      "suburb": "DUNLUCE"
    },
    {
      "postCode": "3377",
      "suburb": "DUNNEWORTHY"
    },
    {
      "postCode": "3352",
      "suburb": "DUNNSTOWN"
    },
    {
      "postCode": "3472",
      "suburb": "DUNOLLY"
    },
    {
      "postCode": "3312",
      "suburb": "DUNROBIN"
    },
    {
      "postCode": "3342",
      "suburb": "DURDIDWARRAH"
    },
    {
      "postCode": "3352",
      "suburb": "DURHAM LEAD"
    },
    {
      "postCode": "3576",
      "suburb": "DURHAM OX"
    },
    {
      "postCode": "3851",
      "suburb": "DUTSON"
    },
    {
      "postCode": "3851",
      "suburb": "DUTSON DOWNS"
    },
    {
      "postCode": "3305",
      "suburb": "DUTTON WAY"
    },
    {
      "postCode": "3323",
      "suburb": "DUVERNEY"
    },
    {
      "postCode": "3878",
      "suburb": "EAGLE POINT"
    },
    {
      "postCode": "3556",
      "suburb": "EAGLEHAWK"
    },
    {
      "postCode": "3556",
      "suburb": "EAGLEHAWK NORTH"
    },
    {
      "postCode": "3084",
      "suburb": "EAGLEMONT"
    },
    {
      "postCode": "3669",
      "suburb": "EARLSTON"
    },
    {
      "postCode": "3875",
      "suburb": "EAST BAIRNSDALE"
    },
    {
      "postCode": "3550",
      "suburb": "EAST BENDIGO"
    },
    {
      "postCode": "3219",
      "suburb": "EAST GEELONG"
    },
    {
      "postCode": "3002",
      "suburb": "EAST MELBOURNE"
    },
    {
      "postCode": "8002",
      "suburb": "EAST MELBOURNE"
    },
    {
      "postCode": "3852",
      "suburb": "EAST SALE"
    },
    {
      "postCode": "3678",
      "suburb": "EAST WANGARATTA"
    },
    {
      "postCode": "3799",
      "suburb": "EAST WARBURTON"
    },
    {
      "postCode": "3231",
      "suburb": "EASTERN VIEW"
    },
    {
      "postCode": "3463",
      "suburb": "EASTVILLE"
    },
    {
      "postCode": "3875",
      "suburb": "EASTWOOD"
    },
    {
      "postCode": "3691",
      "suburb": "EBDEN"
    },
    {
      "postCode": "3564",
      "suburb": "ECHUCA"
    },
    {
      "postCode": "3564",
      "suburb": "ECHUCA SOUTH"
    },
    {
      "postCode": "3564",
      "suburb": "ECHUCA VILLAGE"
    },
    {
      "postCode": "3564",
      "suburb": "ECHUCA WEST"
    },
    {
      "postCode": "3265",
      "suburb": "ECKLIN SOUTH"
    },
    {
      "postCode": "3472",
      "suburb": "EDDINGTON"
    },
    {
      "postCode": "3757",
      "suburb": "EDEN PARK"
    },
    {
      "postCode": "3318",
      "suburb": "EDENHOPE"
    },
    {
      "postCode": "3444",
      "suburb": "EDGECOMBE"
    },
    {
      "postCode": "3678",
      "suburb": "EDI"
    },
    {
      "postCode": "3678",
      "suburb": "EDI UPPER"
    },
    {
      "postCode": "3196",
      "suburb": "EDITHVALE"
    },
    {
      "postCode": "3461",
      "suburb": "EGANSTOWN"
    },
    {
      "postCode": "3713",
      "suburb": "EILDON"
    },
    {
      "postCode": "3334",
      "suburb": "ELAINE"
    },
    {
      "postCode": "3746",
      "suburb": "ELDORADO"
    },
    {
      "postCode": "3461",
      "suburb": "ELEVATED PLAINS"
    },
    {
      "postCode": "3266",
      "suburb": "ELINGAMITE"
    },
    {
      "postCode": "3266",
      "suburb": "ELINGAMITE NORTH"
    },
    {
      "postCode": "3921",
      "suburb": "ELIZABETH ISLAND"
    },
    {
      "postCode": "3875",
      "suburb": "ELLASWOOD"
    },
    {
      "postCode": "3265",
      "suburb": "ELLERSLIE"
    },
    {
      "postCode": "3250",
      "suburb": "ELLIMINYT"
    },
    {
      "postCode": "3821",
      "suburb": "ELLINBANK"
    },
    {
      "postCode": "3469",
      "suburb": "ELMHURST"
    },
    {
      "postCode": "3558",
      "suburb": "ELMORE"
    },
    {
      "postCode": "3448",
      "suburb": "ELPHINSTONE"
    },
    {
      "postCode": "3185",
      "suburb": "ELSTERNWICK"
    },
    {
      "postCode": "3095",
      "suburb": "ELTHAM"
    },
    {
      "postCode": "3095",
      "suburb": "ELTHAM NORTH"
    },
    {
      "postCode": "3184",
      "suburb": "ELWOOD"
    },
    {
      "postCode": "3782",
      "suburb": "EMERALD"
    },
    {
      "postCode": "3475",
      "suburb": "EMU"
    },
    {
      "postCode": "3551",
      "suburb": "EMU CREEK"
    },
    {
      "postCode": "3802",
      "suburb": "ENDEAVOUR HILLS"
    },
    {
      "postCode": "3352",
      "suburb": "ENFIELD"
    },
    {
      "postCode": "3407",
      "suburb": "ENGLEFIELD"
    },
    {
      "postCode": "3723",
      "suburb": "ENOCHS POINT"
    },
    {
      "postCode": "3895",
      "suburb": "ENSAY"
    },
    {
      "postCode": "3895",
      "suburb": "ENSAY NORTH"
    },
    {
      "postCode": "3551",
      "suburb": "EPPALOCK"
    },
    {
      "postCode": "3076",
      "suburb": "EPPING"
    },
    {
      "postCode": "3551",
      "suburb": "EPSOM"
    },
    {
      "postCode": "3352",
      "suburb": "ERCILDOUNE"
    },
    {
      "postCode": "3825",
      "suburb": "ERICA"
    },
    {
      "postCode": "3889",
      "suburb": "ERRINUNDRA"
    },
    {
      "postCode": "3701",
      "suburb": "ESKDALE"
    },
    {
      "postCode": "3730",
      "suburb": "ESMOND"
    },
    {
      "postCode": "3040",
      "suburb": "ESSENDON"
    },
    {
      "postCode": "3041",
      "suburb": "ESSENDON FIELDS"
    },
    {
      "postCode": "3041",
      "suburb": "ESSENDON NORTH"
    },
    {
      "postCode": "3040",
      "suburb": "ESSENDON WEST"
    },
    {
      "postCode": "3177",
      "suburb": "EUMEMMERRING"
    },
    {
      "postCode": "3251",
      "suburb": "EURACK"
    },
    {
      "postCode": "3350",
      "suburb": "EUREKA"
    },
    {
      "postCode": "3666",
      "suburb": "EUROA"
    },
    {
      "postCode": "3739",
      "suburb": "EUROBIN"
    },
    {
      "postCode": "3371",
      "suburb": "EVANSFORD"
    },
    {
      "postCode": "3377",
      "suburb": "EVERSLEY"
    },
    {
      "postCode": "3678",
      "suburb": "EVERTON"
    },
    {
      "postCode": "3678",
      "suburb": "EVERTON UPPER"
    },
    {
      "postCode": "3338",
      "suburb": "EXFORD"
    },
    {
      "postCode": "3338",
      "suburb": "EYNESBURY"
    },
    {
      "postCode": "3951",
      "suburb": "FAIRBANK"
    },
    {
      "postCode": "3078",
      "suburb": "FAIRFIELD"
    },
    {
      "postCode": "3231",
      "suburb": "FAIRHAVEN"
    },
    {
      "postCode": "3579",
      "suburb": "FAIRLEY"
    },
    {
      "postCode": "3561",
      "suburb": "FAIRY DELL"
    },
    {
      "postCode": "3875",
      "suburb": "FAIRY DELL"
    },
    {
      "postCode": "3699",
      "suburb": "FALLS CREEK"
    },
    {
      "postCode": "3451",
      "suburb": "FARADAY"
    },
    {
      "postCode": "3714",
      "suburb": "FAWCETT"
    },
    {
      "postCode": "3060",
      "suburb": "FAWKNER"
    },
    {
      "postCode": "3518",
      "suburb": "FENTONS CREEK"
    },
    {
      "postCode": "3237",
      "suburb": "FERGUSON"
    },
    {
      "postCode": "3458",
      "suburb": "FERN HILL"
    },
    {
      "postCode": "3864",
      "suburb": "FERNBANK"
    },
    {
      "postCode": "3821",
      "suburb": "FERNDALE"
    },
    {
      "postCode": "3518",
      "suburb": "FERNIHURST"
    },
    {
      "postCode": "3778",
      "suburb": "FERNSHAW"
    },
    {
      "postCode": "3156",
      "suburb": "FERNTREE GULLY"
    },
    {
      "postCode": "3786",
      "suburb": "FERNY CREEK"
    },
    {
      "postCode": "3024",
      "suburb": "FIELDSTONE"
    },
    {
      "postCode": "3518",
      "suburb": "FIERY FLAT"
    },
    {
      "postCode": "3939",
      "suburb": "FINGAL"
    },
    {
      "postCode": "3959",
      "suburb": "FISH CREEK"
    },
    {
      "postCode": "3585",
      "suburb": "FISH POINT"
    },
    {
      "postCode": "3342",
      "suburb": "FISKVILLE"
    },
    {
      "postCode": "3065",
      "suburb": "FITZROY"
    },
    {
      "postCode": "3068",
      "suburb": "FITZROY NORTH"
    },
    {
      "postCode": "3875",
      "suburb": "FLAGGY CREEK"
    },
    {
      "postCode": "3465",
      "suburb": "FLAGSTAFF"
    },
    {
      "postCode": "3851",
      "suburb": "FLAMINGO BEACH"
    },
    {
      "postCode": "3031",
      "suburb": "FLEMINGTON"
    },
    {
      "postCode": "3929",
      "suburb": "FLINDERS"
    },
    {
      "postCode": "8009",
      "suburb": "FLINDERS LANE"
    },
    {
      "postCode": "3550",
      "suburb": "FLORA HILL"
    },
    {
      "postCode": "3717",
      "suburb": "FLOWERDALE"
    },
    {
      "postCode": "3844",
      "suburb": "FLYNN"
    },
    {
      "postCode": "3844",
      "suburb": "FLYNNS CREEK"
    },
    {
      "postCode": "3011",
      "suburb": "FOOTSCRAY"
    },
    {
      "postCode": "3764",
      "suburb": "FORBES"
    },
    {
      "postCode": "3131",
      "suburb": "FOREST HILL"
    },
    {
      "postCode": "3875",
      "suburb": "FORGE CREEK"
    },
    {
      "postCode": "3236",
      "suburb": "FORREST"
    },
    {
      "postCode": "3960",
      "suburb": "FOSTER"
    },
    {
      "postCode": "3960",
      "suburb": "FOSTER NORTH"
    },
    {
      "postCode": "3557",
      "suburb": "FOSTERVILLE"
    },
    {
      "postCode": "3805",
      "suburb": "FOUNTAIN GATE"
    },
    {
      "postCode": "3323",
      "suburb": "FOXHOW"
    },
    {
      "postCode": "3265",
      "suburb": "FRAMLINGHAM"
    },
    {
      "postCode": "3265",
      "suburb": "FRAMLINGHAM EAST"
    },
    {
      "postCode": "3461",
      "suburb": "FRANKLINFORD"
    },
    {
      "postCode": "3199",
      "suburb": "FRANKSTON"
    },
    {
      "postCode": "3199",
      "suburb": "FRANKSTON EAST"
    },
    {
      "postCode": "3199",
      "suburb": "FRANKSTON HEIGHTS"
    },
    {
      "postCode": "3200",
      "suburb": "FRANKSTON NORTH"
    },
    {
      "postCode": "3199",
      "suburb": "FRANKSTON SOUTH"
    },
    {
      "postCode": "3336",
      "suburb": "FRASER RISE"
    },
    {
      "postCode": "3741",
      "suburb": "FREEBURGH"
    },
    {
      "postCode": "3921",
      "suburb": "FRENCH ISLAND"
    },
    {
      "postCode": "3384",
      "suburb": "FRENCHMANS"
    },
    {
      "postCode": "3217",
      "suburb": "FRESHWATER CREEK"
    },
    {
      "postCode": "3451",
      "suburb": "FRYERSTOWN"
    },
    {
      "postCode": "3851",
      "suburb": "FULHAM"
    },
    {
      "postCode": "3825",
      "suburb": "FUMINA"
    },
    {
      "postCode": "3825",
      "suburb": "FUMINA SOUTH"
    },
    {
      "postCode": "3381",
      "suburb": "FYANS CREEK"
    },
    {
      "postCode": "3218",
      "suburb": "FYANSFORD"
    },
    {
      "postCode": "3723",
      "suburb": "GAFFNEYS CREEK"
    },
    {
      "postCode": "3822",
      "suburb": "GAINSBOROUGH"
    },
    {
      "postCode": "3568",
      "suburb": "GANNAWARRA"
    },
    {
      "postCode": "3737",
      "suburb": "GAPSTED"
    },
    {
      "postCode": "3207",
      "suburb": "GARDEN CITY"
    },
    {
      "postCode": "3185",
      "suburb": "GARDENVALE"
    },
    {
      "postCode": "3814",
      "suburb": "GARFIELD"
    },
    {
      "postCode": "3814",
      "suburb": "GARFIELD NORTH"
    },
    {
      "postCode": "3352",
      "suburb": "GARIBALDI"
    },
    {
      "postCode": "3265",
      "suburb": "GARVOC"
    },
    {
      "postCode": "3691",
      "suburb": "GATEWAY ISLAND"
    },
    {
      "postCode": "3407",
      "suburb": "GATUM"
    },
    {
      "postCode": "3289",
      "suburb": "GAZETTE"
    },
    {
      "postCode": "3220",
      "suburb": "GEELONG"
    },
    {
      "postCode": "3221",
      "suburb": "GEELONG MC"
    },
    {
      "postCode": "3215",
      "suburb": "GEELONG NORTH"
    },
    {
      "postCode": "3218",
      "suburb": "GEELONG WEST"
    },
    {
      "postCode": "3885",
      "suburb": "GELANTIPY"
    },
    {
      "postCode": "3239",
      "suburb": "GELLIBRAND"
    },
    {
      "postCode": "3237",
      "suburb": "GELLIBRAND LOWER"
    },
    {
      "postCode": "3971",
      "suburb": "GELLIONDALE"
    },
    {
      "postCode": "3783",
      "suburb": "GEMBROOK"
    },
    {
      "postCode": "3891",
      "suburb": "GENOA"
    },
    {
      "postCode": "3833",
      "suburb": "GENTLE ANNIE"
    },
    {
      "postCode": "3700",
      "suburb": "GEORGES CREEK"
    },
    {
      "postCode": "3546",
      "suburb": "GERAHMIN"
    },
    {
      "postCode": "3418",
      "suburb": "GERANG GERUNG"
    },
    {
      "postCode": "3249",
      "suburb": "GERANGAMETE"
    },
    {
      "postCode": "3387",
      "suburb": "GERMANIA"
    },
    {
      "postCode": "3741",
      "suburb": "GERMANTOWN"
    },
    {
      "postCode": "3289",
      "suburb": "GERRIGERRUP"
    },
    {
      "postCode": "3240",
      "suburb": "GHERANG"
    },
    {
      "postCode": "3331",
      "suburb": "GHERINGHAP"
    },
    {
      "postCode": "3717",
      "suburb": "GHIN GHIN"
    },
    {
      "postCode": "3851",
      "suburb": "GIFFARD"
    },
    {
      "postCode": "3851",
      "suburb": "GIFFARD WEST"
    },
    {
      "postCode": "3480",
      "suburb": "GIL GIL"
    },
    {
      "postCode": "3072",
      "suburb": "GILBERTON"
    },
    {
      "postCode": "3797",
      "suburb": "GILDEROY"
    },
    {
      "postCode": "3616",
      "suburb": "GILLIESTON"
    },
    {
      "postCode": "3858",
      "suburb": "GILLUM"
    },
    {
      "postCode": "3841",
      "suburb": "GIPPSLAND MC"
    },
    {
      "postCode": "3891",
      "suburb": "GIPSY POINT"
    },
    {
      "postCode": "3624",
      "suburb": "GIRGARRE"
    },
    {
      "postCode": "3616",
      "suburb": "GIRGARRE EAST"
    },
    {
      "postCode": "3437",
      "suburb": "GISBORNE"
    },
    {
      "postCode": "3437",
      "suburb": "GISBORNE SOUTH"
    },
    {
      "postCode": "3575",
      "suburb": "GLADFIELD"
    },
    {
      "postCode": "3043",
      "suburb": "GLADSTONE PARK"
    },
    {
      "postCode": "3797",
      "suburb": "GLADYSDALE"
    },
    {
      "postCode": "3979",
      "suburb": "GLEN ALVIE"
    },
    {
      "postCode": "3691",
      "suburb": "GLEN CREEK"
    },
    {
      "postCode": "3990",
      "suburb": "GLEN FORBES"
    },
    {
      "postCode": "3163",
      "suburb": "GLEN HUNTLY"
    },
    {
      "postCode": "3146",
      "suburb": "GLEN IRIS"
    },
    {
      "postCode": "3352",
      "suburb": "GLEN PARK"
    },
    {
      "postCode": "3898",
      "suburb": "GLEN VALLEY"
    },
    {
      "postCode": "3150",
      "suburb": "GLEN WAVERLEY"
    },
    {
      "postCode": "3898",
      "suburb": "GLEN WILLS"
    },
    {
      "postCode": "3238",
      "suburb": "GLENAIRE"
    },
    {
      "postCode": "3864",
      "suburb": "GLENALADALE"
    },
    {
      "postCode": "3517",
      "suburb": "GLENALBYN"
    },
    {
      "postCode": "3764",
      "suburb": "GLENAROUA"
    },
    {
      "postCode": "3352",
      "suburb": "GLENBRAE"
    },
    {
      "postCode": "3717",
      "suburb": "GLENBURN"
    },
    {
      "postCode": "3363",
      "suburb": "GLENDARUEL"
    },
    {
      "postCode": "3364",
      "suburb": "GLENDONALD"
    },
    {
      "postCode": "3858",
      "suburb": "GLENFALLOCH"
    },
    {
      "postCode": "3122",
      "suburb": "GLENFERRIE SOUTH"
    },
    {
      "postCode": "3266",
      "suburb": "GLENFYNE"
    },
    {
      "postCode": "3020",
      "suburb": "GLENGALA"
    },
    {
      "postCode": "3854",
      "suburb": "GLENGARRY"
    },
    {
      "postCode": "3854",
      "suburb": "GLENGARRY NORTH"
    },
    {
      "postCode": "3854",
      "suburb": "GLENGARRY WEST"
    },
    {
      "postCode": "3370",
      "suburb": "GLENGOWER"
    },
    {
      "postCode": "3444",
      "suburb": "GLENHOPE"
    },
    {
      "postCode": "3522",
      "suburb": "GLENHOPE EAST"
    },
    {
      "postCode": "3314",
      "suburb": "GLENISLA"
    },
    {
      "postCode": "3418",
      "suburb": "GLENLEE"
    },
    {
      "postCode": "3469",
      "suburb": "GLENLOFTY"
    },
    {
      "postCode": "3469",
      "suburb": "GLENLOGIE"
    },
    {
      "postCode": "3527",
      "suburb": "GLENLOTH"
    },
    {
      "postCode": "3527",
      "suburb": "GLENLOTH EAST"
    },
    {
      "postCode": "3451",
      "suburb": "GLENLUCE"
    },
    {
      "postCode": "3461",
      "suburb": "GLENLYON"
    },
    {
      "postCode": "3858",
      "suburb": "GLENMAGGIE"
    },
    {
      "postCode": "3340",
      "suburb": "GLENMORE"
    },
    {
      "postCode": "3385",
      "suburb": "GLENORCHY"
    },
    {
      "postCode": "3265",
      "suburb": "GLENORMISTON"
    },
    {
      "postCode": "3265",
      "suburb": "GLENORMISTON NORTH"
    },
    {
      "postCode": "3265",
      "suburb": "GLENORMISTON SOUTH"
    },
    {
      "postCode": "3469",
      "suburb": "GLENPATRICK"
    },
    {
      "postCode": "3675",
      "suburb": "GLENROWAN"
    },
    {
      "postCode": "3675",
      "suburb": "GLENROWAN WEST"
    },
    {
      "postCode": "3046",
      "suburb": "GLENROY"
    },
    {
      "postCode": "3293",
      "suburb": "GLENTHOMPSON"
    },
    {
      "postCode": "3851",
      "suburb": "GLOMAR BEACH"
    },
    {
      "postCode": "3221",
      "suburb": "GNARWARRE"
    },
    {
      "postCode": "3260",
      "suburb": "GNOTUK"
    },
    {
      "postCode": "3559",
      "suburb": "GOBARUP"
    },
    {
      "postCode": "3719",
      "suburb": "GOBUR"
    },
    {
      "postCode": "3851",
      "suburb": "GOLDEN BEACH"
    },
    {
      "postCode": "3555",
      "suburb": "GOLDEN GULLY"
    },
    {
      "postCode": "3350",
      "suburb": "GOLDEN POINT"
    },
    {
      "postCode": "3451",
      "suburb": "GOLDEN POINT"
    },
    {
      "postCode": "3465",
      "suburb": "GOLDEN POINT"
    },
    {
      "postCode": "3555",
      "suburb": "GOLDEN SQUARE"
    },
    {
      "postCode": "3435",
      "suburb": "GOLDIE"
    },
    {
      "postCode": "3472",
      "suburb": "GOLDSBOROUGH"
    },
    {
      "postCode": "3352",
      "suburb": "GONG GONG"
    },
    {
      "postCode": "3579",
      "suburb": "GONN CROSSING"
    },
    {
      "postCode": "3673",
      "suburb": "GOOMALIBEE"
    },
    {
      "postCode": "3875",
      "suburb": "GOON NURE"
    },
    {
      "postCode": "3888",
      "suburb": "GOONGERAH"
    },
    {
      "postCode": "3666",
      "suburb": "GOORAM"
    },
    {
      "postCode": "3685",
      "suburb": "GOORAMADDA"
    },
    {
      "postCode": "3725",
      "suburb": "GOORAMBAT"
    },
    {
      "postCode": "3557",
      "suburb": "GOORNONG"
    },
    {
      "postCode": "3477",
      "suburb": "GOOROC"
    },
    {
      "postCode": "3305",
      "suburb": "GORAE"
    },
    {
      "postCode": "3305",
      "suburb": "GORAE WEST"
    },
    {
      "postCode": "3345",
      "suburb": "GORDON"
    },
    {
      "postCode": "3873",
      "suburb": "GORMANDALE"
    },
    {
      "postCode": "3412",
      "suburb": "GOROKE"
    },
    {
      "postCode": "3585",
      "suburb": "GOSCHEN"
    },
    {
      "postCode": "3723",
      "suburb": "GOUGHS BAY"
    },
    {
      "postCode": "3608",
      "suburb": "GOULBURN WEIR"
    },
    {
      "postCode": "3043",
      "suburb": "GOWANBRAE"
    },
    {
      "postCode": "3544",
      "suburb": "GOWANFORD"
    },
    {
      "postCode": "3669",
      "suburb": "GOWANGARDIE"
    },
    {
      "postCode": "3477",
      "suburb": "GOWAR EAST"
    },
    {
      "postCode": "3463",
      "suburb": "GOWER"
    },
    {
      "postCode": "3631",
      "suburb": "GRAHAMVALE"
    },
    {
      "postCode": "3314",
      "suburb": "GRAMPIANS"
    },
    {
      "postCode": "3870",
      "suburb": "GRAND RIDGE"
    },
    {
      "postCode": "3335",
      "suburb": "GRANGEFIELDS"
    },
    {
      "postCode": "3525",
      "suburb": "GRANITE FLAT"
    },
    {
      "postCode": "3875",
      "suburb": "GRANITE ROCK"
    },
    {
      "postCode": "3984",
      "suburb": "GRANTVILLE"
    },
    {
      "postCode": "3701",
      "suburb": "GRANYA"
    },
    {
      "postCode": "3409",
      "suburb": "GRASS FLAT"
    },
    {
      "postCode": "3302",
      "suburb": "GRASSDALE"
    },
    {
      "postCode": "3281",
      "suburb": "GRASSMERE"
    },
    {
      "postCode": "3477",
      "suburb": "GRAYS BRIDGE"
    },
    {
      "postCode": "3608",
      "suburb": "GRAYTOWN"
    },
    {
      "postCode": "3477",
      "suburb": "GRE GRE"
    },
    {
      "postCode": "3477",
      "suburb": "GRE GRE NORTH"
    },
    {
      "postCode": "3477",
      "suburb": "GRE GRE SOUTH"
    },
    {
      "postCode": "3685",
      "suburb": "GREAT SOUTHERN"
    },
    {
      "postCode": "3374",
      "suburb": "GREAT WESTERN"
    },
    {
      "postCode": "3537",
      "suburb": "GREDGWIN"
    },
    {
      "postCode": "3462",
      "suburb": "GREEN GULLY"
    },
    {
      "postCode": "3341",
      "suburb": "GREENDALE"
    },
    {
      "postCode": "3444",
      "suburb": "GREENHILL"
    },
    {
      "postCode": "3387",
      "suburb": "GREENS CREEK"
    },
    {
      "postCode": "3088",
      "suburb": "GREENSBOROUGH"
    },
    {
      "postCode": "3059",
      "suburb": "GREENVALE"
    },
    {
      "postCode": "3304",
      "suburb": "GREENWALD"
    },
    {
      "postCode": "3352",
      "suburb": "GRENVILLE"
    },
    {
      "postCode": "3675",
      "suburb": "GRETA"
    },
    {
      "postCode": "3675",
      "suburb": "GRETA SOUTH"
    },
    {
      "postCode": "3675",
      "suburb": "GRETA WEST"
    },
    {
      "postCode": "3234",
      "suburb": "GREY RIVER"
    },
    {
      "postCode": "3104",
      "suburb": "GREYTHORN"
    },
    {
      "postCode": "3315",
      "suburb": "GRINGEGALGONA"
    },
    {
      "postCode": "3315",
      "suburb": "GRITJURK"
    },
    {
      "postCode": "3216",
      "suburb": "GROVEDALE"
    },
    {
      "postCode": "3216",
      "suburb": "GROVEDALE EAST"
    },
    {
      "postCode": "3770",
      "suburb": "GRUYERE"
    },
    {
      "postCode": "3451",
      "suburb": "GUILDFORD"
    },
    {
      "postCode": "3566",
      "suburb": "GUNBOWER"
    },
    {
      "postCode": "3691",
      "suburb": "GUNDOWRING"
    },
    {
      "postCode": "3960",
      "suburb": "GUNYAH"
    },
    {
      "postCode": "3709",
      "suburb": "GUYS FOREST"
    },
    {
      "postCode": "3807",
      "suburb": "GUYS HILL"
    },
    {
      "postCode": "3401",
      "suburb": "GYMBOWEN"
    },
    {
      "postCode": "3351",
      "suburb": "HADDON"
    },
    {
      "postCode": "3046",
      "suburb": "HADFIELD"
    },
    {
      "postCode": "3803",
      "suburb": "HALLAM"
    },
    {
      "postCode": "3818",
      "suburb": "HALLORA"
    },
    {
      "postCode": "3381",
      "suburb": "HALLS GAP"
    },
    {
      "postCode": "3953",
      "suburb": "HALLSTON"
    },
    {
      "postCode": "3300",
      "suburb": "HAMILTON"
    },
    {
      "postCode": "3215",
      "suburb": "HAMLYN HEIGHTS"
    },
    {
      "postCode": "3188",
      "suburb": "HAMPTON"
    },
    {
      "postCode": "3188",
      "suburb": "HAMPTON EAST"
    },
    {
      "postCode": "3188",
      "suburb": "HAMPTON NORTH"
    },
    {
      "postCode": "3976",
      "suburb": "HAMPTON PARK"
    },
    {
      "postCode": "3675",
      "suburb": "HANSONVILLE"
    },
    {
      "postCode": "3360",
      "suburb": "HAPPY VALLEY"
    },
    {
      "postCode": "3549",
      "suburb": "HAPPY VALLEY"
    },
    {
      "postCode": "3453",
      "suburb": "HARCOURT"
    },
    {
      "postCode": "3453",
      "suburb": "HARCOURT NORTH"
    },
    {
      "postCode": "3806",
      "suburb": "HARKAWAY"
    },
    {
      "postCode": "3337",
      "suburb": "HARKNESS"
    },
    {
      "postCode": "3995",
      "suburb": "HARMERS HAVEN"
    },
    {
      "postCode": "3741",
      "suburb": "HARRIETVILLE"
    },
    {
      "postCode": "3317",
      "suburb": "HARROW"
    },
    {
      "postCode": "3616",
      "suburb": "HARSTON"
    },
    {
      "postCode": "3124",
      "suburb": "HARTWELL"
    },
    {
      "postCode": "3915",
      "suburb": "HASTINGS"
    },
    {
      "postCode": "3501",
      "suburb": "HATTAH"
    },
    {
      "postCode": "3465",
      "suburb": "HAVELOCK"
    },
    {
      "postCode": "3401",
      "suburb": "HAVEN"
    },
    {
      "postCode": "3737",
      "suburb": "HAVILAH"
    },
    {
      "postCode": "3287",
      "suburb": "HAWKESDALE"
    },
    {
      "postCode": "3862",
      "suburb": "HAWKHURST"
    },
    {
      "postCode": "3142",
      "suburb": "HAWKSBURN"
    },
    {
      "postCode": "3122",
      "suburb": "HAWTHORN"
    },
    {
      "postCode": "3123",
      "suburb": "HAWTHORN EAST"
    },
    {
      "postCode": "3122",
      "suburb": "HAWTHORN NORTH"
    },
    {
      "postCode": "3122",
      "suburb": "HAWTHORN WEST"
    },
    {
      "postCode": "3888",
      "suburb": "HAYDENS BOG"
    },
    {
      "postCode": "3966",
      "suburb": "HAZEL PARK"
    },
    {
      "postCode": "3658",
      "suburb": "HAZELDENE"
    },
    {
      "postCode": "3840",
      "suburb": "HAZELWOOD"
    },
    {
      "postCode": "3840",
      "suburb": "HAZELWOOD NORTH"
    },
    {
      "postCode": "3840",
      "suburb": "HAZELWOOD SOUTH"
    },
    {
      "postCode": "3777",
      "suburb": "HEALESVILLE"
    },
    {
      "postCode": "3777",
      "suburb": "HEALESVILLE MAIN STREET"
    },
    {
      "postCode": "3981",
      "suburb": "HEATH HILL"
    },
    {
      "postCode": "3523",
      "suburb": "HEATHCOTE"
    },
    {
      "postCode": "3758",
      "suburb": "HEATHCOTE JUNCTION"
    },
    {
      "postCode": "3523",
      "suburb": "HEATHCOTE SOUTH"
    },
    {
      "postCode": "3202",
      "suburb": "HEATHERTON"
    },
    {
      "postCode": "3305",
      "suburb": "HEATHMERE"
    },
    {
      "postCode": "3135",
      "suburb": "HEATHMONT"
    },
    {
      "postCode": "3134",
      "suburb": "HEATHWOOD"
    },
    {
      "postCode": "3967",
      "suburb": "HEDLEY"
    },
    {
      "postCode": "3084",
      "suburb": "HEIDELBERG"
    },
    {
      "postCode": "3081",
      "suburb": "HEIDELBERG HEIGHTS"
    },
    {
      "postCode": "3081",
      "suburb": "HEIDELBERG RGH"
    },
    {
      "postCode": "3081",
      "suburb": "HEIDELBERG WEST"
    },
    {
      "postCode": "3301",
      "suburb": "HENSLEY PARK"
    },
    {
      "postCode": "3312",
      "suburb": "HENTY"
    },
    {
      "postCode": "3461",
      "suburb": "HEPBURN"
    },
    {
      "postCode": "3461",
      "suburb": "HEPBURN SPRINGS"
    },
    {
      "postCode": "3218",
      "suburb": "HERNE HILL"
    },
    {
      "postCode": "3825",
      "suburb": "HERNES OAK"
    },
    {
      "postCode": "3442",
      "suburb": "HESKET"
    },
    {
      "postCode": "3321",
      "suburb": "HESSE"
    },
    {
      "postCode": "3273",
      "suburb": "HEXHAM"
    },
    {
      "postCode": "3858",
      "suburb": "HEYFIELD"
    },
    {
      "postCode": "3268",
      "suburb": "HEYTESBURY LOWER"
    },
    {
      "postCode": "3304",
      "suburb": "HEYWOOD"
    },
    {
      "postCode": "3847",
      "suburb": "HIAMDALE"
    },
    {
      "postCode": "3971",
      "suburb": "HIAWATHA"
    },
    {
      "postCode": "3764",
      "suburb": "HIGH CAMP"
    },
    {
      "postCode": "3190",
      "suburb": "HIGHETT"
    },
    {
      "postCode": "3660",
      "suburb": "HIGHLANDS"
    },
    {
      "postCode": "3032",
      "suburb": "HIGHPOINT CITY"
    },
    {
      "postCode": "3216",
      "suburb": "HIGHTON"
    },
    {
      "postCode": "3315",
      "suburb": "HILGAY"
    },
    {
      "postCode": "3825",
      "suburb": "HILL END"
    },
    {
      "postCode": "3351",
      "suburb": "HILLCREST"
    },
    {
      "postCode": "3660",
      "suburb": "HILLDENE"
    },
    {
      "postCode": "3037",
      "suburb": "HILLSIDE"
    },
    {
      "postCode": "3875",
      "suburb": "HILLSIDE"
    },
    {
      "postCode": "3898",
      "suburb": "HINNOMUNJIE"
    },
    {
      "postCode": "3920",
      "suburb": "HMAS CERBERUS"
    },
    {
      "postCode": "3139",
      "suburb": "HODDLES CREEK"
    },
    {
      "postCode": "3862",
      "suburb": "HOLLANDS LANDING"
    },
    {
      "postCode": "3148",
      "suburb": "HOLMESGLEN"
    },
    {
      "postCode": "3465",
      "suburb": "HOMEBUSH"
    },
    {
      "postCode": "3304",
      "suburb": "HOMERTON"
    },
    {
      "postCode": "3717",
      "suburb": "HOMEWOOD"
    },
    {
      "postCode": "3396",
      "suburb": "HOPETOUN"
    },
    {
      "postCode": "3162",
      "suburb": "HOPETOUN GARDENS"
    },
    {
      "postCode": "3340",
      "suburb": "HOPETOUN PARK"
    },
    {
      "postCode": "3029",
      "suburb": "HOPPERS CROSSING"
    },
    {
      "postCode": "3238",
      "suburb": "HORDERN VALE"
    },
    {
      "postCode": "3567",
      "suburb": "HORFIELD"
    },
    {
      "postCode": "3400",
      "suburb": "HORSHAM"
    },
    {
      "postCode": "3402",
      "suburb": "HORSHAM"
    },
    {
      "postCode": "3741",
      "suburb": "HOTHAM HEIGHTS"
    },
    {
      "postCode": "3051",
      "suburb": "HOTHAM HILL"
    },
    {
      "postCode": "3303",
      "suburb": "HOTSPUR"
    },
    {
      "postCode": "3128",
      "suburb": "HOUSTON"
    },
    {
      "postCode": "3723",
      "suburb": "HOWES CREEK"
    },
    {
      "postCode": "3858",
      "suburb": "HOWITT PLAINS"
    },
    {
      "postCode": "3723",
      "suburb": "HOWQUA"
    },
    {
      "postCode": "3723",
      "suburb": "HOWQUA HILLS"
    },
    {
      "postCode": "3723",
      "suburb": "HOWQUA INLET"
    },
    {
      "postCode": "3166",
      "suburb": "HUGHESDALE"
    },
    {
      "postCode": "3757",
      "suburb": "HUMEVALE"
    },
    {
      "postCode": "3558",
      "suburb": "HUNTER"
    },
    {
      "postCode": "3971",
      "suburb": "HUNTERSTON"
    },
    {
      "postCode": "3166",
      "suburb": "HUNTINGDALE"
    },
    {
      "postCode": "3551",
      "suburb": "HUNTLY"
    },
    {
      "postCode": "3551",
      "suburb": "HUNTLY NORTH"
    },
    {
      "postCode": "3695",
      "suburb": "HUON"
    },
    {
      "postCode": "3691",
      "suburb": "HUON CREEK"
    },
    {
      "postCode": "3099",
      "suburb": "HURSTBRIDGE"
    },
    {
      "postCode": "3833",
      "suburb": "ICY CREEK"
    },
    {
      "postCode": "3875",
      "suburb": "IGUANA CREEK"
    },
    {
      "postCode": "3351",
      "suburb": "ILLABAROOK"
    },
    {
      "postCode": "3381",
      "suburb": "ILLAWARRA"
    },
    {
      "postCode": "3282",
      "suburb": "ILLOWA"
    },
    {
      "postCode": "3223",
      "suburb": "INDENTED HEAD"
    },
    {
      "postCode": "3688",
      "suburb": "INDIGO VALLEY"
    },
    {
      "postCode": "3517",
      "suburb": "INGLEWOOD"
    },
    {
      "postCode": "3342",
      "suburb": "INGLISTON"
    },
    {
      "postCode": "3472",
      "suburb": "INKERMAN"
    },
    {
      "postCode": "3636",
      "suburb": "INVERGORDON"
    },
    {
      "postCode": "3321",
      "suburb": "INVERLEIGH"
    },
    {
      "postCode": "3996",
      "suburb": "INVERLOCH"
    },
    {
      "postCode": "3352",
      "suburb": "INVERMAY"
    },
    {
      "postCode": "3350",
      "suburb": "INVERMAY PARK"
    },
    {
      "postCode": "3815",
      "suburb": "IONA"
    },
    {
      "postCode": "3494",
      "suburb": "IRAAK"
    },
    {
      "postCode": "3451",
      "suburb": "IRISHTOWN"
    },
    {
      "postCode": "3550",
      "suburb": "IRONBARK"
    },
    {
      "postCode": "3249",
      "suburb": "IRREWARRA"
    },
    {
      "postCode": "3249",
      "suburb": "IRREWILLIPE"
    },
    {
      "postCode": "3249",
      "suburb": "IRREWILLIPE EAST"
    },
    {
      "postCode": "3498",
      "suburb": "IRYMPLE"
    },
    {
      "postCode": "3079",
      "suburb": "IVANHOE"
    },
    {
      "postCode": "3079",
      "suburb": "IVANHOE EAST"
    },
    {
      "postCode": "3079",
      "suburb": "IVANHOE NORTH"
    },
    {
      "postCode": "3047",
      "suburb": "JACANA"
    },
    {
      "postCode": "3971",
      "suburb": "JACK RIVER"
    },
    {
      "postCode": "3556",
      "suburb": "JACKASS FLAT"
    },
    {
      "postCode": "3825",
      "suburb": "JACOB CREEK"
    },
    {
      "postCode": "3984",
      "suburb": "JAM JERRUP"
    },
    {
      "postCode": "3723",
      "suburb": "JAMIESON"
    },
    {
      "postCode": "3228",
      "suburb": "JAN JUC"
    },
    {
      "postCode": "3266",
      "suburb": "JANCOURT"
    },
    {
      "postCode": "3266",
      "suburb": "JANCOURT EAST"
    },
    {
      "postCode": "3517",
      "suburb": "JARKLIN"
    },
    {
      "postCode": "3888",
      "suburb": "JARRAHMOND"
    },
    {
      "postCode": "3700",
      "suburb": "JARVIS CREEK"
    },
    {
      "postCode": "3840",
      "suburb": "JEERALANG"
    },
    {
      "postCode": "3840",
      "suburb": "JEERALANG JUNCTION"
    },
    {
      "postCode": "3945",
      "suburb": "JEETHO"
    },
    {
      "postCode": "3480",
      "suburb": "JEFFCOTT"
    },
    {
      "postCode": "3480",
      "suburb": "JEFFCOTT NORTH"
    },
    {
      "postCode": "3423",
      "suburb": "JEPARIT"
    },
    {
      "postCode": "3825",
      "suburb": "JERICHO"
    },
    {
      "postCode": "3527",
      "suburb": "JERUK"
    },
    {
      "postCode": "3483",
      "suburb": "JIL JIL"
    },
    {
      "postCode": "3409",
      "suburb": "JILPANGER"
    },
    {
      "postCode": "3818",
      "suburb": "JINDIVICK"
    },
    {
      "postCode": "3384",
      "suburb": "JOEL JOEL"
    },
    {
      "postCode": "3384",
      "suburb": "JOEL SOUTH"
    },
    {
      "postCode": "3238",
      "suburb": "JOHANNA"
    },
    {
      "postCode": "3902",
      "suburb": "JOHNSONVILLE"
    },
    {
      "postCode": "3870",
      "suburb": "JOHNSTONES HILL"
    },
    {
      "postCode": "3148",
      "suburb": "JORDANVILLE"
    },
    {
      "postCode": "3364",
      "suburb": "JOYCES CREEK"
    },
    {
      "postCode": "3869",
      "suburb": "JUMBUK"
    },
    {
      "postCode": "3951",
      "suburb": "JUMBUNNA"
    },
    {
      "postCode": "3977",
      "suburb": "JUNCTION VILLAGE"
    },
    {
      "postCode": "3401",
      "suburb": "JUNG"
    },
    {
      "postCode": "3575",
      "suburb": "JUNGABURRA"
    },
    {
      "postCode": "3551",
      "suburb": "JUNORTOUN"
    },
    {
      "postCode": "3635",
      "suburb": "KAARIMBA"
    },
    {
      "postCode": "3318",
      "suburb": "KADNOOK"
    },
    {
      "postCode": "3909",
      "suburb": "KALIMNA"
    },
    {
      "postCode": "3909",
      "suburb": "KALIMNA WEST"
    },
    {
      "postCode": "3064",
      "suburb": "KALKALLO"
    },
    {
      "postCode": "3401",
      "suburb": "KALKEE"
    },
    {
      "postCode": "3791",
      "suburb": "KALLISTA"
    },
    {
      "postCode": "3766",
      "suburb": "KALORAMA"
    },
    {
      "postCode": "3529",
      "suburb": "KALPIENUNG"
    },
    {
      "postCode": "3570",
      "suburb": "KAMAROOKA"
    },
    {
      "postCode": "3571",
      "suburb": "KAMAROOKA NORTH"
    },
    {
      "postCode": "3401",
      "suburb": "KANAGULK"
    },
    {
      "postCode": "3691",
      "suburb": "KANCOONA"
    },
    {
      "postCode": "3555",
      "suburb": "KANGAROO FLAT"
    },
    {
      "postCode": "3097",
      "suburb": "KANGAROO GROUND"
    },
    {
      "postCode": "3419",
      "suburb": "KANIVA"
    },
    {
      "postCode": "3719",
      "suburb": "KANUMBRA"
    },
    {
      "postCode": "3387",
      "suburb": "KANYA"
    },
    {
      "postCode": "3564",
      "suburb": "KANYAPELLA"
    },
    {
      "postCode": "3294",
      "suburb": "KARABEAL"
    },
    {
      "postCode": "3951",
      "suburb": "KARDELLA"
    },
    {
      "postCode": "3950",
      "suburb": "KARDELLA SOUTH"
    },
    {
      "postCode": "3260",
      "suburb": "KARIAH"
    },
    {
      "postCode": "3199",
      "suburb": "KARINGAL"
    },
    {
      "postCode": "3199",
      "suburb": "KARINGAL CENTRE"
    },
    {
      "postCode": "3401",
      "suburb": "KARNAK"
    },
    {
      "postCode": "3631",
      "suburb": "KARRAMOMUS"
    },
    {
      "postCode": "3483",
      "suburb": "KARYRIE"
    },
    {
      "postCode": "3649",
      "suburb": "KATAMATITE"
    },
    {
      "postCode": "3649",
      "suburb": "KATAMATITE EAST"
    },
    {
      "postCode": "3634",
      "suburb": "KATANDRA"
    },
    {
      "postCode": "3634",
      "suburb": "KATANDRA WEST"
    },
    {
      "postCode": "3640",
      "suburb": "KATUNGA"
    },
    {
      "postCode": "3249",
      "suburb": "KAWARREN"
    },
    {
      "postCode": "3021",
      "suburb": "KEALBA"
    },
    {
      "postCode": "3568",
      "suburb": "KEELY"
    },
    {
      "postCode": "3036",
      "suburb": "KEILOR"
    },
    {
      "postCode": "3038",
      "suburb": "KEILOR DOWNS"
    },
    {
      "postCode": "3033",
      "suburb": "KEILOR EAST"
    },
    {
      "postCode": "3038",
      "suburb": "KEILOR LODGE"
    },
    {
      "postCode": "3036",
      "suburb": "KEILOR NORTH"
    },
    {
      "postCode": "3042",
      "suburb": "KEILOR PARK"
    },
    {
      "postCode": "3393",
      "suburb": "KELLALAC"
    },
    {
      "postCode": "3666",
      "suburb": "KELVIN VIEW"
    },
    {
      "postCode": "3597",
      "suburb": "KENLEY"
    },
    {
      "postCode": "3395",
      "suburb": "KENMARE"
    },
    {
      "postCode": "3239",
      "suburb": "KENNEDYS CREEK"
    },
    {
      "postCode": "3234",
      "suburb": "KENNETT RIVER"
    },
    {
      "postCode": "3550",
      "suburb": "KENNINGTON"
    },
    {
      "postCode": "3031",
      "suburb": "KENSINGTON"
    },
    {
      "postCode": "3579",
      "suburb": "KERANG"
    },
    {
      "postCode": "3579",
      "suburb": "KERANG EAST"
    },
    {
      "postCode": "3691",
      "suburb": "KERGUNYAH"
    },
    {
      "postCode": "3691",
      "suburb": "KERGUNYAH SOUTH"
    },
    {
      "postCode": "3979",
      "suburb": "KERNOT"
    },
    {
      "postCode": "3434",
      "suburb": "KERRIE"
    },
    {
      "postCode": "3129",
      "suburb": "KERRIMUIR"
    },
    {
      "postCode": "3660",
      "suburb": "KERRISDALE"
    },
    {
      "postCode": "3723",
      "suburb": "KEVINGTON"
    },
    {
      "postCode": "3101",
      "suburb": "KEW"
    },
    {
      "postCode": "3102",
      "suburb": "KEW EAST"
    },
    {
      "postCode": "3390",
      "suburb": "KEWELL"
    },
    {
      "postCode": "3173",
      "suburb": "KEYSBOROUGH"
    },
    {
      "postCode": "3631",
      "suburb": "KIALLA"
    },
    {
      "postCode": "3631",
      "suburb": "KIALLA EAST"
    },
    {
      "postCode": "3631",
      "suburb": "KIALLA WEST"
    },
    {
      "postCode": "3418",
      "suburb": "KIATA"
    },
    {
      "postCode": "3691",
      "suburb": "KIEWA"
    },
    {
      "postCode": "3995",
      "suburb": "KILCUNDA"
    },
    {
      "postCode": "3312",
      "suburb": "KILLARA"
    },
    {
      "postCode": "3691",
      "suburb": "KILLARA"
    },
    {
      "postCode": "3283",
      "suburb": "KILLARNEY"
    },
    {
      "postCode": "3678",
      "suburb": "KILLAWARRA"
    },
    {
      "postCode": "3717",
      "suburb": "KILLINGWORTH"
    },
    {
      "postCode": "3851",
      "suburb": "KILMANY"
    },
    {
      "postCode": "3764",
      "suburb": "KILMORE"
    },
    {
      "postCode": "3764",
      "suburb": "KILMORE EAST"
    },
    {
      "postCode": "3137",
      "suburb": "KILSYTH"
    },
    {
      "postCode": "3137",
      "suburb": "KILSYTH SOUTH"
    },
    {
      "postCode": "3551",
      "suburb": "KIMBOLTON"
    },
    {
      "postCode": "3678",
      "suburb": "KING VALLEY"
    },
    {
      "postCode": "3763",
      "suburb": "KINGLAKE"
    },
    {
      "postCode": "3757",
      "suburb": "KINGLAKE CENTRAL"
    },
    {
      "postCode": "3757",
      "suburb": "KINGLAKE WEST"
    },
    {
      "postCode": "3517",
      "suburb": "KINGOWER"
    },
    {
      "postCode": "3021",
      "suburb": "KINGS PARK"
    },
    {
      "postCode": "3083",
      "suburb": "KINGSBURY"
    },
    {
      "postCode": "3364",
      "suburb": "KINGSTON"
    },
    {
      "postCode": "3012",
      "suburb": "KINGSVILLE"
    },
    {
      "postCode": "3483",
      "suburb": "KINNABULLA"
    },
    {
      "postCode": "3520",
      "suburb": "KINYPANIAL"
    },
    {
      "postCode": "3283",
      "suburb": "KIRKSTALL"
    },
    {
      "postCode": "3608",
      "suburb": "KIRWANS BRIDGE"
    },
    {
      "postCode": "3666",
      "suburb": "KITHBROOK"
    },
    {
      "postCode": "3286",
      "suburb": "KNEBSWORTH"
    },
    {
      "postCode": "3723",
      "suburb": "KNOCKWOOD"
    },
    {
      "postCode": "3523",
      "suburb": "KNOWSLEY"
    },
    {
      "postCode": "3152",
      "suburb": "KNOX CITY CENTRE"
    },
    {
      "postCode": "3180",
      "suburb": "KNOXFIELD"
    },
    {
      "postCode": "3260",
      "suburb": "KOALLAH"
    },
    {
      "postCode": "3704",
      "suburb": "KOETONG"
    },
    {
      "postCode": "3265",
      "suburb": "KOLORA"
    },
    {
      "postCode": "3951",
      "suburb": "KONGWAK"
    },
    {
      "postCode": "3315",
      "suburb": "KONONGWOOTONG"
    },
    {
      "postCode": "3981",
      "suburb": "KOO WEE RUP"
    },
    {
      "postCode": "3981",
      "suburb": "KOO WEE RUP NORTH"
    },
    {
      "postCode": "3597",
      "suburb": "KOOLOONONG"
    },
    {
      "postCode": "3669",
      "suburb": "KOONDA"
    },
    {
      "postCode": "3580",
      "suburb": "KOONDROOK"
    },
    {
      "postCode": "3644",
      "suburb": "KOONOOMOO"
    },
    {
      "postCode": "3954",
      "suburb": "KOONWARRA"
    },
    {
      "postCode": "3477",
      "suburb": "KOOREH"
    },
    {
      "postCode": "3501",
      "suburb": "KOORLONG"
    },
    {
      "postCode": "3844",
      "suburb": "KOORNALLA"
    },
    {
      "postCode": "3364",
      "suburb": "KOOROOCHEANG"
    },
    {
      "postCode": "3860",
      "suburb": "KOOROOL"
    },
    {
      "postCode": "3953",
      "suburb": "KOOROOMAN"
    },
    {
      "postCode": "3144",
      "suburb": "KOOYONG"
    },
    {
      "postCode": "3714",
      "suburb": "KORIELLA"
    },
    {
      "postCode": "3341",
      "suburb": "KOROBEIT"
    },
    {
      "postCode": "3282",
      "suburb": "KOROIT"
    },
    {
      "postCode": "3520",
      "suburb": "KORONG VALE"
    },
    {
      "postCode": "3579",
      "suburb": "KOROOP"
    },
    {
      "postCode": "3950",
      "suburb": "KORUMBURRA"
    },
    {
      "postCode": "3950",
      "suburb": "KORUMBURRA SOUTH"
    },
    {
      "postCode": "3461",
      "suburb": "KORWEINGUBOORA"
    },
    {
      "postCode": "3565",
      "suburb": "KOTTA"
    },
    {
      "postCode": "3638",
      "suburb": "KOTUPNA"
    },
    {
      "postCode": "3622",
      "suburb": "KOYUGA"
    },
    {
      "postCode": "3945",
      "suburb": "KROWERA"
    },
    {
      "postCode": "3490",
      "suburb": "KULWIN"
    },
    {
      "postCode": "3585",
      "suburb": "KUNAT"
    },
    {
      "postCode": "3930",
      "suburb": "KUNYUNG"
    },
    {
      "postCode": "3518",
      "suburb": "KURRACA"
    },
    {
      "postCode": "3518",
      "suburb": "KURRACA WEST"
    },
    {
      "postCode": "3517",
      "suburb": "KURTING"
    },
    {
      "postCode": "3337",
      "suburb": "KURUNJANG"
    },
    {
      "postCode": "3619",
      "suburb": "KYABRAM"
    },
    {
      "postCode": "3620",
      "suburb": "KYABRAM"
    },
    {
      "postCode": "3620",
      "suburb": "KYABRAM SOUTH"
    },
    {
      "postCode": "3444",
      "suburb": "KYNETON"
    },
    {
      "postCode": "3444",
      "suburb": "KYNETON SOUTH"
    },
    {
      "postCode": "3621",
      "suburb": "KYVALLEY"
    },
    {
      "postCode": "3083",
      "suburb": "LA TROBE UNIVERSITY"
    },
    {
      "postCode": "3086",
      "suburb": "LA TROBE UNIVERSITY"
    },
    {
      "postCode": "3463",
      "suburb": "LAANECOORIE"
    },
    {
      "postCode": "3265",
      "suburb": "LAANG"
    },
    {
      "postCode": "3816",
      "suburb": "LABERTOUCHE"
    },
    {
      "postCode": "3130",
      "suburb": "LABURNUM"
    },
    {
      "postCode": "3678",
      "suburb": "LACEBY"
    },
    {
      "postCode": "3523",
      "suburb": "LADYS PASS"
    },
    {
      "postCode": "3480",
      "suburb": "LAEN"
    },
    {
      "postCode": "3480",
      "suburb": "LAEN EAST"
    },
    {
      "postCode": "3480",
      "suburb": "LAEN NORTH"
    },
    {
      "postCode": "3393",
      "suburb": "LAH"
    },
    {
      "postCode": "3401",
      "suburb": "LAHARUM"
    },
    {
      "postCode": "3584",
      "suburb": "LAKE BOGA"
    },
    {
      "postCode": "3351",
      "suburb": "LAKE BOLAC"
    },
    {
      "postCode": "3909",
      "suburb": "LAKE BUNGA"
    },
    {
      "postCode": "3581",
      "suburb": "LAKE CHARM"
    },
    {
      "postCode": "3303",
      "suburb": "LAKE CONDAH"
    },
    {
      "postCode": "3713",
      "suburb": "LAKE EILDON"
    },
    {
      "postCode": "3551",
      "suburb": "LAKE EPPALOCK"
    },
    {
      "postCode": "3381",
      "suburb": "LAKE FYANS"
    },
    {
      "postCode": "3355",
      "suburb": "LAKE GARDENS"
    },
    {
      "postCode": "3373",
      "suburb": "LAKE GOLDSMITH"
    },
    {
      "postCode": "3381",
      "suburb": "LAKE LONSDALE"
    },
    {
      "postCode": "3525",
      "suburb": "LAKE MARMAL"
    },
    {
      "postCode": "3579",
      "suburb": "LAKE MERAN"
    },
    {
      "postCode": "3312",
      "suburb": "LAKE MUNDI"
    },
    {
      "postCode": "3597",
      "suburb": "LAKE POWELL"
    },
    {
      "postCode": "3727",
      "suburb": "LAKE ROWAN"
    },
    {
      "postCode": "3887",
      "suburb": "LAKE TYERS"
    },
    {
      "postCode": "3909",
      "suburb": "LAKE TYERS BEACH"
    },
    {
      "postCode": "3533",
      "suburb": "LAKE TYRRELL"
    },
    {
      "postCode": "3851",
      "suburb": "LAKE WELLINGTON"
    },
    {
      "postCode": "3350",
      "suburb": "LAKE WENDOUREE"
    },
    {
      "postCode": "3373",
      "suburb": "LAKE WONGAN"
    },
    {
      "postCode": "3909",
      "suburb": "LAKES ENTRANCE"
    },
    {
      "postCode": "3352",
      "suburb": "LAL LAL"
    },
    {
      "postCode": "3542",
      "suburb": "LALBERT"
    },
    {
      "postCode": "3075",
      "suburb": "LALOR"
    },
    {
      "postCode": "3352",
      "suburb": "LAMPLOUGH"
    },
    {
      "postCode": "3620",
      "suburb": "LANCASTER"
    },
    {
      "postCode": "3995",
      "suburb": "LANCE CREEK"
    },
    {
      "postCode": "3435",
      "suburb": "LANCEFIELD"
    },
    {
      "postCode": "3384",
      "suburb": "LANDSBOROUGH"
    },
    {
      "postCode": "3384",
      "suburb": "LANDSBOROUGH WEST"
    },
    {
      "postCode": "3984",
      "suburb": "LANG LANG"
    },
    {
      "postCode": "3984",
      "suburb": "LANG LANG EAST"
    },
    {
      "postCode": "3363",
      "suburb": "LANGDONS HILL"
    },
    {
      "postCode": "3352",
      "suburb": "LANGI KAL KAL"
    },
    {
      "postCode": "3377",
      "suburb": "LANGI LOGAN"
    },
    {
      "postCode": "3318",
      "suburb": "LANGKOOP"
    },
    {
      "postCode": "3444",
      "suburb": "LANGLEY"
    },
    {
      "postCode": "3971",
      "suburb": "LANGSBOROUGH"
    },
    {
      "postCode": "3910",
      "suburb": "LANGWARRIN"
    },
    {
      "postCode": "3911",
      "suburb": "LANGWARRIN SOUTH"
    },
    {
      "postCode": "3555",
      "suburb": "LANSELL PLAZA"
    },
    {
      "postCode": "3212",
      "suburb": "LARA"
    },
    {
      "postCode": "3821",
      "suburb": "LARDNER"
    },
    {
      "postCode": "3249",
      "suburb": "LARPENT"
    },
    {
      "postCode": "3325",
      "suburb": "LARRALEA"
    },
    {
      "postCode": "3487",
      "suburb": "LASCELLES"
    },
    {
      "postCode": "3139",
      "suburb": "LAUNCHING PLACE"
    },
    {
      "postCode": "3444",
      "suburb": "LAURISTON"
    },
    {
      "postCode": "3238",
      "suburb": "LAVERS HILL"
    },
    {
      "postCode": "3028",
      "suburb": "LAVERTON"
    },
    {
      "postCode": "3026",
      "suburb": "LAVERTON NORTH"
    },
    {
      "postCode": "8010",
      "suburb": "LAW COURTS"
    },
    {
      "postCode": "3480",
      "suburb": "LAWLER"
    },
    {
      "postCode": "3418",
      "suburb": "LAWLOIT"
    },
    {
      "postCode": "3364",
      "suburb": "LAWRENCE"
    },
    {
      "postCode": "3537",
      "suburb": "LEAGHUR"
    },
    {
      "postCode": "3352",
      "suburb": "LEARMONTH"
    },
    {
      "postCode": "3385",
      "suburb": "LEDCOURT"
    },
    {
      "postCode": "3516",
      "suburb": "LEICHARDT"
    },
    {
      "postCode": "3352",
      "suburb": "LEIGH CREEK"
    },
    {
      "postCode": "3567",
      "suburb": "LEITCHVILLE"
    },
    {
      "postCode": "3631",
      "suburb": "LEMNOS"
    },
    {
      "postCode": "3691",
      "suburb": "LENEVA"
    },
    {
      "postCode": "3461",
      "suburb": "LEONARDS HILL"
    },
    {
      "postCode": "3953",
      "suburb": "LEONGATHA"
    },
    {
      "postCode": "3953",
      "suburb": "LEONGATHA NORTH"
    },
    {
      "postCode": "3953",
      "suburb": "LEONGATHA SOUTH"
    },
    {
      "postCode": "3224",
      "suburb": "LEOPOLD"
    },
    {
      "postCode": "3458",
      "suburb": "LERDERDERG"
    },
    {
      "postCode": "3260",
      "suburb": "LESLIE MANOR"
    },
    {
      "postCode": "3332",
      "suburb": "LETHBRIDGE"
    },
    {
      "postCode": "3352",
      "suburb": "LEXTON"
    },
    {
      "postCode": "3858",
      "suburb": "LICOLA"
    },
    {
      "postCode": "3858",
      "suburb": "LICOLA NORTH"
    },
    {
      "postCode": "3820",
      "suburb": "LILLICO"
    },
    {
      "postCode": "3371",
      "suburb": "LILLICUR"
    },
    {
      "postCode": "3420",
      "suburb": "LILLIMUR"
    },
    {
      "postCode": "3682",
      "suburb": "LILLIPUT"
    },
    {
      "postCode": "3140",
      "suburb": "LILYDALE"
    },
    {
      "postCode": "3673",
      "suburb": "LIMA"
    },
    {
      "postCode": "3673",
      "suburb": "LIMA EAST"
    },
    {
      "postCode": "3673",
      "suburb": "LIMA SOUTH"
    },
    {
      "postCode": "3717",
      "suburb": "LIMESTONE"
    },
    {
      "postCode": "3865",
      "suburb": "LINDENOW"
    },
    {
      "postCode": "3875",
      "suburb": "LINDENOW SOUTH"
    },
    {
      "postCode": "3312",
      "suburb": "LINDSAY"
    },
    {
      "postCode": "3496",
      "suburb": "LINDSAY POINT"
    },
    {
      "postCode": "3509",
      "suburb": "LINGA"
    },
    {
      "postCode": "3360",
      "suburb": "LINTON"
    },
    {
      "postCode": "3549",
      "suburb": "LIPAROO"
    },
    {
      "postCode": "3324",
      "suburb": "LISMORE"
    },
    {
      "postCode": "3480",
      "suburb": "LITCHFIELD"
    },
    {
      "postCode": "3418",
      "suburb": "LITTLE DESERT"
    },
    {
      "postCode": "3458",
      "suburb": "LITTLE HAMPTON"
    },
    {
      "postCode": "8011",
      "suburb": "LITTLE LONSDALE STREET"
    },
    {
      "postCode": "3211",
      "suburb": "LITTLE RIVER"
    },
    {
      "postCode": "3551",
      "suburb": "LLANELLY"
    },
    {
      "postCode": "3862",
      "suburb": "LLOWALONG"
    },
    {
      "postCode": "3945",
      "suburb": "LOCH"
    },
    {
      "postCode": "3851",
      "suburb": "LOCH SPORT"
    },
    {
      "postCode": "3833",
      "suburb": "LOCH VALLEY"
    },
    {
      "postCode": "3563",
      "suburb": "LOCKINGTON"
    },
    {
      "postCode": "3665",
      "suburb": "LOCKSLEY"
    },
    {
      "postCode": "3551",
      "suburb": "LOCKWOOD"
    },
    {
      "postCode": "3551",
      "suburb": "LOCKWOOD SOUTH"
    },
    {
      "postCode": "3575",
      "suburb": "LODDON VALE"
    },
    {
      "postCode": "3475",
      "suburb": "LOGAN"
    },
    {
      "postCode": "3678",
      "suburb": "LONDRIGAN"
    },
    {
      "postCode": "3340",
      "suburb": "LONG FOREST"
    },
    {
      "postCode": "3550",
      "suburb": "LONG GULLY"
    },
    {
      "postCode": "3401",
      "suburb": "LONGERENONG"
    },
    {
      "postCode": "3851",
      "suburb": "LONGFORD"
    },
    {
      "postCode": "3551",
      "suburb": "LONGLEA"
    },
    {
      "postCode": "3816",
      "suburb": "LONGWARRY"
    },
    {
      "postCode": "3816",
      "suburb": "LONGWARRY NORTH"
    },
    {
      "postCode": "3665",
      "suburb": "LONGWOOD"
    },
    {
      "postCode": "3666",
      "suburb": "LONGWOOD EAST"
    },
    {
      "postCode": "3232",
      "suburb": "LORNE"
    },
    {
      "postCode": "3418",
      "suburb": "LORQUON"
    },
    {
      "postCode": "3213",
      "suburb": "LOVELY BANKS"
    },
    {
      "postCode": "3639",
      "suburb": "LOWER MOIRA"
    },
    {
      "postCode": "3401",
      "suburb": "LOWER NORTON"
    },
    {
      "postCode": "3093",
      "suburb": "LOWER PLENTY"
    },
    {
      "postCode": "3844",
      "suburb": "LOY YANG"
    },
    {
      "postCode": "3385",
      "suburb": "LUBECK"
    },
    {
      "postCode": "3350",
      "suburb": "LUCAS"
    },
    {
      "postCode": "3875",
      "suburb": "LUCKNOW"
    },
    {
      "postCode": "3691",
      "suburb": "LUCYVALE"
    },
    {
      "postCode": "3673",
      "suburb": "LURG"
    },
    {
      "postCode": "3444",
      "suburb": "LYAL"
    },
    {
      "postCode": "3975",
      "suburb": "LYNBROOK"
    },
    {
      "postCode": "3975",
      "suburb": "LYNDHURST"
    },
    {
      "postCode": "3304",
      "suburb": "LYONS"
    },
    {
      "postCode": "3461",
      "suburb": "LYONVILLE"
    },
    {
      "postCode": "3156",
      "suburb": "LYSTERFIELD"
    },
    {
      "postCode": "3156",
      "suburb": "LYSTERFIELD SOUTH"
    },
    {
      "postCode": "3286",
      "suburb": "MACARTHUR"
    },
    {
      "postCode": "3782",
      "suburb": "MACCLESFIELD"
    },
    {
      "postCode": "3440",
      "suburb": "MACEDON"
    },
    {
      "postCode": "3971",
      "suburb": "MACKS CREEK"
    },
    {
      "postCode": "3085",
      "suburb": "MACLEOD"
    },
    {
      "postCode": "3085",
      "suburb": "MACLEOD WEST"
    },
    {
      "postCode": "3579",
      "suburb": "MACORNA"
    },
    {
      "postCode": "3568",
      "suburb": "MACORNA NORTH"
    },
    {
      "postCode": "3723",
      "suburb": "MACS COVE"
    },
    {
      "postCode": "3971",
      "suburb": "MADALYA"
    },
    {
      "postCode": "3340",
      "suburb": "MADDINGLEY"
    },
    {
      "postCode": "3379",
      "suburb": "MAFEKING"
    },
    {
      "postCode": "3860",
      "suburb": "MAFFRA"
    },
    {
      "postCode": "3859",
      "suburb": "MAFFRA WEST UPPER"
    },
    {
      "postCode": "3352",
      "suburb": "MAGPIE"
    },
    {
      "postCode": "3551",
      "suburb": "MAIDEN GULLY"
    },
    {
      "postCode": "3012",
      "suburb": "MAIDSTONE"
    },
    {
      "postCode": "3275",
      "suburb": "MAILORS FLAT"
    },
    {
      "postCode": "3373",
      "suburb": "MAIN LEAD"
    },
    {
      "postCode": "3928",
      "suburb": "MAIN RIDGE"
    },
    {
      "postCode": "3723",
      "suburb": "MAINDAMPLE"
    },
    {
      "postCode": "3714",
      "suburb": "MAINTONGOON"
    },
    {
      "postCode": "3725",
      "suburb": "MAJOR PLAINS"
    },
    {
      "postCode": "3465",
      "suburb": "MAJORCA"
    },
    {
      "postCode": "3463",
      "suburb": "MALDON"
    },
    {
      "postCode": "3892",
      "suburb": "MALLACOOTA"
    },
    {
      "postCode": "3446",
      "suburb": "MALMSBURY"
    },
    {
      "postCode": "3144",
      "suburb": "MALVERN"
    },
    {
      "postCode": "3145",
      "suburb": "MALVERN EAST"
    },
    {
      "postCode": "3144",
      "suburb": "MALVERN NORTH"
    },
    {
      "postCode": "3024",
      "suburb": "MAMBOURIN"
    },
    {
      "postCode": "3546",
      "suburb": "MANANGATANG"
    },
    {
      "postCode": "3551",
      "suburb": "MANDURANG"
    },
    {
      "postCode": "3551",
      "suburb": "MANDURANG SOUTH"
    },
    {
      "postCode": "3663",
      "suburb": "MANGALORE"
    },
    {
      "postCode": "3218",
      "suburb": "MANIFOLD HEIGHTS"
    },
    {
      "postCode": "3222",
      "suburb": "MANNERIM"
    },
    {
      "postCode": "3360",
      "suburb": "MANNIBADAR"
    },
    {
      "postCode": "3971",
      "suburb": "MANNS BEACH"
    },
    {
      "postCode": "3024",
      "suburb": "MANOR LAKES"
    },
    {
      "postCode": "3889",
      "suburb": "MANORINA"
    },
    {
      "postCode": "3722",
      "suburb": "MANSFIELD"
    },
    {
      "postCode": "3724",
      "suburb": "MANSFIELD"
    },
    {
      "postCode": "3891",
      "suburb": "MARAMINGO CREEK"
    },
    {
      "postCode": "3222",
      "suburb": "MARCUS HILL"
    },
    {
      "postCode": "3953",
      "suburb": "MARDAN"
    },
    {
      "postCode": "3233",
      "suburb": "MARENGO"
    },
    {
      "postCode": "3032",
      "suburb": "MARIBYRNONG"
    },
    {
      "postCode": "3634",
      "suburb": "MARIONVALE"
    },
    {
      "postCode": "3678",
      "suburb": "MARKWOOD"
    },
    {
      "postCode": "3483",
      "suburb": "MARLBED"
    },
    {
      "postCode": "3888",
      "suburb": "MARLO"
    },
    {
      "postCode": "3387",
      "suburb": "MARNOO"
    },
    {
      "postCode": "3477",
      "suburb": "MARNOO EAST"
    },
    {
      "postCode": "3387",
      "suburb": "MARNOO WEST"
    },
    {
      "postCode": "3515",
      "suburb": "MARONG"
    },
    {
      "postCode": "3377",
      "suburb": "MAROONA"
    },
    {
      "postCode": "3669",
      "suburb": "MARRAWEENEY"
    },
    {
      "postCode": "3216",
      "suburb": "MARSHALL"
    },
    {
      "postCode": "3875",
      "suburb": "MARTHAVALE"
    },
    {
      "postCode": "3634",
      "suburb": "MARUNGI"
    },
    {
      "postCode": "3465",
      "suburb": "MARYBOROUGH"
    },
    {
      "postCode": "3812",
      "suburb": "MARYKNOLL"
    },
    {
      "postCode": "3779",
      "suburb": "MARYSVILLE"
    },
    {
      "postCode": "3840",
      "suburb": "MARYVALE"
    },
    {
      "postCode": "3482",
      "suburb": "MASSEY"
    },
    {
      "postCode": "3723",
      "suburb": "MATLOCK"
    },
    {
      "postCode": "3331",
      "suburb": "MAUDE"
    },
    {
      "postCode": "3938",
      "suburb": "MCCRAE"
    },
    {
      "postCode": "3472",
      "suburb": "MCINTYRE"
    },
    {
      "postCode": "3401",
      "suburb": "MCKENZIE CREEK"
    },
    {
      "postCode": "3451",
      "suburb": "MCKENZIE HILL"
    },
    {
      "postCode": "3204",
      "suburb": "MCKINNON"
    },
    {
      "postCode": "3874",
      "suburb": "MCLOUGHLINS BEACH"
    },
    {
      "postCode": "3799",
      "suburb": "MCMAHONS CREEK"
    },
    {
      "postCode": "3568",
      "suburb": "MCMILLANS"
    },
    {
      "postCode": "3568",
      "suburb": "MEAD"
    },
    {
      "postCode": "3678",
      "suburb": "MEADOW CREEK"
    },
    {
      "postCode": "3048",
      "suburb": "MEADOW HEIGHTS"
    },
    {
      "postCode": "3585",
      "suburb": "MEATIAN"
    },
    {
      "postCode": "3478",
      "suburb": "MEDLYN"
    },
    {
      "postCode": "3956",
      "suburb": "MEENIYAN"
    },
    {
      "postCode": "3579",
      "suburb": "MEERING WEST"
    },
    {
      "postCode": "3862",
      "suburb": "MEERLIEU"
    },
    {
      "postCode": "3000",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "3001",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "3004",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8001",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8045",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8051",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8066",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8069",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8070",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8071",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8102",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8107",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8111",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8120",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "8205",
      "suburb": "MELBOURNE"
    },
    {
      "postCode": "3045",
      "suburb": "MELBOURNE AIRPORT"
    },
    {
      "postCode": "3052",
      "suburb": "MELBOURNE UNIVERSITY"
    },
    {
      "postCode": "3337",
      "suburb": "MELTON"
    },
    {
      "postCode": "3338",
      "suburb": "MELTON SOUTH"
    },
    {
      "postCode": "3337",
      "suburb": "MELTON WEST"
    },
    {
      "postCode": "3315",
      "suburb": "MELVILLE FOREST"
    },
    {
      "postCode": "3875",
      "suburb": "MELWOOD"
    },
    {
      "postCode": "3373",
      "suburb": "MENA PARK"
    },
    {
      "postCode": "3194",
      "suburb": "MENTONE"
    },
    {
      "postCode": "3194",
      "suburb": "MENTONE EAST"
    },
    {
      "postCode": "3159",
      "suburb": "MENZIES CREEK"
    },
    {
      "postCode": "3277",
      "suburb": "MEPUNGA"
    },
    {
      "postCode": "3277",
      "suburb": "MEPUNGA EAST"
    },
    {
      "postCode": "3277",
      "suburb": "MEPUNGA WEST"
    },
    {
      "postCode": "3505",
      "suburb": "MERBEIN"
    },
    {
      "postCode": "3505",
      "suburb": "MERBEIN SOUTH"
    },
    {
      "postCode": "3505",
      "suburb": "MERBEIN WEST"
    },
    {
      "postCode": "3333",
      "suburb": "MEREDITH"
    },
    {
      "postCode": "3496",
      "suburb": "MERINGUR"
    },
    {
      "postCode": "3310",
      "suburb": "MERINO"
    },
    {
      "postCode": "3058",
      "suburb": "MERLYNSTON"
    },
    {
      "postCode": "3754",
      "suburb": "MERNDA"
    },
    {
      "postCode": "3737",
      "suburb": "MERRIANG"
    },
    {
      "postCode": "3737",
      "suburb": "MERRIANG SOUTH"
    },
    {
      "postCode": "3916",
      "suburb": "MERRICKS"
    },
    {
      "postCode": "3926",
      "suburb": "MERRICKS BEACH"
    },
    {
      "postCode": "3926",
      "suburb": "MERRICKS NORTH"
    },
    {
      "postCode": "3618",
      "suburb": "MERRIGUM"
    },
    {
      "postCode": "3723",
      "suburb": "MERRIJIG"
    },
    {
      "postCode": "3875",
      "suburb": "MERRIJIG"
    },
    {
      "postCode": "3340",
      "suburb": "MERRIMU"
    },
    {
      "postCode": "3496",
      "suburb": "MERRINEE"
    },
    {
      "postCode": "3715",
      "suburb": "MERTON"
    },
    {
      "postCode": "3448",
      "suburb": "METCALFE"
    },
    {
      "postCode": "3444",
      "suburb": "METCALFE EAST"
    },
    {
      "postCode": "3904",
      "suburb": "METUNG"
    },
    {
      "postCode": "3444",
      "suburb": "MIA MIA"
    },
    {
      "postCode": "3064",
      "suburb": "MICKLEHAM"
    },
    {
      "postCode": "3124",
      "suburb": "MIDDLE CAMBERWELL"
    },
    {
      "postCode": "3375",
      "suburb": "MIDDLE CREEK"
    },
    {
      "postCode": "3206",
      "suburb": "MIDDLE PARK"
    },
    {
      "postCode": "3956",
      "suburb": "MIDDLE TARWIN"
    },
    {
      "postCode": "3666",
      "suburb": "MIEPOLL"
    },
    {
      "postCode": "3409",
      "suburb": "MIGA LAKE"
    },
    {
      "postCode": "3678",
      "suburb": "MILAWA"
    },
    {
      "postCode": "3500",
      "suburb": "MILDURA"
    },
    {
      "postCode": "3502",
      "suburb": "MILDURA"
    },
    {
      "postCode": "3501",
      "suburb": "MILDURA CENTRE PLAZA"
    },
    {
      "postCode": "3501",
      "suburb": "MILDURA SOUTH"
    },
    {
      "postCode": "3500",
      "suburb": "MILDURA WEST"
    },
    {
      "postCode": "3082",
      "suburb": "MILL PARK"
    },
    {
      "postCode": "3352",
      "suburb": "MILLBROOK"
    },
    {
      "postCode": "3799",
      "suburb": "MILLGROVE"
    },
    {
      "postCode": "3572",
      "suburb": "MILLOO"
    },
    {
      "postCode": "3304",
      "suburb": "MILLTOWN"
    },
    {
      "postCode": "3579",
      "suburb": "MILNES BRIDGE"
    },
    {
      "postCode": "3575",
      "suburb": "MINCHA"
    },
    {
      "postCode": "3568",
      "suburb": "MINCHA WEST"
    },
    {
      "postCode": "3352",
      "suburb": "MINERS REST"
    },
    {
      "postCode": "3324",
      "suburb": "MINGAY"
    },
    {
      "postCode": "3287",
      "suburb": "MINHAMITE"
    },
    {
      "postCode": "3413",
      "suburb": "MINIMAY"
    },
    {
      "postCode": "3351",
      "suburb": "MININERA"
    },
    {
      "postCode": "3276",
      "suburb": "MINJAH"
    },
    {
      "postCode": "3537",
      "suburb": "MINMINDIE"
    },
    {
      "postCode": "3392",
      "suburb": "MINYIP"
    },
    {
      "postCode": "3862",
      "suburb": "MIOWERA"
    },
    {
      "postCode": "3596",
      "suburb": "MIRALIE"
    },
    {
      "postCode": "3415",
      "suburb": "MIRAM"
    },
    {
      "postCode": "3871",
      "suburb": "MIRBOO"
    },
    {
      "postCode": "3871",
      "suburb": "MIRBOO NORTH"
    },
    {
      "postCode": "3722",
      "suburb": "MIRIMBAH"
    },
    {
      "postCode": "3294",
      "suburb": "MIRRANATWA"
    },
    {
      "postCode": "3132",
      "suburb": "MITCHAM"
    },
    {
      "postCode": "3132",
      "suburb": "MITCHAM NORTH"
    },
    {
      "postCode": "3355",
      "suburb": "MITCHELL PARK"
    },
    {
      "postCode": "3608",
      "suburb": "MITCHELLSTOWN"
    },
    {
      "postCode": "3573",
      "suburb": "MITIAMO"
    },
    {
      "postCode": "3409",
      "suburb": "MITRE"
    },
    {
      "postCode": "3701",
      "suburb": "MITTA MITTA"
    },
    {
      "postCode": "3490",
      "suburb": "MITTYACK"
    },
    {
      "postCode": "3401",
      "suburb": "MOCKINYA"
    },
    {
      "postCode": "3816",
      "suburb": "MODELLA"
    },
    {
      "postCode": "3240",
      "suburb": "MODEWARRE"
    },
    {
      "postCode": "3825",
      "suburb": "MOE"
    },
    {
      "postCode": "3825",
      "suburb": "MOE SOUTH"
    },
    {
      "postCode": "3231",
      "suburb": "MOGGS CREEK"
    },
    {
      "postCode": "3666",
      "suburb": "MOGLONEMBY"
    },
    {
      "postCode": "3381",
      "suburb": "MOKEPILLY"
    },
    {
      "postCode": "3718",
      "suburb": "MOLESWORTH"
    },
    {
      "postCode": "3472",
      "suburb": "MOLIAGUL"
    },
    {
      "postCode": "3666",
      "suburb": "MOLKA"
    },
    {
      "postCode": "3352",
      "suburb": "MOLLONGGHIP"
    },
    {
      "postCode": "3575",
      "suburb": "MOLOGA"
    },
    {
      "postCode": "3673",
      "suburb": "MOLYULLAH"
    },
    {
      "postCode": "3800",
      "suburb": "MONASH UNIVERSITY"
    },
    {
      "postCode": "3793",
      "suburb": "MONBULK"
    },
    {
      "postCode": "3433",
      "suburb": "MONEGEETTA"
    },
    {
      "postCode": "3691",
      "suburb": "MONGANS BRIDGE"
    },
    {
      "postCode": "3860",
      "suburb": "MONOMAK"
    },
    {
      "postCode": "3984",
      "suburb": "MONOMEITH"
    },
    {
      "postCode": "3127",
      "suburb": "MONT ALBERT"
    },
    {
      "postCode": "3129",
      "suburb": "MONT ALBERT NORTH"
    },
    {
      "postCode": "3851",
      "suburb": "MONTGOMERY"
    },
    {
      "postCode": "3094",
      "suburb": "MONTMORENCY"
    },
    {
      "postCode": "3765",
      "suburb": "MONTROSE"
    },
    {
      "postCode": "3224",
      "suburb": "MOOLAP"
    },
    {
      "postCode": "3477",
      "suburb": "MOOLERR"
    },
    {
      "postCode": "3465",
      "suburb": "MOOLORT"
    },
    {
      "postCode": "3478",
      "suburb": "MOONAMBEL"
    },
    {
      "postCode": "3825",
      "suburb": "MOONDARRA"
    },
    {
      "postCode": "3039",
      "suburb": "MOONEE PONDS"
    },
    {
      "postCode": "3055",
      "suburb": "MOONEE VALE"
    },
    {
      "postCode": "3450",
      "suburb": "MOONLIGHT FLAT"
    },
    {
      "postCode": "3465",
      "suburb": "MOONLIGHT FLAT"
    },
    {
      "postCode": "3612",
      "suburb": "MOORA"
    },
    {
      "postCode": "3189",
      "suburb": "MOORABBIN"
    },
    {
      "postCode": "3194",
      "suburb": "MOORABBIN AIRPORT"
    },
    {
      "postCode": "3189",
      "suburb": "MOORABBIN EAST"
    },
    {
      "postCode": "3213",
      "suburb": "MOORABOOL"
    },
    {
      "postCode": "3314",
      "suburb": "MOORALLA"
    },
    {
      "postCode": "3610",
      "suburb": "MOORILIM"
    },
    {
      "postCode": "3523",
      "suburb": "MOORMBOOL WEST"
    },
    {
      "postCode": "3862",
      "suburb": "MOORNAPA"
    },
    {
      "postCode": "3673",
      "suburb": "MOORNGAG"
    },
    {
      "postCode": "3933",
      "suburb": "MOOROODUC"
    },
    {
      "postCode": "3138",
      "suburb": "MOOROOLBARK"
    },
    {
      "postCode": "3629",
      "suburb": "MOOROOPNA"
    },
    {
      "postCode": "3629",
      "suburb": "MOOROOPNA NORTH"
    },
    {
      "postCode": "3616",
      "suburb": "MOOROOPNA NORTH WEST"
    },
    {
      "postCode": "3764",
      "suburb": "MORANDING"
    },
    {
      "postCode": "3195",
      "suburb": "MORDIALLOC"
    },
    {
      "postCode": "3058",
      "suburb": "MORELAND"
    },
    {
      "postCode": "3055",
      "suburb": "MORELAND WEST"
    },
    {
      "postCode": "3301",
      "suburb": "MORGIANA"
    },
    {
      "postCode": "3240",
      "suburb": "MORIAC"
    },
    {
      "postCode": "3931",
      "suburb": "MORNINGTON"
    },
    {
      "postCode": "3860",
      "suburb": "MOROKA"
    },
    {
      "postCode": "3334",
      "suburb": "MORRISONS"
    },
    {
      "postCode": "3387",
      "suburb": "MORRL MORRL"
    },
    {
      "postCode": "3272",
      "suburb": "MORTLAKE"
    },
    {
      "postCode": "3482",
      "suburb": "MORTON PLAINS"
    },
    {
      "postCode": "3840",
      "suburb": "MORWELL"
    },
    {
      "postCode": "3885",
      "suburb": "MOSSIFACE"
    },
    {
      "postCode": "3709",
      "suburb": "MOUNT ALFRED"
    },
    {
      "postCode": "3699",
      "suburb": "MOUNT BEAUTY"
    },
    {
      "postCode": "3363",
      "suburb": "MOUNT BECKWORTH"
    },
    {
      "postCode": "3960",
      "suburb": "MOUNT BEST"
    },
    {
      "postCode": "3352",
      "suburb": "MOUNT BOLTON"
    },
    {
      "postCode": "3675",
      "suburb": "MOUNT BRUNO"
    },
    {
      "postCode": "3740",
      "suburb": "MOUNT BUFFALO"
    },
    {
      "postCode": "3723",
      "suburb": "MOUNT BULLER"
    },
    {
      "postCode": "3781",
      "suburb": "MOUNT BURNETT"
    },
    {
      "postCode": "3324",
      "suburb": "MOUNT BUTE"
    },
    {
      "postCode": "3523",
      "suburb": "MOUNT CAMEL"
    },
    {
      "postCode": "3370",
      "suburb": "MOUNT CAMERON"
    },
    {
      "postCode": "3350",
      "suburb": "MOUNT CLEAR"
    },
    {
      "postCode": "3377",
      "suburb": "MOUNT COLE"
    },
    {
      "postCode": "3377",
      "suburb": "MOUNT COLE CREEK"
    },
    {
      "postCode": "3024",
      "suburb": "MOUNT COTTRELL"
    },
    {
      "postCode": "3767",
      "suburb": "MOUNT DANDENONG"
    },
    {
      "postCode": "3334",
      "suburb": "MOUNT DORAN"
    },
    {
      "postCode": "3381",
      "suburb": "MOUNT DRYDEN"
    },
    {
      "postCode": "3217",
      "suburb": "MOUNT DUNEED"
    },
    {
      "postCode": "3953",
      "suburb": "MOUNT ECCLES"
    },
    {
      "postCode": "3953",
      "suburb": "MOUNT ECCLES SOUTH"
    },
    {
      "postCode": "3352",
      "suburb": "MOUNT EGERTON"
    },
    {
      "postCode": "3930",
      "suburb": "MOUNT ELIZA"
    },
    {
      "postCode": "3351",
      "suburb": "MOUNT EMU"
    },
    {
      "postCode": "3796",
      "suburb": "MOUNT EVELYN"
    },
    {
      "postCode": "3461",
      "suburb": "MOUNT FRANKLIN"
    },
    {
      "postCode": "3371",
      "suburb": "MOUNT GLASGOW"
    },
    {
      "postCode": "3350",
      "suburb": "MOUNT HELEN"
    },
    {
      "postCode": "3472",
      "suburb": "MOUNT HOOGHLY"
    },
    {
      "postCode": "3741",
      "suburb": "MOUNT HOTHAM"
    },
    {
      "postCode": "3468",
      "suburb": "MOUNT LONARCH"
    },
    {
      "postCode": "3441",
      "suburb": "MOUNT MACEDON"
    },
    {
      "postCode": "3646",
      "suburb": "MOUNT MAJOR"
    },
    {
      "postCode": "3934",
      "suburb": "MOUNT MARTHA"
    },
    {
      "postCode": "3352",
      "suburb": "MOUNT MERCER"
    },
    {
      "postCode": "3240",
      "suburb": "MOUNT MORIAC"
    },
    {
      "postCode": "3301",
      "suburb": "MOUNT NAPIER"
    },
    {
      "postCode": "3350",
      "suburb": "MOUNT PLEASANT"
    },
    {
      "postCode": "3364",
      "suburb": "MOUNT PROSPECT"
    },
    {
      "postCode": "3305",
      "suburb": "MOUNT RICHMOND"
    },
    {
      "postCode": "3352",
      "suburb": "MOUNT ROWAN"
    },
    {
      "postCode": "3236",
      "suburb": "MOUNT SABINE"
    },
    {
      "postCode": "3844",
      "suburb": "MOUNT TASSIE"
    },
    {
      "postCode": "3875",
      "suburb": "MOUNT TAYLOR"
    },
    {
      "postCode": "3777",
      "suburb": "MOUNT TOOLEBEWONG"
    },
    {
      "postCode": "3342",
      "suburb": "MOUNT WALLACE"
    },
    {
      "postCode": "3149",
      "suburb": "MOUNT WAVERLEY"
    },
    {
      "postCode": "3723",
      "suburb": "MOUNTAIN BAY"
    },
    {
      "postCode": "3156",
      "suburb": "MOUNTAIN GATE"
    },
    {
      "postCode": "3988",
      "suburb": "MOUNTAIN VIEW"
    },
    {
      "postCode": "3294",
      "suburb": "MOUTAJUP"
    },
    {
      "postCode": "3951",
      "suburb": "MOYARRA"
    },
    {
      "postCode": "3732",
      "suburb": "MOYHU"
    },
    {
      "postCode": "3477",
      "suburb": "MOYREISK"
    },
    {
      "postCode": "3377",
      "suburb": "MOYSTON"
    },
    {
      "postCode": "3644",
      "suburb": "MUCKATAH"
    },
    {
      "postCode": "3451",
      "suburb": "MUCKLEFORD"
    },
    {
      "postCode": "3462",
      "suburb": "MUCKLEFORD SOUTH"
    },
    {
      "postCode": "3737",
      "suburb": "MUDGEGONGA"
    },
    {
      "postCode": "3170",
      "suburb": "MULGRAVE"
    },
    {
      "postCode": "3304",
      "suburb": "MUMBANNAR"
    },
    {
      "postCode": "3635",
      "suburb": "MUNDOONA"
    },
    {
      "postCode": "3862",
      "suburb": "MUNRO"
    },
    {
      "postCode": "3315",
      "suburb": "MUNTHAM"
    },
    {
      "postCode": "3610",
      "suburb": "MURCHISON"
    },
    {
      "postCode": "3610",
      "suburb": "MURCHISON EAST"
    },
    {
      "postCode": "3610",
      "suburb": "MURCHISON NORTH"
    },
    {
      "postCode": "3218",
      "suburb": "MURGHEBOLUC"
    },
    {
      "postCode": "3747",
      "suburb": "MURMUNGEE"
    },
    {
      "postCode": "3544",
      "suburb": "MURNUNGIN"
    },
    {
      "postCode": "3551",
      "suburb": "MURPHYS CREEK"
    },
    {
      "postCode": "3401",
      "suburb": "MURRA WARRA"
    },
    {
      "postCode": "3579",
      "suburb": "MURRABIT"
    },
    {
      "postCode": "3579",
      "suburb": "MURRABIT WEST"
    },
    {
      "postCode": "3586",
      "suburb": "MURRAWEE"
    },
    {
      "postCode": "3490",
      "suburb": "MURRAY-SUNSET"
    },
    {
      "postCode": "3586",
      "suburb": "MURRAYDALE"
    },
    {
      "postCode": "3512",
      "suburb": "MURRAYVILLE"
    },
    {
      "postCode": "3885",
      "suburb": "MURRINDAL"
    },
    {
      "postCode": "3717",
      "suburb": "MURRINDINDI"
    },
    {
      "postCode": "3243",
      "suburb": "MURROON"
    },
    {
      "postCode": "3163",
      "suburb": "MURRUMBEENA"
    },
    {
      "postCode": "3390",
      "suburb": "MURTOA"
    },
    {
      "postCode": "3461",
      "suburb": "MUSK"
    },
    {
      "postCode": "3461",
      "suburb": "MUSK VALE"
    },
    {
      "postCode": "3557",
      "suburb": "MUSKERRY"
    },
    {
      "postCode": "3533",
      "suburb": "MYALL"
    },
    {
      "postCode": "3579",
      "suburb": "MYALL"
    },
    {
      "postCode": "3304",
      "suburb": "MYAMYN"
    },
    {
      "postCode": "3556",
      "suburb": "MYERS FLAT"
    },
    {
      "postCode": "3551",
      "suburb": "MYOLA"
    },
    {
      "postCode": "3341",
      "suburb": "MYRNIONG"
    },
    {
      "postCode": "3732",
      "suburb": "MYRRHEE"
    },
    {
      "postCode": "3551",
      "suburb": "MYRTLE CREEK"
    },
    {
      "postCode": "3851",
      "suburb": "MYRTLEBANK"
    },
    {
      "postCode": "3736",
      "suburb": "MYRTLEFORD"
    },
    {
      "postCode": "3737",
      "suburb": "MYRTLEFORD"
    },
    {
      "postCode": "3518",
      "suburb": "MYSIA"
    },
    {
      "postCode": "3579",
      "suburb": "MYSTIC PARK"
    },
    {
      "postCode": "3641",
      "suburb": "MYWEE"
    },
    {
      "postCode": "3608",
      "suburb": "NAGAMBIE"
    },
    {
      "postCode": "3249",
      "suburb": "NALANGIL"
    },
    {
      "postCode": "3646",
      "suburb": "NALINGA"
    },
    {
      "postCode": "3847",
      "suburb": "NAMBROK"
    },
    {
      "postCode": "3533",
      "suburb": "NANDALY"
    },
    {
      "postCode": "3781",
      "suburb": "NANGANA"
    },
    {
      "postCode": "3312",
      "suburb": "NANGEELA"
    },
    {
      "postCode": "3494",
      "suburb": "NANGILOC"
    },
    {
      "postCode": "3561",
      "suburb": "NANNEELLA"
    },
    {
      "postCode": "3860",
      "suburb": "NAP NAP MARRA"
    },
    {
      "postCode": "3352",
      "suburb": "NAPOLEONS"
    },
    {
      "postCode": "3812",
      "suburb": "NAR NAR GOON"
    },
    {
      "postCode": "3812",
      "suburb": "NAR NAR GOON NORTH"
    },
    {
      "postCode": "3778",
      "suburb": "NARBETHONG"
    },
    {
      "postCode": "3293",
      "suburb": "NAREEB"
    },
    {
      "postCode": "3315",
      "suburb": "NAREEN"
    },
    {
      "postCode": "3525",
      "suburb": "NAREEWILLOCK"
    },
    {
      "postCode": "3707",
      "suburb": "NARIEL VALLEY"
    },
    {
      "postCode": "3636",
      "suburb": "NARING"
    },
    {
      "postCode": "3277",
      "suburb": "NARINGAL"
    },
    {
      "postCode": "3277",
      "suburb": "NARINGAL EAST"
    },
    {
      "postCode": "3266",
      "suburb": "NAROGHID"
    },
    {
      "postCode": "3824",
      "suburb": "NARRACAN"
    },
    {
      "postCode": "3483",
      "suburb": "NARRAPORT"
    },
    {
      "postCode": "3293",
      "suburb": "NARRAPUMELAP SOUTH"
    },
    {
      "postCode": "3285",
      "suburb": "NARRAWONG"
    },
    {
      "postCode": "3805",
      "suburb": "NARRE WARREN"
    },
    {
      "postCode": "3804",
      "suburb": "NARRE WARREN EAST"
    },
    {
      "postCode": "3804",
      "suburb": "NARRE WARREN NORTH"
    },
    {
      "postCode": "3805",
      "suburb": "NARRE WARREN SOUTH"
    },
    {
      "postCode": "3597",
      "suburb": "NARRUNG"
    },
    {
      "postCode": "3638",
      "suburb": "NATHALIA"
    },
    {
      "postCode": "3409",
      "suburb": "NATIMUK"
    },
    {
      "postCode": "3465",
      "suburb": "NATTE YALLOCK"
    },
    {
      "postCode": "3597",
      "suburb": "NATYA"
    },
    {
      "postCode": "3384",
      "suburb": "NAVARRE"
    },
    {
      "postCode": "3352",
      "suburb": "NAVIGATORS"
    },
    {
      "postCode": "3832",
      "suburb": "NAYOOK"
    },
    {
      "postCode": "3496",
      "suburb": "NEDS CORNER"
    },
    {
      "postCode": "3463",
      "suburb": "NEEREMAN"
    },
    {
      "postCode": "3831",
      "suburb": "NEERIM"
    },
    {
      "postCode": "3831",
      "suburb": "NEERIM EAST"
    },
    {
      "postCode": "3832",
      "suburb": "NEERIM JUNCTION"
    },
    {
      "postCode": "3832",
      "suburb": "NEERIM NORTH"
    },
    {
      "postCode": "3831",
      "suburb": "NEERIM SOUTH"
    },
    {
      "postCode": "3570",
      "suburb": "NEILBOROUGH"
    },
    {
      "postCode": "3699",
      "suburb": "NELSE"
    },
    {
      "postCode": "3292",
      "suburb": "NELSON"
    },
    {
      "postCode": "3953",
      "suburb": "NERRENA"
    },
    {
      "postCode": "3351",
      "suburb": "NERRIN NERRIN"
    },
    {
      "postCode": "3350",
      "suburb": "NERRINA"
    },
    {
      "postCode": "3373",
      "suburb": "NERRING"
    },
    {
      "postCode": "3418",
      "suburb": "NETHERBY"
    },
    {
      "postCode": "3413",
      "suburb": "NEUARPURR"
    },
    {
      "postCode": "3438",
      "suburb": "NEW GISBORNE"
    },
    {
      "postCode": "3825",
      "suburb": "NEWBOROUGH"
    },
    {
      "postCode": "3551",
      "suburb": "NEWBRIDGE"
    },
    {
      "postCode": "3458",
      "suburb": "NEWBURY"
    },
    {
      "postCode": "3219",
      "suburb": "NEWCOMB"
    },
    {
      "postCode": "3268",
      "suburb": "NEWFIELD"
    },
    {
      "postCode": "3442",
      "suburb": "NEWHAM"
    },
    {
      "postCode": "3925",
      "suburb": "NEWHAVEN"
    },
    {
      "postCode": "3350",
      "suburb": "NEWINGTON"
    },
    {
      "postCode": "3875",
      "suburb": "NEWLANDS ARM"
    },
    {
      "postCode": "3364",
      "suburb": "NEWLYN"
    },
    {
      "postCode": "3364",
      "suburb": "NEWLYN NORTH"
    },
    {
      "postCode": "3886",
      "suburb": "NEWMERELLA"
    },
    {
      "postCode": "3015",
      "suburb": "NEWPORT"
    },
    {
      "postCode": "3859",
      "suburb": "NEWRY"
    },
    {
      "postCode": "3462",
      "suburb": "NEWSTEAD"
    },
    {
      "postCode": "3220",
      "suburb": "NEWTOWN"
    },
    {
      "postCode": "3351",
      "suburb": "NEWTOWN"
    },
    {
      "postCode": "3418",
      "suburb": "NHILL"
    },
    {
      "postCode": "3501",
      "suburb": "NICHOLS POINT"
    },
    {
      "postCode": "3882",
      "suburb": "NICHOLSON"
    },
    {
      "postCode": "3042",
      "suburb": "NIDDRIE"
    },
    {
      "postCode": "3042",
      "suburb": "NIDDRIE NORTH"
    },
    {
      "postCode": "3821",
      "suburb": "NILMA"
    },
    {
      "postCode": "3821",
      "suburb": "NILMA NORTH"
    },
    {
      "postCode": "3533",
      "suburb": "NINDA"
    },
    {
      "postCode": "3518",
      "suburb": "NINE MILE"
    },
    {
      "postCode": "3351",
      "suburb": "NINTINGBOOL"
    },
    {
      "postCode": "3527",
      "suburb": "NINYEUNOOK"
    },
    {
      "postCode": "3268",
      "suburb": "NIRRANDA"
    },
    {
      "postCode": "3268",
      "suburb": "NIRRANDA EAST"
    },
    {
      "postCode": "3268",
      "suburb": "NIRRANDA SOUTH"
    },
    {
      "postCode": "3174",
      "suburb": "NOBLE PARK"
    },
    {
      "postCode": "3174",
      "suburb": "NOBLE PARK NORTH"
    },
    {
      "postCode": "3833",
      "suburb": "NOOJEE"
    },
    {
      "postCode": "3265",
      "suburb": "NOORAT"
    },
    {
      "postCode": "3265",
      "suburb": "NOORAT EAST"
    },
    {
      "postCode": "3890",
      "suburb": "NOORINBEE"
    },
    {
      "postCode": "3890",
      "suburb": "NOORINBEE NORTH"
    },
    {
      "postCode": "3409",
      "suburb": "NORADJUHA"
    },
    {
      "postCode": "3214",
      "suburb": "NORLANE"
    },
    {
      "postCode": "3579",
      "suburb": "NORMANVILLE"
    },
    {
      "postCode": "3682",
      "suburb": "NORONG"
    },
    {
      "postCode": "3550",
      "suburb": "NORTH BENDIGO"
    },
    {
      "postCode": "3458",
      "suburb": "NORTH BLACKWOOD"
    },
    {
      "postCode": "3215",
      "suburb": "NORTH GEELONG"
    },
    {
      "postCode": "3051",
      "suburb": "NORTH MELBOURNE"
    },
    {
      "postCode": "9999",
      "suburb": "NORTH POLE"
    },
    {
      "postCode": "3187",
      "suburb": "NORTH ROAD"
    },
    {
      "postCode": "3214",
      "suburb": "NORTH SHORE"
    },
    {
      "postCode": "3678",
      "suburb": "NORTH WANGARATTA"
    },
    {
      "postCode": "3113",
      "suburb": "NORTH WARRANDYTE"
    },
    {
      "postCode": "3995",
      "suburb": "NORTH WONTHAGGI"
    },
    {
      "postCode": "3070",
      "suburb": "NORTHCOTE"
    },
    {
      "postCode": "3070",
      "suburb": "NORTHCOTE SOUTH"
    },
    {
      "postCode": "3072",
      "suburb": "NORTHLAND CENTRE"
    },
    {
      "postCode": "3660",
      "suburb": "NORTHWOOD"
    },
    {
      "postCode": "3377",
      "suburb": "NORVAL"
    },
    {
      "postCode": "3168",
      "suburb": "NOTTING HILL"
    },
    {
      "postCode": "3887",
      "suburb": "NOWA NOWA"
    },
    {
      "postCode": "3469",
      "suburb": "NOWHERE CREEK"
    },
    {
      "postCode": "3585",
      "suburb": "NOWIE"
    },
    {
      "postCode": "3737",
      "suburb": "NUG NUG"
    },
    {
      "postCode": "3463",
      "suburb": "NUGGETTY"
    },
    {
      "postCode": "3435",
      "suburb": "NULLA VALE"
    },
    {
      "postCode": "3268",
      "suburb": "NULLAWARRE"
    },
    {
      "postCode": "3268",
      "suburb": "NULLAWARRE NORTH"
    },
    {
      "postCode": "3529",
      "suburb": "NULLAWIL"
    },
    {
      "postCode": "3636",
      "suburb": "NUMURKAH"
    },
    {
      "postCode": "3131",
      "suburb": "NUNAWADING"
    },
    {
      "postCode": "3909",
      "suburb": "NUNGURNER"
    },
    {
      "postCode": "3896",
      "suburb": "NUNNIONG"
    },
    {
      "postCode": "3401",
      "suburb": "NURCOUNG"
    },
    {
      "postCode": "3401",
      "suburb": "NURRABIEL"
    },
    {
      "postCode": "3888",
      "suburb": "NURRAN"
    },
    {
      "postCode": "3099",
      "suburb": "NUTFIELD"
    },
    {
      "postCode": "3594",
      "suburb": "NYAH"
    },
    {
      "postCode": "3595",
      "suburb": "NYAH WEST"
    },
    {
      "postCode": "3533",
      "suburb": "NYARRIN"
    },
    {
      "postCode": "3909",
      "suburb": "NYERIMILANG"
    },
    {
      "postCode": "3987",
      "suburb": "NYORA"
    },
    {
      "postCode": "3585",
      "suburb": "NYRRABY"
    },
    {
      "postCode": "3046",
      "suburb": "OAK PARK"
    },
    {
      "postCode": "3063",
      "suburb": "OAKLANDS JUNCTION"
    },
    {
      "postCode": "3166",
      "suburb": "OAKLEIGH"
    },
    {
      "postCode": "3166",
      "suburb": "OAKLEIGH EAST"
    },
    {
      "postCode": "3167",
      "suburb": "OAKLEIGH SOUTH"
    },
    {
      "postCode": "3540",
      "suburb": "OAKVALE"
    },
    {
      "postCode": "3880",
      "suburb": "OCEAN GRANGE"
    },
    {
      "postCode": "3226",
      "suburb": "OCEAN GROVE"
    },
    {
      "postCode": "3809",
      "suburb": "OFFICER"
    },
    {
      "postCode": "3809",
      "suburb": "OFFICER SOUTH"
    },
    {
      "postCode": "3701",
      "suburb": "OLD TALLANGATTA"
    },
    {
      "postCode": "3788",
      "suburb": "OLINDA"
    },
    {
      "postCode": "3241",
      "suburb": "OMBERSLEY"
    },
    {
      "postCode": "3898",
      "suburb": "OMEO"
    },
    {
      "postCode": "3898",
      "suburb": "OMEO VALLEY"
    },
    {
      "postCode": "3249",
      "suburb": "ONDIT"
    },
    {
      "postCode": "3888",
      "suburb": "ORBOST"
    },
    {
      "postCode": "3284",
      "suburb": "ORFORD"
    },
    {
      "postCode": "3204",
      "suburb": "ORMOND"
    },
    {
      "postCode": "3631",
      "suburb": "ORRVALE"
    },
    {
      "postCode": "3691",
      "suburb": "OSBORNES FLAT"
    },
    {
      "postCode": "3951",
      "suburb": "OUTTRIM"
    },
    {
      "postCode": "3490",
      "suburb": "OUYEN"
    },
    {
      "postCode": "3738",
      "suburb": "OVENS"
    },
    {
      "postCode": "3678",
      "suburb": "OXLEY"
    },
    {
      "postCode": "3678",
      "suburb": "OXLEY FLATS"
    },
    {
      "postCode": "3413",
      "suburb": "OZENKADNOOK"
    },
    {
      "postCode": "3268",
      "suburb": "PAARATTE"
    },
    {
      "postCode": "3551",
      "suburb": "PAINSWICK"
    },
    {
      "postCode": "3810",
      "suburb": "PAKENHAM"
    },
    {
      "postCode": "3810",
      "suburb": "PAKENHAM SOUTH"
    },
    {
      "postCode": "3810",
      "suburb": "PAKENHAM UPPER"
    },
    {
      "postCode": "3512",
      "suburb": "PANITYA"
    },
    {
      "postCode": "3265",
      "suburb": "PANMURE"
    },
    {
      "postCode": "3759",
      "suburb": "PANTON HILL"
    },
    {
      "postCode": "3477",
      "suburb": "PARADISE"
    },
    {
      "postCode": "3851",
      "suburb": "PARADISE BEACH"
    },
    {
      "postCode": "3240",
      "suburb": "PARAPARAP"
    },
    {
      "postCode": "3114",
      "suburb": "PARK ORCHARDS"
    },
    {
      "postCode": "3195",
      "suburb": "PARKDALE"
    },
    {
      "postCode": "3052",
      "suburb": "PARKVILLE"
    },
    {
      "postCode": "3340",
      "suburb": "PARWAN"
    },
    {
      "postCode": "3315",
      "suburb": "PASCHENDALE"
    },
    {
      "postCode": "3044",
      "suburb": "PASCOE VALE"
    },
    {
      "postCode": "3044",
      "suburb": "PASCOE VALE SOUTH"
    },
    {
      "postCode": "3444",
      "suburb": "PASTORIA"
    },
    {
      "postCode": "3444",
      "suburb": "PASTORIA EAST"
    },
    {
      "postCode": "3491",
      "suburb": "PATCHEWOLLOCK"
    },
    {
      "postCode": "3564",
      "suburb": "PATHO"
    },
    {
      "postCode": "3204",
      "suburb": "PATTERSON"
    },
    {
      "postCode": "3197",
      "suburb": "PATTERSON LAKES"
    },
    {
      "postCode": "3318",
      "suburb": "PATYAH"
    },
    {
      "postCode": "3880",
      "suburb": "PAYNESVILLE"
    },
    {
      "postCode": "3912",
      "suburb": "PEARCEDALE"
    },
    {
      "postCode": "3851",
      "suburb": "PEARSONDALE"
    },
    {
      "postCode": "3678",
      "suburb": "PEECHELBA"
    },
    {
      "postCode": "3678",
      "suburb": "PEECHELBA EAST"
    },
    {
      "postCode": "3727",
      "suburb": "PELLUEBLA"
    },
    {
      "postCode": "3235",
      "suburb": "PENNYROYAL"
    },
    {
      "postCode": "3289",
      "suburb": "PENSHURST"
    },
    {
      "postCode": "3586",
      "suburb": "PENTAL ISLAND"
    },
    {
      "postCode": "3341",
      "suburb": "PENTLAND HILLS"
    },
    {
      "postCode": "3478",
      "suburb": "PERCYDALE"
    },
    {
      "postCode": "3413",
      "suburb": "PERONNE"
    },
    {
      "postCode": "3862",
      "suburb": "PERRY BRIDGE"
    },
    {
      "postCode": "3270",
      "suburb": "PETERBOROUGH"
    },
    {
      "postCode": "3233",
      "suburb": "PETTICOAT CREEK"
    },
    {
      "postCode": "3757",
      "suburb": "PHEASANT CREEK"
    },
    {
      "postCode": "3597",
      "suburb": "PIANGIL"
    },
    {
      "postCode": "3572",
      "suburb": "PIAVELLA"
    },
    {
      "postCode": "3639",
      "suburb": "PICOLA"
    },
    {
      "postCode": "3639",
      "suburb": "PICOLA WEST"
    },
    {
      "postCode": "3833",
      "suburb": "PIEDMONT"
    },
    {
      "postCode": "3533",
      "suburb": "PIER MILAN"
    },
    {
      "postCode": "3407",
      "suburb": "PIGEON PONDS"
    },
    {
      "postCode": "3351",
      "suburb": "PIGGOREET"
    },
    {
      "postCode": "3401",
      "suburb": "PIMPINIO"
    },
    {
      "postCode": "3573",
      "suburb": "PINE GROVE"
    },
    {
      "postCode": "3631",
      "suburb": "PINE LODGE"
    },
    {
      "postCode": "3709",
      "suburb": "PINE MOUNTAIN"
    },
    {
      "postCode": "3579",
      "suburb": "PINE VIEW"
    },
    {
      "postCode": "3200",
      "suburb": "PINES FOREST"
    },
    {
      "postCode": "3149",
      "suburb": "PINEWOOD"
    },
    {
      "postCode": "3984",
      "suburb": "PIONEER BAY"
    },
    {
      "postCode": "3444",
      "suburb": "PIPERS CREEK"
    },
    {
      "postCode": "3585",
      "suburb": "PIRA"
    },
    {
      "postCode": "3723",
      "suburb": "PIRIES"
    },
    {
      "postCode": "3249",
      "suburb": "PIRRON YALLOCK"
    },
    {
      "postCode": "3351",
      "suburb": "PITFIELD"
    },
    {
      "postCode": "3360",
      "suburb": "PITTONG"
    },
    {
      "postCode": "3090",
      "suburb": "PLENTY"
    },
    {
      "postCode": "3335",
      "suburb": "PLUMPTON"
    },
    {
      "postCode": "3030",
      "suburb": "POINT COOK"
    },
    {
      "postCode": "3916",
      "suburb": "POINT LEO"
    },
    {
      "postCode": "3225",
      "suburb": "POINT LONSDALE"
    },
    {
      "postCode": "3212",
      "suburb": "POINT WILSON"
    },
    {
      "postCode": "3585",
      "suburb": "POLISBET"
    },
    {
      "postCode": "3260",
      "suburb": "POMBORNEIT"
    },
    {
      "postCode": "3249",
      "suburb": "POMBORNEIT EAST"
    },
    {
      "postCode": "3260",
      "suburb": "POMBORNEIT NORTH"
    },
    {
      "postCode": "3381",
      "suburb": "POMONAL"
    },
    {
      "postCode": "3571",
      "suburb": "POMPAPIEL"
    },
    {
      "postCode": "3312",
      "suburb": "POOLAIJELO"
    },
    {
      "postCode": "3352",
      "suburb": "POOTILLA"
    },
    {
      "postCode": "3988",
      "suburb": "POOWONG"
    },
    {
      "postCode": "3988",
      "suburb": "POOWONG EAST"
    },
    {
      "postCode": "3988",
      "suburb": "POOWONG NORTH"
    },
    {
      "postCode": "3461",
      "suburb": "PORCUPINE RIDGE"
    },
    {
      "postCode": "3740",
      "suburb": "POREPUNKAH"
    },
    {
      "postCode": "3971",
      "suburb": "PORT ALBERT"
    },
    {
      "postCode": "3269",
      "suburb": "PORT CAMPBELL"
    },
    {
      "postCode": "3284",
      "suburb": "PORT FAIRY"
    },
    {
      "postCode": "3964",
      "suburb": "PORT FRANKLIN"
    },
    {
      "postCode": "3207",
      "suburb": "PORT MELBOURNE"
    },
    {
      "postCode": "3965",
      "suburb": "PORT WELSHPOOL"
    },
    {
      "postCode": "3223",
      "suburb": "PORTARLINGTON"
    },
    {
      "postCode": "3305",
      "suburb": "PORTLAND"
    },
    {
      "postCode": "3305",
      "suburb": "PORTLAND NORTH"
    },
    {
      "postCode": "3305",
      "suburb": "PORTLAND WEST"
    },
    {
      "postCode": "3944",
      "suburb": "PORTSEA"
    },
    {
      "postCode": "3996",
      "suburb": "POUND CREEK"
    },
    {
      "postCode": "3797",
      "suburb": "POWELLTOWN"
    },
    {
      "postCode": "3312",
      "suburb": "POWERS CREEK"
    },
    {
      "postCode": "3517",
      "suburb": "POWLETT PLAINS"
    },
    {
      "postCode": "3181",
      "suburb": "PRAHRAN"
    },
    {
      "postCode": "3181",
      "suburb": "PRAHRAN EAST"
    },
    {
      "postCode": "3572",
      "suburb": "PRAIRIE"
    },
    {
      "postCode": "3666",
      "suburb": "PRANJIP"
    },
    {
      "postCode": "3685",
      "suburb": "PRENTICE NORTH"
    },
    {
      "postCode": "3072",
      "suburb": "PRESTON"
    },
    {
      "postCode": "3072",
      "suburb": "PRESTON LOWER"
    },
    {
      "postCode": "3072",
      "suburb": "PRESTON SOUTH"
    },
    {
      "postCode": "3072",
      "suburb": "PRESTON WEST"
    },
    {
      "postCode": "3054",
      "suburb": "PRINCES HILL"
    },
    {
      "postCode": "3269",
      "suburb": "PRINCETOWN"
    },
    {
      "postCode": "3662",
      "suburb": "PUCKAPUNYAL"
    },
    {
      "postCode": "3271",
      "suburb": "PURA PURA"
    },
    {
      "postCode": "3289",
      "suburb": "PURDEET"
    },
    {
      "postCode": "3278",
      "suburb": "PURNIM"
    },
    {
      "postCode": "3278",
      "suburb": "PURNIM WEST"
    },
    {
      "postCode": "3521",
      "suburb": "PYALONG"
    },
    {
      "postCode": "3575",
      "suburb": "PYRAMID HILL"
    },
    {
      "postCode": "3540",
      "suburb": "QUAMBATOOK"
    },
    {
      "postCode": "3030",
      "suburb": "QUANDONG"
    },
    {
      "postCode": "3401",
      "suburb": "QUANTONG"
    },
    {
      "postCode": "3550",
      "suburb": "QUARRY HILL"
    },
    {
      "postCode": "3225",
      "suburb": "QUEENSCLIFF"
    },
    {
      "postCode": "3984",
      "suburb": "QUEENSFERRY"
    },
    {
      "postCode": "3373",
      "suburb": "RAGLAN"
    },
    {
      "postCode": "3424",
      "suburb": "RAINBOW"
    },
    {
      "postCode": "3951",
      "suburb": "RANCEBY"
    },
    {
      "postCode": "3132",
      "suburb": "RANGEVIEW"
    },
    {
      "postCode": "3465",
      "suburb": "RATHSCAR"
    },
    {
      "postCode": "3465",
      "suburb": "RATHSCAR WEST"
    },
    {
      "postCode": "3023",
      "suburb": "RAVENHALL"
    },
    {
      "postCode": "3453",
      "suburb": "RAVENSWOOD"
    },
    {
      "postCode": "3453",
      "suburb": "RAVENSWOOD SOUTH"
    },
    {
      "postCode": "3825",
      "suburb": "RAWSON"
    },
    {
      "postCode": "3880",
      "suburb": "RAYMOND ISLAND"
    },
    {
      "postCode": "3570",
      "suburb": "RAYWOOD"
    },
    {
      "postCode": "3496",
      "suburb": "RED CLIFFS"
    },
    {
      "postCode": "3937",
      "suburb": "RED HILL"
    },
    {
      "postCode": "3937",
      "suburb": "RED HILL SOUTH"
    },
    {
      "postCode": "3371",
      "suburb": "RED LION"
    },
    {
      "postCode": "3350",
      "suburb": "REDAN"
    },
    {
      "postCode": "3477",
      "suburb": "REDBANK"
    },
    {
      "postCode": "3523",
      "suburb": "REDCASTLE"
    },
    {
      "postCode": "3444",
      "suburb": "REDESDALE"
    },
    {
      "postCode": "3658",
      "suburb": "REEDY CREEK"
    },
    {
      "postCode": "3395",
      "suburb": "REEDY DAM"
    },
    {
      "postCode": "3895",
      "suburb": "REEDY FLAT"
    },
    {
      "postCode": "3579",
      "suburb": "REEDY LAKE"
    },
    {
      "postCode": "3799",
      "suburb": "REEFTON"
    },
    {
      "postCode": "3072",
      "suburb": "REGENT WEST"
    },
    {
      "postCode": "3095",
      "suburb": "RESEARCH"
    },
    {
      "postCode": "3073",
      "suburb": "RESERVOIR"
    },
    {
      "postCode": "3858",
      "suburb": "REYNARD"
    },
    {
      "postCode": "3517",
      "suburb": "RHEOLA"
    },
    {
      "postCode": "3923",
      "suburb": "RHYLL"
    },
    {
      "postCode": "3377",
      "suburb": "RHYMNEY"
    },
    {
      "postCode": "3385",
      "suburb": "RIACHELLA"
    },
    {
      "postCode": "3480",
      "suburb": "RICH AVON"
    },
    {
      "postCode": "3480",
      "suburb": "RICH AVON EAST"
    },
    {
      "postCode": "3480",
      "suburb": "RICH AVON WEST"
    },
    {
      "postCode": "3121",
      "suburb": "RICHMOND"
    },
    {
      "postCode": "3121",
      "suburb": "RICHMOND EAST"
    },
    {
      "postCode": "3121",
      "suburb": "RICHMOND NORTH"
    },
    {
      "postCode": "3518",
      "suburb": "RICHMOND PLAINS"
    },
    {
      "postCode": "3121",
      "suburb": "RICHMOND SOUTH"
    },
    {
      "postCode": "3431",
      "suburb": "RIDDELLS CREEK"
    },
    {
      "postCode": "3666",
      "suburb": "RIGGS CREEK"
    },
    {
      "postCode": "3134",
      "suburb": "RINGWOOD"
    },
    {
      "postCode": "3135",
      "suburb": "RINGWOOD EAST"
    },
    {
      "postCode": "3134",
      "suburb": "RINGWOOD NORTH"
    },
    {
      "postCode": "3818",
      "suburb": "RIPPLEBROOK"
    },
    {
      "postCode": "3215",
      "suburb": "RIPPLESIDE"
    },
    {
      "postCode": "3185",
      "suburb": "RIPPONLEA"
    },
    {
      "postCode": "3401",
      "suburb": "RIVERSIDE"
    },
    {
      "postCode": "3860",
      "suburb": "RIVERSLEA"
    },
    {
      "postCode": "3971",
      "suburb": "ROBERTSONS BEACH"
    },
    {
      "postCode": "3019",
      "suburb": "ROBINSON"
    },
    {
      "postCode": "3549",
      "suburb": "ROBINVALE"
    },
    {
      "postCode": "3549",
      "suburb": "ROBINVALE IRRIGATION DISTRICT SECTION B"
    },
    {
      "postCode": "3549",
      "suburb": "ROBINVALE IRRIGATION DISTRICT SECTION C"
    },
    {
      "postCode": "3549",
      "suburb": "ROBINVALE IRRIGATION DISTRICT SECTION D"
    },
    {
      "postCode": "3549",
      "suburb": "ROBINVALE IRRIGATION DISTRICT SECTION E"
    },
    {
      "postCode": "3561",
      "suburb": "ROCHESTER"
    },
    {
      "postCode": "3442",
      "suburb": "ROCHFORD"
    },
    {
      "postCode": "3335",
      "suburb": "ROCKBANK"
    },
    {
      "postCode": "3401",
      "suburb": "ROCKLANDS"
    },
    {
      "postCode": "3364",
      "suburb": "ROCKLYN"
    },
    {
      "postCode": "3377",
      "suburb": "ROCKY POINT"
    },
    {
      "postCode": "3821",
      "suburb": "ROKEBY"
    },
    {
      "postCode": "3330",
      "suburb": "ROKEWOOD"
    },
    {
      "postCode": "3351",
      "suburb": "ROKEWOOD JUNCTION"
    },
    {
      "postCode": "3434",
      "suburb": "ROMSEY"
    },
    {
      "postCode": "3084",
      "suburb": "ROSANNA"
    },
    {
      "postCode": "3678",
      "suburb": "ROSE RIVER"
    },
    {
      "postCode": "3395",
      "suburb": "ROSEBERY"
    },
    {
      "postCode": "3285",
      "suburb": "ROSEBROOK"
    },
    {
      "postCode": "3939",
      "suburb": "ROSEBUD"
    },
    {
      "postCode": "3939",
      "suburb": "ROSEBUD PLAZA"
    },
    {
      "postCode": "3847",
      "suburb": "ROSEDALE"
    },
    {
      "postCode": "3385",
      "suburb": "ROSES GAP"
    },
    {
      "postCode": "3737",
      "suburb": "ROSEWHITE"
    },
    {
      "postCode": "3564",
      "suburb": "ROSLYNMEAD"
    },
    {
      "postCode": "3351",
      "suburb": "ROSS CREEK"
    },
    {
      "postCode": "3377",
      "suburb": "ROSSBRIDGE"
    },
    {
      "postCode": "3477",
      "suburb": "ROSTRON"
    },
    {
      "postCode": "3340",
      "suburb": "ROWSLEY"
    },
    {
      "postCode": "3178",
      "suburb": "ROWVILLE"
    },
    {
      "postCode": "3064",
      "suburb": "ROXBURGH PARK"
    },
    {
      "postCode": "3050",
      "suburb": "ROYAL MELBOURNE HOSPITAL"
    },
    {
      "postCode": "3712",
      "suburb": "RUBICON"
    },
    {
      "postCode": "3953",
      "suburb": "RUBY"
    },
    {
      "postCode": "3666",
      "suburb": "RUFFY"
    },
    {
      "postCode": "3691",
      "suburb": "RUNNING CREEK"
    },
    {
      "postCode": "3558",
      "suburb": "RUNNYMEDE"
    },
    {
      "postCode": "3388",
      "suburb": "RUPANYUP"
    },
    {
      "postCode": "3612",
      "suburb": "RUSHWORTH"
    },
    {
      "postCode": "3331",
      "suburb": "RUSSELLS BRIDGE"
    },
    {
      "postCode": "3685",
      "suburb": "RUTHERGLEN"
    },
    {
      "postCode": "3875",
      "suburb": "RYANS"
    },
    {
      "postCode": "3992",
      "suburb": "RYANSTON"
    },
    {
      "postCode": "3941",
      "suburb": "RYE"
    },
    {
      "postCode": "3810",
      "suburb": "RYTHDALE"
    },
    {
      "postCode": "3936",
      "suburb": "SAFETY BEACH"
    },
    {
      "postCode": "3461",
      "suburb": "SAILORS FALLS"
    },
    {
      "postCode": "3556",
      "suburb": "SAILORS GULLY"
    },
    {
      "postCode": "3461",
      "suburb": "SAILORS HILL"
    },
    {
      "postCode": "3850",
      "suburb": "SALE"
    },
    {
      "postCode": "3853",
      "suburb": "SALE"
    },
    {
      "postCode": "3852",
      "suburb": "SALE EAST RAAF"
    },
    {
      "postCode": "3517",
      "suburb": "SALISBURY WEST"
    },
    {
      "postCode": "3673",
      "suburb": "SAMARIA"
    },
    {
      "postCode": "3925",
      "suburb": "SAN REMO"
    },
    {
      "postCode": "3312",
      "suburb": "SANDFORD"
    },
    {
      "postCode": "3579",
      "suburb": "SANDHILL LAKE"
    },
    {
      "postCode": "3977",
      "suburb": "SANDHURST"
    },
    {
      "postCode": "3550",
      "suburb": "SANDHURST EAST"
    },
    {
      "postCode": "3462",
      "suburb": "SANDON"
    },
    {
      "postCode": "3171",
      "suburb": "SANDOWN VILLAGE"
    },
    {
      "postCode": "3191",
      "suburb": "SANDRINGHAM"
    },
    {
      "postCode": "3695",
      "suburb": "SANDY CREEK"
    },
    {
      "postCode": "3959",
      "suburb": "SANDY POINT"
    },
    {
      "postCode": "3858",
      "suburb": "SARGOOD"
    },
    {
      "postCode": "3875",
      "suburb": "SARSFIELD"
    },
    {
      "postCode": "3787",
      "suburb": "SASSAFRAS"
    },
    {
      "postCode": "3787",
      "suburb": "SASSAFRAS GULLY"
    },
    {
      "postCode": "3723",
      "suburb": "SAWMILL SETTLEMENT"
    },
    {
      "postCode": "3351",
      "suburb": "SCARSDALE"
    },
    {
      "postCode": "3179",
      "suburb": "SCORESBY"
    },
    {
      "postCode": "3176",
      "suburb": "SCORESBY BC"
    },
    {
      "postCode": "3352",
      "suburb": "SCOTCHMANS LEAD"
    },
    {
      "postCode": "3352",
      "suburb": "SCOTSBURN"
    },
    {
      "postCode": "3267",
      "suburb": "SCOTTS CREEK"
    },
    {
      "postCode": "3533",
      "suburb": "SEA LAKE"
    },
    {
      "postCode": "3028",
      "suburb": "SEABROOK"
    },
    {
      "postCode": "3851",
      "suburb": "SEACOMBE"
    },
    {
      "postCode": "3198",
      "suburb": "SEAFORD"
    },
    {
      "postCode": "3018",
      "suburb": "SEAHOLME"
    },
    {
      "postCode": "3851",
      "suburb": "SEASPRAY"
    },
    {
      "postCode": "3858",
      "suburb": "SEATON"
    },
    {
      "postCode": "3821",
      "suburb": "SEAVIEW"
    },
    {
      "postCode": "3556",
      "suburb": "SEBASTIAN"
    },
    {
      "postCode": "3356",
      "suburb": "SEBASTOPOL"
    },
    {
      "postCode": "3011",
      "suburb": "SEDDON"
    },
    {
      "postCode": "3011",
      "suburb": "SEDDON WEST"
    },
    {
      "postCode": "3551",
      "suburb": "SEDGWICK"
    },
    {
      "postCode": "3159",
      "suburb": "SELBY"
    },
    {
      "postCode": "3737",
      "suburb": "SELWYN"
    },
    {
      "postCode": "3234",
      "suburb": "SEPARATION CREEK"
    },
    {
      "postCode": "3517",
      "suburb": "SERPENTINE"
    },
    {
      "postCode": "3420",
      "suburb": "SERVICETON"
    },
    {
      "postCode": "3139",
      "suburb": "SEVILLE"
    },
    {
      "postCode": "3139",
      "suburb": "SEVILLE EAST"
    },
    {
      "postCode": "3660",
      "suburb": "SEYMOUR"
    },
    {
      "postCode": "3661",
      "suburb": "SEYMOUR"
    },
    {
      "postCode": "3660",
      "suburb": "SEYMOUR SOUTH"
    },
    {
      "postCode": "3821",
      "suburb": "SHADY CREEK"
    },
    {
      "postCode": "3960",
      "suburb": "SHALLOW INLET"
    },
    {
      "postCode": "3898",
      "suburb": "SHANNONVALE"
    },
    {
      "postCode": "3377",
      "suburb": "SHAYS FLAT"
    },
    {
      "postCode": "3331",
      "suburb": "SHE OAKS"
    },
    {
      "postCode": "3666",
      "suburb": "SHEANS CREEK"
    },
    {
      "postCode": "3392",
      "suburb": "SHEEP HILLS"
    },
    {
      "postCode": "3515",
      "suburb": "SHELBOURNE"
    },
    {
      "postCode": "3329",
      "suburb": "SHELFORD"
    },
    {
      "postCode": "3701",
      "suburb": "SHELLEY"
    },
    {
      "postCode": "3461",
      "suburb": "SHEPHERDS FLAT"
    },
    {
      "postCode": "3630",
      "suburb": "SHEPPARTON"
    },
    {
      "postCode": "3632",
      "suburb": "SHEPPARTON"
    },
    {
      "postCode": "3631",
      "suburb": "SHEPPARTON EAST"
    },
    {
      "postCode": "3631",
      "suburb": "SHEPPARTON NORTH"
    },
    {
      "postCode": "3630",
      "suburb": "SHEPPARTON SOUTH"
    },
    {
      "postCode": "3789",
      "suburb": "SHERBROOKE"
    },
    {
      "postCode": "3916",
      "suburb": "SHOREHAM"
    },
    {
      "postCode": "3444",
      "suburb": "SIDONIA"
    },
    {
      "postCode": "3795",
      "suburb": "SILVAN"
    },
    {
      "postCode": "3922",
      "suburb": "SILVERLEAVES"
    },
    {
      "postCode": "3266",
      "suburb": "SIMPSON"
    },
    {
      "postCode": "3888",
      "suburb": "SIMPSONS CREEK"
    },
    {
      "postCode": "3465",
      "suburb": "SIMSON"
    },
    {
      "postCode": "3233",
      "suburb": "SKENES CREEK"
    },
    {
      "postCode": "3233",
      "suburb": "SKENES CREEK NORTH"
    },
    {
      "postCode": "3260",
      "suburb": "SKIBO"
    },
    {
      "postCode": "3518",
      "suburb": "SKINNERS FLAT"
    },
    {
      "postCode": "3361",
      "suburb": "SKIPTON"
    },
    {
      "postCode": "3977",
      "suburb": "SKYE"
    },
    {
      "postCode": "3477",
      "suburb": "SLATY CREEK"
    },
    {
      "postCode": "3364",
      "suburb": "SMEATON"
    },
    {
      "postCode": "3922",
      "suburb": "SMITHS BEACH"
    },
    {
      "postCode": "3760",
      "suburb": "SMITHS GULLY"
    },
    {
      "postCode": "3364",
      "suburb": "SMOKEYTOWN"
    },
    {
      "postCode": "3741",
      "suburb": "SMOKO"
    },
    {
      "postCode": "3351",
      "suburb": "SMYTHES CREEK"
    },
    {
      "postCode": "3351",
      "suburb": "SMYTHESDALE"
    },
    {
      "postCode": "3971",
      "suburb": "SNAKE ISLAND"
    },
    {
      "postCode": "3351",
      "suburb": "SNAKE VALLEY"
    },
    {
      "postCode": "3350",
      "suburb": "SOLDIERS HILL"
    },
    {
      "postCode": "3927",
      "suburb": "SOMERS"
    },
    {
      "postCode": "3062",
      "suburb": "SOMERTON"
    },
    {
      "postCode": "3851",
      "suburb": "SOMERTON PARK"
    },
    {
      "postCode": "3912",
      "suburb": "SOMERVILLE"
    },
    {
      "postCode": "3943",
      "suburb": "SORRENTO"
    },
    {
      "postCode": "3995",
      "suburb": "SOUTH DUDLEY"
    },
    {
      "postCode": "3220",
      "suburb": "SOUTH GEELONG"
    },
    {
      "postCode": "3015",
      "suburb": "SOUTH KINGSVILLE"
    },
    {
      "postCode": "3205",
      "suburb": "SOUTH MELBOURNE"
    },
    {
      "postCode": "3752",
      "suburb": "SOUTH MORANG"
    },
    {
      "postCode": "3260",
      "suburb": "SOUTH PURRUMBETE"
    },
    {
      "postCode": "3006",
      "suburb": "SOUTH WHARF"
    },
    {
      "postCode": "3141",
      "suburb": "SOUTH YARRA"
    },
    {
      "postCode": "3006",
      "suburb": "SOUTHBANK"
    },
    {
      "postCode": "3283",
      "suburb": "SOUTHERN CROSS"
    },
    {
      "postCode": "3192",
      "suburb": "SOUTHLAND CENTRE"
    },
    {
      "postCode": "3461",
      "suburb": "SPARGO CREEK"
    },
    {
      "postCode": "3488",
      "suburb": "SPEED"
    },
    {
      "postCode": "3585",
      "suburb": "SPEEWA"
    },
    {
      "postCode": "3015",
      "suburb": "SPOTSWOOD"
    },
    {
      "postCode": "3550",
      "suburb": "SPRING GULLY"
    },
    {
      "postCode": "3444",
      "suburb": "SPRING HILL"
    },
    {
      "postCode": "3352",
      "suburb": "SPRINGBANK"
    },
    {
      "postCode": "3351",
      "suburb": "SPRINGDALLAH"
    },
    {
      "postCode": "3434",
      "suburb": "SPRINGFIELD"
    },
    {
      "postCode": "3544",
      "suburb": "SPRINGFIELD"
    },
    {
      "postCode": "3682",
      "suburb": "SPRINGHURST"
    },
    {
      "postCode": "3364",
      "suburb": "SPRINGMOUNT"
    },
    {
      "postCode": "3171",
      "suburb": "SPRINGVALE"
    },
    {
      "postCode": "3172",
      "suburb": "SPRINGVALE SOUTH"
    },
    {
      "postCode": "3021",
      "suburb": "ST ALBANS"
    },
    {
      "postCode": "3219",
      "suburb": "ST ALBANS PARK"
    },
    {
      "postCode": "3761",
      "suburb": "ST ANDREWS"
    },
    {
      "postCode": "3941",
      "suburb": "ST ANDREWS BEACH"
    },
    {
      "postCode": "3478",
      "suburb": "ST ARNAUD"
    },
    {
      "postCode": "3477",
      "suburb": "ST ARNAUD EAST"
    },
    {
      "postCode": "3477",
      "suburb": "ST ARNAUD NORTH"
    },
    {
      "postCode": "3995",
      "suburb": "ST CLAIR"
    },
    {
      "postCode": "3620",
      "suburb": "ST GERMAINS"
    },
    {
      "postCode": "3088",
      "suburb": "ST HELENA"
    },
    {
      "postCode": "3285",
      "suburb": "ST HELENS"
    },
    {
      "postCode": "3401",
      "suburb": "ST HELENS PLAINS"
    },
    {
      "postCode": "3727",
      "suburb": "ST JAMES"
    },
    {
      "postCode": "3182",
      "suburb": "ST KILDA"
    },
    {
      "postCode": "3183",
      "suburb": "ST KILDA EAST"
    },
    {
      "postCode": "8004",
      "suburb": "ST KILDA ROAD"
    },
    {
      "postCode": "3004",
      "suburb": "ST KILDA ROAD CENTRAL"
    },
    {
      "postCode": "8008",
      "suburb": "ST KILDA ROAD CENTRAL"
    },
    {
      "postCode": "3004",
      "suburb": "ST KILDA ROAD MELBOURNE"
    },
    {
      "postCode": "3182",
      "suburb": "ST KILDA SOUTH"
    },
    {
      "postCode": "3182",
      "suburb": "ST KILDA WEST"
    },
    {
      "postCode": "3223",
      "suburb": "ST LEONARDS"
    },
    {
      "postCode": "3971",
      "suburb": "STACEYS BRIDGE"
    },
    {
      "postCode": "3351",
      "suburb": "STAFFORDSHIRE REEF"
    },
    {
      "postCode": "3691",
      "suburb": "STAGHORN FLAT"
    },
    {
      "postCode": "3623",
      "suburb": "STANHOPE"
    },
    {
      "postCode": "3623",
      "suburb": "STANHOPE SOUTH"
    },
    {
      "postCode": "3747",
      "suburb": "STANLEY"
    },
    {
      "postCode": "3340",
      "suburb": "STAUGHTON VALE"
    },
    {
      "postCode": "3379",
      "suburb": "STAVELY"
    },
    {
      "postCode": "3380",
      "suburb": "STAWELL"
    },
    {
      "postCode": "3380",
      "suburb": "STAWELL WEST"
    },
    {
      "postCode": "3775",
      "suburb": "STEELS CREEK"
    },
    {
      "postCode": "3331",
      "suburb": "STEIGLITZ"
    },
    {
      "postCode": "3725",
      "suburb": "STEWARTON"
    },
    {
      "postCode": "3893",
      "suburb": "STIRLING"
    },
    {
      "postCode": "3862",
      "suburb": "STOCKDALE"
    },
    {
      "postCode": "3373",
      "suburb": "STOCKYARD HILL"
    },
    {
      "postCode": "3218",
      "suburb": "STONEHAVEN"
    },
    {
      "postCode": "3373",
      "suburb": "STONELEIGH"
    },
    {
      "postCode": "3371",
      "suburb": "STONY CREEK"
    },
    {
      "postCode": "3957",
      "suburb": "STONY CREEK"
    },
    {
      "postCode": "3260",
      "suburb": "STONYFORD"
    },
    {
      "postCode": "3851",
      "suburb": "STRADBROKE"
    },
    {
      "postCode": "3103",
      "suburb": "STRADBROKE PARK"
    },
    {
      "postCode": "3461",
      "suburb": "STRANGWAYS"
    },
    {
      "postCode": "3533",
      "suburb": "STRATEN"
    },
    {
      "postCode": "3862",
      "suburb": "STRATFORD"
    },
    {
      "postCode": "3658",
      "suburb": "STRATH CREEK"
    },
    {
      "postCode": "3622",
      "suburb": "STRATHALLAN"
    },
    {
      "postCode": "3666",
      "suburb": "STRATHBOGIE"
    },
    {
      "postCode": "3550",
      "suburb": "STRATHDALE"
    },
    {
      "postCode": "3312",
      "suburb": "STRATHDOWNIE"
    },
    {
      "postCode": "3099",
      "suburb": "STRATHEWEN"
    },
    {
      "postCode": "3551",
      "suburb": "STRATHFIELDSAYE"
    },
    {
      "postCode": "3301",
      "suburb": "STRATHKELLAR"
    },
    {
      "postCode": "3364",
      "suburb": "STRATHLEA"
    },
    {
      "postCode": "3641",
      "suburb": "STRATHMERTON"
    },
    {
      "postCode": "3041",
      "suburb": "STRATHMORE"
    },
    {
      "postCode": "3041",
      "suburb": "STRATHMORE HEIGHTS"
    },
    {
      "postCode": "3338",
      "suburb": "STRATHTULLOH"
    },
    {
      "postCode": "3351",
      "suburb": "STREATHAM"
    },
    {
      "postCode": "3950",
      "suburb": "STRZELECKI"
    },
    {
      "postCode": "3477",
      "suburb": "STUART MILL"
    },
    {
      "postCode": "3152",
      "suburb": "STUDFIELD"
    },
    {
      "postCode": "3234",
      "suburb": "SUGARLOAF"
    },
    {
      "postCode": "3658",
      "suburb": "SUGARLOAF CREEK"
    },
    {
      "postCode": "3885",
      "suburb": "SUGGAN BUGGAN"
    },
    {
      "postCode": "3352",
      "suburb": "SULKY"
    },
    {
      "postCode": "3922",
      "suburb": "SUMMERLANDS"
    },
    {
      "postCode": "3057",
      "suburb": "SUMNER"
    },
    {
      "postCode": "3429",
      "suburb": "SUNBURY"
    },
    {
      "postCode": "3658",
      "suburb": "SUNDAY CREEK"
    },
    {
      "postCode": "3922",
      "suburb": "SUNDERLAND BAY"
    },
    {
      "postCode": "3496",
      "suburb": "SUNNYCLIFFS"
    },
    {
      "postCode": "3922",
      "suburb": "SUNSET STRIP"
    },
    {
      "postCode": "3020",
      "suburb": "SUNSHINE"
    },
    {
      "postCode": "3020",
      "suburb": "SUNSHINE NORTH"
    },
    {
      "postCode": "3020",
      "suburb": "SUNSHINE WEST"
    },
    {
      "postCode": "8438",
      "suburb": "SUNSHINE WEST"
    },
    {
      "postCode": "8511",
      "suburb": "SUNSHINE WEST"
    },
    {
      "postCode": "3922",
      "suburb": "SURF BEACH"
    },
    {
      "postCode": "3127",
      "suburb": "SURREY HILLS"
    },
    {
      "postCode": "3127",
      "suburb": "SURREY HILLS NORTH"
    },
    {
      "postCode": "3125",
      "suburb": "SURREY HILLS SOUTH"
    },
    {
      "postCode": "3477",
      "suburb": "SUTHERLAND"
    },
    {
      "postCode": "3331",
      "suburb": "SUTHERLANDS CREEK"
    },
    {
      "postCode": "3530",
      "suburb": "SUTTON"
    },
    {
      "postCode": "3448",
      "suburb": "SUTTON GRANGE"
    },
    {
      "postCode": "3225",
      "suburb": "SWAN BAY"
    },
    {
      "postCode": "3585",
      "suburb": "SWAN HILL"
    },
    {
      "postCode": "3585",
      "suburb": "SWAN HILL WEST"
    },
    {
      "postCode": "3225",
      "suburb": "SWAN ISLAND"
    },
    {
      "postCode": "3249",
      "suburb": "SWAN MARSH"
    },
    {
      "postCode": "3903",
      "suburb": "SWAN REACH"
    },
    {
      "postCode": "3673",
      "suburb": "SWANPOOL"
    },
    {
      "postCode": "3477",
      "suburb": "SWANWATER"
    },
    {
      "postCode": "3480",
      "suburb": "SWANWATER WEST"
    },
    {
      "postCode": "3896",
      "suburb": "SWIFTS CREEK"
    },
    {
      "postCode": "3037",
      "suburb": "SYDENHAM"
    },
    {
      "postCode": "3575",
      "suburb": "SYLVATERRE"
    },
    {
      "postCode": "3149",
      "suburb": "SYNDAL"
    },
    {
      "postCode": "3875",
      "suburb": "TABBERABBERA"
    },
    {
      "postCode": "3607",
      "suburb": "TABILK"
    },
    {
      "postCode": "3289",
      "suburb": "TABOR"
    },
    {
      "postCode": "3714",
      "suburb": "TAGGERTY"
    },
    {
      "postCode": "3301",
      "suburb": "TAHARA"
    },
    {
      "postCode": "3315",
      "suburb": "TAHARA BRIDGE"
    },
    {
      "postCode": "3310",
      "suburb": "TAHARA WEST"
    },
    {
      "postCode": "3371",
      "suburb": "TALBOT"
    },
    {
      "postCode": "3691",
      "suburb": "TALGARNO"
    },
    {
      "postCode": "3701",
      "suburb": "TALLANDOON"
    },
    {
      "postCode": "3700",
      "suburb": "TALLANGATTA"
    },
    {
      "postCode": "3700",
      "suburb": "TALLANGATTA EAST"
    },
    {
      "postCode": "3701",
      "suburb": "TALLANGATTA SOUTH"
    },
    {
      "postCode": "3701",
      "suburb": "TALLANGATTA VALLEY"
    },
    {
      "postCode": "3659",
      "suburb": "TALLAROOK"
    },
    {
      "postCode": "3634",
      "suburb": "TALLYGAROOPNA"
    },
    {
      "postCode": "3893",
      "suburb": "TAMBO CROSSING"
    },
    {
      "postCode": "3885",
      "suburb": "TAMBO UPPER"
    },
    {
      "postCode": "3890",
      "suburb": "TAMBOON"
    },
    {
      "postCode": "3858",
      "suburb": "TAMBORITHA"
    },
    {
      "postCode": "3675",
      "suburb": "TAMINICK"
    },
    {
      "postCode": "3669",
      "suburb": "TAMLEUGH"
    },
    {
      "postCode": "3669",
      "suburb": "TAMLEUGH NORTH"
    },
    {
      "postCode": "3260",
      "suburb": "TANDAROOK"
    },
    {
      "postCode": "3571",
      "suburb": "TANDARRA"
    },
    {
      "postCode": "3691",
      "suburb": "TANGAMBALANGA"
    },
    {
      "postCode": "3825",
      "suburb": "TANJIL"
    },
    {
      "postCode": "3833",
      "suburb": "TANJIL BREN"
    },
    {
      "postCode": "3825",
      "suburb": "TANJIL SOUTH"
    },
    {
      "postCode": "3764",
      "suburb": "TANTARABOO"
    },
    {
      "postCode": "3478",
      "suburb": "TANWOOD"
    },
    {
      "postCode": "3249",
      "suburb": "TANYBRYN"
    },
    {
      "postCode": "3447",
      "suburb": "TARADALE"
    },
    {
      "postCode": "3666",
      "suburb": "TARCOMBE"
    },
    {
      "postCode": "3451",
      "suburb": "TARILTA"
    },
    {
      "postCode": "3551",
      "suburb": "TARNAGULLA"
    },
    {
      "postCode": "3029",
      "suburb": "TARNEIT"
    },
    {
      "postCode": "3670",
      "suburb": "TARNOOK"
    },
    {
      "postCode": "3265",
      "suburb": "TAROON"
    },
    {
      "postCode": "3971",
      "suburb": "TARRA VALLEY"
    },
    {
      "postCode": "3414",
      "suburb": "TARRANYURK"
    },
    {
      "postCode": "3971",
      "suburb": "TARRAVILLE"
    },
    {
      "postCode": "3775",
      "suburb": "TARRAWARRA"
    },
    {
      "postCode": "3678",
      "suburb": "TARRAWINGEE"
    },
    {
      "postCode": "3315",
      "suburb": "TARRAYOUKYAN"
    },
    {
      "postCode": "3463",
      "suburb": "TARRENGOWER"
    },
    {
      "postCode": "3315",
      "suburb": "TARRENLEA"
    },
    {
      "postCode": "3301",
      "suburb": "TARRINGTON"
    },
    {
      "postCode": "3283",
      "suburb": "TARRONE"
    },
    {
      "postCode": "3956",
      "suburb": "TARWIN"
    },
    {
      "postCode": "3956",
      "suburb": "TARWIN LOWER"
    },
    {
      "postCode": "3673",
      "suburb": "TATONG"
    },
    {
      "postCode": "3616",
      "suburb": "TATURA"
    },
    {
      "postCode": "3616",
      "suburb": "TATURA EAST"
    },
    {
      "postCode": "3378",
      "suburb": "TATYOON"
    },
    {
      "postCode": "3697",
      "suburb": "TAWONGA"
    },
    {
      "postCode": "3698",
      "suburb": "TAWONGA SOUTH"
    },
    {
      "postCode": "3713",
      "suburb": "TAYLOR BAY"
    },
    {
      "postCode": "3037",
      "suburb": "TAYLORS HILL"
    },
    {
      "postCode": "3038",
      "suburb": "TAYLORS LAKES"
    },
    {
      "postCode": "3579",
      "suburb": "TEAL POINT"
    },
    {
      "postCode": "3160",
      "suburb": "TECOMA"
    },
    {
      "postCode": "3527",
      "suburb": "TEDDYWADDY"
    },
    {
      "postCode": "3527",
      "suburb": "TEDDYWADDY WEST"
    },
    {
      "postCode": "3328",
      "suburb": "TEESDALE"
    },
    {
      "postCode": "3401",
      "suburb": "TELANGATUK EAST"
    },
    {
      "postCode": "3730",
      "suburb": "TELFORD"
    },
    {
      "postCode": "3420",
      "suburb": "TELOPEA DOWNS"
    },
    {
      "postCode": "3106",
      "suburb": "TEMPLESTOWE"
    },
    {
      "postCode": "3107",
      "suburb": "TEMPLESTOWE LOWER"
    },
    {
      "postCode": "3489",
      "suburb": "TEMPY"
    },
    {
      "postCode": "3984",
      "suburb": "TENBY POINT"
    },
    {
      "postCode": "3572",
      "suburb": "TENNYSON"
    },
    {
      "postCode": "3264",
      "suburb": "TERANG"
    },
    {
      "postCode": "3719",
      "suburb": "TERIP TERIP"
    },
    {
      "postCode": "3525",
      "suburb": "TERRAPPEE"
    },
    {
      "postCode": "3575",
      "suburb": "TERRICK TERRICK"
    },
    {
      "postCode": "3573",
      "suburb": "TERRICK TERRICK EAST"
    },
    {
      "postCode": "3260",
      "suburb": "TESBURY"
    },
    {
      "postCode": "3821",
      "suburb": "TETOORA ROAD"
    },
    {
      "postCode": "3527",
      "suburb": "THALIA"
    },
    {
      "postCode": "3825",
      "suburb": "THALLOO"
    },
    {
      "postCode": "3154",
      "suburb": "THE BASIN"
    },
    {
      "postCode": "3268",
      "suburb": "THE COVE"
    },
    {
      "postCode": "3984",
      "suburb": "THE GURDIES"
    },
    {
      "postCode": "3851",
      "suburb": "THE HEART"
    },
    {
      "postCode": "3851",
      "suburb": "THE HONEYSUCKLES"
    },
    {
      "postCode": "3792",
      "suburb": "THE PATCH"
    },
    {
      "postCode": "3265",
      "suburb": "THE SISTERS"
    },
    {
      "postCode": "3691",
      "suburb": "THOLOGOLONG"
    },
    {
      "postCode": "3074",
      "suburb": "THOMASTOWN"
    },
    {
      "postCode": "3219",
      "suburb": "THOMSON"
    },
    {
      "postCode": "3825",
      "suburb": "THOMSON"
    },
    {
      "postCode": "3726",
      "suburb": "THOONA"
    },
    {
      "postCode": "3071",
      "suburb": "THORNBURY"
    },
    {
      "postCode": "3335",
      "suburb": "THORNHILL PARK"
    },
    {
      "postCode": "3712",
      "suburb": "THORNTON"
    },
    {
      "postCode": "3835",
      "suburb": "THORPDALE"
    },
    {
      "postCode": "3824",
      "suburb": "THORPDALE SOUTH"
    },
    {
      "postCode": "3707",
      "suburb": "THOWGLA VALLEY"
    },
    {
      "postCode": "3797",
      "suburb": "THREE BRIDGES"
    },
    {
      "postCode": "3960",
      "suburb": "TIDAL RIVER"
    },
    {
      "postCode": "3885",
      "suburb": "TIMBARRA"
    },
    {
      "postCode": "3268",
      "suburb": "TIMBOON"
    },
    {
      "postCode": "3268",
      "suburb": "TIMBOON WEST"
    },
    {
      "postCode": "3561",
      "suburb": "TIMMERING"
    },
    {
      "postCode": "3465",
      "suburb": "TIMOR"
    },
    {
      "postCode": "3465",
      "suburb": "TIMOR WEST"
    },
    {
      "postCode": "3859",
      "suburb": "TINAMBA"
    },
    {
      "postCode": "3859",
      "suburb": "TINAMBA WEST"
    },
    {
      "postCode": "3708",
      "suburb": "TINTALDRA"
    },
    {
      "postCode": "3542",
      "suburb": "TITTYBONG"
    },
    {
      "postCode": "3549",
      "suburb": "TOL TOL"
    },
    {
      "postCode": "3723",
      "suburb": "TOLMIE"
    },
    {
      "postCode": "3707",
      "suburb": "TOM GROGGIN"
    },
    {
      "postCode": "3621",
      "suburb": "TONGALA"
    },
    {
      "postCode": "3890",
      "suburb": "TONGHI CREEK"
    },
    {
      "postCode": "3896",
      "suburb": "TONGIO"
    },
    {
      "postCode": "3815",
      "suburb": "TONIMBUK"
    },
    {
      "postCode": "3409",
      "suburb": "TOOAN"
    },
    {
      "postCode": "3522",
      "suburb": "TOOBORAC"
    },
    {
      "postCode": "3614",
      "suburb": "TOOLAMBA"
    },
    {
      "postCode": "3614",
      "suburb": "TOOLAMBA WEST"
    },
    {
      "postCode": "3777",
      "suburb": "TOOLANGI"
    },
    {
      "postCode": "3337",
      "suburb": "TOOLERN VALE"
    },
    {
      "postCode": "3551",
      "suburb": "TOOLLEEN"
    },
    {
      "postCode": "3860",
      "suburb": "TOOLOME"
    },
    {
      "postCode": "3401",
      "suburb": "TOOLONDO"
    },
    {
      "postCode": "3285",
      "suburb": "TOOLONG"
    },
    {
      "postCode": "3825",
      "suburb": "TOOMBON"
    },
    {
      "postCode": "3856",
      "suburb": "TOONGABBIE"
    },
    {
      "postCode": "3962",
      "suburb": "TOORA"
    },
    {
      "postCode": "3962",
      "suburb": "TOORA NORTH"
    },
    {
      "postCode": "3980",
      "suburb": "TOORADIN"
    },
    {
      "postCode": "3142",
      "suburb": "TOORAK"
    },
    {
      "postCode": "3909",
      "suburb": "TOORLOO ARM"
    },
    {
      "postCode": "3146",
      "suburb": "TOORONGA"
    },
    {
      "postCode": "3833",
      "suburb": "TOORONGO"
    },
    {
      "postCode": "3941",
      "suburb": "TOOTGAROOK"
    },
    {
      "postCode": "3228",
      "suburb": "TORQUAY"
    },
    {
      "postCode": "3490",
      "suburb": "TORRITA"
    },
    {
      "postCode": "3562",
      "suburb": "TORRUMBARRY"
    },
    {
      "postCode": "3821",
      "suburb": "TORWOOD"
    },
    {
      "postCode": "3888",
      "suburb": "TOSTAREE"
    },
    {
      "postCode": "3012",
      "suburb": "TOTTENHAM"
    },
    {
      "postCode": "3477",
      "suburb": "TOTTINGTON"
    },
    {
      "postCode": "3363",
      "suburb": "TOURELLO"
    },
    {
      "postCode": "3596",
      "suburb": "TOWAN"
    },
    {
      "postCode": "3527",
      "suburb": "TOWANINNY"
    },
    {
      "postCode": "3527",
      "suburb": "TOWANINNY SOUTH"
    },
    {
      "postCode": "3283",
      "suburb": "TOWER HILL"
    },
    {
      "postCode": "3707",
      "suburb": "TOWONG"
    },
    {
      "postCode": "3707",
      "suburb": "TOWONG UPPER"
    },
    {
      "postCode": "3824",
      "suburb": "TRAFALGAR"
    },
    {
      "postCode": "3824",
      "suburb": "TRAFALGAR EAST"
    },
    {
      "postCode": "3824",
      "suburb": "TRAFALGAR SOUTH"
    },
    {
      "postCode": "3579",
      "suburb": "TRAGOWEL"
    },
    {
      "postCode": "3844",
      "suburb": "TRARALGON"
    },
    {
      "postCode": "3844",
      "suburb": "TRARALGON EAST"
    },
    {
      "postCode": "3844",
      "suburb": "TRARALGON SOUTH"
    },
    {
      "postCode": "3032",
      "suburb": "TRAVANCORE"
    },
    {
      "postCode": "3373",
      "suburb": "TRAWALLA"
    },
    {
      "postCode": "3660",
      "suburb": "TRAWOOL"
    },
    {
      "postCode": "3477",
      "suburb": "TRAYNORS LAGOON"
    },
    {
      "postCode": "3785",
      "suburb": "TREMONT"
    },
    {
      "postCode": "3458",
      "suburb": "TRENTHAM"
    },
    {
      "postCode": "3458",
      "suburb": "TRENTHAM EAST"
    },
    {
      "postCode": "3583",
      "suburb": "TRESCO"
    },
    {
      "postCode": "3584",
      "suburb": "TRESCO WEST"
    },
    {
      "postCode": "3953",
      "suburb": "TRIDA"
    },
    {
      "postCode": "3029",
      "suburb": "TRUGANINA"
    },
    {
      "postCode": "3888",
      "suburb": "TUBBUT"
    },
    {
      "postCode": "3915",
      "suburb": "TUERONG"
    },
    {
      "postCode": "3384",
      "suburb": "TULKARA"
    },
    {
      "postCode": "3043",
      "suburb": "TULLAMARINE"
    },
    {
      "postCode": "3728",
      "suburb": "TUNGAMAH"
    },
    {
      "postCode": "3546",
      "suburb": "TUROAR"
    },
    {
      "postCode": "3488",
      "suburb": "TURRIFF"
    },
    {
      "postCode": "3488",
      "suburb": "TURRIFF EAST"
    },
    {
      "postCode": "3960",
      "suburb": "TURTONS CREEK"
    },
    {
      "postCode": "3490",
      "suburb": "TUTYE"
    },
    {
      "postCode": "3658",
      "suburb": "TYAAK"
    },
    {
      "postCode": "3913",
      "suburb": "TYABB"
    },
    {
      "postCode": "3533",
      "suburb": "TYENNA"
    },
    {
      "postCode": "3844",
      "suburb": "TYERS"
    },
    {
      "postCode": "3444",
      "suburb": "TYLDEN"
    },
    {
      "postCode": "3444",
      "suburb": "TYLDEN SOUTH"
    },
    {
      "postCode": "3813",
      "suburb": "TYNONG"
    },
    {
      "postCode": "3813",
      "suburb": "TYNONG NORTH"
    },
    {
      "postCode": "3586",
      "suburb": "TYNTYNDER"
    },
    {
      "postCode": "3586",
      "suburb": "TYNTYNDER SOUTH"
    },
    {
      "postCode": "3285",
      "suburb": "TYRENDARRA"
    },
    {
      "postCode": "3285",
      "suburb": "TYRENDARRA EAST"
    },
    {
      "postCode": "3533",
      "suburb": "TYRRELL"
    },
    {
      "postCode": "3533",
      "suburb": "TYRRELL DOWNS"
    },
    {
      "postCode": "3370",
      "suburb": "ULLINA"
    },
    {
      "postCode": "3318",
      "suburb": "ULLSWATER"
    },
    {
      "postCode": "3544",
      "suburb": "ULTIMA"
    },
    {
      "postCode": "3544",
      "suburb": "ULTIMA EAST"
    },
    {
      "postCode": "3641",
      "suburb": "ULUPNA"
    },
    {
      "postCode": "3629",
      "suburb": "UNDERA"
    },
    {
      "postCode": "3509",
      "suburb": "UNDERBOOL"
    },
    {
      "postCode": "3010",
      "suburb": "UNIVERSITY OF MELBOURNE"
    },
    {
      "postCode": "3669",
      "suburb": "UPOTIPOTPON"
    },
    {
      "postCode": "3156",
      "suburb": "UPPER FERNTREE GULLY"
    },
    {
      "postCode": "3691",
      "suburb": "UPPER GUNDOWRING"
    },
    {
      "postCode": "3673",
      "suburb": "UPPER LURG"
    },
    {
      "postCode": "3756",
      "suburb": "UPPER PLENTY"
    },
    {
      "postCode": "3673",
      "suburb": "UPPER RYANS CREEK"
    },
    {
      "postCode": "3664",
      "suburb": "UPTON HILL"
    },
    {
      "postCode": "3158",
      "suburb": "UPWEY"
    },
    {
      "postCode": "3860",
      "suburb": "VALENCIA CREEK"
    },
    {
      "postCode": "3407",
      "suburb": "VASEY"
    },
    {
      "postCode": "3451",
      "suburb": "VAUGHAN"
    },
    {
      "postCode": "3401",
      "suburb": "VECTIS"
    },
    {
      "postCode": "3922",
      "suburb": "VENTNOR"
    },
    {
      "postCode": "3956",
      "suburb": "VENUS BAY"
    },
    {
      "postCode": "3133",
      "suburb": "VERMONT"
    },
    {
      "postCode": "3133",
      "suburb": "VERMONT SOUTH"
    },
    {
      "postCode": "3814",
      "suburb": "VERVALE"
    },
    {
      "postCode": "3833",
      "suburb": "VESPER"
    },
    {
      "postCode": "3294",
      "suburb": "VICTORIA POINT"
    },
    {
      "postCode": "3294",
      "suburb": "VICTORIA VALLEY"
    },
    {
      "postCode": "3084",
      "suburb": "VIEWBANK"
    },
    {
      "postCode": "3591",
      "suburb": "VINIFERA"
    },
    {
      "postCode": "3669",
      "suburb": "VIOLET TOWN"
    },
    {
      "postCode": "3325",
      "suburb": "VITE VITE"
    },
    {
      "postCode": "3325",
      "suburb": "VITE VITE NORTH"
    },
    {
      "postCode": "3885",
      "suburb": "W TREE"
    },
    {
      "postCode": "3637",
      "suburb": "WAAIA"
    },
    {
      "postCode": "3551",
      "suburb": "WAANYARRA"
    },
    {
      "postCode": "3269",
      "suburb": "WAARRE"
    },
    {
      "postCode": "3678",
      "suburb": "WABONGA"
    },
    {
      "postCode": "3646",
      "suburb": "WAGGARANDALL"
    },
    {
      "postCode": "3687",
      "suburb": "WAHGUNYAH"
    },
    {
      "postCode": "3608",
      "suburb": "WAHRING"
    },
    {
      "postCode": "3401",
      "suburb": "WAIL"
    },
    {
      "postCode": "3887",
      "suburb": "WAIREWA"
    },
    {
      "postCode": "3544",
      "suburb": "WAITCHIE"
    },
    {
      "postCode": "3385",
      "suburb": "WAL WAL"
    },
    {
      "postCode": "3678",
      "suburb": "WALDARA"
    },
    {
      "postCode": "3825",
      "suburb": "WALHALLA"
    },
    {
      "postCode": "3825",
      "suburb": "WALHALLA EAST"
    },
    {
      "postCode": "3956",
      "suburb": "WALKERVILLE"
    },
    {
      "postCode": "3956",
      "suburb": "WALKERVILLE NORTH"
    },
    {
      "postCode": "3956",
      "suburb": "WALKERVILLE SOUTH"
    },
    {
      "postCode": "3352",
      "suburb": "WALLACE"
    },
    {
      "postCode": "3303",
      "suburb": "WALLACEDALE"
    },
    {
      "postCode": "3891",
      "suburb": "WALLAGARAUGH"
    },
    {
      "postCode": "3387",
      "suburb": "WALLALOO"
    },
    {
      "postCode": "3387",
      "suburb": "WALLALOO EAST"
    },
    {
      "postCode": "3756",
      "suburb": "WALLAN"
    },
    {
      "postCode": "3351",
      "suburb": "WALLINDUC"
    },
    {
      "postCode": "3222",
      "suburb": "WALLINGTON"
    },
    {
      "postCode": "3401",
      "suburb": "WALLUP"
    },
    {
      "postCode": "3463",
      "suburb": "WALMER"
    },
    {
      "postCode": "3875",
      "suburb": "WALPA"
    },
    {
      "postCode": "3507",
      "suburb": "WALPEUP"
    },
    {
      "postCode": "3709",
      "suburb": "WALWA"
    },
    {
      "postCode": "3612",
      "suburb": "WANALTA"
    },
    {
      "postCode": "3216",
      "suburb": "WANDANA HEIGHTS"
    },
    {
      "postCode": "3579",
      "suburb": "WANDELLA"
    },
    {
      "postCode": "3744",
      "suburb": "WANDILIGONG"
    },
    {
      "postCode": "3139",
      "suburb": "WANDIN EAST"
    },
    {
      "postCode": "3139",
      "suburb": "WANDIN NORTH"
    },
    {
      "postCode": "3312",
      "suburb": "WANDO BRIDGE"
    },
    {
      "postCode": "3312",
      "suburb": "WANDO VALE"
    },
    {
      "postCode": "3758",
      "suburb": "WANDONG"
    },
    {
      "postCode": "3549",
      "suburb": "WANDOWN"
    },
    {
      "postCode": "3678",
      "suburb": "WANGANDARY"
    },
    {
      "postCode": "3891",
      "suburb": "WANGARABELL"
    },
    {
      "postCode": "3676",
      "suburb": "WANGARATTA"
    },
    {
      "postCode": "3677",
      "suburb": "WANGARATTA"
    },
    {
      "postCode": "3678",
      "suburb": "WANGARATTA FORWARD"
    },
    {
      "postCode": "3678",
      "suburb": "WANGARATTA SOUTH"
    },
    {
      "postCode": "3530",
      "suburb": "WANGIE"
    },
    {
      "postCode": "3279",
      "suburb": "WANGOOM"
    },
    {
      "postCode": "3301",
      "suburb": "WANNON"
    },
    {
      "postCode": "3152",
      "suburb": "WANTIRNA"
    },
    {
      "postCode": "3152",
      "suburb": "WANTIRNA SOUTH"
    },
    {
      "postCode": "3616",
      "suburb": "WARANGA"
    },
    {
      "postCode": "3612",
      "suburb": "WARANGA SHORES"
    },
    {
      "postCode": "3959",
      "suburb": "WARATAH BAY"
    },
    {
      "postCode": "3799",
      "suburb": "WARBURTON"
    },
    {
      "postCode": "3465",
      "suburb": "WAREEK"
    },
    {
      "postCode": "3505",
      "suburb": "WARGAN"
    },
    {
      "postCode": "3482",
      "suburb": "WARMUR"
    },
    {
      "postCode": "3243",
      "suburb": "WARNCOORT"
    },
    {
      "postCode": "3530",
      "suburb": "WARNE"
    },
    {
      "postCode": "3980",
      "suburb": "WARNEET"
    },
    {
      "postCode": "3286",
      "suburb": "WARRABKOOK"
    },
    {
      "postCode": "3393",
      "suburb": "WARRACKNABEAL"
    },
    {
      "postCode": "3820",
      "suburb": "WARRAGUL"
    },
    {
      "postCode": "3821",
      "suburb": "WARRAGUL SOUTH"
    },
    {
      "postCode": "3821",
      "suburb": "WARRAGUL WEST"
    },
    {
      "postCode": "3377",
      "suburb": "WARRAK"
    },
    {
      "postCode": "3113",
      "suburb": "WARRANDYTE"
    },
    {
      "postCode": "3134",
      "suburb": "WARRANDYTE SOUTH"
    },
    {
      "postCode": "3134",
      "suburb": "WARRANWOOD"
    },
    {
      "postCode": "3301",
      "suburb": "WARRAYURE"
    },
    {
      "postCode": "3670",
      "suburb": "WARRENBAYNE"
    },
    {
      "postCode": "3352",
      "suburb": "WARRENHEIP"
    },
    {
      "postCode": "3478",
      "suburb": "WARRENMANG"
    },
    {
      "postCode": "3249",
      "suburb": "WARRION"
    },
    {
      "postCode": "3280",
      "suburb": "WARRNAMBOOL"
    },
    {
      "postCode": "3312",
      "suburb": "WARROCK"
    },
    {
      "postCode": "3283",
      "suburb": "WARRONG"
    },
    {
      "postCode": "3401",
      "suburb": "WARTOOK"
    },
    {
      "postCode": "3482",
      "suburb": "WATCHEM"
    },
    {
      "postCode": "3482",
      "suburb": "WATCHEM WEST"
    },
    {
      "postCode": "3485",
      "suburb": "WATCHUPGA"
    },
    {
      "postCode": "3862",
      "suburb": "WATERFORD"
    },
    {
      "postCode": "3658",
      "suburb": "WATERFORD PARK"
    },
    {
      "postCode": "3038",
      "suburb": "WATERGARDENS"
    },
    {
      "postCode": "3875",
      "suburb": "WATERHOLES"
    },
    {
      "postCode": "3373",
      "suburb": "WATERLOO"
    },
    {
      "postCode": "3195",
      "suburb": "WATERWAYS"
    },
    {
      "postCode": "3087",
      "suburb": "WATSONIA"
    },
    {
      "postCode": "3087",
      "suburb": "WATSONIA NORTH"
    },
    {
      "postCode": "3097",
      "suburb": "WATSONS CREEK"
    },
    {
      "postCode": "3995",
      "suburb": "WATTLE BANK"
    },
    {
      "postCode": "3384",
      "suburb": "WATTLE CREEK"
    },
    {
      "postCode": "3352",
      "suburb": "WATTLE FLAT"
    },
    {
      "postCode": "3096",
      "suburb": "WATTLE GLEN"
    },
    {
      "postCode": "3237",
      "suburb": "WATTLE HILL"
    },
    {
      "postCode": "3128",
      "suburb": "WATTLE PARK"
    },
    {
      "postCode": "3145",
      "suburb": "WATTLETREE ROAD PO"
    },
    {
      "postCode": "3352",
      "suburb": "WAUBRA"
    },
    {
      "postCode": "3216",
      "suburb": "WAURN PONDS"
    },
    {
      "postCode": "3170",
      "suburb": "WAVERLEY GARDENS"
    },
    {
      "postCode": "3888",
      "suburb": "WAYGARA"
    },
    {
      "postCode": "3352",
      "suburb": "WEATHERBOARD"
    },
    {
      "postCode": "3518",
      "suburb": "WEDDERBURN"
    },
    {
      "postCode": "3518",
      "suburb": "WEDDERBURN JUNCTION"
    },
    {
      "postCode": "3568",
      "suburb": "WEE WEE RUP"
    },
    {
      "postCode": "3237",
      "suburb": "WEEAPROINAH"
    },
    {
      "postCode": "3251",
      "suburb": "WEERING"
    },
    {
      "postCode": "3260",
      "suburb": "WEERITE"
    },
    {
      "postCode": "3518",
      "suburb": "WEHLA"
    },
    {
      "postCode": "3338",
      "suburb": "WEIR VIEWS"
    },
    {
      "postCode": "3551",
      "suburb": "WELLSFORD"
    },
    {
      "postCode": "3462",
      "suburb": "WELSHMANS REEF"
    },
    {
      "postCode": "3966",
      "suburb": "WELSHPOOL"
    },
    {
      "postCode": "3549",
      "suburb": "WEMEN"
    },
    {
      "postCode": "3355",
      "suburb": "WENDOUREE"
    },
    {
      "postCode": "3355",
      "suburb": "WENDOUREE VILLAGE"
    },
    {
      "postCode": "3241",
      "suburb": "WENSLEYDALE"
    },
    {
      "postCode": "3875",
      "suburb": "WENTWORTH"
    },
    {
      "postCode": "3186",
      "suburb": "WERE STREET PO"
    },
    {
      "postCode": "3352",
      "suburb": "WERNETH"
    },
    {
      "postCode": "3364",
      "suburb": "WERONA"
    },
    {
      "postCode": "3030",
      "suburb": "WERRIBEE"
    },
    {
      "postCode": "3030",
      "suburb": "WERRIBEE SOUTH"
    },
    {
      "postCode": "3496",
      "suburb": "WERRIMULL"
    },
    {
      "postCode": "3799",
      "suburb": "WESBURN"
    },
    {
      "postCode": "3550",
      "suburb": "WEST BENDIGO"
    },
    {
      "postCode": "3992",
      "suburb": "WEST CREEK"
    },
    {
      "postCode": "3012",
      "suburb": "WEST FOOTSCRAY"
    },
    {
      "postCode": "3003",
      "suburb": "WEST MELBOURNE"
    },
    {
      "postCode": "3690",
      "suburb": "WEST WODONGA"
    },
    {
      "postCode": "3825",
      "suburb": "WESTBURY"
    },
    {
      "postCode": "3579",
      "suburb": "WESTBY"
    },
    {
      "postCode": "3049",
      "suburb": "WESTMEADOWS"
    },
    {
      "postCode": "3351",
      "suburb": "WESTMERE"
    },
    {
      "postCode": "3714",
      "suburb": "WHANREGARWEN"
    },
    {
      "postCode": "3564",
      "suburb": "WHARPARILLA"
    },
    {
      "postCode": "3461",
      "suburb": "WHEATSHEAF"
    },
    {
      "postCode": "3150",
      "suburb": "WHEELERS HILL"
    },
    {
      "postCode": "3556",
      "suburb": "WHIPSTICK"
    },
    {
      "postCode": "3483",
      "suburb": "WHIRILY"
    },
    {
      "postCode": "3550",
      "suburb": "WHITE HILLS"
    },
    {
      "postCode": "3660",
      "suburb": "WHITEHEADS CREEK"
    },
    {
      "postCode": "3950",
      "suburb": "WHITELAW"
    },
    {
      "postCode": "3733",
      "suburb": "WHITFIELD"
    },
    {
      "postCode": "3678",
      "suburb": "WHITLANDS"
    },
    {
      "postCode": "3219",
      "suburb": "WHITTINGTON"
    },
    {
      "postCode": "3757",
      "suburb": "WHITTLESEA"
    },
    {
      "postCode": "3243",
      "suburb": "WHOOREL"
    },
    {
      "postCode": "3735",
      "suburb": "WHOROULY"
    },
    {
      "postCode": "3735",
      "suburb": "WHOROULY EAST"
    },
    {
      "postCode": "3735",
      "suburb": "WHOROULY SOUTH"
    },
    {
      "postCode": "3612",
      "suburb": "WHROO"
    },
    {
      "postCode": "3379",
      "suburb": "WICKLIFFE"
    },
    {
      "postCode": "3728",
      "suburb": "WILBY"
    },
    {
      "postCode": "3953",
      "suburb": "WILD DOG VALLEY"
    },
    {
      "postCode": "3429",
      "suburb": "WILDWOOD"
    },
    {
      "postCode": "3393",
      "suburb": "WILKUR"
    },
    {
      "postCode": "3485",
      "suburb": "WILLANGIE"
    },
    {
      "postCode": "3283",
      "suburb": "WILLATOOK"
    },
    {
      "postCode": "3379",
      "suburb": "WILLAURA"
    },
    {
      "postCode": "3379",
      "suburb": "WILLAURA NORTH"
    },
    {
      "postCode": "3393",
      "suburb": "WILLENABRINA"
    },
    {
      "postCode": "3027",
      "suburb": "WILLIAMS LANDING"
    },
    {
      "postCode": "3016",
      "suburb": "WILLIAMSTOWN"
    },
    {
      "postCode": "3016",
      "suburb": "WILLIAMSTOWN NORTH"
    },
    {
      "postCode": "3825",
      "suburb": "WILLOW GROVE"
    },
    {
      "postCode": "3764",
      "suburb": "WILLOWMAVIN"
    },
    {
      "postCode": "3360",
      "suburb": "WILLOWVALE"
    },
    {
      "postCode": "3847",
      "suburb": "WILLUNG"
    },
    {
      "postCode": "3847",
      "suburb": "WILLUNG SOUTH"
    },
    {
      "postCode": "3515",
      "suburb": "WILSONS HILL"
    },
    {
      "postCode": "3960",
      "suburb": "WILSONS PROMONTORY"
    },
    {
      "postCode": "3922",
      "suburb": "WIMBLEDON HEIGHTS"
    },
    {
      "postCode": "3241",
      "suburb": "WINCHELSEA"
    },
    {
      "postCode": "3241",
      "suburb": "WINCHELSEA SOUTH"
    },
    {
      "postCode": "3352",
      "suburb": "WINDERMERE"
    },
    {
      "postCode": "3181",
      "suburb": "WINDSOR"
    },
    {
      "postCode": "3891",
      "suburb": "WINGAN RIVER"
    },
    {
      "postCode": "3321",
      "suburb": "WINGEEL"
    },
    {
      "postCode": "3477",
      "suburb": "WINJALLOK"
    },
    {
      "postCode": "3585",
      "suburb": "WINLATON"
    },
    {
      "postCode": "3546",
      "suburb": "WINNAMBOOL"
    },
    {
      "postCode": "3304",
      "suburb": "WINNAP"
    },
    {
      "postCode": "3858",
      "suburb": "WINNINDOO"
    },
    {
      "postCode": "3281",
      "suburb": "WINSLOW"
    },
    {
      "postCode": "3358",
      "suburb": "WINTER VALLEY"
    },
    {
      "postCode": "3673",
      "suburb": "WINTON"
    },
    {
      "postCode": "3673",
      "suburb": "WINTON NORTH"
    },
    {
      "postCode": "3608",
      "suburb": "WIRRATE"
    },
    {
      "postCode": "3885",
      "suburb": "WISELEIGH"
    },
    {
      "postCode": "3189",
      "suburb": "WISHART"
    },
    {
      "postCode": "3689",
      "suburb": "WODONGA"
    },
    {
      "postCode": "3690",
      "suburb": "WODONGA"
    },
    {
      "postCode": "3691",
      "suburb": "WODONGA FORWARD"
    },
    {
      "postCode": "3690",
      "suburb": "WODONGA PLAZA"
    },
    {
      "postCode": "3750",
      "suburb": "WOLLERT"
    },
    {
      "postCode": "3888",
      "suburb": "WOMBAT CREEK"
    },
    {
      "postCode": "3409",
      "suburb": "WOMBELANO"
    },
    {
      "postCode": "3971",
      "suburb": "WON WRON"
    },
    {
      "postCode": "3960",
      "suburb": "WONGA"
    },
    {
      "postCode": "3115",
      "suburb": "WONGA PARK"
    },
    {
      "postCode": "3234",
      "suburb": "WONGARRA"
    },
    {
      "postCode": "3862",
      "suburb": "WONGUNGARRA"
    },
    {
      "postCode": "3737",
      "suburb": "WONNANGATTA"
    },
    {
      "postCode": "3995",
      "suburb": "WONTHAGGI"
    },
    {
      "postCode": "3401",
      "suburb": "WONWONDAH"
    },
    {
      "postCode": "3962",
      "suburb": "WONYIP"
    },
    {
      "postCode": "3596",
      "suburb": "WOOD WOOD"
    },
    {
      "postCode": "3442",
      "suburb": "WOODEND"
    },
    {
      "postCode": "3442",
      "suburb": "WOODEND NORTH"
    },
    {
      "postCode": "3715",
      "suburb": "WOODFIELD"
    },
    {
      "postCode": "3281",
      "suburb": "WOODFORD"
    },
    {
      "postCode": "3875",
      "suburb": "WOODGLEN"
    },
    {
      "postCode": "3294",
      "suburb": "WOODHOUSE"
    },
    {
      "postCode": "3945",
      "suburb": "WOODLEIGH"
    },
    {
      "postCode": "3723",
      "suburb": "WOODS POINT"
    },
    {
      "postCode": "3874",
      "suburb": "WOODSIDE"
    },
    {
      "postCode": "3874",
      "suburb": "WOODSIDE BEACH"
    },
    {
      "postCode": "3874",
      "suburb": "WOODSIDE NORTH"
    },
    {
      "postCode": "3751",
      "suburb": "WOODSTOCK"
    },
    {
      "postCode": "3551",
      "suburb": "WOODSTOCK ON LODDON"
    },
    {
      "postCode": "3463",
      "suburb": "WOODSTOCK WEST"
    },
    {
      "postCode": "3556",
      "suburb": "WOODVALE"
    },
    {
      "postCode": "3249",
      "suburb": "WOOL WOOL"
    },
    {
      "postCode": "3995",
      "suburb": "WOOLAMAI"
    },
    {
      "postCode": "3860",
      "suburb": "WOOLENOOK"
    },
    {
      "postCode": "3518",
      "suburb": "WOOLSHED FLAT"
    },
    {
      "postCode": "3276",
      "suburb": "WOOLSTHORPE"
    },
    {
      "postCode": "3485",
      "suburb": "WOOMELANG"
    },
    {
      "postCode": "3747",
      "suburb": "WOORAGEE"
    },
    {
      "postCode": "3962",
      "suburb": "WOORARRA EAST"
    },
    {
      "postCode": "3960",
      "suburb": "WOORARRA WEST"
    },
    {
      "postCode": "3953",
      "suburb": "WOOREEN"
    },
    {
      "postCode": "3139",
      "suburb": "WOORI YALLOCK"
    },
    {
      "postCode": "3589",
      "suburb": "WOORINEN"
    },
    {
      "postCode": "3589",
      "suburb": "WOORINEN NORTH"
    },
    {
      "postCode": "3588",
      "suburb": "WOORINEN SOUTH"
    },
    {
      "postCode": "3272",
      "suburb": "WOORNDOO"
    },
    {
      "postCode": "3525",
      "suburb": "WOOROONOOK"
    },
    {
      "postCode": "3518",
      "suburb": "WOOSANG"
    },
    {
      "postCode": "3315",
      "suburb": "WOOTONG VALE"
    },
    {
      "postCode": "3858",
      "suburb": "WORROWING"
    },
    {
      "postCode": "3860",
      "suburb": "WRATHUNG"
    },
    {
      "postCode": "3860",
      "suburb": "WRIXON"
    },
    {
      "postCode": "3891",
      "suburb": "WROXHAM"
    },
    {
      "postCode": "3875",
      "suburb": "WUK WUK"
    },
    {
      "postCode": "3885",
      "suburb": "WULGULMERANG"
    },
    {
      "postCode": "3885",
      "suburb": "WULGULMERANG EAST"
    },
    {
      "postCode": "3885",
      "suburb": "WULGULMERANG WEST"
    },
    {
      "postCode": "3635",
      "suburb": "WUNGHNU"
    },
    {
      "postCode": "3241",
      "suburb": "WURDIBOLUC"
    },
    {
      "postCode": "3850",
      "suburb": "WURRUK"
    },
    {
      "postCode": "3875",
      "suburb": "WY YUNG"
    },
    {
      "postCode": "3527",
      "suburb": "WYCHEPROOF"
    },
    {
      "postCode": "3527",
      "suburb": "WYCHEPROOF SOUTH"
    },
    {
      "postCode": "3525",
      "suburb": "WYCHITELLA"
    },
    {
      "postCode": "3525",
      "suburb": "WYCHITELLA NORTH"
    },
    {
      "postCode": "3234",
      "suburb": "WYE RIVER"
    },
    {
      "postCode": "3237",
      "suburb": "WYELANGTA"
    },
    {
      "postCode": "3024",
      "suburb": "WYNDHAM VALE"
    },
    {
      "postCode": "3620",
      "suburb": "WYUNA"
    },
    {
      "postCode": "3620",
      "suburb": "WYUNA EAST"
    },
    {
      "postCode": "3424",
      "suburb": "YAAPEET"
    },
    {
      "postCode": "3646",
      "suburb": "YABBA NORTH"
    },
    {
      "postCode": "3646",
      "suburb": "YABBA SOUTH"
    },
    {
      "postCode": "3749",
      "suburb": "YACKANDANDAH"
    },
    {
      "postCode": "3637",
      "suburb": "YALCA"
    },
    {
      "postCode": "3378",
      "suburb": "YALLA-Y-POORA"
    },
    {
      "postCode": "3085",
      "suburb": "YALLAMBIE"
    },
    {
      "postCode": "3825",
      "suburb": "YALLOURN"
    },
    {
      "postCode": "3825",
      "suburb": "YALLOURN NORTH"
    },
    {
      "postCode": "3885",
      "suburb": "YALMY"
    },
    {
      "postCode": "3285",
      "suburb": "YAMBUK"
    },
    {
      "postCode": "3621",
      "suburb": "YAMBUNA"
    },
    {
      "postCode": "3755",
      "suburb": "YAN YEAN"
    },
    {
      "postCode": "3418",
      "suburb": "YANAC"
    },
    {
      "postCode": "3960",
      "suburb": "YANAKIE"
    },
    {
      "postCode": "3537",
      "suburb": "YANDO"
    },
    {
      "postCode": "3461",
      "suburb": "YANDOIT"
    },
    {
      "postCode": "3461",
      "suburb": "YANDOIT HILLS"
    },
    {
      "postCode": "3283",
      "suburb": "YANGERY"
    },
    {
      "postCode": "3858",
      "suburb": "YANGOURA"
    },
    {
      "postCode": "3981",
      "suburb": "YANNATHAN"
    },
    {
      "postCode": "3451",
      "suburb": "YAPEEN"
    },
    {
      "postCode": "3719",
      "suburb": "YARCK"
    },
    {
      "postCode": "3283",
      "suburb": "YARPTURK"
    },
    {
      "postCode": "3775",
      "suburb": "YARRA GLEN"
    },
    {
      "postCode": "3797",
      "suburb": "YARRA JUNCTION"
    },
    {
      "postCode": "3516",
      "suburb": "YARRABERB"
    },
    {
      "postCode": "3823",
      "suburb": "YARRAGON"
    },
    {
      "postCode": "3823",
      "suburb": "YARRAGON SOUTH"
    },
    {
      "postCode": "3971",
      "suburb": "YARRAM"
    },
    {
      "postCode": "3091",
      "suburb": "YARRAMBAT"
    },
    {
      "postCode": "3013",
      "suburb": "YARRAVILLE"
    },
    {
      "postCode": "3013",
      "suburb": "YARRAVILLE WEST"
    },
    {
      "postCode": "3575",
      "suburb": "YARRAWALLA"
    },
    {
      "postCode": "3730",
      "suburb": "YARRAWONGA"
    },
    {
      "postCode": "3730",
      "suburb": "YARRAWONGA SOUTH"
    },
    {
      "postCode": "3644",
      "suburb": "YARROWEYAH"
    },
    {
      "postCode": "3677",
      "suburb": "YARRUNGA"
    },
    {
      "postCode": "3301",
      "suburb": "YATCHAW"
    },
    {
      "postCode": "3478",
      "suburb": "YAWONG HILLS"
    },
    {
      "postCode": "3717",
      "suburb": "YEA"
    },
    {
      "postCode": "3139",
      "suburb": "YELLINGBO"
    },
    {
      "postCode": "3505",
      "suburb": "YELTA"
    },
    {
      "postCode": "3352",
      "suburb": "YENDON"
    },
    {
      "postCode": "3249",
      "suburb": "YEO"
    },
    {
      "postCode": "3249",
      "suburb": "YEODENE"
    },
    {
      "postCode": "3770",
      "suburb": "YERING"
    },
    {
      "postCode": "3525",
      "suburb": "YEUNGROON"
    },
    {
      "postCode": "3525",
      "suburb": "YEUNGROON EAST"
    },
    {
      "postCode": "3638",
      "suburb": "YIELIMA"
    },
    {
      "postCode": "3869",
      "suburb": "YINNAR"
    },
    {
      "postCode": "3869",
      "suburb": "YINNAR SOUTH"
    },
    {
      "postCode": "3477",
      "suburb": "YORK PLAINS"
    },
    {
      "postCode": "3646",
      "suburb": "YOUANMITE"
    },
    {
      "postCode": "3728",
      "suburb": "YOUARANG"
    },
    {
      "postCode": "3301",
      "suburb": "YULECART"
    },
    {
      "postCode": "3727",
      "suburb": "YUNDOOL"
    },
    {
      "postCode": "3063",
      "suburb": "YUROKE"
    },
    {
      "postCode": "3237",
      "suburb": "YUULONG"
    },
    {
      "postCode": "3634",
      "suburb": "ZEERUST"
    },
    {
      "postCode": "3401",
      "suburb": "ZUMSTEINS"
    }
  ];
  constructor() { }
}
