import { Injectable } from '@angular/core';
import { PostCodeItemType } from 'src/app/interface/global/global.interface';

@Injectable({
  providedIn: 'root',
})
export class TasService {
  public data: PostCodeItemType[] = [
    {
      postCode: '7315',
      suburb: 'ABBOTSHAM',
    },
    {
      postCode: '7112',
      suburb: 'ABELS BAY',
    },
    {
      postCode: '7310',
      suburb: 'ABERDEEN',
    },
    {
      postCode: '7306',
      suburb: 'ACACIA HILLS',
    },
    {
      postCode: '7320',
      suburb: 'ACTON',
    },
    {
      postCode: '7170',
      suburb: 'ACTON PARK',
    },
    {
      postCode: '7150',
      suburb: 'ADVENTURE BAY',
    },
    {
      postCode: '7216',
      suburb: 'AKAROA',
    },
    {
      postCode: '7263',
      suburb: 'ALBERTON',
    },
    {
      postCode: '7330',
      suburb: 'ALCOMIE',
    },
    {
      postCode: '7150',
      suburb: 'ALLENS RIVULET',
    },
    {
      postCode: '7150',
      suburb: 'ALONNAH',
    },
    {
      postCode: '7310',
      suburb: 'AMBLESIDE',
    },
    {
      postCode: '7120',
      suburb: 'ANDOVER',
    },
    {
      postCode: '7264',
      suburb: 'ANSONS BAY',
    },
    {
      postCode: '7120',
      suburb: 'ANTILL PONDS',
    },
    {
      postCode: '7150',
      suburb: 'APOLLO BAY',
    },
    {
      postCode: '7190',
      suburb: 'APSLAWN',
    },
    {
      postCode: '7030',
      suburb: 'APSLEY',
    },
    {
      postCode: '7330',
      suburb: 'ARTHUR RIVER',
    },
    {
      postCode: '7030',
      suburb: 'ARTHURS LAKE',
    },
    {
      postCode: '7011',
      suburb: 'AUSTINS FERRY',
    },
    {
      postCode: '7213',
      suburb: 'AVOCA',
    },
    {
      postCode: '7120',
      suburb: 'BADEN',
    },
    {
      postCode: '7270',
      suburb: 'BADGER HEAD',
    },
    {
      postCode: '7030',
      suburb: 'BAGDAD',
    },
    {
      postCode: '7307',
      suburb: 'BAKERS BEACH',
    },
    {
      postCode: '7265',
      suburb: 'BANCA',
    },
    {
      postCode: '7267',
      suburb: 'BANGOR',
    },
    {
      postCode: '7150',
      suburb: 'BARNES BAY',
    },
    {
      postCode: '7054',
      suburb: 'BARRETTA',
    },
    {
      postCode: '7306',
      suburb: 'BARRINGTON',
    },
    {
      postCode: '7004',
      suburb: 'BATTERY POINT',
    },
    {
      postCode: '7270',
      suburb: 'BEACONSFIELD',
    },
    {
      postCode: '7215',
      suburb: 'BEAUMARIS',
    },
    {
      postCode: '7270',
      suburb: 'BEAUTY POINT',
    },
    {
      postCode: '7252',
      suburb: 'BEECHFORD',
    },
    {
      postCode: '7253',
      suburb: 'BELL BAY',
    },
    {
      postCode: '7018',
      suburb: 'BELLERIVE',
    },
    {
      postCode: '7254',
      suburb: 'BELLINGHAM',
    },
    {
      postCode: '7212',
      suburb: 'BEN LOMOND',
    },
    {
      postCode: '7011',
      suburb: 'BERRIEDALE',
    },
    {
      postCode: '7306',
      suburb: 'BEULAH',
    },
    {
      postCode: '7215',
      suburb: 'BICHENO',
    },
    {
      postCode: '7216',
      suburb: 'BINALONG BAY',
    },
    {
      postCode: '7162',
      suburb: 'BIRCHS BAY',
    },
    {
      postCode: '7303',
      suburb: 'BIRRALEE',
    },
    {
      postCode: '7301',
      suburb: 'BISHOPSBOURNE',
    },
    {
      postCode: '7140',
      suburb: 'BLACK HILLS',
    },
    {
      postCode: '7321',
      suburb: 'BLACK RIVER',
    },
    {
      postCode: '7052',
      suburb: 'BLACKMANS BAY',
    },
    {
      postCode: '7250',
      suburb: 'BLACKSTONE HEIGHTS',
    },
    {
      postCode: '7275',
      suburb: 'BLACKWALL',
    },
    {
      postCode: '7301',
      suburb: 'BLACKWOOD CREEK',
    },
    {
      postCode: '7212',
      suburb: 'BLESSINGTON',
    },
    {
      postCode: '7255',
      suburb: 'BLUE ROCKS',
    },
    {
      postCode: '7260',
      suburb: 'BLUMONT',
    },
    {
      postCode: '7321',
      suburb: 'BOAT HARBOUR',
    },
    {
      postCode: '7321',
      suburb: 'BOAT HARBOUR BEACH',
    },
    {
      postCode: '7053',
      suburb: 'BONNET HILL',
    },
    {
      postCode: '7264',
      suburb: 'BOOBYALLA',
    },
    {
      postCode: '7177',
      suburb: 'BOOMER BAY',
    },
    {
      postCode: '7030',
      suburb: 'BOTHWELL',
    },
    {
      postCode: '7140',
      suburb: 'BOYER',
    },
    {
      postCode: '7302',
      suburb: 'BRACKNELL',
    },
    {
      postCode: '7140',
      suburb: 'BRADYS LAKE',
    },
    {
      postCode: '7304',
      suburb: 'BRANDUM',
    },
    {
      postCode: '7261',
      suburb: 'BRANXHOLM',
    },
    {
      postCode: '7258',
      suburb: 'BREADALBANE',
    },
    {
      postCode: '7175',
      suburb: 'BREAM CREEK',
    },
    {
      postCode: '7304',
      suburb: 'BREONA',
    },
    {
      postCode: '7277',
      suburb: 'BRIDGENORTH',
    },
    {
      postCode: '7030',
      suburb: 'BRIDGEWATER',
    },
    {
      postCode: '7262',
      suburb: 'BRIDPORT',
    },
    {
      postCode: '7030',
      suburb: 'BRIGHTON',
    },
    {
      postCode: '7330',
      suburb: 'BRITTONS SWAMP',
    },
    {
      postCode: '7030',
      suburb: 'BROADMARSH',
    },
    {
      postCode: '7330',
      suburb: 'BROADMEADOWS',
    },
    {
      postCode: '7140',
      suburb: 'BRONTE PARK',
    },
    {
      postCode: '7320',
      suburb: 'BROOKLYN',
    },
    {
      postCode: '7116',
      suburb: 'BROOKS BAY',
    },
    {
      postCode: '7190',
      suburb: 'BUCKLAND',
    },
    {
      postCode: '7256',
      suburb: 'BUNGAREE',
    },
    {
      postCode: '7320',
      suburb: 'BURNIE',
    },
    {
      postCode: '7212',
      suburb: 'BURNS CREEK',
    },
    {
      postCode: '7140',
      suburb: 'BUSHY PARK',
    },
    {
      postCode: '7140',
      suburb: 'BUTLERS GORGE',
    },
    {
      postCode: '7116',
      suburb: 'CAIRNS BAY',
    },
    {
      postCode: '7325',
      suburb: 'CALDER',
    },
    {
      postCode: '7170',
      suburb: 'CAMBRIDGE',
    },
    {
      postCode: '7320',
      suburb: 'CAMDALE',
    },
    {
      postCode: '7316',
      suburb: 'CAMENA',
    },
    {
      postCode: '7026',
      suburb: 'CAMPANIA',
    },
    {
      postCode: '7210',
      suburb: 'CAMPBELL TOWN',
    },
    {
      postCode: '7257',
      suburb: 'CAPE BARREN ISLAND',
    },
    {
      postCode: '7182',
      suburb: 'CAPE PILLAR',
    },
    {
      postCode: '7264',
      suburb: 'CAPE PORTLAND',
    },
    {
      postCode: '7184',
      suburb: 'CAPE RAOUL',
    },
    {
      postCode: '7173',
      suburb: 'CARLTON',
    },
    {
      postCode: '7173',
      suburb: 'CARLTON RIVER',
    },
    {
      postCode: '7291',
      suburb: 'CARRICK',
    },
    {
      postCode: '7151',
      suburb: 'CASEY',
    },
    {
      postCode: '7116',
      suburb: 'CASTLE FORBES BAY',
    },
    {
      postCode: '7315',
      suburb: 'CASTRA',
    },
    {
      postCode: '7304',
      suburb: 'CAVESIDE',
    },
    {
      postCode: '7304',
      suburb: 'CENTRAL PLATEAU',
    },
    {
      postCode: '7306',
      suburb: 'CETHANA',
    },
    {
      postCode: '7215',
      suburb: 'CHAIN OF LAGOONS',
    },
    {
      postCode: '7112',
      suburb: 'CHARLOTTE COVE',
    },
    {
      postCode: '7321',
      suburb: 'CHASM CREEK',
    },
    {
      postCode: '7011',
      suburb: 'CHIGWELL',
    },
    {
      postCode: '7330',
      suburb: 'CHRISTMAS HILLS',
    },
    {
      postCode: '7304',
      suburb: 'CHUDLEIGH',
    },
    {
      postCode: '7011',
      suburb: 'CLAREMONT',
    },
    {
      postCode: '7270',
      suburb: 'CLARENCE POINT',
    },
    {
      postCode: '7019',
      suburb: 'CLARENDON VALE',
    },
    {
      postCode: '7306',
      suburb: 'CLAUDE ROAD',
    },
    {
      postCode: '7211',
      suburb: 'CLEVELAND',
    },
    {
      postCode: '7020',
      suburb: 'CLIFTON BEACH',
    },
    {
      postCode: '7303',
      suburb: 'CLUAN',
    },
    {
      postCode: '7027',
      suburb: 'COLEBROOK',
    },
    {
      postCode: '7215',
      suburb: 'COLES BAY',
    },
    {
      postCode: '7012',
      suburb: 'COLLINSVALE',
    },
    {
      postCode: '7211',
      suburb: 'CONARA',
    },
    {
      postCode: '7054',
      suburb: 'CONINGHAM',
    },
    {
      postCode: '7173',
      suburb: 'CONNELLYS MARSH',
    },
    {
      postCode: '7320',
      suburb: 'COOEE',
    },
    {
      postCode: '7174',
      suburb: 'COPPING',
    },
    {
      postCode: '7321',
      suburb: 'CORINNA',
    },
    {
      postCode: '7215',
      suburb: 'CORNWALL',
    },
    {
      postCode: '7330',
      suburb: 'COUTA ROCKS',
    },
    {
      postCode: '7321',
      suburb: 'COWRIE POINT',
    },
    {
      postCode: '7109',
      suburb: 'CRABTREE',
    },
    {
      postCode: '7306',
      suburb: 'CRADLE MOUNTAIN',
    },
    {
      postCode: '7109',
      suburb: 'CRADOC',
    },
    {
      postCode: '7030',
      suburb: 'CRAMPS BAY',
    },
    {
      postCode: '7190',
      suburb: 'CRANBROOK',
    },
    {
      postCode: '7321',
      suburb: 'CRAYFISH CREEK',
    },
    {
      postCode: '7024',
      suburb: 'CREMORNE',
    },
    {
      postCode: '7302',
      suburb: 'CRESSY',
    },
    {
      postCode: '7260',
      suburb: 'CUCKOO',
    },
    {
      postCode: '7316',
      suburb: 'CUPRONA',
    },
    {
      postCode: '7256',
      suburb: 'CURRIE',
    },
    {
      postCode: '7112',
      suburb: 'CYGNET',
    },
    {
      postCode: '7304',
      suburb: 'DAIRY PLAINS',
    },
    {
      postCode: '7151',
      suburb: 'DAVIS',
    },
    {
      postCode: '7212',
      suburb: 'DEDDINGTON',
    },
    {
      postCode: '7140',
      suburb: 'DEE',
    },
    {
      postCode: '7112',
      suburb: 'DEEP BAY',
    },
    {
      postCode: '7304',
      suburb: 'DELORAINE',
    },
    {
      postCode: '7150',
      suburb: 'DENNES POINT',
    },
    {
      postCode: '7264',
      suburb: 'DERBY',
    },
    {
      postCode: '7140',
      suburb: 'DERWENT BRIDGE',
    },
    {
      postCode: '7009',
      suburb: 'DERWENT PARK',
    },
    {
      postCode: '7321',
      suburb: 'DETENTION',
    },
    {
      postCode: '7275',
      suburb: 'DEVIOT',
    },
    {
      postCode: '7300',
      suburb: 'DEVON HILLS',
    },
    {
      postCode: '7310',
      suburb: 'DEVONPORT',
    },
    {
      postCode: '7252',
      suburb: 'DILSTON',
    },
    {
      postCode: '7304',
      suburb: 'DOCTORS POINT',
    },
    {
      postCode: '7325',
      suburb: 'DOCTORS ROCKS',
    },
    {
      postCode: '7173',
      suburb: 'DODGES FERRY',
    },
    {
      postCode: '7190',
      suburb: 'DOLPHIN SANDS',
    },
    {
      postCode: '7310',
      suburb: 'DON',
    },
    {
      postCode: '7215',
      suburb: 'DOUGLAS RIVER',
    },
    {
      postCode: '7215',
      suburb: 'DOUGLAS-APSLEY',
    },
    {
      postCode: '7117',
      suburb: 'DOVER',
    },
    {
      postCode: '7320',
      suburb: 'DOWNLANDS',
    },
    {
      postCode: '7010',
      suburb: 'DOWSING POINT',
    },
    {
      postCode: '7030',
      suburb: 'DROMEDARY',
    },
    {
      postCode: '7025',
      suburb: 'DULCOT',
    },
    {
      postCode: '7177',
      suburb: 'DUNALLEY',
    },
    {
      postCode: '7304',
      suburb: 'DUNORLAN',
    },
    {
      postCode: '7005',
      suburb: 'DYNNYRNE',
    },
    {
      postCode: '7030',
      suburb: 'DYSART',
    },
    {
      postCode: '7179',
      suburb: 'EAGLEHAWK NECK',
    },
    {
      postCode: '7321',
      suburb: 'EAST CAM',
    },
    {
      postCode: '7310',
      suburb: 'EAST DEVONPORT',
    },
    {
      postCode: '7250',
      suburb: 'EAST LAUNCESTON',
    },
    {
      postCode: '7321',
      suburb: 'EAST RIDGLEY',
    },
    {
      postCode: '7264',
      suburb: 'EDDYSTONE',
    },
    {
      postCode: '7321',
      suburb: 'EDGCUMBE BEACH',
    },
    {
      postCode: '7330',
      suburb: 'EDITH CREEK',
    },
    {
      postCode: '7256',
      suburb: 'EGG LAGOON',
    },
    {
      postCode: '7112',
      suburb: 'EGGS AND BACON BAY',
    },
    {
      postCode: '7030',
      suburb: 'ELDERSLIE',
    },
    {
      postCode: '7054',
      suburb: 'ELECTRONA',
    },
    {
      postCode: '7304',
      suburb: 'ELIZABETH TOWN',
    },
    {
      postCode: '7140',
      suburb: 'ELLENDALE',
    },
    {
      postCode: '7325',
      suburb: 'ELLIOTT',
    },
    {
      postCode: '7255',
      suburb: 'EMITA',
    },
    {
      postCode: '7320',
      suburb: 'EMU HEIGHTS',
    },
    {
      postCode: '7211',
      suburb: 'EPPING FOREST',
    },
    {
      postCode: '7310',
      suburb: 'ERRIBA',
    },
    {
      postCode: '7310',
      suburb: 'EUGENANA',
    },
    {
      postCode: '7212',
      suburb: 'EVANDALE',
    },
    {
      postCode: '7275',
      suburb: 'EXETER',
    },
    {
      postCode: '7303',
      suburb: 'EXTON',
    },
    {
      postCode: '7215',
      suburb: 'FALMOUTH',
    },
    {
      postCode: '7140',
      suburb: 'FENTONBURY',
    },
    {
      postCode: '7054',
      suburb: 'FERN TREE',
    },
    {
      postCode: '7214',
      suburb: 'FINGAL',
    },
    {
      postCode: '7140',
      suburb: 'FITZGERALD',
    },
    {
      postCode: '7030',
      suburb: 'FLINTSTONE',
    },
    {
      postCode: '7140',
      suburb: 'FLORENTINE',
    },
    {
      postCode: '7325',
      suburb: 'FLOWERDALE',
    },
    {
      postCode: '7163',
      suburb: 'FLOWERPOT',
    },
    {
      postCode: '7270',
      suburb: 'FLOWERY GULLY',
    },
    {
      postCode: '7173',
      suburb: 'FORCETT',
    },
    {
      postCode: '7330',
      suburb: 'FOREST',
    },
    {
      postCode: '7260',
      suburb: 'FORESTER',
    },
    {
      postCode: '7182',
      suburb: 'FORTESCUE',
    },
    {
      postCode: '7310',
      suburb: 'FORTH',
    },
    {
      postCode: '7310',
      suburb: 'FORTHSIDE',
    },
    {
      postCode: '7215',
      suburb: 'FOUR MILE CREEK',
    },
    {
      postCode: '7275',
      suburb: 'FRANKFORD',
    },
    {
      postCode: '7113',
      suburb: 'FRANKLIN',
    },
    {
      postCode: '7215',
      suburb: 'FREYCINET',
    },
    {
      postCode: '7215',
      suburb: 'FRIENDLY BEACHES',
    },
    {
      postCode: '7030',
      suburb: 'GAGEBROOK',
    },
    {
      postCode: '7112',
      suburb: 'GARDEN ISLAND CREEK',
    },
    {
      postCode: '7112',
      suburb: 'GARDNERS BAY',
    },
    {
      postCode: '7315',
      suburb: 'GAWLER',
    },
    {
      postCode: '7116',
      suburb: 'GEEVESTON',
    },
    {
      postCode: '7015',
      suburb: 'GEILSTON BAY',
    },
    {
      postCode: '7253',
      suburb: 'GEORGE TOWN',
    },
    {
      postCode: '7264',
      suburb: 'GLADSTONE',
    },
    {
      postCode: '7109',
      suburb: 'GLAZIERS BAY',
    },
    {
      postCode: '7000',
      suburb: 'GLEBE',
    },
    {
      postCode: '7109',
      suburb: 'GLEN HUON',
    },
    {
      postCode: '7109',
      suburb: 'GLENDEVIE',
    },
    {
      postCode: '7140',
      suburb: 'GLENFERN',
    },
    {
      postCode: '7275',
      suburb: 'GLENGARRY',
    },
    {
      postCode: '7012',
      suburb: 'GLENLUSK',
    },
    {
      postCode: '7140',
      suburb: 'GLENORA',
    },
    {
      postCode: '7010',
      suburb: 'GLENORCHY',
    },
    {
      postCode: '7254',
      suburb: 'GOLCONDA',
    },
    {
      postCode: '7304',
      suburb: 'GOLDEN VALLEY',
    },
    {
      postCode: '7010',
      suburb: 'GOODWOOD',
    },
    {
      postCode: '7150',
      suburb: 'GORDON',
    },
    {
      postCode: '7466',
      suburb: 'GORMANSTON',
    },
    {
      postCode: '7216',
      suburb: 'GOSHEN',
    },
    {
      postCode: '7216',
      suburb: 'GOULDS COUNTRY',
    },
    {
      postCode: '7306',
      suburb: 'GOWRIE PARK',
    },
    {
      postCode: '7030',
      suburb: 'GRANTON',
    },
    {
      postCode: '7469',
      suburb: 'GRANVILLE HARBOUR',
    },
    {
      postCode: '7017',
      suburb: 'GRASSTREE HILL',
    },
    {
      postCode: '7256',
      suburb: 'GRASSY',
    },
    {
      postCode: '7276',
      suburb: 'GRAVELLY BEACH',
    },
    {
      postCode: '7215',
      suburb: 'GRAY',
    },
    {
      postCode: '7150',
      suburb: 'GREAT BAY',
    },
    {
      postCode: '7270',
      suburb: 'GREENS BEACH',
    },
    {
      postCode: '7140',
      suburb: 'GRETNA',
    },
    {
      postCode: '7277',
      suburb: 'GRINDELWALD',
    },
    {
      postCode: '7109',
      suburb: 'GROVE',
    },
    {
      postCode: '7321',
      suburb: 'GUILDFORD',
    },
    {
      postCode: '7315',
      suburb: 'GUNNS PLAINS',
    },
    {
      postCode: '7290',
      suburb: 'HADSPEN',
    },
    {
      postCode: '7292',
      suburb: 'HAGLEY',
    },
    {
      postCode: '7140',
      suburb: 'HAMILTON',
    },
    {
      postCode: '7321',
      suburb: 'HAMPSHIRE',
    },
    {
      postCode: '7307',
      suburb: 'HARFORD',
    },
    {
      postCode: '7109',
      suburb: 'HASTINGS',
    },
    {
      postCode: '7320',
      suburb: 'HAVENVIEW',
    },
    {
      postCode: '7307',
      suburb: 'HAWLEY BEACH',
    },
    {
      postCode: '7140',
      suburb: 'HAYES',
    },
    {
      postCode: '7151',
      suburb: 'HEARD ISLAND',
    },
    {
      postCode: '7321',
      suburb: 'HELLYER',
    },
    {
      postCode: '7325',
      suburb: 'HENRIETTA',
    },
    {
      postCode: '7030',
      suburb: 'HERDSMANS COVE',
    },
    {
      postCode: '7030',
      suburb: 'HERMITAGE',
    },
    {
      postCode: '7264',
      suburb: 'HERRICK',
    },
    {
      postCode: '7316',
      suburb: 'HEYBRIDGE',
    },
    {
      postCode: '7321',
      suburb: 'HIGHCLERE',
    },
    {
      postCode: '7183',
      suburb: 'HIGHCROFT',
    },
    {
      postCode: '7320',
      suburb: 'HILLCREST',
    },
    {
      postCode: '7252',
      suburb: 'HILLWOOD',
    },
    {
      postCode: '7000',
      suburb: 'HOBART',
    },
    {
      postCode: '7001',
      suburb: 'HOBART',
    },
    {
      postCode: '7140',
      suburb: 'HOLLOW TREE',
    },
    {
      postCode: '7275',
      suburb: 'HOLWELL',
    },
    {
      postCode: '7017',
      suburb: 'HONEYWOOD',
    },
    {
      postCode: '7054',
      suburb: 'HOWDEN',
    },
    {
      postCode: '7018',
      suburb: 'HOWRAH',
    },
    {
      postCode: '7316',
      suburb: 'HOWTH',
    },
    {
      postCode: '7055',
      suburb: 'HUNTINGFIELD',
    },
    {
      postCode: '7112',
      suburb: 'HUON ISLAND',
    },
    {
      postCode: '7109',
      suburb: 'HUONVILLE',
    },
    {
      postCode: '7109',
      suburb: 'IDA BAY',
    },
    {
      postCode: '7030',
      suburb: 'INTERLAKEN',
    },
    {
      postCode: '7248',
      suburb: 'INVERMAY',
    },
    {
      postCode: '7330',
      suburb: 'IRISHTOWN',
    },
    {
      postCode: '7304',
      suburb: 'JACKEYS MARSH',
    },
    {
      postCode: '7030',
      suburb: 'JERICHO',
    },
    {
      postCode: '7260',
      suburb: 'JETSONVILLE',
    },
    {
      postCode: '7109',
      suburb: 'JUDBURY',
    },
    {
      postCode: '7260',
      suburb: 'KAMONA',
    },
    {
      postCode: '7150',
      suburb: 'KAOOTA',
    },
    {
      postCode: '7140',
      suburb: 'KARANJA',
    },
    {
      postCode: '7267',
      suburb: 'KAROOLA',
    },
    {
      postCode: '7270',
      suburb: 'KAYENA',
    },
    {
      postCode: '7176',
      suburb: 'KELLEVIE',
    },
    {
      postCode: '7270',
      suburb: 'KELSO',
    },
    {
      postCode: '7030',
      suburb: 'KEMPTON',
    },
    {
      postCode: '7155',
      suburb: 'KETTERING',
    },
    {
      postCode: '7255',
      suburb: 'KILLIECRANKIE',
    },
    {
      postCode: '7150',
      suburb: 'KILLORA',
    },
    {
      postCode: '7304',
      suburb: 'KIMBERLEY',
    },
    {
      postCode: '7310',
      suburb: 'KINDRED',
    },
    {
      postCode: '7249',
      suburb: 'KINGS MEADOWS',
    },
    {
      postCode: '7050',
      suburb: 'KINGSTON',
    },
    {
      postCode: '7051',
      suburb: 'KINGSTON',
    },
    {
      postCode: '7050',
      suburb: 'KINGSTON BEACH',
    },
    {
      postCode: '7187',
      suburb: 'KOONYA',
    },
    {
      postCode: '7140',
      suburb: 'LACHLAN',
    },
    {
      postCode: '7255',
      suburb: 'LACKRANA',
    },
    {
      postCode: '7255',
      suburb: 'LADY BARRON',
    },
    {
      postCode: '7210',
      suburb: 'LAKE LEAKE',
    },
    {
      postCode: '7467',
      suburb: 'LAKE MARGARET',
    },
    {
      postCode: '7030',
      suburb: 'LAKE SORELL',
    },
    {
      postCode: '7140',
      suburb: 'LAKE ST CLAIR',
    },
    {
      postCode: '7267',
      suburb: 'LALLA',
    },
    {
      postCode: '7275',
      suburb: 'LANENA',
    },
    {
      postCode: '7325',
      suburb: 'LAPOINYA',
    },
    {
      postCode: '7307',
      suburb: 'LATROBE',
    },
    {
      postCode: '7021',
      suburb: 'LAUDERDALE',
    },
    {
      postCode: '7250',
      suburb: 'LAUNCESTON',
    },
    {
      postCode: '7140',
      suburb: 'LAWITTA',
    },
    {
      postCode: '7254',
      suburb: 'LEBRINA',
    },
    {
      postCode: '7255',
      suburb: 'LEEKA',
    },
    {
      postCode: '7252',
      suburb: 'LEFROY',
    },
    {
      postCode: '7277',
      suburb: 'LEGANA',
    },
    {
      postCode: '7263',
      suburb: 'LEGERWOOD',
    },
    {
      postCode: '7315',
      suburb: 'LEITH',
    },
    {
      postCode: '7120',
      suburb: 'LEMONT',
    },
    {
      postCode: '7008',
      suburb: 'LENAH VALLEY',
    },
    {
      postCode: '7054',
      suburb: 'LESLIE VALE',
    },
    {
      postCode: '7120',
      suburb: 'LEVENDALE',
    },
    {
      postCode: '7173',
      suburb: 'LEWISHAM',
    },
    {
      postCode: '7030',
      suburb: 'LIAWENEE',
    },
    {
      postCode: '7304',
      suburb: 'LIENA',
    },
    {
      postCode: '7260',
      suburb: 'LIETINNA',
    },
    {
      postCode: '7301',
      suburb: 'LIFFEY',
    },
    {
      postCode: '7330',
      suburb: 'LILEAH',
    },
    {
      postCode: '7310',
      suburb: 'LILLICO',
    },
    {
      postCode: '7268',
      suburb: 'LILYDALE',
    },
    {
      postCode: '7015',
      suburb: 'LINDISFARNE',
    },
    {
      postCode: '7260',
      suburb: 'LISLE',
    },
    {
      postCode: '7140',
      suburb: 'LITTLE PINE LAGOON',
    },
    {
      postCode: '7190',
      suburb: 'LITTLE SWANPORT',
    },
    {
      postCode: '7255',
      suburb: 'LOCCOTA',
    },
    {
      postCode: '7275',
      suburb: 'LOIRA',
    },
    {
      postCode: '7140',
      suburb: 'LONDON LAKES',
    },
    {
      postCode: '7253',
      suburb: 'LONG REACH',
    },
    {
      postCode: '7301',
      suburb: 'LONGFORD',
    },
    {
      postCode: '7150',
      suburb: 'LONGLEY',
    },
    {
      postCode: '7109',
      suburb: 'LONNAVALE',
    },
    {
      postCode: '7315',
      suburb: 'LOONGANA',
    },
    {
      postCode: '7256',
      suburb: 'LOORANA',
    },
    {
      postCode: '7306',
      suburb: 'LORINNA',
    },
    {
      postCode: '7216',
      suburb: 'LOTTAH',
    },
    {
      postCode: '7253',
      suburb: 'LOW HEAD',
    },
    {
      postCode: '7306',
      suburb: 'LOWER BARRINGTON',
    },
    {
      postCode: '7306',
      suburb: 'LOWER BEULAH',
    },
    {
      postCode: '7109',
      suburb: 'LOWER LONGLEY',
    },
    {
      postCode: '7030',
      suburb: 'LOWER MARSHES',
    },
    {
      postCode: '7005',
      suburb: 'LOWER SANDY BAY',
    },
    {
      postCode: '7054',
      suburb: 'LOWER SNUG',
    },
    {
      postCode: '7267',
      suburb: 'LOWER TURNERS MARSH',
    },
    {
      postCode: '7109',
      suburb: 'LOWER WATTLE GROVE',
    },
    {
      postCode: '7310',
      suburb: 'LOWER WILMOT',
    },
    {
      postCode: '7316',
      suburb: 'LOYETEA',
    },
    {
      postCode: '7109',
      suburb: 'LUCASTON',
    },
    {
      postCode: '7255',
      suburb: 'LUGHRATA',
    },
    {
      postCode: '7321',
      suburb: 'LUINA',
    },
    {
      postCode: '7252',
      suburb: 'LULWORTH',
    },
    {
      postCode: '7150',
      suburb: 'LUNAWANNA',
    },
    {
      postCode: '7109',
      suburb: 'LUNE RIVER',
    },
    {
      postCode: '7009',
      suburb: 'LUTANA',
    },
    {
      postCode: '7109',
      suburb: 'LYMINGTON',
    },
    {
      postCode: '7256',
      suburb: 'LYMWOOD',
    },
    {
      postCode: '7468',
      suburb: 'MACQUARIE HEADS',
    },
    {
      postCode: '7151',
      suburb: 'MACQUARIE ISLAND',
    },
    {
      postCode: '7140',
      suburb: 'MACQUARIE PLAINS',
    },
    {
      postCode: '7140',
      suburb: 'MAGRA',
    },
    {
      postCode: '7140',
      suburb: 'MALBINA',
    },
    {
      postCode: '7030',
      suburb: 'MANGALORE',
    },
    {
      postCode: '7214',
      suburb: 'MANGANA',
    },
    {
      postCode: '7054',
      suburb: 'MARGATE',
    },
    {
      postCode: '7175',
      suburb: 'MARION BAY',
    },
    {
      postCode: '7330',
      suburb: 'MARRAWAH',
    },
    {
      postCode: '7214',
      suburb: 'MATHINNA',
    },
    {
      postCode: '7321',
      suburb: 'MAWBANNA',
    },
    {
      postCode: '7151',
      suburb: 'MAWSON',
    },
    {
      postCode: '7304',
      suburb: 'MAYBERRY',
    },
    {
      postCode: '7140',
      suburb: 'MAYDENA',
    },
    {
      postCode: '7248',
      suburb: 'MAYFIELD',
    },
    {
      postCode: '7151',
      suburb: 'MCDONALD ISLANDS',
    },
    {
      postCode: '7140',
      suburb: 'MEADOWBANK',
    },
    {
      postCode: '7304',
      suburb: 'MEANDER',
    },
    {
      postCode: '7330',
      suburb: 'MELLA',
    },
    {
      postCode: '7310',
      suburb: 'MELROSE',
    },
    {
      postCode: '7030',
      suburb: 'MELTON MOWBRAY',
    },
    {
      postCode: '7255',
      suburb: 'MEMANA',
    },
    {
      postCode: '7330',
      suburb: 'MENGHA',
    },
    {
      postCode: '7304',
      suburb: 'MERSEY FOREST',
    },
    {
      postCode: '7305',
      suburb: 'MERSEYLEA',
    },
    {
      postCode: '7325',
      suburb: 'MEUNNA',
    },
    {
      postCode: '7310',
      suburb: 'MIANDETTA',
    },
    {
      postCode: '7306',
      suburb: 'MIDDLESEX',
    },
    {
      postCode: '7163',
      suburb: 'MIDDLETON',
    },
    {
      postCode: '7171',
      suburb: 'MIDWAY POINT',
    },
    {
      postCode: '7030',
      suburb: 'MIENA',
    },
    {
      postCode: '7325',
      suburb: 'MILABENA',
    },
    {
      postCode: '7030',
      suburb: 'MILLERS BLUFF',
    },
    {
      postCode: '7310',
      suburb: 'MOINA',
    },
    {
      postCode: '7304',
      suburb: 'MOLE CREEK',
    },
    {
      postCode: '7140',
      suburb: 'MOLESWORTH',
    },
    {
      postCode: '7304',
      suburb: 'MOLTEMA',
    },
    {
      postCode: '7330',
      suburb: 'MONTAGU',
    },
    {
      postCode: '7018',
      suburb: 'MONTAGU BAY',
    },
    {
      postCode: '7304',
      suburb: 'MONTANA',
    },
    {
      postCode: '7320',
      suburb: 'MONTELLO',
    },
    {
      postCode: '7010',
      suburb: 'MONTROSE',
    },
    {
      postCode: '7321',
      suburb: 'MONTUMANA',
    },
    {
      postCode: '7140',
      suburb: 'MOOGARA',
    },
    {
      postCode: '7009',
      suburb: 'MOONAH',
    },
    {
      postCode: '7321',
      suburb: 'MOOREVILLE',
    },
    {
      postCode: '7264',
      suburb: 'MOORINA',
    },
    {
      postCode: '7325',
      suburb: 'MOORLEAH',
    },
    {
      postCode: '7030',
      suburb: 'MORASS BAY',
    },
    {
      postCode: '7307',
      suburb: 'MORIARTY',
    },
    {
      postCode: '7018',
      suburb: 'MORNINGTON',
    },
    {
      postCode: '7252',
      suburb: 'MOUNT DIRECTION',
    },
    {
      postCode: '7140',
      suburb: 'MOUNT FIELD',
    },
    {
      postCode: '7325',
      suburb: 'MOUNT HICKS',
    },
    {
      postCode: '7140',
      suburb: 'MOUNT LLOYD',
    },
    {
      postCode: '7007',
      suburb: 'MOUNT NELSON',
    },
    {
      postCode: '7306',
      suburb: 'MOUNT ROLAND',
    },
    {
      postCode: '7170',
      suburb: 'MOUNT RUMNEY',
    },
    {
      postCode: '7120',
      suburb: 'MOUNT SEYMOUR',
    },
    {
      postCode: '7000',
      suburb: 'MOUNT STUART',
    },
    {
      postCode: '7264',
      suburb: 'MOUNT WILLIAM',
    },
    {
      postCode: '7109',
      suburb: 'MOUNTAIN RIVER',
    },
    {
      postCode: '7248',
      suburb: 'MOWBRAY',
    },
    {
      postCode: '7178',
      suburb: 'MURDUNNA',
    },
    {
      postCode: '7264',
      suburb: 'MUSSELROE BAY',
    },
    {
      postCode: '7325',
      suburb: 'MYALLA',
    },
    {
      postCode: '7259',
      suburb: 'MYRTLE BANK',
    },
    {
      postCode: '7330',
      suburb: 'NABAGEENA',
    },
    {
      postCode: '7260',
      suburb: 'NABOWLA',
    },
    {
      postCode: '7256',
      suburb: 'NARACOOPA',
    },
    {
      postCode: '7140',
      suburb: 'NATIONAL PARK',
    },
    {
      postCode: '7321',
      suburb: 'NATONE',
    },
    {
      postCode: '7304',
      suburb: 'NEEDLES',
    },
    {
      postCode: '7054',
      suburb: 'NEIKA',
    },
    {
      postCode: '7330',
      suburb: 'NELSON BAY',
    },
    {
      postCode: '7140',
      suburb: 'NEW NORFOLK',
    },
    {
      postCode: '7008',
      suburb: 'NEW TOWN',
    },
    {
      postCode: '7248',
      suburb: 'NEWNHAM',
    },
    {
      postCode: '7250',
      suburb: 'NEWSTEAD',
    },
    {
      postCode: '7112',
      suburb: 'NICHOLLS RIVULET',
    },
    {
      postCode: '7315',
      suburb: 'NIETTA',
    },
    {
      postCode: '7212',
      suburb: 'NILE',
    },
    {
      postCode: '7306',
      suburb: 'NOOK',
    },
    {
      postCode: '7150',
      suburb: 'NORTH BRUNY',
    },
    {
      postCode: '7000',
      suburb: 'NORTH HOBART',
    },
    {
      postCode: '7002',
      suburb: 'NORTH HOBART',
    },
    {
      postCode: '7268',
      suburb: 'NORTH LILYDALE',
    },
    {
      postCode: '7315',
      suburb: 'NORTH MOTTON',
    },
    {
      postCode: '7260',
      suburb: 'NORTH SCOTTSDALE',
    },
    {
      postCode: '7307',
      suburb: 'NORTHDOWN',
    },
    {
      postCode: '7250',
      suburb: 'NORWOOD',
    },
    {
      postCode: '7275',
      suburb: 'NOTLEY HILLS',
    },
    {
      postCode: '7306',
      suburb: 'NOWHERE ELSE',
    },
    {
      postCode: '7184',
      suburb: 'NUBEENA',
    },
    {
      postCode: '7256',
      suburb: 'NUGARA',
    },
    {
      postCode: '7172',
      suburb: 'NUGENT',
    },
    {
      postCode: '7259',
      suburb: 'NUNAMARA',
    },
    {
      postCode: '7019',
      suburb: 'OAKDOWNS',
    },
    {
      postCode: '7303',
      suburb: 'OAKS',
    },
    {
      postCode: '7120',
      suburb: 'OATLANDS',
    },
    {
      postCode: '7320',
      suburb: 'OCEAN VISTA',
    },
    {
      postCode: '7017',
      suburb: 'OLD BEACH',
    },
    {
      postCode: '7325',
      suburb: 'OLDINA',
    },
    {
      postCode: '7325',
      suburb: 'OONAH',
    },
    {
      postCode: '7023',
      suburb: 'OPOSSUM BAY',
    },
    {
      postCode: '7190',
      suburb: 'ORFORD',
    },
    {
      postCode: '7172',
      suburb: 'ORIELTON',
    },
    {
      postCode: '7303',
      suburb: 'OSMASTON',
    },
    {
      postCode: '7140',
      suburb: 'OSTERLEY',
    },
    {
      postCode: '7017',
      suburb: 'OTAGO',
    },
    {
      postCode: '7140',
      suburb: 'OUSE',
    },
    {
      postCode: '7150',
      suburb: 'OYSTER COVE',
    },
    {
      postCode: '7255',
      suburb: 'PALANA',
    },
    {
      postCode: '7310',
      suburb: 'PALOONA',
    },
    {
      postCode: '7306',
      suburb: 'PARADISE',
    },
    {
      postCode: '7120',
      suburb: 'PARATTAH',
    },
    {
      postCode: '7320',
      suburb: 'PARK GROVE',
    },
    {
      postCode: '7304',
      suburb: 'PARKHAM',
    },
    {
      postCode: '7320',
      suburb: 'PARKLANDS',
    },
    {
      postCode: '7321',
      suburb: 'PARRAWE',
    },
    {
      postCode: '7259',
      suburb: 'PATERSONIA',
    },
    {
      postCode: '7172',
      suburb: 'PAWLEENA',
    },
    {
      postCode: '7120',
      suburb: 'PAWTELLA',
    },
    {
      postCode: '7256',
      suburb: 'PEARSHAPE',
    },
    {
      postCode: '7256',
      suburb: 'PEGARAH',
    },
    {
      postCode: '7030',
      suburb: 'PELHAM',
    },
    {
      postCode: '7150',
      suburb: 'PELVERATA',
    },
    {
      postCode: '7316',
      suburb: 'PENGUIN',
    },
    {
      postCode: '7171',
      suburb: 'PENNA',
    },
    {
      postCode: '7300',
      suburb: 'PERTH',
    },
    {
      postCode: '7109',
      suburb: 'PETCHEYS BAY',
    },
    {
      postCode: '7264',
      suburb: 'PIONEER',
    },
    {
      postCode: '7254',
      suburb: 'PIPERS BROOK',
    },
    {
      postCode: '7252',
      suburb: 'PIPERS RIVER',
    },
    {
      postCode: '7140',
      suburb: 'PLENTY',
    },
    {
      postCode: '7302',
      suburb: 'POATINA',
    },
    {
      postCode: '7116',
      suburb: 'POLICE POINT',
    },
    {
      postCode: '7030',
      suburb: 'PONTVILLE',
    },
    {
      postCode: '7190',
      suburb: 'PONTYPOOL',
    },
    {
      postCode: '7182',
      suburb: 'PORT ARTHUR',
    },
    {
      postCode: '7116',
      suburb: 'PORT HUON',
    },
    {
      postCode: '7321',
      suburb: 'PORT LATTA',
    },
    {
      postCode: '7307',
      suburb: 'PORT SORELL',
    },
    {
      postCode: '7300',
      suburb: 'POWRANNA',
    },
    {
      postCode: '7185',
      suburb: 'PREMAYDENA',
    },
    {
      postCode: '7325',
      suburb: 'PREOLENNA',
    },
    {
      postCode: '7316',
      suburb: 'PRESERVATION BAY',
    },
    {
      postCode: '7315',
      suburb: 'PRESTON',
    },
    {
      postCode: '7173',
      suburb: 'PRIMROSE SANDS',
    },
    {
      postCode: '7306',
      suburb: 'PROMISED LAND',
    },
    {
      postCode: '7250',
      suburb: 'PROSPECT',
    },
    {
      postCode: '7250',
      suburb: 'PROSPECT VALE',
    },
    {
      postCode: '7249',
      suburb: 'PUNCHBOWL',
    },
    {
      postCode: '7216',
      suburb: 'PYENGANA',
    },
    {
      postCode: '7292',
      suburb: 'QUAMBY BEND',
    },
    {
      postCode: '7304',
      suburb: 'QUAMBY BROOK',
    },
    {
      postCode: '7000',
      suburb: 'QUEENS DOMAIN',
    },
    {
      postCode: '7467',
      suburb: 'QUEENSTOWN',
    },
    {
      postCode: '7310',
      suburb: 'QUOIBA',
    },
    {
      postCode: '7305',
      suburb: 'RAILTON',
    },
    {
      postCode: '7109',
      suburb: 'RAMINEA',
    },
    {
      postCode: '7112',
      suburb: 'RANDALLS BAY',
    },
    {
      postCode: '7109',
      suburb: 'RANELAGH',
    },
    {
      postCode: '7255',
      suburb: 'RANGA',
    },
    {
      postCode: '7250',
      suburb: 'RAVENSWOOD',
    },
    {
      postCode: '7109',
      suburb: 'RECHERCHE',
    },
    {
      postCode: '7304',
      suburb: 'RED HILLS',
    },
    {
      postCode: '7330',
      suburb: 'REDPA',
    },
    {
      postCode: '7304',
      suburb: 'REEDY MARSH',
    },
    {
      postCode: '7256',
      suburb: 'REEKARA',
    },
    {
      postCode: '7258',
      suburb: 'RELBIA',
    },
    {
      postCode: '7469',
      suburb: 'RENISON BELL',
    },
    {
      postCode: '7254',
      suburb: 'RETREAT',
    },
    {
      postCode: '7304',
      suburb: 'REYNOLDS NECK',
    },
    {
      postCode: '7190',
      suburb: 'RHEBAN',
    },
    {
      postCode: '7120',
      suburb: 'RHYNDASTON',
    },
    {
      postCode: '7316',
      suburb: 'RIANA',
    },
    {
      postCode: '7025',
      suburb: 'RICHMOND',
    },
    {
      postCode: '7054',
      suburb: 'RIDGEWAY',
    },
    {
      postCode: '7321',
      suburb: 'RIDGLEY',
    },
    {
      postCode: '7263',
      suburb: 'RINGAROOMA',
    },
    {
      postCode: '7017',
      suburb: 'RISDON',
    },
    {
      postCode: '7016',
      suburb: 'RISDON VALE',
    },
    {
      postCode: '7250',
      suburb: 'RIVERSIDE',
    },
    {
      postCode: '7275',
      suburb: 'ROBIGANA',
    },
    {
      postCode: '7248',
      suburb: 'ROCHERLEA',
    },
    {
      postCode: '7170',
      suburb: 'ROCHES BEACH',
    },
    {
      postCode: '7321',
      suburb: 'ROCKY CAPE',
    },
    {
      postCode: '7190',
      suburb: 'ROCKY HILLS',
    },
    {
      postCode: '7330',
      suburb: 'ROGER RIVER',
    },
    {
      postCode: '7019',
      suburb: 'ROKEBY',
    },
    {
      postCode: '7306',
      suburb: 'ROLAND',
    },
    {
      postCode: '7320',
      suburb: 'ROMAINE',
    },
    {
      postCode: '7015',
      suburb: 'ROSE BAY',
    },
    {
      postCode: '7470',
      suburb: 'ROSEBERY',
    },
    {
      postCode: '7140',
      suburb: 'ROSEGARLAND',
    },
    {
      postCode: '7010',
      suburb: 'ROSETTA',
    },
    {
      postCode: '7292',
      suburb: 'ROSEVALE',
    },
    {
      postCode: '7277',
      suburb: 'ROSEVEARS',
    },
    {
      postCode: '7018',
      suburb: 'ROSNY',
    },
    {
      postCode: '7018',
      suburb: 'ROSNY PARK',
    },
    {
      postCode: '7209',
      suburb: 'ROSS',
    },
    {
      postCode: '7213',
      suburb: 'ROSSARDEN',
    },
    {
      postCode: '7320',
      suburb: 'ROUND HILL',
    },
    {
      postCode: '7270',
      suburb: 'ROWELLA',
    },
    {
      postCode: '7213',
      suburb: 'ROYAL GEORGE',
    },
    {
      postCode: '7190',
      suburb: 'RUNNYMEDE',
    },
    {
      postCode: '7264',
      suburb: 'RUSHY LAGOON',
    },
    {
      postCode: '7186',
      suburb: 'SALTWATER RIVER',
    },
    {
      postCode: '7150',
      suburb: 'SANDFLY',
    },
    {
      postCode: '7020',
      suburb: 'SANDFORD',
    },
    {
      postCode: '7005',
      suburb: 'SANDY BAY',
    },
    {
      postCode: '7006',
      suburb: 'SANDY BAY',
    },
    {
      postCode: '7307',
      suburb: 'SASSAFRAS',
    },
    {
      postCode: '7321',
      suburb: 'SAVAGE RIVER',
    },
    {
      postCode: '7215',
      suburb: 'SCAMANDER',
    },
    {
      postCode: '7330',
      suburb: 'SCOPUS',
    },
    {
      postCode: '7330',
      suburb: 'SCOTCHTOWN',
    },
    {
      postCode: '7260',
      suburb: 'SCOTTSDALE',
    },
    {
      postCode: '7256',
      suburb: 'SEA ELEPHANT',
    },
    {
      postCode: '7292',
      suburb: 'SELBOURNE',
    },
    {
      postCode: '7170',
      suburb: 'SEVEN MILE BEACH',
    },
    {
      postCode: '7215',
      suburb: 'SEYMOUR',
    },
    {
      postCode: '7030',
      suburb: 'SHANNON',
    },
    {
      postCode: '7307',
      suburb: 'SHEARWATER',
    },
    {
      postCode: '7306',
      suburb: 'SHEFFIELD',
    },
    {
      postCode: '7320',
      suburb: 'SHOREWELL PARK',
    },
    {
      postCode: '7270',
      suburb: 'SIDMOUTH',
    },
    {
      postCode: '7150',
      suburb: 'SIMPSONS BAY',
    },
    {
      postCode: '7321',
      suburb: 'SISTERS BEACH',
    },
    {
      postCode: '7325',
      suburb: 'SISTERS CREEK',
    },
    {
      postCode: '7186',
      suburb: 'SLOPING MAIN',
    },
    {
      postCode: '7330',
      suburb: 'SMITHTON',
    },
    {
      postCode: '7054',
      suburb: 'SNUG',
    },
    {
      postCode: '7322',
      suburb: 'SOMERSET',
    },
    {
      postCode: '7172',
      suburb: 'SORELL',
    },
    {
      postCode: '7140',
      suburb: 'SORELL CREEK',
    },
    {
      postCode: '7022',
      suburb: 'SOUTH ARM',
    },
    {
      postCode: '7150',
      suburb: 'SOUTH BRUNY',
    },
    {
      postCode: '7320',
      suburb: 'SOUTH BURNIE',
    },
    {
      postCode: '7330',
      suburb: 'SOUTH FOREST',
    },
    {
      postCode: '7004',
      suburb: 'SOUTH HOBART',
    },
    {
      postCode: '7249',
      suburb: 'SOUTH LAUNCESTON',
    },
    {
      postCode: '7264',
      suburb: 'SOUTH MOUNT CAMERON',
    },
    {
      postCode: '7315',
      suburb: 'SOUTH NIETTA',
    },
    {
      postCode: '7315',
      suburb: 'SOUTH PRESTON',
    },
    {
      postCode: '7316',
      suburb: 'SOUTH RIANA',
    },
    {
      postCode: '7310',
      suburb: 'SOUTH SPREYTON',
    },
    {
      postCode: '7260',
      suburb: 'SOUTH SPRINGFIELD',
    },
    {
      postCode: '7109',
      suburb: 'SOUTHPORT',
    },
    {
      postCode: '7109',
      suburb: 'SOUTHPORT LAGOON',
    },
    {
      postCode: '7315',
      suburb: 'SPALFORD',
    },
    {
      postCode: '7315',
      suburb: 'SPRENT',
    },
    {
      postCode: '7310',
      suburb: 'SPREYTON',
    },
    {
      postCode: '7190',
      suburb: 'SPRING BEACH',
    },
    {
      postCode: '7260',
      suburb: 'SPRINGFIELD',
    },
    {
      postCode: '7307',
      suburb: 'SQUEAKING POINT',
    },
    {
      postCode: '7216',
      suburb: 'ST HELENS',
    },
    {
      postCode: '7250',
      suburb: 'ST LEONARDS',
    },
    {
      postCode: '7215',
      suburb: 'ST MARYS',
    },
    {
      postCode: '7331',
      suburb: 'STANLEY',
    },
    {
      postCode: '7306',
      suburb: 'STAVERTON',
    },
    {
      postCode: '7030',
      suburb: 'STEPPES',
    },
    {
      postCode: '7216',
      suburb: 'STIEGLITZ',
    },
    {
      postCode: '7120',
      suburb: 'STONEHENGE',
    },
    {
      postCode: '7119',
      suburb: 'STONOR',
    },
    {
      postCode: '7252',
      suburb: 'STONY HEAD',
    },
    {
      postCode: '7310',
      suburb: 'STONY RISE',
    },
    {
      postCode: '7306',
      suburb: 'STOODLEY',
    },
    {
      postCode: '7184',
      suburb: 'STORMLEA',
    },
    {
      postCode: '7213',
      suburb: 'STORYS CREEK',
    },
    {
      postCode: '7321',
      suburb: 'STOWPORT',
    },
    {
      postCode: '7468',
      suburb: 'STRAHAN',
    },
    {
      postCode: '7109',
      suburb: 'STRATHBLANE',
    },
    {
      postCode: '7139',
      suburb: 'STRATHGORDON',
    },
    {
      postCode: '7140',
      suburb: 'STRICKLAND',
    },
    {
      postCode: '7255',
      suburb: 'STRZELECKI',
    },
    {
      postCode: '7140',
      suburb: 'STYX',
    },
    {
      postCode: '7316',
      suburb: 'SULPHUR CREEK',
    },
    {
      postCode: '7250',
      suburb: 'SUMMERHILL',
    },
    {
      postCode: '7305',
      suburb: 'SUNNYSIDE',
    },
    {
      postCode: '7116',
      suburb: 'SURGES BAY',
    },
    {
      postCode: '7256',
      suburb: 'SURPRISE BAY',
    },
    {
      postCode: '7116',
      suburb: 'SURVEYORS BAY',
    },
    {
      postCode: '7252',
      suburb: 'SWAN BAY',
    },
    {
      postCode: '7275',
      suburb: 'SWAN POINT',
    },
    {
      postCode: '7190',
      suburb: 'SWANSEA',
    },
    {
      postCode: '7120',
      suburb: 'SWANSTON',
    },
    {
      postCode: '7325',
      suburb: 'TABLE CAPE',
    },
    {
      postCode: '7325',
      suburb: 'TAKONE',
    },
    {
      postCode: '7263',
      suburb: 'TALAWA',
    },
    {
      postCode: '7180',
      suburb: 'TARANNA',
    },
    {
      postCode: '7259',
      suburb: 'TARGA',
    },
    {
      postCode: '7310',
      suburb: 'TARLETON',
    },
    {
      postCode: '7053',
      suburb: 'TAROONA',
    },
    {
      postCode: '7140',
      suburb: 'TARRALEAH',
    },
    {
      postCode: '7259',
      suburb: 'TAYENE',
    },
    {
      postCode: '7017',
      suburb: 'TEA TREE',
    },
    {
      postCode: '7264',
      suburb: 'TELITA',
    },
    {
      postCode: '7330',
      suburb: 'TEMMA',
    },
    {
      postCode: '7321',
      suburb: 'TEWKESBURY',
    },
    {
      postCode: '7216',
      suburb: 'THE GARDENS',
    },
    {
      postCode: '7307',
      suburb: 'THIRLSTANE',
    },
    {
      postCode: '7120',
      suburb: 'TIBERIAS',
    },
    {
      postCode: '7054',
      suburb: 'TINDERBOX',
    },
    {
      postCode: '7030',
      suburb: 'TODS CORNER',
    },
    {
      postCode: '7330',
      suburb: 'TOGARI',
    },
    {
      postCode: '7301',
      suburb: 'TOIBERRY',
    },
    {
      postCode: '7007',
      suburb: 'TOLMANS HILL',
    },
    {
      postCode: '7262',
      suburb: 'TOMAHAWK',
    },
    {
      postCode: '7260',
      suburb: 'TONGANAH',
    },
    {
      postCode: '7209',
      suburb: 'TOOMS LAKE',
    },
    {
      postCode: '7018',
      suburb: 'TRANMERE',
    },
    {
      postCode: '7250',
      suburb: 'TRAVELLERS REST',
    },
    {
      postCode: '7263',
      suburb: 'TRENAH',
    },
    {
      postCode: '7250',
      suburb: 'TREVALLYN',
    },
    {
      postCode: '7190',
      suburb: 'TRIABUNNA',
    },
    {
      postCode: '7469',
      suburb: 'TRIAL HARBOUR',
    },
    {
      postCode: '7330',
      suburb: 'TROWUTTA',
    },
    {
      postCode: '7310',
      suburb: 'TUGRAH',
    },
    {
      postCode: '7260',
      suburb: 'TULENDEENA',
    },
    {
      postCode: '7321',
      suburb: 'TULLAH',
    },
    {
      postCode: '7120',
      suburb: 'TUNBRIDGE',
    },
    {
      postCode: '7120',
      suburb: 'TUNNACK',
    },
    {
      postCode: '7254',
      suburb: 'TUNNEL',
    },
    {
      postCode: '7315',
      suburb: 'TURNERS BEACH',
    },
    {
      postCode: '7267',
      suburb: 'TURNERS MARSH',
    },
    {
      postCode: '7140',
      suburb: 'TYENNA',
    },
    {
      postCode: '7315',
      suburb: 'ULVERSTONE',
    },
    {
      postCode: '7268',
      suburb: 'UNDERWOOD',
    },
    {
      postCode: '7212',
      suburb: 'UPPER BLESSINGTON',
    },
    {
      postCode: '7320',
      suburb: 'UPPER BURNIE',
    },
    {
      postCode: '7315',
      suburb: 'UPPER CASTRA',
    },
    {
      postCode: '7214',
      suburb: 'UPPER ESK',
    },
    {
      postCode: '7321',
      suburb: 'UPPER NATONE',
    },
    {
      postCode: '7215',
      suburb: 'UPPER SCAMANDER',
    },
    {
      postCode: '7321',
      suburb: 'UPPER STOWPORT',
    },
    {
      postCode: '7150',
      suburb: 'UPPER WOODSTOCK',
    },
    {
      postCode: '7140',
      suburb: 'UXBRIDGE',
    },
    {
      postCode: '7112',
      suburb: 'VERONA SANDS',
    },
    {
      postCode: '7140',
      suburb: 'VICTORIA VALLEY',
    },
    {
      postCode: '7030',
      suburb: 'WADDAMANA',
    },
    {
      postCode: '7304',
      suburb: 'WALLS OF JERUSALEM',
    },
    {
      postCode: '7321',
      suburb: 'WARATAH',
    },
    {
      postCode: '7018',
      suburb: 'WARRANE',
    },
    {
      postCode: '7261',
      suburb: 'WARRENTINNA',
    },
    {
      postCode: '7262',
      suburb: 'WATERHOUSE',
    },
    {
      postCode: '7109',
      suburb: 'WATERLOO',
    },
    {
      postCode: '7109',
      suburb: 'WATTLE GROVE',
    },
    {
      postCode: '7172',
      suburb: 'WATTLE HILL',
    },
    {
      postCode: '7250',
      suburb: 'WAVERLEY',
    },
    {
      postCode: '7140',
      suburb: 'WAYATINAH',
    },
    {
      postCode: '7304',
      suburb: 'WEEGENA',
    },
    {
      postCode: '7304',
      suburb: 'WEETAH',
    },
    {
      postCode: '7264',
      suburb: 'WELDBOROUGH',
    },
    {
      postCode: '7054',
      suburb: 'WELLINGTON PARK',
    },
    {
      postCode: '7307',
      suburb: 'WESLEY VALE',
    },
    {
      postCode: '7000',
      suburb: 'WEST HOBART',
    },
    {
      postCode: '7306',
      suburb: 'WEST KENTISH',
    },
    {
      postCode: '7250',
      suburb: 'WEST LAUNCESTON',
    },
    {
      postCode: '7330',
      suburb: 'WEST MONTAGU',
    },
    {
      postCode: '7009',
      suburb: 'WEST MOONAH',
    },
    {
      postCode: '7321',
      suburb: 'WEST MOOREVILLE',
    },
    {
      postCode: '7316',
      suburb: 'WEST PINE',
    },
    {
      postCode: '7321',
      suburb: 'WEST RIDGLEY',
    },
    {
      postCode: '7260',
      suburb: 'WEST SCOTTSDALE',
    },
    {
      postCode: '7325',
      suburb: 'WEST TAKONE',
    },
    {
      postCode: '7315',
      suburb: 'WEST ULVERSTONE',
    },
    {
      postCode: '7303',
      suburb: 'WESTBURY',
    },
    {
      postCode: '7304',
      suburb: 'WESTERN CREEK',
    },
    {
      postCode: '7212',
      suburb: 'WESTERN JUNCTION',
    },
    {
      postCode: '7140',
      suburb: 'WESTERWAY',
    },
    {
      postCode: '7292',
      suburb: 'WESTWOOD',
    },
    {
      postCode: '7252',
      suburb: 'WEYMOUTH',
    },
    {
      postCode: '7184',
      suburb: 'WHITE BEACH',
    },
    {
      postCode: '7258',
      suburb: 'WHITE HILLS',
    },
    {
      postCode: '7120',
      suburb: 'WHITEFOORD',
    },
    {
      postCode: '7255',
      suburb: 'WHITEMARK',
    },
    {
      postCode: '7303',
      suburb: 'WHITEMORE',
    },
    {
      postCode: '7256',
      suburb: 'WICKHAM',
    },
    {
      postCode: '7030',
      suburb: 'WILBURVILLE',
    },
    {
      postCode: '7310',
      suburb: 'WILMOT',
    },
    {
      postCode: '7321',
      suburb: 'WILTSHIRE',
    },
    {
      postCode: '7252',
      suburb: 'WINDERMERE',
    },
    {
      postCode: '7255',
      suburb: 'WINGAROO',
    },
    {
      postCode: '7275',
      suburb: 'WINKLEIGH',
    },
    {
      postCode: '7265',
      suburb: 'WINNALEAH',
    },
    {
      postCode: '7320',
      suburb: 'WIVENHOE',
    },
    {
      postCode: '7162',
      suburb: 'WOODBRIDGE',
    },
    {
      postCode: '7120',
      suburb: 'WOODBURY',
    },
    {
      postCode: '7120',
      suburb: 'WOODSDALE',
    },
    {
      postCode: '7109',
      suburb: 'WOODSTOCK',
    },
    {
      postCode: '7330',
      suburb: 'WOOLNORTH',
    },
    {
      postCode: '7254',
      suburb: 'WYENA',
    },
    {
      postCode: '7325',
      suburb: 'WYNYARD',
    },
    {
      postCode: '7256',
      suburb: 'YAMBACOONA',
    },
    {
      postCode: '7256',
      suburb: 'YARRA CREEK',
    },
    {
      postCode: '7325',
      suburb: 'YOLLA',
    },
    {
      postCode: '7120',
      suburb: 'YORK PLAINS',
    },
    {
      postCode: '7270',
      suburb: 'YORK TOWN',
    },
    {
      postCode: '7249',
      suburb: 'YOUNGTOWN',
    },
    {
      postCode: '7469',
      suburb: 'ZEEHAN',
    },
  ];
  constructor() {}
}
