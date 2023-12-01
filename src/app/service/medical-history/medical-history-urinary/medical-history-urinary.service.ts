import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryUrinaryService {
  public title: string = 'label.title.urinarysystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Urinary',
      name: 'label.title.frequenturination',
      description: 'Frequent Urination',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Urinary',
      name: 'label.title.painfulurination',
      description: 'Painful Urination',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Urinary',
      name: 'label.title.bloodinurine',
      description: 'Blood in Urine',
      cautionLevel: 7,
    },
    {
      type: 'Symptom',
      system: 'Urinary',
      name: 'label.title.urineleakage',
      description: 'Urine Leakage',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Urinary',
      name: 'label.title.bladderdiscomfort',
      description: 'Bladder Discomfort',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Urinary',
      name: 'label.title.cloudyurine',
      description: 'Cloudy Urine',
      cautionLevel: 4,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.urinarytractinfection',
      description: 'Urinary Tract Infection',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.kidneystones',
      description: 'Kidney Stones',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.bladderinfection',
      description: 'Bladder Infection',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.chronickidneydisease',
      description: 'Chronic Kidney Disease',
      cautionLevel: 8,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.glomerulonephritis',
      description: 'Glomerulonephritis',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.interstitialcystitis',
      description: 'Interstitial Cystitis',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.overactivebladder',
      description: 'Overactive Bladder',
      cautionLevel: 4,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.urinaryincontinence',
      description: 'Urinary Incontinence',
      cautionLevel: 4,
    },
    {
      type: 'Disease',
      system: 'Urinary',
      name: 'label.title.bladdercancer',
      description: 'Bladder Cancer',
      cautionLevel: 9,
    },
  ];
  constructor() {}
}
