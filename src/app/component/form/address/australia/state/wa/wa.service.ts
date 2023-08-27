import { Injectable } from '@angular/core';
import { IPostCodeItem } from 'src/app/interface/global/global.interface';
@Injectable({
  providedIn: 'root',
})
export class WaService {
  public data: IPostCodeItem[] = [
    {
      postCode: '6280',
      suburb: 'ABBA RIVER',
    },
    {
      postCode: '6280',
      suburb: 'ABBEY',
    },
    {
      postCode: '6280',
      suburb: 'ACTON PARK',
    },
    {
      postCode: '6375',
      suburb: 'ADAMSVALE',
    },
    {
      postCode: '6532',
      suburb: 'AJANA',
    },
    {
      postCode: '6330',
      suburb: 'ALBANY',
    },
    {
      postCode: '6331',
      suburb: 'ALBANY DC',
    },
    {
      postCode: '6332',
      suburb: 'ALBANY PO',
    },
    {
      postCode: '6306',
      suburb: 'ALDERSYDE',
    },
    {
      postCode: '6064',
      suburb: 'ALEXANDER HEIGHTS',
    },
    {
      postCode: '6288',
      suburb: 'ALEXANDRA BRIDGE',
    },
    {
      postCode: '6154',
      suburb: 'ALFRED COVE',
    },
    {
      postCode: '6038',
      suburb: 'ALKIMOS',
    },
    {
      postCode: '6525',
      suburb: 'ALLANOOKA',
    },
    {
      postCode: '6225',
      suburb: 'ALLANSON',
    },
    {
      postCode: '6535',
      suburb: 'ALMA',
    },
    {
      postCode: '6632',
      suburb: 'AMBANIA',
    },
    {
      postCode: '6280',
      suburb: 'AMBERGATE',
    },
    {
      postCode: '6338',
      suburb: 'AMELUP',
    },
    {
      postCode: '6642',
      suburb: 'ANGELO RIVER',
    },
    {
      postCode: '6167',
      suburb: 'ANKETELL',
    },
    {
      postCode: '6280',
      suburb: 'ANNIEBROOK',
    },
    {
      postCode: '6714',
      suburb: 'ANTONYMYRE',
    },
    {
      postCode: '6153',
      suburb: 'APPLECROSS',
    },
    {
      postCode: '6953',
      suburb: 'APPLECROSS',
    },
    {
      postCode: '6153',
      suburb: 'APPLECROSS NORTH',
    },
    {
      postCode: '6419',
      suburb: 'ARDATH',
    },
    {
      postCode: '6153',
      suburb: 'ARDROSS',
    },
    {
      postCode: '6239',
      suburb: 'ARGYLE',
    },
    {
      postCode: '6112',
      suburb: 'ARMADALE',
    },
    {
      postCode: '6992',
      suburb: 'ARMADALE',
    },
    {
      postCode: '6519',
      suburb: 'ARRINO',
    },
    {
      postCode: '6525',
      suburb: 'ARROWSMITH',
    },
    {
      postCode: '6519',
      suburb: 'ARROWSMITH EAST',
    },
    {
      postCode: '6315',
      suburb: 'ARTHUR RIVER',
    },
    {
      postCode: '6104',
      suburb: 'ASCOT',
    },
    {
      postCode: '6065',
      suburb: 'ASHBY',
    },
    {
      postCode: '6111',
      suburb: 'ASHENDON',
    },
    {
      postCode: '6054',
      suburb: 'ASHFIELD',
    },
    {
      postCode: '6156',
      suburb: 'ATTADALE',
    },
    {
      postCode: '6164',
      suburb: 'ATWELL',
    },
    {
      postCode: '6164',
      suburb: 'AUBIN GROVE',
    },
    {
      postCode: '6290',
      suburb: 'AUGUSTA',
    },
    {
      postCode: '6233',
      suburb: 'AUSTRALIND',
    },
    {
      postCode: '6069',
      suburb: 'AVELEY',
    },
    {
      postCode: '6084',
      suburb: 'AVON VALLEY NATIONAL PARK',
    },
    {
      postCode: '6412',
      suburb: 'BAANDEE',
    },
    {
      postCode: '6428',
      suburb: 'BABAKIN',
    },
    {
      postCode: '6701',
      suburb: 'BABBAGE ISLAND',
    },
    {
      postCode: '6317',
      suburb: 'BADGEBUP',
    },
    {
      postCode: '6475',
      suburb: 'BADGERIN ROCK',
    },
    {
      postCode: '6302',
      suburb: 'BADGIN',
    },
    {
      postCode: '6521',
      suburb: 'BADGINGARRA',
    },
    {
      postCode: '6383',
      suburb: 'BADJALING',
    },
    {
      postCode: '6082',
      suburb: 'BAILUP',
    },
    {
      postCode: '6562',
      suburb: 'BAKERS HILL',
    },
    {
      postCode: '6258',
      suburb: 'BALBARRUP',
    },
    {
      postCode: '6021',
      suburb: 'BALCATTA',
    },
    {
      postCode: '6914',
      suburb: 'BALCATTA',
    },
    {
      postCode: '6171',
      suburb: 'BALDIVIS',
    },
    {
      postCode: '6061',
      suburb: 'BALGA',
    },
    {
      postCode: '6253',
      suburb: 'BALINGUP',
    },
    {
      postCode: '6383',
      suburb: 'BALKULING',
    },
    {
      postCode: '6714',
      suburb: 'BALLA BALLA',
    },
    {
      postCode: '6302',
      suburb: 'BALLADONG',
    },
    {
      postCode: '6443',
      suburb: 'BALLADONIA',
    },
    {
      postCode: '6066',
      suburb: 'BALLAJURA',
    },
    {
      postCode: '6315',
      suburb: 'BALLAYING',
    },
    {
      postCode: '6606',
      suburb: 'BALLIDU',
    },
    {
      postCode: '6304',
      suburb: 'BALLY BALLY',
    },
    {
      postCode: '6503',
      suburb: 'BAMBUN',
    },
    {
      postCode: '6450',
      suburb: 'BANDY CREEK',
    },
    {
      postCode: '6440',
      suburb: 'BANDYA',
    },
    {
      postCode: '6164',
      suburb: 'BANJUP',
    },
    {
      postCode: '6031',
      suburb: 'BANKSIA GROVE',
    },
    {
      postCode: '6213',
      suburb: 'BANKSIADALE',
    },
    {
      postCode: '6390',
      suburb: 'BANNISTER',
    },
    {
      postCode: '6479',
      suburb: 'BARBALIN',
    },
    {
      postCode: '6510',
      suburb: 'BARBERTON',
    },
    {
      postCode: '6275',
      suburb: 'BARRABUP',
    },
    {
      postCode: '6209',
      suburb: 'BARRAGUP',
    },
    {
      postCode: '6712',
      suburb: 'BARROW ISLAND',
    },
    {
      postCode: '6056',
      suburb: 'BASKERVILLE',
    },
    {
      postCode: '6054',
      suburb: 'BASSENDEAN',
    },
    {
      postCode: '6934',
      suburb: 'BASSENDEAN',
    },
    {
      postCode: '6942',
      suburb: 'BASSENDEAN DC',
    },
    {
      postCode: '6150',
      suburb: 'BATEMAN',
    },
    {
      postCode: '6284',
      suburb: 'BAUDIN',
    },
    {
      postCode: '6714',
      suburb: 'BAYNTON',
    },
    {
      postCode: '6330',
      suburb: 'BAYONET HEAD',
    },
    {
      postCode: '6053',
      suburb: 'BAYSWATER',
    },
    {
      postCode: '6933',
      suburb: 'BAYSWATER',
    },
    {
      postCode: '6530',
      suburb: 'BEACHLANDS',
    },
    {
      postCode: '6472',
      suburb: 'BEACON',
    },
    {
      postCode: '6162',
      suburb: 'BEACONSFIELD',
    },
    {
      postCode: '6440',
      suburb: 'BEADELL',
    },
    {
      postCode: '6394',
      suburb: 'BEAUFORT RIVER',
    },
    {
      postCode: '6450',
      suburb: 'BEAUMONT',
    },
    {
      postCode: '6107',
      suburb: 'BECKENHAM',
    },
    {
      postCode: '6052',
      suburb: 'BEDFORD',
    },
    {
      postCode: '6112',
      suburb: 'BEDFORDALE',
    },
    {
      postCode: '6063',
      suburb: 'BEECHBORO',
    },
    {
      postCode: '6556',
      suburb: 'BEECHINA',
    },
    {
      postCode: '6260',
      suburb: 'BEEDELUP',
    },
    {
      postCode: '6224',
      suburb: 'BEELA',
    },
    {
      postCode: '6239',
      suburb: 'BEELERUP',
    },
    {
      postCode: '6164',
      suburb: 'BEELIAR',
    },
    {
      postCode: '6353',
      suburb: 'BEENONG',
    },
    {
      postCode: '6503',
      suburb: 'BEERMULLAH',
    },
    {
      postCode: '6566',
      suburb: 'BEJOORDING',
    },
    {
      postCode: '6027',
      suburb: 'BELDON',
    },
    {
      postCode: '6069',
      suburb: 'BELHUS',
    },
    {
      postCode: '6056',
      suburb: 'BELLEVUE',
    },
    {
      postCode: '6104',
      suburb: 'BELMONT',
    },
    {
      postCode: '6984',
      suburb: 'BELMONT',
    },
    {
      postCode: '6477',
      suburb: 'BENCUBBIN',
    },
    {
      postCode: '6223',
      suburb: 'BENGER',
    },
    {
      postCode: '6463',
      suburb: 'BENJABERRING',
    },
    {
      postCode: '6255',
      suburb: 'BENJINUP',
    },
    {
      postCode: '6063',
      suburb: 'BENNETT SPRINGS',
    },
    {
      postCode: '6102',
      suburb: 'BENTLEY',
    },
    {
      postCode: '6982',
      suburb: 'BENTLEY',
    },
    {
      postCode: '6102',
      suburb: 'BENTLEY DC',
    },
    {
      postCode: '6983',
      suburb: 'BENTLEY DC',
    },
    {
      postCode: '6102',
      suburb: 'BENTLEY SOUTH',
    },
    {
      postCode: '6530',
      suburb: 'BERESFORD',
    },
    {
      postCode: '6510',
      suburb: 'BERKSHIRE VALLEY',
    },
    {
      postCode: '6701',
      suburb: 'BERNIER ISLAND',
    },
    {
      postCode: '6167',
      suburb: 'BERTRAM',
    },
    {
      postCode: '6304',
      suburb: 'BEVERLEY',
    },
    {
      postCode: '6163',
      suburb: 'BIBRA LAKE',
    },
    {
      postCode: '6163',
      suburb: 'BIBRA LAKE DC',
    },
    {
      postCode: '6965',
      suburb: 'BIBRA LAKE DC',
    },
    {
      postCode: '6076',
      suburb: 'BICKLEY',
    },
    {
      postCode: '6157',
      suburb: 'BICTON',
    },
    {
      postCode: '6260',
      suburb: 'BIDDELIA',
    },
    {
      postCode: '6330',
      suburb: 'BIG GROVE',
    },
    {
      postCode: '6375',
      suburb: 'BILBARIN',
    },
    {
      postCode: '6725',
      suburb: 'BILINGURR',
    },
    {
      postCode: '6472',
      suburb: 'BIMBIJY',
    },
    {
      postCode: '6574',
      suburb: 'BINDI BINDI',
    },
    {
      postCode: '6502',
      suburb: 'BINDOON',
    },
    {
      postCode: '6502',
      suburb: 'BINDOON TRAINING AREA',
    },
    {
      postCode: '6430',
      suburb: 'BINDULI',
    },
    {
      postCode: '6233',
      suburb: 'BINNINGUP',
    },
    {
      postCode: '6532',
      suburb: 'BINNU',
    },
    {
      postCode: '6214',
      suburb: 'BIRCHMONT',
    },
    {
      postCode: '6530',
      suburb: 'BLUFF POINT',
    },
    {
      postCode: '6208',
      suburb: 'BLYTHEWOOD',
    },
    {
      postCode: '6280',
      suburb: 'BOALLIA',
    },
    {
      postCode: '6320',
      suburb: 'BOBALONG',
    },
    {
      postCode: '6424',
      suburb: 'BODALLIN',
    },
    {
      postCode: '6390',
      suburb: 'BODDINGTON',
    },
    {
      postCode: '6394',
      suburb: 'BOILUP',
    },
    {
      postCode: '6392',
      suburb: 'BOKAL',
    },
    {
      postCode: '6568',
      suburb: 'BOLGART',
    },
    {
      postCode: '6479',
      suburb: 'BONNIE ROCK',
    },
    {
      postCode: '6525',
      suburb: 'BONNIEFIELD',
    },
    {
      postCode: '6722',
      suburb: 'BOODARIE',
    },
    {
      postCode: '6423',
      suburb: 'BOODAROCKIN',
    },
    {
      postCode: '6525',
      suburb: 'BOOKARA',
    },
    {
      postCode: '6503',
      suburb: 'BOONANARRING',
    },
    {
      postCode: '6429',
      suburb: 'BOORABBIN',
    },
    {
      postCode: '6154',
      suburb: 'BOORAGOON',
    },
    {
      postCode: '6954',
      suburb: 'BOORAGOON',
    },
    {
      postCode: '6475',
      suburb: 'BOORALAMING',
    },
    {
      postCode: '6431',
      suburb: 'BOORARA',
    },
    {
      postCode: '6262',
      suburb: 'BOORARA BROOK',
    },
    {
      postCode: '6532',
      suburb: 'BOOTENAL',
    },
    {
      postCode: '6521',
      suburb: 'BOOTHENDARRA',
    },
    {
      postCode: '6286',
      suburb: 'BORANUP',
    },
    {
      postCode: '6338',
      suburb: 'BORDEN',
    },
    {
      postCode: '6320',
      suburb: 'BORDERDALE',
    },
    {
      postCode: '6330',
      suburb: 'BORNHOLM',
    },
    {
      postCode: '6394',
      suburb: 'BOSCABEL',
    },
    {
      postCode: '6432',
      suburb: 'BOULDER',
    },
    {
      postCode: '6312',
      suburb: 'BOUNDAIN',
    },
    {
      postCode: '6211',
      suburb: 'BOUVARD',
    },
    {
      postCode: '6280',
      suburb: 'BOVELL',
    },
    {
      postCode: '6333',
      suburb: 'BOW BRIDGE',
    },
    {
      postCode: '6225',
      suburb: 'BOWELLING',
    },
    {
      postCode: '6535',
      suburb: 'BOWES',
    },
    {
      postCode: '6623',
      suburb: 'BOWGADA',
    },
    {
      postCode: '6338',
      suburb: 'BOXWOOD HILL',
    },
    {
      postCode: '6056',
      suburb: 'BOYA',
    },
    {
      postCode: '6237',
      suburb: 'BOYANUP',
    },
    {
      postCode: '6450',
      suburb: 'BOYATUP',
    },
    {
      postCode: '6316',
      suburb: 'BOYERINE',
    },
    {
      postCode: '6244',
      suburb: 'BOYUP BROOK',
    },
    {
      postCode: '6055',
      suburb: 'BRABHAM',
    },
    {
      postCode: '6285',
      suburb: 'BRAMLEY',
    },
    {
      postCode: '6251',
      suburb: 'BRAZIER',
    },
    {
      postCode: '6503',
      suburb: 'BREERA',
    },
    {
      postCode: '6338',
      suburb: 'BREMER BAY',
    },
    {
      postCode: '6153',
      suburb: 'BRENTWOOD',
    },
    {
      postCode: '6043',
      suburb: 'BRETON BAY',
    },
    {
      postCode: '6255',
      suburb: 'BRIDGETOWN',
    },
    {
      postCode: '6069',
      suburb: 'BRIGADOON',
    },
    {
      postCode: '6532',
      suburb: 'BRINGO',
    },
    {
      postCode: '6280',
      suburb: 'BROADWATER',
    },
    {
      postCode: '6009',
      suburb: 'BROADWAY NEDLANDS',
    },
    {
      postCode: '6430',
      suburb: 'BROADWOOD',
    },
    {
      postCode: '6701',
      suburb: 'BROCKMAN',
    },
    {
      postCode: '6398',
      suburb: 'BROKE',
    },
    {
      postCode: '6112',
      suburb: 'BROOKDALE',
    },
    {
      postCode: '6239',
      suburb: 'BROOKHAMPTON',
    },
    {
      postCode: '6306',
      suburb: 'BROOKTON',
    },
    {
      postCode: '6725',
      suburb: 'BROOME',
    },
    {
      postCode: '6318',
      suburb: 'BROOMEHILL',
    },
    {
      postCode: '6318',
      suburb: 'BROOMEHILL EAST',
    },
    {
      postCode: '6318',
      suburb: 'BROOMEHILL VILLAGE',
    },
    {
      postCode: '6318',
      suburb: 'BROOMEHILL WEST',
    },
    {
      postCode: '6431',
      suburb: 'BROWN HILL',
    },
    {
      postCode: '6701',
      suburb: 'BROWN RANGE',
    },
    {
      postCode: '6418',
      suburb: 'BRUCE ROCK',
    },
    {
      postCode: '6224',
      suburb: 'BRUNSWICK',
    },
    {
      postCode: '6225',
      suburb: 'BUCKINGHAM',
    },
    {
      postCode: '6401',
      suburb: 'BUCKLAND',
    },
    {
      postCode: '6714',
      suburb: 'BULGARRA',
    },
    {
      postCode: '6149',
      suburb: 'BULL CREEK',
    },
    {
      postCode: '6429',
      suburb: 'BULLABULLING',
    },
    {
      postCode: '6373',
      suburb: 'BULLARING',
    },
    {
      postCode: '6532',
      suburb: 'BULLER',
    },
    {
      postCode: '6484',
      suburb: 'BULLFINCH',
    },
    {
      postCode: '6317',
      suburb: 'BULLOCK HILLS',
    },
    {
      postCode: '6084',
      suburb: 'BULLSBROOK',
    },
    {
      postCode: '6431',
      suburb: 'BULONG',
    },
    {
      postCode: '6306',
      suburb: 'BULYEE',
    },
    {
      postCode: '6230',
      suburb: 'BUNBURY',
    },
    {
      postCode: '6231',
      suburb: 'BUNBURY',
    },
    {
      postCode: '6522',
      suburb: 'BUNDANOON',
    },
    {
      postCode: '6353',
      suburb: 'BUNICHE',
    },
    {
      postCode: '6620',
      suburb: 'BUNJIL',
    },
    {
      postCode: '6613',
      suburb: 'BUNTINE',
    },
    {
      postCode: '6467',
      suburb: 'BURAKIN',
    },
    {
      postCode: '6452',
      suburb: 'BURAMINYA',
    },
    {
      postCode: '6227',
      suburb: 'BUREKUP',
    },
    {
      postCode: '6302',
      suburb: 'BURGES',
    },
    {
      postCode: '6401',
      suburb: 'BURLONG',
    },
    {
      postCode: '6532',
      suburb: 'BURMA ROAD',
    },
    {
      postCode: '6028',
      suburb: 'BURNS BEACH',
    },
    {
      postCode: '6285',
      suburb: 'BURNSIDE',
    },
    {
      postCode: '6421',
      suburb: 'BURRACOPPIN',
    },
    {
      postCode: '6490',
      suburb: 'BURRAN ROCK',
    },
    {
      postCode: '6714',
      suburb: 'BURRUP',
    },
    {
      postCode: '6100',
      suburb: 'BURSWOOD',
    },
    {
      postCode: '6055',
      suburb: 'BUSHMEAD',
    },
    {
      postCode: '6280',
      suburb: 'BUSSELTON',
    },
    {
      postCode: '6036',
      suburb: 'BUTLER',
    },
    {
      postCode: '6122',
      suburb: 'BYFORD',
    },
    {
      postCode: '6726',
      suburb: 'CABLE BEACH',
    },
    {
      postCode: '6466',
      suburb: 'CADOUX',
    },
    {
      postCode: '6443',
      suburb: 'CAIGUNA',
    },
    {
      postCode: '6569',
      suburb: 'CALINGIRI',
    },
    {
      postCode: '6167',
      suburb: 'CALISTA',
    },
    {
      postCode: '6302',
      suburb: 'CALJIE',
    },
    {
      postCode: '6260',
      suburb: 'CALLCUP',
    },
    {
      postCode: '6728',
      suburb: 'CAMBALLIN',
    },
    {
      postCode: '6743',
      suburb: 'CAMBRIDGE GULF',
    },
    {
      postCode: '6111',
      suburb: 'CAMILLO',
    },
    {
      postCode: '6315',
      suburb: 'CANCANNING',
    },
    {
      postCode: '6710',
      suburb: 'CANE',
    },
    {
      postCode: '6627',
      suburb: 'CANNA',
    },
    {
      postCode: '6153',
      suburb: 'CANNING BRIDGE APPLECROSS',
    },
    {
      postCode: '6111',
      suburb: 'CANNING MILLS',
    },
    {
      postCode: '6155',
      suburb: 'CANNING VALE',
    },
    {
      postCode: '6155',
      suburb: 'CANNING VALE DC',
    },
    {
      postCode: '6970',
      suburb: 'CANNING VALE DC',
    },
    {
      postCode: '6155',
      suburb: 'CANNING VALE SOUTH',
    },
    {
      postCode: '6107',
      suburb: 'CANNINGTON',
    },
    {
      postCode: '6987',
      suburb: 'CANNINGTON',
    },
    {
      postCode: '6452',
      suburb: 'CAPE ARID',
    },
    {
      postCode: '6532',
      suburb: 'CAPE BURNEY',
    },
    {
      postCode: '6450',
      suburb: 'CAPE LE GRAND',
    },
    {
      postCode: '6707',
      suburb: 'CAPE RANGE NATIONAL PARK',
    },
    {
      postCode: '6271',
      suburb: 'CAPEL',
    },
    {
      postCode: '6271',
      suburb: 'CAPEL RIVER',
    },
    {
      postCode: '6642',
      suburb: 'CAPRICORN',
    },
    {
      postCode: '6041',
      suburb: 'CARABAN',
    },
    {
      postCode: '6033',
      suburb: 'CARABOODA',
    },
    {
      postCode: '6569',
      suburb: 'CARANI',
    },
    {
      postCode: '6701',
      suburb: 'CARBLA',
    },
    {
      postCode: '6280',
      suburb: 'CARBUNUP RIVER',
    },
    {
      postCode: '6225',
      suburb: 'CARDIFF',
    },
    {
      postCode: '6122',
      suburb: 'CARDUP',
    },
    {
      postCode: '6230',
      suburb: 'CAREY PARK',
    },
    {
      postCode: '6020',
      suburb: 'CARINE',
    },
    {
      postCode: '6101',
      suburb: 'CARLISLE',
    },
    {
      postCode: '6101',
      suburb: 'CARLISLE NORTH',
    },
    {
      postCode: '6101',
      suburb: 'CARLISLE SOUTH',
    },
    {
      postCode: '6275',
      suburb: 'CARLOTTA',
    },
    {
      postCode: '6076',
      suburb: 'CARMEL',
    },
    {
      postCode: '6517',
      suburb: 'CARNAMAH',
    },
    {
      postCode: '6701',
      suburb: 'CARNARVON',
    },
    {
      postCode: '6423',
      suburb: 'CARRABIN',
    },
    {
      postCode: '6031',
      suburb: 'CARRAMAR',
    },
    {
      postCode: '6532',
      suburb: 'CARRARANG',
    },
    {
      postCode: '6317',
      suburb: 'CARROLUP',
    },
    {
      postCode: '6316',
      suburb: 'CARTMETICUP',
    },
    {
      postCode: '6450',
      suburb: 'CASCADE',
    },
    {
      postCode: '6450',
      suburb: 'CASTLETOWN',
    },
    {
      postCode: '6167',
      suburb: 'CASUARINA',
    },
    {
      postCode: '6507',
      suburb: 'CATABY',
    },
    {
      postCode: '6255',
      suburb: 'CATTERICK',
    },
    {
      postCode: '6055',
      suburb: 'CAVERSHAM',
    },
    {
      postCode: '6330',
      suburb: 'CENTENNIAL PARK',
    },
    {
      postCode: '6511',
      suburb: 'CERVANTES',
    },
    {
      postCode: '6450',
      suburb: 'CHADWICK',
    },
    {
      postCode: '6111',
      suburb: 'CHAMPION LAKES',
    },
    {
      postCode: '6490',
      suburb: 'CHANDLER',
    },
    {
      postCode: '6394',
      suburb: 'CHANGERUP',
    },
    {
      postCode: '6260',
      suburb: 'CHANNYBEARUP',
    },
    {
      postCode: '6280',
      suburb: 'CHAPMAN HILL',
    },
    {
      postCode: '6239',
      suburb: 'CHARLEY CREEK',
    },
    {
      postCode: '6395',
      suburb: 'CHERRY TREE POOL',
    },
    {
      postCode: '6328',
      suburb: 'CHEYNES',
    },
    {
      postCode: '6751',
      suburb: 'CHICHESTER',
    },
    {
      postCode: '6556',
      suburb: 'CHIDLOW',
    },
    {
      postCode: '6084',
      suburb: 'CHITTERING',
    },
    {
      postCode: '6244',
      suburb: 'CHOWERUP',
    },
    {
      postCode: '6798',
      suburb: 'CHRISTMAS ISLAND',
    },
    {
      postCode: '6018',
      suburb: 'CHURCHLANDS',
    },
    {
      postCode: '6015',
      suburb: 'CITY BEACH',
    },
    {
      postCode: '6000',
      suburb: 'CITY DELIVERY CENTRE',
    },
    {
      postCode: '6564',
      suburb: 'CLACKLINE',
    },
    {
      postCode: '6010',
      suburb: 'CLAREMONT',
    },
    {
      postCode: '6910',
      suburb: 'CLAREMONT',
    },
    {
      postCode: '6010',
      suburb: 'CLAREMONT NORTH',
    },
    {
      postCode: '6030',
      suburb: 'CLARKSON',
    },
    {
      postCode: '6472',
      suburb: 'CLEARY',
    },
    {
      postCode: '6714',
      suburb: 'CLEAVERVILLE',
    },
    {
      postCode: '6211',
      suburb: 'CLIFTON',
    },
    {
      postCode: '6850',
      suburb: 'CLOISTERS SQUARE PO',
    },
    {
      postCode: '6105',
      suburb: 'CLOVERDALE',
    },
    {
      postCode: '6985',
      suburb: 'CLOVERDALE',
    },
    {
      postCode: '6317',
      suburb: 'COBLININE',
    },
    {
      postCode: '6532',
      suburb: 'COBURN',
    },
    {
      postCode: '6731',
      suburb: 'COCKATOO ISLAND',
    },
    {
      postCode: '6164',
      suburb: 'COCKBURN CENTRAL',
    },
    {
      postCode: '6443',
      suburb: 'COCKLEBIDDY',
    },
    {
      postCode: '6308',
      suburb: 'CODJATOTINE',
    },
    {
      postCode: '6302',
      suburb: 'COLD HARBOUR',
    },
    {
      postCode: '6315',
      suburb: 'COLLANILLING',
    },
    {
      postCode: '6230',
      suburb: 'COLLEGE GROVE',
    },
    {
      postCode: '6225',
      suburb: 'COLLIE',
    },
    {
      postCode: '6225',
      suburb: 'COLLIE BURN',
    },
    {
      postCode: '6330',
      suburb: 'COLLINGWOOD HEIGHTS',
    },
    {
      postCode: '6330',
      suburb: 'COLLINGWOOD PARK',
    },
    {
      postCode: '6260',
      suburb: 'COLLINS',
    },
    {
      postCode: '6311',
      suburb: 'COMMODINE',
    },
    {
      postCode: '6152',
      suburb: 'COMO',
    },
    {
      postCode: '6952',
      suburb: 'COMO',
    },
    {
      postCode: '6450',
      suburb: 'CONDINGUP',
    },
    {
      postCode: '6027',
      suburb: 'CONNOLLY',
    },
    {
      postCode: '6311',
      suburb: 'CONTINE',
    },
    {
      postCode: '6210',
      suburb: 'COODANUP',
    },
    {
      postCode: '6166',
      suburb: 'COOGEE',
    },
    {
      postCode: '6219',
      suburb: 'COOKERNUP',
    },
    {
      postCode: '6638',
      suburb: 'COOLADAR HILL',
    },
    {
      postCode: '6163',
      suburb: 'COOLBELLUP',
    },
    {
      postCode: '6050',
      suburb: 'COOLBINIA',
    },
    {
      postCode: '6532',
      suburb: 'COOLCALALAYA',
    },
    {
      postCode: '6429',
      suburb: 'COOLGARDIE',
    },
    {
      postCode: '6507',
      suburb: 'COOLJARLOO',
    },
    {
      postCode: '6168',
      suburb: 'COOLOONGUP',
    },
    {
      postCode: '6214',
      suburb: 'COOLUP',
    },
    {
      postCode: '6450',
      suburb: 'COOMALBIDGUP',
    },
    {
      postCode: '6512',
      suburb: 'COOMBERDALE',
    },
    {
      postCode: '6503',
      suburb: 'COONABIDGEE',
    },
    {
      postCode: '6566',
      suburb: 'COONDLE',
    },
    {
      postCode: '6515',
      suburb: 'COOROW',
    },
    {
      postCode: '6714',
      suburb: 'COOYA POOYA',
    },
    {
      postCode: '6562',
      suburb: 'COPLEY',
    },
    {
      postCode: '6701',
      suburb: 'CORAL BAY',
    },
    {
      postCode: '6426',
      suburb: 'CORINTHIA',
    },
    {
      postCode: '6375',
      suburb: 'CORRIGIN',
    },
    {
      postCode: '6440',
      suburb: 'COSMO NEWBERY',
    },
    {
      postCode: '6720',
      suburb: 'COSSACK',
    },
    {
      postCode: '6011',
      suburb: 'COTTESLOE',
    },
    {
      postCode: '6911',
      suburb: 'COTTESLOE',
    },
    {
      postCode: '6288',
      suburb: 'COURTENAY',
    },
    {
      postCode: '6336',
      suburb: 'COWALELLUP',
    },
    {
      postCode: '6503',
      suburb: 'COWALLA',
    },
    {
      postCode: '6284',
      suburb: 'COWARAMUP',
    },
    {
      postCode: '6485',
      suburb: 'COWCOWING',
    },
    {
      postCode: '6317',
      suburb: 'COYRECUP',
    },
    {
      postCode: '6025',
      suburb: 'CRAIGIE',
    },
    {
      postCode: '6420',
      suburb: 'CRAMPHORNE',
    },
    {
      postCode: '6321',
      suburb: 'CRANBROOK',
    },
    {
      postCode: '6009',
      suburb: 'CRAWLEY',
    },
    {
      postCode: '6236',
      suburb: 'CROOKED BROOK',
    },
    {
      postCode: '6390',
      suburb: 'CROSSMAN',
    },
    {
      postCode: '6262',
      suburb: 'CROWEA',
    },
    {
      postCode: '6311',
      suburb: 'CUBALLING',
    },
    {
      postCode: '6383',
      suburb: 'CUBBINE',
    },
    {
      postCode: '6640',
      suburb: 'CUE',
    },
    {
      postCode: '6566',
      suburb: 'CULHAM',
    },
    {
      postCode: '6067',
      suburb: 'CULLACABARDEE',
    },
    {
      postCode: '6503',
      suburb: 'CULLALLA',
    },
    {
      postCode: '6434',
      suburb: 'CUNDEELEE',
    },
    {
      postCode: '6407',
      suburb: 'CUNDERDIN',
    },
    {
      postCode: '6275',
      suburb: 'CUNDINUP',
    },
    {
      postCode: '6401',
      suburb: 'CUNJARDINE',
    },
    {
      postCode: '6028',
      suburb: 'CURRAMBINE',
    },
    {
      postCode: '6330',
      suburb: 'CUTHBERT',
    },
    {
      postCode: '6410',
      suburb: 'DAADENNING CREEK',
    },
    {
      postCode: '6638',
      suburb: 'DAGGAR HILLS',
    },
    {
      postCode: '6008',
      suburb: 'DAGLISH',
    },
    {
      postCode: '6304',
      suburb: 'DALE',
    },
    {
      postCode: '6302',
      suburb: 'DALIAK',
    },
    {
      postCode: '6009',
      suburb: 'DALKEITH',
    },
    {
      postCode: '6609',
      suburb: 'DALWALLINU',
    },
    {
      postCode: '6230',
      suburb: 'DALYELLUP',
    },
    {
      postCode: '6450',
      suburb: 'DALYUP',
    },
    {
      postCode: '6713',
      suburb: 'DAMPIER',
    },
    {
      postCode: '6713',
      suburb: 'DAMPIER ARCHIPELAGO',
    },
    {
      postCode: '6725',
      suburb: 'DAMPIER PENINSULA',
    },
    {
      postCode: '6479',
      suburb: 'DANDANNING',
    },
    {
      postCode: '6507',
      suburb: 'DANDARAGAN',
    },
    {
      postCode: '6383',
      suburb: 'DANGIN',
    },
    {
      postCode: '6065',
      suburb: 'DARCH',
    },
    {
      postCode: '6392',
      suburb: 'DARDADINE',
    },
    {
      postCode: '6236',
      suburb: 'DARDANUP',
    },
    {
      postCode: '6236',
      suburb: 'DARDANUP WEST',
    },
    {
      postCode: '6392',
      suburb: 'DARKAN',
    },
    {
      postCode: '6122',
      suburb: 'DARLING DOWNS',
    },
    {
      postCode: '6070',
      suburb: 'DARLINGTON',
    },
    {
      postCode: '6275',
      suburb: 'DARRADUP',
    },
    {
      postCode: '6532',
      suburb: 'DARTMOOR',
    },
    {
      postCode: '6320',
      suburb: 'DARTNALL',
    },
    {
      postCode: '6317',
      suburb: 'DATATINE',
    },
    {
      postCode: '6230',
      suburb: 'DAVENPORT',
    },
    {
      postCode: '6211',
      suburb: 'DAWESVILLE',
    },
    {
      postCode: '6055',
      suburb: 'DAYTON',
    },
    {
      postCode: '6722',
      suburb: 'DE GREY',
    },
    {
      postCode: '6258',
      suburb: 'DEANMILL',
    },
    {
      postCode: '6532',
      suburb: 'DEEPDALE',
    },
    {
      postCode: '6290',
      suburb: 'DEEPDENE',
    },
    {
      postCode: '6324',
      suburb: 'DENBARKER',
    },
    {
      postCode: '6537',
      suburb: 'DENHAM',
    },
    {
      postCode: '6333',
      suburb: 'DENMARK',
    },
    {
      postCode: '6728',
      suburb: 'DERBY',
    },
    {
      postCode: '6630',
      suburb: 'DEVILS CREEK',
    },
    {
      postCode: '6567',
      suburb: 'DEWARS POOL',
    },
    {
      postCode: '6258',
      suburb: 'DIAMOND TREE',
    },
    {
      postCode: '6059',
      suburb: 'DIANELLA',
    },
    {
      postCode: '6532',
      suburb: 'DINDILOA',
    },
    {
      postCode: '6258',
      suburb: 'DINGUP',
    },
    {
      postCode: '6244',
      suburb: 'DINNINUP',
    },
    {
      postCode: '6537',
      suburb: 'DIRK HARTOG ISLAND',
    },
    {
      postCode: '6258',
      suburb: 'DIXVALE',
    },
    {
      postCode: '6725',
      suburb: 'DJUGUN',
    },
    {
      postCode: '6525',
      suburb: 'DONGARA',
    },
    {
      postCode: '6315',
      suburb: 'DONGOLOCKING',
    },
    {
      postCode: '6258',
      suburb: 'DONNELLY RIVER',
    },
    {
      postCode: '6239',
      suburb: 'DONNYBROOK',
    },
    {
      postCode: '6112',
      suburb: 'DOOBARDA',
    },
    {
      postCode: '6383',
      suburb: 'DOODENANNING',
    },
    {
      postCode: '6411',
      suburb: 'DOODLAKINE',
    },
    {
      postCode: '6701',
      suburb: 'DORRE ISLAND',
    },
    {
      postCode: '6018',
      suburb: 'DOUBLEVIEW',
    },
    {
      postCode: '6461',
      suburb: 'DOWERIN',
    },
    {
      postCode: '6330',
      suburb: 'DROME',
    },
    {
      postCode: '6532',
      suburb: 'DRUMMOND COVE',
    },
    {
      postCode: '6311',
      suburb: 'DRYANDRA',
    },
    {
      postCode: '6740',
      suburb: 'DRYSDALE RIVER',
    },
    {
      postCode: '6519',
      suburb: 'DUDAWA',
    },
    {
      postCode: '6363',
      suburb: 'DUDININ',
    },
    {
      postCode: '6210',
      suburb: 'DUDLEY PARK',
    },
    {
      postCode: '6475',
      suburb: 'DUKIN',
    },
    {
      postCode: '6383',
      suburb: 'DULBELLING',
    },
    {
      postCode: '6425',
      suburb: 'DULYALBIN',
    },
    {
      postCode: '6566',
      suburb: 'DUMBARTON',
    },
    {
      postCode: '6312',
      suburb: 'DUMBERNING',
    },
    {
      postCode: '6350',
      suburb: 'DUMBLEYUNG',
    },
    {
      postCode: '6023',
      suburb: 'DUNCRAIG',
    },
    {
      postCode: '6443',
      suburb: 'DUNDAS',
    },
    {
      postCode: '6355',
      suburb: 'DUNN ROCK',
    },
    {
      postCode: '6281',
      suburb: 'DUNSBOROUGH',
    },
    {
      postCode: '6743',
      suburb: 'DURACK',
    },
    {
      postCode: '6393',
      suburb: 'DURANILLIN',
    },
    {
      postCode: '6532',
      suburb: 'DURAWAH',
    },
    {
      postCode: '6308',
      suburb: 'DWARDA',
    },
    {
      postCode: '6213',
      suburb: 'DWELLINGUP',
    },
    {
      postCode: '6281',
      suburb: 'EAGLE BAY',
    },
    {
      postCode: '6290',
      suburb: 'EAST AUGUSTA',
    },
    {
      postCode: '6606',
      suburb: 'EAST BALLIDU',
    },
    {
      postCode: '6304',
      suburb: 'EAST BEVERLEY',
    },
    {
      postCode: '6535',
      suburb: 'EAST BOWES',
    },
    {
      postCode: '6230',
      suburb: 'EAST BUNBURY',
    },
    {
      postCode: '6107',
      suburb: 'EAST CANNINGTON',
    },
    {
      postCode: '6701',
      suburb: 'EAST CARNARVON',
    },
    {
      postCode: '6532',
      suburb: 'EAST CHAPMAN',
    },
    {
      postCode: '6606',
      suburb: 'EAST DAMBORING',
    },
    {
      postCode: '6158',
      suburb: 'EAST FREMANTLE',
    },
    {
      postCode: '6705',
      suburb: 'EAST LYONS RIVER',
    },
    {
      postCode: '6450',
      suburb: 'EAST MUNGLINUP',
    },
    {
      postCode: '6640',
      suburb: 'EAST MURCHISON',
    },
    {
      postCode: '6532',
      suburb: 'EAST NABAWA',
    },
    {
      postCode: '6275',
      suburb: 'EAST NANNUP',
    },
    {
      postCode: '6355',
      suburb: 'EAST NEWDEGATE',
    },
    {
      postCode: '6004',
      suburb: 'EAST PERTH',
    },
    {
      postCode: '6892',
      suburb: 'EAST PERTH',
    },
    {
      postCode: '6308',
      suburb: 'EAST PINGELLY',
    },
    {
      postCode: '6309',
      suburb: 'EAST POPANYINNING',
    },
    {
      postCode: '6168',
      suburb: 'EAST ROCKINGHAM',
    },
    {
      postCode: '6101',
      suburb: 'EAST VICTORIA PARK',
    },
    {
      postCode: '6981',
      suburb: 'EAST VICTORIA PARK',
    },
    {
      postCode: '6370',
      suburb: 'EAST WICKEPIN',
    },
    {
      postCode: '6532',
      suburb: 'EAST YUNA',
    },
    {
      postCode: '6260',
      suburb: 'EASTBROOK',
    },
    {
      postCode: '6232',
      suburb: 'EATON',
    },
    {
      postCode: '6054',
      suburb: 'EDEN HILL',
    },
    {
      postCode: '6027',
      suburb: 'EDGEWATER',
    },
    {
      postCode: '6515',
      suburb: 'EGANU',
    },
    {
      postCode: '6034',
      suburb: 'EGLINTON',
    },
    {
      postCode: '6725',
      suburb: 'EIGHTY MILE BEACH',
    },
    {
      postCode: '6490',
      suburb: 'ELABBIN',
    },
    {
      postCode: '6479',
      suburb: 'ELACHBUTTING',
    },
    {
      postCode: '6237',
      suburb: 'ELGIN',
    },
    {
      postCode: '6330',
      suburb: 'ELLEKER',
    },
    {
      postCode: '6069',
      suburb: 'ELLENBROOK',
    },
    {
      postCode: '6532',
      suburb: 'ELLENDALE',
    },
    {
      postCode: '6062',
      suburb: 'EMBLETON',
    },
    {
      postCode: '6431',
      suburb: 'EMU FLAT',
    },
    {
      postCode: '6330',
      suburb: 'EMU POINT',
    },
    {
      postCode: '6518',
      suburb: 'ENEABBA',
    },
    {
      postCode: '6484',
      suburb: 'ENNUIN',
    },
    {
      postCode: '6532',
      suburb: 'ERADU',
    },
    {
      postCode: '6532',
      suburb: 'ERADU SOUTH',
    },
    {
      postCode: '6210',
      suburb: 'ERSKINE',
    },
    {
      postCode: '6450',
      suburb: 'ESPERANCE',
    },
    {
      postCode: '6213',
      suburb: 'ETMILYN',
    },
    {
      postCode: '6443',
      suburb: 'EUCLA',
    },
    {
      postCode: '6532',
      suburb: 'EURARDY',
    },
    {
      postCode: '6317',
      suburb: 'EWLYAMARTUP',
    },
    {
      postCode: '6707',
      suburb: 'EXMOUTH',
    },
    {
      postCode: '6707',
      suburb: 'EXMOUTH GULF',
    },
    {
      postCode: '6208',
      suburb: 'FAIRBRIDGE',
    },
    {
      postCode: '6210',
      suburb: 'FALCON',
    },
    {
      postCode: '6236',
      suburb: 'FERGUSON',
    },
    {
      postCode: '6148',
      suburb: 'FERNDALE',
    },
    {
      postCode: '6431',
      suburb: 'FEYSVILLE',
    },
    {
      postCode: '6432',
      suburb: 'FIMISTON',
    },
    {
      postCode: '6722',
      suburb: 'FINUCANE',
    },
    {
      postCode: '6337',
      suburb: 'FITZGERALD',
    },
    {
      postCode: '6346',
      suburb: 'FITZGERALD RIVER NATIONAL PARK',
    },
    {
      postCode: '6765',
      suburb: 'FITZROY CROSSING',
    },
    {
      postCode: '6302',
      suburb: 'FLINT',
    },
    {
      postCode: '6014',
      suburb: 'FLOREAT',
    },
    {
      postCode: '6302',
      suburb: 'FLYNN',
    },
    {
      postCode: '6286',
      suburb: 'FOREST GROVE',
    },
    {
      postCode: '6324',
      suburb: 'FOREST HILL',
    },
    {
      postCode: '6434',
      suburb: 'FORREST',
    },
    {
      postCode: '6271',
      suburb: 'FORREST BEACH',
    },
    {
      postCode: '6359',
      suburb: 'FORRESTANIA',
    },
    {
      postCode: '6112',
      suburb: 'FORRESTDALE',
    },
    {
      postCode: '6058',
      suburb: 'FORRESTFIELD',
    },
    {
      postCode: '6716',
      suburb: 'FORTESCUE',
    },
    {
      postCode: '6537',
      suburb: 'FRANCOIS PERON NATIONAL PARK',
    },
    {
      postCode: '6396',
      suburb: 'FRANKLAND RIVER',
    },
    {
      postCode: '6443',
      suburb: 'FRASER RANGE',
    },
    {
      postCode: '6160',
      suburb: 'FREMANTLE',
    },
    {
      postCode: '6959',
      suburb: 'FREMANTLE',
    },
    {
      postCode: '6330',
      suburb: 'FRENCHMAN BAY',
    },
    {
      postCode: '6209',
      suburb: 'FURNISSDALE',
    },
    {
      postCode: '6574',
      suburb: 'GABALONG',
    },
    {
      postCode: '6041',
      suburb: 'GABBADAH',
    },
    {
      postCode: '6476',
      suburb: 'GABBIN',
    },
    {
      postCode: '6337',
      suburb: 'GAIRDNER',
    },
    {
      postCode: '6714',
      suburb: 'GAP RIDGE',
    },
    {
      postCode: '6168',
      suburb: 'GARDEN ISLAND',
    },
    {
      postCode: '6705',
      suburb: 'GASCOYNE JUNCTION',
    },
    {
      postCode: '6705',
      suburb: 'GASCOYNE RIVER',
    },
    {
      postCode: '6728',
      suburb: 'GEEGULLY CREEK',
    },
    {
      postCode: '6230',
      suburb: 'GELORUP',
    },
    {
      postCode: '6280',
      suburb: 'GEOGRAPHE',
    },
    {
      postCode: '6532',
      suburb: 'GEORGINA',
    },
    {
      postCode: '6530',
      suburb: 'GERALDTON',
    },
    {
      postCode: '6531',
      suburb: 'GERALDTON PO',
    },
    {
      postCode: '6426',
      suburb: 'GHOOLI',
    },
    {
      postCode: '6743',
      suburb: 'GIBB',
    },
    {
      postCode: '6448',
      suburb: 'GIBSON',
    },
    {
      postCode: '872',
      suburb: 'GIBSON DESERT NORTH',
    },
    {
      postCode: '872',
      suburb: 'GIBSON DESERT SOUTH',
    },
    {
      postCode: '6083',
      suburb: 'GIDGEGANNUP',
    },
    {
      postCode: '6302',
      suburb: 'GILGERING',
    },
    {
      postCode: '6370',
      suburb: 'GILLIMANNING',
    },
    {
      postCode: '6510',
      suburb: 'GILLINGARRA',
    },
    {
      postCode: '6701',
      suburb: 'GILROYD',
    },
    {
      postCode: '6725',
      suburb: 'GINGERAH',
    },
    {
      postCode: '6503',
      suburb: 'GINGIN',
    },
    {
      postCode: '6503',
      suburb: 'GINGINUP',
    },
    {
      postCode: '6064',
      suburb: 'GIRRAWHEEN',
    },
    {
      postCode: '6330',
      suburb: 'GLEDHOW',
    },
    {
      postCode: '6071',
      suburb: 'GLEN FORREST',
    },
    {
      postCode: '6230',
      suburb: 'GLEN IRIS',
    },
    {
      postCode: '6239',
      suburb: 'GLEN MERVYN',
    },
    {
      postCode: '6316',
      suburb: 'GLENCOE',
    },
    {
      postCode: '6016',
      suburb: 'GLENDALOUGH',
    },
    {
      postCode: '6532',
      suburb: 'GLENFIELD',
    },
    {
      postCode: '6256',
      suburb: 'GLENLYNN',
    },
    {
      postCode: '6258',
      suburb: 'GLENORAN',
    },
    {
      postCode: '6509',
      suburb: 'GLENTROMIE',
    },
    {
      postCode: '6077',
      suburb: 'GNANGARA',
    },
    {
      postCode: '6285',
      suburb: 'GNARABUP',
    },
    {
      postCode: '6714',
      suburb: 'GNOOREA',
    },
    {
      postCode: '6335',
      suburb: 'GNOWANGERUP',
    },
    {
      postCode: '6328',
      suburb: 'GNOWELLEN',
    },
    {
      postCode: '6174',
      suburb: 'GOLDEN BAY',
    },
    {
      postCode: '6330',
      suburb: 'GOODE BEACH',
    },
    {
      postCode: '6468',
      suburb: 'GOODLANDS',
    },
    {
      postCode: '6460',
      suburb: 'GOOMALLING',
    },
    {
      postCode: '6415',
      suburb: 'GOOMARIN',
    },
    {
      postCode: '6076',
      suburb: 'GOOSEBERRY HILL',
    },
    {
      postCode: '6375',
      suburb: 'GORGE ROCK',
    },
    {
      postCode: '6556',
      suburb: 'GORRIE',
    },
    {
      postCode: '6110',
      suburb: 'GOSNELLS',
    },
    {
      postCode: '6990',
      suburb: 'GOSNELLS',
    },
    {
      postCode: '6284',
      suburb: 'GRACETOWN',
    },
    {
      postCode: '6503',
      suburb: 'GRANVILLE',
    },
    {
      postCode: '6446',
      suburb: 'GRASS PATCH',
    },
    {
      postCode: '6403',
      suburb: 'GRASS VALLEY',
    },
    {
      postCode: '6514',
      suburb: 'GREEN HEAD',
    },
    {
      postCode: '6328',
      suburb: 'GREEN RANGE',
    },
    {
      postCode: '6330',
      suburb: 'GREEN VALLEY',
    },
    {
      postCode: '6254',
      suburb: 'GREENBUSHES',
    },
    {
      postCode: '6210',
      suburb: 'GREENFIELDS',
    },
    {
      postCode: '6302',
      suburb: 'GREENHILLS',
    },
    {
      postCode: '6056',
      suburb: 'GREENMOUNT',
    },
    {
      postCode: '6532',
      suburb: 'GREENOUGH',
    },
    {
      postCode: '6024',
      suburb: 'GREENWOOD',
    },
    {
      postCode: '6924',
      suburb: 'GREENWOOD',
    },
    {
      postCode: '6405',
      suburb: 'GREENWOODS VALLEY',
    },
    {
      postCode: '6535',
      suburb: 'GREGORY',
    },
    {
      postCode: '6521',
      suburb: 'GREY',
    },
    {
      postCode: '6701',
      suburb: 'GREYS PLAIN',
    },
    {
      postCode: '6253',
      suburb: 'GRIMWADE',
    },
    {
      postCode: '6041',
      suburb: 'GUILDERTON',
    },
    {
      postCode: '6055',
      suburb: 'GUILDFORD',
    },
    {
      postCode: '6935',
      suburb: 'GUILDFORD',
    },
    {
      postCode: '6315',
      suburb: 'GUNDARING',
    },
    {
      postCode: '6513',
      suburb: 'GUNYIDI',
    },
    {
      postCode: '6623',
      suburb: 'GUTHA',
    },
    {
      postCode: '6302',
      suburb: 'GWAMBYGINE',
    },
    {
      postCode: '6018',
      suburb: 'GWELUP',
    },
    {
      postCode: '6018',
      suburb: 'GWELUP DC',
    },
    {
      postCode: '6237',
      suburb: 'GWINDINUP',
    },
    {
      postCode: '6076',
      suburb: 'HACKETTS GULLY',
    },
    {
      postCode: '6770',
      suburb: 'HALLS CREEK',
    },
    {
      postCode: '6210',
      suburb: 'HALLS HEAD',
    },
    {
      postCode: '6215',
      suburb: 'HAMEL',
    },
    {
      postCode: '6288',
      suburb: 'HAMELIN BAY',
    },
    {
      postCode: '6532',
      suburb: 'HAMELIN POOL',
    },
    {
      postCode: '6022',
      suburb: 'HAMERSLEY',
    },
    {
      postCode: '6716',
      suburb: 'HAMERSLEY RANGE',
    },
    {
      postCode: '6163',
      suburb: 'HAMILTON HILL',
    },
    {
      postCode: '6963',
      suburb: 'HAMILTON HILL',
    },
    {
      postCode: '6164',
      suburb: 'HAMMOND PARK',
    },
    {
      postCode: '6430',
      suburb: 'HANNANS',
    },
    {
      postCode: '6433',
      suburb: 'HANNANS PO',
    },
    {
      postCode: '6225',
      suburb: 'HARRIS RIVER',
    },
    {
      postCode: '6112',
      suburb: 'HARRISDALE',
    },
    {
      postCode: '6361',
      suburb: 'HARRISMITH',
    },
    {
      postCode: '6220',
      suburb: 'HARVEY',
    },
    {
      postCode: '6308',
      suburb: 'HASTINGS',
    },
    {
      postCode: '6356',
      suburb: 'HATTER HILL',
    },
    {
      postCode: '6333',
      suburb: 'HAY',
    },
    {
      postCode: '6112',
      suburb: 'HAYNES',
    },
    {
      postCode: '6055',
      suburb: 'HAZELMERE',
    },
    {
      postCode: '6333',
      suburb: 'HAZELVALE',
    },
    {
      postCode: '6027',
      suburb: 'HEATHRIDGE',
    },
    {
      postCode: '6056',
      suburb: 'HELENA VALLEY',
    },
    {
      postCode: '6166',
      suburb: 'HENDERSON',
    },
    {
      postCode: '6055',
      suburb: 'HENLEY BROOK',
    },
    {
      postCode: '6236',
      suburb: 'HENTY',
    },
    {
      postCode: '6017',
      suburb: 'HERDSMAN',
    },
    {
      postCode: '6056',
      suburb: 'HERNE HILL',
    },
    {
      postCode: '6211',
      suburb: 'HERRON',
    },
    {
      postCode: '6255',
      suburb: 'HESTER',
    },
    {
      postCode: '6255',
      suburb: 'HESTER BROOK',
    },
    {
      postCode: '6532',
      suburb: 'HICKETY',
    },
    {
      postCode: '6443',
      suburb: 'HIGGINSVILLE',
    },
    {
      postCode: '6057',
      suburb: 'HIGH WYCOMBE',
    },
    {
      postCode: '6313',
      suburb: 'HIGHBURY',
    },
    {
      postCode: '6003',
      suburb: 'HIGHGATE',
    },
    {
      postCode: '6112',
      suburb: 'HILBERT',
    },
    {
      postCode: '6521',
      suburb: 'HILL RIVER',
    },
    {
      postCode: '6025',
      suburb: 'HILLARYS',
    },
    {
      postCode: '6923',
      suburb: 'HILLARYS',
    },
    {
      postCode: '6168',
      suburb: 'HILLMAN',
    },
    {
      postCode: '6312',
      suburb: 'HILLSIDE',
    },
    {
      postCode: '6163',
      suburb: 'HILTON',
    },
    {
      postCode: '6462',
      suburb: 'HINDMARSH',
    },
    {
      postCode: '6413',
      suburb: 'HINES HILL',
    },
    {
      postCode: '6280',
      suburb: 'HITHERGREEN',
    },
    {
      postCode: '6065',
      suburb: 'HOCKING',
    },
    {
      postCode: '6566',
      suburb: 'HODDYS WELL',
    },
    {
      postCode: '6220',
      suburb: 'HOFFMAN',
    },
    {
      postCode: '6426',
      suburb: 'HOLLETON',
    },
    {
      postCode: '6522',
      suburb: 'HOLMWOOD',
    },
    {
      postCode: '6355',
      suburb: 'HOLT ROCK',
    },
    {
      postCode: '6213',
      suburb: 'HOLYOAKE',
    },
    {
      postCode: '6799',
      suburb: 'HOME ISLAND COCOS (KEELING) ISLANDS',
    },
    {
      postCode: '6165',
      suburb: 'HOPE VALLEY',
    },
    {
      postCode: '6125',
      suburb: 'HOPELAND',
    },
    {
      postCode: '6348',
      suburb: 'HOPETOUN',
    },
    {
      postCode: '6535',
      suburb: 'HORROCKS',
    },
    {
      postCode: '6530',
      suburb: 'HOUTMAN ABROLHOS',
    },
    {
      postCode: '6071',
      suburb: 'HOVEA',
    },
    {
      postCode: '6532',
      suburb: 'HOWATHARRA',
    },
    {
      postCode: '6450',
      suburb: 'HOWICK',
    },
    {
      postCode: '6460',
      suburb: 'HULONGINE',
    },
    {
      postCode: '6110',
      suburb: 'HUNTINGDALE',
    },
    {
      postCode: '6359',
      suburb: 'HYDEN',
    },
    {
      postCode: '6522',
      suburb: 'IKEWA',
    },
    {
      postCode: '6028',
      suburb: 'ILUKA',
    },
    {
      postCode: '6721',
      suburb: 'INDEE',
    },
    {
      postCode: '6701',
      suburb: 'INGGARDA',
    },
    {
      postCode: '6213',
      suburb: 'INGLEHOPE',
    },
    {
      postCode: '6052',
      suburb: 'INGLEWOOD',
    },
    {
      postCode: '6932',
      suburb: 'INGLEWOOD',
    },
    {
      postCode: '6302',
      suburb: 'INKPEN',
    },
    {
      postCode: '6018',
      suburb: 'INNALOO',
    },
    {
      postCode: '6918',
      suburb: 'INNALOO',
    },
    {
      postCode: '6751',
      suburb: 'INNAWANGA',
    },
    {
      postCode: '6401',
      suburb: 'IRISHTOWN',
    },
    {
      postCode: '872',
      suburb: 'IRRUNYTJU',
    },
    {
      postCode: '6525',
      suburb: 'IRWIN',
    },
    {
      postCode: '6452',
      suburb: 'ISRAELITE BAY',
    },
    {
      postCode: '6535',
      suburb: 'ISSEKA',
    },
    {
      postCode: '6335',
      suburb: 'JACKITUP',
    },
    {
      postCode: '6337',
      suburb: 'JACUP',
    },
    {
      postCode: '6275',
      suburb: 'JALBARRAGUP',
    },
    {
      postCode: '6315',
      suburb: 'JALORAN',
    },
    {
      postCode: '6077',
      suburb: 'JANDABUP',
    },
    {
      postCode: '6164',
      suburb: 'JANDAKOT',
    },
    {
      postCode: '6056',
      suburb: 'JANE BROOK',
    },
    {
      postCode: '6258',
      suburb: 'JARDEE',
    },
    {
      postCode: '6728',
      suburb: 'JARLMADANGAH BURRU',
    },
    {
      postCode: '6124',
      suburb: 'JARRAHDALE',
    },
    {
      postCode: '6275',
      suburb: 'JARRAHWOOD',
    },
    {
      postCode: '6306',
      suburb: 'JELCOBINE',
    },
    {
      postCode: '6401',
      suburb: 'JENNACUBBINE',
    },
    {
      postCode: '6401',
      suburb: 'JENNAPULLIN',
    },
    {
      postCode: '6346',
      suburb: 'JERDACUTTUP',
    },
    {
      postCode: '6337',
      suburb: 'JERRAMUNGUP',
    },
    {
      postCode: '6612',
      suburb: 'JIBBERDING',
    },
    {
      postCode: '6753',
      suburb: 'JIGALONG',
    },
    {
      postCode: '6365',
      suburb: 'JILAKIN',
    },
    {
      postCode: '6036',
      suburb: 'JINDALEE',
    },
    {
      postCode: '6280',
      suburb: 'JINDONG',
    },
    {
      postCode: '6395',
      suburb: 'JINGALUP',
    },
    {
      postCode: '6365',
      suburb: 'JITARNING',
    },
    {
      postCode: '6014',
      suburb: 'JOLIMONT',
    },
    {
      postCode: '6027',
      suburb: 'JOONDALUP',
    },
    {
      postCode: '6027',
      suburb: 'JOONDALUP DC',
    },
    {
      postCode: '6919',
      suburb: 'JOONDALUP DC',
    },
    {
      postCode: '6060',
      suburb: 'JOONDANNA',
    },
    {
      postCode: '6567',
      suburb: 'JULIMAR',
    },
    {
      postCode: '6751',
      suburb: 'JUNA DOWNS',
    },
    {
      postCode: '6516',
      suburb: 'JURIEN BAY',
    },
    {
      postCode: '6519',
      suburb: 'KADATHINNI',
    },
    {
      postCode: '6076',
      suburb: 'KALAMUNDA',
    },
    {
      postCode: '6926',
      suburb: 'KALAMUNDA',
    },
    {
      postCode: '6468',
      suburb: 'KALANNIE',
    },
    {
      postCode: '6536',
      suburb: 'KALBARRI',
    },
    {
      postCode: '6536',
      suburb: 'KALBARRI NATIONAL PARK',
    },
    {
      postCode: '6330',
      suburb: 'KALGAN',
    },
    {
      postCode: '6430',
      suburb: 'KALGOORLIE',
    },
    {
      postCode: '6433',
      suburb: 'KALGOORLIE DC',
    },
    {
      postCode: '6433',
      suburb: 'KALGOORLIE PO',
    },
    {
      postCode: '6280',
      suburb: 'KALGUP',
    },
    {
      postCode: '6025',
      suburb: 'KALLAROO',
    },
    {
      postCode: '6280',
      suburb: 'KALOORUP',
    },
    {
      postCode: '6740',
      suburb: 'KALUMBURU',
    },
    {
      postCode: '6442',
      suburb: 'KAMBALDA EAST',
    },
    {
      postCode: '6442',
      suburb: 'KAMBALDA WEST',
    },
    {
      postCode: '6255',
      suburb: 'KANGAROO GULLY',
    },
    {
      postCode: '6431',
      suburb: 'KANOWNA',
    },
    {
      postCode: '872',
      suburb: 'KANPA',
    },
    {
      postCode: '6044',
      suburb: 'KARAKIN',
    },
    {
      postCode: '6642',
      suburb: 'KARALUNDI',
    },
    {
      postCode: '6152',
      suburb: 'KARAWARA',
    },
    {
      postCode: '6163',
      suburb: 'KARDINYA',
    },
    {
      postCode: '6751',
      suburb: 'KARIJINI',
    },
    {
      postCode: '6358',
      suburb: 'KARLGARIN',
    },
    {
      postCode: '6430',
      suburb: 'KARLKURLA',
    },
    {
      postCode: '6479',
      suburb: 'KARLONING',
    },
    {
      postCode: '6530',
      suburb: 'KARLOO',
    },
    {
      postCode: '6176',
      suburb: 'KARNUP',
    },
    {
      postCode: '6111',
      suburb: 'KARRAGULLEN',
    },
    {
      postCode: '6010',
      suburb: 'KARRAKATTA',
    },
    {
      postCode: '6122',
      suburb: 'KARRAKUP',
    },
    {
      postCode: '6429',
      suburb: 'KARRAMINDIE',
    },
    {
      postCode: '6460',
      suburb: 'KARRANADGIN',
    },
    {
      postCode: '6714',
      suburb: 'KARRATHA',
    },
    {
      postCode: '6714',
      suburb: 'KARRATHA INDUSTRIAL ESTATE',
    },
    {
      postCode: '6288',
      suburb: 'KARRIDALE',
    },
    {
      postCode: '6018',
      suburb: 'KARRINYUP',
    },
    {
      postCode: '6921',
      suburb: 'KARRINYUP',
    },
    {
      postCode: '6472',
      suburb: 'KARROUN HILL',
    },
    {
      postCode: '6317',
      suburb: 'KATANNING',
    },
    {
      postCode: '6401',
      suburb: 'KATRINE',
    },
    {
      postCode: '6302',
      suburb: 'KAURING',
    },
    {
      postCode: '6280',
      suburb: 'KEALY',
    },
    {
      postCode: '6335',
      suburb: 'KEBARINGUP',
    },
    {
      postCode: '6410',
      suburb: 'KELLERBERRIN',
    },
    {
      postCode: '6111',
      suburb: 'KELMSCOTT',
    },
    {
      postCode: '6991',
      suburb: 'KELMSCOTT',
    },
    {
      postCode: '6111',
      suburb: 'KELMSCOTT DC',
    },
    {
      postCode: '6997',
      suburb: 'KELMSCOTT DC',
    },
    {
      postCode: '6323',
      suburb: 'KENDENUP',
    },
    {
      postCode: '6316',
      suburb: 'KENMARE',
    },
    {
      postCode: '6701',
      suburb: 'KENNEDY RANGE',
    },
    {
      postCode: '6151',
      suburb: 'KENSINGTON',
    },
    {
      postCode: '6333',
      suburb: 'KENTDALE',
    },
    {
      postCode: '6107',
      suburb: 'KENWICK',
    },
    {
      postCode: '6182',
      suburb: 'KERALUP',
    },
    {
      postCode: '6105',
      suburb: 'KEWDALE',
    },
    {
      postCode: '6126',
      suburb: 'KEYSBROOK',
    },
    {
      postCode: '6054',
      suburb: 'KIARA',
    },
    {
      postCode: '6728',
      suburb: 'KIMBOLTON',
    },
    {
      postCode: '6728',
      suburb: 'KING LEOPOLD RANGES',
    },
    {
      postCode: '6330',
      suburb: 'KING RIVER',
    },
    {
      postCode: '6005',
      suburb: 'KINGS PARK',
    },
    {
      postCode: '6701',
      suburb: 'KINGSFORD',
    },
    {
      postCode: '6026',
      suburb: 'KINGSLEY',
    },
    {
      postCode: '6256',
      suburb: 'KINGSTON',
    },
    {
      postCode: '6065',
      suburb: 'KINGSWAY',
    },
    {
      postCode: '6028',
      suburb: 'KINROSS',
    },
    {
      postCode: '6372',
      suburb: 'KIRK ROCK',
    },
    {
      postCode: '6251',
      suburb: 'KIRUP',
    },
    {
      postCode: '872',
      suburb: 'KIWIRRKURRA',
    },
    {
      postCode: '6328',
      suburb: 'KOJANEERUP SOUTH',
    },
    {
      postCode: '6532',
      suburb: 'KOJARENA',
    },
    {
      postCode: '6395',
      suburb: 'KOJONUP',
    },
    {
      postCode: '6304',
      suburb: 'KOKEBY',
    },
    {
      postCode: '6367',
      suburb: 'KONDININ',
    },
    {
      postCode: '6605',
      suburb: 'KONDUT',
    },
    {
      postCode: '6603',
      suburb: 'KONNONGORRING',
    },
    {
      postCode: '6510',
      suburb: 'KOOJAN',
    },
    {
      postCode: '6431',
      suburb: 'KOOKYNIE',
    },
    {
      postCode: '6733',
      suburb: 'KOOLAN ISLAND',
    },
    {
      postCode: '6623',
      suburb: 'KOOLANOOKA',
    },
    {
      postCode: '6427',
      suburb: 'KOOLYANOBBING',
    },
    {
      postCode: '6461',
      suburb: 'KOOMBERKINE',
    },
    {
      postCode: '6064',
      suburb: 'KOONDOOLA',
    },
    {
      postCode: '6056',
      suburb: 'KOONGAMIA',
    },
    {
      postCode: '6475',
      suburb: 'KOORDA',
    },
    {
      postCode: '6415',
      suburb: 'KORBEL',
    },
    {
      postCode: '6333',
      suburb: 'KORDABUP',
    },
    {
      postCode: '6485',
      suburb: 'KORRELOCKING',
    },
    {
      postCode: '6330',
      suburb: 'KRONKUP',
    },
    {
      postCode: '6290',
      suburb: 'KUDARDUP',
    },
    {
      postCode: '6353',
      suburb: 'KUENDER',
    },
    {
      postCode: '6352',
      suburb: 'KUKERIN',
    },
    {
      postCode: '6244',
      suburb: 'KULIKUP',
    },
    {
      postCode: '6365',
      suburb: 'KULIN',
    },
    {
      postCode: '6365',
      suburb: 'KULIN WEST',
    },
    {
      postCode: '6470',
      suburb: 'KULJA',
    },
    {
      postCode: '6642',
      suburb: 'KUMARINA',
    },
    {
      postCode: '6770',
      suburb: 'KUNDAT DJARU',
    },
    {
      postCode: '6375',
      suburb: 'KUNJIN',
    },
    {
      postCode: '6489',
      suburb: 'KUNUNOPPIN',
    },
    {
      postCode: '6743',
      suburb: 'KUNUNURRA',
    },
    {
      postCode: '6765',
      suburb: 'KUPARTIYA',
    },
    {
      postCode: '6431',
      suburb: 'KURNALPI',
    },
    {
      postCode: '6375',
      suburb: 'KURRENKUTTEN',
    },
    {
      postCode: '6306',
      suburb: 'KWEDA',
    },
    {
      postCode: '6490',
      suburb: 'KWELKAN',
    },
    {
      postCode: '6966',
      suburb: 'KWINANA',
    },
    {
      postCode: '6167',
      suburb: 'KWINANA BEACH',
    },
    {
      postCode: '6167',
      suburb: 'KWINANA TOWN CENTRE',
    },
    {
      postCode: '6385',
      suburb: 'KWOLYIN',
    },
    {
      postCode: '6725',
      suburb: 'LAGRANGE',
    },
    {
      postCode: '6743',
      suburb: 'LAKE ARGYLE',
    },
    {
      postCode: '6640',
      suburb: 'LAKE AUSTIN',
    },
    {
      postCode: '6355',
      suburb: 'LAKE BIDDY',
    },
    {
      postCode: '6479',
      suburb: 'LAKE BROWN',
    },
    {
      postCode: '6355',
      suburb: 'LAKE CAMM',
    },
    {
      postCode: '6646',
      suburb: 'LAKE CARNEGIE',
    },
    {
      postCode: '6215',
      suburb: 'LAKE CLIFTON',
    },
    {
      postCode: '6166',
      suburb: 'LAKE COOGEE',
    },
    {
      postCode: '6438',
      suburb: 'LAKE DARLOT',
    },
    {
      postCode: '6484',
      suburb: 'LAKE DEBORAH',
    },
    {
      postCode: '6353',
      suburb: 'LAKE GRACE',
    },
    {
      postCode: '6603',
      suburb: 'LAKE HINDS',
    },
    {
      postCode: '6260',
      suburb: 'LAKE JASPER',
    },
    {
      postCode: '6356',
      suburb: 'LAKE KING',
    },
    {
      postCode: '6475',
      suburb: 'LAKE MARGARETTE',
    },
    {
      postCode: '6258',
      suburb: 'LAKE MUIR',
    },
    {
      postCode: '6603',
      suburb: 'LAKE NINAN',
    },
    {
      postCode: '6320',
      suburb: 'LAKE TOOLBRUNUP',
    },
    {
      postCode: '6440',
      suburb: 'LAKE WELLS',
    },
    {
      postCode: '6180',
      suburb: 'LAKELANDS',
    },
    {
      postCode: '6431',
      suburb: 'LAKEWOOD',
    },
    {
      postCode: '6430',
      suburb: 'LAMINGTON',
    },
    {
      postCode: '6044',
      suburb: 'LANCELIN',
    },
    {
      postCode: '6065',
      suburb: 'LANDSDALE',
    },
    {
      postCode: '6330',
      suburb: 'LANGE',
    },
    {
      postCode: '6147',
      suburb: 'LANGFORD',
    },
    {
      postCode: '6616',
      suburb: 'LATHAM',
    },
    {
      postCode: '6100',
      suburb: 'LATHLAIN',
    },
    {
      postCode: '6440',
      suburb: 'LAVERTON',
    },
    {
      postCode: '6707',
      suburb: 'LEARMONTH',
    },
    {
      postCode: '6170',
      suburb: 'LEDA',
    },
    {
      postCode: '6043',
      suburb: 'LEDGE POINT',
    },
    {
      postCode: '6007',
      suburb: 'LEEDERVILLE',
    },
    {
      postCode: '6900',
      suburb: 'LEEDERVILLE',
    },
    {
      postCode: '6902',
      suburb: 'LEEDERVILLE',
    },
    {
      postCode: '6903',
      suburb: 'LEEDERVILLE',
    },
    {
      postCode: '6514',
      suburb: 'LEEMAN',
    },
    {
      postCode: '6149',
      suburb: 'LEEMING',
    },
    {
      postCode: '6290',
      suburb: 'LEEUWIN',
    },
    {
      postCode: '6437',
      suburb: 'LEINSTER',
    },
    {
      postCode: '6503',
      suburb: 'LENNARD BROOK',
    },
    {
      postCode: '6438',
      suburb: 'LEONORA',
    },
    {
      postCode: '6233',
      suburb: 'LESCHENAULT',
    },
    {
      postCode: '6111',
      suburb: 'LESLEY',
    },
    {
      postCode: '6076',
      suburb: 'LESMURDIE',
    },
    {
      postCode: '6079',
      suburb: 'LEXIA',
    },
    {
      postCode: '6315',
      suburb: 'LIME LAKE',
    },
    {
      postCode: '6258',
      suburb: 'LINFARNE',
    },
    {
      postCode: '6330',
      suburb: 'LITTLE GROVE',
    },
    {
      postCode: '6359',
      suburb: 'LITTLE ITALY',
    },
    {
      postCode: '6646',
      suburb: 'LITTLE SANDY DESERT',
    },
    {
      postCode: '6522',
      suburb: 'LOCKIER',
    },
    {
      postCode: '6054',
      suburb: 'LOCKRIDGE',
    },
    {
      postCode: '6330',
      suburb: 'LOCKYER',
    },
    {
      postCode: '6311',
      suburb: 'LOL GRAY',
    },
    {
      postCode: '6429',
      suburb: 'LONDONDERRY',
    },
    {
      postCode: '6447',
      suburb: 'LORT RIVER',
    },
    {
      postCode: '6240',
      suburb: 'LOWDEN',
    },
    {
      postCode: '6084',
      suburb: 'LOWER CHITTERING',
    },
    {
      postCode: '6390',
      suburb: 'LOWER HOTHAM',
    },
    {
      postCode: '6330',
      suburb: 'LOWER KING',
    },
    {
      postCode: '6330',
      suburb: 'LOWLANDS',
    },
    {
      postCode: '6280',
      suburb: 'LUDLOW',
    },
    {
      postCode: '6395',
      suburb: 'LUMEAH',
    },
    {
      postCode: '6225',
      suburb: 'LYALLS MILL',
    },
    {
      postCode: '6701',
      suburb: 'LYNDON',
    },
    {
      postCode: '6147',
      suburb: 'LYNWOOD',
    },
    {
      postCode: '6701',
      suburb: 'MACLEOD',
    },
    {
      postCode: '6109',
      suburb: 'MADDINGTON',
    },
    {
      postCode: '6989',
      suburb: 'MADDINGTON',
    },
    {
      postCode: '6065',
      suburb: 'MADELEY',
    },
    {
      postCode: '6210',
      suburb: 'MADORA BAY',
    },
    {
      postCode: '6443',
      suburb: 'MADURA',
    },
    {
      postCode: '6355',
      suburb: 'MAGENTA',
    },
    {
      postCode: '6338',
      suburb: 'MAGITUP',
    },
    {
      postCode: '6072',
      suburb: 'MAHOGANY CREEK',
    },
    {
      postCode: '6530',
      suburb: 'MAHOMETS FLATS',
    },
    {
      postCode: '6057',
      suburb: 'MAIDA VALE',
    },
    {
      postCode: '6714',
      suburb: 'MAITLAND',
    },
    {
      postCode: '6401',
      suburb: 'MALABAINE',
    },
    {
      postCode: '6090',
      suburb: 'MALAGA',
    },
    {
      postCode: '6944',
      suburb: 'MALAGA',
    },
    {
      postCode: '6302',
      suburb: 'MALEBELLING',
    },
    {
      postCode: '6353',
      suburb: 'MALLEE HILL',
    },
    {
      postCode: '6556',
      suburb: 'MALMALLING',
    },
    {
      postCode: '6370',
      suburb: 'MALYALLING',
    },
    {
      postCode: '6167',
      suburb: 'MANDOGALUP',
    },
    {
      postCode: '6210',
      suburb: 'MANDURAH',
    },
    {
      postCode: '6210',
      suburb: 'MANDURAH DC',
    },
    {
      postCode: '6210',
      suburb: 'MANDURAH EAST',
    },
    {
      postCode: '6210',
      suburb: 'MANDURAH NORTH',
    },
    {
      postCode: '6258',
      suburb: 'MANJIMUP',
    },
    {
      postCode: '6465',
      suburb: 'MANMANNING',
    },
    {
      postCode: '6152',
      suburb: 'MANNING',
    },
    {
      postCode: '872',
      suburb: 'MANTAMARU',
    },
    {
      postCode: '6328',
      suburb: 'MANYPEAKS',
    },
    {
      postCode: '6064',
      suburb: 'MARANGAROO',
    },
    {
      postCode: '6256',
      suburb: 'MARANUP',
    },
    {
      postCode: '6330',
      suburb: 'MARBELUP',
    },
    {
      postCode: '6760',
      suburb: 'MARBLE BAR',
    },
    {
      postCode: '6515',
      suburb: 'MARCHAGEE',
    },
    {
      postCode: '6125',
      suburb: 'MARDELLA',
    },
    {
      postCode: '6714',
      suburb: 'MARDIE',
    },
    {
      postCode: '6285',
      suburb: 'MARGARET RIVER',
    },
    {
      postCode: '6078',
      suburb: 'MARIGINIUP',
    },
    {
      postCode: '6020',
      suburb: 'MARMION',
    },
    {
      postCode: '6608',
      suburb: 'MARNE',
    },
    {
      postCode: '6317',
      suburb: 'MARRACOONDA',
    },
    {
      postCode: '6390',
      suburb: 'MARRADONG',
    },
    {
      postCode: '6532',
      suburb: 'MARRAH',
    },
    {
      postCode: '6213',
      suburb: 'MARRINUP',
    },
    {
      postCode: '6110',
      suburb: 'MARTIN',
    },
    {
      postCode: '6426',
      suburb: 'MARVEL LOCH',
    },
    {
      postCode: '6280',
      suburb: 'MARYBROOK',
    },
    {
      postCode: '6701',
      suburb: 'MASSEY BAY',
    },
    {
      postCode: '6614',
      suburb: 'MAYA',
    },
    {
      postCode: '6244',
      suburb: 'MAYANUP',
    },
    {
      postCode: '6051',
      suburb: 'MAYLANDS',
    },
    {
      postCode: '6931',
      suburb: 'MAYLANDS',
    },
    {
      postCode: '6225',
      suburb: 'MCALINDEN',
    },
    {
      postCode: '6770',
      suburb: 'MCBEATH',
    },
    {
      postCode: '6330',
      suburb: 'MCKAIL',
    },
    {
      postCode: '6532',
      suburb: 'MEADOW',
    },
    {
      postCode: '6210',
      suburb: 'MEADOW SPRINGS',
    },
    {
      postCode: '6405',
      suburb: 'MECKERING',
    },
    {
      postCode: '6728',
      suburb: 'MEDA',
    },
    {
      postCode: '6167',
      suburb: 'MEDINA',
    },
    {
      postCode: '6642',
      suburb: 'MEEKATHARRA',
    },
    {
      postCode: '6392',
      suburb: 'MEEKING',
    },
    {
      postCode: '6208',
      suburb: 'MEELON',
    },
    {
      postCode: '6401',
      suburb: 'MEENAAR',
    },
    {
      postCode: '6262',
      suburb: 'MEERUP',
    },
    {
      postCode: '6079',
      suburb: 'MELALEUCA',
    },
    {
      postCode: '6156',
      suburb: 'MELVILLE',
    },
    {
      postCode: '6956',
      suburb: 'MELVILLE',
    },
    {
      postCode: '6050',
      suburb: 'MENORA',
    },
    {
      postCode: '6436',
      suburb: 'MENZIES',
    },
    {
      postCode: '6352',
      suburb: 'MERILUP',
    },
    {
      postCode: '6450',
      suburb: 'MERIVALE',
    },
    {
      postCode: '6625',
      suburb: 'MERKANOOKA',
    },
    {
      postCode: '6415',
      suburb: 'MERREDIN',
    },
    {
      postCode: '6030',
      suburb: 'MERRIWA',
    },
    {
      postCode: '6530',
      suburb: 'MERU',
    },
    {
      postCode: '6280',
      suburb: 'METRICUP',
    },
    {
      postCode: '6328',
      suburb: 'METTLER',
    },
    {
      postCode: '6612',
      suburb: 'MIAMOON',
    },
    {
      postCode: '6056',
      suburb: 'MIDDLE SWAN',
    },
    {
      postCode: '6258',
      suburb: 'MIDDLESEX',
    },
    {
      postCode: '6330',
      suburb: 'MIDDLETON BEACH',
    },
    {
      postCode: '6056',
      suburb: 'MIDLAND',
    },
    {
      postCode: '6936',
      suburb: 'MIDLAND DC',
    },
    {
      postCode: '6056',
      suburb: 'MIDVALE',
    },
    {
      postCode: '6575',
      suburb: 'MILING',
    },
    {
      postCode: '6714',
      suburb: 'MILLARS WELL',
    },
    {
      postCode: '6232',
      suburb: 'MILLBRIDGE',
    },
    {
      postCode: '6330',
      suburb: 'MILLBROOK',
    },
    {
      postCode: '6056',
      suburb: 'MILLENDON',
    },
    {
      postCode: '6336',
      suburb: 'MILLS LAKE',
    },
    {
      postCode: '6716',
      suburb: 'MILLSTREAM',
    },
    {
      postCode: '6525',
      suburb: 'MILO',
    },
    {
      postCode: '6330',
      suburb: 'MILPARA',
    },
    {
      postCode: '6507',
      suburb: 'MIMEGARRA',
    },
    {
      postCode: '6336',
      suburb: 'MINDARABIN',
    },
    {
      postCode: '6030',
      suburb: 'MINDARIE',
    },
    {
      postCode: '6503',
      suburb: 'MINDARRA',
    },
    {
      postCode: '6315',
      suburb: 'MINDING',
    },
    {
      postCode: '6522',
      suburb: 'MINGENEW',
    },
    {
      postCode: '6312',
      suburb: 'MINIGIN',
    },
    {
      postCode: '6701',
      suburb: 'MINILYA',
    },
    {
      postCode: '6532',
      suburb: 'MINNENOOKA',
    },
    {
      postCode: '6462',
      suburb: 'MINNIVALE',
    },
    {
      postCode: '6725',
      suburb: 'MINYIRR',
    },
    {
      postCode: '6330',
      suburb: 'MIRA MAR',
    },
    {
      postCode: '6061',
      suburb: 'MIRRABOOKA',
    },
    {
      postCode: '6941',
      suburb: 'MIRRABOOKA',
    },
    {
      postCode: '6740',
      suburb: 'MITCHELL PLATEAU',
    },
    {
      postCode: '6395',
      suburb: 'MOBRUP',
    },
    {
      postCode: '6603',
      suburb: 'MOCARDY',
    },
    {
      postCode: '6506',
      suburb: 'MOGUMBER',
    },
    {
      postCode: '6401',
      suburb: 'MOKINE',
    },
    {
      postCode: '6394',
      suburb: 'MOKUP',
    },
    {
      postCode: '6475',
      suburb: 'MOLLERIN',
    },
    {
      postCode: '6290',
      suburb: 'MOLLOY ISLAND',
    },
    {
      postCode: '6338',
      suburb: 'MONJEBUP',
    },
    {
      postCode: '6450',
      suburb: 'MONJINGUP',
    },
    {
      postCode: '6537',
      suburb: 'MONKEY MIA',
    },
    {
      postCode: '6393',
      suburb: 'MOODIARRUP',
    },
    {
      postCode: '6317',
      suburb: 'MOOJEBING',
    },
    {
      postCode: '6504',
      suburb: 'MOOLIABEENEE',
    },
    {
      postCode: '6503',
      suburb: 'MOONDAH',
    },
    {
      postCode: '6567',
      suburb: 'MOONDYNE',
    },
    {
      postCode: '6320',
      suburb: 'MOONIES HILL',
    },
    {
      postCode: '6532',
      suburb: 'MOONYOONOOKA',
    },
    {
      postCode: '6510',
      suburb: 'MOORA',
    },
    {
      postCode: '6503',
      suburb: 'MOORE RIVER NATIONAL PARK',
    },
    {
      postCode: '6522',
      suburb: 'MOORIARY',
    },
    {
      postCode: '6425',
      suburb: 'MOORINE ROCK',
    },
    {
      postCode: '6083',
      suburb: 'MORANGUP',
    },
    {
      postCode: '6623',
      suburb: 'MORAWA',
    },
    {
      postCode: '6304',
      suburb: 'MORBINNING',
    },
    {
      postCode: '6258',
      suburb: 'MORDALUP',
    },
    {
      postCode: '6530',
      suburb: 'MORESBY',
    },
    {
      postCode: '6701',
      suburb: 'MORGANTOWN',
    },
    {
      postCode: '6062',
      suburb: 'MORLEY',
    },
    {
      postCode: '6943',
      suburb: 'MORLEY',
    },
    {
      postCode: '6221',
      suburb: 'MORNINGTON',
    },
    {
      postCode: '6012',
      suburb: 'MOSMAN PARK',
    },
    {
      postCode: '6912',
      suburb: 'MOSMAN PARK',
    },
    {
      postCode: '6351',
      suburb: 'MOULYINNING',
    },
    {
      postCode: '6525',
      suburb: 'MOUNT ADAMS',
    },
    {
      postCode: '6714',
      suburb: 'MOUNT ANKETELL',
    },
    {
      postCode: '6324',
      suburb: 'MOUNT BARKER',
    },
    {
      postCode: '6522',
      suburb: 'MOUNT BUDD',
    },
    {
      postCode: '6429',
      suburb: 'MOUNT BURGES',
    },
    {
      postCode: '6410',
      suburb: 'MOUNT CAROLINE',
    },
    {
      postCode: '6010',
      suburb: 'MOUNT CLAREMONT',
    },
    {
      postCode: '6330',
      suburb: 'MOUNT CLARENCE',
    },
    {
      postCode: '6390',
      suburb: 'MOUNT COOKE',
    },
    {
      postCode: '6330',
      suburb: 'MOUNT ELPHINSTONE',
    },
    {
      postCode: '6532',
      suburb: 'MOUNT ERIN',
    },
    {
      postCode: '6426',
      suburb: 'MOUNT HAMPTON',
    },
    {
      postCode: '6302',
      suburb: 'MOUNT HARDEY',
    },
    {
      postCode: '6765',
      suburb: 'MOUNT HARDMAN',
    },
    {
      postCode: '6016',
      suburb: 'MOUNT HAWTHORN',
    },
    {
      postCode: '6915',
      suburb: 'MOUNT HAWTHORN',
    },
    {
      postCode: '6082',
      suburb: 'MOUNT HELENA',
    },
    {
      postCode: '6528',
      suburb: 'MOUNT HILL',
    },
    {
      postCode: '6426',
      suburb: 'MOUNT HOLLAND',
    },
    {
      postCode: '6525',
      suburb: 'MOUNT HORNER',
    },
    {
      postCode: '6426',
      suburb: 'MOUNT JACKSON',
    },
    {
      postCode: '6050',
      suburb: 'MOUNT LAWLEY',
    },
    {
      postCode: '6929',
      suburb: 'MOUNT LAWLEY',
    },
    {
      postCode: '6333',
      suburb: 'MOUNT LINDESAY',
    },
    {
      postCode: '6356',
      suburb: 'MOUNT MADDEN',
    },
    {
      postCode: '6638',
      suburb: 'MOUNT MAGNET',
    },
    {
      postCode: '6330',
      suburb: 'MOUNT MELVILLE',
    },
    {
      postCode: '6112',
      suburb: 'MOUNT NASURA',
    },
    {
      postCode: '6447',
      suburb: 'MOUNT NEY',
    },
    {
      postCode: '6302',
      suburb: 'MOUNT OBSERVATION',
    },
    {
      postCode: '6426',
      suburb: 'MOUNT PALMER',
    },
    {
      postCode: '6153',
      suburb: 'MOUNT PLEASANT',
    },
    {
      postCode: '6112',
      suburb: 'MOUNT RICHON',
    },
    {
      postCode: '6333',
      suburb: 'MOUNT ROMANCE',
    },
    {
      postCode: '6751',
      suburb: 'MOUNT SHEILA',
    },
    {
      postCode: '6355',
      suburb: 'MOUNT SHERIDAN',
    },
    {
      postCode: '6383',
      suburb: 'MOUNT STIRLING',
    },
    {
      postCode: '6530',
      suburb: 'MOUNT TARCOOLA',
    },
    {
      postCode: '6369',
      suburb: 'MOUNT WALKER',
    },
    {
      postCode: '6390',
      suburb: 'MOUNT WELLS',
    },
    {
      postCode: '6472',
      suburb: 'MOUROUBRA',
    },
    {
      postCode: '6501',
      suburb: 'MUCHEA',
    },
    {
      postCode: '6503',
      suburb: 'MUCKENBURRA',
    },
    {
      postCode: '6770',
      suburb: 'MUELLER RANGES',
    },
    {
      postCode: '6225',
      suburb: 'MUJA',
    },
    {
      postCode: '6479',
      suburb: 'MUKINBUDIN',
    },
    {
      postCode: '6714',
      suburb: 'MULATAGA',
    },
    {
      postCode: '6751',
      suburb: 'MULGA DOWNS',
    },
    {
      postCode: '6027',
      suburb: 'MULLALOO',
    },
    {
      postCode: '6252',
      suburb: 'MULLALYUP',
    },
    {
      postCode: '6630',
      suburb: 'MULLEWA',
    },
    {
      postCode: '6430',
      suburb: 'MULLINGAR',
    },
    {
      postCode: '6401',
      suburb: 'MULUCKINE',
    },
    {
      postCode: '6225',
      suburb: 'MUMBALLUP',
    },
    {
      postCode: '6401',
      suburb: 'MUMBERKINE',
    },
    {
      postCode: '6721',
      suburb: 'MUNDABULLANGANA',
    },
    {
      postCode: '6073',
      suburb: 'MUNDARING',
    },
    {
      postCode: '6073',
      suburb: 'MUNDARING DC',
    },
    {
      postCode: '6123',
      suburb: 'MUNDIJONG',
    },
    {
      postCode: '6443',
      suburb: 'MUNDRABILLA',
    },
    {
      postCode: '6225',
      suburb: 'MUNGALUP',
    },
    {
      postCode: '6450',
      suburb: 'MUNGLINUP',
    },
    {
      postCode: '6166',
      suburb: 'MUNSTER',
    },
    {
      postCode: '6420',
      suburb: 'MUNTADGIN',
    },
    {
      postCode: '6394',
      suburb: 'MURADUP',
    },
    {
      postCode: '6630',
      suburb: 'MURCHISON',
    },
    {
      postCode: '6150',
      suburb: 'MURDOCH',
    },
    {
      postCode: '6317',
      suburb: 'MURDONG',
    },
    {
      postCode: '6401',
      suburb: 'MURESK',
    },
    {
      postCode: '6220',
      suburb: 'MYALUP',
    },
    {
      postCode: '6207',
      suburb: 'MYARA',
    },
    {
      postCode: '6154',
      suburb: 'MYAREE',
    },
    {
      postCode: '6960',
      suburb: 'MYAREE BC',
    },
    {
      postCode: '6450',
      suburb: 'MYRUP',
    },
    {
      postCode: '6532',
      suburb: 'NABAWA',
    },
    {
      postCode: '6350',
      suburb: 'NAIRIBIN',
    },
    {
      postCode: '6485',
      suburb: 'NALKAIN',
    },
    {
      postCode: '6338',
      suburb: 'NALYERLUP',
    },
    {
      postCode: '6512',
      suburb: 'NAMBAN',
    },
    {
      postCode: '6207',
      suburb: 'NAMBEELUP',
    },
    {
      postCode: '6521',
      suburb: 'NAMBUNG',
    },
    {
      postCode: '6330',
      suburb: 'NANARUP',
    },
    {
      postCode: '6537',
      suburb: 'NANGA',
    },
    {
      postCode: '6215',
      suburb: 'NANGA BROOK',
    },
    {
      postCode: '6414',
      suburb: 'NANGEENAN',
    },
    {
      postCode: '6522',
      suburb: 'NANGETTY',
    },
    {
      postCode: '6275',
      suburb: 'NANNUP',
    },
    {
      postCode: '6532',
      suburb: 'NANSON',
    },
    {
      postCode: '6751',
      suburb: 'NANUTARRA',
    },
    {
      postCode: '6330',
      suburb: 'NAPIER',
    },
    {
      postCode: '6532',
      suburb: 'NARALING',
    },
    {
      postCode: '6369',
      suburb: 'NAREMBEEN',
    },
    {
      postCode: '6532',
      suburb: 'NARNGULU',
    },
    {
      postCode: '6532',
      suburb: 'NARRA TARRA',
    },
    {
      postCode: '6302',
      suburb: 'NARRALOGGAN',
    },
    {
      postCode: '6326',
      suburb: 'NARRIKUP',
    },
    {
      postCode: '6312',
      suburb: 'NARROGIN',
    },
    {
      postCode: '6312',
      suburb: 'NARROGIN VALLEY',
    },
    {
      postCode: '6281',
      suburb: 'NATURALISTE',
    },
    {
      postCode: '6165',
      suburb: 'NAVAL BASE',
    },
    {
      postCode: '6440',
      suburb: 'NEALE',
    },
    {
      postCode: '6009',
      suburb: 'NEDLANDS',
    },
    {
      postCode: '6907',
      suburb: 'NEDLANDS',
    },
    {
      postCode: '6909',
      suburb: 'NEDLANDS',
    },
    {
      postCode: '6009',
      suburb: 'NEDLANDS DC',
    },
    {
      postCode: '6336',
      suburb: 'NEEDILUP',
    },
    {
      postCode: '6353',
      suburb: 'NEENDALING',
    },
    {
      postCode: '6031',
      suburb: 'NEERABUP',
    },
    {
      postCode: '6503',
      suburb: 'NEERGABBY',
    },
    {
      postCode: '6485',
      suburb: 'NEMBUDDING',
    },
    {
      postCode: '6450',
      suburb: 'NERIDUP',
    },
    {
      postCode: '6630',
      suburb: 'NERRAMYNE',
    },
    {
      postCode: '6532',
      suburb: 'NERREN NERREN',
    },
    {
      postCode: '6509',
      suburb: 'NEW NORCIA',
    },
    {
      postCode: '6475',
      suburb: 'NEWCARLBEON',
    },
    {
      postCode: '6355',
      suburb: 'NEWDEGATE',
    },
    {
      postCode: '6251',
      suburb: 'NEWLANDS',
    },
    {
      postCode: '6753',
      suburb: 'NEWMAN',
    },
    {
      postCode: '872',
      suburb: 'NGAANYATJARRA-GILES',
    },
    {
      postCode: '6714',
      suburb: 'NICKOL',
    },
    {
      postCode: '6044',
      suburb: 'NILGEN',
    },
    {
      postCode: '6288',
      suburb: 'NILLUP',
    },
    {
      postCode: '6701',
      suburb: 'NINGALOO',
    },
    {
      postCode: '6350',
      suburb: 'NIPPERING',
    },
    {
      postCode: '6208',
      suburb: 'NIRIMBA',
    },
    {
      postCode: '6225',
      suburb: 'NOGGERUP',
    },
    {
      postCode: '6415',
      suburb: 'NOKANING',
    },
    {
      postCode: '6532',
      suburb: 'NOLBA',
    },
    {
      postCode: '6061',
      suburb: 'NOLLAMARA',
    },
    {
      postCode: '6312',
      suburb: 'NOMANS LAKE',
    },
    {
      postCode: '6062',
      suburb: 'NORANDA',
    },
    {
      postCode: '6333',
      suburb: 'NORNALUP',
    },
    {
      postCode: '6415',
      suburb: 'NORPA',
    },
    {
      postCode: '6443',
      suburb: 'NORSEMAN',
    },
    {
      postCode: '6412',
      suburb: 'NORTH BAANDEE',
    },
    {
      postCode: '6390',
      suburb: 'NORTH BANNISTER',
    },
    {
      postCode: '6020',
      suburb: 'NORTH BEACH',
    },
    {
      postCode: '6920',
      suburb: 'NORTH BEACH',
    },
    {
      postCode: '6424',
      suburb: 'NORTH BODALLIN',
    },
    {
      postCode: '6237',
      suburb: 'NORTH BOYANUP',
    },
    {
      postCode: '6353',
      suburb: 'NORTH BURNGUP',
    },
    {
      postCode: '6445',
      suburb: 'NORTH CASCADE',
    },
    {
      postCode: '6163',
      suburb: 'NORTH COOGEE',
    },
    {
      postCode: '6207',
      suburb: 'NORTH DANDALUP',
    },
    {
      postCode: '6532',
      suburb: 'NORTH ERADU',
    },
    {
      postCode: '6159',
      suburb: 'NORTH FREMANTLE',
    },
    {
      postCode: '6254',
      suburb: 'NORTH GREENBUSHES',
    },
    {
      postCode: '6280',
      suburb: 'NORTH JINDONG',
    },
    {
      postCode: '6410',
      suburb: 'NORTH KELLERBERRIN',
    },
    {
      postCode: '6352',
      suburb: 'NORTH KUKERIN',
    },
    {
      postCode: '6489',
      suburb: 'NORTH KUNUNOPPIN',
    },
    {
      postCode: '6163',
      suburb: 'NORTH LAKE',
    },
    {
      postCode: '6353',
      suburb: 'NORTH LAKE GRACE',
    },
    {
      postCode: '6351',
      suburb: 'NORTH MOULYINNING',
    },
    {
      postCode: '6006',
      suburb: 'NORTH PERTH',
    },
    {
      postCode: '6906',
      suburb: 'NORTH PERTH',
    },
    {
      postCode: '6701',
      suburb: 'NORTH PLANTATIONS',
    },
    {
      postCode: '6338',
      suburb: 'NORTH STIRLINGS',
    },
    {
      postCode: '6409',
      suburb: 'NORTH TAMMIN',
    },
    {
      postCode: '6488',
      suburb: 'NORTH TRAYNING',
    },
    {
      postCode: '6398',
      suburb: 'NORTH WALPOLE',
    },
    {
      postCode: '6707',
      suburb: 'NORTH WEST CAPE',
    },
    {
      postCode: '6473',
      suburb: 'NORTH WIALKI',
    },
    {
      postCode: '6487',
      suburb: 'NORTH YELBENI',
    },
    {
      postCode: '6208',
      suburb: 'NORTH YUNDERUP',
    },
    {
      postCode: '6401',
      suburb: 'NORTHAM',
    },
    {
      postCode: '6535',
      suburb: 'NORTHAMPTON',
    },
    {
      postCode: '6003',
      suburb: 'NORTHBRIDGE',
    },
    {
      postCode: '6865',
      suburb: 'NORTHBRIDGE',
    },
    {
      postCode: '6262',
      suburb: 'NORTHCLIFFE',
    },
    {
      postCode: '6532',
      suburb: 'NORTHERN GULLY',
    },
    {
      postCode: '6905',
      suburb: 'NORTHLANDS PO',
    },
    {
      postCode: '6032',
      suburb: 'NOWERGUP',
    },
    {
      postCode: '6609',
      suburb: 'NUGADONG',
    },
    {
      postCode: '6480',
      suburb: 'NUKARNI',
    },
    {
      postCode: '6758',
      suburb: 'NULLAGINE',
    },
    {
      postCode: '6330',
      suburb: 'NULLAKI',
    },
    {
      postCode: '6450',
      suburb: 'NULSEN',
    },
    {
      postCode: '6490',
      suburb: 'NUNGARIN',
    },
    {
      postCode: '6630',
      suburb: 'NUNIERRA',
    },
    {
      postCode: '6566',
      suburb: 'NUNILE',
    },
    {
      postCode: '6341',
      suburb: 'NYABING',
    },
    {
      postCode: '6163',
      suburb: "O'CONNOR",
    },
    {
      postCode: '6532',
      suburb: 'OAKAJEE',
    },
    {
      postCode: '6121',
      suburb: 'OAKFORD',
    },
    {
      postCode: '6208',
      suburb: 'OAKLEY',
    },
    {
      postCode: '6333',
      suburb: 'OCEAN BEACH',
    },
    {
      postCode: '6027',
      suburb: 'OCEAN REEF',
    },
    {
      postCode: '6535',
      suburb: 'OGILVIE',
    },
    {
      postCode: '6569',
      suburb: 'OLD PLAINS',
    },
    {
      postCode: '6121',
      suburb: 'OLDBURY',
    },
    {
      postCode: '6336',
      suburb: 'ONGERUP',
    },
    {
      postCode: '6710',
      suburb: 'ONSLOW',
    },
    {
      postCode: '6740',
      suburb: 'OOMBULGURRI',
    },
    {
      postCode: '6431',
      suburb: 'ORA BANDA',
    },
    {
      postCode: '6330',
      suburb: 'ORANA',
    },
    {
      postCode: '6109',
      suburb: 'ORANGE GROVE',
    },
    {
      postCode: '6503',
      suburb: 'ORANGE SPRINGS',
    },
    {
      postCode: '6394',
      suburb: 'ORCHID VALLEY',
    },
    {
      postCode: '6770',
      suburb: 'ORD RIVER',
    },
    {
      postCode: '6167',
      suburb: 'ORELIA',
    },
    {
      postCode: '6017',
      suburb: 'OSBORNE PARK',
    },
    {
      postCode: '6916',
      suburb: 'OSBORNE PARK',
    },
    {
      postCode: '6917',
      suburb: 'OSBORNE PARK',
    },
    {
      postCode: '6017',
      suburb: 'OSBORNE PARK DC',
    },
    {
      postCode: '6916',
      suburb: 'OSBORNE PARK DC',
    },
    {
      postCode: '6285',
      suburb: 'OSMINGTON',
    },
    {
      postCode: '6025',
      suburb: 'PADBURY',
    },
    {
      postCode: '6258',
      suburb: 'PALGARUP',
    },
    {
      postCode: '6335',
      suburb: 'PALLINUP',
    },
    {
      postCode: '6328',
      suburb: 'PALMDALE',
    },
    {
      postCode: '6225',
      suburb: 'PALMER',
    },
    {
      postCode: '6157',
      suburb: 'PALMYRA',
    },
    {
      postCode: '6957',
      suburb: 'PALMYRA',
    },
    {
      postCode: '6157',
      suburb: 'PALMYRA DC',
    },
    {
      postCode: '6961',
      suburb: 'PALMYRA DC',
    },
    {
      postCode: '6716',
      suburb: 'PANNAWONICA',
    },
    {
      postCode: '6384',
      suburb: 'PANTAPIN',
    },
    {
      postCode: '872',
      suburb: 'PAPULANKUTJA',
    },
    {
      postCode: '6754',
      suburb: 'PARABURDOO',
    },
    {
      postCode: '6236',
      suburb: 'PARADISE',
    },
    {
      postCode: '6721',
      suburb: 'PARDOO',
    },
    {
      postCode: '6426',
      suburb: 'PARKER RANGE',
    },
    {
      postCode: '6081',
      suburb: 'PARKERVILLE',
    },
    {
      postCode: '6434',
      suburb: 'PARKESTON',
    },
    {
      postCode: '6233',
      suburb: 'PARKFIELD',
    },
    {
      postCode: '6180',
      suburb: 'PARKLANDS',
    },
    {
      postCode: '6147',
      suburb: 'PARKWOOD',
    },
    {
      postCode: '6167',
      suburb: 'PARMELIA',
    },
    {
      postCode: '6333',
      suburb: 'PARRYVILLE',
    },
    {
      postCode: '872',
      suburb: 'PATJARR',
    },
    {
      postCode: '6076',
      suburb: 'PAULLS VALLEY',
    },
    {
      postCode: '6239',
      suburb: 'PAYNEDALE',
    },
    {
      postCode: '6612',
      suburb: 'PAYNES FIND',
    },
    {
      postCode: '6638',
      suburb: 'PAYNESVILLE',
    },
    {
      postCode: '6333',
      suburb: 'PEACEFUL BAY',
    },
    {
      postCode: '6642',
      suburb: 'PEAK HILL',
    },
    {
      postCode: '6065',
      suburb: 'PEARSALL',
    },
    {
      postCode: '6710',
      suburb: 'PEEDAMULLA',
    },
    {
      postCode: '6260',
      suburb: 'PEERABEELUP',
    },
    {
      postCode: '6714',
      suburb: 'PEGS CREEK',
    },
    {
      postCode: '6230',
      suburb: 'PELICAN POINT',
    },
    {
      postCode: '6260',
      suburb: 'PEMBERTON',
    },
    {
      postCode: '6011',
      suburb: 'PEPPERMINT GROVE',
    },
    {
      postCode: '6271',
      suburb: 'PEPPERMINT GROVE BEACH',
    },
    {
      postCode: '6620',
      suburb: 'PERENJORI',
    },
    {
      postCode: '6324',
      suburb: 'PERILLUP',
    },
    {
      postCode: '6168',
      suburb: 'PERON',
    },
    {
      postCode: '6000',
      suburb: 'PERTH',
    },
    {
      postCode: '6001',
      suburb: 'PERTH',
    },
    {
      postCode: '6800',
      suburb: 'PERTH',
    },
    {
      postCode: '6809',
      suburb: 'PERTH',
    },
    {
      postCode: '6827',
      suburb: 'PERTH',
    },
    {
      postCode: '6830',
      suburb: 'PERTH',
    },
    {
      postCode: '6837',
      suburb: 'PERTH',
    },
    {
      postCode: '6838',
      suburb: 'PERTH',
    },
    {
      postCode: '6839',
      suburb: 'PERTH',
    },
    {
      postCode: '6840',
      suburb: 'PERTH',
    },
    {
      postCode: '6841',
      suburb: 'PERTH',
    },
    {
      postCode: '6842',
      suburb: 'PERTH',
    },
    {
      postCode: '6843',
      suburb: 'PERTH',
    },
    {
      postCode: '6844',
      suburb: 'PERTH',
    },
    {
      postCode: '6845',
      suburb: 'PERTH',
    },
    {
      postCode: '6846',
      suburb: 'PERTH',
    },
    {
      postCode: '6847',
      suburb: 'PERTH',
    },
    {
      postCode: '6848',
      suburb: 'PERTH',
    },
    {
      postCode: '6105',
      suburb: 'PERTH AIRPORT',
    },
    {
      postCode: '6849',
      suburb: 'PERTH BC',
    },
    {
      postCode: '6000',
      suburb: 'PERTH GPO',
    },
    {
      postCode: '6831',
      suburb: 'PERTH ST GEORGES TCE',
    },
    {
      postCode: '6258',
      suburb: 'PERUP',
    },
    {
      postCode: '6468',
      suburb: 'PETRUDOR',
    },
    {
      postCode: '6112',
      suburb: 'PIARA WATERS',
    },
    {
      postCode: '6572',
      suburb: 'PIAWANING',
    },
    {
      postCode: '6430',
      suburb: 'PICCADILLY',
    },
    {
      postCode: '6076',
      suburb: 'PICKERING BROOK',
    },
    {
      postCode: '6229',
      suburb: 'PICTON',
    },
    {
      postCode: '6229',
      suburb: 'PICTON EAST',
    },
    {
      postCode: '6076',
      suburb: 'PIESSE BROOK',
    },
    {
      postCode: '6315',
      suburb: 'PIESSEVILLE',
    },
    {
      postCode: '6631',
      suburb: 'PINDAR',
    },
    {
      postCode: '6357',
      suburb: 'PINGARING',
    },
    {
      postCode: '6308',
      suburb: 'PINGELLY',
    },
    {
      postCode: '6343',
      suburb: 'PINGRUP',
    },
    {
      postCode: '6078',
      suburb: 'PINJAR',
    },
    {
      postCode: '6208',
      suburb: 'PINJARRA',
    },
    {
      postCode: '6450',
      suburb: 'PINK LAKE',
    },
    {
      postCode: '6623',
      suburb: 'PINTHARUKA',
    },
    {
      postCode: '6317',
      suburb: 'PINWERNYING',
    },
    {
      postCode: '6722',
      suburb: 'PIPPINGARRA',
    },
    {
      postCode: '6608',
      suburb: 'PITHARA',
    },
    {
      postCode: '6431',
      suburb: 'PLUMRIDGE LAKES',
    },
    {
      postCode: '6208',
      suburb: 'POINT GREY',
    },
    {
      postCode: '6720',
      suburb: 'POINT SAMSON',
    },
    {
      postCode: '6309',
      suburb: 'POPANYINNING',
    },
    {
      postCode: '6324',
      suburb: 'PORONGURUP',
    },
    {
      postCode: '6330',
      suburb: 'PORT ALBANY',
    },
    {
      postCode: '6525',
      suburb: 'PORT DENISON',
    },
    {
      postCode: '6721',
      suburb: 'PORT HEDLAND',
    },
    {
      postCode: '6172',
      suburb: 'PORT KENNEDY',
    },
    {
      postCode: '6167',
      suburb: 'POSTANS',
    },
    {
      postCode: '6215',
      suburb: 'PRESTON BEACH',
    },
    {
      postCode: '6225',
      suburb: 'PRESTON SETTLEMENT',
    },
    {
      postCode: '6285',
      suburb: 'PREVELLY',
    },
    {
      postCode: '6740',
      suburb: 'PRINCE REGENT RIVER',
    },
    {
      postCode: '6308',
      suburb: 'PUMPHREYS BRIDGE',
    },
    {
      postCode: '6770',
      suburb: 'PURNULULU',
    },
    {
      postCode: '6383',
      suburb: 'QUAIRADING',
    },
    {
      postCode: '6394',
      suburb: 'QUALEUP',
    },
    {
      postCode: '6281',
      suburb: 'QUEDJINUP',
    },
    {
      postCode: '6107',
      suburb: 'QUEENS PARK',
    },
    {
      postCode: '6239',
      suburb: 'QUEENWOOD',
    },
    {
      postCode: '6405',
      suburb: 'QUELAGETTING',
    },
    {
      postCode: '6302',
      suburb: 'QUELLINGTON',
    },
    {
      postCode: '6281',
      suburb: 'QUINDALUP',
    },
    {
      postCode: '6391',
      suburb: 'QUINDANNING',
    },
    {
      postCode: '6258',
      suburb: 'QUINNINUP',
    },
    {
      postCode: '6030',
      suburb: 'QUINNS ROCKS',
    },
    {
      postCode: '6390',
      suburb: 'RANFORD',
    },
    {
      postCode: '6530',
      suburb: 'RANGEWAY',
    },
    {
      postCode: '6346',
      suburb: 'RAVENSTHORPE',
    },
    {
      postCode: '6208',
      suburb: 'RAVENSWOOD',
    },
    {
      postCode: '6434',
      suburb: 'RAWLINNA',
    },
    {
      postCode: '6503',
      suburb: 'RED GULLY',
    },
    {
      postCode: '6056',
      suburb: 'RED HILL',
    },
    {
      postCode: '6721',
      suburb: 'REDBANK',
    },
    {
      postCode: '6104',
      suburb: 'REDCLIFFE',
    },
    {
      postCode: '6286',
      suburb: 'REDGATE',
    },
    {
      postCode: '6327',
      suburb: 'REDMOND',
    },
    {
      postCode: '6327',
      suburb: 'REDMOND WEST',
    },
    {
      postCode: '6640',
      suburb: 'REEDY',
    },
    {
      postCode: '6507',
      suburb: 'REGANS FORD',
    },
    {
      postCode: '6280',
      suburb: 'REINSCOURT',
    },
    {
      postCode: '6472',
      suburb: 'REMLAP',
    },
    {
      postCode: '6076',
      suburb: 'RESERVOIR',
    },
    {
      postCode: '6030',
      suburb: 'RIDGEWOOD',
    },
    {
      postCode: '6258',
      suburb: 'RINGBARK',
    },
    {
      postCode: '6148',
      suburb: 'RIVERTON',
    },
    {
      postCode: '6103',
      suburb: 'RIVERVALE',
    },
    {
      postCode: '6330',
      suburb: 'ROBINSON',
    },
    {
      postCode: '6168',
      suburb: 'ROCKINGHAM',
    },
    {
      postCode: '6968',
      suburb: 'ROCKINGHAM',
    },
    {
      postCode: '6168',
      suburb: 'ROCKINGHAM BEACH',
    },
    {
      postCode: '6969',
      suburb: 'ROCKINGHAM BEACH',
    },
    {
      postCode: '6168',
      suburb: 'ROCKINGHAM DC',
    },
    {
      postCode: '6967',
      suburb: 'ROCKINGHAM DC',
    },
    {
      postCode: '6751',
      suburb: 'ROCKLEA',
    },
    {
      postCode: '6532',
      suburb: 'ROCKWELL',
    },
    {
      postCode: '6397',
      suburb: 'ROCKY GULLY',
    },
    {
      postCode: '6718',
      suburb: 'ROEBOURNE',
    },
    {
      postCode: '6725',
      suburb: 'ROEBUCK',
    },
    {
      postCode: '6226',
      suburb: 'ROELANDS',
    },
    {
      postCode: '6111',
      suburb: 'ROLEYSTONE',
    },
    {
      postCode: '6285',
      suburb: 'ROSA BROOK',
    },
    {
      postCode: '6285',
      suburb: 'ROSA GLEN',
    },
    {
      postCode: '6401',
      suburb: 'ROSSMORE',
    },
    {
      postCode: '6148',
      suburb: 'ROSSMOYNE',
    },
    {
      postCode: '6620',
      suburb: 'ROTHSAY',
    },
    {
      postCode: '6161',
      suburb: 'ROTTNEST ISLAND',
    },
    {
      postCode: '6958',
      suburb: 'ROYAL AUSTRALIAN NAVY WARSHIPS',
    },
    {
      postCode: '6280',
      suburb: 'RUABON',
    },
    {
      postCode: '6532',
      suburb: 'RUDDS GULLY',
    },
    {
      postCode: '6395',
      suburb: 'RYANSBROOK',
    },
    {
      postCode: '6280',
      suburb: 'SABINA RIVER',
    },
    {
      postCode: '6169',
      suburb: 'SAFETY BAY',
    },
    {
      postCode: '6445',
      suburb: 'SALMON GUMS',
    },
    {
      postCode: '6152',
      suburb: 'SALTER POINT',
    },
    {
      postCode: '6163',
      suburb: 'SAMSON',
    },
    {
      postCode: '6210',
      suburb: 'SAN REMO',
    },
    {
      postCode: '6330',
      suburb: 'SANDPATCH',
    },
    {
      postCode: '6532',
      suburb: 'SANDSPRINGS',
    },
    {
      postCode: '6639',
      suburb: 'SANDSTONE',
    },
    {
      postCode: '6535',
      suburb: 'SANDY GULLY',
    },
    {
      postCode: '6074',
      suburb: 'SAWYERS VALLEY',
    },
    {
      postCode: '6447',
      suburb: 'SCADDAN',
    },
    {
      postCode: '6019',
      suburb: 'SCARBOROUGH',
    },
    {
      postCode: '6922',
      suburb: 'SCARBOROUGH',
    },
    {
      postCode: '6285',
      suburb: 'SCHROEDER',
    },
    {
      postCode: '6333',
      suburb: 'SCOTSDALE',
    },
    {
      postCode: '6288',
      suburb: 'SCOTT RIVER',
    },
    {
      postCode: '6275',
      suburb: 'SCOTT RIVER EAST',
    },
    {
      postCode: '6244',
      suburb: 'SCOTTS BROOK',
    },
    {
      postCode: '6042',
      suburb: 'SEABIRD',
    },
    {
      postCode: '6173',
      suburb: 'SECRET HARBOUR',
    },
    {
      postCode: '6330',
      suburb: 'SEPPINGS',
    },
    {
      postCode: '6125',
      suburb: 'SERPENTINE',
    },
    {
      postCode: '6112',
      suburb: 'SEVILLE GROVE',
    },
    {
      postCode: '6386',
      suburb: 'SHACKLETON',
    },
    {
      postCode: '6333',
      suburb: 'SHADFORTH',
    },
    {
      postCode: '6262',
      suburb: 'SHANNON',
    },
    {
      postCode: '6537',
      suburb: 'SHARK BAY',
    },
    {
      postCode: '6148',
      suburb: 'SHELLEY',
    },
    {
      postCode: '6008',
      suburb: 'SHENTON PARK',
    },
    {
      postCode: '6714',
      suburb: 'SHERLOCK',
    },
    {
      postCode: '6169',
      suburb: 'SHOALWATER',
    },
    {
      postCode: '6225',
      suburb: 'SHOTTS',
    },
    {
      postCode: '6280',
      suburb: 'SIESTA PARK',
    },
    {
      postCode: '6210',
      suburb: 'SILVER SANDS',
    },
    {
      postCode: '6065',
      suburb: 'SINAGRA',
    },
    {
      postCode: '6450',
      suburb: 'SINCLAIR',
    },
    {
      postCode: '6175',
      suburb: 'SINGLETON',
    },
    {
      postCode: '6437',
      suburb: 'SIR SAMUEL',
    },
    {
      postCode: '6426',
      suburb: 'SKELETON ROCK',
    },
    {
      postCode: '6258',
      suburb: 'SMITH BROOK',
    },
    {
      postCode: '6207',
      suburb: 'SOLUS',
    },
    {
      postCode: '6430',
      suburb: 'SOMERVILLE',
    },
    {
      postCode: '6020',
      suburb: 'SORRENTO',
    },
    {
      postCode: '6424',
      suburb: 'SOUTH BODALLIN',
    },
    {
      postCode: '6432',
      suburb: 'SOUTH BOULDER',
    },
    {
      postCode: '6230',
      suburb: 'SOUTH BUNBURY',
    },
    {
      postCode: '6421',
      suburb: 'SOUTH BURRACOPPIN',
    },
    {
      postCode: '6701',
      suburb: 'SOUTH CARNARVON',
    },
    {
      postCode: '6317',
      suburb: 'SOUTH DATATINE',
    },
    {
      postCode: '6411',
      suburb: 'SOUTH DOODLAKINE',
    },
    {
      postCode: '6162',
      suburb: 'SOUTH FREMANTLE',
    },
    {
      postCode: '6317',
      suburb: 'SOUTH GLENCOE',
    },
    {
      postCode: '6528',
      suburb: 'SOUTH GREENOUGH',
    },
    {
      postCode: '6055',
      suburb: 'SOUTH GUILDFORD',
    },
    {
      postCode: '6722',
      suburb: 'SOUTH HEDLAND',
    },
    {
      postCode: '6430',
      suburb: 'SOUTH KALGOORLIE',
    },
    {
      postCode: '6352',
      suburb: 'SOUTH KUKERIN',
    },
    {
      postCode: '6368',
      suburb: 'SOUTH KUMMININ',
    },
    {
      postCode: '6489',
      suburb: 'SOUTH KUNUNOPPIN',
    },
    {
      postCode: '6164',
      suburb: 'SOUTH LAKE',
    },
    {
      postCode: '6353',
      suburb: 'SOUTH LAKE GRACE',
    },
    {
      postCode: '6635',
      suburb: 'SOUTH MURCHISON',
    },
    {
      postCode: '6355',
      suburb: 'SOUTH NEWDEGATE',
    },
    {
      postCode: '6151',
      suburb: 'SOUTH PERTH',
    },
    {
      postCode: '6951',
      suburb: 'SOUTH PERTH',
    },
    {
      postCode: '6151',
      suburb: 'SOUTH PERTH ANGELO ST',
    },
    {
      postCode: '6701',
      suburb: 'SOUTH PLANTATIONS',
    },
    {
      postCode: '6383',
      suburb: 'SOUTH QUAIRADING',
    },
    {
      postCode: '6324',
      suburb: 'SOUTH STIRLING',
    },
    {
      postCode: '6409',
      suburb: 'SOUTH TAMMIN',
    },
    {
      postCode: '6488',
      suburb: 'SOUTH TRAYNING',
    },
    {
      postCode: '6487',
      suburb: 'SOUTH YELBENI',
    },
    {
      postCode: '6426',
      suburb: 'SOUTH YILGARN',
    },
    {
      postCode: '6532',
      suburb: 'SOUTH YUNA',
    },
    {
      postCode: '6208',
      suburb: 'SOUTH YUNDERUP',
    },
    {
      postCode: '6253',
      suburb: 'SOUTHAMPTON',
    },
    {
      postCode: '6401',
      suburb: 'SOUTHERN BROOK',
    },
    {
      postCode: '6426',
      suburb: 'SOUTHERN CROSS',
    },
    {
      postCode: '6110',
      suburb: 'SOUTHERN RIVER',
    },
    {
      postCode: '6530',
      suburb: 'SPALDING',
    },
    {
      postCode: '6163',
      suburb: 'SPEARWOOD',
    },
    {
      postCode: '6330',
      suburb: 'SPENCER PARK',
    },
    {
      postCode: '6401',
      suburb: 'SPENCERS BROOK',
    },
    {
      postCode: '6525',
      suburb: 'SPRINGFIELD',
    },
    {
      postCode: '6308',
      suburb: 'SPRINGS',
    },
    {
      postCode: '6728',
      suburb: 'ST GEORGE RANGES',
    },
    {
      postCode: '6102',
      suburb: 'ST JAMES',
    },
    {
      postCode: '6302',
      suburb: 'ST RONANS',
    },
    {
      postCode: '6181',
      suburb: 'STAKE HILL',
    },
    {
      postCode: '6021',
      suburb: 'STIRLING',
    },
    {
      postCode: '6271',
      suburb: 'STIRLING ESTATE',
    },
    {
      postCode: '6338',
      suburb: 'STIRLING RANGE NATIONAL PARK',
    },
    {
      postCode: '6081',
      suburb: 'STONEVILLE',
    },
    {
      postCode: '6714',
      suburb: 'STOVE HILL',
    },
    {
      postCode: '6530',
      suburb: 'STRATHALBYN',
    },
    {
      postCode: '6237',
      suburb: 'STRATHAM',
    },
    {
      postCode: '6309',
      suburb: 'STRATHERNE',
    },
    {
      postCode: '6056',
      suburb: 'STRATTON',
    },
    {
      postCode: '6721',
      suburb: 'STRELLEY',
    },
    {
      postCode: '6770',
      suburb: 'STURT CREEK',
    },
    {
      postCode: '6008',
      suburb: 'SUBIACO',
    },
    {
      postCode: '6008',
      suburb: 'SUBIACO EAST',
    },
    {
      postCode: '6904',
      suburb: 'SUBIACO PO',
    },
    {
      postCode: '6164',
      suburb: 'SUCCESS',
    },
    {
      postCode: '6964',
      suburb: 'SUCCESS',
    },
    {
      postCode: '6256',
      suburb: 'SUNNYSIDE',
    },
    {
      postCode: '6530',
      suburb: 'SUNSET BEACH',
    },
    {
      postCode: '6056',
      suburb: 'SWAN VIEW',
    },
    {
      postCode: '6010',
      suburb: 'SWANBOURNE',
    },
    {
      postCode: '6324',
      suburb: 'TAKALARUP',
    },
    {
      postCode: '6710',
      suburb: 'TALANDJI',
    },
    {
      postCode: '6302',
      suburb: 'TALBOT',
    },
    {
      postCode: '6302',
      suburb: 'TALBOT WEST',
    },
    {
      postCode: '6490',
      suburb: 'TALGOMINE',
    },
    {
      postCode: '6701',
      suburb: 'TALISKER',
    },
    {
      postCode: '6532',
      suburb: 'TAMALA',
    },
    {
      postCode: '6030',
      suburb: 'TAMALA PARK',
    },
    {
      postCode: '6320',
      suburb: 'TAMBELLUP',
    },
    {
      postCode: '6409',
      suburb: 'TAMMIN',
    },
    {
      postCode: '6472',
      suburb: 'TAMPU',
    },
    {
      postCode: '6770',
      suburb: 'TANAMI',
    },
    {
      postCode: '6415',
      suburb: 'TANDEGIN',
    },
    {
      postCode: '6065',
      suburb: 'TAPPING',
    },
    {
      postCode: '6530',
      suburb: 'TARCOOLA BEACH',
    },
    {
      postCode: '6628',
      suburb: 'TARDUN',
    },
    {
      postCode: '6353',
      suburb: 'TARIN ROCK',
    },
    {
      postCode: '6213',
      suburb: 'TEESDALE',
    },
    {
      postCode: '6762',
      suburb: 'TELFER',
    },
    {
      postCode: '6632',
      suburb: 'TENINDEWA',
    },
    {
      postCode: '6322',
      suburb: 'TENTERDEN',
    },
    {
      postCode: '6556',
      suburb: 'THE LAKES',
    },
    {
      postCode: '6237',
      suburb: 'THE PLAINS',
    },
    {
      postCode: '6167',
      suburb: 'THE SPECTACLES',
    },
    {
      postCode: '6069',
      suburb: 'THE VINES',
    },
    {
      postCode: '6711',
      suburb: 'THEVENARD ISLAND',
    },
    {
      postCode: '6239',
      suburb: 'THOMSON BROOK',
    },
    {
      postCode: '6108',
      suburb: 'THORNLIE',
    },
    {
      postCode: '6988',
      suburb: 'THORNLIE',
    },
    {
      postCode: '6519',
      suburb: 'THREE SPRINGS',
    },
    {
      postCode: '6401',
      suburb: 'THROSSELL',
    },
    {
      postCode: '6532',
      suburb: 'TIBRADDEN',
    },
    {
      postCode: '6361',
      suburb: 'TINCURRIN',
    },
    {
      postCode: '6333',
      suburb: 'TINGLEDALE',
    },
    {
      postCode: '872',
      suburb: 'TJIRRKARLI',
    },
    {
      postCode: '872',
      suburb: 'TJUKURLA',
    },
    {
      postCode: '6751',
      suburb: 'TOM PRICE',
    },
    {
      postCode: '6244',
      suburb: 'TONEBRIDGE',
    },
    {
      postCode: '6566',
      suburb: 'TOODYAY',
    },
    {
      postCode: '6312',
      suburb: 'TOOLIBIN',
    },
    {
      postCode: '6532',
      suburb: 'TOOLONGA',
    },
    {
      postCode: '6336',
      suburb: 'TOOMPUP',
    },
    {
      postCode: '6330',
      suburb: 'TORBAY',
    },
    {
      postCode: '6330',
      suburb: 'TORNDIRRUP',
    },
    {
      postCode: '6311',
      suburb: 'TOWNSENDALE',
    },
    {
      postCode: '6431',
      suburb: 'TRAFALGAR',
    },
    {
      postCode: '6488',
      suburb: 'TRAYNING',
    },
    {
      postCode: '6164',
      suburb: 'TREEBY',
    },
    {
      postCode: '6284',
      suburb: 'TREETON',
    },
    {
      postCode: '6333',
      suburb: 'TRENT',
    },
    {
      postCode: '6029',
      suburb: 'TRIGG',
    },
    {
      postCode: '6244',
      suburb: 'TRIGWELL',
    },
    {
      postCode: '6060',
      suburb: 'TUART HILL',
    },
    {
      postCode: '6939',
      suburb: 'TUART HILL',
    },
    {
      postCode: '6426',
      suburb: 'TURKEY HILL',
    },
    {
      postCode: '6280',
      suburb: 'TUTUNUP',
    },
    {
      postCode: '6037',
      suburb: 'TWO ROCKS',
    },
    {
      postCode: '6462',
      suburb: 'UCARTY',
    },
    {
      postCode: '6460',
      suburb: 'UCARTY WEST',
    },
    {
      postCode: '6220',
      suburb: 'UDUC',
    },
    {
      postCode: '6436',
      suburb: 'ULARRING',
    },
    {
      postCode: '6239',
      suburb: 'UPPER CAPEL',
    },
    {
      postCode: '6390',
      suburb: 'UPPER MURRAY',
    },
    {
      postCode: '6069',
      suburb: 'UPPER SWAN',
    },
    {
      postCode: '6258',
      suburb: 'UPPER WARREN',
    },
    {
      postCode: '6537',
      suburb: 'USELESS LOOP',
    },
    {
      postCode: '6230',
      suburb: 'USHER',
    },
    {
      postCode: '6530',
      suburb: 'UTAKARRA',
    },
    {
      postCode: '6532',
      suburb: 'VALENTINE',
    },
    {
      postCode: '6330',
      suburb: 'VANCOUVER PENINSULA',
    },
    {
      postCode: '6355',
      suburb: 'VARLEY',
    },
    {
      postCode: '6280',
      suburb: 'VASSE',
    },
    {
      postCode: '6100',
      suburb: 'VICTORIA PARK',
    },
    {
      postCode: '6979',
      suburb: 'VICTORIA PARK',
    },
    {
      postCode: '6429',
      suburb: 'VICTORIA ROCK',
    },
    {
      postCode: '6432',
      suburb: 'VICTORY HEIGHTS',
    },
    {
      postCode: '6230',
      suburb: 'VITTORIA',
    },
    {
      postCode: '6056',
      suburb: 'VIVEASH',
    },
    {
      postCode: '6369',
      suburb: 'WADDERIN',
    },
    {
      postCode: '6509',
      suburb: 'WADDINGTON',
    },
    {
      postCode: '6515',
      suburb: 'WADDY FOREST',
    },
    {
      postCode: '6407',
      suburb: 'WAEEL',
    },
    {
      postCode: '6215',
      suburb: 'WAGERUP',
    },
    {
      postCode: '6530',
      suburb: 'WAGGRAKINE',
    },
    {
      postCode: '6315',
      suburb: 'WAGIN',
    },
    {
      postCode: '6169',
      suburb: 'WAIKIKI',
    },
    {
      postCode: '6510',
      suburb: 'WALEBING',
    },
    {
      postCode: '6422',
      suburb: 'WALGOOLAN',
    },
    {
      postCode: '6528',
      suburb: 'WALKAWAY',
    },
    {
      postCode: '6721',
      suburb: 'WALLAREENYA',
    },
    {
      postCode: '6429',
      suburb: 'WALLAROO',
    },
    {
      postCode: '6076',
      suburb: 'WALLISTON',
    },
    {
      postCode: '6925',
      suburb: 'WALLISTON DC',
    },
    {
      postCode: '6330',
      suburb: 'WALMSLEY',
    },
    {
      postCode: '6398',
      suburb: 'WALPOLE',
    },
    {
      postCode: '6280',
      suburb: 'WALSALL',
    },
    {
      postCode: '6460',
      suburb: 'WALYORMOURING',
    },
    {
      postCode: '6084',
      suburb: 'WALYUNGA NATIONAL PARK',
    },
    {
      postCode: '6363',
      suburb: 'WALYURIN',
    },
    {
      postCode: '6383',
      suburb: 'WAMENUSKING',
    },
    {
      postCode: '872',
      suburb: 'WANARN',
    },
    {
      postCode: '6532',
      suburb: 'WANDANA',
    },
    {
      postCode: '6308',
      suburb: 'WANDERING',
    },
    {
      postCode: '6167',
      suburb: 'WANDI',
    },
    {
      postCode: '6256',
      suburb: 'WANDILLUP',
    },
    {
      postCode: '6530',
      suburb: 'WANDINA',
    },
    {
      postCode: '6503',
      suburb: 'WANERIE',
    },
    {
      postCode: '6065',
      suburb: 'WANGARA',
    },
    {
      postCode: '6065',
      suburb: 'WANGARA DC',
    },
    {
      postCode: '6947',
      suburb: 'WANGARA DC',
    },
    {
      postCode: '6505',
      suburb: 'WANNAMAL',
    },
    {
      postCode: '6210',
      suburb: 'WANNANUP',
    },
    {
      postCode: '6065',
      suburb: 'WANNEROO',
    },
    {
      postCode: '6946',
      suburb: 'WANNEROO',
    },
    {
      postCode: '6320',
      suburb: 'WANSBROUGH',
    },
    {
      postCode: '872',
      suburb: 'WARAKURNA',
    },
    {
      postCode: '6220',
      suburb: 'WARAWARRUP',
    },
    {
      postCode: '6431',
      suburb: 'WARBURTON',
    },
    {
      postCode: '6311',
      suburb: 'WARDERING',
    },
    {
      postCode: '6405',
      suburb: 'WARDING EAST',
    },
    {
      postCode: '6743',
      suburb: 'WARMUN',
    },
    {
      postCode: '6169',
      suburb: 'WARNBRO',
    },
    {
      postCode: '6288',
      suburb: 'WARNER GLEN',
    },
    {
      postCode: '6215',
      suburb: 'WAROONA',
    },
    {
      postCode: '6423',
      suburb: 'WARRACHUPPIN',
    },
    {
      postCode: '6518',
      suburb: 'WARRADARGE',
    },
    {
      postCode: '6421',
      suburb: 'WARRALAKIN',
    },
    {
      postCode: '6330',
      suburb: 'WARRENUP',
    },
    {
      postCode: '6024',
      suburb: 'WARWICK',
    },
    {
      postCode: '6725',
      suburb: 'WATERBANK',
    },
    {
      postCode: '6407',
      suburb: 'WATERCARRIN',
    },
    {
      postCode: '6152',
      suburb: 'WATERFORD',
    },
    {
      postCode: '6228',
      suburb: 'WATERLOO',
    },
    {
      postCode: '6020',
      suburb: 'WATERMANS BAY',
    },
    {
      postCode: '6513',
      suburb: 'WATHEROO',
    },
    {
      postCode: '6568',
      suburb: 'WATTENING',
    },
    {
      postCode: '6107',
      suburb: 'WATTLE GROVE',
    },
    {
      postCode: '6166',
      suburb: 'WATTLEUP',
    },
    {
      postCode: '6479',
      suburb: 'WATTONING',
    },
    {
      postCode: '6530',
      suburb: 'WEBBERTON',
    },
    {
      postCode: '6044',
      suburb: 'WEDGE ISLAND',
    },
    {
      postCode: '6315',
      suburb: 'WEDGECARRUP',
    },
    {
      postCode: '6721',
      suburb: 'WEDGEFIELD',
    },
    {
      postCode: '6477',
      suburb: 'WELBUNGIN',
    },
    {
      postCode: '6640',
      suburb: 'WELD RANGE',
    },
    {
      postCode: '6170',
      suburb: 'WELLARD',
    },
    {
      postCode: '6233',
      suburb: 'WELLESLEY',
    },
    {
      postCode: '6236',
      suburb: 'WELLINGTON FOREST',
    },
    {
      postCode: '6236',
      suburb: 'WELLINGTON MILL',
    },
    {
      postCode: '6328',
      suburb: 'WELLSTEAD',
    },
    {
      postCode: '6106',
      suburb: 'WELSHPOOL',
    },
    {
      postCode: '6986',
      suburb: 'WELSHPOOL DC',
    },
    {
      postCode: '6014',
      suburb: 'WEMBLEY',
    },
    {
      postCode: '6913',
      suburb: 'WEMBLEY',
    },
    {
      postCode: '6019',
      suburb: 'WEMBLEY DOWNS',
    },
    {
      postCode: '6606',
      suburb: 'WEST BALLIDU',
    },
    {
      postCode: '6450',
      suburb: 'WEST BEACH',
    },
    {
      postCode: '6532',
      suburb: 'WEST BINNU',
    },
    {
      postCode: '6280',
      suburb: 'WEST BUSSELTON',
    },
    {
      postCode: '6330',
      suburb: 'WEST CAPE HOWE',
    },
    {
      postCode: '6630',
      suburb: 'WEST CASUARINAS',
    },
    {
      postCode: '6214',
      suburb: 'WEST COOLUP',
    },
    {
      postCode: '6530',
      suburb: 'WEST END',
    },
    {
      postCode: '6337',
      suburb: 'WEST FITZGERALD',
    },
    {
      postCode: '6369',
      suburb: 'WEST HOLLETON',
    },
    {
      postCode: '6799',
      suburb: 'WEST ISLAND COCOS (KEELING) ISLANDS',
    },
    {
      postCode: '6430',
      suburb: 'WEST KALGOORLIE',
    },
    {
      postCode: '6430',
      suburb: 'WEST LAMINGTON',
    },
    {
      postCode: '6007',
      suburb: 'WEST LEEDERVILLE',
    },
    {
      postCode: '6901',
      suburb: 'WEST LEEDERVILLE',
    },
    {
      postCode: '6705',
      suburb: 'WEST LYONS RIVER',
    },
    {
      postCode: '6005',
      suburb: 'WEST PERTH',
    },
    {
      postCode: '6872',
      suburb: 'WEST PERTH',
    },
    {
      postCode: '6308',
      suburb: 'WEST PINGELLY',
    },
    {
      postCode: '6208',
      suburb: 'WEST PINJARRA',
    },
    {
      postCode: '6309',
      suburb: 'WEST POPANYINNING',
    },
    {
      postCode: '6346',
      suburb: 'WEST RIVER',
    },
    {
      postCode: '6055',
      suburb: 'WEST SWAN',
    },
    {
      postCode: '6566',
      suburb: 'WEST TOODYAY',
    },
    {
      postCode: '6304',
      suburb: 'WESTDALE',
    },
    {
      postCode: '6061',
      suburb: 'WESTMINSTER',
    },
    {
      postCode: '6423',
      suburb: 'WESTONIA',
    },
    {
      postCode: '6316',
      suburb: 'WESTWOOD',
    },
    {
      postCode: '6718',
      suburb: 'WHIM CREEK',
    },
    {
      postCode: '6123',
      suburb: 'WHITBY',
    },
    {
      postCode: '6162',
      suburb: 'WHITE GUM VALLEY',
    },
    {
      postCode: '6532',
      suburb: 'WHITE PEAK',
    },
    {
      postCode: '6068',
      suburb: 'WHITEMAN',
    },
    {
      postCode: '6207',
      suburb: 'WHITTAKER',
    },
    {
      postCode: '6473',
      suburb: 'WIALKI',
    },
    {
      postCode: '6532',
      suburb: 'WICHERINA',
    },
    {
      postCode: '6532',
      suburb: 'WICHERINA SOUTH',
    },
    {
      postCode: '6370',
      suburb: 'WICKEPIN',
    },
    {
      postCode: '6720',
      suburb: 'WICKHAM',
    },
    {
      postCode: '6443',
      suburb: 'WIDGIEMOOLTHA',
    },
    {
      postCode: '6743',
      suburb: 'WIJILAWARRIM',
    },
    {
      postCode: '6302',
      suburb: 'WILBERFORCE',
    },
    {
      postCode: '6041',
      suburb: 'WILBINGA',
    },
    {
      postCode: '6243',
      suburb: 'WILGA',
    },
    {
      postCode: '6243',
      suburb: 'WILGA WEST',
    },
    {
      postCode: '6258',
      suburb: 'WILGARRUP',
    },
    {
      postCode: '6479',
      suburb: 'WILGOYNE',
    },
    {
      postCode: '6156',
      suburb: 'WILLAGEE',
    },
    {
      postCode: '6156',
      suburb: 'WILLAGEE CENTRAL',
    },
    {
      postCode: '6728',
      suburb: 'WILLARE',
    },
    {
      postCode: '6155',
      suburb: 'WILLETTON',
    },
    {
      postCode: '6955',
      suburb: 'WILLETTON',
    },
    {
      postCode: '6333',
      suburb: 'WILLIAM BAY',
    },
    {
      postCode: '6391',
      suburb: 'WILLIAMS',
    },
    {
      postCode: '6430',
      suburb: 'WILLIAMSTOWN',
    },
    {
      postCode: '6330',
      suburb: 'WILLYUNG',
    },
    {
      postCode: '6107',
      suburb: 'WILSON',
    },
    {
      postCode: '6646',
      suburb: 'WILUNA',
    },
    {
      postCode: '6280',
      suburb: 'WILYABRUP',
    },
    {
      postCode: '6450',
      suburb: 'WINDABOUT',
    },
    {
      postCode: '6262',
      suburb: 'WINDY HARBOUR',
    },
    {
      postCode: '872',
      suburb: 'WINGELLINA',
    },
    {
      postCode: '6255',
      suburb: 'WINNEJUP',
    },
    {
      postCode: '6150',
      suburb: 'WINTHROP',
    },
    {
      postCode: '6286',
      suburb: 'WITCHCLIFFE',
    },
    {
      postCode: '6230',
      suburb: 'WITHERS',
    },
    {
      postCode: '6751',
      suburb: 'WITTENOOM',
    },
    {
      postCode: '6447',
      suburb: 'WITTENOOM HILLS',
    },
    {
      postCode: '6370',
      suburb: 'WOGOLIN',
    },
    {
      postCode: '6221',
      suburb: 'WOKALUP',
    },
    {
      postCode: '6519',
      suburb: 'WOMARDEN',
    },
    {
      postCode: '6401',
      suburb: 'WONGAMINE',
    },
    {
      postCode: '6603',
      suburb: 'WONGAN HILLS',
    },
    {
      postCode: '6630',
      suburb: 'WONGOONDY',
    },
    {
      postCode: '6280',
      suburb: 'WONNERUP',
    },
    {
      postCode: '6530',
      suburb: 'WONTHELLA',
    },
    {
      postCode: '6316',
      suburb: 'WOODANILLING',
    },
    {
      postCode: '6056',
      suburb: 'WOODBRIDGE',
    },
    {
      postCode: '6018',
      suburb: 'WOODLANDS',
    },
    {
      postCode: '6701',
      suburb: 'WOODLEIGH',
    },
    {
      postCode: '6041',
      suburb: 'WOODRIDGE',
    },
    {
      postCode: '6026',
      suburb: 'WOODVALE',
    },
    {
      postCode: '6324',
      suburb: 'WOOGENELLUP',
    },
    {
      postCode: '6630',
      suburb: 'WOOLGORONG',
    },
    {
      postCode: '6369',
      suburb: 'WOOLOCUTTY',
    },
    {
      postCode: '6701',
      suburb: 'WOORAMEL',
    },
    {
      postCode: '6558',
      suburb: 'WOOROLOO',
    },
    {
      postCode: '6530',
      suburb: 'WOORREE',
    },
    {
      postCode: '6562',
      suburb: 'WOOTTATING',
    },
    {
      postCode: '6225',
      suburb: 'WORSLEY',
    },
    {
      postCode: '6612',
      suburb: 'WUBIN',
    },
    {
      postCode: '6560',
      suburb: 'WUNDOWIE',
    },
    {
      postCode: '6112',
      suburb: 'WUNGONG',
    },
    {
      postCode: '6390',
      suburb: 'WURAMING',
    },
    {
      postCode: '6485',
      suburb: 'WYALKATCHEM',
    },
    {
      postCode: '6568',
      suburb: 'WYENING',
    },
    {
      postCode: '6740',
      suburb: 'WYNDHAM',
    },
    {
      postCode: '6407',
      suburb: 'WYOLA WEST',
    },
    {
      postCode: '6609',
      suburb: 'XANTIPPE',
    },
    {
      postCode: '6239',
      suburb: 'YABBERUP',
    },
    {
      postCode: '6330',
      suburb: 'YAKAMIA',
    },
    {
      postCode: '6701',
      suburb: 'YALARDY',
    },
    {
      postCode: '6635',
      suburb: 'YALGOO',
    },
    {
      postCode: '6535',
      suburb: 'YALLABATHARRA',
    },
    {
      postCode: '6282',
      suburb: 'YALLINGUP',
    },
    {
      postCode: '6282',
      suburb: 'YALLINGUP SIDING',
    },
    {
      postCode: '6280',
      suburb: 'YALYALUP',
    },
    {
      postCode: '6035',
      suburb: 'YANCHEP',
    },
    {
      postCode: '6522',
      suburb: 'YANDANOOKA',
    },
    {
      postCode: '6701',
      suburb: 'YANDOO CREEK',
    },
    {
      postCode: '6164',
      suburb: 'YANGEBUP',
    },
    {
      postCode: '6258',
      suburb: 'YANMAH',
    },
    {
      postCode: '6710',
      suburb: 'YANNARIE',
    },
    {
      postCode: '6509',
      suburb: 'YARAWINDAH',
    },
    {
      postCode: '6525',
      suburb: 'YARDARINO',
    },
    {
      postCode: '6218',
      suburb: 'YARLOOP',
    },
    {
      postCode: '6522',
      suburb: 'YARRAGADEE',
    },
    {
      postCode: '6507',
      suburb: 'YATHROO',
    },
    {
      postCode: '6260',
      suburb: 'YEAGARUP',
    },
    {
      postCode: '6503',
      suburb: 'YEAL',
    },
    {
      postCode: '6372',
      suburb: 'YEALERING',
    },
    {
      postCode: '6285',
      suburb: 'YEBBLE',
    },
    {
      postCode: '6487',
      suburb: 'YELBENI',
    },
    {
      postCode: '6426',
      suburb: 'YELLOWDINE',
    },
    {
      postCode: '6280',
      suburb: 'YELVERTON',
    },
    {
      postCode: '6571',
      suburb: 'YERECOIN',
    },
    {
      postCode: '6532',
      suburb: 'YETNA',
    },
    {
      postCode: '6430',
      suburb: 'YILKARI',
    },
    {
      postCode: '6312',
      suburb: 'YILLIMINNING',
    },
    {
      postCode: '6275',
      suburb: 'YOGANUP',
    },
    {
      postCode: '6060',
      suburb: 'YOKINE',
    },
    {
      postCode: '6060',
      suburb: 'YOKINE SOUTH',
    },
    {
      postCode: '6280',
      suburb: 'YOONGARILLUP',
    },
    {
      postCode: '6302',
      suburb: 'YORK',
    },
    {
      postCode: '6311',
      suburb: 'YORNANING',
    },
    {
      postCode: '6256',
      suburb: 'YORNUP',
    },
    {
      postCode: '6383',
      suburb: 'YOTING',
    },
    {
      postCode: '6407',
      suburb: 'YOUNDEGIN',
    },
    {
      postCode: '6330',
      suburb: 'YOUNGS SIDING',
    },
    {
      postCode: '6225',
      suburb: 'YOURDAMUNG LAKE',
    },
    {
      postCode: '6532',
      suburb: 'YUNA',
    },
    {
      postCode: '6434',
      suburb: 'ZANTHUS',
    },
    {
      postCode: '6536',
      suburb: 'ZUYTDORP',
    },
  ];
  constructor() {}
}
