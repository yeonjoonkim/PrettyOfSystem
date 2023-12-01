import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryEndocrineService {
  public title: string = 'label.title.endocrinesystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Endocrine',
      name: 'label.title.excessivefatigue',
      description: 'Excessive Fatigue',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Endocrine',
      name: 'label.title.unintendedweightlossorgain',
      description: 'Unintended Weight Loss or Gain',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Endocrine',
      name: 'label.title.increasedthirst',
      description: 'Increased Thirst',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Endocrine',
      name: 'label.title.heatintolerance',
      description: 'Heat Intolerance',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Endocrine',
      name: 'label.title.coldintolerance',
      description: 'Cold Intolerance',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Endocrine',
      name: 'label.title.muscleweakness',
      description: 'Muscle Weakness',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Endocrine',
      name: 'label.title.moodswings',
      description: 'Mood Swings',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Endocrine',
      name: 'label.title.blurredvision',
      description: 'Blurred Vision',
      cautionLevel: 4,
    },
    {
      type: 'Disease',
      system: 'Endocrine',
      name: 'label.title.diabetesmellitus',
      description: 'Diabetes Mellitus',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Endocrine',
      name: 'label.title.hypothyroidism',
      description: 'Hypothyroidism',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Endocrine',
      name: 'label.title.hyperthyroidism',
      description: 'Hyperthyroidism',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Endocrine',
      name: 'label.title.acromegaly',
      description: 'Acromegaly',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Endocrine',
      name: 'label.title.hashimotosthyroiditis',
      description: "Hashimoto's Thyroiditis",
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Endocrine',
      name: 'label.title.pituitarytumors',
      description: 'Pituitary Tumors',
      cautionLevel: 8,
    },
  ];
  constructor() {}
}
