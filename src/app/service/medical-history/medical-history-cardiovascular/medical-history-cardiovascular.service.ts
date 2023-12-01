import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryCardiovascularService {
  public title: string = 'label.title.cardiovascularsystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.chestpain',
      description: 'Chest Pain',
      cautionLevel: 8,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.irregularheartbeat',
      description: 'Irregular Heartbeat',
      cautionLevel: 7,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.swollenanklesorfeet',
      description: 'Swollen Ankles or Feet',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.fatigue',
      description: 'Fatigue',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.dizziness',
      description: 'Dizziness',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.palpitations',
      description: 'Palpitations',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.coldhandsorfeet',
      description: 'Cold Hands or Feet',
      cautionLevel: 3,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.faintingspells',
      description: 'Fainting Spells',
      cautionLevel: 8,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.highbloodpressure',
      description: 'High Blood Pressure',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Cardiovascular',
      name: 'label.title.lowbloodpressure',
      description: 'Low Blood Pressure',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.coronaryarterydisease',
      description: 'Coronary Artery Disease',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.heartfailure',
      description: 'Heart Failure',
      cautionLevel: 10,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.arrhythmia',
      description: 'Arrhythmia',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.valvularheartdisease',
      description: 'Valvular Heart Disease',
      cautionLevel: 8,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.cardiomyopathy',
      description: 'Cardiomyopathy',
      cautionLevel: 8,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.peripheralarterydisease',
      description: 'Peripheral Artery Disease',
      cautionLevel: 7,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.stroke',
      description: 'Stroke',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.aorticaneurysm',
      description: 'Aortic Aneurysm',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Cardiovascular',
      name: 'label.title.deepveinthrombosis',
      description: 'Deep Vein Thrombosis',
      cautionLevel: 8,
    },
  ];
  constructor() {}
}
