import { Injectable } from '@angular/core';
import { PostCodeItemType } from 'src/app/interface/global/global.interface';

@Injectable({
  providedIn: 'root',
})
export class ActService {
  public data: PostCodeItemType[] = [
    {
      postCode: '2601',
      suburb: 'ACTON',
    },
    {
      postCode: '2602',
      suburb: 'AINSLIE',
    },
    {
      postCode: '2914',
      suburb: 'AMAROO',
    },
    {
      postCode: '2614',
      suburb: 'ARANDA',
    },
    {
      postCode: '200',
      suburb: 'AUSTRALIAN NATIONAL UNIVERSITY',
    },
    {
      postCode: '2906',
      suburb: 'BANKS',
    },
    {
      postCode: '2600',
      suburb: 'BARTON',
    },
    {
      postCode: '2620',
      suburb: 'BEARD',
    },
    {
      postCode: '2616',
      suburb: 'BELCONNEN',
    },
    {
      postCode: '2617',
      suburb: 'BELCONNEN',
    },
    {
      postCode: '2617',
      suburb: 'BELCONNEN DC',
    },
    {
      postCode: '2914',
      suburb: 'BONNER',
    },
    {
      postCode: '2905',
      suburb: 'BONYTHON',
    },
    {
      postCode: '2612',
      suburb: 'BRADDON',
    },
    {
      postCode: '2617',
      suburb: 'BRUCE',
    },
    {
      postCode: '2905',
      suburb: 'CALWELL',
    },
    {
      postCode: '2612',
      suburb: 'CAMPBELL',
    },
    {
      postCode: '2600',
      suburb: 'CANBERRA',
    },
    {
      postCode: '2601',
      suburb: 'CANBERRA',
    },
    {
      postCode: '2609',
      suburb: 'CANBERRA AIRPORT',
    },
    {
      postCode: '2610',
      suburb: 'CANBERRA BC',
    },
    {
      postCode: '2610',
      suburb: 'CANBERRA MC',
    },
    {
      postCode: '2600',
      suburb: 'CAPITAL HILL',
    },
    {
      postCode: '2913',
      suburb: 'CASEY',
    },
    {
      postCode: '2604',
      suburb: 'CAUSEWAY',
    },
    {
      postCode: '2611',
      suburb: 'CHAPMAN',
    },
    {
      postCode: '2615',
      suburb: 'CHARNWOOD',
    },
    {
      postCode: '2606',
      suburb: 'CHIFLEY',
    },
    {
      postCode: '2905',
      suburb: 'CHISHOLM',
    },
    {
      postCode: '2601',
      suburb: 'CITY',
    },
    {
      postCode: '2608',
      suburb: 'CIVIC SQUARE',
    },
    {
      postCode: '2906',
      suburb: 'CONDER',
    },
    {
      postCode: '2614',
      suburb: 'COOK',
    },
    {
      postCode: '2611',
      suburb: 'COOMBS',
    },
    {
      postCode: '2611',
      suburb: 'COREE',
    },
    {
      postCode: '2911',
      suburb: 'CRACE',
    },
    {
      postCode: '2605',
      suburb: 'CURTIN',
    },
    {
      postCode: '2600',
      suburb: 'DEAKIN',
    },
    {
      postCode: '2600',
      suburb: 'DEAKIN WEST',
    },
    {
      postCode: '2611',
      suburb: 'DENMAN PROSPECT',
    },
    {
      postCode: '2602',
      suburb: 'DICKSON',
    },
    {
      postCode: '2602',
      suburb: 'DOWNER',
    },
    {
      postCode: '2611',
      suburb: 'DUFFY',
    },
    {
      postCode: '2615',
      suburb: 'DUNLOP',
    },
    {
      postCode: '2903',
      suburb: 'ERINDALE CENTRE',
    },
    {
      postCode: '2617',
      suburb: 'EVATT',
    },
    {
      postCode: '2904',
      suburb: 'FADDEN',
    },
    {
      postCode: '2607',
      suburb: 'FARRER',
    },
    {
      postCode: '2611',
      suburb: 'FISHER',
    },
    {
      postCode: '2615',
      suburb: 'FLOREY',
    },
    {
      postCode: '2615',
      suburb: 'FLYNN',
    },
    {
      postCode: '2914',
      suburb: 'FORDE',
    },
    {
      postCode: '2603',
      suburb: 'FORREST',
    },
    {
      postCode: '2913',
      suburb: 'FRANKLIN',
    },
    {
      postCode: '2615',
      suburb: 'FRASER',
    },
    {
      postCode: '2609',
      suburb: 'FYSHWICK',
    },
    {
      postCode: '2605',
      suburb: 'GARRAN',
    },
    {
      postCode: '2905',
      suburb: 'GILMORE',
    },
    {
      postCode: '2617',
      suburb: 'GIRALANG',
    },
    {
      postCode: '2906',
      suburb: 'GORDON',
    },
    {
      postCode: '2904',
      suburb: 'GOWRIE',
    },
    {
      postCode: '2900',
      suburb: 'GREENWAY',
    },
    {
      postCode: '2603',
      suburb: 'GRIFFITH',
    },
    {
      postCode: '2912',
      suburb: 'GUNGAHLIN',
    },
    {
      postCode: '2602',
      suburb: 'HACKETT',
    },
    {
      postCode: '2618',
      suburb: 'HALL',
    },
    {
      postCode: '2600',
      suburb: 'HARMAN',
    },
    {
      postCode: '2914',
      suburb: 'HARRISON',
    },
    {
      postCode: '2614',
      suburb: 'HAWKER',
    },
    {
      postCode: '2615',
      suburb: 'HIGGINS',
    },
    {
      postCode: '2540',
      suburb: 'HMAS CRESWELL',
    },
    {
      postCode: '2600',
      suburb: 'HMAS HARMAN',
    },
    {
      postCode: '2611',
      suburb: 'HOLDER',
    },
    {
      postCode: '2615',
      suburb: 'HOLT',
    },
    {
      postCode: '2605',
      suburb: 'HUGHES',
    },
    {
      postCode: '2620',
      suburb: 'HUME',
    },
    {
      postCode: '2607',
      suburb: 'ISAACS',
    },
    {
      postCode: '2905',
      suburb: 'ISABELLA PLAINS',
    },
    {
      postCode: '2914',
      suburb: 'JACKA',
    },
    {
      postCode: '2614',
      suburb: 'JAMISON CENTRE',
    },
    {
      postCode: '2540',
      suburb: 'JERVIS BAY',
    },
    {
      postCode: '2617',
      suburb: 'KALEEN',
    },
    {
      postCode: '2902',
      suburb: 'KAMBAH',
    },
    {
      postCode: '2902',
      suburb: 'KAMBAH VILLAGE',
    },
    {
      postCode: '2911',
      suburb: 'KENNY',
    },
    {
      postCode: '2604',
      suburb: 'KINGSTON',
    },
    {
      postCode: '2615',
      suburb: 'KIPPAX',
    },
    {
      postCode: '2620',
      suburb: 'KOWEN',
    },
    {
      postCode: '2615',
      suburb: 'LATHAM',
    },
    {
      postCode: '2617',
      suburb: 'LAWSON',
    },
    {
      postCode: '2602',
      suburb: 'LYNEHAM',
    },
    {
      postCode: '2606',
      suburb: 'LYONS',
    },
    {
      postCode: '2904',
      suburb: 'MACARTHUR',
    },
    {
      postCode: '2615',
      suburb: 'MACGREGOR',
    },
    {
      postCode: '2615',
      suburb: 'MACNAMARA',
    },
    {
      postCode: '2614',
      suburb: 'MACQUARIE',
    },
    {
      postCode: '2609',
      suburb: 'MAJURA',
    },
    {
      postCode: '2603',
      suburb: 'MANUKA',
    },
    {
      postCode: '2607',
      suburb: 'MAWSON',
    },
    {
      postCode: '2617',
      suburb: 'MCKELLAR',
    },
    {
      postCode: '2615',
      suburb: 'MELBA',
    },
    {
      postCode: '2911',
      suburb: 'MITCHELL',
    },
    {
      postCode: '2611',
      suburb: 'MOLONGLO',
    },
    {
      postCode: '2904',
      suburb: 'MONASH',
    },
    {
      postCode: '2914',
      suburb: 'MONCRIEFF',
    },
    {
      postCode: '2604',
      suburb: 'NARRABUNDAH',
    },
    {
      postCode: '2913',
      suburb: 'NGUNNAWAL',
    },
    {
      postCode: '2913',
      suburb: 'NICHOLLS',
    },
    {
      postCode: '2602',
      suburb: "O'CONNOR",
    },
    {
      postCode: '2606',
      suburb: "O'MALLEY",
    },
    {
      postCode: '2620',
      suburb: 'OAKS ESTATE',
    },
    {
      postCode: '2903',
      suburb: 'OXLEY',
    },
    {
      postCode: '2620',
      suburb: 'PADDYS RIVER',
    },
    {
      postCode: '2614',
      suburb: 'PAGE',
    },
    {
      postCode: '2913',
      suburb: 'PALMERSTON',
    },
    {
      postCode: '2600',
      suburb: 'PARKES',
    },
    {
      postCode: '2607',
      suburb: 'PEARCE',
    },
    {
      postCode: '2606',
      suburb: 'PHILLIP',
    },
    {
      postCode: '2609',
      suburb: 'PIALLIGO',
    },
    {
      postCode: '2603',
      suburb: 'RED HILL',
    },
    {
      postCode: '2612',
      suburb: 'REID',
    },
    {
      postCode: '2905',
      suburb: 'RICHARDSON',
    },
    {
      postCode: '2611',
      suburb: 'RIVETT',
    },
    {
      postCode: '2600',
      suburb: 'RUSSELL',
    },
    {
      postCode: '2614',
      suburb: 'SCULLIN',
    },
    {
      postCode: '2615',
      suburb: 'SPENCE',
    },
    {
      postCode: '2611',
      suburb: 'STIRLING',
    },
    {
      postCode: '2615',
      suburb: 'STRATHNAIRN',
    },
    {
      postCode: '2611',
      suburb: 'STROMLO',
    },
    {
      postCode: '2609',
      suburb: 'SYMONSTON',
    },
    {
      postCode: '2913',
      suburb: 'TAYLOR',
    },
    {
      postCode: '2620',
      suburb: 'THARWA',
    },
    {
      postCode: '2905',
      suburb: 'THEODORE',
    },
    {
      postCode: '2914',
      suburb: 'THROSBY',
    },
    {
      postCode: '2607',
      suburb: 'TORRENS',
    },
    {
      postCode: '2901',
      suburb: 'TUGGERANONG DC',
    },
    {
      postCode: '2612',
      suburb: 'TURNER',
    },
    {
      postCode: '2617',
      suburb: 'UNIVERSITY OF CANBERRA',
    },
    {
      postCode: '2611',
      suburb: 'URIARRA VILLAGE',
    },
    {
      postCode: '2903',
      suburb: 'WANNIASSA',
    },
    {
      postCode: '2611',
      suburb: 'WARAMANGA',
    },
    {
      postCode: '2602',
      suburb: 'WATSON',
    },
    {
      postCode: '2614',
      suburb: 'WEETANGERA',
    },
    {
      postCode: '2611',
      suburb: 'WESTON',
    },
    {
      postCode: '2611',
      suburb: 'WESTON CREEK',
    },
    {
      postCode: '2611',
      suburb: 'WHITLAM',
    },
    {
      postCode: '2620',
      suburb: 'WILLIAMSDALE',
    },
    {
      postCode: '2606',
      suburb: 'WODEN',
    },
    {
      postCode: '2540',
      suburb: 'WRECK BAY',
    },
    {
      postCode: '2611',
      suburb: 'WRIGHT',
    },
    {
      postCode: '2600',
      suburb: 'YARRALUMLA',
    },
  ];
  constructor() {}
}
