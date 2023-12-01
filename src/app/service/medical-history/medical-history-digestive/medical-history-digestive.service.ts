import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryDigestiveService {
  public title: string = 'label.title.gastrointestinalsystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.abdominalpain',
      description: 'Abdominal Pain',
      cautionLevel: 5,
    },
    { type: 'Symptom', system: 'Digestive', name: 'label.title.nausea', description: 'Nausea', cautionLevel: 3 },
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.heartburn',
      description: 'Heartburn',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.bloating',
      description: 'Bloating',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.diarrhea',
      description: 'Diarrhea',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.constipation',
      description: 'Constipation',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.indigestion',
      description: 'Indigestion',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.vomiting',
      description: 'Vomiting',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.lossofappetite',
      description: 'Loss of Appetite',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Digestive',
      name: 'label.title.rectalbleeding',
      description: 'Rectal Bleeding',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.gastroesophagealrefluxdisease',
      description: 'Gastroesophageal Reflux Disease',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.irritablebowelsyndrome',
      description: 'Irritable Bowel Syndrome',
      cautionLevel: 4,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.crohnsdisease',
      description: 'Crohns Disease',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.ulcerativecolitis',
      description: 'Ulcerative Colitis',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.pepticulcers',
      description: 'Peptic Ulcers',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.celiacdisease',
      description: 'Celiac Disease',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.gallstones',
      description: 'Gallstones',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.hepatitis',
      description: 'Hepatitis',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Digestive',
      name: 'label.title.pancreatitis',
      description: 'Pancreatitis',
      cautionLevel: 7,
    },
  ];
  constructor() {}
}
