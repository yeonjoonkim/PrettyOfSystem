import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryRespiratoryService {
  public title: string = 'label.title.respiratorysystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.shortnessofbreath',
      description: 'Shortness of Breath',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.persistentcough',
      description: 'Persistent Cough',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.wheezing',
      description: 'Wheezing',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.chesttightness',
      description: 'Chest Tightness',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.frequentrespiratoryinfections',
      description: 'Frequent Respiratory Infections',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.rapidbreathing',
      description: 'Rapid Breathing',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.difficultytakingdeepbreaths',
      description: 'Difficulty Taking Deep Breaths',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.chronicbronchitissymptoms',
      description: 'Chronic Bronchitis Symptoms',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.bloodinsputum',
      description: 'Blood in Sputum',
      cautionLevel: 8,
    },
    {
      type: 'Symptom',
      system: 'Respiratory',
      name: 'label.title.painfulbreathing',
      description: 'Painful Breathing',
      cautionLevel: 7,
    },
    { type: 'Disease', system: 'Respiratory', name: 'label.title.asthma', description: 'Asthma', cautionLevel: 6 },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.chronicobstructivepulmonarydisease',
      description: 'Chronic Obstructive Pulmonary Disease',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.pneumonia',
      description: 'Pneumonia',
      cautionLevel: 8,
    },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.tuberculosis',
      description: 'Tuberculosis',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.lungcancer',
      description: 'Lung Cancer',
      cautionLevel: 10,
    },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.pulmonaryembolism',
      description: 'Pulmonary Embolism',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.bronchitis',
      description: 'Bronchitis',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.pulmonaryfibrosis',
      description: 'Pulmonary Fibrosis',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.pleuraleffusion',
      description: 'Pleural Effusion',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Respiratory',
      name: 'label.title.sleepapnea',
      description: 'Sleep Apnea',
      cautionLevel: 5,
    },
  ];
  constructor() {}
}
