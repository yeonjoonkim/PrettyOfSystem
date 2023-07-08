import { Injectable } from '@angular/core';
import { IPostCodeItem } from 'src/app/interface/global/global.interface';

@Injectable({
  providedIn: 'root'
})
export class NswService {
  public data: IPostCodeItem[] =
  [
    {
      "postCode": "2850",
      "suburb": "AARONS PASS"
    },
    {
      "postCode": "2176",
      "suburb": "ABBOTSBURY"
    },
    {
      "postCode": "2046",
      "suburb": "ABBOTSFORD"
    },
    {
      "postCode": "2795",
      "suburb": "ABERCROMBIE"
    },
    {
      "postCode": "2795",
      "suburb": "ABERCROMBIE RIVER"
    },
    {
      "postCode": "2325",
      "suburb": "ABERDARE"
    },
    {
      "postCode": "2336",
      "suburb": "ABERDEEN"
    },
    {
      "postCode": "2350",
      "suburb": "ABERFOYLE"
    },
    {
      "postCode": "2320",
      "suburb": "ABERGLASSLYN"
    },
    {
      "postCode": "2326",
      "suburb": "ABERMAIN"
    },
    {
      "postCode": "2325",
      "suburb": "ABERNETHY"
    },
    {
      "postCode": "2350",
      "suburb": "ABINGTON"
    },
    {
      "postCode": "2476",
      "suburb": "ACACIA CREEK"
    },
    {
      "postCode": "2763",
      "suburb": "ACACIA GARDENS"
    },
    {
      "postCode": "2629",
      "suburb": "ADAMINABY"
    },
    {
      "postCode": "2289",
      "suburb": "ADAMSTOWN"
    },
    {
      "postCode": "2289",
      "suburb": "ADAMSTOWN HEIGHTS"
    },
    {
      "postCode": "2729",
      "suburb": "ADELONG"
    },
    {
      "postCode": "2727",
      "suburb": "ADJUNGBILLY"
    },
    {
      "postCode": "2474",
      "suburb": "AFTERLEE"
    },
    {
      "postCode": "2753",
      "suburb": "AGNES BANKS"
    },
    {
      "postCode": "2560",
      "suburb": "AIRDS"
    },
    {
      "postCode": "2546",
      "suburb": "AKOLELE"
    },
    {
      "postCode": "2873",
      "suburb": "ALBERT"
    },
    {
      "postCode": "2527",
      "suburb": "ALBION PARK"
    },
    {
      "postCode": "2527",
      "suburb": "ALBION PARK RAIL"
    },
    {
      "postCode": "2640",
      "suburb": "ALBURY"
    },
    {
      "postCode": "2440",
      "suburb": "ALDAVILLA"
    },
    {
      "postCode": "2870",
      "suburb": "ALECTOWN"
    },
    {
      "postCode": "1435",
      "suburb": "ALEXANDRIA"
    },
    {
      "postCode": "2015",
      "suburb": "ALEXANDRIA"
    },
    {
      "postCode": "2234",
      "suburb": "ALFORDS POINT"
    },
    {
      "postCode": "2650",
      "suburb": "ALFREDTOWN"
    },
    {
      "postCode": "2469",
      "suburb": "ALICE"
    },
    {
      "postCode": "2259",
      "suburb": "ALISON"
    },
    {
      "postCode": "2420",
      "suburb": "ALISON"
    },
    {
      "postCode": "2100",
      "suburb": "ALLAMBIE HEIGHTS"
    },
    {
      "postCode": "2320",
      "suburb": "ALLANDALE"
    },
    {
      "postCode": "2218",
      "suburb": "ALLAWAH"
    },
    {
      "postCode": "2671",
      "suburb": "ALLEENA"
    },
    {
      "postCode": "2441",
      "suburb": "ALLGOMERA"
    },
    {
      "postCode": "2425",
      "suburb": "ALLWORTH"
    },
    {
      "postCode": "2311",
      "suburb": "ALLYNBROOK"
    },
    {
      "postCode": "2659",
      "suburb": "ALMA PARK"
    },
    {
      "postCode": "2575",
      "suburb": "ALPINE"
    },
    {
      "postCode": "2477",
      "suburb": "ALSTONVALE"
    },
    {
      "postCode": "2477",
      "suburb": "ALSTONVILLE"
    },
    {
      "postCode": "2460",
      "suburb": "ALUMY CREEK"
    },
    {
      "postCode": "2866",
      "suburb": "AMAROO"
    },
    {
      "postCode": "2560",
      "suburb": "AMBARVALE"
    },
    {
      "postCode": "4380",
      "suburb": "AMOSFIELD"
    },
    {
      "postCode": "2648",
      "suburb": "ANABRANCH NORTH"
    },
    {
      "postCode": "2648",
      "suburb": "ANABRANCH SOUTH"
    },
    {
      "postCode": "2320",
      "suburb": "ANAMBAH"
    },
    {
      "postCode": "2631",
      "suburb": "ANDO"
    },
    {
      "postCode": "2621",
      "suburb": "ANEMBO"
    },
    {
      "postCode": "2550",
      "suburb": "ANGLEDALE"
    },
    {
      "postCode": "2834",
      "suburb": "ANGLEDOOL"
    },
    {
      "postCode": "2629",
      "suburb": "ANGLERS REACH"
    },
    {
      "postCode": "2464",
      "suburb": "ANGOURIE"
    },
    {
      "postCode": "2765",
      "suburb": "ANGUS"
    },
    {
      "postCode": "2316",
      "suburb": "ANNA BAY"
    },
    {
      "postCode": "2038",
      "suburb": "ANNANDALE"
    },
    {
      "postCode": "2156",
      "suburb": "ANNANGROVE"
    },
    {
      "postCode": "2560",
      "suburb": "APPIN"
    },
    {
      "postCode": "2850",
      "suburb": "APPLE TREE FLAT"
    },
    {
      "postCode": "2340",
      "suburb": "APPLEBY"
    },
    {
      "postCode": "2330",
      "suburb": "APPLETREE FLAT"
    },
    {
      "postCode": "2820",
      "suburb": "APSLEY"
    },
    {
      "postCode": "2630",
      "suburb": "ARABLE"
    },
    {
      "postCode": "2431",
      "suburb": "ARAKOON"
    },
    {
      "postCode": "2622",
      "suburb": "ARALUEN"
    },
    {
      "postCode": "2714",
      "suburb": "ARATULA"
    },
    {
      "postCode": "2159",
      "suburb": "ARCADIA"
    },
    {
      "postCode": "2283",
      "suburb": "ARCADIA VALE"
    },
    {
      "postCode": "2338",
      "suburb": "ARDGLEN"
    },
    {
      "postCode": "2358",
      "suburb": "ARDING"
    },
    {
      "postCode": "2665",
      "suburb": "ARDLETHAN"
    },
    {
      "postCode": "2720",
      "suburb": "ARGALONG"
    },
    {
      "postCode": "2284",
      "suburb": "ARGENTON"
    },
    {
      "postCode": "2449",
      "suburb": "ARGENTS HILL"
    },
    {
      "postCode": "2707",
      "suburb": "ARGOON"
    },
    {
      "postCode": "2350",
      "suburb": "ARGYLE"
    },
    {
      "postCode": "2665",
      "suburb": "ARIAH PARK"
    },
    {
      "postCode": "2795",
      "suburb": "ARKELL"
    },
    {
      "postCode": "2795",
      "suburb": "ARKSTONE"
    },
    {
      "postCode": "2828",
      "suburb": "ARMATREE"
    },
    {
      "postCode": "2350",
      "suburb": "ARMIDALE"
    },
    {
      "postCode": "2350",
      "suburb": "ARMIDALE DC"
    },
    {
      "postCode": "2350",
      "suburb": "ARMIDALE EAST"
    },
    {
      "postCode": "2205",
      "suburb": "ARNCLIFFE"
    },
    {
      "postCode": "2148",
      "suburb": "ARNDELL PARK"
    },
    {
      "postCode": "2456",
      "suburb": "ARRAWARRA"
    },
    {
      "postCode": "2456",
      "suburb": "ARRAWARRA HEADLAND"
    },
    {
      "postCode": "1570",
      "suburb": "ARTARMON"
    },
    {
      "postCode": "2064",
      "suburb": "ARTARMON"
    },
    {
      "postCode": "2820",
      "suburb": "ARTHURVILLE"
    },
    {
      "postCode": "2715",
      "suburb": "ARUMPO"
    },
    {
      "postCode": "2193",
      "suburb": "ASHBURY"
    },
    {
      "postCode": "2463",
      "suburb": "ASHBY"
    },
    {
      "postCode": "2463",
      "suburb": "ASHBY HEIGHTS"
    },
    {
      "postCode": "2463",
      "suburb": "ASHBY ISLAND"
    },
    {
      "postCode": "2168",
      "suburb": "ASHCROFT"
    },
    {
      "postCode": "1800",
      "suburb": "ASHFIELD"
    },
    {
      "postCode": "2131",
      "suburb": "ASHFIELD"
    },
    {
      "postCode": "2361",
      "suburb": "ASHFORD"
    },
    {
      "postCode": "2400",
      "suburb": "ASHLEY"
    },
    {
      "postCode": "2650",
      "suburb": "ASHMONT"
    },
    {
      "postCode": "2323",
      "suburb": "ASHTONFIELD"
    },
    {
      "postCode": "2077",
      "suburb": "ASQUITH"
    },
    {
      "postCode": "2361",
      "suburb": "ATHOLWOOD"
    },
    {
      "postCode": "2345",
      "suburb": "ATTUNGA"
    },
    {
      "postCode": "1835",
      "suburb": "AUBURN"
    },
    {
      "postCode": "2144",
      "suburb": "AUBURN"
    },
    {
      "postCode": "2360",
      "suburb": "AUBURN VALE"
    },
    {
      "postCode": "2232",
      "suburb": "AUDLEY"
    },
    {
      "postCode": "2515",
      "suburb": "AUSTINMER"
    },
    {
      "postCode": "2179",
      "suburb": "AUSTRAL"
    },
    {
      "postCode": "2440",
      "suburb": "AUSTRAL EDEN"
    },
    {
      "postCode": "1215",
      "suburb": "AUSTRALIA SQUARE"
    },
    {
      "postCode": "2890",
      "suburb": "AUSTRALIAN DEFENCE FORCES"
    },
    {
      "postCode": "2107",
      "suburb": "AVALON BEACH"
    },
    {
      "postCode": "2850",
      "suburb": "AVISFORD"
    },
    {
      "postCode": "2577",
      "suburb": "AVOCA"
    },
    {
      "postCode": "2251",
      "suburb": "AVOCA BEACH"
    },
    {
      "postCode": "2574",
      "suburb": "AVON"
    },
    {
      "postCode": "2530",
      "suburb": "AVONDALE"
    },
    {
      "postCode": "2628",
      "suburb": "AVONSIDE"
    },
    {
      "postCode": "2283",
      "suburb": "AWABA"
    },
    {
      "postCode": "2575",
      "suburb": "AYLMERTON"
    },
    {
      "postCode": "2390",
      "suburb": "BAAN BAA"
    },
    {
      "postCode": "2825",
      "suburb": "BABINDA"
    },
    {
      "postCode": "2470",
      "suburb": "BABYL CREEK"
    },
    {
      "postCode": "2372",
      "suburb": "BACK CREEK"
    },
    {
      "postCode": "2390",
      "suburb": "BACK CREEK"
    },
    {
      "postCode": "2422",
      "suburb": "BACK CREEK"
    },
    {
      "postCode": "2484",
      "suburb": "BACK CREEK"
    },
    {
      "postCode": "2622",
      "suburb": "BACK CREEK"
    },
    {
      "postCode": "2671",
      "suburb": "BACK CREEK"
    },
    {
      "postCode": "2535",
      "suburb": "BACK FOREST"
    },
    {
      "postCode": "2470",
      "suburb": "BACKMEDE"
    },
    {
      "postCode": "2365",
      "suburb": "BACKWATER"
    },
    {
      "postCode": "2540",
      "suburb": "BADAGARANG"
    },
    {
      "postCode": "2555",
      "suburb": "BADGERYS CREEK"
    },
    {
      "postCode": "2630",
      "suburb": "BADJA"
    },
    {
      "postCode": "2333",
      "suburb": "BAERAMI"
    },
    {
      "postCode": "2333",
      "suburb": "BAERAMI CREEK"
    },
    {
      "postCode": "2446",
      "suburb": "BAGNOO"
    },
    {
      "postCode": "2446",
      "suburb": "BAGO"
    },
    {
      "postCode": "2477",
      "suburb": "BAGOTVILLE"
    },
    {
      "postCode": "2359",
      "suburb": "BAKERS CREEK"
    },
    {
      "postCode": "2422",
      "suburb": "BAKERS CREEK"
    },
    {
      "postCode": "2447",
      "suburb": "BAKERS CREEK"
    },
    {
      "postCode": "2820",
      "suburb": "BAKERS SWAMP"
    },
    {
      "postCode": "2575",
      "suburb": "BALACLAVA"
    },
    {
      "postCode": "2358",
      "suburb": "BALALA"
    },
    {
      "postCode": "2264",
      "suburb": "BALCOLYN"
    },
    {
      "postCode": "2365",
      "suburb": "BALD BLAIR"
    },
    {
      "postCode": "2549",
      "suburb": "BALD HILLS"
    },
    {
      "postCode": "2370",
      "suburb": "BALD NOB"
    },
    {
      "postCode": "2795",
      "suburb": "BALD RIDGE"
    },
    {
      "postCode": "2365",
      "suburb": "BALDERSLEIGH"
    },
    {
      "postCode": "2867",
      "suburb": "BALDRY"
    },
    {
      "postCode": "2403",
      "suburb": "BALFOURS PEAK"
    },
    {
      "postCode": "2093",
      "suburb": "BALGOWLAH"
    },
    {
      "postCode": "2093",
      "suburb": "BALGOWLAH HEIGHTS"
    },
    {
      "postCode": "2519",
      "suburb": "BALGOWNIE"
    },
    {
      "postCode": "2324",
      "suburb": "BALICKERA"
    },
    {
      "postCode": "2822",
      "suburb": "BALLADORAN"
    },
    {
      "postCode": "2622",
      "suburb": "BALLALABA"
    },
    {
      "postCode": "2646",
      "suburb": "BALLDALE"
    },
    {
      "postCode": "2441",
      "suburb": "BALLENGARRA"
    },
    {
      "postCode": "2830",
      "suburb": "BALLIMORE"
    },
    {
      "postCode": "2478",
      "suburb": "BALLINA"
    },
    {
      "postCode": "2478",
      "suburb": "BALLINA DC"
    },
    {
      "postCode": "2795",
      "suburb": "BALLYROE"
    },
    {
      "postCode": "2041",
      "suburb": "BALMAIN"
    },
    {
      "postCode": "2041",
      "suburb": "BALMAIN EAST"
    },
    {
      "postCode": "2283",
      "suburb": "BALMORAL"
    },
    {
      "postCode": "2571",
      "suburb": "BALMORAL"
    },
    {
      "postCode": "2715",
      "suburb": "BALRANALD"
    },
    {
      "postCode": "2540",
      "suburb": "BAMARANG"
    },
    {
      "postCode": "2446",
      "suburb": "BANDA BANDA"
    },
    {
      "postCode": "2420",
      "suburb": "BANDON GROVE"
    },
    {
      "postCode": "2729",
      "suburb": "BANGADANG"
    },
    {
      "postCode": "2541",
      "suburb": "BANGALEE"
    },
    {
      "postCode": "2479",
      "suburb": "BANGALOW"
    },
    {
      "postCode": "2404",
      "suburb": "BANGHEET"
    },
    {
      "postCode": "2582",
      "suburb": "BANGO"
    },
    {
      "postCode": "2234",
      "suburb": "BANGOR"
    },
    {
      "postCode": "2216",
      "suburb": "BANKSIA"
    },
    {
      "postCode": "2019",
      "suburb": "BANKSMEADOW"
    },
    {
      "postCode": "1885",
      "suburb": "BANKSTOWN"
    },
    {
      "postCode": "2200",
      "suburb": "BANKSTOWN"
    },
    {
      "postCode": "2200",
      "suburb": "BANKSTOWN AERODROME"
    },
    {
      "postCode": "2200",
      "suburb": "BANKSTOWN NORTH"
    },
    {
      "postCode": "2200",
      "suburb": "BANKSTOWN SQUARE"
    },
    {
      "postCode": "2580",
      "suburb": "BANNABY"
    },
    {
      "postCode": "2580",
      "suburb": "BANNISTER"
    },
    {
      "postCode": "2347",
      "suburb": "BANOON"
    },
    {
      "postCode": "2486",
      "suburb": "BANORA POINT"
    },
    {
      "postCode": "2460",
      "suburb": "BANYABBA"
    },
    {
      "postCode": "2300",
      "suburb": "BAR BEACH"
    },
    {
      "postCode": "2083",
      "suburb": "BAR POINT"
    },
    {
      "postCode": "2850",
      "suburb": "BARA"
    },
    {
      "postCode": "2396",
      "suburb": "BARADINE"
    },
    {
      "postCode": "2000",
      "suburb": "BARANGAROO"
    },
    {
      "postCode": "2460",
      "suburb": "BARCOONGERE"
    },
    {
      "postCode": "2234",
      "suburb": "BARDEN RIDGE"
    },
    {
      "postCode": "2565",
      "suburb": "BARDIA"
    },
    {
      "postCode": "2207",
      "suburb": "BARDWELL PARK"
    },
    {
      "postCode": "2207",
      "suburb": "BARDWELL VALLEY"
    },
    {
      "postCode": "2665",
      "suburb": "BARELLAN"
    },
    {
      "postCode": "2574",
      "suburb": "BARGO"
    },
    {
      "postCode": "2732",
      "suburb": "BARHAM"
    },
    {
      "postCode": "2850",
      "suburb": "BARIGAN"
    },
    {
      "postCode": "2474",
      "suburb": "BARKERS VALE"
    },
    {
      "postCode": "2668",
      "suburb": "BARMEDMAN"
    },
    {
      "postCode": "2852",
      "suburb": "BARNEYS REEF"
    },
    {
      "postCode": "2278",
      "suburb": "BARNSLEY"
    },
    {
      "postCode": "3644",
      "suburb": "BAROOGA"
    },
    {
      "postCode": "2347",
      "suburb": "BARRABA"
    },
    {
      "postCode": "2528",
      "suburb": "BARRACK HEIGHTS"
    },
    {
      "postCode": "2528",
      "suburb": "BARRACK POINT"
    },
    {
      "postCode": "2441",
      "suburb": "BARRAGANYATTI"
    },
    {
      "postCode": "2546",
      "suburb": "BARRAGGA BAY"
    },
    {
      "postCode": "2710",
      "suburb": "BARRATTA"
    },
    {
      "postCode": "2577",
      "suburb": "BARREN GROUNDS"
    },
    {
      "postCode": "2577",
      "suburb": "BARRENGARRY"
    },
    {
      "postCode": "2460",
      "suburb": "BARRETTS CREEK"
    },
    {
      "postCode": "2540",
      "suburb": "BARRINGELLA"
    },
    {
      "postCode": "2422",
      "suburb": "BARRINGTON"
    },
    {
      "postCode": "2422",
      "suburb": "BARRINGTON TOPS"
    },
    {
      "postCode": "2840",
      "suburb": "BARRINGUN"
    },
    {
      "postCode": "2340",
      "suburb": "BARRY"
    },
    {
      "postCode": "2799",
      "suburb": "BARRY"
    },
    {
      "postCode": "2594",
      "suburb": "BARWANG"
    },
    {
      "postCode": "2396",
      "suburb": "BARWON"
    },
    {
      "postCode": "2460",
      "suburb": "BARYULGIL"
    },
    {
      "postCode": "2540",
      "suburb": "BASIN VIEW"
    },
    {
      "postCode": "2197",
      "suburb": "BASS HILL"
    },
    {
      "postCode": "2365",
      "suburb": "BASSENDEAN"
    },
    {
      "postCode": "2439",
      "suburb": "BATAR CREEK"
    },
    {
      "postCode": "2261",
      "suburb": "BATEAU BAY"
    },
    {
      "postCode": "2536",
      "suburb": "BATEHAVEN"
    },
    {
      "postCode": "2536",
      "suburb": "BATEMANS BAY"
    },
    {
      "postCode": "2795",
      "suburb": "BATHAMPTON"
    },
    {
      "postCode": "2795",
      "suburb": "BATHURST"
    },
    {
      "postCode": "2795",
      "suburb": "BATHURST WEST"
    },
    {
      "postCode": "2730",
      "suburb": "BATLOW"
    },
    {
      "postCode": "1755",
      "suburb": "BAULKHAM HILLS"
    },
    {
      "postCode": "2153",
      "suburb": "BAULKHAM HILLS"
    },
    {
      "postCode": "2580",
      "suburb": "BAW BAW"
    },
    {
      "postCode": "2539",
      "suburb": "BAWLEY POINT"
    },
    {
      "postCode": "2422",
      "suburb": "BAXTERS RIDGE"
    },
    {
      "postCode": "2261",
      "suburb": "BAY VILLAGE"
    },
    {
      "postCode": "2104",
      "suburb": "BAYVIEW"
    },
    {
      "postCode": "2100",
      "suburb": "BEACON HILL"
    },
    {
      "postCode": "2015",
      "suburb": "BEACONSFIELD"
    },
    {
      "postCode": "2469",
      "suburb": "BEAN CREEK"
    },
    {
      "postCode": "2827",
      "suburb": "BEARBONG"
    },
    {
      "postCode": "2577",
      "suburb": "BEAUMONT"
    },
    {
      "postCode": "2155",
      "suburb": "BEAUMONT HILLS"
    },
    {
      "postCode": "2665",
      "suburb": "BECKOM"
    },
    {
      "postCode": "2340",
      "suburb": "BECTIVE"
    },
    {
      "postCode": "2665",
      "suburb": "BECTRIC"
    },
    {
      "postCode": "2871",
      "suburb": "BEDGERABONG"
    },
    {
      "postCode": "2446",
      "suburb": "BEECHWOOD"
    },
    {
      "postCode": "2119",
      "suburb": "BEECROFT"
    },
    {
      "postCode": "2540",
      "suburb": "BEECROFT PENINSULA"
    },
    {
      "postCode": "2680",
      "suburb": "BEELBANGERA"
    },
    {
      "postCode": "2824",
      "suburb": "BEEMUNNEL"
    },
    {
      "postCode": "2550",
      "suburb": "BEGA"
    },
    {
      "postCode": "2587",
      "suburb": "BEGGAN BEGGAN"
    },
    {
      "postCode": "2577",
      "suburb": "BELANGLO"
    },
    {
      "postCode": "2422",
      "suburb": "BELBORA"
    },
    {
      "postCode": "2191",
      "suburb": "BELFIELD"
    },
    {
      "postCode": "2335",
      "suburb": "BELFORD"
    },
    {
      "postCode": "2650",
      "suburb": "BELFRAYDEN"
    },
    {
      "postCode": "2800",
      "suburb": "BELGRAVIA"
    },
    {
      "postCode": "2570",
      "suburb": "BELIMBLA PARK"
    },
    {
      "postCode": "2786",
      "suburb": "BELL"
    },
    {
      "postCode": "2153",
      "suburb": "BELLA VISTA"
    },
    {
      "postCode": "2518",
      "suburb": "BELLAMBI"
    },
    {
      "postCode": "2446",
      "suburb": "BELLANGRY"
    },
    {
      "postCode": "2397",
      "suburb": "BELLATA"
    },
    {
      "postCode": "2535",
      "suburb": "BELLAWONGARAH"
    },
    {
      "postCode": "2325",
      "suburb": "BELLBIRD"
    },
    {
      "postCode": "2325",
      "suburb": "BELLBIRD HEIGHTS"
    },
    {
      "postCode": "2440",
      "suburb": "BELLBROOK"
    },
    {
      "postCode": "2023",
      "suburb": "BELLEVUE HILL"
    },
    {
      "postCode": "2440",
      "suburb": "BELLIMBOPINNI"
    },
    {
      "postCode": "2454",
      "suburb": "BELLINGEN"
    },
    {
      "postCode": "2581",
      "suburb": "BELLMOUNT FOREST"
    },
    {
      "postCode": "2337",
      "suburb": "BELLTREES"
    },
    {
      "postCode": "2280",
      "suburb": "BELMONT"
    },
    {
      "postCode": "2280",
      "suburb": "BELMONT NORTH"
    },
    {
      "postCode": "2280",
      "suburb": "BELMONT SOUTH"
    },
    {
      "postCode": "2192",
      "suburb": "BELMORE"
    },
    {
      "postCode": "2440",
      "suburb": "BELMORE RIVER"
    },
    {
      "postCode": "2628",
      "suburb": "BELOKA"
    },
    {
      "postCode": "2545",
      "suburb": "BELOWRA"
    },
    {
      "postCode": "2085",
      "suburb": "BELROSE"
    },
    {
      "postCode": "2085",
      "suburb": "BELROSE WEST"
    },
    {
      "postCode": "2550",
      "suburb": "BEMBOKA"
    },
    {
      "postCode": "2790",
      "suburb": "BEN BULLEN"
    },
    {
      "postCode": "2365",
      "suburb": "BEN LOMOND"
    },
    {
      "postCode": "2536",
      "suburb": "BENANDARAH"
    },
    {
      "postCode": "2539",
      "suburb": "BENDALONG"
    },
    {
      "postCode": "2355",
      "suburb": "BENDEMEER"
    },
    {
      "postCode": "2803",
      "suburb": "BENDICK MURRELL"
    },
    {
      "postCode": "2420",
      "suburb": "BENDOLBA"
    },
    {
      "postCode": "2622",
      "suburb": "BENDOURA"
    },
    {
      "postCode": "2680",
      "suburb": "BENEREMBAH"
    },
    {
      "postCode": "2333",
      "suburb": "BENGALLA"
    },
    {
      "postCode": "2290",
      "suburb": "BENNETTS GREEN"
    },
    {
      "postCode": "2818",
      "suburb": "BENOLONG"
    },
    {
      "postCode": "2251",
      "suburb": "BENSVILLE"
    },
    {
      "postCode": "2480",
      "suburb": "BENTLEY"
    },
    {
      "postCode": "2141",
      "suburb": "BERALA"
    },
    {
      "postCode": "2758",
      "suburb": "BERAMBING"
    },
    {
      "postCode": "2322",
      "suburb": "BERESFIELD"
    },
    {
      "postCode": "2537",
      "suburb": "BERGALIA"
    },
    {
      "postCode": "2506",
      "suburb": "BERKELEY"
    },
    {
      "postCode": "2261",
      "suburb": "BERKELEY VALE"
    },
    {
      "postCode": "2765",
      "suburb": "BERKSHIRE PARK"
    },
    {
      "postCode": "2622",
      "suburb": "BERLANG"
    },
    {
      "postCode": "2546",
      "suburb": "BERMAGUI"
    },
    {
      "postCode": "2081",
      "suburb": "BEROWRA"
    },
    {
      "postCode": "2082",
      "suburb": "BEROWRA CREEK"
    },
    {
      "postCode": "2082",
      "suburb": "BEROWRA HEIGHTS"
    },
    {
      "postCode": "2082",
      "suburb": "BEROWRA WATERS"
    },
    {
      "postCode": "2548",
      "suburb": "BERRAMBOOL"
    },
    {
      "postCode": "2540",
      "suburb": "BERRARA"
    },
    {
      "postCode": "2582",
      "suburb": "BERREMANGRA"
    },
    {
      "postCode": "2422",
      "suburb": "BERRICO"
    },
    {
      "postCode": "2628",
      "suburb": "BERRIDALE"
    },
    {
      "postCode": "2390",
      "suburb": "BERRIGAL"
    },
    {
      "postCode": "2712",
      "suburb": "BERRIGAN"
    },
    {
      "postCode": "2159",
      "suburb": "BERRILEE"
    },
    {
      "postCode": "2577",
      "suburb": "BERRIMA"
    },
    {
      "postCode": "2539",
      "suburb": "BERRINGER LAKE"
    },
    {
      "postCode": "2535",
      "suburb": "BERRY"
    },
    {
      "postCode": "2701",
      "suburb": "BERRY JERRY"
    },
    {
      "postCode": "2535",
      "suburb": "BERRY MOUNTAIN"
    },
    {
      "postCode": "2321",
      "suburb": "BERRY PARK"
    },
    {
      "postCode": "2594",
      "suburb": "BERTHONG"
    },
    {
      "postCode": "2852",
      "suburb": "BERYL"
    },
    {
      "postCode": "2590",
      "suburb": "BETHUNGRA"
    },
    {
      "postCode": "2581",
      "suburb": "BEVENDALE"
    },
    {
      "postCode": "2217",
      "suburb": "BEVERLEY PARK"
    },
    {
      "postCode": "2209",
      "suburb": "BEVERLY HILLS"
    },
    {
      "postCode": "2540",
      "suburb": "BEWONG"
    },
    {
      "postCode": "2480",
      "suburb": "BEXHILL"
    },
    {
      "postCode": "2207",
      "suburb": "BEXLEY"
    },
    {
      "postCode": "2207",
      "suburb": "BEXLEY NORTH"
    },
    {
      "postCode": "2207",
      "suburb": "BEXLEY SOUTH"
    },
    {
      "postCode": "2581",
      "suburb": "BIALA"
    },
    {
      "postCode": "2632",
      "suburb": "BIBBENLUKE"
    },
    {
      "postCode": "2570",
      "suburb": "BICKLEY VALE"
    },
    {
      "postCode": "2827",
      "suburb": "BIDDON"
    },
    {
      "postCode": "2642",
      "suburb": "BIDGEEMIA"
    },
    {
      "postCode": "2770",
      "suburb": "BIDWILL"
    },
    {
      "postCode": "2453",
      "suburb": "BIELSDOWN HILLS"
    },
    {
      "postCode": "2579",
      "suburb": "BIG HILL"
    },
    {
      "postCode": "2339",
      "suburb": "BIG JACKS CREEK"
    },
    {
      "postCode": "2330",
      "suburb": "BIG RIDGE"
    },
    {
      "postCode": "2650",
      "suburb": "BIG SPRINGS"
    },
    {
      "postCode": "2330",
      "suburb": "BIG YENGO"
    },
    {
      "postCode": "2583",
      "suburb": "BIGGA"
    },
    {
      "postCode": "2486",
      "suburb": "BILAMBIL"
    },
    {
      "postCode": "2486",
      "suburb": "BILAMBIL HEIGHTS"
    },
    {
      "postCode": "2680",
      "suburb": "BILBUL"
    },
    {
      "postCode": "2107",
      "suburb": "BILGOLA BEACH"
    },
    {
      "postCode": "2107",
      "suburb": "BILGOLA PLATEAU"
    },
    {
      "postCode": "2829",
      "suburb": "BILLEROY"
    },
    {
      "postCode": "2630",
      "suburb": "BILLILINGRA"
    },
    {
      "postCode": "2804",
      "suburb": "BILLIMARI"
    },
    {
      "postCode": "2483",
      "suburb": "BILLINUDGEL"
    },
    {
      "postCode": "2453",
      "suburb": "BILLYS CREEK"
    },
    {
      "postCode": "2795",
      "suburb": "BILLYWILLINGA"
    },
    {
      "postCode": "2758",
      "suburb": "BILPIN"
    },
    {
      "postCode": "2611",
      "suburb": "BIMBERI"
    },
    {
      "postCode": "2810",
      "suburb": "BIMBI"
    },
    {
      "postCode": "2536",
      "suburb": "BIMBIMBIE"
    },
    {
      "postCode": "2584",
      "suburb": "BINALONG"
    },
    {
      "postCode": "2583",
      "suburb": "BINDA"
    },
    {
      "postCode": "2422",
      "suburb": "BINDERA"
    },
    {
      "postCode": "2404",
      "suburb": "BINGARA"
    },
    {
      "postCode": "2469",
      "suburb": "BINGEEBEEBRA CREEK"
    },
    {
      "postCode": "2537",
      "suburb": "BINGIE"
    },
    {
      "postCode": "2311",
      "suburb": "BINGLEBURRA"
    },
    {
      "postCode": "2399",
      "suburb": "BINIGUY"
    },
    {
      "postCode": "2630",
      "suburb": "BINJURA"
    },
    {
      "postCode": "2479",
      "suburb": "BINNA BURRA"
    },
    {
      "postCode": "2395",
      "suburb": "BINNAWAY"
    },
    {
      "postCode": "2665",
      "suburb": "BINYA"
    },
    {
      "postCode": "2041",
      "suburb": "BIRCHGROVE"
    },
    {
      "postCode": "2446",
      "suburb": "BIRDWOOD"
    },
    {
      "postCode": "2710",
      "suburb": "BIRGANBIGIL"
    },
    {
      "postCode": "2287",
      "suburb": "BIRMINGHAM GARDENS"
    },
    {
      "postCode": "2844",
      "suburb": "BIRRIWA"
    },
    {
      "postCode": "2143",
      "suburb": "BIRRONG"
    },
    {
      "postCode": "2326",
      "suburb": "BISHOPS BRIDGE"
    },
    {
      "postCode": "2340",
      "suburb": "BITHRAMERE"
    },
    {
      "postCode": "2439",
      "suburb": "BLACK CREEK"
    },
    {
      "postCode": "2729",
      "suburb": "BLACK CREEK"
    },
    {
      "postCode": "2430",
      "suburb": "BLACK HEAD"
    },
    {
      "postCode": "2322",
      "suburb": "BLACK HILL"
    },
    {
      "postCode": "2828",
      "suburb": "BLACK HOLLOW"
    },
    {
      "postCode": "2365",
      "suburb": "BLACK MOUNTAIN"
    },
    {
      "postCode": "2550",
      "suburb": "BLACK RANGE"
    },
    {
      "postCode": "2787",
      "suburb": "BLACK SPRINGS"
    },
    {
      "postCode": "2283",
      "suburb": "BLACKALLS PARK"
    },
    {
      "postCode": "2529",
      "suburb": "BLACKBUTT"
    },
    {
      "postCode": "2770",
      "suburb": "BLACKETT"
    },
    {
      "postCode": "2785",
      "suburb": "BLACKHEATH"
    },
    {
      "postCode": "2790",
      "suburb": "BLACKMANS FLAT"
    },
    {
      "postCode": "2444",
      "suburb": "BLACKMANS POINT"
    },
    {
      "postCode": "2281",
      "suburb": "BLACKSMITHS"
    },
    {
      "postCode": "2148",
      "suburb": "BLACKTOWN"
    },
    {
      "postCode": "2148",
      "suburb": "BLACKTOWN WESTPOINT"
    },
    {
      "postCode": "2343",
      "suburb": "BLACKVILLE"
    },
    {
      "postCode": "2256",
      "suburb": "BLACKWALL"
    },
    {
      "postCode": "2560",
      "suburb": "BLAIR ATHOL"
    },
    {
      "postCode": "2559",
      "suburb": "BLAIRMOUNT"
    },
    {
      "postCode": "2480",
      "suburb": "BLAKEBROOK"
    },
    {
      "postCode": "2221",
      "suburb": "BLAKEHURST"
    },
    {
      "postCode": "2581",
      "suburb": "BLAKNEY CREEK"
    },
    {
      "postCode": "2721",
      "suburb": "BLAND"
    },
    {
      "postCode": "2338",
      "suburb": "BLANDFORD"
    },
    {
      "postCode": "2142",
      "suburb": "BLAXCELL"
    },
    {
      "postCode": "2774",
      "suburb": "BLAXLAND"
    },
    {
      "postCode": "2774",
      "suburb": "BLAXLAND EAST"
    },
    {
      "postCode": "2460",
      "suburb": "BLAXLANDS CREEK"
    },
    {
      "postCode": "2758",
      "suburb": "BLAXLANDS RIDGE"
    },
    {
      "postCode": "2799",
      "suburb": "BLAYNEY"
    },
    {
      "postCode": "2113",
      "suburb": "BLENHEIM ROAD"
    },
    {
      "postCode": "2756",
      "suburb": "BLIGH PARK"
    },
    {
      "postCode": "2713",
      "suburb": "BLIGHTY"
    },
    {
      "postCode": "2720",
      "suburb": "BLOWERING"
    },
    {
      "postCode": "2261",
      "suburb": "BLUE BAY"
    },
    {
      "postCode": "2624",
      "suburb": "BLUE COW"
    },
    {
      "postCode": "2262",
      "suburb": "BLUE HAVEN"
    },
    {
      "postCode": "2480",
      "suburb": "BLUE KNOB"
    },
    {
      "postCode": "2408",
      "suburb": "BLUE NOBBY"
    },
    {
      "postCode": "2380",
      "suburb": "BLUE VALE"
    },
    {
      "postCode": "2428",
      "suburb": "BLUEYS BEACH"
    },
    {
      "postCode": "2450",
      "suburb": "BOAMBEE"
    },
    {
      "postCode": "2452",
      "suburb": "BOAMBEE EAST"
    },
    {
      "postCode": "2582",
      "suburb": "BOAMBOLO"
    },
    {
      "postCode": "2316",
      "suburb": "BOAT HARBOUR"
    },
    {
      "postCode": "2480",
      "suburb": "BOAT HARBOUR"
    },
    {
      "postCode": "2877",
      "suburb": "BOBADAH"
    },
    {
      "postCode": "2429",
      "suburb": "BOBIN"
    },
    {
      "postCode": "2439",
      "suburb": "BOBS CREEK"
    },
    {
      "postCode": "2316",
      "suburb": "BOBS FARM"
    },
    {
      "postCode": "2630",
      "suburb": "BOBUNDARA"
    },
    {
      "postCode": "2631",
      "suburb": "BOCO"
    },
    {
      "postCode": "2850",
      "suburb": "BOCOBLE"
    },
    {
      "postCode": "2865",
      "suburb": "BOCOBRA"
    },
    {
      "postCode": "2545",
      "suburb": "BODALLA"
    },
    {
      "postCode": "2820",
      "suburb": "BODANGORA"
    },
    {
      "postCode": "2739",
      "suburb": "BOEILL CREEK"
    },
    {
      "postCode": "2826",
      "suburb": "BOGAN"
    },
    {
      "postCode": "2876",
      "suburb": "BOGAN GATE"
    },
    {
      "postCode": "2488",
      "suburb": "BOGANGAR"
    },
    {
      "postCode": "2849",
      "suburb": "BOGEE"
    },
    {
      "postCode": "2409",
      "suburb": "BOGGABILLA"
    },
    {
      "postCode": "2382",
      "suburb": "BOGGABRI"
    },
    {
      "postCode": "2720",
      "suburb": "BOGONG PEAKS WILDERNESS"
    },
    {
      "postCode": "2390",
      "suburb": "BOHENA CREEK"
    },
    {
      "postCode": "2430",
      "suburb": "BOHNOCK"
    },
    {
      "postCode": "2629",
      "suburb": "BOLARO"
    },
    {
      "postCode": "2372",
      "suburb": "BOLIVIA"
    },
    {
      "postCode": "2540",
      "suburb": "BOLONG"
    },
    {
      "postCode": "2283",
      "suburb": "BOLTON POINT"
    },
    {
      "postCode": "2320",
      "suburb": "BOLWARRA"
    },
    {
      "postCode": "2320",
      "suburb": "BOLWARRA HEIGHTS"
    },
    {
      "postCode": "2460",
      "suburb": "BOM BOM"
    },
    {
      "postCode": "2541",
      "suburb": "BOMADERRY"
    },
    {
      "postCode": "2423",
      "suburb": "BOMBAH POINT"
    },
    {
      "postCode": "2632",
      "suburb": "BOMBALA"
    },
    {
      "postCode": "2622",
      "suburb": "BOMBAY"
    },
    {
      "postCode": "2850",
      "suburb": "BOMBIRA"
    },
    {
      "postCode": "2533",
      "suburb": "BOMBO"
    },
    {
      "postCode": "2720",
      "suburb": "BOMBOWLEE"
    },
    {
      "postCode": "2720",
      "suburb": "BOMBOWLEE CREEK"
    },
    {
      "postCode": "2650",
      "suburb": "BOMEN"
    },
    {
      "postCode": "2357",
      "suburb": "BOMERA"
    },
    {
      "postCode": "2469",
      "suburb": "BONALBO"
    },
    {
      "postCode": "2026",
      "suburb": "BONDI"
    },
    {
      "postCode": "2026",
      "suburb": "BONDI BEACH"
    },
    {
      "postCode": "2632",
      "suburb": "BONDI FOREST"
    },
    {
      "postCode": "1355",
      "suburb": "BONDI JUNCTION"
    },
    {
      "postCode": "2022",
      "suburb": "BONDI JUNCTION"
    },
    {
      "postCode": "2264",
      "suburb": "BONNELLS BAY"
    },
    {
      "postCode": "2226",
      "suburb": "BONNET BAY"
    },
    {
      "postCode": "2232",
      "suburb": "BONNIE VALE"
    },
    {
      "postCode": "2445",
      "suburb": "BONNY HILLS"
    },
    {
      "postCode": "2177",
      "suburb": "BONNYRIGG"
    },
    {
      "postCode": "2177",
      "suburb": "BONNYRIGG HEIGHTS"
    },
    {
      "postCode": "2361",
      "suburb": "BONSHAW"
    },
    {
      "postCode": "2450",
      "suburb": "BONVILLE"
    },
    {
      "postCode": "2480",
      "suburb": "BOOERIE CREEK"
    },
    {
      "postCode": "2650",
      "suburb": "BOOK BOOK"
    },
    {
      "postCode": "2257",
      "suburb": "BOOKER BAY"
    },
    {
      "postCode": "2582",
      "suburb": "BOOKHAM"
    },
    {
      "postCode": "2372",
      "suburb": "BOOKOOKOORARA"
    },
    {
      "postCode": "2460",
      "suburb": "BOOKRAM"
    },
    {
      "postCode": "2423",
      "suburb": "BOOLAMBAYTE"
    },
    {
      "postCode": "2284",
      "suburb": "BOOLAROO"
    },
    {
      "postCode": "2388",
      "suburb": "BOOLCARROLL"
    },
    {
      "postCode": "2711",
      "suburb": "BOOLIGAL"
    },
    {
      "postCode": "2540",
      "suburb": "BOOLIJAH"
    },
    {
      "postCode": "2712",
      "suburb": "BOOMANOOMANA"
    },
    {
      "postCode": "2428",
      "suburb": "BOOMERANG BEACH"
    },
    {
      "postCode": "2866",
      "suburb": "BOOMEY"
    },
    {
      "postCode": "2405",
      "suburb": "BOOMI"
    },
    {
      "postCode": "2476",
      "suburb": "BOOMI CREEK"
    },
    {
      "postCode": "2877",
      "suburb": "BOONA MOUNT"
    },
    {
      "postCode": "2409",
      "suburb": "BOONAL"
    },
    {
      "postCode": "2372",
      "suburb": "BOONOO BOONOO"
    },
    {
      "postCode": "2480",
      "suburb": "BOORABEE PARK"
    },
    {
      "postCode": "2284",
      "suburb": "BOORAGUL"
    },
    {
      "postCode": "2425",
      "suburb": "BOORAL"
    },
    {
      "postCode": "2652",
      "suburb": "BOORGA"
    },
    {
      "postCode": "2429",
      "suburb": "BOORGANNA"
    },
    {
      "postCode": "2350",
      "suburb": "BOOROLONG"
    },
    {
      "postCode": "2372",
      "suburb": "BOOROOK"
    },
    {
      "postCode": "2650",
      "suburb": "BOOROOMA"
    },
    {
      "postCode": "2710",
      "suburb": "BOOROORBAN"
    },
    {
      "postCode": "2586",
      "suburb": "BOOROWA"
    },
    {
      "postCode": "2430",
      "suburb": "BOOTAWA"
    },
    {
      "postCode": "2428",
      "suburb": "BOOTI BOOTI"
    },
    {
      "postCode": "2480",
      "suburb": "BOOYONG"
    },
    {
      "postCode": "2471",
      "suburb": "BORA RIDGE"
    },
    {
      "postCode": "2346",
      "suburb": "BORAH CREEK"
    },
    {
      "postCode": "2343",
      "suburb": "BORAMBIL"
    },
    {
      "postCode": "2650",
      "suburb": "BORAMBOLA"
    },
    {
      "postCode": "2474",
      "suburb": "BORDER RANGES"
    },
    {
      "postCode": "2800",
      "suburb": "BOREE"
    },
    {
      "postCode": "2652",
      "suburb": "BOREE CREEK"
    },
    {
      "postCode": "2800",
      "suburb": "BORENORE"
    },
    {
      "postCode": "2622",
      "suburb": "BORO"
    },
    {
      "postCode": "2176",
      "suburb": "BOSSLEY PARK"
    },
    {
      "postCode": "2453",
      "suburb": "BOSTOBRICK"
    },
    {
      "postCode": "1455",
      "suburb": "BOTANY"
    },
    {
      "postCode": "2019",
      "suburb": "BOTANY"
    },
    {
      "postCode": "2850",
      "suburb": "BOTOBOLAR"
    },
    {
      "postCode": "2469",
      "suburb": "BOTTLE CREEK"
    },
    {
      "postCode": "2251",
      "suburb": "BOUDDI"
    },
    {
      "postCode": "2828",
      "suburb": "BOURBAH"
    },
    {
      "postCode": "2840",
      "suburb": "BOURKE"
    },
    {
      "postCode": "2650",
      "suburb": "BOURKELANDS"
    },
    {
      "postCode": "2548",
      "suburb": "BOURNDA"
    },
    {
      "postCode": "2868",
      "suburb": "BOURNEWOOD"
    },
    {
      "postCode": "2566",
      "suburb": "BOW BOWING"
    },
    {
      "postCode": "2864",
      "suburb": "BOWAN PARK"
    },
    {
      "postCode": "2753",
      "suburb": "BOWEN MOUNTAIN"
    },
    {
      "postCode": "2790",
      "suburb": "BOWENFELS"
    },
    {
      "postCode": "2340",
      "suburb": "BOWLING ALLEY POINT"
    },
    {
      "postCode": "2422",
      "suburb": "BOWMAN"
    },
    {
      "postCode": "2422",
      "suburb": "BOWMAN FARM"
    },
    {
      "postCode": "2330",
      "suburb": "BOWMANS CREEK"
    },
    {
      "postCode": "2644",
      "suburb": "BOWNA"
    },
    {
      "postCode": "2582",
      "suburb": "BOWNING"
    },
    {
      "postCode": "2576",
      "suburb": "BOWRAL"
    },
    {
      "postCode": "2449",
      "suburb": "BOWRAVILLE"
    },
    {
      "postCode": "2257",
      "suburb": "BOX HEAD"
    },
    {
      "postCode": "2765",
      "suburb": "BOX HILL"
    },
    {
      "postCode": "2357",
      "suburb": "BOX RIDGE"
    },
    {
      "postCode": "2580",
      "suburb": "BOXERS CREEK"
    },
    {
      "postCode": "2551",
      "suburb": "BOYDTOWN"
    },
    {
      "postCode": "2560",
      "suburb": "BRADBURY"
    },
    {
      "postCode": "2556",
      "suburb": "BRADFIELD"
    },
    {
      "postCode": "2339",
      "suburb": "BRAEFIELD"
    },
    {
      "postCode": "2575",
      "suburb": "BRAEMAR"
    },
    {
      "postCode": "2628",
      "suburb": "BRAEMAR BAY"
    },
    {
      "postCode": "2622",
      "suburb": "BRAIDWOOD"
    },
    {
      "postCode": "2324",
      "suburb": "BRANDY HILL"
    },
    {
      "postCode": "2335",
      "suburb": "BRANXTON"
    },
    {
      "postCode": "2460",
      "suburb": "BRAUNSTONE"
    },
    {
      "postCode": "2337",
      "suburb": "BRAWBOY"
    },
    {
      "postCode": "2484",
      "suburb": "BRAY PARK"
    },
    {
      "postCode": "2484",
      "suburb": "BRAYS CREEK"
    },
    {
      "postCode": "2579",
      "suburb": "BRAYTON"
    },
    {
      "postCode": "2581",
      "suburb": "BREADALBANE"
    },
    {
      "postCode": "2849",
      "suburb": "BREAKFAST CREEK"
    },
    {
      "postCode": "2137",
      "suburb": "BREAKFAST POINT"
    },
    {
      "postCode": "2540",
      "suburb": "BREAM BEACH"
    },
    {
      "postCode": "2626",
      "suburb": "BREDBO"
    },
    {
      "postCode": "2827",
      "suburb": "BREELONG"
    },
    {
      "postCode": "2381",
      "suburb": "BREEZA"
    },
    {
      "postCode": "2422",
      "suburb": "BRETTI"
    },
    {
      "postCode": "2839",
      "suburb": "BREWARRINA"
    },
    {
      "postCode": "2795",
      "suburb": "BREWONGLE"
    },
    {
      "postCode": "2365",
      "suburb": "BRIARBROOK"
    },
    {
      "postCode": "2594",
      "suburb": "BRIBBAREE"
    },
    {
      "postCode": "2330",
      "suburb": "BRIDGMAN"
    },
    {
      "postCode": "2454",
      "suburb": "BRIERFIELD"
    },
    {
      "postCode": "2216",
      "suburb": "BRIGHTON-LE-SANDS"
    },
    {
      "postCode": "2264",
      "suburb": "BRIGHTWATERS"
    },
    {
      "postCode": "2441",
      "suburb": "BRIL BRIL"
    },
    {
      "postCode": "2430",
      "suburb": "BRIMBIN"
    },
    {
      "postCode": "2611",
      "suburb": "BRINDABELLA"
    },
    {
      "postCode": "2454",
      "suburb": "BRINERVILLE"
    },
    {
      "postCode": "2556",
      "suburb": "BRINGELLY"
    },
    {
      "postCode": "3707",
      "suburb": "BRINGENBRONG"
    },
    {
      "postCode": "2580",
      "suburb": "BRISBANE GROVE"
    },
    {
      "postCode": "2292",
      "suburb": "BROADMEADOW"
    },
    {
      "postCode": "2472",
      "suburb": "BROADWATER"
    },
    {
      "postCode": "2549",
      "suburb": "BROADWATER"
    },
    {
      "postCode": "2007",
      "suburb": "BROADWAY"
    },
    {
      "postCode": "2581",
      "suburb": "BROADWAY"
    },
    {
      "postCode": "2705",
      "suburb": "BROBENAH"
    },
    {
      "postCode": "2830",
      "suburb": "BROCKLEHURST"
    },
    {
      "postCode": "2642",
      "suburb": "BROCKLESBY"
    },
    {
      "postCode": "2365",
      "suburb": "BROCKLEY"
    },
    {
      "postCode": "2360",
      "suburb": "BRODIES PLAINS"
    },
    {
      "postCode": "2848",
      "suburb": "BROGANS CREEK"
    },
    {
      "postCode": "2535",
      "suburb": "BROGERS CREEK"
    },
    {
      "postCode": "2550",
      "suburb": "BROGO"
    },
    {
      "postCode": "2330",
      "suburb": "BROKE"
    },
    {
      "postCode": "2629",
      "suburb": "BROKEN DAM"
    },
    {
      "postCode": "2481",
      "suburb": "BROKEN HEAD"
    },
    {
      "postCode": "2880",
      "suburb": "BROKEN HILL"
    },
    {
      "postCode": "2880",
      "suburb": "BROKEN HILL NORTH"
    },
    {
      "postCode": "2880",
      "suburb": "BROKEN HILL WEST"
    },
    {
      "postCode": "2446",
      "suburb": "BROMBIN"
    },
    {
      "postCode": "2024",
      "suburb": "BRONTE"
    },
    {
      "postCode": "2656",
      "suburb": "BROOKDALE"
    },
    {
      "postCode": "2420",
      "suburb": "BROOKFIELD"
    },
    {
      "postCode": "2450",
      "suburb": "BROOKLANA"
    },
    {
      "postCode": "2479",
      "suburb": "BROOKLET"
    },
    {
      "postCode": "2083",
      "suburb": "BROOKLYN"
    },
    {
      "postCode": "2656",
      "suburb": "BROOKONG"
    },
    {
      "postCode": "2100",
      "suburb": "BROOKVALE"
    },
    {
      "postCode": "2538",
      "suburb": "BROOMAN"
    },
    {
      "postCode": "2463",
      "suburb": "BROOMS HEAD"
    },
    {
      "postCode": "2880",
      "suburb": "BROUGHAMS GATE"
    },
    {
      "postCode": "2535",
      "suburb": "BROUGHTON"
    },
    {
      "postCode": "2535",
      "suburb": "BROUGHTON VALE"
    },
    {
      "postCode": "2534",
      "suburb": "BROUGHTON VILLAGE"
    },
    {
      "postCode": "2537",
      "suburb": "BROULEE"
    },
    {
      "postCode": "2570",
      "suburb": "BROWNLOW HILL"
    },
    {
      "postCode": "2799",
      "suburb": "BROWNS CREEK"
    },
    {
      "postCode": "2540",
      "suburb": "BROWNS MOUNTAIN"
    },
    {
      "postCode": "2530",
      "suburb": "BROWNSVILLE"
    },
    {
      "postCode": "2650",
      "suburb": "BRUCEDALE"
    },
    {
      "postCode": "2875",
      "suburb": "BRUIE PLAINS"
    },
    {
      "postCode": "2795",
      "suburb": "BRUINBUN"
    },
    {
      "postCode": "2476",
      "suburb": "BRUMBY PLAINS"
    },
    {
      "postCode": "2540",
      "suburb": "BRUNDEE"
    },
    {
      "postCode": "2722",
      "suburb": "BRUNGLE"
    },
    {
      "postCode": "2722",
      "suburb": "BRUNGLE CREEK"
    },
    {
      "postCode": "2323",
      "suburb": "BRUNKERVILLE"
    },
    {
      "postCode": "2483",
      "suburb": "BRUNSWICK HEADS"
    },
    {
      "postCode": "2460",
      "suburb": "BRUSHGROVE"
    },
    {
      "postCode": "2365",
      "suburb": "BRUSHY CREEK"
    },
    {
      "postCode": "2540",
      "suburb": "BUANGLA"
    },
    {
      "postCode": "2450",
      "suburb": "BUCCA"
    },
    {
      "postCode": "2429",
      "suburb": "BUCCA WAUKA"
    },
    {
      "postCode": "2460",
      "suburb": "BUCCARUMBI"
    },
    {
      "postCode": "2323",
      "suburb": "BUCHANAN"
    },
    {
      "postCode": "2550",
      "suburb": "BUCKAJO"
    },
    {
      "postCode": "2850",
      "suburb": "BUCKAROO"
    },
    {
      "postCode": "2536",
      "suburb": "BUCKENBOWRA"
    },
    {
      "postCode": "2630",
      "suburb": "BUCKENDERRA"
    },
    {
      "postCode": "2472",
      "suburb": "BUCKENDOON"
    },
    {
      "postCode": "2250",
      "suburb": "BUCKETTY"
    },
    {
      "postCode": "2449",
      "suburb": "BUCKRA BENDINNI"
    },
    {
      "postCode": "2622",
      "suburb": "BUDAWANG"
    },
    {
      "postCode": "2825",
      "suburb": "BUDDABADAH"
    },
    {
      "postCode": "2849",
      "suburb": "BUDDEN"
    },
    {
      "postCode": "2535",
      "suburb": "BUDDEROO"
    },
    {
      "postCode": "2720",
      "suburb": "BUDDONG"
    },
    {
      "postCode": "2850",
      "suburb": "BUDGEE BUDGEE"
    },
    {
      "postCode": "2262",
      "suburb": "BUDGEWOI"
    },
    {
      "postCode": "2262",
      "suburb": "BUDGEWOI PENINSULA"
    },
    {
      "postCode": "2577",
      "suburb": "BUDGONG"
    },
    {
      "postCode": "2262",
      "suburb": "BUFF POINT"
    },
    {
      "postCode": "2357",
      "suburb": "BUGALDIE"
    },
    {
      "postCode": "2632",
      "suburb": "BUKALONG"
    },
    {
      "postCode": "2360",
      "suburb": "BUKKULLA"
    },
    {
      "postCode": "2423",
      "suburb": "BULAHDELAH"
    },
    {
      "postCode": "2622",
      "suburb": "BULEE"
    },
    {
      "postCode": "2330",
      "suburb": "BULGA"
    },
    {
      "postCode": "2429",
      "suburb": "BULGA FOREST"
    },
    {
      "postCode": "2650",
      "suburb": "BULGARY"
    },
    {
      "postCode": "2835",
      "suburb": "BULLA"
    },
    {
      "postCode": "2594",
      "suburb": "BULLA CREEK"
    },
    {
      "postCode": "2784",
      "suburb": "BULLABURRA"
    },
    {
      "postCode": "2824",
      "suburb": "BULLAGREEN"
    },
    {
      "postCode": "2400",
      "suburb": "BULLARAH"
    },
    {
      "postCode": "2710",
      "suburb": "BULLATALE"
    },
    {
      "postCode": "2390",
      "suburb": "BULLAWA CREEK"
    },
    {
      "postCode": "2469",
      "suburb": "BULLDOG"
    },
    {
      "postCode": "2516",
      "suburb": "BULLI"
    },
    {
      "postCode": "2422",
      "suburb": "BULLIAC"
    },
    {
      "postCode": "2575",
      "suburb": "BULLIO"
    },
    {
      "postCode": "2627",
      "suburb": "BULLOCKS FLAT"
    },
    {
      "postCode": "2387",
      "suburb": "BULYEROI"
    },
    {
      "postCode": "2794",
      "suburb": "BUMBALDRY"
    },
    {
      "postCode": "2626",
      "suburb": "BUMBALONG"
    },
    {
      "postCode": "2870",
      "suburb": "BUMBERRY"
    },
    {
      "postCode": "2324",
      "suburb": "BUNDABAH"
    },
    {
      "postCode": "2454",
      "suburb": "BUNDAGEN"
    },
    {
      "postCode": "2578",
      "suburb": "BUNDANOON"
    },
    {
      "postCode": "2359",
      "suburb": "BUNDARRA"
    },
    {
      "postCode": "2230",
      "suburb": "BUNDEENA"
    },
    {
      "postCode": "2343",
      "suburb": "BUNDELLA"
    },
    {
      "postCode": "2823",
      "suburb": "BUNDEMAR"
    },
    {
      "postCode": "2535",
      "suburb": "BUNDEWALLAH"
    },
    {
      "postCode": "2473",
      "suburb": "BUNDJALUNG"
    },
    {
      "postCode": "2422",
      "suburb": "BUNDOOK"
    },
    {
      "postCode": "2700",
      "suburb": "BUNDURE"
    },
    {
      "postCode": "2852",
      "suburb": "BUNGABA"
    },
    {
      "postCode": "2480",
      "suburb": "BUNGABBEE"
    },
    {
      "postCode": "2486",
      "suburb": "BUNGALORA"
    },
    {
      "postCode": "2630",
      "suburb": "BUNGARBY"
    },
    {
      "postCode": "2767",
      "suburb": "BUNGARRIBEE"
    },
    {
      "postCode": "2469",
      "suburb": "BUNGAWALBIN"
    },
    {
      "postCode": "2621",
      "suburb": "BUNGENDORE"
    },
    {
      "postCode": "2580",
      "suburb": "BUNGONIA"
    },
    {
      "postCode": "2640",
      "suburb": "BUNGOWANNAH"
    },
    {
      "postCode": "2423",
      "suburb": "BUNGWAHL"
    },
    {
      "postCode": "2731",
      "suburb": "BUNNALOO"
    },
    {
      "postCode": "2337",
      "suburb": "BUNNAN"
    },
    {
      "postCode": "2429",
      "suburb": "BUNYAH"
    },
    {
      "postCode": "2630",
      "suburb": "BUNYAN"
    },
    {
      "postCode": "2671",
      "suburb": "BURCHER"
    },
    {
      "postCode": "2328",
      "suburb": "BUREEN"
    },
    {
      "postCode": "2440",
      "suburb": "BURNT BRIDGE"
    },
    {
      "postCode": "2792",
      "suburb": "BURNT YARDS"
    },
    {
      "postCode": "2739",
      "suburb": "BURONGA"
    },
    {
      "postCode": "2620",
      "suburb": "BURRA"
    },
    {
      "postCode": "2653",
      "suburb": "BURRA"
    },
    {
      "postCode": "2722",
      "suburb": "BURRA CREEK"
    },
    {
      "postCode": "2732",
      "suburb": "BURRABOI"
    },
    {
      "postCode": "2576",
      "suburb": "BURRADOO"
    },
    {
      "postCode": "2795",
      "suburb": "BURRAGA"
    },
    {
      "postCode": "2550",
      "suburb": "BURRAGATE"
    },
    {
      "postCode": "2650",
      "suburb": "BURRANDANA"
    },
    {
      "postCode": "2230",
      "suburb": "BURRANEER"
    },
    {
      "postCode": "2594",
      "suburb": "BURRANGONG"
    },
    {
      "postCode": "2447",
      "suburb": "BURRAPINE"
    },
    {
      "postCode": "2577",
      "suburb": "BURRAWANG"
    },
    {
      "postCode": "2429",
      "suburb": "BURRELL CREEK"
    },
    {
      "postCode": "2386",
      "suburb": "BURREN JUNCTION"
    },
    {
      "postCode": "2540",
      "suburb": "BURRIER"
    },
    {
      "postCode": "2539",
      "suburb": "BURRILL LAKE"
    },
    {
      "postCode": "2483",
      "suburb": "BURRINGBAR"
    },
    {
      "postCode": "2582",
      "suburb": "BURRINJUCK"
    },
    {
      "postCode": "2821",
      "suburb": "BURROWAY"
    },
    {
      "postCode": "2642",
      "suburb": "BURRUMBUTTOCK"
    },
    {
      "postCode": "2850",
      "suburb": "BURRUNDULLA"
    },
    {
      "postCode": "2627",
      "suburb": "BURRUNGUBUGGE"
    },
    {
      "postCode": "1805",
      "suburb": "BURWOOD"
    },
    {
      "postCode": "2134",
      "suburb": "BURWOOD"
    },
    {
      "postCode": "2136",
      "suburb": "BURWOOD HEIGHTS"
    },
    {
      "postCode": "2134",
      "suburb": "BURWOOD NORTH"
    },
    {
      "postCode": "2168",
      "suburb": "BUSBY"
    },
    {
      "postCode": "2469",
      "suburb": "BUSBYS FLAT"
    },
    {
      "postCode": "2259",
      "suburb": "BUSHELLS RIDGE"
    },
    {
      "postCode": "2283",
      "suburb": "BUTTABA"
    },
    {
      "postCode": "2323",
      "suburb": "BUTTAI"
    },
    {
      "postCode": "2321",
      "suburb": "BUTTERWICK"
    },
    {
      "postCode": "2571",
      "suburb": "BUXTON"
    },
    {
      "postCode": "2446",
      "suburb": "BYABARRA"
    },
    {
      "postCode": "2628",
      "suburb": "BYADBO WILDERNESS"
    },
    {
      "postCode": "2484",
      "suburb": "BYANGUM"
    },
    {
      "postCode": "2849",
      "suburb": "BYLONG"
    },
    {
      "postCode": "2800",
      "suburb": "BYNG"
    },
    {
      "postCode": "2831",
      "suburb": "BYROCK"
    },
    {
      "postCode": "2481",
      "suburb": "BYRON BAY"
    },
    {
      "postCode": "2484",
      "suburb": "BYRRILL CREEK"
    },
    {
      "postCode": "2621",
      "suburb": "BYWONG"
    },
    {
      "postCode": "2137",
      "suburb": "CABARITA"
    },
    {
      "postCode": "2488",
      "suburb": "CABARITA BEACH"
    },
    {
      "postCode": "2430",
      "suburb": "CABBAGE TREE ISLAND"
    },
    {
      "postCode": "2477",
      "suburb": "CABBAGE TREE ISLAND"
    },
    {
      "postCode": "2166",
      "suburb": "CABRAMATTA"
    },
    {
      "postCode": "2166",
      "suburb": "CABRAMATTA WEST"
    },
    {
      "postCode": "2629",
      "suburb": "CABRAMURRA"
    },
    {
      "postCode": "2747",
      "suburb": "CADDENS"
    },
    {
      "postCode": "2545",
      "suburb": "CADGEE"
    },
    {
      "postCode": "2800",
      "suburb": "CADIA"
    },
    {
      "postCode": "2850",
      "suburb": "CAERLEON"
    },
    {
      "postCode": "2424",
      "suburb": "CAFFREYS FLAT"
    },
    {
      "postCode": "2446",
      "suburb": "CAIRNCROSS"
    },
    {
      "postCode": "2340",
      "suburb": "CALALA"
    },
    {
      "postCode": "2460",
      "suburb": "CALAMIA"
    },
    {
      "postCode": "2527",
      "suburb": "CALDERWOOD"
    },
    {
      "postCode": "2710",
      "suburb": "CALDWELL"
    },
    {
      "postCode": "2250",
      "suburb": "CALGA"
    },
    {
      "postCode": "2729",
      "suburb": "CALIFAT"
    },
    {
      "postCode": "2710",
      "suburb": "CALIMO"
    },
    {
      "postCode": "2308",
      "suburb": "CALLAGHAN"
    },
    {
      "postCode": "2422",
      "suburb": "CALLAGHANS CREEK"
    },
    {
      "postCode": "2540",
      "suburb": "CALLALA BAY"
    },
    {
      "postCode": "2540",
      "suburb": "CALLALA BEACH"
    },
    {
      "postCode": "2462",
      "suburb": "CALLIOPE"
    },
    {
      "postCode": "2795",
      "suburb": "CALOOLA"
    },
    {
      "postCode": "2632",
      "suburb": "CAMBALONG"
    },
    {
      "postCode": "2330",
      "suburb": "CAMBERWELL"
    },
    {
      "postCode": "2540",
      "suburb": "CAMBEWARRA"
    },
    {
      "postCode": "2540",
      "suburb": "CAMBEWARRA VILLAGE"
    },
    {
      "postCode": "2849",
      "suburb": "CAMBOON"
    },
    {
      "postCode": "2420",
      "suburb": "CAMBRA"
    },
    {
      "postCode": "2747",
      "suburb": "CAMBRIDGE GARDENS"
    },
    {
      "postCode": "2747",
      "suburb": "CAMBRIDGE PARK"
    },
    {
      "postCode": "2469",
      "suburb": "CAMBRIDGE PLATEAU"
    },
    {
      "postCode": "2570",
      "suburb": "CAMDEN"
    },
    {
      "postCode": "2443",
      "suburb": "CAMDEN HEAD"
    },
    {
      "postCode": "2570",
      "suburb": "CAMDEN PARK"
    },
    {
      "postCode": "2570",
      "suburb": "CAMDEN SOUTH"
    },
    {
      "postCode": "2142",
      "suburb": "CAMELLIA"
    },
    {
      "postCode": "2285",
      "suburb": "CAMERON PARK"
    },
    {
      "postCode": "2359",
      "suburb": "CAMERONS CREEK"
    },
    {
      "postCode": "2469",
      "suburb": "CAMIRA"
    },
    {
      "postCode": "2062",
      "suburb": "CAMMERAY"
    },
    {
      "postCode": "4385",
      "suburb": "CAMP CREEK"
    },
    {
      "postCode": "2560",
      "suburb": "CAMPBELLTOWN"
    },
    {
      "postCode": "2560",
      "suburb": "CAMPBELLTOWN NORTH"
    },
    {
      "postCode": "1450",
      "suburb": "CAMPERDOWN"
    },
    {
      "postCode": "2050",
      "suburb": "CAMPERDOWN"
    },
    {
      "postCode": "2194",
      "suburb": "CAMPSIE"
    },
    {
      "postCode": "2318",
      "suburb": "CAMPVALE"
    },
    {
      "postCode": "2281",
      "suburb": "CAMS WHARF"
    },
    {
      "postCode": "2046",
      "suburb": "CANADA BAY"
    },
    {
      "postCode": "2850",
      "suburb": "CANADIAN LEAD"
    },
    {
      "postCode": "2835",
      "suburb": "CANBELEGO"
    },
    {
      "postCode": "2550",
      "suburb": "CANDELO"
    },
    {
      "postCode": "2460",
      "suburb": "CANGAI"
    },
    {
      "postCode": "2480",
      "suburb": "CANIABA"
    },
    {
      "postCode": "2166",
      "suburb": "CANLEY HEIGHTS"
    },
    {
      "postCode": "2166",
      "suburb": "CANLEY VALE"
    },
    {
      "postCode": "2800",
      "suburb": "CANOBOLAS"
    },
    {
      "postCode": "2157",
      "suburb": "CANOELANDS"
    },
    {
      "postCode": "2825",
      "suburb": "CANONBA"
    },
    {
      "postCode": "2804",
      "suburb": "CANOWINDRA"
    },
    {
      "postCode": "2193",
      "suburb": "CANTERBURY"
    },
    {
      "postCode": "2263",
      "suburb": "CANTON BEACH"
    },
    {
      "postCode": "2577",
      "suburb": "CANYONLEIGH"
    },
    {
      "postCode": "2429",
      "suburb": "CAPARRA"
    },
    {
      "postCode": "2469",
      "suburb": "CAPEEN CREEK"
    },
    {
      "postCode": "2846",
      "suburb": "CAPERTEE"
    },
    {
      "postCode": "2371",
      "suburb": "CAPOOMPETA"
    },
    {
      "postCode": "2623",
      "suburb": "CAPTAINS FLAT"
    },
    {
      "postCode": "2650",
      "suburb": "CARABOST"
    },
    {
      "postCode": "2810",
      "suburb": "CARAGABAL"
    },
    {
      "postCode": "2850",
      "suburb": "CARCALGONG"
    },
    {
      "postCode": "2791",
      "suburb": "CARCOAR"
    },
    {
      "postCode": "2285",
      "suburb": "CARDIFF"
    },
    {
      "postCode": "2285",
      "suburb": "CARDIFF HEIGHTS"
    },
    {
      "postCode": "2285",
      "suburb": "CARDIFF SOUTH"
    },
    {
      "postCode": "2283",
      "suburb": "CAREY BAY"
    },
    {
      "postCode": "2800",
      "suburb": "CARGO"
    },
    {
      "postCode": "2831",
      "suburb": "CARINDA"
    },
    {
      "postCode": "1495",
      "suburb": "CARINGBAH"
    },
    {
      "postCode": "2229",
      "suburb": "CARINGBAH"
    },
    {
      "postCode": "2229",
      "suburb": "CARINGBAH SOUTH"
    },
    {
      "postCode": "2630",
      "suburb": "CARLAMINDA"
    },
    {
      "postCode": "2118",
      "suburb": "CARLINGFORD"
    },
    {
      "postCode": "2118",
      "suburb": "CARLINGFORD COURT"
    },
    {
      "postCode": "2118",
      "suburb": "CARLINGFORD NORTH"
    },
    {
      "postCode": "2218",
      "suburb": "CARLTON"
    },
    {
      "postCode": "2171",
      "suburb": "CARNES HILL"
    },
    {
      "postCode": "2460",
      "suburb": "CARNHAM"
    },
    {
      "postCode": "2486",
      "suburb": "CAROOL"
    },
    {
      "postCode": "2343",
      "suburb": "CAROONA"
    },
    {
      "postCode": "2311",
      "suburb": "CARRABOLLA"
    },
    {
      "postCode": "2440",
      "suburb": "CARRAI"
    },
    {
      "postCode": "2163",
      "suburb": "CARRAMAR"
    },
    {
      "postCode": "2711",
      "suburb": "CARRATHOOL"
    },
    {
      "postCode": "2580",
      "suburb": "CARRICK"
    },
    {
      "postCode": "2294",
      "suburb": "CARRINGTON"
    },
    {
      "postCode": "2324",
      "suburb": "CARRINGTON"
    },
    {
      "postCode": "2577",
      "suburb": "CARRINGTON FALLS"
    },
    {
      "postCode": "2340",
      "suburb": "CARROLL"
    },
    {
      "postCode": "2372",
      "suburb": "CARROLLS CREEK"
    },
    {
      "postCode": "2330",
      "suburb": "CARROWBROOK"
    },
    {
      "postCode": "2460",
      "suburb": "CARRS CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "CARRS ISLAND"
    },
    {
      "postCode": "2460",
      "suburb": "CARRS PENINSULA"
    },
    {
      "postCode": "2221",
      "suburb": "CARSS PARK"
    },
    {
      "postCode": "2168",
      "suburb": "CARTWRIGHT"
    },
    {
      "postCode": "2650",
      "suburb": "CARTWRIGHTS HILL"
    },
    {
      "postCode": "2849",
      "suburb": "CARWELL"
    },
    {
      "postCode": "2620",
      "suburb": "CARWOOLA"
    },
    {
      "postCode": "2453",
      "suburb": "CASCADE"
    },
    {
      "postCode": "2470",
      "suburb": "CASINO"
    },
    {
      "postCode": "2329",
      "suburb": "CASSILIS"
    },
    {
      "postCode": "2069",
      "suburb": "CASTLE COVE"
    },
    {
      "postCode": "2350",
      "suburb": "CASTLE DOYLE"
    },
    {
      "postCode": "1765",
      "suburb": "CASTLE HILL"
    },
    {
      "postCode": "2154",
      "suburb": "CASTLE HILL"
    },
    {
      "postCode": "2333",
      "suburb": "CASTLE ROCK"
    },
    {
      "postCode": "2068",
      "suburb": "CASTLECRAG"
    },
    {
      "postCode": "2749",
      "suburb": "CASTLEREAGH"
    },
    {
      "postCode": "2487",
      "suburb": "CASUARINA"
    },
    {
      "postCode": "2170",
      "suburb": "CASULA"
    },
    {
      "postCode": "2170",
      "suburb": "CASULA MALL"
    },
    {
      "postCode": "2536",
      "suburb": "CATALINA"
    },
    {
      "postCode": "2560",
      "suburb": "CATARACT"
    },
    {
      "postCode": "2632",
      "suburb": "CATHCART"
    },
    {
      "postCode": "2557",
      "suburb": "CATHERINE FIELD"
    },
    {
      "postCode": "2281",
      "suburb": "CATHERINE HILL BAY"
    },
    {
      "postCode": "2823",
      "suburb": "CATHUNDRAL"
    },
    {
      "postCode": "2756",
      "suburb": "CATTAI"
    },
    {
      "postCode": "2339",
      "suburb": "CATTLE CREEK"
    },
    {
      "postCode": "2582",
      "suburb": "CAVAN"
    },
    {
      "postCode": "2281",
      "suburb": "CAVES BEACH"
    },
    {
      "postCode": "2570",
      "suburb": "CAWDOR"
    },
    {
      "postCode": "2474",
      "suburb": "CAWONGLA"
    },
    {
      "postCode": "2171",
      "suburb": "CECIL HILLS"
    },
    {
      "postCode": "2178",
      "suburb": "CECIL PARK"
    },
    {
      "postCode": "2259",
      "suburb": "CEDAR BRUSH CREEK"
    },
    {
      "postCode": "2325",
      "suburb": "CEDAR CREEK"
    },
    {
      "postCode": "2484",
      "suburb": "CEDAR CREEK"
    },
    {
      "postCode": "2429",
      "suburb": "CEDAR PARTY"
    },
    {
      "postCode": "2474",
      "suburb": "CEDAR POINT"
    },
    {
      "postCode": "2424",
      "suburb": "CELLS RIVER"
    },
    {
      "postCode": "2021",
      "suburb": "CENTENNIAL PARK"
    },
    {
      "postCode": "2252",
      "suburb": "CENTRAL COAST MC"
    },
    {
      "postCode": "2756",
      "suburb": "CENTRAL COLO"
    },
    {
      "postCode": "2775",
      "suburb": "CENTRAL MACDONALD"
    },
    {
      "postCode": "2250",
      "suburb": "CENTRAL MANGROVE"
    },
    {
      "postCode": "2546",
      "suburb": "CENTRAL TILBA"
    },
    {
      "postCode": "2325",
      "suburb": "CESSNOCK"
    },
    {
      "postCode": "2325",
      "suburb": "CESSNOCK WEST"
    },
    {
      "postCode": "2460",
      "suburb": "CHAELUNDI"
    },
    {
      "postCode": "2259",
      "suburb": "CHAIN VALLEY BAY"
    },
    {
      "postCode": "2630",
      "suburb": "CHAKOLA"
    },
    {
      "postCode": "2460",
      "suburb": "CHAMBIGNE"
    },
    {
      "postCode": "2848",
      "suburb": "CHARBON"
    },
    {
      "postCode": "2678",
      "suburb": "CHARLES STURT UNIVERSITY"
    },
    {
      "postCode": "2795",
      "suburb": "CHARLES STURT UNIVERSITY"
    },
    {
      "postCode": "2290",
      "suburb": "CHARLESTOWN"
    },
    {
      "postCode": "2622",
      "suburb": "CHARLEYS FOREST"
    },
    {
      "postCode": "2428",
      "suburb": "CHARLOTTE BAY"
    },
    {
      "postCode": "2624",
      "suburb": "CHARLOTTE PASS"
    },
    {
      "postCode": "2795",
      "suburb": "CHARLTON"
    },
    {
      "postCode": "2263",
      "suburb": "CHARMHAVEN"
    },
    {
      "postCode": "2430",
      "suburb": "CHATHAM"
    },
    {
      "postCode": "2787",
      "suburb": "CHATHAM VALLEY"
    },
    {
      "postCode": "2580",
      "suburb": "CHATSBURY"
    },
    {
      "postCode": "2057",
      "suburb": "CHATSWOOD"
    },
    {
      "postCode": "2067",
      "suburb": "CHATSWOOD"
    },
    {
      "postCode": "2067",
      "suburb": "CHATSWOOD WEST"
    },
    {
      "postCode": "2469",
      "suburb": "CHATSWORTH"
    },
    {
      "postCode": "2083",
      "suburb": "CHEERO POINT"
    },
    {
      "postCode": "2119",
      "suburb": "CHELTENHAM"
    },
    {
      "postCode": "2360",
      "suburb": "CHERRY TREE HILL"
    },
    {
      "postCode": "2126",
      "suburb": "CHERRYBROOK"
    },
    {
      "postCode": "2162",
      "suburb": "CHESTER HILL"
    },
    {
      "postCode": "2420",
      "suburb": "CHICHESTER"
    },
    {
      "postCode": "2036",
      "suburb": "CHIFLEY"
    },
    {
      "postCode": "2339",
      "suburb": "CHILCOTTS CREEK"
    },
    {
      "postCode": "2480",
      "suburb": "CHILCOTTS GRASS"
    },
    {
      "postCode": "2484",
      "suburb": "CHILLINGHAM"
    },
    {
      "postCode": "2487",
      "suburb": "CHINDERAH"
    },
    {
      "postCode": "2550",
      "suburb": "CHINNOCK"
    },
    {
      "postCode": "2008",
      "suburb": "CHIPPENDALE"
    },
    {
      "postCode": "2170",
      "suburb": "CHIPPING NORTON"
    },
    {
      "postCode": "2322",
      "suburb": "CHISHOLM"
    },
    {
      "postCode": "2046",
      "suburb": "CHISWICK"
    },
    {
      "postCode": "2261",
      "suburb": "CHITTAWAY BAY"
    },
    {
      "postCode": "2261",
      "suburb": "CHITTAWAY POINT"
    },
    {
      "postCode": "2484",
      "suburb": "CHOWAN CREEK"
    },
    {
      "postCode": "1405",
      "suburb": "CHULLORA"
    },
    {
      "postCode": "2190",
      "suburb": "CHULLORA"
    },
    {
      "postCode": "2105",
      "suburb": "CHURCH POINT"
    },
    {
      "postCode": "2848",
      "suburb": "CLANDULLA"
    },
    {
      "postCode": "2711",
      "suburb": "CLARE"
    },
    {
      "postCode": "2747",
      "suburb": "CLAREMONT MEADOWS"
    },
    {
      "postCode": "2790",
      "suburb": "CLARENCE"
    },
    {
      "postCode": "2321",
      "suburb": "CLARENCE TOWN"
    },
    {
      "postCode": "2756",
      "suburb": "CLARENDON"
    },
    {
      "postCode": "2460",
      "suburb": "CLARENZA"
    },
    {
      "postCode": "2107",
      "suburb": "CLAREVILLE"
    },
    {
      "postCode": "2559",
      "suburb": "CLAYMORE"
    },
    {
      "postCode": "2795",
      "suburb": "CLEAR CREEK"
    },
    {
      "postCode": "2620",
      "suburb": "CLEAR RANGE"
    },
    {
      "postCode": "2469",
      "suburb": "CLEARFIELD"
    },
    {
      "postCode": "2206",
      "suburb": "CLEMTON PARK"
    },
    {
      "postCode": "2800",
      "suburb": "CLERGATE"
    },
    {
      "postCode": "2530",
      "suburb": "CLEVELAND"
    },
    {
      "postCode": "2460",
      "suburb": "CLIFDEN"
    },
    {
      "postCode": "2321",
      "suburb": "CLIFTLEIGH"
    },
    {
      "postCode": "2515",
      "suburb": "CLIFTON"
    },
    {
      "postCode": "2800",
      "suburb": "CLIFTON GROVE"
    },
    {
      "postCode": "2093",
      "suburb": "CLONTARF"
    },
    {
      "postCode": "2484",
      "suburb": "CLOTHIERS CREEK"
    },
    {
      "postCode": "2453",
      "suburb": "CLOUDS CREEK"
    },
    {
      "postCode": "2480",
      "suburb": "CLOVASS"
    },
    {
      "postCode": "2031",
      "suburb": "CLOVELLY"
    },
    {
      "postCode": "2031",
      "suburb": "CLOVELLY WEST"
    },
    {
      "postCode": "2480",
      "suburb": "CLUNES"
    },
    {
      "postCode": "2440",
      "suburb": "CLYBUCCA"
    },
    {
      "postCode": "2142",
      "suburb": "CLYDE"
    },
    {
      "postCode": "2330",
      "suburb": "CLYDESDALE"
    },
    {
      "postCode": "2283",
      "suburb": "COAL POINT"
    },
    {
      "postCode": "2508",
      "suburb": "COALCLIFF"
    },
    {
      "postCode": "2460",
      "suburb": "COALDALE"
    },
    {
      "postCode": "2108",
      "suburb": "COASTERS RETREAT"
    },
    {
      "postCode": "2486",
      "suburb": "COBAKI"
    },
    {
      "postCode": "2486",
      "suburb": "COBAKI LAKES"
    },
    {
      "postCode": "2835",
      "suburb": "COBAR"
    },
    {
      "postCode": "2790",
      "suburb": "COBAR PARK"
    },
    {
      "postCode": "2550",
      "suburb": "COBARGO"
    },
    {
      "postCode": "2422",
      "suburb": "COBARK"
    },
    {
      "postCode": "2347",
      "suburb": "COBBADAH"
    },
    {
      "postCode": "2570",
      "suburb": "COBBITTY"
    },
    {
      "postCode": "2844",
      "suburb": "COBBORA"
    },
    {
      "postCode": "2732",
      "suburb": "COBRAMUNGA"
    },
    {
      "postCode": "2539",
      "suburb": "COCKWHY"
    },
    {
      "postCode": "2471",
      "suburb": "CODRINGTON"
    },
    {
      "postCode": "2480",
      "suburb": "COFFEE CAMP"
    },
    {
      "postCode": "2450",
      "suburb": "COFFS HARBOUR"
    },
    {
      "postCode": "2450",
      "suburb": "COFFS HARBOUR DC"
    },
    {
      "postCode": "2450",
      "suburb": "COFFS HARBOUR JETTY"
    },
    {
      "postCode": "2450",
      "suburb": "COFFS HARBOUR PLAZA"
    },
    {
      "postCode": "2849",
      "suburb": "COGGAN"
    },
    {
      "postCode": "2083",
      "suburb": "COGRA BAY"
    },
    {
      "postCode": "2537",
      "suburb": "COILA"
    },
    {
      "postCode": "2462",
      "suburb": "COLDSTREAM"
    },
    {
      "postCode": "2707",
      "suburb": "COLEAMBALLY"
    },
    {
      "postCode": "2761",
      "suburb": "COLEBEE"
    },
    {
      "postCode": "2515",
      "suburb": "COLEDALE"
    },
    {
      "postCode": "2700",
      "suburb": "COLINROOBIE"
    },
    {
      "postCode": "2626",
      "suburb": "COLINTON"
    },
    {
      "postCode": "2833",
      "suburb": "COLLARENEBRI"
    },
    {
      "postCode": "2097",
      "suburb": "COLLAROY"
    },
    {
      "postCode": "2097",
      "suburb": "COLLAROY BEACH"
    },
    {
      "postCode": "2097",
      "suburb": "COLLAROY PLATEAU"
    },
    {
      "postCode": "2581",
      "suburb": "COLLECTOR"
    },
    {
      "postCode": "2646",
      "suburb": "COLLENDINA"
    },
    {
      "postCode": "2839",
      "suburb": "COLLERINA"
    },
    {
      "postCode": "2827",
      "suburb": "COLLIE"
    },
    {
      "postCode": "2650",
      "suburb": "COLLINGULLIE"
    },
    {
      "postCode": "2850",
      "suburb": "COLLINGWOOD"
    },
    {
      "postCode": "2474",
      "suburb": "COLLINS CREEK"
    },
    {
      "postCode": "2440",
      "suburb": "COLLOMBATTI"
    },
    {
      "postCode": "2460",
      "suburb": "COLLUM COLLUM"
    },
    {
      "postCode": "2343",
      "suburb": "COLLY BLUE"
    },
    {
      "postCode": "2756",
      "suburb": "COLO"
    },
    {
      "postCode": "2795",
      "suburb": "COLO"
    },
    {
      "postCode": "2756",
      "suburb": "COLO HEIGHTS"
    },
    {
      "postCode": "2575",
      "suburb": "COLO VALE"
    },
    {
      "postCode": "2262",
      "suburb": "COLONGRA"
    },
    {
      "postCode": "2760",
      "suburb": "COLYTON"
    },
    {
      "postCode": "2440",
      "suburb": "COMARA"
    },
    {
      "postCode": "2666",
      "suburb": "COMBANING"
    },
    {
      "postCode": "2829",
      "suburb": "COMBARA"
    },
    {
      "postCode": "2540",
      "suburb": "COMBERTON"
    },
    {
      "postCode": "2330",
      "suburb": "COMBO"
    },
    {
      "postCode": "2429",
      "suburb": "COMBOYNE"
    },
    {
      "postCode": "2832",
      "suburb": "COME BY CHANCE"
    },
    {
      "postCode": "2540",
      "suburb": "COMERONG ISLAND"
    },
    {
      "postCode": "2484",
      "suburb": "COMMISSIONERS CREEK"
    },
    {
      "postCode": "2226",
      "suburb": "COMO"
    },
    {
      "postCode": "2820",
      "suburb": "COMOBELLA"
    },
    {
      "postCode": "2710",
      "suburb": "CONARGO"
    },
    {
      "postCode": "2137",
      "suburb": "CONCORD"
    },
    {
      "postCode": "2139",
      "suburb": "CONCORD REPATRIATION HOSPITAL"
    },
    {
      "postCode": "2138",
      "suburb": "CONCORD WEST"
    },
    {
      "postCode": "2138",
      "suburb": "CONCORD WEST DC"
    },
    {
      "postCode": "2200",
      "suburb": "CONDELL PARK"
    },
    {
      "postCode": "2877",
      "suburb": "CONDOBOLIN"
    },
    {
      "postCode": "2484",
      "suburb": "CONDONG"
    },
    {
      "postCode": "2422",
      "suburb": "CONEAC"
    },
    {
      "postCode": "2447",
      "suburb": "CONGARINNI"
    },
    {
      "postCode": "2447",
      "suburb": "CONGARINNI NORTH"
    },
    {
      "postCode": "2325",
      "suburb": "CONGEWAI"
    },
    {
      "postCode": "2537",
      "suburb": "CONGO"
    },
    {
      "postCode": "2829",
      "suburb": "CONIMBIA"
    },
    {
      "postCode": "2500",
      "suburb": "CONISTON"
    },
    {
      "postCode": "2539",
      "suburb": "CONJOLA"
    },
    {
      "postCode": "2539",
      "suburb": "CONJOLA PARK"
    },
    {
      "postCode": "2221",
      "suburb": "CONNELLS POINT"
    },
    {
      "postCode": "2145",
      "suburb": "CONSTITUTION HILL"
    },
    {
      "postCode": "2034",
      "suburb": "COOGEE"
    },
    {
      "postCode": "2870",
      "suburb": "COOKAMIDGERA"
    },
    {
      "postCode": "2650",
      "suburb": "COOKARDINIA"
    },
    {
      "postCode": "2850",
      "suburb": "COOKS GAP"
    },
    {
      "postCode": "2300",
      "suburb": "COOKS HILL"
    },
    {
      "postCode": "2870",
      "suburb": "COOKS MYALLS"
    },
    {
      "postCode": "2831",
      "suburb": "COOLABAH"
    },
    {
      "postCode": "2727",
      "suburb": "COOLAC"
    },
    {
      "postCode": "2550",
      "suburb": "COOLAGOLITE"
    },
    {
      "postCode": "2843",
      "suburb": "COOLAH"
    },
    {
      "postCode": "2701",
      "suburb": "COOLAMON"
    },
    {
      "postCode": "2535",
      "suburb": "COOLANGATTA"
    },
    {
      "postCode": "2550",
      "suburb": "COOLANGUBRA"
    },
    {
      "postCode": "2402",
      "suburb": "COOLATAI"
    },
    {
      "postCode": "2611",
      "suburb": "COOLEMAN"
    },
    {
      "postCode": "2729",
      "suburb": "COOLEYS CREEK"
    },
    {
      "postCode": "2478",
      "suburb": "COOLGARDIE"
    },
    {
      "postCode": "2423",
      "suburb": "COOLONGOLOOK"
    },
    {
      "postCode": "2630",
      "suburb": "COOLRINGDON"
    },
    {
      "postCode": "2632",
      "suburb": "COOLUMBOOKA"
    },
    {
      "postCode": "2622",
      "suburb": "COOLUMBURRA"
    },
    {
      "postCode": "2630",
      "suburb": "COOMA"
    },
    {
      "postCode": "2428",
      "suburb": "COOMBA BAY"
    },
    {
      "postCode": "2428",
      "suburb": "COOMBA PARK"
    },
    {
      "postCode": "2460",
      "suburb": "COOMBADJHA"
    },
    {
      "postCode": "2470",
      "suburb": "COOMBELL"
    },
    {
      "postCode": "2717",
      "suburb": "COOMEALLA"
    },
    {
      "postCode": "2343",
      "suburb": "COOMOO COOMOO"
    },
    {
      "postCode": "2357",
      "suburb": "COONABARABRAN"
    },
    {
      "postCode": "2829",
      "suburb": "COONAMBLE"
    },
    {
      "postCode": "2726",
      "suburb": "COONEYS CREEK"
    },
    {
      "postCode": "2469",
      "suburb": "COONGBAR"
    },
    {
      "postCode": "2441",
      "suburb": "COOPERABUNG"
    },
    {
      "postCode": "2426",
      "suburb": "COOPERNOOK"
    },
    {
      "postCode": "2550",
      "suburb": "COOPERS GULLY"
    },
    {
      "postCode": "2479",
      "suburb": "COOPERS SHOOT"
    },
    {
      "postCode": "2424",
      "suburb": "COOPLACURRIPA"
    },
    {
      "postCode": "2479",
      "suburb": "COORABELL"
    },
    {
      "postCode": "2265",
      "suburb": "COORANBONG"
    },
    {
      "postCode": "2590",
      "suburb": "COOTAMUNDRA"
    },
    {
      "postCode": "2628",
      "suburb": "COOTRALANTRA"
    },
    {
      "postCode": "2850",
      "suburb": "COOYAL"
    },
    {
      "postCode": "2251",
      "suburb": "COPACABANA"
    },
    {
      "postCode": "2852",
      "suburb": "COPE"
    },
    {
      "postCode": "2422",
      "suburb": "COPELAND"
    },
    {
      "postCode": "2360",
      "suburb": "COPETON"
    },
    {
      "postCode": "2460",
      "suburb": "COPMANHURST"
    },
    {
      "postCode": "2644",
      "suburb": "COPPABELLA"
    },
    {
      "postCode": "2795",
      "suburb": "COPPERHANNIA"
    },
    {
      "postCode": "2471",
      "suburb": "CORAKI"
    },
    {
      "postCode": "2443",
      "suburb": "CORALVILLE"
    },
    {
      "postCode": "2450",
      "suburb": "CORAMBA"
    },
    {
      "postCode": "2622",
      "suburb": "CORANG"
    },
    {
      "postCode": "2440",
      "suburb": "CORANGULA"
    },
    {
      "postCode": "2705",
      "suburb": "CORBIE HILL"
    },
    {
      "postCode": "2526",
      "suburb": "CORDEAUX"
    },
    {
      "postCode": "2526",
      "suburb": "CORDEAUX HEIGHTS"
    },
    {
      "postCode": "2710",
      "suburb": "COREE"
    },
    {
      "postCode": "2646",
      "suburb": "COREEN"
    },
    {
      "postCode": "2456",
      "suburb": "CORINDI BEACH"
    },
    {
      "postCode": "2871",
      "suburb": "CORINELLA"
    },
    {
      "postCode": "2315",
      "suburb": "CORLETTE"
    },
    {
      "postCode": "2480",
      "suburb": "CORNDALE"
    },
    {
      "postCode": "2790",
      "suburb": "CORNEY TOWN"
    },
    {
      "postCode": "2756",
      "suburb": "CORNWALLIS"
    },
    {
      "postCode": "2700",
      "suburb": "COROBIMILLA"
    },
    {
      "postCode": "2646",
      "suburb": "COROWA"
    },
    {
      "postCode": "2325",
      "suburb": "CORRABARE"
    },
    {
      "postCode": "2518",
      "suburb": "CORRIMAL"
    },
    {
      "postCode": "2518",
      "suburb": "CORRIMAL EAST"
    },
    {
      "postCode": "2711",
      "suburb": "CORRONG"
    },
    {
      "postCode": "2633",
      "suburb": "CORROWONG"
    },
    {
      "postCode": "2546",
      "suburb": "CORUNNA"
    },
    {
      "postCode": "2084",
      "suburb": "COTTAGE POINT"
    },
    {
      "postCode": "4375",
      "suburb": "COTTONVALE"
    },
    {
      "postCode": "2474",
      "suburb": "COUGAL"
    },
    {
      "postCode": "2630",
      "suburb": "COUNTEGANY"
    },
    {
      "postCode": "2653",
      "suburb": "COURABYRA"
    },
    {
      "postCode": "2390",
      "suburb": "COURADDA"
    },
    {
      "postCode": "2720",
      "suburb": "COURAGAGO"
    },
    {
      "postCode": "2571",
      "suburb": "COURIDJAH"
    },
    {
      "postCode": "2460",
      "suburb": "COUTTS CROSSING"
    },
    {
      "postCode": "2795",
      "suburb": "COW FLAT"
    },
    {
      "postCode": "2652",
      "suburb": "COWABBIE"
    },
    {
      "postCode": "2081",
      "suburb": "COWAN"
    },
    {
      "postCode": "2460",
      "suburb": "COWPER"
    },
    {
      "postCode": "2794",
      "suburb": "COWRA"
    },
    {
      "postCode": "2849",
      "suburb": "COXS CREEK"
    },
    {
      "postCode": "2849",
      "suburb": "COXS CROWN"
    },
    {
      "postCode": "2483",
      "suburb": "CRABBES CREEK"
    },
    {
      "postCode": "2627",
      "suburb": "CRACKENBACK"
    },
    {
      "postCode": "2632",
      "suburb": "CRAIGIE"
    },
    {
      "postCode": "2749",
      "suburb": "CRANEBROOK"
    },
    {
      "postCode": "2259",
      "suburb": "CRANGAN BAY"
    },
    {
      "postCode": "2422",
      "suburb": "CRAVEN"
    },
    {
      "postCode": "2422",
      "suburb": "CRAVEN PLATEAU"
    },
    {
      "postCode": "2423",
      "suburb": "CRAWFORD RIVER"
    },
    {
      "postCode": "2338",
      "suburb": "CRAWNEY"
    },
    {
      "postCode": "2627",
      "suburb": "CREEL BAY"
    },
    {
      "postCode": "2631",
      "suburb": "CREEWAH"
    },
    {
      "postCode": "2090",
      "suburb": "CREMORNE"
    },
    {
      "postCode": "2090",
      "suburb": "CREMORNE JUNCTION"
    },
    {
      "postCode": "2090",
      "suburb": "CREMORNE POINT"
    },
    {
      "postCode": "2440",
      "suburb": "CRESCENT HEAD"
    },
    {
      "postCode": "2620",
      "suburb": "CRESTWOOD"
    },
    {
      "postCode": "2502",
      "suburb": "CRINGILA"
    },
    {
      "postCode": "2430",
      "suburb": "CROKI"
    },
    {
      "postCode": "2099",
      "suburb": "CROMER"
    },
    {
      "postCode": "2230",
      "suburb": "CRONULLA"
    },
    {
      "postCode": "2400",
      "suburb": "CROOBLE"
    },
    {
      "postCode": "2539",
      "suburb": "CROOBYAR"
    },
    {
      "postCode": "2583",
      "suburb": "CROOKED CORNER"
    },
    {
      "postCode": "2583",
      "suburb": "CROOKWELL"
    },
    {
      "postCode": "2527",
      "suburb": "CROOM"
    },
    {
      "postCode": "2411",
      "suburb": "CROPPA CREEK"
    },
    {
      "postCode": "2850",
      "suburb": "CROSS ROADS"
    },
    {
      "postCode": "2446",
      "suburb": "CROSSLANDS"
    },
    {
      "postCode": "2280",
      "suburb": "CROUDACE BAY"
    },
    {
      "postCode": "2443",
      "suburb": "CROWDY BAY"
    },
    {
      "postCode": "2427",
      "suburb": "CROWDY HEAD"
    },
    {
      "postCode": "1585",
      "suburb": "CROWS NEST"
    },
    {
      "postCode": "2065",
      "suburb": "CROWS NEST"
    },
    {
      "postCode": "2065",
      "suburb": "CROWS NEST DC"
    },
    {
      "postCode": "2803",
      "suburb": "CROWTHER"
    },
    {
      "postCode": "2460",
      "suburb": "CROWTHER ISLAND"
    },
    {
      "postCode": "2132",
      "suburb": "CROYDON"
    },
    {
      "postCode": "2133",
      "suburb": "CROYDON PARK"
    },
    {
      "postCode": "2795",
      "suburb": "CRUDINE"
    },
    {
      "postCode": "2832",
      "suburb": "CRYON"
    },
    {
      "postCode": "2484",
      "suburb": "CRYSTAL CREEK"
    },
    {
      "postCode": "2835",
      "suburb": "CUBBA"
    },
    {
      "postCode": "2864",
      "suburb": "CUDAL"
    },
    {
      "postCode": "2850",
      "suburb": "CUDGEGONG"
    },
    {
      "postCode": "2700",
      "suburb": "CUDGEL"
    },
    {
      "postCode": "2487",
      "suburb": "CUDGEN"
    },
    {
      "postCode": "2484",
      "suburb": "CUDGERA CREEK"
    },
    {
      "postCode": "2540",
      "suburb": "CUDMIRRAH"
    },
    {
      "postCode": "2540",
      "suburb": "CULBURRA BEACH"
    },
    {
      "postCode": "2660",
      "suburb": "CULCAIRN"
    },
    {
      "postCode": "2790",
      "suburb": "CULLEN BULLEN"
    },
    {
      "postCode": "2850",
      "suburb": "CULLENBONE"
    },
    {
      "postCode": "2372",
      "suburb": "CULLENDORE"
    },
    {
      "postCode": "2581",
      "suburb": "CULLERIN"
    },
    {
      "postCode": "2645",
      "suburb": "CULLIVEL"
    },
    {
      "postCode": "2469",
      "suburb": "CULMARAN CREEK"
    },
    {
      "postCode": "2478",
      "suburb": "CUMBALUM"
    },
    {
      "postCode": "2852",
      "suburb": "CUMBANDRY"
    },
    {
      "postCode": "2756",
      "suburb": "CUMBERLAND REACH"
    },
    {
      "postCode": "2850",
      "suburb": "CUMBO"
    },
    {
      "postCode": "2832",
      "suburb": "CUMBORAH"
    },
    {
      "postCode": "2867",
      "suburb": "CUMNOCK"
    },
    {
      "postCode": "2424",
      "suburb": "CUNDLE FLAT"
    },
    {
      "postCode": "2430",
      "suburb": "CUNDLETOWN"
    },
    {
      "postCode": "2866",
      "suburb": "CUNDUMBUL"
    },
    {
      "postCode": "2539",
      "suburb": "CUNJURONG POINT"
    },
    {
      "postCode": "2587",
      "suburb": "CUNNINGAR"
    },
    {
      "postCode": "2734",
      "suburb": "CUNNINYEUK"
    },
    {
      "postCode": "2827",
      "suburb": "CURBAN"
    },
    {
      "postCode": "2096",
      "suburb": "CURL CURL"
    },
    {
      "postCode": "2672",
      "suburb": "CURLEW WATERS"
    },
    {
      "postCode": "2381",
      "suburb": "CURLEWIS"
    },
    {
      "postCode": "2648",
      "suburb": "CURLWAA"
    },
    {
      "postCode": "2820",
      "suburb": "CURRA CREEK"
    },
    {
      "postCode": "2342",
      "suburb": "CURRABUBULA"
    },
    {
      "postCode": "2795",
      "suburb": "CURRAGH"
    },
    {
      "postCode": "2533",
      "suburb": "CURRAMORE"
    },
    {
      "postCode": "2567",
      "suburb": "CURRANS HILL"
    },
    {
      "postCode": "2540",
      "suburb": "CURRARONG"
    },
    {
      "postCode": "2580",
      "suburb": "CURRAWANG"
    },
    {
      "postCode": "2650",
      "suburb": "CURRAWARNA"
    },
    {
      "postCode": "2580",
      "suburb": "CURRAWEELA"
    },
    {
      "postCode": "2108",
      "suburb": "CURRAWONG BEACH"
    },
    {
      "postCode": "2422",
      "suburb": "CURRICABARK"
    },
    {
      "postCode": "2536",
      "suburb": "CURROWAN"
    },
    {
      "postCode": "2388",
      "suburb": "CUTTABRI"
    },
    {
      "postCode": "2546",
      "suburb": "CUTTAGEE"
    },
    {
      "postCode": "2849",
      "suburb": "DABEE"
    },
    {
      "postCode": "2032",
      "suburb": "DACEYVILLE"
    },
    {
      "postCode": "2325",
      "suburb": "DAIRY ARM"
    },
    {
      "postCode": "2474",
      "suburb": "DAIRY FLAT"
    },
    {
      "postCode": "2630",
      "suburb": "DAIRYMANS PLAINS"
    },
    {
      "postCode": "2257",
      "suburb": "DALEYS POINT"
    },
    {
      "postCode": "2628",
      "suburb": "DALGETY"
    },
    {
      "postCode": "2546",
      "suburb": "DALMENY"
    },
    {
      "postCode": "2460",
      "suburb": "DALMORTON"
    },
    {
      "postCode": "2328",
      "suburb": "DALSWINTON"
    },
    {
      "postCode": "2581",
      "suburb": "DALTON"
    },
    {
      "postCode": "2335",
      "suburb": "DALWOOD"
    },
    {
      "postCode": "2477",
      "suburb": "DALWOOD"
    },
    {
      "postCode": "2823",
      "suburb": "DANDALOO"
    },
    {
      "postCode": "2357",
      "suburb": "DANDRY"
    },
    {
      "postCode": "2309",
      "suburb": "DANGAR"
    },
    {
      "postCode": "2083",
      "suburb": "DANGAR ISLAND"
    },
    {
      "postCode": "2350",
      "suburb": "DANGARSLEIGH"
    },
    {
      "postCode": "2630",
      "suburb": "DANGELONG"
    },
    {
      "postCode": "2530",
      "suburb": "DAPTO"
    },
    {
      "postCode": "2428",
      "suburb": "DARAWANK"
    },
    {
      "postCode": "2722",
      "suburb": "DARBALARA"
    },
    {
      "postCode": "2793",
      "suburb": "DARBYS FALLS"
    },
    {
      "postCode": "2717",
      "suburb": "DARETON"
    },
    {
      "postCode": "2786",
      "suburb": "DARGAN"
    },
    {
      "postCode": "2795",
      "suburb": "DARK CORNER"
    },
    {
      "postCode": "2508",
      "suburb": "DARKES FOREST"
    },
    {
      "postCode": "2454",
      "suburb": "DARKWOOD"
    },
    {
      "postCode": "2027",
      "suburb": "DARLING POINT"
    },
    {
      "postCode": "1300",
      "suburb": "DARLINGHURST"
    },
    {
      "postCode": "2010",
      "suburb": "DARLINGHURST"
    },
    {
      "postCode": "2008",
      "suburb": "DARLINGTON"
    },
    {
      "postCode": "2330",
      "suburb": "DARLINGTON"
    },
    {
      "postCode": "2706",
      "suburb": "DARLINGTON POINT"
    },
    {
      "postCode": "2729",
      "suburb": "DARLOW"
    },
    {
      "postCode": "2870",
      "suburb": "DAROOBALGIE"
    },
    {
      "postCode": "2336",
      "suburb": "DARTBROOK"
    },
    {
      "postCode": "2340",
      "suburb": "DARUKA"
    },
    {
      "postCode": "2085",
      "suburb": "DAVIDSON"
    },
    {
      "postCode": "2336",
      "suburb": "DAVIS CREEK"
    },
    {
      "postCode": "2251",
      "suburb": "DAVISTOWN"
    },
    {
      "postCode": "2000",
      "suburb": "DAWES POINT"
    },
    {
      "postCode": "2646",
      "suburb": "DAYSDALE"
    },
    {
      "postCode": "2761",
      "suburb": "DEAN PARK"
    },
    {
      "postCode": "2443",
      "suburb": "DEAUVILLE"
    },
    {
      "postCode": "2446",
      "suburb": "DEBENHAM"
    },
    {
      "postCode": "2099",
      "suburb": "DEE WHY"
    },
    {
      "postCode": "2440",
      "suburb": "DEEP CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "DEEP CREEK"
    },
    {
      "postCode": "2469",
      "suburb": "DEEP CREEK"
    },
    {
      "postCode": "2371",
      "suburb": "DEEPWATER"
    },
    {
      "postCode": "2453",
      "suburb": "DEER VALE"
    },
    {
      "postCode": "2633",
      "suburb": "DELEGATE"
    },
    {
      "postCode": "2403",
      "suburb": "DELUNGRA"
    },
    {
      "postCode": "2565",
      "suburb": "DENHAM COURT"
    },
    {
      "postCode": "2536",
      "suburb": "DENHAMS BEACH"
    },
    {
      "postCode": "2710",
      "suburb": "DENILIQUIN"
    },
    {
      "postCode": "2710",
      "suburb": "DENILIQUIN NORTH"
    },
    {
      "postCode": "2114",
      "suburb": "DENISTONE"
    },
    {
      "postCode": "2112",
      "suburb": "DENISTONE EAST"
    },
    {
      "postCode": "2114",
      "suburb": "DENISTONE WEST"
    },
    {
      "postCode": "2328",
      "suburb": "DENMAN"
    },
    {
      "postCode": "2536",
      "suburb": "DEPOT BEACH"
    },
    {
      "postCode": "2877",
      "suburb": "DERRIWONG"
    },
    {
      "postCode": "2537",
      "suburb": "DEUA"
    },
    {
      "postCode": "2537",
      "suburb": "DEUA RIVER VALLEY"
    },
    {
      "postCode": "2550",
      "suburb": "DEVILS HOLE"
    },
    {
      "postCode": "2422",
      "suburb": "DEWITT"
    },
    {
      "postCode": "2770",
      "suburb": "DHARRUK"
    },
    {
      "postCode": "2650",
      "suburb": "DHULURA"
    },
    {
      "postCode": "2733",
      "suburb": "DHURAGOON"
    },
    {
      "postCode": "2430",
      "suburb": "DIAMOND BEACH"
    },
    {
      "postCode": "2443",
      "suburb": "DIAMOND HEAD"
    },
    {
      "postCode": "2370",
      "suburb": "DIEHARD"
    },
    {
      "postCode": "2462",
      "suburb": "DIGGERS CAMP"
    },
    {
      "postCode": "2546",
      "suburb": "DIGNAMS CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "DILKOON"
    },
    {
      "postCode": "2734",
      "suburb": "DILPURRA"
    },
    {
      "postCode": "2429",
      "suburb": "DINGO FOREST"
    },
    {
      "postCode": "2404",
      "suburb": "DINOGA"
    },
    {
      "postCode": "2666",
      "suburb": "DIRNASEER"
    },
    {
      "postCode": "2456",
      "suburb": "DIRTY CREEK"
    },
    {
      "postCode": "2470",
      "suburb": "DOBIES BIGHT"
    },
    {
      "postCode": "2550",
      "suburb": "DOCTOR GEORGE MOUNTAIN"
    },
    {
      "postCode": "2790",
      "suburb": "DOCTORS GAP"
    },
    {
      "postCode": "2795",
      "suburb": "DOG ROCKS"
    },
    {
      "postCode": "2229",
      "suburb": "DOLANS BAY"
    },
    {
      "postCode": "2219",
      "suburb": "DOLLS POINT"
    },
    {
      "postCode": "2429",
      "suburb": "DOLLYS FLAT"
    },
    {
      "postCode": "2539",
      "suburb": "DOLPHIN POINT"
    },
    {
      "postCode": "2530",
      "suburb": "DOMBARTON"
    },
    {
      "postCode": "2350",
      "suburb": "DONALD CREEK"
    },
    {
      "postCode": "2440",
      "suburb": "DONDINGALONG"
    },
    {
      "postCode": "2447",
      "suburb": "DONNELLYVILLE"
    },
    {
      "postCode": "2484",
      "suburb": "DOON DOON"
    },
    {
      "postCode": "2473",
      "suburb": "DOONBAH"
    },
    {
      "postCode": "2767",
      "suburb": "DOONSIDE"
    },
    {
      "postCode": "2259",
      "suburb": "DOORALONG"
    },
    {
      "postCode": "2264",
      "suburb": "DORA CREEK"
    },
    {
      "postCode": "2453",
      "suburb": "DORRIGO"
    },
    {
      "postCode": "2453",
      "suburb": "DORRIGO MOUNTAIN"
    },
    {
      "postCode": "2480",
      "suburb": "DORROUGHBY"
    },
    {
      "postCode": "1360",
      "suburb": "DOUBLE BAY"
    },
    {
      "postCode": "2028",
      "suburb": "DOUBLE BAY"
    },
    {
      "postCode": "2470",
      "suburb": "DOUBTFUL CREEK"
    },
    {
      "postCode": "2569",
      "suburb": "DOUGLAS PARK"
    },
    {
      "postCode": "2030",
      "suburb": "DOVER HEIGHTS"
    },
    {
      "postCode": "2650",
      "suburb": "DOWNSIDE"
    },
    {
      "postCode": "2262",
      "suburb": "DOYALSON"
    },
    {
      "postCode": "2262",
      "suburb": "DOYALSON NORTH"
    },
    {
      "postCode": "2330",
      "suburb": "DOYLES CREEK"
    },
    {
      "postCode": "2446",
      "suburb": "DOYLES RIVER"
    },
    {
      "postCode": "2469",
      "suburb": "DRAKE"
    },
    {
      "postCode": "2469",
      "suburb": "DRAKE VILLAGE"
    },
    {
      "postCode": "2386",
      "suburb": "DRILDOOL"
    },
    {
      "postCode": "2820",
      "suburb": "DRIPSTONE"
    },
    {
      "postCode": "1470",
      "suburb": "DRUMMOYNE"
    },
    {
      "postCode": "2047",
      "suburb": "DRUMMOYNE"
    },
    {
      "postCode": "2337",
      "suburb": "DRY CREEK"
    },
    {
      "postCode": "2630",
      "suburb": "DRY PLAIN"
    },
    {
      "postCode": "2830",
      "suburb": "DUBBO"
    },
    {
      "postCode": "2830",
      "suburb": "DUBBO DC"
    },
    {
      "postCode": "2830",
      "suburb": "DUBBO EAST"
    },
    {
      "postCode": "2830",
      "suburb": "DUBBO GROVE"
    },
    {
      "postCode": "2830",
      "suburb": "DUBBO WEST"
    },
    {
      "postCode": "2469",
      "suburb": "DUCK CREEK"
    },
    {
      "postCode": "2321",
      "suburb": "DUCKENFIELD"
    },
    {
      "postCode": "2787",
      "suburb": "DUCKMALOI"
    },
    {
      "postCode": "2290",
      "suburb": "DUDLEY"
    },
    {
      "postCode": "2084",
      "suburb": "DUFFYS FOREST"
    },
    {
      "postCode": "2484",
      "suburb": "DULGUIGAN"
    },
    {
      "postCode": "2203",
      "suburb": "DULWICH HILL"
    },
    {
      "postCode": "2484",
      "suburb": "DUM DUM"
    },
    {
      "postCode": "2350",
      "suburb": "DUMARESQ"
    },
    {
      "postCode": "2430",
      "suburb": "DUMARESQ ISLAND"
    },
    {
      "postCode": "2372",
      "suburb": "DUMARESQ VALLEY"
    },
    {
      "postCode": "2460",
      "suburb": "DUMBUDGERY"
    },
    {
      "postCode": "2484",
      "suburb": "DUNBIBLE"
    },
    {
      "postCode": "2443",
      "suburb": "DUNBOGAN"
    },
    {
      "postCode": "2340",
      "suburb": "DUNCANS CREEK"
    },
    {
      "postCode": "2117",
      "suburb": "DUNDAS"
    },
    {
      "postCode": "2117",
      "suburb": "DUNDAS VALLEY"
    },
    {
      "postCode": "2370",
      "suburb": "DUNDEE"
    },
    {
      "postCode": "2453",
      "suburb": "DUNDURRABIN"
    },
    {
      "postCode": "2844",
      "suburb": "DUNEDOO"
    },
    {
      "postCode": "2480",
      "suburb": "DUNGARUBBA"
    },
    {
      "postCode": "2484",
      "suburb": "DUNGAY"
    },
    {
      "postCode": "2849",
      "suburb": "DUNGEREE"
    },
    {
      "postCode": "2420",
      "suburb": "DUNGOG"
    },
    {
      "postCode": "2340",
      "suburb": "DUNGOWAN"
    },
    {
      "postCode": "2795",
      "suburb": "DUNKELD"
    },
    {
      "postCode": "2529",
      "suburb": "DUNMORE"
    },
    {
      "postCode": "2330",
      "suburb": "DUNOLLY"
    },
    {
      "postCode": "2480",
      "suburb": "DUNOON"
    },
    {
      "postCode": "2321",
      "suburb": "DUNS CREEK"
    },
    {
      "postCode": "2849",
      "suburb": "DUNVILLE LOOP"
    },
    {
      "postCode": "2158",
      "suburb": "DURAL"
    },
    {
      "postCode": "2330",
      "suburb": "DURAL"
    },
    {
      "postCode": "2158",
      "suburb": "DURAL DC"
    },
    {
      "postCode": "2795",
      "suburb": "DURAMANA"
    },
    {
      "postCode": "2487",
      "suburb": "DURANBAH"
    },
    {
      "postCode": "2344",
      "suburb": "DURI"
    },
    {
      "postCode": "2486",
      "suburb": "DUROBY"
    },
    {
      "postCode": "2622",
      "suburb": "DURRAN DURRA"
    },
    {
      "postCode": "2536",
      "suburb": "DURRAS NORTH"
    },
    {
      "postCode": "2259",
      "suburb": "DURREN DURREN"
    },
    {
      "postCode": "2350",
      "suburb": "DUVAL"
    },
    {
      "postCode": "2429",
      "suburb": "DYERS CROSSING"
    },
    {
      "postCode": "2470",
      "suburb": "DYRAABA"
    },
    {
      "postCode": "2330",
      "suburb": "DYRRING"
    },
    {
      "postCode": "2558",
      "suburb": "EAGLE VALE"
    },
    {
      "postCode": "2324",
      "suburb": "EAGLETON"
    },
    {
      "postCode": "2206",
      "suburb": "EARLWOOD"
    },
    {
      "postCode": "2640",
      "suburb": "EAST ALBURY"
    },
    {
      "postCode": "2478",
      "suburb": "EAST BALLINA"
    },
    {
      "postCode": "2576",
      "suburb": "EAST BOWRAL"
    },
    {
      "postCode": "2335",
      "suburb": "EAST BRANXTON"
    },
    {
      "postCode": "2471",
      "suburb": "EAST CORAKI"
    },
    {
      "postCode": "2518",
      "suburb": "EAST CORRIMAL"
    },
    {
      "postCode": "2250",
      "suburb": "EAST GOSFORD"
    },
    {
      "postCode": "2311",
      "suburb": "EAST GRESFORD"
    },
    {
      "postCode": "2213",
      "suburb": "EAST HILLS"
    },
    {
      "postCode": "2627",
      "suburb": "EAST JINDABYNE"
    },
    {
      "postCode": "2576",
      "suburb": "EAST KANGALOON"
    },
    {
      "postCode": "2440",
      "suburb": "EAST KEMPSEY"
    },
    {
      "postCode": "2071",
      "suburb": "EAST KILLARA"
    },
    {
      "postCode": "2758",
      "suburb": "EAST KURRAJONG"
    },
    {
      "postCode": "2070",
      "suburb": "EAST LINDFIELD"
    },
    {
      "postCode": "2480",
      "suburb": "EAST LISMORE"
    },
    {
      "postCode": "2536",
      "suburb": "EAST LYNNE"
    },
    {
      "postCode": "2323",
      "suburb": "EAST MAITLAND"
    },
    {
      "postCode": "2113",
      "suburb": "EAST RYDE"
    },
    {
      "postCode": "2324",
      "suburb": "EAST SEAHAM"
    },
    {
      "postCode": "2340",
      "suburb": "EAST TAMWORTH"
    },
    {
      "postCode": "2650",
      "suburb": "EAST WAGGA WAGGA"
    },
    {
      "postCode": "2477",
      "suburb": "EAST WARDELL"
    },
    {
      "postCode": "2766",
      "suburb": "EASTERN CREEK"
    },
    {
      "postCode": "2004",
      "suburb": "EASTERN SUBURBS MC"
    },
    {
      "postCode": "2036",
      "suburb": "EASTGARDENS"
    },
    {
      "postCode": "2018",
      "suburb": "EASTLAKES"
    },
    {
      "postCode": "2122",
      "suburb": "EASTWOOD"
    },
    {
      "postCode": "2460",
      "suburb": "EATONSVILLE"
    },
    {
      "postCode": "2756",
      "suburb": "EBENEZER"
    },
    {
      "postCode": "2453",
      "suburb": "EBOR"
    },
    {
      "postCode": "2311",
      "suburb": "ECCLESTON"
    },
    {
      "postCode": "2333",
      "suburb": "EDDERTON"
    },
    {
      "postCode": "2551",
      "suburb": "EDEN"
    },
    {
      "postCode": "2474",
      "suburb": "EDEN CREEK"
    },
    {
      "postCode": "2176",
      "suburb": "EDENSOR PARK"
    },
    {
      "postCode": "2474",
      "suburb": "EDENVILLE"
    },
    {
      "postCode": "2027",
      "suburb": "EDGECLIFF"
    },
    {
      "postCode": "2390",
      "suburb": "EDGEROI"
    },
    {
      "postCode": "2285",
      "suburb": "EDGEWORTH"
    },
    {
      "postCode": "2787",
      "suburb": "EDITH"
    },
    {
      "postCode": "2174",
      "suburb": "EDMONDSON PARK"
    },
    {
      "postCode": "2551",
      "suburb": "EDROM"
    },
    {
      "postCode": "2824",
      "suburb": "EENAWEENA"
    },
    {
      "postCode": "2795",
      "suburb": "EGLINTON"
    },
    {
      "postCode": "2460",
      "suburb": "EIGHTEEN MILE"
    },
    {
      "postCode": "2429",
      "suburb": "ELANDS"
    },
    {
      "postCode": "2101",
      "suburb": "ELANORA HEIGHTS"
    },
    {
      "postCode": "2404",
      "suburb": "ELCOMBE"
    },
    {
      "postCode": "2335",
      "suburb": "ELDERSLIE"
    },
    {
      "postCode": "2570",
      "suburb": "ELDERSLIE"
    },
    {
      "postCode": "2282",
      "suburb": "ELEEBANA"
    },
    {
      "postCode": "2287",
      "suburb": "ELERMORE VALE"
    },
    {
      "postCode": "2011",
      "suburb": "ELIZABETH BAY"
    },
    {
      "postCode": "2428",
      "suburb": "ELIZABETH BEACH"
    },
    {
      "postCode": "2171",
      "suburb": "ELIZABETH HILLS"
    },
    {
      "postCode": "2325",
      "suburb": "ELLALONG"
    },
    {
      "postCode": "2460",
      "suburb": "ELLAND"
    },
    {
      "postCode": "2470",
      "suburb": "ELLANGOWAN"
    },
    {
      "postCode": "2446",
      "suburb": "ELLENBOROUGH"
    },
    {
      "postCode": "2648",
      "suburb": "ELLERSLIE"
    },
    {
      "postCode": "2729",
      "suburb": "ELLERSLIE"
    },
    {
      "postCode": "2337",
      "suburb": "ELLERSTON"
    },
    {
      "postCode": "2570",
      "suburb": "ELLIS LANE"
    },
    {
      "postCode": "2831",
      "suburb": "ELONG ELONG"
    },
    {
      "postCode": "2325",
      "suburb": "ELRINGTON"
    },
    {
      "postCode": "2360",
      "suburb": "ELSMORE"
    },
    {
      "postCode": "2480",
      "suburb": "ELTHAM"
    },
    {
      "postCode": "2105",
      "suburb": "ELVINA BAY"
    },
    {
      "postCode": "2456",
      "suburb": "EMERALD BEACH"
    },
    {
      "postCode": "2380",
      "suburb": "EMERALD HILL"
    },
    {
      "postCode": "2770",
      "suburb": "EMERTON"
    },
    {
      "postCode": "2371",
      "suburb": "EMMAVILLE"
    },
    {
      "postCode": "2257",
      "suburb": "EMPIRE BAY"
    },
    {
      "postCode": "2478",
      "suburb": "EMPIRE VALE"
    },
    {
      "postCode": "2750",
      "suburb": "EMU HEIGHTS"
    },
    {
      "postCode": "2750",
      "suburb": "EMU PLAINS"
    },
    {
      "postCode": "2800",
      "suburb": "EMU SWAMP"
    },
    {
      "postCode": "2622",
      "suburb": "ENDRICK"
    },
    {
      "postCode": "2136",
      "suburb": "ENFIELD"
    },
    {
      "postCode": "2133",
      "suburb": "ENFIELD SOUTH"
    },
    {
      "postCode": "2233",
      "suburb": "ENGADINE"
    },
    {
      "postCode": "2560",
      "suburb": "ENGLORIE PARK"
    },
    {
      "postCode": "2042",
      "suburb": "ENMORE"
    },
    {
      "postCode": "2350",
      "suburb": "ENMORE"
    },
    {
      "postCode": "2840",
      "suburb": "ENNGONIA"
    },
    {
      "postCode": "2620",
      "suburb": "ENVIRONA"
    },
    {
      "postCode": "1710",
      "suburb": "EPPING"
    },
    {
      "postCode": "2121",
      "suburb": "EPPING"
    },
    {
      "postCode": "2264",
      "suburb": "ERARING"
    },
    {
      "postCode": "2877",
      "suburb": "EREMERANG"
    },
    {
      "postCode": "2669",
      "suburb": "ERIGOLIA"
    },
    {
      "postCode": "2663",
      "suburb": "ERIN VALE"
    },
    {
      "postCode": "2250",
      "suburb": "ERINA"
    },
    {
      "postCode": "2250",
      "suburb": "ERINA FAIR"
    },
    {
      "postCode": "2260",
      "suburb": "ERINA HEIGHTS"
    },
    {
      "postCode": "1700",
      "suburb": "ERMINGTON"
    },
    {
      "postCode": "2115",
      "suburb": "ERMINGTON"
    },
    {
      "postCode": "2540",
      "suburb": "EROWAL BAY"
    },
    {
      "postCode": "2791",
      "suburb": "ERROWANBANG"
    },
    {
      "postCode": "2759",
      "suburb": "ERSKINE PARK"
    },
    {
      "postCode": "2043",
      "suburb": "ERSKINEVILLE"
    },
    {
      "postCode": "2850",
      "suburb": "ERUDGERE"
    },
    {
      "postCode": "2558",
      "suburb": "ESCHOL PARK"
    },
    {
      "postCode": "2472",
      "suburb": "ESK"
    },
    {
      "postCode": "2787",
      "suburb": "ESSINGTON"
    },
    {
      "postCode": "2650",
      "suburb": "ESTELLA"
    },
    {
      "postCode": "2257",
      "suburb": "ETTALONG BEACH"
    },
    {
      "postCode": "2640",
      "suburb": "ETTAMOGAH"
    },
    {
      "postCode": "2540",
      "suburb": "ETTREMA"
    },
    {
      "postCode": "2474",
      "suburb": "ETTRICK"
    },
    {
      "postCode": "2877",
      "suburb": "EUABALONG"
    },
    {
      "postCode": "2877",
      "suburb": "EUABALONG WEST"
    },
    {
      "postCode": "2650",
      "suburb": "EUBERTA"
    },
    {
      "postCode": "2866",
      "suburb": "EUCHAREENA"
    },
    {
      "postCode": "2628",
      "suburb": "EUCUMBENE"
    },
    {
      "postCode": "2806",
      "suburb": "EUGOWRA"
    },
    {
      "postCode": "2390",
      "suburb": "EULAH CREEK"
    },
    {
      "postCode": "2822",
      "suburb": "EUMUNGERIE"
    },
    {
      "postCode": "2650",
      "suburb": "EUNANOREENYA"
    },
    {
      "postCode": "2441",
      "suburb": "EUNGAI CREEK"
    },
    {
      "postCode": "2441",
      "suburb": "EUNGAI RAIL"
    },
    {
      "postCode": "2484",
      "suburb": "EUNGELLA"
    },
    {
      "postCode": "2480",
      "suburb": "EUREKA"
    },
    {
      "postCode": "2867",
      "suburb": "EURIMBLA"
    },
    {
      "postCode": "2545",
      "suburb": "EUROBODALLA"
    },
    {
      "postCode": "2440",
      "suburb": "EUROKA"
    },
    {
      "postCode": "2700",
      "suburb": "EUROLEY"
    },
    {
      "postCode": "2663",
      "suburb": "EURONGILLY"
    },
    {
      "postCode": "2850",
      "suburb": "EURUNDEREE"
    },
    {
      "postCode": "2737",
      "suburb": "EUSTON"
    },
    {
      "postCode": "2473",
      "suburb": "EVANS HEAD"
    },
    {
      "postCode": "2795",
      "suburb": "EVANS PLAINS"
    },
    {
      "postCode": "2015",
      "suburb": "EVELEIGH"
    },
    {
      "postCode": "2484",
      "suburb": "EVIRON"
    },
    {
      "postCode": "2469",
      "suburb": "EWINGAR"
    },
    {
      "postCode": "2481",
      "suburb": "EWINGSDALE"
    },
    {
      "postCode": "2579",
      "suburb": "EXETER"
    },
    {
      "postCode": "2430",
      "suburb": "FAILFORD"
    },
    {
      "postCode": "1860",
      "suburb": "FAIRFIELD"
    },
    {
      "postCode": "2165",
      "suburb": "FAIRFIELD"
    },
    {
      "postCode": "2165",
      "suburb": "FAIRFIELD EAST"
    },
    {
      "postCode": "2165",
      "suburb": "FAIRFIELD HEIGHTS"
    },
    {
      "postCode": "2165",
      "suburb": "FAIRFIELD WEST"
    },
    {
      "postCode": "2871",
      "suburb": "FAIRHOLME"
    },
    {
      "postCode": "2094",
      "suburb": "FAIRLIGHT"
    },
    {
      "postCode": "2470",
      "suburb": "FAIRY HILL"
    },
    {
      "postCode": "2519",
      "suburb": "FAIRY MEADOW"
    },
    {
      "postCode": "2330",
      "suburb": "FALBROOK"
    },
    {
      "postCode": "2365",
      "suburb": "FALCONER"
    },
    {
      "postCode": "2540",
      "suburb": "FALLS CREEK"
    },
    {
      "postCode": "2535",
      "suburb": "FAR MEADOW"
    },
    {
      "postCode": "2656",
      "suburb": "FARGUNYAH"
    },
    {
      "postCode": "2320",
      "suburb": "FARLEY"
    },
    {
      "postCode": "2526",
      "suburb": "FARMBOROUGH HEIGHTS"
    },
    {
      "postCode": "2820",
      "suburb": "FARNHAM"
    },
    {
      "postCode": "2484",
      "suburb": "FARRANTS HILL"
    },
    {
      "postCode": "2622",
      "suburb": "FARRINGDON"
    },
    {
      "postCode": "2283",
      "suburb": "FASSIFERN"
    },
    {
      "postCode": "2776",
      "suburb": "FAULCONBRIDGE"
    },
    {
      "postCode": "2422",
      "suburb": "FAULKLAND"
    },
    {
      "postCode": "2474",
      "suburb": "FAWCETTS PLAIN"
    },
    {
      "postCode": "2480",
      "suburb": "FEDERAL"
    },
    {
      "postCode": "2283",
      "suburb": "FENNELL BAY"
    },
    {
      "postCode": "2295",
      "suburb": "FERN BAY"
    },
    {
      "postCode": "2330",
      "suburb": "FERN GULLY"
    },
    {
      "postCode": "2775",
      "suburb": "FERNANCES"
    },
    {
      "postCode": "2325",
      "suburb": "FERNANCES CROSSING"
    },
    {
      "postCode": "2444",
      "suburb": "FERNBANK CREEK"
    },
    {
      "postCode": "2453",
      "suburb": "FERNBROOK"
    },
    {
      "postCode": "2519",
      "suburb": "FERNHILL"
    },
    {
      "postCode": "2479",
      "suburb": "FERNLEIGH"
    },
    {
      "postCode": "2454",
      "suburb": "FERNMOUNT"
    },
    {
      "postCode": "2480",
      "suburb": "FERNSIDE"
    },
    {
      "postCode": "2484",
      "suburb": "FERNVALE"
    },
    {
      "postCode": "2318",
      "suburb": "FERODALE"
    },
    {
      "postCode": "2159",
      "suburb": "FIDDLETOWN"
    },
    {
      "postCode": "2875",
      "suburb": "FIFIELD"
    },
    {
      "postCode": "2525",
      "suburb": "FIGTREE"
    },
    {
      "postCode": "2474",
      "suburb": "FINDON CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "FINE FLOWER"
    },
    {
      "postCode": "2315",
      "suburb": "FINGAL BAY"
    },
    {
      "postCode": "2487",
      "suburb": "FINGAL HEAD"
    },
    {
      "postCode": "2713",
      "suburb": "FINLEY"
    },
    {
      "postCode": "2429",
      "suburb": "FIREFLY"
    },
    {
      "postCode": "2316",
      "suburb": "FISHERMANS BAY"
    },
    {
      "postCode": "2539",
      "suburb": "FISHERMANS PARADISE"
    },
    {
      "postCode": "2441",
      "suburb": "FISHERMANS REACH"
    },
    {
      "postCode": "2421",
      "suburb": "FISHERS HILL"
    },
    {
      "postCode": "2283",
      "suburb": "FISHING POINT"
    },
    {
      "postCode": "2799",
      "suburb": "FITZGERALDS MOUNT"
    },
    {
      "postCode": "2795",
      "suburb": "FITZGERALDS VALLEY"
    },
    {
      "postCode": "2577",
      "suburb": "FITZROY FALLS"
    },
    {
      "postCode": "2046",
      "suburb": "FIVE DOCK"
    },
    {
      "postCode": "2873",
      "suburb": "FIVE WAYS"
    },
    {
      "postCode": "2420",
      "suburb": "FLAT TOPS"
    },
    {
      "postCode": "2287",
      "suburb": "FLETCHER"
    },
    {
      "postCode": "2529",
      "suburb": "FLINDERS"
    },
    {
      "postCode": "2280",
      "suburb": "FLORAVILLE"
    },
    {
      "postCode": "2444",
      "suburb": "FLYNNS BEACH"
    },
    {
      "postCode": "2871",
      "suburb": "FORBES"
    },
    {
      "postCode": "2621",
      "suburb": "FORBES CREEK"
    },
    {
      "postCode": "2446",
      "suburb": "FORBES RIVER"
    },
    {
      "postCode": "2422",
      "suburb": "FORBESDALE"
    },
    {
      "postCode": "2840",
      "suburb": "FORDS BRIDGE"
    },
    {
      "postCode": "2330",
      "suburb": "FORDWICH"
    },
    {
      "postCode": "2157",
      "suburb": "FOREST GLEN"
    },
    {
      "postCode": "2795",
      "suburb": "FOREST GROVE"
    },
    {
      "postCode": "2651",
      "suburb": "FOREST HILL"
    },
    {
      "postCode": "2372",
      "suburb": "FOREST LAND"
    },
    {
      "postCode": "2037",
      "suburb": "FOREST LODGE"
    },
    {
      "postCode": "2798",
      "suburb": "FOREST REEFS"
    },
    {
      "postCode": "2087",
      "suburb": "FORESTVILLE"
    },
    {
      "postCode": "2260",
      "suburb": "FORRESTERS BEACH"
    },
    {
      "postCode": "2428",
      "suburb": "FORSTER"
    },
    {
      "postCode": "2428",
      "suburb": "FORSTER SHOPPING VILLAGE"
    },
    {
      "postCode": "2460",
      "suburb": "FORTIS CREEK"
    },
    {
      "postCode": "2795",
      "suburb": "FOSTERS VALLEY"
    },
    {
      "postCode": "2420",
      "suburb": "FOSTERTON"
    },
    {
      "postCode": "2258",
      "suburb": "FOUNTAINDALE"
    },
    {
      "postCode": "2716",
      "suburb": "FOUR CORNERS"
    },
    {
      "postCode": "2323",
      "suburb": "FOUR MILE CREEK"
    },
    {
      "postCode": "2800",
      "suburb": "FOUR MILE CREEK"
    },
    {
      "postCode": "2880",
      "suburb": "FOWLERS GAP"
    },
    {
      "postCode": "2534",
      "suburb": "FOXGROUND"
    },
    {
      "postCode": "2259",
      "suburb": "FRAZER PARK"
    },
    {
      "postCode": "2446",
      "suburb": "FRAZERS CREEK"
    },
    {
      "postCode": "2440",
      "suburb": "FREDERICKTON"
    },
    {
      "postCode": "2464",
      "suburb": "FREEBURN ISLAND"
    },
    {
      "postCode": "2259",
      "suburb": "FREEMANS"
    },
    {
      "postCode": "2756",
      "suburb": "FREEMANS REACH"
    },
    {
      "postCode": "2323",
      "suburb": "FREEMANS WATERHOLE"
    },
    {
      "postCode": "2795",
      "suburb": "FREEMANTLE"
    },
    {
      "postCode": "2655",
      "suburb": "FRENCH PARK"
    },
    {
      "postCode": "1640",
      "suburb": "FRENCHS FOREST"
    },
    {
      "postCode": "2086",
      "suburb": "FRENCHS FOREST"
    },
    {
      "postCode": "2086",
      "suburb": "FRENCHS FOREST EAST"
    },
    {
      "postCode": "2096",
      "suburb": "FRESHWATER"
    },
    {
      "postCode": "2850",
      "suburb": "FROG ROCK"
    },
    {
      "postCode": "2586",
      "suburb": "FROGMORE"
    },
    {
      "postCode": "2550",
      "suburb": "FROGS HOLLOW"
    },
    {
      "postCode": "2630",
      "suburb": "FRYING PAN"
    },
    {
      "postCode": "2583",
      "suburb": "FULLERTON"
    },
    {
      "postCode": "2318",
      "suburb": "FULLERTON COVE"
    },
    {
      "postCode": "2370",
      "suburb": "FURRACABAD"
    },
    {
      "postCode": "2765",
      "suburb": "GABLES"
    },
    {
      "postCode": "2720",
      "suburb": "GADARA"
    },
    {
      "postCode": "2716",
      "suburb": "GALA VALE"
    },
    {
      "postCode": "2850",
      "suburb": "GALAMBINE"
    },
    {
      "postCode": "2585",
      "suburb": "GALONG"
    },
    {
      "postCode": "2650",
      "suburb": "GALORE"
    },
    {
      "postCode": "2159",
      "suburb": "GALSTON"
    },
    {
      "postCode": "2790",
      "suburb": "GANBENANG"
    },
    {
      "postCode": "2422",
      "suburb": "GANGAT"
    },
    {
      "postCode": "2702",
      "suburb": "GANMAIN"
    },
    {
      "postCode": "2405",
      "suburb": "GARAH"
    },
    {
      "postCode": "2289",
      "suburb": "GARDEN SUBURB"
    },
    {
      "postCode": "2871",
      "suburb": "GAREMA"
    },
    {
      "postCode": "2232",
      "suburb": "GARIE"
    },
    {
      "postCode": "2797",
      "suburb": "GARLAND"
    },
    {
      "postCode": "2330",
      "suburb": "GARLAND VALLEY"
    },
    {
      "postCode": "2340",
      "suburb": "GAROO"
    },
    {
      "postCode": "2866",
      "suburb": "GARRA"
    },
    {
      "postCode": "2345",
      "suburb": "GARTHOWEN"
    },
    {
      "postCode": "2290",
      "suburb": "GATESHEAD"
    },
    {
      "postCode": "2441",
      "suburb": "GEARYS FLAT"
    },
    {
      "postCode": "2642",
      "suburb": "GEEHI"
    },
    {
      "postCode": "2650",
      "suburb": "GELSTON PARK"
    },
    {
      "postCode": "2795",
      "suburb": "GEMALLA"
    },
    {
      "postCode": "2474",
      "suburb": "GENEVA"
    },
    {
      "postCode": "2365",
      "suburb": "GEORGES CREEK"
    },
    {
      "postCode": "2198",
      "suburb": "GEORGES HALL"
    },
    {
      "postCode": "2795",
      "suburb": "GEORGES PLAINS"
    },
    {
      "postCode": "2298",
      "suburb": "GEORGETOWN"
    },
    {
      "postCode": "2480",
      "suburb": "GEORGICA"
    },
    {
      "postCode": "2642",
      "suburb": "GEROGERY"
    },
    {
      "postCode": "2534",
      "suburb": "GERRINGONG"
    },
    {
      "postCode": "2534",
      "suburb": "GERROA"
    },
    {
      "postCode": "2818",
      "suburb": "GEURIE"
    },
    {
      "postCode": "2474",
      "suburb": "GHINNI GHI"
    },
    {
      "postCode": "2430",
      "suburb": "GHINNI GHINNI"
    },
    {
      "postCode": "2380",
      "suburb": "GHOOLENDAADI"
    },
    {
      "postCode": "2328",
      "suburb": "GIANTS CREEK"
    },
    {
      "postCode": "2469",
      "suburb": "GIBBERAGEE"
    },
    {
      "postCode": "2370",
      "suburb": "GIBRALTAR RANGE"
    },
    {
      "postCode": "2666",
      "suburb": "GIDGINBUNG"
    },
    {
      "postCode": "2340",
      "suburb": "GIDLEY"
    },
    {
      "postCode": "2560",
      "suburb": "GILEAD"
    },
    {
      "postCode": "2360",
      "suburb": "GILGAI"
    },
    {
      "postCode": "2827",
      "suburb": "GILGANDRA"
    },
    {
      "postCode": "2829",
      "suburb": "GILGOOMA"
    },
    {
      "postCode": "2877",
      "suburb": "GILGUNNIA"
    },
    {
      "postCode": "2700",
      "suburb": "GILLENBAH"
    },
    {
      "postCode": "2462",
      "suburb": "GILLETTS RIDGE"
    },
    {
      "postCode": "2321",
      "suburb": "GILLIESTON HEIGHTS"
    },
    {
      "postCode": "2795",
      "suburb": "GILMANDYKE"
    },
    {
      "postCode": "2720",
      "suburb": "GILMORE"
    },
    {
      "postCode": "2823",
      "suburb": "GIN GIN"
    },
    {
      "postCode": "2404",
      "suburb": "GINEROI"
    },
    {
      "postCode": "2849",
      "suburb": "GINGHI"
    },
    {
      "postCode": "2787",
      "suburb": "GINGKIN"
    },
    {
      "postCode": "2480",
      "suburb": "GIRARDS HILL"
    },
    {
      "postCode": "2831",
      "suburb": "GIRILAMBONE"
    },
    {
      "postCode": "2422",
      "suburb": "GIRO"
    },
    {
      "postCode": "2669",
      "suburb": "GIRRAL"
    },
    {
      "postCode": "2449",
      "suburb": "GIRRALONG"
    },
    {
      "postCode": "2145",
      "suburb": "GIRRAWEEN"
    },
    {
      "postCode": "2425",
      "suburb": "GIRVAN"
    },
    {
      "postCode": "1675",
      "suburb": "GLADESVILLE"
    },
    {
      "postCode": "2111",
      "suburb": "GLADESVILLE"
    },
    {
      "postCode": "2440",
      "suburb": "GLADSTONE"
    },
    {
      "postCode": "2795",
      "suburb": "GLANMIRE"
    },
    {
      "postCode": "2037",
      "suburb": "GLEBE"
    },
    {
      "postCode": "2557",
      "suburb": "GLEDSWOOD HILLS"
    },
    {
      "postCode": "2849",
      "suburb": "GLEN ALICE"
    },
    {
      "postCode": "2631",
      "suburb": "GLEN ALLEN"
    },
    {
      "postCode": "2560",
      "suburb": "GLEN ALPINE"
    },
    {
      "postCode": "2846",
      "suburb": "GLEN DAVIS"
    },
    {
      "postCode": "2370",
      "suburb": "GLEN ELGIN"
    },
    {
      "postCode": "2630",
      "suburb": "GLEN FERGUS"
    },
    {
      "postCode": "2370",
      "suburb": "GLEN INNES"
    },
    {
      "postCode": "2321",
      "suburb": "GLEN MARTIN"
    },
    {
      "postCode": "2365",
      "suburb": "GLEN NEVIS"
    },
    {
      "postCode": "2320",
      "suburb": "GLEN OAK"
    },
    {
      "postCode": "2422",
      "suburb": "GLEN WARD"
    },
    {
      "postCode": "2321",
      "suburb": "GLEN WILLIAM"
    },
    {
      "postCode": "2337",
      "suburb": "GLENBAWN"
    },
    {
      "postCode": "2773",
      "suburb": "GLENBROOK"
    },
    {
      "postCode": "2365",
      "suburb": "GLENCOE"
    },
    {
      "postCode": "2285",
      "suburb": "GLENDALE"
    },
    {
      "postCode": "2761",
      "suburb": "GLENDENNING"
    },
    {
      "postCode": "2330",
      "suburb": "GLENDON"
    },
    {
      "postCode": "2330",
      "suburb": "GLENDON BROOK"
    },
    {
      "postCode": "2810",
      "suburb": "GLENELG"
    },
    {
      "postCode": "2642",
      "suburb": "GLENELLEN"
    },
    {
      "postCode": "2167",
      "suburb": "GLENFIELD"
    },
    {
      "postCode": "2650",
      "suburb": "GLENFIELD PARK"
    },
    {
      "postCode": "2486",
      "suburb": "GLENGARRIE"
    },
    {
      "postCode": "2156",
      "suburb": "GLENHAVEN"
    },
    {
      "postCode": "2454",
      "suburb": "GLENIFFER"
    },
    {
      "postCode": "2570",
      "suburb": "GLENMORE"
    },
    {
      "postCode": "2745",
      "suburb": "GLENMORE PARK"
    },
    {
      "postCode": "2330",
      "suburb": "GLENNIES CREEK"
    },
    {
      "postCode": "2261",
      "suburb": "GLENNING VALLEY"
    },
    {
      "postCode": "2157",
      "suburb": "GLENORIE"
    },
    {
      "postCode": "2564",
      "suburb": "GLENQUARIE"
    },
    {
      "postCode": "2576",
      "suburb": "GLENQUARRY"
    },
    {
      "postCode": "2450",
      "suburb": "GLENREAGH"
    },
    {
      "postCode": "2330",
      "suburb": "GLENRIDDING"
    },
    {
      "postCode": "2337",
      "suburb": "GLENROCK"
    },
    {
      "postCode": "2640",
      "suburb": "GLENROY"
    },
    {
      "postCode": "2653",
      "suburb": "GLENROY"
    },
    {
      "postCode": "2430",
      "suburb": "GLENTHORNE"
    },
    {
      "postCode": "2460",
      "suburb": "GLENUGIE"
    },
    {
      "postCode": "2768",
      "suburb": "GLENWOOD"
    },
    {
      "postCode": "2250",
      "suburb": "GLENWORTH VALLEY"
    },
    {
      "postCode": "2756",
      "suburb": "GLOSSODIA"
    },
    {
      "postCode": "2422",
      "suburb": "GLOUCESTER"
    },
    {
      "postCode": "2422",
      "suburb": "GLOUCESTER TOPS"
    },
    {
      "postCode": "2232",
      "suburb": "GOARRA"
    },
    {
      "postCode": "2477",
      "suburb": "GOAT ISLAND"
    },
    {
      "postCode": "2727",
      "suburb": "GOBARRALONG"
    },
    {
      "postCode": "2650",
      "suburb": "GOBBAGOMBALIN"
    },
    {
      "postCode": "2720",
      "suburb": "GOCUP"
    },
    {
      "postCode": "2586",
      "suburb": "GODFREYS CREEK"
    },
    {
      "postCode": "2705",
      "suburb": "GOGELDRIE"
    },
    {
      "postCode": "2738",
      "suburb": "GOL GOL"
    },
    {
      "postCode": "2820",
      "suburb": "GOLLAN"
    },
    {
      "postCode": "2580",
      "suburb": "GOLSPIE"
    },
    {
      "postCode": "2839",
      "suburb": "GONGOLGON"
    },
    {
      "postCode": "2732",
      "suburb": "GONN"
    },
    {
      "postCode": "2629",
      "suburb": "GOOANDRA"
    },
    {
      "postCode": "2720",
      "suburb": "GOOBARRAGANDRA"
    },
    {
      "postCode": "2790",
      "suburb": "GOOD FOREST"
    },
    {
      "postCode": "2582",
      "suburb": "GOOD HOPE"
    },
    {
      "postCode": "2575",
      "suburb": "GOODMANS FORD"
    },
    {
      "postCode": "2736",
      "suburb": "GOODNIGHT"
    },
    {
      "postCode": "2838",
      "suburb": "GOODOOGA"
    },
    {
      "postCode": "2469",
      "suburb": "GOODWOOD ISLAND"
    },
    {
      "postCode": "2620",
      "suburb": "GOOGONG"
    },
    {
      "postCode": "2652",
      "suburb": "GOOLGOWI"
    },
    {
      "postCode": "2379",
      "suburb": "GOOLHI"
    },
    {
      "postCode": "2852",
      "suburb": "GOOLMA"
    },
    {
      "postCode": "2480",
      "suburb": "GOOLMANGAR"
    },
    {
      "postCode": "2805",
      "suburb": "GOOLOOGONG"
    },
    {
      "postCode": "2646",
      "suburb": "GOOMBARGANA"
    },
    {
      "postCode": "2480",
      "suburb": "GOONELLABAH"
    },
    {
      "postCode": "2482",
      "suburb": "GOONENGERRY"
    },
    {
      "postCode": "2830",
      "suburb": "GOONOO FOREST"
    },
    {
      "postCode": "2340",
      "suburb": "GOONOO GOONOO"
    },
    {
      "postCode": "2870",
      "suburb": "GOONUMBLA"
    },
    {
      "postCode": "2330",
      "suburb": "GOORANGOOLA"
    },
    {
      "postCode": "2396",
      "suburb": "GOORIANAWA"
    },
    {
      "postCode": "2072",
      "suburb": "GORDON"
    },
    {
      "postCode": "2469",
      "suburb": "GORGE CREEK"
    },
    {
      "postCode": "2795",
      "suburb": "GORMANS HILL"
    },
    {
      "postCode": "2263",
      "suburb": "GOROKAN"
    },
    {
      "postCode": "2250",
      "suburb": "GOSFORD"
    },
    {
      "postCode": "2320",
      "suburb": "GOSFORTH"
    },
    {
      "postCode": "2358",
      "suburb": "GOSTWYCK"
    },
    {
      "postCode": "2580",
      "suburb": "GOULBURN"
    },
    {
      "postCode": "2580",
      "suburb": "GOULBURN NORTH"
    },
    {
      "postCode": "2330",
      "suburb": "GOULDSVILLE"
    },
    {
      "postCode": "2795",
      "suburb": "GOWAN"
    },
    {
      "postCode": "2357",
      "suburb": "GOWANG"
    },
    {
      "postCode": "2330",
      "suburb": "GOWRIE"
    },
    {
      "postCode": "2340",
      "suburb": "GOWRIE"
    },
    {
      "postCode": "2583",
      "suburb": "GRABBEN GULLEN"
    },
    {
      "postCode": "2474",
      "suburb": "GRADYS CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "GRAFTON"
    },
    {
      "postCode": "2403",
      "suburb": "GRAGIN"
    },
    {
      "postCode": "2729",
      "suburb": "GRAHAMSTOWN"
    },
    {
      "postCode": "2360",
      "suburb": "GRAMAN"
    },
    {
      "postCode": "2765",
      "suburb": "GRANTHAM FARM"
    },
    {
      "postCode": "2445",
      "suburb": "GRANTS BEACH"
    },
    {
      "postCode": "2142",
      "suburb": "GRANVILLE"
    },
    {
      "postCode": "2570",
      "suburb": "GRASMERE"
    },
    {
      "postCode": "2441",
      "suburb": "GRASSY HEAD"
    },
    {
      "postCode": "2850",
      "suburb": "GRATTAI"
    },
    {
      "postCode": "2401",
      "suburb": "GRAVESEND"
    },
    {
      "postCode": "2832",
      "suburb": "GRAWIN OPAL FIELDS"
    },
    {
      "postCode": "2232",
      "suburb": "GRAYS POINT"
    },
    {
      "postCode": "2108",
      "suburb": "GREAT MACKEREL BEACH"
    },
    {
      "postCode": "2460",
      "suburb": "GREAT MARLOW"
    },
    {
      "postCode": "2551",
      "suburb": "GREEN CAPE"
    },
    {
      "postCode": "2338",
      "suburb": "GREEN CREEK"
    },
    {
      "postCode": "2471",
      "suburb": "GREEN FOREST"
    },
    {
      "postCode": "2850",
      "suburb": "GREEN GULLY"
    },
    {
      "postCode": "2323",
      "suburb": "GREEN HILLS"
    },
    {
      "postCode": "2365",
      "suburb": "GREEN HILLS"
    },
    {
      "postCode": "2730",
      "suburb": "GREEN HILLS"
    },
    {
      "postCode": "2474",
      "suburb": "GREEN PIGEON"
    },
    {
      "postCode": "2251",
      "suburb": "GREEN POINT"
    },
    {
      "postCode": "2428",
      "suburb": "GREEN POINT"
    },
    {
      "postCode": "2168",
      "suburb": "GREEN VALLEY"
    },
    {
      "postCode": "2190",
      "suburb": "GREENACRE"
    },
    {
      "postCode": "2550",
      "suburb": "GREENDALE"
    },
    {
      "postCode": "2745",
      "suburb": "GREENDALE"
    },
    {
      "postCode": "2809",
      "suburb": "GREENETHORPE"
    },
    {
      "postCode": "2176",
      "suburb": "GREENFIELD PARK"
    },
    {
      "postCode": "2250",
      "suburb": "GREENGROVE"
    },
    {
      "postCode": "2440",
      "suburb": "GREENHILL"
    },
    {
      "postCode": "2230",
      "suburb": "GREENHILLS BEACH"
    },
    {
      "postCode": "2330",
      "suburb": "GREENLANDS"
    },
    {
      "postCode": "2631",
      "suburb": "GREENLANDS"
    },
    {
      "postCode": "2620",
      "suburb": "GREENLEIGH"
    },
    {
      "postCode": "2471",
      "suburb": "GREENRIDGE"
    },
    {
      "postCode": "2540",
      "suburb": "GREENWELL POINT"
    },
    {
      "postCode": "2065",
      "suburb": "GREENWICH"
    },
    {
      "postCode": "2580",
      "suburb": "GREENWICH PARK"
    },
    {
      "postCode": "2642",
      "suburb": "GREG GREG"
    },
    {
      "postCode": "2650",
      "suburb": "GREGADOO"
    },
    {
      "postCode": "2557",
      "suburb": "GREGORY HILLS"
    },
    {
      "postCode": "2549",
      "suburb": "GREIGS FLAT"
    },
    {
      "postCode": "2810",
      "suburb": "GRENFELL"
    },
    {
      "postCode": "2311",
      "suburb": "GRESFORD"
    },
    {
      "postCode": "2334",
      "suburb": "GRETA"
    },
    {
      "postCode": "2325",
      "suburb": "GRETA MAIN"
    },
    {
      "postCode": "2474",
      "suburb": "GREVILLIA"
    },
    {
      "postCode": "2145",
      "suburb": "GREYSTANES"
    },
    {
      "postCode": "2680",
      "suburb": "GRIFFITH"
    },
    {
      "postCode": "2680",
      "suburb": "GRIFFITH DC"
    },
    {
      "postCode": "2680",
      "suburb": "GRIFFITH EAST"
    },
    {
      "postCode": "2666",
      "suburb": "GROGAN"
    },
    {
      "postCode": "2652",
      "suburb": "GRONG GRONG"
    },
    {
      "postCode": "2753",
      "suburb": "GROSE VALE"
    },
    {
      "postCode": "2753",
      "suburb": "GROSE WOLD"
    },
    {
      "postCode": "2627",
      "suburb": "GROSSES PLAIN"
    },
    {
      "postCode": "1220",
      "suburb": "GROSVENOR PLACE"
    },
    {
      "postCode": "2849",
      "suburb": "GROWEE"
    },
    {
      "postCode": "2536",
      "suburb": "GUERILLA BAY"
    },
    {
      "postCode": "2161",
      "suburb": "GUILDFORD"
    },
    {
      "postCode": "2161",
      "suburb": "GUILDFORD WEST"
    },
    {
      "postCode": "2828",
      "suburb": "GULARGAMBONE"
    },
    {
      "postCode": "2347",
      "suburb": "GULF CREEK"
    },
    {
      "postCode": "2852",
      "suburb": "GULGONG"
    },
    {
      "postCode": "2463",
      "suburb": "GULMARRAD"
    },
    {
      "postCode": "2360",
      "suburb": "GUM FLAT"
    },
    {
      "postCode": "2441",
      "suburb": "GUM SCRUB"
    },
    {
      "postCode": "2840",
      "suburb": "GUMBALIE"
    },
    {
      "postCode": "2865",
      "suburb": "GUMBLE"
    },
    {
      "postCode": "2652",
      "suburb": "GUMLY GUMLY"
    },
    {
      "postCode": "2447",
      "suburb": "GUMMA"
    },
    {
      "postCode": "2711",
      "suburb": "GUNBAR"
    },
    {
      "postCode": "2722",
      "suburb": "GUNDAGAI"
    },
    {
      "postCode": "2347",
      "suburb": "GUNDAMULDA"
    },
    {
      "postCode": "2620",
      "suburb": "GUNDAROO"
    },
    {
      "postCode": "2580",
      "suburb": "GUNDARY"
    },
    {
      "postCode": "2840",
      "suburb": "GUNDERBOOKA"
    },
    {
      "postCode": "2775",
      "suburb": "GUNDERMAN"
    },
    {
      "postCode": "2337",
      "suburb": "GUNDY"
    },
    {
      "postCode": "2333",
      "suburb": "GUNGAL"
    },
    {
      "postCode": "2829",
      "suburb": "GUNGALMAN"
    },
    {
      "postCode": "2380",
      "suburb": "GUNNEDAH"
    },
    {
      "postCode": "2581",
      "suburb": "GUNNING"
    },
    {
      "postCode": "2876",
      "suburb": "GUNNING GAP"
    },
    {
      "postCode": "2876",
      "suburb": "GUNNINGBLAND"
    },
    {
      "postCode": "2632",
      "suburb": "GUNNINGRAH"
    },
    {
      "postCode": "2852",
      "suburb": "GUNTAWANG"
    },
    {
      "postCode": "2398",
      "suburb": "GURLEY"
    },
    {
      "postCode": "2787",
      "suburb": "GURNANG"
    },
    {
      "postCode": "2460",
      "suburb": "GURRANANG"
    },
    {
      "postCode": "2581",
      "suburb": "GURRUNDAH"
    },
    {
      "postCode": "2624",
      "suburb": "GUTHEGA"
    },
    {
      "postCode": "2798",
      "suburb": "GUYONG"
    },
    {
      "postCode": "2365",
      "suburb": "GUYRA"
    },
    {
      "postCode": "2356",
      "suburb": "GWABEGAR"
    },
    {
      "postCode": "2259",
      "suburb": "GWANDALAN"
    },
    {
      "postCode": "2500",
      "suburb": "GWYNNEVILLE"
    },
    {
      "postCode": "2227",
      "suburb": "GYMEA"
    },
    {
      "postCode": "2227",
      "suburb": "GYMEA BAY"
    },
    {
      "postCode": "2045",
      "suburb": "HABERFIELD"
    },
    {
      "postCode": "2441",
      "suburb": "HACKS FERRY"
    },
    {
      "postCode": "2262",
      "suburb": "HALEKULANI"
    },
    {
      "postCode": "2460",
      "suburb": "HALFWAY CREEK"
    },
    {
      "postCode": "2430",
      "suburb": "HALLIDAYS POINT"
    },
    {
      "postCode": "2259",
      "suburb": "HALLORAN"
    },
    {
      "postCode": "2346",
      "suburb": "HALLS CREEK"
    },
    {
      "postCode": "2340",
      "suburb": "HALLSVILLE"
    },
    {
      "postCode": "2311",
      "suburb": "HALTON"
    },
    {
      "postCode": "2330",
      "suburb": "HAMBLEDON HILL"
    },
    {
      "postCode": "2303",
      "suburb": "HAMILTON"
    },
    {
      "postCode": "2303",
      "suburb": "HAMILTON DC"
    },
    {
      "postCode": "2303",
      "suburb": "HAMILTON EAST"
    },
    {
      "postCode": "2292",
      "suburb": "HAMILTON NORTH"
    },
    {
      "postCode": "2303",
      "suburb": "HAMILTON SOUTH"
    },
    {
      "postCode": "2641",
      "suburb": "HAMILTON VALLEY"
    },
    {
      "postCode": "2259",
      "suburb": "HAMLYN TERRACE"
    },
    {
      "postCode": "2170",
      "suburb": "HAMMONDVILLE"
    },
    {
      "postCode": "2440",
      "suburb": "HAMPDEN HALL"
    },
    {
      "postCode": "2790",
      "suburb": "HAMPTON"
    },
    {
      "postCode": "2340",
      "suburb": "HANGING ROCK"
    },
    {
      "postCode": "2420",
      "suburb": "HANLEYS CREEK"
    },
    {
      "postCode": "2443",
      "suburb": "HANNAM VALE"
    },
    {
      "postCode": "2680",
      "suburb": "HANWOOD"
    },
    {
      "postCode": "2587",
      "suburb": "HARDEN"
    },
    {
      "postCode": "2257",
      "suburb": "HARDYS BAY"
    },
    {
      "postCode": "2650",
      "suburb": "HAREFIELD"
    },
    {
      "postCode": "2850",
      "suburb": "HARGRAVES"
    },
    {
      "postCode": "2622",
      "suburb": "HAROLDS CROSS"
    },
    {
      "postCode": "2390",
      "suburb": "HARPARARY"
    },
    {
      "postCode": "2321",
      "suburb": "HARPERS HILL"
    },
    {
      "postCode": "2427",
      "suburb": "HARRINGTON"
    },
    {
      "postCode": "2567",
      "suburb": "HARRINGTON PARK"
    },
    {
      "postCode": "2150",
      "suburb": "HARRIS PARK"
    },
    {
      "postCode": "2790",
      "suburb": "HARTLEY"
    },
    {
      "postCode": "2790",
      "suburb": "HARTLEY VALE"
    },
    {
      "postCode": "2710",
      "suburb": "HARTWOOD"
    },
    {
      "postCode": "2446",
      "suburb": "HARTYS PLAINS"
    },
    {
      "postCode": "2465",
      "suburb": "HARWOOD"
    },
    {
      "postCode": "2761",
      "suburb": "HASSALL GROVE"
    },
    {
      "postCode": "2790",
      "suburb": "HASSANS WALLS"
    },
    {
      "postCode": "2489",
      "suburb": "HASTINGS POINT"
    },
    {
      "postCode": "2440",
      "suburb": "HAT HEAD"
    },
    {
      "postCode": "2715",
      "suburb": "HATFIELD"
    },
    {
      "postCode": "2850",
      "suburb": "HAVILAH"
    },
    {
      "postCode": "2777",
      "suburb": "HAWKESBURY HEIGHTS"
    },
    {
      "postCode": "2324",
      "suburb": "HAWKS NEST"
    },
    {
      "postCode": "2711",
      "suburb": "HAY"
    },
    {
      "postCode": "2711",
      "suburb": "HAY SOUTH"
    },
    {
      "postCode": "2850",
      "suburb": "HAYES GAP"
    },
    {
      "postCode": "1239",
      "suburb": "HAYMARKET"
    },
    {
      "postCode": "1240",
      "suburb": "HAYMARKET"
    },
    {
      "postCode": "2000",
      "suburb": "HAYMARKET"
    },
    {
      "postCode": "2469",
      "suburb": "HAYSTACK"
    },
    {
      "postCode": "2481",
      "suburb": "HAYTERS HILL"
    },
    {
      "postCode": "2530",
      "suburb": "HAYWARDS BAY"
    },
    {
      "postCode": "2779",
      "suburb": "HAZELBROOK"
    },
    {
      "postCode": "2787",
      "suburb": "HAZELGROVE"
    },
    {
      "postCode": "2233",
      "suburb": "HEATHCOTE"
    },
    {
      "postCode": "2324",
      "suburb": "HEATHERBRAE"
    },
    {
      "postCode": "2330",
      "suburb": "HEBDEN"
    },
    {
      "postCode": "2770",
      "suburb": "HEBERSHAM"
    },
    {
      "postCode": "2168",
      "suburb": "HECKENBERG"
    },
    {
      "postCode": "2321",
      "suburb": "HEDDON GRETA"
    },
    {
      "postCode": "2460",
      "suburb": "HEIFER STATION"
    },
    {
      "postCode": "2508",
      "suburb": "HELENSBURGH"
    },
    {
      "postCode": "2111",
      "suburb": "HENLEY"
    },
    {
      "postCode": "2658",
      "suburb": "HENTY"
    },
    {
      "postCode": "2622",
      "suburb": "HEREFORD HALL"
    },
    {
      "postCode": "2831",
      "suburb": "HERMIDALE"
    },
    {
      "postCode": "2790",
      "suburb": "HERMITAGE FLAT"
    },
    {
      "postCode": "2453",
      "suburb": "HERNANI"
    },
    {
      "postCode": "2439",
      "suburb": "HERONS CREEK"
    },
    {
      "postCode": "2322",
      "suburb": "HEXHAM"
    },
    {
      "postCode": "2440",
      "suburb": "HICKEYS CREEK"
    },
    {
      "postCode": "2575",
      "suburb": "HIGH RANGE"
    },
    {
      "postCode": "2775",
      "suburb": "HIGHER MACDONALD"
    },
    {
      "postCode": "2289",
      "suburb": "HIGHFIELDS"
    },
    {
      "postCode": "2850",
      "suburb": "HILL END"
    },
    {
      "postCode": "2575",
      "suburb": "HILL TOP"
    },
    {
      "postCode": "2628",
      "suburb": "HILL TOP"
    },
    {
      "postCode": "2420",
      "suburb": "HILLDALE"
    },
    {
      "postCode": "2350",
      "suburb": "HILLGROVE"
    },
    {
      "postCode": "2650",
      "suburb": "HILLGROVE"
    },
    {
      "postCode": "2290",
      "suburb": "HILLSBOROUGH"
    },
    {
      "postCode": "2320",
      "suburb": "HILLSBOROUGH"
    },
    {
      "postCode": "2036",
      "suburb": "HILLSDALE"
    },
    {
      "postCode": "2675",
      "suburb": "HILLSTON"
    },
    {
      "postCode": "2430",
      "suburb": "HILLVILLE"
    },
    {
      "postCode": "2340",
      "suburb": "HILLVUE"
    },
    {
      "postCode": "2168",
      "suburb": "HINCHINBROOK"
    },
    {
      "postCode": "2321",
      "suburb": "HINTON"
    },
    {
      "postCode": "2540",
      "suburb": "HMAS ALBATROSS"
    },
    {
      "postCode": "2091",
      "suburb": "HMAS PENGUIN"
    },
    {
      "postCode": "2060",
      "suburb": "HMAS PLATYPUS"
    },
    {
      "postCode": "2027",
      "suburb": "HMAS RUSHCUTTERS"
    },
    {
      "postCode": "2060",
      "suburb": "HMAS WATERHEN"
    },
    {
      "postCode": "2030",
      "suburb": "HMAS WATSON"
    },
    {
      "postCode": "2753",
      "suburb": "HOBARTVILLE"
    },
    {
      "postCode": "2795",
      "suburb": "HOBBYS YARDS"
    },
    {
      "postCode": "2469",
      "suburb": "HOGARTH RANGE"
    },
    {
      "postCode": "2644",
      "suburb": "HOLBROOK"
    },
    {
      "postCode": "2250",
      "suburb": "HOLGATE"
    },
    {
      "postCode": "2446",
      "suburb": "HOLLISDALE"
    },
    {
      "postCode": "2328",
      "suburb": "HOLLYDEEN"
    },
    {
      "postCode": "2286",
      "suburb": "HOLMESVILLE"
    },
    {
      "postCode": "2142",
      "suburb": "HOLROYD"
    },
    {
      "postCode": "2173",
      "suburb": "HOLSWORTHY"
    },
    {
      "postCode": "2631",
      "suburb": "HOLTS FLAT"
    },
    {
      "postCode": "2850",
      "suburb": "HOME RULE"
    },
    {
      "postCode": "2140",
      "suburb": "HOMEBUSH"
    },
    {
      "postCode": "2140",
      "suburb": "HOMEBUSH SOUTH"
    },
    {
      "postCode": "2140",
      "suburb": "HOMEBUSH WEST"
    },
    {
      "postCode": "2474",
      "suburb": "HOMELEIGH"
    },
    {
      "postCode": "2825",
      "suburb": "HONEYBUGLE"
    },
    {
      "postCode": "2646",
      "suburb": "HOPEFIELD"
    },
    {
      "postCode": "2484",
      "suburb": "HOPKINS CREEK"
    },
    {
      "postCode": "2171",
      "suburb": "HORNINGSEA PARK"
    },
    {
      "postCode": "1630",
      "suburb": "HORNSBY"
    },
    {
      "postCode": "2077",
      "suburb": "HORNSBY"
    },
    {
      "postCode": "2077",
      "suburb": "HORNSBY HEIGHTS"
    },
    {
      "postCode": "1635",
      "suburb": "HORNSBY WESTFIELD"
    },
    {
      "postCode": "2474",
      "suburb": "HORSE STATION CREEK"
    },
    {
      "postCode": "2320",
      "suburb": "HORSESHOE BEND"
    },
    {
      "postCode": "2474",
      "suburb": "HORSESHOE CREEK"
    },
    {
      "postCode": "2256",
      "suburb": "HORSFIELD BAY"
    },
    {
      "postCode": "2530",
      "suburb": "HORSLEY"
    },
    {
      "postCode": "2175",
      "suburb": "HORSLEY PARK"
    },
    {
      "postCode": "2621",
      "suburb": "HOSKINSTOWN"
    },
    {
      "postCode": "2794",
      "suburb": "HOVELLS CREEK"
    },
    {
      "postCode": "2480",
      "suburb": "HOWARDS GRASS"
    },
    {
      "postCode": "2360",
      "suburb": "HOWELL"
    },
    {
      "postCode": "2330",
      "suburb": "HOWES VALLEY"
    },
    {
      "postCode": "2330",
      "suburb": "HOWICK"
    },
    {
      "postCode": "2643",
      "suburb": "HOWLONG"
    },
    {
      "postCode": "2171",
      "suburb": "HOXTON PARK"
    },
    {
      "postCode": "2652",
      "suburb": "HUMULA"
    },
    {
      "postCode": "2840",
      "suburb": "HUNGERFORD"
    },
    {
      "postCode": "2310",
      "suburb": "HUNTER REGION MC"
    },
    {
      "postCode": "2110",
      "suburb": "HUNTERS HILL"
    },
    {
      "postCode": "2330",
      "suburb": "HUNTERVIEW"
    },
    {
      "postCode": "2446",
      "suburb": "HUNTINGDON"
    },
    {
      "postCode": "2148",
      "suburb": "HUNTINGWOOD"
    },
    {
      "postCode": "2530",
      "suburb": "HUNTLEY"
    },
    {
      "postCode": "2800",
      "suburb": "HUNTLEY"
    },
    {
      "postCode": "2111",
      "suburb": "HUNTLEYS COVE"
    },
    {
      "postCode": "2111",
      "suburb": "HUNTLEYS POINT"
    },
    {
      "postCode": "2482",
      "suburb": "HUONBROOK"
    },
    {
      "postCode": "2193",
      "suburb": "HURLSTONE PARK"
    },
    {
      "postCode": "2220",
      "suburb": "HURSTVILLE"
    },
    {
      "postCode": "1481",
      "suburb": "HURSTVILLE BC"
    },
    {
      "postCode": "2220",
      "suburb": "HURSTVILLE GROVE"
    },
    {
      "postCode": "2220",
      "suburb": "HURSTVILLE WESTFIELD"
    },
    {
      "postCode": "2540",
      "suburb": "HUSKISSON"
    },
    {
      "postCode": "2540",
      "suburb": "HYAMS BEACH"
    },
    {
      "postCode": "2454",
      "suburb": "HYDES CREEK"
    },
    {
      "postCode": "2448",
      "suburb": "HYLAND PARK"
    },
    {
      "postCode": "2446",
      "suburb": "HYNDMANS CREEK"
    },
    {
      "postCode": "2463",
      "suburb": "ILARWILL"
    },
    {
      "postCode": "2850",
      "suburb": "ILFORD"
    },
    {
      "postCode": "2590",
      "suburb": "ILLABO"
    },
    {
      "postCode": "2540",
      "suburb": "ILLAROO"
    },
    {
      "postCode": "2234",
      "suburb": "ILLAWONG"
    },
    {
      "postCode": "2466",
      "suburb": "ILUKA"
    },
    {
      "postCode": "2642",
      "suburb": "INDI"
    },
    {
      "postCode": "2627",
      "suburb": "INGEBIRAH"
    },
    {
      "postCode": "2627",
      "suburb": "INGEEGOODBEE"
    },
    {
      "postCode": "1890",
      "suburb": "INGLEBURN"
    },
    {
      "postCode": "2565",
      "suburb": "INGLEBURN"
    },
    {
      "postCode": "2101",
      "suburb": "INGLESIDE"
    },
    {
      "postCode": "2429",
      "suburb": "INNES VIEW"
    },
    {
      "postCode": "2891",
      "suburb": "INTERNATIONAL MC"
    },
    {
      "postCode": "2360",
      "suburb": "INVERELL"
    },
    {
      "postCode": "2422",
      "suburb": "INVERGORDON"
    },
    {
      "postCode": "2350",
      "suburb": "INVERGOWRIE"
    },
    {
      "postCode": "2473",
      "suburb": "IRON GATES"
    },
    {
      "postCode": "2474",
      "suburb": "IRON POT CREEK"
    },
    {
      "postCode": "2347",
      "suburb": "IRONBARK"
    },
    {
      "postCode": "2630",
      "suburb": "IRONMUNGY"
    },
    {
      "postCode": "2470",
      "suburb": "IRVINGTON"
    },
    {
      "postCode": "2835",
      "suburb": "IRYMPLE"
    },
    {
      "postCode": "2795",
      "suburb": "ISABELLA"
    },
    {
      "postCode": "2296",
      "suburb": "ISLINGTON"
    },
    {
      "postCode": "2878",
      "suburb": "IVANHOE"
    },
    {
      "postCode": "2460",
      "suburb": "JACKADGERY"
    },
    {
      "postCode": "2390",
      "suburb": "JACKS CREEK"
    },
    {
      "postCode": "2469",
      "suburb": "JACKSONS FLAT"
    },
    {
      "postCode": "2463",
      "suburb": "JACKY BULBIN FLAT"
    },
    {
      "postCode": "2627",
      "suburb": "JACOBS RIVER"
    },
    {
      "postCode": "2642",
      "suburb": "JAGUMBA"
    },
    {
      "postCode": "2642",
      "suburb": "JAGUNGAL WILDERNESS"
    },
    {
      "postCode": "2533",
      "suburb": "JAMBEROO"
    },
    {
      "postCode": "2463",
      "suburb": "JAMES CREEK"
    },
    {
      "postCode": "2750",
      "suburb": "JAMISONTOWN"
    },
    {
      "postCode": "2226",
      "suburb": "JANNALI"
    },
    {
      "postCode": "2535",
      "suburb": "JASPERS BRUSH"
    },
    {
      "postCode": "2787",
      "suburb": "JAUNTER"
    },
    {
      "postCode": "2582",
      "suburb": "JEIR"
    },
    {
      "postCode": "2550",
      "suburb": "JELLAT JELLAT"
    },
    {
      "postCode": "2871",
      "suburb": "JEMALONG"
    },
    {
      "postCode": "2622",
      "suburb": "JEMBAICUMBENE"
    },
    {
      "postCode": "4383",
      "suburb": "JENNINGS"
    },
    {
      "postCode": "2790",
      "suburb": "JENOLAN"
    },
    {
      "postCode": "2350",
      "suburb": "JEOGLA"
    },
    {
      "postCode": "2630",
      "suburb": "JERANGLE"
    },
    {
      "postCode": "2536",
      "suburb": "JEREMADRA"
    },
    {
      "postCode": "2795",
      "suburb": "JEREMY"
    },
    {
      "postCode": "2716",
      "suburb": "JERILDERIE"
    },
    {
      "postCode": "2622",
      "suburb": "JERRABATTGULLA"
    },
    {
      "postCode": "2619",
      "suburb": "JERRABOMBERRA"
    },
    {
      "postCode": "2533",
      "suburb": "JERRARA"
    },
    {
      "postCode": "2582",
      "suburb": "JERRAWA"
    },
    {
      "postCode": "2540",
      "suburb": "JERRAWANGALA"
    },
    {
      "postCode": "2580",
      "suburb": "JERRONG"
    },
    {
      "postCode": "2330",
      "suburb": "JERRYS PLAINS"
    },
    {
      "postCode": "2431",
      "suburb": "JERSEYVILLE"
    },
    {
      "postCode": "2299",
      "suburb": "JESMOND"
    },
    {
      "postCode": "2280",
      "suburb": "JEWELLS"
    },
    {
      "postCode": "2397",
      "suburb": "JEWS LAGOON"
    },
    {
      "postCode": "2232",
      "suburb": "JIBBON"
    },
    {
      "postCode": "2480",
      "suburb": "JIGGI"
    },
    {
      "postCode": "2259",
      "suburb": "JILLIBY"
    },
    {
      "postCode": "2628",
      "suburb": "JIMENBUEN"
    },
    {
      "postCode": "2631",
      "suburb": "JINCUMBILLY"
    },
    {
      "postCode": "2627",
      "suburb": "JINDABYNE"
    },
    {
      "postCode": "2622",
      "suburb": "JINDEN"
    },
    {
      "postCode": "2642",
      "suburb": "JINDERA"
    },
    {
      "postCode": "2642",
      "suburb": "JINGELLIC"
    },
    {
      "postCode": "2622",
      "suburb": "JINGERA"
    },
    {
      "postCode": "2575",
      "suburb": "JOADJA"
    },
    {
      "postCode": "2469",
      "suburb": "JOES BOX"
    },
    {
      "postCode": "2443",
      "suburb": "JOHNS RIVER"
    },
    {
      "postCode": "2445",
      "suburb": "JOLLY NOSE"
    },
    {
      "postCode": "2720",
      "suburb": "JONES BRIDGE"
    },
    {
      "postCode": "2430",
      "suburb": "JONES ISLAND"
    },
    {
      "postCode": "2747",
      "suburb": "JORDAN SPRINGS"
    },
    {
      "postCode": "2795",
      "suburb": "JUDDS CREEK"
    },
    {
      "postCode": "2726",
      "suburb": "JUGIONG"
    },
    {
      "postCode": "2460",
      "suburb": "JUNCTION HILL"
    },
    {
      "postCode": "2663",
      "suburb": "JUNEE"
    },
    {
      "postCode": "2666",
      "suburb": "JUNEE REEFS"
    },
    {
      "postCode": "2290",
      "suburb": "KAHIBAH"
    },
    {
      "postCode": "2850",
      "suburb": "KAINS FLAT"
    },
    {
      "postCode": "2454",
      "suburb": "KALANG"
    },
    {
      "postCode": "2550",
      "suburb": "KALARU"
    },
    {
      "postCode": "2627",
      "suburb": "KALKITE"
    },
    {
      "postCode": "2665",
      "suburb": "KAMARAH"
    },
    {
      "postCode": "2550",
      "suburb": "KAMERUKA"
    },
    {
      "postCode": "2530",
      "suburb": "KANAHOOKA"
    },
    {
      "postCode": "2787",
      "suburb": "KANANGRA"
    },
    {
      "postCode": "2848",
      "suburb": "KANDOS"
    },
    {
      "postCode": "2576",
      "suburb": "KANGALOON"
    },
    {
      "postCode": "2460",
      "suburb": "KANGAROO CREEK"
    },
    {
      "postCode": "2224",
      "suburb": "KANGAROO POINT"
    },
    {
      "postCode": "2577",
      "suburb": "KANGAROO VALLEY"
    },
    {
      "postCode": "2800",
      "suburb": "KANGAROOBIE"
    },
    {
      "postCode": "2582",
      "suburb": "KANGIARA"
    },
    {
      "postCode": "2258",
      "suburb": "KANGY ANGY"
    },
    {
      "postCode": "2790",
      "suburb": "KANIMBLA"
    },
    {
      "postCode": "2550",
      "suburb": "KANOONA"
    },
    {
      "postCode": "2259",
      "suburb": "KANWAL"
    },
    {
      "postCode": "2661",
      "suburb": "KAPOOKA"
    },
    {
      "postCode": "2390",
      "suburb": "KAPUTAR"
    },
    {
      "postCode": "2429",
      "suburb": "KARAAK FLAT"
    },
    {
      "postCode": "2620",
      "suburb": "KARABAR"
    },
    {
      "postCode": "2450",
      "suburb": "KARANGI"
    },
    {
      "postCode": "2232",
      "suburb": "KAREELA"
    },
    {
      "postCode": "2250",
      "suburb": "KARIONG"
    },
    {
      "postCode": "2337",
      "suburb": "KARS SPRINGS"
    },
    {
      "postCode": "2324",
      "suburb": "KARUAH"
    },
    {
      "postCode": "2780",
      "suburb": "KATOOMBA"
    },
    {
      "postCode": "2780",
      "suburb": "KATOOMBA DC"
    },
    {
      "postCode": "2333",
      "suburb": "KAYUGA"
    },
    {
      "postCode": "2558",
      "suburb": "KEARNS"
    },
    {
      "postCode": "2325",
      "suburb": "KEARSLEY"
    },
    {
      "postCode": "2340",
      "suburb": "KEEPIT"
    },
    {
      "postCode": "2404",
      "suburb": "KEERA"
    },
    {
      "postCode": "2480",
      "suburb": "KEERRONG"
    },
    {
      "postCode": "2320",
      "suburb": "KEINBAH"
    },
    {
      "postCode": "2500",
      "suburb": "KEIRAVILLE"
    },
    {
      "postCode": "2478",
      "suburb": "KEITH HALL"
    },
    {
      "postCode": "2849",
      "suburb": "KELGOOLA"
    },
    {
      "postCode": "2350",
      "suburb": "KELLYS PLAINS"
    },
    {
      "postCode": "2155",
      "suburb": "KELLYVILLE"
    },
    {
      "postCode": "2155",
      "suburb": "KELLYVILLE RIDGE"
    },
    {
      "postCode": "2795",
      "suburb": "KELSO"
    },
    {
      "postCode": "2380",
      "suburb": "KELVIN"
    },
    {
      "postCode": "2526",
      "suburb": "KEMBLA GRANGE"
    },
    {
      "postCode": "2526",
      "suburb": "KEMBLA HEIGHTS"
    },
    {
      "postCode": "2178",
      "suburb": "KEMPS CREEK"
    },
    {
      "postCode": "2440",
      "suburb": "KEMPSEY"
    },
    {
      "postCode": "2439",
      "suburb": "KENDALL"
    },
    {
      "postCode": "2396",
      "suburb": "KENEBRI"
    },
    {
      "postCode": "2449",
      "suburb": "KENNAICLE CREEK"
    },
    {
      "postCode": "1465",
      "suburb": "KENSINGTON"
    },
    {
      "postCode": "2033",
      "suburb": "KENSINGTON"
    },
    {
      "postCode": "2156",
      "suburb": "KENTHURST"
    },
    {
      "postCode": "2560",
      "suburb": "KENTLYN"
    },
    {
      "postCode": "2354",
      "suburb": "KENTUCKY"
    },
    {
      "postCode": "2354",
      "suburb": "KENTUCKY SOUTH"
    },
    {
      "postCode": "2439",
      "suburb": "KEREWONG"
    },
    {
      "postCode": "2711",
      "suburb": "KERI KERI"
    },
    {
      "postCode": "2328",
      "suburb": "KERRABEE"
    },
    {
      "postCode": "2835",
      "suburb": "KERRIGUNDI"
    },
    {
      "postCode": "2800",
      "suburb": "KERRS CREEK"
    },
    {
      "postCode": "2439",
      "suburb": "KEW"
    },
    {
      "postCode": "2469",
      "suburb": "KEYBARBIN"
    },
    {
      "postCode": "2642",
      "suburb": "KHANCOBAN"
    },
    {
      "postCode": "2429",
      "suburb": "KHATAMBUHL"
    },
    {
      "postCode": "2422",
      "suburb": "KIA ORA"
    },
    {
      "postCode": "2877",
      "suburb": "KIACATOO"
    },
    {
      "postCode": "2551",
      "suburb": "KIAH"
    },
    {
      "postCode": "2533",
      "suburb": "KIAMA"
    },
    {
      "postCode": "2533",
      "suburb": "KIAMA DOWNS"
    },
    {
      "postCode": "2533",
      "suburb": "KIAMA HEIGHTS"
    },
    {
      "postCode": "2629",
      "suburb": "KIANDRA"
    },
    {
      "postCode": "2546",
      "suburb": "KIANGA"
    },
    {
      "postCode": "2259",
      "suburb": "KIAR"
    },
    {
      "postCode": "2830",
      "suburb": "KICKABIL"
    },
    {
      "postCode": "2484",
      "suburb": "KIELVALE"
    },
    {
      "postCode": "2594",
      "suburb": "KIKIAMAH"
    },
    {
      "postCode": "2669",
      "suburb": "KIKOIRA"
    },
    {
      "postCode": "2283",
      "suburb": "KILABEN BAY"
    },
    {
      "postCode": "2472",
      "suburb": "KILGIN"
    },
    {
      "postCode": "2474",
      "suburb": "KILGRA"
    },
    {
      "postCode": "2429",
      "suburb": "KILLABAKH"
    },
    {
      "postCode": "2071",
      "suburb": "KILLARA"
    },
    {
      "postCode": "2087",
      "suburb": "KILLARNEY HEIGHTS"
    },
    {
      "postCode": "2261",
      "suburb": "KILLARNEY VALE"
    },
    {
      "postCode": "2429",
      "suburb": "KILLAWARRA"
    },
    {
      "postCode": "2257",
      "suburb": "KILLCARE"
    },
    {
      "postCode": "2257",
      "suburb": "KILLCARE HEIGHTS"
    },
    {
      "postCode": "2449",
      "suburb": "KILLIEKRANKIE"
    },
    {
      "postCode": "2720",
      "suburb": "KILLIMICAT"
    },
    {
      "postCode": "2278",
      "suburb": "KILLINGWORTH"
    },
    {
      "postCode": "2795",
      "suburb": "KILLONGBUTTA"
    },
    {
      "postCode": "2429",
      "suburb": "KIMBRIKI"
    },
    {
      "postCode": "2440",
      "suburb": "KINCHELA"
    },
    {
      "postCode": "2251",
      "suburb": "KINCUMBER"
    },
    {
      "postCode": "2251",
      "suburb": "KINCUMBER SOUTH"
    },
    {
      "postCode": "2446",
      "suburb": "KINDEE"
    },
    {
      "postCode": "2622",
      "suburb": "KINDERVALE"
    },
    {
      "postCode": "2446",
      "suburb": "KING CREEK"
    },
    {
      "postCode": "2259",
      "suburb": "KINGFISHER SHORES"
    },
    {
      "postCode": "2540",
      "suburb": "KINGHORNE"
    },
    {
      "postCode": "1340",
      "suburb": "KINGS CROSS"
    },
    {
      "postCode": "2487",
      "suburb": "KINGS FOREST"
    },
    {
      "postCode": "2324",
      "suburb": "KINGS HILL"
    },
    {
      "postCode": "2147",
      "suburb": "KINGS LANGLEY"
    },
    {
      "postCode": "2148",
      "suburb": "KINGS PARK"
    },
    {
      "postCode": "2360",
      "suburb": "KINGS PLAINS"
    },
    {
      "postCode": "2799",
      "suburb": "KINGS PLAINS"
    },
    {
      "postCode": "2539",
      "suburb": "KINGS POINT"
    },
    {
      "postCode": "2487",
      "suburb": "KINGSCLIFF"
    },
    {
      "postCode": "2580",
      "suburb": "KINGSDALE"
    },
    {
      "postCode": "2118",
      "suburb": "KINGSDENE"
    },
    {
      "postCode": "2032",
      "suburb": "KINGSFORD"
    },
    {
      "postCode": "2370",
      "suburb": "KINGSGATE"
    },
    {
      "postCode": "1480",
      "suburb": "KINGSGROVE"
    },
    {
      "postCode": "2208",
      "suburb": "KINGSGROVE"
    },
    {
      "postCode": "2370",
      "suburb": "KINGSLAND"
    },
    {
      "postCode": "2358",
      "suburb": "KINGSTOWN"
    },
    {
      "postCode": "2587",
      "suburb": "KINGSVALE"
    },
    {
      "postCode": "2208",
      "suburb": "KINGSWAY WEST"
    },
    {
      "postCode": "2340",
      "suburb": "KINGSWOOD"
    },
    {
      "postCode": "2550",
      "suburb": "KINGSWOOD"
    },
    {
      "postCode": "2747",
      "suburb": "KINGSWOOD"
    },
    {
      "postCode": "2478",
      "suburb": "KINVARA"
    },
    {
      "postCode": "2539",
      "suburb": "KIOLOA"
    },
    {
      "postCode": "2537",
      "suburb": "KIORA"
    },
    {
      "postCode": "2441",
      "suburb": "KIPPARA"
    },
    {
      "postCode": "2429",
      "suburb": "KIPPAXS"
    },
    {
      "postCode": "2469",
      "suburb": "KIPPENDUFF"
    },
    {
      "postCode": "2795",
      "suburb": "KIRKCONNELL"
    },
    {
      "postCode": "2570",
      "suburb": "KIRKHAM"
    },
    {
      "postCode": "2232",
      "suburb": "KIRRAWEE"
    },
    {
      "postCode": "2232",
      "suburb": "KIRRAWEE DC"
    },
    {
      "postCode": "2061",
      "suburb": "KIRRIBILLI"
    },
    {
      "postCode": "2325",
      "suburb": "KITCHENER"
    },
    {
      "postCode": "2430",
      "suburb": "KIWARRAK"
    },
    {
      "postCode": "2346",
      "suburb": "KLORI"
    },
    {
      "postCode": "2577",
      "suburb": "KNIGHTS HILL"
    },
    {
      "postCode": "2479",
      "suburb": "KNOCKROW"
    },
    {
      "postCode": "2424",
      "suburb": "KNORRIT FLAT"
    },
    {
      "postCode": "2424",
      "suburb": "KNORRIT FOREST"
    },
    {
      "postCode": "1485",
      "suburb": "KOGARAH"
    },
    {
      "postCode": "2217",
      "suburb": "KOGARAH"
    },
    {
      "postCode": "2217",
      "suburb": "KOGARAH BAY"
    },
    {
      "postCode": "2680",
      "suburb": "KOOBA"
    },
    {
      "postCode": "2370",
      "suburb": "KOOKABOOKRA"
    },
    {
      "postCode": "2256",
      "suburb": "KOOLEWONG"
    },
    {
      "postCode": "2460",
      "suburb": "KOOLKHAN"
    },
    {
      "postCode": "2530",
      "suburb": "KOONAWARRA"
    },
    {
      "postCode": "2480",
      "suburb": "KOONORIGAN"
    },
    {
      "postCode": "2482",
      "suburb": "KOONYUM RANGE"
    },
    {
      "postCode": "2304",
      "suburb": "KOORAGANG"
    },
    {
      "postCode": "2430",
      "suburb": "KOORAINGHAT"
    },
    {
      "postCode": "2807",
      "suburb": "KOORAWATHA"
    },
    {
      "postCode": "2650",
      "suburb": "KOORINGAL"
    },
    {
      "postCode": "2352",
      "suburb": "KOOTINGAL"
    },
    {
      "postCode": "2735",
      "suburb": "KORALEIGH"
    },
    {
      "postCode": "2476",
      "suburb": "KOREELAH"
    },
    {
      "postCode": "2450",
      "suburb": "KORORA"
    },
    {
      "postCode": "2627",
      "suburb": "KOSCIUSZKO"
    },
    {
      "postCode": "2627",
      "suburb": "KOSCIUSZKO NATIONAL PARK"
    },
    {
      "postCode": "2289",
      "suburb": "KOTARA"
    },
    {
      "postCode": "2305",
      "suburb": "KOTARA EAST"
    },
    {
      "postCode": "2289",
      "suburb": "KOTARA FAIR"
    },
    {
      "postCode": "2289",
      "suburb": "KOTARA SOUTH"
    },
    {
      "postCode": "2429",
      "suburb": "KRAMBACH"
    },
    {
      "postCode": "2622",
      "suburb": "KRAWARREE"
    },
    {
      "postCode": "2460",
      "suburb": "KREMNOS"
    },
    {
      "postCode": "2250",
      "suburb": "KULNURA"
    },
    {
      "postCode": "2835",
      "suburb": "KULWIN"
    },
    {
      "postCode": "2730",
      "suburb": "KUNAMA"
    },
    {
      "postCode": "2441",
      "suburb": "KUNDABUNG"
    },
    {
      "postCode": "2429",
      "suburb": "KUNDIBAKH"
    },
    {
      "postCode": "2430",
      "suburb": "KUNDLE KUNDLE"
    },
    {
      "postCode": "2460",
      "suburb": "KUNGALA"
    },
    {
      "postCode": "2484",
      "suburb": "KUNGHUR"
    },
    {
      "postCode": "2484",
      "suburb": "KUNGHUR CREEK"
    },
    {
      "postCode": "2757",
      "suburb": "KURMOND"
    },
    {
      "postCode": "2231",
      "suburb": "KURNELL"
    },
    {
      "postCode": "2089",
      "suburb": "KURRABA POINT"
    },
    {
      "postCode": "2758",
      "suburb": "KURRAJONG"
    },
    {
      "postCode": "2758",
      "suburb": "KURRAJONG HEIGHTS"
    },
    {
      "postCode": "2758",
      "suburb": "KURRAJONG HILLS"
    },
    {
      "postCode": "2327",
      "suburb": "KURRI KURRI"
    },
    {
      "postCode": "2715",
      "suburb": "KYALITE"
    },
    {
      "postCode": "2460",
      "suburb": "KYARRAN"
    },
    {
      "postCode": "2631",
      "suburb": "KYBEYAN"
    },
    {
      "postCode": "2650",
      "suburb": "KYEAMBA"
    },
    {
      "postCode": "2216",
      "suburb": "KYEEMAGH"
    },
    {
      "postCode": "2221",
      "suburb": "KYLE BAY"
    },
    {
      "postCode": "2484",
      "suburb": "KYNNUMBOON"
    },
    {
      "postCode": "2474",
      "suburb": "KYOGLE"
    },
    {
      "postCode": "2036",
      "suburb": "LA PEROUSE"
    },
    {
      "postCode": "2720",
      "suburb": "LACMALAC"
    },
    {
      "postCode": "2581",
      "suburb": "LADE VALE"
    },
    {
      "postCode": "2652",
      "suburb": "LADYSMITH"
    },
    {
      "postCode": "2795",
      "suburb": "LAFFING WATERS"
    },
    {
      "postCode": "2583",
      "suburb": "LAGGAN"
    },
    {
      "postCode": "2480",
      "suburb": "LAGOON GRASS"
    },
    {
      "postCode": "2325",
      "suburb": "LAGUNA"
    },
    {
      "postCode": "2650",
      "suburb": "LAKE ALBERT"
    },
    {
      "postCode": "2580",
      "suburb": "LAKE BATHURST"
    },
    {
      "postCode": "2675",
      "suburb": "LAKE BREWSTER"
    },
    {
      "postCode": "2820",
      "suburb": "LAKE BURRENDONG"
    },
    {
      "postCode": "2672",
      "suburb": "LAKE CARGELLIGO"
    },
    {
      "postCode": "2445",
      "suburb": "LAKE CATHIE"
    },
    {
      "postCode": "2539",
      "suburb": "LAKE CONJOLA"
    },
    {
      "postCode": "2671",
      "suburb": "LAKE COWAL"
    },
    {
      "postCode": "2581",
      "suburb": "LAKE GEORGE"
    },
    {
      "postCode": "2263",
      "suburb": "LAKE HAVEN"
    },
    {
      "postCode": "2502",
      "suburb": "LAKE HEIGHTS"
    },
    {
      "postCode": "2462",
      "suburb": "LAKE HIAWATHA"
    },
    {
      "postCode": "3691",
      "suburb": "LAKE HUME VILLAGE"
    },
    {
      "postCode": "2528",
      "suburb": "LAKE ILLAWARRA"
    },
    {
      "postCode": "2446",
      "suburb": "LAKE INNES"
    },
    {
      "postCode": "2259",
      "suburb": "LAKE MUNMORAH"
    },
    {
      "postCode": "2539",
      "suburb": "LAKE TABOURIE"
    },
    {
      "postCode": "2680",
      "suburb": "LAKE WYANGAN"
    },
    {
      "postCode": "2282",
      "suburb": "LAKELANDS"
    },
    {
      "postCode": "2195",
      "suburb": "LAKEMBA"
    },
    {
      "postCode": "2195",
      "suburb": "LAKEMBA DC"
    },
    {
      "postCode": "2572",
      "suburb": "LAKESLAND"
    },
    {
      "postCode": "2443",
      "suburb": "LAKEWOOD"
    },
    {
      "postCode": "3644",
      "suburb": "LALALTY"
    },
    {
      "postCode": "2147",
      "suburb": "LALOR PARK"
    },
    {
      "postCode": "2335",
      "suburb": "LAMBS VALLEY"
    },
    {
      "postCode": "2370",
      "suburb": "LAMBS VALLEY"
    },
    {
      "postCode": "2299",
      "suburb": "LAMBTON"
    },
    {
      "postCode": "2652",
      "suburb": "LANDERVALE"
    },
    {
      "postCode": "1595",
      "suburb": "LANE COVE"
    },
    {
      "postCode": "2066",
      "suburb": "LANE COVE"
    },
    {
      "postCode": "2066",
      "suburb": "LANE COVE NORTH"
    },
    {
      "postCode": "2066",
      "suburb": "LANE COVE WEST"
    },
    {
      "postCode": "2426",
      "suburb": "LANGLEY VALE"
    },
    {
      "postCode": "2460",
      "suburb": "LANITZA"
    },
    {
      "postCode": "2644",
      "suburb": "LANKEYS CREEK"
    },
    {
      "postCode": "2163",
      "suburb": "LANSDOWNE"
    },
    {
      "postCode": "2430",
      "suburb": "LANSDOWNE"
    },
    {
      "postCode": "2430",
      "suburb": "LANSDOWNE FOREST"
    },
    {
      "postCode": "2166",
      "suburb": "LANSVALE"
    },
    {
      "postCode": "2773",
      "suburb": "LAPSTONE"
    },
    {
      "postCode": "2622",
      "suburb": "LARBERT"
    },
    {
      "postCode": "2320",
      "suburb": "LARGS"
    },
    {
      "postCode": "2480",
      "suburb": "LARNOOK"
    },
    {
      "postCode": "2866",
      "suburb": "LARRAS LEE"
    },
    {
      "postCode": "2775",
      "suburb": "LAUGHTONDALE"
    },
    {
      "postCode": "2649",
      "suburb": "LAUREL HILL"
    },
    {
      "postCode": "2443",
      "suburb": "LAURIETON"
    },
    {
      "postCode": "2462",
      "suburb": "LAVADIA"
    },
    {
      "postCode": "2060",
      "suburb": "LAVENDER BAY"
    },
    {
      "postCode": "2582",
      "suburb": "LAVERSTOCK"
    },
    {
      "postCode": "2641",
      "suburb": "LAVINGTON"
    },
    {
      "postCode": "2641",
      "suburb": "LAVINGTON DC"
    },
    {
      "postCode": "2460",
      "suburb": "LAWRENCE"
    },
    {
      "postCode": "2783",
      "suburb": "LAWSON"
    },
    {
      "postCode": "2844",
      "suburb": "LEADVILLE"
    },
    {
      "postCode": "2335",
      "suburb": "LECONFIELD"
    },
    {
      "postCode": "2849",
      "suburb": "LEE CREEK"
    },
    {
      "postCode": "2705",
      "suburb": "LEETON"
    },
    {
      "postCode": "2775",
      "suburb": "LEETS VALE"
    },
    {
      "postCode": "2470",
      "suburb": "LEEVILLE"
    },
    {
      "postCode": "2476",
      "suburb": "LEGUME"
    },
    {
      "postCode": "2040",
      "suburb": "LEICHHARDT"
    },
    {
      "postCode": "2330",
      "suburb": "LEMINGTON"
    },
    {
      "postCode": "2259",
      "suburb": "LEMON TREE"
    },
    {
      "postCode": "2319",
      "suburb": "LEMON TREE PASSAGE"
    },
    {
      "postCode": "2171",
      "suburb": "LEN WATERS ESTATE"
    },
    {
      "postCode": "2322",
      "suburb": "LENAGHAN"
    },
    {
      "postCode": "2478",
      "suburb": "LENNOX HEAD"
    },
    {
      "postCode": "2750",
      "suburb": "LEONAY"
    },
    {
      "postCode": "2179",
      "suburb": "LEPPINGTON"
    },
    {
      "postCode": "2581",
      "suburb": "LERIDA"
    },
    {
      "postCode": "2770",
      "suburb": "LETHBRIDGE PARK"
    },
    {
      "postCode": "2560",
      "suburb": "LEUMEAH"
    },
    {
      "postCode": "2780",
      "suburb": "LEURA"
    },
    {
      "postCode": "2460",
      "suburb": "LEVENSTRATH"
    },
    {
      "postCode": "2311",
      "suburb": "LEWINSBROOK"
    },
    {
      "postCode": "2800",
      "suburb": "LEWIS PONDS"
    },
    {
      "postCode": "2049",
      "suburb": "LEWISHAM"
    },
    {
      "postCode": "2480",
      "suburb": "LEYCESTER"
    },
    {
      "postCode": "2138",
      "suburb": "LIBERTY GROVE"
    },
    {
      "postCode": "1825",
      "suburb": "LIDCOMBE"
    },
    {
      "postCode": "2141",
      "suburb": "LIDCOMBE"
    },
    {
      "postCode": "2141",
      "suburb": "LIDCOMBE NORTH"
    },
    {
      "postCode": "2333",
      "suburb": "LIDDELL"
    },
    {
      "postCode": "2790",
      "suburb": "LIDSDALE"
    },
    {
      "postCode": "2800",
      "suburb": "LIDSTER"
    },
    {
      "postCode": "2444",
      "suburb": "LIGHTHOUSE BEACH"
    },
    {
      "postCode": "2834",
      "suburb": "LIGHTNING RIDGE"
    },
    {
      "postCode": "2229",
      "suburb": "LILLI PILLI"
    },
    {
      "postCode": "2536",
      "suburb": "LILLI PILLI"
    },
    {
      "postCode": "2480",
      "suburb": "LILLIAN ROCK"
    },
    {
      "postCode": "2460",
      "suburb": "LILYDALE"
    },
    {
      "postCode": "2040",
      "suburb": "LILYFIELD"
    },
    {
      "postCode": "2508",
      "suburb": "LILYVALE"
    },
    {
      "postCode": "2352",
      "suburb": "LIMBRI"
    },
    {
      "postCode": "2324",
      "suburb": "LIMEBURNERS CREEK"
    },
    {
      "postCode": "2444",
      "suburb": "LIMEBURNERS CREEK"
    },
    {
      "postCode": "2795",
      "suburb": "LIMEKILNS"
    },
    {
      "postCode": "2583",
      "suburb": "LIMERICK"
    },
    {
      "postCode": "2361",
      "suburb": "LIMESTONE"
    },
    {
      "postCode": "2484",
      "suburb": "LIMPINWOOD"
    },
    {
      "postCode": "2850",
      "suburb": "LINBURN"
    },
    {
      "postCode": "2778",
      "suburb": "LINDEN"
    },
    {
      "postCode": "2480",
      "suburb": "LINDENDALE"
    },
    {
      "postCode": "2347",
      "suburb": "LINDESAY"
    },
    {
      "postCode": "2476",
      "suburb": "LINDESAY CREEK"
    },
    {
      "postCode": "2070",
      "suburb": "LINDFIELD"
    },
    {
      "postCode": "2070",
      "suburb": "LINDFIELD WEST"
    },
    {
      "postCode": "2710",
      "suburb": "LINDIFFERON"
    },
    {
      "postCode": "2066",
      "suburb": "LINLEY POINT"
    },
    {
      "postCode": "2460",
      "suburb": "LIONSVILLE"
    },
    {
      "postCode": "2250",
      "suburb": "LISAROW"
    },
    {
      "postCode": "2480",
      "suburb": "LISMORE"
    },
    {
      "postCode": "2480",
      "suburb": "LISMORE DC"
    },
    {
      "postCode": "2480",
      "suburb": "LISMORE HEIGHTS"
    },
    {
      "postCode": "2372",
      "suburb": "LISTON"
    },
    {
      "postCode": "2790",
      "suburb": "LITHGOW"
    },
    {
      "postCode": "2474",
      "suburb": "LITTLE BACK CREEK"
    },
    {
      "postCode": "2036",
      "suburb": "LITTLE BAY"
    },
    {
      "postCode": "2644",
      "suburb": "LITTLE BILLABONG"
    },
    {
      "postCode": "2538",
      "suburb": "LITTLE FOREST"
    },
    {
      "postCode": "2790",
      "suburb": "LITTLE HARTLEY"
    },
    {
      "postCode": "2339",
      "suburb": "LITTLE JACKS CREEK"
    },
    {
      "postCode": "2259",
      "suburb": "LITTLE JILLIBY"
    },
    {
      "postCode": "2281",
      "suburb": "LITTLE PELICAN"
    },
    {
      "postCode": "2360",
      "suburb": "LITTLE PLAIN"
    },
    {
      "postCode": "2720",
      "suburb": "LITTLE RIVER"
    },
    {
      "postCode": "2880",
      "suburb": "LITTLE TOPAR"
    },
    {
      "postCode": "2256",
      "suburb": "LITTLE WOBBY"
    },
    {
      "postCode": "2790",
      "suburb": "LITTLETON"
    },
    {
      "postCode": "1871",
      "suburb": "LIVERPOOL"
    },
    {
      "postCode": "2170",
      "suburb": "LIVERPOOL"
    },
    {
      "postCode": "2170",
      "suburb": "LIVERPOOL SOUTH"
    },
    {
      "postCode": "2170",
      "suburb": "LIVERPOOL WESTFIELD"
    },
    {
      "postCode": "2795",
      "suburb": "LLANARTH"
    },
    {
      "postCode": "2747",
      "suburb": "LLANDILO"
    },
    {
      "postCode": "2365",
      "suburb": "LLANGOTHLIN"
    },
    {
      "postCode": "2650",
      "suburb": "LLOYD"
    },
    {
      "postCode": "2474",
      "suburb": "LOADSTONE"
    },
    {
      "postCode": "2549",
      "suburb": "LOCHIEL"
    },
    {
      "postCode": "2321",
      "suburb": "LOCHINVAR"
    },
    {
      "postCode": "2656",
      "suburb": "LOCKHART"
    },
    {
      "postCode": "2795",
      "suburb": "LOCKSLEY"
    },
    {
      "postCode": "2232",
      "suburb": "LOFTUS"
    },
    {
      "postCode": "2480",
      "suburb": "LOFTVILLE"
    },
    {
      "postCode": "2439",
      "suburb": "LOGANS CROSSING"
    },
    {
      "postCode": "2713",
      "suburb": "LOGIE BRAE"
    },
    {
      "postCode": "2753",
      "suburb": "LONDONDERRY"
    },
    {
      "postCode": "2536",
      "suburb": "LONG BEACH"
    },
    {
      "postCode": "2446",
      "suburb": "LONG FLAT"
    },
    {
      "postCode": "2261",
      "suburb": "LONG JETTY"
    },
    {
      "postCode": "2360",
      "suburb": "LONG PLAIN"
    },
    {
      "postCode": "2629",
      "suburb": "LONG PLAIN"
    },
    {
      "postCode": "2330",
      "suburb": "LONG POINT"
    },
    {
      "postCode": "2564",
      "suburb": "LONG POINT"
    },
    {
      "postCode": "2347",
      "suburb": "LONGARM"
    },
    {
      "postCode": "2540",
      "suburb": "LONGREACH"
    },
    {
      "postCode": "2066",
      "suburb": "LONGUEVILLE"
    },
    {
      "postCode": "2867",
      "suburb": "LOOMBAH"
    },
    {
      "postCode": "2340",
      "suburb": "LOOMBERAH"
    },
    {
      "postCode": "2898",
      "suburb": "LORD HOWE ISLAND"
    },
    {
      "postCode": "2632",
      "suburb": "LORDS HILL"
    },
    {
      "postCode": "2320",
      "suburb": "LORN"
    },
    {
      "postCode": "2439",
      "suburb": "LORNE"
    },
    {
      "postCode": "2583",
      "suburb": "LOST RIVER"
    },
    {
      "postCode": "2311",
      "suburb": "LOSTOCK"
    },
    {
      "postCode": "2469",
      "suburb": "LOUISA CREEK"
    },
    {
      "postCode": "2840",
      "suburb": "LOUTH"
    },
    {
      "postCode": "2320",
      "suburb": "LOUTH PARK"
    },
    {
      "postCode": "2325",
      "suburb": "LOVEDALE"
    },
    {
      "postCode": "2105",
      "suburb": "LOVETT BAY"
    },
    {
      "postCode": "2450",
      "suburb": "LOWANNA"
    },
    {
      "postCode": "2476",
      "suburb": "LOWER ACACIA CREEK"
    },
    {
      "postCode": "2730",
      "suburb": "LOWER BAGO"
    },
    {
      "postCode": "2335",
      "suburb": "LOWER BELFORD"
    },
    {
      "postCode": "2580",
      "suburb": "LOWER BORO"
    },
    {
      "postCode": "2469",
      "suburb": "LOWER BOTTLE CREEK"
    },
    {
      "postCode": "2440",
      "suburb": "LOWER CREEK"
    },
    {
      "postCode": "2469",
      "suburb": "LOWER DUCK CREEK"
    },
    {
      "postCode": "2470",
      "suburb": "LOWER DYRAABA"
    },
    {
      "postCode": "2800",
      "suburb": "LOWER LEWIS PONDS"
    },
    {
      "postCode": "2775",
      "suburb": "LOWER MACDONALD"
    },
    {
      "postCode": "2250",
      "suburb": "LOWER MANGROVE"
    },
    {
      "postCode": "2446",
      "suburb": "LOWER PAPPINBARRA"
    },
    {
      "postCode": "2469",
      "suburb": "LOWER PEACOCK"
    },
    {
      "postCode": "2756",
      "suburb": "LOWER PORTLAND"
    },
    {
      "postCode": "2460",
      "suburb": "LOWER SOUTHGATE"
    },
    {
      "postCode": "2646",
      "suburb": "LOWESDALE"
    },
    {
      "postCode": "2790",
      "suburb": "LOWTHER"
    },
    {
      "postCode": "2326",
      "suburb": "LOXFORD"
    },
    {
      "postCode": "2234",
      "suburb": "LUCAS HEIGHTS"
    },
    {
      "postCode": "2800",
      "suburb": "LUCKNOW"
    },
    {
      "postCode": "2745",
      "suburb": "LUDDENHAM"
    },
    {
      "postCode": "2850",
      "suburb": "LUE"
    },
    {
      "postCode": "2210",
      "suburb": "LUGARNO"
    },
    {
      "postCode": "2170",
      "suburb": "LURNEA"
    },
    {
      "postCode": "2321",
      "suburb": "LUSKINTYRE"
    },
    {
      "postCode": "2474",
      "suburb": "LYNCHS CREEK"
    },
    {
      "postCode": "2350",
      "suburb": "LYNDHURST"
    },
    {
      "postCode": "2797",
      "suburb": "LYNDHURST"
    },
    {
      "postCode": "2477",
      "suburb": "LYNWOOD"
    },
    {
      "postCode": "2716",
      "suburb": "MABINS WELL"
    },
    {
      "postCode": "2560",
      "suburb": "MACARTHUR SQUARE"
    },
    {
      "postCode": "2339",
      "suburb": "MACDONALDS CREEK"
    },
    {
      "postCode": "2447",
      "suburb": "MACKSVILLE"
    },
    {
      "postCode": "2463",
      "suburb": "MACLEAN"
    },
    {
      "postCode": "2251",
      "suburb": "MACMASTERS BEACH"
    },
    {
      "postCode": "2113",
      "suburb": "MACQUARIE CENTRE"
    },
    {
      "postCode": "2564",
      "suburb": "MACQUARIE FIELDS"
    },
    {
      "postCode": "2285",
      "suburb": "MACQUARIE HILLS"
    },
    {
      "postCode": "2565",
      "suburb": "MACQUARIE LINKS"
    },
    {
      "postCode": "2831",
      "suburb": "MACQUARIE MARSHES"
    },
    {
      "postCode": "2113",
      "suburb": "MACQUARIE PARK"
    },
    {
      "postCode": "2577",
      "suburb": "MACQUARIE PASS"
    },
    {
      "postCode": "2109",
      "suburb": "MACQUARIE UNIVERSITY"
    },
    {
      "postCode": "2508",
      "suburb": "MADDENS PLAINS"
    },
    {
      "postCode": "2630",
      "suburb": "MAFFRA"
    },
    {
      "postCode": "2261",
      "suburb": "MAGENTA"
    },
    {
      "postCode": "2829",
      "suburb": "MAGOMETON"
    },
    {
      "postCode": "2230",
      "suburb": "MAIANBAR"
    },
    {
      "postCode": "2594",
      "suburb": "MAIMURU"
    },
    {
      "postCode": "2482",
      "suburb": "MAIN ARM"
    },
    {
      "postCode": "2420",
      "suburb": "MAIN CREEK"
    },
    {
      "postCode": "2716",
      "suburb": "MAIRJIMMY"
    },
    {
      "postCode": "2330",
      "suburb": "MAISON DIEU"
    },
    {
      "postCode": "2320",
      "suburb": "MAITLAND"
    },
    {
      "postCode": "2850",
      "suburb": "MAITLAND BAR"
    },
    {
      "postCode": "2320",
      "suburb": "MAITLAND NORTH"
    },
    {
      "postCode": "2320",
      "suburb": "MAITLAND VALE"
    },
    {
      "postCode": "2622",
      "suburb": "MAJORS CREEK"
    },
    {
      "postCode": "2036",
      "suburb": "MALABAR"
    },
    {
      "postCode": "2460",
      "suburb": "MALABUGILMAH"
    },
    {
      "postCode": "2571",
      "suburb": "MALDON"
    },
    {
      "postCode": "2319",
      "suburb": "MALLABULA"
    },
    {
      "postCode": "2734",
      "suburb": "MALLAN"
    },
    {
      "postCode": "2469",
      "suburb": "MALLANGANEE"
    },
    {
      "postCode": "2738",
      "suburb": "MALLEE"
    },
    {
      "postCode": "2400",
      "suburb": "MALLOWA"
    },
    {
      "postCode": "2536",
      "suburb": "MALONEYS BEACH"
    },
    {
      "postCode": "2536",
      "suburb": "MALUA BAY"
    },
    {
      "postCode": "2200",
      "suburb": "MANAHAN"
    },
    {
      "postCode": "2622",
      "suburb": "MANAR"
    },
    {
      "postCode": "2577",
      "suburb": "MANCHESTER SQUARE"
    },
    {
      "postCode": "2870",
      "suburb": "MANDAGERY"
    },
    {
      "postCode": "2264",
      "suburb": "MANDALONG"
    },
    {
      "postCode": "2575",
      "suburb": "MANDEMAR"
    },
    {
      "postCode": "2792",
      "suburb": "MANDURAMA"
    },
    {
      "postCode": "2500",
      "suburb": "MANGERTON"
    },
    {
      "postCode": "2328",
      "suburb": "MANGOOLA"
    },
    {
      "postCode": "2652",
      "suburb": "MANGOPLAH"
    },
    {
      "postCode": "2250",
      "suburb": "MANGROVE CREEK"
    },
    {
      "postCode": "2250",
      "suburb": "MANGROVE MOUNTAIN"
    },
    {
      "postCode": "2865",
      "suburb": "MANILDRA"
    },
    {
      "postCode": "2346",
      "suburb": "MANILLA"
    },
    {
      "postCode": "1655",
      "suburb": "MANLY"
    },
    {
      "postCode": "2095",
      "suburb": "MANLY"
    },
    {
      "postCode": "2095",
      "suburb": "MANLY EAST"
    },
    {
      "postCode": "2093",
      "suburb": "MANLY VALE"
    },
    {
      "postCode": "2259",
      "suburb": "MANNERING PARK"
    },
    {
      "postCode": "2430",
      "suburb": "MANNING POINT"
    },
    {
      "postCode": "2653",
      "suburb": "MANNUS"
    },
    {
      "postCode": "2333",
      "suburb": "MANOBALAI"
    },
    {
      "postCode": "2582",
      "suburb": "MANTON"
    },
    {
      "postCode": "2539",
      "suburb": "MANYANA"
    },
    {
      "postCode": "2653",
      "suburb": "MARAGLE"
    },
    {
      "postCode": "2765",
      "suburb": "MARAYLYA"
    },
    {
      "postCode": "2148",
      "suburb": "MARAYONG"
    },
    {
      "postCode": "2800",
      "suburb": "MARCH"
    },
    {
      "postCode": "2582",
      "suburb": "MARCHMONT"
    },
    {
      "postCode": "2259",
      "suburb": "MARDI"
    },
    {
      "postCode": "2453",
      "suburb": "MARENGO"
    },
    {
      "postCode": "2422",
      "suburb": "MARES RUN"
    },
    {
      "postCode": "2663",
      "suburb": "MARINNA"
    },
    {
      "postCode": "2280",
      "suburb": "MARKS POINT"
    },
    {
      "postCode": "2423",
      "suburb": "MARKWELL"
    },
    {
      "postCode": "2429",
      "suburb": "MARLEE"
    },
    {
      "postCode": "2232",
      "suburb": "MARLEY"
    },
    {
      "postCode": "2441",
      "suburb": "MARLO MERRICAN"
    },
    {
      "postCode": "2775",
      "suburb": "MARLOW"
    },
    {
      "postCode": "2622",
      "suburb": "MARLOWE"
    },
    {
      "postCode": "2284",
      "suburb": "MARMONG POINT"
    },
    {
      "postCode": "2480",
      "suburb": "MAROM CREEK"
    },
    {
      "postCode": "2756",
      "suburb": "MAROOTA"
    },
    {
      "postCode": "2035",
      "suburb": "MAROUBRA"
    },
    {
      "postCode": "2035",
      "suburb": "MAROUBRA SOUTH"
    },
    {
      "postCode": "2790",
      "suburb": "MARRANGAROO"
    },
    {
      "postCode": "2652",
      "suburb": "MARRAR"
    },
    {
      "postCode": "1475",
      "suburb": "MARRICKVILLE"
    },
    {
      "postCode": "2204",
      "suburb": "MARRICKVILLE"
    },
    {
      "postCode": "2204",
      "suburb": "MARRICKVILLE METRO"
    },
    {
      "postCode": "2204",
      "suburb": "MARRICKVILLE SOUTH"
    },
    {
      "postCode": "2765",
      "suburb": "MARSDEN PARK"
    },
    {
      "postCode": "2122",
      "suburb": "MARSFIELD"
    },
    {
      "postCode": "2530",
      "suburb": "MARSHALL MOUNT"
    },
    {
      "postCode": "2420",
      "suburb": "MARSHDALE"
    },
    {
      "postCode": "2824",
      "suburb": "MARTHAGUY"
    },
    {
      "postCode": "2328",
      "suburb": "MARTINDALE"
    },
    {
      "postCode": "2420",
      "suburb": "MARTINS CREEK"
    },
    {
      "postCode": "2265",
      "suburb": "MARTINSVILLE"
    },
    {
      "postCode": "2579",
      "suburb": "MARULAN"
    },
    {
      "postCode": "2287",
      "suburb": "MARYLAND"
    },
    {
      "postCode": "4377",
      "suburb": "MARYLAND"
    },
    {
      "postCode": "2380",
      "suburb": "MARYS MOUNT"
    },
    {
      "postCode": "2820",
      "suburb": "MARYVALE"
    },
    {
      "postCode": "2293",
      "suburb": "MARYVILLE"
    },
    {
      "postCode": "1460",
      "suburb": "MASCOT"
    },
    {
      "postCode": "2020",
      "suburb": "MASCOT"
    },
    {
      "postCode": "2250",
      "suburb": "MATCHAM"
    },
    {
      "postCode": "2370",
      "suburb": "MATHESON"
    },
    {
      "postCode": "2710",
      "suburb": "MATHOURA"
    },
    {
      "postCode": "2652",
      "suburb": "MATONG"
    },
    {
      "postCode": "2036",
      "suburb": "MATRAVILLE"
    },
    {
      "postCode": "2711",
      "suburb": "MAUDE"
    },
    {
      "postCode": "2382",
      "suburb": "MAULES CREEK"
    },
    {
      "postCode": "2650",
      "suburb": "MAXWELL"
    },
    {
      "postCode": "2365",
      "suburb": "MAYBOLE"
    },
    {
      "postCode": "2423",
      "suburb": "MAYERS FLAT"
    },
    {
      "postCode": "2304",
      "suburb": "MAYFIELD"
    },
    {
      "postCode": "2540",
      "suburb": "MAYFIELD"
    },
    {
      "postCode": "2580",
      "suburb": "MAYFIELD"
    },
    {
      "postCode": "2787",
      "suburb": "MAYFIELD"
    },
    {
      "postCode": "2304",
      "suburb": "MAYFIELD EAST"
    },
    {
      "postCode": "2304",
      "suburb": "MAYFIELD NORTH"
    },
    {
      "postCode": "2304",
      "suburb": "MAYFIELD WEST"
    },
    {
      "postCode": "2710",
      "suburb": "MAYRUNG"
    },
    {
      "postCode": "2145",
      "suburb": "MAYS HILL"
    },
    {
      "postCode": "2347",
      "suburb": "MAYVALE"
    },
    {
      "postCode": "2105",
      "suburb": "MCCARRS CREEK"
    },
    {
      "postCode": "2333",
      "suburb": "MCCULLYS GAP"
    },
    {
      "postCode": "2330",
      "suburb": "MCDOUGALLS HILL"
    },
    {
      "postCode": "2756",
      "suburb": "MCGRATHS HILL"
    },
    {
      "postCode": "2480",
      "suburb": "MCKEES HILL"
    },
    {
      "postCode": "2790",
      "suburb": "MCKELLARS PARK"
    },
    {
      "postCode": "2480",
      "suburb": "MCLEANS RIDGES"
    },
    {
      "postCode": "2479",
      "suburb": "MCLEODS SHOOT"
    },
    {
      "postCode": "2060",
      "suburb": "MCMAHONS POINT"
    },
    {
      "postCode": "2587",
      "suburb": "MCMAHONS REEF"
    },
    {
      "postCode": "2795",
      "suburb": "MEADOW FLAT"
    },
    {
      "postCode": "2114",
      "suburb": "MEADOWBANK"
    },
    {
      "postCode": "2484",
      "suburb": "MEBBIN"
    },
    {
      "postCode": "2852",
      "suburb": "MEBUL"
    },
    {
      "postCode": "2780",
      "suburb": "MEDLOW BATH"
    },
    {
      "postCode": "2318",
      "suburb": "MEDOWIE"
    },
    {
      "postCode": "2577",
      "suburb": "MEDWAY"
    },
    {
      "postCode": "2820",
      "suburb": "MEDWAY"
    },
    {
      "postCode": "2477",
      "suburb": "MEERSCHAUM VALE"
    },
    {
      "postCode": "2785",
      "suburb": "MEGALONG VALLEY"
    },
    {
      "postCode": "2453",
      "suburb": "MEGAN"
    },
    {
      "postCode": "2669",
      "suburb": "MELBERGEN"
    },
    {
      "postCode": "2430",
      "suburb": "MELINGA"
    },
    {
      "postCode": "2756",
      "suburb": "MELLONG"
    },
    {
      "postCode": "2734",
      "suburb": "MELLOOL"
    },
    {
      "postCode": "2765",
      "suburb": "MELONBA"
    },
    {
      "postCode": "2114",
      "suburb": "MELROSE PARK"
    },
    {
      "postCode": "2320",
      "suburb": "MELVILLE"
    },
    {
      "postCode": "2594",
      "suburb": "MEMAGONG"
    },
    {
      "postCode": "2850",
      "suburb": "MENAH"
    },
    {
      "postCode": "2234",
      "suburb": "MENAI"
    },
    {
      "postCode": "2234",
      "suburb": "MENAI CENTRAL"
    },
    {
      "postCode": "2568",
      "suburb": "MENANGLE"
    },
    {
      "postCode": "2563",
      "suburb": "MENANGLE PARK"
    },
    {
      "postCode": "2842",
      "suburb": "MENDOORAN"
    },
    {
      "postCode": "2879",
      "suburb": "MENINDEE"
    },
    {
      "postCode": "2388",
      "suburb": "MERAH NORTH"
    },
    {
      "postCode": "2291",
      "suburb": "MEREWETHER"
    },
    {
      "postCode": "2291",
      "suburb": "MEREWETHER HEIGHTS"
    },
    {
      "postCode": "2548",
      "suburb": "MERIMBULA"
    },
    {
      "postCode": "2537",
      "suburb": "MERINGO"
    },
    {
      "postCode": "2422",
      "suburb": "MERNOT"
    },
    {
      "postCode": "2850",
      "suburb": "MEROO"
    },
    {
      "postCode": "2540",
      "suburb": "MEROO MEADOW"
    },
    {
      "postCode": "2852",
      "suburb": "MEROTHERIE"
    },
    {
      "postCode": "2632",
      "suburb": "MERRIANGAAH"
    },
    {
      "postCode": "2622",
      "suburb": "MERRICUMBENE"
    },
    {
      "postCode": "2827",
      "suburb": "MERRIGAL"
    },
    {
      "postCode": "2581",
      "suburb": "MERRILL"
    },
    {
      "postCode": "2329",
      "suburb": "MERRIWA"
    },
    {
      "postCode": "2652",
      "suburb": "MERRIWAGGA"
    },
    {
      "postCode": "2831",
      "suburb": "MERRYGOEN"
    },
    {
      "postCode": "2160",
      "suburb": "MERRYLANDS"
    },
    {
      "postCode": "2160",
      "suburb": "MERRYLANDS WEST"
    },
    {
      "postCode": "2705",
      "suburb": "MERUNGLE HILL"
    },
    {
      "postCode": "2577",
      "suburb": "MERYLA"
    },
    {
      "postCode": "2323",
      "suburb": "METFORD"
    },
    {
      "postCode": "2323",
      "suburb": "METFORD DC"
    },
    {
      "postCode": "2701",
      "suburb": "METHUL"
    },
    {
      "postCode": "2350",
      "suburb": "METZ"
    },
    {
      "postCode": "2873",
      "suburb": "MIAMLEY"
    },
    {
      "postCode": "2825",
      "suburb": "MIANDETTA"
    },
    {
      "postCode": "2464",
      "suburb": "MICALO ISLAND"
    },
    {
      "postCode": "2620",
      "suburb": "MICHELAGO"
    },
    {
      "postCode": "2442",
      "suburb": "MID NORTH COAST MC"
    },
    {
      "postCode": "2580",
      "suburb": "MIDDLE ARM"
    },
    {
      "postCode": "2337",
      "suburb": "MIDDLE BROOK"
    },
    {
      "postCode": "2443",
      "suburb": "MIDDLE BROTHER"
    },
    {
      "postCode": "2068",
      "suburb": "MIDDLE COVE"
    },
    {
      "postCode": "2158",
      "suburb": "MIDDLE DURAL"
    },
    {
      "postCode": "2330",
      "suburb": "MIDDLE FALBROOK"
    },
    {
      "postCode": "2630",
      "suburb": "MIDDLE FLAT"
    },
    {
      "postCode": "2483",
      "suburb": "MIDDLE POCKET"
    },
    {
      "postCode": "2171",
      "suburb": "MIDDLETON GRANGE"
    },
    {
      "postCode": "2630",
      "suburb": "MIDDLINGBANK"
    },
    {
      "postCode": "2484",
      "suburb": "MIDGINBIL"
    },
    {
      "postCode": "2358",
      "suburb": "MIHI"
    },
    {
      "postCode": "2632",
      "suburb": "MILA"
    },
    {
      "postCode": "2330",
      "suburb": "MILBRODALE"
    },
    {
      "postCode": "2656",
      "suburb": "MILBRULONG"
    },
    {
      "postCode": "2795",
      "suburb": "MILKERS FLAT"
    },
    {
      "postCode": "2795",
      "suburb": "MILLAH MURRAH"
    },
    {
      "postCode": "2440",
      "suburb": "MILLBANK"
    },
    {
      "postCode": "2168",
      "suburb": "MILLER"
    },
    {
      "postCode": "2324",
      "suburb": "MILLERS FOREST"
    },
    {
      "postCode": "2000",
      "suburb": "MILLERS POINT"
    },
    {
      "postCode": "2325",
      "suburb": "MILLFIELD"
    },
    {
      "postCode": "2397",
      "suburb": "MILLIE"
    },
    {
      "postCode": "2549",
      "suburb": "MILLINGANDI"
    },
    {
      "postCode": "2798",
      "suburb": "MILLTHORPE"
    },
    {
      "postCode": "2880",
      "suburb": "MILPARINKA"
    },
    {
      "postCode": "2214",
      "suburb": "MILPERRA"
    },
    {
      "postCode": "2380",
      "suburb": "MILROY"
    },
    {
      "postCode": "2850",
      "suburb": "MILROY"
    },
    {
      "postCode": "2083",
      "suburb": "MILSONS PASSAGE"
    },
    {
      "postCode": "1565",
      "suburb": "MILSONS POINT"
    },
    {
      "postCode": "2061",
      "suburb": "MILSONS POINT"
    },
    {
      "postCode": "2538",
      "suburb": "MILTON"
    },
    {
      "postCode": "2594",
      "suburb": "MILVALE"
    },
    {
      "postCode": "2666",
      "suburb": "MIMOSA"
    },
    {
      "postCode": "2770",
      "suburb": "MINCHINBURY"
    },
    {
      "postCode": "2320",
      "suburb": "MINDARIBBA"
    },
    {
      "postCode": "4380",
      "suburb": "MINGOOLA"
    },
    {
      "postCode": "2312",
      "suburb": "MINIMBAH"
    },
    {
      "postCode": "2720",
      "suburb": "MINJARY"
    },
    {
      "postCode": "2287",
      "suburb": "MINMI"
    },
    {
      "postCode": "2533",
      "suburb": "MINNAMURRA"
    },
    {
      "postCode": "2462",
      "suburb": "MINNIE WATER"
    },
    {
      "postCode": "2830",
      "suburb": "MINORE"
    },
    {
      "postCode": "2566",
      "suburb": "MINTO"
    },
    {
      "postCode": "2566",
      "suburb": "MINTO HEIGHTS"
    },
    {
      "postCode": "2548",
      "suburb": "MIRADOR"
    },
    {
      "postCode": "1490",
      "suburb": "MIRANDA"
    },
    {
      "postCode": "2228",
      "suburb": "MIRANDA"
    },
    {
      "postCode": "2330",
      "suburb": "MIRANNIE"
    },
    {
      "postCode": "2264",
      "suburb": "MIRRABOOKA"
    },
    {
      "postCode": "2665",
      "suburb": "MIRROOL"
    },
    {
      "postCode": "2449",
      "suburb": "MISSABOTTI"
    },
    {
      "postCode": "2050",
      "suburb": "MISSENDEN ROAD"
    },
    {
      "postCode": "2795",
      "suburb": "MITCHELL"
    },
    {
      "postCode": "2330",
      "suburb": "MITCHELLS FLAT"
    },
    {
      "postCode": "2430",
      "suburb": "MITCHELLS ISLAND"
    },
    {
      "postCode": "2575",
      "suburb": "MITTAGONG"
    },
    {
      "postCode": "2731",
      "suburb": "MOAMA"
    },
    {
      "postCode": "2480",
      "suburb": "MODANVILLE"
    },
    {
      "postCode": "2550",
      "suburb": "MOGAREEKA"
    },
    {
      "postCode": "2537",
      "suburb": "MOGENDOURA"
    },
    {
      "postCode": "2370",
      "suburb": "MOGGS SWAMP"
    },
    {
      "postCode": "2550",
      "suburb": "MOGILLA"
    },
    {
      "postCode": "2536",
      "suburb": "MOGO"
    },
    {
      "postCode": "2850",
      "suburb": "MOGO"
    },
    {
      "postCode": "2775",
      "suburb": "MOGO CREEK"
    },
    {
      "postCode": "2538",
      "suburb": "MOGOOD"
    },
    {
      "postCode": "2422",
      "suburb": "MOGRANI"
    },
    {
      "postCode": "2830",
      "suburb": "MOGRIGUY"
    },
    {
      "postCode": "2372",
      "suburb": "MOLE RIVER"
    },
    {
      "postCode": "2460",
      "suburb": "MOLEVILLE CREEK"
    },
    {
      "postCode": "2842",
      "suburb": "MOLLYAN"
    },
    {
      "postCode": "2539",
      "suburb": "MOLLYMOOK"
    },
    {
      "postCode": "2539",
      "suburb": "MOLLYMOOK BEACH"
    },
    {
      "postCode": "2866",
      "suburb": "MOLONG"
    },
    {
      "postCode": "1660",
      "suburb": "MONA VALE"
    },
    {
      "postCode": "2103",
      "suburb": "MONA VALE"
    },
    {
      "postCode": "2738",
      "suburb": "MONAK"
    },
    {
      "postCode": "2480",
      "suburb": "MONALTRIE"
    },
    {
      "postCode": "2111",
      "suburb": "MONASH PARK"
    },
    {
      "postCode": "2540",
      "suburb": "MONDAYONG"
    },
    {
      "postCode": "2430",
      "suburb": "MONDROOK"
    },
    {
      "postCode": "2622",
      "suburb": "MONGA"
    },
    {
      "postCode": "2622",
      "suburb": "MONGARLOWE"
    },
    {
      "postCode": "2470",
      "suburb": "MONGOGARIE"
    },
    {
      "postCode": "2675",
      "suburb": "MONIA GAP"
    },
    {
      "postCode": "2850",
      "suburb": "MONIVAE"
    },
    {
      "postCode": "2415",
      "suburb": "MONKERAI"
    },
    {
      "postCode": "2594",
      "suburb": "MONTEAGLE"
    },
    {
      "postCode": "2482",
      "suburb": "MONTECOLLUM"
    },
    {
      "postCode": "2820",
      "suburb": "MONTEFIORES"
    },
    {
      "postCode": "2217",
      "suburb": "MONTEREY"
    },
    {
      "postCode": "2483",
      "suburb": "MOOBALL"
    },
    {
      "postCode": "2337",
      "suburb": "MOOBI"
    },
    {
      "postCode": "2370",
      "suburb": "MOOGEM"
    },
    {
      "postCode": "2820",
      "suburb": "MOOKERAWA"
    },
    {
      "postCode": "2469",
      "suburb": "MOOKIMA WYBRA"
    },
    {
      "postCode": "2850",
      "suburb": "MOOLARBEN"
    },
    {
      "postCode": "2540",
      "suburb": "MOOLLATTOO"
    },
    {
      "postCode": "2734",
      "suburb": "MOOLPA"
    },
    {
      "postCode": "2665",
      "suburb": "MOOMBOOLDOOL"
    },
    {
      "postCode": "2337",
      "suburb": "MOONAN BROOK"
    },
    {
      "postCode": "2337",
      "suburb": "MOONAN FLAT"
    },
    {
      "postCode": "2627",
      "suburb": "MOONBAH"
    },
    {
      "postCode": "2353",
      "suburb": "MOONBI"
    },
    {
      "postCode": "2710",
      "suburb": "MOONBRIA"
    },
    {
      "postCode": "2440",
      "suburb": "MOONEBA"
    },
    {
      "postCode": "2259",
      "suburb": "MOONEE"
    },
    {
      "postCode": "2450",
      "suburb": "MOONEE BEACH"
    },
    {
      "postCode": "2472",
      "suburb": "MOONEM"
    },
    {
      "postCode": "2083",
      "suburb": "MOONEY MOONEY"
    },
    {
      "postCode": "2250",
      "suburb": "MOONEY MOONEY CREEK"
    },
    {
      "postCode": "2453",
      "suburb": "MOONPAR"
    },
    {
      "postCode": "2429",
      "suburb": "MOORAL CREEK"
    },
    {
      "postCode": "2648",
      "suburb": "MOORARA"
    },
    {
      "postCode": "2804",
      "suburb": "MOORBEL"
    },
    {
      "postCode": "2340",
      "suburb": "MOORE CREEK"
    },
    {
      "postCode": "2021",
      "suburb": "MOORE PARK"
    },
    {
      "postCode": "1874",
      "suburb": "MOOREBANK"
    },
    {
      "postCode": "1875",
      "suburb": "MOOREBANK"
    },
    {
      "postCode": "2170",
      "suburb": "MOOREBANK"
    },
    {
      "postCode": "2795",
      "suburb": "MOORILDA"
    },
    {
      "postCode": "2443",
      "suburb": "MOORLAND"
    },
    {
      "postCode": "2650",
      "suburb": "MOORONG"
    },
    {
      "postCode": "2640",
      "suburb": "MOORWATHA"
    },
    {
      "postCode": "2440",
      "suburb": "MOPARRABAH"
    },
    {
      "postCode": "2422",
      "suburb": "MOPPY"
    },
    {
      "postCode": "2710",
      "suburb": "MORAGO"
    },
    {
      "postCode": "2666",
      "suburb": "MORANGARELL"
    },
    {
      "postCode": "2550",
      "suburb": "MORANS CROSSING"
    },
    {
      "postCode": "2400",
      "suburb": "MOREE"
    },
    {
      "postCode": "2264",
      "suburb": "MORISSET"
    },
    {
      "postCode": "2264",
      "suburb": "MORISSET PARK"
    },
    {
      "postCode": "2105",
      "suburb": "MORNING BAY"
    },
    {
      "postCode": "2469",
      "suburb": "MORORO"
    },
    {
      "postCode": "2321",
      "suburb": "MORPETH"
    },
    {
      "postCode": "2223",
      "suburb": "MORTDALE"
    },
    {
      "postCode": "2137",
      "suburb": "MORTLAKE"
    },
    {
      "postCode": "2538",
      "suburb": "MORTON"
    },
    {
      "postCode": "2446",
      "suburb": "MORTONS CREEK"
    },
    {
      "postCode": "2790",
      "suburb": "MORTS ESTATE"
    },
    {
      "postCode": "2325",
      "suburb": "MORUBEN"
    },
    {
      "postCode": "2700",
      "suburb": "MORUNDAH"
    },
    {
      "postCode": "2537",
      "suburb": "MORUYA"
    },
    {
      "postCode": "2537",
      "suburb": "MORUYA HEADS"
    },
    {
      "postCode": "2370",
      "suburb": "MORVEN"
    },
    {
      "postCode": "2660",
      "suburb": "MORVEN"
    },
    {
      "postCode": "2088",
      "suburb": "MOSMAN"
    },
    {
      "postCode": "2577",
      "suburb": "MOSS VALE"
    },
    {
      "postCode": "2878",
      "suburb": "MOSSGIEL"
    },
    {
      "postCode": "2537",
      "suburb": "MOSSY POINT"
    },
    {
      "postCode": "2426",
      "suburb": "MOTO"
    },
    {
      "postCode": "2733",
      "suburb": "MOULAMEIN"
    },
    {
      "postCode": "2729",
      "suburb": "MOUNT ADRAH"
    },
    {
      "postCode": "2567",
      "suburb": "MOUNT ANNAN"
    },
    {
      "postCode": "2820",
      "suburb": "MOUNT AQUILA"
    },
    {
      "postCode": "2820",
      "suburb": "MOUNT ARTHUR"
    },
    {
      "postCode": "2650",
      "suburb": "MOUNT AUSTIN"
    },
    {
      "postCode": "2484",
      "suburb": "MOUNT BURRELL"
    },
    {
      "postCode": "2079",
      "suburb": "MOUNT COLAH"
    },
    {
      "postCode": "2794",
      "suburb": "MOUNT COLLINS"
    },
    {
      "postCode": "2631",
      "suburb": "MOUNT COOPER"
    },
    {
      "postCode": "2632",
      "suburb": "MOUNT DARRAGH"
    },
    {
      "postCode": "2795",
      "suburb": "MOUNT DAVID"
    },
    {
      "postCode": "2320",
      "suburb": "MOUNT DEE"
    },
    {
      "postCode": "2770",
      "suburb": "MOUNT DRUITT"
    },
    {
      "postCode": "2770",
      "suburb": "MOUNT DRUITT VILLAGE"
    },
    {
      "postCode": "2250",
      "suburb": "MOUNT ELLIOT"
    },
    {
      "postCode": "2580",
      "suburb": "MOUNT FAIRY"
    },
    {
      "postCode": "2824",
      "suburb": "MOUNT FOSTER"
    },
    {
      "postCode": "2850",
      "suburb": "MOUNT FROME"
    },
    {
      "postCode": "2424",
      "suburb": "MOUNT GEORGE"
    },
    {
      "postCode": "2824",
      "suburb": "MOUNT HARRIS"
    },
    {
      "postCode": "2877",
      "suburb": "MOUNT HOPE"
    },
    {
      "postCode": "2729",
      "suburb": "MOUNT HOREB"
    },
    {
      "postCode": "2570",
      "suburb": "MOUNT HUNTER"
    },
    {
      "postCode": "2290",
      "suburb": "MOUNT HUTTON"
    },
    {
      "postCode": "2786",
      "suburb": "MOUNT IRVINE"
    },
    {
      "postCode": "2500",
      "suburb": "MOUNT KEIRA"
    },
    {
      "postCode": "2526",
      "suburb": "MOUNT KEMBLA"
    },
    {
      "postCode": "2539",
      "suburb": "MOUNT KINGIMAN"
    },
    {
      "postCode": "2850",
      "suburb": "MOUNT KNOWLES"
    },
    {
      "postCode": "2080",
      "suburb": "MOUNT KURING-GAI"
    },
    {
      "postCode": "2790",
      "suburb": "MOUNT LAMBIE"
    },
    {
      "postCode": "2190",
      "suburb": "MOUNT LEWIS"
    },
    {
      "postCode": "2200",
      "suburb": "MOUNT LEWIS"
    },
    {
      "postCode": "2575",
      "suburb": "MOUNT LINDSEY"
    },
    {
      "postCode": "2849",
      "suburb": "MOUNT MARSDEN"
    },
    {
      "postCode": "2469",
      "suburb": "MOUNT MARSH"
    },
    {
      "postCode": "2365",
      "suburb": "MOUNT MITCHELL"
    },
    {
      "postCode": "2577",
      "suburb": "MOUNT MURRAY"
    },
    {
      "postCode": "2330",
      "suburb": "MOUNT OLIVE"
    },
    {
      "postCode": "2787",
      "suburb": "MOUNT OLIVE"
    },
    {
      "postCode": "2519",
      "suburb": "MOUNT OUSLEY"
    },
    {
      "postCode": "2795",
      "suburb": "MOUNT PANORAMA"
    },
    {
      "postCode": "2519",
      "suburb": "MOUNT PLEASANT"
    },
    {
      "postCode": "2170",
      "suburb": "MOUNT PRITCHARD"
    },
    {
      "postCode": "2795",
      "suburb": "MOUNT RANKIN"
    },
    {
      "postCode": "2311",
      "suburb": "MOUNT RIVERS"
    },
    {
      "postCode": "2774",
      "suburb": "MOUNT RIVERVIEW"
    },
    {
      "postCode": "2330",
      "suburb": "MOUNT ROYAL"
    },
    {
      "postCode": "2360",
      "suburb": "MOUNT RUSSELL"
    },
    {
      "postCode": "2500",
      "suburb": "MOUNT SAINT THOMAS"
    },
    {
      "postCode": "2446",
      "suburb": "MOUNT SEAVIEW"
    },
    {
      "postCode": "2828",
      "suburb": "MOUNT TENANDRA"
    },
    {
      "postCode": "2330",
      "suburb": "MOUNT THORLEY"
    },
    {
      "postCode": "2758",
      "suburb": "MOUNT TOMAH"
    },
    {
      "postCode": "2178",
      "suburb": "MOUNT VERNON"
    },
    {
      "postCode": "2786",
      "suburb": "MOUNT VICTORIA"
    },
    {
      "postCode": "2325",
      "suburb": "MOUNT VIEW"
    },
    {
      "postCode": "2323",
      "suburb": "MOUNT VINCENT"
    },
    {
      "postCode": "2484",
      "suburb": "MOUNT WARNING"
    },
    {
      "postCode": "2528",
      "suburb": "MOUNT WARRIGAL"
    },
    {
      "postCode": "2787",
      "suburb": "MOUNT WERONG"
    },
    {
      "postCode": "2250",
      "suburb": "MOUNT WHITE"
    },
    {
      "postCode": "2786",
      "suburb": "MOUNT WILSON"
    },
    {
      "postCode": "2644",
      "suburb": "MOUNTAIN CREEK"
    },
    {
      "postCode": "2758",
      "suburb": "MOUNTAIN LAGOON"
    },
    {
      "postCode": "2480",
      "suburb": "MOUNTAIN TOP"
    },
    {
      "postCode": "2460",
      "suburb": "MOUNTAIN VIEW"
    },
    {
      "postCode": "2739",
      "suburb": "MOURQUONG"
    },
    {
      "postCode": "2571",
      "suburb": "MOWBRAY PARK"
    },
    {
      "postCode": "2787",
      "suburb": "MOZART"
    },
    {
      "postCode": "2850",
      "suburb": "MUDGEE"
    },
    {
      "postCode": "2323",
      "suburb": "MULBRING"
    },
    {
      "postCode": "2745",
      "suburb": "MULGOA"
    },
    {
      "postCode": "2756",
      "suburb": "MULGRAVE"
    },
    {
      "postCode": "2877",
      "suburb": "MULGUTHRIE"
    },
    {
      "postCode": "2476",
      "suburb": "MULI MULI"
    },
    {
      "postCode": "2825",
      "suburb": "MULLA"
    },
    {
      "postCode": "2352",
      "suburb": "MULLA CREEK"
    },
    {
      "postCode": "2379",
      "suburb": "MULLALEY"
    },
    {
      "postCode": "2850",
      "suburb": "MULLAMUDDY"
    },
    {
      "postCode": "2456",
      "suburb": "MULLAWAY"
    },
    {
      "postCode": "2644",
      "suburb": "MULLENGANDRA"
    },
    {
      "postCode": "2825",
      "suburb": "MULLENGUDGERY"
    },
    {
      "postCode": "2582",
      "suburb": "MULLION"
    },
    {
      "postCode": "2800",
      "suburb": "MULLION CREEK"
    },
    {
      "postCode": "2622",
      "suburb": "MULLOON"
    },
    {
      "postCode": "2482",
      "suburb": "MULLUMBIMBY"
    },
    {
      "postCode": "2482",
      "suburb": "MULLUMBIMBY CREEK"
    },
    {
      "postCode": "2647",
      "suburb": "MULWALA"
    },
    {
      "postCode": "2871",
      "suburb": "MULYANDRY"
    },
    {
      "postCode": "2820",
      "suburb": "MUMBIL"
    },
    {
      "postCode": "2824",
      "suburb": "MUMBLEBONE PLAIN"
    },
    {
      "postCode": "2550",
      "suburb": "MUMBULLA MOUNTAIN"
    },
    {
      "postCode": "2580",
      "suburb": "MUMMEL"
    },
    {
      "postCode": "2469",
      "suburb": "MUMMULGUM"
    },
    {
      "postCode": "2540",
      "suburb": "MUNDAMIA"
    },
    {
      "postCode": "2729",
      "suburb": "MUNDARLO"
    },
    {
      "postCode": "2653",
      "suburb": "MUNDEROO"
    },
    {
      "postCode": "2720",
      "suburb": "MUNDONGO"
    },
    {
      "postCode": "2440",
      "suburb": "MUNGAY CREEK"
    },
    {
      "postCode": "2850",
      "suburb": "MUNGHORN"
    },
    {
      "postCode": "2406",
      "suburb": "MUNGINDI"
    },
    {
      "postCode": "2715",
      "suburb": "MUNGO"
    },
    {
      "postCode": "2423",
      "suburb": "MUNGO BRUSH"
    },
    {
      "postCode": "2420",
      "suburb": "MUNNI"
    },
    {
      "postCode": "2658",
      "suburb": "MUNYABLA"
    },
    {
      "postCode": "2624",
      "suburb": "MUNYANG"
    },
    {
      "postCode": "2864",
      "suburb": "MURGA"
    },
    {
      "postCode": "2546",
      "suburb": "MURRAH"
    },
    {
      "postCode": "2705",
      "suburb": "MURRAMI"
    },
    {
      "postCode": "2825",
      "suburb": "MURRAWOMBIE"
    },
    {
      "postCode": "2734",
      "suburb": "MURRAY DOWNS"
    },
    {
      "postCode": "2642",
      "suburb": "MURRAY GORGE"
    },
    {
      "postCode": "2708",
      "suburb": "MURRAY REGION MC"
    },
    {
      "postCode": "2281",
      "suburb": "MURRAYS BEACH"
    },
    {
      "postCode": "2325",
      "suburb": "MURRAYS RUN"
    },
    {
      "postCode": "2622",
      "suburb": "MURRENGENBURG"
    },
    {
      "postCode": "2672",
      "suburb": "MURRIN BRIDGE"
    },
    {
      "postCode": "2586",
      "suburb": "MURRINGO"
    },
    {
      "postCode": "2652",
      "suburb": "MURRULEBALE"
    },
    {
      "postCode": "2582",
      "suburb": "MURRUMBATEMAN"
    },
    {
      "postCode": "2849",
      "suburb": "MURRUMBO"
    },
    {
      "postCode": "2630",
      "suburb": "MURRUMBUCCA"
    },
    {
      "postCode": "2587",
      "suburb": "MURRUMBURRAH"
    },
    {
      "postCode": "2338",
      "suburb": "MURRURUNDI"
    },
    {
      "postCode": "2337",
      "suburb": "MURULLA"
    },
    {
      "postCode": "2484",
      "suburb": "MURWILLUMBAH"
    },
    {
      "postCode": "2484",
      "suburb": "MURWILLUMBAH DC"
    },
    {
      "postCode": "2484",
      "suburb": "MURWILLUMBAH SOUTH"
    },
    {
      "postCode": "2333",
      "suburb": "MUSCLE CREEK"
    },
    {
      "postCode": "2333",
      "suburb": "MUSWELLBROOK"
    },
    {
      "postCode": "2880",
      "suburb": "MUTAWINTJI"
    },
    {
      "postCode": "2722",
      "suburb": "MUTTAMA"
    },
    {
      "postCode": "2403",
      "suburb": "MYALL CREEK"
    },
    {
      "postCode": "2423",
      "suburb": "MYALL LAKE"
    },
    {
      "postCode": "2681",
      "suburb": "MYALL PARK"
    },
    {
      "postCode": "2630",
      "suburb": "MYALLA"
    },
    {
      "postCode": "2454",
      "suburb": "MYLESTOM"
    },
    {
      "postCode": "2460",
      "suburb": "MYLNEFORD"
    },
    {
      "postCode": "2481",
      "suburb": "MYOCUM"
    },
    {
      "postCode": "2540",
      "suburb": "MYOLA"
    },
    {
      "postCode": "2469",
      "suburb": "MYRTLE CREEK"
    },
    {
      "postCode": "2550",
      "suburb": "MYRTLE MOUNTAIN"
    },
    {
      "postCode": "2713",
      "suburb": "MYRTLE PARK"
    },
    {
      "postCode": "2580",
      "suburb": "MYRTLEVILLE"
    },
    {
      "postCode": "2546",
      "suburb": "MYSTERY BAY"
    },
    {
      "postCode": "2264",
      "suburb": "MYUNA BAY"
    },
    {
      "postCode": "2312",
      "suburb": "NABIAC"
    },
    {
      "postCode": "2551",
      "suburb": "NADGEE"
    },
    {
      "postCode": "2448",
      "suburb": "NAMBUCCA HEADS"
    },
    {
      "postCode": "2346",
      "suburb": "NAMOI RIVER"
    },
    {
      "postCode": "2450",
      "suburb": "NANA GLEN"
    },
    {
      "postCode": "2722",
      "suburb": "NANGUS"
    },
    {
      "postCode": "2582",
      "suburb": "NANIMA"
    },
    {
      "postCode": "2379",
      "suburb": "NAPIER LANE"
    },
    {
      "postCode": "2795",
      "suburb": "NAPOLEON REEF"
    },
    {
      "postCode": "2669",
      "suburb": "NARADHAN"
    },
    {
      "postCode": "2250",
      "suburb": "NARARA"
    },
    {
      "postCode": "2567",
      "suburb": "NARELLAN"
    },
    {
      "postCode": "2567",
      "suburb": "NARELLAN VALE"
    },
    {
      "postCode": "2065",
      "suburb": "NAREMBURN"
    },
    {
      "postCode": "2325",
      "suburb": "NARONE CREEK"
    },
    {
      "postCode": "2546",
      "suburb": "NAROOMA"
    },
    {
      "postCode": "2551",
      "suburb": "NARRABARBA"
    },
    {
      "postCode": "2101",
      "suburb": "NARRABEEN"
    },
    {
      "postCode": "2390",
      "suburb": "NARRABRI"
    },
    {
      "postCode": "2390",
      "suburb": "NARRABRI WEST"
    },
    {
      "postCode": "2666",
      "suburb": "NARRABURRA"
    },
    {
      "postCode": "2839",
      "suburb": "NARRAN LAKE"
    },
    {
      "postCode": "2700",
      "suburb": "NARRANDERA"
    },
    {
      "postCode": "2582",
      "suburb": "NARRANGULLEN"
    },
    {
      "postCode": "2583",
      "suburb": "NARRAWA"
    },
    {
      "postCode": "2539",
      "suburb": "NARRAWALLEE"
    },
    {
      "postCode": "2099",
      "suburb": "NARRAWEENA"
    },
    {
      "postCode": "2821",
      "suburb": "NARROMINE"
    },
    {
      "postCode": "2209",
      "suburb": "NARWEE"
    },
    {
      "postCode": "2800",
      "suburb": "NASHDALE"
    },
    {
      "postCode": "2479",
      "suburb": "NASHUA"
    },
    {
      "postCode": "2570",
      "suburb": "NATTAI"
    },
    {
      "postCode": "2470",
      "suburb": "NAUGHTONS GAP"
    },
    {
      "postCode": "2326",
      "suburb": "NEATH"
    },
    {
      "postCode": "2829",
      "suburb": "NEBEA"
    },
    {
      "postCode": "2831",
      "suburb": "NEILREX"
    },
    {
      "postCode": "2536",
      "suburb": "NELLIGEN"
    },
    {
      "postCode": "2550",
      "suburb": "NELSON"
    },
    {
      "postCode": "2765",
      "suburb": "NELSON"
    },
    {
      "postCode": "2315",
      "suburb": "NELSON BAY"
    },
    {
      "postCode": "2324",
      "suburb": "NELSONS PLAINS"
    },
    {
      "postCode": "2876",
      "suburb": "NELUNGALOO"
    },
    {
      "postCode": "2340",
      "suburb": "NEMINGHA"
    },
    {
      "postCode": "2680",
      "suburb": "NERICON"
    },
    {
      "postCode": "2622",
      "suburb": "NERINGLA"
    },
    {
      "postCode": "2423",
      "suburb": "NERONG"
    },
    {
      "postCode": "2622",
      "suburb": "NERRIGA"
    },
    {
      "postCode": "2545",
      "suburb": "NERRIGUNDAH"
    },
    {
      "postCode": "2549",
      "suburb": "NETHERCOTE"
    },
    {
      "postCode": "2820",
      "suburb": "NEUREA"
    },
    {
      "postCode": "2089",
      "suburb": "NEUTRAL BAY"
    },
    {
      "postCode": "2089",
      "suburb": "NEUTRAL BAY JUNCTION"
    },
    {
      "postCode": "2453",
      "suburb": "NEVER NEVER"
    },
    {
      "postCode": "2826",
      "suburb": "NEVERTIRE"
    },
    {
      "postCode": "2799",
      "suburb": "NEVILLE"
    },
    {
      "postCode": "2577",
      "suburb": "NEW BERRIMA"
    },
    {
      "postCode": "2483",
      "suburb": "NEW BRIGHTON"
    },
    {
      "postCode": "2550",
      "suburb": "NEW BUILDINGS"
    },
    {
      "postCode": "2348",
      "suburb": "NEW ENGLAND MC"
    },
    {
      "postCode": "2472",
      "suburb": "NEW ITALY"
    },
    {
      "postCode": "2305",
      "suburb": "NEW LAMBTON"
    },
    {
      "postCode": "2305",
      "suburb": "NEW LAMBTON HEIGHTS"
    },
    {
      "postCode": "2346",
      "suburb": "NEW MEXICO"
    },
    {
      "postCode": "2474",
      "suburb": "NEW PARK"
    },
    {
      "postCode": "2365",
      "suburb": "NEW VALLEY"
    },
    {
      "postCode": "2460",
      "suburb": "NEWBOLD"
    },
    {
      "postCode": "2795",
      "suburb": "NEWBRIDGE"
    },
    {
      "postCode": "2300",
      "suburb": "NEWCASTLE"
    },
    {
      "postCode": "2300",
      "suburb": "NEWCASTLE EAST"
    },
    {
      "postCode": "2308",
      "suburb": "NEWCASTLE UNIVERSITY"
    },
    {
      "postCode": "2302",
      "suburb": "NEWCASTLE WEST"
    },
    {
      "postCode": "2447",
      "suburb": "NEWEE CREEK"
    },
    {
      "postCode": "2127",
      "suburb": "NEWINGTON"
    },
    {
      "postCode": "2790",
      "suburb": "NEWNES"
    },
    {
      "postCode": "2790",
      "suburb": "NEWNES PLATEAU"
    },
    {
      "postCode": "2106",
      "suburb": "NEWPORT"
    },
    {
      "postCode": "2106",
      "suburb": "NEWPORT BEACH"
    },
    {
      "postCode": "2479",
      "suburb": "NEWRYBAR"
    },
    {
      "postCode": "2360",
      "suburb": "NEWSTEAD"
    },
    {
      "postCode": "2370",
      "suburb": "NEWTON BOYD"
    },
    {
      "postCode": "2042",
      "suburb": "NEWTOWN"
    },
    {
      "postCode": "2627",
      "suburb": "NGARIGO"
    },
    {
      "postCode": "2250",
      "suburb": "NIAGARA PARK"
    },
    {
      "postCode": "2354",
      "suburb": "NIANGALA"
    },
    {
      "postCode": "2733",
      "suburb": "NIEMUR"
    },
    {
      "postCode": "2480",
      "suburb": "NIGHTCAP"
    },
    {
      "postCode": "2480",
      "suburb": "NIMBIN"
    },
    {
      "postCode": "2631",
      "suburb": "NIMMITABEL"
    },
    {
      "postCode": "2628",
      "suburb": "NIMMO"
    },
    {
      "postCode": "2763",
      "suburb": "NIRIMBA FIELDS"
    },
    {
      "postCode": "2484",
      "suburb": "NOBBYS CREEK"
    },
    {
      "postCode": "2379",
      "suburb": "NOMBI"
    },
    {
      "postCode": "2835",
      "suburb": "NOONA"
    },
    {
      "postCode": "2732",
      "suburb": "NOORONG"
    },
    {
      "postCode": "2415",
      "suburb": "NOOROO"
    },
    {
      "postCode": "2263",
      "suburb": "NORAH HEAD"
    },
    {
      "postCode": "2263",
      "suburb": "NORAVILLE"
    },
    {
      "postCode": "2281",
      "suburb": "NORDS WHARF"
    },
    {
      "postCode": "2899",
      "suburb": "NORFOLK ISLAND"
    },
    {
      "postCode": "2076",
      "suburb": "NORMANHURST"
    },
    {
      "postCode": "2640",
      "suburb": "NORTH ALBURY"
    },
    {
      "postCode": "2484",
      "suburb": "NORTH ARM"
    },
    {
      "postCode": "2324",
      "suburb": "NORTH ARM COVE"
    },
    {
      "postCode": "2260",
      "suburb": "NORTH AVOCA"
    },
    {
      "postCode": "2093",
      "suburb": "NORTH BALGOWLAH"
    },
    {
      "postCode": "2536",
      "suburb": "NORTH BATEMANS BAY"
    },
    {
      "postCode": "2450",
      "suburb": "NORTH BOAMBEE VALLEY"
    },
    {
      "postCode": "2026",
      "suburb": "NORTH BONDI"
    },
    {
      "postCode": "2840",
      "suburb": "NORTH BOURKE"
    },
    {
      "postCode": "2443",
      "suburb": "NORTH BROTHER"
    },
    {
      "postCode": "2470",
      "suburb": "NORTH CASINO"
    },
    {
      "postCode": "2099",
      "suburb": "NORTH CURL CURL"
    },
    {
      "postCode": "2453",
      "suburb": "NORTH DORRIGO"
    },
    {
      "postCode": "2121",
      "suburb": "NORTH EPPING"
    },
    {
      "postCode": "2250",
      "suburb": "NORTH GOSFORD"
    },
    {
      "postCode": "2443",
      "suburb": "NORTH HAVEN"
    },
    {
      "postCode": "2155",
      "suburb": "NORTH KELLYVILLE"
    },
    {
      "postCode": "2299",
      "suburb": "NORTH LAMBTON"
    },
    {
      "postCode": "2480",
      "suburb": "NORTH LISMORE"
    },
    {
      "postCode": "2447",
      "suburb": "NORTH MACKSVILLE"
    },
    {
      "postCode": "2100",
      "suburb": "NORTH MANLY"
    },
    {
      "postCode": "2546",
      "suburb": "NORTH NAROOMA"
    },
    {
      "postCode": "2101",
      "suburb": "NORTH NARRABEEN"
    },
    {
      "postCode": "2541",
      "suburb": "NORTH NOWRA"
    },
    {
      "postCode": "1750",
      "suburb": "NORTH PARRAMATTA"
    },
    {
      "postCode": "2151",
      "suburb": "NORTH PARRAMATTA"
    },
    {
      "postCode": "2754",
      "suburb": "NORTH RICHMOND"
    },
    {
      "postCode": "2151",
      "suburb": "NORTH ROCKS"
    },
    {
      "postCode": "2335",
      "suburb": "NORTH ROTHBURY"
    },
    {
      "postCode": "1670",
      "suburb": "NORTH RYDE"
    },
    {
      "postCode": "2113",
      "suburb": "NORTH RYDE"
    },
    {
      "postCode": "1670",
      "suburb": "NORTH RYDE BC"
    },
    {
      "postCode": "2444",
      "suburb": "NORTH SHORE"
    },
    {
      "postCode": "2760",
      "suburb": "NORTH ST MARYS"
    },
    {
      "postCode": "2408",
      "suburb": "NORTH STAR"
    },
    {
      "postCode": "2137",
      "suburb": "NORTH STRATHFIELD"
    },
    {
      "postCode": "2055",
      "suburb": "NORTH SYDNEY"
    },
    {
      "postCode": "2059",
      "suburb": "NORTH SYDNEY"
    },
    {
      "postCode": "2060",
      "suburb": "NORTH SYDNEY"
    },
    {
      "postCode": "2060",
      "suburb": "NORTH SYDNEY SHOPPINGWORLD"
    },
    {
      "postCode": "2340",
      "suburb": "NORTH TAMWORTH"
    },
    {
      "postCode": "2490",
      "suburb": "NORTH TUMBULGUM"
    },
    {
      "postCode": "2074",
      "suburb": "NORTH TURRAMURRA"
    },
    {
      "postCode": "2650",
      "suburb": "NORTH WAGGA WAGGA"
    },
    {
      "postCode": "2076",
      "suburb": "NORTH WAHROONGA"
    },
    {
      "postCode": "2068",
      "suburb": "NORTH WILLOUGHBY"
    },
    {
      "postCode": "2500",
      "suburb": "NORTH WOLLONGONG"
    },
    {
      "postCode": "2471",
      "suburb": "NORTH WOODBURN"
    },
    {
      "postCode": "2671",
      "suburb": "NORTH YALGOGRIN"
    },
    {
      "postCode": "2868",
      "suburb": "NORTH YEOVAL"
    },
    {
      "postCode": "2622",
      "suburb": "NORTHANGERA"
    },
    {
      "postCode": "1560",
      "suburb": "NORTHBRIDGE"
    },
    {
      "postCode": "2063",
      "suburb": "NORTHBRIDGE"
    },
    {
      "postCode": "2152",
      "suburb": "NORTHMEAD"
    },
    {
      "postCode": "2066",
      "suburb": "NORTHWOOD"
    },
    {
      "postCode": "2787",
      "suburb": "NORWAY"
    },
    {
      "postCode": "2153",
      "suburb": "NORWEST"
    },
    {
      "postCode": "2354",
      "suburb": "NOWENDOC"
    },
    {
      "postCode": "2386",
      "suburb": "NOWLEY"
    },
    {
      "postCode": "2541",
      "suburb": "NOWRA"
    },
    {
      "postCode": "2541",
      "suburb": "NOWRA DC"
    },
    {
      "postCode": "2541",
      "suburb": "NOWRA EAST"
    },
    {
      "postCode": "2540",
      "suburb": "NOWRA HILL"
    },
    {
      "postCode": "2540",
      "suburb": "NOWRA NAVAL PO"
    },
    {
      "postCode": "2587",
      "suburb": "NUBBA"
    },
    {
      "postCode": "2325",
      "suburb": "NULKABA"
    },
    {
      "postCode": "2360",
      "suburb": "NULLAMANNA"
    },
    {
      "postCode": "2551",
      "suburb": "NULLICA"
    },
    {
      "postCode": "2849",
      "suburb": "NULLO MOUNTAIN"
    },
    {
      "postCode": "2540",
      "suburb": "NUMBAA"
    },
    {
      "postCode": "2424",
      "suburb": "NUMBER ONE"
    },
    {
      "postCode": "2628",
      "suburb": "NUMBLA VALE"
    },
    {
      "postCode": "2550",
      "suburb": "NUMBUGGA"
    },
    {
      "postCode": "2630",
      "suburb": "NUMERALLA"
    },
    {
      "postCode": "2484",
      "suburb": "NUMINBAH"
    },
    {
      "postCode": "2480",
      "suburb": "NUMULGI"
    },
    {
      "postCode": "2484",
      "suburb": "NUNDERI"
    },
    {
      "postCode": "2340",
      "suburb": "NUNDLE"
    },
    {
      "postCode": "2629",
      "suburb": "NUNGAR"
    },
    {
      "postCode": "2551",
      "suburb": "NUNGATTA"
    },
    {
      "postCode": "2551",
      "suburb": "NUNGATTA SOUTH"
    },
    {
      "postCode": "2649",
      "suburb": "NURENMERENMONG"
    },
    {
      "postCode": "2831",
      "suburb": "NYMAGEE"
    },
    {
      "postCode": "2460",
      "suburb": "NYMBOIDA"
    },
    {
      "postCode": "2825",
      "suburb": "NYNGAN"
    },
    {
      "postCode": "2646",
      "suburb": "NYORA"
    },
    {
      "postCode": "2804",
      "suburb": "NYRANG CREEK"
    },
    {
      "postCode": "2795",
      "suburb": "O'CONNELL"
    },
    {
      "postCode": "2529",
      "suburb": "OAK FLATS"
    },
    {
      "postCode": "2529",
      "suburb": "OAK FLATS DC"
    },
    {
      "postCode": "2570",
      "suburb": "OAKDALE"
    },
    {
      "postCode": "2790",
      "suburb": "OAKEY PARK"
    },
    {
      "postCode": "2320",
      "suburb": "OAKHAMPTON"
    },
    {
      "postCode": "2320",
      "suburb": "OAKHAMPTON HEIGHTS"
    },
    {
      "postCode": "2761",
      "suburb": "OAKHURST"
    },
    {
      "postCode": "2646",
      "suburb": "OAKLANDS"
    },
    {
      "postCode": "2765",
      "suburb": "OAKVILLE"
    },
    {
      "postCode": "2360",
      "suburb": "OAKWOOD"
    },
    {
      "postCode": "2622",
      "suburb": "OALLEN"
    },
    {
      "postCode": "2117",
      "suburb": "OATLANDS"
    },
    {
      "postCode": "2223",
      "suburb": "OATLEY"
    },
    {
      "postCode": "2365",
      "suburb": "OBAN"
    },
    {
      "postCode": "2330",
      "suburb": "OBANVALE"
    },
    {
      "postCode": "2650",
      "suburb": "OBERNE CREEK"
    },
    {
      "postCode": "2787",
      "suburb": "OBERON"
    },
    {
      "postCode": "2868",
      "suburb": "OBLEY"
    },
    {
      "postCode": "2483",
      "suburb": "OCEAN SHORES"
    },
    {
      "postCode": "2340",
      "suburb": "OGUNBIL"
    },
    {
      "postCode": "2629",
      "suburb": "OLD ADAMINABY"
    },
    {
      "postCode": "2430",
      "suburb": "OLD BAR"
    },
    {
      "postCode": "2469",
      "suburb": "OLD BONALBO"
    },
    {
      "postCode": "2540",
      "suburb": "OLD EROWAL BAY"
    },
    {
      "postCode": "2474",
      "suburb": "OLD GREVILLIA"
    },
    {
      "postCode": "2161",
      "suburb": "OLD GUILDFORD"
    },
    {
      "postCode": "2652",
      "suburb": "OLD JUNEE"
    },
    {
      "postCode": "2369",
      "suburb": "OLD MILL"
    },
    {
      "postCode": "2440",
      "suburb": "OLD STATION"
    },
    {
      "postCode": "2146",
      "suburb": "OLD TOONGABBIE"
    },
    {
      "postCode": "2849",
      "suburb": "OLINDA"
    },
    {
      "postCode": "2325",
      "suburb": "OLNEY"
    },
    {
      "postCode": "2337",
      "suburb": "OMADALE"
    },
    {
      "postCode": "2316",
      "suburb": "ONE MILE"
    },
    {
      "postCode": "2711",
      "suburb": "ONE TREE"
    },
    {
      "postCode": "2581",
      "suburb": "OOLONG"
    },
    {
      "postCode": "2871",
      "suburb": "OOMA"
    },
    {
      "postCode": "2875",
      "suburb": "OOTHA"
    },
    {
      "postCode": "2800",
      "suburb": "OPHIR"
    },
    {
      "postCode": "2570",
      "suburb": "ORAN PARK"
    },
    {
      "postCode": "2800",
      "suburb": "ORANGE"
    },
    {
      "postCode": "2800",
      "suburb": "ORANGE DC"
    },
    {
      "postCode": "2800",
      "suburb": "ORANGE EAST"
    },
    {
      "postCode": "2380",
      "suburb": "ORANGE GROVE"
    },
    {
      "postCode": "2800",
      "suburb": "ORANGE MOULDER STREET"
    },
    {
      "postCode": "2570",
      "suburb": "ORANGEVILLE"
    },
    {
      "postCode": "2748",
      "suburb": "ORCHARD HILLS"
    },
    {
      "postCode": "2540",
      "suburb": "ORIENT POINT"
    },
    {
      "postCode": "2795",
      "suburb": "ORTON PARK"
    },
    {
      "postCode": "2656",
      "suburb": "OSBORNE"
    },
    {
      "postCode": "2324",
      "suburb": "OSTERLEY"
    },
    {
      "postCode": "2321",
      "suburb": "OSWALD"
    },
    {
      "postCode": "2508",
      "suburb": "OTFORD"
    },
    {
      "postCode": "2650",
      "suburb": "OURA"
    },
    {
      "postCode": "2258",
      "suburb": "OURIMBAH"
    },
    {
      "postCode": "2640",
      "suburb": "OURNIE"
    },
    {
      "postCode": "2337",
      "suburb": "OWENS GAP"
    },
    {
      "postCode": "2100",
      "suburb": "OXFORD FALLS"
    },
    {
      "postCode": "2711",
      "suburb": "OXLEY"
    },
    {
      "postCode": "2824",
      "suburb": "OXLEY"
    },
    {
      "postCode": "2430",
      "suburb": "OXLEY ISLAND"
    },
    {
      "postCode": "2760",
      "suburb": "OXLEY PARK"
    },
    {
      "postCode": "2340",
      "suburb": "OXLEY VALE"
    },
    {
      "postCode": "2225",
      "suburb": "OYSTER BAY"
    },
    {
      "postCode": "2318",
      "suburb": "OYSTER COVE"
    },
    {
      "postCode": "2428",
      "suburb": "PACIFIC PALMS"
    },
    {
      "postCode": "2880",
      "suburb": "PACKSADDLE"
    },
    {
      "postCode": "2021",
      "suburb": "PADDINGTON"
    },
    {
      "postCode": "2469",
      "suburb": "PADDYS FLAT"
    },
    {
      "postCode": "2632",
      "suburb": "PADDYS FLAT"
    },
    {
      "postCode": "2577",
      "suburb": "PADDYS RIVER"
    },
    {
      "postCode": "2653",
      "suburb": "PADDYS RIVER"
    },
    {
      "postCode": "2211",
      "suburb": "PADSTOW"
    },
    {
      "postCode": "2211",
      "suburb": "PADSTOW HEIGHTS"
    },
    {
      "postCode": "2469",
      "suburb": "PAGANS FLAT"
    },
    {
      "postCode": "2337",
      "suburb": "PAGES CREEK"
    },
    {
      "postCode": "2338",
      "suburb": "PAGES RIVER"
    },
    {
      "postCode": "2035",
      "suburb": "PAGEWOOD"
    },
    {
      "postCode": "2632",
      "suburb": "PALARANG"
    },
    {
      "postCode": "2622",
      "suburb": "PALERANG"
    },
    {
      "postCode": "2580",
      "suburb": "PALING YARDS"
    },
    {
      "postCode": "2795",
      "suburb": "PALING YARDS"
    },
    {
      "postCode": "2404",
      "suburb": "PALLAL"
    },
    {
      "postCode": "2399",
      "suburb": "PALLAMALLAWA"
    },
    {
      "postCode": "2108",
      "suburb": "PALM BEACH"
    },
    {
      "postCode": "2258",
      "suburb": "PALM GROVE"
    },
    {
      "postCode": "2258",
      "suburb": "PALMDALE"
    },
    {
      "postCode": "2463",
      "suburb": "PALMERS CHANNEL"
    },
    {
      "postCode": "2463",
      "suburb": "PALMERS ISLAND"
    },
    {
      "postCode": "2795",
      "suburb": "PALMERS OAKY"
    },
    {
      "postCode": "2484",
      "suburb": "PALMVALE"
    },
    {
      "postCode": "2482",
      "suburb": "PALMWOODS"
    },
    {
      "postCode": "2232",
      "suburb": "PALONA"
    },
    {
      "postCode": "2549",
      "suburb": "PAMBULA"
    },
    {
      "postCode": "2549",
      "suburb": "PAMBULA BEACH"
    },
    {
      "postCode": "2430",
      "suburb": "PAMPOOLAH"
    },
    {
      "postCode": "2648",
      "suburb": "PAN BAN"
    },
    {
      "postCode": "2213",
      "suburb": "PANANIA"
    },
    {
      "postCode": "2825",
      "suburb": "PANGEE"
    },
    {
      "postCode": "2800",
      "suburb": "PANUARA"
    },
    {
      "postCode": "2446",
      "suburb": "PAPPINBARRA"
    },
    {
      "postCode": "2648",
      "suburb": "PARA"
    },
    {
      "postCode": "2360",
      "suburb": "PARADISE"
    },
    {
      "postCode": "2738",
      "suburb": "PARINGI"
    },
    {
      "postCode": "2870",
      "suburb": "PARKES"
    },
    {
      "postCode": "2580",
      "suburb": "PARKESBOURNE"
    },
    {
      "postCode": "2768",
      "suburb": "PARKLEA"
    },
    {
      "postCode": "2337",
      "suburb": "PARKVILLE"
    },
    {
      "postCode": "2000",
      "suburb": "PARLIAMENT HOUSE"
    },
    {
      "postCode": "2540",
      "suburb": "PARMA"
    },
    {
      "postCode": "2123",
      "suburb": "PARRAMATTA"
    },
    {
      "postCode": "2124",
      "suburb": "PARRAMATTA"
    },
    {
      "postCode": "2150",
      "suburb": "PARRAMATTA"
    },
    {
      "postCode": "2150",
      "suburb": "PARRAMATTA WESTFIELD"
    },
    {
      "postCode": "2339",
      "suburb": "PARRAWEENA"
    },
    {
      "postCode": "2478",
      "suburb": "PATCHS BEACH"
    },
    {
      "postCode": "2421",
      "suburb": "PATERSON"
    },
    {
      "postCode": "2256",
      "suburb": "PATONGA"
    },
    {
      "postCode": "2628",
      "suburb": "PAUPONG"
    },
    {
      "postCode": "2325",
      "suburb": "PAXTON"
    },
    {
      "postCode": "2325",
      "suburb": "PAYNES CROSSING"
    },
    {
      "postCode": "2871",
      "suburb": "PAYTENS BRIDGE"
    },
    {
      "postCode": "2469",
      "suburb": "PEACOCK CREEK"
    },
    {
      "postCode": "2869",
      "suburb": "PEAK HILL"
    },
    {
      "postCode": "2630",
      "suburb": "PEAK VIEW"
    },
    {
      "postCode": "2210",
      "suburb": "PEAKHURST"
    },
    {
      "postCode": "2210",
      "suburb": "PEAKHURST DC"
    },
    {
      "postCode": "2210",
      "suburb": "PEAKHURST HEIGHTS"
    },
    {
      "postCode": "2477",
      "suburb": "PEARCES CREEK"
    },
    {
      "postCode": "2256",
      "suburb": "PEARL BEACH"
    },
    {
      "postCode": "2250",
      "suburb": "PEATS RIDGE"
    },
    {
      "postCode": "2536",
      "suburb": "PEBBLY BEACH"
    },
    {
      "postCode": "2795",
      "suburb": "PEEL"
    },
    {
      "postCode": "2583",
      "suburb": "PEELWOOD"
    },
    {
      "postCode": "2583",
      "suburb": "PEJAR"
    },
    {
      "postCode": "2327",
      "suburb": "PELAW MAIN"
    },
    {
      "postCode": "2281",
      "suburb": "PELICAN"
    },
    {
      "postCode": "2325",
      "suburb": "PELTON"
    },
    {
      "postCode": "2446",
      "suburb": "PEMBROOKE"
    },
    {
      "postCode": "2145",
      "suburb": "PEMULWUY"
    },
    {
      "postCode": "2145",
      "suburb": "PENDLE HILL"
    },
    {
      "postCode": "1715",
      "suburb": "PENNANT HILLS"
    },
    {
      "postCode": "2120",
      "suburb": "PENNANT HILLS"
    },
    {
      "postCode": "2750",
      "suburb": "PENRITH"
    },
    {
      "postCode": "2751",
      "suburb": "PENRITH"
    },
    {
      "postCode": "2750",
      "suburb": "PENRITH PLAZA"
    },
    {
      "postCode": "2750",
      "suburb": "PENRITH SOUTH"
    },
    {
      "postCode": "2579",
      "suburb": "PENROSE"
    },
    {
      "postCode": "2222",
      "suburb": "PENSHURST"
    },
    {
      "postCode": "2550",
      "suburb": "PERICOE"
    },
    {
      "postCode": "2624",
      "suburb": "PERISHER VALLEY"
    },
    {
      "postCode": "2775",
      "suburb": "PERRYS CROSSING"
    },
    {
      "postCode": "2795",
      "suburb": "PERTHVILLE"
    },
    {
      "postCode": "2049",
      "suburb": "PETERSHAM"
    },
    {
      "postCode": "2574",
      "suburb": "PHEASANTS NEST"
    },
    {
      "postCode": "2256",
      "suburb": "PHEGANS BAY"
    },
    {
      "postCode": "2036",
      "suburb": "PHILLIP BAY"
    },
    {
      "postCode": "2321",
      "suburb": "PHOENIX PARK"
    },
    {
      "postCode": "2340",
      "suburb": "PIALLAMORE"
    },
    {
      "postCode": "2342",
      "suburb": "PIALLAWAY"
    },
    {
      "postCode": "2850",
      "suburb": "PIAMBONG"
    },
    {
      "postCode": "2251",
      "suburb": "PICKETTS VALLEY"
    },
    {
      "postCode": "2213",
      "suburb": "PICNIC POINT"
    },
    {
      "postCode": "2571",
      "suburb": "PICTON"
    },
    {
      "postCode": "2824",
      "suburb": "PIGEONBAH"
    },
    {
      "postCode": "2486",
      "suburb": "PIGGABEEN"
    },
    {
      "postCode": "2469",
      "suburb": "PIKAPENE"
    },
    {
      "postCode": "2462",
      "suburb": "PILLAR VALLEY"
    },
    {
      "postCode": "2388",
      "suburb": "PILLIGA"
    },
    {
      "postCode": "2627",
      "suburb": "PILOT WILDERNESS"
    },
    {
      "postCode": "2478",
      "suburb": "PIMLICO"
    },
    {
      "postCode": "2478",
      "suburb": "PIMLICO ISLAND"
    },
    {
      "postCode": "2720",
      "suburb": "PINBEYAN"
    },
    {
      "postCode": "2361",
      "suburb": "PINDAROI"
    },
    {
      "postCode": "2324",
      "suburb": "PINDIMAR"
    },
    {
      "postCode": "2648",
      "suburb": "PINE CAMP"
    },
    {
      "postCode": "2824",
      "suburb": "PINE CLUMP"
    },
    {
      "postCode": "2829",
      "suburb": "PINE GROVE"
    },
    {
      "postCode": "2714",
      "suburb": "PINE LODGE"
    },
    {
      "postCode": "2343",
      "suburb": "PINE RIDGE"
    },
    {
      "postCode": "2630",
      "suburb": "PINE VALLEY"
    },
    {
      "postCode": "2810",
      "suburb": "PINEY RANGE"
    },
    {
      "postCode": "2370",
      "suburb": "PINKETT"
    },
    {
      "postCode": "2810",
      "suburb": "PINNACLE"
    },
    {
      "postCode": "2849",
      "suburb": "PINNACLE SWAMP"
    },
    {
      "postCode": "2281",
      "suburb": "PINNY BEACH"
    },
    {
      "postCode": "2470",
      "suburb": "PIORA"
    },
    {
      "postCode": "2446",
      "suburb": "PIPECLAY"
    },
    {
      "postCode": "2323",
      "suburb": "PITNACREE"
    },
    {
      "postCode": "2756",
      "suburb": "PITT TOWN"
    },
    {
      "postCode": "2756",
      "suburb": "PITT TOWN BOTTOMS"
    },
    {
      "postCode": "2658",
      "suburb": "PLEASANT HILLS"
    },
    {
      "postCode": "2172",
      "suburb": "PLEASURE POINT"
    },
    {
      "postCode": "2761",
      "suburb": "PLUMPTON"
    },
    {
      "postCode": "2250",
      "suburb": "POINT CLARE"
    },
    {
      "postCode": "2250",
      "suburb": "POINT FREDERICK"
    },
    {
      "postCode": "2027",
      "suburb": "POINT PIPER"
    },
    {
      "postCode": "2259",
      "suburb": "POINT WOLSTONCROFT"
    },
    {
      "postCode": "2539",
      "suburb": "POINTER MOUNTAIN"
    },
    {
      "postCode": "2320",
      "suburb": "POKOLBIN"
    },
    {
      "postCode": "2440",
      "suburb": "POLA CREEK"
    },
    {
      "postCode": "2630",
      "suburb": "POLO FLAT"
    },
    {
      "postCode": "2580",
      "suburb": "POMEROY"
    },
    {
      "postCode": "2648",
      "suburb": "POMONA"
    },
    {
      "postCode": "2818",
      "suburb": "PONTO"
    },
    {
      "postCode": "2648",
      "suburb": "POONCARIE"
    },
    {
      "postCode": "2036",
      "suburb": "PORT BOTANY"
    },
    {
      "postCode": "2229",
      "suburb": "PORT HACKING"
    },
    {
      "postCode": "2505",
      "suburb": "PORT KEMBLA"
    },
    {
      "postCode": "2444",
      "suburb": "PORT MACQUARIE"
    },
    {
      "postCode": "2444",
      "suburb": "PORT MACQUARIE BC"
    },
    {
      "postCode": "2538",
      "suburb": "PORTERS CREEK"
    },
    {
      "postCode": "2787",
      "suburb": "PORTERS RETREAT"
    },
    {
      "postCode": "2847",
      "suburb": "PORTLAND"
    },
    {
      "postCode": "2430",
      "suburb": "POSSUM BRUSH"
    },
    {
      "postCode": "2479",
      "suburb": "POSSUM CREEK"
    },
    {
      "postCode": "2545",
      "suburb": "POTATO POINT"
    },
    {
      "postCode": "2790",
      "suburb": "POTTERY ESTATE"
    },
    {
      "postCode": "2143",
      "suburb": "POTTS HILL"
    },
    {
      "postCode": "1335",
      "suburb": "POTTS POINT"
    },
    {
      "postCode": "2011",
      "suburb": "POTTS POINT"
    },
    {
      "postCode": "2489",
      "suburb": "POTTSVILLE"
    },
    {
      "postCode": "2489",
      "suburb": "POTTSVILLE BEACH"
    },
    {
      "postCode": "2176",
      "suburb": "PRAIRIEWOOD"
    },
    {
      "postCode": "2381",
      "suburb": "PREMER"
    },
    {
      "postCode": "2170",
      "suburb": "PRESTONS"
    },
    {
      "postCode": "2257",
      "suburb": "PRETTY BEACH"
    },
    {
      "postCode": "2539",
      "suburb": "PRETTY BEACH"
    },
    {
      "postCode": "2710",
      "suburb": "PRETTY PINE"
    },
    {
      "postCode": "2502",
      "suburb": "PRIMBEE"
    },
    {
      "postCode": "2621",
      "suburb": "PRIMROSE VALLEY"
    },
    {
      "postCode": "2148",
      "suburb": "PROSPECT"
    },
    {
      "postCode": "2629",
      "suburb": "PROVIDENCE PORTAL"
    },
    {
      "postCode": "2666",
      "suburb": "PUCAWAN"
    },
    {
      "postCode": "2350",
      "suburb": "PUDDLEDOCK"
    },
    {
      "postCode": "2460",
      "suburb": "PULGANBAR"
    },
    {
      "postCode": "2810",
      "suburb": "PULLABOOKA"
    },
    {
      "postCode": "2650",
      "suburb": "PULLETOP"
    },
    {
      "postCode": "2484",
      "suburb": "PUMPENBIL"
    },
    {
      "postCode": "2196",
      "suburb": "PUNCHBOWL"
    },
    {
      "postCode": "2460",
      "suburb": "PUNCHBOWL"
    },
    {
      "postCode": "2430",
      "suburb": "PURFLEET"
    },
    {
      "postCode": "2357",
      "suburb": "PURLEWAUGH"
    },
    {
      "postCode": "2112",
      "suburb": "PUTNEY"
    },
    {
      "postCode": "2850",
      "suburb": "PUTTA BUCCA"
    },
    {
      "postCode": "2330",
      "suburb": "PUTTY"
    },
    {
      "postCode": "2849",
      "suburb": "PYANGLE"
    },
    {
      "postCode": "2073",
      "suburb": "PYMBLE"
    },
    {
      "postCode": "2850",
      "suburb": "PYRAMUL"
    },
    {
      "postCode": "2540",
      "suburb": "PYREE"
    },
    {
      "postCode": "2009",
      "suburb": "PYRMONT"
    },
    {
      "postCode": "2550",
      "suburb": "QUAAMA"
    },
    {
      "postCode": "2763",
      "suburb": "QUAKERS HILL"
    },
    {
      "postCode": "2831",
      "suburb": "QUAMBONE"
    },
    {
      "postCode": "2828",
      "suburb": "QUANDA"
    },
    {
      "postCode": "2665",
      "suburb": "QUANDARY"
    },
    {
      "postCode": "2721",
      "suburb": "QUANDIALLA"
    },
    {
      "postCode": "2620",
      "suburb": "QUEANBEYAN"
    },
    {
      "postCode": "2620",
      "suburb": "QUEANBEYAN DC"
    },
    {
      "postCode": "2620",
      "suburb": "QUEANBEYAN EAST"
    },
    {
      "postCode": "2620",
      "suburb": "QUEANBEYAN WEST"
    },
    {
      "postCode": "1230",
      "suburb": "QUEEN VICTORIA BUILDING"
    },
    {
      "postCode": "2022",
      "suburb": "QUEENS PARK"
    },
    {
      "postCode": "2850",
      "suburb": "QUEENS PINCH"
    },
    {
      "postCode": "2096",
      "suburb": "QUEENSCLIFF"
    },
    {
      "postCode": "2580",
      "suburb": "QUIALIGO"
    },
    {
      "postCode": "2632",
      "suburb": "QUIDONG"
    },
    {
      "postCode": "2622",
      "suburb": "QUIERA"
    },
    {
      "postCode": "2343",
      "suburb": "QUIPOLLY"
    },
    {
      "postCode": "2343",
      "suburb": "QUIRINDI"
    },
    {
      "postCode": "2325",
      "suburb": "QUORROBOLONG"
    },
    {
      "postCode": "2566",
      "suburb": "RABY"
    },
    {
      "postCode": "2795",
      "suburb": "RAGLAN"
    },
    {
      "postCode": "2430",
      "suburb": "RAINBOW FLAT"
    },
    {
      "postCode": "2440",
      "suburb": "RAINBOW REACH"
    },
    {
      "postCode": "2454",
      "suburb": "RALEIGH"
    },
    {
      "postCode": "2460",
      "suburb": "RAMORNIE"
    },
    {
      "postCode": "2217",
      "suburb": "RAMSGATE"
    },
    {
      "postCode": "2217",
      "suburb": "RAMSGATE BEACH"
    },
    {
      "postCode": "2642",
      "suburb": "RAND"
    },
    {
      "postCode": "2031",
      "suburb": "RANDWICK"
    },
    {
      "postCode": "2031",
      "suburb": "RANDWICK DC"
    },
    {
      "postCode": "2380",
      "suburb": "RANGARI"
    },
    {
      "postCode": "2370",
      "suburb": "RANGERS VALLEY"
    },
    {
      "postCode": "2287",
      "suburb": "RANKIN PARK"
    },
    {
      "postCode": "2669",
      "suburb": "RANKINS SPRINGS"
    },
    {
      "postCode": "2701",
      "suburb": "RANNOCK"
    },
    {
      "postCode": "2469",
      "suburb": "RAPPVILLE"
    },
    {
      "postCode": "2283",
      "suburb": "RATHMINES"
    },
    {
      "postCode": "2259",
      "suburb": "RAVENSDALE"
    },
    {
      "postCode": "2824",
      "suburb": "RAVENSWOOD"
    },
    {
      "postCode": "2330",
      "suburb": "RAVENSWORTH"
    },
    {
      "postCode": "2446",
      "suburb": "RAWDON ISLAND"
    },
    {
      "postCode": "2422",
      "suburb": "RAWDON VALE"
    },
    {
      "postCode": "2321",
      "suburb": "RAWORTH"
    },
    {
      "postCode": "2830",
      "suburb": "RAWSONVILLE"
    },
    {
      "postCode": "2324",
      "suburb": "RAYMOND TERRACE"
    },
    {
      "postCode": "2324",
      "suburb": "RAYMOND TERRACE EAST"
    },
    {
      "postCode": "2571",
      "suburb": "RAZORBACK"
    },
    {
      "postCode": "2430",
      "suburb": "RED HEAD"
    },
    {
      "postCode": "2347",
      "suburb": "RED HILL"
    },
    {
      "postCode": "2720",
      "suburb": "RED HILL"
    },
    {
      "postCode": "2824",
      "suburb": "RED HILL"
    },
    {
      "postCode": "2370",
      "suburb": "RED RANGE"
    },
    {
      "postCode": "2456",
      "suburb": "RED ROCK"
    },
    {
      "postCode": "2577",
      "suburb": "RED ROCKS"
    },
    {
      "postCode": "2446",
      "suburb": "REDBANK"
    },
    {
      "postCode": "2330",
      "suburb": "REDBOURNBERRY"
    },
    {
      "postCode": "2370",
      "suburb": "REDDESTONE"
    },
    {
      "postCode": "2016",
      "suburb": "REDFERN"
    },
    {
      "postCode": "2290",
      "suburb": "REDHEAD"
    },
    {
      "postCode": "2646",
      "suburb": "REDLANDS"
    },
    {
      "postCode": "2330",
      "suburb": "REEDY CREEK"
    },
    {
      "postCode": "2550",
      "suburb": "REEDY SWAMP"
    },
    {
      "postCode": "2666",
      "suburb": "REEFTON"
    },
    {
      "postCode": "2143",
      "suburb": "REGENTS PARK"
    },
    {
      "postCode": "2143",
      "suburb": "REGENTS PARK DC"
    },
    {
      "postCode": "2745",
      "suburb": "REGENTVILLE"
    },
    {
      "postCode": "2586",
      "suburb": "REIDS FLAT"
    },
    {
      "postCode": "2622",
      "suburb": "REIDSDALE"
    },
    {
      "postCode": "2646",
      "suburb": "RENNIE"
    },
    {
      "postCode": "2722",
      "suburb": "RENO"
    },
    {
      "postCode": "2575",
      "suburb": "RENWICK"
    },
    {
      "postCode": "2480",
      "suburb": "REPENTANCE CREEK"
    },
    {
      "postCode": "2454",
      "suburb": "REPTON"
    },
    {
      "postCode": "2484",
      "suburb": "RESERVE CREEK"
    },
    {
      "postCode": "2355",
      "suburb": "RETREAT"
    },
    {
      "postCode": "2212",
      "suburb": "REVESBY"
    },
    {
      "postCode": "2212",
      "suburb": "REVESBY HEIGHTS"
    },
    {
      "postCode": "2212",
      "suburb": "REVESBY NORTH"
    },
    {
      "postCode": "2630",
      "suburb": "RHINE FALLS"
    },
    {
      "postCode": "2138",
      "suburb": "RHODES"
    },
    {
      "postCode": "2765",
      "suburb": "RICHARDS"
    },
    {
      "postCode": "2580",
      "suburb": "RICHLANDS"
    },
    {
      "postCode": "2753",
      "suburb": "RICHMOND"
    },
    {
      "postCode": "2480",
      "suburb": "RICHMOND HILL"
    },
    {
      "postCode": "2753",
      "suburb": "RICHMOND LOWLANDS"
    },
    {
      "postCode": "2323",
      "suburb": "RICHMOND VALE"
    },
    {
      "postCode": "2472",
      "suburb": "RILEYS HILL"
    },
    {
      "postCode": "2646",
      "suburb": "RINGWOOD"
    },
    {
      "postCode": "2678",
      "suburb": "RIVERINA MC"
    },
    {
      "postCode": "2850",
      "suburb": "RIVERLEA"
    },
    {
      "postCode": "2444",
      "suburb": "RIVERSIDE"
    },
    {
      "postCode": "2765",
      "suburb": "RIVERSTONE"
    },
    {
      "postCode": "2372",
      "suburb": "RIVERTREE"
    },
    {
      "postCode": "2066",
      "suburb": "RIVERVIEW"
    },
    {
      "postCode": "2210",
      "suburb": "RIVERWOOD"
    },
    {
      "postCode": "2330",
      "suburb": "RIXS CREEK"
    },
    {
      "postCode": "2360",
      "suburb": "ROB ROY"
    },
    {
      "postCode": "2577",
      "suburb": "ROBERTSON"
    },
    {
      "postCode": "2795",
      "suburb": "ROBIN HILL"
    },
    {
      "postCode": "2630",
      "suburb": "ROCK FLAT"
    },
    {
      "postCode": "2795",
      "suburb": "ROCK FOREST"
    },
    {
      "postCode": "2480",
      "suburb": "ROCK VALLEY"
    },
    {
      "postCode": "2216",
      "suburb": "ROCKDALE"
    },
    {
      "postCode": "2216",
      "suburb": "ROCKDALE DC"
    },
    {
      "postCode": "2795",
      "suburb": "ROCKLEY"
    },
    {
      "postCode": "2795",
      "suburb": "ROCKLEY MOUNT"
    },
    {
      "postCode": "2632",
      "suburb": "ROCKTON"
    },
    {
      "postCode": "2371",
      "suburb": "ROCKY CREEK"
    },
    {
      "postCode": "2390",
      "suburb": "ROCKY CREEK"
    },
    {
      "postCode": "2357",
      "suburb": "ROCKY GLEN"
    },
    {
      "postCode": "2550",
      "suburb": "ROCKY HALL"
    },
    {
      "postCode": "2628",
      "suburb": "ROCKY PLAIN"
    },
    {
      "postCode": "2259",
      "suburb": "ROCKY POINT"
    },
    {
      "postCode": "2358",
      "suburb": "ROCKY RIVER"
    },
    {
      "postCode": "2372",
      "suburb": "ROCKY RIVER"
    },
    {
      "postCode": "2046",
      "suburb": "RODD POINT"
    },
    {
      "postCode": "2441",
      "suburb": "ROLLANDS PLAINS"
    },
    {
      "postCode": "2422",
      "suburb": "ROOKHURST"
    },
    {
      "postCode": "2141",
      "suburb": "ROOKWOOD"
    },
    {
      "postCode": "2766",
      "suburb": "ROOTY HILL"
    },
    {
      "postCode": "2395",
      "suburb": "ROPERS ROAD"
    },
    {
      "postCode": "2760",
      "suburb": "ROPES CROSSING"
    },
    {
      "postCode": "2029",
      "suburb": "ROSE BAY"
    },
    {
      "postCode": "2030",
      "suburb": "ROSE BAY NORTH"
    },
    {
      "postCode": "2534",
      "suburb": "ROSE VALLEY"
    },
    {
      "postCode": "2630",
      "suburb": "ROSE VALLEY"
    },
    {
      "postCode": "2480",
      "suburb": "ROSEBANK"
    },
    {
      "postCode": "2793",
      "suburb": "ROSEBERG"
    },
    {
      "postCode": "2474",
      "suburb": "ROSEBERRY"
    },
    {
      "postCode": "2474",
      "suburb": "ROSEBERRY CREEK"
    },
    {
      "postCode": "1445",
      "suburb": "ROSEBERY"
    },
    {
      "postCode": "2018",
      "suburb": "ROSEBERY"
    },
    {
      "postCode": "2320",
      "suburb": "ROSEBROOK"
    },
    {
      "postCode": "2536",
      "suburb": "ROSEDALE"
    },
    {
      "postCode": "2142",
      "suburb": "ROSEHILL"
    },
    {
      "postCode": "2196",
      "suburb": "ROSELANDS"
    },
    {
      "postCode": "2560",
      "suburb": "ROSEMEADOW"
    },
    {
      "postCode": "2632",
      "suburb": "ROSEMEATH"
    },
    {
      "postCode": "2069",
      "suburb": "ROSEVILLE"
    },
    {
      "postCode": "2069",
      "suburb": "ROSEVILLE CHASE"
    },
    {
      "postCode": "2446",
      "suburb": "ROSEWOOD"
    },
    {
      "postCode": "2652",
      "suburb": "ROSEWOOD"
    },
    {
      "postCode": "2580",
      "suburb": "ROSLYN"
    },
    {
      "postCode": "2439",
      "suburb": "ROSSGLEN"
    },
    {
      "postCode": "2336",
      "suburb": "ROSSGOLE"
    },
    {
      "postCode": "2621",
      "suburb": "ROSSI"
    },
    {
      "postCode": "2557",
      "suburb": "ROSSMORE"
    },
    {
      "postCode": "2320",
      "suburb": "ROTHBURY"
    },
    {
      "postCode": "2675",
      "suburb": "ROTO"
    },
    {
      "postCode": "2336",
      "suburb": "ROUCHEL"
    },
    {
      "postCode": "2336",
      "suburb": "ROUCHEL BROOK"
    },
    {
      "postCode": "2330",
      "suburb": "ROUGHIT"
    },
    {
      "postCode": "2158",
      "suburb": "ROUND CORNER"
    },
    {
      "postCode": "2484",
      "suburb": "ROUND MOUNTAIN"
    },
    {
      "postCode": "2846",
      "suburb": "ROUND SWAMP"
    },
    {
      "postCode": "2477",
      "suburb": "ROUS"
    },
    {
      "postCode": "2477",
      "suburb": "ROUS MILL"
    },
    {
      "postCode": "2155",
      "suburb": "ROUSE HILL"
    },
    {
      "postCode": "2650",
      "suburb": "ROWAN"
    },
    {
      "postCode": "2387",
      "suburb": "ROWENA"
    },
    {
      "postCode": "2484",
      "suburb": "ROWLANDS CREEK"
    },
    {
      "postCode": "1225",
      "suburb": "ROYAL EXCHANGE"
    },
    {
      "postCode": "2065",
      "suburb": "ROYAL NORTH SHORE HOSPITAL"
    },
    {
      "postCode": "2620",
      "suburb": "ROYALLA"
    },
    {
      "postCode": "2039",
      "suburb": "ROZELLE"
    },
    {
      "postCode": "4380",
      "suburb": "RUBY CREEK"
    },
    {
      "postCode": "2648",
      "suburb": "RUFUS"
    },
    {
      "postCode": "2583",
      "suburb": "RUGBY"
    },
    {
      "postCode": "2474",
      "suburb": "RUKENVALE"
    },
    {
      "postCode": "2580",
      "suburb": "RUN-O-WATERS"
    },
    {
      "postCode": "2850",
      "suburb": "RUNNING STREAM"
    },
    {
      "postCode": "2536",
      "suburb": "RUNNYFORD"
    },
    {
      "postCode": "2560",
      "suburb": "RUSE"
    },
    {
      "postCode": "2011",
      "suburb": "RUSHCUTTERS BAY"
    },
    {
      "postCode": "2346",
      "suburb": "RUSHES CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "RUSHFORTH"
    },
    {
      "postCode": "2046",
      "suburb": "RUSSELL LEA"
    },
    {
      "postCode": "2517",
      "suburb": "RUSSELL VALE"
    },
    {
      "postCode": "2320",
      "suburb": "RUTHERFORD"
    },
    {
      "postCode": "2480",
      "suburb": "RUTHVEN"
    },
    {
      "postCode": "2658",
      "suburb": "RYAN"
    },
    {
      "postCode": "2790",
      "suburb": "RYDAL"
    },
    {
      "postCode": "2116",
      "suburb": "RYDALMERE"
    },
    {
      "postCode": "1680",
      "suburb": "RYDE"
    },
    {
      "postCode": "2112",
      "suburb": "RYDE"
    },
    {
      "postCode": "2586",
      "suburb": "RYE PARK"
    },
    {
      "postCode": "2283",
      "suburb": "RYHOPE"
    },
    {
      "postCode": "2849",
      "suburb": "RYLSTONE"
    },
    {
      "postCode": "2756",
      "suburb": "SACKVILLE"
    },
    {
      "postCode": "2756",
      "suburb": "SACKVILLE NORTH"
    },
    {
      "postCode": "2533",
      "suburb": "SADDLEBACK MOUNTAIN"
    },
    {
      "postCode": "2168",
      "suburb": "SADLEIR"
    },
    {
      "postCode": "2456",
      "suburb": "SAFETY BEACH"
    },
    {
      "postCode": "2317",
      "suburb": "SALAMANDER BAY"
    },
    {
      "postCode": "2420",
      "suburb": "SALISBURY"
    },
    {
      "postCode": "2358",
      "suburb": "SALISBURY PLAINS"
    },
    {
      "postCode": "2850",
      "suburb": "SALLYS FLAT"
    },
    {
      "postCode": "2318",
      "suburb": "SALT ASH"
    },
    {
      "postCode": "2430",
      "suburb": "SALTWATER"
    },
    {
      "postCode": "2650",
      "suburb": "SAN ISIDORE"
    },
    {
      "postCode": "2262",
      "suburb": "SAN REMO"
    },
    {
      "postCode": "2446",
      "suburb": "SANCROX"
    },
    {
      "postCode": "2540",
      "suburb": "SANCTUARY POINT"
    },
    {
      "postCode": "2428",
      "suburb": "SANDBAR"
    },
    {
      "postCode": "2304",
      "suburb": "SANDGATE"
    },
    {
      "postCode": "2700",
      "suburb": "SANDIGO"
    },
    {
      "postCode": "2469",
      "suburb": "SANDILANDS"
    },
    {
      "postCode": "2463",
      "suburb": "SANDON"
    },
    {
      "postCode": "2219",
      "suburb": "SANDRINGHAM"
    },
    {
      "postCode": "2456",
      "suburb": "SANDY BEACH"
    },
    {
      "postCode": "2338",
      "suburb": "SANDY CREEK"
    },
    {
      "postCode": "2835",
      "suburb": "SANDY CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "SANDY CROSSING"
    },
    {
      "postCode": "2372",
      "suburb": "SANDY FLAT"
    },
    {
      "postCode": "2729",
      "suburb": "SANDY GULLY"
    },
    {
      "postCode": "2372",
      "suburb": "SANDY HILL"
    },
    {
      "postCode": "2333",
      "suburb": "SANDY HOLLOW"
    },
    {
      "postCode": "2172",
      "suburb": "SANDY POINT"
    },
    {
      "postCode": "2646",
      "suburb": "SANGER"
    },
    {
      "postCode": "2219",
      "suburb": "SANS SOUCI"
    },
    {
      "postCode": "2360",
      "suburb": "SAPPHIRE"
    },
    {
      "postCode": "2450",
      "suburb": "SAPPHIRE BEACH"
    },
    {
      "postCode": "2251",
      "suburb": "SARATOGA"
    },
    {
      "postCode": "2622",
      "suburb": "SASSAFRAS"
    },
    {
      "postCode": "2350",
      "suburb": "SAUMAREZ"
    },
    {
      "postCode": "2350",
      "suburb": "SAUMAREZ PONDS"
    },
    {
      "postCode": "2646",
      "suburb": "SAVERNAKE"
    },
    {
      "postCode": "2474",
      "suburb": "SAWPIT CREEK"
    },
    {
      "postCode": "2452",
      "suburb": "SAWTELL"
    },
    {
      "postCode": "2326",
      "suburb": "SAWYERS GULLY"
    },
    {
      "postCode": "2515",
      "suburb": "SCARBOROUGH"
    },
    {
      "postCode": "2756",
      "suburb": "SCHEYVILLE"
    },
    {
      "postCode": "2762",
      "suburb": "SCHOFIELDS"
    },
    {
      "postCode": "2337",
      "suburb": "SCONE"
    },
    {
      "postCode": "2648",
      "suburb": "SCOTIA"
    },
    {
      "postCode": "2105",
      "suburb": "SCOTLAND ISLAND"
    },
    {
      "postCode": "2338",
      "suburb": "SCOTTS CREEK"
    },
    {
      "postCode": "2330",
      "suburb": "SCOTTS FLAT"
    },
    {
      "postCode": "2447",
      "suburb": "SCOTTS HEAD"
    },
    {
      "postCode": "2092",
      "suburb": "SEAFORTH"
    },
    {
      "postCode": "2324",
      "suburb": "SEAHAM"
    },
    {
      "postCode": "2286",
      "suburb": "SEAHAMPTON"
    },
    {
      "postCode": "2423",
      "suburb": "SEAL ROCKS"
    },
    {
      "postCode": "2666",
      "suburb": "SEBASTOPOL"
    },
    {
      "postCode": "2330",
      "suburb": "SEDGEFIELD"
    },
    {
      "postCode": "2460",
      "suburb": "SEELANDS"
    },
    {
      "postCode": "2162",
      "suburb": "SEFTON"
    },
    {
      "postCode": "2337",
      "suburb": "SEGENHOE"
    },
    {
      "postCode": "2444",
      "suburb": "SETTLEMENT CITY"
    },
    {
      "postCode": "1730",
      "suburb": "SEVEN HILLS"
    },
    {
      "postCode": "2147",
      "suburb": "SEVEN HILLS"
    },
    {
      "postCode": "2147",
      "suburb": "SEVEN HILLS WEST"
    },
    {
      "postCode": "2440",
      "suburb": "SEVEN OAKS"
    },
    {
      "postCode": "2470",
      "suburb": "SEXTONVILLE"
    },
    {
      "postCode": "2800",
      "suburb": "SHADFORTH"
    },
    {
      "postCode": "2428",
      "suburb": "SHALLOW BAY"
    },
    {
      "postCode": "2770",
      "suburb": "SHALVEY"
    },
    {
      "postCode": "2747",
      "suburb": "SHANE PARK"
    },
    {
      "postCode": "2747",
      "suburb": "SHANES PARK"
    },
    {
      "postCode": "2470",
      "suburb": "SHANNON BROOK"
    },
    {
      "postCode": "2370",
      "suburb": "SHANNON VALE"
    },
    {
      "postCode": "2460",
      "suburb": "SHANNONDALE"
    },
    {
      "postCode": "2630",
      "suburb": "SHANNONS FLAT"
    },
    {
      "postCode": "2463",
      "suburb": "SHARK CREEK"
    },
    {
      "postCode": "2729",
      "suburb": "SHARPS CREEK"
    },
    {
      "postCode": "2790",
      "suburb": "SHEEDYS GULLY"
    },
    {
      "postCode": "2529",
      "suburb": "SHELL COVE"
    },
    {
      "postCode": "2529",
      "suburb": "SHELLHARBOUR"
    },
    {
      "postCode": "2529",
      "suburb": "SHELLHARBOUR CITY CENTRE"
    },
    {
      "postCode": "2261",
      "suburb": "SHELLY BEACH"
    },
    {
      "postCode": "2440",
      "suburb": "SHERWOOD"
    },
    {
      "postCode": "2450",
      "suburb": "SHERWOOD"
    },
    {
      "postCode": "2474",
      "suburb": "SHERWOOD"
    },
    {
      "postCode": "2315",
      "suburb": "SHOAL BAY"
    },
    {
      "postCode": "2535",
      "suburb": "SHOALHAVEN HEADS"
    },
    {
      "postCode": "2787",
      "suburb": "SHOOTERS HILL"
    },
    {
      "postCode": "2307",
      "suburb": "SHORTLAND"
    },
    {
      "postCode": "2372",
      "suburb": "SILENT GROVE"
    },
    {
      "postCode": "2752",
      "suburb": "SILVERDALE"
    },
    {
      "postCode": "2880",
      "suburb": "SILVERTON"
    },
    {
      "postCode": "2128",
      "suburb": "SILVERWATER"
    },
    {
      "postCode": "2264",
      "suburb": "SILVERWATER"
    },
    {
      "postCode": "2469",
      "suburb": "SIMPKINS CREEK"
    },
    {
      "postCode": "2330",
      "suburb": "SINGLETON"
    },
    {
      "postCode": "2330",
      "suburb": "SINGLETON DC"
    },
    {
      "postCode": "2330",
      "suburb": "SINGLETON HEIGHTS"
    },
    {
      "postCode": "2331",
      "suburb": "SINGLETON MILITARY AREA"
    },
    {
      "postCode": "2331",
      "suburb": "SINGLETON MILPO"
    },
    {
      "postCode": "2775",
      "suburb": "SINGLETONS MILL"
    },
    {
      "postCode": "2469",
      "suburb": "SIX MILE SWAMP"
    },
    {
      "postCode": "2478",
      "suburb": "SKENNARS HEAD"
    },
    {
      "postCode": "2440",
      "suburb": "SKILLION FLAT"
    },
    {
      "postCode": "2481",
      "suburb": "SKINNERS SHOOT"
    },
    {
      "postCode": "2483",
      "suburb": "SLEEPY HOLLOW"
    },
    {
      "postCode": "2567",
      "suburb": "SMEATON GRANGE"
    },
    {
      "postCode": "2624",
      "suburb": "SMIGGIN HOLES"
    },
    {
      "postCode": "2164",
      "suburb": "SMITHFIELD"
    },
    {
      "postCode": "2164",
      "suburb": "SMITHFIELD WEST"
    },
    {
      "postCode": "2460",
      "suburb": "SMITHS CREEK"
    },
    {
      "postCode": "2474",
      "suburb": "SMITHS CREEK"
    },
    {
      "postCode": "2484",
      "suburb": "SMITHS CREEK"
    },
    {
      "postCode": "2428",
      "suburb": "SMITHS LAKE"
    },
    {
      "postCode": "2440",
      "suburb": "SMITHTOWN"
    },
    {
      "postCode": "2824",
      "suburb": "SNAKES PLAIN"
    },
    {
      "postCode": "2622",
      "suburb": "SNOWBALL"
    },
    {
      "postCode": "2628",
      "suburb": "SNOWY PLAIN"
    },
    {
      "postCode": "2790",
      "suburb": "SODWALLS"
    },
    {
      "postCode": "2795",
      "suburb": "SOFALA"
    },
    {
      "postCode": "2317",
      "suburb": "SOLDIERS POINT"
    },
    {
      "postCode": "2250",
      "suburb": "SOMERSBY"
    },
    {
      "postCode": "2340",
      "suburb": "SOMERTON"
    },
    {
      "postCode": "2640",
      "suburb": "SOUTH ALBURY"
    },
    {
      "postCode": "2449",
      "suburb": "SOUTH ARM"
    },
    {
      "postCode": "2460",
      "suburb": "SOUTH ARM"
    },
    {
      "postCode": "2478",
      "suburb": "SOUTH BALLINA"
    },
    {
      "postCode": "2795",
      "suburb": "SOUTH BATHURST"
    },
    {
      "postCode": "2790",
      "suburb": "SOUTH BOWENFELS"
    },
    {
      "postCode": "2880",
      "suburb": "SOUTH BROKEN HILL"
    },
    {
      "postCode": "2034",
      "suburb": "SOUTH COOGEE"
    },
    {
      "postCode": "2536",
      "suburb": "SOUTH DURRAS"
    },
    {
      "postCode": "2473",
      "suburb": "SOUTH EVANS HEAD"
    },
    {
      "postCode": "2483",
      "suburb": "SOUTH GOLDEN BEACH"
    },
    {
      "postCode": "2460",
      "suburb": "SOUTH GRAFTON"
    },
    {
      "postCode": "2142",
      "suburb": "SOUTH GRANVILLE"
    },
    {
      "postCode": "2722",
      "suburb": "SOUTH GUNDAGAI"
    },
    {
      "postCode": "2480",
      "suburb": "SOUTH GUNDURIMBA"
    },
    {
      "postCode": "2365",
      "suburb": "SOUTH GUYRA"
    },
    {
      "postCode": "2221",
      "suburb": "SOUTH HURSTVILLE"
    },
    {
      "postCode": "2440",
      "suburb": "SOUTH KEMPSEY"
    },
    {
      "postCode": "2480",
      "suburb": "SOUTH LISMORE"
    },
    {
      "postCode": "2790",
      "suburb": "SOUTH LITTLETON"
    },
    {
      "postCode": "2320",
      "suburb": "SOUTH MAITLAND"
    },
    {
      "postCode": "2756",
      "suburb": "SOUTH MAROOTA"
    },
    {
      "postCode": "2484",
      "suburb": "SOUTH MURWILLUMBAH"
    },
    {
      "postCode": "2541",
      "suburb": "SOUTH NOWRA"
    },
    {
      "postCode": "2549",
      "suburb": "SOUTH PAMBULA"
    },
    {
      "postCode": "2750",
      "suburb": "SOUTH PENRITH"
    },
    {
      "postCode": "2340",
      "suburb": "SOUTH TAMWORTH"
    },
    {
      "postCode": "2074",
      "suburb": "SOUTH TURRAMURRA"
    },
    {
      "postCode": "2145",
      "suburb": "SOUTH WENTWORTHVILLE"
    },
    {
      "postCode": "2431",
      "suburb": "SOUTH WEST ROCKS"
    },
    {
      "postCode": "2756",
      "suburb": "SOUTH WINDSOR"
    },
    {
      "postCode": "2550",
      "suburb": "SOUTH WOLUMLA"
    },
    {
      "postCode": "2460",
      "suburb": "SOUTHAMPTON"
    },
    {
      "postCode": "2460",
      "suburb": "SOUTHGATE"
    },
    {
      "postCode": "2284",
      "suburb": "SPEERS POINT"
    },
    {
      "postCode": "2735",
      "suburb": "SPEEWA"
    },
    {
      "postCode": "2775",
      "suburb": "SPENCER"
    },
    {
      "postCode": "2820",
      "suburb": "SPICERS CREEK"
    },
    {
      "postCode": "2454",
      "suburb": "SPICKETTS CREEK"
    },
    {
      "postCode": "2088",
      "suburb": "SPIT JUNCTION"
    },
    {
      "postCode": "2640",
      "suburb": "SPLITTERS CREEK"
    },
    {
      "postCode": "2800",
      "suburb": "SPRING CREEK"
    },
    {
      "postCode": "2570",
      "suburb": "SPRING FARM"
    },
    {
      "postCode": "2850",
      "suburb": "SPRING FLAT"
    },
    {
      "postCode": "2470",
      "suburb": "SPRING GROVE"
    },
    {
      "postCode": "2500",
      "suburb": "SPRING HILL"
    },
    {
      "postCode": "2800",
      "suburb": "SPRING HILL"
    },
    {
      "postCode": "2370",
      "suburb": "SPRING MOUNTAIN"
    },
    {
      "postCode": "2388",
      "suburb": "SPRING PLAINS"
    },
    {
      "postCode": "2343",
      "suburb": "SPRING RIDGE"
    },
    {
      "postCode": "2798",
      "suburb": "SPRING TERRACE"
    },
    {
      "postCode": "2666",
      "suburb": "SPRINGDALE"
    },
    {
      "postCode": "2641",
      "suburb": "SPRINGDALE HEIGHTS"
    },
    {
      "postCode": "2250",
      "suburb": "SPRINGFIELD"
    },
    {
      "postCode": "2630",
      "suburb": "SPRINGFIELD"
    },
    {
      "postCode": "2618",
      "suburb": "SPRINGRANGE"
    },
    {
      "postCode": "2800",
      "suburb": "SPRINGSIDE"
    },
    {
      "postCode": "2650",
      "suburb": "SPRINGVALE"
    },
    {
      "postCode": "2790",
      "suburb": "SPRINGVALE"
    },
    {
      "postCode": "2777",
      "suburb": "SPRINGWOOD"
    },
    {
      "postCode": "2775",
      "suburb": "ST ALBANS"
    },
    {
      "postCode": "2566",
      "suburb": "ST ANDREWS"
    },
    {
      "postCode": "2330",
      "suburb": "ST CLAIR"
    },
    {
      "postCode": "2759",
      "suburb": "ST CLAIR"
    },
    {
      "postCode": "2850",
      "suburb": "ST FILLANS"
    },
    {
      "postCode": "2622",
      "suburb": "ST GEORGE"
    },
    {
      "postCode": "2540",
      "suburb": "ST GEORGES BASIN"
    },
    {
      "postCode": "2560",
      "suburb": "ST HELENS PARK"
    },
    {
      "postCode": "2257",
      "suburb": "ST HUBERTS ISLAND"
    },
    {
      "postCode": "2075",
      "suburb": "ST IVES"
    },
    {
      "postCode": "2075",
      "suburb": "ST IVES CHASE"
    },
    {
      "postCode": "2176",
      "suburb": "ST JOHNS PARK"
    },
    {
      "postCode": "1590",
      "suburb": "ST LEONARDS"
    },
    {
      "postCode": "2065",
      "suburb": "ST LEONARDS"
    },
    {
      "postCode": "1790",
      "suburb": "ST MARYS"
    },
    {
      "postCode": "2760",
      "suburb": "ST MARYS"
    },
    {
      "postCode": "2760",
      "suburb": "ST MARYS EAST"
    },
    {
      "postCode": "2760",
      "suburb": "ST MARYS SOUTH"
    },
    {
      "postCode": "2031",
      "suburb": "ST PAULS"
    },
    {
      "postCode": "2044",
      "suburb": "ST PETERS"
    },
    {
      "postCode": "2044",
      "suburb": "ST PETERS DC"
    },
    {
      "postCode": "2360",
      "suburb": "STANBOROUGH"
    },
    {
      "postCode": "2705",
      "suburb": "STANBRIDGE"
    },
    {
      "postCode": "2327",
      "suburb": "STANFORD MERTHYR"
    },
    {
      "postCode": "2335",
      "suburb": "STANHOPE"
    },
    {
      "postCode": "2768",
      "suburb": "STANHOPE GARDENS"
    },
    {
      "postCode": "2048",
      "suburb": "STANMORE"
    },
    {
      "postCode": "2369",
      "suburb": "STANNIFER"
    },
    {
      "postCode": "2371",
      "suburb": "STANNUM"
    },
    {
      "postCode": "2508",
      "suburb": "STANWELL PARK"
    },
    {
      "postCode": "2508",
      "suburb": "STANWELL TOPS"
    },
    {
      "postCode": "2790",
      "suburb": "STATE MINE GULLY"
    },
    {
      "postCode": "2710",
      "suburb": "STEAM PLAINS"
    },
    {
      "postCode": "2631",
      "suburb": "STEEPLE FLAT"
    },
    {
      "postCode": "2337",
      "suburb": "STEWARTS BROOK"
    },
    {
      "postCode": "2795",
      "suburb": "STEWARTS MOUNT"
    },
    {
      "postCode": "2443",
      "suburb": "STEWARTS RIVER"
    },
    {
      "postCode": "2725",
      "suburb": "STOCKINBINGAL"
    },
    {
      "postCode": "2322",
      "suburb": "STOCKRINGTON"
    },
    {
      "postCode": "2295",
      "suburb": "STOCKTON"
    },
    {
      "postCode": "2460",
      "suburb": "STOCKYARD CREEK"
    },
    {
      "postCode": "2484",
      "suburb": "STOKERS SIDING"
    },
    {
      "postCode": "2370",
      "suburb": "STONEHENGE"
    },
    {
      "postCode": "2580",
      "suburb": "STONEQUARRY"
    },
    {
      "postCode": "2480",
      "suburb": "STONY CHUTE"
    },
    {
      "postCode": "2550",
      "suburb": "STONY CREEK"
    },
    {
      "postCode": "2850",
      "suburb": "STONY CREEK"
    },
    {
      "postCode": "2734",
      "suburb": "STONY CROSSING"
    },
    {
      "postCode": "2487",
      "suburb": "STOTTS CREEK"
    },
    {
      "postCode": "2422",
      "suburb": "STRATFORD"
    },
    {
      "postCode": "2429",
      "suburb": "STRATHCEDAR"
    },
    {
      "postCode": "2470",
      "suburb": "STRATHEDEN"
    },
    {
      "postCode": "2135",
      "suburb": "STRATHFIELD"
    },
    {
      "postCode": "2136",
      "suburb": "STRATHFIELD SOUTH"
    },
    {
      "postCode": "2012",
      "suburb": "STRAWBERRY HILLS"
    },
    {
      "postCode": "2526",
      "suburb": "STREAM HILL"
    },
    {
      "postCode": "2425",
      "suburb": "STROUD"
    },
    {
      "postCode": "2420",
      "suburb": "STROUD HILL"
    },
    {
      "postCode": "2415",
      "suburb": "STROUD ROAD"
    },
    {
      "postCode": "2820",
      "suburb": "STUART TOWN"
    },
    {
      "postCode": "2441",
      "suburb": "STUARTS POINT"
    },
    {
      "postCode": "2852",
      "suburb": "STUBBO"
    },
    {
      "postCode": "2710",
      "suburb": "STUD PARK"
    },
    {
      "postCode": "2481",
      "suburb": "SUFFOLK PARK"
    },
    {
      "postCode": "2420",
      "suburb": "SUGARLOAF"
    },
    {
      "postCode": "2130",
      "suburb": "SUMMER HILL"
    },
    {
      "postCode": "2421",
      "suburb": "SUMMER HILL"
    },
    {
      "postCode": "2800",
      "suburb": "SUMMER HILL CREEK"
    },
    {
      "postCode": "2440",
      "suburb": "SUMMER ISLAND"
    },
    {
      "postCode": "2259",
      "suburb": "SUMMERLAND POINT"
    },
    {
      "postCode": "2777",
      "suburb": "SUN VALLEY"
    },
    {
      "postCode": "2795",
      "suburb": "SUNNY CORNER"
    },
    {
      "postCode": "2879",
      "suburb": "SUNSET STRIP"
    },
    {
      "postCode": "2264",
      "suburb": "SUNSHINE"
    },
    {
      "postCode": "2536",
      "suburb": "SUNSHINE BAY"
    },
    {
      "postCode": "2820",
      "suburb": "SUNTOP"
    },
    {
      "postCode": "2536",
      "suburb": "SURF BEACH"
    },
    {
      "postCode": "2536",
      "suburb": "SURFSIDE"
    },
    {
      "postCode": "2010",
      "suburb": "SURRY HILLS"
    },
    {
      "postCode": "2540",
      "suburb": "SUSSEX INLET"
    },
    {
      "postCode": "1499",
      "suburb": "SUTHERLAND"
    },
    {
      "postCode": "2232",
      "suburb": "SUTHERLAND"
    },
    {
      "postCode": "2620",
      "suburb": "SUTTON"
    },
    {
      "postCode": "2577",
      "suburb": "SUTTON FOREST"
    },
    {
      "postCode": "2324",
      "suburb": "SWAN BAY"
    },
    {
      "postCode": "2471",
      "suburb": "SWAN BAY"
    },
    {
      "postCode": "2462",
      "suburb": "SWAN CREEK"
    },
    {
      "postCode": "2370",
      "suburb": "SWAN VALE"
    },
    {
      "postCode": "2360",
      "suburb": "SWANBROOK"
    },
    {
      "postCode": "2540",
      "suburb": "SWANHAVEN"
    },
    {
      "postCode": "2439",
      "suburb": "SWANS CROSSING"
    },
    {
      "postCode": "2281",
      "suburb": "SWANSEA"
    },
    {
      "postCode": "2281",
      "suburb": "SWANSEA HEADS"
    },
    {
      "postCode": "2325",
      "suburb": "SWEETMANS CREEK"
    },
    {
      "postCode": "2044",
      "suburb": "SYDENHAM"
    },
    {
      "postCode": "1100",
      "suburb": "SYDNEY"
    },
    {
      "postCode": "1291",
      "suburb": "SYDNEY"
    },
    {
      "postCode": "2000",
      "suburb": "SYDNEY"
    },
    {
      "postCode": "2001",
      "suburb": "SYDNEY"
    },
    {
      "postCode": "2020",
      "suburb": "SYDNEY DOMESTIC AIRPORT"
    },
    {
      "postCode": "2020",
      "suburb": "SYDNEY INTERNATIONAL AIRPORT"
    },
    {
      "postCode": "2129",
      "suburb": "SYDNEY MARKETS"
    },
    {
      "postCode": "2127",
      "suburb": "SYDNEY OLYMPIC PARK"
    },
    {
      "postCode": "1231",
      "suburb": "SYDNEY SOUTH"
    },
    {
      "postCode": "1235",
      "suburb": "SYDNEY SOUTH"
    },
    {
      "postCode": "2000",
      "suburb": "SYDNEY SOUTH"
    },
    {
      "postCode": "2224",
      "suburb": "SYLVANIA"
    },
    {
      "postCode": "2224",
      "suburb": "SYLVANIA SOUTHGATE"
    },
    {
      "postCode": "2224",
      "suburb": "SYLVANIA WATERS"
    },
    {
      "postCode": "2420",
      "suburb": "TABBIL CREEK"
    },
    {
      "postCode": "2472",
      "suburb": "TABBIMOBLE"
    },
    {
      "postCode": "2652",
      "suburb": "TABBITA"
    },
    {
      "postCode": "2640",
      "suburb": "TABLE TOP"
    },
    {
      "postCode": "2469",
      "suburb": "TABULAM"
    },
    {
      "postCode": "2259",
      "suburb": "TACOMA"
    },
    {
      "postCode": "2259",
      "suburb": "TACOMA SOUTH"
    },
    {
      "postCode": "2324",
      "suburb": "TAHLEE"
    },
    {
      "postCode": "2573",
      "suburb": "TAHMOOR"
    },
    {
      "postCode": "2447",
      "suburb": "TALARM"
    },
    {
      "postCode": "2839",
      "suburb": "TALAWANTA"
    },
    {
      "postCode": "2720",
      "suburb": "TALBINGO"
    },
    {
      "postCode": "2852",
      "suburb": "TALLAWANG"
    },
    {
      "postCode": "2762",
      "suburb": "TALLAWONG"
    },
    {
      "postCode": "2669",
      "suburb": "TALLIMBA"
    },
    {
      "postCode": "2579",
      "suburb": "TALLONG"
    },
    {
      "postCode": "2540",
      "suburb": "TALLOWAL"
    },
    {
      "postCode": "2453",
      "suburb": "TALLOWWOOD RIDGE"
    },
    {
      "postCode": "2798",
      "suburb": "TALLWOOD"
    },
    {
      "postCode": "2430",
      "suburb": "TALLWOODS VILLAGE"
    },
    {
      "postCode": "2640",
      "suburb": "TALMALMO"
    },
    {
      "postCode": "2481",
      "suburb": "TALOFA"
    },
    {
      "postCode": "2463",
      "suburb": "TALOUMBI"
    },
    {
      "postCode": "2026",
      "suburb": "TAMARAMA"
    },
    {
      "postCode": "2441",
      "suburb": "TAMBAN"
    },
    {
      "postCode": "2381",
      "suburb": "TAMBAR SPRINGS"
    },
    {
      "postCode": "2850",
      "suburb": "TAMBAROORA"
    },
    {
      "postCode": "2340",
      "suburb": "TAMINDA"
    },
    {
      "postCode": "2340",
      "suburb": "TAMWORTH"
    },
    {
      "postCode": "2488",
      "suburb": "TANGLEWOOD"
    },
    {
      "postCode": "2319",
      "suburb": "TANILBA BAY"
    },
    {
      "postCode": "2550",
      "suburb": "TANJA"
    },
    {
      "postCode": "2795",
      "suburb": "TANNAS MOUNT"
    },
    {
      "postCode": "2629",
      "suburb": "TANTANGARA"
    },
    {
      "postCode": "2550",
      "suburb": "TANTAWANGALO"
    },
    {
      "postCode": "2731",
      "suburb": "TANTONAN"
    },
    {
      "postCode": "2540",
      "suburb": "TAPITALLEE"
    },
    {
      "postCode": "2665",
      "suburb": "TARA"
    },
    {
      "postCode": "2653",
      "suburb": "TARADALE"
    },
    {
      "postCode": "2580",
      "suburb": "TARAGO"
    },
    {
      "postCode": "2580",
      "suburb": "TARALGA"
    },
    {
      "postCode": "2787",
      "suburb": "TARANA"
    },
    {
      "postCode": "2372",
      "suburb": "TARBAN"
    },
    {
      "postCode": "2428",
      "suburb": "TARBUCK BAY"
    },
    {
      "postCode": "2652",
      "suburb": "TARCUTTA"
    },
    {
      "postCode": "2430",
      "suburb": "TAREE"
    },
    {
      "postCode": "2430",
      "suburb": "TAREE DC"
    },
    {
      "postCode": "2430",
      "suburb": "TAREE SOUTH"
    },
    {
      "postCode": "2229",
      "suburb": "TAREN POINT"
    },
    {
      "postCode": "2580",
      "suburb": "TARLO"
    },
    {
      "postCode": "2550",
      "suburb": "TARRAGANDA"
    },
    {
      "postCode": "2518",
      "suburb": "TARRAWANNA"
    },
    {
      "postCode": "2390",
      "suburb": "TARRIARO"
    },
    {
      "postCode": "2322",
      "suburb": "TARRO"
    },
    {
      "postCode": "2250",
      "suburb": "TASCOTT"
    },
    {
      "postCode": "2471",
      "suburb": "TATHAM"
    },
    {
      "postCode": "2550",
      "suburb": "TATHRA"
    },
    {
      "postCode": "2650",
      "suburb": "TATTON"
    },
    {
      "postCode": "2447",
      "suburb": "TAYLORS ARM"
    },
    {
      "postCode": "2316",
      "suburb": "TAYLORS BEACH"
    },
    {
      "postCode": "2586",
      "suburb": "TAYLORS FLAT"
    },
    {
      "postCode": "2324",
      "suburb": "TEA GARDENS"
    },
    {
      "postCode": "2320",
      "suburb": "TELARAH"
    },
    {
      "postCode": "2441",
      "suburb": "TELEGRAPH POINT"
    },
    {
      "postCode": "2117",
      "suburb": "TELOPEA"
    },
    {
      "postCode": "2440",
      "suburb": "TEMAGOG"
    },
    {
      "postCode": "2666",
      "suburb": "TEMORA"
    },
    {
      "postCode": "2044",
      "suburb": "TEMPE"
    },
    {
      "postCode": "2250",
      "suburb": "TEN MILE HOLLOW"
    },
    {
      "postCode": "2323",
      "suburb": "TENAMBIT"
    },
    {
      "postCode": "2824",
      "suburb": "TENANDRA"
    },
    {
      "postCode": "2754",
      "suburb": "TENNYSON"
    },
    {
      "postCode": "2111",
      "suburb": "TENNYSON POINT"
    },
    {
      "postCode": "2365",
      "suburb": "TENTERDEN"
    },
    {
      "postCode": "2372",
      "suburb": "TENTERFIELD"
    },
    {
      "postCode": "2284",
      "suburb": "TERALBA"
    },
    {
      "postCode": "2480",
      "suburb": "TERANIA CREEK"
    },
    {
      "postCode": "2540",
      "suburb": "TERARA"
    },
    {
      "postCode": "2829",
      "suburb": "TERIDGERIE"
    },
    {
      "postCode": "2539",
      "suburb": "TERMEIL"
    },
    {
      "postCode": "2818",
      "suburb": "TERRABELLA"
    },
    {
      "postCode": "2474",
      "suburb": "TERRACE CREEK"
    },
    {
      "postCode": "2484",
      "suburb": "TERRAGON"
    },
    {
      "postCode": "2830",
      "suburb": "TERRAMUNGAMINE"
    },
    {
      "postCode": "2486",
      "suburb": "TERRANORA"
    },
    {
      "postCode": "2422",
      "suburb": "TERREEL"
    },
    {
      "postCode": "2084",
      "suburb": "TERREY HILLS"
    },
    {
      "postCode": "2260",
      "suburb": "TERRIGAL"
    },
    {
      "postCode": "2400",
      "suburb": "TERRY HIE HIE"
    },
    {
      "postCode": "2478",
      "suburb": "TEVEN"
    },
    {
      "postCode": "2449",
      "suburb": "TEWINGA"
    },
    {
      "postCode": "4385",
      "suburb": "TEXAS"
    },
    {
      "postCode": "2350",
      "suburb": "THALGARRAH"
    },
    {
      "postCode": "2680",
      "suburb": "THARBOGANG"
    },
    {
      "postCode": "2620",
      "suburb": "THE ANGLE"
    },
    {
      "postCode": "2365",
      "suburb": "THE BASIN"
    },
    {
      "postCode": "2429",
      "suburb": "THE BIGHT"
    },
    {
      "postCode": "2425",
      "suburb": "THE BRANCH"
    },
    {
      "postCode": "2630",
      "suburb": "THE BROTHERS"
    },
    {
      "postCode": "2480",
      "suburb": "THE CHANNON"
    },
    {
      "postCode": "2758",
      "suburb": "THE DEVILS WILDERNESS"
    },
    {
      "postCode": "2261",
      "suburb": "THE ENTRANCE"
    },
    {
      "postCode": "2261",
      "suburb": "THE ENTRANCE NORTH"
    },
    {
      "postCode": "2466",
      "suburb": "THE FRESHWATER"
    },
    {
      "postCode": "2472",
      "suburb": "THE GAP"
    },
    {
      "postCode": "2650",
      "suburb": "THE GAP"
    },
    {
      "postCode": "2476",
      "suburb": "THE GLEN"
    },
    {
      "postCode": "2365",
      "suburb": "THE GULF"
    },
    {
      "postCode": "2444",
      "suburb": "THE HATCH"
    },
    {
      "postCode": "2300",
      "suburb": "THE HILL"
    },
    {
      "postCode": "2291",
      "suburb": "THE JUNCTION"
    },
    {
      "postCode": "2795",
      "suburb": "THE LAGOON"
    },
    {
      "postCode": "2831",
      "suburb": "THE MARRA"
    },
    {
      "postCode": "2787",
      "suburb": "THE MEADOWS"
    },
    {
      "postCode": "2570",
      "suburb": "THE OAKS"
    },
    {
      "postCode": "2388",
      "suburb": "THE PILLIGA"
    },
    {
      "postCode": "2460",
      "suburb": "THE PINNACLES"
    },
    {
      "postCode": "2483",
      "suburb": "THE POCKET"
    },
    {
      "postCode": "2769",
      "suburb": "THE PONDS"
    },
    {
      "postCode": "2620",
      "suburb": "THE RIDGEWAY"
    },
    {
      "postCode": "2474",
      "suburb": "THE RISK"
    },
    {
      "postCode": "2655",
      "suburb": "THE ROCK"
    },
    {
      "postCode": "2000",
      "suburb": "THE ROCKS"
    },
    {
      "postCode": "2795",
      "suburb": "THE ROCKS"
    },
    {
      "postCode": "2463",
      "suburb": "THE SANDON"
    },
    {
      "postCode": "2754",
      "suburb": "THE SLOPES"
    },
    {
      "postCode": "2006",
      "suburb": "THE UNIVERSITY OF SYDNEY"
    },
    {
      "postCode": "2460",
      "suburb": "THE WHITEMAN"
    },
    {
      "postCode": "2469",
      "suburb": "THERESA CREEK"
    },
    {
      "postCode": "2570",
      "suburb": "THERESA PARK"
    },
    {
      "postCode": "2347",
      "suburb": "THIRLDENE"
    },
    {
      "postCode": "2572",
      "suburb": "THIRLMERE"
    },
    {
      "postCode": "2515",
      "suburb": "THIRROUL"
    },
    {
      "postCode": "2454",
      "suburb": "THORA"
    },
    {
      "postCode": "2120",
      "suburb": "THORNLEIGH"
    },
    {
      "postCode": "2322",
      "suburb": "THORNTON"
    },
    {
      "postCode": "2625",
      "suburb": "THREDBO"
    },
    {
      "postCode": "2444",
      "suburb": "THRUMSTER"
    },
    {
      "postCode": "2594",
      "suburb": "THUDDUNGRA"
    },
    {
      "postCode": "2732",
      "suburb": "THULE"
    },
    {
      "postCode": "2447",
      "suburb": "THUMB CREEK"
    },
    {
      "postCode": "2640",
      "suburb": "THURGOONA"
    },
    {
      "postCode": "2731",
      "suburb": "THYRA"
    },
    {
      "postCode": "2622",
      "suburb": "TIANJARA"
    },
    {
      "postCode": "2422",
      "suburb": "TIBBUC"
    },
    {
      "postCode": "2880",
      "suburb": "TIBOOBURRA"
    },
    {
      "postCode": "2870",
      "suburb": "TICHBORNE"
    },
    {
      "postCode": "2850",
      "suburb": "TICHULAR"
    },
    {
      "postCode": "2297",
      "suburb": "TIGHES HILL"
    },
    {
      "postCode": "2546",
      "suburb": "TILBA TILBA"
    },
    {
      "postCode": "2350",
      "suburb": "TILBUSTER"
    },
    {
      "postCode": "2319",
      "suburb": "TILLIGERRY CREEK"
    },
    {
      "postCode": "2840",
      "suburb": "TILPA"
    },
    {
      "postCode": "2372",
      "suburb": "TIMBARRA"
    },
    {
      "postCode": "2551",
      "suburb": "TIMBILLICA"
    },
    {
      "postCode": "2340",
      "suburb": "TIMBUMBURI"
    },
    {
      "postCode": "2338",
      "suburb": "TIMOR"
    },
    {
      "postCode": "2835",
      "suburb": "TINDAREY"
    },
    {
      "postCode": "2620",
      "suburb": "TINDERRY"
    },
    {
      "postCode": "2369",
      "suburb": "TINGHA"
    },
    {
      "postCode": "2290",
      "suburb": "TINGIRA HEIGHTS"
    },
    {
      "postCode": "2430",
      "suburb": "TINONEE"
    },
    {
      "postCode": "2546",
      "suburb": "TINPOT"
    },
    {
      "postCode": "2478",
      "suburb": "TINTENBAR"
    },
    {
      "postCode": "2352",
      "suburb": "TINTINHULL"
    },
    {
      "postCode": "2428",
      "suburb": "TIONA"
    },
    {
      "postCode": "2429",
      "suburb": "TIPPERARY"
    },
    {
      "postCode": "2424",
      "suburb": "TIRI"
    },
    {
      "postCode": "2580",
      "suburb": "TIRRANNAVILLE"
    },
    {
      "postCode": "2422",
      "suburb": "TITAATEE CREEK"
    },
    {
      "postCode": "2421",
      "suburb": "TOCAL"
    },
    {
      "postCode": "2714",
      "suburb": "TOCUMWAL"
    },
    {
      "postCode": "2629",
      "suburb": "TOLBAR"
    },
    {
      "postCode": "2650",
      "suburb": "TOLLAND"
    },
    {
      "postCode": "2622",
      "suburb": "TOLWONG"
    },
    {
      "postCode": "2322",
      "suburb": "TOMAGO"
    },
    {
      "postCode": "2537",
      "suburb": "TOMAKIN"
    },
    {
      "postCode": "2337",
      "suburb": "TOMALLA"
    },
    {
      "postCode": "2633",
      "suburb": "TOMBONG"
    },
    {
      "postCode": "2622",
      "suburb": "TOMBOYE"
    },
    {
      "postCode": "2540",
      "suburb": "TOMERONG"
    },
    {
      "postCode": "2484",
      "suburb": "TOMEWIN"
    },
    {
      "postCode": "2869",
      "suburb": "TOMINGLEY"
    },
    {
      "postCode": "2470",
      "suburb": "TOMKI"
    },
    {
      "postCode": "2446",
      "suburb": "TOMS CREEK"
    },
    {
      "postCode": "2817",
      "suburb": "TONDERBURINE"
    },
    {
      "postCode": "2527",
      "suburb": "TONGARRA"
    },
    {
      "postCode": "2864",
      "suburb": "TOOGONG"
    },
    {
      "postCode": "2736",
      "suburb": "TOOLEYBUC"
    },
    {
      "postCode": "2534",
      "suburb": "TOOLIJOOA"
    },
    {
      "postCode": "2475",
      "suburb": "TOOLOOM"
    },
    {
      "postCode": "2829",
      "suburb": "TOOLOON"
    },
    {
      "postCode": "2642",
      "suburb": "TOOMA"
    },
    {
      "postCode": "2146",
      "suburb": "TOONGABBIE"
    },
    {
      "postCode": "2146",
      "suburb": "TOONGABBIE EAST"
    },
    {
      "postCode": "2830",
      "suburb": "TOONGI"
    },
    {
      "postCode": "2474",
      "suburb": "TOONUMBAR"
    },
    {
      "postCode": "2734",
      "suburb": "TOORANIE"
    },
    {
      "postCode": "2817",
      "suburb": "TOORAWEENAH"
    },
    {
      "postCode": "2452",
      "suburb": "TOORMINA"
    },
    {
      "postCode": "2440",
      "suburb": "TOOROOKA"
    },
    {
      "postCode": "2550",
      "suburb": "TOOTHDALE"
    },
    {
      "postCode": "2655",
      "suburb": "TOOTOOL"
    },
    {
      "postCode": "2261",
      "suburb": "TOOWOON BAY"
    },
    {
      "postCode": "2423",
      "suburb": "TOPI TOPI"
    },
    {
      "postCode": "2283",
      "suburb": "TORONTO"
    },
    {
      "postCode": "2371",
      "suburb": "TORRINGTON"
    },
    {
      "postCode": "2358",
      "suburb": "TORRYBURN"
    },
    {
      "postCode": "2421",
      "suburb": "TORRYBURN"
    },
    {
      "postCode": "2850",
      "suburb": "TOTNES VALLEY"
    },
    {
      "postCode": "2873",
      "suburb": "TOTTENHAM"
    },
    {
      "postCode": "2622",
      "suburb": "TOUGA"
    },
    {
      "postCode": "2263",
      "suburb": "TOUKLEY"
    },
    {
      "postCode": "2460",
      "suburb": "TOWALLUM"
    },
    {
      "postCode": "2550",
      "suburb": "TOWAMBA"
    },
    {
      "postCode": "2463",
      "suburb": "TOWNSEND"
    },
    {
      "postCode": "2518",
      "suburb": "TOWRADGI"
    },
    {
      "postCode": "2580",
      "suburb": "TOWRANG"
    },
    {
      "postCode": "2620",
      "suburb": "TRALEE"
    },
    {
      "postCode": "2823",
      "suburb": "TRANGIE"
    },
    {
      "postCode": "2480",
      "suburb": "TREGEAGLE"
    },
    {
      "postCode": "2770",
      "suburb": "TREGEAR"
    },
    {
      "postCode": "2460",
      "suburb": "TRENAYR"
    },
    {
      "postCode": "2738",
      "suburb": "TRENTHAM CLIFFS"
    },
    {
      "postCode": "2869",
      "suburb": "TREWILGA"
    },
    {
      "postCode": "2850",
      "suburb": "TRIAMBLE"
    },
    {
      "postCode": "2795",
      "suburb": "TRIANGLE FLAT"
    },
    {
      "postCode": "2875",
      "suburb": "TRUNDLE"
    },
    {
      "postCode": "2666",
      "suburb": "TRUNGLEY HALL"
    },
    {
      "postCode": "2795",
      "suburb": "TRUNKEY CREEK"
    },
    {
      "postCode": "2472",
      "suburb": "TRUSTUMS HILL"
    },
    {
      "postCode": "2365",
      "suburb": "TUBBAMURRA"
    },
    {
      "postCode": "2594",
      "suburb": "TUBBUL"
    },
    {
      "postCode": "2462",
      "suburb": "TUCABIA"
    },
    {
      "postCode": "2480",
      "suburb": "TUCKI TUCKI"
    },
    {
      "postCode": "2477",
      "suburb": "TUCKOMBIL"
    },
    {
      "postCode": "2480",
      "suburb": "TUCKURIMBA"
    },
    {
      "postCode": "2583",
      "suburb": "TUENA"
    },
    {
      "postCode": "2259",
      "suburb": "TUGGERAH"
    },
    {
      "postCode": "2259",
      "suburb": "TUGGERAWONG"
    },
    {
      "postCode": "2422",
      "suburb": "TUGRABAKH"
    },
    {
      "postCode": "2732",
      "suburb": "TULLAKOOL"
    },
    {
      "postCode": "2874",
      "suburb": "TULLAMORE"
    },
    {
      "postCode": "2540",
      "suburb": "TULLARWALLA"
    },
    {
      "postCode": "2480",
      "suburb": "TULLERA"
    },
    {
      "postCode": "2669",
      "suburb": "TULLIBIGEAL"
    },
    {
      "postCode": "2527",
      "suburb": "TULLIMBAR"
    },
    {
      "postCode": "2400",
      "suburb": "TULLOONA"
    },
    {
      "postCode": "2463",
      "suburb": "TULLYMORGAN"
    },
    {
      "postCode": "2653",
      "suburb": "TUMBARUMBA"
    },
    {
      "postCode": "2261",
      "suburb": "TUMBI UMBI"
    },
    {
      "postCode": "2729",
      "suburb": "TUMBLONG"
    },
    {
      "postCode": "2490",
      "suburb": "TUMBULGUM"
    },
    {
      "postCode": "2720",
      "suburb": "TUMORRAMA"
    },
    {
      "postCode": "2720",
      "suburb": "TUMUT"
    },
    {
      "postCode": "2720",
      "suburb": "TUMUT PLAINS"
    },
    {
      "postCode": "2480",
      "suburb": "TUNCESTER"
    },
    {
      "postCode": "2428",
      "suburb": "TUNCURRY"
    },
    {
      "postCode": "2469",
      "suburb": "TUNGLEBUNG"
    },
    {
      "postCode": "2480",
      "suburb": "TUNTABLE CREEK"
    },
    {
      "postCode": "2714",
      "suburb": "TUPPAL"
    },
    {
      "postCode": "2548",
      "suburb": "TURA BEACH"
    },
    {
      "postCode": "2850",
      "suburb": "TURILL"
    },
    {
      "postCode": "2537",
      "suburb": "TURLINJAH"
    },
    {
      "postCode": "2440",
      "suburb": "TURNERS FLAT"
    },
    {
      "postCode": "2795",
      "suburb": "TURONDALE"
    },
    {
      "postCode": "2630",
      "suburb": "TUROSS"
    },
    {
      "postCode": "2537",
      "suburb": "TUROSS HEAD"
    },
    {
      "postCode": "2074",
      "suburb": "TURRAMURRA"
    },
    {
      "postCode": "2390",
      "suburb": "TURRAWAN"
    },
    {
      "postCode": "2205",
      "suburb": "TURRELLA"
    },
    {
      "postCode": "2650",
      "suburb": "TURVEY PARK"
    },
    {
      "postCode": "2485",
      "suburb": "TWEED HEADS"
    },
    {
      "postCode": "2486",
      "suburb": "TWEED HEADS SOUTH"
    },
    {
      "postCode": "2485",
      "suburb": "TWEED HEADS WEST"
    },
    {
      "postCode": "2850",
      "suburb": "TWELVE MILE"
    },
    {
      "postCode": "2324",
      "suburb": "TWELVE MILE CREEK"
    },
    {
      "postCode": "2540",
      "suburb": "TWELVE MILE PEG"
    },
    {
      "postCode": "2795",
      "suburb": "TWENTY FORESTS"
    },
    {
      "postCode": "2410",
      "suburb": "TWIN RIVERS"
    },
    {
      "postCode": "2852",
      "suburb": "TWO MILE FLAT"
    },
    {
      "postCode": "2481",
      "suburb": "TYAGARAH"
    },
    {
      "postCode": "2484",
      "suburb": "TYALGUM"
    },
    {
      "postCode": "2484",
      "suburb": "TYALGUM CREEK"
    },
    {
      "postCode": "2484",
      "suburb": "TYGALGAH"
    },
    {
      "postCode": "2460",
      "suburb": "TYNDALE"
    },
    {
      "postCode": "2453",
      "suburb": "TYRINGHAM"
    },
    {
      "postCode": "2329",
      "suburb": "UARBRY"
    },
    {
      "postCode": "2484",
      "suburb": "UKI"
    },
    {
      "postCode": "2357",
      "suburb": "ULAMAMBRI"
    },
    {
      "postCode": "2850",
      "suburb": "ULAN"
    },
    {
      "postCode": "2539",
      "suburb": "ULLADULLA"
    },
    {
      "postCode": "2850",
      "suburb": "ULLAMALLA"
    },
    {
      "postCode": "2462",
      "suburb": "ULMARRA"
    },
    {
      "postCode": "2450",
      "suburb": "ULONG"
    },
    {
      "postCode": "2232",
      "suburb": "ULOOLA"
    },
    {
      "postCode": "2007",
      "suburb": "ULTIMO"
    },
    {
      "postCode": "2257",
      "suburb": "UMINA BEACH"
    },
    {
      "postCode": "2526",
      "suburb": "UNANDERRA"
    },
    {
      "postCode": "2420",
      "suburb": "UNDERBANK"
    },
    {
      "postCode": "4380",
      "suburb": "UNDERCLIFFE"
    },
    {
      "postCode": "2669",
      "suburb": "UNGARIE"
    },
    {
      "postCode": "2351",
      "suburb": "UNIVERSITY OF NEW ENGLAND"
    },
    {
      "postCode": "2522",
      "suburb": "UNIVERSITY OF WOLLONGONG"
    },
    {
      "postCode": "1466",
      "suburb": "UNSW SYDNEY"
    },
    {
      "postCode": "2052",
      "suburb": "UNSW SYDNEY"
    },
    {
      "postCode": "2474",
      "suburb": "UNUMGAR"
    },
    {
      "postCode": "2311",
      "suburb": "UPPER ALLYN"
    },
    {
      "postCode": "2404",
      "suburb": "UPPER BINGARA"
    },
    {
      "postCode": "2483",
      "suburb": "UPPER BURRINGBAR"
    },
    {
      "postCode": "2849",
      "suburb": "UPPER BYLONG"
    },
    {
      "postCode": "2756",
      "suburb": "UPPER COLO"
    },
    {
      "postCode": "2482",
      "suburb": "UPPER COOPERS CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "UPPER COPMANHURST"
    },
    {
      "postCode": "2456",
      "suburb": "UPPER CORINDI"
    },
    {
      "postCode": "2484",
      "suburb": "UPPER CRYSTAL CREEK"
    },
    {
      "postCode": "2336",
      "suburb": "UPPER DARTBROOK"
    },
    {
      "postCode": "2469",
      "suburb": "UPPER DUCK CREEK"
    },
    {
      "postCode": "2486",
      "suburb": "UPPER DUROBY"
    },
    {
      "postCode": "2474",
      "suburb": "UPPER EDEN CREEK"
    },
    {
      "postCode": "2460",
      "suburb": "UPPER FINE FLOWER"
    },
    {
      "postCode": "2849",
      "suburb": "UPPER GROWEE"
    },
    {
      "postCode": "2474",
      "suburb": "UPPER HORSESHOE CREEK"
    },
    {
      "postCode": "2347",
      "suburb": "UPPER HORTON"
    },
    {
      "postCode": "2577",
      "suburb": "UPPER KANGAROO RIVER"
    },
    {
      "postCode": "2577",
      "suburb": "UPPER KANGAROO VALLEY"
    },
    {
      "postCode": "2415",
      "suburb": "UPPER KARUAH RIVER"
    },
    {
      "postCode": "2430",
      "suburb": "UPPER LANSDOWNE"
    },
    {
      "postCode": "2775",
      "suburb": "UPPER MACDONALD"
    },
    {
      "postCode": "2482",
      "suburb": "UPPER MAIN ARM"
    },
    {
      "postCode": "2250",
      "suburb": "UPPER MANGROVE"
    },
    {
      "postCode": "2346",
      "suburb": "UPPER MANILLA"
    },
    {
      "postCode": "2470",
      "suburb": "UPPER MONGOGARIE"
    },
    {
      "postCode": "2423",
      "suburb": "UPPER MYALL"
    },
    {
      "postCode": "2849",
      "suburb": "UPPER NILE"
    },
    {
      "postCode": "2450",
      "suburb": "UPPER ORARA"
    },
    {
      "postCode": "2446",
      "suburb": "UPPER PAPPINBARRA"
    },
    {
      "postCode": "2441",
      "suburb": "UPPER ROLLANDS PLAINS"
    },
    {
      "postCode": "2336",
      "suburb": "UPPER ROUCHEL"
    },
    {
      "postCode": "2447",
      "suburb": "UPPER TAYLORS ARM"
    },
    {
      "postCode": "2475",
      "suburb": "UPPER TOOLOOM"
    },
    {
      "postCode": "2795",
      "suburb": "UPPER TURON"
    },
    {
      "postCode": "2482",
      "suburb": "UPPER WILSONS CREEK"
    },
    {
      "postCode": "2439",
      "suburb": "UPSALLS CREEK"
    },
    {
      "postCode": "2477",
      "suburb": "URALBA"
    },
    {
      "postCode": "2358",
      "suburb": "URALLA"
    },
    {
      "postCode": "2645",
      "suburb": "URANA"
    },
    {
      "postCode": "2656",
      "suburb": "URANGELINE"
    },
    {
      "postCode": "2656",
      "suburb": "URANGELINE EAST"
    },
    {
      "postCode": "2652",
      "suburb": "URANQUINTY"
    },
    {
      "postCode": "2829",
      "suburb": "URAWILKIE"
    },
    {
      "postCode": "2475",
      "suburb": "URBENVILLE"
    },
    {
      "postCode": "2611",
      "suburb": "URIARRA"
    },
    {
      "postCode": "2620",
      "suburb": "URILA"
    },
    {
      "postCode": "2484",
      "suburb": "URLIUP"
    },
    {
      "postCode": "2455",
      "suburb": "URUNGA"
    },
    {
      "postCode": "2447",
      "suburb": "UTUNGUN"
    },
    {
      "postCode": "2421",
      "suburb": "VACY"
    },
    {
      "postCode": "2790",
      "suburb": "VALE OF CLWYDD"
    },
    {
      "postCode": "2280",
      "suburb": "VALENTINE"
    },
    {
      "postCode": "2454",
      "suburb": "VALERY"
    },
    {
      "postCode": "2448",
      "suburb": "VALLA"
    },
    {
      "postCode": "2448",
      "suburb": "VALLA BEACH"
    },
    {
      "postCode": "2777",
      "suburb": "VALLEY HEIGHTS"
    },
    {
      "postCode": "2566",
      "suburb": "VARROVILLE"
    },
    {
      "postCode": "2030",
      "suburb": "VAUCLUSE"
    },
    {
      "postCode": "2440",
      "suburb": "VERGES CREEK"
    },
    {
      "postCode": "2550",
      "suburb": "VERONA"
    },
    {
      "postCode": "2163",
      "suburb": "VILLAWOOD"
    },
    {
      "postCode": "2540",
      "suburb": "VINCENTIA"
    },
    {
      "postCode": "2765",
      "suburb": "VINEYARD"
    },
    {
      "postCode": "2423",
      "suburb": "VIOLET HILL"
    },
    {
      "postCode": "2799",
      "suburb": "VITTORIA"
    },
    {
      "postCode": "2172",
      "suburb": "VOYAGER POINT"
    },
    {
      "postCode": "2259",
      "suburb": "WADALBA"
    },
    {
      "postCode": "2546",
      "suburb": "WADBILLIGA"
    },
    {
      "postCode": "2474",
      "suburb": "WADEVILLE"
    },
    {
      "postCode": "2650",
      "suburb": "WAGGA WAGGA"
    },
    {
      "postCode": "2650",
      "suburb": "WAGGA WAGGA BC"
    },
    {
      "postCode": "2651",
      "suburb": "WAGGA WAGGA RAAF"
    },
    {
      "postCode": "2257",
      "suburb": "WAGSTAFFE"
    },
    {
      "postCode": "2076",
      "suburb": "WAHROONGA"
    },
    {
      "postCode": "2077",
      "suburb": "WAITARA"
    },
    {
      "postCode": "2443",
      "suburb": "WAITUI"
    },
    {
      "postCode": "2278",
      "suburb": "WAKEFIELD"
    },
    {
      "postCode": "2176",
      "suburb": "WAKELEY"
    },
    {
      "postCode": "2710",
      "suburb": "WAKOOL"
    },
    {
      "postCode": "2795",
      "suburb": "WALANG"
    },
    {
      "postCode": "2642",
      "suburb": "WALBUNDRIE"
    },
    {
      "postCode": "2354",
      "suburb": "WALCHA"
    },
    {
      "postCode": "2354",
      "suburb": "WALCHA ROAD"
    },
    {
      "postCode": "2800",
      "suburb": "WALDEGRAVE"
    },
    {
      "postCode": "2832",
      "suburb": "WALGETT"
    },
    {
      "postCode": "2343",
      "suburb": "WALHALLOW"
    },
    {
      "postCode": "2659",
      "suburb": "WALLA WALLA"
    },
    {
      "postCode": "2343",
      "suburb": "WALLABADAH"
    },
    {
      "postCode": "2430",
      "suburb": "WALLABI POINT"
    },
    {
      "postCode": "2650",
      "suburb": "WALLACETOWN"
    },
    {
      "postCode": "2745",
      "suburb": "WALLACIA"
    },
    {
      "postCode": "2546",
      "suburb": "WALLAGA LAKE"
    },
    {
      "postCode": "2550",
      "suburb": "WALLAGOOT"
    },
    {
      "postCode": "2320",
      "suburb": "WALLALONG"
    },
    {
      "postCode": "2340",
      "suburb": "WALLAMORE"
    },
    {
      "postCode": "2422",
      "suburb": "WALLANBAH"
    },
    {
      "postCode": "2360",
      "suburb": "WALLANGRA"
    },
    {
      "postCode": "2675",
      "suburb": "WALLANTHERY"
    },
    {
      "postCode": "2259",
      "suburb": "WALLARAH"
    },
    {
      "postCode": "2420",
      "suburb": "WALLARINGA"
    },
    {
      "postCode": "2420",
      "suburb": "WALLAROBBA"
    },
    {
      "postCode": "2618",
      "suburb": "WALLAROO"
    },
    {
      "postCode": "2588",
      "suburb": "WALLENDBEEN"
    },
    {
      "postCode": "2845",
      "suburb": "WALLERAWANG"
    },
    {
      "postCode": "2665",
      "suburb": "WALLEROOBIE"
    },
    {
      "postCode": "2428",
      "suburb": "WALLINGAT"
    },
    {
      "postCode": "2428",
      "suburb": "WALLIS LAKE"
    },
    {
      "postCode": "2287",
      "suburb": "WALLSEND"
    },
    {
      "postCode": "2287",
      "suburb": "WALLSEND DC"
    },
    {
      "postCode": "2287",
      "suburb": "WALLSEND SOUTH"
    },
    {
      "postCode": "2820",
      "suburb": "WALMER"
    },
    {
      "postCode": "2537",
      "suburb": "WAMBAN"
    },
    {
      "postCode": "2830",
      "suburb": "WAMBANGALANG"
    },
    {
      "postCode": "2260",
      "suburb": "WAMBERAL"
    },
    {
      "postCode": "2620",
      "suburb": "WAMBOIN"
    },
    {
      "postCode": "2795",
      "suburb": "WAMBOOL"
    },
    {
      "postCode": "2630",
      "suburb": "WAMBROOK"
    },
    {
      "postCode": "2840",
      "suburb": "WANAARING"
    },
    {
      "postCode": "2540",
      "suburb": "WANDANDIAN"
    },
    {
      "postCode": "2550",
      "suburb": "WANDELLA"
    },
    {
      "postCode": "2360",
      "suburb": "WANDERA"
    },
    {
      "postCode": "2710",
      "suburb": "WANDOOK"
    },
    {
      "postCode": "2365",
      "suburb": "WANDSWORTH"
    },
    {
      "postCode": "2423",
      "suburb": "WANG WAUK"
    },
    {
      "postCode": "2710",
      "suburb": "WANGANELLA"
    },
    {
      "postCode": "2482",
      "suburb": "WANGANUI"
    },
    {
      "postCode": "2267",
      "suburb": "WANGI WANGI"
    },
    {
      "postCode": "2650",
      "suburb": "WANTABADGERY"
    },
    {
      "postCode": "2644",
      "suburb": "WANTAGONG"
    },
    {
      "postCode": "2663",
      "suburb": "WANTIOOL"
    },
    {
      "postCode": "2550",
      "suburb": "WAPENGO"
    },
    {
      "postCode": "2304",
      "suburb": "WARABROOK"
    },
    {
      "postCode": "2298",
      "suburb": "WARATAH"
    },
    {
      "postCode": "2298",
      "suburb": "WARATAH WEST"
    },
    {
      "postCode": "2680",
      "suburb": "WARBURN"
    },
    {
      "postCode": "2477",
      "suburb": "WARDELL"
    },
    {
      "postCode": "2484",
      "suburb": "WARDROP VALLEY"
    },
    {
      "postCode": "2350",
      "suburb": "WARDS MISTAKE"
    },
    {
      "postCode": "2422",
      "suburb": "WARDS RIVER"
    },
    {
      "postCode": "2046",
      "suburb": "WAREEMBA"
    },
    {
      "postCode": "2402",
      "suburb": "WARIALDA"
    },
    {
      "postCode": "2402",
      "suburb": "WARIALDA RAIL"
    },
    {
      "postCode": "2528",
      "suburb": "WARILLA"
    },
    {
      "postCode": "2330",
      "suburb": "WARKWORTH"
    },
    {
      "postCode": "2282",
      "suburb": "WARNERS BAY"
    },
    {
      "postCode": "2259",
      "suburb": "WARNERVALE"
    },
    {
      "postCode": "2346",
      "suburb": "WARRABAH"
    },
    {
      "postCode": "2810",
      "suburb": "WARRADERRY"
    },
    {
      "postCode": "2460",
      "suburb": "WARRAGAI CREEK"
    },
    {
      "postCode": "2752",
      "suburb": "WARRAGAMBA"
    },
    {
      "postCode": "2710",
      "suburb": "WARRAGOON"
    },
    {
      "postCode": "2339",
      "suburb": "WARRAH"
    },
    {
      "postCode": "2339",
      "suburb": "WARRAH CREEK"
    },
    {
      "postCode": "2343",
      "suburb": "WARRAH RIDGE"
    },
    {
      "postCode": "2340",
      "suburb": "WARRAL"
    },
    {
      "postCode": "2423",
      "suburb": "WARRANULLA"
    },
    {
      "postCode": "2074",
      "suburb": "WARRAWEE"
    },
    {
      "postCode": "2680",
      "suburb": "WARRAWIDGEE"
    },
    {
      "postCode": "2502",
      "suburb": "WARRAWONG"
    },
    {
      "postCode": "2474",
      "suburb": "WARRAZAMBIL CREEK"
    },
    {
      "postCode": "2469",
      "suburb": "WARREGAH ISLAND"
    },
    {
      "postCode": "2447",
      "suburb": "WARRELL CREEK"
    },
    {
      "postCode": "2824",
      "suburb": "WARREN"
    },
    {
      "postCode": "2622",
      "suburb": "WARRI"
    },
    {
      "postCode": "2102",
      "suburb": "WARRIEWOOD"
    },
    {
      "postCode": "2102",
      "suburb": "WARRIEWOOD SHOPPING SQUARE"
    },
    {
      "postCode": "2774",
      "suburb": "WARRIMOO"
    },
    {
      "postCode": "2100",
      "suburb": "WARRINGAH MALL"
    },
    {
      "postCode": "2429",
      "suburb": "WARRIWILLAH"
    },
    {
      "postCode": "2871",
      "suburb": "WARROO"
    },
    {
      "postCode": "2828",
      "suburb": "WARRUMBUNGLE"
    },
    {
      "postCode": "2232",
      "suburb": "WARUMBUL"
    },
    {
      "postCode": "2170",
      "suburb": "WARWICK FARM"
    },
    {
      "postCode": "2425",
      "suburb": "WASHPOOL"
    },
    {
      "postCode": "2460",
      "suburb": "WASHPOOL"
    },
    {
      "postCode": "2325",
      "suburb": "WATAGAN"
    },
    {
      "postCode": "2259",
      "suburb": "WATANOBBI"
    },
    {
      "postCode": "2233",
      "suburb": "WATERFALL"
    },
    {
      "postCode": "2017",
      "suburb": "WATERLOO"
    },
    {
      "postCode": "2017",
      "suburb": "WATERLOO DC"
    },
    {
      "postCode": "2540",
      "suburb": "WATERSLEIGH"
    },
    {
      "postCode": "2460",
      "suburb": "WATERVIEW"
    },
    {
      "postCode": "2460",
      "suburb": "WATERVIEW HEIGHTS"
    },
    {
      "postCode": "2030",
      "suburb": "WATSONS BAY"
    },
    {
      "postCode": "2355",
      "suburb": "WATSONS CREEK"
    },
    {
      "postCode": "2232",
      "suburb": "WATTAMOLLA"
    },
    {
      "postCode": "2535",
      "suburb": "WATTAMOLLA"
    },
    {
      "postCode": "2794",
      "suburb": "WATTAMONDARA"
    },
    {
      "postCode": "2795",
      "suburb": "WATTLE FLAT"
    },
    {
      "postCode": "2173",
      "suburb": "WATTLE GROVE"
    },
    {
      "postCode": "2330",
      "suburb": "WATTLE PONDS"
    },
    {
      "postCode": "2575",
      "suburb": "WATTLE RIDGE"
    },
    {
      "postCode": "2795",
      "suburb": "WATTON"
    },
    {
      "postCode": "2446",
      "suburb": "WAUCHOPE"
    },
    {
      "postCode": "2711",
      "suburb": "WAUGORAH"
    },
    {
      "postCode": "2422",
      "suburb": "WAUKIVORY"
    },
    {
      "postCode": "2024",
      "suburb": "WAVERLEY"
    },
    {
      "postCode": "2337",
      "suburb": "WAVERLY"
    },
    {
      "postCode": "2060",
      "suburb": "WAVERTON"
    },
    {
      "postCode": "2447",
      "suburb": "WAY WAY"
    },
    {
      "postCode": "2580",
      "suburb": "WAYO"
    },
    {
      "postCode": "2340",
      "suburb": "WEABONGA"
    },
    {
      "postCode": "2382",
      "suburb": "WEAN"
    },
    {
      "postCode": "2421",
      "suburb": "WEBBERS CREEK"
    },
    {
      "postCode": "2775",
      "suburb": "WEBBS CREEK"
    },
    {
      "postCode": "2560",
      "suburb": "WEDDERBURN"
    },
    {
      "postCode": "2582",
      "suburb": "WEE JASPER"
    },
    {
      "postCode": "2388",
      "suburb": "WEE WAA"
    },
    {
      "postCode": "2594",
      "suburb": "WEEDALLION"
    },
    {
      "postCode": "2406",
      "suburb": "WEEMELAH"
    },
    {
      "postCode": "2395",
      "suburb": "WEETALIBA"
    },
    {
      "postCode": "2669",
      "suburb": "WEETHALLE"
    },
    {
      "postCode": "2839",
      "suburb": "WEILMORINGLE"
    },
    {
      "postCode": "2415",
      "suburb": "WEISMANTELS"
    },
    {
      "postCode": "2642",
      "suburb": "WELAREGANG"
    },
    {
      "postCode": "2575",
      "suburb": "WELBY"
    },
    {
      "postCode": "2370",
      "suburb": "WELLINGROVE"
    },
    {
      "postCode": "2820",
      "suburb": "WELLINGTON"
    },
    {
      "postCode": "2371",
      "suburb": "WELLINGTON VALE"
    },
    {
      "postCode": "2460",
      "suburb": "WELLS CROSSING"
    },
    {
      "postCode": "2250",
      "suburb": "WENDOREE PARK"
    },
    {
      "postCode": "2648",
      "suburb": "WENTWORTH"
    },
    {
      "postCode": "2782",
      "suburb": "WENTWORTH FALLS"
    },
    {
      "postCode": "2127",
      "suburb": "WENTWORTH POINT"
    },
    {
      "postCode": "2145",
      "suburb": "WENTWORTHVILLE"
    },
    {
      "postCode": "2577",
      "suburb": "WERAI"
    },
    {
      "postCode": "2720",
      "suburb": "WEREBOLDERA"
    },
    {
      "postCode": "2720",
      "suburb": "WERMATONG"
    },
    {
      "postCode": "2570",
      "suburb": "WEROMBI"
    },
    {
      "postCode": "2534",
      "suburb": "WERRI BEACH"
    },
    {
      "postCode": "2446",
      "suburb": "WERRIKIMBE"
    },
    {
      "postCode": "2747",
      "suburb": "WERRINGTON"
    },
    {
      "postCode": "2747",
      "suburb": "WERRINGTON COUNTY"
    },
    {
      "postCode": "2747",
      "suburb": "WERRINGTON DOWNS"
    },
    {
      "postCode": "2341",
      "suburb": "WERRIS CREEK"
    },
    {
      "postCode": "2640",
      "suburb": "WEST ALBURY"
    },
    {
      "postCode": "2350",
      "suburb": "WEST ARMIDALE"
    },
    {
      "postCode": "2478",
      "suburb": "WEST BALLINA"
    },
    {
      "postCode": "2795",
      "suburb": "WEST BATHURST"
    },
    {
      "postCode": "2471",
      "suburb": "WEST BUNGAWALBIN"
    },
    {
      "postCode": "1515",
      "suburb": "WEST CHATSWOOD"
    },
    {
      "postCode": "2471",
      "suburb": "WEST CORAKI"
    },
    {
      "postCode": "2250",
      "suburb": "WEST GOSFORD"
    },
    {
      "postCode": "2443",
      "suburb": "WEST HAVEN"
    },
    {
      "postCode": "2171",
      "suburb": "WEST HOXTON"
    },
    {
      "postCode": "2440",
      "suburb": "WEST KEMPSEY"
    },
    {
      "postCode": "2541",
      "suburb": "WEST NOWRA"
    },
    {
      "postCode": "2125",
      "suburb": "WEST PENNANT HILLS"
    },
    {
      "postCode": "2073",
      "suburb": "WEST PYMBLE"
    },
    {
      "postCode": "1685",
      "suburb": "WEST RYDE"
    },
    {
      "postCode": "2114",
      "suburb": "WEST RYDE"
    },
    {
      "postCode": "2340",
      "suburb": "WEST TAMWORTH"
    },
    {
      "postCode": "2286",
      "suburb": "WEST WALLSEND"
    },
    {
      "postCode": "2474",
      "suburb": "WEST WIANGAREE"
    },
    {
      "postCode": "2500",
      "suburb": "WEST WOLLONGONG"
    },
    {
      "postCode": "2671",
      "suburb": "WEST WYALONG"
    },
    {
      "postCode": "2330",
      "suburb": "WESTBROOK"
    },
    {
      "postCode": "2340",
      "suburb": "WESTDALE"
    },
    {
      "postCode": "2653",
      "suburb": "WESTDALE"
    },
    {
      "postCode": "2048",
      "suburb": "WESTGATE"
    },
    {
      "postCode": "2120",
      "suburb": "WESTLEIGH"
    },
    {
      "postCode": "2145",
      "suburb": "WESTMEAD"
    },
    {
      "postCode": "2326",
      "suburb": "WESTON"
    },
    {
      "postCode": "2729",
      "suburb": "WESTWOOD"
    },
    {
      "postCode": "1851",
      "suburb": "WETHERILL PARK"
    },
    {
      "postCode": "2164",
      "suburb": "WETHERILL PARK"
    },
    {
      "postCode": "2164",
      "suburb": "WETHERILL PARK BC"
    },
    {
      "postCode": "2734",
      "suburb": "WETUPPA"
    },
    {
      "postCode": "2770",
      "suburb": "WHALAN"
    },
    {
      "postCode": "2107",
      "suburb": "WHALE BEACH"
    },
    {
      "postCode": "2097",
      "suburb": "WHEELER HEIGHTS"
    },
    {
      "postCode": "2758",
      "suburb": "WHEENY CREEK"
    },
    {
      "postCode": "2583",
      "suburb": "WHEEO"
    },
    {
      "postCode": "2429",
      "suburb": "WHERROL FLAT"
    },
    {
      "postCode": "2480",
      "suburb": "WHIAN WHIAN"
    },
    {
      "postCode": "2469",
      "suburb": "WHIPORIE"
    },
    {
      "postCode": "2836",
      "suburb": "WHITE CLIFFS"
    },
    {
      "postCode": "2795",
      "suburb": "WHITE ROCK"
    },
    {
      "postCode": "2290",
      "suburb": "WHITEBRIDGE"
    },
    {
      "postCode": "2460",
      "suburb": "WHITEMAN CREEK"
    },
    {
      "postCode": "2404",
      "suburb": "WHITLOW"
    },
    {
      "postCode": "2330",
      "suburb": "WHITTINGHAM"
    },
    {
      "postCode": "2705",
      "suburb": "WHITTON"
    },
    {
      "postCode": "2428",
      "suburb": "WHOOTA"
    },
    {
      "postCode": "2795",
      "suburb": "WIAGDON"
    },
    {
      "postCode": "2474",
      "suburb": "WIANGAREE"
    },
    {
      "postCode": "2580",
      "suburb": "WIARBOROUGH"
    },
    {
      "postCode": "2293",
      "suburb": "WICKHAM"
    },
    {
      "postCode": "2328",
      "suburb": "WIDDEN"
    },
    {
      "postCode": "2680",
      "suburb": "WIDGELLI"
    },
    {
      "postCode": "2756",
      "suburb": "WILBERFORCE"
    },
    {
      "postCode": "2850",
      "suburb": "WILBETREE"
    },
    {
      "postCode": "2836",
      "suburb": "WILCANNIA"
    },
    {
      "postCode": "2453",
      "suburb": "WILD CATTLE CREEK"
    },
    {
      "postCode": "2577",
      "suburb": "WILDES MEADOW"
    },
    {
      "postCode": "2195",
      "suburb": "WILEY PARK"
    },
    {
      "postCode": "2382",
      "suburb": "WILLALA"
    },
    {
      "postCode": "2440",
      "suburb": "WILLAWARRIN"
    },
    {
      "postCode": "2680",
      "suburb": "WILLBRIGGIE"
    },
    {
      "postCode": "2440",
      "suburb": "WILLI WILLI"
    },
    {
      "postCode": "2620",
      "suburb": "WILLIAMSDALE"
    },
    {
      "postCode": "2318",
      "suburb": "WILLIAMTOWN"
    },
    {
      "postCode": "2653",
      "suburb": "WILLIGOBUNG"
    },
    {
      "postCode": "2423",
      "suburb": "WILLINA"
    },
    {
      "postCode": "2770",
      "suburb": "WILLMOT"
    },
    {
      "postCode": "2068",
      "suburb": "WILLOUGHBY"
    },
    {
      "postCode": "2068",
      "suburb": "WILLOUGHBY EAST"
    },
    {
      "postCode": "2068",
      "suburb": "WILLOUGHBY NORTH"
    },
    {
      "postCode": "2339",
      "suburb": "WILLOW TREE"
    },
    {
      "postCode": "2534",
      "suburb": "WILLOW VALE"
    },
    {
      "postCode": "2575",
      "suburb": "WILLOW VALE"
    },
    {
      "postCode": "2372",
      "suburb": "WILLSONS DOWNFALL"
    },
    {
      "postCode": "2710",
      "suburb": "WILLURAH"
    },
    {
      "postCode": "2850",
      "suburb": "WILPINJONG"
    },
    {
      "postCode": "2482",
      "suburb": "WILSONS CREEK"
    },
    {
      "postCode": "2624",
      "suburb": "WILSONS VALLEY"
    },
    {
      "postCode": "2571",
      "suburb": "WILTON"
    },
    {
      "postCode": "2795",
      "suburb": "WIMBLEDON"
    },
    {
      "postCode": "2346",
      "suburb": "WIMBORNE"
    },
    {
      "postCode": "2795",
      "suburb": "WINBURNDALE"
    },
    {
      "postCode": "2306",
      "suburb": "WINDALE"
    },
    {
      "postCode": "2528",
      "suburb": "WINDANG"
    },
    {
      "postCode": "2320",
      "suburb": "WINDELLA"
    },
    {
      "postCode": "2580",
      "suburb": "WINDELLAMA"
    },
    {
      "postCode": "2800",
      "suburb": "WINDERA"
    },
    {
      "postCode": "2321",
      "suburb": "WINDERMERE"
    },
    {
      "postCode": "2264",
      "suburb": "WINDERMERE PARK"
    },
    {
      "postCode": "2850",
      "suburb": "WINDEYER"
    },
    {
      "postCode": "2720",
      "suburb": "WINDOWIE"
    },
    {
      "postCode": "2795",
      "suburb": "WINDRADYNE"
    },
    {
      "postCode": "2756",
      "suburb": "WINDSOR"
    },
    {
      "postCode": "2756",
      "suburb": "WINDSOR DOWNS"
    },
    {
      "postCode": "2343",
      "suburb": "WINDY"
    },
    {
      "postCode": "2460",
      "suburb": "WINEGROVE"
    },
    {
      "postCode": "2829",
      "suburb": "WINGADEE"
    },
    {
      "postCode": "2579",
      "suburb": "WINGELLO"
    },
    {
      "postCode": "2337",
      "suburb": "WINGEN"
    },
    {
      "postCode": "2429",
      "suburb": "WINGHAM"
    },
    {
      "postCode": "2631",
      "suburb": "WINIFRED"
    },
    {
      "postCode": "2777",
      "suburb": "WINMALEE"
    },
    {
      "postCode": "2153",
      "suburb": "WINSTON HILLS"
    },
    {
      "postCode": "2344",
      "suburb": "WINTON"
    },
    {
      "postCode": "2640",
      "suburb": "WIRLINGA"
    },
    {
      "postCode": "2849",
      "suburb": "WIRRABA"
    },
    {
      "postCode": "2420",
      "suburb": "WIRRAGULLA"
    },
    {
      "postCode": "2803",
      "suburb": "WIRRIMAH"
    },
    {
      "postCode": "2447",
      "suburb": "WIRRIMBI"
    },
    {
      "postCode": "2871",
      "suburb": "WIRRINYA"
    },
    {
      "postCode": "2795",
      "suburb": "WISEMANS CREEK"
    },
    {
      "postCode": "2775",
      "suburb": "WISEMANS FERRY"
    },
    {
      "postCode": "2440",
      "suburb": "WITTITRIN"
    },
    {
      "postCode": "2550",
      "suburb": "WOG WOG"
    },
    {
      "postCode": "2622",
      "suburb": "WOG WOG"
    },
    {
      "postCode": "2422",
      "suburb": "WOKO"
    },
    {
      "postCode": "2790",
      "suburb": "WOLGAN VALLEY"
    },
    {
      "postCode": "2790",
      "suburb": "WOLLANGAMBE"
    },
    {
      "postCode": "2850",
      "suburb": "WOLLAR"
    },
    {
      "postCode": "2330",
      "suburb": "WOLLEMI"
    },
    {
      "postCode": "2205",
      "suburb": "WOLLI CREEK"
    },
    {
      "postCode": "2581",
      "suburb": "WOLLOGORANG"
    },
    {
      "postCode": "2325",
      "suburb": "WOLLOMBI"
    },
    {
      "postCode": "2350",
      "suburb": "WOLLOMOMBI"
    },
    {
      "postCode": "2477",
      "suburb": "WOLLONGBAR"
    },
    {
      "postCode": "2500",
      "suburb": "WOLLONGONG"
    },
    {
      "postCode": "2520",
      "suburb": "WOLLONGONG"
    },
    {
      "postCode": "2500",
      "suburb": "WOLLONGONG DC"
    },
    {
      "postCode": "2500",
      "suburb": "WOLLONGONG WEST"
    },
    {
      "postCode": "2065",
      "suburb": "WOLLSTONECRAFT"
    },
    {
      "postCode": "2540",
      "suburb": "WOLLUMBOOLA"
    },
    {
      "postCode": "2354",
      "suburb": "WOLLUN"
    },
    {
      "postCode": "2550",
      "suburb": "WOLUMLA"
    },
    {
      "postCode": "2515",
      "suburb": "WOMBARRA"
    },
    {
      "postCode": "2587",
      "suburb": "WOMBAT"
    },
    {
      "postCode": "2460",
      "suburb": "WOMBAT CREEK"
    },
    {
      "postCode": "2580",
      "suburb": "WOMBEYAN CAVES"
    },
    {
      "postCode": "2731",
      "suburb": "WOMBOOTA"
    },
    {
      "postCode": "2756",
      "suburb": "WOMERAH"
    },
    {
      "postCode": "2551",
      "suburb": "WONBOYN"
    },
    {
      "postCode": "2551",
      "suburb": "WONBOYN LAKE"
    },
    {
      "postCode": "2551",
      "suburb": "WONBOYN NORTH"
    },
    {
      "postCode": "2256",
      "suburb": "WONDABYNE"
    },
    {
      "postCode": "2729",
      "suburb": "WONDALGA"
    },
    {
      "postCode": "2831",
      "suburb": "WONGARBON"
    },
    {
      "postCode": "2530",
      "suburb": "WONGAWILLI"
    },
    {
      "postCode": "2346",
      "suburb": "WONGO CREEK"
    },
    {
      "postCode": "2350",
      "suburb": "WONGWIBINDA"
    },
    {
      "postCode": "2322",
      "suburb": "WOODBERRY"
    },
    {
      "postCode": "2560",
      "suburb": "WOODBINE"
    },
    {
      "postCode": "2472",
      "suburb": "WOODBURN"
    },
    {
      "postCode": "2538",
      "suburb": "WOODBURN"
    },
    {
      "postCode": "2767",
      "suburb": "WOODCROFT"
    },
    {
      "postCode": "2476",
      "suburb": "WOODENBONG"
    },
    {
      "postCode": "2778",
      "suburb": "WOODFORD"
    },
    {
      "postCode": "2463",
      "suburb": "WOODFORD ISLAND"
    },
    {
      "postCode": "2535",
      "suburb": "WOODHILL"
    },
    {
      "postCode": "2580",
      "suburb": "WOODHOUSELEE"
    },
    {
      "postCode": "2536",
      "suburb": "WOODLANDS"
    },
    {
      "postCode": "2575",
      "suburb": "WOODLANDS"
    },
    {
      "postCode": "2480",
      "suburb": "WOODLAWN"
    },
    {
      "postCode": "2164",
      "suburb": "WOODPARK"
    },
    {
      "postCode": "2284",
      "suburb": "WOODRISING"
    },
    {
      "postCode": "2372",
      "suburb": "WOODSIDE"
    },
    {
      "postCode": "2347",
      "suburb": "WOODSREEF"
    },
    {
      "postCode": "2360",
      "suburb": "WOODSTOCK"
    },
    {
      "postCode": "2538",
      "suburb": "WOODSTOCK"
    },
    {
      "postCode": "2793",
      "suburb": "WOODSTOCK"
    },
    {
      "postCode": "2470",
      "suburb": "WOODVIEW"
    },
    {
      "postCode": "2321",
      "suburb": "WOODVILLE"
    },
    {
      "postCode": "2466",
      "suburb": "WOODY HEAD"
    },
    {
      "postCode": "2354",
      "suburb": "WOOLBROOK"
    },
    {
      "postCode": "2582",
      "suburb": "WOOLGARLO"
    },
    {
      "postCode": "2456",
      "suburb": "WOOLGOOLGA"
    },
    {
      "postCode": "2462",
      "suburb": "WOOLI"
    },
    {
      "postCode": "1350",
      "suburb": "WOOLLAHRA"
    },
    {
      "postCode": "2025",
      "suburb": "WOOLLAHRA"
    },
    {
      "postCode": "2540",
      "suburb": "WOOLLAMIA"
    },
    {
      "postCode": "2011",
      "suburb": "WOOLLOOMOOLOO"
    },
    {
      "postCode": "2470",
      "suburb": "WOOLNERS ARM"
    },
    {
      "postCode": "2340",
      "suburb": "WOOLOMIN"
    },
    {
      "postCode": "2337",
      "suburb": "WOOLOOMA"
    },
    {
      "postCode": "2230",
      "suburb": "WOOLOOWARE"
    },
    {
      "postCode": "2464",
      "suburb": "WOOLOWEYAH"
    },
    {
      "postCode": "2110",
      "suburb": "WOOLWICH"
    },
    {
      "postCode": "2644",
      "suburb": "WOOMARGAMA"
    },
    {
      "postCode": "2469",
      "suburb": "WOOMBAH"
    },
    {
      "postCode": "2259",
      "suburb": "WOONGARRAH"
    },
    {
      "postCode": "2517",
      "suburb": "WOONONA"
    },
    {
      "postCode": "2517",
      "suburb": "WOONONA EAST"
    },
    {
      "postCode": "2423",
      "suburb": "WOOTTON"
    },
    {
      "postCode": "2483",
      "suburb": "WOOYUNG"
    },
    {
      "postCode": "2002",
      "suburb": "WORLD SQUARE"
    },
    {
      "postCode": "2850",
      "suburb": "WORLDS END"
    },
    {
      "postCode": "2232",
      "suburb": "WORONORA"
    },
    {
      "postCode": "2508",
      "suburb": "WORONORA DAM"
    },
    {
      "postCode": "2233",
      "suburb": "WORONORA HEIGHTS"
    },
    {
      "postCode": "2540",
      "suburb": "WORRIGEE"
    },
    {
      "postCode": "2540",
      "suburb": "WORROWING HEIGHTS"
    },
    {
      "postCode": "2256",
      "suburb": "WOY WOY"
    },
    {
      "postCode": "2256",
      "suburb": "WOY WOY BAY"
    },
    {
      "postCode": "2642",
      "suburb": "WRATHALL"
    },
    {
      "postCode": "2540",
      "suburb": "WRIGHTS BEACH"
    },
    {
      "postCode": "2775",
      "suburb": "WRIGHTS CREEK"
    },
    {
      "postCode": "2820",
      "suburb": "WUULUMAN"
    },
    {
      "postCode": "2671",
      "suburb": "WYALONG"
    },
    {
      "postCode": "2469",
      "suburb": "WYAN"
    },
    {
      "postCode": "2622",
      "suburb": "WYANBENE"
    },
    {
      "postCode": "2808",
      "suburb": "WYANGALA"
    },
    {
      "postCode": "2720",
      "suburb": "WYANGLE"
    },
    {
      "postCode": "2333",
      "suburb": "WYBONG"
    },
    {
      "postCode": "2259",
      "suburb": "WYBUNG"
    },
    {
      "postCode": "2259",
      "suburb": "WYEE"
    },
    {
      "postCode": "2259",
      "suburb": "WYEE POINT"
    },
    {
      "postCode": "2372",
      "suburb": "WYLIE CREEK"
    },
    {
      "postCode": "2330",
      "suburb": "WYLIES FLAT"
    },
    {
      "postCode": "2640",
      "suburb": "WYMAH"
    },
    {
      "postCode": "2550",
      "suburb": "WYNDHAM"
    },
    {
      "postCode": "2474",
      "suburb": "WYNEDEN"
    },
    {
      "postCode": "2250",
      "suburb": "WYOMING"
    },
    {
      "postCode": "2259",
      "suburb": "WYONG"
    },
    {
      "postCode": "2259",
      "suburb": "WYONG CREEK"
    },
    {
      "postCode": "2259",
      "suburb": "WYONGAH"
    },
    {
      "postCode": "2480",
      "suburb": "WYRALLAH"
    },
    {
      "postCode": "2469",
      "suburb": "YABBRA"
    },
    {
      "postCode": "2539",
      "suburb": "YADBORO"
    },
    {
      "postCode": "2423",
      "suburb": "YAGON"
    },
    {
      "postCode": "2199",
      "suburb": "YAGOONA"
    },
    {
      "postCode": "2199",
      "suburb": "YAGOONA WEST"
    },
    {
      "postCode": "2580",
      "suburb": "YALBRAITH"
    },
    {
      "postCode": "2530",
      "suburb": "YALLAH"
    },
    {
      "postCode": "2408",
      "suburb": "YALLAROI"
    },
    {
      "postCode": "2540",
      "suburb": "YALWAL"
    },
    {
      "postCode": "2464",
      "suburb": "YAMBA"
    },
    {
      "postCode": "2550",
      "suburb": "YAMBULLA"
    },
    {
      "postCode": "2703",
      "suburb": "YANCO"
    },
    {
      "postCode": "2574",
      "suburb": "YANDERRA"
    },
    {
      "postCode": "2711",
      "suburb": "YANGA"
    },
    {
      "postCode": "2550",
      "suburb": "YANKEES CREEK"
    },
    {
      "postCode": "2343",
      "suburb": "YANNERGEE"
    },
    {
      "postCode": "2840",
      "suburb": "YANTABULLA"
    },
    {
      "postCode": "2629",
      "suburb": "YAOUK"
    },
    {
      "postCode": "2644",
      "suburb": "YARARA"
    },
    {
      "postCode": "2580",
      "suburb": "YARRA"
    },
    {
      "postCode": "2875",
      "suburb": "YARRABANDAI"
    },
    {
      "postCode": "2850",
      "suburb": "YARRABIN"
    },
    {
      "postCode": "2820",
      "suburb": "YARRAGAL"
    },
    {
      "postCode": "2842",
      "suburb": "YARRAGRIN"
    },
    {
      "postCode": "2650",
      "suburb": "YARRAGUNDRY"
    },
    {
      "postCode": "2441",
      "suburb": "YARRAHAPINNI"
    },
    {
      "postCode": "2259",
      "suburb": "YARRAMALONG"
    },
    {
      "postCode": "2343",
      "suburb": "YARRAMAN"
    },
    {
      "postCode": "2753",
      "suburb": "YARRAMUNDI"
    },
    {
      "postCode": "2447",
      "suburb": "YARRANBELLA"
    },
    {
      "postCode": "2720",
      "suburb": "YARRANGOBILLY"
    },
    {
      "postCode": "2446",
      "suburb": "YARRAS"
    },
    {
      "postCode": "2795",
      "suburb": "YARRAS"
    },
    {
      "postCode": "2429",
      "suburb": "YARRATT FOREST"
    },
    {
      "postCode": "2440",
      "suburb": "YARRAVEL"
    },
    {
      "postCode": "2328",
      "suburb": "YARRAWA"
    },
    {
      "postCode": "2233",
      "suburb": "YARRAWARRAH"
    },
    {
      "postCode": "2850",
      "suburb": "YARRAWONGA"
    },
    {
      "postCode": "2264",
      "suburb": "YARRAWONGA PARK"
    },
    {
      "postCode": "2388",
      "suburb": "YARRIE LAKE"
    },
    {
      "postCode": "2620",
      "suburb": "YARROW"
    },
    {
      "postCode": "2370",
      "suburb": "YARROWFORD"
    },
    {
      "postCode": "2354",
      "suburb": "YARROWITCH"
    },
    {
      "postCode": "2358",
      "suburb": "YARROWYCK"
    },
    {
      "postCode": "2582",
      "suburb": "YASS"
    },
    {
      "postCode": "2582",
      "suburb": "YASS RIVER"
    },
    {
      "postCode": "2650",
      "suburb": "YATHELLA"
    },
    {
      "postCode": "2251",
      "suburb": "YATTALUNGA"
    },
    {
      "postCode": "2539",
      "suburb": "YATTE YATTAH"
    },
    {
      "postCode": "2729",
      "suburb": "YAVEN CREEK"
    },
    {
      "postCode": "2483",
      "suburb": "YELGUN"
    },
    {
      "postCode": "2371",
      "suburb": "YELLOW DAM"
    },
    {
      "postCode": "2548",
      "suburb": "YELLOW PINCH"
    },
    {
      "postCode": "2527",
      "suburb": "YELLOW ROCK"
    },
    {
      "postCode": "2777",
      "suburb": "YELLOW ROCK"
    },
    {
      "postCode": "2232",
      "suburb": "YENABILLI"
    },
    {
      "postCode": "2681",
      "suburb": "YENDA"
    },
    {
      "postCode": "2325",
      "suburb": "YENGO"
    },
    {
      "postCode": "2161",
      "suburb": "YENNORA"
    },
    {
      "postCode": "2868",
      "suburb": "YEOVAL"
    },
    {
      "postCode": "2642",
      "suburb": "YERONG CREEK"
    },
    {
      "postCode": "2787",
      "suburb": "YERRANDERIE"
    },
    {
      "postCode": "2575",
      "suburb": "YERRINBOOL"
    },
    {
      "postCode": "2540",
      "suburb": "YERRIYONG"
    },
    {
      "postCode": "2440",
      "suburb": "YESSABAH"
    },
    {
      "postCode": "2795",
      "suburb": "YETHOLME"
    },
    {
      "postCode": "2410",
      "suburb": "YETMAN"
    },
    {
      "postCode": "2446",
      "suburb": "YIPPIN CREEK"
    },
    {
      "postCode": "2680",
      "suburb": "YOOGALI"
    },
    {
      "postCode": "2470",
      "suburb": "YORKLEA"
    },
    {
      "postCode": "2594",
      "suburb": "YOUNG"
    },
    {
      "postCode": "2228",
      "suburb": "YOWIE BAY"
    },
    {
      "postCode": "2550",
      "suburb": "YOWRIE"
    },
    {
      "postCode": "2867",
      "suburb": "YULLUNDRY"
    },
    {
      "postCode": "2464",
      "suburb": "YURAYGIR"
    },
    {
      "postCode": "2484",
      "suburb": "ZARA"
    },
    {
      "postCode": "2017",
      "suburb": "ZETLAND"
    }
  ];
  constructor() { }
}
