import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryIntegumentaryService {
  public title: string = 'label.title.integumentarysystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Integumentary',
      name: 'label.title.dryskin',
      description: 'Dry Skin',
      cautionLevel: 2,
    },
    { type: 'Symptom', system: 'Integumentary', name: 'label.title.acne', description: 'Acne', cautionLevel: 3 },
    {
      type: 'Symptom',
      system: 'Integumentary',
      name: 'label.title.sunburn',
      description: 'Sunburn',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Integumentary',
      name: 'label.title.contactdermatitis',
      description: 'Contact Dermatitis',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Integumentary',
      name: 'label.title.eczema',
      description: 'Eczema',
      cautionLevel: 4,
    },
    { type: 'Symptom', system: 'Integumentary', name: 'label.title.hives', description: 'Hives', cautionLevel: 3 },
    {
      type: 'Symptom',
      system: 'Integumentary',
      name: 'label.title.psoriasis',
      description: 'Psoriasis',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Integumentary',
      name: 'label.title.skinulcers',
      description: 'Skin Ulcers',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Integumentary',
      name: 'label.title.fungalinfection',
      description: 'Fungal Infection',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Integumentary',
      name: 'label.title.basalcellcarcinoma',
      description: 'Basal Cell Carcinoma',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Integumentary',
      name: 'label.title.squamouscellcarcinoma',
      description: 'Squamous Cell Carcinoma',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Integumentary',
      name: 'label.title.lupusskinlesions',
      description: 'Lupus Skin Lesions',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Integumentary',
      name: 'label.title.vitiligo',
      description: 'Vitiligo',
      cautionLevel: 3,
    },
    {
      type: 'Disease',
      system: 'Integumentary',
      name: 'label.title.shingles',
      description: 'Shingles',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Integumentary',
      name: 'label.title.scabies',
      description: 'Scabies',
      cautionLevel: 5,
    },
  ];
  constructor() {}
}
