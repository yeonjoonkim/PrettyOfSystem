import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryMuscularService {
  public title: string = 'label.title.muscularsystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Muscular',
      name: 'label.title.musclecramps',
      description: 'Muscle Cramps',
      cautionLevel: 2,
    },
    {
      type: 'Symptom',
      system: 'Muscular',
      name: 'label.title.musclefatigue',
      description: 'Muscle Fatigue',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Muscular',
      name: 'label.title.delayedonsetmusclesoreness',
      description: 'Delayed Onset Muscle Soreness',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Muscular',
      name: 'label.title.musclestrain',
      description: 'Muscle Strain',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Muscular',
      name: 'label.title.tightmuscles',
      description: 'Tight Muscles',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Muscular',
      name: 'label.title.muscletwitching',
      description: 'Muscle Twitching',
      cautionLevel: 2,
    },
    {
      type: 'Symptom',
      system: 'Muscular',
      name: 'label.title.limitedrangeofmotion',
      description: 'Limited Range of Motion',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.musculardystrophy',
      description: 'Muscular Dystrophy',
      cautionLevel: 8,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.myastheniagravis',
      description: 'Myasthenia Gravis',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.fibromyalgia',
      description: 'Fibromyalgia',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.rhabdomyolysis',
      description: 'Rhabdomyolysis',
      cautionLevel: 10,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.muscleatrophy',
      description: 'Muscle Atrophy',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.tendinitis',
      description: 'Tendinitis',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.musclecontracture',
      description: 'Muscle Contracture',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.compartmentsyndrome',
      description: 'Compartment Syndrome',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Muscular',
      name: 'label.title.chronicmusclepainsyndrome',
      description: 'Chronic Muscle Pain Syndrome',
      cautionLevel: 5,
    },
  ];
  constructor() {}
}
