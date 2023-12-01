import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryNervousService {
  public title: string = 'label.title.nervoussystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Nervous',
      name: 'label.title.headaches',
      description: 'Headaches',
      cautionLevel: 3,
    },
    { type: 'Symptom', system: 'Nervous', name: 'label.title.numbness', description: 'Numbness', cautionLevel: 5 },
    {
      type: 'Symptom',
      system: 'Nervous',
      name: 'label.title.tinglingsensation',
      description: 'Tingling Sensation',
      cautionLevel: 4,
    },
    { type: 'Symptom', system: 'Nervous', name: 'label.title.tremors', description: 'Tremors', cautionLevel: 4 },
    { type: 'Symptom', system: 'Nervous', name: 'label.title.seizures', description: 'Seizures', cautionLevel: 8 },
    {
      type: 'Symptom',
      system: 'Nervous',
      name: 'label.title.memoryloss',
      description: 'Memory Loss',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Nervous',
      name: 'label.title.balanceissues',
      description: 'Balance Issues',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Nervous',
      name: 'label.title.coordinationproblems',
      description: 'Coordination Problems',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Nervous',
      name: 'label.title.multiplesclerosis',
      description: 'Multiple Sclerosis',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Nervous',
      name: 'label.title.parkinsondisease',
      description: 'Parkinson Disease',
      cautionLevel: 6,
    },
    { type: 'Disease', system: 'Nervous', name: 'label.title.epilepsy', description: 'Epilepsy', cautionLevel: 8 },
    {
      type: 'Disease',
      system: 'Nervous',
      name: 'label.title.alzheimerdisease',
      description: 'Alzheimer Disease',
      cautionLevel: 7,
    },
    { type: 'Disease', system: 'Nervous', name: 'label.title.migraine', description: 'Migraine', cautionLevel: 4 },
    {
      type: 'Disease',
      system: 'Nervous',
      name: 'label.title.neuropathy',
      description: 'Neuropathy',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Nervous',
      name: 'label.title.meningitis',
      description: 'Meningitis',
      cautionLevel: 10,
    },
    {
      type: 'Disease',
      system: 'Nervous',
      name: 'label.title.cerebralpalsy',
      description: 'Cerebral Palsy',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Nervous',
      name: 'label.title.bellspalsy',
      description: 'Bells Palsy',
      cautionLevel: 5,
    },
  ];
  constructor() {}
}
