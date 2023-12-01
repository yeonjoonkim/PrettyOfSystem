import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistorySkeletalService {
  public title: string = 'label.title.skeletalsystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Skeletal',
      name: 'label.title.mildmuscletension',
      description: 'Mild Muscle Tension',
      cautionLevel: 2,
    },
    {
      type: 'Symptom',
      system: 'Skeletal',
      name: 'label.title.localizedsoreness',
      description: 'Localized Soreness',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Skeletal',
      name: 'label.title.chronicjointpain',
      description: 'Chronic Joint Pain',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Skeletal',
      name: 'label.title.acutelowerbackpain',
      description: 'Acute Lower Back Pain',
      cautionLevel: 7,
    },
    {
      type: 'Symptom',
      system: 'Skeletal',
      name: 'label.title.neckstiffness',
      description: 'Neck Stiffness',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Skeletal',
      name: 'label.title.posturalimbalances',
      description: 'Postural Imbalances',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Skeletal',
      name: 'label.title.repetitivestraininjury',
      description: 'Repetitive Strain Injury',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Skeletal',
      name: 'label.title.sciaticasymptoms',
      description: 'Sciatica Symptoms',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Skeletal',
      name: 'label.title.osteoarthritis',
      description: 'Osteoarthritis',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Skeletal',
      name: 'label.title.rheumatoidarthritis',
      description: 'Rheumatoid Arthritis',
      cautionLevel: 8,
    },
    {
      type: 'Disease',
      system: 'Skeletal',
      name: 'label.title.herniateddisc',
      description: 'Herniated Disc',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Skeletal',
      name: 'label.title.spondylosis',
      description: 'Spondylosis',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Skeletal',
      name: 'label.title.sciatica',
      description: 'Sciatica',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Skeletal',
      name: 'label.title.scoliosis',
      description: 'Scoliosis',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Skeletal',
      name: 'label.title.spinalstenosis',
      description: 'Spinal Stenosis',
      cautionLevel: 8,
    },
  ];
  constructor() {}
}
