import { Injectable } from '@angular/core';
import { IPostCodeItem } from 'src/app/interface/global/global.interface';

@Injectable({
  providedIn: 'root',
})
export class SaService {
  public data: IPostCodeItem[] = [
    {
      postCode: '5159',
      suburb: 'ABERFOYLE PARK',
    },
    {
      postCode: '5440',
      suburb: 'ABMINGA STATION',
    },
    {
      postCode: '5000',
      suburb: 'ADELAIDE',
    },
    {
      postCode: '5001',
      suburb: 'ADELAIDE',
    },
    {
      postCode: '5800',
      suburb: 'ADELAIDE',
    },
    {
      postCode: '5801',
      suburb: 'ADELAIDE',
    },
    {
      postCode: '5810',
      suburb: 'ADELAIDE',
    },
    {
      postCode: '5839',
      suburb: 'ADELAIDE',
    },
    {
      postCode: '5950',
      suburb: 'ADELAIDE AIRPORT',
    },
    {
      postCode: '5000',
      suburb: 'ADELAIDE BC',
    },
    {
      postCode: '5558',
      suburb: 'AGERY',
    },
    {
      postCode: '5311',
      suburb: 'ALAWOONA',
    },
    {
      postCode: '5014',
      suburb: 'ALBERT PARK',
    },
    {
      postCode: '5014',
      suburb: 'ALBERTON',
    },
    {
      postCode: '5154',
      suburb: 'ALDGATE',
    },
    {
      postCode: '5173',
      suburb: 'ALDINGA',
    },
    {
      postCode: '5173',
      suburb: 'ALDINGA BEACH',
    },
    {
      postCode: '5555',
      suburb: 'ALFORD',
    },
    {
      postCode: '5723',
      suburb: 'ALLANDALE STATION',
    },
    {
      postCode: '5009',
      suburb: 'ALLENBY GARDENS',
    },
    {
      postCode: '5291',
      suburb: 'ALLENDALE EAST',
    },
    {
      postCode: '5373',
      suburb: 'ALLENDALE NORTH',
    },
    {
      postCode: '5401',
      suburb: 'ALMA',
    },
    {
      postCode: '5730',
      suburb: 'ALPANA',
    },
    {
      postCode: '5733',
      suburb: 'ALTON DOWNS STATION',
    },
    {
      postCode: '5351',
      suburb: 'ALTONA',
    },
    {
      postCode: '872',
      suburb: 'AMATA',
    },
    {
      postCode: '5222',
      suburb: 'AMERICAN BEACH',
    },
    {
      postCode: '5221',
      suburb: 'AMERICAN RIVER',
    },
    {
      postCode: '5431',
      suburb: 'AMYTON',
    },
    {
      postCode: '5464',
      suburb: 'ANAMA',
    },
    {
      postCode: '872',
      suburb: 'ANANGU PITJANTJATJARA YANKUNYTJATJARA',
    },
    {
      postCode: '5722',
      suburb: 'ANDAMOOKA',
    },
    {
      postCode: '5722',
      suburb: 'ANDAMOOKA STATION',
    },
    {
      postCode: '5454',
      suburb: 'ANDREWS',
    },
    {
      postCode: '5114',
      suburb: 'ANDREWS FARM',
    },
    {
      postCode: '5255',
      suburb: 'ANGAS PLAINS',
    },
    {
      postCode: '5238',
      suburb: 'ANGAS VALLEY',
    },
    {
      postCode: '5353',
      suburb: 'ANGASTON',
    },
    {
      postCode: '5732',
      suburb: 'ANGEPENA',
    },
    {
      postCode: '5010',
      suburb: 'ANGLE PARK',
    },
    {
      postCode: '5117',
      suburb: 'ANGLE VALE',
    },
    {
      postCode: '5730',
      suburb: 'ANGORIGINA',
    },
    {
      postCode: '5723',
      suburb: 'ANNA CREEK',
    },
    {
      postCode: '5356',
      suburb: 'ANNADALE',
    },
    {
      postCode: '5222',
      suburb: 'ANTECHAMBER BAY',
    },
    {
      postCode: '5237',
      suburb: 'APAMURRA',
    },
    {
      postCode: '5413',
      suburb: 'APOINGA',
    },
    {
      postCode: '5480',
      suburb: 'APPILA',
    },
    {
      postCode: '5723',
      suburb: 'ARCKARINGA',
    },
    {
      postCode: '5720',
      suburb: 'ARCOONA',
    },
    {
      postCode: '5571',
      suburb: 'ARDROSSAN',
    },
    {
      postCode: '5732',
      suburb: 'ARKAROOLA',
    },
    {
      postCode: '5701',
      suburb: 'ARKAROOLA VILLAGE',
    },
    {
      postCode: '5453',
      suburb: 'ARMAGH',
    },
    {
      postCode: '5603',
      suburb: 'ARNO BAY',
    },
    {
      postCode: '5572',
      suburb: 'ARTHURTON',
    },
    {
      postCode: '5043',
      suburb: 'ASCOT PARK',
    },
    {
      postCode: '5157',
      suburb: 'ASHBOURNE',
    },
    {
      postCode: '5035',
      suburb: 'ASHFORD',
    },
    {
      postCode: '5137',
      suburb: 'ASHTON',
    },
    {
      postCode: '5259',
      suburb: 'ASHVILLE',
    },
    {
      postCode: '5076',
      suburb: 'ATHELSTONE',
    },
    {
      postCode: '5012',
      suburb: 'ATHOL PARK',
    },
    {
      postCode: '5451',
      suburb: 'AUBURN',
    },
    {
      postCode: '5072',
      suburb: 'AULDANA',
    },
    {
      postCode: '5374',
      suburb: 'AUSTRALIA PLAINS',
    },
    {
      postCode: '5273',
      suburb: 'AVENUE RANGE',
    },
    {
      postCode: '5253',
      suburb: 'AVOCA DELL',
    },
    {
      postCode: '5501',
      suburb: 'AVON',
    },
    {
      postCode: '872',
      suburb: 'AYERS RANGE SOUTH',
    },
    {
      postCode: '5211',
      suburb: 'BACK VALLEY',
    },
    {
      postCode: '5601',
      suburb: 'BACKY POINT',
    },
    {
      postCode: '5373',
      suburb: 'BAGOT WELL',
    },
    {
      postCode: '5671',
      suburb: 'BAIRD BAY',
    },
    {
      postCode: '5354',
      suburb: 'BAKARA',
    },
    {
      postCode: '5354',
      suburb: 'BAKARA WELL',
    },
    {
      postCode: '5417',
      suburb: 'BALAH',
    },
    {
      postCode: '5461',
      suburb: 'BALAKLAVA',
    },
    {
      postCode: '5203',
      suburb: 'BALD HILLS',
    },
    {
      postCode: '5417',
      suburb: 'BALDINA',
    },
    {
      postCode: '5573',
      suburb: 'BALGOWAN',
    },
    {
      postCode: '5242',
      suburb: 'BALHANNAH',
    },
    {
      postCode: '5221',
      suburb: 'BALLAST HEAD',
    },
    {
      postCode: '5268',
      suburb: 'BANGHAM',
    },
    {
      postCode: '5481',
      suburb: 'BANGOR',
    },
    {
      postCode: '5091',
      suburb: 'BANKSIA PARK',
    },
    {
      postCode: '5460',
      suburb: 'BARABBA',
    },
    {
      postCode: '5432',
      suburb: 'BARATTA',
    },
    {
      postCode: '5453',
      suburb: 'BARINIA',
    },
    {
      postCode: '5345',
      suburb: 'BARMERA',
    },
    {
      postCode: '5641',
      suburb: 'BARNA',
    },
    {
      postCode: '5434',
      suburb: 'BARNDIOOTA',
    },
    {
      postCode: '5495',
      suburb: 'BAROOTA',
    },
    {
      postCode: '5351',
      suburb: 'BAROSSA GOLDFIELDS',
    },
    {
      postCode: '5520',
      suburb: 'BARUNGA GAP',
    },
    {
      postCode: '5138',
      suburb: 'BASKET RANGE',
    },
    {
      postCode: '5222',
      suburb: 'BAUDIN BEACH',
    },
    {
      postCode: '5223',
      suburb: 'BAY OF SHOALS',
    },
    {
      postCode: '5280',
      suburb: 'BEACHPORT',
    },
    {
      postCode: '5320',
      suburb: 'BEATTY',
    },
    {
      postCode: '5550',
      suburb: 'BEAUFORT',
    },
    {
      postCode: '5066',
      suburb: 'BEAUMONT',
    },
    {
      postCode: '5320',
      suburb: 'BEAUMONTS',
    },
    {
      postCode: '5042',
      suburb: 'BEDFORD PARK',
    },
    {
      postCode: '5523',
      suburb: 'BEETALOO VALLEY',
    },
    {
      postCode: '5052',
      suburb: 'BELAIR',
    },
    {
      postCode: '5491',
      suburb: 'BELALIE EAST',
    },
    {
      postCode: '5491',
      suburb: 'BELALIE NORTH',
    },
    {
      postCode: '5050',
      suburb: 'BELLEVUE HEIGHTS',
    },
    {
      postCode: '5730',
      suburb: 'BELTANA',
    },
    {
      postCode: '5730',
      suburb: 'BELTANA STATION',
    },
    {
      postCode: '5432',
      suburb: 'BELTON',
    },
    {
      postCode: '5255',
      suburb: 'BELVIDERE',
    },
    {
      postCode: '5453',
      suburb: 'BENBOURNIE',
    },
    {
      postCode: '5440',
      suburb: 'BENDA',
    },
    {
      postCode: '5343',
      suburb: 'BERRI',
    },
    {
      postCode: '5352',
      suburb: 'BETHANY',
    },
    {
      postCode: '5373',
      suburb: 'BETHEL',
    },
    {
      postCode: '5067',
      suburb: 'BEULAH PARK',
    },
    {
      postCode: '5009',
      suburb: 'BEVERLEY',
    },
    {
      postCode: '5118',
      suburb: 'BIBARINGA',
    },
    {
      postCode: '5432',
      suburb: 'BIBLIANDO',
    },
    {
      postCode: '5238',
      suburb: 'BIG BEND',
    },
    {
      postCode: '5153',
      suburb: 'BIGGS FLAT',
    },
    {
      postCode: '5720',
      suburb: 'BILLA KALINA',
    },
    {
      postCode: '5440',
      suburb: 'BILLEROO WEST',
    },
    {
      postCode: '5311',
      suburb: 'BILLIATT',
    },
    {
      postCode: '5440',
      suburb: 'BIMBOWRIE',
    },
    {
      postCode: '5440',
      suburb: 'BINDARRAH',
    },
    {
      postCode: '5262',
      suburb: 'BINNUM',
    },
    {
      postCode: '5223',
      suburb: 'BIRCHMORE',
    },
    {
      postCode: '5234',
      suburb: 'BIRDWOOD',
    },
    {
      postCode: '5015',
      suburb: 'BIRKENHEAD',
    },
    {
      postCode: '5035',
      suburb: 'BLACK FOREST',
    },
    {
      postCode: '5353',
      suburb: 'BLACK HILL',
    },
    {
      postCode: '5434',
      suburb: 'BLACK HILL STATION',
    },
    {
      postCode: '5571',
      suburb: 'BLACK POINT',
    },
    {
      postCode: '5431',
      suburb: 'BLACK ROCK',
    },
    {
      postCode: '5413',
      suburb: 'BLACK SPRINGS',
    },
    {
      postCode: '5291',
      suburb: 'BLACKFELLOWS CAVES',
    },
    {
      postCode: '5201',
      suburb: 'BLACKFELLOWS CREEK',
    },
    {
      postCode: '5275',
      suburb: 'BLACKFORD',
    },
    {
      postCode: '5051',
      suburb: 'BLACKWOOD',
    },
    {
      postCode: '5084',
      suburb: 'BLAIR ATHOL',
    },
    {
      postCode: '5114',
      suburb: 'BLAKEVIEW',
    },
    {
      postCode: '5250',
      suburb: 'BLAKISTON',
    },
    {
      postCode: '5700',
      suburb: 'BLANCHE HARBOR',
    },
    {
      postCode: '5357',
      suburb: 'BLANCHETOWN',
    },
    {
      postCode: '5255',
      suburb: 'BLETCHLEY',
    },
    {
      postCode: '5171',
      suburb: 'BLEWITT SPRINGS',
    },
    {
      postCode: '5730',
      suburb: 'BLINMAN',
    },
    {
      postCode: '5575',
      suburb: 'BLUFF BEACH',
    },
    {
      postCode: '5462',
      suburb: 'BLYTH',
    },
    {
      postCode: '5275',
      suburb: 'BOATSWAIN POINT',
    },
    {
      postCode: '5655',
      suburb: 'BOCKELBERG',
    },
    {
      postCode: '5453',
      suburb: 'BOCONNOC PARK',
    },
    {
      postCode: '5110',
      suburb: 'BOLIVAR',
    },
    {
      postCode: '5731',
      suburb: 'BOLLARDS LAGOON',
    },
    {
      postCode: '5238',
      suburb: 'BOLTO',
    },
    {
      postCode: '5719',
      suburb: 'BON BON',
    },
    {
      postCode: '5417',
      suburb: 'BOOBOROWIE',
    },
    {
      postCode: '5690',
      suburb: 'BOOKABIE',
    },
    {
      postCode: '5333',
      suburb: 'BOOKPURNONG',
    },
    {
      postCode: '5271',
      suburb: 'BOOL LAGOON',
    },
    {
      postCode: '5440',
      suburb: 'BOOLCOOMATTA',
    },
    {
      postCode: '5482',
      suburb: 'BOOLEROO CENTRE',
    },
    {
      postCode: '5330',
      suburb: 'BOOLGUN',
    },
    {
      postCode: '5633',
      suburb: 'BOONERDO',
    },
    {
      postCode: '5554',
      suburb: 'BOORS PLAIN',
    },
    {
      postCode: '5268',
      suburb: 'BORDERTOWN',
    },
    {
      postCode: '5268',
      suburb: 'BORDERTOWN SOUTH',
    },
    {
      postCode: '5309',
      suburb: 'BORRIKA',
    },
    {
      postCode: '5607',
      suburb: 'BOSTON',
    },
    {
      postCode: '5720',
      suburb: 'BOSWORTH',
    },
    {
      postCode: '5007',
      suburb: 'BOWDEN',
    },
    {
      postCode: '5374',
      suburb: 'BOWER',
    },
    {
      postCode: '5238',
      suburb: 'BOWHILL',
    },
    {
      postCode: '5461',
      suburb: 'BOWILLIA',
    },
    {
      postCode: '5550',
      suburb: 'BOWMANS',
    },
    {
      postCode: '5153',
      suburb: 'BRADBURY',
    },
    {
      postCode: '5381',
      suburb: 'BRADY CREEK',
    },
    {
      postCode: '5109',
      suburb: 'BRAHMA LODGE',
    },
    {
      postCode: '5670',
      suburb: 'BRAMFIELD',
    },
    {
      postCode: '5276',
      suburb: 'BRAY',
    },
    {
      postCode: '5320',
      suburb: 'BRENDA PARK',
    },
    {
      postCode: '5575',
      suburb: 'BRENTWOOD',
    },
    {
      postCode: '5155',
      suburb: 'BRIDGEWATER',
    },
    {
      postCode: '5381',
      suburb: 'BRIGHT',
    },
    {
      postCode: '5048',
      suburb: 'BRIGHTON',
    },
    {
      postCode: '5267',
      suburb: 'BRIMBAGO',
    },
    {
      postCode: '5253',
      suburb: 'BRINKLEY',
    },
    {
      postCode: '5464',
      suburb: 'BRINKWORTH',
    },
    {
      postCode: '5083',
      suburb: 'BROADVIEW',
    },
    {
      postCode: '5007',
      suburb: 'BROMPTON',
    },
    {
      postCode: '5607',
      suburb: 'BROOKER',
    },
    {
      postCode: '5032',
      suburb: 'BROOKLYN PARK',
    },
    {
      postCode: '5454',
      suburb: 'BROUGHTON RIVER VALLEY',
    },
    {
      postCode: '5222',
      suburb: 'BROWN BEACH',
    },
    {
      postCode: '5062',
      suburb: 'BROWN HILL CREEK',
    },
    {
      postCode: '5374',
      suburb: 'BROWNLOW',
    },
    {
      postCode: '5223',
      suburb: 'BROWNLOW KI',
    },
    {
      postCode: '5433',
      suburb: 'BRUCE',
    },
    {
      postCode: '5252',
      suburb: 'BRUKUNGA',
    },
    {
      postCode: '5374',
      suburb: 'BUCHANAN',
    },
    {
      postCode: '5118',
      suburb: 'BUCHFELDE',
    },
    {
      postCode: '5270',
      suburb: 'BUCKINGHAM',
    },
    {
      postCode: '5120',
      suburb: 'BUCKLAND PARK',
    },
    {
      postCode: '5641',
      suburb: 'BUCKLEBOO',
    },
    {
      postCode: '5311',
      suburb: 'BUGLE HUT',
    },
    {
      postCode: '5251',
      suburb: 'BUGLE RANGES',
    },
    {
      postCode: '5719',
      suburb: 'BULGUNNIA',
    },
    {
      postCode: '5157',
      suburb: 'BULL CREEK',
    },
    {
      postCode: '5440',
      suburb: 'BULLOO CREEK',
    },
    {
      postCode: '5520',
      suburb: 'BUMBUNGA',
    },
    {
      postCode: '5266',
      suburb: 'BUNBURY',
    },
    {
      postCode: '5491',
      suburb: 'BUNDALEER GARDENS',
    },
    {
      postCode: '5491',
      suburb: 'BUNDALEER NORTH',
    },
    {
      postCode: '5320',
      suburb: 'BUNDEY',
    },
    {
      postCode: '5540',
      suburb: 'BUNGAMA',
    },
    {
      postCode: '5464',
      suburb: 'BUNGAREE',
    },
    {
      postCode: '5641',
      suburb: 'BUNGEROO',
    },
    {
      postCode: '5417',
      suburb: 'BUNYUNG',
    },
    {
      postCode: '5253',
      suburb: 'BURDETT',
    },
    {
      postCode: '5520',
      suburb: 'BURNSFIELD',
    },
    {
      postCode: '5066',
      suburb: 'BURNSIDE',
    },
    {
      postCode: '5732',
      suburb: 'BURR WELL',
    },
    {
      postCode: '5417',
      suburb: 'BURRA',
    },
    {
      postCode: '5417',
      suburb: 'BURRA EASTERN DISTRICTS',
    },
    {
      postCode: '5291',
      suburb: 'BURRUNGULE',
    },
    {
      postCode: '5110',
      suburb: 'BURTON',
    },
    {
      postCode: '5560',
      suburb: 'BUTE',
    },
    {
      postCode: '5605',
      suburb: 'BUTLER',
    },
    {
      postCode: '5321',
      suburb: 'CADELL',
    },
    {
      postCode: '5321',
      suburb: 'CADELL LAGOON',
    },
    {
      postCode: '5271',
      suburb: 'CADGEE',
    },
    {
      postCode: '5671',
      suburb: 'CALCA',
    },
    {
      postCode: '5310',
      suburb: 'CALIPH',
    },
    {
      postCode: '5733',
      suburb: 'CALLANNA',
    },
    {
      postCode: '5254',
      suburb: 'CALLINGTON',
    },
    {
      postCode: '5501',
      suburb: 'CALOMBA',
    },
    {
      postCode: '5254',
      suburb: 'CALOOTE',
    },
    {
      postCode: '5341',
      suburb: 'CALPERUM STATION',
    },
    {
      postCode: '5490',
      suburb: 'CALTOWIE',
    },
    {
      postCode: '5490',
      suburb: 'CALTOWIE NORTH',
    },
    {
      postCode: '5490',
      suburb: 'CALTOWIE WEST',
    },
    {
      postCode: '5353',
      suburb: 'CAMBRAI',
    },
    {
      postCode: '5038',
      suburb: 'CAMDEN PARK',
    },
    {
      postCode: '5074',
      suburb: 'CAMPBELLTOWN',
    },
    {
      postCode: '5640',
      suburb: 'CAMPOONA',
    },
    {
      postCode: '5417',
      suburb: 'CANEGRASS',
    },
    {
      postCode: '5268',
      suburb: 'CANNAWIGARA',
    },
    {
      postCode: '5419',
      suburb: 'CANOWIE',
    },
    {
      postCode: '5420',
      suburb: 'CANOWIE BELT',
    },
    {
      postCode: '5280',
      suburb: 'CANUNDA',
    },
    {
      postCode: '5223',
      suburb: 'CAPE BORDA',
    },
    {
      postCode: '5291',
      suburb: 'CAPE DOUGLAS',
    },
    {
      postCode: '5275',
      suburb: 'CAPE JAFFA',
    },
    {
      postCode: '5204',
      suburb: 'CAPE JERVIS',
    },
    {
      postCode: '5641',
      suburb: 'CARALUE',
    },
    {
      postCode: '5680',
      suburb: 'CARAWA',
    },
    {
      postCode: '5301',
      suburb: 'CARCUMA',
    },
    {
      postCode: '5270',
      suburb: 'CAREW',
    },
    {
      postCode: '5144',
      suburb: 'CAREY GULLY',
    },
    {
      postCode: '5291',
      suburb: 'CAROLINE',
    },
    {
      postCode: '5291',
      suburb: 'CARPENTER ROCKS',
    },
    {
      postCode: '5204',
      suburb: 'CARRICKALINGA',
    },
    {
      postCode: '5432',
      suburb: 'CARRIETON',
    },
    {
      postCode: '5715',
      suburb: 'CARRIEWERLOO',
    },
    {
      postCode: '5223',
      suburb: 'CASSINI',
    },
    {
      postCode: '5076',
      suburb: 'CASTAMBUL',
    },
    {
      postCode: '5238',
      suburb: 'CAURNAMONT',
    },
    {
      postCode: '5094',
      suburb: 'CAVAN',
    },
    {
      postCode: '5422',
      suburb: 'CAVENAGH',
    },
    {
      postCode: '5291',
      suburb: 'CAVETON',
    },
    {
      postCode: '5690',
      suburb: 'CEDUNA',
    },
    {
      postCode: '5690',
      suburb: 'CEDUNA WATERS',
    },
    {
      postCode: '5341',
      suburb: 'CHAFFEY',
    },
    {
      postCode: '5231',
      suburb: 'CHAIN OF PONDS',
    },
    {
      postCode: '5680',
      suburb: 'CHANDADA',
    },
    {
      postCode: '5159',
      suburb: 'CHANDLERS HILL',
    },
    {
      postCode: '5153',
      suburb: 'CHAPEL HILL',
    },
    {
      postCode: '5253',
      suburb: 'CHAPMAN BORE',
    },
    {
      postCode: '5244',
      suburb: 'CHARLESTON',
    },
    {
      postCode: '5607',
      suburb: 'CHARLTON GULLY',
    },
    {
      postCode: '5690',
      suburb: 'CHARRA',
    },
    {
      postCode: '5014',
      suburb: 'CHELTENHAM',
    },
    {
      postCode: '5157',
      suburb: 'CHERRY GARDENS',
    },
    {
      postCode: '5134',
      suburb: 'CHERRYVILLE',
    },
    {
      postCode: '5660',
      suburb: 'CHILPENUNDA',
    },
    {
      postCode: '5573',
      suburb: 'CHINAMAN WELLS',
    },
    {
      postCode: '5680',
      suburb: 'CHINBINGINA',
    },
    {
      postCode: '5211',
      suburb: 'CHITON',
    },
    {
      postCode: '5341',
      suburb: 'CHOWILLA',
    },
    {
      postCode: '5164',
      suburb: 'CHRISTIE DOWNS',
    },
    {
      postCode: '5165',
      suburb: 'CHRISTIES BEACH',
    },
    {
      postCode: '5165',
      suburb: 'CHRISTIES BEACH NORTH',
    },
    {
      postCode: '5690',
      suburb: 'CHUNDARIA',
    },
    {
      postCode: '5000',
      suburb: 'CITY WEST CAMPUS',
    },
    {
      postCode: '5062',
      suburb: 'CLAPHAM',
    },
    {
      postCode: '5453',
      suburb: 'CLARE',
    },
    {
      postCode: '5039',
      suburb: 'CLARENCE GARDENS',
    },
    {
      postCode: '5034',
      suburb: 'CLARENCE PARK',
    },
    {
      postCode: '5157',
      suburb: 'CLARENDON',
    },
    {
      postCode: '5280',
      suburb: 'CLAY WELLS',
    },
    {
      postCode: '5238',
      suburb: 'CLAYPANS',
    },
    {
      postCode: '5256',
      suburb: 'CLAYTON BAY',
    },
    {
      postCode: '5733',
      suburb: 'CLAYTON STATION',
    },
    {
      postCode: '5085',
      suburb: 'CLEARVIEW',
    },
    {
      postCode: '5152',
      suburb: 'CLELAND',
    },
    {
      postCode: '5523',
      suburb: 'CLEMENTS GAP',
    },
    {
      postCode: '5640',
      suburb: 'CLEVE',
    },
    {
      postCode: '5733',
      suburb: 'CLIFTON HILLS STATION',
    },
    {
      postCode: '5570',
      suburb: 'CLINTON',
    },
    {
      postCode: '5570',
      suburb: 'CLINTON CENTRE',
    },
    {
      postCode: '5042',
      suburb: 'CLOVELLY PARK',
    },
    {
      postCode: '5346',
      suburb: 'COBDOGLA',
    },
    {
      postCode: '5654',
      suburb: 'COCATA',
    },
    {
      postCode: '5631',
      suburb: 'COCKALEECHIE',
    },
    {
      postCode: '5351',
      suburb: 'COCKATOO VALLEY',
    },
    {
      postCode: '5440',
      suburb: 'COCKBURN',
    },
    {
      postCode: '5607',
      suburb: 'COFFIN BAY',
    },
    {
      postCode: '5266',
      suburb: 'COLEBATCH',
    },
    {
      postCode: '5272',
      suburb: 'COLES',
    },
    {
      postCode: '5069',
      suburb: 'COLLEGE PARK',
    },
    {
      postCode: '5671',
      suburb: 'COLLEY',
    },
    {
      postCode: '5555',
      suburb: 'COLLINSFIELD',
    },
    {
      postCode: '5418',
      suburb: 'COLLINSVILLE',
    },
    {
      postCode: '5081',
      suburb: 'COLLINSWOOD',
    },
    {
      postCode: '5041',
      suburb: 'COLONEL LIGHT GARDENS',
    },
    {
      postCode: '5670',
      suburb: 'COLTON',
    },
    {
      postCode: '5277',
      suburb: 'COMAUM',
    },
    {
      postCode: '5700',
      suburb: 'COMMISSARIAT POINT',
    },
    {
      postCode: '5719',
      suburb: 'COMMONWEALTH HILL',
    },
    {
      postCode: '5291',
      suburb: 'COMPTON',
    },
    {
      postCode: '5118',
      suburb: 'CONCORDIA',
    },
    {
      postCode: '5464',
      suburb: 'CONDOWIE',
    },
    {
      postCode: '5272',
      suburb: 'CONMURRA',
    },
    {
      postCode: '5723',
      suburb: 'COOBER PEDY',
    },
    {
      postCode: '5583',
      suburb: 'COOBOWIE',
    },
    {
      postCode: '5701',
      suburb: 'COOK',
    },
    {
      postCode: '5261',
      suburb: 'COOKE PLAINS',
    },
    {
      postCode: '5670',
      suburb: 'COOLILLIE',
    },
    {
      postCode: '5341',
      suburb: 'COOLTONG',
    },
    {
      postCode: '5261',
      suburb: 'COOMANDOOK',
    },
    {
      postCode: '5267',
      suburb: 'COOMBE',
    },
    {
      postCode: '5431',
      suburb: 'COOMOOROO',
    },
    {
      postCode: '5607',
      suburb: 'COOMUNGA',
    },
    {
      postCode: '5265',
      suburb: 'COONALPYN',
    },
    {
      postCode: '5540',
      suburb: 'COONAMIA',
    },
    {
      postCode: '5263',
      suburb: 'COONAWARRA',
    },
    {
      postCode: '5719',
      suburb: 'COONDAMBO',
    },
    {
      postCode: '5690',
      suburb: 'COORABIE',
    },
    {
      postCode: '5264',
      suburb: 'COORONG',
    },
    {
      postCode: '5650',
      suburb: 'COOTRA',
    },
    {
      postCode: '5611',
      suburb: 'COOYERDOO',
    },
    {
      postCode: '5308',
      suburb: 'COPEVILLE',
    },
    {
      postCode: '5732',
      suburb: 'COPLEY',
    },
    {
      postCode: '5731',
      suburb: 'CORDILLO DOWNS',
    },
    {
      postCode: '5575',
      suburb: 'CORNY POINT',
    },
    {
      postCode: '5157',
      suburb: 'COROMANDEL EAST',
    },
    {
      postCode: '5051',
      suburb: 'COROMANDEL VALLEY',
    },
    {
      postCode: '5641',
      suburb: 'CORTLINYE',
    },
    {
      postCode: '5611',
      suburb: 'CORUNNA STATION',
    },
    {
      postCode: '5577',
      suburb: 'COUCH BEACH',
    },
    {
      postCode: '5607',
      suburb: 'COULTA',
    },
    {
      postCode: '5033',
      suburb: 'COWANDILLA',
    },
    {
      postCode: '5733',
      suburb: 'COWARIE',
    },
    {
      postCode: '5602',
      suburb: 'COWELL',
    },
    {
      postCode: '5238',
      suburb: 'COWIRRA',
    },
    {
      postCode: '5609',
      suburb: 'COWLEDS LANDING',
    },
    {
      postCode: '5432',
      suburb: 'CRADOCK',
    },
    {
      postCode: '5152',
      suburb: 'CRAFERS',
    },
    {
      postCode: '5152',
      suburb: 'CRAFERS WEST',
    },
    {
      postCode: '5051',
      suburb: 'CRAIGBURN FARM',
    },
    {
      postCode: '5114',
      suburb: 'CRAIGMORE',
    },
    {
      postCode: '5341',
      suburb: 'CRESCENT',
    },
    {
      postCode: '5235',
      suburb: 'CROMER',
    },
    {
      postCode: '5558',
      suburb: 'CROSS ROADS',
    },
    {
      postCode: '5734',
      suburb: 'CROWN POINT',
    },
    {
      postCode: '5008',
      suburb: 'CROYDON',
    },
    {
      postCode: '5008',
      suburb: 'CROYDON PARK',
    },
    {
      postCode: '5523',
      suburb: 'CRYSTAL BROOK',
    },
    {
      postCode: '5232',
      suburb: 'CUDLEE CREEK',
    },
    {
      postCode: '5261',
      suburb: 'CULBURRA',
    },
    {
      postCode: '5700',
      suburb: 'CULTANA',
    },
    {
      postCode: '5041',
      suburb: 'CUMBERLAND PARK',
    },
    {
      postCode: '5631',
      suburb: 'CUMMINS',
    },
    {
      postCode: '5660',
      suburb: 'CUNGENA',
    },
    {
      postCode: '5554',
      suburb: 'CUNLIFFE',
    },
    {
      postCode: '5571',
      suburb: 'CUNNINGHAM',
    },
    {
      postCode: '5641',
      suburb: 'CUNYARIE',
    },
    {
      postCode: '5440',
      suburb: 'CURNAMONA',
    },
    {
      postCode: '5580',
      suburb: 'CURRAMULKA',
    },
    {
      postCode: '5214',
      suburb: 'CURRENCY CREEK',
    },
    {
      postCode: '5269',
      suburb: 'CUSTON',
    },
    {
      postCode: '5222',
      suburb: 'CUTTLEFISH BAY',
    },
    {
      postCode: '5223',
      suburb: 'CYGNET RIVER',
    },
    {
      postCode: '5223',
      suburb: "D'ESTREES BAY",
    },
    {
      postCode: '5461',
      suburb: 'DALKEY',
    },
    {
      postCode: '5417',
      suburb: 'DANGGALI',
    },
    {
      postCode: '5642',
      suburb: 'DARKE PEAK',
    },
    {
      postCode: '5047',
      suburb: 'DARLINGTON',
    },
    {
      postCode: '5700',
      suburb: 'DAVENPORT',
    },
    {
      postCode: '5355',
      suburb: 'DAVEYSTON',
    },
    {
      postCode: '5113',
      suburb: 'DAVOREN PARK',
    },
    {
      postCode: '5113',
      suburb: 'DAVOREN PARK SOUTH',
    },
    {
      postCode: '5041',
      suburb: 'DAW PARK',
    },
    {
      postCode: '5252',
      suburb: 'DAWESLEY',
    },
    {
      postCode: '5422',
      suburb: 'DAWSON',
    },
    {
      postCode: '5223',
      suburb: 'DE MOLE RIVER',
    },
    {
      postCode: '872',
      suburb: 'DE ROSE HILL',
    },
    {
      postCode: '5204',
      suburb: 'DEEP CREEK',
    },
    {
      postCode: '5266',
      suburb: 'DEEPWATER',
    },
    {
      postCode: '5204',
      suburb: 'DELAMERE',
    },
    {
      postCode: '5690',
      suburb: 'DENIAL BAY',
    },
    {
      postCode: '5075',
      suburb: 'DERNANCOURT',
    },
    {
      postCode: '5330',
      suburb: 'DEVLINS POUND',
    },
    {
      postCode: '5008',
      suburb: 'DEVON PARK',
    },
    {
      postCode: '5440',
      suburb: 'DEVONBOROUGH DOWNS',
    },
    {
      postCode: '5172',
      suburb: 'DINGABLEDINGA',
    },
    {
      postCode: '5110',
      suburb: 'DIREK',
    },
    {
      postCode: '5291',
      suburb: 'DISMAL SWAMP',
    },
    {
      postCode: '5291',
      suburb: 'DONOVANS',
    },
    {
      postCode: '5157',
      suburb: 'DORSET VALE',
    },
    {
      postCode: '5601',
      suburb: 'DOUGLAS POINT',
    },
    {
      postCode: '5601',
      suburb: 'DOUGLAS POINT SOUTH',
    },
    {
      postCode: '5048',
      suburb: 'DOVER GARDENS',
    },
    {
      postCode: '5571',
      suburb: 'DOWLINGVILLE',
    },
    {
      postCode: '5094',
      suburb: 'DRY CREEK',
    },
    {
      postCode: '5501',
      suburb: 'DUBLIN',
    },
    {
      postCode: '5607',
      suburb: 'DUCK PONDS',
    },
    {
      postCode: '5222',
      suburb: 'DUDLEY EAST',
    },
    {
      postCode: '5008',
      suburb: 'DUDLEY PARK',
    },
    {
      postCode: '5222',
      suburb: 'DUDLEY WEST',
    },
    {
      postCode: '5733',
      suburb: 'DULKANINNA',
    },
    {
      postCode: '5065',
      suburb: 'DULWICH',
    },
    {
      postCode: '5223',
      suburb: 'DUNCAN',
    },
    {
      postCode: '5356',
      suburb: 'DUTTON',
    },
    {
      postCode: '5356',
      suburb: 'DUTTON EAST',
    },
    {
      postCode: '5558',
      suburb: 'EAST MOONTA',
    },
    {
      postCode: '5063',
      suburb: 'EASTWOOD',
    },
    {
      postCode: '5320',
      suburb: 'EBA',
    },
    {
      postCode: '5680',
      suburb: 'EBA ANCHORAGE',
    },
    {
      postCode: '5355',
      suburb: 'EBENEZER',
    },
    {
      postCode: '5153',
      suburb: 'ECHUNGA',
    },
    {
      postCode: '5050',
      suburb: 'EDEN HILLS',
    },
    {
      postCode: '5235',
      suburb: 'EDEN VALLEY',
    },
    {
      postCode: '5730',
      suburb: 'EDIACARA',
    },
    {
      postCode: '5630',
      suburb: 'EDILLILIE',
    },
    {
      postCode: '5111',
      suburb: 'EDINBURGH',
    },
    {
      postCode: '5113',
      suburb: 'EDINBURGH NORTH',
    },
    {
      postCode: '5111',
      suburb: 'EDINBURGH RAAF',
    },
    {
      postCode: '5583',
      suburb: 'EDITHBURGH',
    },
    {
      postCode: '5039',
      suburb: 'EDWARDSTOWN',
    },
    {
      postCode: '5291',
      suburb: 'EIGHT MILE CREEK',
    },
    {
      postCode: '5112',
      suburb: 'ELIZABETH',
    },
    {
      postCode: '5113',
      suburb: 'ELIZABETH DOWNS',
    },
    {
      postCode: '5112',
      suburb: 'ELIZABETH EAST',
    },
    {
      postCode: '5112',
      suburb: 'ELIZABETH GROVE',
    },
    {
      postCode: '5113',
      suburb: 'ELIZABETH NORTH',
    },
    {
      postCode: '5113',
      suburb: 'ELIZABETH PARK',
    },
    {
      postCode: '5112',
      suburb: 'ELIZABETH SOUTH',
    },
    {
      postCode: '5112',
      suburb: 'ELIZABETH VALE',
    },
    {
      postCode: '5670',
      suburb: 'ELLISTON',
    },
    {
      postCode: '5260',
      suburb: 'ELWOMPLE',
    },
    {
      postCode: '5713',
      suburb: 'EMEROO',
    },
    {
      postCode: '5223',
      suburb: 'EMU BAY',
    },
    {
      postCode: '5381',
      suburb: 'EMU DOWNS',
    },
    {
      postCode: '5453',
      suburb: 'EMU FLAT',
    },
    {
      postCode: '5211',
      suburb: 'ENCOUNTER BAY',
    },
    {
      postCode: '5085',
      suburb: 'ENFIELD',
    },
    {
      postCode: '5085',
      suburb: 'ENFIELD PLAZA',
    },
    {
      postCode: '5066',
      suburb: 'ERINDALE',
    },
    {
      postCode: '5734',
      suburb: 'ERINGA',
    },
    {
      postCode: '5461',
      suburb: 'ERITH',
    },
    {
      postCode: '872',
      suburb: 'ERNABELLA (PUKATJA)',
    },
    {
      postCode: '5422',
      suburb: 'ERSKINE',
    },
    {
      postCode: '5440',
      suburb: 'ERUDINA',
    },
    {
      postCode: '5733',
      suburb: 'ETADUNNA',
    },
    {
      postCode: '5015',
      suburb: 'ETHELTON',
    },
    {
      postCode: '5253',
      suburb: 'ETTRICK',
    },
    {
      postCode: '5374',
      suburb: 'EUDUNDA',
    },
    {
      postCode: '5431',
      suburb: 'EURELIA',
    },
    {
      postCode: '5454',
      suburb: 'EUROMINA',
    },
    {
      postCode: '5069',
      suburb: 'EVANDALE',
    },
    {
      postCode: '5116',
      suburb: 'EVANSTON',
    },
    {
      postCode: '5116',
      suburb: 'EVANSTON GARDENS',
    },
    {
      postCode: '5116',
      suburb: 'EVANSTON PARK',
    },
    {
      postCode: '5116',
      suburb: 'EVANSTON SOUTH',
    },
    {
      postCode: '5723',
      suburb: 'EVELYN DOWNS',
    },
    {
      postCode: '5461',
      suburb: 'EVERARD CENTRAL',
    },
    {
      postCode: '5035',
      suburb: 'EVERARD PARK',
    },
    {
      postCode: '5019',
      suburb: 'EXETER',
    },
    {
      postCode: '5950',
      suburb: 'EXPORT PARK',
    },
    {
      postCode: '5121',
      suburb: 'EYRE',
    },
    {
      postCode: '5126',
      suburb: 'FAIRVIEW PARK',
    },
    {
      postCode: '5601',
      suburb: 'FALSE BAY',
    },
    {
      postCode: '5417',
      suburb: 'FARAWAY HILL',
    },
    {
      postCode: '5731',
      suburb: 'FARINA',
    },
    {
      postCode: '5731',
      suburb: 'FARINA STATION',
    },
    {
      postCode: '5607',
      suburb: 'FARM BEACH',
    },
    {
      postCode: '5416',
      suburb: 'FARRELL FLAT',
    },
    {
      postCode: '5070',
      suburb: 'FELIXSTOW',
    },
    {
      postCode: '5010',
      suburb: 'FERRYDEN PARK',
    },
    {
      postCode: '5265',
      suburb: 'FIELD',
    },
    {
      postCode: '5023',
      suburb: 'FINDON',
    },
    {
      postCode: '5255',
      suburb: 'FINNISS',
    },
    {
      postCode: '5070',
      suburb: 'FIRLE',
    },
    {
      postCode: '5502',
      suburb: 'FISCHER',
    },
    {
      postCode: '5354',
      suburb: 'FISHER',
    },
    {
      postCode: '5522',
      suburb: 'FISHERMAN BAY',
    },
    {
      postCode: '5601',
      suburb: 'FITZGERALD BAY',
    },
    {
      postCode: '5082',
      suburb: 'FITZROY',
    },
    {
      postCode: '5238',
      suburb: 'FIVE MILES',
    },
    {
      postCode: '5159',
      suburb: 'FLAGSTAFF HILL',
    },
    {
      postCode: '5153',
      suburb: 'FLAXLEY',
    },
    {
      postCode: '5235',
      suburb: 'FLAXMAN VALLEY',
    },
    {
      postCode: '5223',
      suburb: 'FLINDERS CHASE',
    },
    {
      postCode: '5025',
      suburb: 'FLINDERS PARK',
    },
    {
      postCode: '5434',
      suburb: 'FLINDERS RANGES',
    },
    {
      postCode: '5042',
      suburb: 'FLINDERS UNIVERSITY',
    },
    {
      postCode: '5440',
      suburb: 'FLORINA STATION',
    },
    {
      postCode: '5373',
      suburb: 'FORDS',
    },
    {
      postCode: '5139',
      suburb: 'FOREST RANGE',
    },
    {
      postCode: '5035',
      suburb: 'FORESTVILLE',
    },
    {
      postCode: '5233',
      suburb: 'FORRESTON',
    },
    {
      postCode: '5238',
      suburb: 'FORSTER',
    },
    {
      postCode: '5577',
      suburb: 'FOUL BAY',
    },
    {
      postCode: '5607',
      suburb: 'FOUNTAIN',
    },
    {
      postCode: '5690',
      suburb: 'FOWLERS BAY',
    },
    {
      postCode: '5272',
      suburb: 'FOX',
    },
    {
      postCode: '5238',
      suburb: 'FRAHNS',
    },
    {
      postCode: '5262',
      suburb: 'FRANCES',
    },
    {
      postCode: '5421',
      suburb: 'FRANKLYN',
    },
    {
      postCode: '5374',
      suburb: 'FRANKTON',
    },
    {
      postCode: '5238',
      suburb: 'FRAYVILLE',
    },
    {
      postCode: '5372',
      suburb: 'FREELING',
    },
    {
      postCode: '5063',
      suburb: 'FREWVILLE',
    },
    {
      postCode: '5440',
      suburb: 'FROME DOWNS',
    },
    {
      postCode: '5024',
      suburb: 'FULHAM',
    },
    {
      postCode: '5024',
      suburb: 'FULHAM GARDENS',
    },
    {
      postCode: '5063',
      suburb: 'FULLARTON',
    },
    {
      postCode: '5280',
      suburb: 'FURNER',
    },
    {
      postCode: '5308',
      suburb: 'GALGA',
    },
    {
      postCode: '5732',
      suburb: 'GAMMON RANGES',
    },
    {
      postCode: '5015',
      suburb: 'GARDEN ISLAND',
    },
    {
      postCode: '5118',
      suburb: 'GAWLER',
    },
    {
      postCode: '5118',
      suburb: 'GAWLER BELT',
    },
    {
      postCode: '5118',
      suburb: 'GAWLER EAST',
    },
    {
      postCode: '5655',
      suburb: 'GAWLER RANGES',
    },
    {
      postCode: '5118',
      suburb: 'GAWLER RIVER',
    },
    {
      postCode: '5118',
      suburb: 'GAWLER SOUTH',
    },
    {
      postCode: '5118',
      suburb: 'GAWLER WEST',
    },
    {
      postCode: '5255',
      suburb: 'GEMMELLS',
    },
    {
      postCode: '5472',
      suburb: 'GEORGETOWN',
    },
    {
      postCode: '5094',
      suburb: 'GEPPS CROSS',
    },
    {
      postCode: '5301',
      suburb: 'GERANIUM',
    },
    {
      postCode: '5381',
      suburb: 'GERANIUM PLAINS',
    },
    {
      postCode: '5343',
      suburb: 'GERARD',
    },
    {
      postCode: '5291',
      suburb: 'GERMAN CREEK',
    },
    {
      postCode: '5280',
      suburb: 'GERMAN FLAT',
    },
    {
      postCode: '5495',
      suburb: 'GERMEIN BAY',
    },
    {
      postCode: '5731',
      suburb: 'GIDGEALPA',
    },
    {
      postCode: '5253',
      suburb: 'GIFFORD HILL',
    },
    {
      postCode: '5081',
      suburb: 'GILBERTON',
    },
    {
      postCode: '5411',
      suburb: 'GILES CORNER',
    },
    {
      postCode: '5453',
      suburb: 'GILLENTOWN',
    },
    {
      postCode: '5611',
      suburb: 'GILLES DOWNS',
    },
    {
      postCode: '5086',
      suburb: 'GILLES PLAINS',
    },
    {
      postCode: '5013',
      suburb: 'GILLMAN',
    },
    {
      postCode: '5473',
      suburb: 'GLADSTONE',
    },
    {
      postCode: '5037',
      suburb: 'GLANDORE',
    },
    {
      postCode: '5015',
      suburb: 'GLANVILLE',
    },
    {
      postCode: '5064',
      suburb: 'GLEN OSMOND',
    },
    {
      postCode: '5052',
      suburb: 'GLENALTA',
    },
    {
      postCode: '5291',
      suburb: 'GLENBURNIE',
    },
    {
      postCode: '5291',
      suburb: 'GLENCOE',
    },
    {
      postCode: '5719',
      suburb: 'GLENDAMBO',
    },
    {
      postCode: '5045',
      suburb: 'GLENELG',
    },
    {
      postCode: '5045',
      suburb: 'GLENELG EAST',
    },
    {
      postCode: '5045',
      suburb: 'GLENELG NORTH',
    },
    {
      postCode: '5045',
      suburb: 'GLENELG SOUTH',
    },
    {
      postCode: '5044',
      suburb: 'GLENGOWRIE',
    },
    {
      postCode: '5277',
      suburb: 'GLENROY',
    },
    {
      postCode: '5065',
      suburb: 'GLENSIDE',
    },
    {
      postCode: '5064',
      suburb: 'GLENUNGA',
    },
    {
      postCode: '5110',
      suburb: 'GLOBE DERBY PARK',
    },
    {
      postCode: '5344',
      suburb: 'GLOSSOP',
    },
    {
      postCode: '5417',
      suburb: 'GLUEPOT',
    },
    {
      postCode: '5070',
      suburb: 'GLYNDE',
    },
    {
      postCode: '5070',
      suburb: 'GLYNDE PLAZA',
    },
    {
      postCode: '5125',
      suburb: 'GOLDEN GROVE',
    },
    {
      postCode: '5125',
      suburb: 'GOLDEN GROVE VILLAGE',
    },
    {
      postCode: '5322',
      suburb: 'GOLDEN HEIGHTS',
    },
    {
      postCode: '5352',
      suburb: 'GOMERSAL',
    },
    {
      postCode: '5330',
      suburb: 'GOOD HOPE LANDING',
    },
    {
      postCode: '5034',
      suburb: 'GOODWOOD',
    },
    {
      postCode: '5214',
      suburb: 'GOOLWA',
    },
    {
      postCode: '5214',
      suburb: 'GOOLWA BEACH',
    },
    {
      postCode: '5214',
      suburb: 'GOOLWA NORTH',
    },
    {
      postCode: '5214',
      suburb: 'GOOLWA SOUTH',
    },
    {
      postCode: '5223',
      suburb: 'GOSSE',
    },
    {
      postCode: '5114',
      suburb: 'GOULD CREEK',
    },
    {
      postCode: '5461',
      suburb: 'GOYDER',
    },
    {
      postCode: '5502',
      suburb: 'GRACE PLAINS',
    },
    {
      postCode: '5440',
      suburb: 'GRAMPUS',
    },
    {
      postCode: '5022',
      suburb: 'GRANGE',
    },
    {
      postCode: '5107',
      suburb: 'GREEN FIELDS',
    },
    {
      postCode: '5153',
      suburb: 'GREEN HILLS RANGE',
    },
    {
      postCode: '5607',
      suburb: 'GREEN PATCH',
    },
    {
      postCode: '5086',
      suburb: 'GREENACRES',
    },
    {
      postCode: '5253',
      suburb: 'GREENBANKS',
    },
    {
      postCode: '5140',
      suburb: 'GREENHILL',
    },
    {
      postCode: '5360',
      suburb: 'GREENOCK',
    },
    {
      postCode: '5272',
      suburb: 'GREENWAYS',
    },
    {
      postCode: '5125',
      suburb: 'GREENWITH',
    },
    {
      postCode: '5096',
      suburb: 'GULFVIEW HEIGHTS',
    },
    {
      postCode: '5471',
      suburb: 'GULNARE',
    },
    {
      postCode: '5417',
      suburb: 'GUM CREEK',
    },
    {
      postCode: '5730',
      suburb: 'GUM CREEK STATION',
    },
    {
      postCode: '5233',
      suburb: 'GUMERACHA',
    },
    {
      postCode: '5343',
      suburb: 'GURRA GURRA',
    },
    {
      postCode: '5163',
      suburb: 'HACKHAM',
    },
    {
      postCode: '5163',
      suburb: 'HACKHAM WEST',
    },
    {
      postCode: '5454',
      suburb: 'HACKLINS CORNER',
    },
    {
      postCode: '5069',
      suburb: 'HACKNEY',
    },
    {
      postCode: '5245',
      suburb: 'HAHNDORF',
    },
    {
      postCode: '5223',
      suburb: 'HAINES',
    },
    {
      postCode: '5461',
      suburb: 'HALBURY',
    },
    {
      postCode: '5309',
      suburb: 'HALIDON',
    },
    {
      postCode: '5000',
      suburb: 'HALIFAX STREET',
    },
    {
      postCode: '5381',
      suburb: 'HALLELUJAH HILLS',
    },
    {
      postCode: '5419',
      suburb: 'HALLETT',
    },
    {
      postCode: '5158',
      suburb: 'HALLETT COVE',
    },
    {
      postCode: '5642',
      suburb: 'HAMBIDGE',
    },
    {
      postCode: '5373',
      suburb: 'HAMILTON',
    },
    {
      postCode: '5558',
      suburb: 'HAMLEY',
    },
    {
      postCode: '5401',
      suburb: 'HAMLEY BRIDGE',
    },
    {
      postCode: '5431',
      suburb: 'HAMMOND',
    },
    {
      postCode: '5374',
      suburb: 'HAMPDEN',
    },
    {
      postCode: '5086',
      suburb: 'HAMPSTEAD GARDENS',
    },
    {
      postCode: '5374',
      suburb: 'HANSBOROUGH',
    },
    {
      postCode: '5417',
      suburb: 'HANSON',
    },
    {
      postCode: '5159',
      suburb: 'HAPPY VALLEY',
    },
    {
      postCode: '5575',
      suburb: 'HARDWICKE BAY',
    },
    {
      postCode: '5422',
      suburb: 'HARDY',
    },
    {
      postCode: '5244',
      suburb: 'HARROGATE',
    },
    {
      postCode: '5464',
      suburb: 'HART',
    },
    {
      postCode: '5255',
      suburb: 'HARTLEY',
    },
    {
      postCode: '5680',
      suburb: 'HASLAM',
    },
    {
      postCode: '5280',
      suburb: 'HATHERLEIGH',
    },
    {
      postCode: '5434',
      suburb: 'HAWKER',
    },
    {
      postCode: '5330',
      suburb: 'HAWKS NEST STATION',
    },
    {
      postCode: '5607',
      suburb: 'HAWSON',
    },
    {
      postCode: '5062',
      suburb: 'HAWTHORN',
    },
    {
      postCode: '5051',
      suburb: 'HAWTHORNDENE',
    },
    {
      postCode: '5204',
      suburb: 'HAY FLAT',
    },
    {
      postCode: '5252',
      suburb: 'HAY VALLEY',
    },
    {
      postCode: '5211',
      suburb: 'HAYBOROUGH',
    },
    {
      postCode: '5066',
      suburb: 'HAZELWOOD PARK',
    },
    {
      postCode: '5153',
      suburb: 'HEATHFIELD',
    },
    {
      postCode: '5068',
      suburb: 'HEATHPOOL',
    },
    {
      postCode: '5073',
      suburb: 'HECTORVILLE',
    },
    {
      postCode: '5014',
      suburb: 'HENDON',
    },
    {
      postCode: '5022',
      suburb: 'HENLEY BEACH',
    },
    {
      postCode: '5022',
      suburb: 'HENLEY BEACH SOUTH',
    },
    {
      postCode: '5118',
      suburb: 'HEWETT',
    },
    {
      postCode: '5089',
      suburb: 'HIGHBURY',
    },
    {
      postCode: '5063',
      suburb: 'HIGHGATE',
    },
    {
      postCode: '5255',
      suburb: 'HIGHLAND VALLEY',
    },
    {
      postCode: '5453',
      suburb: 'HILL RIVER',
    },
    {
      postCode: '5112',
      suburb: 'HILLBANK',
    },
    {
      postCode: '5086',
      suburb: 'HILLCREST',
    },
    {
      postCode: '5116',
      suburb: 'HILLIER',
    },
    {
      postCode: '5455',
      suburb: 'HILLTOWN',
    },
    {
      postCode: '5717',
      suburb: 'HILTABA',
    },
    {
      postCode: '5033',
      suburb: 'HILTON',
    },
    {
      postCode: '5033',
      suburb: 'HILTON PLAZA',
    },
    {
      postCode: '5603',
      suburb: 'HINCKS',
    },
    {
      postCode: '5007',
      suburb: 'HINDMARSH',
    },
    {
      postCode: '5214',
      suburb: 'HINDMARSH ISLAND',
    },
    {
      postCode: '5202',
      suburb: 'HINDMARSH TIERS',
    },
    {
      postCode: '5211',
      suburb: 'HINDMARSH VALLEY',
    },
    {
      postCode: '5088',
      suburb: 'HOLDEN HILL',
    },
    {
      postCode: '5330',
      suburb: 'HOLDER',
    },
    {
      postCode: '5330',
      suburb: 'HOLDER SIDING',
    },
    {
      postCode: '5432',
      suburb: 'HOLOWILIENA',
    },
    {
      postCode: '5432',
      suburb: 'HOLOWILIENA SOUTH',
    },
    {
      postCode: '5576',
      suburb: 'HONITON',
    },
    {
      postCode: '5172',
      suburb: 'HOPE FOREST',
    },
    {
      postCode: '5555',
      suburb: 'HOPE GAP',
    },
    {
      postCode: '5090',
      suburb: 'HOPE VALLEY',
    },
    {
      postCode: '5491',
      suburb: 'HORNSDALE',
    },
    {
      postCode: '5141',
      suburb: 'HORSNELL GULLY',
    },
    {
      postCode: '5461',
      suburb: 'HOSKIN CORNER',
    },
    {
      postCode: '5131',
      suburb: 'HOUGHTON',
    },
    {
      postCode: '5048',
      suburb: 'HOVE',
    },
    {
      postCode: '5453',
      suburb: 'HOYLETON',
    },
    {
      postCode: '5523',
      suburb: 'HUDDLESTON',
    },
    {
      postCode: '5114',
      suburb: 'HUMBUG SCRUB',
    },
    {
      postCode: '5163',
      suburb: 'HUNTFIELD HEIGHTS',
    },
    {
      postCode: '5000',
      suburb: 'HUTT STREET',
    },
    {
      postCode: '5061',
      suburb: 'HYDE PARK',
    },
    {
      postCode: '5262',
      suburb: 'HYNAM',
    },
    {
      postCode: '5715',
      suburb: 'ILLEROO',
    },
    {
      postCode: '872',
      suburb: 'INDULKANA (IWANTJA)',
    },
    {
      postCode: '5098',
      suburb: 'INGLE FARM',
    },
    {
      postCode: '5133',
      suburb: 'INGLEWOOD',
    },
    {
      postCode: '5723',
      suburb: 'INGOMAR',
    },
    {
      postCode: '5550',
      suburb: 'INKERMAN',
    },
    {
      postCode: '5680',
      suburb: 'INKSTER',
    },
    {
      postCode: '5211',
      suburb: 'INMAN VALLEY',
    },
    {
      postCode: '5731',
      suburb: 'INNAMINCKA',
    },
    {
      postCode: '5577',
      suburb: 'INNESTON',
    },
    {
      postCode: '5611',
      suburb: 'IRON BARON',
    },
    {
      postCode: '5611',
      suburb: 'IRON KNOB',
    },
    {
      postCode: '5153',
      suburb: 'IRONBANK',
    },
    {
      postCode: '5222',
      suburb: 'IRONSTONE',
    },
    {
      postCode: '5222',
      suburb: 'ISLAND BEACH',
    },
    {
      postCode: '5713',
      suburb: 'ISLAND LAGOON',
    },
    {
      postCode: '872',
      suburb: 'IWANTJA',
    },
    {
      postCode: '5301',
      suburb: 'JABUK',
    },
    {
      postCode: '5571',
      suburb: 'JAMES WELL',
    },
    {
      postCode: '5491',
      suburb: 'JAMESTOWN',
    },
    {
      postCode: '5640',
      suburb: 'JAMIESON',
    },
    {
      postCode: '5554',
      suburb: 'JERICHO',
    },
    {
      postCode: '5554',
      suburb: 'JERUSALEM',
    },
    {
      postCode: '5259',
      suburb: 'JERVOIS',
    },
    {
      postCode: '5271',
      suburb: 'JOANNA',
    },
    {
      postCode: '5431',
      suburb: 'JOHNBURGH',
    },
    {
      postCode: '5070',
      suburb: 'JOSLIN',
    },
    {
      postCode: '5238',
      suburb: 'JULANKA HOLDINGS',
    },
    {
      postCode: '5374',
      suburb: 'JULIA',
    },
    {
      postCode: '5153',
      suburb: 'JUPITER CREEK',
    },
    {
      postCode: '5554',
      suburb: 'KADINA',
    },
    {
      postCode: '5552',
      suburb: 'KAINTON',
    },
    {
      postCode: '5440',
      suburb: 'KALABITY',
    },
    {
      postCode: '5733',
      suburb: 'KALAMURINA',
    },
    {
      postCode: '5690',
      suburb: 'KALANBI',
    },
    {
      postCode: '5278',
      suburb: 'KALANGADOO',
    },
    {
      postCode: '5118',
      suburb: 'KALBEEBA',
    },
    {
      postCode: '5655',
      suburb: 'KALDOONERA',
    },
    {
      postCode: '872',
      suburb: 'KALKA',
    },
    {
      postCode: '5440',
      suburb: 'KALKAROO',
    },
    {
      postCode: '5550',
      suburb: 'KALLORA',
    },
    {
      postCode: '872',
      suburb: 'KALTJITI',
    },
    {
      postCode: '5157',
      suburb: 'KANGARILLA',
    },
    {
      postCode: '5118',
      suburb: 'KANGAROO FLAT',
    },
    {
      postCode: '5222',
      suburb: 'KANGAROO HEAD',
    },
    {
      postCode: '5280',
      suburb: 'KANGAROO INN',
    },
    {
      postCode: '5252',
      suburb: 'KANMANTOO',
    },
    {
      postCode: '5330',
      suburb: 'KANNI',
    },
    {
      postCode: '872',
      suburb: 'KANPI',
    },
    {
      postCode: '5434',
      suburb: 'KANYAKA',
    },
    {
      postCode: '5632',
      suburb: 'KAPINNIE',
    },
    {
      postCode: '5670',
      suburb: 'KAPPAWANTA',
    },
    {
      postCode: '5373',
      suburb: 'KAPUNDA',
    },
    {
      postCode: '5223',
      suburb: 'KARATTA',
    },
    {
      postCode: '5654',
      suburb: 'KARCULTABY',
    },
    {
      postCode: '5632',
      suburb: 'KARKOO',
    },
    {
      postCode: '5307',
      suburb: 'KAROONDA',
    },
    {
      postCode: '5304',
      suburb: 'KARTE',
    },
    {
      postCode: '5343',
      suburb: 'KATARAPKO',
    },
    {
      postCode: '5611',
      suburb: 'KATUNGA STATION',
    },
    {
      postCode: '5275',
      suburb: 'KEILIRA',
    },
    {
      postCode: '5267',
      suburb: 'KEITH',
    },
    {
      postCode: '5607',
      suburb: 'KELLIDIE BAY',
    },
    {
      postCode: '5641',
      suburb: 'KELLY',
    },
    {
      postCode: '5068',
      suburb: 'KENSINGTON',
    },
    {
      postCode: '5068',
      suburb: 'KENSINGTON GARDENS',
    },
    {
      postCode: '5068',
      suburb: 'KENSINGTON PARK',
    },
    {
      postCode: '5067',
      suburb: 'KENT TOWN',
    },
    {
      postCode: '5071',
      suburb: 'KENT TOWN DC',
    },
    {
      postCode: '5233',
      suburb: 'KENTON VALLEY',
    },
    {
      postCode: '5259',
      suburb: 'KEPA',
    },
    {
      postCode: '5271',
      suburb: 'KEPPOCH',
    },
    {
      postCode: '5231',
      suburb: 'KERSBROOK',
    },
    {
      postCode: '5035',
      suburb: 'KESWICK',
    },
    {
      postCode: '5035',
      suburb: 'KESWICK TERMINAL',
    },
    {
      postCode: '5353',
      suburb: 'KEYNETON',
    },
    {
      postCode: '5261',
      suburb: 'KI KI',
    },
    {
      postCode: '5607',
      suburb: 'KIANA',
    },
    {
      postCode: '5025',
      suburb: 'KIDMAN PARK',
    },
    {
      postCode: '5642',
      suburb: 'KIELPA',
    },
    {
      postCode: '5084',
      suburb: 'KILBURN',
    },
    {
      postCode: '5084',
      suburb: 'KILBURN NORTH',
    },
    {
      postCode: '5009',
      suburb: 'KILKENNY',
    },
    {
      postCode: '5641',
      suburb: 'KIMBA',
    },
    {
      postCode: '5719',
      suburb: 'KINGOONYA',
    },
    {
      postCode: '5034',
      suburb: 'KINGS PARK',
    },
    {
      postCode: '5223',
      suburb: 'KINGSCOTE',
    },
    {
      postCode: '5118',
      suburb: 'KINGSFORD',
    },
    {
      postCode: '5331',
      suburb: 'KINGSTON ON MURRAY',
    },
    {
      postCode: '5049',
      suburb: 'KINGSTON PARK',
    },
    {
      postCode: '5275',
      suburb: 'KINGSTON SE',
    },
    {
      postCode: '5062',
      suburb: 'KINGSWOOD',
    },
    {
      postCode: '5087',
      suburb: 'KLEMZIG',
    },
    {
      postCode: '5223',
      suburb: 'KOHINOOR',
    },
    {
      postCode: '5717',
      suburb: 'KOKATHA',
    },
    {
      postCode: '5717',
      suburb: 'KOLENDO',
    },
    {
      postCode: '5717',
      suburb: 'KONDOOLKA',
    },
    {
      postCode: '5270',
      suburb: 'KONGAL',
    },
    {
      postCode: '5353',
      suburb: 'KONGOLIA',
    },
    {
      postCode: '5291',
      suburb: 'KONGORONG',
    },
    {
      postCode: '5661',
      suburb: 'KOOLGERA',
    },
    {
      postCode: '5464',
      suburb: 'KOOLUNGA',
    },
    {
      postCode: '5575',
      suburb: 'KOOLYWURTIE',
    },
    {
      postCode: '5440',
      suburb: 'KOONAMORE',
    },
    {
      postCode: '5650',
      suburb: 'KOONGAWA',
    },
    {
      postCode: '5690',
      suburb: 'KOONIBBA',
    },
    {
      postCode: '5417',
      suburb: 'KOONOONA',
    },
    {
      postCode: '5373',
      suburb: 'KOONUNGA',
    },
    {
      postCode: '5279',
      suburb: 'KOORINE',
    },
    {
      postCode: '5558',
      suburb: 'KOOROONA',
    },
    {
      postCode: '5713',
      suburb: 'KOOTABERRA',
    },
    {
      postCode: '5271',
      suburb: 'KOPPAMURRA',
    },
    {
      postCode: '5607',
      suburb: 'KOPPIO',
    },
    {
      postCode: '5502',
      suburb: 'KORUNYE',
    },
    {
      postCode: '5304',
      suburb: 'KRINGIN',
    },
    {
      postCode: '5352',
      suburb: 'KRONDORF',
    },
    {
      postCode: '5278',
      suburb: 'KRONGART',
    },
    {
      postCode: '5115',
      suburb: 'KUDLA',
    },
    {
      postCode: '5201',
      suburb: 'KUITPO',
    },
    {
      postCode: '5172',
      suburb: 'KUITPO COLONY',
    },
    {
      postCode: '5552',
      suburb: 'KULPARA',
    },
    {
      postCode: '5037',
      suburb: 'KURRALTA PARK',
    },
    {
      postCode: '5651',
      suburb: 'KYANCUTTA',
    },
    {
      postCode: '5453',
      suburb: 'KYBUNGA',
    },
    {
      postCode: '5262',
      suburb: 'KYBYBOLITE',
    },
    {
      postCode: '5172',
      suburb: 'KYEEMA',
    },
    {
      postCode: '5267',
      suburb: 'LAFFER',
    },
    {
      postCode: '5259',
      suburb: 'LAKE ALBERT',
    },
    {
      postCode: '5259',
      suburb: 'LAKE ALEXANDRINA',
    },
    {
      postCode: '5238',
      suburb: 'LAKE CARLET',
    },
    {
      postCode: '5717',
      suburb: 'LAKE EVERARD',
    },
    {
      postCode: '5733',
      suburb: 'LAKE EYRE',
    },
    {
      postCode: '5440',
      suburb: 'LAKE FROME',
    },
    {
      postCode: '5717',
      suburb: 'LAKE GAIRDNER',
    },
    {
      postCode: '5611',
      suburb: 'LAKE GILLES',
    },
    {
      postCode: '5719',
      suburb: 'LAKE HARRIS',
    },
    {
      postCode: '5717',
      suburb: 'LAKE MACFARLANE',
    },
    {
      postCode: '5255',
      suburb: 'LAKE PLAINS',
    },
    {
      postCode: '5713',
      suburb: 'LAKE TORRENS',
    },
    {
      postCode: '5713',
      suburb: 'LAKE TORRENS STATION',
    },
    {
      postCode: '5555',
      suburb: 'LAKE VIEW',
    },
    {
      postCode: '872',
      suburb: 'LAMBINA',
    },
    {
      postCode: '5302',
      suburb: 'LAMEROO',
    },
    {
      postCode: '5255',
      suburb: 'LANGHORNE CREEK',
    },
    {
      postCode: '5353',
      suburb: 'LANGS LANDING',
    },
    {
      postCode: '5016',
      suburb: 'LARGS BAY',
    },
    {
      postCode: '5016',
      suburb: 'LARGS NORTH',
    },
    {
      postCode: '5480',
      suburb: 'LAURA',
    },
    {
      postCode: '5680',
      suburb: 'LAURA BAY',
    },
    {
      postCode: '5271',
      suburb: 'LAURIE PARK',
    },
    {
      postCode: '5068',
      suburb: 'LEABROOK',
    },
    {
      postCode: '5452',
      suburb: 'LEASINGHAM',
    },
    {
      postCode: '5150',
      suburb: 'LEAWOOD GARDENS',
    },
    {
      postCode: '5731',
      suburb: 'LEIGH CREEK',
    },
    {
      postCode: '5731',
      suburb: 'LEIGH CREEK STATION',
    },
    {
      postCode: '5417',
      suburb: 'LEIGHTON',
    },
    {
      postCode: '5240',
      suburb: 'LENSWOOD',
    },
    {
      postCode: '5501',
      suburb: 'LEWISTON',
    },
    {
      postCode: '5355',
      suburb: 'LIGHT PASS',
    },
    {
      postCode: '5085',
      suburb: 'LIGHTSVIEW',
    },
    {
      postCode: '5715',
      suburb: 'LINCOLN GAP',
    },
    {
      postCode: '5607',
      suburb: 'LINCOLN NATIONAL PARK',
    },
    {
      postCode: '5065',
      suburb: 'LINDEN PARK',
    },
    {
      postCode: '5320',
      suburb: 'LINDLEY',
    },
    {
      postCode: '5731',
      suburb: 'LINDON',
    },
    {
      postCode: '5410',
      suburb: 'LINWOOD',
    },
    {
      postCode: '5607',
      suburb: 'LIPSON',
    },
    {
      postCode: '5607',
      suburb: 'LITTLE DOUGLAS',
    },
    {
      postCode: '5250',
      suburb: 'LITTLEHAMPTON',
    },
    {
      postCode: '5241',
      suburb: 'LOBETHAL',
    },
    {
      postCode: '5271',
      suburb: 'LOCHABER',
    },
    {
      postCode: '5510',
      suburb: 'LOCHIEL',
    },
    {
      postCode: '5633',
      suburb: 'LOCK',
    },
    {
      postCode: '5655',
      suburb: 'LOCKES CLAYPAN',
    },
    {
      postCode: '5032',
      suburb: 'LOCKLEYS',
    },
    {
      postCode: '5253',
      suburb: 'LONG FLAT',
    },
    {
      postCode: '5501',
      suburb: 'LONG PLAINS',
    },
    {
      postCode: '5153',
      suburb: 'LONGWOOD',
    },
    {
      postCode: '5160',
      suburb: 'LONSDALE',
    },
    {
      postCode: '5160',
      suburb: 'LONSDALE DC',
    },
    {
      postCode: '5607',
      suburb: 'LOUTH BAY',
    },
    {
      postCode: '5345',
      suburb: 'LOVEDAY',
    },
    {
      postCode: '5268',
      suburb: 'LOWAN VALE',
    },
    {
      postCode: '5330',
      suburb: 'LOWBANK',
    },
    {
      postCode: '5540',
      suburb: 'LOWER BROUGHTON',
    },
    {
      postCode: '5131',
      suburb: 'LOWER HERMITAGE',
    },
    {
      postCode: '5211',
      suburb: 'LOWER INMAN VALLEY',
    },
    {
      postCode: '5501',
      suburb: 'LOWER LIGHT',
    },
    {
      postCode: '5062',
      suburb: 'LOWER MITCHAM',
    },
    {
      postCode: '5333',
      suburb: 'LOXTON',
    },
    {
      postCode: '5333',
      suburb: 'LOXTON NORTH',
    },
    {
      postCode: '5272',
      suburb: 'LUCINDALE',
    },
    {
      postCode: '5602',
      suburb: 'LUCKY BAY',
    },
    {
      postCode: '5731',
      suburb: 'LYNDHURST',
    },
    {
      postCode: '5351',
      suburb: 'LYNDOCH',
    },
    {
      postCode: '5062',
      suburb: 'LYNTON',
    },
    {
      postCode: '5343',
      suburb: 'LYRUP',
    },
    {
      postCode: '5277',
      suburb: 'MAAOUPE',
    },
    {
      postCode: '5723',
      suburb: 'MABEL CREEK',
    },
    {
      postCode: '5153',
      suburb: 'MACCLESFIELD',
    },
    {
      postCode: '5121',
      suburb: 'MACDONALD PARK',
    },
    {
      postCode: '5223',
      suburb: 'MACGILLIVRAY',
    },
    {
      postCode: '5734',
      suburb: 'MACUMBA',
    },
    {
      postCode: '5280',
      suburb: 'MAGAREY',
    },
    {
      postCode: '5400',
      suburb: 'MAGDALA',
    },
    {
      postCode: '5311',
      suburb: 'MAGGEA',
    },
    {
      postCode: '5072',
      suburb: 'MAGILL',
    },
    {
      postCode: '5072',
      suburb: 'MAGILL NORTH',
    },
    {
      postCode: '5717',
      suburb: 'MAHANEWO',
    },
    {
      postCode: '5573',
      suburb: 'MAITLAND',
    },
    {
      postCode: '5267',
      suburb: 'MAKIN',
    },
    {
      postCode: '5259',
      suburb: 'MALINONG',
    },
    {
      postCode: '5502',
      suburb: 'MALLALA',
    },
    {
      postCode: '5311',
      suburb: 'MALPAS',
    },
    {
      postCode: '5690',
      suburb: 'MALTEE',
    },
    {
      postCode: '5061',
      suburb: 'MALVERN',
    },
    {
      postCode: '5495',
      suburb: 'MAMBRAY CREEK',
    },
    {
      postCode: '5602',
      suburb: 'MANGALO',
    },
    {
      postCode: '5440',
      suburb: 'MANNA HILL',
    },
    {
      postCode: '5422',
      suburb: 'MANNANARIE',
    },
    {
      postCode: '5732',
      suburb: 'MANNERS WELL',
    },
    {
      postCode: '5086',
      suburb: 'MANNINGHAM',
    },
    {
      postCode: '5238',
      suburb: 'MANNUM',
    },
    {
      postCode: '5414',
      suburb: 'MANOORA',
    },
    {
      postCode: '5012',
      suburb: 'MANSFIELD PARK',
    },
    {
      postCode: '5308',
      suburb: 'MANTUNG',
    },
    {
      postCode: '5440',
      suburb: 'MANUNDA STATION',
    },
    {
      postCode: '5307',
      suburb: 'MARAMA',
    },
    {
      postCode: '5355',
      suburb: 'MARANANGA',
    },
    {
      postCode: '5137',
      suburb: 'MARBLE HILL',
    },
    {
      postCode: '5271',
      suburb: 'MARCOLLAT',
    },
    {
      postCode: '5070',
      suburb: 'MARDEN',
    },
    {
      postCode: '5049',
      suburb: 'MARINO',
    },
    {
      postCode: '5043',
      suburb: 'MARION',
    },
    {
      postCode: '5575',
      suburb: 'MARION BAY',
    },
    {
      postCode: '5330',
      suburb: 'MARKARANKA',
    },
    {
      postCode: '5354',
      suburb: 'MARKS LANDING',
    },
    {
      postCode: '5724',
      suburb: 'MARLA',
    },
    {
      postCode: '5033',
      suburb: 'MARLESTON',
    },
    {
      postCode: '5033',
      suburb: 'MARLESTON DC',
    },
    {
      postCode: '5464',
      suburb: 'MAROLA',
    },
    {
      postCode: '5413',
      suburb: 'MARRABEL',
    },
    {
      postCode: '5733',
      suburb: 'MARREE',
    },
    {
      postCode: '5733',
      suburb: 'MARREE STATION',
    },
    {
      postCode: '5068',
      suburb: 'MARRYATVILLE',
    },
    {
      postCode: '5440',
      suburb: 'MARTINS WELL',
    },
    {
      postCode: '5680',
      suburb: 'MARYVALE',
    },
    {
      postCode: '5170',
      suburb: 'MASLIN BEACH',
    },
    {
      postCode: '5554',
      suburb: 'MATTA FLAT',
    },
    {
      postCode: '5320',
      suburb: 'MAUDE',
    },
    {
      postCode: '5095',
      suburb: 'MAWSON LAKES',
    },
    {
      postCode: '5454',
      suburb: 'MAYFIELD',
    },
    {
      postCode: '5069',
      suburb: 'MAYLANDS',
    },
    {
      postCode: '5357',
      suburb: 'MCBEAN POUND',
    },
    {
      postCode: '5267',
      suburb: 'MCCALLUM',
    },
    {
      postCode: '5211',
      suburb: 'MCCRACKEN',
    },
    {
      postCode: '5723',
      suburb: 'MCDOUALL PEAK',
    },
    {
      postCode: '5157',
      suburb: 'MCHARG CREEK',
    },
    {
      postCode: '5171',
      suburb: 'MCLAREN FLAT',
    },
    {
      postCode: '5171',
      suburb: 'MCLAREN VALE',
    },
    {
      postCode: '5201',
      suburb: 'MEADOWS',
    },
    {
      postCode: '5081',
      suburb: 'MEDINDIE',
    },
    {
      postCode: '5081',
      suburb: 'MEDINDIE GARDENS',
    },
    {
      postCode: '5483',
      suburb: 'MELROSE',
    },
    {
      postCode: '5039',
      suburb: 'MELROSE PARK',
    },
    {
      postCode: '5039',
      suburb: 'MELROSE PARK DC',
    },
    {
      postCode: '5552',
      suburb: 'MELTON',
    },
    {
      postCode: '5440',
      suburb: 'MELTON STATION',
    },
    {
      postCode: '5264',
      suburb: 'MENINGIE',
    },
    {
      postCode: '5264',
      suburb: 'MENINGIE EAST',
    },
    {
      postCode: '5264',
      suburb: 'MENINGIE WEST',
    },
    {
      postCode: '5223',
      suburb: 'MENZIES',
    },
    {
      postCode: '5308',
      suburb: 'MERCUNDA',
    },
    {
      postCode: '5690',
      suburb: 'MERGHINY',
    },
    {
      postCode: '5311',
      suburb: 'MERIBAH',
    },
    {
      postCode: '5523',
      suburb: 'MERRITON',
    },
    {
      postCode: '5731',
      suburb: 'MERTY MERTY',
    },
    {
      postCode: '5501',
      suburb: 'MIDDLE BEACH',
    },
    {
      postCode: '5223',
      suburb: 'MIDDLE RIVER',
    },
    {
      postCode: '5609',
      suburb: 'MIDDLEBACK RANGE',
    },
    {
      postCode: '5213',
      suburb: 'MIDDLETON',
    },
    {
      postCode: '5602',
      suburb: 'MIDGEE',
    },
    {
      postCode: '5291',
      suburb: 'MIL-LEL',
    },
    {
      postCode: '5256',
      suburb: 'MILANG',
    },
    {
      postCode: '5031',
      suburb: 'MILE END',
    },
    {
      postCode: '5031',
      suburb: 'MILE END SOUTH',
    },
    {
      postCode: '5237',
      suburb: 'MILENDELLA',
    },
    {
      postCode: '5231',
      suburb: 'MILLBROOK',
    },
    {
      postCode: '5720',
      suburb: 'MILLERS CREEK',
    },
    {
      postCode: '5280',
      suburb: 'MILLICENT',
    },
    {
      postCode: '5034',
      suburb: 'MILLSWOOD',
    },
    {
      postCode: '5602',
      suburb: 'MILTALIE',
    },
    {
      postCode: '872',
      suburb: 'MIMILI',
    },
    {
      postCode: '5602',
      suburb: 'MINBRIE',
    },
    {
      postCode: '5431',
      suburb: 'MINBURRA',
    },
    {
      postCode: '5431',
      suburb: 'MINBURRA PLAIN',
    },
    {
      postCode: '5431',
      suburb: 'MINBURRA STATION',
    },
    {
      postCode: '5309',
      suburb: 'MINDARIE',
    },
    {
      postCode: '5440',
      suburb: 'MINGARY',
    },
    {
      postCode: '5291',
      suburb: 'MINGBOOL',
    },
    {
      postCode: '5575',
      suburb: 'MINLATON',
    },
    {
      postCode: '5654',
      suburb: 'MINNIPA',
    },
    {
      postCode: '5415',
      suburb: 'MINTARO',
    },
    {
      postCode: '5422',
      suburb: 'MINVALARA',
    },
    {
      postCode: '5700',
      suburb: 'MIRANDA',
    },
    {
      postCode: '5062',
      suburb: 'MITCHAM',
    },
    {
      postCode: '5062',
      suburb: 'MITCHAM SHOPPING CENTRE',
    },
    {
      postCode: '5632',
      suburb: 'MITCHELL',
    },
    {
      postCode: '5043',
      suburb: 'MITCHELL PARK',
    },
    {
      postCode: '5602',
      suburb: 'MITCHELLVILLE',
    },
    {
      postCode: '5690',
      suburb: 'MITCHIDY MOOLA',
    },
    {
      postCode: '5169',
      suburb: 'MOANA',
    },
    {
      postCode: '5253',
      suburb: 'MOBILONG',
    },
    {
      postCode: '5353',
      suburb: 'MOCULTA',
    },
    {
      postCode: '5092',
      suburb: 'MODBURY',
    },
    {
      postCode: '5092',
      suburb: 'MODBURY HEIGHTS',
    },
    {
      postCode: '5092',
      suburb: 'MODBURY NORTH',
    },
    {
      postCode: '5278',
      suburb: 'MOERLONG',
    },
    {
      postCode: '5254',
      suburb: 'MONARTO',
    },
    {
      postCode: '5254',
      suburb: 'MONARTO SOUTH',
    },
    {
      postCode: '5342',
      suburb: 'MONASH',
    },
    {
      postCode: '5277',
      suburb: 'MONBULLA',
    },
    {
      postCode: '5417',
      suburb: 'MONGOLATA',
    },
    {
      postCode: '5134',
      suburb: 'MONTACUTE',
    },
    {
      postCode: '5172',
      suburb: 'MONTARRA',
    },
    {
      postCode: '5253',
      suburb: 'MONTEITH',
    },
    {
      postCode: '5432',
      suburb: 'MOOCKRA',
    },
    {
      postCode: '5607',
      suburb: 'MOODY',
    },
    {
      postCode: '5732',
      suburb: 'MOOLAWATANA',
    },
    {
      postCode: '5440',
      suburb: 'MOOLEULOOLOO',
    },
    {
      postCode: '5730',
      suburb: 'MOOLOOLOO',
    },
    {
      postCode: '5717',
      suburb: 'MOONAREE',
    },
    {
      postCode: '5558',
      suburb: 'MOONTA',
    },
    {
      postCode: '5558',
      suburb: 'MOONTA BAY',
    },
    {
      postCode: '5558',
      suburb: 'MOONTA MINES',
    },
    {
      postCode: '5291',
      suburb: 'MOORAK',
    },
    {
      postCode: '5730',
      suburb: 'MOORILLAH',
    },
    {
      postCode: '5301',
      suburb: 'MOORLANDS',
    },
    {
      postCode: '5332',
      suburb: 'MOOROOK',
    },
    {
      postCode: '5332',
      suburb: 'MOOROOK SOUTH',
    },
    {
      postCode: '5355',
      suburb: 'MOPPA',
    },
    {
      postCode: '5431',
      suburb: 'MORCHARD',
    },
    {
      postCode: '5320',
      suburb: 'MORGAN',
    },
    {
      postCode: '5371',
      suburb: 'MORN HILL',
    },
    {
      postCode: '5162',
      suburb: 'MORPHETT VALE',
    },
    {
      postCode: '5320',
      suburb: 'MORPHETTS FLAT',
    },
    {
      postCode: '5043',
      suburb: 'MORPHETTVILLE',
    },
    {
      postCode: '5671',
      suburb: 'MORTANA',
    },
    {
      postCode: '5641',
      suburb: 'MOSELEY',
    },
    {
      postCode: '5214',
      suburb: 'MOSQUITO HILL',
    },
    {
      postCode: '5730',
      suburb: 'MOTPENA',
    },
    {
      postCode: '5713',
      suburb: 'MOUNT ARDEN',
    },
    {
      postCode: '5251',
      suburb: 'MOUNT BARKER',
    },
    {
      postCode: '5251',
      suburb: 'MOUNT BARKER JUNCTION',
    },
    {
      postCode: '5251',
      suburb: 'MOUNT BARKER SPRINGS',
    },
    {
      postCode: '5251',
      suburb: 'MOUNT BARKER SUMMIT',
    },
    {
      postCode: '5723',
      suburb: 'MOUNT BARRY',
    },
    {
      postCode: '5275',
      suburb: 'MOUNT BENSON',
    },
    {
      postCode: '5418',
      suburb: 'MOUNT BRYAN',
    },
    {
      postCode: '5419',
      suburb: 'MOUNT BRYAN EAST',
    },
    {
      postCode: '5279',
      suburb: 'MOUNT BURR',
    },
    {
      postCode: '5267',
      suburb: 'MOUNT CHARLES',
    },
    {
      postCode: '5723',
      suburb: 'MOUNT CLARENCE STATION',
    },
    {
      postCode: '5210',
      suburb: 'MOUNT COMPASS',
    },
    {
      postCode: '5671',
      suburb: 'MOUNT COOPER',
    },
    {
      postCode: '5351',
      suburb: 'MOUNT CRAWFORD',
    },
    {
      postCode: '5654',
      suburb: 'MOUNT DAMPER',
    },
    {
      postCode: '5607',
      suburb: 'MOUNT DRUMMOND',
    },
    {
      postCode: '5607',
      suburb: 'MOUNT DUTTON BAY',
    },
    {
      postCode: '5720',
      suburb: 'MOUNT EBA',
    },
    {
      postCode: '5730',
      suburb: 'MOUNT FALKLAND',
    },
    {
      postCode: '5731',
      suburb: 'MOUNT FREELING',
    },
    {
      postCode: '5290',
      suburb: 'MOUNT GAMBIER',
    },
    {
      postCode: '5291',
      suburb: 'MOUNT GAMBIER',
    },
    {
      postCode: '5291',
      suburb: 'MOUNT GAMBIER EAST',
    },
    {
      postCode: '5291',
      suburb: 'MOUNT GAMBIER WEST',
    },
    {
      postCode: '5155',
      suburb: 'MOUNT GEORGE',
    },
    {
      postCode: '5434',
      suburb: 'MOUNT HAVELOCK',
    },
    {
      postCode: '5607',
      suburb: 'MOUNT HOPE',
    },
    {
      postCode: '5717',
      suburb: 'MOUNT IVE',
    },
    {
      postCode: '5211',
      suburb: 'MOUNT JAGGED',
    },
    {
      postCode: '5670',
      suburb: 'MOUNT JOY',
    },
    {
      postCode: '5271',
      suburb: 'MOUNT LIGHT',
    },
    {
      postCode: '5731',
      suburb: 'MOUNT LYNDHURST',
    },
    {
      postCode: '5210',
      suburb: 'MOUNT MAGNIFICENT',
    },
    {
      postCode: '5374',
      suburb: 'MOUNT MARY',
    },
    {
      postCode: '5279',
      suburb: 'MOUNT MCINTYRE',
    },
    {
      postCode: '5353',
      suburb: 'MOUNT MCKENZIE',
    },
    {
      postCode: '5255',
      suburb: 'MOUNT OBSERVATION',
    },
    {
      postCode: '5064',
      suburb: 'MOUNT OSMOND',
    },
    {
      postCode: '5235',
      suburb: 'MOUNT PLEASANT',
    },
    {
      postCode: '5734',
      suburb: 'MOUNT SARAH',
    },
    {
      postCode: '5291',
      suburb: 'MOUNT SCHANK',
    },
    {
      postCode: '5732',
      suburb: 'MOUNT SERLE',
    },
    {
      postCode: '5461',
      suburb: 'MOUNT TEMPLETON',
    },
    {
      postCode: '5244',
      suburb: 'MOUNT TORRENS',
    },
    {
      postCode: '5440',
      suburb: 'MOUNT VICTOR STATION',
    },
    {
      postCode: '5720',
      suburb: 'MOUNT VIVIAN',
    },
    {
      postCode: '5670',
      suburb: 'MOUNT WEDGE',
    },
    {
      postCode: '5723',
      suburb: 'MOUNT WILLOUGHBY',
    },
    {
      postCode: '5271',
      suburb: 'MOYHALL',
    },
    {
      postCode: '5680',
      suburb: 'MUDAMUCKLA',
    },
    {
      postCode: '5732',
      suburb: 'MULGA VIEW',
    },
    {
      postCode: '5731',
      suburb: 'MULGARIA',
    },
    {
      postCode: '5719',
      suburb: 'MULGATHING',
    },
    {
      postCode: '5255',
      suburb: 'MULGUNDAWA',
    },
    {
      postCode: '5733',
      suburb: 'MULKA',
    },
    {
      postCode: '5608',
      suburb: 'MULLAQUANA',
    },
    {
      postCode: '5733',
      suburb: 'MULOORINA',
    },
    {
      postCode: '5440',
      suburb: 'MULYUNGARIE',
    },
    {
      postCode: '5700',
      suburb: 'MUNDALLIO',
    },
    {
      postCode: '5440',
      suburb: 'MUNDI MUNDI',
    },
    {
      postCode: '5340',
      suburb: 'MUNDIC CREEK',
    },
    {
      postCode: '5214',
      suburb: 'MUNDOO ISLAND',
    },
    {
      postCode: '5555',
      suburb: 'MUNDOORA',
    },
    {
      postCode: '5733',
      suburb: 'MUNDOWDNA',
    },
    {
      postCode: '5270',
      suburb: 'MUNDULLA',
    },
    {
      postCode: '5270',
      suburb: 'MUNDULLA WEST',
    },
    {
      postCode: '5733',
      suburb: 'MUNGERANIE',
    },
    {
      postCode: '5115',
      suburb: 'MUNNO PARA',
    },
    {
      postCode: '5115',
      suburb: 'MUNNO PARA DOWNS',
    },
    {
      postCode: '5115',
      suburb: 'MUNNO PARA WEST',
    },
    {
      postCode: '5320',
      suburb: 'MURBKO',
    },
    {
      postCode: '5607',
      suburb: 'MURDINGA',
    },
    {
      postCode: '5642',
      suburb: 'MURLONG',
    },
    {
      postCode: '5609',
      suburb: 'MURNINNIE BEACH',
    },
    {
      postCode: '5731',
      suburb: 'MURNPEOWIE',
    },
    {
      postCode: '872',
      suburb: 'MURPUTJA',
    },
    {
      postCode: '5253',
      suburb: 'MURRAWONG',
    },
    {
      postCode: '5253',
      suburb: 'MURRAY BRIDGE',
    },
    {
      postCode: '5254',
      suburb: 'MURRAY BRIDGE',
    },
    {
      postCode: '5253',
      suburb: 'MURRAY BRIDGE EAST',
    },
    {
      postCode: '5253',
      suburb: 'MURRAY BRIDGE NORTH',
    },
    {
      postCode: '5253',
      suburb: 'MURRAY BRIDGE SOUTH',
    },
    {
      postCode: '5481',
      suburb: 'MURRAY TOWN',
    },
    {
      postCode: '5340',
      suburb: 'MURTHO',
    },
    {
      postCode: '5221',
      suburb: 'MUSTON',
    },
    {
      postCode: '5440',
      suburb: 'MUTOOROO',
    },
    {
      postCode: '5153',
      suburb: 'MYLOR',
    },
    {
      postCode: '5611',
      suburb: 'MYOLA STATION',
    },
    {
      postCode: '5254',
      suburb: 'MYPOLONGA',
    },
    {
      postCode: '5202',
      suburb: 'MYPONGA',
    },
    {
      postCode: '5202',
      suburb: 'MYPONGA BEACH',
    },
    {
      postCode: '5064',
      suburb: 'MYRTLE BANK',
    },
    {
      postCode: '5731',
      suburb: 'MYRTLE SPRINGS',
    },
    {
      postCode: '5440',
      suburb: 'NACKARA',
    },
    {
      postCode: '5690',
      suburb: 'NADIA',
    },
    {
      postCode: '5354',
      suburb: 'NAIDIA',
    },
    {
      postCode: '5083',
      suburb: 'NAILSWORTH',
    },
    {
      postCode: '5360',
      suburb: 'NAIN',
    },
    {
      postCode: '5252',
      suburb: 'NAIRNE',
    },
    {
      postCode: '5255',
      suburb: 'NALPA',
    },
    {
      postCode: '5558',
      suburb: 'NALYAPPA',
    },
    {
      postCode: '5690',
      suburb: 'NANBONA',
    },
    {
      postCode: '5210',
      suburb: 'NANGKITA',
    },
    {
      postCode: '5277',
      suburb: 'NANGWARRY',
    },
    {
      postCode: '5550',
      suburb: 'NANTAWARRA',
    },
    {
      postCode: '5540',
      suburb: 'NAPPERBY',
    },
    {
      postCode: '5271',
      suburb: 'NARACOORTE',
    },
    {
      postCode: '5655',
      suburb: 'NARLABY',
    },
    {
      postCode: '5523',
      suburb: 'NARRIDY',
    },
    {
      postCode: '5730',
      suburb: 'NARRINA',
    },
    {
      postCode: '5259',
      suburb: 'NARRUNG',
    },
    {
      postCode: '5259',
      suburb: 'NATURI',
    },
    {
      postCode: '5374',
      suburb: 'NEALES FLAT',
    },
    {
      postCode: '5495',
      suburb: 'NECTAR BROOK',
    },
    {
      postCode: '5540',
      suburb: 'NELSHABY',
    },
    {
      postCode: '5291',
      suburb: 'NENE VALLEY',
    },
    {
      postCode: '5732',
      suburb: 'NEPABUNNA',
    },
    {
      postCode: '5223',
      suburb: 'NEPEAN BAY',
    },
    {
      postCode: '5062',
      suburb: 'NETHERBY',
    },
    {
      postCode: '5301',
      suburb: 'NETHERTON',
    },
    {
      postCode: '5037',
      suburb: 'NETLEY',
    },
    {
      postCode: '5440',
      suburb: 'NETLEY GAP',
    },
    {
      postCode: '5015',
      suburb: 'NEW PORT',
    },
    {
      postCode: '5333',
      suburb: 'NEW RESIDENCE',
    },
    {
      postCode: '5554',
      suburb: 'NEW TOWN',
    },
    {
      postCode: '5357',
      suburb: 'NEW WELL',
    },
    {
      postCode: '5223',
      suburb: 'NEWLAND',
    },
    {
      postCode: '5074',
      suburb: 'NEWTON',
    },
    {
      postCode: '5374',
      suburb: 'NGAPALA',
    },
    {
      postCode: '5302',
      suburb: 'NGARKAT',
    },
    {
      postCode: '5238',
      suburb: 'NILDOTTIE',
    },
    {
      postCode: '5730',
      suburb: 'NILPENA',
    },
    {
      postCode: '5723',
      suburb: 'NILPINNA STATION',
    },
    {
      postCode: '5560',
      suburb: 'NINNES',
    },
    {
      postCode: '5168',
      suburb: 'NOARLUNGA CENTRE',
    },
    {
      postCode: '5168',
      suburb: 'NOARLUNGA DOWNS',
    },
    {
      postCode: '5717',
      suburb: 'NONNING',
    },
    {
      postCode: '5276',
      suburb: 'NORA CREINA',
    },
    {
      postCode: '5204',
      suburb: 'NORMANVILLE',
    },
    {
      postCode: '5006',
      suburb: 'NORTH ADELAIDE',
    },
    {
      postCode: '5006',
      suburb: 'NORTH ADELAIDE MELBOURNE ST',
    },
    {
      postCode: '5556',
      suburb: 'NORTH BEACH',
    },
    {
      postCode: '5417',
      suburb: 'NORTH BOOBOROWIE',
    },
    {
      postCode: '5048',
      suburb: 'NORTH BRIGHTON',
    },
    {
      postCode: '5223',
      suburb: 'NORTH CAPE',
    },
    {
      postCode: '5018',
      suburb: 'NORTH HAVEN',
    },
    {
      postCode: '5431',
      suburb: 'NORTH HILLS',
    },
    {
      postCode: '5732',
      suburb: 'NORTH MOOLOOLOO',
    },
    {
      postCode: '5558',
      suburb: 'NORTH MOONTA',
    },
    {
      postCode: '5037',
      suburb: 'NORTH PLYMPTON',
    },
    {
      postCode: '5607',
      suburb: 'NORTH SHIELDS',
    },
    {
      postCode: '5320',
      suburb: 'NORTH WEST BEND',
    },
    {
      postCode: '5558',
      suburb: 'NORTH YELTA',
    },
    {
      postCode: '5253',
      suburb: 'NORTHERN HEIGHTS',
    },
    {
      postCode: '5085',
      suburb: 'NORTHFIELD',
    },
    {
      postCode: '5085',
      suburb: 'NORTHGATE',
    },
    {
      postCode: '5136',
      suburb: 'NORTON SUMMIT',
    },
    {
      postCode: '5067',
      suburb: 'NORWOOD',
    },
    {
      postCode: '5067',
      suburb: 'NORWOOD SOUTH',
    },
    {
      postCode: '5357',
      suburb: 'NOTTS WELL',
    },
    {
      postCode: '5040',
      suburb: 'NOVAR GARDENS',
    },
    {
      postCode: '5690',
      suburb: 'NULLARBOR',
    },
    {
      postCode: '5680',
      suburb: 'NUNJIKOMPITA',
    },
    {
      postCode: '5355',
      suburb: 'NURIOOTPA',
    },
    {
      postCode: '5523',
      suburb: 'NUROM',
    },
    {
      postCode: '5256',
      suburb: 'NURRAGI',
    },
    {
      postCode: '872',
      suburb: 'NYAPARI',
    },
    {
      postCode: '5158',
      suburb: "O'HALLORAN HILL",
    },
    {
      postCode: '5166',
      suburb: "O'SULLIVAN BEACH",
    },
    {
      postCode: '5690',
      suburb: 'OAK VALLEY',
    },
    {
      postCode: '5243',
      suburb: 'OAKBANK',
    },
    {
      postCode: '5086',
      suburb: 'OAKDEN',
    },
    {
      postCode: '5713',
      suburb: 'OAKDEN HILLS',
    },
    {
      postCode: '5046',
      suburb: 'OAKLANDS PARK',
    },
    {
      postCode: '5417',
      suburb: 'OAKVALE STATION',
    },
    {
      postCode: '5291',
      suburb: 'OB FLAT',
    },
    {
      postCode: '5440',
      suburb: 'OLARY',
    },
    {
      postCode: '5341',
      suburb: 'OLD CALPERUM',
    },
    {
      postCode: '5417',
      suburb: 'OLD KOOMOOLOO',
    },
    {
      postCode: '5168',
      suburb: 'OLD NOARLUNGA',
    },
    {
      postCode: '5161',
      suburb: 'OLD REYNELLA',
    },
    {
      postCode: '5238',
      suburb: 'OLD TEAL FLAT',
    },
    {
      postCode: '5725',
      suburb: 'OLYMPIC DAM',
    },
    {
      postCode: '5114',
      suburb: 'ONE TREE HILL',
    },
    {
      postCode: '5163',
      suburb: 'ONKAPARINGA HEIGHTS',
    },
    {
      postCode: '5163',
      suburb: 'ONKAPARINGA HILLS',
    },
    {
      postCode: '5422',
      suburb: 'OODLA WIRRA',
    },
    {
      postCode: '5734',
      suburb: 'OODNADATTA',
    },
    {
      postCode: '5730',
      suburb: 'ORATUNGA STATION',
    },
    {
      postCode: '5431',
      suburb: 'ORROROO',
    },
    {
      postCode: '5017',
      suburb: 'OSBORNE',
    },
    {
      postCode: '5013',
      suburb: 'OTTOWAY',
    },
    {
      postCode: '5440',
      suburb: 'OULNINA',
    },
    {
      postCode: '5440',
      suburb: 'OULNINA PARK',
    },
    {
      postCode: '5440',
      suburb: 'OUTALPA',
    },
    {
      postCode: '5018',
      suburb: 'OUTER HARBOR',
    },
    {
      postCode: '5330',
      suburb: 'OVERLAND CORNER',
    },
    {
      postCode: '5082',
      suburb: 'OVINGHAM',
    },
    {
      postCode: '5460',
      suburb: 'OWEN',
    },
    {
      postCode: '5271',
      suburb: 'PADTHAWAY',
    },
    {
      postCode: '5245',
      suburb: 'PAECHTOWN',
    },
    {
      postCode: '5172',
      suburb: 'PAGES FLAT',
    },
    {
      postCode: '5357',
      suburb: 'PAISLEY',
    },
    {
      postCode: '5670',
      suburb: 'PALKAGEE',
    },
    {
      postCode: '5254',
      suburb: 'PALLAMANA',
    },
    {
      postCode: '5237',
      suburb: 'PALMER',
    },
    {
      postCode: '5733',
      suburb: 'PANDIE PANDIE',
    },
    {
      postCode: '5715',
      suburb: 'PANDURRA',
    },
    {
      postCode: '5652',
      suburb: 'PANEY',
    },
    {
      postCode: '5641',
      suburb: 'PANITYA',
    },
    {
      postCode: '5041',
      suburb: 'PANORAMA',
    },
    {
      postCode: '5096',
      suburb: 'PARA HILLS',
    },
    {
      postCode: '5096',
      suburb: 'PARA HILLS WEST',
    },
    {
      postCode: '5093',
      suburb: 'PARA VISTA',
    },
    {
      postCode: '5730',
      suburb: 'PARACHILNA',
    },
    {
      postCode: '5132',
      suburb: 'PARACOMBE',
    },
    {
      postCode: '5075',
      suburb: 'PARADISE',
    },
    {
      postCode: '5106',
      suburb: 'PARAFIELD',
    },
    {
      postCode: '5107',
      suburb: 'PARAFIELD GARDENS',
    },
    {
      postCode: '5720',
      suburb: 'PARAKYLIA',
    },
    {
      postCode: '5108',
      suburb: 'PARALOWIE',
    },
    {
      postCode: '5558',
      suburb: 'PARAMATTA',
    },
    {
      postCode: '5422',
      suburb: 'PARATOO',
    },
    {
      postCode: '5203',
      suburb: 'PARAWA',
    },
    {
      postCode: '5417',
      suburb: 'PARCOOLA',
    },
    {
      postCode: '5501',
      suburb: 'PARHAM',
    },
    {
      postCode: '5303',
      suburb: 'PARILLA',
    },
    {
      postCode: '5340',
      suburb: 'PARINGA',
    },
    {
      postCode: '5201',
      suburb: 'PARIS CREEK',
    },
    {
      postCode: '5043',
      suburb: 'PARK HOLME',
    },
    {
      postCode: '5063',
      suburb: 'PARKSIDE',
    },
    {
      postCode: '5422',
      suburb: 'PARNAROO',
    },
    {
      postCode: '5220',
      suburb: 'PARNDANA',
    },
    {
      postCode: '5301',
      suburb: 'PARRAKIE',
    },
    {
      postCode: '5575',
      suburb: 'PARSONS BEACH',
    },
    {
      postCode: '5311',
      suburb: 'PARUNA',
    },
    {
      postCode: '5042',
      suburb: 'PASADENA',
    },
    {
      postCode: '5552',
      suburb: 'PASKEVILLE',
    },
    {
      postCode: '5333',
      suburb: 'PATA',
    },
    {
      postCode: '5070',
      suburb: 'PAYNEHAM',
    },
    {
      postCode: '5070',
      suburb: 'PAYNEHAM SOUTH',
    },
    {
      postCode: '5301',
      suburb: 'PEAKE',
    },
    {
      postCode: '5607',
      suburb: 'PEARLAH',
    },
    {
      postCode: '5304',
      suburb: 'PEEBINGA',
    },
    {
      postCode: '5374',
      suburb: 'PEEP HILL',
    },
    {
      postCode: '5431',
      suburb: 'PEKINA',
    },
    {
      postCode: '5222',
      suburb: 'PELICAN LAGOON',
    },
    {
      postCode: '5291',
      suburb: 'PELICAN POINT',
    },
    {
      postCode: '5238',
      suburb: 'PELLARING FLAT',
    },
    {
      postCode: '5121',
      suburb: 'PENFIELD',
    },
    {
      postCode: '5121',
      suburb: 'PENFIELD GARDENS',
    },
    {
      postCode: '5222',
      suburb: 'PENNESHAW',
    },
    {
      postCode: '5013',
      suburb: 'PENNINGTON',
    },
    {
      postCode: '5277',
      suburb: 'PENOLA',
    },
    {
      postCode: '5690',
      suburb: 'PENONG',
    },
    {
      postCode: '5353',
      suburb: 'PENRICE',
    },
    {
      postCode: '5453',
      suburb: 'PENWORTHAM',
    },
    {
      postCode: '5680',
      suburb: 'PERLUBIE',
    },
    {
      postCode: '5713',
      suburb: 'PERNATTY',
    },
    {
      postCode: '5308',
      suburb: 'PERPONDA',
    },
    {
      postCode: '5422',
      suburb: 'PETERBOROUGH',
    },
    {
      postCode: '5016',
      suburb: 'PETERHEAD',
    },
    {
      postCode: '5571',
      suburb: 'PETERSVILLE',
    },
    {
      postCode: '5267',
      suburb: 'PETHERICK',
    },
    {
      postCode: '5680',
      suburb: 'PETINA',
    },
    {
      postCode: '5252',
      suburb: 'PETWOOD',
    },
    {
      postCode: '5351',
      suburb: 'PEWSEY VALE',
    },
    {
      postCode: '5151',
      suburb: 'PICCADILLY',
    },
    {
      postCode: '5680',
      suburb: 'PIEDNIPPIE',
    },
    {
      postCode: '5340',
      suburb: 'PIKE RIVER',
    },
    {
      postCode: '5720',
      suburb: 'PIMBA',
    },
    {
      postCode: '5661',
      suburb: 'PIMBAACLA',
    },
    {
      postCode: '5732',
      suburb: 'PINDA SPRINGS',
    },
    {
      postCode: '5419',
      suburb: 'PINE CREEK',
    },
    {
      postCode: '5440',
      suburb: 'PINE CREEK STATION',
    },
    {
      postCode: '5269',
      suburb: 'PINE HILL',
    },
    {
      postCode: '5571',
      suburb: 'PINE POINT',
    },
    {
      postCode: '5417',
      suburb: 'PINE VALLEY STATION',
    },
    {
      postCode: '5460',
      suburb: 'PINERY',
    },
    {
      postCode: '5680',
      suburb: 'PINJARRA STATION',
    },
    {
      postCode: '5641',
      suburb: 'PINKAWILLINIE',
    },
    {
      postCode: '5400',
      suburb: 'PINKERTON PLAINS',
    },
    {
      postCode: '5275',
      suburb: 'PINKS BEACH',
    },
    {
      postCode: '5304',
      suburb: 'PINNAROO',
    },
    {
      postCode: '872',
      suburb: 'PIPALYATJARA',
    },
    {
      postCode: '5540',
      suburb: 'PIRIE EAST',
    },
    {
      postCode: '5277',
      suburb: 'PLEASANT PARK',
    },
    {
      postCode: '5440',
      suburb: 'PLUMBAGO',
    },
    {
      postCode: '5038',
      suburb: 'PLYMPTON',
    },
    {
      postCode: '5038',
      suburb: 'PLYMPTON PARK',
    },
    {
      postCode: '5607',
      suburb: 'POINT BOSTON',
    },
    {
      postCode: '5601',
      suburb: 'POINT LOWLY',
    },
    {
      postCode: '5601',
      suburb: 'POINT LOWLY NORTH',
    },
    {
      postCode: '5259',
      suburb: 'POINT MCLEAY',
    },
    {
      postCode: '5374',
      suburb: 'POINT PASS',
    },
    {
      postCode: '5573',
      suburb: 'POINT PEARCE',
    },
    {
      postCode: '5577',
      suburb: 'POINT SOUTTAR',
    },
    {
      postCode: '5256',
      suburb: 'POINT STURT',
    },
    {
      postCode: '5575',
      suburb: 'POINT TURTON',
    },
    {
      postCode: '5670',
      suburb: 'POLDA',
    },
    {
      postCode: '5453',
      suburb: 'POLISH HILL RIVER',
    },
    {
      postCode: '5259',
      suburb: 'POLTALLOCH',
    },
    {
      postCode: '5238',
      suburb: 'POMPOOTA',
    },
    {
      postCode: '5238',
      suburb: 'PONDE',
    },
    {
      postCode: '5655',
      suburb: 'POOCHERA',
    },
    {
      postCode: '5268',
      suburb: 'POOGINAGORIC',
    },
    {
      postCode: '5330',
      suburb: 'POOGINOOK',
    },
    {
      postCode: '5607',
      suburb: 'POONINDIE',
    },
    {
      postCode: '5095',
      suburb: 'POORAKA',
    },
    {
      postCode: '5222',
      suburb: 'PORKY FLAT',
    },
    {
      postCode: '5015',
      suburb: 'PORT ADELAIDE',
    },
    {
      postCode: '5552',
      suburb: 'PORT ARTHUR',
    },
    {
      postCode: '5700',
      suburb: 'PORT AUGUSTA',
    },
    {
      postCode: '5701',
      suburb: 'PORT AUGUSTA',
    },
    {
      postCode: '5700',
      suburb: 'PORT AUGUSTA NORTH',
    },
    {
      postCode: '5700',
      suburb: 'PORT AUGUSTA WEST',
    },
    {
      postCode: '5601',
      suburb: 'PORT BONYTHON',
    },
    {
      postCode: '5522',
      suburb: 'PORT BROUGHTON',
    },
    {
      postCode: '5540',
      suburb: 'PORT DAVIS',
    },
    {
      postCode: '5212',
      suburb: 'PORT ELLIOT',
    },
    {
      postCode: '5501',
      suburb: 'PORT GAWLER',
    },
    {
      postCode: '5495',
      suburb: 'PORT GERMEIN',
    },
    {
      postCode: '5602',
      suburb: 'PORT GIBBON',
    },
    {
      postCode: '5558',
      suburb: 'PORT HUGHES',
    },
    {
      postCode: '5580',
      suburb: 'PORT JULIA',
    },
    {
      postCode: '5671',
      suburb: 'PORT KENNY',
    },
    {
      postCode: '5606',
      suburb: 'PORT LINCOLN',
    },
    {
      postCode: '5607',
      suburb: 'PORT LINCOLN',
    },
    {
      postCode: '5606',
      suburb: 'PORT LINCOLN SOUTH',
    },
    {
      postCode: '5291',
      suburb: 'PORT MACDONNELL',
    },
    {
      postCode: '5238',
      suburb: 'PORT MANNUM',
    },
    {
      postCode: '5576',
      suburb: 'PORT MOOROWIE',
    },
    {
      postCode: '5604',
      suburb: 'PORT NEILL',
    },
    {
      postCode: '5167',
      suburb: 'PORT NOARLUNGA',
    },
    {
      postCode: '5167',
      suburb: 'PORT NOARLUNGA SOUTH',
    },
    {
      postCode: '5700',
      suburb: 'PORT PATERSON',
    },
    {
      postCode: '5540',
      suburb: 'PORT PIRIE',
    },
    {
      postCode: '5540',
      suburb: 'PORT PIRIE SOUTH',
    },
    {
      postCode: '5540',
      suburb: 'PORT PIRIE WEST',
    },
    {
      postCode: '5575',
      suburb: 'PORT RICKABY',
    },
    {
      postCode: '5573',
      suburb: 'PORT VICTORIA',
    },
    {
      postCode: '5581',
      suburb: 'PORT VINCENT',
    },
    {
      postCode: '5550',
      suburb: 'PORT WAKEFIELD',
    },
    {
      postCode: '5173',
      suburb: 'PORT WILLUNGA',
    },
    {
      postCode: '5416',
      suburb: 'PORTER LAGOON',
    },
    {
      postCode: '5434',
      suburb: 'PRELINNA',
    },
    {
      postCode: '5570',
      suburb: 'PRICE',
    },
    {
      postCode: '5550',
      suburb: 'PROOF RANGE',
    },
    {
      postCode: '5082',
      suburb: 'PROSPECT',
    },
    {
      postCode: '5082',
      suburb: 'PROSPECT EAST',
    },
    {
      postCode: '5201',
      suburb: 'PROSPECT HILL',
    },
    {
      postCode: '5440',
      suburb: 'PUALCO RANGE',
    },
    {
      postCode: '872',
      suburb: 'PUKATJA',
    },
    {
      postCode: '5680',
      suburb: 'PUNTABIE',
    },
    {
      postCode: '5238',
      suburb: 'PUNTHARI',
    },
    {
      postCode: '5353',
      suburb: 'PUNYELROO',
    },
    {
      postCode: '5680',
      suburb: 'PUREBA',
    },
    {
      postCode: '5238',
      suburb: 'PURNONG',
    },
    {
      postCode: '5720',
      suburb: 'PURPLE DOWNS',
    },
    {
      postCode: '5730',
      suburb: 'PUTTAPA',
    },
    {
      postCode: '5333',
      suburb: 'PYAP',
    },
    {
      postCode: '5333',
      suburb: 'PYAP WEST',
    },
    {
      postCode: '5652',
      suburb: 'PYGERY',
    },
    {
      postCode: '5322',
      suburb: 'QUALCO',
    },
    {
      postCode: '5014',
      suburb: 'QUEENSTOWN',
    },
    {
      postCode: '5440',
      suburb: 'QUINYAMBIE',
    },
    {
      postCode: '5417',
      suburb: 'QUONDONG',
    },
    {
      postCode: '5433',
      suburb: 'QUORN',
    },
    {
      postCode: '5291',
      suburb: 'RACECOURSE BAY',
    },
    {
      postCode: '5322',
      suburb: 'RAMCO',
    },
    {
      postCode: '5322',
      suburb: 'RAMCO HEIGHTS',
    },
    {
      postCode: '5575',
      suburb: 'RAMSAY',
    },
    {
      postCode: '5204',
      suburb: 'RAPID BAY',
    },
    {
      postCode: '5255',
      suburb: 'RED CREEK',
    },
    {
      postCode: '5502',
      suburb: 'REDBANKS',
    },
    {
      postCode: '5521',
      suburb: 'REDHILL',
    },
    {
      postCode: '5097',
      suburb: 'REDWOOD PARK',
    },
    {
      postCode: '5275',
      suburb: 'REEDY CREEK',
    },
    {
      postCode: '5502',
      suburb: 'REEVES PLAINS',
    },
    {
      postCode: '5010',
      suburb: 'REGENCY PARK',
    },
    {
      postCode: '5942',
      suburb: 'REGENCY PARK',
    },
    {
      postCode: '5118',
      suburb: 'REID',
    },
    {
      postCode: '5280',
      suburb: 'RENDELSHAM',
    },
    {
      postCode: '5341',
      suburb: 'RENMARK',
    },
    {
      postCode: '5341',
      suburb: 'RENMARK NORTH',
    },
    {
      postCode: '5341',
      suburb: 'RENMARK SOUTH',
    },
    {
      postCode: '5341',
      suburb: 'RENMARK WEST',
    },
    {
      postCode: '5008',
      suburb: 'RENOWN PARK',
    },
    {
      postCode: '5161',
      suburb: 'REYNELLA',
    },
    {
      postCode: '5161',
      suburb: 'REYNELLA EAST',
    },
    {
      postCode: '5412',
      suburb: 'RHYNIE',
    },
    {
      postCode: '5033',
      suburb: 'RICHMOND',
    },
    {
      postCode: '5097',
      suburb: 'RIDGEHAVEN',
    },
    {
      postCode: '5008',
      suburb: 'RIDLEYTON',
    },
    {
      postCode: '5540',
      suburb: 'RISDON PARK',
    },
    {
      postCode: '5540',
      suburb: 'RISDON PARK SOUTH',
    },
    {
      postCode: '5253',
      suburb: 'RIVERGLADES',
    },
    {
      postCode: '5253',
      suburb: 'RIVERGLEN',
    },
    {
      postCode: '5120',
      suburb: 'RIVERLEA PARK',
    },
    {
      postCode: '5412',
      suburb: 'RIVERTON',
    },
    {
      postCode: '5276',
      suburb: 'ROBE',
    },
    {
      postCode: '5381',
      suburb: 'ROBERTSTOWN',
    },
    {
      postCode: '5464',
      suburb: 'ROCHESTER',
    },
    {
      postCode: '5254',
      suburb: 'ROCKLEIGH',
    },
    {
      postCode: '5280',
      suburb: 'ROCKY CAMP',
    },
    {
      postCode: '5254',
      suburb: 'ROCKY GULLY',
    },
    {
      postCode: '5381',
      suburb: 'ROCKY PLAIN',
    },
    {
      postCode: '5238',
      suburb: 'ROCKY POINT',
    },
    {
      postCode: '5571',
      suburb: 'ROGUES POINT',
    },
    {
      postCode: '5067',
      suburb: 'ROSE PARK',
    },
    {
      postCode: '5350',
      suburb: 'ROSEDALE',
    },
    {
      postCode: '5275',
      suburb: 'ROSETOWN',
    },
    {
      postCode: '5013',
      suburb: 'ROSEWATER',
    },
    {
      postCode: '5013',
      suburb: 'ROSEWATER EAST',
    },
    {
      postCode: '5371',
      suburb: 'ROSEWORTHY',
    },
    {
      postCode: '5072',
      suburb: 'ROSSLYN PARK',
    },
    {
      postCode: '5073',
      suburb: 'ROSTREVOR',
    },
    {
      postCode: '5352',
      suburb: 'ROWLAND FLAT',
    },
    {
      postCode: '5725',
      suburb: 'ROXBY DOWNS',
    },
    {
      postCode: '5725',
      suburb: 'ROXBY DOWNS STATION',
    },
    {
      postCode: '5014',
      suburb: 'ROYAL PARK',
    },
    {
      postCode: '5070',
      suburb: 'ROYSTON PARK',
    },
    {
      postCode: '5642',
      suburb: 'RUDALL',
    },
    {
      postCode: '5000',
      suburb: 'RUNDLE MALL',
    },
    {
      postCode: '5413',
      suburb: 'SADDLEWORTH',
    },
    {
      postCode: '5461',
      suburb: 'SAINTS',
    },
    {
      postCode: '5255',
      suburb: 'SALEM',
    },
    {
      postCode: '5108',
      suburb: 'SALISBURY',
    },
    {
      postCode: '5108',
      suburb: 'SALISBURY DOWNS',
    },
    {
      postCode: '5109',
      suburb: 'SALISBURY EAST',
    },
    {
      postCode: '5109',
      suburb: 'SALISBURY EAST NORTHBRI AVE',
    },
    {
      postCode: '5109',
      suburb: 'SALISBURY HEIGHTS',
    },
    {
      postCode: '5108',
      suburb: 'SALISBURY NORTH',
    },
    {
      postCode: '5108',
      suburb: 'SALISBURY NORTH WHITES ROAD',
    },
    {
      postCode: '5109',
      suburb: 'SALISBURY PARK',
    },
    {
      postCode: '5109',
      suburb: 'SALISBURY PLAIN',
    },
    {
      postCode: '5106',
      suburb: 'SALISBURY SOUTH',
    },
    {
      postCode: '5106',
      suburb: 'SALISBURY SOUTH BC',
    },
    {
      postCode: '5106',
      suburb: 'SALISBURY SOUTH DC',
    },
    {
      postCode: '5264',
      suburb: 'SALT CREEK',
    },
    {
      postCode: '5401',
      suburb: 'SALTER SPRINGS',
    },
    {
      postCode: '5433',
      suburb: 'SALTIA',
    },
    {
      postCode: '5114',
      suburb: 'SAMPSON FLAT',
    },
    {
      postCode: '5309',
      suburb: 'SANDALWOOD',
    },
    {
      postCode: '5255',
      suburb: 'SANDERGROVE',
    },
    {
      postCode: '5237',
      suburb: 'SANDERSTON',
    },
    {
      postCode: '5571',
      suburb: 'SANDILANDS',
    },
    {
      postCode: '5356',
      suburb: 'SANDLETON',
    },
    {
      postCode: '5350',
      suburb: 'SANDY CREEK',
    },
    {
      postCode: '5275',
      suburb: 'SANDY GROVE',
    },
    {
      postCode: '5222',
      suburb: 'SAPPHIRETOWN',
    },
    {
      postCode: '5680',
      suburb: 'SCEALE BAY',
    },
    {
      postCode: '5311',
      suburb: 'SCHELL WELL',
    },
    {
      postCode: '5153',
      suburb: 'SCOTT CREEK',
    },
    {
      postCode: '5049',
      suburb: 'SEACLIFF',
    },
    {
      postCode: '5049',
      suburb: 'SEACLIFF PARK',
    },
    {
      postCode: '5047',
      suburb: 'SEACOMBE GARDENS',
    },
    {
      postCode: '5047',
      suburb: 'SEACOMBE HEIGHTS',
    },
    {
      postCode: '5169',
      suburb: 'SEAFORD',
    },
    {
      postCode: '5169',
      suburb: 'SEAFORD HEIGHTS',
    },
    {
      postCode: '5169',
      suburb: 'SEAFORD MEADOWS',
    },
    {
      postCode: '5169',
      suburb: 'SEAFORD RISE',
    },
    {
      postCode: '5223',
      suburb: 'SEAL BAY',
    },
    {
      postCode: '5023',
      suburb: 'SEATON',
    },
    {
      postCode: '5049',
      suburb: 'SEAVIEW DOWNS',
    },
    {
      postCode: '5280',
      suburb: 'SEBASTOPOL',
    },
    {
      postCode: '5204',
      suburb: 'SECOND VALLEY',
    },
    {
      postCode: '5611',
      suburb: 'SECRET ROCKS',
    },
    {
      postCode: '5353',
      suburb: 'SEDAN',
    },
    {
      postCode: '5223',
      suburb: 'SEDDON',
    },
    {
      postCode: '5083',
      suburb: 'SEFTON PARK',
    },
    {
      postCode: '5174',
      suburb: 'SELLICKS BEACH',
    },
    {
      postCode: '5174',
      suburb: 'SELLICKS HILL',
    },
    {
      postCode: '5019',
      suburb: 'SEMAPHORE',
    },
    {
      postCode: '5019',
      suburb: 'SEMAPHORE PARK',
    },
    {
      postCode: '5019',
      suburb: 'SEMAPHORE SOUTH',
    },
    {
      postCode: '5268',
      suburb: 'SENIOR',
    },
    {
      postCode: '5355',
      suburb: 'SEPPELTSFIELD',
    },
    {
      postCode: '5453',
      suburb: 'SEVENHILL',
    },
    {
      postCode: '5434',
      suburb: 'SHAGGY RIDGE',
    },
    {
      postCode: '5267',
      suburb: 'SHAUGH',
    },
    {
      postCode: '5371',
      suburb: 'SHEA-OAK LOG',
    },
    {
      postCode: '5581',
      suburb: 'SHEAOAK FLAT',
    },
    {
      postCode: '5158',
      suburb: 'SHEIDOW PARK',
    },
    {
      postCode: '5607',
      suburb: 'SHERINGA',
    },
    {
      postCode: '5301',
      suburb: 'SHERLOCK',
    },
    {
      postCode: '5267',
      suburb: 'SHERWOOD',
    },
    {
      postCode: '5279',
      suburb: 'SHORT',
    },
    {
      postCode: '5717',
      suburb: 'SIAM',
    },
    {
      postCode: '5204',
      suburb: 'SILVERTON',
    },
    {
      postCode: '5734',
      suburb: 'SIMPSON DESERT',
    },
    {
      postCode: '5072',
      suburb: 'SKYE',
    },
    {
      postCode: '5607',
      suburb: 'SLEAFORD',
    },
    {
      postCode: '5114',
      suburb: 'SMITHFIELD',
    },
    {
      postCode: '5114',
      suburb: 'SMITHFIELD PLAINS',
    },
    {
      postCode: '5680',
      suburb: 'SMOKY BAY',
    },
    {
      postCode: '5520',
      suburb: 'SNOWTOWN',
    },
    {
      postCode: '5641',
      suburb: 'SOLOMON',
    },
    {
      postCode: '5540',
      suburb: 'SOLOMONTOWN',
    },
    {
      postCode: '5044',
      suburb: 'SOMERTON PARK',
    },
    {
      postCode: '5048',
      suburb: 'SOUTH BRIGHTON',
    },
    {
      postCode: '5713',
      suburb: 'SOUTH GAP',
    },
    {
      postCode: '5550',
      suburb: 'SOUTH HUMMOCKS',
    },
    {
      postCode: '5573',
      suburb: 'SOUTH KILKERRAN',
    },
    {
      postCode: '5038',
      suburb: 'SOUTH PLYMPTON',
    },
    {
      postCode: '5280',
      suburb: 'SOUTHEND',
    },
    {
      postCode: '5454',
      suburb: 'SPALDING',
    },
    {
      postCode: '5345',
      suburb: 'SPECTACLE LAKE',
    },
    {
      postCode: '5271',
      suburb: 'SPENCE',
    },
    {
      postCode: '5453',
      suburb: 'SPRING FARM',
    },
    {
      postCode: '5453',
      suburb: 'SPRING GULLY',
    },
    {
      postCode: '5062',
      suburb: 'SPRINGFIELD',
    },
    {
      postCode: '5235',
      suburb: 'SPRINGTON',
    },
    {
      postCode: '5291',
      suburb: 'SQUARE MILE',
    },
    {
      postCode: '5097',
      suburb: 'ST AGNES',
    },
    {
      postCode: '5011',
      suburb: 'ST CLAIR',
    },
    {
      postCode: '5064',
      suburb: 'ST GEORGES',
    },
    {
      postCode: '5252',
      suburb: 'ST IVES',
    },
    {
      postCode: '5373',
      suburb: 'ST JOHNS',
    },
    {
      postCode: '5110',
      suburb: 'ST KILDA',
    },
    {
      postCode: '5356',
      suburb: 'ST KITTS',
    },
    {
      postCode: '5042',
      suburb: 'ST MARYS',
    },
    {
      postCode: '5068',
      suburb: 'ST MORRIS',
    },
    {
      postCode: '5069',
      suburb: 'ST PETERS',
    },
    {
      postCode: '5415',
      suburb: 'STANLEY',
    },
    {
      postCode: '5453',
      suburb: 'STANLEY FLAT',
    },
    {
      postCode: '5582',
      suburb: 'STANSBURY',
    },
    {
      postCode: '5000',
      suburb: 'STATION ARCADE',
    },
    {
      postCode: '5413',
      suburb: 'STEELTON',
    },
    {
      postCode: '5356',
      suburb: 'STEINFELD',
    },
    {
      postCode: '5433',
      suburb: 'STEPHENSTON',
    },
    {
      postCode: '5069',
      suburb: 'STEPNEY',
    },
    {
      postCode: '5271',
      suburb: 'STEWART RANGE',
    },
    {
      postCode: '5152',
      suburb: 'STIRLING',
    },
    {
      postCode: '5710',
      suburb: 'STIRLING NORTH',
    },
    {
      postCode: '5410',
      suburb: 'STOCKPORT',
    },
    {
      postCode: '5355',
      suburb: 'STOCKWELL',
    },
    {
      postCode: '5460',
      suburb: 'STOCKYARD CREEK',
    },
    {
      postCode: '5330',
      suburb: 'STOCKYARD PLAIN',
    },
    {
      postCode: '5223',
      suburb: 'STOKES BAY',
    },
    {
      postCode: '5480',
      suburb: 'STONE HUT',
    },
    {
      postCode: '5352',
      suburb: 'STONE WELL',
    },
    {
      postCode: '5066',
      suburb: 'STONYFELL',
    },
    {
      postCode: '5461',
      suburb: 'STOW',
    },
    {
      postCode: '5255',
      suburb: 'STRATHALBYN',
    },
    {
      postCode: '5680',
      suburb: 'STREAKY BAY',
    },
    {
      postCode: '5271',
      suburb: 'STRUAN',
    },
    {
      postCode: '5731',
      suburb: 'STRZELECKI DESERT',
    },
    {
      postCode: '5320',
      suburb: 'STUART',
    },
    {
      postCode: '5720',
      suburb: 'STUARTS CREEK',
    },
    {
      postCode: '5223',
      suburb: "STUN'SAIL BOOM",
    },
    {
      postCode: '5047',
      suburb: 'STURT',
    },
    {
      postCode: '5417',
      suburb: 'STURT VALE',
    },
    {
      postCode: '5583',
      suburb: 'SULTANA POINT',
    },
    {
      postCode: '5141',
      suburb: 'SUMMERTOWN',
    },
    {
      postCode: '5322',
      suburb: 'SUNLANDS',
    },
    {
      postCode: '5422',
      suburb: 'SUNNYBRAE',
    },
    {
      postCode: '5353',
      suburb: 'SUNNYDALE',
    },
    {
      postCode: '5253',
      suburb: 'SUNNYSIDE',
    },
    {
      postCode: '5552',
      suburb: 'SUNNYVALE',
    },
    {
      postCode: '5126',
      suburb: 'SURREY DOWNS',
    },
    {
      postCode: '5374',
      suburb: 'SUTHERLANDS',
    },
    {
      postCode: '5291',
      suburb: 'SUTTONTOWN',
    },
    {
      postCode: '5354',
      suburb: 'SWAN REACH',
    },
    {
      postCode: '5253',
      suburb: 'SWANPORT',
    },
    {
      postCode: '5270',
      suburb: 'SWEDE FLAT',
    },
    {
      postCode: '5259',
      suburb: 'TAILEM BEND',
    },
    {
      postCode: '5260',
      suburb: 'TAILEM BEND',
    },
    {
      postCode: '5311',
      suburb: 'TALDRA',
    },
    {
      postCode: '5670',
      suburb: 'TALIA',
    },
    {
      postCode: '5280',
      suburb: 'TANTANOOLA',
    },
    {
      postCode: '5352',
      suburb: 'TANUNDA',
    },
    {
      postCode: '5017',
      suburb: 'TAPEROO',
    },
    {
      postCode: '5311',
      suburb: 'TAPLAN',
    },
    {
      postCode: '5275',
      suburb: 'TARATAP',
    },
    {
      postCode: '5701',
      suburb: 'TARCOOLA',
    },
    {
      postCode: '5431',
      suburb: 'TARCOWIE',
    },
    {
      postCode: '5411',
      suburb: 'TARLEE',
    },
    {
      postCode: '5413',
      suburb: 'TARNMA',
    },
    {
      postCode: '5277',
      suburb: 'TARPEENA',
    },
    {
      postCode: '5171',
      suburb: 'TATACHILLA',
    },
    {
      postCode: '5235',
      suburb: 'TAUNTON',
    },
    {
      postCode: '5330',
      suburb: 'TAYLORVILLE',
    },
    {
      postCode: '5330',
      suburb: 'TAYLORVILLE STATION',
    },
    {
      postCode: '5091',
      suburb: 'TEA TREE GULLY',
    },
    {
      postCode: '5238',
      suburb: 'TEAL FLAT',
    },
    {
      postCode: '5540',
      suburb: 'TELOWIE',
    },
    {
      postCode: '5371',
      suburb: 'TEMPLERS',
    },
    {
      postCode: '5022',
      suburb: 'TENNYSON',
    },
    {
      postCode: '5440',
      suburb: 'TEPCO STATION',
    },
    {
      postCode: '5254',
      suburb: 'TEPKO',
    },
    {
      postCode: '5072',
      suburb: 'TERINGIE',
    },
    {
      postCode: '5421',
      suburb: 'TEROWIE',
    },
    {
      postCode: '5271',
      suburb: 'THE GAP',
    },
    {
      postCode: '5577',
      suburb: 'THE PINES',
    },
    {
      postCode: '5172',
      suburb: 'THE RANGE',
    },
    {
      postCode: '5031',
      suburb: 'THEBARTON',
    },
    {
      postCode: '5690',
      suburb: 'THEVENARD',
    },
    {
      postCode: '5554',
      suburb: 'THOMAS PLAIN',
    },
    {
      postCode: '5501',
      suburb: 'THOMPSON BEACH',
    },
    {
      postCode: '5082',
      suburb: 'THORNGATE',
    },
    {
      postCode: '5280',
      suburb: 'THORNLEA',
    },
    {
      postCode: '5432',
      suburb: 'THREE CREEKS',
    },
    {
      postCode: '5552',
      suburb: 'THRINGTON',
    },
    {
      postCode: '5717',
      suburb: 'THURLGA',
    },
    {
      postCode: '5607',
      suburb: 'TIATUKIA',
    },
    {
      postCode: '5555',
      suburb: 'TICKERA',
    },
    {
      postCode: '5571',
      suburb: 'TIDDY WIDDY BEACH',
    },
    {
      postCode: '872',
      suburb: 'TIEYON',
    },
    {
      postCode: '5440',
      suburb: 'TIKALINA',
    },
    {
      postCode: '5275',
      suburb: 'TILLEY SWAMP',
    },
    {
      postCode: '5266',
      suburb: 'TINTINARA',
    },
    {
      postCode: '5734',
      suburb: 'TODMORDEN',
    },
    {
      postCode: '5256',
      suburb: 'TOLDEROL',
    },
    {
      postCode: '5042',
      suburb: 'TONSLEY',
    },
    {
      postCode: '5607',
      suburb: 'TOOLIGIE',
    },
    {
      postCode: '5255',
      suburb: 'TOOPERANG',
    },
    {
      postCode: '5253',
      suburb: 'TOORA',
    },
    {
      postCode: '5065',
      suburb: 'TOORAK GARDENS',
    },
    {
      postCode: '5607',
      suburb: 'TOOTENILLA',
    },
    {
      postCode: '5015',
      suburb: 'TORRENS ISLAND',
    },
    {
      postCode: '5062',
      suburb: 'TORRENS PARK',
    },
    {
      postCode: '5203',
      suburb: 'TORRENS VALE',
    },
    {
      postCode: '5031',
      suburb: 'TORRENSVILLE',
    },
    {
      postCode: '5031',
      suburb: 'TORRENSVILLE PLAZA',
    },
    {
      postCode: '5413',
      suburb: 'TOTHILL BELT',
    },
    {
      postCode: '5413',
      suburb: 'TOTHILL CREEK',
    },
    {
      postCode: '5250',
      suburb: 'TOTNESS',
    },
    {
      postCode: '5353',
      suburb: 'TOWITTA',
    },
    {
      postCode: '5073',
      suburb: 'TRANMERE',
    },
    {
      postCode: '5073',
      suburb: 'TRANMERE NORTH',
    },
    {
      postCode: '5068',
      suburb: 'TRINITY GARDENS',
    },
    {
      postCode: '5158',
      suburb: 'TROTT PARK',
    },
    {
      postCode: '5356',
      suburb: 'TRURO',
    },
    {
      postCode: '5607',
      suburb: 'TULKA',
    },
    {
      postCode: '5605',
      suburb: 'TUMBY BAY',
    },
    {
      postCode: '5236',
      suburb: 'TUNGKILLO',
    },
    {
      postCode: '5203',
      suburb: 'TUNKALILLA',
    },
    {
      postCode: '5065',
      suburb: 'TUSMORE',
    },
    {
      postCode: '5501',
      suburb: 'TWO WELLS',
    },
    {
      postCode: '5671',
      suburb: 'TYRINGA',
    },
    {
      postCode: '5422',
      suburb: 'UCOLTA',
    },
    {
      postCode: '5607',
      suburb: 'ULEY',
    },
    {
      postCode: '5114',
      suburb: 'ULEYBURY',
    },
    {
      postCode: '5419',
      suburb: 'ULOOLOO',
    },
    {
      postCode: '5633',
      suburb: 'ULYERRA',
    },
    {
      postCode: '5732',
      suburb: 'UMBERATANA',
    },
    {
      postCode: '872',
      suburb: 'UMUWA',
    },
    {
      postCode: '5451',
      suburb: 'UNDALYA',
    },
    {
      postCode: '5032',
      suburb: 'UNDERDALE',
    },
    {
      postCode: '5607',
      suburb: 'UNGARRA',
    },
    {
      postCode: '5005',
      suburb: 'UNIVERSITY OF ADELAIDE',
    },
    {
      postCode: '5061',
      suburb: 'UNLEY',
    },
    {
      postCode: '5061',
      suburb: 'UNLEY PARK',
    },
    {
      postCode: '5717',
      suburb: 'UNO',
    },
    {
      postCode: '5434',
      suburb: 'UPALINNA',
    },
    {
      postCode: '5131',
      suburb: 'UPPER HERMITAGE',
    },
    {
      postCode: '5156',
      suburb: 'UPPER STURT',
    },
    {
      postCode: '5142',
      suburb: 'URAIDLA',
    },
    {
      postCode: '5573',
      suburb: 'URANIA',
    },
    {
      postCode: '5064',
      suburb: 'URRBRAE',
    },
    {
      postCode: '5690',
      suburb: 'UWORRA',
    },
    {
      postCode: '5081',
      suburb: 'VALE PARK',
    },
    {
      postCode: '5093',
      suburb: 'VALLEY VIEW',
    },
    {
      postCode: '5311',
      suburb: 'VEITCH',
    },
    {
      postCode: '5607',
      suburb: 'VENUS BAY',
    },
    {
      postCode: '5245',
      suburb: 'VERDUN',
    },
    {
      postCode: '5603',
      suburb: 'VERRAN',
    },
    {
      postCode: '5211',
      suburb: 'VICTOR HARBOR',
    },
    {
      postCode: '5211',
      suburb: 'VICTOR HARBOR CENTRAL',
    },
    {
      postCode: '5352',
      suburb: 'VINE VALE',
    },
    {
      postCode: '5120',
      suburb: 'VIRGINIA',
    },
    {
      postCode: '5091',
      suburb: 'VISTA',
    },
    {
      postCode: '5223',
      suburb: 'VIVONNE BAY',
    },
    {
      postCode: '5640',
      suburb: 'WADDIKEE',
    },
    {
      postCode: '5440',
      suburb: 'WADNAMINGA',
    },
    {
      postCode: '5330',
      suburb: 'WAIKERIE',
    },
    {
      postCode: '5211',
      suburb: 'WAITPINGA',
    },
    {
      postCode: '5238',
      suburb: 'WALKER FLAT',
    },
    {
      postCode: '5081',
      suburb: 'WALKERVILLE',
    },
    {
      postCode: '5098',
      suburb: 'WALKLEY HEIGHTS',
    },
    {
      postCode: '5254',
      suburb: 'WALL FLAT',
    },
    {
      postCode: '5661',
      suburb: 'WALLALA',
    },
    {
      postCode: '5556',
      suburb: 'WALLAROO',
    },
    {
      postCode: '5554',
      suburb: 'WALLAROO MINES',
    },
    {
      postCode: '5556',
      suburb: 'WALLAROO PLAIN',
    },
    {
      postCode: '5713',
      suburb: 'WALLERBERDINA',
    },
    {
      postCode: '5431',
      suburb: 'WALLOWAY',
    },
    {
      postCode: '5264',
      suburb: 'WALTOWA',
    },
    {
      postCode: '5700',
      suburb: 'WAMI KATA',
    },
    {
      postCode: '5310',
      suburb: 'WANBI',
    },
    {
      postCode: '5690',
      suburb: 'WANDANA',
    },
    {
      postCode: '5523',
      suburb: 'WANDEARAH EAST',
    },
    {
      postCode: '5523',
      suburb: 'WANDEARAH WEST',
    },
    {
      postCode: '5291',
      suburb: 'WANDILO',
    },
    {
      postCode: '5607',
      suburb: 'WANGARY',
    },
    {
      postCode: '5275',
      suburb: 'WANGOLINA',
    },
    {
      postCode: '5607',
      suburb: 'WANILLA',
    },
    {
      postCode: '5332',
      suburb: 'WAPPILKA',
    },
    {
      postCode: '5556',
      suburb: 'WARBURTO',
    },
    {
      postCode: '5118',
      suburb: 'WARD BELT',
    },
    {
      postCode: '5522',
      suburb: 'WARD HILL',
    },
    {
      postCode: '5540',
      suburb: 'WARNERTOWN',
    },
    {
      postCode: '5417',
      suburb: 'WARNES',
    },
    {
      postCode: '5577',
      suburb: 'WAROOKA',
    },
    {
      postCode: '5422',
      suburb: 'WAROONEE',
    },
    {
      postCode: '5046',
      suburb: 'WARRADALE',
    },
    {
      postCode: '5046',
      suburb: 'WARRADALE NORTH',
    },
    {
      postCode: '5650',
      suburb: 'WARRAMBOO',
    },
    {
      postCode: '5730',
      suburb: 'WARRAWEENA',
    },
    {
      postCode: '5715',
      suburb: 'WARTAKA',
    },
    {
      postCode: '5454',
      suburb: 'WASHPOOL',
    },
    {
      postCode: '5400',
      suburb: 'WASLEYS',
    },
    {
      postCode: '872',
      suburb: 'WATARRU',
    },
    {
      postCode: '5461',
      suburb: 'WATCHMAN',
    },
    {
      postCode: '5066',
      suburb: 'WATERFALL GULLY',
    },
    {
      postCode: '5413',
      suburb: 'WATERLOO',
    },
    {
      postCode: '5110',
      suburb: 'WATERLOO CORNER',
    },
    {
      postCode: '5452',
      suburb: 'WATERVALE',
    },
    {
      postCode: '872',
      suburb: 'WATINUMA',
    },
    {
      postCode: '5690',
      suburb: 'WATRABA',
    },
    {
      postCode: '5203',
      suburb: 'WATTLE FLAT',
    },
    {
      postCode: '5066',
      suburb: 'WATTLE PARK',
    },
    {
      postCode: '5280',
      suburb: 'WATTLE RANGE',
    },
    {
      postCode: '5279',
      suburb: 'WATTLE RANGE EAST',
    },
    {
      postCode: '5440',
      suburb: 'WAUKARINGA',
    },
    {
      postCode: '5573',
      suburb: 'WAURALTEE',
    },
    {
      postCode: '5034',
      suburb: 'WAYVILLE',
    },
    {
      postCode: '5501',
      suburb: 'WEBB BEACH',
    },
    {
      postCode: '5606',
      suburb: 'WEDGE ISLAND',
    },
    {
      postCode: '5440',
      suburb: 'WEEKEROO',
    },
    {
      postCode: '5495',
      suburb: 'WEEROONA ISLAND',
    },
    {
      postCode: '5573',
      suburb: 'WEETULTA',
    },
    {
      postCode: '5724',
      suburb: 'WELBOURN HILL',
    },
    {
      postCode: '5007',
      suburb: 'WELLAND',
    },
    {
      postCode: '5259',
      suburb: 'WELLINGTON',
    },
    {
      postCode: '5259',
      suburb: 'WELLINGTON EAST',
    },
    {
      postCode: '5278',
      suburb: 'WEPAR',
    },
    {
      postCode: '5482',
      suburb: 'WEPOWIE',
    },
    {
      postCode: '5732',
      suburb: 'WERTALOONA',
    },
    {
      postCode: '5024',
      suburb: 'WEST BEACH',
    },
    {
      postCode: '5491',
      suburb: 'WEST BUNDALEER',
    },
    {
      postCode: '5008',
      suburb: 'WEST CROYDON',
    },
    {
      postCode: '5007',
      suburb: 'WEST HINDMARSH',
    },
    {
      postCode: '5021',
      suburb: 'WEST LAKES',
    },
    {
      postCode: '5020',
      suburb: 'WEST LAKES SHORE',
    },
    {
      postCode: '5275',
      suburb: 'WEST RANGE',
    },
    {
      postCode: '5033',
      suburb: 'WEST RICHMOND',
    },
    {
      postCode: '5680',
      suburb: 'WESTALL',
    },
    {
      postCode: '5041',
      suburb: 'WESTBOURNE PARK',
    },
    {
      postCode: '5268',
      suburb: 'WESTERN FLAT',
    },
    {
      postCode: '5223',
      suburb: 'WESTERN RIVER',
    },
    {
      postCode: '5320',
      suburb: 'WESTONS FLAT',
    },
    {
      postCode: '5603',
      suburb: 'WHARMINDA',
    },
    {
      postCode: '5254',
      suburb: 'WHITE HILL',
    },
    {
      postCode: '5575',
      suburb: 'WHITE HUT',
    },
    {
      postCode: '5253',
      suburb: 'WHITE SANDS',
    },
    {
      postCode: '5690',
      suburb: 'WHITE WELL CORNER',
    },
    {
      postCode: '5607',
      suburb: 'WHITES FLAT',
    },
    {
      postCode: '5607',
      suburb: 'WHITES RIVER',
    },
    {
      postCode: '5172',
      suburb: 'WHITES VALLEY',
    },
    {
      postCode: '5461',
      suburb: 'WHITWARTA',
    },
    {
      postCode: '5600',
      suburb: 'WHYALLA',
    },
    {
      postCode: '5601',
      suburb: 'WHYALLA BARSON',
    },
    {
      postCode: '5600',
      suburb: 'WHYALLA DC',
    },
    {
      postCode: '5609',
      suburb: 'WHYALLA JENKINS',
    },
    {
      postCode: '5608',
      suburb: 'WHYALLA NORRIE',
    },
    {
      postCode: '5608',
      suburb: 'WHYALLA NORRIE EAST',
    },
    {
      postCode: '5608',
      suburb: 'WHYALLA NORRIE NORTH',
    },
    {
      postCode: '5600',
      suburb: 'WHYALLA PLAYFORD',
    },
    {
      postCode: '5608',
      suburb: 'WHYALLA STUART',
    },
    {
      postCode: '5420',
      suburb: 'WHYTE YARCOWIE',
    },
    {
      postCode: '5440',
      suburb: 'WIAWERA',
    },
    {
      postCode: '5330',
      suburb: 'WIGLEY FLAT',
    },
    {
      postCode: '5641',
      suburb: 'WILCHERRY',
    },
    {
      postCode: '5432',
      suburb: 'WILCOWIE',
    },
    {
      postCode: '5271',
      suburb: 'WILD DOG VALLEY',
    },
    {
      postCode: '5501',
      suburb: 'WILD HORSE PLAINS',
    },
    {
      postCode: '5719',
      suburb: 'WILGENA',
    },
    {
      postCode: '5713',
      suburb: 'WILKATANA STATION',
    },
    {
      postCode: '5301',
      suburb: 'WILKAWATT',
    },
    {
      postCode: '5419',
      suburb: 'WILLALO',
    },
    {
      postCode: '5267',
      suburb: 'WILLALOOKA',
    },
    {
      postCode: '5554',
      suburb: 'WILLAMULKA',
    },
    {
      postCode: '5118',
      suburb: 'WILLASTON',
    },
    {
      postCode: '5723',
      suburb: 'WILLIAM CREEK',
    },
    {
      postCode: '5351',
      suburb: 'WILLIAMSTOWN',
    },
    {
      postCode: '5432',
      suburb: 'WILLIPPA',
    },
    {
      postCode: '5433',
      suburb: 'WILLOCHRA',
    },
    {
      postCode: '5222',
      suburb: 'WILLOUGHBY',
    },
    {
      postCode: '5253',
      suburb: 'WILLOW BANKS',
    },
    {
      postCode: '5211',
      suburb: 'WILLOW CREEK',
    },
    {
      postCode: '5434',
      suburb: 'WILLOW SPRINGS',
    },
    {
      postCode: '5431',
      suburb: 'WILLOWIE',
    },
    {
      postCode: '5222',
      suburb: 'WILLSON RIVER',
    },
    {
      postCode: '5172',
      suburb: 'WILLUNGA',
    },
    {
      postCode: '5172',
      suburb: 'WILLUNGA HILL',
    },
    {
      postCode: '5172',
      suburb: 'WILLUNGA SOUTH',
    },
    {
      postCode: '5255',
      suburb: 'WILLYAROO',
    },
    {
      postCode: '5485',
      suburb: 'WILMINGTON',
    },
    {
      postCode: '5501',
      suburb: 'WINDSOR',
    },
    {
      postCode: '5087',
      suburb: 'WINDSOR GARDENS',
    },
    {
      postCode: '5013',
      suburb: 'WINGFIELD',
    },
    {
      postCode: '5343',
      suburb: 'WINKIE',
    },
    {
      postCode: '5440',
      suburb: 'WINNININNIE',
    },
    {
      postCode: '5700',
      suburb: 'WINNINOWIE',
    },
    {
      postCode: '5713',
      suburb: 'WINTABATINYANA',
    },
    {
      postCode: '5723',
      suburb: 'WINTINNA',
    },
    {
      postCode: '5570',
      suburb: 'WINULTA',
    },
    {
      postCode: '5481',
      suburb: 'WIRRABARA',
    },
    {
      postCode: '5719',
      suburb: 'WIRRAMINNA',
    },
    {
      postCode: '5730',
      suburb: 'WIRREALPA',
    },
    {
      postCode: '5267',
      suburb: 'WIRREGA',
    },
    {
      postCode: '5204',
      suburb: 'WIRRINA COVE',
    },
    {
      postCode: '5661',
      suburb: 'WIRRULLA',
    },
    {
      postCode: '5223',
      suburb: 'WISANGER',
    },
    {
      postCode: '5251',
      suburb: 'WISTOW',
    },
    {
      postCode: '5731',
      suburb: 'WITCHELINA',
    },
    {
      postCode: '5432',
      suburb: 'WITCHITIE',
    },
    {
      postCode: '5671',
      suburb: 'WITERA',
    },
    {
      postCode: '5734',
      suburb: 'WITJIRA',
    },
    {
      postCode: '5520',
      suburb: 'WOKURNA',
    },
    {
      postCode: '5269',
      suburb: 'WOLSELEY',
    },
    {
      postCode: '5320',
      suburb: 'WOMBATS REST',
    },
    {
      postCode: '5440',
      suburb: 'WOMPINIE',
    },
    {
      postCode: '5238',
      suburb: 'WONGULLA',
    },
    {
      postCode: '5481',
      suburb: 'WONGYARRA',
    },
    {
      postCode: '5419',
      suburb: 'WONNA',
    },
    {
      postCode: '5340',
      suburb: 'WONUARRA',
    },
    {
      postCode: '5255',
      suburb: 'WOODCHESTER',
    },
    {
      postCode: '5162',
      suburb: 'WOODCROFT',
    },
    {
      postCode: '5072',
      suburb: 'WOODFORDE',
    },
    {
      postCode: '5254',
      suburb: 'WOODLANE',
    },
    {
      postCode: '5311',
      suburb: 'WOODLEIGH',
    },
    {
      postCode: '5253',
      suburb: 'WOODS POINT',
    },
    {
      postCode: '5244',
      suburb: 'WOODSIDE',
    },
    {
      postCode: '5011',
      suburb: 'WOODVILLE',
    },
    {
      postCode: '5012',
      suburb: 'WOODVILLE GARDENS',
    },
    {
      postCode: '5012',
      suburb: 'WOODVILLE NORTH',
    },
    {
      postCode: '5011',
      suburb: 'WOODVILLE PARK',
    },
    {
      postCode: '5011',
      suburb: 'WOODVILLE SOUTH',
    },
    {
      postCode: '5011',
      suburb: 'WOODVILLE WEST',
    },
    {
      postCode: '5575',
      suburb: 'WOOL BAY',
    },
    {
      postCode: '5330',
      suburb: 'WOOLPUNDA',
    },
    {
      postCode: '5412',
      suburb: 'WOOLSHED FLAT',
    },
    {
      postCode: '5400',
      suburb: 'WOOLSHEDS',
    },
    {
      postCode: '5732',
      suburb: 'WOOLTANA',
    },
    {
      postCode: '5272',
      suburb: 'WOOLUMBOOL',
    },
    {
      postCode: '5701',
      suburb: 'WOOLUNDUNGA',
    },
    {
      postCode: '5720',
      suburb: 'WOOMERA',
    },
    {
      postCode: '5381',
      suburb: 'WORLDS END',
    },
    {
      postCode: '5291',
      suburb: 'WORROLONG',
    },
    {
      postCode: '5434',
      suburb: 'WORUMBA',
    },
    {
      postCode: '5271',
      suburb: 'WRATTONBULLY',
    },
    {
      postCode: '5652',
      suburb: 'WUDINNA',
    },
    {
      postCode: '5311',
      suburb: 'WUNKAR',
    },
    {
      postCode: '5291',
      suburb: 'WYE',
    },
    {
      postCode: '5306',
      suburb: 'WYNARKA',
    },
    {
      postCode: '5127',
      suburb: 'WYNN VALE',
    },
    {
      postCode: '5275',
      suburb: 'WYOMI',
    },
    {
      postCode: '5470',
      suburb: 'YACKA',
    },
    {
      postCode: '5713',
      suburb: 'YADLAMALKA',
    },
    {
      postCode: '5291',
      suburb: 'YAHL',
    },
    {
      postCode: '5641',
      suburb: 'YALANDA',
    },
    {
      postCode: '5690',
      suburb: 'YALATA',
    },
    {
      postCode: '5607',
      suburb: 'YALLUNDA FLAT',
    },
    {
      postCode: '5431',
      suburb: 'YALPARA',
    },
    {
      postCode: '5715',
      suburb: 'YALYMBOO',
    },
    {
      postCode: '5340',
      suburb: 'YAMBA',
    },
    {
      postCode: '5680',
      suburb: 'YANERBIE',
    },
    {
      postCode: '5653',
      suburb: 'YANINEE',
    },
    {
      postCode: '5203',
      suburb: 'YANKALILLA',
    },
    {
      postCode: '5732',
      suburb: 'YANKANINNA',
    },
    {
      postCode: '5661',
      suburb: 'YANTANABIE',
    },
    {
      postCode: '5432',
      suburb: 'YANYARRIE',
    },
    {
      postCode: '5717',
      suburb: 'YARDEA',
    },
    {
      postCode: '5433',
      suburb: 'YARRAH',
    },
    {
      postCode: '5440',
      suburb: 'YARRAMBA',
    },
    {
      postCode: '5126',
      suburb: 'YATALA VALE',
    },
    {
      postCode: '5422',
      suburb: 'YATINA',
    },
    {
      postCode: '5114',
      suburb: 'YATTALUNGA',
    },
    {
      postCode: '5632',
      suburb: 'YEELANNA',
    },
    {
      postCode: '5690',
      suburb: 'YELLABINNA',
    },
    {
      postCode: '5558',
      suburb: 'YELTA',
    },
    {
      postCode: '5641',
      suburb: 'YELTANA',
    },
    {
      postCode: '5332',
      suburb: 'YINKANIE',
    },
    {
      postCode: '5493',
      suburb: 'YONGALA',
    },
    {
      postCode: '5573',
      suburb: 'YORKE VALLEY',
    },
    {
      postCode: '5576',
      suburb: 'YORKETOWN',
    },
    {
      postCode: '5238',
      suburb: 'YOUNGHUSBAND',
    },
    {
      postCode: '5238',
      suburb: 'YOUNGHUSBAND HOLDINGS',
    },
    {
      postCode: '5715',
      suburb: 'YUDNAPINNA',
    },
    {
      postCode: '5261',
      suburb: 'YUMALI',
    },
    {
      postCode: '5690',
      suburb: 'YUMBARRA',
    },
    {
      postCode: '5172',
      suburb: 'YUNDI',
    },
    {
      postCode: '5440',
      suburb: 'YUNTA',
    },
    {
      postCode: '872',
      suburb: 'YUNYARINYI',
    },
    {
      postCode: '5254',
      suburb: 'ZADOWS LANDING',
    },
  ];
  constructor() {}
}
