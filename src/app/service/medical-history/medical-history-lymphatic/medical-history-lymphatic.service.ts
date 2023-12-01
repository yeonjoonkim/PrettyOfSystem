import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryLymphaticService {
  public title: string = 'label.title.lymphaticsystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Lymphatic',
      name: 'label.title.swollenlymphnodes',
      description: 'Swollen Lymph Nodes',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Lymphatic',
      name: 'label.title.lymphedema',
      description: 'Lymphedema',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Lymphatic',
      name: 'label.title.frequentinfections',
      description: 'Frequent Infections',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Lymphatic',
      name: 'label.title.unexplainedfatigue',
      description: 'Unexplained Fatigue',
      cautionLevel: 3,
    },
    { type: 'Symptom', system: 'Lymphatic', name: 'label.title.fever', description: 'Fever', cautionLevel: 4 },
    {
      type: 'Symptom',
      system: 'Lymphatic',
      name: 'label.title.itchingskin',
      description: 'Itching Skin',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Lymphatic',
      name: 'label.title.chroniccough',
      description: 'Chronic Cough',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Lymphatic',
      name: 'label.title.lymphoma',
      description: 'Lymphoma',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Lymphatic',
      name: 'label.title.leukemia',
      description: 'Leukemia',
      cautionLevel: 10,
    },
    {
      type: 'Disease',
      system: 'Lymphatic',
      name: 'label.title.lymphadenitis',
      description: 'Lymphadenitis',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Lymphatic',
      name: 'label.title.lymphangitis',
      description: 'Lymphangitis',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Lymphatic',
      name: 'label.title.lymphocyticchoriomeningitis',
      description: 'Lymphocytic Choriomeningitis',
      cautionLevel: 8,
    },
  ];
  constructor() {}
}
