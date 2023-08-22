import { Injectable } from '@angular/core';
import { IPostCodeItem } from 'src/app/interface/global/global.interface';

@Injectable({
  providedIn: 'root'
})
export class QldService {
  public data: IPostCodeItem[] =
  [
    {
      "postCode": "4613",
      "suburb": "ABBEYWOOD"
    },
    {
      "postCode": "4670",
      "suburb": "ABBOTSFORD"
    },
    {
      "postCode": "4627",
      "suburb": "ABERCORN"
    },
    {
      "postCode": "4850",
      "suburb": "ABERGOWRIE"
    },
    {
      "postCode": "4892",
      "suburb": "ABINGDON DOWNS"
    },
    {
      "postCode": "4660",
      "suburb": "ABINGTON"
    },
    {
      "postCode": "4110",
      "suburb": "ACACIA RIDGE"
    },
    {
      "postCode": "4401",
      "suburb": "ACLAND"
    },
    {
      "postCode": "4343",
      "suburb": "ADARE"
    },
    {
      "postCode": "4474",
      "suburb": "ADAVALE"
    },
    {
      "postCode": "4703",
      "suburb": "ADELAIDE PARK"
    },
    {
      "postCode": "4211",
      "suburb": "ADVANCETOWN"
    },
    {
      "postCode": "4870",
      "suburb": "AEROGLEN"
    },
    {
      "postCode": "4677",
      "suburb": "AGNES WATER"
    },
    {
      "postCode": "4807",
      "suburb": "AIRDMILLAN"
    },
    {
      "postCode": "4802",
      "suburb": "AIRLIE BEACH"
    },
    {
      "postCode": "4807",
      "suburb": "AIRVILLE"
    },
    {
      "postCode": "4814",
      "suburb": "AITKENVALE"
    },
    {
      "postCode": "4820",
      "suburb": "ALABAMA HILL"
    },
    {
      "postCode": "4035",
      "suburb": "ALBANY CREEK"
    },
    {
      "postCode": "4702",
      "suburb": "ALBERTA"
    },
    {
      "postCode": "4207",
      "suburb": "ALBERTON"
    },
    {
      "postCode": "4722",
      "suburb": "ALBINIA"
    },
    {
      "postCode": "4010",
      "suburb": "ALBION"
    },
    {
      "postCode": "4822",
      "suburb": "ALBION"
    },
    {
      "postCode": "4010",
      "suburb": "ALBION BC"
    },
    {
      "postCode": "4010",
      "suburb": "ALBION DC"
    },
    {
      "postCode": "4051",
      "suburb": "ALDERLEY"
    },
    {
      "postCode": "4650",
      "suburb": "ALDERSHOT"
    },
    {
      "postCode": "4694",
      "suburb": "ALDOGA"
    },
    {
      "postCode": "4740",
      "suburb": "ALEXANDRA"
    },
    {
      "postCode": "4572",
      "suburb": "ALEXANDRA HEADLAND"
    },
    {
      "postCode": "4161",
      "suburb": "ALEXANDRA HILLS"
    },
    {
      "postCode": "4115",
      "suburb": "ALGESTER"
    },
    {
      "postCode": "4610",
      "suburb": "ALICE CREEK"
    },
    {
      "postCode": "4817",
      "suburb": "ALICE RIVER"
    },
    {
      "postCode": "4370",
      "suburb": "ALLAN"
    },
    {
      "postCode": "4310",
      "suburb": "ALLANDALE"
    },
    {
      "postCode": "4700",
      "suburb": "ALLENSTOWN"
    },
    {
      "postCode": "4285",
      "suburb": "ALLENVIEW"
    },
    {
      "postCode": "4740",
      "suburb": "ALLIGATOR CREEK"
    },
    {
      "postCode": "4816",
      "suburb": "ALLIGATOR CREEK"
    },
    {
      "postCode": "4850",
      "suburb": "ALLINGHAM"
    },
    {
      "postCode": "4362",
      "suburb": "ALLORA"
    },
    {
      "postCode": "4670",
      "suburb": "ALLOWAY"
    },
    {
      "postCode": "4871",
      "suburb": "ALMADEN"
    },
    {
      "postCode": "4871",
      "suburb": "ALOOMBA"
    },
    {
      "postCode": "4724",
      "suburb": "ALPHA"
    },
    {
      "postCode": "4702",
      "suburb": "ALSACE"
    },
    {
      "postCode": "4702",
      "suburb": "ALTON DOWNS"
    },
    {
      "postCode": "4807",
      "suburb": "ALVA"
    },
    {
      "postCode": "4570",
      "suburb": "AMAMOOR"
    },
    {
      "postCode": "4570",
      "suburb": "AMAMOOR CREEK"
    },
    {
      "postCode": "4829",
      "suburb": "AMAROO"
    },
    {
      "postCode": "4871",
      "suburb": "AMBER"
    },
    {
      "postCode": "4306",
      "suburb": "AMBERLEY"
    },
    {
      "postCode": "4695",
      "suburb": "AMBROSE"
    },
    {
      "postCode": "4462",
      "suburb": "AMBY"
    },
    {
      "postCode": "4380",
      "suburb": "AMIENS"
    },
    {
      "postCode": "4183",
      "suburb": "AMITY"
    },
    {
      "postCode": "4183",
      "suburb": "AMITY POINT"
    },
    {
      "postCode": "4702",
      "suburb": "ANAKIE SIDING"
    },
    {
      "postCode": "4740",
      "suburb": "ANDERGROVE"
    },
    {
      "postCode": "4570",
      "suburb": "ANDERLEIGH"
    },
    {
      "postCode": "4800",
      "suburb": "ANDROMACHE"
    },
    {
      "postCode": "4355",
      "suburb": "ANDURAMBA"
    },
    {
      "postCode": "4814",
      "suburb": "ANNANDALE"
    },
    {
      "postCode": "4103",
      "suburb": "ANNERLEY"
    },
    {
      "postCode": "4070",
      "suburb": "ANSTEAD"
    },
    {
      "postCode": "4310",
      "suburb": "ANTHONY"
    },
    {
      "postCode": "4650",
      "suburb": "ANTIGUA"
    },
    {
      "postCode": "4660",
      "suburb": "APPLE TREE CREEK"
    },
    {
      "postCode": "4378",
      "suburb": "APPLETHORPE"
    },
    {
      "postCode": "4570",
      "suburb": "ARALUEN"
    },
    {
      "postCode": "4726",
      "suburb": "ARAMAC"
    },
    {
      "postCode": "4620",
      "suburb": "ARAMARA"
    },
    {
      "postCode": "4054",
      "suburb": "ARANA HILLS"
    },
    {
      "postCode": "4625",
      "suburb": "ARANBANGA"
    },
    {
      "postCode": "4309",
      "suburb": "ARATULA"
    },
    {
      "postCode": "4892",
      "suburb": "ARBOUIN"
    },
    {
      "postCode": "4819",
      "suburb": "ARCADIA"
    },
    {
      "postCode": "4454",
      "suburb": "ARCADIA VALLEY"
    },
    {
      "postCode": "4892",
      "suburb": "ARCHER RIVER"
    },
    {
      "postCode": "4108",
      "suburb": "ARCHERFIELD"
    },
    {
      "postCode": "4108",
      "suburb": "ARCHERFIELD BC"
    },
    {
      "postCode": "4702",
      "suburb": "ARCTURUS"
    },
    {
      "postCode": "4721",
      "suburb": "ARGYLL"
    },
    {
      "postCode": "4737",
      "suburb": "ARMSTRONG BEACH"
    },
    {
      "postCode": "4520",
      "suburb": "ARMSTRONG CREEK"
    },
    {
      "postCode": "4551",
      "suburb": "AROONA"
    },
    {
      "postCode": "4880",
      "suburb": "ARRIGA"
    },
    {
      "postCode": "4214",
      "suburb": "ARUNDEL"
    },
    {
      "postCode": "4214",
      "suburb": "ARUNDEL DC"
    },
    {
      "postCode": "4007",
      "suburb": "ASCOT"
    },
    {
      "postCode": "4359",
      "suburb": "ASCOT"
    },
    {
      "postCode": "4670",
      "suburb": "ASHFIELD"
    },
    {
      "postCode": "4060",
      "suburb": "ASHGROVE"
    },
    {
      "postCode": "4060",
      "suburb": "ASHGROVE EAST"
    },
    {
      "postCode": "4214",
      "suburb": "ASHMORE"
    },
    {
      "postCode": "4214",
      "suburb": "ASHMORE CITY"
    },
    {
      "postCode": "4340",
      "suburb": "ASHWELL"
    },
    {
      "postCode": "4034",
      "suburb": "ASPLEY"
    },
    {
      "postCode": "4883",
      "suburb": "ATHERTON"
    },
    {
      "postCode": "4350",
      "suburb": "ATHOL"
    },
    {
      "postCode": "4311",
      "suburb": "ATKINSONS DAM"
    },
    {
      "postCode": "4401",
      "suburb": "AUBIGNY"
    },
    {
      "postCode": "4413",
      "suburb": "AUBURN"
    },
    {
      "postCode": "4066",
      "suburb": "AUCHENFLOWER"
    },
    {
      "postCode": "4477",
      "suburb": "AUGATHELLA"
    },
    {
      "postCode": "4300",
      "suburb": "AUGUSTINE HEIGHTS"
    },
    {
      "postCode": "4892",
      "suburb": "AURUKUN"
    },
    {
      "postCode": "4213",
      "suburb": "AUSTINVILLE"
    },
    {
      "postCode": "4215",
      "suburb": "AUSTRALIA FAIR"
    },
    {
      "postCode": "4670",
      "suburb": "AVENELL HEIGHTS"
    },
    {
      "postCode": "4670",
      "suburb": "AVOCA"
    },
    {
      "postCode": "4314",
      "suburb": "AVOCA VALE"
    },
    {
      "postCode": "4670",
      "suburb": "AVONDALE"
    },
    {
      "postCode": "4807",
      "suburb": "AYR"
    },
    {
      "postCode": "4895",
      "suburb": "AYTON"
    },
    {
      "postCode": "4861",
      "suburb": "BABINDA"
    },
    {
      "postCode": "4361",
      "suburb": "BACK PLAINS"
    },
    {
      "postCode": "4875",
      "suburb": "BADU ISLAND"
    },
    {
      "postCode": "4674",
      "suburb": "BAFFLE CREEK"
    },
    {
      "postCode": "4454",
      "suburb": "BAFFLE WEST"
    },
    {
      "postCode": "4207",
      "suburb": "BAHRS SCRUB"
    },
    {
      "postCode": "4699",
      "suburb": "BAJOOL"
    },
    {
      "postCode": "4470",
      "suburb": "BAKERS BEND"
    },
    {
      "postCode": "4740",
      "suburb": "BAKERS CREEK"
    },
    {
      "postCode": "4413",
      "suburb": "BAKING BOARD"
    },
    {
      "postCode": "4740",
      "suburb": "BALBERRA"
    },
    {
      "postCode": "4702",
      "suburb": "BALCOMBA"
    },
    {
      "postCode": "4036",
      "suburb": "BALD HILLS"
    },
    {
      "postCode": "4552",
      "suburb": "BALD KNOB"
    },
    {
      "postCode": "4816",
      "suburb": "BALGAL BEACH"
    },
    {
      "postCode": "4401",
      "suburb": "BALGOWAN"
    },
    {
      "postCode": "4741",
      "suburb": "BALL BAY"
    },
    {
      "postCode": "4382",
      "suburb": "BALLANDEAN"
    },
    {
      "postCode": "4352",
      "suburb": "BALLARD"
    },
    {
      "postCode": "4455",
      "suburb": "BALLAROO"
    },
    {
      "postCode": "4610",
      "suburb": "BALLOGIE"
    },
    {
      "postCode": "4171",
      "suburb": "BALMORAL"
    },
    {
      "postCode": "4552",
      "suburb": "BALMORAL RIDGE"
    },
    {
      "postCode": "4740",
      "suburb": "BALNAGOWAN"
    },
    {
      "postCode": "4876",
      "suburb": "BAMAGA"
    },
    {
      "postCode": "4850",
      "suburb": "BAMBAROO"
    },
    {
      "postCode": "4873",
      "suburb": "BAMBOO"
    },
    {
      "postCode": "4860",
      "suburb": "BAMBOO CREEK"
    },
    {
      "postCode": "4625",
      "suburb": "BAN BAN"
    },
    {
      "postCode": "4625",
      "suburb": "BAN BAN SPRINGS"
    },
    {
      "postCode": "4702",
      "suburb": "BANANA"
    },
    {
      "postCode": "4630",
      "suburb": "BANCROFT"
    },
    {
      "postCode": "4703",
      "suburb": "BANGALEE"
    },
    {
      "postCode": "4306",
      "suburb": "BANKS CREEK"
    },
    {
      "postCode": "4570",
      "suburb": "BANKS POCKET"
    },
    {
      "postCode": "4507",
      "suburb": "BANKSIA BEACH"
    },
    {
      "postCode": "4207",
      "suburb": "BANNOCKBURN"
    },
    {
      "postCode": "4551",
      "suburb": "BANYA"
    },
    {
      "postCode": "4014",
      "suburb": "BANYO"
    },
    {
      "postCode": "4352",
      "suburb": "BAPAUME"
    },
    {
      "postCode": "4413",
      "suburb": "BARAKULA"
    },
    {
      "postCode": "4702",
      "suburb": "BARALABA"
    },
    {
      "postCode": "4601",
      "suburb": "BARAMBAH"
    },
    {
      "postCode": "4725",
      "suburb": "BARCALDINE"
    },
    {
      "postCode": "4065",
      "suburb": "BARDON"
    },
    {
      "postCode": "4714",
      "suburb": "BAREE"
    },
    {
      "postCode": "4306",
      "suburb": "BARELLAN POINT"
    },
    {
      "postCode": "4670",
      "suburb": "BARGARA"
    },
    {
      "postCode": "4465",
      "suburb": "BARGUNYAH"
    },
    {
      "postCode": "4551",
      "suburb": "BARINGA"
    },
    {
      "postCode": "4615",
      "suburb": "BARKER CREEK FLAT"
    },
    {
      "postCode": "4825",
      "suburb": "BARKLY"
    },
    {
      "postCode": "4605",
      "suburb": "BARLIL"
    },
    {
      "postCode": "4703",
      "suburb": "BARLOWS HILL"
    },
    {
      "postCode": "4625",
      "suburb": "BARLYNE"
    },
    {
      "postCode": "4703",
      "suburb": "BARMARYEE"
    },
    {
      "postCode": "4703",
      "suburb": "BARMOYA"
    },
    {
      "postCode": "4702",
      "suburb": "BARNARD"
    },
    {
      "postCode": "4680",
      "suburb": "BARNEY POINT"
    },
    {
      "postCode": "4287",
      "suburb": "BARNEY VIEW"
    },
    {
      "postCode": "4420",
      "suburb": "BAROONDAH"
    },
    {
      "postCode": "4416",
      "suburb": "BARRAMORNIE"
    },
    {
      "postCode": "4809",
      "suburb": "BARRATTA"
    },
    {
      "postCode": "4872",
      "suburb": "BARRINE"
    },
    {
      "postCode": "4816",
      "suburb": "BARRINGHA"
    },
    {
      "postCode": "4490",
      "suburb": "BARRINGUN"
    },
    {
      "postCode": "4878",
      "suburb": "BARRON"
    },
    {
      "postCode": "4870",
      "suburb": "BARRON GORGE"
    },
    {
      "postCode": "4861",
      "suburb": "BARTLE FRERE"
    },
    {
      "postCode": "4872",
      "suburb": "BARWIDGI"
    },
    {
      "postCode": "4820",
      "suburb": "BASALT"
    },
    {
      "postCode": "4871",
      "suburb": "BASILISK"
    },
    {
      "postCode": "4305",
      "suburb": "BASIN POCKET"
    },
    {
      "postCode": "4551",
      "suburb": "BATTERY HILL"
    },
    {
      "postCode": "4718",
      "suburb": "BAUHINIA"
    },
    {
      "postCode": "4650",
      "suburb": "BAUPLE"
    },
    {
      "postCode": "4650",
      "suburb": "BAUPLE FOREST"
    },
    {
      "postCode": "4478",
      "suburb": "BAYRICK"
    },
    {
      "postCode": "4868",
      "suburb": "BAYVIEW HEIGHTS"
    },
    {
      "postCode": "4818",
      "suburb": "BEACH HOLM"
    },
    {
      "postCode": "4510",
      "suburb": "BEACHMERE"
    },
    {
      "postCode": "4740",
      "suburb": "BEACONSFIELD"
    },
    {
      "postCode": "4886",
      "suburb": "BEATRICE"
    },
    {
      "postCode": "4285",
      "suburb": "BEAUDESERT"
    },
    {
      "postCode": "4650",
      "suburb": "BEAVER ROCK"
    },
    {
      "postCode": "4829",
      "suburb": "BEDOURIE"
    },
    {
      "postCode": "4385",
      "suburb": "BEEBO"
    },
    {
      "postCode": "4680",
      "suburb": "BEECHER"
    },
    {
      "postCode": "4211",
      "suburb": "BEECHMONT"
    },
    {
      "postCode": "4405",
      "suburb": "BEELBEE"
    },
    {
      "postCode": "4659",
      "suburb": "BEELBI CREEK"
    },
    {
      "postCode": "4570",
      "suburb": "BEENAAM VALLEY"
    },
    {
      "postCode": "4207",
      "suburb": "BEENLEIGH"
    },
    {
      "postCode": "4517",
      "suburb": "BEERBURRUM"
    },
    {
      "postCode": "4626",
      "suburb": "BEERON"
    },
    {
      "postCode": "4519",
      "suburb": "BEERWAH"
    },
    {
      "postCode": "4487",
      "suburb": "BEGONIA"
    },
    {
      "postCode": "4454",
      "suburb": "BEILBA"
    },
    {
      "postCode": "4723",
      "suburb": "BELCONG"
    },
    {
      "postCode": "4810",
      "suburb": "BELGIAN GARDENS"
    },
    {
      "postCode": "4207",
      "suburb": "BELIVAH"
    },
    {
      "postCode": "4408",
      "suburb": "BELL"
    },
    {
      "postCode": "4570",
      "suburb": "BELLA CREEK"
    },
    {
      "postCode": "4507",
      "suburb": "BELLARA"
    },
    {
      "postCode": "4300",
      "suburb": "BELLBIRD PARK"
    },
    {
      "postCode": "4070",
      "suburb": "BELLBOWRIE"
    },
    {
      "postCode": "4871",
      "suburb": "BELLENDEN KER"
    },
    {
      "postCode": "4892",
      "suburb": "BELLEVUE"
    },
    {
      "postCode": "4822",
      "suburb": "BELLFIELD"
    },
    {
      "postCode": "4562",
      "suburb": "BELLI PARK"
    },
    {
      "postCode": "4510",
      "suburb": "BELLMERE"
    },
    {
      "postCode": "4570",
      "suburb": "BELLS BRIDGE"
    },
    {
      "postCode": "4551",
      "suburb": "BELLS CREEK"
    },
    {
      "postCode": "4514",
      "suburb": "BELLTHORPE"
    },
    {
      "postCode": "4153",
      "suburb": "BELMONT"
    },
    {
      "postCode": "4740",
      "suburb": "BELMUNDA"
    },
    {
      "postCode": "4860",
      "suburb": "BELVEDERE"
    },
    {
      "postCode": "4721",
      "suburb": "BELYANDO"
    },
    {
      "postCode": "4850",
      "suburb": "BEMERSIDE"
    },
    {
      "postCode": "4610",
      "suburb": "BENAIR"
    },
    {
      "postCode": "4680",
      "suburb": "BENARABY"
    },
    {
      "postCode": "4314",
      "suburb": "BENARKIN"
    },
    {
      "postCode": "4314",
      "suburb": "BENARKIN NORTH"
    },
    {
      "postCode": "4754",
      "suburb": "BENHOLME"
    },
    {
      "postCode": "4275",
      "suburb": "BENOBBLE"
    },
    {
      "postCode": "4217",
      "suburb": "BENOWA"
    },
    {
      "postCode": "4869",
      "suburb": "BENTLEY PARK"
    },
    {
      "postCode": "4674",
      "suburb": "BERAJONDO"
    },
    {
      "postCode": "4362",
      "suburb": "BERAT"
    },
    {
      "postCode": "4353",
      "suburb": "BERGEN"
    },
    {
      "postCode": "4117",
      "suburb": "BERRINBA"
    },
    {
      "postCode": "4701",
      "suburb": "BERSERKER"
    },
    {
      "postCode": "4205",
      "suburb": "BETHANIA"
    },
    {
      "postCode": "4313",
      "suburb": "BIARRA"
    },
    {
      "postCode": "4880",
      "suburb": "BIBOOHRA"
    },
    {
      "postCode": "4275",
      "suburb": "BIDDADDABA"
    },
    {
      "postCode": "4401",
      "suburb": "BIDDESTON"
    },
    {
      "postCode": "4650",
      "suburb": "BIDWILL"
    },
    {
      "postCode": "4621",
      "suburb": "BIGGENDEN"
    },
    {
      "postCode": "4216",
      "suburb": "BIGGERA WATERS"
    },
    {
      "postCode": "4225",
      "suburb": "BILINGA"
    },
    {
      "postCode": "4390",
      "suburb": "BILLA BILLA"
    },
    {
      "postCode": "4715",
      "suburb": "BILOELA"
    },
    {
      "postCode": "4854",
      "suburb": "BILYANA"
    },
    {
      "postCode": "4488",
      "suburb": "BINDEBANGO"
    },
    {
      "postCode": "4702",
      "suburb": "BINGEGANG"
    },
    {
      "postCode": "4852",
      "suburb": "BINGIL BAY"
    },
    {
      "postCode": "4625",
      "suburb": "BINJOUR"
    },
    {
      "postCode": "4211",
      "suburb": "BINNA BURRA"
    },
    {
      "postCode": "4482",
      "suburb": "BIRDSVILLE"
    },
    {
      "postCode": "4854",
      "suburb": "BIRKALLA"
    },
    {
      "postCode": "4159",
      "suburb": "BIRKDALE"
    },
    {
      "postCode": "4285",
      "suburb": "BIRNAM"
    },
    {
      "postCode": "4352",
      "suburb": "BIRNAM"
    },
    {
      "postCode": "4575",
      "suburb": "BIRTINYA"
    },
    {
      "postCode": "4343",
      "suburb": "BLACK DUCK CREEK"
    },
    {
      "postCode": "4820",
      "suburb": "BLACK JACK"
    },
    {
      "postCode": "4563",
      "suburb": "BLACK MOUNTAIN"
    },
    {
      "postCode": "4818",
      "suburb": "BLACK RIVER"
    },
    {
      "postCode": "4600",
      "suburb": "BLACK SNAKE"
    },
    {
      "postCode": "4472",
      "suburb": "BLACKALL"
    },
    {
      "postCode": "4871",
      "suburb": "BLACKBULL"
    },
    {
      "postCode": "4314",
      "suburb": "BLACKBUTT"
    },
    {
      "postCode": "4314",
      "suburb": "BLACKBUTT NORTH"
    },
    {
      "postCode": "4314",
      "suburb": "BLACKBUTT SOUTH"
    },
    {
      "postCode": "4702",
      "suburb": "BLACKDOWN"
    },
    {
      "postCode": "4850",
      "suburb": "BLACKROCK"
    },
    {
      "postCode": "4740",
      "suburb": "BLACKS BEACH"
    },
    {
      "postCode": "4306",
      "suburb": "BLACKSOIL"
    },
    {
      "postCode": "4304",
      "suburb": "BLACKSTONE"
    },
    {
      "postCode": "4413",
      "suburb": "BLACKSWAMP"
    },
    {
      "postCode": "4717",
      "suburb": "BLACKWATER"
    },
    {
      "postCode": "4625",
      "suburb": "BLAIRMORE"
    },
    {
      "postCode": "4352",
      "suburb": "BLANCHVIEW"
    },
    {
      "postCode": "4310",
      "suburb": "BLANTYRE"
    },
    {
      "postCode": "4405",
      "suburb": "BLAXLAND"
    },
    {
      "postCode": "4341",
      "suburb": "BLENHEIM"
    },
    {
      "postCode": "4560",
      "suburb": "BLI BLI"
    },
    {
      "postCode": "4895",
      "suburb": "BLOOMFIELD"
    },
    {
      "postCode": "4799",
      "suburb": "BLOOMSBURY"
    },
    {
      "postCode": "4818",
      "suburb": "BLUE HILLS"
    },
    {
      "postCode": "4737",
      "suburb": "BLUE MOUNTAIN"
    },
    {
      "postCode": "4350",
      "suburb": "BLUE MOUNTAIN HEIGHTS"
    },
    {
      "postCode": "4818",
      "suburb": "BLUEWATER"
    },
    {
      "postCode": "4818",
      "suburb": "BLUEWATER PARK"
    },
    {
      "postCode": "4702",
      "suburb": "BLUFF"
    },
    {
      "postCode": "4455",
      "suburb": "BLYTHDALE"
    },
    {
      "postCode": "4468",
      "suburb": "BOATMAN"
    },
    {
      "postCode": "4425",
      "suburb": "BOGANDILLA"
    },
    {
      "postCode": "4805",
      "suburb": "BOGIE"
    },
    {
      "postCode": "4818",
      "suburb": "BOHLE"
    },
    {
      "postCode": "4817",
      "suburb": "BOHLE PLAINS"
    },
    {
      "postCode": "4875",
      "suburb": "BOIGU ISLAND"
    },
    {
      "postCode": "4575",
      "suburb": "BOKARINA"
    },
    {
      "postCode": "4570",
      "suburb": "BOLLIER"
    },
    {
      "postCode": "4488",
      "suburb": "BOLLON"
    },
    {
      "postCode": "4871",
      "suburb": "BOLWARRA"
    },
    {
      "postCode": "4871",
      "suburb": "BOMBEETA"
    },
    {
      "postCode": "4625",
      "suburb": "BON ACCORD"
    },
    {
      "postCode": "4703",
      "suburb": "BONDOOLA"
    },
    {
      "postCode": "4507",
      "suburb": "BONGAREE"
    },
    {
      "postCode": "4356",
      "suburb": "BONGEEN"
    },
    {
      "postCode": "4873",
      "suburb": "BONNIE DOON"
    },
    {
      "postCode": "4213",
      "suburb": "BONOGIN"
    },
    {
      "postCode": "4385",
      "suburb": "BONSHAW"
    },
    {
      "postCode": "4370",
      "suburb": "BONY MOUNTAIN"
    },
    {
      "postCode": "4401",
      "suburb": "BOODUA"
    },
    {
      "postCode": "4871",
      "suburb": "BOOGAN"
    },
    {
      "postCode": "4610",
      "suburb": "BOOIE"
    },
    {
      "postCode": "4671",
      "suburb": "BOOLBOONDA"
    },
    {
      "postCode": "4702",
      "suburb": "BOOLBURRA"
    },
    {
      "postCode": "4621",
      "suburb": "BOOMPA"
    },
    {
      "postCode": "4310",
      "suburb": "BOONAH"
    },
    {
      "postCode": "4601",
      "suburb": "BOONARA"
    },
    {
      "postCode": "4413",
      "suburb": "BOONARGA"
    },
    {
      "postCode": "4034",
      "suburb": "BOONDALL"
    },
    {
      "postCode": "4406",
      "suburb": "BOONDANDILLA"
    },
    {
      "postCode": "4613",
      "suburb": "BOONDOOMA"
    },
    {
      "postCode": "4650",
      "suburb": "BOONOOROO"
    },
    {
      "postCode": "4650",
      "suburb": "BOONOOROO PLAINS"
    },
    {
      "postCode": "4655",
      "suburb": "BOORAL"
    },
    {
      "postCode": "4552",
      "suburb": "BOOROOBIN"
    },
    {
      "postCode": "4601",
      "suburb": "BOOUBYJAN"
    },
    {
      "postCode": "4304",
      "suburb": "BOOVAL"
    },
    {
      "postCode": "4304",
      "suburb": "BOOVAL FAIR"
    },
    {
      "postCode": "4671",
      "suburb": "BOOYAL"
    },
    {
      "postCode": "4306",
      "suburb": "BORALLON"
    },
    {
      "postCode": "4565",
      "suburb": "BOREEN POINT"
    },
    {
      "postCode": "4124",
      "suburb": "BORONIA HEIGHTS"
    },
    {
      "postCode": "4678",
      "suburb": "BOROREN"
    },
    {
      "postCode": "4714",
      "suburb": "BOULDER CREEK"
    },
    {
      "postCode": "4702",
      "suburb": "BOULDERCOMBE"
    },
    {
      "postCode": "4829",
      "suburb": "BOULIA"
    },
    {
      "postCode": "4805",
      "suburb": "BOWEN"
    },
    {
      "postCode": "4006",
      "suburb": "BOWEN HILLS"
    },
    {
      "postCode": "4404",
      "suburb": "BOWENVILLE"
    },
    {
      "postCode": "4275",
      "suburb": "BOYLAND"
    },
    {
      "postCode": "4680",
      "suburb": "BOYNE ISLAND"
    },
    {
      "postCode": "4680",
      "suburb": "BOYNE VALLEY"
    },
    {
      "postCode": "4680",
      "suburb": "BOYNEDALE"
    },
    {
      "postCode": "4610",
      "suburb": "BOYNESIDE"
    },
    {
      "postCode": "4626",
      "suburb": "BOYNEWOOD"
    },
    {
      "postCode": "4512",
      "suburb": "BRACALBA"
    },
    {
      "postCode": "4695",
      "suburb": "BRACEWELL"
    },
    {
      "postCode": "4017",
      "suburb": "BRACKEN RIDGE"
    },
    {
      "postCode": "4850",
      "suburb": "BRAEMEADOWS"
    },
    {
      "postCode": "4313",
      "suburb": "BRAEMORE"
    },
    {
      "postCode": "4871",
      "suburb": "BRAMSTON BEACH"
    },
    {
      "postCode": "4625",
      "suburb": "BRANCH CREEK"
    },
    {
      "postCode": "4352",
      "suburb": "BRANCHVIEW"
    },
    {
      "postCode": "4808",
      "suburb": "BRANDON"
    },
    {
      "postCode": "4800",
      "suburb": "BRANDY CREEK"
    },
    {
      "postCode": "4670",
      "suburb": "BRANYAN"
    },
    {
      "postCode": "4305",
      "suburb": "BRASSALL"
    },
    {
      "postCode": "4500",
      "suburb": "BRAY PARK"
    },
    {
      "postCode": "4800",
      "suburb": "BREADALBANE"
    },
    {
      "postCode": "4825",
      "suburb": "BREAKAWAY"
    },
    {
      "postCode": "4820",
      "suburb": "BREDDAN"
    },
    {
      "postCode": "4500",
      "suburb": "BRENDALE"
    },
    {
      "postCode": "4500",
      "suburb": "BRENDALE BC"
    },
    {
      "postCode": "4500",
      "suburb": "BRENDALE DC"
    },
    {
      "postCode": "4507",
      "suburb": "BRIBIE ISLAND"
    },
    {
      "postCode": "4507",
      "suburb": "BRIBIE ISLAND NORTH"
    },
    {
      "postCode": "4035",
      "suburb": "BRIDGEMAN DOWNS"
    },
    {
      "postCode": "4561",
      "suburb": "BRIDGES"
    },
    {
      "postCode": "4412",
      "suburb": "BRIGALOW"
    },
    {
      "postCode": "4741",
      "suburb": "BRIGHTLY"
    },
    {
      "postCode": "4017",
      "suburb": "BRIGHTON"
    },
    {
      "postCode": "4017",
      "suburb": "BRIGHTON EVENTIDE"
    },
    {
      "postCode": "4017",
      "suburb": "BRIGHTON NATHAN STREET"
    },
    {
      "postCode": "4311",
      "suburb": "BRIGHTVIEW"
    },
    {
      "postCode": "4613",
      "suburb": "BRIGOODA"
    },
    {
      "postCode": "4357",
      "suburb": "BRINGALILY"
    },
    {
      "postCode": "4870",
      "suburb": "BRINSMEAD"
    },
    {
      "postCode": "4001",
      "suburb": "BRISBANE"
    },
    {
      "postCode": "4000",
      "suburb": "BRISBANE ADELAIDE STREET"
    },
    {
      "postCode": "4008",
      "suburb": "BRISBANE AIRPORT"
    },
    {
      "postCode": "4000",
      "suburb": "BRISBANE CITY"
    },
    {
      "postCode": "4106",
      "suburb": "BRISBANE MARKET"
    },
    {
      "postCode": "4218",
      "suburb": "BROADBEACH"
    },
    {
      "postCode": "4218",
      "suburb": "BROADBEACH WATERS"
    },
    {
      "postCode": "4420",
      "suburb": "BROADMERE"
    },
    {
      "postCode": "4380",
      "suburb": "BROADWATER"
    },
    {
      "postCode": "4757",
      "suburb": "BROKEN RIVER"
    },
    {
      "postCode": "4285",
      "suburb": "BROMELTON"
    },
    {
      "postCode": "4069",
      "suburb": "BROOKFIELD"
    },
    {
      "postCode": "4816",
      "suburb": "BROOKHILL"
    },
    {
      "postCode": "4615",
      "suburb": "BROOKLANDS"
    },
    {
      "postCode": "4053",
      "suburb": "BROOKSIDE CENTRE"
    },
    {
      "postCode": "4364",
      "suburb": "BROOKSTEAD"
    },
    {
      "postCode": "4300",
      "suburb": "BROOKWATER"
    },
    {
      "postCode": "4570",
      "suburb": "BROOLOO"
    },
    {
      "postCode": "4620",
      "suburb": "BROOWEENA"
    },
    {
      "postCode": "4820",
      "suburb": "BROUGHTON"
    },
    {
      "postCode": "4626",
      "suburb": "BROVINIA"
    },
    {
      "postCode": "4118",
      "suburb": "BROWNS PLAINS"
    },
    {
      "postCode": "4356",
      "suburb": "BROXBURN"
    },
    {
      "postCode": "4387",
      "suburb": "BRUSH CREEK"
    },
    {
      "postCode": "4312",
      "suburb": "BRYDEN"
    },
    {
      "postCode": "4403",
      "suburb": "BRYMAROO"
    },
    {
      "postCode": "4311",
      "suburb": "BUARABA"
    },
    {
      "postCode": "4311",
      "suburb": "BUARABA SOUTH"
    },
    {
      "postCode": "4750",
      "suburb": "BUCASIA"
    },
    {
      "postCode": "4670",
      "suburb": "BUCCA"
    },
    {
      "postCode": "4207",
      "suburb": "BUCCAN"
    },
    {
      "postCode": "4825",
      "suburb": "BUCKINGHAM"
    },
    {
      "postCode": "4722",
      "suburb": "BUCKLAND"
    },
    {
      "postCode": "4575",
      "suburb": "BUDDINA"
    },
    {
      "postCode": "4556",
      "suburb": "BUDERIM"
    },
    {
      "postCode": "4359",
      "suburb": "BUDGEE"
    },
    {
      "postCode": "4630",
      "suburb": "BUKALI"
    },
    {
      "postCode": "4854",
      "suburb": "BULGUN"
    },
    {
      "postCode": "4171",
      "suburb": "BULIMBA"
    },
    {
      "postCode": "4615",
      "suburb": "BULLCAMP"
    },
    {
      "postCode": "4871",
      "suburb": "BULLERINGA"
    },
    {
      "postCode": "4357",
      "suburb": "BULLI CREEK"
    },
    {
      "postCode": "4492",
      "suburb": "BULLOO DOWNS"
    },
    {
      "postCode": "4671",
      "suburb": "BULLYARD"
    },
    {
      "postCode": "4025",
      "suburb": "BULWER"
    },
    {
      "postCode": "4310",
      "suburb": "BUNBURRA"
    },
    {
      "postCode": "4670",
      "suburb": "BUNDABERG"
    },
    {
      "postCode": "4670",
      "suburb": "BUNDABERG CENTRAL"
    },
    {
      "postCode": "4670",
      "suburb": "BUNDABERG DC"
    },
    {
      "postCode": "4670",
      "suburb": "BUNDABERG EAST"
    },
    {
      "postCode": "4670",
      "suburb": "BUNDABERG NORTH"
    },
    {
      "postCode": "4670",
      "suburb": "BUNDABERG SOUTH"
    },
    {
      "postCode": "4670",
      "suburb": "BUNDABERG WEST"
    },
    {
      "postCode": "4217",
      "suburb": "BUNDALL"
    },
    {
      "postCode": "4217",
      "suburb": "BUNDALL DC"
    },
    {
      "postCode": "4304",
      "suburb": "BUNDAMBA"
    },
    {
      "postCode": "4419",
      "suburb": "BUNDI"
    },
    {
      "postCode": "4723",
      "suburb": "BUNDOORA"
    },
    {
      "postCode": "4419",
      "suburb": "BUNGABAN"
    },
    {
      "postCode": "4671",
      "suburb": "BUNGADOO"
    },
    {
      "postCode": "4870",
      "suburb": "BUNGALOW"
    },
    {
      "postCode": "4455",
      "suburb": "BUNGEWORGORAI"
    },
    {
      "postCode": "4455",
      "suburb": "BUNGIL"
    },
    {
      "postCode": "4703",
      "suburb": "BUNGUNDARRA"
    },
    {
      "postCode": "4494",
      "suburb": "BUNGUNYA"
    },
    {
      "postCode": "4310",
      "suburb": "BUNJURGEN"
    },
    {
      "postCode": "4055",
      "suburb": "BUNYA"
    },
    {
      "postCode": "4655",
      "suburb": "BUNYA CREEK"
    },
    {
      "postCode": "4405",
      "suburb": "BUNYA MOUNTAINS"
    },
    {
      "postCode": "4156",
      "suburb": "BURBANK"
    },
    {
      "postCode": "4818",
      "suburb": "BURDELL"
    },
    {
      "postCode": "4659",
      "suburb": "BURGOWAN"
    },
    {
      "postCode": "4830",
      "suburb": "BURKETOWN"
    },
    {
      "postCode": "4822",
      "suburb": "BURLEIGH"
    },
    {
      "postCode": "4220",
      "suburb": "BURLEIGH DC"
    },
    {
      "postCode": "4220",
      "suburb": "BURLEIGH HEADS"
    },
    {
      "postCode": "4220",
      "suburb": "BURLEIGH TOWN"
    },
    {
      "postCode": "4220",
      "suburb": "BURLEIGH WATERS"
    },
    {
      "postCode": "4413",
      "suburb": "BURNCLUITH"
    },
    {
      "postCode": "4310",
      "suburb": "BURNETT CREEK"
    },
    {
      "postCode": "4670",
      "suburb": "BURNETT HEADS"
    },
    {
      "postCode": "4560",
      "suburb": "BURNSIDE"
    },
    {
      "postCode": "4505",
      "suburb": "BURPENGARY"
    },
    {
      "postCode": "4505",
      "suburb": "BURPENGARY DC"
    },
    {
      "postCode": "4505",
      "suburb": "BURPENGARY EAST"
    },
    {
      "postCode": "4410",
      "suburb": "BURRA BURRI"
    },
    {
      "postCode": "4875",
      "suburb": "BURRAR ISLET"
    },
    {
      "postCode": "4659",
      "suburb": "BURRUM HEADS"
    },
    {
      "postCode": "4659",
      "suburb": "BURRUM RIVER"
    },
    {
      "postCode": "4659",
      "suburb": "BURRUM TOWN"
    },
    {
      "postCode": "4742",
      "suburb": "BURTON"
    },
    {
      "postCode": "4680",
      "suburb": "BURUA"
    },
    {
      "postCode": "4818",
      "suburb": "BUSHLAND BEACH"
    },
    {
      "postCode": "4702",
      "suburb": "BUSHLEY"
    },
    {
      "postCode": "4885",
      "suburb": "BUTCHERS CREEK"
    },
    {
      "postCode": "4660",
      "suburb": "BUXTON"
    },
    {
      "postCode": "4387",
      "suburb": "BYBERA"
    },
    {
      "postCode": "4605",
      "suburb": "BYEE"
    },
    {
      "postCode": "4680",
      "suburb": "BYELLEE"
    },
    {
      "postCode": "4703",
      "suburb": "BYFIELD"
    },
    {
      "postCode": "4455",
      "suburb": "BYMOUNT"
    },
    {
      "postCode": "4625",
      "suburb": "BYRNESTOWN"
    },
    {
      "postCode": "4352",
      "suburb": "CABARLAH"
    },
    {
      "postCode": "4510",
      "suburb": "CABOOLTURE"
    },
    {
      "postCode": "4510",
      "suburb": "CABOOLTURE BC"
    },
    {
      "postCode": "4510",
      "suburb": "CABOOLTURE SOUTH"
    },
    {
      "postCode": "4312",
      "suburb": "CABOONBAH"
    },
    {
      "postCode": "4413",
      "suburb": "CADARGA"
    },
    {
      "postCode": "4343",
      "suburb": "CAFFEY"
    },
    {
      "postCode": "4285",
      "suburb": "CAINBABLE"
    },
    {
      "postCode": "4722",
      "suburb": "CAIRDBEIGN"
    },
    {
      "postCode": "4870",
      "suburb": "CAIRNS"
    },
    {
      "postCode": "4870",
      "suburb": "CAIRNS CITY"
    },
    {
      "postCode": "4870",
      "suburb": "CAIRNS DC"
    },
    {
      "postCode": "4870",
      "suburb": "CAIRNS MC"
    },
    {
      "postCode": "4872",
      "suburb": "CAIRNS MC"
    },
    {
      "postCode": "4870",
      "suburb": "CAIRNS MCLEOD STREET"
    },
    {
      "postCode": "4870",
      "suburb": "CAIRNS NORTH"
    },
    {
      "postCode": "4116",
      "suburb": "CALAMVALE"
    },
    {
      "postCode": "4670",
      "suburb": "CALAVOS"
    },
    {
      "postCode": "4816",
      "suburb": "CALCIUM"
    },
    {
      "postCode": "4478",
      "suburb": "CALDERVALE"
    },
    {
      "postCode": "4798",
      "suburb": "CALEN"
    },
    {
      "postCode": "4570",
      "suburb": "CALGOA"
    },
    {
      "postCode": "4570",
      "suburb": "CALICO CREEK"
    },
    {
      "postCode": "4390",
      "suburb": "CALINGUNEE"
    },
    {
      "postCode": "4390",
      "suburb": "CALLANDOON"
    },
    {
      "postCode": "4680",
      "suburb": "CALLEMONDAH"
    },
    {
      "postCode": "4715",
      "suburb": "CALLIDE"
    },
    {
      "postCode": "4680",
      "suburb": "CALLIOPE"
    },
    {
      "postCode": "4551",
      "suburb": "CALOUNDRA"
    },
    {
      "postCode": "4551",
      "suburb": "CALOUNDRA DC"
    },
    {
      "postCode": "4551",
      "suburb": "CALOUNDRA WEST"
    },
    {
      "postCode": "4340",
      "suburb": "CALVERT"
    },
    {
      "postCode": "4719",
      "suburb": "CAMBOON"
    },
    {
      "postCode": "4358",
      "suburb": "CAMBOOYA"
    },
    {
      "postCode": "4822",
      "suburb": "CAMBRIDGE"
    },
    {
      "postCode": "4552",
      "suburb": "CAMBROON"
    },
    {
      "postCode": "4413",
      "suburb": "CAMEBY"
    },
    {
      "postCode": "4492",
      "suburb": "CAMERON CORNER"
    },
    {
      "postCode": "4300",
      "suburb": "CAMIRA"
    },
    {
      "postCode": "4828",
      "suburb": "CAMOOWEAL"
    },
    {
      "postCode": "4871",
      "suburb": "CAMP CREEK"
    },
    {
      "postCode": "4152",
      "suburb": "CAMP HILL"
    },
    {
      "postCode": "4520",
      "suburb": "CAMP MOUNTAIN"
    },
    {
      "postCode": "4820",
      "suburb": "CAMPASPE"
    },
    {
      "postCode": "4625",
      "suburb": "CAMPBELL CREEK"
    },
    {
      "postCode": "4521",
      "suburb": "CAMPBELLS POCKET"
    },
    {
      "postCode": "4737",
      "suburb": "CAMPWIN BEACH"
    },
    {
      "postCode": "4413",
      "suburb": "CANAGA"
    },
    {
      "postCode": "4702",
      "suburb": "CANAL CREEK"
    },
    {
      "postCode": "4630",
      "suburb": "CANIA"
    },
    {
      "postCode": "4570",
      "suburb": "CANINA"
    },
    {
      "postCode": "4630",
      "suburb": "CANNINDAH"
    },
    {
      "postCode": "4357",
      "suburb": "CANNING CREEK"
    },
    {
      "postCode": "4370",
      "suburb": "CANNINGVALE"
    },
    {
      "postCode": "4310",
      "suburb": "CANNON CREEK"
    },
    {
      "postCode": "4380",
      "suburb": "CANNON CREEK"
    },
    {
      "postCode": "4170",
      "suburb": "CANNON HILL"
    },
    {
      "postCode": "4800",
      "suburb": "CANNON VALLEY"
    },
    {
      "postCode": "4802",
      "suburb": "CANNONVALE"
    },
    {
      "postCode": "4702",
      "suburb": "CANOONA"
    },
    {
      "postCode": "4275",
      "suburb": "CANUNGRA"
    },
    {
      "postCode": "4157",
      "suburb": "CAPALABA"
    },
    {
      "postCode": "4157",
      "suburb": "CAPALABA BC"
    },
    {
      "postCode": "4157",
      "suburb": "CAPALABA DC"
    },
    {
      "postCode": "4810",
      "suburb": "CAPE CLEVELAND"
    },
    {
      "postCode": "4800",
      "suburb": "CAPE CONWAY"
    },
    {
      "postCode": "4800",
      "suburb": "CAPE GLOUCESTER"
    },
    {
      "postCode": "4740",
      "suburb": "CAPE HILLSBOROUGH"
    },
    {
      "postCode": "4873",
      "suburb": "CAPE TRIBULATION"
    },
    {
      "postCode": "4723",
      "suburb": "CAPELLA"
    },
    {
      "postCode": "4677",
      "suburb": "CAPTAIN CREEK"
    },
    {
      "postCode": "4357",
      "suburb": "CAPTAINS MOUNTAIN"
    },
    {
      "postCode": "4878",
      "suburb": "CARAVONICA"
    },
    {
      "postCode": "4723",
      "suburb": "CARBINE CREEK"
    },
    {
      "postCode": "4130",
      "suburb": "CARBROOK"
    },
    {
      "postCode": "4854",
      "suburb": "CARDSTONE"
    },
    {
      "postCode": "4849",
      "suburb": "CARDWELL"
    },
    {
      "postCode": "4152",
      "suburb": "CARINA"
    },
    {
      "postCode": "4152",
      "suburb": "CARINA HEIGHTS"
    },
    {
      "postCode": "4152",
      "suburb": "CARINDALE"
    },
    {
      "postCode": "4739",
      "suburb": "CARMILA"
    },
    {
      "postCode": "4852",
      "suburb": "CARMOO"
    },
    {
      "postCode": "4702",
      "suburb": "CARNARVON PARK"
    },
    {
      "postCode": "4310",
      "suburb": "CARNEYS CREEK"
    },
    {
      "postCode": "4300",
      "suburb": "CAROLE PARK"
    },
    {
      "postCode": "4477",
      "suburb": "CAROLINE CROSSING"
    },
    {
      "postCode": "4344",
      "suburb": "CARPENDALE"
    },
    {
      "postCode": "4823",
      "suburb": "CARPENTARIA"
    },
    {
      "postCode": "4825",
      "suburb": "CARRANDOTTA"
    },
    {
      "postCode": "4211",
      "suburb": "CARRARA"
    },
    {
      "postCode": "4883",
      "suburb": "CARRINGTON"
    },
    {
      "postCode": "4816",
      "suburb": "CARRUCHAN"
    },
    {
      "postCode": "4034",
      "suburb": "CARSELDINE"
    },
    {
      "postCode": "4806",
      "suburb": "CARSTAIRS"
    },
    {
      "postCode": "4563",
      "suburb": "CARTERS RIDGE"
    },
    {
      "postCode": "4500",
      "suburb": "CASHMERE"
    },
    {
      "postCode": "4873",
      "suburb": "CASSOWARY"
    },
    {
      "postCode": "4567",
      "suburb": "CASTAWAYS BEACH"
    },
    {
      "postCode": "4715",
      "suburb": "CASTLE CREEK"
    },
    {
      "postCode": "4810",
      "suburb": "CASTLE HILL"
    },
    {
      "postCode": "4407",
      "suburb": "CATTLE CREEK"
    },
    {
      "postCode": "4626",
      "suburb": "CATTLE CREEK"
    },
    {
      "postCode": "4703",
      "suburb": "CAUSEWAY LAKE"
    },
    {
      "postCode": "4702",
      "suburb": "CAWARRAL"
    },
    {
      "postCode": "4352",
      "suburb": "CAWDOR"
    },
    {
      "postCode": "4407",
      "suburb": "CECIL PLAINS"
    },
    {
      "postCode": "4207",
      "suburb": "CEDAR CREEK"
    },
    {
      "postCode": "4520",
      "suburb": "CEDAR CREEK"
    },
    {
      "postCode": "4285",
      "suburb": "CEDAR GROVE"
    },
    {
      "postCode": "4570",
      "suburb": "CEDAR POCKET"
    },
    {
      "postCode": "4285",
      "suburb": "CEDAR VALE"
    },
    {
      "postCode": "4514",
      "suburb": "CEDARTON"
    },
    {
      "postCode": "4352",
      "suburb": "CEMENT MILLS"
    },
    {
      "postCode": "4350",
      "suburb": "CENTENARY HEIGHTS"
    },
    {
      "postCode": "4702",
      "suburb": "CENTRAL QUEENSLAND MC"
    },
    {
      "postCode": "4701",
      "suburb": "CENTRAL QUEENSLAND UNIVERSITY"
    },
    {
      "postCode": "4627",
      "suburb": "CERATODUS"
    },
    {
      "postCode": "4610",
      "suburb": "CHAHPINGAH"
    },
    {
      "postCode": "4133",
      "suburb": "CHAMBERS FLAT"
    },
    {
      "postCode": "4413",
      "suburb": "CHANCES PLAIN"
    },
    {
      "postCode": "4155",
      "suburb": "CHANDLER"
    },
    {
      "postCode": "4069",
      "suburb": "CHAPEL HILL"
    },
    {
      "postCode": "4608",
      "suburb": "CHARLESTOWN"
    },
    {
      "postCode": "4470",
      "suburb": "CHARLEVILLE"
    },
    {
      "postCode": "4350",
      "suburb": "CHARLTON"
    },
    {
      "postCode": "4309",
      "suburb": "CHARLWOOD"
    },
    {
      "postCode": "4820",
      "suburb": "CHARTERS TOWERS"
    },
    {
      "postCode": "4820",
      "suburb": "CHARTERS TOWERS CITY"
    },
    {
      "postCode": "4570",
      "suburb": "CHATSWORTH"
    },
    {
      "postCode": "4702",
      "suburb": "CHEESEBOROUGH"
    },
    {
      "postCode": "4068",
      "suburb": "CHELMER"
    },
    {
      "postCode": "4606",
      "suburb": "CHELMSFORD"
    },
    {
      "postCode": "4740",
      "suburb": "CHELONA"
    },
    {
      "postCode": "4627",
      "suburb": "CHELTENHAM"
    },
    {
      "postCode": "4605",
      "suburb": "CHERBOURG"
    },
    {
      "postCode": "4032",
      "suburb": "CHERMSIDE"
    },
    {
      "postCode": "4032",
      "suburb": "CHERMSIDE CENTRE"
    },
    {
      "postCode": "4032",
      "suburb": "CHERMSIDE SOUTH"
    },
    {
      "postCode": "4032",
      "suburb": "CHERMSIDE WEST"
    },
    {
      "postCode": "4314",
      "suburb": "CHERRY CREEK"
    },
    {
      "postCode": "4370",
      "suburb": "CHERRY GULLY"
    },
    {
      "postCode": "4660",
      "suburb": "CHERWELL"
    },
    {
      "postCode": "4555",
      "suburb": "CHEVALLUM"
    },
    {
      "postCode": "4217",
      "suburb": "CHEVRON ISLAND"
    },
    {
      "postCode": "4880",
      "suburb": "CHEWKO"
    },
    {
      "postCode": "4660",
      "suburb": "CHILDERS"
    },
    {
      "postCode": "4871",
      "suburb": "CHILLAGOE"
    },
    {
      "postCode": "4413",
      "suburb": "CHINCHILLA"
    },
    {
      "postCode": "4285",
      "suburb": "CHINGHEE CREEK"
    },
    {
      "postCode": "4215",
      "suburb": "CHIRN PARK"
    },
    {
      "postCode": "4723",
      "suburb": "CHIRNSIDE"
    },
    {
      "postCode": "4285",
      "suburb": "CHRISTMAS CREEK"
    },
    {
      "postCode": "4311",
      "suburb": "CHURCHABLE"
    },
    {
      "postCode": "4305",
      "suburb": "CHURCHILL"
    },
    {
      "postCode": "4306",
      "suburb": "CHUWAR"
    },
    {
      "postCode": "4600",
      "suburb": "CINNABAR"
    },
    {
      "postCode": "4002",
      "suburb": "CITY EAST"
    },
    {
      "postCode": "4211",
      "suburb": "CLAGIRABA"
    },
    {
      "postCode": "4741",
      "suburb": "CLAIRVIEW"
    },
    {
      "postCode": "4468",
      "suburb": "CLARA CREEK"
    },
    {
      "postCode": "4871",
      "suburb": "CLARAVILLE"
    },
    {
      "postCode": "4807",
      "suburb": "CLARE"
    },
    {
      "postCode": "4807",
      "suburb": "CLAREDALE"
    },
    {
      "postCode": "4311",
      "suburb": "CLARENDON"
    },
    {
      "postCode": "4705",
      "suburb": "CLARKE CREEK"
    },
    {
      "postCode": "4011",
      "suburb": "CLAYFIELD"
    },
    {
      "postCode": "4226",
      "suburb": "CLEAR ISLAND WATERS"
    },
    {
      "postCode": "4500",
      "suburb": "CLEAR MOUNTAIN"
    },
    {
      "postCode": "4816",
      "suburb": "CLEMANT"
    },
    {
      "postCode": "4721",
      "suburb": "CLERMONT"
    },
    {
      "postCode": "4163",
      "suburb": "CLEVELAND"
    },
    {
      "postCode": "4163",
      "suburb": "CLEVELAND DC"
    },
    {
      "postCode": "4427",
      "suburb": "CLIFFORD"
    },
    {
      "postCode": "4350",
      "suburb": "CLIFFORD GARDENS"
    },
    {
      "postCode": "4361",
      "suburb": "CLIFTON"
    },
    {
      "postCode": "4879",
      "suburb": "CLIFTON BEACH"
    },
    {
      "postCode": "4680",
      "suburb": "CLINTON"
    },
    {
      "postCode": "4370",
      "suburb": "CLINTONVALE"
    },
    {
      "postCode": "4824",
      "suburb": "CLONCURRY"
    },
    {
      "postCode": "4019",
      "suburb": "CLONTARF"
    },
    {
      "postCode": "4357",
      "suburb": "CLONTARF"
    },
    {
      "postCode": "4019",
      "suburb": "CLONTARF BEACH"
    },
    {
      "postCode": "4019",
      "suburb": "CLONTARF DC"
    },
    {
      "postCode": "4520",
      "suburb": "CLOSEBURN"
    },
    {
      "postCode": "4605",
      "suburb": "CLOYNA"
    },
    {
      "postCode": "4811",
      "suburb": "CLUDEN"
    },
    {
      "postCode": "4309",
      "suburb": "CLUMBER"
    },
    {
      "postCode": "4312",
      "suburb": "COAL CREEK"
    },
    {
      "postCode": "4352",
      "suburb": "COALBANK"
    },
    {
      "postCode": "4305",
      "suburb": "COALFALLS"
    },
    {
      "postCode": "4621",
      "suburb": "COALSTOUN LAKES"
    },
    {
      "postCode": "4605",
      "suburb": "COBBS HILL"
    },
    {
      "postCode": "4703",
      "suburb": "COBRABALL"
    },
    {
      "postCode": "4419",
      "suburb": "COCKATOO"
    },
    {
      "postCode": "4875",
      "suburb": "COCONUT ISLAND"
    },
    {
      "postCode": "4860",
      "suburb": "COCONUTS"
    },
    {
      "postCode": "4892",
      "suburb": "COEN"
    },
    {
      "postCode": "4560",
      "suburb": "COES CREEK"
    },
    {
      "postCode": "4570",
      "suburb": "COLES CREEK"
    },
    {
      "postCode": "4808",
      "suburb": "COLEVALE"
    },
    {
      "postCode": "4307",
      "suburb": "COLEYVILLE"
    },
    {
      "postCode": "4314",
      "suburb": "COLINTON"
    },
    {
      "postCode": "4707",
      "suburb": "COLLAROY"
    },
    {
      "postCode": "4343",
      "suburb": "COLLEGE VIEW"
    },
    {
      "postCode": "4301",
      "suburb": "COLLINGWOOD PARK"
    },
    {
      "postCode": "4804",
      "suburb": "COLLINSVILLE"
    },
    {
      "postCode": "4677",
      "suburb": "COLOSSEUM"
    },
    {
      "postCode": "4820",
      "suburb": "COLUMBIA"
    },
    {
      "postCode": "4415",
      "suburb": "COLUMBOOLA"
    },
    {
      "postCode": "4702",
      "suburb": "COMET"
    },
    {
      "postCode": "4514",
      "suburb": "COMMISSIONERS FLAT"
    },
    {
      "postCode": "4571",
      "suburb": "COMO"
    },
    {
      "postCode": "4858",
      "suburb": "COMOON LOOP"
    },
    {
      "postCode": "4722",
      "suburb": "CONA CREEK"
    },
    {
      "postCode": "4416",
      "suburb": "CONDAMINE"
    },
    {
      "postCode": "4357",
      "suburb": "CONDAMINE FARMS"
    },
    {
      "postCode": "4352",
      "suburb": "CONDAMINE PLAINS"
    },
    {
      "postCode": "4815",
      "suburb": "CONDON"
    },
    {
      "postCode": "4871",
      "suburb": "CONJUBOY"
    },
    {
      "postCode": "4552",
      "suburb": "CONONDALE"
    },
    {
      "postCode": "4702",
      "suburb": "CONSUELO"
    },
    {
      "postCode": "4800",
      "suburb": "CONWAY"
    },
    {
      "postCode": "4800",
      "suburb": "CONWAY BEACH"
    },
    {
      "postCode": "4184",
      "suburb": "COOCHIEMUDLO ISLAND"
    },
    {
      "postCode": "4310",
      "suburb": "COOCHIN"
    },
    {
      "postCode": "4519",
      "suburb": "COOCHIN CREEK"
    },
    {
      "postCode": "4703",
      "suburb": "COOEE BAY"
    },
    {
      "postCode": "4313",
      "suburb": "COOEEIMBARDI"
    },
    {
      "postCode": "4895",
      "suburb": "COOKTOWN"
    },
    {
      "postCode": "4574",
      "suburb": "COOLABINE"
    },
    {
      "postCode": "4610",
      "suburb": "COOLABUNIA"
    },
    {
      "postCode": "4479",
      "suburb": "COOLADDI"
    },
    {
      "postCode": "4311",
      "suburb": "COOLANA"
    },
    {
      "postCode": "4225",
      "suburb": "COOLANGATTA"
    },
    {
      "postCode": "4850",
      "suburb": "COOLBIE"
    },
    {
      "postCode": "4387",
      "suburb": "COOLMUNDA"
    },
    {
      "postCode": "4580",
      "suburb": "COOLOOLA"
    },
    {
      "postCode": "4580",
      "suburb": "COOLOOLA COVE"
    },
    {
      "postCode": "4560",
      "suburb": "COOLOOLABIN"
    },
    {
      "postCode": "4573",
      "suburb": "COOLUM BEACH"
    },
    {
      "postCode": "4216",
      "suburb": "COOMBABAH"
    },
    {
      "postCode": "4209",
      "suburb": "COOMERA"
    },
    {
      "postCode": "4630",
      "suburb": "COOMINGLAH"
    },
    {
      "postCode": "4630",
      "suburb": "COOMINGLAH FOREST"
    },
    {
      "postCode": "4311",
      "suburb": "COOMINYA"
    },
    {
      "postCode": "4702",
      "suburb": "COOMOO"
    },
    {
      "postCode": "4422",
      "suburb": "COOMRITH"
    },
    {
      "postCode": "4626",
      "suburb": "COONAMBULA"
    },
    {
      "postCode": "4670",
      "suburb": "COONARR"
    },
    {
      "postCode": "4570",
      "suburb": "COONDOO"
    },
    {
      "postCode": "4490",
      "suburb": "COONGOOLA"
    },
    {
      "postCode": "4108",
      "suburb": "COOPERS PLAINS"
    },
    {
      "postCode": "4420",
      "suburb": "COORADA"
    },
    {
      "postCode": "4569",
      "suburb": "COORAN"
    },
    {
      "postCode": "4408",
      "suburb": "COORANGA"
    },
    {
      "postCode": "4565",
      "suburb": "COOROIBAH"
    },
    {
      "postCode": "4860",
      "suburb": "COOROO LANDS"
    },
    {
      "postCode": "4702",
      "suburb": "COOROOMAN"
    },
    {
      "postCode": "4563",
      "suburb": "COOROY"
    },
    {
      "postCode": "4563",
      "suburb": "COOROY MOUNTAIN"
    },
    {
      "postCode": "4151",
      "suburb": "COORPAROO"
    },
    {
      "postCode": "4151",
      "suburb": "COORPAROO DC"
    },
    {
      "postCode": "4860",
      "suburb": "COORUMBA"
    },
    {
      "postCode": "4702",
      "suburb": "COORUMBENE"
    },
    {
      "postCode": "4565",
      "suburb": "COOTHARABA"
    },
    {
      "postCode": "4702",
      "suburb": "COOWONGA"
    },
    {
      "postCode": "4873",
      "suburb": "COOYA BEACH"
    },
    {
      "postCode": "4402",
      "suburb": "COOYAR"
    },
    {
      "postCode": "4741",
      "suburb": "COPPABELLA"
    },
    {
      "postCode": "4860",
      "suburb": "COQUETTE POINT"
    },
    {
      "postCode": "4670",
      "suburb": "CORAL COVE"
    },
    {
      "postCode": "4871",
      "suburb": "CORALIE"
    },
    {
      "postCode": "4551",
      "suburb": "CORBOULD PARK"
    },
    {
      "postCode": "4660",
      "suburb": "CORDALBA"
    },
    {
      "postCode": "4850",
      "suburb": "CORDELIA"
    },
    {
      "postCode": "4570",
      "suburb": "CORELLA"
    },
    {
      "postCode": "4733",
      "suburb": "CORFIELD"
    },
    {
      "postCode": "4075",
      "suburb": "CORINDA"
    },
    {
      "postCode": "4621",
      "suburb": "CORINGA"
    },
    {
      "postCode": "4610",
      "suburb": "CORNDALE"
    },
    {
      "postCode": "4130",
      "suburb": "CORNUBIA"
    },
    {
      "postCode": "4455",
      "suburb": "CORNWALL"
    },
    {
      "postCode": "4513",
      "suburb": "CORYMBIA"
    },
    {
      "postCode": "4818",
      "suburb": "COSGROVE"
    },
    {
      "postCode": "4723",
      "suburb": "COTHERSTONE"
    },
    {
      "postCode": "4350",
      "suburb": "COTSWOLD HILLS"
    },
    {
      "postCode": "4558",
      "suburb": "COTTON TREE"
    },
    {
      "postCode": "4375",
      "suburb": "COTTONVALE"
    },
    {
      "postCode": "4310",
      "suburb": "COULSON"
    },
    {
      "postCode": "4613",
      "suburb": "COVERTY"
    },
    {
      "postCode": "4873",
      "suburb": "COW BAY"
    },
    {
      "postCode": "4025",
      "suburb": "COWAN COWAN"
    },
    {
      "postCode": "4871",
      "suburb": "COWLEY"
    },
    {
      "postCode": "4871",
      "suburb": "COWLEY BEACH"
    },
    {
      "postCode": "4871",
      "suburb": "COWLEY CREEK"
    },
    {
      "postCode": "4719",
      "suburb": "CRACOW"
    },
    {
      "postCode": "4877",
      "suburb": "CRAIGLIE"
    },
    {
      "postCode": "4655",
      "suburb": "CRAIGNISH"
    },
    {
      "postCode": "4814",
      "suburb": "CRANBROOK"
    },
    {
      "postCode": "4350",
      "suburb": "CRANLEY"
    },
    {
      "postCode": "4610",
      "suburb": "CRAWFORD"
    },
    {
      "postCode": "4757",
      "suburb": "CREDITON"
    },
    {
      "postCode": "4740",
      "suburb": "CREMORNE"
    },
    {
      "postCode": "4313",
      "suburb": "CRESSBROOK"
    },
    {
      "postCode": "4355",
      "suburb": "CRESSBROOK CREEK"
    },
    {
      "postCode": "4132",
      "suburb": "CRESTMEAD"
    },
    {
      "postCode": "4723",
      "suburb": "CRINUM"
    },
    {
      "postCode": "4310",
      "suburb": "CROFTBY"
    },
    {
      "postCode": "4519",
      "suburb": "CROHAMHURST"
    },
    {
      "postCode": "4809",
      "suburb": "CROMARTY"
    },
    {
      "postCode": "4312",
      "suburb": "CROSSDALE"
    },
    {
      "postCode": "4413",
      "suburb": "CROSSROADS"
    },
    {
      "postCode": "4342",
      "suburb": "CROWLEY VALE"
    },
    {
      "postCode": "4605",
      "suburb": "CROWNTHORPE"
    },
    {
      "postCode": "4355",
      "suburb": "CROWS NEST"
    },
    {
      "postCode": "4871",
      "suburb": "CROYDON"
    },
    {
      "postCode": "4285",
      "suburb": "CRYNA"
    },
    {
      "postCode": "4800",
      "suburb": "CRYSTAL BROOK"
    },
    {
      "postCode": "4816",
      "suburb": "CRYSTAL CREEK"
    },
    {
      "postCode": "4552",
      "suburb": "CRYSTAL WATERS"
    },
    {
      "postCode": "4871",
      "suburb": "CRYSTALBROOK"
    },
    {
      "postCode": "4860",
      "suburb": "CULLINANE"
    },
    {
      "postCode": "4816",
      "suburb": "CUNGULLA"
    },
    {
      "postCode": "4490",
      "suburb": "CUNNAMULLA"
    },
    {
      "postCode": "4370",
      "suburb": "CUNNINGHAM"
    },
    {
      "postCode": "4570",
      "suburb": "CURRA"
    },
    {
      "postCode": "4871",
      "suburb": "CURRAJAH"
    },
    {
      "postCode": "4812",
      "suburb": "CURRAJONG"
    },
    {
      "postCode": "4552",
      "suburb": "CURRAMORE"
    },
    {
      "postCode": "4551",
      "suburb": "CURRIMUNDI"
    },
    {
      "postCode": "4223",
      "suburb": "CURRUMBIN"
    },
    {
      "postCode": "4223",
      "suburb": "CURRUMBIN VALLEY"
    },
    {
      "postCode": "4223",
      "suburb": "CURRUMBIN WATERS"
    },
    {
      "postCode": "4680",
      "suburb": "CURTIS ISLAND"
    },
    {
      "postCode": "4608",
      "suburb": "CUSHNIE"
    },
    {
      "postCode": "4352",
      "suburb": "CUTELLA"
    },
    {
      "postCode": "4490",
      "suburb": "CUTTABURRA"
    },
    {
      "postCode": "4627",
      "suburb": "CYNTHIA"
    },
    {
      "postCode": "4357",
      "suburb": "CYPRESS GARDENS"
    },
    {
      "postCode": "4514",
      "suburb": "D'AGUILAR"
    },
    {
      "postCode": "4873",
      "suburb": "DAGMAR"
    },
    {
      "postCode": "4570",
      "suburb": "DAGUN"
    },
    {
      "postCode": "4873",
      "suburb": "DAINTREE"
    },
    {
      "postCode": "4127",
      "suburb": "DAISY HILL"
    },
    {
      "postCode": "4825",
      "suburb": "DAJARRA"
    },
    {
      "postCode": "4503",
      "suburb": "DAKABIN"
    },
    {
      "postCode": "4715",
      "suburb": "DAKENBA"
    },
    {
      "postCode": "4807",
      "suburb": "DALBEG"
    },
    {
      "postCode": "4405",
      "suburb": "DALBY"
    },
    {
      "postCode": "4380",
      "suburb": "DALCOUTH"
    },
    {
      "postCode": "4630",
      "suburb": "DALGA"
    },
    {
      "postCode": "4621",
      "suburb": "DALLARNIL"
    },
    {
      "postCode": "4702",
      "suburb": "DALMA"
    },
    {
      "postCode": "4850",
      "suburb": "DALRYMPLE CREEK"
    },
    {
      "postCode": "4757",
      "suburb": "DALRYMPLE HEIGHTS"
    },
    {
      "postCode": "4374",
      "suburb": "DALVEEN"
    },
    {
      "postCode": "4415",
      "suburb": "DALWOGON"
    },
    {
      "postCode": "4671",
      "suburb": "DALYSFORD"
    },
    {
      "postCode": "4671",
      "suburb": "DAMASCUS"
    },
    {
      "postCode": "4849",
      "suburb": "DAMPER CREEK"
    },
    {
      "postCode": "4872",
      "suburb": "DANBULLA"
    },
    {
      "postCode": "4370",
      "suburb": "DANDEROO"
    },
    {
      "postCode": "4610",
      "suburb": "DANGORE"
    },
    {
      "postCode": "4860",
      "suburb": "DARADGEE"
    },
    {
      "postCode": "4455",
      "suburb": "DARGAL ROAD"
    },
    {
      "postCode": "4350",
      "suburb": "DARLING HEIGHTS"
    },
    {
      "postCode": "4285",
      "suburb": "DARLINGTON"
    },
    {
      "postCode": "4410",
      "suburb": "DARR CREEK"
    },
    {
      "postCode": "4076",
      "suburb": "DARRA"
    },
    {
      "postCode": "4695",
      "suburb": "DARTS CREEK"
    },
    {
      "postCode": "4875",
      "suburb": "DAUAN ISLAND"
    },
    {
      "postCode": "4855",
      "suburb": "DAVESON"
    },
    {
      "postCode": "4521",
      "suburb": "DAYBORO"
    },
    {
      "postCode": "4497",
      "suburb": "DAYMAR"
    },
    {
      "postCode": "4017",
      "suburb": "DEAGON"
    },
    {
      "postCode": "4508",
      "suburb": "DECEPTION BAY"
    },
    {
      "postCode": "4873",
      "suburb": "DEDIN"
    },
    {
      "postCode": "4306",
      "suburb": "DEEBING HEIGHTS"
    },
    {
      "postCode": "4625",
      "suburb": "DEEP CREEK"
    },
    {
      "postCode": "4674",
      "suburb": "DEEPWATER"
    },
    {
      "postCode": "4818",
      "suburb": "DEERAGUN"
    },
    {
      "postCode": "4871",
      "suburb": "DEERAL"
    },
    {
      "postCode": "4895",
      "suburb": "DEGARRA"
    },
    {
      "postCode": "4621",
      "suburb": "DEGILBO"
    },
    {
      "postCode": "4671",
      "suburb": "DELAN"
    },
    {
      "postCode": "4514",
      "suburb": "DELANEYS CREEK"
    },
    {
      "postCode": "4700",
      "suburb": "DEPOT HILL"
    },
    {
      "postCode": "4626",
      "suburb": "DERRI DERRA"
    },
    {
      "postCode": "4352",
      "suburb": "DERRYMORE"
    },
    {
      "postCode": "4871",
      "suburb": "DESAILLY"
    },
    {
      "postCode": "4362",
      "suburb": "DEUCHAR"
    },
    {
      "postCode": "4753",
      "suburb": "DEVEREUX CREEK"
    },
    {
      "postCode": "4401",
      "suburb": "DEVON PARK"
    },
    {
      "postCode": "4735",
      "suburb": "DIAMANTINA LAKES"
    },
    {
      "postCode": "4553",
      "suburb": "DIAMOND VALLEY"
    },
    {
      "postCode": "4380",
      "suburb": "DIAMONDVALE"
    },
    {
      "postCode": "4410",
      "suburb": "DIAMONDY"
    },
    {
      "postCode": "4551",
      "suburb": "DICKY BEACH"
    },
    {
      "postCode": "4621",
      "suburb": "DIDCOT"
    },
    {
      "postCode": "4559",
      "suburb": "DIDDILLIBAH"
    },
    {
      "postCode": "4680",
      "suburb": "DIGLUM"
    },
    {
      "postCode": "4872",
      "suburb": "DIMBULAH"
    },
    {
      "postCode": "4702",
      "suburb": "DINGO"
    },
    {
      "postCode": "4800",
      "suburb": "DINGO BEACH"
    },
    {
      "postCode": "4854",
      "suburb": "DINGO POCKET"
    },
    {
      "postCode": "4303",
      "suburb": "DINMORE"
    },
    {
      "postCode": "4625",
      "suburb": "DIRNBIR"
    },
    {
      "postCode": "4486",
      "suburb": "DIRRANBANDI"
    },
    {
      "postCode": "4800",
      "suburb": "DITTMER"
    },
    {
      "postCode": "4873",
      "suburb": "DIWAN"
    },
    {
      "postCode": "4702",
      "suburb": "DIXALEA"
    },
    {
      "postCode": "4892",
      "suburb": "DIXIE"
    },
    {
      "postCode": "4854",
      "suburb": "DJARAWONG"
    },
    {
      "postCode": "4852",
      "suburb": "DJIRU"
    },
    {
      "postCode": "4352",
      "suburb": "DJUAN"
    },
    {
      "postCode": "4352",
      "suburb": "DOCTOR CREEK"
    },
    {
      "postCode": "4740",
      "suburb": "DOLPHIN HEADS"
    },
    {
      "postCode": "4357",
      "suburb": "DOMVILLE"
    },
    {
      "postCode": "4510",
      "suburb": "DONNYBROOK"
    },
    {
      "postCode": "4077",
      "suburb": "DOOLANDELLA"
    },
    {
      "postCode": "4660",
      "suburb": "DOOLBI"
    },
    {
      "postCode": "4830",
      "suburb": "DOOMADGEE"
    },
    {
      "postCode": "4562",
      "suburb": "DOONAN"
    },
    {
      "postCode": "4620",
      "suburb": "DOONGUL"
    },
    {
      "postCode": "4820",
      "suburb": "DOTSWOOD"
    },
    {
      "postCode": "4671",
      "suburb": "DOUGHBOY"
    },
    {
      "postCode": "4354",
      "suburb": "DOUGLAS"
    },
    {
      "postCode": "4814",
      "suburb": "DOUGLAS"
    },
    {
      "postCode": "4875",
      "suburb": "DOWAR ISLET"
    },
    {
      "postCode": "4570",
      "suburb": "DOWNSFIELD"
    },
    {
      "postCode": "4754",
      "suburb": "DOWS CREEK"
    },
    {
      "postCode": "4520",
      "suburb": "DRAPER"
    },
    {
      "postCode": "4350",
      "suburb": "DRAYTON"
    },
    {
      "postCode": "4350",
      "suburb": "DRAYTON NORTH"
    },
    {
      "postCode": "4116",
      "suburb": "DREWVALE"
    },
    {
      "postCode": "4424",
      "suburb": "DRILLHAM"
    },
    {
      "postCode": "4424",
      "suburb": "DRILLHAM SOUTH"
    },
    {
      "postCode": "4671",
      "suburb": "DRINAN"
    },
    {
      "postCode": "4718",
      "suburb": "DROMEDARY"
    },
    {
      "postCode": "4712",
      "suburb": "DUARINGA"
    },
    {
      "postCode": "4825",
      "suburb": "DUCHESS"
    },
    {
      "postCode": "4650",
      "suburb": "DUCKINWILLA"
    },
    {
      "postCode": "4405",
      "suburb": "DUCKLO"
    },
    {
      "postCode": "4310",
      "suburb": "DUGANDAN"
    },
    {
      "postCode": "4671",
      "suburb": "DUINGAL"
    },
    {
      "postCode": "4425",
      "suburb": "DULACCA"
    },
    {
      "postCode": "4560",
      "suburb": "DULONG"
    },
    {
      "postCode": "4702",
      "suburb": "DULULU"
    },
    {
      "postCode": "4740",
      "suburb": "DUMBLETON"
    },
    {
      "postCode": "4715",
      "suburb": "DUMGREE"
    },
    {
      "postCode": "4702",
      "suburb": "DUMPY CREEK"
    },
    {
      "postCode": "4625",
      "suburb": "DUNDARRAH"
    },
    {
      "postCode": "4306",
      "suburb": "DUNDAS"
    },
    {
      "postCode": "4650",
      "suburb": "DUNDATHU"
    },
    {
      "postCode": "4655",
      "suburb": "DUNDOWRAN"
    },
    {
      "postCode": "4655",
      "suburb": "DUNDOWRAN BEACH"
    },
    {
      "postCode": "4852",
      "suburb": "DUNK"
    },
    {
      "postCode": "4465",
      "suburb": "DUNKELD"
    },
    {
      "postCode": "4650",
      "suburb": "DUNMORA"
    },
    {
      "postCode": "4407",
      "suburb": "DUNMORE"
    },
    {
      "postCode": "4740",
      "suburb": "DUNNROCK"
    },
    {
      "postCode": "4183",
      "suburb": "DUNWICH"
    },
    {
      "postCode": "4077",
      "suburb": "DURACK"
    },
    {
      "postCode": "4413",
      "suburb": "DURAH"
    },
    {
      "postCode": "4492",
      "suburb": "DURHAM"
    },
    {
      "postCode": "4454",
      "suburb": "DURHAM DOWNS"
    },
    {
      "postCode": "4610",
      "suburb": "DURONG"
    },
    {
      "postCode": "4102",
      "suburb": "DUTTON PARK"
    },
    {
      "postCode": "4821",
      "suburb": "DUTTON RIVER"
    },
    {
      "postCode": "4626",
      "suburb": "DYKEHEAD"
    },
    {
      "postCode": "4745",
      "suburb": "DYSART"
    },
    {
      "postCode": "4009",
      "suburb": "EAGLE FARM"
    },
    {
      "postCode": "4009",
      "suburb": "EAGLE FARM BC"
    },
    {
      "postCode": "4271",
      "suburb": "EAGLE HEIGHTS"
    },
    {
      "postCode": "4207",
      "suburb": "EAGLEBY"
    },
    {
      "postCode": "4742",
      "suburb": "EAGLEFIELD"
    },
    {
      "postCode": "4870",
      "suburb": "EARLVILLE"
    },
    {
      "postCode": "4883",
      "suburb": "EAST BARRON"
    },
    {
      "postCode": "4169",
      "suburb": "EAST BRISBANE"
    },
    {
      "postCode": "4353",
      "suburb": "EAST COOYAR"
    },
    {
      "postCode": "4871",
      "suburb": "EAST CREEK"
    },
    {
      "postCode": "4570",
      "suburb": "EAST DEEP CREEK"
    },
    {
      "postCode": "4695",
      "suburb": "EAST END"
    },
    {
      "postCode": "4854",
      "suburb": "EAST FELUGA"
    },
    {
      "postCode": "4359",
      "suburb": "EAST GREENMOUNT"
    },
    {
      "postCode": "4343",
      "suburb": "EAST HALDON"
    },
    {
      "postCode": "4860",
      "suburb": "EAST INNISFAIL"
    },
    {
      "postCode": "4305",
      "suburb": "EAST IPSWICH"
    },
    {
      "postCode": "4740",
      "suburb": "EAST MACKAY"
    },
    {
      "postCode": "4615",
      "suburb": "EAST NANANGO"
    },
    {
      "postCode": "4860",
      "suburb": "EAST PALMERSTON"
    },
    {
      "postCode": "4861",
      "suburb": "EAST RUSSELL"
    },
    {
      "postCode": "4350",
      "suburb": "EAST TOOWOOMBA"
    },
    {
      "postCode": "4871",
      "suburb": "EAST TRINITY"
    },
    {
      "postCode": "4305",
      "suburb": "EASTERN HEIGHTS"
    },
    {
      "postCode": "4860",
      "suburb": "EATON"
    },
    {
      "postCode": "4037",
      "suburb": "EATONS HILL"
    },
    {
      "postCode": "4304",
      "suburb": "EBBW VALE"
    },
    {
      "postCode": "4340",
      "suburb": "EBENEZER"
    },
    {
      "postCode": "4207",
      "suburb": "EDENS LANDING"
    },
    {
      "postCode": "4870",
      "suburb": "EDGE HILL"
    },
    {
      "postCode": "4869",
      "suburb": "EDMONTON"
    },
    {
      "postCode": "4892",
      "suburb": "EDWARD RIVER"
    },
    {
      "postCode": "4562",
      "suburb": "EERWAH VALE"
    },
    {
      "postCode": "4344",
      "suburb": "EGYPT"
    },
    {
      "postCode": "4627",
      "suburb": "EIDSVOLD"
    },
    {
      "postCode": "4627",
      "suburb": "EIDSVOLD EAST"
    },
    {
      "postCode": "4627",
      "suburb": "EIDSVOLD WEST"
    },
    {
      "postCode": "4807",
      "suburb": "EIGHT MILE CREEK"
    },
    {
      "postCode": "4113",
      "suburb": "EIGHT MILE PLAINS"
    },
    {
      "postCode": "4740",
      "suburb": "EIMEO"
    },
    {
      "postCode": "4871",
      "suburb": "EINASLEIGH"
    },
    {
      "postCode": "4855",
      "suburb": "EL ARISH"
    },
    {
      "postCode": "4552",
      "suburb": "ELAMAN CREEK"
    },
    {
      "postCode": "4221",
      "suburb": "ELANORA"
    },
    {
      "postCode": "4370",
      "suburb": "ELBOW VALLEY"
    },
    {
      "postCode": "4670",
      "suburb": "ELECTRA"
    },
    {
      "postCode": "4721",
      "suburb": "ELGIN"
    },
    {
      "postCode": "4615",
      "suburb": "ELGIN VALE"
    },
    {
      "postCode": "4655",
      "suburb": "ELI WATERS"
    },
    {
      "postCode": "4516",
      "suburb": "ELIMBAH"
    },
    {
      "postCode": "4361",
      "suburb": "ELLANGOWAN"
    },
    {
      "postCode": "4078",
      "suburb": "ELLEN GROVE"
    },
    {
      "postCode": "4816",
      "suburb": "ELLERBECK"
    },
    {
      "postCode": "4610",
      "suburb": "ELLESMERE"
    },
    {
      "postCode": "4886",
      "suburb": "ELLINJAA"
    },
    {
      "postCode": "4362",
      "suburb": "ELLINTHORP"
    },
    {
      "postCode": "4670",
      "suburb": "ELLIOTT"
    },
    {
      "postCode": "4670",
      "suburb": "ELLIOTT HEADS"
    },
    {
      "postCode": "4879",
      "suburb": "ELLIS BEACH"
    },
    {
      "postCode": "4361",
      "suburb": "ELPHINSTONE"
    },
    {
      "postCode": "4742",
      "suburb": "ELPHINSTONE"
    },
    {
      "postCode": "4720",
      "suburb": "EMERALD"
    },
    {
      "postCode": "4355",
      "suburb": "EMU CREEK"
    },
    {
      "postCode": "4710",
      "suburb": "EMU PARK"
    },
    {
      "postCode": "4371",
      "suburb": "EMU VALE"
    },
    {
      "postCode": "4306",
      "suburb": "ENGLAND CREEK"
    },
    {
      "postCode": "4051",
      "suburb": "ENOGGERA"
    },
    {
      "postCode": "4520",
      "suburb": "ENOGGERA RESERVOIR"
    },
    {
      "postCode": "4741",
      "suburb": "EPSOM"
    },
    {
      "postCode": "4740",
      "suburb": "ERAKALA"
    },
    {
      "postCode": "4480",
      "suburb": "EROMANGA"
    },
    {
      "postCode": "4875",
      "suburb": "ERUB ISLAND"
    },
    {
      "postCode": "4312",
      "suburb": "ESK"
    },
    {
      "postCode": "4312",
      "suburb": "ESKDALE"
    },
    {
      "postCode": "4871",
      "suburb": "ESMERALDA"
    },
    {
      "postCode": "4702",
      "suburb": "ETNA CREEK"
    },
    {
      "postCode": "4741",
      "suburb": "ETON"
    },
    {
      "postCode": "4858",
      "suburb": "ETTY BAY"
    },
    {
      "postCode": "4860",
      "suburb": "EUBENANGEE"
    },
    {
      "postCode": "4554",
      "suburb": "EUDLO"
    },
    {
      "postCode": "4380",
      "suburb": "EUKEY"
    },
    {
      "postCode": "4674",
      "suburb": "EULEILAH"
    },
    {
      "postCode": "4491",
      "suburb": "EULO"
    },
    {
      "postCode": "4455",
      "suburb": "EUMAMURRIN"
    },
    {
      "postCode": "4562",
      "suburb": "EUMUNDI"
    },
    {
      "postCode": "4757",
      "suburb": "EUNGELLA"
    },
    {
      "postCode": "4757",
      "suburb": "EUNGELLA DAM"
    },
    {
      "postCode": "4741",
      "suburb": "EUNGELLA HINTERLAND"
    },
    {
      "postCode": "4854",
      "suburb": "EURAMO"
    },
    {
      "postCode": "4660",
      "suburb": "EUREKA"
    },
    {
      "postCode": "4462",
      "suburb": "EURELLA"
    },
    {
      "postCode": "4677",
      "suburb": "EURIMBULA"
    },
    {
      "postCode": "4420",
      "suburb": "EUROMBAH"
    },
    {
      "postCode": "4581",
      "suburb": "EURONG"
    },
    {
      "postCode": "4455",
      "suburb": "EUTHULLA"
    },
    {
      "postCode": "4874",
      "suburb": "EVANS LANDING"
    },
    {
      "postCode": "4356",
      "suburb": "EVANSLEA"
    },
    {
      "postCode": "4888",
      "suburb": "EVELYN"
    },
    {
      "postCode": "4352",
      "suburb": "EVERGREEN"
    },
    {
      "postCode": "4053",
      "suburb": "EVERTON HILLS"
    },
    {
      "postCode": "4053",
      "suburb": "EVERTON PARK"
    },
    {
      "postCode": "4606",
      "suburb": "FAIRDALE"
    },
    {
      "postCode": "4103",
      "suburb": "FAIRFIELD"
    },
    {
      "postCode": "4103",
      "suburb": "FAIRFIELD GARDENS"
    },
    {
      "postCode": "4306",
      "suburb": "FAIRNEY VIEW"
    },
    {
      "postCode": "4700",
      "suburb": "FAIRY BOWER"
    },
    {
      "postCode": "4413",
      "suburb": "FAIRYLAND"
    },
    {
      "postCode": "4670",
      "suburb": "FAIRYMEAD"
    },
    {
      "postCode": "4741",
      "suburb": "FARLEIGH"
    },
    {
      "postCode": "4703",
      "suburb": "FARNBOROUGH"
    },
    {
      "postCode": "4660",
      "suburb": "FARNSFIELD"
    },
    {
      "postCode": "4481",
      "suburb": "FARRARS CREEK"
    },
    {
      "postCode": "4309",
      "suburb": "FASSIFERN"
    },
    {
      "postCode": "4309",
      "suburb": "FASSIFERN VALLEY"
    },
    {
      "postCode": "4568",
      "suburb": "FEDERAL"
    },
    {
      "postCode": "4358",
      "suburb": "FELTON"
    },
    {
      "postCode": "4358",
      "suburb": "FELTON SOUTH"
    },
    {
      "postCode": "4854",
      "suburb": "FELUGA"
    },
    {
      "postCode": "4650",
      "suburb": "FERNEY"
    },
    {
      "postCode": "4306",
      "suburb": "FERNVALE"
    },
    {
      "postCode": "4275",
      "suburb": "FERNY GLEN"
    },
    {
      "postCode": "4055",
      "suburb": "FERNY GROVE"
    },
    {
      "postCode": "4055",
      "suburb": "FERNY HILLS"
    },
    {
      "postCode": "4055",
      "suburb": "FERNY HILLS DC"
    },
    {
      "postCode": "4606",
      "suburb": "FICKS CROSSING"
    },
    {
      "postCode": "4825",
      "suburb": "FIELDING"
    },
    {
      "postCode": "4352",
      "suburb": "FIFTEEN MILE"
    },
    {
      "postCode": "4069",
      "suburb": "FIG TREE POCKET"
    },
    {
      "postCode": "4756",
      "suburb": "FINCH HATTON"
    },
    {
      "postCode": "4873",
      "suburb": "FINLAYVALE"
    },
    {
      "postCode": "4350",
      "suburb": "FINNIE"
    },
    {
      "postCode": "4825",
      "suburb": "FISHER"
    },
    {
      "postCode": "4570",
      "suburb": "FISHERMANS POCKET"
    },
    {
      "postCode": "4871",
      "suburb": "FISHERY FALLS"
    },
    {
      "postCode": "4860",
      "suburb": "FITZGERALD CREEK"
    },
    {
      "postCode": "4018",
      "suburb": "FITZGIBBON"
    },
    {
      "postCode": "4871",
      "suburb": "FITZROY ISLAND"
    },
    {
      "postCode": "4280",
      "suburb": "FLAGSTONE"
    },
    {
      "postCode": "4344",
      "suburb": "FLAGSTONE CREEK"
    },
    {
      "postCode": "4802",
      "suburb": "FLAMETREE"
    },
    {
      "postCode": "4560",
      "suburb": "FLAXTON"
    },
    {
      "postCode": "4381",
      "suburb": "FLETCHER"
    },
    {
      "postCode": "4714",
      "suburb": "FLETCHER CREEK"
    },
    {
      "postCode": "4375",
      "suburb": "FLEURBAIX"
    },
    {
      "postCode": "4285",
      "suburb": "FLINDERS LAKES"
    },
    {
      "postCode": "4305",
      "suburb": "FLINDERS VIEW"
    },
    {
      "postCode": "4422",
      "suburb": "FLINTON"
    },
    {
      "postCode": "4819",
      "suburb": "FLORENCE BAY"
    },
    {
      "postCode": "4860",
      "suburb": "FLYING FISH POINT"
    },
    {
      "postCode": "4275",
      "suburb": "FLYING FOX"
    },
    {
      "postCode": "4343",
      "suburb": "FORDSDALE"
    },
    {
      "postCode": "4678",
      "suburb": "FORESHORES"
    },
    {
      "postCode": "4873",
      "suburb": "FOREST CREEK"
    },
    {
      "postCode": "4556",
      "suburb": "FOREST GLEN"
    },
    {
      "postCode": "4342",
      "suburb": "FOREST HILL"
    },
    {
      "postCode": "4078",
      "suburb": "FOREST LAKE"
    },
    {
      "postCode": "4357",
      "suburb": "FOREST RIDGE"
    },
    {
      "postCode": "4362",
      "suburb": "FOREST SPRINGS"
    },
    {
      "postCode": "4118",
      "suburb": "FORESTDALE"
    },
    {
      "postCode": "4850",
      "suburb": "FORESTHOME"
    },
    {
      "postCode": "4465",
      "suburb": "FORESTVALE"
    },
    {
      "postCode": "4723",
      "suburb": "FORK LAGOONS"
    },
    {
      "postCode": "4404",
      "suburb": "FORMARTIN"
    },
    {
      "postCode": "4850",
      "suburb": "FORREST BEACH"
    },
    {
      "postCode": "4871",
      "suburb": "FORSAYTH"
    },
    {
      "postCode": "4006",
      "suburb": "FORTITUDE VALLEY"
    },
    {
      "postCode": "4872",
      "suburb": "FORTY MILE"
    },
    {
      "postCode": "4871",
      "suburb": "FOSSILBROOK"
    },
    {
      "postCode": "4740",
      "suburb": "FOULDEN"
    },
    {
      "postCode": "4824",
      "suburb": "FOUR WAYS"
    },
    {
      "postCode": "4800",
      "suburb": "FOXDALE"
    },
    {
      "postCode": "4721",
      "suburb": "FRANKFIELD"
    },
    {
      "postCode": "4581",
      "suburb": "FRASER ISLAND"
    },
    {
      "postCode": "4309",
      "suburb": "FRAZERVIEW"
    },
    {
      "postCode": "4806",
      "suburb": "FREDERICKSFIELD"
    },
    {
      "postCode": "4370",
      "suburb": "FREESTONE"
    },
    {
      "postCode": "4310",
      "suburb": "FRENCHES CREEK"
    },
    {
      "postCode": "4701",
      "suburb": "FRENCHVILLE"
    },
    {
      "postCode": "4870",
      "suburb": "FRESHWATER"
    },
    {
      "postCode": "4737",
      "suburb": "FRESHWATER POINT"
    },
    {
      "postCode": "4855",
      "suburb": "FRIDAY POCKET"
    },
    {
      "postCode": "4313",
      "suburb": "FULHAM"
    },
    {
      "postCode": "4884",
      "suburb": "GADGARRA"
    },
    {
      "postCode": "4671",
      "suburb": "GAETA"
    },
    {
      "postCode": "4551",
      "suburb": "GAGALBA"
    },
    {
      "postCode": "4300",
      "suburb": "GAILES"
    },
    {
      "postCode": "4702",
      "suburb": "GAINSFORD"
    },
    {
      "postCode": "4850",
      "suburb": "GAIRLOCH"
    },
    {
      "postCode": "4892",
      "suburb": "GAMBOOLA"
    },
    {
      "postCode": "4830",
      "suburb": "GANGALIDDA"
    },
    {
      "postCode": "4814",
      "suburb": "GARBUTT"
    },
    {
      "postCode": "4814",
      "suburb": "GARBUTT EAST"
    },
    {
      "postCode": "4741",
      "suburb": "GARGETT"
    },
    {
      "postCode": "4702",
      "suburb": "GARNANT"
    },
    {
      "postCode": "4852",
      "suburb": "GARNERS BEACH"
    },
    {
      "postCode": "4860",
      "suburb": "GARRADUNGA"
    },
    {
      "postCode": "4850",
      "suburb": "GARRAWALT"
    },
    {
      "postCode": "4343",
      "suburb": "GATTON"
    },
    {
      "postCode": "4345",
      "suburb": "GATTON COLLEGE"
    },
    {
      "postCode": "4211",
      "suburb": "GAVEN"
    },
    {
      "postCode": "4625",
      "suburb": "GAYNDAH"
    },
    {
      "postCode": "4051",
      "suburb": "GAYTHORNE"
    },
    {
      "postCode": "4034",
      "suburb": "GEEBUNG"
    },
    {
      "postCode": "4352",
      "suburb": "GEHAM"
    },
    {
      "postCode": "4721",
      "suburb": "GEMINI MOUNTAINS"
    },
    {
      "postCode": "4003",
      "suburb": "GEORGE STREET"
    },
    {
      "postCode": "4871",
      "suburb": "GEORGETOWN"
    },
    {
      "postCode": "4825",
      "suburb": "GEORGINA"
    },
    {
      "postCode": "4871",
      "suburb": "GERMANTOWN"
    },
    {
      "postCode": "4574",
      "suburb": "GHEERULLA"
    },
    {
      "postCode": "4420",
      "suburb": "GHINGHINDA"
    },
    {
      "postCode": "4824",
      "suburb": "GIDYA"
    },
    {
      "postCode": "4620",
      "suburb": "GIGOOMGAN"
    },
    {
      "postCode": "4871",
      "suburb": "GILBERT RIVER"
    },
    {
      "postCode": "4208",
      "suburb": "GILBERTON"
    },
    {
      "postCode": "4871",
      "suburb": "GILBERTON"
    },
    {
      "postCode": "4314",
      "suburb": "GILLA"
    },
    {
      "postCode": "4570",
      "suburb": "GILLDORA"
    },
    {
      "postCode": "4211",
      "suburb": "GILSTON"
    },
    {
      "postCode": "4671",
      "suburb": "GIN GIN"
    },
    {
      "postCode": "4702",
      "suburb": "GINDIE"
    },
    {
      "postCode": "4676",
      "suburb": "GINDORAN"
    },
    {
      "postCode": "4625",
      "suburb": "GINOONDAN"
    },
    {
      "postCode": "4382",
      "suburb": "GIRRAWEEN"
    },
    {
      "postCode": "4809",
      "suburb": "GIRU"
    },
    {
      "postCode": "4670",
      "suburb": "GIVELDA"
    },
    {
      "postCode": "4370",
      "suburb": "GLADFIELD"
    },
    {
      "postCode": "4680",
      "suburb": "GLADSTONE"
    },
    {
      "postCode": "4680",
      "suburb": "GLADSTONE BC"
    },
    {
      "postCode": "4680",
      "suburb": "GLADSTONE CENTRAL"
    },
    {
      "postCode": "4680",
      "suburb": "GLADSTONE DC"
    },
    {
      "postCode": "4680",
      "suburb": "GLADSTONE HARBOUR"
    },
    {
      "postCode": "4306",
      "suburb": "GLAMORGAN VALE"
    },
    {
      "postCode": "4615",
      "suburb": "GLAN DEVON"
    },
    {
      "postCode": "4570",
      "suburb": "GLANMIRE"
    },
    {
      "postCode": "4518",
      "suburb": "GLASS HOUSE MOUNTAINS"
    },
    {
      "postCode": "4570",
      "suburb": "GLASTONBURY"
    },
    {
      "postCode": "4420",
      "suburb": "GLEBE"
    },
    {
      "postCode": "4885",
      "suburb": "GLEN ALLYN"
    },
    {
      "postCode": "4381",
      "suburb": "GLEN APLIN"
    },
    {
      "postCode": "4871",
      "suburb": "GLEN BOUGHTON"
    },
    {
      "postCode": "4342",
      "suburb": "GLEN CAIRN"
    },
    {
      "postCode": "4570",
      "suburb": "GLEN ECHO"
    },
    {
      "postCode": "4680",
      "suburb": "GLEN EDEN"
    },
    {
      "postCode": "4312",
      "suburb": "GLEN ESK"
    },
    {
      "postCode": "4800",
      "suburb": "GLEN ISLA"
    },
    {
      "postCode": "4377",
      "suburb": "GLEN NIVEN"
    },
    {
      "postCode": "4880",
      "suburb": "GLEN RUSSELL"
    },
    {
      "postCode": "4872",
      "suburb": "GLEN RUTH"
    },
    {
      "postCode": "4385",
      "suburb": "GLENARBON"
    },
    {
      "postCode": "4424",
      "suburb": "GLENAUBYN"
    },
    {
      "postCode": "4355",
      "suburb": "GLENAVEN"
    },
    {
      "postCode": "4620",
      "suburb": "GLENBAR"
    },
    {
      "postCode": "4352",
      "suburb": "GLENCOE"
    },
    {
      "postCode": "4711",
      "suburb": "GLENDALE"
    },
    {
      "postCode": "4743",
      "suburb": "GLENDEN"
    },
    {
      "postCode": "4285",
      "suburb": "GLENEAGLE"
    },
    {
      "postCode": "4740",
      "suburb": "GLENELLA"
    },
    {
      "postCode": "4515",
      "suburb": "GLENFERN"
    },
    {
      "postCode": "4370",
      "suburb": "GLENGALLAN"
    },
    {
      "postCode": "4420",
      "suburb": "GLENHAUGHTON"
    },
    {
      "postCode": "4711",
      "suburb": "GLENLEE"
    },
    {
      "postCode": "4630",
      "suburb": "GLENLEIGH"
    },
    {
      "postCode": "4280",
      "suburb": "GLENLOGAN"
    },
    {
      "postCode": "4380",
      "suburb": "GLENLYON"
    },
    {
      "postCode": "4719",
      "suburb": "GLENMORAL"
    },
    {
      "postCode": "4423",
      "suburb": "GLENMORGAN"
    },
    {
      "postCode": "4650",
      "suburb": "GLENORCHY"
    },
    {
      "postCode": "4342",
      "suburb": "GLENORE GROVE"
    },
    {
      "postCode": "4626",
      "suburb": "GLENRAE"
    },
    {
      "postCode": "4605",
      "suburb": "GLENROCK"
    },
    {
      "postCode": "4702",
      "suburb": "GLENROY"
    },
    {
      "postCode": "4350",
      "suburb": "GLENVALE"
    },
    {
      "postCode": "4553",
      "suburb": "GLENVIEW"
    },
    {
      "postCode": "4570",
      "suburb": "GLENWOOD"
    },
    {
      "postCode": "4511",
      "suburb": "GODWIN BEACH"
    },
    {
      "postCode": "4702",
      "suburb": "GOGANGO"
    },
    {
      "postCode": "4217",
      "suburb": "GOLD COAST MC"
    },
    {
      "postCode": "9726",
      "suburb": "GOLD COAST MC"
    },
    {
      "postCode": "4551",
      "suburb": "GOLDEN BEACH"
    },
    {
      "postCode": "4621",
      "suburb": "GOLDEN FLEECE"
    },
    {
      "postCode": "4380",
      "suburb": "GOLDFIELDS"
    },
    {
      "postCode": "4865",
      "suburb": "GOLDSBOROUGH"
    },
    {
      "postCode": "4670",
      "suburb": "GOOBURRUM"
    },
    {
      "postCode": "4671",
      "suburb": "GOOD NIGHT"
    },
    {
      "postCode": "4390",
      "suburb": "GOODAR"
    },
    {
      "postCode": "4610",
      "suburb": "GOODGER"
    },
    {
      "postCode": "4300",
      "suburb": "GOODNA"
    },
    {
      "postCode": "4660",
      "suburb": "GOODWOOD"
    },
    {
      "postCode": "4314",
      "suburb": "GOOGA CREEK"
    },
    {
      "postCode": "4856",
      "suburb": "GOOLBOO"
    },
    {
      "postCode": "4306",
      "suburb": "GOOLMAN"
    },
    {
      "postCode": "4702",
      "suburb": "GOOMALLY"
    },
    {
      "postCode": "4413",
      "suburb": "GOOMBI"
    },
    {
      "postCode": "4570",
      "suburb": "GOOMBOORIAN"
    },
    {
      "postCode": "4354",
      "suburb": "GOOMBUNGEE"
    },
    {
      "postCode": "4362",
      "suburb": "GOOMBURRA"
    },
    {
      "postCode": "4601",
      "suburb": "GOOMERI"
    },
    {
      "postCode": "4601",
      "suburb": "GOOMERIBONG"
    },
    {
      "postCode": "4860",
      "suburb": "GOONDI"
    },
    {
      "postCode": "4860",
      "suburb": "GOONDI BEND"
    },
    {
      "postCode": "4860",
      "suburb": "GOONDI HILL"
    },
    {
      "postCode": "4390",
      "suburb": "GOONDIWINDI"
    },
    {
      "postCode": "4800",
      "suburb": "GOORGANGA CREEK"
    },
    {
      "postCode": "4800",
      "suburb": "GOORGANGA PLAINS"
    },
    {
      "postCode": "4625",
      "suburb": "GOOROOLBA"
    },
    {
      "postCode": "4650",
      "suburb": "GOOTCHIE"
    },
    {
      "postCode": "4702",
      "suburb": "GOOVIGEN"
    },
    {
      "postCode": "4702",
      "suburb": "GOOWARRA"
    },
    {
      "postCode": "4421",
      "suburb": "GORANBA"
    },
    {
      "postCode": "4031",
      "suburb": "GORDON PARK"
    },
    {
      "postCode": "4610",
      "suburb": "GORDONBROOK"
    },
    {
      "postCode": "4702",
      "suburb": "GORDONSTONE"
    },
    {
      "postCode": "4865",
      "suburb": "GORDONVALE"
    },
    {
      "postCode": "4352",
      "suburb": "GORE"
    },
    {
      "postCode": "4352",
      "suburb": "GOWRIE JUNCTION"
    },
    {
      "postCode": "4352",
      "suburb": "GOWRIE LITTLE PLAIN"
    },
    {
      "postCode": "4350",
      "suburb": "GOWRIE MOUNTAIN"
    },
    {
      "postCode": "4470",
      "suburb": "GOWRIE STATION"
    },
    {
      "postCode": "4702",
      "suburb": "GRACEMERE"
    },
    {
      "postCode": "4075",
      "suburb": "GRACEVILLE"
    },
    {
      "postCode": "4075",
      "suburb": "GRACEVILLE EAST"
    },
    {
      "postCode": "4650",
      "suburb": "GRAHAMS CREEK"
    },
    {
      "postCode": "4855",
      "suburb": "GRANADILLA"
    },
    {
      "postCode": "4820",
      "suburb": "GRAND SECRET"
    },
    {
      "postCode": "4340",
      "suburb": "GRANDCHESTER"
    },
    {
      "postCode": "4051",
      "suburb": "GRANGE"
    },
    {
      "postCode": "4815",
      "suburb": "GRANITE VALE"
    },
    {
      "postCode": "4347",
      "suburb": "GRANTHAM"
    },
    {
      "postCode": "4650",
      "suburb": "GRANVILLE"
    },
    {
      "postCode": "4352",
      "suburb": "GRAPETREE"
    },
    {
      "postCode": "4405",
      "suburb": "GRASSDALE"
    },
    {
      "postCode": "4740",
      "suburb": "GRASSTREE BEACH"
    },
    {
      "postCode": "4357",
      "suburb": "GRAYS GATE"
    },
    {
      "postCode": "4700",
      "suburb": "GREAT KEPPEL ISLAND"
    },
    {
      "postCode": "4655",
      "suburb": "GREAT SANDY STRAIT"
    },
    {
      "postCode": "4865",
      "suburb": "GREEN HILL"
    },
    {
      "postCode": "4871",
      "suburb": "GREEN ISLAND"
    },
    {
      "postCode": "4124",
      "suburb": "GREENBANK"
    },
    {
      "postCode": "4701",
      "suburb": "GREENLAKE"
    },
    {
      "postCode": "4380",
      "suburb": "GREENLANDS"
    },
    {
      "postCode": "4359",
      "suburb": "GREENMOUNT"
    },
    {
      "postCode": "4751",
      "suburb": "GREENMOUNT"
    },
    {
      "postCode": "4570",
      "suburb": "GREENS CREEK"
    },
    {
      "postCode": "4120",
      "suburb": "GREENSLOPES"
    },
    {
      "postCode": "4513",
      "suburb": "GREENSTONE"
    },
    {
      "postCode": "4413",
      "suburb": "GREENSWAMP"
    },
    {
      "postCode": "4387",
      "suburb": "GREENUP"
    },
    {
      "postCode": "4816",
      "suburb": "GREENVALE"
    },
    {
      "postCode": "4606",
      "suburb": "GREENVIEW"
    },
    {
      "postCode": "4401",
      "suburb": "GREENWOOD"
    },
    {
      "postCode": "4313",
      "suburb": "GREGORS CREEK"
    },
    {
      "postCode": "4830",
      "suburb": "GREGORY"
    },
    {
      "postCode": "4660",
      "suburb": "GREGORY RIVER"
    },
    {
      "postCode": "4800",
      "suburb": "GREGORY RIVER"
    },
    {
      "postCode": "4715",
      "suburb": "GREYCLIFFE"
    },
    {
      "postCode": "4370",
      "suburb": "GREYMARE"
    },
    {
      "postCode": "4503",
      "suburb": "GRIFFIN"
    },
    {
      "postCode": "4222",
      "suburb": "GRIFFITH UNIVERSITY"
    },
    {
      "postCode": "4892",
      "suburb": "GROGANVILLE"
    },
    {
      "postCode": "4352",
      "suburb": "GROOMSVILLE"
    },
    {
      "postCode": "4806",
      "suburb": "GROPER CREEK"
    },
    {
      "postCode": "4419",
      "suburb": "GROSMONT"
    },
    {
      "postCode": "4627",
      "suburb": "GROSVENOR"
    },
    {
      "postCode": "4210",
      "suburb": "GUANABA"
    },
    {
      "postCode": "4875",
      "suburb": "GUIJAR ISLET"
    },
    {
      "postCode": "4812",
      "suburb": "GULLIVER"
    },
    {
      "postCode": "4855",
      "suburb": "GULNGAI"
    },
    {
      "postCode": "4418",
      "suburb": "GULUGUBA"
    },
    {
      "postCode": "4154",
      "suburb": "GUMDALE"
    },
    {
      "postCode": "4815",
      "suburb": "GUMLOW"
    },
    {
      "postCode": "4805",
      "suburb": "GUMLU"
    },
    {
      "postCode": "4570",
      "suburb": "GUNALDA"
    },
    {
      "postCode": "4650",
      "suburb": "GUNDIAH"
    },
    {
      "postCode": "4620",
      "suburb": "GUNGALOON"
    },
    {
      "postCode": "4872",
      "suburb": "GUNNAWARRA"
    },
    {
      "postCode": "4455",
      "suburb": "GUNNEWIN"
    },
    {
      "postCode": "4825",
      "suburb": "GUNPOWDER"
    },
    {
      "postCode": "4892",
      "suburb": "GUNUNA"
    },
    {
      "postCode": "4800",
      "suburb": "GUNYARRA"
    },
    {
      "postCode": "4626",
      "suburb": "GURGEENA"
    },
    {
      "postCode": "4415",
      "suburb": "GURULMUNDI"
    },
    {
      "postCode": "4805",
      "suburb": "GUTHALUNGRA"
    },
    {
      "postCode": "4420",
      "suburb": "GWAMBEGWINE"
    },
    {
      "postCode": "4570",
      "suburb": "GYMPIE"
    },
    {
      "postCode": "4570",
      "suburb": "GYMPIE DC"
    },
    {
      "postCode": "4740",
      "suburb": "HABANA"
    },
    {
      "postCode": "4353",
      "suburb": "HADEN"
    },
    {
      "postCode": "4306",
      "suburb": "HAIGSLEA"
    },
    {
      "postCode": "4742",
      "suburb": "HAIL CREEK"
    },
    {
      "postCode": "4740",
      "suburb": "HALIDAY BAY"
    },
    {
      "postCode": "4850",
      "suburb": "HALIFAX"
    },
    {
      "postCode": "4406",
      "suburb": "HALLIFORD"
    },
    {
      "postCode": "4610",
      "suburb": "HALY CREEK"
    },
    {
      "postCode": "4007",
      "suburb": "HAMILTON"
    },
    {
      "postCode": "4007",
      "suburb": "HAMILTON CENTRAL"
    },
    {
      "postCode": "4714",
      "suburb": "HAMILTON CREEK"
    },
    {
      "postCode": "4803",
      "suburb": "HAMILTON ISLAND"
    },
    {
      "postCode": "4800",
      "suburb": "HAMILTON PLAINS"
    },
    {
      "postCode": "4741",
      "suburb": "HAMPDEN"
    },
    {
      "postCode": "4352",
      "suburb": "HAMPTON"
    },
    {
      "postCode": "4406",
      "suburb": "HANNAFORD"
    },
    {
      "postCode": "4825",
      "suburb": "HAPPY VALLEY"
    },
    {
      "postCode": "4350",
      "suburb": "HARLAXTON"
    },
    {
      "postCode": "4314",
      "suburb": "HARLIN"
    },
    {
      "postCode": "4630",
      "suburb": "HARRAMI"
    },
    {
      "postCode": "4625",
      "suburb": "HARRIET"
    },
    {
      "postCode": "4350",
      "suburb": "HARRISTOWN"
    },
    {
      "postCode": "4307",
      "suburb": "HARRISVILLE"
    },
    {
      "postCode": "4341",
      "suburb": "HATTON VALE"
    },
    {
      "postCode": "4850",
      "suburb": "HAWKINS CREEK"
    },
    {
      "postCode": "4626",
      "suburb": "HAWKWOOD"
    },
    {
      "postCode": "4171",
      "suburb": "HAWTHORNE"
    },
    {
      "postCode": "4740",
      "suburb": "HAY POINT"
    },
    {
      "postCode": "4515",
      "suburb": "HAZELDEAN"
    },
    {
      "postCode": "4741",
      "suburb": "HAZLEDEAN"
    },
    {
      "postCode": "4361",
      "suburb": "HEADINGTON HILL"
    },
    {
      "postCode": "4825",
      "suburb": "HEALY"
    },
    {
      "postCode": "4110",
      "suburb": "HEATHWOOD"
    },
    {
      "postCode": "4110",
      "suburb": "HEATHWOOD DF"
    },
    {
      "postCode": "4814",
      "suburb": "HEATLEY"
    },
    {
      "postCode": "4486",
      "suburb": "HEBEL"
    },
    {
      "postCode": "4850",
      "suburb": "HELENS HILL"
    },
    {
      "postCode": "4212",
      "suburb": "HELENSVALE"
    },
    {
      "postCode": "4212",
      "suburb": "HELENSVALE TOWN CENTRE"
    },
    {
      "postCode": "4895",
      "suburb": "HELENVALE"
    },
    {
      "postCode": "4344",
      "suburb": "HELIDON"
    },
    {
      "postCode": "4344",
      "suburb": "HELIDON SPA"
    },
    {
      "postCode": "4174",
      "suburb": "HEMMANT"
    },
    {
      "postCode": "4362",
      "suburb": "HENDON"
    },
    {
      "postCode": "4011",
      "suburb": "HENDRA"
    },
    {
      "postCode": "4887",
      "suburb": "HERBERTON"
    },
    {
      "postCode": "4118",
      "suburb": "HERITAGE PARK"
    },
    {
      "postCode": "4812",
      "suburb": "HERMIT PARK"
    },
    {
      "postCode": "4680",
      "suburb": "HERON ISLAND"
    },
    {
      "postCode": "4006",
      "suburb": "HERSTON"
    },
    {
      "postCode": "4655",
      "suburb": "HERVEY BAY"
    },
    {
      "postCode": "4655",
      "suburb": "HERVEY BAY DC"
    },
    {
      "postCode": "4817",
      "suburb": "HERVEY RANGE"
    },
    {
      "postCode": "4723",
      "suburb": "HIBERNIA"
    },
    {
      "postCode": "4703",
      "suburb": "HIDDEN VALLEY"
    },
    {
      "postCode": "4800",
      "suburb": "HIDEAWAY BAY"
    },
    {
      "postCode": "4892",
      "suburb": "HIGHBURY"
    },
    {
      "postCode": "4352",
      "suburb": "HIGHFIELDS"
    },
    {
      "postCode": "4101",
      "suburb": "HIGHGATE HILL"
    },
    {
      "postCode": "4352",
      "suburb": "HIGHGROVE"
    },
    {
      "postCode": "4211",
      "suburb": "HIGHLAND PARK"
    },
    {
      "postCode": "4401",
      "suburb": "HIGHLAND PLAINS"
    },
    {
      "postCode": "4454",
      "suburb": "HIGHLAND PLAINS"
    },
    {
      "postCode": "4520",
      "suburb": "HIGHVALE"
    },
    {
      "postCode": "4560",
      "suburb": "HIGHWORTH"
    },
    {
      "postCode": "4118",
      "suburb": "HILLCREST"
    },
    {
      "postCode": "4285",
      "suburb": "HILLVIEW"
    },
    {
      "postCode": "4849",
      "suburb": "HINCHINBROOK"
    },
    {
      "postCode": "4359",
      "suburb": "HIRSTGLEN"
    },
    {
      "postCode": "4612",
      "suburb": "HIVESVILLE"
    },
    {
      "postCode": "4610",
      "suburb": "HODGLEIGH"
    },
    {
      "postCode": "4455",
      "suburb": "HODGSON"
    },
    {
      "postCode": "4352",
      "suburb": "HODGSON VALE"
    },
    {
      "postCode": "4121",
      "suburb": "HOLLAND PARK"
    },
    {
      "postCode": "4121",
      "suburb": "HOLLAND PARK EAST"
    },
    {
      "postCode": "4121",
      "suburb": "HOLLAND PARK WEST"
    },
    {
      "postCode": "4878",
      "suburb": "HOLLOWAYS BEACH"
    },
    {
      "postCode": "4216",
      "suburb": "HOLLYWELL"
    },
    {
      "postCode": "4207",
      "suburb": "HOLMVIEW"
    },
    {
      "postCode": "4892",
      "suburb": "HOLROYD RIVER"
    },
    {
      "postCode": "4806",
      "suburb": "HOME HILL"
    },
    {
      "postCode": "4740",
      "suburb": "HOMEBUSH"
    },
    {
      "postCode": "4816",
      "suburb": "HOMESTEAD"
    },
    {
      "postCode": "4415",
      "suburb": "HOOKSWOOD"
    },
    {
      "postCode": "4212",
      "suburb": "HOPE ISLAND"
    },
    {
      "postCode": "4895",
      "suburb": "HOPE VALE"
    },
    {
      "postCode": "4413",
      "suburb": "HOPELAND"
    },
    {
      "postCode": "4875",
      "suburb": "HORN"
    },
    {
      "postCode": "4671",
      "suburb": "HORSE CAMP"
    },
    {
      "postCode": "4714",
      "suburb": "HORSE CREEK"
    },
    {
      "postCode": "4819",
      "suburb": "HORSESHOE BAY"
    },
    {
      "postCode": "4809",
      "suburb": "HORSESHOE LAGOON"
    },
    {
      "postCode": "4660",
      "suburb": "HORTON"
    },
    {
      "postCode": "4659",
      "suburb": "HOWARD"
    },
    {
      "postCode": "4890",
      "suburb": "HOWITT"
    },
    {
      "postCode": "4310",
      "suburb": "HOYA"
    },
    {
      "postCode": "4860",
      "suburb": "HUDSON"
    },
    {
      "postCode": "4821",
      "suburb": "HUGHENDEN"
    },
    {
      "postCode": "4854",
      "suburb": "HULL HEADS"
    },
    {
      "postCode": "4702",
      "suburb": "HUMBOLDT"
    },
    {
      "postCode": "4490",
      "suburb": "HUMEBURN"
    },
    {
      "postCode": "4625",
      "suburb": "HUMPHERY"
    },
    {
      "postCode": "4555",
      "suburb": "HUNCHY"
    },
    {
      "postCode": "4493",
      "suburb": "HUNGERFORD"
    },
    {
      "postCode": "4871",
      "suburb": "HURRICANE"
    },
    {
      "postCode": "4454",
      "suburb": "HUTTON CREEK"
    },
    {
      "postCode": "4812",
      "suburb": "HYDE PARK"
    },
    {
      "postCode": "4875",
      "suburb": "IAMA ISLAND"
    },
    {
      "postCode": "4811",
      "suburb": "IDALIA"
    },
    {
      "postCode": "4625",
      "suburb": "IDERAWAY"
    },
    {
      "postCode": "4738",
      "suburb": "ILBILBIE"
    },
    {
      "postCode": "4727",
      "suburb": "ILFRACOMBE"
    },
    {
      "postCode": "4554",
      "suburb": "ILKLEY"
    },
    {
      "postCode": "4275",
      "suburb": "ILLINBAH"
    },
    {
      "postCode": "4560",
      "suburb": "IMAGE FLAT"
    },
    {
      "postCode": "4570",
      "suburb": "IMBIL"
    },
    {
      "postCode": "4077",
      "suburb": "INALA"
    },
    {
      "postCode": "4077",
      "suburb": "INALA HEIGHTS"
    },
    {
      "postCode": "4068",
      "suburb": "INDOOROOPILLY"
    },
    {
      "postCode": "4068",
      "suburb": "INDOOROOPILLY CENTRE"
    },
    {
      "postCode": "4850",
      "suburb": "INGHAM"
    },
    {
      "postCode": "4422",
      "suburb": "INGLESTONE"
    },
    {
      "postCode": "4387",
      "suburb": "INGLEWOOD"
    },
    {
      "postCode": "4343",
      "suburb": "INGOLDSBY"
    },
    {
      "postCode": "4876",
      "suburb": "INJINOO"
    },
    {
      "postCode": "4454",
      "suburb": "INJUNE"
    },
    {
      "postCode": "4806",
      "suburb": "INKERMAN"
    },
    {
      "postCode": "4670",
      "suburb": "INNES PARK"
    },
    {
      "postCode": "4860",
      "suburb": "INNISFAIL"
    },
    {
      "postCode": "4860",
      "suburb": "INNISFAIL ESTATE"
    },
    {
      "postCode": "4285",
      "suburb": "INNISPLAIN"
    },
    {
      "postCode": "4872",
      "suburb": "INNOT HOT SPRINGS"
    },
    {
      "postCode": "4581",
      "suburb": "INSKIP"
    },
    {
      "postCode": "4610",
      "suburb": "INVERLAW"
    },
    {
      "postCode": "4703",
      "suburb": "INVERNESS"
    },
    {
      "postCode": "4305",
      "suburb": "IPSWICH"
    },
    {
      "postCode": "4344",
      "suburb": "IREDALE"
    },
    {
      "postCode": "4892",
      "suburb": "IRON RANGE"
    },
    {
      "postCode": "4306",
      "suburb": "IRONBARK"
    },
    {
      "postCode": "4356",
      "suburb": "IRONGATE"
    },
    {
      "postCode": "4610",
      "suburb": "IRONPOT"
    },
    {
      "postCode": "4701",
      "suburb": "IRONPOT"
    },
    {
      "postCode": "4887",
      "suburb": "IRVINEBANK"
    },
    {
      "postCode": "4404",
      "suburb": "IRVINGDALE"
    },
    {
      "postCode": "4660",
      "suburb": "ISIS CENTRAL"
    },
    {
      "postCode": "4660",
      "suburb": "ISIS RIVER"
    },
    {
      "postCode": "4731",
      "suburb": "ISISFORD"
    },
    {
      "postCode": "4719",
      "suburb": "ISLA"
    },
    {
      "postCode": "4650",
      "suburb": "ISLAND PLANTATION"
    },
    {
      "postCode": "4217",
      "suburb": "ISLE OF CAPRI"
    },
    {
      "postCode": "4680",
      "suburb": "IVERAGH"
    },
    {
      "postCode": "4313",
      "suburb": "IVORY CREEK"
    },
    {
      "postCode": "4426",
      "suburb": "JACKSON"
    },
    {
      "postCode": "4426",
      "suburb": "JACKSON NORTH"
    },
    {
      "postCode": "4426",
      "suburb": "JACKSON SOUTH"
    },
    {
      "postCode": "4208",
      "suburb": "JACOBS WELL"
    },
    {
      "postCode": "4855",
      "suburb": "JAFFA"
    },
    {
      "postCode": "4885",
      "suburb": "JAGGAN"
    },
    {
      "postCode": "4702",
      "suburb": "JAMBIN"
    },
    {
      "postCode": "4074",
      "suburb": "JAMBOREE HEIGHTS"
    },
    {
      "postCode": "4811",
      "suburb": "JAMES COOK UNIVERSITY"
    },
    {
      "postCode": "4410",
      "suburb": "JANDOWAE"
    },
    {
      "postCode": "4856",
      "suburb": "JAPOONVALE"
    },
    {
      "postCode": "4702",
      "suburb": "JARDINE"
    },
    {
      "postCode": "4874",
      "suburb": "JARDINE RIVER"
    },
    {
      "postCode": "4854",
      "suburb": "JARRA CREEK"
    },
    {
      "postCode": "4807",
      "suburb": "JARVISFIELD"
    },
    {
      "postCode": "4340",
      "suburb": "JEEBROPILLY"
    },
    {
      "postCode": "4702",
      "suburb": "JELLINBAH"
    },
    {
      "postCode": "4818",
      "suburb": "JENSEN"
    },
    {
      "postCode": "4728",
      "suburb": "JERICHO"
    },
    {
      "postCode": "4809",
      "suburb": "JERONA"
    },
    {
      "postCode": "4280",
      "suburb": "JIMBOOMBA"
    },
    {
      "postCode": "4406",
      "suburb": "JIMBOUR"
    },
    {
      "postCode": "4406",
      "suburb": "JIMBOUR EAST"
    },
    {
      "postCode": "4406",
      "suburb": "JIMBOUR WEST"
    },
    {
      "postCode": "4515",
      "suburb": "JIMNA"
    },
    {
      "postCode": "4074",
      "suburb": "JINDALEE"
    },
    {
      "postCode": "4410",
      "suburb": "JINGHI"
    },
    {
      "postCode": "4490",
      "suburb": "JOBS GATE"
    },
    {
      "postCode": "4714",
      "suburb": "JOHNSONS HILL"
    },
    {
      "postCode": "4615",
      "suburb": "JOHNSTOWN"
    },
    {
      "postCode": "4520",
      "suburb": "JOLLYS LOOKOUT"
    },
    {
      "postCode": "4403",
      "suburb": "JONDARYAN"
    },
    {
      "postCode": "4355",
      "suburb": "JONES GULLY"
    },
    {
      "postCode": "4570",
      "suburb": "JONES HILL"
    },
    {
      "postCode": "4285",
      "suburb": "JOSEPHVILLE"
    },
    {
      "postCode": "4702",
      "suburb": "JOSKELEIGH"
    },
    {
      "postCode": "4500",
      "suburb": "JOYNER"
    },
    {
      "postCode": "4860",
      "suburb": "JUBILEE HEIGHTS"
    },
    {
      "postCode": "4802",
      "suburb": "JUBILEE POCKET"
    },
    {
      "postCode": "4816",
      "suburb": "JULAGO"
    },
    {
      "postCode": "4871",
      "suburb": "JULATTEN"
    },
    {
      "postCode": "4823",
      "suburb": "JULIA CREEK"
    },
    {
      "postCode": "4370",
      "suburb": "JUNABEE"
    },
    {
      "postCode": "4343",
      "suburb": "JUNCTION VIEW"
    },
    {
      "postCode": "4736",
      "suburb": "JUNDAH"
    },
    {
      "postCode": "4888",
      "suburb": "KABAN"
    },
    {
      "postCode": "4702",
      "suburb": "KABRA"
    },
    {
      "postCode": "4285",
      "suburb": "KAGARU"
    },
    {
      "postCode": "4406",
      "suburb": "KAIMKILLENBUN"
    },
    {
      "postCode": "4207",
      "suburb": "KAIRABAH"
    },
    {
      "postCode": "4872",
      "suburb": "KAIRI"
    },
    {
      "postCode": "4702",
      "suburb": "KALAPA"
    },
    {
      "postCode": "4309",
      "suburb": "KALBAR"
    },
    {
      "postCode": "4030",
      "suburb": "KALINGA"
    },
    {
      "postCode": "4825",
      "suburb": "KALKADOON"
    },
    {
      "postCode": "4670",
      "suburb": "KALKIE"
    },
    {
      "postCode": "4503",
      "suburb": "KALLANGUR"
    },
    {
      "postCode": "4630",
      "suburb": "KALPOWAR"
    },
    {
      "postCode": "4887",
      "suburb": "KALUNGA"
    },
    {
      "postCode": "4870",
      "suburb": "KAMERUNGA"
    },
    {
      "postCode": "4570",
      "suburb": "KANDANGA"
    },
    {
      "postCode": "4570",
      "suburb": "KANDANGA CREEK"
    },
    {
      "postCode": "4169",
      "suburb": "KANGAROO POINT"
    },
    {
      "postCode": "4570",
      "suburb": "KANIGAN"
    },
    {
      "postCode": "4870",
      "suburb": "KANIMBLA"
    },
    {
      "postCode": "4630",
      "suburb": "KAPALDO"
    },
    {
      "postCode": "4306",
      "suburb": "KARALEE"
    },
    {
      "postCode": "4306",
      "suburb": "KARANA DOWNS"
    },
    {
      "postCode": "4352",
      "suburb": "KARARA"
    },
    {
      "postCode": "4117",
      "suburb": "KARAWATHA"
    },
    {
      "postCode": "4306",
      "suburb": "KARRABIN"
    },
    {
      "postCode": "4184",
      "suburb": "KARRAGARRA ISLAND"
    },
    {
      "postCode": "4871",
      "suburb": "KARRON"
    },
    {
      "postCode": "4891",
      "suburb": "KARUMBA"
    },
    {
      "postCode": "4701",
      "suburb": "KAWANA"
    },
    {
      "postCode": "4612",
      "suburb": "KAWL KAWL"
    },
    {
      "postCode": "4655",
      "suburb": "KAWUNGAN"
    },
    {
      "postCode": "4350",
      "suburb": "KEARNEYS SPRING"
    },
    {
      "postCode": "4031",
      "suburb": "KEDRON"
    },
    {
      "postCode": "4800",
      "suburb": "KELSEY CREEK"
    },
    {
      "postCode": "4815",
      "suburb": "KELSO"
    },
    {
      "postCode": "4059",
      "suburb": "KELVIN GROVE"
    },
    {
      "postCode": "4059",
      "suburb": "KELVIN GROVE DC"
    },
    {
      "postCode": "4401",
      "suburb": "KELVINHAUGH"
    },
    {
      "postCode": "4742",
      "suburb": "KEMMIS"
    },
    {
      "postCode": "4574",
      "suburb": "KENILWORTH"
    },
    {
      "postCode": "4069",
      "suburb": "KENMORE"
    },
    {
      "postCode": "4069",
      "suburb": "KENMORE DC"
    },
    {
      "postCode": "4069",
      "suburb": "KENMORE EAST"
    },
    {
      "postCode": "4069",
      "suburb": "KENMORE HILLS"
    },
    {
      "postCode": "4816",
      "suburb": "KENNEDY"
    },
    {
      "postCode": "4670",
      "suburb": "KENSINGTON"
    },
    {
      "postCode": "4341",
      "suburb": "KENSINGTON GROVE"
    },
    {
      "postCode": "4309",
      "suburb": "KENTS LAGOON"
    },
    {
      "postCode": "4310",
      "suburb": "KENTS POCKET"
    },
    {
      "postCode": "4341",
      "suburb": "KENTVILLE"
    },
    {
      "postCode": "4054",
      "suburb": "KEPERRA"
    },
    {
      "postCode": "4670",
      "suburb": "KEPNOCK"
    },
    {
      "postCode": "4702",
      "suburb": "KEPPEL SANDS"
    },
    {
      "postCode": "4875",
      "suburb": "KERIRI ISLAND"
    },
    {
      "postCode": "4285",
      "suburb": "KERRY"
    },
    {
      "postCode": "4879",
      "suburb": "KEWARRA BEACH"
    },
    {
      "postCode": "4612",
      "suburb": "KEYSLAND"
    },
    {
      "postCode": "4306",
      "suburb": "KHOLO"
    },
    {
      "postCode": "4723",
      "suburb": "KHOSH BULDUK"
    },
    {
      "postCode": "4570",
      "suburb": "KIA ORA"
    },
    {
      "postCode": "4560",
      "suburb": "KIAMBA"
    },
    {
      "postCode": "4718",
      "suburb": "KIANGA"
    },
    {
      "postCode": "4574",
      "suburb": "KIDAMAN CREEK"
    },
    {
      "postCode": "4559",
      "suburb": "KIELS MOUNTAIN"
    },
    {
      "postCode": "4354",
      "suburb": "KILBIRNIE"
    },
    {
      "postCode": "4515",
      "suburb": "KILCOY"
    },
    {
      "postCode": "4721",
      "suburb": "KILCUMMIN"
    },
    {
      "postCode": "4600",
      "suburb": "KILKIVAN"
    },
    {
      "postCode": "4877",
      "suburb": "KILLALOE"
    },
    {
      "postCode": "4373",
      "suburb": "KILLARNEY"
    },
    {
      "postCode": "4465",
      "suburb": "KILMOREY FALLS"
    },
    {
      "postCode": "4873",
      "suburb": "KIMBERLEY"
    },
    {
      "postCode": "4571",
      "suburb": "KIN KIN"
    },
    {
      "postCode": "4680",
      "suburb": "KIN KORA"
    },
    {
      "postCode": "4601",
      "suburb": "KINBOMBI"
    },
    {
      "postCode": "4741",
      "suburb": "KINCHANT DAM"
    },
    {
      "postCode": "4356",
      "suburb": "KINCORA"
    },
    {
      "postCode": "4390",
      "suburb": "KINDON"
    },
    {
      "postCode": "4521",
      "suburb": "KING SCRUB"
    },
    {
      "postCode": "4515",
      "suburb": "KINGAHAM"
    },
    {
      "postCode": "4610",
      "suburb": "KINGAROY"
    },
    {
      "postCode": "4610",
      "suburb": "KINGAROY DC"
    },
    {
      "postCode": "4655",
      "suburb": "KINGFISHER BAY RESORT"
    },
    {
      "postCode": "4551",
      "suburb": "KINGS BEACH"
    },
    {
      "postCode": "4361",
      "suburb": "KINGS CREEK"
    },
    {
      "postCode": "4401",
      "suburb": "KINGS SIDING"
    },
    {
      "postCode": "4208",
      "suburb": "KINGSHOLME"
    },
    {
      "postCode": "4400",
      "suburb": "KINGSTHORPE"
    },
    {
      "postCode": "4114",
      "suburb": "KINGSTON"
    },
    {
      "postCode": "4703",
      "suburb": "KINKA BEACH"
    },
    {
      "postCode": "4670",
      "suburb": "KINKUNA"
    },
    {
      "postCode": "4613",
      "suburb": "KINLEYMORE"
    },
    {
      "postCode": "4420",
      "suburb": "KINNOUL"
    },
    {
      "postCode": "4498",
      "suburb": "KIOMA"
    },
    {
      "postCode": "4021",
      "suburb": "KIPPA-RING"
    },
    {
      "postCode": "4806",
      "suburb": "KIRKNIE"
    },
    {
      "postCode": "4680",
      "suburb": "KIRKWOOD"
    },
    {
      "postCode": "4872",
      "suburb": "KIRRAMA"
    },
    {
      "postCode": "4817",
      "suburb": "KIRWAN"
    },
    {
      "postCode": "4605",
      "suburb": "KITOBA"
    },
    {
      "postCode": "4352",
      "suburb": "KLEINTON"
    },
    {
      "postCode": "4285",
      "suburb": "KNAPP CREEK"
    },
    {
      "postCode": "4881",
      "suburb": "KOAH"
    },
    {
      "postCode": "4520",
      "suburb": "KOBBLE CREEK"
    },
    {
      "postCode": "4406",
      "suburb": "KOGAN"
    },
    {
      "postCode": "4702",
      "suburb": "KOKOTUNGO"
    },
    {
      "postCode": "4671",
      "suburb": "KOLONGA"
    },
    {
      "postCode": "4872",
      "suburb": "KOOMBOOLOOMBA"
    },
    {
      "postCode": "4701",
      "suburb": "KOONGAL"
    },
    {
      "postCode": "4285",
      "suburb": "KOORALBYN"
    },
    {
      "postCode": "4402",
      "suburb": "KOORALGIN"
    },
    {
      "postCode": "4025",
      "suburb": "KOORINGAL"
    },
    {
      "postCode": "4854",
      "suburb": "KOOROOMOOL"
    },
    {
      "postCode": "4357",
      "suburb": "KOOROONGARRA"
    },
    {
      "postCode": "4738",
      "suburb": "KOUMALA"
    },
    {
      "postCode": "4892",
      "suburb": "KOWANYAMA"
    },
    {
      "postCode": "4415",
      "suburb": "KOWGURAN"
    },
    {
      "postCode": "4413",
      "suburb": "KRAGRA"
    },
    {
      "postCode": "4875",
      "suburb": "KUBIN"
    },
    {
      "postCode": "4560",
      "suburb": "KULANGOOR"
    },
    {
      "postCode": "4309",
      "suburb": "KULGUN"
    },
    {
      "postCode": "4660",
      "suburb": "KULLOGUM"
    },
    {
      "postCode": "4352",
      "suburb": "KULPI"
    },
    {
      "postCode": "4558",
      "suburb": "KULUIN"
    },
    {
      "postCode": "4405",
      "suburb": "KUMBARILLA"
    },
    {
      "postCode": "4610",
      "suburb": "KUMBIA"
    },
    {
      "postCode": "4556",
      "suburb": "KUNDA PARK"
    },
    {
      "postCode": "4615",
      "suburb": "KUNIOON"
    },
    {
      "postCode": "4702",
      "suburb": "KUNWARARA"
    },
    {
      "postCode": "4112",
      "suburb": "KURABY"
    },
    {
      "postCode": "4881",
      "suburb": "KURANDA"
    },
    {
      "postCode": "4560",
      "suburb": "KUREELPA"
    },
    {
      "postCode": "4885",
      "suburb": "KUREEN"
    },
    {
      "postCode": "4824",
      "suburb": "KURIDALA"
    },
    {
      "postCode": "4871",
      "suburb": "KURRIMINE BEACH"
    },
    {
      "postCode": "4352",
      "suburb": "KURROWAH"
    },
    {
      "postCode": "4388",
      "suburb": "KURUMBUL"
    },
    {
      "postCode": "4503",
      "suburb": "KURWONGBAH"
    },
    {
      "postCode": "4741",
      "suburb": "KUTTABUL"
    },
    {
      "postCode": "4570",
      "suburb": "KYBONG"
    },
    {
      "postCode": "4823",
      "suburb": "KYNUNA"
    },
    {
      "postCode": "4380",
      "suburb": "KYOOMBA"
    },
    {
      "postCode": "4215",
      "suburb": "LABRADOR"
    },
    {
      "postCode": "4521",
      "suburb": "LACEYS CREEK"
    },
    {
      "postCode": "4721",
      "suburb": "LAGLAN"
    },
    {
      "postCode": "4570",
      "suburb": "LAGOON POCKET"
    },
    {
      "postCode": "4800",
      "suburb": "LAGUNA QUAYS"
    },
    {
      "postCode": "4341",
      "suburb": "LAIDLEY"
    },
    {
      "postCode": "4341",
      "suburb": "LAIDLEY CREEK WEST"
    },
    {
      "postCode": "4341",
      "suburb": "LAIDLEY HEIGHTS"
    },
    {
      "postCode": "4341",
      "suburb": "LAIDLEY NORTH"
    },
    {
      "postCode": "4341",
      "suburb": "LAIDLEY SOUTH"
    },
    {
      "postCode": "4884",
      "suburb": "LAKE BARRINE"
    },
    {
      "postCode": "4570",
      "suburb": "LAKE BORUMBA"
    },
    {
      "postCode": "4343",
      "suburb": "LAKE CLARENDON"
    },
    {
      "postCode": "4884",
      "suburb": "LAKE EACHAM"
    },
    {
      "postCode": "4563",
      "suburb": "LAKE MACDONALD"
    },
    {
      "postCode": "4306",
      "suburb": "LAKE MANCHESTER"
    },
    {
      "postCode": "4703",
      "suburb": "LAKE MARY"
    },
    {
      "postCode": "4671",
      "suburb": "LAKE MONDURAN"
    },
    {
      "postCode": "4800",
      "suburb": "LAKE PROSERPINE"
    },
    {
      "postCode": "4872",
      "suburb": "LAKE TINAROO"
    },
    {
      "postCode": "4311",
      "suburb": "LAKE WIVENHOE"
    },
    {
      "postCode": "4892",
      "suburb": "LAKEFIELD"
    },
    {
      "postCode": "4871",
      "suburb": "LAKELAND"
    },
    {
      "postCode": "4871",
      "suburb": "LAKELAND DOWNS"
    },
    {
      "postCode": "4701",
      "suburb": "LAKES CREEK"
    },
    {
      "postCode": "4621",
      "suburb": "LAKESIDE"
    },
    {
      "postCode": "4184",
      "suburb": "LAMB ISLAND"
    },
    {
      "postCode": "4870",
      "suburb": "LAMB RANGE"
    },
    {
      "postCode": "4285",
      "suburb": "LAMINGTON"
    },
    {
      "postCode": "4703",
      "suburb": "LAMMERMOOR"
    },
    {
      "postCode": "4555",
      "suburb": "LANDERS SHOOT"
    },
    {
      "postCode": "4550",
      "suburb": "LANDSBOROUGH"
    },
    {
      "postCode": "4340",
      "suburb": "LANEFIELD"
    },
    {
      "postCode": "4410",
      "suburb": "LANGLANDS"
    },
    {
      "postCode": "4630",
      "suburb": "LANGLEY"
    },
    {
      "postCode": "4470",
      "suburb": "LANGLO"
    },
    {
      "postCode": "4570",
      "suburb": "LANGSHAW"
    },
    {
      "postCode": "4850",
      "suburb": "LANNERCOST"
    },
    {
      "postCode": "4478",
      "suburb": "LANSDOWNE"
    },
    {
      "postCode": "4825",
      "suburb": "LANSKEY"
    },
    {
      "postCode": "4110",
      "suburb": "LARAPINTA"
    },
    {
      "postCode": "4285",
      "suburb": "LARAVALE"
    },
    {
      "postCode": "4306",
      "suburb": "LARK HILL"
    },
    {
      "postCode": "4892",
      "suburb": "LAURA"
    },
    {
      "postCode": "4357",
      "suburb": "LAVELLE"
    },
    {
      "postCode": "4343",
      "suburb": "LAWES"
    },
    {
      "postCode": "4716",
      "suburb": "LAWGI DAWES"
    },
    {
      "postCode": "4825",
      "suburb": "LAWN HILL"
    },
    {
      "postCode": "4501",
      "suburb": "LAWNTON"
    },
    {
      "postCode": "4606",
      "suburb": "LEAFDALE"
    },
    {
      "postCode": "4343",
      "suburb": "LEFTHAND BRANCH"
    },
    {
      "postCode": "4305",
      "suburb": "LEICHHARDT"
    },
    {
      "postCode": "4357",
      "suburb": "LEMONTREE"
    },
    {
      "postCode": "4370",
      "suburb": "LESLIE"
    },
    {
      "postCode": "4370",
      "suburb": "LESLIE DAM"
    },
    {
      "postCode": "4800",
      "suburb": "LETHEBROOK"
    },
    {
      "postCode": "4365",
      "suburb": "LEYBURN"
    },
    {
      "postCode": "4714",
      "suburb": "LEYDENS HILL"
    },
    {
      "postCode": "4344",
      "suburb": "LILYDALE"
    },
    {
      "postCode": "4352",
      "suburb": "LILYVALE"
    },
    {
      "postCode": "4723",
      "suburb": "LILYVALE"
    },
    {
      "postCode": "4513",
      "suburb": "LILYWOOD"
    },
    {
      "postCode": "4714",
      "suburb": "LIMESTONE"
    },
    {
      "postCode": "4701",
      "suburb": "LIMESTONE CREEK"
    },
    {
      "postCode": "4305",
      "suburb": "LIMESTONE RIDGES"
    },
    {
      "postCode": "4384",
      "suburb": "LIMEVALE"
    },
    {
      "postCode": "4490",
      "suburb": "LINDEN"
    },
    {
      "postCode": "4356",
      "suburb": "LINTHORPE"
    },
    {
      "postCode": "4314",
      "suburb": "LINVILLE"
    },
    {
      "postCode": "4551",
      "suburb": "LITTLE MOUNTAIN"
    },
    {
      "postCode": "4865",
      "suburb": "LITTLE MULGRAVE"
    },
    {
      "postCode": "4892",
      "suburb": "LIZARD"
    },
    {
      "postCode": "4820",
      "suburb": "LLANARTH"
    },
    {
      "postCode": "4370",
      "suburb": "LOCH LOMOND"
    },
    {
      "postCode": "4720",
      "suburb": "LOCHINGTON"
    },
    {
      "postCode": "4892",
      "suburb": "LOCKHART RIVER"
    },
    {
      "postCode": "4342",
      "suburb": "LOCKROSE"
    },
    {
      "postCode": "4344",
      "suburb": "LOCKYER"
    },
    {
      "postCode": "4311",
      "suburb": "LOCKYER WATERS"
    },
    {
      "postCode": "4114",
      "suburb": "LOGAN CENTRAL"
    },
    {
      "postCode": "4114",
      "suburb": "LOGAN CITY DC"
    },
    {
      "postCode": "4133",
      "suburb": "LOGAN RESERVE"
    },
    {
      "postCode": "4207",
      "suburb": "LOGAN VILLAGE"
    },
    {
      "postCode": "4129",
      "suburb": "LOGANHOLME"
    },
    {
      "postCode": "4129",
      "suburb": "LOGANHOLME BC"
    },
    {
      "postCode": "4129",
      "suburb": "LOGANHOLME DC"
    },
    {
      "postCode": "4131",
      "suburb": "LOGANLEA"
    },
    {
      "postCode": "4719",
      "suburb": "LONESOME CREEK"
    },
    {
      "postCode": "4570",
      "suburb": "LONG FLAT"
    },
    {
      "postCode": "4850",
      "suburb": "LONG POCKET"
    },
    {
      "postCode": "4730",
      "suburb": "LONGREACH"
    },
    {
      "postCode": "4179",
      "suburb": "LOTA"
    },
    {
      "postCode": "4705",
      "suburb": "LOTUS CREEK"
    },
    {
      "postCode": "4873",
      "suburb": "LOW ISLES"
    },
    {
      "postCode": "4211",
      "suburb": "LOWER BEECHMONT"
    },
    {
      "postCode": "4871",
      "suburb": "LOWER COWLEY"
    },
    {
      "postCode": "4313",
      "suburb": "LOWER CRESSBROOK"
    },
    {
      "postCode": "4873",
      "suburb": "LOWER DAINTREE"
    },
    {
      "postCode": "4340",
      "suburb": "LOWER MOUNT WALKER"
    },
    {
      "postCode": "4343",
      "suburb": "LOWER TENTHILL"
    },
    {
      "postCode": "4854",
      "suburb": "LOWER TULLY"
    },
    {
      "postCode": "4570",
      "suburb": "LOWER WONGA"
    },
    {
      "postCode": "4702",
      "suburb": "LOWESBY"
    },
    {
      "postCode": "4723",
      "suburb": "LOWESTOFF"
    },
    {
      "postCode": "4676",
      "suburb": "LOWMEAD"
    },
    {
      "postCode": "4311",
      "suburb": "LOWOOD"
    },
    {
      "postCode": "4850",
      "suburb": "LUCINDA"
    },
    {
      "postCode": "4478",
      "suburb": "LUMEAH"
    },
    {
      "postCode": "4849",
      "suburb": "LUMHOLTZ"
    },
    {
      "postCode": "4390",
      "suburb": "LUNDAVRA"
    },
    {
      "postCode": "4207",
      "suburb": "LUSCOMBE"
    },
    {
      "postCode": "4030",
      "suburb": "LUTWYCHE"
    },
    {
      "postCode": "4818",
      "suburb": "LYNAM"
    },
    {
      "postCode": "4871",
      "suburb": "LYNDHURST"
    },
    {
      "postCode": "4892",
      "suburb": "LYNDSIDE"
    },
    {
      "postCode": "4342",
      "suburb": "LYNFORD"
    },
    {
      "postCode": "4124",
      "suburb": "LYONS"
    },
    {
      "postCode": "4382",
      "suburb": "LYRA"
    },
    {
      "postCode": "4178",
      "suburb": "LYTTON"
    },
    {
      "postCode": "4347",
      "suburb": "MA MA CREEK"
    },
    {
      "postCode": "4855",
      "suburb": "MAADI"
    },
    {
      "postCode": "4886",
      "suburb": "MAALAN"
    },
    {
      "postCode": "4650",
      "suburb": "MAAROOM"
    },
    {
      "postCode": "4875",
      "suburb": "MABUIAG ISLAND"
    },
    {
      "postCode": "4406",
      "suburb": "MACALISTER"
    },
    {
      "postCode": "4871",
      "suburb": "MACALISTER RANGE"
    },
    {
      "postCode": "4478",
      "suburb": "MACFARLANE"
    },
    {
      "postCode": "4109",
      "suburb": "MACGREGOR"
    },
    {
      "postCode": "4878",
      "suburb": "MACHANS BEACH"
    },
    {
      "postCode": "4695",
      "suburb": "MACHINE CREEK"
    },
    {
      "postCode": "4740",
      "suburb": "MACKAY"
    },
    {
      "postCode": "4740",
      "suburb": "MACKAY CANELAND"
    },
    {
      "postCode": "4740",
      "suburb": "MACKAY DC"
    },
    {
      "postCode": "4740",
      "suburb": "MACKAY HARBOUR"
    },
    {
      "postCode": "4741",
      "suburb": "MACKAY MC"
    },
    {
      "postCode": "4740",
      "suburb": "MACKAY NORTH"
    },
    {
      "postCode": "4740",
      "suburb": "MACKAY SOUTH"
    },
    {
      "postCode": "4740",
      "suburb": "MACKAY WEST"
    },
    {
      "postCode": "4156",
      "suburb": "MACKENZIE"
    },
    {
      "postCode": "4702",
      "suburb": "MACKENZIE"
    },
    {
      "postCode": "4705",
      "suburb": "MACKENZIE RIVER"
    },
    {
      "postCode": "4850",
      "suburb": "MACKNADE"
    },
    {
      "postCode": "4352",
      "suburb": "MACLAGAN"
    },
    {
      "postCode": "4184",
      "suburb": "MACLEAY ISLAND"
    },
    {
      "postCode": "4819",
      "suburb": "MAGNETIC ISLAND"
    },
    {
      "postCode": "4650",
      "suburb": "MAGNOLIA"
    },
    {
      "postCode": "4385",
      "suburb": "MAIDENHEAD"
    },
    {
      "postCode": "4615",
      "suburb": "MAIDENWELL"
    },
    {
      "postCode": "4217",
      "suburb": "MAIN BEACH"
    },
    {
      "postCode": "4816",
      "suburb": "MAJORS CREEK"
    },
    {
      "postCode": "4885",
      "suburb": "MALANDA"
    },
    {
      "postCode": "4620",
      "suburb": "MALARGA"
    },
    {
      "postCode": "4552",
      "suburb": "MALENY"
    },
    {
      "postCode": "4352",
      "suburb": "MALLING"
    },
    {
      "postCode": "4627",
      "suburb": "MALMOE"
    },
    {
      "postCode": "4816",
      "suburb": "MALPAS-TRENTON"
    },
    {
      "postCode": "4403",
      "suburb": "MALU"
    },
    {
      "postCode": "4871",
      "suburb": "MAMU"
    },
    {
      "postCode": "4361",
      "suburb": "MANAPOURI"
    },
    {
      "postCode": "4802",
      "suburb": "MANDALAY"
    },
    {
      "postCode": "4509",
      "suburb": "MANGO HILL"
    },
    {
      "postCode": "4179",
      "suburb": "MANLY"
    },
    {
      "postCode": "4179",
      "suburb": "MANLY WEST"
    },
    {
      "postCode": "4610",
      "suburb": "MANNUEM"
    },
    {
      "postCode": "4870",
      "suburb": "MANOORA"
    },
    {
      "postCode": "4122",
      "suburb": "MANSFIELD"
    },
    {
      "postCode": "4122",
      "suburb": "MANSFIELD BC"
    },
    {
      "postCode": "4122",
      "suburb": "MANSFIELD DC"
    },
    {
      "postCode": "4722",
      "suburb": "MANTUAN DOWNS"
    },
    {
      "postCode": "4601",
      "suburb": "MANUMBAR"
    },
    {
      "postCode": "4870",
      "suburb": "MANUNDA"
    },
    {
      "postCode": "4605",
      "suburb": "MANYUNG"
    },
    {
      "postCode": "4560",
      "suburb": "MAPLETON"
    },
    {
      "postCode": "4874",
      "suburb": "MAPOON"
    },
    {
      "postCode": "4892",
      "suburb": "MARAMIE"
    },
    {
      "postCode": "4821",
      "suburb": "MARATHON"
    },
    {
      "postCode": "4346",
      "suburb": "MARBURG"
    },
    {
      "postCode": "4564",
      "suburb": "MARCOOLA"
    },
    {
      "postCode": "4573",
      "suburb": "MARCUS BEACH"
    },
    {
      "postCode": "4880",
      "suburb": "MAREEBA"
    },
    {
      "postCode": "4019",
      "suburb": "MARGATE"
    },
    {
      "postCode": "4019",
      "suburb": "MARGATE BEACH"
    },
    {
      "postCode": "4855",
      "suburb": "MARIA CREEKS"
    },
    {
      "postCode": "4753",
      "suburb": "MARIAN"
    },
    {
      "postCode": "4705",
      "suburb": "MARLBOROUGH"
    },
    {
      "postCode": "4405",
      "suburb": "MARMADUA"
    },
    {
      "postCode": "4702",
      "suburb": "MARMOR"
    },
    {
      "postCode": "4570",
      "suburb": "MARODIAN"
    },
    {
      "postCode": "4561",
      "suburb": "MAROOCHY RIVER"
    },
    {
      "postCode": "4558",
      "suburb": "MAROOCHYDORE"
    },
    {
      "postCode": "4558",
      "suburb": "MAROOCHYDORE BC"
    },
    {
      "postCode": "4558",
      "suburb": "MAROOCHYDORE DC"
    },
    {
      "postCode": "4310",
      "suburb": "MAROON"
    },
    {
      "postCode": "4671",
      "suburb": "MAROONDAN"
    },
    {
      "postCode": "4132",
      "suburb": "MARSDEN"
    },
    {
      "postCode": "4611",
      "suburb": "MARSHLANDS"
    },
    {
      "postCode": "4858",
      "suburb": "MARTYVILLE"
    },
    {
      "postCode": "4650",
      "suburb": "MARYBOROUGH"
    },
    {
      "postCode": "4650",
      "suburb": "MARYBOROUGH DC"
    },
    {
      "postCode": "4650",
      "suburb": "MARYBOROUGH WEST"
    },
    {
      "postCode": "4570",
      "suburb": "MARYS CREEK"
    },
    {
      "postCode": "4370",
      "suburb": "MARYVALE"
    },
    {
      "postCode": "4703",
      "suburb": "MARYVALE"
    },
    {
      "postCode": "4875",
      "suburb": "MASIG ISLAND"
    },
    {
      "postCode": "4370",
      "suburb": "MASSIE"
    },
    {
      "postCode": "4210",
      "suburb": "MAUDSLAND"
    },
    {
      "postCode": "4822",
      "suburb": "MAXWELTON"
    },
    {
      "postCode": "4746",
      "suburb": "MAY DOWNS"
    },
    {
      "postCode": "4856",
      "suburb": "MCCUTCHEON"
    },
    {
      "postCode": "4807",
      "suburb": "MCDESME"
    },
    {
      "postCode": "4053",
      "suburb": "MCDOWALL"
    },
    {
      "postCode": "4740",
      "suburb": "MCEWENS BEACH"
    },
    {
      "postCode": "4671",
      "suburb": "MCILWRAITH"
    },
    {
      "postCode": "4570",
      "suburb": "MCINTOSH CREEK"
    },
    {
      "postCode": "4823",
      "suburb": "MCKINLAY"
    },
    {
      "postCode": "4131",
      "suburb": "MEADOWBROOK"
    },
    {
      "postCode": "4670",
      "suburb": "MEADOWVALE"
    },
    {
      "postCode": "4422",
      "suburb": "MEANDARRA"
    },
    {
      "postCode": "4703",
      "suburb": "MEIKLEVILLE HILL"
    },
    {
      "postCode": "4570",
      "suburb": "MELAWONDI"
    },
    {
      "postCode": "4510",
      "suburb": "MELDALE"
    },
    {
      "postCode": "4613",
      "suburb": "MELROSE"
    },
    {
      "postCode": "4610",
      "suburb": "MEMERAMBI"
    },
    {
      "postCode": "4871",
      "suburb": "MENA CREEK"
    },
    {
      "postCode": "4798",
      "suburb": "MENTMORE"
    },
    {
      "postCode": "4825",
      "suburb": "MENZIES"
    },
    {
      "postCode": "4875",
      "suburb": "MER ISLAND"
    },
    {
      "postCode": "4551",
      "suburb": "MERIDAN PLAINS"
    },
    {
      "postCode": "4805",
      "suburb": "MERINDA"
    },
    {
      "postCode": "4352",
      "suburb": "MERINGANDAN"
    },
    {
      "postCode": "4352",
      "suburb": "MERINGANDAN WEST"
    },
    {
      "postCode": "4605",
      "suburb": "MERLWOOD"
    },
    {
      "postCode": "4218",
      "suburb": "MERMAID BEACH"
    },
    {
      "postCode": "4218",
      "suburb": "MERMAID WATERS"
    },
    {
      "postCode": "4226",
      "suburb": "MERRIMAC"
    },
    {
      "postCode": "4352",
      "suburb": "MERRITTS CREEK"
    },
    {
      "postCode": "4854",
      "suburb": "MERRYBURN"
    },
    {
      "postCode": "4340",
      "suburb": "MERRYVALE"
    },
    {
      "postCode": "4754",
      "suburb": "MIA MIA"
    },
    {
      "postCode": "4873",
      "suburb": "MIALLO"
    },
    {
      "postCode": "4220",
      "suburb": "MIAMI"
    },
    {
      "postCode": "4673",
      "suburb": "MIARA"
    },
    {
      "postCode": "4825",
      "suburb": "MICA CREEK"
    },
    {
      "postCode": "4074",
      "suburb": "MIDDLE PARK"
    },
    {
      "postCode": "4350",
      "suburb": "MIDDLE RIDGE"
    },
    {
      "postCode": "4886",
      "suburb": "MIDDLEBROOK"
    },
    {
      "postCode": "4746",
      "suburb": "MIDDLEMOUNT"
    },
    {
      "postCode": "4735",
      "suburb": "MIDDLETON"
    },
    {
      "postCode": "4799",
      "suburb": "MIDGE POINT"
    },
    {
      "postCode": "4702",
      "suburb": "MIDGEE"
    },
    {
      "postCode": "4854",
      "suburb": "MIDGENOO"
    },
    {
      "postCode": "4852",
      "suburb": "MIDGEREE BAR"
    },
    {
      "postCode": "4860",
      "suburb": "MIGHELL"
    },
    {
      "postCode": "4310",
      "suburb": "MILBONG"
    },
    {
      "postCode": "4415",
      "suburb": "MILES"
    },
    {
      "postCode": "4825",
      "suburb": "MILES END"
    },
    {
      "postCode": "4310",
      "suburb": "MILFORD"
    },
    {
      "postCode": "4886",
      "suburb": "MILLAA MILLAA"
    },
    {
      "postCode": "4807",
      "suburb": "MILLAROO"
    },
    {
      "postCode": "4670",
      "suburb": "MILLBANK"
    },
    {
      "postCode": "4820",
      "suburb": "MILLCHESTER"
    },
    {
      "postCode": "4357",
      "suburb": "MILLMERRAN"
    },
    {
      "postCode": "4357",
      "suburb": "MILLMERRAN DOWNS"
    },
    {
      "postCode": "4357",
      "suburb": "MILLMERRAN WOODS"
    },
    {
      "postCode": "4888",
      "suburb": "MILLSTREAM"
    },
    {
      "postCode": "4357",
      "suburb": "MILLWOOD"
    },
    {
      "postCode": "4702",
      "suburb": "MILMAN"
    },
    {
      "postCode": "4309",
      "suburb": "MILORA"
    },
    {
      "postCode": "4064",
      "suburb": "MILTON"
    },
    {
      "postCode": "4702",
      "suburb": "MIMOSA"
    },
    {
      "postCode": "4829",
      "suburb": "MIN MIN"
    },
    {
      "postCode": "4886",
      "suburb": "MINBUN"
    },
    {
      "postCode": "4311",
      "suburb": "MINDEN"
    },
    {
      "postCode": "4722",
      "suburb": "MINERVA"
    },
    {
      "postCode": "4816",
      "suburb": "MINGELA"
    },
    {
      "postCode": "4625",
      "suburb": "MINGO"
    },
    {
      "postCode": "4380",
      "suburb": "MINGOOLA"
    },
    {
      "postCode": "4872",
      "suburb": "MINNAMOOLKA"
    },
    {
      "postCode": "4478",
      "suburb": "MINNIE DOWNS"
    },
    {
      "postCode": "4575",
      "suburb": "MINYAMA"
    },
    {
      "postCode": "4754",
      "suburb": "MIRANI"
    },
    {
      "postCode": "4677",
      "suburb": "MIRIAM VALE"
    },
    {
      "postCode": "4871",
      "suburb": "MIRRIWINNI"
    },
    {
      "postCode": "4361",
      "suburb": "MISSEN FLAT"
    },
    {
      "postCode": "4852",
      "suburb": "MISSION BEACH"
    },
    {
      "postCode": "4874",
      "suburb": "MISSION RIVER"
    },
    {
      "postCode": "4465",
      "suburb": "MITCHELL"
    },
    {
      "postCode": "4053",
      "suburb": "MITCHELTON"
    },
    {
      "postCode": "4570",
      "suburb": "MIVA"
    },
    {
      "postCode": "4875",
      "suburb": "MOA ISLAND"
    },
    {
      "postCode": "4551",
      "suburb": "MOFFAT BEACH"
    },
    {
      "postCode": "4605",
      "suburb": "MOFFATDALE"
    },
    {
      "postCode": "4070",
      "suburb": "MOGGILL"
    },
    {
      "postCode": "4671",
      "suburb": "MOLANGUL"
    },
    {
      "postCode": "4214",
      "suburb": "MOLENDINAR"
    },
    {
      "postCode": "4670",
      "suburb": "MON REPOS"
    },
    {
      "postCode": "4881",
      "suburb": "MONA MONA"
    },
    {
      "postCode": "4807",
      "suburb": "MONA PARK"
    },
    {
      "postCode": "4630",
      "suburb": "MONAL"
    },
    {
      "postCode": "4285",
      "suburb": "MONARCH GLEN"
    },
    {
      "postCode": "4671",
      "suburb": "MONDURAN"
    },
    {
      "postCode": "4611",
      "suburb": "MONDURE"
    },
    {
      "postCode": "4570",
      "suburb": "MONKLAND"
    },
    {
      "postCode": "4626",
      "suburb": "MONOGORILBY"
    },
    {
      "postCode": "4556",
      "suburb": "MONS"
    },
    {
      "postCode": "4515",
      "suburb": "MONSILDALE"
    },
    {
      "postCode": "4630",
      "suburb": "MONTO"
    },
    {
      "postCode": "4370",
      "suburb": "MONTROSE"
    },
    {
      "postCode": "4413",
      "suburb": "MONTROSE"
    },
    {
      "postCode": "4560",
      "suburb": "MONTVILLE"
    },
    {
      "postCode": "4510",
      "suburb": "MOODLU"
    },
    {
      "postCode": "4455",
      "suburb": "MOOGA"
    },
    {
      "postCode": "4309",
      "suburb": "MOOGERAH"
    },
    {
      "postCode": "4406",
      "suburb": "MOOLA"
    },
    {
      "postCode": "4671",
      "suburb": "MOOLBOOLAMAN"
    },
    {
      "postCode": "4570",
      "suburb": "MOOLOO"
    },
    {
      "postCode": "4557",
      "suburb": "MOOLOOLABA"
    },
    {
      "postCode": "4553",
      "suburb": "MOOLOOLAH"
    },
    {
      "postCode": "4553",
      "suburb": "MOOLOOLAH VALLEY"
    },
    {
      "postCode": "4312",
      "suburb": "MOOMBRA"
    },
    {
      "postCode": "4887",
      "suburb": "MOOMIN"
    },
    {
      "postCode": "4605",
      "suburb": "MOONDOONER"
    },
    {
      "postCode": "4630",
      "suburb": "MOONFORD"
    },
    {
      "postCode": "4714",
      "suburb": "MOONGAN"
    },
    {
      "postCode": "4406",
      "suburb": "MOONIE"
    },
    {
      "postCode": "4340",
      "suburb": "MOORANG"
    },
    {
      "postCode": "4314",
      "suburb": "MOORE"
    },
    {
      "postCode": "4670",
      "suburb": "MOORE PARK BEACH"
    },
    {
      "postCode": "4305",
      "suburb": "MOORES POCKET"
    },
    {
      "postCode": "4506",
      "suburb": "MOORINA"
    },
    {
      "postCode": "4670",
      "suburb": "MOORLAND"
    },
    {
      "postCode": "4870",
      "suburb": "MOOROOBOOL"
    },
    {
      "postCode": "4105",
      "suburb": "MOOROOKA"
    },
    {
      "postCode": "4416",
      "suburb": "MORABY"
    },
    {
      "postCode": "4744",
      "suburb": "MORANBAH"
    },
    {
      "postCode": "4506",
      "suburb": "MORAYFIELD"
    },
    {
      "postCode": "4886",
      "suburb": "MOREGATTA"
    },
    {
      "postCode": "4871",
      "suburb": "MORESBY"
    },
    {
      "postCode": "4025",
      "suburb": "MORETON ISLAND"
    },
    {
      "postCode": "4370",
      "suburb": "MORGAN PARK"
    },
    {
      "postCode": "4671",
      "suburb": "MORGANVILLE"
    },
    {
      "postCode": "4702",
      "suburb": "MORINISH"
    },
    {
      "postCode": "4702",
      "suburb": "MORINISH SOUTH"
    },
    {
      "postCode": "4170",
      "suburb": "MORNINGSIDE"
    },
    {
      "postCode": "4825",
      "suburb": "MORNINGTON"
    },
    {
      "postCode": "4343",
      "suburb": "MORTON VALE"
    },
    {
      "postCode": "4468",
      "suburb": "MORVEN"
    },
    {
      "postCode": "4309",
      "suburb": "MORWINCHA"
    },
    {
      "postCode": "4820",
      "suburb": "MOSMAN PARK"
    },
    {
      "postCode": "4387",
      "suburb": "MOSQUITO CREEK"
    },
    {
      "postCode": "4873",
      "suburb": "MOSSMAN"
    },
    {
      "postCode": "4873",
      "suburb": "MOSSMAN GORGE"
    },
    {
      "postCode": "4570",
      "suburb": "MOTHAR MOUNTAIN"
    },
    {
      "postCode": "4356",
      "suburb": "MOTLEY"
    },
    {
      "postCode": "4455",
      "suburb": "MOUNT ABUNDANCE"
    },
    {
      "postCode": "4310",
      "suburb": "MOUNT ALFORD"
    },
    {
      "postCode": "4680",
      "suburb": "MOUNT ALMA"
    },
    {
      "postCode": "4514",
      "suburb": "MOUNT ARCHER"
    },
    {
      "postCode": "4701",
      "suburb": "MOUNT ARCHER"
    },
    {
      "postCode": "4287",
      "suburb": "MOUNT BARNEY"
    },
    {
      "postCode": "4313",
      "suburb": "MOUNT BEPPO"
    },
    {
      "postCode": "4341",
      "suburb": "MOUNT BERRYMAN"
    },
    {
      "postCode": "4455",
      "suburb": "MOUNT BINDANGO"
    },
    {
      "postCode": "4314",
      "suburb": "MOUNT BINGA"
    },
    {
      "postCode": "4742",
      "suburb": "MOUNT BRITTON"
    },
    {
      "postCode": "4312",
      "suburb": "MOUNT BYRON"
    },
    {
      "postCode": "4871",
      "suburb": "MOUNT CARBINE"
    },
    {
      "postCode": "4702",
      "suburb": "MOUNT CHALMERS"
    },
    {
      "postCode": "4741",
      "suburb": "MOUNT CHARLTON"
    },
    {
      "postCode": "4370",
      "suburb": "MOUNT COLLIERY"
    },
    {
      "postCode": "4804",
      "suburb": "MOUNT COOLON"
    },
    {
      "postCode": "4573",
      "suburb": "MOUNT COOLUM"
    },
    {
      "postCode": "4066",
      "suburb": "MOUNT COOT-THA"
    },
    {
      "postCode": "4165",
      "suburb": "MOUNT COTTON"
    },
    {
      "postCode": "4306",
      "suburb": "MOUNT CROSBY"
    },
    {
      "postCode": "4353",
      "suburb": "MOUNT DARRY"
    },
    {
      "postCode": "4625",
      "suburb": "MOUNT DEBATEABLE"
    },
    {
      "postCode": "4514",
      "suburb": "MOUNT DELANEY"
    },
    {
      "postCode": "4309",
      "suburb": "MOUNT EDWARDS"
    },
    {
      "postCode": "4816",
      "suburb": "MOUNT ELLIOT"
    },
    {
      "postCode": "4357",
      "suburb": "MOUNT EMLYN"
    },
    {
      "postCode": "4472",
      "suburb": "MOUNT ENNISKILLEN"
    },
    {
      "postCode": "4340",
      "suburb": "MOUNT FORBES"
    },
    {
      "postCode": "4850",
      "suburb": "MOUNT FOX"
    },
    {
      "postCode": "4310",
      "suburb": "MOUNT FRENCH"
    },
    {
      "postCode": "4705",
      "suburb": "MOUNT GARDINER"
    },
    {
      "postCode": "4872",
      "suburb": "MOUNT GARNET"
    },
    {
      "postCode": "4285",
      "suburb": "MOUNT GIPPS"
    },
    {
      "postCode": "4520",
      "suburb": "MOUNT GLORIOUS"
    },
    {
      "postCode": "4122",
      "suburb": "MOUNT GRAVATT"
    },
    {
      "postCode": "4122",
      "suburb": "MOUNT GRAVATT EAST"
    },
    {
      "postCode": "4312",
      "suburb": "MOUNT HALLEN"
    },
    {
      "postCode": "4454",
      "suburb": "MOUNT HOWE"
    },
    {
      "postCode": "4454",
      "suburb": "MOUNT HUTTON"
    },
    {
      "postCode": "4401",
      "suburb": "MOUNT IRVING"
    },
    {
      "postCode": "4825",
      "suburb": "MOUNT ISA"
    },
    {
      "postCode": "4825",
      "suburb": "MOUNT ISA CITY"
    },
    {
      "postCode": "4825",
      "suburb": "MOUNT ISA DC"
    },
    {
      "postCode": "4825",
      "suburb": "MOUNT ISA EAST"
    },
    {
      "postCode": "4740",
      "suburb": "MOUNT JUKES"
    },
    {
      "postCode": "4800",
      "suburb": "MOUNT JULIAN"
    },
    {
      "postCode": "4807",
      "suburb": "MOUNT KELLY"
    },
    {
      "postCode": "4515",
      "suburb": "MOUNT KILCOY"
    },
    {
      "postCode": "4350",
      "suburb": "MOUNT KYNOCH"
    },
    {
      "postCode": "4695",
      "suburb": "MOUNT LARCOM"
    },
    {
      "postCode": "4625",
      "suburb": "MOUNT LAWLESS"
    },
    {
      "postCode": "4287",
      "suburb": "MOUNT LINDESAY"
    },
    {
      "postCode": "4350",
      "suburb": "MOUNT LOFTY"
    },
    {
      "postCode": "4814",
      "suburb": "MOUNT LOUISA"
    },
    {
      "postCode": "4818",
      "suburb": "MOUNT LOW"
    },
    {
      "postCode": "4352",
      "suburb": "MOUNT LUKE"
    },
    {
      "postCode": "4723",
      "suburb": "MOUNT MACARTHUR"
    },
    {
      "postCode": "4854",
      "suburb": "MOUNT MACKAY"
    },
    {
      "postCode": "4674",
      "suburb": "MOUNT MARIA"
    },
    {
      "postCode": "4800",
      "suburb": "MOUNT MARLOW"
    },
    {
      "postCode": "4306",
      "suburb": "MOUNT MARROW"
    },
    {
      "postCode": "4362",
      "suburb": "MOUNT MARSHALL"
    },
    {
      "postCode": "4754",
      "suburb": "MOUNT MARTIN"
    },
    {
      "postCode": "4606",
      "suburb": "MOUNT MCEUEN"
    },
    {
      "postCode": "4521",
      "suburb": "MOUNT MEE"
    },
    {
      "postCode": "4550",
      "suburb": "MOUNT MELLUM"
    },
    {
      "postCode": "4465",
      "suburb": "MOUNT MOFFATT"
    },
    {
      "postCode": "4361",
      "suburb": "MOUNT MOLAR"
    },
    {
      "postCode": "4871",
      "suburb": "MOUNT MOLLOY"
    },
    {
      "postCode": "4714",
      "suburb": "MOUNT MORGAN"
    },
    {
      "postCode": "4403",
      "suburb": "MOUNT MORIAH"
    },
    {
      "postCode": "4340",
      "suburb": "MOUNT MORT"
    },
    {
      "postCode": "4892",
      "suburb": "MOUNT MULGRAVE"
    },
    {
      "postCode": "4871",
      "suburb": "MOUNT MULLIGAN"
    },
    {
      "postCode": "4715",
      "suburb": "MOUNT MURCHISON"
    },
    {
      "postCode": "4211",
      "suburb": "MOUNT NATHAN"
    },
    {
      "postCode": "4520",
      "suburb": "MOUNT NEBO"
    },
    {
      "postCode": "4074",
      "suburb": "MOUNT OMMANEY"
    },
    {
      "postCode": "4741",
      "suburb": "MOUNT OSSA"
    },
    {
      "postCode": "4741",
      "suburb": "MOUNT PELION"
    },
    {
      "postCode": "4671",
      "suburb": "MOUNT PERRY"
    },
    {
      "postCode": "4869",
      "suburb": "MOUNT PETER"
    },
    {
      "postCode": "4521",
      "suburb": "MOUNT PLEASANT"
    },
    {
      "postCode": "4740",
      "suburb": "MOUNT PLEASANT"
    },
    {
      "postCode": "4800",
      "suburb": "MOUNT PLUTO"
    },
    {
      "postCode": "4350",
      "suburb": "MOUNT RASCAL"
    },
    {
      "postCode": "4802",
      "suburb": "MOUNT ROOPER"
    },
    {
      "postCode": "4520",
      "suburb": "MOUNT SAMSON"
    },
    {
      "postCode": "4868",
      "suburb": "MOUNT SHERIDAN"
    },
    {
      "postCode": "4818",
      "suburb": "MOUNT ST JOHN"
    },
    {
      "postCode": "4314",
      "suburb": "MOUNT STANLEY"
    },
    {
      "postCode": "4625",
      "suburb": "MOUNT STEADMAN"
    },
    {
      "postCode": "4811",
      "suburb": "MOUNT STUART"
    },
    {
      "postCode": "4370",
      "suburb": "MOUNT STURT"
    },
    {
      "postCode": "4871",
      "suburb": "MOUNT SURPRISE"
    },
    {
      "postCode": "4809",
      "suburb": "MOUNT SURROUND"
    },
    {
      "postCode": "4343",
      "suburb": "MOUNT SYLVIA"
    },
    {
      "postCode": "4370",
      "suburb": "MOUNT TABOR"
    },
    {
      "postCode": "4311",
      "suburb": "MOUNT TARAMPA"
    },
    {
      "postCode": "4677",
      "suburb": "MOUNT TOM"
    },
    {
      "postCode": "4380",
      "suburb": "MOUNT TULLY"
    },
    {
      "postCode": "4356",
      "suburb": "MOUNT TYSON"
    },
    {
      "postCode": "4650",
      "suburb": "MOUNT URAH"
    },
    {
      "postCode": "4340",
      "suburb": "MOUNT WALKER"
    },
    {
      "postCode": "4340",
      "suburb": "MOUNT WALKER WEST"
    },
    {
      "postCode": "4207",
      "suburb": "MOUNT WARREN PARK"
    },
    {
      "postCode": "4347",
      "suburb": "MOUNT WHITESTONE"
    },
    {
      "postCode": "4804",
      "suburb": "MOUNT WYATT"
    },
    {
      "postCode": "4355",
      "suburb": "MOUNTAIN CAMP"
    },
    {
      "postCode": "4557",
      "suburb": "MOUNTAIN CREEK"
    },
    {
      "postCode": "4718",
      "suburb": "MOURA"
    },
    {
      "postCode": "4858",
      "suburb": "MOURILYAN"
    },
    {
      "postCode": "4858",
      "suburb": "MOURILYAN HARBOUR"
    },
    {
      "postCode": "4877",
      "suburb": "MOWBRAY"
    },
    {
      "postCode": "4405",
      "suburb": "MOWBULLAN"
    },
    {
      "postCode": "4574",
      "suburb": "MOY POCKET"
    },
    {
      "postCode": "4606",
      "suburb": "MP CREEK"
    },
    {
      "postCode": "4461",
      "suburb": "MUCKADILLA"
    },
    {
      "postCode": "4213",
      "suburb": "MUDGEERABA"
    },
    {
      "postCode": "4564",
      "suburb": "MUDJIMBA"
    },
    {
      "postCode": "4600",
      "suburb": "MUDLO"
    },
    {
      "postCode": "4306",
      "suburb": "MUIRLEA"
    },
    {
      "postCode": "4703",
      "suburb": "MULAMBIN"
    },
    {
      "postCode": "4703",
      "suburb": "MULARA"
    },
    {
      "postCode": "4401",
      "suburb": "MULDU"
    },
    {
      "postCode": "4630",
      "suburb": "MULGILDIE"
    },
    {
      "postCode": "4341",
      "suburb": "MULGOWIE"
    },
    {
      "postCode": "4807",
      "suburb": "MULGRAVE"
    },
    {
      "postCode": "4670",
      "suburb": "MULLETT CREEK"
    },
    {
      "postCode": "4309",
      "suburb": "MUNBILLA"
    },
    {
      "postCode": "4740",
      "suburb": "MUNBURA"
    },
    {
      "postCode": "4872",
      "suburb": "MUNDERRA"
    },
    {
      "postCode": "4812",
      "suburb": "MUNDINGBURRA"
    },
    {
      "postCode": "4860",
      "suburb": "MUNDOO"
    },
    {
      "postCode": "4285",
      "suburb": "MUNDOOLUN"
    },
    {
      "postCode": "4626",
      "suburb": "MUNDOWRAN"
    },
    {
      "postCode": "4626",
      "suburb": "MUNDUBBERA"
    },
    {
      "postCode": "4718",
      "suburb": "MUNGABUNDA"
    },
    {
      "postCode": "4467",
      "suburb": "MUNGALLALA"
    },
    {
      "postCode": "4467",
      "suburb": "MUNGALLALA SOUTH"
    },
    {
      "postCode": "4886",
      "suburb": "MUNGALLI"
    },
    {
      "postCode": "4650",
      "suburb": "MUNGAR"
    },
    {
      "postCode": "2406",
      "suburb": "MUNGINDI"
    },
    {
      "postCode": "4630",
      "suburb": "MUNGUNGO"
    },
    {
      "postCode": "4671",
      "suburb": "MUNGY"
    },
    {
      "postCode": "4352",
      "suburb": "MUNIGANEEN"
    },
    {
      "postCode": "4570",
      "suburb": "MUNNA CREEK"
    },
    {
      "postCode": "4854",
      "suburb": "MUNRO PLAINS"
    },
    {
      "postCode": "4125",
      "suburb": "MUNRUBEN"
    },
    {
      "postCode": "4172",
      "suburb": "MURARRIE"
    },
    {
      "postCode": "4605",
      "suburb": "MURGON"
    },
    {
      "postCode": "4352",
      "suburb": "MURPHYS CREEK"
    },
    {
      "postCode": "4814",
      "suburb": "MURRAY"
    },
    {
      "postCode": "4875",
      "suburb": "MURRAY ISLAND"
    },
    {
      "postCode": "4854",
      "suburb": "MURRAY UPPER"
    },
    {
      "postCode": "4370",
      "suburb": "MURRAYS BRIDGE"
    },
    {
      "postCode": "4854",
      "suburb": "MURRIGAL"
    },
    {
      "postCode": "4312",
      "suburb": "MURRUMBA"
    },
    {
      "postCode": "4503",
      "suburb": "MURRUMBA DOWNS"
    },
    {
      "postCode": "4470",
      "suburb": "MURWEH"
    },
    {
      "postCode": "4816",
      "suburb": "MUTARNEE"
    },
    {
      "postCode": "4872",
      "suburb": "MUTCHILBA"
    },
    {
      "postCode": "4307",
      "suburb": "MUTDAPILLY"
    },
    {
      "postCode": "4732",
      "suburb": "MUTTABURRA"
    },
    {
      "postCode": "4415",
      "suburb": "MYALL PARK"
    },
    {
      "postCode": "4800",
      "suburb": "MYRTLEVALE"
    },
    {
      "postCode": "4812",
      "suburb": "MYSTERTON"
    },
    {
      "postCode": "4570",
      "suburb": "NAHRUNDA"
    },
    {
      "postCode": "4560",
      "suburb": "NAMBOUR"
    },
    {
      "postCode": "4560",
      "suburb": "NAMBOUR BC"
    },
    {
      "postCode": "4560",
      "suburb": "NAMBOUR DC"
    },
    {
      "postCode": "4615",
      "suburb": "NANANGO"
    },
    {
      "postCode": "4405",
      "suburb": "NANDI"
    },
    {
      "postCode": "4722",
      "suburb": "NANDOWRIE"
    },
    {
      "postCode": "4416",
      "suburb": "NANGRAM"
    },
    {
      "postCode": "4407",
      "suburb": "NANGWEE"
    },
    {
      "postCode": "4701",
      "suburb": "NANKIN"
    },
    {
      "postCode": "4874",
      "suburb": "NANUM"
    },
    {
      "postCode": "4874",
      "suburb": "NAPRANUM"
    },
    {
      "postCode": "4504",
      "suburb": "NARANGBA"
    },
    {
      "postCode": "4352",
      "suburb": "NARKO"
    },
    {
      "postCode": "4111",
      "suburb": "NATHAN"
    },
    {
      "postCode": "4211",
      "suburb": "NATURAL BRIDGE"
    },
    {
      "postCode": "4671",
      "suburb": "NEARUM"
    },
    {
      "postCode": "4488",
      "suburb": "NEBINE"
    },
    {
      "postCode": "4742",
      "suburb": "NEBO"
    },
    {
      "postCode": "4570",
      "suburb": "NEERDIE"
    },
    {
      "postCode": "4819",
      "suburb": "NELLY BAY"
    },
    {
      "postCode": "4860",
      "suburb": "NERADA"
    },
    {
      "postCode": "4211",
      "suburb": "NERANG"
    },
    {
      "postCode": "4211",
      "suburb": "NERANG DC"
    },
    {
      "postCode": "4213",
      "suburb": "NERANWOOD"
    },
    {
      "postCode": "4701",
      "suburb": "NERIMBERA"
    },
    {
      "postCode": "4650",
      "suburb": "NETHERBY"
    },
    {
      "postCode": "4756",
      "suburb": "NETHERDALE"
    },
    {
      "postCode": "4614",
      "suburb": "NEUMGNA"
    },
    {
      "postCode": "4514",
      "suburb": "NEURUM"
    },
    {
      "postCode": "4570",
      "suburb": "NEUSA VALE"
    },
    {
      "postCode": "4361",
      "suburb": "NEVILTON"
    },
    {
      "postCode": "4680",
      "suburb": "NEW AUCKLAND"
    },
    {
      "postCode": "4124",
      "suburb": "NEW BEITH"
    },
    {
      "postCode": "4303",
      "suburb": "NEW CHUM"
    },
    {
      "postCode": "4005",
      "suburb": "NEW FARM"
    },
    {
      "postCode": "4858",
      "suburb": "NEW HARBOURLINE"
    },
    {
      "postCode": "4876",
      "suburb": "NEW MAPOON"
    },
    {
      "postCode": "4671",
      "suburb": "NEW MOONTA"
    },
    {
      "postCode": "4873",
      "suburb": "NEWELL"
    },
    {
      "postCode": "4804",
      "suburb": "NEWLANDS"
    },
    {
      "postCode": "4051",
      "suburb": "NEWMARKET"
    },
    {
      "postCode": "4020",
      "suburb": "NEWPORT"
    },
    {
      "postCode": "4006",
      "suburb": "NEWSTEAD"
    },
    {
      "postCode": "4305",
      "suburb": "NEWTOWN"
    },
    {
      "postCode": "4350",
      "suburb": "NEWTOWN"
    },
    {
      "postCode": "4860",
      "suburb": "NGATJAN"
    },
    {
      "postCode": "4830",
      "suburb": "NICHOLSON"
    },
    {
      "postCode": "4655",
      "suburb": "NIKENBAH"
    },
    {
      "postCode": "4740",
      "suburb": "NINDAROO"
    },
    {
      "postCode": "4561",
      "suburb": "NINDERRY"
    },
    {
      "postCode": "4285",
      "suburb": "NINDOOINBAH"
    },
    {
      "postCode": "4702",
      "suburb": "NINE MILE"
    },
    {
      "postCode": "4714",
      "suburb": "NINE MILE CREEK"
    },
    {
      "postCode": "4511",
      "suburb": "NINGI"
    },
    {
      "postCode": "4551",
      "suburb": "NIRIMBA"
    },
    {
      "postCode": "4477",
      "suburb": "NIVE"
    },
    {
      "postCode": "4856",
      "suburb": "NO 4 BRANCH"
    },
    {
      "postCode": "4856",
      "suburb": "NO 5 BRANCH"
    },
    {
      "postCode": "4859",
      "suburb": "NO 6 BRANCH"
    },
    {
      "postCode": "4873",
      "suburb": "NOAH"
    },
    {
      "postCode": "4360",
      "suburb": "NOBBY"
    },
    {
      "postCode": "4218",
      "suburb": "NOBBY BEACH"
    },
    {
      "postCode": "4492",
      "suburb": "NOCCUNDRA"
    },
    {
      "postCode": "4816",
      "suburb": "NOME"
    },
    {
      "postCode": "4490",
      "suburb": "NOORAMA"
    },
    {
      "postCode": "4417",
      "suburb": "NOORINDOO"
    },
    {
      "postCode": "4567",
      "suburb": "NOOSA HEADS"
    },
    {
      "postCode": "4565",
      "suburb": "NOOSA NORTH SHORE"
    },
    {
      "postCode": "4566",
      "suburb": "NOOSAVILLE"
    },
    {
      "postCode": "4566",
      "suburb": "NOOSAVILLE DC"
    },
    {
      "postCode": "4701",
      "suburb": "NORMAN GARDENS"
    },
    {
      "postCode": "4170",
      "suburb": "NORMAN PARK"
    },
    {
      "postCode": "4890",
      "suburb": "NORMANTON"
    },
    {
      "postCode": "4620",
      "suburb": "NORTH ARAMARA"
    },
    {
      "postCode": "4561",
      "suburb": "NORTH ARM"
    },
    {
      "postCode": "4304",
      "suburb": "NORTH BOOVAL"
    },
    {
      "postCode": "4356",
      "suburb": "NORTH BRANCH"
    },
    {
      "postCode": "4370",
      "suburb": "NORTH BRANCH"
    },
    {
      "postCode": "4494",
      "suburb": "NORTH BUNGUNYA"
    },
    {
      "postCode": "4570",
      "suburb": "NORTH DEEP CREEK"
    },
    {
      "postCode": "4741",
      "suburb": "NORTH ETON"
    },
    {
      "postCode": "4660",
      "suburb": "NORTH GREGORY"
    },
    {
      "postCode": "4305",
      "suburb": "NORTH IPSWICH"
    },
    {
      "postCode": "4660",
      "suburb": "NORTH ISIS"
    },
    {
      "postCode": "4885",
      "suburb": "NORTH JOHNSTONE"
    },
    {
      "postCode": "4509",
      "suburb": "NORTH LAKES"
    },
    {
      "postCode": "4740",
      "suburb": "NORTH MACKAY"
    },
    {
      "postCode": "4352",
      "suburb": "NORTH MACLAGAN"
    },
    {
      "postCode": "4280",
      "suburb": "NORTH MACLEAN"
    },
    {
      "postCode": "4552",
      "suburb": "NORTH MALENY"
    },
    {
      "postCode": "4183",
      "suburb": "NORTH STRADBROKE ISLAND"
    },
    {
      "postCode": "4496",
      "suburb": "NORTH TALWOOD"
    },
    {
      "postCode": "4272",
      "suburb": "NORTH TAMBORINE"
    },
    {
      "postCode": "4305",
      "suburb": "NORTH TIVOLI"
    },
    {
      "postCode": "4350",
      "suburb": "NORTH TOOWOOMBA"
    },
    {
      "postCode": "4810",
      "suburb": "NORTH WARD"
    },
    {
      "postCode": "4013",
      "suburb": "NORTHGATE"
    },
    {
      "postCode": "9464",
      "suburb": "NORTHGATE MC"
    },
    {
      "postCode": "4871",
      "suburb": "NORTHHEAD"
    },
    {
      "postCode": "4350",
      "suburb": "NORTHLANDS"
    },
    {
      "postCode": "4670",
      "suburb": "NORVILLE"
    },
    {
      "postCode": "4208",
      "suburb": "NORWELL"
    },
    {
      "postCode": "4356",
      "suburb": "NORWIN"
    },
    {
      "postCode": "4014",
      "suburb": "NUDGEE"
    },
    {
      "postCode": "4014",
      "suburb": "NUDGEE BEACH"
    },
    {
      "postCode": "4314",
      "suburb": "NUKKU"
    },
    {
      "postCode": "4211",
      "suburb": "NUMINBAH VALLEY"
    },
    {
      "postCode": "4012",
      "suburb": "NUNDAH"
    },
    {
      "postCode": "4380",
      "suburb": "NUNDUBBERMERE"
    },
    {
      "postCode": "4352",
      "suburb": "NUTGROVE"
    },
    {
      "postCode": "4871",
      "suburb": "NYCHUM"
    },
    {
      "postCode": "4626",
      "suburb": "O'BIL BIL"
    },
    {
      "postCode": "4860",
      "suburb": "O'BRIENS HILL"
    },
    {
      "postCode": "4680",
      "suburb": "O'CONNELL"
    },
    {
      "postCode": "4275",
      "suburb": "O'REILLY"
    },
    {
      "postCode": "4877",
      "suburb": "OAK BEACH"
    },
    {
      "postCode": "4811",
      "suburb": "OAK VALLEY"
    },
    {
      "postCode": "4605",
      "suburb": "OAKDALE"
    },
    {
      "postCode": "4741",
      "suburb": "OAKENDEN"
    },
    {
      "postCode": "4401",
      "suburb": "OAKEY"
    },
    {
      "postCode": "4714",
      "suburb": "OAKEY CREEK"
    },
    {
      "postCode": "4650",
      "suburb": "OAKHURST"
    },
    {
      "postCode": "4600",
      "suburb": "OAKVIEW"
    },
    {
      "postCode": "4670",
      "suburb": "OAKWOOD"
    },
    {
      "postCode": "4285",
      "suburb": "OAKY CREEK"
    },
    {
      "postCode": "4417",
      "suburb": "OBERINA"
    },
    {
      "postCode": "4574",
      "suburb": "OBI OBI"
    },
    {
      "postCode": "4309",
      "suburb": "OBUM OBUM"
    },
    {
      "postCode": "4521",
      "suburb": "OCEAN VIEW"
    },
    {
      "postCode": "4706",
      "suburb": "OGMORE"
    },
    {
      "postCode": "4613",
      "suburb": "OKEDEN"
    },
    {
      "postCode": "4626",
      "suburb": "OLD COORANGA"
    },
    {
      "postCode": "4362",
      "suburb": "OLD TALGAI"
    },
    {
      "postCode": "4352",
      "suburb": "OMAN AMA"
    },
    {
      "postCode": "4305",
      "suburb": "ONE MILE"
    },
    {
      "postCode": "4718",
      "suburb": "OOMBABEER"
    },
    {
      "postCode": "4811",
      "suburb": "OONOONBA"
    },
    {
      "postCode": "4740",
      "suburb": "OORALEA"
    },
    {
      "postCode": "4735",
      "suburb": "OPALTON"
    },
    {
      "postCode": "4455",
      "suburb": "ORALLO"
    },
    {
      "postCode": "4715",
      "suburb": "ORANGE CREEK"
    },
    {
      "postCode": "4455",
      "suburb": "ORANGE HILL"
    },
    {
      "postCode": "4581",
      "suburb": "ORCHID BEACH"
    },
    {
      "postCode": "4850",
      "suburb": "ORIENT"
    },
    {
      "postCode": "4722",
      "suburb": "ORION"
    },
    {
      "postCode": "4741",
      "suburb": "ORKABIE"
    },
    {
      "postCode": "4208",
      "suburb": "ORMEAU"
    },
    {
      "postCode": "4208",
      "suburb": "ORMEAU HILLS"
    },
    {
      "postCode": "4160",
      "suburb": "ORMISTON"
    },
    {
      "postCode": "4806",
      "suburb": "OSBORNE"
    },
    {
      "postCode": "4313",
      "suburb": "OTTABA"
    },
    {
      "postCode": "4650",
      "suburb": "OWANYILLA"
    },
    {
      "postCode": "4741",
      "suburb": "OWENS CREEK"
    },
    {
      "postCode": "4210",
      "suburb": "OXENFORD"
    },
    {
      "postCode": "4742",
      "suburb": "OXFORD"
    },
    {
      "postCode": "4075",
      "suburb": "OXLEY"
    },
    {
      "postCode": "4674",
      "suburb": "OYSTER CREEK"
    },
    {
      "postCode": "4218",
      "suburb": "PACIFIC FAIR"
    },
    {
      "postCode": "4659",
      "suburb": "PACIFIC HAVEN"
    },
    {
      "postCode": "4703",
      "suburb": "PACIFIC HEIGHTS"
    },
    {
      "postCode": "4564",
      "suburb": "PACIFIC PARADISE"
    },
    {
      "postCode": "4211",
      "suburb": "PACIFIC PINES"
    },
    {
      "postCode": "4865",
      "suburb": "PACKERS CAMP"
    },
    {
      "postCode": "4064",
      "suburb": "PADDINGTON"
    },
    {
      "postCode": "4880",
      "suburb": "PADDYS GREEN"
    },
    {
      "postCode": "4740",
      "suburb": "PAGET"
    },
    {
      "postCode": "4287",
      "suburb": "PALEN CREEK"
    },
    {
      "postCode": "4374",
      "suburb": "PALGRAVE"
    },
    {
      "postCode": "4110",
      "suburb": "PALLARA"
    },
    {
      "postCode": "4810",
      "suburb": "PALLARENDA"
    },
    {
      "postCode": "4650",
      "suburb": "PALLAS STREET MARYBOROUGH"
    },
    {
      "postCode": "4221",
      "suburb": "PALM BEACH"
    },
    {
      "postCode": "4879",
      "suburb": "PALM COVE"
    },
    {
      "postCode": "4800",
      "suburb": "PALM GROVE"
    },
    {
      "postCode": "4816",
      "suburb": "PALM ISLAND"
    },
    {
      "postCode": "4892",
      "suburb": "PALMER"
    },
    {
      "postCode": "4860",
      "suburb": "PALMERSTON"
    },
    {
      "postCode": "4352",
      "suburb": "PALMTREE"
    },
    {
      "postCode": "4553",
      "suburb": "PALMVIEW"
    },
    {
      "postCode": "4555",
      "suburb": "PALMWOODS"
    },
    {
      "postCode": "4751",
      "suburb": "PALMYRA"
    },
    {
      "postCode": "4816",
      "suburb": "PALUMA"
    },
    {
      "postCode": "4352",
      "suburb": "PAMPAS"
    },
    {
      "postCode": "4216",
      "suburb": "PARADISE POINT"
    },
    {
      "postCode": "4701",
      "suburb": "PARK AVENUE"
    },
    {
      "postCode": "4125",
      "suburb": "PARK RIDGE"
    },
    {
      "postCode": "4125",
      "suburb": "PARK RIDGE SOUTH"
    },
    {
      "postCode": "4702",
      "suburb": "PARKHURST"
    },
    {
      "postCode": "4115",
      "suburb": "PARKINSON"
    },
    {
      "postCode": "4560",
      "suburb": "PARKLANDS"
    },
    {
      "postCode": "4417",
      "suburb": "PARKNOOK"
    },
    {
      "postCode": "4825",
      "suburb": "PARKSIDE"
    },
    {
      "postCode": "4214",
      "suburb": "PARKWOOD"
    },
    {
      "postCode": "4870",
      "suburb": "PARRAMATTA PARK"
    },
    {
      "postCode": "4575",
      "suburb": "PARREARRA"
    },
    {
      "postCode": "4721",
      "suburb": "PASHA"
    },
    {
      "postCode": "4380",
      "suburb": "PASSCHENDAELE"
    },
    {
      "postCode": "4570",
      "suburb": "PATERSON"
    },
    {
      "postCode": "4311",
      "suburb": "PATRICK ESTATE"
    },
    {
      "postCode": "4800",
      "suburb": "PAULS POCKET"
    },
    {
      "postCode": "4519",
      "suburb": "PEACHESTER"
    },
    {
      "postCode": "4850",
      "suburb": "PEACOCK SIDING"
    },
    {
      "postCode": "4306",
      "suburb": "PEAK CROSSING"
    },
    {
      "postCode": "4721",
      "suburb": "PEAK VALE"
    },
    {
      "postCode": "4352",
      "suburb": "PECHEY"
    },
    {
      "postCode": "4184",
      "suburb": "PEEL ISLAND"
    },
    {
      "postCode": "4885",
      "suburb": "PEERAMON"
    },
    {
      "postCode": "4415",
      "suburb": "PELHAM"
    },
    {
      "postCode": "4413",
      "suburb": "PELICAN"
    },
    {
      "postCode": "4551",
      "suburb": "PELICAN WATERS"
    },
    {
      "postCode": "4816",
      "suburb": "PENTLAND"
    },
    {
      "postCode": "4625",
      "suburb": "PENWHAUPELL"
    },
    {
      "postCode": "4352",
      "suburb": "PERANGA"
    },
    {
      "postCode": "4573",
      "suburb": "PEREGIAN BEACH"
    },
    {
      "postCode": "4573",
      "suburb": "PEREGIAN SPRINGS"
    },
    {
      "postCode": "4352",
      "suburb": "PERSEVERANCE"
    },
    {
      "postCode": "4560",
      "suburb": "PERWILLOWEN"
    },
    {
      "postCode": "4871",
      "suburb": "PETFORD"
    },
    {
      "postCode": "4502",
      "suburb": "PETRIE"
    },
    {
      "postCode": "4000",
      "suburb": "PETRIE TERRACE"
    },
    {
      "postCode": "4702",
      "suburb": "PHEASANT CREEK"
    },
    {
      "postCode": "4626",
      "suburb": "PHILPOTT"
    },
    {
      "postCode": "4655",
      "suburb": "PIALBA"
    },
    {
      "postCode": "4428",
      "suburb": "PICKANJINNIE"
    },
    {
      "postCode": "4819",
      "suburb": "PICNIC BAY"
    },
    {
      "postCode": "4570",
      "suburb": "PIE CREEK"
    },
    {
      "postCode": "4355",
      "suburb": "PIERCES CREEK"
    },
    {
      "postCode": "4380",
      "suburb": "PIKEDALE"
    },
    {
      "postCode": "4380",
      "suburb": "PIKES CREEK"
    },
    {
      "postCode": "4625",
      "suburb": "PILE GULLY"
    },
    {
      "postCode": "4650",
      "suburb": "PILERWA"
    },
    {
      "postCode": "4361",
      "suburb": "PILTON"
    },
    {
      "postCode": "4812",
      "suburb": "PIMLICO"
    },
    {
      "postCode": "4209",
      "suburb": "PIMPAMA"
    },
    {
      "postCode": "4615",
      "suburb": "PIMPIMBUDGEE"
    },
    {
      "postCode": "4860",
      "suburb": "PIN GIN HILL"
    },
    {
      "postCode": "4568",
      "suburb": "PINBARREN"
    },
    {
      "postCode": "4798",
      "suburb": "PINDI PINDI"
    },
    {
      "postCode": "4670",
      "suburb": "PINE CREEK"
    },
    {
      "postCode": "4416",
      "suburb": "PINE HILLS"
    },
    {
      "postCode": "4306",
      "suburb": "PINE MOUNTAIN"
    },
    {
      "postCode": "4355",
      "suburb": "PINELANDS"
    },
    {
      "postCode": "4754",
      "suburb": "PINEVALE"
    },
    {
      "postCode": "4069",
      "suburb": "PINJARRA HILLS"
    },
    {
      "postCode": "4702",
      "suburb": "PINK LILY"
    },
    {
      "postCode": "4008",
      "suburb": "PINKENBA"
    },
    {
      "postCode": "4741",
      "suburb": "PINNACLE"
    },
    {
      "postCode": "4815",
      "suburb": "PINNACLES"
    },
    {
      "postCode": "4825",
      "suburb": "PIONEER"
    },
    {
      "postCode": "4650",
      "suburb": "PIONEERS REST"
    },
    {
      "postCode": "4405",
      "suburb": "PIRRINUAN"
    },
    {
      "postCode": "4356",
      "suburb": "PITTSWORTH"
    },
    {
      "postCode": "4825",
      "suburb": "PITURIE"
    },
    {
      "postCode": "4343",
      "suburb": "PLACID HILLS"
    },
    {
      "postCode": "4355",
      "suburb": "PLAINBY"
    },
    {
      "postCode": "4341",
      "suburb": "PLAINLAND"
    },
    {
      "postCode": "4741",
      "suburb": "PLEYSTOWE"
    },
    {
      "postCode": "4702",
      "suburb": "PLUM TREE"
    },
    {
      "postCode": "4573",
      "suburb": "POINT ARKWRIGHT"
    },
    {
      "postCode": "4183",
      "suburb": "POINT LOOKOUT"
    },
    {
      "postCode": "4655",
      "suburb": "POINT VERNON"
    },
    {
      "postCode": "4568",
      "suburb": "POMONA"
    },
    {
      "postCode": "4454",
      "suburb": "PONY HILLS"
    },
    {
      "postCode": "4650",
      "suburb": "POONA"
    },
    {
      "postCode": "4821",
      "suburb": "PORCUPINE"
    },
    {
      "postCode": "4892",
      "suburb": "PORMPURAAW"
    },
    {
      "postCode": "4699",
      "suburb": "PORT ALMA"
    },
    {
      "postCode": "4700",
      "suburb": "PORT CURTIS"
    },
    {
      "postCode": "4877",
      "suburb": "PORT DOUGLAS"
    },
    {
      "postCode": "4178",
      "suburb": "PORT OF BRISBANE"
    },
    {
      "postCode": "4871",
      "suburb": "PORTLAND ROADS"
    },
    {
      "postCode": "4870",
      "suburb": "PORTSMITH"
    },
    {
      "postCode": "4875",
      "suburb": "PORUMA ISLAND"
    },
    {
      "postCode": "4352",
      "suburb": "POSTMANS RIDGE"
    },
    {
      "postCode": "4352",
      "suburb": "POZIERES"
    },
    {
      "postCode": "4821",
      "suburb": "PRAIRIE"
    },
    {
      "postCode": "4370",
      "suburb": "PRATTEN"
    },
    {
      "postCode": "4650",
      "suburb": "PRAWLE"
    },
    {
      "postCode": "4311",
      "suburb": "PRENZLAU"
    },
    {
      "postCode": "4352",
      "suburb": "PRESTON"
    },
    {
      "postCode": "4800",
      "suburb": "PRESTON"
    },
    {
      "postCode": "4127",
      "suburb": "PRIESTDALE"
    },
    {
      "postCode": "4350",
      "suburb": "PRINCE HENRY HEIGHTS"
    },
    {
      "postCode": "4875",
      "suburb": "PRINCE OF WALES"
    },
    {
      "postCode": "4660",
      "suburb": "PROMISEDLAND"
    },
    {
      "postCode": "4800",
      "suburb": "PROSERPINE"
    },
    {
      "postCode": "4715",
      "suburb": "PROSPECT"
    },
    {
      "postCode": "4613",
      "suburb": "PROSTON"
    },
    {
      "postCode": "4069",
      "suburb": "PULLENVALE"
    },
    {
      "postCode": "4357",
      "suburb": "PUNCHS CREEK"
    },
    {
      "postCode": "4876",
      "suburb": "PUNSAND"
    },
    {
      "postCode": "4306",
      "suburb": "PURGA"
    },
    {
      "postCode": "4356",
      "suburb": "PURRAWUNDA"
    },
    {
      "postCode": "4218",
      "suburb": "Q SUPERCENTRE"
    },
    {
      "postCode": "4820",
      "suburb": "QUEENTON"
    },
    {
      "postCode": "4724",
      "suburb": "QUETTA"
    },
    {
      "postCode": "4480",
      "suburb": "QUILPIE"
    },
    {
      "postCode": "4403",
      "suburb": "QUINALOW"
    },
    {
      "postCode": "4670",
      "suburb": "QUNABA"
    },
    {
      "postCode": "4740",
      "suburb": "RACECOURSE"
    },
    {
      "postCode": "4305",
      "suburb": "RACEVIEW"
    },
    {
      "postCode": "4307",
      "suburb": "RADFORD"
    },
    {
      "postCode": "4697",
      "suburb": "RAGLAN"
    },
    {
      "postCode": "4810",
      "suburb": "RAILWAY ESTATE"
    },
    {
      "postCode": "4581",
      "suburb": "RAINBOW BEACH"
    },
    {
      "postCode": "4358",
      "suburb": "RAMSAY"
    },
    {
      "postCode": "4352",
      "suburb": "RANGEMORE"
    },
    {
      "postCode": "4806",
      "suburb": "RANGEMORE"
    },
    {
      "postCode": "4405",
      "suburb": "RANGES BRIDGE"
    },
    {
      "postCode": "4350",
      "suburb": "RANGEVILLE"
    },
    {
      "postCode": "4817",
      "suburb": "RANGEWOOD"
    },
    {
      "postCode": "4154",
      "suburb": "RANSOME"
    },
    {
      "postCode": "4815",
      "suburb": "RASMUSSEN"
    },
    {
      "postCode": "4287",
      "suburb": "RATHDOWNEY"
    },
    {
      "postCode": "4352",
      "suburb": "RAVENSBOURNE"
    },
    {
      "postCode": "4888",
      "suburb": "RAVENSHOE"
    },
    {
      "postCode": "4816",
      "suburb": "RAVENSWOOD"
    },
    {
      "postCode": "4892",
      "suburb": "RAVENSWORTH"
    },
    {
      "postCode": "4630",
      "suburb": "RAWBELLE"
    },
    {
      "postCode": "4059",
      "suburb": "RED HILL"
    },
    {
      "postCode": "4413",
      "suburb": "RED HILL"
    },
    {
      "postCode": "4701",
      "suburb": "RED HILL ROCKHAMPTON"
    },
    {
      "postCode": "4892",
      "suburb": "RED RIVER"
    },
    {
      "postCode": "4301",
      "suburb": "REDBANK"
    },
    {
      "postCode": "4312",
      "suburb": "REDBANK CREEK"
    },
    {
      "postCode": "4301",
      "suburb": "REDBANK PLAINS"
    },
    {
      "postCode": "4020",
      "suburb": "REDCLIFFE"
    },
    {
      "postCode": "4020",
      "suburb": "REDCLIFFE NORTH"
    },
    {
      "postCode": "4467",
      "suburb": "REDFORD"
    },
    {
      "postCode": "4605",
      "suburb": "REDGATE"
    },
    {
      "postCode": "4671",
      "suburb": "REDHILL FARMS"
    },
    {
      "postCode": "4165",
      "suburb": "REDLAND BAY"
    },
    {
      "postCode": "4870",
      "suburb": "REDLYNCH"
    },
    {
      "postCode": "4660",
      "suburb": "REDRIDGE"
    },
    {
      "postCode": "4350",
      "suburb": "REDWOOD"
    },
    {
      "postCode": "4227",
      "suburb": "REEDY CREEK"
    },
    {
      "postCode": "4552",
      "suburb": "REESVILLE"
    },
    {
      "postCode": "4341",
      "suburb": "REGENCY DOWNS"
    },
    {
      "postCode": "4118",
      "suburb": "REGENTS PARK"
    },
    {
      "postCode": "4816",
      "suburb": "REID RIVER"
    },
    {
      "postCode": "4625",
      "suburb": "REIDS CREEK"
    },
    {
      "postCode": "4723",
      "suburb": "RETRO"
    },
    {
      "postCode": "4702",
      "suburb": "REWAN"
    },
    {
      "postCode": "4718",
      "suburb": "RHYDDING"
    },
    {
      "postCode": "4077",
      "suburb": "RICHLANDS"
    },
    {
      "postCode": "4740",
      "suburb": "RICHMOND"
    },
    {
      "postCode": "4822",
      "suburb": "RICHMOND"
    },
    {
      "postCode": "4820",
      "suburb": "RICHMOND HILL"
    },
    {
      "postCode": "4702",
      "suburb": "RIDGELANDS"
    },
    {
      "postCode": "4563",
      "suburb": "RIDGEWOOD"
    },
    {
      "postCode": "4311",
      "suburb": "RIFLE RANGE"
    },
    {
      "postCode": "4565",
      "suburb": "RINGTAIL CREEK"
    },
    {
      "postCode": "4343",
      "suburb": "RINGWOOD"
    },
    {
      "postCode": "4800",
      "suburb": "RIORDANVALE"
    },
    {
      "postCode": "4306",
      "suburb": "RIPLEY"
    },
    {
      "postCode": "4807",
      "suburb": "RITA ISLAND"
    },
    {
      "postCode": "4655",
      "suburb": "RIVER HEADS"
    },
    {
      "postCode": "4680",
      "suburb": "RIVER RANCH"
    },
    {
      "postCode": "4280",
      "suburb": "RIVERBEND"
    },
    {
      "postCode": "4074",
      "suburb": "RIVERHILLS"
    },
    {
      "postCode": "4626",
      "suburb": "RIVERLEIGH"
    },
    {
      "postCode": "4470",
      "suburb": "RIVERSLEIGH"
    },
    {
      "postCode": "4385",
      "suburb": "RIVERTON"
    },
    {
      "postCode": "4303",
      "suburb": "RIVERVIEW"
    },
    {
      "postCode": "4310",
      "suburb": "ROADVALE"
    },
    {
      "postCode": "4109",
      "suburb": "ROBERTSON"
    },
    {
      "postCode": "4226",
      "suburb": "ROBINA"
    },
    {
      "postCode": "4226",
      "suburb": "ROBINA DC"
    },
    {
      "postCode": "4230",
      "suburb": "ROBINA TOWN CENTRE"
    },
    {
      "postCode": "4419",
      "suburb": "ROCHE CREEK"
    },
    {
      "postCode": "4123",
      "suburb": "ROCHEDALE"
    },
    {
      "postCode": "4123",
      "suburb": "ROCHEDALE SOUTH"
    },
    {
      "postCode": "4700",
      "suburb": "ROCKHAMPTON"
    },
    {
      "postCode": "4700",
      "suburb": "ROCKHAMPTON CITY"
    },
    {
      "postCode": "4701",
      "suburb": "ROCKHAMPTON DC"
    },
    {
      "postCode": "4700",
      "suburb": "ROCKHAMPTON HOSPITAL"
    },
    {
      "postCode": "4854",
      "suburb": "ROCKINGHAM"
    },
    {
      "postCode": "4106",
      "suburb": "ROCKLEA"
    },
    {
      "postCode": "4106",
      "suburb": "ROCKLEA DC"
    },
    {
      "postCode": "4344",
      "suburb": "ROCKMOUNT"
    },
    {
      "postCode": "4510",
      "suburb": "ROCKSBERG"
    },
    {
      "postCode": "4343",
      "suburb": "ROCKSIDE"
    },
    {
      "postCode": "4350",
      "suburb": "ROCKVILLE"
    },
    {
      "postCode": "4357",
      "suburb": "ROCKY CREEK"
    },
    {
      "postCode": "4873",
      "suburb": "ROCKY POINT"
    },
    {
      "postCode": "4874",
      "suburb": "ROCKY POINT"
    },
    {
      "postCode": "4701",
      "suburb": "ROCKYVIEW"
    },
    {
      "postCode": "4678",
      "suburb": "RODDS BAY"
    },
    {
      "postCode": "4370",
      "suburb": "RODGERS CREEK"
    },
    {
      "postCode": "4702",
      "suburb": "ROLLESTON"
    },
    {
      "postCode": "4816",
      "suburb": "ROLLINGSTONE"
    },
    {
      "postCode": "4455",
      "suburb": "ROMA"
    },
    {
      "postCode": "4871",
      "suburb": "ROOKWOOD"
    },
    {
      "postCode": "4343",
      "suburb": "ROPELEY"
    },
    {
      "postCode": "4401",
      "suburb": "ROSALIE PLAINS"
    },
    {
      "postCode": "4674",
      "suburb": "ROSEDALE"
    },
    {
      "postCode": "4370",
      "suburb": "ROSEHILL"
    },
    {
      "postCode": "4740",
      "suburb": "ROSELLA"
    },
    {
      "postCode": "4560",
      "suburb": "ROSEMOUNT"
    },
    {
      "postCode": "4811",
      "suburb": "ROSENEATH"
    },
    {
      "postCode": "4370",
      "suburb": "ROSENTHAL HEIGHTS"
    },
    {
      "postCode": "4340",
      "suburb": "ROSEVALE"
    },
    {
      "postCode": "4340",
      "suburb": "ROSEWOOD"
    },
    {
      "postCode": "4570",
      "suburb": "ROSS CREEK"
    },
    {
      "postCode": "4816",
      "suburb": "ROSS RIVER"
    },
    {
      "postCode": "4812",
      "suburb": "ROSSLEA"
    },
    {
      "postCode": "4703",
      "suburb": "ROSSLYN"
    },
    {
      "postCode": "4702",
      "suburb": "ROSSMOYA"
    },
    {
      "postCode": "4356",
      "suburb": "ROSSVALE"
    },
    {
      "postCode": "4895",
      "suburb": "ROSSVILLE"
    },
    {
      "postCode": "4022",
      "suburb": "ROTHWELL"
    },
    {
      "postCode": "4677",
      "suburb": "ROUND HILL"
    },
    {
      "postCode": "4718",
      "suburb": "ROUNDSTONE"
    },
    {
      "postCode": "4810",
      "suburb": "ROWES BAY"
    },
    {
      "postCode": "4029",
      "suburb": "ROYAL BRISBANE HOSPITAL"
    },
    {
      "postCode": "4515",
      "suburb": "ROYSTON"
    },
    {
      "postCode": "4670",
      "suburb": "RUBYANNA"
    },
    {
      "postCode": "4702",
      "suburb": "RUBYVALE"
    },
    {
      "postCode": "4674",
      "suburb": "RULES BEACH"
    },
    {
      "postCode": "4216",
      "suburb": "RUNAWAY BAY"
    },
    {
      "postCode": "4113",
      "suburb": "RUNCORN"
    },
    {
      "postCode": "4849",
      "suburb": "RUNGOO"
    },
    {
      "postCode": "4287",
      "suburb": "RUNNING CREEK"
    },
    {
      "postCode": "4615",
      "suburb": "RUNNYMEDE"
    },
    {
      "postCode": "4740",
      "suburb": "RURAL VIEW"
    },
    {
      "postCode": "4521",
      "suburb": "RUSH CREEK"
    },
    {
      "postCode": "4184",
      "suburb": "RUSSELL ISLAND"
    },
    {
      "postCode": "4825",
      "suburb": "RYAN"
    },
    {
      "postCode": "4361",
      "suburb": "RYEFORD"
    },
    {
      "postCode": "4413",
      "suburb": "RYWUNG"
    },
    {
      "postCode": "4401",
      "suburb": "SABINE"
    },
    {
      "postCode": "4305",
      "suburb": "SADLIERS CROSSING"
    },
    {
      "postCode": "4875",
      "suburb": "SAIBAI ISLAND"
    },
    {
      "postCode": "4107",
      "suburb": "SALISBURY"
    },
    {
      "postCode": "4107",
      "suburb": "SALISBURY EAST"
    },
    {
      "postCode": "4520",
      "suburb": "SAMFORD"
    },
    {
      "postCode": "4520",
      "suburb": "SAMFORD VALLEY"
    },
    {
      "postCode": "4520",
      "suburb": "SAMFORD VILLAGE"
    },
    {
      "postCode": "4520",
      "suburb": "SAMSONVALE"
    },
    {
      "postCode": "4212",
      "suburb": "SANCTUARY COVE"
    },
    {
      "postCode": "4017",
      "suburb": "SANDGATE"
    },
    {
      "postCode": "4017",
      "suburb": "SANDGATE DC"
    },
    {
      "postCode": "4740",
      "suburb": "SANDIFORD"
    },
    {
      "postCode": "4701",
      "suburb": "SANDRINGHAM"
    },
    {
      "postCode": "4511",
      "suburb": "SANDSTONE POINT"
    },
    {
      "postCode": "4361",
      "suburb": "SANDY CAMP"
    },
    {
      "postCode": "4515",
      "suburb": "SANDY CREEK"
    },
    {
      "postCode": "4871",
      "suburb": "SANDY POCKET"
    },
    {
      "postCode": "4615",
      "suburb": "SANDY RIDGES"
    },
    {
      "postCode": "4702",
      "suburb": "SAPPHIRE CENTRAL"
    },
    {
      "postCode": "4275",
      "suburb": "SARABAH"
    },
    {
      "postCode": "4737",
      "suburb": "SARINA"
    },
    {
      "postCode": "4737",
      "suburb": "SARINA BEACH"
    },
    {
      "postCode": "4737",
      "suburb": "SARINA RANGE"
    },
    {
      "postCode": "4818",
      "suburb": "SAUNDERS BEACH"
    },
    {
      "postCode": "4816",
      "suburb": "SAVANNAH"
    },
    {
      "postCode": "4822",
      "suburb": "SAXBY"
    },
    {
      "postCode": "4020",
      "suburb": "SCARBOROUGH"
    },
    {
      "postCode": "4655",
      "suburb": "SCARNESS"
    },
    {
      "postCode": "4570",
      "suburb": "SCOTCHY POCKET"
    },
    {
      "postCode": "4804",
      "suburb": "SCOTTVILLE"
    },
    {
      "postCode": "4313",
      "suburb": "SCRUB CREEK"
    },
    {
      "postCode": "4478",
      "suburb": "SCRUBBY CREEK"
    },
    {
      "postCode": "4570",
      "suburb": "SCRUBBY CREEK"
    },
    {
      "postCode": "4356",
      "suburb": "SCRUBBY MOUNTAIN"
    },
    {
      "postCode": "4741",
      "suburb": "SEAFORTH"
    },
    {
      "postCode": "4876",
      "suburb": "SEISIA"
    },
    {
      "postCode": "4630",
      "suburb": "SELENE"
    },
    {
      "postCode": "4816",
      "suburb": "SELLHEIM"
    },
    {
      "postCode": "4824",
      "suburb": "SELWYN"
    },
    {
      "postCode": "4754",
      "suburb": "SEPTIMUS"
    },
    {
      "postCode": "4170",
      "suburb": "SEVEN HILLS"
    },
    {
      "postCode": "4344",
      "suburb": "SEVENTEEN MILE"
    },
    {
      "postCode": "4073",
      "suburb": "SEVENTEEN MILE ROCKS"
    },
    {
      "postCode": "4677",
      "suburb": "SEVENTEEN SEVENTY"
    },
    {
      "postCode": "4820",
      "suburb": "SEVENTY MILE"
    },
    {
      "postCode": "4380",
      "suburb": "SEVERNLEA"
    },
    {
      "postCode": "4570",
      "suburb": "SEXTON"
    },
    {
      "postCode": "4128",
      "suburb": "SHAILER PARK"
    },
    {
      "postCode": "4873",
      "suburb": "SHANNONVALE"
    },
    {
      "postCode": "4670",
      "suburb": "SHARON"
    },
    {
      "postCode": "4818",
      "suburb": "SHAW"
    },
    {
      "postCode": "4515",
      "suburb": "SHEEP STATION CREEK"
    },
    {
      "postCode": "4874",
      "suburb": "SHELBURNE"
    },
    {
      "postCode": "4157",
      "suburb": "SHELDON"
    },
    {
      "postCode": "4855",
      "suburb": "SHELL POCKET"
    },
    {
      "postCode": "4551",
      "suburb": "SHELLY BEACH"
    },
    {
      "postCode": "4810",
      "suburb": "SHELLY BEACH"
    },
    {
      "postCode": "4075",
      "suburb": "SHERWOOD"
    },
    {
      "postCode": "4809",
      "suburb": "SHIRBOURNE"
    },
    {
      "postCode": "4750",
      "suburb": "SHOAL POINT"
    },
    {
      "postCode": "4702",
      "suburb": "SHOALWATER"
    },
    {
      "postCode": "4017",
      "suburb": "SHORNCLIFFE"
    },
    {
      "postCode": "4802",
      "suburb": "SHUTE HARBOUR"
    },
    {
      "postCode": "4304",
      "suburb": "SILKSTONE"
    },
    {
      "postCode": "4856",
      "suburb": "SILKWOOD"
    },
    {
      "postCode": "4854",
      "suburb": "SILKY OAK"
    },
    {
      "postCode": "4800",
      "suburb": "SILVER CREEK"
    },
    {
      "postCode": "4352",
      "suburb": "SILVER RIDGE"
    },
    {
      "postCode": "4385",
      "suburb": "SILVER SPUR"
    },
    {
      "postCode": "4872",
      "suburb": "SILVER VALLEY"
    },
    {
      "postCode": "4124",
      "suburb": "SILVERBARK RIDGE"
    },
    {
      "postCode": "4307",
      "suburb": "SILVERDALE"
    },
    {
      "postCode": "4605",
      "suburb": "SILVERLEAF"
    },
    {
      "postCode": "4401",
      "suburb": "SILVERLEIGH"
    },
    {
      "postCode": "4370",
      "suburb": "SILVERWOOD"
    },
    {
      "postCode": "4454",
      "suburb": "SIMMIE"
    },
    {
      "postCode": "4073",
      "suburb": "SINNAMON PARK"
    },
    {
      "postCode": "4556",
      "suburb": "SIPPY DOWNS"
    },
    {
      "postCode": "4671",
      "suburb": "SKYRING RESERVE"
    },
    {
      "postCode": "4127",
      "suburb": "SLACKS CREEK"
    },
    {
      "postCode": "4740",
      "suburb": "SLADE POINT"
    },
    {
      "postCode": "4370",
      "suburb": "SLADEVALE"
    },
    {
      "postCode": "4878",
      "suburb": "SMITHFIELD"
    },
    {
      "postCode": "4385",
      "suburb": "SMITHLEA"
    },
    {
      "postCode": "4825",
      "suburb": "SOLDIERS HILL"
    },
    {
      "postCode": "4876",
      "suburb": "SOMERSET"
    },
    {
      "postCode": "4312",
      "suburb": "SOMERSET DAM"
    },
    {
      "postCode": "4470",
      "suburb": "SOMMARIVA"
    },
    {
      "postCode": "4382",
      "suburb": "SOMME"
    },
    {
      "postCode": "4670",
      "suburb": "SOUTH BINGERA"
    },
    {
      "postCode": "4101",
      "suburb": "SOUTH BRISBANE"
    },
    {
      "postCode": "4101",
      "suburb": "SOUTH BRISBANE BC"
    },
    {
      "postCode": "4615",
      "suburb": "SOUTH EAST NANANGO"
    },
    {
      "postCode": "4680",
      "suburb": "SOUTH END"
    },
    {
      "postCode": "4680",
      "suburb": "SOUTH GLADSTONE"
    },
    {
      "postCode": "4860",
      "suburb": "SOUTH INNISFAIL"
    },
    {
      "postCode": "4660",
      "suburb": "SOUTH ISIS"
    },
    {
      "postCode": "4859",
      "suburb": "SOUTH JOHNSTONE"
    },
    {
      "postCode": "4670",
      "suburb": "SOUTH KOLAN"
    },
    {
      "postCode": "4740",
      "suburb": "SOUTH MACKAY"
    },
    {
      "postCode": "4280",
      "suburb": "SOUTH MACLEAN"
    },
    {
      "postCode": "4852",
      "suburb": "SOUTH MISSION BEACH"
    },
    {
      "postCode": "4615",
      "suburb": "SOUTH NANANGO"
    },
    {
      "postCode": "4306",
      "suburb": "SOUTH RIPLEY"
    },
    {
      "postCode": "4216",
      "suburb": "SOUTH STRADBROKE"
    },
    {
      "postCode": "4496",
      "suburb": "SOUTH TALWOOD"
    },
    {
      "postCode": "4350",
      "suburb": "SOUTH TOOWOOMBA"
    },
    {
      "postCode": "4810",
      "suburb": "SOUTH TOWNSVILLE"
    },
    {
      "postCode": "4680",
      "suburb": "SOUTH TREES"
    },
    {
      "postCode": "4892",
      "suburb": "SOUTH WELLESLEY ISLANDS"
    },
    {
      "postCode": "4702",
      "suburb": "SOUTH YAAMBA"
    },
    {
      "postCode": "4363",
      "suburb": "SOUTHBROOK"
    },
    {
      "postCode": "4871",
      "suburb": "SOUTHEDGE"
    },
    {
      "postCode": "4820",
      "suburb": "SOUTHERN CROSS"
    },
    {
      "postCode": "4211",
      "suburb": "SOUTHERN LAMINGTON"
    },
    {
      "postCode": "4215",
      "suburb": "SOUTHPORT"
    },
    {
      "postCode": "4215",
      "suburb": "SOUTHPORT BC"
    },
    {
      "postCode": "4215",
      "suburb": "SOUTHPORT PARK"
    },
    {
      "postCode": "4570",
      "suburb": "SOUTHSIDE"
    },
    {
      "postCode": "4406",
      "suburb": "SOUTHWOOD"
    },
    {
      "postCode": "4613",
      "suburb": "SPEEDWELL"
    },
    {
      "postCode": "4881",
      "suburb": "SPEEWAH"
    },
    {
      "postCode": "4630",
      "suburb": "SPLINTER CREEK"
    },
    {
      "postCode": "4306",
      "suburb": "SPLIT YARD CREEK"
    },
    {
      "postCode": "4825",
      "suburb": "SPREADBOROUGH"
    },
    {
      "postCode": "4352",
      "suburb": "SPRING BLUFF"
    },
    {
      "postCode": "4343",
      "suburb": "SPRING CREEK"
    },
    {
      "postCode": "4361",
      "suburb": "SPRING CREEK"
    },
    {
      "postCode": "4420",
      "suburb": "SPRING CREEK"
    },
    {
      "postCode": "4000",
      "suburb": "SPRING HILL"
    },
    {
      "postCode": "4004",
      "suburb": "SPRING HILL"
    },
    {
      "postCode": "4300",
      "suburb": "SPRING MOUNTAIN"
    },
    {
      "postCode": "4213",
      "suburb": "SPRINGBROOK"
    },
    {
      "postCode": "4380",
      "suburb": "SPRINGDALE"
    },
    {
      "postCode": "4300",
      "suburb": "SPRINGFIELD"
    },
    {
      "postCode": "4871",
      "suburb": "SPRINGFIELD"
    },
    {
      "postCode": "4300",
      "suburb": "SPRINGFIELD CENTRAL"
    },
    {
      "postCode": "4300",
      "suburb": "SPRINGFIELD LAKES"
    },
    {
      "postCode": "4804",
      "suburb": "SPRINGLANDS"
    },
    {
      "postCode": "4356",
      "suburb": "SPRINGSIDE"
    },
    {
      "postCode": "4722",
      "suburb": "SPRINGSURE"
    },
    {
      "postCode": "4405",
      "suburb": "SPRINGVALE"
    },
    {
      "postCode": "4127",
      "suburb": "SPRINGWOOD"
    },
    {
      "postCode": "4873",
      "suburb": "SPURGEON"
    },
    {
      "postCode": "4671",
      "suburb": "ST AGNES"
    },
    {
      "postCode": "4352",
      "suburb": "ST AUBYN"
    },
    {
      "postCode": "4487",
      "suburb": "ST GEORGE"
    },
    {
      "postCode": "4356",
      "suburb": "ST HELENS"
    },
    {
      "postCode": "4650",
      "suburb": "ST HELENS"
    },
    {
      "postCode": "4798",
      "suburb": "ST HELENS BEACH"
    },
    {
      "postCode": "4671",
      "suburb": "ST KILDA"
    },
    {
      "postCode": "4707",
      "suburb": "ST LAWRENCE"
    },
    {
      "postCode": "4067",
      "suburb": "ST LUCIA"
    },
    {
      "postCode": "4067",
      "suburb": "ST LUCIA SOUTH"
    },
    {
      "postCode": "4650",
      "suburb": "ST MARY"
    },
    {
      "postCode": "4405",
      "suburb": "ST RUTH"
    },
    {
      "postCode": "4892",
      "suburb": "STAATEN"
    },
    {
      "postCode": "4053",
      "suburb": "STAFFORD"
    },
    {
      "postCode": "4053",
      "suburb": "STAFFORD DC"
    },
    {
      "postCode": "4053",
      "suburb": "STAFFORD HEIGHTS"
    },
    {
      "postCode": "4613",
      "suburb": "STALWORTH"
    },
    {
      "postCode": "4821",
      "suburb": "STAMFORD"
    },
    {
      "postCode": "4702",
      "suburb": "STANAGE"
    },
    {
      "postCode": "4514",
      "suburb": "STANMORE"
    },
    {
      "postCode": "4380",
      "suburb": "STANTHORPE"
    },
    {
      "postCode": "4702",
      "suburb": "STANWELL"
    },
    {
      "postCode": "4207",
      "suburb": "STAPYLTON"
    },
    {
      "postCode": "4895",
      "suburb": "STARCKE"
    },
    {
      "postCode": "4207",
      "suburb": "STEIGLITZ"
    },
    {
      "postCode": "4875",
      "suburb": "STEPHENS ISLAND"
    },
    {
      "postCode": "4873",
      "suburb": "STEWART CREEK VALLEY"
    },
    {
      "postCode": "4702",
      "suburb": "STEWARTON"
    },
    {
      "postCode": "4625",
      "suburb": "STOCKHAVEN"
    },
    {
      "postCode": "4280",
      "suburb": "STOCKLEIGH"
    },
    {
      "postCode": "4871",
      "suburb": "STOCKTON"
    },
    {
      "postCode": "4344",
      "suburb": "STOCKYARD"
    },
    {
      "postCode": "4703",
      "suburb": "STOCKYARD"
    },
    {
      "postCode": "4823",
      "suburb": "STOKES"
    },
    {
      "postCode": "4357",
      "suburb": "STONEHENGE"
    },
    {
      "postCode": "4730",
      "suburb": "STONEHENGE"
    },
    {
      "postCode": "4612",
      "suburb": "STONELANDS"
    },
    {
      "postCode": "4356",
      "suburb": "STONELEIGH"
    },
    {
      "postCode": "4120",
      "suburb": "STONES CORNER"
    },
    {
      "postCode": "4514",
      "suburb": "STONY CREEK"
    },
    {
      "postCode": "4380",
      "suburb": "STORM KING"
    },
    {
      "postCode": "4860",
      "suburb": "STOTERS HILL"
    },
    {
      "postCode": "4870",
      "suburb": "STRATFORD"
    },
    {
      "postCode": "4800",
      "suburb": "STRATHDICKIE"
    },
    {
      "postCode": "4742",
      "suburb": "STRATHFIELD"
    },
    {
      "postCode": "4871",
      "suburb": "STRATHMORE"
    },
    {
      "postCode": "4500",
      "suburb": "STRATHPINE"
    },
    {
      "postCode": "4500",
      "suburb": "STRATHPINE CENTRE"
    },
    {
      "postCode": "4116",
      "suburb": "STRETTON"
    },
    {
      "postCode": "4714",
      "suburb": "STRUCK OIL"
    },
    {
      "postCode": "4811",
      "suburb": "STUART"
    },
    {
      "postCode": "4829",
      "suburb": "STURT"
    },
    {
      "postCode": "4380",
      "suburb": "SUGARLOAF"
    },
    {
      "postCode": "4800",
      "suburb": "SUGARLOAF"
    },
    {
      "postCode": "4413",
      "suburb": "SUJEEWONG"
    },
    {
      "postCode": "4341",
      "suburb": "SUMMERHOLM"
    },
    {
      "postCode": "4074",
      "suburb": "SUMNER"
    },
    {
      "postCode": "4074",
      "suburb": "SUMNER PARK BC"
    },
    {
      "postCode": "4680",
      "suburb": "SUN VALLEY"
    },
    {
      "postCode": "4382",
      "suburb": "SUNDOWN"
    },
    {
      "postCode": "4860",
      "suburb": "SUNDOWN"
    },
    {
      "postCode": "4605",
      "suburb": "SUNNY NOOK"
    },
    {
      "postCode": "4109",
      "suburb": "SUNNYBANK"
    },
    {
      "postCode": "4109",
      "suburb": "SUNNYBANK HILLS"
    },
    {
      "postCode": "4109",
      "suburb": "SUNNYBANK SOUTH"
    },
    {
      "postCode": "4737",
      "suburb": "SUNNYSIDE"
    },
    {
      "postCode": "4567",
      "suburb": "SUNRISE BEACH"
    },
    {
      "postCode": "4825",
      "suburb": "SUNSET"
    },
    {
      "postCode": "4655",
      "suburb": "SUNSHINE ACRES"
    },
    {
      "postCode": "4567",
      "suburb": "SUNSHINE BEACH"
    },
    {
      "postCode": "4560",
      "suburb": "SUNSHINE COAST MC"
    },
    {
      "postCode": "4558",
      "suburb": "SUNSHINE PLAZA"
    },
    {
      "postCode": "4417",
      "suburb": "SURAT"
    },
    {
      "postCode": "4217",
      "suburb": "SURFERS PARADISE"
    },
    {
      "postCode": "4655",
      "suburb": "SUSAN RIVER"
    },
    {
      "postCode": "4743",
      "suburb": "SUTTOR"
    },
    {
      "postCode": "4670",
      "suburb": "SVENSSON HEIGHTS"
    },
    {
      "postCode": "4370",
      "suburb": "SWAN CREEK"
    },
    {
      "postCode": "4306",
      "suburb": "SWANBANK"
    },
    {
      "postCode": "4371",
      "suburb": "SWANFELS"
    },
    {
      "postCode": "4807",
      "suburb": "SWANS LAGOON"
    },
    {
      "postCode": "4873",
      "suburb": "SYNDICATE"
    },
    {
      "postCode": "4610",
      "suburb": "TAABINGA"
    },
    {
      "postCode": "4605",
      "suburb": "TABLELANDS"
    },
    {
      "postCode": "4680",
      "suburb": "TABLELANDS"
    },
    {
      "postCode": "4285",
      "suburb": "TABOOBA"
    },
    {
      "postCode": "4285",
      "suburb": "TABRAGALBA"
    },
    {
      "postCode": "4018",
      "suburb": "TAIGUM"
    },
    {
      "postCode": "4671",
      "suburb": "TAKILBERAN"
    },
    {
      "postCode": "4655",
      "suburb": "TAKURA"
    },
    {
      "postCode": "4871",
      "suburb": "TALAROO"
    },
    {
      "postCode": "4823",
      "suburb": "TALDORA"
    },
    {
      "postCode": "4650",
      "suburb": "TALEGALLA WEIR"
    },
    {
      "postCode": "4362",
      "suburb": "TALGAI"
    },
    {
      "postCode": "4213",
      "suburb": "TALLAI"
    },
    {
      "postCode": "4228",
      "suburb": "TALLEBUDGERA"
    },
    {
      "postCode": "4228",
      "suburb": "TALLEBUDGERA VALLEY"
    },
    {
      "postCode": "4340",
      "suburb": "TALLEGALLA"
    },
    {
      "postCode": "4496",
      "suburb": "TALWOOD"
    },
    {
      "postCode": "4852",
      "suburb": "TAM O'SHANTER"
    },
    {
      "postCode": "4570",
      "suburb": "TAMAREE"
    },
    {
      "postCode": "4478",
      "suburb": "TAMBO"
    },
    {
      "postCode": "4270",
      "suburb": "TAMBORINE"
    },
    {
      "postCode": "4272",
      "suburb": "TAMBORINE MOUNTAIN"
    },
    {
      "postCode": "4285",
      "suburb": "TAMROOKUM"
    },
    {
      "postCode": "4285",
      "suburb": "TAMROOKUM CREEK"
    },
    {
      "postCode": "4128",
      "suburb": "TANAH MERAH"
    },
    {
      "postCode": "4556",
      "suburb": "TANAWHA"
    },
    {
      "postCode": "4481",
      "suburb": "TANBAR"
    },
    {
      "postCode": "4703",
      "suburb": "TANBY"
    },
    {
      "postCode": "4650",
      "suburb": "TANDORA"
    },
    {
      "postCode": "4570",
      "suburb": "TANDUR"
    },
    {
      "postCode": "4025",
      "suburb": "TANGALOOMA"
    },
    {
      "postCode": "4821",
      "suburb": "TANGORIN"
    },
    {
      "postCode": "4680",
      "suburb": "TANNUM SANDS"
    },
    {
      "postCode": "4372",
      "suburb": "TANNYMOREL"
    },
    {
      "postCode": "4601",
      "suburb": "TANSEY"
    },
    {
      "postCode": "4421",
      "suburb": "TARA"
    },
    {
      "postCode": "4680",
      "suburb": "TARAGOOLA"
    },
    {
      "postCode": "4311",
      "suburb": "TARAMPA"
    },
    {
      "postCode": "4703",
      "suburb": "TARANGANBA"
    },
    {
      "postCode": "4494",
      "suburb": "TARAWERA"
    },
    {
      "postCode": "4694",
      "suburb": "TARGINNIE"
    },
    {
      "postCode": "4068",
      "suburb": "TARINGA"
    },
    {
      "postCode": "4309",
      "suburb": "TAROME"
    },
    {
      "postCode": "4314",
      "suburb": "TAROMEO"
    },
    {
      "postCode": "4615",
      "suburb": "TARONG"
    },
    {
      "postCode": "4420",
      "suburb": "TAROOM"
    },
    {
      "postCode": "4703",
      "suburb": "TAROOMBALL"
    },
    {
      "postCode": "4121",
      "suburb": "TARRAGINDI"
    },
    {
      "postCode": "4702",
      "suburb": "TARRAMBA"
    },
    {
      "postCode": "4885",
      "suburb": "TARZALI"
    },
    {
      "postCode": "4674",
      "suburb": "TAUNTON"
    },
    {
      "postCode": "4850",
      "suburb": "TAYLORS BEACH"
    },
    {
      "postCode": "4740",
      "suburb": "TE KOWAI"
    },
    {
      "postCode": "4650",
      "suburb": "TEDDINGTON"
    },
    {
      "postCode": "4620",
      "suburb": "TEEBAR"
    },
    {
      "postCode": "4314",
      "suburb": "TEELAH"
    },
    {
      "postCode": "4423",
      "suburb": "TEELBA"
    },
    {
      "postCode": "4680",
      "suburb": "TELINA"
    },
    {
      "postCode": "4630",
      "suburb": "TELLEBANG"
    },
    {
      "postCode": "4310",
      "suburb": "TEMPLIN"
    },
    {
      "postCode": "4005",
      "suburb": "TENERIFFE"
    },
    {
      "postCode": "4105",
      "suburb": "TENNYSON"
    },
    {
      "postCode": "4387",
      "suburb": "TERRICA"
    },
    {
      "postCode": "4309",
      "suburb": "TEVIOTVILLE"
    },
    {
      "postCode": "4565",
      "suburb": "TEWANTIN"
    },
    {
      "postCode": "4385",
      "suburb": "TEXAS"
    },
    {
      "postCode": "4670",
      "suburb": "THABEBAN"
    },
    {
      "postCode": "4306",
      "suburb": "THAGOONA"
    },
    {
      "postCode": "4497",
      "suburb": "THALLON"
    },
    {
      "postCode": "4370",
      "suburb": "THANE"
    },
    {
      "postCode": "4370",
      "suburb": "THANES CREEK"
    },
    {
      "postCode": "4716",
      "suburb": "THANGOOL"
    },
    {
      "postCode": "4492",
      "suburb": "THARGOMINDAH"
    },
    {
      "postCode": "4340",
      "suburb": "THE BLUFF"
    },
    {
      "postCode": "4355",
      "suburb": "THE BLUFF"
    },
    {
      "postCode": "4702",
      "suburb": "THE CAVES"
    },
    {
      "postCode": "4701",
      "suburb": "THE COMMON"
    },
    {
      "postCode": "4570",
      "suburb": "THE DAWN"
    },
    {
      "postCode": "4650",
      "suburb": "THE DIMONDS"
    },
    {
      "postCode": "4373",
      "suburb": "THE FALLS"
    },
    {
      "postCode": "4061",
      "suburb": "THE GAP"
    },
    {
      "postCode": "4825",
      "suburb": "THE GAP"
    },
    {
      "postCode": "4370",
      "suburb": "THE GLEN"
    },
    {
      "postCode": "4406",
      "suburb": "THE GUMS"
    },
    {
      "postCode": "4373",
      "suburb": "THE HEAD"
    },
    {
      "postCode": "4370",
      "suburb": "THE HERMITAGE"
    },
    {
      "postCode": "4700",
      "suburb": "THE KEPPELS"
    },
    {
      "postCode": "4740",
      "suburb": "THE LEAP"
    },
    {
      "postCode": "4625",
      "suburb": "THE LIMITS"
    },
    {
      "postCode": "4714",
      "suburb": "THE MINE"
    },
    {
      "postCode": "4695",
      "suburb": "THE NARROWS"
    },
    {
      "postCode": "4570",
      "suburb": "THE PALMS"
    },
    {
      "postCode": "4707",
      "suburb": "THE PERCY GROUP"
    },
    {
      "postCode": "4357",
      "suburb": "THE PINES"
    },
    {
      "postCode": "4700",
      "suburb": "THE RANGE"
    },
    {
      "postCode": "4377",
      "suburb": "THE SUMMIT"
    },
    {
      "postCode": "4570",
      "suburb": "THEEBINE"
    },
    {
      "postCode": "4719",
      "suburb": "THEODORE"
    },
    {
      "postCode": "4721",
      "suburb": "THERESA CREEK"
    },
    {
      "postCode": "4650",
      "suburb": "THINOOMBA"
    },
    {
      "postCode": "4702",
      "suburb": "THOMPSON POINT"
    },
    {
      "postCode": "4800",
      "suburb": "THOOPARA"
    },
    {
      "postCode": "4871",
      "suburb": "THORNBOROUGH"
    },
    {
      "postCode": "4380",
      "suburb": "THORNDALE"
    },
    {
      "postCode": "4158",
      "suburb": "THORNESIDE"
    },
    {
      "postCode": "4164",
      "suburb": "THORNLANDS"
    },
    {
      "postCode": "4341",
      "suburb": "THORNTON"
    },
    {
      "postCode": "4873",
      "suburb": "THORNTON BEACH"
    },
    {
      "postCode": "4352",
      "suburb": "THORNVILLE"
    },
    {
      "postCode": "4630",
      "suburb": "THREE MOON"
    },
    {
      "postCode": "4824",
      "suburb": "THREE RIVERS"
    },
    {
      "postCode": "4376",
      "suburb": "THULIMBAH"
    },
    {
      "postCode": "4817",
      "suburb": "THURINGOWA CENTRAL"
    },
    {
      "postCode": "4814",
      "suburb": "THURINGOWA DC"
    },
    {
      "postCode": "4875",
      "suburb": "THURSDAY ISLAND"
    },
    {
      "postCode": "4650",
      "suburb": "TIARO"
    },
    {
      "postCode": "4709",
      "suburb": "TIERI"
    },
    {
      "postCode": "4580",
      "suburb": "TIN CAN BAY"
    },
    {
      "postCode": "4650",
      "suburb": "TINANA"
    },
    {
      "postCode": "4650",
      "suburb": "TINANA SOUTH"
    },
    {
      "postCode": "4872",
      "suburb": "TINAROO"
    },
    {
      "postCode": "4563",
      "suburb": "TINBEERWAH"
    },
    {
      "postCode": "4173",
      "suburb": "TINGALPA"
    },
    {
      "postCode": "4173",
      "suburb": "TINGALPA DC"
    },
    {
      "postCode": "4608",
      "suburb": "TINGOORA"
    },
    {
      "postCode": "4455",
      "suburb": "TINGUN"
    },
    {
      "postCode": "4650",
      "suburb": "TINNANBAR"
    },
    {
      "postCode": "4405",
      "suburb": "TIPTON"
    },
    {
      "postCode": "4671",
      "suburb": "TIRROAN"
    },
    {
      "postCode": "4305",
      "suburb": "TIVOLI"
    },
    {
      "postCode": "4702",
      "suburb": "TOGARA"
    },
    {
      "postCode": "4829",
      "suburb": "TOKO"
    },
    {
      "postCode": "4882",
      "suburb": "TOLGA"
    },
    {
      "postCode": "4820",
      "suburb": "TOLL"
    },
    {
      "postCode": "4850",
      "suburb": "TOOBANNA"
    },
    {
      "postCode": "4498",
      "suburb": "TOOBEAH"
    },
    {
      "postCode": "4313",
      "suburb": "TOOGOOLAWAH"
    },
    {
      "postCode": "4655",
      "suburb": "TOOGOOM"
    },
    {
      "postCode": "4818",
      "suburb": "TOOLAKEA"
    },
    {
      "postCode": "4570",
      "suburb": "TOOLARA FOREST"
    },
    {
      "postCode": "4370",
      "suburb": "TOOLBURRA"
    },
    {
      "postCode": "4680",
      "suburb": "TOOLOOA"
    },
    {
      "postCode": "4012",
      "suburb": "TOOMBUL"
    },
    {
      "postCode": "4816",
      "suburb": "TOOMULLA"
    },
    {
      "postCode": "4625",
      "suburb": "TOONDAHRA"
    },
    {
      "postCode": "4816",
      "suburb": "TOONPAN"
    },
    {
      "postCode": "4510",
      "suburb": "TOORBUL"
    },
    {
      "postCode": "4066",
      "suburb": "TOOWONG"
    },
    {
      "postCode": "4066",
      "suburb": "TOOWONG BC"
    },
    {
      "postCode": "4066",
      "suburb": "TOOWONG DC"
    },
    {
      "postCode": "4350",
      "suburb": "TOOWOOMBA"
    },
    {
      "postCode": "4350",
      "suburb": "TOOWOOMBA CITY"
    },
    {
      "postCode": "4350",
      "suburb": "TOOWOOMBA DC"
    },
    {
      "postCode": "4350",
      "suburb": "TOOWOOMBA EAST"
    },
    {
      "postCode": "4352",
      "suburb": "TOOWOOMBA MC"
    },
    {
      "postCode": "4350",
      "suburb": "TOOWOOMBA SOUTH"
    },
    {
      "postCode": "4350",
      "suburb": "TOOWOOMBA VILLAGE FAIR"
    },
    {
      "postCode": "4350",
      "suburb": "TOOWOOMBA WEST"
    },
    {
      "postCode": "4350",
      "suburb": "TOP CAMP"
    },
    {
      "postCode": "4885",
      "suburb": "TOPAZ"
    },
    {
      "postCode": "4662",
      "suburb": "TORBANLEA"
    },
    {
      "postCode": "4655",
      "suburb": "TORQUAY"
    },
    {
      "postCode": "4816",
      "suburb": "TORRENS CREEK"
    },
    {
      "postCode": "4350",
      "suburb": "TORRINGTON"
    },
    {
      "postCode": "4560",
      "suburb": "TOWEN MOUNTAIN"
    },
    {
      "postCode": "4820",
      "suburb": "TOWERS HILL"
    },
    {
      "postCode": "4810",
      "suburb": "TOWN COMMON"
    },
    {
      "postCode": "4341",
      "suburb": "TOWNSON"
    },
    {
      "postCode": "4810",
      "suburb": "TOWNSVILLE"
    },
    {
      "postCode": "4810",
      "suburb": "TOWNSVILLE CITY"
    },
    {
      "postCode": "4810",
      "suburb": "TOWNSVILLE DC"
    },
    {
      "postCode": "4810",
      "suburb": "TOWNSVILLE MC"
    },
    {
      "postCode": "4813",
      "suburb": "TOWNSVILLE MILPO"
    },
    {
      "postCode": "4825",
      "suburb": "TOWNVIEW"
    },
    {
      "postCode": "4570",
      "suburb": "TRAVESTON"
    },
    {
      "postCode": "4850",
      "suburb": "TREBONNE"
    },
    {
      "postCode": "4370",
      "suburb": "TREGONY"
    },
    {
      "postCode": "4879",
      "suburb": "TRINITY BEACH"
    },
    {
      "postCode": "4879",
      "suburb": "TRINITY PARK"
    },
    {
      "postCode": "4714",
      "suburb": "TROTTER CREEK"
    },
    {
      "postCode": "4874",
      "suburb": "TRUNDING"
    },
    {
      "postCode": "4650",
      "suburb": "TUAN"
    },
    {
      "postCode": "4650",
      "suburb": "TUAN FOREST"
    },
    {
      "postCode": "4570",
      "suburb": "TUCHEKOI"
    },
    {
      "postCode": "4411",
      "suburb": "TUCKERANG"
    },
    {
      "postCode": "4490",
      "suburb": "TUEN"
    },
    {
      "postCode": "4224",
      "suburb": "TUGUN"
    },
    {
      "postCode": "4854",
      "suburb": "TULLY"
    },
    {
      "postCode": "4854",
      "suburb": "TULLY HEADS"
    },
    {
      "postCode": "4352",
      "suburb": "TUMMAVILLE"
    },
    {
      "postCode": "4888",
      "suburb": "TUMOULIN"
    },
    {
      "postCode": "4702",
      "suburb": "TUNGAMULL"
    },
    {
      "postCode": "4357",
      "suburb": "TURALLIN"
    },
    {
      "postCode": "4678",
      "suburb": "TURKEY BEACH"
    },
    {
      "postCode": "4742",
      "suburb": "TURRAWULLA"
    },
    {
      "postCode": "4564",
      "suburb": "TWIN WATERS"
    },
    {
      "postCode": "4570",
      "suburb": "TWO MILE"
    },
    {
      "postCode": "4467",
      "suburb": "TYRCONNEL"
    },
    {
      "postCode": "4680",
      "suburb": "UBOBO"
    },
    {
      "postCode": "4875",
      "suburb": "UGAR ISLAND"
    },
    {
      "postCode": "4702",
      "suburb": "ULOGIE"
    },
    {
      "postCode": "4876",
      "suburb": "UMAGICO"
    },
    {
      "postCode": "4352",
      "suburb": "UMBIRAM"
    },
    {
      "postCode": "4119",
      "suburb": "UNDERWOOD"
    },
    {
      "postCode": "4285",
      "suburb": "UNDULLAH"
    },
    {
      "postCode": "4072",
      "suburb": "UNIVERSITY OF QUEENSLAND"
    },
    {
      "postCode": "4883",
      "suburb": "UPPER BARRON"
    },
    {
      "postCode": "4069",
      "suburb": "UPPER BROOKFIELD"
    },
    {
      "postCode": "4510",
      "suburb": "UPPER CABOOLTURE"
    },
    {
      "postCode": "4209",
      "suburb": "UPPER COOMERA"
    },
    {
      "postCode": "4402",
      "suburb": "UPPER COOYAR CREEK"
    },
    {
      "postCode": "4873",
      "suburb": "UPPER DAINTREE"
    },
    {
      "postCode": "4860",
      "suburb": "UPPER DARADGEE"
    },
    {
      "postCode": "4454",
      "suburb": "UPPER DAWSON"
    },
    {
      "postCode": "4344",
      "suburb": "UPPER FLAGSTONE"
    },
    {
      "postCode": "4370",
      "suburb": "UPPER FREESTONE"
    },
    {
      "postCode": "4570",
      "suburb": "UPPER GLASTONBURY"
    },
    {
      "postCode": "4809",
      "suburb": "UPPER HAUGHTON"
    },
    {
      "postCode": "4570",
      "suburb": "UPPER KANDANGA"
    },
    {
      "postCode": "4055",
      "suburb": "UPPER KEDRON"
    },
    {
      "postCode": "4352",
      "suburb": "UPPER LOCKYER"
    },
    {
      "postCode": "4122",
      "suburb": "UPPER MOUNT GRAVATT"
    },
    {
      "postCode": "4122",
      "suburb": "UPPER MOUNT GRAVATT BC"
    },
    {
      "postCode": "4361",
      "suburb": "UPPER PILTON"
    },
    {
      "postCode": "4355",
      "suburb": "UPPER PINELANDS"
    },
    {
      "postCode": "4850",
      "suburb": "UPPER STONE"
    },
    {
      "postCode": "4343",
      "suburb": "UPPER TENTHILL"
    },
    {
      "postCode": "4477",
      "suburb": "UPPER WARREGO"
    },
    {
      "postCode": "4370",
      "suburb": "UPPER WHEATVALE"
    },
    {
      "postCode": "4614",
      "suburb": "UPPER YARRAMAN"
    },
    {
      "postCode": "4655",
      "suburb": "URANGAN"
    },
    {
      "postCode": "4655",
      "suburb": "URRAWEEN"
    },
    {
      "postCode": "4871",
      "suburb": "UTCHEE CREEK"
    },
    {
      "postCode": "4465",
      "suburb": "V GATE"
    },
    {
      "postCode": "4561",
      "suburb": "VALDORA"
    },
    {
      "postCode": "4352",
      "suburb": "VALE VIEW"
    },
    {
      "postCode": "4715",
      "suburb": "VALENTINE PLAINS"
    },
    {
      "postCode": "4742",
      "suburb": "VALKYRIE"
    },
    {
      "postCode": "4850",
      "suburb": "VALLEY OF LAGOONS"
    },
    {
      "postCode": "4227",
      "suburb": "VARSITY LAKES"
    },
    {
      "postCode": "4860",
      "suburb": "VASA VIEWS"
    },
    {
      "postCode": "4630",
      "suburb": "VENTNOR"
    },
    {
      "postCode": "4347",
      "suburb": "VERADILLA"
    },
    {
      "postCode": "4285",
      "suburb": "VERESDALE"
    },
    {
      "postCode": "4285",
      "suburb": "VERESDALE SCRUB"
    },
    {
      "postCode": "4306",
      "suburb": "VERNOR"
    },
    {
      "postCode": "4562",
      "suburb": "VERRIERDALE"
    },
    {
      "postCode": "4570",
      "suburb": "VETERAN"
    },
    {
      "postCode": "4361",
      "suburb": "VICTORIA HILL"
    },
    {
      "postCode": "4751",
      "suburb": "VICTORIA PLAINS"
    },
    {
      "postCode": "4850",
      "suburb": "VICTORIA PLANTATION"
    },
    {
      "postCode": "4165",
      "suburb": "VICTORIA POINT"
    },
    {
      "postCode": "4165",
      "suburb": "VICTORIA POINT WEST"
    },
    {
      "postCode": "4822",
      "suburb": "VICTORIA VALE"
    },
    {
      "postCode": "4570",
      "suburb": "VICTORY HEIGHTS"
    },
    {
      "postCode": "4514",
      "suburb": "VILLENEUVE"
    },
    {
      "postCode": "4814",
      "suburb": "VINCENT"
    },
    {
      "postCode": "4343",
      "suburb": "VINEGAR HILL"
    },
    {
      "postCode": "4014",
      "suburb": "VIRGINIA"
    },
    {
      "postCode": "4014",
      "suburb": "VIRGINIA BC"
    },
    {
      "postCode": "4014",
      "suburb": "VIRGINIA DC"
    },
    {
      "postCode": "4076",
      "suburb": "WACOL"
    },
    {
      "postCode": "4513",
      "suburb": "WAGTAIL GROVE"
    },
    {
      "postCode": "4625",
      "suburb": "WAHOON"
    },
    {
      "postCode": "4420",
      "suburb": "WAIKOLA"
    },
    {
      "postCode": "4404",
      "suburb": "WAINUI"
    },
    {
      "postCode": "4872",
      "suburb": "WAIRUNA"
    },
    {
      "postCode": "4154",
      "suburb": "WAKERLEY"
    },
    {
      "postCode": "4462",
      "suburb": "WALHALLOW"
    },
    {
      "postCode": "4872",
      "suburb": "WALKAMIN"
    },
    {
      "postCode": "4650",
      "suburb": "WALKERS POINT"
    },
    {
      "postCode": "4751",
      "suburb": "WALKERSTON"
    },
    {
      "postCode": "4670",
      "suburb": "WALKERVALE"
    },
    {
      "postCode": "4310",
      "suburb": "WALLACES CREEK"
    },
    {
      "postCode": "4850",
      "suburb": "WALLAMAN"
    },
    {
      "postCode": "4383",
      "suburb": "WALLANGARRA"
    },
    {
      "postCode": "4702",
      "suburb": "WALLAROO"
    },
    {
      "postCode": "4671",
      "suburb": "WALLAVILLE"
    },
    {
      "postCode": "4655",
      "suburb": "WALLIEBUM"
    },
    {
      "postCode": "4655",
      "suburb": "WALLIGAN"
    },
    {
      "postCode": "4306",
      "suburb": "WALLOON"
    },
    {
      "postCode": "4570",
      "suburb": "WALLU"
    },
    {
      "postCode": "4428",
      "suburb": "WALLUMBILLA"
    },
    {
      "postCode": "4428",
      "suburb": "WALLUMBILLA NORTH"
    },
    {
      "postCode": "4428",
      "suburb": "WALLUMBILLA SOUTH"
    },
    {
      "postCode": "4714",
      "suburb": "WALMUL"
    },
    {
      "postCode": "4854",
      "suburb": "WALTER HILL"
    },
    {
      "postCode": "4856",
      "suburb": "WALTER LEVER ESTATE"
    },
    {
      "postCode": "4714",
      "suburb": "WALTERHALL"
    },
    {
      "postCode": "4512",
      "suburb": "WAMURAN"
    },
    {
      "postCode": "4512",
      "suburb": "WAMURAN BASIN"
    },
    {
      "postCode": "4700",
      "suburb": "WANDAL"
    },
    {
      "postCode": "4419",
      "suburb": "WANDOAN"
    },
    {
      "postCode": "4871",
      "suburb": "WANGAN"
    },
    {
      "postCode": "4806",
      "suburb": "WANGARATTA"
    },
    {
      "postCode": "4877",
      "suburb": "WANGETTI"
    },
    {
      "postCode": "4860",
      "suburb": "WANJURU"
    },
    {
      "postCode": "4306",
      "suburb": "WANORA"
    },
    {
      "postCode": "4513",
      "suburb": "WARABA"
    },
    {
      "postCode": "4575",
      "suburb": "WARANA"
    },
    {
      "postCode": "4823",
      "suburb": "WARBURTON"
    },
    {
      "postCode": "4470",
      "suburb": "WARD"
    },
    {
      "postCode": "4829",
      "suburb": "WARENDA"
    },
    {
      "postCode": "4417",
      "suburb": "WARKON"
    },
    {
      "postCode": "4500",
      "suburb": "WARNER"
    },
    {
      "postCode": "4718",
      "suburb": "WARNOAH"
    },
    {
      "postCode": "4605",
      "suburb": "WARNUNG"
    },
    {
      "postCode": "4411",
      "suburb": "WARRA"
    },
    {
      "postCode": "4875",
      "suburb": "WARRABER ISLET"
    },
    {
      "postCode": "4854",
      "suburb": "WARRAMI"
    },
    {
      "postCode": "4307",
      "suburb": "WARRILL VIEW"
    },
    {
      "postCode": "4387",
      "suburb": "WARROO"
    },
    {
      "postCode": "4871",
      "suburb": "WARRUBULLEN"
    },
    {
      "postCode": "4370",
      "suburb": "WARWICK"
    },
    {
      "postCode": "4370",
      "suburb": "WARWICK DC"
    },
    {
      "postCode": "4306",
      "suburb": "WASHPOOL"
    },
    {
      "postCode": "4670",
      "suburb": "WATALGAN"
    },
    {
      "postCode": "4621",
      "suburb": "WATERANGA"
    },
    {
      "postCode": "4133",
      "suburb": "WATERFORD"
    },
    {
      "postCode": "4133",
      "suburb": "WATERFORD WEST"
    },
    {
      "postCode": "4673",
      "suburb": "WATERLOO"
    },
    {
      "postCode": "4385",
      "suburb": "WATSONS CROSSING"
    },
    {
      "postCode": "4887",
      "suburb": "WATSONVILLE"
    },
    {
      "postCode": "4615",
      "suburb": "WATTLE CAMP"
    },
    {
      "postCode": "4610",
      "suburb": "WATTLE GROVE"
    },
    {
      "postCode": "4357",
      "suburb": "WATTLE RIDGE"
    },
    {
      "postCode": "4704",
      "suburb": "WATTLEBANK"
    },
    {
      "postCode": "4875",
      "suburb": "WAUA ISLET"
    },
    {
      "postCode": "4871",
      "suburb": "WAUGH POCKET"
    },
    {
      "postCode": "4012",
      "suburb": "WAVELL HEIGHTS"
    },
    {
      "postCode": "4012",
      "suburb": "WAVELL HEIGHTS NORTH"
    },
    {
      "postCode": "4825",
      "suburb": "WAVERLEY"
    },
    {
      "postCode": "4722",
      "suburb": "WEALWANDANGIE"
    },
    {
      "postCode": "4860",
      "suburb": "WEBB"
    },
    {
      "postCode": "4497",
      "suburb": "WEENGALLON"
    },
    {
      "postCode": "4703",
      "suburb": "WEERRIBA"
    },
    {
      "postCode": "4874",
      "suburb": "WEIPA"
    },
    {
      "postCode": "4874",
      "suburb": "WEIPA AIRPORT"
    },
    {
      "postCode": "4406",
      "suburb": "WEIR RIVER"
    },
    {
      "postCode": "4670",
      "suburb": "WELCOME CREEK"
    },
    {
      "postCode": "4350",
      "suburb": "WELLCAMP"
    },
    {
      "postCode": "4121",
      "suburb": "WELLERS HILL"
    },
    {
      "postCode": "4417",
      "suburb": "WELLESLEY"
    },
    {
      "postCode": "4892",
      "suburb": "WELLESLEY ISLANDS"
    },
    {
      "postCode": "4160",
      "suburb": "WELLINGTON POINT"
    },
    {
      "postCode": "4507",
      "suburb": "WELSBY"
    },
    {
      "postCode": "4615",
      "suburb": "WENGENVILLE"
    },
    {
      "postCode": "4874",
      "suburb": "WENLOCK"
    },
    {
      "postCode": "4405",
      "suburb": "WERANGA"
    },
    {
      "postCode": "4417",
      "suburb": "WERIBONE"
    },
    {
      "postCode": "4219",
      "suburb": "WEST BURLEIGH"
    },
    {
      "postCode": "4101",
      "suburb": "WEST END"
    },
    {
      "postCode": "4810",
      "suburb": "WEST END"
    },
    {
      "postCode": "4680",
      "suburb": "WEST GLADSTONE"
    },
    {
      "postCode": "4359",
      "suburb": "WEST HALDON"
    },
    {
      "postCode": "4305",
      "suburb": "WEST IPSWICH"
    },
    {
      "postCode": "4740",
      "suburb": "WEST MACKAY"
    },
    {
      "postCode": "4819",
      "suburb": "WEST POINT"
    },
    {
      "postCode": "4403",
      "suburb": "WEST PRAIRIE"
    },
    {
      "postCode": "4700",
      "suburb": "WEST ROCKHAMPTON"
    },
    {
      "postCode": "4680",
      "suburb": "WEST STOWE"
    },
    {
      "postCode": "4892",
      "suburb": "WEST WELLESLEY ISLANDS"
    },
    {
      "postCode": "4559",
      "suburb": "WEST WOOMBYE"
    },
    {
      "postCode": "4350",
      "suburb": "WESTBROOK"
    },
    {
      "postCode": "4870",
      "suburb": "WESTCOURT"
    },
    {
      "postCode": "4357",
      "suburb": "WESTERN CREEK"
    },
    {
      "postCode": "4454",
      "suburb": "WESTGROVE"
    },
    {
      "postCode": "4074",
      "suburb": "WESTLAKE"
    },
    {
      "postCode": "4422",
      "suburb": "WESTMAR"
    },
    {
      "postCode": "4514",
      "suburb": "WESTVALE"
    },
    {
      "postCode": "4702",
      "suburb": "WESTWOOD"
    },
    {
      "postCode": "4625",
      "suburb": "WETHERON"
    },
    {
      "postCode": "4562",
      "suburb": "WEYBA DOWNS"
    },
    {
      "postCode": "4850",
      "suburb": "WHARPS"
    },
    {
      "postCode": "4606",
      "suburb": "WHEATLANDS"
    },
    {
      "postCode": "4370",
      "suburb": "WHEATVALE"
    },
    {
      "postCode": "4387",
      "suburb": "WHETSTONE"
    },
    {
      "postCode": "4352",
      "suburb": "WHICHELLO"
    },
    {
      "postCode": "4352",
      "suburb": "WHITE MOUNTAIN"
    },
    {
      "postCode": "4507",
      "suburb": "WHITE PATCH"
    },
    {
      "postCode": "4306",
      "suburb": "WHITE ROCK"
    },
    {
      "postCode": "4868",
      "suburb": "WHITE ROCK"
    },
    {
      "postCode": "4503",
      "suburb": "WHITESIDE"
    },
    {
      "postCode": "4870",
      "suburb": "WHITFIELD"
    },
    {
      "postCode": "4802",
      "suburb": "WHITSUNDAYS"
    },
    {
      "postCode": "4873",
      "suburb": "WHYANBEEL"
    },
    {
      "postCode": "4570",
      "suburb": "WIDGEE"
    },
    {
      "postCode": "4570",
      "suburb": "WIDGEE CROSSING NORTH"
    },
    {
      "postCode": "4570",
      "suburb": "WIDGEE CROSSING SOUTH"
    },
    {
      "postCode": "4490",
      "suburb": "WIDGEEGOARA"
    },
    {
      "postCode": "4413",
      "suburb": "WIEAMBILLA"
    },
    {
      "postCode": "4520",
      "suburb": "WIGHTS MOUNTAIN"
    },
    {
      "postCode": "4612",
      "suburb": "WIGTON"
    },
    {
      "postCode": "4370",
      "suburb": "WILDASH"
    },
    {
      "postCode": "4608",
      "suburb": "WILKESDALE"
    },
    {
      "postCode": "4110",
      "suburb": "WILLAWONG"
    },
    {
      "postCode": "4209",
      "suburb": "WILLOW VALE"
    },
    {
      "postCode": "4306",
      "suburb": "WILLOWBANK"
    },
    {
      "postCode": "4702",
      "suburb": "WILLOWS"
    },
    {
      "postCode": "4702",
      "suburb": "WILLOWS GEMFIELDS"
    },
    {
      "postCode": "4370",
      "suburb": "WILLOWVALE"
    },
    {
      "postCode": "4829",
      "suburb": "WILLS"
    },
    {
      "postCode": "4800",
      "suburb": "WILSON BEACH"
    },
    {
      "postCode": "4625",
      "suburb": "WILSON VALLEY"
    },
    {
      "postCode": "4307",
      "suburb": "WILSONS PLAINS"
    },
    {
      "postCode": "4570",
      "suburb": "WILSONS POCKET"
    },
    {
      "postCode": "4350",
      "suburb": "WILSONTON"
    },
    {
      "postCode": "4350",
      "suburb": "WILSONTON HEIGHTS"
    },
    {
      "postCode": "4051",
      "suburb": "WILSTON"
    },
    {
      "postCode": "4721",
      "suburb": "WINCHESTER"
    },
    {
      "postCode": "4207",
      "suburb": "WINDAROO"
    },
    {
      "postCode": "4605",
      "suburb": "WINDERA"
    },
    {
      "postCode": "4670",
      "suburb": "WINDERMERE"
    },
    {
      "postCode": "4478",
      "suburb": "WINDEYER"
    },
    {
      "postCode": "4481",
      "suburb": "WINDORAH"
    },
    {
      "postCode": "4030",
      "suburb": "WINDSOR"
    },
    {
      "postCode": "4670",
      "suburb": "WINFIELD"
    },
    {
      "postCode": "4825",
      "suburb": "WINSTON"
    },
    {
      "postCode": "4735",
      "suburb": "WINTON"
    },
    {
      "postCode": "4347",
      "suburb": "WINWILL"
    },
    {
      "postCode": "4515",
      "suburb": "WINYA"
    },
    {
      "postCode": "4122",
      "suburb": "WISHART"
    },
    {
      "postCode": "4352",
      "suburb": "WITHCOTT"
    },
    {
      "postCode": "4275",
      "suburb": "WITHEREN"
    },
    {
      "postCode": "4552",
      "suburb": "WITTA"
    },
    {
      "postCode": "4311",
      "suburb": "WIVENHOE HILL"
    },
    {
      "postCode": "4306",
      "suburb": "WIVENHOE POCKET"
    },
    {
      "postCode": "4370",
      "suburb": "WIYARRA"
    },
    {
      "postCode": "4419",
      "suburb": "WOLEEBEE"
    },
    {
      "postCode": "4721",
      "suburb": "WOLFANG"
    },
    {
      "postCode": "4207",
      "suburb": "WOLFFDENE"
    },
    {
      "postCode": "4570",
      "suburb": "WOLVI"
    },
    {
      "postCode": "4465",
      "suburb": "WOMALILLA"
    },
    {
      "postCode": "4465",
      "suburb": "WOMBLEBANK"
    },
    {
      "postCode": "4370",
      "suburb": "WOMINA"
    },
    {
      "postCode": "4671",
      "suburb": "WONBAH"
    },
    {
      "postCode": "4671",
      "suburb": "WONBAH FOREST"
    },
    {
      "postCode": "4606",
      "suburb": "WONDAI"
    },
    {
      "postCode": "4390",
      "suburb": "WONDALLI"
    },
    {
      "postCode": "4887",
      "suburb": "WONDECLA"
    },
    {
      "postCode": "4655",
      "suburb": "WONDUNNA"
    },
    {
      "postCode": "4873",
      "suburb": "WONGA BEACH"
    },
    {
      "postCode": "4883",
      "suburb": "WONGABEL"
    },
    {
      "postCode": "4852",
      "suburb": "WONGALING BEACH"
    },
    {
      "postCode": "4210",
      "suburb": "WONGAWALLAN"
    },
    {
      "postCode": "4275",
      "suburb": "WONGLEPONG"
    },
    {
      "postCode": "4620",
      "suburb": "WOOCOO"
    },
    {
      "postCode": "4343",
      "suburb": "WOODBINE"
    },
    {
      "postCode": "4703",
      "suburb": "WOODBURY"
    },
    {
      "postCode": "4305",
      "suburb": "WOODEND"
    },
    {
      "postCode": "4680",
      "suburb": "WOODERSON"
    },
    {
      "postCode": "4514",
      "suburb": "WOODFORD"
    },
    {
      "postCode": "4660",
      "suburb": "WOODGATE"
    },
    {
      "postCode": "4285",
      "suburb": "WOODHILL"
    },
    {
      "postCode": "4343",
      "suburb": "WOODLANDS"
    },
    {
      "postCode": "4352",
      "suburb": "WOODLEIGH"
    },
    {
      "postCode": "4625",
      "suburb": "WOODMILLAR"
    },
    {
      "postCode": "4114",
      "suburb": "WOODRIDGE"
    },
    {
      "postCode": "4816",
      "suburb": "WOODSTOCK"
    },
    {
      "postCode": "4802",
      "suburb": "WOODWARK"
    },
    {
      "postCode": "4019",
      "suburb": "WOODY POINT"
    },
    {
      "postCode": "4702",
      "suburb": "WOOLEIN"
    },
    {
      "postCode": "4822",
      "suburb": "WOOLGAR"
    },
    {
      "postCode": "4102",
      "suburb": "WOOLLOONGABBA"
    },
    {
      "postCode": "4515",
      "suburb": "WOOLMAR"
    },
    {
      "postCode": "4352",
      "suburb": "WOOLMER"
    },
    {
      "postCode": "4570",
      "suburb": "WOOLOOGA"
    },
    {
      "postCode": "4310",
      "suburb": "WOOLOOMAN"
    },
    {
      "postCode": "4030",
      "suburb": "WOOLOOWIN"
    },
    {
      "postCode": "4340",
      "suburb": "WOOLSHED"
    },
    {
      "postCode": "4559",
      "suburb": "WOOMBYE"
    },
    {
      "postCode": "4357",
      "suburb": "WOONDUL"
    },
    {
      "postCode": "4570",
      "suburb": "WOONDUM"
    },
    {
      "postCode": "4670",
      "suburb": "WOONGARRA"
    },
    {
      "postCode": "4207",
      "suburb": "WOONGOOLBA"
    },
    {
      "postCode": "4871",
      "suburb": "WOOPEN CREEK"
    },
    {
      "postCode": "4713",
      "suburb": "WOORABINDA"
    },
    {
      "postCode": "4507",
      "suburb": "WOORIM"
    },
    {
      "postCode": "4608",
      "suburb": "WOOROOLIN"
    },
    {
      "postCode": "4702",
      "suburb": "WOOROONA"
    },
    {
      "postCode": "4605",
      "suburb": "WOOROONDEN"
    },
    {
      "postCode": "4860",
      "suburb": "WOOROONOORAN"
    },
    {
      "postCode": "4552",
      "suburb": "WOOTHA"
    },
    {
      "postCode": "4621",
      "suburb": "WOOWOONGA"
    },
    {
      "postCode": "4868",
      "suburb": "WOREE"
    },
    {
      "postCode": "4213",
      "suburb": "WORONGARY"
    },
    {
      "postCode": "4702",
      "suburb": "WOWAN"
    },
    {
      "postCode": "4601",
      "suburb": "WRATTENS FOREST"
    },
    {
      "postCode": "4869",
      "suburb": "WRIGHTS CREEK"
    },
    {
      "postCode": "4892",
      "suburb": "WROTHAM"
    },
    {
      "postCode": "4895",
      "suburb": "WUJAL WUJAL"
    },
    {
      "postCode": "4811",
      "suburb": "WULGURU"
    },
    {
      "postCode": "4305",
      "suburb": "WULKURAKA"
    },
    {
      "postCode": "4806",
      "suburb": "WUNJUNGA"
    },
    {
      "postCode": "4714",
      "suburb": "WURA"
    },
    {
      "postCode": "4680",
      "suburb": "WURDONG HEIGHTS"
    },
    {
      "postCode": "4575",
      "suburb": "WURTULLA"
    },
    {
      "postCode": "4627",
      "suburb": "WURUMA DAM"
    },
    {
      "postCode": "4352",
      "suburb": "WUTUL"
    },
    {
      "postCode": "4390",
      "suburb": "WYAGA"
    },
    {
      "postCode": "4615",
      "suburb": "WYALLA"
    },
    {
      "postCode": "4350",
      "suburb": "WYALLA PLAZA"
    },
    {
      "postCode": "4489",
      "suburb": "WYANDRA"
    },
    {
      "postCode": "4310",
      "suburb": "WYARALONG"
    },
    {
      "postCode": "4382",
      "suburb": "WYBERBA"
    },
    {
      "postCode": "4702",
      "suburb": "WYCARBAH"
    },
    {
      "postCode": "4412",
      "suburb": "WYCHIE"
    },
    {
      "postCode": "4455",
      "suburb": "WYCOMBE"
    },
    {
      "postCode": "4178",
      "suburb": "WYNNUM"
    },
    {
      "postCode": "4178",
      "suburb": "WYNNUM NORTH"
    },
    {
      "postCode": "4178",
      "suburb": "WYNNUM PLAZA"
    },
    {
      "postCode": "4178",
      "suburb": "WYNNUM WEST"
    },
    {
      "postCode": "4352",
      "suburb": "WYREEMA"
    },
    {
      "postCode": "4723",
      "suburb": "WYUNA"
    },
    {
      "postCode": "4704",
      "suburb": "YAAMBA"
    },
    {
      "postCode": "4818",
      "suburb": "YABULU"
    },
    {
      "postCode": "4390",
      "suburb": "YAGABURNE"
    },
    {
      "postCode": "4892",
      "suburb": "YAGOONYA"
    },
    {
      "postCode": "4352",
      "suburb": "YALANGUR"
    },
    {
      "postCode": "4741",
      "suburb": "YALBOROO"
    },
    {
      "postCode": "4875",
      "suburb": "YAM ISLAND"
    },
    {
      "postCode": "4720",
      "suburb": "YAMALA"
    },
    {
      "postCode": "4305",
      "suburb": "YAMANTO"
    },
    {
      "postCode": "4673",
      "suburb": "YANDARAN"
    },
    {
      "postCode": "4478",
      "suburb": "YANDARLO"
    },
    {
      "postCode": "4352",
      "suburb": "YANDILLA"
    },
    {
      "postCode": "4561",
      "suburb": "YANDINA"
    },
    {
      "postCode": "4561",
      "suburb": "YANDINA CREEK"
    },
    {
      "postCode": "4371",
      "suburb": "YANGAN"
    },
    {
      "postCode": "4731",
      "suburb": "YARAKA"
    },
    {
      "postCode": "4401",
      "suburb": "YARGULLEN"
    },
    {
      "postCode": "4573",
      "suburb": "YAROOMBA"
    },
    {
      "postCode": "4871",
      "suburb": "YARRABAH"
    },
    {
      "postCode": "4207",
      "suburb": "YARRABILBA"
    },
    {
      "postCode": "4892",
      "suburb": "YARRADEN"
    },
    {
      "postCode": "4614",
      "suburb": "YARRAMAN"
    },
    {
      "postCode": "4356",
      "suburb": "YARRANLEA"
    },
    {
      "postCode": "4630",
      "suburb": "YARROL"
    },
    {
      "postCode": "4694",
      "suburb": "YARWUN"
    },
    {
      "postCode": "4207",
      "suburb": "YATALA"
    },
    {
      "postCode": "4207",
      "suburb": "YATALA DC"
    },
    {
      "postCode": "4105",
      "suburb": "YEERONGPILLY"
    },
    {
      "postCode": "4388",
      "suburb": "YELARBON"
    },
    {
      "postCode": "4625",
      "suburb": "YENDA"
    },
    {
      "postCode": "4650",
      "suburb": "YENGARIE"
    },
    {
      "postCode": "4703",
      "suburb": "YEPPOON"
    },
    {
      "postCode": "4104",
      "suburb": "YERONGA"
    },
    {
      "postCode": "4650",
      "suburb": "YERRA"
    },
    {
      "postCode": "4313",
      "suburb": "YIMBUN"
    },
    {
      "postCode": "4875",
      "suburb": "YORKE ISLAND"
    },
    {
      "postCode": "4878",
      "suburb": "YORKEYS KNOB"
    },
    {
      "postCode": "4490",
      "suburb": "YOWAH"
    },
    {
      "postCode": "4520",
      "suburb": "YUGAR"
    },
    {
      "postCode": "4416",
      "suburb": "YULABILLA"
    },
    {
      "postCode": "4427",
      "suburb": "YULEBA"
    },
    {
      "postCode": "4427",
      "suburb": "YULEBA NORTH"
    },
    {
      "postCode": "4427",
      "suburb": "YULEBA SOUTH"
    },
    {
      "postCode": "4884",
      "suburb": "YUNGABURRA"
    },
    {
      "postCode": "4850",
      "suburb": "YURUGA"
    },
    {
      "postCode": "4034",
      "suburb": "ZILLMERE"
    },
    {
      "postCode": "4710",
      "suburb": "ZILZIE"
    }
  ];
  constructor() { }
}
