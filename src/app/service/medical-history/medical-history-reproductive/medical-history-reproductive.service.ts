import { Injectable } from '@angular/core';
import { UserMedicalHistoryType } from 'src/app/interface';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryReproductiveService {
  public title: string = 'label.title.reproductivesystem';
  public list: UserMedicalHistoryType[] = [
    {
      type: 'Symptom',
      system: 'Reproductive',
      name: 'label.title.pelvicpain',
      description: 'Pelvic Pain',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Reproductive',
      name: 'label.title.menstrualirregularities',
      description: 'Menstrual Irregularities',
      cautionLevel: 4,
    },
    {
      type: 'Symptom',
      system: 'Reproductive',
      name: 'label.title.unusualvaginaldischarge',
      description: 'Unusual Vaginal Discharge',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Reproductive',
      name: 'label.title.testicularpain',
      description: 'Testicular Pain',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Reproductive',
      name: 'label.title.breastlumpsorpain',
      description: 'Breast Lumps or Pain',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Reproductive',
      name: 'label.title.painduringintercourse',
      description: 'Pain During Intercourse',
      cautionLevel: 5,
    },
    {
      type: 'Symptom',
      system: 'Reproductive',
      name: 'label.title.excessivebleeding',
      description: 'Excessive Bleeding',
      cautionLevel: 6,
    },
    {
      type: 'Symptom',
      system: 'Reproductive',
      name: 'label.title.hotflashes',
      description: 'Hot Flashes',
      cautionLevel: 3,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.endometriosis',
      description: 'Endometriosis',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.polycysticovarysyndrome',
      description: 'Polycystic Ovary Syndrome',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.prostateenlargement',
      description: 'Prostate Enlargement',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.uterinefibroids',
      description: 'Uterine Fibroids',
      cautionLevel: 6,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.ovariancysts',
      description: 'Ovarian Cysts',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.prostatitis',
      description: 'Prostatitis',
      cautionLevel: 5,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.breastcancer',
      description: 'Breast Cancer',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.cervicalcancer',
      description: 'Cervical Cancer',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.testicularcancer',
      description: 'Testicular Cancer',
      cautionLevel: 9,
    },
    {
      type: 'Disease',
      system: 'Reproductive',
      name: 'label.title.erectiledysfunction',
      description: 'Erectile Dysfunction',
      cautionLevel: 4,
    },
  ];
  constructor() {}
}
